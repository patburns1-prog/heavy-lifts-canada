export type CribbingProduct = {
  model: string;
  slug: string;
  title: string;
  capacity: string;
  dimensions?: string;
  weight?: string;
  kitRange?: string;
  summary: string;
  image: string;
  bestFor: string;
};

export const cribbingProducts: CribbingProduct[] = [
  {
    model: '12500 / 12501 / 12502 / 12503',
    slug: '12500-12501-12502-12503',
    title: 'Interlocking Steel Cribbing Stands',
    capacity: '55 ton capacity per stand',
    dimensions: '3 in., 6 in., and 9 in. stackable stand heights | 12 in. diameter stack',
    summary: 'Stackable steel cribbing stands designed to support hydraulic cylinders or outriggers and used individually or stacked for different working heights.',
    image: '/images/catalog/page-115.jpg',
    bestFor: 'Stackable steel support where outriggers or cylinders are involved.'
  },
  {
    model: '12520',
    slug: '12520',
    title: 'CriBLOK Single Cribbing Block',
    capacity: '100 tons',
    dimensions: '21 x 9 x 5 in. | 53 x 23 x 12.7 cm',
    weight: '33 lbs. | 15 kg',
    summary: 'Single UHMWPE cribbing block built for the ESCO CriBLOK locking cribbing system.',
    image: '/images/catalog/page-116.jpg',
    bestFor: 'Single-block system expansion or component replacement.'
  },
  {
    model: '12521',
    slug: '12521',
    title: 'CriBLOK Bottom Stability Locking Plate',
    capacity: '100 tons',
    dimensions: '23 x 23 x 1.5 in. | 58 x 58 x 3.8 cm',
    weight: '25 lbs. | 11 kg',
    summary: 'Patented interlocking bottom plate used as the foundation layer in the CriBLOK cribbing system.',
    image: '/images/catalog/page-116.jpg',
    bestFor: 'Base-layer support for a structured CriBLOK stack.'
  },
  {
    model: '12523',
    slug: '12523',
    title: 'CriBLOK Top Stability Locking Plate',
    capacity: '100 tons',
    dimensions: '18 x 18 x 1.5 in. | 45 x 45 x 3.8 cm',
    weight: '19 lbs. | 8.6 kg',
    summary: 'Top stability locking plate that finishes the CriBLOK support stack and helps create a stable support surface.',
    image: '/images/catalog/page-116.jpg',
    bestFor: 'Finishing a stable support surface on a CriBLOK setup.'
  },
  {
    model: '12531',
    slug: '12531',
    title: 'CriBLOK Cribbing System Medium Kit',
    capacity: '100 tons',
    weight: '440 lbs. | 200 kg',
    kitRange: 'Minimum height 7.75 in. | 19.7 cm • Maximum height 33 in. | 84 cm',
    summary: 'Medium kit including 12 blocks, 1 top plate, and 1 bottom plate for a complete locking cribbing setup.',
    image: '/images/catalog/page-116.jpg',
    bestFor: 'Complete medium-height cribbing setups with kit simplicity.'
  },
  {
    model: '12532',
    slug: '12532',
    title: 'CriBLOK Cribbing System Max Kit',
    capacity: '100 tons',
    weight: '836 lbs. | 379 kg',
    kitRange: 'Minimum height 7.75 in. | 19.7 cm • Maximum height 63 in. | 160 cm',
    summary: 'Max kit including 24 blocks, 1 top plate, and 1 bottom plate for higher built-up cribbing configurations.',
    image: '/images/catalog/page-116.jpg',
    bestFor: 'Higher built-up cribbing applications and larger support height needs.'
  },
  {
    model: '10751 / 10752 / 10753 / 10754 / 10756',
    slug: '10751-10752-10753-10754-10756',
    title: 'Support Plates',
    capacity: '25 ton to 100 ton range depending on model',
    dimensions: '12 x 12 x 1 in., 18 x 18 x 1 in., and 24 x 24 x 2 in. options',
    summary: 'Support plates designed to create stable, non-slip foundations on soft earth, uneven ground, muddy surfaces, and other unstable working conditions.',
    image: '/images/catalog/page-115.jpg',
    bestFor: 'Uneven terrain, soft surfaces, and foundation stability problems.'
  },
];
