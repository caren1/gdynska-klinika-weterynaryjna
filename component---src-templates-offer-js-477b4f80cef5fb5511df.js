/*! For license information please see component---src-templates-offer-js-477b4f80cef5fb5511df.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0c0T":function(e,t,n){e.exports=n.p+"static/GKW-horizontal-greypaw-whitecross-1dcb64f2553b0c82e5d8d1adcb800d5b.svg"},"3BnU":function(e,t,n){e.exports={Offer:"offer-module--Offer--11AQu",OfferWrapper:"offer-module--OfferWrapper--QEeZN",Intro:"offer-module--Intro--11s3u",Content:"offer-module--Content--2hLKs",Exit:"offer-module--Exit--2AFMv"}},"8UnQ":function(e,t,n){e.exports={SideDrawer:"Sidedrawer-module--SideDrawer--2fdFg",Open:"Sidedrawer-module--Open--ymO6M",Close:"Sidedrawer-module--Close--j4_5C",Exit:"Sidedrawer-module--Exit--2QSbc"}},E5ef:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("Wbzz"),l=n("fJmU"),i=n.n(l);t.a=function(e){var t=null;switch(e.type){case"Call":t=o.a.createElement("a",{href:"tel:+48508072234",className:i.a.Call},"Zadzwoń");break;case"NavCall":t=o.a.createElement("a",{href:"tel:+48508072234",className:i.a.NavCall},"Zadzwoń");break;case"Route":t=o.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.google.com/maps/place/GKW.+Gdy%C5%84ska+Klinika+Weterynaryjna+lek.+wet.+Tomasza+Brzeskiego/@54.508372,18.5277082,17z/data=!3m1!4b1!4m5!3m4!1s0x46fda72d21c3e51f:0xe33b5f47e2bbd6ee!8m2!3d54.508372!4d18.5298969",className:i.a.Route},"Trasa");break;case"Back":t=o.a.createElement(r.a,{to:"/",className:i.a.Back},o.a.createElement("p",null,"Wróć do strony głównej"))}return t}},EEgH:function(e,t,n){e.exports={Logo:"Logo-module--Logo--gv7YM"}},"SR+s":function(e,t,n){(function(n){var a,o;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),a=this;do{for(t=n.length;0<=--t&&n.item(t)!==a;);}while(t<0&&(a=a.parentElement));return a}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var a=(new Date).getTime(),o=Math.max(0,16-(a-e)),r=window.setTimeout((function(){t(a+o)}),o);return e=a+o,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),o=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(a=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),a=n.length,o=-1,r="",l=n.charCodeAt(0);++o<a;){if(0===(t=n.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=1<=t&&t<=31||127==t||0===o&&48<=t&&t<=57||1===o&&48<=t&&t<=57&&45===l?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(o):"\\"+n.charAt(o)}return"#"+r},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},r=function(t,n,a){0===t&&document.body.focus(),a||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},l=function(t,n,a,o){if(n.emitEvents&&"function"==typeof e.CustomEvent){var r=new CustomEvent(t,{bubbles:!0,detail:{anchor:a,toggle:o}});document.dispatchEvent(r)}};return function(i,c){var s,u,m,d,f={cancelScroll:function(e){cancelAnimationFrame(d),d=null,e||l("scrollCancel",s)},animateScroll:function(a,i,c){f.cancelScroll();var u=n(s||t,c||{}),p="[object Number]"===Object.prototype.toString.call(a),h=p||!a.tagName?null:a;if(p||h){var E=e.pageYOffset;u.header&&!m&&(m=document.querySelector(u.header));var g,v,w,y,b,S,k,C,N=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(m),O=p?a:function(t,n,a,r){var l=0;if(t.offsetParent)for(;l+=t.offsetTop,t=t.offsetParent;);return l=Math.max(l-n-a,0),r&&(l=Math.min(l,o()-e.innerHeight)),l}(h,N,parseInt("function"==typeof u.offset?u.offset(a,i):u.offset,10),u.clip),T=O-E,I=o(),x=0,L=(g=T,w=(v=u).speedAsDuration?v.speed:Math.abs(g/1e3*v.speed),v.durationMax&&w>v.durationMax?v.durationMax:v.durationMin&&w<v.durationMin?v.durationMin:parseInt(w,10));0===e.pageYOffset&&e.scrollTo(0,0),k=a,C=u,p||history.pushState&&C.updateURL&&history.pushState({smoothScroll:JSON.stringify(C),anchor:k.id},document.title,k===document.documentElement?"#top":"#"+k.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?r(a,Math.floor(O),!1):(l("scrollStart",u,a,i),f.cancelScroll(!0),e.requestAnimationFrame((function t(n){var o,c,s;y||(y=n),x+=n-y,S=E+T*(c=b=1<(b=0===L?0:x/L)?1:b,"easeInQuad"===(o=u).easing&&(s=c*c),"easeOutQuad"===o.easing&&(s=c*(2-c)),"easeInOutQuad"===o.easing&&(s=c<.5?2*c*c:(4-2*c)*c-1),"easeInCubic"===o.easing&&(s=c*c*c),"easeOutCubic"===o.easing&&(s=--c*c*c+1),"easeInOutCubic"===o.easing&&(s=c<.5?4*c*c*c:(c-1)*(2*c-2)*(2*c-2)+1),"easeInQuart"===o.easing&&(s=c*c*c*c),"easeOutQuart"===o.easing&&(s=1- --c*c*c*c),"easeInOutQuart"===o.easing&&(s=c<.5?8*c*c*c*c:1-8*--c*c*c*c),"easeInQuint"===o.easing&&(s=c*c*c*c*c),"easeOutQuint"===o.easing&&(s=1+--c*c*c*c*c),"easeInOutQuint"===o.easing&&(s=c<.5?16*c*c*c*c*c:1+16*--c*c*c*c*c),o.customEasing&&(s=o.customEasing(c)),s||c),e.scrollTo(0,Math.floor(S)),function(t,n){var o=e.pageYOffset;if(t==n||o==n||(E<n&&e.innerHeight+o)>=I)return f.cancelScroll(!0),r(a,n,p),l("scrollStop",u,a,i),!(d=y=null)}(S,O)||(d=e.requestAnimationFrame(t),y=n)})))}}},p=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(u=t.target.closest(i))&&"a"===u.tagName.toLowerCase()&&!t.target.closest(s.ignore)&&u.hostname===e.location.hostname&&u.pathname===e.location.pathname&&/#/.test(u.href)){var n,o;try{n=a(decodeURIComponent(u.hash))}catch(t){n=a(u.hash)}if("#"===n){if(!s.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(n);(o=o||"#top"!==n?o:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(s),f.animateScroll(o,u))}},h=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(s)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(a(history.state.anchor)))||f.animateScroll(t,null,{updateURL:!1})}};return f.destroy=function(){s&&(document.removeEventListener("click",p,!1),e.removeEventListener("popstate",h,!1),f.cancelScroll(),d=m=u=s=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),s=n(t,c||{}),m=s.header?document.querySelector(s.header):null,document.addEventListener("click",p,!1),s.updateURL&&s.popstate&&e.addEventListener("popstate",h,!1)}(),f}}(o)}.apply(t,[]))||(e.exports=a)}).call(this,n("yLpj"))},UWLP:function(e,t,n){e.exports=n.p+"static/GKW-main-vertical-logo-fc190dcf13857fdff7e2a1e9b6010c2c.svg"},XHe0:function(e,t,n){e.exports={NavigationItems:"NavigationItems-module--NavigationItems--j5XGx"}},XT7L:function(e,t,n){e.exports={NavigationItem:"NavigationItem-module--NavigationItem--32UKP",active:"NavigationItem-module--active--3iv7H"}},fJmU:function(e,t,n){e.exports={Call:"Button-module--Call--2eKxV",Route:"Button-module--Route--1fGn1",NavCall:"Button-module--NavCall--ZCsde",Back:"Button-module--Back--21FXl"}},l9ME:function(e,t,n){e.exports={Toolbar:"Toolbar-module--Toolbar--9GcZM",DesktopOnly:"Toolbar-module--DesktopOnly--3vrAG",SecondaryToolbar:"Toolbar-module--SecondaryToolbar--26Jca",DesktopOnlySecondary:"Toolbar-module--DesktopOnlySecondary--3-2P4"}},tBLo:function(e,t,n){e.exports=n.p+"static/GKW-main-horizontal-730cf83d4119672679037f6c63561fe0.svg"},vp1f:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle-module--DrawerToggle--33qJ2"}},xRB0:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),r=(n("Wbzz"),n("yBb5")),l=n("3BnU"),i=n.n(l);t.default=function(e){var t=e.data.markdownRemark,n=t.frontmatter,a=t.html;return o.a.createElement(r.a,{detailed:!0},o.a.createElement("section",{className:i.a.Offer},o.a.createElement("a",{className:i.a.Exit,onClick:function(){window.history.back()}}),o.a.createElement("div",{className:i.a.OfferWrapper},o.a.createElement("div",{className:i.a.Intro},o.a.createElement("img",{src:n.icon,alt:n.title}),o.a.createElement("h1",null,n.title)),o.a.createElement("div",{className:i.a.Content,dangerouslySetInnerHTML:{__html:a}}))))}},yBb5:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("l9ME"),l=n.n(r),i=n("Wbzz"),c=n("EEgH"),s=n.n(c),u=n("UWLP"),m=n.n(u),d=n("0c0T"),f=n.n(d),p=n("tBLo"),h=n.n(p),E=function(e){var t=Object(a.useState)(!0),r=t[0],l=t[1],c=function(){l(window.innerWidth>845)};Object(a.useEffect)((function(){return window.addEventListener("resize",c),function(){return window.removeEventListener("resize",c)}}));var u=null;return u=r?m.a:h.a,e.secondary?u=f.a:e.horizontal&&(u=h.a),"undefined"!=typeof window&&n("SR+s")('a[href*="#"]'),o.a.createElement(i.a,{to:"/#intro"},o.a.createElement("div",{className:s.a.Logo},o.a.createElement("img",{src:u,alt:"GKW - Gdyńska Klinika weterynarii logo"})))},g=n("XHe0"),v=n.n(g),w=n("XT7L"),y=n.n(w),b=function(e){return o.a.createElement("li",{className:y.a.NavigationItem},o.a.createElement(i.a,{to:"/#"+e.section},e.children))},S=function(e){return"undefined"!=typeof window&&n("SR+s")('a[to*="#"]'),o.a.createElement("ul",{className:v.a.NavigationItems},o.a.createElement(b,{section:"oferta"},"Oferta"),o.a.createElement(b,{section:"klinika"},"Klinika"),o.a.createElement(b,{section:"klinika"},"Blog"),o.a.createElement(b,{section:"kadra"},"Kadra"),o.a.createElement(b,{section:"partnerzy"},"Partnerzy"),o.a.createElement(b,{section:"footer"},"Kontakt"))},k=n("vp1f"),C=n.n(k),N=function(e){var t=e.secondary?{backgroundColor:"white"}:null;C.a.DrawerToggle;return o.a.createElement("div",{className:C.a.DrawerToggle,onClick:e.clicked,role:"menu"},o.a.createElement("div",{className:C.a.SingleLine,style:t}),o.a.createElement("div",{className:C.a.SingleLine,style:t}),o.a.createElement("div",{className:C.a.SingleLine,style:t}))},O=n("E5ef"),T=function(e){"undefined"!=typeof window&&n("SR+s")('a[href*="#"]');var t=Object(a.useState)(!1),r=t[0],i=t[1],c=Object(a.useRef)();c.current=r,Object(a.useEffect)((function(){var e=function(){var e=window.scrollY>50;c.current!==e&&i(e)};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[]);return r||e.detailed?o.a.createElement("header",{id:"header",className:l.a.SecondaryToolbar},o.a.createElement(E,{secondary:!0}),o.a.createElement(N,{secondary:!0,clicked:e.drawerToggleClicked}),o.a.createElement("nav",{className:l.a.DesktopOnlySecondary},o.a.createElement("ul",null,o.a.createElement("li",null,"Poniedziałek - Piątek : ",o.a.createElement("strong",null,"7 - 22")),o.a.createElement("li",null,"Sobota : ",o.a.createElement("strong",null,"8 - 22")),o.a.createElement("li",null,"Niedziela : ",o.a.createElement("strong",null,"10 - 19"))),o.a.createElement(O.a,{type:"NavCall"}))):o.a.createElement("header",{id:"header",className:l.a.Toolbar},o.a.createElement(E,null),o.a.createElement(N,{clicked:e.drawerToggleClicked}),o.a.createElement("nav",{className:l.a.DesktopOnly},o.a.createElement(S,null),o.a.createElement("hr",null)))},I=n("8UnQ"),x=n.n(I),L=function(e){var t=[x.a.SideDrawer,x.a.Close];return e.open&&(t=[x.a.SideDrawer,x.a.Open]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:t.join(" "),onClick:e.closed},o.a.createElement("nav",null,o.a.createElement("a",{href:"#",className:x.a.Exit}),o.a.createElement(S,null))))};t.a=function(e){var t=Object(a.useState)(!1),n=t[0],r=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,{detailed:e.detailed,drawerToggleClicked:function(){r(!n)}}),o.a.createElement(L,{open:n,closed:function(){r(!1)}}),o.a.createElement("main",null,e.children))}}}]);
//# sourceMappingURL=component---src-templates-offer-js-477b4f80cef5fb5511df.js.map