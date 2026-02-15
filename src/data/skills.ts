export interface Skill {
    name: string;
    description: string;
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        category: "Frontend",
        skills: [
            { name: "React / Next.js", description: "Component architecture, SSR, app router" },
            { name: "TypeScript", description: "Type-safe development at scale" },
            { name: "Tailwind CSS", description: "Utility-first styling and design systems" },
            { name: "Framer Motion", description: "Production-grade animations and transitions" },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", description: "Server-side JavaScript and API development" },
            { name: "Python / FastAPI", description: "High-performance REST APIs and scripting" },
            { name: "PostgreSQL", description: "Relational data modeling and queries" },
            { name: "Firebase", description: "Auth, Firestore, and cloud functions" },
        ],
    },
    {
        category: "AI / ML",
        skills: [
            { name: "TensorFlow", description: "Deep learning model training and deployment" },
            { name: "Huggingface", description: "Using inferences and integrating models locally" },
            { name: "Data Analysis", description: "Pandas, NumPy, and visualization pipelines" },
        ],
    },
    {
        category: "Tools",
        skills: [
            { name: "Git / GitHub", description: "Version control and collaborative workflows" },
            { name: "Docker", description: "Containerized development and deployment" },
            { name: "Figma", description: "UI/UX design and prototyping" },
            { name: "Arduino IDE", description: "Software for Iot projects" },
        ],
    },
];
