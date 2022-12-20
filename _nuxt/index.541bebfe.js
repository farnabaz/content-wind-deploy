import{p as m,u as x,l as A,B as Q,C as N,D as B,E as L,i as F,F as W}from"./entry.47dabcf0.js";var I;const y=typeof window<"u",D=e=>typeof e=="string",M=()=>{};y&&((I=window==null?void 0:window.navigator)==null?void 0:I.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function w(e){return typeof e=="function"?e():x(e)}function R(e){return e}function h(e){return B()?(L(e),!0):!1}function U(e,t=!0){A()?Q(e):t?e():N(e)}function j(e,t,n={}){const{immediate:a=!0}=n,u=m(!1);let r=null;function f(){r&&(clearTimeout(r),r=null)}function c(){u.value=!1,f()}function d(...i){f(),u.value=!0,r=setTimeout(()=>{u.value=!1,r=null,e(...i)},w(t))}return a&&(u.value=!0,y&&d()),h(c),{isPending:u,start:d,stop:c}}function k(e){var t;const n=w(e);return(t=n==null?void 0:n.$el)!=null?t:n}const G=y?window:void 0;y&&window.document;const H=y?window.navigator:void 0;y&&window.location;function K(...e){let t,n,a,u;if(D(e[0])||Array.isArray(e[0])?([n,a,u]=e,t=G):[t,n,a,u]=e,!t)return M;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const r=[],f=()=>{r.forEach(s=>s()),r.length=0},c=(s,p,v)=>(s.addEventListener(p,v,u),()=>s.removeEventListener(p,v,u)),d=W(()=>k(t),s=>{f(),s&&r.push(...n.flatMap(p=>a.map(v=>c(s,p,v))))},{immediate:!0,flush:"post"}),i=()=>{d(),f()};return h(i),i}function V(e,t=!1){const n=m(),a=()=>n.value=Boolean(e());return a(),U(a,t),n}function Z(e={}){const{navigator:t=H,read:n=!1,source:a,copiedDuring:u=1500,legacy:r=!1}=e,f=["copy","cut"],c=V(()=>t&&"clipboard"in t),d=F(()=>c.value||r),i=m(""),s=m(!1),p=j(()=>s.value=!1,u);function v(){c.value?t.clipboard.readText().then(o=>{i.value=o}):i.value=S()}if(d.value&&n)for(const o of f)K(o,v);async function T(o=w(a)){d.value&&o!=null&&(c.value?await t.clipboard.writeText(o):P(o),i.value=o,s.value=!0,p.start())}function P(o){const l=document.createElement("textarea");l.value=o!=null?o:"",l.style.position="absolute",l.style.opacity="0",document.body.appendChild(l),l.select(),document.execCommand("copy"),l.remove()}function S(){var o,l,_;return(_=(l=(o=document==null?void 0:document.getSelection)==null?void 0:o.call(document))==null?void 0:l.toString())!=null?_:""}return{isSupported:d,text:i,copied:s,copy:T}}const O=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g="__vueuse_ssr_handlers__";O[g]=O[g]||{};O[g];var b;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(b||(b={}));var $=Object.defineProperty,E=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,J=(e,t)=>{for(var n in t||(t={}))q.call(t,n)&&C(e,n,t[n]);if(E)for(var n of E(t))z.call(t,n)&&C(e,n,t[n]);return e};const X={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};J({linear:R},X);export{Z as u};
