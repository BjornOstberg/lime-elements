import{r as e,h as s}from"./index-c1a676a1.js";const t=class{constructor(s){e(this,s),this.value=65,this.handleChange=e=>{this.value=+e.detail}}render(){return[s("limel-input-field",{label:"Value",type:"number",value:`${this.value}`,onChange:this.handleChange}),s("limel-circular-progress",{value:this.value})]}};t.style=":host{display:flex;gap:2rem;align-items:center;justify-content:space-between}";export{t as limel_example_circular_progress}