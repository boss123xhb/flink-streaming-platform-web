(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8b1b04e"],{3468:function(e,t,n){"use strict";n("65b6")},"65b6":function(e,t,n){},d78e:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-button",{attrs:{type:"primary"},on:{click:e.handleAddRole}},[e._v(" "+e._s(e.$t("permission.addRole"))+" ")]),n("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolesList,border:""}},[n("el-table-column",{attrs:{align:"center",label:"Role Key",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.key)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"Role Name",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),n("el-table-column",{attrs:{align:"header-center",label:"Description"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.description)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"Operations"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.handleEdit(t)}}},[e._v(" "+e._s(e.$t("permission.editPermission"))+" ")]),n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return e.handleDelete(t)}}},[e._v(" "+e._s(e.$t("permission.delete"))+" ")])]}}])})],1),n("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"Edit Role":"New Role"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{attrs:{model:e.role,"label-width":"80px","label-position":"left"}},[n("el-form-item",{attrs:{label:"Name"}},[n("el-input",{attrs:{placeholder:"Role Name"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),n("el-form-item",{attrs:{label:"Desc"}},[n("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Role Description"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1),n("el-form-item",{attrs:{label:"Menus"}},[n("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{"check-strictly":e.checkStrictly,data:e.routesData,props:e.defaultProps,"show-checkbox":"","node-key":"path"}})],1)],1),n("div",{staticStyle:{"text-align":"right"}},[n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v(" "+e._s(e.$t("permission.cancel"))+" ")]),n("el-button",{attrs:{type:"primary"},on:{click:e.confirmRole}},[e._v(" "+e._s(e.$t("permission.confirm"))+" ")])],1)],1)],1)},i=[],a=n("5530"),o=n("2909"),l=n("b85c"),s=n("c7eb"),c=n("1da1"),u=(n("d81d"),n("d3b7"),n("159b"),n("99af"),n("a434"),n("caad"),n("2532"),n("a4d3"),n("e01a"),n("b0c0"),n("4de4"),n("df7c")),d=n.n(u),h=n("ed08"),f=n("b775");function p(){return Object(f["a"])({url:"/vue-element-admin/routes",method:"get"})}function b(){return Object(f["a"])({url:"/vue-element-admin/roles",method:"get"})}function m(e){return Object(f["a"])({url:"/vue-element-admin/role",method:"post",data:e})}function v(e,t){return Object(f["a"])({url:"/vue-element-admin/role/".concat(e),method:"put",data:t})}function g(e){return Object(f["a"])({url:"/vue-element-admin/role/".concat(e),method:"delete"})}var y=n("9923"),k={key:"",name:"",description:"",routes:[]},w={data:function(){return{role:Object.assign({},k),routes:[],rolesList:[],dialogVisible:!1,dialogType:"new",checkStrictly:!1,defaultProps:{children:"children",label:"title"}}},computed:{routesData:function(){return this.routes}},created:function(){this.getRoutes(),this.getRoles()},methods:{getRoutes:function(){var e=this;return Object(c["a"])(Object(s["a"])().mark((function t(){var n,r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:n=t.sent,e.serviceRoutes=n.data,r=e.generateRoutes(n.data),e.routes=e.i18n(r);case 6:case"end":return t.stop()}}),t)})))()},getRoles:function(){var e=this;return Object(c["a"])(Object(s["a"])().mark((function t(){var n;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:n=t.sent,e.rolesList=n.data;case 4:case"end":return t.stop()}}),t)})))()},i18n:function(e){var t=this,n=e.map((function(e){return e.title=y["a"].t("route.".concat(e.title)),e.children&&(e.children=t.i18n(e.children)),e}));return n},generateRoutes:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=[],i=Object(l["a"])(e);try{for(i.s();!(t=i.n()).done;){var a=t.value;if(!a.hidden){var o=this.onlyOneShowingChild(a.children,a);a.children&&o&&!a.alwaysShow&&(a=o);var s={path:d.a.resolve(n,a.path),title:a.meta&&a.meta.title};a.children&&(s.children=this.generateRoutes(a.children,s.path)),r.push(s)}}}catch(c){i.e(c)}finally{i.f()}return r},generateArr:function(e){var t=this,n=[];return e.forEach((function(e){if(n.push(e),e.children){var r=t.generateArr(e.children);r.length>0&&(n=[].concat(Object(o["a"])(n),Object(o["a"])(r)))}})),n},handleAddRole:function(){this.role=Object.assign({},k),this.$refs.tree&&this.$refs.tree.setCheckedNodes([]),this.dialogType="new",this.dialogVisible=!0},handleEdit:function(e){var t=this;this.dialogType="edit",this.dialogVisible=!0,this.checkStrictly=!0,this.role=Object(h["c"])(e.row),this.$nextTick((function(){var e=t.generateRoutes(t.role.routes);t.$refs.tree.setCheckedNodes(t.generateArr(e)),t.checkStrictly=!1}))},handleDelete:function(e){var t=this,n=e.$index,r=e.row;this.$confirm("Confirm to remove the role?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(Object(c["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g(r.key);case 2:t.rolesList.splice(n,1),t.$message({type:"success",message:"Delete succed!"});case 4:case"end":return e.stop()}}),e)})))).catch((function(e){console.error(e)}))},generateTree:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=arguments.length>2?arguments[2]:void 0,i=[],a=Object(l["a"])(e);try{for(a.s();!(t=a.n()).done;){var o=t.value,s=d.a.resolve(n,o.path);o.children&&(o.children=this.generateTree(o.children,s,r)),(r.includes(s)||o.children&&o.children.length>=1)&&i.push(o)}}catch(c){a.e(c)}finally{a.f()}return i},confirmRole:function(){var e=this;return Object(c["a"])(Object(s["a"])().mark((function t(){var n,r,i,a,o,l,c,u,d;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n="edit"===e.dialogType,r=e.$refs.tree.getCheckedKeys(),e.role.routes=e.generateTree(Object(h["c"])(e.serviceRoutes),"/",r),!n){t.next=16;break}return t.next=6,v(e.role.key,e.role);case 6:i=0;case 7:if(!(i<e.rolesList.length)){t.next=14;break}if(e.rolesList[i].key!==e.role.key){t.next=11;break}return e.rolesList.splice(i,1,Object.assign({},e.role)),t.abrupt("break",14);case 11:i++,t.next=7;break;case 14:t.next=22;break;case 16:return t.next=18,m(e.role);case 18:a=t.sent,o=a.data,e.role.key=o.key,e.rolesList.push(e.role);case 22:l=e.role,c=l.description,u=l.key,d=l.name,e.dialogVisible=!1,e.$notify({title:"Success",dangerouslyUseHTMLString:!0,message:"\n            <div>Role Key: ".concat(u,"</div>\n            <div>Role Name: ").concat(d,"</div>\n            <div>Description: ").concat(c,"</div>\n          "),type:"success"});case 25:case"end":return t.stop()}}),t)})))()},onlyOneShowingChild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=null,r=e.filter((function(e){return!e.hidden}));return 1===r.length?(n=r[0],n.path=d.a.resolve(t.path,n.path),n):0===r.length&&(n=Object(a["a"])(Object(a["a"])({},t),{},{path:"",noShowingChildren:!0}),n)}}},O=w,j=(n("3468"),n("2877")),x=Object(j["a"])(O,r,i,!1,null,"4e814f56",null);t["default"]=x.exports}}]);