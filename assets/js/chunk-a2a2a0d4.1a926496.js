(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2a2a0d4"],{7281:function(e,r,t){"use strict";t.r(r);var l=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticStyle:{"margin-top":"30px"}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"动态仓库",prop:"name"}},[t("el-select",{attrs:{filterable:"",placeholder:"请选择仓库"},on:{change:e.changeHandle,focus:e.focusHandle},model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name","string"===typeof r?r.trim():r)},expression:"ruleForm.name"}},e._l(e.targetList,(function(e){return t("el-option",{key:e.warehouseId,attrs:{label:e.storehouseName,value:e.storehouseName}})})),1)],1),t("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.region,callback:function(r){e.$set(e.ruleForm,"region",r)},expression:"ruleForm.region"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t("el-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[t("el-switch",{model:{value:e.ruleForm.delivery,callback:function(r){e.$set(e.ruleForm,"delivery",r)},expression:"ruleForm.delivery"}})],1),t("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[t("el-checkbox-group",{model:{value:e.ruleForm.type,callback:function(r){e.$set(e.ruleForm,"type",r)},expression:"ruleForm.type"}},[t("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),t("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),t("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),t("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),t("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[t("el-radio-group",{model:{value:e.ruleForm.resource,callback:function(r){e.$set(e.ruleForm,"resource",r)},expression:"ruleForm.resource"}},[t("el-radio",{attrs:{label:"线上品牌商赞助"}}),t("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),t("el-form-item",{attrs:{label:"活动形式",prop:"desc"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.desc,callback:function(r){e.$set(e.ruleForm,"desc",r)},expression:"ruleForm.desc"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),t("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},o=[],a=(t("f550"),t("d0f0"),{name:"formValidation",data:function(){return{targetList:[],ruleForm:{name:"",region:"",delivery:!1,type:[],resource:"",desc:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm:function(e){this.$refs[e].resetFields()},focusHandle:function(){return this.$message.error("请配置接口!")},changeHandle:function(){var e=this,r={};r=this.targetList.find((function(r){return r.storehouseName===e.ruleForm.name})),console.log("获取点击的对象",r),this.ruleForm.storehouseId=r.storehouseId}}}),n=a,s=t("5511"),i=Object(s["a"])(n,l,o,!1,null,null,null);r["default"]=i.exports},d0f0:function(e,r,t){var l=t("b8d5"),o=t("8fee").f,a=Function.prototype,n=a.toString,s=/^\s*function ([^ (]*)/,i="name";!l||i in a||o(a,i,{configurable:!0,get:function(){try{return n.call(this).match(s)[1]}catch(e){return""}}})},f550:function(e,r,t){"use strict";var l=t("cad4"),o=t("f223").find,a=t("d840"),n=t("7cb0"),s="find",i=!0,u=n(s);s in[]&&Array(1)[s]((function(){i=!1})),l({target:"Array",proto:!0,forced:i||!u},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a(s)}}]);