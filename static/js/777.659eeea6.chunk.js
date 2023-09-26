/*! For license information please see 777.659eeea6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[777],{777:function(t,e,n){n.r(e),n.d(e,{default:function(){return B}});var r,o,i,a,c,s,u,l,f,h,p,d,v,g=n(861),y=n(439),x=n(689),m=n(791),w=n(168),j=n(867),b=n(853),L=n(87),Z=(0,j.ZP)(b.Ao2)(r||(r=(0,w.Z)(["\n  font-size: 1rem;\n  margin-right: 2px;\n"]))),E=(0,j.ZP)(L.rU)(o||(o=(0,w.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background: inherit;\n  border: none;\n  width: 100px;\n  padding-left: 2px;\n  height: 20px;\n  font-size: 6px;\n  color: #000000;\n"]))),k=n(184),_=function(t){var e=t.backLinkHref;return(0,k.jsxs)(E,{to:e,children:[(0,k.jsx)(Z,{size:"7px"}),(0,k.jsx)("span",{children:"Go back"})]})},P=n(873),O=j.ZP.div(i||(i=(0,w.Z)(["\n  display: flex;\n  gap: ",";\n  /* border-bottom: 1px solid #000; */\n  margin-bottom: 10px;\n"])),(function(t){return t.theme.spacing(6)})),S=j.ZP.div(a||(a=(0,w.Z)(["\n  min-width: 120px;\n"]))),G=j.ZP.ul(c||(c=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: ",";\n"])),(function(t){return t.theme.spacing(3)})),z=j.ZP.li(s||(s=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: ",";\n"])),(function(t){return t.theme.spacing(1)})),N=j.ZP.h2(u||(u=(0,w.Z)(["\n  font-size: 20px;\n  display: flex;\n"]))),C=j.ZP.h2(l||(l=(0,w.Z)(["\n  font-size: 16px;\n"]))),A=j.ZP.p(f||(f=(0,w.Z)(["\n  font-size: 10px;\n"]))),F=function(t){var e=t.dates,n=e.original_title,r=e.vote_average,o=e.overview,i=e.genres,a=t.image,c=i.reduce((function(t,e){return""===t?e.name:"".concat(t,", ").concat(e.name)}),""),s=r.toString().slice(0,-2);return(0,k.jsxs)(O,{children:[(0,k.jsx)(S,{children:(0,k.jsx)("img",{src:a?"https:/image.tmdb.org/t/p/original".concat(a):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:n,width:150})}),(0,k.jsxs)(G,{children:[(0,k.jsxs)(z,{children:[(0,k.jsx)(N,{children:n}),(0,k.jsxs)(A,{children:["User score: ",s,"%"]})]}),(0,k.jsxs)(z,{children:[(0,k.jsx)(C,{children:"Overview:"}),(0,k.jsx)(A,{children:o})]}),(0,k.jsxs)(z,{children:[(0,k.jsx)(C,{children:"Genres:"}),(0,k.jsx)(A,{children:c})]})]})]})},T=j.ZP.h3(h||(h=(0,w.Z)(["\n  font-size: 16px;\n"]))),U=j.ZP.button(p||(p=(0,w.Z)(["\n  font-size: 10px;\n"]))),R=j.ZP.div(d||(d=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: ",";\n"])),(function(t){return t.theme.spacing(1)})),H=j.ZP.span(v||(v=(0,w.Z)(["\n  font-size: 14px;\n"]))),I=function(){var t=(0,x.s0)();return(0,k.jsxs)(R,{children:[(0,k.jsx)(T,{children:" Additional information"}),(0,k.jsx)(U,{type:"button",onClick:function(){t("cast")},children:(0,k.jsx)(H,{children:"Cast"})}),(0,k.jsx)(U,{type:"button",onClick:function(){t("reviews")},children:(0,k.jsx)(H,{children:"Reviews"})}),(0,k.jsx)(x.j3,{})]})},Y=n(226),q=n(471),D=n(14);function W(){W=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new O(r||[]);return o(a,"_invoke",{value:E(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="executing",d="completed",v={};function g(){}function y(){}function x(){}var m={};u(m,a,(function(){return this}));var w=Object.getPrototypeOf,j=w&&w(w(S([])));j&&j!==n&&r.call(j,a)&&(m=j);var b=x.prototype=g.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function Z(t,e){function n(o,i,a,c){var s=f(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function E(e,n,r){var o=h;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=k(c,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var u=f(e,n,r);if("normal"===u.type){if(o=r.done?d:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=d,r.method="throw",r.arg=u.arg)}}}function k(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=f(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return y.prototype=x,o(b,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:y,configurable:!0}),y.displayName=u(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,u(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},L(Z.prototype),u(Z.prototype,c,(function(){return this})),e.AsyncIterator=Z,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new Z(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(b),u(b,s,"Generator"),u(b,a,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:S(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}function B(){var t,e,n=(0,x.TH)(),r=(0,m.useRef)(null!==(t=null===(e=n.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/"),o=(0,x.UO)().id,i=(0,m.useState)(null),a=(0,y.Z)(i,2),c=a[0],s=a[1],u=(0,m.useState)(!1),l=(0,y.Z)(u,2),f=l[0],h=l[1],p=(0,m.useState)(!1),d=(0,y.Z)(p,2),v=d[0],w=d[1];return(0,m.useEffect)((function(){var t;if(o){var e=new AbortController;return function(){(t=t||(0,g.Z)(W().mark((function t(){var n;return W().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(!0),h(!1),t.next=5,(0,P.i)("movie/".concat(o,"?language=en-US"),e);case 5:n=t.sent,s(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),"ERR_CANCELED"!==t.t0.code&&h(!0);case 12:return t.prev=12,w(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}(),function(){e.abort()}}}),[o]),(0,k.jsxs)(k.Fragment,{children:[c&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(_,{backLinkHref:r.current}),(0,k.jsx)(F,{dates:c,image:c.poster_path}),(0,k.jsx)(I,{}),v&&(0,k.jsx)(Y.a,{})]}),f&&(0,k.jsx)(q.j,{message:"What went wrong, try again."}),(0,k.jsx)(D.x7,{position:"top-right",reverseOrder:!1})]})}}}]);
//# sourceMappingURL=777.659eeea6.chunk.js.map