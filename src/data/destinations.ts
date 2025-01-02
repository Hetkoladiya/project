import { indianRegions } from './indian-destinations';

export const destinations = indianRegions.flatMap(region => region.destinations);