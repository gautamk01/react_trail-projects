(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(5),i=c.n(n),a=(c(11),c(2)),s=(c(12),c(1)),r=[{title:"Home",url:"#",cname:"nav-link"},{title:"About school",url:"#",cname:"nav-link"},{title:"Alumni News",url:"#",cname:"nav-link"},{title:"Campus",url:"#",cname:"nav-link"},{title:"Exam Result",url:"#",cname:"nav-link"}],l=c(0);var o=function(e){var t=Object(s.useState)(!1),c=Object(a.a)(t,2),n=c[0],i=c[1];return e.change(n),Object(l.jsxs)("nav",{className:"Navbaritems",children:[Object(l.jsx)("h1",{className:"Navbar-logo",children:"My School"}),Object(l.jsx)("div",{className:"menu-icon",onClick:function(){i(!n)},children:Object(l.jsx)("i",{className:n?"fas fa-times":"fas fa-bars"})}),Object(l.jsx)("ul",{className:n?"navmenu active":"navmenu",children:r.map((function(e,t){return Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:e.cname,href:e.url,children:e.title})},t)}))})]})},m=(c(4),c.p+"static/media/left-arrow.53878c51.svg"),u=c.p+"static/media/right-arrow.8b8fb639.svg";function j(e){return Object(l.jsx)("button",{onClick:e.move,className:"next"===e.direction?"btn-slide next":"btn-slide prev",children:Object(l.jsx)("img",{src:"next"===e.direction?u:m})})}var b=c(17),d=[{id:Object(b.a)(),title:"Lorem ipsum",subTitle:"Lorem"},{id:Object(b.a)(),title:"Lorem ipsum",subTitle:"Lorem"},{id:Object(b.a)(),title:"Lorem ipsum",subTitle:"Lorem"},{id:Object(b.a)(),title:"Lorem ipsum",subTitle:"Lorem"},{id:Object(b.a)(),title:"Lorem ipsum",subTitle:"Lorem"}];var v=function(e){console.log(e.onchange);var t=Object(s.useState)(1),c=Object(a.a)(t,2),n=c[0],i=c[1];return Object(l.jsxs)("div",{className:e.onchange?"h":"container-slider ",children:[d.map((function(e,t){return Object(l.jsx)("div",{className:n===t+1?"slide active-anim":"slide",children:Object(l.jsx)("img",{src:"/react_trail-projects"+"/Imgs/img".concat(t+1,".jpg")})},e.id)})),Object(l.jsx)(j,{move:function(){n!==d.length?i(n+1):n===d.length&&i(1)},direction:"next"}),Object(l.jsx)(j,{move:function(){1!==n?i(n-1):1===n&&i(d.length)},direction:"prev"})]})},O=(c(14),c(6));var h=function(){var e=Object(O.useState)(!1),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(o,{change:function(e){n(e)}}),Object(l.jsx)(v,{onchange:c})]})};i.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.56668132.chunk.js.map