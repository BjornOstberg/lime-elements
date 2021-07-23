import{r as t,c as i,h as s,g as h}from"./index-7619d89c.js";import{t as e}from"./translations-682e905e.js";import{c as n}from"./random-string-2246b81e.js";import{M as o}from"./component-2630c3d7.js";import"./component-d682c974.js";import"./component-429e92ee.js";import"./ponyfill-30263d5e.js";import"./component-89e0ce26.js";const r={id:null,text:null,removable:!0},a=class{constructor(s){t(this,s),this.change=i(this,"change",7),this.interact=i(this,"interact",7),this.required=!1,this.disabled=!1,this.readonly=!1,this.accept="*",this.language="en",this.isDraggingOverDropZone=!1,this.fileInputId=n(),this.handleDragEnter=t=>{this.isDraggingOverDropZone=!0,this.preventAndStop(t)},this.handleDragLeave=()=>{this.isDraggingOverDropZone=!1},this.handleFileDrop=t=>{this.preventAndStop(t),this.isDraggingOverDropZone=!1,this.handleFile(t.dataTransfer.files[0])},this.handleFileSelection=this.handleFileSelection.bind(this),this.handleFileChange=this.handleFileChange.bind(this),this.handleChipSetChange=this.handleChipSetChange.bind(this),this.handleFileDrop=this.handleFileDrop.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this),this.handleChipInteract=this.handleChipInteract.bind(this)}connectedCallback(){this.initialize()}componentDidLoad(){this.fileInput=this.element.shadowRoot.getElementById(this.fileInputId),this.chipSet=this.element.shadowRoot.querySelector("limel-chip-set"),this.initialize()}initialize(){this.chipSet&&(this.mdcTextField=new o(this.chipSet.shadowRoot.querySelector(".mdc-text-field")))}disconnectedCallback(){this.mdcTextField&&this.mdcTextField.destroy()}render(){return[s("input",{hidden:!0,id:this.fileInputId,onChange:this.handleFileChange,type:"file",accept:this.accept,disabled:this.disabled||this.readonly}),s("limel-chip-set",{class:{"is-file-picker":!0,"shows-dropzone":!0,"highlight-dropzone":this.isDraggingOverDropZone},disabled:this.disabled,readonly:this.readonly,label:this.label,leadingIcon:"upload_to_cloud",onChange:this.handleChipSetChange,onClick:this.handleFileSelection,onInteract:this.handleChipInteract,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,required:this.required,type:"input",value:this.chipArray,title:this.getTranslation("drag-and-drop-tips"),onDragEnter:this.handleDragEnter,onDragOver:this.preventAndStop,onDragLeave:this.handleDragLeave,onDrop:this.handleFileDrop})]}get chipArray(){return this.value?[Object.assign(Object.assign({},r),{text:this.value.filename,id:this.value.id,icon:this.value.icon||"note",iconFillColor:this.value.iconColor,iconBackgroundColor:this.value.iconBackgroundColor,href:this.value.href})]:[]}handleKeyDown(t){"Tab"!==t.code&&"Backspace"!==t.code&&"Enter"!==t.code&&(t.preventDefault(),t.stopPropagation())}handleKeyUp(t){"Enter"!==t.code||this.value||this.fileInput.click()}handleFileSelection(t){t.stopPropagation(),t.preventDefault(),this.value||this.fileInput.click()}handleFileChange(t){this.fileInput.files.length>0&&(t.stopPropagation(),this.handleFile(this.fileInput.files[0]))}handleFile(t){const i={id:n(),filename:t.name,contentType:t.type,size:t.size,fileContent:t};this.change.emit(i),this.chipSet.blur(),this.mdcTextField.valid=!0}handleChipSetChange(t){t.stopPropagation();const i=t.detail.length?null:t.detail[0];this.chipSet.blur(),i||(this.fileInput.value="",this.change.emit(i),this.required&&(this.mdcTextField.valid=!1))}handleChipInteract(t){t.stopPropagation(),t.preventDefault(),this.interact.emit(t.detail.id)}preventAndStop(t){t.stopPropagation(),t.preventDefault()}getTranslation(t){return e.get(`file.${t}`,this.language)}get element(){return h(this)}};a.style=":host{--icon-background-color:rgb(var(--contrast-400));--icon-color:rgb(var(--contrast-1100))}";export{a as limel_file}