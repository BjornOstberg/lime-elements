import{r as e,h as i}from"./index-6a31bb18.js";const s=class{constructor(i){e(this,i),this.actions=[{id:"1",icon:"refresh",label:"Refresh"},{id:"2",icon:"delete",label:"Delete",disabled:!0},{id:"3",icon:"edit",label:"Edit"}],this.handleActionClick=e=>i=>{i.stopPropagation(),console.log(e)},this.renderActionButton=this.renderActionButton.bind(this)}render(){return i("limel-header",{class:"has-responsive-layout",icon:"resize_horizontal",heading:"This header is responsive",subheading:"Resize the container of this header to see how it works"},this.renderActions())}renderActions(){if(this.actions)return i("div",{class:"actions"},this.actions.map(this.renderActionButton))}renderActionButton(e){return i("limel-icon-button",{icon:e.icon,label:e.label,disabled:e.disabled,onClick:this.handleActionClick(e)})}};s.style=":host(limel-example-header-responsive){--header-responsive-breakpoint:12rem}";export{s as limel_example_header_responsive}