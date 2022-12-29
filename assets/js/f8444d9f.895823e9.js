"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=i(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(3117),o=(n(7294),n(3905));const a={title:"Tempo",id:"tempo"},c=void 0,s={unversionedId:"reference/tempo",id:"reference/tempo",title:"Tempo",description:"There are multiple functions that you can use to change the tempo. Tidal uses a cycles per second representation of time. It means that Tempo and Cycles are linked together. If you need to learn more about Cycles, check the sidebar for more information.",source:"@site/docs/reference/tempo.md",sourceDirName:"reference",slug:"/reference/tempo",permalink:"/docs/reference/tempo",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/tempo.md",tags:[],version:"current",lastUpdatedBy:"Joan Queralt",lastUpdatedAt:1672355832,formattedLastUpdatedAt:"Dec 29, 2022",frontMatter:{title:"Tempo",id:"tempo"},sidebar:"reference",previous:{title:"Controls",permalink:"/docs/reference/controls"},next:{title:"Transitions",permalink:"/docs/reference/transitions"}},p={},i=[{value:"setcps",id:"setcps",level:2},{value:"cps",id:"cps",level:2}],l={toc:i};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are multiple functions that you can use to change the tempo. Tidal uses a ",(0,o.kt)("em",{parentName:"p"},"cycles per second")," representation of time. It means that ",(0,o.kt)("strong",{parentName:"p"},"Tempo")," and ",(0,o.kt)("strong",{parentName:"p"},"Cycles")," are linked together. If you need to learn more about ",(0,o.kt)("strong",{parentName:"p"},"Cycles"),", check the sidebar for more information."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cycle",src:n(2894).Z,width:"829",height:"247"})),(0,o.kt)("h2",{id:"setcps"},"setcps"),(0,o.kt)("p",null,"Just give it the number of ",(0,o.kt)("em",{parentName:"p"},"cycles per second"),", for example if your cycle has two beats in, this will be the equivalent of 120 bpm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"setcps 1\n")),(0,o.kt)("h2",{id:"cps"},"cps"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cps")," is no longer a standalone function (",(0,o.kt)("inlineCode",{parentName:"p"},"setcps")," above now does this), but a control pattern (see Controls in the sidebar). Patterning ",(0,o.kt)("inlineCode",{parentName:"p"},"cps")," is fun. Patterns don't (yet) have independent tempos though, if you change it on one pattern, it changes on all of them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'p "cpsfun" $ s "bd sd(3,8)" # cps (slow 8 $ 0.5 + saw)\n')))}u.isMDXComponent=!0},2894:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cycle_representation-24efe2cc73b0b5e0ca32a158eed95162.png"}}]);