import { Client } from '@googlemaps/google-maps-services-js';

const client = new Client({});

export async function calculateDistance(origin: string, destination: string): Promise<string> {
  try {
    const response = await client.distancematrix({
      params: {
        origins: [origin],
        destinations: [destination + ', Satara, Maharashtra, India'],
        key: process.env.GOOGLE_MAPS_API_KEY!,
      },
    });

    if (response.data.rows[0].elements[0].status === 'OK') {
      const distance = response.data.rows[0].elements[0].distance.text;
      const duration = response.data.rows[0].elements[0].duration.text;
      return `${distance} (approximately ${duration} by road)`;
    }

    return 'Distance calculation unavailable';
  } catch (error) {
    console.error('Error calculating distance:', error);
    return 'Distance calculation unavailable';
  }
}
