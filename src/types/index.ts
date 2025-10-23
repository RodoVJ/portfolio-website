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

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  videoUrl?: string;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  projectUrl?: string;
  projectUrlLabel?: string;
  researchPaperUrl?: string;
  highlights?: string[];
} 