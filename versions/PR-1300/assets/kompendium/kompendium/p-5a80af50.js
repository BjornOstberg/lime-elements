let e,t,n,l=!1,o=!1,s=!1,i=!1;const r="undefined"!=typeof window?window:{},c=r.document||{head:{}},f={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},a=e=>Promise.resolve(e),u=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),d={},$="http://www.w3.org/1999/xlink",p=new WeakMap,m=e=>"sc-"+e.o,y={},h=e=>"object"==(e=typeof e)||"function"===e,w=(e,t,...n)=>{let l=null,o=null,s=null,i=!1,r=!1,c=[];const f=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?f(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!h(l))&&(l+=""),i&&r?c[c.length-1].i+=l:c.push(i?b(null,l):l),r=i)};if(f(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,v);const a=b(e,null);return a.u=t,c.length>0&&(a.$=c),a.p=o,a.m=s,a},b=(e,t)=>({t:0,h:e,i:t,k:null,$:null,u:null,p:null,m:null}),k={},v={forEach:(e,t)=>e.map(S).forEach(t),map:(e,t)=>e.map(S).map(t).map(g)},S=e=>({vattrs:e.u,vchildren:e.$,vkey:e.p,vname:e.m,vtag:e.h,vtext:e.i}),g=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),w(e.vtag,t,...e.vchildren||[])}const t=b(e.vtag,e.vtext);return t.u=e.vattrs,t.$=e.vchildren,t.p=e.vkey,t.m=e.vname,t},j=(e,t,n,l,o,s)=>{if(n!==l){let i=re(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,o=M(n),s=M(l);t.remove(...o.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const r=h(l);if((i||r&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}let f=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,f=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(f?e.removeAttributeNS($,t):e.removeAttribute(t)):(!i||4&s||o)&&!r&&(l=!0===l?"":l,f?e.setAttributeNS($,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):re(r,c)?c.slice(2):c[2]+t.slice(3),n&&f.rel(e,t,n,!1),l&&f.ael(e,t,l,!1)}},C=/\s/,M=e=>e?e.split(C):[],R=(e,t,n,l)=>{const o=11===t.k.nodeType&&t.k.host?t.k.host:t.k,s=e&&e.u||y,i=t.u||y;for(l in s)l in i||j(o,l,s[l],void 0,n,t.t);for(l in i)j(o,l,s[l],i[l],n,t.t)},O=(o,i,r,f)=>{let a,u,d,$=i.$[r],p=0;if(l||(s=!0,"slot"===$.h&&(e&&f.classList.add(e+"-s"),$.t|=$.$?2:1)),null!==$.i)a=$.k=c.createTextNode($.i);else if(1&$.t)a=$.k=c.createTextNode("");else if(a=$.k=c.createElement(2&$.t?"slot-fb":$.h),R(null,$,!1),null!=e&&a["s-si"]!==e&&a.classList.add(a["s-si"]=e),$.$)for(p=0;p<$.$.length;++p)u=O(o,$,p,a),u&&a.appendChild(u);return a["s-hn"]=n,3&$.t&&(a["s-sr"]=!0,a["s-cr"]=t,a["s-sn"]=$.m||"",d=o&&o.$&&o.$[r],d&&d.h===$.h&&o.k&&x(o.k,!1)),a},x=(e,t)=>{f.t|=1;const l=e.childNodes;for(let e=l.length-1;e>=0;e--){const o=l[e];o["s-hn"]!==n&&o["s-ol"]&&(D(o).insertBefore(o,T(o)),o["s-ol"].remove(),o["s-ol"]=void 0,s=!0),t&&x(o,t)}f.t&=-2},P=(e,t,l,o,s,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);s<=i;++s)o[s]&&(r=O(null,l,s,e),r&&(o[s].k=r,c.insertBefore(r,T(t))))},U=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.k,N(l),o=!0,s["s-ol"]?s["s-ol"].remove():x(s,!0),s.remove())},L=(e,t)=>e.h===t.h&&("slot"===e.h?e.m===t.m:e.p===t.p),T=e=>e&&e["s-ol"]||e,D=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,E=(e,t)=>{const n=t.k=e.k,l=e.$,o=t.$,s=t.i;let i;null===s?("slot"===t.h||R(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s,i=0,r=0,c=0,f=0,a=t.length-1,u=t[0],d=t[a],$=l.length-1,p=l[0],m=l[$];for(;i<=a&&r<=$;)if(null==u)u=t[++i];else if(null==d)d=t[--a];else if(null==p)p=l[++r];else if(null==m)m=l[--$];else if(L(u,p))E(u,p),u=t[++i],p=l[++r];else if(L(d,m))E(d,m),d=t[--a],m=l[--$];else if(L(u,m))"slot"!==u.h&&"slot"!==m.h||x(u.k.parentNode,!1),E(u,m),e.insertBefore(u.k,d.k.nextSibling),u=t[++i],m=l[--$];else if(L(d,p))"slot"!==u.h&&"slot"!==m.h||x(d.k.parentNode,!1),E(d,p),e.insertBefore(d.k,u.k),d=t[--a],p=l[++r];else{for(c=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].p&&t[f].p===p.p){c=f;break}c>=0?(s=t[c],s.h!==p.h?o=O(t&&t[r],n,c,e):(E(s,p),t[c]=void 0,o=s.k),p=l[++r]):(o=O(t&&t[r],n,r,e),p=l[++r]),o&&D(u.k).insertBefore(o,T(u.k))}i>a?P(e,null==l[$+1]?null:l[$+1].k,n,l,r,$):r>$&&U(t,i,a)})(n,l,t,o):null!==o?(null!==e.i&&(n.textContent=""),P(n,null,t,o,0,o.length-1)):null!==l&&U(l,0,l.length-1)):(i=n["s-cr"])?i.parentNode.textContent=s:e.i!==s&&(n.data=s)},W=e=>{let t,n,l,o,s,i,r=e.childNodes;for(n=0,l=r.length;n<l;n++)if(t=r[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(i=r[o].nodeType,r[o]["s-hn"]!==t["s-hn"]||""!==s){if(1===i&&s===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==r[o].textContent.trim()){t.hidden=!0;break}W(t)}},q=[],A=e=>{let t,n,l,s,i,r,c=0,f=e.childNodes,a=f.length;for(;c<a;c++){if(t=f[c],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,s=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(F(n,s)?(i=q.find((e=>e.v===n)),o=!0,n["s-sn"]=n["s-sn"]||s,i?i.S=t:q.push({S:t,v:n}),n["s-sr"]&&q.map((e=>{F(e.v,n["s-sn"])&&(i=q.find((e=>e.v===n)),i&&!e.S&&(e.S=i.S))}))):q.some((e=>e.v===n))||q.push({v:n}));1===t.nodeType&&A(t)}},F=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,N=e=>{e.u&&e.u.ref&&e.u.ref(null),e.$&&e.$.map(N)},H=e=>oe(e).g,V=(e,t)=>{t&&!e.j&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.j=t)))},_=(e,t)=>{if(e.t|=16,!(4&e.t))return V(e,e.C),be((()=>z(e,t)));e.t|=512},z=(e,t)=>{const n=e.M;let l;return t&&(l=K(n,"componentWillLoad")),l=Q(l,(()=>K(n,"componentWillRender"))),Q(l,(()=>B(e,n,t)))},B=async(e,t,n)=>{const l=e.g,o=l["s-rc"];n&&(e=>{const t=e.R,n=e.g,l=t.t,o=((e,t)=>{let n=m(t),l=ue.get(n);if(e=11===e.nodeType?e:c,l)if("string"==typeof l){let t,o=p.get(e=e.head||e);o||p.set(e,o=new Set),o.has(n)||(t=c.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);G(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>I(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},G=(i,r)=>{try{r=r.render&&r.render(),i.t&=-17,i.t|=2,((i,r)=>{const a=i.g,u=i.R,d=i.O||b(null,null),$=(e=>e&&e.h===k)(r)?r:w(null,null,r);if(n=a.tagName,u.P&&($.u=$.u||{},u.P.map((([e,t])=>$.u[t]=a[e]))),$.h=null,$.t|=4,i.O=$,$.k=d.k=a.shadowRoot||a,e=a["s-sc"],t=a["s-cr"],l=0!=(1&u.t),o=!1,E(d,$),f.t|=1,s){let e,t,n,l,o,s;A($.k);let i=0;for(;i<q.length;i++)e=q[i],t=e.v,t["s-ol"]||(n=c.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<q.length;i++)if(e=q[i],t=e.v,e.S){for(l=e.S.parentNode,o=e.S.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&W($.k),f.t&=-2,q.length=0})(i,r)}catch(e){ce(e,i.g)}return null},I=e=>{const t=e.g,n=e.M,l=e.C;K(n,"componentDidRender"),64&e.t?K(n,"componentDidUpdate"):(e.t|=64,X(t),K(n,"componentDidLoad"),e.U(t),l||J()),e.j&&(e.j(),e.j=void 0),512&e.t&&he((()=>_(e,!1))),e.t&=-517},J=()=>{X(c.documentElement),he((()=>(e=>{const t=f.ce("appload",{detail:{namespace:"kompendium"}});return e.dispatchEvent(t),t})(r)))},K=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){ce(e)}},Q=(e,t)=>e&&e.then?e.then(t):t(),X=e=>e.classList.add("hydrated"),Y=(e,t,n)=>{if(t.L){e.watchers&&(t.T=e.watchers);const l=Object.entries(t.L),o=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>oe(this).D.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=oe(e),s=o.g,i=o.D.get(t),r=o.t,c=o.M;if(n=((e,t)=>null==e||h(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.L[t][0]),!(8&r&&void 0!==i||n===i)&&(o.D.set(t,n),c)){if(l.T&&128&r){const e=l.T[t];e&&e.map((e=>{try{c[e](n,i,t)}catch(e){ce(e,s)}}))}2==(18&r)&&_(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){f.jmp((()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.P.push([e,o]),o}))}}return e},Z=e=>{K(e,"connectedCallback")},ee=(e,t={})=>{const n=[],l=t.exclude||[],o=r.customElements,s=c.head,i=s.querySelector("meta[charset]"),a=c.createElement("style"),d=[];let $,p=!0;Object.assign(f,t),f.l=new URL(t.resourcesUrl||"./",c.baseURI).href,e.map((e=>e[1].map((t=>{const s={t:t[0],o:t[1],L:t[2],W:t[3]};s.L=t[2],s.P=[],s.T={};const i=s.o,r=class extends HTMLElement{constructor(e){super(e),ie(e=this,s),1&s.t&&e.attachShadow({mode:"open"})}connectedCallback(){$&&(clearTimeout($),$=null),p?d.push(this):f.jmp((()=>(e=>{if(0==(1&f.t)){const t=oe(e),n=t.R,l=()=>{};if(1&t.t)Z(t.M);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=c.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){V(t,t.C=n);break}}n.L&&Object.entries(n.L).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=ae(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.T=o.watchers,Y(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){ce(e)}t.t&=-9,t.t|=128,e(),Z(t.M)}if(o.style){let e=o.style;const t=m(n);if(!ue.has(t)){const l=()=>{};((e,t,n)=>{let l=ue.get(e);u&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,ue.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.C,i=()=>_(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(0,t,n)}l()}})(this)))}disconnectedCallback(){f.jmp((()=>(()=>{if(0==(1&f.t)){const e=oe(this).M;K(e,"disconnectedCallback"),K(e,"componentDidUnload")}})()))}componentOnReady(){return oe(this).q}};s.A=e[0],l.includes(i)||o.get(i)||(n.push(i),o.define(i,Y(r,s,1)))})))),a.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",a.setAttribute("data-styles",""),s.insertBefore(a,i?i.nextSibling:s.firstChild),p=!1,d.length?d.map((e=>e.connectedCallback())):f.jmp((()=>$=setTimeout(J,30)))},te=e=>{const t=new URL(e,f.l);return t.origin!==r.location.origin?t.href:t.pathname},ne=(e,t)=>t in d?d[t]:"window"===t?r:"document"===t?c:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?te("."):"queue"===t?{write:be,read:we,tick:{then:e=>he(e)}}:void 0)),le=new WeakMap,oe=e=>le.get(e),se=(e,t)=>le.set(t.M=e,t),ie=(e,t)=>{const n={t:0,g:e,R:t,D:new Map};return n.q=new Promise((e=>n.U=e)),e["s-p"]=[],e["s-rc"]=[],le.set(e,n)},re=(e,t)=>t in e,ce=(e,t)=>(0,console.error)(e,t),fe=new Map,ae=e=>{const t=e.o.replace(/-/g,"_"),n=e.A,l=fe.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(fe.set(n,e),e[t])),ce)},ue=new Map,de=[],$e=[],pe=(e,t)=>n=>{e.push(n),i||(i=!0,t&&4&f.t?he(ye):f.raf(ye))},me=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){ce(e)}e.length=0},ye=()=>{me(de),me($e),(i=de.length>0)&&f.raf(ye)},he=e=>a().then(e),we=pe(de,!1),be=pe($e,!0);export{H as a,ee as b,ne as c,te as g,w as h,a as p,se as r}