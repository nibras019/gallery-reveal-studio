
import { Project, Category } from '@/types/project';

export const categories: Category[] = [
  { id: 'all', name: 'All Projects', slug: 'all' },
  { id: 'residential', name: 'Residential', slug: 'residential' },
  { id: 'commercial', name: 'Commercial', slug: 'commercial' },
  { id: 'office', name: 'Office', slug: 'office' },
  { id: 'retail', name: 'Retail', slug: 'retail' },
  { id: 'hospitality', name: 'Hospitality', slug: 'hospitality' }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Zenith Penthouse',
    slug: 'zenith-penthouse',
    category: 'residential',
    featuredImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    shortDescription: 'A modern minimalist penthouse with panoramic city views',
    bodyContent: 'This stunning penthouse represents the pinnacle of urban luxury living. Every detail has been carefully curated to create a serene oasis above the bustling city. Floor-to-ceiling windows flood the space with natural light, while premium materials and custom furnishings create an atmosphere of sophisticated elegance.',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop'
    ],
    year: '2024',
    client: 'Private Client',
    location: 'Manhattan, NY'
  },
  {
    id: '2',
    title: 'Nexus Corporate Hub',
    slug: 'nexus-corporate-hub',
    category: 'office',
    featuredImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    shortDescription: 'Contemporary office space fostering collaboration and innovation',
    bodyContent: 'The Nexus Corporate Hub redefines the modern workplace through innovative design and strategic space planning. Open collaboration areas seamlessly blend with private focus zones, creating a dynamic environment that adapts to diverse work styles.',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop'
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
    featuredImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    shortDescription: 'Luxury retail space celebrating craftsmanship and heritage',
    bodyContent: 'This boutique design celebrates the artisan tradition through thoughtful material selection and spatial narrative. Custom millwork and carefully curated lighting create an intimate shopping experience that honors both product and craftsmanship.',
    galleryImages: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1441986380878-c4248f5b8b5b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1441985969846-c2ddab68f5e6?w=800&h=600&fit=crop'
    ],
    year: '2023',
    client: 'Artisan Co.',
    location: 'Brooklyn, NY'
  },
  {
    id: '4',
    title: 'Metropolitan Loft',
    slug: 'metropolitan-loft',
    category: 'residential',
    featuredImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    shortDescription: 'Industrial heritage meets contemporary living',
    bodyContent: 'This converted warehouse loft preserves its industrial character while introducing contemporary comforts. Exposed brick walls and steel beams provide textural contrast to refined furnishings and modern amenities.',
    galleryImages: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586023492467-d8a34b2ad755?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586023492278-3b2775739c1b?w=800&h=600&fit=crop'
    ],
    year: '2023',
    client: 'Private Client',
    location: 'Chicago, IL'
  },
  {
    id: '5',
    title: 'Lumina Restaurant',
    slug: 'lumina-restaurant',
    category: 'hospitality',
    featuredImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop',
    shortDescription: 'Fine dining experience through atmospheric design',
    bodyContent: 'Lumina creates an immersive dining atmosphere through layered lighting design and rich material palette. The space flows seamlessly from intimate booths to dynamic bar areas, creating varied experiences within a cohesive design narrative.',
    galleryImages: [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1515669067868-5b239c2e60d4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&h=600&fit=crop'
    ],
    year: '2024',
    client: 'Lumina Group',
    location: 'Los Angeles, CA'
  },
  {
    id: '6',
    title: 'Tech Innovation Center',
    slug: 'tech-innovation-center',
    category: 'commercial',
    featuredImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    shortDescription: 'Cutting-edge facility designed for breakthrough thinking',
    bodyContent: 'This innovation center embodies the future of collaborative workspace design. Flexible lab spaces, immersive meeting rooms, and social areas are unified by a design language that promotes creativity and breakthrough thinking.',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop'
    ],
    year: '2024',
    client: 'Innovation Labs',
    location: 'Austin, TX'
  }
];
