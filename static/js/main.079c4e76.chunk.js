(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{17:function(e,t,c){e.exports={basicModal:"BasicModal_basicModal__2bL6e",basicModalContent:"BasicModal_basicModalContent__35Ict",active:"BasicModal_active__zWHkO"}},28:function(e,t,c){e.exports={basicButton:"BasicButton_basicButton__258mo"}},29:function(e,t,c){e.exports={basicInput:"BasicInput_basicInput__1wrLl"}},30:function(e,t,c){e.exports={basicSelect:"BasicSelect_basicSelect__2gC4E"}},31:function(e,t,c){e.exports={loader:"Loader_loader__1lNMe",rotate:"Loader_rotate__2xdLR"}},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(9),s=c.n(a),r=c(16),i=c(5),o=c.n(i),l=c(6),u=c(4),j=c(2),b=c(35),d=c(28),O=c.n(d),f=c(0),p=function(e){var t=e.children,c=Object(b.a)(e,["children"]);return Object(f.jsx)("button",Object(j.a)(Object(j.a)({},c),{},{className:O.a.basicButton,children:t}))},v=c(29),h=c.n(v),x=function(e){return Object(f.jsx)("input",Object(j.a)({className:h.a.basicInput},e))},m=function(e){var t=e.filter,c=e.setFilter;return Object(f.jsx)(x,{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a...",value:t.query,onChange:function(e){return c(Object(j.a)(Object(j.a)({},t),{},{query:e.target.value}))}})},_=function(e){var t=e.filter,c=e.setFilter,n=e.setModal;return Object(f.jsx)("div",{className:"post-header",children:Object(f.jsxs)("div",{className:"post-header__nav container",children:[Object(f.jsx)("div",{className:"nav-item",children:Object(f.jsx)(p,{onClick:function(){return n(!0)},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})}),Object(f.jsx)("div",{className:"nav-item",children:Object(f.jsx)("h1",{className:"post-header__title",children:"\u0411\u043b\u043e\u0433"})}),Object(f.jsx)("div",{className:"nav-item",children:Object(f.jsx)(m,{style:{marginBottom:"2px"},filter:t,setFilter:c})})]})})},N=function(e){var t=e.createPost,c=e.visible,a=Object(n.useState)({title:"",body:""}),s=Object(u.a)(a,2),r=s[0],i=s[1];Object(n.useMemo)((function(){c||i(Object(j.a)(Object(j.a)({},r),{},{title:"",body:""}))}),[c]);return Object(f.jsxs)("form",{className:"post-form",children:[Object(f.jsx)("h2",{className:"post-form__title",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0442"}),Object(f.jsx)(x,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430",value:r.title,onChange:function(e){return i(Object(j.a)(Object(j.a)({},r),{},{title:e.target.value}))}}),Object(f.jsx)(x,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430",value:r.body,onChange:function(e){return i(Object(j.a)(Object(j.a)({},r),{},{body:e.target.value}))}}),Object(f.jsx)(p,{onClick:function(e){if(e.preventDefault(),r.title&&r.body){var c=Object(j.a)(Object(j.a)({},r),{},{id:Date.now()});t(c)}},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442"})]})},g=c(67),y=c(66),C=function(e){var t=e.number,c=e.removePost,n=e.post,a=n.title,s=n.body;return Object(f.jsxs)("div",{className:"post",children:[Object(f.jsxs)("div",{className:"post__content",children:[Object(f.jsxs)("h3",{children:[t," ",a]}),Object(f.jsx)("div",{children:s})]}),Object(f.jsx)("div",{className:"post__btns",children:Object(f.jsx)(p,{onClick:function(){return c(n)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u0441\u0442"})})]})},M=c(30),k=c.n(M),S=function(e){var t=e.options,c=e.defaultValue,n=e.value,a=e.sortPosts;return Object(f.jsxs)("select",{value:n,className:k.a.basicSelect,onChange:function(e){return a(e.target.value)},children:[Object(f.jsx)("option",{disabled:!0,value:"",children:c}),t.map((function(e){return Object(f.jsx)("option",{value:e.value,children:e.name},e.value)}))]})},w=function(e){var t=e.filter,c=e.setFilter;return Object(f.jsx)(S,{defaultValue:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",value:t.sort,sortPosts:function(e){c(Object(j.a)(Object(j.a)({},t),{},{sort:e}))},options:[{value:"title",name:"\u041f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e"},{value:"body",name:"\u041f\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044e"}]})},B=function(e){var t=e.posts,c=e.title,n=e.removePost,a=e.filter,s=e.setFilter;return t.length?Object(f.jsxs)("div",{className:"post-list container",children:[Object(f.jsxs)("div",{className:"post-list__header",children:[Object(f.jsx)("h2",{className:"post-list__title",children:c}),Object(f.jsx)(w,{filter:a,setFilter:s})]}),Object(f.jsx)(g.a,{children:t.map((function(e,t){return Object(f.jsx)(y.a,{timeout:100,classNames:"post",children:Object(f.jsx)(C,{number:t+1,post:e,removePost:n})},e.id)}))})]}):Object(f.jsx)("h2",{className:"post-list post-list__title",children:"\u041f\u043e\u0441\u0442\u043e\u0432 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})},P=function(e){return Object(f.jsx)("footer",{className:"post-footer",children:Object(f.jsxs)("p",{children:["Created 2021 by ",Object(f.jsx)("a",{href:"https://github.com/voverg",target:"_blank",rel:"noreferrer",children:"Voverg"})]})})},F=c(17),L=c.n(F),I=function(e){var t=e.children,c=e.visible,n=e.setVisible,a=[L.a.basicModal];return c&&a.push(L.a.active),Object(f.jsx)("div",{className:a.join(" "),onClick:function(){return n(!1)},children:Object(f.jsx)("div",{className:L.a.basicModalContent,onClick:function(e){return e.stopPropagation()},children:t})})},V=c(31),q=c.n(V),A=function(e){return Object(f.jsx)("div",{className:q.a.loader})},E=c(32),D=c(33),J=c(34),z=c.n(J),H=function(){function e(){Object(E.a)(this,e)}return Object(D.a)(e,null,[{key:"getAll",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,n,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:10,c=a.length>1&&void 0!==a[1]?a[1]:1,e.next=4,z.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_limit:t,_page:c}});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),R=function(e,t){return Math.ceil(e/t)},W=function(e,t,c){var a=function(e,t){return Object(n.useMemo)((function(){return t?Object(r.a)(e).sort((function(e,c){return e[t].localeCompare(c[t])})):e}),[t,e])}(e,t);return Object(n.useMemo)((function(){return a.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))}),[c,a])},G=(c(63),function(){for(var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)({sort:"",query:""}),i=Object(u.a)(s,2),j=i[0],b=i[1],d=Object(n.useState)(!1),O=Object(u.a)(d,2),p=O[0],v=O[1],h=Object(n.useState)(0),x=Object(u.a)(h,2),m=x[0],g=x[1],y=Object(n.useState)(10),C=Object(u.a)(y,2),M=C[0],k=(C[1],Object(n.useState)(1)),S=Object(u.a)(k,2),w=S[0],F=(S[1],W(c,j.sort,j.query)),L=[],V=0;V<m;V++)L.push(V+1);var q=function(e){var t=Object(n.useState)(!1),c=Object(u.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),i=Object(u.a)(r,2),j=i[0],b=i[1];return[function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!0),t.next=4,e();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),b(t.t0.message);case 9:return t.prev=9,s(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}(),a,j]}(Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.getAll(M,w);case 2:t=e.sent,a(t.data),c=t.headers["x-total-count"],g(R(c,M));case 6:case"end":return e.stop()}}),e)})))),E=Object(u.a)(q,3),D=E[0],J=E[1],z=E[2];Object(n.useEffect)((function(){D()}),[]);return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(I,{visible:p,setVisible:v,children:Object(f.jsx)(N,{createPost:function(e){a([].concat(Object(r.a)(c),[e])),v(!1)},visible:p})}),Object(f.jsx)(_,{filter:j,setFilter:b,setModal:v}),z&&Object(f.jsxs)("h2",{className:"post-list container",children:["\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 ",z]}),J?Object(f.jsx)("div",{className:"post-list post-list__loader",children:Object(f.jsx)(A,{})}):Object(f.jsx)(B,{posts:F,title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0441\u0442\u043e\u0432",removePost:function(e){a(c.filter((function(t){return t.id!==e.id})))},filter:j,setFilter:b}),Object(f.jsx)(P,{})]})});s.a.render(Object(f.jsx)(G,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.079c4e76.chunk.js.map