(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{12:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(4),i=c.n(r),s=c(2),o=c(5),d=c(0);var j=function(e){var t=e.title,c=e.children;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t}),c]})};var b=function(e){var t=e.good,c=e.neutral,n=e.bad,a=e.total,r=e.positivePercentage;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:"Statistics content"}),Object(d.jsxs)("p",{children:["Good: ",t]}),Object(d.jsxs)("p",{children:["Neutral: ",c]}),Object(d.jsxs)("p",{children:["Bad: ",n]}),Object(d.jsxs)("p",{children:["Total: ",a]}),Object(d.jsxs)("p",{children:["Positive feedback: ",r||0,"%"]})]})},l=c(6),u=c.n(l);var O=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(d.jsx)("div",{children:t.map((function(e){return Object(d.jsx)("button",{className:u.a.button,onClick:function(){return c(e.name)},children:e.name},e.id)}))})};var h=function(e){var t=e.message;return Object(d.jsx)("div",{children:Object(d.jsx)("h3",{children:t})})};var x=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(0),i=Object(s.a)(r,2),l=i[0],u=i[1],x=Object(n.useState)(0),v=Object(s.a)(x,2),f=v[0],p=v[1],k=c+l+f,g=function(){if(c>0)return(c/k*100).toFixed(1)}();return Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{title:"Please leave feedback",children:Object(d.jsx)(O,{options:o,onLeaveFeedback:function(e){switch(e){case"good":a(c+1);break;case"bad":p(f+1);break;case"neutral":u(l+1);break;default:alert("hello")}}})}),Object(d.jsx)(j,{title:"Statistics",children:k?Object(d.jsx)(b,{good:c,neutral:l,bad:f,total:k,positivePercentage:g}):Object(d.jsx)(h,{message:"No feedback given"})})]})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('[{"id":1,"name":"good"},{"id":2,"name":"neutral"},{"id":3,"name":"bad"}]')},6:function(e,t,c){e.exports={button:"FeedbackOptions_button__1tqdj"}}},[[12,1,2]]]);
//# sourceMappingURL=main.5a0c7103.chunk.js.map