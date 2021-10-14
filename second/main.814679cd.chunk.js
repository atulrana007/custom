(this["webpackJsonpauth0-react-sample"]=this["webpackJsonpauth0-react-sample"]||[]).push([[0],{22:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(23),i=a.n(r),o=a(3),l=function(){return Object(c.jsxs)("div",{className:"next-steps",children:[Object(c.jsx)("h2",{className:"my-5 text-center",children:"What can I do next?"}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-md-5 mb-4",children:[Object(c.jsx)("h6",{className:"mb-3",children:Object(c.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/connections",children:[Object(c.jsx)("i",{className:"fas fa-link mr-2"}),"Configure other identity providers"]})}),Object(c.jsx)("p",{children:"Auth0 supports social providers as Facebook, Twitter, Instagram and 100+, Enterprise providers as Microsoft Office 365, Google Apps, Azure, and more. You can also use any OAuth2 Authorization Server."})]}),Object(c.jsx)("div",{className:"col-md"}),Object(c.jsxs)("div",{className:"col-md-5 mb-4",children:[Object(c.jsx)("h6",{className:"mb-3",children:Object(c.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/multifactor-authentication",children:[Object(c.jsx)("i",{className:"fas fa-link mr-2"}),"Enable Multi-Factor Authentication"]})}),Object(c.jsx)("p",{children:"Add an extra layer of security by enabling Multi-factor Authentication, requiring your users to provide more than one piece of identifying information. Push notifications, authenticator apps, SMS, and DUO Security are supported."})]})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-md-5 mb-4",children:[Object(c.jsx)("h6",{className:"mb-3",children:Object(c.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/anomaly-detection",children:[Object(c.jsx)("i",{className:"fas fa-link mr-2"}),"Anomaly Detection"]})}),Object(c.jsx)("p",{children:"Auth0 can detect anomalies and stop malicious attempts to access your application. Anomaly detection can alert you and your users of suspicious activity, as well as block further login attempts."})]}),Object(c.jsx)("div",{className:"col-md"}),Object(c.jsxs)("div",{className:"col-md-5 mb-4",children:[Object(c.jsx)("h6",{className:"mb-3",children:Object(c.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/rules",children:[Object(c.jsx)("i",{className:"fas fa-link mr-2"}),"Learn About Rules"]})}),Object(c.jsx)("p",{children:"Rules are JavaScript functions that execute when a user authenticates to your application. They run once the authentication process is complete, and you can use them to customize and extend Auth0's capabilities."})]})]})]})},j=function(){return Object(c.jsxs)("div",{className:"text-center hero",children:[Object(c.jsx)("img",{className:"mb-3 app-logo",src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/logo.png",alt:"React logo",width:"120"}),Object(c.jsx)("h1",{className:"mb-4",children:"React Sample Project"}),Object(c.jsxs)("p",{className:"lead",children:["This is a sample application that demonstrates an authentication flow for an SPA, using"," ",Object(c.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com/docs/quickstart/spa/react",children:"React"})]})]})},d=function(){return Object(c.jsx)("div",{className:"spinner",children:Object(c.jsx)("img",{src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",alt:"Loading..."})})},b=a(7),m=a(8),u=a(11),h=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0];t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"External API"}),Object(c.jsxs)("p",{children:["You use will use a button to call an external API using an access token, and the API will validate it using the API's audience value.",Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"This route should be protected"}),"."]}),Object(c.jsxs)("div",{className:"btn-group mt-5",role:"group","aria-label":"External API Requests Examples",children:[Object(c.jsx)("button",{type:"button",className:"btn btn-primary",children:"Get Public Message"}),Object(c.jsx)("button",{type:"button",className:"btn btn-primary",children:"Get Protected Message"})]}),a&&Object(c.jsxs)("div",{className:"mt-5",children:[Object(c.jsx)("h6",{className:"muted",children:"Result"}),Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("code",{className:"col-12 text-light bg-dark p-4",children:JSON.stringify(a,null,2)})})})]})]})},O=function(){return Object(c.jsxs)(n.Fragment,{children:[Object(c.jsx)(j,{}),Object(c.jsx)("hr",{}),Object(c.jsx)(l,{})]})},p=function(){var e=Object(m.b)().user,t=e.name,a=e.picture,n=e.email;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"row align-items-center profile-header",children:[Object(c.jsx)("div",{className:"col-md-2 mb-3",children:Object(c.jsx)("img",{src:a,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})}),Object(c.jsxs)("div",{className:"col-md text-center text-md-left",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("p",{className:"lead text-muted",children:n})]})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("pre",{className:"col-12 text-light bg-dark p-4",children:JSON.stringify(e,null,2)})})]})},x=a(2),g=a(25),v=function(e){var t=e.component,a=Object(g.a)(e,["component"]);return Object(c.jsx)(o.b,Object(x.a)({component:Object(m.c)(t,{onRedirecting:function(){return Object(c.jsx)(d,{})}})},a))},f=a(18),N=a.n(f),w=a(26),E=a(12),y=(a(27),s.a.createContext({}));function k(e){var t=Object(n.useContext)(y),a=t.loginWithPassword,c=t.otpLogin,r=t.otpStart,i=Object(n.useState)({email:"",password:"",otp:"",otpAvailable:!1,isSubmitting:!1}),o=Object(u.a)(i,2),l=o[0],j=o[1],d=Object(n.useState)({email:"",isEmailError:"",databaseError:""}),b=Object(u.a)(d,2),m=b[0],h=b[1],O=Object(n.useState)(!1),p=Object(u.a)(O,2),g=p[0],v=p[1],f=Object(n.useState)(!1),k=Object(u.a)(f,2),A=k[0],C=k[1],S=function(e){switch(e.target.name){case"email":e.target.value?e.target.value&&(t=e.target.value,!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase()))?h(Object(x.a)(Object(x.a)({},m),{},Object(E.a)({isEmailError:!0},e.target.name,"Email is not valid"))):h(Object(x.a)(Object(x.a)({},m),{},Object(E.a)({isEmailError:!1},e.target.name,""))):h(Object(x.a)(Object(x.a)({},m),{},Object(E.a)({isEmailError:!0},e.target.name,"Email is required")))}var t},L=function(){var e=Object(w.a)(N.a.mark((function e(t){var n,s,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),g){e.next=16;break}return e.prev=2,e.next=5,a(l.email,l.password);case 5:n=e.sent,h(Object(x.a)(Object(x.a)({},m),{},{databaseError:""})),console.log(n),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),h(Object(x.a)(Object(x.a)({},m),{},{databaseError:e.t0.description}));case 14:e.next=35;break;case 16:if(e.prev=16,!l.otpAvailable){e.next=24;break}return e.next=20,c(l.email,l.otp);case 20:s=e.sent,console.log(s,"ankit"),e.next=29;break;case 24:return e.next=26,r(l.email);case 26:i=e.sent,console.log("enter here",i),j(Object(x.a)(Object(x.a)({},l),{},{otpAvailable:!0}));case 29:e.next=35;break;case 31:e.prev=31,e.t1=e.catch(16),console.log(e.t1),h(Object(x.a)(Object(x.a)({},m),{},{databaseError:e.t1.description}));case 35:case"end":return e.stop()}}),e,null,[[2,10],[16,31]])})));return function(t){return e.apply(this,arguments)}}(),I=s.a.Children.only(e.children);return s.a.cloneElement(I,{onChange:function(e){j(Object(x.a)(Object(x.a)({},l),{},Object(E.a)({},e.target.name,e.target.value))),S(e)},onToggle:function(){v(!g),h(Object(x.a)(Object(x.a)({},m),{},{email:"",databaseError:""}))},switchLogin:g,onSubmit:L,LoginForm:l,LoginError:m,Continue:A,onPressContinue:function(){C(!0)}})}a(22);var A=a(28),C=function(e){var t=e.onChange,a=e.switchLogin,n=e.onSubmit,s=e.LoginError,r=e.LoginForm,i=e.onToggle,o=e.Continue,l=e.onPressContinue;return Object(c.jsxs)("div",{className:"LoginWrapperContainer",children:[Object(c.jsxs)("form",{className:"InputWrapper",children:[Object(c.jsx)("div",{className:"InputLabel",children:"Email"}),Object(c.jsxs)("div",{className:"InputAndLogo",style:{border:!0===s.isEmailError?"2px solid red":!1===s.isEmailError?"2px solid green":""},children:[Object(c.jsx)(A.a,{style:{height:"2rem",width:"2rem","margin-top":"0.5rem",color:"rgb(175, 174, 174)"}}),Object(c.jsx)("input",{type:"email",id:"email",name:"email",value:r.email,placeholder:"Email",className:"Input",onChange:t})]}),s.email&&Object(c.jsx)("div",{className:"Error",children:s.email}),o&&!a&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"InputLabel",children:"Password"}),Object(c.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"********",className:"Input",onChange:t})]}),o&&a&&r.otpAvailable&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"InputLabel",children:"one-time passcode"}),Object(c.jsx)("input",{id:"otp",name:"otp",className:"Input",onChange:t})]}),!o&&Object(c.jsx)("button",{className:"continueButton",onClick:l,children:Object(c.jsx)("div",{children:"Continue"})}),o&&Object(c.jsx)("button",{className:"RequestOtp",onClick:n,children:a?r.otpAvailable?Object(c.jsx)("div",{children:"Sign in"}):Object(c.jsx)("div",{children:"Request one-time passcode"}):Object(c.jsx)("div",{children:"Login"})})]}),Object(c.jsx)("div",{className:"Error",children:s.databaseError}),o&&Object(c.jsxs)("div",{className:"SwitchContainer",children:[Object(c.jsx)("div",{className:"Switch",children:"OR"}),Object(c.jsx)("button",{className:"SwitchBtn",onClick:i,children:a?Object(c.jsx)("div",{children:"Sign in with a password"}):Object(c.jsx)("div",{children:"Sign in with a one-time passcode"})})]})]})},S=function(e){var t=e.onChange,a=e.switchLogin,n=e.onToggle,s=e.onSubmit,r=e.LoginError,i=e.LoginForm,o=e.Continue,l=e.onPressContinue;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"LoginContainer",children:[Object(c.jsxs)("div",{className:"LeftWrapper",children:[Object(c.jsxs)("div",{className:"WelcomeContainer",children:[Object(c.jsx)("div",{className:"Heading",children:"McAfee"}),Object(c.jsx)("div",{className:"Intro",children:"Sign in to your McAfee account"}),Object(c.jsx)("div",{className:"IntroSubHeading",children:"Enter your email address so we can find your account."})]}),Object(c.jsx)("hr",{className:"hr"})]}),Object(c.jsx)("div",{className:"RightWrapper",children:Object(c.jsx)(C,{LoginError:r,onChange:t,switchLogin:a,onSubmit:s,LoginForm:i,onToggle:n,onPressContinue:l,Continue:o})})]})})},L=function(e){return Object(c.jsx)(k,Object(x.a)(Object(x.a)({},e),{},{children:Object(c.jsx)(S,{})}))},I=(a(45),a(46),function(){return console.log("Bundle is working fine"),Object(c.jsx)("div",{id:"app",className:"d-flex flex-column h-100",children:Object(c.jsx)("div",{className:"container flex-grow-1",children:Object(c.jsx)("div",{className:"mt-5",children:Object(c.jsxs)(o.d,{children:[Object(c.jsx)(o.b,{path:"/",exact:!0,component:O}),Object(c.jsx)(o.b,{path:"/login",exact:!0,component:L}),Object(c.jsx)(v,{path:"/profile",component:p}),Object(c.jsx)(v,{path:"/external-api",component:h})]})})})})}),P=function(e){var t=e.children,a=Object(o.g)();return Object(c.jsx)(m.a,{domain:"dev-xl32ev2i.us.auth0.com",clientId:"9dR6Ug2BQQbmBMp6grHf1R962NBigRxg",redirectUri:window.location.origin,onRedirectCallback:function(e){a.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},children:t})};a(47);i.a.render(Object(c.jsx)(b.a,{children:Object(c.jsx)(P,{children:Object(c.jsx)(I,{})})}),document.getElementById("root"))}},[[48,1,2]]]);
