(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0817509e"],{3260:function(t,e,n){"use strict";var o=n("6e22"),i=n.n(o);i.a},"504c":function(t,e,n){var o=n("0d58"),i=n("6821"),r=n("52a7").f;t.exports=function(t){return function(e){var n,s=i(e),a=o(s),f=a.length,l=0,c=[];while(f>l)r.call(s,n=a[l++])&&c.push(t?[n,s[n]]:s[n]);return c}}},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"6e22":function(t,e,n){},"73cf":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{attrs:{model:t.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"用户账号"}},[n("el-input",{attrs:{clearable:""},on:{blur:t.checkAccount},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}}),t._v("\n    "+t._s(t.info.text1)+"\n  ")],1),n("el-form-item",{attrs:{label:"用户昵称"}},[n("el-input",{attrs:{clearable:"","aria-required":""},model:{value:t.form.userName,callback:function(e){t.$set(t.form,"userName",e)},expression:"form.userName"}}),t._v("\n    "+t._s(t.info.text3)+"\n  ")],1),n("el-form-item",{attrs:{label:"真实姓名"}},[n("el-input",{attrs:{clearable:""},model:{value:t.form.realName,callback:function(e){t.$set(t.form,"realName",e)},expression:"form.realName"}}),t._v("\n    "+t._s(t.info.text4)+"\n  ")],1),n("el-form-item",{attrs:{label:"用户密码"}},[n("el-input",{attrs:{clearable:"",type:"password"},model:{value:t.form.userPwd,callback:function(e){t.$set(t.form,"userPwd",e)},expression:"form.userPwd"}}),t._v("\n    "+t._s(t.info.text5)+"\n  ")],1),n("el-form-item",{attrs:{label:"确认密码"}},[n("el-input",{attrs:{clearable:"",type:"password"},model:{value:t.form.password2,callback:function(e){t.$set(t.form,"password2",e)},expression:"form.password2"}}),t._v("\n    "+t._s(t.info.text6)+"\n  ")],1),n("el-form-item",{attrs:{label:"联系电话"}},[n("el-input",{attrs:{clearable:""},model:{value:t.form.userPhone,callback:function(e){t.$set(t.form,"userPhone",e)},expression:"form.userPhone"}}),t._v("\n    "+t._s(t.info.text7)+"\n  ")],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",disabled:t.isValid},on:{click:t.onSubmit}},[t._v("创建")]),n("el-button",{on:{click:t.onCancel}},[t._v("取消")])],1)],1)},i=[],r=(n("ac6a"),n("8615"),{data:function(){return{form:{account:"",userName:"",realName:"",userPwd:"",password2:"",userPhone:""},info:{text1:"",text3:"",text4:"",text5:"",text6:"",text7:""}}},methods:{onSubmit:function(){var t=this;this.$axios.post("/api/user/register.do",JSON.stringify(this.form),{headers:{"Content-Type":"application/json"}}).then(function(e){0===e.data.status?(t.$alert("注册成功","系统消息",{confirmButtonText:"确认"}),t.onCancel()):1===e.data.status&&t.$alert("注册失败","系统消息",{confirmButtonText:"确认"})}).catch(function(){t.$message.error("出现未知错误")})},onCancel:function(){for(var t in this.form)this.form[t]="";for(var e in setTimeout(500),this.info)this.info[e]=""},checkAccount:function(){var t=this,e=this.form.account,n=this.$qs.stringify({account:e});""===this.info.text1&&sessionStorage.getItem("parkingUserName")!==this.form.account&&(sessionStorage.setItem("parkingUserName",this.form.account),console.log("test"),this.$axios.post("/api/user/checkValid.do",n).then(function(e){1===e.data.status&&(t.info.text1="用户名已存在")}).catch(function(){t.$message.error("出现未知错误")}))}},computed:{isValid:function(){return!Object.values(this.form).every(function(t){return""!==t})||!Object.values(this.info).every(function(t){return""===t})}},watch:{"form.account":function(t){var e=/^[0-9a-zA-Z]*$/;""===t?this.info.text1="该字段不能为空":!e.test(t)||t.length>10||t.length<4?this.info.text1="账号必须为英文可包含数组，且不能有其他字符，长度必须大于4小于10":this.info.text1=""},"form.role":function(t){this.info.text2=""===t?"该字段不能为空":""},"form.userName":function(t){""===t?this.info.text3="该字段不能为空":t.length>10?this.info.text3="昵称长度不能超过10":this.info.text3=""},"form.realName":function(t){""===t?this.info.text4="该字段不能为空":/^[\u0391-\uFFE5]+$/.test(t)?t.length>4||t.length<2?this.info.text4="长度必须大于1小于5":this.info.text4="":this.info.text4="必须为中文"},"form.userPwd":function(t){""===t?this.info.text5="该字段不能为空":t.length<8?this.info.text5="密码长度应大于8":this.info.text5=""},"form.password2":function(t){""===t?this.info.text6="该字段不能为空":this.form.userPwd!==t?this.info.text6="两次密码不一致":this.info.text6=""},"form.userPhone":function(t){""===t?this.info.text7="该字段不能为空":/^[1][3,4,5,7,8][0-9]{9}$/.test(t)?this.info.text7="":this.info.text7="请输入有效电话号码"}}}),s=r,a=(n("3260"),n("2877")),f=Object(a["a"])(s,o,i,!1,null,"208f4647",null);f.options.__file="Register.vue";e["default"]=f.exports},8615:function(t,e,n){var o=n("5ca1"),i=n("504c")(!1);o(o.S,"Object",{values:function(t){return i(t)}})},ac6a:function(t,e,n){for(var o=n("cadf"),i=n("0d58"),r=n("2aba"),s=n("7726"),a=n("32e9"),f=n("84f2"),l=n("2b4c"),c=l("iterator"),u=l("toStringTag"),m=f.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(h),x=0;x<p.length;x++){var d,b=p[x],v=h[b],g=s[b],L=g&&g.prototype;if(L&&(L[c]||a(L,c,m),L[u]||a(L,u,b),f[b]=m,v))for(d in o)L[d]||r(L,d,o[d],!0)}}}]);
//# sourceMappingURL=chunk-0817509e.183b16fd.js.map