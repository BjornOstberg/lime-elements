import{r as e,h as t}from"./index-7619d89c.js";const l=class{constructor(t){e(this,t),this.disabled=!1,this.currentOptionGroup=0,this.optionGroups=[[{text:"Luke Skywalker",value:"luke"},{text:"Han Solo",value:"han"},{text:"Leia Organo",value:"leia"}],[{text:"",value:""},{text:"Homer Simpson",value:"homer"},{text:"Moe Szyslak",value:"moe"},{text:"Ned Flanders",value:"ned"}],[{text:"",value:"",disabled:!0},{text:"Bart Simpson",value:"bart"},{text:"Ned Flanders",value:"ned"}],[{text:"David Tennant",value:"10"},{text:"Matt Smith",value:"11"},{text:"Peter Capaldi",value:"12"},{text:"Jodie Witthaker",value:"13"}],[]],this.onChange=e=>{this.value=e.detail},this.toggleEnabled=()=>{this.disabled=!this.disabled},this.changeOptionsGroup=()=>{this.currentOptionGroup=(this.currentOptionGroup+1)%this.optionGroups.length}}render(){return t("section",null,t("limel-select",{label:"Favorite hero",value:this.value,options:this.optionGroups[this.currentOptionGroup],disabled:this.disabled,onChange:this.onChange}),t("p",null,t("limel-flex-container",{justify:"end"},t("limel-button",{label:this.disabled?"Enable":"Disable",onClick:this.toggleEnabled}),t("limel-button",{label:"Change Options",onClick:this.changeOptionsGroup}))),t("limel-example-value",{value:this.value}),t("limel-example-value",{label:"Currently showing option group",value:`${this.currentOptionGroup+1} / ${this.optionGroups.length}`}))}};l.style="limel-button{margin-left:0.5rem}";export{l as limel_example_select_change_options}