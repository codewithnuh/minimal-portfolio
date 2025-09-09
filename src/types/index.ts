export interface Project {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  image: {
    url: string;
  };
  slug?: string;
  techStack: {
    id: string;
    tech: string;
  }[];
}

export interface TechItem {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  color: string;
}

export type TechProps = { id: string; tech: string };
