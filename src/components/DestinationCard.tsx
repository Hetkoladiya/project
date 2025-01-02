import React from 'react';
import { Destination } from '../types';
import { MapPin } from 'lucide-react';

interface DestinationCardProps {
  destination: Destination;
  onBook: (destination: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onBook }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-4 h-4 text-blue-500" />
          <h3 className="text-lg font-semibold">{destination.name}</h3>
        </div>
        <p className="text-gray-600 mb-4">{destination.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${destination.price}</span>
          <button
            onClick={() => onBook(destination)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};