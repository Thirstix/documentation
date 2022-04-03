"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[309],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,b=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7442:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(2182),o=n(9028),a=(n(9496),n(9613)),i=["components"],c={},s="Scopes",l={unversionedId:"Scripts/scopes",id:"Scripts/scopes",title:"Scopes",description:"Scopes limit where variables can be accessed. For example, the body of a function is a separate scope. Variables in the parent scope are accessible in the function body, but variables created in the function body are inaccessible in the parent scope once the function is called.",source:"@site/docs/Scripts/scopes.md",sourceDirName:"Scripts",slug:"/Scripts/scopes",permalink:"/Scripts/scopes",editUrl:"https://github.com/sylo-digital/documentation/docs/Scripts/scopes.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Returning",permalink:"/Scripts/returning"},next:{title:"Variables",permalink:"/Scripts/variables"}},p={},u=[],f={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scopes"},"Scopes"),(0,a.kt)("p",null,"Scopes limit where variables can be accessed. For example, the body of a function is a separate scope. Variables in the parent scope are accessible in the function body, but variables created in the function body are inaccessible in the parent scope once the function is called."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{=parent_scope_value;hello} // create a "parent_scope_value" variable and set it to "hello"\n[#function;my_function]\n    // Create a "child_scope_value" variable and set it to "world"\n    {=child_scope_value;world}\n    // This is fine. "parent_scope_value" is accessible in the function body because it was created in the parent scope. "child_scope_value" is also fine because we created it in the function body.\n    {$parent_scope_value}\n    // "child_scope_value" is also fine because we created it in the function body, and we haven\'t changed scopes.\n    {$child_scope_value}\n[/function]\n{my_function}\n\n// This will throw an error because "child_scope_value" is only assigned in the function body, making it inaccessible in the parent scope.\n{$parent_scope_value} {$child_scope_value}\n')),(0,a.kt)("p",null,"This also applies to loops. Variables created in the loop will be cleared on each iteration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// Create an array with three items\n{=items;{[one;two;three]}}\n[#for;{=item};{$items}] // Iterate over that array\n    {$item} // Print the value\n[/for]\n{$item} // This will throw an error because "item" is only available in the for loop.\n')),(0,a.kt)("p",null,"Modifying values from the parent scope in the child scope will modify them in the parent scope."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{=total;0}\n{=items;{[one;two;three]}}\n[#for;{=item};{$items}]\n    {=total;{math;{$total} + 1}}\n[/for]\n{$total} // 3\n")),(0,a.kt)("p",null,"Because ",(0,a.kt)("inlineCode",{parentName:"p"},"total")," was initialised before entering the ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," scope, it will not be cleared and the outer scope will be able to access it."))}d.isMDXComponent=!0}}]);