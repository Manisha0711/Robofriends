(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,a,n){},15:function(e,a,n){},17:function(e,a,n){"use strict";n.r(a);var i=n(1),t=n(7),r=n.n(t),s=(n(13),n(2)),c=n(3),o=n(5),m=n(4),l=n(0),h=function(e){var a=e.id,n=e.name,i=e.email;return Object(l.jsxs)("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"robots",width:"200",height:"200",src:"https://robohash.org/".concat(a," ")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("p",{children:i})]})]})},d=function(e){var a=e.robots;return Object(l.jsx)("div",{children:a.map((function(e,n){return Object(l.jsx)(h,{id:a[n].id,name:a[n].name,email:a[n].email},n)}))})},u=function(e){e.searchfield;var a=e.searchChange;return Object(l.jsx)("div",{className:"pa3",children:Object(l.jsx)("input",{className:"pa2 ba b--blue bg-lightest-green",type:"search",placeholder:"Search friends",onChange:a})})},b=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"3px solid black",height:"320px"},children:e.children})},j=function(e){Object(o.a)(n,e);var a=Object(m.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=a.call(this,e)).state={hasError:!1},i}return Object(c.a)(n,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:" OOOPS. There is an ERROR!!"}):this.props.children}}]),n}(i.Component),f=[{id:0,name:"Manisha M Shaju",username:"mani",email:"manishashaju@gmail.com"},{id:1,name:"Leander Joseph",username:"lee",email:"leander@gmail.com"},{id:2,name:"Siri Spandana",username:"siri",email:"siri@gmail.com"},{id:3,name:"Nimisha Shaju",username:"nimisha",email:"nimisha@gmail.com"},{id:4,name:"Lateef Ulla Khan",username:"lateef",email:"lateef@gmail.com"},{id:5,name:"Abdul Basith",username:"basith",email:"basith@gmail.com"},{id:6,name:"Mayuri Prakash",username:"mayuri",email:"mayur@gmail.com"},{id:7,name:"Emaad Jaffer",username:"emaad",email:"emaad@gmail.com"},{id:8,name:"Lee Min-ho",username:"leee",email:"lee@gmail.com"},{id:9,name:"Park Seo-joon",username:"park",email:"park@gmail.com"},{id:10,name:"Kim Nam-joon",username:"rm",email:"nam_joon@gmail.com"}],g=(n(15),function(e){Object(o.a)(n,e);var a=Object(m.a)(n);function n(){var e;return Object(s.a)(this,n),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:f,searchfield:""},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,a=e.robots,n=e.searchfield,i=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:" RoboFriends"}),Object(l.jsx)(u,{searchChange:this.onSearchChange}),Object(l.jsx)(b,{children:Object(l.jsx)(j,{children:Object(l.jsx)(d,{robots:i})})})]}):Object(l.jsx)("h1",{children:" loading "})}}]),n}(i.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(a){var n=a.getCLS,i=a.getFID,t=a.getFCP,r=a.getLCP,s=a.getTTFB;n(e),i(e),t(e),r(e),s(e)}))};n(16);r.a.render(Object(l.jsx)(g,{}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.0f3ea740.chunk.js.map