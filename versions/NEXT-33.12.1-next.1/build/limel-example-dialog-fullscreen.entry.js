import{r as l,h as i}from"./index-64ccb4a0.js";const s=class{constructor(i){l(this,i),this.isOpen=!1,this.openDialog=()=>{this.isOpen=!0},this.closeDialog=()=>{this.isOpen=!1}}render(){return[i("limel-button",{primary:!0,label:"Open",onClick:this.openDialog}),i("limel-dialog",{open:this.isOpen,fullscreen:!0,onClose:this.closeDialog},i("p",null,"This dialog is fullscreen"),i("limel-button",{label:"Ok",onClick:this.closeDialog,slot:"button"}))]}};export{s as limel_example_dialog_fullscreen}