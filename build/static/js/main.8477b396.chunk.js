(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){e.exports=a(312)},132:function(e,t,a){},134:function(e,t,a){},212:function(e,t,a){},306:function(e,t){},312:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(21),o=a.n(r),l=(a(132),a(6)),i=a(7),c=a(9),m=a(8),d=a(10),u=a(5),g=(a(134),a(115)),h=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={active:!0},a.toggleClass=a.toggleClass.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"toggleClass",value:function(){this.setState({active:!1})}},{key:"render",value:function(){var e=this;return s.a.createElement(g.CSSTransition,{in:this.state.active,timeout:{appear:1e3,exit:1500},appear:!0,classNames:"animation",unmountOnExit:!0,onExited:function(){e.props.loadingToggle()}},s.a.createElement("button",{onClick:this.toggleClass,className:"div"},s.a.createElement("div",{className:"div"},s.a.createElement("p",{className:"event_desc"},"START CHAT"))))}}]),t}(s.a.Component),p=(a(73),a(74),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;setTimeout(function(){e.props.visibilityToggle()},1501)}},{key:"render",value:function(){return this.props.loading?s.a.createElement("div",null,s.a.createElement("div",{className:"loading_logo_container"},s.a.createElement("div",{className:"circles_container"},s.a.createElement("div",{className:"circle b_circle"},s.a.createElement("div",{className:"circle onstack"},s.a.createElement("ul",{className:"circle-container"},s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(100deg) translate(15vh) rotate(-100deg) rotateZ(6deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(120deg) translate(15vh) rotate(-120deg) rotateZ(29deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(140deg) translate(15vh) rotate(-140deg) rotateZ(50deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(160deg) translate(15vh) rotate(-160deg) rotateZ(72deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(180deg) translate(15vh) rotate(-180deg) rotateZ(91deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(200deg) translate(15vh) rotate(-200deg) rotateZ(112deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(220deg) translate(15vh) rotate(-220deg) rotateZ(129deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(240deg) translate(15vh) rotate(-240deg) rotateZ(150deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(260deg) translate(15vh) rotate(-260deg) rotateZ(169deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(280deg) translate(15vh) rotate(-280deg) rotateZ(189deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(300deg) translate(15vh) rotate(-300deg) rotateZ(211deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(320deg) translate(15vh) rotate(-320deg) rotateZ(231deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(340deg) translate(15vh) rotate(-340deg) rotateZ(247deg)"}})),s.a.createElement("div",{className:"circle m_circle"},s.a.createElement("div",{className:"logo"},s.a.createElement("div",null,"B ",s.a.createElement("span",{className:"logo_it"},"IT")),s.a.createElement("div",null,"C ",s.a.createElement("span",{className:"logo_hat"},"HAT"))))))))):null}}]),t}(s.a.Component)),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={loading:!1},a.loadingToggle=a.loadingToggle.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"loadingToggle",value:function(){this.setState({loading:!0})}},{key:"render",value:function(){return this.props.visibility?null:s.a.createElement(s.a.Fragment,null,s.a.createElement(h,{loading:this.state.loading,loadingToggle:this.loadingToggle}),s.a.createElement(p,{visibilityToggle:this.props.visibilityToggle,visibility:this.props.visibility,loading:this.state.loading}))}}]),t}(s.a.Component),f=a(69),v=a(14),E=a(32),y=a.n(E),x=a(67),O=a.n(x),N=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return 0!==this.props.messages.length?s.a.createElement("div",{className:t.root,elevation:1},s.a.createElement("ul",null,this.props.messages.map(function(a,n,r){return s.a.createElement("li",{tabIndex:-1,ref:n+1===r.length?e.props.messageRef:void 0,className:t.noOutline,key:a.id},s.a.createElement(y.a,{className:a.fromStr?t.strMessagesCard:t.myMessagesCard},a.fromStr&&s.a.createElement(O.a,{className:t.avatar},"S"),!a.fromStr&&s.a.createElement(O.a,{className:t.avatar},"Y"),s.a.createElement("p",{className:a.fromStr?t.strMessage:t.message},a.text)))}))):s.a.createElement("div",{className:t.root,elevation:1},s.a.createElement("ul",null,s.a.createElement("li",{className:t.noOutline},s.a.createElement(y.a,{className:t.strMessagesCard},s.a.createElement("p",{className:t.strMessage}," Looking for a random stranger. Please Wait.")))))}}]),t}(s.a.Component),j=Object(v.withStyles)(function(e){return{root:{minWidth:"100vw",position:"fixed",top:"9%",maxHeight:"75%",overflow:"scroll",overflowX:"hidden","&::-webkit-scrollbar":{background:"transparent"}},myMessagesCard:Object(f.a)({minWidth:"50vw",maxWidth:"50vw",marginTop:"10px",display:"flex",alignItems:"center"},e.mixins.gutters(),{paddingTop:".2px",paddingBottom:".2px",marginLeft:"38vw",wordBreak:"break-word",background:"#000000"}),strMessagesCard:Object(f.a)({minWidth:"50vw",maxWidth:"50vw",marginTop:"10px",display:"flex",alignItems:"center"},e.mixins.gutters(),{paddingTop:".2px",paddingBottom:".2px",wordBreak:"break-word",background:"#336242"}),message:{color:"#ffffff",fontSize:"13px",display:"inline",outline:"none"},strMessage:{color:"#ffffff",display:"inline",fontSize:"13px",outline:"none"},noOutline:{outline:"none"},avatar:{margin:"10px 10px 10px 0",display:"inline-flex",background:"#d5b138",color:"#000000"}}})(N),w=a(50),S=a.n(w),k=a(51),C=a.n(k),T=a(33),M=a.n(T),B=a(49),R=a.n(B),Z=a(123),I=a.n(Z),F=a(122),_=a.n(F),U=a(121),A=a.n(U),P=a(119),W=a.n(P),L=a(120),z=a.n(L),D=a(118),H=a.n(D),V=a(117),Y=a.n(V),G=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement(Y.a,{showLabels:!0,className:e.root},s.a.createElement(M.a,{className:e.footer,variant:"h6",gutterBottom:!0},"Created by Prateek Banga"))}}]),t}(s.a.Component),J=Object(v.withStyles)({root:{width:"100%",background:"black",borderRadius:"10px",position:"absolute",bottom:"2px"},footer:{color:"#d5b138",margin:"auto"}})(G),K=(a(212),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"loading_logo_container"},s.a.createElement("div",{className:"circles_container"},s.a.createElement("div",{className:"circle b_circle a_bit_up"},s.a.createElement("div",{className:"circle onstack"},s.a.createElement("ul",{className:"circle-container"},s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes"}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(100deg) translate(15vh) rotate(-100deg) rotateZ(6deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(120deg) translate(15vh) rotate(-120deg) rotateZ(29deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(140deg) translate(15vh) rotate(-140deg) rotateZ(50deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(160deg) translate(15vh) rotate(-160deg) rotateZ(72deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(180deg) translate(15vh) rotate(-180deg) rotateZ(91deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(200deg) translate(15vh) rotate(-200deg) rotateZ(112deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(220deg) translate(15vh) rotate(-220deg) rotateZ(129deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(240deg) translate(15vh) rotate(-240deg) rotateZ(150deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(260deg) translate(15vh) rotate(-260deg) rotateZ(169deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(280deg) translate(15vh) rotate(-280deg) rotateZ(189deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(300deg) translate(15vh) rotate(-300deg) rotateZ(211deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(320deg) translate(15vh) rotate(-320deg) rotateZ(231deg)"}}),s.a.createElement("li",{className:"boxes",style:{transform:"rotate(340deg) translate(15vh) rotate(-340deg) rotateZ(247deg)"}})),s.a.createElement("div",{className:"circle m_circle"},s.a.createElement("div",{className:"logo"},s.a.createElement("div",null,"B ",s.a.createElement("span",{className:"logo_it"},"IT")),s.a.createElement("div",null,"C ",s.a.createElement("span",{className:"logo_hat"},"HAT")))))))))}}]),t}(s.a.Component)),X=Object(v.createMuiTheme)({overrides:{MuiPaper:{root:{backgroundColor:"#000"}}}});function $(e){return s.a.createElement(H.a,Object.assign({direction:"up"},e))}var q=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement("div",null,s.a.createElement(v.MuiThemeProvider,{theme:X},s.a.createElement(W.a,{fullScreen:!0,open:this.props.aboutUs,TransitionComponent:$},s.a.createElement(R.a,{onClick:this.props.aboutUsToggle,"aria-label":"Close",className:e.ArrowBackIos},s.a.createElement(z.a,null)),s.a.createElement(M.a,{className:e.Heading,variant:"h3",gutterBottom:!0},"About US"),s.a.createElement(K,null),s.a.createElement(J,null))))}}]),t}(s.a.Component),Q=Object(v.withStyles)({ArrowBackIos:{width:"10%",position:"fixed",top:"47px",color:"#d5b138"},Heading:{textAlign:"center",marginTop:"21px",color:"#d5b138"}})(q),ee=Object(v.createMuiTheme)({palette:{primary:{main:"#000000"},secondary:{main:"#d5b138",custom:"#ff0000"}},typography:{useNextVariants:!0}}),te=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={auth:!0,anchorEl:null,donateOpen:!1,aboutUs:!1},a.handleMenu=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.donateToggle=function(){a.setState({donateOpen:!a.state.donateOpen,anchorEl:null})},a.aboutUsToggle=function(){a.setState({aboutUs:!a.state.aboutUs,anchorEl:null})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.auth,n=t.anchorEl,r=Boolean(n);return s.a.createElement("div",{className:e.root},s.a.createElement(v.MuiThemeProvider,{theme:ee},s.a.createElement(S.a,{className:e.appBarPosition,color:"primary"},s.a.createElement(C.a,null,s.a.createElement(M.a,{variant:"h4",color:"secondary",align:"center",className:e.grow},"BIT Chat"),a&&s.a.createElement("div",null,s.a.createElement(R.a,{"aria-owns":r?"menu-appbar":void 0,"aria-haspopup":"true",onClick:this.handleMenu,color:"secondary"},s.a.createElement(A.a,null)),s.a.createElement(_.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:this.handleClose},s.a.createElement(I.a,{onClick:this.aboutUsToggle},"AboutUS")),s.a.createElement(Q,{aboutUsToggle:this.aboutUsToggle,aboutUs:this.state.aboutUs}))))))}}]),t}(s.a.Component),ae=Object(v.withStyles)({root:{flexGrow:1},grow:{flexGrow:1,marginLeft:"50px"},appBarPosition:{position:"fixed",top:"0px"}})(te),ne=a(68),se=a.n(ne),re=a(125),oe=a.n(re),le=a(126),ie=a.n(le),ce=a(124),me=a.n(ce).a.connect({autoConnect:!1}),de=Object(v.createMuiTheme)({palette:{primary:{main:"#000000"},secondary:{main:"#ffffff"}},typography:{useNextVariants:!0}}),ue=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={value:"STOP",message:"",firstMessage:!1,stateInput:!0,stateButton:!1},me.on("chatMessage",function(e){a.props.addStrMessage(e),a.setState({stateInput:!1})}),me.on("newChat",function(){a.setState({value:"New Chat",stateInput:!0,stateButton:!0})}),me.on("closeStrangerSocket",function(){me.close()}),me.on("reconnect_attempt",function(e){a.props.addMessageFunc("You have been disconnected because the tab was Idle."),me.close(),a.setState({value:"New Chat",stateInput:!0,stateButton:!0})}),a.messageField=s.a.createRef(),a.buttonToggle=a.buttonToggle.bind(Object(u.a)(Object(u.a)(a))),a.handleChange=a.handleChange.bind(Object(u.a)(Object(u.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(Object(u.a)(a))),a.sendOnEnter=a.sendOnEnter.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){me.open()}},{key:"handleSubmit",value:function(e){e.target?(e.preventDefault(),this.setState({message:""}),this.messageField.current.focus(),this.state.message.trim().length>0&&(this.props.addMessageFunc(this.state.message),me.emit("chatMessage",this.state.message),this.setState({firstMessage:!0}))):(this.messageField.current.focus(),this.props.addMessageFunc(e),me.emit("chatMessage",e),this.setState({message:"",firstMessage:!0}))}},{key:"sendOnEnter",value:function(e){13===e.keyCode&&!1===e.shiftKey&&(e.preventDefault(),e.target.value&&e.target.value.toString().trim().length>0&&this.handleSubmit(e.target.value))}},{key:"handleChange",value:function(e){this.setState({message:e.target.value})}},{key:"buttonToggle",value:function(){"STOP"===this.state.value?this.setState({value:"Really?"}):"Really?"===this.state.value?(me.close(),this.setState({value:"New Chat",stateInput:!0,stateButton:!0}),this.props.addMessageFunc("You have disconnected the chat. Please start a New Chat to start chatting with a random Stranger.")):(this.setState({value:"STOP",firstMessage:!1,stateInput:!0,stateButton:!1}),this.props.clearScreen(),me.open())}},{key:"render",value:function(){var e=this.props.classes;return s.a.createElement(v.MuiThemeProvider,{theme:de},s.a.createElement(s.a.Fragment,null,s.a.createElement(oe.a,null),s.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},s.a.createElement(S.a,{position:"fixed",color:"primary",className:e.appBar},s.a.createElement(C.a,{className:e.toolbar},s.a.createElement(se.a,{onClick:this.buttonToggle,variant:"contained",color:"primary","aria-label":"Stop/New-Chat",className:e.buttonChat},this.state.value),s.a.createElement("textarea",{type:"text",cols:"10",rows:"1",ref:this.messageField,placeholder:this.state.firstMessage?"Type your message":"Say hello to stranger",className:e.textField,disabled:this.state.stateInput,value:this.state.message,onChange:this.handleChange,onKeyDown:this.sendOnEnter}),s.a.createElement(se.a,{variant:"fab",type:"submit",size:"small",color:"primary","aria-label":"send",className:e.buttonSend},s.a.createElement(ie.a,{className:e.rightIcon},"send")))))))}}]),t}(s.a.Component),ge=Object(v.withStyles)(function(e){return{appBar:{top:"auto",bottom:0,background:"#000000"},toolbar:{alignItems:"flex-end"},textField:{fontFamily:"Roboto",boxShadow:"0.5px 0.5px 8px 3px #888888",margin:"auto",width:"100%",borderRadius:"25px",borderColor:"#ffffff",border:"2px",borderStyle:"solid",height:"45px",outline:"none",resize:"none",overflow:"auto","&::-webkit-scrollbar":{background:"transparent"},"&::-webkit-input-placeholder":{fontFamily:"monospace",color:"grey",fontSize:"11px"},paddingBottom:"20px",paddingTop:"10px",paddingRight:"20px",paddingLeft:"20px"},buttonSend:{marginTop:"auto",marginBottom:"auto",marginLeft:"9px",marginRight:"-1.3%",color:"#d5b138",minHeight:"9px",minWidth:"31px",width:"60px",height:"45px"},buttonChat:{marginBottom:"10px",background:"#000000",color:"#d5b138",marginRight:"4px",marginLeft:"-10px"},rightIcon:{marginLeft:"5px",marginBottom:"3px",transform:"rotate(333deg)"}}})(ue),he=[],pe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).setFocusOnMessage=function(){a.messageRef&&a.messageRef.current.scrollIntoView(!1)},a.setFocusOnInput=function(){a.inputRef&&a.inputRef.focus()},a.createInputRef=function(e){return a.inputRef=e},a.clearScreen=function(){a.setState({messages:[]})},a.state={messages:he},a.messageRef=s.a.createRef(),a.addMessage=a.addMessage.bind(Object(u.a)(Object(u.a)(a))),a.addStrMessage=a.addStrMessage.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"addMessage",value:function(e){this.setState(function(t){var a=t.messages,n={text:e,id:Date.now()};return a.push(n),{messages:a}},this.setFocusOnMessage)}},{key:"addStrMessage",value:function(e){var t=this;this.setState(function(){var a={text:e,id:Date.now(),fromStr:!0};return t.state.messages.push(a)},this.setFocusOnMessage)}},{key:"render",value:function(){return this.props.visibility&&(document.body.style.backgroundColor="#ffffff"),this.props.visibility?s.a.createElement(s.a.Fragment,null,s.a.createElement(ae,null),s.a.createElement(j,{messageRef:this.messageRef,messages:this.state.messages,addMessageFunc:this.addMessage,addStrMessage:this.addStrMessage}),s.a.createElement(ge,{myRefProp:this.createInputRef,addMessageFunc:this.addMessage,clearScreen:this.clearScreen,addStrMessage:this.addStrMessage})):null}}]),t}(s.a.Component),be=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={visibility:!1},a.visibilityToggle=a.visibilityToggle.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"visibilityToggle",value:function(){this.setState({visibility:!0})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(b,{visibility:this.state.visibility,visibilityToggle:this.visibilityToggle}),s.a.createElement(pe,{visibility:this.state.visibility}))}}]),t}(n.Component),fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(s.a.createElement(be,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");window.addEventListener("fetch",function(e){}),fe?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ve(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ve(t,e)})}}()},73:function(e,t,a){},74:function(e,t,a){}},[[127,2,1]]]);
//# sourceMappingURL=main.8477b396.chunk.js.map