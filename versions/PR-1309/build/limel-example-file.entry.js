import{r as e,h as i}from"./index-7619d89c.js";const l=class{constructor(i){e(this,i),this.value={filename:"picture.jpg",id:123},this.required=!1,this.disabled=!1,this.readonly=!1,this.handleChange=e=>{this.value=e.detail,console.log("onChange",this.value)},this.setRequired=e=>{e.stopPropagation(),this.required=!!e.detail},this.setDisabled=e=>{e.stopPropagation(),this.disabled=!!e.detail},this.setReadonly=e=>{e.stopPropagation(),this.readonly=!!e.detail}}render(){return[i("limel-file",{label:"Attach a file",onChange:this.handleChange,required:this.required,value:this.value,disabled:this.disabled,readonly:this.readonly}),i("p",null,i("limel-flex-container",{justify:"end"},i("limel-checkbox",{checked:this.disabled,label:"Disabled",onChange:this.setDisabled}),i("limel-checkbox",{checked:this.readonly,label:"Readonly",onChange:this.setReadonly}),i("limel-checkbox",{checked:this.required,label:"Required",onChange:this.setRequired}))),i("limel-example-value",{value:this.value})]}};export{l as limel_example_file}