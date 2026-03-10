import type { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Kitchen Remodeling',
    slug: 'kitchen-remodeling',
    description:
      'Transform your kitchen into a modern, functional space that meets your family\'s needs. From custom cabinetry to premium countertops, we bring your vision to life.',
    shortDescription: 'Custom kitchens designed for modern living.',
    images: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80'],
    scopeOfWork: ['Custom cabinetry', 'Countertop installation', 'Plumbing & electrical', 'Flooring'],
  },
  {
    id: '2',
    title: 'Bathroom Remodeling',
    slug: 'bathroom-remodeling',
    description:
      'Create a spa-like retreat in your home. Our bathroom renovations include tile work, vanities, showers, and tubs—all crafted with attention to detail.',
    shortDescription: 'Spa-like bathrooms with premium finishes.',
    images: ['https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80'],
    scopeOfWork: ['Tile & stone work', 'Vanity installation', 'Shower & tub', 'Plumbing fixtures'],
  },
  {
    id: '3',
    title: 'Home Additions',
    slug: 'home-additions',
    description:
      'Grow your living space with a seamless addition that matches your home\'s character. We handle everything from foundation to finish.',
    shortDescription: 'Seamless additions that expand your space.',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'],
    scopeOfWork: ['Foundation work', 'Structural framing', 'Roofing', 'Interior finishes'],
  },
  {
    id: '4',
    title: 'Full Renovations',
    slug: 'full-renovations',
    description:
      'Complete home transformations from start to finish. We coordinate all trades and deliver a turnkey renovation.',
    shortDescription: 'Complete home transformations.',
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'],
    scopeOfWork: ['Design coordination', 'Demolition', 'All trades', 'Final finishes'],
  },
  {
    id: '5',
    title: 'Outdoor Projects',
    slug: 'outdoor-projects',
    description:
      'Extend your living space outdoors with decks, patios, outdoor kitchens, and hardscape elements built to last.',
    shortDescription: 'Decks, patios, and outdoor living spaces.',
    images: ['https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80'],
    scopeOfWork: ['Decks & patios', 'Outdoor kitchens', 'Hardscape', 'Landscaping integration'],
  },
];
