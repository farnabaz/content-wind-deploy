import{f,v as y,p as C,o as t,b as h,x as r,e as w,w as B,c as i,u as l,T as v,s as x,y as b,z as k,A as I,a as z}from"./entry.47dabcf0.js";import{u as S}from"./index.541bebfe.js";/* empty css                                                                                   */const T=o=>(k("data-v-5fa3121e"),o=o(),I(),o),g=T(()=>r("span",{class:"sr-only"},"Copy to clipboard",-1)),A={class:"icon-wrapper"},N=f({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(o){const d=o,{copy:u}=S(),{prose:a}=y(),e=C("init"),_=m=>{u(d.content).then(()=>{e.value="copied",setTimeout(()=>{e.value="init"},1e3)}).catch(s=>{console.warn("Couldn't copy to clipboard!",s)})};return(m,s)=>{const n=b;return t(),h("button",{class:x([(o.show||e.value==="copied")&&"show"]),onClick:_},[g,r("span",A,[w(v,{name:"fade"},{default:B(()=>{var c,p;return[e.value==="copied"?(t(),i(n,{key:0,name:(c=l(a).copyButton)==null?void 0:c.iconCopied,size:"18",class:"copied"},null,8,["name"])):(t(),i(n,{key:1,name:(p=l(a).copyButton)==null?void 0:p.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),$=z(N,[["__scopeId","data-v-5fa3121e"]]);export{$ as default};