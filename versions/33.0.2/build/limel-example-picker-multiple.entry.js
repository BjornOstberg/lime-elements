import{r as e,h as t}from"./index-7619d89c.js";const i=class{constructor(t){e(this,t),this.allItems=[{text:"Admiral Swiggins",value:1},{text:"Ayla",value:2},{text:"Clunk",value:3},{text:"Coco",value:4},{text:"Derpl",value:5},{text:"Froggy G",value:6},{text:"Gnaw",value:7},{text:"Lonestar",value:8},{text:"Leon",value:9},{text:"Raelynn",value:10},{text:"Skølldir",value:11},{text:"Voltar",value:12},{text:"Yuri",value:13}],this.selectedItems=[],this.required=!1,this.readonly=!1,this.disabled=!1,this.search=e=>new Promise((t=>{setTimeout((()=>{if(""===e)return void t(this.allItems.slice(0,3));const i=this.allItems.filter((t=>t.text.toLowerCase().includes(e.toLowerCase())));t(i)}),500)})),this.onChange=e=>{this.selectedItems=[...e.detail]},this.onInteract=e=>{console.log("Value interacted with:",e.detail)},this.setDisabled=e=>{this.disabled=e.detail},this.setReadonly=e=>{this.readonly=e.detail},this.setRequired=e=>{this.required=e.detail}}render(){return[t("limel-picker",{label:"Favorite awesomenaut",value:this.selectedItems,multiple:!0,searcher:this.search,onChange:this.onChange,onInteract:this.onInteract,required:this.required,readonly:this.readonly,disabled:this.disabled}),t("p",null,t("limel-flex-container",{justify:"end"},t("limel-checkbox",{label:"Disabled",onChange:this.setDisabled,checked:this.disabled}),t("limel-checkbox",{label:"Readonly",onChange:this.setReadonly,checked:this.readonly}),t("limel-checkbox",{label:"Required",onChange:this.setRequired,checked:this.required}))),t("limel-example-value",{value:this.selectedItems})]}};export{i as limel_example_picker_multiple}