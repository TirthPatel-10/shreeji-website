import { Service, Project, ProcessStep } from './types';

export const services: Service[] = [
  {
    id: 'led-signage',
    icon: 'Lightbulb',
    title: 'LED Signage',
    description: 'Energy-efficient, vibrant LED signs that capture attention day and night.',
    features: [
      'Custom LED neon designs',
      'RGB color-changing options',
      'Low power consumption',
      'Weather-resistant construction',
      'Remote control capability'
    ]
  },
  {
    id: 'acrylic-signs',
    icon: 'Box',
    title: 'Acrylic Signs',
    description: 'Premium acrylic signage with modern aesthetics and durability.',
    features: [
      'Crystal-clear transparency',
      'UV-resistant materials',
      'Laser-cut precision',
      'Multiple thickness options',
      'Easy maintenance'
    ]
  },
  {
    id: '3d-letter-signs',
    icon: 'Type',
    title: '3D Letter Signs',
    description: 'Dimensional lettering that adds depth and sophistication to your brand.',
    features: [
      'Various material options',
      'LED backlit available',
      'Custom fonts and sizes',
      'Indoor/outdoor rated',
      'Premium finish quality'
    ]
  },
  {
    id: 'stainless-steel',
    icon: 'Shield',
    title: 'Stainless Steel',
    description: 'Industrial-strength stainless steel signs built to last decades.',
    features: [
      'Corrosion-resistant',
      'Mirror or brushed finish',
      'Precision fabrication',
      'Heavy-duty construction',
      'Minimal maintenance'
    ]
  },
  {
    id: 'brass-signage',
    icon: 'Star',
    title: 'Brass Signage',
    description: 'Elegant brass signs that exude luxury and timeless appeal.',
    features: [
      'Premium brass materials',
      'Polished or antique finish',
      'Etched or engraved details',
      'Heritage aesthetic',
      'Prestige branding'
    ]
  },
  {
    id: 'flex-boards',
    icon: 'FileImage',
    title: 'Flex Boards',
    description: 'Large-format flex printing for impactful outdoor advertising.',
    features: [
      'High-resolution printing',
      'Weather-proof materials',
      'Quick turnaround',
      'Cost-effective solution',
      'Easy installation'
    ]
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Luxury Hotel Entrance',
    client: 'Grand Palace Hotel',
    category: 'LED Signage',
    image: '',
    description: 'Premium LED signage installation for upscale hotel entrance'
  },
  {
    id: '2',
    title: 'Corporate Office Branding',
    client: 'TechCorp Solutions',
    category: 'Acrylic Signs',
    image: '',
    description: 'Modern acrylic logo and wayfinding system'
  },
  {
    id: '3',
    title: 'Restaurant Exterior',
    client: 'The Golden Fork',
    category: '3D Letter Signs',
    image: '',
    description: 'Illuminated 3D letters for fine dining establishment'
  },
  {
    id: '4',
    title: 'Medical Center Directory',
    client: 'Wellness Medical Group',
    category: 'Stainless Steel',
    image: '',
    description: 'Brushed stainless steel wayfinding and directional signage'
  },
  {
    id: '5',
    title: 'Boutique Storefront',
    client: 'Elite Fashion',
    category: 'Brass Signage',
    image: '',
    description: 'Elegant brass nameplate and window graphics'
  },
  {
    id: '6',
    title: 'Shopping Mall Campaign',
    client: 'Metro Shopping Plaza',
    category: 'Flex Boards',
    image: '',
    description: 'Large-format promotional banners and billboards'
  },
  {
    id: '7',
    title: 'Bank Branch Signage',
    client: 'National Trust Bank',
    category: 'Acrylic Signs',
    image: '',
    description: 'Sophisticated acrylic and metal combination signage'
  },
  {
    id: '8',
    title: 'Retail Chain Rollout',
    client: 'QuickMart',
    category: 'LED Signage',
    image: '',
    description: 'Multi-location LED pylon and facade signage'
  },
  {
    id: '9',
    title: 'Spa & Wellness Center',
    client: 'Serenity Spa',
    category: '3D Letter Signs',
    image: '',
    description: 'Backlit channel letters with elegant typography'
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    icon: 'MessageSquare',
    title: 'Consultation & Planning',
    description: 'We begin by understanding your brand, objectives, and site requirements.',
    details: [
      'Initial consultation meeting',
      'Site survey and measurements',
      'Brand guidelines review',
      'Budget and timeline discussion',
      'Permit requirements assessment'
    ]
  },
  {
    id: 2,
    icon: 'Palette',
    title: 'Design & Prototyping',
    description: 'Our design team creates custom concepts tailored to your vision.',
    details: [
      'Multiple design concepts',
      '3D renderings and mockups',
      'Material and color selection',
      'Technical drawings',
      'Revisions and approvals'
    ]
  },
  {
    id: 3,
    icon: 'Package',
    title: 'Material Selection',
    description: 'We source premium materials that ensure longevity and visual impact.',
    details: [
      'Quality material sourcing',
      'Durability testing',
      'Weather resistance verification',
      'Finish and coating options',
      'Sustainability considerations'
    ]
  },
  {
    id: 4,
    icon: 'Hammer',
    title: 'Manufacturing',
    description: 'Precision fabrication using advanced equipment and skilled craftsmanship.',
    details: [
      'CNC cutting and routing',
      'LED integration and testing',
      'Welding and assembly',
      'Quality control inspection',
      'Final finishing and packaging'
    ]
  },
  {
    id: 5,
    icon: 'CheckCircle',
    title: 'Installation & Support',
    description: 'Professional installation with ongoing maintenance and support.',
    details: [
      'Certified installation team',
      'Minimal disruption guarantee',
      'Electrical and structural work',
      'Post-installation inspection',
      'Maintenance program options'
    ]
  }
];

export const stats = [
  { label: 'Projects Completed', value: '500+', icon: 'Award' },
  { label: 'Years of Excellence', value: '15+', icon: 'TrendingUp' },
  { label: 'Client Satisfaction', value: '98%', icon: 'Users' }
];

export const benefits = [
  {
    icon: 'Award',
    title: 'Industry Expertise',
    description: 'Over 15 years of experience in premium signage manufacturing and installation.'
  },
  {
    icon: 'Shield',
    title: 'Quality Guarantee',
    description: 'We use only the finest materials and provide comprehensive warranties on all projects.'
  },
  {
    icon: 'Users',
    title: 'Client-Centric',
    description: 'Personalized service with dedicated project managers for every installation.'
  },
  {
    icon: 'Zap',
    title: 'Fast Turnaround',
    description: 'Efficient production processes ensure your signage is delivered on schedule.'
  },
  {
    icon: 'Wrench',
    title: 'Full-Service',
    description: 'From concept to installation and beyond, we handle every aspect of your project.'
  },
  {
    icon: 'Leaf',
    title: 'Eco-Friendly',
    description: 'Energy-efficient LED options and sustainable material choices for responsible branding.'
  }
];
