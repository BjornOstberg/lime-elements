import{r as e,h as t}from"./index-c1a676a1.js";const i=class{constructor(t){e(this,t),this.props={badgeIcons:!0,disabled:!1,fixed:!1,items:[{text:"Copy",icon:"copy",iconColor:"rgb(var(--color-lime-light))"},{text:"Cut",icon:"cut",iconColor:"rgb(var(--color-red-light))"},{separator:!0},{text:"Paste",disabled:!0,icon:"paste",iconColor:"rgb(var(--color-amber-default))"}],open:!1,openDirection:"right",gridLayout:!1},this.handleSelect=e=>{this.eventPrinter.writeEvent(e),this.props.items=this.props.items.map((t=>("separator"in t||(t.disabled=t.text===e.detail.text),t))),this.props=Object.assign({},this.props)},this.handleCancel=e=>{this.eventPrinter.writeEvent(e)},this.handleChange=e=>{this.props=e.detail}}componentWillLoad(){this.schema=Object.assign(Object.assign({},this.schema),{lime:{layout:{type:"grid"}}}),delete this.schema.properties.label}render(){return console.log("Composite example schema:",this.schema),[t("limel-menu",{items:this.props.items,disabled:this.props.disabled,openDirection:this.props.openDirection,badgeIcons:this.props.badgeIcons,fixed:this.props.fixed,open:this.props.open,gridLayout:this.props.gridLayout,onSelect:this.handleSelect,onCancel:this.handleCancel},t("limel-button",{label:"Menu",slot:"trigger"})),t("limel-collapsible-section",{header:"Settings"},t("limel-form",{schema:this.schema,value:this.props,onChange:this.handleChange})),t("limel-example-event-printer",{ref:e=>this.eventPrinter=e})]}};export{i as limel_example_menu_composite}