/* 
mzMl v1.0.0
A collection of TypeScript-based ML helpers.
https://github.com/mzusin/mz-ml
Copyright (c) 2023-present, Miriam Zusin          
*/
var c=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var S=Object.prototype.hasOwnProperty;var f=Math.pow,z=(h,e,t)=>e in h?c(h,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):h[e]=t;var V=(h,e)=>{for(var t in e)c(h,t,{get:e[t],enumerable:!0})},O=(h,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of w(e))!S.call(h,i)&&i!==t&&c(h,i,{get:()=>e[i],enumerable:!(s=d(e,i))||s.enumerable});return h};var q=h=>O(c({},"__esModule",{value:!0}),h);var a=(h,e,t)=>(z(h,typeof e!="symbol"?e+"":e,t),t);var y={};V(y,{LinearRegression:()=>o});module.exports=q(y);var o=class{constructor(e){a(this,"options");a(this,"weights");a(this,"bias");a(this,"features");a(this,"labels");a(this,"n");a(this,"batchSize");var t;this.options=e,this.features=[...this.options.features],this.labels=[...this.options.labels],this.n=this.features.length>0?this.features[0].length:0,this.weights=o.initZeroArray(this.n),this.weights.length=this.n,this.weights.fill(0),this.bias=0,this.batchSize=(t=this.options.batchSize)!=null?t:this.features.length}static initZeroArray(e){let t=[];return t.length=e,t.fill(0),t}shuffle(){let e=[];for(let t=0;t<this.n;t++)e.push(t);for(let t=this.features.length-1;t>0;t--){let s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}for(let t=this.features.length-1;t>0;t--)[this.features[t],this.features[e[t]]]=[this.features[e[t]],this.features[t]],[this.labels[t],this.labels[e[t]]]=[this.labels[e[t]],this.labels[t]]}gradientDescent(e,t){let s=o.initZeroArray(this.n),i=0;for(let n=0;n<e.length;n++){let b=e[n],g=t[n],m=this.predict(b),p=g-m;for(let u=0;u<this.n;u++)s[u]+=-2*b[u]*p;i+=-2*p}let r=[];for(let n=0;n<this.weights.length;n++){let g=this.weights[n]-this.options.learningRate/this.batchSize*s[n];r.push(g)}let l=this.bias-this.options.learningRate/this.batchSize*i;return[r,l]}train(){for(let e=0;e<this.options.epochs;e++){this.options.shuffle&&this.shuffle();for(let t=0;t<this.features.length;t+=this.batchSize){let s=this.features.slice(t,t+this.batchSize),i=this.labels.slice(t,t+this.batchSize),[r,l]=this.gradientDescent(s,i);typeof this.options.epochsCallback=="function"&&this.options.epochsCallback(e,this.options.epochs,r,l),this.weights=r,this.bias=l}}return[this.weights,this.bias]}predict(e){if(e.length!==this.weights.length)throw new Error("Number of features does not match the number of weights.");let t=this.bias;for(let s=0;s<e.length;s++)t+=e[s]*this.weights[s];return t}rSquared(){let e=0,t=0,s=this.labels.length<=0?0:this.labels.reduce((i,r)=>i+r)/this.labels.length;for(let i=0;i<this.features.length;i++){let r=this.labels[i],l=this.predict(this.features[i]);e+=f(r-l,2),t+=f(r-s,2)}return 1-e/t}meanSquaredError(){if(this.features.length<=0)return 0;let e=0;for(let t=0;t<this.features.length;t++){let s=this.labels[t],i=this.predict(this.features[t]);e+=f(s-i,2)}return e/=this.features.length,e}};0&&(module.exports={LinearRegression});
//# sourceMappingURL=mz-ml.node.cjs.map
