(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,a){e.exports=a(320)},135:function(e,t,a){},137:function(e,t,a){},147:function(e,t,a){},149:function(e,t,a){},315:function(e,t){},320:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(21),r=a.n(o),i=(a(135),a(7)),l=a(8),c=a(11),u=a(9),m=a(10),g=a(5),d=(a(137),a(116)),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={active:!0},a.toggleClass=a.toggleClass.bind(Object(g.a)(Object(g.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"toggleClass",value:function(){this.setState({active:!1})}},{key:"render",value:function(){var e=this;return s.a.createElement(d.CSSTransition,{in:this.state.active,timeout:{appear:1e3,exit:1500},appear:!0,classNames:"animation",unmountOnExit:!0,onExited:function(){e.props.loadingToggle()}},s.a.createElement("button",{onClick:this.toggleClass,className:"div"},s.a.createElement("div",{className:"div"},s.a.createElement("p",{className:"event_desc"},"START CHAT"))))}}]),t}(s.a.Component),h=(a(147),a(149),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;setTimeout(function(){e.props.visibilityToggle()},1501)}},{key:"render",value:function(){return this.props.loading?s.a.createElement("div",null,s.a.createElement("div",{className:"loading_logo_container"},s.a.createElement("div",{className:"circles_container"},s.a.createElement("div",{className:"circle b_circle"},s.a.createElement("div",{className:"circle onstack"},s.a.createElement("ul",{className:"circle-container"},s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(100deg) translate(15vh) rotate(-100deg) rotateZ(6deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(120deg) translate(15vh) rotate(-120deg) rotateZ(29deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(140deg) translate(15vh) rotate(-140deg) rotateZ(50deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(160deg) translate(15vh) rotate(-160deg) rotateZ(72deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(180deg) translate(15vh) rotate(-180deg) rotateZ(91deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(200deg) translate(15vh) rotate(-200deg) rotateZ(112deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(220deg) translate(15vh) rotate(-220deg) rotateZ(129deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(240deg) translate(15vh) rotate(-240deg) rotateZ(150deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(260deg) translate(15vh) rotate(-260deg) rotateZ(169deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(280deg) translate(15vh) rotate(-280deg) rotateZ(189deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(300deg) translate(15vh) rotate(-300deg) rotateZ(211deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(320deg) translate(15vh) rotate(-320deg) rotateZ(231deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(340deg) translate(15vh) rotate(-340deg) rotateZ(247deg)"}})),s.a.createElement("div",{className:"circle m_circle"},s.a.createElement("div",{className:"logo"},s.a.createElement("div",null,"B ",s.a.createElement("span",{className:"logo_it"},"IT")),s.a.createElement("div",null,"C ",s.a.createElement("span",{className:"logo_hat"},"HAT"))))))))):null}}]),t}(s.a.Component)),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={loading:!1},a.loadingToggle=a.loadingToggle.bind(Object(g.a)(Object(g.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"loadingToggle",value:function(){this.setState({loading:!0})}},{key:"render",value:function(){return this.props.visibility?null:s.a.createElement(s.a.Fragment,null,s.a.createElement(p,{loading:this.state.loading,loadingToggle:this.loadingToggle}),s.a.createElement(h,{visibilityToggle:this.props.visibilityToggle,visibility:this.props.visibility,loading:this.state.loading}))}}]),t}(s.a.Component),f=a(74),v=a(12),O=a(40),y=a.n(O),E=a(73),x=a.n(E),j=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return s.a.createElement("div",{className:t.root,elevation:1},s.a.createElement("ul",null,this.props.messages.map(function(a,n,o){return s.a.createElement("li",{tabIndex:-1,ref:n+1===o.length?e.props.messageRef:void 0,className:t.noOutline,key:a.id},s.a.createElement(y.a,{className:a.fromStr?t.strMessagesCard:t.myMessagesCard},a.fromStr&&s.a.createElement(x.a,{className:t.avatar},"S"),!a.fromStr&&s.a.createElement(x.a,{className:t.avatar},"Y"),s.a.createElement("p",{className:a.fromStr?t.strMessage:t.message},a.text)))})))}}]),t}(s.a.Component),S=Object(v.withStyles)(function(e){return{root:{minWidth:"100vw",position:"fixed",top:"9%",maxHeight:"75%",overflow:"scroll",overflowX:"hidden","&::-webkit-scrollbar":{background:"transparent"}},myMessagesCard:Object(f.a)({minWidth:"50vw",maxWidth:"50vw",marginTop:"10px",display:"flex",alignItems:"center"},e.mixins.gutters(),{paddingTop:".2px",paddingBottom:".2px",marginLeft:"38vw",wordBreak:"break-word",background:"#000000"}),strMessagesCard:Object(f.a)({minWidth:"50vw",maxWidth:"50vw",marginTop:"10px",display:"flex",alignItems:"center"},e.mixins.gutters(),{paddingTop:".2px",paddingBottom:".2px",wordBreak:"break-word",background:"#336242"}),message:{color:"#ffffff",fontSize:"13px",display:"inline",outline:"none"},strMessage:{color:"#ffffff",display:"inline",fontSize:"13px",outline:"none"},noOutline:{outline:"none"},avatar:{margin:"10px 10px 10px 0",display:"inline-flex",background:"#d5b138",color:"#000000"}}})(j),w=a(36),T=a.n(w),k=a(37),C=a.n(k),N=a(22),M=a.n(N),B=a(29),I=a.n(B),R=a(55),F=a.n(R),P=a(126),U=a.n(P),Z=a(125),A=a.n(Z),D=a(35),W=a.n(D),z=a(119),_=a.n(z),H=a(120),L=a.n(H),V=a(121),K=a.n(V),Y=a(34),G=a.n(Y),J=a(118),X=a.n(J),$=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement("div",null,s.a.createElement(X.a,{checked:this.props.switchOn,onChange:this.props.switchToggle}),s.a.createElement(M.a,{classes:{root:e.root}},"Opposite Sex"))}}]),t}(s.a.Component),q=Object(v.withStyles)({root:{display:"inline",fontSize:"18px"}})($),Q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).switchToggle=function(){a.setState({switchOn:!a.state.switchOn})},a.state={switchOn:!1},a.switchToggle=a.switchToggle.bind(Object(g.a)(Object(g.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement("div",null,s.a.createElement(G.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"lg","aria-labelledby":"confirmation-dialog-title",open:this.props.dialogOpen,classes:{paper:e.paper}},s.a.createElement(_.a,{id:"confirmation-dialog-title"},"Sexual Preference"),s.a.createElement(L.a,{classes:{root:e.root}},s.a.createElement(q,{switchOn:this.state.switchOn,switchToggle:this.switchToggle})),s.a.createElement(K.a,null,s.a.createElement(W.a,{onClick:this.props.dialogToggle,color:"primary"},"Ok"))))}}]),t}(s.a.Component),ee=Object(v.withStyles)(function(e){return{root:{display:"flex"},paper:{width:"70%",maxHeight:435}}})(Q),te=a(122),ae=a.n(te),ne=a(54),se=a.n(ne);function oe(e){return s.a.createElement(se.a,Object.assign({direction:"up"},e))}var re=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement("div",null,s.a.createElement(G.a,{fullScreen:!0,open:this.props.donateOpen,TransitionComponent:oe},s.a.createElement(T.a,{className:e.appBar,color:"primary"},s.a.createElement(C.a,null,s.a.createElement(I.a,{color:"secondary",onClick:this.props.donateToggle,"aria-label":"Close"},s.a.createElement(ae.a,null)),s.a.createElement(M.a,{variant:"h4",color:"secondary",className:e.flex,align:"center"},"BitChat"))),s.a.createElement("h2",{style:{color:"black",textAlign:"center",fontSize:"60px",paddingTop:"20px",fontWeight:"400"}}," Donate ")))}}]),t}(s.a.Component),ie=Object(v.withStyles)({appBar:{position:"fixed",top:"0px"},flex:{flex:1,marginRight:"50px"}})(re),le=a(124),ce=a.n(le),ue=a(123),me=a.n(ue),ge=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement(me.a,{showLabels:!0,className:e.root},s.a.createElement(M.a,{className:e.footer,variant:"h6",gutterBottom:!0},"Created by Prateek Banga"))}}]),t}(s.a.Component),de=Object(v.withStyles)({root:{width:"100%",background:"black",borderRadius:"10px",position:"absolute",bottom:"2px"},footer:{color:"#d5b138",margin:"auto"}})(ge),pe=Object(v.createMuiTheme)({overrides:{MuiPaper:{root:{backgroundColor:"#000"}}}});function he(e){return s.a.createElement(se.a,Object.assign({direction:"up"},e))}var be=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement("div",null,s.a.createElement(v.MuiThemeProvider,{theme:pe},s.a.createElement(G.a,{fullScreen:!0,open:this.props.aboutUs,TransitionComponent:he},s.a.createElement(I.a,{onClick:this.props.aboutUsToggle,"aria-label":"Close",className:e.ArrowBackIos},s.a.createElement(ce.a,null)),s.a.createElement(M.a,{className:e.Heading,variant:"h3",gutterBottom:!0},"About US"),s.a.createElement(de,null))))}}]),t}(s.a.Component),fe=Object(v.withStyles)({ArrowBackIos:{width:"10%",position:"fixed",top:"47px",color:"#d5b138"},Heading:{textAlign:"center",marginTop:"21px",color:"#d5b138"}})(be),ve=Object(v.createMuiTheme)({palette:{primary:{main:"#000000"},secondary:{main:"#d5b138",custom:"#ff0000"}},typography:{useNextVariants:!0}}),Oe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={auth:!0,anchorEl:null,dialogOpen:!1,donateOpen:!1,aboutUs:!1},a.handleMenu=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.dialogToggle=function(){a.setState({dialogOpen:!a.state.dialogOpen,anchorEl:null})},a.donateToggle=function(){a.setState({donateOpen:!a.state.donateOpen,anchorEl:null})},a.aboutUsToggle=function(){a.setState({aboutUs:!a.state.aboutUs,anchorEl:null})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.auth,n=t.anchorEl,o=Boolean(n);return s.a.createElement("div",{className:e.root},s.a.createElement(v.MuiThemeProvider,{theme:ve},s.a.createElement(T.a,{className:e.appBarPosition,color:"primary"},s.a.createElement(C.a,null,s.a.createElement(M.a,{variant:"h4",color:"secondary",align:"center",className:e.grow},"BIT Chat"),a&&s.a.createElement("div",null,s.a.createElement(I.a,{"aria-owns":o?"menu-appbar":void 0,"aria-haspopup":"true",onClick:this.handleMenu,color:"secondary"},s.a.createElement(A.a,null)),s.a.createElement(U.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:this.handleClose},s.a.createElement(F.a,{onClick:this.dialogToggle},"Sexual Preference"),s.a.createElement(F.a,{onClick:this.donateToggle},"Donate"),s.a.createElement(F.a,{onClick:this.aboutUsToggle},"AboutUS")),s.a.createElement(ee,{dialogToggle:this.dialogToggle,dialogOpen:this.state.dialogOpen}),s.a.createElement(ie,{donateToggle:this.donateToggle,donateOpen:this.state.donateOpen}),s.a.createElement(fe,{aboutUsToggle:this.aboutUsToggle,aboutUs:this.state.aboutUs}))))))}}]),t}(s.a.Component),ye=Object(v.withStyles)({root:{flexGrow:1},grow:{flexGrow:1,marginLeft:"50px"},appBarPosition:{position:"fixed",top:"0px"}})(Oe),Ee=a(128),xe=a.n(Ee),je=a(129),Se=a.n(je),we=a(127),Te=a.n(we).a.connect({autoConnect:!1}),ke=Object(v.createMuiTheme)({palette:{primary:{main:"#000000"},secondary:{main:"#ffffff"}},typography:{useNextVariants:!0}}),Ce=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={value:"STOP",message:"",firstMessage:!1,stateInput:!1,stateButton:!1},Te.on("chatMessage",function(e){a.props.addStrMessage(e)}),Te.on("newChat",function(){a.setState({value:"New Chat",stateInput:!0,stateButton:!0})}),Te.on("closeStrangerSocket",function(){Te.close()}),Te.on("reconnect_attempt",function(e){a.props.addMessageFunc("You have been disconnected because the tab was Idle."),Te.close(),a.setState({value:"New Chat",stateInput:!0,stateButton:!0})}),a.buttonToggle=a.buttonToggle.bind(Object(g.a)(Object(g.a)(a))),a.handleChange=a.handleChange.bind(Object(g.a)(Object(g.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(Object(g.a)(a))),a.sendOnEnter=a.sendOnEnter.bind(Object(g.a)(Object(g.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){Te.open()}},{key:"handleSubmit",value:function(e){e.target?(e.preventDefault(),this.setState({message:""}),this.state.message.trim().length>0&&(this.props.addMessageFunc(this.state.message),Te.emit("chatMessage",this.state.message),this.setState({firstMessage:!0}))):(this.props.addMessageFunc(e),Te.emit("chatMessage",e),this.setState({message:"",firstMessage:!0}))}},{key:"sendOnEnter",value:function(e){13===e.keyCode&&!1===e.shiftKey&&(e.preventDefault(),e.target.value&&e.target.value.toString().trim().length>0&&this.handleSubmit(e.target.value))}},{key:"handleChange",value:function(e){this.setState({message:e.target.value})}},{key:"buttonToggle",value:function(){"STOP"===this.state.value?this.setState({value:"Really?"}):"Really?"===this.state.value?(Te.close(),this.setState({value:"New Chat",stateInput:!0,stateButton:!0}),this.props.addMessageFunc("You have disconnected the chat. Please start a New Chat to start chatting with a random Stranger.")):(this.setState({value:"STOP",firstMessage:!1,stateInput:!1,stateButton:!1}),this.props.clearScreen(),Te.open())}},{key:"render",value:function(){var e=this.props.classes;return s.a.createElement(v.MuiThemeProvider,{theme:ke},s.a.createElement(s.a.Fragment,null,s.a.createElement(xe.a,null),s.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},s.a.createElement(T.a,{position:"fixed",color:"primary",className:e.appBar},s.a.createElement(C.a,{className:e.toolbar},s.a.createElement(W.a,{onClick:this.buttonToggle,variant:"contained",color:"primary","aria-label":"Stop/New-Chat",className:e.buttonChat},this.state.value),s.a.createElement("textarea",{type:"text",cols:"10",rows:"1",placeholder:this.state.firstMessage?"Type your message":"Say hello to stranger",className:e.textField,disabled:this.state.stateInput,value:this.state.message,onChange:this.handleChange,onKeyDown:this.sendOnEnter}),s.a.createElement(W.a,{variant:"fab",type:"submit",size:"small",color:"primary","aria-label":"send",className:e.buttonSend},s.a.createElement(Se.a,{className:e.rightIcon},"send")))))))}}]),t}(s.a.Component),Ne=Object(v.withStyles)(function(e){return{appBar:{top:"auto",bottom:0,background:"#000000"},toolbar:{alignItems:"flex-end"},textField:{boxShadow:"0.5px 0.5px 8px 3px #888888",margin:"auto",width:"100%",borderRadius:"25px",borderColor:"#ffffff",border:"2px",borderStyle:"solid",height:"45px",outline:"none",resize:"none",overflow:"auto","&::-webkit-scrollbar":{background:"transparent"},"&::-webkit-input-placeholder":{fontFamily:"monospace",color:"grey",fontSize:"11px"},paddingBottom:"20px",paddingTop:"10px",paddingRight:"20px",paddingLeft:"20px"},buttonSend:{marginTop:"auto",marginBottom:"auto",marginLeft:"9px",marginRight:"-1.3%",color:"#d5b138",minHeight:"9px",minWidth:"31px",width:"60px",height:"45px"},buttonChat:{marginBottom:"10px",background:"#000000",color:"#d5b138",marginRight:"4px",marginLeft:"-10px"},rightIcon:{marginLeft:"5px",marginBottom:"3px",transform:"rotate(333deg)"}}})(Ce),Me=[],Be=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).setFocusOnMessage=function(){a.messageRef&&a.messageRef.current.scrollIntoView(!1)},a.setFocusOnInput=function(){a.inputRef&&a.inputRef.focus()},a.createInputRef=function(e){return a.inputRef=e},a.clearScreen=function(){a.setState({messages:[]})},a.state={messages:Me},a.messageRef=s.a.createRef(),a.addMessage=a.addMessage.bind(Object(g.a)(Object(g.a)(a))),a.addStrMessage=a.addStrMessage.bind(Object(g.a)(Object(g.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"addMessage",value:function(e){this.setState(function(t){var a=t.messages,n={text:e,id:Date.now()};return a.push(n),{messages:a}},this.setFocusOnMessage)}},{key:"addStrMessage",value:function(e){var t=this;this.setState(function(){var a={text:e,id:Date.now(),fromStr:!0};return t.state.messages.push(a)},this.setFocusOnMessage)}},{key:"render",value:function(){return this.props.visibility&&(document.body.style.backgroundColor="#ffffff"),this.props.visibility?s.a.createElement(s.a.Fragment,null,s.a.createElement(ye,null),s.a.createElement(S,{messageRef:this.messageRef,messages:this.state.messages,addMessageFunc:this.addMessage,addStrMessage:this.addStrMessage}),s.a.createElement(Ne,{myRefProp:this.createInputRef,addMessageFunc:this.addMessage,clearScreen:this.clearScreen,addStrMessage:this.addStrMessage})):null}}]),t}(s.a.Component),Ie=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={visibility:!1},a.visibilityToggle=a.visibilityToggle.bind(Object(g.a)(Object(g.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"visibilityToggle",value:function(){this.setState({visibility:!0})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(b,{visibility:this.state.visibility,visibilityToggle:this.visibilityToggle}),s.a.createElement(Be,{visibility:this.state.visibility}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(Ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[130,2,1]]]);
//# sourceMappingURL=main.89fa0e04.chunk.js.map