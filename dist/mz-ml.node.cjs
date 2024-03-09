/* 
mzMl v1.0.0
A collection of TypeScript-based ML helpers.
https://github.com/mzusin/mz-ml
Copyright (c) 2023-present, Miriam Zusin          
*/
var h=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var S=Object.prototype.hasOwnProperty;var g=Math.pow;var b=(e,r)=>{for(var t in r)h(e,t,{get:r[t],enumerable:!0})},C=(e,r,t,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of w(r))!S.call(e,n)&&n!==t&&h(e,n,{get:()=>r[n],enumerable:!(a=p(r,n))||a.enumerable});return e};var R=e=>C(h({},"__esModule",{value:!0}),e);var q={};b(q,{LinearRegression:()=>T,meanSquaredError:()=>y});module.exports=R(q);var T=(e,r)=>{let t=0,a=0,n=(l,i)=>{let o=0,c=0,u=l.length;for(let s=0;s<u;s++){let f=m(l[s])-i[s];o+=f,c+=f*l[s]}let d=2/u*o,x=2/u*c;t-=e*d,a-=e*x},M=(l,i)=>{for(let o=0;o<r;o++)n(l,i)},m=l=>t+a*l;return{train:M,predict:m,getYIntercept:()=>t,getSlope:()=>a}};var $=Math.pow,v=(e,r=1/0)=>{if(r===1/0)return e;r<0&&(r=0);let t=$(10,r);return Math.round(e*t)/t};var y=(e,r,t=1/0)=>{if(e.length===0)return 0;if(e.length!==r.length)throw new Error("Actual values count should be equal to the predicted values count");let a=0;for(let n=0;n<e.length;n++)a+=g(e[n]-r[n],2);return v(a/e.length,t)};0&&(module.exports={LinearRegression,meanSquaredError});
//# sourceMappingURL=mz-ml.node.cjs.map
