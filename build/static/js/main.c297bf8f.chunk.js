(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,t,a){e.exports=a(347)},146:function(e,t,a){},148:function(e,t,a){},158:function(e,t,a){},160:function(e,t,a){},318:function(e,t){},347:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(21),r=a.n(i),o=(a(146),a(14)),l=a(15),c=a(17),g=a(16),m=a(18),d=a(8),u=(a(148),a(128)),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(g.a)(t).call(this,e))).state={active:!0},a.toggleClass=a.toggleClass.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"toggleClass",value:function(){this.setState({active:!1})}},{key:"render",value:function(){var e=this;return s.a.createElement(u.CSSTransition,{in:this.state.active,timeout:{appear:1e3,exit:1500},appear:!0,classNames:"animation",unmountOnExit:!0,onExited:function(){e.props.loadingToggle()}},s.a.createElement("button",{onClick:this.toggleClass,className:"div"},s.a.createElement("div",{className:"div"},s.a.createElement("p",{className:"event_desc"},"START CHAT"))))}}]),t}(s.a.Component),p=(a(158),a(160),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;setTimeout(function(){e.props.visibilityToggle()},1501)}},{key:"render",value:function(){return this.props.loading?s.a.createElement("div",null,s.a.createElement("div",{className:"loading_logo_container"},s.a.createElement("div",{className:"circles_container"},s.a.createElement("div",{className:"circle b_circle"},s.a.createElement("div",{className:"circle onstack"},s.a.createElement("ul",{className:"circle-container"},s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(100deg) translate(15vh) rotate(-100deg) rotateZ(6deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(120deg) translate(15vh) rotate(-120deg) rotateZ(29deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(140deg) translate(15vh) rotate(-140deg) rotateZ(50deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(160deg) translate(15vh) rotate(-160deg) rotateZ(72deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(180deg) translate(15vh) rotate(-180deg) rotateZ(91deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(200deg) translate(15vh) rotate(-200deg) rotateZ(112deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(220deg) translate(15vh) rotate(-220deg) rotateZ(129deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(240deg) translate(15vh) rotate(-240deg) rotateZ(150deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(260deg) translate(15vh) rotate(-260deg) rotateZ(169deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(280deg) translate(15vh) rotate(-280deg) rotateZ(189deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(300deg) translate(15vh) rotate(-300deg) rotateZ(211deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(320deg) translate(15vh) rotate(-320deg) rotateZ(231deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(340deg) translate(15vh) rotate(-340deg) rotateZ(247deg)"}})),s.a.createElement("div",{className:"circle m_circle"},s.a.createElement("div",{className:"logo"},s.a.createElement("div",null,"B ",s.a.createElement("span",{className:"logo_it"},"IT")),s.a.createElement("div",null,"C ",s.a.createElement("span",{className:"logo_hat"},"HAT"))))))))):null}}]),t}(s.a.Component)),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(g.a)(t).call(this,e))).state={loading:!1},a.loadingToggle=a.loadingToggle.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"loadingToggle",value:function(){this.setState({loading:!0})}},{key:"render",value:function(){return this.props.visibility?null:s.a.createElement(s.a.Fragment,null,s.a.createElement(h,{loading:this.state.loading,loadingToggle:this.loadingToggle}),s.a.createElement(p,{visibilityToggle:this.props.visibilityToggle,visibility:this.props.visibility,loading:this.state.loading}))}}]),t}(s.a.Component),f=a(77),v=a(19),O=a(39),y=a.n(O),E=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return s.a.createElement("div",{className:t.root,elevation:1},s.a.createElement("ul",{className:t.messageList},this.props.messages.map(function(a,n,i){return s.a.createElement("li",{tabIndex:-1,ref:n+1===i.length?e.props.messageRef:void 0,className:t.noOutline,key:a.id},s.a.createElement(y.a,{className:a.fromStr?t.strMessagesCard:t.myMessagesCard},s.a.createElement("p",{className:a.fromStr?t.strMessage:t.message},a.text)))})))}}]),t}(s.a.Component),j=Object(v.withStyles)(function(e){return{root:{minWidth:"100vw",position:"fixed",top:"8vh",maxHeight:"73%",overflow:"scroll",overflowX:"hidden","&::-webkit-scrollbar":{background:"transparent"}},myMessagesCard:Object(f.a)({minWidth:"50vw",maxWidth:"50vw",marginTop:"20px"},e.mixins.gutters(),{paddingTop:".2px",paddingBottom:".2px",marginLeft:"38vw",wordWrap:"break-word",background:"#336242"}),strMessagesCard:Object(f.a)({minWidth:"50vw",maxWidth:"50vw",marginTop:"20px"},e.mixins.gutters(),{paddingTop:".2px",paddingBottom:".2px",wordWrap:"break-word",background:"#ffffff"}),message:{color:"white",fontSize:"15px",outline:"none"},strMessage:{color:"black",fontSize:"17px",outline:"none"},noOutline:{outline:"none"},messageList:{}}})(E),x=a(55),w=a.n(x),S=a(56),T=a.n(S),C=a(29),k=a.n(C),N=a(40),M=a.n(N),R=a(57),B=a.n(R),F=a(137),Z=a.n(F),I=a(136),P=a.n(I),W=a(35),D=a.n(W),_=a(131),z=a.n(_),A=a(132),H=a.n(A),L=a(133),V=a.n(L),K=a(54),G=a.n(K),J=a(130),U=a.n(J),q=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement("div",null,s.a.createElement(U.a,{checked:this.props.switchOn,onChange:this.props.switchToggle}),s.a.createElement(k.a,{classes:{root:e.root}},"Opposite Sex"))}}]),t}(s.a.Component),X=Object(v.withStyles)({root:{display:"inline",fontSize:"18px"}})(q),$=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(g.a)(t).call(this,e))).switchToggle=function(){a.setState({switchOn:!a.state.switchOn})},a.state={switchOn:!1},a.switchToggle=a.switchToggle.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement("div",null,s.a.createElement(G.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"lg","aria-labelledby":"confirmation-dialog-title",open:this.props.dialogOpen,classes:{paper:e.paper}},s.a.createElement(z.a,{id:"confirmation-dialog-title"},"Sexual Preference"),s.a.createElement(H.a,{classes:{root:e.root}},s.a.createElement(X,{switchOn:this.state.switchOn,switchToggle:this.switchToggle})),s.a.createElement(V.a,null,s.a.createElement(D.a,{onClick:this.props.dialogToggle,color:"primary"},"Ok"))))}}]),t}(s.a.Component),Q=Object(v.withStyles)(function(e){return{root:{display:"flex"},paper:{width:"70%",maxHeight:435}}})($),Y=a(135),ee=a.n(Y),te=a(134),ae=a.n(te);function ne(e){return s.a.createElement(ae.a,Object.assign({direction:"up"},e))}var se=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement("div",null,s.a.createElement(G.a,{fullScreen:!0,open:this.props.donateOpen,TransitionComponent:ne},s.a.createElement(w.a,{className:e.appBar,color:"primary"},s.a.createElement(T.a,null,s.a.createElement(M.a,{color:"secondary",onClick:this.props.donateToggle,"aria-label":"Close"},s.a.createElement(ee.a,null)),s.a.createElement(k.a,{variant:"h4",color:"secondary",className:e.flex,align:"center"},"BitChat"))),s.a.createElement("h2",{style:{color:"black",textAlign:"center",fontSize:"60px",paddingTop:"20px",fontWeight:"400"}}," Donate ")))}}]),t}(s.a.Component),ie=Object(v.withStyles)({appBar:{position:"fixed",top:"0px"},flex:{flex:1,marginRight:"50px"}})(se),re=Object(v.createMuiTheme)({palette:{primary:{main:"#000000"},secondary:{main:"#d5b138",custom:"#ff0000"}},typography:{useNextVariants:!0}}),oe=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).state={auth:!0,anchorEl:null,dialogOpen:!1,donateOpen:!1},a.handleMenu=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.dialogToggle=function(){a.setState({dialogOpen:!a.state.dialogOpen,anchorEl:null})},a.donateToggle=function(){a.setState({donateOpen:!a.state.donateOpen,anchorEl:null})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.auth,n=t.anchorEl,i=Boolean(n);return s.a.createElement("div",{className:e.root},s.a.createElement(v.MuiThemeProvider,{theme:re},s.a.createElement(w.a,{className:e.appBarPosition,color:"primary"},s.a.createElement(T.a,null,s.a.createElement(k.a,{variant:"h4",color:"secondary",align:"center",className:e.grow},"BIT Chat"),a&&s.a.createElement("div",null,s.a.createElement(M.a,{"aria-owns":i?"menu-appbar":void 0,"aria-haspopup":"true",onClick:this.handleMenu,color:"secondary"},s.a.createElement(P.a,null)),s.a.createElement(Z.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:this.handleClose},s.a.createElement(B.a,{onClick:this.dialogToggle},"Sexual Preference"),s.a.createElement(B.a,{onClick:this.donateToggle},"Donate"),s.a.createElement(B.a,{onClick:this.donateToggle},"AboutUS")),s.a.createElement(Q,{dialogToggle:this.dialogToggle,dialogOpen:this.state.dialogOpen}),s.a.createElement(ie,{donateToggle:this.donateToggle,donateOpen:this.state.donateOpen}))))))}}]),t}(s.a.Component),le=Object(v.withStyles)({root:{flexGrow:1},grow:{flexGrow:1,marginLeft:"50px"},appBarPosition:{position:"fixed",top:"0px"}})(oe),ce=a(140),ge=a.n(ce),me=a(139),de=a.n(me),ue=a(138),he=a.n(ue)()(),pe=Object(v.createMuiTheme)({palette:{primary:{main:"#336242"},secondary:{main:"#ffffff"}},typography:{useNextVariants:!0}}),be=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(g.a)(t).call(this,e))).state={value:"STOP",message:"",firstMessage:!1},he.on("chatMessage",function(e){a.props.addStrMessage(e)}),a.buttonToggle=a.buttonToggle.bind(Object(d.a)(Object(d.a)(a))),a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a.sendOnEnter=a.sendOnEnter.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(e){e.target?(e.preventDefault(),this.setState({message:""}),this.state.message.trim().length>0&&(this.props.addMessageFunc(this.state.message),he.emit("chatMessage",this.state.message),this.setState({firstMessage:!0}))):(this.props.addMessageFunc(e),he.emit("chatMessage",e),this.setState({message:"",firstMessage:!0}))}},{key:"sendOnEnter",value:function(e){13===e.keyCode&&!1===e.shiftKey&&(e.preventDefault(),e.target.value&&e.target.value.toString().trim().length>0&&this.handleSubmit(e.target.value))}},{key:"handleChange",value:function(e){this.setState({message:e.target.value})}},{key:"buttonToggle",value:function(){"STOP"===this.state.value?this.setState({value:"Really?"}):"Really?"===this.state.value?this.setState({value:"New Chat"}):this.setState({value:"STOP",firstMessage:!1})}},{key:"render",value:function(){var e=this.props.classes;return s.a.createElement(v.MuiThemeProvider,{theme:pe},s.a.createElement("form",{className:e.container,noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},s.a.createElement(D.a,{onClick:this.buttonToggle,variant:"contained",color:"primary","aria-label":"Stop/New-Chat",className:e.buttonChat},this.state.value),s.a.createElement(de.a,{inputRef:this.props.myRefProp,id:"outlined-required",label:this.state.firstMessage?"Type your message":"Say hello to stranger",multiline:!0,onChange:this.handleChange,rowsMax:"4",value:this.state.message,className:e.textField,margin:"dense",variant:"outlined",onKeyDown:this.sendOnEnter}),s.a.createElement(D.a,{variant:"fab",type:"submit",size:"small",color:"primary","aria-label":"send",className:e.buttonSend},s.a.createElement(ge.a,{className:e.rightIcon},"send"))))}}]),t}(s.a.Component),fe=Object(v.withStyles)(function(e){return{container:{background:"#ffffff",position:"fixed",bottom:"0px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-end",width:"99.99%"},textField:{margin:e.spacing.unit,marginBottom:"2px",width:"70%"},buttonSend:{marginBottom:"2px",marginRight:e.spacing.unit,color:"#ffffff ",width:"50px"},buttonChat:{background:"#336242",margin:e.spacing.unit,color:"#ffffff"},rightIcon:{transform:"rotate(333deg)"}}})(be),ve=[],Oe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(g.a)(t).call(this,e))).setFocusOnMessage=function(){a.messageRef&&a.messageRef.current.scrollIntoView(!1)},a.setFocusOnInput=function(){a.inputRef&&a.inputRef.focus()},a.createInputRef=function(e){return a.inputRef=e},a.state={messages:ve},a.messageRef=s.a.createRef(),a.addMessage=a.addMessage.bind(Object(d.a)(Object(d.a)(a))),a.addStrMessage=a.addStrMessage.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"addMessage",value:function(e){var t=this;this.setState(function(a){var n=a.messages;console.log(t.inputRef);var s={text:e,id:Date.now()};return n.push(s),{messages:n}},this.setFocusOnMessage)}},{key:"addStrMessage",value:function(e){var t=this;this.setState(function(){var a={text:e,id:Date.now(),fromStr:!0};return t.state.messages.push(a)},this.setFocusOnMessage)}},{key:"render",value:function(){return this.props.visibility&&(document.body.style.backgroundColor="#fff7ee"),this.props.visibility?s.a.createElement(s.a.Fragment,null,s.a.createElement(le,null),s.a.createElement(j,{messageRef:this.messageRef,messages:this.state.messages,addMessageFunc:this.addMessage,addStrMessage:this.addStrMessage}),s.a.createElement(fe,{myRefProp:this.createInputRef,addMessageFunc:this.addMessage,addStrMessage:this.addStrMessage})):null}}]),t}(s.a.Component),ye=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(g.a)(t).call(this,e))).state={visibility:!1},a.visibilityToggle=a.visibilityToggle.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"visibilityToggle",value:function(){this.setState({visibility:!0})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(b,{visibility:this.state.visibility,visibilityToggle:this.visibilityToggle}),s.a.createElement(Oe,{visibility:this.state.visibility}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[141,2,1]]]);
//# sourceMappingURL=main.c297bf8f.chunk.js.map