function pg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var bi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function hg(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Ld={exports:{}},nl={},jd={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Si=Symbol.for("react.element"),mg=Symbol.for("react.portal"),gg=Symbol.for("react.fragment"),vg=Symbol.for("react.strict_mode"),yg=Symbol.for("react.profiler"),wg=Symbol.for("react.provider"),Sg=Symbol.for("react.context"),xg=Symbol.for("react.forward_ref"),kg=Symbol.for("react.suspense"),Og=Symbol.for("react.memo"),Cg=Symbol.for("react.lazy"),Cc=Symbol.iterator;function Eg(e){return e===null||typeof e!="object"?null:(e=Cc&&e[Cc]||e["@@iterator"],typeof e=="function"?e:null)}var Nd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ad=Object.assign,zd={};function wr(e,t,n){this.props=e,this.context=t,this.refs=zd,this.updater=n||Nd}wr.prototype.isReactComponent={};wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Dd(){}Dd.prototype=wr.prototype;function nu(e,t,n){this.props=e,this.context=t,this.refs=zd,this.updater=n||Nd}var ru=nu.prototype=new Dd;ru.constructor=nu;Ad(ru,wr.prototype);ru.isPureReactComponent=!0;var Ec=Array.isArray,Id=Object.prototype.hasOwnProperty,iu={current:null},$d={key:!0,ref:!0,__self:!0,__source:!0};function Md(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Id.call(t,r)&&!$d.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Si,type:e,key:o,ref:l,props:i,_owner:iu.current}}function _g(e,t){return{$$typeof:Si,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ou(e){return typeof e=="object"&&e!==null&&e.$$typeof===Si}function Rg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _c=/\/+/g;function Wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rg(""+e.key):t.toString(36)}function Xi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Si:case mg:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Wl(l,0):r,Ec(i)?(n="",e!=null&&(n=e.replace(_c,"$&/")+"/"),Xi(i,t,n,"",function(u){return u})):i!=null&&(ou(i)&&(i=_g(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(_c,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Ec(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+Wl(o,s);l+=Xi(o,t,n,a,i)}else if(a=Eg(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+Wl(o,s++),l+=Xi(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Li(e,t,n){if(e==null)return e;var r=[],i=0;return Xi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Pg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},Ji={transition:null},Tg={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Ji,ReactCurrentOwner:iu};Y.Children={map:Li,forEach:function(e,t,n){Li(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Li(e,function(){t++}),t},toArray:function(e){return Li(e,function(t){return t})||[]},only:function(e){if(!ou(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=wr;Y.Fragment=gg;Y.Profiler=yg;Y.PureComponent=nu;Y.StrictMode=vg;Y.Suspense=kg;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tg;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ad({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=iu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Id.call(t,a)&&!$d.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Si,type:e.type,key:i,ref:o,props:r,_owner:l}};Y.createContext=function(e){return e={$$typeof:Sg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wg,_context:e},e.Consumer=e};Y.createElement=Md;Y.createFactory=function(e){var t=Md.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:xg,render:e}};Y.isValidElement=ou;Y.lazy=function(e){return{$$typeof:Cg,_payload:{_status:-1,_result:e},_init:Pg}};Y.memo=function(e,t){return{$$typeof:Og,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Ji.transition;Ji.transition={};try{e()}finally{Ji.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return Ge.current.useCallback(e,t)};Y.useContext=function(e){return Ge.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Ge.current.useEffect(e,t)};Y.useId=function(){return Ge.current.useId()};Y.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Ge.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};Y.useRef=function(e){return Ge.current.useRef(e)};Y.useState=function(e){return Ge.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Ge.current.useTransition()};Y.version="18.2.0";jd.exports=Y;var _=jd.exports;const mn=tu(_),bg=pg({__proto__:null,default:mn},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg=_,jg=Symbol.for("react.element"),Ng=Symbol.for("react.fragment"),Ag=Object.prototype.hasOwnProperty,zg=Lg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dg={key:!0,ref:!0,__self:!0,__source:!0};function Fd(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ag.call(t,r)&&!Dg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:jg,type:e,key:o,ref:l,props:i,_owner:zg.current}}nl.Fragment=Ng;nl.jsx=Fd;nl.jsxs=Fd;Ld.exports=nl;var g=Ld.exports,As={},Hd={exports:{}},st={},Ud={exports:{}},Bd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,B){var U=L.length;L.push(B);e:for(;0<U;){var re=U-1>>>1,N=L[re];if(0<i(N,B))L[re]=B,L[U]=N,U=re;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var B=L[0],U=L.pop();if(U!==B){L[0]=U;e:for(var re=0,N=L.length,I=N>>>1;re<I;){var D=2*(re+1)-1,V=L[D],O=D+1,X=L[O];if(0>i(V,U))O<N&&0>i(X,V)?(L[re]=X,L[O]=U,re=O):(L[re]=V,L[D]=U,re=D);else if(O<N&&0>i(X,U))L[re]=X,L[O]=U,re=O;else break e}}return B}function i(L,B){var U=L.sortIndex-B.sortIndex;return U!==0?U:L.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],c=1,f=null,h=3,w=!1,v=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=L)r(u),B.sortIndex=B.expirationTime,t(a,B);else break;B=n(u)}}function S(L){if(y=!1,m(L),!v)if(n(a)!==null)v=!0,_e(k);else{var B=n(u);B!==null&&ye(S,B.startTime-L)}}function k(L,B){v=!1,y&&(y=!1,p(E),E=-1),w=!0;var U=h;try{for(m(B),f=n(a);f!==null&&(!(f.expirationTime>B)||L&&!H());){var re=f.callback;if(typeof re=="function"){f.callback=null,h=f.priorityLevel;var N=re(f.expirationTime<=B);B=e.unstable_now(),typeof N=="function"?f.callback=N:f===n(a)&&r(a),m(B)}else r(a);f=n(a)}if(f!==null)var I=!0;else{var D=n(u);D!==null&&ye(S,D.startTime-B),I=!1}return I}finally{f=null,h=U,w=!1}}var C=!1,P=null,E=-1,b=5,j=-1;function H(){return!(e.unstable_now()-j<b)}function M(){if(P!==null){var L=e.unstable_now();j=L;var B=!0;try{B=P(!0,L)}finally{B?F():(C=!1,P=null)}}else C=!1}var F;if(typeof d=="function")F=function(){d(M)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,Z=xe.port2;xe.port1.onmessage=M,F=function(){Z.postMessage(null)}}else F=function(){x(M,0)};function _e(L){P=L,C||(C=!0,F())}function ye(L,B){E=x(function(){L(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,_e(k))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var U=h;h=B;try{return L()}finally{h=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,B){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var U=h;h=L;try{return B()}finally{h=U}},e.unstable_scheduleCallback=function(L,B,U){var re=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?re+U:re):U=re,L){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=U+N,L={id:c++,callback:B,priorityLevel:L,startTime:U,expirationTime:N,sortIndex:-1},U>re?(L.sortIndex=U,t(u,L),n(a)===null&&L===n(u)&&(y?(p(E),E=-1):y=!0,ye(S,U-re))):(L.sortIndex=N,t(a,L),v||w||(v=!0,_e(k))),L},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(L){var B=h;return function(){var U=h;h=B;try{return L.apply(this,arguments)}finally{h=U}}}})(Bd);Ud.exports=Bd;var Ig=Ud.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd=_,lt=Ig;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vd=new Set,Xr={};function Dn(e,t){lr(e,t),lr(e+"Capture",t)}function lr(e,t){for(Xr[e]=t,e=0;e<t.length;e++)Vd.add(t[e])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zs=Object.prototype.hasOwnProperty,$g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rc={},Pc={};function Mg(e){return zs.call(Pc,e)?!0:zs.call(Rc,e)?!1:$g.test(e)?Pc[e]=!0:(Rc[e]=!0,!1)}function Fg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hg(e,t,n,r){if(t===null||typeof t>"u"||Fg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Qe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new Qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$e[t]=new Qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new Qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new Qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new Qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new Qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new Qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new Qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new Qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var lu=/[\-:]([a-z])/g;function su(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(lu,su);$e[t]=new Qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(lu,su);$e[t]=new Qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(lu,su);$e[t]=new Qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new Qe(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new Qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new Qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function au(e,t,n,r){var i=$e.hasOwnProperty(t)?$e[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hg(t,n,i,r)&&(n=null),r||i===null?Mg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bt=Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ji=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),uu=Symbol.for("react.strict_mode"),Ds=Symbol.for("react.profiler"),Kd=Symbol.for("react.provider"),Gd=Symbol.for("react.context"),cu=Symbol.for("react.forward_ref"),Is=Symbol.for("react.suspense"),$s=Symbol.for("react.suspense_list"),fu=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),Qd=Symbol.for("react.offscreen"),Tc=Symbol.iterator;function Rr(e){return e===null||typeof e!="object"?null:(e=Tc&&e[Tc]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,Vl;function Dr(e){if(Vl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vl=t&&t[1]||""}return`
`+Vl+e}var Kl=!1;function Gl(e,t){if(!e||Kl)return"";Kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Kl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dr(e):""}function Ug(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=Gl(e.type,!1),e;case 11:return e=Gl(e.type.render,!1),e;case 1:return e=Gl(e.type,!0),e;default:return""}}function Ms(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Fn:return"Portal";case Ds:return"Profiler";case uu:return"StrictMode";case Is:return"Suspense";case $s:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gd:return(e.displayName||"Context")+".Consumer";case Kd:return(e._context.displayName||"Context")+".Provider";case cu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fu:return t=e.displayName||null,t!==null?t:Ms(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return Ms(e(t))}catch{}}return null}function Bg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ms(t);case 8:return t===uu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wg(e){var t=qd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ni(e){e._valueTracker||(e._valueTracker=Wg(e))}function Yd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function mo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fs(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xd(e,t){t=t.checked,t!=null&&au(e,"checked",t,!1)}function Hs(e,t){Xd(e,t);var n=dn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Us(e,t.type,n):t.hasOwnProperty("defaultValue")&&Us(e,t.type,dn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Lc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Us(e,t,n){(t!=="number"||mo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ir=Array.isArray;function Zn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Ir(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dn(n)}}function Jd(e,t){var n=dn(t.value),r=dn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Nc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ws(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ai,ep=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ai=Ai||document.createElement("div"),Ai.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ai.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vg=["Webkit","ms","Moz","O"];Object.keys(Fr).forEach(function(e){Vg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fr[t]=Fr[e]})});function tp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fr.hasOwnProperty(e)&&Fr[e]?(""+t).trim():t+"px"}function np(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Kg=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vs(e,t){if(t){if(Kg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Ks(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gs=null;function du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qs=null,er=null,tr=null;function Ac(e){if(e=Oi(e)){if(typeof Qs!="function")throw Error(T(280));var t=e.stateNode;t&&(t=sl(t),Qs(e.stateNode,e.type,t))}}function rp(e){er?tr?tr.push(e):tr=[e]:er=e}function ip(){if(er){var e=er,t=tr;if(tr=er=null,Ac(e),t)for(e=0;e<t.length;e++)Ac(t[e])}}function op(e,t){return e(t)}function lp(){}var Ql=!1;function sp(e,t,n){if(Ql)return e(t,n);Ql=!0;try{return op(e,t,n)}finally{Ql=!1,(er!==null||tr!==null)&&(lp(),ip())}}function Zr(e,t){var n=e.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var qs=!1;if(Mt)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){qs=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{qs=!1}function Gg(e,t,n,r,i,o,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Hr=!1,go=null,vo=!1,Ys=null,Qg={onError:function(e){Hr=!0,go=e}};function qg(e,t,n,r,i,o,l,s,a){Hr=!1,go=null,Gg.apply(Qg,arguments)}function Yg(e,t,n,r,i,o,l,s,a){if(qg.apply(this,arguments),Hr){if(Hr){var u=go;Hr=!1,go=null}else throw Error(T(198));vo||(vo=!0,Ys=u)}}function In(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ap(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zc(e){if(In(e)!==e)throw Error(T(188))}function Xg(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return zc(i),e;if(o===r)return zc(i),t;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function up(e){return e=Xg(e),e!==null?cp(e):null}function cp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cp(e);if(t!==null)return t;e=e.sibling}return null}var fp=lt.unstable_scheduleCallback,Dc=lt.unstable_cancelCallback,Jg=lt.unstable_shouldYield,Zg=lt.unstable_requestPaint,Oe=lt.unstable_now,ev=lt.unstable_getCurrentPriorityLevel,pu=lt.unstable_ImmediatePriority,dp=lt.unstable_UserBlockingPriority,yo=lt.unstable_NormalPriority,tv=lt.unstable_LowPriority,pp=lt.unstable_IdlePriority,rl=null,bt=null;function nv(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:ov,rv=Math.log,iv=Math.LN2;function ov(e){return e>>>=0,e===0?32:31-(rv(e)/iv|0)|0}var zi=64,Di=4194304;function $r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=$r(s):(o&=l,o!==0&&(r=$r(o)))}else l=n&~i,l!==0?r=$r(l):o!==0&&(r=$r(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function lv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ot(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=lv(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function Xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hp(){var e=zi;return zi<<=1,!(zi&4194240)&&(zi=64),e}function ql(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function av(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function hu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var se=0;function mp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gp,mu,vp,yp,wp,Js=!1,Ii=[],tn=null,nn=null,rn=null,ei=new Map,ti=new Map,Yt=[],uv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ic(e,t){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":nn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ti.delete(t.pointerId)}}function Tr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Oi(t),t!==null&&mu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cv(e,t,n,r,i){switch(t){case"focusin":return tn=Tr(tn,e,t,n,r,i),!0;case"dragenter":return nn=Tr(nn,e,t,n,r,i),!0;case"mouseover":return rn=Tr(rn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ei.set(o,Tr(ei.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ti.set(o,Tr(ti.get(o)||null,e,t,n,r,i)),!0}return!1}function Sp(e){var t=kn(e.target);if(t!==null){var n=In(t);if(n!==null){if(t=n.tag,t===13){if(t=ap(n),t!==null){e.blockedOn=t,wp(e.priority,function(){vp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gs=r,n.target.dispatchEvent(r),Gs=null}else return t=Oi(n),t!==null&&mu(t),e.blockedOn=n,!1;t.shift()}return!0}function $c(e,t,n){Zi(e)&&n.delete(t)}function fv(){Js=!1,tn!==null&&Zi(tn)&&(tn=null),nn!==null&&Zi(nn)&&(nn=null),rn!==null&&Zi(rn)&&(rn=null),ei.forEach($c),ti.forEach($c)}function br(e,t){e.blockedOn===t&&(e.blockedOn=null,Js||(Js=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,fv)))}function ni(e){function t(i){return br(i,e)}if(0<Ii.length){br(Ii[0],e);for(var n=1;n<Ii.length;n++){var r=Ii[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tn!==null&&br(tn,e),nn!==null&&br(nn,e),rn!==null&&br(rn,e),ei.forEach(t),ti.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)Sp(n),n.blockedOn===null&&Yt.shift()}var nr=Bt.ReactCurrentBatchConfig,So=!0;function dv(e,t,n,r){var i=se,o=nr.transition;nr.transition=null;try{se=1,gu(e,t,n,r)}finally{se=i,nr.transition=o}}function pv(e,t,n,r){var i=se,o=nr.transition;nr.transition=null;try{se=4,gu(e,t,n,r)}finally{se=i,nr.transition=o}}function gu(e,t,n,r){if(So){var i=Zs(e,t,n,r);if(i===null)os(e,t,r,xo,n),Ic(e,r);else if(cv(i,e,t,n,r))r.stopPropagation();else if(Ic(e,r),t&4&&-1<uv.indexOf(e)){for(;i!==null;){var o=Oi(i);if(o!==null&&gp(o),o=Zs(e,t,n,r),o===null&&os(e,t,r,xo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else os(e,t,r,null,n)}}var xo=null;function Zs(e,t,n,r){if(xo=null,e=du(r),e=kn(e),e!==null)if(t=In(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ap(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xo=e,null}function xp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ev()){case pu:return 1;case dp:return 4;case yo:case tv:return 16;case pp:return 536870912;default:return 16}default:return 16}}var Jt=null,vu=null,eo=null;function kp(){if(eo)return eo;var e,t=vu,n=t.length,r,i="value"in Jt?Jt.value:Jt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return eo=i.slice(e,1<r?1-r:void 0)}function to(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $i(){return!0}function Mc(){return!1}function at(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?$i:Mc,this.isPropagationStopped=Mc,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$i)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$i)},persist:function(){},isPersistent:$i}),t}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yu=at(Sr),ki=ve({},Sr,{view:0,detail:0}),hv=at(ki),Yl,Xl,Lr,il=ve({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(Yl=e.screenX-Lr.screenX,Xl=e.screenY-Lr.screenY):Xl=Yl=0,Lr=e),Yl)},movementY:function(e){return"movementY"in e?e.movementY:Xl}}),Fc=at(il),mv=ve({},il,{dataTransfer:0}),gv=at(mv),vv=ve({},ki,{relatedTarget:0}),Jl=at(vv),yv=ve({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),wv=at(yv),Sv=ve({},Sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xv=at(Sv),kv=ve({},Sr,{data:0}),Hc=at(kv),Ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _v(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ev[e])?!!t[e]:!1}function wu(){return _v}var Rv=ve({},ki,{key:function(e){if(e.key){var t=Ov[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=to(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(e){return e.type==="keypress"?to(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?to(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pv=at(Rv),Tv=ve({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uc=at(Tv),bv=ve({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),Lv=at(bv),jv=ve({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nv=at(jv),Av=ve({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zv=at(Av),Dv=[9,13,27,32],Su=Mt&&"CompositionEvent"in window,Ur=null;Mt&&"documentMode"in document&&(Ur=document.documentMode);var Iv=Mt&&"TextEvent"in window&&!Ur,Op=Mt&&(!Su||Ur&&8<Ur&&11>=Ur),Bc=String.fromCharCode(32),Wc=!1;function Cp(e,t){switch(e){case"keyup":return Dv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function $v(e,t){switch(e){case"compositionend":return Ep(t);case"keypress":return t.which!==32?null:(Wc=!0,Bc);case"textInput":return e=t.data,e===Bc&&Wc?null:e;default:return null}}function Mv(e,t){if(Un)return e==="compositionend"||!Su&&Cp(e,t)?(e=kp(),eo=vu=Jt=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Op&&t.locale!=="ko"?null:t.data;default:return null}}var Fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fv[e.type]:t==="textarea"}function _p(e,t,n,r){rp(r),t=ko(t,"onChange"),0<t.length&&(n=new yu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Br=null,ri=null;function Hv(e){Ip(e,0)}function ol(e){var t=Vn(e);if(Yd(t))return e}function Uv(e,t){if(e==="change")return t}var Rp=!1;if(Mt){var Zl;if(Mt){var es="oninput"in document;if(!es){var Kc=document.createElement("div");Kc.setAttribute("oninput","return;"),es=typeof Kc.oninput=="function"}Zl=es}else Zl=!1;Rp=Zl&&(!document.documentMode||9<document.documentMode)}function Gc(){Br&&(Br.detachEvent("onpropertychange",Pp),ri=Br=null)}function Pp(e){if(e.propertyName==="value"&&ol(ri)){var t=[];_p(t,ri,e,du(e)),sp(Hv,t)}}function Bv(e,t,n){e==="focusin"?(Gc(),Br=t,ri=n,Br.attachEvent("onpropertychange",Pp)):e==="focusout"&&Gc()}function Wv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(ri)}function Vv(e,t){if(e==="click")return ol(t)}function Kv(e,t){if(e==="input"||e==="change")return ol(t)}function Gv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:Gv;function ii(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zs.call(t,i)||!Et(e[i],t[i]))return!1}return!0}function Qc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qc(e,t){var n=Qc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qc(n)}}function Tp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bp(){for(var e=window,t=mo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=mo(e.document)}return t}function xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qv(e){var t=bp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tp(n.ownerDocument.documentElement,n)){if(r!==null&&xu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=qc(n,o);var l=qc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qv=Mt&&"documentMode"in document&&11>=document.documentMode,Bn=null,ea=null,Wr=null,ta=!1;function Yc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ta||Bn==null||Bn!==mo(r)||(r=Bn,"selectionStart"in r&&xu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&ii(Wr,r)||(Wr=r,r=ko(ea,"onSelect"),0<r.length&&(t=new yu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bn)))}function Mi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wn={animationend:Mi("Animation","AnimationEnd"),animationiteration:Mi("Animation","AnimationIteration"),animationstart:Mi("Animation","AnimationStart"),transitionend:Mi("Transition","TransitionEnd")},ts={},Lp={};Mt&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function ll(e){if(ts[e])return ts[e];if(!Wn[e])return e;var t=Wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lp)return ts[e]=t[n];return e}var jp=ll("animationend"),Np=ll("animationiteration"),Ap=ll("animationstart"),zp=ll("transitionend"),Dp=new Map,Xc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,t){Dp.set(e,t),Dn(t,[e])}for(var ns=0;ns<Xc.length;ns++){var rs=Xc[ns],Yv=rs.toLowerCase(),Xv=rs[0].toUpperCase()+rs.slice(1);gn(Yv,"on"+Xv)}gn(jp,"onAnimationEnd");gn(Np,"onAnimationIteration");gn(Ap,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(zp,"onTransitionEnd");lr("onMouseEnter",["mouseout","mouseover"]);lr("onMouseLeave",["mouseout","mouseover"]);lr("onPointerEnter",["pointerout","pointerover"]);lr("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function Jc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yg(r,t,void 0,e),e.currentTarget=null}function Ip(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;Jc(i,s,u),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;Jc(i,s,u),o=a}}}if(vo)throw e=Ys,vo=!1,Ys=null,e}function ce(e,t){var n=t[la];n===void 0&&(n=t[la]=new Set);var r=e+"__bubble";n.has(r)||($p(t,e,2,!1),n.add(r))}function is(e,t,n){var r=0;t&&(r|=4),$p(n,e,r,t)}var Fi="_reactListening"+Math.random().toString(36).slice(2);function oi(e){if(!e[Fi]){e[Fi]=!0,Vd.forEach(function(n){n!=="selectionchange"&&(Jv.has(n)||is(n,!1,e),is(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fi]||(t[Fi]=!0,is("selectionchange",!1,t))}}function $p(e,t,n,r){switch(xp(t)){case 1:var i=dv;break;case 4:i=pv;break;default:i=gu}n=i.bind(null,t,n,e),i=void 0,!qs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function os(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=kn(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}sp(function(){var u=o,c=du(n),f=[];e:{var h=Dp.get(e);if(h!==void 0){var w=yu,v=e;switch(e){case"keypress":if(to(n)===0)break e;case"keydown":case"keyup":w=Pv;break;case"focusin":v="focus",w=Jl;break;case"focusout":v="blur",w=Jl;break;case"beforeblur":case"afterblur":w=Jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Fc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Lv;break;case jp:case Np:case Ap:w=wv;break;case zp:w=Nv;break;case"scroll":w=hv;break;case"wheel":w=zv;break;case"copy":case"cut":case"paste":w=xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Uc}var y=(t&4)!==0,x=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var d=u,m;d!==null;){m=d;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,p!==null&&(S=Zr(d,p),S!=null&&y.push(li(d,S,m)))),x)break;d=d.return}0<y.length&&(h=new w(h,v,null,n,c),f.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==Gs&&(v=n.relatedTarget||n.fromElement)&&(kn(v)||v[Ft]))break e;if((w||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=u,v=v?kn(v):null,v!==null&&(x=In(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=u),w!==v)){if(y=Fc,S="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Uc,S="onPointerLeave",p="onPointerEnter",d="pointer"),x=w==null?h:Vn(w),m=v==null?h:Vn(v),h=new y(S,d+"leave",w,n,c),h.target=x,h.relatedTarget=m,S=null,kn(c)===u&&(y=new y(p,d+"enter",v,n,c),y.target=m,y.relatedTarget=x,S=y),x=S,w&&v)t:{for(y=w,p=v,d=0,m=y;m;m=Mn(m))d++;for(m=0,S=p;S;S=Mn(S))m++;for(;0<d-m;)y=Mn(y),d--;for(;0<m-d;)p=Mn(p),m--;for(;d--;){if(y===p||p!==null&&y===p.alternate)break t;y=Mn(y),p=Mn(p)}y=null}else y=null;w!==null&&Zc(f,h,w,y,!1),v!==null&&x!==null&&Zc(f,x,v,y,!0)}}e:{if(h=u?Vn(u):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var k=Uv;else if(Vc(h))if(Rp)k=Kv;else{k=Wv;var C=Bv}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Vv);if(k&&(k=k(e,u))){_p(f,k,n,c);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Us(h,"number",h.value)}switch(C=u?Vn(u):window,e){case"focusin":(Vc(C)||C.contentEditable==="true")&&(Bn=C,ea=u,Wr=null);break;case"focusout":Wr=ea=Bn=null;break;case"mousedown":ta=!0;break;case"contextmenu":case"mouseup":case"dragend":ta=!1,Yc(f,n,c);break;case"selectionchange":if(qv)break;case"keydown":case"keyup":Yc(f,n,c)}var P;if(Su)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Un?Cp(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Op&&n.locale!=="ko"&&(Un||E!=="onCompositionStart"?E==="onCompositionEnd"&&Un&&(P=kp()):(Jt=c,vu="value"in Jt?Jt.value:Jt.textContent,Un=!0)),C=ko(u,E),0<C.length&&(E=new Hc(E,e,null,n,c),f.push({event:E,listeners:C}),P?E.data=P:(P=Ep(n),P!==null&&(E.data=P)))),(P=Iv?$v(e,n):Mv(e,n))&&(u=ko(u,"onBeforeInput"),0<u.length&&(c=new Hc("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}Ip(f,t)})}function li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Zr(e,n),o!=null&&r.unshift(li(e,o,i)),o=Zr(e,t),o!=null&&r.push(li(e,o,i))),e=e.return}return r}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=Zr(n,o),a!=null&&l.unshift(li(n,a,s))):i||(a=Zr(n,o),a!=null&&l.push(li(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Zv=/\r\n?/g,ey=/\u0000|\uFFFD/g;function ef(e){return(typeof e=="string"?e:""+e).replace(Zv,`
`).replace(ey,"")}function Hi(e,t,n){if(t=ef(t),ef(e)!==t&&n)throw Error(T(425))}function Oo(){}var na=null,ra=null;function ia(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var oa=typeof setTimeout=="function"?setTimeout:void 0,ty=typeof clearTimeout=="function"?clearTimeout:void 0,tf=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof tf<"u"?function(e){return tf.resolve(null).then(e).catch(ry)}:oa;function ry(e){setTimeout(function(){throw e})}function ls(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ni(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ni(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xr=Math.random().toString(36).slice(2),Pt="__reactFiber$"+xr,si="__reactProps$"+xr,Ft="__reactContainer$"+xr,la="__reactEvents$"+xr,iy="__reactListeners$"+xr,oy="__reactHandles$"+xr;function kn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ft]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nf(e);e!==null;){if(n=e[Pt])return n;e=nf(e)}return t}e=n,n=e.parentNode}return null}function Oi(e){return e=e[Pt]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function sl(e){return e[si]||null}var sa=[],Kn=-1;function vn(e){return{current:e}}function fe(e){0>Kn||(e.current=sa[Kn],sa[Kn]=null,Kn--)}function ue(e,t){Kn++,sa[Kn]=e.current,e.current=t}var pn={},Be=vn(pn),et=vn(!1),Tn=pn;function sr(e,t){var n=e.type.contextTypes;if(!n)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function tt(e){return e=e.childContextTypes,e!=null}function Co(){fe(et),fe(Be)}function rf(e,t,n){if(Be.current!==pn)throw Error(T(168));ue(Be,t),ue(et,n)}function Mp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,Bg(e)||"Unknown",i));return ve({},n,r)}function Eo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Tn=Be.current,ue(Be,e),ue(et,et.current),!0}function of(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=Mp(e,t,Tn),r.__reactInternalMemoizedMergedChildContext=e,fe(et),fe(Be),ue(Be,e)):fe(et),ue(et,n)}var At=null,al=!1,ss=!1;function Fp(e){At===null?At=[e]:At.push(e)}function ly(e){al=!0,Fp(e)}function yn(){if(!ss&&At!==null){ss=!0;var e=0,t=se;try{var n=At;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}At=null,al=!1}catch(i){throw At!==null&&(At=At.slice(e+1)),fp(pu,yn),i}finally{se=t,ss=!1}}return null}var Gn=[],Qn=0,_o=null,Ro=0,ct=[],ft=0,bn=null,zt=1,Dt="";function Sn(e,t){Gn[Qn++]=Ro,Gn[Qn++]=_o,_o=e,Ro=t}function Hp(e,t,n){ct[ft++]=zt,ct[ft++]=Dt,ct[ft++]=bn,bn=e;var r=zt;e=Dt;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var o=32-Ot(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,zt=1<<32-Ot(t)+i|n<<i|r,Dt=o+e}else zt=1<<o|n<<i|r,Dt=e}function ku(e){e.return!==null&&(Sn(e,1),Hp(e,1,0))}function Ou(e){for(;e===_o;)_o=Gn[--Qn],Gn[Qn]=null,Ro=Gn[--Qn],Gn[Qn]=null;for(;e===bn;)bn=ct[--ft],ct[ft]=null,Dt=ct[--ft],ct[ft]=null,zt=ct[--ft],ct[ft]=null}var ot=null,it=null,pe=!1,xt=null;function Up(e,t){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function lf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,it=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bn!==null?{id:zt,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,it=null,!0):!1;default:return!1}}function aa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ua(e){if(pe){var t=it;if(t){var n=t;if(!lf(e,t)){if(aa(e))throw Error(T(418));t=on(n.nextSibling);var r=ot;t&&lf(e,t)?Up(r,n):(e.flags=e.flags&-4097|2,pe=!1,ot=e)}}else{if(aa(e))throw Error(T(418));e.flags=e.flags&-4097|2,pe=!1,ot=e}}}function sf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function Ui(e){if(e!==ot)return!1;if(!pe)return sf(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ia(e.type,e.memoizedProps)),t&&(t=it)){if(aa(e))throw Bp(),Error(T(418));for(;t;)Up(e,t),t=on(t.nextSibling)}if(sf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=ot?on(e.stateNode.nextSibling):null;return!0}function Bp(){for(var e=it;e;)e=on(e.nextSibling)}function ar(){it=ot=null,pe=!1}function Cu(e){xt===null?xt=[e]:xt.push(e)}var sy=Bt.ReactCurrentBatchConfig;function wt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Po=vn(null),To=null,qn=null,Eu=null;function _u(){Eu=qn=To=null}function Ru(e){var t=Po.current;fe(Po),e._currentValue=t}function ca(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rr(e,t){To=e,Eu=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Je=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(Eu!==e)if(e={context:e,memoizedValue:t,next:null},qn===null){if(To===null)throw Error(T(308));qn=e,To.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return t}var On=null;function Pu(e){On===null?On=[e]:On.push(e)}function Wp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Pu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ht(e,r)}function Ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qt=!1;function Tu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ht(e,n)}return i=r.interleaved,i===null?(t.next=t,Pu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ht(e,n)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hu(e,n)}}function af(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bo(e,t,n,r){var i=e.updateQueue;Qt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?o=u:l.next=u,l=a;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==l&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=a))}if(o!==null){var f=i.baseState;l=0,c=u=a=null,s=o;do{var h=s.lane,w=s.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,y=s;switch(h=t,w=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(w,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(w,f,h):v,h==null)break e;f=ve({},f,h);break e;case 2:Qt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else w={eventTime:w,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=w,a=f):c=c.next=w,l|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(a=f),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);jn|=l,e.lanes=l,e.memoizedState=f}}function uf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var Kp=new Wd.Component().refs;function fa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ul={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=an(e),o=It(r,i);o.payload=t,n!=null&&(o.callback=n),t=ln(e,o,i),t!==null&&(Ct(t,e,i,r),no(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=an(e),o=It(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ln(e,o,i),t!==null&&(Ct(t,e,i,r),no(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=an(e),i=It(n,r);i.tag=2,t!=null&&(i.callback=t),t=ln(e,i,r),t!==null&&(Ct(t,e,r,n),no(t,e,r))}};function cf(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!ii(n,r)||!ii(i,o):!0}function Gp(e,t,n){var r=!1,i=pn,o=t.contextType;return typeof o=="object"&&o!==null?o=mt(o):(i=tt(t)?Tn:Be.current,r=t.contextTypes,o=(r=r!=null)?sr(e,i):pn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ul,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ff(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ul.enqueueReplaceState(t,t.state,null)}function da(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Kp,Tu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=mt(o):(o=tt(t)?Tn:Be.current,i.context=sr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(fa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ul.enqueueReplaceState(i,i.state,null),bo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===Kp&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Bi(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function df(e){var t=e._init;return t(e._payload)}function Qp(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=un(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,m,S){return d===null||d.tag!==6?(d=hs(m,p.mode,S),d.return=p,d):(d=i(d,m),d.return=p,d)}function a(p,d,m,S){var k=m.type;return k===Hn?c(p,d,m.props.children,S,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Gt&&df(k)===d.type)?(S=i(d,m.props),S.ref=jr(p,d,m),S.return=p,S):(S=ao(m.type,m.key,m.props,null,p.mode,S),S.ref=jr(p,d,m),S.return=p,S)}function u(p,d,m,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=ms(m,p.mode,S),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,S,k){return d===null||d.tag!==7?(d=Rn(m,p.mode,S,k),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=hs(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ji:return m=ao(d.type,d.key,d.props,null,p.mode,m),m.ref=jr(p,null,d),m.return=p,m;case Fn:return d=ms(d,p.mode,m),d.return=p,d;case Gt:var S=d._init;return f(p,S(d._payload),m)}if(Ir(d)||Rr(d))return d=Rn(d,p.mode,m,null),d.return=p,d;Bi(p,d)}return null}function h(p,d,m,S){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:s(p,d,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ji:return m.key===k?a(p,d,m,S):null;case Fn:return m.key===k?u(p,d,m,S):null;case Gt:return k=m._init,h(p,d,k(m._payload),S)}if(Ir(m)||Rr(m))return k!==null?null:c(p,d,m,S,null);Bi(p,m)}return null}function w(p,d,m,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(m)||null,s(d,p,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ji:return p=p.get(S.key===null?m:S.key)||null,a(d,p,S,k);case Fn:return p=p.get(S.key===null?m:S.key)||null,u(d,p,S,k);case Gt:var C=S._init;return w(p,d,m,C(S._payload),k)}if(Ir(S)||Rr(S))return p=p.get(m)||null,c(d,p,S,k,null);Bi(d,S)}return null}function v(p,d,m,S){for(var k=null,C=null,P=d,E=d=0,b=null;P!==null&&E<m.length;E++){P.index>E?(b=P,P=null):b=P.sibling;var j=h(p,P,m[E],S);if(j===null){P===null&&(P=b);break}e&&P&&j.alternate===null&&t(p,P),d=o(j,d,E),C===null?k=j:C.sibling=j,C=j,P=b}if(E===m.length)return n(p,P),pe&&Sn(p,E),k;if(P===null){for(;E<m.length;E++)P=f(p,m[E],S),P!==null&&(d=o(P,d,E),C===null?k=P:C.sibling=P,C=P);return pe&&Sn(p,E),k}for(P=r(p,P);E<m.length;E++)b=w(P,p,E,m[E],S),b!==null&&(e&&b.alternate!==null&&P.delete(b.key===null?E:b.key),d=o(b,d,E),C===null?k=b:C.sibling=b,C=b);return e&&P.forEach(function(H){return t(p,H)}),pe&&Sn(p,E),k}function y(p,d,m,S){var k=Rr(m);if(typeof k!="function")throw Error(T(150));if(m=k.call(m),m==null)throw Error(T(151));for(var C=k=null,P=d,E=d=0,b=null,j=m.next();P!==null&&!j.done;E++,j=m.next()){P.index>E?(b=P,P=null):b=P.sibling;var H=h(p,P,j.value,S);if(H===null){P===null&&(P=b);break}e&&P&&H.alternate===null&&t(p,P),d=o(H,d,E),C===null?k=H:C.sibling=H,C=H,P=b}if(j.done)return n(p,P),pe&&Sn(p,E),k;if(P===null){for(;!j.done;E++,j=m.next())j=f(p,j.value,S),j!==null&&(d=o(j,d,E),C===null?k=j:C.sibling=j,C=j);return pe&&Sn(p,E),k}for(P=r(p,P);!j.done;E++,j=m.next())j=w(P,p,E,j.value,S),j!==null&&(e&&j.alternate!==null&&P.delete(j.key===null?E:j.key),d=o(j,d,E),C===null?k=j:C.sibling=j,C=j);return e&&P.forEach(function(M){return t(p,M)}),pe&&Sn(p,E),k}function x(p,d,m,S){if(typeof m=="object"&&m!==null&&m.type===Hn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ji:e:{for(var k=m.key,C=d;C!==null;){if(C.key===k){if(k=m.type,k===Hn){if(C.tag===7){n(p,C.sibling),d=i(C,m.props.children),d.return=p,p=d;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Gt&&df(k)===C.type){n(p,C.sibling),d=i(C,m.props),d.ref=jr(p,C,m),d.return=p,p=d;break e}n(p,C);break}else t(p,C);C=C.sibling}m.type===Hn?(d=Rn(m.props.children,p.mode,S,m.key),d.return=p,p=d):(S=ao(m.type,m.key,m.props,null,p.mode,S),S.ref=jr(p,d,m),S.return=p,p=S)}return l(p);case Fn:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=ms(m,p.mode,S),d.return=p,p=d}return l(p);case Gt:return C=m._init,x(p,d,C(m._payload),S)}if(Ir(m))return v(p,d,m,S);if(Rr(m))return y(p,d,m,S);Bi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=hs(m,p.mode,S),d.return=p,p=d),l(p)):n(p,d)}return x}var ur=Qp(!0),qp=Qp(!1),Ci={},Lt=vn(Ci),ai=vn(Ci),ui=vn(Ci);function Cn(e){if(e===Ci)throw Error(T(174));return e}function bu(e,t){switch(ue(ui,t),ue(ai,e),ue(Lt,Ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ws(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ws(t,e)}fe(Lt),ue(Lt,t)}function cr(){fe(Lt),fe(ai),fe(ui)}function Yp(e){Cn(ui.current);var t=Cn(Lt.current),n=Ws(t,e.type);t!==n&&(ue(ai,e),ue(Lt,n))}function Lu(e){ai.current===e&&(fe(Lt),fe(ai))}var me=vn(0);function Lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var as=[];function ju(){for(var e=0;e<as.length;e++)as[e]._workInProgressVersionPrimary=null;as.length=0}var ro=Bt.ReactCurrentDispatcher,us=Bt.ReactCurrentBatchConfig,Ln=0,ge=null,Re=null,be=null,jo=!1,Vr=!1,ci=0,ay=0;function Fe(){throw Error(T(321))}function Nu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function Au(e,t,n,r,i,o){if(Ln=o,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=e===null||e.memoizedState===null?dy:py,e=n(r,i),Vr){o=0;do{if(Vr=!1,ci=0,25<=o)throw Error(T(301));o+=1,be=Re=null,t.updateQueue=null,ro.current=hy,e=n(r,i)}while(Vr)}if(ro.current=No,t=Re!==null&&Re.next!==null,Ln=0,be=Re=ge=null,jo=!1,t)throw Error(T(300));return e}function zu(){var e=ci!==0;return ci=0,e}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ge.memoizedState=be=e:be=be.next=e,be}function gt(){if(Re===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=be===null?ge.memoizedState:be.next;if(t!==null)be=t,Re=e;else{if(e===null)throw Error(T(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},be===null?ge.memoizedState=be=e:be=be.next=e}return be}function fi(e,t){return typeof t=="function"?t(e):t}function cs(e){var t=gt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,u=o;do{var c=u.lane;if((Ln&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=f,l=r):a=a.next=f,ge.lanes|=c,jn|=c}u=u.next}while(u!==null&&u!==o);a===null?l=r:a.next=s,Et(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ge.lanes|=o,jn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fs(e){var t=gt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Et(o,t.memoizedState)||(Je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Xp(){}function Jp(e,t){var n=ge,r=gt(),i=t(),o=!Et(r.memoizedState,i);if(o&&(r.memoizedState=i,Je=!0),r=r.queue,Du(th.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,di(9,eh.bind(null,n,r,i,t),void 0,null),Le===null)throw Error(T(349));Ln&30||Zp(n,t,i)}return i}function Zp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function eh(e,t,n,r){t.value=n,t.getSnapshot=r,nh(t)&&rh(e)}function th(e,t,n){return n(function(){nh(t)&&rh(e)})}function nh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function rh(e){var t=Ht(e,1);t!==null&&Ct(t,e,1,-1)}function pf(e){var t=Rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fi,lastRenderedState:e},t.queue=e,e=e.dispatch=fy.bind(null,ge,e),[t.memoizedState,e]}function di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ih(){return gt().memoizedState}function io(e,t,n,r){var i=Rt();ge.flags|=e,i.memoizedState=di(1|t,n,void 0,r===void 0?null:r)}function cl(e,t,n,r){var i=gt();r=r===void 0?null:r;var o=void 0;if(Re!==null){var l=Re.memoizedState;if(o=l.destroy,r!==null&&Nu(r,l.deps)){i.memoizedState=di(t,n,o,r);return}}ge.flags|=e,i.memoizedState=di(1|t,n,o,r)}function hf(e,t){return io(8390656,8,e,t)}function Du(e,t){return cl(2048,8,e,t)}function oh(e,t){return cl(4,2,e,t)}function lh(e,t){return cl(4,4,e,t)}function sh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ah(e,t,n){return n=n!=null?n.concat([e]):null,cl(4,4,sh.bind(null,t,e),n)}function Iu(){}function uh(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ch(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function fh(e,t,n){return Ln&21?(Et(n,t)||(n=hp(),ge.lanes|=n,jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n)}function uy(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=us.transition;us.transition={};try{e(!1),t()}finally{se=n,us.transition=r}}function dh(){return gt().memoizedState}function cy(e,t,n){var r=an(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ph(e))hh(t,n);else if(n=Wp(e,t,n,r),n!==null){var i=Ke();Ct(n,e,r,i),mh(n,t,r)}}function fy(e,t,n){var r=an(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ph(e))hh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Et(s,l)){var a=t.interleaved;a===null?(i.next=i,Pu(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Wp(e,t,i,r),n!==null&&(i=Ke(),Ct(n,e,r,i),mh(n,t,r))}}function ph(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function hh(e,t){Vr=jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hu(e,n)}}var No={readContext:mt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},dy={readContext:mt,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:hf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,io(4194308,4,sh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){return io(4,2,e,t)},useMemo:function(e,t){var n=Rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cy.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:pf,useDebugValue:Iu,useDeferredValue:function(e){return Rt().memoizedState=e},useTransition:function(){var e=pf(!1),t=e[0];return e=uy.bind(null,e[1]),Rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,i=Rt();if(pe){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),Le===null)throw Error(T(349));Ln&30||Zp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,hf(th.bind(null,r,o,e),[e]),r.flags|=2048,di(9,eh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Rt(),t=Le.identifierPrefix;if(pe){var n=Dt,r=zt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ay++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},py={readContext:mt,useCallback:uh,useContext:mt,useEffect:Du,useImperativeHandle:ah,useInsertionEffect:oh,useLayoutEffect:lh,useMemo:ch,useReducer:cs,useRef:ih,useState:function(){return cs(fi)},useDebugValue:Iu,useDeferredValue:function(e){var t=gt();return fh(t,Re.memoizedState,e)},useTransition:function(){var e=cs(fi)[0],t=gt().memoizedState;return[e,t]},useMutableSource:Xp,useSyncExternalStore:Jp,useId:dh,unstable_isNewReconciler:!1},hy={readContext:mt,useCallback:uh,useContext:mt,useEffect:Du,useImperativeHandle:ah,useInsertionEffect:oh,useLayoutEffect:lh,useMemo:ch,useReducer:fs,useRef:ih,useState:function(){return fs(fi)},useDebugValue:Iu,useDeferredValue:function(e){var t=gt();return Re===null?t.memoizedState=e:fh(t,Re.memoizedState,e)},useTransition:function(){var e=fs(fi)[0],t=gt().memoizedState;return[e,t]},useMutableSource:Xp,useSyncExternalStore:Jp,useId:dh,unstable_isNewReconciler:!1};function fr(e,t){try{var n="",r=t;do n+=Ug(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ds(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function pa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var my=typeof WeakMap=="function"?WeakMap:Map;function gh(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zo||(zo=!0,Oa=r),pa(e,t)},n}function vh(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){pa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){pa(e,t),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new my;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ty.bind(null,e,t,n),t.then(e,e))}function gf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=It(-1,1),t.tag=2,ln(n,t,1))),n.lanes|=1),e)}var gy=Bt.ReactCurrentOwner,Je=!1;function Ve(e,t,n,r){t.child=e===null?qp(t,null,n,r):ur(t,e.child,n,r)}function yf(e,t,n,r,i){n=n.render;var o=t.ref;return rr(t,i),r=Au(e,t,n,r,o,i),n=zu(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(pe&&n&&ku(t),t.flags|=1,Ve(e,t,r,i),t.child)}function wf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Vu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,yh(e,t,o,r,i)):(e=ao(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ii,n(l,r)&&e.ref===t.ref)return Ut(e,t,i)}return t.flags|=1,e=un(o,r),e.ref=t.ref,e.return=t,t.child=e}function yh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ii(o,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Je=!0);else return t.lanes=e.lanes,Ut(e,t,i)}return ha(e,t,n,r,i)}function wh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Xn,rt),rt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(Xn,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ue(Xn,rt),rt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ue(Xn,rt),rt|=r;return Ve(e,t,i,n),t.child}function Sh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ha(e,t,n,r,i){var o=tt(n)?Tn:Be.current;return o=sr(t,o),rr(t,i),n=Au(e,t,n,r,o,i),r=zu(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(pe&&r&&ku(t),t.flags|=1,Ve(e,t,n,i),t.child)}function Sf(e,t,n,r,i){if(tt(n)){var o=!0;Eo(t)}else o=!1;if(rr(t,i),t.stateNode===null)oo(e,t),Gp(t,n,r),da(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=mt(u):(u=tt(n)?Tn:Be.current,u=sr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&ff(t,l,r,u),Qt=!1;var h=t.memoizedState;l.state=h,bo(t,r,l,i),a=t.memoizedState,s!==r||h!==a||et.current||Qt?(typeof c=="function"&&(fa(t,n,c,r),a=t.memoizedState),(s=Qt||cf(t,n,s,r,h,a,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Vp(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:wt(t.type,s),l.props=u,f=t.pendingProps,h=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=mt(a):(a=tt(n)?Tn:Be.current,a=sr(t,a));var w=n.getDerivedStateFromProps;(c=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==f||h!==a)&&ff(t,l,r,a),Qt=!1,h=t.memoizedState,l.state=h,bo(t,r,l,i);var v=t.memoizedState;s!==f||h!==v||et.current||Qt?(typeof w=="function"&&(fa(t,n,w,r),v=t.memoizedState),(u=Qt||cf(t,n,u,r,h,v,a)||!1)?(c||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ma(e,t,n,r,o,i)}function ma(e,t,n,r,i,o){Sh(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&of(t,n,!1),Ut(e,t,o);r=t.stateNode,gy.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ur(t,e.child,null,o),t.child=ur(t,null,s,o)):Ve(e,t,s,o),t.memoizedState=r.state,i&&of(t,n,!0),t.child}function xh(e){var t=e.stateNode;t.pendingContext?rf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rf(e,t.context,!1),bu(e,t.containerInfo)}function xf(e,t,n,r,i){return ar(),Cu(i),t.flags|=256,Ve(e,t,n,r),t.child}var ga={dehydrated:null,treeContext:null,retryLane:0};function va(e){return{baseLanes:e,cachePool:null,transitions:null}}function kh(e,t,n){var r=t.pendingProps,i=me.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ue(me,i&1),e===null)return ua(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=pl(l,r,0,null),e=Rn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=va(n),t.memoizedState=ga,e):$u(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return vy(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=un(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=un(s,o):(o=Rn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?va(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ga,r}return o=e.child,e=o.sibling,r=un(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $u(e,t){return t=pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wi(e,t,n,r){return r!==null&&Cu(r),ur(t,e.child,null,n),e=$u(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vy(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=ds(Error(T(422))),Wi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=pl({mode:"visible",children:r.children},i,0,null),o=Rn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ur(t,e.child,null,l),t.child.memoizedState=va(l),t.memoizedState=ga,o);if(!(t.mode&1))return Wi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(T(419)),r=ds(o,r,void 0),Wi(e,t,l,r)}if(s=(l&e.childLanes)!==0,Je||s){if(r=Le,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ht(e,i),Ct(r,e,i,-1))}return Wu(),r=ds(Error(T(421))),Wi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=by.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,it=on(i.nextSibling),ot=t,pe=!0,xt=null,e!==null&&(ct[ft++]=zt,ct[ft++]=Dt,ct[ft++]=bn,zt=e.id,Dt=e.overflow,bn=t),t=$u(t,r.children),t.flags|=4096,t)}function kf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ca(e.return,t,n)}function ps(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Oh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ve(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kf(e,n,t);else if(e.tag===19)kf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ps(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ps(t,!0,n,null,o);break;case"together":ps(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yy(e,t,n){switch(t.tag){case 3:xh(t),ar();break;case 5:Yp(t);break;case 1:tt(t.type)&&Eo(t);break;case 4:bu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ue(Po,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ue(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?kh(e,t,n):(ue(me,me.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);ue(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Oh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,wh(e,t,n)}return Ut(e,t,n)}var Ch,ya,Eh,_h;Ch=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ya=function(){};Eh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Cn(Lt.current);var o=null;switch(n){case"input":i=Fs(e,i),r=Fs(e,r),o=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),o=[];break;case"textarea":i=Bs(e,i),r=Bs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oo)}Vs(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ce("scroll",e),o||s===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};_h=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nr(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wy(e,t,n){var r=t.pendingProps;switch(Ou(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return tt(t.type)&&Co(),He(t),null;case 3:return r=t.stateNode,cr(),fe(et),fe(Be),ju(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(_a(xt),xt=null))),ya(e,t),He(t),null;case 5:Lu(t);var i=Cn(ui.current);if(n=t.type,e!==null&&t.stateNode!=null)Eh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return He(t),null}if(e=Cn(Lt.current),Ui(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Pt]=t,r[si]=o,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<Mr.length;i++)ce(Mr[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":bc(r,o),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ce("invalid",r);break;case"textarea":jc(r,o),ce("invalid",r)}Vs(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Hi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Hi(r.textContent,s,e),i=["children",""+s]):Xr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&ce("scroll",r)}switch(n){case"input":Ni(r),Lc(r,o,!0);break;case"textarea":Ni(r),Nc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Oo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Pt]=t,e[si]=r,Ch(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ks(n,r),n){case"dialog":ce("cancel",e),ce("close",e),i=r;break;case"iframe":case"object":case"embed":ce("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mr.length;i++)ce(Mr[i],e);i=r;break;case"source":ce("error",e),i=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),i=r;break;case"details":ce("toggle",e),i=r;break;case"input":bc(e,r),i=Fs(e,r),ce("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),ce("invalid",e);break;case"textarea":jc(e,r),i=Bs(e,r),ce("invalid",e);break;default:i=r}Vs(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?np(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ep(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Jr(e,a):typeof a=="number"&&Jr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&ce("scroll",e):a!=null&&au(e,o,a,l))}switch(n){case"input":Ni(e),Lc(e,r,!1);break;case"textarea":Ni(e),Nc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)_h(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=Cn(ui.current),Cn(Lt.current),Ui(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(o=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:Hi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return He(t),null;case 13:if(fe(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&it!==null&&t.mode&1&&!(t.flags&128))Bp(),ar(),t.flags|=98560,o=!1;else if(o=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[Pt]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),o=!1}else xt!==null&&(_a(xt),xt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?Pe===0&&(Pe=3):Wu())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return cr(),ya(e,t),e===null&&oi(t.stateNode.containerInfo),He(t),null;case 10:return Ru(t.type._context),He(t),null;case 17:return tt(t.type)&&Co(),He(t),null;case 19:if(fe(me),o=t.memoizedState,o===null)return He(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Nr(o,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Lo(e),l!==null){for(t.flags|=128,Nr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(me,me.current&1|2),t.child}e=e.sibling}o.tail!==null&&Oe()>dr&&(t.flags|=128,r=!0,Nr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Lo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!pe)return He(t),null}else 2*Oe()-o.renderingStartTime>dr&&n!==1073741824&&(t.flags|=128,r=!0,Nr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Oe(),t.sibling=null,n=me.current,ue(me,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return Bu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?rt&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Sy(e,t){switch(Ou(t),t.tag){case 1:return tt(t.type)&&Co(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),fe(et),fe(Be),ju(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Lu(t),null;case 13:if(fe(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(me),null;case 4:return cr(),null;case 10:return Ru(t.type._context),null;case 22:case 23:return Bu(),null;case 24:return null;default:return null}}var Vi=!1,Ue=!1,xy=typeof WeakSet=="function"?WeakSet:Set,$=null;function Yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function wa(e,t,n){try{n()}catch(r){Se(e,t,r)}}var Of=!1;function ky(e,t){if(na=So,e=bp(),xu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(s=l+i),f!==o||r!==0&&f.nodeType!==3||(a=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(w=f.firstChild)!==null;)h=f,f=w;for(;;){if(f===e)break t;if(h===n&&++u===i&&(s=l),h===o&&++c===r&&(a=l),(w=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ra={focusedElem:e,selectionRange:n},So=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,x=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:wt(t.type,y),x);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(S){Se(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return v=Of,Of=!1,v}function Kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&wa(t,n,o)}i=i.next}while(i!==r)}}function fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rh(e){var t=e.alternate;t!==null&&(e.alternate=null,Rh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[si],delete t[la],delete t[iy],delete t[oy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ph(e){return e.tag===5||e.tag===3||e.tag===4}function Cf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ph(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oo));else if(r!==4&&(e=e.child,e!==null))for(xa(e,t,n),e=e.sibling;e!==null;)xa(e,t,n),e=e.sibling}function ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ka(e,t,n),e=e.sibling;e!==null;)ka(e,t,n),e=e.sibling}var De=null,St=!1;function Vt(e,t,n){for(n=n.child;n!==null;)Th(e,t,n),n=n.sibling}function Th(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:Ue||Yn(n,t);case 6:var r=De,i=St;De=null,Vt(e,t,n),De=r,St=i,De!==null&&(St?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(St?(e=De,n=n.stateNode,e.nodeType===8?ls(e.parentNode,n):e.nodeType===1&&ls(e,n),ni(e)):ls(De,n.stateNode));break;case 4:r=De,i=St,De=n.stateNode.containerInfo,St=!0,Vt(e,t,n),De=r,St=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&wa(n,t,l),i=i.next}while(i!==r)}Vt(e,t,n);break;case 1:if(!Ue&&(Yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Se(n,t,s)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,Vt(e,t,n),Ue=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function Ef(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xy),t.forEach(function(r){var i=Ly.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:De=s.stateNode,St=!1;break e;case 3:De=s.stateNode.containerInfo,St=!0;break e;case 4:De=s.stateNode.containerInfo,St=!0;break e}s=s.return}if(De===null)throw Error(T(160));Th(o,l,i),De=null,St=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bh(t,e),t=t.sibling}function bh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yt(t,e),_t(e),r&4){try{Kr(3,e,e.return),fl(3,e)}catch(y){Se(e,e.return,y)}try{Kr(5,e,e.return)}catch(y){Se(e,e.return,y)}}break;case 1:yt(t,e),_t(e),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(yt(t,e),_t(e),r&512&&n!==null&&Yn(n,n.return),e.flags&32){var i=e.stateNode;try{Jr(i,"")}catch(y){Se(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Xd(i,o),Ks(s,l);var u=Ks(s,o);for(l=0;l<a.length;l+=2){var c=a[l],f=a[l+1];c==="style"?np(i,f):c==="dangerouslySetInnerHTML"?ep(i,f):c==="children"?Jr(i,f):au(i,c,f,u)}switch(s){case"input":Hs(i,o);break;case"textarea":Jd(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Zn(i,!!o.multiple,w,!1):h!==!!o.multiple&&(o.defaultValue!=null?Zn(i,!!o.multiple,o.defaultValue,!0):Zn(i,!!o.multiple,o.multiple?[]:"",!1))}i[si]=o}catch(y){Se(e,e.return,y)}}break;case 6:if(yt(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Se(e,e.return,y)}}break;case 3:if(yt(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ni(t.containerInfo)}catch(y){Se(e,e.return,y)}break;case 4:yt(t,e),_t(e);break;case 13:yt(t,e),_t(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Hu=Oe())),r&4&&Ef(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(u=Ue)||c,yt(t,e),Ue=u):yt(t,e),_t(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for($=e,c=e.child;c!==null;){for(f=$=c;$!==null;){switch(h=$,w=h.child,h.tag){case 0:case 11:case 14:case 15:Kr(4,h,h.return);break;case 1:Yn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){Se(r,n,y)}}break;case 5:Yn(h,h.return);break;case 22:if(h.memoizedState!==null){Rf(f);continue}}w!==null?(w.return=h,$=w):Rf(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,a=f.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=tp("display",l))}catch(y){Se(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){Se(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:yt(t,e),_t(e),r&4&&Ef(e);break;case 21:break;default:yt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ph(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Jr(i,""),r.flags&=-33);var o=Cf(e);ka(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Cf(e);xa(e,s,l);break;default:throw Error(T(161))}}catch(a){Se(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Oy(e,t,n){$=e,Lh(e)}function Lh(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Vi;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||Ue;s=Vi;var u=Ue;if(Vi=l,(Ue=a)&&!u)for($=i;$!==null;)l=$,a=l.child,l.tag===22&&l.memoizedState!==null?Pf(i):a!==null?(a.return=l,$=a):Pf(i);for(;o!==null;)$=o,Lh(o),o=o.sibling;$=i,Vi=s,Ue=u}_f(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,$=o):_f(e)}}function _f(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&uf(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uf(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&ni(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ue||t.flags&512&&Sa(t)}catch(h){Se(t,t.return,h)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Rf(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Pf(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fl(4,t)}catch(a){Se(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){Se(t,i,a)}}var o=t.return;try{Sa(t)}catch(a){Se(t,o,a)}break;case 5:var l=t.return;try{Sa(t)}catch(a){Se(t,l,a)}}}catch(a){Se(t,t.return,a)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var Cy=Math.ceil,Ao=Bt.ReactCurrentDispatcher,Mu=Bt.ReactCurrentOwner,pt=Bt.ReactCurrentBatchConfig,te=0,Le=null,Ce=null,Ie=0,rt=0,Xn=vn(0),Pe=0,pi=null,jn=0,dl=0,Fu=0,Gr=null,Xe=null,Hu=0,dr=1/0,Nt=null,zo=!1,Oa=null,sn=null,Ki=!1,Zt=null,Do=0,Qr=0,Ca=null,lo=-1,so=0;function Ke(){return te&6?Oe():lo!==-1?lo:lo=Oe()}function an(e){return e.mode&1?te&2&&Ie!==0?Ie&-Ie:sy.transition!==null?(so===0&&(so=hp()),so):(e=se,e!==0||(e=window.event,e=e===void 0?16:xp(e.type)),e):1}function Ct(e,t,n,r){if(50<Qr)throw Qr=0,Ca=null,Error(T(185));xi(e,n,r),(!(te&2)||e!==Le)&&(e===Le&&(!(te&2)&&(dl|=n),Pe===4&&Xt(e,Ie)),nt(e,r),n===1&&te===0&&!(t.mode&1)&&(dr=Oe()+500,al&&yn()))}function nt(e,t){var n=e.callbackNode;sv(e,t);var r=wo(e,e===Le?Ie:0);if(r===0)n!==null&&Dc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Dc(n),t===1)e.tag===0?ly(Tf.bind(null,e)):Fp(Tf.bind(null,e)),ny(function(){!(te&6)&&yn()}),n=null;else{switch(mp(r)){case 1:n=pu;break;case 4:n=dp;break;case 16:n=yo;break;case 536870912:n=pp;break;default:n=yo}n=Mh(n,jh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jh(e,t){if(lo=-1,so=0,te&6)throw Error(T(327));var n=e.callbackNode;if(ir()&&e.callbackNode!==n)return null;var r=wo(e,e===Le?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Io(e,r);else{t=r;var i=te;te|=2;var o=Ah();(Le!==e||Ie!==t)&&(Nt=null,dr=Oe()+500,_n(e,t));do try{Ry();break}catch(s){Nh(e,s)}while(1);_u(),Ao.current=o,te=i,Ce!==null?t=0:(Le=null,Ie=0,t=Pe)}if(t!==0){if(t===2&&(i=Xs(e),i!==0&&(r=i,t=Ea(e,i))),t===1)throw n=pi,_n(e,0),Xt(e,r),nt(e,Oe()),n;if(t===6)Xt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ey(i)&&(t=Io(e,r),t===2&&(o=Xs(e),o!==0&&(r=o,t=Ea(e,o))),t===1))throw n=pi,_n(e,0),Xt(e,r),nt(e,Oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:xn(e,Xe,Nt);break;case 3:if(Xt(e,r),(r&130023424)===r&&(t=Hu+500-Oe(),10<t)){if(wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=oa(xn.bind(null,e,Xe,Nt),t);break}xn(e,Xe,Nt);break;case 4:if(Xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ot(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cy(r/1960))-r,10<r){e.timeoutHandle=oa(xn.bind(null,e,Xe,Nt),r);break}xn(e,Xe,Nt);break;case 5:xn(e,Xe,Nt);break;default:throw Error(T(329))}}}return nt(e,Oe()),e.callbackNode===n?jh.bind(null,e):null}function Ea(e,t){var n=Gr;return e.current.memoizedState.isDehydrated&&(_n(e,t).flags|=256),e=Io(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&_a(t)),e}function _a(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function Ey(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Et(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~Fu,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function Tf(e){if(te&6)throw Error(T(327));ir();var t=wo(e,0);if(!(t&1))return nt(e,Oe()),null;var n=Io(e,t);if(e.tag!==0&&n===2){var r=Xs(e);r!==0&&(t=r,n=Ea(e,r))}if(n===1)throw n=pi,_n(e,0),Xt(e,t),nt(e,Oe()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,Xe,Nt),nt(e,Oe()),null}function Uu(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(dr=Oe()+500,al&&yn())}}function Nn(e){Zt!==null&&Zt.tag===0&&!(te&6)&&ir();var t=te;te|=1;var n=pt.transition,r=se;try{if(pt.transition=null,se=1,e)return e()}finally{se=r,pt.transition=n,te=t,!(te&6)&&yn()}}function Bu(){rt=Xn.current,fe(Xn)}function _n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ty(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Ou(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Co();break;case 3:cr(),fe(et),fe(Be),ju();break;case 5:Lu(r);break;case 4:cr();break;case 13:fe(me);break;case 19:fe(me);break;case 10:Ru(r.type._context);break;case 22:case 23:Bu()}n=n.return}if(Le=e,Ce=e=un(e.current,null),Ie=rt=t,Pe=0,pi=null,Fu=dl=jn=0,Xe=Gr=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}On=null}return e}function Nh(e,t){do{var n=Ce;try{if(_u(),ro.current=No,jo){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}jo=!1}if(Ln=0,be=Re=ge=null,Vr=!1,ci=0,Mu.current=null,n===null||n.return===null){Pe=1,pi=t,Ce=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=Ie,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var w=gf(l);if(w!==null){w.flags&=-257,vf(w,l,s,o,t),w.mode&1&&mf(o,u,t),t=w,a=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(a),t.updateQueue=y}else v.add(a);break e}else{if(!(t&1)){mf(o,u,t),Wu();break e}a=Error(T(426))}}else if(pe&&s.mode&1){var x=gf(l);if(x!==null){!(x.flags&65536)&&(x.flags|=256),vf(x,l,s,o,t),Cu(fr(a,s));break e}}o=a=fr(a,s),Pe!==4&&(Pe=2),Gr===null?Gr=[o]:Gr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=gh(o,a,t);af(o,p);break e;case 1:s=a;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(sn===null||!sn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=vh(o,s,t);af(o,S);break e}}o=o.return}while(o!==null)}Dh(n)}catch(k){t=k,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(1)}function Ah(){var e=Ao.current;return Ao.current=No,e===null?No:e}function Wu(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Le===null||!(jn&268435455)&&!(dl&268435455)||Xt(Le,Ie)}function Io(e,t){var n=te;te|=2;var r=Ah();(Le!==e||Ie!==t)&&(Nt=null,_n(e,t));do try{_y();break}catch(i){Nh(e,i)}while(1);if(_u(),te=n,Ao.current=r,Ce!==null)throw Error(T(261));return Le=null,Ie=0,Pe}function _y(){for(;Ce!==null;)zh(Ce)}function Ry(){for(;Ce!==null&&!Jg();)zh(Ce)}function zh(e){var t=$h(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?Dh(e):Ce=t,Mu.current=null}function Dh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Sy(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Ce=null;return}}else if(n=wy(n,t,rt),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Pe===0&&(Pe=5)}function xn(e,t,n){var r=se,i=pt.transition;try{pt.transition=null,se=1,Py(e,t,n,r)}finally{pt.transition=i,se=r}return null}function Py(e,t,n,r){do ir();while(Zt!==null);if(te&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(av(e,o),e===Le&&(Ce=Le=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ki||(Ki=!0,Mh(yo,function(){return ir(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=pt.transition,pt.transition=null;var l=se;se=1;var s=te;te|=4,Mu.current=null,ky(e,n),bh(n,e),Qv(ra),So=!!na,ra=na=null,e.current=n,Oy(n),Zg(),te=s,se=l,pt.transition=o}else e.current=n;if(Ki&&(Ki=!1,Zt=e,Do=i),o=e.pendingLanes,o===0&&(sn=null),nv(n.stateNode),nt(e,Oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zo)throw zo=!1,e=Oa,Oa=null,e;return Do&1&&e.tag!==0&&ir(),o=e.pendingLanes,o&1?e===Ca?Qr++:(Qr=0,Ca=e):Qr=0,yn(),null}function ir(){if(Zt!==null){var e=mp(Do),t=pt.transition,n=se;try{if(pt.transition=null,se=16>e?16:e,Zt===null)var r=!1;else{if(e=Zt,Zt=null,Do=0,te&6)throw Error(T(331));var i=te;for(te|=4,$=e.current;$!==null;){var o=$,l=o.child;if($.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:Kr(8,c,o)}var f=c.child;if(f!==null)f.return=c,$=f;else for(;$!==null;){c=$;var h=c.sibling,w=c.return;if(Rh(c),c===u){$=null;break}if(h!==null){h.return=w,$=h;break}$=w}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}$=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,$=l;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Kr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,$=p;break e}$=o.return}}var d=e.current;for($=d;$!==null;){l=$;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,$=m;else e:for(l=d;$!==null;){if(s=$,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:fl(9,s)}}catch(k){Se(s,s.return,k)}if(s===l){$=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,$=S;break e}$=s.return}}if(te=i,yn(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(rl,e)}catch{}r=!0}return r}finally{se=n,pt.transition=t}}return!1}function bf(e,t,n){t=fr(n,t),t=gh(e,t,1),e=ln(e,t,1),t=Ke(),e!==null&&(xi(e,1,t),nt(e,t))}function Se(e,t,n){if(e.tag===3)bf(e,e,n);else for(;t!==null;){if(t.tag===3){bf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=fr(n,e),e=vh(t,e,1),t=ln(t,e,1),e=Ke(),t!==null&&(xi(t,1,e),nt(t,e));break}}t=t.return}}function Ty(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Ie&n)===n&&(Pe===4||Pe===3&&(Ie&130023424)===Ie&&500>Oe()-Hu?_n(e,0):Fu|=n),nt(e,t)}function Ih(e,t){t===0&&(e.mode&1?(t=Di,Di<<=1,!(Di&130023424)&&(Di=4194304)):t=1);var n=Ke();e=Ht(e,t),e!==null&&(xi(e,t,n),nt(e,n))}function by(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ih(e,n)}function Ly(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Ih(e,n)}var $h;$h=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)Je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Je=!1,yy(e,t,n);Je=!!(e.flags&131072)}else Je=!1,pe&&t.flags&1048576&&Hp(t,Ro,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oo(e,t),e=t.pendingProps;var i=sr(t,Be.current);rr(t,n),i=Au(null,t,r,e,i,n);var o=zu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(o=!0,Eo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tu(t),i.updater=ul,t.stateNode=i,i._reactInternals=t,da(t,r,e,n),t=ma(null,t,r,!0,o,n)):(t.tag=0,pe&&o&&ku(t),Ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ny(r),e=wt(r,e),i){case 0:t=ha(null,t,r,e,n);break e;case 1:t=Sf(null,t,r,e,n);break e;case 11:t=yf(null,t,r,e,n);break e;case 14:t=wf(null,t,r,wt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),ha(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Sf(e,t,r,i,n);case 3:e:{if(xh(t),e===null)throw Error(T(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Vp(e,t),bo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=fr(Error(T(423)),t),t=xf(e,t,r,n,i);break e}else if(r!==i){i=fr(Error(T(424)),t),t=xf(e,t,r,n,i);break e}else for(it=on(t.stateNode.containerInfo.firstChild),ot=t,pe=!0,xt=null,n=qp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===i){t=Ut(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return Yp(t),e===null&&ua(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ia(r,i)?l=null:o!==null&&ia(r,o)&&(t.flags|=32),Sh(e,t),Ve(e,t,l,n),t.child;case 6:return e===null&&ua(t),null;case 13:return kh(e,t,n);case 4:return bu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ur(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),yf(e,t,r,i,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ue(Po,r._currentValue),r._currentValue=l,o!==null)if(Et(o.value,l)){if(o.children===i.children&&!et.current){t=Ut(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=It(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ca(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(T(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ca(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,rr(t,n),i=mt(i),r=r(i),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,i=wt(r,t.pendingProps),i=wt(r.type,i),wf(e,t,r,i,n);case 15:return yh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),oo(e,t),t.tag=1,tt(r)?(e=!0,Eo(t)):e=!1,rr(t,n),Gp(t,r,i),da(t,r,i,n),ma(null,t,r,!0,e,n);case 19:return Oh(e,t,n);case 22:return wh(e,t,n)}throw Error(T(156,t.tag))};function Mh(e,t){return fp(e,t)}function jy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,r){return new jy(e,t,n,r)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ny(e){if(typeof e=="function")return Vu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cu)return 11;if(e===fu)return 14}return 2}function un(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ao(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Vu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Hn:return Rn(n.children,i,o,t);case uu:l=8,i|=8;break;case Ds:return e=dt(12,n,t,i|2),e.elementType=Ds,e.lanes=o,e;case Is:return e=dt(13,n,t,i),e.elementType=Is,e.lanes=o,e;case $s:return e=dt(19,n,t,i),e.elementType=$s,e.lanes=o,e;case Qd:return pl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kd:l=10;break e;case Gd:l=9;break e;case cu:l=11;break e;case fu:l=14;break e;case Gt:l=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=dt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Rn(e,t,n,r){return e=dt(7,e,r,t),e.lanes=n,e}function pl(e,t,n,r){return e=dt(22,e,r,t),e.elementType=Qd,e.lanes=n,e.stateNode={isHidden:!1},e}function hs(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function ms(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ay(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ql(0),this.expirationTimes=ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ql(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ku(e,t,n,r,i,o,l,s,a){return e=new Ay(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=dt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tu(o),e}function zy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fh(e){if(!e)return pn;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(tt(n))return Mp(e,n,t)}return t}function Hh(e,t,n,r,i,o,l,s,a){return e=Ku(n,r,!0,e,i,o,l,s,a),e.context=Fh(null),n=e.current,r=Ke(),i=an(n),o=It(r,i),o.callback=t??null,ln(n,o,i),e.current.lanes=i,xi(e,i,r),nt(e,r),e}function hl(e,t,n,r){var i=t.current,o=Ke(),l=an(i);return n=Fh(n),t.context===null?t.context=n:t.pendingContext=n,t=It(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ln(i,t,l),e!==null&&(Ct(e,i,l,o),no(e,i,l)),l}function $o(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gu(e,t){Lf(e,t),(e=e.alternate)&&Lf(e,t)}function Dy(){return null}var Uh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}ml.prototype.render=Qu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));hl(e,t,null,null)};ml.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nn(function(){hl(null,e,null,null)}),t[Ft]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=yp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&Sp(e)}};function qu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jf(){}function Iy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=$o(l);o.call(u)}}var l=Hh(t,r,e,0,null,!1,!1,"",jf);return e._reactRootContainer=l,e[Ft]=l.current,oi(e.nodeType===8?e.parentNode:e),Nn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=$o(a);s.call(u)}}var a=Ku(e,0,!1,null,null,!1,!1,"",jf);return e._reactRootContainer=a,e[Ft]=a.current,oi(e.nodeType===8?e.parentNode:e),Nn(function(){hl(t,a,n,r)}),a}function vl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=$o(l);s.call(a)}}hl(t,l,e,i)}else l=Iy(n,t,e,i,r);return $o(l)}gp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$r(t.pendingLanes);n!==0&&(hu(t,n|1),nt(t,Oe()),!(te&6)&&(dr=Oe()+500,yn()))}break;case 13:Nn(function(){var r=Ht(e,1);if(r!==null){var i=Ke();Ct(r,e,1,i)}}),Gu(e,1)}};mu=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var n=Ke();Ct(t,e,134217728,n)}Gu(e,134217728)}};vp=function(e){if(e.tag===13){var t=an(e),n=Ht(e,t);if(n!==null){var r=Ke();Ct(n,e,t,r)}Gu(e,t)}};yp=function(){return se};wp=function(e,t){var n=se;try{return se=e,t()}finally{se=n}};Qs=function(e,t,n){switch(t){case"input":if(Hs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=sl(r);if(!i)throw Error(T(90));Yd(r),Hs(r,i)}}}break;case"textarea":Jd(e,n);break;case"select":t=n.value,t!=null&&Zn(e,!!n.multiple,t,!1)}};op=Uu;lp=Nn;var $y={usingClientEntryPoint:!1,Events:[Oi,Vn,sl,rp,ip,Uu]},Ar={findFiberByHostInstance:kn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},My={bundleType:Ar.bundleType,version:Ar.version,rendererPackageName:Ar.rendererPackageName,rendererConfig:Ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=up(e),e===null?null:e.stateNode},findFiberByHostInstance:Ar.findFiberByHostInstance||Dy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{rl=Gi.inject(My),bt=Gi}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$y;st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qu(t))throw Error(T(200));return zy(e,t,null,n)};st.createRoot=function(e,t){if(!qu(e))throw Error(T(299));var n=!1,r="",i=Uh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ku(e,1,!1,null,null,n,!1,r,i),e[Ft]=t.current,oi(e.nodeType===8?e.parentNode:e),new Qu(t)};st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=up(t),e=e===null?null:e.stateNode,e};st.flushSync=function(e){return Nn(e)};st.hydrate=function(e,t,n){if(!gl(t))throw Error(T(200));return vl(null,e,t,!0,n)};st.hydrateRoot=function(e,t,n){if(!qu(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Uh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Hh(t,null,e,1,n??null,i,!1,o,l),e[Ft]=t.current,oi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ml(t)};st.render=function(e,t,n){if(!gl(t))throw Error(T(200));return vl(null,e,t,!1,n)};st.unmountComponentAtNode=function(e){if(!gl(e))throw Error(T(40));return e._reactRootContainer?(Nn(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1};st.unstable_batchedUpdates=Uu;st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gl(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return vl(e,t,n,!1,r)};st.version="18.2.0-next-9e3b772b8-20220608";function Bh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bh)}catch(e){console.error(e)}}Bh(),Hd.exports=st;var Fy=Hd.exports,Nf=Fy;As.createRoot=Nf.createRoot,As.hydrateRoot=Nf.hydrateRoot;var Wh={exports:{}},ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=typeof Symbol=="function"&&Symbol.for,Yu=je?Symbol.for("react.element"):60103,Xu=je?Symbol.for("react.portal"):60106,yl=je?Symbol.for("react.fragment"):60107,wl=je?Symbol.for("react.strict_mode"):60108,Sl=je?Symbol.for("react.profiler"):60114,xl=je?Symbol.for("react.provider"):60109,kl=je?Symbol.for("react.context"):60110,Ju=je?Symbol.for("react.async_mode"):60111,Ol=je?Symbol.for("react.concurrent_mode"):60111,Cl=je?Symbol.for("react.forward_ref"):60112,El=je?Symbol.for("react.suspense"):60113,Hy=je?Symbol.for("react.suspense_list"):60120,_l=je?Symbol.for("react.memo"):60115,Rl=je?Symbol.for("react.lazy"):60116,Uy=je?Symbol.for("react.block"):60121,By=je?Symbol.for("react.fundamental"):60117,Wy=je?Symbol.for("react.responder"):60118,Vy=je?Symbol.for("react.scope"):60119;function ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Yu:switch(e=e.type,e){case Ju:case Ol:case yl:case Sl:case wl:case El:return e;default:switch(e=e&&e.$$typeof,e){case kl:case Cl:case Rl:case _l:case xl:return e;default:return t}}case Xu:return t}}}function Vh(e){return ut(e)===Ol}ae.AsyncMode=Ju;ae.ConcurrentMode=Ol;ae.ContextConsumer=kl;ae.ContextProvider=xl;ae.Element=Yu;ae.ForwardRef=Cl;ae.Fragment=yl;ae.Lazy=Rl;ae.Memo=_l;ae.Portal=Xu;ae.Profiler=Sl;ae.StrictMode=wl;ae.Suspense=El;ae.isAsyncMode=function(e){return Vh(e)||ut(e)===Ju};ae.isConcurrentMode=Vh;ae.isContextConsumer=function(e){return ut(e)===kl};ae.isContextProvider=function(e){return ut(e)===xl};ae.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yu};ae.isForwardRef=function(e){return ut(e)===Cl};ae.isFragment=function(e){return ut(e)===yl};ae.isLazy=function(e){return ut(e)===Rl};ae.isMemo=function(e){return ut(e)===_l};ae.isPortal=function(e){return ut(e)===Xu};ae.isProfiler=function(e){return ut(e)===Sl};ae.isStrictMode=function(e){return ut(e)===wl};ae.isSuspense=function(e){return ut(e)===El};ae.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===yl||e===Ol||e===Sl||e===wl||e===El||e===Hy||typeof e=="object"&&e!==null&&(e.$$typeof===Rl||e.$$typeof===_l||e.$$typeof===xl||e.$$typeof===kl||e.$$typeof===Cl||e.$$typeof===By||e.$$typeof===Wy||e.$$typeof===Vy||e.$$typeof===Uy)};ae.typeOf=ut;Wh.exports=ae;var Zu=Wh.exports;function Ky(e){function t(N,I,D,V,O){for(var X=0,A=0,we=0,ie=0,le,G,Ne=0,qe=0,ne,Me=ne=le=0,oe=0,Ae=0,Er=0,ze=0,Ti=D.length,_r=Ti-1,vt,K="",ke="",Ul="",Bl="",Wt;oe<Ti;){if(G=D.charCodeAt(oe),oe===_r&&A+ie+we+X!==0&&(A!==0&&(G=A===47?10:47),ie=we=X=0,Ti++,_r++),A+ie+we+X===0){if(oe===_r&&(0<Ae&&(K=K.replace(h,"")),0<K.trim().length)){switch(G){case 32:case 9:case 59:case 13:case 10:break;default:K+=D.charAt(oe)}G=59}switch(G){case 123:for(K=K.trim(),le=K.charCodeAt(0),ne=1,ze=++oe;oe<Ti;){switch(G=D.charCodeAt(oe)){case 123:ne++;break;case 125:ne--;break;case 47:switch(G=D.charCodeAt(oe+1)){case 42:case 47:e:{for(Me=oe+1;Me<_r;++Me)switch(D.charCodeAt(Me)){case 47:if(G===42&&D.charCodeAt(Me-1)===42&&oe+2!==Me){oe=Me+1;break e}break;case 10:if(G===47){oe=Me+1;break e}}oe=Me}}break;case 91:G++;case 40:G++;case 34:case 39:for(;oe++<_r&&D.charCodeAt(oe)!==G;);}if(ne===0)break;oe++}switch(ne=D.substring(ze,oe),le===0&&(le=(K=K.replace(f,"").trim()).charCodeAt(0)),le){case 64:switch(0<Ae&&(K=K.replace(h,"")),G=K.charCodeAt(1),G){case 100:case 109:case 115:case 45:Ae=I;break;default:Ae=_e}if(ne=t(I,Ae,ne,G,O+1),ze=ne.length,0<L&&(Ae=n(_e,K,Er),Wt=s(3,ne,Ae,I,F,M,ze,G,O,V),K=Ae.join(""),Wt!==void 0&&(ze=(ne=Wt.trim()).length)===0&&(G=0,ne="")),0<ze)switch(G){case 115:K=K.replace(C,l);case 100:case 109:case 45:ne=K+"{"+ne+"}";break;case 107:K=K.replace(d,"$1 $2"),ne=K+"{"+ne+"}",ne=Z===1||Z===2&&o("@"+ne,3)?"@-webkit-"+ne+"@"+ne:"@"+ne;break;default:ne=K+ne,V===112&&(ne=(ke+=ne,""))}else ne="";break;default:ne=t(I,n(I,K,Er),ne,V,O+1)}Ul+=ne,ne=Er=Ae=Me=le=0,K="",G=D.charCodeAt(++oe);break;case 125:case 59:if(K=(0<Ae?K.replace(h,""):K).trim(),1<(ze=K.length))switch(Me===0&&(le=K.charCodeAt(0),le===45||96<le&&123>le)&&(ze=(K=K.replace(" ",":")).length),0<L&&(Wt=s(1,K,I,N,F,M,ke.length,V,O,V))!==void 0&&(ze=(K=Wt.trim()).length)===0&&(K="\0\0"),le=K.charCodeAt(0),G=K.charCodeAt(1),le){case 0:break;case 64:if(G===105||G===99){Bl+=K+D.charAt(oe);break}default:K.charCodeAt(ze-1)!==58&&(ke+=i(K,le,G,K.charCodeAt(2)))}Er=Ae=Me=le=0,K="",G=D.charCodeAt(++oe)}}switch(G){case 13:case 10:A===47?A=0:1+le===0&&V!==107&&0<K.length&&(Ae=1,K+="\0"),0<L*U&&s(0,K,I,N,F,M,ke.length,V,O,V),M=1,F++;break;case 59:case 125:if(A+ie+we+X===0){M++;break}default:switch(M++,vt=D.charAt(oe),G){case 9:case 32:if(ie+X+A===0)switch(Ne){case 44:case 58:case 9:case 32:vt="";break;default:G!==32&&(vt=" ")}break;case 0:vt="\\0";break;case 12:vt="\\f";break;case 11:vt="\\v";break;case 38:ie+A+X===0&&(Ae=Er=1,vt="\f"+vt);break;case 108:if(ie+A+X+xe===0&&0<Me)switch(oe-Me){case 2:Ne===112&&D.charCodeAt(oe-3)===58&&(xe=Ne);case 8:qe===111&&(xe=qe)}break;case 58:ie+A+X===0&&(Me=oe);break;case 44:A+we+ie+X===0&&(Ae=1,vt+="\r");break;case 34:case 39:A===0&&(ie=ie===G?0:ie===0?G:ie);break;case 91:ie+A+we===0&&X++;break;case 93:ie+A+we===0&&X--;break;case 41:ie+A+X===0&&we--;break;case 40:if(ie+A+X===0){if(le===0)switch(2*Ne+3*qe){case 533:break;default:le=1}we++}break;case 64:A+we+ie+X+Me+ne===0&&(ne=1);break;case 42:case 47:if(!(0<ie+X+we))switch(A){case 0:switch(2*G+3*D.charCodeAt(oe+1)){case 235:A=47;break;case 220:ze=oe,A=42}break;case 42:G===47&&Ne===42&&ze+2!==oe&&(D.charCodeAt(ze+2)===33&&(ke+=D.substring(ze,oe+1)),vt="",A=0)}}A===0&&(K+=vt)}qe=Ne,Ne=G,oe++}if(ze=ke.length,0<ze){if(Ae=I,0<L&&(Wt=s(2,ke,Ae,N,F,M,ze,V,O,V),Wt!==void 0&&(ke=Wt).length===0))return Bl+ke+Ul;if(ke=Ae.join(",")+"{"+ke+"}",Z*xe!==0){switch(Z!==2||o(ke,2)||(xe=0),xe){case 111:ke=ke.replace(S,":-moz-$1")+ke;break;case 112:ke=ke.replace(m,"::-webkit-input-$1")+ke.replace(m,"::-moz-$1")+ke.replace(m,":-ms-input-$1")+ke}xe=0}}return Bl+ke+Ul}function n(N,I,D){var V=I.trim().split(x);I=V;var O=V.length,X=N.length;switch(X){case 0:case 1:var A=0;for(N=X===0?"":N[0]+" ";A<O;++A)I[A]=r(N,I[A],D).trim();break;default:var we=A=0;for(I=[];A<O;++A)for(var ie=0;ie<X;++ie)I[we++]=r(N[ie]+" ",V[A],D).trim()}return I}function r(N,I,D){var V=I.charCodeAt(0);switch(33>V&&(V=(I=I.trim()).charCodeAt(0)),V){case 38:return I.replace(p,"$1"+N.trim());case 58:return N.trim()+I.replace(p,"$1"+N.trim());default:if(0<1*D&&0<I.indexOf("\f"))return I.replace(p,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+I}function i(N,I,D,V){var O=N+";",X=2*I+3*D+4*V;if(X===944){N=O.indexOf(":",9)+1;var A=O.substring(N,O.length-1).trim();return A=O.substring(0,N).trim()+A+";",Z===1||Z===2&&o(A,1)?"-webkit-"+A+A:A}if(Z===0||Z===2&&!o(O,1))return O;switch(X){case 1015:return O.charCodeAt(10)===97?"-webkit-"+O+O:O;case 951:return O.charCodeAt(3)===116?"-webkit-"+O+O:O;case 963:return O.charCodeAt(5)===110?"-webkit-"+O+O:O;case 1009:if(O.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+O+O;case 978:return"-webkit-"+O+"-moz-"+O+O;case 1019:case 983:return"-webkit-"+O+"-moz-"+O+"-ms-"+O+O;case 883:if(O.charCodeAt(8)===45)return"-webkit-"+O+O;if(0<O.indexOf("image-set(",11))return O.replace(H,"$1-webkit-$2")+O;break;case 932:if(O.charCodeAt(4)===45)switch(O.charCodeAt(5)){case 103:return"-webkit-box-"+O.replace("-grow","")+"-webkit-"+O+"-ms-"+O.replace("grow","positive")+O;case 115:return"-webkit-"+O+"-ms-"+O.replace("shrink","negative")+O;case 98:return"-webkit-"+O+"-ms-"+O.replace("basis","preferred-size")+O}return"-webkit-"+O+"-ms-"+O+O;case 964:return"-webkit-"+O+"-ms-flex-"+O+O;case 1023:if(O.charCodeAt(8)!==99)break;return A=O.substring(O.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+A+"-webkit-"+O+"-ms-flex-pack"+A+O;case 1005:return v.test(O)?O.replace(w,":-webkit-")+O.replace(w,":-moz-")+O:O;case 1e3:switch(A=O.substring(13).trim(),I=A.indexOf("-")+1,A.charCodeAt(0)+A.charCodeAt(I)){case 226:A=O.replace(k,"tb");break;case 232:A=O.replace(k,"tb-rl");break;case 220:A=O.replace(k,"lr");break;default:return O}return"-webkit-"+O+"-ms-"+A+O;case 1017:if(O.indexOf("sticky",9)===-1)break;case 975:switch(I=(O=N).length-10,A=(O.charCodeAt(I)===33?O.substring(0,I):O).substring(N.indexOf(":",7)+1).trim(),X=A.charCodeAt(0)+(A.charCodeAt(7)|0)){case 203:if(111>A.charCodeAt(8))break;case 115:O=O.replace(A,"-webkit-"+A)+";"+O;break;case 207:case 102:O=O.replace(A,"-webkit-"+(102<X?"inline-":"")+"box")+";"+O.replace(A,"-webkit-"+A)+";"+O.replace(A,"-ms-"+A+"box")+";"+O}return O+";";case 938:if(O.charCodeAt(5)===45)switch(O.charCodeAt(6)){case 105:return A=O.replace("-items",""),"-webkit-"+O+"-webkit-box-"+A+"-ms-flex-"+A+O;case 115:return"-webkit-"+O+"-ms-flex-item-"+O.replace(E,"")+O;default:return"-webkit-"+O+"-ms-flex-line-pack"+O.replace("align-content","").replace(E,"")+O}break;case 973:case 989:if(O.charCodeAt(3)!==45||O.charCodeAt(4)===122)break;case 931:case 953:if(j.test(N)===!0)return(A=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?i(N.replace("stretch","fill-available"),I,D,V).replace(":fill-available",":stretch"):O.replace(A,"-webkit-"+A)+O.replace(A,"-moz-"+A.replace("fill-",""))+O;break;case 962:if(O="-webkit-"+O+(O.charCodeAt(5)===102?"-ms-"+O:"")+O,D+V===211&&O.charCodeAt(13)===105&&0<O.indexOf("transform",10))return O.substring(0,O.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+O}return O}function o(N,I){var D=N.indexOf(I===1?":":"{"),V=N.substring(0,I!==3?D:10);return D=N.substring(D+1,N.length-1),B(I!==2?V:V.replace(b,"$1"),D,I)}function l(N,I){var D=i(I,I.charCodeAt(0),I.charCodeAt(1),I.charCodeAt(2));return D!==I+";"?D.replace(P," or ($1)").substring(4):"("+I+")"}function s(N,I,D,V,O,X,A,we,ie,le){for(var G=0,Ne=I,qe;G<L;++G)switch(qe=ye[G].call(c,N,Ne,D,V,O,X,A,we,ie,le)){case void 0:case!1:case!0:case null:break;default:Ne=qe}if(Ne!==I)return Ne}function a(N){switch(N){case void 0:case null:L=ye.length=0;break;default:if(typeof N=="function")ye[L++]=N;else if(typeof N=="object")for(var I=0,D=N.length;I<D;++I)a(N[I]);else U=!!N|0}return a}function u(N){return N=N.prefix,N!==void 0&&(B=null,N?typeof N!="function"?Z=1:(Z=2,B=N):Z=0),u}function c(N,I){var D=N;if(33>D.charCodeAt(0)&&(D=D.trim()),re=D,D=[re],0<L){var V=s(-1,I,D,D,F,M,0,0,0,0);V!==void 0&&typeof V=="string"&&(I=V)}var O=t(_e,D,I,0,0);return 0<L&&(V=s(-2,O,D,D,F,M,O.length,0,0,0),V!==void 0&&(O=V)),re="",xe=0,M=F=1,O}var f=/^\0+/g,h=/[\0\r\f]/g,w=/: */g,v=/zoo|gra/,y=/([,: ])(transform)/g,x=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,S=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,E=/-self|flex-/g,b=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,H=/([^-])(image-set\()/,M=1,F=1,xe=0,Z=1,_e=[],ye=[],L=0,B=null,U=0,re="";return c.use=a,c.set=u,e!==void 0&&u(e),c}var Gy={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Qy(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var qy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Af=Qy(function(e){return qy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ec=Zu,Yy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Xy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Kh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tc={};tc[ec.ForwardRef]=Jy;tc[ec.Memo]=Kh;function zf(e){return ec.isMemo(e)?Kh:tc[e.$$typeof]||Yy}var Zy=Object.defineProperty,e0=Object.getOwnPropertyNames,Df=Object.getOwnPropertySymbols,t0=Object.getOwnPropertyDescriptor,n0=Object.getPrototypeOf,If=Object.prototype;function Gh(e,t,n){if(typeof t!="string"){if(If){var r=n0(t);r&&r!==If&&Gh(e,r,n)}var i=e0(t);Df&&(i=i.concat(Df(t)));for(var o=zf(e),l=zf(t),s=0;s<i.length;++s){var a=i[s];if(!Xy[a]&&!(n&&n[a])&&!(l&&l[a])&&!(o&&o[a])){var u=t0(t,a);try{Zy(e,a,u)}catch{}}}}return e}var r0=Gh;const i0=tu(r0);function kt(){return(kt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var $f=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Ra=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Zu.typeOf(e)},Mo=Object.freeze([]),cn=Object.freeze({});function pr(e){return typeof e=="function"}function Mf(e){return e.displayName||e.name||"Component"}function nc(e){return e&&typeof e.styledComponentId=="string"}var hr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",rc=typeof window<"u"&&"HTMLElement"in window,o0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),l0={};function An(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var s0=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&An(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var s=o;s<l;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(a,r[u])&&(this.groupSizes[n]++,a++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,s=o;s<l;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),uo=new Map,Fo=new Map,qr=1,Qi=function(e){if(uo.has(e))return uo.get(e);for(;Fo.has(qr);)qr++;var t=qr++;return uo.set(e,t),Fo.set(t,e),t},a0=function(e){return Fo.get(e)},u0=function(e,t){t>=qr&&(qr=t+1),uo.set(e,t),Fo.set(t,e)},c0="style["+hr+'][data-styled-version="5.3.11"]',f0=new RegExp("^"+hr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),d0=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},p0=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var s=l.match(f0);if(s){var a=0|parseInt(s[1],10),u=s[2];a!==0&&(u0(u,a),d0(e,u,s[3]),e.getTag().insertRules(a,r)),r.length=0}else r.push(l)}}},h0=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Qh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var a=s.childNodes,u=a.length;u>=0;u--){var c=a[u];if(c&&c.nodeType===1&&c.hasAttribute(hr))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(hr,"active"),r.setAttribute("data-styled-version","5.3.11");var l=h0();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},m0=function(){function e(n){var r=this.element=Qh(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,s=o.length;l<s;l++){var a=o[l];if(a.ownerNode===i)return a}An(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),g0=function(){function e(n){var r=this.element=Qh(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),v0=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Ff=rc,y0={isServer:!rc,useCSSOMInjection:!o0},Ho=function(){function e(n,r,i){n===void 0&&(n=cn),r===void 0&&(r={}),this.options=kt({},y0,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&rc&&Ff&&(Ff=!1,function(o){for(var l=document.querySelectorAll(c0),s=0,a=l.length;s<a;s++){var u=l[s];u&&u.getAttribute(hr)!=="active"&&(p0(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Qi(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(kt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new v0(l):o?new m0(l):new g0(l),new s0(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Qi(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Qi(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Qi(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var s=a0(l);if(s!==void 0){var a=n.names.get(s),u=r.getGroup(l);if(a&&u&&a.size){var c=hr+".g"+l+'[id="'+s+'"]',f="";a!==void 0&&a.forEach(function(h){h.length>0&&(f+=h+",")}),o+=""+u+c+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},e}(),w0=/(a)(d)/gi,Hf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pa(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Hf(t%52)+n;return(Hf(t%52)+n).replace(w0,"$1-$2")}var Jn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},qh=function(e){return Jn(5381,e)};function Yh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(pr(n)&&!nc(n))return!1}return!0}var S0=qh("5.3.11"),x0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Yh(t),this.componentId=n,this.baseHash=Jn(S0,n),this.baseStyle=r,Ho.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=zn(this.rules,t,n,r).join(""),s=Pa(Jn(this.baseHash,l)>>>0);if(!n.hasNameForId(i,s)){var a=r(l,"."+s,void 0,i);n.insertRules(i,s,a)}o.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,c=Jn(this.baseHash,r.hash),f="",h=0;h<u;h++){var w=this.rules[h];if(typeof w=="string")f+=w;else if(w){var v=zn(w,t,n,r),y=Array.isArray(v)?v.join(""):v;c=Jn(c,y+h),f+=y}}if(f){var x=Pa(c>>>0);if(!n.hasNameForId(i,x)){var p=r(f,"."+x,void 0,i);n.insertRules(i,x,p)}o.push(x)}}return o.join(" ")},e}(),k0=/^\s*\/\/.*$/gm,O0=[":","[",".","#"];function C0(e){var t,n,r,i,o=e===void 0?cn:e,l=o.options,s=l===void 0?cn:l,a=o.plugins,u=a===void 0?Mo:a,c=new Ky(s),f=[],h=function(y){function x(p){if(p)try{y(p+"}")}catch{}}return function(p,d,m,S,k,C,P,E,b,j){switch(p){case 1:if(b===0&&d.charCodeAt(0)===64)return y(d+";"),"";break;case 2:if(E===0)return d+"/*|*/";break;case 3:switch(E){case 102:case 112:return y(m[0]+d),"";default:return d+(j===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(x)}}}(function(y){f.push(y)}),w=function(y,x,p){return x===0&&O0.indexOf(p[n.length])!==-1||p.match(i)?y:"."+t};function v(y,x,p,d){d===void 0&&(d="&");var m=y.replace(k0,""),S=x&&p?p+" "+x+" { "+m+" }":m;return t=d,n=x,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!x?"":x,S)}return c.use([].concat(u,[function(y,x,p){y===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,w))},h,function(y){if(y===-2){var x=f;return f=[],x}}])),v.hash=u.length?u.reduce(function(y,x){return x.name||An(15),Jn(y,x.name)},5381).toString():"",v}var Xh=mn.createContext();Xh.Consumer;var Jh=mn.createContext(),E0=(Jh.Consumer,new Ho),Ta=C0();function Zh(){return _.useContext(Xh)||E0}function em(){return _.useContext(Jh)||Ta}var _0=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ta);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return An(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ta),this.name+t.hash},e}(),R0=/([A-Z])/,P0=/([A-Z])/g,T0=/^ms-/,b0=function(e){return"-"+e.toLowerCase()};function Uf(e){return R0.test(e)?e.replace(P0,b0).replace(T0,"-ms-"):e}var Bf=function(e){return e==null||e===!1||e===""};function zn(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,s=e.length;l<s;l+=1)(i=zn(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Bf(e))return"";if(nc(e))return"."+e.styledComponentId;if(pr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var a=e(t);return zn(a,t,n,r)}var u;return e instanceof _0?n?(e.inject(n,r),e.getName(r)):e:Ra(e)?function c(f,h){var w,v,y=[];for(var x in f)f.hasOwnProperty(x)&&!Bf(f[x])&&(Array.isArray(f[x])&&f[x].isCss||pr(f[x])?y.push(Uf(x)+":",f[x],";"):Ra(f[x])?y.push.apply(y,c(f[x],x)):y.push(Uf(x)+": "+(w=x,(v=f[x])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||w in Gy||w.startsWith("--")?String(v).trim():v+"px")+";"));return h?[h+" {"].concat(y,["}"]):y}(e):e.toString()}var Wf=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function tm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return pr(e)||Ra(e)?Wf(zn($f(Mo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Wf(zn($f(e,n)))}var nm=function(e,t,n){return n===void 0&&(n=cn),e.theme!==n.theme&&e.theme||t||n.theme},L0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,j0=/(^-|-$)/g;function gs(e){return e.replace(L0,"-").replace(j0,"")}var rm=function(e){return Pa(qh(e)>>>0)};function qi(e){return typeof e=="string"&&!0}var ba=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},N0=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function A0(e,t,n){var r=e[n];ba(t)&&ba(r)?im(r,t):e[n]=t}function im(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(ba(l))for(var s in l)N0(s)&&A0(e,l[s],s)}return e}var hi=mn.createContext();hi.Consumer;function z0(e){var t=_.useContext(hi),n=_.useMemo(function(){return function(r,i){if(!r)return An(14);if(pr(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?An(8):i?kt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?mn.createElement(hi.Provider,{value:n},e.children):null}var vs={};function om(e,t,n){var r=nc(e),i=!qi(e),o=t.attrs,l=o===void 0?Mo:o,s=t.componentId,a=s===void 0?function(d,m){var S=typeof d!="string"?"sc":gs(d);vs[S]=(vs[S]||0)+1;var k=S+"-"+rm("5.3.11"+S+vs[S]);return m?m+"-"+k:k}(t.displayName,t.parentComponentId):s,u=t.displayName,c=u===void 0?function(d){return qi(d)?"styled."+d:"Styled("+Mf(d)+")"}(e):u,f=t.displayName&&t.componentId?gs(t.displayName)+"-"+t.componentId:t.componentId||a,h=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(d,m,S){return e.shouldForwardProp(d,m,S)&&t.shouldForwardProp(d,m,S)}:e.shouldForwardProp);var v,y=new x0(n,f,r?e.componentStyle:void 0),x=y.isStatic&&l.length===0,p=function(d,m){return function(S,k,C,P){var E=S.attrs,b=S.componentStyle,j=S.defaultProps,H=S.foldedComponentIds,M=S.shouldForwardProp,F=S.styledComponentId,xe=S.target,Z=function(V,O,X){V===void 0&&(V=cn);var A=kt({},O,{theme:V}),we={};return X.forEach(function(ie){var le,G,Ne,qe=ie;for(le in pr(qe)&&(qe=qe(A)),qe)A[le]=we[le]=le==="className"?(G=we[le],Ne=qe[le],G&&Ne?G+" "+Ne:G||Ne):qe[le]}),[A,we]}(nm(k,_.useContext(hi),j)||cn,k,E),_e=Z[0],ye=Z[1],L=function(V,O,X,A){var we=Zh(),ie=em(),le=O?V.generateAndInjectStyles(cn,we,ie):V.generateAndInjectStyles(X,we,ie);return le}(b,P,_e),B=C,U=ye.$as||k.$as||ye.as||k.as||xe,re=qi(U),N=ye!==k?kt({},k,{},ye):k,I={};for(var D in N)D[0]!=="$"&&D!=="as"&&(D==="forwardedAs"?I.as=N[D]:(M?M(D,Af,U):!re||Af(D))&&(I[D]=N[D]));return k.style&&ye.style!==k.style&&(I.style=kt({},k.style,{},ye.style)),I.className=Array.prototype.concat(H,F,L!==F?L:null,k.className,ye.className).filter(Boolean).join(" "),I.ref=B,_.createElement(U,I)}(v,d,m,x)};return p.displayName=c,(v=mn.forwardRef(p)).attrs=h,v.componentStyle=y,v.displayName=c,v.shouldForwardProp=w,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Mo,v.styledComponentId=f,v.target=r?e.target:e,v.withComponent=function(d){var m=t.componentId,S=function(C,P){if(C==null)return{};var E,b,j={},H=Object.keys(C);for(b=0;b<H.length;b++)E=H[b],P.indexOf(E)>=0||(j[E]=C[E]);return j}(t,["componentId"]),k=m&&m+"-"+(qi(d)?d:gs(Mf(d)));return om(d,kt({},S,{attrs:h,componentId:k}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?im({},e.defaultProps,d):d}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),i&&i0(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var La=function(e){return function t(n,r,i){if(i===void 0&&(i=cn),!Zu.isValidElementType(r))return An(1,String(r));var o=function(){return n(r,i,tm.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,kt({},i,{},l))},o.attrs=function(l){return t(n,r,kt({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(om,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){La[e]=La(e)});var D0=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Yh(n),Ho.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var l=o(zn(this.rules,r,i,o).join(""),""),s=this.componentId+n;i.insertRules(s,s,l)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&Ho.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function I0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=tm.apply(void 0,[e].concat(n)),o="sc-global-"+rm(JSON.stringify(i)),l=new D0(i,o);function s(u){var c=Zh(),f=em(),h=_.useContext(hi),w=_.useRef(c.allocateGSInstance(o)).current;return c.server&&a(w,u,c,h,f),_.useLayoutEffect(function(){if(!c.server)return a(w,u,c,h,f),function(){return l.removeStyles(w,c)}},[w,u,c,h,f]),null}function a(u,c,f,h,w){if(l.isStatic)l.renderStyles(u,l0,f,w);else{var v=kt({},c,{theme:nm(c,h,s.defaultProps)});l.renderStyles(u,v,f,w)}}return mn.memo(s)}const J=La,$0={COLORS:{LIGHT_100:"#FFFFFF",LIGHT_200:"#FFFAF1",LIGHT_300:"#E1E1E6",LIGHT_400:"#C4C4CC",LIGHT_500:"#7C7C8A",LIGHT_600:"#76797B",LIGHT_700:"#4D585E",DARK_100:"#000405",DARK_200:"#00070A",DARK_300:"#000204",DARK_400:"#000A0F",DARK_500:"#000C12",DARK_600:"#00111A",DARK_700:"#001119",DARK_800:"#0D161B",DARK_900:"#0D1D25",DARK_1000:"#192227",TOMATO_100:"#750310",TOMATO_200:"#92000E",TOMATO_300:"#AB222E",TOMATO_400:"#AB4D55",CARROT_100:"#FBA94C",MINT_100:"#04D361",CAKE_100:"#065E7C",CAKE_200:"#82F3FF"}},M0=I0`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  *::-webkit-scrollbar {
    width: .8rem;
  }
  
  *::-webkit-scrollbar-track-piece  {
    background-color:  ${({theme:e})=>e.COLORS.DARK_100};
  }
  
  *::-webkit-scrollbar-thumb:vertical {
    background-color:  ${({theme:e})=>e.COLORS.DARK_800};
  }

  @media (max-width: 600px) {
    *::-webkit-scrollbar {
    width: 0rem;
  }
  }
}

:root {
        font-size: 62.5%;
    }

body {
    background-color: ${({theme:e})=>e.COLORS.DARK_400};
    color: ${({theme:e})=>e.COLORS.LIGHT_100};
    -webkit-font-smoothing: antialiased;  
}

a {
    text-decoration: none;
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
    filter: brightness(0.8);
}
`;function lm(e,t){return function(){return e.apply(t,arguments)}}const{toString:F0}=Object.prototype,{getPrototypeOf:ic}=Object,Pl=(e=>t=>{const n=F0.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),jt=e=>(e=e.toLowerCase(),t=>Pl(t)===e),Tl=e=>t=>typeof t===e,{isArray:kr}=Array,mi=Tl("undefined");function H0(e){return e!==null&&!mi(e)&&e.constructor!==null&&!mi(e.constructor)&&ht(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const sm=jt("ArrayBuffer");function U0(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&sm(e.buffer),t}const B0=Tl("string"),ht=Tl("function"),am=Tl("number"),bl=e=>e!==null&&typeof e=="object",W0=e=>e===!0||e===!1,co=e=>{if(Pl(e)!=="object")return!1;const t=ic(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},V0=jt("Date"),K0=jt("File"),G0=jt("Blob"),Q0=jt("FileList"),q0=e=>bl(e)&&ht(e.pipe),Y0=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||ht(e.append)&&((t=Pl(e))==="formdata"||t==="object"&&ht(e.toString)&&e.toString()==="[object FormData]"))},X0=jt("URLSearchParams"),J0=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ei(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),kr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),l=o.length;let s;for(r=0;r<l;r++)s=o[r],t.call(null,e[s],s,e)}}function um(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const cm=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),fm=e=>!mi(e)&&e!==cm;function ja(){const{caseless:e}=fm(this)&&this||{},t={},n=(r,i)=>{const o=e&&um(t,i)||i;co(t[o])&&co(r)?t[o]=ja(t[o],r):co(r)?t[o]=ja({},r):kr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ei(arguments[r],n);return t}const Z0=(e,t,n,{allOwnKeys:r}={})=>(Ei(t,(i,o)=>{n&&ht(i)?e[o]=lm(i,n):e[o]=i},{allOwnKeys:r}),e),e1=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),t1=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},n1=(e,t,n,r)=>{let i,o,l;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)l=i[o],(!r||r(l,e,t))&&!s[l]&&(t[l]=e[l],s[l]=!0);e=n!==!1&&ic(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},r1=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},i1=e=>{if(!e)return null;if(kr(e))return e;let t=e.length;if(!am(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},o1=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ic(Uint8Array)),l1=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},s1=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},a1=jt("HTMLFormElement"),u1=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Vf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),c1=jt("RegExp"),dm=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ei(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},f1=e=>{dm(e,(t,n)=>{if(ht(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(ht(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},d1=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return kr(e)?r(e):r(String(e).split(t)),n},p1=()=>{},h1=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ys="abcdefghijklmnopqrstuvwxyz",Kf="0123456789",pm={DIGIT:Kf,ALPHA:ys,ALPHA_DIGIT:ys+ys.toUpperCase()+Kf},m1=(e=16,t=pm.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function g1(e){return!!(e&&ht(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const v1=e=>{const t=new Array(10),n=(r,i)=>{if(bl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=kr(r)?[]:{};return Ei(r,(l,s)=>{const a=n(l,i+1);!mi(a)&&(o[s]=a)}),t[i]=void 0,o}}return r};return n(e,0)},y1=jt("AsyncFunction"),w1=e=>e&&(bl(e)||ht(e))&&ht(e.then)&&ht(e.catch),R={isArray:kr,isArrayBuffer:sm,isBuffer:H0,isFormData:Y0,isArrayBufferView:U0,isString:B0,isNumber:am,isBoolean:W0,isObject:bl,isPlainObject:co,isUndefined:mi,isDate:V0,isFile:K0,isBlob:G0,isRegExp:c1,isFunction:ht,isStream:q0,isURLSearchParams:X0,isTypedArray:o1,isFileList:Q0,forEach:Ei,merge:ja,extend:Z0,trim:J0,stripBOM:e1,inherits:t1,toFlatObject:n1,kindOf:Pl,kindOfTest:jt,endsWith:r1,toArray:i1,forEachEntry:l1,matchAll:s1,isHTMLForm:a1,hasOwnProperty:Vf,hasOwnProp:Vf,reduceDescriptors:dm,freezeMethods:f1,toObjectSet:d1,toCamelCase:u1,noop:p1,toFiniteNumber:h1,findKey:um,global:cm,isContextDefined:fm,ALPHABET:pm,generateString:m1,isSpecCompliantForm:g1,toJSONObject:v1,isAsyncFn:y1,isThenable:w1};function ee(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}R.inherits(ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const hm=ee.prototype,mm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{mm[e]={value:e}});Object.defineProperties(ee,mm);Object.defineProperty(hm,"isAxiosError",{value:!0});ee.from=(e,t,n,r,i,o)=>{const l=Object.create(hm);return R.toFlatObject(e,l,function(a){return a!==Error.prototype},s=>s!=="isAxiosError"),ee.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,o&&Object.assign(l,o),l};const S1=null;function Na(e){return R.isPlainObject(e)||R.isArray(e)}function gm(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function Gf(e,t,n){return e?e.concat(t).map(function(i,o){return i=gm(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function x1(e){return R.isArray(e)&&!e.some(Na)}const k1=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function Ll(e,t,n){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,x){return!R.isUndefined(x[y])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,l=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&R.isSpecCompliantForm(t);if(!R.isFunction(i))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(R.isDate(v))return v.toISOString();if(!a&&R.isBlob(v))throw new ee("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(v)||R.isTypedArray(v)?a&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function c(v,y,x){let p=v;if(v&&!x&&typeof v=="object"){if(R.endsWith(y,"{}"))y=r?y:y.slice(0,-2),v=JSON.stringify(v);else if(R.isArray(v)&&x1(v)||(R.isFileList(v)||R.endsWith(y,"[]"))&&(p=R.toArray(v)))return y=gm(y),p.forEach(function(m,S){!(R.isUndefined(m)||m===null)&&t.append(l===!0?Gf([y],S,o):l===null?y:y+"[]",u(m))}),!1}return Na(v)?!0:(t.append(Gf(x,y,o),u(v)),!1)}const f=[],h=Object.assign(k1,{defaultVisitor:c,convertValue:u,isVisitable:Na});function w(v,y){if(!R.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(v),R.forEach(v,function(p,d){(!(R.isUndefined(p)||p===null)&&i.call(t,p,R.isString(d)?d.trim():d,y,h))===!0&&w(p,y?y.concat(d):[d])}),f.pop()}}if(!R.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Qf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function oc(e,t){this._pairs=[],e&&Ll(e,this,t)}const vm=oc.prototype;vm.append=function(t,n){this._pairs.push([t,n])};vm.toString=function(t){const n=t?function(r){return t.call(this,r,Qf)}:Qf;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function O1(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ym(e,t,n){if(!t)return e;const r=n&&n.encode||O1,i=n&&n.serialize;let o;if(i?o=i(t,n):o=R.isURLSearchParams(t)?t.toString():new oc(t,n).toString(r),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class C1{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(r){r!==null&&t(r)})}}const qf=C1,wm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},E1=typeof URLSearchParams<"u"?URLSearchParams:oc,_1=typeof FormData<"u"?FormData:null,R1=typeof Blob<"u"?Blob:null,P1=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),T1=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Tt={isBrowser:!0,classes:{URLSearchParams:E1,FormData:_1,Blob:R1},isStandardBrowserEnv:P1,isStandardBrowserWebWorkerEnv:T1,protocols:["http","https","file","blob","url","data"]};function b1(e,t){return Ll(e,new Tt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Tt.isNode&&R.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function L1(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function j1(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Sm(e){function t(n,r,i,o){let l=n[o++];const s=Number.isFinite(+l),a=o>=n.length;return l=!l&&R.isArray(i)?i.length:l,a?(R.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!s):((!i[l]||!R.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],o)&&R.isArray(i[l])&&(i[l]=j1(i[l])),!s)}if(R.isFormData(e)&&R.isFunction(e.entries)){const n={};return R.forEachEntry(e,(r,i)=>{t(L1(r),i,n,0)}),n}return null}const N1={"Content-Type":void 0};function A1(e,t,n){if(R.isString(e))try{return(t||JSON.parse)(e),R.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const jl={transitional:wm,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=R.isObject(t);if(o&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return i&&i?JSON.stringify(Sm(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return b1(t,this.formSerializer).toString();if((s=R.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Ll(s?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),A1(t)):t}],transformResponse:[function(t){const n=this.transitional||jl.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&R.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(l)throw s.name==="SyntaxError"?ee.from(s,ee.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Tt.classes.FormData,Blob:Tt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};R.forEach(["delete","get","head"],function(t){jl.headers[t]={}});R.forEach(["post","put","patch"],function(t){jl.headers[t]=R.merge(N1)});const lc=jl,z1=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),D1=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&z1[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Yf=Symbol("internals");function zr(e){return e&&String(e).trim().toLowerCase()}function fo(e){return e===!1||e==null?e:R.isArray(e)?e.map(fo):String(e)}function I1(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const $1=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ws(e,t,n,r,i){if(R.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!R.isString(t)){if(R.isString(r))return t.indexOf(r)!==-1;if(R.isRegExp(r))return r.test(t)}}function M1(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function F1(e,t){const n=R.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,l){return this[r].call(this,t,i,o,l)},configurable:!0})})}class Nl{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,a,u){const c=zr(a);if(!c)throw new Error("header name must be a non-empty string");const f=R.findKey(i,c);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||a]=fo(s))}const l=(s,a)=>R.forEach(s,(u,c)=>o(u,c,a));return R.isPlainObject(t)||t instanceof this.constructor?l(t,n):R.isString(t)&&(t=t.trim())&&!$1(t)?l(D1(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=zr(t),t){const r=R.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return I1(i);if(R.isFunction(n))return n.call(this,i,r);if(R.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=zr(t),t){const r=R.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ws(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(l){if(l=zr(l),l){const s=R.findKey(r,l);s&&(!n||ws(r,r[s],s,n))&&(delete r[s],i=!0)}}return R.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||ws(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return R.forEach(this,(i,o)=>{const l=R.findKey(r,o);if(l){n[l]=fo(i),delete n[o];return}const s=t?M1(o):String(o).trim();s!==o&&delete n[o],n[s]=fo(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return R.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&R.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Yf]=this[Yf]={accessors:{}}).accessors,i=this.prototype;function o(l){const s=zr(l);r[s]||(F1(i,l),r[s]=!0)}return R.isArray(t)?t.forEach(o):o(t),this}}Nl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);R.freezeMethods(Nl.prototype);R.freezeMethods(Nl);const $t=Nl;function Ss(e,t){const n=this||lc,r=t||n,i=$t.from(r.headers);let o=r.data;return R.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function xm(e){return!!(e&&e.__CANCEL__)}function _i(e,t,n){ee.call(this,e??"canceled",ee.ERR_CANCELED,t,n),this.name="CanceledError"}R.inherits(_i,ee,{__CANCEL__:!0});function H1(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const U1=Tt.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,l,s){const a=[];a.push(n+"="+encodeURIComponent(r)),R.isNumber(i)&&a.push("expires="+new Date(i).toGMTString()),R.isString(o)&&a.push("path="+o),R.isString(l)&&a.push("domain="+l),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function B1(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function W1(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function km(e,t){return e&&!B1(t)?W1(e,t):t}const V1=Tt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let l=o;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const s=R.isString(l)?i(l):l;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function K1(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function G1(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,l;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),c=r[o];l||(l=u),n[i]=a,r[i]=u;let f=o,h=0;for(;f!==i;)h+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-l<t)return;const w=c&&u-c;return w?Math.round(h*1e3/w):void 0}}function Xf(e,t){let n=0;const r=G1(50,250);return i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,s=o-n,a=r(s),u=o<=l;n=o;const c={loaded:o,total:l,progress:l?o/l:void 0,bytes:s,rate:a||void 0,estimated:a&&l&&u?(l-o)/a:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const Q1=typeof XMLHttpRequest<"u",q1=Q1&&function(e){return new Promise(function(n,r){let i=e.data;const o=$t.from(e.headers).normalize(),l=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}R.isFormData(i)&&(Tt.isStandardBrowserEnv||Tt.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(w+":"+v))}const c=km(e.baseURL,e.url);u.open(e.method.toUpperCase(),ym(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const w=$t.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),y={data:!l||l==="text"||l==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:w,config:e,request:u};H1(function(p){n(p),a()},function(p){r(p),a()},y),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new ee("Request aborted",ee.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new ee("Network Error",ee.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||wm;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new ee(v,y.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,e,u)),u=null},Tt.isStandardBrowserEnv){const w=(e.withCredentials||V1(c))&&e.xsrfCookieName&&U1.read(e.xsrfCookieName);w&&o.set(e.xsrfHeaderName,w)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&R.forEach(o.toJSON(),function(v,y){u.setRequestHeader(y,v)}),R.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),l&&l!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Xf(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Xf(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=w=>{u&&(r(!w||w.type?new _i(null,e,u):w),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const h=K1(c);if(h&&Tt.protocols.indexOf(h)===-1){r(new ee("Unsupported protocol "+h+":",ee.ERR_BAD_REQUEST,e));return}u.send(i||null)})},po={http:S1,xhr:q1};R.forEach(po,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Y1={getAdapter:e=>{e=R.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=R.isString(n)?po[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new ee(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(R.hasOwnProp(po,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!R.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:po};function xs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _i(null,e)}function Jf(e){return xs(e),e.headers=$t.from(e.headers),e.data=Ss.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Y1.getAdapter(e.adapter||lc.adapter)(e).then(function(r){return xs(e),r.data=Ss.call(e,e.transformResponse,r),r.headers=$t.from(r.headers),r},function(r){return xm(r)||(xs(e),r&&r.response&&(r.response.data=Ss.call(e,e.transformResponse,r.response),r.response.headers=$t.from(r.response.headers))),Promise.reject(r)})}const Zf=e=>e instanceof $t?e.toJSON():e;function mr(e,t){t=t||{};const n={};function r(u,c,f){return R.isPlainObject(u)&&R.isPlainObject(c)?R.merge.call({caseless:f},u,c):R.isPlainObject(c)?R.merge({},c):R.isArray(c)?c.slice():c}function i(u,c,f){if(R.isUndefined(c)){if(!R.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function o(u,c){if(!R.isUndefined(c))return r(void 0,c)}function l(u,c){if(R.isUndefined(c)){if(!R.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,f){if(f in t)return r(u,c);if(f in e)return r(void 0,u)}const a={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:s,headers:(u,c)=>i(Zf(u),Zf(c),!0)};return R.forEach(Object.keys(Object.assign({},e,t)),function(c){const f=a[c]||i,h=f(e[c],t[c],c);R.isUndefined(h)&&f!==s||(n[c]=h)}),n}const Om="1.4.0",sc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{sc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ed={};sc.transitional=function(t,n,r){function i(o,l){return"[Axios v"+Om+"] Transitional option '"+o+"'"+l+(r?". "+r:"")}return(o,l,s)=>{if(t===!1)throw new ee(i(l," has been removed"+(n?" in "+n:"")),ee.ERR_DEPRECATED);return n&&!ed[l]&&(ed[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,l,s):!0}};function X1(e,t,n){if(typeof e!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],l=t[o];if(l){const s=e[o],a=s===void 0||l(s,o,e);if(a!==!0)throw new ee("option "+o+" must be "+a,ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ee("Unknown option "+o,ee.ERR_BAD_OPTION)}}const Aa={assertOptions:X1,validators:sc},Kt=Aa.validators;class Uo{constructor(t){this.defaults=t,this.interceptors={request:new qf,response:new qf}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=mr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Aa.assertOptions(r,{silentJSONParsing:Kt.transitional(Kt.boolean),forcedJSONParsing:Kt.transitional(Kt.boolean),clarifyTimeoutError:Kt.transitional(Kt.boolean)},!1),i!=null&&(R.isFunction(i)?n.paramsSerializer={serialize:i}:Aa.assertOptions(i,{encode:Kt.function,serialize:Kt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l;l=o&&R.merge(o.common,o[n.method]),l&&R.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=$t.concat(l,o);const s=[];let a=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(a=a&&y.synchronous,s.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let c,f=0,h;if(!a){const v=[Jf.bind(this),void 0];for(v.unshift.apply(v,s),v.push.apply(v,u),h=v.length,c=Promise.resolve(n);f<h;)c=c.then(v[f++],v[f++]);return c}h=s.length;let w=n;for(f=0;f<h;){const v=s[f++],y=s[f++];try{w=v(w)}catch(x){y.call(this,x);break}}try{c=Jf.call(this,w)}catch(v){return Promise.reject(v)}for(f=0,h=u.length;f<h;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=mr(this.defaults,t);const n=km(t.baseURL,t.url);return ym(n,t.params,t.paramsSerializer)}}R.forEach(["delete","get","head","options"],function(t){Uo.prototype[t]=function(n,r){return this.request(mr(r||{},{method:t,url:n,data:(r||{}).data}))}});R.forEach(["post","put","patch"],function(t){function n(r){return function(o,l,s){return this.request(mr(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:l}))}}Uo.prototype[t]=n(),Uo.prototype[t+"Form"]=n(!0)});const ho=Uo;class ac{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const l=new Promise(s=>{r.subscribe(s),o=s}).then(i);return l.cancel=function(){r.unsubscribe(o)},l},t(function(o,l,s){r.reason||(r.reason=new _i(o,l,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ac(function(i){t=i}),cancel:t}}}const J1=ac;function Z1(e){return function(n){return e.apply(null,n)}}function ew(e){return R.isObject(e)&&e.isAxiosError===!0}const za={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(za).forEach(([e,t])=>{za[t]=e});const tw=za;function Cm(e){const t=new ho(e),n=lm(ho.prototype.request,t);return R.extend(n,ho.prototype,t,{allOwnKeys:!0}),R.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Cm(mr(e,i))},n}const Te=Cm(lc);Te.Axios=ho;Te.CanceledError=_i;Te.CancelToken=J1;Te.isCancel=xm;Te.VERSION=Om;Te.toFormData=Ll;Te.AxiosError=ee;Te.Cancel=Te.CanceledError;Te.all=function(t){return Promise.all(t)};Te.spread=Z1;Te.isAxiosError=ew;Te.mergeConfig=mr;Te.AxiosHeaders=$t;Te.formToJSON=e=>Sm(R.isHTMLForm(e)?new FormData(e):e);Te.HttpStatusCode=tw;Te.default=Te;const nw=Te,Ze=nw.create({baseURL:"https://foodexplorer-api-0fpb.onrender.com"}),Em=_.createContext({});function rw({children:e}){const[t,n]=_.useState({}),[r,i]=_.useState(!1);async function o({email:s,password:a}){try{const u=await Ze.post("/sessions",{email:s,password:a}),{user:c,role:f,token:h}=u.data;localStorage.setItem("@foodexplorer:user",JSON.stringify(c)),localStorage.setItem("@foodexplorer:role",JSON.stringify(f)),localStorage.setItem("@foodexplorer:token",h),Ze.defaults.headers.common.Authorization=`Bearer ${h}`,n({user:c,role:f,token:h}),i(!1)}catch(u){u.response?alert(u.response.data.message):alert("Não foi possível entrar."),i(!1)}}function l(){localStorage.removeItem("@foodexplorer:token"),localStorage.removeItem("@foodexplorer:user"),localStorage.removeItem("@foodexplorer:role"),n({})}return _.useEffect(()=>{const s=localStorage.getItem("@foodexplorer:token"),a=localStorage.getItem("@foodexplorer:user"),u=localStorage.getItem("@foodexplorer:role");s&&a&&(Ze.defaults.headers.common.Authorization=`Bearer ${s}`,n({token:s,user:JSON.parse(a),role:JSON.parse(u)}))},[]),g.jsx(Em.Provider,{value:{signIn:o,signOut:l,loading:r,setLoading:i,user:t.user,role:t.role},children:e})}function hn(){return _.useContext(Em)}/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gi(){return gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gi.apply(this,arguments)}var en;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(en||(en={}));const td="popstate";function iw(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return Da("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Bo(i)}return lw(t,n,null,e)}function Ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function uc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ow(){return Math.random().toString(36).substr(2,8)}function nd(e,t){return{usr:e.state,key:e.key,idx:t}}function Da(e,t,n,r){return n===void 0&&(n=null),gi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Or(t):t,{state:n,key:t&&t.key||r||ow()})}function Bo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Or(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function lw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=en.Pop,a=null,u=c();u==null&&(u=0,l.replaceState(gi({},l.state,{idx:u}),""));function c(){return(l.state||{idx:null}).idx}function f(){s=en.Pop;let x=c(),p=x==null?null:x-u;u=x,a&&a({action:s,location:y.location,delta:p})}function h(x,p){s=en.Push;let d=Da(y.location,x,p);n&&n(d,x),u=c()+1;let m=nd(d,u),S=y.createHref(d);try{l.pushState(m,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(S)}o&&a&&a({action:s,location:y.location,delta:1})}function w(x,p){s=en.Replace;let d=Da(y.location,x,p);n&&n(d,x),u=c();let m=nd(d,u),S=y.createHref(d);l.replaceState(m,"",S),o&&a&&a({action:s,location:y.location,delta:0})}function v(x){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof x=="string"?x:Bo(x);return Ee(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let y={get action(){return s},get location(){return e(i,l)},listen(x){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(td,f),a=x,()=>{i.removeEventListener(td,f),a=null}},createHref(x){return t(i,x)},createURL:v,encodeLocation(x){let p=v(x);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:w,go(x){return l.go(x)}};return y}var rd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(rd||(rd={}));function sw(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Or(t):t,i=cc(r.pathname||"/",n);if(i==null)return null;let o=_m(e);aw(o);let l=null;for(let s=0;l==null&&s<o.length;++s)l=vw(o[s],Sw(i));return l}function _m(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let a={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};a.relativePath.startsWith("/")&&(Ee(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=fn([r,a.relativePath]),c=n.concat(a);o.children&&o.children.length>0&&(Ee(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),_m(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:mw(u,o.index),routesMeta:c})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let a of Rm(o.path))i(o,l,a)}),t}function Rm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Rm(r.join("/")),s=[];return s.push(...l.map(a=>a===""?o:[o,a].join("/"))),i&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function aw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:gw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const uw=/^:\w+$/,cw=3,fw=2,dw=1,pw=10,hw=-2,id=e=>e==="*";function mw(e,t){let n=e.split("/"),r=n.length;return n.some(id)&&(r+=hw),t&&(r+=fw),n.filter(i=>!id(i)).reduce((i,o)=>i+(uw.test(o)?cw:o===""?dw:pw),r)}function gw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function vw(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],a=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=yw({path:s.relativePath,caseSensitive:s.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;o.push({params:r,pathname:fn([i,c.pathname]),pathnameBase:Cw(fn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=fn([i,c.pathnameBase]))}return o}function yw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ww(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=s[f]||"";l=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=xw(s[f]||"",c),u},{}),pathname:o,pathnameBase:l,pattern:e}}function ww(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),uc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Sw(e){try{return decodeURI(e)}catch(t){return uc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function xw(e,t){try{return decodeURIComponent(e)}catch(n){return uc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function cc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function kw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Or(e):e;return{pathname:n?n.startsWith("/")?n:Ow(n,t):t,search:Ew(r),hash:_w(i)}}function Ow(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ks(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Pm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Tm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Or(e):(i=gi({},e),Ee(!i.pathname||!i.pathname.includes("?"),ks("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),ks("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),ks("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(r||l==null)s=n;else{let f=t.length-1;if(l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}s=f>=0?t[f]:"/"}let a=kw(i,s),u=l&&l!=="/"&&l.endsWith("/"),c=(o||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const fn=e=>e.join("/").replace(/\/\/+/g,"/"),Cw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ew=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_w=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Rw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const bm=["post","put","patch","delete"];new Set(bm);const Pw=["get",...bm];new Set(Pw);/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wo(){return Wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wo.apply(this,arguments)}const fc=_.createContext(null),Tw=_.createContext(null),Cr=_.createContext(null),Al=_.createContext(null),wn=_.createContext({outlet:null,matches:[],isDataRoute:!1}),Lm=_.createContext(null);function bw(e,t){let{relative:n}=t===void 0?{}:t;Ri()||Ee(!1);let{basename:r,navigator:i}=_.useContext(Cr),{hash:o,pathname:l,search:s}=Am(e,{relative:n}),a=l;return r!=="/"&&(a=l==="/"?r:fn([r,l])),i.createHref({pathname:a,search:s,hash:o})}function Ri(){return _.useContext(Al)!=null}function zl(){return Ri()||Ee(!1),_.useContext(Al).location}function jm(e){_.useContext(Cr).static||_.useLayoutEffect(e)}function $n(){let{isDataRoute:e}=_.useContext(wn);return e?Bw():Lw()}function Lw(){Ri()||Ee(!1);let e=_.useContext(fc),{basename:t,navigator:n}=_.useContext(Cr),{matches:r}=_.useContext(wn),{pathname:i}=zl(),o=JSON.stringify(Pm(r).map(a=>a.pathnameBase)),l=_.useRef(!1);return jm(()=>{l.current=!0}),_.useCallback(function(a,u){if(u===void 0&&(u={}),!l.current)return;if(typeof a=="number"){n.go(a);return}let c=Tm(a,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:fn([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}function Nm(){let{matches:e}=_.useContext(wn),t=e[e.length-1];return t?t.params:{}}function Am(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=_.useContext(wn),{pathname:i}=zl(),o=JSON.stringify(Pm(r).map(l=>l.pathnameBase));return _.useMemo(()=>Tm(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function jw(e,t){return Nw(e,t)}function Nw(e,t,n){Ri()||Ee(!1);let{navigator:r}=_.useContext(Cr),{matches:i}=_.useContext(wn),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let a=zl(),u;if(t){var c;let y=typeof t=="string"?Or(t):t;s==="/"||(c=y.pathname)!=null&&c.startsWith(s)||Ee(!1),u=y}else u=a;let f=u.pathname||"/",h=s==="/"?f:f.slice(s.length)||"/",w=sw(e,{pathname:h}),v=$w(w&&w.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:fn([s,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?s:fn([s,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&v?_.createElement(Al.Provider,{value:{location:Wo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:en.Pop}},v):v}function Aw(){let e=Uw(),t=Rw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:i},n):null,o)}const zw=_.createElement(Aw,null);class Dw extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?_.createElement(wn.Provider,{value:this.props.routeContext},_.createElement(Lm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Iw(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext(fc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(wn.Provider,{value:t},r)}function $w(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let s=o.findIndex(a=>a.route.id&&(l==null?void 0:l[a.route.id]));s>=0||Ee(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,a,u)=>{let c=a.route.id?l==null?void 0:l[a.route.id]:null,f=null;n&&(f=a.route.errorElement||zw);let h=t.concat(o.slice(0,u+1)),w=()=>{let v;return c?v=f:a.route.Component?v=_.createElement(a.route.Component,null):a.route.element?v=a.route.element:v=s,_.createElement(Iw,{match:a,routeContext:{outlet:s,matches:h,isDataRoute:n!=null},children:v})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?_.createElement(Dw,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:w(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):w()},null)}var Ia;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Ia||(Ia={}));var vi;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(vi||(vi={}));function Mw(e){let t=_.useContext(fc);return t||Ee(!1),t}function Fw(e){let t=_.useContext(Tw);return t||Ee(!1),t}function Hw(e){let t=_.useContext(wn);return t||Ee(!1),t}function zm(e){let t=Hw(),n=t.matches[t.matches.length-1];return n.route.id||Ee(!1),n.route.id}function Uw(){var e;let t=_.useContext(Lm),n=Fw(vi.UseRouteError),r=zm(vi.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Bw(){let{router:e}=Mw(Ia.UseNavigateStable),t=zm(vi.UseNavigateStable),n=_.useRef(!1);return jm(()=>{n.current=!0}),_.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Wo({fromRouteId:t},o)))},[e,t])}function En(e){Ee(!1)}function Ww(e){let{basename:t="/",children:n=null,location:r,navigationType:i=en.Pop,navigator:o,static:l=!1}=e;Ri()&&Ee(!1);let s=t.replace(/^\/*/,"/"),a=_.useMemo(()=>({basename:s,navigator:o,static:l}),[s,o,l]);typeof r=="string"&&(r=Or(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:w="default"}=r,v=_.useMemo(()=>{let y=cc(u,s);return y==null?null:{location:{pathname:y,search:c,hash:f,state:h,key:w},navigationType:i}},[s,u,c,f,h,w,i]);return v==null?null:_.createElement(Cr.Provider,{value:a},_.createElement(Al.Provider,{children:n,value:v}))}function Dm(e){let{children:t,location:n}=e;return jw($a(t),n)}var od;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(od||(od={}));new Promise(()=>{});function $a(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let o=[...t,i];if(r.type===_.Fragment){n.push.apply(n,$a(r.props.children,o));return}r.type!==En&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=$a(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ma(){return Ma=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ma.apply(this,arguments)}function Vw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Kw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Gw(e,t){return e.button===0&&(!t||t==="_self")&&!Kw(e)}const Qw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],qw="startTransition",ld=bg[qw];function Yw(e){let{basename:t,children:n,future:r,window:i}=e,o=_.useRef();o.current==null&&(o.current=iw({window:i,v5Compat:!0}));let l=o.current,[s,a]=_.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},c=_.useCallback(f=>{u&&ld?ld(()=>a(f)):a(f)},[a,u]);return _.useLayoutEffect(()=>l.listen(c),[l,c]),_.createElement(Ww,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l})}const Xw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Jw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dc=_.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:a,to:u,preventScrollReset:c}=t,f=Vw(t,Qw),{basename:h}=_.useContext(Cr),w,v=!1;if(typeof u=="string"&&Jw.test(u)&&(w=u,Xw))try{let d=new URL(window.location.href),m=u.startsWith("//")?new URL(d.protocol+u):new URL(u),S=cc(m.pathname,h);m.origin===d.origin&&S!=null?u=S+m.search+m.hash:v=!0}catch{}let y=bw(u,{relative:i}),x=Zw(u,{replace:l,state:s,target:a,preventScrollReset:c,relative:i});function p(d){r&&r(d),d.defaultPrevented||x(d)}return _.createElement("a",Ma({},f,{href:w||y,onClick:v||o?r:p,ref:n,target:a}))});var sd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(sd||(sd={}));var ad;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ad||(ad={}));function Zw(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l}=t===void 0?{}:t,s=$n(),a=zl(),u=Am(e,{relative:l});return _.useCallback(c=>{if(Gw(c,n)){c.preventDefault();let f=r!==void 0?r:Bo(a)===Bo(u);s(e,{replace:f,state:i,preventScrollReset:o,relative:l})}},[a,s,u,r,i,n,e,o,l])}const eS=J.div`
  width: 100%;
  height: 100vh;

  background-color: ${({theme:e})=>e.COLORS.DARK_400};
  `,tS=J.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: right;

  height: 12rem;
  width: 90%;
  border-radius: .3rem;
  margin: 15.8rem auto 0;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

  .mobile {
    position: absolute;
    bottom: 0;
    left: -2.4rem;
    width: 19rem;
    height: 15rem;
  }

  .desktop {
    display: none;
    position: absolute;
    bottom: -1.3rem;
    left: -7rem;
    width: clamp(50rem, 50vw, 63.2rem);
  }

  .bannerText {
    max-width: 23rem;
    margin-right: 3%;
    z-index: 2;
    animation: slideIn 1s ease-in-out;


    > h1 {
    color: ${({theme:e})=>e.COLORS.LIGHT_300};
    font-size: clamp(1.7rem, 4vw, 4rem);
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    line-height: 140%;
  }

  > P {
    color: ${({theme:e})=>e.COLORS.LIGHT_300};
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 140%; 
  }

  @keyframes slideIn {
  0% {
    transform: translateX(-80%);
  }
  100% {
    transform: translateX(0);
  }
}

  @media (min-width: 980px) {
   margin-right: 10rem;
  }
  
  @media (min-width: 540px) {
    max-width: 100%;
  }

  @media (max-width: 450px) {
    max-width: 19rem;
  }
  

  @media (max-width: 330px) {
    margin-right: 0%;
  }
  }


  @media (max-width: 1145px) {
    .desktop {
      bottom: -1rem;
    }
  }
 
  @media (min-width: 760px) {
    height: 26rem;
    width: 85%;
    border-radius: .8rem;
    margin: 26.8rem auto 0;

    .mobile {
      display: none;
    }

    .desktop {
      display: inherit;
    }
  }
`,nS=J.div`
  height: 100%;
  overflow-y: auto;
  padding-bottom: 8rem;
  `,Im="/assets/search-210e562f.svg",rS=J.header`
  z-index: 999;
  height: 10.4rem;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
 
  background-color: ${({theme:e})=>e.COLORS.DARK_600};
  
  gap: 3.2rem;

  padding: 0 12.3rem;

.searchBar {
  width: 100%;
  position: relative;

.list::-webkit-scrollbar {
    width: .4rem;
  }

.list {
    position: absolute;
    width: 100%;
    max-height: 14.8rem;
    overflow-y: auto;
    background-color: ${({theme:e})=>e.COLORS.DARK_600};

    > li:last-child {
      border-bottom: none;
    } 
    
    > li {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      display: block;
      border-bottom: 2px solid;
      border-color: ${({theme:e})=>e.COLORS.DARK_1000};

    > button {
      background-color: transparent;
      border: none;

      > p {
      margin-top: .6rem;
      margin-bottom: .6rem;
      color: ${({theme:e})=>e.COLORS.LIGHT_300};
      font-size: 1.6rem;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 300;
    }
  }
}
    
}
}

.logoHeader {
    
    text-align: center;
    display: flex;
    align-items: center;
    width: 44rem;
    cursor: pointer;

.admin {
     display: flex;
     text-align: right;
     flex-direction: column;
     font-family: 'Roboto', sans-serif;
     margin-top: 1.5rem;

    > span {
        font-size: clamp(1.8rem, 2vw, 2.4rem);
        font-weight: 700;
    }

    > small {
      color: ${({theme:e})=>e.COLORS.CAKE_200};
      font-size: 1.2rem;
      
    }

    @media (max-width: 993px) {
      flex-direction: row;
      margin-top: 0;

      > small {
        align-self: center;
        margin-left: .8rem;
        margin-right: 1.8rem;
      }
    }
    }

    > img {
      margin-right: 1.1rem;
      width: clamp(2.2rem, 2vw, 3rem);
    }

    > span {
        font-family: 'Roboto', sans-serif;
        font-size: clamp(1.8rem, 2vw, 2.4rem);
        font-weight: 700;
    }
  }


  @media (max-width: 993px) {
    padding: 0 2.8rem;

  .searchBar {
      display: none;
    }

  .logoHeader {
    width: 100%;
    justify-content: center;
    margin-left: 5.4rem;
    
    }
  }
`,ud=J(dc)`
  color: ${({theme:e})=>e.COLORS.LIGHT_100};
  background-color: ${({theme:e})=>e.COLORS.TOMATO_100};
  
  border: none;
  border-radius: .5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 50%;
  height: 5.6rem;

  font-family: 'Poppins', sans-serif;
  font-weight: 100;
  font-size: 1.4rem;

  > img {
    margin-right: 1.1rem;
  }

  @media (max-width: 993px) {
    display: none;
  }
`,iS=J.button`
 display: none;

 @media (max-width: 993px) {
    display: inherit;
    border: none;
    background-color: transparent;
    position: relative;

    > p {
      position: absolute;
      right: -8px;
      top: -8px;

      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: ${({theme:e})=>e.COLORS.TOMATO_100};
      
      color: ${({theme:e})=>e.COLORS.LIGHT_100};
      font-size: 1.4rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      line-height: 2.4rem;
    }
  }
`,oS=J.input`
  width: 100%;
  height: 4.8rem;

  border: none;
  border-radius: .5rem;

  outline: none;

  text-align: center;
  color: ${({theme:e})=>e.COLORS.LIGHT_100};
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: clamp(1.4rem, 1vw, 1.6rem);;

  background-color: ${({theme:e})=>e.COLORS.DARK_900};

  background-image: url(${Im});
  background-repeat: no-repeat;
  background-position:  5% center;

  @media (max-width: 993px) {
    display: none;
  }
`,lS=J.button`
  background-color: transparent;
  border: none;

  @media (max-width: 993px) {
    display: none;
  }
`,sS=J.div`
  display: none;

  @media (max-width: 993px) {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  transition: width 0.2s;
  background-color: ${({theme:e})=>e.COLORS.DARK_400};
  z-index: 1000;

  &.collapsed {
    width: 0;
  }

}
`,aS=J.div`
  position: absolute;
  top: 4.2rem;
  left: 2.8rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,uS=J.div`
  > .sidebarHeader {
  height: 10.4rem;
  display: flex;
  align-items: center;
  background-color: ${({theme:e})=>e.COLORS.DARK_600};

  > p {
    margin-left: 6.2rem;
    font-size: 2.1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
}

.list {
  width:90%;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  overflow-y: auto;
  flex-direction: column;
 
  > ul {
    margin-bottom: 100%;

    > li:nth-child(1) > button > p {
    margin-top: 4.6rem;
  }

  .dishList {
        color: ${({theme:e})=>e.COLORS.CAKE_200};
  }
  }
}

.list > ul > li {
    
    display: block;
    border-bottom: 2px solid;
    border-color: ${({theme:e})=>e.COLORS.DARK_1000};

    > button {
      background-color: transparent;
      border: none;

      > p {
      margin-top: 1rem;
      margin-bottom: 1rem;
      color: ${({theme:e})=>e.COLORS.LIGHT_300};
      font-size: 2.4rem;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 300;
    }
    }
  }

  @media (max-width: 993px) {
    .list::-webkit-scrollbar {
    width: 0rem;
  }
  }
`,cS=J.input`
  width: 90%;
  height: 4.8rem;
  margin-left: auto;
  margin-right: auto;
  display: block;

  margin-top: 3.6rem;

  border: none;
  border-radius: 5px;

  text-align: center;
  color: ${({theme:e})=>e.COLORS.LIGHT_100};
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 1.6rem;

  background-color: ${({theme:e})=>e.COLORS.DARK_900};

  background-image: url(${Im});
  background-repeat: no-repeat;
  background-position:  4% center;

  @media (max-width: 350px) {
    font-size: 1.4rem;
  }
  
`,fS="/assets/menu-f4089755.svg",dS="/assets/close-f9cea9a8.svg",pS=()=>{const{role:e}=hn(),t=parseInt(e),[n,r]=_.useState(!0),[i,o]=_.useState(!1),[l,s]=_.useState(""),[a,u]=_.useState([]);_.useEffect(()=>{(async()=>{l!==""?Ze.get("/dishes/"+l).then(p=>{u(p.data)}).catch(p=>{console.log(p)}):u([])})()},[l]);const c=()=>{r(!n),o(!i)},{signOut:f}=hn(),h=()=>{window.confirm("Tem certeza que deseja sair?")&&(f(),window.location.href="/")},w=$n();function v(x){r(!0),o(!1),w(`/details/${x}`)}const y=()=>{w("/managedishes"),r(!0),o(!1),window.location.reload()};return g.jsxs(sS,{className:n?"collapsed":"",children:[g.jsx(aS,{onClick:c,children:g.jsx("button",{style:{background:"transparent",border:"none",padding:"0"},children:i?g.jsx("img",{src:dS,alt:"Fechar"}):g.jsx("img",{src:fS,alt:"Menu"})})}),!n&&g.jsxs(uS,{children:[g.jsx("div",{className:"sidebarHeader",children:g.jsx("p",{children:"Menu"})}),g.jsx(cS,{placeholder:"Busque por pratos ou ingredientes",type:"text",value:l,onChange:x=>{s(x.target.value)}}),g.jsx("div",{className:"list",children:g.jsxs("ul",{children:[a.map((x,p)=>g.jsx("li",{onClick:()=>v(x.id),children:g.jsx("button",{children:g.jsx("p",{className:"dishList",children:x.dishname})})},p)),t===2&&g.jsx("li",{children:g.jsx("button",{onClick:y,children:g.jsx("p",{children:"Novo Prato"})})}),g.jsx("li",{children:g.jsx("button",{onClick:h,children:g.jsx("p",{children:"Sair"})})})]})})]})]})},Fa="/assets/receipt-9341085f.svg",pc="/assets/Polygon_Header-51942caa.svg",hS="/assets/logout-402db5ae.svg";function hc(){const{role:e}=hn(),t=parseInt(e),[n,r]=_.useState(""),[i,o]=_.useState([]);_.useEffect(()=>{(async()=>{n!==""?Ze.get("/dishes/"+n).then(w=>{o(w.data)}).catch(w=>{console.log(w)}):o([])})()},[n]);const l=$n();function s(){l("/")}function a(h){l(`/details/${h}`)}const u=()=>{l("/managedishes"),window.location.reload()},{signOut:c}=hn(),f=()=>{window.confirm("Tem certeza que deseja sair?")&&(c(),window.location.href="/")};return g.jsxs(rS,{children:[g.jsx(pS,{}),g.jsxs("div",{className:"logoHeader",onClick:s,children:[g.jsx("img",{src:pc}),t===1&&g.jsx("span",{children:"Food explorer"}),t===2&&g.jsxs("div",{className:"admin",children:[g.jsx("span",{children:"Food explorer"}),g.jsx("small",{children:"admin"})]})]}),g.jsxs("div",{className:"searchBar",children:[g.jsx(oS,{placeholder:"Busque por pratos ou ingredientes",type:"text",value:n,onChange:h=>{r(h.target.value)}}),g.jsx("ul",{className:"list",children:i.map((h,w)=>g.jsx("li",{onClick:()=>a(h.id),children:g.jsx("button",{children:g.jsx("p",{className:"dishList",children:h.dishname})})},w))})]}),t===1&&g.jsxs(ud,{children:[g.jsx("img",{src:Fa})," ",g.jsx("p",{children:"Pedidos (0)"})]}),t===1&&g.jsxs(iS,{children:[g.jsx("img",{src:Fa})," ",g.jsx("p",{children:"0"})]}),t===2&&g.jsx(ud,{onClick:u,style:{height:48},children:g.jsx("p",{children:"Novo prato"})}),g.jsx(lS,{onClick:f,children:g.jsx("img",{src:hS})})]})}const mS=J.footer`
  z-index: 999;
  position: fixed;
  bottom: 0;

  height: 7.7rem;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  background-color: ${({theme:e})=>e.COLORS.DARK_600};
  color: ${({theme:e})=>e.COLORS.LIGHT_700};

  padding: 2.4rem 12.3rem;

  > p {
    color: ${({theme:e})=>e.COLORS.LIGHT_200};
    font-family: 'Roboto', sans-serif;
    font-size: clamp(1rem, 2vw, 1.4rem);
    font-style: normal;
    font-weight: 400;
  } 

  @media (max-width: 993px) {
    padding: 2.4rem;
  }

  @media (max-width : 355px) {
    > p {
      font-size: .9rem;
    }
  }

  @media (max-width: 330px) {
    height: 4.5rem;
  }


  .logoFooter {
    display: flex;
    align-items: center;

    > img {
      margin-right: 1.1rem;
      width: clamp(2.2rem, 2vw, 3rem);
    }

    > span {
        font-family: 'Roboto', sans-serif;
        font-size: clamp(1.5rem, 2vw, 2.4rem);
        font-weight: 700;
    }

@media (max-width : 355px) {
  > img {
    margin-right: .8rem;
    width: 1.8rem;
  }

  > span {
    font-size: 1.2rem;
  }

}
  }
`,gS="/assets/Polygon_Footer-1ca572cf.svg";function mc(){return g.jsxs(mS,{children:[g.jsxs("div",{className:"logoFooter",children:[g.jsx("img",{src:gS}),g.jsx("span",{children:"Food explorer"})]}),g.jsx("p",{children:"© 2023 - Todos os direitos reservados."})]})}var $m={},Mm={},Dl={},Fm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(Fm);var vS="Expected a function",cd=0/0,yS="[object Symbol]",wS=/^\s+|\s+$/g,SS=/^[-+]0x[0-9a-f]+$/i,xS=/^0b[01]+$/i,kS=/^0o[0-7]+$/i,OS=parseInt,CS=typeof bi=="object"&&bi&&bi.Object===Object&&bi,ES=typeof self=="object"&&self&&self.Object===Object&&self,_S=CS||ES||Function("return this")(),RS=Object.prototype,PS=RS.toString,TS=Math.max,bS=Math.min,Os=function(){return _S.Date.now()};function LS(e,t,n){var r,i,o,l,s,a,u=0,c=!1,f=!1,h=!0;if(typeof e!="function")throw new TypeError(vS);t=fd(t)||0,Ha(n)&&(c=!!n.leading,f="maxWait"in n,o=f?TS(fd(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h);function w(C){var P=r,E=i;return r=i=void 0,u=C,l=e.apply(E,P),l}function v(C){return u=C,s=setTimeout(p,t),c?w(C):l}function y(C){var P=C-a,E=C-u,b=t-P;return f?bS(b,o-E):b}function x(C){var P=C-a,E=C-u;return a===void 0||P>=t||P<0||f&&E>=o}function p(){var C=Os();if(x(C))return d(C);s=setTimeout(p,y(C))}function d(C){return s=void 0,h&&r?w(C):(r=i=void 0,l)}function m(){s!==void 0&&clearTimeout(s),u=0,r=a=i=s=void 0}function S(){return s===void 0?l:d(Os())}function k(){var C=Os(),P=x(C);if(r=arguments,i=this,a=C,P){if(s===void 0)return v(a);if(f)return s=setTimeout(p,t),w(a)}return s===void 0&&(s=setTimeout(p,t)),l}return k.cancel=m,k.flush=S,k}function Ha(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function jS(e){return!!e&&typeof e=="object"}function NS(e){return typeof e=="symbol"||jS(e)&&PS.call(e)==yS}function fd(e){if(typeof e=="number")return e;if(NS(e))return cd;if(Ha(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ha(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(wS,"");var n=xS.test(e);return n||kS.test(e)?OS(e.slice(2),n?2:8):SS.test(e)?cd:+e}var AS=LS,Hm={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var l=typeof o;if(l==="string"||l==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var s=n.apply(null,o);s&&r.push(s)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var a in o)t.call(o,a)&&o[a]&&r.push(a)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Hm);var Il=Hm.exports,z={};Object.defineProperty(z,"__esModule",{value:!0});z.checkSpecKeys=z.checkNavigable=z.changeSlide=z.canUseDOM=z.canGoNext=void 0;z.clamp=Um;z.swipeStart=z.swipeMove=z.swipeEnd=z.slidesOnRight=z.slidesOnLeft=z.slideHandler=z.siblingDirection=z.safePreventDefault=z.lazyStartIndex=z.lazySlidesOnRight=z.lazySlidesOnLeft=z.lazyEndIndex=z.keyHandler=z.initializedState=z.getWidth=z.getTrackLeft=z.getTrackCSS=z.getTrackAnimateCSS=z.getTotalSlides=z.getSwipeDirection=z.getSlideCount=z.getRequiredLazySlides=z.getPreClones=z.getPostClones=z.getOnDemandLazySlides=z.getNavigableIndexes=z.getHeight=z.extractObject=void 0;var zS=DS(_);function DS(e){return e&&e.__esModule?e:{default:e}}function dd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dd(Object(n),!0).forEach(function(r){IS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function IS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Um(e,t,n){return Math.max(t,Math.min(e,n))}var Pn=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};z.safePreventDefault=Pn;var gc=function(t){for(var n=[],r=vc(t),i=yc(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};z.getOnDemandLazySlides=gc;var $S=function(t){for(var n=[],r=vc(t),i=yc(t),o=r;o<i;o++)n.push(o);return n};z.getRequiredLazySlides=$S;var vc=function(t){return t.currentSlide-Bm(t)};z.lazyStartIndex=vc;var yc=function(t){return t.currentSlide+Wm(t)};z.lazyEndIndex=yc;var Bm=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};z.lazySlidesOnLeft=Bm;var Wm=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};z.lazySlidesOnRight=Wm;var Vo=function(t){return t&&t.offsetWidth||0};z.getWidth=Vo;var wc=function(t){return t&&t.offsetHeight||0};z.getHeight=wc;var Sc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,l;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),l=Math.round(o*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"};z.getSwipeDirection=Sc;var xc=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};z.canGoNext=xc;var MS=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};z.extractObject=MS;var FS=function(t){var n=zS.default.Children.count(t.children),r=t.listRef,i=Math.ceil(Vo(r)),o=t.trackRef&&t.trackRef.node,l=Math.ceil(Vo(o)),s;if(t.vertical)s=i;else{var a=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(a*=i/100),s=Math.ceil((i-a)/t.slidesToShow)}var u=r&&wc(r.querySelector('[data-index="0"]')),c=u*t.slidesToShow,f=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(f=n-1-t.initialSlide);var h=t.lazyLoadedList||[],w=gc(de(de({},t),{},{currentSlide:f,lazyLoadedList:h}));h=h.concat(w);var v={slideCount:n,slideWidth:s,listWidth:i,trackWidth:l,currentSlide:f,slideHeight:u,listHeight:c,lazyLoadedList:h};return t.autoplaying===null&&t.autoplay&&(v.autoplaying="playing"),v};z.initializedState=FS;var HS=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,l=t.index,s=t.slideCount,a=t.lazyLoad,u=t.currentSlide,c=t.centerMode,f=t.slidesToScroll,h=t.slidesToShow,w=t.useCSS,v=t.lazyLoadedList;if(n&&r)return{};var y=l,x,p,d,m={},S={},k=o?l:Um(l,0,s-1);if(i){if(!o&&(l<0||l>=s))return{};l<0?y=l+s:l>=s&&(y=l-s),a&&v.indexOf(y)<0&&(v=v.concat(y)),m={animating:!0,currentSlide:y,lazyLoadedList:v,targetSlide:y},S={animating:!1,targetSlide:y}}else x=y,y<0?(x=y+s,o?s%f!==0&&(x=s-s%f):x=0):!xc(t)&&y>u?y=x=u:c&&y>=s?(y=o?s:s-1,x=o?0:s-1):y>=s&&(x=y-s,o?s%f!==0&&(x=0):x=s-h),!o&&y+h>=s&&(x=s-h),p=wi(de(de({},t),{},{slideIndex:y})),d=wi(de(de({},t),{},{slideIndex:x})),o||(p===d&&(y=x),p=d),a&&(v=v.concat(gc(de(de({},t),{},{currentSlide:y})))),w?(m={animating:!0,currentSlide:x,trackStyle:kc(de(de({},t),{},{left:p})),lazyLoadedList:v,targetSlide:k},S={animating:!1,currentSlide:x,trackStyle:yi(de(de({},t),{},{left:d})),swipeLeft:null,targetSlide:k}):m={currentSlide:x,trackStyle:yi(de(de({},t),{},{left:d})),lazyLoadedList:v,targetSlide:k};return{state:m,nextState:S}};z.slideHandler=HS;var US=function(t,n){var r,i,o,l,s,a=t.slidesToScroll,u=t.slidesToShow,c=t.slideCount,f=t.currentSlide,h=t.targetSlide,w=t.lazyLoad,v=t.infinite;if(l=c%a!==0,r=l?0:(c-f)%a,n.message==="previous")o=r===0?a:u-r,s=f-o,w&&!v&&(i=f-o,s=i===-1?c-1:i),v||(s=h-a);else if(n.message==="next")o=r===0?a:r,s=f+o,w&&!v&&(s=(f+a)%c+r),v||(s=h+a);else if(n.message==="dots")s=n.index*n.slidesToScroll;else if(n.message==="children"){if(s=n.index,v){var y=Qm(de(de({},t),{},{targetSlide:s}));s>n.currentSlide&&y==="left"?s=s-c:s<n.currentSlide&&y==="right"&&(s=s+c)}}else n.message==="index"&&(s=Number(n.index));return s};z.changeSlide=US;var BS=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};z.keyHandler=BS;var WS=function(t,n,r){return t.target.tagName==="IMG"&&Pn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};z.swipeStart=WS;var VS=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,l=n.swipeToSlide,s=n.verticalSwiping,a=n.rtl,u=n.currentSlide,c=n.edgeFriction,f=n.edgeDragged,h=n.onEdge,w=n.swiped,v=n.swiping,y=n.slideCount,x=n.slidesToScroll,p=n.infinite,d=n.touchObject,m=n.swipeEvent,S=n.listHeight,k=n.listWidth;if(!r){if(i)return Pn(t);o&&l&&s&&Pn(t);var C,P={},E=wi(n);d.curX=t.touches?t.touches[0].pageX:t.clientX,d.curY=t.touches?t.touches[0].pageY:t.clientY,d.swipeLength=Math.round(Math.sqrt(Math.pow(d.curX-d.startX,2)));var b=Math.round(Math.sqrt(Math.pow(d.curY-d.startY,2)));if(!s&&!v&&b>10)return{scrolling:!0};s&&(d.swipeLength=b);var j=(a?-1:1)*(d.curX>d.startX?1:-1);s&&(j=d.curY>d.startY?1:-1);var H=Math.ceil(y/x),M=Sc(n.touchObject,s),F=d.swipeLength;return p||(u===0&&(M==="right"||M==="down")||u+1>=H&&(M==="left"||M==="up")||!xc(n)&&(M==="left"||M==="up"))&&(F=d.swipeLength*c,f===!1&&h&&(h(M),P.edgeDragged=!0)),!w&&m&&(m(M),P.swiped=!0),o?C=E+F*(S/k)*j:a?C=E-F*j:C=E+F*j,s&&(C=E+F*j),P=de(de({},P),{},{touchObject:d,swipeLeft:C,trackStyle:yi(de(de({},n),{},{left:C}))}),Math.abs(d.curX-d.startX)<Math.abs(d.curY-d.startY)*.8||d.swipeLength>10&&(P.swiping=!0,Pn(t)),P}};z.swipeMove=VS;var KS=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,l=n.listWidth,s=n.touchThreshold,a=n.verticalSwiping,u=n.listHeight,c=n.swipeToSlide,f=n.scrolling,h=n.onSwipe,w=n.targetSlide,v=n.currentSlide,y=n.infinite;if(!r)return i&&Pn(t),{};var x=a?u/s:l/s,p=Sc(o,a),d={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!o.swipeLength)return d;if(o.swipeLength>x){Pn(t),h&&h(p);var m,S,k=y?v:w;switch(p){case"left":case"up":S=k+Ba(n),m=c?Ua(n,S):S,d.currentDirection=0;break;case"right":case"down":S=k-Ba(n),m=c?Ua(n,S):S,d.currentDirection=1;break;default:m=k}d.triggerSlideHandler=m}else{var C=wi(n);d.trackStyle=kc(de(de({},n),{},{left:C}))}return d};z.swipeEnd=KS;var Vm=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};z.getNavigableIndexes=Vm;var Ua=function(t,n){var r=Vm(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};z.checkNavigable=Ua;var Ba=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(a){if(t.vertical){if(a.offsetTop+wc(a)/2>t.swipeLeft*-1)return r=a,!1}else if(a.offsetLeft-n+Vo(a)/2>t.swipeLeft*-1)return r=a,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,s=Math.abs(r.dataset.index-l)||1;return s}else return t.slidesToScroll};z.getSlideCount=Ba;var $l=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};z.checkSpecKeys=$l;var yi=function(t){$l(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=Gm(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=de(de({},o),{},{WebkitTransform:l,transform:s,msTransform:a})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};z.getTrackCSS=yi;var kc=function(t){$l(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=yi(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};z.getTrackAnimateCSS=kc;var wi=function(t){if(t.unslick)return 0;$l(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,l=t.slideCount,s=t.slidesToShow,a=t.slidesToScroll,u=t.slideWidth,c=t.listWidth,f=t.variableWidth,h=t.slideHeight,w=t.fade,v=t.vertical,y=0,x,p,d=0;if(w||t.slideCount===1)return 0;var m=0;if(i?(m=-Yr(t),l%a!==0&&n+a>l&&(m=-(n>l?s-(n-l):l%a)),o&&(m+=parseInt(s/2))):(l%a!==0&&n+a>l&&(m=s-l%a),o&&(m=parseInt(s/2))),y=m*u,d=m*h,v?x=n*h*-1+d:x=n*u*-1+y,f===!0){var S,k=r&&r.node;if(S=n+Yr(t),p=k&&k.childNodes[S],x=p?p.offsetLeft*-1:0,o===!0){S=i?n+Yr(t):n,p=k&&k.children[S],x=0;for(var C=0;C<S;C++)x-=k&&k.children[C]&&k.children[C].offsetWidth;x-=parseInt(t.centerPadding),x+=p&&(c-p.offsetWidth)/2}}return x};z.getTrackLeft=wi;var Yr=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};z.getPreClones=Yr;var Km=function(t){return t.unslick||!t.infinite?0:t.slideCount};z.getPostClones=Km;var Gm=function(t){return t.slideCount===1?1:Yr(t)+t.slideCount+Km(t)};z.getTotalSlides=Gm;var Qm=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+qm(t)?"left":"right":t.targetSlide<t.currentSlide-Ym(t)?"right":"left"};z.siblingDirection=Qm;var qm=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1};z.slidesOnRight=qm;var Ym=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};z.slidesOnLeft=Ym;var GS=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};z.canUseDOM=GS;var Ml={};function Wa(e){"@babel/helpers - typeof";return Wa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wa(e)}Object.defineProperty(Ml,"__esModule",{value:!0});Ml.Track=void 0;var qt=Xm(_),Cs=Xm(Il),Es=z;function Xm(e){return e&&e.__esModule?e:{default:e}}function Va(){return Va=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Va.apply(this,arguments)}function QS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qS(e,t,n){return t&&pd(e.prototype,t),n&&pd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function YS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ka(e,t)}function Ka(e,t){return Ka=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ka(e,t)}function XS(e){var t=ZS();return function(){var r=Ko(e),i;if(t){var o=Ko(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return JS(this,i)}}function JS(e,t){if(t&&(Wa(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ga(e)}function Ga(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ZS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ko(e){return Ko=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ko(e)}function hd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ye(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hd(Object(n),!0).forEach(function(r){Qa(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Qa(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _s=function(t){var n,r,i,o,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-o-1&&l<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var s;t.targetSlide<0?s=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?s=t.targetSlide-t.slideCount:s=t.targetSlide;var a=l===s;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":a}},ex=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Rs=function(t,n){return t.key||n},tx=function(t){var n,r=[],i=[],o=[],l=qt.default.Children.count(t.children),s=(0,Es.lazyStartIndex)(t),a=(0,Es.lazyEndIndex)(t);return qt.default.Children.forEach(t.children,function(u,c){var f,h={message:"children",index:c,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(c)>=0?f=u:f=qt.default.createElement("div",null);var w=ex(Ye(Ye({},t),{},{index:c})),v=f.props.className||"",y=_s(Ye(Ye({},t),{},{index:c}));if(r.push(qt.default.cloneElement(f,{key:"original"+Rs(f,c),"data-index":c,className:(0,Cs.default)(y,v),tabIndex:"-1","aria-hidden":!y["slick-active"],style:Ye(Ye({outline:"none"},f.props.style||{}),w),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(h)}})),t.infinite&&t.fade===!1){var x=l-c;x<=(0,Es.getPreClones)(t)&&l!==t.slidesToShow&&(n=-x,n>=s&&(f=u),y=_s(Ye(Ye({},t),{},{index:n})),i.push(qt.default.cloneElement(f,{key:"precloned"+Rs(f,n),"data-index":n,tabIndex:"-1",className:(0,Cs.default)(y,v),"aria-hidden":!y["slick-active"],style:Ye(Ye({},f.props.style||{}),w),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(h)}}))),l!==t.slidesToShow&&(n=l+c,n<a&&(f=u),y=_s(Ye(Ye({},t),{},{index:n})),o.push(qt.default.cloneElement(f,{key:"postcloned"+Rs(f,n),"data-index":n,tabIndex:"-1",className:(0,Cs.default)(y,v),"aria-hidden":!y["slick-active"],style:Ye(Ye({},f.props.style||{}),w),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(h)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},nx=function(e){YS(n,e);var t=XS(n);function n(){var r;QS(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),Qa(Ga(r),"node",null),Qa(Ga(r),"handleRef",function(s){r.node=s}),r}return qS(n,[{key:"render",value:function(){var i=tx(this.props),o=this.props,l=o.onMouseEnter,s=o.onMouseOver,a=o.onMouseLeave,u={onMouseEnter:l,onMouseOver:s,onMouseLeave:a};return qt.default.createElement("div",Va({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(qt.default.PureComponent);Ml.Track=nx;var Fl={};function qa(e){"@babel/helpers - typeof";return qa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qa(e)}Object.defineProperty(Fl,"__esModule",{value:!0});Fl.Dots=void 0;var Yi=Jm(_),rx=Jm(Il),md=z;function Jm(e){return e&&e.__esModule?e:{default:e}}function gd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ix(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gd(Object(n),!0).forEach(function(r){ox(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ox(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function sx(e,t,n){return t&&vd(e.prototype,t),n&&vd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ax(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ya(e,t)}function Ya(e,t){return Ya=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ya(e,t)}function ux(e){var t=dx();return function(){var r=Go(e),i;if(t){var o=Go(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return cx(this,i)}}function cx(e,t){if(t&&(qa(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return fx(e)}function fx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function dx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Go(e){return Go=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Go(e)}var px=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},hx=function(e){ax(n,e);var t=ux(n);function n(){return lx(this,n),t.apply(this,arguments)}return sx(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,l=i.onMouseOver,s=i.onMouseLeave,a=i.infinite,u=i.slidesToScroll,c=i.slidesToShow,f=i.slideCount,h=i.currentSlide,w=px({slideCount:f,slidesToScroll:u,slidesToShow:c,infinite:a}),v={onMouseEnter:o,onMouseOver:l,onMouseLeave:s},y=[],x=0;x<w;x++){var p=(x+1)*u-1,d=a?p:(0,md.clamp)(p,0,f-1),m=d-(u-1),S=a?m:(0,md.clamp)(m,0,f-1),k=(0,rx.default)({"slick-active":a?h>=S&&h<=d:h===S}),C={message:"dots",index:x,slidesToScroll:u,currentSlide:h},P=this.clickHandler.bind(this,C);y=y.concat(Yi.default.createElement("li",{key:x,className:k},Yi.default.cloneElement(this.props.customPaging(x),{onClick:P})))}return Yi.default.cloneElement(this.props.appendDots(y),ix({className:this.props.dotsClass},v))}}]),n}(Yi.default.PureComponent);Fl.Dots=hx;var gr={};function Xa(e){"@babel/helpers - typeof";return Xa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xa(e)}Object.defineProperty(gr,"__esModule",{value:!0});gr.PrevArrow=gr.NextArrow=void 0;var or=eg(_),Zm=eg(Il),mx=z;function eg(e){return e&&e.__esModule?e:{default:e}}function Qo(){return Qo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qo.apply(this,arguments)}function yd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function qo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yd(Object(n),!0).forEach(function(r){gx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gx(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tg(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function wd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ng(e,t,n){return t&&wd(e.prototype,t),n&&wd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function rg(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ja(e,t)}function Ja(e,t){return Ja=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ja(e,t)}function ig(e){var t=wx();return function(){var r=Yo(e),i;if(t){var o=Yo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return vx(this,i)}}function vx(e,t){if(t&&(Xa(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yx(e)}function yx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function wx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Yo(e){return Yo=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Yo(e)}var Sx=function(e){rg(n,e);var t=ig(n);function n(){return tg(this,n),t.apply(this,arguments)}return ng(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var l={key:"0","data-role":"none",className:(0,Zm.default)(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},a;return this.props.prevArrow?a=or.default.cloneElement(this.props.prevArrow,qo(qo({},l),s)):a=or.default.createElement("button",Qo({key:"0",type:"button"},l)," ","Previous"),a}}]),n}(or.default.PureComponent);gr.PrevArrow=Sx;var xx=function(e){rg(n,e);var t=ig(n);function n(){return tg(this,n),t.apply(this,arguments)}return ng(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,mx.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var l={key:"1","data-role":"none",className:(0,Zm.default)(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},a;return this.props.nextArrow?a=or.default.cloneElement(this.props.nextArrow,qo(qo({},l),s)):a=or.default.createElement("button",Qo({key:"1",type:"button"},l)," ","Next"),a}}]),n}(or.default.PureComponent);gr.NextArrow=xx;var og=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var l=o[i];n.call(r,l[1],l[0])}},t}()}(),Za=typeof window<"u"&&typeof document<"u"&&window.document===document,Xo=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),kx=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Xo):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Ox=2;function Cx(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&s()}function l(){kx(o)}function s(){var a=Date.now();if(n){if(a-i<Ox)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=a}return s}var Ex=20,_x=["top","right","bottom","left","width","height","size","weight"],Rx=typeof MutationObserver<"u",Px=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Cx(this.refresh.bind(this),Ex)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Za||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Rx?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Za||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=_x.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),lg=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},vr=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Xo},sg=Hl(0,0,0,0);function Jo(e){return parseFloat(e)||0}function Sd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+Jo(o)},0)}function Tx(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],l=e["padding-"+o];n[o]=Jo(l)}return n}function bx(e){var t=e.getBBox();return Hl(0,0,t.width,t.height)}function Lx(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return sg;var r=vr(e).getComputedStyle(e),i=Tx(r),o=i.left+i.right,l=i.top+i.bottom,s=Jo(r.width),a=Jo(r.height);if(r.boxSizing==="border-box"&&(Math.round(s+o)!==t&&(s-=Sd(r,"left","right")+o),Math.round(a+l)!==n&&(a-=Sd(r,"top","bottom")+l)),!Nx(e)){var u=Math.round(s+o)-t,c=Math.round(a+l)-n;Math.abs(u)!==1&&(s-=u),Math.abs(c)!==1&&(a-=c)}return Hl(i.left,i.top,s,a)}var jx=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof vr(e).SVGGraphicsElement}:function(e){return e instanceof vr(e).SVGElement&&typeof e.getBBox=="function"}}();function Nx(e){return e===vr(e).document.documentElement}function Ax(e){return Za?jx(e)?bx(e):Lx(e):sg}function zx(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return lg(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function Hl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Dx=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Hl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Ax(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),Ix=function(){function e(t,n){var r=zx(n);lg(this,{target:t,contentRect:r})}return e}(),$x=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new og,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof vr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Dx(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof vr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new Ix(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),ag=typeof WeakMap<"u"?new WeakMap:new og,ug=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Px.getInstance(),r=new $x(t,n,this);ag.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){ug.prototype[e]=function(){var t;return(t=ag.get(this))[e].apply(t,arguments)}});var Mx=function(){return typeof Xo.ResizeObserver<"u"?Xo.ResizeObserver:ug}();const Fx=Object.freeze(Object.defineProperty({__proto__:null,default:Mx},Symbol.toStringTag,{value:"Module"})),Hx=hg(Fx);Object.defineProperty(Dl,"__esModule",{value:!0});Dl.InnerSlider=void 0;var We=Pi(_),Ux=Pi(Fm),Bx=Pi(AS),Wx=Pi(Il),he=z,Vx=Ml,Kx=Fl,xd=gr,Gx=Pi(Hx);function Pi(e){return e&&e.__esModule?e:{default:e}}function Zo(e){"@babel/helpers - typeof";return Zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zo(e)}function el(){return el=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},el.apply(this,arguments)}function Qx(e,t){if(e==null)return{};var n=qx(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function qx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function kd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kd(Object(n),!0).forEach(function(r){q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Yx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Od(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Xx(e,t,n){return t&&Od(e.prototype,t),n&&Od(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Jx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&eu(e,t)}function eu(e,t){return eu=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},eu(e,t)}function Zx(e){var t=tk();return function(){var r=tl(e),i;if(t){var o=tl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return ek(this,i)}}function ek(e,t){if(t&&(Zo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Q(e)}function Q(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function tk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function tl(e){return tl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},tl(e)}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var nk=function(e){Jx(n,e);var t=Zx(n);function n(r){var i;Yx(this,n),i=t.call(this,r),q(Q(i),"listRefHandler",function(l){return i.list=l}),q(Q(i),"trackRefHandler",function(l){return i.track=l}),q(Q(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,he.getHeight)(l)+"px"}}),q(Q(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,he.getOnDemandLazySlides)(W(W({},i.props),i.state));l.length>0&&(i.setState(function(a){return{lazyLoadedList:a.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var s=W({listRef:i.list,trackRef:i.track},i.props);i.updateState(s,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new Gx.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(a){a.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,a.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),q(Q(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),q(Q(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var s=(0,he.getOnDemandLazySlides)(W(W({},i.props),i.state));s.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s))}i.adaptHeight();var a=W(W({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(l);u&&i.updateState(a,u,function(){i.state.currentSlide>=We.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:We.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),q(Q(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,Bx.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),q(Q(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,s=!!(i.track&&i.track.node);if(s){var a=W(W({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(a,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),q(Q(i),"updateState",function(l,s,a){var u=(0,he.initializedState)(l);l=W(W(W({},l),u),{},{slideIndex:u.currentSlide});var c=(0,he.getTrackLeft)(l);l=W(W({},l),{},{left:c});var f=(0,he.getTrackCSS)(l);(s||We.default.Children.count(i.props.children)!==We.default.Children.count(l.children))&&(u.trackStyle=f),i.setState(u,a)}),q(Q(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,s=0,a=[],u=(0,he.getPreClones)(W(W(W({},i.props),i.state),{},{slideCount:i.props.children.length})),c=(0,he.getPostClones)(W(W(W({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(P){a.push(P.props.style.width),l+=P.props.style.width});for(var f=0;f<u;f++)s+=a[a.length-1-f],l+=a[a.length-1-f];for(var h=0;h<c;h++)l+=a[h];for(var w=0;w<i.state.currentSlide;w++)s+=a[w];var v={width:l+"px",left:-s+"px"};if(i.props.centerMode){var y="".concat(a[i.state.currentSlide],"px");v.left="calc(".concat(v.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:v}}var x=We.default.Children.count(i.props.children),p=W(W(W({},i.props),i.state),{},{slideCount:x}),d=(0,he.getPreClones)(p)+(0,he.getPostClones)(p)+x,m=100/i.props.slidesToShow*d,S=100/d,k=-S*((0,he.getPreClones)(p)+i.state.currentSlide)*m/100;i.props.centerMode&&(k+=(100-S*m/100)/2);var C={width:m+"%",left:k+"%"};return{slideWidth:S+"%",trackStyle:C}}),q(Q(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],s=l.length,a=0;Array.prototype.forEach.call(l,function(u){var c=function(){return++a&&a>=s&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var f=u.onclick;u.onclick=function(){f(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=c,u.onerror=function(){c(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),q(Q(i),"progressiveLazyLoad",function(){for(var l=[],s=W(W({},i.props),i.state),a=i.state.currentSlide;a<i.state.slideCount+(0,he.getPostClones)(s);a++)if(i.state.lazyLoadedList.indexOf(a)<0){l.push(a);break}for(var u=i.state.currentSlide-1;u>=-(0,he.getPreClones)(s);u--)if(i.state.lazyLoadedList.indexOf(u)<0){l.push(u);break}l.length>0?(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),q(Q(i),"slideHandler",function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=i.props,u=a.asNavFor,c=a.beforeChange,f=a.onLazyLoad,h=a.speed,w=a.afterChange,v=i.state.currentSlide,y=(0,he.slideHandler)(W(W(W({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!s})),x=y.state,p=y.nextState;if(x){c&&c(v,x.currentSlide);var d=x.lazyLoadedList.filter(function(m){return i.state.lazyLoadedList.indexOf(m)<0});f&&d.length>0&&f(d),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),w&&w(v),delete i.animationEndCallback),i.setState(x,function(){u&&i.asNavForIndex!==l&&(i.asNavForIndex=l,u.innerSlider.slideHandler(l)),p&&(i.animationEndCallback=setTimeout(function(){var m=p.animating,S=Qx(p,["animating"]);i.setState(S,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:m})},10)),w&&w(x.currentSlide),delete i.animationEndCallback})},h))})}}),q(Q(i),"changeSlide",function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=W(W({},i.props),i.state),u=(0,he.changeSlide)(a,l);if(!(u!==0&&!u)&&(s===!0?i.slideHandler(u,s):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var c=i.list.querySelectorAll(".slick-current");c[0]&&c[0].focus()}}),q(Q(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),q(Q(i),"keyHandler",function(l){var s=(0,he.keyHandler)(l,i.props.accessibility,i.props.rtl);s!==""&&i.changeSlide({message:s})}),q(Q(i),"selectHandler",function(l){i.changeSlide(l)}),q(Q(i),"disableBodyScroll",function(){var l=function(a){a=a||window.event,a.preventDefault&&a.preventDefault(),a.returnValue=!1};window.ontouchmove=l}),q(Q(i),"enableBodyScroll",function(){window.ontouchmove=null}),q(Q(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var s=(0,he.swipeStart)(l,i.props.swipe,i.props.draggable);s!==""&&i.setState(s)}),q(Q(i),"swipeMove",function(l){var s=(0,he.swipeMove)(l,W(W(W({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));s&&(s.swiping&&(i.clickable=!1),i.setState(s))}),q(Q(i),"swipeEnd",function(l){var s=(0,he.swipeEnd)(l,W(W(W({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(s){var a=s.triggerSlideHandler;delete s.triggerSlideHandler,i.setState(s),a!==void 0&&(i.slideHandler(a),i.props.verticalSwiping&&i.enableBodyScroll())}}),q(Q(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),q(Q(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),q(Q(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),q(Q(i),"slickGoTo",function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},s)},0))}),q(Q(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,he.canGoNext)(W(W({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),q(Q(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var s=i.state.autoplaying;if(l==="update"){if(s==="hovered"||s==="focused"||s==="paused")return}else if(l==="leave"){if(s==="paused"||s==="focused")return}else if(l==="blur"&&(s==="paused"||s==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),q(Q(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var s=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(s==="hovered"||s==="playing")&&i.setState({autoplaying:"focused"}):s==="playing"&&i.setState({autoplaying:"hovered"})}),q(Q(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),q(Q(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),q(Q(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),q(Q(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),q(Q(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),q(Q(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),q(Q(i),"render",function(){var l=(0,Wx.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),s=W(W({},i.props),i.state),a=(0,he.extractObject)(s,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;a=W(W({},a),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var c;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var f=(0,he.extractObject)(s,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),h=i.props.pauseOnDotsHover;f=W(W({},f),{},{clickHandler:i.changeSlide,onMouseEnter:h?i.onDotsLeave:null,onMouseOver:h?i.onDotsOver:null,onMouseLeave:h?i.onDotsLeave:null}),c=We.default.createElement(Kx.Dots,f)}var w,v,y=(0,he.extractObject)(s,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(w=We.default.createElement(xd.PrevArrow,y),v=We.default.createElement(xd.NextArrow,y));var x=null;i.props.vertical&&(x={height:i.state.listHeight});var p=null;i.props.vertical===!1?i.props.centerMode===!0&&(p={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(p={padding:i.props.centerPadding+" 0px"});var d=W(W({},x),p),m=i.props.touchMove,S={className:"slick-list",style:d,onClick:i.clickHandler,onMouseDown:m?i.swipeStart:null,onMouseMove:i.state.dragging&&m?i.swipeMove:null,onMouseUp:m?i.swipeEnd:null,onMouseLeave:i.state.dragging&&m?i.swipeEnd:null,onTouchStart:m?i.swipeStart:null,onTouchMove:i.state.dragging&&m?i.swipeMove:null,onTouchEnd:m?i.touchEnd:null,onTouchCancel:i.state.dragging&&m?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},k={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(S={className:"slick-list"},k={className:l}),We.default.createElement("div",k,i.props.unslick?"":w,We.default.createElement("div",el({ref:i.listRefHandler},S),We.default.createElement(Vx.Track,el({ref:i.trackRefHandler},a),i.props.children)),i.props.unslick?"":v,i.props.unslick?"":c)}),i.list=null,i.track=null,i.state=W(W({},Ux.default),{},{currentSlide:i.props.initialSlide,slideCount:We.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=W(W({},i.state),o),i}return Xx(n,[{key:"didPropsChange",value:function(i){for(var o=!1,l=0,s=Object.keys(this.props);l<s.length;l++){var a=s[l];if(!i.hasOwnProperty(a)){o=!0;break}if(!(Zo(i[a])==="object"||typeof i[a]=="function")&&i[a]!==this.props[a]){o=!0;break}}return o||We.default.Children.count(this.props.children)!==We.default.Children.count(i.children)}}]),n}(We.default.Component);Dl.InnerSlider=nk;var rk=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},ik=rk,ok=ik,lk=function(e){var t=/[height|width]$/;return t.test(e)},Cd=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=ok(r),lk(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},sk=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=Cd(n),r<e.length-1&&(t+=", ")}),t):Cd(e)},ak=sk,cg={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(_);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return t.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return t.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(cg);var Ps,Ed;function uk(){if(Ed)return Ps;Ed=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},Ps=e,Ps}var Ts,_d;function fg(){if(_d)return Ts;_d=1;function e(r,i){var o=0,l=r.length,s;for(o;o<l&&(s=i(r[o],o),s!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Ts={isFunction:n,isArray:t,each:e},Ts}var bs,Rd;function ck(){if(Rd)return bs;Rd=1;var e=uk(),t=fg().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(l){o.mql=l.currentTarget||l,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,l){if(o.equals(r))return o.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},bs=n,bs}var Ls,Pd;function fk(){if(Pd)return Ls;Pd=1;var e=ck(),t=fg(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(l,s,a){var u=this.queries,c=a&&this.browserIsIncapable;return u[l]||(u[l]=new e(l,c)),r(s)&&(s={match:s}),i(s)||(s=[s]),n(s,function(f){r(f)&&(f={match:f}),u[l].addHandler(f)}),this},unregister:function(l,s){var a=this.queries[l];return a&&(s?a.removeHandler(s):(a.clear(),delete this.queries[l])),this}},Ls=o,Ls}var js,Td;function dk(){if(Td)return js;Td=1;var e=fk();return js=new e,js}(function(e){function t(E){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},t(E)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(_),r=Dl,i=s(ak),o=s(cg),l=z;function s(E){return E&&E.__esModule?E:{default:E}}function a(){return a=Object.assign||function(E){for(var b=1;b<arguments.length;b++){var j=arguments[b];for(var H in j)Object.prototype.hasOwnProperty.call(j,H)&&(E[H]=j[H])}return E},a.apply(this,arguments)}function u(E,b){var j=Object.keys(E);if(Object.getOwnPropertySymbols){var H=Object.getOwnPropertySymbols(E);b&&(H=H.filter(function(M){return Object.getOwnPropertyDescriptor(E,M).enumerable})),j.push.apply(j,H)}return j}function c(E){for(var b=1;b<arguments.length;b++){var j=arguments[b]!=null?arguments[b]:{};b%2?u(Object(j),!0).forEach(function(H){k(E,H,j[H])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(j)):u(Object(j)).forEach(function(H){Object.defineProperty(E,H,Object.getOwnPropertyDescriptor(j,H))})}return E}function f(E,b){if(!(E instanceof b))throw new TypeError("Cannot call a class as a function")}function h(E,b){for(var j=0;j<b.length;j++){var H=b[j];H.enumerable=H.enumerable||!1,H.configurable=!0,"value"in H&&(H.writable=!0),Object.defineProperty(E,H.key,H)}}function w(E,b,j){return b&&h(E.prototype,b),j&&h(E,j),Object.defineProperty(E,"prototype",{writable:!1}),E}function v(E,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function");E.prototype=Object.create(b&&b.prototype,{constructor:{value:E,writable:!0,configurable:!0}}),Object.defineProperty(E,"prototype",{writable:!1}),b&&y(E,b)}function y(E,b){return y=Object.setPrototypeOf||function(H,M){return H.__proto__=M,H},y(E,b)}function x(E){var b=m();return function(){var H=S(E),M;if(b){var F=S(this).constructor;M=Reflect.construct(H,arguments,F)}else M=H.apply(this,arguments);return p(this,M)}}function p(E,b){if(b&&(t(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return d(E)}function d(E){if(E===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E}function m(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function S(E){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(j){return j.__proto__||Object.getPrototypeOf(j)},S(E)}function k(E,b,j){return b in E?Object.defineProperty(E,b,{value:j,enumerable:!0,configurable:!0,writable:!0}):E[b]=j,E}var C=(0,l.canUseDOM)()&&dk(),P=function(E){v(j,E);var b=x(j);function j(H){var M;return f(this,j),M=b.call(this,H),k(d(M),"innerSliderRefHandler",function(F){return M.innerSlider=F}),k(d(M),"slickPrev",function(){return M.innerSlider.slickPrev()}),k(d(M),"slickNext",function(){return M.innerSlider.slickNext()}),k(d(M),"slickGoTo",function(F){var xe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return M.innerSlider.slickGoTo(F,xe)}),k(d(M),"slickPause",function(){return M.innerSlider.pause("paused")}),k(d(M),"slickPlay",function(){return M.innerSlider.autoPlay("play")}),M.state={breakpoint:null},M._responsiveMediaHandlers=[],M}return w(j,[{key:"media",value:function(M,F){C.register(M,F),this._responsiveMediaHandlers.push({query:M,handler:F})}},{key:"componentDidMount",value:function(){var M=this;if(this.props.responsive){var F=this.props.responsive.map(function(Z){return Z.breakpoint});F.sort(function(Z,_e){return Z-_e}),F.forEach(function(Z,_e){var ye;_e===0?ye=(0,i.default)({minWidth:0,maxWidth:Z}):ye=(0,i.default)({minWidth:F[_e-1]+1,maxWidth:Z}),(0,l.canUseDOM)()&&M.media(ye,function(){M.setState({breakpoint:Z})})});var xe=(0,i.default)({minWidth:F.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(xe,function(){M.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(M){C.unregister(M.query,M.handler)})}},{key:"render",value:function(){var M=this,F,xe;this.state.breakpoint?(xe=this.props.responsive.filter(function(D){return D.breakpoint===M.state.breakpoint}),F=xe[0].settings==="unslick"?"unslick":c(c(c({},o.default),this.props),xe[0].settings)):F=c(c({},o.default),this.props),F.centerMode&&(F.slidesToScroll>1,F.slidesToScroll=1),F.fade&&(F.slidesToShow>1,F.slidesToScroll>1,F.slidesToShow=1,F.slidesToScroll=1);var Z=n.default.Children.toArray(this.props.children);Z=Z.filter(function(D){return typeof D=="string"?!!D.trim():!!D}),F.variableWidth&&(F.rows>1||F.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),F.variableWidth=!1);for(var _e=[],ye=null,L=0;L<Z.length;L+=F.rows*F.slidesPerRow){for(var B=[],U=L;U<L+F.rows*F.slidesPerRow;U+=F.slidesPerRow){for(var re=[],N=U;N<U+F.slidesPerRow&&(F.variableWidth&&Z[N].props.style&&(ye=Z[N].props.style.width),!(N>=Z.length));N+=1)re.push(n.default.cloneElement(Z[N],{key:100*L+10*U+N,tabIndex:-1,style:{width:"".concat(100/F.slidesPerRow,"%"),display:"inline-block"}}));B.push(n.default.createElement("div",{key:10*L+U},re))}F.variableWidth?_e.push(n.default.createElement("div",{key:L,style:{width:ye}},B)):_e.push(n.default.createElement("div",{key:L},B))}if(F==="unslick"){var I="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:I},Z)}else _e.length<=F.slidesToShow&&(F.unslick=!0);return n.default.createElement(r.InnerSlider,a({style:this.props.style,ref:this.innerSliderRefHandler},F),_e)}}]),j}(n.default.Component);e.default=P})(Mm);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Mm);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})($m);const pk=tu($m);const hk=J.div`
  width: 85%;
  margin: 4.8rem auto;

  > h1 {
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 140%;
  color: ${({theme:e})=>e.COLORS.LIGHT_300};
  font-family: 'Poppins', sans-serif;
  margin-bottom: 2.3rem;
  }

  @media (max-width: 993px) {
    > h1 {
  font-size: 1.8rem;
  margin-bottom: 2.4rem;
  }
  }

  @media (max-width: 600px) {
    width: 100%;

  
    > h1 {
      margin-left: 2.4rem;
    }
  }

  @media (max-width: 500px) {
    .slick-slider {
    overflow: hidden;
}

    .slick-list {
      margin-right: -130px;
  }

  }
`,mk=J.div`
 display: inline-flex;
  align-items: center;
  height: 100%;
  width: 304px !important;
  margin: 0 auto;

  @media (max-width: 993px) {
    width: 210px !important;
    margin: 0 auto;
  }
`,gk=J(pk)`
  .slick-slide > div {
    display: flex;
  }
 
  .slick-next:before, .slick-prev:before {
  display: none !important;
}

.slick-next:before, .slick-prev:before {
  display: none !important;
}

.slick-prev,
.slick-next {
z-index: 10;
}
  
`,vk=J.div`
    position: relative;
    z-index: 1;
    display: flex;
`,yk=J.div`
    position: relative;
    display: flex;
    border: 1px solid red;
    
    justify-content: center;
    align-items: center;

    min-width: 30.4rem;
    width: auto;
    height: 46.2rem;
    border-radius: .8rem;

    border: 1px solid;
    border-color:  ${({theme:e})=>e.COLORS.DARK_300};
    background-color: ${({theme:e})=>e.COLORS.DARK_200};
    animation: slideInDown 1s ease-in-out;


    @keyframes slideInDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

.top-btn {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: transparent;
    border: none;
    font-size: 3rem;
    transition: scale .2s;
}

.top-btn:hover {
    scale: 0.9;
    }

.container {
    display: grid;
    padding: 2.4rem;
    text-align: center;
    align-items: center;
       
        
    > img {
        width: 17.6rem;
        height: 17.6rem;
        margin: 0 auto 1.6rem;
        border-radius: 50%;
        object-fit: cover;
        transition: transform .8s cubic-bezier(0.600, 0.800, 0.700, 1.000) ;
    }

    > img:hover { 
        transform: rotateY(180deg);
    }
}

.product-name {
    font-weight: 700;
    font-size: 2.4rem;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 1.5rem;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    transition: scale .3s;
}

.product-name:hover {
    scale: 1.1;
}
    
.desc {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({theme:e})=>e.COLORS.LIGHT_400};
    
    margin-bottom: 1.5rem;
    height: auto;
    width: 25.6rem;

    display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.price {
    font-family: 'Roboto', sans-serif;
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({theme:e})=>e.COLORS.CAKE_200};

    margin-bottom: 1.5rem;
    }


@media (max-width: 993px) {
    display: flex;
        
    width: 21rem;
    height: 29.2rem;
    min-width: 21rem;

    .container {
        > img {
            width: 8.8rem;
            height: 8.8rem;
            margin: 0 auto 1.2rem;
        }
    }

    .product-name {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 1.2rem;
    }


    .desc {
        display: none;
    }

    .price {
        font-size: 1.6rem;
        margin-bottom: 1.2rem;
    }
 }
`,wk=J.div`
display: flex;

.user-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;
    margin-left: auto;
    margin-right: auto;
}

.insert-btn {
    width: 9.2rem;
    height: 4.8rem;
    margin-left: .2rem;
    transition: scale .2s;
}

.insert-btn:hover {
    scale: 0.9;
}

@media (max-width: 993px) {
    .user-btns {
        flex-direction: column;
    }

    .insert-btn {
        height: 3.2rem;
        width: 100%;
    }
}
`,Sk=J.button`
width: 100%;
background-color: ${({theme:e})=>e.COLORS.TOMATO_100};
color: ${({theme:e})=>e.COLORS.LIGHT_100};

height: 4.8rem;
border: 0;
padding: 0 1.2rem;
border-radius: .5rem;
font-weight: 500;

font-family: 'Poppins', sans-serif;
font-weight: 100;
font-size: 1.4rem;

&:disabled {
    opacity: 0.5;
}

`;function yr({title:e,loading:t=!1,...n}){return g.jsx(Sk,{type:"button",disabled:t,...n,children:t?"Carregando...":e})}const xk=J.div`
display: flex;
align-items: center;
gap: 1.4rem;

> span {
font-family: 'Roboto', sans-serif;
font-size: 2rem;
font-weight: 700;
}

.minus-btn, .plus-btn {
    height: 2rem;
    max-width: 24.6rem;
    white-space: nowrap;
    background-color: transparent;
    border: none;
    transition: scale .1s;
    align-items: center;
    display: flex;
}

.minus-btn:hover, 
.plus-btn:hover {
    scale: 0.9;
}

@media (max-width: 993px) {
    > span {
        font-size: 1.6rem;
        font-weight: 400;
    }
}  
`,kk="/assets/plus-6a5af897.svg",Ok="/assets/minus-0d0df5b4.svg";function dg({sentQuantity:e,handleQuantity:t}){const[n,r]=_.useState(1);_.useEffect(()=>{r(e)},[e]);const i=()=>{r(l=>l+1),t(l=>l+1)},o=()=>{n<2||(r(l=>l-1),t(l=>l-1))};return g.jsxs(xk,{children:[g.jsx("button",{className:"minus-btn",onClick:o,children:g.jsx("img",{src:Ok})}),g.jsx("span",{children:n.toString().padStart(2,"0")}),g.jsx("button",{className:"plus-btn",onClick:i,children:g.jsx("img",{src:kk})})]})}const Ck="/assets/pencil-db67c44c.svg",Ek="/assets/heart-126230eb.svg";function _k({data:e}){const{role:t}=hn(),n=parseInt(t),[r,i]=_.useState(1),o=`${Ze.defaults.baseURL}/files/${e.image}`,l=c=>c.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),s=$n();function a(c){s(`/details/${c}`,{state:{data:e}})}function u(c){s("/managedishes/"+c)}return g.jsx(vk,{children:g.jsx(yk,{children:g.jsxs("div",{className:"container",children:[n===1?g.jsx("button",{className:"top-btn",children:g.jsx("img",{src:Ek})}):g.jsx("button",{className:"top-btn",onClick:()=>u(e.id),children:g.jsx("img",{src:Ck})}),g.jsx("img",{src:o,alt:"Imagem do prato"}),g.jsxs("h3",{className:"product-name",onClick:()=>a(e.id),children:[e.dishname," >"]}),g.jsx("p",{className:"desc",children:e.description}),g.jsx("h1",{className:"price",children:l(e.dishprice*r)}),n===1&&g.jsx(wk,{children:g.jsxs("div",{className:"user-btns",children:[g.jsx(dg,{sentQuantity:r,handleQuantity:c=>i(c)}),g.jsx(yr,{className:"insert-btn",title:"incluir"})]})})]})})})}const Rk="/assets/right-26b09fe4.svg",Oc="/assets/left-2f334e35.svg";function Ns({slides:e,title:t}){const[n,r]=_.useState(0),i=[{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:800,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:993,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:1120,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:1500,settings:{slidesToShow:3,slidesToScroll:1}}],l=e.length,s={dots:!1,infinite:l>4,speed:200,slidesToShow:Math.min(4,l),slidesToScroll:1,beforeChange:(c,f)=>r(f),nextArrow:g.jsx(u,{}),prevArrow:g.jsx(a,{})};function a(c){const{className:f,style:h,onClick:w}=c;return g.jsx("div",{className:f,onClick:w,style:{...h,display:window.innerWidth<600?"none":"block",background:"linear-gradient(to left, transparent 0%, #000A0F 100%)",height:"100%",width:"150px"},children:g.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:`url(${Oc})`,backgroundSize:"10%",backgroundRepeat:"no-repeat",backgroundPosition:"30%"}})})}function u(c){const{className:f,style:h,onClick:w}=c;return g.jsx("div",{className:f,style:{...h,display:window.innerWidth<600?"none":"block",background:"linear-gradient(to right, transparent 0%,   #000A0F 100%)",height:"100%",width:"150px"},onClick:w,children:g.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:`url(${Rk})`,backgroundSize:"10%",backgroundRepeat:"no-repeat",backgroundPosition:"70%"}})})}return g.jsxs(hk,{children:[g.jsx("h1",{children:t}),g.jsx(gk,{...s,responsive:i,children:e.map((c,f)=>g.jsx(mk,{children:g.jsx(_k,{data:c})},f))})]})}const Pk="/assets/flavors-3c2cd190.png",Tk="/assets/Flavors_2-3756ff3f.png";function bk(){const[e,t]=_.useState(""),[n,r]=_.useState([]);return _.useEffect(()=>{(async()=>{Ze.get("/dishes/"+e).then(o=>{r(o.data)}).catch(o=>{console.log(o)})})()},[e]),g.jsxs(eS,{children:[g.jsx(hc,{search:t}),g.jsxs(nS,{children:[g.jsxs(tS,{children:[g.jsx("img",{className:"mobile",src:Tk}),g.jsx("img",{className:"desktop",src:Pk}),g.jsxs("div",{className:"bannerText",children:[g.jsx("h1",{children:"Sabores inigualáveis"}),g.jsx("p",{children:"Sinta o cuidado do preparo com ingredientes selecionados"})]})]}),g.jsx("div",{children:n.length>0&&g.jsxs(g.Fragment,{children:[g.jsx(Ns,{slides:n.filter(i=>i.dishcategory==="1"),title:"Pratos"}),g.jsx(Ns,{slides:n.filter(i=>i.dishcategory==="2"),title:"Sobremesas"}),g.jsx(Ns,{slides:n.filter(i=>i.dishcategory==="3"),title:"Bebidas"})]})})]}),g.jsx(mc,{})]})}const Lk=J.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100vh; 
font-family: 'Poppins', sans-serif;


.header {
    color: ${({theme:e})=>e.COLORS.LIGHT_300};
    margin-top: 12rem;
    margin-bottom: 2rem;
    padding: 0 12.3rem;
    
    > button {
        display: flex;
        align-items: center;
        background: none;
        border: none;
        color: ${({theme:e})=>e.COLORS.LIGHT_300};
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 140%;
    }  
    
    @media (max-width: 993px) {
      padding: 0 3.5rem;
    }
}
`,jk=J.div`
  overflow-x: auto;
`,Nk=J.div`
padding: 0 12.1rem;
padding-bottom: 12rem;
padding-top: 2rem;
display: flex;

.detailsImage {

  > img {
    width: clamp(26rem, 30vw, 39rem);
    height: clamp(26rem, 30vw, 39rem) ;
    border-radius: 50%;
    object-fit: cover;
  }
}

.detailsContent {
  width: 100%;
  padding-left: 4.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;



  > .detailsTexts {
    
    > h1 {
      
      font-size: clamp(2.7rem, 3vw, 4rem);
      font-weight: 500;
      line-height: 140%;  
      margin-bottom: 2.4rem;
      
    }

    > p {
      font-size: clamp(1.6rem, 3vw, 2.4rem);
      font-weight: 400;
      line-height: 140%;
     
    }

  }



  > .detailsTags {
    display: flex;
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
    flex-wrap: wrap;

    > div {
      font-size: 1.4rem;
      display: flex;
      align-items: center;

      height: 3.2rem;
      padding: 0 1.6rem;

      border-radius: .8rem;
      font-family: 'Roboto', sans-serif;
      background-color: ${({theme:e})=>e.COLORS.LIGHT_600};
      justify-content: space-between;

      margin-right: 1.2rem;
      margin-bottom: 1.2rem;
    }
  }



  > .detailsButtons {
    display: flex;
    align-items: center;
    gap: 3.3rem;

  > .editBtn {
    width: 13.1rem;
  }

  > .userBtn.mobile {
     display: none;
     width: 18.8rem;
     height: 3.7rem;
     font-size: 1rem;
     padding: 1.2rem 1.9rem;

     > p {
      align-items: center;
      display: flex;
     }

    }

    > .userBtn {
      display: flex ;
      justify-content: center;
      align-items: center !important;
      background-color: ${({theme:e})=>e.COLORS.TOMATO_100};
      color: ${({theme:e})=>e.COLORS.LIGHT_100};
      border: none;
      border-radius: .5rem;

      padding: 1.2rem 2.4rem;
      width: 16.2rem;

      font-family: 'Poppins', sans-serif;
      font-size: 1.4rem;
      font-weight: 500;
    }

  }
}

@media (max-width: 500px) {
  .detailsButtons {

  > .editBtn {
    width: 100% !important;
  }

 .userBtn.mobile {
  display: inherit !important;
}

.userBtn.desktop {
  display: none;
}
  }
}


@media (max-width: 993px) {
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  padding-left: 4rem;
  padding-right: 4rem;
  padding-bottom: 12rem;
  padding-top: 2rem;

  .detailsContent {
    padding-left: 0;
    margin-top: 1.6rem;
      }

  .detailsButtons {
    margin-top: 2.4rem;
    gap: 1.6rem !important;
    justify-content: center;
  }

  .detailsTags {
    justify-content: center;
  }
}

`;function Ak(){const{role:e}=hn(),t=parseInt(e),n=Nm(),[r,i]=_.useState(""),[o,l]=_.useState(""),[s,a]=_.useState(""),[u,c]=_.useState([]),[f,h]=_.useState(""),[w,v]=_.useState(1),y=`${Ze.defaults.baseURL}/files/${f}`,x=S=>S.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});_.useEffect(()=>{const S=async()=>{Ze.get("/dishes/details/"+n.id).then(k=>{i(k.data.dishname),l(k.data.dishprice),a(k.data.description),h(k.data.image),c(JSON.parse(k.data.tags))}).catch(k=>{console.log(k)})};n.id&&S()},[n.id]);const p=$n();function d(){p("/")}function m(){p("/managedishes/"+n.id)}return g.jsxs(Lk,{children:[g.jsx(hc,{}),g.jsx("div",{className:"header",children:g.jsxs("button",{onClick:d,children:[g.jsx("img",{src:Oc,style:{marginRight:"10px"}}),g.jsx("p",{children:"voltar"})]})}),g.jsx(jk,{children:g.jsxs(Nk,{children:[g.jsx("div",{className:"detailsImage",children:f!==""&&g.jsx("img",{src:y})}),g.jsxs("div",{className:"detailsContent",children:[g.jsxs("div",{className:"detailsTexts",children:[g.jsx("h1",{children:r}),g.jsx("p",{children:s})]}),g.jsx("div",{className:"detailsTags",children:u.map((S,k)=>g.jsx("div",{children:S},k))}),g.jsxs("div",{className:"detailsButtons",children:[t===1&&g.jsxs(g.Fragment,{children:[g.jsx(dg,{className:"counter",sentQuantity:w,handleQuantity:S=>v(S)}),g.jsx("button",{className:"userBtn desktop",children:g.jsxs("p",{children:["incluir ∙ ",x(o*w)]})}),g.jsx("button",{className:"userBtn mobile",children:g.jsxs("p",{children:[g.jsx("img",{style:{width:"21px",height:"21px",marginRight:"5px"},src:Fa})," pedir ∙ ",x(o*w)]})})]}),t===2&&g.jsx(yr,{className:"editBtn",title:"Editar prato",onClick:m})]})]})]})}),g.jsx(mc,{})]})}const zk="/assets/chevron-down-81d86b6f.svg",Dk=J.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100vh; 

.header {
    color: ${({theme:e})=>e.COLORS.LIGHT_300};
    font-family: 'Poppins', sans-serif;
    margin-top: 12rem;
    margin-bottom: 2rem;
    padding: 0 12.3rem;
    


    > button {
        display: flex;
        align-items: center;
        background: none;
        border: none;
        color: ${({theme:e})=>e.COLORS.LIGHT_300};
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 140%;
    }  

@media (max-width: 600px) {
    padding: 0 3.2rem;

   
    
    > button {
        font-size: 1.6rem;

        > img {
        width: 8px;
        margin-right: .6rem !important;
    }
    }

}
    
}

`,Ik=J.div`
padding: 0 12.3rem;
padding-bottom: 12rem;
overflow-x: auto;


> h1 { 
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%;
        color: ${({theme:e})=>e.COLORS.LIGHT_300};
        font-family: 'Poppins', sans-serif;
    }

.mobileTitle {
    display: none;
}

@media (max-width: 600px) {
    padding: 0 3.2rem;
    padding-bottom: 12rem;

    h1 {
        margin-bottom: 1rem;
    }

    .mobileTitle {
    display: inherit;
}

   .desktopTitle {
    display: none;
   }
}

`,$k=J.form`
display: flex;
flex-direction: column;


span {
    font-family: 'Roboto', sans-serif;
    color: ${({theme:e})=>e.COLORS.LIGHT_400};
    font-size: 1.4rem;
    margin-bottom: 1.6rem;
}

input {
        height: 4.8rem;
        background-color: ${({theme:e})=>e.COLORS.DARK_800};
        border: none;
        padding: 1.2rem 1.6rem;
        border-radius: .8rem;
        color: ${({theme:e})=>e.COLORS.LIGHT_100};
        font-family: 'Roboto', sans-serif;
}

.container {
   display: flex;
   margin-top: 3.2rem;
   gap: 3.2rem;
   
}

.image-required{
  border: 2px groove;
  border-color: ${({theme:e})=>e.COLORS.TOMATO_100};
}


.dishImage {
    width: 23.4rem;
    flex-shrink: 0;
    display:flex;
    flex-direction: column;
    
    > label {
        height: 4.8rem;
        display: flex;
        align-items: center;
        gap: .8rem;
        padding: 1.2rem 3.2rem;
        background-color: ${({theme:e})=>e.COLORS.DARK_800};
        border-radius: .8rem;
        cursor: pointer;
 
        font-size: 1.4rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        overflow: hidden;
    }

    > input[type='file'] {
        display: none;
        }
}

.dishName {
    width: 100%;
    display: flex;
    flex-direction: column;
    
    > input {
        outline: none;
    }
}

.dishCategory {
    width: 60%;
    display: flex;
    flex-direction: column;

    > select {
        height: 4.8rem;
        border: none;
        border-radius: .5rem;
        padding: 1.6rem;
        color: ${({theme:e})=>e.COLORS.LIGHT_400};
        font-family: 'Roboto', sans-serif;
        cursor: pointer;

        appearance:none;
        -webkit-appearance:none; 
        -moz-appearance:none; 
        -ms-appearance:none; 

        background-position: calc(100% - 12px) center !important;
        background: url(${zk}) no-repeat;
        background-color: ${({theme:e})=>e.COLORS.DARK_800};
    }
}


.dishIngredients {
    display: flex;
    flex-direction: column;
    width: 100%;

    .tagsWrapper {
        display: flex;
        flex-wrap: wrap;

        height: auto;
        background-color: ${({theme:e})=>e.COLORS.DARK_800};
        border-radius: .8rem;

        > div {
           margin-top: .8rem;
           margin-bottom: .8rem;
           margin-right: .8rem;
           margin-left: .8rem;
        }
    }
}

.dishPrice {
    display: flex;
    flex-direction: column;
    width: 20%;

    > input {
        outline: none;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    }
}

.dishDescription {
display: flex;
flex-direction: column;
width: 100%;

> textarea {
    resize: none;
    height: 17.2rem;
    border-radius: 0.8rem;
    padding: 1.4rem;
    background-color: ${({theme:e})=>e.COLORS.DARK_800};

    font-family: 'Roboto', sans-serif;
    color: ${({theme:e})=>e.COLORS.LIGHT_100};
    font-size: 1.6rem;
    border: none;
    outline: none;
}
}

.dishButtons {
    width: 100%;
    display: flex;
    justify-content: right;
    gap: 3.2rem;
    margin-left: auto;

    .delete {
        width: 13.5rem;
        background-color: ${({theme:e})=>e.COLORS.DARK_800};
    }

    .save {
        width: 17.2rem;
        background-color: ${({theme:e})=>e.COLORS.TOMATO_400};
    }
}

@media (max-width: 890px) {
    .container {
        flex-direction: column;
        gap: 2.4rem;
        margin-top: 2.4rem;
    }

    .dishImage,
    .dishPrice,
    .dishCategory {
        width: 100%;
    }

    .dishButtons {
        justify-content: center;

        .delete, .save {
            width: 100%;
        }
    }

    .dishCategory {
        > select {
            background-color: ${({theme:e})=>e.COLORS.DARK_900};
        }
    }
}

`,Mk=J.div`
  width: 100%;

.tagContainer {
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
}

.removeTag {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 3.2rem;
  padding: 0 1.6rem;
  border-radius: .8rem;
  background-color: ${({theme:e})=>e.COLORS.LIGHT_600};
  
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;

  > button {
    border: none;  
    background: none; 
    margin-left: .8rem;
  }
}

.createTag {
  position: relative;

   > input {
    width: 14rem;
    border: 1px dashed;
    border-color: ${({theme:e})=>e.COLORS.LIGHT_500};
    
    height: 3.2rem;
    padding-left: 1.6rem;
    padding-right: 3rem;
    
    outline: none;
  }

   > button {
    position: absolute;
    right: 1.6rem;
    height: 100%;
    border: none;  
    background: none; 
  }

}
`,Fk="/assets/PlusGrey-44f03801.svg",Hk="/assets/X-bcc9b2fd.svg";function Uk({sentTags:e,handleTags:t}){const[n,r]=_.useState([]),[i,o]=_.useState("");_.useEffect(()=>{r(e)},[e]);const l=c=>{const f=[...n];f.splice(c,1),r(f),t(f)},s=c=>{const f=c.target.value;o(f)},a=c=>{c.key==="Enter"&&i&&u()},u=()=>{if(i!==""){if(n.find(c=>c.toLowerCase()===i.toLowerCase())){o("");return}r([...n,i]),t([...n,i]),o("")}};return g.jsx(Mk,{children:g.jsx("div",{children:g.jsxs("div",{className:"tagContainer",children:[n.map((c,f)=>g.jsxs("div",{className:"removeTag",children:[c,g.jsx("button",{type:"button",onClick:()=>{l(f)},children:g.jsx("img",{src:Hk})})]},f)),g.jsxs("div",{className:"createTag",children:[g.jsx("input",{type:"text",placeholder:"Adicionar",value:i,onChange:s,onBlur:u,onKeyDown:a,required:!(n.length>0)}),g.jsx("button",{type:"button",onClick:u,children:g.jsx("img",{src:Fk})})]})]})})})}const Bk="/assets/UploadSimple-665ff025.svg";function bd(){const e=Nm(),[t,n]=_.useState(""),[r,i]=_.useState(""),[o,l]=_.useState(""),[s,a]=_.useState(""),[u,c]=_.useState([]),[f,h]=_.useState(""),[w,v]=_.useState(0);let y=!!e.id;const x=$n();function p(){x("/")}_.useEffect(()=>{const k=async()=>{Ze.get("/dishes/details/"+e.id).then(C=>{n(C.data.dishname),i(C.data.dishcategory),l(C.data.dishprice),a(C.data.description),h(C.data.image),c(JSON.parse(C.data.tags))}).catch(C=>{console.log(C)})};e.id&&k()},[]),_.useEffect(()=>{const k=P=>{P.key==="Enter"&&P.preventDefault()},C=document.getElementById("form");return C.addEventListener("keydown",k),()=>{C.removeEventListener("keydown",k)}},[]);const d=k=>{const C=k.target.value;a(C),v(C.length)},m=()=>{window.confirm("Tem certeza que deseja excluir o prato?")&&Ze.delete("/dishes/"+e.id).then(C=>{alert(C.data.message),x("/")}).catch(C=>{console.log(C)})},S=k=>{k.preventDefault();const C=new FormData;C.append("dishname",t),C.append("dishcategory",r),C.append("dishprice",o),C.append("description",s),C.append("tags",JSON.stringify(u)),f.name&&C.append("image",f),e.id?Ze.put("/dishes/"+e.id,C).then(P=>{alert(P.data.message),p()}).catch(P=>{console.log(P)}):Ze.post("/dishes",C).then(P=>{alert(P.data.message),x("/")}).catch(P=>{console.log(P)})};return g.jsxs(Dk,{children:[g.jsx(hc,{}),g.jsx("div",{className:"header",children:g.jsxs("button",{onClick:p,children:[g.jsx("img",{src:Oc,style:{marginRight:"10px"}}),g.jsx("p",{children:"voltar"})]})}),g.jsxs(Ik,{children:[y?g.jsx("h1",{children:"Editar prato"}):g.jsxs(g.Fragment,{children:[g.jsx("h1",{className:"desktopTitle",children:"Adicionar prato"}),g.jsx("h1",{className:"mobileTitle",children:"Novo prato"})]}),g.jsxs($k,{id:"form",onSubmit:S,children:[g.jsxs("div",{className:"container",children:[g.jsxs("div",{className:"dishImage",children:[g.jsx("span",{children:"Imagem do Prato "}),g.jsxs("label",{htmlFor:"image",className:f?"":"image-required",children:[g.jsx("img",{src:Bk}),f?f.name?f.name:f:"Selecione imagem"]}),g.jsx("input",{id:"image",type:"file",accept:"image/*",name:"image",onChange:k=>h(k.target.files[0]),required:!y})]}),g.jsxs("div",{className:"dishName",children:[g.jsx("span",{children:"Nome"}),g.jsx("input",{type:"text",value:t,onChange:k=>n(k.target.value),placeholder:"Ex.: Salada Ceasar",required:!0})]}),g.jsxs("div",{className:"dishCategory",children:[g.jsx("span",{children:"Categoria"}),g.jsxs("select",{value:r,onChange:k=>i(k.target.value),required:!0,children:[g.jsx("option",{value:"",children:"Escolha uma"}),g.jsx("option",{value:"1",children:"Pratos"}),g.jsx("option",{value:"2",children:"Sobremesas"}),g.jsx("option",{value:"3",children:"Bebidas"})]})]})]}),g.jsxs("div",{className:"container",children:[g.jsxs("div",{className:"dishIngredients",children:[g.jsx("span",{children:"Ingredientes"}),g.jsx("div",{className:"tagsWrapper",children:g.jsx(Uk,{sentTags:u,handleTags:k=>c(k)})})]}),g.jsxs("div",{className:"dishPrice",children:[g.jsx("span",{children:"Preço"}),g.jsx("input",{type:"number",value:o,onChange:k=>l(k.target.value),placeholder:"R$ 00,00",required:!0})]})]}),g.jsx("div",{className:"container",children:g.jsxs("div",{className:"dishDescription",children:[g.jsx("span",{children:"Descrição"}),g.jsx("textarea",{required:!0,onChange:d,value:s,placeholder:"Fale brevemente sobre o prato, seus ingredientes e composição",maxLength:"250"}),g.jsxs("span",{children:[w,"/250"]})]})}),g.jsx("div",{className:"container",children:g.jsxs("div",{className:"dishButtons",children:[y&&g.jsx(yr,{title:"Excluir prato",onClick:m,className:"delete"}),g.jsx(yr,{type:"submit",disabled:!f,title:"Salvar alterações",className:"save"})]})})]})]}),g.jsx(mc,{})]})}function Wk(){return g.jsxs(Dm,{children:[g.jsx(En,{path:"/",element:g.jsx(bk,{})}),g.jsx(En,{path:"/details/:id",element:g.jsx(Ak,{})}),g.jsx(En,{path:"/managedishes",element:g.jsx(bd,{})}),g.jsx(En,{path:"/managedishes/:id",element:g.jsx(bd,{})})]})}const Vk=J.div`
height: 100vh;
display: flex;

@media (max-width: 992px) {
flex-direction: column;   
 }
`,Kk=J.div`
display: flex;
align-items: center;
margin-left: 10%;

> img {
    width: 4.9rem;
    margin-right: 1.9rem;
}

> span {
    font-family: 'Roboto', sans-serif;
    font-size:clamp(3.7rem, 3vw, 4.2rem);
    font-weight: 700;
}


@media (max-width: 992px) {
justify-content: center;
margin-left: 0;
margin-right: 0;
margin-top: 4rem;
 }


 @media (max-width: 555px) {
    margin-top: 8rem;

    > img {
        width: 3rem;
        margin-right: 1rem;
    }

    > span {
    font-size: 3rem;
   }
 }
`,Gk=J.form`
padding: 6.4rem;

width: 47.6rem;
margin: auto;
margin-right: 10rem;

border-radius: 1.6rem;

display: flex;
flex-direction: column;

background-color: ${({theme:e})=>e.COLORS.DARK_700};

> h1 {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 3.2rem;
}


> label {
    font-family: 'Roboto', sans-serif;
    color: ${({theme:e})=>e.COLORS.LIGHT_400};
    font-weight: 100;
    font-size: 1.6rem;
    margin-top: 3.2rem;
    margin-bottom: .8rem;
}

> input {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 1.6rem;
    color: ${({theme:e})=>e.COLORS.LIGHT_100};
    background-color: ${({theme:e})=>e.COLORS.DARK_700};

    width: 100%;
    height: 4.8rem;
    padding: 1.6rem 1.4rem;

    border-radius: .5rem;
    border: 1px solid;
    border-color: ${({theme:e})=>e.COLORS.LIGHT_100};
}


> a {
    text-align: center;
    margin-top: 3.2rem;
    color: ${({theme:e})=>e.COLORS.LIGHT_100};
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
    font-size: 1.4rem;
}

> button {
    margin-top: 3.2rem;
}

@media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
    width: 47.6rem;
}

@media (max-width: 555px) {
    background-color: ${({theme:e})=>e.COLORS.DARK_400};
    padding: 0 4rem 4rem;
    width: 100%;
    margin-top: 7rem;

    > h1 {
        display: none;
    }

    > input {
        background-color: ${({theme:e})=>e.COLORS.DARK_900};
    }
}

@media (max-width: 360px) {
    padding: 0 2rem 4rem;
}

`;function Qk(){const[e,t]=_.useState(""),[n,r]=_.useState(""),{signIn:i}=hn();function o(l){l.preventDefault(),i({email:e,password:n})}return g.jsxs(Vk,{children:[g.jsxs(Kk,{children:[g.jsx("img",{src:pc}),g.jsx("span",{children:"Food explorer"})]}),g.jsxs(Gk,{id:"form_base",onSubmit:o,children:[g.jsx("h1",{children:"Faça login"}),g.jsx("label",{htmlFor:"senha",children:"Email"}),g.jsx("input",{id:"email",placeholder:"Exemplo: exemplo@exemplo.com.br",type:"email",onChange:l=>t(l.target.value),required:!0}),g.jsx("label",{htmlFor:"senha",children:"Senha"}),g.jsx("input",{id:"senha",placeholder:"No mínimo 6 caracteres",type:"password",onChange:l=>r(l.target.value),required:!0}),g.jsx(yr,{title:"Entrar",type:"submit",form:"form_base"}),g.jsx(dc,{to:"/register",children:"Criar uma conta"})]})]})}const qk=J.div`
height: 100vh;
display: flex;


@media (max-width: 992px) {
flex-direction: column;   
 }
`,Yk=J.div`
display: flex;
align-items: center;
margin-left: 10%;

> img {
    width: 4.9rem;
    margin-right: 1.9rem;
}

> span {
    font-family: 'Roboto', sans-serif;
    font-size:clamp(3.7rem, 3vw, 4.2rem);
    font-weight: 700;
}


@media (max-width: 992px) {
justify-content: center;
margin-left: 0;
margin-right: 0;
margin-top: 4rem;
 }


 @media (max-width: 555px) {
    margin-top: 8rem;

    > img {
        width: 3rem;
        margin-right: 1rem;
    }

    > span {
    font-size: 3rem;
   }
 }
`,Xk=J.form`
padding: 6.4rem;

width: 47.6rem;
margin: auto;
margin-right: 10rem;

border-radius: 1.6rem;

display: flex;
flex-direction: column;

background-color: ${({theme:e})=>e.COLORS.DARK_700};

> h1 {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 3.2rem;
}


> label {
    font-family: 'Roboto', sans-serif;
    color: ${({theme:e})=>e.COLORS.LIGHT_400};
    font-weight: 100;
    font-size: 1.6rem;
    margin-top: 3.2rem;
    margin-bottom: .8rem;
}

> input {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 1.6rem;
    color: ${({theme:e})=>e.COLORS.LIGHT_100};
    background-color: ${({theme:e})=>e.COLORS.DARK_900};

    width: 100%;
    height: 4.8rem;
    padding: 1.6rem 1.4rem;

    border-radius: .5rem;
    border: none;
}


> a {
    text-align: center;
    margin-top: 3.2rem;
    color: ${({theme:e})=>e.COLORS.LIGHT_100};
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
    font-size: 1.4rem;
}

> button {
    margin-top: 3.2rem;
}

@media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 7rem;
    width: 47.6rem;
    padding-top: 2rem;
}

@media (max-width: 555px) {
    background-color: ${({theme:e})=>e.COLORS.DARK_400};
    padding: 0 4rem 4rem;
    width: 100%;

    > h1 {
        display: none;
    }
}

@media (max-width: 360px) {
    padding: 0 2rem 4rem;
}
`;function Jk(){const[e,t]=_.useState(""),[n,r]=_.useState(""),[i,o]=_.useState(""),l=$n();function s(){var u=document.getElementById("senha"),c=u.value;c.length<6?u.setCustomValidity("A senha deve ter no mínimo 6 caracteres"):u.setCustomValidity("")}function a(u){u.preventDefault(),Ze.post("/users",{name:e,email:n,password:i}).then(()=>{alert("Usuário cadastrado com sucesso!"),l("/")}).catch(c=>{c.response?alert(c.response.data.message):alert("Não foi possível realizar o cadastro")})}return g.jsxs(qk,{children:[g.jsxs(Yk,{children:[g.jsx("img",{src:pc}),g.jsx("span",{children:"Food explorer"})]}),g.jsxs(Xk,{id:"form_base",onSubmit:a,children:[g.jsx("h1",{children:"Crie sua conta"}),g.jsx("label",{htmlFor:"nome",children:"Seu nome"}),g.jsx("input",{id:"nome",placeholder:"Exemplo: Maria da Silva",type:"text",onChange:u=>t(u.target.value),required:!0}),g.jsx("label",{htmlFor:"senha",children:"Email"}),g.jsx("input",{id:"email",placeholder:"Exemplo: exemplo@exemplo.com.br",type:"email",onChange:u=>r(u.target.value),required:!0}),g.jsx("label",{htmlFor:"senha",children:"Senha"}),g.jsx("input",{id:"senha",placeholder:"No mínimo 6 caracteres",type:"password",onChange:u=>o(u.target.value),onInput:s,required:!0}),g.jsx(yr,{title:"Criar conta",type:"submit",form:"form_base"}),g.jsx(dc,{to:"/",children:"Já tenho uma conta"})]})]})}function Zk(){return g.jsxs(Dm,{children:[g.jsx(En,{path:"/",element:g.jsx(Qk,{})}),g.jsx(En,{path:"/register",element:g.jsx(Jk,{})})]})}function eO(){const{user:e}=hn();return g.jsx(Yw,{children:e?g.jsx(Wk,{}):g.jsx(Zk,{})})}As.createRoot(document.getElementById("root")).render(g.jsx(mn.StrictMode,{children:g.jsxs(z0,{theme:$0,children:[g.jsx(M0,{}),g.jsx(rw,{children:g.jsx(eO,{})})]})}));
