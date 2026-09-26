export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
}

export const featuredProjects: Project[] = [
  {
    title: "SCARO - Supply Chain Analyser & Risk Optimization",
    description:
      "End-to-end supply chain analytics platform with predictive modeling and real-time monitoring.",
    techStack: ["Python", "FastAPI", "React", "PostgreSQL", "TensorFlow"],
    liveUrl: "https://scaro-lb3k.vercel.app/",
    githubUrl: "https://github.com/41vi4p/SCARO",
  },
  {
    title: "CoverLetter",
    description:
      "A tool to convert your design files into tailored Newsletters",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://sc.is-a.dev/CoverLetter/",
    githubUrl: "https://github.com/SC136/CoverLetter",
  },
  {
    title: "BEACON - Web Accessibility & Security Auditing Platform",
    description:
      "AI-powered platform for web accessibility & security auditing.",
    techStack: ["Python", "TypeScript", "Neo4j", "NextJs", "NextJS"],
    liveUrl: "https://github.com/SHERV22/BEACON",
    githubUrl: "https://github.com/SHERV22/BEACON",
  },
];
