/* 
mzMl v1.0.0
A collection of TypeScript-based ML helpers.
https://github.com/mzusin/mz-ml
Copyright (c) 2023-present, Miriam Zusin          
*/
var b=Object.defineProperty;var m=(n,t,e)=>t in n?b(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var h=(n,t,e)=>(m(n,typeof t!="symbol"?t+"":t,e),e);var p=class{constructor(t){h(this,"options");h(this,"m");h(this,"b");this.options=t,this.m=0,this.b=0}shuffle(){for(let t=this.options.points.length-1;t>0;t--){let e=Math.floor(Math.random()*(t+1));[this.options.points[t],this.options.points[e]]=[this.options.points[e],this.options.points[t]]}}gradientDescent(t){let e=0,i=0,s=t.length;for(let[a,u]of t){let l=this.m*a+this.b,c=u-l;e+=-2*a*c,i+=-2*c}let o=this.m-this.options.learningRate/s*e,r=this.b-this.options.learningRate/s*i;return[o,r]}getBatchSize(){var t;switch(this.options.optimization){case 1:return 1;case 2:return(t=this.options.batchSize)!=null?t:this.options.points.length;default:return this.options.points.length}}train(){let t=this.getBatchSize();for(let e=0;e<this.options.epochs;e++){this.options.shuffle&&this.shuffle();for(let i=0;i<this.options.points.length;i+=t){let s=this.options.points.slice(i,i+t),[o,r]=this.gradientDescent(s);typeof this.options.epochsCallback=="function"&&this.options.epochsCallback(e,this.options.epochs,o,r),this.m=o,this.b=r}}return[this.m,this.b]}predict(t){return this.m*t+this.b}};export{p as LinearRegression};
//# sourceMappingURL=mz-ml.esm.js.map
