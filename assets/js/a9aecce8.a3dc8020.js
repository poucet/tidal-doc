"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6538],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,m=c["".concat(i,".").concat(d)]||c[d]||h[d]||s;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2631:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(3117),r=(a(7294),a(3905));const s={title:"What is a pattern",permalink:"wiki/What_is_a_pattern?/",layout:"wiki",tags:["Reference|Pattern"]},l=void 0,o={unversionedId:"advanced/understanding-innards/What_is_a_pattern",id:"advanced/understanding-innards/What_is_a_pattern",title:"What is a pattern",description:"In Tidal, what is a pattern? There are a lot of ways of",source:"@site/docs/advanced/understanding-innards/What_is_a_pattern.md",sourceDirName:"advanced/understanding-innards",slug:"/advanced/understanding-innards/What_is_a_pattern",permalink:"/docs/advanced/understanding-innards/What_is_a_pattern",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/advanced/understanding-innards/What_is_a_pattern.md",tags:[{label:"Reference|Pattern",permalink:"/docs/tags/reference-pattern"}],version:"current",lastUpdatedBy:"Bernard Gray",lastUpdatedAt:1674584557,formattedLastUpdatedAt:"Jan 24, 2023",frontMatter:{title:"What is a pattern",permalink:"wiki/What_is_a_pattern?/",layout:"wiki",tags:["Reference|Pattern"]},sidebar:"advanced",next:{title:"Type signatures",permalink:"/docs/advanced/understanding-innards/Type_signatures"}},i={},p=[],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Tidal, what ",(0,r.kt)("em",{parentName:"p"},"is")," a pattern? There are a lot of ways of\nanswering this question. A technical definition is that under the hood,\na pattern is a function from time to events. You give a pattern a start\nand end time, and it gives you back the events that are active (in part\nor in whole) during that timespan. An event is itself a value with a\nstart and end time."),(0,r.kt)("p",null,"This is mostly hidden when it comes to using Tidal to make music, but\nlets have a closer look at the innards of a really simple pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},'"1 2 3"\n')),(0,r.kt)("p",null,"The above might look like a string, but Tidal quietly parses it into a\npattern for you (using a hidden function called parseBP_E). We can ask\nthat pattern for values by casting the string pattern to a Tidal pattern\nby appending"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},":: Pattern String\n")),(0,r.kt)("p",null,"to the pattern string. You're kind of telling Tidal to treat this string\nas a pattern and show you what it sees:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},'"1 2 3" :: Pattern String\n')),(0,r.kt)("p",null,"If you run the above, you should see the contents of the first cycle in\nthe output buffer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},'(0>\u2153)|"1"\n(\u2153>\u2154)|"2"\n(\u2154>1)|"3"\n')),(0,r.kt)("p",null,"From that we can see the first event"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"1\n")),(0,r.kt)("p",null,"is active for the first third of the cycle, and so on."),(0,r.kt)("p",null,"So a pattern is a function from a timespan (also known as an ",(0,r.kt)("em",{parentName:"p"},"arc"),"), to\nvalues with each have a beginning and end. A function like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"rev\n")),(0,r.kt)("p",null,", is therefore a combinator, which takes such a function as input, and\ngives a new function as output (with input and output timing\nmanipulations baked-in, in order to reverse the pattern)."),(0,r.kt)("h1",{id:"the-pattern-types"},"The Pattern types"),(0,r.kt)("p",null,"That's the basics, lets have a look at some code. The core\nrepresentation for patterns is in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/Tidal/blob/master/src/Sound/Tidal/Pattern.hs"},"Sound.Tidal.Pattern"),"\nmodule. The core representation is in the ten or so lines at the top.\nLets step through it. Some Haskell knowledge will be helpful here, but\nyou will hopefully get the gist even without software development\nexperience."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"-- | Time is rational\ntype Time = Rational\n")),(0,r.kt)("p",null,"The above states that time is rational. This means that rather than\nrepresenting time as integers (whole numbers), or as floating point\nnumbers, Tidal represents time as a ratio of ",(0,r.kt)("em",{parentName:"p"},"two")," integers. This means\nthat for example a third can be represented precisely, as one over\nthree. Music is of course full of such ratios, and not representing them\nas such can cause a great deal of problems.. Basically, this means that\nif you add three one-thirds together, you'll get a whole. Seems obvious\nbut not all systems do this!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"-- | A time arc (start and end)\ntype Arc = (Time, Time)\n")),(0,r.kt)("p",null,"This is the representation of an arc, or timespan. We like to call this\na time arc rather than a time span, because in Tidal the notion of time\nis cyclic. Here the two time values are simply the beginning and end of\nan arc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"-- | The second arc (the part) should be equal to or fit inside the\n-- first one (the whole that it's a part of).\ntype Part = (Arc, Arc)\n")),(0,r.kt)("p",null,"Tidal often needs to represent ",(0,r.kt)("em",{parentName:"p"},"part")," of an arc. It does so with two\narcs, the first representing the whole of the part, and the second the\npart itself. Often both arcs will be the same, which simply means that\nwe have a whole that has a single part."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"-- | An event is a value that's active during a timespan\ntype Event a = (Part, a)\n")),(0,r.kt)("p",null,"An ",(0,r.kt)("em",{parentName:"p"},"event")," then, consists of a part, and a value of type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"a\n")),(0,r.kt)("p",null,". This"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"a\n")),(0,r.kt)("p",null,"can stand for ",(0,r.kt)("em",{parentName:"p"},"any")," type (but you can only have events of the same type\nin any one pattern). For example you can have a pattern of words, of\nnumbers, of colours or even of other patterns.."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"data State = State {arc :: Arc,\n                    controls :: ControlMap\n                   }\n")),(0,r.kt)("p",null,"Since version 1.0.0, Tidal patterns can also respond to changing state\nas well as progressing time. So the above represents the entire input to\na Tidal pattern, the current timespan, and the current state of external\ncontrollers (whether MIDI controllers, or other software). What is\ninteresting is that the current time (the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"arc\n")),(0,r.kt)("p",null,"isn't a point in time, but an arc, or timespan. This aligns with the\nidea of the psychological 'specious present' having a duration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"-- | A function that represents events taking place over time\ntype Query a = (State -> [Event a])\n")),(0,r.kt)("p",null,"Here is that function from time to events we were talking about earlier.\nWe simplified a bit - it's a function from a timespan plus some\nadditional state, to events. Notice the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"a\n")),(0,r.kt)("p",null,"is carried from the type of the events to the type of the query. This\nagain shows how a particular pattern can only represent events of the\nsame type."),(0,r.kt)("p",null,"Notice also that a list of events is returned (denoted by the square\nbrackets). This simply means that tidal supports polyphony - many events\ncan take place at the same time. Remember though that each event has its\nown arc; two events might be returned for the same timespan, but they\nmay well not start and end at the same time, and might not overlap at\nall."),(0,r.kt)("p",null,"It may also be that the arc of an event might extend outside the arc in\nthe query state. This is one case where we get part of an arc back - the\npart will be the intersection of the arc of the query and that of the\nevent."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"-- | Also known as Continuous vs Discrete/Amorphous vs Pulsating etc.\ndata Nature = Analog | Digital\n            deriving Eq\n")),(0,r.kt)("p",null,"An important feature of Tidal is that you can accurately compose\nanalogue (continuous) and digital (discrete) patterns together. For\nexample it can be nice to multiply a discrete pattern of notes by a\ncontinuously varying sinewave. It's a bit of a myth that computers can\nonly represent digital structures, but when it comes to combining\nanalogue and digital patterns together, it's useful to be able to know\nwhich is which, hence the above datatype for doing that."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"-- | A datatype that's basically a query, plus a hint about whether its events\n-- are Analogue or Digital by nature\ndata Pattern a = Pattern {nature :: Nature, query :: Query a}\n")),(0,r.kt)("p",null,"Here finally we arrive at the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"Pattern\n")),(0,r.kt)("p",null,"datatype, which simply consists of an either digital or analogue nature,\nplus a query for calculating events for a particular timespan."),(0,r.kt)("p",null,"The only thing we haven't done is define what the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"ControlMap\n")),(0,r.kt)("p",null,"type is that we saw earlier. As well as being used to represent\ncontroller state, it's part of the definition of one more type, the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"ControlPattern\n")),(0,r.kt)("p",null,", here we go:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"data Value = VS { svalue :: String }\n           | VF { fvalue :: Double }\n           | VI { ivalue :: Int }\n           deriving (Eq,Ord,Typeable,Data)\n\n\x3c!--T:32--\x3e\ntype ControlMap = Map.Map String Value\ntype ControlPattern = Pattern ControlMap\n")),(0,r.kt)("p",null,"A"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"ControlMap\n")),(0,r.kt)("p",null,"is simply a dictionary (or map) for storing some values by name (using a\nstring). As well as using it for external control values within the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"State\n")),(0,r.kt)("p",null,"datatype, we also use it to make"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"ControlPattern\n")),(0,r.kt)("p",null,"s","."," They are simply patterns of controlmaps, and are used for\nrepresenting patterns of synthesiser messages. So for example the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"speed\n")),(0,r.kt)("p",null,"function in"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},'sound "bd sn" # speed "2 3"\n')),(0,r.kt)("p",null,") turns a pattern of numbers into a pattern of controlmaps, the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"sound\n")),(0,r.kt)("p",null,"turns a pattern of words into a pattern of controlmaps, and the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Haskell"},"#\n")),(0,r.kt)("p",null,"composes them together into a new pattern of controlmaps. Feel free to\ncomment on the discussion page if something is unclear!"))}c.isMDXComponent=!0}}]);