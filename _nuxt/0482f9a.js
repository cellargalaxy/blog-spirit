(window.webpackJsonp=window.webpackJsonp||[]).push([[13,6,7,8,14],{496:function(t,e){},497:function(t,e){},499:function(t,e,n){"use strict";n.r(e);n(22);var r=n(34),l={name:"autoColorBadge",props:{name:{default:function(){return r.default.randomString(4)}},value:{default:function(){return r.default.randomString(4)}},url:{default:function(){}}},data:function(){return{variants:["secondary","primary","info","dark"]}},computed:{variant:function(){var t=r.default.hashString(this.name)+r.default.hashString(this.value);return this.variants[t%this.variants.length]}}},o=n(84),c=n(504),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-badge",{attrs:{variant:t.variant}},[t._v(t._s(t.name+": ")),n("a",{staticClass:"white",attrs:{href:t.url},domProps:{textContent:t._s(t.value)}})])}),[],!1,null,"3845f08c",null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports},500:function(t,e,n){"use strict";n.r(e);var r={name:"autoColorBadges",props:{attributes:{default:function(){return[void 0,void 0,void 0]}}},components:{autoColorBadge:n(499).default}},l=n(84),o=n(507),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.attributes,(function(t,i){return n("auto-color-badge",{key:i,staticStyle:{"margin-left":"0.1em","margin-right":"0.1em"},attrs:{name:t.name,value:t.value,url:t.url}})})),1)}),[],!1,null,"5388da3e",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{AutoColorBadge:n(499).default})},504:function(t,e,n){"use strict";var r=n(496),l=n.n(r);e.default=l.a},505:function(t,e){},507:function(t,e,n){"use strict";var r=n(497),l=n.n(r);e.default=l.a},510:function(t,e){},518:function(t,e,n){"use strict";n.r(e);var r=n(500),l=n(85),o={name:"articleView",props:{file:{default:function(){return{title:"title_t",url:"#",toc:[{id:"h2_t",depth:2,text:"h2_t"},{id:"h3_t",depth:3,text:"h3_t"}],body:{type:"root",children:[{type:"element",tag:"p",props:{},children:[{type:"text",value:"description_t"}]},{type:"element",tag:"h2",props:{id:"h2_t"},children:[{type:"element",tag:"a",props:{ariaHidden:"true",href:"#h2_t",tabIndex:-1},children:[{type:"element",tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:"text",value:"h2_t"}]},{type:"element",tag:"h3",props:{id:"h3_t"},children:[{type:"element",tag:"a",props:{ariaHidden:"true",href:"#h3_t",tabIndex:-1},children:[{type:"element",tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:"text",value:"h3_t"}]}]},excerpt:{type:"root",children:[{type:"element",tag:"p",props:{},children:[{type:"text",value:"description_t"}]}]},attributes:[{name:"createAt",value:"YYYY-MM-DD"},{name:"updateAt",value:"YYYY-MM-DD"},{name:"sort",value:"sort",url:"#"}]}}},isSummary:{default:function(){return!1}}},computed:{article:function(){return l.default.file2Article(this.file,this.isSummary)}},components:{autoColorBadges:r.default}},c=n(84),f=n(529),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-list-group",{staticClass:"nuxt-content",staticStyle:{"margin-bottom":"1em"}},[n("b-list-group-item",{staticClass:"white-background-8"},[n("h1",[n("b-link",{attrs:{href:t.article.url,target:t.isSummary?"_blank":""},domProps:{textContent:t._s(t.article.title)}})],1),t._v(" "),n("auto-color-badges",{attrs:{attributes:t.article.attributes}})],1),t._v(" "),t.isSummary?t._e():n("b-list-group-item",{staticClass:"white-background-8"},t._l(t.article.toc,(function(e,i){return n("li",{key:i},[n("b-link",{attrs:{href:t.article.url+"#"+e.id},domProps:{textContent:t._s("["+e.depth+"] "+e.text)}})],1)})),0),t._v(" "),n("b-list-group-item",{staticClass:"white-background-8"},[n("nuxt-content",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{selector:'img'}"}],attrs:{document:t.article}})],1)],1)}),[],!1,null,"c4f30d52",null);"function"==typeof f.default&&Object(f.default)(component);e.default=component.exports;installComponents(component,{AutoColorBadges:n(500).default})},522:function(t,e,n){"use strict";n.r(e);var r={name:"fileView",props:{file:{default:function(){}},isSummary:{default:function(){}}},components:{articleView:n(518).default}},l=n(84),o=n(535),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("article-view",{attrs:{file:t.file,isSummary:t.isSummary}})}),[],!1,null,"22ac7f6b",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{ArticleView:n(518).default})},529:function(t,e,n){"use strict";var r=n(505),l=n.n(r);e.default=l.a},535:function(t,e,n){"use strict";var r=n(510),l=n.n(r);e.default=l.a},539:function(t,e){},554:function(t,e,n){"use strict";n.r(e);var r={name:"fileList",props:{files:{default:function(){return[void 0,void 0,void 0,void 0,void 0,void 0]}}},components:{fileView:n(522).default}},l=n(84),o=n(556),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.files,(function(t,i){return n("file-view",{key:i,attrs:{file:t,isSummary:!0}})})),1)}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{FileView:n(522).default})},556:function(t,e,n){"use strict";var r=n(539),l=n.n(r);e.default=l.a}}]);