"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const o={id:"TidalCycles",title:"Documentation Reference | Tidal Cycles",sidebar_label:"What is Tidal Cycles?",slug:"/",description:"Live coding environment for making algorithmic patterns"},i=void 0,l={unversionedId:"TidalCycles",id:"TidalCycles",title:"Documentation Reference | Tidal Cycles",description:"Live coding environment for making algorithmic patterns",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/index.md",tags:[],version:"current",lastUpdatedAt:1683316991,formattedLastUpdatedAt:"May 5, 2023",frontMatter:{id:"TidalCycles",title:"Documentation Reference | Tidal Cycles",sidebar_label:"What is Tidal Cycles?",slug:"/",description:"Live coding environment for making algorithmic patterns"},sidebar:"docs",next:{title:"Meet the community",permalink:"/docs/community"}},s={},c=[{value:"Contribute",id:"contribute",level:2},{value:"Credits",id:"credits",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"nutshell",src:n(7277).Z,width:"1143",height:"684"})),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/Tidal"},"Tidal Cycles")," (or just ",(0,a.kt)("strong",{parentName:"p"},"Tidal")," for short) is software for making patterns with code, whether live coding music at algoraves or composing in the studio. It includes a simple and flexible notation\nfor rhythmic sequences, and an extensive library of patterning functions for combining and transforming them. This allows you to quickly create complex patterns from simple ingredients."),(0,a.kt)("p",null,"By default, sound is made with the featureful ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/musikinformatik/SuperDirt"},"SuperDirt"),"\nsynth/sampler, but you can control other synths using Open Sound\nControl (",(0,a.kt)("strong",{parentName:"p"},"OSC"),") or ",(0,a.kt)("strong",{parentName:"p"},"MIDI"),". Whether you're using ",(0,a.kt)("strong",{parentName:"p"},"SuperDirt")," or a synth, every\nfilter and effect can be manipulated independently with ",(0,a.kt)("strong",{parentName:"p"},"Tidal"),"\npatterns. Tidal is embedded in the ",(0,a.kt)("strong",{parentName:"p"},"Haskell")," language, although you don't have to learn ",(0,a.kt)("strong",{parentName:"p"},"Haskell")," to learn ",(0,a.kt)("strong",{parentName:"p"},"Tidal"),"."),(0,a.kt)("p",null,"You can learn ",(0,a.kt)("strong",{parentName:"p"},"Tidal")," through experimentation and play - most ",(0,a.kt)("strong",{parentName:"p"},"Tidal"),"\ncoders have little or no experience in software engineering."),(0,a.kt)("h2",{id:"contribute"},"Contribute"),(0,a.kt)("p",null,"If you enjoy using ",(0,a.kt)("strong",{parentName:"p"},"Tidal Cycles"),", please consider contributing to the ",(0,a.kt)("a",{parentName:"p",href:"https://opencollective.com/tidalcycles"},"Tidal Cycles Open Collective crowdfunding project"),". From the project page:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As the Tidal community grows, this opencollective fund will accept donations towards development and documentation initiatives for the project, and potentially artist development opportunities. The overall aims will be:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"To develop free/open source software that reimagines computer programming as a live interface for musicians and other artists to creatively explore patterns."),(0,a.kt)("li",{parentName:"ul"},"To make the software more accessible, including through documentation, translation and design, and encourage contributions from more people"),(0,a.kt)("li",{parentName:"ul"},"To foster a community of contributors and other users from diverse backgrounds."))),(0,a.kt)("h2",{id:"credits"},"Credits"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tidal Cycles")," and ",(0,a.kt)("strong",{parentName:"p"},"SuperDirt")," have been developed with contributions from a wide range of people - ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/Tidal/graphs/contributors"},"Tidal contributors")," / ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/musikinformatik/SuperDirt/graphs/contributors"},"SuperDirt contributors"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tidal Cycles")," was initiated by Alex McLean around 2009 during doctoral work funded by EPSRC. Alex' ongoing work on Tidal has been supported in part by various ad-hoc contributors, and grants (eg the ",(0,a.kt)("a",{parentName:"p",href:"https://penelope.hypotheses.org/"},"PENELOPE")," project, under the Horizon 2020 research and innovation programme of the European Union, grant agreement No 682711)."),(0,a.kt)("p",null,"In 2021, Alex moved the project's public financial contribution support model from an individual/personal contribution type (via Ko-fi), to a an Organisational Model via the ",(0,a.kt)("a",{parentName:"p",href:"https://opencollective.com/tidalcycles"},"OpenCollective platform"),", at the same time appointing an experienced admin team to handle the ongoing project accounting in a transparent and ethical manner."),(0,a.kt)("p",null,"TidalCycles has been heavily inspired by the work of many others including Bernard Bel, Laurie Spiegel and Adrian Ward."))}d.isMDXComponent=!0},7277:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tidalnutshell-38b607d4019226543a862b092696377e.png"}}]);