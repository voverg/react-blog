(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{10:function(t,e,c){t.exports={basicInput:"BasicInput_basicInput__1lXGf"}},11:function(t,e,c){t.exports={basicSelect:"BasicSelect_basicSelect__E-XVq"}},18:function(t,e,c){},19:function(t,e,c){"use strict";c.r(e);var n=c(2),s=c(8),a=c.n(s),o=c(7),r=c(4),i=c(1),l=c(12),u=c(9),b=c.n(u),j=c(0),d=function(t){var e=t.children,c=Object(l.a)(t,["children"]);return Object(j.jsx)("button",Object(i.a)(Object(i.a)({},c),{},{className:b.a.basicButton,children:e}))},O=c(10),p=c.n(O),h=function(t){return Object(j.jsx)("input",Object(i.a)({className:p.a.basicInput},t))},v=function(t){var e=t.createPost,c=Object(n.useState)({title:"",body:""}),s=Object(r.a)(c,2),a=s[0],o=s[1];return Object(j.jsxs)("form",{className:"post-form",children:[Object(j.jsx)(h,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430",value:a.title,onChange:function(t){return o(Object(i.a)(Object(i.a)({},a),{},{title:t.target.value}))}}),Object(j.jsx)(h,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430",value:a.body,onChange:function(t){return o(Object(i.a)(Object(i.a)({},a),{},{body:t.target.value}))}}),Object(j.jsx)(d,{onClick:function(t){if(t.preventDefault(),a.title&&a.body){var c=Object(i.a)(Object(i.a)({},a),{},{id:Date.now()});e(c),o(Object(i.a)(Object(i.a)({},a),{},{title:"",body:""}))}},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442"})]})},f=function(t){var e=t.number,c=t.removePost,n=t.post,s=n.title,a=n.body;return Object(j.jsxs)("div",{className:"post",children:[Object(j.jsxs)("div",{className:"post__content",children:[Object(j.jsxs)("h2",{children:[e," ",s]}),Object(j.jsx)("div",{children:a})]}),Object(j.jsx)("div",{className:"post__btns",children:Object(j.jsx)(d,{onClick:function(){return c(n)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u0441\u0442"})})]})},x=function(t){var e=t.posts,c=t.title,n=t.removePost;return Object(j.jsxs)("div",{className:"post-list",children:[Object(j.jsx)("h1",{className:"post-list__header",children:c}),e.map((function(t,e){return Object(j.jsx)(f,{number:e+1,post:t,removePost:n},t.id)}))]})},m=c(11),_=c.n(m),N=function(t){var e=t.options,c=t.defaultValue,n=t.value,s=t.sortPosts;return Object(j.jsxs)("select",{value:n,className:_.a.basicSelect,onChange:function(t){return s(t.target.value)},children:[Object(j.jsx)("option",{disabled:!0,value:"",children:c}),e.map((function(t){return Object(j.jsx)("option",{value:t.value,children:t.name},t.value)}))]})},g=(c(18),function(){var t=Object(n.useState)([]),e=Object(r.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)(""),i=Object(r.a)(a,2),l=i[0],u=i[1],b=0!==c.length?Object(j.jsx)(x,{posts:c,title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0441\u0442\u043e\u0432",removePost:function(t){s(c.filter((function(e){return e.id!==t.id})))}}):Object(j.jsx)("h1",{className:"post-list__header",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0441\u0442\u043e\u0432 \u043f\u0443\u0441\u0442"});return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(v,{createPost:function(t){s([].concat(Object(o.a)(c),[t]))}}),Object(j.jsx)("hr",{}),Object(j.jsx)(N,{defaultValue:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",value:l,sortPosts:function(t){u(t),s(Object(o.a)(c).sort((function(e,c){return e[t].localeCompare(c[t])})))},options:[{value:"title",name:"\u041f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e"},{value:"body",name:"\u041f\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044e"}]}),b]})});a.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))},9:function(t,e,c){t.exports={basicButton:"BasicButton_basicButton__O0PhB"}}},[[19,1,2]]]);
//# sourceMappingURL=main.fffa35d8.chunk.js.map