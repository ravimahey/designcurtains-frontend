export interface HeadingStyle {
  id: string;
  name: string;
  subtitle: string;
  fullness: string;
  description: string;
  bestFor: string[];
  trackType: string;
  tag: string;
  imageUrl: string;
  features: string[];
}

export interface ProductItem {
  id: string;
  title: string;
  category: 'curtains' | 'blinds' | 'shutters' | 'motorisation' | 'soft-furnishings';
  subtitle: string;
  description: string;
  leadTime: string;
  warranty: string;
  startingPrice: string;
  tag: string;
  imageUrl: string;
  highlights: string[];
}

export interface FabricSwatch {
  id: string;
  name: string;
  composition: string;
  opacity: 'Sheer' | 'Semi-Sheer' | 'Light Filtering' | 'Blockout';
  origin: string;
  hexColor: string;
  textureDescription: string;
  imageUrl: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  suburb: string;
  date: string;
  rating: number;
  project: string;
  comment: string;
  verified: boolean;
}

export interface SuburbCoverage {
  postcode: string;
  suburb: string;
  region: string;
  freeInHome: boolean;
  transitDays: string;
}

export const HEADING_STYLES: HeadingStyle[] = [
  {
    id: 's-fold',
    name: 'S-Fold / Wave Curtain',
    subtitle: 'The contemporary architect-favourite with uninterrupted undulating curves',
    fullness: '2.0x – 2.3x Fabric Fullness',
    description: 'The S-Fold (or Ripple Fold) uses custom continuous gliders on slimline ceiling tracks to create smooth, flowing waves from end to end. Whether opened or stacked, the curtain holds its architectural ripple without sagging.',
    bestFor: ['Floor-to-ceiling glass doors', 'Open plan living & dining', 'Modern luxury apartments', 'Minimalist architectural homes'],
    trackType: 'Ceiling-recessed or wall-mounted slimline track',
    tag: 'Most Popular 2026',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    features: ['Even soft rippling when drawn or open', 'Small stack back preserving maximum natural light', 'Ideal for Belgian linen & sheer voiles', 'Fully compatible with silent Somfy motorised tracks']
  },
  {
    id: 'triple-pinch',
    name: 'Triple Pinch Pleat (French Pleat)',
    subtitle: 'Timeless luxury with rich, tailored hand-folded volume',
    fullness: '2.5x Fabric Fullness',
    description: 'Triple pinch pleats are permanently stitched together at the top heading in clusters of three, creating deep classic folds that cascade to the floor with opulent weight and elegance.',
    bestFor: ['Formal dining rooms', 'Heritage & Hamptons style residences', 'Master suites with heavy drapes', 'High ceilings & crown mouldings'],
    trackType: 'Decorative timber or brass poles, or commercial duty tracks',
    tag: 'Classic Luxury',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    features: ['Maximum fabric richness and acoustic dampening', 'Stays impeccably uniform year after year', 'Pairs magnificently with silk, velvet & heavy linen', 'Superior thermal blockout efficiency']
  },
  {
    id: 'double-pinch',
    name: 'Double Pinch / Euro Pleat',
    subtitle: 'A streamlined, tailored balance of classic sophistication and clean lines',
    fullness: '2.0x – 2.2x Fabric Fullness',
    description: 'The Euro or double pleat pinches two folds together, offering a clean, contemporary tailored look that feels lighter than traditional triple pleat while retaining structured drape.',
    bestFor: ['Master bedrooms', 'Contemporary family homes', 'Boutique hotel aesthetics', 'Guest rooms'],
    trackType: 'Standard concealed tracks or decorative rod rings',
    tag: 'Modern Tailored',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    features: ['Cleaner silhouette with fewer pleat clusters', 'Efficient stacking when opened', 'Excellent drape hold for textured fabrics', 'Economical fabric yield without compromising luxury']
  },
  {
    id: 'inverted-box',
    name: 'Inverted Box Pleat',
    subtitle: 'Flat architectural surface with hidden backward folds',
    fullness: '1.8x – 2.0x Fabric Fullness',
    description: 'Inverted box pleats feature flat fabric panels facing forward with crisp folded pleats tucked behind. It gives rooms a structured, tailored, geometric look ideal for modern spaces.',
    bestFor: ['Urban apartments', 'Modern studies & executive libraries', 'Minimalist architectural windows', 'Lounge rooms with clean lines'],
    trackType: 'Wall or ceiling track systems',
    tag: 'Architectural',
    imageUrl: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
    features: ['Crisp flat front facing fabric panels', 'Deep tailored box pleats at rear', 'Ideal for geometric or patterned fabrics', 'Neat, tidy stack depth']
  },
  {
    id: 'pelmet-valance',
    name: 'Bespoke Pelmets & Valances',
    subtitle: 'Custom upholstered or timber-crafted crowns for total thermal seal',
    fullness: 'Custom Structured Enclosure',
    description: 'Custom padded and upholstered pelmets conceal curtain hardware, block top-edge light leaks completely, and prevent heat loss in winter, boosting room energy rating significantly.',
    bestFor: ['Home theatres', '100% blockout nurseries & bedrooms', 'Grand traditional residences', 'Commercial suites'],
    trackType: 'Internal concealed multi-track system',
    tag: 'Thermal & Sound Barrier',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    features: ['Eliminates halo light bleed across ceiling', 'Upholstered in matching or contrasting designer fabric', 'Significant heating & cooling cost savings', 'Can house hidden LED ambient cove lighting']
  }
];

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: 's-fold-sheers',
    title: 'Architectural S-Fold Sheers',
    category: 'curtains',
    subtitle: 'Diffused daylight, gentle breeze movement & daytime privacy',
    description: 'Custom handcrafted in Sydney with premium wide-width European linens and textured voiles. Transforms bright Sydney sunlight into a luminous, serene glow.',
    leadTime: '3 – 4 Weeks Custom Made',
    warranty: '10-Year Hardware & Workmanship Warranty',
    startingPrice: 'From $420 / standard window',
    tag: 'Sydney Best-Seller',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Continuous ripple fold track system', 'Weighted bottom hems without visible chain', 'UV resistant fabric coatings for harsh Australian sun', 'Seamless up to 320cm drop height']
  },
  {
    id: 'dual-curtain-system',
    title: 'Dual Day/Night Curtain Suites',
    category: 'curtains',
    subtitle: 'Floating sheer layer paired with 100% blackout thermal drapes',
    description: 'The ultimate luxury master bedroom solution. Run an airy sheer layer for daytime filtered light and a separate heavy acoustic blockout curtain for total darkness and climate control.',
    leadTime: '3 – 4 Weeks',
    warranty: '10-Year Warranty',
    startingPrice: 'From $790 / double track',
    tag: 'Master Suite Essential',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Dual track profile concealed in ceiling recess', 'Complete light seals for deep sleep', 'Thermal insulating backing reduces energy bills', 'Manual wand or twin motor automation']
  },
  {
    id: 'plantation-shutters',
    title: 'Basswood & Thermalite Plantation Shutters',
    category: 'shutters',
    subtitle: 'Permanent architectural value with precision light and airflow louvers',
    description: 'Custom engineered for Sydney homes. Solid premium basswood for living zones and moisture-proof Thermalite composite for bathrooms and wet areas. Clearview concealed tilt bar available.',
    leadTime: '3 – 5 Weeks',
    warranty: '15-Year Structural Warranty',
    startingPrice: 'From $350 / sqm',
    tag: 'Property Value Booster',
    imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Concealed rear tilt mechanism', 'Mortise and tenon joinery for zero sagging', 'Moisture-proof options for en-suites and laundries', 'Available in custom Dulux colour matches']
  },
  {
    id: 'motorised-somfy',
    title: 'Smart Motorised Automation',
    category: 'motorisation',
    subtitle: 'Whisper-quiet electric tracks powered by Somfy & Automate',
    description: 'Effortlessly glide floor-to-ceiling drapes with wireless handheld remotes, wall switches, smartphone apps, or automated schedules via Apple HomeKit, Alexa, and Google Home.',
    leadTime: 'Integrated with custom curtains',
    warranty: '5-Year Motor & Electrical Warranty',
    startingPrice: 'From $380 / motor add-on',
    tag: 'Smart Home Certified',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Ultra-silent Somfy Glydea & Automate motors', 'Rechargeable lithium battery or hardwired 240V', 'Automated sunrise / sunset scheduling', 'Gentle touch-motion start (pull curtain to glide)']
  },
  {
    id: 'designer-roller-blinds',
    title: 'Custom Roller & Sunscreen Blinds',
    category: 'blinds',
    subtitle: 'Clean minimalist lines, anti-glare sunscreens & blockout options',
    description: 'Sleek, slimline window treatments engineered with premium Acmeda hardware and fire-retardant, anti-fungal fabrics suited to Sydney heat and humidity.',
    leadTime: '2 – 3 Weeks',
    warranty: '7-Year Warranty',
    startingPrice: 'From $195 / window',
    tag: 'Clean Minimalist',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Dual roller combinations (Sunscreen + Blockout)', 'Heavy duty aluminium tubes preventing bowing', 'Child-safe chain tensioners or cordless motorisation', 'Matching bottom rail finishes in anodised, white or black']
  },
  {
    id: 'luxury-roman-blinds',
    title: 'Tailored Roman Blinds',
    category: 'blinds',
    subtitle: 'Soft fabric folds with the compact efficiency of a blind',
    description: 'Custom stitched with rear battens for crisp horizontal pleats when raised. Finished with blockout or translucent linings to suit living rooms, dining spaces, and bedrooms.',
    leadTime: '3 – 4 Weeks',
    warranty: '7-Year Warranty',
    startingPrice: 'From $290 / window',
    tag: 'Tailored Fabric Fold',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Available in front or back battens', 'Soft cascade or flat fold styles', 'Fully lined with thermal blackout or dimout fabric', 'Motorised or smooth bead-chain operation']
  },
  {
    id: 'custom-bedheads-cushions',
    title: 'Custom Upholstery, Bedheads & Cushions',
    category: 'soft-furnishings',
    subtitle: 'Cohesive room styling coordinating fabrics across your entire suite',
    description: 'Our in-house decorators craft custom upholstered bedheads, bench cushions, throw pillows, and wallpaper to harmonize flawlessly with your bespoke window furnishings.',
    leadTime: '3 – 4 Weeks',
    warranty: '5-Year Upholstery Warranty',
    startingPrice: 'From $140 / custom cushion',
    tag: 'Full Room Harmony',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Extensive international designer fabric library', 'High-density Dunlop commercial foam inserts', 'Piped, flanged or French seam custom edge finishes', 'Complete interior styling consultation']
  }
];

export const FABRIC_SWATCHES: FabricSwatch[] = [
  {
    id: 'belgian-linen-ecru',
    name: 'Belgian Linen Whisper',
    composition: '100% Pure Washed Flax Linen',
    opacity: 'Sheer',
    origin: 'Belgium',
    hexColor: '#EBE6DE',
    textureDescription: 'Subtle slub texture with organic airy drape that filters Sydney daylight beautifully.',
    imageUrl: 'https://images.unsplash.com/photo-1528458876885-188c03c58448?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'oatmeal-coastal-boucle',
    name: 'Oatmeal Coastal Bouclé',
    composition: '65% Cotton, 35% Linen Blend',
    opacity: 'Semi-Sheer',
    origin: 'Italy',
    hexColor: '#D8CEBE',
    textureDescription: 'Tactile textured weave offering soft thermal insulation and daytime privacy.',
    imageUrl: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'slate-velour-blockout',
    name: 'Charcoal Velvet Blockout',
    composition: '100% Triple-Pass Blockout Micro-Velvet',
    opacity: 'Blockout',
    origin: 'Australia',
    hexColor: '#2B3130',
    textureDescription: 'Deep matte pile with 100% total light barrier and acoustic sound absorption.',
    imageUrl: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'warm-sandstone-voile',
    name: 'Sandstone Luminous Voile',
    composition: '100% High-Grade Poly-Linen Blend',
    opacity: 'Sheer',
    origin: 'France',
    hexColor: '#F5EFE6',
    textureDescription: 'Crease-free architectural voile with high UV resistance against fading in northern sun.',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'eucalyptus-sage-linen',
    name: 'Eucalyptus Sage Sheer',
    composition: '70% European Linen, 30% Modal',
    opacity: 'Semi-Sheer',
    origin: 'Portugal',
    hexColor: '#7A8B7E',
    textureDescription: 'Botanical Australian-inspired green tint that softens harsh summer glare.',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pearl-satin-blockout',
    name: 'Pearl White Blockout Twill',
    composition: '4-Pass Thermal Foam Coated Fabric',
    opacity: 'Blockout',
    origin: 'Australia',
    hexColor: '#F0ECE1',
    textureDescription: 'Smooth crisp face fabric with absolute zero light transmission and heat barrier.',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Eleanor & Marcus Thorne',
    suburb: 'Castle Hill, NSW',
    date: 'February 2026',
    rating: 5,
    project: 'Full Home Rebuild: S-Fold Sheers + Somfy Motorisation',
    comment: 'Design Curtains transformed our living pavilion! Their Castle Hill showroom team helped us select the perfect Belgian linen and recessed tracks. The whisper-quiet Somfy motorisation operated through our smart home app is pure bliss. Craftsmanship is simply second to none.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Julian Henderson',
    suburb: 'Bella Vista Waters, NSW',
    date: 'January 2026',
    rating: 5,
    project: 'Dual Day/Night Curtains in 4 Bedrooms',
    comment: 'After 52 years in Sydney you can see why they have such a stellar reputation. Laser measurement was 100% spot-on, installation was spotless, and the blockout drapes make our master bedroom feel like a 6-star luxury hotel suite.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Sophie Chen',
    suburb: 'Mosman, Lower North Shore',
    date: 'November 2025',
    rating: 5,
    project: 'Waterfront Penthouse Floor-to-Ceiling Sheers',
    comment: 'We have massive 3.2m curved windows facing the water. Two other curtain companies in Sydney declined the job citing technical difficulty. Design Curtains handled it seamlessly from custom bent tracks to steam installation. Exceptional service!',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'David & Kerry Wilson',
    suburb: 'Baulkham Hills, NSW',
    date: 'December 2025',
    rating: 5,
    project: 'Basswood Plantation Shutters + Living Room S-Folds',
    comment: 'The quality of the timber shutters and the fabric drape in our living room surpassed our expectations. Friendly, knowledgeable, and honest pricing with zero pushy sales tactics. Highly recommend visiting their showroom!',
    verified: true
  }
];

export const POPULAR_SUBURBS: SuburbCoverage[] = [
  { postcode: '2154', suburb: 'Castle Hill', region: 'Hills District', freeInHome: true, transitDays: 'Daily Mobile Van' },
  { postcode: '2153', suburb: 'Baulkham Hills', region: 'Hills District', freeInHome: true, transitDays: 'Daily Mobile Van' },
  { postcode: '2153', suburb: 'Bella Vista', region: 'Hills District', freeInHome: true, transitDays: 'Daily Mobile Van' },
  { postcode: '2155', suburb: 'Kellyville & Rouse Hill', region: 'Hills District', freeInHome: true, transitDays: 'Daily Mobile Van' },
  { postcode: '2158', suburb: 'Dural & Glenhaven', region: 'Hills District', freeInHome: true, transitDays: 'Daily Mobile Van' },
  { postcode: '2060', suburb: 'North Sydney', region: 'North Shore', freeInHome: true, transitDays: 'Mon / Wed / Fri' },
  { postcode: '2088', suburb: 'Mosman', region: 'Lower North Shore', freeInHome: true, transitDays: 'Tue / Thu / Sat' },
  { postcode: '2067', suburb: 'Chatswood', region: 'Upper North Shore', freeInHome: true, transitDays: 'Mon / Wed / Fri' },
  { postcode: '2027', suburb: 'Double Bay & Darling Point', region: 'Eastern Suburbs', freeInHome: true, transitDays: 'Tue / Thu / Sat' },
  { postcode: '2030', suburb: 'Vaucluse & Watsons Bay', region: 'Eastern Suburbs', freeInHome: true, transitDays: 'Tue / Thu / Sat' },
  { postcode: '2150', suburb: 'Parramatta', region: 'Western Sydney', freeInHome: true, transitDays: 'Daily Mobile Van' },
  { postcode: '2145', suburb: 'Westmead & Wentworthville', region: 'Western Sydney', freeInHome: true, transitDays: 'Daily Mobile Van' },
  { postcode: '2095', suburb: 'Manly', region: 'Northern Beaches', freeInHome: true, transitDays: 'Tue / Fri' }
];

export const FAQS = [
  {
    q: 'How does your Free In-Home Measure & Quote work?',
    a: 'One of our senior interior decorators visits your home anywhere in Greater Sydney with comprehensive fabric sample books, tracking profiles, and laser measurement equipment. We analyze your natural lighting, room proportions, window orientation, and functional needs (such as light blockout or acoustic dampening) and provide an itemized quote on the spot with zero obligation.'
  },
  {
    q: 'What is the difference between S-Fold (Wave) curtains and traditional pinch pleats?',
    a: 'S-Fold curtains use a specialized glided track that creates uniform flowing ripples without gathering or puckering at the top. It gives a sleek modern architectural appearance and folds back into a compact space, letting in maximum light. Pinch pleats (double or triple) are sewn into permanent clusters at the top, creating a richer, more structured and formal appearance favored in traditional and classic interiors.'
  },
  {
    q: 'How do motorised curtains work and can they integrate with Google Home or Apple HomeKit?',
    a: 'Yes! We are certified partners with Somfy and Automate. Our motorised tracks can be powered either via a concealed 240V hardwired line or ultra-long-lasting rechargeable lithium battery packs (requiring a charge just once or twice per year). They integrate smoothly with your smartphone, Apple HomeKit, Alexa, Google Home, and home automation hubs like Control4 or CBus.'
  },
  {
    q: 'Where are your curtains made and what is the typical turnaround time?',
    a: 'All our custom curtains, pelmets, and roman blinds are precision cut and hand-finished right here in Sydney, Australia. Standard turnaround from fabric approval to white-glove installation is typically 3 to 4 weeks. Plantation shutters and specialized imported fabrics take approximately 4 to 5 weeks.'
  },
  {
    q: 'What warranty do you provide?',
    a: 'Because we fabricate locally using commercial-grade tracks and premium fabrics, we provide a 10-Year Warranty on curtain tracks, hardware, and fabrication workmanship, a 15-Year Structural Warranty on Basswood plantation shutters, and a 5-Year manufacturer replacement warranty on Somfy motors.'
  },
  {
    q: 'Where is your showroom located and do I need an appointment?',
    a: 'Our flagship Sydney showroom is located at Shop 9, Castle Hill Homemaker Centre, 6 Victoria Ave, Castle Hill NSW 2154. We are open 7 days a week with free easy parking. Walk-ins are always warmly welcomed, though you can also book a designated private interior design appointment to guarantee one-on-one decorator time.'
  }
];
