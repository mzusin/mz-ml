/* 
mzMl v1.0.0
A collection of TypeScript-based ML helpers.
https://github.com/mzusin/mz-ml
Copyright (c) 2023-present, Miriam Zusin          
*/
var O=Object.defineProperty,I=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var b=Math.pow,g=(a,t,e)=>t in a?O(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,S=(a,t)=>{for(var e in t||(t={}))V.call(t,e)&&g(a,e,t[e]);if(d)for(var e of d(t))x.call(t,e)&&g(a,e,t[e]);return a},w=(a,t)=>I(a,v(t));var l=(a,t,e)=>(g(a,typeof t!="symbol"?t+"":t,e),e);var f=class{constructor(t){l(this,"options");l(this,"weights");l(this,"bias");l(this,"features");l(this,"labels");l(this,"featuresSize");l(this,"batchSize");l(this,"pearson",()=>{if(this.features.length<=0||this.labels.length<=0)return[];let t=[],e=this.labels.reduce((s,i)=>s+i,0)/this.labels.length;for(let s=0;s<this.featuresSize;s++){let i=0,r=0,h=0,n=this.features.map(o=>o[s]),u=n.reduce((o,c)=>o+c,0)/n.length;for(let o=0;o<this.features.length;o++){let c=this.features[o][s],p=this.labels[o];i+=(c-u)*(p-e),r+=b(c-u,2),h+=b(p-e,2)}t.push(r===0||h===0?0:i/Math.sqrt(r*h))}return t});var e;if(this.options=t,this.features=JSON.parse(JSON.stringify(this.options.features)),this.labels=JSON.parse(JSON.stringify(this.options.labels)),this.featuresSize=this.features.length>0?this.features[0].length:0,!this.validateInput())throw new Error("The input is not valid. Number of features should match the number of labels, and all features should have the same size.");this.weights=f.initZeroArray(this.featuresSize),this.bias=0,this.batchSize=(e=this.options.batchSize)!=null?e:this.features.length}validateInput(){if(this.features.length<=0||this.features.length!==this.labels.length)return!1;let t=this.features[0].length;for(let e of this.features)if(e.length!==t)return!1;return!0}static initZeroArray(t){let e=[];return e.length=t,e.fill(0),e}shuffle(){let t=[];for(let e=0;e<this.featuresSize;e++)t.push(e);for(let e=this.features.length-1;e>0;e--){let s=Math.floor(Math.random()*(e+1));[t[e],t[s]]=[t[s],t[e]]}for(let e=this.features.length-1;e>0;e--)[this.features[e],this.features[t[e]]]=[this.features[t[e]],this.features[e]],[this.labels[e],this.labels[t[e]]]=[this.labels[t[e]],this.labels[e]]}gradientDescent(t,e){let s=f.initZeroArray(this.featuresSize),i=0;for(let n=0;n<t.length;n++){let u=t[n],o=e[n],c=this.predict(u),p=o-c;for(let m=0;m<this.featuresSize;m++)s[m]+=-2*u[m]*p;i+=-2*p}let r=[];for(let n=0;n<this.weights.length;n++){let o=this.weights[n]-this.options.learningRate/this.batchSize*s[n];r.push(o)}let h=this.bias-this.options.learningRate/this.batchSize*i;return[r,h]}fit(){let t=performance.now();for(let e=0;e<this.options.epochs;e++){this.options.shuffle&&this.shuffle();for(let s=0;s<this.features.length;s+=this.batchSize){let i=this.features.slice(s,s+this.batchSize),r=this.labels.slice(s,s+this.batchSize),[h,n]=this.gradientDescent(i,r);if(typeof this.options.epochsCallback=="function"){let u=performance.now();this.options.epochsCallback({epoch:e,epochsCount:this.options.epochs,newWeights:h,newBias:n,time:u-t})}this.weights=h,this.bias=n}}return[this.weights,this.bias]}predict(t,e){if(t.length!==this.weights.length)throw new Error("Number of features does not match the number of weights.");let s=performance.now(),i=this.bias;for(let r=0;r<t.length;r++)i+=t[r]*this.weights[r];return e&&console.log(`Prediction = ${i}, ${performance.now()-s} ms`),i}predictBatch(t,e){let s=[],i=performance.now();for(let r of t)s.push(this.predict(r));return e&&console.log(`Predictions = ${s}, ${performance.now()-i} ms`),s}rSquared(){let t=0,e=0,s=this.labels.length<=0?0:this.labels.reduce((i,r)=>i+r)/this.labels.length;for(let i=0;i<this.features.length;i++){let r=this.labels[i],h=this.predict(this.features[i]);t+=b(r-h,2),e+=b(r-s,2)}return 1-t/e}meanSquaredError(){if(this.features.length<=0)return 0;let t=0;for(let e=0;e<this.features.length;e++){let s=this.labels[e],i=this.predict(this.features[e]);t+=b(s-i,2)}return t/=this.features.length,t}};var z=class extends f{constructor(t){let e=[];for(let i of t.features)e.push([i]);let s=w(S({},t),{features:e});super(s)}};export{f as LinearRegression,z as SimpleLinearRegression};
//# sourceMappingURL=mz-ml.esm.js.map
