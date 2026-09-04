import{j as s,g as at,p as st,A as ct,c as lt,T as ut,G as dt,d as w,t as n,f as $e,e as Pe,h as ft,i as gt,V as pt,a as ht,k as mt,n as xt,o as yt}from"./index-DjLqk89H.js";import{g as Et,r as a,a as vt}from"./vendor-CdEpWVL-.js";import{S as wt}from"./ScrollReveal-CgW8zTMh.js";function Ne(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=Ne(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function pe(){for(var e,t,r=0,o="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=Ne(e))&&(o&&(o+=" "),o+=t);return o}var Re=Object.prototype.hasOwnProperty;function Ce(e,t,r){for(r of e.keys())if(ae(r,t))return r}function ae(e,t){var r,o,i;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((o=e.length)===t.length)for(;o--&&ae(e[o],t[o]););return o===-1}if(r===Set){if(e.size!==t.size)return!1;for(o of e)if(i=o,i&&typeof i=="object"&&(i=Ce(t,i),!i)||!t.has(i))return!1;return!0}if(r===Map){if(e.size!==t.size)return!1;for(o of e)if(i=o[0],i&&typeof i=="object"&&(i=Ce(t,i),!i)||!ae(o[1],t.get(i)))return!1;return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((o=e.byteLength)===t.byteLength)for(;o--&&e.getInt8(o)===t.getInt8(o););return o===-1}if(ArrayBuffer.isView(e)){if((o=e.byteLength)===t.byteLength)for(;o--&&e[o]===t[o];);return o===-1}if(!r||typeof e=="object"){o=0;for(r in e)if(Re.call(e,r)&&++o&&!Re.call(t,r)||!(r in t)||!ae(e[r],t[r]))return!1;return Object.keys(t).length===o}}return e!==e&&t!==t}function de(e){let t=!1;return{promise:new Promise((o,i)=>{e.then(l=>!t&&o(l)).catch(l=>!t&&i(l))}),cancel(){t=!0}}}const bt=["onCopy","onCut","onPaste"],St=["onCompositionEnd","onCompositionStart","onCompositionUpdate"],Tt=["onFocus","onBlur"],$t=["onInput","onInvalid","onReset","onSubmit"],Pt=["onLoad","onError"],Rt=["onKeyDown","onKeyPress","onKeyUp"],Ct=["onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting"],Lt=["onClick","onContextMenu","onDoubleClick","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp"],kt=["onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop"],At=["onSelect"],Dt=["onTouchCancel","onTouchEnd","onTouchMove","onTouchStart"],jt=["onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onGotPointerCapture","onLostPointerCapture","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut"],_t=["onScroll"],Ot=["onWheel"],Ft=["onAnimationStart","onAnimationEnd","onAnimationIteration"],Nt=["onTransitionEnd"],Mt=["onToggle"],Vt=["onChange"],Bt=[...bt,...St,...Tt,...$t,...Pt,...Rt,...Ct,...Lt,...kt,...At,...Dt,...jt,..._t,...Ot,...Ft,...Nt,...Vt,...Mt];function Me(e,t){const r={};for(const o of Bt){const i=e[o];i&&(t?r[o]=l=>i(l,t(o)):r[o]=i)}return r}var Ht="Invariant failed";function p(e,t){if(!e)throw new Error(Ht)}var Gt=function(){},It=Gt;const F=Et(It),Ve=a.createContext(null),zt="noopener noreferrer nofollow";class Wt{constructor(){this.externalLinkEnabled=!0,this.externalLinkRel=void 0,this.externalLinkTarget=void 0,this.isInPresentationMode=!1,this.pdfDocument=void 0,this.pdfViewer=void 0}setDocument(t){this.pdfDocument=t}setViewer(t){this.pdfViewer=t}setExternalLinkRel(t){this.externalLinkRel=t}setExternalLinkTarget(t){this.externalLinkTarget=t}setHash(){}setHistory(){}get pagesCount(){return this.pdfDocument?this.pdfDocument.numPages:0}get page(){return p(this.pdfViewer),this.pdfViewer.currentPageNumber||0}set page(t){p(this.pdfViewer),this.pdfViewer.currentPageNumber=t}get rotation(){return 0}set rotation(t){}addLinkAttributes(t,r,o){t.href=r,t.rel=this.externalLinkRel||zt,t.target=o?"_blank":this.externalLinkTarget||""}goToDestination(t){return new Promise(r=>{p(this.pdfDocument),p(t),typeof t=="string"?this.pdfDocument.getDestination(t).then(r):Array.isArray(t)?r(t):t.then(r)}).then(r=>{p(Array.isArray(r));const o=r[0];new Promise(i=>{p(this.pdfDocument),o instanceof Object?this.pdfDocument.getPageIndex(o).then(l=>{i(l)}).catch(()=>{p(!1)}):typeof o=="number"?i(o):p(!1)}).then(i=>{const l=i+1;p(this.pdfViewer),p(l>=1&&l<=this.pagesCount),this.pdfViewer.scrollPageIntoView({dest:r,pageIndex:i,pageNumber:l})})})}goToPage(t){const r=t-1;p(this.pdfViewer),p(t>=1&&t<=this.pagesCount),this.pdfViewer.scrollPageIntoView({pageIndex:r,pageNumber:t})}goToXY(){}cachePageRef(){}getDestinationHash(){return"#"}getAnchorUrl(){return"#"}executeNamedAction(){}executeSetOCGState(){}isPageVisible(){return!0}isPageCached(){return!0}navigateTo(t){this.goToDestination(t)}}function se({children:e,type:t}){return s.jsx("div",{className:`react-pdf__message react-pdf__message--${t}`,children:e})}const Le={NEED_PASSWORD:1,INCORRECT_PASSWORD:2};function Ut(e,t){switch(t.type){case"RESOLVE":return{value:t.value,error:void 0};case"REJECT":return{value:!1,error:t.error};case"RESET":return{value:void 0,error:void 0};default:return e}}function ce(){return a.useReducer(Ut,{value:void 0,error:void 0})}const he=typeof window<"u",Be=he&&window.location.protocol==="file:";function Jt(e){return typeof e<"u"}function Z(e){return Jt(e)&&e!==null}function Yt(e){return typeof e=="string"}function Kt(e){return e instanceof ArrayBuffer}function qt(e){return p(he),e instanceof Blob}function Se(e){return Yt(e)&&/^data:/.test(e)}function ke(e){p(Se(e));const[t="",r=""]=e.split(",");return t.split(";").indexOf("base64")!==-1?atob(r):unescape(r)}function Xt(){return he&&window.devicePixelRatio||1}const He="On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";function Ae(){F(!Be,`Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${He}`)}function Qt(){F(!Be,`Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ${He}`)}function ee(e){e?.cancel&&e.cancel()}function Te(e,t){return Object.defineProperty(e,"width",{get(){return this.getViewport({scale:t}).width},configurable:!0}),Object.defineProperty(e,"height",{get(){return this.getViewport({scale:t}).height},configurable:!0}),Object.defineProperty(e,"originalWidth",{get(){return this.getViewport({scale:1}).width},configurable:!0}),Object.defineProperty(e,"originalHeight",{get(){return this.getViewport({scale:1}).height},configurable:!0}),e}function Ge(e){return e.name==="AbortException"||e.name==="RenderingCancelledException"}function Zt(e){return new Promise((t,r)=>{const o=new FileReader;o.onload=()=>{if(!o.result)return r(new Error("Error while reading a file."));t(o.result)},o.onerror=i=>{if(!i.target)return r(new Error("Error while reading a file."));const{error:l}=i.target;if(!l)return r(new Error("Error while reading a file."));switch(l.code){case l.NOT_FOUND_ERR:return r(new Error("Error while reading a file: File not found."));case l.SECURITY_ERR:return r(new Error("Error while reading a file: Security error."));case l.ABORT_ERR:return r(new Error("Error while reading a file: Aborted."));default:return r(new Error("Error while reading a file."))}},o.readAsArrayBuffer(e)})}const{PDFDataRangeTransport:en}=st,tn=(e,t)=>{switch(t){case Le.NEED_PASSWORD:{const r=prompt("Enter the password to open this PDF file.");e(r);break}case Le.INCORRECT_PASSWORD:{const r=prompt("Invalid password. Please try again.");e(r);break}}};function De(e){return typeof e=="object"&&e!==null&&("data"in e||"range"in e||"url"in e)}const nn=a.forwardRef(function({children:t,className:r,error:o="Failed to load PDF file.",externalLinkRel:i,externalLinkTarget:l,file:c,inputRef:x,imageResourcesPath:u,loading:k="Loading PDF…",noData:d="No PDF file specified.",onItemClick:y,onLoadError:f,onLoadProgress:g,onLoadSuccess:b,onPassword:j=tn,onSourceError:h,onSourceSuccess:E,options:S,renderMode:N,rotate:z,scale:D,...C},T){const[A,L]=ce(),{value:m,error:M}=A,[W,V]=ce(),{value:$,error:Y}=W,B=a.useRef(new Wt),G=a.useRef([]),U=a.useRef(void 0),H=a.useRef(void 0);c&&c!==U.current&&De(c)&&(F(!ae(c,U.current),`File prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.`),U.current=c),S&&S!==H.current&&(F(!ae(S,H.current),`Options prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.`),H.current=S);const le=a.useRef({scrollPageIntoView:R=>{const{dest:_,pageNumber:v,pageIndex:O=v-1}=R;if(y){y({dest:_,pageIndex:O,pageNumber:v});return}const I=G.current[O];if(I){I.scrollIntoView();return}F(!1,`An internal link leading to page ${v} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`)}});a.useImperativeHandle(T,()=>({linkService:B,pages:G,viewer:le}),[]);function ye(){E&&E()}function fe(){M&&(F(!1,M.toString()),h&&h(M))}function Ee(){L({type:"RESET"})}a.useEffect(Ee,[c,L]);const te=a.useCallback(async()=>{if(!c)return null;if(typeof c=="string")return Se(c)?{data:ke(c)}:(Ae(),{url:c});if(c instanceof en)return{range:c};if(Kt(c))return{data:c};if(he&&qt(c))return{data:await Zt(c)};if(p(typeof c=="object"),p(De(c)),"url"in c&&typeof c.url=="string"){if(Se(c.url)){const{url:R,..._}=c;return{data:ke(R),..._}}Ae()}return c},[c]);a.useEffect(()=>{const R=de(te());return R.promise.then(_=>{L({type:"RESOLVE",value:_})}).catch(_=>{L({type:"REJECT",error:_})}),()=>{ee(R)}},[te,L]),a.useEffect(()=>{if(!(typeof m>"u")){if(m===!1){fe();return}ye()}},[m]);function ue(){$&&(b&&b($),G.current=new Array($.numPages),B.current.setDocument($))}function ne(){Y&&(F(!1,Y.toString()),f&&f(Y))}a.useEffect(function(){V({type:"RESET"})},[V,m]),a.useEffect(function(){if(!m)return;const _=S?{...m,...S}:m,v=at(_);g&&(v.onProgress=g),j&&(v.onPassword=j);const O=v;return O.promise.then(I=>{O.destroyed||V({type:"RESOLVE",value:I})}).catch(I=>{O.destroyed||V({type:"REJECT",error:I})}),()=>{O.destroy(),V({type:"RESET"})}},[S,V,m]),a.useEffect(()=>{if(!(typeof $>"u")){if($===!1){ne();return}ue()}},[$]),a.useEffect(function(){B.current.setViewer(le.current),B.current.setExternalLinkRel(i),B.current.setExternalLinkTarget(l)},[i,l]);const re=a.useCallback((R,_)=>{G.current[R]=_},[]),X=a.useCallback(R=>{delete G.current[R]},[]),oe=a.useMemo(()=>({imageResourcesPath:u,linkService:B.current,onItemClick:y,pdf:$,registerPage:re,renderMode:N,rotate:z,scale:D,unregisterPage:X}),[u,y,$,re,N,z,D,X]),ve=a.useMemo(()=>Me(C,()=>$),[C,$]);function Q(){function R(v){return!!v?.pdf}if(!R(oe))throw new Error("pdf is undefined");const _=typeof t=="function"?t(oe):t;return s.jsx(Ve.Provider,{value:oe,children:_})}function P(){return c?$==null?s.jsx(se,{type:"loading",children:typeof k=="function"?k():k}):$===!1?s.jsx(se,{type:"error",children:typeof o=="function"?o():o}):Q():s.jsx(se,{type:"no-data",children:typeof d=="function"?d():d})}return s.jsx("div",{className:pe("react-pdf__Document",r),ref:x,...ve,children:P()})});function Ie(){return a.useContext(Ve)}function ze(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=e.filter(Boolean);if(r.length<=1){var o=r[0];return o||null}return function(l){for(var c=0,x=r;c<x.length;c++){var u=x[c];typeof u=="function"?u(l):u&&(u.current=l)}}}const We=a.createContext(null);function me(){return a.useContext(We)}function rn(){const e=Ie(),t=me();p(t);const r={...e,...t},{filterAnnotations:o,imageResourcesPath:i,linkService:l,onGetAnnotationsError:c,onGetAnnotationsSuccess:x,onRenderAnnotationLayerError:u,onRenderAnnotationLayerSuccess:k,page:d,pdf:y,renderForms:f,rotate:g,scale:b=1}=r;p(y),p(d),p(l);const[j,h]=ce(),{value:E,error:S}=j,N=a.useRef(null);F(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"),10)===1,"AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations");function z(){E&&x&&x(E)}function D(){S&&(F(!1,S.toString()),c&&c(S))}a.useEffect(function(){h({type:"RESET"})},[h,d]),a.useEffect(function(){if(!d)return;const m=de(d.getAnnotations()),M=m;return m.promise.then(W=>{h({type:"RESOLVE",value:W})}).catch(W=>{h({type:"REJECT",error:W})}),()=>{ee(M)}},[h,d]),a.useEffect(()=>{if(E!==void 0){if(E===!1){D();return}z()}},[E]);function C(){k&&k()}function T(L){F(!1,`${L}`),u&&u(L)}const A=a.useMemo(()=>d.getViewport({scale:b,rotation:g}),[d,g,b]);return a.useEffect(function(){if(!y||!d||!l||!E)return;const{current:m}=N;if(!m)return;const M=A.clone({dontFlip:!0}),W={accessibilityManager:null,annotationCanvasMap:null,annotationEditorUIManager:null,annotationStorage:y.annotationStorage,commentManager:null,div:m,l10n:null,linkService:l,page:d,structTreeLayer:null,viewport:M},V={annotations:o?o({annotations:E}):E,annotationStorage:y.annotationStorage,div:m,imageResourcesPath:i,linkService:l,page:d,renderForms:f,viewport:M};m.innerHTML="";try{new ct(W).render(V),C()}catch($){T($)}return()=>{}},[E,o,i,l,d,y,f,A]),s.jsx("div",{className:pe("react-pdf__Page__annotations","annotationLayer"),ref:N})}const Ue={Document:null,DocumentFragment:null,Part:"group",Sect:"group",Div:"group",Aside:"note",NonStruct:"none",P:null,H:"heading",Title:null,FENote:"note",Sub:"group",Lbl:null,Span:null,Em:null,Strong:null,Link:"link",Annot:"note",Form:"form",Ruby:null,RB:null,RT:null,RP:null,Warichu:null,WT:null,WP:null,L:"list",LI:"listitem",LBody:null,Table:"table",TR:"row",TH:"columnheader",TD:"cell",THead:"columnheader",TBody:null,TFoot:null,Caption:null,Figure:"figure",Formula:null,Artifact:null},on=/^H(\d+)$/;function an(e){return e in Ue}function xe(e){return"children"in e}function Je(e){return xe(e)?e.children.length===1&&0 in e.children&&"id"in e.children[0]:!1}function sn(e){const t={};if(xe(e)){const{role:r}=e,o=r.match(on);if(o)t.role="heading",t["aria-level"]=Number(o[1]);else if(an(r)){const i=Ue[r];i&&(t.role=i)}}return t}function Ye(e){const t={};if(xe(e)){if(e.alt!==void 0&&(t["aria-label"]=e.alt),e.lang!==void 0&&(t.lang=e.lang),Je(e)){const[r]=e.children;if(r){const o=Ye(r);return{...t,...o}}}}else"id"in e&&(t["aria-owns"]=e.id);return t}function cn(e){return e?{...sn(e),...Ye(e)}:null}function Ke({className:e,node:t}){const r=a.useMemo(()=>cn(t),[t]),o=a.useMemo(()=>!xe(t)||Je(t)?null:t.children.map((i,l)=>s.jsx(Ke,{node:i},l)),[t]);return s.jsx("span",{className:e,...r,children:o})}function ln(){const e=me();p(e);const{onGetStructTreeError:t,onGetStructTreeSuccess:r}=e,[o,i]=ce(),{value:l,error:c}=o,{customTextRenderer:x,page:u}=e;function k(){l&&r&&r(l)}function d(){c&&(F(!1,c.toString()),t&&t(c))}return a.useEffect(function(){i({type:"RESET"})},[i,u]),a.useEffect(function(){if(x||!u)return;const f=de(u.getStructTree()),g=f;return f.promise.then(b=>{i({type:"RESOLVE",value:b})}).catch(b=>{i({type:"REJECT",error:b})}),()=>ee(g)},[x,u,i]),a.useEffect(()=>{if(l!==void 0){if(l===!1){d();return}k()}},[l]),l?s.jsx(Ke,{className:"react-pdf__Page__structTree structTree",node:l}):null}const je=lt;function un(e){const t=me();p(t);const r={...t,...e},{_className:o,canvasBackground:i,devicePixelRatio:l=Xt(),onRenderError:c,onRenderSuccess:x,page:u,renderForms:k,renderTextLayer:d,pageColors:y,rotate:f,scale:g}=r,{canvasRef:b}=e;p(u);const j=a.useRef(null);function h(){u&&x&&x(Te(u,g))}function E(D){Ge(D)||(F(!1,D.toString()),c&&c(D))}const S=a.useMemo(()=>u.getViewport({scale:g*l,rotation:f}),[l,u,f,g]),N=a.useMemo(()=>u.getViewport({scale:g,rotation:f}),[u,f,g]);a.useEffect(function(){if(!u)return;u.cleanup();const{current:C}=j;if(!C)return;C.width=S.width,C.height=S.height,C.style.width=`${Math.floor(N.width)}px`,C.style.height=`${Math.floor(N.height)}px`,C.style.visibility="hidden";const T={annotationMode:k?je.ENABLE_FORMS:je.ENABLE,canvas:C,canvasContext:C.getContext("2d",{alpha:!1}),pageColors:y,viewport:S};i&&(T.background=i);const A=u.render(T),L=A;return A.promise.then(()=>{C.style.visibility="",h()}).catch(E),()=>ee(L)},[i,u,y,k,S,N]);const z=a.useCallback(()=>{const{current:D}=j;D&&(D.width=0,D.height=0)},[]);return a.useEffect(()=>z,[z]),s.jsx("canvas",{className:`${o}__canvas`,dir:"ltr",ref:ze(b,j),style:{display:"block",userSelect:"none"},children:d?s.jsx(ln,{}):null})}function dn(e){return"str"in e}const fn=new Set(["base","embed","iframe","link","meta","object","script","style","template"]),gn=new Set(["action","formaction","href","poster","src","xlink:href"]);function pn(e){let t="";for(const r of e){const o=r.charCodeAt(0);o<=32||o===127||(t+=r.toLowerCase())}return t.startsWith("data:")||t.startsWith("javascript:")||t.startsWith("vbscript:")}function hn(e){return e.nodeType===Node.ELEMENT_NODE}function qe(e){return hn(e)&&e instanceof HTMLElement}function mn(e){return qe(e)&&fn.has(e.tagName.toLowerCase())}function xn(e){const t=document.createElement(e.tagName.toLowerCase());return Array.from(e.attributes).forEach(r=>{const o=r.name.toLowerCase();o.startsWith("on")||o==="srcdoc"||gn.has(o)&&pn(r.value)||t.setAttribute(r.name,r.value)}),Array.from(e.childNodes).forEach(r=>{t.append(Xe(r))}),t}function Xe(e){var t;return qe(e)&&!mn(e)?xn(e):document.createTextNode((t=e.textContent)!==null&&t!==void 0?t:"")}function yn(e,t){const r=document.createElement("template");r.innerHTML=t;const o=document.createDocumentFragment();Array.from(r.content.childNodes).forEach(i=>{o.append(Xe(i))}),e.replaceChildren(o)}function En(){const e=me();p(e);const{customTextRenderer:t,onGetTextError:r,onGetTextSuccess:o,onRenderTextLayerError:i,onRenderTextLayerSuccess:l,page:c,pageIndex:x,pageNumber:u,rotate:k,scale:d}=e;p(c);const[y,f]=ce(),{value:g,error:b}=y,j=a.useRef(null);F(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"),10)===1,"TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer");function h(){g&&o&&o(g)}function E(){b&&(F(!1,b.toString()),r&&r(b))}a.useEffect(function(){f({type:"RESET"})},[c,f]),a.useEffect(function(){if(!c)return;const A=de(c.getTextContent()),L=A;return A.promise.then(m=>{f({type:"RESOLVE",value:m})}).catch(m=>{f({type:"REJECT",error:m})}),()=>ee(L)},[c,f]),a.useEffect(()=>{if(g!==void 0){if(g===!1){E();return}h()}},[g]);const S=a.useCallback(()=>{l&&l()},[l]),N=a.useCallback(T=>{Ge(T)||(F(!1,T.toString()),i&&i(T))},[i]);function z(){const T=j.current;T&&T.classList.add("selecting")}function D(){const T=j.current;T&&T.classList.remove("selecting")}const C=a.useMemo(()=>c.getViewport({scale:d,rotation:k}),[c,k,d]);return a.useLayoutEffect(function(){if(!c||!g)return;const{current:A}=j;if(!A)return;A.innerHTML="";const L=c.streamTextContent({includeMarkedContent:!0}),m={container:A,textContentSource:L,viewport:C},M=new ut(m),W=M;return M.render().then(()=>{const V=document.createElement("div");V.className="endOfContent",A.append(V);const $=A.querySelectorAll('[role="presentation"]');if(t){let Y=0;g.items.forEach((B,G)=>{if(!dn(B))return;const U=$[Y];if(!U)return;const H=t({pageIndex:x,pageNumber:u,itemIndex:G,...B});yn(U,H),Y+=B.str&&B.hasEOL?2:1})}S()}).catch(N),()=>ee(W)},[t,N,S,c,x,u,g,C]),s.jsx("div",{className:pe("react-pdf__Page__textContent","textLayer"),onMouseUp:D,onMouseDown:z,ref:j})}const _e=1;function vn(e){const r={...Ie(),...e},{_className:o="react-pdf__Page",_enableRegisterUnregisterPage:i=!0,canvasBackground:l,canvasRef:c,children:x,className:u,customRenderer:k,customTextRenderer:d,devicePixelRatio:y,error:f="Failed to load the page.",filterAnnotations:g,height:b,inputRef:j,loading:h="Loading page…",noData:E="No page specified.",onGetAnnotationsError:S,onGetAnnotationsSuccess:N,onGetStructTreeError:z,onGetStructTreeSuccess:D,onGetTextError:C,onGetTextSuccess:T,onLoadError:A,onLoadSuccess:L,onRenderAnnotationLayerError:m,onRenderAnnotationLayerSuccess:M,onRenderError:W,onRenderSuccess:V,onRenderTextLayerError:$,onRenderTextLayerSuccess:Y,pageColors:B,pageIndex:G,pageNumber:U,pdf:H,registerPage:le,renderAnnotationLayer:ye=!0,renderForms:fe=!1,renderMode:Ee="canvas",renderTextLayer:te=!0,rotate:ue,scale:ne=_e,unregisterPage:re,width:X,...oe}=r,[ve,Q]=ce(),{value:P,error:R}=ve,_=a.useRef(null);p(H);const v=Z(U)?U-1:G??null,O=U??(Z(G)?G+1:null),I=ue??(P?P.rotate:null),J=a.useMemo(()=>{if(!P)return null;let K=1;const ie=ne??_e;if(X||b){const q=P.getViewport({scale:1,rotation:I});X?K=X/q.width:b&&(K=b/q.height)}return ie*K},[b,P,I,ne,X]);a.useEffect(function(){return()=>{Z(v)&&i&&re&&re(v)}},[i,H,v,re]);function Qe(){if(L){if(!P||!J)return;L(Te(P,J))}if(i&&le){if(!Z(v)||!_.current)return;le(v,_.current)}}function Ze(){R&&(F(!1,R.toString()),A&&A(R))}a.useEffect(function(){Q({type:"RESET"})},[Q,H,v]),a.useEffect(function(){if(!H||!O)return;const ie=de(H.getPage(O)),q=ie;return ie.promise.then(be=>{Q({type:"RESOLVE",value:be})}).catch(be=>{Q({type:"REJECT",error:be})}),()=>ee(q)},[Q,H,O]),a.useEffect(()=>{if(P!==void 0){if(P===!1){Ze();return}Qe()}},[P,J]);const we=a.useMemo(()=>Z(v)&&O&&Z(I)&&Z(J)?{_className:o,canvasBackground:l,customTextRenderer:d,devicePixelRatio:y,filterAnnotations:g,onGetAnnotationsError:S,onGetAnnotationsSuccess:N,onGetStructTreeError:z,onGetStructTreeSuccess:D,onGetTextError:C,onGetTextSuccess:T,onRenderAnnotationLayerError:m,onRenderAnnotationLayerSuccess:M,onRenderError:W,onRenderSuccess:V,onRenderTextLayerError:$,onRenderTextLayerSuccess:Y,page:P,pageColors:B,pageIndex:v,pageNumber:O,renderForms:fe,renderTextLayer:te,rotate:I,scale:J}:null,[o,l,d,y,g,S,N,z,D,C,T,m,M,W,V,$,Y,P,B,v,O,fe,te,I,J]),et=a.useMemo(()=>Me(oe,()=>P&&(J?Te(P,J):void 0)),[oe,P,J]),ge=`${v}@${J}/${I}`;function tt(){switch(Ee){case"custom":return p(k),s.jsx(k,{},`${ge}_custom`);case"none":return null;case"canvas":default:return s.jsx(un,{canvasRef:c},`${ge}_canvas`)}}function nt(){return te?s.jsx(En,{},`${ge}_text`):null}function rt(){return ye?s.jsx(rn,{},`${ge}_annotations`):null}function ot(){function K(q){return!!q?.page}if(!K(we))throw new Error("page is undefined");const ie=typeof x=="function"?x(we):x;return s.jsxs(We.Provider,{value:we,children:[tt(),nt(),rt(),ie]})}function it(){return O?H===null||P===void 0||P===null?s.jsx(se,{type:"loading",children:typeof h=="function"?h():h}):H===!1||P===!1?s.jsx(se,{type:"error",children:typeof f=="function"?f():f}):ot():s.jsx(se,{type:"no-data",children:typeof E=="function"?E():E})}return s.jsx("div",{className:pe(o,u),"data-page-number":O,ref:ze(j,_),style:{"--scale-round-x":"1px","--scale-round-y":"1px","--scale-factor":"1","--user-unit":`${J}`,"--total-scale-factor":"calc(var(--scale-factor) * var(--user-unit))",backgroundColor:l||"white",position:"relative",minWidth:"min-content",minHeight:"min-content"},...et,children:it()})}Qt();dt.workerSrc="pdf.worker.mjs";const wn=w.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${n.spacing["3xl"]} ${n.spacing.md};

  ${n.media.tablet} {
    padding: ${n.spacing["3xl"]} ${n.spacing.lg};
  }
`,bn=w.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: ${n.spacing.lg};
  max-width: ${n.maxWidth.content};
  width: 100%;
  margin-top: ${n.spacing["2xl"]};

  ${n.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${n.spacing.xl};
  }
`,Sn=w.article`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${n.spacing.sm};
  padding: ${n.spacing.lg} ${n.spacing.md};
  border-radius: ${n.borderRadius.md};
  background-color: ${n.colors.semantic.cardBackground};
  border: 1px solid ${n.colors.semantic.cardBorder};
  transition:
    border-color ${n.transition.normal},
    background-color ${n.transition.normal},
    transform ${n.transition.normal},
    box-shadow ${n.transition.boxShadow};

  &:hover {
    border-color: ${n.colors.semantic.cardBorderHover};
    transform: translateY(-4px);
    box-shadow: ${n.boxShadow.cardHover};
  }

  &:focus-within {
    outline: 3px solid ${n.colors.accent.main};
    outline-offset: 3px;
  }

  ${n.media.tablet} {
    padding: ${n.spacing.lg};
  }
`,Tn=w.h3`
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${n.spacing.xs};
  font-size: 1rem;
  font-weight: ${n.font.headings.h3.fontWeight};
  line-height: ${n.font.headings.h3.lineHeight};
  letter-spacing: ${n.font.headings.h3.letterSpacing};
  color: ${n.colors.accent.highContrast};

  svg {
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  ${n.media.tablet} {
    font-size: ${n.font.headings.h3.fontSize};

    svg {
      font-size: 1.25rem;
    }
  }
`,$n=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${n.spacing.xxs};

  ${n.media.tablet} {
    gap: ${n.spacing.xs};
  }
`,Pn=w.span`
  font-size: 0.75rem;
  font-weight: ${n.font.tagText.fontWeight};
  line-height: ${n.font.tagText.lineHeight};
  letter-spacing: ${n.font.tagText.letterSpacing};
  color: ${n.colors.neutral.grey};
  padding: ${n.spacing.xxs} ${n.spacing.xs};
  border: 1px solid ${n.colors.semantic.tagBorder};
  border-radius: ${n.borderRadius.sm};
  background-color: ${n.colors.semantic.tagBackground};
  transition:
    background-color ${n.transition.fast},
    border-color ${n.transition.fast},
    transform ${n.transition.fast},
    box-shadow ${n.transition.fast};

  &:hover {
    background-color: ${n.colors.semantic.tagBackgroundHover};
    border-color: ${n.colors.semantic.tagBorderHover};
    transform: translateY(-1px);
    box-shadow: ${n.boxShadow.tagHover};
  }

  ${n.media.tablet} {
    font-size: ${n.font.tagText.fontSize};
    padding: ${n.spacing.xxs} ${n.spacing.xs};
  }
`,Rn=w.hr`
  width: 100%;
  max-width: ${n.maxWidth.content};
  height: 1px;
  background-color: ${n.colors.semantic.divider};
  border: none;
  margin: ${n.spacing.xl} auto 0;

  ${n.media.tablet} {
    margin: ${n.spacing["2xl"]} auto 0;
  }
`,Cn=[{title:"Frontend",technologies:["React","TypeScript","JavaScript","React Native"]},{title:"Architecture & Testing",technologies:["Microfrontends","Hexagonal Architecture","Jest","Vitest","Testing Library","Storybook"]},{title:"Cloud & Tooling",technologies:["Firebase","Google Cloud","GitHub","CI/CD","Jira","Figma"]},{title:"AI & Development Workflow",technologies:["GitHub Copilot","Claude","AI development tools"]}],Ln=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${n.spacing.xl} 0 0;
  width: 100%;
  max-width: ${n.maxWidth.content};
  margin: 0 auto;

  ${n.media.tablet} {
    padding: ${n.spacing["2xl"]} 0 0;
  }
`;w.hr`
  width: 100%;
  max-width: ${n.maxWidth.content};
  height: 1px;
  background-color: ${n.colors.semantic.divider};
  border: none;
  margin: 0 auto ${n.spacing.xl};

  ${n.media.tablet} {
    margin-bottom: ${n.spacing["2xl"]};
  }
`;const kn=w.span`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: ${n.font.letterSpacing.wider};
  text-transform: uppercase;
  color: ${n.colors.neutral.grey};
  margin-bottom: ${n.spacing.md};
`,An=w.p`
  margin: 0;
  font-size: 0.9375rem;
  font-weight: ${n.font.body.fontWeight};
  line-height: ${n.font.lineHeight.relaxed};
  color: ${n.colors.neutral.lightGrey};
  text-align: center;
  max-width: 100%;

  ${n.media.tablet} {
    font-size: ${n.font.body.fontSize};
    max-width: ${n.maxWidth.about};
  }
`,Dn=w.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${n.spacing.xs};
  margin-top: ${n.spacing.lg};
  padding: ${n.spacing.xs} ${n.spacing.lg};
  font-size: ${n.font.small.fontSize};
  font-weight: 500;
  font-family: ${n.font.primary.fontFamily};
  color: ${n.colors.accent.main};
  background-color: transparent;
  border: 1px solid ${n.colors.semantic.accentBorder};
  border-radius: ${n.borderRadius.sm};
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color ${n.transition.normal},
    border-color ${n.transition.normal},
    transform ${n.transition.fast};

  svg {
    font-size: 1rem;
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${n.colors.semantic.accentBackgroundHover};
    border-color: ${n.colors.accent.main};
    transform: translateY(-1px);
  }

  ${$e}

  ${n.media.tablet} {
    width: auto;
    max-width: none;
  }

  @media (max-width: ${n.responsive.smallMobileDevices}) {
    width: 100%;
    max-width: 280px;
  }
`;function jn(){const t="2024",r=String(new Date().getFullYear());return 3+(Number(r.slice(-1))-Number(t.slice(-1)))}const _n=w.div`
  position: fixed;
  inset: 0;
  background-color: ${n.boxShadow.modalOverlay};
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${n.spacing.md};
  opacity: ${({$isOpen:e})=>e?1:0};
  visibility: ${({$isOpen:e})=>e?"visible":"hidden"};
  transition:
    opacity ${n.transition.normal},
    visibility ${n.transition.normal};
`,On=w.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  max-height: calc(100vh - ${n.spacing["2xl"]});
  background-color: ${n.colors.surface};
  border: 1px solid ${n.colors.semantic.cardBorder};
  border-radius: ${n.borderRadius.md};
  overflow: hidden;

  ${n.media.tablet} {
    max-height: 85vh;
  }
`,Fn=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${n.spacing.md} ${n.spacing.lg};
  border-bottom: 1px solid ${n.colors.semantic.divider};
  flex-shrink: 0;
`,Nn=w.h3`
  margin: 0;
  font-size: ${n.font.headings.h3.fontSize};
  font-weight: ${n.font.headings.h3.fontWeight};
  color: ${n.colors.neutral.lightGrey};
`,Mn=w.div`
  display: flex;
  align-items: center;
  gap: ${n.spacing.xs};
`,Vn=w.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background-color: transparent;
  border: 1px solid ${n.colors.semantic.cardBorder};
  border-radius: ${n.borderRadius.sm};
  color: ${n.colors.neutral.grey};
  cursor: pointer;
  transition:
    background-color ${n.transition.fast},
    border-color ${n.transition.fast},
    color ${n.transition.fast};

  svg {
    font-size: 1.125rem;
  }

  &:hover {
    background-color: ${n.colors.semantic.cardBackground};
    border-color: ${n.colors.semantic.cardBorderHover};
    color: ${n.colors.neutral.lightGrey};
  }

  ${$e}
`,Bn=w.div`
  flex: 1;
  overflow: auto;
  padding: ${n.spacing.md};
  background-color: ${n.colors.neutral.darkGrey};
  display: flex;
  flex-direction: column;
  align-items: center;

  .react-pdf__Page {
    margin: 0 auto;
  }

  .react-pdf__Page__canvas {
    max-width: 100% !important;
    height: auto !important;
  }
`,Oe=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: ${n.colors.neutral.grey};
  font-size: ${n.font.small.fontSize};
`,Hn=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: ${n.spacing.md};
  color: ${n.colors.neutral.grey};
  font-size: ${n.font.small.fontSize};
`,Gn=w.iframe`
  width: 100%;
  height: 100%;
  min-height: 600px;
  border: none;
  border-radius: ${n.borderRadius.sm};
`,Fe=w.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${n.spacing.xs};
  padding: ${n.spacing.xs} ${n.spacing.md};
  font-size: ${n.font.small.fontSize};
  font-weight: 500;
  font-family: ${n.font.primary.fontFamily};
  color: ${n.colors.accent.main};
  background-color: transparent;
  border: 1px solid ${n.colors.semantic.accentBorder};
  border-radius: ${n.borderRadius.sm};
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color ${n.transition.fast},
    border-color ${n.transition.fast};

  svg {
    font-size: 1rem;
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${n.colors.semantic.accentBackgroundHover};
    border-color: ${n.colors.accent.main};
  }

  ${$e}
`,In=({isOpen:e,onClose:t,pdfUrl:r,fileName:o="CV"})=>{const[i,l]=a.useState(null),[c,x]=a.useState(!0),[u,k]=a.useState(null),[d,y]=a.useState(!1),f=a.useCallback(h=>{h.key==="Escape"&&t()},[t]);a.useEffect(()=>(e&&(document.addEventListener("keydown",f),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",f),document.body.style.overflow=""}),[e,f]),a.useEffect(()=>{e||(l(null),x(!0),k(null),y(!1))},[e]);const g=({numPages:h})=>{l(h),x(!1)},b=h=>{console.error("PDF load error:",h),y(!0),x(!1)},j=h=>{h.target===h.currentTarget&&t()};return vt.createPortal(s.jsx(_n,{$isOpen:e,onClick:j,role:"dialog","aria-modal":"true","aria-label":"PDF Viewer",children:s.jsxs(On,{children:[s.jsxs(Fn,{children:[s.jsx(Nn,{children:o}),s.jsxs(Mn,{children:[s.jsx(Fe,{href:r,download:o,"aria-label":"Download PDF",children:s.jsx(Pe,{"aria-hidden":"true"})}),s.jsx(Vn,{onClick:t,"aria-label":"Close viewer",children:s.jsx(ft,{"aria-hidden":"true"})})]})]}),s.jsx(Bn,{children:d?s.jsx(Gn,{src:r,title:`PDF viewer - ${o}`}):u?s.jsxs(Hn,{children:[s.jsx("p",{children:u}),s.jsxs(Fe,{href:r,download:o,children:[s.jsx(Pe,{"aria-hidden":"true"}),"Download PDF"]})]}):e&&s.jsxs(nn,{file:r,onLoadSuccess:g,onLoadError:b,loading:s.jsx(Oe,{children:"Loading PDF..."}),children:[c&&s.jsx(Oe,{children:"Loading PDF..."}),i&&Array.from({length:i},(h,E)=>s.jsx(vn,{pageNumber:E+1,renderTextLayer:!1,renderAnnotationLayer:!1},`page_${E+1}`))]})})]})}),document.body)},zn="/assets/CV-Raul-DosJJbkd.pdf",Wn=()=>{const[e,t]=a.useState(!1);return s.jsxs(Ln,{"data-testid":"about-block",children:[s.jsx(kn,{children:"About me"}),s.jsxs(An,{children:["Frontend Engineer with ",jn(),"+ years of experience building scalable web applications and reusable frontend systems. I've worked across fintech, e-mobility, and web/mobile products, always focusing on maintainable architecture and code quality."]}),s.jsxs(Dn,{as:"button",onClick:()=>t(!0),children:[s.jsx(gt,{"aria-hidden":"true"}),"View CV"]}),s.jsx(In,{isOpen:e,onClose:()=>t(!1),pdfUrl:zn,fileName:"CV-Raul"})]})},Un={Frontend:s.jsx(ht,{"aria-hidden":"true"}),"Architecture & Testing":s.jsx(mt,{"aria-hidden":"true"}),"Cloud & Tooling":s.jsx(xt,{"aria-hidden":"true"}),"AI & Development Workflow":s.jsx(yt,{"aria-hidden":"true"})},qn=()=>s.jsxs(wn,{"data-testid":"expertise",id:"expertise","aria-labelledby":"expertise-title",children:[s.jsx(pt,{as:"h2",id:"experience-title",children:"Technical Expertise"}),s.jsx(bn,{children:Cn.map((e,t)=>s.jsx(wt,{delay:t*80,children:s.jsxs(Sn,{children:[s.jsxs(Tn,{children:[Un[e.title],e.title]}),s.jsx($n,{"aria-label":`${e.title} technologies`,children:e.technologies.map(r=>s.jsx(Pn,{children:r},r))})]})},e.title))}),s.jsx(Rn,{"aria-hidden":"true"}),s.jsx(Wn,{})]});export{qn as Expertise};
