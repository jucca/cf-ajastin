(this["webpackJsonpcf-ajastin"]=this["webpackJsonpcf-ajastin"]||[]).push([[0],{21:function(e,t){t.getMinutes=function(e){return 0===e?1:e/6e4%60},t.getSeconds=function(e){return 0===e?1:e/1e3},t.getMilliSeconds=function(e){return 60*e*1e3},t.getMilliSecondsFromSeconds=function(e){return 1e3*e},t.getPercentageCompleted=function(e,t){return 100-(100*e/t).toFixed(0)}},30:function(e,t,a){e.exports=a.p+"static/media/beep.c5d5cada.mp3"},31:function(e,t,a){e.exports=a.p+"static/media/final_beep.eef56b30.mp3"},46:function(e,t,a){e.exports=a(79)},51:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(29),a(22)),o=a(6),s=a(7),c=a(9),l=a(8),m=a(12),u=a(16),d=a(80),h=a(81),p=a(82),f=a(83),E=a(84),b=a(85),v=(a(51),function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],i=t[1],o=function(){return i(!a)};return r.a.createElement(d.a,{color:"faded",className:"header",light:!0},r.a.createElement(h.a,{href:"/cf-ajastin",className:"mr-auto header-title"},"CF AJASTIN"),r.a.createElement(p.a,{onClick:o,className:"header-toggle-icon header-toggler "}),r.a.createElement(f.a,{isOpen:!a,navbar:!0},r.a.createElement(E.a,{navbar:!0},r.a.createElement(b.a,null,r.a.createElement(m.b,{onClick:o,className:"header-item",to:"/amrap/"},"AMRAP")),r.a.createElement(b.a,null,r.a.createElement(m.b,{onClick:o,className:"header-item",to:"/emom/"},"EMOM")),r.a.createElement(b.a,null,r.a.createElement(m.b,{onClick:o,className:"header-item",to:"/tabata/"},"TABATA")),r.a.createElement(b.a,null,r.a.createElement(m.b,{onClick:o,className:"header-item",to:"/stopwatch/"},"SEKUNTIKELLO")))))}),g=a(19),k=(a(63),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return[r.a.createElement("header",{className:"home-box-container"},r.a.createElement("div",{className:"timer-home-wod-name"},"Valitse WODn sopiva ajastin."),r.a.createElement(m.b,{className:"header-item",to:"/amrap/"},"AMRAP"),r.a.createElement(m.b,{className:"header-item",to:"/emom/"},"EMOM"),r.a.createElement(m.b,{className:"header-item",to:"/tabata/"},"TABATA"),r.a.createElement(m.b,{className:"header-item",to:"/stopwatch/"},"SEKUNTIKELLO"))]}}]),a}(r.a.Component)),O=a(86),w=a(45),T=a(95),y=a(87),N=a(88),j=a(89),C=function(e){return[r.a.createElement(O.a,{color:"warning",onClick:e.toggle},"ASETUKSET"),r.a.createElement(T.a,{className:"timer-modal-content",isOpen:e.modal,toggle:e.toggle},r.a.createElement(y.a,{className:"timer-modal-header",toggle:e.toggle},e.title),r.a.createElement(N.a,null,e.body),r.a.createElement(j.a,null,r.a.createElement(O.a,{color:"warning",onClick:e.save},"TALLENNA"),r.a.createElement(O.a,{color:"secondary",onClick:e.toggle},"PERUUTA")))]},I=a(26),A=a(90),S=(a(64),{track:{backgroundColor:"#f6c344"},active:{backgroundColor:"#5cb85c"},thumb:{width:25,height:25},disabled:{opacity:1}}),x=function(e){var t=a(21).getMinutes,i=a(21).getMilliSeconds,o=Object(n.useState)(!1),s=Object(u.a)(o,2),c=s[0],l=s[1],m=Object(n.useState)({x:t(e.startTime),wod:e.wodName}),d=Object(u.a)(m,2),h=d[0],p=d[1],f=function(){return l(!c)};return[r.a.createElement(C,{modal:c,toggle:f,save:function(){e.startTimeInit(i(h.x)),null!==h.wod?e.wodNameInit(h.wod):e.wodNameInit("shut up and train"),f()},title:e.title,body:r.a.createElement("div",null,r.a.createElement("div",{className:"timer-modal-amrap-minutes"},h.x," minuutit"),r.a.createElement(I.a,{styles:S,x:h.x,xmax:59,xmin:1,onChange:function(e){var t=e.x;return p((function(e){return Object(w.a)({},e,{x:t})}))}}),r.a.createElement(A.a,{className:"timer-modal-amrap-wod-name",id:"wodName",name:"wodName",type:"text",maxlength:"22",placeholder:"Mik\xe4 wod on kyseess\xe4?",onChange:function(e){return function(e){p({x:h.x,wod:e.target.value})}(e)}}))})]},P=(a(65),function(e){var t=("0"+Math.floor(e.currentTime/1e3%60)%60).slice(-2),a=("0"+Math.floor(e.currentTime/6e4%60)).slice(-2);return"amrap"===e.type||"emom"===e.type?r.a.createElement("div",{className:e.className},a," : ",t):"tabata"===e.type?r.a.createElement("div",{className:e.className},t):void 0}),M=a(91),R=(a(66),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=100-this.props.percentageCompleted;return r.a.createElement("div",{className:!0},r.a.createElement(M.a,{multi:!0},r.a.createElement(M.a,{animated:!0,striped:!0,bar:!0,color:this.props.colorCompleted,value:this.props.percentageCompleted}),r.a.createElement(M.a,{animated:!0,striped:!0,bar:!0,color:this.props.colorRemaining,value:e})),r.a.createElement("div",{className:"timer-progress-bar-percentage"},this.props.percentageCompleted,"% valmista"))}}]),a}(r.a.Component)),_=(a(67),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={timerOn:!1,wodName:null,currentTime:0,startTime:0,percentageCompleted:0},e.startTimeInit=function(t){e.setState({startTime:t,currentTime:t})},e.wodNameInit=function(t){e.setState({wodName:t})},e.start=function(){console.log("public url: ","/cf-ajastin"),e.setState({timerOn:!0}),e.timer=setInterval((function(){e.checkTime()||(e.stop(),e.reset())}),1e3)},e.checkTime=function(){var t=e.state.currentTime-1e3,n=a(21).getPercentageCompleted;return t>0?(t<=5e3&&e.audio.play(),e.setState({currentTime:t,percentageCompleted:n(t,e.state.startTime)}),!0):(e.finalAudio.play(),!1)},e.stop=function(){clearInterval(e.timer),e.setState({timerOn:!1})},e.reset=function(){e.setState({currentTime:e.state.startTime,percentageCompleted:0})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return[r.a.createElement("audio",{ref:function(t){return e.audio=t},src:a(30),loop:!1,autoPlay:!1}),r.a.createElement("audio",{ref:function(t){return e.finalAudio=t},src:a(31),loop:!1,autoPlay:!1}),r.a.createElement("div",{className:"amrap-box-container"},r.a.createElement("div",{className:"timer-amrap"},r.a.createElement("div",{className:"timer-amrap-label"},"AMRAP"),r.a.createElement(x,{title:"amrap settings",startTime:this.state.startTime,startTimeInit:this.startTimeInit,wodName:this.state.wodName,wodNameInit:this.wodNameInit}),!1===this.state.timerOn&&this.state.currentTime===this.state.startTime&&this.state.currentTime>0&&r.a.createElement(O.a,{color:"success",onClick:this.start},"ALOITA"),!0===this.state.timerOn&&this.state.currentTime>=1e3&&r.a.createElement(O.a,{color:"danger",onClick:this.stop},"LOPETA"),!1===this.state.timerOn&&this.state.currentTime!==this.state.startTime&&this.state.currentTime>0&&r.a.createElement(O.a,{color:"info",onClick:this.start},"JATKA"),!1===this.state.timerOn&&this.state.currentTime!==this.state.startTime&&r.a.createElement(O.a,{color:"secondary",onClick:this.reset},"PERUUTA"),r.a.createElement(P,{className:"timer-time-amrap",type:"amrap",currentTime:this.state.currentTime}),r.a.createElement(R,{type:"amrap",className:"progress-bar-amrap",colorCompleted:"success",colorRemaining:"warning",percentageCompleted:this.state.percentageCompleted}),r.a.createElement("div",{className:"timer-amrap-wod-name"},this.state.wodName)))]}}]),n}(r.a.Component)),L=a(27),U=a(92),K=a(93),J=a(94),D=(a(68),function(e){var t=Object(n.useState)({rounds:e.rounds}),a=Object(u.a)(t,2),i=a[0],o=a[1],s=Object(n.useState)(!1),c=Object(u.a)(s,2),l=c[0],m=c[1],d=function(){return m(!l)};return[r.a.createElement(C,{modal:l,toggle:d,save:function(){e.roundsInit(i.rounds),d()},title:e.title,body:r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(U.a,null,r.a.createElement(K.a,null,r.a.createElement(J.a,null,r.a.createElement(O.a,{color:"warning",onClick:function(){if(i.rounds.length<25){var e=Object(L.a)(i.rounds),t=e.length+1;e.push({name:"EMOM "+t}),o({rounds:e})}}},"+"),r.a.createElement(O.a,{className:"timer-modal-emom-rounds-button",onClick:function(){if(i.rounds.length>1){var e=Object(L.a)(i.rounds);e.pop(),o({rounds:e})}},color:"secondary"},"-")),r.a.createElement(J.a,null,r.a.createElement("div",{className:"timer-modal-emom-rounds"},i.rounds.length," kierrosta"))),r.a.createElement(K.a,{className:"timer-modal-emom-rounds-details"},r.a.createElement(J.a,null,i.rounds.map((function(e,t){return r.a.createElement(A.a,{className:"timer-modal-emom-wod-name",type:"text",id:"name",name:"name",maxlength:"22",value:e.name,onChange:function(e){return function(e,t){var a=Object(L.a)(i.rounds);"name"===t.target.name&&(a[e].name=t.target.value),o({rounds:a})}(t,e)}})})))))))})]}),B=a(44),F=a.n(B),W=function(e){return r.a.createElement("div",{style:{position:"absolute",height:"100%",transform:"rotate(".concat(e.turns,"turn)")}},r.a.createElement("div",{style:e.style}))},V=function(e){var t=1/e.count;return F.a.range(e.count).map((function(a){return r.a.createElement(W,{turns:a*t,style:e.style})}))},Y=(a(70),a(33)),q=(a(71),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).default_stroke_width=10,e.default_round_separator_width="2px",e.default_round_background="red",e.default_stroke_line_cap="butt",e.valueRounds=function(){return 0},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.round+"/"+this.props.totalRounds,t=0;return 0!==this.props.totalRounds&&0!==this.props.round&&(t=100/this.props.totalRounds*this.props.round),r.a.createElement(Y.a,{value:t,text:e,strokeWidth:this.default_stroke_width,styles:Object(Y.b)({strokeLinecap:this.default_stroke_line_cap})},r.a.createElement(V,{count:this.props.totalRounds,style:{background:this.default_round_background,width:this.default_round_separator_width,height:"".concat(10,"%")}}))}}]),a}(r.a.Component)),z=(a(72),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={timerOn:!1,currentTime:0,rounds:[],round:null,i:0},e.roundsInit=function(t){null!==t&&t.length>0&&e.setState({rounds:t})},e.start=function(){if(e.state.i<e.state.rounds.length){var t=e.state.rounds[e.state.i];e.setState({timerOn:!0,round:t,currentTime:6e4}),e.activateTimer()}else e.reset()},e.resume=function(){e.setState({timerOn:!0,currentTime:e.state.currentTime}),e.activateTimer()},e.activateTimer=function(){e.timer=setInterval((function(){e.checkTime()||(e.setState({i:e.state.i+1,currentTime:6e4}),clearInterval(e.timer),e.startDelay(800))}),1e3)},e.checkTime=function(){var t=e.state.currentTime-1e3;return t>0?(t<=2e3&&e.audio.play(),e.setState({currentTime:t}),!0):(e.finalAudio.play(),!1)},e.stop=function(){clearInterval(e.timer),e.setState({timerOn:!1})},e.reset=function(){e.stop(),e.setState({timerOn:!1,currentTime:0,i:0,round:null})},e}return Object(s.a)(n,[{key:"startDelay",value:function(e){var t=this;this.timer=setInterval((function(){e>=0?e-=200:(clearInterval(t.timer),t.start())}),200)}},{key:"render",value:function(){var e,t=this,n=0;return null!==this.state.round&&(e=this.state.round.name,n=this.state.i),[r.a.createElement("audio",{ref:function(e){return t.audio=e},src:a(30),loop:!1,autoPlay:!1}),r.a.createElement("audio",{ref:function(e){return t.finalAudio=e},src:a(31),loop:!1,autoPlay:!1}),r.a.createElement("div",{className:"emom-box-container"},r.a.createElement("div",{className:"timer-emom"},r.a.createElement("div",{className:"timer-emom-label"},"EMOM"),r.a.createElement(D,{title:"emom settings",rounds:this.state.rounds,roundsInit:this.roundsInit}),!1===this.state.timerOn&&0===this.state.currentTime&&this.state.rounds.length>0&&r.a.createElement(O.a,{color:"success",onClick:this.start},"ALOITA"),!0===this.state.timerOn&&this.state.currentTime>=1e3&&r.a.createElement(O.a,{color:"danger",onClick:this.stop},"LOPETA"),!1===this.state.timerOn&&this.state.currentTime<6e4&&this.state.currentTime>0&&r.a.createElement(O.a,{color:"info",onClick:this.resume},"JATKA"),!1===this.state.timerOn&&0!==this.state.currentTime&&this.state.rounds.length>0&&r.a.createElement(O.a,{color:"secondary",onClick:this.reset},"PERUUTA"),r.a.createElement("div",{className:"timer-emom-display-container"},r.a.createElement(U.a,null,r.a.createElement(K.a,null,r.a.createElement(J.a,null,r.a.createElement(P,{className:"timer-time-emom",type:"emom",currentTime:this.state.currentTime})),r.a.createElement(J.a,null,r.a.createElement("div",{className:"timer-emom-round-bar"},r.a.createElement(q,{round:n,totalRounds:this.state.rounds.length})))))),r.a.createElement("div",{className:"timer-emom-wod-name"},e)))]}}]),n}(r.a.Component)),G=(a(73),{track:{backgroundColor:"#f6c344"},active:{backgroundColor:"#5cb85c"},thumb:{width:25,height:25},disabled:{opacity:1}}),H=function(e){var t=a(21).getSeconds,i=a(21).getMilliSecondsFromSeconds,o=Object(n.useState)(!1),s=Object(u.a)(o,2),c=s[0],l=s[1],m=Object(n.useState)({work:t(e.work),rest:t(e.rest),rounds:e.rounds}),d=Object(u.a)(m,2),h=d[0],p=d[1],f=function(){return l(!c)};return[r.a.createElement(C,{modal:c,toggle:f,save:function(){e.workInit(i(h.work)),e.restInit(i(h.rest)),e.roundsInit(h.rounds),f()},title:e.title,body:r.a.createElement("div",null,r.a.createElement(U.a,null,r.a.createElement(K.a,null,r.a.createElement(J.a,null,r.a.createElement(O.a,{color:"warning",onClick:function(){h.work>=59||p({work:h.work+1,rest:h.rest,rounds:h.rounds})}},"+"),r.a.createElement(O.a,{className:"timer-modal-tabata-seconds-button",onClick:function(){h.work<=1||p({work:h.work-1,rest:h.rest,rounds:h.rounds})},color:"secondary"},"-")),r.a.createElement(J.a,null,r.a.createElement("div",{className:"timer-modal-tabata-time"},h.work," sekuntia, TY\xd6T\xc4"))),r.a.createElement(K.a,null,r.a.createElement(J.a,null,r.a.createElement(O.a,{color:"warning",onClick:function(){h.rest>=59||p({work:h.work,rest:h.rest+1,rounds:h.rounds})}},"+"),r.a.createElement(O.a,{className:"timer-modal-tabata-seconds-button",onClick:function(){h.rest<=1||p({work:h.work,rest:h.rest-1,rounds:h.rounds})},color:"secondary"},"-")),r.a.createElement(J.a,null,r.a.createElement("div",{className:"timer-modal-tabata-time"},h.rest," sekuntia, LEPOA"))),r.a.createElement(K.a,{className:"timer-modal-tabata-rounds"},r.a.createElement(J.a,null,r.a.createElement(I.a,{styles:G,x:h.rounds,xmax:30,xmin:1,onChange:function(e){var t=e.x;p({rounds:t,rest:h.rest,work:h.work})}})),r.a.createElement(J.a,null,r.a.createElement("div",{className:"timer-modal-tabata-rounds"},h.rounds," kierrosta")))))})]},Q=(a(74),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={timerOn:!1,work:2e4,workInit:2e4,workPercentage:0,rest:1e4,restInit:1e4,restPercentage:0,rounds:8,i:1},e.workInit=function(t){console.log(t),e.setState({work:t,workInit:t})},e.restInit=function(t){console.log(t),e.setState({rest:t,restInit:t})},e.roundsInit=function(t){e.setState({rounds:t})},e.start=function(){e.state.i<=e.state.rounds&&(e.setState({timerOn:!0}),e.eatRound("work"))},e.eatRound=function(t){e.timer=setInterval((function(){if(!e.checkTime(t))if(clearInterval(e.timer),"rest"===t){if(e.state.i===e.state.rounds)return void e.reset();e.setState({rest:e.state.restInit,restPercentage:0,i:e.state.i+1}),e.delay(1e3,"work")}else e.setState({work:e.state.workInit,workPercentage:0}),e.delay(800,"rest")}),1e3)},e.checkTime=function(t){var n,r=a(21).getPercentageCompleted;return"work"===t&&(n=e.state.work-1e3)>0?(n<=2e3&&e.audio.play(),e.setState({work:n,workPercentage:r(n,e.state.workInit)}),!0):"rest"===t&&(n=e.state.rest-1e3)>0?(n<=2e3&&e.audio.play(),e.setState({rest:n,restPercentage:r(n,e.state.restInit)}),!0):(e.finalAudio.play(),!1)},e.stop=function(){clearInterval(e.timer),e.setState({timerOn:!1})},e.reset=function(){e.stop(),e.setState({work:e.state.workInit,rest:e.state.restInit,workPercentage:0,restPercentage:0,i:1})},e}return Object(s.a)(n,[{key:"delay",value:function(e,t){var a=this;this.timer=setInterval((function(){e>=0?e-=200:(clearInterval(a.timer),"work"===t&&a.start("work"),"rest"===t&&a.eatRound("rest"))}),200)}},{key:"render",value:function(){var e=this;return[r.a.createElement("audio",{ref:function(t){return e.audio=t},src:a(30),loop:!1,autoPlay:!1}),r.a.createElement("audio",{ref:function(t){return e.finalAudio=t},src:a(31),loop:!1,autoPlay:!1}),r.a.createElement("div",{className:"tabata-box-container"},r.a.createElement("div",{className:"timer-tabata"},r.a.createElement("div",{className:"timer-tabata-label"},"TABATA"),r.a.createElement(H,{title:"tabata settings",work:this.state.workInit,workInit:this.workInit,rest:this.state.restInit,restInit:this.restInit,rounds:this.state.rounds,roundsInit:this.roundsInit}),!1===this.state.timerOn&&r.a.createElement(O.a,{color:"success",onClick:this.start},"ALOITA"),!0===this.state.timerOn&&r.a.createElement(O.a,{color:"secondary",onClick:this.reset},"PERUUTA"),r.a.createElement("div",{className:"timer-tabata-display-container"},r.a.createElement(U.a,null,r.a.createElement(K.a,null,r.a.createElement(J.a,null,r.a.createElement(P,{className:"timer-time-tabata timer-time-tabata-workColor",type:"tabata",currentTime:this.state.work}),r.a.createElement(R,{type:"tabata",colorCompleted:"danger",colorRemaining:"secondary",percentageCompleted:this.state.workPercentage})),r.a.createElement(J.a,null,r.a.createElement(P,{className:"timer-time-tabata timer-time-tabata-restColor",type:"tabata",currentTime:this.state.rest}),r.a.createElement(R,{type:"tabata",colorCompleted:"success",colorRemaining:"secondary",percentageCompleted:this.state.restPercentage}))))),r.a.createElement("div",{className:"timer-tabata-wod-name"},"KIERROS: ",this.state.i,"/",this.state.rounds)))]}}]),n}(r.a.Component)),X=(a(75),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.state.timerTime,t=("0"+Math.floor(e/10)%100).slice(-2),a=("0"+Math.floor(e/1e3)%60).slice(-2),n=("0"+Math.floor(e/6e4)%60).slice(-2),i=("0"+Math.floor(e/36e5)).slice(-2);return[r.a.createElement("div",{className:"chronometer-time"},i," : ",n," : ",a),r.a.createElement("div",{className:"chronometer-time-centi"},t)]}}]),a}(r.a.Component)),Z=(a(76),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={timerOn:!1,timerStart:0,timerTime:0},e.start=function(){e.setState({timerOn:!0,timerTime:e.state.timerTime,timerStart:Date.now()-e.state.timerTime}),e.timer=setInterval((function(){e.setState({timerTime:Date.now()-e.state.timerStart})}),10)},e.stop=function(){e.setState({timerOn:!1}),clearInterval(e.timer)},e.reset=function(){e.setState({timerStart:0,timerTime:0})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"stopwatch-box-container"},r.a.createElement("div",{className:"timer-stopwatch"},r.a.createElement("div",{className:"timer-stopwatch-label"},"SEKUNTIKELLO"),!1===this.state.timerOn&&0===this.state.timerTime&&r.a.createElement(O.a,{color:"success",onClick:this.start},"ALOITA"),!0===this.state.timerOn&&r.a.createElement(O.a,{color:"danger",onClick:this.stop},"LOPETA"),!1===this.state.timerOn&&this.state.timerTime>0&&r.a.createElement(O.a,{color:"info",onClick:this.start},"JATKA"),!1===this.state.timerOn&&this.state.timerTime>0&&r.a.createElement(O.a,{color:"secondary",onClick:this.reset},"PERUUTA"),r.a.createElement(X,{state:this.state})))}}]),a}(r.a.Component)),$=(a(77),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"workout-box-container"},r.a.createElement("main",null,r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:k}),r.a.createElement(g.a,{path:"/amrap",component:_}),r.a.createElement(g.a,{path:"/emom",component:z}),r.a.createElement(g.a,{path:"/tabata",component:Q}),r.a.createElement(g.a,{path:"/stopwatch",component:Z}))))}}]),a}(r.a.Component)),ee=(a(78),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement($,null))}}]),a}(r.a.Component)),te=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(ee,null))}}]),a}(r.a.Component);Object(i.render)(r.a.createElement(te,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.347c79db.chunk.js.map