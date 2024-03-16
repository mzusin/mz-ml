/* 
mzMl v1.0.0
A collection of TypeScript-based ML helpers.
https://github.com/mzusin/mz-ml
Copyright (c) 2023-present, Miriam Zusin          
*/
var s=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var S=Object.prototype.hasOwnProperty;var B=(n,e)=>{for(var r in e)s(n,r,{get:e[r],enumerable:!0})},G=(n,e,r,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of x(e))!S.call(n,t)&&t!==r&&s(n,t,{get:()=>e[t],enumerable:!(u=p(e,t))||u.enumerable});return n};var M=n=>G(s({},"__esModule",{value:!0}),n);var h={};B(h,{SimpleLinearRegression:()=>V,gradientDescent:()=>d});module.exports=M(h);var d=(n,e,r,u)=>{let t=0,o=0,m=u.length;for(let i=0;i<m;i++){let[a,g]=u[i],f=e*a+r,b=-2/m*(g-f);t+=a*b,o+=b}let c=e-n*t,l=r-n*o;return[c,l]},V=(n,e,r)=>{let u=0,t=0;for(let o=0;o<e;o++){let[m,c]=d(n,u,t,r);u=m,t=c}return[u,t]};0&&(module.exports={SimpleLinearRegression,gradientDescent});
//# sourceMappingURL=mz-ml.node.cjs.map
