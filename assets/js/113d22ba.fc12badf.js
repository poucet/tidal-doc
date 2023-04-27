"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8723],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>h});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(l),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return l?a.createElement(h,r(r({ref:t},p),{},{components:l})):a.createElement(h,r({ref:t},p))}));function h(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=l.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,r[1]=o;for(var u=2;u<i;u++)r[u]=l[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},48:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=l(3117),n=(l(7294),l(3905));const i={title:"Windows",permalink:"wiki/Windows_choco_install/",layout:"wiki"},r=void 0,o={unversionedId:"getting-started/windows_install",id:"getting-started/windows_install",title:"Windows",description:"March 15 - STATUS",source:"@site/docs/getting-started/windows_install.md",sourceDirName:"getting-started",slug:"/getting-started/windows_install",permalink:"/docs/getting-started/windows_install",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/windows_install.md",tags:[],version:"current",lastUpdatedAt:1682554454,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{title:"Windows",permalink:"wiki/Windows_choco_install/",layout:"wiki"},sidebar:"docs",previous:{title:"MacOS",permalink:"/docs/getting-started/macos_install"},next:{title:"Start Tidal",permalink:"/docs/getting-started/tidal_start"}},s={},u=[{value:"Automatic installation",id:"automatic-installation",level:2},{value:"Installation procedure",id:"installation-procedure",level:3},{value:"Manual installation",id:"manual-installation",level:2},{value:"Haskel",id:"haskel",level:3},{value:"SuperCollider",id:"supercollider",level:3},{value:"SC3 Plugins",id:"sc3-plugins",level:3},{value:"SuperDirt",id:"superdirt",level:3},{value:"Tidal Cycles",id:"tidal-cycles",level:3},{value:"Pulsar",id:"pulsar",level:3},{value:"Getting Help",id:"getting-help",level:2},{value:"Note for Windows 7 users",id:"note-for-windows-7-users",level:2},{value:"I&#39;ve installed Tidal Cycles. What&#39;s next?",id:"ive-installed-tidal-cycles-whats-next",level:2}],p={toc:u};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"March 15 - STATUS")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"The windows automated installer currently has problems and should NOT be used until this is resolved.")),(0,n.kt)("li",{parentName:"ul"},"Using the Chocolatey ",(0,n.kt)("inlineCode",{parentName:"li"},"choco")," package manager should be avoided until this problem is resolved."),(0,n.kt)("li",{parentName:"ul"},"Use the Manual Installation instructions below.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"April 26 Update"),"\nWe are still working to resolve problems with the automated Chocolatey install. We are also seeing an increase in problems related to the Haskell components. Please follow directions carefully."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Some users have reported success using Chocolatey ",(0,n.kt)("inlineCode",{parentName:"li"},"choco")," commands to install individual packages. Packages that can be done this way include:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SuperCollider"),(0,n.kt)("li",{parentName:"ul"},"Sc3plugins"),(0,n.kt)("li",{parentName:"ul"},"ghc (use version 9.4.4, later or earlier won't work)"),(0,n.kt)("li",{parentName:"ul"},"cabal (use version 3.8.1.0)")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"choco install ghc --version=9.4.4\nchoco install cabal --version=3.8.1.0\n\n# validate versions\nghci --version\ncabal --version\n\nchoco install SuperCollider\nchoco install Sc3plugins\n\n# Tidal install\ncabal update\ncabal v1-install tidal\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Once these are installed successfully, follow the manual instructions below for SuperDirt and Pulsar."),(0,n.kt)("li",{parentName:"ul"},"If the cabal commands for Tidal produce any errors, you will need to resolve them. A common error is failure to install the network-3.1.2.8 package:")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"failed to install network-3.1.2.8",(0,n.kt)("br",{parentName:"p"}),"\n","package has a ./configure script. If on windows, this requires a unix compatibility\ntoolchain such as MinGW+MSYS or Cygwin.")),(0,n.kt)("p",null,"Steps to resolve:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add these values to your system PATH environment variable.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"C:\\tools\\ghc-9.4.4\\mingw\\bin\nC:\\tools\\msys64\\usr\\bin\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"exit and restart powershell"),(0,n.kt)("li",{parentName:"ul"},"remove the previous tidal package install attempt by deleting:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"C:\\Users\\<yourUser>\\AppData\\Roaming\\ghc\\\nC:\\Users\\<yourUser>\\AppData\\Roaming\\cabal\\\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"run the tidal package install commands:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cabal update\ncabal v1-install tidal\n")),(0,n.kt)("p",null,"If tidal still doesn't install cleanly, see the ",(0,n.kt)("a",{parentName:"p",href:"https://tidalcycles.org/docs/troubleshoot/troubleshoot_windows/"},"Troubleshooting on Windows")," page."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"automatic-installation"},"Automatic installation"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE: see above.")," ",(0,n.kt)("em",{parentName:"p"},"Using Chocolatey at this time will install a version of Haskell that is not compatible and you will get errors trying to run Tidal commands.")),(0,n.kt)("p",null,"This method uses the package manager ",(0,n.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"Chocolatey")," and will install everything you need, including required dependencies. Please note that this is a significant install process and takes time, but in the end all components will be ready for use. The installer assumes that these aren't installed already. If you do have some components (SuperCollider, SuperDirt, etc) it is recommended to use Manual install steps for the remaining components (see below)."),(0,n.kt)("p",null,"Components installed via Chocolatey package manager:  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://supercollider.github.io/"},"SuperCollider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://supercollider.github.io/sc3-plugins/"},"sc3-plugins")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.msys2.org/"},"msys2")," - (only needed for the choco install)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.haskell.org/ghcup/"},"Haskell - ghc")," & ",(0,n.kt)("a",{parentName:"li",href:"https://www.haskell.org/cabal/"},"cabal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/musikinformatik/SuperDirt"},"SuperDirt")," with the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/musikinformatik/Dirt-Samples"},"dirt sample library")," and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/supercollider-quarks/Vowel"},"Vowel quark")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pulsar-edit.dev/"},"Pulsar-dev Editor")," with TidalCycles plugin package")),(0,n.kt)("h3",{id:"installation-procedure"},"Installation procedure"),(0,n.kt)("p",null,"Installation has 3 steps. You may get security pop-up windows for you to accept. Windows 7 users: please review the prep steps outlined at the end of this page."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"I - Starting powershell as administrator")),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Windows 10 - Hold down the windows key\nand press 'x', then choose Windows PowerShell (admin) in\nthe menu that pops up."),(0,n.kt)("li",{parentName:"ul"},"Windows 7 - Click the start button, type ",(0,n.kt)("inlineCode",{parentName:"li"},"powershell"),", then\nclick with the right mouse button and choose ",(0,n.kt)("strong",{parentName:"li"},"Run as\nAdministrator"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"II - Installing Chocolatey: the package manager")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"Chocolatey")," package\nmanager is required. If you haven't installed it previously, you can\nget it by running this command:"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))\n"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"III - Installing TidalCycles")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Run the following command to install Tidal Cycles using Chocolatey:"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"choco install tidalcycles\n")),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," The full install will take 30 - 60 minutes. It is best to let it run to the end, but if it exits without completion or if you need to abort - you can try running this command again. Choco will skip over any package dependencies that are already complete.")),(0,n.kt)("p",null,"After the powershell script is finished, you should review the choco install logs for any errors.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"C:\\ProgramData\\chocolatey\\logs\\chocolatey.log")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"IV - Potential problems and fixes")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"SuperCollider quarks install failed for SuperDirt, Dirt Samples, and/or Vowel"),(0,n.kt)("br",{parentName:"li"}),"These can be installed manually within the SuperCollider IDE. See the command to execute in the Manual installation section below."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Tidal package install failed"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You can confirm the status of your tidal install with this command: ",(0,n.kt)("inlineCode",{parentName:"li"},"cabal info tidal"),'. If you get a message that "There is no package named tidal" then something went wrong and you need to run these commands (follow the steps in the Manual Install section):')))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cabal\xa0update\ncabal\xa0v1-install\xa0tidal\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Pulsar install failed"),(0,n.kt)("br",{parentName:"li"}),"Download the installer manually from ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar-edit.dev/"},"Pulsar-dev"),". Once installed, follow the step below to install the TidalCycles plugin package."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Pulsar install succeeded but didn't install the TidalCycles plugin package"),(0,n.kt)("br",{parentName:"li"}),'This can done manually from within Pulsar. From the top menu, open the Package Manager, select Install, then search for TidalCycles, and select install. This will install the TidalCycle package into Pulsar. For more details, see the Pulsar page in the "Get a Text Editor" section.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Haskell (ghc) or cabal install fails."),(0,n.kt)("br",{parentName:"li"}),"You can try running the ",(0,n.kt)("inlineCode",{parentName:"li"},"choco install tidalcycles")," command again. Or you can try installing individual components with choco:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"choco install ghc --version=9.4.4\nchoco install cabal --version=3.8.1.0\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For other problems, see the ",(0,n.kt)("a",{parentName:"li",href:"../troubleshoot/troubleshoot_windows"},"Troubleshooting on Windows")," page.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"manual-installation"},"Manual installation"),(0,n.kt)("p",null,"This method is recommended for users who already have some of the components installed. Until the Automated method is available again, please ensure that all components below are installed."),(0,n.kt)("h3",{id:"haskel"},"Haskel"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Install ghcup (Haskell package installer)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"see ",(0,n.kt)("a",{parentName:"li",href:"https://www.haskell.org/ghcup/"},"Haskell ghcup")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=bB4fmQiUYPw"},"YouTube - windows ghcup install")),(0,n.kt)("li",{parentName:"ul"},"Run this command in Windows Powershell (as admin)")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Powershell"},"Set-ExecutionPolicy Bypass -Scope Process -Force;[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; try { Invoke-Command -ScriptBlock ([ScriptBlock]::Create((Invoke-WebRequest https://www.haskell.org/ghcup/sh/bootstrap-haskell.ps1 -UseBasicParsing))) -ArgumentList $true } catch { Write-Error $_ }\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This should install ghci v9.25. But Tidal 1.9.3+ is only compatible with ghci 9.4.2 / 9.4.4."),(0,n.kt)("li",{parentName:"ul"},"Run these commands from powershell (admin) to get the correct ghc and cabal versions:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Powershell"},"ghcup install ghc 9.4.4\nghcup install cabal 3.8.1.0\nghcup set ghc 9.4.4\nghcup set cabal 3.8.1.0\n\n-- Validate\nghci --version  -- 9.4.4\ncabal --version -- 3.8.1.0\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Be sure to complete the validation steps noted.")),(0,n.kt)("h3",{id:"supercollider"},"SuperCollider"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"https://supercollider.github.io/downloads"},"SuperCollider Downloads")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/supercollider/supercollider"},"SuperCollider Readme"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/supercollider/supercollider/blob/develop/README_WINDOWS.md"},"Windows Readme"))))),(0,n.kt)("h3",{id:"sc3-plugins"},"SC3 Plugins"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://supercollider.github.io/sc3-plugins/"},"SC3 Plugins")," is needed if you want to use any of the synthesizers included with Tidal Cycles. Most of the examples in the documentation will still work, but your installation will likely be incomplete without it. You can skip the installation but be sure to come back later to install it if you want."),(0,n.kt)("h3",{id:"superdirt"},"SuperDirt"),(0,n.kt)("p",null,"SuperDirt is the audio engine used by Tidal. Without it, Tidal Cycles will not emit any sound and will not be able to communicate through OSC or MIDI with other synthesizers. To install it, open SuperCollider and run the following command in the interactive editor (press Ctrl+Return to evaluate):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},'Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.7.3"); thisProcess.recompile()})\n')),(0,n.kt)("p",null,"The installation will take a little while. You will know when the installation process is done by looking at the logs window. It will likely print something like the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"Installing SuperDirt\nInstalling Vowel\nVowel installed\nInstalling Dirt-Samples\nDirt-Samples installed\nSuperDirt installed\ncompiling class library...\n...\n(then some blah blah, and finally, something like:)\n...\n\n\x3c!--T:28--\x3e\n*** Welcome to SuperCollider 3.12.1. *** For help press Ctrl-D.\n")),(0,n.kt)("h3",{id:"tidal-cycles"},"Tidal Cycles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make sure your Haskell environment is correct (above) and that you have ghci v9.4.4. (v9.2.5 and 9.6.1 won't work with Tidal on Windows.)  "),(0,n.kt)("li",{parentName:"ul"},"Open ",(0,n.kt)("inlineCode",{parentName:"li"},"PowerShell")," in ",(0,n.kt)("strong",{parentName:"li"},"administrator mode")," (see above)."),(0,n.kt)("li",{parentName:"ul"},"Enter the following commands:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cabal\xa0update\ncabal\xa0v1-install\xa0tidal\n")),(0,n.kt)("p",null,"Make sure to use ",(0,n.kt)("inlineCode",{parentName:"p"},"v1-install"),", as ",(0,n.kt)("inlineCode",{parentName:"p"},"v2-install tidal")," ",(0,n.kt)("em",{parentName:"p"},"may not work"),".\nThe last command might take some time to complete. Be patient \ud83d\ude04."),(0,n.kt)("h3",{id:"pulsar"},"Pulsar"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar-edit.dev/download.html"},"Pulsar-edit Downloads")," to download and install."),(0,n.kt)("li",{parentName:"ul"},"OR go to the Pulsar page under Installation > Get a Text Editor  section in the left navigation pane."),(0,n.kt)("li",{parentName:"ul"},"Once you have Pulsar, you need the TidalCycles plugin. Use the Pulsar Package Manager. See details on our Pulsar page.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"getting-help"},"Getting Help"),(0,n.kt)("p",null,"If you are having trouble with installation, here are options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Review this page carefully and make sure you are following all instructions.  "),(0,n.kt)("li",{parentName:"ul"},"For individual component problems - such as SuperCollider and SuperDirt - check their ReadMe pages in GitHub:  ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/supercollider/supercollider"},"SuperCollider Readme")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/musikinformatik/SuperDirt"},"SuperDirt Readme")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discord.com/channels/779427371270275082/779487905822801930"},"TidalCycles Discord - Installation Help Channel"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Try searching this channel to see if your problem has been experienced by others"),(0,n.kt)("li",{parentName:"ul"},"Be sure to post details - what exact problem, error messages, what Windows version, etc."),(0,n.kt)("li",{parentName:"ul"},'See the "how to ask" channel for more about getting help from our community'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://club.tidalcycles.org/"},"Forums - Tidal Club"),"  A lot of smart people hang out here."),(0,n.kt)("li",{parentName:"ul"},"Don't get discouraged! Tidal has a complex stack, but these components are all proven, robust and stable. Once it is all working, it rarely needs to have any attention.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"note-for-windows-7-users"},"Note for Windows 7 users"),(0,n.kt)("p",null,"If you are using Windows 7, some extra preparation is required before installing everything else:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Make sure Windows 7 is up to date with the latest patches."),(0,n.kt)("li",{parentName:"ol"},"Install/upgrade to .NET 4.5. You can ",(0,n.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-gb/download/details.aspx?id=30653"},"download it here"),"."),(0,n.kt)("li",{parentName:"ol"},"Install Visual C++ redistributable. You can ",(0,n.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-gb/help/2977003/the-latest-supported-visual-c-downloads"},"download it here"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"ive-installed-tidal-cycles-whats-next"},"I've installed Tidal Cycles. What's next?"),(0,n.kt)("p",null,"Look at the sidebar. You will see a list of text editors you can install to interact with Tidal and start playing \ud83d\ude04."))}c.isMDXComponent=!0}}]);