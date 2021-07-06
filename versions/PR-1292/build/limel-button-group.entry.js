import{r as c,c as i,h as e}from"./index-7619d89c.js";import{c as r}from"./random-string-2246b81e.js";const d=class{constructor(e){c(this,e),this.change=i(this,"change",7),this.value=[],this.disabled=!1,this.radioGroupName=r(),this.renderButton=this.renderButton.bind(this),this.onChange=this.onChange.bind(this),this.renderContent=this.renderContent.bind(this)}componentWillLoad(){var c;this.selectedButtonId=null===(c=this.value.find((c=>c.selected)))||void 0===c?void 0:c.id}render(){return e("div",{class:{"mdc-chip-set":!0,disabled:this.disabled,"mdc-chip-set--choice":!0},role:"grid"},this.value.map(this.renderButton))}renderButton(c){const i={"mdc-chip":!0,"mdc-chip--selected":this.isButtonChecked(c)};return e("div",{class:i,role:"row"},e("span",{role:"gridcell"},e("input",{type:"radio",name:this.radioGroupName,checked:this.isButtonChecked(c),id:c.id,onChange:this.onChange}),e("label",{htmlFor:c.id},this.renderContent(c))))}renderContent(c){return c.icon?this.renderIcon(c):this.renderLabel(c)}isButtonChecked(c){return c.id===this.selectedButtonId}renderLabel(c){return e("span",{class:"mdc-chip__text"},c.title)}renderIcon(c){return e("limel-icon",{class:"mdc-chip__icon","aria-label":c.title,title:c.title,name:c.icon,size:"small",badge:!0})}onChange(c){c.stopPropagation();const i=c.target;this.selectedButtonId=i.id;const e=this.value.find((c=>`${c.id}`===i.id));this.change.emit(e)}};d.style='.mdc-chip__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-chip__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-chip__icon--trailing:hover{color:rgba(0, 0, 0, 0.62)}.mdc-chip__icon--trailing:focus{color:rgba(0, 0, 0, 0.87)}.mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){width:1.25rem;height:1.25rem;font-size:1.25rem}.mdc-chip__icon.mdc-chip__icon--trailing{width:1.125rem;height:1.125rem;font-size:1.125rem}.mdc-chip__icon--trailing{margin-left:0.25rem;margin-right:-0.25rem}[dir=rtl] .mdc-chip__icon--trailing,.mdc-chip__icon--trailing[dir=rtl]{margin-left:-0.25rem;margin-right:0.25rem}.mdc-touch-target-wrapper{display:inline}.mdc-chip{border-radius:1rem;background-color:#e0e0e0;color:rgba(0, 0, 0, 0.87);font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:1.25rem;font-weight:400;letter-spacing:0.0178571429em;text-decoration:inherit;text-transform:inherit;height:2rem;display:inline-flex;position:relative;align-items:center;box-sizing:border-box;padding:0 0.75rem;border-width:0;outline:none;cursor:pointer;-webkit-appearance:none}.mdc-chip .mdc-chip__ripple{border-radius:1rem}.mdc-chip:hover{color:rgba(0, 0, 0, 0.87)}.mdc-chip.mdc-chip--selected .mdc-chip__checkmark,.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){margin-left:-0.25rem;margin-right:0.25rem}[dir=rtl] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark,.mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=rtl],[dir=rtl] .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=rtl]{margin-left:0.25rem;margin-right:-0.25rem}.mdc-chip::-moz-focus-inner{padding:0;border:0}.mdc-chip:hover{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-chip .mdc-chip__touch{position:absolute;top:50%;right:0;left:0;height:3rem;transform:translateY(-50%)}.mdc-chip--exit{transition:opacity 75ms cubic-bezier(0.4, 0, 0.2, 1), width 150ms cubic-bezier(0, 0, 0.2, 1), padding 100ms linear, margin 100ms linear;opacity:0}.mdc-chip__text{white-space:nowrap}.mdc-chip__icon{border-radius:50%;outline:none;vertical-align:middle}.mdc-chip__checkmark{height:1.25rem}.mdc-chip__checkmark-path{transition:stroke-dashoffset 150ms 50ms cubic-bezier(0.4, 0, 0.6, 1);stroke-width:0.125rem;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-chip__text:focus{outline:none}.mdc-chip--selected .mdc-chip__checkmark-path{stroke-dashoffset:0}.mdc-chip__icon--leading,.mdc-chip__icon--trailing{position:relative}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__icon--leading{color:rgba(98, 0, 238, 0.54)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-chip-set--choice .mdc-chip .mdc-chip__checkmark-path{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-chip-set--choice .mdc-chip--selected{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-chip__checkmark-svg{width:0;height:1.25rem;transition:width 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-chip--selected .mdc-chip__checkmark-svg{width:1.25rem}.mdc-chip-set--filter .mdc-chip__icon--leading{transition:opacity 75ms linear;transition-delay:-50ms;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark{transition:opacity 75ms linear;transition-delay:80ms;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark .mdc-chip__checkmark-svg{transition:width 0ms}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading{opacity:0}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading+.mdc-chip__checkmark{width:0;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading{width:0;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading+.mdc-chip__checkmark{width:1.25rem}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:0.0625rem solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-chip{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-chip .mdc-chip__ripple::before,.mdc-chip .mdc-chip__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-chip .mdc-chip__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1}.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-chip.mdc-ripple-upgraded--unbounded .mdc-chip__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-chip.mdc-ripple-upgraded--foreground-activation .mdc-chip__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-chip.mdc-ripple-upgraded--foreground-deactivation .mdc-chip__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-chip .mdc-chip__ripple::before,.mdc-chip .mdc-chip__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-chip .mdc-chip__ripple::before,.mdc-chip .mdc-chip__ripple::after{background-color:rgba(0, 0, 0, 0.87)}.mdc-chip:hover .mdc-chip__ripple::before{opacity:0.04}.mdc-chip.mdc-ripple-upgraded--background-focused .mdc-chip__ripple::before,.mdc-chip.mdc-ripple-upgraded:focus-within .mdc-chip__ripple::before,.mdc-chip:not(.mdc-ripple-upgraded):focus .mdc-chip__ripple::before,.mdc-chip:not(.mdc-ripple-upgraded):focus-within .mdc-chip__ripple::before{transition-duration:75ms;opacity:0.12}.mdc-chip:not(.mdc-ripple-upgraded) .mdc-chip__ripple::after{transition:opacity 150ms linear}.mdc-chip:not(.mdc-ripple-upgraded):active .mdc-chip__ripple::after{transition-duration:75ms;opacity:0.12}.mdc-chip.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-chip .mdc-chip__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple::before{opacity:0.08}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple::before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple::before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover .mdc-chip__ripple::before{opacity:0.12}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded--background-focused .mdc-chip__ripple::before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded:focus-within .mdc-chip__ripple::before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus .mdc-chip__ripple::before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus-within .mdc-chip__ripple::before{transition-duration:75ms;opacity:0.2}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded) .mdc-chip__ripple::after{transition:opacity 150ms linear}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):active .mdc-chip__ripple::after{transition-duration:75ms;opacity:0.2}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.2}@keyframes mdc-chip-entry{from{transform:scale(0.8);opacity:0.4}to{transform:scale(1);opacity:1}}.mdc-chip-set{padding:0.25rem;display:flex;flex-wrap:wrap;box-sizing:border-box}.mdc-chip-set .mdc-chip{margin:0.25rem}.mdc-chip-set .mdc-chip--touch{margin-top:0.5rem;margin-bottom:0.5rem}.mdc-chip-set--input .mdc-chip{animation:mdc-chip-entry 100ms cubic-bezier(0, 0, 0.2, 1)}.mdc-chip{transition:background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease-out;max-width:100%;min-width:2rem;padding:0 0.0625rem;display:inline-grid;grid-auto-flow:column;background-color:transparent;margin:0.125rem !important}.mdc-chip:hover{box-shadow:var(--button-shadow-hovered)}.mdc-chip:active{box-shadow:var(--button-shadow-inset-pressed);transform:translate3d(0, 0.05rem, 0)}.mdc-chip:not(:last-child):after{content:"";display:block;height:1rem;width:0.125rem;border-radius:0.25rem;background-color:rgb(var(--contrast-600));position:absolute;right:-0.1875rem;top:0;bottom:0;margin:auto}.mdc-chip label{cursor:pointer;transition:color 0.2s ease}.mdc-chip input[type=radio]{width:0;position:absolute;opacity:0}.mdc-chip input[type=radio]:focus-visible+label:after{content:"";display:block;position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3.75rem;box-shadow:var(--shadow-depth-8-focused);z-index:1}.mdc-chip span[role=gridcell]{min-width:0}.mdc-chip span[role=gridcell]:focus-within{outline:none;color:var(--mdc-theme-primary)}.mdc-chip span[role=gridcell]:only-child .mdc-chip__text{padding-left:0.75rem}.mdc-chip span[role=gridcell]:first-child .mdc-chip__text{padding-left:0.75rem}.mdc-chip:hover{background-color:rgb(var(--contrast-100))}.mdc-chip.mdc-chip--selected{box-shadow:var(--button-shadow-inset)}.mdc-chip.mdc-chip--selected:active{box-shadow:var(--button-shadow-inset-pressed)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected{color:rgb(var(--contrast-1300))}.mdc-chip__text{overflow:hidden;text-overflow:ellipsis;display:block;padding:0 0.75rem 0 0.25rem}.mdc-chip-set{align-items:center;border-radius:3.75rem;background-color:rgb(var(--contrast-400));padding:0;width:max-content;max-width:100%;flex-wrap:nowrap}.mdc-chip-set.disabled{cursor:not-allowed;pointer-events:none;opacity:0.4}';export{d as limel_button_group}