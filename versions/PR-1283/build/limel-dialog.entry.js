import{r as t,c as o,h as i,g as e}from"./index-7619d89c.js";import{d as n}from"./dispatch-resize-event-cd1d230c.js";import{c as r}from"./random-string-2246b81e.js";import{_ as a,a as c,M as d,e as s,b as l}from"./component-892677ab.js";import{m,c as h}from"./ponyfill-986552f9.js";import{M as g}from"./component-90d022ac.js";import"./events-16e3b5e6.js";var f=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],u=f.join(","),b="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function p(t,o){o=o||{};var i,e,n,r=[],a=[],c=t.querySelectorAll(u);for(o.includeContainer&&b.call(t,u)&&(c=Array.prototype.slice.apply(c)).unshift(t),i=0;i<c.length;i++)_(e=c[i])&&(0===(n=x(e))?r.push(e):a.push({documentOrder:i,tabIndex:n,node:e}));return a.sort(k).map((function(t){return t.node})).concat(r)}function _(t){return!(!y(t)||function(t){return function(t){return w(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var o=function(t){for(var o=0;o<t.length;o++)if(t[o].checked)return t[o]}(t.ownerDocument.querySelectorAll('input[type="radio"][name="'+t.name+'"]'));return!o||o===t}(t)}(t)||x(t)<0)}function y(t){return!(t.disabled||function(t){return w(t)&&"hidden"===t.type}(t)||function(t){return null===t.offsetParent||"hidden"===getComputedStyle(t).visibility}(t))}p.isTabbable=function(t){if(!t)throw new Error("No node provided");return!1!==b.call(t,u)&&_(t)},p.isFocusable=function(t){if(!t)throw new Error("No node provided");return!1!==b.call(t,v)&&y(t)};var v=f.concat("iframe").join(",");function x(t){var o=parseInt(t.getAttribute("tabindex"),10);return isNaN(o)?function(t){return"true"===t.contentEditable}(t)?0:t.tabIndex:o}function k(t,o){return t.tabIndex===o.tabIndex?t.documentOrder-o.documentOrder:t.tabIndex-o.tabIndex}function w(t){return"INPUT"===t.tagName}var E,C,T=p,O=Object.prototype.hasOwnProperty,z=(C=[],{activateTrap:function(t){if(C.length>0){var o=C[C.length-1];o!==t&&o.pause()}var i=C.indexOf(t);-1===i||C.splice(i,1),C.push(t)},deactivateTrap:function(t){var o=C.indexOf(t);-1!==o&&C.splice(o,1),C.length>0&&C[C.length-1].unpause()}});function D(t){return setTimeout(t,0)}var N=function(t,o){var i=document,e="string"==typeof t?i.querySelector(t):t,n=function(){for(var t={},o=0;o<arguments.length;o++){var i=arguments[o];for(var e in i)O.call(i,e)&&(t[e]=i[e])}return t}({returnFocusOnDeactivate:!0,escapeDeactivates:!0},o),r={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},a={activate:function(t){if(!r.active){b(),r.active=!0,r.paused=!1,r.nodeFocusedBeforeActivation=i.activeElement;var o=t&&t.onActivate?t.onActivate:n.onActivate;return o&&o(),d(),a}},deactivate:c,pause:function(){!r.paused&&r.active&&(r.paused=!0,s())},unpause:function(){r.paused&&r.active&&(r.paused=!1,b(),d())}};return a;function c(t){if(r.active){clearTimeout(E),s(),r.active=!1,r.paused=!1,z.deactivateTrap(a);var o=t&&void 0!==t.onDeactivate?t.onDeactivate:n.onDeactivate;return o&&o(),(t&&void 0!==t.returnFocus?t.returnFocus:n.returnFocusOnDeactivate)&&D((function(){var t;p((t=r.nodeFocusedBeforeActivation,l("setReturnFocus")||t))})),a}}function d(){if(r.active)return z.activateTrap(a),E=D((function(){p(m())})),i.addEventListener("focusin",g,!0),i.addEventListener("mousedown",h,{capture:!0,passive:!1}),i.addEventListener("touchstart",h,{capture:!0,passive:!1}),i.addEventListener("click",u,{capture:!0,passive:!1}),i.addEventListener("keydown",f,{capture:!0,passive:!1}),a}function s(){if(r.active)return i.removeEventListener("focusin",g,!0),i.removeEventListener("mousedown",h,!0),i.removeEventListener("touchstart",h,!0),i.removeEventListener("click",u,!0),i.removeEventListener("keydown",f,!0),a}function l(t){var o=n[t],e=o;if(!o)return null;if("string"==typeof o&&!(e=i.querySelector(o)))throw new Error("`"+t+"` refers to no known node");if("function"==typeof o&&!(e=o()))throw new Error("`"+t+"` did not return a node");return e}function m(){var t;if(!(t=null!==l("initialFocus")?l("initialFocus"):e.contains(i.activeElement)?i.activeElement:r.firstTabbableNode||l("fallbackFocus")))throw new Error("Your focus-trap needs to have at least one focusable element");return t}function h(t){e.contains(t.target)||(n.clickOutsideDeactivates?c({returnFocus:!T.isFocusable(t.target)}):n.allowOutsideClick&&n.allowOutsideClick(t)||t.preventDefault())}function g(t){e.contains(t.target)||t.target instanceof Document||(t.stopImmediatePropagation(),p(r.mostRecentlyFocusedNode||m()))}function f(t){if(!1!==n.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t))return t.preventDefault(),void c();(function(t){return"Tab"===t.key||9===t.keyCode})(t)&&function(t){if(b(),t.shiftKey&&t.target===r.firstTabbableNode)return t.preventDefault(),void p(r.lastTabbableNode);t.shiftKey||t.target!==r.lastTabbableNode||(t.preventDefault(),p(r.firstTabbableNode))}(t)}function u(t){n.clickOutsideDeactivates||e.contains(t.target)||n.allowOutsideClick&&n.allowOutsideClick(t)||(t.preventDefault(),t.stopImmediatePropagation())}function b(){var t=T(e);r.firstTabbableNode=t[0]||m(),r.lastTabbableNode=t[t.length-1]||m()}function p(t){t!==i.activeElement&&(t&&t.focus?(t.focus(),r.mostRecentlyFocusedNode=t,function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(t)&&t.select()):p(m()))}};
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
 */function R(t,o,i){return void 0===o&&(o=N),o(t,{clickOutsideDeactivates:!0,escapeDeactivates:!1,initialFocus:i})}
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
 */
var A={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked"},S={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},F={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150},I=function(t){function o(i){var e=t.call(this,c({},o.defaultAdapter,i))||this;return e.isOpen_=!1,e.animationFrame_=0,e.animationTimer_=0,e.layoutFrame_=0,e.escapeKeyAction_=S.CLOSE_ACTION,e.scrimClickAction_=S.CLOSE_ACTION,e.autoStackButtons_=!0,e.areButtonsStacked_=!1,e}return a(o,t),Object.defineProperty(o,"cssClasses",{get:function(){return A},enumerable:!0,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return S},enumerable:!0,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return F},enumerable:!0,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){}}},enumerable:!0,configurable:!0}),o.prototype.init=function(){this.adapter_.hasClass(A.STACKED)&&this.setAutoStackButtons(!1)},o.prototype.destroy=function(){this.isOpen_&&this.close(S.DESTROY_ACTION),this.animationTimer_&&(clearTimeout(this.animationTimer_),this.handleAnimationTimerEnd_()),this.layoutFrame_&&(cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=0)},o.prototype.open=function(){var t=this;this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.addClass(A.OPENING),this.runNextAnimationFrame_((function(){t.adapter_.addClass(A.OPEN),t.adapter_.addBodyClass(A.SCROLL_LOCK),t.layout(),t.animationTimer_=setTimeout((function(){t.handleAnimationTimerEnd_(),t.adapter_.trapFocus(t.adapter_.getInitialFocusEl()),t.adapter_.notifyOpened()}),F.DIALOG_ANIMATION_OPEN_TIME_MS)}))},o.prototype.close=function(t){var o=this;void 0===t&&(t=""),this.isOpen_&&(this.isOpen_=!1,this.adapter_.notifyClosing(t),this.adapter_.addClass(A.CLOSING),this.adapter_.removeClass(A.OPEN),this.adapter_.removeBodyClass(A.SCROLL_LOCK),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){o.adapter_.releaseFocus(),o.handleAnimationTimerEnd_(),o.adapter_.notifyClosed(t)}),F.DIALOG_ANIMATION_CLOSE_TIME_MS))},o.prototype.isOpen=function(){return this.isOpen_},o.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction_},o.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction_=t},o.prototype.getScrimClickAction=function(){return this.scrimClickAction_},o.prototype.setScrimClickAction=function(t){this.scrimClickAction_=t},o.prototype.getAutoStackButtons=function(){return this.autoStackButtons_},o.prototype.setAutoStackButtons=function(t){this.autoStackButtons_=t},o.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},o.prototype.handleClick=function(t){if(this.adapter_.eventTargetMatches(t.target,S.SCRIM_SELECTOR)&&""!==this.scrimClickAction_)this.close(this.scrimClickAction_);else{var o=this.adapter_.getActionFromEvent(t);o&&this.close(o)}},o.prototype.handleKeydown=function(t){var o="Enter"===t.key||13===t.keyCode;if(o&&!this.adapter_.getActionFromEvent(t)){var i=!this.adapter_.eventTargetMatches(t.target,S.SUPPRESS_DEFAULT_PRESS_SELECTOR);o&&i&&this.adapter_.clickDefaultButton()}},o.prototype.handleDocumentKeydown=function(t){("Escape"===t.key||27===t.keyCode)&&""!==this.escapeKeyAction_&&this.close(this.escapeKeyAction_)},o.prototype.layoutInternal_=function(){this.autoStackButtons_&&this.detectStackedButtons_(),this.detectScrollableContent_()},o.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter_.removeClass(A.OPENING),this.adapter_.removeClass(A.CLOSING)},o.prototype.runNextAnimationFrame_=function(t){var o=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){o.animationFrame_=0,clearTimeout(o.animationTimer_),o.animationTimer_=setTimeout(t,0)}))},o.prototype.detectStackedButtons_=function(){this.adapter_.removeClass(A.STACKED);var t=this.adapter_.areButtonsStacked();t&&this.adapter_.addClass(A.STACKED),t!==this.areButtonsStacked_&&(this.adapter_.reverseButtons(),this.areButtonsStacked_=t)},o.prototype.detectScrollableContent_=function(){this.adapter_.removeClass(A.SCROLLABLE),this.adapter_.isContentScrollable()&&this.adapter_.addClass(A.SCROLLABLE)},o}(d),L=I.strings,M=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return a(o,t),Object.defineProperty(o.prototype,"isOpen",{get:function(){return this.foundation_.isOpen()},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"escapeKeyAction",{get:function(){return this.foundation_.getEscapeKeyAction()},set:function(t){this.foundation_.setEscapeKeyAction(t)},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"scrimClickAction",{get:function(){return this.foundation_.getScrimClickAction()},set:function(t){this.foundation_.setScrimClickAction(t)},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"autoStackButtons",{get:function(){return this.foundation_.getAutoStackButtons()},set:function(t){this.foundation_.setAutoStackButtons(t)},enumerable:!0,configurable:!0}),o.attachTo=function(t){return new o(t)},o.prototype.initialize=function(t){var o,i,e=this.root_.querySelector(L.CONTAINER_SELECTOR);if(!e)throw new Error("Dialog component requires a "+L.CONTAINER_SELECTOR+" container element");this.container_=e,this.content_=this.root_.querySelector(L.CONTENT_SELECTOR),this.buttons_=[].slice.call(this.root_.querySelectorAll(L.BUTTON_SELECTOR)),this.defaultButton_=this.root_.querySelector("["+L.BUTTON_DEFAULT_ATTRIBUTE+"]"),this.focusTrapFactory_=t,this.buttonRipples_=[];try{for(var n=s(this.buttons_),r=n.next();!r.done;r=n.next())this.buttonRipples_.push(new g(r.value))}catch(t){o={error:t}}finally{try{r&&!r.done&&(i=n.return)&&i.call(n)}finally{if(o)throw o.error}}},o.prototype.initialSyncWithDOM=function(){var t=this;this.focusTrap_=R(this.container_,this.focusTrapFactory_,this.getInitialFocusEl_()||void 0),this.handleClick_=this.foundation_.handleClick.bind(this.foundation_),this.handleKeydown_=this.foundation_.handleKeydown.bind(this.foundation_),this.handleDocumentKeydown_=this.foundation_.handleDocumentKeydown.bind(this.foundation_),this.handleLayout_=this.layout.bind(this);var o=["resize","orientationchange"];this.handleOpening_=function(){o.forEach((function(o){return window.addEventListener(o,t.handleLayout_)})),document.addEventListener("keydown",t.handleDocumentKeydown_)},this.handleClosing_=function(){o.forEach((function(o){return window.removeEventListener(o,t.handleLayout_)})),document.removeEventListener("keydown",t.handleDocumentKeydown_)},this.listen("click",this.handleClick_),this.listen("keydown",this.handleKeydown_),this.listen(L.OPENING_EVENT,this.handleOpening_),this.listen(L.CLOSING_EVENT,this.handleClosing_)},o.prototype.destroy=function(){this.unlisten("click",this.handleClick_),this.unlisten("keydown",this.handleKeydown_),this.unlisten(L.OPENING_EVENT,this.handleOpening_),this.unlisten(L.CLOSING_EVENT,this.handleClosing_),this.handleClosing_(),this.buttonRipples_.forEach((function(t){return t.destroy()})),t.prototype.destroy.call(this)},o.prototype.layout=function(){this.foundation_.layout()},o.prototype.open=function(){this.foundation_.open()},o.prototype.close=function(t){void 0===t&&(t=""),this.foundation_.close(t)},o.prototype.getDefaultFoundation=function(){var t=this;return new I({addBodyClass:function(t){return document.body.classList.add(t)},addClass:function(o){return t.root_.classList.add(o)},areButtonsStacked:function(){return o=t.buttons_,i=new Set,[].forEach.call(o,(function(t){return i.add(t.offsetTop)})),i.size>1;var o,i},clickDefaultButton:function(){return t.defaultButton_&&t.defaultButton_.click()},eventTargetMatches:function(t,o){return!!t&&m(t,o)},getActionFromEvent:function(t){if(!t.target)return"";var o=h(t.target,"["+L.ACTION_ATTRIBUTE+"]");return o&&o.getAttribute(L.ACTION_ATTRIBUTE)},getInitialFocusEl:function(){return t.getInitialFocusEl_()},hasClass:function(o){return t.root_.classList.contains(o)},isContentScrollable:function(){return!!(o=t.content_)&&o.scrollHeight>o.offsetHeight;var o},notifyClosed:function(o){return t.emit(L.CLOSED_EVENT,o?{action:o}:{})},notifyClosing:function(o){return t.emit(L.CLOSING_EVENT,o?{action:o}:{})},notifyOpened:function(){return t.emit(L.OPENED_EVENT,{})},notifyOpening:function(){return t.emit(L.OPENING_EVENT,{})},releaseFocus:function(){return t.focusTrap_.deactivate()},removeBodyClass:function(t){return document.body.classList.remove(t)},removeClass:function(o){return t.root_.classList.remove(o)},reverseButtons:function(){t.buttons_.reverse(),t.buttons_.forEach((function(t){t.parentElement.appendChild(t)}))},trapFocus:function(){return t.focusTrap_.activate()}})},o.prototype.getInitialFocusEl_=function(){return document.querySelector("["+L.INITIAL_FOCUS_ATTRIBUTE+"]")},o}(l);const j=class{constructor(i){t(this,i),this.close=o(this,"close",7),this.closing=o(this,"closing",7),this.fullscreen=!1,this.open=!1,this.closingActions={escapeKey:!0,scrimClick:!0},this.showFooter=!0,this.handleMdcOpened=this.handleMdcOpened.bind(this),this.handleMdcClosed=this.handleMdcClosed.bind(this),this.handleMdcClosing=this.handleMdcClosing.bind(this)}connectedCallback(){this.initialize()}componentWillLoad(){this.id=r(),this.showFooter=!!this.host.querySelector('[slot="button"]')}componentDidLoad(){this.initialize()}initialize(){const t=this.host.shadowRoot.querySelector(".mdc-dialog");if(!t)return;this.mdcDialog=new M(t),this.open&&this.mdcDialog.open();const{activate:o,deactivate:i}=R(this.host.shadowRoot.querySelector(".mdc-dialog__surface"),N,this.host.shadowRoot.querySelector("#initialFocusEl"));this.mdcDialog.foundation_.adapter_.trapFocus=()=>{o()},this.mdcDialog.foundation_.adapter_.releaseFocus=()=>{i()},this.mdcDialog.listen("MDCDialog:opened",this.handleMdcOpened),this.mdcDialog.listen("MDCDialog:closed",this.handleMdcClosed),this.mdcDialog.listen("MDCDialog:closing",this.handleMdcClosing),this.mdcDialog.scrimClickAction="",this.closingActions.scrimClick&&(this.mdcDialog.scrimClickAction="close"),this.mdcDialog.escapeKeyAction="",this.closingActions.escapeKey&&(this.mdcDialog.escapeKeyAction="close")}disconnectedCallback(){this.mdcDialog.unlisten("MDCDialog:opened",this.handleMdcOpened),this.mdcDialog.unlisten("MDCDialog:closed",this.handleMdcClosed),this.mdcDialog.unlisten("MDCDialog:closing",this.handleMdcClosing),this.mdcDialog.destroy()}render(){return i("div",{class:{"mdc-dialog":!0,"full-screen":!!this.fullscreen},role:"alertdialog","aria-modal":"true","aria-labelledby":"limel-dialog-title-"+this.id,"aria-describedby":"limel-dialog-content-"+this.id},i("input",{hidden:!0,id:"initialFocusEl"}),i("div",{class:"mdc-dialog__container"},i("div",{class:"mdc-dialog__surface"},this.renderHeading(),i("div",{class:"mdc-dialog__content scrollbox",id:"limel-dialog-content-"+this.id},i("slot",null)),this.renderFooter())),i("div",{class:"mdc-dialog__scrim"}))}watchHandler(t,o){o!==t&&this.mdcDialog&&(t?this.mdcDialog.open():this.mdcDialog.close())}handleMdcOpened(){setTimeout(n,100)}handleMdcClosed(){this.open&&this.close.emit(),this.open=!1}handleMdcClosing(){this.closing.emit()}isBadgeHeading(t){return"object"==typeof t&&!!t.title&&!!t.icon}renderHeading(){if(this.isBadgeHeading(this.heading)){const{title:t,subtitle:o,supportingText:e,icon:n}=this.heading;return i("limel-header",{icon:n,heading:t,subheading:o,supportingText:e})}return"string"==typeof this.heading?i("limel-header",{heading:this.heading}):null}renderFooter(){if(this.showFooter)return i("footer",{class:"mdc-dialog__actions"},i("slot",{name:"button"}))}get host(){return e(this)}static get watchers(){return{open:["watchHandler"]}}};j.style=':host{--mdc-theme-primary:var(\n      --lime-primary-color,\n      rgb(var(--color-teal-default))\n  );--mdc-theme-secondary:var(\n      --lime-secondary-color,\n      rgb(var(--contrast-1100))\n  );--mdc-theme-on-primary:var(\n      --lime-on-primary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-on-secondary:var(\n      --lime-on-secondary-color,\n      rgb(var(--contrast-100))\n  );--mdc-theme-text-disabled-on-background:var(\n      --lime-text-disabled-on-background-color,\n      rgba(var(--contrast-1700), 0.38)\n  );--mdc-theme-text-primary-on-background:var(\n      --lime-text-primary-on-background-color,\n      rgba(var(--contrast-1700), 0.87)\n  );--mdc-theme-text-secondary-on-background:var(\n      --lime-text-secondary-on-background-color,\n      rgba(var(--contrast-1700), 0.54)\n  );--lime-error-text-color:rgb(var(--color-red-darker))}:root{--mdc-theme-primary:#26a69a;--mdc-theme-secondary:#575756;--mdc-theme-background:#fff;--mdc-theme-surface:#fff;--mdc-theme-error:#b00020;--mdc-theme-on-primary:#fff;--mdc-theme-on-secondary:#fff;--mdc-theme-on-surface:#000;--mdc-theme-on-error:#fff;--mdc-theme-text-primary-on-background:rgba(0, 0, 0, 0.87);--mdc-theme-text-secondary-on-background:rgba(0, 0, 0, 0.54);--mdc-theme-text-hint-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-disabled-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-icon-on-background:rgba(0, 0, 0, 0.38);--mdc-theme-text-primary-on-light:rgba(0, 0, 0, 0.87);--mdc-theme-text-secondary-on-light:rgba(0, 0, 0, 0.54);--mdc-theme-text-hint-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-disabled-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-icon-on-light:rgba(0, 0, 0, 0.38);--mdc-theme-text-primary-on-dark:white;--mdc-theme-text-secondary-on-dark:rgba(255, 255, 255, 0.7);--mdc-theme-text-hint-on-dark:rgba(255, 255, 255, 0.5);--mdc-theme-text-disabled-on-dark:rgba(255, 255, 255, 0.5);--mdc-theme-text-icon-on-dark:rgba(255, 255, 255, 0.5)}.mdc-theme--primary{color:#26a69a !important;color:var(--mdc-theme-primary, #26a69a) !important}.mdc-theme--secondary{color:#575756 !important;color:var(--mdc-theme-secondary, #575756) !important}.mdc-theme--background{background-color:#fff;background-color:var(--mdc-theme-background, #fff)}.mdc-theme--surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-theme--error{color:#b00020 !important;color:var(--mdc-theme-error, #b00020) !important}.mdc-theme--on-primary{color:#fff !important;color:var(--mdc-theme-on-primary, #fff) !important}.mdc-theme--on-secondary{color:#fff !important;color:var(--mdc-theme-on-secondary, #fff) !important}.mdc-theme--on-surface{color:#000 !important;color:var(--mdc-theme-on-surface, #000) !important}.mdc-theme--on-error{color:#fff !important;color:var(--mdc-theme-on-error, #fff) !important}.mdc-theme--text-primary-on-background{color:rgba(0, 0, 0, 0.87) !important;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87)) !important}.mdc-theme--text-secondary-on-background{color:rgba(0, 0, 0, 0.54) !important;color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54)) !important}.mdc-theme--text-hint-on-background{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-disabled-on-background{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-disabled-on-background, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-icon-on-background{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-primary-on-light{color:rgba(0, 0, 0, 0.87) !important;color:var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87)) !important}.mdc-theme--text-secondary-on-light{color:rgba(0, 0, 0, 0.54) !important;color:var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54)) !important}.mdc-theme--text-hint-on-light{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-disabled-on-light{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-icon-on-light{color:rgba(0, 0, 0, 0.38) !important;color:var(--mdc-theme-text-icon-on-light, rgba(0, 0, 0, 0.38)) !important}.mdc-theme--text-primary-on-dark{color:white !important;color:var(--mdc-theme-text-primary-on-dark, white) !important}.mdc-theme--text-secondary-on-dark{color:rgba(255, 255, 255, 0.7) !important;color:var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7)) !important}.mdc-theme--text-hint-on-dark{color:rgba(255, 255, 255, 0.5) !important;color:var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5)) !important}.mdc-theme--text-disabled-on-dark{color:rgba(255, 255, 255, 0.5) !important;color:var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5)) !important}.mdc-theme--text-icon-on-dark{color:rgba(255, 255, 255, 0.5) !important;color:var(--mdc-theme-text-icon-on-dark, rgba(255, 255, 255, 0.5)) !important}.mdc-theme--primary-bg{background-color:#26a69a !important;background-color:var(--mdc-theme-primary, #26a69a) !important}.mdc-theme--secondary-bg{background-color:#575756 !important;background-color:var(--mdc-theme-secondary, #575756) !important}.mdc-typography{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.mdc-typography--headline1{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.375rem;line-height:1.375rem;font-weight:300;letter-spacing:-0.015625em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline2{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:0.875rem;font-weight:300;letter-spacing:-0.0083333333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline3{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:0.875rem;font-weight:400;letter-spacing:normal;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline4{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:0.875rem;font-weight:400;letter-spacing:0.0073529412em;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline5{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:0.875rem;font-weight:400;letter-spacing:normal;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline6{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:0.875rem;font-weight:500;letter-spacing:0.0125em;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle1{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:1.125rem;font-weight:400;letter-spacing:0.009375em;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.125rem;font-weight:500;letter-spacing:0.0071428571em;text-decoration:inherit;text-transform:inherit}.mdc-typography--body1{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.5rem;font-weight:400;letter-spacing:0.03125em;text-decoration:inherit;text-transform:inherit}.mdc-typography--body2{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.625rem;font-weight:400;letter-spacing:0.0178571429em;text-decoration:inherit;text-transform:inherit}.mdc-typography--caption{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.6875rem;line-height:0.875rem;font-weight:400;letter-spacing:0.0333333333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--button{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:2.25rem;font-weight:500;letter-spacing:0.0892857143em;text-decoration:none;text-transform:none}.mdc-typography--overline{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.6875rem;line-height:0.875rem;font-weight:500;letter-spacing:0.1666666667em;text-decoration:none;text-transform:uppercase}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12)}.mdc-dialog .mdc-dialog__surface{min-width:17.5rem}@media (max-width: 37rem){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 2rem)}}@media (min-width: 37rem){.mdc-dialog .mdc-dialog__surface{max-width:35rem}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 2rem)}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){.mdc-dialog .mdc-dialog__container{}}.mdc-dialog .mdc-dialog__surface{border-radius:0.25rem}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{box-shadow:0rem 0.6875rem 0.9375rem -0.4375rem rgba(0, 0, 0, 0.2), 0rem 1.5rem 2.375rem 0.1875rem rgba(0, 0, 0, 0.14), 0rem 0.5625rem 2.875rem 0.5rem rgba(0, 0, 0, 0.12);display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog[dir=rtl] .mdc-dialog__surface,[dir=rtl] .mdc-dialog .mdc-dialog__surface{text-align:right}.mdc-dialog__title{display:block;margin-top:0;line-height:normal;font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.875rem;line-height:0.875rem;font-weight:500;letter-spacing:0.0125em;text-decoration:inherit;text-transform:inherit;display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0;padding:0 1.5rem 0.5625rem;border-bottom:0.0625rem solid transparent}.mdc-dialog__title::before{display:inline-block;width:0;height:2.5rem;content:"";vertical-align:0}.mdc-dialog[dir=rtl] .mdc-dialog__title,[dir=rtl] .mdc-dialog .mdc-dialog__title{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{padding-bottom:0.9375rem}.mdc-dialog__content{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:0.8125rem;line-height:1.5rem;font-weight:400;letter-spacing:0.03125em;text-decoration:inherit;text-transform:inherit;flex-grow:1;box-sizing:border-box;margin:0;padding:1.25rem 1.5rem;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__content{padding-top:0.5rem;padding-bottom:0.5rem}.mdc-dialog__content .mdc-list:first-child:last-child{padding:0.375rem 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:3.25rem;margin:0;padding:0.5rem;border-top:0.0625rem solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:0.5rem;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:0.5rem}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-dialog[dir=rtl] .mdc-dialog__button,[dir=rtl] .mdc-dialog .mdc-dialog__button{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:0.75rem}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:scale(1)}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:scale(1);opacity:1}.mdc-dialog-scroll-lock{overflow:hidden}slot[name=header]{display:none}:host{--dialog-background-color:rgb(var(--contrast-100));--header-heading-color:var(--dialog-heading-title-color);--header-subheading-color:var(--dialog-heading-subtitle-color);--header-supporting-text-color:var(--dialog-heading-supporting-text-color);--header-icon-color:var(--dialog-heading-icon-color);--header-icon-background-color:var(--dialog-heading-icon-background-color)}.mdc-dialog{z-index:var(--dialog-z-index, 7)}@media (max-width: 1002rem){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 2rem)}}@media (min-width: 1002rem){.mdc-dialog .mdc-dialog__surface{max-width:1000rem}}@media (max-height: 1002rem){.mdc-dialog.full-screen .mdc-dialog__surface{max-height:calc(100% - 2rem)}}@media (min-height: 1002rem){.mdc-dialog.full-screen .mdc-dialog__surface{max-height:1000rem}}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){.mdc-dialog.full-screen .mdc-dialog__container{}}@media (-ms-high-contrast: none) and (min-height: 1002rem), (-ms-high-contrast: active) and (min-height: 1002rem){.mdc-dialog.full-screen .mdc-dialog__container{align-items:stretch;height:auto}}.mdc-dialog.full-screen .mdc-dialog__container{height:100%;width:100%}.mdc-dialog.full-screen .mdc-dialog__container .mdc-dialog__surface{height:100%;width:100%}.mdc-dialog .mdc-dialog__container{height:100%}.mdc-dialog .mdc-dialog__surface{width:var(--dialog-width, auto);height:var(--dialog-height, auto);background-color:var(--dialog-background-color);box-shadow:var(--shadow-depth-64)}.scrollbox{--dialog-background-color-transparent:rgba(var(--contrast-100), 0);--dialog-scroll-shadow-color:rgba(var(--color-black), 0.2);--dialog-scroll-shadow-color-transparent:rgba(var(--color-black), 0);background:linear-gradient(var(--dialog-background-color) 30%, var(--dialog-background-color-transparent)), linear-gradient(var(--dialog-background-color-transparent), var(--dialog-background-color) 70%) 0 100%, radial-gradient(farthest-side at 50% 0, var(--dialog-scroll-shadow-color), var(--dialog-scroll-shadow-color-transparent)), radial-gradient(farthest-side at 50% 100%, var(--dialog-scroll-shadow-color), var(--dialog-scroll-shadow-color-transparent)) 0 100%;background-repeat:no-repeat;background-color:var(--dialog-background-color);background-size:100% 2.5rem, 100% 2.5rem, 100% 0.875rem, 100% 0.875rem;background-attachment:local, local, scroll, scroll}';export{j as limel_dialog}