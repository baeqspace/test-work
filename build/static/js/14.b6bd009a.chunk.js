(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[14],{486:function(e){e.exports=JSON.parse("{}")},525:function(e,t,s){"use strict";s.r(t),s.d(t,"UserList",(function(){return B}));var a=s(2),n=s(24),c=s.n(n),i=s(17),r=s(92),l=s(81),o=s(82),d=s(103),j=s(102),u=s(0),b=s(268),x=s(192),h=s(105),m=s(521),O=s(518),p=s(236),v=s(507),f=(s(474),s(437)),N=s(523),k=s(467),g=s(444),y=s(485),I=s(451),w=s(449),U=s(527),C=s(528),S=s(529),P=s(530),z=s(453),T=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props,t=e.data,s=e.visible,n=e.close;return Object(a.jsxs)(f.a,{width:300,placement:"right",onClose:n,closable:!1,visible:s,children:[Object(a.jsxs)("div",{className:"text-center mt-3",children:[Object(a.jsx)(N.a,{size:80,src:null===t||void 0===t?void 0:t.img}),Object(a.jsx)("h3",{className:"mt-2 mb-0",children:null===t||void 0===t?void 0:t.name}),Object(a.jsx)("span",{className:"text-muted",children:null===t||void 0===t?void 0:t.personalInfo.title})]}),Object(a.jsx)(k.a,{dashed:!0}),Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)("h6",{className:"text-muted text-uppercase mb-3",children:"Account details"}),Object(a.jsxs)("p",{children:[Object(a.jsx)(g.a,{}),Object(a.jsxs)("span",{className:"ml-3 text-dark",children:["id: ",null===t||void 0===t?void 0:t.id]})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)(y.a,{}),Object(a.jsxs)("span",{className:"ml-3 text-dark",children:["Born in ",null===t||void 0===t?void 0:t.personalInfo.birthday]})]})]}),Object(a.jsxs)("div",{className:"mt-5",children:[Object(a.jsx)("h6",{className:"text-muted text-uppercase mb-3",children:"CONTACT"}),Object(a.jsxs)("p",{children:[Object(a.jsx)(I.a,{}),Object(a.jsx)("span",{className:"ml-3 text-dark",children:null===t||void 0===t?void 0:t.personalInfo.phoneNumber})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)(w.a,{}),Object(a.jsx)("span",{className:"ml-3 text-dark",children:(null===t||void 0===t?void 0:t.email)?null===t||void 0===t?void 0:t.email:"-"})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)(U.a,{}),Object(a.jsx)("span",{className:"ml-3 text-dark",children:null===t||void 0===t?void 0:t.personalInfo.location})]})]}),Object(a.jsxs)("div",{className:"mt-5",children:[Object(a.jsx)("h6",{className:"text-muted text-uppercase mb-3",children:"Social profiles"}),Object(a.jsxs)("p",{children:[Object(a.jsx)(C.a,{}),Object(a.jsx)("a",{href:"/#",className:"ml-3 text-dark",children:(null===t||void 0===t?void 0:t.personalInfo.facebook)?null===t||void 0===t?void 0:t.personalInfo.facebook:"-"})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)(S.a,{}),Object(a.jsx)("a",{href:"/#",className:"ml-3 text-dark",children:(null===t||void 0===t?void 0:t.personalInfo.twitter)?null===t||void 0===t?void 0:t.personalInfo.twitter:"-"})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)(P.a,{}),Object(a.jsx)("a",{href:"/#",className:"ml-3 text-dark",children:(null===t||void 0===t?void 0:t.personalInfo.instagram)?null===t||void 0===t?void 0:t.personalInfo.instagram:"-"})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)(z.a,{}),Object(a.jsx)("a",{href:"/#",className:"ml-3 text-dark",children:(null===t||void 0===t?void 0:t.personalInfo.site)?null===t||void 0===t?void 0:t.personalInfo.site:"-"})]})]})]})}}]),s}(u.Component),V=function(e){return Object(a.jsx)(N.a,Object(i.a)(Object(i.a)({},e),{},{className:"ant-avatar-".concat(e.type),children:e.text}))},L=function(e){var t=e.name,s=e.suffix,n=e.subTitle,c=e.id,i=e.type,r=e.src,l=e.icon,o=e.size,d=e.shape,j=e.gap,u=e.text,b=e.onNameClick;return Object(a.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[V({icon:l,src:r,type:i,size:o,shape:d,gap:j,text:u}),Object(a.jsxs)("div",{className:"ml-2",children:[Object(a.jsxs)("div",{children:[b?Object(a.jsx)("div",{onClick:function(){return b({name:t,subTitle:n,src:r,id:c})},className:"avatar-status-name clickable",children:t}):Object(a.jsx)("div",{className:"avatar-status-name",children:t}),Object(a.jsx)("span",{children:s})]}),Object(a.jsx)("div",{className:"text-muted avatar-status-subtitle",children:n})]})]})},A=(s(486),s(104)),D=s(19),J=s(468),B=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={users:[],userProfileVisible:!1,selectedUser:null,loader:!1},e.deleteUser=function(t){e.setState({users:e.state.users.filter((function(e){return e.id!==t}))}),b.b.success({content:"Deleted user ".concat(t),duration:2})},e.showUserProfile=function(t){e.setState({userProfileVisible:!0,selectedUser:t})},e.closeUserProfile=function(){e.setState({userProfileVisible:!1,selectedUser:null})},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState(Object(i.a)(Object(i.a)({},this.state),{},{loader:!0})),e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return e.next=5,e.sent.json();case 5:t=e.sent,this.setState(Object(i.a)(Object(i.a)({},this.state),{},{users:t})),this.setState(Object(i.a)(Object(i.a)({},this.state),{},{loader:!1}));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,s=t.users,n=t.userProfileVisible,c=t.selectedUser,i=t.loader,r=[{title:"User",dataIndex:"name",render:function(e,t){return Object(a.jsx)("div",{className:"d-flex",children:Object(a.jsx)(L,{src:t.img,name:t.name,subTitle:t.email})})},sorter:{compare:function(e,t){return(e=e.name.toLowerCase())>(t=t.name.toLowerCase())?-1:t>e?1:0}}},{title:"Username",dataIndex:"username",sorter:{compare:function(e,t){return e.role.length-t.role.length}}},{title:"Phone",dataIndex:"phone",sorter:{compare:function(e,t){return e.status.length-t.status.length}}},{title:"Website",dataIndex:"website",sorter:{compare:function(e,t){return e.status.length-t.status.length}}},{title:"",dataIndex:"actions",render:function(t,s){return Object(a.jsxs)("div",{className:"text-right",children:[Object(a.jsx)(x.a,{title:"View",children:Object(a.jsx)(J.Link,{to:"".concat(D.c,"/main/clients/editProfile/").concat(s.id),children:Object(a.jsx)(h.a,{type:"primary",className:"mr-2",icon:Object(a.jsx)(p.a,{}),size:"small"})})}),Object(a.jsx)(x.a,{title:"Delete",children:Object(a.jsx)(h.a,{danger:!0,icon:Object(a.jsx)(v.a,{}),onClick:function(){e.deleteUser(s.id)},size:"small"})})]})}}];return Object(a.jsxs)(m.a,{bodyStyle:{padding:"0px"},children:[i&&Object(a.jsx)(A.a,{}),Object(a.jsx)(O.a,{columns:r,dataSource:s,rowKey:"id"}),Object(a.jsx)(T,{data:c,visible:n,close:function(){e.closeUserProfile()}})]})}}]),s}(u.Component);t.default=B}}]);
//# sourceMappingURL=14.b6bd009a.chunk.js.map