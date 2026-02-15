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
    liveUrl: "https://github.com/41vi4p/SCARO",
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
    title: "Krushak - AI-Powered Crop Disease Detection",
    description:
      "AI-driven mobile app for farmers to identify crop diseases and receive treatment recommendations.",
    techStack: ["Flutter", "TensorFlow Lite", "Kotlin", "Dart"],
    liveUrl: "https://github.com/TSROW-Studio/Krushak",
    githubUrl: "https://github.com/TSROW-Studio/Krushak",
  },
];
