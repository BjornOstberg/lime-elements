import{r as t,h as e}from"./index-6a31bb18.js";const i=class{constructor(e){t(this,e),this.isOpen=!1,this.toggle=this.toggle.bind(this),this.onOpen=this.onOpen.bind(this),this.onClose=this.onClose.bind(this)}render(){return e("section",null,e("limel-flex-container",{justify:"end"},e("limel-button",{label:"toggle",primary:!0,onClick:this.toggle})),e("limel-collapsible-section",{header:"Click me or click the button",isOpen:this.isOpen,onOpen:this.onOpen,onClose:this.onClose},e("p",null,"Either way, the section will toggle!")))}toggle(){this.isOpen=!this.isOpen}onOpen(){console.log("Section opened"),this.isOpen=!0}onClose(){console.log("Section closed"),this.isOpen=!1}};export{i as limel_example_collapsible_section_external_control}