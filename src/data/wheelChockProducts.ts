export type WheelChockProduct = {
  model: string;
  material: string;
  gvwCapacity: string;
  tireSize: string;
  dimensions: string;
  weight: string;
  summary: string;
};

export const wheelChockProducts: WheelChockProduct[] = [
  {
    model: '12590',
    material: 'Polyurethane',
    gvwCapacity: '5 Ton (10,000 lbs.)',
    tireSize: 'Up to 27 in. O.D.',
    dimensions: '8 x 7 x 6 in. | 203 x 178 x 152.5 mm',
    weight: '2 lbs. | 0.9 kg',
    summary: 'Commercial-grade wheel chock for smaller vehicle and trailer applications within the published guide range.',
  },
  {
    model: '12591',
    material: 'Polyurethane',
    gvwCapacity: '10 Ton (20,000 lbs.)',
    tireSize: 'Up to 35 in. O.D.',
    dimensions: '8.5 x 7 x 6.25 in. | 216 x 178 x 159 mm',
    weight: '3 lbs. | 1.3 kg',
    summary: 'Heavy-duty polyurethane wheel chock for medium-duty vehicle applications needing more holding range.',
  },
  {
    model: '12592',
    material: 'Polyurethane',
    gvwCapacity: '20 Ton (40,000 lbs.)',
    tireSize: 'Up to 45 in. O.D.',
    dimensions: '11 x 8 x 7 in. | 279 x 203 x 178 mm',
    weight: '4 lbs. | 1.8 kg',
    summary: 'Commercial-grade wheel chock sized for larger tire diameters and heavier-duty service applications.',
  },
  {
    model: '12593',
    material: 'Polyurethane',
    gvwCapacity: '60 Ton (120,000 lbs.)',
    tireSize: '46 in. to 65 in. O.D.',
    dimensions: '12.125 x 15.25 x 10.75 in. | 308 x 387 x 273 mm',
    weight: '16 lbs. | 7.25 kg',
    summary: 'Large heavy-duty wheel chock for bigger equipment and work environments with more demanding holding needs.',
  },
  {
    model: '12594',
    material: 'Polyurethane',
    gvwCapacity: '120 Ton (240,000 lbs.)',
    tireSize: 'Up to 65 in. O.D.',
    dimensions: '16.25 x 14.5 x 13.25 in. | 413 x 368 x 337 mm',
    weight: '20 lbs. | 9 kg',
    summary: 'High-capacity polyurethane wheel chock for heavy equipment and severe-duty positioning applications.',
  },
  {
    model: '12595',
    material: 'Polyurethane',
    gvwCapacity: '250 Ton (500,000 lbs.)',
    tireSize: 'Up to 142 in. O.D.',
    dimensions: '22 x 14.75 x 10.5 in. | 559 x 375 x 267 mm',
    weight: '37 lbs. | 16.75 kg',
    summary: 'Largest listed polyurethane wheel chock in the catalog set for extreme heavy-equipment applications.',
  },
  {
    model: '12597',
    material: 'Rubber',
    gvwCapacity: '20 Ton (40,000 lbs.)',
    tireSize: 'Up to 45 in. O.D.',
    dimensions: '10 x 8 x 6 in. | 254 x 203 x 152 mm',
    weight: '9 lbs. | 4 kg',
    summary: 'Standard molded-rubber wheel chock with eye bolt provision and dual-side slope for easier positioning.',
  },
];
