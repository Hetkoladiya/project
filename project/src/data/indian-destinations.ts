export interface Region {
  name: string;
  destinations: IndianDestination[];
}

export interface IndianDestination {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  state: string;
  type: string[];
  bestTimeToVisit: string;
  highlights: string[];
  season?: string;
}

export const indianRegions: Region[] = [
  {
    name: "Winter Destinations",
    destinations: [
      {
        id: "manali",
        name: "Manali",
        description: "Snowy landscapes, skiing, and trekking opportunities in Himachal Pradesh.",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
        price: 599,
        state: "Himachal Pradesh",
        type: ["Winter", "Adventure", "Mountain"],
        bestTimeToVisit: "November to February",
        highlights: ["Skiing", "Solang Valley", "Rohtang Pass"],
        season: "Winter"
      },
      {
        id: "gulmarg",
        name: "Gulmarg",
        description: "Ideal for skiing and cable car rides with breathtaking views.",
        image: "https://images.unsplash.com/photo-1566837497312-7be4c0f9fecd",
        price: 699,
        state: "Jammu & Kashmir",
        type: ["Winter", "Adventure", "Mountain"],
        bestTimeToVisit: "November to February",
        highlights: ["Skiing", "Gondola Ride", "Snow Activities"],
        season: "Winter"
      },
      {
        id: "auli",
        name: "Auli",
        description: "Renowned for its ski resorts and serene beauty.",
        image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3",
        price: 549,
        state: "Uttarakhand",
        type: ["Winter", "Adventure", "Mountain"],
        bestTimeToVisit: "November to March",
        highlights: ["Ski Resort", "Cable Car", "Mountain Views"],
        season: "Winter"
      }
    ]
  },
  {
    name: "Summer Destinations",
    destinations: [
      {
        id: "ladakh",
        name: "Leh-Ladakh",
        description: "Rugged terrains, monasteries, and high-altitude lakes.",
        image: "https://images.unsplash.com/photo-1589881133825-bbb3b9471b1b",
        price: 899,
        state: "Ladakh",
        type: ["Summer", "Adventure", "Cultural"],
        bestTimeToVisit: "June to September",
        highlights: ["Pangong Lake", "Monasteries", "Khardung La"],
        season: "Summer"
      },
      {
        id: "coorg",
        name: "Coorg",
        description: "Coffee plantations, waterfalls, and cool climate.",
        image: "https://images.unsplash.com/photo-1580474256304-eb23e9a64f1c",
        price: 499,
        state: "Karnataka",
        type: ["Summer", "Nature", "Hill Station"],
        bestTimeToVisit: "March to May",
        highlights: ["Coffee Estates", "Abbey Falls", "Raja's Seat"],
        season: "Summer"
      }
    ]
  },
  {
    name: "Monsoon Destinations",
    destinations: [
      {
        id: "mawsynram",
        name: "Mawsynram",
        description: "One of the wettest places on Earth with lush greenery.",
        image: "https://images.unsplash.com/photo-1582450871972-ab5ca641643d",
        price: 449,
        state: "Meghalaya",
        type: ["Monsoon", "Nature"],
        bestTimeToVisit: "June to September",
        highlights: ["Living Root Bridges", "Caves", "Waterfalls"],
        season: "Monsoon"
      },
      {
        id: "alleppey",
        name: "Alleppey",
        description: "Backwaters, houseboat experiences, and serene water channels.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
        price: 649,
        state: "Kerala",
        type: ["Monsoon", "Backwaters"],
        bestTimeToVisit: "June to September",
        highlights: ["Houseboats", "Backwaters", "Beaches"],
        season: "Monsoon"
      }
    ]
  },
  {
    name: "Cultural Destinations",
    destinations: [
      {
        id: "varanasi",
        name: "Varanasi",
        description: "Spiritual ghats, temples, and vibrant culture.",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc",
        price: 399,
        state: "Uttar Pradesh",
        type: ["Cultural", "Spiritual"],
        bestTimeToVisit: "October to March",
        highlights: ["Ganges Ghats", "Evening Aarti", "Ancient Temples"]
      },
      {
        id: "khajuraho",
        name: "Khajuraho",
        description: "Famous for its intricate and historic temples.",
        image: "https://images.unsplash.com/photo-1590766940554-d0f98b4f3875",
        price: 349,
        state: "Madhya Pradesh",
        type: ["Cultural", "Historical"],
        bestTimeToVisit: "October to March",
        highlights: ["Temple Architecture", "Light Show", "Archaeological Museum"]
      }
    ]
  },
  {
    name: "Beach Destinations",
    destinations: [
      {
        id: "andaman",
        name: "Andaman Islands",
        description: "Pristine beaches, coral reefs, and water activities.",
        image: "https://images.unsplash.com/photo-1589991294834-4f86d3f5d5c7",
        price: 899,
        state: "Andaman and Nicobar",
        type: ["Beach", "Adventure"],
        bestTimeToVisit: "October to May",
        highlights: ["Radhanagar Beach", "Scuba Diving", "Cellular Jail"]
      },
      {
        id: "varkala",
        name: "Varkala",
        description: "Cliffs overlooking the Arabian Sea and spiritual charm.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12cc",
        price: 449,
        state: "Kerala",
        type: ["Beach", "Spiritual"],
        bestTimeToVisit: "September to March",
        highlights: ["Cliff Beach", "Temple", "Water Sports"]
      }
    ]
  }
];