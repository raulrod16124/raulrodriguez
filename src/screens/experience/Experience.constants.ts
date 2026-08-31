export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  dates: string;
  description: string[];
  technologies: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "fintech",
    role: "Frontend Engineer",
    company: "Fintech Company",
    location: "Remote",
    dates: "February 2025 — Currently",
    description: [
      "Developed and maintained fintech products for different programs and countries using React, TypeScript, and styled-components, focusing on scalable and maintainable solutions.",
      "Worked with microfrontend and hexagonal architecture, making sure applications could adapt to different deployment environments. Developed and maintained shared internal libraries used across multiple microfrontends.",
      "Successfully integrated a third-party identity verification provider and contributed to improving development practices, reusable solutions, testing, and code quality within an agile team.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Jest",
      "Jira",
      "Scrum",
      "Vitest",
      "Webpack",
      "CI/CD",
      "AI tools",
    ],
  },
  {
    id: "web-mobile",
    role: "Frontend Engineer",
    company: "Web & Mobile Company",
    location: "Remote",
    dates: "April 2022 — May 2024",
    description: [
      "Developed and maintained web and mobile applications using React, React Native, and TypeScript, focusing on maintainable and reusable solutions.",
      "Successfully contributed to the migration from AWS to Firebase, helping adapt and deploy applications to the new infrastructure. Developed and maintained shared internal libraries used across both web and mobile applications.",
      "Worked closely with designers and backend teams, creating and implementing Figma designs and writing unit tests to ensure code quality and reliability.",
    ],
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "Jest",
      "Vite",
      "Firebase",
      "Google Cloud",
      "Figma",
      "Git",
    ],
  },
  {
    id: "emobility",
    role: "Frontend Developer",
    company: "E-mobility Company",
    location: "On-site",
    dates: "July 2021 — April 2022",
    description: [
      "Built a frontend application from scratch for the e-mobility sector, processing vehicle telemetry to generate reports and statistics on performance and energy efficiency.",
      "Worked closely with backend and design teams to develop new features and prepare product demos for potential customers. Followed Scrum practices and used Jira to plan and track development.",
      "Focused on building reusable and maintainable UI components, supported by unit and component testing with Jest and Testing Library, and documented in Storybook.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Jest",
      "Testing Library",
      "styled-components",
      "Storybook",
      "Jira",
      "Scrum",
    ],
  },
  {
    id: "freelance",
    role: "Frontend Developer",
    company: "Freelance",
    location: "Remote",
    dates: "February 2021 — July 2021",
    description: [
      "Developed web applications and landing pages for small businesses using React, adapting solutions to different client needs and projects.",
      "Worked independently on complete web projects and collaborated with other freelance developers to build and improve web products.",
    ],
    technologies: ["React", "TypeScript", "JavaScript", "Jest", "HTML", "CSS", "styled-components"],
  },
];
