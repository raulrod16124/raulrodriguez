const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-Bjs0AQ0B.js","assets/vendor-jt5FKzEF.js","assets/Experience-eavVY6s5.js","assets/Expertise-DAnV_-9w.js","assets/Contact-C1b0LmqC.js"])))=>i.map(i=>d[i]);
import{r as z,a as fr,o as N,L as dr,u as pr,R as hr,b as U,N as gr,B as mr}from"./vendor-jt5FKzEF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var jt={exports:{}},Re={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yr=z,br=Symbol.for("react.element"),vr=Symbol.for("react.fragment"),xr=Object.prototype.hasOwnProperty,wr=yr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sr={key:!0,ref:!0,__self:!0,__source:!0};function _t(e,t,r){var n,o={},i=null,a=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)xr.call(t,n)&&!Sr.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:br,type:e,key:i,ref:a,props:o,_owner:wr.current}}Re.Fragment=vr;Re.jsx=_t;Re.jsxs=_t;jt.exports=Re;var l=jt.exports,Ct,st=fr;Ct=st.createRoot,st.hydrateRoot;var Ot={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ct=N.createContext&&N.createContext(Ot),$r=["attr","size","title"];function kr(e,t){if(e==null)return{};var r=Er(e,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Er(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function je(){return je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},je.apply(this,arguments)}function ut(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function _e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ut(Object(r),!0).forEach(function(n){jr(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ut(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function jr(e,t,r){return t=_r(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _r(e){var t=Cr(e,"string");return typeof t=="symbol"?t:t+""}function Cr(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Pt(e){return e&&e.map((t,r)=>N.createElement(t.tag,_e({key:r},t.attr),Pt(t.child)))}function fe(e){return t=>N.createElement(Or,je({attr:_e({},e.attr)},t),Pt(e.child))}function Or(e){var t=r=>{var{attr:n,size:o,title:i}=e,a=kr(e,$r),u=o||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),N.createElement("svg",je({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,a,{className:c,style:_e(_e({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&N.createElement("title",null,i),e.children)};return ct!==void 0?N.createElement(ct.Consumer,null,r=>t(r)):t(Ot)}function Pr(e){return fe({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"},child:[]}]})(e)}function Rr(e){return fe({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"},child:[]}]})(e)}var P=function(){return P=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},P.apply(this,arguments)};function ue(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var x="-ms-",ce="-moz-",y="-webkit-",Rt="comm",Ie="rule",et="decl",Ir="@import",It="@keyframes",Ar="@layer",At=Math.abs,tt=String.fromCharCode,Ye=Object.assign;function zr(e,t){return O(e,0)^45?(((t<<2^O(e,0))<<2^O(e,1))<<2^O(e,2))<<2^O(e,3):0}function zt(e){return e.trim()}function M(e,t){return(e=t.exec(e))?e[0]:e}function f(e,t,r){return e.replace(t,r)}function we(e,t,r){return e.indexOf(t,r)}function O(e,t){return e.charCodeAt(t)|0}function J(e,t,r){return e.slice(t,r)}function B(e){return e.length}function Nt(e){return e.length}function se(e,t){return t.push(e),e}function Nr(e,t){return e.map(t).join("")}function lt(e,t){return e.filter(function(r){return!M(r,t)})}var Ae=1,X=1,Tt=0,T=0,_=0,re="";function ze(e,t,r,n,o,i,a,u){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Ae,column:X,length:a,return:"",siblings:u}}function W(e,t){return Ye(ze("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function K(e){for(;e.root;)e=W(e.root,{children:[e]});se(e,e.siblings)}function Tr(){return _}function Dr(){return _=T>0?O(re,--T):0,X--,_===10&&(X=1,Ae--),_}function D(){return _=T<Tt?O(re,T++):0,X++,_===10&&(X=1,Ae++),_}function Y(){return O(re,T)}function Se(){return T}function Ne(e,t){return J(re,e,t)}function qe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Br(e){return Ae=X=1,Tt=B(re=e),T=0,[]}function Lr(e){return re="",e}function Fe(e){return zt(Ne(T-1,Ue(e===91?e+2:e===40?e+1:e)))}function Mr(e){for(;(_=Y())&&_<33;)D();return qe(e)>2||qe(_)>3?"":" "}function Hr(e,t){for(;--t&&D()&&!(_<48||_>102||_>57&&_<65||_>70&&_<97););return Ne(e,Se()+(t<6&&Y()==32&&D()==32))}function Ue(e){for(;D();)switch(_){case e:return T;case 34:case 39:e!==34&&e!==39&&Ue(_);break;case 40:e===41&&Ue(e);break;case 92:D();break}return T}function Fr(e,t){for(;D()&&e+_!==57;)if(e+_===84&&Y()===47)break;return"/*"+Ne(t,T-1)+"*"+tt(e===47?e:D())}function Wr(e){for(;!qe(Y());)D();return Ne(e,T)}function Gr(e){return Lr($e("",null,null,null,[""],e=Br(e),0,[0],e))}function $e(e,t,r,n,o,i,a,u,c){for(var h=0,m=0,d=a,b=0,g=0,S=0,E=1,I=1,j=1,$=0,w="",k=o,C=i,v=n,p=w;I;)switch(S=$,$=D()){case 40:if(S!=108&&O(p,d-1)==58){we(p+=f(Fe($),"&","&\f"),"&\f",At(h?u[h-1]:0))!=-1&&(j=-1);break}case 34:case 39:case 91:p+=Fe($);break;case 9:case 10:case 13:case 32:p+=Mr(S);break;case 92:p+=Hr(Se()-1,7);continue;case 47:switch(Y()){case 42:case 47:se(Vr(Fr(D(),Se()),t,r,c),c);break;default:p+="/"}break;case 123*E:u[h++]=B(p)*j;case 125*E:case 59:case 0:switch($){case 0:case 125:I=0;case 59+m:j==-1&&(p=f(p,/\f/g,"")),g>0&&B(p)-d&&se(g>32?dt(p+";",n,r,d-1,c):dt(f(p," ","")+";",n,r,d-2,c),c);break;case 59:p+=";";default:if(se(v=ft(p,t,r,h,m,o,u,w,k=[],C=[],d,i),i),$===123)if(m===0)$e(p,t,v,v,k,i,d,u,C);else switch(b===99&&O(p,3)===110?100:b){case 100:case 108:case 109:case 115:$e(e,v,v,n&&se(ft(e,v,v,0,0,o,u,w,o,k=[],d,C),C),o,C,d,u,n?k:C);break;default:$e(p,v,v,v,[""],C,0,u,C)}}h=m=g=0,E=j=1,w=p="",d=a;break;case 58:d=1+B(p),g=S;default:if(E<1){if($==123)--E;else if($==125&&E++==0&&Dr()==125)continue}switch(p+=tt($),$*E){case 38:j=m>0?1:(p+="\f",-1);break;case 44:u[h++]=(B(p)-1)*j,j=1;break;case 64:Y()===45&&(p+=Fe(D())),b=Y(),m=d=B(w=p+=Wr(Se())),$++;break;case 45:S===45&&B(p)==2&&(E=0)}}return i}function ft(e,t,r,n,o,i,a,u,c,h,m,d){for(var b=o-1,g=o===0?i:[""],S=Nt(g),E=0,I=0,j=0;E<n;++E)for(var $=0,w=J(e,b+1,b=At(I=a[E])),k=e;$<S;++$)(k=zt(I>0?g[$]+" "+w:f(w,/&\f/g,g[$])))&&(c[j++]=k);return ze(e,t,r,o===0?Ie:u,c,h,m,d)}function Vr(e,t,r,n){return ze(e,t,r,Rt,tt(Tr()),J(e,2,-2),0,n)}function dt(e,t,r,n,o){return ze(e,t,r,et,J(e,0,n),J(e,n+1,-1),n,o)}function Dt(e,t,r){switch(zr(e,t)){case 5103:return y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return y+e+e;case 4789:return ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return y+e+ce+e+x+e+e;case 5936:switch(O(e,t+11)){case 114:return y+e+x+f(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return y+e+x+f(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return y+e+x+f(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return y+e+x+e+e;case 6165:return y+e+x+"flex-"+e+e;case 5187:return y+e+f(e,/(\w+).+(:[^]+)/,y+"box-$1$2"+x+"flex-$1$2")+e;case 5443:return y+e+x+"flex-item-"+f(e,/flex-|-self/g,"")+(M(e,/flex-|baseline/)?"":x+"grid-row-"+f(e,/flex-|-self/g,""))+e;case 4675:return y+e+x+"flex-line-pack"+f(e,/align-content|flex-|-self/g,"")+e;case 5548:return y+e+x+f(e,"shrink","negative")+e;case 5292:return y+e+x+f(e,"basis","preferred-size")+e;case 6060:return y+"box-"+f(e,"-grow","")+y+e+x+f(e,"grow","positive")+e;case 4554:return y+f(e,/([^-])(transform)/g,"$1"+y+"$2")+e;case 6187:return f(f(f(e,/(zoom-|grab)/,y+"$1"),/(image-set)/,y+"$1"),e,"")+e;case 5495:case 3959:return f(e,/(image-set\([^]*)/,y+"$1$`$1");case 4968:return f(f(e,/(.+:)(flex-)?(.*)/,y+"box-pack:$3"+x+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+y+e+e;case 4200:if(!M(e,/flex-|baseline/))return x+"grid-column-align"+J(e,t)+e;break;case 2592:case 3360:return x+f(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,M(n.props,/grid-\w+-end/)})?~we(e+(r=r[t].value),"span",0)?e:x+f(e,"-start","")+e+x+"grid-row-span:"+(~we(r,"span",0)?M(r,/\d+/):+M(r,/\d+/)-+M(e,/\d+/))+";":x+f(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return M(n.props,/grid-\w+-start/)})?e:x+f(f(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return f(e,/(.+)-inline(.+)/,y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(B(e)-1-t>6)switch(O(e,t+1)){case 109:if(O(e,t+4)!==45)break;case 102:return f(e,/(.+:)(.+)-([^]+)/,"$1"+y+"$2-$3$1"+ce+(O(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~we(e,"stretch",0)?Dt(f(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return f(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,a,u,c,h){return x+o+":"+i+h+(a?x+o+"-span:"+(u?c:+c-+i)+h:"")+e});case 4949:if(O(e,t+6)===121)return f(e,":",":"+y)+e;break;case 6444:switch(O(e,O(e,14)===45?18:11)){case 120:return f(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+y+(O(e,14)===45?"inline-":"")+"box$3$1"+y+"$2$3$1"+x+"$2box$3")+e;case 100:return f(e,":",":"+x)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return f(e,"scroll-","scroll-snap-")+e}return e}function Ce(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Yr(e,t,r,n){switch(e.type){case Ar:if(e.children.length)break;case Ir:case et:return e.return=e.return||e.value;case Rt:return"";case It:return e.return=e.value+"{"+Ce(e.children,n)+"}";case Ie:if(!B(e.value=e.props.join(",")))return""}return B(r=Ce(e.children,n))?e.return=e.value+"{"+r+"}":""}function qr(e){var t=Nt(e);return function(r,n,o,i){for(var a="",u=0;u<t;u++)a+=e[u](r,n,o,i)||"";return a}}function Ur(e){return function(t){t.root||(t=t.return)&&e(t)}}function Kr(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case et:e.return=Dt(e.value,e.length,r);return;case It:return Ce([W(e,{value:f(e.value,"@","@"+y)})],n);case Ie:if(e.length)return Nr(r=e.props,function(o){switch(M(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":K(W(e,{props:[f(o,/:(read-\w+)/,":"+ce+"$1")]})),K(W(e,{props:[o]})),Ye(e,{props:lt(r,n)});break;case"::placeholder":K(W(e,{props:[f(o,/:(plac\w+)/,":"+y+"input-$1")]})),K(W(e,{props:[f(o,/:(plac\w+)/,":"+ce+"$1")]})),K(W(e,{props:[f(o,/:(plac\w+)/,x+"input-$1")]})),K(W(e,{props:[o]})),Ye(e,{props:lt(r,n)});break}return""})}}var Zr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},A={},Q=typeof process<"u"&&A!==void 0&&(A.REACT_APP_SC_ATTR||A.SC_ATTR)||"data-styled",Bt="active",Lt="data-styled-version",Te="6.1.13",rt=`/*!sc*/
`,Oe=typeof window<"u"&&"HTMLElement"in window,Jr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&A!==void 0&&A.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&A.REACT_APP_SC_DISABLE_SPEEDY!==""?A.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&A.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&A!==void 0&&A.SC_DISABLE_SPEEDY!==void 0&&A.SC_DISABLE_SPEEDY!==""&&A.SC_DISABLE_SPEEDY!=="false"&&A.SC_DISABLE_SPEEDY),De=Object.freeze([]),ee=Object.freeze({});function Xr(e,t,r){return r===void 0&&(r=ee),e.theme!==r.theme&&e.theme||t||r.theme}var Mt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Qr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,en=/(^-|-$)/g;function pt(e){return e.replace(Qr,"-").replace(en,"")}var tn=/(a)(d)/gi,be=52,ht=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ke(e){var t,r="";for(t=Math.abs(e);t>be;t=t/be|0)r=ht(t%be)+r;return(ht(t%be)+r).replace(tn,"$1-$2")}var We,Ht=5381,Z=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Ft=function(e){return Z(Ht,e)};function Wt(e){return Ke(Ft(e)>>>0)}function rn(e){return e.displayName||e.name||"Component"}function Ge(e){return typeof e=="string"&&!0}var Gt=typeof Symbol=="function"&&Symbol.for,Vt=Gt?Symbol.for("react.memo"):60115,nn=Gt?Symbol.for("react.forward_ref"):60112,on={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},an={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Yt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sn=((We={})[nn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},We[Vt]=Yt,We);function gt(e){return("type"in(t=e)&&t.type.$$typeof)===Vt?Yt:"$$typeof"in e?sn[e.$$typeof]:on;var t}var cn=Object.defineProperty,un=Object.getOwnPropertyNames,mt=Object.getOwnPropertySymbols,ln=Object.getOwnPropertyDescriptor,fn=Object.getPrototypeOf,yt=Object.prototype;function qt(e,t,r){if(typeof t!="string"){if(yt){var n=fn(t);n&&n!==yt&&qt(e,n,r)}var o=un(t);mt&&(o=o.concat(mt(t)));for(var i=gt(e),a=gt(t),u=0;u<o.length;++u){var c=o[u];if(!(c in an||r&&r[c]||a&&c in a||i&&c in i)){var h=ln(t,c);try{cn(e,c,h)}catch{}}}}return e}function te(e){return typeof e=="function"}function nt(e){return typeof e=="object"&&"styledComponentId"in e}function V(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ze(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function le(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Je(e,t,r){if(r===void 0&&(r=!1),!r&&!le(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Je(e[n],t[n]);else if(le(t))for(var n in t)e[n]=Je(e[n],t[n]);return e}function ot(e,t){Object.defineProperty(e,"toString",{value:t})}function de(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var dn=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw de(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(t+1),c=(a=0,r.length);a<c;a++)this.tag.insertRule(u,r[a])&&(this.groupSizes[t]++,u++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,a=o;a<i;a++)r+="".concat(this.tag.getRule(a)).concat(rt);return r},e}(),ke=new Map,Pe=new Map,Ee=1,ve=function(e){if(ke.has(e))return ke.get(e);for(;Pe.has(Ee);)Ee++;var t=Ee++;return ke.set(e,t),Pe.set(t,e),t},pn=function(e,t){Ee=t+1,ke.set(e,t),Pe.set(t,e)},hn="style[".concat(Q,"][").concat(Lt,'="').concat(Te,'"]'),gn=new RegExp("^".concat(Q,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mn=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},yn=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(rt),o=[],i=0,a=n.length;i<a;i++){var u=n[i].trim();if(u){var c=u.match(gn);if(c){var h=0|parseInt(c[1],10),m=c[2];h!==0&&(pn(m,h),mn(e,m,c[3]),e.getTag().insertRules(h,o)),o.length=0}else o.push(u)}}},bt=function(e){for(var t=document.querySelectorAll(hn),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(Q)!==Bt&&(yn(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function bn(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ut=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(u){var c=Array.from(u.querySelectorAll("style[".concat(Q,"]")));return c[c.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(Q,Bt),n.setAttribute(Lt,Te);var a=bn();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},vn=function(){function e(t){this.element=Ut(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var a=n[o];if(a.ownerNode===r)return a}throw de(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),xn=function(){function e(t){this.element=Ut(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),wn=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),vt=Oe,Sn={isServer:!Oe,useCSSOMInjection:!Jr},Kt=function(){function e(t,r,n){t===void 0&&(t=ee),r===void 0&&(r={});var o=this;this.options=P(P({},Sn),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Oe&&vt&&(vt=!1,bt(this)),ot(this,function(){return function(i){for(var a=i.getTag(),u=a.length,c="",h=function(d){var b=function(j){return Pe.get(j)}(d);if(b===void 0)return"continue";var g=i.names.get(b),S=a.getGroup(d);if(g===void 0||!g.size||S.length===0)return"continue";var E="".concat(Q,".g").concat(d,'[id="').concat(b,'"]'),I="";g!==void 0&&g.forEach(function(j){j.length>0&&(I+="".concat(j,","))}),c+="".concat(S).concat(E,'{content:"').concat(I,'"}').concat(rt)},m=0;m<u;m++)h(m);return c}(o)})}return e.registerId=function(t){return ve(t)},e.prototype.rehydrate=function(){!this.server&&Oe&&bt(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(P(P({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new wn(o):n?new vn(o):new xn(o)}(this.options),new dn(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ve(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ve(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ve(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),$n=/&/g,kn=/^\s*\/\/.*$/gm;function Zt(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Zt(r.children,t)),r})}function En(e){var t,r,n,o=ee,i=o.options,a=i===void 0?ee:i,u=o.plugins,c=u===void 0?De:u,h=function(b,g,S){return S.startsWith(r)&&S.endsWith(r)&&S.replaceAll(r,"").length>0?".".concat(t):b},m=c.slice();m.push(function(b){b.type===Ie&&b.value.includes("&")&&(b.props[0]=b.props[0].replace($n,r).replace(n,h))}),a.prefix&&m.push(Kr),m.push(Yr);var d=function(b,g,S,E){g===void 0&&(g=""),S===void 0&&(S=""),E===void 0&&(E="&"),t=E,r=g,n=new RegExp("\\".concat(r,"\\b"),"g");var I=b.replace(kn,""),j=Gr(S||g?"".concat(S," ").concat(g," { ").concat(I," }"):I);a.namespace&&(j=Zt(j,a.namespace));var $=[];return Ce(j,qr(m.concat(Ur(function(w){return $.push(w)})))),$};return d.hash=c.length?c.reduce(function(b,g){return g.name||de(15),Z(b,g.name)},Ht).toString():"",d}var jn=new Kt,Xe=En(),Jt=N.createContext({shouldForwardProp:void 0,styleSheet:jn,stylis:Xe});Jt.Consumer;N.createContext(void 0);function xt(){return z.useContext(Jt)}var Xt=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Xe);var a=n.name+i.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,i(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,ot(this,function(){throw de(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Xe),this.name+t.hash},e}(),_n=function(e){return e>="A"&&e<="Z"};function wt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;_n(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Qt=function(e){return e==null||e===!1||e===""},er=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Qt(i)&&(Array.isArray(i)&&i.isCss||te(i)?n.push("".concat(wt(o),":"),i,";"):le(i)?n.push.apply(n,ue(ue(["".concat(o," {")],er(i),!1),["}"],!1)):n.push("".concat(wt(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Zr||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function q(e,t,r,n){if(Qt(e))return[];if(nt(e))return[".".concat(e.styledComponentId)];if(te(e)){if(!te(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return q(o,t,r,n)}var i;return e instanceof Xt?r?(e.inject(r,n),[e.getName(n)]):[e]:le(e)?er(e):Array.isArray(e)?Array.prototype.concat.apply(De,e.map(function(a){return q(a,t,r,n)})):[e.toString()]}function Cn(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(te(r)&&!nt(r))return!1}return!0}var On=Ft(Te),Pn=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Cn(t),this.componentId=r,this.baseHash=Z(On,r),this.baseStyle=n,Kt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=V(o,this.staticRulesId);else{var i=Ze(q(this.rules,t,r,n)),a=Ke(Z(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,a)){var u=n(i,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,u)}o=V(o,a),this.staticRulesId=a}else{for(var c=Z(this.baseHash,n.hash),h="",m=0;m<this.rules.length;m++){var d=this.rules[m];if(typeof d=="string")h+=d;else if(d){var b=Ze(q(d,t,r,n));c=Z(c,b+m),h+=b}}if(h){var g=Ke(c>>>0);r.hasNameForId(this.componentId,g)||r.insertRules(this.componentId,g,n(h,".".concat(g),void 0,this.componentId)),o=V(o,g)}}return o},e}(),tr=N.createContext(void 0);tr.Consumer;var Ve={};function Rn(e,t,r){var n=nt(e),o=e,i=!Ge(e),a=t.attrs,u=a===void 0?De:a,c=t.componentId,h=c===void 0?function(k,C){var v=typeof k!="string"?"sc":pt(k);Ve[v]=(Ve[v]||0)+1;var p="".concat(v,"-").concat(Wt(Te+v+Ve[v]));return C?"".concat(C,"-").concat(p):p}(t.displayName,t.parentComponentId):c,m=t.displayName,d=m===void 0?function(k){return Ge(k)?"styled.".concat(k):"Styled(".concat(rn(k),")")}(e):m,b=t.displayName&&t.componentId?"".concat(pt(t.displayName),"-").concat(t.componentId):t.componentId||h,g=n&&o.attrs?o.attrs.concat(u).filter(Boolean):u,S=t.shouldForwardProp;if(n&&o.shouldForwardProp){var E=o.shouldForwardProp;if(t.shouldForwardProp){var I=t.shouldForwardProp;S=function(k,C){return E(k,C)&&I(k,C)}}else S=E}var j=new Pn(r,b,n?o.componentStyle:void 0);function $(k,C){return function(v,p,ne){var pe=v.attrs,or=v.componentStyle,ir=v.defaultProps,ar=v.foldedComponentIds,sr=v.styledComponentId,cr=v.target,ur=N.useContext(tr),lr=xt(),Le=v.shouldForwardProp||lr.shouldForwardProp,it=Xr(p,ur,ir)||ee,L=function(ge,ie,me){for(var ae,G=P(P({},ie),{className:void 0,theme:me}),He=0;He<ge.length;He+=1){var ye=te(ae=ge[He])?ae(G):ae;for(var F in ye)G[F]=F==="className"?V(G[F],ye[F]):F==="style"?P(P({},G[F]),ye[F]):ye[F]}return ie.className&&(G.className=V(G.className,ie.className)),G}(pe,p,it),he=L.as||cr,oe={};for(var H in L)L[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&L.theme===it||(H==="forwardedAs"?oe.as=L.forwardedAs:Le&&!Le(H,he)||(oe[H]=L[H]));var at=function(ge,ie){var me=xt(),ae=ge.generateAndInjectStyles(ie,me.styleSheet,me.stylis);return ae}(or,L),Me=V(ar,sr);return at&&(Me+=" "+at),L.className&&(Me+=" "+L.className),oe[Ge(he)&&!Mt.has(he)?"class":"className"]=Me,oe.ref=ne,z.createElement(he,oe)}(w,k,C)}$.displayName=d;var w=N.forwardRef($);return w.attrs=g,w.componentStyle=j,w.displayName=d,w.shouldForwardProp=S,w.foldedComponentIds=n?V(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=b,w.target=n?o.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=n?function(C){for(var v=[],p=1;p<arguments.length;p++)v[p-1]=arguments[p];for(var ne=0,pe=v;ne<pe.length;ne++)Je(C,pe[ne],!0);return C}({},o.defaultProps,k):k}}),ot(w,function(){return".".concat(w.styledComponentId)}),i&&qt(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function St(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var $t=function(e){return Object.assign(e,{isCss:!0})};function rr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(te(e)||le(e))return $t(q(St(De,ue([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?q(n):$t(q(St(n,t)))}function Qe(e,t,r){if(r===void 0&&(r=ee),!t)throw de(1,t);var n=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,r,rr.apply(void 0,ue([o],i,!1)))};return n.attrs=function(o){return Qe(e,t,P(P({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Qe(e,t,P(P({},r),o))},n}var nr=function(e){return Qe(Rn,e)},R=nr;Mt.forEach(function(e){R[e]=nr(e)});function fo(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Ze(rr.apply(void 0,ue([e],t,!1))),o=Wt(n);return new Xt(o,n)}const In={accent:{light:"#74b49b",main:"#58a18f",dark:"#3a7d6a"},neutral:{white:"#ffffff",black:"#0a0a0a",lightGrey:"#e8e8e8",grey:"#9e9e9e",darkGrey:"#1a1a1a"},background:"#111111",surface:"#1a1a1a",border:"rgba(255, 255, 255, 0.08)",semantic:{cardBackground:"rgba(69, 77, 93, 0.15)",cardBackgroundHighlight:"rgba(69, 77, 93, 0.25)",cardBorder:"rgba(255, 255, 255, 0.08)",cardBorderHighlight:"rgba(255, 255, 255, 0.12)",cardBorderHover:"rgba(255, 255, 255, 0.2)",tagBorder:"rgba(255, 255, 255, 0.15)",tagBackground:"rgba(255, 255, 255, 0.05)",tagBackgroundHover:"rgba(255, 255, 255, 0.1)",navActiveBackground:"rgba(255, 255, 255, 0.08)",navHoverBackground:"rgba(255, 255, 255, 0.05)",navbarBackdrop:"rgba(17, 17, 17, 0.8)",divider:"rgba(255, 255, 255, 0.08)",accentBorder:"rgba(88, 161, 143, 0.4)",accentBackgroundHover:"rgba(88, 161, 143, 0.1)"}},An={primary:{fontFamily:"'Inter', 'Helvetica Neue', Arial, sans-serif"},secondary:{fontFamily:"'Inter', 'Helvetica Neue', Arial, sans-serif"},fontSize:"1rem",lineHeight:{tight:1.2,normal:1.5,relaxed:1.7},letterSpacing:{tight:"-0.02em",normal:"0",wide:"0.02em",wider:"0.05em"},headings:{h1:{fontSize:"3rem",fontWeight:600,lineHeight:1.1,letterSpacing:"-0.02em"},h2:{fontSize:"1.5rem",fontWeight:600,lineHeight:1.2,letterSpacing:"-0.01em"},h3:{fontSize:"1.125rem",fontWeight:500,lineHeight:1.3,letterSpacing:"0"}},body:{fontSize:"1rem",fontWeight:400,lineHeight:1.6,letterSpacing:"0"},tagText:{fontSize:"0.8125rem",fontWeight:500,lineHeight:1.4,letterSpacing:"0.02em"},navText:{fontSize:"0.875rem",fontWeight:400,lineHeight:1.6,letterSpacing:"0"},small:{fontSize:"0.875rem",fontWeight:400,lineHeight:1.5,letterSpacing:"0"},icons:{fontSize:"1.25rem"}},zn={xxs:"4px",xs:"8px",sm:"12px",md:"16px",lg:"24px",xl:"32px","2xl":"48px","3xl":"64px","4xl":"80px"},Nn={smallMobileDevices:"480px",largeMobileDevices:"768px",tablets:"1024px",laptops:"1366px"},Tn={mobile:"@media (min-width: 480px)",tablet:"@media (min-width: 768px)",desktop:"@media (min-width: 1024px)",wide:"@media (min-width: 1366px)"},Dn={sm:"4px",md:"8px",pill:"100px"},Bn={fast:"0.15s ease",normal:"0.2s ease"},Ln={content:"720px",hero:"960px",about:"560px"},s={colors:In,font:An,spacing:zn,responsive:Nn,media:Tn,borderRadius:Dn,transition:Bn,maxWidth:Ln},Mn=R.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,Hn=R.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: ${s.spacing.md} ${s.spacing["3xl"]};
  display: flex;
  justify-content: center;

  @media (max-width: ${s.responsive.largeMobileDevices}) {
    padding: ${s.spacing.sm} ${s.spacing.md};
  }
`,Fn=R.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background-color: ${s.colors.semantic.navbarBackdrop};
  border: 1px solid ${s.colors.border};
  border-radius: ${s.borderRadius.pill};
  padding: ${s.spacing.xxs};

  @media (max-width: ${s.responsive.largeMobileDevices}) {
    width: 100%;
    justify-content: flex-end;
    border-radius: ${s.borderRadius.md};
    padding: 0;
    background-color: transparent;
    border: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`,Wn=R.button`
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${s.colors.neutral.grey};
  cursor: pointer;
  padding: ${s.spacing.sm} ${s.spacing.md};
  border-radius: ${s.borderRadius.md};
  transition: color ${s.transition.fast};
  min-height: 44px;
  min-width: 44px;

  &:hover {
    color: ${s.colors.neutral.white};
  }

  &:focus-visible {
    outline: 2px solid ${s.colors.accent.main};
    outline-offset: 2px;
  }

  @media (max-width: ${s.responsive.largeMobileDevices}) {
    display: flex;
  }
`,Gn=R.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media (max-width: ${s.responsive.largeMobileDevices}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: ${s.spacing.xs};
    flex-direction: column;
    align-items: stretch;
    background-color: ${s.colors.surface};
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid ${s.colors.border};
    border-radius: ${s.borderRadius.md};
    padding: ${({$isOpen:e})=>e?s.spacing.xs:"0"};
    max-height: ${({$isOpen:e})=>e?"400px":"0"};
    overflow: hidden;
    opacity: ${({$isOpen:e})=>e?"1":"0"};
    transition:
      max-height 0.3s ease,
      opacity 0.2s ease,
      padding 0.3s ease;
    pointer-events: ${({$isOpen:e})=>e?"auto":"none"};
  }
`,xe=R(dr)`
  font-family: ${s.font.primary.fontFamily};
  font-size: ${s.font.navText.fontSize};
  font-weight: ${e=>e.active?"500":`${s.font.navText.fontWeight}`};
  line-height: ${s.font.navText.lineHeight};
  letter-spacing: ${s.font.navText.letterSpacing};
  padding: ${s.spacing.xs} ${s.spacing.md};
  border-radius: ${s.borderRadius.pill};
  cursor: pointer;
  transition: all ${s.transition.normal};
  text-decoration: none;
  white-space: nowrap;
  color: ${e=>e.active?s.colors.neutral.white:s.colors.neutral.grey};
  background-color: ${e=>e.active?s.colors.semantic.navActiveBackground:"transparent"};

  &:hover {
    color: ${s.colors.neutral.white};
    background-color: ${s.colors.semantic.navHoverBackground};
  }

  &:focus-visible {
    outline: 2px solid ${s.colors.accent.main};
    outline-offset: 2px;
  }

  @media (max-width: ${s.responsive.largeMobileDevices}) {
    width: 100%;
    text-align: left;
    padding: ${s.spacing.sm} ${s.spacing.md};
    border-radius: ${s.borderRadius.sm};
    font-size: ${s.font.body.fontSize};
  }
`,Vn=()=>{const{pathname:e}=pr(),[t,r]=z.useState(!1),n=z.useCallback(()=>{r(!1)},[]);return z.useEffect(()=>{n()},[e,n]),z.useEffect(()=>{const o=i=>{i.key==="Escape"&&t&&n()};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[t,n]),l.jsx(Hn,{"data-testid":"Navbar","aria-label":"Main navigation",children:l.jsxs(Fn,{children:[l.jsx(Mn,{children:"Navigation menu"}),l.jsx(Wn,{onClick:()=>r(o=>!o),"aria-expanded":t,"aria-controls":"mobile-nav","aria-label":t?"Close menu":"Open menu",children:t?l.jsx(Rr,{size:20,"aria-hidden":"true"}):l.jsx(Pr,{size:20,"aria-hidden":"true"})}),l.jsxs(Gn,{id:"mobile-nav",$isOpen:t,children:[l.jsx(xe,{to:"home",active:e==="/home"||e==="/",onClick:n,children:"Home"}),l.jsx(xe,{to:"experience",active:e.split("/")[1]==="experience",onClick:n,children:"Experience"}),l.jsx(xe,{to:"expertise",active:e.split("/")[1]==="expertise",onClick:n,children:"Expertise"}),l.jsx(xe,{to:"contact",active:e.split("/")[1]==="contact",onClick:n,children:"Contact"})]})]})})},Yn=R.div`
  background-color: ${s.colors.background};
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
  color: ${s.colors.neutral.white};
  font-family: ${s.font.primary.fontFamily};
  flex: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`,qn=R.a`
  position: absolute;
  top: -100%;
  left: ${s.spacing.md};
  z-index: 200;
  padding: ${s.spacing.xs} ${s.spacing.md};
  background-color: ${s.colors.accent.main};
  color: ${s.colors.neutral.black};
  font-size: ${s.font.small.fontSize};
  font-weight: 500;
  font-family: ${s.font.primary.fontFamily};
  border-radius: ${s.borderRadius.sm};
  text-decoration: none;

  &:focus {
    top: ${s.spacing.md};
  }
`,Un=R.main`
  flex: 1;
  width: 100%;
`,Kn=R.div`
  width: 100%;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: ${s.colors.neutral.grey} ${s.colors.surface};

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${s.colors.surface};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${s.colors.neutral.grey};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${s.colors.neutral.lightGrey};
  }
`;function Zn(e){return fe({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Jn(e){return fe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function po(e){return fe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}const Xn=R.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${s.spacing.sm};
  padding: ${s.spacing.lg};
  border-top: 1px solid ${s.colors.border};

  ${s.media.tablet} {
    flex-direction: row;
    gap: ${s.spacing.lg};
    padding: ${s.spacing.lg} ${s.spacing["3xl"]};
  }
`,Qn=R.p`
  font-size: ${s.font.tagText.fontSize};
  font-weight: ${s.font.tagText.fontWeight};
  line-height: ${s.font.tagText.lineHeight};
  letter-spacing: ${s.font.tagText.letterSpacing};
  margin: 0;
  color: ${s.colors.neutral.grey};
`,eo=R.div`
  display: flex;
  gap: ${s.spacing.md};

  a {
    color: ${s.colors.neutral.grey};
    font-size: ${s.font.icons.fontSize};
    transition: color ${s.transition.normal};

    &:hover {
      color: ${s.colors.neutral.white};
    }

    &:focus-visible {
      outline: 2px solid ${s.colors.accent.main};
      outline-offset: 2px;
    }
  }
`,to=()=>l.jsxs(Xn,{"data-testid":"footer","aria-label":"Site footer",children:[l.jsxs(Qn,{children:["© ",new Date().getFullYear()," Raúl Rodríguez. All rights reserved."]}),l.jsxs(eo,{children:[l.jsx("a",{href:"https://github.com/raulrod16124",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub Profile",children:l.jsx(Zn,{"aria-hidden":"true"})}),l.jsx("a",{href:"https://www.linkedin.com/in/raul-rod/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn Profile",children:l.jsx(Jn,{"aria-hidden":"true"})})]})]}),ro="modulepreload",no=function(e){return"/"+e},kt={},Be=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),u=a?.nonce||a?.getAttribute("nonce");o=Promise.allSettled(r.map(c=>{if(c=no(c),c in kt)return;kt[c]=!0;const h=c.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${m}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":ro,h||(d.as="script"),d.crossOrigin="",d.href=c,u&&d.setAttribute("nonce",u),document.head.appendChild(d),h)return new Promise((b,g)=>{d.addEventListener("load",b),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(a){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=a,window.dispatchEvent(u),!u.defaultPrevented)throw a}return o.then(a=>{for(const u of a||[])u.status==="rejected"&&i(u.reason);return t().catch(i)})},Et=z.lazy(()=>Be(()=>import("./Home-Bjs0AQ0B.js"),__vite__mapDeps([0,1])).then(e=>({default:e.Home}))),oo=z.lazy(()=>Be(()=>import("./Experience-eavVY6s5.js"),__vite__mapDeps([2,1])).then(e=>({default:e.Experience}))),io=z.lazy(()=>Be(()=>import("./Expertise-DAnV_-9w.js"),__vite__mapDeps([3,1])).then(e=>({default:e.Expertise}))),ao=z.lazy(()=>Be(()=>import("./Contact-C1b0LmqC.js"),__vite__mapDeps([4,1])).then(e=>({default:e.Contact}))),so=()=>null,co=()=>l.jsx(z.Suspense,{fallback:l.jsx(so,{}),children:l.jsxs(hr,{children:[l.jsx(U,{path:"/",element:l.jsx(Et,{})}),l.jsx(U,{path:"/home",element:l.jsx(Et,{})}),l.jsx(U,{path:"/experience",element:l.jsx(oo,{})}),l.jsx(U,{path:"/expertise",element:l.jsx(io,{})}),l.jsx(U,{path:"/contact",element:l.jsx(ao,{})}),l.jsx(U,{path:"*",element:l.jsx(gr,{to:"/",replace:!0})})]})}),uo=()=>l.jsxs(Yn,{children:[l.jsx(qn,{href:"#main-content",children:"Skip to main content"}),l.jsx(Vn,{}),l.jsx(Un,{id:"main-content","data-testid":"app",children:l.jsx(Kn,{children:l.jsx(co,{})})}),l.jsx(to,{})]});Ct(document.getElementById("root")).render(l.jsx(z.StrictMode,{children:l.jsx(mr,{children:l.jsx(uo,{})})}));export{po as F,Zn as a,Jn as b,R as d,l as j,rr as l,fo as m,s as t};
