(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{19:function(e,t,a){e.exports={navbar:"Navbar_navbar__1fiE_",navbar__link:"Navbar_navbar__link__1kqSJ",logout__btn:"Navbar_logout__btn__3GsPb"}},20:function(e,t,a){e.exports={pagination:"Pagination_pagination__2krJz",pagination__btn:"Pagination_pagination__btn__118U1",active:"Pagination_active__1jy7Y"}},25:function(e,t,a){e.exports={basicModal:"BasicModal_basicModal__2bL6e",basicModalContent:"BasicModal_basicModalContent__35Ict",active:"BasicModal_active__zWHkO"}},29:function(e,t,a){e.exports={basicHeader:"BasicHeader_basicHeader__zrxC2",basicHeader__container:"BasicHeader_basicHeader__container__1mv3f"}},39:function(e,t,a){e.exports={basicButton:"BasicButton_basicButton__258mo"}},40:function(e,t,a){e.exports={basicInput:"BasicInput_basicInput__1wrLl"}},41:function(e,t,a){e.exports={basicSelect:"BasicSelect_basicSelect__2gC4E"}},42:function(e,t,a){e.exports={basicFooter:"BasicFooter_basicFooter__19t_0"}},43:function(e,t,a){e.exports={loader:"Loader_loader__1lNMe",rotate:"Loader_rotate__2xdLR"}},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(16),s=a.n(n),r=a(4),i=a(14),o=a(3),l=a(5),j=a(15),u=a(39),b=a.n(u),d=a(0),p=function(e){var t=e.children,a=Object(j.a)(e,["children"]),c=a.className?a.className:"";return Object(d.jsx)("button",Object(l.a)(Object(l.a)({},a),{},{className:"".concat(b.a.basicButton," ").concat(c),children:t}))},O=a(29),h=a.n(O),m=function(e){var t=e.children,a=Object(j.a)(e,["children"]),c=a.className?a.className:"";return Object(d.jsx)("div",{className:"".concat(h.a.basicHeader," ").concat(c),children:Object(d.jsx)("div",{className:h.a.basicHeader__container,children:t})})},_=a(40),x=a.n(_),f=function(e){var t=e.className,a=Object(j.a)(e,["className"]),c=t||"";return Object(d.jsx)("input",Object(l.a)({className:"".concat(x.a.basicInput," ").concat(c)},a))},v=a(25),g=a.n(v),N=function(e){var t=e.children,a=e.visible,c=e.setVisible,n=[g.a.basicModal];return a&&n.push(g.a.active),Object(d.jsx)("div",{className:n.join(" "),onClick:function(){return c(!1)},children:Object(d.jsx)("div",{className:g.a.basicModalContent,onClick:function(e){return e.stopPropagation()},children:t})})},y=a(41),C=a.n(y),k=function(e){var t=e.options,a=e.defaultValue,c=e.value,n=e.onChange;return Object(d.jsxs)("select",{value:c,className:C.a.basicSelect,onChange:function(e){return n(e.target.value)},children:[Object(d.jsx)("option",{disabled:!0,value:"",children:a}),t.map((function(e){return Object(d.jsx)("option",{value:e.value,children:e.name},e.value)}))]})},S=a(42),w=a.n(S),P=function(e){return Object(d.jsx)("footer",{className:w.a.basicFooter,children:Object(d.jsxs)("p",{children:["Created 2021 by ",Object(d.jsx)("a",{href:"https://github.com/voverg",target:"_blank",rel:"noreferrer",children:"Voverg"})]})})},B=a(43),I=a.n(B),M=function(e){return Object(d.jsx)("div",{className:I.a.loader})},L=a(19),A=a.n(L),H=Object(c.createContext)(null),F=function(e){var t=e.className?e.className:"",a=Object(c.useContext)(H),n=(a.isAuth,a.setIsAuth);return Object(d.jsxs)("div",{className:"".concat(A.a.navbar," ").concat(t),children:[Object(d.jsx)(i.b,{to:"/posts",className:A.a.navbar__link,children:"\u041f\u043e\u0441\u0442\u044b"}),Object(d.jsx)(i.b,{to:"/about",className:A.a.navbar__link,children:"\u041e \u0431\u043b\u043e\u0433\u0435"}),Object(d.jsx)(p,{className:A.a.logout__btn,onClick:function(){n(!1),localStorage.removeItem("auth")},children:"\u0412\u044b\u0439\u0442\u0438"})]})},E=function(e,t){return Math.ceil(e/t)},V=a(20),q=a.n(V),D=function(e){var t=e.totalPages,a=e.page,c=e.changePage,n=Object(j.a)(e,["totalPages","page","changePage"]),s=n.className?n.className:"",r=function(e){for(var t=[],a=0;a<e;a++)t.push(a+1);return t}(t);return Object(d.jsx)("div",{className:"".concat(q.a.pagination," ").concat(s),children:r.map((function(e){return Object(d.jsx)(p,{className:e===a?"".concat(q.a.pagination__btn," ").concat(q.a.active):q.a.pagination__btn,onClick:function(){return c(e)},children:e},e)}))})},J=function(e){return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsxs)(m,{children:[Object(d.jsx)("h1",{className:"page__header-title",children:"\u041e \u0431\u043b\u043e\u0433\u0435"}),Object(d.jsx)(F,{})]}),Object(d.jsxs)("div",{className:"page__content container",children:[Object(d.jsx)("h2",{className:"page__content-title",children:"\u042d\u0442\u043e \u0443\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u043d\u0430 React."}),Object(d.jsx)("h3",{className:"",children:"\u0417\u0434\u0435\u0441\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435:"}),Object(d.jsxs)("ul",{className:"about__list",children:[Object(d.jsx)("li",{className:"about__list-item",children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u043f\u0438\u0441\u043a\u043e \u043f\u043e\u0441\u0442\u043e\u0432"}),Object(d.jsx)("li",{className:"about__list-item",children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u043e\u0441\u0442\u0430 \u043f\u043e \u043a\u043b\u0438\u043a\u0443 \u043d\u0430 \u043d\u0435\u0433\u043e"}),Object(d.jsx)("li",{className:"about__list-item",children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u043a \u043f\u043e\u0441\u0442\u0443"}),Object(d.jsx)("li",{className:"about__list-item",children:"\u041e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c \u043f\u043e\u0438\u0441\u043a \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e \u043f\u043e\u0441\u0442\u0430"}),Object(d.jsx)("li",{className:"about__list-item",children:"\u0412\u044b\u0431\u0438\u0440\u0430\u0442\u044c \u043a\u043e\u043b-\u0432\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u0445 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043f\u043e\u0441\u0442\u043e\u0432"}),Object(d.jsx)("li",{className:"about__list-item",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0441\u0442\u043e\u0432 \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e, \u043b\u0438\u0431\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044e"}),Object(d.jsx)("li",{className:"about__list-item",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u043e\u0441\u0442"}),Object(d.jsx)("li",{className:"about__list-item",children:"\u0423\u0434\u0430\u043b\u044f\u0442\u044c \u043f\u043e\u0441\u0442"}),Object(d.jsx)("li",{className:"about__list-item",children:"\u0421\u0430\u0439\u0442 \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u043e\u0432\u0430\u043d \u0434\u043b\u044f \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432"})]})]}),Object(d.jsx)(P,{})]})},z=a(24),R=a(7),G=a.n(R),U=a(12),W=a(46),Y=a(47),K=a(26),Q=a.n(K),T=function(){function e(){Object(W.a)(this,e)}return Object(Y.a)(e,null,[{key:"getAll",value:function(){var e=Object(U.a)(G.a.mark((function e(){var t,a,c,n=arguments;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:10,a=n.length>1&&void 0!==n[1]?n[1]:1,e.next=4,Q.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_limit:t,_page:a}});case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getById",value:function(){var e=Object(U.a)(G.a.mark((function e(t){var a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.get("https://jsonplaceholder.typicode.com/posts/".concat(t),{});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCommentsByPostId",value:function(){var e=Object(U.a)(G.a.mark((function e(t){var a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.get("https://jsonplaceholder.typicode.com/posts/".concat(t,"/comments"),{});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),X=function(e){var t=Object(c.useState)(!1),a=Object(r.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(""),o=Object(r.a)(i,2),l=o[0],j=o[1];return[function(){var t=Object(U.a)(G.a.mark((function t(){var a=arguments;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!0),t.next=4,e.apply(void 0,a);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),j(t.t0.message);case 9:return t.prev=9,s(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}(),n,l]},Z=function(e,t,a){var n=function(e,t){return Object(c.useMemo)((function(){return t?Object(z.a)(e).sort((function(e,a){return e[t].localeCompare(a[t])})):e}),[t,e])}(e,t);return Object(c.useMemo)((function(){return n.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}))}),[a,n])},$=[{path:"/",component:J,exact:!0},{path:"/posts",component:function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)({sort:"",query:""}),i=Object(r.a)(s,2),o=i[0],l=i[1],j=Object(c.useState)(!1),u=Object(r.a)(j,2),b=u[0],p=u[1],O=Object(c.useState)(0),h=Object(r.a)(O,2),m=h[0],_=h[1],x=Object(c.useState)(10),f=Object(r.a)(x,2),v=f[0],g=f[1],y=Object(c.useState)(1),C=Object(r.a)(y,2),k=C[0],S=C[1],w=Z(a,o.sort,o.query),B=(Object(c.useRef)(),X(Object(U.a)(G.a.mark((function e(){var t,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getAll(v,k);case 2:t=e.sent,n(t.data),a=t.headers["x-total-count"],_(E(a,v));case 6:case"end":return e.stop()}}),e)}))))),I=Object(r.a)(B,3),L=I[0],A=I[1],H=I[2];Object(c.useEffect)((function(){L()}),[k,v]);return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(N,{visible:b,setVisible:p,children:Object(d.jsx)(ce,{createPost:function(e){n([].concat(Object(z.a)(a),[e])),p(!1)},visible:b})}),Object(d.jsx)(ne,{filter:o,setFilter:l,setModal:p}),H&&Object(d.jsxs)("h2",{className:"page__content-title container",children:["\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 ",H]}),A&&Object(d.jsx)("div",{className:"post-list container",children:Object(d.jsx)(M,{})}),Object(d.jsx)(ie,{posts:w,title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0441\u0442\u043e\u0432",removePost:function(e){n(a.filter((function(t){return t.id!==e.id})))},filter:o,setFilter:l,limit:v,setLimit:g}),Object(d.jsx)(D,{className:"container",totalPages:m,page:k,changePage:function(e){S(e)}}),Object(d.jsx)(P,{})]})},exact:!0},{path:"/posts/:id",component:function(e){var t=Object(o.h)(),a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],l=Object(c.useState)([]),j=Object(r.a)(l,2),u=j[0],b=j[1],p=X(function(){var e=Object(U.a)(G.a.mark((function e(t){var a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getById(t);case 2:a=e.sent,i(a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=Object(r.a)(p,3),h=O[0],_=O[1],x=(O[2],X(function(){var e=Object(U.a)(G.a.mark((function e(t){var a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getCommentsByPostId(t);case 2:a=e.sent,b(a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),f=Object(r.a)(x,3),v=f[0];f[1],f[2];return Object(c.useEffect)((function(){h(t.id),v(t.id)}),[]),Object(d.jsxs)("div",{className:"page",children:[Object(d.jsxs)(m,{children:[Object(d.jsxs)("h1",{className:"page__header-title",children:["\u041f\u043e\u0441\u0442 \u0441 ID = ",t.id]}),Object(d.jsx)(F,{})]}),_?Object(d.jsx)("div",{className:"post-list post-list__loader",children:Object(d.jsx)(M,{})}):Object(d.jsxs)("div",{className:"page__content container",children:[Object(d.jsx)("h2",{className:"page__content-title",children:s.title}),Object(d.jsx)("p",{children:s.body})]}),Object(d.jsx)("h2",{className:"container",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"}),_?Object(d.jsx)("div",{className:"post-list post-list__loader",children:Object(d.jsx)(M,{})}):u.map((function(e){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"\u0418\u043c\u044f:"})," ",e.name]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"\u042d\u043b. \u043f\u043e\u0447\u0442\u0430:"})," ",e.email]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439:"})," ",e.body]})]},e.id)})),Object(d.jsx)(P,{})]})},exact:!0},{path:"/about",component:J,exact:!1}],ee=[{path:"/login",component:function(e){var t=Object(c.useContext)(H),a=(t.isAuth,t.setIsAuth);return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(m,{children:Object(d.jsx)("h1",{className:"login__title",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})}),Object(d.jsxs)("div",{className:"page__content",children:[Object(d.jsx)("h2",{className:"page__content-title",children:"\u0427\u0442\u043e\u0431\u044b \u0432\u043e\u0439\u0442\u0438, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(d.jsxs)("form",{className:"login-form",onSubmit:function(e){e.preventDefault(),a(!0),localStorage.setItem("auth","true")},children:[Object(d.jsx)(f,{type:"text",className:"post-form__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d..."}),Object(d.jsx)(f,{type:"password",className:"post-form__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c..."}),Object(d.jsx)("div",{className:"post-form__btns",children:Object(d.jsx)(p,{children:"\u0412\u043e\u0439\u0442\u0438"})})]})]}),Object(d.jsx)(P,{})]})},exact:!0}],te=function(e){var t=Object(c.useContext)(H),a=t.isAuth;return t.isLoading?Object(d.jsx)("div",{className:"post-list container",children:Object(d.jsx)(M,{})}):a?Object(d.jsxs)(o.d,{children:[$.map((function(e){return Object(d.jsx)(o.b,{path:e.path,component:e.component,exact:e.exact},e.path)})),Object(d.jsx)(o.a,{to:"/about"})]}):Object(d.jsxs)(o.d,{children:[ee.map((function(e){return Object(d.jsx)(o.b,{path:e.path,component:e.component,exact:e.exact},e.path)})),Object(d.jsx)(o.a,{to:"/login"})]})},ae=function(e){e.number;var t=e.removePost,a=e.post,c=a.id,n=a.title,s=a.body,r=Object(o.g)();return Object(d.jsxs)("div",{className:"post",children:[Object(d.jsxs)("div",{className:"post__content",onClick:function(){return r.push("/posts/".concat(c))},children:[Object(d.jsxs)("h3",{className:"post__title",children:[c," ",n]}),Object(d.jsx)("div",{children:s})]}),Object(d.jsx)("div",{className:"post__btns",children:Object(d.jsx)(p,{onClick:function(){return t(a)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u0441\u0442"})})]})},ce=function(e){var t=e.createPost,a=e.visible,n=Object(c.useState)({title:"",body:""}),s=Object(r.a)(n,2),i=s[0],o=s[1];Object(c.useMemo)((function(){a||o(Object(l.a)(Object(l.a)({},i),{},{title:"",body:""}))}),[a]);return Object(d.jsxs)("form",{className:"post-form",children:[Object(d.jsx)("h2",{className:"post-form__title",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0442"}),Object(d.jsx)(f,{type:"text",className:"post-form__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430",value:i.title,onChange:function(e){return o(Object(l.a)(Object(l.a)({},i),{},{title:e.target.value}))}}),Object(d.jsx)(f,{type:"text",className:"post-form__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430",value:i.body,onChange:function(e){return o(Object(l.a)(Object(l.a)({},i),{},{body:e.target.value}))}}),Object(d.jsx)("div",{className:"post-form__btns",children:Object(d.jsx)(p,{onClick:function(e){if(e.preventDefault(),i.title&&i.body){var a=Object(l.a)(Object(l.a)({},i),{},{id:Date.now()});t(a)}},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442"})})]})},ne=function(e){var t=e.filter,a=e.setFilter,c=e.setModal;return Object(d.jsxs)(m,{children:[Object(d.jsx)("h1",{className:"page__header-title",children:"\u041f\u043e\u0441\u0442\u044b"}),Object(d.jsx)(F,{}),Object(d.jsxs)("div",{className:"page__header-content",children:[Object(d.jsx)(p,{className:"add-post__btn",onClick:function(){return c(!0)},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"}),Object(d.jsx)(f,{type:"text",className:"page__header-search",placeholder:"\u041f\u043e\u0438\u0441\u043a...",value:t.query,onChange:function(e){return a(Object(l.a)(Object(l.a)({},t),{},{query:e.target.value}))}})]})]})},se=a(85),re=a(84),ie=function(e){var t=e.posts,a=e.title,c=e.removePost,n=e.filter,s=e.setFilter,r=e.limit,i=e.setLimit;return t.length?Object(d.jsxs)("div",{className:"page__content post-list container",children:[Object(d.jsxs)("div",{className:"post-list__header",children:[Object(d.jsx)("h2",{className:"post-list__title",children:a}),Object(d.jsxs)("div",{className:"post-list__selects",children:[Object(d.jsx)(k,{defaultValue:"\u041a\u043e\u043b-\u0432\u043e \u043f\u043e\u0441\u0442\u043e\u0432",value:r,onChange:function(e){return i(e)},options:[{value:5,name:"5"},{value:10,name:"10"},{value:15,name:"15"},{value:20,name:"20"},{value:-1,name:"\u0412\u0441\u0435 \u043f\u043e\u0441\u0442\u044b"}]}),Object(d.jsx)(k,{defaultValue:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",value:n.sort,onChange:function(e){s(Object(l.a)(Object(l.a)({},n),{},{sort:e}))},options:[{value:"title",name:"\u041f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e"},{value:"body",name:"\u041f\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044e"}]})]})]}),Object(d.jsx)(se.a,{children:t.map((function(e,t){return Object(d.jsx)(re.a,{timeout:100,classNames:"post",children:Object(d.jsx)(ae,{number:t+1,post:e,removePost:c})},e.id)}))})]}):Object(d.jsx)("div",{className:"page__content post-list container",children:Object(d.jsx)("h2",{className:"page__content-title",children:"\u041f\u043e\u0441\u0442\u043e\u0432 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})})},oe=(a(81),function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!0),o=Object(r.a)(s,2),l=o[0],j=o[1];return Object(c.useEffect)((function(){localStorage.getItem("auth")&&n(!0),j(!1)}),[]),Object(d.jsx)(H.Provider,{value:{isAuth:a,setIsAuth:n,isLoading:l},children:Object(d.jsx)(i.a,{children:Object(d.jsx)(te,{})})})});s.a.render(Object(d.jsx)(oe,{}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.d2388112.chunk.js.map