(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){e.exports=a(270)},116:function(e,t,a){},270:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(15),r=a.n(i),c=(a(116),a(40)),o=a(27),s=a(39),m=a(96),u=a(97),d=a(109),h=a(98),b=a(110),E=a(56),g=a(104),p=a.n(g),v=a(106),f=a.n(v),y=a(16),w=a.n(y),C=a(105),j=a.n(C),N=a(57),O=a.n(N),S=a(38),k=a.n(S),x=a(20),F=a.n(x),A=a(58),B=a.n(A),D=a(108),L=a.n(D),P=a(107),T=a.n(P),W=a(19),I=a.n(W),J=a(100),G=a.n(J),R=a(103),X=a.n(R),$=a(102),q=a.n($),z=a(101),H=a.n(z),K=a(29),M=a.n(K),Q=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1,list:[{id:0,name:"Baskar",number:7904852282}],name:"",number:"",id:0,view:"list",edit:{},index:""},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.handleChange=function(e){return function(t){a.setState(Object(s.a)({},e,t.target.value))}},a.addToList=function(){a.setState({list:[].concat(Object(o.a)(a.state.list),[{id:a.state.id+1,name:a.state.name,number:a.state.number}]),id:a.state.id+1,view:"list"})},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return"list"==this.state.view?l.a.createElement("div",{style:{margin:100}},l.a.createElement(F.a,null,l.a.createElement("div",{style:{float:"right"}},l.a.createElement(I.a,{variant:"outlined",color:"primary",onClick:function(){e.setState({view:"add"})}},"Add New SubScriber")),l.a.createElement(F.a,{container:!0,justify:"center",flexDirection:"column"},l.a.createElement(G.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(H.a,{id:"alert-dialog-title"},"Edit Subscriber Details"),l.a.createElement(q.a,{style:{height:50}},l.a.createElement(M.a,{id:"outlined-name",label:"Name",className:t.textField,value:this.state.edit.name,onChange:function(t){e.setState({edit:Object(c.a)({},e.state.edit,{name:t.target.value})})},margin:"normal",variant:"outlined"}),l.a.createElement(M.a,{id:"outlined-name",label:"Phone Number",className:t.textField,value:this.state.edit.number,type:"number",onChange:function(t){e.setState({edit:Object(c.a)({},e.state.edit,{number:t.target.value})})},margin:"normal",variant:"outlined"})),l.a.createElement(X.a,null,l.a.createElement(I.a,{onClick:this.handleClose,color:"primary"},"cancel"),l.a.createElement(I.a,{onClick:function(){e.setState({list:[].concat(Object(o.a)(e.state.list.slice(0,e.state.index)),[e.state.edit],Object(o.a)(e.state.list.slice(e.state.index+1))),open:!1})},color:"primary",autoFocus:!0},"Edit"))),l.a.createElement(F.a,{xs:12},l.a.createElement(k.a,{className:t.root},l.a.createElement(p.a,{className:t.table},l.a.createElement(j.a,null,l.a.createElement(O.a,null,l.a.createElement(w.a,null,"#"),l.a.createElement(w.a,null,"Id"),l.a.createElement(w.a,null,"Name"),l.a.createElement(w.a,{align:"right"},"Phone Number"),l.a.createElement(w.a,{align:"right"},"Actions"))),l.a.createElement(f.a,null,this.state.list.map(function(a,n){return l.a.createElement(O.a,null,l.a.createElement(w.a,null,n+1),l.a.createElement(w.a,null,a.id),l.a.createElement(w.a,null,a.name),l.a.createElement(w.a,{align:"right"},a.number),l.a.createElement(w.a,{align:"right"},l.a.createElement(B.a,{className:t.button,"aria-label":"Edit",onClick:function(){e.setState({edit:Object(c.a)({},a),index:n,open:!0})},color:"primary"},l.a.createElement(T.a,null)),l.a.createElement(B.a,{className:t.button,"aria-label":"Delete",onClick:function(){e.setState({list:[].concat(Object(o.a)(e.state.list.slice(0,n)),Object(o.a)(e.state.list.slice(n+1)))})},color:"primary"},l.a.createElement(L.a,null))))})))))))):l.a.createElement("div",{style:{margin:100}},l.a.createElement(F.a,null,l.a.createElement("div",null,l.a.createElement(I.a,{variant:"outlined",color:"primary",onClick:function(){return e.setState({view:"list"})}},"Go Back")),l.a.createElement(F.a,{container:!0,justify:"center",direction:"column"},l.a.createElement(M.a,{id:"outlined-name",label:"Name",className:t.textField,value:this.state.name,onChange:this.handleChange("name"),margin:"normal",variant:"outlined"}),l.a.createElement(M.a,{id:"outlined-name",label:"Phone Number",className:t.textField,value:this.state.number,type:"number",onChange:this.handleChange("number"),margin:"normal",variant:"outlined"}),l.a.createElement("br",null),l.a.createElement(F.a,null,"Name:",this.state.name,l.a.createElement("br",null),"Number:",this.state.number,l.a.createElement(I.a,{style:{float:"right"},variant:"outlined",color:"primary",onClick:this.addToList.bind(this)},"Add Subscriber")))))}}]),t}(l.a.Component),U=Object(E.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit}}})(Q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[111,1,2]]]);
//# sourceMappingURL=main.7e5cba57.chunk.js.map