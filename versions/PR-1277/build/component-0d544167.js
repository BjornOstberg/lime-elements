import{_ as t,a as n,M as i,b as e}from"./component-385aa964.js";import{a as r}from"./events-16e3b5e6.js";import{m as s}from"./ponyfill-986552f9.js";
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
 */var o,u={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},c={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},a={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},h=["touchstart","pointerdown","mousedown","keydown"],f=["touchend","pointerup","mouseup","contextmenu"],d=[],l=function(i){function e(t){var r=i.call(this,n({},e.defaultAdapter,t))||this;return r.activationAnimationHasEnded_=!1,r.activationTimer_=0,r.fgDeactivationRemovalTimer_=0,r.fgScale_="0",r.frame_={width:0,height:0},r.initialSize_=0,r.layoutFrame_=0,r.maxRadius_=0,r.unboundedCoords_={left:0,top:0},r.activationState_=r.defaultActivationState_(),r.activationTimerCallback_=function(){r.activationAnimationHasEnded_=!0,r.runDeactivationUXLogicIfReady_()},r.activateHandler_=function(t){return r.activate_(t)},r.deactivateHandler_=function(){return r.deactivate_()},r.focusHandler_=function(){return r.handleFocus()},r.blurHandler_=function(){return r.handleBlur()},r.resizeHandler_=function(){return r.layout()},r}return t(e,i),Object.defineProperty(e,"cssClasses",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return c},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var i=e.cssClasses,r=i.ROOT,s=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.addClass(r),t.adapter_.isUnbounded()&&(t.adapter_.addClass(s),t.layoutInternal_())}))}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.removeClass(i),t.adapter_.removeClass(r),t.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var n=this;t&&(h.forEach((function(t){n.adapter_.registerInteractionHandler(t,n.activateHandler_)})),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var n=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):f.forEach((function(t){n.adapter_.registerDocumentInteractionHandler(t,n.deactivateHandler_)}))},e.prototype.deregisterRootHandlers_=function(){var t=this;h.forEach((function(n){t.adapter_.deregisterInteractionHandler(n,t.activateHandler_)})),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),f.forEach((function(n){t.adapter_.deregisterDocumentInteractionHandler(n,t.deactivateHandler_)}))},e.prototype.removeCssVars_=function(){var t=this,n=e.strings;Object.keys(n).forEach((function(i){0===i.indexOf("VAR_")&&t.adapter_.updateCssVariable(n[i],null)}))},e.prototype.activate_=function(t){var n=this;if(!this.adapter_.isSurfaceDisabled()){var i=this.activationState_;if(!i.isActivated){var e=this.previousActivationEvent_;e&&void 0!==t&&e.type!==t.type||(i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),void 0!==t&&d.length>0&&d.some((function(t){return n.adapter_.containsEventTarget(t)}))?this.resetActivationState_():(void 0!==t&&(d.push(t.target),this.registerDeactivationHandlers_(t)),i.wasElementMadeActive=this.checkElementMadeActive_(t),i.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){d=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=n.checkElementMadeActive_(t),i.wasElementMadeActive&&n.animateActivation_()),i.wasElementMadeActive||(n.activationState_=n.defaultActivationState_())}))))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,s=e.cssClasses,o=s.FG_DEACTIVATION,u=s.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var a="",h="";if(!this.adapter_.isUnbounded()){var f=this.getFgTranslationCoordinates_(),d=f.startPoint,l=f.endPoint;a=d.x+"px, "+d.y+"px",h=l.x+"px, "+l.y+"px"}this.adapter_.updateCssVariable(i,a),this.adapter_.updateCssVariable(r,h),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(o),this.adapter_.computeBoundingRect(),this.adapter_.addClass(u),this.activationTimer_=setTimeout((function(){return t.activationTimerCallback_()}),c)},e.prototype.getFgTranslationCoordinates_=function(){var t,n=this.activationState_;return{startPoint:t={x:(t=n.wasActivatedByPointer?function(t,n,i){if(!t)return{x:0,y:0};var e,r,s=n.x+i.left,o=n.y+i.top;return"touchstart"===t.type?(e=t.changedTouches[0].pageX-s,r=t.changedTouches[0].pageY-o):(e=t.pageX-s,r=t.pageY-o),{x:e,y:r}}
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
 */(n.activationEvent,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState_;(i.hasDeactivationUXRun||!i.isActivated)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout((function(){t.adapter_.removeClass(n)}),a.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return t.previousActivationEvent_=void 0}),e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,i=this.activationState_;if(i.isActivated){var e=n({},i);i.isProgrammatic?(requestAnimationFrame((function(){return t.animateDeactivation_(e)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(e),t.resetActivationState_()})))}},e.prototype.animateDeactivation_=function(t){(t.wasActivatedByPointer||t.wasElementMadeActive)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){this.frame_=this.adapter_.computeBoundingRect();var t=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?t:Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))+e.numbers.PADDING;var n=Math.floor(t*e.numbers.INITIAL_ORIGIN_SCALE);this.initialSize_=this.adapter_.isUnbounded()&&n%2!=0?n-1:n,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,n=t.VAR_LEFT,i=t.VAR_TOP,r=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(t.VAR_FG_SIZE,this.initialSize_+"px"),this.adapter_.updateCssVariable(r,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(n,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(i,this.unboundedCoords_.top+"px"))},e}(i),m=function(n){function i(){var t=null!==n&&n.apply(this,arguments)||this;return t.disabled=!1,t}return t(i,n),i.attachTo=function(t,n){void 0===n&&(n={isUnbounded:void 0});var e=new i(t);return void 0!==n.isUnbounded&&(e.unbounded=n.isUnbounded),e},i.createAdapter=function(t){return{addClass:function(n){return t.root_.classList.add(n)},browserSupportsCssVars:function(){return function(t,n){void 0===n&&(n=!1);var i,e=t.CSS;if("boolean"==typeof o&&!n)return o;if(!e||"function"!=typeof e.supports)return!1;var r=e.supports("--css-vars","yes"),s=e.supports("(--css-vars: yes)")&&e.supports("color","#00000000");return i=!(!r&&!s||function(t){var n=t.document,i=n.createElement("div");i.className="mdc-ripple-surface--test-edge-var-bug",n.head.appendChild(i);var e=t.getComputedStyle(i),r=null!==e&&"solid"===e.borderTopStyle;return i.parentNode&&i.parentNode.removeChild(i),r}(t)),n||(o=i),i}(window)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},containsEventTarget:function(n){return t.root_.contains(n)},deregisterDocumentInteractionHandler:function(t,n){return document.documentElement.removeEventListener(t,n,r())},deregisterInteractionHandler:function(n,i){return t.root_.removeEventListener(n,i,r())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return s(t.root_,":active")},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(t,n){return document.documentElement.addEventListener(t,n,r())},registerInteractionHandler:function(n,i){return t.root_.addEventListener(n,i,r())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(n){return t.root_.classList.remove(n)},updateCssVariable:function(n,i){return t.root_.style.setProperty(n,i)}}},Object.defineProperty(i.prototype,"unbounded",{get:function(){return Boolean(this.unbounded_)},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()},enumerable:!0,configurable:!0}),i.prototype.activate=function(){this.foundation_.activate()},i.prototype.deactivate=function(){this.foundation_.deactivate()},i.prototype.layout=function(){this.foundation_.layout()},i.prototype.getDefaultFoundation=function(){return new l(i.createAdapter(this))},i.prototype.initialSyncWithDOM=function(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset},i.prototype.setUnbounded_=function(){this.foundation_.setUnbounded(Boolean(this.unbounded_))},i}(e);export{m as M,l as a}