(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-036423da"],{"169a":function(t,e,a){"use strict";var i=a("5530"),n=a("2909"),s=a("ade3"),o=(a("a9e3"),a("498a"),a("caad"),a("2532"),a("7db0"),a("368e"),a("480e")),r=a("4ad4"),c=a("b848"),l=a("75eb"),d=a("e707"),u=a("e4d3"),h=a("21be"),v=a("f2e7"),f=a("a293"),m=a("58df"),p=a("d9bd"),b=a("80d2"),g=Object(m["a"])(r["a"],c["a"],l["a"],d["a"],u["a"],h["a"],v["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===b["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var a=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(n["a"])(a).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(i["a"])(Object(i["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(b["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(b["f"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"16b7":function(t,e,a){"use strict";a("a9e3");var i=a("a026");e["a"]=i["default"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var a=this;this.clearDelay();var i=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){a.isActive={open:!0,close:!1}[t]},i)}}})},"21be":function(t,e,a){"use strict";var i=a("2909"),n=(a("99af"),a("caad"),a("2532"),a("a026")),s=a("80d2");e["a"]=n["default"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(s["p"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,a=[this.stackMinZIndex,Object(s["p"])(e)],n=[].concat(Object(i["a"])(document.getElementsByClassName("v-menu__content--active")),Object(i["a"])(document.getElementsByClassName("v-dialog__content--active"))),o=0;o<n.length;o++)t.includes(n[o])||a.push(Object(s["p"])(n[o]));return Math.max.apply(Math,a)}}})},"368e":function(t,e,a){},"480e":function(t,e,a){"use strict";a("7db0");var i=a("7560");e["a"]=i["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:i["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},"4ad4":function(t,e,a){"use strict";var i=a("53ca"),n=(a("caad"),a("b64b"),a("b0c0"),a("16b7")),s=a("f2e7"),o=a("58df"),r=a("80d2"),c=a("d9bd"),l=Object(o["a"])(n["a"],s["a"]);e["a"]=l.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(i["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(r["o"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(c["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,a=t;e<a.length;e++){var i=a[e];this.getActivator().addEventListener(i,this.listeners[i])}}},genActivator:function(){var t=Object(r["n"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var a=t.getActivator(e);a&&a.focus(),e.stopPropagation(),t.isActive=!t.isActive},this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var a=this.internalActivator?this.$el:document;e="string"===typeof this.activator?a.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var i=this.activatorNode[0].componentInstance;e=i&&i.$options.mixins&&i.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?i.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot:function(){return Object(r["n"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,a=t;e<a.length;e++){var i=a[e];this.activatorElement.removeEventListener(i,this.listeners[i])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},"64c4":function(t,e,a){"use strict";a("81c8")},"75eb":function(t,e,a){"use strict";var i=a("ade3"),n=a("53ca"),s=(a("159b"),a("9d65")),o=a("80d2"),r=a("58df"),c=a("d9bd");function l(t){var e=Object(n["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}e["a"]=Object(r["a"])(s["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:l},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var a=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,a)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=Object(o["l"])(this.$vnode,"context.$options._scopeId");return t&&Object(i["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(c["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},"81c8":function(t,e,a){},bd0c:function(t,e,a){},d3ee:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",{staticStyle:{"background-color":"#00141d"}},[a("div",{staticClass:"d-md-flex d-none pa-8"}),a("div",{staticClass:"d-flex d-md-none pa-1"}),a("div",{staticClass:"d-flex d-md-none"},[a("v-tabs",{attrs:{"show-arrows":"",centered:"","background-color":"rgb(0, 40, 50)",dark:""}},[a("v-tab",{attrs:{to:{name:"AccountVerify"}}},[a("span",{staticClass:"tab-text"},[t._v("Account Verification")])]),a("v-divider",{staticClass:"mx-4",attrs:{vertical:"",inset:""}}),a("v-tab",{attrs:{to:{name:"Wallet"},inset:""}},[a("span",{staticClass:"tab-text"},[t._v("Wallet Setting")])]),a("v-divider",{staticClass:"mx-4",attrs:{vertical:"",inset:""}}),a("v-tab",{attrs:{to:{name:"PwdChange"}}},[a("span",{staticClass:"tab-text"},[t._v("Password Change")])]),a("v-divider",{staticClass:"mx-4",attrs:{vertical:"",inset:""}}),a("v-tab",{attrs:{to:{name:"Record"}}},[a("span",{staticClass:"tab-text"},[t._v("Transaction Record")])])],1)],1),a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"rounded-xl",staticStyle:{"background-color":"#002832"},attrs:{height:"auto"}},[a("v-card-text",[a("p",{staticClass:"white--text",class:[(t.$vuetify.breakpoint.smAndDown,"title")]},[t._v(" Personal Information ")]),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("span",{staticClass:"subtitle-1 white--text"},[t._v("name")]),a("br"),a("v-row",[a("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"8"}},[a("v-text-field",{ref:"Name",staticClass:"ml-auto mt-1",attrs:{dark:"","single-line":"",outlined:"",dense:"",value:t.userName,label:"Please enter the name"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-btn",{staticClass:"mt-1",attrs:{color:"primary"},on:{click:function(e){return t.changeName()}}},[t._v(" modify ")])],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("span",{staticClass:"subtitle-1 white--text"},[t._v("Wallet Balance")]),a("br"),a("span",{staticClass:"mt-2 white--text",class:[t.$vuetify.breakpoint.smAndDown?"subtitle-1 font-weight-bold":"title"]},[t._v("$ "+t._s(t.WalletBalance)+" USDT")]),1==t.pause?a("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){return t.rework()}}},[t._v("Insufficient balance")]):t._e()],1),a("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"6"}},[a("span",{staticClass:"subtitle-1 white--text"},[t._v("E-mail")]),a("br"),a("span",{staticClass:"mt-2 white--text",class:[t.$vuetify.breakpoint.smAndDown?"subtitle-1 font-weight-bold":"title"]},[t._v(t._s(t.Email))])]),a("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"6"}},[a("span",{staticClass:"subtitle-1 white--text"},[t._v("wallet Address")]),a("br"),a("span",{staticClass:"mt-2 white--text",class:[t.$vuetify.breakpoint.smAndDown?"subtitle-1 font-weight-bold":"title"]},[t._v(t._s(t.Wallet))])]),a("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"6"}},[a("span",{staticClass:"subtitle-1 white--text"},[t._v("Phone Number")]),a("br"),a("span",{staticClass:"mt-2 white--text",class:[t.$vuetify.breakpoint.smAndDown?"subtitle-1 font-weight-bold":"title"]},[t._v(t._s(t.Phone))])]),a("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"6"}},[a("span",{staticClass:"subtitle-1 white--text"},[t._v("Output Value")]),a("br"),a("span",{staticClass:"mt-2 white--text",class:[t.$vuetify.breakpoint.smAndDown?"subtitle-1 font-weight-bold":"title"]},[t._v(t._s(t.ETH)+" ETH")])])],1)],1)],1)],1),a("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"2"}},[a("v-card",{staticClass:"d-md-flex d-none mx-auto rounded-xl text-center",staticStyle:{"background-color":"#002832"},attrs:{"max-width":t.$vuetify.application.top+150+"px","miin-width":t.$vuetify.application.top+50+"px"}},[a("v-list",{staticClass:"mx-auto",attrs:{color:"transparent","max-width":t.$vuetify.application.top+100+"px",nav:""}},t._l(t.links,(function(e,i){var n=e.name,s=e.routerName;return a("v-list-item",{key:i},[a("v-list-item-content",[a("v-btn",{attrs:{block:"",text:"",large:"",depressed:"",plain:"",to:{name:s}}},[a("v-list-item-title",{staticClass:"login-btn white--text"},[t._v(" "+t._s(n)+" "),a("v-divider",{staticClass:"mt-4 white"})],1)],1)],1)],1)})),1)],1)],1),a("v-col",{staticClass:"mb-4",attrs:{cols:"12",md:"10"}},[a("router-view",{staticClass:"rounded-xl",staticStyle:{"background-color":"rgb(0, 40, 50)"}})],1)],1)],1)],1)],1),a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"30%"},model:{value:t.nameChangeModal,callback:function(e){t.nameChangeModal=e},expression:"nameChangeModal"}},[a("v-card",{staticClass:"error-card text-center",staticStyle:{"background-color":"#000000"},attrs:{width:"auto",height:"100"}},[a("div",{staticClass:"pt-9"}),a("v-card-text",{staticClass:"text-h6 white--text"},[t._v(" Name has been changed ")])],1)],1)],1),a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"30%"},model:{value:t.reworkModal,callback:function(e){t.reworkModal=e},expression:"reworkModal"}},[a("v-card",{staticClass:"error-card text-center",staticStyle:{"background-color":"#000000"},attrs:{width:"auto",height:"100"}},[a("div",{staticClass:"pt-9"}),a("v-card-text",{staticClass:"text-h6 white--text"},[t._v(" The device has restarted ")])],1)],1)],1),a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"30%"},model:{value:t.cantworkModal,callback:function(e){t.cantworkModal=e},expression:"cantworkModal"}},[a("v-card",{staticClass:"error-card text-center",staticStyle:{"background-color":"#000000"},attrs:{width:"auto",height:"100"}},[a("div",{staticClass:"pt-9"}),a("v-card-text",{staticClass:"text-h6 white--text"},[t._v(" Insufficient balance, please recharge first ")])],1)],1)],1),a("div",{staticClass:"pa-16"}),a("div",{staticClass:"pa-16"})],1)},n=[],s=(a("b680"),a("a9e3"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("365c")),o={names:"Member",data:function(){return{links:[{name:"Account Verification",routerName:"AccountVerify"},{name:"Wallet Setting",routerName:"Wallet"},{name:"Password Change",routerName:"PwdChange"},{name:"Transaction Record",routerName:"Record"},{name:"My Miner",routerName:"Myminer"}],Name:"",nameChangeModal:!1,pause:null,reworkModal:!1,cantworkModal:!1}},created:function(){this.$store.dispatch("getUserData")},mounted:function(){this.pause=this.Pause},computed:{userName:function(){return this.$store.state.userName},Email:function(){return this.$store.state.email},Phone:function(){return this.$store.state.phone},Wallet:function(){return this.$store.state.wallet},Pause:function(){return this.$store.state.pause},ETH:function(){return Number(this.$store.state.ETH_Amt).toFixed(2)},WalletBalance:function(){return Number(this.$store.state.walletBalance).toFixed(2)}},methods:{changeName:function(){var t=this,e=new URLSearchParams;e.append("Nickname",this.$refs.Name.lazyValue),Object(s["c"])(e).then((function(e){1==e.data.success?(t.nameChangeModal=!0,setTimeout((function(){t.nameChangeModal=!1,location.reload()}),2e3)):console.log(e.data.errorMsg)})).catch((function(t){console.error(t)}))},rework:function(){var t=this;Object(s["q"])().then((function(e){1==e.data.success?(t.reworkModal=!0,setTimeout((function(){return t.reworkModal=!1}),2e3)):(t.cantworkModal=!0,setTimeout((function(){t.cantworkModal=!1,t.$router.push({name:"Deposit"})}),2e3))})).catch((function(t){console.log(t)}))}}},r=o,c=(a("64c4"),a("2877")),l=a("6544"),d=a.n(l),u=a("8336"),h=a("b0af"),v=a("99d9"),f=a("62ad"),m=a("a523"),p=a("169a"),b=a("ce7e"),g=a("8860"),x=a("da13"),w=a("5d23"),C=a("f6c4"),y=a("0fd9"),A=a("71a3"),k=a("fe57"),$=a("8654"),O=Object(c["a"])(r,i,n,!1,null,null,null);e["default"]=O.exports;d()(O,{VBtn:u["a"],VCard:h["a"],VCardText:v["b"],VCol:f["a"],VContainer:m["a"],VDialog:p["a"],VDivider:b["a"],VList:g["a"],VListItem:x["a"],VListItemContent:w["a"],VListItemTitle:w["b"],VMain:C["a"],VRow:y["a"],VTab:A["a"],VTabs:k["a"],VTextField:$["a"]})},e4d3:function(t,e,a){"use strict";var i=a("a026");e["a"]=i["default"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},f6c4:function(t,e,a){"use strict";a("bd0c");var i=a("d10f");e["a"]=i["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,a=t.top,i=t.right,n=t.footer,s=t.insetFooter,o=t.bottom,r=t.left;return{paddingTop:"".concat(a+e,"px"),paddingRight:"".concat(i,"px"),paddingBottom:"".concat(n+s+o,"px"),paddingLeft:"".concat(r,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})}}]);
//# sourceMappingURL=chunk-036423da.b6ca9698.js.map