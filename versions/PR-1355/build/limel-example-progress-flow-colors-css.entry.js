import{r,h as o}from"./index-64ccb4a0.js";const e=class{constructor(o){r(this,o),this.flowItems=[{value:"first",text:"First step",selected:!0},{value:"second",text:"Second step"},{value:"third",text:"Third step"},{value:"fourth",text:"Fourth step",icon:"finish_flag"}]}render(){return o("limel-progress-flow",{flowItems:this.flowItems,onChange:this.handleChange})}handleChange(r){this.flowItems=this.flowItems.map((o=>{var e;return Object.assign(Object.assign({},o),{selected:o.value===(null===(e=r.detail)||void 0===e?void 0:e.value)})}))}};e.style=":host{--container-background-color:rgb(var(--contrast-1400));background-color:var(--container-background-color);display:block;padding:2rem;border-radius:0.6rem;--progress-flow-step-divider-color:var(--container-background-color);--progress-flow-step-background-color:rgb(var(--contrast-1200));--progress-flow-step-background-color--selected:rgb(var(--color-sky-dark));--progress-flow-passed-step-background-color:rgb(var(--contrast-700));--progress-flow-step-text-color:rgb(var(--contrast-200));--progress-flow-step-text-color-passed:rgb(var(--contrast-1100));--progress-flow-icon-color:rgb(var(--color-lime-default))}";export{e as limel_example_progress_flow_colors_css}