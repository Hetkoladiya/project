import React, { useState } from 'react';
import { ChatContainer } from './ChatContainer';
import { DestinationCard } from './DestinationCard';
import { destinations } from '../data/destinations';
import { MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Destination } from '../types';

export const MainApp: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  
  const handleBook = (destination: Destination) => {
    setSelectedDestination(destination);
    alert(`Booking confirmed for ${destination.name}!\nTotal: $${destination.price}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <MessageSquare className="w-8 h-8 text-blue-500 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">TravelChat</h1>
            </div>
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-gray-900"
            >
              Back to Home
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[600px]">
            <ChatContainer selectedDestination={selectedDestination} />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Featured Destinations</h2>
            <div className="grid gap-6">
              {destinations.slice(0, 3).map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  onBook={handleBook}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};