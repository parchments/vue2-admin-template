(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8068781c"],{"26a2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("section",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"bg-white",attrs:{"element-loading-text":"拼命加载中……"}},[n("div",{staticClass:"table-filter-wrapper mar-l-10"},[n("ph-form",{attrs:{searchForm:t.searchForm},on:{searchBtn:t.searchBtn,resetSearchBtn:t.resetSearchBtn,addHandle:t.addHandle}})],1),n("div",{staticClass:"table-wrapper pad-t-5 bor-t-1"},[n("ph-table",{attrs:{tableData:t.tableData},on:{editHandle:t.editHandle,singleDeleteHandle:t.singleDeleteHandle,selectionChangeHandle:t.selectionChangeHandle}}),n("el-row",{staticClass:"mar-t-10"},[n("el-col",{attrs:{span:4}},[n("el-button",{attrs:{disabled:t.isBatchDeleteDisabled,size:"small"},on:{click:function(e){return t.batchDeleteHandle()}}},[t._v("批量删除 ")])],1),n("el-col",{attrs:{span:20}},[n("ph-pagination",{staticClass:"mar-r-20 text-right",attrs:{paginations:t.paginationParams},on:{sendPaginations:t.sendPaginationsHandle}})],1)],1)],1)]),n("added-editor-dialog",{attrs:{dialogForm:t.dialogForm,submitLoading:t.submitLoading,dialogVisible:t.addedEditorDialog},on:{"update:dialogVisible":function(e){t.addedEditorDialog=e},"update:dialog-visible":function(e){t.addedEditorDialog=e},getCancel:t.handleCancel,submitHandle:t.submitAddedEditorForm}})],1)},a=[];n("5b4a"),n("d0f0"),n("06d4"),n("63ff"),n("3084"),n("31d1");function i(t,e,n,r,a,i,o){try{var s=t[i](o),l=s.value}catch(c){return void n(c)}s.done?e(l):Promise.resolve(l).then(r,a)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){i(o,r,a,s,l,"next",t)}function l(t){i(o,r,a,s,l,"throw",t)}s(void 0)}))}}var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"search-form-wrapper"},[n("el-form",{attrs:{inline:!0}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:20}},[n("div",{staticClass:"fl"},[n("el-form-item",{staticClass:"pad-r-20",attrs:{label:"拍品"}},[n("el-input",{attrs:{placeholder:"请输入拍品"},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name","string"===typeof e?e.trim():e)},expression:"searchForm.name"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.searchBtn()}}},[t._v("查询")]),n("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.resetSearchBtn()}}},[t._v("重置")])],1)],1)]),n("el-col",{staticClass:"text-right",attrs:{span:4}},[n("el-button",{attrs:{type:"primary",round:""},on:{click:function(e){return t.addHandle()}}},[t._v("添加拍品")])],1)],1)],1)],1)},l=[],c={props:{searchForm:{type:Object,default:Object,required:!0}},methods:{searchBtn:function(){return this.$message({type:"error",message:"请先配置接口哦"})},resetSearchBtn:function(){this.$emit("resetSearchBtn")},addHandle:function(){this.$emit("addHandle")}}},u=c,d=n("5511"),h=Object(d["a"])(u,s,l,!1,null,null,null),f=h.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{attrs:{data:t.tableData},on:{"selection-change":t.selectionChangeHandle}},[n("el-table-column",{attrs:{type:"selection",width:"100"}}),n("el-table-column",{attrs:{prop:"name",label:"商品"}}),n("el-table-column",{attrs:{prop:"code",label:"商品代码"}}),n("el-table-column",{attrs:{prop:"time",label:"时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatDate")(e.row.time,"YYYY-MM-DD HH:mm:ss"))+" ")]}}])}),n("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticClass:"mar-r-20",attrs:{type:"text",size:"small"},on:{click:function(n){return t.editHandle(e.$index,e.row)}}},[t._v("编辑")]),n("el-button",{staticClass:"mar-r-20",attrs:{type:"text",size:"small"}},[n("router-link",{attrs:{to:{path:"/goods/goodsList/goodsDetail",query:{code:e.row.code}}}},[t._v("详情")])],1),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.singleDeleteHandle(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)},m=[],g={props:{tableData:{type:Array,default:Object,required:!0}},methods:{selectionChangeHandle:function(t){this.$emit("selectionChangeHandle",t)},editHandle:function(t,e){this.$emit("editHandle",t,e)},singleDeleteHandle:function(t,e){this.$emit("singleDeleteHandle",t,e)}}},v=g,y=Object(d["a"])(v,p,m,!1,null,null,null),b=y.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-pagination",{attrs:{background:"","current-page":t.paginations.pageNo,total:t.paginations.total,"page-size":t.paginations.pageSize,"page-sizes":t.pages,layout:"total,sizes,prev,pager,next,jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}})},x=[],H={name:"paginations",props:["paginations"],data:function(){return{pages:[5,10,20,50,100]}},created:function(){this.$config.paginationParams={pageNo:1,pageSize:5,total:0,pages:[5,10,20,50,100]}},methods:{currentChangeHandle:function(t){this.paginations.pageNo=t,this.paginations.total&&this.$emit("sendPaginations",t)},sizeChangeHandle:function(t){this.paginations.pageSize=t,this.paginations.total&&this.$emit("sendPaginations",t)}}},E=H,_=Object(d["a"])(E,w,x,!1,null,null,null),L=_.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:"",visible:t.dialogVisible,"before-close":t.handleCancel,width:"500px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-form",{ref:"dialogForm",attrs:{model:t.dialogForm,"label-width":"100px",rules:t.formRules}},[n("el-form-item",{attrs:{prop:"name",label:"拍品"}},[n("el-input",{staticStyle:{width:"90%"},attrs:{maxlength:"30",placeholder:"拍品名称"},model:{value:t.dialogForm.name,callback:function(e){t.$set(t.dialogForm,"name","string"===typeof e?e.trim():e)},expression:"dialogForm.name"}})],1),n("el-form-item",{attrs:{prop:"code",label:"拍品代码"}},[n("el-input",{staticStyle:{width:"90%"},attrs:{placeholder:"拍品代码"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitHandle("dialogForm")}},model:{value:t.dialogForm.code,callback:function(e){t.$set(t.dialogForm,"code","string"===typeof e?e.trim():e)},expression:"dialogForm.code"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.handleCancel}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary",loading:t.submitLoading},on:{click:function(e){return t.submitHandle("dialogForm")}}},[t._v("确 定")])],1)],1)},k=[],D={props:{dialogVisible:{type:Boolean,default:!1,required:!0},dialogForm:{type:Object,default:Object,required:!0},submitLoading:{type:Boolean,default:!1,required:!0}},data:function(){var t=function(t,e,n){var r=/[^\u4e00-\u9fa5]/;r.test(e)||""===e?n(new Error("请输入中文拍品名称")):n()};return{formRules:{name:[{required:!0,trigger:"blur",validator:t}],code:[{required:!0,message:"请输入拍品代码",trigger:"blur"}]}}},methods:{submitHandle:function(t){var e=this;this.$refs[t].validate((function(t){t&&e.$emit("submitHandle",e.dialogForm)}))},handleCancel:function(){this.$emit("getCancel")}}},C=D,S=Object(d["a"])(C,F,k,!1,null,null,null),$=S.exports,P={name:"goodsList",components:{"ph-pagination":L,"added-editor-dialog":$,"ph-form":f,"ph-table":b},data:function(){return{loading:!1,submitLoading:!1,paginationParams:this.$config.paginationParams,handleType:"",checkedIds:[],isBatchDeleteDisabled:!1,tableData:[{name:"小米手机",code:"XMSJ",time:1573625941e3},{name:"华为手机",code:"HWSJ",time:1573009362e3},{name:"红米手机",code:"HMSJ",time:1573193112e3},{name:"荣耀手机",code:"RYSJ",time:157361074e4}],addedEditorDialog:!1,dialogForm:{name:"",code:""},searchForm:{name:"",code:""}}},created:function(){},methods:{successList:function(){var t=o(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.$message.error("请配置接口!"));case 4:n=t.sent,r=n.data.data,n.data.retcode===this.$config.RET_CODE.SUCCESS_CODE?(this.loading=!1,r.rows.length>0?(this.isBatchDeleteDisabled=!1,this.tableData=r.rows,this.paginationParams.pageSize=r.pageSize,this.paginationParams.size=r.size,this.paginationParams.total=r.total,this.paginationParams.pages=r.pages):(this.tableData=[],this.paginationParams.total=0,this.isBatchDeleteDisabled=!0)):this.$message({type:"error",message:n.data.retmsg});case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getList:function(){return this.$message.error("请配置接口!")},searchBtn:function(t){var e={pageNo:this.paginationParams.pageNo,pageSize:this.paginationParams.pageSize,name:t&&t.name?t.name:null};this.successList(e)},sendPaginationsHandle:function(){if(""!==this.searchForm.name||""!==this.searchForm.code){var t={pageNo:this.paginationParams.pageNo,pageSize:this.paginationParams.pageSize,name:this.searchForm&&""!==this.searchForm.name?this.searchForm.name:null};this.successList(t)}else this.getList()},resetSearchBtn:function(){this.searchForm={},this.paginationParams.pageNo=1,this.getList()},addHandle:function(){this.handleType="add",this.addedEditorDialog=!0,this.dialogForm={name:"",code:""}},selectionChangeHandle:function(t){var e=this;t.forEach((function(t){e.checkedIds.push(t.id)}))},editHandle:function(t,e){this.handleType="edit",this.addedEditorDialog=!0,this.dialogForm={name:e.name,code:e.code,id:e.id};e.id;return this.$message.error("请配置接口!")},deleteHandle:function(t,e,n){var r=this;this.$confirm(t,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){return r.$message.error("请配置接口!")})).catch((function(){r.$message({type:"info",message:n})}))},singleDeleteHandle:function(t,e){var n=[];n.push(e.id);var r={ids:[e.id]};this.deleteHandle("确定删除当前拍品信息?",r,"取消删除")},batchDeleteHandle:function(){if(this.checkedIds.length>0){var t={ids:this.checkedIds};this.deleteHandle("确定批量删除当前拍品信息?",t,"取消删除")}else this.$message({type:"error",message:"请选择拍品"})},handleCancel:function(){this.addedEditorDialog=!1},submitAddedEditorForm:function(){return this.$message.error("请配置接口!")}}},O=P,z=Object(d["a"])(O,r,a,!1,null,null,null);e["default"]=z.exports},"63ff":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,n,r){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),o=new D(r||[]);return i._invoke=_(t,n,o),i}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=l;var u="suspendedStart",d="suspendedYield",h="executing",f="completed",p={};function m(){}function g(){}function v(){}var y={};y[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(C([])));w&&w!==n&&r.call(w,i)&&(y=w);var x=v.prototype=m.prototype=Object.create(y);function H(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(n,a,i,o){var s=c(t[n],t,a);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"===typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,i,o)}),(function(t){e("throw",t,i,o)})):Promise.resolve(u).then((function(t){l.value=t,i(l)}),(function(t){return e("throw",t,i,o)}))}o(s.arg)}var n;function a(t,r){function a(){return new Promise((function(n,a){e(t,r,n,a)}))}return n=n?n.then(a,a):a()}this._invoke=a}function _(t,e,n){var r=u;return function(a,i){if(r===h)throw new Error("Generator is already running");if(r===f){if("throw"===a)throw i;return S()}n.method=a,n.arg=i;while(1){var o=n.delegate;if(o){var s=L(o,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var l=c(t,e,n);if("normal"===l.type){if(r=n.done?f:d,l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=f,n.method="throw",n.arg=l.arg)}}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=c(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,p;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function C(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function n(){while(++a<t.length)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:S}}function S(){return{value:e,done:!0}}return g.prototype=x.constructor=v,v.constructor=g,v[s]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},H(E.prototype),E.prototype[o]=function(){return this},t.AsyncIterator=E,t.async=function(e,n,r,a){var i=new E(l(e,n,r,a));return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},H(x),x[s]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return s.type="throw",s.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;k(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},d0f0:function(t,e,n){var r=n("b8d5"),a=n("8fee").f,i=Function.prototype,o=i.toString,s=/^\s*function ([^ (]*)/,l="name";!r||l in i||a(i,l,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})}}]);