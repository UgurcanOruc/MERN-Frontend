(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),l=Object(a.createContext)({isLoggedIn:!1,userId:null,token:null,login:function(){},logout:function(){}})},,,function(e,t,n){"use strict";var a=n(0),l=n.n(a);n(38);t.a=function(e){return l.a.createElement("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay")},l.a.createElement("div",{className:"lds-dual-ring"}))}},function(e,t,n){"use strict";var a=n(0),l=n.n(a),c=n(4),r=n.n(c);n(36);t.a=function(e){return r.a.createPortal(l.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}},,,,,,,function(e,t,n){e.exports=n(39)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,l=n(0),c=n.n(l),r=n(4),u=n.n(r),o=(n(27),n(9)),i=n(5),m=(n(28),function(e){return c.a.createElement("header",{className:"main-header"},e.children)}),s=n(11),E=(n(29),function(e){var t=Object(l.useContext)(s.a);return c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(i.c,{to:"/",exact:!0},"ALL USERS")),t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(i.c,{to:"/".concat(t.userId,"/places")},"MY PLACES")),t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(i.c,{to:"/places/new"},"ADD PLACE")),!t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(i.c,{to:"/auth"},"AUTHENTICATE")),t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement("button",{onClick:t.logout},"LOGOUT")))}),d=n(41),f=(n(35),function(e){var t=c.a.createElement(d.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children));return u.a.createPortal(t,document.getElementById("drawer-hook"))}),g=n(15),b=(n(37),function(e){var t=Object(l.useState)(!1),n=Object(o.a)(t,2),a=n[0],r=n[1],u=function(){r(!1)};return c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(g.a,{onClick:u}),c.a.createElement(f,{show:a,onClick:u},c.a.createElement("nav",{className:"main-navigation__drawer-nav"},c.a.createElement(E,null))),c.a.createElement(m,null,c.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){r(!0)}},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)),c.a.createElement("h1",{className:"main-navigation__title"},c.a.createElement(i.b,{to:"/"},"Your Places")),c.a.createElement("nav",{className:"main-navigation__header-nav"},c.a.createElement(E,null))))}),p=n(1),v=n(14),h=c.a.lazy((function(){return n.e(6).then(n.bind(null,69))})),k=c.a.lazy((function(){return n.e(4).then(n.bind(null,66))})),I=c.a.lazy((function(){return n.e(7).then(n.bind(null,70))})),O=c.a.lazy((function(){return n.e(5).then(n.bind(null,67))})),C=c.a.lazy((function(){return n.e(3).then(n.bind(null,68))})),N=function(){var e,t=function(){var e=Object(l.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(l.useState)(),u=Object(o.a)(r,2),i=u[0],m=u[1],s=Object(l.useState)(),E=Object(o.a)(s,2),d=E[0],f=E[1],g=Object(l.useCallback)((function(e,t,n){c(t),f(e);var a=n||new Date((new Date).getTime()+36e5);m(a),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:a.toISOString()}))}),[]),b=Object(l.useCallback)((function(){f(null),c(null),m(null),localStorage.removeItem("userData")}),[]);return Object(l.useEffect)((function(){if(n&&i){var e=i.getTime()-(new Date).getTime();a=setTimeout(b,e)}else clearTimeout(a)}),[n,b,i]),Object(l.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&g(e.userId,e.token,e.expiration)}),[g]),{token:n,login:g,logout:b,userId:d}}(),n=t.token,r=t.login,u=t.logout,m=t.userId;return e=n?c.a.createElement(p.d,null,c.a.createElement(p.b,{path:"/",exact:!0},c.a.createElement(h,null)),c.a.createElement(p.b,{path:"/:userId/places",exact:!0},c.a.createElement(I,null)),c.a.createElement(p.b,{path:"/places/new",exact:!0},c.a.createElement(k,null)),c.a.createElement(p.b,{path:"/places/:placeId"},c.a.createElement(O,null)),c.a.createElement(p.a,{to:"/"})):c.a.createElement(p.d,null,c.a.createElement(p.b,{path:"/",exact:!0},c.a.createElement(h,null)),c.a.createElement(p.b,{path:"/:userId/places",exact:!0},c.a.createElement(I,null)),c.a.createElement(p.b,{path:"/auth"},c.a.createElement(C,null)),c.a.createElement(p.a,{to:"/auth"})),c.a.createElement(s.a.Provider,{value:{isLoggedIn:!!n,token:n,userId:m,login:r,logout:u}},c.a.createElement(i.a,null,c.a.createElement(b,null),c.a.createElement("main",null,c.a.createElement(l.Suspense,{fallback:c.a.createElement("div",{className:"center"},c.a.createElement(v.a,null))},e))))};u.a.render(c.a.createElement(N,null),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.135ece21.chunk.js.map