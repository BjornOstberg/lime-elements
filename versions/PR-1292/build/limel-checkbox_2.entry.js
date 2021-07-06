import{r as e,c,h as o,g as r}from"./index-7619d89c.js";import{c as t}from"./random-string-2246b81e.js";import{C as n}from"./checkbox.template-2091b77f.js";import{_ as i,a,M as d,b as m}from"./component-892677ab.js";import{a as h}from"./util-0486b224.js";import{a as b}from"./events-16e3b5e6.js";import{m as l}from"./ponyfill-986552f9.js";import{M as s,a as k}from"./component-90d022ac.js";
/**
 * @license
 * Copyright 2016 Google Inc.
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
 */var u={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},f={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},p={ANIM_END_LATCH_MS:250},x=function(e){function c(o){var r=e.call(this,a({},c.defaultAdapter,o))||this;return r.currentCheckState_=f.TRANSITION_STATE_INIT,r.currentAnimationClass_="",r.animEndLatchTimer_=0,r.enableAnimationEndHandler_=!1,r}return i(c,e),Object.defineProperty(c,"cssClasses",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(c,"strings",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(c,"numbers",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(c,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),c.prototype.init=function(){this.currentCheckState_=this.determineCheckState_(),this.updateAriaChecked_(),this.adapter_.addClass(u.UPGRADED)},c.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer_)},c.prototype.setDisabled=function(e){this.adapter_.setNativeControlDisabled(e),e?this.adapter_.addClass(u.DISABLED):this.adapter_.removeClass(u.DISABLED)},c.prototype.handleAnimationEnd=function(){var e=this;this.enableAnimationEndHandler_&&(clearTimeout(this.animEndLatchTimer_),this.animEndLatchTimer_=setTimeout((function(){e.adapter_.removeClass(e.currentAnimationClass_),e.enableAnimationEndHandler_=!1}),p.ANIM_END_LATCH_MS))},c.prototype.handleChange=function(){this.transitionCheckState_()},c.prototype.transitionCheckState_=function(){if(this.adapter_.hasNativeControl()){var e=this.currentCheckState_,c=this.determineCheckState_();if(e!==c){this.updateAriaChecked_();var o=u.SELECTED;c===f.TRANSITION_STATE_UNCHECKED?this.adapter_.removeClass(o):this.adapter_.addClass(o),this.currentAnimationClass_.length>0&&(clearTimeout(this.animEndLatchTimer_),this.adapter_.forceLayout(),this.adapter_.removeClass(this.currentAnimationClass_)),this.currentAnimationClass_=this.getTransitionAnimationClass_(e,c),this.currentCheckState_=c,this.adapter_.isAttachedToDOM()&&this.currentAnimationClass_.length>0&&(this.adapter_.addClass(this.currentAnimationClass_),this.enableAnimationEndHandler_=!0)}}},c.prototype.determineCheckState_=function(){var e=f.TRANSITION_STATE_INDETERMINATE,c=f.TRANSITION_STATE_CHECKED,o=f.TRANSITION_STATE_UNCHECKED;return this.adapter_.isIndeterminate()?e:this.adapter_.isChecked()?c:o},c.prototype.getTransitionAnimationClass_=function(e,o){var r=f.TRANSITION_STATE_CHECKED,t=f.TRANSITION_STATE_UNCHECKED,n=c.cssClasses,i=n.ANIM_UNCHECKED_CHECKED,a=n.ANIM_UNCHECKED_INDETERMINATE,d=n.ANIM_CHECKED_UNCHECKED,m=n.ANIM_CHECKED_INDETERMINATE,h=n.ANIM_INDETERMINATE_CHECKED,b=n.ANIM_INDETERMINATE_UNCHECKED;switch(e){case f.TRANSITION_STATE_INIT:return o===t?"":o===r?h:b;case t:return o===r?i:a;case r:return o===t?d:m;default:return o===r?h:b}},c.prototype.updateAriaChecked_=function(){this.adapter_.isIndeterminate()?this.adapter_.setNativeControlAttr(f.ARIA_CHECKED_ATTR,f.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter_.removeNativeControlAttr(f.ARIA_CHECKED_ATTR)},c}(d),_=["checked","indeterminate"],g=function(e){function c(){var c=null!==e&&e.apply(this,arguments)||this;return c.ripple_=c.createRipple_(),c}return i(c,e),c.attachTo=function(e){return new c(e)},Object.defineProperty(c.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"checked",{get:function(){return this.nativeControl_.checked},set:function(e){this.nativeControl_.checked=e},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"indeterminate",{get:function(){return this.nativeControl_.indeterminate},set:function(e){this.nativeControl_.indeterminate=e},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"disabled",{get:function(){return this.nativeControl_.disabled},set:function(e){this.foundation_.setDisabled(e)},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"value",{get:function(){return this.nativeControl_.value},set:function(e){this.nativeControl_.value=e},enumerable:!0,configurable:!0}),c.prototype.initialSyncWithDOM=function(){var e=this;this.handleChange_=function(){return e.foundation_.handleChange()},this.handleAnimationEnd_=function(){return e.foundation_.handleAnimationEnd()},this.nativeControl_.addEventListener("change",this.handleChange_),this.listen(h(window,"animationend"),this.handleAnimationEnd_),this.installPropertyChangeHooks_()},c.prototype.destroy=function(){this.ripple_.destroy(),this.nativeControl_.removeEventListener("change",this.handleChange_),this.unlisten(h(window,"animationend"),this.handleAnimationEnd_),this.uninstallPropertyChangeHooks_(),e.prototype.destroy.call(this)},c.prototype.getDefaultFoundation=function(){var e=this;return new x({addClass:function(c){return e.root_.classList.add(c)},forceLayout:function(){return e.root_.offsetWidth},hasNativeControl:function(){return!!e.nativeControl_},isAttachedToDOM:function(){return Boolean(e.root_.parentNode)},isChecked:function(){return e.checked},isIndeterminate:function(){return e.indeterminate},removeClass:function(c){return e.root_.classList.remove(c)},removeNativeControlAttr:function(c){return e.nativeControl_.removeAttribute(c)},setNativeControlAttr:function(c,o){return e.nativeControl_.setAttribute(c,o)},setNativeControlDisabled:function(c){return e.nativeControl_.disabled=c}})},c.prototype.createRipple_=function(){var e=this,c=a({},s.createAdapter(this),{deregisterInteractionHandler:function(c,o){return e.nativeControl_.removeEventListener(c,o,b())},isSurfaceActive:function(){return l(e.nativeControl_,":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(c,o){return e.nativeControl_.addEventListener(c,o,b())}});return new s(this.root_,new k(c))},c.prototype.installPropertyChangeHooks_=function(){var e=this,c=this.nativeControl_,o=Object.getPrototypeOf(c);_.forEach((function(r){var t=Object.getOwnPropertyDescriptor(o,r);v(t)&&Object.defineProperty(c,r,{configurable:t.configurable,enumerable:t.enumerable,get:t.get,set:function(o){t.set.call(c,o),e.foundation_.handleChange()}})}))},c.prototype.uninstallPropertyChangeHooks_=function(){var e=this.nativeControl_,c=Object.getPrototypeOf(e);_.forEach((function(o){var r=Object.getOwnPropertyDescriptor(c,o);v(r)&&Object.defineProperty(e,o,r)}))},Object.defineProperty(c.prototype,"nativeControl_",{get:function(){var e=x.strings.NATIVE_CONTROL_SELECTOR,c=this.root_.querySelector(e);if(!c)throw new Error("Checkbox component requires a "+e+" element");return c},enumerable:!0,configurable:!0}),c}(m);function v(e){return!!e&&"function"==typeof e.set}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var y={ROOT:"mdc-form-field"},E={LABEL_SELECTOR:".mdc-form-field > label"},C=function(e){function c(o){var r=e.call(this,a({},c.defaultAdapter,o))||this;return r.clickHandler_=function(){return r.handleClick_()},r}return i(c,e),Object.defineProperty(c,"cssClasses",{get:function(){return y},enumerable:!0,configurable:!0}),Object.defineProperty(c,"strings",{get:function(){return E},enumerable:!0,configurable:!0}),Object.defineProperty(c,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),c.prototype.init=function(){this.adapter_.registerInteractionHandler("click",this.clickHandler_)},c.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("click",this.clickHandler_)},c.prototype.handleClick_=function(){var e=this;this.adapter_.activateInputRipple(),requestAnimationFrame((function(){return e.adapter_.deactivateInputRipple()}))},c}(d),T=function(e){function c(){return null!==e&&e.apply(this,arguments)||this}return i(c,e),c.attachTo=function(e){return new c(e)},Object.defineProperty(c.prototype,"input",{get:function(){return this.input_},set:function(e){this.input_=e},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"label_",{get:function(){return this.root_.querySelector(C.strings.LABEL_SELECTOR)},enumerable:!0,configurable:!0}),c.prototype.getDefaultFoundation=function(){var e=this;return new C({activateInputRipple:function(){e.input_&&e.input_.ripple&&e.input_.ripple.activate()},deactivateInputRipple:function(){e.input_&&e.input_.ripple&&e.input_.ripple.deactivate()},deregisterInteractionHandler:function(c,o){e.label_&&e.label_.removeEventListener(c,o)},registerInteractionHandler:function(c,o){e.label_&&e.label_.addEventListener(c,o)}})},c}(m);const A=class{constructor(o){e(this,o),this.change=c(this,"change",7),this.disabled=!1,this.readonly=!1,this.checked=!1,this.required=!1,this.modified=!1,this.id=t(),this.onChange=this.onChange.bind(this)}connectedCallback(){this.initialize()}componentDidLoad(){this.initialize()}initialize(){const e=this.limelCheckbox.shadowRoot.querySelector(".mdc-form-field");e&&(this.formField=new T(e),this.mdcCheckbox=new g(this.limelCheckbox.shadowRoot.querySelector(".mdc-checkbox")),this.formField.input=this.mdcCheckbox)}disconnectedCallback(){var e,c;null===(e=this.mdcCheckbox)||void 0===e||e.destroy(),null===(c=this.formField)||void 0===c||c.destroy()}render(){return o(n,{disabled:this.disabled||this.readonly,label:this.label,checked:this.checked,required:this.required,invalid:this.required&&this.modified&&!this.checked,onChange:this.onChange,id:this.id})}onChange(e){e.stopPropagation(),this.change.emit(this.mdcCheckbox.checked),this.modified=!0}get limelCheckbox(){return r(this)}};A.style='.mdc-form-field{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:1.25rem;font-weight:400;letter-spacing:0.0178571429em;text-decoration:inherit;text-transform:inherit;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:0.25rem;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:0.25rem}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:0.25rem;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:0.25rem;padding-right:0}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 1.125rem;box-sizing:content-box;width:1.125rem;height:1.125rem;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:0.6875rem}.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before{opacity:0.04}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox .mdc-checkbox__background{top:0.6875rem;left:0.6875rem}.mdc-checkbox .mdc-checkbox__background::before{top:-0.8125rem;left:-0.8125rem;width:2.5rem;height:2.5rem}.mdc-checkbox .mdc-checkbox__native-control{top:0rem;right:0rem;left:0rem;width:2.5rem;height:2.5rem}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}@keyframes mdc-checkbox-fade-in-background-uf6g3t2{0%{border-color:rgba(0, 0, 0, 0.54);background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@keyframes mdc-checkbox-fade-out-background-uf6g3t2{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:rgba(0, 0, 0, 0.54);background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-uf6g3t2}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-uf6g3t2}.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.26);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.26)}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff}@media screen and (-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 0.0625rem}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:1.125rem;height:1.125rem;border:0.125rem solid currentColor;border-radius:0.125rem;background-color:transparent;pointer-events:none;will-change:background-color, border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__background .mdc-checkbox__background::before{background-color:#000}@supports not (-ms-ime-align: auto){.mdc-checkbox__background .mdc-checkbox__background::before{background-color:var(--mdc-theme-on-surface, #000)}}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:0.195rem;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:0rem;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none !important}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity, transform;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{transform:scale(1);opacity:0.12;transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin-top:0.25rem;margin-bottom:0.25rem;margin-right:0.25rem;margin-left:0.25rem}.mdc-checkbox--touch .mdc-checkbox__native-control{top:-0.25rem;right:-0.25rem;left:-0.25rem;width:3rem;height:3rem}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:0.0625rem solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-checkbox{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-checkbox .mdc-checkbox__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded .mdc-checkbox__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation .mdc-checkbox__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation .mdc-checkbox__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000}@supports not (-ms-ime-align: auto){.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:var(--mdc-theme-on-surface, #000)}}.mdc-checkbox:hover .mdc-checkbox__ripple::before{opacity:0.04}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-ripple-upgraded--background-focused .mdc-checkbox__background::before{content:none}.mdc-form-field{display:flex}.mdc-form-field .mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff)}.mdc-form-field .mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-form-field .mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee);background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}@keyframes mdc-checkbox-fade-in-background-uf6g3tn{0%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff)}50%{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee);background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}}@keyframes mdc-checkbox-fade-out-background-uf6g3tn{0%,80%{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee);background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}100%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-form-field .mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-form-field .mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-uf6g3tn}.mdc-form-field .mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-form-field .mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-uf6g3tn}.mdc-form-field .mdc-checkbox.mdc-checkbox--invalid .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:var(--lime-error-text-color)}.mdc-form-field .mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__native-control:focus-visible+.mdc-checkbox__background:after{content:"";display:block;position:absolute;top:-0.75rem;right:-0.75rem;bottom:-0.75rem;left:-0.75rem;border-radius:50%;box-shadow:var(--shadow-depth-8-focused)}.mdc-form-field label{cursor:pointer;line-height:normal;padding-left:0}.mdc-form-field label.mdc-checkbox--disabled{opacity:0.37}.mdc-form-field label.mdc-checkbox--required::after{margin-left:0.0625rem;content:"*"}.mdc-form-field label.mdc-checkbox--invalid{color:var(--lime-error-text-color)}.mdc-form-field .mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple:before{animation:fade-out-focus-style 1s ease forwards}@keyframes fade-out-focus-style{0%{opacity:0.12}100%{opacity:0}}';const I=class{constructor(c){e(this,c),this.direction="horizontal",this.justify="space-between",this.align="center",this.reverse=!1}render(){return o("slot",null)}};I.style=":host(limel-flex-container){display:flex}:host(limel-flex-container[hidden]){display:none}:host(limel-flex-container[direction=horizontal]){flex-direction:row}:host(limel-flex-container[direction=horizontal][reverse]){flex-direction:row-reverse}:host(limel-flex-container[direction=vertical]){flex-direction:column}:host(limel-flex-container[direction=vertical][reverse]){flex-direction:column-reverse}:host(limel-flex-container[align=start]){align-items:flex-start}:host(limel-flex-container[align=end]){align-items:flex-end}:host(limel-flex-container[align=center]){align-items:center}:host(limel-flex-container[align=stretch]){align-items:stretch}:host(limel-flex-container[justify=start]){justify-content:flex-start}:host(limel-flex-container[justify=end]){justify-content:flex-end}:host(limel-flex-container[justify=center]){justify-content:center}:host(limel-flex-container[justify=space-between]){justify-content:space-between}:host(limel-flex-container[justify=space-around]){justify-content:space-around}:host(limel-flex-container[justify=space-evenly]){justify-content:space-evenly}:host(limel-flex-container[slot=button]){gap:0.5rem;width:100%;justify-content:flex-end}:host(limel-flex-container[slot=button][direction=horizontal][reverse]){justify-content:flex-start}";export{A as limel_checkbox,I as limel_flex_container}