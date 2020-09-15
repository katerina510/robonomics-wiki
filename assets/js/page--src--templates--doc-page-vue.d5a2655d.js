(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{250:function(t,e,i){},251:function(t,e){},254:function(t,e,i){"use strict";var n=i(1),s=i(74)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),n(n.P+n.F*o,"Array",{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),i(163)("find")},255:function(t,e,i){"use strict";var n=i(1),s=i(105)(!0);n(n.P,"Array",{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),i(163)("includes")},256:function(t,e,i){"use strict";var n=i(1),s=i(103);n(n.P+n.F*i(104)("includes"),"String",{includes:function(t){return!!~s(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},257:function(t,e){t.exports=[{title:"Getting Started",items:[{title:"Introduction",link:"/docs/"},{title:"R&D Based on Robonomics Network",link:"/docs/r-and-d-based-on-robonomics-network/"}]},{title:"Try it out",items:[{title:'DEMO "Get Weather on Fuji Mountain"',link:"/docs/get-weather-on-fuji-mountain/"},{title:"Robonomics DApp Overview",link:"/docs/robonomics-dapp-overview/"},{title:"AIRA installation on VirtualBox",link:"/docs/aira-installation-on-vb/"},{title:"Interact with AIRA",link:"/docs/interact-with-aira/"},{title:"Robonomics IO",items:[{title:"Overview",link:"/docs/rio-overview/"},{title:"IPFS",link:"/docs/rio-ipfs/"},{title:"Launch",link:"/docs/rio-launch/"},{title:"Datalog",link:"/docs/rio-datalog/"}]},{title:"Connect Mars Curiosity rover under Robonomics parachain control",link:"/docs/connect-mars-curiosity-rover-under-robonomics-parachain-control/"},{title:"Connect Baxter robot under Robonomics parachain control",link:"/docs/baxter/"}]},{title:"Cases",items:[{title:"Open Sensors Network",items:[{title:"IoT Sensors Connectivity",link:"/docs/iot-sensors-connectivity/"},{title:"Firmware Upload",link:"/docs/iot-firmware-upload/"},{title:"Install Connectivity on Aira",link:"/docs/sensors-connectivity-on-aira/"},{title:"Configuration Options Description",link:"/docs/configuration-options-description/"}]},{title:"Create digital identity run by Ethereum",link:"/docs/create-digital-identity-run-by-ethereum/"}]},{title:"Learn",items:[{title:"Robonomics-js",link:"/docs/robonomics-js/"},{title:"Glossary",link:"/docs/glossary/"},{title:"Sensors Connectivity",link:"/docs/sensors-connectivity/"},{title:"AIRA",items:[{title:"Overview",link:"/docs/aira-overview/"},{title:"Installation",link:"/docs/aira-installation/"},{title:"Basic usage",link:"/docs/aira-basic-usage/"},{title:"Connecting via SSH",link:"/docs/aira-connecting-via-ssh/"},{title:"F.A.Q.",link:"/docs/aira-faq/"}]},{title:"Agent Development",items:[{title:"Market messages",link:"/docs/market-messages/"},{title:"Examples",link:"/docs/agent-development-examples/"},{title:"Robonomics Network",items:[{title:"How it works",link:"/docs/robonomics-how-it-works/"},{title:"Contracts deployment",link:"/docs/robonomics-contracts-deployment/"},{title:"Become a Provider",link:"/docs/robonomics-become-a-provider/"}]},{title:"ROS API Reference",items:[{title:"Robonomics Liability",link:"/docs/robonomics-liability/"},{title:"Robonomics Liability Messages",link:"/docs/robonomics-liability-messages/"},{title:"Ethereum Common",link:"/docs/ethereum-common/"},{title:"Ethereum Common Messages",link:"/docs/ethereum-common-messages/"},{title:"IPFS Common",link:"/docs/ipfs-common/"},{title:"IPFS Common Messages",link:"/docs/ipfs-common-messages/"}]},{title:"Hardware Examples",items:[{title:"Connect the simplest CPS",link:"/docs/connect-simple-cps/"},{title:"Passing dynamic parameters",link:"/docs/hardware-passing-dynamic-parameters/"},{title:"Connect an air pollution sensor",link:"/docs/hardware-connect-sensor/"}]}]}]},{title:"Contribute",items:[{title:"Community",link:"/docs/community/"},{title:"How to contribute",link:"/docs/contributing/"}]}]},258:function(t,e,i){"use strict";var n=i(250);i.n(n).a},259:function(t,e,i){"use strict";var n=i(251),s=i.n(n);e.default=s.a},321:function(t,e,i){"use strict";i.r(e);var n=i(0),s={props:{items:{default:[]}},components:{List:function(){return Promise.resolve().then(i.bind(null,321))}},data:function(){return{list:this.items}},methods:{toggle:function(t){n.a.set(this.list[t],"isOpen",!this.list[t].isOpen)}}},o=i(35),l=Object(o.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"menu menu-tree"},t._l(t.list,(function(e,n){return i("li",{key:n},[e.link?i("g-link",{staticClass:"menu__item menu__link",attrs:{to:e.link,exact:"/docs/"==e.link}},[t._v(t._s(e.title))]):[i("h4",{staticClass:"menu__item menu__title",on:{click:function(e){return t.toggle(n)}}},[t._v("\n        "+t._s(e.title)+"\n        "),i("span",[t._v("["+t._s(!0===e.isOpen?"-":"+")+"]")])]),i("List",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"item.isOpen"}],attrs:{items:e.items}})]],2)})),0)}),[],!1,null,null,null);e.default=l.exports},322:function(t,e,i){"use strict";i.r(e);i(41),i(42),i(43),i(18),i(40),i(15),i(44),i(254),i(164);var n=i(16),s=(i(106),i(321)),o=(i(255),i(256),{computed:{subtitles:function(){var t=this.$page.doc.subtitles.filter((function(t,e,i){return[2,3,4].includes(t.depth)}));return t}}}),l=i(35),a=Object(l.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.subtitles.length>0&&4!==t.subtitles[0].depth?i("div",[t.subtitles.length?i("ul",{staticClass:"menu"},t._l(t.subtitles,(function(e){return i("li",{key:e.value,class:"menu__item-depth-"+e.depth},[i("a",{staticClass:"menu__item menu__link",attrs:{href:e.anchor}},[t._v("\n          "+t._s(e.value)+"\n        ")])])})),0):t._e()]):t._e()}),[],!1,null,null,null).exports,r={functional:!0,render(t,e){const{_c:i,_v:n,data:s,children:o=[]}=e,{class:l,staticClass:a,style:r,staticStyle:c,attrs:u={},...d}=s;return i("svg",{class:[l,a],style:[r,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 383 296"},u),...d},o.concat([i("path",{attrs:{d:"M364.4 124H18.6C8.4 124 0 134.8 0 148s8.4 24 18.6 24h345.7c10.3 0 18.6-10.8 18.6-24s-8.3-24-18.5-24zM364.4 0H18.6C8.4 0 0 10.8 0 24s8.4 24 18.6 24h345.7c10.3 0 18.6-10.8 18.6-24s-8.3-24-18.5-24zM364.4 248H18.6C8.4 248 0 258.8 0 272s8.4 24 18.6 24h345.7c10.3 0 18.6-10.8 18.6-24s-8.3-24-18.5-24z"}})]))}},c={functional:!0,render(t,e){const{_c:i,_v:n,data:s,children:o=[]}=e,{class:l,staticClass:a,style:r,staticStyle:c,attrs:u={},...d}=s;return i("svg",{class:[l,a],style:[r,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 90 390"},u),...d},o.concat([i("path",{attrs:{d:"M45 0C20.2 0 0 20.2 0 45s20.2 45 45 45 45-20.2 45-45S69.8 0 45 0zM45 150c-24.8 0-45 20.2-45 45s20.2 45 45 45 45-20.2 45-45-20.2-45-45-45zM45 300c-24.8 0-45 20.2-45 45s20.2 45 45 45 45-20.2 45-45-20.2-45-45-45z"}})]))}},u={functional:!0,render(t,e){const{_c:i,_v:n,data:s,children:o=[]}=e,{class:l,staticClass:a,style:r,staticStyle:c,attrs:u={},...d}=s;return i("svg",{class:[l,a],style:[r,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 348.3 348.3"},u),...d},o.concat([i("path",{attrs:{d:"M336.6 68.6L231 174.2l105.5 105.5c15.7 15.7 15.7 41.1 0 56.9-7.8 7.8-18.1 11.8-28.4 11.8-10.3 0-20.6-3.9-28.4-11.8L174.2 231 68.6 336.6c-7.8 7.8-18.1 11.8-28.4 11.8-10.3 0-20.6-3.9-28.4-11.8-15.7-15.7-15.7-41.1 0-56.9l105.5-105.5L11.8 68.6c-15.7-15.7-15.7-41.1 0-56.8 15.7-15.7 41.1-15.7 56.8 0l105.6 105.6L279.7 11.8c15.7-15.7 41.1-15.7 56.8 0 15.8 15.7 15.8 41.1.1 56.8z"}})]))}},d=i(257),m=i.n(d);function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function b(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){Object(n.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var h={components:{SidebarDocs:s.default,SidebarContent:a,IconMenu:r,IconDots:c,IconClose:u},data:function(){return{items:this.setBranchOpenLabel(this.initOpenLabel(m.a))}},methods:{initOpenLabel:function(t){var e=this;return t.map((function(t){return t.items&&(t.items=e.initOpenLabel(t.items)),b({},t,{isOpen:Object.prototype.hasOwnProperty.call(t,"link")&&e.$route.path===t.link})}))},hasOpenChildren:function(t){return!!t.find((function(t){return t.isOpen}))},setBranchOpenLabel:function(t){var e=this;return t.map((function(t){return t.items&&!t.isOpen&&(t.items=e.setBranchOpenLabel(t.items),t.isOpen=e.hasOpenChildren(t.items)),b({},t)}))},showBlock:function(t,e){var i=document.getElementById(t),n=e.currentTarget.querySelector(".mobileMenu"),s=e.currentTarget.querySelector(".mobileMenuClose");i.classList.contains("mobileClosed")?(i.classList.remove("mobileClosed"),s.style.display="block",n.style.display="none"):(i.classList.add("mobileClosed"),s.style.display="none",n.style.display="block")}},metaInfo:function(){var t=this.$page.doc,e=t.title,i=t.headings;return{title:e||(i.length?i[0].value:void 0)}}},v=(i(258),i(259)),f=Object(l.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("div",{staticClass:"sidebarMobileToggle"},[i("div",{staticClass:"layout__page flex-line"},[i("div",{staticClass:"sidebarMobileToggle__tog",on:{click:function(e){return t.showBlock("sidebarDocs",e)}}},[i("IconMenu",{staticClass:"mobileMenu",attrs:{height:"20px"}}),i("IconClose",{staticClass:"mobileMenuClose",staticStyle:{display:"none"},attrs:{height:"20px"}})],1),i("div",{staticClass:"sidebarMobileToggle__tog",on:{click:function(e){return t.showBlock("sidebarContent",e)}}},[i("IconDots",{staticClass:"mobileMenu",attrs:{height:"20px"}}),i("IconClose",{staticClass:"mobileMenuClose",staticStyle:{display:"none"},attrs:{height:"20px"}})],1)])]),i("div",{staticClass:"page"},[i("div",{staticClass:"page__sidebar mobileClosed",attrs:{id:"sidebarDocs"}},[i("SidebarDocs",{attrs:{items:t.items}})],1),i("div",{staticClass:"page__content"},[i("VueRemarkContent")],1),i("div",{staticClass:"page__sidebar mobileClosed",attrs:{id:"sidebarContent"}},[i("SidebarContent")],1)])])}),[],!1,null,null,null);"function"==typeof v.default&&Object(v.default)(f);e.default=f.exports}}]);