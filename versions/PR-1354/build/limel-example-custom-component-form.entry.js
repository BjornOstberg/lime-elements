import{r as e,h as t}from"./index-64ccb4a0.js";const o={type:"object",properties:{name:{type:"string",title:"Name",description:"Name of the superhero deal"},value:{type:"integer",title:"Value",description:"Amount to pay to hero"},hero:{type:"integer",title:"Hero",lime:{component:{name:"limel-example-custom-picker"}}}}},r=class{constructor(t){e(this,t),this.formData={name:"My superhero deal",value:1e6,hero:1001},this.handleFormChange=e=>{this.formData=e.detail}}render(){return[t("limel-form",{onChange:this.handleFormChange,value:this.formData,schema:o}),t("limel-example-value",{value:this.formData})]}};export{r as limel_example_custom_component_form}