(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),l=a.n(r),o=(a(15),a(2)),c=a(3),s=a(5),u=a(4),h=a(6),d=a(1),m=(a(17),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){console.log("here",this.state.value),this.props.handleSubmit(this.state.value),e.preventDefault()}},{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",null,"Enter your GitHub username"," ",i.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange})),i.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={hits:[],isLoading:!1,error:null},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.hits;return e.isLoading?i.a.createElement("p",null,"Loading ..."):(console.log(t),i.a.createElement("ul",null,t.map(function(e){return i.a.createElement("li",{key:e.objectID},i.a.createElement("a",{href:e.url},e.name))})))}}]),t}(n.Component),p=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={name:null,hits:[],isLoading:!1},e.handleSubmit=e.handleSubmit.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){var t=this;this.setState({isLoading:!0}),fetch("https://api.github.com/users/".concat(e,"/starred")).then(function(e){return e.json()}).then(function(e){return t.setState({hits:e,isLoading:!1})}).catch(function(e){return t.setState({error:e,isLoading:!1})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},"starwatcher"),i.a.createElement("p",null,"This page will in the future add the ability to watch releases of your starred repos"),i.a.createElement(m,{handleSubmit:this.handleSubmit}),i.a.createElement("div",{className:"StarList"},i.a.createElement(b,{isLoading:this.state.isLoading,hits:this.state.hits})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.8908646d.chunk.js.map