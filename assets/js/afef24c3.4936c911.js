(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(208)),o={title:"Adding Synthesizers",id:"adding_synthesizers"},l={unversionedId:"configuration/adding_synthesizers",id:"configuration/adding_synthesizers",isDocsHomePage:!1,title:"Adding Synthesizers",description:"When you install SuperDirt, you also install a small library of default synthesizers. These synths are made specifically for Tidal and SuperDirt. They do sound nice, but at some point you will want to create your own synthesizers. This page will guide you and teach you the basic steps of synthesizer creation for SuperDirt.",source:"@site/docs/configuration/adding_synthesizers.md",slug:"/configuration/adding_synthesizers",permalink:"/docs/configuration/adding_synthesizers",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/adding_synthesizers.md",version:"current",lastUpdatedBy:"Ella Heron",lastUpdatedAt:1639111230,sidebar:"docs",previous:{title:"Adding Global Effects",permalink:"/docs/configuration/adding_global_effects"},next:{title:"MIDI",permalink:"/docs/configuration/MIDIOSC/midi"}},s=[{value:"Building a simple synthesizer",id:"building-a-simple-synthesizer",children:[{value:"Learning SuperCollider",id:"learning-supercollider",children:[]},{value:"SuperDirt template",id:"superdirt-template",children:[]},{value:"Blip-blop state",id:"blip-blop-state",children:[]},{value:"Adapt your synth to SuperDirt",id:"adapt-your-synth-to-superdirt",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"I can hear &#39;clicks&#39;",id:"i-can-hear-clicks",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When you install ",Object(r.b)("strong",{parentName:"p"},"SuperDirt"),", you also install a small library of ",Object(r.b)("em",{parentName:"p"},"default")," synthesizers. These synths are made specifically for ",Object(r.b)("strong",{parentName:"p"},"Tidal")," and ",Object(r.b)("strong",{parentName:"p"},"SuperDirt"),". They do sound nice, but at some point you will want to create your own synthesizers. This page will guide you and teach you the basic steps of synthesizer creation for ",Object(r.b)("strong",{parentName:"p"},"SuperDirt"),"."),Object(r.b)("h2",{id:"building-a-simple-synthesizer"},"Building a simple synthesizer"),Object(r.b)("h3",{id:"learning-supercollider"},"Learning SuperCollider"),Object(r.b)("p",null,"If you want to build new synthesizers for ",Object(r.b)("strong",{parentName:"p"},"Tidal Cycles"),", you will need to learn some rudiments of the ",Object(r.b)("strong",{parentName:"p"},"SuperCollider")," language (",Object(r.b)("em",{parentName:"p"},"SCLang"),") as well. There are many guides, courses and tutorials you can find on the internet. I personnally recommand the ",Object(r.b)("a",{parentName:"p",href:"https://www.youtube.com/user/elifieldsteel"},"Eli Fieldsteel")," YouTube channel. It is the most complete and beginner friendly tutorial you can find. It starts from the very basics up to very advanced topics for the more courageous."),Object(r.b)("p",null,"When you play with ",Object(r.b)("strong",{parentName:"p"},"Tidal Cycles"),", ",Object(r.b)("strong",{parentName:"p"},"SuperCollider")," and ",Object(r.b)("strong",{parentName:"p"},"SuperDirt")," are in charge of handling audio. Everything audio-related on ",Object(r.b)("strong",{parentName:"p"},"Tidal")," will happen on the ",Object(r.b)("strong",{parentName:"p"},"SuperCollider")," side. Even if you haven't planned to learn more about audio synthesis, it is important to keep this architectural distinction in mind."),Object(r.b)("h3",{id:"superdirt-template"},"SuperDirt template"),Object(r.b)("p",null,"Everything starts with this boilerplate ",Object(r.b)("inlineCode",{parentName:"p"},"SynthDef")," that you need to copy and paste in your ",Object(r.b)("strong",{parentName:"p"},"SuperCollider")," interactive editor:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},"SynthDef(\\test, {\n    | out, sustain=1, freq=440, speed=1, begin=0, end=1, pan, accelerate, offset|\n}).add;\n")),Object(r.b)("p",null,"In ",Object(r.b)("strong",{parentName:"p"},"SuperCollider"),", a ",Object(r.b)("inlineCode",{parentName:"p"},"SynthDef")," is a definition of something that will be instantiated as a ",Object(r.b)("inlineCode",{parentName:"p"},"Synth")," node. Don't be affraid of the technical jargon, it just means that we are going to declare a function that will be the definition of our synthesizers."),Object(r.b)("p",null,"Everything inside the ",Object(r.b)("inlineCode",{parentName:"p"},"||")," is a list of arguments: a list of required parameters for our synthesizer to work. You might recognize some ",Object(r.b)("strong",{parentName:"p"},"Tidal")," oddities, such as the ",Object(r.b)("inlineCode",{parentName:"p"},"accelerate")," parameter, or the ",Object(r.b)("inlineCode",{parentName:"p"},"begin")," and ",Object(r.b)("inlineCode",{parentName:"p"},"end")," parameters."),Object(r.b)("p",null,"We give our synthesizer a ",Object(r.b)("inlineCode",{parentName:"p"},"\\name"),", here (",Object(r.b)("inlineCode",{parentName:"p"},"\\test"),"). This way, ",Object(r.b)("inlineCode",{parentName:"p"},"SuperCollider")," will be able to retrieve it on-the-fly from its internal list of synths. The ",Object(r.b)("inlineCode",{parentName:"p"},".add"),' method simply means "add it to the server".'),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"A ",Object(r.b)("inlineCode",{parentName:"p"},"SynthDef")," can be overriden at any moment. You can play a pattern on the ",Object(r.b)("strong",{parentName:"p"},"Tidal")," side and design/recompile your synth on-the-fly. This is a great way to test if your synth works well. "))),Object(r.b)("h3",{id:"blip-blop-state"},"Blip-blop state"),Object(r.b)("p",null,"So far so good. We have an ",Object(r.b)("em",{parentName:"p"},"empty shell")," kind of synth. Strictly speaking, our synth is an audio function, and it lives between the curly brackets ",Object(r.b)("inlineCode",{parentName:"p"},"{}"),". Some of you might like silence, but we want sound."),Object(r.b)("h4",{id:"what-are-ugens"},"What are UGens?"),Object(r.b)("p",null,"We will compose our synth by chaining together ",Object(r.b)("inlineCode",{parentName:"p"},"UGens"),". What is a ",Object(r.b)("inlineCode",{parentName:"p"},"UGen"),"? The ",Object(r.b)("strong",{parentName:"p"},"SuperCollider")," help file tolds us:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"UGens represent calculations with signals. They are the basic building blocks of synth definitions on the server, and are used to generate or process both audio and control signals")),Object(r.b)("p",null,'Think about them as "audio bricks". They are tiny components, each one representing a function or a modification of an incoming signal. Some ',Object(r.b)("inlineCode",{parentName:"p"},"UGens")," are creating signals from scratch (oscillators, enveloppes), some are modifying the signals (filters, resonators), some are distributing it (stereo, ambisonics). ",Object(r.b)("inlineCode",{parentName:"p"},"UGens")," are ubiquitous in computer music, and you might have encountered them already in another language/another software/another form: Max ",Object(r.b)("inlineCode",{parentName:"p"},"~objects"),", modules in modular synthesis, etc... Since the dawn of computer music, there is a convention around the fact that ",Object(r.b)("inlineCode",{parentName:"p"},"UGens"),' have different "rates" depending on their usage:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"audio rate"),": ",Object(r.b)("inlineCode",{parentName:"li"},".ar")," in ",Object(r.b)("strong",{parentName:"li"},"SuperCollider"),". An audio rate ",Object(r.b)("inlineCode",{parentName:"li"},"UGen")," will run at your current audio sample rate, generally ",Object(r.b)("inlineCode",{parentName:"li"},"44.1hz")," per second. ",Object(r.b)("inlineCode",{parentName:"li"},".ar")," signals are used for audible components (oscillators). "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"control rate"),": ",Object(r.b)("inlineCode",{parentName:"li"},".kr")," in ",Object(r.b)("strong",{parentName:"li"},"SuperCollider"),". Control rates are used for signals when the sampling rate is not crucial (enveloppes and LFOs). They are generally running at ",Object(r.b)("inlineCode",{parentName:"li"},"samplerate/some amount"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"initial rate"),": ",Object(r.b)("inlineCode",{parentName:"li"},".ir")," in ",Object(r.b)("strong",{parentName:"li"},"SuperCollider"),". A static non-modulable rate. It is more efficient on the CPU compared to a regular argument. But yeah, sounds like some sort of variable.")),Object(r.b)("h4",{id:"basic-synthesizer"},"Basic synthesizer"),Object(r.b)("p",null,"In the following example, I've arranged everything you need to get a basic synthesizer running:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},"SynthDef(\\test, {\n    | out, sustain=1, freq=440, speed=1, begin=0, end=1, pan, accelerate, offset|\n    var env    = Line.ar(1, 0, sustain);\n    var osc    = SinOsc.ar(freq);\n    var output = osc * env;\n    OffsetOut.ar(out, Pan2.ar(in: output, pos: pan));\n}).add;\n")),Object(r.b)("p",null,"These four lines alone are enough to make a basic synthesizer. Notice that we are introducing new variables using the ",Object(r.b)("inlineCode",{parentName:"p"},"var blabla = ...")," syntax. We added the following components:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"osc"),": ",Object(r.b)("inlineCode",{parentName:"li"},"SinOsc")," is a basic sinuso\xefdal oscillator, running at ",Object(r.b)("inlineCode",{parentName:"li"},"freq")," speed."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"env"),": ",Object(r.b)("inlineCode",{parentName:"li"},"Line")," is a line generator, running from ",Object(r.b)("inlineCode",{parentName:"li"},"1.0")," to ",Object(r.b)("inlineCode",{parentName:"li"},"0.0")," over ",Object(r.b)("inlineCode",{parentName:"li"},"sustain")," seconds."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"output"),": by multiplying ",Object(r.b)("inlineCode",{parentName:"li"},"osc")," by ",Object(r.b)("inlineCode",{parentName:"li"},"env"),", we created an amplitude enveloppe for our synth, turning a continuous signal into discrete notes."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"OffsetOut"),": the audio output itself. The first argument is the buffer we want to write the sound to. If we leave ",Object(r.b)("inlineCode",{parentName:"li"},"out")," unspecified as it is the case here, ",Object(r.b)("strong",{parentName:"li"},"SuperCollider")," will direct the sound to the audio output. How convenient! The following arguments are used to pass the signal ",Object(r.b)("inlineCode",{parentName:"li"},"output")," to the buffer."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Pan2"),": this ",Object(r.b)("inlineCode",{parentName:"li"},"UGen")," will turn our mono signal into a stereo signal.")),Object(r.b)("p",null,"You can test it by running the following pattern with ",Object(r.b)("strong",{parentName:"p"},"Tidal"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1\n  $\xa0cat[\n    note "c ds g bf", note "c ds g bf",\n    note "c f af c6", note "c f af c6"]\n  # s "test"\n')),Object(r.b)("h4",{id:"free-the-synthesizer"},"Free the synthesizer"),Object(r.b)("p",null,"Our synth is currently working but something is wrong. The ",Object(r.b)("inlineCode",{parentName:"p"},"synth")," will never die, meaning that each note we will play will slowly increase the memory usage until audio glitches and other problems start to appear, apparently at random. ",Object(r.b)("strong",{parentName:"p"},"SuperCollider")," can fix that by using ",Object(r.b)("inlineCode",{parentName:"p"},"DoneAction"),". Take a look at this updated version: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},"SynthDef(\\test, {\n    | out, sustain=1, freq=440, speed=1, begin=0, end=1, pan, accelerate, offset|\n    var env    = Line.ar(1, 0, sustain, doneAction: Done.freeSelf);\n    var osc    = SinOsc.ar(freq);\n    var output = osc * env;\n    OffsetOut.ar(out, Pan2.ar(in: output, pos: pan));\n}).add;\n")),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"doneAction")," is ",Object(r.b)("strong",{parentName:"p"},"extremely important"),". Our synth will now free whatever resource it was using while playing. "),Object(r.b)("h3",{id:"adapt-your-synth-to-superdirt"},"Adapt your synth to SuperDirt"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"SuperDirt")," is ",Object(r.b)("strong",{parentName:"p"},"Tidal"),"'s audio engine. If you wish to use your synth with ",Object(r.b)("strong",{parentName:"p"},"SuperDirt"),", there are a couple more things you should take care of. Remember the ",Object(r.b)("inlineCode",{parentName:"p"},"OffsetOut")," part? We will improve it in order to make it compatible with ",Object(r.b)("strong",{parentName:"p"},"Tidal"),". We were hearing sound, but the sound was not managed and handled by ",Object(r.b)("strong",{parentName:"p"},"SuperDirt")," itself but by the ",Object(r.b)("em",{parentName:"p"},"vanilla")," ",Object(r.b)("strong",{parentName:"p"},"SuperCollider")," audio server instance."),Object(r.b)("p",null,"Take a look at this new version of our ",Object(r.b)("inlineCode",{parentName:"p"},"Blip-blop")," synthesizer:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},"SynthDef(\\test, {\n    | out, sustain=1, freq=440, speed=1, begin=0, end=1, pan, accelerate, offset, volume|\n    var env    = Line.ar(1, 0, sustain, doneAction: Done.freeSelf);\n    var osc    = SinOsc.ar(freq);\n    OffsetOut.ar(out,DirtPan.ar(osc, ~dirt.numChannels, pan, env));\n}).add;\n")),Object(r.b)("p",null,"As you can see, we are now using special objects for the audio output: ",Object(r.b)("inlineCode",{parentName:"p"},"DirtPan"),", as well as a reference to ",Object(r.b)("inlineCode",{parentName:"p"},"~dirt.numChannels"),". It a ",Object(r.b)("strong",{parentName:"p"},"SuperDirt")," compatible version of what we were doing so far: outputting in stereo with a ",Object(r.b)("inlineCode",{parentName:"p"},"pan")," parameter. The only difference is that... now it works. Test this synth with the following ",Object(r.b)("strong",{parentName:"p"},"Tidal")," pattern:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1\n  $ superimpose (fast 2 . (|+ note "12 0 24 -12 0"))\n  $\xa0cat[\n    note "c ds g bf", note "c ds g bf",\n    note "c f af c6", note "c f af c6"]\n  # s "test" # pan (slow 2 $ range "-1" 1 $ sine)\n')),Object(r.b)("p",null,"It sounds really nice! Your synth is now totally compatible with ",Object(r.b)("strong",{parentName:"p"},"SuperDirt"),"."),Object(r.b)("p",null,"Note that we changed a few things:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"output"),": it's gone. We didn't needed it. We are now feeding the enveloppe to ",Object(r.b)("inlineCode",{parentName:"li"},"DirtPan")," "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"osc")," is directly fed to ",Object(r.b)("inlineCode",{parentName:"li"},"DirtPan")," as well. ")),Object(r.b)("h4",{id:"bonus-more-complex-synthesis"},"Bonus: more complex synthesis"),Object(r.b)("p",null,"This page taught you to create a synthesizer for ",Object(r.b)("strong",{parentName:"p"},"SuperDirt")," but it is still pretty basic. If you learn a bit more about ",Object(r.b)("strong",{parentName:"p"},"SuperCollider"),", you will be able to refine your ideas. Take a look at the following\xa0",Object(r.b)("inlineCode",{parentName:"p"},"SynthDef"),". Keep the same pattern running, it sounds nice: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"SynthDef(\\elegiac, {\n    | out, sustain=1, freq=440, speed=1, begin=0, end=1, pan, accelerate, offset, volume|\n    var env    = Line.ar(1, 0, sustain, doneAction: Done.freeSelf);\n    var osc    = RLPF.ar(in: SawDPW.ar([freq, freq/2]), freq: SinOsc.ar(pan).range(200,2000));\n    OffsetOut.ar(out,DirtPan.ar(osc, ~dirt.numChannels, pan, env))\n}).add;\n")),Object(r.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)("h3",{id:"i-can-hear-clicks"},"I can hear 'clicks'"),Object(r.b)("p",null,"When using your custom synthesizers for ",Object(r.b)("strong",{parentName:"p"},"Tidal"),", you will sometimes hear 'clicks'. These clicks are breaks/discontinuities in the audio signal. Audio clicks are ubiquitous in computer music, and people are doing everything they can to avoid them and to fix the problem."),Object(r.b)("p",null,"If you can hear audio clicks while playing with your custom ",Object(r.b)("strong",{parentName:"p"},"SuperCollider")," synths, try the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"rewrite your ",Object(r.b)("inlineCode",{parentName:"li"},"SynthDef")," the ",Object(r.b)("strong",{parentName:"li"},"Tidal way")," (see above)."),Object(r.b)("li",{parentName:"ul"},"raise the ",Object(r.b)("inlineCode",{parentName:"li"},"legato")," value in your pattern."),Object(r.b)("li",{parentName:"ul"},"increase the ",Object(r.b)("inlineCode",{parentName:"li"},"fadeTime")," parameter in ",Object(r.b)("strong",{parentName:"li"},"SuperDirt"),":")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},"~dirt.orbits[3].set(\\fadeTime, 0.01);\n~dirt.orbits[4].set(\\fadeTime, 0.1);\n")))}p.isMDXComponent=!0},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);