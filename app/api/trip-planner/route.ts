// app/api/trip-planner/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { generatePDF } from "@/lib/pdf-generator";
import { sendTripPlanEmail } from "@/lib/email";
import { join } from "path";
import { writeFile, mkdir } from "fs/promises";
import { Client } from "@googlemaps/google-maps-services-js";
import { TripPlan } from "@/types/index";

const prisma = new PrismaClient();
const googleMapsClient = new Client({});

// Validation types
interface TripPlanRequest {
  email: string;
  placeToVisit: string;
  tripType: "family" | "friends" | "solo" | "couple";
  transportation: "own-vehicle" | "public-transport";
  currentLocation: string;
}

// Import place details from constants
import { PLACE_DETAILS } from "@/lib/constants";

async function savePDFToStorage(
  buffer: Buffer,
  filename: string
): Promise<string> {
  try {
    // Create uploads directory if it doesn't exist
    const uploadDir = join(process.cwd(), "public", "trip-plans");
    await mkdir(uploadDir, { recursive: true });

    // Save file
    const filePath = join(uploadDir, filename);
    await writeFile(filePath, buffer);

    // Return public URL
    return `/trip-plans/${filename}`;
  } catch (error) {
    console.error("Error saving PDF:", error);
    throw new Error("Failed to save PDF file");
  }
}

async function calculateDistance(
  origin: string,
  destination: string
): Promise<string> {
  try {
    const response = await googleMapsClient.distancematrix({
      params: {
        origins: [origin],
        destinations: [`${destination}, Satara, Maharashtra, India`],
        key: process.env.GOOGLE_MAPS_API_KEY!,
      },
    });

    if (response.data.rows[0]?.elements[0]?.status === "OK") {
      const { distance, duration } = response.data.rows[0].elements[0];
      return `${distance.text} (approximately ${duration.text} by road)`;
    }

    throw new Error("Unable to calculate distance");
  } catch (error) {
    console.error("Error calculating distance:", error);
    return "Distance calculation unavailable";
  }
}

function validateRequest(data: any): data is TripPlanRequest {
  const requiredFields: (keyof TripPlanRequest)[] = [
    "email",
    "placeToVisit",
    "tripType",
    "transportation",
    "currentLocation",
  ];

  // Check required fields
  for (const field of requiredFields) {
    if (!data[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new Error("Invalid email format");
  }

  // Validate trip type
  const validTripTypes = ["family", "friends", "solo", "couple"];
  if (!validTripTypes.includes(data.tripType)) {
    throw new Error("Invalid trip type");
  }

  // Validate transportation
  const validTransportation = ["own-vehicle", "public-transport"];
  if (!validTransportation.includes(data.transportation)) {
    throw new Error("Invalid transportation type");
  }

  // Validate place to visit
  if (!Object.keys(PLACE_DETAILS).includes(data.placeToVisit)) {
    throw new Error("Invalid destination");
  }

  return true;
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Validate request data
    if (!validateRequest(data)) {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 }
      );
    }

    // Get place details
    const placeDetails = PLACE_DETAILS[data.placeToVisit];
    if (!placeDetails) {
      return NextResponse.json(
        { error: "Invalid destination selected" },
        { status: 400 }
      );
    }

    // Calculate distance
    const distance = await calculateDistance(
      data.currentLocation,
      data.placeToVisit
    );

    // Generate PDF
    const pdfBuffer = await generatePDF({
      ...data,
      distance,
      placeDetails,
    });

    // Generate unique filename
    const filename = `trip-plan-${Date.now()}.pdf`;

    // Save PDF to storage
    const pdfUrl = await savePDFToStorage(pdfBuffer, filename);

    // Save to database
    const tripPlan = await prisma.tripPlan.create({
      data: {
        email: data.email,
        placeToVisit: data.placeToVisit,
        tripType: data.tripType,
        transportation: data.transportation,
        currentLocation: data.currentLocation,
        pdfUrl,
      },
    });

    // Send email
    await sendTripPlanEmail({
      to: data.email,
      tripPlan: tripPlan as TripPlan,
      pdfBuffer,
    });

    return NextResponse.json({
      message: "Trip plan created successfully",
      tripPlanId: tripPlan.id,
      pdfUrl,
    });
  } catch (error) {
    console.error("Error processing trip plan:", error);

    // Handle specific error types
    if (error instanceof Error) {
      if (error.message.includes("Missing required field")) {
        return NextResponse.json({ error: error.message }, { status: 400 });
      }

      if (error.message.includes("Invalid")) {
        return NextResponse.json({ error: error.message }, { status: 400 });
      }
    }

    // Generic error response
    return NextResponse.json(
      { error: "Failed to process trip plan" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { error: "Email parameter is required" },
        { status: 400 }
      );
    }

    // Get all trip plans for the email
    const tripPlans = await prisma.tripPlan.findMany({
      where: { email },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ tripPlans });
  } catch (error) {
    console.error("Error fetching trip plans:", error);
    return NextResponse.json(
      { error: "Failed to fetch trip plans" },
      { status: 500 }
    );
  }
}
