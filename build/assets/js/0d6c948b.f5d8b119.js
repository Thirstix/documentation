"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[263],{9613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),y=o,m=d["".concat(l,".").concat(y)]||d[y]||p[y]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2386:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(2182),o=r(9028),a=(r(9496),r(9613)),s=["components"],i={},l="`{store}` tags",c={unversionedId:"Tags/store",id:"Tags/store",title:"`{store}` tags",description:"Tags used to keep values and data across invocations.  and {perget} are analogs from v8.",source:"@site/docs/Tags/store.md",sourceDirName:"Tags",slug:"/Tags/store",permalink:"/Tags/store",editUrl:"https://github.com/sylo-digital/documentation/docs/Tags/store.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"{server}",permalink:"/Tags/server"},next:{title:"`{user}` tags",permalink:"/Tags/user"}},u={},p=[{value:"<code>{store.set;key;value}</code>",id:"storesetkeyvalue",level:2},{value:"<code>{store.get;key}</code>",id:"storegetkey",level:2},{value:"<code>{store.delete;key}</code>",id:"storedeletekey",level:2},{value:"<code>{store.has;key}</code>",id:"storehaskey",level:2}],d={toc:p};function y(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"store-tags"},(0,a.kt)("inlineCode",{parentName:"h1"},"{store}")," tags"),(0,a.kt)("p",null,"Tags used to keep values and data across invocations. ",(0,a.kt)("inlineCode",{parentName:"p"},"{perset}")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"{perget}")," are analogs from v8."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{store.set;mykey;"This is a string"}\n{store.has;mykey}  // true\n{store.get;mykey}  // "This is a string"\n{store.delete;mykey}\n{store.has;mykey}  // false\n')),(0,a.kt)("h2",{id:"storesetkeyvalue"},(0,a.kt)("inlineCode",{parentName:"h2"},"{store.set;key;value}")),(0,a.kt)("p",null,"Adds an item to the store. ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," can be an object, array, string, number, etc. ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," will be coerced to a string."),(0,a.kt)("h2",{id:"storegetkey"},(0,a.kt)("inlineCode",{parentName:"h2"},"{store.get;key}")),(0,a.kt)("p",null,"Gets an item from the store."),(0,a.kt)("h2",{id:"storedeletekey"},(0,a.kt)("inlineCode",{parentName:"h2"},"{store.delete;key}")),(0,a.kt)("p",null,"Deletes an item from the store."),(0,a.kt)("h2",{id:"storehaskey"},(0,a.kt)("inlineCode",{parentName:"h2"},"{store.has;key}")),(0,a.kt)("p",null,"Checks if the store has a key."))}y.isMDXComponent=!0}}]);