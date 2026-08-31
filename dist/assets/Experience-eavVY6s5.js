import{m as c,d as t,t as e,l,j as n}from"./index-Dd4dJCLn.js";import"./vendor-jt5FKzEF.js";const d=c`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,p=t.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,g=t.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${e.spacing["2xl"]} ${e.spacing.md};
  animation: ${d} 0.4s ease-out;

  ${e.media.tablet} {
    padding: ${e.spacing["3xl"]} ${e.spacing.lg};
  }
`,m=t.div`
  display: flex;
  flex-direction: column;
  gap: ${e.spacing.lg};
  max-width: ${e.maxWidth.content};
  width: 100%;
  margin-top: 50px;

  ${e.media.tablet} {
    gap: ${e.spacing.xl};
  }
`,h=t.article`
  display: flex;
  flex-direction: column;
  gap: ${e.spacing.xs};
  padding: ${e.spacing.lg} ${e.spacing.md};
  border-radius: ${e.borderRadius.md};
  background-color: ${e.colors.semantic.cardBackground};
  border: 1px solid ${e.colors.semantic.cardBorder};
  transition:
    border-color ${e.transition.normal},
    background-color ${e.transition.normal};

  ${({$isLatest:i})=>i&&l`
      background-color: ${e.colors.semantic.cardBackgroundHighlight};
      border-color: ${e.colors.semantic.cardBorderHighlight};
    `}

  &:hover {
    border-color: ${e.colors.semantic.cardBorderHover};
  }

  &:focus-within {
    outline: 2px solid ${e.colors.accent.main};
    outline-offset: 2px;
  }

  ${e.media.tablet} {
    padding: ${e.spacing.lg};
    gap: ${e.spacing.sm};
  }
`,f=t.h3`
  font-size: 1rem;
  font-weight: ${e.font.headings.h3.fontWeight};
  line-height: ${e.font.headings.h3.lineHeight};
  letter-spacing: ${e.font.headings.h3.letterSpacing};
  color: ${e.colors.neutral.white};
  margin: 0;

  ${e.media.tablet} {
    font-size: ${e.font.headings.h3.fontSize};
  }
`,u=t.div`
  display: flex;
  align-items: center;
  gap: ${e.spacing.xs};
  font-size: 0.8125rem;
  font-weight: ${e.font.navText.fontWeight};
  line-height: ${e.font.navText.lineHeight};
  color: ${e.colors.neutral.grey};
  flex-wrap: wrap;

  ${e.media.tablet} {
    font-size: ${e.font.navText.fontSize};
  }
`,b=t.span`
  color: ${e.colors.accent.main};
  font-weight: 500;
`,a=t.span`
  color: ${e.colors.neutral.grey};
`,x=t.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${e.spacing.xs};
`,$=t.li`
  font-size: 0.8125rem;
  line-height: ${e.font.navText.lineHeight};
  color: ${e.colors.neutral.lightGrey};
  padding-left: 14px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${e.colors.accent.main};
  }

  ${e.media.tablet} {
    font-size: ${e.font.navText.fontSize};
    padding-left: ${e.spacing.md};

    &::before {
      top: ${e.spacing.xs};
      width: 6px;
      height: 6px;
    }
  }
`,y=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 2px;

  ${e.media.tablet} {
    gap: ${e.spacing.xs};
    margin-top: ${e.spacing.xxs};
  }
`,v=t.span`
  font-size: 0.75rem;
  font-weight: ${e.font.tagText.fontWeight};
  line-height: ${e.font.tagText.lineHeight};
  letter-spacing: ${e.font.tagText.letterSpacing};
  color: ${e.colors.neutral.grey};
  padding: 3px ${e.spacing.xs};
  border: 1px solid ${e.colors.semantic.tagBorder};
  border-radius: ${e.borderRadius.sm};
  background-color: ${e.colors.semantic.tagBackground};
  transition: background-color ${e.transition.fast};

  &:hover {
    background-color: ${e.colors.semantic.tagBackgroundHover};
  }

  ${e.media.tablet} {
    font-size: ${e.font.tagText.fontSize};
    padding: ${e.spacing.xxs} ${e.spacing.xs};
  }
`,w=[{id:"fintech",role:"Frontend Engineer",company:"Fintech Company",location:"Remote",dates:"2022 — Present",description:["Developed and maintained fintech products for different programs and countries using React, TypeScript, and styled-components, focusing on scalable and maintainable solutions.","Worked with microfrontend and hexagonal architecture, making sure applications could adapt to different deployment environments. Developed and maintained shared internal libraries used across multiple microfrontends.","Successfully integrated a third-party identity verification provider and contributed to improving development practices, reusable solutions, testing, and code quality within an agile team."],technologies:["React","TypeScript","Jest","Jira","Scrum","Vitest","Webpack","CI/CD","AI tools"]},{id:"web-mobile",role:"Frontend Engineer",company:"Web & Mobile Company",location:"Remote",dates:"2021 — 2022",description:["Developed and maintained web and mobile applications using React, React Native, and TypeScript, focusing on maintainable and reusable solutions.","Successfully contributed to the migration from AWS to Firebase, helping adapt and deploy applications to the new infrastructure. Developed and maintained shared internal libraries used across both web and mobile applications.","Worked closely with designers and backend teams, creating and implementing Figma designs and writing unit tests to ensure code quality and reliability."],technologies:["React","React Native","TypeScript","Jest","Vite","Firebase","Google Cloud","Figma","Git"]},{id:"emobility",role:"Frontend Developer",company:"E-mobility Company",location:"On-site",dates:"2020 — 2021",description:["Built a frontend application from scratch for the e-mobility sector, processing vehicle telemetry to generate reports and statistics on performance and energy efficiency.","Worked closely with backend and design teams to develop new features and prepare product demos for potential customers. Followed Scrum practices and used Jira to plan and track development.","Focused on building reusable and maintainable UI components, supported by unit and component testing with Jest and Testing Library, and documented in Storybook."],technologies:["React","TypeScript","JavaScript","Jest","Testing Library","styled-components","Storybook","Jira","Scrum"]},{id:"freelance",role:"Frontend Developer",company:"Freelance",location:"Remote",dates:"2019 — 2020",description:["Developed web applications and landing pages for small businesses using React, adapting solutions to different client needs and projects.","Worked independently on complete web projects and collaborated with other freelance developers to build and improve web products."],technologies:["React","JavaScript","HTML","CSS"]}],k=()=>n.jsxs(g,{"data-testid":"experience",id:"experience","aria-labelledby":"experience-title",children:[n.jsx(p,{as:"h2",id:"experience-title",children:"Professional Experience"}),n.jsx(m,{children:w.map((i,r)=>n.jsxs(h,{$isLatest:r===0,"aria-label":`${i.role} at ${i.company}`,children:[n.jsx(f,{children:i.role}),n.jsxs(u,{children:[n.jsx(b,{children:i.company}),n.jsx(a,{"aria-hidden":"true",children:"·"}),n.jsx("span",{children:i.location}),n.jsx(a,{"aria-hidden":"true",children:"·"}),n.jsx("span",{children:i.dates})]}),n.jsx(x,{children:i.description.map((o,s)=>n.jsx($,{children:o},s))}),n.jsx(y,{"aria-label":"Technologies used",children:i.technologies.map(o=>n.jsx(v,{children:o},o))})]},i.id))})]});export{k as Experience};
