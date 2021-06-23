import{r as t,c as e,h as r,g as o}from"./index-7619d89c.js";import{_ as n,a as i,M as a,b as c}from"./component-892677ab.js";import{c as m}from"./ponyfill-986552f9.js";
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
 */var d={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},s={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},l={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3},b=l.ARIA_LIVE_DELAY_MS,u=s.ARIA_LIVE_LABEL_TEXT_ATTR;function p(t,e){void 0===e&&(e=t);var r=t.getAttribute("aria-live"),o=e.textContent.trim();o&&r&&(t.setAttribute("aria-live","off"),e.textContent="",e.innerHTML='<span style="display: inline-block; width: 0; height: 0.0625rem;">&nbsp;</span>',e.setAttribute(u,o),setTimeout((function(){t.setAttribute("aria-live",r),e.removeAttribute(u),e.textContent=o}),b))}
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
 */var f=d.OPENING,g=d.OPEN,h=d.CLOSING,_=s.REASON_ACTION,y=s.REASON_DISMISS,k=function(t){function e(r){var o=t.call(this,i({},e.defaultAdapter,r))||this;return o.isOpen_=!1,o.animationFrame_=0,o.animationTimer_=0,o.autoDismissTimer_=0,o.autoDismissTimeoutMs_=l.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,o.closeOnEscape_=!0,o}return n(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return l},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer_(),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=0,this.adapter_.removeClass(f),this.adapter_.removeClass(g),this.adapter_.removeClass(h)},e.prototype.open=function(){var t=this;this.clearAutoDismissTimer_(),this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.removeClass(h),this.adapter_.addClass(f),this.adapter_.announce(),this.runNextAnimationFrame_((function(){t.adapter_.addClass(g),t.animationTimer_=setTimeout((function(){var e=t.getTimeoutMs();t.handleAnimationTimerEnd_(),t.adapter_.notifyOpened(),e!==l.INDETERMINATE&&(t.autoDismissTimer_=setTimeout((function(){t.close(y)}),e))}),l.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))},e.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.isOpen_&&(cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,this.clearAutoDismissTimer_(),this.isOpen_=!1,this.adapter_.notifyClosing(t),this.adapter_.addClass(d.CLOSING),this.adapter_.removeClass(d.OPEN),this.adapter_.removeClass(d.OPENING),clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){e.handleAnimationTimerEnd_(),e.adapter_.notifyClosed(t)}),l.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.isOpen_},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs_},e.prototype.setTimeoutMs=function(t){var e=l.MIN_AUTO_DISMISS_TIMEOUT_MS,r=l.MAX_AUTO_DISMISS_TIMEOUT_MS;if(!(t===l.INDETERMINATE||t<=r&&t>=e))throw new Error("\n        timeoutMs must be an integer in the range "+e+"–"+r+"\n        (or "+l.INDETERMINATE+" to disable), but got '"+t+"'");this.autoDismissTimeoutMs_=t},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape_},e.prototype.setCloseOnEscape=function(t){this.closeOnEscape_=t},e.prototype.handleKeyDown=function(t){("Escape"===t.key||27===t.keyCode)&&this.getCloseOnEscape()&&this.close(y)},e.prototype.handleActionButtonClick=function(){this.close(_)},e.prototype.handleActionIconClick=function(){this.close(y)},e.prototype.clearAutoDismissTimer_=function(){clearTimeout(this.autoDismissTimer_),this.autoDismissTimer_=0},e.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter_.removeClass(d.OPENING),this.adapter_.removeClass(d.CLOSING)},e.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)}))},e}(a),v=s.SURFACE_SELECTOR,x=s.LABEL_SELECTOR,w=s.ACTION_SELECTOR,z=s.DISMISS_SELECTOR,E=s.OPENING_EVENT,T=s.OPENED_EVENT,O=s.CLOSING_EVENT,S=s.CLOSED_EVENT,C=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){void 0===t&&(t=function(){return p}),this.announce_=t()},e.prototype.initialSyncWithDOM=function(){var t=this;this.surfaceEl_=this.root_.querySelector(v),this.labelEl_=this.root_.querySelector(x),this.actionEl_=this.root_.querySelector(w),this.handleKeyDown_=function(e){return t.foundation_.handleKeyDown(e)},this.handleSurfaceClick_=function(e){var r=e.target;t.isActionButton_(r)?t.foundation_.handleActionButtonClick(e):t.isActionIcon_(r)&&t.foundation_.handleActionIconClick(e)},this.registerKeyDownHandler_(this.handleKeyDown_),this.registerSurfaceClickHandler_(this.handleSurfaceClick_)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.deregisterKeyDownHandler_(this.handleKeyDown_),this.deregisterSurfaceClickHandler_(this.handleSurfaceClick_)},e.prototype.open=function(){this.foundation_.open()},e.prototype.close=function(t){void 0===t&&(t=""),this.foundation_.close(t)},e.prototype.getDefaultFoundation=function(){var t=this;return new k({addClass:function(e){return t.root_.classList.add(e)},announce:function(){return t.announce_(t.labelEl_)},notifyClosed:function(e){return t.emit(S,e?{reason:e}:{})},notifyClosing:function(e){return t.emit(O,e?{reason:e}:{})},notifyOpened:function(){return t.emit(T,{})},notifyOpening:function(){return t.emit(E,{})},removeClass:function(e){return t.root_.classList.remove(e)}})},Object.defineProperty(e.prototype,"timeoutMs",{get:function(){return this.foundation_.getTimeoutMs()},set:function(t){this.foundation_.setTimeoutMs(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"closeOnEscape",{get:function(){return this.foundation_.getCloseOnEscape()},set:function(t){this.foundation_.setCloseOnEscape(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation_.isOpen()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"labelText",{get:function(){return this.labelEl_.textContent},set:function(t){this.labelEl_.textContent=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"actionButtonText",{get:function(){return this.actionEl_.textContent},set:function(t){this.actionEl_.textContent=t},enumerable:!0,configurable:!0}),e.prototype.registerKeyDownHandler_=function(t){this.listen("keydown",t)},e.prototype.deregisterKeyDownHandler_=function(t){this.unlisten("keydown",t)},e.prototype.registerSurfaceClickHandler_=function(t){this.surfaceEl_.addEventListener("click",t)},e.prototype.deregisterSurfaceClickHandler_=function(t){this.surfaceEl_.removeEventListener("click",t)},e.prototype.isActionButton_=function(t){return Boolean(m(t,w))},e.prototype.isActionIcon_=function(t){return Boolean(m(t,z))},e}(c);const A=class{constructor(r){t(this,r),this.action=e(this,"action",7),this.hide=e(this,"hide",7),this.handleMdcClosing=this.handleMdcClosing.bind(this)}connectedCallback(){this.initialize()}componentDidLoad(){this.initialize()}initialize(){const t=this.host.shadowRoot.querySelector(".mdc-snackbar");t&&(this.mdcSnackbar=new C(t),this.mdcSnackbar.listen("MDCSnackbar:closing",this.handleMdcClosing))}disconnectedCallback(){this.mdcSnackbar.unlisten("MDCSnackbar:closing",this.handleMdcClosing),this.mdcSnackbar.destroy()}async show(){this.timeout&&(this.mdcSnackbar.timeoutMs=this.timeout),this.mdcSnackbar.labelText=this.message,this.mdcSnackbar.open()}render(){return r("div",{class:`\n                    mdc-snackbar\n                    ${this.multiline?"mdc-snackbar--stacked":""}\n                `},r("div",{class:"mdc-snackbar__surface"},r("div",{class:"mdc-snackbar__label",role:"status","aria-live":"polite"}),this.renderActions(this.actionText,this.dismissible)))}handleMdcClosing(t){"action"===t.detail.reason?this.action.emit():this.hide.emit()}renderActions(t,e){if(t||e)return r("div",{class:"mdc-snackbar__actions"},this.renderActionButton(t),this.renderDismissButton(e))}renderActionButton(t){if(t)return r("button",{type:"button",class:"mdc-button mdc-snackbar__action"},r("span",{class:"mdc-button__label"},t))}renderDismissButton(t){if(t)return r("div",{class:"mdc-snackbar__dismiss"},r("button",{class:"mdc-icon-button",innerHTML:'<svg width="32" height="32" x="0px" y="0px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n    <line fill="none" id="svg_1" stroke="currentColor" stroke-width="2" x1="8" x2="24" y1="8" y2="24"/>\n    <line fill="none" id="svg_2" stroke="currentColor" stroke-width="2" x1="24" x2="8" y1="8" y2="24"/>\n</svg>'}))}get host(){return o(this)}};A.style=':host{--mdc-theme-primary:var(\n      --lime-primary-color,\n      rgb(var(--color-teal-default))\n  );--mdc-theme-secondary:var(\n      --lime-secondary-color,\n      rgb(var(--contrast-1100))\n  );--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-text-disabled-on-background:var(\n      --lime-text-disabled-on-background-color,\n      rgba(var(--contrast-1700), 0.38)\n  );--mdc-theme-text-primary-on-background:var(\n      --lime-text-primary-on-background-color,\n      rgba(var(--contrast-1700), 0.87)\n  );--mdc-theme-text-secondary-on-background:var(\n      --lime-text-secondary-on-background-color,\n      rgba(var(--contrast-1700), 0.54)\n  );--lime-error-text-color:rgb(var(--color-red-darker))}:root{--mdc-theme-primary:#26a69a;--mdc-theme-secondary:#575756;--mdc-theme-background:#fff;--mdc-theme-surface:#fff;--mdc-theme-error:#b00020;--mdc-theme-on-primary:#fff;--mdc-theme-on-secondary:#fff;--mdc-theme-on-surface:#000;--mdc-theme-on-error:#fff;--mdc-theme-text-primary-on-background:rgba(0, 0, 0, 0.87);--mdc-theme-text-secondary-on-background:rgba(0, 0, 0, 0.54);--mdc-theme-text-hint-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-disabled-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-icon-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-primary-on-light:rgba(0, 0, 0, 0.87);--mdc-theme-text-secondary-on-light:rgba(0, 0, 0, 0.54);--mdc-theme-text-hint-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-disabled-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-icon-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-primary-on-dark:white;--mdc-theme-text-secondary-on-dark:rgba(255, 255, 255, 0.7);--mdc-theme-text-hint-on-dark:rgba(255, 255, 255, 0.5);--mdc-theme-text-disabled-on-dark:rgba(255, 255, 255, 0.5);--mdc-theme-text-icon-on-dark:rgba(255, 255, 255, 0.5)}.mdc-theme--primary{color:#26a69a !important;color:var(--mdc-theme-primary, #26a69a) !important}.mdc-theme--secondary{color:#575756 !important;color:var(--mdc-theme-secondary, #575756) !important}.mdc-theme--background{background-color:#fff;background-color:var(--mdc-theme-background, #fff)}.mdc-theme--surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-theme--error{color:#b00020 !important;color:var(--mdc-theme-error, #b00020) !important}.mdc-theme--on-primary{color:#fff !important;color:var(--mdc-theme-on-primary, #fff) !important}.mdc-theme--on-secondary{color:#fff !important;color:var(--mdc-theme-on-secondary, #fff) !important}.mdc-theme--on-surface{color:#000 !important;color:var(--mdc-theme-on-surface, #000) !important}.mdc-theme--on-error{color:#fff !important;color:var(--mdc-theme-on-error, #fff) !important}.mdc-theme--text-primary-on-background{color:rgba(0, 0, 0, 0.87) !important;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87)) !important}.mdc-theme--text-secondary-on-background{color:rgba(0, 0, 0, 0.54) !important;color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54)) !important}.mdc-theme--text-hint-on-background{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-disabled-on-background{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-disabled-on-background, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-icon-on-background{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-primary-on-light{color:rgba(0, 0, 0, 0.87) !important;color:var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87)) !important}.mdc-theme--text-secondary-on-light{color:rgba(0, 0, 0, 0.54) !important;color:var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54)) !important}.mdc-theme--text-hint-on-light{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-disabled-on-light{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-icon-on-light{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-icon-on-light, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-primary-on-dark{color:white !important;color:var(--mdc-theme-text-primary-on-dark, white) !important}.mdc-theme--text-secondary-on-dark{color:rgba(255, 255, 255, 0.7) !important;color:var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7)) !important}.mdc-theme--text-hint-on-dark{color:rgba(255, 255, 255, 0.5) !important;color:var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5)) !important}.mdc-theme--text-disabled-on-dark{color:rgba(255, 255, 255, 0.5) !important;color:var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5)) !important}.mdc-theme--text-icon-on-dark{color:rgba(255, 255, 255, 0.5) !important;color:var(--mdc-theme-text-icon-on-dark, rgba(255, 255, 255, 0.5)) !important}.mdc-theme--primary-bg{background-color:#26a69a !important;background-color:var(--mdc-theme-primary, #26a69a) !important}.mdc-theme--secondary-bg{background-color:#575756 !important;background-color:var(--mdc-theme-secondary, #575756) !important}.mdc-typography{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.mdc-typography--headline1{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.375rem;line-height:1.375rem;font-weight:300;letter-spacing:-0.015625em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline2{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:0.875rem;font-weight:300;letter-spacing:-0.0083333333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline3{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:0.875rem;font-weight:400;letter-spacing:normal;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline4{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:0.875rem;font-weight:400;letter-spacing:0.0073529412em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline5{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:0.875rem;font-weight:400;letter-spacing:normal;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline6{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:0.875rem;font-weight:500;letter-spacing:0.0125em;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle1{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:1.125rem;font-weight:400;letter-spacing:0.009375em;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.125rem;font-weight:500;letter-spacing:0.0071428571em;text-decoration:inherit;text-transform:inherit}.mdc-typography--body1{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.5rem;font-weight:400;letter-spacing:0.03125em;text-decoration:inherit;text-transform:inherit}.mdc-typography--body2{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.625rem;font-weight:400;letter-spacing:0.0178571429em;text-decoration:inherit;text-transform:inherit}.mdc-typography--caption{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.6875rem;line-height:0.875rem;font-weight:400;letter-spacing:0.0333333333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--button{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:2.25rem;font-weight:500;letter-spacing:0.0892857143em;text-decoration:none;text-transform:none}.mdc-typography--overline{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.6875rem;line-height:0.875rem;font-weight:500;letter-spacing:0.1666666667em;text-decoration:none;text-transform:uppercase}.mdc-touch-target-wrapper{display:inline}.mdc-button{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:2.25rem;font-weight:500;letter-spacing:0.0892857143em;text-decoration:none;text-transform:none;padding:0 0.5rem 0 0.5rem;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:4rem;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:0.25rem}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:rgba(0, 0, 0, 0.37);cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:0.25rem}.mdc-button:not(:disabled){background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:0.5rem;display:inline-block;width:1.125rem;height:1.125rem;font-size:1.125rem;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:0.5rem;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;left:0;height:3rem;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#26a69a;color:var(--mdc-theme-primary, #26a69a)}.mdc-button__label+.mdc-button__icon{margin-left:0.5rem;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:0.5rem}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-0.25rem;margin-right:0.5rem}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:0.5rem;margin-right:-0.25rem}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:0.5rem;margin-right:-0.25rem}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-0.25rem;margin-right:0.5rem}.mdc-button--raised,.mdc-button--unelevated{padding:0 1rem 0 1rem}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12);color:rgba(0, 0, 0, 0.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#26a69a}@supports not (-ms-ime-align: auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary, #26a69a)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised{box-shadow:0rem 0.1875rem 0.0625rem -0.125rem rgba(0, 0, 0, 0.2), 0rem 0.125rem 0.125rem 0rem rgba(0, 0, 0, 0.14), 0rem 0.0625rem 0.3125rem 0rem rgba(0, 0, 0, 0.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.2), 0rem 0.25rem 0.3125rem 0rem rgba(0, 0, 0, 0.14), 0rem 0.0625rem 0.625rem 0rem rgba(0, 0, 0, 0.12)}.mdc-button--raised:active{box-shadow:0rem 0.3125rem 0.3125rem -0.1875rem rgba(0, 0, 0, 0.2), 0rem 0.5rem 0.625rem 0.0625rem rgba(0, 0, 0, 0.14), 0rem 0.1875rem 0.875rem 0.125rem rgba(0, 0, 0, 0.12)}.mdc-button--raised:disabled{box-shadow:0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.2), 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.14), 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.12)}.mdc-button--outlined{border-style:solid;padding:0 0.9375rem 0 0.9375rem;border-width:0.0625rem}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.37)}.mdc-button--outlined .mdc-button__ripple{top:-0.0625rem;left:-0.0625rem;border:0.0625rem solid transparent}.mdc-button--outlined:not(:disabled){border-color:#26a69a;border-color:var(--mdc-theme-primary, #26a69a)}.mdc-button--touch{margin-top:0.375rem;margin-bottom:0.375rem}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:0.0625rem solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button .mdc-button__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation .mdc-button__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation .mdc-button__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{background-color:#26a69a}@supports not (-ms-ime-align: auto){.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{background-color:var(--mdc-theme-primary, #26a69a)}}.mdc-button:hover .mdc-button__ripple::before{opacity:0.08}.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.24}.mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.24}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-button .mdc-button__ripple{position:absolute;box-sizing:content-box;width:100%;height:100%;overflow:hidden}.mdc-button:not(.mdc-button--outlined) .mdc-button__ripple{top:0;left:0}.mdc-button--raised .mdc-button__ripple::before,.mdc-button--raised .mdc-button__ripple::after,.mdc-button--unelevated .mdc-button__ripple::before,.mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-button--raised .mdc-button__ripple::before,.mdc-button--raised .mdc-button__ripple::after,.mdc-button--unelevated .mdc-button__ripple::before,.mdc-button--unelevated .mdc-button__ripple::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-button--raised:hover .mdc-button__ripple::before,.mdc-button--unelevated:hover .mdc-button__ripple::before{opacity:0.08}.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.24}.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.24}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-button{height:2.25rem}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:1.5rem;text-decoration:none;cursor:pointer;user-select:none;width:3rem;height:3rem;padding:0.75rem}.mdc-icon-button svg,.mdc-icon-button img{width:1.5rem;height:1.5rem}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-icon-button::before,.mdc-icon-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-button::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1}.mdc-icon-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button::before,.mdc-icon-button::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded::before,.mdc-icon-button.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button::before,.mdc-icon-button::after{background-color:#000}.mdc-icon-button:hover::before{opacity:0.04}.mdc-icon-button.mdc-ripple-upgraded--background-focused::before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12}.mdc-icon-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-snackbar{z-index:8;margin:0.5rem;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:21.5rem}@media (max-width: 30rem), (max-width: 21.5rem){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:42rem}.mdc-snackbar__surface{box-shadow:0rem 0.1875rem 0.3125rem -0.0625rem rgba(0, 0, 0, 0.2), 0rem 0.375rem 0.625rem 0rem rgba(0, 0, 0, 0.14), 0rem 0.0625rem 1.125rem 0rem rgba(0, 0, 0, 0.12)}.mdc-snackbar__surface{border-radius:0.25rem}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:0.5rem}.mdc-snackbar__surface{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.625rem;font-weight:400;letter-spacing:0.0178571429em;text-decoration:inherit;text-transform:inherit;flex-grow:1;box-sizing:border-box;margin:0;padding:0.875rem 1rem}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{margin-left:0;margin-right:0.5rem;display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}[dir=rtl] .mdc-snackbar__actions,.mdc-snackbar__actions[dir=rtl]{margin-left:0.5rem;margin-right:0}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc}.mdc-snackbar__action:hover::before{opacity:0.08}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss::before,.mdc-snackbar__dismiss::after{background-color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss:hover::before{opacity:0.08}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:2.25rem;height:2.25rem;padding:0.5625rem;font-size:1.125rem}.mdc-snackbar__dismiss.mdc-snackbar__dismiss svg,.mdc-snackbar__dismiss.mdc-snackbar__dismiss img{width:1.125rem;height:1.125rem}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:0.5rem;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:0.5rem}.mdc-button:not(:disabled){color:#29b6f6}.mdc-snackbar__actions .mdc-snackbar__dismiss{color:var(--mdc-theme-on-secondary);width:auto;height:auto;padding:0}.mdc-snackbar__actions .mdc-snackbar__dismiss svg{height:100%;width:100%}';export{A as limel_snackbar}