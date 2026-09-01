import{m as i,d as n,t,f as s,j as e,H as d,a as p,b as m}from"./index-BzMMM3-T.js";import{L as g}from"./vendor-CdEpWVL-.js";const f=i`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,h=i`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  60% {
    opacity: 1;
    transform: scale(1.03);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`,c=i`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,x=i`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,l=i`
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,$=n.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: auto;
  padding: ${t.spacing["4xl"]} ${t.spacing.lg} ${t.spacing["3xl"]};
  overflow: hidden;

  ${t.media.tablet} {
    padding: ${t.spacing["4xl"]} ${t.spacing["3xl"]};
  }
`,u=n.div`
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
`,b=n.div`
  display: flex;
  flex-direction: column;
  gap: ${t.spacing.lg};
  animation: ${f} 0.6s ease-out;
  align-items: center;

  ${t.media.desktop} {
    align-items: flex-start;
  }
`,w=n.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: ${t.font.headings.h1.letterSpacing};
  color: ${t.colors.neutral.white};

  ${t.media.tablet} {
    font-size: 3rem;
  }

  ${t.media.desktop} {
    font-size: ${t.font.headings.h1.fontSize};
  }
`,y=n.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: ${t.font.headings.h2.lineHeight};
  letter-spacing: ${t.font.headings.h2.letterSpacing};
  color: ${t.colors.neutral.lightGrey};

  ${t.media.tablet} {
    font-size: 1.75rem;
  }

  ${t.media.desktop} {
    font-size: ${t.font.headings.h2.fontSize};
  }
`,k=n.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${t.colors.accent.highContrast};
  letter-spacing: ${t.font.letterSpacing.wider};

  ${t.media.tablet} {
    font-size: 1.125rem;
  }
`,j=n.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  line-height: ${t.font.lineHeight.relaxed};
  color: ${t.colors.neutral.grey};
  max-width: 100%;

  ${t.media.desktop} {
    max-width: 420px;
  }
`,v=n.div`
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
`,z=n.a`
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

  &:active {
    background-color: ${t.colors.accent.dark};
    transform: translateY(0);
  }

  ${s}
`,r=n(g)`
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

  &:active {
    background-color: ${t.colors.accent.dark};
    transform: translateY(0);
  }

  ${s}
`,C=n.div`
  position: relative;
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  opacity: 0;
  animation: ${h} 0.5s ease-out 0.3s both;

  ${t.media.tablet} {
    width: 240px;
    height: 240px;
  }

  ${t.media.desktop} {
    width: 300px;
    height: 300px;
  }
`,R=n.span`
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
  opacity: 0;
  animation:
    ${l} 0.4s ease-out 0.8s both,
    ${c} ${t.animation.ringSpinDuration} linear 0.8s infinite;
  mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 3px),
    #000 calc(100% - 3px)
  );
  -webkit-mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 3px),
    #000 calc(100% - 3px)
  );
  pointer-events: none;

  ${t.media.tablet} {
    inset: -8px;
  }
`,S=n.span`
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
  opacity: 0;
  animation:
    ${l} 0.4s ease-out 0.9s both,
    ${c} 12s linear 0.9s infinite reverse;
  mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 2px),
    #000 calc(100% - 2px)
  );
  -webkit-mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 2px),
    #000 calc(100% - 2px)
  );
  pointer-events: none;

  ${t.media.tablet} {
    inset: -16px;
  }
`,H=n.img`
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
`,o=n.span`
  position: absolute;
  top: ${({$top:a})=>a};
  left: ${({$left:a})=>a};
  width: ${({$size:a})=>`${a}px`};
  height: ${({$size:a})=>`${a}px`};
  border-radius: 50%;
  background-color: ${t.colors.accent.main};
  opacity: 0.08;
  animation: ${x} ${t.animation.floatDuration} ease-in-out infinite;
  animation-delay: ${({$delay:a})=>a};
  pointer-events: none;

  ${t.media.tablet} {
    opacity: 0.1;
  }
`,T="/assets/me-ChUzMmj9.webp",Y="/assets/me-BXzSqP_o.png",F="https://github.com/raulrod16124",G=()=>e.jsxs($,{"data-testid":"home",children:[e.jsx(o,{$top:"15%",$left:"8%",$size:6,$delay:"0s"}),e.jsx(o,{$top:"70%",$left:"85%",$size:4,$delay:"2s"}),e.jsx(o,{$top:"25%",$left:"92%",$size:5,$delay:"4s"}),e.jsxs(u,{children:[e.jsxs(b,{children:[e.jsx(w,{children:"Raúl Rodríguez"}),e.jsx(y,{children:"Frontend Engineer"}),e.jsx(k,{children:"React · TypeScript"}),e.jsxs(j,{children:["Building scalable web applications",e.jsx("br",{}),"and reusable frontend systems."]}),e.jsxs(v,{children:[e.jsxs(r,{to:"/experience",children:[e.jsx(d,{"aria-hidden":"true"}),"View experience"]}),e.jsxs(z,{href:F,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(p,{"aria-hidden":"true"}),"GitHub"]}),e.jsxs(r,{to:"/contact",children:[e.jsx(m,{"aria-hidden":"true"}),"Contact"]})]})]}),e.jsxs(C,{children:[e.jsx(S,{"aria-hidden":"true"}),e.jsx(R,{"aria-hidden":"true"}),e.jsxs("picture",{children:[e.jsx("source",{srcSet:T,type:"image/webp"}),e.jsx(H,{src:Y,alt:"Raúl Rodríguez, Frontend Engineer",width:280,height:280})]})]})]})]});export{G as Home};
