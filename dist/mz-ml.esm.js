/* 
mzMl v1.0.0
A collection of TypeScript-based ML helpers.
https://github.com/mzusin/mz-ml
Copyright (c) 2023-present, Miriam Zusin          
*/
var d=Object.defineProperty;var g=(s,t,i)=>t in s?d(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var o=(s,t,i)=>(g(s,typeof t!="symbol"?t+"":t,i),i);var c=class{constructor(t){o(this,"options");o(this,"m");o(this,"b");this.options=t,this.m=0,this.b=0}gradientDescent(t,i){let n=0,r=0,a=this.options.points.length;for(let e=0;e<a;e++){let[h,u]=this.options.points[e],b=t*h+i,p=-2/a*(u-b);n+=h*p,r+=p}let l=t-this.options.learningRate*n,m=i-this.options.learningRate*r;return[l,m]}train(){for(let t=0;t<this.options.epochs;t++){let[i,n]=this.gradientDescent(this.m,this.b);this.options.epochsCallback&&typeof this.options.epochsCallback=="function"&&this.options.epochsCallback(t,this.options.epochs,i,n),this.m=i,this.b=n}return[this.m,this.b]}predict(t){return this.m*t+this.b}};export{c as SimpleLinearRegression};
//# sourceMappingURL=mz-ml.esm.js.map
