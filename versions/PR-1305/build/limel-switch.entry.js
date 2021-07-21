import{r as t,c,h as r,g as e}from"./index-7619d89c.js";import{c as i}from"./random-string-2246b81e.js";import{M as a,a as o}from"./component-d682c974.js";import{M as d,a as n,b as s}from"./component-429e92ee.js";import{m}from"./ponyfill-30263d5e.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var h=function(t,c){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,c){t.__proto__=c}||function(t,c){for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r])})(t,c)};function l(t,c){if("function"!=typeof c&&null!==c)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");function r(){this.constructor=t}h(t,c),t.prototype=null===c?Object.create(c):(r.prototype=c.prototype,new r)}var u=function(){return(u=Object.assign||function(t){for(var c,r=1,e=arguments.length;r<e;r++)for(var i in c=arguments[r])Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);return t}).apply(this,arguments)};function p(t,c){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var e,i,a=r.call(t),o=[];try{for(;(void 0===c||c-- >0)&&!(e=a.next()).done;)o.push(e.value)}catch(t){i={error:t}}finally{try{e&&!e.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o}function b(t,c,r){if(r||2===arguments.length)for(var e,i=0,a=c.length;i<a;i++)!e&&i in c||(e||(e=Array.prototype.slice.call(c,0,i)),e[i]=c[i]);return t.concat(e||c)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},w={ARIA_CHECKED_ATTR:"aria-checked",NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"},_=function(t){function c(r){return t.call(this,u(u({},c.defaultAdapter),r))||this}return l(c,t),Object.defineProperty(c,"strings",{get:function(){return w},enumerable:!1,configurable:!0}),Object.defineProperty(c,"cssClasses",{get:function(){return f},enumerable:!1,configurable:!0}),Object.defineProperty(c,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){},setNativeControlAttr:function(){}}},enumerable:!1,configurable:!0}),c.prototype.setChecked=function(t){this.adapter.setNativeControlChecked(t),this.updateAriaChecked_(t),this.updateCheckedStyling_(t)},c.prototype.setDisabled=function(t){this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(f.DISABLED):this.adapter.removeClass(f.DISABLED)},c.prototype.handleChange=function(t){var c=t.target;this.updateAriaChecked_(c.checked),this.updateCheckedStyling_(c.checked)},c.prototype.updateCheckedStyling_=function(t){t?this.adapter.addClass(f.CHECKED):this.adapter.removeClass(f.CHECKED)},c.prototype.updateAriaChecked_=function(t){this.adapter.setNativeControlAttr(w.ARIA_CHECKED_ATTR,""+!!t)},c}(a),g=function(t){function c(){var c=null!==t&&t.apply(this,arguments)||this;return c.ripple_=c.createRipple_(),c}return l(c,t),c.attachTo=function(t){return new c(t)},c.prototype.destroy=function(){t.prototype.destroy.call(this),this.ripple_.destroy(),this.nativeControl_.removeEventListener("change",this.changeHandler_)},c.prototype.initialSyncWithDOM=function(){var t=this;this.changeHandler_=function(){for(var c,r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return(c=t.foundation).handleChange.apply(c,b([],p(r)))},this.nativeControl_.addEventListener("change",this.changeHandler_),this.checked=this.checked},c.prototype.getDefaultFoundation=function(){var t=this;return new _({addClass:function(c){return t.root.classList.add(c)},removeClass:function(c){return t.root.classList.remove(c)},setNativeControlChecked:function(c){return t.nativeControl_.checked=c},setNativeControlDisabled:function(c){return t.nativeControl_.disabled=c},setNativeControlAttr:function(c,r){return t.nativeControl_.setAttribute(c,r)}})},Object.defineProperty(c.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"checked",{get:function(){return this.nativeControl_.checked},set:function(t){this.foundation.setChecked(t)},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"disabled",{get:function(){return this.nativeControl_.disabled},set:function(t){this.foundation.setDisabled(t)},enumerable:!1,configurable:!0}),c.prototype.createRipple_=function(){var t=this,c=this.root.querySelector(_.strings.RIPPLE_SURFACE_SELECTOR),r=u(u({},d.createAdapter(this)),{addClass:function(t){return c.classList.add(t)},computeBoundingRect:function(){return c.getBoundingClientRect()},deregisterInteractionHandler:function(c,r){t.nativeControl_.removeEventListener(c,r,n())},isSurfaceActive:function(){return m(t.nativeControl_,":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(c,r){t.nativeControl_.addEventListener(c,r,n())},removeClass:function(t){c.classList.remove(t)},updateCssVariable:function(t,r){c.style.setProperty(t,r)}});return new d(this.root,new s(r))},Object.defineProperty(c.prototype,"nativeControl_",{get:function(){return this.root.querySelector(_.strings.NATIVE_CONTROL_SELECTOR)},enumerable:!1,configurable:!0}),c}(o);const y=class{constructor(r){t(this,r),this.change=c(this,"change",7),this.disabled=!1,this.readonly=!1,this.value=!1,this.fieldId=i(),this.onChange=t=>{t.stopPropagation(),this.change.emit(t.target.checked)}}connectedCallback(){this.initialize()}componentDidLoad(){this.initialize()}initialize(){const t=this.host.shadowRoot.querySelector(".mdc-switch");t&&(this.mdcSwitch=new g(t))}disconnectedCallback(){var t;null===(t=this.mdcSwitch)||void 0===t||t.destroy()}render(){return[r("div",{class:{"mdc-switch":!0,"mdc-switch--disabled":this.disabled||this.readonly,"lime-switch--readonly":this.readonly}},r("div",{class:"mdc-switch__track"}),r("div",{class:"mdc-switch__thumb-underlay"},r("div",{class:"mdc-switch__thumb"},r("input",{type:"checkbox",class:"mdc-switch__native-control",id:this.fieldId,role:"switch",onChange:this.onChange,disabled:this.disabled||this.readonly,checked:this.value})))),r("label",{class:this.disabled||this.readonly?"disabled":"",htmlFor:this.fieldId},this.label)]}valueWatcher(t,c){this.mdcSwitch&&t!==c&&(this.mdcSwitch.checked=t)}get host(){return e(this)}static get watchers(){return{value:["valueWatcher"]}}};y.style=":host{--mdc-theme-primary:var(\n      --lime-primary-color,\n      rgb(var(--color-teal-default))\n  );--mdc-theme-secondary:var(\n      --lime-secondary-color,\n      rgb(var(--contrast-1100))\n  );--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-text-disabled-on-background:var(\n      --lime-text-disabled-on-background-color,\n      rgba(var(--contrast-1700), 0.38)\n  );--mdc-theme-text-primary-on-background:var(\n      --lime-text-primary-on-background-color,\n      rgba(var(--contrast-1700), 0.87)\n  );--mdc-theme-text-secondary-on-background:var(\n      --lime-text-secondary-on-background-color,\n      rgba(var(--contrast-1700), 0.54)\n  );--lime-error-text-color:rgb(var(--color-red-darker))}.mdc-switch__thumb-underlay{left:-14px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-14px}.mdc-switch__native-control{width:64px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#575756;background-color:var(--mdc-theme-secondary, #575756)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#575756;background-color:var(--mdc-theme-secondary, #575756);border-color:#575756;border-color:var(--mdc-theme-secondary, #575756)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-color:#fff;border-color:var(--mdc-theme-surface, #fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:36px;height:14px;border:1px solid transparent;border-radius:7px;opacity:0.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:0.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(16px)}.mdc-switch--disabled{opacity:0.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::after{background-color:#9e9e9e;background-color:var(--mdc-ripple-color, #9e9e9e)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:hover::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-switch__thumb-underlay{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-switch__thumb-underlay::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-switch__thumb-underlay::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before,.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{background-color:#575756;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #575756))}.mdc-switch__thumb-underlay:hover::before,.mdc-switch__thumb-underlay.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}:host{display:inline-flex;align-items:center}.mdc-switch{margin-right:0.5rem}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#26a69a;background-color:var(--mdc-theme-primary, #26a69a)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#26a69a;background-color:var(--mdc-theme-primary, #26a69a);border-color:#26a69a;border-color:var(--mdc-theme-primary, #26a69a)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay::before,.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay::after{background-color:#26a69a;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #26a69a))}.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay:hover::before,.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}label{cursor:pointer}label.disabled{cursor:not-allowed;pointer-events:none;opacity:0.4}.mdc-switch.lime-switch--readonly{opacity:1}.mdc-switch.lime-switch--readonly .mdc-switch__track{opacity:1;border:none}.mdc-switch.lime-switch--readonly .mdc-switch__thumb{background-color:transparent !important;border:none;box-shadow:none}.mdc-switch.lime-switch--readonly .mdc-switch__thumb:after{content:\"\";position:absolute;top:0;right:0;bottom:0;left:0;opacity:0.8;background-repeat:no-repeat;background-position:center;background-size:0.5rem}.mdc-switch.lime-switch--readonly .mdc-switch__thumb-underlay{left:-1rem}.mdc-switch.lime-switch--readonly.mdc-switch--checked .mdc-switch__track{background-color:var(--mdc-theme-primary)}.mdc-switch.lime-switch--readonly.mdc-switch--checked .mdc-switch__thumb:after{background-image:url(\"data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='none' stroke='rgb(255,255,255)' stroke-width='6' stroke-miterlimit='10' d='M29 7L11 25l-8-8'/></svg>\")}.mdc-switch.lime-switch--readonly.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(1rem)}.mdc-switch.lime-switch--readonly:not(.mdc-switch--checked) .mdc-switch__track{background-color:rgb(var(--color-red-default))}.mdc-switch.lime-switch--readonly:not(.mdc-switch--checked) .mdc-switch__thumb:after{background-image:url(\"data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='none' stroke='rgb(255,255,255)' stroke-width='6' stroke-miterlimit='10' d='M8 8l16 16M24 8L8 24'/></svg>\")}.mdc-switch.lime-switch--readonly+label.disabled{cursor:default;opacity:1}";export{y as limel_switch}