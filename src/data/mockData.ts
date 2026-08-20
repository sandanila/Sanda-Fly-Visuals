import { PortfolioItem, GearItem, PackageTier, Testimonial } from '../types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'item-1',
    title: 'Ella Rock & Nine Arch Sunrise Cinematic',
    category: 'drone',
    client: 'Ceylon Wanderlust Travel Co.',
    location: 'Ella, Sri Lanka',
    duration: '01:45',
    thumbnail: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    isVertical: false,
    gearUsed: ['DJI Mini 4 Pro Drone', 'Freewell ND64/PL Filter', 'D-Log M 10-Bit Color'],
    specs: {
      resolution: '4K UHD (3840x2160)',
      fps: '60 fps',
      altitude: '120m AGL',
      stabilization: '3-Axis Mechanical Gimbal + RockSteady'
    },
    description: 'Breathtaking golden-hour aerial sweep capturing the blue train passing over the historic Demodara Nine Arch Bridge, followed by high-angle mountain mist reveals.',
    deliverables: ['1x 4K Master Landscape Film (16:9)', '3x Viral 9:16 Cutdowns', '15x High-res 48MP Aerial Stills'],
    viewsCount: '142K+ Views'
  },
  {
    id: 'item-2',
    title: 'Galle Fort Sunset Pre-Wedding Story',
    category: 'weddings',
    client: 'Sahan & Tharushi',
    location: 'Lighthouse & Ramparts, Galle',
    duration: '02:30',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    isVertical: false,
    gearUsed: ['DJI 4K Drone', 'DJI Osmo Mobile 6 Gimbal', 'Rode Wireless Pro'],
    specs: {
      resolution: '4K Cinematic',
      fps: '60 fps / 120 fps Slow-Mo',
      altitude: '45m AGL',
      stabilization: 'ActiveTrack 6.0 + Hybrid Stabilization'
    },
    description: 'An emotional, sunset cinematic blending expansive ocean breeze drone top-downs with buttery smooth phone gimbal tracking as the couple walked the cobblestone ramparts.',
    deliverables: ['1x 4K Teaser Video', '1x Full Cinematic Highlight (3 mins)', '4x Instagram Vertical Reels'],
    viewsCount: '89K+ Views'
  },
  {
    id: 'item-3',
    title: 'Mirissa Luxury Oceanfront Villa Showcase',
    category: 'realestate',
    client: 'Azure Bay Private Villas',
    location: 'Mirissa Coastal Stretch',
    duration: '01:15',
    thumbnail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    isVertical: false,
    gearUsed: ['DJI Drone 4K', 'Phone Gimbal 3-Axis', 'Ultra-Wide Anamorphic Lens'],
    specs: {
      resolution: '4K HDR',
      fps: '60 fps',
      altitude: '30m Orbit',
      stabilization: 'Continuous 3-Axis Smooth Walkthrough'
    },
    description: 'Seamless transition from high-altitude aerial coastal pull-back into an ultra-smooth indoor one-take gimbal glide through master suites and infinity pool deck.',
    deliverables: ['1x Architecture Promo (16:9)', '2x Booking Ad Reels (9:16)', 'Full Uncut Virtual Walkthrough'],
    viewsCount: '64K+ Views'
  },
  {
    id: 'item-4',
    title: 'Speed & Motion: High-Paced Gym Reel',
    category: 'reels',
    client: 'Apex Performance Fitness',
    location: 'Colombo 07',
    duration: '00:30',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    isVertical: true,
    gearUsed: ['DJI Osmo Mobile 6', '4K 60fps Mobile Camera', 'RGB Handheld Tube Light'],
    specs: {
      resolution: '4K ProRes / HDR',
      fps: '60 fps & 120 fps',
      stabilization: 'Sport Mode 3-Axis Hyper-Track'
    },
    description: 'Dynamic low-angle Dutch rolls, whip transitions, and explosive lifting speed-ramps filmed with handheld 3-axis phone gimbal for maximum social media engagement.',
    deliverables: ['2x Instagram Viral Reels (9:16)', 'Custom Sound Design & Beat Sync', '24h Express Delivery'],
    viewsCount: '210K+ Views'
  },
  {
    id: 'item-5',
    title: 'Artisan Cafe & Specialty Coffee Pour',
    category: 'reels',
    client: 'The Daily Grind Roasters',
    location: 'Colombo',
    duration: '00:25',
    thumbnail: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    isVertical: true,
    gearUsed: ['Phone Gimbal Inception Mode', 'Macro Clip Lens', 'Wireless Mini Lav Mic'],
    specs: {
      resolution: '4K 60fps',
      fps: '60 fps',
      stabilization: 'Lock Mode Steady Glide'
    },
    description: 'Crisp ASMR sound recording coupled with silky 360-degree gimbal barrel rolls over freshly brewed pour-over coffee and artisan brunch spread.',
    deliverables: ['1x ASMR Reel', '1x Menu Highlight Reel', 'Color Mastered LUT'],
    viewsCount: '95K+ Views'
  },
  {
    id: 'item-6',
    title: 'Sigiriya Rock Fortress Aerial Odyssey',
    category: 'travel',
    client: 'National Heritage Documentary Mini',
    location: 'Sigiriya, Sri Lanka',
    duration: '02:10',
    thumbnail: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
    isVertical: false,
    gearUsed: ['DJI 4K Drone Dual-Cam', 'ND32 Filter', 'Cinema Color Grading'],
    specs: {
      resolution: '4K 60fps 10-Bit',
      fps: '60 fps',
      altitude: '150m AGL',
      stabilization: 'GPS Precision Hover & Hyperlapse'
    },
    description: 'A cinematic masterwork soaring above the ancient fortress rock at sunrise, showcasing the surrounding jungle canopy and water gardens in 10-bit HDR.',
    deliverables: ['1x 4K Master Landscape Showcase', '4x Story Reels', '20x Color Graded RAW Frames'],
    viewsCount: '320K+ Views'
  }
];

export const GEAR_INVENTORY: GearItem[] = [
  {
    id: 'gear-drone',
    name: 'DJI Mini 3 Drone',
    category: 'drone',
    model: 'DJI Mini 3 • 1/1.3" CMOS • 4K HDR Camera',
    highlight: 'Ultra-compact 4K aerial platform with true vertical filming',
    badge: 'DJI MINI 3',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80',
    specs: [
      '4K/60fps HDR video with crisp detailed aerial footage',
      'True Vertical Shooting for Reels, TikTok, and stories',
      '3-axis stabilized gimbal for smooth cinematic movement',
      'Up to 38 minutes flight time for extended coverage',
      'D-Log M & HLG support for rich cinematic color grading'
    ],
    features: [
      'QuickShot modes for sweeping reveals, orbit, and follow shots',
      'Obstacle sensing for safer fly-through and event coverage',
      'Lightweight and agile for tight urban and coastal locations',
      'Ideal for commercial, lifestyle, and travel storytelling'
    ],
    description: 'The DJI Mini 3 is our go-to aerial platform for elegant, lightweight drone cinematography—perfect for scenic luxury reveals, social content, and polished commercial coverage.'
  },
  {
    id: 'gear-gimbal',
    name: 'DJI Osmo Mobile 6 Gimbal',
    category: 'gimbal',
    model: 'DJI Osmo Mobile 6 • 3-Axis Smartphone Stabilizer',
    highlight: 'Ultra-smooth smartphone motion for handheld cinematic footage',
    badge: 'OSMO MOBILE 6',
    image: '/osmo-mobile6.jpg',
    specs: [
      '3-axis stabilization with ultra-smooth pan, tilt, and roll control',
      'Fast switch between portrait and landscape framing for social media',
      'ActiveTrack 6.0 for precise subject and face tracking',
      'Built-in extension rod for dynamic low-angle and overhead shots',
      'Quick launch with intuitive controls for fast run-and-gun filming'
    ],
    features: [
      'Inception mode and spin transitions for dynamic motion effects',
      'Timelapse, motionlapse, and dynamic zoom to elevate storytelling',
      'Perfect for travel vlogs, couple shoots, reels, and social campaigns',
      'Lightweight and compact for shooting through crowded or tight spaces'
    ],
    description: 'The DJI Osmo Mobile 6 gives us buttery-smooth handheld motion, making fast-paced content, intimate wedding moments, and cinematic mobile footage feel premium and highly polished.'
  },
];

export const PRICING_PACKAGES: PackageTier[] = [
  {
    id: 'starter-reels',
    name: 'Social Media Reel Starter',
    tagline: 'Perfect for cafes, gym creators, fashion brands & instant viral content',
    priceLKR: 25000,
    priceUSD: 85,
    gearSummary: '3-Axis Phone Gimbal + Wireless Mic + Pro Mobile 4K',
    duration: '2 - 3 Hours Shoot',
    deliverables: [
      '2x Fully Edited High-Energy Reels (9:16)',
      'Trendy Beat-Synced Music & Sound Effects',
      'Color Graded 4K Masterfiles',
      '24 - 48h Rapid Delivery'
    ],
    features: [
      'Up to 3 hours on-location coverage',
      '3-Axis Gimbal dynamic camera moves',
      'Crystal-clear wireless audio recording',
      '1 Round of revision included',
      'Optimized for Instagram & TikTok algorithms'
    ],
    idealFor: 'Restaurants, Influencers, Boutiques & Personal Brands'
  },
  {
    id: 'drone-essential',
    name: 'Aerial Drone Essential',
    tagline: 'Stunning 4K bird-eye perspectives for real estate, villas & landscapes',
    popular: true,
    priceLKR: 45000,
    priceUSD: 150,
    gearSummary: 'DJI 4K Drone + ND Cinema Filters + High Altitude Pilot',
    duration: 'Half Day (4 - 5 Hours)',
    deliverables: [
      '1x 4K Master Cinematic Video (16:9 Landscape)',
      '2x Vertical Aerial Reels (9:16)',
      '15x Color Graded 48MP Aerial Photos',
      'All Raw 4K Video Clips Included'
    ],
    features: [
      'Up to 5 hours on-site / 4 battery flight cycles',
      '4K 60fps HDR aerial sweeps & orbital shots',
      'Licensed & safe drone flight operations',
      'Full D-Log 10-Bit Color Grading',
      '48-72h Turnaround time'
    ],
    idealFor: 'Villas, Hotels, Land Developers, Pre-shoots & Outdoor Events'
  },
  {
    id: 'complete-cinematic',
    name: 'Complete Cinematic Pro',
    tagline: 'The ultimate dual-angle combo: Drone Aerials + Smooth Gimbal Walkthrough',
    popular: false,
    priceLKR: 75000,
    priceUSD: 250,
    gearSummary: 'DJI 4K Drone + 3-Axis Mobile Gimbal + Wireless Mics + RGB Lighting',
    duration: 'Full Day Coverage (Up to 8 Hours)',
    deliverables: [
      '1x 4K Cinematic Highlight Film (2-3 Minutes)',
      '4x High-Impact Vertical Social Reels',
      '25+ 48MP Drone & Detail Stills',
      'Full Raw Footage Drive Transfer',
      'Express 48h Turnaround'
    ],
    features: [
      'Full day dual-perspective coverage',
      'High-altitude aerial reveals + intimate smooth gimbal tracking',
      'Wireless dual-mic interview/speech audio capture',
      'Custom title animations & sound design',
      '2 Rounds of revisions included'
    ],
    idealFor: 'Weddings, Music Videos, Big Commercials, Resorts & Multi-day Tours'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Kasun & Sandani',
    role: 'Newlyweds',
    project: 'Galle Fort Pre-Shoot & Homecoming Highlight',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    review: 'The drone shots over the ocean were unreal! And the gimbal shots made our walk along the ramparts feel like a movie trailer. Everyone on Instagram was asking who shot our reels!',
    location: 'Galle, Sri Lanka',
    gearUsed: 'Drone + Phone Gimbal Combo'
  },
  {
    id: 't-2',
    clientName: 'Malik Jayawardena',
    role: 'Managing Director, Horizon Villas',
    project: 'Luxury Resort & Pool Villa Commercial',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    review: 'Our booking inquiries increased by 40% in two weeks after publishing the reel and 4K aerial video. Super punctual, fast delivery, and the colors look world-class.',
    location: 'Mirissa / Weligama',
    gearUsed: '4K Drone Aerials & Smooth Walkthrough'
  },
  {
    id: 't-3',
    clientName: 'Dilini Fernando',
    role: 'Brand Founder, Aura Activewear',
    project: 'Social Media Campaign & Workout Reels',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    review: 'The speed and energy in the gimbal tracking shots were unmatched. Delivered the edited reels within 24 hours right before our product drop. 10/10 recommend!',
    location: 'Colombo',
    gearUsed: '3-Axis Phone Gimbal + Wireless Mics'
  }
];

export const FAQS = [
  {
    q: 'Why choose Drone + Phone Gimbal instead of huge heavy camera rigs?',
    a: 'Modern 4K mobile cameras with 3-axis stabilization deliver incredible dynamic range and allow lightning-fast setups, low-angle running shots, tight indoor glides, and native 9:16 vertical videos for TikTok and Instagram without heavy crew delays. Paired with our 4K drone, you get both grand bird’s-eye aerial scale and intimate cinema moves at a fraction of the cost and time.'
  },
  {
    q: 'How fast do I receive the final edited videos?',
    a: 'We pride ourselves on fast turnarounds! Social media reels are delivered within 24–48 hours so you can capitalize on momentum. Full 4K landscape highlight films and color-graded aerial cuts are delivered within 3–5 business days.'
  },
  {
    q: 'Can you fly the drone in any location in Sri Lanka?',
    a: 'We operate strictly adhering to Civil Aviation Authority regulations. We fly in permissible zones across beaches, tea estates, mountains, private resorts, and event venues. If special permits or permissions are required for your location, we guide and handle the coordination.'
  },
  {
    q: 'Do I get the unedited raw video clips?',
    a: 'Yes! All raw 4K drone clips and high-resolution gimbal takes can be provided via high-speed Google Drive / cloud download or transferred directly to your external SSD upon request.'
  },
  {
    q: 'How do I book and what is the payment process?',
    a: 'You can use our instant booking form or hit the WhatsApp button directly. A 20% advance secures your date in our calendar, and the balance is payable upon delivery of the final master footage.'
  }
];

export const WHY_US_STATS = [
  { value: '500+', label: 'Safe Drone Flights', detail: 'Zero incidents & precision GPS control' },
  { value: '250+', label: 'Viral Reels Produced', detail: 'Over 2.5M cumulative social views' },
  { value: '24-48h', label: 'Express Delivery', detail: 'Rapid edits ready for your feeds' },
  { value: '100%', label: '5-Star Client Rating', detail: 'Trusted across Sri Lanka & abroad' }
];
