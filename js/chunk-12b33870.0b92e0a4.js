(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12b33870"],{"0d07":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"title-wrapper"},[a("div",{staticClass:"title"},[a("div",{staticClass:"go-back",on:{click:t.goBack}},[a("Icon",{attrs:{name:"back"}})],1),a("div",{staticClass:"title-name"},[t._v("类别设置")])]),a("div",{staticClass:"title-content"},[a("Tabs",{attrs:{"class-prefix":"type","data-source":t.recordTypeList,value:t.type},on:{"update:value":function(e){t.type=e}}})],1)]),a("div",{staticClass:"tags"},t._l(t.tags,(function(e){return a("div",{key:e.id,staticClass:"tag"},[a("div",{staticClass:"svg"},[a("Icon",{attrs:{name:e.iconName}})],1),a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"delete"},[t._v(t._s(e.name))]),a("div",{staticClass:"delete svg",on:{click:function(a){return t.deleteLabel(e.id)}}},[a("Icon",{attrs:{name:"deletes"}})],1)])])})),0),a("router-link",{staticClass:"createTag-wrapper",attrs:{to:"/xxx?q="+t.type}},[a("Icon",{attrs:{name:"plus"}}),a("button",{staticClass:"createTag"},[t._v("新建标签")])],1)],1)},c=[],i=a("d4ec"),n=a("bee2"),r=a("262e"),o=a("2caf"),u=(a("d3b7"),a("3ca3"),a("ddb0"),a("9ab4")),l=a("1b40"),d=a("2fe1"),b=a("8f45"),f=a("84d9"),p=function(t){Object(r["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.type="-",t.recordTypeList=f["a"],t}return Object(n["a"])(a,[{key:"tags",get:function(){return"-"===this.type?this.$store.state.paymentList:this.$store.state.incomeList}},{key:"beforeCreate",value:function(){this.$store.commit("fetchTags")}},{key:"goBack",value:function(){this.$router.back()}},{key:"deleteLabel",value:function(t){this.$store.commit("removeTag",{id:t,type:this.type})}}]),a}(Object(d["c"])(b["a"]));p=Object(u["a"])([Object(l["a"])({components:{Tabs:function(){return a.e("chunk-54d6368a").then(a.bind(null,"48e8"))}}})],p);var v=p,g=v,h=(a("f00b"),a("2877")),m=Object(h["a"])(g,s,c,!1,null,"7b100ad2",null);e["default"]=m.exports},"8f45":function(t,e,a){"use strict";a.d(e,"a",(function(){return f}));var s=a("d4ec"),c=a("bee2"),i=a("262e"),n=a("2caf"),r=(a("ac1f"),a("466d"),a("9ab4")),o=a("4b88"),u=a("2b0e"),l=a("2fe1"),d={"tag name duplicated.":"标签名重复了"},b=Object(o["a"])(navigator.userAgent),f=(b.match(/WeChat/),function(t){Object(i["a"])(a,t);var e=Object(n["a"])(a);function a(){return Object(s["a"])(this,a),e.apply(this,arguments)}return Object(c["a"])(a,[{key:"createTag",value:function(t){this.$store.commit("createTag",t),this.$store.state.createTagError&&window.alert(d[this.$store.state.createTagError.message]||"未知错误")}}]),a}(u["a"]));f=Object(r["a"])([l["b"]],f)},a14f:function(t,e,a){},f00b:function(t,e,a){"use strict";a("a14f")}}]);
//# sourceMappingURL=chunk-12b33870.0b92e0a4.js.map