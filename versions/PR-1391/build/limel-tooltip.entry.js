import{r as t,h as i,g as o}from"./index-c1a676a1.js";const e=class{constructor(i){t(this,i)}render(){const t=getComputedStyle(this.host).getPropertyValue("--tooltip-z-index");return i("div",{class:"trigger-anchor"},i("limel-portal",{visible:this.open,containerId:this.portalId,containerStyle:{"z-index":t}},i("limel-tooltip-content",{label:this.label,helperLabel:this.helperLabel})))}get host(){return o(this)}};e.style=".trigger-anchor{display:inline-block;position:relative}.tooltip-container{color:#f1f1f1;background-color:#232324}";export{e as limel_tooltip}