import{r as e,h as r}from"./index-c1a676a1.js";const o=class{constructor(r){e(this,r),this.flowItems=[{value:"contact",text:"Customer contact",selectedColor:"rgb(var(--color-orange-default))",selected:!0,icon:"meeting"},{value:"requirement",text:"Demand analysis",selectedColor:"rgb(var(--color-sky-default))",icon:"combo_chart"},{value:"tender",text:"Quote",selectedColor:"rgb(var(--color-green-default))",icon:"paper_plane"},{value:"agreement",text:"Agreement",selectedColor:"rgb(var(--color-teal-default))",icon:"agreement"},{value:"rejected",text:"Rejected",isOffProgress:!0,selectedColor:"rgb(var(--color-red-dark))",icon:"do_not_disturb",iconColor:"rgb(var(--color-red-dark))"},{value:"onhold",text:"On hold",isOffProgress:!0,selectedColor:"rgb(var(--color-coral-default))",icon:"circled_pause",iconColor:"rgb(var(--color-coral-default))"}],this.handleChange=e=>{this.flowItems=this.flowItems.map((r=>{var o;return Object.assign(Object.assign({},r),{selected:r.value===(null===(o=e.detail)||void 0===o?void 0:o.value)})}))}}render(){return r("limel-progress-flow",{flowItems:this.flowItems,onChange:this.handleChange})}};export{o as limel_example_progress_flow_off_progress_steps}