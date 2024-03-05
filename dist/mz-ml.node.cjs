/* 
mzMl v1.0.0
A collection of TypeScript-based ML helpers.
https://github.com/mzusin/mz-ml
Copyright (c) 2023-present, Miriam Zusin          
*/
var l=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var L=Object.prototype.hasOwnProperty;var f=(t,e)=>{for(var n in e)l(t,n,{get:e[n],enumerable:!0})},x=(t,e,n,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of y(e))!L.call(t,r)&&r!==n&&l(t,r,{get:()=>e[r],enumerable:!(c=S(e,r))||c.enumerable});return t};var G=t=>x(l({},"__esModule",{value:!0}),t);var Y={};f(Y,{LinearRegression:()=>R});module.exports=G(Y);var R=(t,e)=>{let n=0,c=0,r=(o,p)=>{let i=0,g=0,m=o.length;for(let s=0;s<m;s++){let b=u(o[s])-p[s];i+=b,g+=b*o[s]}let d=2/m*i,a=2/m*g;n-=t*d,c-=t*a},I=(o,p)=>{for(let i=0;i<e;i++)r(o,p)},u=o=>n+c*o;return{train:I,predict:u,getYIntercept:()=>n,getSlope:()=>c}};0&&(module.exports={LinearRegression});
//# sourceMappingURL=mz-ml.node.cjs.map
