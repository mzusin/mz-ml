/* 
mzMl v1.0.0
A collection of TypeScript-based ML helpers.
https://github.com/mzusin/mz-ml
Copyright (c) 2023-present, Miriam Zusin          
*/
var g=Math.pow;var R=(t,e)=>{let r=0,l=0,i=(n,u)=>{let o=0,c=0,h=n.length;for(let s=0;s<h;s++){let f=m(n[s])-u[s];o+=f,c+=f*n[s]}let d=2/h*o,x=2/h*c;r-=t*d,l-=t*x},a=(n,u)=>{for(let o=0;o<e;o++)i(n,u)},m=n=>r+l*n;return{train:a,predict:m,getYIntercept:()=>r,getSlope:()=>l}};var p=Math.pow,v=(t,e=1/0)=>{if(e===1/0)return t;e<0&&(e=0);let r=p(10,e);return Math.round(t*r)/r};var M="Actual values count should be equal to the predicted values count.";var E=(t,e,r,l=1/0)=>{if(e.length===0)return 0;if(e.length!==r.length)throw new Error(M);let i=0;for(let a=0;a<e.length;a++)i+=g(e[a]-t*r[a],2);return v(i/e.length,l)};export{R as LinearRegression,E as meanSquaredError};
//# sourceMappingURL=mz-ml.esm.js.map
