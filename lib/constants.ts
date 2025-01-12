export const PLACE_DETAILS: Record<
  string,
  {
    name: string;
    description: string;
    bestTimeToVisit: string;
    thingsToCarry: string[];
    nearbyAttractions: string[];
    travelTips: string[];
    nearestAirport: string;
    nearestRailway: string;
    nearestBusStop: string;
    mustVisit: string[];
    timings: string;
    entryFee: string;
    tips: string[];
  }
> = {
  "Ajinkyatara Fort": {
    name: "Ajinkyatara Fort",
    description: "Historic fort offering panoramic views of Satara city",
    bestTimeToVisit: "October to February",
    thingsToCarry: ["Water", "Comfortable shoes", "Camera", "Snacks"],
    nearbyAttractions: ["Satara City", "Yawateshwar Temple"],
    travelTips: ["Visit early morning", "Wear comfortable clothing"],
    nearestAirport: "Pune Airport (120 km)",
    nearestRailway: "Satara Railway Station (3 km)",
    nearestBusStop: "Satara Bus Stand (2.5 km)",
    mustVisit: ["Sunset Point", "Temple Complex", "Fort Walls"],
    timings: "6:00 AM to 6:00 PM",
    entryFee: "Free",
    tips: ["Visit early morning", "Carry water"],
  },
  // Add other places similarly...
};
