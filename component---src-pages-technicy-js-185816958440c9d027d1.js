(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"057/":function(e,a,n){"use strict";n.d(a,"a",(function(){return i}));var r=n("q1tI"),t=n.n(r),c=n("Wbzz"),i=t.a.createContext({doctors:[],technicians:[],administration:[]});a.b=function(e){var a=Object(c.useStaticQuery)("2964359096").allMarkdownRemark,n=a.edges.filter((function(e){return e.node.frontmatter.slug.includes("/lekarze")})),r=a.edges.filter((function(e){return e.node.frontmatter.slug.includes("/administracja")})),s=n,o=a.edges.filter((function(e){return e.node.frontmatter.slug.includes("/technicy")})),l=r;return t.a.createElement(i.Provider,{value:{doctors:s,technicians:o,administration:l}},e.children)}},"8MMw":function(e,a,n){e.exports={TechniciansPage:"technicy-module--TechniciansPage--1DmhB",TechniciansWrapper:"technicy-module--TechniciansWrapper--OwGlz",BackArrow:"technicy-module--BackArrow--176dx",dissapear:"technicy-module--dissapear--3c3Sv"}},FCY8:function(e,a,n){e.exports={SinglePersonWrapper:"SinglePerson-module--SinglePersonWrapper--3TR6_",SinglePerson:"SinglePerson-module--SinglePerson--1rIic",SinglePersonSeparate:"SinglePerson-module--SinglePersonSeparate--1spM-",AvatarWrapper:"SinglePerson-module--AvatarWrapper--SknJ4",AvatarWrapperSeparate:"SinglePerson-module--AvatarWrapperSeparate--c1sbN"}},N3o1:function(e,a,n){"use strict";var r=n("q1tI"),t=n.n(r),c=n("Wbzz"),i=n("FCY8"),s=n.n(i);a.a=function(e){var a={backgroundImage:'url("'+e.avatar+'")',backgroundSize:"cover"};return e.separate?t.a.createElement(c.Link,{to:e.slug,className:s.a.SinglePersonWrapper},t.a.createElement("div",{className:s.a.SinglePersonSeparate},t.a.createElement("div",{className:s.a.AvatarWrapperSeparate,style:a}),t.a.createElement("h3",null,e.name))):t.a.createElement(c.Link,{to:e.slug,className:s.a.SinglePersonWrapper},t.a.createElement("div",{className:s.a.SinglePerson},t.a.createElement("div",{className:s.a.AvatarWrapper,style:a}),t.a.createElement("h3",null,e.name)))}},pB0Q:function(e,a,n){"use strict";n.r(a);var r=n("q1tI"),t=n.n(r),c=n("8MMw"),i=n.n(c),s=n("057/"),o=n("yBb5"),l=n("N3o1"),u=function(e){var a=e.data.allMarkdownRemark.edges.filter((function(e){return e.node.frontmatter.slug.includes("/technicy")})),n=Object(r.useContext)(s.b);return console.log("techs context",n),t.a.createElement(o.a,null,t.a.createElement("div",{className:i.a.TechniciansPage},t.a.createElement("i",{className:i.a.BackArrow,onClick:function(){return window.history.back()}}),t.a.createElement("div",{className:i.a.TechniciansWrapper},a.map((function(e){var a=e.node;return t.a.createElement(l.a,{separate:!0,key:a.frontmatter.title,name:a.frontmatter.title,slug:a.frontmatter.slug,avatar:a.frontmatter.image})})))))};a.default=t.a.memo(u)}}]);
//# sourceMappingURL=component---src-pages-technicy-js-185816958440c9d027d1.js.map