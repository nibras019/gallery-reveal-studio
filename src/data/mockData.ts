
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
    title: 'Burj Al Serenity',
    slug: 'burj-al-serenity',
    category: 'luxury',
    featuredImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop&q=80',
    shortDescription: 'Ultra-luxury penthouse with panoramic views of Dubai Marina and Persian Gulf waters',
    bodyContent: 'This stunning penthouse represents the pinnacle of Emirates luxury living. Every detail has been carefully curated to create a serene oasis above the bustling cityscape of Dubai. Floor-to-ceiling windows flood the space with natural light while capturing breathtaking views of the iconic skyline. Premium materials including Italian Carrara marble, Lebanese cedar, and hand-selected Arabian art pieces create an atmosphere of sophisticated Middle Eastern elegance.',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80'
    ],
    year: '2024',
    client: 'Emirates Private Estate',
    location: 'Dubai Marina, UAE'
  },
  {
    id: '2',
    title: 'Emirates Trade Tower',
    slug: 'emirates-trade-tower',
    category: 'office',
    featuredImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop&q=80',
    shortDescription: 'State-of-the-art corporate headquarters fostering innovation in Dubai International Financial Centre',
    bodyContent: 'Emirates Trade Tower redefines the modern Middle Eastern workplace through innovative design and strategic space planning. Open collaboration areas seamlessly blend with private executive zones, creating a dynamic environment that reflects Dubai\'s position as a global business hub. Arabian-inspired geometric patterns, premium finishes, and cutting-edge smart building technology create an atmosphere that enhances productivity while honoring regional heritage.',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&q=80'
    ],
    year: '2024',
    client: 'Dubai Holdings',
    location: 'DIFC, Dubai, UAE'
  },
  {
    id: '3',
    title: 'Souk Al Noor Boutique',
    slug: 'souk-al-noor-boutique',
    category: 'retail',
    featuredImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop&q=80',
    shortDescription: 'Luxury retail experience blending traditional Arabian marketplace heritage with contemporary design',
    bodyContent: 'Souk Al Noor celebrates the rich tradition of Arabian commerce through thoughtful material selection and spatial narrative. Custom mashrabiya screens crafted from sustainably sourced oud wood, hand-blown Murano glass fixtures, and carefully curated lighting create an intimate shopping experience that honors both traditional craftsmanship and modern luxury retail standards.',
    galleryImages: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1441986380878-c4248f5b8b5b?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1441985969846-c2ddab68f5e6?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&q=80'
    ],
    year: '2023',
    client: 'Al Futtaim Group',
    location: 'City Walk, Dubai, UAE'
  },
  {
    id: '4',
    title: 'Jumeirah Palace Residence',
    slug: 'jumeirah-palace-residence',
    category: 'residential',
    featuredImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=1000&fit=crop&q=80',
    shortDescription: 'Contemporary villa masterpiece overlooking the iconic Burj Al Arab and Arabian coastline',
    bodyContent: 'This architectural marvel seamlessly blends contemporary luxury with traditional Emirati design elements. Expansive terraces capture stunning views of the Arabian Gulf, while interior spaces feature hand-carved Arabian doors, custom zellige tilework, and modern furnishings that celebrate both heritage and innovation. Climate-controlled courtyards and infinity pools create an oasis of tranquility.',
    galleryImages: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586023492467-d8a34b2ad755?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586023492278-3b2775739c1b?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=600&fit=crop&q=80'
    ],
    year: '2023',
    client: 'Royal Family Collection',
    location: 'Jumeirah Beach, Dubai, UAE'
  },
  {
    id: '5',
    title: 'Al Fanar Restaurant',
    slug: 'al-fanar-restaurant',
    category: 'hospitality',
    featuredImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=1000&fit=crop&q=80',
    shortDescription: 'Award-winning dining destination celebrating Emirati cuisine through authentic architectural storytelling',
    bodyContent: 'Al Fanar creates an immersive culinary journey through layered design elements that honor UAE heritage. Traditional barasti construction, authentic wind tower features, and locally-sourced date palm materials create varied dining experiences within a cohesive cultural narrative. Custom brass fixtures, handwoven textiles, and regional stone create an atmosphere of refined Arabian hospitality.',
    galleryImages: [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1515669067868-5b239c2e60d4?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80'
    ],
    year: '2024',
    client: 'Emirates Hospitality Group',
    location: 'Al Seef, Dubai, UAE'
  },
  {
    id: '6',
    title: 'Innovation Hub Dubai',
    slug: 'innovation-hub-dubai',
    category: 'commercial',
    featuredImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1000&fit=crop&q=80',
    shortDescription: 'Cutting-edge technology campus designed to position Dubai as the global capital of innovation',
    bodyContent: 'Innovation Hub Dubai embodies the UAE Vision 2071 through revolutionary collaborative workspace design. Flexible research laboratories, immersive demonstration theaters, and cultural exchange areas are unified by a design language that promotes breakthrough thinking. Advanced climate control, renewable energy integration, and modular infrastructure create an environment that evolves with emerging technologies.',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&q=80'
    ],
    year: '2024',
    client: 'Dubai Future Foundation',
    location: 'Dubai Internet City, UAE'
  },
  {
    id: '7',
    title: 'Desert Rose Spa Resort',
    slug: 'desert-rose-spa-resort',
    category: 'hospitality',
    featuredImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=1000&fit=crop&q=80',
    shortDescription: 'Luxury wellness retreat inspired by ancient Arabian healing traditions and desert landscapes',
    bodyContent: 'Desert Rose Spa Resort creates a transformative wellness experience through biophilic design principles rooted in Arabian desert ecology. Natural rose quartz stone, flowing falaj water features, and indigenous desert plants create a serene environment that promotes healing. Each treatment pavilion is designed as a private sanctuary with views of the Hajar Mountains and traditional Arabian gardens.',
    galleryImages: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&q=80'
    ],
    year: '2024',
    client: 'Al Habtoor Hospitality',
    location: 'Al Maha Desert, Dubai, UAE'
  },
  {
    id: '8',
    title: 'Emirates Grand Palace',
    slug: 'emirates-grand-palace',
    category: 'luxury',
    featuredImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=1000&fit=crop&q=80',
    shortDescription: 'Palatial residence restoration honoring UAE heritage while embracing cutting-edge luxury amenities',
    bodyContent: 'Emirates Grand Palace restoration project carefully preserves traditional Emirati architectural elements while introducing world-class luxury amenities. Original mashrabiya screens, hand-carved gypsum details, and period majlis arrangements are restored using traditional techniques, while modern elements like smart home integration and climate control are seamlessly concealed within the historic fabric.',
    galleryImages: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop&q=80'
    ],
    year: '2023',
    client: 'UAE Heritage Foundation',
    location: 'Al Fahidi, Dubai, UAE'
  },
  {
    id: '9',
    title: 'Gold Souk Flagship',
    slug: 'gold-souk-flagship',
    category: 'retail',
    featuredImage: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=1000&fit=crop&q=80',
    shortDescription: 'Luxury jewelry showroom reimagining the traditional Dubai Gold Souk experience through contemporary design',
    bodyContent: 'Gold Souk Flagship redefines luxury jewelry retail through immersive design and cultural storytelling. Interactive heritage displays, dynamic LED installations, and flexible showcase systems create a brand narrative that celebrates Dubai\'s position as the global gold trading hub. The design seamlessly blends traditional Arabian hospitality with cutting-edge retail technology.',
    galleryImages: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&h=600&fit=crop&q=80'
    ],
    year: '2024',
    client: 'Damas Jewelry',
    location: 'Deira Gold Souk, Dubai, UAE'
  }
];
