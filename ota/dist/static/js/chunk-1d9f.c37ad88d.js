(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1d9f"],{"++tX":function(t,e,s){"use strict";var a=s("VgMV");s.n(a).a},VgMV:function(t,e,s){},bTKN:function(t,e,s){"use strict";s.r(e);var a=s("4cpu"),i=s("02iu"),o=s("9yna"),r=s("n6Nk"),l=s("7Qib"),n={name:"Allotroom",components:{GridUnit:a.a},filters:{renderStatusValue:function(t){return["","已分配","未分配"][t]||"未知"}},data:function(){return{hasDistributeStatus:2,allRoom:"",orgData:[],formData:{userId:"",depId:"",resource:2,pageNo:"1",pageSize:"20",regionId:"",subdistrictId:"",subdistrictName:"",hasDistribute:2},assionButtonTitle:"确认分配",selectFangyuanCodes:[],areaPotions:[],subdistrictNames:[],nowAreaName:[],colModels:[],distributeHouse:!1,colModelsFs:[{prop:"subdistrictName",label:"公寓/小区",width:300},{prop:"roomNo",label:"房间号",width:150},{prop:"chamberCount",label:"户型",render:function(t){return(t.chamberCount||0)+"室"+(t.boardCount||0)+"厅"+(t.toiletCount||0)+"卫"}},{prop:"hasDistribute",label:"分配状态",slotName:"slot_hasDistribute"}],colModelsJz:[{prop:"subdistrictName",label:"公寓/小区",width:300},{prop:"roomCount",label:"房间数"}],url:i.b.requestPath,method:i.b.queryMethod,isMock:i.b.isMock}},computed:{sidebar:function(){return this.$store.state.app.sidebar}},created:function(){this.orgData=Object(l.b)(this.$route.query)||[],this.colModels=Object(l.b)(this.colModelsFs),this.formData.depId=this.orgData.depId,this.formData.userId=this.orgData.id,this.orgData.role?(this.distributeHouse=!0,this.url=i.c.requestPath):this.url=i.b.requestPath,1===this.orgData.hasAllRoomAuth&&2===this.orgData.role&&(this.allRoom=1)},mounted:function(){this.getAreaName()},methods:{getAreaName:function(){var t=this,e={resource:1===this.formData.resource?3:4};this.distributeHouse&&(e.userId=this.orgData.id),Object(r.t)(e).then(function(e){t.nowAreaName=Object(l.b)(e.data.subdistrictList);for(var s=0;s<e.data.cityList.length;s++)e.data.cityList[s].cityId===1*t.orgData.cityId&&(t.areaPotions=Object(l.b)(e.data.cityList[s].regionList))})},handleChange:function(t){var e=this;this.nowAreaName.filter(function(s){s.areaId===t&&s.cityId===1*e.orgData.cityId&&e.subdistrictNames.push({name:s.name,regionAddressId:s.regionAddressId})})},searchParam:function(t){var e=this;1===this.formData.resource?this.colModels=Object(l.b)(this.colModelsJz):this.colModels=Object(l.b)(this.colModelsFs),"clear"===t&&(this.formData={userId:this.orgData.id,depId:"",resource:this.formData.resource,pageNo:"1",pageSize:"20",regionId:"",subdistrictId:"",subdistrictName:"",hasDistribute:2}),console.log("查询数据",this.formData),this.hasDistributeStatus=this.formData.hasDistribute,this.formData.depId=this.orgData.depId,this.assionButtonTitle=2===this.formData.hasDistribute?"确认分配":"取消分配",this.$nextTick(function(){e.$refs.refGridUnit.searchHandler()})},messageTips:function(t,e){1*t.code==0?(this.$message({message:e,type:"success"}),this.searchParam(),this.selectFangyuanCodes=[]):this.$message({message:t.message,type:"success"})},distributionToDep:function(t){var e=this;Object(o.c)(t).then(function(t){e.messageTips(t,"部门房源分配成功")})},distributionToUser:function(t){var e=this;Object(o.d)(t).then(function(t){e.messageTips(t,"员工房源分配成功")})},cancelDistributionToUser:function(t){var e=this;Object(o.b)(t).then(function(t){e.messageTips(t,"员工房源取消分配，成功")})},cancelDistributionToDep:function(t){var e=this;Object(o.a)(t).then(function(t){e.messageTips(t,"部门房源取消分配，成功")})},submitOrgRoom:function(){this.getMultipleSelectionAll();var t={fangyuanCodes:Object(l.b)(this.selectFangyuanCodes)},e=2===this.formData.hasDistribute?"确认":"取消";if(!this.selectFangyuanCodes.length)return this.$message({message:"请选择要"+e+"分配的房源",type:"warning"}),!1;2===this.formData.hasDistribute?this.distributeHouse?(t.userId=this.orgData.id,this.distributionToUser(t),console.log("确认员工分配",t)):(t.depId=this.orgData.depId,console.log("确认部门分配",t),this.distributionToDep(t)):1===this.formData.hasDistribute&&(this.distributeHouse?(t.userId=this.orgData.id,console.log("取消员工分配",t),this.cancelDistributionToUser(t)):(t.depId=this.orgData.depId,console.log("取消部门分配",t),this.cancelDistributionToDep(t)))},getMultipleSelectionAll:function(){var t=this;this.$refs.refGridUnit.multipleSelectionAll.forEach(function(e){t.selectFangyuanCodes.push(e.fangyuanCode)})},backPre:function(){this.distributeHouse?this.$router.push({name:"人员管理"}):this.$router.push({name:"组织架构"})}}},c=(s("++tX"),s("KHd+")),u=Object(c.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"layout_pageHeader"},[s("h5",{staticClass:"allotTitle"},[t._v("房源分配管理")]),t._v(" "),s("div",{staticClass:"orgDataRoom"},[t.distributeHouse?t._e():s("p",{staticClass:"allotaddr"},[t._v("给部门 "),s("span",[t._v(t._s(t.orgData.depName)+" ")]),t._v("分配房源")]),t._v(" "),t.distributeHouse?s("p",{staticClass:"allotaddr"},[t._v("给账号 "),s("span",[t._v(t._s(t.orgData.name)+" | "+t._s(t.orgData.mobile)+" | "+t._s(t.orgData.depName)+" ")]),t._v("分配房源")]):t._e(),t._v(" "),t._e()],1),t._v(" "),s("el-form",{staticClass:"model-search clearfix"},[s("div",{staticClass:"item-flex"},[s("el-form-item",[s("el-select",{staticClass:"item-select",attrs:{size:"small"},model:{value:t.formData.hasDistribute,callback:function(e){t.$set(t.formData,"hasDistribute",e)},expression:"formData.hasDistribute"}},[s("el-option",{attrs:{value:2,label:"未分配"}}),t._v(" "),s("el-option",{attrs:{value:1,label:"已分配"}})],1)],1),t._v(" "),s("el-form-item",[s("el-select",{staticClass:"item-select",attrs:{size:"small"},model:{value:t.formData.resource,callback:function(e){t.$set(t.formData,"resource",e)},expression:"formData.resource"}},[s("el-option",{attrs:{value:1,label:"集中式"}}),t._v(" "),s("el-option",{attrs:{value:2,label:"分散式"}})],1)],1),t._v(" "),s("el-form-item",[s("el-select",{staticClass:"item-select",attrs:{size:"small",filterable:"",clearable:"",placeholder:"请选择区域"},on:{change:t.handleChange},model:{value:t.formData.regionId,callback:function(e){t.$set(t.formData,"regionId",e)},expression:"formData.regionId"}},t._l(t.areaPotions,function(t){return s("el-option",{key:t.areaId,attrs:{label:t.areaName,value:t.areaId}})}))],1),t._v(" "),s("el-form-item",[s("el-select",{staticClass:"item-select",attrs:{clearable:"",filterable:"",size:"small",placeholder:"请选择公寓小区"},model:{value:t.formData.subdistrictId,callback:function(e){t.$set(t.formData,"subdistrictId",e)},expression:"formData.subdistrictId"}},t._l(t.subdistrictNames,function(t){return s("el-option",{key:t.regionAddressId,attrs:{label:t.name,value:t.regionAddressId}})}))],1),t._v(" "),s("el-form-item",[s("el-input",{staticClass:"item-select",attrs:{clearable:"",placeholder:"请输入公寓/小区",size:"small",level:"1",filterable:""},model:{value:t.formData.subdistrictName,callback:function(e){t.$set(t.formData,"subdistrictName",e)},expression:"formData.subdistrictName"}})],1),t._v(" "),s("el-form-item",[s("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small",icon:"el-icon-search"},on:{click:t.searchParam}},[t._v("查询")]),t._v(" "),s("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",icon:"el-icon-remove-outline"},on:{click:function(e){t.searchParam("clear")}}},[t._v("清空")])],1)],1)])],1),t._v(" "),s("div",{staticClass:"layout-container",staticStyle:{"margin-bottom":"40px"}},[s("GridUnit",{ref:"refGridUnit",attrs:{"form-options":t.formData,"data-method":t.method,url:t.url,"is-mock":t.isMock,columns:t.colModels,"show-selection":!0,"selection-key":"fangyuanCode","total-field":"data.record","list-field":"data.houseList"},scopedSlots:t._u([{key:"slot_hasDistribute",fn:function(e){return[t._v("\n        "+t._s(t._f("renderStatusValue")(t.hasDistributeStatus))+"\n      ")]}}])}),t._v(" "),s("div",{staticClass:"btnpos",class:{hideSidebar:!t.sidebar.opened}},[s("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-arrow-left"},on:{click:t.backPre}},[t._v("返回")]),t._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.submitOrgRoom}},[t._v(t._s(t.assionButtonTitle))])],1)],1)])},[],!1,null,"596e4e84",null);u.options.__file="allotroom.vue";e.default=u.exports}}]);