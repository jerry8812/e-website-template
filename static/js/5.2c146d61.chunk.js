(this["webpackJsonpe-website-template"]=this["webpackJsonpe-website-template"]||[]).push([[5],{75:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return b}));var r=c(0),n=c.n(r),s=c(9),i=["Populirity","New Arrivals","Price High to Low","Price Low to High","Alphabetically, A-Z","Alphabetically, Z-A"],o=c(1);function a(){return Object(o.jsx)("div",{className:"product-productlisting",children:"ProductListing"})}var u=c(13);function l(t){var e=Object(s.b)(),c=Object(s.c)((function(t){return t.allCategories.categories})),r=Object(s.c)((function(t){return t.productType.productType}));return Object(o.jsxs)("div",{className:"product-filter header_font",children:[Object(o.jsx)("p",{children:"Category"}),Object(o.jsx)("ul",{className:"subnav",children:c.map((function(t,c){return Object(o.jsx)("li",{className:r===t?"active":"",onClick:function(){return e(Object(u.b)(t))},children:t},c)}))})]})}var d=c(16);function j(t){var e=n.a.createRef(),c=Object(r.useState)("Sort By"),s=Object(d.a)(c,2),i=s[0],a=s[1];return Object(o.jsxs)("div",{onClick:function(){e.current.classList.toggle("sort-by-items-show")},className:"drop-down-list",children:[Object(o.jsx)("p",{children:i}),Object(o.jsx)("ul",{className:"sort-by-items",ref:e,children:t.dropDownList.map((function(e,c){return Object(o.jsx)("li",{onClick:function(){return function(e){a(e),t.onChange(e)}(e)},children:e},c)}))})]})}function b(){var t=Object(s.b)(),e=Object(s.c)((function(t){return t.allProducts.products})),c=Object(s.c)((function(t){return t.productType.productType}));return Object(r.useEffect)((function(){var e="all"===c?"/products":"/products/category/".concat(c);t(Object(u.a)(e))}),[t,c]),Object(o.jsxs)("div",{className:"main-product",children:[Object(o.jsx)("div",{className:"product-category",children:Object(o.jsx)("h5",{children:c})}),Object(o.jsxs)("div",{className:"products-sort-by",children:[Object(o.jsxs)("p",{children:[e.length," items found"]}),Object(o.jsx)(j,{onChange:function(t){return t},dropDownList:i})]}),Object(o.jsxs)("div",{className:"product-filter-products",children:[Object(o.jsx)(l,{category:c}),Object(o.jsx)(a,{products:e})]})]})}}}]);
//# sourceMappingURL=5.2c146d61.chunk.js.map