(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{310:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,b=l["".concat(o,".").concat(m)]||l[m]||f[m]||a;return n?i.a.createElement(b,c(c({ref:t},s),{},{components:n})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(310)),o={title:"sig",permalink:"wiki/sig/",layout:"wiki",tags:["Functions"]},c={unversionedId:"reference/time-functions/sig",id:"reference/time-functions/sig",isDocsHomePage:!1,title:"sig",description:"Type:",source:"@site/docs/reference/time-functions/sig.md",slug:"/reference/time-functions/sig",permalink:"/docs/reference/time-functions/sig",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/time-functions/sig.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621614610},p=[],s={toc:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/wiki/Type_signature",title:"wikilink"},"Type"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-haskell"},"sig :: (Time -> a) -> Pattern a\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"sig")," takes a function of time and turns it into a pattern. It's very\nuseful for creating continuous patterns such as ",Object(a.b)("a",{parentName:"p",href:"sine",title:"wikilink"},"sine"),"\nor ",Object(a.b)("a",{parentName:"p",href:"perlin",title:"wikilink"},"perlin"),". For example, ",Object(a.b)("a",{parentName:"p",href:"saw",title:"wikilink"},"saw")," is\ndefined as"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"saw = sig $ \\t -> mod' (fromRational t) 1\n")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/wiki/Category:Time_Functions",title:"wikilink"},"Category:Time Functions")))}u.isMDXComponent=!0}}]);