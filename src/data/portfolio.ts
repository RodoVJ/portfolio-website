import type { ContactInfo, Experience, Education, Skills, Project } from '../types';

export const contactInfo: ContactInfo = {
  name: 'Rodrigo Vega',
  email: 'vegarod75@gmail.com',
  location: 'St. Catharines, ON, Canada'
};

export const skills: Skills[] = [
  {
    category: 'Programming Languages',
    items: ['Java', 'TypeScript', 'Python']
  },
  {
    category: 'Backend Technologies',
    items: ['MongoDB', 'PostgreSQL', 'Node.js', 'Spring Boot']
  },
  {
    category: 'Frontend Technologies',
    items: ['React', 'HTML', 'CSS']
  },
  {
    category: 'DevOps and Cloud',
    items: ['Amazon Web Services (AWS)', 'Azure', 'Docker']
  }
];

export const experiences: Experience[] = [
  {
    title: 'Senior Full-stack Developer',
    company: 'Chaser',
    location: 'Toronto, CA',
    period: 'Feb 2023 — Present',
    achievements: [
      'Promoted to Senior Full-Stack Developer after 2 years, recognizing high-impact contributions.',
      'Boosted user task completion rate by 20% by implementing a system (BullMQ, PostgreSQL, Node.js) to schedule and send task reminders.',
      'Increased product exposure by building a REST API (Java, MongoDB) to allow task creation by third parties.',
      'Drove a 15% increase in user retention by creating a task admin dashboard (React) that addressed user needs identified through pitched product ideas.',
      'Reduced admin dashboard load time from 10+ seconds to under 1 second for high-volume task data by implementing front-end lazy loading.',
      'Increased user accessibility by designing and implementing a mobile friendly version of the admin dashboard.'
    ]
  },
  {
    title: 'Software Development Engineer I',
    company: 'Amazon',
    location: 'Toronto, CA',
    period: 'May 2022 — Dec 2022',
    achievements: [
      'Ensured accurate and reliable data collection by implementing multi-threaded metric synchronization in a Java/Spring Boot environment.',
      'Streamlined development and increased deployment efficiency by migrating 15 internal teams to modern CI/CD pipelines on AWS.',
      'Reduced operational overhead and simplified infrastructure management by building a reusable Infrastructure as Code (IaC) API library with AWS CDK, adopted by all 15 teams.',
      'Minimized downtime by optimizing system performance through horizontal scaling of host fleets to handle high traffic during special events.'
    ]
  },
  {
    title: 'Full-stack Developer',
    company: 'Homex',
    location: 'Toronto, CA',
    period: 'July 2021 — Feb 2022',
    achievements: [
      'Reduced spam rates by 80% and enhanced user experience by implementing an end-to-end (Node.js, MongoDB, React) solution to block spammers in a web chat app.',
      'Improved state management and reduced load times by 20% by introducing Redux into a React app.',
      'Increased code coverage and improved software quality by identifying untested flows and writing unit and integration tests.'
    ]
  },
  {
    title: 'Research Assistant/Software Developer',
    company: 'Brock University',
    location: 'St. Catharines, CA',
    period: 'Jan 2020 — July 2021',
    achievements: [
      'Accelerated biological research by designing and implementing cell simulations using C# and Unity, providing valuable insights into biological processes.',
      'Improved research efficiency by developing Python automation scripts, reducing manual task time and enabling researchers to focus on high-level work.'
    ]
  }
];

export const education: Education[] = [
  {
    institution: 'Brock University',
    period: 'Sept 2017 — June 2021',
    degree: 'Bachelor\'s degree in Computer Science and Biology with Honors'
  }
];

export const projects: Project[] = [
  {
    title: 'Biological Cell Simulation',
    description: 'An interactive 3D simulation of mitochondrial dynamics in biological cells, designed to support research and education in cellular biology.',
    technologies: ['C#', 'Unity'],
    videoUrl: 'src/assets/videos/mitos.mp4',
    githubUrl: 'https://github.com/StuartLab/Mitochondrio',
    highlights: [
      'Developed realistic cell simulations for biological research',
      'Implemented 3D visualization of cellular processes',
      'Created tools to analyze mitochondrial behavior',
      'Accelerated biological research through computational modeling'
    ]
  },
  {
    title: 'Epidemic Network Modeling with Weighted Contact Networks',
    description: 'IEEE-published research using evolutionary algorithms to model epidemic spread through personal contact networks, optimizing for epidemic prediction and public health strategies.',
    technologies: ['Java', 'Evolutionary Algorithms', 'Graph Theory'],
    imageUrl: 'src/assets/images/pandemicResearch.png',
    researchPaperUrl: 'https://ieeexplore.ieee.org/document/9504685',
    highlights: [
      'Pioneered weighted edge representation for contact networks, improving epidemic prediction accuracy',
      'Solved two complex problems: maximizing epidemic duration and matching real epidemic profiles',
      'Published in IEEE proceedings, contributing to public health strategies and vaccination allocation research'
    ]
  },
]; 