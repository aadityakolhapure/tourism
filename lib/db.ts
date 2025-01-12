// lib/db.ts
import { Pool, PoolConfig } from 'pg';

function validateAndCreateConfig(): PoolConfig {
  const dbUrl = process.env.NEON_DB_URL;
  
  if (!dbUrl) {
    throw new Error('NEON_DB_URL environment variable is not set');
  }

  try {
    // Parse the connection URL manually to ensure proper handling
    const url = new URL(dbUrl);
    
    // Get username and password from URL
    const username = url.username;
    const password = decodeURIComponent(url.password); // Decode the password
    
    // Remove username and password from hostname
    const hostWithPort = url.host;
    const database = url.pathname.slice(1); // Remove leading slash
    
    // Construct config object explicitly
    const config: PoolConfig = {
      user: username,
      password: password,
      host: hostWithPort.split(':')[0],
      port: parseInt(hostWithPort.split(':')[1] || '5432'),
      database: database,
      ssl: {
        rejectUnauthorized: true
      },
      connectionTimeoutMillis: 5000,
      max: 20,
      idleTimeoutMillis: 30000
    };

    // Validate required fields
    if (!config.password || typeof config.password !== 'string') {
      throw new Error('Invalid database password configuration');
    }

    if (!config.user || !config.host || !config.database) {
      throw new Error('Missing required database configuration parameters');
    }

    return config;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Invalid database configuration: ${error.message}`);
    }
    throw new Error('Invalid database configuration');
  }
}

let pool: Pool;

try {
  const config = validateAndCreateConfig();
  pool = new Pool(config);
  
  // Test the connection immediately
  pool.query('SELECT 1')
    .then(() => console.log('Database connection established successfully'))
    .catch(err => console.error('Initial connection test failed:', err));
} catch (error) {
  console.error('Failed to initialize database pool:', error);
  throw error;
}

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export const query = async (text: string, params?: any[]) => {
  let client;
  try {
    client = await pool.connect();
    const result = await client.query(text, params);
    return result.rows;
  } catch (err) {
    const error = err as Error;
    console.error("Database error:", {
      message: error.message,
      stack: error.stack,
      code: (error as any).code
    });
    
    // Specific error handling
    if (error.message.includes('password')) {
      throw new Error('Database authentication failed: Invalid password configuration');
    } else if (error.message.includes('SASL')) {
      throw new Error('Database authentication failed: SASL authentication error');
    } else {
      throw new Error(`Database query failed: ${error.message}`);
    }
  } finally {
    if (client) {
      client.release();
    }
  }
};