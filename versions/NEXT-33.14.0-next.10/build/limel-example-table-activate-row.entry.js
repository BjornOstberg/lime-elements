import{r as t,h as i}from"./index-c1a676a1.js";import{p as e}from"./persons-14c12719.js";const l=class{constructor(i){t(this,i),this.tableData=e,this.columns=[{title:"Name",field:"name"},{title:"Age",field:"age",horizontalAlign:"right"},{title:"Kind",field:"kind"},{title:"Height",field:"height",horizontalAlign:"right"},{title:"Stamina",field:"stamina"},{title:"Place of Birth",field:"placeOfBirth"},{title:"Sign",field:"sign"},{title:"Date of Birth",field:"dateOfBirth"},{title:"Role",field:"role"}],this.onActivateRow=t=>{this.activeRow=t.detail}}render(){return[i("limel-table",{data:this.tableData,activeRow:this.activeRow,columns:this.columns,onActivate:this.onActivateRow,class:"has-interactive-rows"}),i("limel-example-value",{label:"Active row",value:this.activeRow})]}};l.style=":host{display:block}limel-table{height:300px}";export{l as limel_example_table_activate_row}