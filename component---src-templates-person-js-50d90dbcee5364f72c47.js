(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0c0T":function(e,a,t){e.exports=t.p+"static/GKW-horizontal-greypaw-whitecross-1dcb64f2553b0c82e5d8d1adcb800d5b.svg"},"8UnQ":function(e,a,t){e.exports={SideDrawer:"Sidedrawer-module--SideDrawer--2fdFg",Open:"Sidedrawer-module--Open--ymO6M",Close:"Sidedrawer-module--Close--j4_5C",Exit:"Sidedrawer-module--Exit--2QSbc"}},E5ef:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),o=t("Wbzz"),l=t("fJmU"),c=t.n(l);a.a=function(e){var a=null;switch(e.type){case"Call":a=r.a.createElement("a",{href:"tel:+48508072234",className:c.a.Call},"Zadzwoń");break;case"NavCall":a=r.a.createElement("a",{href:"tel:+48508072234",className:c.a.NavCall},"Zadzwoń");break;case"Route":a=r.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.google.com/maps/place/GKW.+Gdy%C5%84ska+Klinika+Weterynaryjna+lek.+wet.+Tomasza+Brzeskiego/@54.508372,18.5277082,17z/data=!3m1!4b1!4m5!3m4!1s0x46fda72d21c3e51f:0xe33b5f47e2bbd6ee!8m2!3d54.508372!4d18.5298969",className:c.a.Route},"Trasa");break;case"Back":a=r.a.createElement(o.a,{to:"/",className:c.a.Back},r.a.createElement("p",null,"Wróć do strony głównej"))}return a}},EEgH:function(e,a,t){e.exports={Logo:"Logo-module--Logo--gv7YM"}},UWLP:function(e,a,t){e.exports=t.p+"static/GKW-main-vertical-logo-fc190dcf13857fdff7e2a1e9b6010c2c.svg"},XHe0:function(e,a,t){e.exports={NavigationItems:"NavigationItems-module--NavigationItems--j5XGx"}},XT7L:function(e,a,t){e.exports={NavigationItem:"NavigationItem-module--NavigationItem--32UKP",active:"NavigationItem-module--active--3iv7H"}},boqk:function(e,a,t){"use strict";a.__esModule=!0,a.default=void 0;var n=function(e,a){void 0===a&&(a="start");var t=document.querySelector(e);return!!t&&(t.scrollIntoView({behavior:"smooth",block:a}),!0)};a.default=n},fJmU:function(e,a,t){e.exports={Call:"Button-module--Call--2eKxV",Route:"Button-module--Route--1fGn1",NavCall:"Button-module--NavCall--ZCsde",Back:"Button-module--Back--21FXl"}},fwm2:function(e,a,t){e.exports={Person:"person-module--Person--24dLR",AvatarWrapper:"person-module--AvatarWrapper--1frEJ",CrossVertical:"person-module--CrossVertical--2H0jl",CrossHorizontal:"person-module--CrossHorizontal--1olHc",PersonInfo:"person-module--PersonInfo--1GLSP",PersonHeading:"person-module--PersonHeading--171u2",BackArrow:"person-module--BackArrow--tYuEd",dissapear:"person-module--dissapear--3un1q"}},l9ME:function(e,a,t){e.exports={Toolbar:"Toolbar-module--Toolbar--9GcZM",DesktopOnly:"Toolbar-module--DesktopOnly--3vrAG",SecondaryToolbar:"Toolbar-module--SecondaryToolbar--26Jca",DesktopOnlySecondary:"Toolbar-module--DesktopOnlySecondary--3-2P4"}},nBiZ:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),o=t("yBb5"),l=t("fwm2"),c=t.n(l);a.default=function(e){var a=e.data.markdownRemark,t=a.frontmatter,n=a.html,l={backgroundImage:'url("'+t.image+'")',backgroundSize:"cover"};return r.a.createElement(o.a,{detailed:!0},r.a.createElement("i",{className:c.a.BackArrow,onClick:function(){return window.history.back()}}),r.a.createElement("div",{className:c.a.Person},r.a.createElement("div",{className:c.a.AvatarWrapper,style:l}),r.a.createElement("div",{className:c.a.PersonInfo},r.a.createElement("h1",{className:c.a.PersonHeading},t.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})),r.a.createElement("div",{className:c.a.CrossHorizontal}),r.a.createElement("div",{className:c.a.CrossVertical})))}},tBLo:function(e,a,t){e.exports=t.p+"static/GKW-main-horizontal-730cf83d4119672679037f6c63561fe0.svg"},vp1f:function(e,a,t){e.exports={DrawerToggle:"DrawerToggle-module--DrawerToggle--33qJ2"}},yBb5:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),o=t("l9ME"),l=t.n(o),c=t("EEgH"),i=t.n(c),s=t("UWLP"),d=t.n(s),m=t("0c0T"),u=t.n(m),f=t("tBLo"),E=t.n(f),v=t("boqk"),w=t.n(v),g=function(e){var a=Object(n.useState)(!0),t=a[0],o=a[1],l=Object(n.useState)(!1),c=l[0],s=l[1],m=function(){o(window.innerWidth>845)};Object(n.useEffect)((function(){return m(),window.addEventListener("resize",m),typeof window!==window.location.href.includes("/oferta")?s(!0):s(!1),function(){return window.removeEventListener("resize",m)}}));var f=null;f=t?d.a:E.a,e.secondary?f=u.a:e.horizontal&&(f=E.a);var v=r.a.createElement("div",{className:i.a.Logo,onClick:function(){w()("#intro")}},r.a.createElement("img",{src:f,alt:"GKW - Gdyńska Klinika, weterynarii logo"}));return c||(v=r.a.createElement("div",{className:i.a.Logo,onClick:function(e){e.preventDefault(),window.history.back(),setTimeout((function(){w()("#intro")}),500)}},r.a.createElement("img",{src:f,alt:"GKW - Gdyńska Klinika weterynarii logo"}))),v},k=r.a.memo(g),p=t("XHe0"),b=t.n(p),y=t("Wbzz"),N=t("XT7L"),h=t.n(N),C=function(e){var a=Object(n.useState)(!1),t=a[0],o=a[1],l=null;return Object(n.useEffect)((function(){(window.location.href.includes("/oferta")||window.location.href.includes("-")||window.location.href.includes("/lekarze")||window.location.href.includes("/tech")||window.location.href.includes("/admin"))&&o(!0)}),[]),l=t?r.a.createElement("a",{onClick:function(a){a.preventDefault(),Object(y.c)("/"),setTimeout((function(){w()("#"+e.section)}),500)}},e.children):r.a.createElement("a",{onClick:function(a){a.preventDefault(),w()("#"+e.section)}},e.children),r.a.createElement("li",{className:h.a.NavigationItem},l)},S=function(){return r.a.createElement("ul",{className:b.a.NavigationItems},r.a.createElement(C,{section:"oferta"},"Oferta"),r.a.createElement(C,{section:"klinika"},"Klinika"),r.a.createElement(C,{section:"klinika"},"Blog"),r.a.createElement(C,{section:"kadra"},"Kadra"),r.a.createElement(C,{section:"partnerzy"},"Partnerzy"),r.a.createElement(C,{section:"footer"},"Kontakt"))},T=t("vp1f"),z=t.n(T),L=function(e){var a=e.secondary?{backgroundColor:"white"}:null;z.a.DrawerToggle;return r.a.createElement("div",{className:z.a.DrawerToggle,onClick:e.clicked,role:"menu"},r.a.createElement("div",{className:z.a.SingleLine,style:a}),r.a.createElement("div",{className:z.a.SingleLine,style:a}),r.a.createElement("div",{className:z.a.SingleLine,style:a}))},O=t("E5ef"),x=function(e){var a=Object(n.useState)(!1),t=a[0],o=a[1],c=Object(n.useRef)();c.current=t,Object(n.useEffect)((function(){var e=function(){var e=window.scrollY>50;c.current!==e&&o(e)};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[]);return t||e.detailed?r.a.createElement("header",{id:"header",className:l.a.SecondaryToolbar},r.a.createElement(k,{secondary:!0}),r.a.createElement(L,{secondary:!0,clicked:e.drawerToggleClicked}),r.a.createElement("nav",{className:l.a.DesktopOnlySecondary},r.a.createElement("ul",null,r.a.createElement("li",null,"Poniedziałek - Piątek : ",r.a.createElement("strong",null,"7 - 22")),r.a.createElement("li",null,"Sobota : ",r.a.createElement("strong",null,"8 - 22")),r.a.createElement("li",null,"Niedziela : ",r.a.createElement("strong",null,"10 - 19"))),r.a.createElement(O.a,{type:"NavCall"}))):r.a.createElement("header",{id:"header",className:l.a.Toolbar},r.a.createElement(k,null),r.a.createElement(L,{clicked:e.drawerToggleClicked}),r.a.createElement("nav",{className:l.a.DesktopOnly},r.a.createElement(S,null),r.a.createElement("hr",null)))},B=r.a.memo(x),D=t("8UnQ"),I=t.n(D),P=function(e){var a=[I.a.SideDrawer,I.a.Close];return e.open&&(a=[I.a.SideDrawer,I.a.Open]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.join(" "),onClick:e.closed},r.a.createElement("nav",null,r.a.createElement("span",{className:I.a.Exit,onClick:e.closed}),r.a.createElement(S,null))))};a.a=function(e){var a=Object(n.useState)(!1),t=a[0],o=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{detailed:e.detailed,drawerToggleClicked:function(){o(!t)}}),r.a.createElement(P,{open:t,closed:function(){o(!1)}}),r.a.createElement("main",null,e.children))}}}]);
//# sourceMappingURL=component---src-templates-person-js-50d90dbcee5364f72c47.js.map