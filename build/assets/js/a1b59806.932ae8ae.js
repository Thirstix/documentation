"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[242],{9613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5437:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=t(2182),i=t(9028),o=(t(9496),t(9613)),a=["components"],u={},l="Returning",s={unversionedId:"Scripts/returning",id:"Scripts/returning",title:"Returning",description:"can be used to return early. For advanced actions, you should likely always use {return} as it filters out useless and unwanted data.",source:"@site/docs/Scripts/returning.md",sourceDirName:"Scripts",slug:"/Scripts/returning",permalink:"/Scripts/returning",editUrl:"https://github.com/sylo-digital/documentation/docs/Scripts/returning.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Options & Parameters",permalink:"/Scripts/options-and-parameters"},next:{title:"Scopes",permalink:"/Scripts/scopes"}},c={},p=[{value:"Returning Early",id:"returning-early",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"returning"},"Returning"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"{return}")," can be used to return early. For advanced actions, you should likely always use ",(0,o.kt)("inlineCode",{parentName:"p"},"{return}")," as it filters out useless and unwanted data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"{channel.send;test} // This will still be sent\nHello world! // This will be discarded because we're using {return}\n{return;Goodbye world!} // This will be the only returned value\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"{return}")," can also be used in functions to return values. You can learn more about ",(0,o.kt)("inlineCode",{parentName:"p"},"{return}")," with functions in the ",(0,o.kt)("a",{parentName:"p",href:"/Scripts/functions"},"functions")," documentation."),(0,o.kt)("h2",{id:"returning-early"},"Returning Early"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"{return}")," shines when used to return early."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[#if;{option;help}]\n    // Handle help information\n    {return;Hello! It seems you\'re asking for help.}\n[/if]\n\n// Handle the user not asking for help\n// This will never run if "help" is set.\n{return;Hello! This is the default message.}\n')))}f.isMDXComponent=!0}}]);