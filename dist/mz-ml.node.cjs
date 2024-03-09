/* 
mzMl v1.0.0
A collection of TypeScript-based ML helpers.
https://github.com/mzusin/mz-ml
Copyright (c) 2023-present, Miriam Zusin          
*/
var m=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var S=Object.prototype.hasOwnProperty;var v=Math.pow;var C=(r,e)=>{for(var t in e)m(r,t,{get:e[t],enumerable:!0})},R=(r,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of b(e))!S.call(r,n)&&n!==t&&m(r,n,{get:()=>e[n],enumerable:!(a=w(e,n))||a.enumerable});return r};var T=r=>R(m({},"__esModule",{value:!0}),r);var q={};C(q,{LinearRegression:()=>$,meanSquaredError:()=>A});module.exports=T(q);var $=(r,e)=>{let t=0,a=0,n=(l,u)=>{let s=0,f=0,h=l.length;for(let i=0;i<h;i++){let g=c(l[i])-u[i];s+=g,f+=g*l[i]}let x=2/h*s,p=2/h*f;t-=r*x,a-=r*p},o=(l,u)=>{for(let s=0;s<e;s++)n(l,u)},c=l=>t+a*l;return{train:o,predict:c,getYIntercept:()=>t,getSlope:()=>a}};var y=Math.pow,M=(r,e=1/0)=>{if(e===1/0)return r;e<0&&(e=0);let t=y(10,e);return Math.round(r*t)/t};var d="Actual values count should be equal to the predicted values count.";var A=(r,e,t,a=1/0)=>{if(e.length===0)return 0;if(e.length!==t.length)throw new Error(d);let n=0;for(let o=0;o<e.length;o++)n+=v(e[o]-r*t[o],2);return M(n/e.length,a)};0&&(module.exports={LinearRegression,meanSquaredError});
//# sourceMappingURL=mz-ml.node.cjs.map
