(this["webpackJsonprapid-values"]=this["webpackJsonprapid-values"]||[]).push([[0],{101:function(e,t,n){},103:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),s=n(22),i=n.n(s),o=n(30),l=n(31),j=n(37),d=n(36),b=(n(76),n(115)),u=n(117),x=n(116),h=n(20),O=n(41),m=n.n(O),p=n(107),f=Object(p.a)((function(e){return{arrow:{color:e.palette.action.active,marginTop:5,"&:hover":{color:"rgb(195 132 236 / 100%)"}},userItemContainer:{border:"1px solid rgb(195 132 236 / 30%)",borderRadius:3,padding:"10px 12px 10px 25px",boxShadow:"0 0 10px 5px rgba(0,0,0,0.05)",userSelect:"none",transition:"250ms",backfaceVisibility:"hidden","-webkit-font-smoothing":"subpixel-antialiased","&:hover":{boxShadow:"0 0 10px 5px rgb(195 132 236 / 24%)"}}}}));var g=function(e){var t=e.user,n=f();return Object(a.jsx)(b.a,{item:!0,xs:12,md:3,children:Object(a.jsx)(x.a,{className:n.userItemContainer,children:Object(a.jsxs)(b.a,{container:!0,directio:"row",alignContent:"center",alignItems:"center",children:[Object(a.jsxs)(b.a,{item:!0,xs:!0,children:[Object(a.jsx)(u.a,{style:{fontSize:18,fontWeight:500},children:t.name}),Object(a.jsx)(u.a,{style:{fontSize:14,marginTop:"-5px",color:"grey"},children:t.company.name})]}),Object(a.jsx)(b.a,{item:!0,xs:"auto",children:Object(a.jsx)(h.b,{to:"".concat("/rapid-values","/userinfo/").concat(t.id),children:Object(a.jsx)(m.a,{className:n.arrow})})})]})})})},S=n(17),v=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=e.users;return t?Object(a.jsxs)(b.a,{container:!0,alignContent:"center",children:[Object(a.jsxs)(b.a,{item:!0,xs:12,style:{marginBottom:30},children:[Object(a.jsx)(u.a,{style:{fontSize:40,marginBottom:0},children:"USERS"}),Object(a.jsx)(u.a,{children:"Select the user to view the details"})]}),Object(a.jsx)(b.a,{item:!0,xs:12,children:Object(a.jsx)(b.a,{container:!0,spacing:3,justify:"flex-start",children:t.map((function(e){return Object(a.jsx)(g,{user:e},e.id)}))})})]}):Object(a.jsx)("div",{children:"Loading..."})}}]),n}(r.Component),y=Object(S.b)((function(e){return{users:e.users}}))(v),C=n(4),E=n(63),N=n.n(E),w=n(27),U=n(21),_={users:null,error:null,selectedUserDetails:null},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USERS_SUCCESS":return Object(U.a)(Object(U.a)({},e),{},{error:null,users:t.payload});case"GET_USERS_FAILED":return Object(U.a)(Object(U.a)({},e),{},{error:t.payload,users:null});case"GET_USER_DETAIL_SUCCESS":return Object(U.a)(Object(U.a)({},e),{},{error:null,selectedUserDetails:t.payload});default:return e}},I=n(64),R=Object(w.c)(T,Object(w.a)(I.a));R.subscribe((function(){}));var L=R,z=function(e){return{type:"GET_USER_DETAIL_SUCCESS",payload:e}},B=function(e){return{type:"GET_USERS_SUCCESS",payload:e}},D=function(e){return{type:"GET_USERS_FAILED",payload:e}},F=n(120),k=n(65),G=n.n(k),A=Object(p.a)((function(e){return{arrow:{color:e.palette.action.active,marginTop:5,fontSize:35,"&:hover":{color:"rgb(195 132 236 / 100%)"}},arrowSmall:{color:e.palette.action.active,marginLeft:10,marginRight:10},header:{marginLeft:10,fontSize:25,fontWeight:500,marginBottom:10,color:"rgb(195 132 236 / 100%)"},subHeader:{fontSize:18,fontWeight:500,color:"rgb(195 132 236 / 100%)"},text:{fontSize:16,fontWeight:300},detailsContainer:{border:"1px solid rgb(195 132 236 / 30%)",borderRadius:3,padding:20,boxShadow:"0 0 10px 5px rgba(0,0,0,0.05)"},itemContainer:{border:"1px solid rgb(195 132 236 / 30%)",boxShadow:"0 0 10px 5px rgba(0,0,0,0.02)",borderRadius:3,padding:"10px 15px",margin:"5px 10px"}}}));var H=Object(S.b)((function(e){return{selectedUser:e.selectedUserDetails,users:e.users}}))((function(e){var t=Object(C.f)().id,n=Object(S.c)(),c=e.selectedUser,s=e.users,i=A();return Object(r.useEffect)((function(){n(function(e){return function(t){var n=L.getState().users,a=void 0;n&&n.some((function(t){t.id!=e||(a=t)})),t(z(a))}}(t))}),[s]),c?Object(a.jsxs)(b.a,{container:!0,alignContent:"center",children:[Object(a.jsx)(b.a,{item:!0,xs:12,style:{marginBottom:25},children:Object(a.jsxs)(b.a,{container:!0,alignItems:"center",children:[Object(a.jsx)(b.a,{item:!0,xs:"auto",children:Object(a.jsx)(h.b,{to:"/",children:Object(a.jsx)(G.a,{className:i.arrow})})}),Object(a.jsx)(b.a,{item:!0,xs:!0,children:Object(a.jsx)(b.a,{container:!0,direction:"row",alignItems:"center",children:Object(a.jsx)(u.a,{style:{fontSize:40,marginBottom:0,color:"rgb(195 132 236 / 100%)"},children:c.name})})})]})}),Object(a.jsx)(b.a,{item:!0,xs:12,style:{marginBottom:25},children:Object(a.jsxs)(b.a,{container:!0,className:i.detailsContainer,children:[Object(a.jsx)(b.a,{item:!0,xs:12,children:Object(a.jsxs)(F.a,{className:i.itemContainer,children:[Object(a.jsx)(u.a,{className:i.subHeader,children:"Address"}),Object(a.jsx)(u.a,{className:i.text,children:c.address.suite}),Object(a.jsx)(u.a,{className:i.text,children:c.address.street}),Object(a.jsx)(u.a,{className:i.text,children:c.address.city}),Object(a.jsx)(u.a,{className:i.text,children:c.address.zipcode})]})}),Object(a.jsx)(b.a,{item:!0,xs:12,children:Object(a.jsxs)(F.a,{className:i.itemContainer,children:[Object(a.jsx)(u.a,{className:i.subHeader,children:"Phone"}),Object(a.jsx)(u.a,{className:i.text,children:c.phone})]})}),Object(a.jsx)(b.a,{item:!0,xs:12,children:Object(a.jsxs)(F.a,{className:i.itemContainer,children:[Object(a.jsx)(u.a,{className:i.subHeader,children:"Website"}),Object(a.jsx)(u.a,{className:i.text,children:c.website})]})}),Object(a.jsx)(b.a,{item:!0,xs:12,children:Object(a.jsxs)(F.a,{className:i.itemContainer,children:[Object(a.jsx)(u.a,{className:i.subHeader,children:"Company Name"}),Object(a.jsx)(u.a,{className:i.text,children:c.company.name})]})})]})})]}):Object(a.jsx)("div",{children:"Loading..."})})),W=n(118),P=Object(W.a)((function(e){return{root:{height:"80%"}}}));var J=function(){var e=P(),t=Object(S.c)();return Object(r.useEffect)((function(){t((function(e){N.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){e(B(t.data))})).catch((function(t){e(D("Failed to get users"))}))}))}),[]),Object(a.jsx)(x.a,{className:e.root,children:Object(a.jsx)(h.a,{children:Object(a.jsxs)(C.c,{children:[Object(a.jsx)(C.a,{exact:!0,path:"".concat("/rapid-values","/"),component:function(e){return Object(a.jsx)(y,{})}}),Object(a.jsx)(C.a,{exact:!0,path:"".concat("/rapid-values","/userinfo/:id"),component:H})]})})})},M=n(66),V=n(119),q=Object(M.a)(),K=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(V.a,{theme:q,children:Object(a.jsx)(S.a,{store:L,children:Object(a.jsx)(J,{})})})}}]),n}(r.Component),Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,122)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(101);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(K,{})}),document.getElementById("root")),Q()},76:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.4499cca7.chunk.js.map