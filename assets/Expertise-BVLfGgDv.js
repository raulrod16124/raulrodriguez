import{j as s,g as sn,p as cn,A as ln,c as un,T as dn,G as fn,d as b,t,f as $e,e as Pe,h as gn,i as pn,V as hn,a as mn,k as xn,n as yn,o as En}from"./index-BzMMM3-T.js";import{g as vn,r as a}from"./vendor-CdEpWVL-.js";import{S as wn}from"./ScrollReveal-BgUjGVgW.js";function Me(e){var n,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(r=Me(e[n]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function pe(){for(var e,n,r=0,o="",i=arguments.length;r<i;r++)(e=arguments[r])&&(n=Me(e))&&(o&&(o+=" "),o+=n);return o}var Re=Object.prototype.hasOwnProperty;function Ce(e,n,r){for(r of e.keys())if(ae(r,n))return r}function ae(e,n){var r,o,i;if(e===n)return!0;if(e&&n&&(r=e.constructor)===n.constructor){if(r===Date)return e.getTime()===n.getTime();if(r===RegExp)return e.toString()===n.toString();if(r===Array){if((o=e.length)===n.length)for(;o--&&ae(e[o],n[o]););return o===-1}if(r===Set){if(e.size!==n.size)return!1;for(o of e)if(i=o,i&&typeof i=="object"&&(i=Ce(n,i),!i)||!n.has(i))return!1;return!0}if(r===Map){if(e.size!==n.size)return!1;for(o of e)if(i=o[0],i&&typeof i=="object"&&(i=Ce(n,i),!i)||!ae(o[1],n.get(i)))return!1;return!0}if(r===ArrayBuffer)e=new Uint8Array(e),n=new Uint8Array(n);else if(r===DataView){if((o=e.byteLength)===n.byteLength)for(;o--&&e.getInt8(o)===n.getInt8(o););return o===-1}if(ArrayBuffer.isView(e)){if((o=e.byteLength)===n.byteLength)for(;o--&&e[o]===n[o];);return o===-1}if(!r||typeof e=="object"){o=0;for(r in e)if(Re.call(e,r)&&++o&&!Re.call(n,r)||!(r in n)||!ae(e[r],n[r]))return!1;return Object.keys(n).length===o}}return e!==e&&n!==n}function de(e){let n=!1;return{promise:new Promise((o,i)=>{e.then(l=>!n&&o(l)).catch(l=>!n&&i(l))}),cancel(){n=!0}}}const bn=["onCopy","onCut","onPaste"],Sn=["onCompositionEnd","onCompositionStart","onCompositionUpdate"],Tn=["onFocus","onBlur"],$n=["onInput","onInvalid","onReset","onSubmit"],Pn=["onLoad","onError"],Rn=["onKeyDown","onKeyPress","onKeyUp"],Cn=["onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting"],Ln=["onClick","onContextMenu","onDoubleClick","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp"],kn=["onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop"],An=["onSelect"],Dn=["onTouchCancel","onTouchEnd","onTouchMove","onTouchStart"],jn=["onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onGotPointerCapture","onLostPointerCapture","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut"],_n=["onScroll"],Nn=["onWheel"],On=["onAnimationStart","onAnimationEnd","onAnimationIteration"],Mn=["onTransitionEnd"],Fn=["onToggle"],Vn=["onChange"],Bn=[...bn,...Sn,...Tn,...$n,...Pn,...Rn,...Cn,...Ln,...kn,...An,...Dn,...jn,..._n,...Nn,...On,...Mn,...Vn,...Fn];function Fe(e,n){const r={};for(const o of Bn){const i=e[o];i&&(n?r[o]=l=>i(l,n(o)):r[o]=i)}return r}var Hn="Invariant failed";function p(e,n){if(!e)throw new Error(Hn)}var Gn=function(){},In=Gn;const O=vn(In),Ve=a.createContext(null),zn="noopener noreferrer nofollow";class Wn{constructor(){this.externalLinkEnabled=!0,this.externalLinkRel=void 0,this.externalLinkTarget=void 0,this.isInPresentationMode=!1,this.pdfDocument=void 0,this.pdfViewer=void 0}setDocument(n){this.pdfDocument=n}setViewer(n){this.pdfViewer=n}setExternalLinkRel(n){this.externalLinkRel=n}setExternalLinkTarget(n){this.externalLinkTarget=n}setHash(){}setHistory(){}get pagesCount(){return this.pdfDocument?this.pdfDocument.numPages:0}get page(){return p(this.pdfViewer),this.pdfViewer.currentPageNumber||0}set page(n){p(this.pdfViewer),this.pdfViewer.currentPageNumber=n}get rotation(){return 0}set rotation(n){}addLinkAttributes(n,r,o){n.href=r,n.rel=this.externalLinkRel||zn,n.target=o?"_blank":this.externalLinkTarget||""}goToDestination(n){return new Promise(r=>{p(this.pdfDocument),p(n),typeof n=="string"?this.pdfDocument.getDestination(n).then(r):Array.isArray(n)?r(n):n.then(r)}).then(r=>{p(Array.isArray(r));const o=r[0];new Promise(i=>{p(this.pdfDocument),o instanceof Object?this.pdfDocument.getPageIndex(o).then(l=>{i(l)}).catch(()=>{p(!1)}):typeof o=="number"?i(o):p(!1)}).then(i=>{const l=i+1;p(this.pdfViewer),p(l>=1&&l<=this.pagesCount),this.pdfViewer.scrollPageIntoView({dest:r,pageIndex:i,pageNumber:l})})})}goToPage(n){const r=n-1;p(this.pdfViewer),p(n>=1&&n<=this.pagesCount),this.pdfViewer.scrollPageIntoView({pageIndex:r,pageNumber:n})}goToXY(){}cachePageRef(){}getDestinationHash(){return"#"}getAnchorUrl(){return"#"}executeNamedAction(){}executeSetOCGState(){}isPageVisible(){return!0}isPageCached(){return!0}navigateTo(n){this.goToDestination(n)}}function se({children:e,type:n}){return s.jsx("div",{className:`react-pdf__message react-pdf__message--${n}`,children:e})}const Le={NEED_PASSWORD:1,INCORRECT_PASSWORD:2};function Un(e,n){switch(n.type){case"RESOLVE":return{value:n.value,error:void 0};case"REJECT":return{value:!1,error:n.error};case"RESET":return{value:void 0,error:void 0};default:return e}}function ce(){return a.useReducer(Un,{value:void 0,error:void 0})}const he=typeof window<"u",Be=he&&window.location.protocol==="file:";function Jn(e){return typeof e<"u"}function Z(e){return Jn(e)&&e!==null}function Yn(e){return typeof e=="string"}function Kn(e){return e instanceof ArrayBuffer}function qn(e){return p(he),e instanceof Blob}function Se(e){return Yn(e)&&/^data:/.test(e)}function ke(e){p(Se(e));const[n="",r=""]=e.split(",");return n.split(";").indexOf("base64")!==-1?atob(r):unescape(r)}function Xn(){return he&&window.devicePixelRatio||1}const He="On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";function Ae(){O(!Be,`Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${He}`)}function Qn(){O(!Be,`Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ${He}`)}function ee(e){e?.cancel&&e.cancel()}function Te(e,n){return Object.defineProperty(e,"width",{get(){return this.getViewport({scale:n}).width},configurable:!0}),Object.defineProperty(e,"height",{get(){return this.getViewport({scale:n}).height},configurable:!0}),Object.defineProperty(e,"originalWidth",{get(){return this.getViewport({scale:1}).width},configurable:!0}),Object.defineProperty(e,"originalHeight",{get(){return this.getViewport({scale:1}).height},configurable:!0}),e}function Ge(e){return e.name==="AbortException"||e.name==="RenderingCancelledException"}function Zn(e){return new Promise((n,r)=>{const o=new FileReader;o.onload=()=>{if(!o.result)return r(new Error("Error while reading a file."));n(o.result)},o.onerror=i=>{if(!i.target)return r(new Error("Error while reading a file."));const{error:l}=i.target;if(!l)return r(new Error("Error while reading a file."));switch(l.code){case l.NOT_FOUND_ERR:return r(new Error("Error while reading a file: File not found."));case l.SECURITY_ERR:return r(new Error("Error while reading a file: Security error."));case l.ABORT_ERR:return r(new Error("Error while reading a file: Aborted."));default:return r(new Error("Error while reading a file."))}},o.readAsArrayBuffer(e)})}const{PDFDataRangeTransport:et}=cn,nt=(e,n)=>{switch(n){case Le.NEED_PASSWORD:{const r=prompt("Enter the password to open this PDF file.");e(r);break}case Le.INCORRECT_PASSWORD:{const r=prompt("Invalid password. Please try again.");e(r);break}}};function De(e){return typeof e=="object"&&e!==null&&("data"in e||"range"in e||"url"in e)}const tt=a.forwardRef(function({children:n,className:r,error:o="Failed to load PDF file.",externalLinkRel:i,externalLinkTarget:l,file:c,inputRef:x,imageResourcesPath:u,loading:P="Loading PDF…",noData:f="No PDF file specified.",onItemClick:E,onLoadError:h,onLoadProgress:g,onLoadSuccess:d,onPassword:A=nt,onSourceError:_,onSourceSuccess:R,options:v,renderMode:M,rotate:z,scale:D,...C},w){const[k,L]=ce(),{value:m,error:F}=k,[W,V]=ce(),{value:S,error:Y}=W,B=a.useRef(new Wn),G=a.useRef([]),U=a.useRef(void 0),H=a.useRef(void 0);c&&c!==U.current&&De(c)&&(O(!ae(c,U.current),`File prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.`),U.current=c),v&&v!==H.current&&(O(!ae(v,H.current),`Options prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.`),H.current=v);const le=a.useRef({scrollPageIntoView:$=>{const{dest:j,pageNumber:y,pageIndex:N=y-1}=$;if(E){E({dest:j,pageIndex:N,pageNumber:y});return}const I=G.current[N];if(I){I.scrollIntoView();return}O(!1,`An internal link leading to page ${y} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`)}});a.useImperativeHandle(w,()=>({linkService:B,pages:G,viewer:le}),[]);function ye(){R&&R()}function fe(){F&&(O(!1,F.toString()),_&&_(F))}function Ee(){L({type:"RESET"})}a.useEffect(Ee,[c,L]);const ne=a.useCallback(async()=>{if(!c)return null;if(typeof c=="string")return Se(c)?{data:ke(c)}:(Ae(),{url:c});if(c instanceof et)return{range:c};if(Kn(c))return{data:c};if(he&&qn(c))return{data:await Zn(c)};if(p(typeof c=="object"),p(De(c)),"url"in c&&typeof c.url=="string"){if(Se(c.url)){const{url:$,...j}=c;return{data:ke($),...j}}Ae()}return c},[c]);a.useEffect(()=>{const $=de(ne());return $.promise.then(j=>{L({type:"RESOLVE",value:j})}).catch(j=>{L({type:"REJECT",error:j})}),()=>{ee($)}},[ne,L]),a.useEffect(()=>{if(!(typeof m>"u")){if(m===!1){fe();return}ye()}},[m]);function ue(){S&&(d&&d(S),G.current=new Array(S.numPages),B.current.setDocument(S))}function te(){Y&&(O(!1,Y.toString()),h&&h(Y))}a.useEffect(function(){V({type:"RESET"})},[V,m]),a.useEffect(function(){if(!m)return;const j=v?{...m,...v}:m,y=sn(j);g&&(y.onProgress=g),A&&(y.onPassword=A);const N=y;return N.promise.then(I=>{N.destroyed||V({type:"RESOLVE",value:I})}).catch(I=>{N.destroyed||V({type:"REJECT",error:I})}),()=>{N.destroy(),V({type:"RESET"})}},[v,V,m]),a.useEffect(()=>{if(!(typeof S>"u")){if(S===!1){te();return}ue()}},[S]),a.useEffect(function(){B.current.setViewer(le.current),B.current.setExternalLinkRel(i),B.current.setExternalLinkTarget(l)},[i,l]);const re=a.useCallback(($,j)=>{G.current[$]=j},[]),X=a.useCallback($=>{delete G.current[$]},[]),oe=a.useMemo(()=>({imageResourcesPath:u,linkService:B.current,onItemClick:E,pdf:S,registerPage:re,renderMode:M,rotate:z,scale:D,unregisterPage:X}),[u,E,S,re,M,z,D,X]),ve=a.useMemo(()=>Fe(C,()=>S),[C,S]);function Q(){function $(y){return!!y?.pdf}if(!$(oe))throw new Error("pdf is undefined");const j=typeof n=="function"?n(oe):n;return s.jsx(Ve.Provider,{value:oe,children:j})}function T(){return c?S==null?s.jsx(se,{type:"loading",children:typeof P=="function"?P():P}):S===!1?s.jsx(se,{type:"error",children:typeof o=="function"?o():o}):Q():s.jsx(se,{type:"no-data",children:typeof f=="function"?f():f})}return s.jsx("div",{className:pe("react-pdf__Document",r),ref:x,...ve,children:T()})});function Ie(){return a.useContext(Ve)}function ze(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=e.filter(Boolean);if(r.length<=1){var o=r[0];return o||null}return function(l){for(var c=0,x=r;c<x.length;c++){var u=x[c];typeof u=="function"?u(l):u&&(u.current=l)}}}const We=a.createContext(null);function me(){return a.useContext(We)}function rt(){const e=Ie(),n=me();p(n);const r={...e,...n},{filterAnnotations:o,imageResourcesPath:i,linkService:l,onGetAnnotationsError:c,onGetAnnotationsSuccess:x,onRenderAnnotationLayerError:u,onRenderAnnotationLayerSuccess:P,page:f,pdf:E,renderForms:h,rotate:g,scale:d=1}=r;p(E),p(f),p(l);const[A,_]=ce(),{value:R,error:v}=A,M=a.useRef(null);O(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"),10)===1,"AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations");function z(){R&&x&&x(R)}function D(){v&&(O(!1,v.toString()),c&&c(v))}a.useEffect(function(){_({type:"RESET"})},[_,f]),a.useEffect(function(){if(!f)return;const m=de(f.getAnnotations()),F=m;return m.promise.then(W=>{_({type:"RESOLVE",value:W})}).catch(W=>{_({type:"REJECT",error:W})}),()=>{ee(F)}},[_,f]),a.useEffect(()=>{if(R!==void 0){if(R===!1){D();return}z()}},[R]);function C(){P&&P()}function w(L){O(!1,`${L}`),u&&u(L)}const k=a.useMemo(()=>f.getViewport({scale:d,rotation:g}),[f,g,d]);return a.useEffect(function(){if(!E||!f||!l||!R)return;const{current:m}=M;if(!m)return;const F=k.clone({dontFlip:!0}),W={accessibilityManager:null,annotationCanvasMap:null,annotationEditorUIManager:null,annotationStorage:E.annotationStorage,commentManager:null,div:m,l10n:null,linkService:l,page:f,structTreeLayer:null,viewport:F},V={annotations:o?o({annotations:R}):R,annotationStorage:E.annotationStorage,div:m,imageResourcesPath:i,linkService:l,page:f,renderForms:h,viewport:F};m.innerHTML="";try{new ln(W).render(V),C()}catch(S){w(S)}return()=>{}},[R,o,i,l,f,E,h,k]),s.jsx("div",{className:pe("react-pdf__Page__annotations","annotationLayer"),ref:M})}const Ue={Document:null,DocumentFragment:null,Part:"group",Sect:"group",Div:"group",Aside:"note",NonStruct:"none",P:null,H:"heading",Title:null,FENote:"note",Sub:"group",Lbl:null,Span:null,Em:null,Strong:null,Link:"link",Annot:"note",Form:"form",Ruby:null,RB:null,RT:null,RP:null,Warichu:null,WT:null,WP:null,L:"list",LI:"listitem",LBody:null,Table:"table",TR:"row",TH:"columnheader",TD:"cell",THead:"columnheader",TBody:null,TFoot:null,Caption:null,Figure:"figure",Formula:null,Artifact:null},ot=/^H(\d+)$/;function it(e){return e in Ue}function xe(e){return"children"in e}function Je(e){return xe(e)?e.children.length===1&&0 in e.children&&"id"in e.children[0]:!1}function at(e){const n={};if(xe(e)){const{role:r}=e,o=r.match(ot);if(o)n.role="heading",n["aria-level"]=Number(o[1]);else if(it(r)){const i=Ue[r];i&&(n.role=i)}}return n}function Ye(e){const n={};if(xe(e)){if(e.alt!==void 0&&(n["aria-label"]=e.alt),e.lang!==void 0&&(n.lang=e.lang),Je(e)){const[r]=e.children;if(r){const o=Ye(r);return{...n,...o}}}}else"id"in e&&(n["aria-owns"]=e.id);return n}function st(e){return e?{...at(e),...Ye(e)}:null}function Ke({className:e,node:n}){const r=a.useMemo(()=>st(n),[n]),o=a.useMemo(()=>!xe(n)||Je(n)?null:n.children.map((i,l)=>s.jsx(Ke,{node:i},l)),[n]);return s.jsx("span",{className:e,...r,children:o})}function ct(){const e=me();p(e);const{onGetStructTreeError:n,onGetStructTreeSuccess:r}=e,[o,i]=ce(),{value:l,error:c}=o,{customTextRenderer:x,page:u}=e;function P(){l&&r&&r(l)}function f(){c&&(O(!1,c.toString()),n&&n(c))}return a.useEffect(function(){i({type:"RESET"})},[i,u]),a.useEffect(function(){if(x||!u)return;const h=de(u.getStructTree()),g=h;return h.promise.then(d=>{i({type:"RESOLVE",value:d})}).catch(d=>{i({type:"REJECT",error:d})}),()=>ee(g)},[x,u,i]),a.useEffect(()=>{if(l!==void 0){if(l===!1){f();return}P()}},[l]),l?s.jsx(Ke,{className:"react-pdf__Page__structTree structTree",node:l}):null}const je=un;function lt(e){const n=me();p(n);const r={...n,...e},{_className:o,canvasBackground:i,devicePixelRatio:l=Xn(),onRenderError:c,onRenderSuccess:x,page:u,renderForms:P,renderTextLayer:f,pageColors:E,rotate:h,scale:g}=r,{canvasRef:d}=e;p(u);const A=a.useRef(null);function _(){u&&x&&x(Te(u,g))}function R(D){Ge(D)||(O(!1,D.toString()),c&&c(D))}const v=a.useMemo(()=>u.getViewport({scale:g*l,rotation:h}),[l,u,h,g]),M=a.useMemo(()=>u.getViewport({scale:g,rotation:h}),[u,h,g]);a.useEffect(function(){if(!u)return;u.cleanup();const{current:C}=A;if(!C)return;C.width=v.width,C.height=v.height,C.style.width=`${Math.floor(M.width)}px`,C.style.height=`${Math.floor(M.height)}px`,C.style.visibility="hidden";const w={annotationMode:P?je.ENABLE_FORMS:je.ENABLE,canvas:C,canvasContext:C.getContext("2d",{alpha:!1}),pageColors:E,viewport:v};i&&(w.background=i);const k=u.render(w),L=k;return k.promise.then(()=>{C.style.visibility="",_()}).catch(R),()=>ee(L)},[i,u,E,P,v,M]);const z=a.useCallback(()=>{const{current:D}=A;D&&(D.width=0,D.height=0)},[]);return a.useEffect(()=>z,[z]),s.jsx("canvas",{className:`${o}__canvas`,dir:"ltr",ref:ze(d,A),style:{display:"block",userSelect:"none"},children:f?s.jsx(ct,{}):null})}function ut(e){return"str"in e}const dt=new Set(["base","embed","iframe","link","meta","object","script","style","template"]),ft=new Set(["action","formaction","href","poster","src","xlink:href"]);function gt(e){let n="";for(const r of e){const o=r.charCodeAt(0);o<=32||o===127||(n+=r.toLowerCase())}return n.startsWith("data:")||n.startsWith("javascript:")||n.startsWith("vbscript:")}function pt(e){return e.nodeType===Node.ELEMENT_NODE}function qe(e){return pt(e)&&e instanceof HTMLElement}function ht(e){return qe(e)&&dt.has(e.tagName.toLowerCase())}function mt(e){const n=document.createElement(e.tagName.toLowerCase());return Array.from(e.attributes).forEach(r=>{const o=r.name.toLowerCase();o.startsWith("on")||o==="srcdoc"||ft.has(o)&&gt(r.value)||n.setAttribute(r.name,r.value)}),Array.from(e.childNodes).forEach(r=>{n.append(Xe(r))}),n}function Xe(e){var n;return qe(e)&&!ht(e)?mt(e):document.createTextNode((n=e.textContent)!==null&&n!==void 0?n:"")}function xt(e,n){const r=document.createElement("template");r.innerHTML=n;const o=document.createDocumentFragment();Array.from(r.content.childNodes).forEach(i=>{o.append(Xe(i))}),e.replaceChildren(o)}function yt(){const e=me();p(e);const{customTextRenderer:n,onGetTextError:r,onGetTextSuccess:o,onRenderTextLayerError:i,onRenderTextLayerSuccess:l,page:c,pageIndex:x,pageNumber:u,rotate:P,scale:f}=e;p(c);const[E,h]=ce(),{value:g,error:d}=E,A=a.useRef(null);O(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"),10)===1,"TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer");function _(){g&&o&&o(g)}function R(){d&&(O(!1,d.toString()),r&&r(d))}a.useEffect(function(){h({type:"RESET"})},[c,h]),a.useEffect(function(){if(!c)return;const k=de(c.getTextContent()),L=k;return k.promise.then(m=>{h({type:"RESOLVE",value:m})}).catch(m=>{h({type:"REJECT",error:m})}),()=>ee(L)},[c,h]),a.useEffect(()=>{if(g!==void 0){if(g===!1){R();return}_()}},[g]);const v=a.useCallback(()=>{l&&l()},[l]),M=a.useCallback(w=>{Ge(w)||(O(!1,w.toString()),i&&i(w))},[i]);function z(){const w=A.current;w&&w.classList.add("selecting")}function D(){const w=A.current;w&&w.classList.remove("selecting")}const C=a.useMemo(()=>c.getViewport({scale:f,rotation:P}),[c,P,f]);return a.useLayoutEffect(function(){if(!c||!g)return;const{current:k}=A;if(!k)return;k.innerHTML="";const L=c.streamTextContent({includeMarkedContent:!0}),m={container:k,textContentSource:L,viewport:C},F=new dn(m),W=F;return F.render().then(()=>{const V=document.createElement("div");V.className="endOfContent",k.append(V);const S=k.querySelectorAll('[role="presentation"]');if(n){let Y=0;g.items.forEach((B,G)=>{if(!ut(B))return;const U=S[Y];if(!U)return;const H=n({pageIndex:x,pageNumber:u,itemIndex:G,...B});xt(U,H),Y+=B.str&&B.hasEOL?2:1})}v()}).catch(M),()=>ee(W)},[n,M,v,c,x,u,g,C]),s.jsx("div",{className:pe("react-pdf__Page__textContent","textLayer"),onMouseUp:D,onMouseDown:z,ref:A})}const _e=1;function Et(e){const r={...Ie(),...e},{_className:o="react-pdf__Page",_enableRegisterUnregisterPage:i=!0,canvasBackground:l,canvasRef:c,children:x,className:u,customRenderer:P,customTextRenderer:f,devicePixelRatio:E,error:h="Failed to load the page.",filterAnnotations:g,height:d,inputRef:A,loading:_="Loading page…",noData:R="No page specified.",onGetAnnotationsError:v,onGetAnnotationsSuccess:M,onGetStructTreeError:z,onGetStructTreeSuccess:D,onGetTextError:C,onGetTextSuccess:w,onLoadError:k,onLoadSuccess:L,onRenderAnnotationLayerError:m,onRenderAnnotationLayerSuccess:F,onRenderError:W,onRenderSuccess:V,onRenderTextLayerError:S,onRenderTextLayerSuccess:Y,pageColors:B,pageIndex:G,pageNumber:U,pdf:H,registerPage:le,renderAnnotationLayer:ye=!0,renderForms:fe=!1,renderMode:Ee="canvas",renderTextLayer:ne=!0,rotate:ue,scale:te=_e,unregisterPage:re,width:X,...oe}=r,[ve,Q]=ce(),{value:T,error:$}=ve,j=a.useRef(null);p(H);const y=Z(U)?U-1:G??null,N=U??(Z(G)?G+1:null),I=ue??(T?T.rotate:null),J=a.useMemo(()=>{if(!T)return null;let K=1;const ie=te??_e;if(X||d){const q=T.getViewport({scale:1,rotation:I});X?K=X/q.width:d&&(K=d/q.height)}return ie*K},[d,T,I,te,X]);a.useEffect(function(){return()=>{Z(y)&&i&&re&&re(y)}},[i,H,y,re]);function Qe(){if(L){if(!T||!J)return;L(Te(T,J))}if(i&&le){if(!Z(y)||!j.current)return;le(y,j.current)}}function Ze(){$&&(O(!1,$.toString()),k&&k($))}a.useEffect(function(){Q({type:"RESET"})},[Q,H,y]),a.useEffect(function(){if(!H||!N)return;const ie=de(H.getPage(N)),q=ie;return ie.promise.then(be=>{Q({type:"RESOLVE",value:be})}).catch(be=>{Q({type:"REJECT",error:be})}),()=>ee(q)},[Q,H,N]),a.useEffect(()=>{if(T!==void 0){if(T===!1){Ze();return}Qe()}},[T,J]);const we=a.useMemo(()=>Z(y)&&N&&Z(I)&&Z(J)?{_className:o,canvasBackground:l,customTextRenderer:f,devicePixelRatio:E,filterAnnotations:g,onGetAnnotationsError:v,onGetAnnotationsSuccess:M,onGetStructTreeError:z,onGetStructTreeSuccess:D,onGetTextError:C,onGetTextSuccess:w,onRenderAnnotationLayerError:m,onRenderAnnotationLayerSuccess:F,onRenderError:W,onRenderSuccess:V,onRenderTextLayerError:S,onRenderTextLayerSuccess:Y,page:T,pageColors:B,pageIndex:y,pageNumber:N,renderForms:fe,renderTextLayer:ne,rotate:I,scale:J}:null,[o,l,f,E,g,v,M,z,D,C,w,m,F,W,V,S,Y,T,B,y,N,fe,ne,I,J]),en=a.useMemo(()=>Fe(oe,()=>T&&(J?Te(T,J):void 0)),[oe,T,J]),ge=`${y}@${J}/${I}`;function nn(){switch(Ee){case"custom":return p(P),s.jsx(P,{},`${ge}_custom`);case"none":return null;case"canvas":default:return s.jsx(lt,{canvasRef:c},`${ge}_canvas`)}}function tn(){return ne?s.jsx(yt,{},`${ge}_text`):null}function rn(){return ye?s.jsx(rt,{},`${ge}_annotations`):null}function on(){function K(q){return!!q?.page}if(!K(we))throw new Error("page is undefined");const ie=typeof x=="function"?x(we):x;return s.jsxs(We.Provider,{value:we,children:[nn(),tn(),rn(),ie]})}function an(){return N?H===null||T===void 0||T===null?s.jsx(se,{type:"loading",children:typeof _=="function"?_():_}):H===!1||T===!1?s.jsx(se,{type:"error",children:typeof h=="function"?h():h}):on():s.jsx(se,{type:"no-data",children:typeof R=="function"?R():R})}return s.jsx("div",{className:pe(o,u),"data-page-number":N,ref:ze(A,j),style:{"--scale-round-x":"1px","--scale-round-y":"1px","--scale-factor":"1","--user-unit":`${J}`,"--total-scale-factor":"calc(var(--scale-factor) * var(--user-unit))",backgroundColor:l||"white",position:"relative",minWidth:"min-content",minHeight:"min-content"},...en,children:an()})}Qn();fn.workerSrc="pdf.worker.mjs";const vt=b.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${t.spacing["3xl"]} ${t.spacing.md};

  ${t.media.tablet} {
    padding: ${t.spacing["3xl"]} ${t.spacing.lg};
  }
`,wt=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${t.spacing.lg};
  max-width: ${t.maxWidth.content};
  width: 100%;
  margin-top: ${t.spacing["2xl"]};

  ${t.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${t.spacing.xl};
  }
`,bt=b.article`
  display: flex;
  flex-direction: column;
  gap: ${t.spacing.sm};
  padding: ${t.spacing.lg} ${t.spacing.md};
  border-radius: ${t.borderRadius.md};
  background-color: ${t.colors.semantic.cardBackground};
  border: 1px solid ${t.colors.semantic.cardBorder};
  transition:
    border-color ${t.transition.normal},
    background-color ${t.transition.normal},
    transform ${t.transition.normal},
    box-shadow ${t.transition.boxShadow};

  &:hover {
    border-color: ${t.colors.semantic.cardBorderHover};
    transform: translateY(-4px);
    box-shadow: ${t.boxShadow.cardHover};
  }

  &:focus-within {
    outline: 3px solid ${t.colors.accent.main};
    outline-offset: 3px;
  }

  ${t.media.tablet} {
    padding: ${t.spacing.lg};
  }
`,St=b.h3`
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${t.spacing.xs};
  font-size: 1rem;
  font-weight: ${t.font.headings.h3.fontWeight};
  line-height: ${t.font.headings.h3.lineHeight};
  letter-spacing: ${t.font.headings.h3.letterSpacing};
  color: ${t.colors.accent.highContrast};

  svg {
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  ${t.media.tablet} {
    font-size: ${t.font.headings.h3.fontSize};

    svg {
      font-size: 1.25rem;
    }
  }
`,Tt=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t.spacing.xxs};

  ${t.media.tablet} {
    gap: ${t.spacing.xs};
  }
`,$t=b.span`
  font-size: 0.75rem;
  font-weight: ${t.font.tagText.fontWeight};
  line-height: ${t.font.tagText.lineHeight};
  letter-spacing: ${t.font.tagText.letterSpacing};
  color: ${t.colors.neutral.grey};
  padding: ${t.spacing.xxs} ${t.spacing.xs};
  border: 1px solid ${t.colors.semantic.tagBorder};
  border-radius: ${t.borderRadius.sm};
  background-color: ${t.colors.semantic.tagBackground};
  transition:
    background-color ${t.transition.fast},
    border-color ${t.transition.fast},
    transform ${t.transition.fast},
    box-shadow ${t.transition.fast};

  &:hover {
    background-color: ${t.colors.semantic.tagBackgroundHover};
    border-color: ${t.colors.semantic.tagBorderHover};
    transform: translateY(-1px);
    box-shadow: ${t.boxShadow.tagHover};
  }

  ${t.media.tablet} {
    font-size: ${t.font.tagText.fontSize};
    padding: ${t.spacing.xxs} ${t.spacing.xs};
  }
`,Pt=b.hr`
  width: 100%;
  max-width: ${t.maxWidth.content};
  height: 1px;
  background-color: ${t.colors.semantic.divider};
  border: none;
  margin: ${t.spacing.xl} auto 0;

  ${t.media.tablet} {
    margin: ${t.spacing["2xl"]} auto 0;
  }
`,Rt=[{title:"Frontend",technologies:["React","TypeScript","JavaScript","React Native"]},{title:"Architecture & Testing",technologies:["Microfrontends","Hexagonal Architecture","Jest","Vitest","Testing Library","Storybook"]},{title:"Cloud & Tooling",technologies:["Firebase","Google Cloud","GitHub","CI/CD","Jira","Figma"]},{title:"AI & Development Workflow",technologies:["GitHub Copilot","Claude","AI development tools"]}],Ct=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${t.spacing.xl} 0 0;
  width: 100%;
  max-width: ${t.maxWidth.content};
  margin: 0 auto;

  ${t.media.tablet} {
    padding: ${t.spacing["2xl"]} 0 0;
  }
`;b.hr`
  width: 100%;
  max-width: ${t.maxWidth.content};
  height: 1px;
  background-color: ${t.colors.semantic.divider};
  border: none;
  margin: 0 auto ${t.spacing.xl};

  ${t.media.tablet} {
    margin-bottom: ${t.spacing["2xl"]};
  }
`;const Lt=b.span`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: ${t.font.letterSpacing.wider};
  text-transform: uppercase;
  color: ${t.colors.neutral.grey};
  margin-bottom: ${t.spacing.md};
`,kt=b.p`
  margin: 0;
  font-size: 0.9375rem;
  font-weight: ${t.font.body.fontWeight};
  line-height: ${t.font.lineHeight.relaxed};
  color: ${t.colors.neutral.lightGrey};
  text-align: center;
  max-width: 100%;

  ${t.media.tablet} {
    font-size: ${t.font.body.fontSize};
    max-width: ${t.maxWidth.about};
  }
`,At=b.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${t.spacing.xs};
  margin-top: ${t.spacing.lg};
  padding: ${t.spacing.xs} ${t.spacing.lg};
  font-size: ${t.font.small.fontSize};
  font-weight: 500;
  font-family: ${t.font.primary.fontFamily};
  color: ${t.colors.accent.main};
  background-color: transparent;
  border: 1px solid ${t.colors.semantic.accentBorder};
  border-radius: ${t.borderRadius.sm};
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color ${t.transition.normal},
    border-color ${t.transition.normal},
    transform ${t.transition.fast};

  svg {
    font-size: 1rem;
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${t.colors.semantic.accentBackgroundHover};
    border-color: ${t.colors.accent.main};
    transform: translateY(-1px);
  }

  ${$e}

  ${t.media.tablet} {
    width: auto;
    max-width: none;
  }

  @media (max-width: ${t.responsive.smallMobileDevices}) {
    width: 100%;
    max-width: 280px;
  }
`;function Dt(){const n="2024",r=String(new Date().getFullYear());return 3+(Number(r.slice(-1))-Number(n.slice(-1)))}const jt=b.div`
  position: fixed;
  inset: 0;
  background-color: ${t.boxShadow.modalOverlay};
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${t.spacing.md};
  opacity: ${({$isOpen:e})=>e?1:0};
  visibility: ${({$isOpen:e})=>e?"visible":"hidden"};
  transition:
    opacity ${t.transition.normal},
    visibility ${t.transition.normal};
`,_t=b.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  max-height: calc(100vh - ${t.spacing["2xl"]});
  background-color: ${t.colors.surface};
  border: 1px solid ${t.colors.semantic.cardBorder};
  border-radius: ${t.borderRadius.md};
  overflow: hidden;

  ${t.media.tablet} {
    max-height: 85vh;
  }
`,Nt=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${t.spacing.md} ${t.spacing.lg};
  border-bottom: 1px solid ${t.colors.semantic.divider};
  flex-shrink: 0;
`,Ot=b.h3`
  margin: 0;
  font-size: ${t.font.headings.h3.fontSize};
  font-weight: ${t.font.headings.h3.fontWeight};
  color: ${t.colors.neutral.lightGrey};
`,Mt=b.div`
  display: flex;
  align-items: center;
  gap: ${t.spacing.xs};
`,Ft=b.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background-color: transparent;
  border: 1px solid ${t.colors.semantic.cardBorder};
  border-radius: ${t.borderRadius.sm};
  color: ${t.colors.neutral.grey};
  cursor: pointer;
  transition:
    background-color ${t.transition.fast},
    border-color ${t.transition.fast},
    color ${t.transition.fast};

  svg {
    font-size: 1.125rem;
  }

  &:hover {
    background-color: ${t.colors.semantic.cardBackground};
    border-color: ${t.colors.semantic.cardBorderHover};
    color: ${t.colors.neutral.lightGrey};
  }

  ${$e}
`,Vt=b.div`
  flex: 1;
  overflow: auto;
  padding: ${t.spacing.md};
  background-color: ${t.colors.neutral.darkGrey};
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
  color: ${t.colors.neutral.grey};
  font-size: ${t.font.small.fontSize};
`,Bt=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: ${t.spacing.md};
  color: ${t.colors.neutral.grey};
  font-size: ${t.font.small.fontSize};
`,Oe=b.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${t.spacing.xs};
  padding: ${t.spacing.xs} ${t.spacing.md};
  font-size: ${t.font.small.fontSize};
  font-weight: 500;
  font-family: ${t.font.primary.fontFamily};
  color: ${t.colors.accent.main};
  background-color: transparent;
  border: 1px solid ${t.colors.semantic.accentBorder};
  border-radius: ${t.borderRadius.sm};
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color ${t.transition.fast},
    border-color ${t.transition.fast};

  svg {
    font-size: 1rem;
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${t.colors.semantic.accentBackgroundHover};
    border-color: ${t.colors.accent.main};
  }

  ${$e}
`,Ht=({isOpen:e,onClose:n,pdfUrl:r,fileName:o="CV"})=>{const[i,l]=a.useState(null),[c,x]=a.useState(!0),[u,P]=a.useState(null),f=a.useCallback(d=>{d.key==="Escape"&&n()},[n]);a.useEffect(()=>(e&&(document.addEventListener("keydown",f),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",f),document.body.style.overflow=""}),[e,f]),a.useEffect(()=>{e||(l(null),x(!0),P(null))},[e]);const E=({numPages:d})=>{l(d),x(!1)},h=d=>{P("Error loading PDF. Please try downloading instead."),x(!1),console.error("PDF load error:",d)},g=d=>{d.target===d.currentTarget&&n()};return s.jsx(jt,{$isOpen:e,onClick:g,role:"dialog","aria-modal":"true","aria-label":"PDF Viewer",children:s.jsxs(_t,{children:[s.jsxs(Nt,{children:[s.jsx(Ot,{children:o}),s.jsxs(Mt,{children:[s.jsx(Oe,{href:r,download:o,"aria-label":"Download PDF",children:s.jsx(Pe,{"aria-hidden":"true"})}),s.jsx(Ft,{onClick:n,"aria-label":"Close viewer",children:s.jsx(gn,{"aria-hidden":"true"})})]})]}),s.jsx(Vt,{children:u?s.jsxs(Bt,{children:[s.jsx("p",{children:u}),s.jsxs(Oe,{href:r,download:o,children:[s.jsx(Pe,{"aria-hidden":"true"}),"Download PDF"]})]}):e&&s.jsxs(tt,{file:r,onLoadSuccess:E,onLoadError:h,loading:s.jsx(Ne,{children:"Loading PDF..."}),children:[c&&s.jsx(Ne,{children:"Loading PDF..."}),i&&Array.from({length:i},(d,A)=>s.jsx(Et,{pageNumber:A+1,renderTextLayer:!1,renderAnnotationLayer:!1},`page_${A+1}`))]})})]})})},Gt="/assets/CV-Raul-DosJJbkd.pdf",It=()=>{const[e,n]=a.useState(!1);return s.jsxs(Ct,{"data-testid":"about-block",children:[s.jsx(Lt,{children:"About me"}),s.jsxs(kt,{children:["Frontend Engineer with ",Dt(),"+ years of experience building scalable web applications and reusable frontend systems. I've worked across fintech, e-mobility, and web/mobile products, always focusing on maintainable architecture and code quality."]}),s.jsxs(At,{as:"button",onClick:()=>n(!0),children:[s.jsx(pn,{"aria-hidden":"true"}),"View CV"]}),s.jsx(Ht,{isOpen:e,onClose:()=>n(!1),pdfUrl:Gt,fileName:"CV-Raul"})]})},zt={Frontend:s.jsx(mn,{"aria-hidden":"true"}),"Architecture & Testing":s.jsx(xn,{"aria-hidden":"true"}),"Cloud & Tooling":s.jsx(yn,{"aria-hidden":"true"}),"AI & Development Workflow":s.jsx(En,{"aria-hidden":"true"})},Yt=()=>s.jsxs(vt,{"data-testid":"expertise",id:"expertise","aria-labelledby":"expertise-title",children:[s.jsx(hn,{as:"h2",id:"experience-title",children:"Technical Expertise"}),s.jsx(wt,{children:Rt.map((e,n)=>s.jsx(wn,{delay:n*80,children:s.jsxs(bt,{children:[s.jsxs(St,{children:[zt[e.title],e.title]}),s.jsx(Tt,{"aria-label":`${e.title} technologies`,children:e.technologies.map(r=>s.jsx($t,{children:r},r))})]})},e.title))}),s.jsx(Pt,{"aria-hidden":"true"}),s.jsx(It,{})]});export{Yt as Expertise};
