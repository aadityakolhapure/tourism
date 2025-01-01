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
import Footer from "@/components/footer";

// Types for our tourist places
type PlaceCategory =
  | "fort"
  | "hillStation"
  | "religious"
  | "educational"
  | "waterfall"
  | "historical";

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
      "A revered temple dedicated to Lord Ganesha, known for its massive idol and serene riverside location",
    category: "religious",
    image: "/images/Maha Ganpati Temple.jpg",
    location: "Wai",
  },
  {
    id: "9",
    name: "Mahableshwar",
    description:
      "A popular hill station in Maharashtra, known for its scenic views, lush greenery, and tourist attractions",
    category: "hillStation",
    image: "/images/mahableshwar.jpg",
    location: "Mahableshwar",
  },

  {
    id: "10",
    name: "Panchgani",
    description:
      "A charming hill station in Maharashtra, famous for its cool climate, scenic viewpoints, and making it a popular destination for nature lovers",
    category: "hillStation",
    image: "/images/PANCHGANI.jpg",
    location: "Mahableshwar",
  },

  {
    id: "11",
    name: "Tapola",
    description:
      "A Lake known for its tranquil Shivsagar Lake, boating activities, and picturesque landscapes, making it a peaceful retreat for nature enthusiasts",
    category: "hillStation",
    image: "/images/tapola.jpg",
    location: "Mahableshwar",
  },

  {
    id: "12",
    name: "Bamnoli",
    description:
      "A peaceful village located near Tapola in Maharashtra, known for its tranquil lakeside views, and boating opportunities",
    category: "hillStation",
    image: "/images/bambolio.webp",
    location: "Tapola",
  },

  {
    id: "13",
    name: "Char Bhinti",
    description:
      "A historical location, known for its ancient fortifications and scenic beauty, offering a glimpse into the region's past while being a popular spot for trekking and exploring the natural landscape",
    category: "historical",
    image: "/images/char.webp",
    location: "Satara",
  },
  {
    id: "14",
    name: "Jarandeshwar",
    description:
      "A prominent hill near Satara, Maharashtra, known for its picturesque landscapes, trekking opportunities, and the historic Jarandeshwar temple dedicated to Lord Shiva, attracting nature enthusiasts and pilgrims alike",
    category: "religious",
    image: "/images/jarandeshwar.jpg",
    location: "Satara",
  },
  {
    id: "15",
    name: "Baramotichi vihir",
    description:
      "An ancient stepwell built in the 17th century, known for its unique circular design, intricate architecture, and historical significance, making it a fascinating tourist attraction",
    category: "historical",
    image: "/images/bara.jpg",
    location: "Limb",
  },
  {
    id: "16",
    name: "Chalkewadi Windmill",
    description:
      "A vast plateau dotted with wind turbines, offering a stunning blend of renewable energy marvels and breathtaking natural beauty, popular among tourists for its serene and picturesque landscapes.",
    category: "educational",
    image: "/images/chalk.jpg",
    location: "Thoseghar",
  },
  {
    id: "17",
    name: "Pali",
    description:
      "A revered site dedicated to Lord Khandoba, known for its spiritual significance, serene surroundings, and vibrant annual fairs that attract devotees and tourists alike",
    category: "religious",
    image: "/images/pali.jpg",
    location: "Pali",
  },
  {
    id: "18",
    name: "Konya Dam",
    description:
      "One of India's largest dams, renowned for its hydroelectric power generation, scenic surroundings, and proximity to the lush Koyna Wildlife Sanctuary, making it a popular spot for nature",
    category: "educational",
    image: "/images/konya.jpg",
    location: "Konya Nagar",
  },
  {
    id: "19",
    name: "Yamai Devi Temple",
    description:
      "A revered Hindu shrine dedicated to Goddess Yamai, known for its hilltop location offering panoramic views, exquisite architecture, and religious significance, attracting devotees and tourists alike",
    category: "religious",
    image: "/images/yami.jpg",
    location: "Aundh",
  },
  {
    id: "20",
    name: "Pateshwar Temple",
    description:
      "An ancient temple complex known for its serene setting, intricate stone carvings, and numerous Shiva Lingas, making it a significant pilgrimage site and a haven for history and nature enthusiasts",
    category: "religious",
    image: "/images/pateshwar.avif",
    location: "Satara",
  },
  {
    id: "21",
    name: "Yateshwar Temple",
    description:
      "A serene hilltop shrine dedicated to Lord Shiva, known for its peaceful ambiance, panoramic views of the surrounding valleys, and significance as a spiritual retreat",
    category: "religious",
    image: "/images/yawateshwar.jpg",
    location: "Satara",
  },
  {
    id: "22",
    name: "Pritisangam",
    description:
      "A confluence of the Krishna and Koyna rivers, known for its tranquil beauty, spiritual significance, and a memorial dedicated to Yashwantrao Chavan, making it a serene spot for visitors",
    category: "educational",
    image: "/images/pritisangam.jpg",
    location: "Karad",
  },
  {
    id: "23",
    name: "Sangam mauli temple",
    description:
      "A revered Hindu temple dedicated to Goddess Mauli, known for its tranquil setting at the confluence of the Krishna and Koyna rivers, attracting devotees and nature lovers alike",
    category: "religious",
    image: "/images/mauli.jpg",
    location: "Satara",
  },
  {
    id: "24",
    name: "Shikhar Shingnapur Temple",
    description:
      "A renowned temple dedicated to Lord Shiva, situated on a hilltop offering stunning views, and is famous for its peaceful atmosphere and religious significance",
    category: "religious",
    image: "/images/shikhar.webp",
    location: "Satara",
  },
  {
    id: "25",
    name: "Gondavala temple satara",
    description:
      "a revered temple dedicated to Lord Khandoba, known for its spiritual significance, scenic surroundings, and vibrant fairs held annually, attracting many devotees",
    category: "religious",
    image: "/images/gond.jpg",
    location: "Gondavala",
  },
  {
    id: "26",
    name: "Vajrai Waterfall",
    description:
      "One of the highest waterfalls in India, known for its breathtaking beauty, lush green surroundings, and serene ambiance, making it a popular tourist destination for nature lovers and adventure seekers.",
    category: "waterfall",
    image: "/images/Vajrai.jpg",
    location: "Kaas",
  },
];

const categories = [
  { value: "all", label: "All Places" },
  { value: "fort", label: "Forts" },
  { value: "hillStation", label: "Hill Stations" },
  { value: "religious", label: "Religious" },
  { value: "educational", label: "Educational" },
  { value: "waterfall", label: "Waterfalls" },
  { value: "historical", label: "historical" },
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
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoaderSkeleton />
      ) : (
        <div className="min-h-screen bg-neutral-50 p-8 dark:bg-[#0B192C]">
          <div className="rounded-full h-8 w-8 mr-32 bg-[#000000] hover:bg-[#FF6500] hover:text-white text-white hover:bg-white">
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
              <h1 className="text-4xl font-bold mb-8 text-[#1E3E62] text-center dark:text-[#2472b4]">
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
                <SelectTrigger className="w-full md:w-[200px] bg-[#FF6500] text-white">
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
                    <CardTitle className="text-[#1E3E62] dark:text-[#2472b4]">
                      {place.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 mb-4 dark:text-gray-200">
                      {place.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5 inline-block"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 8.5c0 3.58 4 8.5 7 13 3-4.5 7-9.42 7-13 0-3.37-3.13-6.5-7-6.5zm0 10c-1.38 0-2.5-1.12-2.5-2.5S10.62 7 12 7s2.5 1.12 2.5 2.5S13.38 12 12 12z" />
                        </svg>
                        <span className="text-sm text-neutral-500 dark:text-gray-200 inline-block">
                          {place.location}
                        </span>
                      </div>

                      <Link href={`/tourist-places/${place.id}`}>
                        <Button
                          variant="outline"
                          className="bg-[#FF6500] hover:bg-[#1E3E62]"
                        >
                          Learn More
                        </Button>
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
      <Footer />
    </>
  );
}
