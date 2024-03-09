/* 
mzMl v1.0.0
A collection of TypeScript-based ML helpers.
https://github.com/mzusin/mz-ml
Copyright (c) 2023-present, Miriam Zusin          
*/
var f=Math.pow;var C=(e,r)=>{let t=0,a=0,l=(n,i)=>{let o=0,m=0,u=n.length;for(let s=0;s<u;s++){let c=h(n[s])-i[s];o+=c,m+=c*n[s]}let M=2/u*o,d=2/u*m;t-=e*M,a-=e*d},v=(n,i)=>{for(let o=0;o<r;o++)l(n,i)},h=n=>t+a*n;return{train:v,predict:h,getYIntercept:()=>t,getSlope:()=>a}};var x=Math.pow,g=(e,r=1/0)=>{if(r===1/0)return e;r<0&&(r=0);let t=x(10,r);return Math.round(e*t)/t};var y=(e,r,t=1/0)=>{if(e.length===0)return 0;if(e.length!==r.length)throw new Error("Actual values count should be equal to the predicted values count");let a=0;for(let l=0;l<e.length;l++)a+=f(e[l]-r[l],2);return g(a/e.length,t)};export{C as LinearRegression,y as meanSquaredError};
//# sourceMappingURL=mz-ml.esm.js.map
