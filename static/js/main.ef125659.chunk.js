(this["webpackJsonpe-website-template"]=this["webpackJsonpe-website-template"]||[]).push([[0],{72:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(12),i=c.n(a),r=c(9),j=c(10),l=c(7),o="SET_CATEGORIES",d={categories:[]},b=Object(j.b)({allCategories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case o:return Object(l.a)(Object(l.a)({},e),{},{categories:n});default:return e}}}),h=c(30),O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.c,u=Object(j.d)(b,O(Object(j.a)(h.a))),x=c(14),f=c(2),v=c(18),m=c.n(v),p=c(31),g=c(32),N=c.n(g),y=c(13),w=c(1);function k(e){return Object(w.jsx)(x.b,Object(l.a)({activeClassName:"active-link"},e))}var E=s.a.forwardRef((function(e,t){var c=Object(n.useState)(!1),s=Object(y.a)(c,2),a=s[0],i=s[1],r=Object(n.useRef)();return Object(w.jsxs)("div",{className:"sidebar",ref:t,children:[Object(w.jsx)("i",{onClick:function(){return e.handleToggle()},children:"\uea0d"}),Object(w.jsxs)("ul",{className:"firstnav",children:[Object(w.jsxs)("li",{onClick:function(){return r.current.classList.toggle("open-sidebar-subnav"),void i(!a)},children:[Object(w.jsxs)("div",{className:"sidebar-shop",children:["shop",Object(w.jsx)("i",{style:{display:a?"none":"block"},children:"\uea0a"}),Object(w.jsx)("i",{style:{display:a?"block":"none"},children:"\uea0b"})]}),Object(w.jsx)("ul",{className:"sidebar-subnav subnav",ref:r,children:e.subNavgations})]}),Object(w.jsx)("li",{children:Object(w.jsx)("a",{href:"/",children:"about us"})}),Object(w.jsx)("li",{children:Object(w.jsx)("a",{href:"/",children:"faq"})}),Object(w.jsx)("li",{children:Object(w.jsx)("a",{href:"/",children:"track your order"})})]})]})}));var R=function(){var e=s.a.createRef(),t=Object(n.useState)(!1),c=Object(y.a)(t,2),a=c[0],i=c[1],j=Object(r.c)((function(e){return e.allCategories.categories})).map((function(e,t){return Object(w.jsx)("li",{children:Object(w.jsx)(k,{to:"/home",children:e})},t)})),l=function(){e.current.classList.toggle("open-side-bar"),i(!a)};return Object(w.jsx)("header",{children:Object(w.jsxs)("div",{className:"navbar",children:[Object(w.jsx)("div",{className:"webpage-mask",style:{display:a?"block":"none"},onClick:function(){return l()}}),Object(w.jsx)("div",{className:"nav-toggle",onClick:function(){return l()},children:Object(w.jsx)("i",{children:" \ue9bb "})}),Object(w.jsx)(E,{openSideBar:a,handleToggle:l,subNavgations:j,ref:e}),Object(w.jsx)("div",{className:"logo",children:Object(w.jsx)("h1",{children:Object(w.jsx)("a",{href:"/",title:"E.C.SHOP",children:"E.C.SHOP"})})}),Object(w.jsx)("div",{className:"nav",children:Object(w.jsxs)("ul",{className:"firstnav",children:[Object(w.jsxs)("li",{className:"nav-shop",children:[Object(w.jsx)(k,{to:"/home",children:" shop "}),Object(w.jsx)("ul",{className:"nav-category subnav",children:j})]}),Object(w.jsx)("li",{children:Object(w.jsx)(k,{to:"/about",children:"about"})}),Object(w.jsx)("li",{children:Object(w.jsx)(k,{to:"/questions",children:" faq "})}),Object(w.jsx)("li",{children:Object(w.jsx)(k,{to:"/track",children:" track your order "})})]})}),Object(w.jsx)("div",{className:"navbar-icons",children:Object(w.jsxs)("div",{children:[Object(w.jsx)("i",{children:" \ue971 "}),Object(w.jsx)("i",{children:" \ue986 "}),Object(w.jsxs)("i",{className:"icon-cart",children:[" \ue93a ",Object(w.jsx)("div",{className:"cart-count",children:" 3 "})]})]})})]})})};function S(){var e=Object(r.b)();return Object(n.useEffect)((function(){(function(){var t=Object(p.a)(m.a.mark((function t(){var c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.get("https://fakestoreapi.com/products/categories").catch(console.error());case 2:c=t.sent,e((n=c.data,{type:o,payload:n}));case 4:case"end":return t.stop()}var n}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(w.jsx)(n.Fragment,{children:Object(w.jsx)(R,{})})}function C(){return Object(w.jsx)("div",{children:"About"})}var I=c(34),T=c(35),A=c(37),_=c(36),L=c.p+"static/media/women.4f2d0c45.jpg",D=c.p+"static/media/electronic.3c3438b4.jpg",q=c.p+"static/media/jewelery.aad02ea4.jpg",B=c.p+"static/media/jewelery01.b9b2e700.jpg",H=function(e){Object(A.a)(c,e);var t=Object(_.a)(c);function c(e){var n;return Object(I.a)(this,c),(n=t.call(this,e)).slideTo=function(){var e=n.state.index+1;if(e>n.state.allImages.length)return n.slideRef.current.style.transitionDuration="",n.slideRef.current.style.left=0,void setTimeout((function(){n.slideRef.current.style.transitionDuration="1s",e=1,n.setState({index:e})}));n.setState({index:e})},n.slideRef=s.a.createRef(),n.state={index:0,allImages:[L,D,q,B]},n}return Object(T.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){e.slideTo()}),2500)}},{key:"render",value:function(){var e=this.state,t=e.index,c=e.allImages,n={width:100*(c.length+1)+"vw",left:"-".concat(100*t,"%"),transition:"left 1s ease-out"};return Object(w.jsxs)("div",{className:"banner",children:[Object(w.jsxs)("div",{className:"imagelist",ref:this.slideRef,style:n,children:[c.map((function(e,t){return Object(w.jsx)("img",{src:e,alt:"banner"},t)})),Object(w.jsx)("img",{src:c[0],alt:"banner"})]}),Object(w.jsxs)("div",{className:"banner-shop",children:[Object(w.jsx)("div",{children:"ALWAYS BE"}),Object(w.jsx)("div",{children:"ORIGINAL"}),Object(w.jsx)("div",{children:"NEW ARRIVALS ARE HERE"}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{children:"Shop Now"})})]})]})}}]),c}(n.Component),M=function(){return Object(w.jsxs)("div",{className:"main-home",children:[Object(w.jsx)(H,{}),Object(w.jsx)("div",{children:Object(w.jsx)("p",{children:"fawefawe"})})]})};c(72);var P=function(){return Object(w.jsx)(s.a.Fragment,{children:Object(w.jsxs)(x.a,{children:[Object(w.jsx)(S,{}),Object(w.jsxs)(f.d,{children:[Object(w.jsx)(f.b,{exact:!0,path:"/home",component:M}),Object(w.jsx)(f.b,{path:"/about",component:C}),Object(w.jsx)(f.a,{to:"/home"})]})]})})};i.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(r.a,{store:u,children:Object(w.jsx)(P,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.ef125659.chunk.js.map