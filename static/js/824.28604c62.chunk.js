/*! For license information please see 824.28604c62.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[824],{618:function(t,e,r){r.d(e,{O:function(){return h}});var n,o=r(689),i=r(168),a=r(867),c=r(87),u=(0,a.ZP)(c.OL)(n||(n=(0,i.Z)(["\n  &::before {\n    content: '\ud83c\udfac';\n    margin-right: 10px;\n    color: #ff6600;\n    font-size: 14px;\n  }\n"]))),s=r(184),l=function(t){var e=t.title,r=t.id,n=(0,o.TH)();return(0,s.jsx)("li",{children:(0,s.jsx)(u,{to:"/movies/".concat(r),state:{from:n},children:e})})},f=r(692),h=function(t){var e=t.movies;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(f.E,{children:e.map((function(t){var e=t.id,r=t.title,n=t.name;return(0,s.jsx)(l,{title:r&&r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()||n&&n.charAt(0).toUpperCase()+n.slice(1).toLowerCase(),id:e},e)}))})})}},692:function(t,e,r){r.d(e,{E:function(){return u},p:function(){return c}});var n,o,i=r(168),a=r(867),c=a.ZP.h1(n||(n=(0,i.Z)(["\n  font-size: 18px;\n  margin-left: 20px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),u=a.ZP.ul(o||(o=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  margin-left: 50px;\n"])),(function(t){return t.theme.spacing(1)}))},824:function(t,e,r){r.r(e),r.d(e,{default:function(){return P}});var n=r(439),o=r(433),i=r(861),a=r(2),c=r(471),u=r(226),s=r(618),l=r(791),f=r(14),h=r(87),p=r(184);function d(){d=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="executing",g="completed",v={};function y(){}function x(){}function m(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(N([])));j&&j!==r&&n.call(j,a)&&(w=j);var L=m.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function Z(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=h;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?g:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return x.prototype=m,o(L,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:x,configurable:!0}),x.displayName=s(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},E(Z.prototype),s(Z.prototype,c,(function(){return this})),e.AsyncIterator=Z,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new Z(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),s(L,u,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}var g,v,y,x,m=function(){var t,e=(0,h.lr)(),r=null!==(t=(0,n.Z)(e,1)[0].get("query"))&&void 0!==t?t:"",g=(0,l.useState)([]),v=(0,n.Z)(g,2),y=v[0],x=v[1],m="https://api.themoviedb.org/3/search/movie?query=".concat(r),w=(0,l.useState)(!1),b=(0,n.Z)(w,2),j=b[0],L=b[1],E=(0,l.useState)(!1),Z=(0,n.Z)(E,2),k=Z[0],_=Z[1];return(0,l.useEffect)((function(){var t;if(r){var e=new AbortController;return function(){(t=t||(0,i.Z)(d().mark((function t(){var r,n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,_(!0),L(!1),t.next=5,(0,a.i)(m,e);case 5:r=t.sent,0!==(n=r.results).length?x((0,o.Z)(n)):f.ZP.error("Nothing found for this query."),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),"ERR_CANCELED"!==t.t0.code&&L(!0);case 13:return t.prev=13,_(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))).apply(this,arguments)}(),function(){e.abort()}}}),[r,m]),(0,p.jsxs)(p.Fragment,{children:[y.length>0&&(0,p.jsxs)(p.Fragment,{children:[k&&(0,p.jsx)(u.a,{}),j&&(0,p.jsx)(c.j,{message:"What went wrong, try again."}),(0,p.jsx)(s.O,{movies:y})]}),(0,p.jsx)(f.x7,{position:"top-right",reverseOrder:!1})]})},w=r(705),b=r(129),j=r(168),L=r(867),E=L.ZP.div(g||(g=(0,j.Z)(["\n  /* top: 0;\n  left: 0; */\n  position: relative;\n  z-index: 1100;\n  /* display: flex; */\n  /* justify-content: center; */\n  /* align-items: center; */\n  /* min-height: 48px; */\n  /* padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 10px; */\n  /* padding-bottom: 10px; */\n  color: #fff;\n  /* background-color: #3f51b5; */\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),Z=(0,L.ZP)(w.l0)(v||(v=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  max-width: 400px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  width: 100%;\n"]))),k=(0,L.ZP)(w.gN)(y||(y=(0,j.Z)(["\n  width: 100%;\n  /* width: 600px; */\n  height: 32px;\n  font: inherit;\n  font-size: 20px;\n  padding-left: 45px;\n  border: none;\n  outline: none;\n  background: #f9f0da;\n  color: #9e9c9c;\n\n  &::-webkit-input-placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),_=L.ZP.button(x||(x=(0,j.Z)(["\n  background-color: #cbcbcb;\n  width: 42px;\n  height: 32px;\n  padding: 0;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),O=function(t){var e=t.onSubmit;return(0,p.jsx)(E,{children:(0,p.jsx)(w.J9,{initialValues:{query:""},onSubmit:function(t){e(t.query.trim())},children:(0,p.jsxs)(Z,{children:[(0,p.jsx)(k,{name:"query",type:"text",placeholder:"Search images and photos"}),(0,p.jsx)(_,{type:"submit",children:(0,p.jsx)(b.CNP,{size:19})})]})})})};function P(){var t=(0,h.lr)(),e=(0,n.Z)(t,2),r=e[0],o=e[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(O,{onSubmit:function(t){r.set("query",t),o(r)}}),(0,p.jsx)(m,{})]})}}}]);
//# sourceMappingURL=824.28604c62.chunk.js.map