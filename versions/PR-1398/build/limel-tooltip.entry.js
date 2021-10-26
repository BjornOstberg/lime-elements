import{r as t,h as i,g as e}from"./index-c1a676a1.js";import{c as s}from"./random-string-2246b81e.js";const o=class{constructor(i){t(this,i),this.showTooltip=()=>{this.showTooltipTimeoutHandle=window.setTimeout((()=>{this.open=!0}),500)},this.hideTooltip=()=>{clearTimeout(this.showTooltipTimeoutHandle),this.open=!1},this.portalId=s(),this.tooltipId=s()}connectedCallback(){this.setOwnerAriaLabel(),this.addListeners()}disconnectedCallback(){this.removeListeners()}render(){const t=getComputedStyle(this.host).getPropertyValue("--tooltip-z-index");return i("div",{class:"trigger-anchor"},i("limel-portal",{visible:this.open,containerId:this.portalId,containerStyle:{"z-index":t,"pointer-events":"none"}},i("limel-tooltip-content",{label:this.label,helperLabel:this.helperLabel,role:"tooltip","aria-hidden":!this.open,id:this.tooltipId})))}setOwnerAriaLabel(){const t=this.getOwnerElement();null==t||t.setAttribute("aria-describedby",this.tooltipId)}addListeners(){const t=this.getOwnerElement();null==t||t.addEventListener("mouseover",this.showTooltip),null==t||t.addEventListener("mouseout",this.hideTooltip),null==t||t.addEventListener("click",this.hideTooltip)}removeListeners(){const t=this.getOwnerElement();null==t||t.removeEventListener("mouseover",this.showTooltip),null==t||t.removeEventListener("mouseout",this.hideTooltip),null==t||t.removeEventListener("click",this.hideTooltip)}getOwnerElement(){var t;let i=this.host;do{i=i.parentNode}while(i&&i.nodeType!==Node.DOCUMENT_FRAGMENT_NODE&&i.nodeType!==Node.DOCUMENT_NODE);return null===(t=i)||void 0===t?void 0:t.getElementById(this.elementId)}get host(){return e(this)}};o.style=".trigger-anchor{display:inline-block;position:relative}.tooltip-container{color:#f1f1f1;background-color:#232324}";export{o as limel_tooltip}