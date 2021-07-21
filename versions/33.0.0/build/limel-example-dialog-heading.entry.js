import{r as i,h as l}from"./index-7619d89c.js";const e=class{constructor(l){i(this,l),this.isOpen=!1,this.title="Title",this.subtitle="Subtitle",this.icons=[{text:"Company",value:"organization"},{text:"Person",value:"user_group_man_man"},{text:"Deal",value:"money"},{text:"Todo",value:"todo_list"}],this.openDialog=()=>{this.isOpen=!0},this.closeDialog=()=>{this.isOpen=!1},this.handleTitleChange=i=>{this.title=i.detail},this.handleSubtitleChange=i=>{this.subtitle=i.detail},this.handleSupportingTextChange=i=>{this.supportingText=i.detail},this.handleIconChange=i=>{this.icon=i.detail},this.icon=this.icons[0]}render(){const i={title:this.title,subtitle:this.subtitle,supportingText:this.supportingText,icon:this.icon.value},e={[this.icon.text.toLowerCase()]:!0};return[l("limel-button",{primary:!0,label:"Open",onClick:this.openDialog}),l("limel-dialog",{open:this.isOpen,onClose:this.closeDialog,heading:i,class:e},l("limel-input-field",{required:!0,label:"Title",value:this.title,onChange:this.handleTitleChange}),l("limel-input-field",{label:"Subtitle",value:this.subtitle,onChange:this.handleSubtitleChange}),l("limel-input-field",{label:"Supporting text",value:this.supportingText,onChange:this.handleSupportingTextChange}),l("limel-select",{required:!0,options:this.icons,label:"Icon",value:this.icon,onChange:this.handleIconChange}),l("limel-button",{label:"Ok",primary:!0,onClick:this.closeDialog,slot:"button"}))]}};e.style=":host(limel-example-dialog-heading){--dialog-width:40rem;--dialog-heading-subtitle-color:rgb(var(--contrast-1200));--dialog-heading-icon-color:rgb(var(--color-white))}:host(limel-example-dialog-heading) limel-input-field{margin-bottom:1rem}:host(limel-example-dialog-heading) limel-dialog.company{--dialog-heading-icon-background-color:rgb(\n      var(--color-sky-default)\n  )}:host(limel-example-dialog-heading) limel-dialog.person{--dialog-heading-icon-background-color:rgb(\n      var(--color-orange-default)\n  )}:host(limel-example-dialog-heading) limel-dialog.deal{--dialog-heading-icon-background-color:rgb(\n      var(--color-green-default)\n  )}:host(limel-example-dialog-heading) limel-dialog.todo{--header-heading-color:rgb(var(--color-teal-dark));--dialog-heading-supporting-text-color:rgb(var(--color-red-dark));--dialog-heading-icon-color:rgb(var(--color-teal-default))}";export{e as limel_example_dialog_heading}