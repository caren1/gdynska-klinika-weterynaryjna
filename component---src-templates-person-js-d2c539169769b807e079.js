(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0c0T":function(e,a,n){e.exports=n.p+"static/GKW-horizontal-greypaw-whitecross-1dcb64f2553b0c82e5d8d1adcb800d5b.svg"},"8UnQ":function(e,a,n){e.exports={SideDrawer:"Sidedrawer-module--SideDrawer--2fdFg",Open:"Sidedrawer-module--Open--ymO6M",Close:"Sidedrawer-module--Close--j4_5C",Exit:"Sidedrawer-module--Exit--2QSbc"}},E5ef:function(e,a,n){"use strict";var t=n("q1tI"),o=n.n(t),r=n("Wbzz"),l=n("fJmU"),c=n.n(l);a.a=function(e){var a=null;switch(e.type){case"Call":a=o.a.createElement("a",{href:"tel:+48508072234",className:c.a.Call},"Zadzwoń");break;case"NavCall":a=o.a.createElement("a",{href:"tel:+48508072234",className:c.a.NavCall},"Zadzwoń");break;case"Route":a=o.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.google.com/maps/place/GKW.+Gdy%C5%84ska+Klinika+Weterynaryjna+lek.+wet.+Tomasza+Brzeskiego/@54.508372,18.5277082,17z/data=!3m1!4b1!4m5!3m4!1s0x46fda72d21c3e51f:0xe33b5f47e2bbd6ee!8m2!3d54.508372!4d18.5298969",className:c.a.Route},"Trasa");break;case"Back":a=o.a.createElement(r.a,{to:"/",className:c.a.Back},o.a.createElement("p",null,"Wróć do strony głównej"))}return a}},EEgH:function(e,a,n){e.exports={Logo:"Logo-module--Logo--gv7YM"}},UWLP:function(e,a,n){e.exports=n.p+"static/GKW-main-vertical-logo-fc190dcf13857fdff7e2a1e9b6010c2c.svg"},XHe0:function(e,a,n){e.exports={NavigationItems:"NavigationItems-module--NavigationItems--j5XGx"}},XT7L:function(e,a,n){e.exports={NavigationItem:"NavigationItem-module--NavigationItem--32UKP",active:"NavigationItem-module--active--3iv7H"}},boqk:function(e,a,n){"use strict";a.__esModule=!0,a.default=void 0;var t=function(e,a){void 0===a&&(a="start");var n=document.querySelector(e);return!!n&&(n.scrollIntoView({behavior:"smooth",block:a}),!0)};a.default=t},fJmU:function(e,a,n){e.exports={Call:"Button-module--Call--2eKxV",Route:"Button-module--Route--1fGn1",NavCall:"Button-module--NavCall--ZCsde",Back:"Button-module--Back--21FXl"}},fwm2:function(e,a,n){e.exports={Person:"person-module--Person--24dLR",AvatarWrapper:"person-module--AvatarWrapper--1frEJ",CrossVertical:"person-module--CrossVertical--2H0jl",CrossHorizontal:"person-module--CrossHorizontal--1olHc",PersonInfo:"person-module--PersonInfo--1GLSP",PersonHeading:"person-module--PersonHeading--171u2",BackArrow:"person-module--BackArrow--tYuEd",dissapear:"person-module--dissapear--3un1q"}},l9ME:function(e,a,n){e.exports={Toolbar:"Toolbar-module--Toolbar--9GcZM",DesktopOnly:"Toolbar-module--DesktopOnly--3vrAG",SecondaryToolbar:"Toolbar-module--SecondaryToolbar--26Jca",DesktopOnlySecondary:"Toolbar-module--DesktopOnlySecondary--3-2P4"}},nBiZ:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),o=n.n(t),r=n("yBb5"),l=n("fwm2"),c=n.n(l);a.default=function(e){var a=e.data.markdownRemark,n=a.frontmatter,t=a.html,l={backgroundImage:'url("'+n.image+'")',backgroundSize:"cover"};return o.a.createElement(r.a,{detailed:!0},o.a.createElement("i",{className:c.a.BackArrow,onClick:function(){return window.history.back()}}),o.a.createElement("div",{className:c.a.Person},o.a.createElement("div",{className:c.a.AvatarWrapper,style:l}),o.a.createElement("div",{className:c.a.PersonInfo},o.a.createElement("h1",{className:c.a.PersonHeading},n.title),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})),o.a.createElement("div",{className:c.a.CrossHorizontal}),o.a.createElement("div",{className:c.a.CrossVertical})))}},tBLo:function(e,a,n){e.exports=n.p+"static/GKW-main-horizontal-730cf83d4119672679037f6c63561fe0.svg"},vp1f:function(e,a,n){e.exports={DrawerToggle:"DrawerToggle-module--DrawerToggle--33qJ2"}},yBb5:function(e,a,n){"use strict";var t=n("q1tI"),o=n.n(t),r=n("l9ME"),l=n.n(r),c=n("EEgH"),i=n.n(c),s=n("UWLP"),d=n.n(s),u=n("0c0T"),m=n.n(u),f=n("tBLo"),E=n.n(f),w=n("boqk"),v=n.n(w),g=function(e){var a=Object(t.useState)(!0),n=a[0],r=a[1],l=Object(t.useState)(!1),c=l[0],s=l[1],u=function(){r(window.innerWidth>845)},f=function(){window.location.href.includes("/oferta")|window.location.href.includes("-")|window.location.href.includes("/lekarze")|window.location.href.includes("/tech")|window.location.href.includes("/admin")?s(!0):s(!1)};Object(t.useEffect)((function(){return u(),window.addEventListener("resize",u),function(){return window.removeEventListener("resize",u)}})),Object(t.useEffect)((function(){return window.addEventListener("hashchange",f),function(){window.removeEventListener("hashchange",f)}}));var w=null;w=n?d.a:E.a,e.secondary?w=m.a:e.horizontal&&(w=E.a);var g=o.a.createElement("div",{className:i.a.Logo,onClick:function(){v()("#intro")}},o.a.createElement("img",{src:w,alt:"GKW - Gdyńska Klinika, weterynarii logo"}));return c&&(g=o.a.createElement("div",{tabIndex:"2",className:i.a.Logo,onClick:function(e){e.preventDefault(),window.history.back(),setTimeout((function(){v()("#intro")}),500)}},o.a.createElement("img",{src:w,alt:"GKW - Gdyńska Klinika weterynarii logo"}))),g},k=o.a.memo(g),p=n("XHe0"),b=n.n(p),h=n("Wbzz"),y=n("XT7L"),N=n.n(y),C=function(e){var a=Object(t.useState)(!1),n=a[0],r=a[1],l=null;return Object(t.useEffect)((function(){(window.location.href.includes("/oferta")||window.location.href.includes("-")||window.location.href.includes("/lekarze")||window.location.href.includes("/tech")||window.location.href.includes("/admin"))&&r(!0)}),[]),l=n?o.a.createElement("a",{tabIndex:"1",onClick:function(a){a.preventDefault(),Object(h.c)("/"),setTimeout((function(){v()("#"+e.section)}),500)}},e.children):o.a.createElement("a",{tabIndex:"1",onClick:function(a){a.preventDefault(),v()("#"+e.section)}},e.children),o.a.createElement("li",{className:N.a.NavigationItem},l)},S=function(){return o.a.createElement("ul",{className:b.a.NavigationItems},o.a.createElement(C,{section:"oferta"},"Oferta"),o.a.createElement(C,{section:"klinika"},"Klinika"),o.a.createElement(C,{section:"klinika"},"Blog"),o.a.createElement(C,{section:"kadra"},"Kadra"),o.a.createElement(C,{section:"partnerzy"},"Partnerzy"),o.a.createElement(C,{section:"footer"},"Kontakt"))},T=n("vp1f"),z=n.n(T),L=function(e){var a=e.secondary?{backgroundColor:"white"}:null;z.a.DrawerToggle;return o.a.createElement("div",{className:z.a.DrawerToggle,onClick:e.clicked,role:"menu",tabIndex:"1"},o.a.createElement("div",{className:z.a.SingleLine,style:a}),o.a.createElement("div",{className:z.a.SingleLine,style:a}),o.a.createElement("div",{className:z.a.SingleLine,style:a}))},x=n("E5ef"),I=function(e){var a=Object(t.useState)(!1),n=a[0],r=a[1],c=Object(t.useRef)();c.current=n,Object(t.useEffect)((function(){var e=function(){var e=window.scrollY>50;c.current!==e&&r(e)};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[]);return n||e.detailed?o.a.createElement("header",{id:"header",className:l.a.SecondaryToolbar},o.a.createElement(k,{secondary:!0}),o.a.createElement(L,{secondary:!0,clicked:e.drawerToggleClicked}),o.a.createElement("nav",{className:l.a.DesktopOnlySecondary},o.a.createElement("ul",null,o.a.createElement("li",null,"Poniedziałek - Piątek : ",o.a.createElement("strong",null,"7 - 22")),o.a.createElement("li",null,"Sobota : ",o.a.createElement("strong",null,"8 - 22")),o.a.createElement("li",null,"Niedziela : ",o.a.createElement("strong",null,"10 - 19"))),o.a.createElement(x.a,{type:"NavCall"}))):o.a.createElement("header",{id:"header",className:l.a.Toolbar},o.a.createElement(k,null),o.a.createElement(L,{clicked:e.drawerToggleClicked}),o.a.createElement("nav",{className:l.a.DesktopOnly},o.a.createElement(S,null),o.a.createElement("hr",null)))},O=o.a.memo(I),B=n("8UnQ"),D=n.n(B),j=function(e){var a=[D.a.SideDrawer,D.a.Close];return e.open&&(a=[D.a.SideDrawer,D.a.Open]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:a.join(" "),onClick:e.closed},o.a.createElement("nav",null,o.a.createElement("span",{className:D.a.Exit,onClick:e.closed}),o.a.createElement(S,null))))},P=function(e){var a=Object(t.useState)(!1),n=a[0],r=a[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,{detailed:e.detailed,drawerToggleClicked:function(){r(!n)}}),o.a.createElement(j,{open:n,closed:function(){r(!1)}}),o.a.createElement("main",null,e.children))};a.a=o.a.memo(P)}}]);
//# sourceMappingURL=component---src-templates-person-js-d2c539169769b807e079.js.map