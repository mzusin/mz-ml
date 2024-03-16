/* 
mzMl v1.0.0
A collection of TypeScript-based ML helpers.
https://github.com/mzusin/mz-ml
Copyright (c) 2023-present, Miriam Zusin          
*/
var e=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var R=Object.prototype.hasOwnProperty;var k=(s,t,i)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var x=(s,t)=>{for(var i in t)e(s,i,{get:t[i],enumerable:!0})},C=(s,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of f(t))!R.call(s,o)&&o!==i&&e(s,o,{get:()=>t[o],enumerable:!(n=g(t,o))||n.enumerable});return s};var I=s=>C(e({},"__esModule",{value:!0}),s);var r=(s,t,i)=>(k(s,typeof t!="symbol"?t+"":t,i),i);var O={};x(O,{SimpleLinearRegression:()=>h});module.exports=I(O);var h=class{constructor(t){r(this,"options");r(this,"m");r(this,"b");this.options=t,this.m=0,this.b=0}gradientDescent(t,i){let n=0,o=0,p=this.options.points.length;for(let a=0;a<p;a++){let[c,b]=this.options.points[a],d=t*c+i,l=-2/p*(b-d);n+=c*l,o+=l}let m=t-this.options.learningRate*n,u=i-this.options.learningRate*o;return[m,u]}train(){for(let t=0;t<this.options.epochs;t++){let[i,n]=this.gradientDescent(this.m,this.b);this.options.epochsCallback&&typeof this.options.epochsCallback=="function"&&this.options.epochsCallback(t,this.options.epochs,i,n),this.m=i,this.b=n}return[this.m,this.b]}predict(t){return this.m*t+this.b}};0&&(module.exports={SimpleLinearRegression});
//# sourceMappingURL=mz-ml.node.cjs.map
