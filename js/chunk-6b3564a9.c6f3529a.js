(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b3564a9"],{"0960":function(t,e,a){},"54bc":function(t,e,a){"use strict";a("0960")},ba37:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("div",{staticClass:"cancel",on:{click:function(e){return t.$router.back()}}},[t._v("取消")]),a("Tabs",{attrs:{"class-prefix":"type","data-source":t.recordTypeList,value:t.record.type},on:{"update:value":function(e){return t.$set(t.record,"type",e)}}}),a("Tags",{staticClass:"tagArea",attrs:{type:t.record.type},on:{"update:type":function(e){return t.$set(t.record,"type",e)},"update:value":function(e){t.record.tags=e}}}),a("div",{staticClass:"numberPad"},[a("div",{staticClass:"notes-output"},[a("div",{staticClass:"noteIcon"},[a("Icon",{attrs:{name:"remark"}})],1),a("div",{staticClass:"notes"},[t._v("备注:")]),a("div",{staticClass:"notesInput"},[a("Notes",{attrs:{"class-prefix":"notes",value:t.record.notes,placeholder:"在这里输入备注..."},on:{"update:value":function(e){return t.$set(t.record,"notes",e)}}})],1),a("div",{staticClass:"output"},[t._v(t._s(t.output))])]),a("div",{staticClass:"buttons"},[a("div",{staticClass:"button",on:{click:t.inputContent}},[t._v("7")]),a("div",{staticClass:"button",on:{click:t.inputContent}},[t._v("8")]),a("div",{staticClass:"button",on:{click:t.inputContent}},[t._v("9")]),a("div",{staticClass:"button date"},[a("DatePicker",{attrs:{placement:"left-end",open:t.open,value:t.record.createdAt,type:"date"},on:{"update:value":function(e){return t.$set(t.record,"createdAt",e)},"on-change":t.handleChange,"on-clickoutside":t.handleAuthors}},[a("a",{staticClass:"abc",attrs:{href:"javascript:void(0)"},on:{click:t.handleClick}},[t.day(t.record.createdAt).isSame(t.day(new Date),"day")?a("Icon",{attrs:{name:"day"}}):t._e(),t.day(t.record.createdAt).isSame(t.day(new Date),"day")?[t._v(" 今天")]:[t._v(t._s(t.record.createdAt.split("T")[0]))]],2)])],1),a("div",{staticClass:"button",on:{click:t.inputContent}},[t._v("4")]),a("div",{staticClass:"button",on:{click:t.inputContent}},[t._v("5")]),a("div",{staticClass:"button",on:{click:t.inputContent}},[t._v("6")]),a("div",{staticClass:"button",on:{click:t.increase}},[a("Icon",{attrs:{name:"plus"}})],1),a("div",{staticClass:"button",on:{click:t.inputContent}},[t._v("1")]),a("div",{staticClass:"button",on:{click:t.inputContent}},[t._v("2")]),a("div",{staticClass:"button",on:{click:t.inputContent}},[t._v("3")]),a("div",{staticClass:"button",on:{click:t.decrease}},[a("Icon",{attrs:{name:"minus"}})],1),a("div",{staticClass:"button",on:{click:t.inputContent}},[t._v(".")]),a("div",{staticClass:"button",on:{click:t.inputContent}},[t._v("0")]),a("div",{staticClass:"button delete",on:{click:t.remove}},[a("Icon",{attrs:{name:"delete"}})],1),t.equalSymbol?a("div",{staticClass:"button ok",on:{click:t.saveRecord}},[t._v(" 完成 ")]):a("div",{staticClass:"button",on:{click:t.equalOutput}},[a("Icon",{attrs:{name:"equal"}})],1)])])],1)},s=[],i=a("5689"),o=a("d4ec"),u=a("bee2"),c=a("262e"),r=a("2caf"),l=(a("ac1f"),a("1276"),a("fb6a"),a("d3b7"),a("25f0"),a("b0c0"),a("5319"),a("3ca3"),a("ddb0"),a("9ab4")),d=a("2b0e"),p=a("1b40"),h=a("5a0c"),v=a.n(h),b=a("84d9"),f=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.record={tags:{},notes:"",type:"-",amount:0,createdAt:v()(new Date).format("YYYY-MM-DDTHH:mm:ss")},t.recordTypeList=b["a"],t.day=v.a,t.output="0",t.equalNumber=0,t.symbol=!0,t.equalSymbol=!0,t.open=!1,t}return Object(u["a"])(a,[{key:"created",value:function(){this.$store.commit("fetchRecords")}},{key:"inputContent",value:function(t){var e=t.target,a=e.textContent;if(10!==this.output.length)if("0"!==this.output){if(!(this.output.indexOf(".")>=0&&"."===a)){if(this.output.indexOf(".")>=0){var n=this.output.split(".");if(n[1].length>=2)return}this.output+=a}}else"0123456789".indexOf(a)>=0?this.output=a:this.output+=a}},{key:"remove",value:function(){this.output.length<=1?this.output="0":this.output=this.output.slice(0,-1)}},{key:"increase",value:function(){this.equalNumber=parseFloat(this.output),this.output="0",this.symbol=!0,this.equalSymbol=!1}},{key:"decrease",value:function(){this.equalNumber=parseFloat(this.output),this.output="0",this.symbol=!1,this.equalSymbol=!1}},{key:"equalOutput",value:function(){if(this.symbol){this.output=(this.equalNumber+parseFloat(this.output)).toString();var t=this.output.split(".");if(t[1]&&t[1].length>2){var e=t[1].split("");this.output=t[0]+"."+e[0]+e[1]}this.equalSymbol=!0}else{var a=this.equalNumber-parseFloat(this.output);if(a<0)alert("不支持负数哦"),this.output="0";else{this.output=a.toString();var n=this.output.split(".");if(n[1]&&n[1].length>2){var s=n[1].split("");this.output=n[0]+"."+s[0]+s[1]}}this.equalSymbol=!0}}},{key:"saveRecord",value:function(){return this.record.amount=parseFloat(this.output),this.record.tags.name?0===this.record.amount?window.alert("请输入金额"):(this.$store.commit("createRecord",this.record),null===this.$store.state.createRecordError&&(this.$router.replace("/"),this.record.notes=""),void(this.output="0")):window.alert("请选择一个标签")}},{key:"handleClick",value:function(){this.open=!this.open}},{key:"handleChange",value:function(t){this.record.createdAt=t+v()(new Date).format("THH:mm:ss"),this.open=!1}},{key:"handleAuthors",value:function(){this.open=!1}}]),a}(d["a"]);f=Object(l["a"])([Object(p["a"])({components:{DatePicker:i["a"],Notes:function(){return a.e("chunk-052823ba").then(a.bind(null,"77b7"))},Tabs:function(){return a.e("chunk-54d6368a").then(a.bind(null,"48e8"))},Tags:function(){return a.e("chunk-348f5015").then(a.bind(null,"e718"))}}})],f);var m=f,C=m,k=(a("54bc"),a("2877")),y=Object(k["a"])(C,n,s,!1,null,"5514c4a3",null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-6b3564a9.c6f3529a.js.map