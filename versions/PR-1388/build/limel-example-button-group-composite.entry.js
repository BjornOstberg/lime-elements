import{r as t,h as i}from"./index-c1a676a1.js";const e=class{constructor(i){t(this,i),this.props={disabled:!1,value:[{id:"1",title:"Clear sky",icon:"sun"},{id:"2",title:"Partly cloudy",icon:"partly_cloudy_day"},{id:"3",title:"Rain showers",icon:"rain"},{id:"4",title:"Thunderstorms",icon:"cloudshot"},{id:"5",title:"Snow showers",icon:"snowflake"}]},this.handleChange=t=>{this.eventPrinter.writeEvent(t);const i=this.props.value.findIndex((i=>i===t.detail));i&&(this.props.value[i]=t.detail,this.props.value=[...this.props.value],this.props=Object.assign({},this.props))},this.handleChangeForm=t=>{this.props=Object.assign({},t.detail)}}render(){return[i("limel-button-group",Object.assign({},this.props,{onChange:this.handleChange})),this.renderForm(),i("limel-example-event-printer",{ref:t=>this.eventPrinter=t})]}renderForm(){return i("limel-collapsible-section",{header:"Settings"},i("limel-form",{schema:this.schema,value:this.props,onChange:this.handleChangeForm}))}};export{e as limel_example_button_group_composite}