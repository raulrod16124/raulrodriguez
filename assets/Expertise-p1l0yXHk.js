import{j as s,g as at,p as st,A as ct,c as lt,T as ut,G as dt,d as b,t as n,f as $e,e as Pe,h as ft,i as gt,V as pt,a as ht,k as mt,n as xt,o as yt}from"./index--O_C-0u9.js";import{g as Et,r as a,a as vt}from"./vendor-CdEpWVL-.js";import{S as wt}from"./ScrollReveal-qBrfWpMn.js";function Me(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=Me(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function pe(){for(var e,t,r=0,o="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=Me(e))&&(o&&(o+=" "),o+=t);return o}var Re=Object.prototype.hasOwnProperty;function Ce(e,t,r){for(r of e.keys())if(ae(r,t))return r}function ae(e,t){var r,o,i;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((o=e.length)===t.length)for(;o--&&ae(e[o],t[o]););return o===-1}if(r===Set){if(e.size!==t.size)return!1;for(o of e)if(i=o,i&&typeof i=="object"&&(i=Ce(t,i),!i)||!t.has(i))return!1;return!0}if(r===Map){if(e.size!==t.size)return!1;for(o of e)if(i=o[0],i&&typeof i=="object"&&(i=Ce(t,i),!i)||!ae(o[1],t.get(i)))return!1;return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((o=e.byteLength)===t.byteLength)for(;o--&&e.getInt8(o)===t.getInt8(o););return o===-1}if(ArrayBuffer.isView(e)){if((o=e.byteLength)===t.byteLength)for(;o--&&e[o]===t[o];);return o===-1}if(!r||typeof e=="object"){o=0;for(r in e)if(Re.call(e,r)&&++o&&!Re.call(t,r)||!(r in t)||!ae(e[r],t[r]))return!1;return Object.keys(t).length===o}}return e!==e&&t!==t}function de(e){let t=!1;return{promise:new Promise((o,i)=>{e.then(l=>!t&&o(l)).catch(l=>!t&&i(l))}),cancel(){t=!0}}}const bt=["onCopy","onCut","onPaste"],St=["onCompositionEnd","onCompositionStart","onCompositionUpdate"],Tt=["onFocus","onBlur"],$t=["onInput","onInvalid","onReset","onSubmit"],Pt=["onLoad","onError"],Rt=["onKeyDown","onKeyPress","onKeyUp"],Ct=["onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting"],Lt=["onClick","onContextMenu","onDoubleClick","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp"],kt=["onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop"],At=["onSelect"],Dt=["onTouchCancel","onTouchEnd","onTouchMove","onTouchStart"],jt=["onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onGotPointerCapture","onLostPointerCapture","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut"],_t=["onScroll"],Nt=["onWheel"],Ot=["onAnimationStart","onAnimationEnd","onAnimationIteration"],Mt=["onTransitionEnd"],Ft=["onToggle"],Vt=["onChange"],Bt=[...bt,...St,...Tt,...$t,...Pt,...Rt,...Ct,...Lt,...kt,...At,...Dt,...jt,..._t,...Nt,...Ot,...Mt,...Vt,...Ft];function Fe(e,t){const r={};for(const o of Bt){const i=e[o];i&&(t?r[o]=l=>i(l,t(o)):r[o]=i)}return r}var Ht="Invariant failed";function p(e,t){if(!e)throw new Error(Ht)}var Gt=function(){},It=Gt;const O=Et(It),Ve=a.createContext(null),zt="noopener noreferrer nofollow";class Wt{constructor(){this.externalLinkEnabled=!0,this.externalLinkRel=void 0,this.externalLinkTarget=void 0,this.isInPresentationMode=!1,this.pdfDocument=void 0,this.pdfViewer=void 0}setDocument(t){this.pdfDocument=t}setViewer(t){this.pdfViewer=t}setExternalLinkRel(t){this.externalLinkRel=t}setExternalLinkTarget(t){this.externalLinkTarget=t}setHash(){}setHistory(){}get pagesCount(){return this.pdfDocument?this.pdfDocument.numPages:0}get page(){return p(this.pdfViewer),this.pdfViewer.currentPageNumber||0}set page(t){p(this.pdfViewer),this.pdfViewer.currentPageNumber=t}get rotation(){return 0}set rotation(t){}addLinkAttributes(t,r,o){t.href=r,t.rel=this.externalLinkRel||zt,t.target=o?"_blank":this.externalLinkTarget||""}goToDestination(t){return new Promise(r=>{p(this.pdfDocument),p(t),typeof t=="string"?this.pdfDocument.getDestination(t).then(r):Array.isArray(t)?r(t):t.then(r)}).then(r=>{p(Array.isArray(r));const o=r[0];new Promise(i=>{p(this.pdfDocument),o instanceof Object?this.pdfDocument.getPageIndex(o).then(l=>{i(l)}).catch(()=>{p(!1)}):typeof o=="number"?i(o):p(!1)}).then(i=>{const l=i+1;p(this.pdfViewer),p(l>=1&&l<=this.pagesCount),this.pdfViewer.scrollPageIntoView({dest:r,pageIndex:i,pageNumber:l})})})}goToPage(t){const r=t-1;p(this.pdfViewer),p(t>=1&&t<=this.pagesCount),this.pdfViewer.scrollPageIntoView({pageIndex:r,pageNumber:t})}goToXY(){}cachePageRef(){}getDestinationHash(){return"#"}getAnchorUrl(){return"#"}executeNamedAction(){}executeSetOCGState(){}isPageVisible(){return!0}isPageCached(){return!0}navigateTo(t){this.goToDestination(t)}}function se({children:e,type:t}){return s.jsx("div",{className:`react-pdf__message react-pdf__message--${t}`,children:e})}const Le={NEED_PASSWORD:1,INCORRECT_PASSWORD:2};function Ut(e,t){switch(t.type){case"RESOLVE":return{value:t.value,error:void 0};case"REJECT":return{value:!1,error:t.error};case"RESET":return{value:void 0,error:void 0};default:return e}}function ce(){return a.useReducer(Ut,{value:void 0,error:void 0})}const he=typeof window<"u",Be=he&&window.location.protocol==="file:";function Jt(e){return typeof e<"u"}function Z(e){return Jt(e)&&e!==null}function Yt(e){return typeof e=="string"}function Kt(e){return e instanceof ArrayBuffer}function qt(e){return p(he),e instanceof Blob}function Se(e){return Yt(e)&&/^data:/.test(e)}function ke(e){p(Se(e));const[t="",r=""]=e.split(",");return t.split(";").indexOf("base64")!==-1?atob(r):unescape(r)}function Xt(){return he&&window.devicePixelRatio||1}const He="On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";function Ae(){O(!Be,`Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${He}`)}function Qt(){O(!Be,`Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ${He}`)}function ee(e){e?.cancel&&e.cancel()}function Te(e,t){return Object.defineProperty(e,"width",{get(){return this.getViewport({scale:t}).width},configurable:!0}),Object.defineProperty(e,"height",{get(){return this.getViewport({scale:t}).height},configurable:!0}),Object.defineProperty(e,"originalWidth",{get(){return this.getViewport({scale:1}).width},configurable:!0}),Object.defineProperty(e,"originalHeight",{get(){return this.getViewport({scale:1}).height},configurable:!0}),e}function Ge(e){return e.name==="AbortException"||e.name==="RenderingCancelledException"}function Zt(e){return new Promise((t,r)=>{const o=new FileReader;o.onload=()=>{if(!o.result)return r(new Error("Error while reading a file."));t(o.result)},o.onerror=i=>{if(!i.target)return r(new Error("Error while reading a file."));const{error:l}=i.target;if(!l)return r(new Error("Error while reading a file."));switch(l.code){case l.NOT_FOUND_ERR:return r(new Error("Error while reading a file: File not found."));case l.SECURITY_ERR:return r(new Error("Error while reading a file: Security error."));case l.ABORT_ERR:return r(new Error("Error while reading a file: Aborted."));default:return r(new Error("Error while reading a file."))}},o.readAsArrayBuffer(e)})}const{PDFDataRangeTransport:en}=st,tn=(e,t)=>{switch(t){case Le.NEED_PASSWORD:{const r=prompt("Enter the password to open this PDF file.");e(r);break}case Le.INCORRECT_PASSWORD:{const r=prompt("Invalid password. Please try again.");e(r);break}}};function De(e){return typeof e=="object"&&e!==null&&("data"in e||"range"in e||"url"in e)}const nn=a.forwardRef(function({children:t,className:r,error:o="Failed to load PDF file.",externalLinkRel:i,externalLinkTarget:l,file:c,inputRef:x,imageResourcesPath:u,loading:P="Loading PDF…",noData:f="No PDF file specified.",onItemClick:E,onLoadError:h,onLoadProgress:g,onLoadSuccess:d,onPassword:A=tn,onSourceError:_,onSourceSuccess:R,options:v,renderMode:M,rotate:z,scale:D,...C},w){const[k,L]=ce(),{value:m,error:F}=k,[W,V]=ce(),{value:S,error:Y}=W,B=a.useRef(new Wt),G=a.useRef([]),U=a.useRef(void 0),H=a.useRef(void 0);c&&c!==U.current&&De(c)&&(O(!ae(c,U.current),`File prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.`),U.current=c),v&&v!==H.current&&(O(!ae(v,H.current),`Options prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.`),H.current=v);const le=a.useRef({scrollPageIntoView:$=>{const{dest:j,pageNumber:y,pageIndex:N=y-1}=$;if(E){E({dest:j,pageIndex:N,pageNumber:y});return}const I=G.current[N];if(I){I.scrollIntoView();return}O(!1,`An internal link leading to page ${y} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`)}});a.useImperativeHandle(w,()=>({linkService:B,pages:G,viewer:le}),[]);function ye(){R&&R()}function fe(){F&&(O(!1,F.toString()),_&&_(F))}function Ee(){L({type:"RESET"})}a.useEffect(Ee,[c,L]);const te=a.useCallback(async()=>{if(!c)return null;if(typeof c=="string")return Se(c)?{data:ke(c)}:(Ae(),{url:c});if(c instanceof en)return{range:c};if(Kt(c))return{data:c};if(he&&qt(c))return{data:await Zt(c)};if(p(typeof c=="object"),p(De(c)),"url"in c&&typeof c.url=="string"){if(Se(c.url)){const{url:$,...j}=c;return{data:ke($),...j}}Ae()}return c},[c]);a.useEffect(()=>{const $=de(te());return $.promise.then(j=>{L({type:"RESOLVE",value:j})}).catch(j=>{L({type:"REJECT",error:j})}),()=>{ee($)}},[te,L]),a.useEffect(()=>{if(!(typeof m>"u")){if(m===!1){fe();return}ye()}},[m]);function ue(){S&&(d&&d(S),G.current=new Array(S.numPages),B.current.setDocument(S))}function ne(){Y&&(O(!1,Y.toString()),h&&h(Y))}a.useEffect(function(){V({type:"RESET"})},[V,m]),a.useEffect(function(){if(!m)return;const j=v?{...m,...v}:m,y=at(j);g&&(y.onProgress=g),A&&(y.onPassword=A);const N=y;return N.promise.then(I=>{N.destroyed||V({type:"RESOLVE",value:I})}).catch(I=>{N.destroyed||V({type:"REJECT",error:I})}),()=>{N.destroy(),V({type:"RESET"})}},[v,V,m]),a.useEffect(()=>{if(!(typeof S>"u")){if(S===!1){ne();return}ue()}},[S]),a.useEffect(function(){B.current.setViewer(le.current),B.current.setExternalLinkRel(i),B.current.setExternalLinkTarget(l)},[i,l]);const re=a.useCallback(($,j)=>{G.current[$]=j},[]),X=a.useCallback($=>{delete G.current[$]},[]),oe=a.useMemo(()=>({imageResourcesPath:u,linkService:B.current,onItemClick:E,pdf:S,registerPage:re,renderMode:M,rotate:z,scale:D,unregisterPage:X}),[u,E,S,re,M,z,D,X]),ve=a.useMemo(()=>Fe(C,()=>S),[C,S]);function Q(){function $(y){return!!y?.pdf}if(!$(oe))throw new Error("pdf is undefined");const j=typeof t=="function"?t(oe):t;return s.jsx(Ve.Provider,{value:oe,children:j})}function T(){return c?S==null?s.jsx(se,{type:"loading",children:typeof P=="function"?P():P}):S===!1?s.jsx(se,{type:"error",children:typeof o=="function"?o():o}):Q():s.jsx(se,{type:"no-data",children:typeof f=="function"?f():f})}return s.jsx("div",{className:pe("react-pdf__Document",r),ref:x,...ve,children:T()})});function Ie(){return a.useContext(Ve)}function ze(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=e.filter(Boolean);if(r.length<=1){var o=r[0];return o||null}return function(l){for(var c=0,x=r;c<x.length;c++){var u=x[c];typeof u=="function"?u(l):u&&(u.current=l)}}}const We=a.createContext(null);function me(){return a.useContext(We)}function rn(){const e=Ie(),t=me();p(t);const r={...e,...t},{filterAnnotations:o,imageResourcesPath:i,linkService:l,onGetAnnotationsError:c,onGetAnnotationsSuccess:x,onRenderAnnotationLayerError:u,onRenderAnnotationLayerSuccess:P,page:f,pdf:E,renderForms:h,rotate:g,scale:d=1}=r;p(E),p(f),p(l);const[A,_]=ce(),{value:R,error:v}=A,M=a.useRef(null);O(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"),10)===1,"AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations");function z(){R&&x&&x(R)}function D(){v&&(O(!1,v.toString()),c&&c(v))}a.useEffect(function(){_({type:"RESET"})},[_,f]),a.useEffect(function(){if(!f)return;const m=de(f.getAnnotations()),F=m;return m.promise.then(W=>{_({type:"RESOLVE",value:W})}).catch(W=>{_({type:"REJECT",error:W})}),()=>{ee(F)}},[_,f]),a.useEffect(()=>{if(R!==void 0){if(R===!1){D();return}z()}},[R]);function C(){P&&P()}function w(L){O(!1,`${L}`),u&&u(L)}const k=a.useMemo(()=>f.getViewport({scale:d,rotation:g}),[f,g,d]);return a.useEffect(function(){if(!E||!f||!l||!R)return;const{current:m}=M;if(!m)return;const F=k.clone({dontFlip:!0}),W={accessibilityManager:null,annotationCanvasMap:null,annotationEditorUIManager:null,annotationStorage:E.annotationStorage,commentManager:null,div:m,l10n:null,linkService:l,page:f,structTreeLayer:null,viewport:F},V={annotations:o?o({annotations:R}):R,annotationStorage:E.annotationStorage,div:m,imageResourcesPath:i,linkService:l,page:f,renderForms:h,viewport:F};m.innerHTML="";try{new ct(W).render(V),C()}catch(S){w(S)}return()=>{}},[R,o,i,l,f,E,h,k]),s.jsx("div",{className:pe("react-pdf__Page__annotations","annotationLayer"),ref:M})}const Ue={Document:null,DocumentFragment:null,Part:"group",Sect:"group",Div:"group",Aside:"note",NonStruct:"none",P:null,H:"heading",Title:null,FENote:"note",Sub:"group",Lbl:null,Span:null,Em:null,Strong:null,Link:"link",Annot:"note",Form:"form",Ruby:null,RB:null,RT:null,RP:null,Warichu:null,WT:null,WP:null,L:"list",LI:"listitem",LBody:null,Table:"table",TR:"row",TH:"columnheader",TD:"cell",THead:"columnheader",TBody:null,TFoot:null,Caption:null,Figure:"figure",Formula:null,Artifact:null},on=/^H(\d+)$/;function an(e){return e in Ue}function xe(e){return"children"in e}function Je(e){return xe(e)?e.children.length===1&&0 in e.children&&"id"in e.children[0]:!1}function sn(e){const t={};if(xe(e)){const{role:r}=e,o=r.match(on);if(o)t.role="heading",t["aria-level"]=Number(o[1]);else if(an(r)){const i=Ue[r];i&&(t.role=i)}}return t}function Ye(e){const t={};if(xe(e)){if(e.alt!==void 0&&(t["aria-label"]=e.alt),e.lang!==void 0&&(t.lang=e.lang),Je(e)){const[r]=e.children;if(r){const o=Ye(r);return{...t,...o}}}}else"id"in e&&(t["aria-owns"]=e.id);return t}function cn(e){return e?{...sn(e),...Ye(e)}:null}function Ke({className:e,node:t}){const r=a.useMemo(()=>cn(t),[t]),o=a.useMemo(()=>!xe(t)||Je(t)?null:t.children.map((i,l)=>s.jsx(Ke,{node:i},l)),[t]);return s.jsx("span",{className:e,...r,children:o})}function ln(){const e=me();p(e);const{onGetStructTreeError:t,onGetStructTreeSuccess:r}=e,[o,i]=ce(),{value:l,error:c}=o,{customTextRenderer:x,page:u}=e;function P(){l&&r&&r(l)}function f(){c&&(O(!1,c.toString()),t&&t(c))}return a.useEffect(function(){i({type:"RESET"})},[i,u]),a.useEffect(function(){if(x||!u)return;const h=de(u.getStructTree()),g=h;return h.promise.then(d=>{i({type:"RESOLVE",value:d})}).catch(d=>{i({type:"REJECT",error:d})}),()=>ee(g)},[x,u,i]),a.useEffect(()=>{if(l!==void 0){if(l===!1){f();return}P()}},[l]),l?s.jsx(Ke,{className:"react-pdf__Page__structTree structTree",node:l}):null}const je=lt;function un(e){const t=me();p(t);const r={...t,...e},{_className:o,canvasBackground:i,devicePixelRatio:l=Xt(),onRenderError:c,onRenderSuccess:x,page:u,renderForms:P,renderTextLayer:f,pageColors:E,rotate:h,scale:g}=r,{canvasRef:d}=e;p(u);const A=a.useRef(null);function _(){u&&x&&x(Te(u,g))}function R(D){Ge(D)||(O(!1,D.toString()),c&&c(D))}const v=a.useMemo(()=>u.getViewport({scale:g*l,rotation:h}),[l,u,h,g]),M=a.useMemo(()=>u.getViewport({scale:g,rotation:h}),[u,h,g]);a.useEffect(function(){if(!u)return;u.cleanup();const{current:C}=A;if(!C)return;C.width=v.width,C.height=v.height,C.style.width=`${Math.floor(M.width)}px`,C.style.height=`${Math.floor(M.height)}px`,C.style.visibility="hidden";const w={annotationMode:P?je.ENABLE_FORMS:je.ENABLE,canvas:C,canvasContext:C.getContext("2d",{alpha:!1}),pageColors:E,viewport:v};i&&(w.background=i);const k=u.render(w),L=k;return k.promise.then(()=>{C.style.visibility="",_()}).catch(R),()=>ee(L)},[i,u,E,P,v,M]);const z=a.useCallback(()=>{const{current:D}=A;D&&(D.width=0,D.height=0)},[]);return a.useEffect(()=>z,[z]),s.jsx("canvas",{className:`${o}__canvas`,dir:"ltr",ref:ze(d,A),style:{display:"block",userSelect:"none"},children:f?s.jsx(ln,{}):null})}function dn(e){return"str"in e}const fn=new Set(["base","embed","iframe","link","meta","object","script","style","template"]),gn=new Set(["action","formaction","href","poster","src","xlink:href"]);function pn(e){let t="";for(const r of e){const o=r.charCodeAt(0);o<=32||o===127||(t+=r.toLowerCase())}return t.startsWith("data:")||t.startsWith("javascript:")||t.startsWith("vbscript:")}function hn(e){return e.nodeType===Node.ELEMENT_NODE}function qe(e){return hn(e)&&e instanceof HTMLElement}function mn(e){return qe(e)&&fn.has(e.tagName.toLowerCase())}function xn(e){const t=document.createElement(e.tagName.toLowerCase());return Array.from(e.attributes).forEach(r=>{const o=r.name.toLowerCase();o.startsWith("on")||o==="srcdoc"||gn.has(o)&&pn(r.value)||t.setAttribute(r.name,r.value)}),Array.from(e.childNodes).forEach(r=>{t.append(Xe(r))}),t}function Xe(e){var t;return qe(e)&&!mn(e)?xn(e):document.createTextNode((t=e.textContent)!==null&&t!==void 0?t:"")}function yn(e,t){const r=document.createElement("template");r.innerHTML=t;const o=document.createDocumentFragment();Array.from(r.content.childNodes).forEach(i=>{o.append(Xe(i))}),e.replaceChildren(o)}function En(){const e=me();p(e);const{customTextRenderer:t,onGetTextError:r,onGetTextSuccess:o,onRenderTextLayerError:i,onRenderTextLayerSuccess:l,page:c,pageIndex:x,pageNumber:u,rotate:P,scale:f}=e;p(c);const[E,h]=ce(),{value:g,error:d}=E,A=a.useRef(null);O(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"),10)===1,"TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer");function _(){g&&o&&o(g)}function R(){d&&(O(!1,d.toString()),r&&r(d))}a.useEffect(function(){h({type:"RESET"})},[c,h]),a.useEffect(function(){if(!c)return;const k=de(c.getTextContent()),L=k;return k.promise.then(m=>{h({type:"RESOLVE",value:m})}).catch(m=>{h({type:"REJECT",error:m})}),()=>ee(L)},[c,h]),a.useEffect(()=>{if(g!==void 0){if(g===!1){R();return}_()}},[g]);const v=a.useCallback(()=>{l&&l()},[l]),M=a.useCallback(w=>{Ge(w)||(O(!1,w.toString()),i&&i(w))},[i]);function z(){const w=A.current;w&&w.classList.add("selecting")}function D(){const w=A.current;w&&w.classList.remove("selecting")}const C=a.useMemo(()=>c.getViewport({scale:f,rotation:P}),[c,P,f]);return a.useLayoutEffect(function(){if(!c||!g)return;const{current:k}=A;if(!k)return;k.innerHTML="";const L=c.streamTextContent({includeMarkedContent:!0}),m={container:k,textContentSource:L,viewport:C},F=new ut(m),W=F;return F.render().then(()=>{const V=document.createElement("div");V.className="endOfContent",k.append(V);const S=k.querySelectorAll('[role="presentation"]');if(t){let Y=0;g.items.forEach((B,G)=>{if(!dn(B))return;const U=S[Y];if(!U)return;const H=t({pageIndex:x,pageNumber:u,itemIndex:G,...B});yn(U,H),Y+=B.str&&B.hasEOL?2:1})}v()}).catch(M),()=>ee(W)},[t,M,v,c,x,u,g,C]),s.jsx("div",{className:pe("react-pdf__Page__textContent","textLayer"),onMouseUp:D,onMouseDown:z,ref:A})}const _e=1;function vn(e){const r={...Ie(),...e},{_className:o="react-pdf__Page",_enableRegisterUnregisterPage:i=!0,canvasBackground:l,canvasRef:c,children:x,className:u,customRenderer:P,customTextRenderer:f,devicePixelRatio:E,error:h="Failed to load the page.",filterAnnotations:g,height:d,inputRef:A,loading:_="Loading page…",noData:R="No page specified.",onGetAnnotationsError:v,onGetAnnotationsSuccess:M,onGetStructTreeError:z,onGetStructTreeSuccess:D,onGetTextError:C,onGetTextSuccess:w,onLoadError:k,onLoadSuccess:L,onRenderAnnotationLayerError:m,onRenderAnnotationLayerSuccess:F,onRenderError:W,onRenderSuccess:V,onRenderTextLayerError:S,onRenderTextLayerSuccess:Y,pageColors:B,pageIndex:G,pageNumber:U,pdf:H,registerPage:le,renderAnnotationLayer:ye=!0,renderForms:fe=!1,renderMode:Ee="canvas",renderTextLayer:te=!0,rotate:ue,scale:ne=_e,unregisterPage:re,width:X,...oe}=r,[ve,Q]=ce(),{value:T,error:$}=ve,j=a.useRef(null);p(H);const y=Z(U)?U-1:G??null,N=U??(Z(G)?G+1:null),I=ue??(T?T.rotate:null),J=a.useMemo(()=>{if(!T)return null;let K=1;const ie=ne??_e;if(X||d){const q=T.getViewport({scale:1,rotation:I});X?K=X/q.width:d&&(K=d/q.height)}return ie*K},[d,T,I,ne,X]);a.useEffect(function(){return()=>{Z(y)&&i&&re&&re(y)}},[i,H,y,re]);function Qe(){if(L){if(!T||!J)return;L(Te(T,J))}if(i&&le){if(!Z(y)||!j.current)return;le(y,j.current)}}function Ze(){$&&(O(!1,$.toString()),k&&k($))}a.useEffect(function(){Q({type:"RESET"})},[Q,H,y]),a.useEffect(function(){if(!H||!N)return;const ie=de(H.getPage(N)),q=ie;return ie.promise.then(be=>{Q({type:"RESOLVE",value:be})}).catch(be=>{Q({type:"REJECT",error:be})}),()=>ee(q)},[Q,H,N]),a.useEffect(()=>{if(T!==void 0){if(T===!1){Ze();return}Qe()}},[T,J]);const we=a.useMemo(()=>Z(y)&&N&&Z(I)&&Z(J)?{_className:o,canvasBackground:l,customTextRenderer:f,devicePixelRatio:E,filterAnnotations:g,onGetAnnotationsError:v,onGetAnnotationsSuccess:M,onGetStructTreeError:z,onGetStructTreeSuccess:D,onGetTextError:C,onGetTextSuccess:w,onRenderAnnotationLayerError:m,onRenderAnnotationLayerSuccess:F,onRenderError:W,onRenderSuccess:V,onRenderTextLayerError:S,onRenderTextLayerSuccess:Y,page:T,pageColors:B,pageIndex:y,pageNumber:N,renderForms:fe,renderTextLayer:te,rotate:I,scale:J}:null,[o,l,f,E,g,v,M,z,D,C,w,m,F,W,V,S,Y,T,B,y,N,fe,te,I,J]),et=a.useMemo(()=>Fe(oe,()=>T&&(J?Te(T,J):void 0)),[oe,T,J]),ge=`${y}@${J}/${I}`;function tt(){switch(Ee){case"custom":return p(P),s.jsx(P,{},`${ge}_custom`);case"none":return null;case"canvas":default:return s.jsx(un,{canvasRef:c},`${ge}_canvas`)}}function nt(){return te?s.jsx(En,{},`${ge}_text`):null}function rt(){return ye?s.jsx(rn,{},`${ge}_annotations`):null}function ot(){function K(q){return!!q?.page}if(!K(we))throw new Error("page is undefined");const ie=typeof x=="function"?x(we):x;return s.jsxs(We.Provider,{value:we,children:[tt(),nt(),rt(),ie]})}function it(){return N?H===null||T===void 0||T===null?s.jsx(se,{type:"loading",children:typeof _=="function"?_():_}):H===!1||T===!1?s.jsx(se,{type:"error",children:typeof h=="function"?h():h}):ot():s.jsx(se,{type:"no-data",children:typeof R=="function"?R():R})}return s.jsx("div",{className:pe(o,u),"data-page-number":N,ref:ze(A,j),style:{"--scale-round-x":"1px","--scale-round-y":"1px","--scale-factor":"1","--user-unit":`${J}`,"--total-scale-factor":"calc(var(--scale-factor) * var(--user-unit))",backgroundColor:l||"white",position:"relative",minWidth:"min-content",minHeight:"min-content"},...et,children:it()})}Qt();dt.workerSrc="pdf.worker.mjs";const wn=b.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${n.spacing["3xl"]} ${n.spacing.md};

  ${n.media.tablet} {
    padding: ${n.spacing["3xl"]} ${n.spacing.lg};
  }
`,bn=b.div`
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
`,Sn=b.article`
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
`,Tn=b.h3`
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
`,$n=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${n.spacing.xxs};

  ${n.media.tablet} {
    gap: ${n.spacing.xs};
  }
`,Pn=b.span`
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
`,Rn=b.hr`
  width: 100%;
  max-width: ${n.maxWidth.content};
  height: 1px;
  background-color: ${n.colors.semantic.divider};
  border: none;
  margin: ${n.spacing.xl} auto 0;

  ${n.media.tablet} {
    margin: ${n.spacing["2xl"]} auto 0;
  }
`,Cn=[{title:"Frontend",technologies:["React","TypeScript","JavaScript","React Native"]},{title:"Architecture & Testing",technologies:["Microfrontends","Hexagonal Architecture","Jest","Vitest","Testing Library","Storybook"]},{title:"Cloud & Tooling",technologies:["Firebase","Google Cloud","GitHub","CI/CD","Jira","Figma"]},{title:"AI & Development Workflow",technologies:["GitHub Copilot","Claude","AI development tools"]}],Ln=b.div`
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
`;b.hr`
  width: 100%;
  max-width: ${n.maxWidth.content};
  height: 1px;
  background-color: ${n.colors.semantic.divider};
  border: none;
  margin: 0 auto ${n.spacing.xl};

  ${n.media.tablet} {
    margin-bottom: ${n.spacing["2xl"]};
  }
`;const kn=b.span`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: ${n.font.letterSpacing.wider};
  text-transform: uppercase;
  color: ${n.colors.neutral.grey};
  margin-bottom: ${n.spacing.md};
`,An=b.p`
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
`,Dn=b.a`
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
`;function jn(){const t="2024",r=String(new Date().getFullYear());return 3+(Number(r.slice(-1))-Number(t.slice(-1)))}const _n=b.div`
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
`,Nn=b.div`
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
`,On=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${n.spacing.md} ${n.spacing.lg};
  border-bottom: 1px solid ${n.colors.semantic.divider};
  flex-shrink: 0;
`,Mn=b.h3`
  margin: 0;
  font-size: ${n.font.headings.h3.fontSize};
  font-weight: ${n.font.headings.h3.fontWeight};
  color: ${n.colors.neutral.lightGrey};
`,Fn=b.div`
  display: flex;
  align-items: center;
  gap: ${n.spacing.xs};
`,Vn=b.button`
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
`,Bn=b.div`
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
`,Ne=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: ${n.colors.neutral.grey};
  font-size: ${n.font.small.fontSize};
`,Hn=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: ${n.spacing.md};
  color: ${n.colors.neutral.grey};
  font-size: ${n.font.small.fontSize};
`,Oe=b.a`
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
`,Gn=({isOpen:e,onClose:t,pdfUrl:r,fileName:o="CV"})=>{const[i,l]=a.useState(null),[c,x]=a.useState(!0),[u,P]=a.useState(null),f=a.useCallback(d=>{d.key==="Escape"&&t()},[t]);a.useEffect(()=>(e&&(document.addEventListener("keydown",f),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",f),document.body.style.overflow=""}),[e,f]),a.useEffect(()=>{e||(l(null),x(!0),P(null))},[e]);const E=({numPages:d})=>{l(d),x(!1)},h=d=>{P("Error loading PDF. Please try downloading instead."),x(!1),console.error("PDF load error:",d)},g=d=>{d.target===d.currentTarget&&t()};return vt.createPortal(s.jsx(_n,{$isOpen:e,onClick:g,role:"dialog","aria-modal":"true","aria-label":"PDF Viewer",children:s.jsxs(Nn,{children:[s.jsxs(On,{children:[s.jsx(Mn,{children:o}),s.jsxs(Fn,{children:[s.jsx(Oe,{href:r,download:o,"aria-label":"Download PDF",children:s.jsx(Pe,{"aria-hidden":"true"})}),s.jsx(Vn,{onClick:t,"aria-label":"Close viewer",children:s.jsx(ft,{"aria-hidden":"true"})})]})]}),s.jsx(Bn,{children:u?s.jsxs(Hn,{children:[s.jsx("p",{children:u}),s.jsxs(Oe,{href:r,download:o,children:[s.jsx(Pe,{"aria-hidden":"true"}),"Download PDF"]})]}):e&&s.jsxs(nn,{file:r,onLoadSuccess:E,onLoadError:h,loading:s.jsx(Ne,{children:"Loading PDF..."}),children:[c&&s.jsx(Ne,{children:"Loading PDF..."}),i&&Array.from({length:i},(d,A)=>s.jsx(vn,{pageNumber:A+1,renderTextLayer:!1,renderAnnotationLayer:!1},`page_${A+1}`))]})})]})}),document.body)},In="/assets/CV-Raul-DosJJbkd.pdf",zn=()=>{const[e,t]=a.useState(!1);return s.jsxs(Ln,{"data-testid":"about-block",children:[s.jsx(kn,{children:"About me"}),s.jsxs(An,{children:["Frontend Engineer with ",jn(),"+ years of experience building scalable web applications and reusable frontend systems. I've worked across fintech, e-mobility, and web/mobile products, always focusing on maintainable architecture and code quality."]}),s.jsxs(Dn,{as:"button",onClick:()=>t(!0),children:[s.jsx(gt,{"aria-hidden":"true"}),"View CV"]}),s.jsx(Gn,{isOpen:e,onClose:()=>t(!1),pdfUrl:In,fileName:"CV-Raul"})]})},Wn={Frontend:s.jsx(ht,{"aria-hidden":"true"}),"Architecture & Testing":s.jsx(mt,{"aria-hidden":"true"}),"Cloud & Tooling":s.jsx(xt,{"aria-hidden":"true"}),"AI & Development Workflow":s.jsx(yt,{"aria-hidden":"true"})},Kn=()=>s.jsxs(wn,{"data-testid":"expertise",id:"expertise","aria-labelledby":"expertise-title",children:[s.jsx(pt,{as:"h2",id:"experience-title",children:"Technical Expertise"}),s.jsx(bn,{children:Cn.map((e,t)=>s.jsx(wt,{delay:t*80,children:s.jsxs(Sn,{children:[s.jsxs(Tn,{children:[Wn[e.title],e.title]}),s.jsx($n,{"aria-label":`${e.title} technologies`,children:e.technologies.map(r=>s.jsx(Pn,{children:r},r))})]})},e.title))}),s.jsx(Rn,{"aria-hidden":"true"}),s.jsx(zn,{})]});export{Kn as Expertise};
