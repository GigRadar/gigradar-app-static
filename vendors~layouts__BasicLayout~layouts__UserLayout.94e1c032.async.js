(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0XgM":function(J,L,E){},"9W6o":function(J,L,E){"use strict";var j=E("B9cy"),G=E("Ol7k"),I=E("oN5p"),g=E("q1tI"),y=E.n(g),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"}}]},name:"copyright",theme:"outlined"},S=C,H=E("6VBw"),X=function(_,b){return g.createElement(H.a,Object.assign({},_,{ref:b,icon:S}))};X.displayName="CopyrightOutlined";var k=g.forwardRef(X),Y=E("DPCm"),x=E("TSYQ"),o=E.n(x),u=function(v){var _=v.className,b=v.prefixCls,O=b===void 0?"ant-pro":b,W=v.links,w=v.copyright,K=v.style;if((W==null||W===!1||Array.isArray(W)&&W.length===0)&&(w==null||w===!1))return null;var N="".concat(O,"-global-footer"),ne=o()(N,_);return y.a.createElement("div",{className:ne,style:K},W&&y.a.createElement("div",{className:"".concat(N,"-links")},W.map(function(q){return y.a.createElement("a",{key:q.key,title:q.key,target:q.blankTarget?"_blank":"_self",href:q.href},q.title)})),w&&y.a.createElement("div",{className:"".concat(N,"-copyright")},w))};function c(v,_){var b=Object.keys(v);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(v);_&&(O=O.filter(function(W){return Object.getOwnPropertyDescriptor(v,W).enumerable})),b.push.apply(b,O)}return b}function s(v){for(var _=1;_<arguments.length;_++){var b=arguments[_]!=null?arguments[_]:{};_%2?c(Object(b),!0).forEach(function(O){R(v,O,b[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(b)):c(Object(b)).forEach(function(O){Object.defineProperty(v,O,Object.getOwnPropertyDescriptor(b,O))})}return v}function R(v,_,b){return _ in v?Object.defineProperty(v,_,{value:b,enumerable:!0,configurable:!0,writable:!0}):v[_]=b,v}var M=G.a.Footer,m=[{key:"Ant Design Pro",title:"Ant Design Pro",href:"https://pro.ant.design",blankTarget:!0},{key:"github",title:y.a.createElement(I.a,null),href:"https://github.com/ant-design/ant-design-pro",blankTarget:!0},{key:"Ant Design",title:"Ant Design",href:"https://ant.design",blankTarget:!0}],B="2019 \u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\u51FA\u54C1",z=function(_){var b=_.links,O=_.copyright,W=_.style,w=_.className,K=_.prefixCls;return y.a.createElement(M,{className:w,style:s({padding:0},W)},y.a.createElement(u,{links:b!==void 0?b:m,prefixCls:K,copyright:O===!1?null:y.a.createElement(g.Fragment,null,"Copyright ",y.a.createElement(k,null)," ",O||B)}))},P=L.a=z},B9cy:function(J,L,E){"use strict";var j=E("cIOH"),G=E.n(j),I=E("0XgM"),g=E.n(I)},CiB2:function(J,L,E){"use strict";E.d(L,"a",function(){return j});function j(G){if(G==null)throw new TypeError("Cannot destructure undefined")}},DPCm:function(J,L,E){},GOef:function(J,L,E){"use strict";E.d(L,"c",function(){return or}),E.d(L,"a",function(){return Re}),E.d(L,"b",function(){return vr});var j=E("n2rz"),G=E.n(j);function I(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function g(e,t){t===void 0&&(t=I);var r,n=[],i,f=!1;function a(){for(var d=[],l=0;l<arguments.length;l++)d[l]=arguments[l];return f&&r===this&&t(d,n)||(i=e.apply(this,d),f=!0,r=this,n=d),i}return a}var y=g;function C(e){for(var t=[],r=0;r<e.length;){var n=e[r];if(n==="*"||n==="+"||n==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(n==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(n==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(n==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(n===":"){for(var i="",f=r+1;f<e.length;){var a=e.charCodeAt(f);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||a===95){i+=e[f++];continue}break}if(!i)throw new TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:i}),r=f;continue}if(n==="("){var d=1,l="",f=r+1;if(e[f]==="?")throw new TypeError('Pattern cannot start with "?" at '+f);for(;f<e.length;){if(e[f]==="\\"){l+=e[f++]+e[f++];continue}if(e[f]===")"){if(d--,d===0){f++;break}}else if(e[f]==="("&&(d++,e[f+1]!=="?"))throw new TypeError("Capturing groups are not allowed at "+f);l+=e[f++]}if(d)throw new TypeError("Unbalanced pattern at "+r);if(!l)throw new TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:l}),r=f;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}function S(e,t){t===void 0&&(t={});for(var r=C(e),n=t.prefixes,i=n===void 0?"./":n,f="[^"+x(t.delimiter||"/#?")+"]+?",a=[],d=0,l=0,h="",A=function(te){if(l<r.length&&r[l].type===te)return r[l++].value},p=function(te){var ce=A(te);if(ce!==void 0)return ce;var De=r[l],pr=De.type,yr=De.index;throw new TypeError("Unexpected "+pr+" at "+yr+", expected "+te)},D=function(){for(var te="",ce;ce=A("CHAR")||A("ESCAPED_CHAR");)te+=ce;return te};l<r.length;){var F=A("CHAR"),U=A("NAME"),Z=A("PATTERN");if(U||Z){var T=F||"";i.indexOf(T)===-1&&(h+=T,T=""),h&&(a.push(h),h=""),a.push({name:U||d++,prefix:T,suffix:"",pattern:Z||f,modifier:A("MODIFIER")||""});continue}var Q=F||A("ESCAPED_CHAR");if(Q){h+=Q;continue}h&&(a.push(h),h="");var $=A("OPEN");if($){var T=D(),ee=A("NAME")||"",re=A("PATTERN")||"",_e=D();p("CLOSE"),a.push({name:ee||(re?d++:""),pattern:ee&&!re?f:re,prefix:T,suffix:_e,modifier:A("MODIFIER")||""});continue}p("END")}return a}function H(e,t){return X(S(e,t),t)}function X(e,t){t===void 0&&(t={});var r=o(t),n=t.encode,i=n===void 0?function(l){return l}:n,f=t.validate,a=f===void 0?!0:f,d=e.map(function(l){if(typeof l=="object")return new RegExp("^(?:"+l.pattern+")$",r)});return function(l){for(var h="",A=0;A<e.length;A++){var p=e[A];if(typeof p=="string"){h+=p;continue}var D=l?l[p.name]:void 0,F=p.modifier==="?"||p.modifier==="*",U=p.modifier==="*"||p.modifier==="+";if(Array.isArray(D)){if(!U)throw new TypeError('Expected "'+p.name+'" to not repeat, but got an array');if(D.length===0){if(F)continue;throw new TypeError('Expected "'+p.name+'" to not be empty')}for(var Z=0;Z<D.length;Z++){var T=i(D[Z],p);if(a&&!d[A].test(T))throw new TypeError('Expected all "'+p.name+'" to match "'+p.pattern+'", but got "'+T+'"');h+=p.prefix+T+p.suffix}continue}if(typeof D=="string"||typeof D=="number"){var T=i(String(D),p);if(a&&!d[A].test(T))throw new TypeError('Expected "'+p.name+'" to match "'+p.pattern+'", but got "'+T+'"');h+=p.prefix+T+p.suffix;continue}if(!F){var Q=U?"an array":"a string";throw new TypeError('Expected "'+p.name+'" to be '+Q)}}return h}}function k(e,t){var r=[],n=M(e,r,t);return Y(n,r,t)}function Y(e,t,r){r===void 0&&(r={});var n=r.decode,i=n===void 0?function(f){return f}:n;return function(f){var a=e.exec(f);if(!a)return!1;for(var d=a[0],l=a.index,h=Object.create(null),A=function(F){if(a[F]===void 0)return"continue";var U=t[F-1];U.modifier==="*"||U.modifier==="+"?h[U.name]=a[F].split(U.prefix+U.suffix).map(function(Z){return i(Z,U)}):h[U.name]=i(a[F],U)},p=1;p<a.length;p++)A(p);return{path:d,index:l,params:h}}}function x(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function o(e){return e&&e.sensitive?"":"i"}function u(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}function c(e,t,r){var n=e.map(function(i){return M(i,t,r).source});return new RegExp("(?:"+n.join("|")+")",o(r))}function s(e,t,r){return R(S(e,r),t,r)}function R(e,t,r){r===void 0&&(r={});for(var n=r.strict,i=n===void 0?!1:n,f=r.start,a=f===void 0?!0:f,d=r.end,l=d===void 0?!0:d,h=r.encode,A=h===void 0?function(pe){return pe}:h,p="["+x(r.endsWith||"")+"]|$",D="["+x(r.delimiter||"/#?")+"]",F=a?"^":"",U=0,Z=e;U<Z.length;U++){var T=Z[U];if(typeof T=="string")F+=x(A(T));else{var Q=x(A(T.prefix)),$=x(A(T.suffix));if(T.pattern)if(t&&t.push(T),Q||$)if(T.modifier==="+"||T.modifier==="*"){var ee=T.modifier==="*"?"?":"";F+="(?:"+Q+"((?:"+T.pattern+")(?:"+$+Q+"(?:"+T.pattern+"))*)"+$+")"+ee}else F+="(?:"+Q+"("+T.pattern+")"+$+")"+T.modifier;else F+="("+T.pattern+")"+T.modifier;else F+="(?:"+Q+$+")"+T.modifier}}if(l)i||(F+=D+"?"),F+=r.endsWith?"(?="+p+")":"$";else{var re=e[e.length-1],_e=typeof re=="string"?D.indexOf(re[re.length-1])>-1:re===void 0;i||(F+="(?:"+D+"(?="+p+"))?"),_e||(F+="(?="+D+"|"+p+")")}return new RegExp(F,o(r))}function M(e,t,r){return e instanceof RegExp?u(e,t):Array.isArray(e)?c(e,t,r):s(e,t,r)}function m(e,t){return t>>>e|t<<32-e}function B(e,t,r){return e&t^~e&r}function z(e,t,r){return e&t^e&r^t&r}function P(e){return m(2,e)^m(13,e)^m(22,e)}function v(e){return m(6,e)^m(11,e)^m(25,e)}function _(e){return m(7,e)^m(18,e)^e>>>3}function b(e){return m(17,e)^m(19,e)^e>>>10}function O(e,t){return e[t&15]+=b(e[t+14&15])+e[t+9&15]+_(e[t+1&15])}var W=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],w,K,N,ne="0123456789abcdef";function q(e,t){var r=(e&65535)+(t&65535),n=(e>>16)+(t>>16)+(r>>16);return n<<16|r&65535}function ae(){w=new Array(8),K=new Array(2),N=new Array(64),K[0]=K[1]=0,w[0]=1779033703,w[1]=3144134277,w[2]=1013904242,w[3]=2773480762,w[4]=1359893119,w[5]=2600822924,w[6]=528734635,w[7]=1541459225}function ie(){var e,t,r,n,i,f,a,d,l,h,A=new Array(16);e=w[0],t=w[1],r=w[2],n=w[3],i=w[4],f=w[5],a=w[6],d=w[7];for(var p=0;p<16;p++)A[p]=N[(p<<2)+3]|N[(p<<2)+2]<<8|N[(p<<2)+1]<<16|N[p<<2]<<24;for(var D=0;D<64;D++)l=d+v(i)+B(i,f,a)+W[D],D<16?l+=A[D]:l+=O(A,D),h=P(e)+z(e,t,r),d=a,a=f,f=i,i=q(n,l),n=r,r=t,t=e,e=q(l,h);w[0]+=e,w[1]+=t,w[2]+=r,w[3]+=n,w[4]+=i,w[5]+=f,w[6]+=a,w[7]+=d}function ye(e,t){var r,n,i=0;n=K[0]>>3&63;var f=t&63;for((K[0]+=t<<3)<t<<3&&K[1]++,K[1]+=t>>29,r=0;r+63<t;r+=64){for(var a=n;a<64;a++)N[a]=e.charCodeAt(i++);ie(),n=0}for(var a=0;a<f;a++)N[a]=e.charCodeAt(i++)}function he(){var e=K[0]>>3&63;if(N[e++]=128,e<=56)for(var t=e;t<56;t++)N[t]=0;else{for(var t=e;t<64;t++)N[t]=0;ie();for(var t=0;t<56;t++)N[t]=0}N[56]=K[1]>>>24&255,N[57]=K[1]>>>16&255,N[58]=K[1]>>>8&255,N[59]=K[1]&255,N[60]=K[0]>>>24&255,N[61]=K[0]>>>16&255,N[62]=K[0]>>>8&255,N[63]=K[0]&255,ie()}function ge(){for(var e=0,t=new Array(32),r=0;r<8;r++)t[e++]=w[r]>>>24&255,t[e++]=w[r]>>>16&255,t[e++]=w[r]>>>8&255,t[e++]=w[r]&255;return t}function le(){for(var e=new String,t=0;t<8;t++)for(var r=28;r>=0;r-=4)e+=ne.charAt(w[t]>>>r&15);return e}function Ce(e){return ae(),ye(e,e.length),he(),le()}var je=Ce;function se(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?se=function(r){return typeof r}:se=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},se(e)}function Ie(e,t){return $e(e)||Fe(e,t)||be(e,t)||Ne()}function Ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fe(e,t){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,i=!1,f=void 0;try{for(var a=e[Symbol.iterator](),d;!(n=(d=a.next()).done)&&(r.push(d.value),!(t&&r.length===t));n=!0);}catch(l){i=!0,f=l}finally{try{!n&&a.return!=null&&a.return()}finally{if(i)throw f}}return r}}function $e(e){if(Array.isArray(e))return e}function Be(e,t){var r;if(typeof Symbol=="undefined"||e[Symbol.iterator]==null){if(Array.isArray(e)||(r=be(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(h){throw h},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var f=!0,a=!1,d;return{s:function(){r=e[Symbol.iterator]()},n:function(){var h=r.next();return f=h.done,h},e:function(h){a=!0,d=h},f:function(){try{!f&&r.return!=null&&r.return()}finally{if(a)throw d}}}}function We(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function we(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ke(e,t,r){return t&&we(e.prototype,t),r&&we(e,r),e}function Le(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t)}function Ue(e){var t=Ae();return function(){var n=fe(e),i;if(t){var f=fe(this).constructor;i=Reflect.construct(n,arguments,f)}else i=n.apply(this,arguments);return Ge(this,i)}}function Ge(e,t){return t&&(se(t)==="object"||typeof t=="function")?t:He(e)}function He(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function me(e){var t=typeof Map=="function"?new Map:void 0;return me=function(n){if(n===null||!ze(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t!="undefined"){if(t.has(n))return t.get(n);t.set(n,i)}function i(){return de(n,arguments,fe(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),ue(i,n)},me(e)}function de(e,t,r){return Ae()?de=Reflect.construct:de=function(i,f,a){var d=[null];d.push.apply(d,f);var l=Function.bind.apply(i,d),h=new l;return a&&ue(h,a.prototype),h},de.apply(null,arguments)}function Ae(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function ze(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function ue(e,t){return ue=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},ue(e,t)}function fe(e){return fe=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},fe(e)}function Me(e){return Xe(e)||Je(e)||be(e)||Ve()}function Ve(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function be(e,t){if(!!e){if(typeof e=="string")return xe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return xe(e,t)}}function Je(e){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(e))return Array.from(e)}function Xe(e){if(Array.isArray(e))return xe(e)}function xe(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Qe(e,t){if(e==null)return{};var r=Ye(e,t),n,i;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(e);for(i=0;i<f.length;i++)n=f[i],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function Ye(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,f;for(f=0;f<n.length;f++)i=n[f],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Pe(Object(r),!0).forEach(function(n){Ze(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ze(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function oe(e){return e.split("?")[0].split("#")[0]}var Oe=function(t){if(!t.startsWith("http"))return!1;try{var r=new URL(t);return!!r}catch(n){return!1}},qe=function(t){var r=t.path;if(!r||r==="/")try{return"/".concat(je(JSON.stringify(t)))}catch(n){}return r&&oe(r)},ke=function(t,r){var n=t.name,i=t.locale;return"locale"in t&&i===!1||!n?!1:t.locale||"".concat(r,".").concat(n)},Te=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"/";return(t||r).startsWith("/")||Oe(t)?t:"/".concat(r,"/").concat(t).replace(/\/\//g,"/").replace(/\/\//g,"/")},er=function(t,r){var n=t.menu,i=n===void 0?{}:n,f=t.indexRoute,a=t.path,d=a===void 0?"":a,l=t.children,h=i.name,A=h===void 0?t.name:h,p=i.icon,D=p===void 0?t.icon:p,F=i.hideChildren,U=F===void 0?t.hideChildren:F,Z=i.flatMenu,T=Z===void 0?t.flatMenu:Z,Q=f&&Object.keys(f).join(",")!=="redirect"?[V({path:d,menu:i},f)].concat(l||[]):l,$=V({},t);if(A&&($.name=A),D&&($.icon=D),Q&&Q.length){if(U)return delete $.children,$;var ee=Ee(V(V({},r),{},{data:Q}),t);if(T)return ee;$.children=ee}return $};function Ee(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{path:"/"},r=e.data,n=e.formatMessage,i=e.parentName,f=e.locale;return!r||!Array.isArray(r)?[]:r.filter(function(a){return a?a.routes||a.children||a.path||a.layout?!0:(a.redirect,!1):!1}).filter(function(a){var d,l;return a.unaccessible&&delete a.name,(a==null||(d=a.menu)===null||d===void 0?void 0:d.name)||(a==null?void 0:a.flatMenu)||(a==null||(l=a.menu)===null||l===void 0?void 0:l.flatMenu)?!0:a.menu!==!1}).map(function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{path:"/"},d=Te(a.path,t?t.path:"/"),l=a.name,h=ke(a,i||"menu"),A=h!==!1&&f!==!1&&n&&h?n({id:h,defaultMessage:l}):l,p=t.pro_layout_parentKeys,D=p===void 0?[]:p,F=t.children,U=t.icon,Z=t.flatMenu,T=t.indexRoute,Q=Qe(t,["pro_layout_parentKeys","children","icon","flatMenu","indexRoute"]),$=V(V(V({},Q),{},{menu:void 0},a),{},{path:d,locale:h,key:a.key||qe(V(V({},a),{},{path:d})),routes:null,pro_layout_parentKeys:Array.from(new Set([].concat(Me(a.parentKeys||[]),Me(D),["/".concat(t.key||"").replace(/\/\//g,"/").replace(/\/\//g,"/")]))).filter(function(re){return re&&re!=="/"})});if(A?$.name=A:delete $.name,$.menu===void 0&&delete $.menu,a.routes||a.children){var ee=Ee(V(V({},e),{},{data:a.routes||a.children,parentName:h||""}),$);$.children=ee&&ee.length>0?ee:void 0,$.children||delete $.children}return er($,e)}).flat(1)}var rr=y(Ee,G.a),tr=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t.filter(function(r){return r&&(r.name||r.children)&&!r.hideInMenu&&!r.redirect}).map(function(r){if(r.children&&Array.isArray(r.children)&&!r.hideChildrenInMenu&&r.children.some(function(i){return i&&!!i.name})){var n=e(r.children);if(n.length)return V(V({},r),{},{children:n})}return V(V({},r),{},{children:void 0})}).filter(function(r){return r})},nr=function(e){Le(r,e);var t=Ue(r);function r(){return We(this,r),t.apply(this,arguments)}return Ke(r,[{key:"get",value:function(i){var f;try{var a=Be(this.entries()),d;try{for(a.s();!(d=a.n()).done;){var l=Ie(d.value,2),h=l[0],A=l[1],p=oe(h);if(!Oe(h)&&M(p,[]).test(i)){f=A;break}}}catch(D){a.e(D)}finally{a.f()}}catch(D){f=void 0}return f}}]),r}(me(Map)),ar=function(t){var r=new nr,n=function i(f,a){f.forEach(function(d){d&&d.children&&i(d.children,d);var l=Te(d.path,a?a.path:"/");r.set(oe(l),d)})};return n(t),r},ir=y(ar,G.a),ur=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t.map(function(r){if(r.children&&Array.isArray(r.children)&&r.children.length>0){var n=e(r.children);if(n.length)return V(V({},r),{},{children:n})}var i=V({},r);return delete i.children,i}).filter(function(r){return r})},fr=function(t,r,n,i){var f=rr({data:t,formatMessage:n,locale:r}),a=i?ur(f):tr(f),d=ir(f);return{breadcrumb:d,menuData:a}},or=fr;function Se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function ve(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Se(Object(r),!0).forEach(function(n){cr(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Se(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function cr(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var lr=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r={};return t.forEach(function(n){!n||!n.key||(r[oe(n.path||n.key||"/")]=ve({},n),r[n.key||n.path||"/"]=ve({},n),n.children&&(r=ve(ve({},r),e(n.children))))}),r},Re=lr,sr=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;return t.filter(function(n){if(n==="/"&&r==="/")return!0;if(n!=="/"&&n!=="/*"&&n&&!Oe(n)){var i=oe(n);try{if(M("".concat(i),[]).test(r)||M("".concat(i,"/(.*)")).test(r))return!0}catch(f){}}return!1}).sort(function(n,i){return n===r?10:i===r?-10:n.substr(1).split("/").length-i.substr(1).split("/").length})},dr=function(t,r,n){var i=Re(r),f=Object.keys(i),a=sr(f,t||"/");return!a||a.length<1?[]:(n||(a=[a[a.length-1]]),a.map(function(d){var l=i[d]||{pro_layout_parentKeys:"",key:""},h=new Map,A=(l.pro_layout_parentKeys||[]).map(function(p){return h.has(p)?null:(h.set(p,!0),i[p])}).filter(function(p){return p});return l.key&&A.push(l),A}).flat(1))},vr=dr},Ol7k:function(J,L,E){"use strict";var j=E("PKem"),G=E("ZX9x"),I=j.e;I.Header=j.c,I.Footer=j.b,I.Content=j.a,I.Sider=G.b,L.a=I},Qv07:function(J,L,E){"use strict";var j=E("GOef");function G(o,u){return y(o)||g(o,u)||H(o,u)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(o,u){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(o)))){var c=[],s=!0,R=!1,M=void 0;try{for(var m=o[Symbol.iterator](),B;!(s=(B=m.next()).done)&&(c.push(B.value),!(u&&c.length===u));s=!0);}catch(z){R=!0,M=z}finally{try{!s&&m.return!=null&&m.return()}finally{if(R)throw M}}return c}}function y(o){if(Array.isArray(o))return o}function C(o){return k(o)||X(o)||H(o)||S()}function S(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(o,u){if(!!o){if(typeof o=="string")return Y(o,u);var c=Object.prototype.toString.call(o).slice(8,-1);if(c==="Object"&&o.constructor&&(c=o.constructor.name),c==="Map"||c==="Set")return Array.from(o);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return Y(o,u)}}function X(o){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(o))return Array.from(o)}function k(o){if(Array.isArray(o))return Y(o)}function Y(o,u){(u==null||u>o.length)&&(u=o.length);for(var c=0,s=new Array(u);c<u;c++)s[c]=o[c];return s}function x(o){return C(o).reduce(function(u,c){var s=G(c,2),R=s[0],M=s[1];return u[R]=M,u},{})}L.a=function(o,u,c,s){var R=Object(j.c)(o,(u==null?void 0:u.locale)||!1,c,!0),M=R.menuData,m=R.breadcrumb;if(!s)return{breadcrumb:x(m),breadcrumbMap:m,menuData:M};var B=Object(j.c)(s(M),(u==null?void 0:u.locale)||!1,c,!0);return{breadcrumb:x(B.breadcrumb),breadcrumbMap:B.breadcrumb,menuData:B.menuData}}},n2rz:function(J,L,E){"use strict";var j=E("bfL6"),G=typeof BigInt64Array!="undefined";J.exports=function I(g,y){if(g===y)return!0;if(g&&y&&typeof g=="object"&&typeof y=="object"){if(g.constructor!==y.constructor)return!1;var C,S,H;if(Array.isArray(g)){if(C=g.length,C!=y.length)return!1;for(S=C;S--!=0;)if(!I(g[S],y[S]))return!1;return!0}if(g instanceof Map&&y instanceof Map){if(g.size!==y.size)return!1;var X=j(g.entries()),k;try{for(X.s();!(k=X.n()).done;)if(S=k.value,!y.has(S[0]))return!1}catch(s){X.e(s)}finally{X.f()}var Y=j(g.entries()),x;try{for(Y.s();!(x=Y.n()).done;)if(S=x.value,!I(S[1],y.get(S[0])))return!1}catch(s){Y.e(s)}finally{Y.f()}return!0}if(g instanceof Set&&y instanceof Set){if(g.size!==y.size)return!1;var o=j(g.entries()),u;try{for(o.s();!(u=o.n()).done;)if(S=u.value,!y.has(S[0]))return!1}catch(s){o.e(s)}finally{o.f()}return!0}if(ArrayBuffer.isView(g)&&ArrayBuffer.isView(y)){if(C=g.length,C!=y.length)return!1;for(S=C;S--!=0;)if(g[S]!==y[S])return!1;return!0}if(g.constructor===RegExp)return g.source===y.source&&g.flags===y.flags;if(g.valueOf!==Object.prototype.valueOf)return g.valueOf()===y.valueOf();if(g.toString!==Object.prototype.toString)return g.toString()===y.toString();if(H=Object.keys(g),C=H.length,C!==Object.keys(y).length)return!1;for(S=C;S--!=0;)if(!Object.prototype.hasOwnProperty.call(y,H[S]))return!1;for(S=C;S--!=0;){var c=H[S];if(!I(g[c],y[c]))return!1}return!0}return g!==g&&y!==y}},oN5p:function(J,L,E){"use strict";var j=E("q1tI"),G={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"},I=G,g=E("6VBw"),y=function(H,X){return j.createElement(g.a,Object.assign({},H,{ref:X,icon:I}))};y.displayName="GithubOutlined";var C=L.a=j.forwardRef(y)},su3W:function(J,L,E){"use strict";E.d(L,"b",function(){return k});var j=E("vRGJ"),G=E.n(j);function I(x){return S(x)||C(x)||y(x)||g()}function g(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(x,o){if(!!x){if(typeof x=="string")return H(x,o);var u=Object.prototype.toString.call(x).slice(8,-1);if(u==="Object"&&x.constructor&&(u=x.constructor.name),u==="Map"||u==="Set")return Array.from(x);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return H(x,o)}}function C(x){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(x))return Array.from(x)}function S(x){if(Array.isArray(x))return H(x)}function H(x,o){(o==null||o>x.length)&&(o=x.length);for(var u=0,c=new Array(o);u<o;u++)c[u]=x[u];return c}var X=function(o,u,c){if(c){var s=I(c.keys()).find(function(M){return G()(M).test(o)});if(s)return c.get(s)}if(u){var R=Object.keys(u).find(function(M){return G()(M).test(o)});if(R)return u[R]}return{path:""}},k=function(o,u){var c=o.pathname,s=c===void 0?"/":c,R=o.breadcrumb,M=o.breadcrumbMap,m=o.formatMessage,B=o.title,z=B===void 0?"Ant Design Pro":B,P=o.menu,v=P===void 0?{locale:!1}:P,_=u?"":z||"",b=X(s,R,M);if(!b)return{title:_,id:"",pageName:_};var O=b.name;return v.locale!==!1&&b.locale&&m&&(O=m({id:b.locale||"",defaultMessage:b.name})),O?u||!z?{title:O,id:b.locale||"",pageName:O}:{title:"".concat(O," - ").concat(z),id:b.locale||"",pageName:O}:{title:_,id:b.locale||"",pageName:_}},Y=function(o,u){return k(o,u).title};L.a=Y},vRGJ:function(J,L){J.exports=o,J.exports.parse=I,J.exports.compile=g,J.exports.tokensToFunction=y,J.exports.tokensToRegExp=x;var E="/",j="./",G=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function I(u,c){for(var s=[],R=0,M=0,m="",B=c&&c.delimiter||E,z=c&&c.delimiters||j,P=!1,v;(v=G.exec(u))!==null;){var _=v[0],b=v[1],O=v.index;if(m+=u.slice(M,O),M=O+_.length,b){m+=b[1],P=!0;continue}var W="",w=u[M],K=v[2],N=v[3],ne=v[4],q=v[5];if(!P&&m.length){var ae=m.length-1;z.indexOf(m[ae])>-1&&(W=m[ae],m=m.slice(0,ae))}m&&(s.push(m),m="",P=!1);var ie=W!==""&&w!==void 0&&w!==W,ye=q==="+"||q==="*",he=q==="?"||q==="*",ge=W||B,le=N||ne;s.push({name:K||R++,prefix:W,delimiter:ge,optional:he,repeat:ye,partial:ie,pattern:le?S(le):"[^"+C(ge)+"]+?"})}return(m||M<u.length)&&s.push(m+u.substr(M)),s}function g(u,c){return y(I(u,c))}function y(u){for(var c=new Array(u.length),s=0;s<u.length;s++)typeof u[s]=="object"&&(c[s]=new RegExp("^(?:"+u[s].pattern+")$"));return function(R,M){for(var m="",B=M&&M.encode||encodeURIComponent,z=0;z<u.length;z++){var P=u[z];if(typeof P=="string"){m+=P;continue}var v=R?R[P.name]:void 0,_;if(Array.isArray(v)){if(!P.repeat)throw new TypeError('Expected "'+P.name+'" to not repeat, but got array');if(v.length===0){if(P.optional)continue;throw new TypeError('Expected "'+P.name+'" to not be empty')}for(var b=0;b<v.length;b++){if(_=B(v[b],P),!c[z].test(_))throw new TypeError('Expected all "'+P.name+'" to match "'+P.pattern+'"');m+=(b===0?P.prefix:P.delimiter)+_}continue}if(typeof v=="string"||typeof v=="number"||typeof v=="boolean"){if(_=B(String(v),P),!c[z].test(_))throw new TypeError('Expected "'+P.name+'" to match "'+P.pattern+'", but got "'+_+'"');m+=P.prefix+_;continue}if(P.optional){P.partial&&(m+=P.prefix);continue}throw new TypeError('Expected "'+P.name+'" to be '+(P.repeat?"an array":"a string"))}return m}}function C(u){return u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function S(u){return u.replace(/([=!:$/()])/g,"\\$1")}function H(u){return u&&u.sensitive?"":"i"}function X(u,c){if(!c)return u;var s=u.source.match(/\((?!\?)/g);if(s)for(var R=0;R<s.length;R++)c.push({name:R,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return u}function k(u,c,s){for(var R=[],M=0;M<u.length;M++)R.push(o(u[M],c,s).source);return new RegExp("(?:"+R.join("|")+")",H(s))}function Y(u,c,s){return x(I(u,s),c,s)}function x(u,c,s){s=s||{};for(var R=s.strict,M=s.start!==!1,m=s.end!==!1,B=C(s.delimiter||E),z=s.delimiters||j,P=[].concat(s.endsWith||[]).map(C).concat("$").join("|"),v=M?"^":"",_=u.length===0,b=0;b<u.length;b++){var O=u[b];if(typeof O=="string")v+=C(O),_=b===u.length-1&&z.indexOf(O[O.length-1])>-1;else{var W=O.repeat?"(?:"+O.pattern+")(?:"+C(O.delimiter)+"(?:"+O.pattern+"))*":O.pattern;c&&c.push(O),O.optional?O.partial?v+=C(O.prefix)+"("+W+")?":v+="(?:"+C(O.prefix)+"("+W+"))?":v+=C(O.prefix)+"("+W+")"}}return m?(R||(v+="(?:"+B+")?"),v+=P==="$"?"$":"(?="+P+")"):(R||(v+="(?:"+B+"(?="+P+"))?"),_||(v+="(?="+B+"|"+P+")")),new RegExp(v,H(s))}function o(u,c,s){return u instanceof RegExp?X(u,c):Array.isArray(u)?k(u,c,s):Y(u,c,s)}}}]);
