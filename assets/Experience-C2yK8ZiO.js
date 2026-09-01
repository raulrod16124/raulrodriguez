import{d as o,t as e,l as c,j as n,V as l}from"./index-BU29KDoX.js";import{S as d}from"./ScrollReveal-B9l-gEaO.js";import"./vendor-CdEpWVL-.js";const p=o.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${e.spacing["3xl"]} ${e.spacing.md};

  ${e.media.tablet} {
    padding: ${e.spacing["3xl"]} ${e.spacing.lg};
  }
`,g=o.div`
  display: flex;
  flex-direction: column;
  gap: ${e.spacing.lg};
  max-width: ${e.maxWidth.content};
  width: 100%;
  margin-top: ${e.spacing["2xl"]};

  ${e.media.tablet} {
    gap: ${e.spacing.xl};
  }
`,m=o.article`
  display: flex;
  flex-direction: column;
  gap: ${e.spacing.xs};
  padding: ${e.spacing.lg} ${e.spacing.md};
  border-radius: ${e.borderRadius.md};
  background-color: ${e.colors.semantic.cardBackground};
  border: 1px solid ${e.colors.semantic.cardBorder};
  transition:
    border-color ${e.transition.normal},
    background-color ${e.transition.normal},
    transform ${e.transition.normal},
    box-shadow ${e.transition.boxShadow};

  ${({$isLatest:t})=>t&&c`
      background-color: ${e.colors.semantic.cardBackgroundHighlight};
      border-color: ${e.colors.semantic.cardBorderHighlight};
      box-shadow: ${e.boxShadow.cardHighlight};

      &:hover {
        box-shadow: ${e.boxShadow.cardHighlightHover};
      }
    `}

  &:hover {
    border-color: ${e.colors.semantic.cardBorderHover};
    transform: translateY(-4px);
    box-shadow: ${e.boxShadow.cardHover};
  }

  &:focus-within {
    outline: 3px solid ${e.colors.accent.main};
    outline-offset: 3px;
  }

  ${e.media.tablet} {
    padding: ${e.spacing.lg};
    gap: ${e.spacing.sm};
  }
`,h=o.h3`
  font-size: 1rem;
  font-weight: ${e.font.headings.h3.fontWeight};
  line-height: ${e.font.headings.h3.lineHeight};
  letter-spacing: ${e.font.headings.h3.letterSpacing};
  color: ${e.colors.neutral.white};
  margin: 0;

  ${e.media.tablet} {
    font-size: ${e.font.headings.h3.fontSize};
  }
`,f=o.div`
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
`,u=o.span`
  color: ${e.colors.accent.highContrast};
  font-weight: 500;
`,r=o.span`
  color: ${e.colors.neutral.grey};
`,b=o.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${e.spacing.xs};
`,x=o.li`
  font-size: 0.8125rem;
  line-height: ${e.font.navText.lineHeight};
  color: ${e.colors.neutral.lightGrey};
  padding-left: ${e.spacing.sm};
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
`,$=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e.spacing.xxs};
  margin-top: ${e.spacing.xxs};

  ${e.media.tablet} {
    gap: ${e.spacing.xs};
    margin-top: ${e.spacing.xxs};
  }
`,y=o.span`
  font-size: 0.75rem;
  font-weight: ${e.font.tagText.fontWeight};
  line-height: ${e.font.tagText.lineHeight};
  letter-spacing: ${e.font.tagText.letterSpacing};
  color: ${e.colors.neutral.grey};
  padding: ${e.spacing.xxs} ${e.spacing.xs};
  border: 1px solid ${e.colors.semantic.tagBorder};
  border-radius: ${e.borderRadius.sm};
  background-color: ${e.colors.semantic.tagBackground};
  transition:
    background-color ${e.transition.fast},
    border-color ${e.transition.fast},
    transform ${e.transition.fast},
    box-shadow ${e.transition.fast};

  &:hover {
    background-color: ${e.colors.semantic.tagBackgroundHover};
    border-color: ${e.colors.semantic.tagBorderHover};
    transform: translateY(-1px);
    box-shadow: ${e.boxShadow.tagHover};
  }

  ${e.media.tablet} {
    font-size: ${e.font.tagText.fontSize};
    padding: ${e.spacing.xxs} ${e.spacing.xs};
  }
`,w=[{id:"fintech",role:"Frontend Engineer",company:"Fintech Company",location:"Remote",dates:"February 2025 — Currently",description:["Developed and maintained fintech products for different programs and countries using React, TypeScript, and styled-components, focusing on scalable and maintainable solutions.","Worked with microfrontend and hexagonal architecture, making sure applications could adapt to different deployment environments. Developed and maintained shared internal libraries used across multiple microfrontends.","Successfully integrated a third-party identity verification provider and contributed to improving development practices, reusable solutions, testing, and code quality within an agile team."],technologies:["React","TypeScript","Jest","Jira","Scrum","Vitest","Webpack","CI/CD","AI tools"]},{id:"web-mobile",role:"Frontend Engineer",company:"Web & Mobile Company",location:"Remote",dates:"April 2022 — May 2024",description:["Developed and maintained web and mobile applications using React, React Native, and TypeScript, focusing on maintainable and reusable solutions.","Successfully contributed to the migration from AWS to Firebase, helping adapt and deploy applications to the new infrastructure. Developed and maintained shared internal libraries used across both web and mobile applications.","Worked closely with designers and backend teams, creating and implementing Figma designs and writing unit tests to ensure code quality and reliability."],technologies:["React","React Native","TypeScript","Jest","Vite","Firebase","Google Cloud","Figma","Git"]},{id:"emobility",role:"Frontend Developer",company:"E-mobility Company",location:"On-site",dates:"July 2021 — April 2022",description:["Built a frontend application from scratch for the e-mobility sector, processing vehicle telemetry to generate reports and statistics on performance and energy efficiency.","Worked closely with backend and design teams to develop new features and prepare product demos for potential customers. Followed Scrum practices and used Jira to plan and track development.","Focused on building reusable and maintainable UI components, supported by unit and component testing with Jest and Testing Library, and documented in Storybook."],technologies:["React","TypeScript","JavaScript","Jest","Testing Library","styled-components","Storybook","Jira","Scrum"]},{id:"freelance",role:"Frontend Developer",company:"Freelance",location:"Remote",dates:"February 2021 — July 2021",description:["Developed web applications and landing pages for small businesses using React, adapting solutions to different client needs and projects.","Worked independently on complete web projects and collaborated with other freelance developers to build and improve web products."],technologies:["React","TypeScript","JavaScript","Jest","HTML","CSS","styled-components"]}],k=()=>n.jsxs(p,{"data-testid":"experience",id:"experience","aria-labelledby":"experience-title",children:[n.jsx(l,{as:"h2",id:"experience-title",children:"Professional Experience"}),n.jsx(g,{children:w.map((t,a)=>n.jsx(d,{delay:a*100,children:n.jsxs(m,{$isLatest:a===0,"aria-label":`${t.role} at ${t.company}`,children:[n.jsx(h,{children:t.role}),n.jsxs(f,{children:[n.jsx(u,{children:t.company}),n.jsx(r,{"aria-hidden":"true",children:"·"}),n.jsx("span",{children:t.location}),n.jsx(r,{"aria-hidden":"true",children:"·"}),n.jsx("span",{children:t.dates})]}),n.jsx(b,{children:t.description.map((i,s)=>n.jsx(x,{children:i},s))}),n.jsx($,{"aria-label":"Technologies used",children:t.technologies.map(i=>n.jsx(y,{children:i},i))})]})},t.id))})]});export{k as Experience};
