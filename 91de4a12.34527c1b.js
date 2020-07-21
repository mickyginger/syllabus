(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(9),r=(n(0),n(281)),i={id:"processing-js-workshop",title:"Processing.js Workshop",sidebar_label:"Processing.js Workshop"},s={id:"workshops/processing-js-workshop",title:"Processing.js Workshop",description:"If you enjoyed using JavaScript to make drawings and animations, we recommend further study and play with the almost identical p5.js library. It's better.",source:"@site/docs/workshops/processing-js-workshop.md",permalink:"/workshops/processing-js-workshop",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/workshops/processing-js-workshop.md",sidebar_label:"Processing.js Workshop"},c=[{value:"Where to start coding with p5.js",id:"where-to-start-coding-with-p5js",children:[]},{value:"Why change?",id:"why-change",children:[{value:"Pick one element at random from an array",id:"pick-one-element-at-random-from-an-array",children:[]}]},{value:"Best place to learn p5.js",id:"best-place-to-learn-p5js",children:[]},{value:"What&#39;s OpenProcessing.org?",id:"whats-openprocessingorg",children:[{value:"When you read others&#39; code and it makes no sense...",id:"when-you-read-others-code-and-it-makes-no-sense",children:[]}]},{value:"Other courses",id:"other-courses",children:[]},{value:"Some more differences between Processing.js and p5.js",id:"some-more-differences-between-processingjs-and-p5js",children:[{value:"You must always define the <code>draw()</code> function",id:"you-must-always-define-the-draw-function",children:[]},{value:"You can provide a <code>setup()</code> function for set-up",id:"you-can-provide-a-setup-function-for-set-up",children:[]},{value:"If you <em>don&#39;t</em> want animation, you must call <code>noLoop()</code>",id:"if-you-dont-want-animation-you-must-call-noloop",children:[]},{value:"You can&#39;t call Processing.js functions at the top level",id:"you-cant-call-processingjs-functions-at-the-top-level",children:[]},{value:"Global variables must be initialised in <code>setup()</code>, if they need p5.js functions",id:"global-variables-must-be-initialised-in-setup-if-they-need-p5js-functions",children:[]},{value:"The default canvas is only 100, 100...",id:"the-default-canvas-is-only-100-100",children:[]}]},{value:"Where&#39;s the documentation?",id:"wheres-the-documentation",children:[]},{value:"Other migration guides",id:"other-migration-guides",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If you enjoyed using JavaScript to make drawings and animations, we recommend further study and play with the almost identical p5.js library. It's better."),Object(r.b)("h2",{id:"where-to-start-coding-with-p5js"},"Where to start coding with p5.js"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We recommend the site called ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.openprocessing.org/"}),"OpenProcessing")," - it makes it easy to click ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.openprocessing.org/sketch/create"}),'"new sketch"')," and start immediately",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Alternatively, ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.openprocessing.org/sketch/812085"}),"here's a starting sketch")," that defines functions the way you have learned so far"))),Object(r.b)("li",{parentName:"ul"},"If you want to use CodePen, here's a ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://codepen.io/enz0/pen/vYEXyZr?editors=1010"}),'p5.js starting "pen"')),Object(r.b)("li",{parentName:"ul"},"If you want to see the whole picture of how you could use this on a website, ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://glitch.com/~cyf-p5js-start"}),"here's a website project on Glitch")," with HTML, CSS, and JavaScript files"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.openprocessing.org/sketch/812093"}),"A tutorial for a random words poster")," which works through a project using p5.js")),Object(r.b)("h2",{id:"why-change"},"Why change?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Khan Academy platform is not stable for complicated programs"),Object(r.b)("li",{parentName:"ul"},'Khan Academy doesn\'t "feel professional" or "polished"'),Object(r.b)("li",{parentName:"ul"},"The Processing.js library used by Khan Academy has been retired"),Object(r.b)("li",{parentName:"ul"},"p5.js is much more widely used than Processing.js"),Object(r.b)("li",{parentName:"ul"},"p5.js has more and better documentation and tutorials"),Object(r.b)("li",{parentName:"ul"},"p5.js is more advanced and more powerful than Processing.js. You can make sketches that:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Process video from the webcam"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.openprocessing.org/sketch/812282"}),"Process audio from your microphone"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.openprocessing.org/sketch/812284/"}),"Simplest example")))),Object(r.b)("li",{parentName:"ul"},"Load and show 3d models"),Object(r.b)("li",{parentName:"ul"},"Interact with all sorts of other interesting JavaScript libraries",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Random example: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://codepen.io/enz0/full/wvBzoMN"}),"p5.js pose-detection with using PoseNet")))))),Object(r.b)("li",{parentName:"ul"},"You can use ",Object(r.b)("em",{parentName:"li"},"modern")," javascript language features, which make things nicer")),Object(r.b)("h3",{id:"pick-one-element-at-random-from-an-array"},"Pick one element at random from an array"),Object(r.b)("p",null,"However, some of my favourite differences are very, very small. Here's one: If you have an array, you can pick one element of it at random, simply by passing the array as a parameter to the ",Object(r.b)("inlineCode",{parentName:"p"},"random()")," function."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// (inside your draw() function...)\n\nvar colorNames = ["maroon", "skyblue", "whitesmoke"];\nvar chosenColor = random(colorNames);\nfill(chosenColor);\n\nvar words = ["code", "your", "future"];\nvar chosenWord = random(words);\ntext(chosenWord, 100, 100);\n')),Object(r.b)("h2",{id:"best-place-to-learn-p5js"},"Best place to learn p5.js"),Object(r.b)("p",null,"We recommend Daniel Shiffman's Youtube course: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA"}),'"Code! Programming with p5.js"'),"."),Object(r.b)("h2",{id:"whats-openprocessingorg"},"What's OpenProcessing.org?"),Object(r.b)("p",null,'The above course introduces a website called "p5.js web editor" which allows you to quickly write your projects and test them out. It\'s ok, but we recommend a different website which does the same thing: ',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openprocessing.org/"}),"https://www.openprocessing.org/"),"."),Object(r.b)("p",null,"It has ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openprocessing.org/browse/"}),"a huge gallery of work by other artists"),", and you can see all of their code to learn from!"),Object(r.b)("h3",{id:"when-you-read-others-code-and-it-makes-no-sense"},"When you read others' code and it makes no sense..."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Don't Panic!")," Do not be worried when you find a project that looks amazing but then you look at the code and can't understand it - this is normal."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"These projects can become VERY complex and the artists often aren't very concerned about how easy their code is to read"),Object(r.b)("li",{parentName:"ul"},"Code reading is a skill you have to work on"),Object(r.b)("li",{parentName:"ul"},"Take it slow. Study simpler projects to start with")),Object(r.b)("h2",{id:"other-courses"},"Other courses"),Object(r.b)("p",null,"In addition to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"from-khan-academy-processingjs-to-p5js.md#best-place-to-learn-p5.js"}),'"Code! Programming with p5.js"'),"..."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The creators of processing have ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.kadenze.com/courses/introduction-to-programming-for-the-visual-arts-with-p5-js-vi/info"}),'a p5.js course on kadenze.com - "Introduction to Programming for the Visual Arts with p5.js"'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Joshua Davis has some courses on processing on skillshare, which is free for 2 months."),Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.skillshare.com/classes/Programming-Graphics-I-Introduction-to-Generative-Art/782118657"}),"Programming Graphics I: Introduction to Generative Art"),". This does ",Object(r.b)("em",{parentName:"p"},"not")," teach in javascript but in Processing, which uses the Java language instead. However, if you LOVE the topic, you could skim these videos and still learn a lot. Normally I would recommend getting strong in ONE language ","(","JavaScript",")"," for the first year or two of your programming journey.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Mostly aimed at teachers: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://nycdoe-cs4all.github.io/"}),"Introduction to Computational Media with p5.js")," has material for teachers to run a course. Students can find some interesting project ideas.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If you want to stick with processing.js and Khan Academy longer, there is ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations"}),"Advanced JS: Games and Visualizations"),". I haven't worked through this course, yet."))),Object(r.b)("h2",{id:"some-more-differences-between-processingjs-and-p5js"},"Some more differences between Processing.js and p5.js"),Object(r.b)("p",null,"As discussed above, there are some differences between Processing.js ","(","used in the Khan Academy environment",")"," and p5.js. Here are some more details of the differences."),Object(r.b)("h3",{id:"you-must-always-define-the-draw-function"},"You must always define the ",Object(r.b)("inlineCode",{parentName:"h3"},"draw()")," function"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"draw")," function is not optional."),Object(r.b)("li",{parentName:"ul"},"All drawing operations ","(",Object(r.b)("inlineCode",{parentName:"li"},"fill()"),", ",Object(r.b)("inlineCode",{parentName:"li"},"ellipse()"),", ",Object(r.b)("inlineCode",{parentName:"li"},"rect()"),", etc",")"," should go inside the ",Object(r.b)("inlineCode",{parentName:"li"},"draw()")," function.")),Object(r.b)("h3",{id:"you-can-provide-a-setup-function-for-set-up"},"You can provide a ",Object(r.b)("inlineCode",{parentName:"h3"},"setup()")," function for set-up"),Object(r.b)("p",null,"It will be called before the first call to your ",Object(r.b)("inlineCode",{parentName:"p"},"draw()")," function."),Object(r.b)("h3",{id:"if-you-dont-want-animation-you-must-call-noloop"},"If you ",Object(r.b)("em",{parentName:"h3"},"don't")," want animation, you must call ",Object(r.b)("inlineCode",{parentName:"h3"},"noLoop()")),Object(r.b)("p",null,"Unlike Khan Academy's Processing.js, you must always define a ",Object(r.b)("inlineCode",{parentName:"p"},"draw()")," function, even if you don't want animation. ",Object(r.b)("inlineCode",{parentName:"p"},"noLoop()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"loop()")," can be used to prevent or enable animation by repeated calls to the ",Object(r.b)("inlineCode",{parentName:"p"},"draw()")," function. The default is to animate."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openprocessing.org/sketch/812071"}),"Live Demo"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var setup = function () {\n  noLoop();\n};\n\nvar draw = function () {\n  fill(random(255), random(255), random(255));\n  rect(50, 50, 400, 400);\n};\n")),Object(r.b)("h3",{id:"you-cant-call-processingjs-functions-at-the-top-level"},"You can't call Processing.js functions at the top level"),Object(r.b)("p",null,"You can't call functions like ",Object(r.b)("inlineCode",{parentName:"p"},"random()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"fill()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"color()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"rect()")," at the top-level ","(","i.e. outside of the p5.js functions such ",Object(r.b)("inlineCode",{parentName:"p"},"setup()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"draw()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"mousePressed()"),", etc",")",". If you try to do this, you'll get an error such as ",Object(r.b)("inlineCode",{parentName:"p"},"Uncaught ReferenceError: random is not defined")),Object(r.b)("p",null,"The editor at OpenProcessing.org is kind enough to add the following good advice - read your error messages! ",Object(r.b)("inlineCode",{parentName:"p"},"Did you just try to use p5.js's random() function? If so, you may want to move it into your sketch's setup() function.")),Object(r.b)("h3",{id:"global-variables-must-be-initialised-in-setup-if-they-need-p5js-functions"},"Global variables must be initialised in ",Object(r.b)("inlineCode",{parentName:"h3"},"setup()"),", if they need p5.js functions"),Object(r.b)("p",null,"If you want a ",Object(r.b)("em",{parentName:"p"},"global")," variable to be initialised at random, using p5.js's ",Object(r.b)("inlineCode",{parentName:"p"},"random()")," function, you must do it in two parts:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Declare the variable ",Object(r.b)("inlineCode",{parentName:"li"},"var xPos;")," outside of the ",Object(r.b)("inlineCode",{parentName:"li"},"setup()")," function"),Object(r.b)("li",{parentName:"ol"},"Initialise the variable inside the ",Object(r.b)("inlineCode",{parentName:"li"},"setup()")," function. Example: ",Object(r.b)("inlineCode",{parentName:"li"},"xPos = random(0, 400);"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"GOOD CODE example")," - do this if you need to initialise a global variable using ",Object(r.b)("inlineCode",{parentName:"p"},"random()")," or ",Object(r.b)("inlineCode",{parentName:"p"},"color()")," or ",Object(r.b)("inlineCode",{parentName:"p"},"width")," or ",Object(r.b)("inlineCode",{parentName:"p"},"height"),"..."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var xPos;\n\nvar setup = function () {\n  xPos = random(0, 400);\n};\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"BAD CODE example")," - this won't work"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Start of program\nvar xPos = random(0, 400); // can't call random() outside of setup() or draw(), etc.\n\nvar draw = function () {\n  rect(xPos, 100, 50, 50);\n};\n")),Object(r.b)("h3",{id:"the-default-canvas-is-only-100-100"},"The default canvas is only 100, 100..."),Object(r.b)("p",null,"However, you can make it bigger calling ",Object(r.b)("inlineCode",{parentName:"p"},"createCanvas()")," in ",Object(r.b)("inlineCode",{parentName:"p"},"setup()"),"."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openprocessing.org/sketch/create"}),"Live Demo of specifying canvas size"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var setup = function () {\n  createCanvas(windowWidth, windowHeight);\n};\n")),Object(r.b)("p",null,"p5.js provides global variables ",Object(r.b)("inlineCode",{parentName:"p"},"windowWidth")," and ",Object(r.b)("inlineCode",{parentName:"p"},"windowHeight"),", AND ",Object(r.b)("inlineCode",{parentName:"p"},"width")," and ",Object(r.b)("inlineCode",{parentName:"p"},"height")," which will hold the size of the canvas."),Object(r.b)("h2",{id:"wheres-the-documentation"},"Where's the documentation?"),Object(r.b)("p",null,"The p5.js documentation is at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://p5js.org/reference/"}),"https://p5js.org/reference/"),". Each function has multiple examples of how it can be used."),Object(r.b)("h2",{id:"other-migration-guides"},"Other migration guides"),Object(r.b)("p",null,"If you want to stick with Processing.js, Khan Academy have ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations/advanced-development-tools/a/using-processingjs-outside-khan-academy"}),"this guide to using Processing.js outside Khan Academy"),"."))}p.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);