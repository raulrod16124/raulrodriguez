import{m as r,d as i,t as e,j as t}from"./index-Dd4dJCLn.js";import"./vendor-jt5FKzEF.js";const s=r`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,c=i.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,l=i.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${e.spacing["2xl"]} ${e.spacing.md};
  animation: ${s} 0.4s ease-out;

  ${e.media.tablet} {
    padding: ${e.spacing["3xl"]} ${e.spacing.lg};
  }
`,d=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${e.spacing.lg};
  max-width: ${e.maxWidth.content};
  width: 100%;
  margin-top: 50px;

  ${e.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${e.spacing.xl};
  }
`,g=i.article`
  display: flex;
  flex-direction: column;
  gap: ${e.spacing.sm};
  padding: ${e.spacing.lg} ${e.spacing.md};
  border-radius: ${e.borderRadius.md};
  background-color: ${e.colors.semantic.cardBackground};
  border: 1px solid ${e.colors.semantic.cardBorder};
  transition:
    border-color ${e.transition.normal},
    background-color ${e.transition.normal};

  &:hover {
    border-color: ${e.colors.semantic.cardBorderHover};
  }

  ${e.media.tablet} {
    padding: ${e.spacing.lg};
  }
`,p=i.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: ${e.font.headings.h3.fontWeight};
  line-height: ${e.font.headings.h3.lineHeight};
  letter-spacing: ${e.font.headings.h3.letterSpacing};
  color: ${e.colors.accent.main};

  ${e.media.tablet} {
    font-size: ${e.font.headings.h3.fontSize};
  }
`,m=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  ${e.media.tablet} {
    gap: ${e.spacing.xs};
  }
`,x=i.span`
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
`,h=i.hr`
  width: 100%;
  max-width: ${e.maxWidth.content};
  height: 1px;
  background-color: ${e.colors.semantic.divider};
  border: none;
  margin: ${e.spacing.xl} auto 0;

  ${e.media.tablet} {
    margin: ${e.spacing["2xl"]} auto 0;
  }
`,$=[{title:"Frontend",technologies:["React","TypeScript","JavaScript","React Native"]},{title:"Architecture & Testing",technologies:["Microfrontends","Hexagonal Architecture","Jest","Vitest","Testing Library","Storybook"]},{title:"Cloud & Tooling",technologies:["Firebase","Google Cloud","GitHub","CI/CD","Jira","Figma"]},{title:"AI & Development Workflow",technologies:["GitHub Copilot","Claude","AI development tools"]}],f=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${e.spacing.xl} 0 0;
  width: 100%;
  max-width: ${e.maxWidth.content};
  margin: 0 auto;

  ${e.media.tablet} {
    padding: ${e.spacing["2xl"]} 0 0;
  }
`;i.hr`
  width: 100%;
  max-width: ${e.maxWidth.content};
  height: 1px;
  background-color: ${e.colors.semantic.divider};
  border: none;
  margin: 0 auto ${e.spacing.xl};

  ${e.media.tablet} {
    margin-bottom: ${e.spacing["2xl"]};
  }
`;const u=i.span`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: ${e.font.letterSpacing.wider};
  text-transform: uppercase;
  color: ${e.colors.neutral.grey};
  margin-bottom: ${e.spacing.md};
`,b=i.p`
  margin: 0;
  font-size: 0.9375rem;
  font-weight: ${e.font.body.fontWeight};
  line-height: ${e.font.lineHeight.relaxed};
  color: ${e.colors.neutral.lightGrey};
  text-align: center;
  max-width: 100%;

  ${e.media.tablet} {
    font-size: ${e.font.body.fontSize};
    max-width: ${e.maxWidth.about};
  }
`,w=i.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: ${e.spacing.lg};
  padding: ${e.spacing.xs} ${e.spacing.lg};
  font-size: ${e.font.small.fontSize};
  font-weight: 500;
  font-family: ${e.font.primary.fontFamily};
  color: ${e.colors.accent.main};
  background-color: transparent;
  border: 1px solid ${e.colors.semantic.accentBorder};
  border-radius: ${e.borderRadius.sm};
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color ${e.transition.normal},
    border-color ${e.transition.normal},
    transform ${e.transition.fast};

  &:hover {
    background-color: ${e.colors.semantic.accentBackgroundHover};
    border-color: ${e.colors.accent.main};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${e.colors.accent.light};
    outline-offset: 2px;
  }

  ${e.media.tablet} {
    width: auto;
    max-width: none;
  }

  @media (max-width: ${e.responsive.smallMobileDevices}) {
    width: 100%;
    max-width: 280px;
  }
`;function y(){const n="2024",a=String(new Date().getFullYear());return 3+(Number(a.slice(-1))-Number(n.slice(-1)))}const v="/assets/CV-Raul-D9I38KGS.pdf",k=()=>t.jsxs(f,{"data-testid":"about-block",children:[t.jsx(u,{children:"About me"}),t.jsxs(b,{children:["Frontend Engineer with ",y(),"+ years of experience building scalable web applications and reusable frontend systems. I've worked across fintech, e-mobility, and web/mobile products, always focusing on maintainable architecture and code quality."]}),t.jsx(w,{href:v,download:!0,children:"View CV"})]}),z=()=>t.jsxs(l,{"data-testid":"expertise",id:"expertise","aria-labelledby":"expertise-title",children:[t.jsx(c,{as:"h2",id:"expertise-title",children:"Technical Expertise"}),t.jsx(d,{children:$.map(o=>t.jsxs(g,{children:[t.jsx(p,{children:o.title}),t.jsx(m,{"aria-label":`${o.title} technologies`,children:o.technologies.map(n=>t.jsx(x,{children:n},n))})]},o.title))}),t.jsx(h,{"aria-hidden":"true"}),t.jsx(k,{})]});export{z as Expertise};
