(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0c0T":function(e,a,t){e.exports=t.p+"static/GKW-horizontal-greypaw-whitecross-1dcb64f2553b0c82e5d8d1adcb800d5b.svg"},"8UnQ":function(e,a,t){e.exports={SideDrawer:"Sidedrawer-module--SideDrawer--2fdFg",Open:"Sidedrawer-module--Open--ymO6M",Close:"Sidedrawer-module--Close--j4_5C",Exit:"Sidedrawer-module--Exit--2QSbc"}},CXH0:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("TACf"),o=t.n(l),c=t("yBb5"),i=t("N3o1"),s=function(e){var a=e.data.allMarkdownRemark.edges.filter((function(e){return e.node.frontmatter.slug.includes("/administracja")}));return r.a.createElement(c.a,null,r.a.createElement("div",{className:o.a.DoctorsPage},r.a.createElement("i",{className:o.a.BackArrow,onClick:function(){return window.history.back()}}),r.a.createElement("div",{className:o.a.DoctorsWrapper},a.map((function(e){var a=e.node;return r.a.createElement(i.a,{separate:!0,key:a.frontmatter.title,name:a.frontmatter.title,slug:a.frontmatter.slug,avatar:a.frontmatter.image})})))))};a.default=r.a.memo(s)},E5ef:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),o=t("fJmU"),c=t.n(o);a.a=function(e){var a=null;switch(e.type){case"Call":a=r.a.createElement("a",{href:"tel:+48508072234",className:c.a.Call},"Zadzwoń");break;case"NavCall":a=r.a.createElement("a",{href:"tel:+48508072234",className:c.a.NavCall},"Zadzwoń");break;case"Route":a=r.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.google.com/maps/place/GKW.+Gdy%C5%84ska+Klinika+Weterynaryjna+lek.+wet.+Tomasza+Brzeskiego/@54.508372,18.5277082,17z/data=!3m1!4b1!4m5!3m4!1s0x46fda72d21c3e51f:0xe33b5f47e2bbd6ee!8m2!3d54.508372!4d18.5298969",className:c.a.Route},"Trasa");break;case"Back":a=r.a.createElement(l.a,{to:"/",className:c.a.Back},r.a.createElement("p",null,"Wróć do strony głównej"))}return a}},EEgH:function(e,a,t){e.exports={Logo:"Logo-module--Logo--gv7YM"}},FCY8:function(e,a,t){e.exports={SinglePersonWrapper:"SinglePerson-module--SinglePersonWrapper--3TR6_",SinglePerson:"SinglePerson-module--SinglePerson--1rIic",SinglePersonSeparate:"SinglePerson-module--SinglePersonSeparate--1spM-",AvatarWrapper:"SinglePerson-module--AvatarWrapper--SknJ4",AvatarWrapperSeparate:"SinglePerson-module--AvatarWrapperSeparate--c1sbN"}},N3o1:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),o=t("FCY8"),c=t.n(o);a.a=function(e){var a={backgroundImage:'url("'+e.avatar+'")',backgroundSize:"cover"};return e.separate?r.a.createElement(l.a,{to:e.slug,className:c.a.SinglePersonWrapper},r.a.createElement("div",{className:c.a.SinglePersonSeparate},r.a.createElement("div",{className:c.a.AvatarWrapperSeparate,style:a}),r.a.createElement("h3",null,e.name))):r.a.createElement(l.a,{to:e.slug,className:c.a.SinglePersonWrapper},r.a.createElement("div",{className:c.a.SinglePerson},r.a.createElement("div",{className:c.a.AvatarWrapper,style:a}),r.a.createElement("h3",null,e.name)))}},TACf:function(e,a,t){e.exports={DoctorsPage:"lekarze-module--DoctorsPage--2NFJv",DoctorsWrapper:"lekarze-module--DoctorsWrapper--3Kdgl",BackArrow:"lekarze-module--BackArrow--Rv9Ep",dissapear:"lekarze-module--dissapear--2M7Nz"}},UWLP:function(e,a,t){e.exports=t.p+"static/GKW-main-vertical-logo-fc190dcf13857fdff7e2a1e9b6010c2c.svg"},XHe0:function(e,a,t){e.exports={NavigationItems:"NavigationItems-module--NavigationItems--j5XGx"}},XT7L:function(e,a,t){e.exports={NavigationItem:"NavigationItem-module--NavigationItem--32UKP",active:"NavigationItem-module--active--3iv7H"}},boqk:function(e,a,t){"use strict";a.__esModule=!0,a.default=void 0;var n=function(e,a){void 0===a&&(a="start");var t=document.querySelector(e);return!!t&&(t.scrollIntoView({behavior:"smooth",block:a}),!0)};a.default=n},fJmU:function(e,a,t){e.exports={Call:"Button-module--Call--2eKxV",Route:"Button-module--Route--1fGn1",NavCall:"Button-module--NavCall--ZCsde",Back:"Button-module--Back--21FXl"}},l9ME:function(e,a,t){e.exports={Toolbar:"Toolbar-module--Toolbar--9GcZM",DesktopOnly:"Toolbar-module--DesktopOnly--3vrAG",SecondaryToolbar:"Toolbar-module--SecondaryToolbar--26Jca",DesktopOnlySecondary:"Toolbar-module--DesktopOnlySecondary--3-2P4"}},tBLo:function(e,a,t){e.exports=t.p+"static/GKW-main-horizontal-730cf83d4119672679037f6c63561fe0.svg"},vp1f:function(e,a,t){e.exports={DrawerToggle:"DrawerToggle-module--DrawerToggle--33qJ2"}},yBb5:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("l9ME"),o=t.n(l),c=t("EEgH"),i=t.n(c),s=t("UWLP"),u=t.n(s),d=t("0c0T"),m=t.n(d),f=t("tBLo"),g=t.n(f),v=t("boqk"),E=t.n(v),p=function(e){var a=Object(n.useState)(!0),t=a[0],l=a[1],o=Object(n.useState)(!1),c=o[0],s=o[1],d=function(){l(window.innerWidth>845)},f=function(){window.location.href.includes("/oferta")|window.location.href.includes("-")|window.location.href.includes("/lekarze")|window.location.href.includes("/tech")|window.location.href.includes("/admin")?s(!0):s(!1)};Object(n.useEffect)((function(){return d(),window.addEventListener("resize",d),function(){return window.removeEventListener("resize",d)}})),Object(n.useEffect)((function(){return window.addEventListener("hashchange",f),function(){window.removeEventListener("hashchange",f)}}));var v=null;v=t?u.a:g.a,e.secondary?v=m.a:e.horizontal&&(v=g.a);var p=r.a.createElement("div",{className:i.a.Logo,onClick:function(){E()("#intro")}},r.a.createElement("img",{src:v,alt:"GKW - Gdyńska Klinika, weterynarii logo"}));return c&&(p=r.a.createElement("div",{className:i.a.Logo,onClick:function(e){e.preventDefault(),window.history.back(),setTimeout((function(){E()("#intro")}),500)}},r.a.createElement("img",{src:v,alt:"GKW - Gdyńska Klinika weterynarii logo"}))),p},w=r.a.memo(p),k=t("XHe0"),b=t.n(k),S=t("Wbzz"),N=t("XT7L"),h=t.n(N),y=function(e){var a=Object(n.useState)(!1),t=a[0],l=a[1],o=null;return Object(n.useEffect)((function(){(window.location.href.includes("/oferta")||window.location.href.includes("-")||window.location.href.includes("/lekarze")||window.location.href.includes("/tech")||window.location.href.includes("/admin"))&&l(!0)}),[]),o=t?r.a.createElement("a",{onClick:function(a){a.preventDefault(),Object(S.c)("/"),setTimeout((function(){E()("#"+e.section)}),500)}},e.children):r.a.createElement("a",{onClick:function(a){a.preventDefault(),E()("#"+e.section)}},e.children),r.a.createElement("li",{className:h.a.NavigationItem},o)},C=function(){return r.a.createElement("ul",{className:b.a.NavigationItems},r.a.createElement(y,{section:"oferta"},"Oferta"),r.a.createElement(y,{section:"klinika"},"Klinika"),r.a.createElement(y,{section:"klinika"},"Blog"),r.a.createElement(y,{section:"kadra"},"Kadra"),r.a.createElement(y,{section:"partnerzy"},"Partnerzy"),r.a.createElement(y,{section:"footer"},"Kontakt"))},T=t("vp1f"),z=t.n(T),W=function(e){var a=e.secondary?{backgroundColor:"white"}:null;z.a.DrawerToggle;return r.a.createElement("div",{className:z.a.DrawerToggle,onClick:e.clicked,role:"menu"},r.a.createElement("div",{className:z.a.SingleLine,style:a}),r.a.createElement("div",{className:z.a.SingleLine,style:a}),r.a.createElement("div",{className:z.a.SingleLine,style:a}))},P=t("E5ef"),D=function(e){var a=Object(n.useState)(!1),t=a[0],l=a[1],c=Object(n.useRef)();c.current=t,Object(n.useEffect)((function(){var e=function(){var e=window.scrollY>50;c.current!==e&&l(e)};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[]);return t||e.detailed?r.a.createElement("header",{id:"header",className:o.a.SecondaryToolbar},r.a.createElement(w,{secondary:!0}),r.a.createElement(W,{secondary:!0,clicked:e.drawerToggleClicked}),r.a.createElement("nav",{className:o.a.DesktopOnlySecondary},r.a.createElement("ul",null,r.a.createElement("li",null,"Poniedziałek - Piątek : ",r.a.createElement("strong",null,"7 - 22")),r.a.createElement("li",null,"Sobota : ",r.a.createElement("strong",null,"8 - 22")),r.a.createElement("li",null,"Niedziela : ",r.a.createElement("strong",null,"10 - 19"))),r.a.createElement(P.a,{type:"NavCall"}))):r.a.createElement("header",{id:"header",className:o.a.Toolbar},r.a.createElement(w,null),r.a.createElement(W,{clicked:e.drawerToggleClicked}),r.a.createElement("nav",{className:o.a.DesktopOnly},r.a.createElement(C,null),r.a.createElement("hr",null)))},O=r.a.memo(D),L=t("8UnQ"),x=t.n(L),j=function(e){var a=[x.a.SideDrawer,x.a.Close];return e.open&&(a=[x.a.SideDrawer,x.a.Open]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.join(" "),onClick:e.closed},r.a.createElement("nav",null,r.a.createElement("span",{className:x.a.Exit,onClick:e.closed}),r.a.createElement(C,null))))},B=function(e){var a=Object(n.useState)(!1),t=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{detailed:e.detailed,drawerToggleClicked:function(){l(!t)}}),r.a.createElement(j,{open:t,closed:function(){l(!1)}}),r.a.createElement("main",null,e.children))};a.a=r.a.memo(B)}}]);
//# sourceMappingURL=component---src-pages-administracja-js-6482c2e235add8ba858a.js.map