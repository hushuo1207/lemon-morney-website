(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-348f5015"],{"3ab4":function(t,e,a){"use strict";a("5f15")},"5f15":function(t,e,a){},"8f45":function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var i=a("d4ec"),s=a("bee2"),n=a("262e"),c=a("2caf"),r=(a("ac1f"),a("466d"),a("9ab4")),o=a("4b88"),u=a("2b0e"),l=a("2fe1"),b={"tag name duplicated.":"标签名重复了"},f=Object(o["a"])(navigator.userAgent),d=(f.match(/WeChat/),function(t){Object(n["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(s["a"])(a,[{key:"createTag",value:function(t){this.$store.commit("createTag",t),this.$store.state.createTagError&&window.alert(b[this.$store.state.createTagError.message]||"未知错误")}}]),a}(u["a"]));d=Object(r["a"])([l["b"]],d)},e718:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tags"},[a("ul",{staticClass:"current"},[t._l(t.taglist,(function(e){return a("li",{key:e.id,staticClass:"labels",class:{selected:t.previousTag===e},on:{click:function(a){return t.toggleTag(e)}}},[a("div",{staticClass:"icon-radius"},[a("Icon",{attrs:{name:e.iconName}})],1),t._v(" "+t._s(e.name)+" ")])})),a("router-link",{staticClass:"labels link",attrs:{to:"/labels"}},[a("div",{staticClass:"icon-radius link-radius"},[a("Icon",{attrs:{name:"settings"}})],1),t._v(" 设置 ")])],2)])},s=[],n=a("d4ec"),c=a("bee2"),r=a("262e"),o=a("2caf"),u=a("9ab4"),l=a("8f45"),b=a("2fe1"),f=a("1b40"),d=a("cdae"),g=function(t){Object(r["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(n["a"])(this,a),t=e.apply(this,arguments),t.previousTag={id:"",name:"",iconName:""},t}return Object(c["a"])(a,[{key:"taglist",get:function(){return"-"===this.type?this.$store.state.paymentList:this.$store.state.incomeList}},{key:"tagType",get:function(){return this.type}},{key:"created",value:function(){this.$store.commit("fetchTags")}},{key:"toggleTag",value:function(t){return""===this.previousTag.id||this.previousTag!==t?(this.previousTag=t,void this.$emit("update:value",this.previousTag)):void 0}},{key:"createTag",value:function(){var t=window.prompt("请输入标签名");if(!t)return window.alert("标签不能为空");this.$store.commit("createTag",{name:t,iconName:"add"})}}]),a}(Object(b["c"])(l["a"]));Object(u["a"])([Object(f["b"])({required:!0})],g.prototype,"type",void 0),g=Object(u["a"])([Object(f["a"])({components:{Icon:d["a"]}})],g);var p=g,v=p,h=(a("3ab4"),a("2877")),m=Object(h["a"])(v,i,s,!1,null,"1767ca6e",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-348f5015.b710e3e0.js.map