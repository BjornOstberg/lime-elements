import{r as t,h as a}from"./index-c1a676a1.js";const e=class{constructor(a){t(this,a),this.checked=!1,this.isOpen=!1,this.confirmed=t=>{this.checked=t.detail},this.displayFeedback=()=>{alert("2345 items are being updated in the background. This may take a few seconds…"),this.closeDialog()},this.openDialog=()=>{this.isOpen=!0},this.closeDialog=()=>{this.isOpen=!1}}render(){return[a("limel-button",{primary:!0,label:"Open",onClick:this.openDialog}),a("limel-dialog",{heading:{title:"Whoa…! Be careful.",subtitle:"Wanna mass-update 2345 items?",icon:"brake_warning"},open:this.isOpen,onClose:this.closeDialog},a("div",{class:"dialog-content"},a("p",null,"You are about to update 2345 items simultaneously. This will irreversibly change the affected values in the database, for all of these items!"),a("p",null,"Are you sure you want to update them all?"),a("limel-checkbox",{label:"It's OK. I'm aware of the consequences of this action.",id:"confirmation-checkbox",required:!0,onChange:this.confirmed,checked:this.checked})),a("limel-button",{label:"Back to editing",class:"button back primary--neutral justify-left",icon:"left_arrow",onClick:this.closeDialog,slot:"button"}),a("limel-button",{label:"Discard changes",class:"button discard primary--caution",icon:"cancel",primary:!0,onClick:this.closeDialog,slot:"button"}),a("limel-button",{label:"Update all",class:"button update",icon:"ok",primary:!0,onClick:this.displayFeedback,disabled:!this.checked,slot:"button"}))]}};e.style=":host{--dialog-heading-icon-background-color:rgb(var(--color-red-default));--dialog-heading-icon-color:rgb(var(--color-yellow-lighter));--dialog-width:40rem}.button.justify-left{justify-self:flex-start;margin-right:auto}.button.primary--neutral{--lime-primary-color:rgb(var(--contrast-1100))}.button.primary--caution{--lime-on-primary-color:rgb(var(--color-glaucous-darker));--lime-primary-color:rgb(var(--color-amber-default))}.button.primary--danger{--lime-primary-color:rgb(var(--color-red-default))}";export{e as limel_example_dialog_action_buttons}