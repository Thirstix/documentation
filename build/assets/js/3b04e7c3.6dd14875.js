"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[576],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5083:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(2182),a=n(9028),o=(n(9496),n(9613)),i=["components"],s={},c="Command Tags",l={unversionedId:"Tags/command-tags",id:"Tags/command-tags",title:"Command Tags",description:"There are future plans to deprecate command tags and instead have each command register its own tag. {.is-warning}",source:"@site/docs/Tags/command-tags.md",sourceDirName:"Tags",slug:"/Tags/command-tags",permalink:"/Tags/command-tags",editUrl:"https://github.com/sylo-digital/documentation/docs/Tags/command-tags.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"`{channel}` tags",permalink:"/Tags/channel"},next:{title:"Global tags",permalink:"/Tags/global"}},p={},u=[{value:"How it works",id:"how-it-works",level:2},{value:"Voiding output",id:"voiding-output",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"command-tags"},"Command Tags"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"There are future plans to deprecate command tags and instead have each command register its own tag. {.is-warning}")),(0,o.kt)("p",null,"Command tags let you harness the power of built-in commands through tags. Every command as a corresponding command tag."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"{/say;My Message;off-topic}")),(0,o.kt)("p",null,"This will run the ",(0,o.kt)("inlineCode",{parentName:"p"},"/say")," command with the ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," option set to ",(0,o.kt)("inlineCode",{parentName:"p"},"My Message")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"channel")," option set to ",(0,o.kt)("inlineCode",{parentName:"p"},"off-topic"),". The order of parameters is the same as they show up when typing ",(0,o.kt)("inlineCode",{parentName:"p"},"/say"),". Because all parameters are also named options, another way to do the same as above would be"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'{/say message="My Message" channel=off-topic}')),(0,o.kt)("h2",{id:"voiding-output"},"Voiding output"),(0,o.kt)("p",null,"If you want to wrap commands, sometimes its useful for them to not return an output. You can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"silent")," option to the command for it to skip configuring the responder in context."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"{/say silent;message;channel}")," will prevent the confirmation message from being sent."))}d.isMDXComponent=!0}}]);