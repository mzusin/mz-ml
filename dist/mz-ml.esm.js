/* 
mzMl v1.0.0
A collection of TypeScript-based ML helpers.
https://github.com/mzusin/mz-ml
Copyright (c) 2023-present, Miriam Zusin          
*/
var L=(s,u)=>{let r=0,o=0,g=(e,c)=>{let t=0,m=0,i=e.length;for(let n=0;n<i;n++){let l=p(e[n])-c[n];t+=l,m+=l*e[n]}let I=2/i*t,d=2/i*m;r-=s*I,o-=s*d},b=(e,c)=>{for(let t=0;t<u;t++)g(e,c)},p=e=>r+o*e;return{train:b,predict:p,getYIntercept:()=>r,getSlope:()=>o}};export{L as LinearRegression};
//# sourceMappingURL=mz-ml.esm.js.map
