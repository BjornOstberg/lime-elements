import{r as i,h as t}from"./index-7619d89c.js";const e=class{constructor(t){i(this,t),this.onChange=this.onChange.bind(this),this.onAction=this.onAction.bind(this)}render(){return t("limel-input-field",{label:"Email address",type:"email",value:this.value,trailingIcon:"filled_message",onChange:this.onChange,onAction:this.onAction})}onChange(i){this.value=i.detail}onAction(){console.log(`Sending email to ${this.value}`)}};export{e as limel_example_input_field_icon_trailing}