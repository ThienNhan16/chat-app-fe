"use strict";(self.webpackChunkchat=self.webpackChunkchat||[]).push([[772],{39438:function(e,n,t){t(47313);var r=t(57829),i=t(45064),o=t(35898),c=t(48119),a=t(61113),s=t(17592),l=t(19860),d=t(17551),u=t(85554),p=t(1650),h=t(46417),x=(0,s.ZP)(r.Z)((function(e){e.theme;return{"&:hover":{cursor:"pointer"}}})),g=(0,s.ZP)(i.Z)((function(e){var n=e.theme;return{"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(n.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}));n.Z=function(e){var n=e.img,t=e.name,r=e.msg,s=e.time,f=e.unread,j=e.online,Z=e.id,m=(0,u.I0)(),b=(0,u.v9)((function(e){return e.app})).room_id,v=null===b||void 0===b?void 0:b.toString(),w=+v===Z;v||(w=!1);var C,k,I=(0,l.Z)();return(0,h.jsx)(x,{onClick:function(){m((0,p.ND)({room_id:Z}))},sx:{width:"100%",borderRadius:1,backgroundColor:w?"light"===I.palette.mode?(0,d.Fq)(I.palette.primary.main,.5):I.palette.primary.main:"light"===I.palette.mode?"#fff":I.palette.background.paper},p:2,children:(0,h.jsxs)(o.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,h.jsxs)(o.Z,{direction:"row",spacing:2,children:[" ",j?(0,h.jsx)(g,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:(0,h.jsx)(c.Z,{alt:t,src:n})}):(0,h.jsx)(c.Z,{alt:t,src:n}),(0,h.jsxs)(o.Z,{spacing:.3,children:[(0,h.jsx)(a.Z,{variant:"subtitle2",children:t}),(0,h.jsx)(a.Z,{variant:"caption",children:(C=r,k=20,(null===C||void 0===C?void 0:C.length)>k?"".concat(null===C||void 0===C?void 0:C.slice(0,k),"..."):C)})]})]}),(0,h.jsxs)(o.Z,{spacing:2,alignItems:"center",children:[(0,h.jsx)(a.Z,{sx:{fontWeight:600},variant:"caption",children:s}),(0,h.jsx)(i.Z,{className:"unread-count",color:"primary",badgeContent:f})]})]})})}},44591:function(e,n,t){t.d(n,{ol:function(){return o},cB:function(){return c},el:function(){return s}});var r=t(17592),i=t(17551),o=(0,r.ZP)("div")((function(e){var n=e.theme;return{position:"relative",borderRadius:20,backgroundColor:(0,i.Fq)(n.palette.background.paper,1),marginRight:n.spacing(2),marginLeft:0,width:"100%"}})),c=(0,r.ZP)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),a=t(54882),s=(0,r.ZP)(a.ZP)((function(e){var n=e.theme;return{color:"inherit","& .MuiInputBase-input":{padding:n.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(n.spacing(4),")"),width:"100%"}}}))},21772:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var r=t(1413),i=t(29439),o=t(47313),c=t(57829),a=t(35898),s=t(61113),l=t(47131),d=t(69099),u=t(19536),p=t(79717),h=t(87e3),x=t(62798),g=t(32398),f=t(62677),j=t(19860),Z=t(67250),m=t(25599),b=t(56355),v=t(46417),w=function(){var e=(0,j.Z)(),n=o.useState(0),t=(0,i.Z)(n,2),r=t[0],s=t[1];return(0,v.jsx)(c.Z,{sx:{zIndex:10,position:"absolute",bottom:0,width:"100vw",backgroundColor:e.palette.background.paper,boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)"},children:(0,v.jsxs)(a.Z,{sx:{width:"100%"},direction:"row",alignItems:"center",justifyContent:"space-between",spacing:2,p:2,children:[b.u5.map((function(n){return n.index===r?(0,v.jsx)(c.Z,{sx:{backgroundColor:e.palette.primary.main,borderRadius:1.5},p:1,children:(0,v.jsx)(l.Z,{sx:{width:"max-content",color:"#ffffff"},children:n.icon})}):(0,v.jsx)(l.Z,{onClick:function(){var e;e=n.index,s(e)},sx:{width:"max-content",color:"light"===e.palette.mode?"#080707":e.palette.text.primary},children:n.icon})})),(0,v.jsx)(m.Z,{})]})})},C=t(39438),k=t(44591),I=t(50301),y=t(66149),_=t(28485),R=t(65280),S=t(96467),F=t(85554),q=t(1650),P=t(45064),N=t(48119),E=t(17592),W=t(13425),z=t(77580),B=window.localStorage.getItem("user_id"),O=(0,E.ZP)(c.Z)((function(e){e.theme;return{"&:hover":{cursor:"pointer"}}})),A=(0,E.ZP)(P.Z)((function(e){var n=e.theme;return{"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(n.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}})),M=function(e){var n=e.img,t=e.firstName,r=e.lastName,i=e.online,o=e._id,c=(0,j.Z)(),l="".concat(t," ").concat(r);return(0,v.jsx)(O,{sx:{width:"100%",borderRadius:1,backgroundColor:c.palette.background.paper},p:2,children:(0,v.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,v.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:2,children:[" ",i?(0,v.jsx)(A,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:(0,v.jsx)(N.Z,{alt:l,src:n})}):(0,v.jsx)(N.Z,{alt:l,src:n}),(0,v.jsx)(a.Z,{spacing:.3,children:(0,v.jsx)(s.Z,{variant:"subtitle2",children:l})})]}),(0,v.jsx)(a.Z,{direction:"row",spacing:2,alignItems:"center",children:(0,v.jsx)(d.Z,{onClick:function(){z.W.emit("friend_request",{to:o,from:B},(function(){alert("request sent")}))},children:"Send Request"})})]})})},G=function(e){var n=e.img,t=e.firstName,r=e.lastName,i=(e.incoming,e.missed,e.online),o=e.id,c=(0,j.Z)(),l="".concat(t," ").concat(r);return(0,v.jsx)(O,{sx:{width:"100%",borderRadius:1,backgroundColor:c.palette.background.paper},p:2,children:(0,v.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,v.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:2,children:[" ",i?(0,v.jsx)(A,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:(0,v.jsx)(N.Z,{alt:l,src:n})}):(0,v.jsx)(N.Z,{alt:l,src:n}),(0,v.jsx)(a.Z,{spacing:.3,children:(0,v.jsx)(s.Z,{variant:"subtitle2",children:l})})]}),(0,v.jsx)(a.Z,{direction:"row",spacing:2,alignItems:"center",children:(0,v.jsx)(d.Z,{onClick:function(){z.W.emit("accept_request",{request_id:o})},children:"Accept Request"})})]})})},H=function(e){var n=e.img,t=e.firstName,r=e.lastName,i=(e.incoming,e.missed,e.online),o=e._id,c=(0,j.Z)(),d="".concat(t," ").concat(r);return(0,v.jsx)(O,{sx:{width:"100%",borderRadius:1,backgroundColor:c.palette.background.paper},p:2,children:(0,v.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,v.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:2,children:[" ",i?(0,v.jsx)(A,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:(0,v.jsx)(N.Z,{alt:d,src:n})}):(0,v.jsx)(N.Z,{alt:d,src:n}),(0,v.jsx)(a.Z,{spacing:.3,children:(0,v.jsx)(s.Z,{variant:"subtitle2",children:d})})]}),(0,v.jsx)(a.Z,{direction:"row",spacing:2,alignItems:"center",children:(0,v.jsx)(l.Z,{onClick:function(){z.W.emit("start_conversation",{to:o,from:B})},children:(0,v.jsx)(W.Z,{})})})]})})},L=o.forwardRef((function(e,n){return(0,v.jsx)(I.Z,(0,r.Z)({direction:"up",ref:n},e))})),T=function(){var e=(0,F.I0)(),n=(0,F.v9)((function(e){return e.app})).users;return(0,o.useEffect)((function(){e((0,q.j4)())}),[]),(0,v.jsx)(v.Fragment,{children:n.map((function(e,n){return(0,v.jsx)(M,(0,r.Z)({},e),n)}))})},D=function(){var e=(0,F.I0)(),n=(0,F.v9)((function(e){return e.app})).friends;return(0,o.useEffect)((function(){e((0,q.f6)())}),[]),(0,v.jsx)(v.Fragment,{children:n.map((function(e,n){return(0,v.jsx)(H,(0,r.Z)({},e),n)}))})},J=function(){var e=(0,F.I0)(),n=(0,F.v9)((function(e){return e.app})).friendRequests;return(0,o.useEffect)((function(){e((0,q.HG)())}),[]),(0,v.jsx)(v.Fragment,{children:n.map((function(e,n){return(0,v.jsx)(G,(0,r.Z)((0,r.Z)({},e.sender),{},{id:e._id}),n)}))})},K=function(e){var n=e.open,t=e.handleClose,r=o.useState(0),c=(0,i.Z)(r,2),s=c[0],l=c[1];return(0,v.jsxs)(y.Z,{fullWidth:!0,maxWidth:"xs",open:n,TransitionComponent:L,keepMounted:!0,onClose:t,"aria-describedby":"alert-dialog-slide-description",sx:{p:4},children:[(0,v.jsx)(a.Z,{p:2,sx:{width:"100%"},children:(0,v.jsxs)(_.Z,{value:s,onChange:function(e,n){l(n)},centered:!0,children:[(0,v.jsx)(R.Z,{label:"Explore"}),(0,v.jsx)(R.Z,{label:"Friends"}),(0,v.jsx)(R.Z,{label:"Requests"})]})}),(0,v.jsx)(S.Z,{children:(0,v.jsx)(a.Z,{sx:{height:"100%"},children:(0,v.jsx)(a.Z,{spacing:2.4,children:function(){switch(s){case 0:return(0,v.jsx)(T,{});case 1:return(0,v.jsx)(D,{});case 2:return(0,v.jsx)(J,{})}}()})})})]})},Q=t(14275),U=window.localStorage.getItem("user_id"),V=function(){var e=(0,j.Z)(),n=(0,Z.Z)("up","md"),t=(0,F.I0)(),m=(0,F.v9)((function(e){return e.conversation.direct_chat})).conversations;(0,o.useEffect)((function(){z.W.emit("get_direct_conversations",{user_id:U},(function(e){console.log(e),t((0,Q.Jj)({conversations:e}))}))}),[]);var b=(0,o.useState)(!1),I=(0,i.Z)(b,2),y=I[0],_=I[1];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(c.Z,{sx:{position:"relative",height:"100%",width:n?320:"100vw",backgroundColor:"light"===e.palette.mode?"#F8FAFF":e.palette.background,boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)"},children:[!n&&(0,v.jsx)(w,{}),(0,v.jsxs)(a.Z,{p:3,spacing:2,sx:{maxHeight:"100vh"},children:[(0,v.jsxs)(a.Z,{alignItems:"center",justifyContent:"space-between",direction:"row",children:[(0,v.jsx)(s.Z,{variant:"h5",children:"Chats"}),(0,v.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,v.jsx)(l.Z,{onClick:function(){_(!0)},sx:{width:"max-content"},children:(0,v.jsx)(p.Z,{})}),(0,v.jsx)(l.Z,{sx:{width:"max-content"},children:(0,v.jsx)(h.Z,{})})]})]}),(0,v.jsx)(a.Z,{sx:{width:"100%"},children:(0,v.jsxs)(k.ol,{children:[(0,v.jsx)(k.cB,{children:(0,v.jsx)(x.Z,{color:"#709CE6"})}),(0,v.jsx)(k.el,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]})}),(0,v.jsxs)(a.Z,{spacing:1,children:[(0,v.jsxs)(a.Z,{direction:"row",spacing:1.5,alignItems:"center",children:[(0,v.jsx)(g.Z,{size:24}),(0,v.jsx)(d.Z,{variant:"text",children:"Archive"})]}),(0,v.jsx)(u.Z,{})]}),(0,v.jsx)(a.Z,{sx:{flexGrow:1,overflow:"scroll",height:"100%"},children:(0,v.jsx)(f.l,{timeout:500,clickOnTrack:!1,children:(0,v.jsxs)(a.Z,{spacing:2.4,children:[(0,v.jsx)(s.Z,{variant:"subtitle2",sx:{color:"#676667"},children:"All Chats"}),m.filter((function(e){return!e.pinned})).map((function(e,n){return(0,v.jsx)(C.Z,(0,r.Z)({},e))}))]})})})]})]}),y&&(0,v.jsx)(K,{open:y,handleClose:function(){_(!1)}})]})}}}]);