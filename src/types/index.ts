export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  period: string;
  degree: string;
}

export interface Skills {
  category: string;
  items: string[];
}

export interface ContactInfo {
  name: string;
  email: string;
  location?: string;
} 