(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Rg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Gu={exports:{}},Wa={},Hu={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function cv(){if(hm)return xt;hm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function g(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function v(O,Z,Ue){this.props=O,this.context=Z,this.refs=C,this.updater=Ue||y}v.prototype.isReactComponent={},v.prototype.setState=function(O,Z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Z,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=v.prototype;function b(O,Z,Ue){this.props=O,this.context=Z,this.refs=C,this.updater=Ue||y}var N=b.prototype=new _;N.constructor=b,w(N,v.prototype),N.isPureReactComponent=!0;var L=Array.isArray,B=Object.prototype.hasOwnProperty,I={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function M(O,Z,Ue){var Ge,Fe={},ae=null,xe=null;if(Z!=null)for(Ge in Z.ref!==void 0&&(xe=Z.ref),Z.key!==void 0&&(ae=""+Z.key),Z)B.call(Z,Ge)&&!F.hasOwnProperty(Ge)&&(Fe[Ge]=Z[Ge]);var me=arguments.length-2;if(me===1)Fe.children=Ue;else if(1<me){for(var we=Array(me),Ze=0;Ze<me;Ze++)we[Ze]=arguments[Ze+2];Fe.children=we}if(O&&O.defaultProps)for(Ge in me=O.defaultProps,me)Fe[Ge]===void 0&&(Fe[Ge]=me[Ge]);return{$$typeof:s,type:O,key:ae,ref:xe,props:Fe,_owner:I.current}}function P(O,Z){return{$$typeof:s,type:O.type,key:Z,ref:O.ref,props:O.props,_owner:O._owner}}function W(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function k(O){var Z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ue){return Z[Ue]})}var Y=/\/+/g;function re(O,Z){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):Z.toString(36)}function le(O,Z,Ue,Ge,Fe){var ae=typeof O;(ae==="undefined"||ae==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(ae){case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case s:case e:xe=!0}}if(xe)return xe=O,Fe=Fe(xe),O=Ge===""?"."+re(xe,0):Ge,L(Fe)?(Ue="",O!=null&&(Ue=O.replace(Y,"$&/")+"/"),le(Fe,Z,Ue,"",function(Ze){return Ze})):Fe!=null&&(W(Fe)&&(Fe=P(Fe,Ue+(!Fe.key||xe&&xe.key===Fe.key?"":(""+Fe.key).replace(Y,"$&/")+"/")+O)),Z.push(Fe)),1;if(xe=0,Ge=Ge===""?".":Ge+":",L(O))for(var me=0;me<O.length;me++){ae=O[me];var we=Ge+re(ae,me);xe+=le(ae,Z,Ue,we,Fe)}else if(we=g(O),typeof we=="function")for(O=we.call(O),me=0;!(ae=O.next()).done;)ae=ae.value,we=Ge+re(ae,me++),xe+=le(ae,Z,Ue,we,Fe);else if(ae==="object")throw Z=String(O),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return xe}function G(O,Z,Ue){if(O==null)return O;var Ge=[],Fe=0;return le(O,Ge,"","",function(ae){return Z.call(Ue,ae,Fe++)}),Ge}function Q(O){if(O._status===-1){var Z=O._result;Z=Z(),Z.then(function(Ue){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ue)},function(Ue){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ue)}),O._status===-1&&(O._status=0,O._result=Z)}if(O._status===1)return O._result.default;throw O._result}var X={current:null},$={transition:null},ce={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:$,ReactCurrentOwner:I};function ue(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:G,forEach:function(O,Z,Ue){G(O,function(){Z.apply(this,arguments)},Ue)},count:function(O){var Z=0;return G(O,function(){Z++}),Z},toArray:function(O){return G(O,function(Z){return Z})||[]},only:function(O){if(!W(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},xt.Component=v,xt.Fragment=n,xt.Profiler=o,xt.PureComponent=b,xt.StrictMode=r,xt.Suspense=h,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,xt.act=ue,xt.cloneElement=function(O,Z,Ue){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ge=w({},O.props),Fe=O.key,ae=O.ref,xe=O._owner;if(Z!=null){if(Z.ref!==void 0&&(ae=Z.ref,xe=I.current),Z.key!==void 0&&(Fe=""+Z.key),O.type&&O.type.defaultProps)var me=O.type.defaultProps;for(we in Z)B.call(Z,we)&&!F.hasOwnProperty(we)&&(Ge[we]=Z[we]===void 0&&me!==void 0?me[we]:Z[we])}var we=arguments.length-2;if(we===1)Ge.children=Ue;else if(1<we){me=Array(we);for(var Ze=0;Ze<we;Ze++)me[Ze]=arguments[Ze+2];Ge.children=me}return{$$typeof:s,type:O.type,key:Fe,ref:ae,props:Ge,_owner:xe}},xt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},xt.createElement=M,xt.createFactory=function(O){var Z=M.bind(null,O);return Z.type=O,Z},xt.createRef=function(){return{current:null}},xt.forwardRef=function(O){return{$$typeof:d,render:O}},xt.isValidElement=W,xt.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:Q}},xt.memo=function(O,Z){return{$$typeof:m,type:O,compare:Z===void 0?null:Z}},xt.startTransition=function(O){var Z=$.transition;$.transition={};try{O()}finally{$.transition=Z}},xt.unstable_act=ue,xt.useCallback=function(O,Z){return X.current.useCallback(O,Z)},xt.useContext=function(O){return X.current.useContext(O)},xt.useDebugValue=function(){},xt.useDeferredValue=function(O){return X.current.useDeferredValue(O)},xt.useEffect=function(O,Z){return X.current.useEffect(O,Z)},xt.useId=function(){return X.current.useId()},xt.useImperativeHandle=function(O,Z,Ue){return X.current.useImperativeHandle(O,Z,Ue)},xt.useInsertionEffect=function(O,Z){return X.current.useInsertionEffect(O,Z)},xt.useLayoutEffect=function(O,Z){return X.current.useLayoutEffect(O,Z)},xt.useMemo=function(O,Z){return X.current.useMemo(O,Z)},xt.useReducer=function(O,Z,Ue){return X.current.useReducer(O,Z,Ue)},xt.useRef=function(O){return X.current.useRef(O)},xt.useState=function(O){return X.current.useState(O)},xt.useSyncExternalStore=function(O,Z,Ue){return X.current.useSyncExternalStore(O,Z,Ue)},xt.useTransition=function(){return X.current.useTransition()},xt.version="18.3.1",xt}var pm;function Rd(){return pm||(pm=1,Hu.exports=cv()),Hu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function uv(){if(mm)return Wa;mm=1;var s=Rd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,m){var x,S={},g=null,y=null;m!==void 0&&(g=""+m),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(y=h.ref);for(x in h)r.call(h,x)&&!l.hasOwnProperty(x)&&(S[x]=h[x]);if(d&&d.defaultProps)for(x in h=d.defaultProps,h)S[x]===void 0&&(S[x]=h[x]);return{$$typeof:e,type:d,key:g,ref:y,props:S,_owner:o.current}}return Wa.Fragment=n,Wa.jsx=u,Wa.jsxs=u,Wa}var gm;function fv(){return gm||(gm=1,Gu.exports=uv()),Gu.exports}var D=fv(),Ct=Rd();const dv=Rg(Ct);var _l={},Wu={exports:{}},kn={},ju={exports:{}},Xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function hv(){return _m||(_m=1,(function(s){function e($,ce){var ue=$.length;$.push(ce);e:for(;0<ue;){var O=ue-1>>>1,Z=$[O];if(0<o(Z,ce))$[O]=ce,$[ue]=Z,ue=O;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var ce=$[0],ue=$.pop();if(ue!==ce){$[0]=ue;e:for(var O=0,Z=$.length,Ue=Z>>>1;O<Ue;){var Ge=2*(O+1)-1,Fe=$[Ge],ae=Ge+1,xe=$[ae];if(0>o(Fe,ue))ae<Z&&0>o(xe,Fe)?($[O]=xe,$[ae]=ue,O=ae):($[O]=Fe,$[Ge]=ue,O=Ge);else if(ae<Z&&0>o(xe,ue))$[O]=xe,$[ae]=ue,O=ae;else break e}}return ce}function o($,ce){var ue=$.sortIndex-ce.sortIndex;return ue!==0?ue:$.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],m=[],x=1,S=null,g=3,y=!1,w=!1,C=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N($){for(var ce=n(m);ce!==null;){if(ce.callback===null)r(m);else if(ce.startTime<=$)r(m),ce.sortIndex=ce.expirationTime,e(h,ce);else break;ce=n(m)}}function L($){if(C=!1,N($),!w)if(n(h)!==null)w=!0,Q(B);else{var ce=n(m);ce!==null&&X(L,ce.startTime-$)}}function B($,ce){w=!1,C&&(C=!1,_(M),M=-1),y=!0;var ue=g;try{for(N(ce),S=n(h);S!==null&&(!(S.expirationTime>ce)||$&&!k());){var O=S.callback;if(typeof O=="function"){S.callback=null,g=S.priorityLevel;var Z=O(S.expirationTime<=ce);ce=s.unstable_now(),typeof Z=="function"?S.callback=Z:S===n(h)&&r(h),N(ce)}else r(h);S=n(h)}if(S!==null)var Ue=!0;else{var Ge=n(m);Ge!==null&&X(L,Ge.startTime-ce),Ue=!1}return Ue}finally{S=null,g=ue,y=!1}}var I=!1,F=null,M=-1,P=5,W=-1;function k(){return!(s.unstable_now()-W<P)}function Y(){if(F!==null){var $=s.unstable_now();W=$;var ce=!0;try{ce=F(!0,$)}finally{ce?re():(I=!1,F=null)}}else I=!1}var re;if(typeof b=="function")re=function(){b(Y)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,G=le.port2;le.port1.onmessage=Y,re=function(){G.postMessage(null)}}else re=function(){v(Y,0)};function Q($){F=$,I||(I=!0,re())}function X($,ce){M=v(function(){$(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function($){$.callback=null},s.unstable_continueExecution=function(){w||y||(w=!0,Q(B))},s.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<$?Math.floor(1e3/$):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function($){switch(g){case 1:case 2:case 3:var ce=3;break;default:ce=g}var ue=g;g=ce;try{return $()}finally{g=ue}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function($,ce){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ue=g;g=$;try{return ce()}finally{g=ue}},s.unstable_scheduleCallback=function($,ce,ue){var O=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?O+ue:O):ue=O,$){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=ue+Z,$={id:x++,callback:ce,priorityLevel:$,startTime:ue,expirationTime:Z,sortIndex:-1},ue>O?($.sortIndex=ue,e(m,$),n(h)===null&&$===n(m)&&(C?(_(M),M=-1):C=!0,X(L,ue-O))):($.sortIndex=Z,e(h,$),w||y||(w=!0,Q(B))),$},s.unstable_shouldYield=k,s.unstable_wrapCallback=function($){var ce=g;return function(){var ue=g;g=ce;try{return $.apply(this,arguments)}finally{g=ue}}}})(Xu)),Xu}var vm;function pv(){return vm||(vm=1,ju.exports=hv()),ju.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function mv(){if(xm)return kn;xm=1;var s=Rd(),e=pv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},S={};function g(t){return h.call(S,t)?!0:h.call(x,t)?!1:m.test(t)?S[t]=!0:(x[t]=!0,!1)}function y(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,a,c){if(i===null||typeof i>"u"||y(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,a,c,f,p,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=T}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function b(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,b);v[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,b);v[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,b);v[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function N(t,i,a,c){var f=v.hasOwnProperty(i)?v[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,f,c)&&(a=null),c||f===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),I=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),k=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),$=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=$&&t[$]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,O;function Z(t){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+t}var Ue=!1;function Ge(t,i){if(!t||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var c=oe}Reflect.construct(t,[],i)}else{try{i.call()}catch(oe){c=oe}t.call(i.prototype)}else{try{throw Error()}catch(oe){c=oe}t()}}catch(oe){if(oe&&c&&typeof oe.stack=="string"){for(var f=oe.stack.split(`
`),p=c.stack.split(`
`),T=f.length-1,U=p.length-1;1<=T&&0<=U&&f[T]!==p[U];)U--;for(;1<=T&&0<=U;T--,U--)if(f[T]!==p[U]){if(T!==1||U!==1)do if(T--,U--,0>U||f[T]!==p[U]){var z=`
`+f[T].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=T&&0<=U);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?Z(t):""}function Fe(t){switch(t.tag){case 5:return Z(t.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return t=Ge(t.type,!1),t;case 11:return t=Ge(t.type.render,!1),t;case 1:return t=Ge(t.type,!0),t;default:return""}}function ae(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case I:return"Portal";case P:return"Profiler";case M:return"StrictMode";case re:return"Suspense";case le:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case W:return(t._context.displayName||"Context")+".Provider";case Y:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case G:return i=t.displayName||null,i!==null?i:ae(t.type)||"Memo";case Q:i=t._payload,t=t._init;try{return ae(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(i);case 8:return i===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function we(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=we(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,p.call(this,T)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function tt(t){t._valueTracker||(t._valueTracker=Ze(t))}function Ut(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=we(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function ft(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wt(t,i){var a=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function rt(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=me(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function $e(t,i){i=i.checked,i!=null&&N(t,"checked",i,!1)}function Mt(t,i){$e(t,i);var a=me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Yt(t,i.type,a):i.hasOwnProperty("defaultValue")&&Yt(t,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Et(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Yt(t,i,a){(i!=="number"||ft(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var H=Array.isArray;function yt(t,i,a,c){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&c&&(t[a].defaultSelected=!0)}else{for(a=""+me(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function dt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lt(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(H(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:me(a)}}function Le(t,i){var a=me(i.value),c=me(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function Bt(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function R(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?R(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var K,pe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ge(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Pe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function fe(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function de(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=fe(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,f):t[a]=f}}var De=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Be(t,i){if(i){if(De[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function be(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ee=null;function st(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ot=null,mt=null,V=null;function Te(t){if(t=Ra(t)){if(typeof ot!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Lo(i),ot(t.stateNode,t.type,i))}}function he(t){mt?V?V.push(t):V=[t]:mt=t}function ke(){if(mt){var t=mt,i=V;if(V=mt=null,Te(t),i)for(t=0;t<i.length;t++)Te(i[t])}}function Ce(t,i){return t(i)}function _e(){}var je=!1;function Ie(t,i,a){if(je)return t(i,a);je=!0;try{return Ce(t,i,a)}finally{je=!1,(mt!==null||V!==null)&&(_e(),ke())}}function Qe(t,i){var a=t.stateNode;if(a===null)return null;var c=Lo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var pt=!1;if(d)try{var en={};Object.defineProperty(en,"passive",{get:function(){pt=!0}}),window.addEventListener("test",en,en),window.removeEventListener("test",en,en)}catch{pt=!1}function Qn(t,i,a,c,f,p,T,U,z){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(a,oe)}catch(Se){this.onError(Se)}}var zi=!1,ps=null,Br=!1,ms=null,Vi={onError:function(t){zi=!0,ps=t}};function la(t,i,a,c,f,p,T,U,z){zi=!1,ps=null,Qn.apply(Vi,arguments)}function mo(t,i,a,c,f,p,T,U,z){if(la.apply(this,arguments),zi){if(zi){var oe=ps;zi=!1,ps=null}else throw Error(n(198));Br||(Br=!0,ms=oe)}}function Mi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function zr(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ca(t){if(Mi(t)!==t)throw Error(n(188))}function gs(t){var i=t.alternate;if(!i){if(i=Mi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var f=a.return;if(f===null)break;var p=f.alternate;if(p===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===a)return ca(f),t;if(p===c)return ca(f),i;p=p.sibling}throw Error(n(188))}if(a.return!==c.return)a=f,c=p;else{for(var T=!1,U=f.child;U;){if(U===a){T=!0,a=f,c=p;break}if(U===c){T=!0,c=f,a=p;break}U=U.sibling}if(!T){for(U=p.child;U;){if(U===a){T=!0,a=p,c=f;break}if(U===c){T=!0,c=p,a=f;break}U=U.sibling}if(!T)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function ua(t){return t=gs(t),t!==null?fa(t):null}function fa(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=fa(t);if(i!==null)return i;t=t.sibling}return null}var go=e.unstable_scheduleCallback,_o=e.unstable_cancelCallback,fc=e.unstable_shouldYield,dc=e.unstable_requestPaint,$t=e.unstable_now,hc=e.unstable_getCurrentPriorityLevel,da=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,q=e.unstable_NormalPriority,se=e.unstable_LowPriority,ne=e.unstable_IdlePriority,te=null,Ne=null;function He(t){if(Ne&&typeof Ne.onCommitFiberRoot=="function")try{Ne.onCommitFiberRoot(te,t,void 0,(t.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:ct,qe=Math.log,et=Math.LN2;function ct(t){return t>>>=0,t===0?32:31-(qe(t)/et|0)|0}var ut=64,Ke=4194304;function At(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zt(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,f=t.suspendedLanes,p=t.pingedLanes,T=a&268435455;if(T!==0){var U=T&~f;U!==0?c=At(U):(p&=T,p!==0&&(c=At(p)))}else T=a&~f,T!==0?c=At(T):p!==0&&(c=At(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-Re(i),f=1<<a,c|=t[a],i&=~f;return c}function jt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var T=31-Re(p),U=1<<T,z=f[T];z===-1?((U&a)===0||(U&c)!==0)&&(f[T]=jt(U,i)):z<=i&&(t.expiredLanes|=U),p&=~U}}function nn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ze(){var t=ut;return ut<<=1,(ut&4194240)===0&&(ut=64),t}function mn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function _t(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Re(i),t[i]=a}function Nn(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-Re(a),p=1<<f;i[f]=0,c[f]=-1,t[f]=-1,a&=~p}}function Ln(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-Re(a),f=1<<c;f&i|t[c]&i&&(t[c]|=i),a&=~f}}var vt=0;function Gi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var It,Gt,li,Ot,ci,Ei=!1,Vr=[],cr=null,ur=null,fr=null,ha=new Map,pa=new Map,dr=[],N0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kd(t,i){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":ha.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(i.pointerId)}}function ma(t,i,a,c,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[f]},i!==null&&(i=Ra(i),i!==null&&Gt(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function L0(t,i,a,c,f){switch(i){case"focusin":return cr=ma(cr,t,i,a,c,f),!0;case"dragenter":return ur=ma(ur,t,i,a,c,f),!0;case"mouseover":return fr=ma(fr,t,i,a,c,f),!0;case"pointerover":var p=f.pointerId;return ha.set(p,ma(ha.get(p)||null,t,i,a,c,f)),!0;case"gotpointercapture":return p=f.pointerId,pa.set(p,ma(pa.get(p)||null,t,i,a,c,f)),!0}return!1}function Zd(t){var i=Gr(t.target);if(i!==null){var a=Mi(i);if(a!==null){if(i=a.tag,i===13){if(i=zr(a),i!==null){t.blockedOn=i,ci(t.priority,function(){li(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=mc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);Ee=c,a.target.dispatchEvent(c),Ee=null}else return i=Ra(a),i!==null&&Gt(i),t.blockedOn=a,!1;i.shift()}return!0}function Qd(t,i,a){vo(t)&&a.delete(i)}function D0(){Ei=!1,cr!==null&&vo(cr)&&(cr=null),ur!==null&&vo(ur)&&(ur=null),fr!==null&&vo(fr)&&(fr=null),ha.forEach(Qd),pa.forEach(Qd)}function ga(t,i){t.blockedOn===i&&(t.blockedOn=null,Ei||(Ei=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,D0)))}function _a(t){function i(f){return ga(f,t)}if(0<Vr.length){ga(Vr[0],t);for(var a=1;a<Vr.length;a++){var c=Vr[a];c.blockedOn===t&&(c.blockedOn=null)}}for(cr!==null&&ga(cr,t),ur!==null&&ga(ur,t),fr!==null&&ga(fr,t),ha.forEach(i),pa.forEach(i),a=0;a<dr.length;a++)c=dr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<dr.length&&(a=dr[0],a.blockedOn===null);)Zd(a),a.blockedOn===null&&dr.shift()}var _s=L.ReactCurrentBatchConfig,xo=!0;function I0(t,i,a,c){var f=vt,p=_s.transition;_s.transition=null;try{vt=1,pc(t,i,a,c)}finally{vt=f,_s.transition=p}}function U0(t,i,a,c){var f=vt,p=_s.transition;_s.transition=null;try{vt=4,pc(t,i,a,c)}finally{vt=f,_s.transition=p}}function pc(t,i,a,c){if(xo){var f=mc(t,i,a,c);if(f===null)Lc(t,i,c,So,a),Kd(t,c);else if(L0(f,t,i,a,c))c.stopPropagation();else if(Kd(t,c),i&4&&-1<N0.indexOf(t)){for(;f!==null;){var p=Ra(f);if(p!==null&&It(p),p=mc(t,i,a,c),p===null&&Lc(t,i,c,So,a),p===f)break;f=p}f!==null&&c.stopPropagation()}else Lc(t,i,c,null,a)}}var So=null;function mc(t,i,a,c){if(So=null,t=st(c),t=Gr(t),t!==null)if(i=Mi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=zr(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return So=t,null}function Jd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hc()){case da:return 1;case A:return 4;case q:case se:return 16;case ne:return 536870912;default:return 16}default:return 16}}var hr=null,gc=null,yo=null;function eh(){if(yo)return yo;var t,i=gc,a=i.length,c,f="value"in hr?hr.value:hr.textContent,p=f.length;for(t=0;t<a&&i[t]===f[t];t++);var T=a-t;for(c=1;c<=T&&i[a-c]===f[p-c];c++);return yo=f.slice(t,1<c?1-c:void 0)}function Mo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Eo(){return!0}function th(){return!1}function Hn(t){function i(a,c,f,p,T){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=p,this.target=T,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(a=t[U],this[U]=a?a(p):p[U]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Eo:th,this.isPropagationStopped=th,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),i}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_c=Hn(vs),va=ue({},vs,{view:0,detail:0}),F0=Hn(va),vc,xc,xa,To=ue({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xa&&(xa&&t.type==="mousemove"?(vc=t.screenX-xa.screenX,xc=t.screenY-xa.screenY):xc=vc=0,xa=t),vc)},movementY:function(t){return"movementY"in t?t.movementY:xc}}),nh=Hn(To),O0=ue({},To,{dataTransfer:0}),k0=Hn(O0),B0=ue({},va,{relatedTarget:0}),Sc=Hn(B0),z0=ue({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),V0=Hn(z0),G0=ue({},vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),H0=Hn(G0),W0=ue({},vs,{data:0}),ih=Hn(W0),j0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=q0[t])?!!i[t]:!1}function yc(){return Y0}var $0=ue({},va,{key:function(t){if(t.key){var i=j0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Mo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?X0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yc,charCode:function(t){return t.type==="keypress"?Mo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),K0=Hn($0),Z0=ue({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rh=Hn(Z0),Q0=ue({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yc}),J0=Hn(Q0),e_=ue({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),t_=Hn(e_),n_=ue({},To,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),i_=Hn(n_),r_=[9,13,27,32],Mc=d&&"CompositionEvent"in window,Sa=null;d&&"documentMode"in document&&(Sa=document.documentMode);var s_=d&&"TextEvent"in window&&!Sa,sh=d&&(!Mc||Sa&&8<Sa&&11>=Sa),ah=" ",oh=!1;function lh(t,i){switch(t){case"keyup":return r_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ch(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function a_(t,i){switch(t){case"compositionend":return ch(i);case"keypress":return i.which!==32?null:(oh=!0,ah);case"textInput":return t=i.data,t===ah&&oh?null:t;default:return null}}function o_(t,i){if(xs)return t==="compositionend"||!Mc&&lh(t,i)?(t=eh(),yo=gc=hr=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return sh&&i.locale!=="ko"?null:i.data;default:return null}}var l_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!l_[t.type]:i==="textarea"}function fh(t,i,a,c){he(c),i=Ro(i,"onChange"),0<i.length&&(a=new _c("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var ya=null,Ma=null;function c_(t){Rh(t,0)}function wo(t){var i=Ts(t);if(Ut(i))return t}function u_(t,i){if(t==="change")return i}var dh=!1;if(d){var Ec;if(d){var Tc="oninput"in document;if(!Tc){var hh=document.createElement("div");hh.setAttribute("oninput","return;"),Tc=typeof hh.oninput=="function"}Ec=Tc}else Ec=!1;dh=Ec&&(!document.documentMode||9<document.documentMode)}function ph(){ya&&(ya.detachEvent("onpropertychange",mh),Ma=ya=null)}function mh(t){if(t.propertyName==="value"&&wo(Ma)){var i=[];fh(i,Ma,t,st(t)),Ie(c_,i)}}function f_(t,i,a){t==="focusin"?(ph(),ya=i,Ma=a,ya.attachEvent("onpropertychange",mh)):t==="focusout"&&ph()}function d_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wo(Ma)}function h_(t,i){if(t==="click")return wo(i)}function p_(t,i){if(t==="input"||t==="change")return wo(i)}function m_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ui=typeof Object.is=="function"?Object.is:m_;function Ea(t,i){if(ui(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!h.call(i,f)||!ui(t[f],i[f]))return!1}return!0}function gh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _h(t,i){var a=gh(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gh(a)}}function vh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?vh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function xh(){for(var t=window,i=ft();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ft(t.document)}return i}function wc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function g_(t){var i=xh(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&vh(a.ownerDocument.documentElement,a)){if(c!==null&&wc(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,p=Math.min(c.start,f);c=c.end===void 0?p:Math.min(c.end,f),!t.extend&&p>c&&(f=c,c=p,p=f),f=_h(a,p);var T=_h(a,c);f&&T&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==T.node||t.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>c?(t.addRange(i),t.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var __=d&&"documentMode"in document&&11>=document.documentMode,Ss=null,Ac=null,Ta=null,bc=!1;function Sh(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bc||Ss==null||Ss!==ft(c)||(c=Ss,"selectionStart"in c&&wc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ta&&Ea(Ta,c)||(Ta=c,c=Ro(Ac,"onSelect"),0<c.length&&(i=new _c("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=Ss)))}function Ao(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ys={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},Cc={},yh={};d&&(yh=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function bo(t){if(Cc[t])return Cc[t];if(!ys[t])return t;var i=ys[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in yh)return Cc[t]=i[a];return t}var Mh=bo("animationend"),Eh=bo("animationiteration"),Th=bo("animationstart"),wh=bo("transitionend"),Ah=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,i){Ah.set(t,i),l(i,[t])}for(var Rc=0;Rc<bh.length;Rc++){var Pc=bh[Rc],v_=Pc.toLowerCase(),x_=Pc[0].toUpperCase()+Pc.slice(1);pr(v_,"on"+x_)}pr(Mh,"onAnimationEnd"),pr(Eh,"onAnimationIteration"),pr(Th,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(wh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S_=new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));function Ch(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,mo(c,i,void 0,t),t.currentTarget=null}function Rh(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],f=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var T=c.length-1;0<=T;T--){var U=c[T],z=U.instance,oe=U.currentTarget;if(U=U.listener,z!==p&&f.isPropagationStopped())break e;Ch(f,U,oe),p=z}else for(T=0;T<c.length;T++){if(U=c[T],z=U.instance,oe=U.currentTarget,U=U.listener,z!==p&&f.isPropagationStopped())break e;Ch(f,U,oe),p=z}}}if(Br)throw t=ms,Br=!1,ms=null,t}function Ht(t,i){var a=i[kc];a===void 0&&(a=i[kc]=new Set);var c=t+"__bubble";a.has(c)||(Ph(i,t,2,!1),a.add(c))}function Nc(t,i,a){var c=0;i&&(c|=4),Ph(a,t,c,i)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Aa(t){if(!t[Co]){t[Co]=!0,r.forEach(function(a){a!=="selectionchange"&&(S_.has(a)||Nc(a,!1,t),Nc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Co]||(i[Co]=!0,Nc("selectionchange",!1,i))}}function Ph(t,i,a,c){switch(Jd(i)){case 1:var f=I0;break;case 4:f=U0;break;default:f=pc}a=f.bind(null,i,a,t),f=void 0,!pt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function Lc(t,i,a,c,f){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var U=c.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var z=T.tag;if((z===3||z===4)&&(z=T.stateNode.containerInfo,z===f||z.nodeType===8&&z.parentNode===f))return;T=T.return}for(;U!==null;){if(T=Gr(U),T===null)return;if(z=T.tag,z===5||z===6){c=p=T;continue e}U=U.parentNode}}c=c.return}Ie(function(){var oe=p,Se=st(a),ye=[];e:{var ve=Ah.get(t);if(ve!==void 0){var Ve=_c,Xe=t;switch(t){case"keypress":if(Mo(a)===0)break e;case"keydown":case"keyup":Ve=K0;break;case"focusin":Xe="focus",Ve=Sc;break;case"focusout":Xe="blur",Ve=Sc;break;case"beforeblur":case"afterblur":Ve=Sc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=nh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=k0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=J0;break;case Mh:case Eh:case Th:Ve=V0;break;case wh:Ve=t_;break;case"scroll":Ve=F0;break;case"wheel":Ve=i_;break;case"copy":case"cut":case"paste":Ve=H0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=rh}var Ye=(i&4)!==0,tn=!Ye&&t==="scroll",ee=Ye?ve!==null?ve+"Capture":null:ve;Ye=[];for(var j=oe,ie;j!==null;){ie=j;var Ae=ie.stateNode;if(ie.tag===5&&Ae!==null&&(ie=Ae,ee!==null&&(Ae=Qe(j,ee),Ae!=null&&Ye.push(ba(j,Ae,ie)))),tn)break;j=j.return}0<Ye.length&&(ve=new Ve(ve,Xe,null,a,Se),ye.push({event:ve,listeners:Ye}))}}if((i&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",Ve=t==="mouseout"||t==="pointerout",ve&&a!==Ee&&(Xe=a.relatedTarget||a.fromElement)&&(Gr(Xe)||Xe[Hi]))break e;if((Ve||ve)&&(ve=Se.window===Se?Se:(ve=Se.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ve?(Xe=a.relatedTarget||a.toElement,Ve=oe,Xe=Xe?Gr(Xe):null,Xe!==null&&(tn=Mi(Xe),Xe!==tn||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Ve=null,Xe=oe),Ve!==Xe)){if(Ye=nh,Ae="onMouseLeave",ee="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(Ye=rh,Ae="onPointerLeave",ee="onPointerEnter",j="pointer"),tn=Ve==null?ve:Ts(Ve),ie=Xe==null?ve:Ts(Xe),ve=new Ye(Ae,j+"leave",Ve,a,Se),ve.target=tn,ve.relatedTarget=ie,Ae=null,Gr(Se)===oe&&(Ye=new Ye(ee,j+"enter",Xe,a,Se),Ye.target=ie,Ye.relatedTarget=tn,Ae=Ye),tn=Ae,Ve&&Xe)t:{for(Ye=Ve,ee=Xe,j=0,ie=Ye;ie;ie=Ms(ie))j++;for(ie=0,Ae=ee;Ae;Ae=Ms(Ae))ie++;for(;0<j-ie;)Ye=Ms(Ye),j--;for(;0<ie-j;)ee=Ms(ee),ie--;for(;j--;){if(Ye===ee||ee!==null&&Ye===ee.alternate)break t;Ye=Ms(Ye),ee=Ms(ee)}Ye=null}else Ye=null;Ve!==null&&Nh(ye,ve,Ve,Ye,!1),Xe!==null&&tn!==null&&Nh(ye,tn,Xe,Ye,!0)}}e:{if(ve=oe?Ts(oe):window,Ve=ve.nodeName&&ve.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&ve.type==="file")var Je=u_;else if(uh(ve))if(dh)Je=p_;else{Je=d_;var nt=f_}else(Ve=ve.nodeName)&&Ve.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Je=h_);if(Je&&(Je=Je(t,oe))){fh(ye,Je,a,Se);break e}nt&&nt(t,ve,oe),t==="focusout"&&(nt=ve._wrapperState)&&nt.controlled&&ve.type==="number"&&Yt(ve,"number",ve.value)}switch(nt=oe?Ts(oe):window,t){case"focusin":(uh(nt)||nt.contentEditable==="true")&&(Ss=nt,Ac=oe,Ta=null);break;case"focusout":Ta=Ac=Ss=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,Sh(ye,a,Se);break;case"selectionchange":if(__)break;case"keydown":case"keyup":Sh(ye,a,Se)}var it;if(Mc)e:{switch(t){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else xs?lh(t,a)&&(lt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(sh&&a.locale!=="ko"&&(xs||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&xs&&(it=eh()):(hr=Se,gc="value"in hr?hr.value:hr.textContent,xs=!0)),nt=Ro(oe,lt),0<nt.length&&(lt=new ih(lt,t,null,a,Se),ye.push({event:lt,listeners:nt}),it?lt.data=it:(it=ch(a),it!==null&&(lt.data=it)))),(it=s_?a_(t,a):o_(t,a))&&(oe=Ro(oe,"onBeforeInput"),0<oe.length&&(Se=new ih("onBeforeInput","beforeinput",null,a,Se),ye.push({event:Se,listeners:oe}),Se.data=it))}Rh(ye,i)})}function ba(t,i,a){return{instance:t,listener:i,currentTarget:a}}function Ro(t,i){for(var a=i+"Capture",c=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=Qe(t,a),p!=null&&c.unshift(ba(t,p,f)),p=Qe(t,i),p!=null&&c.push(ba(t,p,f))),t=t.return}return c}function Ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nh(t,i,a,c,f){for(var p=i._reactName,T=[];a!==null&&a!==c;){var U=a,z=U.alternate,oe=U.stateNode;if(z!==null&&z===c)break;U.tag===5&&oe!==null&&(U=oe,f?(z=Qe(a,p),z!=null&&T.unshift(ba(a,z,U))):f||(z=Qe(a,p),z!=null&&T.push(ba(a,z,U)))),a=a.return}T.length!==0&&t.push({event:i,listeners:T})}var y_=/\r\n?/g,M_=/\u0000|\uFFFD/g;function Lh(t){return(typeof t=="string"?t:""+t).replace(y_,`
`).replace(M_,"")}function Po(t,i,a){if(i=Lh(i),Lh(t)!==i&&a)throw Error(n(425))}function No(){}var Dc=null,Ic=null;function Uc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fc=typeof setTimeout=="function"?setTimeout:void 0,E_=typeof clearTimeout=="function"?clearTimeout:void 0,Dh=typeof Promise=="function"?Promise:void 0,T_=typeof queueMicrotask=="function"?queueMicrotask:typeof Dh<"u"?function(t){return Dh.resolve(null).then(t).catch(w_)}:Fc;function w_(t){setTimeout(function(){throw t})}function Oc(t,i){var a=i,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){t.removeChild(f),_a(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);_a(i)}function mr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Ih(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var Es=Math.random().toString(36).slice(2),Ti="__reactFiber$"+Es,Ca="__reactProps$"+Es,Hi="__reactContainer$"+Es,kc="__reactEvents$"+Es,A_="__reactListeners$"+Es,b_="__reactHandles$"+Es;function Gr(t){var i=t[Ti];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Hi]||a[Ti]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Ih(t);t!==null;){if(a=t[Ti])return a;t=Ih(t)}return i}t=a,a=t.parentNode}return null}function Ra(t){return t=t[Ti]||t[Hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Lo(t){return t[Ca]||null}var Bc=[],ws=-1;function gr(t){return{current:t}}function Wt(t){0>ws||(t.current=Bc[ws],Bc[ws]=null,ws--)}function Vt(t,i){ws++,Bc[ws]=t.current,t.current=i}var _r={},xn=gr(_r),Dn=gr(!1),Hr=_r;function As(t,i){var a=t.type.contextTypes;if(!a)return _r;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in a)f[p]=i[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function In(t){return t=t.childContextTypes,t!=null}function Do(){Wt(Dn),Wt(xn)}function Uh(t,i,a){if(xn.current!==_r)throw Error(n(168));Vt(xn,i),Vt(Dn,a)}function Fh(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(n(108,xe(t)||"Unknown",f));return ue({},a,c)}function Io(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Hr=xn.current,Vt(xn,t),Vt(Dn,Dn.current),!0}function Oh(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=Fh(t,i,Hr),c.__reactInternalMemoizedMergedChildContext=t,Wt(Dn),Wt(xn),Vt(xn,t)):Wt(Dn),Vt(Dn,a)}var Wi=null,Uo=!1,zc=!1;function kh(t){Wi===null?Wi=[t]:Wi.push(t)}function C_(t){Uo=!0,kh(t)}function vr(){if(!zc&&Wi!==null){zc=!0;var t=0,i=vt;try{var a=Wi;for(vt=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Wi=null,Uo=!1}catch(f){throw Wi!==null&&(Wi=Wi.slice(t+1)),go(da,vr),f}finally{vt=i,zc=!1}}return null}var bs=[],Cs=0,Fo=null,Oo=0,Jn=[],ei=0,Wr=null,ji=1,Xi="";function jr(t,i){bs[Cs++]=Oo,bs[Cs++]=Fo,Fo=t,Oo=i}function Bh(t,i,a){Jn[ei++]=ji,Jn[ei++]=Xi,Jn[ei++]=Wr,Wr=t;var c=ji;t=Xi;var f=32-Re(c)-1;c&=~(1<<f),a+=1;var p=32-Re(i)+f;if(30<p){var T=f-f%5;p=(c&(1<<T)-1).toString(32),c>>=T,f-=T,ji=1<<32-Re(i)+f|a<<f|c,Xi=p+t}else ji=1<<p|a<<f|c,Xi=t}function Vc(t){t.return!==null&&(jr(t,1),Bh(t,1,0))}function Gc(t){for(;t===Fo;)Fo=bs[--Cs],bs[Cs]=null,Oo=bs[--Cs],bs[Cs]=null;for(;t===Wr;)Wr=Jn[--ei],Jn[ei]=null,Xi=Jn[--ei],Jn[ei]=null,ji=Jn[--ei],Jn[ei]=null}var Wn=null,jn=null,Xt=!1,fi=null;function zh(t,i){var a=ri(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function Vh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Wn=t,jn=mr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Wn=t,jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Wr!==null?{id:ji,overflow:Xi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ri(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Wn=t,jn=null,!0):!1;default:return!1}}function Hc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wc(t){if(Xt){var i=jn;if(i){var a=i;if(!Vh(t,i)){if(Hc(t))throw Error(n(418));i=mr(a.nextSibling);var c=Wn;i&&Vh(t,i)?zh(c,a):(t.flags=t.flags&-4097|2,Xt=!1,Wn=t)}}else{if(Hc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Xt=!1,Wn=t}}}function Gh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wn=t}function ko(t){if(t!==Wn)return!1;if(!Xt)return Gh(t),Xt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Uc(t.type,t.memoizedProps)),i&&(i=jn)){if(Hc(t))throw Hh(),Error(n(418));for(;i;)zh(t,i),i=mr(i.nextSibling)}if(Gh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){jn=mr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}jn=null}}else jn=Wn?mr(t.stateNode.nextSibling):null;return!0}function Hh(){for(var t=jn;t;)t=mr(t.nextSibling)}function Rs(){jn=Wn=null,Xt=!1}function jc(t){fi===null?fi=[t]:fi.push(t)}var R_=L.ReactCurrentBatchConfig;function Pa(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var f=c,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(T){var U=f.refs;T===null?delete U[p]:U[p]=T},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Bo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Wh(t){var i=t._init;return i(t._payload)}function jh(t){function i(ee,j){if(t){var ie=ee.deletions;ie===null?(ee.deletions=[j],ee.flags|=16):ie.push(j)}}function a(ee,j){if(!t)return null;for(;j!==null;)i(ee,j),j=j.sibling;return null}function c(ee,j){for(ee=new Map;j!==null;)j.key!==null?ee.set(j.key,j):ee.set(j.index,j),j=j.sibling;return ee}function f(ee,j){return ee=Ar(ee,j),ee.index=0,ee.sibling=null,ee}function p(ee,j,ie){return ee.index=ie,t?(ie=ee.alternate,ie!==null?(ie=ie.index,ie<j?(ee.flags|=2,j):ie):(ee.flags|=2,j)):(ee.flags|=1048576,j)}function T(ee){return t&&ee.alternate===null&&(ee.flags|=2),ee}function U(ee,j,ie,Ae){return j===null||j.tag!==6?(j=Fu(ie,ee.mode,Ae),j.return=ee,j):(j=f(j,ie),j.return=ee,j)}function z(ee,j,ie,Ae){var Je=ie.type;return Je===F?Se(ee,j,ie.props.children,Ae,ie.key):j!==null&&(j.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Q&&Wh(Je)===j.type)?(Ae=f(j,ie.props),Ae.ref=Pa(ee,j,ie),Ae.return=ee,Ae):(Ae=cl(ie.type,ie.key,ie.props,null,ee.mode,Ae),Ae.ref=Pa(ee,j,ie),Ae.return=ee,Ae)}function oe(ee,j,ie,Ae){return j===null||j.tag!==4||j.stateNode.containerInfo!==ie.containerInfo||j.stateNode.implementation!==ie.implementation?(j=Ou(ie,ee.mode,Ae),j.return=ee,j):(j=f(j,ie.children||[]),j.return=ee,j)}function Se(ee,j,ie,Ae,Je){return j===null||j.tag!==7?(j=Jr(ie,ee.mode,Ae,Je),j.return=ee,j):(j=f(j,ie),j.return=ee,j)}function ye(ee,j,ie){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Fu(""+j,ee.mode,ie),j.return=ee,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case B:return ie=cl(j.type,j.key,j.props,null,ee.mode,ie),ie.ref=Pa(ee,null,j),ie.return=ee,ie;case I:return j=Ou(j,ee.mode,ie),j.return=ee,j;case Q:var Ae=j._init;return ye(ee,Ae(j._payload),ie)}if(H(j)||ce(j))return j=Jr(j,ee.mode,ie,null),j.return=ee,j;Bo(ee,j)}return null}function ve(ee,j,ie,Ae){var Je=j!==null?j.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Je!==null?null:U(ee,j,""+ie,Ae);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case B:return ie.key===Je?z(ee,j,ie,Ae):null;case I:return ie.key===Je?oe(ee,j,ie,Ae):null;case Q:return Je=ie._init,ve(ee,j,Je(ie._payload),Ae)}if(H(ie)||ce(ie))return Je!==null?null:Se(ee,j,ie,Ae,null);Bo(ee,ie)}return null}function Ve(ee,j,ie,Ae,Je){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return ee=ee.get(ie)||null,U(j,ee,""+Ae,Je);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case B:return ee=ee.get(Ae.key===null?ie:Ae.key)||null,z(j,ee,Ae,Je);case I:return ee=ee.get(Ae.key===null?ie:Ae.key)||null,oe(j,ee,Ae,Je);case Q:var nt=Ae._init;return Ve(ee,j,ie,nt(Ae._payload),Je)}if(H(Ae)||ce(Ae))return ee=ee.get(ie)||null,Se(j,ee,Ae,Je,null);Bo(j,Ae)}return null}function Xe(ee,j,ie,Ae){for(var Je=null,nt=null,it=j,lt=j=0,hn=null;it!==null&&lt<ie.length;lt++){it.index>lt?(hn=it,it=null):hn=it.sibling;var Dt=ve(ee,it,ie[lt],Ae);if(Dt===null){it===null&&(it=hn);break}t&&it&&Dt.alternate===null&&i(ee,it),j=p(Dt,j,lt),nt===null?Je=Dt:nt.sibling=Dt,nt=Dt,it=hn}if(lt===ie.length)return a(ee,it),Xt&&jr(ee,lt),Je;if(it===null){for(;lt<ie.length;lt++)it=ye(ee,ie[lt],Ae),it!==null&&(j=p(it,j,lt),nt===null?Je=it:nt.sibling=it,nt=it);return Xt&&jr(ee,lt),Je}for(it=c(ee,it);lt<ie.length;lt++)hn=Ve(it,ee,lt,ie[lt],Ae),hn!==null&&(t&&hn.alternate!==null&&it.delete(hn.key===null?lt:hn.key),j=p(hn,j,lt),nt===null?Je=hn:nt.sibling=hn,nt=hn);return t&&it.forEach(function(br){return i(ee,br)}),Xt&&jr(ee,lt),Je}function Ye(ee,j,ie,Ae){var Je=ce(ie);if(typeof Je!="function")throw Error(n(150));if(ie=Je.call(ie),ie==null)throw Error(n(151));for(var nt=Je=null,it=j,lt=j=0,hn=null,Dt=ie.next();it!==null&&!Dt.done;lt++,Dt=ie.next()){it.index>lt?(hn=it,it=null):hn=it.sibling;var br=ve(ee,it,Dt.value,Ae);if(br===null){it===null&&(it=hn);break}t&&it&&br.alternate===null&&i(ee,it),j=p(br,j,lt),nt===null?Je=br:nt.sibling=br,nt=br,it=hn}if(Dt.done)return a(ee,it),Xt&&jr(ee,lt),Je;if(it===null){for(;!Dt.done;lt++,Dt=ie.next())Dt=ye(ee,Dt.value,Ae),Dt!==null&&(j=p(Dt,j,lt),nt===null?Je=Dt:nt.sibling=Dt,nt=Dt);return Xt&&jr(ee,lt),Je}for(it=c(ee,it);!Dt.done;lt++,Dt=ie.next())Dt=Ve(it,ee,lt,Dt.value,Ae),Dt!==null&&(t&&Dt.alternate!==null&&it.delete(Dt.key===null?lt:Dt.key),j=p(Dt,j,lt),nt===null?Je=Dt:nt.sibling=Dt,nt=Dt);return t&&it.forEach(function(lv){return i(ee,lv)}),Xt&&jr(ee,lt),Je}function tn(ee,j,ie,Ae){if(typeof ie=="object"&&ie!==null&&ie.type===F&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case B:e:{for(var Je=ie.key,nt=j;nt!==null;){if(nt.key===Je){if(Je=ie.type,Je===F){if(nt.tag===7){a(ee,nt.sibling),j=f(nt,ie.props.children),j.return=ee,ee=j;break e}}else if(nt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Q&&Wh(Je)===nt.type){a(ee,nt.sibling),j=f(nt,ie.props),j.ref=Pa(ee,nt,ie),j.return=ee,ee=j;break e}a(ee,nt);break}else i(ee,nt);nt=nt.sibling}ie.type===F?(j=Jr(ie.props.children,ee.mode,Ae,ie.key),j.return=ee,ee=j):(Ae=cl(ie.type,ie.key,ie.props,null,ee.mode,Ae),Ae.ref=Pa(ee,j,ie),Ae.return=ee,ee=Ae)}return T(ee);case I:e:{for(nt=ie.key;j!==null;){if(j.key===nt)if(j.tag===4&&j.stateNode.containerInfo===ie.containerInfo&&j.stateNode.implementation===ie.implementation){a(ee,j.sibling),j=f(j,ie.children||[]),j.return=ee,ee=j;break e}else{a(ee,j);break}else i(ee,j);j=j.sibling}j=Ou(ie,ee.mode,Ae),j.return=ee,ee=j}return T(ee);case Q:return nt=ie._init,tn(ee,j,nt(ie._payload),Ae)}if(H(ie))return Xe(ee,j,ie,Ae);if(ce(ie))return Ye(ee,j,ie,Ae);Bo(ee,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,j!==null&&j.tag===6?(a(ee,j.sibling),j=f(j,ie),j.return=ee,ee=j):(a(ee,j),j=Fu(ie,ee.mode,Ae),j.return=ee,ee=j),T(ee)):a(ee,j)}return tn}var Ps=jh(!0),Xh=jh(!1),zo=gr(null),Vo=null,Ns=null,Xc=null;function qc(){Xc=Ns=Vo=null}function Yc(t){var i=zo.current;Wt(zo),t._currentValue=i}function $c(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function Ls(t,i){Vo=t,Xc=Ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Un=!0),t.firstContext=null)}function ti(t){var i=t._currentValue;if(Xc!==t)if(t={context:t,memoizedValue:i,next:null},Ns===null){if(Vo===null)throw Error(n(308));Ns=t,Vo.dependencies={lanes:0,firstContext:t}}else Ns=Ns.next=t;return i}var Xr=null;function Kc(t){Xr===null?Xr=[t]:Xr.push(t)}function qh(t,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Kc(i)):(a.next=f.next,f.next=a),i.interleaved=a,qi(t,c)}function qi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var xr=!1;function Zc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Sr(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(bt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,qi(t,a)}return f=c.interleaved,f===null?(i.next=i,Kc(c)):(i.next=f.next,f.next=i),c.interleaved=i,qi(t,a)}function Go(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,Ln(t,a)}}function $h(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?f=p=T:p=p.next=T,a=a.next}while(a!==null);p===null?f=p=i:p=p.next=i}else f=p=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Ho(t,i,a,c){var f=t.updateQueue;xr=!1;var p=f.firstBaseUpdate,T=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var z=U,oe=z.next;z.next=null,T===null?p=oe:T.next=oe,T=z;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,U=Se.lastBaseUpdate,U!==T&&(U===null?Se.firstBaseUpdate=oe:U.next=oe,Se.lastBaseUpdate=z))}if(p!==null){var ye=f.baseState;T=0,Se=oe=z=null,U=p;do{var ve=U.lane,Ve=U.eventTime;if((c&ve)===ve){Se!==null&&(Se=Se.next={eventTime:Ve,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Xe=t,Ye=U;switch(ve=i,Ve=a,Ye.tag){case 1:if(Xe=Ye.payload,typeof Xe=="function"){ye=Xe.call(Ve,ye,ve);break e}ye=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=Ye.payload,ve=typeof Xe=="function"?Xe.call(Ve,ye,ve):Xe,ve==null)break e;ye=ue({},ye,ve);break e;case 2:xr=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,ve=f.effects,ve===null?f.effects=[U]:ve.push(U))}else Ve={eventTime:Ve,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Se===null?(oe=Se=Ve,z=ye):Se=Se.next=Ve,T|=ve;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);if(Se===null&&(z=ye),f.baseState=z,f.firstBaseUpdate=oe,f.lastBaseUpdate=Se,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);$r|=T,t.lanes=T,t.memoizedState=ye}}function Kh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(n(191,f));f.call(c)}}}var Na={},wi=gr(Na),La=gr(Na),Da=gr(Na);function qr(t){if(t===Na)throw Error(n(174));return t}function Qc(t,i){switch(Vt(Da,i),Vt(La,t),Vt(wi,Na),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=E(i,t)}Wt(wi),Vt(wi,i)}function Ds(){Wt(wi),Wt(La),Wt(Da)}function Zh(t){qr(Da.current);var i=qr(wi.current),a=E(i,t.type);i!==a&&(Vt(La,t),Vt(wi,a))}function Jc(t){La.current===t&&(Wt(wi),Wt(La))}var Kt=gr(0);function Wo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var eu=[];function tu(){for(var t=0;t<eu.length;t++)eu[t]._workInProgressVersionPrimary=null;eu.length=0}var jo=L.ReactCurrentDispatcher,nu=L.ReactCurrentBatchConfig,Yr=0,Zt=null,on=null,fn=null,Xo=!1,Ia=!1,Ua=0,P_=0;function Sn(){throw Error(n(321))}function iu(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ui(t[a],i[a]))return!1;return!0}function ru(t,i,a,c,f,p){if(Yr=p,Zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,jo.current=t===null||t.memoizedState===null?I_:U_,t=a(c,f),Ia){p=0;do{if(Ia=!1,Ua=0,25<=p)throw Error(n(301));p+=1,fn=on=null,i.updateQueue=null,jo.current=F_,t=a(c,f)}while(Ia)}if(jo.current=$o,i=on!==null&&on.next!==null,Yr=0,fn=on=Zt=null,Xo=!1,i)throw Error(n(300));return t}function su(){var t=Ua!==0;return Ua=0,t}function Ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Zt.memoizedState=fn=t:fn=fn.next=t,fn}function ni(){if(on===null){var t=Zt.alternate;t=t!==null?t.memoizedState:null}else t=on.next;var i=fn===null?Zt.memoizedState:fn.next;if(i!==null)fn=i,on=t;else{if(t===null)throw Error(n(310));on=t,t={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},fn===null?Zt.memoizedState=fn=t:fn=fn.next=t}return fn}function Fa(t,i){return typeof i=="function"?i(t):i}function au(t){var i=ni(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=on,f=c.baseQueue,p=a.pending;if(p!==null){if(f!==null){var T=f.next;f.next=p.next,p.next=T}c.baseQueue=f=p,a.pending=null}if(f!==null){p=f.next,c=c.baseState;var U=T=null,z=null,oe=p;do{var Se=oe.lane;if((Yr&Se)===Se)z!==null&&(z=z.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),c=oe.hasEagerState?oe.eagerState:t(c,oe.action);else{var ye={lane:Se,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};z===null?(U=z=ye,T=c):z=z.next=ye,Zt.lanes|=Se,$r|=Se}oe=oe.next}while(oe!==null&&oe!==p);z===null?T=c:z.next=U,ui(c,i.memoizedState)||(Un=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=z,a.lastRenderedState=c}if(t=a.interleaved,t!==null){f=t;do p=f.lane,Zt.lanes|=p,$r|=p,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ou(t){var i=ni(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,f=a.pending,p=i.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do p=t(p,T.action),T=T.next;while(T!==f);ui(p,i.memoizedState)||(Un=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function Qh(){}function Jh(t,i){var a=Zt,c=ni(),f=i(),p=!ui(c.memoizedState,f);if(p&&(c.memoizedState=f,Un=!0),c=c.queue,lu(np.bind(null,a,c,t),[t]),c.getSnapshot!==i||p||fn!==null&&fn.memoizedState.tag&1){if(a.flags|=2048,Oa(9,tp.bind(null,a,c,f,i),void 0,null),dn===null)throw Error(n(349));(Yr&30)!==0||ep(a,i,f)}return f}function ep(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Zt.updateQueue,i===null?(i={lastEffect:null,stores:null},Zt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function tp(t,i,a,c){i.value=a,i.getSnapshot=c,ip(i)&&rp(t)}function np(t,i,a){return a(function(){ip(i)&&rp(t)})}function ip(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ui(t,a)}catch{return!0}}function rp(t){var i=qi(t,1);i!==null&&mi(i,t,1,-1)}function sp(t){var i=Ai();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},i.queue=t,t=t.dispatch=D_.bind(null,Zt,t),[i.memoizedState,t]}function Oa(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=Zt.updateQueue,i===null?(i={lastEffect:null,stores:null},Zt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function ap(){return ni().memoizedState}function qo(t,i,a,c){var f=Ai();Zt.flags|=t,f.memoizedState=Oa(1|i,a,void 0,c===void 0?null:c)}function Yo(t,i,a,c){var f=ni();c=c===void 0?null:c;var p=void 0;if(on!==null){var T=on.memoizedState;if(p=T.destroy,c!==null&&iu(c,T.deps)){f.memoizedState=Oa(i,a,p,c);return}}Zt.flags|=t,f.memoizedState=Oa(1|i,a,p,c)}function op(t,i){return qo(8390656,8,t,i)}function lu(t,i){return Yo(2048,8,t,i)}function lp(t,i){return Yo(4,2,t,i)}function cp(t,i){return Yo(4,4,t,i)}function up(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function fp(t,i,a){return a=a!=null?a.concat([t]):null,Yo(4,4,up.bind(null,i,t),a)}function cu(){}function dp(t,i){var a=ni();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&iu(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function hp(t,i){var a=ni();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&iu(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function pp(t,i,a){return(Yr&21)===0?(t.baseState&&(t.baseState=!1,Un=!0),t.memoizedState=a):(ui(a,i)||(a=ze(),Zt.lanes|=a,$r|=a,t.baseState=!0),i)}function N_(t,i){var a=vt;vt=a!==0&&4>a?a:4,t(!0);var c=nu.transition;nu.transition={};try{t(!1),i()}finally{vt=a,nu.transition=c}}function mp(){return ni().memoizedState}function L_(t,i,a){var c=Tr(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},gp(t))_p(i,a);else if(a=qh(t,i,a,c),a!==null){var f=Cn();mi(a,t,c,f),vp(a,i,c)}}function D_(t,i,a){var c=Tr(t),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(gp(t))_p(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var T=i.lastRenderedState,U=p(T,a);if(f.hasEagerState=!0,f.eagerState=U,ui(U,T)){var z=i.interleaved;z===null?(f.next=f,Kc(i)):(f.next=z.next,z.next=f),i.interleaved=f;return}}catch{}finally{}a=qh(t,i,f,c),a!==null&&(f=Cn(),mi(a,t,c,f),vp(a,i,c))}}function gp(t){var i=t.alternate;return t===Zt||i!==null&&i===Zt}function _p(t,i){Ia=Xo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function vp(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,Ln(t,a)}}var $o={readContext:ti,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},I_={readContext:ti,useCallback:function(t,i){return Ai().memoizedState=[t,i===void 0?null:i],t},useContext:ti,useEffect:op,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,qo(4194308,4,up.bind(null,i,t),a)},useLayoutEffect:function(t,i){return qo(4194308,4,t,i)},useInsertionEffect:function(t,i){return qo(4,2,t,i)},useMemo:function(t,i){var a=Ai();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=Ai();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=L_.bind(null,Zt,t),[c.memoizedState,t]},useRef:function(t){var i=Ai();return t={current:t},i.memoizedState=t},useState:sp,useDebugValue:cu,useDeferredValue:function(t){return Ai().memoizedState=t},useTransition:function(){var t=sp(!1),i=t[0];return t=N_.bind(null,t[1]),Ai().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=Zt,f=Ai();if(Xt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),dn===null)throw Error(n(349));(Yr&30)!==0||ep(c,i,a)}f.memoizedState=a;var p={value:a,getSnapshot:i};return f.queue=p,op(np.bind(null,c,p,t),[t]),c.flags|=2048,Oa(9,tp.bind(null,c,p,a,i),void 0,null),a},useId:function(){var t=Ai(),i=dn.identifierPrefix;if(Xt){var a=Xi,c=ji;a=(c&~(1<<32-Re(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ua++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=P_++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},U_={readContext:ti,useCallback:dp,useContext:ti,useEffect:lu,useImperativeHandle:fp,useInsertionEffect:lp,useLayoutEffect:cp,useMemo:hp,useReducer:au,useRef:ap,useState:function(){return au(Fa)},useDebugValue:cu,useDeferredValue:function(t){var i=ni();return pp(i,on.memoizedState,t)},useTransition:function(){var t=au(Fa)[0],i=ni().memoizedState;return[t,i]},useMutableSource:Qh,useSyncExternalStore:Jh,useId:mp,unstable_isNewReconciler:!1},F_={readContext:ti,useCallback:dp,useContext:ti,useEffect:lu,useImperativeHandle:fp,useInsertionEffect:lp,useLayoutEffect:cp,useMemo:hp,useReducer:ou,useRef:ap,useState:function(){return ou(Fa)},useDebugValue:cu,useDeferredValue:function(t){var i=ni();return on===null?i.memoizedState=t:pp(i,on.memoizedState,t)},useTransition:function(){var t=ou(Fa)[0],i=ni().memoizedState;return[t,i]},useMutableSource:Qh,useSyncExternalStore:Jh,useId:mp,unstable_isNewReconciler:!1};function di(t,i){if(t&&t.defaultProps){i=ue({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function uu(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:ue({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ko={isMounted:function(t){return(t=t._reactInternals)?Mi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=Cn(),f=Tr(t),p=Yi(c,f);p.payload=i,a!=null&&(p.callback=a),i=Sr(t,p,f),i!==null&&(mi(i,t,f,c),Go(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=Cn(),f=Tr(t),p=Yi(c,f);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=Sr(t,p,f),i!==null&&(mi(i,t,f,c),Go(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Cn(),c=Tr(t),f=Yi(a,c);f.tag=2,i!=null&&(f.callback=i),i=Sr(t,f,c),i!==null&&(mi(i,t,c,a),Go(i,t,c))}};function xp(t,i,a,c,f,p,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,T):i.prototype&&i.prototype.isPureReactComponent?!Ea(a,c)||!Ea(f,p):!0}function Sp(t,i,a){var c=!1,f=_r,p=i.contextType;return typeof p=="object"&&p!==null?p=ti(p):(f=In(i)?Hr:xn.current,c=i.contextTypes,p=(c=c!=null)?As(t,f):_r),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ko,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function yp(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&Ko.enqueueReplaceState(i,i.state,null)}function fu(t,i,a,c){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},Zc(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=ti(p):(p=In(i)?Hr:xn.current,f.context=As(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(uu(t,i,p,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Ko.enqueueReplaceState(f,f.state,null),Ho(t,a,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Is(t,i){try{var a="",c=i;do a+=Fe(c),c=c.return;while(c);var f=a}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function du(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function hu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var O_=typeof WeakMap=="function"?WeakMap:Map;function Mp(t,i,a){a=Yi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){il||(il=!0,Cu=c),hu(t,i)},a}function Ep(t,i,a){a=Yi(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){hu(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){hu(t,i),typeof c!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Tp(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new O_;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),t=Z_.bind(null,t,i,a),i.then(t,t))}function wp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Ap(t,i,a,c,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Yi(-1,1),i.tag=2,Sr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var k_=L.ReactCurrentOwner,Un=!1;function bn(t,i,a,c){i.child=t===null?Xh(i,null,a,c):Ps(i,t.child,a,c)}function bp(t,i,a,c,f){a=a.render;var p=i.ref;return Ls(i,f),c=ru(t,i,a,c,p,f),a=su(),t!==null&&!Un?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,$i(t,i,f)):(Xt&&a&&Vc(i),i.flags|=1,bn(t,i,c,f),i.child)}function Cp(t,i,a,c,f){if(t===null){var p=a.type;return typeof p=="function"&&!Uu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,Rp(t,i,p,c,f)):(t=cl(a.type,null,c,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var T=p.memoizedProps;if(a=a.compare,a=a!==null?a:Ea,a(T,c)&&t.ref===i.ref)return $i(t,i,f)}return i.flags|=1,t=Ar(p,c),t.ref=i.ref,t.return=i,i.child=t}function Rp(t,i,a,c,f){if(t!==null){var p=t.memoizedProps;if(Ea(p,c)&&t.ref===i.ref)if(Un=!1,i.pendingProps=c=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Un=!0);else return i.lanes=t.lanes,$i(t,i,f)}return pu(t,i,a,c,f)}function Pp(t,i,a){var c=i.pendingProps,f=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(Fs,Xn),Xn|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Vt(Fs,Xn),Xn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Vt(Fs,Xn),Xn|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,Vt(Fs,Xn),Xn|=c;return bn(t,i,f,a),i.child}function Np(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function pu(t,i,a,c,f){var p=In(a)?Hr:xn.current;return p=As(i,p),Ls(i,f),a=ru(t,i,a,c,p,f),c=su(),t!==null&&!Un?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,$i(t,i,f)):(Xt&&c&&Vc(i),i.flags|=1,bn(t,i,a,f),i.child)}function Lp(t,i,a,c,f){if(In(a)){var p=!0;Io(i)}else p=!1;if(Ls(i,f),i.stateNode===null)Qo(t,i),Sp(i,a,c),fu(i,a,c,f),c=!0;else if(t===null){var T=i.stateNode,U=i.memoizedProps;T.props=U;var z=T.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=ti(oe):(oe=In(a)?Hr:xn.current,oe=As(i,oe));var Se=a.getDerivedStateFromProps,ye=typeof Se=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==c||z!==oe)&&yp(i,T,c,oe),xr=!1;var ve=i.memoizedState;T.state=ve,Ho(i,c,T,f),z=i.memoizedState,U!==c||ve!==z||Dn.current||xr?(typeof Se=="function"&&(uu(i,a,Se,c),z=i.memoizedState),(U=xr||xp(i,a,U,c,ve,z,oe))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),T.props=c,T.state=z,T.context=oe,c=U):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Yh(t,i),U=i.memoizedProps,oe=i.type===i.elementType?U:di(i.type,U),T.props=oe,ye=i.pendingProps,ve=T.context,z=a.contextType,typeof z=="object"&&z!==null?z=ti(z):(z=In(a)?Hr:xn.current,z=As(i,z));var Ve=a.getDerivedStateFromProps;(Se=typeof Ve=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==ye||ve!==z)&&yp(i,T,c,z),xr=!1,ve=i.memoizedState,T.state=ve,Ho(i,c,T,f);var Xe=i.memoizedState;U!==ye||ve!==Xe||Dn.current||xr?(typeof Ve=="function"&&(uu(i,a,Ve,c),Xe=i.memoizedState),(oe=xr||xp(i,a,oe,c,ve,Xe,z)||!1)?(Se||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Xe,z),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Xe,z)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Xe),T.props=c,T.state=Xe,T.context=z,c=oe):(typeof T.componentDidUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),c=!1)}return mu(t,i,a,c,p,f)}function mu(t,i,a,c,f,p){Np(t,i);var T=(i.flags&128)!==0;if(!c&&!T)return f&&Oh(i,a,!1),$i(t,i,p);c=i.stateNode,k_.current=i;var U=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&T?(i.child=Ps(i,t.child,null,p),i.child=Ps(i,null,U,p)):bn(t,i,U,p),i.memoizedState=c.state,f&&Oh(i,a,!0),i.child}function Dp(t){var i=t.stateNode;i.pendingContext?Uh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Uh(t,i.context,!1),Qc(t,i.containerInfo)}function Ip(t,i,a,c,f){return Rs(),jc(f),i.flags|=256,bn(t,i,a,c),i.child}var gu={dehydrated:null,treeContext:null,retryLane:0};function _u(t){return{baseLanes:t,cachePool:null,transitions:null}}function Up(t,i,a){var c=i.pendingProps,f=Kt.current,p=!1,T=(i.flags&128)!==0,U;if((U=T)||(U=t!==null&&t.memoizedState===null?!1:(f&2)!==0),U?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Vt(Kt,f&1),t===null)return Wc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,t=c.fallback,p?(c=i.mode,p=i.child,T={mode:"hidden",children:T},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=T):p=ul(T,c,0,null),t=Jr(t,c,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=_u(a),i.memoizedState=gu,t):vu(i,T));if(f=t.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return B_(t,i,T,c,U,f,a);if(p){p=c.fallback,T=i.mode,f=t.child,U=f.sibling;var z={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=Ar(f,z),c.subtreeFlags=f.subtreeFlags&14680064),U!==null?p=Ar(U,p):(p=Jr(p,T,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,T=t.child.memoizedState,T=T===null?_u(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},p.memoizedState=T,p.childLanes=t.childLanes&~a,i.memoizedState=gu,c}return p=t.child,t=p.sibling,c=Ar(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function vu(t,i){return i=ul({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Zo(t,i,a,c){return c!==null&&jc(c),Ps(i,t.child,null,a),t=vu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function B_(t,i,a,c,f,p,T){if(a)return i.flags&256?(i.flags&=-257,c=du(Error(n(422))),Zo(t,i,T,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=c.fallback,f=i.mode,c=ul({mode:"visible",children:c.children},f,0,null),p=Jr(p,f,T,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&Ps(i,t.child,null,T),i.child.memoizedState=_u(T),i.memoizedState=gu,p);if((i.mode&1)===0)return Zo(t,i,T,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var U=c.dgst;return c=U,p=Error(n(419)),c=du(p,c,void 0),Zo(t,i,T,c)}if(U=(T&t.childLanes)!==0,Un||U){if(c=dn,c!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|T))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,qi(t,f),mi(c,t,f,-1))}return Iu(),c=du(Error(n(421))),Zo(t,i,T,c)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=Q_.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,jn=mr(f.nextSibling),Wn=i,Xt=!0,fi=null,t!==null&&(Jn[ei++]=ji,Jn[ei++]=Xi,Jn[ei++]=Wr,ji=t.id,Xi=t.overflow,Wr=i),i=vu(i,c.children),i.flags|=4096,i)}function Fp(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),$c(t.return,i,a)}function xu(t,i,a,c,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=f)}function Op(t,i,a){var c=i.pendingProps,f=c.revealOrder,p=c.tail;if(bn(t,i,c.children,a),c=Kt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fp(t,a,i);else if(t.tag===19)Fp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Vt(Kt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Wo(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),xu(i,!1,f,a,p);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Wo(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}xu(i,!0,a,null,p);break;case"together":xu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Qo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function $i(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),$r|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=Ar(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Ar(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function z_(t,i,a){switch(i.tag){case 3:Dp(i),Rs();break;case 5:Zh(i);break;case 1:In(i.type)&&Io(i);break;case 4:Qc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Vt(zo,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Vt(Kt,Kt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Up(t,i,a):(Vt(Kt,Kt.current&1),t=$i(t,i,a),t!==null?t.sibling:null);Vt(Kt,Kt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return Op(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Vt(Kt,Kt.current),c)break;return null;case 22:case 23:return i.lanes=0,Pp(t,i,a)}return $i(t,i,a)}var kp,Su,Bp,zp;kp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Su=function(){},Bp=function(t,i,a,c){var f=t.memoizedProps;if(f!==c){t=i.stateNode,qr(wi.current);var p=null;switch(a){case"input":f=wt(t,f),c=wt(t,c),p=[];break;case"select":f=ue({},f,{value:void 0}),c=ue({},c,{value:void 0}),p=[];break;case"textarea":f=dt(t,f),c=dt(t,c),p=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=No)}Be(a,c);var T;a=null;for(oe in f)if(!c.hasOwnProperty(oe)&&f.hasOwnProperty(oe)&&f[oe]!=null)if(oe==="style"){var U=f[oe];for(T in U)U.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?p||(p=[]):(p=p||[]).push(oe,null));for(oe in c){var z=c[oe];if(U=f!=null?f[oe]:void 0,c.hasOwnProperty(oe)&&z!==U&&(z!=null||U!=null))if(oe==="style")if(U){for(T in U)!U.hasOwnProperty(T)||z&&z.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in z)z.hasOwnProperty(T)&&U[T]!==z[T]&&(a||(a={}),a[T]=z[T])}else a||(p||(p=[]),p.push(oe,a)),a=z;else oe==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,U=U?U.__html:void 0,z!=null&&U!==z&&(p=p||[]).push(oe,z)):oe==="children"?typeof z!="string"&&typeof z!="number"||(p=p||[]).push(oe,""+z):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(z!=null&&oe==="onScroll"&&Ht("scroll",t),p||U===z||(p=[])):(p=p||[]).push(oe,z))}a&&(p=p||[]).push("style",a);var oe=p;(i.updateQueue=oe)&&(i.flags|=4)}},zp=function(t,i,a,c){a!==c&&(i.flags|=4)};function ka(t,i){if(!Xt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function yn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function V_(t,i,a){var c=i.pendingProps;switch(Gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(i),null;case 1:return In(i.type)&&Do(),yn(i),null;case 3:return c=i.stateNode,Ds(),Wt(Dn),Wt(xn),tu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(ko(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,fi!==null&&(Nu(fi),fi=null))),Su(t,i),yn(i),null;case 5:Jc(i);var f=qr(Da.current);if(a=i.type,t!==null&&i.stateNode!=null)Bp(t,i,a,c,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return yn(i),null}if(t=qr(wi.current),ko(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[Ti]=i,c[Ca]=p,t=(i.mode&1)!==0,a){case"dialog":Ht("cancel",c),Ht("close",c);break;case"iframe":case"object":case"embed":Ht("load",c);break;case"video":case"audio":for(f=0;f<wa.length;f++)Ht(wa[f],c);break;case"source":Ht("error",c);break;case"img":case"image":case"link":Ht("error",c),Ht("load",c);break;case"details":Ht("toggle",c);break;case"input":rt(c,p),Ht("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ht("invalid",c);break;case"textarea":Lt(c,p),Ht("invalid",c)}Be(a,p),f=null;for(var T in p)if(p.hasOwnProperty(T)){var U=p[T];T==="children"?typeof U=="string"?c.textContent!==U&&(p.suppressHydrationWarning!==!0&&Po(c.textContent,U,t),f=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(p.suppressHydrationWarning!==!0&&Po(c.textContent,U,t),f=["children",""+U]):o.hasOwnProperty(T)&&U!=null&&T==="onScroll"&&Ht("scroll",c)}switch(a){case"input":tt(c),Et(c,p,!0);break;case"textarea":tt(c),Bt(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=No)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=R(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=T.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=T.createElement(a,{is:c.is}):(t=T.createElement(a),a==="select"&&(T=t,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):t=T.createElementNS(t,a),t[Ti]=i,t[Ca]=c,kp(t,i,!1,!1),i.stateNode=t;e:{switch(T=be(a,c),a){case"dialog":Ht("cancel",t),Ht("close",t),f=c;break;case"iframe":case"object":case"embed":Ht("load",t),f=c;break;case"video":case"audio":for(f=0;f<wa.length;f++)Ht(wa[f],t);f=c;break;case"source":Ht("error",t),f=c;break;case"img":case"image":case"link":Ht("error",t),Ht("load",t),f=c;break;case"details":Ht("toggle",t),f=c;break;case"input":rt(t,c),f=wt(t,c),Ht("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=ue({},c,{value:void 0}),Ht("invalid",t);break;case"textarea":Lt(t,c),f=dt(t,c),Ht("invalid",t);break;default:f=c}Be(a,f),U=f;for(p in U)if(U.hasOwnProperty(p)){var z=U[p];p==="style"?de(t,z):p==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&pe(t,z)):p==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&ge(t,z):typeof z=="number"&&ge(t,""+z):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?z!=null&&p==="onScroll"&&Ht("scroll",t):z!=null&&N(t,p,z,T))}switch(a){case"input":tt(t),Et(t,c,!1);break;case"textarea":tt(t),Bt(t);break;case"option":c.value!=null&&t.setAttribute("value",""+me(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?yt(t,!!c.multiple,p,!1):c.defaultValue!=null&&yt(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=No)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return yn(i),null;case 6:if(t&&i.stateNode!=null)zp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=qr(Da.current),qr(wi.current),ko(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ti]=i,(p=c.nodeValue!==a)&&(t=Wn,t!==null))switch(t.tag){case 3:Po(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Po(c.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ti]=i,i.stateNode=c}return yn(i),null;case 13:if(Wt(Kt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Xt&&jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Hh(),Rs(),i.flags|=98560,p=!1;else if(p=ko(i),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[Ti]=i}else Rs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;yn(i),p=!1}else fi!==null&&(Nu(fi),fi=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Kt.current&1)!==0?ln===0&&(ln=3):Iu())),i.updateQueue!==null&&(i.flags|=4),yn(i),null);case 4:return Ds(),Su(t,i),t===null&&Aa(i.stateNode.containerInfo),yn(i),null;case 10:return Yc(i.type._context),yn(i),null;case 17:return In(i.type)&&Do(),yn(i),null;case 19:if(Wt(Kt),p=i.memoizedState,p===null)return yn(i),null;if(c=(i.flags&128)!==0,T=p.rendering,T===null)if(c)ka(p,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(T=Wo(t),T!==null){for(i.flags|=128,ka(p,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,t=c,p.flags&=14680066,T=p.alternate,T===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=T.childLanes,p.lanes=T.lanes,p.child=T.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=T.memoizedProps,p.memoizedState=T.memoizedState,p.updateQueue=T.updateQueue,p.type=T.type,t=T.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Vt(Kt,Kt.current&1|2),i.child}t=t.sibling}p.tail!==null&&$t()>Os&&(i.flags|=128,c=!0,ka(p,!1),i.lanes=4194304)}else{if(!c)if(t=Wo(T),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ka(p,!0),p.tail===null&&p.tailMode==="hidden"&&!T.alternate&&!Xt)return yn(i),null}else 2*$t()-p.renderingStartTime>Os&&a!==1073741824&&(i.flags|=128,c=!0,ka(p,!1),i.lanes=4194304);p.isBackwards?(T.sibling=i.child,i.child=T):(a=p.last,a!==null?a.sibling=T:i.child=T,p.last=T)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=$t(),i.sibling=null,a=Kt.current,Vt(Kt,c?a&1|2:a&1),i):(yn(i),null);case 22:case 23:return Du(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Xn&1073741824)!==0&&(yn(i),i.subtreeFlags&6&&(i.flags|=8192)):yn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function G_(t,i){switch(Gc(i),i.tag){case 1:return In(i.type)&&Do(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ds(),Wt(Dn),Wt(xn),tu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Jc(i),null;case 13:if(Wt(Kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Rs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Wt(Kt),null;case 4:return Ds(),null;case 10:return Yc(i.type._context),null;case 22:case 23:return Du(),null;case 24:return null;default:return null}}var Jo=!1,Mn=!1,H_=typeof WeakSet=="function"?WeakSet:Set,We=null;function Us(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Qt(t,i,c)}else a.current=null}function yu(t,i,a){try{a()}catch(c){Qt(t,i,c)}}var Vp=!1;function W_(t,i){if(Dc=xo,t=xh(),wc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var T=0,U=-1,z=-1,oe=0,Se=0,ye=t,ve=null;t:for(;;){for(var Ve;ye!==a||f!==0&&ye.nodeType!==3||(U=T+f),ye!==p||c!==0&&ye.nodeType!==3||(z=T+c),ye.nodeType===3&&(T+=ye.nodeValue.length),(Ve=ye.firstChild)!==null;)ve=ye,ye=Ve;for(;;){if(ye===t)break t;if(ve===a&&++oe===f&&(U=T),ve===p&&++Se===c&&(z=T),(Ve=ye.nextSibling)!==null)break;ye=ve,ve=ye.parentNode}ye=Ve}a=U===-1||z===-1?null:{start:U,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ic={focusedElem:t,selectionRange:a},xo=!1,We=i;We!==null;)if(i=We,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,We=t;else for(;We!==null;){i=We;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var Ye=Xe.memoizedProps,tn=Xe.memoizedState,ee=i.stateNode,j=ee.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:di(i.type,Ye),tn);ee.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ae){Qt(i,i.return,Ae)}if(t=i.sibling,t!==null){t.return=i.return,We=t;break}We=i.return}return Xe=Vp,Vp=!1,Xe}function Ba(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&yu(i,a,p)}f=f.next}while(f!==c)}}function el(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Mu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function Gp(t){var i=t.alternate;i!==null&&(t.alternate=null,Gp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Ti],delete i[Ca],delete i[kc],delete i[A_],delete i[b_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hp(t){return t.tag===5||t.tag===3||t.tag===4}function Wp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Eu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=No));else if(c!==4&&(t=t.child,t!==null))for(Eu(t,i,a),t=t.sibling;t!==null;)Eu(t,i,a),t=t.sibling}function Tu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Tu(t,i,a),t=t.sibling;t!==null;)Tu(t,i,a),t=t.sibling}var gn=null,hi=!1;function yr(t,i,a){for(a=a.child;a!==null;)jp(t,i,a),a=a.sibling}function jp(t,i,a){if(Ne&&typeof Ne.onCommitFiberUnmount=="function")try{Ne.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 5:Mn||Us(a,i);case 6:var c=gn,f=hi;gn=null,yr(t,i,a),gn=c,hi=f,gn!==null&&(hi?(t=gn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):gn.removeChild(a.stateNode));break;case 18:gn!==null&&(hi?(t=gn,a=a.stateNode,t.nodeType===8?Oc(t.parentNode,a):t.nodeType===1&&Oc(t,a),_a(t)):Oc(gn,a.stateNode));break;case 4:c=gn,f=hi,gn=a.stateNode.containerInfo,hi=!0,yr(t,i,a),gn=c,hi=f;break;case 0:case 11:case 14:case 15:if(!Mn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var p=f,T=p.destroy;p=p.tag,T!==void 0&&((p&2)!==0||(p&4)!==0)&&yu(a,i,T),f=f.next}while(f!==c)}yr(t,i,a);break;case 1:if(!Mn&&(Us(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){Qt(a,i,U)}yr(t,i,a);break;case 21:yr(t,i,a);break;case 22:a.mode&1?(Mn=(c=Mn)||a.memoizedState!==null,yr(t,i,a),Mn=c):yr(t,i,a);break;default:yr(t,i,a)}}function Xp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new H_),i.forEach(function(c){var f=J_.bind(null,t,c);a.has(c)||(a.add(c),c.then(f,f))})}}function pi(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var p=t,T=i,U=T;e:for(;U!==null;){switch(U.tag){case 5:gn=U.stateNode,hi=!1;break e;case 3:gn=U.stateNode.containerInfo,hi=!0;break e;case 4:gn=U.stateNode.containerInfo,hi=!0;break e}U=U.return}if(gn===null)throw Error(n(160));jp(p,T,f),gn=null,hi=!1;var z=f.alternate;z!==null&&(z.return=null),f.return=null}catch(oe){Qt(f,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)qp(i,t),i=i.sibling}function qp(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pi(i,t),bi(t),c&4){try{Ba(3,t,t.return),el(3,t)}catch(Ye){Qt(t,t.return,Ye)}try{Ba(5,t,t.return)}catch(Ye){Qt(t,t.return,Ye)}}break;case 1:pi(i,t),bi(t),c&512&&a!==null&&Us(a,a.return);break;case 5:if(pi(i,t),bi(t),c&512&&a!==null&&Us(a,a.return),t.flags&32){var f=t.stateNode;try{ge(f,"")}catch(Ye){Qt(t,t.return,Ye)}}if(c&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,T=a!==null?a.memoizedProps:p,U=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{U==="input"&&p.type==="radio"&&p.name!=null&&$e(f,p),be(U,T);var oe=be(U,p);for(T=0;T<z.length;T+=2){var Se=z[T],ye=z[T+1];Se==="style"?de(f,ye):Se==="dangerouslySetInnerHTML"?pe(f,ye):Se==="children"?ge(f,ye):N(f,Se,ye,oe)}switch(U){case"input":Mt(f,p);break;case"textarea":Le(f,p);break;case"select":var ve=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Ve=p.value;Ve!=null?yt(f,!!p.multiple,Ve,!1):ve!==!!p.multiple&&(p.defaultValue!=null?yt(f,!!p.multiple,p.defaultValue,!0):yt(f,!!p.multiple,p.multiple?[]:"",!1))}f[Ca]=p}catch(Ye){Qt(t,t.return,Ye)}}break;case 6:if(pi(i,t),bi(t),c&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(Ye){Qt(t,t.return,Ye)}}break;case 3:if(pi(i,t),bi(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{_a(i.containerInfo)}catch(Ye){Qt(t,t.return,Ye)}break;case 4:pi(i,t),bi(t);break;case 13:pi(i,t),bi(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(bu=$t())),c&4&&Xp(t);break;case 22:if(Se=a!==null&&a.memoizedState!==null,t.mode&1?(Mn=(oe=Mn)||Se,pi(i,t),Mn=oe):pi(i,t),bi(t),c&8192){if(oe=t.memoizedState!==null,(t.stateNode.isHidden=oe)&&!Se&&(t.mode&1)!==0)for(We=t,Se=t.child;Se!==null;){for(ye=We=Se;We!==null;){switch(ve=We,Ve=ve.child,ve.tag){case 0:case 11:case 14:case 15:Ba(4,ve,ve.return);break;case 1:Us(ve,ve.return);var Xe=ve.stateNode;if(typeof Xe.componentWillUnmount=="function"){c=ve,a=ve.return;try{i=c,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(Ye){Qt(c,a,Ye)}}break;case 5:Us(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Kp(ye);continue}}Ve!==null?(Ve.return=ve,We=Ve):Kp(ye)}Se=Se.sibling}e:for(Se=null,ye=t;;){if(ye.tag===5){if(Se===null){Se=ye;try{f=ye.stateNode,oe?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(U=ye.stateNode,z=ye.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null,U.style.display=fe("display",T))}catch(Ye){Qt(t,t.return,Ye)}}}else if(ye.tag===6){if(Se===null)try{ye.stateNode.nodeValue=oe?"":ye.memoizedProps}catch(Ye){Qt(t,t.return,Ye)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;Se===ye&&(Se=null),ye=ye.return}Se===ye&&(Se=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:pi(i,t),bi(t),c&4&&Xp(t);break;case 21:break;default:pi(i,t),bi(t)}}function bi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(Hp(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(ge(f,""),c.flags&=-33);var p=Wp(t);Tu(t,p,f);break;case 3:case 4:var T=c.stateNode.containerInfo,U=Wp(t);Eu(t,U,T);break;default:throw Error(n(161))}}catch(z){Qt(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function j_(t,i,a){We=t,Yp(t)}function Yp(t,i,a){for(var c=(t.mode&1)!==0;We!==null;){var f=We,p=f.child;if(f.tag===22&&c){var T=f.memoizedState!==null||Jo;if(!T){var U=f.alternate,z=U!==null&&U.memoizedState!==null||Mn;U=Jo;var oe=Mn;if(Jo=T,(Mn=z)&&!oe)for(We=f;We!==null;)T=We,z=T.child,T.tag===22&&T.memoizedState!==null?Zp(f):z!==null?(z.return=T,We=z):Zp(f);for(;p!==null;)We=p,Yp(p),p=p.sibling;We=f,Jo=U,Mn=oe}$p(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,We=p):$p(t)}}function $p(t){for(;We!==null;){var i=We;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mn||el(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:di(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Kh(i,p,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Kh(i,T,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var Se=oe.memoizedState;if(Se!==null){var ye=Se.dehydrated;ye!==null&&_a(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Mn||i.flags&512&&Mu(i)}catch(ve){Qt(i,i.return,ve)}}if(i===t){We=null;break}if(a=i.sibling,a!==null){a.return=i.return,We=a;break}We=i.return}}function Kp(t){for(;We!==null;){var i=We;if(i===t){We=null;break}var a=i.sibling;if(a!==null){a.return=i.return,We=a;break}We=i.return}}function Zp(t){for(;We!==null;){var i=We;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{el(4,i)}catch(z){Qt(i,a,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(z){Qt(i,f,z)}}var p=i.return;try{Mu(i)}catch(z){Qt(i,p,z)}break;case 5:var T=i.return;try{Mu(i)}catch(z){Qt(i,T,z)}}}catch(z){Qt(i,i.return,z)}if(i===t){We=null;break}var U=i.sibling;if(U!==null){U.return=i.return,We=U;break}We=i.return}}var X_=Math.ceil,tl=L.ReactCurrentDispatcher,wu=L.ReactCurrentOwner,ii=L.ReactCurrentBatchConfig,bt=0,dn=null,rn=null,_n=0,Xn=0,Fs=gr(0),ln=0,za=null,$r=0,nl=0,Au=0,Va=null,Fn=null,bu=0,Os=1/0,Ki=null,il=!1,Cu=null,Mr=null,rl=!1,Er=null,sl=0,Ga=0,Ru=null,al=-1,ol=0;function Cn(){return(bt&6)!==0?$t():al!==-1?al:al=$t()}function Tr(t){return(t.mode&1)===0?1:(bt&2)!==0&&_n!==0?_n&-_n:R_.transition!==null?(ol===0&&(ol=ze()),ol):(t=vt,t!==0||(t=window.event,t=t===void 0?16:Jd(t.type)),t)}function mi(t,i,a,c){if(50<Ga)throw Ga=0,Ru=null,Error(n(185));_t(t,a,c),((bt&2)===0||t!==dn)&&(t===dn&&((bt&2)===0&&(nl|=a),ln===4&&wr(t,_n)),On(t,c),a===1&&bt===0&&(i.mode&1)===0&&(Os=$t()+500,Uo&&vr()))}function On(t,i){var a=t.callbackNode;Ft(t,i);var c=zt(t,t===dn?_n:0);if(c===0)a!==null&&_o(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&_o(a),i===1)t.tag===0?C_(Jp.bind(null,t)):kh(Jp.bind(null,t)),T_(function(){(bt&6)===0&&vr()}),a=null;else{switch(Gi(c)){case 1:a=da;break;case 4:a=A;break;case 16:a=q;break;case 536870912:a=ne;break;default:a=q}a=om(a,Qp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Qp(t,i){if(al=-1,ol=0,(bt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(ks()&&t.callbackNode!==a)return null;var c=zt(t,t===dn?_n:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=ll(t,c);else{i=c;var f=bt;bt|=2;var p=tm();(dn!==t||_n!==i)&&(Ki=null,Os=$t()+500,Zr(t,i));do try{$_();break}catch(U){em(t,U)}while(!0);qc(),tl.current=p,bt=f,rn!==null?i=0:(dn=null,_n=0,i=ln)}if(i!==0){if(i===2&&(f=nn(t),f!==0&&(c=f,i=Pu(t,f))),i===1)throw a=za,Zr(t,0),wr(t,c),On(t,$t()),a;if(i===6)wr(t,c);else{if(f=t.current.alternate,(c&30)===0&&!q_(f)&&(i=ll(t,c),i===2&&(p=nn(t),p!==0&&(c=p,i=Pu(t,p))),i===1))throw a=za,Zr(t,0),wr(t,c),On(t,$t()),a;switch(t.finishedWork=f,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Qr(t,Fn,Ki);break;case 3:if(wr(t,c),(c&130023424)===c&&(i=bu+500-$t(),10<i)){if(zt(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){Cn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Fc(Qr.bind(null,t,Fn,Ki),i);break}Qr(t,Fn,Ki);break;case 4:if(wr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,f=-1;0<c;){var T=31-Re(c);p=1<<T,T=i[T],T>f&&(f=T),c&=~p}if(c=f,c=$t()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*X_(c/1960))-c,10<c){t.timeoutHandle=Fc(Qr.bind(null,t,Fn,Ki),c);break}Qr(t,Fn,Ki);break;case 5:Qr(t,Fn,Ki);break;default:throw Error(n(329))}}}return On(t,$t()),t.callbackNode===a?Qp.bind(null,t):null}function Pu(t,i){var a=Va;return t.current.memoizedState.isDehydrated&&(Zr(t,i).flags|=256),t=ll(t,i),t!==2&&(i=Fn,Fn=a,i!==null&&Nu(i)),t}function Nu(t){Fn===null?Fn=t:Fn.push.apply(Fn,t)}function q_(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],p=f.getSnapshot;f=f.value;try{if(!ui(p(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function wr(t,i){for(i&=~Au,i&=~nl,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Re(i),c=1<<a;t[a]=-1,i&=~c}}function Jp(t){if((bt&6)!==0)throw Error(n(327));ks();var i=zt(t,0);if((i&1)===0)return On(t,$t()),null;var a=ll(t,i);if(t.tag!==0&&a===2){var c=nn(t);c!==0&&(i=c,a=Pu(t,c))}if(a===1)throw a=za,Zr(t,0),wr(t,i),On(t,$t()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Qr(t,Fn,Ki),On(t,$t()),null}function Lu(t,i){var a=bt;bt|=1;try{return t(i)}finally{bt=a,bt===0&&(Os=$t()+500,Uo&&vr())}}function Kr(t){Er!==null&&Er.tag===0&&(bt&6)===0&&ks();var i=bt;bt|=1;var a=ii.transition,c=vt;try{if(ii.transition=null,vt=1,t)return t()}finally{vt=c,ii.transition=a,bt=i,(bt&6)===0&&vr()}}function Du(){Xn=Fs.current,Wt(Fs)}function Zr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,E_(a)),rn!==null)for(a=rn.return;a!==null;){var c=a;switch(Gc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Do();break;case 3:Ds(),Wt(Dn),Wt(xn),tu();break;case 5:Jc(c);break;case 4:Ds();break;case 13:Wt(Kt);break;case 19:Wt(Kt);break;case 10:Yc(c.type._context);break;case 22:case 23:Du()}a=a.return}if(dn=t,rn=t=Ar(t.current,null),_n=Xn=i,ln=0,za=null,Au=nl=$r=0,Fn=Va=null,Xr!==null){for(i=0;i<Xr.length;i++)if(a=Xr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,p=a.pending;if(p!==null){var T=p.next;p.next=f,c.next=T}a.pending=c}Xr=null}return t}function em(t,i){do{var a=rn;try{if(qc(),jo.current=$o,Xo){for(var c=Zt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Xo=!1}if(Yr=0,fn=on=Zt=null,Ia=!1,Ua=0,wu.current=null,a===null||a.return===null){ln=1,za=i,rn=null;break}e:{var p=t,T=a.return,U=a,z=i;if(i=_n,U.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var oe=z,Se=U,ye=Se.tag;if((Se.mode&1)===0&&(ye===0||ye===11||ye===15)){var ve=Se.alternate;ve?(Se.updateQueue=ve.updateQueue,Se.memoizedState=ve.memoizedState,Se.lanes=ve.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ve=wp(T);if(Ve!==null){Ve.flags&=-257,Ap(Ve,T,U,p,i),Ve.mode&1&&Tp(p,oe,i),i=Ve,z=oe;var Xe=i.updateQueue;if(Xe===null){var Ye=new Set;Ye.add(z),i.updateQueue=Ye}else Xe.add(z);break e}else{if((i&1)===0){Tp(p,oe,i),Iu();break e}z=Error(n(426))}}else if(Xt&&U.mode&1){var tn=wp(T);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),Ap(tn,T,U,p,i),jc(Is(z,U));break e}}p=z=Is(z,U),ln!==4&&(ln=2),Va===null?Va=[p]:Va.push(p),p=T;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var ee=Mp(p,z,i);$h(p,ee);break e;case 1:U=z;var j=p.type,ie=p.stateNode;if((p.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Mr===null||!Mr.has(ie)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ae=Ep(p,U,i);$h(p,Ae);break e}}p=p.return}while(p!==null)}im(a)}catch(Je){i=Je,rn===a&&a!==null&&(rn=a=a.return);continue}break}while(!0)}function tm(){var t=tl.current;return tl.current=$o,t===null?$o:t}function Iu(){(ln===0||ln===3||ln===2)&&(ln=4),dn===null||($r&268435455)===0&&(nl&268435455)===0||wr(dn,_n)}function ll(t,i){var a=bt;bt|=2;var c=tm();(dn!==t||_n!==i)&&(Ki=null,Zr(t,i));do try{Y_();break}catch(f){em(t,f)}while(!0);if(qc(),bt=a,tl.current=c,rn!==null)throw Error(n(261));return dn=null,_n=0,ln}function Y_(){for(;rn!==null;)nm(rn)}function $_(){for(;rn!==null&&!fc();)nm(rn)}function nm(t){var i=am(t.alternate,t,Xn);t.memoizedProps=t.pendingProps,i===null?im(t):rn=i,wu.current=null}function im(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=V_(a,i,Xn),a!==null){rn=a;return}}else{if(a=G_(a,i),a!==null){a.flags&=32767,rn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ln=6,rn=null;return}}if(i=i.sibling,i!==null){rn=i;return}rn=i=t}while(i!==null);ln===0&&(ln=5)}function Qr(t,i,a){var c=vt,f=ii.transition;try{ii.transition=null,vt=1,K_(t,i,a,c)}finally{ii.transition=f,vt=c}return null}function K_(t,i,a,c){do ks();while(Er!==null);if((bt&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(Nn(t,p),t===dn&&(rn=dn=null,_n=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||rl||(rl=!0,om(q,function(){return ks(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=ii.transition,ii.transition=null;var T=vt;vt=1;var U=bt;bt|=4,wu.current=null,W_(t,a),qp(a,t),g_(Ic),xo=!!Dc,Ic=Dc=null,t.current=a,j_(a),dc(),bt=U,vt=T,ii.transition=p}else t.current=a;if(rl&&(rl=!1,Er=t,sl=f),p=t.pendingLanes,p===0&&(Mr=null),He(a.stateNode),On(t,$t()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(il)throw il=!1,t=Cu,Cu=null,t;return(sl&1)!==0&&t.tag!==0&&ks(),p=t.pendingLanes,(p&1)!==0?t===Ru?Ga++:(Ga=0,Ru=t):Ga=0,vr(),null}function ks(){if(Er!==null){var t=Gi(sl),i=ii.transition,a=vt;try{if(ii.transition=null,vt=16>t?16:t,Er===null)var c=!1;else{if(t=Er,Er=null,sl=0,(bt&6)!==0)throw Error(n(331));var f=bt;for(bt|=4,We=t.current;We!==null;){var p=We,T=p.child;if((We.flags&16)!==0){var U=p.deletions;if(U!==null){for(var z=0;z<U.length;z++){var oe=U[z];for(We=oe;We!==null;){var Se=We;switch(Se.tag){case 0:case 11:case 15:Ba(8,Se,p)}var ye=Se.child;if(ye!==null)ye.return=Se,We=ye;else for(;We!==null;){Se=We;var ve=Se.sibling,Ve=Se.return;if(Gp(Se),Se===oe){We=null;break}if(ve!==null){ve.return=Ve,We=ve;break}We=Ve}}}var Xe=p.alternate;if(Xe!==null){var Ye=Xe.child;if(Ye!==null){Xe.child=null;do{var tn=Ye.sibling;Ye.sibling=null,Ye=tn}while(Ye!==null)}}We=p}}if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,We=T;else e:for(;We!==null;){if(p=We,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ba(9,p,p.return)}var ee=p.sibling;if(ee!==null){ee.return=p.return,We=ee;break e}We=p.return}}var j=t.current;for(We=j;We!==null;){T=We;var ie=T.child;if((T.subtreeFlags&2064)!==0&&ie!==null)ie.return=T,We=ie;else e:for(T=j;We!==null;){if(U=We,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:el(9,U)}}catch(Je){Qt(U,U.return,Je)}if(U===T){We=null;break e}var Ae=U.sibling;if(Ae!==null){Ae.return=U.return,We=Ae;break e}We=U.return}}if(bt=f,vr(),Ne&&typeof Ne.onPostCommitFiberRoot=="function")try{Ne.onPostCommitFiberRoot(te,t)}catch{}c=!0}return c}finally{vt=a,ii.transition=i}}return!1}function rm(t,i,a){i=Is(a,i),i=Mp(t,i,1),t=Sr(t,i,1),i=Cn(),t!==null&&(_t(t,1,i),On(t,i))}function Qt(t,i,a){if(t.tag===3)rm(t,t,a);else for(;i!==null;){if(i.tag===3){rm(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Mr===null||!Mr.has(c))){t=Is(a,t),t=Ep(i,t,1),i=Sr(i,t,1),t=Cn(),i!==null&&(_t(i,1,t),On(i,t));break}}i=i.return}}function Z_(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=Cn(),t.pingedLanes|=t.suspendedLanes&a,dn===t&&(_n&a)===a&&(ln===4||ln===3&&(_n&130023424)===_n&&500>$t()-bu?Zr(t,0):Au|=a),On(t,i)}function sm(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ke,Ke<<=1,(Ke&130023424)===0&&(Ke=4194304)));var a=Cn();t=qi(t,i),t!==null&&(_t(t,i,a),On(t,a))}function Q_(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),sm(t,a)}function J_(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),sm(t,a)}var am;am=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Dn.current)Un=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Un=!1,z_(t,i,a);Un=(t.flags&131072)!==0}else Un=!1,Xt&&(i.flags&1048576)!==0&&Bh(i,Oo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Qo(t,i),t=i.pendingProps;var f=As(i,xn.current);Ls(i,a),f=ru(null,i,c,t,f,a);var p=su();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,In(c)?(p=!0,Io(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Zc(i),f.updater=Ko,i.stateNode=f,f._reactInternals=i,fu(i,c,t,a),i=mu(null,i,c,!0,p,a)):(i.tag=0,Xt&&p&&Vc(i),bn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Qo(t,i),t=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=tv(c),t=di(c,t),f){case 0:i=pu(null,i,c,t,a);break e;case 1:i=Lp(null,i,c,t,a);break e;case 11:i=bp(null,i,c,t,a);break e;case 14:i=Cp(null,i,c,di(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:di(c,f),pu(t,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:di(c,f),Lp(t,i,c,f,a);case 3:e:{if(Dp(i),t===null)throw Error(n(387));c=i.pendingProps,p=i.memoizedState,f=p.element,Yh(t,i),Ho(i,c,null,a);var T=i.memoizedState;if(c=T.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=Is(Error(n(423)),i),i=Ip(t,i,c,a,f);break e}else if(c!==f){f=Is(Error(n(424)),i),i=Ip(t,i,c,a,f);break e}else for(jn=mr(i.stateNode.containerInfo.firstChild),Wn=i,Xt=!0,fi=null,a=Xh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Rs(),c===f){i=$i(t,i,a);break e}bn(t,i,c,a)}i=i.child}return i;case 5:return Zh(i),t===null&&Wc(i),c=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,T=f.children,Uc(c,f)?T=null:p!==null&&Uc(c,p)&&(i.flags|=32),Np(t,i),bn(t,i,T,a),i.child;case 6:return t===null&&Wc(i),null;case 13:return Up(t,i,a);case 4:return Qc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=Ps(i,null,c,a):bn(t,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:di(c,f),bp(t,i,c,f,a);case 7:return bn(t,i,i.pendingProps,a),i.child;case 8:return bn(t,i,i.pendingProps.children,a),i.child;case 12:return bn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,p=i.memoizedProps,T=f.value,Vt(zo,c._currentValue),c._currentValue=T,p!==null)if(ui(p.value,T)){if(p.children===f.children&&!Dn.current){i=$i(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var U=p.dependencies;if(U!==null){T=p.child;for(var z=U.firstContext;z!==null;){if(z.context===c){if(p.tag===1){z=Yi(-1,a&-a),z.tag=2;var oe=p.updateQueue;if(oe!==null){oe=oe.shared;var Se=oe.pending;Se===null?z.next=z:(z.next=Se.next,Se.next=z),oe.pending=z}}p.lanes|=a,z=p.alternate,z!==null&&(z.lanes|=a),$c(p.return,a,i),U.lanes|=a;break}z=z.next}}else if(p.tag===10)T=p.type===i.type?null:p.child;else if(p.tag===18){if(T=p.return,T===null)throw Error(n(341));T.lanes|=a,U=T.alternate,U!==null&&(U.lanes|=a),$c(T,a,i),T=p.sibling}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===i){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}bn(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Ls(i,a),f=ti(f),c=c(f),i.flags|=1,bn(t,i,c,a),i.child;case 14:return c=i.type,f=di(c,i.pendingProps),f=di(c.type,f),Cp(t,i,c,f,a);case 15:return Rp(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:di(c,f),Qo(t,i),i.tag=1,In(c)?(t=!0,Io(i)):t=!1,Ls(i,a),Sp(i,c,f),fu(i,c,f,a),mu(null,i,c,!0,t,a);case 19:return Op(t,i,a);case 22:return Pp(t,i,a)}throw Error(n(156,i.tag))};function om(t,i){return go(t,i)}function ev(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(t,i,a,c){return new ev(t,i,a,c)}function Uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tv(t){if(typeof t=="function")return Uu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Y)return 11;if(t===G)return 14}return 2}function Ar(t,i){var a=t.alternate;return a===null?(a=ri(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function cl(t,i,a,c,f,p){var T=2;if(c=t,typeof t=="function")Uu(t)&&(T=1);else if(typeof t=="string")T=5;else e:switch(t){case F:return Jr(a.children,f,p,i);case M:T=8,f|=8;break;case P:return t=ri(12,a,i,f|2),t.elementType=P,t.lanes=p,t;case re:return t=ri(13,a,i,f),t.elementType=re,t.lanes=p,t;case le:return t=ri(19,a,i,f),t.elementType=le,t.lanes=p,t;case X:return ul(a,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W:T=10;break e;case k:T=9;break e;case Y:T=11;break e;case G:T=14;break e;case Q:T=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ri(T,a,i,f),i.elementType=t,i.type=c,i.lanes=p,i}function Jr(t,i,a,c){return t=ri(7,t,c,i),t.lanes=a,t}function ul(t,i,a,c){return t=ri(22,t,c,i),t.elementType=X,t.lanes=a,t.stateNode={isHidden:!1},t}function Fu(t,i,a){return t=ri(6,t,null,i),t.lanes=a,t}function Ou(t,i,a){return i=ri(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function nv(t,i,a,c,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function ku(t,i,a,c,f,p,T,U,z){return t=new nv(t,i,a,U,z),i===1?(i=1,p===!0&&(i|=8)):i=0,p=ri(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zc(p),t}function iv(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function lm(t){if(!t)return _r;t=t._reactInternals;e:{if(Mi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(In(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(In(a))return Fh(t,a,i)}return i}function cm(t,i,a,c,f,p,T,U,z){return t=ku(a,c,!0,t,f,p,T,U,z),t.context=lm(null),a=t.current,c=Cn(),f=Tr(a),p=Yi(c,f),p.callback=i??null,Sr(a,p,f),t.current.lanes=f,_t(t,f,c),On(t,c),t}function fl(t,i,a,c){var f=i.current,p=Cn(),T=Tr(f);return a=lm(a),i.context===null?i.context=a:i.pendingContext=a,i=Yi(p,T),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=Sr(f,i,T),t!==null&&(mi(t,f,T,p),Go(t,f,T)),T}function dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function um(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Bu(t,i){um(t,i),(t=t.alternate)&&um(t,i)}function rv(){return null}var fm=typeof reportError=="function"?reportError:function(t){console.error(t)};function zu(t){this._internalRoot=t}hl.prototype.render=zu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));fl(t,i,null,null)},hl.prototype.unmount=zu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Kr(function(){fl(null,t,null,null)}),i[Hi]=null}};function hl(t){this._internalRoot=t}hl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ot();t={blockedOn:null,target:t,priority:i};for(var a=0;a<dr.length&&i!==0&&i<dr[a].priority;a++);dr.splice(a,0,t),a===0&&Zd(t)}};function Vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dm(){}function sv(t,i,a,c,f){if(f){if(typeof c=="function"){var p=c;c=function(){var oe=dl(T);p.call(oe)}}var T=cm(i,c,t,0,null,!1,!1,"",dm);return t._reactRootContainer=T,t[Hi]=T.current,Aa(t.nodeType===8?t.parentNode:t),Kr(),T}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var U=c;c=function(){var oe=dl(z);U.call(oe)}}var z=ku(t,0,!1,null,null,!1,!1,"",dm);return t._reactRootContainer=z,t[Hi]=z.current,Aa(t.nodeType===8?t.parentNode:t),Kr(function(){fl(i,z,a,c)}),z}function ml(t,i,a,c,f){var p=a._reactRootContainer;if(p){var T=p;if(typeof f=="function"){var U=f;f=function(){var z=dl(T);U.call(z)}}fl(i,T,t,f)}else T=sv(a,i,t,f,c);return dl(T)}It=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=At(i.pendingLanes);a!==0&&(Ln(i,a|1),On(i,$t()),(bt&6)===0&&(Os=$t()+500,vr()))}break;case 13:Kr(function(){var c=qi(t,1);if(c!==null){var f=Cn();mi(c,t,1,f)}}),Bu(t,1)}},Gt=function(t){if(t.tag===13){var i=qi(t,134217728);if(i!==null){var a=Cn();mi(i,t,134217728,a)}Bu(t,134217728)}},li=function(t){if(t.tag===13){var i=Tr(t),a=qi(t,i);if(a!==null){var c=Cn();mi(a,t,i,c)}Bu(t,i)}},Ot=function(){return vt},ci=function(t,i){var a=vt;try{return vt=t,i()}finally{vt=a}},ot=function(t,i,a){switch(i){case"input":if(Mt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var f=Lo(c);if(!f)throw Error(n(90));Ut(c),Mt(c,f)}}}break;case"textarea":Le(t,a);break;case"select":i=a.value,i!=null&&yt(t,!!a.multiple,i,!1)}},Ce=Lu,_e=Kr;var av={usingClientEntryPoint:!1,Events:[Ra,Ts,Lo,he,ke,Lu]},Ha={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ov={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ua(t),t===null?null:t.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||rv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{te=gl.inject(ov),Ne=gl}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=av,kn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vu(i))throw Error(n(200));return iv(t,i,null,a)},kn.createRoot=function(t,i){if(!Vu(t))throw Error(n(299));var a=!1,c="",f=fm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=ku(t,1,!1,null,null,a,!1,c,f),t[Hi]=i.current,Aa(t.nodeType===8?t.parentNode:t),new zu(i)},kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ua(i),t=t===null?null:t.stateNode,t},kn.flushSync=function(t){return Kr(t)},kn.hydrate=function(t,i,a){if(!pl(i))throw Error(n(200));return ml(null,t,i,!0,a)},kn.hydrateRoot=function(t,i,a){if(!Vu(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,f=!1,p="",T=fm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=cm(i,null,t,1,a??null,f,!1,p,T),t[Hi]=i.current,Aa(t),c)for(t=0;t<c.length;t++)a=c[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new hl(i)},kn.render=function(t,i,a){if(!pl(i))throw Error(n(200));return ml(null,t,i,!1,a)},kn.unmountComponentAtNode=function(t){if(!pl(t))throw Error(n(40));return t._reactRootContainer?(Kr(function(){ml(null,null,t,!1,function(){t._reactRootContainer=null,t[Hi]=null})}),!0):!1},kn.unstable_batchedUpdates=Lu,kn.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!pl(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ml(t,i,a,!1,c)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var Sm;function gv(){if(Sm)return Wu.exports;Sm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Wu.exports=mv(),Wu.exports}var ym;function _v(){if(ym)return _l;ym=1;var s=gv();return _l.createRoot=s.createRoot,_l.hydrateRoot=s.hydrateRoot,_l}var vv=_v();const xv=Rg(vv);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pd="184",Sv=0,Mm=1,yv=2,Xl=1,Mv=2,to=3,Or=0,Vn=1,ir=2,sr=0,ea=1,Em=2,Tm=3,wm=4,Ev=5,ss=100,Tv=101,wv=102,Av=103,bv=104,Cv=200,Rv=201,Pv=202,Nv=203,Df=204,If=205,Lv=206,Dv=207,Iv=208,Uv=209,Fv=210,Ov=211,kv=212,Bv=213,zv=214,Uf=0,Ff=1,Of=2,na=3,kf=4,Bf=5,zf=6,Vf=7,Pg=0,Vv=1,Gv=2,Ui=0,Ng=1,Lg=2,Dg=3,Ig=4,Ug=5,Fg=6,Og=7,kg=300,us=301,ia=302,qu=303,Yu=304,oc=306,Gf=1e3,rr=1001,Hf=1002,vn=1003,Hv=1004,vl=1005,wn=1006,$u=1007,ls=1008,Kn=1009,Bg=1010,zg=1011,so=1012,Nd=1013,Oi=1014,Li=1015,or=1016,Ld=1017,Dd=1018,ao=1020,Vg=35902,Gg=35899,Hg=1021,Wg=1022,Si=1023,lr=1026,cs=1027,jg=1028,Id=1029,fs=1030,Ud=1031,Fd=1033,ql=33776,Yl=33777,$l=33778,Kl=33779,Wf=35840,jf=35841,Xf=35842,qf=35843,Yf=36196,$f=37492,Kf=37496,Zf=37488,Qf=37489,Ql=37490,Jf=37491,ed=37808,td=37809,nd=37810,id=37811,rd=37812,sd=37813,ad=37814,od=37815,ld=37816,cd=37817,ud=37818,fd=37819,dd=37820,hd=37821,pd=36492,md=36494,gd=36495,_d=36283,vd=36284,Jl=36285,xd=36286,Wv=3200,Sd=0,jv=1,Ur="",ai="srgb",ec="srgb-linear",tc="linear",kt="srgb",Bs=7680,Am=519,Xv=512,qv=513,Yv=514,Od=515,$v=516,Kv=517,kd=518,Zv=519,bm=35044,Cm="300 es",Di=2e3,oo=2001;function Qv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function nc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jv(){const s=nc("canvas");return s.style.display="block",s}const Rm={};function Pm(...s){const e="THREE."+s.shift();console.log(e,...s)}function Xg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function at(...s){s=Xg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Rt(...s){s=Xg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function yd(...s){const e=s.join(" ");e in Rm||(Rm[e]=!0,at(...s))}function ex(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const tx={[Uf]:Ff,[Of]:zf,[kf]:Vf,[na]:Bf,[Ff]:Uf,[zf]:Of,[Vf]:kf,[Bf]:na};class ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=Math.PI/180,Md=180/Math.PI;function co(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[n&63|128]+En[n>>8&255]+"-"+En[n>>16&255]+En[n>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function St(s,e,n){return Math.max(e,Math.min(n,s))}function nx(s,e){return(s%e+e)%e}function Zu(s,e,n){return(1-n)*s+n*e}function ja(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const jd=class jd{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jd.prototype.isVector2=!0;let Nt=jd;class aa{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,d){let h=r[o+0],m=r[o+1],x=r[o+2],S=r[o+3],g=l[u+0],y=l[u+1],w=l[u+2],C=l[u+3];if(S!==C||h!==g||m!==y||x!==w){let v=h*g+m*y+x*w+S*C;v<0&&(g=-g,y=-y,w=-w,C=-C,v=-v);let _=1-d;if(v<.9995){const b=Math.acos(v),N=Math.sin(b);_=Math.sin(_*b)/N,d=Math.sin(d*b)/N,h=h*_+g*d,m=m*_+y*d,x=x*_+w*d,S=S*_+C*d}else{h=h*_+g*d,m=m*_+y*d,x=x*_+w*d,S=S*_+C*d;const b=1/Math.sqrt(h*h+m*m+x*x+S*S);h*=b,m*=b,x*=b,S*=b}}e[n]=h,e[n+1]=m,e[n+2]=x,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,o,l,u){const d=r[o],h=r[o+1],m=r[o+2],x=r[o+3],S=l[u],g=l[u+1],y=l[u+2],w=l[u+3];return e[n]=d*w+x*S+h*y-m*g,e[n+1]=h*w+x*g+m*S-d*y,e[n+2]=m*w+x*y+d*g-h*S,e[n+3]=x*w-d*S-h*g-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,m=d(r/2),x=d(o/2),S=d(l/2),g=h(r/2),y=h(o/2),w=h(l/2);switch(u){case"XYZ":this._x=g*x*S+m*y*w,this._y=m*y*S-g*x*w,this._z=m*x*w+g*y*S,this._w=m*x*S-g*y*w;break;case"YXZ":this._x=g*x*S+m*y*w,this._y=m*y*S-g*x*w,this._z=m*x*w-g*y*S,this._w=m*x*S+g*y*w;break;case"ZXY":this._x=g*x*S-m*y*w,this._y=m*y*S+g*x*w,this._z=m*x*w+g*y*S,this._w=m*x*S-g*y*w;break;case"ZYX":this._x=g*x*S-m*y*w,this._y=m*y*S+g*x*w,this._z=m*x*w-g*y*S,this._w=m*x*S+g*y*w;break;case"YZX":this._x=g*x*S+m*y*w,this._y=m*y*S+g*x*w,this._z=m*x*w-g*y*S,this._w=m*x*S-g*y*w;break;case"XZY":this._x=g*x*S-m*y*w,this._y=m*y*S-g*x*w,this._z=m*x*w+g*y*S,this._w=m*x*S+g*y*w;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],d=n[5],h=n[9],m=n[2],x=n[6],S=n[10],g=r+d+S;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(x-h)*y,this._y=(l-m)*y,this._z=(u-o)*y}else if(r>d&&r>S){const y=2*Math.sqrt(1+r-d-S);this._w=(x-h)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+m)/y}else if(d>S){const y=2*Math.sqrt(1+d-r-S);this._w=(l-m)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(h+x)/y}else{const y=2*Math.sqrt(1+S-r-d);this._w=(u-o)/y,this._x=(l+m)/y,this._y=(h+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,d=n._x,h=n._y,m=n._z,x=n._w;return this._x=r*x+u*d+o*m-l*h,this._y=o*x+u*h+l*d-r*m,this._z=l*x+u*m+r*h-o*d,this._w=u*x-r*d-o*h-l*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let h=1-n;if(d<.9995){const m=Math.acos(d),x=Math.sin(m);h=Math.sin(h*m)/x,n=Math.sin(n*m)/x,this._x=this._x*h+r*n,this._y=this._y*h+o*n,this._z=this._z*h+l*n,this._w=this._w*h+u*n,this._onChangeCallback()}else this._x=this._x*h+r*n,this._y=this._y*h+o*n,this._z=this._z*h+l*n,this._w=this._w*h+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Xd=class Xd{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Nm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Nm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,h=e.w,m=2*(u*o-d*r),x=2*(d*n-l*o),S=2*(l*r-u*n);return this.x=n+h*m+u*S-d*x,this.y=r+h*x+d*m-l*S,this.z=o+h*S+l*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,d=n.y,h=n.z;return this.x=o*h-l*d,this.y=l*u-r*h,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Qu.copy(this).projectOnVector(e),this.sub(Qu)}reflect(e){return this.sub(Qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xd.prototype.isVector3=!0;let J=Xd;const Qu=new J,Nm=new aa,qd=class qd{constructor(e,n,r,o,l,u,d,h,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,d,h,m)}set(e,n,r,o,l,u,d,h,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=n,x[4]=l,x[5]=h,x[6]=r,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],d=r[3],h=r[6],m=r[1],x=r[4],S=r[7],g=r[2],y=r[5],w=r[8],C=o[0],v=o[3],_=o[6],b=o[1],N=o[4],L=o[7],B=o[2],I=o[5],F=o[8];return l[0]=u*C+d*b+h*B,l[3]=u*v+d*N+h*I,l[6]=u*_+d*L+h*F,l[1]=m*C+x*b+S*B,l[4]=m*v+x*N+S*I,l[7]=m*_+x*L+S*F,l[2]=g*C+y*b+w*B,l[5]=g*v+y*N+w*I,l[8]=g*_+y*L+w*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],x=e[8];return n*u*x-n*d*m-r*l*x+r*d*h+o*l*m-o*u*h}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],x=e[8],S=x*u-d*m,g=d*h-x*l,y=m*l-u*h,w=n*S+r*g+o*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=S*C,e[1]=(o*m-x*r)*C,e[2]=(d*r-o*u)*C,e[3]=g*C,e[4]=(x*n-o*h)*C,e[5]=(o*l-d*n)*C,e[6]=y*C,e[7]=(r*h-m*n)*C,e[8]=(u*n-r*l)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,d){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*u+m*d)+u+e,-o*m,o*h,-o*(-m*u+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Ju.makeScale(e,n)),this}rotate(e){return this.premultiply(Ju.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ju.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qd.prototype.isMatrix3=!0;let ht=qd;const Ju=new ht,Lm=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dm=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ix(){const s={enabled:!0,workingColorSpace:ec,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===kt&&(o.r=ar(o.r),o.g=ar(o.g),o.b=ar(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===kt&&(o.r=ta(o.r),o.g=ta(o.g),o.b=ta(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ur?tc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return yd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return yd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ec]:{primaries:e,whitePoint:r,transfer:tc,toXYZ:Lm,fromXYZ:Dm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:Lm,fromXYZ:Dm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),s}const Tt=ix();function ar(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ta(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let zs;class rx{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{zs===void 0&&(zs=nc("canvas")),zs.width=e.width,zs.height=e.height;const o=zs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=zs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=nc("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=ar(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ar(n[r]/255)*255):n[r]=ar(n[r]);return{data:n,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sx=0;class Bd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=co(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(ef(o[u].image)):l.push(ef(o[u]))}else l=ef(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function ef(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let ax=0;const tf=new J;class Pn extends ds{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,r=rr,o=rr,l=wn,u=ls,d=Si,h=Kn,m=Pn.DEFAULT_ANISOTROPY,x=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=co(),this.name="",this.source=new Bd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tf).x}get height(){return this.source.getSize(tf).y}get depth(){return this.source.getSize(tf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){at(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){at(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gf:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case Hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gf:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case Hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=kg;Pn.DEFAULT_ANISOTROPY=1;const Yd=class Yd{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const h=e.elements,m=h[0],x=h[4],S=h[8],g=h[1],y=h[5],w=h[9],C=h[2],v=h[6],_=h[10];if(Math.abs(x-g)<.01&&Math.abs(S-C)<.01&&Math.abs(w-v)<.01){if(Math.abs(x+g)<.1&&Math.abs(S+C)<.1&&Math.abs(w+v)<.1&&Math.abs(m+y+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(m+1)/2,L=(y+1)/2,B=(_+1)/2,I=(x+g)/4,F=(S+C)/4,M=(w+v)/4;return N>L&&N>B?N<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(N),o=I/r,l=F/r):L>B?L<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(L),r=I/o,l=M/o):B<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(B),r=F/l,o=M/l),this.set(r,o,l,n),this}let b=Math.sqrt((v-w)*(v-w)+(S-C)*(S-C)+(g-x)*(g-x));return Math.abs(b)<.001&&(b=1),this.x=(v-w)/b,this.y=(S-C)/b,this.z=(g-x)/b,this.w=Math.acos((m+y+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yd.prototype.isVector4=!0;let Jt=Yd;class ox extends ds{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Jt(0,0,e,n),this.scissorTest=!1,this.viewport=new Jt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},l=new Pn(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Bd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends ox{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class qg extends Pn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=vn,this.minFilter=vn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lx extends Pn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=vn,this.minFilter=vn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ac=class ac{constructor(e,n,r,o,l,u,d,h,m,x,S,g,y,w,C,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,d,h,m,x,S,g,y,w,C,v)}set(e,n,r,o,l,u,d,h,m,x,S,g,y,w,C,v){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=d,_[13]=h,_[2]=m,_[6]=x,_[10]=S,_[14]=g,_[3]=y,_[7]=w,_[11]=C,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ac().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Vs.setFromMatrixColumn(e,0).length(),l=1/Vs.setFromMatrixColumn(e,1).length(),u=1/Vs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(o),m=Math.sin(o),x=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const g=u*x,y=u*S,w=d*x,C=d*S;n[0]=h*x,n[4]=-h*S,n[8]=m,n[1]=y+w*m,n[5]=g-C*m,n[9]=-d*h,n[2]=C-g*m,n[6]=w+y*m,n[10]=u*h}else if(e.order==="YXZ"){const g=h*x,y=h*S,w=m*x,C=m*S;n[0]=g+C*d,n[4]=w*d-y,n[8]=u*m,n[1]=u*S,n[5]=u*x,n[9]=-d,n[2]=y*d-w,n[6]=C+g*d,n[10]=u*h}else if(e.order==="ZXY"){const g=h*x,y=h*S,w=m*x,C=m*S;n[0]=g-C*d,n[4]=-u*S,n[8]=w+y*d,n[1]=y+w*d,n[5]=u*x,n[9]=C-g*d,n[2]=-u*m,n[6]=d,n[10]=u*h}else if(e.order==="ZYX"){const g=u*x,y=u*S,w=d*x,C=d*S;n[0]=h*x,n[4]=w*m-y,n[8]=g*m+C,n[1]=h*S,n[5]=C*m+g,n[9]=y*m-w,n[2]=-m,n[6]=d*h,n[10]=u*h}else if(e.order==="YZX"){const g=u*h,y=u*m,w=d*h,C=d*m;n[0]=h*x,n[4]=C-g*S,n[8]=w*S+y,n[1]=S,n[5]=u*x,n[9]=-d*x,n[2]=-m*x,n[6]=y*S+w,n[10]=g-C*S}else if(e.order==="XZY"){const g=u*h,y=u*m,w=d*h,C=d*m;n[0]=h*x,n[4]=-S,n[8]=m*x,n[1]=g*S+C,n[5]=u*x,n[9]=y*S-w,n[2]=w*S-y,n[6]=d*x,n[10]=C*S+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cx,e,ux)}lookAt(e,n,r){const o=this.elements;return qn.subVectors(e,n),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Cr.crossVectors(r,qn),Cr.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Cr.crossVectors(r,qn)),Cr.normalize(),xl.crossVectors(qn,Cr),o[0]=Cr.x,o[4]=xl.x,o[8]=qn.x,o[1]=Cr.y,o[5]=xl.y,o[9]=qn.y,o[2]=Cr.z,o[6]=xl.z,o[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],d=r[4],h=r[8],m=r[12],x=r[1],S=r[5],g=r[9],y=r[13],w=r[2],C=r[6],v=r[10],_=r[14],b=r[3],N=r[7],L=r[11],B=r[15],I=o[0],F=o[4],M=o[8],P=o[12],W=o[1],k=o[5],Y=o[9],re=o[13],le=o[2],G=o[6],Q=o[10],X=o[14],$=o[3],ce=o[7],ue=o[11],O=o[15];return l[0]=u*I+d*W+h*le+m*$,l[4]=u*F+d*k+h*G+m*ce,l[8]=u*M+d*Y+h*Q+m*ue,l[12]=u*P+d*re+h*X+m*O,l[1]=x*I+S*W+g*le+y*$,l[5]=x*F+S*k+g*G+y*ce,l[9]=x*M+S*Y+g*Q+y*ue,l[13]=x*P+S*re+g*X+y*O,l[2]=w*I+C*W+v*le+_*$,l[6]=w*F+C*k+v*G+_*ce,l[10]=w*M+C*Y+v*Q+_*ue,l[14]=w*P+C*re+v*X+_*O,l[3]=b*I+N*W+L*le+B*$,l[7]=b*F+N*k+L*G+B*ce,l[11]=b*M+N*Y+L*Q+B*ue,l[15]=b*P+N*re+L*X+B*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],h=e[9],m=e[13],x=e[2],S=e[6],g=e[10],y=e[14],w=e[3],C=e[7],v=e[11],_=e[15],b=h*y-m*g,N=d*y-m*S,L=d*g-h*S,B=u*y-m*x,I=u*g-h*x,F=u*S-d*x;return n*(C*b-v*N+_*L)-r*(w*b-v*B+_*I)+o*(w*N-C*B+_*F)-l*(w*L-C*I+v*F)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],x=e[8],S=e[9],g=e[10],y=e[11],w=e[12],C=e[13],v=e[14],_=e[15],b=n*d-r*u,N=n*h-o*u,L=n*m-l*u,B=r*h-o*d,I=r*m-l*d,F=o*m-l*h,M=x*C-S*w,P=x*v-g*w,W=x*_-y*w,k=S*v-g*C,Y=S*_-y*C,re=g*_-y*v,le=b*re-N*Y+L*k+B*W-I*P+F*M;if(le===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/le;return e[0]=(d*re-h*Y+m*k)*G,e[1]=(o*Y-r*re-l*k)*G,e[2]=(C*F-v*I+_*B)*G,e[3]=(g*I-S*F-y*B)*G,e[4]=(h*W-u*re-m*P)*G,e[5]=(n*re-o*W+l*P)*G,e[6]=(v*L-w*F-_*N)*G,e[7]=(x*F-g*L+y*N)*G,e[8]=(u*Y-d*W+m*M)*G,e[9]=(r*W-n*Y-l*M)*G,e[10]=(w*I-C*L+_*b)*G,e[11]=(S*L-x*I-y*b)*G,e[12]=(d*P-u*k-h*M)*G,e[13]=(n*k-r*P+o*M)*G,e[14]=(C*N-w*B-v*b)*G,e[15]=(x*B-S*N+g*b)*G,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,d=e.y,h=e.z,m=l*u,x=l*d;return this.set(m*u+r,m*d-o*h,m*h+o*d,0,m*d+o*h,x*d+r,x*h-o*u,0,m*h-o*d,x*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,d=n._z,h=n._w,m=l+l,x=u+u,S=d+d,g=l*m,y=l*x,w=l*S,C=u*x,v=u*S,_=d*S,b=h*m,N=h*x,L=h*S,B=r.x,I=r.y,F=r.z;return o[0]=(1-(C+_))*B,o[1]=(y+L)*B,o[2]=(w-N)*B,o[3]=0,o[4]=(y-L)*I,o[5]=(1-(g+_))*I,o[6]=(v+b)*I,o[7]=0,o[8]=(w+N)*F,o[9]=(v-b)*F,o[10]=(1-(g+C))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),n.identity(),this;let u=Vs.set(o[0],o[1],o[2]).length();const d=Vs.set(o[4],o[5],o[6]).length(),h=Vs.set(o[8],o[9],o[10]).length();l<0&&(u=-u),gi.copy(this);const m=1/u,x=1/d,S=1/h;return gi.elements[0]*=m,gi.elements[1]*=m,gi.elements[2]*=m,gi.elements[4]*=x,gi.elements[5]*=x,gi.elements[6]*=x,gi.elements[8]*=S,gi.elements[9]*=S,gi.elements[10]*=S,n.setFromRotationMatrix(gi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,n,r,o,l,u,d=Di,h=!1){const m=this.elements,x=2*l/(n-e),S=2*l/(r-o),g=(n+e)/(n-e),y=(r+o)/(r-o);let w,C;if(h)w=l/(u-l),C=u*l/(u-l);else if(d===Di)w=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(d===oo)w=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=S,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,l,u,d=Di,h=!1){const m=this.elements,x=2/(n-e),S=2/(r-o),g=-(n+e)/(n-e),y=-(r+o)/(r-o);let w,C;if(h)w=1/(u-l),C=u/(u-l);else if(d===Di)w=-2/(u-l),C=-(u+l)/(u-l);else if(d===oo)w=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=S,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=w,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};ac.prototype.isMatrix4=!0;let qt=ac;const Vs=new J,gi=new qt,cx=new J(0,0,0),ux=new J(1,1,1),Cr=new J,xl=new J,qn=new J,Im=new qt,Um=new aa;class kr{constructor(e=0,n=0,r=0,o=kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],h=o[1],m=o[5],x=o[9],S=o[2],g=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-St(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,y),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Im,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Um.setFromEuler(this),this.setFromQuaternion(Um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kr.DEFAULT_ORDER="XYZ";class Yg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fx=0;const Fm=new J,Gs=new aa,Zi=new qt,Sl=new J,Xa=new J,dx=new J,hx=new aa,Om=new J(1,0,0),km=new J(0,1,0),Bm=new J(0,0,1),zm={type:"added"},px={type:"removed"},Hs={type:"childadded",child:null},nf={type:"childremoved",child:null};class An extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new J,n=new kr,r=new aa,o=new J(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new qt},normalMatrix:{value:new ht}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gs.setFromAxisAngle(e,n),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,n){return Gs.setFromAxisAngle(e,n),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Om,e)}rotateY(e){return this.rotateOnAxis(km,e)}rotateZ(e){return this.rotateOnAxis(Bm,e)}translateOnAxis(e,n){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Om,e)}translateY(e){return this.translateOnAxis(km,e)}translateZ(e){return this.translateOnAxis(Bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Sl.copy(e):Sl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Xa,Sl,this.up):Zi.lookAt(Sl,Xa,this.up),this.quaternion.setFromRotationMatrix(Zi),o&&(Zi.extractRotation(o.matrixWorld),Gs.setFromRotationMatrix(Zi),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zm),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(px),nf.child=e,this.dispatchEvent(nf),nf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zm),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,e,dx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*r-l[8]*o,l[13]+=r-l[1]*n-l[5]*r-l[9]*o,l[14]+=o-l[2]*n-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,x=h.length;m<x;m++){const S=h[m];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(l(e.animations,h))}}if(n){const d=u(e.geometries),h=u(e.materials),m=u(e.textures),x=u(e.images),S=u(e.shapes),g=u(e.skeletons),y=u(e.animations),w=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(d){const h=[];for(const m in d){const x=d[m];delete x.metadata,h.push(x)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}An.DEFAULT_UP=new J(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class no extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mx={type:"move"};class rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new no,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new no,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new no,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const C of e.hand.values()){const v=n.getJointPose(C,r),_=this._getHandJoint(m,C);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const x=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],g=x.position.distanceTo(S.position),y=.02,w=.005;m.inputState.pinching&&g>y+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=y-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(mx)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new no;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const $g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},yl={h:0,s:0,l:0};function sf(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Pt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Tt.workingColorSpace){if(e=nx(e,1),n=St(n,0,1),r=St(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=sf(u,l,e+1/3),this.g=sf(u,l,e),this.b=sf(u,l,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,n=ai){function r(l){l!==void 0&&parseFloat(l)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ai){const r=$g[e.toLowerCase()];return r!==void 0?this.setHex(r,n):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Tt.workingToColorSpace(Tn.copy(this),e),Math.round(St(Tn.r*255,0,255))*65536+Math.round(St(Tn.g*255,0,255))*256+Math.round(St(Tn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.workingToColorSpace(Tn.copy(this),n);const r=Tn.r,o=Tn.g,l=Tn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let h,m;const x=(d+u)/2;if(d===u)h=0,m=0;else{const S=u-d;switch(m=x<=.5?S/(u+d):S/(2-u-d),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=m,e.l=x,e}getRGB(e,n=Tt.workingColorSpace){return Tt.workingToColorSpace(Tn.copy(this),n),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=ai){Tt.workingToColorSpace(Tn.copy(this),e);const n=Tn.r,r=Tn.g,o=Tn.b;return e!==ai?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+n,Rr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Rr),e.getHSL(yl);const r=Zu(Rr.h,yl.h,n),o=Zu(Rr.s,yl.s,n),l=Zu(Rr.l,yl.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Pt;Pt.NAMES=$g;class gx extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kr,this.environmentIntensity=1,this.environmentRotation=new kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const _i=new J,Qi=new J,af=new J,Ji=new J,Ws=new J,js=new J,Vm=new J,of=new J,lf=new J,cf=new J,uf=new Jt,ff=new Jt,df=new Jt;class xi{constructor(e=new J,n=new J,r=new J){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),_i.subVectors(e,n),o.cross(_i);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){_i.subVectors(o,n),Qi.subVectors(r,n),af.subVectors(e,n);const u=_i.dot(_i),d=_i.dot(Qi),h=_i.dot(af),m=Qi.dot(Qi),x=Qi.dot(af),S=u*m-d*d;if(S===0)return l.set(0,0,0),null;const g=1/S,y=(m*h-d*x)*g,w=(u*x-d*h)*g;return l.set(1-y-w,w,y)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,n,r,o,l,u,d,h){return this.getBarycoord(e,n,r,o,Ji)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Ji.x),h.addScaledVector(u,Ji.y),h.addScaledVector(d,Ji.z),h)}static getInterpolatedAttribute(e,n,r,o,l,u){return uf.setScalar(0),ff.setScalar(0),df.setScalar(0),uf.fromBufferAttribute(e,n),ff.fromBufferAttribute(e,r),df.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(uf,l.x),u.addScaledVector(ff,l.y),u.addScaledVector(df,l.z),u}static isFrontFacing(e,n,r,o){return _i.subVectors(r,n),Qi.subVectors(e,n),_i.cross(Qi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),_i.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return xi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return xi.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,d;Ws.subVectors(o,r),js.subVectors(l,r),of.subVectors(e,r);const h=Ws.dot(of),m=js.dot(of);if(h<=0&&m<=0)return n.copy(r);lf.subVectors(e,o);const x=Ws.dot(lf),S=js.dot(lf);if(x>=0&&S<=x)return n.copy(o);const g=h*S-x*m;if(g<=0&&h>=0&&x<=0)return u=h/(h-x),n.copy(r).addScaledVector(Ws,u);cf.subVectors(e,l);const y=Ws.dot(cf),w=js.dot(cf);if(w>=0&&y<=w)return n.copy(l);const C=y*m-h*w;if(C<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(js,d);const v=x*w-y*S;if(v<=0&&S-x>=0&&y-w>=0)return Vm.subVectors(l,o),d=(S-x)/(S-x+(y-w)),n.copy(o).addScaledVector(Vm,d);const _=1/(v+C+g);return u=C*_,d=g*_,n.copy(r).addScaledVector(Ws,u).addScaledVector(js,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class uo{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(vi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(vi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=vi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,vi):vi.fromBufferAttribute(l,u),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ml.copy(r.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),El.subVectors(this.max,qa),Xs.subVectors(e.a,qa),qs.subVectors(e.b,qa),Ys.subVectors(e.c,qa),Pr.subVectors(qs,Xs),Nr.subVectors(Ys,qs),es.subVectors(Xs,Ys);let n=[0,-Pr.z,Pr.y,0,-Nr.z,Nr.y,0,-es.z,es.y,Pr.z,0,-Pr.x,Nr.z,0,-Nr.x,es.z,0,-es.x,-Pr.y,Pr.x,0,-Nr.y,Nr.x,0,-es.y,es.x,0];return!hf(n,Xs,qs,Ys,El)||(n=[1,0,0,0,1,0,0,0,1],!hf(n,Xs,qs,Ys,El))?!1:(Tl.crossVectors(Pr,Nr),n=[Tl.x,Tl.y,Tl.z],hf(n,Xs,qs,Ys,El))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const er=[new J,new J,new J,new J,new J,new J,new J,new J],vi=new J,Ml=new uo,Xs=new J,qs=new J,Ys=new J,Pr=new J,Nr=new J,es=new J,qa=new J,El=new J,Tl=new J,ts=new J;function hf(s,e,n,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ts.fromArray(s,l);const d=o.x*Math.abs(ts.x)+o.y*Math.abs(ts.y)+o.z*Math.abs(ts.z),h=e.dot(ts),m=n.dot(ts),x=r.dot(ts);if(Math.max(-Math.max(h,m,x),Math.min(h,m,x))>d)return!1}return!0}const sn=new J,wl=new Nt;let _x=0;class yi extends ds{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_x++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=bm,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)wl.fromBufferAttribute(this,n),wl.applyMatrix3(e),this.setXY(n,wl.x,wl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix3(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ja(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ja(n,this.array)),n}setX(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ja(n,this.array)),n}setY(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ja(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ja(n,this.array)),n}setW(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Bn(n,this.array),r=Bn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Bn(n,this.array),r=Bn(r,this.array),o=Bn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=Bn(n,this.array),r=Bn(r,this.array),o=Bn(o,this.array),l=Bn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Kg extends yi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Zg extends yi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Zn extends yi{constructor(e,n,r){super(new Float32Array(e),n,r)}}const vx=new uo,Ya=new J,pf=new J;class fo{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):vx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ya.subVectors(e,this.center);const n=Ya.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ya,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ya.copy(e.center).add(pf)),this.expandByPoint(Ya.copy(e.center).sub(pf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xx=0;const si=new qt,mf=new An,$s=new J,Yn=new uo,$a=new uo,pn=new J;class Gn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qv(e)?Zg:Kg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ht().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,n,r){return si.makeTranslation(e,n,r),this.applyMatrix4(si),this}scale(e,n,r){return si.makeScale(e,n,r),this.applyMatrix4(si),this}lookAt(e){return mf.lookAt(e),mf.updateMatrix(),this.applyMatrix4(mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Zn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];Yn.setFromBufferAttribute(l),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const d=n[l];$a.setFromBufferAttribute(d),this.morphTargetsRelative?(pn.addVectors(Yn.min,$a.min),Yn.expandByPoint(pn),pn.addVectors(Yn.max,$a.max),Yn.expandByPoint(pn)):(Yn.expandByPoint($a.min),Yn.expandByPoint($a.max))}Yn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)pn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(pn));if(n)for(let l=0,u=n.length;l<u;l++){const d=n[l],h=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)pn.fromBufferAttribute(d,m),h&&($s.fromBufferAttribute(e,m),pn.add($s)),o=Math.max(o,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let M=0;M<r.count;M++)d[M]=new J,h[M]=new J;const m=new J,x=new J,S=new J,g=new Nt,y=new Nt,w=new Nt,C=new J,v=new J;function _(M,P,W){m.fromBufferAttribute(r,M),x.fromBufferAttribute(r,P),S.fromBufferAttribute(r,W),g.fromBufferAttribute(l,M),y.fromBufferAttribute(l,P),w.fromBufferAttribute(l,W),x.sub(m),S.sub(m),y.sub(g),w.sub(g);const k=1/(y.x*w.y-w.x*y.y);isFinite(k)&&(C.copy(x).multiplyScalar(w.y).addScaledVector(S,-y.y).multiplyScalar(k),v.copy(S).multiplyScalar(y.x).addScaledVector(x,-w.x).multiplyScalar(k),d[M].add(C),d[P].add(C),d[W].add(C),h[M].add(v),h[P].add(v),h[W].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let M=0,P=b.length;M<P;++M){const W=b[M],k=W.start,Y=W.count;for(let re=k,le=k+Y;re<le;re+=3)_(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const N=new J,L=new J,B=new J,I=new J;function F(M){B.fromBufferAttribute(o,M),I.copy(B);const P=d[M];N.copy(P),N.sub(B.multiplyScalar(B.dot(P))).normalize(),L.crossVectors(I,P);const k=L.dot(h[M])<0?-1:1;u.setXYZW(M,N.x,N.y,N.z,k)}for(let M=0,P=b.length;M<P;++M){const W=b[M],k=W.start,Y=W.count;for(let re=k,le=k+Y;re<le;re+=3)F(e.getX(re+0)),F(e.getX(re+1)),F(e.getX(re+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new yi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const o=new J,l=new J,u=new J,d=new J,h=new J,m=new J,x=new J,S=new J;if(e)for(let g=0,y=e.count;g<y;g+=3){const w=e.getX(g+0),C=e.getX(g+1),v=e.getX(g+2);o.fromBufferAttribute(n,w),l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,v),x.subVectors(u,l),S.subVectors(o,l),x.cross(S),d.fromBufferAttribute(r,w),h.fromBufferAttribute(r,C),m.fromBufferAttribute(r,v),d.add(x),h.add(x),m.add(x),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let g=0,y=n.count;g<y;g+=3)o.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),x.subVectors(u,l),S.subVectors(o,l),x.cross(S),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)pn.fromBufferAttribute(e,n),pn.normalize(),e.setXYZ(n,pn.x,pn.y,pn.z)}toNonIndexed(){function e(d,h){const m=d.array,x=d.itemSize,S=d.normalized,g=new m.constructor(h.length*x);let y=0,w=0;for(let C=0,v=h.length;C<v;C++){d.isInterleavedBufferAttribute?y=h[C]*d.data.stride+d.offset:y=h[C]*x;for(let _=0;_<x;_++)g[w++]=m[y++]}return new yi(g,x,S)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gn,r=this.index.array,o=this.attributes;for(const d in o){const h=o[d],m=e(h,r);n.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let x=0,S=m.length;x<S;x++){const g=m[x],y=e(g,r);h.push(y)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],x=[];for(let S=0,g=m.length;S<g;S++){const y=m[S];x.push(y.toJSON(e.data))}x.length>0&&(o[h]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(n))}const l=e.morphAttributes;for(const m in l){const x=[],S=l[m];for(let g=0,y=S.length;g<y;g++)x.push(S[g].clone(n));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const S=u[m];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Sx=0;class hs extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=co(),this.name="",this.type="Material",this.blending=ea,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Df,this.blendDst=If,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){at(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){at(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ea&&(r.blending=this.blending),this.side!==Or&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Df&&(r.blendSrc=this.blendSrc),this.blendDst!==If&&(r.blendDst=this.blendDst),this.blendEquation!==ss&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Am&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const tr=new J,gf=new J,Al=new J,Lr=new J,_f=new J,bl=new J,vf=new J;class zd{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=tr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,n),tr.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){gf.copy(e).add(n).multiplyScalar(.5),Al.copy(n).sub(e).normalize(),Lr.copy(this.origin).sub(gf);const l=e.distanceTo(n)*.5,u=-this.direction.dot(Al),d=Lr.dot(this.direction),h=-Lr.dot(Al),m=Lr.lengthSq(),x=Math.abs(1-u*u);let S,g,y,w;if(x>0)if(S=u*h-d,g=u*d-h,w=l*x,S>=0)if(g>=-w)if(g<=w){const C=1/x;S*=C,g*=C,y=S*(S+u*g+2*d)+g*(u*S+g+2*h)+m}else g=l,S=Math.max(0,-(u*g+d)),y=-S*S+g*(g+2*h)+m;else g=-l,S=Math.max(0,-(u*g+d)),y=-S*S+g*(g+2*h)+m;else g<=-w?(S=Math.max(0,-(-u*l+d)),g=S>0?-l:Math.min(Math.max(-l,-h),l),y=-S*S+g*(g+2*h)+m):g<=w?(S=0,g=Math.min(Math.max(-l,-h),l),y=g*(g+2*h)+m):(S=Math.max(0,-(u*l+d)),g=S>0?l:Math.min(Math.max(-l,-h),l),y=-S*S+g*(g+2*h)+m);else g=u>0?-l:l,S=Math.max(0,-(u*g+d)),y=-S*S+g*(g+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(gf).addScaledVector(Al,g),y}intersectSphere(e,n){tr.subVectors(e.center,this.origin);const r=tr.dot(this.direction),o=tr.dot(tr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,d,h;const m=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),x>=0?(l=(e.min.y-g.y)*x,u=(e.max.y-g.y)*x):(l=(e.max.y-g.y)*x,u=(e.min.y-g.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(d=(e.min.z-g.z)*S,h=(e.max.z-g.z)*S):(d=(e.max.z-g.z)*S,h=(e.min.z-g.z)*S),r>h||d>o)||((d>r||r!==r)&&(r=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,n,r,o,l){_f.subVectors(n,e),bl.subVectors(r,e),vf.crossVectors(_f,bl);let u=this.direction.dot(vf),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Lr.subVectors(this.origin,e);const h=d*this.direction.dot(bl.crossVectors(Lr,bl));if(h<0)return null;const m=d*this.direction.dot(_f.cross(Lr));if(m<0||h+m>u)return null;const x=-d*Lr.dot(vf);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qg extends hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kr,this.combine=Pg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gm=new qt,ns=new zd,Cl=new fo,Hm=new J,Rl=new J,Pl=new J,Nl=new J,xf=new J,Ll=new J,Wm=new J,Dl=new J;class ki extends An{constructor(e=new Gn,n=new Qg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Ll.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const x=d[h],S=l[h];x!==0&&(xf.fromBufferAttribute(S,e),u?Ll.addScaledVector(xf,x):Ll.addScaledVector(xf.sub(n),x))}n.add(Ll)}return n}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cl.copy(r.boundingSphere),Cl.applyMatrix4(l),ns.copy(e.ray).recast(e.near),!(Cl.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Cl,Hm)===null||ns.origin.distanceToSquared(Hm)>(e.far-e.near)**2))&&(Gm.copy(l).invert(),ns.copy(e.ray).applyMatrix4(Gm),!(r.boundingBox!==null&&ns.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,ns)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,S=l.attributes.normal,g=l.groups,y=l.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,C=g.length;w<C;w++){const v=g[w],_=u[v.materialIndex],b=Math.max(v.start,y.start),N=Math.min(d.count,Math.min(v.start+v.count,y.start+y.count));for(let L=b,B=N;L<B;L+=3){const I=d.getX(L),F=d.getX(L+1),M=d.getX(L+2);o=Il(this,_,e,r,m,x,S,I,F,M),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const w=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let v=w,_=C;v<_;v+=3){const b=d.getX(v),N=d.getX(v+1),L=d.getX(v+2);o=Il(this,u,e,r,m,x,S,b,N,L),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,C=g.length;w<C;w++){const v=g[w],_=u[v.materialIndex],b=Math.max(v.start,y.start),N=Math.min(h.count,Math.min(v.start+v.count,y.start+y.count));for(let L=b,B=N;L<B;L+=3){const I=L,F=L+1,M=L+2;o=Il(this,_,e,r,m,x,S,I,F,M),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const w=Math.max(0,y.start),C=Math.min(h.count,y.start+y.count);for(let v=w,_=C;v<_;v+=3){const b=v,N=v+1,L=v+2;o=Il(this,u,e,r,m,x,S,b,N,L),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}}}function yx(s,e,n,r,o,l,u,d){let h;if(e.side===Vn?h=r.intersectTriangle(u,l,o,!0,d):h=r.intersectTriangle(o,l,u,e.side===Or,d),h===null)return null;Dl.copy(d),Dl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Dl);return m<n.near||m>n.far?null:{distance:m,point:Dl.clone(),object:s}}function Il(s,e,n,r,o,l,u,d,h,m){s.getVertexPosition(d,Rl),s.getVertexPosition(h,Pl),s.getVertexPosition(m,Nl);const x=yx(s,e,n,r,Rl,Pl,Nl,Wm);if(x){const S=new J;xi.getBarycoord(Wm,Rl,Pl,Nl,S),o&&(x.uv=xi.getInterpolatedAttribute(o,d,h,m,S,new Nt)),l&&(x.uv1=xi.getInterpolatedAttribute(l,d,h,m,S,new Nt)),u&&(x.normal=xi.getInterpolatedAttribute(u,d,h,m,S,new J),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:d,b:h,c:m,normal:new J,materialIndex:0};xi.getNormal(Rl,Pl,Nl,g.normal),x.face=g,x.barycoord=S}return x}class Mx extends Pn{constructor(e=null,n=1,r=1,o,l,u,d,h,m=vn,x=vn,S,g){super(null,u,d,h,m,x,o,l,S,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sf=new J,Ex=new J,Tx=new ht;class rs{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Sf.subVectors(r,n).cross(Ex.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(Sf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Tx.getNormalMatrix(e),o=this.coplanarPoint(Sf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new fo,wx=new Nt(.5,.5),Ul=new J;class Vd{constructor(e=new rs,n=new rs,r=new rs,o=new rs,l=new rs,u=new rs){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Di,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],x=l[4],S=l[5],g=l[6],y=l[7],w=l[8],C=l[9],v=l[10],_=l[11],b=l[12],N=l[13],L=l[14],B=l[15];if(o[0].setComponents(m-u,y-x,_-w,B-b).normalize(),o[1].setComponents(m+u,y+x,_+w,B+b).normalize(),o[2].setComponents(m+d,y+S,_+C,B+N).normalize(),o[3].setComponents(m-d,y-S,_-C,B-N).normalize(),r)o[4].setComponents(h,g,v,L).normalize(),o[5].setComponents(m-h,y-g,_-v,B-L).normalize();else if(o[4].setComponents(m-h,y-g,_-v,B-L).normalize(),n===Di)o[5].setComponents(m+h,y+g,_+v,B+L).normalize();else if(n===oo)o[5].setComponents(h,g,v,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);const n=wx.distanceTo(e.center);return is.radius=.7071067811865476+n,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Ul.x=o.normal.x>0?e.max.x:e.min.x,Ul.y=o.normal.y>0?e.max.y:e.min.y,Ul.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jg extends hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ic=new J,rc=new J,jm=new qt,Ka=new zd,Fl=new fo,yf=new J,Xm=new J;class Ax extends An{constructor(e=new Gn,n=new Jg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,l=n.count;o<l;o++)ic.fromBufferAttribute(n,o-1),rc.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=ic.distanceTo(rc);e.setAttribute("lineDistance",new Zn(r,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fl.copy(r.boundingSphere),Fl.applyMatrix4(o),Fl.radius+=l,e.ray.intersectsSphere(Fl)===!1)return;jm.copy(o).invert(),Ka.copy(e.ray).applyMatrix4(jm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=this.isLineSegments?2:1,x=r.index,g=r.attributes.position;if(x!==null){const y=Math.max(0,u.start),w=Math.min(x.count,u.start+u.count);for(let C=y,v=w-1;C<v;C+=m){const _=x.getX(C),b=x.getX(C+1),N=Ol(this,e,Ka,h,_,b,C);N&&n.push(N)}if(this.isLineLoop){const C=x.getX(w-1),v=x.getX(y),_=Ol(this,e,Ka,h,C,v,w-1);_&&n.push(_)}}else{const y=Math.max(0,u.start),w=Math.min(g.count,u.start+u.count);for(let C=y,v=w-1;C<v;C+=m){const _=Ol(this,e,Ka,h,C,C+1,C);_&&n.push(_)}if(this.isLineLoop){const C=Ol(this,e,Ka,h,w-1,y,w-1);C&&n.push(C)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Ol(s,e,n,r,o,l,u){const d=s.geometry.attributes.position;if(ic.fromBufferAttribute(d,o),rc.fromBufferAttribute(d,l),n.distanceSqToSegment(ic,rc,yf,Xm)>r)return;yf.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(yf);if(!(m<e.near||m>e.far))return{distance:m,point:Xm.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}class bx extends Ax{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class e0 extends hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qm=new qt,Ed=new zd,kl=new fo,Bl=new J;class Cx extends An{constructor(e=new Gn,n=new e0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),kl.copy(r.boundingSphere),kl.applyMatrix4(o),kl.radius+=l,e.ray.intersectsSphere(kl)===!1)return;qm.copy(o).invert(),Ed.copy(e.ray).applyMatrix4(qm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=r.index,S=r.attributes.position;if(m!==null){const g=Math.max(0,u.start),y=Math.min(m.count,u.start+u.count);for(let w=g,C=y;w<C;w++){const v=m.getX(w);Bl.fromBufferAttribute(S,v),Ym(Bl,v,h,o,e,n,this)}}else{const g=Math.max(0,u.start),y=Math.min(S.count,u.start+u.count);for(let w=g,C=y;w<C;w++)Bl.fromBufferAttribute(S,w),Ym(Bl,w,h,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Ym(s,e,n,r,o,l,u){const d=Ed.distanceSqToPoint(s);if(d<n){const h=new J;Ed.closestPointToPoint(s,h),h.applyMatrix4(r);const m=o.ray.origin.distanceTo(h);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class t0 extends Pn{constructor(e=[],n=us,r,o,l,u,d,h,m,x){super(e,n,r,o,l,u,d,h,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ra extends Pn{constructor(e,n,r=Oi,o,l,u,d=vn,h=vn,m,x=lr,S=1){if(x!==lr&&x!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:S};super(g,o,l,u,d,h,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Rx extends ra{constructor(e,n=Oi,r=us,o,l,u=vn,d=vn,h,m=lr){const x={width:e,height:e,depth:1},S=[x,x,x,x,x,x];super(e,e,n,r,o,l,u,d,h,m),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class n0 extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ho extends Gn{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],m=[],x=[],S=[];let g=0,y=0;w("z","y","x",-1,-1,r,n,e,u,l,0),w("z","y","x",1,-1,r,n,-e,u,l,1),w("x","z","y",1,1,e,r,n,o,u,2),w("x","z","y",1,-1,e,r,-n,o,u,3),w("x","y","z",1,-1,e,n,r,o,l,4),w("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Zn(m,3)),this.setAttribute("normal",new Zn(x,3)),this.setAttribute("uv",new Zn(S,2));function w(C,v,_,b,N,L,B,I,F,M,P){const W=L/F,k=B/M,Y=L/2,re=B/2,le=I/2,G=F+1,Q=M+1;let X=0,$=0;const ce=new J;for(let ue=0;ue<Q;ue++){const O=ue*k-re;for(let Z=0;Z<G;Z++){const Ue=Z*W-Y;ce[C]=Ue*b,ce[v]=O*N,ce[_]=le,m.push(ce.x,ce.y,ce.z),ce[C]=0,ce[v]=0,ce[_]=I>0?1:-1,x.push(ce.x,ce.y,ce.z),S.push(Z/F),S.push(1-ue/M),X+=1}}for(let ue=0;ue<M;ue++)for(let O=0;O<F;O++){const Z=g+O+G*ue,Ue=g+O+G*(ue+1),Ge=g+(O+1)+G*(ue+1),Fe=g+(O+1)+G*ue;h.push(Z,Ue,Fe),h.push(Ue,Ge,Fe),$+=6}d.addGroup(y,$,P),y+=$,g+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Px{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){at("Curve: .getPoint() not implemented.")}getPointAt(e,n){const r=this.getUtoTmapping(e);return this.getPoint(r,n)}getPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPoint(r/e));return n}getSpacedPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPointAt(r/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let r,o=this.getPoint(0),l=0;n.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),n.push(l),o=r;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const r=this.getLengths();let o=0;const l=r.length;let u;n?u=n:u=e*r[l-1];let d=0,h=l-1,m;for(;d<=h;)if(o=Math.floor(d+(h-d)/2),m=r[o]-u,m<0)d=o+1;else if(m>0)h=o-1;else{h=o;break}if(o=h,r[o]===u)return o/(l-1);const x=r[o],g=r[o+1]-x,y=(u-x)/g;return(o+y)/(l-1)}getTangent(e,n){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),h=n||(u.isVector2?new Nt:new J);return h.copy(d).sub(u).normalize(),h}getTangentAt(e,n){const r=this.getUtoTmapping(e);return this.getTangent(r,n)}computeFrenetFrames(e,n=!1){const r=new J,o=[],l=[],u=[],d=new J,h=new qt;for(let y=0;y<=e;y++){const w=y/e;o[y]=this.getTangentAt(w,new J)}l[0]=new J,u[0]=new J;let m=Number.MAX_VALUE;const x=Math.abs(o[0].x),S=Math.abs(o[0].y),g=Math.abs(o[0].z);x<=m&&(m=x,r.set(1,0,0)),S<=m&&(m=S,r.set(0,1,0)),g<=m&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),u[y]=u[y-1].clone(),d.crossVectors(o[y-1],o[y]),d.length()>Number.EPSILON){d.normalize();const w=Math.acos(St(o[y-1].dot(o[y]),-1,1));l[y].applyMatrix4(h.makeRotationAxis(d,w))}u[y].crossVectors(o[y],l[y])}if(n===!0){let y=Math.acos(St(l[0].dot(l[e]),-1,1));y/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(y=-y);for(let w=1;w<=e;w++)l[w].applyMatrix4(h.makeRotationAxis(o[w],y*w)),u[w].crossVectors(o[w],l[w])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Nx extends Px{constructor(e=0,n=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=h}getPoint(e,n=new Nt){const r=n,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const x=Math.cos(this.aRotation),S=Math.sin(this.aRotation),g=h-this.aX,y=m-this.aY;h=g*x-y*S+this.aX,m=g*S+y*x+this.aY}return r.set(h,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class lc extends Gn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,d=Math.floor(r),h=Math.floor(o),m=d+1,x=h+1,S=e/d,g=n/h,y=[],w=[],C=[],v=[];for(let _=0;_<x;_++){const b=_*g-u;for(let N=0;N<m;N++){const L=N*S-l;w.push(L,-b,0),C.push(0,0,1),v.push(N/d),v.push(1-_/h)}}for(let _=0;_<h;_++)for(let b=0;b<d;b++){const N=b+m*_,L=b+m*(_+1),B=b+1+m*(_+1),I=b+1+m*_;y.push(N,L,I),y.push(L,B,I)}this.setIndex(y),this.setAttribute("position",new Zn(w,3)),this.setAttribute("normal",new Zn(C,3)),this.setAttribute("uv",new Zn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gd extends Gn{constructor(e=1,n=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(u+d,Math.PI);let m=0;const x=[],S=new J,g=new J,y=[],w=[],C=[],v=[];for(let _=0;_<=r;_++){const b=[],N=_/r;let L=0;_===0&&u===0?L=.5/n:_===r&&h===Math.PI&&(L=-.5/n);for(let B=0;B<=n;B++){const I=B/n;S.x=-e*Math.cos(o+I*l)*Math.sin(u+N*d),S.y=e*Math.cos(u+N*d),S.z=e*Math.sin(o+I*l)*Math.sin(u+N*d),w.push(S.x,S.y,S.z),g.copy(S).normalize(),C.push(g.x,g.y,g.z),v.push(I+L,1-N),b.push(m++)}x.push(b)}for(let _=0;_<r;_++)for(let b=0;b<n;b++){const N=x[_][b+1],L=x[_][b],B=x[_+1][b],I=x[_+1][b+1];(_!==0||u>0)&&y.push(N,L,I),(_!==r-1||h<Math.PI)&&y.push(L,B,I)}this.setIndex(y),this.setAttribute("position",new Zn(w,3)),this.setAttribute("normal",new Zn(C,3)),this.setAttribute("uv",new Zn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function sa(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if($m(o))o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if($m(o[0])){const l=[];for(let u=0,d=o.length;u<d;u++)l[u]=o[u].clone();e[n][r]=l}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Rn(s){const e={};for(let n=0;n<s.length;n++){const r=sa(s[n]);for(const o in r)e[o]=r[o]}return e}function $m(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Lx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function i0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const Dx={clone:sa,merge:Rn};var Ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ux=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ix,this.fragmentShader=Ux,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=Lx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Fx extends Bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ox extends hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sd,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kx extends hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bx extends hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class r0 extends An{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Mf=new qt,Km=new J,Zm=new J;class zx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vd,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Km.setFromMatrixPosition(e.matrixWorld),n.position.copy(Km),Zm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Zm),n.updateMatrixWorld(),Mf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mf,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===oo||n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zl=new J,Vl=new aa,Ci=new J;let s0=class extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zl,Vl,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,Vl,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(zl,Vl,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,Vl,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Dr=new J,Qm=new Nt,Jm=new Nt;class $n extends s0{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Md*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Md*2*Math.atan(Math.tan(Ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,n){return this.getViewBounds(e,Qm,Jm),n.subVectors(Jm,Qm)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ku*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/h,n-=u.offsetY*r/m,o*=u.width/h,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Vx extends zx{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0}}class eg extends r0{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Vx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class a0 extends s0{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=x*this.view.offsetY,h=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Gx extends r0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ks=-90,Zs=1;class Hx extends An{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new $n(Ks,Zs,e,n);o.layers=this.layers,this.add(o);const l=new $n(Ks,Zs,e,n);l.layers=this.layers,this.add(l);const u=new $n(Ks,Zs,e,n);u.layers=this.layers,this.add(u);const d=new $n(Ks,Zs,e,n);d.layers=this.layers,this.add(d);const h=new $n(Ks,Zs,e,n);h.layers=this.layers,this.add(h);const m=new $n(Ks,Zs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,d,h]=n;for(const m of n)this.remove(m);if(e===Di)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===oo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,m,x]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(r,1,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(r,3,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,4,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,x),e.setRenderTarget(S,g,y),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Wx extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const $d=class $d{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const l=this.elements;return l[0]=e,l[2]=n,l[1]=r,l[3]=o,this}};$d.prototype.isMatrix2=!0;let tg=$d;function ng(s,e,n,r){const o=jx(r);switch(n){case Hg:return s*e;case jg:return s*e/o.components*o.byteLength;case Id:return s*e/o.components*o.byteLength;case fs:return s*e*2/o.components*o.byteLength;case Ud:return s*e*2/o.components*o.byteLength;case Wg:return s*e*3/o.components*o.byteLength;case Si:return s*e*4/o.components*o.byteLength;case Fd:return s*e*4/o.components*o.byteLength;case ql:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $l:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jf:case qf:return Math.max(s,16)*Math.max(e,8)/4;case Wf:case Xf:return Math.max(s,8)*Math.max(e,8)/2;case Yf:case $f:case Zf:case Qf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kf:case Ql:case Jf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case nd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case id:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case rd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case sd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ad:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case od:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ld:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case cd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ud:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case fd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case dd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case hd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case pd:case md:case gd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case _d:case vd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jl:case xd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jx(s){switch(s){case Kn:case Bg:return{byteLength:1,components:1};case so:case zg:case or:return{byteLength:2,components:1};case Ld:case Dd:return{byteLength:2,components:4};case Oi:case Nd:case Li:return{byteLength:4,components:1};case Vg:case Gg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pd}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function o0(){let s=null,e=!1,n=null,r=null;function o(l,u){n(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function Xx(s){const e=new WeakMap;function n(d,h){const m=d.array,x=d.usage,S=m.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,m,x),d.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,h,m){const x=h.array,S=h.updateRanges;if(s.bindBuffer(m,d),S.length===0)s.bufferSubData(m,0,x);else{S.sort((y,w)=>y.start-w.start);let g=0;for(let y=1;y<S.length;y++){const w=S[g],C=S[y];C.start<=w.start+w.count+1?w.count=Math.max(w.count,C.start+C.count-w.start):(++g,S[g]=C)}S.length=g+1;for(let y=0,w=S.length;y<w;y++){const C=S[y];s.bufferSubData(m,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:o,remove:l,update:u}}var qx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_S=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ES="gl_FragColor = linearToOutputTexel( gl_FragColor );",TS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,PS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,US=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,BS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$S=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,KS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ey=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ty=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ny=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ay=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ly=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,my=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,My=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ey=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,by=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ny=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ly=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Oy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,By=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ky=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:qx,alphahash_pars_fragment:Yx,alphamap_fragment:$x,alphamap_pars_fragment:Kx,alphatest_fragment:Zx,alphatest_pars_fragment:Qx,aomap_fragment:Jx,aomap_pars_fragment:eS,batching_pars_vertex:tS,batching_vertex:nS,begin_vertex:iS,beginnormal_vertex:rS,bsdfs:sS,iridescence_fragment:aS,bumpmap_pars_fragment:oS,clipping_planes_fragment:lS,clipping_planes_pars_fragment:cS,clipping_planes_pars_vertex:uS,clipping_planes_vertex:fS,color_fragment:dS,color_pars_fragment:hS,color_pars_vertex:pS,color_vertex:mS,common:gS,cube_uv_reflection_fragment:_S,defaultnormal_vertex:vS,displacementmap_pars_vertex:xS,displacementmap_vertex:SS,emissivemap_fragment:yS,emissivemap_pars_fragment:MS,colorspace_fragment:ES,colorspace_pars_fragment:TS,envmap_fragment:wS,envmap_common_pars_fragment:AS,envmap_pars_fragment:bS,envmap_pars_vertex:CS,envmap_physical_pars_fragment:BS,envmap_vertex:RS,fog_vertex:PS,fog_pars_vertex:NS,fog_fragment:LS,fog_pars_fragment:DS,gradientmap_pars_fragment:IS,lightmap_pars_fragment:US,lights_lambert_fragment:FS,lights_lambert_pars_fragment:OS,lights_pars_begin:kS,lights_toon_fragment:zS,lights_toon_pars_fragment:VS,lights_phong_fragment:GS,lights_phong_pars_fragment:HS,lights_physical_fragment:WS,lights_physical_pars_fragment:jS,lights_fragment_begin:XS,lights_fragment_maps:qS,lights_fragment_end:YS,lightprobes_pars_fragment:$S,logdepthbuf_fragment:KS,logdepthbuf_pars_fragment:ZS,logdepthbuf_pars_vertex:QS,logdepthbuf_vertex:JS,map_fragment:ey,map_pars_fragment:ty,map_particle_fragment:ny,map_particle_pars_fragment:iy,metalnessmap_fragment:ry,metalnessmap_pars_fragment:sy,morphinstance_vertex:ay,morphcolor_vertex:oy,morphnormal_vertex:ly,morphtarget_pars_vertex:cy,morphtarget_vertex:uy,normal_fragment_begin:fy,normal_fragment_maps:dy,normal_pars_fragment:hy,normal_pars_vertex:py,normal_vertex:my,normalmap_pars_fragment:gy,clearcoat_normal_fragment_begin:_y,clearcoat_normal_fragment_maps:vy,clearcoat_pars_fragment:xy,iridescence_pars_fragment:Sy,opaque_fragment:yy,packing:My,premultiplied_alpha_fragment:Ey,project_vertex:Ty,dithering_fragment:wy,dithering_pars_fragment:Ay,roughnessmap_fragment:by,roughnessmap_pars_fragment:Cy,shadowmap_pars_fragment:Ry,shadowmap_pars_vertex:Py,shadowmap_vertex:Ny,shadowmask_pars_fragment:Ly,skinbase_vertex:Dy,skinning_pars_vertex:Iy,skinning_vertex:Uy,skinnormal_vertex:Fy,specularmap_fragment:Oy,specularmap_pars_fragment:ky,tonemapping_fragment:By,tonemapping_pars_fragment:zy,transmission_fragment:Vy,transmission_pars_fragment:Gy,uv_pars_fragment:Hy,uv_pars_vertex:Wy,uv_vertex:jy,worldpos_vertex:Xy,background_vert:qy,background_frag:Yy,backgroundCube_vert:$y,backgroundCube_frag:Ky,cube_vert:Zy,cube_frag:Qy,depth_vert:Jy,depth_frag:eM,distance_vert:tM,distance_frag:nM,equirect_vert:iM,equirect_frag:rM,linedashed_vert:sM,linedashed_frag:aM,meshbasic_vert:oM,meshbasic_frag:lM,meshlambert_vert:cM,meshlambert_frag:uM,meshmatcap_vert:fM,meshmatcap_frag:dM,meshnormal_vert:hM,meshnormal_frag:pM,meshphong_vert:mM,meshphong_frag:gM,meshphysical_vert:_M,meshphysical_frag:vM,meshtoon_vert:xM,meshtoon_frag:SM,points_vert:yM,points_frag:MM,shadow_vert:EM,shadow_frag:TM,sprite_vert:wM,sprite_frag:AM},Oe={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ni={basic:{uniforms:Rn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Rn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Rn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Rn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Rn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Rn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Rn([Oe.points,Oe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Rn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Rn([Oe.common,Oe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Rn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Rn([Oe.sprite,Oe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Rn([Oe.common,Oe.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Rn([Oe.lights,Oe.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ni.physical={uniforms:Rn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Gl={r:0,b:0,g:0},bM=new qt,l0=new ht;l0.set(-1,0,0,0,1,0,0,0,1);function CM(s,e,n,r,o,l){const u=new Pt(0);let d=o===!0?0:1,h,m,x=null,S=0,g=null;function y(b){let N=b.isScene===!0?b.background:null;if(N&&N.isTexture){const L=b.backgroundBlurriness>0;N=e.get(N,L)}return N}function w(b){let N=!1;const L=y(b);L===null?v(u,d):L&&L.isColor&&(v(L,1),N=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,l):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||N)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(b,N){const L=y(N);L&&(L.isCubeTexture||L.mapping===oc)?(m===void 0&&(m=new ki(new ho(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:sa(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(B,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=L,m.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(bM.makeRotationFromEuler(N.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(l0),m.material.toneMapped=Tt.getTransfer(L.colorSpace)!==kt,(x!==L||S!==L.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,x=L,S=L.version,g=s.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new ki(new lc(2,2),new Bi({name:"BackgroundMaterial",uniforms:sa(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.toneMapped=Tt.getTransfer(L.colorSpace)!==kt,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(x!==L||S!==L.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,x=L,S=L.version,g=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function v(b,N){b.getRGB(Gl,i0(s)),n.buffers.color.setClear(Gl.r,Gl.g,Gl.b,N,l)}function _(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,N=1){u.set(b),d=N,v(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,v(u,d)},render:w,addToRenderList:C,dispose:_}}function RM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function d(k,Y,re,le,G){let Q=!1;const X=S(k,le,re,Y);l!==X&&(l=X,m(l.object)),Q=y(k,le,re,G),Q&&w(k,le,re,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,L(k,Y,re,le),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function h(){return s.createVertexArray()}function m(k){return s.bindVertexArray(k)}function x(k){return s.deleteVertexArray(k)}function S(k,Y,re,le){const G=le.wireframe===!0;let Q=r[Y.id];Q===void 0&&(Q={},r[Y.id]=Q);const X=k.isInstancedMesh===!0?k.id:0;let $=Q[X];$===void 0&&($={},Q[X]=$);let ce=$[re.id];ce===void 0&&(ce={},$[re.id]=ce);let ue=ce[G];return ue===void 0&&(ue=g(h()),ce[G]=ue),ue}function g(k){const Y=[],re=[],le=[];for(let G=0;G<n;G++)Y[G]=0,re[G]=0,le[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:re,attributeDivisors:le,object:k,attributes:{},index:null}}function y(k,Y,re,le){const G=l.attributes,Q=Y.attributes;let X=0;const $=re.getAttributes();for(const ce in $)if($[ce].location>=0){const O=G[ce];let Z=Q[ce];if(Z===void 0&&(ce==="instanceMatrix"&&k.instanceMatrix&&(Z=k.instanceMatrix),ce==="instanceColor"&&k.instanceColor&&(Z=k.instanceColor)),O===void 0||O.attribute!==Z||Z&&O.data!==Z.data)return!0;X++}return l.attributesNum!==X||l.index!==le}function w(k,Y,re,le){const G={},Q=Y.attributes;let X=0;const $=re.getAttributes();for(const ce in $)if($[ce].location>=0){let O=Q[ce];O===void 0&&(ce==="instanceMatrix"&&k.instanceMatrix&&(O=k.instanceMatrix),ce==="instanceColor"&&k.instanceColor&&(O=k.instanceColor));const Z={};Z.attribute=O,O&&O.data&&(Z.data=O.data),G[ce]=Z,X++}l.attributes=G,l.attributesNum=X,l.index=le}function C(){const k=l.newAttributes;for(let Y=0,re=k.length;Y<re;Y++)k[Y]=0}function v(k){_(k,0)}function _(k,Y){const re=l.newAttributes,le=l.enabledAttributes,G=l.attributeDivisors;re[k]=1,le[k]===0&&(s.enableVertexAttribArray(k),le[k]=1),G[k]!==Y&&(s.vertexAttribDivisor(k,Y),G[k]=Y)}function b(){const k=l.newAttributes,Y=l.enabledAttributes;for(let re=0,le=Y.length;re<le;re++)Y[re]!==k[re]&&(s.disableVertexAttribArray(re),Y[re]=0)}function N(k,Y,re,le,G,Q,X){X===!0?s.vertexAttribIPointer(k,Y,re,G,Q):s.vertexAttribPointer(k,Y,re,le,G,Q)}function L(k,Y,re,le){C();const G=le.attributes,Q=re.getAttributes(),X=Y.defaultAttributeValues;for(const $ in Q){const ce=Q[$];if(ce.location>=0){let ue=G[$];if(ue===void 0&&($==="instanceMatrix"&&k.instanceMatrix&&(ue=k.instanceMatrix),$==="instanceColor"&&k.instanceColor&&(ue=k.instanceColor)),ue!==void 0){const O=ue.normalized,Z=ue.itemSize,Ue=e.get(ue);if(Ue===void 0)continue;const Ge=Ue.buffer,Fe=Ue.type,ae=Ue.bytesPerElement,xe=Fe===s.INT||Fe===s.UNSIGNED_INT||ue.gpuType===Nd;if(ue.isInterleavedBufferAttribute){const me=ue.data,we=me.stride,Ze=ue.offset;if(me.isInstancedInterleavedBuffer){for(let tt=0;tt<ce.locationSize;tt++)_(ce.location+tt,me.meshPerAttribute);k.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let tt=0;tt<ce.locationSize;tt++)v(ce.location+tt);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let tt=0;tt<ce.locationSize;tt++)N(ce.location+tt,Z/ce.locationSize,Fe,O,we*ae,(Ze+Z/ce.locationSize*tt)*ae,xe)}else{if(ue.isInstancedBufferAttribute){for(let me=0;me<ce.locationSize;me++)_(ce.location+me,ue.meshPerAttribute);k.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<ce.locationSize;me++)v(ce.location+me);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let me=0;me<ce.locationSize;me++)N(ce.location+me,Z/ce.locationSize,Fe,O,Z*ae,Z/ce.locationSize*me*ae,xe)}}else if(X!==void 0){const O=X[$];if(O!==void 0)switch(O.length){case 2:s.vertexAttrib2fv(ce.location,O);break;case 3:s.vertexAttrib3fv(ce.location,O);break;case 4:s.vertexAttrib4fv(ce.location,O);break;default:s.vertexAttrib1fv(ce.location,O)}}}}b()}function B(){P();for(const k in r){const Y=r[k];for(const re in Y){const le=Y[re];for(const G in le){const Q=le[G];for(const X in Q)x(Q[X].object),delete Q[X];delete le[G]}}delete r[k]}}function I(k){if(r[k.id]===void 0)return;const Y=r[k.id];for(const re in Y){const le=Y[re];for(const G in le){const Q=le[G];for(const X in Q)x(Q[X].object),delete Q[X];delete le[G]}}delete r[k.id]}function F(k){for(const Y in r){const re=r[Y];for(const le in re){const G=re[le];if(G[k.id]===void 0)continue;const Q=G[k.id];for(const X in Q)x(Q[X].object),delete Q[X];delete G[k.id]}}}function M(k){for(const Y in r){const re=r[Y],le=k.isInstancedMesh===!0?k.id:0,G=re[le];if(G!==void 0){for(const Q in G){const X=G[Q];for(const $ in X)x(X[$].object),delete X[$];delete G[Q]}delete re[le],Object.keys(re).length===0&&delete r[Y]}}}function P(){W(),u=!0,l!==o&&(l=o,m(l.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:P,resetDefaultState:W,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfObject:M,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:v,disableUnusedAttributes:b}}function PM(s,e,n){let r;function o(h){r=h}function l(h,m){s.drawArrays(r,h,m),n.update(m,r,1)}function u(h,m,x){x!==0&&(s.drawArraysInstanced(r,h,m,x),n.update(m,r,x))}function d(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,x);let g=0;for(let y=0;y<x;y++)g+=m[y];n.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function NM(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==Si&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const M=F===or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Kn&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Li&&!M)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const x=h(m);x!==m&&(at("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const S=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:w,maxTextureSize:C,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:b,maxVaryings:N,maxFragmentUniforms:L,maxSamples:B,samples:I}}function LM(s){const e=this;let n=null,r=0,o=!1,l=!1;const u=new rs,d=new ht,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const y=S.length!==0||g||r!==0||o;return o=g,r=S.length,y},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,g){n=x(S,g,0)},this.setState=function(S,g,y){const w=S.clippingPlanes,C=S.clipIntersection,v=S.clipShadows,_=s.get(S);if(!o||w===null||w.length===0||l&&!v)l?x(null):m();else{const b=l?0:r,N=b*4;let L=_.clippingState||null;h.value=L,L=x(w,g,N,y);for(let B=0;B!==N;++B)L[B]=n[B];_.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=b}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(S,g,y,w){const C=S!==null?S.length:0;let v=null;if(C!==0){if(v=h.value,w!==!0||v===null){const _=y+C*4,b=g.matrixWorldInverse;d.getNormalMatrix(b),(v===null||v.length<_)&&(v=new Float32Array(_));for(let N=0,L=y;N!==C;++N,L+=4)u.copy(S[N]).applyMatrix4(b,d),u.normal.toArray(v,L),v[L+3]=u.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,v}}const Fr=4,ig=[.125,.215,.35,.446,.526,.582],as=20,DM=256,Za=new a0,rg=new Pt;let Ef=null,Tf=0,wf=0,Af=!1;const IM=new J;class sg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,l={}){const{size:u=256,position:d=IM}=l;Ef=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,d),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ef,Tf,wf),this._renderer.xr.enabled=Af,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===us||e.mapping===ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ef=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:or,format:Si,colorSpace:ec,depthBuffer:!1},o=ag(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ag(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=UM(l)),this._blurMaterial=OM(l,e,n),this._ggxMaterial=FM(l,e,n)}return o}_compileMaterial(e){const n=new ki(new Gn,e);this._renderer.compile(n,Za)}_sceneToCubeUV(e,n,r,o,l){const h=new $n(90,1,n,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,y=S.toneMapping;S.getClearColor(rg),S.toneMapping=Ui,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ki(new ho,new Qg({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,v=C.material;let _=!1;const b=e.background;b?b.isColor&&(v.color.copy(b),e.background=null,_=!0):(v.color.copy(rg),_=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(h.up.set(0,m[N],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+x[N],l.y,l.z)):L===1?(h.up.set(0,0,m[N]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+x[N],l.z)):(h.up.set(0,m[N],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+x[N]));const B=this._cubeSize;Qs(o,L*B,N>2?B:0,B,B),S.setRenderTarget(o),_&&S.render(C,h),S.render(e,h)}S.toneMapping=y,S.autoClear=g,e.background=b}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===us||e.mapping===ia;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=og());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;Qs(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,Za)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const h=u.uniforms,m=r/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),S=Math.sqrt(m*m-x*x),g=0+m*1.25,y=S*g,{_lodMax:w}=this,C=this._sizeLods[r],v=3*C*(r>w-Fr?r-w+Fr:0),_=4*(this._cubeSize-C);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=w-n,Qs(l,v,_,3*C,2*C),o.setRenderTarget(l),o.render(d,Za),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=w-r,Qs(e,v,_,3*C,2*C),o.setRenderTarget(e),o.render(d,Za)}_blur(e,n,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,n,r,o,l,u,d){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[o];S.material=m;const g=m.uniforms,y=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*as-1),C=l/w,v=isFinite(l)?1+Math.floor(x*C):as;v>as&&at(`sigmaRadians, ${l}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${as}`);const _=[];let b=0;for(let F=0;F<as;++F){const M=F/C,P=Math.exp(-M*M/2);_.push(P),F===0?b+=P:F<v&&(b+=2*P)}for(let F=0;F<_.length;F++)_[F]=_[F]/b;g.envMap.value=e.texture,g.samples.value=v,g.weights.value=_,g.latitudinal.value=u==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:N}=this;g.dTheta.value=w,g.mipInt.value=N-r;const L=this._sizeLods[o],B=3*L*(o>N-Fr?o-N+Fr:0),I=4*(this._cubeSize-L);Qs(n,B,I,3*L,2*L),h.setRenderTarget(n),h.render(S,Za)}}function UM(s){const e=[],n=[],r=[];let o=s;const l=s-Fr+1+ig.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);e.push(d);let h=1/d;u>s-Fr?h=ig[u-s+Fr-1]:u===0&&(h=0),n.push(h);const m=1/(d-2),x=-m,S=1+m,g=[x,x,S,x,S,S,x,x,S,S,x,S],y=6,w=6,C=3,v=2,_=1,b=new Float32Array(C*w*y),N=new Float32Array(v*w*y),L=new Float32Array(_*w*y);for(let I=0;I<y;I++){const F=I%3*2/3-1,M=I>2?0:-1,P=[F,M,0,F+2/3,M,0,F+2/3,M+1,0,F,M,0,F+2/3,M+1,0,F,M+1,0];b.set(P,C*w*I),N.set(g,v*w*I);const W=[I,I,I,I,I,I];L.set(W,_*w*I)}const B=new Gn;B.setAttribute("position",new yi(b,C)),B.setAttribute("uv",new yi(N,v)),B.setAttribute("faceIndex",new yi(L,_)),r.push(new ki(B,null)),o>Fr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function ag(s,e,n){const r=new Fi(s,e,n);return r.texture.mapping=oc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Qs(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function FM(s,e,n){return new Bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function OM(s,e,n){const r=new Float32Array(as),o=new J(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function og(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function lg(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class c0 extends Fi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new t0(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ho(5,5,5),l=new Bi({name:"CubemapFromEquirect",uniforms:sa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:sr});l.uniforms.tEquirect.value=n;const u=new ki(o,l),d=n.minFilter;return n.minFilter===ls&&(n.minFilter=wn),new Hx(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}function kM(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,y=!1){return g==null?null:y?u(g):l(g)}function l(g){if(g&&g.isTexture){const y=g.mapping;if(y===qu||y===Yu)if(e.has(g)){const w=e.get(g).texture;return d(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const C=new c0(w.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",m),d(C.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const y=g.mapping,w=y===qu||y===Yu,C=y===us||y===ia;if(w||C){let v=n.get(g);const _=v!==void 0?v.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new sg(s)),v=w?r.fromEquirectangular(g,v):r.fromCubemap(g,v),v.texture.pmremVersion=g.pmremVersion,n.set(g,v),v.texture;if(v!==void 0)return v.texture;{const b=g.image;return w&&b&&b.height>0||C&&b&&h(b)?(r===null&&(r=new sg(s)),v=w?r.fromEquirectangular(g):r.fromCubemap(g),v.texture.pmremVersion=g.pmremVersion,n.set(g,v),g.addEventListener("dispose",x),v.texture):null}}}return g}function d(g,y){return y===qu?g.mapping=us:y===Yu&&(g.mapping=ia),g}function h(g){let y=0;const w=6;for(let C=0;C<w;C++)g[C]!==void 0&&y++;return y===w}function m(g){const y=g.target;y.removeEventListener("dispose",m);const w=e.get(y);w!==void 0&&(e.delete(y),w.dispose())}function x(g){const y=g.target;y.removeEventListener("dispose",x);const w=n.get(y);w!==void 0&&(n.delete(y),w.dispose())}function S(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function BM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&yd("WebGLRenderer: "+r+" extension not supported."),o}}}function zM(s,e,n,r){const o={},l=new WeakMap;function u(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",u),delete o[g.id];const y=l.get(g);y&&(e.remove(y),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function d(S,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function h(S){const g=S.attributes;for(const y in g)e.update(g[y],s.ARRAY_BUFFER)}function m(S){const g=[],y=S.index,w=S.attributes.position;let C=0;if(w===void 0)return;if(y!==null){const b=y.array;C=y.version;for(let N=0,L=b.length;N<L;N+=3){const B=b[N+0],I=b[N+1],F=b[N+2];g.push(B,I,I,F,F,B)}}else{const b=w.array;C=w.version;for(let N=0,L=b.length/3-1;N<L;N+=3){const B=N+0,I=N+1,F=N+2;g.push(B,I,I,F,F,B)}}const v=new(w.count>=65535?Zg:Kg)(g,1);v.version=C;const _=l.get(S);_&&e.remove(_),l.set(S,v)}function x(S){const g=l.get(S);if(g){const y=S.index;y!==null&&g.version<y.version&&m(S)}else m(S);return l.get(S)}return{get:d,update:h,getWireframeAttribute:x}}function VM(s,e,n){let r;function o(S){r=S}let l,u;function d(S){l=S.type,u=S.bytesPerElement}function h(S,g){s.drawElements(r,g,l,S*u),n.update(g,r,1)}function m(S,g,y){y!==0&&(s.drawElementsInstanced(r,g,l,S*u,y),n.update(g,r,y))}function x(S,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,S,0,y);let C=0;for(let v=0;v<y;v++)C+=g[v];n.update(C,r,1)}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=x}function GM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:Rt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function HM(s,e,n){const r=new WeakMap,o=new Jt;function l(u,d,h){const m=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=x!==void 0?x.length:0;let g=r.get(d);if(g===void 0||g.count!==S){let W=function(){M.dispose(),r.delete(d),d.removeEventListener("dispose",W)};var y=W;g!==void 0&&g.texture.dispose();const w=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let L=0;w===!0&&(L=1),C===!0&&(L=2),v===!0&&(L=3);let B=d.attributes.position.count*L,I=1;B>e.maxTextureSize&&(I=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const F=new Float32Array(B*I*4*S),M=new qg(F,B,I,S);M.type=Li,M.needsUpdate=!0;const P=L*4;for(let k=0;k<S;k++){const Y=_[k],re=b[k],le=N[k],G=B*I*4*k;for(let Q=0;Q<Y.count;Q++){const X=Q*P;w===!0&&(o.fromBufferAttribute(Y,Q),F[G+X+0]=o.x,F[G+X+1]=o.y,F[G+X+2]=o.z,F[G+X+3]=0),C===!0&&(o.fromBufferAttribute(re,Q),F[G+X+4]=o.x,F[G+X+5]=o.y,F[G+X+6]=o.z,F[G+X+7]=0),v===!0&&(o.fromBufferAttribute(le,Q),F[G+X+8]=o.x,F[G+X+9]=o.y,F[G+X+10]=o.z,F[G+X+11]=le.itemSize===4?o.w:1)}}g={count:S,texture:M,size:new Nt(B,I)},r.set(d,g),d.addEventListener("dispose",W)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let w=0;for(let v=0;v<m.length;v++)w+=m[v];const C=d.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",C),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function WM(s,e,n,r,o){let l=new WeakMap;function u(m){const x=o.render.frame,S=m.geometry,g=e.get(m,S);if(l.get(g)!==x&&(e.update(g),l.set(g,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==x&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,x))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==x&&(y.update(),l.set(y,x))}return g}function d(){l=new WeakMap}function h(m){const x=m.target;x.removeEventListener("dispose",h),r.releaseStatesOfObject(x),n.remove(x.instanceMatrix),x.instanceColor!==null&&n.remove(x.instanceColor)}return{update:u,dispose:d}}const jM={[Ng]:"LINEAR_TONE_MAPPING",[Lg]:"REINHARD_TONE_MAPPING",[Dg]:"CINEON_TONE_MAPPING",[Ig]:"ACES_FILMIC_TONE_MAPPING",[Fg]:"AGX_TONE_MAPPING",[Og]:"NEUTRAL_TONE_MAPPING",[Ug]:"CUSTOM_TONE_MAPPING"};function XM(s,e,n,r,o){const l=new Fi(e,n,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new ra(e,n):void 0}),u=new Fi(e,n,{type:or,depthBuffer:!1,stencilBuffer:!1}),d=new Gn;d.setAttribute("position",new Zn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Zn([0,2,0,0,2,0],2));const h=new Fx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new ki(d,h),x=new a0(-1,1,1,-1,0,1);let S=null,g=null,y=!1,w,C=null,v=[],_=!1;this.setSize=function(b,N){l.setSize(b,N),u.setSize(b,N);for(let L=0;L<v.length;L++){const B=v[L];B.setSize&&B.setSize(b,N)}},this.setEffects=function(b){v=b,_=v.length>0&&v[0].isRenderPass===!0;const N=l.width,L=l.height;for(let B=0;B<v.length;B++){const I=v[B];I.setSize&&I.setSize(N,L)}},this.begin=function(b,N){if(y||b.toneMapping===Ui&&v.length===0)return!1;if(C=N,N!==null){const L=N.width,B=N.height;(l.width!==L||l.height!==B)&&this.setSize(L,B)}return _===!1&&b.setRenderTarget(l),w=b.toneMapping,b.toneMapping=Ui,!0},this.hasRenderPass=function(){return _},this.end=function(b,N){b.toneMapping=w,y=!0;let L=l,B=u;for(let I=0;I<v.length;I++){const F=v[I];if(F.enabled!==!1&&(F.render(b,B,L,N),F.needsSwap!==!1)){const M=L;L=B,B=M}}if(S!==b.outputColorSpace||g!==b.toneMapping){S=b.outputColorSpace,g=b.toneMapping,h.defines={},Tt.getTransfer(S)===kt&&(h.defines.SRGB_TRANSFER="");const I=jM[g];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,b.setRenderTarget(C),b.render(m,x),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),d.dispose(),h.dispose()}}const u0=new Pn,Td=new ra(1,1),f0=new qg,d0=new lx,h0=new t0,cg=[],ug=[],fg=new Float32Array(16),dg=new Float32Array(9),hg=new Float32Array(4);function oa(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=cg[o];if(l===void 0&&(l=new Float32Array(o),cg[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(l,d)}return l}function cn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function un(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function uc(s,e){let n=ug[e];n===void 0&&(n=new Int32Array(e),ug[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function qM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function YM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;s.uniform2fv(this.addr,e),un(n,e)}}function $M(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(cn(n,e))return;s.uniform3fv(this.addr,e),un(n,e)}}function KM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;s.uniform4fv(this.addr,e),un(n,e)}}function ZM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(cn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),un(n,e)}else{if(cn(n,r))return;hg.set(r),s.uniformMatrix2fv(this.addr,!1,hg),un(n,r)}}function QM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(cn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),un(n,e)}else{if(cn(n,r))return;dg.set(r),s.uniformMatrix3fv(this.addr,!1,dg),un(n,r)}}function JM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(cn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),un(n,e)}else{if(cn(n,r))return;fg.set(r),s.uniformMatrix4fv(this.addr,!1,fg),un(n,r)}}function eE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function tE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;s.uniform2iv(this.addr,e),un(n,e)}}function nE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;s.uniform3iv(this.addr,e),un(n,e)}}function iE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;s.uniform4iv(this.addr,e),un(n,e)}}function rE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function sE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;s.uniform2uiv(this.addr,e),un(n,e)}}function aE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;s.uniform3uiv(this.addr,e),un(n,e)}}function oE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;s.uniform4uiv(this.addr,e),un(n,e)}}function lE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Td.compareFunction=n.isReversedDepthBuffer()?kd:Od,l=Td):l=u0,n.setTexture2D(e||l,o)}function cE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||d0,o)}function uE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||h0,o)}function fE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||f0,o)}function dE(s){switch(s){case 5126:return qM;case 35664:return YM;case 35665:return $M;case 35666:return KM;case 35674:return ZM;case 35675:return QM;case 35676:return JM;case 5124:case 35670:return eE;case 35667:case 35671:return tE;case 35668:case 35672:return nE;case 35669:case 35673:return iE;case 5125:return rE;case 36294:return sE;case 36295:return aE;case 36296:return oE;case 35678:case 36198:case 36298:case 36306:case 35682:return lE;case 35679:case 36299:case 36307:return cE;case 35680:case 36300:case 36308:case 36293:return uE;case 36289:case 36303:case 36311:case 36292:return fE}}function hE(s,e){s.uniform1fv(this.addr,e)}function pE(s,e){const n=oa(e,this.size,2);s.uniform2fv(this.addr,n)}function mE(s,e){const n=oa(e,this.size,3);s.uniform3fv(this.addr,n)}function gE(s,e){const n=oa(e,this.size,4);s.uniform4fv(this.addr,n)}function _E(s,e){const n=oa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function vE(s,e){const n=oa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function xE(s,e){const n=oa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function SE(s,e){s.uniform1iv(this.addr,e)}function yE(s,e){s.uniform2iv(this.addr,e)}function ME(s,e){s.uniform3iv(this.addr,e)}function EE(s,e){s.uniform4iv(this.addr,e)}function TE(s,e){s.uniform1uiv(this.addr,e)}function wE(s,e){s.uniform2uiv(this.addr,e)}function AE(s,e){s.uniform3uiv(this.addr,e)}function bE(s,e){s.uniform4uiv(this.addr,e)}function CE(s,e,n){const r=this.cache,o=e.length,l=uc(n,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Td:u=u0;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||u,l[d])}function RE(s,e,n){const r=this.cache,o=e.length,l=uc(n,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||d0,l[u])}function PE(s,e,n){const r=this.cache,o=e.length,l=uc(n,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||h0,l[u])}function NE(s,e,n){const r=this.cache,o=e.length,l=uc(n,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||f0,l[u])}function LE(s){switch(s){case 5126:return hE;case 35664:return pE;case 35665:return mE;case 35666:return gE;case 35674:return _E;case 35675:return vE;case 35676:return xE;case 5124:case 35670:return SE;case 35667:case 35671:return yE;case 35668:case 35672:return ME;case 35669:case 35673:return EE;case 5125:return TE;case 36294:return wE;case 36295:return AE;case 36296:return bE;case 35678:case 36198:case 36298:case 36306:case 35682:return CE;case 35679:case 36299:case 36307:return RE;case 35680:case 36300:case 36308:case 36293:return PE;case 36289:case 36303:case 36311:case 36292:return NE}}class DE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=dE(n.type)}}class IE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=LE(n.type)}}class UE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,n[d.id],r)}}}const bf=/(\w+)(\])?(\[|\.)?/g;function pg(s,e){s.seq.push(e),s.map[e.id]=e}function FE(s,e,n){const r=s.name,o=r.length;for(bf.lastIndex=0;;){const l=bf.exec(r),u=bf.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&u+2===o){pg(n,m===void 0?new DE(d,s,e):new IE(d,s,e));break}else{let S=n.map[d];S===void 0&&(S=new UE(d),pg(n,S)),n=S}}}class Zl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(n,u),h=e.getUniformLocation(n,d.name);FE(d,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const d=n[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function mg(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const OE=37297;let kE=0;function BE(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const gg=new ht;function zE(s){Tt._getMatrix(gg,Tt.workingColorSpace,s);const e=`mat3( ${gg.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(s)){case tc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function _g(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+BE(s.getShaderSource(e),d)}else return l}function VE(s,e){const n=zE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const GE={[Ng]:"Linear",[Lg]:"Reinhard",[Dg]:"Cineon",[Ig]:"ACESFilmic",[Fg]:"AgX",[Og]:"Neutral",[Ug]:"Custom"};function HE(s,e){const n=GE[e];return n===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Hl=new J;function WE(){Tt.getLuminanceCoefficients(Hl);const s=Hl.x.toFixed(4),e=Hl.y.toFixed(4),n=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function XE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function qE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function io(s){return s!==""}function vg(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YE=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(s){return s.replace(YE,KE)}const $E=new Map;function KE(s,e){let n=gt[e];if(n===void 0){const r=$E.get(e);if(r!==void 0)n=gt[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return wd(n)}const ZE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sg(s){return s.replace(ZE,QE)}function QE(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function yg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const JE={[Xl]:"SHADOWMAP_TYPE_PCF",[to]:"SHADOWMAP_TYPE_VSM"};function e1(s){return JE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const t1={[us]:"ENVMAP_TYPE_CUBE",[ia]:"ENVMAP_TYPE_CUBE",[oc]:"ENVMAP_TYPE_CUBE_UV"};function n1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":t1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const i1={[ia]:"ENVMAP_MODE_REFRACTION"};function r1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":i1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const s1={[Pg]:"ENVMAP_BLENDING_MULTIPLY",[Vv]:"ENVMAP_BLENDING_MIX",[Gv]:"ENVMAP_BLENDING_ADD"};function a1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":s1[s.combine]||"ENVMAP_BLENDING_NONE"}function o1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function l1(s,e,n,r){const o=s.getContext(),l=n.defines;let u=n.vertexShader,d=n.fragmentShader;const h=e1(n),m=n1(n),x=r1(n),S=a1(n),g=o1(n),y=jE(n),w=XE(l),C=o.createProgram();let v,_,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(io).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(io).join(`
`),_.length>0&&(_+=`
`)):(v=[yg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),_=[yg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+x:"",n.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ui?"#define TONE_MAPPING":"",n.toneMapping!==Ui?gt.tonemapping_pars_fragment:"",n.toneMapping!==Ui?HE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,VE("linearToOutputTexel",n.outputColorSpace),WE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(io).join(`
`)),u=wd(u),u=vg(u,n),u=xg(u,n),d=wd(d),d=vg(d,n),d=xg(d,n),u=Sg(u),d=Sg(d),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",n.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=b+v+u,L=b+_+d,B=mg(o,o.VERTEX_SHADER,N),I=mg(o,o.FRAGMENT_SHADER,L);o.attachShader(C,B),o.attachShader(C,I),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function F(k){if(s.debug.checkShaderErrors){const Y=o.getProgramInfoLog(C)||"",re=o.getShaderInfoLog(B)||"",le=o.getShaderInfoLog(I)||"",G=Y.trim(),Q=re.trim(),X=le.trim();let $=!0,ce=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,B,I);else{const ue=_g(o,B,"vertex"),O=_g(o,I,"fragment");Rt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+G+`
`+ue+`
`+O)}else G!==""?at("WebGLProgram: Program Info Log:",G):(Q===""||X==="")&&(ce=!1);ce&&(k.diagnostics={runnable:$,programLog:G,vertexShader:{log:Q,prefix:v},fragmentShader:{log:X,prefix:_}})}o.deleteShader(B),o.deleteShader(I),M=new Zl(o,C),P=qE(o,C)}let M;this.getUniforms=function(){return M===void 0&&F(this),M};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(C,OE)),W},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kE++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=I,this}let c1=0;class u1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new f1(e),n.set(e,r)),r}}class f1{constructor(e){this.id=c1++,this.code=e,this.usedTimes=0}}function d1(s){return s===fs||s===Ql||s===Jl}function h1(s,e,n,r,o,l){const u=new Yg,d=new u1,h=new Set,m=[],x=new Map,S=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(M){return h.add(M),M===0?"uv":`uv${M}`}function C(M,P,W,k,Y,re){const le=k.fog,G=Y.geometry,Q=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,X=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,$=e.get(M.envMap||Q,X),ce=$&&$.mapping===oc?$.image.height:null,ue=y[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&at("WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const O=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Z=O!==void 0?O.length:0;let Ue=0;G.morphAttributes.position!==void 0&&(Ue=1),G.morphAttributes.normal!==void 0&&(Ue=2),G.morphAttributes.color!==void 0&&(Ue=3);let Ge,Fe,ae,xe;if(ue){const Ie=Ni[ue];Ge=Ie.vertexShader,Fe=Ie.fragmentShader}else Ge=M.vertexShader,Fe=M.fragmentShader,d.update(M),ae=d.getVertexShaderID(M),xe=d.getFragmentShaderID(M);const me=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ze=Y.isInstancedMesh===!0,tt=Y.isBatchedMesh===!0,Ut=!!M.map,ft=!!M.matcap,wt=!!$,rt=!!M.aoMap,$e=!!M.lightMap,Mt=!!M.bumpMap,Et=!!M.normalMap,Yt=!!M.displacementMap,H=!!M.emissiveMap,yt=!!M.metalnessMap,dt=!!M.roughnessMap,Lt=M.anisotropy>0,Le=M.clearcoat>0,Bt=M.dispersion>0,R=M.iridescence>0,E=M.sheen>0,K=M.transmission>0,pe=Lt&&!!M.anisotropyMap,ge=Le&&!!M.clearcoatMap,Me=Le&&!!M.clearcoatNormalMap,Pe=Le&&!!M.clearcoatRoughnessMap,fe=R&&!!M.iridescenceMap,de=R&&!!M.iridescenceThicknessMap,De=E&&!!M.sheenColorMap,Be=E&&!!M.sheenRoughnessMap,be=!!M.specularMap,Ee=!!M.specularColorMap,st=!!M.specularIntensityMap,ot=K&&!!M.transmissionMap,mt=K&&!!M.thicknessMap,V=!!M.gradientMap,Te=!!M.alphaMap,he=M.alphaTest>0,ke=!!M.alphaHash,Ce=!!M.extensions;let _e=Ui;M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(_e=s.toneMapping);const je={shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:Ge,fragmentShader:Fe,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:tt,batchingColor:tt&&Y._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&Y.instanceColor!==null,instancingMorph:Ze&&Y.morphTexture!==null,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ut,matcap:ft,envMap:wt,envMapMode:wt&&$.mapping,envMapCubeUVHeight:ce,aoMap:rt,lightMap:$e,bumpMap:Mt,normalMap:Et,displacementMap:Yt,emissiveMap:H,normalMapObjectSpace:Et&&M.normalMapType===jv,normalMapTangentSpace:Et&&M.normalMapType===Sd,packedNormalMap:Et&&M.normalMapType===Sd&&d1(M.normalMap.format),metalnessMap:yt,roughnessMap:dt,anisotropy:Lt,anisotropyMap:pe,clearcoat:Le,clearcoatMap:ge,clearcoatNormalMap:Me,clearcoatRoughnessMap:Pe,dispersion:Bt,iridescence:R,iridescenceMap:fe,iridescenceThicknessMap:de,sheen:E,sheenColorMap:De,sheenRoughnessMap:Be,specularMap:be,specularColorMap:Ee,specularIntensityMap:st,transmission:K,transmissionMap:ot,thicknessMap:mt,gradientMap:V,opaque:M.transparent===!1&&M.blending===ea&&M.alphaToCoverage===!1,alphaMap:Te,alphaTest:he,alphaHash:ke,combine:M.combine,mapUv:Ut&&w(M.map.channel),aoMapUv:rt&&w(M.aoMap.channel),lightMapUv:$e&&w(M.lightMap.channel),bumpMapUv:Mt&&w(M.bumpMap.channel),normalMapUv:Et&&w(M.normalMap.channel),displacementMapUv:Yt&&w(M.displacementMap.channel),emissiveMapUv:H&&w(M.emissiveMap.channel),metalnessMapUv:yt&&w(M.metalnessMap.channel),roughnessMapUv:dt&&w(M.roughnessMap.channel),anisotropyMapUv:pe&&w(M.anisotropyMap.channel),clearcoatMapUv:ge&&w(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&w(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&w(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&w(M.iridescenceMap.channel),iridescenceThicknessMapUv:de&&w(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&w(M.sheenColorMap.channel),sheenRoughnessMapUv:Be&&w(M.sheenRoughnessMap.channel),specularMapUv:be&&w(M.specularMap.channel),specularColorMapUv:Ee&&w(M.specularColorMap.channel),specularIntensityMapUv:st&&w(M.specularIntensityMap.channel),transmissionMapUv:ot&&w(M.transmissionMap.channel),thicknessMapUv:mt&&w(M.thicknessMap.channel),alphaMapUv:Te&&w(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Et||Lt),vertexNormals:!!G.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!G.attributes.uv&&(Ut||Te),fog:!!le,useFog:M.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||G.attributes.normal===void 0&&Et===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:we,skinning:Y.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Ue,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:re.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:Ut&&M.map.isVideoTexture===!0&&Tt.getTransfer(M.map.colorSpace)===kt,decodeVideoTextureEmissive:H&&M.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(M.emissiveMap.colorSpace)===kt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ir,flipSided:M.side===Vn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ce&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&M.extensions.multiDraw===!0||tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return je.vertexUv1s=h.has(1),je.vertexUv2s=h.has(2),je.vertexUv3s=h.has(3),h.clear(),je}function v(M){const P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(const W in M.defines)P.push(W),P.push(M.defines[W]);return M.isRawShaderMaterial===!1&&(_(P,M),b(P,M),P.push(s.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function _(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapCubeUVHeight),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.morphAttributeCount),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function b(M,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),M.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),M.push(u.mask)}function N(M){const P=y[M.type];let W;if(P){const k=Ni[P];W=Dx.clone(k.uniforms)}else W=M.uniforms;return W}function L(M,P){let W=x.get(P);return W!==void 0?++W.usedTimes:(W=new l1(s,P,M,o),m.push(W),x.set(P,W)),W}function B(M){if(--M.usedTimes===0){const P=m.indexOf(M);m[P]=m[m.length-1],m.pop(),x.delete(M.cacheKey),M.destroy()}}function I(M){d.remove(M)}function F(){d.dispose()}return{getParameters:C,getProgramCacheKey:v,getUniforms:N,acquireProgram:L,releaseProgram:B,releaseShaderCache:I,programs:m,dispose:F}}function p1(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,h){s.get(u)[d]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function m1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Mg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Eg(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,w,C,v,_){let b=s[e];return b===void 0?(b={id:g.id,object:g,geometry:y,material:w,materialVariant:u(g),groupOrder:C,renderOrder:g.renderOrder,z:v,group:_},s[e]=b):(b.id=g.id,b.object=g,b.geometry=y,b.material=w,b.materialVariant=u(g),b.groupOrder=C,b.renderOrder=g.renderOrder,b.z=v,b.group=_),e++,b}function h(g,y,w,C,v,_){const b=d(g,y,w,C,v,_);w.transmission>0?r.push(b):w.transparent===!0?o.push(b):n.push(b)}function m(g,y,w,C,v,_){const b=d(g,y,w,C,v,_);w.transmission>0?r.unshift(b):w.transparent===!0?o.unshift(b):n.unshift(b)}function x(g,y){n.length>1&&n.sort(g||m1),r.length>1&&r.sort(y||Mg),o.length>1&&o.sort(y||Mg)}function S(){for(let g=e,y=s.length;g<y;g++){const w=s[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:h,unshift:m,finish:S,sort:x}}function g1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Eg,s.set(r,[u])):o>=l.length?(u=new Eg,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function _1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new Pt};break;case"SpotLight":n={position:new J,direction:new J,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":n={color:new Pt,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=n,n}}}function v1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let x1=0;function S1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function y1(s){const e=new _1,n=v1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new J);const o=new J,l=new qt,u=new qt;function d(m){let x=0,S=0,g=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let y=0,w=0,C=0,v=0,_=0,b=0,N=0,L=0,B=0,I=0,F=0;m.sort(S1);for(let P=0,W=m.length;P<W;P++){const k=m[P],Y=k.color,re=k.intensity,le=k.distance;let G=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===fs?G=k.shadow.map.texture:G=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)x+=Y.r*re,S+=Y.g*re,g+=Y.b*re;else if(k.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(k.sh.coefficients[Q],re);F++}else if(k.isDirectionalLight){const Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const X=k.shadow,$=n.get(k);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,r.directionalShadow[y]=$,r.directionalShadowMap[y]=G,r.directionalShadowMatrix[y]=k.shadow.matrix,b++}r.directional[y]=Q,y++}else if(k.isSpotLight){const Q=e.get(k);Q.position.setFromMatrixPosition(k.matrixWorld),Q.color.copy(Y).multiplyScalar(re),Q.distance=le,Q.coneCos=Math.cos(k.angle),Q.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Q.decay=k.decay,r.spot[C]=Q;const X=k.shadow;if(k.map&&(r.spotLightMap[B]=k.map,B++,X.updateMatrices(k),k.castShadow&&I++),r.spotLightMatrix[C]=X.matrix,k.castShadow){const $=n.get(k);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,r.spotShadow[C]=$,r.spotShadowMap[C]=G,L++}C++}else if(k.isRectAreaLight){const Q=e.get(k);Q.color.copy(Y).multiplyScalar(re),Q.halfWidth.set(k.width*.5,0,0),Q.halfHeight.set(0,k.height*.5,0),r.rectArea[v]=Q,v++}else if(k.isPointLight){const Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity),Q.distance=k.distance,Q.decay=k.decay,k.castShadow){const X=k.shadow,$=n.get(k);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,$.shadowCameraNear=X.camera.near,$.shadowCameraFar=X.camera.far,r.pointShadow[w]=$,r.pointShadowMap[w]=G,r.pointShadowMatrix[w]=k.shadow.matrix,N++}r.point[w]=Q,w++}else if(k.isHemisphereLight){const Q=e.get(k);Q.skyColor.copy(k.color).multiplyScalar(re),Q.groundColor.copy(k.groundColor).multiplyScalar(re),r.hemi[_]=Q,_++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=S,r.ambient[2]=g;const M=r.hash;(M.directionalLength!==y||M.pointLength!==w||M.spotLength!==C||M.rectAreaLength!==v||M.hemiLength!==_||M.numDirectionalShadows!==b||M.numPointShadows!==N||M.numSpotShadows!==L||M.numSpotMaps!==B||M.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=v,r.point.length=w,r.hemi.length=_,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=L+B-I,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=F,M.directionalLength=y,M.pointLength=w,M.spotLength=C,M.rectAreaLength=v,M.hemiLength=_,M.numDirectionalShadows=b,M.numPointShadows=N,M.numSpotShadows=L,M.numSpotMaps=B,M.numLightProbes=F,r.version=x1++)}function h(m,x){let S=0,g=0,y=0,w=0,C=0;const v=x.matrixWorldInverse;for(let _=0,b=m.length;_<b;_++){const N=m[_];if(N.isDirectionalLight){const L=r.directional[S];L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(v),S++}else if(N.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(v),L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(v),y++}else if(N.isRectAreaLight){const L=r.rectArea[w];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(v),u.identity(),l.copy(N.matrixWorld),l.premultiply(v),u.extractRotation(l),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),w++}else if(N.isPointLight){const L=r.point[g];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(v),g++}else if(N.isHemisphereLight){const L=r.hemi[C];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(v),C++}}}return{setup:d,setupView:h,state:r}}function Tg(s){const e=new y1(s),n=[],r=[],o=[];function l(g){S.camera=g,n.length=0,r.length=0,o.length=0}function u(g){n.push(g)}function d(g){r.push(g)}function h(g){o.push(g)}function m(){e.setup(n)}function x(g){e.setupView(n,g)}const S={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:m,setupLightsView:x,pushLight:u,pushShadow:d,pushLightProbeGrid:h}}function M1(s){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new Tg(s),e.set(o,[d])):l>=u.length?(d=new Tg(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const E1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,w1=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],A1=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],wg=new qt,Qa=new J,Cf=new J;function b1(s,e,n){let r=new Vd;const o=new Nt,l=new Nt,u=new Jt,d=new kx,h=new Bx,m={},x=n.maxTextureSize,S={[Or]:Vn,[Vn]:Or,[ir]:ir},g=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:E1,fragmentShader:T1}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const w=new Gn;w.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ki(w,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let _=this.type;this.render=function(I,F,M){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;this.type===Mv&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xl);const P=s.getRenderTarget(),W=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(sr),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const re=_!==this.type;re&&F.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(G=>G.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,G=I.length;le<G;le++){const Q=I[le],X=Q.shadow;if(X===void 0){at("WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const $=X.getFrameExtents();o.multiply($),l.copy(X.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/$.x),o.x=l.x*$.x,X.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/$.y),o.y=l.y*$.y,X.mapSize.y=l.y));const ce=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=ce,X.map===null||re===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===to){if(Q.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Fi(o.x,o.y,{format:fs,type:or,minFilter:wn,magFilter:wn,generateMipmaps:!1}),X.map.texture.name=Q.name+".shadowMap",X.map.depthTexture=new ra(o.x,o.y,Li),X.map.depthTexture.name=Q.name+".shadowMapDepth",X.map.depthTexture.format=lr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=vn,X.map.depthTexture.magFilter=vn}else Q.isPointLight?(X.map=new c0(o.x),X.map.depthTexture=new Rx(o.x,Oi)):(X.map=new Fi(o.x,o.y),X.map.depthTexture=new ra(o.x,o.y,Oi)),X.map.depthTexture.name=Q.name+".shadowMap",X.map.depthTexture.format=lr,this.type===Xl?(X.map.depthTexture.compareFunction=ce?kd:Od,X.map.depthTexture.minFilter=wn,X.map.depthTexture.magFilter=wn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=vn,X.map.depthTexture.magFilter=vn);X.camera.updateProjectionMatrix()}const ue=X.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<ue;O++){if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,O),s.clear();else{O===0&&(s.setRenderTarget(X.map),s.clear());const Z=X.getViewport(O);u.set(l.x*Z.x,l.y*Z.y,l.x*Z.z,l.y*Z.w),Y.viewport(u)}if(Q.isPointLight){const Z=X.camera,Ue=X.matrix,Ge=Q.distance||Z.far;Ge!==Z.far&&(Z.far=Ge,Z.updateProjectionMatrix()),Qa.setFromMatrixPosition(Q.matrixWorld),Z.position.copy(Qa),Cf.copy(Z.position),Cf.add(w1[O]),Z.up.copy(A1[O]),Z.lookAt(Cf),Z.updateMatrixWorld(),Ue.makeTranslation(-Qa.x,-Qa.y,-Qa.z),wg.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),X._frustum.setFromProjectionMatrix(wg,Z.coordinateSystem,Z.reversedDepth)}else X.updateMatrices(Q);r=X.getFrustum(),L(F,M,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===to&&b(X,M),X.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget(P,W,k)};function b(I,F){const M=e.update(C);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Fi(o.x,o.y,{format:fs,type:or})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(F,null,M,g,C,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(F,null,M,y,C,null)}function N(I,F,M,P){let W=null;const k=M.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)W=k;else if(W=M.isPointLight===!0?h:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Y=W.uuid,re=F.uuid;let le=m[Y];le===void 0&&(le={},m[Y]=le);let G=le[re];G===void 0&&(G=W.clone(),le[re]=G,F.addEventListener("dispose",B)),W=G}if(W.visible=F.visible,W.wireframe=F.wireframe,P===to?W.side=F.shadowSide!==null?F.shadowSide:F.side:W.side=F.shadowSide!==null?F.shadowSide:S[F.side],W.alphaMap=F.alphaMap,W.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,W.map=F.map,W.clipShadows=F.clipShadows,W.clippingPlanes=F.clippingPlanes,W.clipIntersection=F.clipIntersection,W.displacementMap=F.displacementMap,W.displacementScale=F.displacementScale,W.displacementBias=F.displacementBias,W.wireframeLinewidth=F.wireframeLinewidth,W.linewidth=F.linewidth,M.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const Y=s.properties.get(W);Y.light=M}return W}function L(I,F,M,P,W){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&W===to)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,I.matrixWorld);const re=e.update(I),le=I.material;if(Array.isArray(le)){const G=re.groups;for(let Q=0,X=G.length;Q<X;Q++){const $=G[Q],ce=le[$.materialIndex];if(ce&&ce.visible){const ue=N(I,ce,P,W);I.onBeforeShadow(s,I,F,M,re,ue,$),s.renderBufferDirect(M,null,re,ue,I,$),I.onAfterShadow(s,I,F,M,re,ue,$)}}}else if(le.visible){const G=N(I,le,P,W);I.onBeforeShadow(s,I,F,M,re,G,null),s.renderBufferDirect(M,null,re,G,I,null),I.onAfterShadow(s,I,F,M,re,G,null)}}const Y=I.children;for(let re=0,le=Y.length;re<le;re++)L(Y[re],F,M,P,W)}function B(I){I.target.removeEventListener("dispose",B);for(const M in m){const P=m[M],W=I.target.uuid;W in P&&(P[W].dispose(),delete P[W])}}}function C1(s,e){function n(){let V=!1;const Te=new Jt;let he=null;const ke=new Jt(0,0,0,0);return{setMask:function(Ce){he!==Ce&&!V&&(s.colorMask(Ce,Ce,Ce,Ce),he=Ce)},setLocked:function(Ce){V=Ce},setClear:function(Ce,_e,je,Ie,Qe){Qe===!0&&(Ce*=Ie,_e*=Ie,je*=Ie),Te.set(Ce,_e,je,Ie),ke.equals(Te)===!1&&(s.clearColor(Ce,_e,je,Ie),ke.copy(Te))},reset:function(){V=!1,he=null,ke.set(-1,0,0,0)}}}function r(){let V=!1,Te=!1,he=null,ke=null,Ce=null;return{setReversed:function(_e){if(Te!==_e){const je=e.get("EXT_clip_control");_e?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Te=_e;const Ie=Ce;Ce=null,this.setClear(Ie)}},getReversed:function(){return Te},setTest:function(_e){_e?me(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(_e){he!==_e&&!V&&(s.depthMask(_e),he=_e)},setFunc:function(_e){if(Te&&(_e=tx[_e]),ke!==_e){switch(_e){case Uf:s.depthFunc(s.NEVER);break;case Ff:s.depthFunc(s.ALWAYS);break;case Of:s.depthFunc(s.LESS);break;case na:s.depthFunc(s.LEQUAL);break;case kf:s.depthFunc(s.EQUAL);break;case Bf:s.depthFunc(s.GEQUAL);break;case zf:s.depthFunc(s.GREATER);break;case Vf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ke=_e}},setLocked:function(_e){V=_e},setClear:function(_e){Ce!==_e&&(Ce=_e,Te&&(_e=1-_e),s.clearDepth(_e))},reset:function(){V=!1,he=null,ke=null,Ce=null,Te=!1}}}function o(){let V=!1,Te=null,he=null,ke=null,Ce=null,_e=null,je=null,Ie=null,Qe=null;return{setTest:function(pt){V||(pt?me(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(pt){Te!==pt&&!V&&(s.stencilMask(pt),Te=pt)},setFunc:function(pt,en,Qn){(he!==pt||ke!==en||Ce!==Qn)&&(s.stencilFunc(pt,en,Qn),he=pt,ke=en,Ce=Qn)},setOp:function(pt,en,Qn){(_e!==pt||je!==en||Ie!==Qn)&&(s.stencilOp(pt,en,Qn),_e=pt,je=en,Ie=Qn)},setLocked:function(pt){V=pt},setClear:function(pt){Qe!==pt&&(s.clearStencil(pt),Qe=pt)},reset:function(){V=!1,Te=null,he=null,ke=null,Ce=null,_e=null,je=null,Ie=null,Qe=null}}}const l=new n,u=new r,d=new o,h=new WeakMap,m=new WeakMap;let x={},S={},g={},y=new WeakMap,w=[],C=null,v=!1,_=null,b=null,N=null,L=null,B=null,I=null,F=null,M=new Pt(0,0,0),P=0,W=!1,k=null,Y=null,re=null,le=null,G=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const ce=s.getParameter(s.VERSION);ce.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ce)[1]),X=$>=1):ce.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),X=$>=2);let ue=null,O={};const Z=s.getParameter(s.SCISSOR_BOX),Ue=s.getParameter(s.VIEWPORT),Ge=new Jt().fromArray(Z),Fe=new Jt().fromArray(Ue);function ae(V,Te,he,ke){const Ce=new Uint8Array(4),_e=s.createTexture();s.bindTexture(V,_e),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<he;je++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,ke,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(Te+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return _e}const xe={};xe[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),me(s.DEPTH_TEST),u.setFunc(na),Mt(!1),Et(Mm),me(s.CULL_FACE),rt(sr);function me(V){x[V]!==!0&&(s.enable(V),x[V]=!0)}function we(V){x[V]!==!1&&(s.disable(V),x[V]=!1)}function Ze(V,Te){return g[V]!==Te?(s.bindFramebuffer(V,Te),g[V]=Te,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Te),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function tt(V,Te){let he=w,ke=!1;if(V){he=y.get(Te),he===void 0&&(he=[],y.set(Te,he));const Ce=V.textures;if(he.length!==Ce.length||he[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,je=Ce.length;_e<je;_e++)he[_e]=s.COLOR_ATTACHMENT0+_e;he.length=Ce.length,ke=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,ke=!0);ke&&s.drawBuffers(he)}function Ut(V){return C!==V?(s.useProgram(V),C=V,!0):!1}const ft={[ss]:s.FUNC_ADD,[Tv]:s.FUNC_SUBTRACT,[wv]:s.FUNC_REVERSE_SUBTRACT};ft[Av]=s.MIN,ft[bv]=s.MAX;const wt={[Cv]:s.ZERO,[Rv]:s.ONE,[Pv]:s.SRC_COLOR,[Df]:s.SRC_ALPHA,[Fv]:s.SRC_ALPHA_SATURATE,[Iv]:s.DST_COLOR,[Lv]:s.DST_ALPHA,[Nv]:s.ONE_MINUS_SRC_COLOR,[If]:s.ONE_MINUS_SRC_ALPHA,[Uv]:s.ONE_MINUS_DST_COLOR,[Dv]:s.ONE_MINUS_DST_ALPHA,[Ov]:s.CONSTANT_COLOR,[kv]:s.ONE_MINUS_CONSTANT_COLOR,[Bv]:s.CONSTANT_ALPHA,[zv]:s.ONE_MINUS_CONSTANT_ALPHA};function rt(V,Te,he,ke,Ce,_e,je,Ie,Qe,pt){if(V===sr){v===!0&&(we(s.BLEND),v=!1);return}if(v===!1&&(me(s.BLEND),v=!0),V!==Ev){if(V!==_||pt!==W){if((b!==ss||B!==ss)&&(s.blendEquation(s.FUNC_ADD),b=ss,B=ss),pt)switch(V){case ea:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Em:s.blendFunc(s.ONE,s.ONE);break;case Tm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Rt("WebGLState: Invalid blending: ",V);break}else switch(V){case ea:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Em:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Tm:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wm:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",V);break}N=null,L=null,I=null,F=null,M.set(0,0,0),P=0,_=V,W=pt}return}Ce=Ce||Te,_e=_e||he,je=je||ke,(Te!==b||Ce!==B)&&(s.blendEquationSeparate(ft[Te],ft[Ce]),b=Te,B=Ce),(he!==N||ke!==L||_e!==I||je!==F)&&(s.blendFuncSeparate(wt[he],wt[ke],wt[_e],wt[je]),N=he,L=ke,I=_e,F=je),(Ie.equals(M)===!1||Qe!==P)&&(s.blendColor(Ie.r,Ie.g,Ie.b,Qe),M.copy(Ie),P=Qe),_=V,W=!1}function $e(V,Te){V.side===ir?we(s.CULL_FACE):me(s.CULL_FACE);let he=V.side===Vn;Te&&(he=!he),Mt(he),V.blending===ea&&V.transparent===!1?rt(sr):rt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const ke=V.stencilWrite;d.setTest(ke),ke&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),H(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(V){k!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),k=V)}function Et(V){V!==Sv?(me(s.CULL_FACE),V!==Y&&(V===Mm?s.cullFace(s.BACK):V===yv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),Y=V}function Yt(V){V!==re&&(X&&s.lineWidth(V),re=V)}function H(V,Te,he){V?(me(s.POLYGON_OFFSET_FILL),(le!==Te||G!==he)&&(le=Te,G=he,u.getReversed()&&(Te=-Te),s.polygonOffset(Te,he))):we(s.POLYGON_OFFSET_FILL)}function yt(V){V?me(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function dt(V){V===void 0&&(V=s.TEXTURE0+Q-1),ue!==V&&(s.activeTexture(V),ue=V)}function Lt(V,Te,he){he===void 0&&(ue===null?he=s.TEXTURE0+Q-1:he=ue);let ke=O[he];ke===void 0&&(ke={type:void 0,texture:void 0},O[he]=ke),(ke.type!==V||ke.texture!==Te)&&(ue!==he&&(s.activeTexture(he),ue=he),s.bindTexture(V,Te||xe[V]),ke.type=V,ke.texture=Te)}function Le(){const V=O[ue];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Bt(){try{s.compressedTexImage2D(...arguments)}catch(V){Rt("WebGLState:",V)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(V){Rt("WebGLState:",V)}}function E(){try{s.texSubImage2D(...arguments)}catch(V){Rt("WebGLState:",V)}}function K(){try{s.texSubImage3D(...arguments)}catch(V){Rt("WebGLState:",V)}}function pe(){try{s.compressedTexSubImage2D(...arguments)}catch(V){Rt("WebGLState:",V)}}function ge(){try{s.compressedTexSubImage3D(...arguments)}catch(V){Rt("WebGLState:",V)}}function Me(){try{s.texStorage2D(...arguments)}catch(V){Rt("WebGLState:",V)}}function Pe(){try{s.texStorage3D(...arguments)}catch(V){Rt("WebGLState:",V)}}function fe(){try{s.texImage2D(...arguments)}catch(V){Rt("WebGLState:",V)}}function de(){try{s.texImage3D(...arguments)}catch(V){Rt("WebGLState:",V)}}function De(V){return S[V]!==void 0?S[V]:s.getParameter(V)}function Be(V,Te){S[V]!==Te&&(s.pixelStorei(V,Te),S[V]=Te)}function be(V){Ge.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ge.copy(V))}function Ee(V){Fe.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Fe.copy(V))}function st(V,Te){let he=m.get(Te);he===void 0&&(he=new WeakMap,m.set(Te,he));let ke=he.get(V);ke===void 0&&(ke=s.getUniformBlockIndex(Te,V.name),he.set(V,ke))}function ot(V,Te){const ke=m.get(Te).get(V);h.get(Te)!==ke&&(s.uniformBlockBinding(Te,ke,V.__bindingPointIndex),h.set(Te,ke))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},S={},ue=null,O={},g={},y=new WeakMap,w=[],C=null,v=!1,_=null,b=null,N=null,L=null,B=null,I=null,F=null,M=new Pt(0,0,0),P=0,W=!1,k=null,Y=null,re=null,le=null,G=null,Ge.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:me,disable:we,bindFramebuffer:Ze,drawBuffers:tt,useProgram:Ut,setBlending:rt,setMaterial:$e,setFlipSided:Mt,setCullFace:Et,setLineWidth:Yt,setPolygonOffset:H,setScissorTest:yt,activeTexture:dt,bindTexture:Lt,unbindTexture:Le,compressedTexImage2D:Bt,compressedTexImage3D:R,texImage2D:fe,texImage3D:de,pixelStorei:Be,getParameter:De,updateUBOMapping:st,uniformBlockBinding:ot,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:E,texSubImage3D:K,compressedTexSubImage2D:pe,compressedTexSubImage3D:ge,scissor:be,viewport:Ee,reset:mt}}function R1(s,e,n,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Nt,x=new WeakMap,S=new Set;let g;const y=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(R,E){return w?new OffscreenCanvas(R,E):nc("canvas")}function v(R,E,K){let pe=1;const ge=Bt(R);if((ge.width>K||ge.height>K)&&(pe=K/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Me=Math.floor(pe*ge.width),Pe=Math.floor(pe*ge.height);g===void 0&&(g=C(Me,Pe));const fe=E?C(Me,Pe):g;return fe.width=Me,fe.height=Pe,fe.getContext("2d").drawImage(R,0,0,Me,Pe),at("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Me+"x"+Pe+")."),fe}else return"data"in R&&at("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),R;return R}function _(R){return R.generateMipmaps}function b(R){s.generateMipmap(R)}function N(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(R,E,K,pe,ge,Me=!1){if(R!==null){if(s[R]!==void 0)return s[R];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Pe;pe&&(Pe=e.get("EXT_texture_norm16"),Pe||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===s.RED&&(K===s.FLOAT&&(fe=s.R32F),K===s.HALF_FLOAT&&(fe=s.R16F),K===s.UNSIGNED_BYTE&&(fe=s.R8),K===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.R16_EXT),K===s.SHORT&&Pe&&(fe=Pe.R16_SNORM_EXT)),E===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.R8UI),K===s.UNSIGNED_SHORT&&(fe=s.R16UI),K===s.UNSIGNED_INT&&(fe=s.R32UI),K===s.BYTE&&(fe=s.R8I),K===s.SHORT&&(fe=s.R16I),K===s.INT&&(fe=s.R32I)),E===s.RG&&(K===s.FLOAT&&(fe=s.RG32F),K===s.HALF_FLOAT&&(fe=s.RG16F),K===s.UNSIGNED_BYTE&&(fe=s.RG8),K===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RG16_EXT),K===s.SHORT&&Pe&&(fe=Pe.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RG8UI),K===s.UNSIGNED_SHORT&&(fe=s.RG16UI),K===s.UNSIGNED_INT&&(fe=s.RG32UI),K===s.BYTE&&(fe=s.RG8I),K===s.SHORT&&(fe=s.RG16I),K===s.INT&&(fe=s.RG32I)),E===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),K===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),K===s.UNSIGNED_INT&&(fe=s.RGB32UI),K===s.BYTE&&(fe=s.RGB8I),K===s.SHORT&&(fe=s.RGB16I),K===s.INT&&(fe=s.RGB32I)),E===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),K===s.UNSIGNED_INT&&(fe=s.RGBA32UI),K===s.BYTE&&(fe=s.RGBA8I),K===s.SHORT&&(fe=s.RGBA16I),K===s.INT&&(fe=s.RGBA32I)),E===s.RGB&&(K===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGB16_EXT),K===s.SHORT&&Pe&&(fe=Pe.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),E===s.RGBA){const de=Me?tc:Tt.getTransfer(ge);K===s.FLOAT&&(fe=s.RGBA32F),K===s.HALF_FLOAT&&(fe=s.RGBA16F),K===s.UNSIGNED_BYTE&&(fe=de===kt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGBA16_EXT),K===s.SHORT&&Pe&&(fe=Pe.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function B(R,E){let K;return R?E===null||E===Oi||E===ao?K=s.DEPTH24_STENCIL8:E===Li?K=s.DEPTH32F_STENCIL8:E===so&&(K=s.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Oi||E===ao?K=s.DEPTH_COMPONENT24:E===Li?K=s.DEPTH_COMPONENT32F:E===so&&(K=s.DEPTH_COMPONENT16),K}function I(R,E){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==vn&&R.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function F(R){const E=R.target;E.removeEventListener("dispose",F),P(E),E.isVideoTexture&&x.delete(E),E.isHTMLTexture&&S.delete(E)}function M(R){const E=R.target;E.removeEventListener("dispose",M),k(E)}function P(R){const E=r.get(R);if(E.__webglInit===void 0)return;const K=R.source,pe=y.get(K);if(pe){const ge=pe[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&W(R),Object.keys(pe).length===0&&y.delete(K)}r.remove(R)}function W(R){const E=r.get(R);s.deleteTexture(E.__webglTexture);const K=R.source,pe=y.get(K);delete pe[E.__cacheKey],u.memory.textures--}function k(R){const E=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let ge=0;ge<E.__webglFramebuffer[pe].length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[pe][ge]);else s.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)s.deleteFramebuffer(E.__webglFramebuffer[pe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=R.textures;for(let pe=0,ge=K.length;pe<ge;pe++){const Me=r.get(K[pe]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),u.memory.textures--),r.remove(K[pe])}r.remove(R)}let Y=0;function re(){Y=0}function le(){return Y}function G(R){Y=R}function Q(){const R=Y;return R>=o.maxTextures&&at("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),Y+=1,R}function X(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function $(R,E){const K=r.get(R);if(R.isVideoTexture&&Lt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&K.__version!==R.version){const pe=R.image;if(pe===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{we(K,R,E);return}}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+E)}function ce(R,E){const K=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){we(K,R,E);return}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+E)}function ue(R,E){const K=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){we(K,R,E);return}n.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+E)}function O(R,E){const K=r.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&K.__version!==R.version){Ze(K,R,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+E)}const Z={[Gf]:s.REPEAT,[rr]:s.CLAMP_TO_EDGE,[Hf]:s.MIRRORED_REPEAT},Ue={[vn]:s.NEAREST,[Hv]:s.NEAREST_MIPMAP_NEAREST,[vl]:s.NEAREST_MIPMAP_LINEAR,[wn]:s.LINEAR,[$u]:s.LINEAR_MIPMAP_NEAREST,[ls]:s.LINEAR_MIPMAP_LINEAR},Ge={[Xv]:s.NEVER,[Zv]:s.ALWAYS,[qv]:s.LESS,[Od]:s.LEQUAL,[Yv]:s.EQUAL,[kd]:s.GEQUAL,[$v]:s.GREATER,[Kv]:s.NOTEQUAL};function Fe(R,E){if(E.type===Li&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===wn||E.magFilter===$u||E.magFilter===vl||E.magFilter===ls||E.minFilter===wn||E.minFilter===$u||E.minFilter===vl||E.minFilter===ls)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Z[E.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Z[E.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Z[E.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Ue[E.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Ue[E.minFilter]),E.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Ge[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vn||E.minFilter!==vl&&E.minFilter!==ls||E.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ae(R,E){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",F));const pe=E.source;let ge=y.get(pe);ge===void 0&&(ge={},y.set(pe,ge));const Me=X(E);if(Me!==R.__cacheKey){ge[Me]===void 0&&(ge[Me]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,K=!0),ge[Me].usedTimes++;const Pe=ge[R.__cacheKey];Pe!==void 0&&(ge[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&W(E)),R.__cacheKey=Me,R.__webglTexture=ge[Me].texture}return K}function xe(R,E,K){return Math.floor(Math.floor(R/K)/E)}function me(R,E,K,pe){const Me=R.updateRanges;if(Me.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,K,pe,E.data);else{Me.sort((Be,be)=>Be.start-be.start);let Pe=0;for(let Be=1;Be<Me.length;Be++){const be=Me[Pe],Ee=Me[Be],st=be.start+be.count,ot=xe(Ee.start,E.width,4),mt=xe(be.start,E.width,4);Ee.start<=st+1&&ot===mt&&xe(Ee.start+Ee.count-1,E.width,4)===ot?be.count=Math.max(be.count,Ee.start+Ee.count-be.start):(++Pe,Me[Pe]=Ee)}Me.length=Pe+1;const fe=n.getParameter(s.UNPACK_ROW_LENGTH),de=n.getParameter(s.UNPACK_SKIP_PIXELS),De=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Be=0,be=Me.length;Be<be;Be++){const Ee=Me[Be],st=Math.floor(Ee.start/4),ot=Math.ceil(Ee.count/4),mt=st%E.width,V=Math.floor(st/E.width),Te=ot,he=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,mt),n.pixelStorei(s.UNPACK_SKIP_ROWS,V),n.texSubImage2D(s.TEXTURE_2D,0,mt,V,Te,he,K,pe,E.data)}R.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,fe),n.pixelStorei(s.UNPACK_SKIP_PIXELS,de),n.pixelStorei(s.UNPACK_SKIP_ROWS,De)}}function we(R,E,K){let pe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=s.TEXTURE_3D);const ge=ae(R,E),Me=E.source;n.bindTexture(pe,R.__webglTexture,s.TEXTURE0+K);const Pe=r.get(Me);if(Me.version!==Pe.__version||ge===!0){if(n.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const he=Tt.getPrimaries(Tt.workingColorSpace),ke=E.colorSpace===Ur?null:Tt.getPrimaries(E.colorSpace),Ce=E.colorSpace===Ur||he===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}n.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let de=v(E.image,!1,o.maxTextureSize);de=Le(E,de);const De=l.convert(E.format,E.colorSpace),Be=l.convert(E.type);let be=L(E.internalFormat,De,Be,E.normalized,E.colorSpace,E.isVideoTexture);Fe(pe,E);let Ee;const st=E.mipmaps,ot=E.isVideoTexture!==!0,mt=Pe.__version===void 0||ge===!0,V=Me.dataReady,Te=I(E,de);if(E.isDepthTexture)be=B(E.format===cs,E.type),mt&&(ot?n.texStorage2D(s.TEXTURE_2D,1,be,de.width,de.height):n.texImage2D(s.TEXTURE_2D,0,be,de.width,de.height,0,De,Be,null));else if(E.isDataTexture)if(st.length>0){ot&&mt&&n.texStorage2D(s.TEXTURE_2D,Te,be,st[0].width,st[0].height);for(let he=0,ke=st.length;he<ke;he++)Ee=st[he],ot?V&&n.texSubImage2D(s.TEXTURE_2D,he,0,0,Ee.width,Ee.height,De,Be,Ee.data):n.texImage2D(s.TEXTURE_2D,he,be,Ee.width,Ee.height,0,De,Be,Ee.data);E.generateMipmaps=!1}else ot?(mt&&n.texStorage2D(s.TEXTURE_2D,Te,be,de.width,de.height),V&&me(E,de,De,Be)):n.texImage2D(s.TEXTURE_2D,0,be,de.width,de.height,0,De,Be,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ot&&mt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Te,be,st[0].width,st[0].height,de.depth);for(let he=0,ke=st.length;he<ke;he++)if(Ee=st[he],E.format!==Si)if(De!==null)if(ot){if(V)if(E.layerUpdates.size>0){const Ce=ng(Ee.width,Ee.height,E.format,E.type);for(const _e of E.layerUpdates){const je=Ee.data.subarray(_e*Ce/Ee.data.BYTES_PER_ELEMENT,(_e+1)*Ce/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,_e,Ee.width,Ee.height,1,De,je)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ee.width,Ee.height,de.depth,De,Ee.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,be,Ee.width,Ee.height,de.depth,0,Ee.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?V&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ee.width,Ee.height,de.depth,De,Be,Ee.data):n.texImage3D(s.TEXTURE_2D_ARRAY,he,be,Ee.width,Ee.height,de.depth,0,De,Be,Ee.data)}else{ot&&mt&&n.texStorage2D(s.TEXTURE_2D,Te,be,st[0].width,st[0].height);for(let he=0,ke=st.length;he<ke;he++)Ee=st[he],E.format!==Si?De!==null?ot?V&&n.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Ee.width,Ee.height,De,Ee.data):n.compressedTexImage2D(s.TEXTURE_2D,he,be,Ee.width,Ee.height,0,Ee.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?V&&n.texSubImage2D(s.TEXTURE_2D,he,0,0,Ee.width,Ee.height,De,Be,Ee.data):n.texImage2D(s.TEXTURE_2D,he,be,Ee.width,Ee.height,0,De,Be,Ee.data)}else if(E.isDataArrayTexture)if(ot){if(mt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Te,be,de.width,de.height,de.depth),V)if(E.layerUpdates.size>0){const he=ng(de.width,de.height,E.format,E.type);for(const ke of E.layerUpdates){const Ce=de.data.subarray(ke*he/de.data.BYTES_PER_ELEMENT,(ke+1)*he/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ke,de.width,de.height,1,De,Be,Ce)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,De,Be,de.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,be,de.width,de.height,de.depth,0,De,Be,de.data);else if(E.isData3DTexture)ot?(mt&&n.texStorage3D(s.TEXTURE_3D,Te,be,de.width,de.height,de.depth),V&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,De,Be,de.data)):n.texImage3D(s.TEXTURE_3D,0,be,de.width,de.height,de.depth,0,De,Be,de.data);else if(E.isFramebufferTexture){if(mt)if(ot)n.texStorage2D(s.TEXTURE_2D,Te,be,de.width,de.height);else{let he=de.width,ke=de.height;for(let Ce=0;Ce<Te;Ce++)n.texImage2D(s.TEXTURE_2D,Ce,be,he,ke,0,De,Be,null),he>>=1,ke>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const he=s.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),de.parentNode!==he){he.appendChild(de),S.add(E),he.onpaint=Ie=>{const Qe=Ie.changedElements;for(const pt of S)Qe.includes(pt.image)&&(pt.needsUpdate=!0)},he.requestPaint();return}const ke=0,Ce=s.RGBA,_e=s.RGBA,je=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,ke,Ce,_e,je,de),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(st.length>0){if(ot&&mt){const he=Bt(st[0]);n.texStorage2D(s.TEXTURE_2D,Te,be,he.width,he.height)}for(let he=0,ke=st.length;he<ke;he++)Ee=st[he],ot?V&&n.texSubImage2D(s.TEXTURE_2D,he,0,0,De,Be,Ee):n.texImage2D(s.TEXTURE_2D,he,be,De,Be,Ee);E.generateMipmaps=!1}else if(ot){if(mt){const he=Bt(de);n.texStorage2D(s.TEXTURE_2D,Te,be,he.width,he.height)}V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,De,Be,de)}else n.texImage2D(s.TEXTURE_2D,0,be,De,Be,de);_(E)&&b(pe),Pe.__version=Me.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ze(R,E,K){if(E.image.length!==6)return;const pe=ae(R,E),ge=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+K);const Me=r.get(ge);if(ge.version!==Me.__version||pe===!0){n.activeTexture(s.TEXTURE0+K);const Pe=Tt.getPrimaries(Tt.workingColorSpace),fe=E.colorSpace===Ur?null:Tt.getPrimaries(E.colorSpace),de=E.colorSpace===Ur||Pe===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const De=E.isCompressedTexture||E.image[0].isCompressedTexture,Be=E.image[0]&&E.image[0].isDataTexture,be=[];for(let _e=0;_e<6;_e++)!De&&!Be?be[_e]=v(E.image[_e],!0,o.maxCubemapSize):be[_e]=Be?E.image[_e].image:E.image[_e],be[_e]=Le(E,be[_e]);const Ee=be[0],st=l.convert(E.format,E.colorSpace),ot=l.convert(E.type),mt=L(E.internalFormat,st,ot,E.normalized,E.colorSpace),V=E.isVideoTexture!==!0,Te=Me.__version===void 0||pe===!0,he=ge.dataReady;let ke=I(E,Ee);Fe(s.TEXTURE_CUBE_MAP,E);let Ce;if(De){V&&Te&&n.texStorage2D(s.TEXTURE_CUBE_MAP,ke,mt,Ee.width,Ee.height);for(let _e=0;_e<6;_e++){Ce=be[_e].mipmaps;for(let je=0;je<Ce.length;je++){const Ie=Ce[je];E.format!==Si?st!==null?V?he&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,0,0,Ie.width,Ie.height,st,Ie.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,mt,Ie.width,Ie.height,0,Ie.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?he&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,0,0,Ie.width,Ie.height,st,ot,Ie.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,mt,Ie.width,Ie.height,0,st,ot,Ie.data)}}}else{if(Ce=E.mipmaps,V&&Te){Ce.length>0&&ke++;const _e=Bt(be[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,ke,mt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Be){V?he&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,be[_e].width,be[_e].height,st,ot,be[_e].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,mt,be[_e].width,be[_e].height,0,st,ot,be[_e].data);for(let je=0;je<Ce.length;je++){const Qe=Ce[je].image[_e].image;V?he&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,0,0,Qe.width,Qe.height,st,ot,Qe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,mt,Qe.width,Qe.height,0,st,ot,Qe.data)}}else{V?he&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,st,ot,be[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,mt,st,ot,be[_e]);for(let je=0;je<Ce.length;je++){const Ie=Ce[je];V?he&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,0,0,st,ot,Ie.image[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,mt,st,ot,Ie.image[_e])}}}_(E)&&b(s.TEXTURE_CUBE_MAP),Me.__version=ge.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function tt(R,E,K,pe,ge,Me){const Pe=l.convert(K.format,K.colorSpace),fe=l.convert(K.type),de=L(K.internalFormat,Pe,fe,K.normalized,K.colorSpace),De=r.get(E),Be=r.get(K);if(Be.__renderTarget=E,!De.__hasExternalTextures){const be=Math.max(1,E.width>>Me),Ee=Math.max(1,E.height>>Me);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?n.texImage3D(ge,Me,de,be,Ee,E.depth,0,Pe,fe,null):n.texImage2D(ge,Me,de,be,Ee,0,Pe,fe,null)}n.bindFramebuffer(s.FRAMEBUFFER,R),dt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,Be.__webglTexture,0,yt(E)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,Be.__webglTexture,Me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(R,E,K){if(s.bindRenderbuffer(s.RENDERBUFFER,R),E.depthBuffer){const pe=E.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,Me=B(E.stencilBuffer,ge),Pe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;dt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt(E),Me,E.width,E.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt(E),Me,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Me,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,R)}else{const pe=E.textures;for(let ge=0;ge<pe.length;ge++){const Me=pe[ge],Pe=l.convert(Me.format,Me.colorSpace),fe=l.convert(Me.type),de=L(Me.internalFormat,Pe,fe,Me.normalized,Me.colorSpace);dt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt(E),de,E.width,E.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt(E),de,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,de,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ft(R,E,K){const pe=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pe){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,E.depthTexture);const De=l.convert(E.depthTexture.format),Be=l.convert(E.depthTexture.type);let be;E.depthTexture.format===lr?be=s.DEPTH_COMPONENT24:E.depthTexture.format===cs&&(be=s.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,be,E.width,E.height,0,De,Be,null)}}else $(E.depthTexture,0);const Me=ge.__webglTexture,Pe=yt(E),fe=pe?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,de=E.depthTexture.format===cs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===lr)dt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,fe,Me,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,de,fe,Me,0);else if(E.depthTexture.format===cs)dt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,fe,Me,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,de,fe,Me,0);else throw new Error("Unknown depthTexture format")}function wt(R){const E=r.get(R),K=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const pe=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=pe}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(K)for(let pe=0;pe<6;pe++)ft(E.__webglFramebuffer[pe],R,pe);else{const pe=R.texture.mipmaps;pe&&pe.length>0?ft(E.__webglFramebuffer[0],R,0):ft(E.__webglFramebuffer,R,0)}else if(K){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=s.createRenderbuffer(),Ut(E.__webglDepthbuffer[pe],R,!1);else{const ge=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=E.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Me)}}else{const pe=R.texture.mipmaps;if(pe&&pe.length>0?n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ut(E.__webglDepthbuffer,R,!1);else{const ge=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Me)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(R,E,K){const pe=r.get(R);E!==void 0&&tt(pe.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&wt(R)}function $e(R){const E=R.texture,K=r.get(R),pe=r.get(E);R.addEventListener("dispose",M);const ge=R.textures,Me=R.isWebGLCubeRenderTarget===!0,Pe=ge.length>1;if(Pe||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=E.version,u.memory.textures++),Me){K.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[fe]=[];for(let de=0;de<E.mipmaps.length;de++)K.__webglFramebuffer[fe][de]=s.createFramebuffer()}else K.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)K.__webglFramebuffer[fe]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let fe=0,de=ge.length;fe<de;fe++){const De=r.get(ge[fe]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),u.memory.textures++)}if(R.samples>0&&dt(R)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let fe=0;fe<ge.length;fe++){const de=ge[fe];K.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[fe]);const De=l.convert(de.format,de.colorSpace),Be=l.convert(de.type),be=L(de.internalFormat,De,Be,de.normalized,de.colorSpace,R.isXRRenderTarget===!0),Ee=yt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,be,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,K.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Ut(K.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)tt(K.__webglFramebuffer[fe][de],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,de);else tt(K.__webglFramebuffer[fe],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);_(E)&&b(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let fe=0,de=ge.length;fe<de;fe++){const De=ge[fe],Be=r.get(De);let be=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(be=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(be,Be.__webglTexture),Fe(be,De),tt(K.__webglFramebuffer,R,De,s.COLOR_ATTACHMENT0+fe,be,0),_(De)&&b(be)}n.unbindTexture()}else{let fe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(fe,pe.__webglTexture),Fe(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)tt(K.__webglFramebuffer[de],R,E,s.COLOR_ATTACHMENT0,fe,de);else tt(K.__webglFramebuffer,R,E,s.COLOR_ATTACHMENT0,fe,0);_(E)&&b(fe),n.unbindTexture()}R.depthBuffer&&wt(R)}function Mt(R){const E=R.textures;for(let K=0,pe=E.length;K<pe;K++){const ge=E[K];if(_(ge)){const Me=N(R),Pe=r.get(ge).__webglTexture;n.bindTexture(Me,Pe),b(Me),n.unbindTexture()}}}const Et=[],Yt=[];function H(R){if(R.samples>0){if(dt(R)===!1){const E=R.textures,K=R.width,pe=R.height;let ge=s.COLOR_BUFFER_BIT;const Me=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(R),fe=E.length>1;if(fe)for(let De=0;De<E.length;De++)n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const de=R.texture.mipmaps;de&&de.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let De=0;De<E.length;De++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[De]);const Be=r.get(E[De]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Be,0)}s.blitFramebuffer(0,0,K,pe,0,0,K,pe,ge,s.NEAREST),h===!0&&(Et.length=0,Yt.length=0,Et.push(s.COLOR_ATTACHMENT0+De),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Et.push(Me),Yt.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Yt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Et))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let De=0;De<E.length;De++){n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[De]);const Be=r.get(E[De]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,Be,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&h){const E=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function yt(R){return Math.min(o.maxSamples,R.samples)}function dt(R){const E=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Lt(R){const E=u.render.frame;x.get(R)!==E&&(x.set(R,E),R.update())}function Le(R,E){const K=R.colorSpace,pe=R.format,ge=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||K!==ec&&K!==Ur&&(Tt.getTransfer(K)===kt?(pe!==Si||ge!==Kn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",K)),E}function Bt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(m.width=R.naturalWidth||R.width,m.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(m.width=R.displayWidth,m.height=R.displayHeight):(m.width=R.width,m.height=R.height),m}this.allocateTextureUnit=Q,this.resetTextureUnits=re,this.getTextureUnits=le,this.setTextureUnits=G,this.setTexture2D=$,this.setTexture2DArray=ce,this.setTexture3D=ue,this.setTextureCube=O,this.rebindTextures=rt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function P1(s,e){function n(r,o=Ur){let l;const u=Tt.getTransfer(o);if(r===Kn)return s.UNSIGNED_BYTE;if(r===Ld)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Dd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Vg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Gg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Bg)return s.BYTE;if(r===zg)return s.SHORT;if(r===so)return s.UNSIGNED_SHORT;if(r===Nd)return s.INT;if(r===Oi)return s.UNSIGNED_INT;if(r===Li)return s.FLOAT;if(r===or)return s.HALF_FLOAT;if(r===Hg)return s.ALPHA;if(r===Wg)return s.RGB;if(r===Si)return s.RGBA;if(r===lr)return s.DEPTH_COMPONENT;if(r===cs)return s.DEPTH_STENCIL;if(r===jg)return s.RED;if(r===Id)return s.RED_INTEGER;if(r===fs)return s.RG;if(r===Ud)return s.RG_INTEGER;if(r===Fd)return s.RGBA_INTEGER;if(r===ql||r===Yl||r===$l||r===Kl)if(u===kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ql)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ql)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Kl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wf||r===jf||r===Xf||r===qf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Wf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yf||r===$f||r===Kf||r===Zf||r===Qf||r===Ql||r===Jf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Yf||r===$f)return u===kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Kf)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Zf)return l.COMPRESSED_R11_EAC;if(r===Qf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Ql)return l.COMPRESSED_RG11_EAC;if(r===Jf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ed||r===td||r===nd||r===id||r===rd||r===sd||r===ad||r===od||r===ld||r===cd||r===ud||r===fd||r===dd||r===hd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===ed)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===td)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===id)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ad)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===od)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ld)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ud)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===dd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===pd||r===md||r===gd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===pd)return u===kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===md)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===gd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_d||r===vd||r===Jl||r===xd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===_d)return l.COMPRESSED_RED_RGTC1_EXT;if(r===vd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ao?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const N1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class D1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new n0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Bi({vertexShader:N1,fragmentShader:L1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ki(new lc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I1 extends ds{constructor(e,n){super();const r=this;let o=null,l=1,u=null,d="local-floor",h=1,m=null,x=null,S=null,g=null,y=null,w=null;const C=typeof XRWebGLBinding<"u",v=new D1,_={},b=n.getContextAttributes();let N=null,L=null;const B=[],I=[],F=new Nt;let M=null;const P=new $n;P.viewport=new Jt;const W=new $n;W.viewport=new Jt;const k=[P,W],Y=new Wx;let re=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let xe=B[ae];return xe===void 0&&(xe=new rf,B[ae]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ae){let xe=B[ae];return xe===void 0&&(xe=new rf,B[ae]=xe),xe.getGripSpace()},this.getHand=function(ae){let xe=B[ae];return xe===void 0&&(xe=new rf,B[ae]=xe),xe.getHandSpace()};function G(ae){const xe=I.indexOf(ae.inputSource);if(xe===-1)return;const me=B[xe];me!==void 0&&(me.update(ae.inputSource,ae.frame,m||u),me.dispatchEvent({type:ae.type,data:ae.inputSource}))}function Q(){o.removeEventListener("select",G),o.removeEventListener("selectstart",G),o.removeEventListener("selectend",G),o.removeEventListener("squeeze",G),o.removeEventListener("squeezestart",G),o.removeEventListener("squeezeend",G),o.removeEventListener("end",Q),o.removeEventListener("inputsourceschange",X);for(let ae=0;ae<B.length;ae++){const xe=I[ae];xe!==null&&(I[ae]=null,B[ae].disconnect(xe))}re=null,le=null,v.reset();for(const ae in _)delete _[ae];e.setRenderTarget(N),y=null,g=null,S=null,o=null,L=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(M),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ae){m=ae},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(o,n)),S},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",G),o.addEventListener("selectstart",G),o.addEventListener("selectend",G),o.addEventListener("squeeze",G),o.addEventListener("squeezestart",G),o.addEventListener("squeezeend",G),o.addEventListener("end",Q),o.addEventListener("inputsourceschange",X),b.xrCompatible!==!0&&await n.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,we=null,Ze=null;b.depth&&(Ze=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=b.stencil?cs:lr,we=b.stencil?ao:Oi);const tt={colorFormat:n.RGBA8,depthFormat:Ze,scaleFactor:l};S=this.getBinding(),g=S.createProjectionLayer(tt),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new Fi(g.textureWidth,g.textureHeight,{format:Si,type:Kn,depthTexture:new ra(g.textureWidth,g.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,n,me),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Fi(y.framebufferWidth,y.framebufferHeight,{format:Si,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(d),Fe.setContext(o),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(ae){for(let xe=0;xe<ae.removed.length;xe++){const me=ae.removed[xe],we=I.indexOf(me);we>=0&&(I[we]=null,B[we].disconnect(me))}for(let xe=0;xe<ae.added.length;xe++){const me=ae.added[xe];let we=I.indexOf(me);if(we===-1){for(let tt=0;tt<B.length;tt++)if(tt>=I.length){I.push(me),we=tt;break}else if(I[tt]===null){I[tt]=me,we=tt;break}if(we===-1)break}const Ze=B[we];Ze&&Ze.connect(me)}}const $=new J,ce=new J;function ue(ae,xe,me){$.setFromMatrixPosition(xe.matrixWorld),ce.setFromMatrixPosition(me.matrixWorld);const we=$.distanceTo(ce),Ze=xe.projectionMatrix.elements,tt=me.projectionMatrix.elements,Ut=Ze[14]/(Ze[10]-1),ft=Ze[14]/(Ze[10]+1),wt=(Ze[9]+1)/Ze[5],rt=(Ze[9]-1)/Ze[5],$e=(Ze[8]-1)/Ze[0],Mt=(tt[8]+1)/tt[0],Et=Ut*$e,Yt=Ut*Mt,H=we/(-$e+Mt),yt=H*-$e;if(xe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(yt),ae.translateZ(H),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ze[10]===-1)ae.projectionMatrix.copy(xe.projectionMatrix),ae.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const dt=Ut+H,Lt=ft+H,Le=Et-yt,Bt=Yt+(we-yt),R=wt*ft/Lt*dt,E=rt*ft/Lt*dt;ae.projectionMatrix.makePerspective(Le,Bt,R,E,dt,Lt),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function O(ae,xe){xe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(xe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let xe=ae.near,me=ae.far;v.texture!==null&&(v.depthNear>0&&(xe=v.depthNear),v.depthFar>0&&(me=v.depthFar)),Y.near=W.near=P.near=xe,Y.far=W.far=P.far=me,(re!==Y.near||le!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),re=Y.near,le=Y.far),Y.layers.mask=ae.layers.mask|6,P.layers.mask=Y.layers.mask&-5,W.layers.mask=Y.layers.mask&-3;const we=ae.parent,Ze=Y.cameras;O(Y,we);for(let tt=0;tt<Ze.length;tt++)O(Ze[tt],we);Ze.length===2?ue(Y,P,W):Y.projectionMatrix.copy(P.projectionMatrix),Z(ae,Y,we)};function Z(ae,xe,me){me===null?ae.matrix.copy(xe.matrixWorld):(ae.matrix.copy(me.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(xe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(xe.projectionMatrix),ae.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Md*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&y===null))return h},this.setFoveation=function(ae){h=ae,g!==null&&(g.fixedFoveation=ae),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ae)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(Y)},this.getCameraTexture=function(ae){return _[ae]};let Ue=null;function Ge(ae,xe){if(x=xe.getViewerPose(m||u),w=xe,x!==null){const me=x.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let we=!1;me.length!==Y.cameras.length&&(Y.cameras.length=0,we=!0);for(let ft=0;ft<me.length;ft++){const wt=me[ft];let rt=null;if(y!==null)rt=y.getViewport(wt);else{const Mt=S.getViewSubImage(g,wt);rt=Mt.viewport,ft===0&&(e.setRenderTargetTextures(L,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(L))}let $e=k[ft];$e===void 0&&($e=new $n,$e.layers.enable(ft),$e.viewport=new Jt,k[ft]=$e),$e.matrix.fromArray(wt.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(wt.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(rt.x,rt.y,rt.width,rt.height),ft===0&&(Y.matrix.copy($e.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),we===!0&&Y.cameras.push($e)}const Ze=o.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){S=r.getBinding();const ft=S.getDepthInformation(me[0]);ft&&ft.isValid&&ft.texture&&v.init(ft,o.renderState)}if(Ze&&Ze.includes("camera-access")&&C){e.state.unbindTexture(),S=r.getBinding();for(let ft=0;ft<me.length;ft++){const wt=me[ft].camera;if(wt){let rt=_[wt];rt||(rt=new n0,_[wt]=rt);const $e=S.getCameraImage(wt);rt.sourceTexture=$e}}}}for(let me=0;me<B.length;me++){const we=I[me],Ze=B[me];we!==null&&Ze!==void 0&&Ze.update(we,xe,m||u)}Ue&&Ue(ae,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),w=null}const Fe=new o0;Fe.setAnimationLoop(Ge),this.setAnimationLoop=function(ae){Ue=ae},this.dispose=function(){}}}const U1=new qt,p0=new ht;p0.set(-1,0,0,0,1,0,0,0,1);function F1(s,e){function n(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,i0(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function o(v,_,b,N,L){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(v,_):_.isMeshLambertMaterial?(l(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(v,_),S(v,_)):_.isMeshPhongMaterial?(l(v,_),x(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(v,_),g(v,_),_.isMeshPhysicalMaterial&&y(v,_,L)):_.isMeshMatcapMaterial?(l(v,_),w(v,_)):_.isMeshDepthMaterial?l(v,_):_.isMeshDistanceMaterial?(l(v,_),C(v,_)):_.isMeshNormalMaterial?l(v,_):_.isLineBasicMaterial?(u(v,_),_.isLineDashedMaterial&&d(v,_)):_.isPointsMaterial?h(v,_,b,N):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,n(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Vn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,n(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Vn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,n(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,n(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const b=e.get(_),N=b.envMap,L=b.envMapRotation;N&&(v.envMap.value=N,v.envMapRotation.value.setFromMatrix4(U1.makeRotationFromEuler(L)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(p0),v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,v.aoMapTransform))}function u(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform))}function d(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function h(v,_,b,N){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*b,v.scale.value=N*.5,_.map&&(v.map.value=_.map,n(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function x(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function S(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function g(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function y(v,_,b){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Vn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,v.specularIntensityMapTransform))}function w(v,_){_.matcap&&(v.matcap.value=_.matcap)}function C(v,_){const b=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(b.matrixWorld),v.nearDistance.value=b.shadow.camera.near,v.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function O1(s,e,n,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,N){const L=N.program;r.uniformBlockBinding(b,L)}function m(b,N){let L=o[b.id];L===void 0&&(w(b),L=x(b),o[b.id]=L,b.addEventListener("dispose",v));const B=N.program;r.updateUBOMapping(b,B);const I=e.render.frame;l[b.id]!==I&&(g(b),l[b.id]=I)}function x(b){const N=S();b.__bindingPointIndex=N;const L=s.createBuffer(),B=b.__size,I=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,B,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,L),L}function S(){for(let b=0;b<d;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const N=o[b.id],L=b.uniforms,B=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let I=0,F=L.length;I<F;I++){const M=Array.isArray(L[I])?L[I]:[L[I]];for(let P=0,W=M.length;P<W;P++){const k=M[P];if(y(k,I,P,B)===!0){const Y=k.__offset,re=Array.isArray(k.value)?k.value:[k.value];let le=0;for(let G=0;G<re.length;G++){const Q=re[G],X=C(Q);typeof Q=="number"||typeof Q=="boolean"?(k.__data[0]=Q,s.bufferSubData(s.UNIFORM_BUFFER,Y+le,k.__data)):Q.isMatrix3?(k.__data[0]=Q.elements[0],k.__data[1]=Q.elements[1],k.__data[2]=Q.elements[2],k.__data[3]=0,k.__data[4]=Q.elements[3],k.__data[5]=Q.elements[4],k.__data[6]=Q.elements[5],k.__data[7]=0,k.__data[8]=Q.elements[6],k.__data[9]=Q.elements[7],k.__data[10]=Q.elements[8],k.__data[11]=0):ArrayBuffer.isView(Q)?k.__data.set(new Q.constructor(Q.buffer,Q.byteOffset,k.__data.length)):(Q.toArray(k.__data,le),le+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(b,N,L,B){const I=b.value,F=N+"_"+L;if(B[F]===void 0)return typeof I=="number"||typeof I=="boolean"?B[F]=I:ArrayBuffer.isView(I)?B[F]=I.slice():B[F]=I.clone(),!0;{const M=B[F];if(typeof I=="number"||typeof I=="boolean"){if(M!==I)return B[F]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(M.equals(I)===!1)return M.copy(I),!0}}return!1}function w(b){const N=b.uniforms;let L=0;const B=16;for(let F=0,M=N.length;F<M;F++){const P=Array.isArray(N[F])?N[F]:[N[F]];for(let W=0,k=P.length;W<k;W++){const Y=P[W],re=Array.isArray(Y.value)?Y.value:[Y.value];for(let le=0,G=re.length;le<G;le++){const Q=re[le],X=C(Q),$=L%B,ce=$%X.boundary,ue=$+ce;L+=ce,ue!==0&&B-ue<X.storage&&(L+=B-ue),Y.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=L,L+=X.storage}}}const I=L%B;return I>0&&(L+=B-I),b.__size=L,b.__cache={},this}function C(b){const N={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(N.boundary=4,N.storage=4):b.isVector2?(N.boundary=8,N.storage=8):b.isVector3||b.isColor?(N.boundary=16,N.storage=12):b.isVector4?(N.boundary=16,N.storage=16):b.isMatrix3?(N.boundary=48,N.storage=48):b.isMatrix4?(N.boundary=64,N.storage=64):b.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(N.boundary=16,N.storage=b.byteLength):at("WebGLRenderer: Unsupported uniform value type.",b),N}function v(b){const N=b.target;N.removeEventListener("dispose",v);const L=u.indexOf(N.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function _(){for(const b in o)s.deleteBuffer(o[b]);u=[],o={},l={}}return{bind:h,update:m,dispose:_}}const k1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ri=null;function B1(){return Ri===null&&(Ri=new Mx(k1,16,16,fs,or),Ri.name="DFG_LUT",Ri.minFilter=wn,Ri.magFilter=wn,Ri.wrapS=rr,Ri.wrapT=rr,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}class z1{constructor(e={}){const{canvas:n=Jv(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Kn}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const C=y,v=new Set([Fd,Ud,Id]),_=new Set([Kn,Oi,so,ao,Ld,Dd]),b=new Uint32Array(4),N=new Int32Array(4),L=new J;let B=null,I=null;const F=[],M=[];let P=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let k=!1,Y=null;this._outputColorSpace=ai;let re=0,le=0,G=null,Q=-1,X=null;const $=new Jt,ce=new Jt;let ue=null;const O=new Pt(0);let Z=0,Ue=n.width,Ge=n.height,Fe=1,ae=null,xe=null;const me=new Jt(0,0,Ue,Ge),we=new Jt(0,0,Ue,Ge);let Ze=!1;const tt=new Vd;let Ut=!1,ft=!1;const wt=new qt,rt=new J,$e=new Jt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Yt(){return G===null?Fe:1}let H=r;function yt(A,q){return n.getContext(A,q)}try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pd}`),n.addEventListener("webglcontextlost",_e,!1),n.addEventListener("webglcontextrestored",je,!1),n.addEventListener("webglcontextcreationerror",Ie,!1),H===null){const q="webgl2";if(H=yt(q,A),H===null)throw yt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Rt("WebGLRenderer: "+A.message),A}let dt,Lt,Le,Bt,R,E,K,pe,ge,Me,Pe,fe,de,De,Be,be,Ee,st,ot,mt,V,Te,he;function ke(){dt=new BM(H),dt.init(),V=new P1(H,dt),Lt=new NM(H,dt,e,V),Le=new C1(H,dt),Lt.reversedDepthBuffer&&g&&Le.buffers.depth.setReversed(!0),Bt=new GM(H),R=new p1,E=new R1(H,dt,Le,R,Lt,V,Bt),K=new kM(W),pe=new Xx(H),Te=new RM(H,pe),ge=new zM(H,pe,Bt,Te),Me=new WM(H,ge,pe,Te,Bt),st=new HM(H,Lt,E),Be=new LM(R),Pe=new h1(W,K,dt,Lt,Te,Be),fe=new F1(W,R),de=new g1,De=new M1(dt),Ee=new CM(W,K,Le,Me,w,h),be=new b1(W,Me,Lt),he=new O1(H,Bt,Lt,Le),ot=new PM(H,dt,Bt),mt=new VM(H,dt,Bt),Bt.programs=Pe.programs,W.capabilities=Lt,W.extensions=dt,W.properties=R,W.renderLists=de,W.shadowMap=be,W.state=Le,W.info=Bt}ke(),C!==Kn&&(P=new XM(C,n.width,n.height,o,l));const Ce=new I1(W,H);this.xr=Ce,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=dt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=dt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(A){A!==void 0&&(Fe=A,this.setSize(Ue,Ge,!1))},this.getSize=function(A){return A.set(Ue,Ge)},this.setSize=function(A,q,se=!0){if(Ce.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=A,Ge=q,n.width=Math.floor(A*Fe),n.height=Math.floor(q*Fe),se===!0&&(n.style.width=A+"px",n.style.height=q+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(Ue*Fe,Ge*Fe).floor()},this.setDrawingBufferSize=function(A,q,se){Ue=A,Ge=q,Fe=se,n.width=Math.floor(A*se),n.height=Math.floor(q*se),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===Kn){Rt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){at("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy($)},this.getViewport=function(A){return A.copy(me)},this.setViewport=function(A,q,se,ne){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,q,se,ne),Le.viewport($.copy(me).multiplyScalar(Fe).round())},this.getScissor=function(A){return A.copy(we)},this.setScissor=function(A,q,se,ne){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,q,se,ne),Le.scissor(ce.copy(we).multiplyScalar(Fe).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(A){Le.setScissorTest(Ze=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){xe=A},this.getClearColor=function(A){return A.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,se=!0){let ne=0;if(A){let te=!1;if(G!==null){const Ne=G.texture.format;te=v.has(Ne)}if(te){const Ne=G.texture.type,He=_.has(Ne),Re=Ee.getClearColor(),qe=Ee.getClearAlpha(),et=Re.r,ct=Re.g,ut=Re.b;He?(b[0]=et,b[1]=ct,b[2]=ut,b[3]=qe,H.clearBufferuiv(H.COLOR,0,b)):(N[0]=et,N[1]=ct,N[2]=ut,N[3]=qe,H.clearBufferiv(H.COLOR,0,N))}else ne|=H.COLOR_BUFFER_BIT}q&&(ne|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ne|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&H.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Y=A},this.dispose=function(){n.removeEventListener("webglcontextlost",_e,!1),n.removeEventListener("webglcontextrestored",je,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),Ee.dispose(),de.dispose(),De.dispose(),R.dispose(),K.dispose(),Me.dispose(),Te.dispose(),he.dispose(),Pe.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Br),Ce.removeEventListener("sessionend",ms),Vi.stop()};function _e(A){A.preventDefault(),Pm("WebGLRenderer: Context Lost."),k=!0}function je(){Pm("WebGLRenderer: Context Restored."),k=!1;const A=Bt.autoReset,q=be.enabled,se=be.autoUpdate,ne=be.needsUpdate,te=be.type;ke(),Bt.autoReset=A,be.enabled=q,be.autoUpdate=se,be.needsUpdate=ne,be.type=te}function Ie(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qe(A){const q=A.target;q.removeEventListener("dispose",Qe),pt(q)}function pt(A){en(A),R.remove(A)}function en(A){const q=R.get(A).programs;q!==void 0&&(q.forEach(function(se){Pe.releaseProgram(se)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,se,ne,te,Ne){q===null&&(q=Mt);const He=te.isMesh&&te.matrixWorld.determinant()<0,Re=_o(A,q,se,ne,te);Le.setMaterial(ne,He);let qe=se.index,et=1;if(ne.wireframe===!0){if(qe=ge.getWireframeAttribute(se),qe===void 0)return;et=2}const ct=se.drawRange,ut=se.attributes.position;let Ke=ct.start*et,At=(ct.start+ct.count)*et;Ne!==null&&(Ke=Math.max(Ke,Ne.start*et),At=Math.min(At,(Ne.start+Ne.count)*et)),qe!==null?(Ke=Math.max(Ke,0),At=Math.min(At,qe.count)):ut!=null&&(Ke=Math.max(Ke,0),At=Math.min(At,ut.count));const zt=At-Ke;if(zt<0||zt===1/0)return;Te.setup(te,ne,Re,se,qe);let jt,Ft=ot;if(qe!==null&&(jt=pe.get(qe),Ft=mt,Ft.setIndex(jt)),te.isMesh)ne.wireframe===!0?(Le.setLineWidth(ne.wireframeLinewidth*Yt()),Ft.setMode(H.LINES)):Ft.setMode(H.TRIANGLES);else if(te.isLine){let nn=ne.linewidth;nn===void 0&&(nn=1),Le.setLineWidth(nn*Yt()),te.isLineSegments?Ft.setMode(H.LINES):te.isLineLoop?Ft.setMode(H.LINE_LOOP):Ft.setMode(H.LINE_STRIP)}else te.isPoints?Ft.setMode(H.POINTS):te.isSprite&&Ft.setMode(H.TRIANGLES);if(te.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))Ft.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const nn=te._multiDrawStarts,ze=te._multiDrawCounts,mn=te._multiDrawCount,_t=qe?pe.get(qe).bytesPerElement:1,Nn=R.get(ne).currentProgram.getUniforms();for(let Ln=0;Ln<mn;Ln++)Nn.setValue(H,"_gl_DrawID",Ln),Ft.render(nn[Ln]/_t,ze[Ln])}else if(te.isInstancedMesh)Ft.renderInstances(Ke,zt,te.count);else if(se.isInstancedBufferGeometry){const nn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,ze=Math.min(se.instanceCount,nn);Ft.renderInstances(Ke,zt,ze)}else Ft.render(Ke,zt)};function Qn(A,q,se){A.transparent===!0&&A.side===ir&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,gs(A,q,se),A.side=Or,A.needsUpdate=!0,gs(A,q,se),A.side=ir):gs(A,q,se)}this.compile=function(A,q,se=null){se===null&&(se=A),I=De.get(se),I.init(q),M.push(I),se.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(I.pushLight(te),te.castShadow&&I.pushShadow(te))}),A!==se&&A.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(I.pushLight(te),te.castShadow&&I.pushShadow(te))}),I.setupLights();const ne=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ne=te.material;if(Ne)if(Array.isArray(Ne))for(let He=0;He<Ne.length;He++){const Re=Ne[He];Qn(Re,se,te),ne.add(Re)}else Qn(Ne,se,te),ne.add(Ne)}),I=M.pop(),ne},this.compileAsync=function(A,q,se=null){const ne=this.compile(A,q,se);return new Promise(te=>{function Ne(){if(ne.forEach(function(He){R.get(He).currentProgram.isReady()&&ne.delete(He)}),ne.size===0){te(A);return}setTimeout(Ne,10)}dt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let zi=null;function ps(A){zi&&zi(A)}function Br(){Vi.stop()}function ms(){Vi.start()}const Vi=new o0;Vi.setAnimationLoop(ps),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(A){zi=A,Ce.setAnimationLoop(A),A===null?Vi.stop():Vi.start()},Ce.addEventListener("sessionstart",Br),Ce.addEventListener("sessionend",ms),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;Y!==null&&Y.renderStart(A,q);const se=Ce.enabled===!0&&Ce.isPresenting===!0,ne=P!==null&&(G===null||se)&&P.begin(W,G);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(q),q=Ce.getCamera()),A.isScene===!0&&A.onBeforeRender(W,A,q,G),I=De.get(A,M.length),I.init(q),I.state.textureUnits=E.getTextureUnits(),M.push(I),wt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),tt.setFromProjectionMatrix(wt,Di,q.reversedDepth),ft=this.localClippingEnabled,Ut=Be.init(this.clippingPlanes,ft),B=de.get(A,F.length),B.init(),F.push(B),Ce.enabled===!0&&Ce.isPresenting===!0){const He=W.xr.getDepthSensingMesh();He!==null&&la(He,q,-1/0,W.sortObjects)}la(A,q,0,W.sortObjects),B.finish(),W.sortObjects===!0&&B.sort(ae,xe),Et=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Et&&Ee.addToRenderList(B,A),this.info.render.frame++,Ut===!0&&Be.beginShadows();const te=I.state.shadowsArray;if(be.render(te,A,q),Ut===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&P.hasRenderPass())===!1){const He=B.opaque,Re=B.transmissive;if(I.setupLights(),q.isArrayCamera){const qe=q.cameras;if(Re.length>0)for(let et=0,ct=qe.length;et<ct;et++){const ut=qe[et];Mi(He,Re,A,ut)}Et&&Ee.render(A);for(let et=0,ct=qe.length;et<ct;et++){const ut=qe[et];mo(B,A,ut,ut.viewport)}}else Re.length>0&&Mi(He,Re,A,q),Et&&Ee.render(A),mo(B,A,q)}G!==null&&le===0&&(E.updateMultisampleRenderTarget(G),E.updateRenderTargetMipmap(G)),ne&&P.end(W),A.isScene===!0&&A.onAfterRender(W,A,q),Te.resetDefaultState(),Q=-1,X=null,M.pop(),M.length>0?(I=M[M.length-1],E.setTextureUnits(I.state.textureUnits),Ut===!0&&Be.setGlobalState(W.clippingPlanes,I.state.camera)):I=null,F.pop(),F.length>0?B=F[F.length-1]:B=null,Y!==null&&Y.renderEnd()};function la(A,q,se,ne){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)I.pushLightProbeGrid(A);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||tt.intersectsSprite(A)){ne&&$e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(wt);const He=Me.update(A),Re=A.material;Re.visible&&B.push(A,He,Re,se,$e.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||tt.intersectsObject(A))){const He=Me.update(A),Re=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$e.copy(A.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),$e.copy(He.boundingSphere.center)),$e.applyMatrix4(A.matrixWorld).applyMatrix4(wt)),Array.isArray(Re)){const qe=He.groups;for(let et=0,ct=qe.length;et<ct;et++){const ut=qe[et],Ke=Re[ut.materialIndex];Ke&&Ke.visible&&B.push(A,He,Ke,se,$e.z,ut)}}else Re.visible&&B.push(A,He,Re,se,$e.z,null)}}const Ne=A.children;for(let He=0,Re=Ne.length;He<Re;He++)la(Ne[He],q,se,ne)}function mo(A,q,se,ne){const{opaque:te,transmissive:Ne,transparent:He}=A;I.setupLightsView(se),Ut===!0&&Be.setGlobalState(W.clippingPlanes,se),ne&&Le.viewport($.copy(ne)),te.length>0&&zr(te,q,se),Ne.length>0&&zr(Ne,q,se),He.length>0&&zr(He,q,se),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Mi(A,q,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ne.id]===void 0){const Ke=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ne.id]=new Fi(1,1,{generateMipmaps:!0,type:Ke?or:Kn,minFilter:ls,samples:Math.max(4,Lt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ne=I.state.transmissionRenderTarget[ne.id],He=ne.viewport||$;Ne.setSize(He.z*W.transmissionResolutionScale,He.w*W.transmissionResolutionScale);const Re=W.getRenderTarget(),qe=W.getActiveCubeFace(),et=W.getActiveMipmapLevel();W.setRenderTarget(Ne),W.getClearColor(O),Z=W.getClearAlpha(),Z<1&&W.setClearColor(16777215,.5),W.clear(),Et&&Ee.render(se);const ct=W.toneMapping;W.toneMapping=Ui;const ut=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),I.setupLightsView(ne),Ut===!0&&Be.setGlobalState(W.clippingPlanes,ne),zr(A,se,ne),E.updateMultisampleRenderTarget(Ne),E.updateRenderTargetMipmap(Ne),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let At=0,zt=q.length;At<zt;At++){const jt=q[At],{object:Ft,geometry:nn,material:ze,group:mn}=jt;if(ze.side===ir&&Ft.layers.test(ne.layers)){const _t=ze.side;ze.side=Vn,ze.needsUpdate=!0,ca(Ft,se,ne,nn,ze,mn),ze.side=_t,ze.needsUpdate=!0,Ke=!0}}Ke===!0&&(E.updateMultisampleRenderTarget(Ne),E.updateRenderTargetMipmap(Ne))}W.setRenderTarget(Re,qe,et),W.setClearColor(O,Z),ut!==void 0&&(ne.viewport=ut),W.toneMapping=ct}function zr(A,q,se){const ne=q.isScene===!0?q.overrideMaterial:null;for(let te=0,Ne=A.length;te<Ne;te++){const He=A[te],{object:Re,geometry:qe,group:et}=He;let ct=He.material;ct.allowOverride===!0&&ne!==null&&(ct=ne),Re.layers.test(se.layers)&&ca(Re,q,se,qe,ct,et)}}function ca(A,q,se,ne,te,Ne){A.onBeforeRender(W,q,se,ne,te,Ne),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(W,q,se,ne,A,Ne),te.transparent===!0&&te.side===ir&&te.forceSinglePass===!1?(te.side=Vn,te.needsUpdate=!0,W.renderBufferDirect(se,q,ne,te,A,Ne),te.side=Or,te.needsUpdate=!0,W.renderBufferDirect(se,q,ne,te,A,Ne),te.side=ir):W.renderBufferDirect(se,q,ne,te,A,Ne),A.onAfterRender(W,q,se,ne,te,Ne)}function gs(A,q,se){q.isScene!==!0&&(q=Mt);const ne=R.get(A),te=I.state.lights,Ne=I.state.shadowsArray,He=te.state.version,Re=Pe.getParameters(A,te.state,Ne,q,se,I.state.lightProbeGridArray),qe=Pe.getProgramCacheKey(Re);let et=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const ct=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=K.get(A.envMap||ne.environment,ct),ne.envMapRotation=ne.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",Qe),et=new Map,ne.programs=et);let ut=et.get(qe);if(ut!==void 0){if(ne.currentProgram===ut&&ne.lightsStateVersion===He)return fa(A,Re),ut}else Re.uniforms=Pe.getUniforms(A),Y!==null&&A.isNodeMaterial&&Y.build(A,se,Re),A.onBeforeCompile(Re,W),ut=Pe.acquireProgram(Re,qe),et.set(qe,ut),ne.uniforms=Re.uniforms;const Ke=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=Be.uniform),fa(A,Re),ne.needsLights=dc(A),ne.lightsStateVersion=He,ne.needsLights&&(Ke.ambientLightColor.value=te.state.ambient,Ke.lightProbe.value=te.state.probe,Ke.directionalLights.value=te.state.directional,Ke.directionalLightShadows.value=te.state.directionalShadow,Ke.spotLights.value=te.state.spot,Ke.spotLightShadows.value=te.state.spotShadow,Ke.rectAreaLights.value=te.state.rectArea,Ke.ltc_1.value=te.state.rectAreaLTC1,Ke.ltc_2.value=te.state.rectAreaLTC2,Ke.pointLights.value=te.state.point,Ke.pointLightShadows.value=te.state.pointShadow,Ke.hemisphereLights.value=te.state.hemi,Ke.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ke.spotLightMatrix.value=te.state.spotLightMatrix,Ke.spotLightMap.value=te.state.spotLightMap,Ke.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=I.state.lightProbeGridArray.length>0,ne.currentProgram=ut,ne.uniformsList=null,ut}function ua(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Zl.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function fa(A,q){const se=R.get(A);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function go(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;L.setFromMatrixPosition(q.matrixWorld);for(let se=0,ne=A.length;se<ne;se++){const te=A[se];if(te.texture!==null&&te.boundingBox.containsPoint(L))return te}return null}function _o(A,q,se,ne,te){q.isScene!==!0&&(q=Mt),E.resetTextureUnits();const Ne=q.fog,He=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,Re=G===null?W.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Tt.workingColorSpace,qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,et=K.get(ne.envMap||He,qe),ct=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ut=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ke=!!se.morphAttributes.position,At=!!se.morphAttributes.normal,zt=!!se.morphAttributes.color;let jt=Ui;ne.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(jt=W.toneMapping);const Ft=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,nn=Ft!==void 0?Ft.length:0,ze=R.get(ne),mn=I.state.lights;if(Ut===!0&&(ft===!0||A!==X)){const Ot=A===X&&ne.id===Q;Be.setState(ne,A,Ot)}let _t=!1;ne.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==mn.state.version||ze.outputColorSpace!==Re||te.isBatchedMesh&&ze.batching===!1||!te.isBatchedMesh&&ze.batching===!0||te.isBatchedMesh&&ze.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&ze.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&ze.instancing===!1||!te.isInstancedMesh&&ze.instancing===!0||te.isSkinnedMesh&&ze.skinning===!1||!te.isSkinnedMesh&&ze.skinning===!0||te.isInstancedMesh&&ze.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ze.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&ze.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&ze.instancingMorph===!1&&te.morphTexture!==null||ze.envMap!==et||ne.fog===!0&&ze.fog!==Ne||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Be.numPlanes||ze.numIntersection!==Be.numIntersection)||ze.vertexAlphas!==ct||ze.vertexTangents!==ut||ze.morphTargets!==Ke||ze.morphNormals!==At||ze.morphColors!==zt||ze.toneMapping!==jt||ze.morphTargetsCount!==nn||!!ze.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,ze.__version=ne.version);let Nn=ze.currentProgram;_t===!0&&(Nn=gs(ne,q,te),Y&&ne.isNodeMaterial&&Y.onUpdateProgram(ne,Nn,ze));let Ln=!1,vt=!1,Gi=!1;const It=Nn.getUniforms(),Gt=ze.uniforms;if(Le.useProgram(Nn.program)&&(Ln=!0,vt=!0,Gi=!0),ne.id!==Q&&(Q=ne.id,vt=!0),ze.needsLights){const Ot=go(I.state.lightProbeGridArray,te);ze.lightProbeGrid!==Ot&&(ze.lightProbeGrid=Ot,vt=!0)}if(Ln||X!==A){Le.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(H,"projectionMatrix",A.projectionMatrix),It.setValue(H,"viewMatrix",A.matrixWorldInverse);const ci=It.map.cameraPosition;ci!==void 0&&ci.setValue(H,rt.setFromMatrixPosition(A.matrixWorld)),Lt.logarithmicDepthBuffer&&It.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&It.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),X!==A&&(X=A,vt=!0,Gi=!0)}if(ze.needsLights&&(mn.state.directionalShadowMap.length>0&&It.setValue(H,"directionalShadowMap",mn.state.directionalShadowMap,E),mn.state.spotShadowMap.length>0&&It.setValue(H,"spotShadowMap",mn.state.spotShadowMap,E),mn.state.pointShadowMap.length>0&&It.setValue(H,"pointShadowMap",mn.state.pointShadowMap,E)),te.isSkinnedMesh){It.setOptional(H,te,"bindMatrix"),It.setOptional(H,te,"bindMatrixInverse");const Ot=te.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),It.setValue(H,"boneTexture",Ot.boneTexture,E))}te.isBatchedMesh&&(It.setOptional(H,te,"batchingTexture"),It.setValue(H,"batchingTexture",te._matricesTexture,E),It.setOptional(H,te,"batchingIdTexture"),It.setValue(H,"batchingIdTexture",te._indirectTexture,E),It.setOptional(H,te,"batchingColorTexture"),te._colorsTexture!==null&&It.setValue(H,"batchingColorTexture",te._colorsTexture,E));const li=se.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&st.update(te,se,Nn),(vt||ze.receiveShadow!==te.receiveShadow)&&(ze.receiveShadow=te.receiveShadow,It.setValue(H,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(Gt.envMapIntensity.value=q.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=B1()),vt){if(It.setValue(H,"toneMappingExposure",W.toneMappingExposure),ze.needsLights&&fc(Gt,Gi),Ne&&ne.fog===!0&&fe.refreshFogUniforms(Gt,Ne),fe.refreshMaterialUniforms(Gt,ne,Fe,Ge,I.state.transmissionRenderTarget[A.id]),ze.needsLights&&ze.lightProbeGrid){const Ot=ze.lightProbeGrid;Gt.probesSH.value=Ot.texture,Gt.probesMin.value.copy(Ot.boundingBox.min),Gt.probesMax.value.copy(Ot.boundingBox.max),Gt.probesResolution.value.copy(Ot.resolution)}Zl.upload(H,ua(ze),Gt,E)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Zl.upload(H,ua(ze),Gt,E),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&It.setValue(H,"center",te.center),It.setValue(H,"modelViewMatrix",te.modelViewMatrix),It.setValue(H,"normalMatrix",te.normalMatrix),It.setValue(H,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const Ot=ne.uniformsGroups;for(let ci=0,Ei=Ot.length;ci<Ei;ci++){const Vr=Ot[ci];he.update(Vr,Nn),he.bind(Vr,Nn)}}return Nn}function fc(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function dc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,q,se){const ne=R.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),R.get(A.texture).__webglTexture=q,R.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:se,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const se=R.get(A);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0};const $t=H.createFramebuffer();this.setRenderTarget=function(A,q=0,se=0){G=A,re=q,le=se;let ne=null,te=!1,Ne=!1;if(A){const Re=R.get(A);if(Re.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(H.FRAMEBUFFER,Re.__webglFramebuffer),$.copy(A.viewport),ce.copy(A.scissor),ue=A.scissorTest,Le.viewport($),Le.scissor(ce),Le.setScissorTest(ue),Q=-1;return}else if(Re.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Re.__hasExternalTextures)E.rebindTextures(A,R.get(A.texture).__webglTexture,R.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ct=A.depthTexture;if(Re.__boundDepthTexture!==ct){if(ct!==null&&R.has(ct)&&(A.width!==ct.image.width||A.height!==ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ne=!0);const et=R.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(et[q])?ne=et[q][se]:ne=et[q],te=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?ne=R.get(A).__webglMultisampledFramebuffer:Array.isArray(et)?ne=et[se]:ne=et,$.copy(A.viewport),ce.copy(A.scissor),ue=A.scissorTest}else $.copy(me).multiplyScalar(Fe).floor(),ce.copy(we).multiplyScalar(Fe).floor(),ue=Ze;if(se!==0&&(ne=$t),Le.bindFramebuffer(H.FRAMEBUFFER,ne)&&Le.drawBuffers(A,ne),Le.viewport($),Le.scissor(ce),Le.setScissorTest(ue),te){const Re=R.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Re.__webglTexture,se)}else if(Ne){const Re=q;for(let qe=0;qe<A.textures.length;qe++){const et=R.get(A.textures[qe]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+qe,et.__webglTexture,se,Re)}}else if(A!==null&&se!==0){const Re=R.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Re.__webglTexture,se)}Q=-1},this.readRenderTargetPixels=function(A,q,se,ne,te,Ne,He,Re=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=R.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe){Le.bindFramebuffer(H.FRAMEBUFFER,qe);try{const et=A.textures[Re],ct=et.format,ut=et.type;if(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Re),!Lt.textureFormatReadable(ct)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(ut)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ne&&se>=0&&se<=A.height-te&&H.readPixels(q,se,ne,te,V.convert(ct),V.convert(ut),Ne)}finally{const et=G!==null?R.get(G).__webglFramebuffer:null;Le.bindFramebuffer(H.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(A,q,se,ne,te,Ne,He,Re=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=R.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe)if(q>=0&&q<=A.width-ne&&se>=0&&se<=A.height-te){Le.bindFramebuffer(H.FRAMEBUFFER,qe);const et=A.textures[Re],ct=et.format,ut=et.type;if(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Re),!Lt.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ke),H.bufferData(H.PIXEL_PACK_BUFFER,Ne.byteLength,H.STREAM_READ),H.readPixels(q,se,ne,te,V.convert(ct),V.convert(ut),0);const At=G!==null?R.get(G).__webglFramebuffer:null;Le.bindFramebuffer(H.FRAMEBUFFER,At);const zt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await ex(H,zt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ke),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ne),H.deleteBuffer(Ke),H.deleteSync(zt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,se=0){const ne=Math.pow(2,-se),te=Math.floor(A.image.width*ne),Ne=Math.floor(A.image.height*ne),He=q!==null?q.x:0,Re=q!==null?q.y:0;E.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,se,0,0,He,Re,te,Ne),Le.unbindTexture()};const hc=H.createFramebuffer(),da=H.createFramebuffer();this.copyTextureToTexture=function(A,q,se=null,ne=null,te=0,Ne=0){let He,Re,qe,et,ct,ut,Ke,At,zt;const jt=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(se!==null)He=se.max.x-se.min.x,Re=se.max.y-se.min.y,qe=se.isBox3?se.max.z-se.min.z:1,et=se.min.x,ct=se.min.y,ut=se.isBox3?se.min.z:0;else{const Gt=Math.pow(2,-te);He=Math.floor(jt.width*Gt),Re=Math.floor(jt.height*Gt),A.isDataArrayTexture?qe=jt.depth:A.isData3DTexture?qe=Math.floor(jt.depth*Gt):qe=1,et=0,ct=0,ut=0}ne!==null?(Ke=ne.x,At=ne.y,zt=ne.z):(Ke=0,At=0,zt=0);const Ft=V.convert(q.format),nn=V.convert(q.type);let ze;q.isData3DTexture?(E.setTexture3D(q,0),ze=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(E.setTexture2DArray(q,0),ze=H.TEXTURE_2D_ARRAY):(E.setTexture2D(q,0),ze=H.TEXTURE_2D),Le.activeTexture(H.TEXTURE0),Le.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),Le.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Le.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const mn=Le.getParameter(H.UNPACK_ROW_LENGTH),_t=Le.getParameter(H.UNPACK_IMAGE_HEIGHT),Nn=Le.getParameter(H.UNPACK_SKIP_PIXELS),Ln=Le.getParameter(H.UNPACK_SKIP_ROWS),vt=Le.getParameter(H.UNPACK_SKIP_IMAGES);Le.pixelStorei(H.UNPACK_ROW_LENGTH,jt.width),Le.pixelStorei(H.UNPACK_IMAGE_HEIGHT,jt.height),Le.pixelStorei(H.UNPACK_SKIP_PIXELS,et),Le.pixelStorei(H.UNPACK_SKIP_ROWS,ct),Le.pixelStorei(H.UNPACK_SKIP_IMAGES,ut);const Gi=A.isDataArrayTexture||A.isData3DTexture,It=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const Gt=R.get(A),li=R.get(q),Ot=R.get(Gt.__renderTarget),ci=R.get(li.__renderTarget);Le.bindFramebuffer(H.READ_FRAMEBUFFER,Ot.__webglFramebuffer),Le.bindFramebuffer(H.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let Ei=0;Ei<qe;Ei++)Gi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,R.get(A).__webglTexture,te,ut+Ei),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,R.get(q).__webglTexture,Ne,zt+Ei)),H.blitFramebuffer(et,ct,He,Re,Ke,At,He,Re,H.DEPTH_BUFFER_BIT,H.NEAREST);Le.bindFramebuffer(H.READ_FRAMEBUFFER,null),Le.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||R.has(A)){const Gt=R.get(A),li=R.get(q);Le.bindFramebuffer(H.READ_FRAMEBUFFER,hc),Le.bindFramebuffer(H.DRAW_FRAMEBUFFER,da);for(let Ot=0;Ot<qe;Ot++)Gi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.__webglTexture,te,ut+Ot):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Gt.__webglTexture,te),It?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,li.__webglTexture,Ne,zt+Ot):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,li.__webglTexture,Ne),te!==0?H.blitFramebuffer(et,ct,He,Re,Ke,At,He,Re,H.COLOR_BUFFER_BIT,H.NEAREST):It?H.copyTexSubImage3D(ze,Ne,Ke,At,zt+Ot,et,ct,He,Re):H.copyTexSubImage2D(ze,Ne,Ke,At,et,ct,He,Re);Le.bindFramebuffer(H.READ_FRAMEBUFFER,null),Le.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else It?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(ze,Ne,Ke,At,zt,He,Re,qe,Ft,nn,jt.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(ze,Ne,Ke,At,zt,He,Re,qe,Ft,jt.data):H.texSubImage3D(ze,Ne,Ke,At,zt,He,Re,qe,Ft,nn,jt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ne,Ke,At,He,Re,Ft,nn,jt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ne,Ke,At,jt.width,jt.height,Ft,jt.data):H.texSubImage2D(H.TEXTURE_2D,Ne,Ke,At,He,Re,Ft,nn,jt);Le.pixelStorei(H.UNPACK_ROW_LENGTH,mn),Le.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_t),Le.pixelStorei(H.UNPACK_SKIP_PIXELS,Nn),Le.pixelStorei(H.UNPACK_SKIP_ROWS,Ln),Le.pixelStorei(H.UNPACK_SKIP_IMAGES,vt),Ne===0&&q.generateMipmaps&&H.generateMipmap(ze),Le.unbindTexture()},this.initRenderTarget=function(A){R.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),Le.unbindTexture()},this.resetState=function(){re=0,le=0,G=null,Le.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=s=>{const e=G1(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},W1=Ct.createContext({}),j1=()=>Ct.useContext(W1),X1=Ct.forwardRef(({color:s,size:e,strokeWidth:n,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},h)=>{const{size:m=24,strokeWidth:x=2,absoluteStrokeWidth:S=!1,color:g="currentColor",className:y=""}=j1()??{},w=r??S?Number(n??x)*24/Number(e??m):n??x;return Ct.createElement("svg",{ref:h,...Rf,width:e??m??Rf.width,height:e??m??Rf.height,stroke:s??g,strokeWidth:w,className:m0("lucide",y,o),...!l&&!H1(d)&&{"aria-hidden":"true"},...d},[...u.map(([C,v])=>Ct.createElement(C,v)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=(s,e)=>{const n=Ct.forwardRef(({className:r,...o},l)=>Ct.createElement(X1,{ref:l,iconNode:e,className:m0(`lucide-${V1(Ag(s))}`,`lucide-${s}`,r),...o}));return n.displayName=Ag(s),n};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Y1=an("activity",q1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],K1=an("calendar-days",$1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Q1=an("camera",Z1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],eT=an("chevron-down",J1);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],g0=an("clipboard-list",tT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],iT=an("download",nT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],sT=an("dumbbell",rT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],_0=an("flame",aT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],v0=an("gauge",oT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]],x0=an("goal",lT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],uT=an("leaf",cT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["path",{d:"M5 12h14",key:"1ays0h"}]],S0=an("minus",fT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],y0=an("plus",dT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Hd=an("rotate-ccw",hT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],mT=an("settings-2",pT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]],_T=an("shopping-basket",gT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],M0=an("sparkles",vT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],E0=an("utensils",xT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],yT=an("x",ST);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ET=an("zap",MT),T0=s=>`./assets/${s}`,Wd=s=>T0(`generated/${s}`),bg={p:140,c:225,f:60,kcal:2e3},TT=2900,wT=135,w0={pasta:{name:"意面 · Garlic oil",short:"意面",sub:"力量日最爽",unit:"g",step:10,perUnit:{p:.12,c:.71,f:.015},kcalUnit:3.55,color:"#ffb55c"},soba:{name:"荞麦面 · Soba",short:"荞麦",sub:"清爽低负担",unit:"g",step:10,perUnit:{p:.14,c:.66,f:.023},kcalUnit:3.44,color:"#a8d46f"},nissin:{name:"日清非油炸",short:"日清",sub:"懒人汤面",unit:"包",step:1,perUnit:{p:6.7,c:55,f:4.9},kcalUnit:291,color:"#ff766f"},pho:{name:"越南米粉",short:"米粉",sub:"低脂换口味",unit:"包",step:1,perUnit:{p:4,c:43,f:2},kcalUnit:210,color:"#7bd6d0"},bifun:{name:"纯干米粉",short:"干米粉",sub:"纯碳水补满",unit:"g",step:10,perUnit:{p:.06,c:.79,f:.005},kcalUnit:3.45,color:"#f7df77"}},A0={beef:{label:"牛肉切り落とし",short:"牛肉",tag:"raw · per g",unit:"g",step:10,p:.19,c:0,max:650,note:"脂肪按包装校准"},chicken:{label:"速食鸡胸",short:"鸡胸",tag:"per pack",unit:"块",step:1,p:22,c:1,f:2,max:6,note:"最稳高蛋白"},duck:{label:"合鸭胸去皮",short:"合鸭",tag:"100g serve",unit:"份",step:1,p:21,c:.5,f:6,max:4,note:"香但不太肥"},kfc:{label:"KFC 原味鸡",short:"KFC",tag:"per piece",unit:"块",step:1,p:18,c:8,f:14,max:5,note:"爽，但盐高"},oikos:{label:"Oikos 高蛋白酸奶",short:"Oikos",tag:"per cup",unit:"個",step:1,p:12,c:5,f:0,max:8,note:"零脂补蛋白"}},b0={egg_fried:{label:"煎蛋",short:"煎蛋",unit:"个",step:1,p:6,c:.4,f:7,max:6},sauce:{label:"ペペロン酱",short:"蒜油酱",unit:"包",step:1,p:.9,c:1.5,f:10,max:2},olive:{label:"橄榄油",short:"橄榄油",unit:"小勺",step:1,p:0,c:0,f:4.5,max:6},nuts:{label:"素焼きナッツ",short:"坚果",unit:"10g",step:1,p:2,c:2,f:5,max:5},avocado:{label:"アボカド",short:"牛油果",unit:"半个",step:1,p:1,c:4,f:15,max:2}},Js={banana:{label:"香蕉",unit:"根",step:1,max:4,p:1,c:27,f:.3},apple:{label:"苹果",unit:"个",step:1,max:3,p:.4,c:35,f:.3},kiwi:{label:"奇异果",unit:"个",step:1,max:4,p:1,c:14,f:.2},pineapple:{label:"切块菠萝 240g",unit:"盒",step:1,max:2,p:1.44,c:31.2,f:.24},yogurt:{label:"无糖酸奶",unit:"g",step:50,max:400,p:.036,c:.049,f:.03}},C0={chicken:{label:"鸡胸",unit:"块",step:1,max:10,p:22,c:1,f:2},egg:{label:"全蛋",unit:"个",step:1,max:10,p:6,c:.5,f:5},oikos:{label:"Oikos",unit:"個",step:1,max:6,p:12,c:5,f:0},onigiri:{label:"饭团",unit:"个",step:1,max:6,p:3,c:39,f:.5},nissin:{label:"日清面",unit:"包",step:1,max:4,p:6.7,c:55,f:4.9},rice:{label:"米饭",unit:"g",step:50,max:1e3,p:.026,c:.28,f:.003},beef:{label:"牛肉",unit:"g",step:50,max:600,p:.19,c:0,f:.072},pasta:{label:"干意面",unit:"g",step:50,max:300,p:.12,c:.71,f:.015},banana:{label:"香蕉",unit:"根",step:1,max:4,p:1,c:27,f:.25}},R0={chicken:{label:"鸡胸",unit:"块",step:1,max:5,p:22,c:1,f:2},eggs:{label:"全蛋",unit:"个",step:1,max:6,p:6,c:.5,f:5},banana:{label:"香蕉",unit:"根",step:1,max:4,p:1,c:27,f:.25},pineapple:{label:"菠萝 240g",unit:"盒",step:1,max:2,p:1.44,c:31.2,f:.24},oikos:{label:"Oikos",unit:"個",step:1,max:5,p:12,c:5,f:0}},ro={tomato:{label:"无盐番茄汁",sub:"K 600 / 200ml",p:1.8,c:7.1,f:0,kcal:39,k:600,na:5},yasai:{label:"野菜一日",sub:"K 740 / 200ml",p:3,c:14.5,f:0,kcal:75,k:740,na:80},none:{label:"不补钾",sub:"今天省了",p:0,c:0,f:0,kcal:0,k:0,na:0}},P0=[{id:"burger",label:"汉堡 + 薯条",kcal:980},{id:"ramen",label:"拉面 + 饭",kcal:1200},{id:"sushi",label:"回转寿司 12 皿",kcal:1050},{id:"pizza",label:"Pizza 半张",kcal:1150},{id:"dessert",label:"甜品奶茶",kcal:620},{id:"katsu",label:"炸猪排咖喱",kcal:1450}],AT=[{id:"plan",label:"今日",icon:E0},{id:"detail",label:"明细",icon:v0},{id:"shop",label:"采购",icon:_T},{id:"cheat",label:"放松",icon:_0}],Ir={p:0,c:0,f:0,kcal:0},zn=(s,e,n)=>Math.max(e,Math.min(n,Number(s)||0)),oi=(s,e=0)=>Number((Number(s)||0).toFixed(e)),po=s=>s.kcal??s.p*4+s.c*4+s.f*9,lo=s=>({...s,kcal:po(s)}),nr=(...s)=>lo(s.reduce((e,n)=>({p:e.p+((n==null?void 0:n.p)||0),c:e.c+((n==null?void 0:n.c)||0),f:e.f+((n==null?void 0:n.f)||0),kcal:e.kcal+po(n||Ir)}),{...Ir}));function Pi(s,e){return lo({p:s.p*e,c:s.c*e,f:s.f*e})}function Pf(s,e){return!Number.isFinite(s)||s<=0?0:Math.max(0,Math.round(s/e)*e)}function bT(s){return lo({p:s*.31/4,c:s*.49/4,f:s*.2/9,kcal:s})}function CT(s,e){const n=A0[s];return{...n,f:s==="beef"?e*.8/100:n.f}}function RT(s,e){const[n,r]=Ct.useState(()=>{const o=Number(localStorage.getItem(s));return Number.isFinite(o)&&o>0?o:e});return Ct.useEffect(()=>{localStorage.setItem(s,String(n))},[s,n]),[n,r]}function PT({tone:s="warm"}){const e=Ct.useRef(null);return Ct.useEffect(()=>{const n=e.current;if(!n)return;const r=()=>{const F=document.createElement("canvas");F.dataset.engine="2d-fallback";const M=F.getContext("2d");n.appendChild(F);const P=()=>{const{width:le,height:G}=n.getBoundingClientRect(),Q=Math.min(window.devicePixelRatio||1,2);F.width=Math.max(1,Math.floor(le*Q)),F.height=Math.max(1,Math.floor(G*Q)),F.style.width=`${Math.max(1,le)}px`,F.style.height=`${Math.max(1,G)}px`,M.setTransform(Q,0,0,Q,0,0)};P();const W=new ResizeObserver(P);W.observe(n);let k=0;const Y=Array.from({length:46},(le,G)=>({angle:G*.72,radius:70+G%9*22,color:["#ff8068","#ffcf69","#a8d46f"][G%3],size:2.5+G%5})),re=()=>{k=window.requestAnimationFrame(re);const{width:le,height:G}=F.getBoundingClientRect();M.clearRect(0,0,le,G);const Q=M.createRadialGradient(le*.55,G*.28,0,le*.55,G*.28,Math.max(le,G)*.75);Q.addColorStop(0,"rgba(255,207,105,0.18)"),Q.addColorStop(.45,"rgba(255,128,104,0.08)"),Q.addColorStop(1,"rgba(0,0,0,0)"),M.fillStyle=Q,M.fillRect(0,0,le,G),M.globalCompositeOperation="screen",Y.forEach(X=>{X.angle+=.006;const $=le*.5+Math.cos(X.angle)*X.radius*(le/390),ce=G*.46+Math.sin(X.angle)*X.radius*.52*(G/844);M.beginPath(),M.fillStyle=X.color,M.globalAlpha=.38,M.arc($,ce,X.size,0,Math.PI*2),M.fill()}),M.globalAlpha=1,M.globalCompositeOperation="source-over"};return re(),()=>{window.cancelAnimationFrame(k),W.disconnect(),n.removeChild(F)}},o=document.createElement("canvas");let l=!1;try{l=!!(o.getContext("webgl2")||o.getContext("webgl"))}catch{l=!1}if(!l)return r();const u=new gx,d=new $n(45,1,.1,100);d.position.set(0,0,9);let h;try{h=new z1({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{return r()}h.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),h.setClearColor(0,0),n.appendChild(h.domElement);const m=new no;u.add(m),u.add(new Gx(16777215,.75));const x=new eg(16760179,3.4,22);x.position.set(4,2,6),u.add(x);const S=new eg(9752970,2.1,18);S.position.set(-5,-2,4),u.add(S);const g=s==="cool"?[8640255,11064431,16764777]:[16747377,16764777,11064431],y=new Gd(.16,32,32),w=g.flatMap((F,M)=>{const P=new Ox({color:F,emissive:F,emissiveIntensity:.22,roughness:.22,metalness:.24});return Array.from({length:9},(W,k)=>{const Y=new ki(y,P),re=k/9*Math.PI*2+M*.55,le=2.05+M*.68;return Y.position.set(Math.cos(re)*le,Math.sin(re)*le*.48,M*-.4),Y.userData={angle:re,radius:le,band:M,speed:.004+M*.0015},m.add(Y),Y})});[2.05,2.75,3.45].forEach((F,M)=>{const W=new Nx(0,0,F,F*.48,0,Math.PI*2).getPoints(120).map(le=>new J(le.x,le.y,-.5+M*-.2)),k=new Gn().setFromPoints(W),Y=new Jg({color:g[M],transparent:!0,opacity:.22}),re=new bx(k,Y);re.rotation.z=M*.34,m.add(re)});const C=120,v=new Gn,_=new Float32Array(C*3);for(let F=0;F<C;F+=1){const M=F*1.618,P=1.5+F*37%100/22;_[F*3]=Math.cos(M)*P,_[F*3+1]=Math.sin(M*.9)*P*.42,_[F*3+2]=-2.2-F*17%80/32}v.setAttribute("position",new yi(_,3));const b=new Cx(v,new e0({color:16769443,size:.035,transparent:!0,opacity:.46}));u.add(b);const N=()=>{const{width:F,height:M}=n.getBoundingClientRect();h.setSize(Math.max(1,F),Math.max(1,M),!1),d.aspect=Math.max(1,F)/Math.max(1,M),d.updateProjectionMatrix()};N();const L=new ResizeObserver(N);L.observe(n);let B=0;const I=()=>{B=window.requestAnimationFrame(I),m.rotation.z+=.0018,m.rotation.y=Math.sin(Date.now()*35e-5)*.18,b.rotation.z-=9e-4,w.forEach(F=>{F.userData.angle+=F.userData.speed;const{angle:M,radius:P,band:W}=F.userData;F.position.x=Math.cos(M)*P,F.position.y=Math.sin(M)*P*.48,F.position.z=-.25-W*.42+Math.sin(M*2)*.12}),h.render(u,d)};return I(),()=>{window.cancelAnimationFrame(B),L.disconnect(),h.dispose(),y.dispose(),v.dispose(),n.removeChild(h.domElement)}},[s]),D.jsx("div",{ref:e,className:"pointer-events-none fixed inset-0 -z-10 opacity-70","data-three-orbit":!0})}function NT(){const[s,e]=Ct.useState("plan"),[n,r]=Ct.useState(bg),[o,l]=RT("cutting:tdee",TT),[u,d]=Ct.useState("quick"),[h,m]=Ct.useState(800),[x,S]=Ct.useState({}),[g,y]=Ct.useState("pasta"),[w,C]=Ct.useState(["beef"]),[v,_]=Ct.useState(["sauce","egg_fried"]),[b,N]=Ct.useState({}),[L,B]=Ct.useState(13),[I,F]=Ct.useState({}),[M,P]=Ct.useState("tomato"),[W,k]=Ct.useState(400),[Y,re]=Ct.useState(6.5),[le,G]=Ct.useState(2e3),[Q,X]=Ct.useState(7),[$,ce]=Ct.useState(!1),[ue,O]=Ct.useState(!1),[Z,Ue]=Ct.useState({name:"手动加餐",p:0,c:0,f:0,kcal:0}),[Ge,Fe]=Ct.useState({}),ae=(rt,$e,Mt,Et=1/0)=>{rt(Yt=>{const H=zn(Mt,0,Et),yt={...Yt};return H>0?yt[$e]=H:delete yt[$e],yt})},xe=rt=>{C($e=>$e.includes(rt)?$e.length>1?$e.filter(Mt=>Mt!==rt):$e:[...$e,rt])},me=rt=>{_($e=>$e.includes(rt)?$e.filter(Mt=>Mt!==rt):[...$e,rt])},we=Ct.useMemo(()=>{var _e,je;const rt=Object.entries(x).reduce((Ie,[Qe,pt])=>nr(Ie,Pi(C0[Qe],pt)),Ir),$e=u==="tally"&&rt.kcal>0?rt:bT(h),Mt=Object.entries(I).reduce((Ie,[Qe,pt])=>nr(Ie,Pi(R0[Qe],pt)),Ir),Et=ro[M]||ro.none,Yt=lo(Pi(Et,W/200));Yt.kcal=Et.kcal*(W/200);const H=lo(Z),yt=nr($e,Mt,Yt,H),dt=Object.entries(b).filter(([Ie,Qe])=>Js[Ie]&&Qe>0),Lt=dt.reduce((Ie,[Qe,pt])=>nr(Ie,Pi(Js[Qe],pt)),Ir),Le=dt.map(([Ie,Qe])=>({key:`extra-${Ie}`,name:Js[Ie].label,qty:Qe,unit:Js[Ie].unit,macro:Pi(Js[Ie],Qe),tone:"gold"})),Bt=Math.max(0,Math.min(wT,n.p)-yt.p),R=w.map(Ie=>{const Qe=CT(Ie,L),pt=Bt/Math.max(1,w.length)/Qe.p,en=zn(Pf(pt,Qe.step),0,Qe.max);return{key:Ie,name:Qe.label,short:Qe.short,qty:en,unit:Qe.unit,macro:Pi(Qe,en),tone:"red"}}).filter(Ie=>Ie.qty>0),E=R.reduce((Ie,Qe)=>nr(Ie,Qe.macro),Ir),K=Math.max(0,n.f-yt.f-Lt.f-E.f),pe=v.length?v:[],ge=pe.map(Ie=>{const Qe=b0[Ie],pt=K/Math.max(1,pe.length)/Qe.f,en=zn(Pf(pt,Qe.step),0,Qe.max);return{key:`fat-${Ie}`,name:Qe.label,short:Qe.short,qty:en,unit:Qe.unit,macro:Pi(Qe,en),tone:"amber"}}).filter(Ie=>Ie.qty>0),Me=ge.reduce((Ie,Qe)=>nr(Ie,Qe.macro),Ir),Pe=nr(yt,Lt,E,Me),fe=Math.max(0,n.kcal-Pe.kcal),de=w0[g],De=zn(Pf(fe/de.kcalUnit,de.step),0,de.unit==="包"?8:420),Be=Pi(de.perUnit,De),be=De>0?[{key:`carb-${g}`,name:de.name,short:de.short,qty:De,unit:de.unit,macro:Be,tone:"green"}]:[],Ee=[...R,...ge,...Le,...be],st=Ee.reduce((Ie,Qe)=>nr(Ie,Qe.macro),Ir),ot=nr(yt,st),mt=Math.round(o-ot.kcal),V=(((_e=ro[M])==null?void 0:_e.k)||0)*(W/200),Te=(((je=ro[M])==null?void 0:je.na)||0)*(W/200),he=Y*393+Te,ke=le+V,Ce=Ee.map(Ie=>({...Ie,weeklyQty:oi(Ie.qty*Q,Ie.unit==="g"?0:1)}));return{lunch:$e,pre:Mt,drink:Yt,snack:H,beforeDinner:yt,dinner:st,dinnerItems:Ee,total:ot,deficit:mt,potassium:ke,sodium:he,shopping:Ce,carb:de}},[L,g,M,W,b,v,le,h,u,I,Y,Q,Z,x,n,o,w]),Ze=P0.reduce((rt,$e)=>rt+(Ge[$e.id]||0)*$e.kcal,0),tt=Math.round(we.total.kcal+Ze-o),Ut=Z.kcal>0||Z.p>0||Z.c>0||Z.f>0,ft=()=>{r(bg),m(800),S({}),y("pasta"),C(["beef"]),_(["sauce","egg_fried"]),N({}),B(13),F({}),P("tomato"),k(400),Ue({name:"手动加餐",p:0,c:0,f:0,kcal:0})},wt=()=>{const rt={date:new Date().toISOString().slice(0,10),targets:n,lunch:we.lunch,pre:we.pre,drink:{key:M,ml:W,macro:we.drink},snack:Z,dinner:{items:we.dinnerItems,macro:we.dinner},total:we.total,deficit:we.deficit},$e=new Blob([JSON.stringify(rt,null,2)],{type:"application/json"}),Mt=URL.createObjectURL($e),Et=document.createElement("a");Et.href=Mt,Et.download=`cutting-protocol-${rt.date}.json`,Et.click(),URL.revokeObjectURL(Mt)};return D.jsxs("div",{className:"min-h-screen overflow-hidden text-zinc-50",children:[D.jsx(PT,{tone:s==="cheat"?"cool":"warm"}),D.jsx("div",{className:"fixed inset-0 -z-20 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,181,92,0.24),transparent_38%),radial-gradient(circle_at_0%_20%,rgba(122,214,208,0.16),transparent_32%),linear-gradient(135deg,#0d0f10_0%,#17120f_45%,#101615_100%)]"}),D.jsx("div",{className:"fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35"}),D.jsxs("div",{className:"mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-28 pt-4 sm:px-6 lg:px-8",children:[D.jsxs("header",{className:"sticky top-3 z-40 flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-black/35 px-2 py-2 backdrop-blur-2xl sm:gap-3 sm:px-3",children:[D.jsxs("button",{onClick:()=>e("plan"),className:"flex min-w-0 items-center gap-2 text-left",children:[D.jsx("span",{className:"grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-zinc-950",children:D.jsx(M0,{className:"h-4 w-4"})}),D.jsxs("span",{className:"hidden min-w-0 sm:block",children:[D.jsx("span",{className:"block truncate font-display text-base leading-none",children:"Cutting Lab"}),D.jsx("span",{className:"mt-1 block truncate text-[10px] uppercase tracking-[0.24em] text-zinc-400",children:"dinner pilot"})]})]}),D.jsx("nav",{className:"ml-auto hidden shrink-0 grid-cols-4 rounded-lg bg-white/7 p-1 lg:grid",children:D.jsx(Cg,{tab:s,setTab:e,mode:"top"})})]}),D.jsx(LT,{model:we,targets:n,onSnack:()=>O(!0),onDownload:wt}),s==="plan"&&D.jsx(DT,{model:we,lunchMode:u,setLunchMode:d,lunchKcal:h,setLunchKcal:m,tally:x,setTally:S,setMapQty:ae,carbPlan:g,setCarbPlan:y,proteinKeys:w,toggleProtein:xe,fatKeys:v,toggleFat:me,extraCarbs:b,setExtraCarbs:N,beefFat:L,setBeefFat:B,advancedOpen:$,setAdvancedOpen:ce,targets:n,setTargets:r,resetDefaults:ft}),s==="detail"&&D.jsx(IT,{model:we,targets:n,setTargets:r,tdee:o,setTdee:l,pre:I,setPre:F,setMapQty:ae,drinkKey:M,setDrinkKey:P,drinkMl:W,setDrinkMl:k,saltG:Y,setSaltG:re,foodK:le,setFoodK:G}),s==="shop"&&D.jsx(UT,{model:we,shopDays:Q,setShopDays:X}),s==="cheat"&&D.jsx(FT,{cheat:Ge,setCheat:Fe,cheatTotal:Ze,cheatSurplus:tt,tdee:o,dayKcal:we.total.kcal})]}),D.jsx(OT,{open:ue,setOpen:O,snack:Z,setSnack:Ue,active:Ut,dinnerSummary:we.dinnerItems.slice(0,4).map(rt=>`${rt.short||rt.name} ${oi(rt.qty)}${rt.unit}`).join(" · ")}),D.jsxs("button",{onClick:()=>O(!0),className:"fixed bottom-24 right-5 z-50 grid h-14 w-14 place-items-center rounded-lg border border-white/15 bg-[#ff8068] text-white shadow-[0_16px_40px_-18px_#ff8068] transition hover:-translate-y-0.5 lg:bottom-5","aria-label":"零食加餐",children:[D.jsx(Q1,{className:"h-6 w-6"}),Ut&&D.jsx("span",{className:"absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#a8d46f]"})]}),D.jsx("nav",{className:"fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 rounded-lg border border-white/10 bg-black/65 p-1 backdrop-blur-2xl lg:hidden",children:D.jsx(Cg,{tab:s,setTab:e,mode:"bottom"})})]})}function Cg({tab:s,setTab:e,mode:n}){return AT.map(r=>{const o=r.icon;return D.jsxs("button",{onClick:()=>e(r.id),className:`grid h-11 place-items-center rounded-md px-2 text-[11px] transition ${n==="top"?"min-w-20 grid-cols-[16px_auto] gap-1.5":"grid-rows-[18px_auto] gap-0.5"} ${s===r.id?"bg-white text-zinc-950 shadow-[0_10px_30px_-18px_rgba(255,255,255,0.9)]":"text-zinc-400 hover:bg-white/10 hover:text-white"}`,"aria-label":r.label,children:[D.jsx(o,{className:"h-4 w-4"}),D.jsx("span",{children:r.label})]},r.id)})}function LT({model:s,targets:e,onSnack:n,onDownload:r}){const o=s.deficit>=650?"text-[#a8d46f]":s.deficit>=300?"text-[#ffcf69]":"text-[#ff8068]";return D.jsxs("section",{className:"relative grid min-h-[78vh] items-end gap-6 py-4 lg:grid-cols-[minmax(0,1.03fr)_minmax(360px,0.97fr)] lg:items-center",children:[D.jsxs("div",{className:"relative order-2 lg:order-1",children:[D.jsxs("div",{className:"mb-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/8 px-3 py-2 text-xs text-zinc-300 backdrop-blur-xl",children:[D.jsx(Y1,{className:"h-4 w-4 text-[#a8d46f]"}),D.jsxs("span",{children:["83 kg · 25% BF · 16:8 IF · 今日 ",e.kcal," kcal"]})]}),D.jsxs("h1",{className:"max-w-3xl font-display text-5xl leading-[0.92] tracking-normal text-white sm:text-7xl lg:text-8xl",children:["今晚吃得",D.jsx("span",{className:"block text-[#ffcf69]",children:"刚刚好"})]}),D.jsx("p",{className:"mt-5 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base",children:"中午吃了多少，训练前垫了什么，晚餐自己收口。肉、主食、脂肪和水果都算好，打开手机先看答案。"}),D.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap",children:[D.jsx(Nf,{icon:ET,label:"零食",onClick:n}),D.jsx(Nf,{icon:iT,label:"导出",onClick:r}),D.jsx(Nf,{icon:x0,label:`${s.deficit>0?"-":"+"}${Math.abs(s.deficit)}`,sub:"今日赤字"})]})]}),D.jsxs("div",{className:"relative order-1 lg:order-2",children:[D.jsx("div",{className:"absolute -inset-8 rounded-[2rem] bg-[#ff8068]/10 blur-3xl"}),D.jsxs("div",{className:"relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] shadow-[0_30px_90px_-50px_rgba(0,0,0,0.95)] backdrop-blur-xl",children:[D.jsx("img",{src:Wd("protocol-hero.jpg"),alt:"Cutting Lab dinner visual",className:"h-[280px] w-full object-cover sm:h-[420px]"}),D.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent"}),D.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-4 sm:p-5",children:[D.jsxs("div",{className:"mb-3 flex items-end justify-between gap-3",children:[D.jsxs("div",{children:[D.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#ffcf69]",children:"今晚"}),D.jsx("div",{className:"font-display text-4xl leading-none text-white sm:text-5xl",children:Math.round(s.dinner.kcal)}),D.jsx("div",{className:"mt-1 text-xs text-zinc-400",children:"晚餐热量"})]}),D.jsxs("div",{className:`rounded-lg bg-black/45 px-3 py-2 text-right backdrop-blur ${o}`,children:[D.jsx("div",{className:"text-[10px] uppercase tracking-[0.2em] text-zinc-400",children:"今日赤字"}),D.jsxs("div",{className:"font-mono text-xl",children:[s.deficit>0?"-":"+",Math.abs(s.deficit)]})]})]}),D.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[D.jsx(Wl,{label:"P",value:s.total.p,target:e.p,unit:"g"}),D.jsx(Wl,{label:"C",value:s.total.c,target:e.c,unit:"g"}),D.jsx(Wl,{label:"F",value:s.total.f,target:e.f,unit:"g"}),D.jsx(Wl,{label:"Kcal",value:s.total.kcal,target:e.kcal,unit:""})]})]})]})]})]})}function DT(s){const{model:e,lunchMode:n,setLunchMode:r,lunchKcal:o,setLunchKcal:l,tally:u,setTally:d,setMapQty:h,carbPlan:m,setCarbPlan:x,proteinKeys:S,toggleProtein:g,fatKeys:y,toggleFat:w,extraCarbs:C,setExtraCarbs:v,beefFat:_,setBeefFat:b,advancedOpen:N,setAdvancedOpen:L,targets:B,setTargets:I,resetDefaults:F}=s;return D.jsxs("main",{className:"grid gap-6 lg:grid-cols-[0.9fr_1.1fr]",children:[D.jsxs("section",{className:"space-y-6",children:[D.jsxs(Ii,{eyebrow:"01 · 先记今天",title:"今天吃到哪了",icon:g0,children:[D.jsx(kT,{value:n,onChange:r,options:[{value:"quick",label:"直接 kcal"},{value:"tally",label:"点选记账"}]}),n==="quick"?D.jsxs("div",{className:"mt-5",children:[D.jsx("label",{className:"text-[10px] uppercase tracking-[0.24em] text-zinc-500",children:"Lunch kcal"}),D.jsxs("div",{className:"mt-2 flex items-end gap-3",children:[D.jsx("input",{type:"number",value:o,onChange:M=>l(zn(M.target.value,0,5e3)),className:"w-36 border-b border-white/20 bg-transparent font-display text-6xl leading-none text-white outline-none focus:border-[#ffcf69]"}),D.jsx("span",{className:"pb-2 text-xs uppercase tracking-[0.2em] text-zinc-500",children:"kcal"})]}),D.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:[600,700,800,900,1e3].map(M=>D.jsx(Ad,{active:o===M,onClick:()=>l(M),children:M},M))})]}):D.jsx("div",{className:"mt-5 grid gap-2 sm:grid-cols-2",children:Object.entries(C0).map(([M,P])=>D.jsx(Cd,{label:P.label,meta:`每${P.step}${P.unit} · ${Math.round(po(Pi(P,P.step)))} kcal`,value:u[M]||0,unit:P.unit,step:P.step,max:P.max,onChange:W=>h(d,M,W,P.max)},M))})]}),D.jsx(Ii,{eyebrow:"02 · 选个口味",title:"今晚想吃什么",icon:E0,children:D.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-5",children:Object.entries(w0).map(([M,P])=>D.jsxs("button",{onClick:()=>x(M),className:`rounded-lg border p-3 text-left transition ${m===M?"border-[#ffcf69] bg-[#ffcf69]/12 text-white":"border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/25 hover:text-white"}`,children:[D.jsx("div",{className:"font-cjk text-sm font-semibold",children:P.short}),D.jsx("div",{className:"mt-1 text-[10px] text-zinc-500",children:P.sub})]},M))})}),D.jsx(BT,{open:N,onToggle:()=>L(!N),title:"高级配置",subtitle:"肉、油脂、水果、牛肉脂肪、目标值",children:D.jsxs("div",{className:"grid gap-5",children:[D.jsx(Ja,{title:"晚餐蛋白",children:D.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries(A0).map(([M,P])=>D.jsx(bd,{active:S.includes(M),onClick:()=>g(M),title:P.short,meta:P.note},M))})}),D.jsx(Ja,{title:"脂肪来源",children:D.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries(b0).map(([M,P])=>D.jsx(bd,{active:y.includes(M),onClick:()=>w(M),title:P.short,meta:`${P.f}g 脂 / ${P.unit}`,tone:"amber"},M))})}),D.jsx(Ja,{title:"水果 / 酸奶",children:D.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(Js).map(([M,P])=>D.jsx(Cd,{label:P.label,meta:`每${P.step}${P.unit} · C${Math.round(P.c*P.step)}`,value:C[M]||0,unit:P.unit,step:P.step,max:P.max,onChange:W=>h(v,M,W,P.max)},M))})}),D.jsxs(Ja,{title:"牛肉脂肪",children:[D.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,9,13,18].map(M=>D.jsxs(Ad,{active:_===M,onClick:()=>b(M),children:[M,"g"]},M))}),D.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[D.jsx("input",{type:"number",value:_,onChange:M=>b(zn(M.target.value,0,40)),className:"h-11 w-20 rounded-lg border border-white/10 bg-white/5 text-center font-mono text-lg outline-none focus:border-[#ffcf69]"}),D.jsx("span",{className:"text-xs text-zinc-500",children:"脂質 g / 100g raw · 水煮按 80%"})]})]}),D.jsxs(Ja,{title:"目标值",children:[D.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[["p","蛋白","g",500],["c","碳水","g",800],["f","脂肪","g",300],["kcal","热量","",8e3]].map(([M,P,W,k])=>D.jsx(os,{label:P,unit:W,value:B[M],onChange:Y=>I(re=>({...re,[M]:zn(Y,0,k)}))},M))}),D.jsxs("button",{onClick:F,className:"mt-3 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 transition hover:border-[#ff8068]/60 hover:text-[#ff8068]",children:[D.jsx(Hd,{className:"h-4 w-4"}),"重置默认"]})]})]})})]}),D.jsxs("section",{className:"space-y-6",children:[D.jsx(Ii,{eyebrow:"03 · 今晚答案",title:"今晚就这样吃",icon:M0,children:D.jsx("div",{className:"grid gap-2",children:e.dinnerItems.map((M,P)=>D.jsx(VT,{item:M,index:P},M.key))})}),D.jsx(Ii,{eyebrow:"04 · 今日节奏",title:"看一眼就够",icon:v0,children:D.jsxs("div",{className:"space-y-3",children:[D.jsx(jl,{label:"蛋白",value:e.total.p,target:B.p,unit:"g",color:"#ff8068"}),D.jsx(jl,{label:"碳水",value:e.total.c,target:B.c,unit:"g",color:"#ffcf69"}),D.jsx(jl,{label:"脂肪",value:e.total.f,target:B.f,unit:"g",color:"#a8d46f"}),D.jsx(jl,{label:"热量",value:e.total.kcal,target:B.kcal,unit:"kcal",color:"#7bd6d0"})]})})]})]})}function IT(s){const{model:e,targets:n,setTargets:r,tdee:o,setTdee:l,pre:u,setPre:d,setMapQty:h,drinkKey:m,setDrinkKey:x,drinkMl:S,setDrinkMl:g,saltG:y,setSaltG:w,foodK:C,setFoodK:v}=s,_=e.potassium>=e.sodium;return D.jsxs("main",{className:"grid gap-6 lg:grid-cols-[1fr_1fr]",children:[D.jsxs(Ii,{eyebrow:"今日账本",title:"吃进去的东西",icon:g0,children:[D.jsx(eo,{label:"午餐",macro:e.lunch}),D.jsx(eo,{label:"训练前",macro:e.pre}),D.jsx(eo,{label:"饮料/电解质",macro:e.drink}),D.jsx(eo,{label:"零食加餐",macro:e.snack}),D.jsx(eo,{label:"晚餐",macro:e.dinner,strong:!0})]}),D.jsx(Ii,{eyebrow:"目标设置",title:"目标和消耗",icon:x0,children:D.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-5",children:[[["p","蛋白","g",500],["c","碳水","g",800],["f","脂肪","g",300],["kcal","热量","",8e3]].map(([b,N,L,B])=>D.jsx(os,{label:N,unit:L,value:n[b],onChange:I=>r(F=>({...F,[b]:zn(I,0,B)}))},b)),D.jsx(os,{label:"TDEE",unit:"",value:o,onChange:b=>l(zn(b,0,9e3))})]})}),D.jsx(Ii,{eyebrow:"训练前",title:"垫一口也算进去",icon:sT,children:D.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(R0).map(([b,N])=>D.jsx(Cd,{label:N.label,meta:`每${N.step}${N.unit} · ${Math.round(po(Pi(N,N.step)))} kcal`,value:u[b]||0,unit:N.unit,step:N.step,max:N.max,onChange:L=>h(d,b,L,N.max)},b))})}),D.jsxs(Ii,{eyebrow:"电解质",title:"钾钠别太偏",icon:uT,children:[D.jsx("div",{className:"grid grid-cols-3 gap-2",children:Object.entries(ro).map(([b,N])=>D.jsx(bd,{active:m===b,onClick:()=>x(b),title:N.label,meta:N.sub,tone:"green"},b))}),D.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[D.jsx(os,{label:"饮料",unit:"ml",value:S,onChange:b=>g(zn(b,0,2e3))}),D.jsx(os,{label:"盐",unit:"g",value:y,onChange:b=>w(zn(b,0,20))}),D.jsx(os,{label:"食物钾",unit:"mg",value:C,onChange:b=>v(zn(b,0,8e3))})]}),D.jsxs("div",{className:`mt-4 rounded-lg border p-4 ${_?"border-[#a8d46f]/30 bg-[#a8d46f]/10":"border-[#ff8068]/30 bg-[#ff8068]/10"}`,children:[D.jsxs("div",{className:"flex items-center justify-between gap-3",children:[D.jsx("span",{className:"text-sm text-zinc-300",children:"K / Na"}),D.jsx("span",{className:_?"text-[#a8d46f]":"text-[#ff8068]",children:_?"平衡":"钾偏低"})]}),D.jsxs("div",{className:"mt-2 text-xs text-zinc-500",children:["钾 ",Math.round(e.potassium)," mg · 钠 ",Math.round(e.sodium)," mg"]})]})]})]})}function UT({model:s,shopDays:e,setShopDays:n}){return D.jsxs("main",{className:"grid gap-6 lg:grid-cols-[0.85fr_1.15fr]",children:[D.jsxs("section",{className:"overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]",children:[D.jsx("img",{src:Wd("shop-basket.jpg"),alt:"weekly grocery basket",className:"h-[360px] w-full object-cover"}),D.jsxs("div",{className:"p-4",children:[D.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#ffcf69]",children:"备货模式"}),D.jsxs("h2",{className:"mt-1 font-display text-4xl",children:["按 ",e," 天备货"]}),D.jsx("div",{className:"mt-4 flex gap-2",children:[3,5,7,10].map(r=>D.jsxs(Ad,{active:e===r,onClick:()=>n(r),children:[r," 天"]},r))})]})]}),D.jsx(Ii,{eyebrow:"买这些就行",title:"采购清单",icon:K1,children:D.jsx("div",{className:"grid gap-2",children:s.shopping.map(r=>D.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-black/25 px-3 py-3",children:[D.jsxs("div",{children:[D.jsx("div",{className:"font-cjk text-sm text-white",children:r.name}),D.jsxs("div",{className:"mt-1 text-xs text-zinc-500",children:["每天 ",oi(r.qty),r.unit]})]}),D.jsxs("div",{className:"rounded-md bg-white px-2.5 py-1 font-mono text-sm text-zinc-950",children:[r.weeklyQty,r.unit]})]},r.key))})})]})}function FT({cheat:s,setCheat:e,cheatTotal:n,cheatSurplus:r,tdee:o,dayKcal:l}){const u=(d,h)=>{e(m=>{const x={...m},S=zn(h,0,9);return S>0?x[d]=S:delete x[d],x})};return D.jsxs("main",{className:"grid gap-6 lg:grid-cols-[1fr_0.9fr]",children:[D.jsx(Ii,{eyebrow:"放松一下",title:"想吃也能算",icon:_0,children:D.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:P0.map(d=>D.jsx("div",{className:"rounded-lg border border-white/10 bg-white/[0.04] p-3",children:D.jsxs("div",{className:"flex items-center justify-between gap-3",children:[D.jsxs("div",{children:[D.jsx("div",{className:"font-cjk text-sm text-white",children:d.label}),D.jsxs("div",{className:"mt-1 text-xs text-zinc-500",children:[d.kcal," kcal"]})]}),D.jsx(zT,{value:s[d.id]||0,onChange:h=>u(d.id,h)})]})},d.id))})}),D.jsxs("section",{className:"overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]",children:[D.jsx("img",{src:T0("cheat.jpg"),alt:"cheat meal",className:"h-56 w-full object-cover"}),D.jsxs("div",{className:"p-5",children:[D.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#ff8068]",children:"吃完大概这样"}),D.jsx("div",{className:"mt-2 font-display text-6xl text-white",children:n}),D.jsx("div",{className:"text-sm text-zinc-500",children:"放松热量"}),D.jsxs("div",{className:"mt-5 grid grid-cols-3 gap-2",children:[D.jsx(Lf,{label:"今日总摄入",value:Math.round(l+n)}),D.jsx(Lf,{label:"TDEE",value:o}),D.jsx(Lf,{label:"盈余",value:(r>=0?"+":"")+r,hot:r>0})]}),D.jsxs("button",{onClick:()=>e({}),className:"mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 transition hover:border-[#ff8068]/60 hover:text-[#ff8068]",children:[D.jsx(Hd,{className:"h-4 w-4"}),"清空"]})]})]})]})}function OT({open:s,setOpen:e,snack:n,setSnack:r,active:o,dinnerSummary:l}){if(!s)return null;const u=(d,h)=>{r(m=>({...m,[d]:d==="name"?h:zn(h,0,d==="kcal"?5e3:500)}))};return D.jsxs("div",{className:"fixed inset-0 z-[70]",children:[D.jsx("button",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>e(!1),"aria-label":"关闭零食加餐"}),D.jsxs("aside",{className:"absolute inset-y-0 right-0 flex w-[min(430px,94vw)] flex-col border-l border-white/10 bg-[#111311] shadow-2xl",children:[D.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 p-4",children:[D.jsxs("div",{className:"flex items-center gap-3",children:[D.jsx("img",{src:Wd("snack-scanner.jpg"),alt:"",className:"h-12 w-12 rounded-lg object-cover"}),D.jsxs("div",{children:[D.jsx("div",{className:"font-display text-xl text-white",children:"零食加餐"}),D.jsx("div",{className:"text-[10px] uppercase tracking-[0.22em] text-zinc-500",children:"自己填一下也行"})]})]}),D.jsx("button",{onClick:()=>e(!1),className:"grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-400 hover:text-white","aria-label":"关闭",children:D.jsx(yT,{className:"h-4 w-4"})})]}),D.jsxs("div",{className:"flex-1 overflow-y-auto p-4",children:[D.jsx("label",{className:"text-[10px] uppercase tracking-[0.22em] text-zinc-500",children:"名称"}),D.jsx("input",{value:n.name,onChange:d=>u("name",d.target.value),className:"mt-2 h-11 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white outline-none focus:border-[#ffcf69]"}),D.jsx("div",{className:"mt-4 grid grid-cols-4 gap-2",children:[["kcal","热量"],["p","蛋白"],["c","碳水"],["f","脂肪"]].map(([d,h])=>D.jsx(os,{label:h,unit:d==="kcal"?"":"g",value:n[d],onChange:m=>u(d,m)},d))}),D.jsxs("div",{className:"mt-5 rounded-lg border border-[#ffcf69]/20 bg-[#ffcf69]/10 p-4",children:[D.jsx("div",{className:"text-[10px] uppercase tracking-[0.22em] text-[#ffcf69]",children:"晚餐会跟着收口"}),D.jsxs("div",{className:"mt-2 text-sm leading-6 text-zinc-300",children:[l||"晚餐已砍到很低"," · 全天 ",Math.round(n.kcal)," kcal snack"]})]}),o&&D.jsxs("button",{onClick:()=>r({name:"手动加餐",p:0,c:0,f:0,kcal:0}),className:"mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 hover:text-[#ff8068]",children:[D.jsx(Hd,{className:"h-4 w-4"}),"清除加餐"]})]})]})]})}function Ii({eyebrow:s,title:e,icon:n,children:r}){return D.jsxs("section",{className:"rounded-lg border border-white/10 bg-white/[0.055] p-4 shadow-[0_24px_80px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-5",children:[D.jsxs("div",{className:"mb-4 flex items-start justify-between gap-4",children:[D.jsxs("div",{children:[D.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#ffcf69]",children:s}),D.jsx("h2",{className:"mt-1 font-display text-2xl text-white",children:e})]}),n&&D.jsx("span",{className:"grid h-9 w-9 place-items-center rounded-lg bg-white text-zinc-950",children:D.jsx(n,{className:"h-4 w-4"})})]}),r]})}function Nf({icon:s,label:e,sub:n,onClick:r}){const o=r?"button":"div";return D.jsxs(o,{onClick:r,className:"rounded-lg border border-white/10 bg-white/[0.06] px-3 py-3 text-left backdrop-blur-xl transition hover:border-white/25",children:[D.jsx(s,{className:"mb-2 h-4 w-4 text-[#ffcf69]"}),D.jsx("div",{className:"text-sm text-white",children:e}),n&&D.jsx("div",{className:"mt-0.5 text-[10px] uppercase tracking-[0.18em] text-zinc-500",children:n})]})}function Wl({label:s,value:e,target:n,unit:r}){const o=e-n,l=Math.abs(o)<=(r?Math.max(8,n*.08):Math.max(80,n*.05));return D.jsxs("div",{className:"rounded-lg bg-white/10 p-2 backdrop-blur",children:[D.jsx("div",{className:"text-[10px] uppercase tracking-[0.16em] text-zinc-400",children:s}),D.jsx("div",{className:"mt-1 font-mono text-lg text-white",children:Math.round(e)}),D.jsxs("div",{className:`text-[10px] ${l?"text-[#a8d46f]":"text-[#ffcf69]"}`,children:[o>=0?"+":"",Math.round(o),r]})]})}function kT({value:s,onChange:e,options:n}){return D.jsx("div",{className:"grid grid-cols-2 rounded-lg bg-black/25 p-1",children:n.map(r=>D.jsx("button",{onClick:()=>e(r.value),className:`rounded-md px-3 py-2 text-sm transition ${s===r.value?"bg-white text-zinc-950":"text-zinc-400 hover:text-white"}`,children:r.label},r.value))})}function Ad({active:s,onClick:e,children:n}){return D.jsx("button",{onClick:e,className:`rounded-lg border px-3 py-2 text-xs transition ${s?"border-[#ffcf69] bg-[#ffcf69]/15 text-[#ffcf69]":"border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/25 hover:text-white"}`,children:n})}function Ja({title:s,children:e}){return D.jsxs("div",{children:[D.jsx("div",{className:"mb-2 text-[10px] uppercase tracking-[0.24em] text-zinc-500",children:s}),e]})}function bd({active:s,onClick:e,title:n,meta:r,tone:o="gold"}){const l=o==="green"?"#a8d46f":o==="amber"?"#ffb55c":"#ffcf69";return D.jsxs("button",{onClick:e,className:"rounded-lg border p-3 text-left transition hover:-translate-y-0.5",style:{borderColor:s?l:"rgba(255,255,255,0.10)",background:s?`${l}1f`:"rgba(255,255,255,0.045)"},children:[D.jsx("div",{className:"font-cjk text-sm font-semibold text-white",children:n}),D.jsx("div",{className:"mt-1 text-[10px] text-zinc-500",children:r})]})}function BT({open:s,onToggle:e,title:n,subtitle:r,children:o}){return D.jsxs("section",{className:"rounded-lg border border-white/10 bg-white/[0.045] backdrop-blur-xl",children:[D.jsxs("button",{onClick:e,className:"flex w-full items-center justify-between gap-3 p-4 text-left",children:[D.jsxs("span",{children:[D.jsxs("span",{className:"flex items-center gap-2 font-display text-2xl text-white",children:[D.jsx(mT,{className:"h-4 w-4 text-[#ffcf69]"}),n]}),D.jsx("span",{className:"mt-1 block text-xs text-zinc-500",children:r})]}),D.jsx(eT,{className:`h-5 w-5 text-zinc-500 transition ${s?"rotate-180":""}`})]}),s&&D.jsx("div",{className:"border-t border-white/10 p-4",children:o})]})}function Cd({label:s,meta:e,value:n,unit:r,step:o,max:l,onChange:u}){return D.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-black/20 p-3",children:[D.jsxs("div",{className:"min-w-0",children:[D.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-white",children:s}),D.jsx("div",{className:"mt-1 truncate text-[10px] text-zinc-500",children:e})]}),D.jsxs("div",{className:"flex items-center gap-1",children:[D.jsx(sc,{label:`减少${s}`,onClick:()=>u(n-o),icon:S0}),D.jsxs("span",{className:"w-14 text-center font-mono text-sm text-white",children:[oi(n),n>0&&r==="g"?"g":""]}),D.jsx(sc,{label:`增加${s}`,onClick:()=>u(Math.min(l,n+o)),icon:y0})]})]})}function zT({value:s,onChange:e}){return D.jsxs("div",{className:"flex items-center gap-1",children:[D.jsx(sc,{label:"减少",onClick:()=>e(s-1),icon:S0}),D.jsx("span",{className:"w-7 text-center font-mono text-sm text-white",children:s}),D.jsx(sc,{label:"增加",onClick:()=>e(s+1),icon:y0})]})}function sc({label:s,onClick:e,icon:n}){return D.jsx("button",{onClick:e,"aria-label":s,className:"grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-400 transition hover:border-[#ffcf69]/60 hover:text-[#ffcf69]",children:D.jsx(n,{className:"h-4 w-4"})})}function os({label:s,unit:e,value:n,onChange:r}){return D.jsxs("label",{className:"block rounded-lg border border-white/10 bg-black/20 p-3",children:[D.jsx("span",{className:"block text-[10px] uppercase tracking-[0.18em] text-zinc-500",children:s}),D.jsxs("span",{className:"mt-1 flex items-baseline gap-1",children:[D.jsx("input",{type:"number",value:oi(n,1),onChange:o=>r(o.target.value),className:"min-w-0 flex-1 bg-transparent font-mono text-lg text-white outline-none"}),D.jsx("span",{className:"text-[10px] text-zinc-500",children:e})]})]})}function VT({item:s,index:e}){const r={red:"#ff8068",amber:"#ffb55c",gold:"#ffcf69",green:"#a8d46f"}[s.tone]||"#ffffff";return D.jsxs("div",{className:"grid grid-cols-[38px_1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-3",children:[D.jsx("span",{className:"grid h-9 w-9 place-items-center rounded-lg font-mono text-xs text-zinc-950",style:{backgroundColor:r},children:String(e+1).padStart(2,"0")}),D.jsxs("div",{className:"min-w-0",children:[D.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-white",children:s.name}),D.jsxs("div",{className:"mt-1 text-[10px] text-zinc-500",children:["P",oi(s.macro.p)," · C",oi(s.macro.c)," · F",oi(s.macro.f)]})]}),D.jsxs("div",{className:"text-right",children:[D.jsx("div",{className:"font-display text-2xl leading-none text-white",children:oi(s.qty)}),D.jsx("div",{className:"mt-1 text-[10px] uppercase tracking-[0.16em] text-zinc-500",children:s.unit})]})]})}function jl({label:s,value:e,target:n,unit:r,color:o}){const l=Math.min(135,e/Math.max(1,n)*100),u=Math.round(e-n);return D.jsxs("div",{children:[D.jsxs("div",{className:"mb-2 flex items-center justify-between gap-3",children:[D.jsx("span",{className:"text-sm text-zinc-300",children:s}),D.jsxs("span",{className:"font-mono text-xs text-zinc-500",children:[Math.round(e)," / ",n," ",r]})]}),D.jsx("div",{className:"relative h-2 overflow-hidden rounded-full bg-white/10",children:D.jsx("div",{className:"h-full rounded-full transition-all duration-700",style:{width:`${l}%`,backgroundColor:o}})}),D.jsxs("div",{className:"mt-1 text-right text-[10px] text-zinc-500",children:[u>=0?"+":"",u,r]})]})}function eo({label:s,macro:e,strong:n}){return D.jsxs("div",{className:`grid grid-cols-[1fr_auto] items-center gap-3 border-t border-white/10 py-3 first:border-t-0 ${n?"text-white":"text-zinc-300"}`,children:[D.jsx("div",{className:"font-cjk text-sm",children:s}),D.jsxs("div",{className:"font-mono text-xs text-zinc-500",children:["P",oi(e.p)," C",oi(e.c)," F",oi(e.f)," · ",Math.round(po(e))," kcal"]})]})}function Lf({label:s,value:e,hot:n}){return D.jsxs("div",{className:`rounded-lg border p-3 ${n?"border-[#ff8068]/30 bg-[#ff8068]/10":"border-white/10 bg-black/20"}`,children:[D.jsx("div",{className:"text-[10px] text-zinc-500",children:s}),D.jsx("div",{className:`mt-1 font-mono text-lg ${n?"text-[#ff8068]":"text-white"}`,children:e})]})}xv.createRoot(document.getElementById("root")).render(D.jsx(dv.StrictMode,{children:D.jsx(NT,{})}));
