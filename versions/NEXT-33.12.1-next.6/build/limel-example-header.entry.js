import{r as e,h as r}from"./index-c1a676a1.js";const o=class{constructor(o){e(this,o),this.actions=[{id:"1",icon:"refresh",label:"Refresh"},{id:"2",icon:"delete",label:"Delete",disabled:!0},{id:"3",icon:"edit",label:"Edit"}],this.renderActionButton=e=>r("limel-icon-button",{icon:e.icon,label:e.label,disabled:e.disabled,onClick:this.handleActionClick(e)}),this.handleActionClick=e=>r=>{r.stopPropagation(),console.log(e)}}render(){return r("limel-header",{icon:"brake_warning",heading:"Useful information",subheading:"Note",supportingText:"Data couldn't be loaded!"},this.renderActions())}renderActions(){if(this.actions)return r("div",{class:"actions"},this.actions.map(this.renderActionButton))}};o.style=":host(limel-example-header){--header-background-color:rgb(var(--contrast-1100));--header-heading-color:rgb(var(--contrast-100));--header-subheading-color:rgb(var(--color-teal-lighter));--header-supporting-text-color:rgb(var(--color-red-lighter));--header-icon-color:rgb(var(--color-red-light))}limel-icon-button{color:rgb(var(--contrast-100))}";export{o as limel_example_header}