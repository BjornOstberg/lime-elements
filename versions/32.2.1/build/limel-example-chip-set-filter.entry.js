import{r as e,h as t}from"./index-6a31bb18.js";const i=class{constructor(t){e(this,t),this.chips=[{id:1,text:"Lime"},{id:2,text:"Apple",selected:!0},{id:3,text:"Banana"}],this.disabled=!1,this.chipSetOnChange=this.chipSetOnChange.bind(this),this.setDisabled=this.setDisabled.bind(this)}render(){return[t("limel-chip-set",{label:"Include fruits of type:",disabled:this.disabled,type:"filter",onChange:this.chipSetOnChange,value:this.chips}),t("p",null,t("limel-flex-container",{justify:"end"},t("limel-checkbox",{label:"Disabled",onChange:this.setDisabled,checked:this.disabled})))]}chipSetOnChange(e){console.log(e.detail)}setDisabled(e){this.disabled=e.detail}};export{i as limel_example_chip_set_filter}