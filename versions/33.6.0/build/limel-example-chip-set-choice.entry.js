import{r as e,h as i}from"./index-64ccb4a0.js";const t=class{constructor(i){e(this,i),this.chips=[{id:1,text:"Lime",icon:"citrus"},{id:2,text:"Apple",selected:!0,icon:"apple"},{id:3,text:"Banana",icon:"banana"}],this.disabled=!1,this.handleChange=e=>{console.log(e.detail)},this.setDisabled=e=>{this.disabled=e.detail}}render(){return[i("limel-chip-set",{disabled:this.disabled,type:"choice",label:"Thirst quencher with a twist of",onChange:this.handleChange,value:this.chips}),i("p",null,i("limel-flex-container",{justify:"end"},i("limel-checkbox",{label:"Disabled",onChange:this.setDisabled,checked:this.disabled})))]}};export{t as limel_example_chip_set_choice}