import{r as e,h as t}from"./index-64ccb4a0.js";const i=class{constructor(t){e(this,t),this.isOpen=!1,this.stopInnerCloseEvent=!1,this.openDialog=()=>{this.isOpen=!0},this.handleCloseOnDialog=()=>{this.isOpen=!1},this.handleCloseOnCollapsible=e=>{this.stopInnerCloseEvent?(console.log("Stopping the inner `close` event."),e.stopPropagation()):console.log("NOT stopping the inner `close` event!")},this.handleStopEventChange=e=>{this.stopInnerCloseEvent=e.detail}}render(){return[t("limel-button",{primary:!0,label:"Open",onClick:this.openDialog}),t("limel-dialog",{open:this.isOpen,onClose:this.handleCloseOnDialog},t("limel-collapsible-section",{header:"Click to open me",onClose:this.handleCloseOnCollapsible},t("p",null,"Then close me again…")),t("limel-button",{label:"Ok",onClick:this.handleCloseOnDialog,slot:"button"})),t("limel-flex-container",{justify:"end"},t("limel-switch",{label:"Stop the inner close-event",value:this.stopInnerCloseEvent,onChange:this.handleStopEventChange}))]}};export{i as limel_example_dialog_nested_close_events}