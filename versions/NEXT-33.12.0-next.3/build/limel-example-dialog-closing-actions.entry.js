import{r as s,h as i}from"./index-64ccb4a0.js";const t=class{constructor(i){s(this,i),this.isOpen=!1,this.openDialog=()=>{this.isOpen=!0},this.handleConfirmClick=()=>{this.isOpen=!1},this.closeDialog=()=>{this.isOpen=!1}}render(){return[i("limel-button",{primary:!0,label:"Open",onClick:this.openDialog}),i("limel-dialog",{open:this.isOpen,closingActions:{escapeKey:!1,scrimClick:!1},onClose:this.closeDialog},i("p",null,"This dialog doesn't close by clicking the scrim or pressing the escape key. Only the button triggers a close event."),i("limel-button",{label:"I understand",onClick:this.handleConfirmClick,slot:"button"}))]}};export{t as limel_example_dialog_closing_actions}