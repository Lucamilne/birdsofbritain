(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5180713e"],{"17b3":function(t,e,a){},"18db":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{tile:"",to:"/browse/species/"+t.toKebabCase(t.bird)}},[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-content",[i("div",{staticClass:"overline mb-4"},[t._v(" "+t._s(t.birds[t.bird].population.type)+" ")]),i("v-list-item-title",{staticClass:"headline"},[t._v(" "+t._s(t.birds[t.bird].name)+" ")]),i("v-list-item-subtitle",[t._v(t._s(t.birds[t.bird].scientificName))])],1),i("v-list-item-avatar",{attrs:{tile:"",size:"120",color:"grey lighten-4"}},[i("img",{attrs:{src:a("0ed6")("./"+t.birds[t.bird].images[0]),alt:t.birds[t.bird].name}})])],1),i("v-card-text",[i("span",{staticClass:"text-button secondary--text"},[t._v("Learn More")])])],1)},r=[],n=a("7b82"),s=a.n(n),u=a("90b9"),l=a.n(u),c={name:"BirdTile",props:["bird"],data:function(){return{birds:s.a.data}},methods:{toKebabCase:function(t){return l.a.toKebabCase(t)}}},o=c,d=(a("68fc"),a("2877")),h=a("6544"),b=a.n(h),v=a("b0af"),f=a("99d9"),p=a("da13"),g=a("8270"),m=a("5d23"),y=Object(d["a"])(o,i,r,!1,null,"7905b68e",null);e["a"]=y.exports;b()(y,{VCard:v["a"],VCardText:f["c"],VListItem:p["a"],VListItemAvatar:g["a"],VListItemContent:m["a"],VListItemSubtitle:m["b"],VListItemTitle:m["c"]})},"68fc":function(t,e,a){"use strict";a("de64")},"841c":function(t,e,a){"use strict";var i=a("d784"),r=a("825a"),n=a("1d80"),s=a("129f"),u=a("577e"),l=a("dc4a"),c=a("14c3");i("search",(function(t,e,a){return[function(e){var a=n(this),i=void 0==e?void 0:l(e,t);return i?i.call(e,a):new RegExp(e)[t](u(a))},function(t){var i=r(this),n=u(t),l=a(e,i,n);if(l.done)return l.value;var o=i.lastIndex;s(o,0)||(i.lastIndex=0);var d=c(i,n);return s(i.lastIndex,o)||(i.lastIndex=o),null===d?-1:d.index}]}))},"891e":function(t,e,a){"use strict";var i=a("2909"),r=a("5530"),n=(a("a9e3"),a("99af"),a("d3b7"),a("25f0"),a("d81d"),a("17b3"),a("9d26")),s=a("dc22"),u=a("a9ad"),l=a("de2c"),c=a("7560"),o=a("58df");e["a"]=Object(o["a"])(u["a"],Object(l["a"])({onVisible:["init"]}),c["a"]).extend({name:"v-pagination",directives:{Resize:s["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(r["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var a=e%2===0?1:0,r=Math.floor(e/2),n=this.length-r+1+a;if(this.value>r&&this.value<n){var s=1,u=this.length,l=this.value-r+2,c=this.value+r-2-a,o=l-1===s+1?2:"...",d=c+1===u-1?c+1:"...";return[1,o].concat(Object(i["a"])(this.range(l,c)),[d,this.length])}if(this.value===r){var h=this.value+r-1-a;return[].concat(Object(i["a"])(this.range(1,h)),["...",this.length])}if(this.value===n){var b=this.value-r+1;return[1,"..."].concat(Object(i["a"])(this.range(b,this.length)))}return[].concat(Object(i["a"])(this.range(1,r)),["..."],Object(i["a"])(this.range(n,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var a=[];t=t>0?t:1;for(var i=t;i<=e;i++)a.push(i);return a},genIcon:function(t,e,a,i,r){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":a},attrs:{disabled:a,type:"button","aria-label":r},on:a?{}:{click:i}},[t(n["a"],[e])])])},genItem:function(t,e){var a=this,i=e===this.value&&(this.color||"primary"),r=e===this.value,n=r?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(n,e)},on:{click:function(){return a.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(a,i){return t("li",{key:i},[isNaN(Number(a))?t("span",{class:"v-pagination__more"},[a.toString()]):e.genItem(t,a)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},9703:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height justify-center",attrs:{fluid:""}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",{staticClass:"justify-center"},[t._v(t._s(t.title||"404: Not Found"))]),a("v-card-subtitle",{staticClass:"text-center text-wrap"},[t._v(t._s(t.subtitle||"The requested page cannot be found."))])],1)],1)},r=[],n={name:"FullscreenMessage",props:["title","subtitle"]},s=n,u=a("2877"),l=a("6544"),c=a.n(l),o=a("b0af"),d=a("99d9"),h=a("a523"),b=Object(u["a"])(s,i,r,!1,null,null,null);e["default"]=b.exports;c()(b,{VCard:o["a"],VCardSubtitle:d["b"],VCardTitle:d["d"],VContainer:h["a"]})},a523:function(t,e,a){"use strict";a("4de4"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85"),a("498a"),a("a15b");var i=a("2b0e");function r(t){return i["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var i=a.props,r=a.data,n=a.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var s=r.attrs;if(s){r.attrs={};var u=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));u.length&&(r.staticClass+=" ".concat(u.join(" ")))}return i.id&&(r.domProps=r.domProps||{},r.domProps.id=i.id),e(i.tag,r,n)}})}var n=a("d9f7");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,i=e.props,r=e.data,s=e.children,u=r.attrs;return u&&(r.attrs={},a=Object.keys(u).filter((function(t){if("slot"===t)return!1;var e=u[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(r.domProps=r.domProps||{},r.domProps.id=i.id),t(i.tag,Object(n["a"])(r,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(a||[])}),s)}})},abd3:function(t,e,a){},b3c3:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.results.length>0?a("div",[a("Breadcrumbs"),a("v-container",[a("v-list",[a("v-row",t._l(t.sliceOfResults,(function(e){return a("v-col",{key:t.birds[e].name,attrs:{cols:"12",md:"6",lg:"4",xl:"3"}},[a("BirdTile",{attrs:{bird:e}})],1)})),1),t.results.length>t.resultsPerPage?a("div",{staticClass:"text-center"},[a("v-pagination",{attrs:{length:t.numberOfPages},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()],1)],1)],1):a("NotFound",{attrs:{title:"No matches found",subtitle:"Please try the identification process again."}})},r=[],n=a("5530"),s=(a("ac1f"),a("5319"),a("841c"),a("1276"),a("fb6a"),a("7b82")),u=a.n(s),l=a("18db"),c=a("b6c6"),o=a("9703"),d={name:"results",components:{BirdTile:l["a"],Breadcrumbs:c["a"],NotFound:o["default"]},data:function(){return{resultsPerPage:24,birds:u.a.data,search:u.a.searchCharacteristics}},computed:{page:{get:function(){return this.$route.query.page&&this.numberOfPages>1?parseInt(this.$route.query.page):(this.$router.replace({name:"results",query:Object(n["a"])(Object(n["a"])({},this.$route.query),{},{page:1})}),1)},set:function(t){this.$router.push({name:"results",query:Object(n["a"])(Object(n["a"])({},this.$route.query),{},{page:t})})}},results:function(){var t=this.$route.query;return t.habitat&&t.featherColor&&t.beak?this.search(t.habitat,t.featherColor.split(","),t.beak):[]},sliceOfResults:function(){var t=(this.page-1)*this.resultsPerPage,e=this.page*this.resultsPerPage;return this.results.slice(t,e)},numberOfPages:function(){return Math.ceil(this.results.length/this.resultsPerPage)}}},h=d,b=a("2877"),v=a("6544"),f=a.n(v),p=a("62ad"),g=a("a523"),m=a("8860"),y=a("891e"),x=a("0fd9"),$=Object(b["a"])(h,i,r,!1,null,null,null);e["default"]=$.exports;f()($,{VCol:p["a"],VContainer:g["a"],VList:m["a"],VPagination:y["a"],VRow:x["a"]})},b6c6:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"py-0"},[a("v-breadcrumbs",{attrs:{large:"",items:t.breadcrumbs},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item;return[a("v-breadcrumbs-item",{attrs:{disabled:i.disabled}},[a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:i.path}},[t._v(" "+t._s(i.text)+" ")])],1)]}},{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)},r=[],n=(a("ac1f"),a("1276"),a("159b"),a("a15b"),a("a630"),a("3ca3"),a("90b9")),s=a.n(n),u={name:"Breadcrumbs",computed:{breadcrumbs:function(){var t=this,e=new Array,a=new Array,i=this.$route.path.split("/");return i.forEach((function(r,n){r?(a.push("/"+r),e.push({text:t.getCapatalisedCrumbFromPath(r),disabled:n===i.length-1,path:a.join("")})):e.push({text:"Home",disabled:!1,path:"/"})})),e}},methods:{getCapatalisedCrumbFromPath:function(t){return Array.from(t.split("-"),(function(t){return s.a.capitalise(t)})).join(" ")}}},l=u,c=a("2877"),o=a("6544"),d=a.n(o),h=a("5530"),b=(a("abd3"),a("ade3")),v=a("1c87"),f=a("58df"),p=Object(f["a"])(v["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(b["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),a=e.tag,i=e.data;return t("li",[t(a,Object(h["a"])(Object(h["a"])({},i),{},{attrs:Object(h["a"])(Object(h["a"])({},i.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),g=a("80d2"),m=Object(g["h"])("v-breadcrumbs__divider","li"),y=a("7560"),x=Object(f["a"])(y["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(h["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(m,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,a=[],i=0;i<this.items.length;i++){var r=this.items[i];a.push(r.text),e?t.push(this.$scopedSlots.item({item:r})):t.push(this.$createElement(p,{key:a.join("."),props:r},[r.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}}),$=a("a523"),_=a("132d"),C=Object(c["a"])(l,i,r,!1,null,null,null);e["a"]=C.exports;d()(C,{VBreadcrumbs:x,VBreadcrumbsItem:p,VContainer:$["a"],VIcon:_["a"]})},de64:function(t,e,a){}}]);
//# sourceMappingURL=chunk-5180713e.ddc2815b.js.map