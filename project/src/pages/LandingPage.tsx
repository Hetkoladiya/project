import React from 'react';
import { Plane, Map, Compass, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Plane className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">TravelChat India</span>
            </div>
            <button
              onClick={() => navigate('/login')}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Start Planning
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
              Discover the Magic of India
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Plan your perfect Indian adventure with our AI-powered travel assistant
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => navigate('/app')}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Start Planning
              </button>
              <button
                onClick={() => navigate('/chat')}
                className="bg-white text-blue-500 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-blue-500 hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Open Chat
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Map className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
                <p className="text-gray-600">Get personalized travel suggestions based on your preferences</p>
              </div>
              <div className="text-center p-6">
                <MessageSquare className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI Travel Assistant</h3>
                <p className="text-gray-600">Chat with our AI to plan your perfect itinerary</p>
              </div>
              <div className="text-center p-6">
                <Compass className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Complete Travel Info</h3>
                <p className="text-gray-600">Access detailed information about destinations and transport</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Destinations */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Taj Mahal, Agra',
                  image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523',
                  description: 'Symbol of eternal love'
                },
                {
                  name: 'Kerala Backwaters',
                  image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944',
                  description: 'Serene waterways and houseboats'
                },
                {
                  name: 'Goa Beaches',
                  image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2',
                  description: 'Sun, sand, and vibrant culture'
                }
              ].map((destination) => (
                <div key={destination.name} className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{destination.name}</h3>
                    <p className="text-gray-600">{destination.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};