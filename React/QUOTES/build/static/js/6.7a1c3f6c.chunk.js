(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{149:function(e,t,n){e.exports={comments:"Comments_comments__iZX-v"}},150:function(e,t,n){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},151:function(e,t,n){e.exports={item:"CommentItem_item__24mbD"}},152:function(e,t,n){e.exports={comments:"CommentsList_comments__valp0"}},153:function(e,t,n){e.exports={quote:"HighlightedQuote_quote__nE9T6",button:"HighlightedQuote_button__3iDRk"}},266:function(e,t,n){"use strict";n.r(t);var c=n(15),o=n(0),s=n(2),r=n(7),a=n(149),m=n.n(a),i=n(150),u=n.n(i),j=n(16),d=n(65),l=n(66),b=n(10),h=n(1),O=function(e){var t=Object(s.h)(),n=Object(o.useContext)(b.b),c=Object(o.useRef)(),r=Object(d.a)(l.a),a=r.sendRequest,m=r.status,i=r.error,O=e.onAddComment;Object(o.useEffect)((function(){"completed"!==m||i||O()}),[m,O,i]);var x=function(o){o.preventDefault();var s=c.current.value;a({token:n.token,commentData:{comment:s,quote_id:e.quoteId}}),t.go(0)};return Object(h.jsxs)("form",{className:u.a.form,onSubmit:x,children:["pending"===m&&Object(h.jsx)("div",{className:"centered",children:Object(h.jsx)(j.a,{})}),Object(h.jsxs)("div",{className:u.a.control,onSubmit:x,children:[Object(h.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(h.jsx)("textarea",{id:"comment",rows:"5",ref:c})]}),Object(h.jsx)("div",{className:u.a.actions,children:Object(h.jsx)("button",{className:"btn",children:"Add Comment"})})]})},x=n(151),f=n.n(x),p=function(e){return Object(h.jsx)("li",{className:f.a.item,children:Object(h.jsx)("p",{children:e.text})})},_=n(152),C=n.n(_),N=function(e){return Object(h.jsx)("ul",{className:C.a.comments,children:e.comments.map((function(e){return Object(h.jsx)(p,{text:e.comment},e.id)}))})},v=function(e){var t=Object(o.useState)(!1),n=Object(c.a)(t,2),r=n[0],a=n[1],i=Object(s.j)(),u=e.quote.comments;return u=Object(h.jsx)(N,{comments:u}),Object(h.jsxs)("section",{className:m.a.comments,children:[Object(h.jsx)("h2",{children:"User Comments"}),!r&&Object(h.jsx)("button",{className:"btn",onClick:function(){a(!0)},children:"Add a Comment"}),r&&Object(h.jsx)(O,{quoteId:i.quoteId,onAddComment:e.onAddComment}),u]})},k=n(153),q=n.n(k),g=function(e){return Object(h.jsxs)("figure",{className:q.a.quote,children:[Object(h.jsx)("p",{children:e.text}),Object(h.jsx)("figcaption",{children:e.author}),Object(h.jsx)("button",{className:q.a.button,onClick:e.deletionHandler,children:"Delete"})]})},w=n(58),A=n(59),E=n.n(A),F=function(){var e=Object(w.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://ec2-13-233-232-148.ap-south-1.compute.amazonaws.com:8080/quotes/".concat(t.id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t.token)}});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Could not detele quote.");case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=F;t.default=function(e){var t=Object(o.useContext)(b.b),n=Object(o.useState)(!1),a=Object(c.a)(n,2),m=a[0],i=a[1],u=Object(s.h)(),O=Object(s.k)(),x=Object(s.j)().quoteId,f=Object(d.a)(l.d,!0),p=f.sendRequest,_=f.status,C=f.data,N=f.error,k=Object(o.useCallback)((function(){p(x)}),[x,p]);if(Object(o.useEffect)((function(){p({id:x,token:t.token})}),[p,x,t,t.token]),"pending"===_)return Object(h.jsx)("div",{className:"centered",children:Object(h.jsx)(j.a,{})});if(N)return Object(h.jsx)("p",{className:"centered",children:N});if(!C)return Object(h.jsx)("p",{children:"No Quote Found"});return Object(h.jsxs)(o.Fragment,{children:[m&&Object(h.jsx)(j.a,{}),Object(h.jsx)(g,{text:C.quote,author:C.author,id:C.id,deletionHandler:function(){i(!0),D({id:C.id,token:t.token}),i(!1),u.push("/new-quote")}}),Object(h.jsx)("div",{className:"centered",children:Object(h.jsx)(s.c,{path:O.path,exact:!0,children:Object(h.jsx)(r.c,{className:"btn--flat",to:"".concat(O.url,"/comments"),children:"Load Comments"})})}),Object(h.jsxs)(s.c,{path:"".concat(O.path,"/comments/"),children:[Object(h.jsx)(v,{quote:C,onAddComment:k}),Object(h.jsx)("div",{className:"centered",children:Object(h.jsx)(r.c,{className:"btn--flat",to:"".concat(O.url),children:"Hide Comments"})})]})]})}}}]);
//# sourceMappingURL=6.7a1c3f6c.chunk.js.map