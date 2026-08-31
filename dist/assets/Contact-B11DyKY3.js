import{d as t,t as e,j as n,F as o,a,b as r}from"./index-Cr_gHD9F.js";import"./vendor-jt5FKzEF.js";const s=t.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: ${e.spacing["3xl"]} ${e.spacing.md};
  text-align: center;

  ${e.media.tablet} {
    padding: ${e.spacing["3xl"]} ${e.spacing.lg};
  }
`,l=t.h2`
  font-size: ${e.font.headings.h2.fontSize};
  font-weight: ${e.font.headings.h2.fontWeight};
  line-height: ${e.font.headings.h2.lineHeight};
  letter-spacing: ${e.font.headings.h2.letterSpacing};
  color: ${e.colors.neutral.white};
  margin-bottom: ${e.spacing["2xl"]};
`,c=t.div`
  display: flex;
  gap: ${e.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;

  ${e.media.tablet} {
    flex-direction: row;
    gap: ${e.spacing.xl};
  }
`,i=t.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${e.spacing.xs};
  color: ${e.colors.neutral.grey};
  text-decoration: none;
  font-size: ${e.font.body.fontSize};
  font-weight: ${e.font.body.fontWeight};
  line-height: ${e.font.body.lineHeight};
  transition: color ${e.transition.normal};

  svg {
    font-size: 1.75rem;
  }

  &:hover {
    color: ${e.colors.accent.main};
  }

  &:focus-visible {
    outline: 2px solid ${e.colors.accent.main};
    outline-offset: 4px;
    border-radius: ${e.borderRadius.sm};
  }
`,d="raul.rod16124@gmail.com",h="https://github.com/raulrod16124",g="https://www.linkedin.com/in/raul-rod/",x=()=>n.jsxs(s,{"data-testid":"contact",id:"contact",children:[n.jsx(l,{children:"Interested in working together?"}),n.jsxs(c,{children:[n.jsxs(i,{href:`mailto:${d}`,"aria-label":"Send email",children:[n.jsx(o,{"aria-hidden":"true"}),n.jsx("span",{children:"Email"})]}),n.jsxs(i,{href:h,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub Profile",children:[n.jsx(a,{"aria-hidden":"true"}),n.jsx("span",{children:"GitHub"})]}),n.jsxs(i,{href:g,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn Profile",children:[n.jsx(r,{"aria-hidden":"true"}),n.jsx("span",{children:"LinkedIn"})]})]})]});export{x as Contact};
