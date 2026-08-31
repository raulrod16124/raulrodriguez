import{m as a,d as n,t as e,j as t}from"./index-Cr_gHD9F.js";import"./vendor-jt5FKzEF.js";const o=a`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,r=n.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: auto;
  padding: 100px ${e.spacing.lg} 60px;

  ${e.media.tablet} {
    min-height: calc(100vh - 100px);
    padding: ${e.spacing["4xl"]} ${e.spacing["3xl"]};
  }
`,s=n.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  max-width: ${e.maxWidth.hero};
  width: 100%;
  gap: ${e.spacing["2xl"]};
  text-align: center;

  ${e.media.desktop} {
    flex-direction: row;
    gap: ${e.spacing["3xl"]};
    text-align: left;
  }
`,c=n.div`
  display: flex;
  flex-direction: column;
  gap: ${e.spacing.lg};
  animation: ${o} 0.6s ease-out;
  align-items: center;

  ${e.media.desktop} {
    align-items: flex-start;
  }
`,l=n.h1`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${e.colors.neutral.grey};

  ${e.media.tablet} {
    font-size: 1rem;
  }
`,d=n.h2`
  margin: 0;
  font-size: 1.75rem;
  font-weight: ${e.font.headings.h1.fontWeight};
  line-height: ${e.font.headings.h1.lineHeight};
  letter-spacing: ${e.font.headings.h1.letterSpacing};
  color: ${e.colors.neutral.white};

  ${e.media.tablet} {
    font-size: 2.25rem;
  }

  ${e.media.desktop} {
    font-size: ${e.font.headings.h1.fontSize};
  }
`,p=n.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${e.colors.accent.main};
  letter-spacing: ${e.font.letterSpacing.wider};

  ${e.media.tablet} {
    font-size: 1.125rem;
  }
`,m=n.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  line-height: ${e.font.lineHeight.relaxed};
  color: ${e.colors.neutral.grey};
  max-width: 100%;

  ${e.media.desktop} {
    max-width: 420px;
  }
`,g=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 280px;
  gap: ${e.spacing.sm};
  margin-top: ${e.spacing.xs};

  ${e.media.tablet} {
    flex-direction: row;
    width: auto;
    max-width: none;
    justify-content: center;
  }

  ${e.media.desktop} {
    justify-content: flex-start;
  }
`,i=n.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${e.spacing.xs} ${e.spacing.lg};
  font-size: ${e.font.small.fontSize};
  font-weight: 500;
  font-family: ${e.font.primary.fontFamily};
  color: ${e.colors.neutral.black};
  background-color: ${e.colors.accent.main};
  border: none;
  border-radius: ${e.borderRadius.sm};
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color ${e.transition.normal},
    transform ${e.transition.fast};

  ${e.media.tablet} {
    width: auto;
  }

  &:hover {
    background-color: ${e.colors.accent.dark};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${e.colors.accent.light};
    outline-offset: 2px;
  }
`,h=n.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${e.colors.border};
  flex-shrink: 0;
  animation: ${o} 0.6s ease-out;

  ${e.media.tablet} {
    width: 220px;
    height: 220px;
  }

  ${e.media.desktop} {
    width: 280px;
    height: 280px;
  }
`,x="/assets/me-ChUzMmj9.webp",f="/assets/me-BXzSqP_o.png",$="https://github.com/raulrod16124",w=()=>t.jsx(r,{"data-testid":"home",children:t.jsxs(s,{children:[t.jsxs(c,{children:[t.jsx(l,{children:"Raúl Rodríguez"}),t.jsx(d,{children:"Frontend Engineer"}),t.jsx(p,{children:"React · TypeScript"}),t.jsxs(m,{children:["Building scalable web applications",t.jsx("br",{}),"and reusable frontend systems."]}),t.jsxs(g,{children:[t.jsx(i,{href:"/experience",children:"View experience"}),t.jsx(i,{href:$,target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),t.jsx(i,{href:"/contact",children:"Contact"})]})]}),t.jsxs("picture",{children:[t.jsx("source",{srcSet:x,type:"image/webp"}),t.jsx(h,{src:f,alt:"Raúl Rodríguez, Frontend Engineer",width:280,height:280})]})]})});export{w as Home};
