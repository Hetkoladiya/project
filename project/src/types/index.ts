export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface Booking {
  id: string;
  destination: string;
  date: Date;
  guests: number;
  totalPrice: number;
}

export interface TransportOption {
  type: 'flight' | 'train' | 'bus';
  provider: string;
  duration: string;
  price: number;
}

export interface TravelInfo {
  destination: string;
  transportOptions: TransportOption[];
  nearestAirport?: string;
  nearestStation?: string;
  localTransport: string[];
}