export type MammutProduct = {
  model: string;
  slug: string;
  title: string;
  capacity: string;
  minHeight: string;
  maxHeight: string;
  stroke: string;
  weight: string;
  summary: string;
  image: string;
  bestFor: string;
};

export const mammutProducts: MammutProduct[] = [
  {
    model: '91000',
    slug: '91000-3-stage-high-tonnage-air-hydraulic-jack',
    title: 'MAMMUT 3-STAGE HIGH TONNAGE AIR HYDRAULIC JACK',
    capacity: '88/55/27 ton',
    minHeight: '13.5 in | 342 mm',
    maxHeight: '33.4 in | 848 mm',
    stroke: '19.9 in | 506 mm',
    weight: '359 lb | 163 kg',
    summary: '3-stage Mammut jack designed for low lifting heights without giving up high-capacity performance.',
    image: '/images/mammut-91000.png',
    bestFor: 'Tight-clearance lifting where high capacity still matters.'
  },
  {
    model: '91003',
    slug: '91003-2-stage-high-tonnage-air-hydraulic-jack',
    title: 'MAMMUT 2-STAGE HIGH TONNAGE AIR HYDRAULIC JACK',
    capacity: '88/55 ton',
    minHeight: '16.4 in | 419 mm',
    maxHeight: '33 in | 839 mm',
    stroke: '16.5 in | 420 mm',
    weight: '381 lb | 173 kg',
    summary: '2-stage Mammut jack built for additional lift height while maintaining high tonnage capability.',
    image: '/images/mammut-jacks.png',
    bestFor: 'Buyers balancing strong tonnage with more lift height.'
  },
  {
    model: '91004',
    slug: '91004-high-tonnage-air-hydraulic-jack',
    title: 'MAMMUT HIGH TONNAGE AIR HYDRAULIC JACK',
    capacity: '110 ton',
    minHeight: '28.5 in | 725 mm',
    maxHeight: '46 in | 1170 mm',
    stroke: '17.5 in | 445 mm',
    weight: '626 lb | 284 kg',
    summary: '110 ton high-lift Mammut jack for applications that need more vertical reach without extensions.',
    image: '/images/mammut-jacks.png',
    bestFor: 'Higher-reach lifting applications where vertical travel is key.'
  },
  {
    model: '91043',
    slug: '91043-110-ton-low-profile-jack',
    title: 'MAMMUT 110-TON LOW-PROFILE JACK',
    capacity: '110 ton',
    minHeight: '15.7 in | 399 mm',
    maxHeight: '23.7 in | 602 mm',
    stroke: '8 in | 203 mm',
    weight: '370 lb | 168 kg',
    summary: 'Low-profile 110 ton Mammut jack built for high-tonnage lifting where clearance is tight.',
    image: '/images/mammut-jacks.png',
    bestFor: 'High-tonnage work with tighter starting clearance.'
  },
  {
    model: '91005',
    slug: '91005-165-ton-high-lifting-jack',
    title: 'MAMMUT 165 TON HIGH LIFTING JACK',
    capacity: '165 ton',
    minHeight: '35.4 in | 901 mm',
    maxHeight: '57.2 in | 1455 mm',
    stroke: '21.8 in | 554 mm',
    weight: '831 lb | 377 kg',
    summary: 'High-capacity Mammut jack engineered for heavier equipment and larger service work.',
    image: '/images/mammut-jacks.png',
    bestFor: 'Heavier equipment service where more capacity is required.'
  },
  {
    model: '91008',
    slug: '91008-220-ton-high-tonnage-air-hydraulic-jack',
    title: 'MAMMUT 220 TON HIGH TONNAGE AIR HYDRAULIC JACK',
    capacity: '220 ton',
    minHeight: '25.5 in | 650 mm',
    maxHeight: '39.3 in | 1000 mm',
    stroke: '13.7 in | 350 mm',
    weight: '848 lb | 385 kg',
    summary: '220 ton Mammut air hydraulic jack built for the heaviest lifting demands.',
    image: '/images/mammut-jacks.png',
    bestFor: 'Extreme heavy-duty lifting demands and upper-end tonnage needs.'
  }
];
