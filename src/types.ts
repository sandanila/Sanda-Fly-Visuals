export type Currency = 'LKR' | 'USD';

export type ShootCategory = 
  | 'all'
  | 'reels' 
  | 'drone' 
  | 'weddings' 
  | 'realestate' 
  | 'travel';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'reels' | 'drone' | 'weddings' | 'realestate' | 'travel';
  client: string;
  location: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  isVertical: boolean; // 9:16 Reel format vs 16:9 Landscape
  gearUsed: string[];
  specs: {
    resolution: string;
    fps: string;
    altitude?: string;
    stabilization: string;
  };
  description: string;
  deliverables: string[];
  viewsCount?: string;
}

export interface GearItem {
  id: string;
  name: string;
  category: 'drone' | 'gimbal' | 'audio' | 'optics';
  model: string;
  highlight: string;
  specs: string[];
  description: string;
  features: string[];
  image: string;
  badge: string;
}

export interface PackageTier {
  id: string;
  name: string;
  tagline: string;
  popular?: boolean;
  priceLKR: number;
  priceUSD: number;
  gearSummary: string;
  duration: string;
  features: string[];
  deliverables: string[];
  idealFor: string;
}

export interface BookingInquiry {
  clientName: string;
  phone: string;
  whatsapp: string;
  email: string;
  serviceType: string;
  eventDate: string;
  location: string;
  durationHours: number;
  droneRequired: boolean;
  reelsCount: number;
  expressDelivery: boolean;
  rawFootageIncluded: boolean;
  estimatedPriceLKR: number;
  estimatedPriceUSD: number;
  specialRequests: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  project: string;
  rating: number;
  avatar: string;
  review: string;
  location: string;
  gearUsed: string;
}
