export interface ExperienceItem {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly location: string;
  readonly dates: string;
  readonly current?: boolean;
  readonly description: readonly string[];
  readonly technologies: readonly string[];
}

export interface ExperienceContent {
  readonly title: string;
  readonly items: readonly ExperienceItem[];
}

export const EXPERIENCE: ExperienceContent = {
  title: 'Experience',
  items: [
    {
      id: 'openbank',
      company: 'Openbank · Capgemini',
      role: 'Frontend Engineer',
      location: 'Remote',
      dates: 'Feb 2025 – Present',
      current: true,
      description: [
        'Build fintech products for different programs and countries with React, TypeScript and styled-components.',
        'Work with microfrontends, hexagonal architecture and shared libraries across teams.',
        'Integrate identity verification and contribute to testing, code quality and delivery practices within an agile team.',
      ],
      technologies: [
        'React',
        'TypeScript',
        'styled-components',
        'Microfrontends',
        'Hexagonal architecture',
        'Testing',
        'CI/CD',
      ],
    },
    {
      id: 'vehnet',
      company: 'Vehnet',
      role: 'Frontend Engineer',
      location: 'Remote',
      dates: 'Abr 2022 – May 2024',
      description: [
        'Develop and maintain web and mobile applications with React, React Native and TypeScript.',
        'Contribute to the migration from AWS to Firebase and maintain shared libraries across web and mobile.',
        'Implement Figma designs with design and backend teams, writing unit tests to ensure code quality and reliability.',
      ],
      technologies: ['React', 'React Native', 'TypeScript', 'AWS', 'Firebase', 'Figma', 'Testing'],
    },
    {
      id: 'advance',
      company: 'Advance Digital Experts',
      role: 'Frontend Developer',
      location: 'On-site',
      dates: 'Jul 2021 – Abr 2022',
      description: [
        'Build a frontend from scratch for vehicle telemetry and energy efficiency reporting.',
        'Develop new features and product demos alongside backend and design teams.',
        'Create reusable UI components documented in Storybook and tested with Jest and Testing Library.',
      ],
      technologies: [
        'React',
        'TypeScript',
        'JavaScript',
        'Jest',
        'Testing Library',
        'Storybook',
        'styled-components',
      ],
    },
    {
      id: 'freelance',
      company: 'Freelancer',
      role: 'Frontend Web Developer',
      location: 'Las Palmas de Gran Canaria, Las Palmas province',
      dates: 'Feb 2021 – Jul 2021',
      description: [
        'Develop web applications and landing pages for small businesses with React, adapting solutions to different client needs and projects.',
        'Work independently on complete web projects and collaborate with other freelance developers to build and improve web products.',
      ],
      technologies: [
        'React',
        'TypeScript',
        'JavaScript',
        'Jest',
        'HTML',
        'CSS',
        'styled-components',
      ],
    },
  ],
};
