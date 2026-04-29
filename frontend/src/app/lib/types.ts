export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
}

export interface ProcessStep {
  id: number;
  icon: string;
  title: string;
  description: string;
  details: string[];
}

export type PageType = 'home' | 'services' | 'projects' | 'process' | 'quote';
