(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0jlH":function(Q,P,d){"use strict";d.r(P);var r=d("q1tI"),X=d.n(r),f=d("95SA"),R=d("aeNJ"),s=d("WHYC"),T=d("9kvl"),O=d("s4NR"),L=d.n(O),o=d("nKUr"),m=d.n(o),b=function(w){var E=w.children,U=w.loading,a=w.currentUser,y=Object(R.b)(),S=y.update;console.log("security check curr user",a);var M=a&&a.token,B=Object(O.stringify)({redirect:window.location.href});return!M&&U?Object(o.jsx)(f.a,{}):!M&&window.location.pathname!=="/user/login"?Object(o.jsx)(s.c,{to:"/user/login?".concat(B)}):(Object(r.useEffect)(function(){var n,e,t,i;S({name:(a==null||(n=a.info)===null||n===void 0?void 0:n["first-name"])+" "+(a==null||(e=a.info)===null||e===void 0?void 0:e["last-name"]),email:a==null?void 0:a.email}),window.analytics.identify({email:a==null?void 0:a.email,firstName:a==null||(t=a.info)===null||t===void 0?void 0:t["first-name"],lastName:a==null||(i=a.info)===null||i===void 0?void 0:i["last-name"]})},[M]),Object(o.jsx)(o.Fragment,{children:E}))};P.default=Object(T.b)(function(A){var w=A.user,E=A.loading;return{currentUser:w.currentUser,loading:E.models.user}})(b)},aeNJ:function(Q,P,d){"use strict";d.d(P,"a",function(){return S}),d.d(P,"b",function(){return B});var r=d("q1tI"),X=d.n(r);function f(){return f=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},f.apply(this,arguments)}function R(n,e){if(n==null)return{};var t={},i=Object.keys(n),l,v;for(v=0;v<i.length;v++)l=i[v],!(e.indexOf(l)>=0)&&(t[l]=n[l]);return t}var s=function(e,t){if(!1)var i},T=function(e){return Object.keys(e).length===0&&e.constructor===Object},O=typeof window=="undefined",L=function n(e){return Object.keys(e).forEach(function(t){e[t]&&typeof e[t]=="object"?n(e[t]):e[t]===void 0&&delete e[t]}),e},o=function(e){if(!O&&window.Intercom){for(var t=arguments.length,i=new Array(t>1?t-1:0),l=1;l<t;l++)i[l-1]=arguments[l];return window.Intercom.apply(null,[e].concat(i))}else s("error",e+" Intercom instance is not initalized yet")},m="Please wrap your component with `IntercomProvider`.",b=Object(r.createContext)({boot:function(){return s("error",m)},shutdown:function(){return s("error",m)},hardShutdown:function(){return s("error",m)},update:function(){return s("error",m)},hide:function(){return s("error",m)},show:function(){return s("error",m)},showMessages:function(){return s("error",m)},showNewMessages:function(){return s("error",m)},getVisitorId:function(){return s("error",m),""},startTour:function(){return s("error",m)},trackEvent:function(){return s("error",m)}}),A=function(e){var t=window,i=t.Intercom;if(typeof i=="function")i("reattach_activator"),i("update",t.intercomSettings);else{var l=document,v=function p(){p.c(arguments)};v.q=[],v.c=function(p){v.q.push(p)},t.Intercom=v;var _=function(){var g=l.createElement("script");g.type="text/javascript",g.async=!0,g.src="https://widget.intercom.io/widget/"+e;var j=l.getElementsByTagName("script")[0];j.parentNode.insertBefore(g,j)};document.readyState==="complete"?_():t.attachEvent?t.attachEvent("onload",_):t.addEventListener("load",_,!1)}},w=function(e){return{custom_launcher_selector:e.customLauncherSelector,alignment:e.alignment,vertical_padding:e.verticalPadding,horizontal_padding:e.horizontalPadding,hide_default_launcher:e.hideDefaultLauncher,session_duration:e.sessionDuration,action_color:e.actionColor,background_color:e.backgroundColor}},E=function(e){return f({company_id:e.companyId,name:e.name,created_at:e.createdAt,plan:e.plan,monthly_spend:e.monthlySpend,user_count:e.userCount,size:e.size,website:e.website,industry:e.industry},e.customAttributes)},U=function(e){return{type:e.type,image_url:e.imageUrl}},a=function(e){var t;return f({email:e.email,user_id:e.userId,created_at:e.createdAt,name:e.name,phone:e.phone,last_request_at:e.lastRequestAt,unsubscribed_from_emails:e.unsubscribedFromEmails,language_override:e.languageOverride,utm_campaign:e.utmCampaign,utm_content:e.utmContent,utm_medium:e.utmMedium,utm_source:e.utmSource,utm_term:e.utmTerm,avatar:e.avatar&&U(e.avatar),user_hash:e.userHash,company:e.company&&E(e.company),companies:(t=e.companies)==null?void 0:t.map(E)},e.customAttributes)},y=function(e){return L(f({},w(e),a(e)))},S=function(e){var t=e.appId,i=e.autoBoot,l=i===void 0?!1:i,v=e.children,_=e.onHide,p=e.onShow,g=e.onUnreadCountChange,j=e.shouldInitialize,Z=j===void 0?!O:j,q=e.apiBase,ee=R(e,["appId","autoBoot","children","onHide","onShow","onUnreadCountChange","shouldInitialize","apiBase"]);T(ee);var D=Object(r.useRef)(t),C=Object(r.useRef)(q),I=Object(r.useRef)(l),z=Object(r.useRef)(Z);!O&&!window.Intercom&&z.current&&(A(D.current),_&&o("onHide",_),p&&o("onShow",p),g&&o("onUnreadCountChange",g),l&&(o("boot",f({app_id:D.current},C.current&&{api_base:C.current})),window.intercomSettings=f({app_id:D.current},C.current&&{api_base:C.current})));var c=Object(r.useCallback)(function(u,h){if(u===void 0&&(u="A function"),!window.Intercom&&!z.current){s("warn","Intercom instance is not initialized because `shouldInitialize` is set to `false` in `IntercomProvider`");return}if(!I.current){s("warn",["'"+u+"' was called but Intercom has not booted yet. ","Please call 'boot' before calling '"+u+"' or ","set 'autoBoot' to true in the IntercomProvider."].join(""));return}return h()},[]),K=Object(r.useCallback)(function(u){if(!window.Intercom&&!z.current){s("warn","Intercom instance is not initialized because `shouldInitialize` is set to `false` in `IntercomProvider`");return}if(!I.current){var h=f({app_id:D.current},C.current&&{api_base:C.current},u&&y(u));window.intercomSettings=h,o("boot",h),I.current=!0}},[]),N=Object(r.useCallback)(function(){!I.current||(o("shutdown"),I.current=!1)},[]),W=Object(r.useCallback)(function(){!I.current||(o("shutdown"),delete window.Intercom,delete window.intercomSettings,I.current=!1)},[]),x=Object(r.useCallback)(function(){c("update",function(){var u=new Date().getTime();o("update",{last_requested_at:u})})},[c]),k=Object(r.useCallback)(function(u){c("update",function(){if(!u){x();return}var h=y(u);window.intercomSettings=f({},window.intercomSettings,h),o("update",h)})},[c,x]),V=Object(r.useCallback)(function(){c("hide",function(){o("hide")})},[c]),H=Object(r.useCallback)(function(){c("show",function(){return o("show")})},[c]),$=Object(r.useCallback)(function(){c("showMessages",function(){o("showMessages")})},[c]),J=Object(r.useCallback)(function(u){c("showNewMessage",function(){u?o("showNewMessage",u):o("showNewMessage")})},[c]),F=Object(r.useCallback)(function(){return c("getVisitorId",function(){return o("getVisitorId")})},[c]),G=Object(r.useCallback)(function(u){c("startTour",function(){o("startTour",u)})},[c]),Y=Object(r.useCallback)(function(u,h){c("trackEvent",function(){h?o("trackEvent",u,h):o("trackEvent",u)})},[c]),ne=Object(r.useMemo)(function(){return{boot:K,shutdown:N,hardShutdown:W,update:k,hide:V,show:H,showMessages:$,showNewMessages:J,getVisitorId:F,startTour:G,trackEvent:Y}},[K,N,W,k,V,H,$,J,F,G,Y]),te=Object(r.useMemo)(function(){return v},[v]);return Object(r.createElement)(b.Provider,{value:ne},te)},M=function(){return Object(r.useContext)(b)},B=function(){return M()}}}]);
