/* 
mzMl v1.0.0
A collection of TypeScript-based ML helpers.
https://github.com/mzusin/mz-ml
Copyright (c) 2023-present, Miriam Zusin          
*/
var g=Object.defineProperty;var d=(r,t,e)=>t in r?g(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var i=(r,t,e)=>(d(r,typeof t!="symbol"?t+"":t,e),e);var o=class{constructor(t,e){i(this,"learningRate");i(this,"iterations");i(this,"theta0");i(this,"theta1");this.learningRate=t,this.iterations=e,this.theta0=0,this.theta1=0}train(t,e){let h=t.length;for(let s=0;s<this.iterations;s++){let c=0,l=0;for(let n=0;n<h;n++){let u=this.predict(t[n])-e[n];c+=u,l+=u*t[n]}let m=2/h*c,b=2/h*l;this.theta0-=this.learningRate*m,this.theta1-=this.learningRate*b}}predict(t){return this.theta0+this.theta1*t}getTheta0(){return this.theta0}getTheta1(){return this.theta1}},a=new o(.01,1e3),p=[1,2,3,4,5],T=[2,4,5,4,5];a.train(p,T);console.log("Theta0:",a.getTheta0());console.log("Theta1:",a.getTheta1());console.log("Prediction for x=6:",a.predict(6));
//# sourceMappingURL=mz-ml.esm.js.map
