import{D as d,d as w,r as x,c as u,n as p,e as r,b as n,u as m,T as k,w as C,m as y,I as _,a as f}from"./index-BhEjnVKk.js";import{b as z}from"./MainLayout-BnjwCZU9.js";/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),j=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,s,t)=>t?t.toUpperCase():s.toLowerCase()),V=o=>{const e=j(o);return e.charAt(0).toUpperCase()+e.slice(1)},$=(...o)=>o.filter((e,s,t)=>!!e&&e.trim()!==""&&t.indexOf(e)===s).join(" ").trim();/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=({size:o,strokeWidth:e=2,absoluteStrokeWidth:s,color:t,iconNode:a,name:i,class:O,...v},{slots:c})=>d("svg",{...l,width:o||l.width,height:o||l.height,stroke:t||l.stroke,"stroke-width":s?Number(e)*24/Number(o):e,class:$("lucide",...i?[`lucide-${b(V(i))}-icon`,`lucide-${b(i)}`]:["lucide-icon"]),...v},[...a.map(g=>d(...g)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(o,e)=>(s,{slots:t})=>d(A,{...s,iconNode:e,name:o},t);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=h("play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=h("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),S=["src","alt"],I={class:"absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100"},D={class:"flex size-28 items-center justify-center rounded-full bg-black/10 backdrop-blur-md"},H={class:"relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b from-black/30 to-black shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]"},L={class:"relative isolate z-[1] size-full overflow-hidden rounded-[16px] md:rounded-[24px] lg:rounded-[32px] border-2 border-white"},P=["src"],M=w({__name:"HeroVideoDialog",props:{animationStyle:{default:"from-center"},videoSrc:{},thumbnailSrc:{},thumbnailAlt:{default:"Video thumbnail"},className:{},size:{}},setup(o){const e=x(!1);return(s,t)=>(f(),u("div",{class:p(["relative",s.className])},[r("div",{class:"group relative cursor-pointer",onClick:t[0]||(t[0]=a=>e.value=!0)},[r("img",{src:s.thumbnailSrc,alt:s.thumbnailAlt,class:p(["object-cover rounded-[16px] md:rounded-[24px] lg:rounded-[32px] shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8]",s.size])},null,10,S),r("div",I,[r("div",D,[r("div",H,[n(m(B),{class:"size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105",style:{filter:"drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))"}})])])])]),n(k,{name:"fade"},{default:C(()=>[e.value?(f(),u("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md",onClick:t[3]||(t[3]=a=>e.value=!1)},[r("div",{class:"relative mx-4 aspect-video w-full max-w-4xl md:mx-0",onClick:t[2]||(t[2]=_(()=>{},["stop"]))},[r("button",{class:"absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black",onClick:t[1]||(t[1]=a=>e.value=!1)},[n(m(N),{class:"size-5"})]),r("div",L,[r("iframe",{src:s.videoSrc,class:"size-full rounded-[16px] md:rounded-[24px] lg:rounded-[32px]",allowfullscreen:"",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"},null,8,P)])])])):y("",!0)]),_:1})],2))}}),Z=z(M,[["__scopeId","data-v-0ae46d89"]]);export{Z as H,B as P,N as X};
