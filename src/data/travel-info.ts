import { TravelInfo } from '../types';

export const travelInfo: Record<string, TravelInfo> = {
  "manali": {
    destination: "Manali",
    transportOptions: [
      { type: "flight", provider: "Air India", duration: "1.5 hours to Kullu", price: 200 },
      { type: "bus", provider: "HRTC Volvo", duration: "12-14 hours from Delhi", price: 80 },
      { type: "train", provider: "Indian Railways", duration: "12 hours to Pathankot + 4 hours taxi", price: 100 }
    ],
    nearestAirport: "Kullu-Manali Airport (KUU)",
    nearestStation: "Joginder Nagar Railway Station",
    localTransport: ["Taxi", "Local Bus", "Bike Rental"]
  },
  "ladakh": {
    destination: "Leh-Ladakh",
    transportOptions: [
      { type: "flight", provider: "Multiple Airlines", duration: "1.5 hours from Delhi", price: 250 },
      { type: "bus", provider: "HRTC", duration: "2 days from Manali", price: 120 },
      { type: "bike", provider: "Rental Services", duration: "2-3 days from Manali", price: 150 }
    ],
    nearestAirport: "Kushok Bakula Rimpochee Airport (IXL)",
    nearestStation: "No direct rail connectivity",
    localTransport: ["Taxi", "Bike Rental", "Shared Jeeps"]
  },
  "varanasi": {
    destination: "Varanasi",
    transportOptions: [
      { type: "flight", provider: "Multiple Airlines", duration: "1.5 hours from Delhi", price: 150 },
      { type: "train", provider: "Indian Railways", duration: "8-12 hours", price: 50 },
      { type: "bus", provider: "UP State Transport", duration: "10-12 hours", price: 40 }
    ],
    nearestAirport: "Lal Bahadur Shastri Airport (VNS)",
    nearestStation: "Varanasi Junction",
    localTransport: ["Auto-rickshaw", "Cycle Rickshaw", "Boat Rides", "Local Bus"]
  }
};