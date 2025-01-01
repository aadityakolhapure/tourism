// app/tourist-places/data.ts

export interface PlaceDetails {
  id: string;
  name: string;
  description: string;
  shortDescription: string; // For cards/previews
  category: "fort" | "hillStation" | "religious" | "educational" | "waterfall";
  image: string;
  images: string[]; // Additional images for gallery
  location: string;
  visitingHours: string;
  entryFee: string;
  contactNumber: string;
  bestTimeToVisit: string;
  nearbyFacilities: {
    airports: Array<{ name: string; distance: string }>;
    railwayStations: Array<{ name: string; distance: string }>;
    busStands: Array<{ name: string; distance: string }>;
    hospitals: Array<{ name: string; distance: string }>;
  };
  mapLocation: {
    latitude: number;
    longitude: number;
  };
}

export const touristPlaces: PlaceDetails[] = [
  {
    id: "1",
    name: "Ajinkyatara Fort",
    description: `Ajinkyatara Fort is one of the most prominent forts in Maharashtra, standing at an elevation of 3,300 feet. Built in the 16th century, this fort offers panoramic views of Satara city and played a crucial role in Maratha history. The fort architecture showcases brilliant military planning with its strong walls, numerous gates, and water reservoirs.
  
      Visitors can explore various structures within the fort including ancient temples, water tanks, and strategic viewpoints. The fort's highest point provides a breathtaking 360-degree view of Satara city and surrounding mountains.
  
      The fort holds significant historical importance as it served as a crucial military installation during the Maratha period. Its strategic location made it an important center of power in the region.`,
    shortDescription:
      "A historic fort offering panoramic views of Satara city, known for its military significance and architectural beauty.",
    category: "fort",
    image: "/images/ajinkyatara.jpg",
    images: [
      "/images/ajinkyatara/gate.jpg",
      "/images/ajinkyatara/temple.jpg",
      "/images/ajinkyatara/view.jpg",
    ],
    location: "Satara City, Maharashtra",
    visitingHours: "6:00 AM - 6:00 PM",
    entryFee: "Rs. 20 per person",
    contactNumber: "+91 2162 234567",
    bestTimeToVisit: "October to February",
    nearbyFacilities: {
      airports: [
        { name: "Pune International Airport", distance: "110 km" },
        { name: "Kolhapur Airport", distance: "115 km" },
      ],
      railwayStations: [
        { name: "Satara Railway Station", distance: "4 km" },
        { name: "Koregaon Railway Station", distance: "15 km" },
      ],
      busStands: [
        { name: "Satara Bus Stand", distance: "3 km" },
        { name: "Power House Bus Stop", distance: "1.5 km" },
      ],
      hospitals: [
        { name: "Civil Hospital Satara", distance: "3.5 km" },
        { name: "Mission Hospital", distance: "4 km" },
      ],
    },
    mapLocation: {
      latitude: 17.6714,
      longitude: 73.9989,
    },
  },
  {
    id: "2",
    name: "Kas Plateau",
    description: `Kas Plateau, also known as the 'Valley of Flowers of Maharashtra', is a UNESCO World Heritage site renowned for its unique biodiversity. This plateau exhibits an extraordinary spectacle of wildflowers during the post-monsoon season, with over 850 species of flowering plants documented in this region.
  
      The plateau transforms into a carpet of vibrant colors during the flowering season, typically from late August to early October. This natural phenomenon attracts botanists, photographers, and nature enthusiasts from around the world.
  
      The site is also home to several rare and endemic species of plants, making it crucial for biodiversity conservation. The area requires careful preservation as it represents one of the most unique ecosystems in the Western Ghats.`,
    shortDescription:
      "UNESCO World Heritage site known for its diverse flowering plants and unique biodiversity.",
    category: "hillStation",
    image: "/images/kaas.jpg",
    images: [
      "/images/kaas/flowers1.jpg",
      "/images/kaas/flowers2.jpg",
      "/images/kaas/landscape.jpg",
    ],
    location: "Kas, Satara District",
    visitingHours: "7:00 AM - 6:00 PM",
    entryFee: "Rs. 100 per person",
    contactNumber: "+91 2162 234568",
    bestTimeToVisit: "September to October",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "130 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "25 km" }],
      busStands: [
        { name: "Satara Bus Stand", distance: "22 km" },
        { name: "Kas Village Bus Stop", distance: "1 km" },
      ],
      hospitals: [
        { name: "Rural Hospital, Medha", distance: "15 km" },
        { name: "Civil Hospital Satara", distance: "25 km" },
      ],
    },
    mapLocation: {
      latitude: 17.7207,
      longitude: 73.8237,
    },
  },
  {
    id: "3",
    name: "Thoseghar Waterfalls",
    description: `Thoseghar Waterfalls, located near the village of Thoseghar in the Satara district, is one of the most spectacular waterfalls in Maharashtra. 
      
        Known for its breathtaking cascades, it has a series of waterfalls, with some plunging over 200 meters. Surrounded by lush green hills and dense forests, the place offers a tranquil environment for nature lovers. The monsoon season enhances its beauty, attracting visitors to witness the majestic flow of water.`,
    shortDescription:
      "A stunning series of waterfalls surrounded by lush greenery, ideal for nature enthusiasts.",
    category: "waterfall",
    image: "/images/waterfall.jpg",
    images: [
      "/images/thoseghar/main.jpg",
      "/images/thoseghar/monsoon.jpg",
      "/images/thoseghar/trail.jpg",
    ],
    location: "Thoseghar Village, Satara District, Maharashtra",
    visitingHours: "8:00 AM - 6:00 PM",
    entryFee: "Rs. 30 per person",
    contactNumber: "+91 2162 234576",
    bestTimeToVisit: "June to October",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "145 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "35 km" }],
      busStands: [{ name: "Satara Bus Stand", distance: "32 km" }],
      hospitals: [{ name: "Civil Hospital Satara", distance: "33 km" }],
    },
    mapLocation: {
      latitude: 17.6018,
      longitude: 73.7568,
    },
  },
  {
    id: "4",
    name: "Pratapgad Fort",
    description: `Pratapgad Fort is a historic hill fort in Maharashtra that holds great significance in Maratha history. Built in 1656 under the orders of Chhatrapati Shivaji Maharaj, this fort was the site of the famous Battle of Pratapgad against Afzal Khan.
  
        The fort is strategically located at an altitude of 1,080 meters, offering spectacular views of the Western Ghats. It is renowned for its well-preserved architecture, including massive gates, watchtowers, and temples dedicated to Bhavani Mata.
  
        Visitors can explore the fort's rich history and enjoy the panoramic views of the surrounding mountains and valleys. The fort is a popular destination for trekkers and history enthusiasts.`,
    shortDescription:
      "A historic fort with a rich Maratha legacy and stunning views of the Western Ghats.",
    category: "fort",
    image: "/images/pratapgad.jpg",
    images: [
      "/images/pratapgad/entrance.jpg",
      "/images/pratapgad/temple.jpg",
      "/images/pratapgad/view.jpg",
    ],
    location: "Pratapgad, Satara District",
    visitingHours: "6:00 AM - 6:00 PM",
    entryFee: "Free",
    contactNumber: "+91 2162 234570",
    bestTimeToVisit: "November to February",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "120 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "50 km" }],
      busStands: [{ name: "Mahabaleshwar Bus Stand", distance: "23 km" }],
      hospitals: [{ name: "Rural Hospital, Mahabaleshwar", distance: "20 km" }],
    },
    mapLocation: {
      latitude: 17.9305,
      longitude: 73.5613,
    },
  },
  {
    id: "5",
    name: "Vasota Fort",
    description: `Vasota Fort, also known as Vyaghragad, is a historic hill fort located amidst the dense forests of the Koyna Wildlife Sanctuary in Maharashtra. Known for its stunning natural surroundings, the fort is accessible only via a boat ride across the Shivsagar Lake, followed by a trek through lush greenery.
      
        The fort offers a panoramic view of the Koyna backwaters, the dense forest, and the surrounding Sahyadri ranges. It has a rich history associated with the Maratha Empire and is known for its unspoiled beauty and tranquil environment, making it a popular spot for trekkers and adventure enthusiasts.
      
        Being situated in a wildlife sanctuary, visitors may also spot diverse flora and fauna during their journey to the fort.`,
    shortDescription:
      "A historic hill fort surrounded by dense forests, accessible via a scenic boat ride and trek.",
    category: "fort",
    image: "/images/vasota.jpg",
    images: [
      "/images/vasota/boat.jpg",
      "/images/vasota/trail.jpg",
      "/images/vasota/view.jpg",
    ],
    location: "Koyna Wildlife Sanctuary, Satara District, Maharashtra",
    visitingHours: "6:00 AM - 5:00 PM",
    entryFee: "Rs. 50 per person (sanctuary entry)",
    contactNumber: "+91 2162 234577",
    bestTimeToVisit: "November to February",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "150 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "60 km" }],
      busStands: [{ name: "Bamnoli Bus Stand", distance: "20 km" }],
      hospitals: [
        { name: "Rural Hospital, Bamnoli", distance: "20 km" },
        { name: "Civil Hospital Satara", distance: "60 km" },
      ],
    },
    mapLocation: {
      latitude: 17.6782,
      longitude: 73.7537,
    },
  },
  {
    id: "6",
    name: "Sajjangad Fort",
    description: `Sajjangad Fort, located in the Satara district of Maharashtra, is a historic fort renowned as the final resting place of the saint and social reformer Samarth Ramdas Swami. The fort is perched on a hill at an altitude of approximately 3,000 feet and offers breathtaking views of the surrounding landscape.
      
        Sajjangad is not only a place of historical significance but also a major pilgrimage site. The fort houses a shrine dedicated to Ramdas Swami, along with ancient temples and prayer halls. Visitors often come here to pay their respects, meditate, and experience the serenity of the fort.
      
        The fort is well-maintained and has easy access via a well-paved road and stairs leading to the entrance. It attracts history buffs, spiritual seekers, and nature lovers alike.`,
    shortDescription:
      "A historic fort and spiritual pilgrimage site, known as the final resting place of Samarth Ramdas Swami.",
    category: "fort",
    image: "/images/sajjangad.jpg",
    images: [
      "/images/sajjangad/entrance.jpg",
      "/images/sajjangad/shrine.jpg",
      "/images/sajjangad/view.jpg",
    ],
    location: "Sajjangad, Satara District, Maharashtra",
    visitingHours: "6:00 AM - 8:00 PM",
    entryFee: "Free",
    contactNumber: "+91 2162 234578",
    bestTimeToVisit: "November to February",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "120 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "12 km" }],
      busStands: [{ name: "Satara Bus Stand", distance: "10 km" }],
      hospitals: [{ name: "Civil Hospital Satara", distance: "12 km" }],
    },
    mapLocation: {
      latitude: 17.6833,
      longitude: 73.9901,
    },
  },
  {
    id: "7",
    name: "Kaas Lake",
    description: `Kaas Lake, located near the famous Kaas Plateau in Satara, Maharashtra, is a serene and picturesque waterbody surrounded by lush greenery and rolling hills. It serves as a popular spot for picnics, nature walks, and bird watching, offering visitors a tranquil escape from the hustle and bustle of city life.
  
    The lake is man-made and was constructed to supply water to the nearby regions. Its proximity to the UNESCO World Heritage site, Kaas Plateau, makes it an ideal stop for travelers exploring the 'Valley of Flowers.' The calm waters of the lake reflect the surrounding beauty, creating a mesmerizing view, especially during the monsoon season.
  
    Visitors often enjoy boating, photography, and relaxing by the lakeside while soaking in the pristine natural beauty.`,
    shortDescription:
      "A serene man-made lake near Kaas Plateau, ideal for picnics, nature walks, and bird watching.",
    category: "hillStation",
    image: "/images/kaas.jpg",
    images: [
      "/images/kaas_lake/view1.jpg",
      "/images/kaas_lake/view2.jpg",
      "/images/kaas_lake/sunset.jpg",
    ],
    location: "Kaas, Satara District, Maharashtra",
    visitingHours: "6:00 AM - 6:00 PM",
    entryFee: "Free",
    contactNumber: "+91 2162 234579",
    bestTimeToVisit: "September to February",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "130 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "24 km" }],
      busStands: [
        { name: "Satara Bus Stand", distance: "22 km" },
        { name: "Kaas Village Bus Stop", distance: "2 km" },
      ],
      hospitals: [
        { name: "Rural Hospital, Medha", distance: "14 km" },
        { name: "Civil Hospital Satara", distance: "24 km" },
      ],
    },
    mapLocation: {
      latitude: 17.7097,
      longitude: 73.7993,
    },
  },
  {
    id: "8",
    name: "Dholya Ganpati",
    description: `Dholya Ganpati, situated on the banks of the Krishna River in Wai, Maharashtra, is a revered temple dedicated to Lord Ganesha. Known for its massive Ganpati idol, the temple is an architectural marvel and a significant spiritual center in the region. 
  
    The temple's history dates back to the Peshwa era and is closely associated with the cultural and religious heritage of Satara. The towering idol of Lord Ganpati, painted in bright saffron, is visible from a great distance, earning it the name "Dholya," meaning massive. 
  
    Visitors to Dholya Ganpati enjoy a serene environment perfect for meditation and devotion. The Krishna River flowing nearby adds to the temple's tranquility, making it a favorite destination for locals and tourists alike. The temple complex also hosts various festivals, with Ganesh Chaturthi being celebrated with great enthusiasm.`,
    shortDescription:
      "A historic temple on the banks of the Krishna River featuring a massive Ganpati idol and serene surroundings.",
    category: "religious",
    image: "/images/Maha Ganpati Temple.jpg",
    images: [
      "/images/dholya_ganpati/temple.jpg",
      "/images/dholya_ganpati/idol.jpg",
      "/images/dholya_ganpati/river.jpg",
    ],
    location: "Wai, Satara District, Maharashtra",
    visitingHours: "6:00 AM - 8:00 PM",
    entryFee: "Free",
    contactNumber: "+91 2162 234567",
    bestTimeToVisit: "August to February",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "90 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "30 km" }],
      busStands: [{ name: "Wai Bus Stand", distance: "1 km" }],
      hospitals: [
        { name: "Civil Hospital Satara", distance: "27 km" },
        { name: "Wai Hospital", distance: "1 km" },
      ],
    },
    mapLocation: {
      latitude: 17.6883,
      longitude: 74.0033,
    },
  },
  {
    id: "9",
    name: "Mahabaleshwar",
    description: "Mahabaleshwar, located in the Western Ghats of Maharashtra, is a popular hill station renowned for its breathtaking views, lush green landscapes, and historical significance. The town is famous for its scenic viewpoints, vibrant strawberry farms, and ancient temples, making it a top destination for nature lovers and spiritual seekers alike. Mahabaleshwar is also known for its pleasant climate throughout the year and offers a variety of outdoor activities such as trekking, boating, and sightseeing.",
    "shortDescription": "A serene hill station known for its scenic viewpoints, strawberry farms, and historic temples.",
    category: "hillStation",
    image: "/images/mahableshwar.jpg",
    images: [
      "/images/mahabaleshwar/viewpoint.jpg",
      "/images/mahabaleshwar/strawberry_farm.jpg",
      "/images/mahableshwar/temple.jpg"
    ],
    location: "Mahabaleshwar, Maharashtra",
    visitingHours: "Open all day",
    entryFee: "Free",
    contactNumber: "+91 2168 123456",
    bestTimeToVisit: "March to June, September to December",
    nearbyFacilities: {
      airports: [
        { name: "Pune International Airport", distance: "120 km" }
      ],
      railwayStations: [
        { name: "Wathar Railway Station", distance: "60 km" }
      ],
      "busStands": [
        { name: "Mahabaleshwar Bus Stand", distance: "3 km" }
      ],
      hospitals: [
        { name: "Mahabaleshwar Rural Hospital", distance: "4 km" }
      ]
    },
    mapLocation: {
      latitude: 17.9189,
      longitude: 73.6267
    }
  }
  
];

export const categories = [
  { value: "all", label: "All Places" },
  { value: "fort", label: "Forts" },
  { value: "hillStation", label: "Hill Stations" },
  { value: "religious", label: "Religious" },
  { value: "educational", label: "Educational" },
  { value: "waterfall", label: "Waterfalls" },
  { value: "historical", label: "historical" },
];

// Helper function to get place details by ID
export function getPlaceById(id: string): PlaceDetails | undefined {
  return touristPlaces.find((place) => place.id === id);
}

// Helper function to get places by category
export function getPlacesByCategory(category: string): PlaceDetails[] {
  if (category === "all") return touristPlaces;
  return touristPlaces.filter((place) => place.category === category);
}

// Helper function to search places
export function searchPlaces(query: string): PlaceDetails[] {
  const searchTerm = query.toLowerCase();
  return touristPlaces.filter(
    (place) =>
      place.name.toLowerCase().includes(searchTerm) ||
      place.description.toLowerCase().includes(searchTerm) ||
      place.location.toLowerCase().includes(searchTerm)
  );
}
