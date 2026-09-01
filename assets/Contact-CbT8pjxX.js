import{d as e,t as n,f as a,j as t,V as r,F as s,q as l,r as c}from"./index-BzMMM3-T.js";import{S as o}from"./ScrollReveal-BgUjGVgW.js";import"./vendor-CdEpWVL-.js";const d=e.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: ${n.spacing["3xl"]} ${n.spacing.md};
  text-align: center;

  ${n.media.tablet} {
    padding: ${n.spacing["3xl"]} ${n.spacing.lg};
  }
`,h=e.h2`
  font-size: ${n.font.headings.h2.fontSize};
  font-weight: ${n.font.headings.h2.fontWeight};
  line-height: ${n.font.headings.h2.lineHeight};
  letter-spacing: ${n.font.headings.h2.letterSpacing};
  color: ${n.colors.neutral.white};
  margin-bottom: ${n.spacing.xs};

  ${n.media.tablet} {
    font-size: ${n.font.headings.h1.fontSize};
  }
`,f=e.p`
  font-size: ${n.font.body.fontSize};
  font-weight: ${n.font.body.fontWeight};
  line-height: ${n.font.body.lineHeight};
  color: ${n.colors.neutral.grey};
  margin-bottom: ${n.spacing["2xl"]};
  max-width: 480px;
`,g=e.div`
  display: flex;
  gap: ${n.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;

  ${n.media.tablet} {
    gap: ${n.spacing.xl};
  }
`,i=e.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${n.spacing.xs};
  color: ${n.colors.neutral.grey};
  text-decoration: none;
  font-size: ${n.font.body.fontSize};
  font-weight: ${n.font.body.fontWeight};
  line-height: ${n.font.body.lineHeight};
  padding: ${n.spacing.sm} ${n.spacing.md};
  border-radius: ${n.borderRadius.md};
  position: relative;
  transition:
    color ${n.transition.normal},
    transform ${n.transition.fast},
    background-color ${n.transition.normal},
    box-shadow ${n.transition.boxShadow};

  &::after {
    content: '';
    position: absolute;
    bottom: ${n.spacing.xs};
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${n.colors.accent.main};
    transition: width ${n.transition.normal}, left ${n.transition.normal};
  }

  svg {
    font-size: 2rem;
    transition:
      transform ${n.transition.normal},
      filter ${n.transition.normal};
  }

  &:hover {
    color: ${n.colors.accent.highContrast};
    transform: translateY(-4px);
    background-color: ${n.colors.semantic.accentBackgroundHover};
    box-shadow: ${n.boxShadow.contactHover};
  }

  &:hover::after {
    width: 60%;
    left: 20%;
  }

  &:hover svg {
    transform: scale(1.2);
    filter: ${n.boxShadow.iconGlow};
  }

  &:active {
    color: ${n.colors.accent.highContrast};
    transform: translateY(-2px);
    background-color: ${n.colors.semantic.accentBackgroundHover};
  }

  &:active svg {
    transform: scale(1.1);
  }

  ${a}

  @media (prefers-reduced-motion: reduce) {
    transition: color ${n.transition.normal};

    &::after {
      transition: none;
    }

    &:hover {
      transform: none;
    }

    &:hover svg {
      transform: none;
    }
  }
`,m="raul.rod16124@gmail.com",p="https://github.com/raulrod16124",$="https://www.linkedin.com/in/raul-rod/",j=()=>t.jsxs(d,{"data-testid":"contact",id:"contact","aria-labelledby":"contact-title",children:[t.jsx(r,{as:"h2",id:"contact-title",children:"Get in Touch"}),t.jsx(o,{animation:"fadeIn",children:t.jsx(h,{children:"Let's Build Something Great"})}),t.jsx(o,{animation:"fadeIn",delay:80,children:t.jsx(f,{children:"Have a project in mind or want to collaborate? I'd love to hear from you."})}),t.jsxs(g,{children:[t.jsx(o,{animation:"fadeInUp",delay:160,children:t.jsxs(i,{href:`mailto:${m}`,"aria-label":"Send email",children:[t.jsx(s,{"aria-hidden":"true"}),t.jsx("span",{children:"Email"})]})}),t.jsx(o,{animation:"fadeInUp",delay:240,children:t.jsxs(i,{href:p,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub Profile",children:[t.jsx(l,{"aria-hidden":"true"}),t.jsx("span",{children:"GitHub"})]})}),t.jsx(o,{animation:"fadeInUp",delay:320,children:t.jsxs(i,{href:$,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn Profile",children:[t.jsx(c,{"aria-hidden":"true"}),t.jsx("span",{children:"LinkedIn"})]})})]})]});export{j as Contact};
