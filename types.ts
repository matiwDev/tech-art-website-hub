import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  isAiPowered?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface ServiceTier {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface GeminiResponse {
  text: string;
}
