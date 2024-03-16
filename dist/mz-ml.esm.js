/* 
mzMl v1.0.0
A collection of TypeScript-based ML helpers.
https://github.com/mzusin/mz-ml
Copyright (c) 2023-present, Miriam Zusin          
*/
var g=(r,u,o,e)=>{let n=0,t=0,m=e.length;for(let i=0;i<m;i++){let[s,d]=e[i],l=u*s+o,a=-2/m*(d-l);n+=s*a,t+=a}let c=u-r*n,b=o-r*t;return[c,b]},f=(r,u,o)=>{let e=0,n=0;for(let t=0;t<u;t++){let[m,c]=g(r,e,n,o);e=m,n=c}return[e,n]};export{f as SimpleLinearRegression,g as gradientDescent};
//# sourceMappingURL=mz-ml.esm.js.map
