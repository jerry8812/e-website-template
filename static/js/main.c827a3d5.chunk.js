(this["webpackJsonpe-website-template"]=this["webpackJsonpe-website-template"]||[]).push([[0],{13:function(e,t,c){"use strict";c.d(t,"a",(function(){return o})),c.d(t,"b",(function(){return j}));var n=c(12),r=c.n(n),s=c(17),a=c(18),i=c(8),o=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(c){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.get(e);case 2:n=t.sent,c((r=n.data,{type:i.a.SET_ALL_PRODUCTS,payload:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return{type:i.a.SET_PRODUCT_TYPE,payload:e}}},18:function(e,t,c){"use strict";var n=c(35),r=c.n(n);t.a=r.a.create({baseURL:"https://fakestoreapi.com"})},71:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(15),a=c.n(s),i=c(9),o=c(11),j=c(6),l=c(8),d={categories:[]},b={products:[]},u=Object(o.b)({allCategories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case l.a.SET_CATEGORIES:return Object(j.a)(Object(j.a)({},e),{},{categories:n});default:return e}},allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case l.a.SET_ALL_PRODUCTS:return Object(j.a)(Object(j.a)({},e),{},{products:n});default:return e}},productType:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{productType:"all"},t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case l.a.SET_PRODUCT_TYPE:return Object(j.a)(Object(j.a)({},e),{},{productType:n});default:return e}}}),O=c(34),h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,x=Object(o.d)(u,h(Object(o.a)(O.a))),f=c(19),p=c(2),v=c(16),m=c(12),T=c.n(m),E=c(17),g=c(18),C=c(13),S=c(1);function y(e){return Object(S.jsx)(f.b,Object(j.a)({activeClassName:"active-link"},e))}var _=r.a.forwardRef((function(e,t){var c=Object(i.b)(),r=Object(n.useState)(!1),s=Object(v.a)(r,2),a=s[0],o=s[1],j=Object(n.useRef)(),l=e.categories.map((function(t,n){return Object(S.jsx)("li",{children:Object(S.jsx)(y,{to:"/product/".concat(t),onClick:function(){return function(t){e.handleToggle(),c(Object(C.b)(t))}(t)},children:t})},n)}));return Object(S.jsxs)("div",{className:"sidebar",ref:t,children:[Object(S.jsx)("i",{onClick:function(){return e.handleToggle()},children:"\uea0d"}),Object(S.jsxs)("ul",{className:"firstnav",children:[Object(S.jsxs)("li",{onClick:function(){return j.current.classList.toggle("open-sidebar-subnav"),void o(!a)},children:[Object(S.jsxs)("div",{className:"sidebar-shop",children:["shop",Object(S.jsx)("i",{style:{display:a?"none":"block"},children:"\uea0a"}),Object(S.jsx)("i",{style:{display:a?"block":"none"},children:"\uea0b"})]}),Object(S.jsx)("ul",{className:"sidebar-subnav subnav",ref:j,children:l})]}),Object(S.jsx)("li",{children:Object(S.jsx)(y,{to:"/home",children:"about us"})}),Object(S.jsx)("li",{children:Object(S.jsx)(y,{to:"/home",children:"faq"})}),Object(S.jsx)("li",{children:Object(S.jsx)(y,{to:"/home",children:"track your order"})})]})]})}));var k=function(){var e=Object(i.b)();Object(n.useEffect)((function(){e(function(){var e=Object(E.a)(T.a.mark((function e(t){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/products/categories");case 2:c=e.sent,t((n=c.data,{type:l.a.SET_CATEGORIES,payload:n}));case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=r.a.createRef(),c=Object(n.useState)(!1),s=Object(v.a)(c,2),a=s[0],o=s[1],j=Object(i.c)((function(e){return e.allCategories.categories})),d=j.map((function(t,c){return Object(S.jsx)("li",{onClick:function(){return e(Object(C.b)(t))},children:Object(S.jsx)(y,{to:"/product/".concat(t),children:t})},c)})),b=function(){t.current.classList.toggle("open-side-bar"),o(!a)};return Object(S.jsx)("header",{children:Object(S.jsxs)("div",{className:"navbar",children:[Object(S.jsx)("div",{className:"webpage-mask",style:{display:a?"block":"none"},onClick:function(){return b()}}),Object(S.jsx)("div",{className:"nav-toggle",children:Object(S.jsx)("i",{onClick:function(){return b()},children:" \ue9bb "})}),Object(S.jsx)(_,{openSideBar:a,handleToggle:b,categories:j,ref:t}),Object(S.jsx)("div",{className:"logo",children:Object(S.jsx)("h1",{children:Object(S.jsx)(y,{to:"/home",title:"E.C.SHOP",children:"E.C.SHOP"})})}),Object(S.jsx)("div",{className:"nav",children:Object(S.jsxs)("ul",{className:"firstnav",children:[Object(S.jsxs)("li",{className:"nav-shop",children:[Object(S.jsx)(y,{to:"/product/all",onClick:function(){return e(Object(C.b)("all"))},children:" shop "}),Object(S.jsx)("ul",{className:"nav-category subnav",children:d})]}),Object(S.jsx)("li",{children:Object(S.jsx)(y,{to:"/about",children:"about"})}),Object(S.jsx)("li",{children:Object(S.jsx)(y,{to:"/home",children:" faq "})}),Object(S.jsx)("li",{children:Object(S.jsx)(y,{to:"/home",children:" track your order "})})]})}),Object(S.jsx)("div",{className:"navbar-icons",children:Object(S.jsxs)("div",{children:[Object(S.jsx)("i",{children:" \ue971 "}),Object(S.jsx)("i",{children:" \ue986 "}),Object(S.jsxs)("i",{className:"icon-cart",children:[" \ue93a ",Object(S.jsx)("div",{className:"cart-count",children:" 3 "})]})]})})]})})};function R(){return Object(S.jsxs)("footer",{children:[Object(S.jsxs)("div",{className:"footer-icons",children:[Object(S.jsx)("a",{href:"/",children:Object(S.jsx)("i",{children:"\uea90"})}),Object(S.jsx)("a",{href:"/",children:Object(S.jsx)("i",{children:"\uea92"})}),Object(S.jsx)("a",{href:"/",children:Object(S.jsx)("i",{children:"\ueaca"})})]}),Object(S.jsxs)("div",{className:"footer-links",children:[Object(S.jsx)(y,{to:"/home",children:"Contant us"}),Object(S.jsx)(y,{to:"/home",children:"Terms & conditions"}),Object(S.jsx)(y,{to:"/home",children:"Refund police"}),Object(S.jsx)(y,{to:"/home",children:"Stores & stockists"}),Object(S.jsx)(y,{to:"/home",children:"Terms of service"})]}),Object(S.jsx)("div",{children:Object(S.jsx)("p",{children:"E.C.Shop\xa0\xa0\xa0\xa0\xa0 High quality online shop in Christchurch since 2016"})}),Object(S.jsx)("div",{children:Object(S.jsx)("p",{children:"\xa9\xa02021 by Jerry Wang"})})]})}function N(){return Object(S.jsx)("div",{className:".header_font",children:Object(S.jsx)("h5",{style:{textAlign:"center"},children:"Loading..."})})}c(71);var P=Object(n.lazy)((function(){return c.e(4).then(c.bind(null,74))})),w=Object(n.lazy)((function(){return c.e(5).then(c.bind(null,75))})),L=Object(n.lazy)((function(){return c.e(3).then(c.bind(null,73))}));var D=function(){return Object(S.jsx)(r.a.Fragment,{children:Object(S.jsxs)(f.a,{children:[Object(S.jsx)(k,{}),Object(S.jsx)(p.d,{children:Object(S.jsxs)(n.Suspense,{fallback:Object(S.jsx)(N,{}),children:[Object(S.jsx)(p.b,{exact:!0,path:"/home",component:P}),Object(S.jsx)(p.b,{path:"/about",component:L}),Object(S.jsx)(p.b,{path:"/product/:type",component:w}),Object(S.jsx)(p.a,{to:"/home"})]})}),Object(S.jsx)(R,{})]})})};a.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(i.a,{store:x,children:Object(S.jsx)(D,{})})}),document.getElementById("root"))},8:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var n={FETCH_PRODUCTS:"FETCH_PRODUCTS",SET_ALL_PRODUCTS:"SET_ALL_PRODUCTS",SET_PRODUCT_TYPE:"SET_PRODUCT_TYPE",SET_CATEGORIES:"SET_CATEGORIES",FETCH_CATEGORIES:"FETCH_CATEGORIES"}}},[[72,1,2]]]);
//# sourceMappingURL=main.c827a3d5.chunk.js.map