import{m as f,d as m,l as d,j as l}from"./index--O_C-0u9.js";import{r as c}from"./vendor-CdEpWVL-.js";const p=()=>typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches,I=({threshold:t=.1,rootMargin:n="0px",triggerOnce:e=!0}={})=>{const r=c.useRef(null),[i,o]=c.useState(!1);return c.useEffect(()=>{const s=r.current;if(!s)return;if(p()){o(!0);return}const a=new IntersectionObserver(([u])=>{u.isIntersecting?(o(!0),e&&a.unobserve(s)):e||o(!1)},{threshold:t,rootMargin:n});return a.observe(s),()=>{a.unobserve(s)}},[t,n,e]),{ref:r,isInView:i}},w=f`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,x=f`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,y={fadeInUp:w,fadeIn:x},v=m.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  opacity: 0;

  ${({$isVisible:t,$animation:n,$duration:e,$delay:r})=>t&&d`
      animation: ${y[n]} ${e}ms ease-out ${r}ms both;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`,R=({children:t,animation:n="fadeInUp",delay:e=0,duration:r=400,className:i})=>{const{ref:o,isInView:s}=I({triggerOnce:!0});return l.jsx(v,{ref:o,$isVisible:s,$animation:n,$delay:e,$duration:r,className:i,children:t})};export{R as S};
