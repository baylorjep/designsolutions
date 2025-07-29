export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
  details?: {
    location?: string;
    size?: string;
    duration?: string;
    services?: string[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Living Room',
    category: 'Living Space',
    description: 'A contemporary living room that balances comfort with sophistication',
    image: '/projects/modern-living-room.jpg',
    featured: true,
    details: {
      location: 'San Francisco, CA',
      size: '450 sq ft',
      duration: '6 weeks',
      services: ['Space Planning', 'Furniture Selection', 'Color Consultation', 'Accessories Styling']
    }
  },
  {
    id: 2,
    title: 'Elegant Kitchen',
    category: 'Kitchen',
    description: 'A chef\'s dream with timeless design and modern functionality',
    image: '/projects/elegant-kitchen.jpg',
    featured: true,
    details: {
      location: 'Palo Alto, CA',
      size: '300 sq ft',
      duration: '8 weeks',
      services: ['Kitchen Design', 'Cabinet Selection', 'Countertop Installation', 'Lighting Design']
    }
  },
  {
    id: 3,
    title: 'Serene Master Bedroom',
    category: 'Bedroom',
    description: 'A peaceful retreat designed for ultimate relaxation',
    image: '/projects/master-bedroom.jpg',
    details: {
      location: 'Berkeley, CA',
      size: '350 sq ft',
      duration: '4 weeks',
      services: ['Bedroom Design', 'Furniture Selection', 'Window Treatments', 'Lighting']
    }
  },
  {
    id: 4,
    title: 'Cozy Dining Room',
    category: 'Dining',
    description: 'An intimate dining space perfect for family gatherings',
    image: '/projects/dining-room.jpg',
    details: {
      location: 'Oakland, CA',
      size: '200 sq ft',
      duration: '3 weeks',
      services: ['Dining Room Design', 'Table Selection', 'Lighting Design', 'Accessories']
    }
  },
  {
    id: 5,
    title: 'Home Office Sanctuary',
    category: 'Office',
    description: 'A productive workspace that inspires creativity',
    image: '/projects/home-office.jpg',
    details: {
      location: 'San Jose, CA',
      size: '180 sq ft',
      duration: '5 weeks',
      services: ['Office Design', 'Desk Setup', 'Storage Solutions', 'Ergonomic Furniture']
    }
  },
  {
    id: 6,
    title: 'Luxury Bathroom',
    category: 'Bathroom',
    description: 'A spa-like bathroom with premium finishes and fixtures',
    image: '/projects/luxury-bathroom.jpg',
    details: {
      location: 'Marin County, CA',
      size: '120 sq ft',
      duration: '6 weeks',
      services: ['Bathroom Design', 'Fixture Selection', 'Tile Design', 'Lighting']
    }
  },
];

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: number) => {
  return projects.find(project => project.id === id);
}; 