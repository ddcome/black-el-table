(function(e){function t(t){for(var r,i,a=t[0],c=t[1],u=t[2],s=0,d=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={index:0},l=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var p=c;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("c31f")},"27e6":function(e,t,n){},"42b1":function(e,t,n){"use strict";var r=n("27e6"),o=n.n(r);o.a},c31f:function(e,t,n){"use strict";n.r(t);n("a133"),n("ed0d"),n("f09c"),n("e117");var r=n("0261"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("black-el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{height:"300px",columns:e.tableColumns,data:e.tableData}},[n("el-table-column",{attrs:{label:"操作",width:"300",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-button",{staticClass:"print-btn",attrs:{size:"mini",icon:"el-icon-view",type:"primary"},on:{click:function(t){return e.viewHandle(r)}}}),n("el-button",{staticClass:"print-btn",attrs:{size:"mini",icon:"el-icon-edit",type:"primary"},on:{click:function(t){return e.editHandle(r)}}}),n("el-button",{staticClass:"print-btn",attrs:{size:"mini",icon:"el-icon-delete",type:"primary"},on:{click:function(t){return e.deleteHandle(r)}}})]}}])})],1)],1)},l=[],i=[{p1:"测试数据1",p2:"测试数据2",p3:"测试数据3",p4:"测试数据4"},{p1:"测试数据1",p2:"测试数据2",p3:"测试数据3",p4:"测试数据4"},{p1:"测试数据1",p2:"测试数据2",p3:"测试数据3",p4:"测试数据4"},{p1:"测试数据1",p2:"测试数据2",p3:"测试数据3",p4:"测试数据4"},{p1:"测试数据1",p2:"测试数据2",p3:"测试数据3",p4:"测试数据4"},{p1:"测试数据1",p2:"测试数据2",p3:"测试数据3",p4:"测试数据4"},{p1:"测试数据1",p2:"测试数据2",p3:"测试数据3",p4:"测试数据4"},{p1:"测试数据1",p2:"测试数据2",p3:"测试数据3",p4:"测试数据4"}],a={name:"App",data:function(){return{id:0,loading:!1,tableData:[],tableColumns:[{prop:"p1",label:"普通列"},{prop:"p2",width:"130px",label:"定宽列"},{prop:"p3",label:"复杂单元格列",width:"100px",render:function(e,t){return e("el-tag",{attrs:{effect:"plain",size:"mini"},domProps:{innerText:t.p3}})}}]}},methods:{viewHandle:function(e){console.log("row",e)},editHandle:function(e){console.log("row",e)},deleteHandle:function(e){console.log("row",e)}},mounted:function(){var e=this;this.loading=!0,clearTimeout(this.id),this.id=setTimeout((function(){e.tableData=i,e.loading=!1}),2e3)},destroyed:function(){clearTimeout(this.id)}},c=a,u=(n("42b1"),n("4023")),p=Object(u["a"])(c,o,l,!1,null,null,null),s=p.exports,d=(n("3880"),n("b705")),f=n.n(d);r["default"].use(f.a,{size:"small"});n("2eeb"),n("053b");var b=n("0eaa"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{ref:"elTable",staticClass:"base-table full-width",attrs:{data:e.data,border:e.border,stripe:e.stripe,"default-sort":e.defaultSort,height:e.height,"show-summary":e.showSummary,"tree-props":e.treeProps,"row-key":"id","highlight-current-row":""},on:{"cell-dblclick":e.rowDoubleClick,"row-click":e.rowClick,"selection-change":function(t){return e.$emit("selection-change",t)}}},[e.selection?n("el-table-column",{attrs:{width:"50",type:"selection"}}):e._e(),e.order?n("el-table-column",{attrs:{align:"center",label:"序号",width:"60",type:"index"}}):e._e(),e._l(e.columns,(function(t){return n("el-table-column",{key:t.prop,attrs:{prop:t.prop,label:t.label,width:t.width,fixed:t.fixed,sortable:t.sortable,"show-overflow-tooltip":"",align:t.align},scopedSlots:e._u([{key:"default",fn:function(r){var o=r.row;return[t.clickEnable?[n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.$emit("click",o,t)}}},[e._v(" "+e._s(e.formatData(t,o))+" ")])]:"dic"===t.type?[n("dictionary-span",{attrs:{type:t.dicType,binddata:o[t.prop]}})]:t.render?[n("expand-dom",{attrs:{column:t,row:o,render:t.render}})]:[e._v(" "+e._s(e.formatData(t,o))+" ")]]}}],null,!0)})})),e._t("default")],2)},h=[],y=(n("513c"),n("7017")),w={name:"BlackElTable",props:{data:Array,columns:Array,border:{type:Boolean,default:!1},stripe:{type:Boolean,default:!0},size:{type:String,default:"small"},defaultSort:Object,height:{type:String,default:"auto"},showSummary:{type:Boolean,default:!1},order:{type:Boolean,default:!0},selection:{type:Boolean,default:!1},treeProps:{type:Object,default:function(){return{children:"children"}}}},components:{expandDom:{functional:!1,props:{row:Object,render:Function,index:Number,column:{type:Object,default:null}},render:function(e){return this.render(e,this.row)}}},methods:{formatData:function(e,t){var n=t[e.prop];return n?"date"===e.type?Object(y["a"])(n,e.dateFormat||"yyyy-MM-dd HH:mm:ss"):e.formatter instanceof Function?e.formatter(n,t):n:n},rowDoubleClick:function(e,t,n,r){this.$emit("cell-dblclick",e,t,n,r)},rowClick:function(e,t,n,r){this.$emit("row-click",e,t,n,r)},setCurrentRow:function(e){this.$refs.elTable.setCurrentRow(e)},toggleSelection:function(e){this.$refs.elTable.toggleRowSelection(e)},clearSelection:function(){this.$refs.elTable.clearSelection()}}},g=w,v=Object(u["a"])(g,m,h,!1,null,"06a4cb8f",null),k=v.exports;k.install=function(e){e.component(k.name,k)};var x=k,_=[x],O=function e(t){e.installed||(e.installed=!0,_.map((function(e){t.component(e.name,e)})))};"undefined"!==typeof window&&window.Vue&&O(window.Vue);var j=Object(b["a"])({install:O},_);r["default"].config.productionTip=!1,r["default"].use(j),new r["default"]({render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=index.4539d7a1.js.map