import{r as e,h as t}from"./index-7619d89c.js";const s=class{constructor(t){e(this,t),this.items=[{text:"Copy"},{text:"Cut"},{separator:!0},{text:"Paste"}],this.handleSelect=this.handleSelect.bind(this)}render(){return[t("limel-menu",{items:this.items,onSelect:this.handleSelect},t("limel-button",{label:"Menu",slot:"trigger"})),t("limel-example-value",{label:"Last selected item",value:this.lastSelectedItem})]}handleSelect(e){this.lastSelectedItem=e.detail.text}};export{s as limel_example_menu_basic}