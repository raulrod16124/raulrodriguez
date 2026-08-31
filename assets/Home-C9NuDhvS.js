import{m as r,d as n,t as e,j as t,H as l,a as d,b as p}from"./index-CFO4EJe2.js";import"./vendor-jt5FKzEF.js";const s=r`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,c=r`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,m=r`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,g=n.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: auto;
  padding: 100px ${e.spacing.lg} 60px;
  overflow: hidden;

  ${e.media.tablet} {
    min-height: calc(100vh - 100px);
    padding: ${e.spacing["4xl"]} ${e.spacing["3xl"]};
  }
`,x=n.div`
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
`,h=n.div`
  display: flex;
  flex-direction: column;
  gap: ${e.spacing.lg};
  animation: ${s} 0.6s ease-out;
  align-items: center;

  ${e.media.desktop} {
    align-items: flex-start;
  }
`,f=n.h1`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${e.colors.neutral.grey};

  ${e.media.tablet} {
    font-size: 1rem;
  }
`,$=n.h2`
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
`,u=n.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${e.colors.accent.main};
  letter-spacing: ${e.font.letterSpacing.wider};

  ${e.media.tablet} {
    font-size: 1.125rem;
  }
`,b=n.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  line-height: ${e.font.lineHeight.relaxed};
  color: ${e.colors.neutral.grey};
  max-width: 100%;

  ${e.media.desktop} {
    max-width: 420px;
  }
`,w=n.div`
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
`,a=n.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${e.spacing.xs};
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

  svg {
    font-size: 1rem;
    flex-shrink: 0;
  }

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
`,j=n.div`
  position: relative;
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  animation: ${s} 0.6s ease-out;

  ${e.media.tablet} {
    width: 240px;
    height: 240px;
  }

  ${e.media.desktop} {
    width: 300px;
    height: 300px;
  }
`,y=n.span`
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    ${e.colors.accent.main},
    ${e.colors.accent.light},
    transparent 40%,
    ${e.colors.accent.dark} 70%,
    ${e.colors.accent.main}
  );
  animation: ${c} ${e.animation.ringSpinDuration} linear infinite;
  mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px));
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px));
  pointer-events: none;

  ${e.media.tablet} {
    inset: -8px;
  }
`,k=n.span`
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  background: conic-gradient(
    from 180deg,
    rgba(255, 255, 255, 0.12),
    transparent 30%,
    ${e.colors.accent.main} 50%,
    transparent 70%,
    rgba(255, 255, 255, 0.12)
  );
  animation: ${c} 12s linear infinite reverse;
  mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px));
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px));
  pointer-events: none;
  opacity: 0.7;

  ${e.media.tablet} {
    inset: -16px;
    opacity: 0.8;
  }
`,v=n.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${e.colors.border};
  z-index: 1;
  box-shadow: 0 0 30px ${e.animation.glowColor};
  transition: box-shadow 0.4s ease;

  &:hover {
    box-shadow: 0 0 40px ${e.animation.glowColorHover};
  }
`,o=n.span`
  position: absolute;
  top: ${({$top:i})=>i};
  left: ${({$left:i})=>i};
  width: ${({$size:i})=>`${i}px`};
  height: ${({$size:i})=>`${i}px`};
  border-radius: 50%;
  background-color: ${e.colors.accent.main};
  opacity: 0.08;
  animation: ${m} ${e.animation.floatDuration} ease-in-out infinite;
  animation-delay: ${({$delay:i})=>i};
  pointer-events: none;

  ${e.media.tablet} {
    opacity: 0.1;
  }
`,z="/assets/me-ChUzMmj9.webp",C="/assets/me-BXzSqP_o.png",H="https://github.com/raulrod16124",T=()=>t.jsxs(g,{"data-testid":"home",children:[t.jsx(o,{$top:"15%",$left:"8%",$size:6,$delay:"0s"}),t.jsx(o,{$top:"70%",$left:"85%",$size:4,$delay:"2s"}),t.jsx(o,{$top:"25%",$left:"92%",$size:5,$delay:"4s"}),t.jsxs(x,{children:[t.jsxs(h,{children:[t.jsx(f,{children:"Raúl Rodríguez"}),t.jsx($,{children:"Frontend Engineer"}),t.jsx(u,{children:"React · TypeScript"}),t.jsxs(b,{children:["Building scalable web applications",t.jsx("br",{}),"and reusable frontend systems."]}),t.jsxs(w,{children:[t.jsxs(a,{href:"/experience",children:[t.jsx(l,{"aria-hidden":"true"}),"View experience"]}),t.jsxs(a,{href:H,target:"_blank",rel:"noopener noreferrer",children:[t.jsx(d,{"aria-hidden":"true"}),"GitHub"]}),t.jsxs(a,{href:"/contact",children:[t.jsx(p,{"aria-hidden":"true"}),"Contact"]})]})]}),t.jsxs(j,{children:[t.jsx(k,{"aria-hidden":"true"}),t.jsx(y,{"aria-hidden":"true"}),t.jsxs("picture",{children:[t.jsx("source",{srcSet:z,type:"image/webp"}),t.jsx(v,{src:C,alt:"Raúl Rodríguez, Frontend Engineer",width:280,height:280})]})]})]})]});export{T as Home};
