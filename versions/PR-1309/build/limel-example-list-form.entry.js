import{r as e,h as t}from"./index-7619d89c.js";const i={type:"object",properties:{villains:{type:"array",title:"Villains",description:"Enter the evil villains to capture",items:{type:"string",title:"Name",description:"Enter the name of an evil villain",default:"The Penguin"}},squad:{type:"array",title:"Hero squad",description:"Enter the team of heroes to capture them",items:{type:"object",title:"Hero data",description:"Name and powers of super heroes",properties:{name:{type:"string",title:"Name",description:"Super hero name"},powers:{type:"array",title:"Powers",description:"Available, powers",uniqueItems:!0,items:{anyOf:[{type:"string",const:"strength",title:"Super human strength"},{type:"string",const:"speed",title:"Lightning fast"},{type:"string",const:"invisibility",title:"Invisibility"},{type:"string",const:"vision",title:"X-Ray vision"},{type:"string",const:"flight",title:"Flight"}]}}}}}}},s=class{constructor(t){e(this,t),this.formData={villains:["Joker","Thanos","Green Goblin"],squad:[{powers:["flight"],name:"Doctor Strange"}]},this.handleFormChange=e=>{this.formData=e.detail}}render(){return[t("limel-form",{onChange:this.handleFormChange,value:this.formData,schema:i}),t("limel-example-value",{value:this.formData})]}};export{s as limel_example_list_form}