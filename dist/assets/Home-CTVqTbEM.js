import{m as o,d as n,t,j as e,H as l,a as d,b as p}from"./index-jc_1gygL.js";import{L as m}from"./vendor-jt5FKzEF.js";const s=o`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,c=o`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,g=o`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,x=n.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: auto;
  padding: 100px ${t.spacing.lg} 60px;
  overflow: hidden;

  ${t.media.tablet} {
    min-height: calc(100vh - 100px);
    padding: ${t.spacing["4xl"]} ${t.spacing["3xl"]};
  }
`,f=n.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  max-width: ${t.maxWidth.hero};
  width: 100%;
  gap: ${t.spacing["2xl"]};
  text-align: center;

  ${t.media.desktop} {
    flex-direction: row;
    gap: ${t.spacing["3xl"]};
    text-align: left;
  }
`,h=n.div`
  display: flex;
  flex-direction: column;
  gap: ${t.spacing.lg};
  animation: ${s} 0.6s ease-out;
  align-items: center;

  ${t.media.desktop} {
    align-items: flex-start;
  }
`,$=n.h1`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${t.colors.neutral.grey};

  ${t.media.tablet} {
    font-size: 1rem;
  }
`,u=n.h2`
  margin: 0;
  font-size: 1.75rem;
  font-weight: ${t.font.headings.h1.fontWeight};
  line-height: ${t.font.headings.h1.lineHeight};
  letter-spacing: ${t.font.headings.h1.letterSpacing};
  color: ${t.colors.neutral.white};

  ${t.media.tablet} {
    font-size: 2.25rem;
  }

  ${t.media.desktop} {
    font-size: ${t.font.headings.h1.fontSize};
  }
`,b=n.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${t.colors.accent.main};
  letter-spacing: ${t.font.letterSpacing.wider};

  ${t.media.tablet} {
    font-size: 1.125rem;
  }
`,w=n.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  line-height: ${t.font.lineHeight.relaxed};
  color: ${t.colors.neutral.grey};
  max-width: 100%;

  ${t.media.desktop} {
    max-width: 420px;
  }
`,j=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 280px;
  gap: ${t.spacing.sm};
  margin-top: ${t.spacing.xs};

  ${t.media.tablet} {
    flex-direction: row;
    width: auto;
    max-width: none;
    justify-content: center;
  }

  ${t.media.desktop} {
    justify-content: flex-start;
  }
`,y=n.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${t.spacing.xs};
  padding: ${t.spacing.xs} ${t.spacing.lg};
  font-size: ${t.font.small.fontSize};
  font-weight: 500;
  font-family: ${t.font.primary.fontFamily};
  color: ${t.colors.neutral.black};
  background-color: ${t.colors.accent.main};
  border: none;
  border-radius: ${t.borderRadius.sm};
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color ${t.transition.normal},
    transform ${t.transition.fast};

  svg {
    font-size: 1rem;
    flex-shrink: 0;
  }

  ${t.media.tablet} {
    width: auto;
  }

  &:hover {
    background-color: ${t.colors.accent.dark};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${t.colors.accent.light};
    outline-offset: 2px;
  }
`,r=n(m)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${t.spacing.xs};
  padding: ${t.spacing.xs} ${t.spacing.lg};
  font-size: ${t.font.small.fontSize};
  font-weight: 500;
  font-family: ${t.font.primary.fontFamily};
  color: ${t.colors.neutral.black};
  background-color: ${t.colors.accent.main};
  border: none;
  border-radius: ${t.borderRadius.sm};
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color ${t.transition.normal},
    transform ${t.transition.fast};

  svg {
    font-size: 1rem;
    flex-shrink: 0;
  }

  ${t.media.tablet} {
    width: auto;
  }

  &:hover {
    background-color: ${t.colors.accent.dark};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${t.colors.accent.light};
    outline-offset: 2px;
  }
`,k=n.div`
  position: relative;
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  animation: ${s} 0.6s ease-out;

  ${t.media.tablet} {
    width: 240px;
    height: 240px;
  }

  ${t.media.desktop} {
    width: 300px;
    height: 300px;
  }
`,v=n.span`
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    ${t.colors.accent.main},
    ${t.colors.accent.light},
    transparent 40%,
    ${t.colors.accent.dark} 70%,
    ${t.colors.accent.main}
  );
  animation: ${c} ${t.animation.ringSpinDuration} linear infinite;
  mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px));
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px));
  pointer-events: none;

  ${t.media.tablet} {
    inset: -8px;
  }
`,z=n.span`
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  background: conic-gradient(
    from 180deg,
    rgba(255, 255, 255, 0.12),
    transparent 30%,
    ${t.colors.accent.main} 50%,
    transparent 70%,
    rgba(255, 255, 255, 0.12)
  );
  animation: ${c} 12s linear infinite reverse;
  mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px));
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px));
  pointer-events: none;
  opacity: 0.7;

  ${t.media.tablet} {
    inset: -16px;
    opacity: 0.8;
  }
`,C=n.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${t.colors.border};
  z-index: 1;
  box-shadow: 0 0 30px ${t.animation.glowColor};
  transition: box-shadow 0.4s ease;

  &:hover {
    box-shadow: 0 0 40px ${t.animation.glowColorHover};
  }
`,a=n.span`
  position: absolute;
  top: ${({$top:i})=>i};
  left: ${({$left:i})=>i};
  width: ${({$size:i})=>`${i}px`};
  height: ${({$size:i})=>`${i}px`};
  border-radius: 50%;
  background-color: ${t.colors.accent.main};
  opacity: 0.08;
  animation: ${g} ${t.animation.floatDuration} ease-in-out infinite;
  animation-delay: ${({$delay:i})=>i};
  pointer-events: none;

  ${t.media.tablet} {
    opacity: 0.1;
  }
`,R="/assets/me-ChUzMmj9.webp",H="/assets/me-BXzSqP_o.png",S="https://github.com/raulrod16124",Y=()=>e.jsxs(x,{"data-testid":"home",children:[e.jsx(a,{$top:"15%",$left:"8%",$size:6,$delay:"0s"}),e.jsx(a,{$top:"70%",$left:"85%",$size:4,$delay:"2s"}),e.jsx(a,{$top:"25%",$left:"92%",$size:5,$delay:"4s"}),e.jsxs(f,{children:[e.jsxs(h,{children:[e.jsx($,{children:"Raúl Rodríguez"}),e.jsx(u,{children:"Frontend Engineer"}),e.jsx(b,{children:"React · TypeScript"}),e.jsxs(w,{children:["Building scalable web applications",e.jsx("br",{}),"and reusable frontend systems."]}),e.jsxs(j,{children:[e.jsxs(r,{to:"/experience",children:[e.jsx(l,{"aria-hidden":"true"}),"View experience"]}),e.jsxs(y,{href:S,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(d,{"aria-hidden":"true"}),"GitHub"]}),e.jsxs(r,{to:"/contact",children:[e.jsx(p,{"aria-hidden":"true"}),"Contact"]})]})]}),e.jsxs(k,{children:[e.jsx(z,{"aria-hidden":"true"}),e.jsx(v,{"aria-hidden":"true"}),e.jsxs("picture",{children:[e.jsx("source",{srcSet:R,type:"image/webp"}),e.jsx(C,{src:H,alt:"Raúl Rodríguez, Frontend Engineer",width:280,height:280})]})]})]})]});export{Y as Home};
