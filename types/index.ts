export interface TripPlan {
    id: string;
    email: string;
    placeToVisit: string;
    tripType: 'family' | 'friends' | 'solo' | 'couple';
    transportation: 'own-vehicle' | 'public-transport';
    currentLocation: string;
    createdAt: Date;
    pdfUrl: string | null;
  }