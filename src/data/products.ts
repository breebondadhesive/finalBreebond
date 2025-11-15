export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  weight: string;
  color: string;
  standard: string;
  bedThickness: string;
  features: string[];
  applications: string[];
  technicalSpecs: {
    label: string;
    value: string;
  }[];
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'type-3-101',
    name: 'TYPE-3 101',
    subtitle: 'C2TE Standard',
    description: 'Polymer modified cement-based tile adhesive for standard applications. Ideal for fixing ceramic tiles on walls and floors.',
    image: '/images/gallery/C2TE.png',
    weight: '20kg || 40kg',
    color: 'Grey',
    standard: 'EN12004 | IS15477-2019',
    bedThickness: '3-9mm (thin-medium bed)',
    features: [
      'Superior bond strength',
      'Excellent workability',
      'Water resistant',
      'Suitable for interior and exterior use',
      'Non-slip formulation',
      'Extended open time'
    ],
    applications: [
      'Ceramic tiles on walls',
      'Ceramic tiles on floors',
      'Vitrified tiles',
      'Residential projects',
      'Commercial spaces',
      'Swimming pools'
    ],
    technicalSpecs: [
      { label: 'Classification', value: 'C2TE' },
      { label: 'Packaging', value: '20kg || 40kg bags' },
      { label: 'Color', value: 'Grey' },
      { label: 'Bed Thickness', value: '3-9mm' },
      { label: 'Open Time', value: '20 minutes' },
      { label: 'Pot Life', value: '3-4 hours' },
      { label: 'Water Requirement', value: '6-7 liters per 20kg' },
      { label: 'Coverage', value: '4-5 kg/m² (at 3mm)' },
      { label: 'Standards', value: 'EN12004, IS15477-2019' },
      { label: 'Tensile Adhesion', value: '≥1.0 N/mm²' }
    ]
  },
  {
    id: '2',
    slug: 'type-4-s1',
    name: 'TYPE-4 S1',
    subtitle: 'C2TE-S1 Enhanced',
    description: 'Enhanced deformability for external and demanding applications. Perfect for high-traffic areas and challenging substrates.',
    image: '/images/gallery/C2TES1.png',
    weight: '20kg || 40kg',
    color: 'Grey',
    standard: 'EN12004 | IS15477-2019',
    bedThickness: '3-10mm',
    features: [
      'Enhanced deformability (S1)',
      'Excellent adhesion on difficult substrates',
      'High flexibility',
      'Suitable for heated floors',
      'Non-slip formulation',
      'Weather resistant'
    ],
    applications: [
      'External facades',
      'High-traffic areas',
      'Heated floor systems',
      'Large format tiles',
      'Natural stone',
      'Porcelain tiles'
    ],
    technicalSpecs: [
      { label: 'Classification', value: 'C2TE-S1' },
      { label: 'Packaging', value: '20kg || 40kg bags' },
      { label: 'Color', value: 'Grey' },
      { label: 'Bed Thickness', value: '3-10mm' },
      { label: 'Open Time', value: '30 minutes' },
      { label: 'Pot Life', value: '3-4 hours' },
      { label: 'Water Requirement', value: '6.5-7.5 liters per 20kg' },
      { label: 'Coverage', value: '4-5 kg/m² (at 3mm)' },
      { label: 'Standards', value: 'EN12004, IS15477-2019' },
      { label: 'Deformability', value: '≥2.5mm (S1)' }
    ]
  },
  {
    id: '3',
    slug: 'type-4-s1-plus',
    name: 'TYPE-4 S1-Plus',
    subtitle: 'C2TE-S1-Plus Premium',
    description: 'Superior bond strength with extended open time. Designed for professional applications requiring maximum performance and thermal stress resistance.',
    image: '/images/gallery/C2TE - S1- Plus.png',
    weight: '20kg || 40kg',
    color: 'Grey / White',
    standard: 'EN12004 | IS15477-2019',
    bedThickness: '3-12mm',
    features: [
      'Superior bond strength',
      'Extended open time',
      'High deformability',
      'Thermal stress resistant',
      'Suitable for all tile types',
      'Professional grade formula'
    ],
    applications: [
      'Large format porcelain tiles',
      'Natural stone cladding',
      'Swimming pools',
      'Critical installations',
      'High-rise buildings',
      'Industrial floors'
    ],
    technicalSpecs: [
      { label: 'Classification', value: 'C2TE-S1-Plus' },
      { label: 'Packaging', value: '20kg || 40kg bags' },
      { label: 'Color', value: 'Grey / White' },
      { label: 'Bed Thickness', value: '3-12mm' },
      { label: 'Open Time', value: '40 minutes' },
      { label: 'Pot Life', value: '4-5 hours' },
      { label: 'Water Requirement', value: '7-8 liters per 20kg' },
      { label: 'Coverage', value: '3.5-4.5 kg/m² (at 3mm)' },
      { label: 'Standards', value: 'EN12004, IS15477-2019' },
      { label: 'Tensile Adhesion', value: '≥1.5 N/mm²' }
    ]
  },
  {
    id: '4',
    slug: 'type-5-s2-flex',
    name: 'TYPE-5 S2-Flex',
    subtitle: 'C2TE-S2-Flex Maximum',
    description: 'Maximum flexibility for challenging substrates. The ultimate solution for demanding applications with extreme deformability requirements.',
    image: '/images/gallery/C2TE - S2 - Flex.png',
    weight: '20kg || 40kg',
    color: 'Grey / White',
    standard: 'EN12004 | IS15477-2019',
    bedThickness: '3-15mm',
    features: [
      'Maximum flexibility (S2)',
      'High deformability (≥5mm)',
      'Excellent crack bridging',
      'Suitable for difficult substrates',
      'Extreme weather resistant',
      'Premium performance'
    ],
    applications: [
      'Substrates with movement',
      'Wood and plywood',
      'Existing tile overlay',
      'Crack-prone areas',
      'Extreme climate zones',
      'Special installations'
    ],
    technicalSpecs: [
      { label: 'Classification', value: 'C2TE-S2-Flex' },
      { label: 'Packaging', value: '20kg || 40kg bags' },
      { label: 'Color', value: 'Grey / White' },
      { label: 'Bed Thickness', value: '3-15mm' },
      { label: 'Open Time', value: '45 minutes' },
      { label: 'Pot Life', value: '4-5 hours' },
      { label: 'Water Requirement', value: '7.5-8.5 liters per 20kg' },
      { label: 'Coverage', value: '3.5-4.5 kg/m² (at 3mm)' },
      { label: 'Standards', value: 'EN12004, IS15477-2019' },
      { label: 'Deformability', value: '≥5mm (S2)' }
    ]
  }
];

export const featuredProducts = [products[0], products[2]]; // TYPE-2 101 and TYPE-3 S1-Plus
