(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(317)),i={title:"Cycles",id:"cycles"},l={unversionedId:"patternlib/tutorials/cycles",id:"patternlib/tutorials/cycles",isDocsHomePage:!1,title:"Cycles",description:"Tidal Cycles is not using BPM (beats per minute) but a specific measurement called CPS: cycles per second. For Tidal, time is cyclical and not linear. It means that when a cycle ends, a new one will follow. Time is counted in smaller and smaller decrements of cycles per second (e.g. 1/3 of a cycle).",source:"@site/docs/patternlib/tutorials/cycles.md",slug:"/patternlib/tutorials/cycles",permalink:"/docs/patternlib/tutorials/cycles",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/patternlib/tutorials/cycles.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621614610,sidebar:"docs",previous:{title:"Online Course",permalink:"/docs/patternlib/tutorials/online_course"},next:{title:"Patterns",permalink:"/docs/patternlib/tutorials/patterns"}},o=[{value:"Dividing the cycle",id:"dividing-the-cycle",children:[]},{value:"Visualizing cycles",id:"visualizing-cycles",children:[]},{value:"Convert between BPM and CPS",id:"convert-between-bpm-and-cps",children:[]}],s={toc:o};function b(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Tidal Cycles")," is not using ",Object(c.b)("strong",{parentName:"p"},"BPM")," (",Object(c.b)("em",{parentName:"p"},"beats per minute"),") but a specific measurement called ",Object(c.b)("strong",{parentName:"p"},"CPS"),": ",Object(c.b)("em",{parentName:"p"},"cycles per second"),". For Tidal, time is ",Object(c.b)("em",{parentName:"p"},"cyclical")," and not ",Object(c.b)("em",{parentName:"p"},"linear"),". It means that when a cycle ends, a new one will follow. Time is counted in smaller and smaller decrements of ",Object(c.b)("em",{parentName:"p"},"cycles per second")," (e.g. 1/3 of a cycle). "),Object(c.b)("p",null,Object(c.b)("img",{alt:"cycle",src:n(334).default})),Object(c.b)("p",null,"This rather original way of dealing with time can be quite surprising for a musician, because both traditional european notation and modern sequencers are generally linear and deal with the beginning of time and the ending of time. Tidal can ",Object(c.b)("strong",{parentName:"p"},"backtrack")," or ",Object(c.b)("strong",{parentName:"p"},"fastforward")," in time because you can actually predict what will happen in ",Object(c.b)("inlineCode",{parentName:"p"},"x")," cycles or what happened ",Object(c.b)("inlineCode",{parentName:"p"},"x")," cycles ago (well, kinda..)."),Object(c.b)("h2",{id:"dividing-the-cycle"},"Dividing the cycle"),Object(c.b)("p",null,"Don't focus on the syntax so far! Enter the following pattern in your text editor and evaluate it:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0s "bd hh bd hh"\n')),Object(c.b)("p",null,"You just divided a cycle in four equal parts, one for each of the sounds you just triggered. However:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0s "bd hh hh"\n')),Object(c.b)("p",null,"Now, the cycle is being divided in three equal parts, you might have noticed that it slowed down a little. "),Object(c.b)("p",null,"You can superpose patterns that will divide the ",Object(c.b)("inlineCode",{parentName:"p"},"cycle")," in different subdivisions. It means that Tidal is a rather good tool to explore polyrhythmy and rhythmic intricacies: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0s "bd hh hh"\n\nd2 $\xa0s "hh:2 ~ hh:3 cp"\n')),Object(c.b)("h2",{id:"visualizing-cycles"},"Visualizing cycles"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://camo.githubusercontent.com/f47944025244466fd0a024edfe4bd41da8a6ec4f1f9595185be879d780accd5c/68747470733a2f2f692e696d6775722e636f6d2f4d50627048306e2e6a7067",alt:"patternimage"})),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Tidal")," can help you to visualize the output of a given pattern textually or graphically. ",Object(c.b)("a",{parentName:"p",href:"https://github.com/tidalcycles/tidal-vis"},"tidal-vis")," can go even further by turning textual patterns into their visual counterpart. Enter the following pattern: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},'"1 2 3"\n')),Object(c.b)("p",null,"You should see this result in the logs (the ",Object(c.b)("inlineCode",{parentName:"p"},"ghci")," window): "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},'(0>\u2153)|"1"\n(\u2153>\u2154)|"2"\n(\u2154>1)|"3"\n')),Object(c.b)("p",null,"You can also use the ",Object(c.b)("inlineCode",{parentName:"p"},"drawLine")," function to visualize the output of a pattern in the log console. "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},'drawLine "a b*2 d"\n')),Object(c.b)("p",null,"You might get something that looks like this:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},"[11 cycles]\n|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-|a-bbd-\n")),Object(c.b)("h2",{id:"convert-between-bpm-and-cps"},"Convert between BPM and CPS"),Object(c.b)("p",null,"Sometimes, you will need to convert between BPMs and CPS (e.g. synchronization with another musician or machine). The ",Object(c.b)("inlineCode",{parentName:"p"},"setcps")," function is used to change the number of ",Object(c.b)("em",{parentName:"p"},"cycles per second"),". The default number of cycles per second is 0.5625. "),Object(c.b)("p",null,"These two values are equivalent:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"setcps 0.5625"),": Cycles per second, as a decimal."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"setcps (135/60/4)"),": Cycles per second, as a fraction.")),Object(c.b)("p",null,"Representing cycles per second using fractions has the advantage of being more human-readable and more closely aligned with how tempo is commonly represented in music as beats per minute (or bpm). Techno has a range of 120-140 bpm. House has a range of 115-130 bpm. And so on. If we wanted to set the tempo of our Tidal song to fast house, we would do the following: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},"-- Set cps to be a fast house beat\nsetcps (130/60/4)\n")),Object(c.b)("p",null,"Regarding the example above, the first part of the fraction ",Object(c.b)("inlineCode",{parentName:"p"},"130/60"),", says there will be 130 beats per minute. 130 is the number of beats and 60 is the length of the minute (60 seconds). The second part of the fraction ",Object(c.b)("inlineCode",{parentName:"p"},"/4")," says that for every cycle in tidal there will be 4 beats. You can adjust this value to change how quickly your cycles run. "))}b.isMDXComponent=!0},317:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||c;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<c;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},334:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cycle_representation-24efe2cc73b0b5e0ca32a158eed95162.png"}}]);