
import { Project, Category } from '@/types/project';

export const categories: Category[] = [
  { id: 'all', name: 'All Projects', slug: 'all' },
  { id: 'residential', name: 'Residential', slug: 'residential' },
  { id: 'commercial', name: 'Commercial', slug: 'commercial' },
  { id: 'office', name: 'Office', slug: 'office' },
  { id: 'retail', name: 'Retail', slug: 'retail' },
  { id: 'hospitality', name: 'Hospitality', slug: 'hospitality' },
  { id: 'luxury', name: 'Luxury', slug: 'luxury' }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Zenith Penthouse',
    slug: 'zenith-penthouse',
    category: 'luxury',
    featuredImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop&q=80',
    shortDescription: 'A modern minimalist penthouse with panoramic city views and bespoke luxury finishes',
    bodyContent: 'This stunning penthouse represents the pinnacle of urban luxury living. Every detail has been carefully curated to create a serene oasis above the bustling city. Floor-to-ceiling windows flood the space with natural light, while premium materials including Italian marble, French oak, and hand-selected art pieces create an atmosphere of sophisticated elegance. The design seamlessly blends contemporary architecture with timeless luxury.',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80'
    ],
    year: '2024',
    client: 'Private Estate',
    location: 'Manhattan, NY'
  },
  {
    id: '2',
    title: 'Nexus Corporate Hub',
    slug: 'nexus-corporate-hub',
    category: 'office',
    featuredImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop&q=80',
    shortDescription: 'Contemporary office space fostering collaboration and innovation through biophilic design',
    bodyContent: 'The Nexus Corporate Hub redefines the modern workplace through innovative design and strategic space planning. Open collaboration areas seamlessly blend with private focus zones, creating a dynamic environment that adapts to diverse work styles. Living walls, natural materials, and abundant daylight create a biophilic atmosphere that enhances productivity and wellbeing.',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&q=80'
    ],
    year: '2024',
    client: 'Nexus Technologies',
    location: 'San Francisco, CA'
  },
  {
    id: '3',
    title: 'Artisan Boutique',
    slug: 'artisan-boutique',
    category: 'retail',
    featuredImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop&q=80',
    shortDescription: 'Luxury retail space celebrating craftsmanship through curated material storytelling',
    bodyContent: 'This boutique design celebrates the artisan tradition through thoughtful material selection and spatial narrative. Custom millwork crafted from reclaimed walnut, hand-blown glass fixtures, and carefully curated lighting create an intimate shopping experience that honors both product and craftsmanship. Each zone tells a story of heritage and innovation.',
    galleryImages: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1441986380878-c4248f5b8b5b?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1441985969846-c2ddab68f5e6?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&q=80'
    ],
    year: '2023',
    client: 'Heritage Artisan Co.',
    location: 'Brooklyn, NY'
  },
  {
    id: '4',
    title: 'Metropolitan Loft',
    slug: 'metropolitan-loft',
    category: 'residential',
    featuredImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=1000&fit=crop&q=80',
    shortDescription: 'Industrial heritage meets contemporary luxury in this converted warehouse masterpiece',
    bodyContent: 'This converted warehouse loft preserves its industrial character while introducing contemporary comforts and luxury amenities. Exposed brick walls and steel beams provide textural contrast to refined furnishings, custom lighting installations, and modern art collections. The design celebrates the building\'s history while creating spaces for modern living.',
    galleryImages: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586023492467-d8a34b2ad755?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586023492278-3b2775739c1b?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=600&fit=crop&q=80'
    ],
    year: '2023',
    client: 'Private Collection',
    location: 'Chicago, IL'
  },
  {
    id: '5',
    title: 'Lumina Restaurant',
    slug: 'lumina-restaurant',
    category: 'hospitality',
    featuredImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=1000&fit=crop&q=80',
    shortDescription: 'Michelin-starred dining experience through atmospheric lighting and sculptural design',
    bodyContent: 'Lumina creates an immersive dining atmosphere through layered lighting design, rich material palette, and sculptural elements. The space flows seamlessly from intimate booths to dynamic bar areas, creating varied experiences within a cohesive design narrative. Custom bronze fixtures, velvet banquettes, and Italian marble create an atmosphere of refined elegance.',
    galleryImages: [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1515669067868-5b239c2e60d4?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80'
    ],
    year: '2024',
    client: 'Lumina Hospitality Group',
    location: 'Los Angeles, CA'
  },
  {
    id: '6',
    title: 'Tech Innovation Center',
    slug: 'tech-innovation-center',
    category: 'commercial',
    featuredImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1000&fit=crop&q=80',
    shortDescription: 'Cutting-edge facility designed for breakthrough thinking and collaborative innovation',
    bodyContent: 'This innovation center embodies the future of collaborative workspace design. Flexible lab spaces, immersive meeting rooms, and social areas are unified by a design language that promotes creativity and breakthrough thinking. Advanced technology integration, adaptive lighting systems, and modular furniture create an environment that evolves with its users.',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&q=80'
    ],
    year: '2024',
    client: 'Future Labs Inc.',
    location: 'Austin, TX'
  },
  {
    id: '7',
    title: 'Sanctuary Spa Resort',
    slug: 'sanctuary-spa-resort',
    category: 'hospitality',
    featuredImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=1000&fit=crop&q=80',
    shortDescription: 'Wellness retreat design inspired by natural harmony and therapeutic environments',
    bodyContent: 'The Sanctuary Spa Resort creates a transformative wellness experience through biophilic design principles and therapeutic spatial planning. Natural stone, flowing water features, and abundant greenery create a serene environment that promotes healing and relaxation. Each treatment room is designed as a private sanctuary with views of carefully landscaped gardens.',
    galleryImages: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&q=80'
    ],
    year: '2024',
    client: 'Sanctuary Wellness Group',
    location: 'Napa Valley, CA'
  },
  {
    id: '8',
    title: 'Grand Heritage Mansion',
    slug: 'grand-heritage-mansion',
    category: 'luxury',
    featuredImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=1000&fit=crop&q=80',
    shortDescription: 'Historic mansion restoration blending classical architecture with modern luxury',
    bodyContent: 'This grand mansion restoration project carefully preserves the building\'s historic character while introducing contemporary luxury amenities. Original crown moldings, hardwood floors, and period fixtures are restored to their former glory, while modern elements like smart home technology and updated mechanical systems are seamlessly integrated. The design respects the past while embracing the future.',
    galleryImages: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop&q=80'
    ],
    year: '2023',
    client: 'Heritage Foundation',
    location: 'Newport, RI'
  },
  {
    id: '9',
    title: 'Flagship Concept Store',
    slug: 'flagship-concept-store',
    category: 'retail',
    featuredImage: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=1000&fit=crop&q=80',
    shortDescription: 'Immersive brand experience through innovative retail design and digital integration',
    bodyContent: 'This flagship concept store redefines retail experience through immersive design and cutting-edge technology. Interactive displays, dynamic lighting, and flexible spaces create a brand narrative that engages customers on multiple levels. The design seamlessly blends physical and digital touchpoints to create memorable shopping experiences.',
    galleryImages: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&h=600&fit=crop&q=80'
    ],
    year: '2024',
    client: 'Luxury Brand Collective',
    location: 'Miami, FL'
  }
];
