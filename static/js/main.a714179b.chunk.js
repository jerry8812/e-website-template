(this["webpackJsonpe-website-template"]=this["webpackJsonpe-website-template"]||[]).push([[0],{72:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(13),i=c.n(r),a=c(8),j=c(10),l=c(7),o="SET_CATEGORIES",d="SET_ALL_PRODUCTS",b={categories:[]},h={products:[]},u=Object(j.b)({allCategories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case o:return Object(l.a)(Object(l.a)({},e),{},{categories:n});default:return e}},allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case d:return Object(l.a)(Object(l.a)({},e),{},{products:n});default:return e}}}),O=c(32),x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.c,p=Object(j.d)(u,x(Object(j.a)(O.a))),m=c(17),f=c(2),v=c(11),g=c.n(v),y=c(14),N=c(15),k=c.n(N),w=function(e){return{type:o,payload:e}},S=c(16),E=c(0);function C(e){return Object(E.jsx)(m.b,Object(l.a)({activeClassName:"active-link"},e))}var R=s.a.forwardRef((function(e,t){var c=Object(n.useState)(!1),s=Object(S.a)(c,2),r=s[0],i=s[1],a=Object(n.useRef)(),j=e.categories.map((function(t,c){return Object(E.jsx)("li",{children:Object(E.jsx)(C,{to:"/product/".concat(t),onClick:function(){return e.handleToggle()},children:t})},c)}));return Object(E.jsxs)("div",{className:"sidebar",ref:t,children:[Object(E.jsx)("i",{onClick:function(){return e.handleToggle()},children:"\uea0d"}),Object(E.jsxs)("ul",{className:"firstnav",children:[Object(E.jsxs)("li",{onClick:function(){return a.current.classList.toggle("open-sidebar-subnav"),void i(!r)},children:[Object(E.jsxs)("div",{className:"sidebar-shop",children:["shop",Object(E.jsx)("i",{style:{display:r?"none":"block"},children:"\uea0a"}),Object(E.jsx)("i",{style:{display:r?"block":"none"},children:"\uea0b"})]}),Object(E.jsx)("ul",{className:"sidebar-subnav subnav",ref:a,children:j})]}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"/",children:"about us"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"/",children:"faq"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"/",children:"track your order"})})]})]})}));var T=function(){var e=s.a.createRef(),t=Object(n.useState)(!1),c=Object(S.a)(t,2),r=c[0],i=c[1],j=Object(a.c)((function(e){return e.allCategories.categories})),l=j.map((function(e,t){return Object(E.jsx)("li",{children:Object(E.jsx)(C,{to:"/product/".concat(e),children:e})},t)})),o=function(){e.current.classList.toggle("open-side-bar"),i(!r)};return Object(E.jsx)("header",{children:Object(E.jsxs)("div",{className:"navbar",children:[Object(E.jsx)("div",{className:"webpage-mask",style:{display:r?"block":"none"},onClick:function(){return o()}}),Object(E.jsx)("div",{className:"nav-toggle",children:Object(E.jsx)("i",{onClick:function(){return o()},children:" \ue9bb "})}),Object(E.jsx)(R,{openSideBar:r,handleToggle:o,categories:j,ref:e}),Object(E.jsx)("div",{className:"logo",children:Object(E.jsx)("h1",{children:Object(E.jsx)("a",{href:"/",title:"E.C.SHOP",children:"E.C.SHOP"})})}),Object(E.jsx)("div",{className:"nav",children:Object(E.jsxs)("ul",{className:"firstnav",children:[Object(E.jsxs)("li",{className:"nav-shop",children:[Object(E.jsx)(C,{to:"/product/all",children:" shop "}),Object(E.jsx)("ul",{className:"nav-category subnav",children:l})]}),Object(E.jsx)("li",{children:Object(E.jsx)(C,{to:"/about",children:"about"})}),Object(E.jsx)("li",{children:Object(E.jsx)(C,{to:"/questions",children:" faq "})}),Object(E.jsx)("li",{children:Object(E.jsx)(C,{to:"/track",children:" track your order "})})]})}),Object(E.jsx)("div",{className:"navbar-icons",children:Object(E.jsxs)("div",{children:[Object(E.jsx)("i",{children:" \ue971 "}),Object(E.jsx)("i",{children:" \ue986 "}),Object(E.jsxs)("i",{className:"icon-cart",children:[" \ue93a ",Object(E.jsx)("div",{className:"cart-count",children:" 3 "})]})]})})]})})};function I(){var e=Object(a.b)();return Object(n.useEffect)((function(){(function(){var t=Object(y.a)(g.a.mark((function t(){var c,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("https://fakestoreapi.com/products/categories").catch(console.error());case 2:c=t.sent,n=c.data.map((function(e){return"jewelery"===e?"jewellery":e})),e(w(n));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(E.jsx)(n.Fragment,{children:Object(E.jsx)(T,{})})}function A(){return Object(E.jsx)("div",{children:"About"})}var _=c(34),L=c(35),D=c(37),M=c(36),P=c.p+"static/media/women.4f2d0c45.jpg",q=c.p+"static/media/electronic.3c3438b4.jpg",H=c.p+"static/media/jewellery.aad02ea4.jpg",U=c.p+"static/media/jewellery01.b9b2e700.jpg",W=function(e){Object(D.a)(c,e);var t=Object(M.a)(c);function c(e){var n;return Object(_.a)(this,c),(n=t.call(this,e)).slideTo=function(){var e=n.state.index+1;if(e>n.state.allImages.length)return n.slideRef.current.style.transitionDuration="",n.slideRef.current.style.left=0,void setTimeout((function(){n.slideRef.current.style.transitionDuration="1s",e=1,n.setState({index:e})}));n.setState({index:e})},n.slideRef=s.a.createRef(),n.state={index:0,allImages:[P,q,H,U]},n}return Object(L.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){e.slideTo()}),2500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.state,t=e.index,c=e.allImages,n={width:100*(c.length+1)+"%",left:"-".concat(100*t,"%"),transition:"left 1s ease-out"};return Object(E.jsxs)("div",{className:"banner",children:[Object(E.jsxs)("div",{className:"imagelist",ref:this.slideRef,style:n,children:[c.map((function(e,t){return Object(E.jsx)("img",{src:e,alt:"banner"},t)})),Object(E.jsx)("img",{src:c[0],alt:"banner"})]}),Object(E.jsxs)("div",{className:"banner-shop",children:[Object(E.jsx)("div",{children:"ALWAYS BE"}),Object(E.jsx)("div",{children:"ORIGINAL"}),Object(E.jsx)("div",{children:"NEW ARRIVALS ARE HERE"}),Object(E.jsx)("div",{children:Object(E.jsx)("button",{children:"Shop Now"})})]})]})}}]),c}(n.Component),B=c.p+"static/media/women.6da7cdaf.jpg",G=c.p+"static/media/electronics.bdf8d14e.jpg",J=c.p+"static/media/men-clothing.6dbd0d1a.jpg",F=c.p+"static/media/jewellery.ecd6d103.jpg";function V(){var e=[G,F,J,B],t=Object(a.c)((function(e){return e.allCategories.categories})).map((function(t,c){return Object(E.jsxs)("div",{className:"home-product",children:[Object(E.jsx)("img",{src:e[c],alt:t}),Object(E.jsx)("div",{className:"text-on-product",children:Object(E.jsxs)("p",{children:["Shop ",t]})})]},c)}));return Object(E.jsxs)("div",{className:"main-home",children:[Object(E.jsx)(W,{}),Object(E.jsxs)("div",{className:"home-contactus",children:[Object(E.jsx)("h1",{children:"CONTACT US"}),Object(E.jsx)("p",{children:"+64 021 085 04922 - Monday to Saturday - 10 a.m to 7 p.m(GMT+12)"}),Object(E.jsxs)("p",{children:["Or by Email: ",Object(E.jsx)("a",{href:"mailto:jerry8812@hotmail.com?subject=contact us",children:"contact@ecshop.co.nz"})]})]}),Object(E.jsx)("div",{className:"home-all-products",children:t})]})}function X(){return Object(E.jsxs)("footer",{children:[Object(E.jsxs)("div",{className:"footer-icons",children:[Object(E.jsx)("a",{href:"/",children:Object(E.jsx)("i",{children:"\uea90"})}),Object(E.jsx)("a",{href:"/",children:Object(E.jsx)("i",{children:"\uea92"})}),Object(E.jsx)("a",{href:"/",children:Object(E.jsx)("i",{children:"\ueaca"})})]}),Object(E.jsxs)("div",{className:"footer-links",children:[Object(E.jsx)(C,{to:"/home",children:"Contant us"}),Object(E.jsx)(C,{to:"/home",children:"Terms & conditions"}),Object(E.jsx)(C,{to:"/home",children:"Refund police"}),Object(E.jsx)(C,{to:"/home",children:"Stores & stockists"}),Object(E.jsx)(C,{to:"/home",children:"Terms of service"})]}),Object(E.jsx)("div",{children:Object(E.jsx)("p",{children:"E.C.Shop\xa0\xa0\xa0\xa0\xa0 High quality online shop in Christchurch since 2016"})}),Object(E.jsx)("div",{children:Object(E.jsx)("p",{children:"\xa9\xa02021 by Jerry Wang"})})]})}function z(){var e=Object(f.g)().type,t=Object(a.b)();return Object(n.useEffect)((function(){(function(){var e=Object(y.a)(g.a.mark((function e(){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://fakestoreapi.com/products").catch(console.error());case 2:c=e.sent,t((n=c.data,{type:d,payload:n}));case 4:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(E.jsx)("div",{className:"main-product",children:Object(E.jsx)("div",{className:"main-product-category",children:Object(E.jsx)("h5",{children:e})})})}c(72);var Y=function(){return Object(E.jsx)(s.a.Fragment,{children:Object(E.jsxs)(m.a,{children:[Object(E.jsx)(I,{}),Object(E.jsxs)(f.d,{children:[Object(E.jsx)(f.b,{exact:!0,path:"/home",component:V}),Object(E.jsx)(f.b,{path:"/about",component:A}),Object(E.jsx)(f.b,{path:"/product/:type",component:z}),Object(E.jsx)(f.a,{to:"/home"})]}),Object(E.jsx)(X,{})]})})};i.a.render(Object(E.jsx)(s.a.StrictMode,{children:Object(E.jsx)(a.a,{store:p,children:Object(E.jsx)(Y,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.a714179b.chunk.js.map