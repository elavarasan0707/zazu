export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  iconName: string;
  deliverables: string[];
  metricsSample: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  category: 'Social Media' | 'Branding' | 'SEO' | 'Paid Advertising' | 'Content Creation' | 'Lead Generation' | string;
  clientType: string;
  challenge: string;
  solution: string;
  sampleMetrics: { label: string; value: string }[];
  deliverables: string[];
  image: string;
}

export interface ProcessStep {
  number: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  businessName: string;
  role: string;
  testimonial: string;
  avatarInitials: string;
  stars: number;
  highlight: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  category: 'Digital Marketing' | 'SEO' | 'Social Media' | 'Paid Advertising' | 'Content Marketing' | 'Business Growth';
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
}

export interface AgencyContactConfig {
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  tagline: string;
  bookingUrl: string;
}
