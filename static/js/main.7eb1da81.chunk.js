(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(5),r=c.n(a),i=(c(10),c(11),c(2)),o=(c(12),c(4)),b=c.n(o),j=c(0);var d=function(e){var t=e.onIncrement,c=e.options;return Object(j.jsx)("ul",{className:b.a.feedbackButtons,children:c.map((function(e){return Object(j.jsx)("li",{className:b.a.button,children:Object(j.jsx)("button",{type:"button",name:e,className:"btn",onClick:t,children:e})},e)}))})};var l=function(e){var t=e.good,c=e.neutral,n=e.bad,s=e.total,a=e.positivePercentage;return Object(j.jsxs)("div",{className:"statistics-section",children:[Object(j.jsx)("h2",{children:"Statistics"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:["Good: ",t]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:["Neutral: ",c]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:["Bad: ",n]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:["Total: ",s]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("p",{children:["Positive feedback: ",a," %"]})})]})]})};var u=function(e){var t=e.message;return Object(j.jsx)("p",{children:t})};var O=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(0),r=Object(i.a)(a,2),o=r[0],b=r[1],O=Object(n.useState)(0),h=Object(i.a)(O,2),f=h[0],x=h[1],k=function(){return c+o+f};return Object(j.jsxs)("section",{className:"feedbackSection",children:[Object(j.jsx)("h1",{children:"Please leave feedback"}),Object(j.jsx)(d,{options:["good","neutral","bad"],className:"feedbackOptions",onIncrement:function(e){switch(e.target.name){case"good":s((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":x((function(e){return e+1}));break;default:return}}}),k()?Object(j.jsx)(l,{good:c,neutral:o,bad:f,total:k(),positivePercentage:Math.round(c/k()*100)}):Object(j.jsx)(u,{message:"No feedback given"})]})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))},4:function(e,t,c){e.exports={feedbackButtons:"FeedbackOptions_feedbackButtons__1_yyH",button:"FeedbackOptions_button__rkVnE"}}},[[14,1,2]]]);
//# sourceMappingURL=main.7eb1da81.chunk.js.map