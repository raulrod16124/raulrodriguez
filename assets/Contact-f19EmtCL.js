import{d as e,t as n,j as t,F as o,h as a,i as r}from"./index-CFO4EJe2.js";import"./vendor-jt5FKzEF.js";const s=e.section`
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
`,l=e.h2`
  font-size: ${n.font.headings.h2.fontSize};
  font-weight: ${n.font.headings.h2.fontWeight};
  line-height: ${n.font.headings.h2.lineHeight};
  letter-spacing: ${n.font.headings.h2.letterSpacing};
  color: ${n.colors.neutral.white};
  margin-bottom: ${n.spacing["2xl"]};
`,c=e.div`
  display: flex;
  gap: ${n.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;

  ${n.media.tablet} {
    flex-direction: row;
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
  transition:
    color ${n.transition.normal},
    transform ${n.transition.fast};

  svg {
    font-size: 1.75rem;
    transition: transform ${n.transition.normal};
  }

  &:hover {
    color: ${n.colors.accent.main};
    transform: translateY(-2px);
  }

  &:hover svg {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${n.colors.accent.main};
    outline-offset: 4px;
    border-radius: ${n.borderRadius.sm};
  }
`,d="raul.rod16124@gmail.com",h="https://github.com/raulrod16124",g="https://www.linkedin.com/in/raul-rod/",m=()=>t.jsxs(s,{"data-testid":"contact",id:"contact",children:[t.jsx(l,{children:"Interested in working together?"}),t.jsxs(c,{children:[t.jsxs(i,{href:`mailto:${d}`,"aria-label":"Send email",children:[t.jsx(o,{"aria-hidden":"true"}),t.jsx("span",{children:"Email"})]}),t.jsxs(i,{href:h,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub Profile",children:[t.jsx(a,{"aria-hidden":"true"}),t.jsx("span",{children:"GitHub"})]}),t.jsxs(i,{href:g,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn Profile",children:[t.jsx(r,{"aria-hidden":"true"}),t.jsx("span",{children:"LinkedIn"})]})]})]});export{m as Contact};
