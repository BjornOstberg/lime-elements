import{r as t,h as i}from"./index-7619d89c.js";const a=class{constructor(i){t(this,i),this.checked=!1,this.isOpen=!1,this.confirmed=()=>{this.checked=!this.checked},this.displayFeedback=()=>{alert("2345 items are being updated in the background. This may take a few seconds…"),this.closeDialog()},this.openDialog=()=>{this.isOpen=!0},this.closeDialog=()=>{this.isOpen=!1}}render(){return[i("limel-button",{primary:!0,label:"Open",onClick:this.openDialog}),i("limel-dialog",{heading:{title:"Woah…! Be careful.",subtitle:"Wanna mass-update 2345 items?",icon:"brake_warning"},open:this.isOpen,onClose:this.closeDialog},i("div",{class:"dialog-content"},i("p",null,"You are about to update 2345 items simulatiously. This will irriversibly change the modified values in the database, for all of these items!"),i("p",null,"Are you sure you want to update them all?"),i("limel-checkbox",{label:"It's OK. I'm aware of the consequences of this action.",id:"confirmation-checkbox",required:!0,onChange:this.confirmed,checked:this.checked})),i("limel-button",{label:"Back to editing",class:"button back primary--neutral justify-left",icon:"left_arrow",onClick:this.closeDialog,slot:"button"}),i("limel-button",{label:"Discard changes",class:"button discard primary--caution",icon:"cancel",primary:!0,onClick:this.closeDialog,slot:"button"}),i("limel-button",{label:"Update all",class:"button update",icon:"ok",primary:!0,onClick:this.displayFeedback,disabled:!this.checked,slot:"button"}))]}};a.style=":host{--dialog-heading-icon-background-color:rgb(var(--color-red-default));--dialog-width:40rem}.button.justify-left{justify-self:flex-start;margin-right:auto}.button.primary--neutral{--lime-primary-color:rgb(var(--contrast-1100))}.button.primary--caution{--lime-on-primary-color:rgb(var(--color-glaucous-darker));--lime-primary-color:rgb(var(--color-amber-default))}.button.primary--danger{--lime-primary-color:rgb(var(--color-red-default))}";export{a as limel_example_dialog_action_buttons}