import{r as e,h as o}from"./index-7619d89c.js";const r=class{constructor(o){e(this,o),this.options=[{text:"Batman",value:"bat",icon:"batman_old",iconColor:"rgb(var(--color-black))"},{text:"Iron Man",value:"iron",disabled:!0,icon:"iron_man",iconColor:"rgb(var(--color-coral-default))"},{text:"Spider-Man",value:"spider",icon:"spiderman_head",iconColor:"rgb(var(--color-red-default))"},{text:"Superman",value:"super",icon:"superman",iconColor:"rgb(var(--color-blue-default))"},{text:"Wonder Woman",value:"wonder",icon:"wonder_woman",iconColor:"rgb(var(--color-yellow-darker))"}],this.onChange=e=>{this.value=e.detail}}render(){return o("section",null,o("limel-select",{label:"Favorite hero",helperText:"If you see a lack of diversity, it's our icon-provider's fault",value:this.value,options:this.options,onChange:this.onChange}),o("limel-example-value",{value:this.value}))}};export{r as limel_example_select_with_icons}