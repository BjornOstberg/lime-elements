import{r as e,h as l}from"./index-6a31bb18.js";const t=class{constructor(l){e(this,l),this.props={label:"My button",primary:!0,outlined:!1,icon:null,disabled:!1,loading:!1},this.handleChange=e=>l=>{this.props=Object.assign(Object.assign({},this.props),{[e.property]:l.detail&&e.value||null})},this.handleEvent=this.handleEvent.bind(this)}render(){return[l("limel-button",Object.assign({},this.props,{onClick:this.handleEvent})),l("limel-flex-container",{justify:"end"},this.renderControls()),l("limel-example-event-printer",{ref:e=>this.eventPrinter=e})]}handleEvent(e){this.eventPrinter.writeEvent(e)}renderControls(){return[{property:"label",label:"Label",value:"My button"},{property:"primary",label:"Primary",value:!0},{property:"outlined",label:"Outlined",value:!0},{property:"icon",label:"Icon",value:"filled_message"},{property:"disabled",label:"Disabled",value:!0},{property:"loading",label:"Loading",value:!0}].map((e=>l("limel-switch",{label:e.label,value:!!this.props[e.property],onChange:this.handleChange(e)})))}};t.style="limel-switch{height:3rem;margin-right:0.9375rem}limel-button{margin-bottom:1.25rem}limel-flex-container{flex-wrap:wrap}";export{t as limel_example_button_composite}