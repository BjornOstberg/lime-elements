import{r as t,c as e,h as o,g as r}from"./index-7619d89c.js";const a=class{constructor(o){t(this,o),this.change=e(this,"change",7),this.flowItems=[],this.disabled=!1,this.readonly=!1,this.handleFlowItemClick=this.handleFlowItemClick.bind(this)}render(){const t=this.flowItems.filter((t=>!t.isOffProgress)),e=this.flowItems.filter((t=>t.isOffProgress)),r=t.findIndex((t=>t.selected));return[t.map(((e,a)=>o("limel-progress-flow-item",{class:{"flow-item":!0,first:0===a,last:a===t.length-1,passed:a<r,active:e.selected},style:this.getItemStyle(e),disabled:this.disabled||this.readonly,readonly:this.readonly,item:e,onInteract:()=>{this.handleFlowItemClick(e)}}))),e.map(((t,r)=>o("limel-progress-flow-item",{class:{"flow-item":!0,"off-progress-item":!0,active:t.selected,"first-off-progress-item":0===r,"last-off-progress-item":r===e.length-1},style:this.getItemStyle(t),disabled:this.disabled||this.readonly,readonly:this.readonly,item:t,onInteract:()=>{this.handleFlowItemClick(t)}})))]}handleFlowItemClick(t){t.selected||t.disabled||this.disabled||this.change.emit(t)}getItemStyle(t){const e={};return(null==t?void 0:t.activeColor)&&(e["--progress-flow-step-background-color--active"]=t.activeColor),(null==t?void 0:t.passedColor)&&(e["--progress-flow-step-background-color--passed"]=t.passedColor),(null==t?void 0:t.iconColor)&&(e["--progress-flow-icon-color--inactive"]=t.iconColor),e}componentDidRender(){this.setFocusOnActiveItem()}setFocusOnActiveItem(){const t=this.getActiveElement();t&&this.element.scrollTo({behavior:"smooth",left:t.offsetLeft-this.element.offsetLeft-this.element.offsetWidth/2+t.offsetWidth/2})}getActiveElement(){const t=this.element.shadowRoot.querySelector(".flow-item .active");return null==t?void 0:t.parentElement}get element(){return r(this)}};a.style=":host{--mdc-theme-primary:var(\n      --lime-primary-color,\n      rgb(var(--color-teal-default))\n  );--mdc-theme-secondary:var(\n      --lime-secondary-color,\n      rgb(var(--contrast-1100))\n  );--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-text-disabled-on-background:var(\n      --lime-text-disabled-on-background-color,\n      rgba(var(--contrast-1700), 0.38)\n  );--mdc-theme-text-primary-on-background:var(\n      --lime-text-primary-on-background-color,\n      rgba(var(--contrast-1700), 0.87)\n  );--mdc-theme-text-secondary-on-background:var(\n      --lime-text-secondary-on-background-color,\n      rgba(var(--contrast-1700), 0.54)\n  );--lime-error-text-color:rgb(var(--color-red-darker))}:root{--mdc-theme-primary:#26a69a;--mdc-theme-secondary:#575756;--mdc-theme-background:#fff;--mdc-theme-surface:#fff;--mdc-theme-error:#b00020;--mdc-theme-on-primary:#fff;--mdc-theme-on-secondary:#fff;--mdc-theme-on-surface:#000;--mdc-theme-on-error:#fff;--mdc-theme-text-primary-on-background:rgba(0, 0, 0, 0.87);--mdc-theme-text-secondary-on-background:rgba(0, 0, 0, 0.54);--mdc-theme-text-hint-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-disabled-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-icon-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-primary-on-light:rgba(0, 0, 0, 0.87);--mdc-theme-text-secondary-on-light:rgba(0, 0, 0, 0.54);--mdc-theme-text-hint-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-disabled-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-icon-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-primary-on-dark:white;--mdc-theme-text-secondary-on-dark:rgba(255, 255, 255, 0.7);--mdc-theme-text-hint-on-dark:rgba(255, 255, 255, 0.5);--mdc-theme-text-disabled-on-dark:rgba(255, 255, 255, 0.5);--mdc-theme-text-icon-on-dark:rgba(255, 255, 255, 0.5)}.mdc-theme--primary{color:#26a69a !important;color:var(--mdc-theme-primary, #26a69a) !important}.mdc-theme--secondary{color:#575756 !important;color:var(--mdc-theme-secondary, #575756) !important}.mdc-theme--background{background-color:#fff;background-color:var(--mdc-theme-background, #fff)}.mdc-theme--surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-theme--error{color:#b00020 !important;color:var(--mdc-theme-error, #b00020) !important}.mdc-theme--on-primary{color:#fff !important;color:var(--mdc-theme-on-primary, #fff) !important}.mdc-theme--on-secondary{color:#fff !important;color:var(--mdc-theme-on-secondary, #fff) !important}.mdc-theme--on-surface{color:#000 !important;color:var(--mdc-theme-on-surface, #000) !important}.mdc-theme--on-error{color:#fff !important;color:var(--mdc-theme-on-error, #fff) !important}.mdc-theme--text-primary-on-background{color:rgba(0, 0, 0, 0.87) !important;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87)) !important}.mdc-theme--text-secondary-on-background{color:rgba(0, 0, 0, 0.54) !important;color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54)) !important}.mdc-theme--text-hint-on-background{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-disabled-on-background{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-disabled-on-background, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-icon-on-background{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-primary-on-light{color:rgba(0, 0, 0, 0.87) !important;color:var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87)) !important}.mdc-theme--text-secondary-on-light{color:rgba(0, 0, 0, 0.54) !important;color:var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54)) !important}.mdc-theme--text-hint-on-light{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-disabled-on-light{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-icon-on-light{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-icon-on-light, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-primary-on-dark{color:white !important;color:var(--mdc-theme-text-primary-on-dark, white) !important}.mdc-theme--text-secondary-on-dark{color:rgba(255, 255, 255, 0.7) !important;color:var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7)) !important}.mdc-theme--text-hint-on-dark{color:rgba(255, 255, 255, 0.5) !important;color:var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5)) !important}.mdc-theme--text-disabled-on-dark{color:rgba(255, 255, 255, 0.5) !important;color:var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5)) !important}.mdc-theme--text-icon-on-dark{color:rgba(255, 255, 255, 0.5) !important;color:var(--mdc-theme-text-icon-on-dark, rgba(255, 255, 255, 0.5)) !important}.mdc-theme--primary-bg{background-color:#26a69a !important;background-color:var(--mdc-theme-primary, #26a69a) !important}.mdc-theme--secondary-bg{background-color:#575756 !important;background-color:var(--mdc-theme-secondary, #575756) !important}.mdc-typography{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.mdc-typography--headline1{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.375rem;line-height:1.375rem;font-weight:300;letter-spacing:-0.015625em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline2{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:0.875rem;font-weight:300;letter-spacing:-0.0083333333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline3{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:0.875rem;font-weight:400;letter-spacing:normal;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline4{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:0.875rem;font-weight:400;letter-spacing:0.0073529412em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline5{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:0.875rem;font-weight:400;letter-spacing:normal;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline6{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:0.875rem;font-weight:500;letter-spacing:0.0125em;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle1{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:1.125rem;font-weight:400;letter-spacing:0.009375em;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.125rem;font-weight:500;letter-spacing:0.0071428571em;text-decoration:inherit;text-transform:inherit}.mdc-typography--body1{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.5rem;font-weight:400;letter-spacing:0.03125em;text-decoration:inherit;text-transform:inherit}.mdc-typography--body2{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.625rem;font-weight:400;letter-spacing:0.0178571429em;text-decoration:inherit;text-transform:inherit}.mdc-typography--caption{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.6875rem;line-height:0.875rem;font-weight:400;letter-spacing:0.0333333333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--button{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:2.25rem;font-weight:500;letter-spacing:0.0892857143em;text-decoration:none;text-transform:none}.mdc-typography--overline{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.6875rem;line-height:0.875rem;font-weight:500;letter-spacing:0.1666666667em;text-decoration:none;text-transform:uppercase}:host{--progress-flow-gap:0.25rem;--step-height:2.5rem;--active-indicator-right:-0.5rem;--max-text-width:10rem;box-sizing:border-box;width:100%;display:flex;flex-direction:row;align-items:flex-start;gap:var(--progress-flow-gap);overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;padding:0.25rem}:host::-webkit-scrollbar{display:none}.first-off-progress-item{margin-left:0.5rem}:host(.is-narrow){--step-height:1.5rem;--active-indicator-right:0;--progress-flow-gap:0.125rem}";const i=class{constructor(o){t(this,o),this.interact=e(this,"interact",7),this.item=null,this.disabled=!1,this.readonly=!1}render(){var t,e;return[o("button",{tabindex:"0",title:this.item.text+(this.item.secondaryText?" · "+this.item.secondaryText:""),type:"button",class:{step:!0,active:null===(t=this.item)||void 0===t?void 0:t.selected,disabled:this.disabled||(null===(e=this.item)||void 0===e?void 0:e.disabled),readonly:this.readonly},onClick:()=>{this.interact.emit()}},this.renderIcon(),o("span",{class:"text"},this.item.text),o("div",{class:"divider"})),this.renderSecondaryText()]}renderSecondaryText(){var t;if(null===(t=this.item)||void 0===t?void 0:t.secondaryText)return o("div",{class:"secondary-text"},this.item.secondaryText)}renderIcon(){if(this.item.icon)return o("limel-icon",{name:this.item.icon,size:"small",class:"icon"})}get element(){return r(this)}};i.style='.step:after{pointer-events:none;box-sizing:border-box;z-index:2;position:absolute;right:var(--active-indicator-right);background-color:var(--step-divider-color);width:0.375rem;height:0.375rem;border-radius:50%;opacity:0.7}.last .step:after{right:0.5rem}.step:not(.off-progress).active:after{content:""}.step{color:var(--step-text--inactive);background-color:var(--step-background--inactive)}.step .icon{color:var(--progress-flow-icon-color--inactive, var(--step-text--inactive))}.flow-item.active .step{color:var(--step-text--active);background-color:var(--step-background--active)}.flow-item.active .step .divider:after{background-color:var(--step-background--active)}.flow-item.active .step .icon{color:var(--step-text--active)}.flow-item.passed .step{color:var(--step-text--passed);background-color:var(--step-background--passed)}.flow-item.passed .step .divider:after{background-color:var(--step-background--passed)}.flow-item.passed .step .icon{color:var(--step-text--passed)}.divider:after{border-color:var(--step-divider-color);background-color:var(--step-background--inactive)}:host(.has-detached-steps){--progress-flow-gap:0;--active-indicator-right:0.5rem;--step-height:1.75rem;padding-top:var(--step-height)}:host(.has-detached-steps) .flow-item{align-items:center;--step-background--inactive:var(\n      --progress-flow-step-background-color--inactive,\n      rgb(var(--contrast-400))\n  )}:host(.has-detached-steps) .flow-item:not(.active) .step:not(.disabled):before{box-shadow:var(--button-shadow-normal)}:host(.has-detached-steps) .flow-item:not(.active) .step:not(.disabled):hover{box-shadow:none}:host(.has-detached-steps) .flow-item:not(.active) .step:not(.disabled):hover:before{box-shadow:var(--button-shadow-hovered)}:host(.has-detached-steps) .flow-item:not(.active) .step:not(.disabled):active:before{box-shadow:var(--button-shadow-pressed)}:host(.has-detached-steps) .step{border-radius:var(--step-height);background-color:transparent;padding:0 !important}:host(.has-detached-steps) .step:after{right:0;left:0;bottom:0;top:0;margin:auto;height:calc(var(--step-height) + 0.5rem);width:calc(var(--step-height) + 0.5rem);border-width:0.125rem;border-style:solid;background-color:transparent;opacity:0.5}:host(.has-detached-steps) .step:before{transition:box-shadow 0.2s ease, background-color 0.2s ease;content:"";width:var(--step-height);height:var(--step-height);border-radius:var(--step-height);position:absolute;top:0;right:0;bottom:0;left:0;margin:auto}:host(.has-detached-steps) .divider{width:100%;z-index:0}:host(.has-detached-steps) .divider:after{transform:rotate(0deg);border:none;height:0.25rem;border-radius:0;width:calc(100% - var(--step-height));transform:translateX(calc(50% + var(--step-height)))}:host(.has-detached-steps) .off-progress-item:not(.last-off-progress-item) .divider:after{content:"";border:none;border-top:0.25rem dashed var(--step-background--inactive);background:none}:host(.has-detached-steps) .icon{margin:0}:host(.has-detached-steps) .text{position:absolute;top:0;transform:translateY(calc(-100% - 0.25rem));font-size:0.8125rem}:host(.has-detached-steps) .secondary-text{padding-left:0;opacity:0.6}:host(.has-detached-steps) .flow-item .step:before{background-color:var(--step-background--inactive)}:host(.has-detached-steps) .flow-item.active .step{color:var(--step-text--inactive)}:host(.has-detached-steps) .flow-item.active .step .divider:after{background-image:linear-gradient(to right, var(--step-background--active), var(--step-background--inactive))}:host(.has-detached-steps) .flow-item.active .step:after{border-color:var(--step-background--active)}:host(.has-detached-steps) .flow-item.active .step:before{background-color:var(--step-background--active)}:host(.has-detached-steps) .flow-item.passed .step{color:var(--step-text--inactive)}:host(.has-detached-steps) .flow-item.passed .step:before{background-color:var(--step-background--passed)}.flow-item{--step-background--inactive:var(\n      --progress-flow-step-background-color--inactive,\n      rgb(var(--contrast-600))\n  );--step-background--active:var(\n      --progress-flow-step-background-color--active,\n      var(--mdc-theme-primary)\n  );--step-background--passed:var(\n      --progress-flow-step-background-color--passed,\n      var(--step-background--active)\n  );--step-text--inactive:var(\n      --progress-flow-step-text-color--inactive,\n      rgb(var(--contrast-1200))\n  );--step-text--active:var(\n      --progress-flow-step-text-color--active,\n      var(--mdc-theme-on-primary)\n  );--step-text--passed:var(\n      --progress-flow-step-text-color--passed,\n      var(--mdc-theme-on-primary)\n  );--step-divider-color:var(\n      --progress-flow-step-divider-color,\n      rgb(var(--contrast-100))\n  );position:relative;width:100%;display:flex;flex-direction:column;align-items:stretch}.flow-item:not(.off-progress-item,.last) .divider:after{content:""}.step{transition:background-color 0.2s ease, box-shadow 0.2s ease;display:flex;justify-content:center;align-items:center;position:relative;width:100%;height:var(--step-height);border:none;font-size:0.875rem}.step.disabled{opacity:0.75;cursor:not-allowed}.step.disabled.readonly{opacity:1;cursor:default}.step:focus{outline:none}.step:focus-visible{box-shadow:var(--shadow-depth-8-focused)}.flow-item:not(.off-progress-item,.first) .step{padding-left:calc(var(--step-height) / 2)}.flow-item:not(.active) .step:not(.disabled){cursor:pointer}.flow-item:not(.active) .step:not(.disabled):hover{box-shadow:var(--button-shadow-normal)}.flow-item:not(.active) .step:not(.disabled):active{box-shadow:var(--button-shadow-pressed)}.off-progress-item .step{border-radius:0.25rem;padding:0 0.75rem}.off-progress-item .step .icon{margin-left:0}.flow-item.first .step{border-top-left-radius:var(--step-height);border-bottom-left-radius:var(--step-height);padding-left:1.25rem}.flow-item.last .step{border-top-right-radius:var(--step-height);border-bottom-right-radius:var(--step-height);padding-right:1.25rem}.divider{height:var(--step-height);overflow-y:clip;position:absolute;right:0;z-index:1}.divider:before,.divider:after{box-sizing:border-box;transition:background-color 0.2s ease;display:block;position:absolute;top:0;bottom:0;margin:auto}.divider:after{border-style:solid;border-width:0.125rem 0.125rem 0 0;right:calc((var(--step-height) / 2 * -1) + var(--progress-flow-gap));width:calc(var(--step-height) * 0.9);height:calc(var(--step-height) * 0.9);border-radius:0 0.375rem 0 0;transform:rotate(45deg)}.text,.secondary-text{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:var(--max-text-width);z-index:2}.secondary-text{font-size:0.75rem;margin:auto;padding-left:calc(var(--step-height) / 2)}.icon{margin:0 0.5rem 0 0.25rem;z-index:2}';export{a as limel_progress_flow,i as limel_progress_flow_item}