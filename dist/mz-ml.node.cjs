/* 
mzMl v1.0.0
A collection of TypeScript-based ML helpers.
https://github.com/mzusin/mz-ml
Copyright (c) 2023-present, Miriam Zusin          
*/
var m=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var S=Object.prototype.hasOwnProperty;var f=Math.pow,z=(n,e,t)=>e in n?m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var V=(n,e)=>{for(var t in e)m(n,t,{get:e[t],enumerable:!0})},x=(n,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of w(e))!S.call(n,i)&&i!==t&&m(n,i,{get:()=>e[i],enumerable:!(s=d(e,i))||s.enumerable});return n};var y=n=>x(m({},"__esModule",{value:!0}),n);var o=(n,e,t)=>(z(n,typeof e!="symbol"?e+"":e,t),t);var M={};V(M,{LinearRegression:()=>b});module.exports=y(M);var b=class{constructor(e){o(this,"options");o(this,"weights");o(this,"bias");o(this,"features");o(this,"labels");o(this,"n");o(this,"batchSize");o(this,"pearson",()=>{if(this.features.length<=0||this.labels.length<=0)return[];let e=[],t=this.labels.reduce((s,i)=>s+i,0)/this.labels.length;for(let s=0;s<this.n;s++){let i=0,h=0,l=0,r=this.features.map(a=>a[s]),u=r.reduce((a,c)=>a+c,0)/r.length;for(let a=0;a<this.features.length;a++){let c=this.features[a][s],g=this.labels[a];i+=(c-u)*(g-t),h+=f(c-u,2),l+=f(g-t,2)}e.push(h===0||l===0?0:i/Math.sqrt(h*l))}return e});var t;this.options=e,this.features=[...this.options.features],this.labels=[...this.options.labels],this.n=this.features.length>0?this.features[0].length:0,this.weights=b.initZeroArray(this.n),this.weights.length=this.n,this.weights.fill(0),this.bias=0,this.batchSize=(t=this.options.batchSize)!=null?t:this.features.length}static initZeroArray(e){let t=[];return t.length=e,t.fill(0),t}shuffle(){let e=[];for(let t=0;t<this.n;t++)e.push(t);for(let t=this.features.length-1;t>0;t--){let s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}for(let t=this.features.length-1;t>0;t--)[this.features[t],this.features[e[t]]]=[this.features[e[t]],this.features[t]],[this.labels[t],this.labels[e[t]]]=[this.labels[e[t]],this.labels[t]]}gradientDescent(e,t){let s=b.initZeroArray(this.n),i=0;for(let r=0;r<e.length;r++){let u=e[r],a=t[r],c=this.predict(u),g=a-c;for(let p=0;p<this.n;p++)s[p]+=-2*u[p]*g;i+=-2*g}let h=[];for(let r=0;r<this.weights.length;r++){let a=this.weights[r]-this.options.learningRate/this.batchSize*s[r];h.push(a)}let l=this.bias-this.options.learningRate/this.batchSize*i;return[h,l]}fit(){for(let e=0;e<this.options.epochs;e++){this.options.shuffle&&this.shuffle();for(let t=0;t<this.features.length;t+=this.batchSize){let s=this.features.slice(t,t+this.batchSize),i=this.labels.slice(t,t+this.batchSize),[h,l]=this.gradientDescent(s,i);typeof this.options.epochsCallback=="function"&&this.options.epochsCallback(e,this.options.epochs,h,l),this.weights=h,this.bias=l}}return[this.weights,this.bias]}predict(e){if(e.length!==this.weights.length)throw new Error("Number of features does not match the number of weights.");let t=this.bias;for(let s=0;s<e.length;s++)t+=e[s]*this.weights[s];return t}predictBatch(e){let t=[];for(let s of e)t.push(this.predict(s));return t}rSquared(){let e=0,t=0,s=this.labels.length<=0?0:this.labels.reduce((i,h)=>i+h)/this.labels.length;for(let i=0;i<this.features.length;i++){let h=this.labels[i],l=this.predict(this.features[i]);e+=f(h-l,2),t+=f(h-s,2)}return 1-e/t}meanSquaredError(){if(this.features.length<=0)return 0;let e=0;for(let t=0;t<this.features.length;t++){let s=this.labels[t],i=this.predict(this.features[t]);e+=f(s-i,2)}return e/=this.features.length,e}};0&&(module.exports={LinearRegression});
//# sourceMappingURL=mz-ml.node.cjs.map
