/* 
mzMl v1.0.0
A collection of TypeScript-based ML helpers.
https://github.com/mzusin/mz-ml
Copyright (c) 2023-present, Miriam Zusin          
*/
var b=Object.defineProperty;var m=(n,t,i)=>t in n?b(n,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[t]=i;var h=(n,t,i)=>(m(n,typeof t!="symbol"?t+"":t,i),i);var c=class{constructor(t){h(this,"options");h(this,"m");h(this,"b");this.options=t,this.options.points=[...this.options.points],this.m=0,this.b=0}shuffle(){for(let t=this.options.points.length-1;t>0;t--){let i=Math.floor(Math.random()*(t+1));[this.options.points[t],this.options.points[i]]=[this.options.points[i],this.options.points[t]]}}gradientDescent(t){let i=0,s=0,e=t.length;for(let[a,u]of t){let l=this.m*a+this.b,p=u-l;i+=-2*a*p,s+=-2*p}let o=this.m-this.options.learningRate/e*i,r=this.b-this.options.learningRate/e*s;return[o,r]}getBatchSize(){var t;switch(this.options.optimization){case 1:return 1;case 2:return(t=this.options.batchSize)!=null?t:this.options.points.length;default:return this.options.points.length}}train(){let t=this.getBatchSize();for(let i=0;i<this.options.epochs;i++){this.options.shuffle&&this.shuffle();for(let s=0;s<this.options.points.length;s+=t){let e=this.options.points.slice(s,s+t),[o,r]=this.gradientDescent(e);typeof this.options.epochsCallback=="function"&&this.options.epochsCallback(i,this.options.epochs,o,r),this.m=o,this.b=r}}return[this.m,this.b]}predict(t){return this.m*t+this.b}};export{c as LinearRegression};
//# sourceMappingURL=mz-ml.esm.js.map
