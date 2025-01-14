// app/tourist-places/data.ts

export interface PlaceDetails {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  category: "fort" | "hillStation" | "religious" | "educational" | "waterfall" | "historical";
  image: string;
  images: string[];
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
    mapEmbedUrl: string;
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
    entryFee: "Free",
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
      latitude: 17.672361,
      longitude: 73.995389,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21503.79931211168!2d74.00274154314307!3d17.679945639926338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc239841ffaf9fb%3A0xb28ae23e5c9a855f!2sAjinkyatara%20Fort!5e0!3m2!1sen!2sin!4v1736668814204!5m2!1sen!2sin",
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
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15202.24785481064!2d73.81185998579373!3d17.718141230502283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2156bb1b31937%3A0xa05920673b65bbde!2sKaas%20plateau!5e0!3m2!1sen!2sin!4v1736669526563!5m2!1sen!2sin"
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
    entryFee: "Rs. 50 per person",
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
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30424.800292175198!2d73.83568232338915!3d17.597983928356836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc23d6315711a61%3A0x5215eb3b3e638f0c!2zVGhvc2VnaGFyIFdhdGVyZmFsbCAo4KS44KSC4KSv4KWB4KSV4KWN4KSkIOCkteCkqOCkteCljeCkr-CkteCkuOCljeCkpeCkvuCkquCkqCDgpLjgpK7gpL_gpKTgpYAsIOCkoOCli-CkuOClh-CkmOCksCzgpLjgpL7gpKTgpL7gpLDgpL4p!5e0!3m2!1sen!2sin!4v1736669634294!5m2!1sen!2sin"
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
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.8935411994094!2d73.57562051031549!3d17.93711868297607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb8fc57af9f1%3A0xcd7f0daa3666eb!2sPratapgad%20Fort!5e0!3m2!1sen!2sin!4v1736669761540!5m2!1sen!2sin"
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
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15206.825333886438!2d73.6783830871582!3d17.664062500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2139e4cd4a975%3A0x6095bf7697d475b9!2sVasota%20Fort!5e0!3m2!1sen!2sin!4v1736669947436!5m2!1sen!2sin"
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
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.034761179436!2d73.91320831030801!3d17.648512583214146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc23c22937f73d1%3A0xaa0577a365ea3af6!2sSajjangad%20Fort!5e0!3m2!1sen!2sin!4v1736670030839!5m2!1sen!2sin"
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
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15201.880897425166!2d73.79933953579554!3d17.722469580445058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2153ded9d2a59%3A0x5777ae3e42078ca9!2sKaas%20Lake!5e0!3m2!1sen!2sin!4v1736670113006!5m2!1sen!2sin"
    },
  },
  {
    id: "8",
    name: "Mahaganapati",
    description: `Mahaganapati, situated on the banks of the Krishna River in Wai, Maharashtra, is a revered temple dedicated to Lord Ganesha. Known for its massive Ganpati idol, the temple is an architectural marvel and a significant spiritual center in the region. 
  
    The temple's history dates back to the Peshwa era and is closely associated with the cultural and religious heritage of Satara. The towering idol of Lord Ganpati, painted in bright saffron, is visible from a great distance, earning it the name "Dholya," meaning massive. 
  
    Visitors to Mahaganapati enjoy a serene environment perfect for meditation and devotion. The Krishna River flowing nearby adds to the temple's tranquility, making it a favorite destination for locals and tourists alike. The temple complex also hosts various festivals, with Ganesh Chaturthi being celebrated with great enthusiasm.`,
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
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.561572284636!2d73.88359861031587!3d17.952591632963387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc25d20e07ee50b%3A0x48282850814168e2!2sMahaganapati%20Temple!5e0!3m2!1sen!2sin!4v1736670248037!5m2!1sen!2sin"
    },
  },
  {
    id: "9",
    name: "Mahabaleshwar",
    description:
      "Mahabaleshwar, located in the Western Ghats of Maharashtra, is a popular hill station renowned for its breathtaking views, lush green landscapes, and historical significance. The town is famous for its scenic viewpoints, vibrant strawberry farms, and ancient temples, making it a top destination for nature lovers and spiritual seekers alike. Mahabaleshwar is also known for its pleasant climate throughout the year and offers a variety of outdoor activities such as trekking, boating, and sightseeing.",
    shortDescription:
      "A serene hill station known for its scenic viewpoints, strawberry farms, and historic temples.",
    category: "hillStation",
    image: "/images/mahableshwar.jpg",
    images: [
      "/images/mahabaleshwar/viewpoint.jpg",
      "/images/mahabaleshwar/strawberry_farm.jpg",
      "/images/mahableshwar/temple.jpg",
    ],
    location: "Mahabaleshwar, Maharashtra",
    visitingHours: "Open all day",
    entryFee: "Free",
    contactNumber: "+91 2168 123456",
    bestTimeToVisit: "March to June, September to December",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "120 km" }],
      railwayStations: [{ name: "Wathar Railway Station", distance: "60 km" }],
      busStands: [{ name: "Mahabaleshwar Bus Stand", distance: "3 km" }],
      hospitals: [{ name: "Mahabaleshwar Rural Hospital", distance: "4 km" }],
    },
    mapLocation: {
      latitude: 17.9189,
      longitude: 73.6267,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30369.086044300268!2d73.6281391239351!3d17.92582101104018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2655313cba1bb%3A0xca8196c7aa20a0a8!2sMahabaleshwar%2C%20Maharashtra%20412806!5e0!3m2!1sen!2sin!4v1736670371389!5m2!1sen!2sin"
    },
  },
  {
    id: "10",
    name: "Panchgani",
    description:
      "Panchgani, nestled in the Western Ghats of Maharashtra, is a charming hill station celebrated for its picturesque valleys, pleasant climate, and lush greenery. Known for its colonial-era architecture, strawberry farms, and educational institutions, Panchgani is a popular destination for families, nature enthusiasts, and adventurers. The town offers stunning viewpoints, vibrant bazaars, and tranquil walking trails, making it a perfect retreat from city life.",
    shortDescription:
      "A tranquil hill station famous for its viewpoints, strawberry farms, and colonial charm.",
    category: "hillStation",
    image: "/images/panchgani.jpg",
    images: [
      "/images/panchgani/table_land.jpg",
      "/images/panchgani/strawberry_farm.jpg",
      "/images/panchgani/parsi_point.jpg",
    ],
    location: "Panchgani, Maharashtra",
    visitingHours: "Open all day",
    entryFee: "Free",
    contactNumber: "+91 2168 654321",
    bestTimeToVisit: "March to June, September to December",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "110 km" }],
      railwayStations: [{ name: "Wathar Railway Station", distance: "45 km" }],
      busStands: [{ name: "Panchgani Bus Stand", distance: "2 km" }],
      hospitals: [{ name: "Panchgani Hospital", distance: "3 km" }],
    },
    mapLocation: {
      latitude: 17.9245,
      longitude: 73.8007,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30368.98452845476!2d73.77659407393605!3d17.926413061009036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2660326292d1b%3A0x7b364992c7d16bfc!2sPanchgani%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1736670541116!5m2!1sen!2sin"
    },
  },
  {
    id: "11",
    name: "Tapola",
    description:
      "Tapola, often referred to as the 'Mini Kashmir' of Maharashtra, is a serene village located near Mahabaleshwar. It is known for its stunning natural beauty, tranquil surroundings, and the vast Shivsagar Lake. Popular among adventure enthusiasts and nature lovers, Tapola offers opportunities for water sports, camping, and exploring picturesque trails. The village is a perfect getaway for those seeking peace and a closer connection with nature.",
    shortDescription:
      "A serene village famous for Shivsagar Lake, lush greenery, and water sports.",
    category: "hillStation",
    image: "/images/tapola.jpg",
    images: [
      "/images/tapola/shivsagar_lake.jpg",
      "/images/tapola/boat_rides.jpg",
      "/images/tapola/camping.jpg",
    ],
    location: "Tapola, Maharashtra",
    visitingHours: "Open all day",
    entryFee: "Free",
    contactNumber: "+91 2168 987654",
    bestTimeToVisit: "October to May",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "140 km" }],
      railwayStations: [{ name: "Wathar Railway Station", distance: "75 km" }],
      busStands: [{ name: "Mahabaleshwar Bus Stand", distance: "25 km" }],
      hospitals: [{ name: "Mahabaleshwar Rural Hospital", distance: "26 km" }],
    },
    mapLocation: {
      latitude: 17.8485,
      longitude: 73.6701,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.5926203673266!2d73.73890396031099!3d17.763824183118906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc26c992942b8f3%3A0x6ef5c00ee4aafb4e!2sTapola%2C%20Maharashtra%20412806!5e0!3m2!1sen!2sin!4v1736670677265!5m2!1sen!2sin"
    },
  },
  {
    id: "12",
    name: "Bamnoli",
    description:
      "Bamnoli, a quaint village near Satara, Maharashtra, is a hidden gem known for its pristine natural beauty and peaceful ambiance. Situated on the banks of the Shivsagar Lake, Bamnoli serves as a gateway to explore the scenic backwaters of Koyna Dam. It is an ideal destination for boating, trekking, and picnics. The serene atmosphere, lush greenery, and stunning lake views make Bamnoli a perfect spot for nature enthusiasts and weekend getaways.",
    shortDescription:
      "A peaceful village known for its backwaters, boating, and natural beauty.",
    category: "hillStation",
    image: "/images/bambolio.webp",
    images: [
      "/images/bamnoli/shivsagar_backwaters.jpg",
      "/images/bamnoli/boat_rides.jpg",
      "/images/bamnoli/trekking_trails.jpg"
    ],
    location: "Bamnoli, Maharashtra",
    visitingHours: "Open all day",
    entryFee: "Free",
    contactNumber: "+91 2168 456789",
    bestTimeToVisit: "October to May",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "150 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "45 km" }],
      busStands: [{ name: "Satara Bus Stand", distance: "40 km" }],
      hospitals: [{ name: "Satara Civil Hospital", distance: "42 km" }]
    },
    mapLocation: {
      latitude: 17.7696,
      longitude: 73.7562,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1900.122862664997!2d73.75770365630954!3d17.73305734578608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc214ae05d31087%3A0x326cbaf25dd5b0be!2sBamnoli%2C%20Maharashtra%20415013!5e0!3m2!1sen!2sin!4v1736670781938!5m2!1sen!2sin"
    }
  },
  {
    id: "13",
    name: "Char Bhinti",
    description:
      "Char Bhinti, located in Satara, Maharashtra, is a historic monument that stands as a testament to the region's rich heritage. Built during the Maratha era, this structure served as a watchtower and holds significant historical importance. Perched on a hill, Char Bhinti offers panoramic views of Satara city and its surroundings. It is a popular spot for history enthusiasts and locals looking to enjoy serene sunsets and breathtaking views.",
    shortDescription:
      "A historic watchtower offering panoramic views of Satara and its surroundings.",
    category: "historical",
    image: "/images/char.webp",
    images: [
      "/images/char_bhinti/view.jpg",
      "/images/char_bhinti/structure.jpg",
      "/images/char_bhinti/sunset.jpg"
    ],
    location: "Satara, Maharashtra",
    visitingHours: "6:00 AM to 6:00 PM",
    entryFee: "Free",
    contactNumber: "+91 2162 123456",
    bestTimeToVisit: "October to March",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "120 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "6 km" }],
      busStands: [{ name: "Satara Bus Stand", distance: "4 km" }],
      hospitals: [{ name: "Satara Civil Hospital", distance: "5 km" }]
    },
    mapLocation: {
      latitude: 17.6958,
      longitude: 73.9933,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.2967019705147!2d74.00011841030893!3d17.683438583185154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc239f363bc60bf%3A0xdec93e9c18eeb568!2sChar%20Bhinti!5e0!3m2!1sen!2sin!4v1736672815419!5m2!1sen!2sin"
    }
  },
  {
    id: "14",
    name: "Jarandeshwar",
    description:
      "Jarandeshwar, located near Satara, Maharashtra, is a serene destination known for its scenic beauty and the ancient Jarandeshwar Temple dedicated to Lord Shiva. The site is surrounded by lush green landscapes and is a popular spot for trekkers and nature lovers. The nearby hills offer panoramic views and tranquil surroundings, making it a perfect getaway for spiritual seekers and outdoor enthusiasts.",
    shortDescription:
      "A tranquil destination known for its ancient Shiva temple and scenic trekking spots.",
    category: "religious",
    image: "/images/jarandeshwar.jpg",
    images: [
      "/images/jarandeshwar/temple.jpg",
      "/images/jarandeshwar/hills.jpg",
      "/images/jarandeshwar/trekking.jpg"
    ],
    location: "Jarandeshwar, Maharashtra",
    visitingHours: "6:00 AM to 8:00 PM",
    entryFee: "Free",
    contactNumber: "+91 2162 456789",
    bestTimeToVisit: "October to February",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "110 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "8 km" }],
      busStands: [{ name: "Satara Bus Stand", distance: "6 km" }],
      hospitals: [{ name: "Satara Civil Hospital", distance: "7 km" }]
    },
    mapLocation: {
      latitude: 17.6947,
      longitude: 73.9871,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.1631186093114!2d74.09680251031028!3d17.736951683141044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc23642692c6a65%3A0xa78f821ef5edd939!2sJarandeshwar%20Hanuman%20Mandir!5e0!3m2!1sen!2sin!4v1736672887074!5m2!1sen!2sin"
    }
  },
  {
    id: "15",
    name: "Baramotichi Vihir",
    description:
      "Baramotichi Vihir, also known as the 'Well with Twelve Moats,' is an architectural marvel located near Satara, Maharashtra. This historic stepwell, built during the Maratha era, was designed to provide water for agriculture and local communities. Its intricate carvings, symmetrical design, and grandeur make it a popular destination for history enthusiasts and tourists. Baramotichi Vihir is a fine example of ancient engineering and artistry.",
    shortDescription:
      "A historic stepwell with intricate architecture and Maratha-era engineering.",
    category: "historical",
    image: "/images/bara.jpg",
    images: [
      "/images/baramotichi_vihir/well.jpg",
      "/images/baramotichi_vihir/carvings.jpg",
      "/images/baramotichi_vihir/aerial_view.jpg"
    ],
    location: "Limb, Satara, Maharashtra",
    visitingHours: "6:00 AM to 6:00 PM",
    entryFee: "Free",
    contactNumber: "+91 2162 789456",
    bestTimeToVisit: "October to March",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "120 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "16 km" }],
      busStands: [{ name: "Satara Bus Stand", distance: "14 km" }],
      hospitals: [{ name: "Satara Civil Hospital", distance: "15 km" }]
    },
    mapLocation: {
      latitude: 17.5932,
      longitude: 74.0270,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.405567421033!2d74.00497911031124!3d17.77262648311161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc247c2f178b2b9%3A0x65cf14d3f774710b!2sBaramotichi%20Vihir%2C%20limb%2C%20satara.!5e0!3m2!1sen!2sin!4v1736672954614!5m2!1sen!2sin"
    }
  },
  {
    id: "16",
    name: "Chalkewadi Windmill Farm",
    description:
      "Chalkewadi Windmill Farm, located near Satara, Maharashtra, is one of the largest wind farms in Asia. Spread across sprawling green hills, this site offers a mesmerizing view of giant wind turbines set against the backdrop of lush landscapes. The area is a popular tourist spot for photography enthusiasts, nature lovers, and those seeking a serene escape. The cool breeze and stunning sunsets make it an enchanting experience.",
    shortDescription:
      "Asia's largest windmill farm, offering stunning views and serene landscapes.",
    category: "educational",
    image: "/images/chalk.jpg",
    images: [
      "/images/chalkewadi/windmill.jpg",
      "/images/chalkewadi/hills.jpg",
      "/images/chalkewadi/sunset.jpg"
    ],
    location: "Chalkewadi, Satara, Maharashtra",
    visitingHours: "Open all day",
    entryFee: "Free",
    contactNumber: "+91 2162 654321",
    bestTimeToVisit: "October to February",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "140 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "30 km" }],
      busStands: [{ name: "Satara Bus Stand", distance: "28 km" }],
      hospitals: [{ name: "Satara Civil Hospital", distance: "29 km" }]
    },
    mapLocation: {
      latitude: 17.7092,
      longitude: 73.8195,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.370719089519!2d73.83054171030638!3d17.585122383266658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc217027f792f85%3A0xb68b82beed104192!2sChalkewadi%20Wind%20Mill%20Farm!5e0!3m2!1sen!2sin!4v1736673011402!5m2!1sen!2sin"
    }
  },
  {
    id: "17",
    name: "Pali - Lord Khandoba Temple",
    description:
      "Pali, located near Satara in Maharashtra, is a revered site dedicated to Lord Khandoba, a prominent deity worshipped in Maharashtra. The temple is known for its spiritual significance, serene surroundings, and vibrant annual fairs that draw large numbers of devotees and tourists. Set amidst picturesque landscapes, the temple is an important cultural and religious destination. The peaceful environment and traditional rituals make it a must-visit for spiritual seekers.",
    shortDescription:
      "A revered temple dedicated to Lord Khandoba, known for its spiritual ambiance and annual fairs.",
    category: "religious",
    image: "/images/pali.jpg",
    images: [
      "/images/pali/temple.jpg",
      "/images/pali/fair.jpg",
      "/images/pali/surroundings.jpg"
    ],
    location: "Pali, Satara, Maharashtra",
    visitingHours: "6:00 AM to 9:00 PM",
    entryFee: "Free",
    contactNumber: "+91 2162 987654",
    bestTimeToVisit: "November to February, during annual fairs",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "140 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "30 km" }],
      busStands: [{ name: "Satara Bus Stand", distance: "28 km" }],
      hospitals: [{ name: "Satara Civil Hospital", distance: "29 km" }]
    },
    mapLocation: {
      latitude: 17.6892,
      longitude: 73.9817,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1902.668505377909!2d74.03168585411578!3d17.49141868519528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc22f5428bd86e1%3A0xdb429661960f4813!2sShri%20Khandoba%20Mandir%20Pali!5e0!3m2!1sen!2sin!4v1736673164589!5m2!1sen!2sin"
    }
  },
  {
    id: "18",
    name: "Koyna Dam",
    description:
      "Koyna Dam, located in the Satara district of Maharashtra, is one of India's largest dams and a vital source of hydroelectric power. Built on the Koyna River, it is surrounded by the breathtaking Sahyadri Hills and lush greenery. The dam is a significant tourist attraction due to its stunning reservoir, Shivsagar Lake, and the nearby Koyna Wildlife Sanctuary. It is an ideal spot for picnics, nature walks, and exploring the region's rich biodiversity.",
    shortDescription:
      "One of India's largest dams, offering scenic beauty and a gateway to Koyna Wildlife Sanctuary.",
    category: "educational",
    image: "/images/konya.jpg",
    images: [
      "/images/koyna_dam/dam_view.jpg",
      "/images/koyna_dam/reservoir.jpg",
      "/images/koyna_dam/wildlife.jpg"
    ],
    location: "Koyna Nagar, Maharashtra",
    visitingHours: "9:00 AM to 5:00 PM",
    entryFee: "Free",
    contactNumber: "+91 2168 654321",
    bestTimeToVisit: "October to May",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "170 km" }],
      railwayStations: [{ name: "Karad Railway Station", distance: "70 km" }],
      busStands: [{ name: "Karad Bus Stand", distance: "68 km" }],
      hospitals: [{ name: "Koyna Nagar Hospital", distance: "5 km" }]
    },
    mapLocation: {
      latitude: 17.4055,
      longitude: 73.7599,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2255661391564!2d73.74777961030168!3d17.4009593834197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc21e74135ecee7%3A0x152f01d384aa9959!2sKoyna%20Dam%20-%20Lake%20Tapping%2C%20Humbarli%2C%20Maharashtra%20415207!5e0!3m2!1sen!2sin!4v1736673249986!5m2!1sen!2sin"
    }
  },
  {
    id: "19",
    name: "Yamai Devi Temple",
    description:
      "The Yamai Devi Temple, located in Aundh near Satara, Maharashtra, is a prominent spiritual destination dedicated to Goddess Yamai, the family deity of many Maharashtrian families. The temple sits atop a hill, offering panoramic views of the surrounding landscape. Known for its historical and cultural significance, the temple features intricate architecture and is visited by thousands of devotees every year, especially during Navratri. The serene ambiance and religious importance make it a must-visit site.",
    shortDescription:
      "A hilltop temple dedicated to Goddess Yamai, known for its spiritual significance and stunning views.",
    category: "religious",
    image: "/images/yami.jpg",
    images: [
      "/images/yamai_devi/temple.jpg",
      "/images/yamai_devi/devotees.jpg",
      "/images/yamai_devi/view.jpg"
    ],
    location: "Aundh, Satara, Maharashtra",
    visitingHours: "5:00 AM to 8:00 PM",
    entryFee: "Free",
    contactNumber: "+91 2162 765432",
    bestTimeToVisit: "October to March, during Navratri",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "120 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "38 km" }],
      busStands: [{ name: "Aundh Bus Stand", distance: "3 km" }],
      hospitals: [{ name: "Aundh Rural Hospital", distance: "4 km" }]
    },
    mapLocation: {
      latitude: 17.5296,
      longitude: 74.1040,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15218.283906530682!2d74.30233418941494!3d17.52798175942133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1801faf9b678b%3A0xf00de1bd6d54de5d!2sAundh%20Yamai%20Temple!5e0!3m2!1sen!2sin!4v1736673312950!5m2!1sen!2sin"
    }
  },
  {
    id: "20",
    name: "Pateshwar Temple",
    description:
      "Pateshwar Temple, nestled in the hills near Satara, Maharashtra, is a hidden gem known for its serene ambiance and ancient spiritual significance. The temple complex features over 300 stone-carved Shiva Lingas, making it a unique pilgrimage site for devotees of Lord Shiva. Surrounded by lush greenery, the area is ideal for meditation and nature walks. The temple is also an architectural marvel, with intricate carvings and a peaceful atmosphere that attracts spiritual seekers and history enthusiasts alike.",
    shortDescription:
      "A serene temple complex with over 300 stone-carved Shiva Lingas, nestled amidst lush greenery.",
    category: "religious",
    image: "/images/pateshwar.avif",
    images: [
      "/images/pateshwar/lingas.jpg",
      "/images/pateshwar/temple.jpg",
      "/images/pateshwar/surroundings.jpg"
    ],
    location: "Pateshwar, Satara, Maharashtra",
    visitingHours: "6:00 AM to 7:00 PM",
    entryFee: "Free",
    contactNumber: "+91 2162 987123",
    bestTimeToVisit: "October to March",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "135 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "18 km" }],
      busStands: [{ name: "Satara Bus Stand", distance: "16 km" }],
      hospitals: [{ name: "Satara Civil Hospital", distance: "17 km" }]
    },
    mapLocation: {
      latitude: 17.6073,
      longitude: 74.0062,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.8275335333!2d74.06082121030703!3d17.61092278324531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc23045c756021d%3A0x24fca0d079c7da40!2sPateshwar%20Temple!5e0!3m2!1sen!2sin!4v1736673369795!5m2!1sen!2sin"
    }
  },
  {
    id: "21",
    name: "Yateshwar Temple",
    description:
      "Yateshwar Temple, located near Satara, Maharashtra, is a serene hilltop shrine dedicated to Lord Shiva. Surrounded by breathtaking natural beauty, the temple is a popular destination for both devotees and nature lovers. The peaceful atmosphere and panoramic views from the temple premises make it an ideal spot for meditation and spiritual reflection. Yateshwar Temple is also known for its religious significance and traditional festivities, especially during Mahashivratri, when it attracts a large number of pilgrims.",
    shortDescription:
      "A tranquil hilltop temple dedicated to Lord Shiva, offering stunning views and spiritual solace.",
    category: "religious",
    image: "/images/yawateshwar.jpg",
    images: [
      "/images/yateshwar/temple.jpg",
      "/images/yateshwar/view.jpg",
      "/images/yateshwar/festival.jpg"
    ],
    location: "Yateshwar, Satara, Maharashtra",
    visitingHours: "6:00 AM to 8:00 PM",
    entryFee: "Free",
    contactNumber: "+91 2162 123456",
    bestTimeToVisit: "October to March, during Mahashivratri",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "120 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "20 km" }],
      busStands: [{ name: "Satara Bus Stand", distance: "18 km" }],
      hospitals: [{ name: "Satara Civil Hospital", distance: "19 km" }]
    },
    mapLocation: {
      latitude: 17.6765,
      longitude: 73.9868,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.127867483984!2d73.9476589469036!3d17.69141868727202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc23939409ce2cd%3A0xe3967189444bb6ee!2sYavateshwar%20Temple!5e0!3m2!1sen!2sin!4v1736673438873!5m2!1sen!2sin"
    }
  },
  {
    id: "22",
    name: "Pritisangam",
    description:
      "Pritisangam, located near Karad in Maharashtra, is a peaceful and sacred confluence where the Krishna and Koyna rivers meet. It is a spiritually significant site for devotees who visit to seek blessings and perform rituals. The area around Pritisangam is known for its picturesque natural beauty, surrounded by hills and lush greenery. The calm, serene atmosphere makes it a perfect place for meditation and contemplation. Pritisangam is also famous for its tranquility and the annual fair that attracts pilgrims and tourists alike.",
    shortDescription:
      "A serene confluence of the Krishna and Koyna rivers, known for its spiritual significance and natural beauty.",
    category: "educational",
    image: "/images/pritisangam.jpg",
    images: [
      "/images/pritisangam/confluence.jpg",
      "/images/pritisangam/river_view.jpg",
      "/images/pritisangam/landscape.jpg"
    ],
    location: "Karad, Maharashtra",
    visitingHours: "6:00 AM to 7:00 PM",
    entryFee: "Free",
    contactNumber: "+91 2164 234567",
    bestTimeToVisit: "October to March",
    nearbyFacilities: {
      airports: [{ name: "Kolhapur Airport", distance: "110 km" }],
      railwayStations: [{ name: "Karad Railway Station", distance: "8 km" }],
      busStands: [{ name: "Karad Bus Stand", distance: "7 km" }],
      hospitals: [{ name: "Shree Hospital, Karad", distance: "6 km" }]
    },
    mapLocation: {
      latitude: 17.2835,
      longitude: 74.1832,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7618.860835096677!2d74.17115235122053!3d17.294769902233387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1823411ca13fb%3A0x46c792da51553f44!2sPritisangam!5e0!3m2!1sen!2sin!4v1736673485856!5m2!1sen!2sin"
    }
  },
  {
    id: "23",
    name: "Sangam Mauli Temple",
    description:
      "Sangam Mauli Temple, located near the confluence of the Krishna and Koyna rivers in Karad, Maharashtra, is a revered spiritual site dedicated to Goddess Mauli. The temple holds significant religious value for the local community, especially during annual festivals when devotees gather to seek blessings. Surrounded by lush greenery and the tranquil river waters, the temple offers a peaceful environment for prayer and meditation. The confluence area, known as Pritisangam, enhances the spiritual experience, making it a popular destination for pilgrims and tourists alike.",
    shortDescription:
      "A revered temple dedicated to Goddess Mauli, located at the confluence of the Krishna and Koyna rivers.",
    category: "religious",
    image: "/images/mauli.jpg",
    images: [
      "/images/sangam_mauli/temple_view.jpg",
      "/images/sangam_mauli/festival.jpg",
      "/images/sangam_mauli/river_confluence.jpg"
    ],
    location: "Pritisangam, Karad, Maharashtra",
    visitingHours: "6:00 AM to 8:00 PM",
    entryFee: "Free",
    contactNumber: "+91 2164 345678",
    bestTimeToVisit: "October to March, especially during the annual fair",
    nearbyFacilities: {
      airports: [{ name: "Kolhapur Airport", distance: "120 km" }],
      railwayStations: [{ name: "Karad Railway Station", distance: "10 km" }],
      busStands: [{ name: "Karad Bus Stand", distance: "9 km" }],
      hospitals: [{ name: "Shree Hospital, Karad", distance: "8 km" }]
    },
    mapLocation: {
      latitude: 17.2895,
      longitude: 74.1853,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1900.5678010091076!2d74.04948491385052!3d17.69105318416313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc237e8ce34f0bb%3A0x9ca87409b636cc4e!2sSangam%20mahuli%20temple!5e0!3m2!1sen!2sin!4v1736673572109!5m2!1sen!2sin"
    }
  },
  {
    id: "24",
    name: "Shikhar Shingnapur Temple",
    description:
      "Shikhar Shingnapur Temple, located in the Satara district of Maharashtra, is a famous hilltop shrine dedicated to Lord Shiva. The temple is known for its serene environment and panoramic views of the surrounding landscape. The main deity of the temple, Lord Shiva, is worshipped in the form of a lingam. The temple is a popular pilgrimage site for devotees seeking blessings for peace, prosperity, and health. The temple is situated on a hill, and reaching the shrine requires a short trek, adding to its spiritual and adventurous charm.",
    shortDescription:
      "A hilltop temple dedicated to Lord Shiva, offering stunning views and a peaceful spiritual experience.",
    category: "religious",
    image: "/images/shikhar.webp",
    images: [
      "/images/shikhar_shingnapur/temple_view.jpg",
      "/images/shikhar_shingnapur/hilltop.jpg",
      "/images/shikhar_shingnapur/shiva_lingam.jpg"
    ],
    location: "Shikhar Shingnapur, Satara, Maharashtra",
    visitingHours: "6:00 AM to 8:00 PM",
    entryFee: "Free",
    contactNumber: "+91 2161 567890",
    bestTimeToVisit: "October to March",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "130 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "25 km" }],
      busStands: [{ name: "Satara Bus Stand", distance: "22 km" }],
      hospitals: [{ name: "Satara Civil Hospital", distance: "24 km" }]
    },
    mapLocation: {
      latitude: 17.7164,
      longitude: 73.7893,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7595.459828765043!2d74.64175933554678!3d17.851291681265092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc395ae8b915561%3A0xf0b97acb381e5552!2sShikhar%20Shinganapur%20Temple!5e0!3m2!1sen!2sin!4v1736673627565!5m2!1sen!2sin"
    }
  },
  {
    id: "25",
    name: "Gondavala Temple",
    description:
      "The Gondavala Temple, located in Satara district, Maharashtra, is a revered shrine dedicated to Lord Khandoba, a popular deity in the region. Situated amidst picturesque surroundings, the temple is known for its religious significance and attracts numerous devotees, especially during the annual festival. The temple is a symbol of spiritual and cultural heritage, offering a peaceful environment for worshippers. The serene ambiance and tranquil surroundings make it a perfect spot for reflection and meditation. The temple's scenic location adds to its appeal, drawing pilgrims and tourists alike.",
    shortDescription:
      "A revered temple dedicated to Lord Khandoba, surrounded by peaceful landscapes and spiritual significance.",
    category: "religious",
    image: "/images/gond.jpg",
    images: [
      "/images/gondavala/temple_front.jpg",
      "/images/gondavala/inside_temple.jpg",
      "/images/gondavala/festival.jpg"
    ],
    location: "Gondavala, Satara, Maharashtra",
    visitingHours: "6:00 AM to 7:00 PM",
    entryFee: "Free",
    contactNumber: "+91 2162 345678",
    bestTimeToVisit: "October to March, especially during the annual fair",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "140 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "30 km" }],
      busStands: [{ name: "Satara Bus Stand", distance: "28 km" }],
      hospitals: [{ name: "Satara Civil Hospital", distance: "29 km" }]
    },
    mapLocation: {
      latitude: 17.7305,
      longitude: 73.8710,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4520.890265393851!2d74.57513372589733!3d17.669074409737014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3c262f352369f%3A0x7dddbc26af0a367!2sShri%20Bramha%20Chaitanya%20Gondavalekar%20Maharaj%20Samadhi%20Temple!5e0!3m2!1sen!2sin!4v1736675249810!5m2!1sen!2sin"
    }
  },
  {
    id: "26",
    name: "Vajrai Waterfall",
    description:
      "Vajrai Waterfall, located in the Satara district of Maharashtra, is one of the tallest waterfalls in the state, with a stunning height of approximately 560 meters. The waterfall is surrounded by lush greenery, making it a perfect spot for nature lovers and adventure enthusiasts. The scenic beauty of the cascading water, combined with the serene ambiance, offers a refreshing escape from the hustle and bustle of city life. The waterfall is also a popular destination for trekking, photography, and picnics. The best time to visit is during the monsoon season when the waterfall is at its fullest and most magnificent.",
    shortDescription:
      "One of the tallest waterfalls in Maharashtra, known for its breathtaking beauty and serene surroundings.",
    category: "waterfall",
    image: "/images/Vajrai.jpg",
    images: [
      "/images/vajrai/beautiful_view.jpg",
      "/images/vajrai/trekking.jpg",
      "/images/vajrai/monsoon.jpg"
    ],
    location: "Vajrai, Satara, Maharashtra",
    visitingHours: "6:00 AM to 6:00 PM",
    entryFee: "Free",
    contactNumber: "+91 2161 234567",
    bestTimeToVisit: "June to September (Monsoon season)",
    nearbyFacilities: {
      airports: [{ name: "Pune International Airport", distance: "140 km" }],
      railwayStations: [{ name: "Satara Railway Station", distance: "40 km" }],
      busStands: [{ name: "Satara Bus Stand", distance: "35 km" }],
      hospitals: [{ name: "Satara Civil Hospital", distance: "36 km" }]
    },
    mapLocation: {
      latitude: 17.6839,
      longitude: 73.8864,
      mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7601.515882391706!2d73.80787697990392!3d17.70889139508266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2150d9cc609a7%3A0x682b067a6bf40b9d!2sVajrai%20Waterfall!5e0!3m2!1sen!2sin!4v1736675304818!5m2!1sen!2sin"
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
