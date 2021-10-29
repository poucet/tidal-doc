(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{215:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var l=n(0),a=n.n(l);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=l,h=u["".concat(r,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(h,o(o({ref:t},c),{},{components:n})):a.a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var l=n(3),a=n(7),i=(n(0),n(215)),r={title:"Windows",permalink:"wiki/Windows_choco_install/",layout:"wiki"},o={unversionedId:"getting-started/windows_install",id:"getting-started/windows_install",isDocsHomePage:!1,title:"Windows",description:"-----",source:"@site/docs/getting-started/windows_install.md",slug:"/getting-started/windows_install",permalink:"/docs/getting-started/windows_install",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/windows_install.md",version:"current",lastUpdatedBy:"Paul Carlson",lastUpdatedAt:1634968411,sidebar:"docs",previous:{title:"MacOS",permalink:"/docs/getting-started/macos_install"},next:{title:"Start Tidal",permalink:"/docs/getting-started/tidal_start"}},s=[{value:"Automatic installation",id:"automatic-installation",children:[{value:"Installation procedure",id:"installation-procedure",children:[]}]},{value:"Manual installation",id:"manual-installation",children:[{value:"SC3 Plugins",id:"sc3-plugins",children:[]},{value:"SuperDirt",id:"superdirt",children:[]},{value:"Tidal Cycles",id:"tidal-cycles",children:[]}]},{value:"Note for Windows 7 users",id:"note-for-windows-7-users",children:[]},{value:"I&#39;ve installed Tidal Cycles. What&#39;s next?",id:"ive-installed-tidal-cycles-whats-next",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(l.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("h2",{id:"automatic-installation"},"Automatic installation"),Object(i.b)("p",null,"There is an automatic installer for Tidal Cycles for Windows. It will install everything you need, including the required dependencies (",Object(i.b)("a",{parentName:"p",href:"https://git-scm.com/"},"Git"),", ",Object(i.b)("a",{parentName:"p",href:"https://www.haskell.org/ghcup/"},"Haskell"),", ",Object(i.b)("a",{parentName:"p",href:"https://atom.io/"},"Atom Editor"),", ",Object(i.b)("a",{parentName:"p",href:"http://supercollider.github.io/download"},"SuperCollider"),", ",Object(i.b)("a",{parentName:"p",href:"https://github.com/musikinformatik/SuperDirt"},"SuperDirt"),"). The installer assumes that these components aren't installed already. If they are, you might be better off installing all the rest by hand!"),Object(i.b)("h3",{id:"installation-procedure"},"Installation procedure"),Object(i.b)("p",null,"Installation is a three step process. It is mostly automated, but expect\nwindows to give a few security pop-ups for you to accept. Windows 7 users: please report to the specific section at the end of this page."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"I - Starting powershell as administrator")),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"Windows 10 - Hold down the windows key\nand press 'x', then choose Windows PowerShell (admin) in\nthe menu that pops up."),Object(i.b)("li",{parentName:"ul"},"Windows 7 - Click the start button, type ",Object(i.b)("inlineCode",{parentName:"li"},"powershell"),", then\nclick with the right mouse button and choose ",Object(i.b)("strong",{parentName:"li"},"Run as\nAdministrator"),"."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"II - Installing Chocolatey: the package manager")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The ",Object(i.b)("a",{parentName:"p",href:"https://chocolatey.org/"},"Chocolatey")," package\nmanager is required. If you haven't installed it previously, you can\nget it by running this command:"),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",{parentName:"pre",className:"language-shell"}," Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))```\n"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"III - Installing Tidal Cycles")),Object(i.b)("p",null,"Run the following command to install Tidal Cycles using Chocolatey:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"   ",Object(i.b)("inlineCode",{parentName:"p"},"shell choco install tidalcycles "))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Note:")," We are still working on the automatic installer. A lot of confusing information will scroll past. Please ignore messages about restarting Powershell. Just let the process run to the end."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"manual-installation"},"Manual installation"),Object(i.b)("p",null,"You might prefer to install the different components of Tidal Cycles by hand. This is the recommand way for users who already installed some of the components (",Object(i.b)("a",{parentName:"p",href:"https://git-scm.com/"},"Git"),", ",Object(i.b)("a",{parentName:"p",href:"https://www.haskell.org/ghcup/"},"Haskell"),", ",Object(i.b)("a",{parentName:"p",href:"https://atom.io/"},"Atom Editor"),", ",Object(i.b)("a",{parentName:"p",href:"http://supercollider.github.io/download"},"SuperCollider"),", ",Object(i.b)("a",{parentName:"p",href:"https://github.com/musikinformatik/SuperDirt"},"SuperDirt"),"). All these components are needed to install Tidal Cycles."),Object(i.b)("h3",{id:"sc3-plugins"},"SC3 Plugins"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://supercollider.github.io/sc3-plugins/"},"SC3 Plugins")," is needed if you want to use any of the synthesizers included with Tidal Cycles. Most of the examples in the documentation will still work, but your intallation will likely be incomplete without it. You can skip the installation but be sure to come back later to install it if you want."),Object(i.b)("h3",{id:"superdirt"},"SuperDirt"),Object(i.b)("p",null,"SuperDirt is the audio engine used by Tidal. Without it, Tidal Cycles will not emit any sound and will not be able to communicate through OSC or MIDI with other synthesizers. To install it, open SuperCollider and run the following command in the interactive editor (press Ctrl+Return to evaluate):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.7.2"); thisProcess.recompile()})\n')),Object(i.b)("p",null,"The installation will take a little while. You will know when the installation process is done by looking at the logs window. It will likely print something like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"Installing SuperDirt\nInstalling Vowel\nVowel installed\nInstalling Dirt-Samples\nDirt-Samples installed\nSuperDirt installed\ncompiling class library...\n...\n(then some blah blah, and finally, something like:)\n...\n\n\x3c!--T:28--\x3e\n*** Welcome to SuperCollider 3.12.1. *** For help press Ctrl-D.\n")),Object(i.b)("h3",{id:"tidal-cycles"},"Tidal Cycles"),Object(i.b)("p",null,"You will need ",Object(i.b)("a",{parentName:"p",href:"https://www.haskell.org/ghcup/"},"Haskell")," (Ghcup) to install Tidal Cycles. If you just installed it or already got it installed, open ",Object(i.b)("inlineCode",{parentName:"p"},"PowerShell")," in ",Object(i.b)("strong",{parentName:"p"},"administrator mode")," (see above). Enter the following commands:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"cabal\xa0v1-update\ncabal\xa0v1-install\xa0tidal\n")),Object(i.b)("p",null,"The last command might take some time to complete. Be patient, and everything will be alright \ud83d\ude04. "),Object(i.b)("hr",null),Object(i.b)("h2",{id:"note-for-windows-7-users"},"Note for Windows 7 users"),Object(i.b)("p",null,"If you are using Windows 7, some extra preparation is required before installing everything else:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Make sure Windows 7 is up to date with the latest patches."),Object(i.b)("li",{parentName:"ol"},"Install/upgrade to .NET 4.5. You can ",Object(i.b)("a",{parentName:"li",href:"https://www.microsoft.com/en-gb/download/details.aspx?id=30653"},"download it here"),"."),Object(i.b)("li",{parentName:"ol"},"Install Visual C++ redistributable. You can ",Object(i.b)("a",{parentName:"li",href:"https://support.microsoft.com/en-gb/help/2977003/the-latest-supported-visual-c-downloads"},"download it here"))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"ive-installed-tidal-cycles-whats-next"},"I've installed Tidal Cycles. What's next?"),Object(i.b)("p",null,"Look at the sidebar. You will see a list of text editors you can install to interact with Tidal and start playing \ud83d\ude04."))}p.isMDXComponent=!0}}]);