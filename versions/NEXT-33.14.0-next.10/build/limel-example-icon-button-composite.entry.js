import{r as e,h as t}from"./index-c1a676a1.js";const i=class{constructor(t){e(this,t),this.isFavorite=!1,this.props={disabled:!1,elevated:!1},this.handleChange=e=>t=>{this.props=Object.assign(Object.assign({},this.props),{[e.property]:t.detail&&e.value||null})},this.toggleFavorite=()=>{this.isFavorite=!this.isFavorite}}render(){return[t("limel-icon-button",Object.assign({label:this.isFavorite?"Remove Favorite":"Add Favorite",icon:this.isFavorite?"heart_filled":"heart_outlined",onClick:this.toggleFavorite},this.props)),t("limel-flex-container",{justify:"end"},this.renderControls())]}renderControls(){return[{property:"disabled",label:"Disabled",value:!0},{property:"elevated",label:"Elevated",value:!0}].map((e=>t("limel-switch",{label:e.label,value:!!this.props[e.property],onChange:this.handleChange(e)})))}};i.style="limel-switch{margin-right:0.9375rem}limel-icon-button{margin-bottom:1.25rem}";export{i as limel_example_icon_button_composite}