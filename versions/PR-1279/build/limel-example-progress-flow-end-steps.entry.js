import{r as e,h as r}from"./index-7619d89c.js";const o=class{constructor(r){e(this,r),this.flowItems=[{value:"contact",text:"Customer contact",activeColor:"rgb(var(--color-orange-default))",selected:!0,icon:"meeting"},{value:"requirement",text:"Demand analysis",activeColor:"rgb(var(--color-sky-default))",icon:"combo_chart"},{value:"tender",text:"Quote",activeColor:"rgb(var(--color-green-default))",icon:"paper_plane"},{value:"agreement",text:"Agreement",activeColor:"rgb(var(--color-teal-default))",icon:"agreement"},{value:"rejected",text:"Rejected",isOffProgress:!0,activeColor:"rgb(var(--color-red-dark))",icon:"do_not_disturb",iconColor:"rgb(var(--color-red-dark))"},{value:"onhold",text:"On hold",isOffProgress:!0,activeColor:"rgb(var(--color-coral-default))",icon:"circled_pause",iconColor:"rgb(var(--color-coral-default))"}],this.onChange=this.onChange.bind(this)}render(){return r("limel-progress-flow",{flowItems:this.flowItems,onChange:this.onChange})}onChange(e){this.flowItems=this.flowItems.map((r=>{var o;return Object.assign(Object.assign({},r),{selected:r.value===(null===(o=e.detail)||void 0===o?void 0:o.value)})}))}};export{o as limel_example_progress_flow_end_steps}