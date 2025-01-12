"use client";

import React, { useEffect, useState } from "react";
import { use } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import "../../../app/globals.css";
import {
  MapPin,
  Plane,
  Train,
  Bus,
  Stethoscope,
  Clock,
  Phone,
  ArrowLeft,
} from "lucide-react";
import { getPlaceById } from "../data";

// Types
interface PlaceDetails {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  location: string;
  visitingHours: string;
  entryFee: string;
  contactNumber: string;
  nearbyFacilities: {
    airports: Array<{ name: string; distance: string }>;
    railwayStations: Array<{ name: string; distance: string }>;
    busStands: Array<{ name: string; distance: string }>;
    hospitals: Array<{ name: string; distance: string }>;
  };
  mapLocation: {
    latitude: number;
    longitude: number;
    mapEmbedUrl?: string;
  };
}

export default function PlacePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails | null>(null);

  // Unwrap the params object using React.use()
  const unwrappedParams = use(params);

  useEffect(() => {
    if (unwrappedParams && unwrappedParams.id) {
      const details = getPlaceById(unwrappedParams.id);
      if (details) {
        setPlaceDetails(details);
      }
    }
  }, [unwrappedParams]);

  if (!placeDetails) {
    return (
      <div className="min-h-screen dark:bg-[#0B192C] bg-gray-50 p-8 flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl font-bold mb-4">Place not found</h1>
        <Link href="/tourist-places">
          <Button variant="outline" className="border-[#FF6500] text-[#FF6500]">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Places
          </Button>
        </Link>
      </div>
    );
  }


  const FacilityCard = ({
    title,
    items,
    icon,
  }: {
    title: string;
    items: Array<{ name: string; distance: string }>;
    icon: React.ReactNode;
  }) => (
    <Card className="w-full dark:bg-[#1E3E62] dark:text-white">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          {icon}
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between text-sm">
              <span>{item.name}</span>
              <span className="text-neutral-400">{item.distance}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen dark:bg-[#0B192C] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link href="/tourist-places">
          <Button
            variant="outline"
            className="mb-6 border-[#FF6500] text-[#FF6500]"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Places
          </Button>
        </Link>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image and Basic Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={placeDetails.image}
                alt={placeDetails.name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold mb-2 dark:text-white text-[#0B192C]">
                {placeDetails.name}
              </h1>
              <div className="flex items-center dark:text-neutral-300 text-black mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                {placeDetails.location}
              </div>
              <p className="dark:text-neutral-300 text-black whitespace-pre-line">
                {placeDetails.description}
              </p>
            </div>

            {/* Visiting Information */}
            <Card className="p-6 bg-[#1E3E62] text-white">
              <h2 className="text-xl font-semibold mb-4">
                Visiting Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-neutral-400" />
                  <div>
                    <p className="text-sm text-neutral-400">Visiting Hours</p>
                    <p className="font-medium">{placeDetails.visitingHours}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-neutral-400" />
                  <div>
                    <p className="text-sm text-neutral-400">Entry Fee</p>
                    <p className="font-medium">{placeDetails.entryFee}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-neutral-400" />
                  <div>
                    <p className="text-sm text-neutral-400">Contact</p>
                    <p className="font-medium">{placeDetails.contactNumber}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Nearby Facilities */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Nearby Facilities</h2>
            <FacilityCard
              title="Nearest Airports"
              items={placeDetails.nearbyFacilities.airports}
              icon={<Plane className="h-5 w-5 text-neutral-400" />}
            />
            <FacilityCard
              title="Railway Stations"
              items={placeDetails.nearbyFacilities.railwayStations}
              icon={<Train className="h-5 w-5 text-neutral-400" />}
            />
            <FacilityCard
              title="Bus Stands"
              items={placeDetails.nearbyFacilities.busStands}
              icon={<Bus className="h-5 w-5 text-neutral-400" />}
            />
            <FacilityCard
              title="Hospitals"
              items={placeDetails.nearbyFacilities.hospitals}
              icon={<Stethoscope className="h-5 w-5 text-neutral-400" />}
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <iframe
              src={placeDetails.mapLocation.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
