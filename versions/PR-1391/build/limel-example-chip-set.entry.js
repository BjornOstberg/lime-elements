import{r as e,h as t}from"./index-c1a676a1.js";const i=class{constructor(t){e(this,t),this.disabled=!1,this.handleInteraction=e=>{console.log(e.detail)},this.toggleEnabled=()=>{this.disabled=!this.disabled}}render(){return[t("limel-chip-set",{label:"Tags",disabled:this.disabled,onInteract:this.handleInteraction,value:[{id:1,text:"Fruit"},{id:2,text:"Green"},{id:3,text:"Sour"}]}),t("p",null,t("limel-flex-container",{justify:"end"},t("limel-checkbox",{label:"Disabled",onChange:this.toggleEnabled,checked:this.disabled})))]}};export{i as limel_example_chip_set}