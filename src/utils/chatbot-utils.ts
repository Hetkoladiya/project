import { indianRegions } from '../data/indian-destinations';
import { travelInfo } from '../data/travel-info';
import { normalizeText, findBestMatch } from './string-utils';
import type { IndianDestination } from '../data/indian-destinations';

export const findDestination = (query: string): IndianDestination | null => {
  const normalizedQuery = normalizeText(query);
  
  for (const region of indianRegions) {
    for (const destination of region.destinations) {
      if (findBestMatch(normalizedQuery, destination.name)) {
        return destination;
      }
      if (findBestMatch(normalizedQuery, destination.state)) {
        return destination;
      }
      if (destination.highlights.some(highlight => findBestMatch(normalizedQuery, highlight))) {
        return destination;
      }
      if (destination.type.some(type => findBestMatch(normalizedQuery, type))) {
        return destination;
      }
    }
  }
  return null;
};

export const findSimilarDestinations = (query: string): IndianDestination[] => {
  const normalizedQuery = normalizeText(query);
  return indianRegions
    .flatMap(region => region.destinations)
    .filter(destination => 
      destination.type.some(type => findBestMatch(normalizedQuery, type)) ||
      findBestMatch(normalizedQuery, destination.state) ||
      (destination.season && findBestMatch(normalizedQuery, destination.season))
    );
};

const getTravelInfo = (destination: string): string => {
  const info = travelInfo[destination.toLowerCase()];
  if (!info) return "";

  const transport = info.transportOptions.map(opt => 
    `${opt.type.toUpperCase()}: ${opt.provider} (${opt.duration}, $${opt.price})`
  ).join('\n');

  return `\n\nTravel Options:\n${transport}\n
Nearest Airport: ${info.nearestAirport || 'N/A'}
Nearest Station: ${info.nearestStation || 'N/A'}
Local Transport: ${info.localTransport.join(', ')}`;
};

export const generateResponse = (query: string): string => {
  const normalizedQuery = normalizeText(query);
  
  // Handle season-specific queries
  if (normalizedQuery.includes('winter') || normalizedQuery.includes('summer') || 
      normalizedQuery.includes('monsoon')) {
    const season = normalizedQuery.includes('winter') ? 'Winter' :
                  normalizedQuery.includes('summer') ? 'Summer' : 'Monsoon';
    const destinations = indianRegions
      .flatMap(region => region.destinations)
      .filter(d => d.season === season);
    
    if (destinations.length > 0) {
      return `Here are popular ${season} destinations in India:\n${destinations
        .map(d => `- ${d.name}: ${d.description}`)
        .join('\n')}`;
    }
  }

  const destination = findDestination(normalizedQuery);

  // Handle booking confirmation
  if (normalizedQuery.includes('yes') || normalizedQuery.includes('book') || 
      normalizedQuery.includes('reserve')) {
    const lastDestination = findDestination(normalizedQuery.replace(/yes|book|reserve/g, '').trim());
    if (lastDestination) {
      return `Great choice! Your trip to ${lastDestination.name} has been booked!\n
Package Details:
- Destination: ${lastDestination.name}
- Price: $${lastDestination.price}
- Duration: 3 days, 2 nights
${getTravelInfo(lastDestination.id)}

Your booking confirmation has been sent. Have a great trip! 🎉`;
    }
  }

  if (destination) {
    return `${destination.name} is located in ${destination.state}. ${destination.description}\n
Best time to visit: ${destination.bestTimeToVisit}
Highlights: ${destination.highlights.join(', ')}
Package price: $${destination.price}${getTravelInfo(destination.id)}

Would you like to book this trip? Just say "yes" or "book" to confirm!`;
  }

  // Handle transport queries
  if (normalizedQuery.includes('transport') || normalizedQuery.includes('how to reach') || 
      normalizedQuery.includes('travel to')) {
    const place = normalizedQuery
      .replace(/transport|how to reach|travel to/g, '')
      .trim();
    const dest = findDestination(place);
    if (dest) {
      return `Here's how you can reach ${dest.name}:${getTravelInfo(dest.id)}`;
    }
  }

  // Handle season queries
  if (normalizedQuery.includes('best time') || normalizedQuery.includes('when to visit')) {
    const place = normalizedQuery
      .replace(/best time|to visit|when to visit/g, '')
      .trim();
    const dest = findDestination(place);
    return dest 
      ? `The best time to visit ${dest.name} is ${dest.bestTimeToVisit}.` 
      : "Please specify which destination you'd like to know about.";
  }

  if (normalizedQuery.includes('price') || normalizedQuery.includes('cost') || 
      normalizedQuery.includes('how much')) {
    const place = normalizedQuery
      .replace(/price|cost|how much|is/g, '')
      .trim();
    const dest = findDestination(place);
    if (dest) {
      return `The package price for ${dest.name} starts at $${dest.price}.${getTravelInfo(dest.id)}`;
    }
  }

  return "I can help you discover amazing destinations across India! You can ask about:\n" +
         "- Specific places (e.g., 'Tell me about Manali')\n" +
         "- Seasonal destinations (e.g., 'Show winter destinations')\n" +
         "- Transportation (e.g., 'How to reach Ladakh')\n" +
         "- Best time to visit\n" +
         "- Prices and packages\n\n" +
         "What would you like to know?";
};