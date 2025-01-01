"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Types for our tourist places
type PlaceCategory =
  | "fort"
  | "hillStation"
  | "religious"
  | "educational"
  | "waterfall";

interface TouristPlace {
  id: string;
  name: string;
  description: string;
  category: PlaceCategory;
  image: string;
  location: string;
}

const LoaderSkeleton = () => (
  <div className="min-h-screen bg-neutral-50 p-8 animate-pulse">
    <div className="rounded-full h-8 w-8 mr-32 bg-gray-200"></div>
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-row justify-center">
        <div className="h-16 bg-gray-200 rounded w-3/4 mb-8"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded w-full md:w-[200px]"></div>
      </div>
      <div className="text-sm text-neutral-600 mb-4 h-4 bg-gray-200 rounded w-1/4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-white animate-pulse">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-3"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-2/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="px-4 py-2 text-center text-sm font-medium bg-gray-200 rounded w-32"></div>
            </div>
          </div>
        </div>
        <div className="card bg-white animate-pulse">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-3"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-2/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="px-4 py-2 text-center text-sm font-medium bg-gray-200 rounded w-32"></div>
            </div>
          </div>
        </div>
        <div className="card bg-white animate-pulse">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-3"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-2/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="px-4 py-2 text-center text-sm font-medium bg-gray-200 rounded w-32"></div>
            </div>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div>
      <div className="flex justify-center items-center gap-2 mt-8">
        <div className="px-4 py-2 text-center text-sm font-medium bg-gray-200 rounded w-8"></div>
        <div className="flex gap-2">
          <div className="h-8 w-8 bg-gray-200 rounded"></div>
          <div className="h-8 w-8 bg-gray-200 rounded"></div>
        </div>
        <div className="px-4 py-2 text-center text-sm font-medium bg-gray-200 rounded w-8"></div>
      </div>
      <div className="text-center py-12">
        <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
      </div>
    </div>
  </div>
);

const touristPlaces: TouristPlace[] = [
  {
    id: "1",
    name: "Ajinkyatara Fort",
    description: "A historic fort offering panoramic views of Satara city",
    category: "fort",
    image: "/images/Ajinkyatara.jpg",
    location: "Satara City",
  },
  {
    id: "2",
    name: "Kas Plateau",
    description:
      "UNESCO World Heritage site known for its diverse flowering plants",
    category: "hillStation",
    image: "/images/kaas.jpg",
    location: "Kas",
  },
  {
    id: "3",
    name: "Thoseghar Waterfalls",
    description: "Series of scenic waterfalls in the Western Ghats",
    category: "waterfall",
    image: "/images/waterfall.jpg",
    location: "Thoseghar",
  },
  {
    id: "4",
    name: "Pratapgad Fort",
    description:
      "A majestic fort in Jawali, showcases Shivaji’s valor and breathtaking Sahyadri views",
    category: "fort",
    image: "/images/pratapgad.jpg",
    location: "Jawali",
  },
  {
    id: "5",
    name: "Vasota",
    description:
      "An ancient hill fort famous for treaking nestled at 1171 meters within the dense forests of Koyna Wildlife Sanctuary.",
    category: "fort",
    image: "/images/vasota.jpg",
    location: "Bamnoli village",
  },
  {
    id: "6",
    name: "Sajjangad Fort",
    description:
      "Spiritual and historical fort, final resting place of Sant Ramdas",
    category: "religious",
    image: "/images/sajjangad.jpg",
    location: "Satara",
  },
  {
    id: "7",
    name: "Kaas Lake",
    description: "Beautiful lake near the Kaas Plateau",
    category: "hillStation",
    image: "/images/kaas.webp",
    location: "Kas",
  },
  {
    id: "8",
    name: "Dholya Ganpati",
    description:
      "Is a revered temple dedicated to Lord Ganesha, known for its massive idol and serene riverside location",
    category: "religious",
    image: "/images/Maha Ganpati Temple.jpg",
    location: "Wai",
  },
  // Add more places as needed
];

const categories = [
  { value: "all", label: "All Places" },
  { value: "fort", label: "Forts" },
  { value: "hillStation", label: "Hill Stations" },
  { value: "religious", label: "Religious" },
  { value: "educational", label: "Educational" },
  { value: "waterfall", label: "Waterfalls" },
];

const ITEMS_PER_PAGE = 9;

export default function TouristPlaces() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPlaces = touristPlaces.filter((place) => {
    const matchesSearch =
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || place.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination calculations
  const totalItems = filteredPlaces.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPlaces = filteredPlaces.slice(startIndex, endIndex);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoaderSkeleton />
      ) : (
        <div className="min-h-screen bg-neutral-50 p-8">
          <div className="rounded-full h-8 w-8 mr-32 bg-black hover:bg-gray-200 hover:text-gray-800 text-white">
            <a href="/">
              <svg
                className="w-8 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M5 12l4-4m-4 4 4 4"
                />
              </svg>
            </a>
          </div>
          {/* Header Section */}
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-row justify-center">
              <h1 className="text-4xl font-bold mb-8 text-center">
                Discover Tourist Places in Satara
              </h1>
            </div>

            {/* Search and Filter Section */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-neutral-400" />
                <Input
                  placeholder="Search places..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Results Summary */}
            <div className="text-sm text-neutral-600 mb-4">
              Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of{" "}
              {totalItems} places
            </div>

            {/* Places Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPlaces.map((place) => (
                <Card
                  key={place.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 bg-neutral-200">
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{place.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 mb-4">{place.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-500">
                        {place.location}
                      </span>
                      <Link href={`/tourist-places/${place.id}`}>
                        <Button variant="outline">Learn More</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNumber) => (
                      <Button
                        key={pageNumber}
                        variant={
                          pageNumber === currentPage ? "default" : "outline"
                        }
                        onClick={() => handlePageChange(pageNumber)}
                        className="w-8 h-8"
                      >
                        {pageNumber}
                      </Button>
                    )
                  )}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}

            {filteredPlaces.length === 0 && (
              <div className="text-center py-12">
                <p className="text-neutral-600">
                  No places found matching your search criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
