import{r as e,h as a}from"./index-64ccb4a0.js";const i=class{constructor(a){e(this,a),this.value={text:"select a colleague",value:"colleague",disabled:!0},this.options=[{text:"Luke Skywalker",value:"luke",icon:"businessman"},{text:"Han Solo",value:"han",icon:"human_head"},{text:"Leia Organo",value:"leia",icon:"businesswoman"}],this.handleChange=e=>{this.value=e.detail}}render(){return a("limel-header",{icon:"combo_chart",heading:"Sale performance",subheading:"Choose a colleague to see their statistics"},a("limel-select",{class:"is-narrow",value:this.value,options:this.options,onChange:this.handleChange}))}};i.style="limel-header{max-width:35rem;margin:0 auto}limel-select{min-width:12rem;margin-right:0.25rem}";export{i as limel_example_select_narrow}