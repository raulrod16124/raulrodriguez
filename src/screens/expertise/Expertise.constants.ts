export interface ExpertiseGroup {
  title: string;
  technologies: string[];
}

export const EXPERTISE_GROUPS: ExpertiseGroup[] = [
  {
    title: "Frontend",
    technologies: ["React", "TypeScript", "JavaScript", "React Native"],
  },
  {
    title: "Architecture & Testing",
    technologies: [
      "Microfrontends",
      "Hexagonal Architecture",
      "Jest",
      "Vitest",
      "Testing Library",
      "Storybook",
    ],
  },
  {
    title: "Cloud & Tooling",
    technologies: ["Firebase", "Google Cloud", "GitHub", "CI/CD", "Jira", "Figma"],
  },
  {
    title: "AI & Development Workflow",
    technologies: ["GitHub Copilot", "Claude", "AI development tools"],
  },
];
