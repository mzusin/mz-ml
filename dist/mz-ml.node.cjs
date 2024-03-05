/* 
mzMl v1.0.0
A collection of TypeScript-based ML helpers.
https://github.com/mzusin/mz-ml
Copyright (c) 2023-present, Miriam Zusin          
*/
var s=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var T=Object.prototype.hasOwnProperty;var f=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var v=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of p(t))!T.call(e,n)&&n!==r&&s(e,n,{get:()=>t[n],enumerable:!(i=d(t,n))||i.enumerable});return e};var y=e=>v(s({},"__esModule",{value:!0}),e);var h=(e,t,r)=>(f(e,typeof t!="symbol"?t+"":t,r),r);var S={};module.exports=y(S);var c=class{constructor(t,r){h(this,"learningRate");h(this,"iterations");h(this,"theta0");h(this,"theta1");this.learningRate=t,this.iterations=r,this.theta0=0,this.theta1=0}train(t,r){let i=t.length;for(let n=0;n<this.iterations;n++){let l=0,u=0;for(let a=0;a<i;a++){let m=this.predict(t[a])-r[a];l+=m,u+=m*t[a]}let b=2/i*l,g=2/i*u;this.theta0-=this.learningRate*b,this.theta1-=this.learningRate*g}}predict(t){return this.theta0+this.theta1*t}getTheta0(){return this.theta0}getTheta1(){return this.theta1}},o=new c(.01,1e3),R=[1,2,3,4,5],G=[2,4,5,4,5];o.train(R,G);console.log("Theta0:",o.getTheta0());console.log("Theta1:",o.getTheta1());console.log("Prediction for x=6:",o.predict(6));
//# sourceMappingURL=mz-ml.node.cjs.map
