import{r,h as o}from"./index-64ccb4a0.js";const n=class{constructor(o){r(this,o),this.limeBranded=!1,this.renderBranded=r=>{r.stopPropagation(),this.limeBranded=r.detail}}render(){return[o("limel-spinner",{size:"medium",limeBranded:this.limeBranded}),o("limel-flex-container",{justify:"end"},o("limel-checkbox",{checked:this.limeBranded,label:"Lime branded (default design)",onChange:this.renderBranded}))]}};n.style=":host{--spinner-color-1:rgb(var(--color-cyan-darker));--spinner-color-2:rgb(var(--color-cyan-dark));--spinner-color-3:rgb(var(--color-cyan-default));--spinner-color-4:rgb(var(--color-cyan-light));--spinner-color-4:rgb(var(--color-cyan-lighter));--spinner-color-5:rgb(var(--color-gray-lighter));--spinner-color-6:rgb(var(--color-cyan-lighter));--spinner-color-7:rgb(var(--color-cyan-light));--spinner-color-8:rgb(var(--color-cyan-default));--spinner-color-9:rgb(var(--color-cyan-dark));--spinner-color-10:rgb(var(--color-cyan-darker))}";export{n as limel_example_spinner_color}