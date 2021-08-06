import{r as t,c as i,h as s,g as n}from"./index-7619d89c.js";import{i as e}from"./dom-0f79cbe7.js";import{T as h,b as r,A as o,c as a,d as l,e as c,f as u,g as d}from"./keycodes-1db9effd.js";import{c as p}from"./random-string-2246b81e.js";function f(t){return"function"==typeof t?t():t}function m(){var t={};return t.promise=new Promise((function(i,s){t.resolve=i,t.reject=s})),t}function v(t){var i=null,s=null,n=new Promise((function(t,n){i=t,s=n}));return t&&t.then((function(t){i&&i(t)}),(function(t){s&&s(t)})),{promise:n,resolve:function(t){i&&i(t)},reject:function(t){s&&s(t)},cancel:function(){i=null,s=null}}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var g=function(){return(g=Object.assign||function(t){for(var i,s=1,n=arguments.length;s<n;s++)for(var e in i=arguments[s])Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e]);return t}).apply(this,arguments)},y={key:function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return null},onlyResolvesLast:!0},b=function(){function t(t){this.config=t,this.debounceSingleton=null,this.debounceCache={}}return t.prototype._createDebouncedFunction=function(){var t,i,s=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=void 0,e=void 0,h=void 0,r=[];return function(){var a=f(i),l=(new Date).getTime(),c=!n||l-n>a;n=l;for(var u=arguments.length,d=Array(u),p=0;p<u;p++)d[p]=arguments[p];if(c&&s.leading)return s.accumulate?Promise.resolve(t.call(this,[d])).then((function(t){return t[0]})):Promise.resolve(t.call.apply(t,[this].concat(d)));if(e?clearTimeout(h):e=m(),r.push(d),h=setTimeout(o.bind(this),a),s.accumulate){var v=r.length-1;return e.promise.then((function(t){return t[v]}))}return e.promise};function o(){var i=e;clearTimeout(h),Promise.resolve(s.accumulate?t.call(this,r):t.apply(this,r[r.length-1])).then(i.resolve,i.reject),r=[],e=null}}(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(t=s,i=null,s=function(){for(var s=[],n=0;n<arguments.length;n++)s[n]=arguments[n];i&&i();var e=v(t.apply(void 0,s));return i=e.cancel,e.promise}),{func:s}},t.prototype.getDebouncedFunction=function(t){var i,s=(i=this.config.options).key.apply(i,t);return null==s?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[s]||(this.debounceCache[s]=this._createDebouncedFunction()),this.debounceCache[s])},t}();const w=class{constructor(s){t(this,s),this.change=i(this,"change",7),this.interact=i(this,"interact",7),this.action=i(this,"action",7),this.disabled=!1,this.readonly=!1,this.required=!1,this.multiple=!1,this.displayFullList=!1,this.actions=[],this.actionPosition="bottom",this.actionScrollBehaviour="sticky",this.textValue="",this.loading=!1,this.chips=[],this.chipSetEditMode=!1,this.handleTextInput=this.handleTextInput.bind(this),this.handleInputKeyDown=this.handleInputKeyDown.bind(this),this.handleDropdownKeyDown=this.handleDropdownKeyDown.bind(this),this.handleInputFieldFocus=this.handleInputFieldFocus.bind(this),this.handleChange=this.handleChange.bind(this),this.handleInteract=this.handleInteract.bind(this),this.handleListChange=this.handleListChange.bind(this),this.handleActionListChange=this.handleActionListChange.bind(this),this.handleStopEditAndBlur=this.handleStopEditAndBlur.bind(this),this.createDebouncedSearcher=this.createDebouncedSearcher.bind(this),this.handleCloseMenu=this.handleCloseMenu.bind(this),this.portalId=p()}componentWillLoad(){this.chips=this.createChips(this.value)}componentDidLoad(){this.createDebouncedSearcher(this.searcher),this.chipSet=this.host.shadowRoot.querySelector("limel-chip-set")}async componentWillUpdate(){this.chipSetEditMode=!1,this.chipSet&&(this.chipSetEditMode=await this.chipSet.getEditMode())}render(){this.chips.forEach((t=>{"iconBackgroundColor"in t&&t.iconBackgroundColor&&(t.iconFillColor="rgb(var(--color-white))")}));const t={};return this.multiple||(t.maxItems=1),[s("limel-chip-set",Object.assign({type:"input",label:this.label,leadingIcon:this.leadingIcon,value:this.chips,disabled:this.disabled,readonly:this.readonly,required:this.required,searchLabel:this.searchLabel,onInput:this.handleTextInput,onKeyDown:this.handleInputKeyDown,onChange:this.handleChange,onInteract:this.handleInteract,onStartEdit:this.handleInputFieldFocus,onStopEdit:this.handleStopEditAndBlur,emptyInputOnBlur:!1},t)),this.renderDropdown()]}onChangeValue(){this.chips=this.createChips(this.value)}createDebouncedSearcher(t){var i,s,n;"function"==typeof t&&(this.debouncedSearch=(i=t,500,s=g({},y,undefined),n=new b({func:i,wait:500,options:s}),function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return n.getDebouncedFunction(t).func.apply(void 0,t)}))}createChips(t){return t?this.multiple?t.map(this.createChip):[this.createChip(t)]:[]}createChip(t){return{id:`${t.value}`,text:t.text,removable:!0,icon:t.icon,iconBackgroundColor:t.iconColor,value:t}}renderDropdown(){const t=this.getDropdownContent(),i=[];if(this.shouldShowDropDownContent()){const s=this.getActionContent();"top"===this.actionPosition&&i.push(s),t&&i.push(t),"bottom"===this.actionPosition&&i.push(s)}return this.renderPortal(i)}getActionContent(){var t,i;return 0===(null!==(i=null===(t=this.actions)||void 0===t?void 0:t.length)&&void 0!==i?i:0)?null:[s("limel-list",{class:{"static-actions-list":!0,"is-on-top":"top"===this.actionPosition,"is-at-bottom":"bottom"===this.actionPosition,"has-position-sticky":"sticky"===this.actionScrollBehaviour},badgeIcons:!0,type:"selectable",onChange:this.handleActionListChange,items:this.actions.map(this.removeUnusedPropertiesOnAction)})]}removeUnusedPropertiesOnAction(t){return Object.assign(Object.assign({},t),{actions:[]})}shouldShowDropDownContent(){return!this.isFull()&&!!this.chipSetEditMode}getDropdownContent(){if(this.shouldShowDropDownContent())return this.loading?this.renderSpinner():this.items&&this.items.length?this.renderListResult():this.renderEmptyMessage()}isFull(){return!this.multiple&&!!this.value}renderSpinner(){return s("div",{style:{"padding-top":"6px","text-align":"center"}},s("limel-spinner",{class:"dropdown--spinner"}))}renderEmptyMessage(){if(this.emptyResultMessage)return s("p",{style:{color:"var(--lime-light-grey, #{$lime-light-grey})","text-align":"center"}},this.emptyResultMessage)}renderListResult(){const t=this.items.some((t=>"icon"in t&&!!t.icon));return s("limel-list",{badgeIcons:t,onChange:this.handleListChange,type:"selectable",items:this.items})}renderPortal(t=[]){const i=getComputedStyle(this.host).getPropertyValue("--dropdown-z-index");return s("limel-portal",{visible:t.length>0,containerId:this.portalId,inheritParentWidth:!0,containerStyle:{"z-index":i}},s("limel-menu-surface",{open:t.length>0,allowClicksElement:this.host,style:{"--menu-surface-width":"100%","max-height":"inherit",display:"flex"},onDismiss:this.handleCloseMenu},t))}handleStopEditAndBlur(){const t=this.host.shadowRoot.activeElement||document.activeElement,i=document.querySelector(`#${this.portalId}`);e(t,this.host)||e(t,i)||this.clearInputField()}async handleTextInput(t){t.stopPropagation();const i=t.detail;this.textValue=i,this.loading=!0;const s=""===i?this.searcher:this.debouncedSearch,n=await s(i);this.handleSearchResult(i,n)}handleListChange(t){var i;if(t.stopPropagation(),!this.value||this.value!==t.detail){let i=t.detail;this.multiple&&(i=[...this.value,t.detail]),this.change.emit(i),this.items=[]}this.multiple&&(null===(i=this.chipSet)||void 0===i||i.setFocus(!0))}handleActionListChange(t){t.stopPropagation(),t.detail&&(this.action.emit(t.detail.value),this.items=[])}async handleInputFieldFocus(){this.loading=!0;const t=this.textValue,i=await this.searcher(t);this.handleSearchResult(t,i)}handleChange(t){var i;t.stopPropagation();let s=null;this.multiple&&(s=t.detail.map((t=>this.value.find((i=>`${i.value}`===t.id))))),s&&s.length||null===(i=this.chipSet)||void 0===i||i.setFocus(!0),this.change.emit(s)}handleInteract(t){t.stopPropagation(),this.interact.emit(t.detail?t.detail.value:t.detail)}handleInputKeyDown(t){const i=!(t.key!==h&&t.keyCode!==r||t.altKey||t.metaKey||t.shiftKey),s=t.key===o||t.keyCode===a,n=t.key===l||t.keyCode===c;if(!i&&!s&&!n)return;const e=document.querySelector(` #${this.portalId} limel-list`);e&&(t.preventDefault(),i||n?e.shadowRoot.querySelector(".mdc-deprecated-list-item:first-child").focus():s&&e.shadowRoot.querySelector(".mdc-deprecated-list-item:last-child").focus())}handleDropdownKeyDown(t){(t.key===u||t.keyCode===d)&&(t.preventDefault(),this.textValue="",this.chipSet.setFocus(!0))}handleSearchResult(t,i){if(t===this.textValue){if(this.items=i,this.multiple){const t=this.value;this.items=i.filter((i=>!t.includes(i)))}this.loading=!1}}handleCloseMenu(){this.clearInputField()}clearInputField(){this.chipSet.emptyInput(),this.textValue="",this.handleSearchResult("",[])}get host(){return n(this)}static get watchers(){return{value:["onChangeValue"],searcher:["createDebouncedSearcher"]}}};w.style=":host{position:relative;display:block}:host([hidden]){display:none}";export{w as limel_picker}