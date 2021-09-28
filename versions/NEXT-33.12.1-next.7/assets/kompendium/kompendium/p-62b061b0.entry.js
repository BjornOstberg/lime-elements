import{h as t,r,g as e}from"./p-4cc338df.js";import{P as o,M as i}from"./p-6782b896.js";function n({events:r,id:e}){if(r.length)return[t("h3",{class:"docs-layout-section-heading",id:e},"Events"),...r.map(a)]}function a(r){const e=[{key:"Detail",value:r.detail},{key:"Bubbles",value:String(r.bubbles)},{key:"Cancelable",value:String(r.cancelable)},{key:"Composed",value:String(r.composed)}];return t("div",{class:"props-events-layout"},t("h4",null,r.event),t("kompendium-taglist",{tags:r.docsTags}),t("div",{class:"markdown-props"},t("kompendium-markdown",{text:r.docs}),t("kompendium-proplist",{items:e})))}function s({slots:r,id:e}){if(r.length)return[t("h3",{class:"docs-layout-section-heading",id:e},"Slots"),...r.map(m)]}function m(r){return t("div",null,t("h4",null,r.name),t("kompendium-markdown",{text:r.docs}))}function d({styles:r,id:e}){if(r.length)return[t("h3",{class:"docs-layout-section-heading",id:e},"Styles"),...r.map(l)]}function l(r){return t("div",{class:"styles-layout"},t("div",{class:"styles-title"},t("code",null,r.name)),t("div",{class:"styles-content"},t("kompendium-markdown",{text:r.docs})))}function c({examples:r,id:e,schema:o}){if(r.length)return[t("h3",{class:"docs-layout-section-heading",id:e},"Examples"),r.map(u(o))]}const u=r=>e=>t("kompendium-playground",{component:e,schema:r});var p=function(t){if("function"!=typeof t)throw new TypeError("Expected a function");return function(){var r=arguments;switch(r.length){case 0:return!t.call(this);case 1:return!t.call(this,r[0]);case 2:return!t.call(this,r[0],r[1]);case 3:return!t.call(this,r[0],r[1],r[2])}return!t.apply(this,r)}};const h=class{constructor(t){r(this,t),this.scrollToOnNextUpdate=null,this.handleRouteChange=this.handleRouteChange.bind(this)}connectedCallback(){window.addEventListener("hashchange",this.handleRouteChange)}disconnectedCallback(){window.removeEventListener("hashchange",this.handleRouteChange)}componentDidLoad(){const t=this.getRoute();this.scrollToElement(t)}componentDidUpdate(){this.scrollToOnNextUpdate&&(this.scrollToElement(this.scrollToOnNextUpdate),this.scrollToOnNextUpdate=null)}handleRouteChange(){const t=this.getRoute();this.scrollToOnNextUpdate=t}scrollToElement(t){const r=this.host.shadowRoot.getElementById(t);r&&r.scrollIntoView()}render(){const r=this.match.params.name,e=function(t,r){return r.components.find((r=>r.tag===t))}(r,this.docs);return t("article",{class:"component"},t("section",{class:"docs"},this.renderDocs(r,e)))}renderDocs(r,e){let a=r.split("-").slice(1).join(" ");a=a[0].toLocaleUpperCase()+a.slice(1);const m=function(t,r){return t.docsTags.filter(b("exampleComponent")).map(g(r))}(e,this.docs),l=e.docsTags.filter(p(b("slot"))).filter(p(b("exampleComponent"))),u=this.schemas.find((t=>t.$id===r));return[t("h1",{id:this.getId()},a),t("kompendium-markdown",{text:e.docs}),t("kompendium-taglist",{tags:l}),t(c,{examples:m,id:this.getId("examples"),schema:u}),t(o,{props:e.props,id:this.getId("properties")}),t(n,{events:e.events,id:this.getId("events")}),t(i,{methods:e.methods,id:this.getId("methods")}),t(s,{slots:e.slots,id:this.getId("slots")}),t(d,{styles:e.styles,id:this.getId("styles")})]}getId(t){return[this.getRoute().split("/").slice(0,3).join("/"),t].filter((t=>!!t)).join("/")+"/"}getRoute(){return location.hash.substr(1)}get host(){return e(this)}},g=t=>r=>t.components.find((t=>t.tag===r.text)),b=t=>r=>r.name===t;h.style='*,*::before,*::after{box-sizing:border-box}ul[class],ol[class]{padding:0}body,h1,h2,h3,h4,p,ul[class],ol[class],li,figure,figcaption,blockquote,dl,dd{margin:0}ul[class],ol[class]{list-style:none}a:not([class]){text-decoration-skip-ink:auto}img{max-width:100%}input,button,textarea,select{font:inherit}@media (prefers-reduced-motion: reduce){*{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;scroll-behavior:auto !important}}:root{--width-nav-panel:16rem}p,a,li{font-size:0.9375rem}h1,h2,h3,h4,h5,h6{margin-bottom:0.5rem;font-weight:normal;font-weight:500}h1{font-size:2rem;line-height:2.25rem;margin-top:1.5rem;letter-spacing:-0.0625rem;font-weight:400}h2{font-size:1.625rem;line-height:1.25rem;margin-top:1.25rem;margin-bottom:1rem}h3{font-size:1.375rem;line-height:1.5rem;margin-top:1rem}h4{font-size:1.25rem;line-height:1.25rem;margin-top:1rem}h5{font-size:1.125rem;line-height:1.125rem;margin-top:0.75rem}h6{font-size:1rem;font-variant:all-small-caps;letter-spacing:0.0625rem}p,blockquote{margin-top:0;margin-bottom:0.5rem}p:only-child,blockquote:only-child{margin-bottom:0}a{transition:color 0.2s ease;color:rgb(var(--kompendium-color-blue-default));text-decoration:none}a:hover{color:rgb(var(--kompendium-color-blue-light))}ul{list-style:none}ul li{position:relative;margin-left:0.75rem}ul li:before{content:"";position:absolute;left:-0.5rem;top:0.625rem;width:0.25rem;height:0.25rem;border-radius:50%;background-color:rgb(var(--kompendium-contrast-700));display:block}ol{list-style:decimal inside}ol,ul{padding-left:0;margin-top:0}ul ul,ul ol,ol ol,ol ul{margin:0.9375rem 0 0.9375rem 1.875rem;font-size:90%}li{margin-bottom:0.625rem}th,td{padding:0.75rem 1rem;text-align:left;border-bottom:1px solid rgb(var(--kompendium-contrast-600))}th:first-child,td:first-child{padding-left:0}th:last-child,td:last-child{padding-right:0}hr{margin:1.75rem 0 2rem 0;border-width:0;border-top:1px solid rgb(var(--kompendium-contrast-600))}kbd{font-family:var(--kompendium-font-code);font-size:0.875rem;font-weight:600;color:rgb(var(--kompendium-contrast-1000));background-color:rgb(var(--kompendium-contrast-200));white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:normal;padding:0.125rem 0.5rem;margin:0 0.25rem;border-radius:0.25rem;box-shadow:var(--kompendium-button-shadow-normal), 0 0.03125rem 0.21875rem 0 rgba(var(--kompendium-contrast-100), 0.5) inset;border:solid rgba(var(--kompendium-contrast-600), 0.8);border-width:0 0.0625rem 0.125rem 0.0625rem}:root{--width-nav-panel:16rem}kompendium-playground{width:100%}.docs-layout-section-heading{transition:border-color 0.3s ease 0.05s;padding-top:2.5rem;margin:2.5rem 0 1.25rem 0;border-top:1px solid rgb(var(--kompendium-contrast-500))}.docs-layout-section-heading:before{content:"";width:0.125rem;height:0.75rem;display:inline-block;background-color:rgba(var(--kompendium-color-code-blue), 0.4);border-radius:0.0625rem;transform:translateX(-0.5rem)}.props-events-layout .markdown-props{display:grid;grid-gap:1.25rem;grid-auto-flow:column;grid-template-columns:1fr 1fr}@media (max-width: 1000px){.props-events-layout .markdown-props{grid-gap:0.75rem;grid-auto-flow:row;grid-template-columns:unset}}.methods-layout{border-radius:0.375rem;margin-bottom:2.5rem;background-color:rgb(var(--kompendium-contrast-400))}.methods-title{margin:0;border-radius:0.375rem 0.375rem 0 0;padding:0.75rem 1rem;background-color:rgb(var(--kompendium-contrast-500));font-size:1.0625rem}.methods-content{display:grid;grid-gap:1.25rem;grid-auto-flow:column;grid-template-columns:1fr 1fr;padding:1rem 1.25rem 1.5rem 1.25rem}.methods-returns{padding:1rem 1.25rem 1.5rem 1.25rem;border-radius:0 0 0.375rem 0.375rem;border-top:1px solid rgb(var(--kompendium-contrast-600))}.methods-returns h5{margin-top:0}@media (max-width: 1000px){.methods-content{grid-gap:0.75rem;grid-auto-flow:row;grid-template-columns:unset}}.styles-layout{display:grid;grid-auto-flow:column;grid-template-columns:1fr 1fr;grid-gap:0 0.75rem;border:solid rgb(var(--kompendium-contrast-500));border-width:1px 1px 0 1px;padding:0.5rem;background-color:rgb(var(--kompendium-contrast-300))}.styles-layout:first-of-type{border-top-right-radius:0.375rem;border-top-left-radius:0.375rem}.styles-layout:last-of-type{border-bottom-right-radius:0.375rem;border-bottom-left-radius:0.375rem;border-bottom-width:1px}.styles-layout:nth-of-type(odd){background-color:rgb(var(--kompendium-contrast-400))}.styles-title code{font-family:var(--kompendium-font-code);border-radius:0.25rem;border:1px solid rgba(var(--kompendium-contrast-1100), 0.1);font-size:0.6875rem;white-space:nowrap;color:rgb(var(--kompendium-contrast-1100));padding:0.125rem 0.3125rem;margin:0 0.125rem;background:rgba(var(--kompendium-contrast-1100), 0.05)}@media (max-width: 1000px){.styles-layout{grid-auto-flow:row;grid-template-columns:unset;grid-gap:0.75rem 0}}:host{display:block}.docs kompendium-markdown{display:block;width:calc(50% - 2rem)}@media (max-width: 1400px){.docs kompendium-markdown{width:100%}}';export{h as kompendium_component}