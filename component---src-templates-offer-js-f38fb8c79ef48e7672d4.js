(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0c0T":function(e,a,t){e.exports=t.p+"static/GKW-horizontal-greypaw-whitecross-1dcb64f2553b0c82e5d8d1adcb800d5b.svg"},"3BnU":function(e,a,t){e.exports={Offer:"offer-module--Offer--11AQu",onLoad:"offer-module--onLoad--1revN",OfferWrapper:"offer-module--OfferWrapper--QEeZN",Intro:"offer-module--Intro--11s3u",Content:"offer-module--Content--2hLKs",Exit:"offer-module--Exit--2AFMv"}},"8UnQ":function(e,a,t){e.exports={SideDrawer:"Sidedrawer-module--SideDrawer--2fdFg",Open:"Sidedrawer-module--Open--ymO6M",Close:"Sidedrawer-module--Close--j4_5C",Exit:"Sidedrawer-module--Exit--2QSbc"}},E5ef:function(e,a,t){"use strict";var n=t("q1tI"),o=t.n(n),l=t("Wbzz"),r=t("fJmU"),c=t.n(r);a.a=function(e){var a=null;switch(e.type){case"Call":a=o.a.createElement("a",{href:"tel:+48508072234",className:c.a.Call},"Zadzwoń");break;case"NavCall":a=o.a.createElement("a",{href:"tel:+48508072234",className:c.a.NavCall},"Zadzwoń");break;case"Route":a=o.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.google.com/maps/place/GKW.+Gdy%C5%84ska+Klinika+Weterynaryjna+lek.+wet.+Tomasza+Brzeskiego/@54.508372,18.5277082,17z/data=!3m1!4b1!4m5!3m4!1s0x46fda72d21c3e51f:0xe33b5f47e2bbd6ee!8m2!3d54.508372!4d18.5298969",className:c.a.Route},"Trasa");break;case"Back":a=o.a.createElement(l.a,{to:"/",className:c.a.Back},o.a.createElement("p",null,"Wróć do strony głównej"))}return a}},EEgH:function(e,a,t){e.exports={Logo:"Logo-module--Logo--gv7YM"}},UWLP:function(e,a,t){e.exports=t.p+"static/GKW-main-vertical-logo-fc190dcf13857fdff7e2a1e9b6010c2c.svg"},XHe0:function(e,a,t){e.exports={NavigationItems:"NavigationItems-module--NavigationItems--j5XGx"}},XT7L:function(e,a,t){e.exports={NavigationItem:"NavigationItem-module--NavigationItem--32UKP",active:"NavigationItem-module--active--3iv7H"}},boqk:function(e,a,t){"use strict";a.__esModule=!0,a.default=void 0;var n=function(e,a){void 0===a&&(a="start");var t=document.querySelector(e);return!!t&&(t.scrollIntoView({behavior:"smooth",block:a}),!0)};a.default=n},fJmU:function(e,a,t){e.exports={Call:"Button-module--Call--2eKxV",Route:"Button-module--Route--1fGn1",NavCall:"Button-module--NavCall--ZCsde",Back:"Button-module--Back--21FXl"}},l9ME:function(e,a,t){e.exports={Toolbar:"Toolbar-module--Toolbar--9GcZM",DesktopOnly:"Toolbar-module--DesktopOnly--3vrAG",SecondaryToolbar:"Toolbar-module--SecondaryToolbar--26Jca",DesktopOnlySecondary:"Toolbar-module--DesktopOnlySecondary--3-2P4"}},tBLo:function(e,a,t){e.exports=t.p+"static/GKW-main-horizontal-730cf83d4119672679037f6c63561fe0.svg"},vp1f:function(e,a,t){e.exports={DrawerToggle:"DrawerToggle-module--DrawerToggle--33qJ2"}},xRB0:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),o=t.n(n),l=t("yBb5"),r=t("3BnU"),c=t.n(r);a.default=function(e){var a=e.data.markdownRemark,t=a.frontmatter,n=a.html;return o.a.createElement(l.a,{detailed:!0},o.a.createElement("section",{className:c.a.Offer},o.a.createElement("a",{className:c.a.Exit,onClick:function(){window.history.back()}}),o.a.createElement("div",{className:c.a.OfferWrapper},o.a.createElement("div",{className:c.a.Intro},o.a.createElement("img",{src:t.icon,alt:t.title}),o.a.createElement("h1",null,t.title)),o.a.createElement("div",{className:c.a.Content,dangerouslySetInnerHTML:{__html:n}}))))}},yBb5:function(e,a,t){"use strict";var n=t("q1tI"),o=t.n(n),l=t("l9ME"),r=t.n(l),c=t("EEgH"),i=t.n(c),s=t("UWLP"),d=t.n(s),u=t("0c0T"),m=t.n(u),f=t("tBLo"),E=t.n(f),w=t("boqk"),v=t.n(w),g=function(e){var a=Object(n.useState)(!0),t=a[0],l=a[1],r=Object(n.useState)(!1),c=r[0],s=r[1],u=function(){l(window.innerWidth>845)},f=function(){window.location.href.includes("/oferta")|window.location.href.includes("-")|window.location.href.includes("/lekarze")|window.location.href.includes("/tech")|window.location.href.includes("/admin")?s(!0):s(!1)};Object(n.useEffect)((function(){return u(),window.addEventListener("resize",u),function(){return window.removeEventListener("resize",u)}})),Object(n.useEffect)((function(){return window.addEventListener("hashchange",f),function(){window.removeEventListener("hashchange",f)}}));var w=null;w=t?d.a:E.a,e.secondary?w=m.a:e.horizontal&&(w=E.a);var g=o.a.createElement("div",{className:i.a.Logo,onClick:function(){v()("#intro")}},o.a.createElement("img",{src:w,alt:"GKW - Gdyńska Klinika, weterynarii logo"}));return c&&(g=o.a.createElement("div",{tabIndex:"2",className:i.a.Logo,onClick:function(e){e.preventDefault(),window.history.back(),setTimeout((function(){v()("#intro")}),500)}},o.a.createElement("img",{src:w,alt:"GKW - Gdyńska Klinika weterynarii logo"}))),g},k=o.a.memo(g),b=t("XHe0"),p=t.n(b),h=t("Wbzz"),N=t("XT7L"),y=t.n(N),C=function(e){var a=Object(n.useState)(!1),t=a[0],l=a[1],r=null;return Object(n.useEffect)((function(){(window.location.href.includes("/oferta")||window.location.href.includes("-")||window.location.href.includes("/lekarze")||window.location.href.includes("/tech")||window.location.href.includes("/admin"))&&l(!0)}),[]),r=t?o.a.createElement("a",{tabIndex:"0",onClick:function(a){a.preventDefault(),Object(h.c)("/"),setTimeout((function(){v()("#"+e.section)}),500)}},e.children):o.a.createElement("a",{tabIndex:"0",onClick:function(a){a.preventDefault(),v()("#"+e.section)}},e.children),o.a.createElement("li",{className:y.a.NavigationItem},r)},O=function(){return o.a.createElement("ul",{className:p.a.NavigationItems},o.a.createElement(C,{section:"oferta"},"Oferta"),o.a.createElement(C,{section:"klinika"},"Klinika"),o.a.createElement(C,{section:"klinika"},"Blog"),o.a.createElement(C,{section:"kadra"},"Kadra"),o.a.createElement(C,{section:"partnerzy"},"Partnerzy"),o.a.createElement(C,{section:"footer"},"Kontakt"))},T=t("vp1f"),x=t.n(T),S=function(e){var a=e.secondary?{backgroundColor:"white"}:null;x.a.DrawerToggle;return o.a.createElement("div",{className:x.a.DrawerToggle,onClick:e.clicked,role:"menu",tabIndex:"1"},o.a.createElement("div",{className:x.a.SingleLine,style:a}),o.a.createElement("div",{className:x.a.SingleLine,style:a}),o.a.createElement("div",{className:x.a.SingleLine,style:a}))},L=t("E5ef"),I=function(e){var a=Object(n.useState)(!1),t=a[0],l=a[1],c=Object(n.useRef)();c.current=t,Object(n.useEffect)((function(){var e=function(){var e=window.scrollY>50;c.current!==e&&l(e)};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[]);return t||e.detailed?o.a.createElement("header",{id:"header",className:r.a.SecondaryToolbar},o.a.createElement(k,{secondary:!0}),o.a.createElement(S,{secondary:!0,clicked:e.drawerToggleClicked}),o.a.createElement("nav",{className:r.a.DesktopOnlySecondary},o.a.createElement("ul",null,o.a.createElement("li",null,"Poniedziałek - Piątek : ",o.a.createElement("strong",null,"7 - 22")),o.a.createElement("li",null,"Sobota : ",o.a.createElement("strong",null,"8 - 22")),o.a.createElement("li",null,"Niedziela : ",o.a.createElement("strong",null,"10 - 19"))),o.a.createElement(L.a,{type:"NavCall"}))):o.a.createElement("header",{id:"header",className:r.a.Toolbar},o.a.createElement(k,null),o.a.createElement(S,{clicked:e.drawerToggleClicked}),o.a.createElement("nav",{className:r.a.DesktopOnly},o.a.createElement(O,null),o.a.createElement("hr",null)))},z=o.a.memo(I),D=t("8UnQ"),B=t.n(D),j=function(e){var a=[B.a.SideDrawer,B.a.Close];return e.open&&(a=[B.a.SideDrawer,B.a.Open]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:a.join(" "),onClick:e.closed},o.a.createElement("nav",null,o.a.createElement("span",{className:B.a.Exit,onClick:e.closed}),o.a.createElement(O,null))))},W=function(e){var a=Object(n.useState)(!1),t=a[0],l=a[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(z,{detailed:e.detailed,drawerToggleClicked:function(){l(!t)}}),o.a.createElement(j,{open:t,closed:function(){l(!1)}}),o.a.createElement("main",null,e.children))};a.a=o.a.memo(W)}}]);
//# sourceMappingURL=component---src-templates-offer-js-f38fb8c79ef48e7672d4.js.map