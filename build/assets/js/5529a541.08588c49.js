"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[392],{9613:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},950:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(2182),a=r(9028),o=(r(9496),r(9613)),i=["components"],s={},c="Starboards",l={unversionedId:"Plugins/starboard",id:"Plugins/starboard",title:"Starboards",description:"Starboards are channels where messages go when a specific reaction is added. In the most common variant of this, reacting with a \u2b50 would send an embed of that message to a channel named #starboard.",source:"@site/docs/Plugins/starboard.md",sourceDirName:"Plugins",slug:"/Plugins/starboard",permalink:"/Plugins/starboard",editUrl:"https://github.com/sylo-digital/documentation/docs/Plugins/starboard.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",next:{title:"tickets",permalink:"/Plugins/tickets"}},d={},u=[],p={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"starboards"},"Starboards"),(0,o.kt)("p",null,"Starboards are channels where messages go when a specific reaction is added. In the most common variant of this, reacting with a \u2b50 would send an embed of that message to a channel named #starboard."),(0,o.kt)("h1",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("p",null,"Starboards higher in the list will take priority over ones lower in the list. If there is a restriction setup for a starboard higher in the list that isn't matched, lower priority starboards will be considered."),(0,o.kt)("p",null,"As an example, let's say we have ",(0,o.kt)("inlineCode",{parentName:"p"},"#starboard")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"#staff-starboard"),". If someone reacts with \u2b50 in any channel in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Staff")," category, we want it to go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"#staff-starboard")," channel, and any messages sent elsewhere will go to the regular starboard channel. To do this, we would create a ",(0,o.kt)("inlineCode",{parentName:"p"},"#staff-starboard")," starboard with the \u2b50 emoji, and setup a whitelist for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Staff")," category. Then, we would create the regular starboard below it without a whitelist so that it sends other messages to ",(0,o.kt)("inlineCode",{parentName:"p"},"#starboard"),"."),(0,o.kt)("p",null,"This also works with other options, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"minAge"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"maxAge")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"minStars"),". If a starboard's requirements are not met, we consider other starboards that match the same emoji. You can use this fall-through behavior for category-specific starboards, separate starboards for extremely old messages, etc."))}f.isMDXComponent=!0}}]);