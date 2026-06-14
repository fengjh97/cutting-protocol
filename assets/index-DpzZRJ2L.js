(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Dg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var qu={exports:{}},Ka={},Yu={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function px(){if(_m)return vt;_m=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function g(k){return k===null||typeof k!="object"?null:(k=S&&k[S]||k["@@iterator"],typeof k=="function"?k:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function v(k,ee,De){this.props=k,this.context=ee,this.refs=R,this.updater=De||y}v.prototype.isReactComponent={},v.prototype.setState=function(k,ee){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ee,"setState")},v.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function _(){}_.prototype=v.prototype;function b(k,ee,De){this.props=k,this.context=ee,this.refs=R,this.updater=De||y}var N=b.prototype=new _;N.constructor=b,w(N,v.prototype),N.isPureReactComponent=!0;var L=Array.isArray,B=Object.prototype.hasOwnProperty,D={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function E(k,ee,De){var ze,Le={},re=null,ve=null;if(ee!=null)for(ze in ee.ref!==void 0&&(ve=ee.ref),ee.key!==void 0&&(re=""+ee.key),ee)B.call(ee,ze)&&!O.hasOwnProperty(ze)&&(Le[ze]=ee[ze]);var me=arguments.length-2;if(me===1)Le.children=De;else if(1<me){for(var Ie=Array(me),$e=0;$e<me;$e++)Ie[$e]=arguments[$e+2];Le.children=Ie}if(k&&k.defaultProps)for(ze in me=k.defaultProps,me)Le[ze]===void 0&&(Le[ze]=me[ze]);return{$$typeof:s,type:k,key:re,ref:ve,props:Le,_owner:D.current}}function U(k,ee){return{$$typeof:s,type:k.type,key:ee,ref:k.ref,props:k.props,_owner:k._owner}}function X(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function I(k){var ee={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(De){return ee[De]})}var G=/\/+/g;function se(k,ee){return typeof k=="object"&&k!==null&&k.key!=null?I(""+k.key):ee.toString(36)}function oe(k,ee,De,ze,Le){var re=typeof k;(re==="undefined"||re==="boolean")&&(k=null);var ve=!1;if(k===null)ve=!0;else switch(re){case"string":case"number":ve=!0;break;case"object":switch(k.$$typeof){case s:case e:ve=!0}}if(ve)return ve=k,Le=Le(ve),k=ze===""?"."+se(ve,0):ze,L(Le)?(De="",k!=null&&(De=k.replace(G,"$&/")+"/"),oe(Le,ee,De,"",function($e){return $e})):Le!=null&&(X(Le)&&(Le=U(Le,De+(!Le.key||ve&&ve.key===Le.key?"":(""+Le.key).replace(G,"$&/")+"/")+k)),ee.push(Le)),1;if(ve=0,ze=ze===""?".":ze+":",L(k))for(var me=0;me<k.length;me++){re=k[me];var Ie=ze+se(re,me);ve+=oe(re,ee,De,Ie,Le)}else if(Ie=g(k),typeof Ie=="function")for(k=Ie.call(k),me=0;!(re=k.next()).done;)re=re.value,Ie=ze+se(re,me++),ve+=oe(re,ee,De,Ie,Le);else if(re==="object")throw ee=String(k),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return ve}function H(k,ee,De){if(k==null)return k;var ze=[],Le=0;return oe(k,ze,"","",function(re){return ee.call(De,re,Le++)}),ze}function Z(k){if(k._status===-1){var ee=k._result;ee=ee(),ee.then(function(De){(k._status===0||k._status===-1)&&(k._status=1,k._result=De)},function(De){(k._status===0||k._status===-1)&&(k._status=2,k._result=De)}),k._status===-1&&(k._status=0,k._result=ee)}if(k._status===1)return k._result.default;throw k._result}var q={current:null},K={transition:null},ce={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:K,ReactCurrentOwner:D};function ue(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:H,forEach:function(k,ee,De){H(k,function(){ee.apply(this,arguments)},De)},count:function(k){var ee=0;return H(k,function(){ee++}),ee},toArray:function(k){return H(k,function(ee){return ee})||[]},only:function(k){if(!X(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},vt.Component=v,vt.Fragment=t,vt.Profiler=o,vt.PureComponent=b,vt.StrictMode=r,vt.Suspense=h,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,vt.act=ue,vt.cloneElement=function(k,ee,De){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var ze=w({},k.props),Le=k.key,re=k.ref,ve=k._owner;if(ee!=null){if(ee.ref!==void 0&&(re=ee.ref,ve=D.current),ee.key!==void 0&&(Le=""+ee.key),k.type&&k.type.defaultProps)var me=k.type.defaultProps;for(Ie in ee)B.call(ee,Ie)&&!O.hasOwnProperty(Ie)&&(ze[Ie]=ee[Ie]===void 0&&me!==void 0?me[Ie]:ee[Ie])}var Ie=arguments.length-2;if(Ie===1)ze.children=De;else if(1<Ie){me=Array(Ie);for(var $e=0;$e<Ie;$e++)me[$e]=arguments[$e+2];ze.children=me}return{$$typeof:s,type:k.type,key:Le,ref:re,props:ze,_owner:ve}},vt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},vt.createElement=E,vt.createFactory=function(k){var ee=E.bind(null,k);return ee.type=k,ee},vt.createRef=function(){return{current:null}},vt.forwardRef=function(k){return{$$typeof:d,render:k}},vt.isValidElement=X,vt.lazy=function(k){return{$$typeof:x,_payload:{_status:-1,_result:k},_init:Z}},vt.memo=function(k,ee){return{$$typeof:m,type:k,compare:ee===void 0?null:ee}},vt.startTransition=function(k){var ee=K.transition;K.transition={};try{k()}finally{K.transition=ee}},vt.unstable_act=ue,vt.useCallback=function(k,ee){return q.current.useCallback(k,ee)},vt.useContext=function(k){return q.current.useContext(k)},vt.useDebugValue=function(){},vt.useDeferredValue=function(k){return q.current.useDeferredValue(k)},vt.useEffect=function(k,ee){return q.current.useEffect(k,ee)},vt.useId=function(){return q.current.useId()},vt.useImperativeHandle=function(k,ee,De){return q.current.useImperativeHandle(k,ee,De)},vt.useInsertionEffect=function(k,ee){return q.current.useInsertionEffect(k,ee)},vt.useLayoutEffect=function(k,ee){return q.current.useLayoutEffect(k,ee)},vt.useMemo=function(k,ee){return q.current.useMemo(k,ee)},vt.useReducer=function(k,ee,De){return q.current.useReducer(k,ee,De)},vt.useRef=function(k){return q.current.useRef(k)},vt.useState=function(k){return q.current.useState(k)},vt.useSyncExternalStore=function(k,ee,De){return q.current.useSyncExternalStore(k,ee,De)},vt.useTransition=function(){return q.current.useTransition()},vt.version="18.3.1",vt}var xm;function Nd(){return xm||(xm=1,Yu.exports=px()),Yu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function mx(){if(vm)return Ka;vm=1;var s=Nd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,m){var x,S={},g=null,y=null;m!==void 0&&(g=""+m),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(y=h.ref);for(x in h)r.call(h,x)&&!l.hasOwnProperty(x)&&(S[x]=h[x]);if(d&&d.defaultProps)for(x in h=d.defaultProps,h)S[x]===void 0&&(S[x]=h[x]);return{$$typeof:e,type:d,key:g,ref:y,props:S,_owner:o.current}}return Ka.Fragment=t,Ka.jsx=u,Ka.jsxs=u,Ka}var Sm;function gx(){return Sm||(Sm=1,qu.exports=mx()),qu.exports}var C=gx(),Et=Nd();const _x=Dg(Et);var vl={},$u={exports:{}},Wn={},Ku={exports:{}},Zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function xx(){return ym||(ym=1,(function(s){function e(K,ce){var ue=K.length;K.push(ce);e:for(;0<ue;){var k=ue-1>>>1,ee=K[k];if(0<o(ee,ce))K[k]=ce,K[ue]=ee,ue=k;else break e}}function t(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var ce=K[0],ue=K.pop();if(ue!==ce){K[0]=ue;e:for(var k=0,ee=K.length,De=ee>>>1;k<De;){var ze=2*(k+1)-1,Le=K[ze],re=ze+1,ve=K[re];if(0>o(Le,ue))re<ee&&0>o(ve,Le)?(K[k]=ve,K[re]=ue,k=re):(K[k]=Le,K[ze]=ue,k=ze);else if(re<ee&&0>o(ve,ue))K[k]=ve,K[re]=ue,k=re;else break e}}return ce}function o(K,ce){var ue=K.sortIndex-ce.sortIndex;return ue!==0?ue:K.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],m=[],x=1,S=null,g=3,y=!1,w=!1,R=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(K){for(var ce=t(m);ce!==null;){if(ce.callback===null)r(m);else if(ce.startTime<=K)r(m),ce.sortIndex=ce.expirationTime,e(h,ce);else break;ce=t(m)}}function L(K){if(R=!1,N(K),!w)if(t(h)!==null)w=!0,Z(B);else{var ce=t(m);ce!==null&&q(L,ce.startTime-K)}}function B(K,ce){w=!1,R&&(R=!1,_(E),E=-1),y=!0;var ue=g;try{for(N(ce),S=t(h);S!==null&&(!(S.expirationTime>ce)||K&&!I());){var k=S.callback;if(typeof k=="function"){S.callback=null,g=S.priorityLevel;var ee=k(S.expirationTime<=ce);ce=s.unstable_now(),typeof ee=="function"?S.callback=ee:S===t(h)&&r(h),N(ce)}else r(h);S=t(h)}if(S!==null)var De=!0;else{var ze=t(m);ze!==null&&q(L,ze.startTime-ce),De=!1}return De}finally{S=null,g=ue,y=!1}}var D=!1,O=null,E=-1,U=5,X=-1;function I(){return!(s.unstable_now()-X<U)}function G(){if(O!==null){var K=s.unstable_now();X=K;var ce=!0;try{ce=O(!0,K)}finally{ce?se():(D=!1,O=null)}}else D=!1}var se;if(typeof b=="function")se=function(){b(G)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,H=oe.port2;oe.port1.onmessage=G,se=function(){H.postMessage(null)}}else se=function(){v(G,0)};function Z(K){O=K,D||(D=!0,se())}function q(K,ce){E=v(function(){K(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(K){K.callback=null},s.unstable_continueExecution=function(){w||y||(w=!0,Z(B))},s.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<K?Math.floor(1e3/K):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(K){switch(g){case 1:case 2:case 3:var ce=3;break;default:ce=g}var ue=g;g=ce;try{return K()}finally{g=ue}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(K,ce){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ue=g;g=K;try{return ce()}finally{g=ue}},s.unstable_scheduleCallback=function(K,ce,ue){var k=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?k+ue:k):ue=k,K){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=ue+ee,K={id:x++,callback:ce,priorityLevel:K,startTime:ue,expirationTime:ee,sortIndex:-1},ue>k?(K.sortIndex=ue,e(m,K),t(h)===null&&K===t(m)&&(R?(_(E),E=-1):R=!0,q(L,ue-k))):(K.sortIndex=ee,e(h,K),w||y||(w=!0,Z(B))),K},s.unstable_shouldYield=I,s.unstable_wrapCallback=function(K){var ce=g;return function(){var ue=g;g=ce;try{return K.apply(this,arguments)}finally{g=ue}}}})(Zu)),Zu}var Mm;function vx(){return Mm||(Mm=1,Ku.exports=xx()),Ku.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function Sx(){if(Em)return Wn;Em=1;var s=Nd(),e=vx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},S={};function g(n){return h.call(S,n)?!0:h.call(x,n)?!1:m.test(n)?S[n]=!0:(x[n]=!0,!1)}function y(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||y(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,c,f,p,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=T}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,b);v[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,b);v[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,b);v[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,i,a,c){var f=v.hasOwnProperty(i)?v[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,f,c)&&(a=null),c||f===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),D=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),I=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),K=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=K&&n[K]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Object.assign,k;function ee(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var De=!1;function ze(n,i){if(!n||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var c=le}Reflect.construct(n,[],i)}else{try{i.call()}catch(le){c=le}n.call(i.prototype)}else{try{throw Error()}catch(le){c=le}n()}}catch(le){if(le&&c&&typeof le.stack=="string"){for(var f=le.stack.split(`
`),p=c.stack.split(`
`),T=f.length-1,F=p.length-1;1<=T&&0<=F&&f[T]!==p[F];)F--;for(;1<=T&&0<=F;T--,F--)if(f[T]!==p[F]){if(T!==1||F!==1)do if(T--,F--,0>F||f[T]!==p[F]){var V=`
`+f[T].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=T&&0<=F);break}}}finally{De=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ee(n):""}function Le(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=ze(n.type,!1),n;case 11:return n=ze(n.type.render,!1),n;case 1:return n=ze(n.type,!0),n;default:return""}}function re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case D:return"Portal";case U:return"Profiler";case E:return"StrictMode";case se:return"Suspense";case oe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case I:return(n.displayName||"Context")+".Consumer";case X:return(n._context.displayName||"Context")+".Provider";case G:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case H:return i=n.displayName||null,i!==null?i:re(n.type)||"Memo";case Z:i=n._payload,n=n._init;try{return re(n(i))}catch{}}return null}function ve(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $e(n){var i=Ie(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,p.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function et(n){n._valueTracker||(n._valueTracker=$e(n))}function Bt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ie(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Je(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Mt(n,i){var a=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Lt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function mt(n,i){i=i.checked,i!=null&&N(n,"checked",i,!1)}function Ht(n,i){mt(n,i);var a=me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ln(n,i.type,a):i.hasOwnProperty("defaultValue")&&ln(n,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function It(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ln(n,i,a){(i!=="number"||Je(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var W=Array.isArray;function zt(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+me(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Be(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function tt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(W(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:me(a)}}function Ee(n,i){var a=me(i.value),c=me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function yt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function P(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?P(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var $,he=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for($=$||document.createElement("div"),$.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=$.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ge(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Pe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function fe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function pe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=fe(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Ue=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ke(n,i){if(i){if(Ue[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ae(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function rt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var lt=null,st=null,z=null;function Te(n){if(n=Ua(n)){if(typeof lt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Io(i),lt(n.stateNode,n.type,i))}}function de(n){st?z?z.push(n):z=[n]:st=n}function Oe(){if(st){var n=st,i=z;if(z=st=null,Te(n),i)for(n=0;n<i.length;n++)Te(i[n])}}function be(n,i){return n(i)}function _e(){}var je=!1;function ct(n,i,a){if(je)return n(i,a);je=!0;try{return be(n,i,a)}finally{je=!1,(st!==null||z!==null)&&(_e(),Oe())}}function Ut(n,i){var a=n.stateNode;if(a===null)return null;var c=Io(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var wt=!1;if(d)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){wt=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{wt=!1}function Fn(n,i,a,c,f,p,T,F,V){var le=Array.prototype.slice.call(arguments,3);try{i.apply(a,le)}catch(Se){this.onError(Se)}}var di=!1,qi=null,bi=!1,ft=null,ot={onError:function(n){di=!0,qi=n}};function Nn(n,i,a,c,f,p,T,F,V){di=!1,qi=null,Fn.apply(ot,arguments)}function Ci(n,i,a,c,f,p,T,F,V){if(Nn.apply(this,arguments),di){if(di){var le=qi;di=!1,qi=null}else throw Error(t(198));bi||(bi=!0,ft=le)}}function Ri(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function qr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ma(n){if(Ri(n)!==n)throw Error(t(188))}function ys(n){var i=n.alternate;if(!i){if(i=Ri(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var p=f.alternate;if(p===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===a)return ma(f),n;if(p===c)return ma(f),i;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=p;else{for(var T=!1,F=f.child;F;){if(F===a){T=!0,a=f,c=p;break}if(F===c){T=!0,c=f,a=p;break}F=F.sibling}if(!T){for(F=p.child;F;){if(F===a){T=!0,a=p,c=f;break}if(F===c){T=!0,c=p,a=f;break}F=F.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ga(n){return n=ys(n),n!==null?_a(n):null}function _a(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=_a(n);if(i!==null)return i;n=n.sibling}return null}var xo=e.unstable_scheduleCallback,vo=e.unstable_cancelCallback,gc=e.unstable_shouldYield,_c=e.unstable_requestPaint,Kt=e.unstable_now,xc=e.unstable_getCurrentPriorityLevel,xa=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,Y=e.unstable_NormalPriority,ae=e.unstable_LowPriority,ne=e.unstable_IdlePriority,te=null,Ne=null;function He(n){if(Ne&&typeof Ne.onCommitFiberRoot=="function")try{Ne.onCommitFiberRoot(te,n,void 0,(n.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:dt,qe=Math.log,Qe=Math.LN2;function dt(n){return n>>>=0,n===0?32:31-(qe(n)/Qe|0)|0}var ht=64,Ke=4194304;function At(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Vt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,p=n.pingedLanes,T=a&268435455;if(T!==0){var F=T&~f;F!==0?c=At(F):(p&=T,p!==0&&(c=At(p)))}else T=a&~f,T!==0?c=At(T):p!==0&&(c=At(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Re(i),f=1<<a,c|=n[a],i&=~f;return c}function qt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,p=n.pendingLanes;0<p;){var T=31-Re(p),F=1<<T,V=f[T];V===-1?((F&a)===0||(F&c)!==0)&&(f[T]=qt(F,i)):V<=i&&(n.expiredLanes|=F),p&=~F}}function rn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ve(){var n=ht;return ht<<=1,(ht&4194240)===0&&(ht=64),n}function xn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function _t(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Re(i),n[i]=a}function On(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-Re(a),p=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~p}}function kn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Re(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var xt=0;function Yi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Dt,Wt,hi,Ot,pi,Pi=!1,Yr=[],mr=null,gr=null,_r=null,va=new Map,Sa=new Map,xr=[],F0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eh(n,i){switch(n){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":va.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(i.pointerId)}}function ya(n,i,a,c,f,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[f]},i!==null&&(i=Ua(i),i!==null&&Wt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function O0(n,i,a,c,f){switch(i){case"focusin":return mr=ya(mr,n,i,a,c,f),!0;case"dragenter":return gr=ya(gr,n,i,a,c,f),!0;case"mouseover":return _r=ya(_r,n,i,a,c,f),!0;case"pointerover":var p=f.pointerId;return va.set(p,ya(va.get(p)||null,n,i,a,c,f)),!0;case"gotpointercapture":return p=f.pointerId,Sa.set(p,ya(Sa.get(p)||null,n,i,a,c,f)),!0}return!1}function th(n){var i=$r(n.target);if(i!==null){var a=Ri(i);if(a!==null){if(i=a.tag,i===13){if(i=qr(a),i!==null){n.blockedOn=i,pi(n.priority,function(){hi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function So(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Sc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);we=c,a.target.dispatchEvent(c),we=null}else return i=Ua(a),i!==null&&Wt(i),n.blockedOn=a,!1;i.shift()}return!0}function nh(n,i,a){So(n)&&a.delete(i)}function k0(){Pi=!1,mr!==null&&So(mr)&&(mr=null),gr!==null&&So(gr)&&(gr=null),_r!==null&&So(_r)&&(_r=null),va.forEach(nh),Sa.forEach(nh)}function Ma(n,i){n.blockedOn===i&&(n.blockedOn=null,Pi||(Pi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,k0)))}function Ea(n){function i(f){return Ma(f,n)}if(0<Yr.length){Ma(Yr[0],n);for(var a=1;a<Yr.length;a++){var c=Yr[a];c.blockedOn===n&&(c.blockedOn=null)}}for(mr!==null&&Ma(mr,n),gr!==null&&Ma(gr,n),_r!==null&&Ma(_r,n),va.forEach(i),Sa.forEach(i),a=0;a<xr.length;a++)c=xr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<xr.length&&(a=xr[0],a.blockedOn===null);)th(a),a.blockedOn===null&&xr.shift()}var Ms=L.ReactCurrentBatchConfig,yo=!0;function B0(n,i,a,c){var f=xt,p=Ms.transition;Ms.transition=null;try{xt=1,vc(n,i,a,c)}finally{xt=f,Ms.transition=p}}function z0(n,i,a,c){var f=xt,p=Ms.transition;Ms.transition=null;try{xt=4,vc(n,i,a,c)}finally{xt=f,Ms.transition=p}}function vc(n,i,a,c){if(yo){var f=Sc(n,i,a,c);if(f===null)Oc(n,i,c,Mo,a),eh(n,c);else if(O0(f,n,i,a,c))c.stopPropagation();else if(eh(n,c),i&4&&-1<F0.indexOf(n)){for(;f!==null;){var p=Ua(f);if(p!==null&&Dt(p),p=Sc(n,i,a,c),p===null&&Oc(n,i,c,Mo,a),p===f)break;f=p}f!==null&&c.stopPropagation()}else Oc(n,i,c,null,a)}}var Mo=null;function Sc(n,i,a,c){if(Mo=null,n=rt(c),n=$r(n),n!==null)if(i=Ri(n),i===null)n=null;else if(a=i.tag,a===13){if(n=qr(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Mo=n,null}function ih(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xc()){case xa:return 1;case A:return 4;case Y:case ae:return 16;case ne:return 536870912;default:return 16}default:return 16}}var vr=null,yc=null,Eo=null;function rh(){if(Eo)return Eo;var n,i=yc,a=i.length,c,f="value"in vr?vr.value:vr.textContent,p=f.length;for(n=0;n<a&&i[n]===f[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===f[p-c];c++);return Eo=f.slice(n,1<c?1-c:void 0)}function To(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function wo(){return!0}function sh(){return!1}function Yn(n){function i(a,c,f,p,T){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=p,this.target=T,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(a=n[F],this[F]=a?a(p):p[F]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?wo:sh,this.isPropagationStopped=sh,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),i}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mc=Yn(Es),Ta=ue({},Es,{view:0,detail:0}),V0=Yn(Ta),Ec,Tc,wa,Ao=ue({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wa&&(wa&&n.type==="mousemove"?(Ec=n.screenX-wa.screenX,Tc=n.screenY-wa.screenY):Tc=Ec=0,wa=n),Ec)},movementY:function(n){return"movementY"in n?n.movementY:Tc}}),ah=Yn(Ao),G0=ue({},Ao,{dataTransfer:0}),H0=Yn(G0),W0=ue({},Ta,{relatedTarget:0}),wc=Yn(W0),j0=ue({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=Yn(j0),q0=ue({},Es,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Y0=Yn(q0),$0=ue({},Es,{data:0}),oh=Yn($0),K0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Q0[n])?!!i[n]:!1}function Ac(){return J0}var e_=ue({},Ta,{key:function(n){if(n.key){var i=K0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=To(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Z0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(n){return n.type==="keypress"?To(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?To(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),t_=Yn(e_),n_=ue({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lh=Yn(n_),i_=ue({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),r_=Yn(i_),s_=ue({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),a_=Yn(s_),o_=ue({},Ao,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),l_=Yn(o_),c_=[9,13,27,32],bc=d&&"CompositionEvent"in window,Aa=null;d&&"documentMode"in document&&(Aa=document.documentMode);var u_=d&&"TextEvent"in window&&!Aa,ch=d&&(!bc||Aa&&8<Aa&&11>=Aa),uh=" ",fh=!1;function dh(n,i){switch(n){case"keyup":return c_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ts=!1;function f_(n,i){switch(n){case"compositionend":return hh(i);case"keypress":return i.which!==32?null:(fh=!0,uh);case"textInput":return n=i.data,n===uh&&fh?null:n;default:return null}}function d_(n,i){if(Ts)return n==="compositionend"||!bc&&dh(n,i)?(n=rh(),Eo=yc=vr=null,Ts=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ch&&i.locale!=="ko"?null:i.data;default:return null}}var h_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ph(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!h_[n.type]:i==="textarea"}function mh(n,i,a,c){de(c),i=No(i,"onChange"),0<i.length&&(a=new Mc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ba=null,Ca=null;function p_(n){Dh(n,0)}function bo(n){var i=Rs(n);if(Bt(i))return n}function m_(n,i){if(n==="change")return i}var gh=!1;if(d){var Cc;if(d){var Rc="oninput"in document;if(!Rc){var _h=document.createElement("div");_h.setAttribute("oninput","return;"),Rc=typeof _h.oninput=="function"}Cc=Rc}else Cc=!1;gh=Cc&&(!document.documentMode||9<document.documentMode)}function xh(){ba&&(ba.detachEvent("onpropertychange",vh),Ca=ba=null)}function vh(n){if(n.propertyName==="value"&&bo(Ca)){var i=[];mh(i,Ca,n,rt(n)),ct(p_,i)}}function g_(n,i,a){n==="focusin"?(xh(),ba=i,Ca=a,ba.attachEvent("onpropertychange",vh)):n==="focusout"&&xh()}function __(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return bo(Ca)}function x_(n,i){if(n==="click")return bo(i)}function v_(n,i){if(n==="input"||n==="change")return bo(i)}function S_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var mi=typeof Object.is=="function"?Object.is:S_;function Ra(n,i){if(mi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!h.call(i,f)||!mi(n[f],i[f]))return!1}return!0}function Sh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function yh(n,i){var a=Sh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sh(a)}}function Mh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Mh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Eh(){for(var n=window,i=Je();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Je(n.document)}return i}function Pc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function y_(n){var i=Eh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Mh(a.ownerDocument.documentElement,a)){if(c!==null&&Pc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,p=Math.min(c.start,f);c=c.end===void 0?p:Math.min(c.end,f),!n.extend&&p>c&&(f=c,c=p,p=f),f=yh(a,p);var T=yh(a,c);f&&T&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),p>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var M_=d&&"documentMode"in document&&11>=document.documentMode,ws=null,Nc=null,Pa=null,Lc=!1;function Th(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lc||ws==null||ws!==Je(c)||(c=ws,"selectionStart"in c&&Pc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Pa&&Ra(Pa,c)||(Pa=c,c=No(Nc,"onSelect"),0<c.length&&(i=new Mc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ws)))}function Co(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var As={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},Dc={},wh={};d&&(wh=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Ro(n){if(Dc[n])return Dc[n];if(!As[n])return n;var i=As[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in wh)return Dc[n]=i[a];return n}var Ah=Ro("animationend"),bh=Ro("animationiteration"),Ch=Ro("animationstart"),Rh=Ro("transitionend"),Ph=new Map,Nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(n,i){Ph.set(n,i),l(i,[n])}for(var Ic=0;Ic<Nh.length;Ic++){var Uc=Nh[Ic],E_=Uc.toLowerCase(),T_=Uc[0].toUpperCase()+Uc.slice(1);Sr(E_,"on"+T_)}Sr(Ah,"onAnimationEnd"),Sr(bh,"onAnimationIteration"),Sr(Ch,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(Rh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function Lh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Ci(c,i,void 0,n),n.currentTarget=null}function Dh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var T=c.length-1;0<=T;T--){var F=c[T],V=F.instance,le=F.currentTarget;if(F=F.listener,V!==p&&f.isPropagationStopped())break e;Lh(f,F,le),p=V}else for(T=0;T<c.length;T++){if(F=c[T],V=F.instance,le=F.currentTarget,F=F.listener,V!==p&&f.isPropagationStopped())break e;Lh(f,F,le),p=V}}}if(bi)throw n=ft,bi=!1,ft=null,n}function jt(n,i){var a=i[Hc];a===void 0&&(a=i[Hc]=new Set);var c=n+"__bubble";a.has(c)||(Ih(i,n,2,!1),a.add(c))}function Fc(n,i,a){var c=0;i&&(c|=4),Ih(a,n,c,i)}var Po="_reactListening"+Math.random().toString(36).slice(2);function La(n){if(!n[Po]){n[Po]=!0,r.forEach(function(a){a!=="selectionchange"&&(w_.has(a)||Fc(a,!1,n),Fc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Po]||(i[Po]=!0,Fc("selectionchange",!1,i))}}function Ih(n,i,a,c){switch(ih(i)){case 1:var f=B0;break;case 4:f=z0;break;default:f=vc}a=f.bind(null,i,a,n),f=void 0,!wt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Oc(n,i,a,c,f){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var F=c.stateNode.containerInfo;if(F===f||F.nodeType===8&&F.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var V=T.tag;if((V===3||V===4)&&(V=T.stateNode.containerInfo,V===f||V.nodeType===8&&V.parentNode===f))return;T=T.return}for(;F!==null;){if(T=$r(F),T===null)return;if(V=T.tag,V===5||V===6){c=p=T;continue e}F=F.parentNode}}c=c.return}ct(function(){var le=p,Se=rt(a),ye=[];e:{var xe=Ph.get(n);if(xe!==void 0){var Ge=Mc,Xe=n;switch(n){case"keypress":if(To(a)===0)break e;case"keydown":case"keyup":Ge=t_;break;case"focusin":Xe="focus",Ge=wc;break;case"focusout":Xe="blur",Ge=wc;break;case"beforeblur":case"afterblur":Ge=wc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=H0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=r_;break;case Ah:case bh:case Ch:Ge=X0;break;case Rh:Ge=a_;break;case"scroll":Ge=V0;break;case"wheel":Ge=l_;break;case"copy":case"cut":case"paste":Ge=Y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=lh}var Ye=(i&4)!==0,tn=!Ye&&n==="scroll",J=Ye?xe!==null?xe+"Capture":null:xe;Ye=[];for(var j=le,ie;j!==null;){ie=j;var Ce=ie.stateNode;if(ie.tag===5&&Ce!==null&&(ie=Ce,J!==null&&(Ce=Ut(j,J),Ce!=null&&Ye.push(Da(j,Ce,ie)))),tn)break;j=j.return}0<Ye.length&&(xe=new Ge(xe,Xe,null,a,Se),ye.push({event:xe,listeners:Ye}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Ge=n==="mouseout"||n==="pointerout",xe&&a!==we&&(Xe=a.relatedTarget||a.fromElement)&&($r(Xe)||Xe[$i]))break e;if((Ge||xe)&&(xe=Se.window===Se?Se:(xe=Se.ownerDocument)?xe.defaultView||xe.parentWindow:window,Ge?(Xe=a.relatedTarget||a.toElement,Ge=le,Xe=Xe?$r(Xe):null,Xe!==null&&(tn=Ri(Xe),Xe!==tn||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Ge=null,Xe=le),Ge!==Xe)){if(Ye=ah,Ce="onMouseLeave",J="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=lh,Ce="onPointerLeave",J="onPointerEnter",j="pointer"),tn=Ge==null?xe:Rs(Ge),ie=Xe==null?xe:Rs(Xe),xe=new Ye(Ce,j+"leave",Ge,a,Se),xe.target=tn,xe.relatedTarget=ie,Ce=null,$r(Se)===le&&(Ye=new Ye(J,j+"enter",Xe,a,Se),Ye.target=ie,Ye.relatedTarget=tn,Ce=Ye),tn=Ce,Ge&&Xe)t:{for(Ye=Ge,J=Xe,j=0,ie=Ye;ie;ie=bs(ie))j++;for(ie=0,Ce=J;Ce;Ce=bs(Ce))ie++;for(;0<j-ie;)Ye=bs(Ye),j--;for(;0<ie-j;)J=bs(J),ie--;for(;j--;){if(Ye===J||J!==null&&Ye===J.alternate)break t;Ye=bs(Ye),J=bs(J)}Ye=null}else Ye=null;Ge!==null&&Uh(ye,xe,Ge,Ye,!1),Xe!==null&&tn!==null&&Uh(ye,tn,Xe,Ye,!0)}}e:{if(xe=le?Rs(le):window,Ge=xe.nodeName&&xe.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&xe.type==="file")var Ze=m_;else if(ph(xe))if(gh)Ze=v_;else{Ze=__;var nt=g_}else(Ge=xe.nodeName)&&Ge.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ze=x_);if(Ze&&(Ze=Ze(n,le))){mh(ye,Ze,a,Se);break e}nt&&nt(n,xe,le),n==="focusout"&&(nt=xe._wrapperState)&&nt.controlled&&xe.type==="number"&&ln(xe,"number",xe.value)}switch(nt=le?Rs(le):window,n){case"focusin":(ph(nt)||nt.contentEditable==="true")&&(ws=nt,Nc=le,Pa=null);break;case"focusout":Pa=Nc=ws=null;break;case"mousedown":Lc=!0;break;case"contextmenu":case"mouseup":case"dragend":Lc=!1,Th(ye,a,Se);break;case"selectionchange":if(M_)break;case"keydown":case"keyup":Th(ye,a,Se)}var it;if(bc)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Ts?dh(n,a)&&(ut="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ut="onCompositionStart");ut&&(ch&&a.locale!=="ko"&&(Ts||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Ts&&(it=rh()):(vr=Se,yc="value"in vr?vr.value:vr.textContent,Ts=!0)),nt=No(le,ut),0<nt.length&&(ut=new oh(ut,n,null,a,Se),ye.push({event:ut,listeners:nt}),it?ut.data=it:(it=hh(a),it!==null&&(ut.data=it)))),(it=u_?f_(n,a):d_(n,a))&&(le=No(le,"onBeforeInput"),0<le.length&&(Se=new oh("onBeforeInput","beforeinput",null,a,Se),ye.push({event:Se,listeners:le}),Se.data=it))}Dh(ye,i)})}function Da(n,i,a){return{instance:n,listener:i,currentTarget:a}}function No(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=Ut(n,a),p!=null&&c.unshift(Da(n,p,f)),p=Ut(n,i),p!=null&&c.push(Da(n,p,f))),n=n.return}return c}function bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Uh(n,i,a,c,f){for(var p=i._reactName,T=[];a!==null&&a!==c;){var F=a,V=F.alternate,le=F.stateNode;if(V!==null&&V===c)break;F.tag===5&&le!==null&&(F=le,f?(V=Ut(a,p),V!=null&&T.unshift(Da(a,V,F))):f||(V=Ut(a,p),V!=null&&T.push(Da(a,V,F)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var A_=/\r\n?/g,b_=/\u0000|\uFFFD/g;function Fh(n){return(typeof n=="string"?n:""+n).replace(A_,`
`).replace(b_,"")}function Lo(n,i,a){if(i=Fh(i),Fh(n)!==i&&a)throw Error(t(425))}function Do(){}var kc=null,Bc=null;function zc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Vc=typeof setTimeout=="function"?setTimeout:void 0,C_=typeof clearTimeout=="function"?clearTimeout:void 0,Oh=typeof Promise=="function"?Promise:void 0,R_=typeof queueMicrotask=="function"?queueMicrotask:typeof Oh<"u"?function(n){return Oh.resolve(null).then(n).catch(P_)}:Vc;function P_(n){setTimeout(function(){throw n})}function Gc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),Ea(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);Ea(i)}function yr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function kh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Ni="__reactFiber$"+Cs,Ia="__reactProps$"+Cs,$i="__reactContainer$"+Cs,Hc="__reactEvents$"+Cs,N_="__reactListeners$"+Cs,L_="__reactHandles$"+Cs;function $r(n){var i=n[Ni];if(i)return i;for(var a=n.parentNode;a;){if(i=a[$i]||a[Ni]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=kh(n);n!==null;){if(a=n[Ni])return a;n=kh(n)}return i}n=a,a=n.parentNode}return null}function Ua(n){return n=n[Ni]||n[$i],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Rs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Io(n){return n[Ia]||null}var Wc=[],Ps=-1;function Mr(n){return{current:n}}function Xt(n){0>Ps||(n.current=Wc[Ps],Wc[Ps]=null,Ps--)}function Gt(n,i){Ps++,Wc[Ps]=n.current,n.current=i}var Er={},En=Mr(Er),Bn=Mr(!1),Kr=Er;function Ns(n,i){var a=n.type.contextTypes;if(!a)return Er;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in a)f[p]=i[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function zn(n){return n=n.childContextTypes,n!=null}function Uo(){Xt(Bn),Xt(En)}function Bh(n,i,a){if(En.current!==Er)throw Error(t(168));Gt(En,i),Gt(Bn,a)}function zh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,ve(n)||"Unknown",f));return ue({},a,c)}function Fo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Er,Kr=En.current,Gt(En,n),Gt(Bn,Bn.current),!0}function Vh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=zh(n,i,Kr),c.__reactInternalMemoizedMergedChildContext=n,Xt(Bn),Xt(En),Gt(En,n)):Xt(Bn),Gt(Bn,a)}var Ki=null,Oo=!1,jc=!1;function Gh(n){Ki===null?Ki=[n]:Ki.push(n)}function D_(n){Oo=!0,Gh(n)}function Tr(){if(!jc&&Ki!==null){jc=!0;var n=0,i=xt;try{var a=Ki;for(xt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ki=null,Oo=!1}catch(f){throw Ki!==null&&(Ki=Ki.slice(n+1)),xo(xa,Tr),f}finally{xt=i,jc=!1}}return null}var Ls=[],Ds=0,ko=null,Bo=0,ii=[],ri=0,Zr=null,Zi=1,Qi="";function Qr(n,i){Ls[Ds++]=Bo,Ls[Ds++]=ko,ko=n,Bo=i}function Hh(n,i,a){ii[ri++]=Zi,ii[ri++]=Qi,ii[ri++]=Zr,Zr=n;var c=Zi;n=Qi;var f=32-Re(c)-1;c&=~(1<<f),a+=1;var p=32-Re(i)+f;if(30<p){var T=f-f%5;p=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Zi=1<<32-Re(i)+f|a<<f|c,Qi=p+n}else Zi=1<<p|a<<f|c,Qi=n}function Xc(n){n.return!==null&&(Qr(n,1),Hh(n,1,0))}function qc(n){for(;n===ko;)ko=Ls[--Ds],Ls[Ds]=null,Bo=Ls[--Ds],Ls[Ds]=null;for(;n===Zr;)Zr=ii[--ri],ii[ri]=null,Qi=ii[--ri],ii[ri]=null,Zi=ii[--ri],ii[ri]=null}var $n=null,Kn=null,Yt=!1,gi=null;function Wh(n,i){var a=li(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function jh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,$n=n,Kn=yr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,$n=n,Kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Zr!==null?{id:Zi,overflow:Qi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=li(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,$n=n,Kn=null,!0):!1;default:return!1}}function Yc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function $c(n){if(Yt){var i=Kn;if(i){var a=i;if(!jh(n,i)){if(Yc(n))throw Error(t(418));i=yr(a.nextSibling);var c=$n;i&&jh(n,i)?Wh(c,a):(n.flags=n.flags&-4097|2,Yt=!1,$n=n)}}else{if(Yc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,$n=n}}}function Xh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;$n=n}function zo(n){if(n!==$n)return!1;if(!Yt)return Xh(n),Yt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!zc(n.type,n.memoizedProps)),i&&(i=Kn)){if(Yc(n))throw qh(),Error(t(418));for(;i;)Wh(n,i),i=yr(i.nextSibling)}if(Xh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Kn=yr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Kn=null}}else Kn=$n?yr(n.stateNode.nextSibling):null;return!0}function qh(){for(var n=Kn;n;)n=yr(n.nextSibling)}function Is(){Kn=$n=null,Yt=!1}function Kc(n){gi===null?gi=[n]:gi.push(n)}var I_=L.ReactCurrentBatchConfig;function Fa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(T){var F=f.refs;T===null?delete F[p]:F[p]=T},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Vo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Yh(n){var i=n._init;return i(n._payload)}function $h(n){function i(J,j){if(n){var ie=J.deletions;ie===null?(J.deletions=[j],J.flags|=16):ie.push(j)}}function a(J,j){if(!n)return null;for(;j!==null;)i(J,j),j=j.sibling;return null}function c(J,j){for(J=new Map;j!==null;)j.key!==null?J.set(j.key,j):J.set(j.index,j),j=j.sibling;return J}function f(J,j){return J=Lr(J,j),J.index=0,J.sibling=null,J}function p(J,j,ie){return J.index=ie,n?(ie=J.alternate,ie!==null?(ie=ie.index,ie<j?(J.flags|=2,j):ie):(J.flags|=2,j)):(J.flags|=1048576,j)}function T(J){return n&&J.alternate===null&&(J.flags|=2),J}function F(J,j,ie,Ce){return j===null||j.tag!==6?(j=Vu(ie,J.mode,Ce),j.return=J,j):(j=f(j,ie),j.return=J,j)}function V(J,j,ie,Ce){var Ze=ie.type;return Ze===O?Se(J,j,ie.props.children,Ce,ie.key):j!==null&&(j.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Z&&Yh(Ze)===j.type)?(Ce=f(j,ie.props),Ce.ref=Fa(J,j,ie),Ce.return=J,Ce):(Ce=fl(ie.type,ie.key,ie.props,null,J.mode,Ce),Ce.ref=Fa(J,j,ie),Ce.return=J,Ce)}function le(J,j,ie,Ce){return j===null||j.tag!==4||j.stateNode.containerInfo!==ie.containerInfo||j.stateNode.implementation!==ie.implementation?(j=Gu(ie,J.mode,Ce),j.return=J,j):(j=f(j,ie.children||[]),j.return=J,j)}function Se(J,j,ie,Ce,Ze){return j===null||j.tag!==7?(j=as(ie,J.mode,Ce,Ze),j.return=J,j):(j=f(j,ie),j.return=J,j)}function ye(J,j,ie){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Vu(""+j,J.mode,ie),j.return=J,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case B:return ie=fl(j.type,j.key,j.props,null,J.mode,ie),ie.ref=Fa(J,null,j),ie.return=J,ie;case D:return j=Gu(j,J.mode,ie),j.return=J,j;case Z:var Ce=j._init;return ye(J,Ce(j._payload),ie)}if(W(j)||ce(j))return j=as(j,J.mode,ie,null),j.return=J,j;Vo(J,j)}return null}function xe(J,j,ie,Ce){var Ze=j!==null?j.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Ze!==null?null:F(J,j,""+ie,Ce);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case B:return ie.key===Ze?V(J,j,ie,Ce):null;case D:return ie.key===Ze?le(J,j,ie,Ce):null;case Z:return Ze=ie._init,xe(J,j,Ze(ie._payload),Ce)}if(W(ie)||ce(ie))return Ze!==null?null:Se(J,j,ie,Ce,null);Vo(J,ie)}return null}function Ge(J,j,ie,Ce,Ze){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return J=J.get(ie)||null,F(j,J,""+Ce,Ze);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case B:return J=J.get(Ce.key===null?ie:Ce.key)||null,V(j,J,Ce,Ze);case D:return J=J.get(Ce.key===null?ie:Ce.key)||null,le(j,J,Ce,Ze);case Z:var nt=Ce._init;return Ge(J,j,ie,nt(Ce._payload),Ze)}if(W(Ce)||ce(Ce))return J=J.get(ie)||null,Se(j,J,Ce,Ze,null);Vo(j,Ce)}return null}function Xe(J,j,ie,Ce){for(var Ze=null,nt=null,it=j,ut=j=0,mn=null;it!==null&&ut<ie.length;ut++){it.index>ut?(mn=it,it=null):mn=it.sibling;var Nt=xe(J,it,ie[ut],Ce);if(Nt===null){it===null&&(it=mn);break}n&&it&&Nt.alternate===null&&i(J,it),j=p(Nt,j,ut),nt===null?Ze=Nt:nt.sibling=Nt,nt=Nt,it=mn}if(ut===ie.length)return a(J,it),Yt&&Qr(J,ut),Ze;if(it===null){for(;ut<ie.length;ut++)it=ye(J,ie[ut],Ce),it!==null&&(j=p(it,j,ut),nt===null?Ze=it:nt.sibling=it,nt=it);return Yt&&Qr(J,ut),Ze}for(it=c(J,it);ut<ie.length;ut++)mn=Ge(it,J,ut,ie[ut],Ce),mn!==null&&(n&&mn.alternate!==null&&it.delete(mn.key===null?ut:mn.key),j=p(mn,j,ut),nt===null?Ze=mn:nt.sibling=mn,nt=mn);return n&&it.forEach(function(Dr){return i(J,Dr)}),Yt&&Qr(J,ut),Ze}function Ye(J,j,ie,Ce){var Ze=ce(ie);if(typeof Ze!="function")throw Error(t(150));if(ie=Ze.call(ie),ie==null)throw Error(t(151));for(var nt=Ze=null,it=j,ut=j=0,mn=null,Nt=ie.next();it!==null&&!Nt.done;ut++,Nt=ie.next()){it.index>ut?(mn=it,it=null):mn=it.sibling;var Dr=xe(J,it,Nt.value,Ce);if(Dr===null){it===null&&(it=mn);break}n&&it&&Dr.alternate===null&&i(J,it),j=p(Dr,j,ut),nt===null?Ze=Dr:nt.sibling=Dr,nt=Dr,it=mn}if(Nt.done)return a(J,it),Yt&&Qr(J,ut),Ze;if(it===null){for(;!Nt.done;ut++,Nt=ie.next())Nt=ye(J,Nt.value,Ce),Nt!==null&&(j=p(Nt,j,ut),nt===null?Ze=Nt:nt.sibling=Nt,nt=Nt);return Yt&&Qr(J,ut),Ze}for(it=c(J,it);!Nt.done;ut++,Nt=ie.next())Nt=Ge(it,J,ut,Nt.value,Ce),Nt!==null&&(n&&Nt.alternate!==null&&it.delete(Nt.key===null?ut:Nt.key),j=p(Nt,j,ut),nt===null?Ze=Nt:nt.sibling=Nt,nt=Nt);return n&&it.forEach(function(hx){return i(J,hx)}),Yt&&Qr(J,ut),Ze}function tn(J,j,ie,Ce){if(typeof ie=="object"&&ie!==null&&ie.type===O&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case B:e:{for(var Ze=ie.key,nt=j;nt!==null;){if(nt.key===Ze){if(Ze=ie.type,Ze===O){if(nt.tag===7){a(J,nt.sibling),j=f(nt,ie.props.children),j.return=J,J=j;break e}}else if(nt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Z&&Yh(Ze)===nt.type){a(J,nt.sibling),j=f(nt,ie.props),j.ref=Fa(J,nt,ie),j.return=J,J=j;break e}a(J,nt);break}else i(J,nt);nt=nt.sibling}ie.type===O?(j=as(ie.props.children,J.mode,Ce,ie.key),j.return=J,J=j):(Ce=fl(ie.type,ie.key,ie.props,null,J.mode,Ce),Ce.ref=Fa(J,j,ie),Ce.return=J,J=Ce)}return T(J);case D:e:{for(nt=ie.key;j!==null;){if(j.key===nt)if(j.tag===4&&j.stateNode.containerInfo===ie.containerInfo&&j.stateNode.implementation===ie.implementation){a(J,j.sibling),j=f(j,ie.children||[]),j.return=J,J=j;break e}else{a(J,j);break}else i(J,j);j=j.sibling}j=Gu(ie,J.mode,Ce),j.return=J,J=j}return T(J);case Z:return nt=ie._init,tn(J,j,nt(ie._payload),Ce)}if(W(ie))return Xe(J,j,ie,Ce);if(ce(ie))return Ye(J,j,ie,Ce);Vo(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,j!==null&&j.tag===6?(a(J,j.sibling),j=f(j,ie),j.return=J,J=j):(a(J,j),j=Vu(ie,J.mode,Ce),j.return=J,J=j),T(J)):a(J,j)}return tn}var Us=$h(!0),Kh=$h(!1),Go=Mr(null),Ho=null,Fs=null,Zc=null;function Qc(){Zc=Fs=Ho=null}function Jc(n){var i=Go.current;Xt(Go),n._currentValue=i}function eu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Os(n,i){Ho=n,Zc=Fs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Vn=!0),n.firstContext=null)}function si(n){var i=n._currentValue;if(Zc!==n)if(n={context:n,memoizedValue:i,next:null},Fs===null){if(Ho===null)throw Error(t(308));Fs=n,Ho.dependencies={lanes:0,firstContext:n}}else Fs=Fs.next=n;return i}var Jr=null;function tu(n){Jr===null?Jr=[n]:Jr.push(n)}function Zh(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,tu(i)):(a.next=f.next,f.next=a),i.interleaved=a,Ji(n,c)}function Ji(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var wr=!1;function nu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function er(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Ar(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(bt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ji(n,a)}return f=c.interleaved,f===null?(i.next=i,tu(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ji(n,a)}function Wo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,kn(n,a)}}function Jh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?f=p=T:p=p.next=T,a=a.next}while(a!==null);p===null?f=p=i:p=p.next=i}else f=p=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function jo(n,i,a,c){var f=n.updateQueue;wr=!1;var p=f.firstBaseUpdate,T=f.lastBaseUpdate,F=f.shared.pending;if(F!==null){f.shared.pending=null;var V=F,le=V.next;V.next=null,T===null?p=le:T.next=le,T=V;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,F=Se.lastBaseUpdate,F!==T&&(F===null?Se.firstBaseUpdate=le:F.next=le,Se.lastBaseUpdate=V))}if(p!==null){var ye=f.baseState;T=0,Se=le=V=null,F=p;do{var xe=F.lane,Ge=F.eventTime;if((c&xe)===xe){Se!==null&&(Se=Se.next={eventTime:Ge,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Xe=n,Ye=F;switch(xe=i,Ge=a,Ye.tag){case 1:if(Xe=Ye.payload,typeof Xe=="function"){ye=Xe.call(Ge,ye,xe);break e}ye=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=Ye.payload,xe=typeof Xe=="function"?Xe.call(Ge,ye,xe):Xe,xe==null)break e;ye=ue({},ye,xe);break e;case 2:wr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,xe=f.effects,xe===null?f.effects=[F]:xe.push(F))}else Ge={eventTime:Ge,lane:xe,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Se===null?(le=Se=Ge,V=ye):Se=Se.next=Ge,T|=xe;if(F=F.next,F===null){if(F=f.shared.pending,F===null)break;xe=F,F=xe.next,xe.next=null,f.lastBaseUpdate=xe,f.shared.pending=null}}while(!0);if(Se===null&&(V=ye),f.baseState=V,f.firstBaseUpdate=le,f.lastBaseUpdate=Se,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);ns|=T,n.lanes=T,n.memoizedState=ye}}function ep(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Oa={},Li=Mr(Oa),ka=Mr(Oa),Ba=Mr(Oa);function es(n){if(n===Oa)throw Error(t(174));return n}function iu(n,i){switch(Gt(Ba,i),Gt(ka,n),Gt(Li,Oa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=M(i,n)}Xt(Li),Gt(Li,i)}function ks(){Xt(Li),Xt(ka),Xt(Ba)}function tp(n){es(Ba.current);var i=es(Li.current),a=M(i,n.type);i!==a&&(Gt(ka,n),Gt(Li,a))}function ru(n){ka.current===n&&(Xt(Li),Xt(ka))}var Zt=Mr(0);function Xo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var su=[];function au(){for(var n=0;n<su.length;n++)su[n]._workInProgressVersionPrimary=null;su.length=0}var qo=L.ReactCurrentDispatcher,ou=L.ReactCurrentBatchConfig,ts=0,Qt=null,cn=null,hn=null,Yo=!1,za=!1,Va=0,U_=0;function Tn(){throw Error(t(321))}function lu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!mi(n[a],i[a]))return!1;return!0}function cu(n,i,a,c,f,p){if(ts=p,Qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,qo.current=n===null||n.memoizedState===null?B_:z_,n=a(c,f),za){p=0;do{if(za=!1,Va=0,25<=p)throw Error(t(301));p+=1,hn=cn=null,i.updateQueue=null,qo.current=V_,n=a(c,f)}while(za)}if(qo.current=Zo,i=cn!==null&&cn.next!==null,ts=0,hn=cn=Qt=null,Yo=!1,i)throw Error(t(300));return n}function uu(){var n=Va!==0;return Va=0,n}function Di(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Qt.memoizedState=hn=n:hn=hn.next=n,hn}function ai(){if(cn===null){var n=Qt.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var i=hn===null?Qt.memoizedState:hn.next;if(i!==null)hn=i,cn=n;else{if(n===null)throw Error(t(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},hn===null?Qt.memoizedState=hn=n:hn=hn.next=n}return hn}function Ga(n,i){return typeof i=="function"?i(n):i}function fu(n){var i=ai(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=cn,f=c.baseQueue,p=a.pending;if(p!==null){if(f!==null){var T=f.next;f.next=p.next,p.next=T}c.baseQueue=f=p,a.pending=null}if(f!==null){p=f.next,c=c.baseState;var F=T=null,V=null,le=p;do{var Se=le.lane;if((ts&Se)===Se)V!==null&&(V=V.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),c=le.hasEagerState?le.eagerState:n(c,le.action);else{var ye={lane:Se,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};V===null?(F=V=ye,T=c):V=V.next=ye,Qt.lanes|=Se,ns|=Se}le=le.next}while(le!==null&&le!==p);V===null?T=c:V.next=F,mi(c,i.memoizedState)||(Vn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=V,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do p=f.lane,Qt.lanes|=p,ns|=p,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function du(n){var i=ai(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,p=i.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do p=n(p,T.action),T=T.next;while(T!==f);mi(p,i.memoizedState)||(Vn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function np(){}function ip(n,i){var a=Qt,c=ai(),f=i(),p=!mi(c.memoizedState,f);if(p&&(c.memoizedState=f,Vn=!0),c=c.queue,hu(ap.bind(null,a,c,n),[n]),c.getSnapshot!==i||p||hn!==null&&hn.memoizedState.tag&1){if(a.flags|=2048,Ha(9,sp.bind(null,a,c,f,i),void 0,null),pn===null)throw Error(t(349));(ts&30)!==0||rp(a,i,f)}return f}function rp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function sp(n,i,a,c){i.value=a,i.getSnapshot=c,op(i)&&lp(n)}function ap(n,i,a){return a(function(){op(i)&&lp(n)})}function op(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!mi(n,a)}catch{return!0}}function lp(n){var i=Ji(n,1);i!==null&&Si(i,n,1,-1)}function cp(n){var i=Di();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:n},i.queue=n,n=n.dispatch=k_.bind(null,Qt,n),[i.memoizedState,n]}function Ha(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function up(){return ai().memoizedState}function $o(n,i,a,c){var f=Di();Qt.flags|=n,f.memoizedState=Ha(1|i,a,void 0,c===void 0?null:c)}function Ko(n,i,a,c){var f=ai();c=c===void 0?null:c;var p=void 0;if(cn!==null){var T=cn.memoizedState;if(p=T.destroy,c!==null&&lu(c,T.deps)){f.memoizedState=Ha(i,a,p,c);return}}Qt.flags|=n,f.memoizedState=Ha(1|i,a,p,c)}function fp(n,i){return $o(8390656,8,n,i)}function hu(n,i){return Ko(2048,8,n,i)}function dp(n,i){return Ko(4,2,n,i)}function hp(n,i){return Ko(4,4,n,i)}function pp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function mp(n,i,a){return a=a!=null?a.concat([n]):null,Ko(4,4,pp.bind(null,i,n),a)}function pu(){}function gp(n,i){var a=ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&lu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function _p(n,i){var a=ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&lu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function xp(n,i,a){return(ts&21)===0?(n.baseState&&(n.baseState=!1,Vn=!0),n.memoizedState=a):(mi(a,i)||(a=Ve(),Qt.lanes|=a,ns|=a,n.baseState=!0),i)}function F_(n,i){var a=xt;xt=a!==0&&4>a?a:4,n(!0);var c=ou.transition;ou.transition={};try{n(!1),i()}finally{xt=a,ou.transition=c}}function vp(){return ai().memoizedState}function O_(n,i,a){var c=Pr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Sp(n))yp(i,a);else if(a=Zh(n,i,a,c),a!==null){var f=Dn();Si(a,n,c,f),Mp(a,i,c)}}function k_(n,i,a){var c=Pr(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sp(n))yp(i,f);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var T=i.lastRenderedState,F=p(T,a);if(f.hasEagerState=!0,f.eagerState=F,mi(F,T)){var V=i.interleaved;V===null?(f.next=f,tu(i)):(f.next=V.next,V.next=f),i.interleaved=f;return}}catch{}finally{}a=Zh(n,i,f,c),a!==null&&(f=Dn(),Si(a,n,c,f),Mp(a,i,c))}}function Sp(n){var i=n.alternate;return n===Qt||i!==null&&i===Qt}function yp(n,i){za=Yo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Mp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,kn(n,a)}}var Zo={readContext:si,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},B_={readContext:si,useCallback:function(n,i){return Di().memoizedState=[n,i===void 0?null:i],n},useContext:si,useEffect:fp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,$o(4194308,4,pp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return $o(4194308,4,n,i)},useInsertionEffect:function(n,i){return $o(4,2,n,i)},useMemo:function(n,i){var a=Di();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Di();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=O_.bind(null,Qt,n),[c.memoizedState,n]},useRef:function(n){var i=Di();return n={current:n},i.memoizedState=n},useState:cp,useDebugValue:pu,useDeferredValue:function(n){return Di().memoizedState=n},useTransition:function(){var n=cp(!1),i=n[0];return n=F_.bind(null,n[1]),Di().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Qt,f=Di();if(Yt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),pn===null)throw Error(t(349));(ts&30)!==0||rp(c,i,a)}f.memoizedState=a;var p={value:a,getSnapshot:i};return f.queue=p,fp(ap.bind(null,c,p,n),[n]),c.flags|=2048,Ha(9,sp.bind(null,c,p,a,i),void 0,null),a},useId:function(){var n=Di(),i=pn.identifierPrefix;if(Yt){var a=Qi,c=Zi;a=(c&~(1<<32-Re(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Va++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=U_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},z_={readContext:si,useCallback:gp,useContext:si,useEffect:hu,useImperativeHandle:mp,useInsertionEffect:dp,useLayoutEffect:hp,useMemo:_p,useReducer:fu,useRef:up,useState:function(){return fu(Ga)},useDebugValue:pu,useDeferredValue:function(n){var i=ai();return xp(i,cn.memoizedState,n)},useTransition:function(){var n=fu(Ga)[0],i=ai().memoizedState;return[n,i]},useMutableSource:np,useSyncExternalStore:ip,useId:vp,unstable_isNewReconciler:!1},V_={readContext:si,useCallback:gp,useContext:si,useEffect:hu,useImperativeHandle:mp,useInsertionEffect:dp,useLayoutEffect:hp,useMemo:_p,useReducer:du,useRef:up,useState:function(){return du(Ga)},useDebugValue:pu,useDeferredValue:function(n){var i=ai();return cn===null?i.memoizedState=n:xp(i,cn.memoizedState,n)},useTransition:function(){var n=du(Ga)[0],i=ai().memoizedState;return[n,i]},useMutableSource:np,useSyncExternalStore:ip,useId:vp,unstable_isNewReconciler:!1};function _i(n,i){if(n&&n.defaultProps){i=ue({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function mu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ue({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Qo={isMounted:function(n){return(n=n._reactInternals)?Ri(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Dn(),f=Pr(n),p=er(c,f);p.payload=i,a!=null&&(p.callback=a),i=Ar(n,p,f),i!==null&&(Si(i,n,f,c),Wo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Dn(),f=Pr(n),p=er(c,f);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=Ar(n,p,f),i!==null&&(Si(i,n,f,c),Wo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Dn(),c=Pr(n),f=er(a,c);f.tag=2,i!=null&&(f.callback=i),i=Ar(n,f,c),i!==null&&(Si(i,n,c,a),Wo(i,n,c))}};function Ep(n,i,a,c,f,p,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,T):i.prototype&&i.prototype.isPureReactComponent?!Ra(a,c)||!Ra(f,p):!0}function Tp(n,i,a){var c=!1,f=Er,p=i.contextType;return typeof p=="object"&&p!==null?p=si(p):(f=zn(i)?Kr:En.current,c=i.contextTypes,p=(c=c!=null)?Ns(n,f):Er),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=p),i}function wp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Qo.enqueueReplaceState(i,i.state,null)}function gu(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},nu(n);var p=i.contextType;typeof p=="object"&&p!==null?f.context=si(p):(p=zn(i)?Kr:En.current,f.context=Ns(n,p)),f.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(mu(n,i,p,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Qo.enqueueReplaceState(f,f.state,null),jo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Bs(n,i){try{var a="",c=i;do a+=Le(c),c=c.return;while(c);var f=a}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:f,digest:null}}function _u(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function xu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var G_=typeof WeakMap=="function"?WeakMap:Map;function Ap(n,i,a){a=er(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){sl||(sl=!0,Du=c),xu(n,i)},a}function bp(n,i,a){a=er(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){xu(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){xu(n,i),typeof c!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Cp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new G_;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=nx.bind(null,n,i,a),i.then(n,n))}function Rp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Pp(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=er(-1,1),i.tag=2,Ar(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var H_=L.ReactCurrentOwner,Vn=!1;function Ln(n,i,a,c){i.child=n===null?Kh(i,null,a,c):Us(i,n.child,a,c)}function Np(n,i,a,c,f){a=a.render;var p=i.ref;return Os(i,f),c=cu(n,i,a,c,p,f),a=uu(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,tr(n,i,f)):(Yt&&a&&Xc(i),i.flags|=1,Ln(n,i,c,f),i.child)}function Lp(n,i,a,c,f){if(n===null){var p=a.type;return typeof p=="function"&&!zu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,Dp(n,i,p,c,f)):(n=fl(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&f)===0){var T=p.memoizedProps;if(a=a.compare,a=a!==null?a:Ra,a(T,c)&&n.ref===i.ref)return tr(n,i,f)}return i.flags|=1,n=Lr(p,c),n.ref=i.ref,n.return=i,i.child=n}function Dp(n,i,a,c,f){if(n!==null){var p=n.memoizedProps;if(Ra(p,c)&&n.ref===i.ref)if(Vn=!1,i.pendingProps=c=p,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Vn=!0);else return i.lanes=n.lanes,tr(n,i,f)}return vu(n,i,a,c,f)}function Ip(n,i,a){var c=i.pendingProps,f=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Vs,Zn),Zn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Gt(Vs,Zn),Zn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Gt(Vs,Zn),Zn|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,Gt(Vs,Zn),Zn|=c;return Ln(n,i,f,a),i.child}function Up(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function vu(n,i,a,c,f){var p=zn(a)?Kr:En.current;return p=Ns(i,p),Os(i,f),a=cu(n,i,a,c,p,f),c=uu(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,tr(n,i,f)):(Yt&&c&&Xc(i),i.flags|=1,Ln(n,i,a,f),i.child)}function Fp(n,i,a,c,f){if(zn(a)){var p=!0;Fo(i)}else p=!1;if(Os(i,f),i.stateNode===null)el(n,i),Tp(i,a,c),gu(i,a,c,f),c=!0;else if(n===null){var T=i.stateNode,F=i.memoizedProps;T.props=F;var V=T.context,le=a.contextType;typeof le=="object"&&le!==null?le=si(le):(le=zn(a)?Kr:En.current,le=Ns(i,le));var Se=a.getDerivedStateFromProps,ye=typeof Se=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==c||V!==le)&&wp(i,T,c,le),wr=!1;var xe=i.memoizedState;T.state=xe,jo(i,c,T,f),V=i.memoizedState,F!==c||xe!==V||Bn.current||wr?(typeof Se=="function"&&(mu(i,a,Se,c),V=i.memoizedState),(F=wr||Ep(i,a,F,c,xe,V,le))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),T.props=c,T.state=V,T.context=le,c=F):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Qh(n,i),F=i.memoizedProps,le=i.type===i.elementType?F:_i(i.type,F),T.props=le,ye=i.pendingProps,xe=T.context,V=a.contextType,typeof V=="object"&&V!==null?V=si(V):(V=zn(a)?Kr:En.current,V=Ns(i,V));var Ge=a.getDerivedStateFromProps;(Se=typeof Ge=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==ye||xe!==V)&&wp(i,T,c,V),wr=!1,xe=i.memoizedState,T.state=xe,jo(i,c,T,f);var Xe=i.memoizedState;F!==ye||xe!==Xe||Bn.current||wr?(typeof Ge=="function"&&(mu(i,a,Ge,c),Xe=i.memoizedState),(le=wr||Ep(i,a,le,c,xe,Xe,V)||!1)?(Se||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Xe,V),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Xe,V)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Xe),T.props=c,T.state=Xe,T.context=V,c=le):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),c=!1)}return Su(n,i,a,c,p,f)}function Su(n,i,a,c,f,p){Up(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return f&&Vh(i,a,!1),tr(n,i,p);c=i.stateNode,H_.current=i;var F=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Us(i,n.child,null,p),i.child=Us(i,null,F,p)):Ln(n,i,F,p),i.memoizedState=c.state,f&&Vh(i,a,!0),i.child}function Op(n){var i=n.stateNode;i.pendingContext?Bh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Bh(n,i.context,!1),iu(n,i.containerInfo)}function kp(n,i,a,c,f){return Is(),Kc(f),i.flags|=256,Ln(n,i,a,c),i.child}var yu={dehydrated:null,treeContext:null,retryLane:0};function Mu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Bp(n,i,a){var c=i.pendingProps,f=Zt.current,p=!1,T=(i.flags&128)!==0,F;if((F=T)||(F=n!==null&&n.memoizedState===null?!1:(f&2)!==0),F?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Gt(Zt,f&1),n===null)return $c(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,p?(c=i.mode,p=i.child,T={mode:"hidden",children:T},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=T):p=dl(T,c,0,null),n=as(n,c,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=Mu(a),i.memoizedState=yu,n):Eu(i,T));if(f=n.memoizedState,f!==null&&(F=f.dehydrated,F!==null))return W_(n,i,T,c,F,f,a);if(p){p=c.fallback,T=i.mode,f=n.child,F=f.sibling;var V={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=Lr(f,V),c.subtreeFlags=f.subtreeFlags&14680064),F!==null?p=Lr(F,p):(p=as(p,T,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,T=n.child.memoizedState,T=T===null?Mu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},p.memoizedState=T,p.childLanes=n.childLanes&~a,i.memoizedState=yu,c}return p=n.child,n=p.sibling,c=Lr(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Eu(n,i){return i=dl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Jo(n,i,a,c){return c!==null&&Kc(c),Us(i,n.child,null,a),n=Eu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function W_(n,i,a,c,f,p,T){if(a)return i.flags&256?(i.flags&=-257,c=_u(Error(t(422))),Jo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=c.fallback,f=i.mode,c=dl({mode:"visible",children:c.children},f,0,null),p=as(p,f,T,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&Us(i,n.child,null,T),i.child.memoizedState=Mu(T),i.memoizedState=yu,p);if((i.mode&1)===0)return Jo(n,i,T,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var F=c.dgst;return c=F,p=Error(t(419)),c=_u(p,c,void 0),Jo(n,i,T,c)}if(F=(T&n.childLanes)!==0,Vn||F){if(c=pn,c!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|T))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Ji(n,f),Si(c,n,f,-1))}return Bu(),c=_u(Error(t(421))),Jo(n,i,T,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=ix.bind(null,n),f._reactRetry=i,null):(n=p.treeContext,Kn=yr(f.nextSibling),$n=i,Yt=!0,gi=null,n!==null&&(ii[ri++]=Zi,ii[ri++]=Qi,ii[ri++]=Zr,Zi=n.id,Qi=n.overflow,Zr=i),i=Eu(i,c.children),i.flags|=4096,i)}function zp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),eu(n.return,i,a)}function Tu(n,i,a,c,f){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=f)}function Vp(n,i,a){var c=i.pendingProps,f=c.revealOrder,p=c.tail;if(Ln(n,i,c.children,a),c=Zt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zp(n,a,i);else if(n.tag===19)zp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Gt(Zt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Xo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Tu(i,!1,f,a,p);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Xo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Tu(i,!0,a,null,p);break;case"together":Tu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function el(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function tr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ns|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Lr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Lr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function j_(n,i,a){switch(i.tag){case 3:Op(i),Is();break;case 5:tp(i);break;case 1:zn(i.type)&&Fo(i);break;case 4:iu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Gt(Go,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Gt(Zt,Zt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Bp(n,i,a):(Gt(Zt,Zt.current&1),n=tr(n,i,a),n!==null?n.sibling:null);Gt(Zt,Zt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Vp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Gt(Zt,Zt.current),c)break;return null;case 22:case 23:return i.lanes=0,Ip(n,i,a)}return tr(n,i,a)}var Gp,wu,Hp,Wp;Gp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},wu=function(){},Hp=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,es(Li.current);var p=null;switch(a){case"input":f=Mt(n,f),c=Mt(n,c),p=[];break;case"select":f=ue({},f,{value:void 0}),c=ue({},c,{value:void 0}),p=[];break;case"textarea":f=Be(n,f),c=Be(n,c),p=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Do)}ke(a,c);var T;a=null;for(le in f)if(!c.hasOwnProperty(le)&&f.hasOwnProperty(le)&&f[le]!=null)if(le==="style"){var F=f[le];for(T in F)F.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(o.hasOwnProperty(le)?p||(p=[]):(p=p||[]).push(le,null));for(le in c){var V=c[le];if(F=f!=null?f[le]:void 0,c.hasOwnProperty(le)&&V!==F&&(V!=null||F!=null))if(le==="style")if(F){for(T in F)!F.hasOwnProperty(T)||V&&V.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in V)V.hasOwnProperty(T)&&F[T]!==V[T]&&(a||(a={}),a[T]=V[T])}else a||(p||(p=[]),p.push(le,a)),a=V;else le==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,F=F?F.__html:void 0,V!=null&&F!==V&&(p=p||[]).push(le,V)):le==="children"?typeof V!="string"&&typeof V!="number"||(p=p||[]).push(le,""+V):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(o.hasOwnProperty(le)?(V!=null&&le==="onScroll"&&jt("scroll",n),p||F===V||(p=[])):(p=p||[]).push(le,V))}a&&(p=p||[]).push("style",a);var le=p;(i.updateQueue=le)&&(i.flags|=4)}},Wp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Wa(n,i){if(!Yt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function wn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function X_(n,i,a){var c=i.pendingProps;switch(qc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(i),null;case 1:return zn(i.type)&&Uo(),wn(i),null;case 3:return c=i.stateNode,ks(),Xt(Bn),Xt(En),au(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(zo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,gi!==null&&(Fu(gi),gi=null))),wu(n,i),wn(i),null;case 5:ru(i);var f=es(Ba.current);if(a=i.type,n!==null&&i.stateNode!=null)Hp(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return wn(i),null}if(n=es(Li.current),zo(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[Ni]=i,c[Ia]=p,n=(i.mode&1)!==0,a){case"dialog":jt("cancel",c),jt("close",c);break;case"iframe":case"object":case"embed":jt("load",c);break;case"video":case"audio":for(f=0;f<Na.length;f++)jt(Na[f],c);break;case"source":jt("error",c);break;case"img":case"image":case"link":jt("error",c),jt("load",c);break;case"details":jt("toggle",c);break;case"input":Lt(c,p),jt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},jt("invalid",c);break;case"textarea":tt(c,p),jt("invalid",c)}ke(a,p),f=null;for(var T in p)if(p.hasOwnProperty(T)){var F=p[T];T==="children"?typeof F=="string"?c.textContent!==F&&(p.suppressHydrationWarning!==!0&&Lo(c.textContent,F,n),f=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(p.suppressHydrationWarning!==!0&&Lo(c.textContent,F,n),f=["children",""+F]):o.hasOwnProperty(T)&&F!=null&&T==="onScroll"&&jt("scroll",c)}switch(a){case"input":et(c),It(c,p,!0);break;case"textarea":et(c),yt(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Do)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=P(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Ni]=i,n[Ia]=c,Gp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ae(a,c),a){case"dialog":jt("cancel",n),jt("close",n),f=c;break;case"iframe":case"object":case"embed":jt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Na.length;f++)jt(Na[f],n);f=c;break;case"source":jt("error",n),f=c;break;case"img":case"image":case"link":jt("error",n),jt("load",n),f=c;break;case"details":jt("toggle",n),f=c;break;case"input":Lt(n,c),f=Mt(n,c),jt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=ue({},c,{value:void 0}),jt("invalid",n);break;case"textarea":tt(n,c),f=Be(n,c),jt("invalid",n);break;default:f=c}ke(a,f),F=f;for(p in F)if(F.hasOwnProperty(p)){var V=F[p];p==="style"?pe(n,V):p==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&he(n,V)):p==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&ge(n,V):typeof V=="number"&&ge(n,""+V):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?V!=null&&p==="onScroll"&&jt("scroll",n):V!=null&&N(n,p,V,T))}switch(a){case"input":et(n),It(n,c,!1);break;case"textarea":et(n),yt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?zt(n,!!c.multiple,p,!1):c.defaultValue!=null&&zt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Do)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return wn(i),null;case 6:if(n&&i.stateNode!=null)Wp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=es(Ba.current),es(Li.current),zo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ni]=i,(p=c.nodeValue!==a)&&(n=$n,n!==null))switch(n.tag){case 3:Lo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Lo(c.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ni]=i,i.stateNode=c}return wn(i),null;case 13:if(Xt(Zt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&Kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)qh(),Is(),i.flags|=98560,p=!1;else if(p=zo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Ni]=i}else Is(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;wn(i),p=!1}else gi!==null&&(Fu(gi),gi=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Zt.current&1)!==0?un===0&&(un=3):Bu())),i.updateQueue!==null&&(i.flags|=4),wn(i),null);case 4:return ks(),wu(n,i),n===null&&La(i.stateNode.containerInfo),wn(i),null;case 10:return Jc(i.type._context),wn(i),null;case 17:return zn(i.type)&&Uo(),wn(i),null;case 19:if(Xt(Zt),p=i.memoizedState,p===null)return wn(i),null;if(c=(i.flags&128)!==0,T=p.rendering,T===null)if(c)Wa(p,!1);else{if(un!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Xo(n),T!==null){for(i.flags|=128,Wa(p,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,n=c,p.flags&=14680066,T=p.alternate,T===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=T.childLanes,p.lanes=T.lanes,p.child=T.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=T.memoizedProps,p.memoizedState=T.memoizedState,p.updateQueue=T.updateQueue,p.type=T.type,n=T.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Gt(Zt,Zt.current&1|2),i.child}n=n.sibling}p.tail!==null&&Kt()>Gs&&(i.flags|=128,c=!0,Wa(p,!1),i.lanes=4194304)}else{if(!c)if(n=Xo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Wa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!T.alternate&&!Yt)return wn(i),null}else 2*Kt()-p.renderingStartTime>Gs&&a!==1073741824&&(i.flags|=128,c=!0,Wa(p,!1),i.lanes=4194304);p.isBackwards?(T.sibling=i.child,i.child=T):(a=p.last,a!==null?a.sibling=T:i.child=T,p.last=T)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Kt(),i.sibling=null,a=Zt.current,Gt(Zt,c?a&1|2:a&1),i):(wn(i),null);case 22:case 23:return ku(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Zn&1073741824)!==0&&(wn(i),i.subtreeFlags&6&&(i.flags|=8192)):wn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function q_(n,i){switch(qc(i),i.tag){case 1:return zn(i.type)&&Uo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ks(),Xt(Bn),Xt(En),au(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ru(i),null;case 13:if(Xt(Zt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Is()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Xt(Zt),null;case 4:return ks(),null;case 10:return Jc(i.type._context),null;case 22:case 23:return ku(),null;case 24:return null;default:return null}}var tl=!1,An=!1,Y_=typeof WeakSet=="function"?WeakSet:Set,We=null;function zs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Jt(n,i,c)}else a.current=null}function Au(n,i,a){try{a()}catch(c){Jt(n,i,c)}}var jp=!1;function $_(n,i){if(kc=yo,n=Eh(),Pc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var T=0,F=-1,V=-1,le=0,Se=0,ye=n,xe=null;t:for(;;){for(var Ge;ye!==a||f!==0&&ye.nodeType!==3||(F=T+f),ye!==p||c!==0&&ye.nodeType!==3||(V=T+c),ye.nodeType===3&&(T+=ye.nodeValue.length),(Ge=ye.firstChild)!==null;)xe=ye,ye=Ge;for(;;){if(ye===n)break t;if(xe===a&&++le===f&&(F=T),xe===p&&++Se===c&&(V=T),(Ge=ye.nextSibling)!==null)break;ye=xe,xe=ye.parentNode}ye=Ge}a=F===-1||V===-1?null:{start:F,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bc={focusedElem:n,selectionRange:a},yo=!1,We=i;We!==null;)if(i=We,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,We=n;else for(;We!==null;){i=We;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var Ye=Xe.memoizedProps,tn=Xe.memoizedState,J=i.stateNode,j=J.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:_i(i.type,Ye),tn);J.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){Jt(i,i.return,Ce)}if(n=i.sibling,n!==null){n.return=i.return,We=n;break}We=i.return}return Xe=jp,jp=!1,Xe}function ja(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var p=f.destroy;f.destroy=void 0,p!==void 0&&Au(i,a,p)}f=f.next}while(f!==c)}}function nl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function bu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Xp(n){var i=n.alternate;i!==null&&(n.alternate=null,Xp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ni],delete i[Ia],delete i[Hc],delete i[N_],delete i[L_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function qp(n){return n.tag===5||n.tag===3||n.tag===4}function Yp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||qp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Cu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Do));else if(c!==4&&(n=n.child,n!==null))for(Cu(n,i,a),n=n.sibling;n!==null;)Cu(n,i,a),n=n.sibling}function Ru(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ru(n,i,a),n=n.sibling;n!==null;)Ru(n,i,a),n=n.sibling}var vn=null,xi=!1;function br(n,i,a){for(a=a.child;a!==null;)$p(n,i,a),a=a.sibling}function $p(n,i,a){if(Ne&&typeof Ne.onCommitFiberUnmount=="function")try{Ne.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 5:An||zs(a,i);case 6:var c=vn,f=xi;vn=null,br(n,i,a),vn=c,xi=f,vn!==null&&(xi?(n=vn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):vn.removeChild(a.stateNode));break;case 18:vn!==null&&(xi?(n=vn,a=a.stateNode,n.nodeType===8?Gc(n.parentNode,a):n.nodeType===1&&Gc(n,a),Ea(n)):Gc(vn,a.stateNode));break;case 4:c=vn,f=xi,vn=a.stateNode.containerInfo,xi=!0,br(n,i,a),vn=c,xi=f;break;case 0:case 11:case 14:case 15:if(!An&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var p=f,T=p.destroy;p=p.tag,T!==void 0&&((p&2)!==0||(p&4)!==0)&&Au(a,i,T),f=f.next}while(f!==c)}br(n,i,a);break;case 1:if(!An&&(zs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(F){Jt(a,i,F)}br(n,i,a);break;case 21:br(n,i,a);break;case 22:a.mode&1?(An=(c=An)||a.memoizedState!==null,br(n,i,a),An=c):br(n,i,a);break;default:br(n,i,a)}}function Kp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Y_),i.forEach(function(c){var f=rx.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function vi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var p=n,T=i,F=T;e:for(;F!==null;){switch(F.tag){case 5:vn=F.stateNode,xi=!1;break e;case 3:vn=F.stateNode.containerInfo,xi=!0;break e;case 4:vn=F.stateNode.containerInfo,xi=!0;break e}F=F.return}if(vn===null)throw Error(t(160));$p(p,T,f),vn=null,xi=!1;var V=f.alternate;V!==null&&(V.return=null),f.return=null}catch(le){Jt(f,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Zp(i,n),i=i.sibling}function Zp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(vi(i,n),Ii(n),c&4){try{ja(3,n,n.return),nl(3,n)}catch(Ye){Jt(n,n.return,Ye)}try{ja(5,n,n.return)}catch(Ye){Jt(n,n.return,Ye)}}break;case 1:vi(i,n),Ii(n),c&512&&a!==null&&zs(a,a.return);break;case 5:if(vi(i,n),Ii(n),c&512&&a!==null&&zs(a,a.return),n.flags&32){var f=n.stateNode;try{ge(f,"")}catch(Ye){Jt(n,n.return,Ye)}}if(c&4&&(f=n.stateNode,f!=null)){var p=n.memoizedProps,T=a!==null?a.memoizedProps:p,F=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{F==="input"&&p.type==="radio"&&p.name!=null&&mt(f,p),Ae(F,T);var le=Ae(F,p);for(T=0;T<V.length;T+=2){var Se=V[T],ye=V[T+1];Se==="style"?pe(f,ye):Se==="dangerouslySetInnerHTML"?he(f,ye):Se==="children"?ge(f,ye):N(f,Se,ye,le)}switch(F){case"input":Ht(f,p);break;case"textarea":Ee(f,p);break;case"select":var xe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Ge=p.value;Ge!=null?zt(f,!!p.multiple,Ge,!1):xe!==!!p.multiple&&(p.defaultValue!=null?zt(f,!!p.multiple,p.defaultValue,!0):zt(f,!!p.multiple,p.multiple?[]:"",!1))}f[Ia]=p}catch(Ye){Jt(n,n.return,Ye)}}break;case 6:if(vi(i,n),Ii(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,p=n.memoizedProps;try{f.nodeValue=p}catch(Ye){Jt(n,n.return,Ye)}}break;case 3:if(vi(i,n),Ii(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ea(i.containerInfo)}catch(Ye){Jt(n,n.return,Ye)}break;case 4:vi(i,n),Ii(n);break;case 13:vi(i,n),Ii(n),f=n.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(Lu=Kt())),c&4&&Kp(n);break;case 22:if(Se=a!==null&&a.memoizedState!==null,n.mode&1?(An=(le=An)||Se,vi(i,n),An=le):vi(i,n),Ii(n),c&8192){if(le=n.memoizedState!==null,(n.stateNode.isHidden=le)&&!Se&&(n.mode&1)!==0)for(We=n,Se=n.child;Se!==null;){for(ye=We=Se;We!==null;){switch(xe=We,Ge=xe.child,xe.tag){case 0:case 11:case 14:case 15:ja(4,xe,xe.return);break;case 1:zs(xe,xe.return);var Xe=xe.stateNode;if(typeof Xe.componentWillUnmount=="function"){c=xe,a=xe.return;try{i=c,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(Ye){Jt(c,a,Ye)}}break;case 5:zs(xe,xe.return);break;case 22:if(xe.memoizedState!==null){em(ye);continue}}Ge!==null?(Ge.return=xe,We=Ge):em(ye)}Se=Se.sibling}e:for(Se=null,ye=n;;){if(ye.tag===5){if(Se===null){Se=ye;try{f=ye.stateNode,le?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(F=ye.stateNode,V=ye.memoizedProps.style,T=V!=null&&V.hasOwnProperty("display")?V.display:null,F.style.display=fe("display",T))}catch(Ye){Jt(n,n.return,Ye)}}}else if(ye.tag===6){if(Se===null)try{ye.stateNode.nodeValue=le?"":ye.memoizedProps}catch(Ye){Jt(n,n.return,Ye)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;Se===ye&&(Se=null),ye=ye.return}Se===ye&&(Se=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:vi(i,n),Ii(n),c&4&&Kp(n);break;case 21:break;default:vi(i,n),Ii(n)}}function Ii(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(qp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(ge(f,""),c.flags&=-33);var p=Yp(n);Ru(n,p,f);break;case 3:case 4:var T=c.stateNode.containerInfo,F=Yp(n);Cu(n,F,T);break;default:throw Error(t(161))}}catch(V){Jt(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function K_(n,i,a){We=n,Qp(n)}function Qp(n,i,a){for(var c=(n.mode&1)!==0;We!==null;){var f=We,p=f.child;if(f.tag===22&&c){var T=f.memoizedState!==null||tl;if(!T){var F=f.alternate,V=F!==null&&F.memoizedState!==null||An;F=tl;var le=An;if(tl=T,(An=V)&&!le)for(We=f;We!==null;)T=We,V=T.child,T.tag===22&&T.memoizedState!==null?tm(f):V!==null?(V.return=T,We=V):tm(f);for(;p!==null;)We=p,Qp(p),p=p.sibling;We=f,tl=F,An=le}Jp(n)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,We=p):Jp(n)}}function Jp(n){for(;We!==null;){var i=We;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:An||nl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!An)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:_i(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&ep(i,p,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}ep(i,T,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var Se=le.memoizedState;if(Se!==null){var ye=Se.dehydrated;ye!==null&&Ea(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||i.flags&512&&bu(i)}catch(xe){Jt(i,i.return,xe)}}if(i===n){We=null;break}if(a=i.sibling,a!==null){a.return=i.return,We=a;break}We=i.return}}function em(n){for(;We!==null;){var i=We;if(i===n){We=null;break}var a=i.sibling;if(a!==null){a.return=i.return,We=a;break}We=i.return}}function tm(n){for(;We!==null;){var i=We;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{nl(4,i)}catch(V){Jt(i,a,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(V){Jt(i,f,V)}}var p=i.return;try{bu(i)}catch(V){Jt(i,p,V)}break;case 5:var T=i.return;try{bu(i)}catch(V){Jt(i,T,V)}}}catch(V){Jt(i,i.return,V)}if(i===n){We=null;break}var F=i.sibling;if(F!==null){F.return=i.return,We=F;break}We=i.return}}var Z_=Math.ceil,il=L.ReactCurrentDispatcher,Pu=L.ReactCurrentOwner,oi=L.ReactCurrentBatchConfig,bt=0,pn=null,sn=null,Sn=0,Zn=0,Vs=Mr(0),un=0,Xa=null,ns=0,rl=0,Nu=0,qa=null,Gn=null,Lu=0,Gs=1/0,nr=null,sl=!1,Du=null,Cr=null,al=!1,Rr=null,ol=0,Ya=0,Iu=null,ll=-1,cl=0;function Dn(){return(bt&6)!==0?Kt():ll!==-1?ll:ll=Kt()}function Pr(n){return(n.mode&1)===0?1:(bt&2)!==0&&Sn!==0?Sn&-Sn:I_.transition!==null?(cl===0&&(cl=Ve()),cl):(n=xt,n!==0||(n=window.event,n=n===void 0?16:ih(n.type)),n)}function Si(n,i,a,c){if(50<Ya)throw Ya=0,Iu=null,Error(t(185));_t(n,a,c),((bt&2)===0||n!==pn)&&(n===pn&&((bt&2)===0&&(rl|=a),un===4&&Nr(n,Sn)),Hn(n,c),a===1&&bt===0&&(i.mode&1)===0&&(Gs=Kt()+500,Oo&&Tr()))}function Hn(n,i){var a=n.callbackNode;Ft(n,i);var c=Vt(n,n===pn?Sn:0);if(c===0)a!==null&&vo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&vo(a),i===1)n.tag===0?D_(im.bind(null,n)):Gh(im.bind(null,n)),R_(function(){(bt&6)===0&&Tr()}),a=null;else{switch(Yi(c)){case 1:a=xa;break;case 4:a=A;break;case 16:a=Y;break;case 536870912:a=ne;break;default:a=Y}a=fm(a,nm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function nm(n,i){if(ll=-1,cl=0,(bt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Hs()&&n.callbackNode!==a)return null;var c=Vt(n,n===pn?Sn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ul(n,c);else{i=c;var f=bt;bt|=2;var p=sm();(pn!==n||Sn!==i)&&(nr=null,Gs=Kt()+500,rs(n,i));do try{ex();break}catch(F){rm(n,F)}while(!0);Qc(),il.current=p,bt=f,sn!==null?i=0:(pn=null,Sn=0,i=un)}if(i!==0){if(i===2&&(f=rn(n),f!==0&&(c=f,i=Uu(n,f))),i===1)throw a=Xa,rs(n,0),Nr(n,c),Hn(n,Kt()),a;if(i===6)Nr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!Q_(f)&&(i=ul(n,c),i===2&&(p=rn(n),p!==0&&(c=p,i=Uu(n,p))),i===1))throw a=Xa,rs(n,0),Nr(n,c),Hn(n,Kt()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ss(n,Gn,nr);break;case 3:if(Nr(n,c),(c&130023424)===c&&(i=Lu+500-Kt(),10<i)){if(Vt(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Dn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Vc(ss.bind(null,n,Gn,nr),i);break}ss(n,Gn,nr);break;case 4:if(Nr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var T=31-Re(c);p=1<<T,T=i[T],T>f&&(f=T),c&=~p}if(c=f,c=Kt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Z_(c/1960))-c,10<c){n.timeoutHandle=Vc(ss.bind(null,n,Gn,nr),c);break}ss(n,Gn,nr);break;case 5:ss(n,Gn,nr);break;default:throw Error(t(329))}}}return Hn(n,Kt()),n.callbackNode===a?nm.bind(null,n):null}function Uu(n,i){var a=qa;return n.current.memoizedState.isDehydrated&&(rs(n,i).flags|=256),n=ul(n,i),n!==2&&(i=Gn,Gn=a,i!==null&&Fu(i)),n}function Fu(n){Gn===null?Gn=n:Gn.push.apply(Gn,n)}function Q_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],p=f.getSnapshot;f=f.value;try{if(!mi(p(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Nr(n,i){for(i&=~Nu,i&=~rl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Re(i),c=1<<a;n[a]=-1,i&=~c}}function im(n){if((bt&6)!==0)throw Error(t(327));Hs();var i=Vt(n,0);if((i&1)===0)return Hn(n,Kt()),null;var a=ul(n,i);if(n.tag!==0&&a===2){var c=rn(n);c!==0&&(i=c,a=Uu(n,c))}if(a===1)throw a=Xa,rs(n,0),Nr(n,i),Hn(n,Kt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ss(n,Gn,nr),Hn(n,Kt()),null}function Ou(n,i){var a=bt;bt|=1;try{return n(i)}finally{bt=a,bt===0&&(Gs=Kt()+500,Oo&&Tr())}}function is(n){Rr!==null&&Rr.tag===0&&(bt&6)===0&&Hs();var i=bt;bt|=1;var a=oi.transition,c=xt;try{if(oi.transition=null,xt=1,n)return n()}finally{xt=c,oi.transition=a,bt=i,(bt&6)===0&&Tr()}}function ku(){Zn=Vs.current,Xt(Vs)}function rs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,C_(a)),sn!==null)for(a=sn.return;a!==null;){var c=a;switch(qc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Uo();break;case 3:ks(),Xt(Bn),Xt(En),au();break;case 5:ru(c);break;case 4:ks();break;case 13:Xt(Zt);break;case 19:Xt(Zt);break;case 10:Jc(c.type._context);break;case 22:case 23:ku()}a=a.return}if(pn=n,sn=n=Lr(n.current,null),Sn=Zn=i,un=0,Xa=null,Nu=rl=ns=0,Gn=qa=null,Jr!==null){for(i=0;i<Jr.length;i++)if(a=Jr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,p=a.pending;if(p!==null){var T=p.next;p.next=f,c.next=T}a.pending=c}Jr=null}return n}function rm(n,i){do{var a=sn;try{if(Qc(),qo.current=Zo,Yo){for(var c=Qt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Yo=!1}if(ts=0,hn=cn=Qt=null,za=!1,Va=0,Pu.current=null,a===null||a.return===null){un=1,Xa=i,sn=null;break}e:{var p=n,T=a.return,F=a,V=i;if(i=Sn,F.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var le=V,Se=F,ye=Se.tag;if((Se.mode&1)===0&&(ye===0||ye===11||ye===15)){var xe=Se.alternate;xe?(Se.updateQueue=xe.updateQueue,Se.memoizedState=xe.memoizedState,Se.lanes=xe.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ge=Rp(T);if(Ge!==null){Ge.flags&=-257,Pp(Ge,T,F,p,i),Ge.mode&1&&Cp(p,le,i),i=Ge,V=le;var Xe=i.updateQueue;if(Xe===null){var Ye=new Set;Ye.add(V),i.updateQueue=Ye}else Xe.add(V);break e}else{if((i&1)===0){Cp(p,le,i),Bu();break e}V=Error(t(426))}}else if(Yt&&F.mode&1){var tn=Rp(T);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),Pp(tn,T,F,p,i),Kc(Bs(V,F));break e}}p=V=Bs(V,F),un!==4&&(un=2),qa===null?qa=[p]:qa.push(p),p=T;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var J=Ap(p,V,i);Jh(p,J);break e;case 1:F=V;var j=p.type,ie=p.stateNode;if((p.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Cr===null||!Cr.has(ie)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ce=bp(p,F,i);Jh(p,Ce);break e}}p=p.return}while(p!==null)}om(a)}catch(Ze){i=Ze,sn===a&&a!==null&&(sn=a=a.return);continue}break}while(!0)}function sm(){var n=il.current;return il.current=Zo,n===null?Zo:n}function Bu(){(un===0||un===3||un===2)&&(un=4),pn===null||(ns&268435455)===0&&(rl&268435455)===0||Nr(pn,Sn)}function ul(n,i){var a=bt;bt|=2;var c=sm();(pn!==n||Sn!==i)&&(nr=null,rs(n,i));do try{J_();break}catch(f){rm(n,f)}while(!0);if(Qc(),bt=a,il.current=c,sn!==null)throw Error(t(261));return pn=null,Sn=0,un}function J_(){for(;sn!==null;)am(sn)}function ex(){for(;sn!==null&&!gc();)am(sn)}function am(n){var i=um(n.alternate,n,Zn);n.memoizedProps=n.pendingProps,i===null?om(n):sn=i,Pu.current=null}function om(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=X_(a,i,Zn),a!==null){sn=a;return}}else{if(a=q_(a,i),a!==null){a.flags&=32767,sn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{un=6,sn=null;return}}if(i=i.sibling,i!==null){sn=i;return}sn=i=n}while(i!==null);un===0&&(un=5)}function ss(n,i,a){var c=xt,f=oi.transition;try{oi.transition=null,xt=1,tx(n,i,a,c)}finally{oi.transition=f,xt=c}return null}function tx(n,i,a,c){do Hs();while(Rr!==null);if((bt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(On(n,p),n===pn&&(sn=pn=null,Sn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||al||(al=!0,fm(Y,function(){return Hs(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=oi.transition,oi.transition=null;var T=xt;xt=1;var F=bt;bt|=4,Pu.current=null,$_(n,a),Zp(a,n),y_(Bc),yo=!!kc,Bc=kc=null,n.current=a,K_(a),_c(),bt=F,xt=T,oi.transition=p}else n.current=a;if(al&&(al=!1,Rr=n,ol=f),p=n.pendingLanes,p===0&&(Cr=null),He(a.stateNode),Hn(n,Kt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(sl)throw sl=!1,n=Du,Du=null,n;return(ol&1)!==0&&n.tag!==0&&Hs(),p=n.pendingLanes,(p&1)!==0?n===Iu?Ya++:(Ya=0,Iu=n):Ya=0,Tr(),null}function Hs(){if(Rr!==null){var n=Yi(ol),i=oi.transition,a=xt;try{if(oi.transition=null,xt=16>n?16:n,Rr===null)var c=!1;else{if(n=Rr,Rr=null,ol=0,(bt&6)!==0)throw Error(t(331));var f=bt;for(bt|=4,We=n.current;We!==null;){var p=We,T=p.child;if((We.flags&16)!==0){var F=p.deletions;if(F!==null){for(var V=0;V<F.length;V++){var le=F[V];for(We=le;We!==null;){var Se=We;switch(Se.tag){case 0:case 11:case 15:ja(8,Se,p)}var ye=Se.child;if(ye!==null)ye.return=Se,We=ye;else for(;We!==null;){Se=We;var xe=Se.sibling,Ge=Se.return;if(Xp(Se),Se===le){We=null;break}if(xe!==null){xe.return=Ge,We=xe;break}We=Ge}}}var Xe=p.alternate;if(Xe!==null){var Ye=Xe.child;if(Ye!==null){Xe.child=null;do{var tn=Ye.sibling;Ye.sibling=null,Ye=tn}while(Ye!==null)}}We=p}}if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,We=T;else e:for(;We!==null;){if(p=We,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ja(9,p,p.return)}var J=p.sibling;if(J!==null){J.return=p.return,We=J;break e}We=p.return}}var j=n.current;for(We=j;We!==null;){T=We;var ie=T.child;if((T.subtreeFlags&2064)!==0&&ie!==null)ie.return=T,We=ie;else e:for(T=j;We!==null;){if(F=We,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:nl(9,F)}}catch(Ze){Jt(F,F.return,Ze)}if(F===T){We=null;break e}var Ce=F.sibling;if(Ce!==null){Ce.return=F.return,We=Ce;break e}We=F.return}}if(bt=f,Tr(),Ne&&typeof Ne.onPostCommitFiberRoot=="function")try{Ne.onPostCommitFiberRoot(te,n)}catch{}c=!0}return c}finally{xt=a,oi.transition=i}}return!1}function lm(n,i,a){i=Bs(a,i),i=Ap(n,i,1),n=Ar(n,i,1),i=Dn(),n!==null&&(_t(n,1,i),Hn(n,i))}function Jt(n,i,a){if(n.tag===3)lm(n,n,a);else for(;i!==null;){if(i.tag===3){lm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Cr===null||!Cr.has(c))){n=Bs(a,n),n=bp(i,n,1),i=Ar(i,n,1),n=Dn(),i!==null&&(_t(i,1,n),Hn(i,n));break}}i=i.return}}function nx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Dn(),n.pingedLanes|=n.suspendedLanes&a,pn===n&&(Sn&a)===a&&(un===4||un===3&&(Sn&130023424)===Sn&&500>Kt()-Lu?rs(n,0):Nu|=a),Hn(n,i)}function cm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ke,Ke<<=1,(Ke&130023424)===0&&(Ke=4194304)));var a=Dn();n=Ji(n,i),n!==null&&(_t(n,i,a),Hn(n,a))}function ix(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),cm(n,a)}function rx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),cm(n,a)}var um;um=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Bn.current)Vn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Vn=!1,j_(n,i,a);Vn=(n.flags&131072)!==0}else Vn=!1,Yt&&(i.flags&1048576)!==0&&Hh(i,Bo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;el(n,i),n=i.pendingProps;var f=Ns(i,En.current);Os(i,a),f=cu(null,i,c,n,f,a);var p=uu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,zn(c)?(p=!0,Fo(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,nu(i),f.updater=Qo,i.stateNode=f,f._reactInternals=i,gu(i,c,n,a),i=Su(null,i,c,!0,p,a)):(i.tag=0,Yt&&p&&Xc(i),Ln(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(el(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=ax(c),n=_i(c,n),f){case 0:i=vu(null,i,c,n,a);break e;case 1:i=Fp(null,i,c,n,a);break e;case 11:i=Np(null,i,c,n,a);break e;case 14:i=Lp(null,i,c,_i(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:_i(c,f),vu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:_i(c,f),Fp(n,i,c,f,a);case 3:e:{if(Op(i),n===null)throw Error(t(387));c=i.pendingProps,p=i.memoizedState,f=p.element,Qh(n,i),jo(i,c,null,a);var T=i.memoizedState;if(c=T.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=Bs(Error(t(423)),i),i=kp(n,i,c,a,f);break e}else if(c!==f){f=Bs(Error(t(424)),i),i=kp(n,i,c,a,f);break e}else for(Kn=yr(i.stateNode.containerInfo.firstChild),$n=i,Yt=!0,gi=null,a=Kh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Is(),c===f){i=tr(n,i,a);break e}Ln(n,i,c,a)}i=i.child}return i;case 5:return tp(i),n===null&&$c(i),c=i.type,f=i.pendingProps,p=n!==null?n.memoizedProps:null,T=f.children,zc(c,f)?T=null:p!==null&&zc(c,p)&&(i.flags|=32),Up(n,i),Ln(n,i,T,a),i.child;case 6:return n===null&&$c(i),null;case 13:return Bp(n,i,a);case 4:return iu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Us(i,null,c,a):Ln(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:_i(c,f),Np(n,i,c,f,a);case 7:return Ln(n,i,i.pendingProps,a),i.child;case 8:return Ln(n,i,i.pendingProps.children,a),i.child;case 12:return Ln(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,p=i.memoizedProps,T=f.value,Gt(Go,c._currentValue),c._currentValue=T,p!==null)if(mi(p.value,T)){if(p.children===f.children&&!Bn.current){i=tr(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var F=p.dependencies;if(F!==null){T=p.child;for(var V=F.firstContext;V!==null;){if(V.context===c){if(p.tag===1){V=er(-1,a&-a),V.tag=2;var le=p.updateQueue;if(le!==null){le=le.shared;var Se=le.pending;Se===null?V.next=V:(V.next=Se.next,Se.next=V),le.pending=V}}p.lanes|=a,V=p.alternate,V!==null&&(V.lanes|=a),eu(p.return,a,i),F.lanes|=a;break}V=V.next}}else if(p.tag===10)T=p.type===i.type?null:p.child;else if(p.tag===18){if(T=p.return,T===null)throw Error(t(341));T.lanes|=a,F=T.alternate,F!==null&&(F.lanes|=a),eu(T,a,i),T=p.sibling}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===i){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}Ln(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Os(i,a),f=si(f),c=c(f),i.flags|=1,Ln(n,i,c,a),i.child;case 14:return c=i.type,f=_i(c,i.pendingProps),f=_i(c.type,f),Lp(n,i,c,f,a);case 15:return Dp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:_i(c,f),el(n,i),i.tag=1,zn(c)?(n=!0,Fo(i)):n=!1,Os(i,a),Tp(i,c,f),gu(i,c,f,a),Su(null,i,c,!0,n,a);case 19:return Vp(n,i,a);case 22:return Ip(n,i,a)}throw Error(t(156,i.tag))};function fm(n,i){return xo(n,i)}function sx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(n,i,a,c){return new sx(n,i,a,c)}function zu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ax(n){if(typeof n=="function")return zu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===G)return 11;if(n===H)return 14}return 2}function Lr(n,i){var a=n.alternate;return a===null?(a=li(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function fl(n,i,a,c,f,p){var T=2;if(c=n,typeof n=="function")zu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case O:return as(a.children,f,p,i);case E:T=8,f|=8;break;case U:return n=li(12,a,i,f|2),n.elementType=U,n.lanes=p,n;case se:return n=li(13,a,i,f),n.elementType=se,n.lanes=p,n;case oe:return n=li(19,a,i,f),n.elementType=oe,n.lanes=p,n;case q:return dl(a,f,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case X:T=10;break e;case I:T=9;break e;case G:T=11;break e;case H:T=14;break e;case Z:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=li(T,a,i,f),i.elementType=n,i.type=c,i.lanes=p,i}function as(n,i,a,c){return n=li(7,n,c,i),n.lanes=a,n}function dl(n,i,a,c){return n=li(22,n,c,i),n.elementType=q,n.lanes=a,n.stateNode={isHidden:!1},n}function Vu(n,i,a){return n=li(6,n,null,i),n.lanes=a,n}function Gu(n,i,a){return i=li(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function ox(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xn(0),this.expirationTimes=xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Hu(n,i,a,c,f,p,T,F,V){return n=new ox(n,i,a,F,V),i===1?(i=1,p===!0&&(i|=8)):i=0,p=li(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},nu(p),n}function lx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function dm(n){if(!n)return Er;n=n._reactInternals;e:{if(Ri(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(zn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(zn(a))return zh(n,a,i)}return i}function hm(n,i,a,c,f,p,T,F,V){return n=Hu(a,c,!0,n,f,p,T,F,V),n.context=dm(null),a=n.current,c=Dn(),f=Pr(a),p=er(c,f),p.callback=i??null,Ar(a,p,f),n.current.lanes=f,_t(n,f,c),Hn(n,c),n}function hl(n,i,a,c){var f=i.current,p=Dn(),T=Pr(f);return a=dm(a),i.context===null?i.context=a:i.pendingContext=a,i=er(p,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Ar(f,i,T),n!==null&&(Si(n,f,T,p),Wo(n,f,T)),T}function pl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function pm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Wu(n,i){pm(n,i),(n=n.alternate)&&pm(n,i)}function cx(){return null}var mm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ju(n){this._internalRoot=n}ml.prototype.render=ju.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));hl(n,i,null,null)},ml.prototype.unmount=ju.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;is(function(){hl(null,n,null,null)}),i[$i]=null}};function ml(n){this._internalRoot=n}ml.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ot();n={blockedOn:null,target:n,priority:i};for(var a=0;a<xr.length&&i!==0&&i<xr[a].priority;a++);xr.splice(a,0,n),a===0&&th(n)}};function Xu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function gm(){}function ux(n,i,a,c,f){if(f){if(typeof c=="function"){var p=c;c=function(){var le=pl(T);p.call(le)}}var T=hm(i,c,n,0,null,!1,!1,"",gm);return n._reactRootContainer=T,n[$i]=T.current,La(n.nodeType===8?n.parentNode:n),is(),T}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var F=c;c=function(){var le=pl(V);F.call(le)}}var V=Hu(n,0,!1,null,null,!1,!1,"",gm);return n._reactRootContainer=V,n[$i]=V.current,La(n.nodeType===8?n.parentNode:n),is(function(){hl(i,V,a,c)}),V}function _l(n,i,a,c,f){var p=a._reactRootContainer;if(p){var T=p;if(typeof f=="function"){var F=f;f=function(){var V=pl(T);F.call(V)}}hl(i,T,n,f)}else T=ux(a,i,n,f,c);return pl(T)}Dt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=At(i.pendingLanes);a!==0&&(kn(i,a|1),Hn(i,Kt()),(bt&6)===0&&(Gs=Kt()+500,Tr()))}break;case 13:is(function(){var c=Ji(n,1);if(c!==null){var f=Dn();Si(c,n,1,f)}}),Wu(n,1)}},Wt=function(n){if(n.tag===13){var i=Ji(n,134217728);if(i!==null){var a=Dn();Si(i,n,134217728,a)}Wu(n,134217728)}},hi=function(n){if(n.tag===13){var i=Pr(n),a=Ji(n,i);if(a!==null){var c=Dn();Si(a,n,i,c)}Wu(n,i)}},Ot=function(){return xt},pi=function(n,i){var a=xt;try{return xt=n,i()}finally{xt=a}},lt=function(n,i,a){switch(i){case"input":if(Ht(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Io(c);if(!f)throw Error(t(90));Bt(c),Ht(c,f)}}}break;case"textarea":Ee(n,a);break;case"select":i=a.value,i!=null&&zt(n,!!a.multiple,i,!1)}},be=Ou,_e=is;var fx={usingClientEntryPoint:!1,Events:[Ua,Rs,Io,de,Oe,Ou]},$a={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dx={bundleType:$a.bundleType,version:$a.version,rendererPackageName:$a.rendererPackageName,rendererConfig:$a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ga(n),n===null?null:n.stateNode},findFiberByHostInstance:$a.findFiberByHostInstance||cx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{te=xl.inject(dx),Ne=xl}catch{}}return Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fx,Wn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xu(i))throw Error(t(200));return lx(n,i,null,a)},Wn.createRoot=function(n,i){if(!Xu(n))throw Error(t(299));var a=!1,c="",f=mm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Hu(n,1,!1,null,null,a,!1,c,f),n[$i]=i.current,La(n.nodeType===8?n.parentNode:n),new ju(i)},Wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ga(i),n=n===null?null:n.stateNode,n},Wn.flushSync=function(n){return is(n)},Wn.hydrate=function(n,i,a){if(!gl(i))throw Error(t(200));return _l(null,n,i,!0,a)},Wn.hydrateRoot=function(n,i,a){if(!Xu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,p="",T=mm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=hm(i,null,n,1,a??null,f,!1,p,T),n[$i]=i.current,La(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new ml(i)},Wn.render=function(n,i,a){if(!gl(i))throw Error(t(200));return _l(null,n,i,!1,a)},Wn.unmountComponentAtNode=function(n){if(!gl(n))throw Error(t(40));return n._reactRootContainer?(is(function(){_l(null,null,n,!1,function(){n._reactRootContainer=null,n[$i]=null})}),!0):!1},Wn.unstable_batchedUpdates=Ou,Wn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!gl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return _l(n,i,a,!1,c)},Wn.version="18.3.1-next-f1338f8080-20240426",Wn}var Tm;function yx(){if(Tm)return $u.exports;Tm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),$u.exports=Sx(),$u.exports}var wm;function Mx(){if(wm)return vl;wm=1;var s=yx();return vl.createRoot=s.createRoot,vl.hydrateRoot=s.hydrateRoot,vl}var Ex=Mx();const Tx=Dg(Ex);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ld="184",wx=0,Am=1,Ax=2,Yl=1,bx=2,ao=3,jr=0,Xn=1,cr=2,fr=0,ra=1,bm=2,Cm=3,Rm=4,Cx=5,ds=100,Rx=101,Px=102,Nx=103,Lx=104,Dx=200,Ix=201,Ux=202,Fx=203,kf=204,Bf=205,Ox=206,kx=207,Bx=208,zx=209,Vx=210,Gx=211,Hx=212,Wx=213,jx=214,zf=0,Vf=1,Gf=2,aa=3,Hf=4,Wf=5,jf=6,Xf=7,Ig=0,Xx=1,qx=2,Gi=0,Ug=1,Fg=2,Og=3,kg=4,Bg=5,zg=6,Vg=7,Gg=300,_s=301,oa=302,Qu=303,Ju=304,dc=306,qf=1e3,ur=1001,Yf=1002,Mn=1003,Yx=1004,Sl=1005,Rn=1006,ef=1007,ms=1008,ti=1009,Hg=1010,Wg=1011,co=1012,Dd=1013,Wi=1014,Bi=1015,hr=1016,Id=1017,Ud=1018,uo=1020,jg=35902,Xg=35899,qg=1021,Yg=1022,wi=1023,pr=1026,gs=1027,$g=1028,Fd=1029,xs=1030,Od=1031,kd=1033,$l=33776,Kl=33777,Zl=33778,Ql=33779,$f=35840,Kf=35841,Zf=35842,Qf=35843,Jf=36196,ed=37492,td=37496,nd=37488,id=37489,ec=37490,rd=37491,sd=37808,ad=37809,od=37810,ld=37811,cd=37812,ud=37813,fd=37814,dd=37815,hd=37816,pd=37817,md=37818,gd=37819,_d=37820,xd=37821,vd=36492,Sd=36494,yd=36495,Md=36283,Ed=36284,tc=36285,Td=36286,$x=3200,wd=0,Kx=1,Vr="",fi="srgb",nc="srgb-linear",ic="linear",kt="srgb",Ws=7680,Pm=519,Zx=512,Qx=513,Jx=514,Bd=515,ev=516,tv=517,zd=518,nv=519,Nm=35044,Lm="300 es",zi=2e3,fo=2001;function iv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function rc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rv(){const s=rc("canvas");return s.style.display="block",s}const Dm={};function Im(...s){const e="THREE."+s.shift();console.log(e,...s)}function Kg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function at(...s){s=Kg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ct(...s){s=Kg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ad(...s){const e=s.join(" ");e in Dm||(Dm[e]=!0,at(...s))}function sv(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const av={[zf]:Vf,[Gf]:jf,[Hf]:Xf,[aa]:Wf,[Vf]:zf,[jf]:Gf,[Xf]:Hf,[Wf]:aa};class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tf=Math.PI/180,bd=180/Math.PI;function po(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function St(s,e,t){return Math.max(e,Math.min(t,s))}function ov(s,e){return(s%e+e)%e}function nf(s,e,t){return(1-t)*s+t*e}function Za(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const $d=class $d{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$d.prototype.isVector2=!0;let Pt=$d;class da{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let h=r[o+0],m=r[o+1],x=r[o+2],S=r[o+3],g=l[u+0],y=l[u+1],w=l[u+2],R=l[u+3];if(S!==R||h!==g||m!==y||x!==w){let v=h*g+m*y+x*w+S*R;v<0&&(g=-g,y=-y,w=-w,R=-R,v=-v);let _=1-d;if(v<.9995){const b=Math.acos(v),N=Math.sin(b);_=Math.sin(_*b)/N,d=Math.sin(d*b)/N,h=h*_+g*d,m=m*_+y*d,x=x*_+w*d,S=S*_+R*d}else{h=h*_+g*d,m=m*_+y*d,x=x*_+w*d,S=S*_+R*d;const b=1/Math.sqrt(h*h+m*m+x*x+S*S);h*=b,m*=b,x*=b,S*=b}}e[t]=h,e[t+1]=m,e[t+2]=x,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],h=r[o+1],m=r[o+2],x=r[o+3],S=l[u],g=l[u+1],y=l[u+2],w=l[u+3];return e[t]=d*w+x*S+h*y-m*g,e[t+1]=h*w+x*g+m*S-d*y,e[t+2]=m*w+x*y+d*g-h*S,e[t+3]=x*w-d*S-h*g-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,m=d(r/2),x=d(o/2),S=d(l/2),g=h(r/2),y=h(o/2),w=h(l/2);switch(u){case"XYZ":this._x=g*x*S+m*y*w,this._y=m*y*S-g*x*w,this._z=m*x*w+g*y*S,this._w=m*x*S-g*y*w;break;case"YXZ":this._x=g*x*S+m*y*w,this._y=m*y*S-g*x*w,this._z=m*x*w-g*y*S,this._w=m*x*S+g*y*w;break;case"ZXY":this._x=g*x*S-m*y*w,this._y=m*y*S+g*x*w,this._z=m*x*w+g*y*S,this._w=m*x*S-g*y*w;break;case"ZYX":this._x=g*x*S-m*y*w,this._y=m*y*S+g*x*w,this._z=m*x*w-g*y*S,this._w=m*x*S+g*y*w;break;case"YZX":this._x=g*x*S+m*y*w,this._y=m*y*S+g*x*w,this._z=m*x*w-g*y*S,this._w=m*x*S-g*y*w;break;case"XZY":this._x=g*x*S-m*y*w,this._y=m*y*S-g*x*w,this._z=m*x*w+g*y*S,this._w=m*x*S+g*y*w;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],h=t[9],m=t[2],x=t[6],S=t[10],g=r+d+S;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(x-h)*y,this._y=(l-m)*y,this._z=(u-o)*y}else if(r>d&&r>S){const y=2*Math.sqrt(1+r-d-S);this._w=(x-h)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+m)/y}else if(d>S){const y=2*Math.sqrt(1+d-r-S);this._w=(l-m)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(h+x)/y}else{const y=2*Math.sqrt(1+S-r-d);this._w=(u-o)/y,this._x=(l+m)/y,this._y=(h+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,h=t._y,m=t._z,x=t._w;return this._x=r*x+u*d+o*m-l*h,this._y=o*x+u*h+l*d-r*m,this._z=l*x+u*m+r*h-o*d,this._w=u*x-r*d-o*h-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let h=1-t;if(d<.9995){const m=Math.acos(d),x=Math.sin(m);h=Math.sin(h*m)/x,t=Math.sin(t*m)/x,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kd=class Kd{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Um.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,h=e.w,m=2*(u*o-d*r),x=2*(d*t-l*o),S=2*(l*r-u*t);return this.x=t+h*m+u*S-d*x,this.y=r+h*x+d*m-l*S,this.z=o+h*S+l*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,h=t.z;return this.x=o*h-l*d,this.y=l*u-r*h,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return rf.copy(this).projectOnVector(e),this.sub(rf)}reflect(e){return this.sub(rf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kd.prototype.isVector3=!0;let Q=Kd;const rf=new Q,Um=new da,Zd=class Zd{constructor(e,t,r,o,l,u,d,h,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,h,m)}set(e,t,r,o,l,u,d,h,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=t,x[4]=l,x[5]=h,x[6]=r,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],h=r[6],m=r[1],x=r[4],S=r[7],g=r[2],y=r[5],w=r[8],R=o[0],v=o[3],_=o[6],b=o[1],N=o[4],L=o[7],B=o[2],D=o[5],O=o[8];return l[0]=u*R+d*b+h*B,l[3]=u*v+d*N+h*D,l[6]=u*_+d*L+h*O,l[1]=m*R+x*b+S*B,l[4]=m*v+x*N+S*D,l[7]=m*_+x*L+S*O,l[2]=g*R+y*b+w*B,l[5]=g*v+y*N+w*D,l[8]=g*_+y*L+w*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],x=e[8];return t*u*x-t*d*m-r*l*x+r*d*h+o*l*m-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],x=e[8],S=x*u-d*m,g=d*h-x*l,y=m*l-u*h,w=t*S+r*g+o*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=S*R,e[1]=(o*m-x*r)*R,e[2]=(d*r-o*u)*R,e[3]=g*R,e[4]=(x*t-o*h)*R,e[5]=(o*l-d*t)*R,e[6]=y*R,e[7]=(r*h-m*t)*R,e[8]=(u*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*u+m*d)+u+e,-o*m,o*h,-o*(-m*u+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(sf.makeScale(e,t)),this}rotate(e){return this.premultiply(sf.makeRotation(-e)),this}translate(e,t){return this.premultiply(sf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zd.prototype.isMatrix3=!0;let pt=Zd;const sf=new pt,Fm=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Om=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lv(){const s={enabled:!0,workingColorSpace:nc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===kt&&(o.r=dr(o.r),o.g=dr(o.g),o.b=dr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===kt&&(o.r=sa(o.r),o.g=sa(o.g),o.b=sa(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Vr?ic:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Ad("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Ad("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[nc]:{primaries:e,whitePoint:r,transfer:ic,toXYZ:Fm,fromXYZ:Om,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:Fm,fromXYZ:Om,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const Tt=lv();function dr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function sa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let js;class cv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{js===void 0&&(js=rc("canvas")),js.width=e.width,js.height=e.height;const o=js.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=js}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=dr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(dr(t[r]/255)*255):t[r]=dr(t[r]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uv=0;class Vd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=po(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(af(o[u].image)):l.push(af(o[u]))}else l=af(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function af(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let fv=0;const of=new Q;class Un extends vs{constructor(e=Un.DEFAULT_IMAGE,t=Un.DEFAULT_MAPPING,r=ur,o=ur,l=Rn,u=ms,d=wi,h=ti,m=Un.DEFAULT_ANISOTROPY,x=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=po(),this.name="",this.source=new Vd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(of).x}get height(){return this.source.getSize(of).y}get depth(){return this.source.getSize(of).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qf:e.x=e.x-Math.floor(e.x);break;case ur:e.x=e.x<0?0:1;break;case Yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qf:e.y=e.y-Math.floor(e.y);break;case ur:e.y=e.y<0?0:1;break;case Yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Gg;Un.DEFAULT_ANISOTROPY=1;const Qd=class Qd{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,m=h[0],x=h[4],S=h[8],g=h[1],y=h[5],w=h[9],R=h[2],v=h[6],_=h[10];if(Math.abs(x-g)<.01&&Math.abs(S-R)<.01&&Math.abs(w-v)<.01){if(Math.abs(x+g)<.1&&Math.abs(S+R)<.1&&Math.abs(w+v)<.1&&Math.abs(m+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(m+1)/2,L=(y+1)/2,B=(_+1)/2,D=(x+g)/4,O=(S+R)/4,E=(w+v)/4;return N>L&&N>B?N<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(N),o=D/r,l=O/r):L>B?L<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(L),r=D/o,l=E/o):B<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(B),r=O/l,o=E/l),this.set(r,o,l,t),this}let b=Math.sqrt((v-w)*(v-w)+(S-R)*(S-R)+(g-x)*(g-x));return Math.abs(b)<.001&&(b=1),this.x=(v-w)/b,this.y=(S-R)/b,this.z=(g-x)/b,this.w=Math.acos((m+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qd.prototype.isVector4=!0;let en=Qd;class dv extends vs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Un(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Vd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends dv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Zg extends Un{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hv extends Un{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fc=class fc{constructor(e,t,r,o,l,u,d,h,m,x,S,g,y,w,R,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,h,m,x,S,g,y,w,R,v)}set(e,t,r,o,l,u,d,h,m,x,S,g,y,w,R,v){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=d,_[13]=h,_[2]=m,_[6]=x,_[10]=S,_[14]=g,_[3]=y,_[7]=w,_[11]=R,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Xs.setFromMatrixColumn(e,0).length(),l=1/Xs.setFromMatrixColumn(e,1).length(),u=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(o),m=Math.sin(o),x=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const g=u*x,y=u*S,w=d*x,R=d*S;t[0]=h*x,t[4]=-h*S,t[8]=m,t[1]=y+w*m,t[5]=g-R*m,t[9]=-d*h,t[2]=R-g*m,t[6]=w+y*m,t[10]=u*h}else if(e.order==="YXZ"){const g=h*x,y=h*S,w=m*x,R=m*S;t[0]=g+R*d,t[4]=w*d-y,t[8]=u*m,t[1]=u*S,t[5]=u*x,t[9]=-d,t[2]=y*d-w,t[6]=R+g*d,t[10]=u*h}else if(e.order==="ZXY"){const g=h*x,y=h*S,w=m*x,R=m*S;t[0]=g-R*d,t[4]=-u*S,t[8]=w+y*d,t[1]=y+w*d,t[5]=u*x,t[9]=R-g*d,t[2]=-u*m,t[6]=d,t[10]=u*h}else if(e.order==="ZYX"){const g=u*x,y=u*S,w=d*x,R=d*S;t[0]=h*x,t[4]=w*m-y,t[8]=g*m+R,t[1]=h*S,t[5]=R*m+g,t[9]=y*m-w,t[2]=-m,t[6]=d*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,y=u*m,w=d*h,R=d*m;t[0]=h*x,t[4]=R-g*S,t[8]=w*S+y,t[1]=S,t[5]=u*x,t[9]=-d*x,t[2]=-m*x,t[6]=y*S+w,t[10]=g-R*S}else if(e.order==="XZY"){const g=u*h,y=u*m,w=d*h,R=d*m;t[0]=h*x,t[4]=-S,t[8]=m*x,t[1]=g*S+R,t[5]=u*x,t[9]=y*S-w,t[2]=w*S-y,t[6]=d*x,t[10]=R*S+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pv,e,mv)}lookAt(e,t,r){const o=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Ir.crossVectors(r,Qn),Ir.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Ir.crossVectors(r,Qn)),Ir.normalize(),yl.crossVectors(Qn,Ir),o[0]=Ir.x,o[4]=yl.x,o[8]=Qn.x,o[1]=Ir.y,o[5]=yl.y,o[9]=Qn.y,o[2]=Ir.z,o[6]=yl.z,o[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],h=r[8],m=r[12],x=r[1],S=r[5],g=r[9],y=r[13],w=r[2],R=r[6],v=r[10],_=r[14],b=r[3],N=r[7],L=r[11],B=r[15],D=o[0],O=o[4],E=o[8],U=o[12],X=o[1],I=o[5],G=o[9],se=o[13],oe=o[2],H=o[6],Z=o[10],q=o[14],K=o[3],ce=o[7],ue=o[11],k=o[15];return l[0]=u*D+d*X+h*oe+m*K,l[4]=u*O+d*I+h*H+m*ce,l[8]=u*E+d*G+h*Z+m*ue,l[12]=u*U+d*se+h*q+m*k,l[1]=x*D+S*X+g*oe+y*K,l[5]=x*O+S*I+g*H+y*ce,l[9]=x*E+S*G+g*Z+y*ue,l[13]=x*U+S*se+g*q+y*k,l[2]=w*D+R*X+v*oe+_*K,l[6]=w*O+R*I+v*H+_*ce,l[10]=w*E+R*G+v*Z+_*ue,l[14]=w*U+R*se+v*q+_*k,l[3]=b*D+N*X+L*oe+B*K,l[7]=b*O+N*I+L*H+B*ce,l[11]=b*E+N*G+L*Z+B*ue,l[15]=b*U+N*se+L*q+B*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],h=e[9],m=e[13],x=e[2],S=e[6],g=e[10],y=e[14],w=e[3],R=e[7],v=e[11],_=e[15],b=h*y-m*g,N=d*y-m*S,L=d*g-h*S,B=u*y-m*x,D=u*g-h*x,O=u*S-d*x;return t*(R*b-v*N+_*L)-r*(w*b-v*B+_*D)+o*(w*N-R*B+_*O)-l*(w*L-R*D+v*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],x=e[8],S=e[9],g=e[10],y=e[11],w=e[12],R=e[13],v=e[14],_=e[15],b=t*d-r*u,N=t*h-o*u,L=t*m-l*u,B=r*h-o*d,D=r*m-l*d,O=o*m-l*h,E=x*R-S*w,U=x*v-g*w,X=x*_-y*w,I=S*v-g*R,G=S*_-y*R,se=g*_-y*v,oe=b*se-N*G+L*I+B*X-D*U+O*E;if(oe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/oe;return e[0]=(d*se-h*G+m*I)*H,e[1]=(o*G-r*se-l*I)*H,e[2]=(R*O-v*D+_*B)*H,e[3]=(g*D-S*O-y*B)*H,e[4]=(h*X-u*se-m*U)*H,e[5]=(t*se-o*X+l*U)*H,e[6]=(v*L-w*O-_*N)*H,e[7]=(x*O-g*L+y*N)*H,e[8]=(u*G-d*X+m*E)*H,e[9]=(r*X-t*G-l*E)*H,e[10]=(w*D-R*L+_*b)*H,e[11]=(S*L-x*D-y*b)*H,e[12]=(d*U-u*I-h*E)*H,e[13]=(t*I-r*U+o*E)*H,e[14]=(R*N-w*B-v*b)*H,e[15]=(x*B-S*N+g*b)*H,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,h=e.z,m=l*u,x=l*d;return this.set(m*u+r,m*d-o*h,m*h+o*d,0,m*d+o*h,x*d+r,x*h-o*u,0,m*h-o*d,x*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,h=t._w,m=l+l,x=u+u,S=d+d,g=l*m,y=l*x,w=l*S,R=u*x,v=u*S,_=d*S,b=h*m,N=h*x,L=h*S,B=r.x,D=r.y,O=r.z;return o[0]=(1-(R+_))*B,o[1]=(y+L)*B,o[2]=(w-N)*B,o[3]=0,o[4]=(y-L)*D,o[5]=(1-(g+_))*D,o[6]=(v+b)*D,o[7]=0,o[8]=(w+N)*O,o[9]=(v-b)*O,o[10]=(1-(g+R))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Xs.set(o[0],o[1],o[2]).length();const d=Xs.set(o[4],o[5],o[6]).length(),h=Xs.set(o[8],o[9],o[10]).length();l<0&&(u=-u),yi.copy(this);const m=1/u,x=1/d,S=1/h;return yi.elements[0]*=m,yi.elements[1]*=m,yi.elements[2]*=m,yi.elements[4]*=x,yi.elements[5]*=x,yi.elements[6]*=x,yi.elements[8]*=S,yi.elements[9]*=S,yi.elements[10]*=S,t.setFromRotationMatrix(yi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,t,r,o,l,u,d=zi,h=!1){const m=this.elements,x=2*l/(t-e),S=2*l/(r-o),g=(t+e)/(t-e),y=(r+o)/(r-o);let w,R;if(h)w=l/(u-l),R=u*l/(u-l);else if(d===zi)w=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(d===fo)w=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=S,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=zi,h=!1){const m=this.elements,x=2/(t-e),S=2/(r-o),g=-(t+e)/(t-e),y=-(r+o)/(r-o);let w,R;if(h)w=1/(u-l),R=u/(u-l);else if(d===zi)w=-2/(u-l),R=-(u+l)/(u-l);else if(d===fo)w=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=S,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=w,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};fc.prototype.isMatrix4=!0;let $t=fc;const Xs=new Q,yi=new $t,pv=new Q(0,0,0),mv=new Q(1,1,1),Ir=new Q,yl=new Q,Qn=new Q,km=new $t,Bm=new da;class Xr{constructor(e=0,t=0,r=0,o=Xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],h=o[1],m=o[5],x=o[9],S=o[2],g=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-St(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,y),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(km,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bm.setFromEuler(this),this.setFromQuaternion(Bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xr.DEFAULT_ORDER="XYZ";class Qg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gv=0;const zm=new Q,qs=new da,ir=new $t,Ml=new Q,Qa=new Q,_v=new Q,xv=new da,Vm=new Q(1,0,0),Gm=new Q(0,1,0),Hm=new Q(0,0,1),Wm={type:"added"},vv={type:"removed"},Ys={type:"childadded",child:null},lf={type:"childremoved",child:null};class Pn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new Q,t=new Xr,r=new da,o=new Q(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $t},normalMatrix:{value:new pt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(Vm,e)}rotateY(e){return this.rotateOnAxis(Gm,e)}rotateZ(e){return this.rotateOnAxis(Hm,e)}translateOnAxis(e,t){return zm.copy(e).applyQuaternion(this.quaternion),this.position.add(zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vm,e)}translateY(e){return this.translateOnAxis(Gm,e)}translateZ(e){return this.translateOnAxis(Hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ml.copy(e):Ml.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(Qa,Ml,this.up):ir.lookAt(Ml,Qa,this.up),this.quaternion.setFromRotationMatrix(ir),o&&(ir.extractRotation(o.matrixWorld),qs.setFromRotationMatrix(ir),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wm),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vv),lf.child=e,this.dispatchEvent(lf),lf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wm),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,_v),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,xv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,x=h.length;m<x;m++){const S=h[m];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(l(e.animations,h))}}if(t){const d=u(e.geometries),h=u(e.materials),m=u(e.textures),x=u(e.images),S=u(e.shapes),g=u(e.skeletons),y=u(e.animations),w=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(d){const h=[];for(const m in d){const x=d[m];delete x.metadata,h.push(x)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Pn.DEFAULT_UP=new Q(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class oo extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sv={type:"move"};class cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const R of e.hand.values()){const v=t.getJointPose(R,r),_=this._getHandJoint(m,R);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const x=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],g=x.position.distanceTo(S.position),y=.02,w=.005;m.inputState.pinching&&g>y+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=y-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Sv)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new oo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},El={h:0,s:0,l:0};function uf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Rt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Tt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Tt.workingColorSpace){if(e=ov(e,1),t=St(t,0,1),r=St(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=uf(u,l,e+1/3),this.g=uf(u,l,e),this.b=uf(u,l,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,t=fi){function r(l){l!==void 0&&parseFloat(l)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const r=Jg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Tt.workingToColorSpace(Cn.copy(this),e),Math.round(St(Cn.r*255,0,255))*65536+Math.round(St(Cn.g*255,0,255))*256+Math.round(St(Cn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Cn.copy(this),t);const r=Cn.r,o=Cn.g,l=Cn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let h,m;const x=(d+u)/2;if(d===u)h=0,m=0;else{const S=u-d;switch(m=x<=.5?S/(u+d):S/(2-u-d),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=m,e.l=x,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=fi){Tt.workingToColorSpace(Cn.copy(this),e);const t=Cn.r,r=Cn.g,o=Cn.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ur),e.getHSL(El);const r=nf(Ur.h,El.h,t),o=nf(Ur.s,El.s,t),l=nf(Ur.l,El.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Rt;Rt.NAMES=Jg;class yv extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xr,this.environmentIntensity=1,this.environmentRotation=new Xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mi=new Q,rr=new Q,ff=new Q,sr=new Q,$s=new Q,Ks=new Q,jm=new Q,df=new Q,hf=new Q,pf=new Q,mf=new en,gf=new en,_f=new en;class Ti{constructor(e=new Q,t=new Q,r=new Q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Mi.subVectors(e,t),o.cross(Mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Mi.subVectors(o,t),rr.subVectors(r,t),ff.subVectors(e,t);const u=Mi.dot(Mi),d=Mi.dot(rr),h=Mi.dot(ff),m=rr.dot(rr),x=rr.dot(ff),S=u*m-d*d;if(S===0)return l.set(0,0,0),null;const g=1/S,y=(m*h-d*x)*g,w=(u*x-d*h)*g;return l.set(1-y-w,w,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,r,o,l,u,d,h){return this.getBarycoord(e,t,r,o,sr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,sr.x),h.addScaledVector(u,sr.y),h.addScaledVector(d,sr.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return mf.setScalar(0),gf.setScalar(0),_f.setScalar(0),mf.fromBufferAttribute(e,t),gf.fromBufferAttribute(e,r),_f.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(mf,l.x),u.addScaledVector(gf,l.y),u.addScaledVector(_f,l.z),u}static isFrontFacing(e,t,r,o){return Mi.subVectors(r,t),rr.subVectors(e,t),Mi.cross(rr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Mi.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ti.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;$s.subVectors(o,r),Ks.subVectors(l,r),df.subVectors(e,r);const h=$s.dot(df),m=Ks.dot(df);if(h<=0&&m<=0)return t.copy(r);hf.subVectors(e,o);const x=$s.dot(hf),S=Ks.dot(hf);if(x>=0&&S<=x)return t.copy(o);const g=h*S-x*m;if(g<=0&&h>=0&&x<=0)return u=h/(h-x),t.copy(r).addScaledVector($s,u);pf.subVectors(e,l);const y=$s.dot(pf),w=Ks.dot(pf);if(w>=0&&y<=w)return t.copy(l);const R=y*m-h*w;if(R<=0&&m>=0&&w<=0)return d=m/(m-w),t.copy(r).addScaledVector(Ks,d);const v=x*w-y*S;if(v<=0&&S-x>=0&&y-w>=0)return jm.subVectors(l,o),d=(S-x)/(S-x+(y-w)),t.copy(o).addScaledVector(jm,d);const _=1/(v+R+g);return u=R*_,d=g*_,t.copy(r).addScaledVector($s,u).addScaledVector(Ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class mo{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Ei):Ei.fromBufferAttribute(l,u),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Tl.copy(r.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ja),wl.subVectors(this.max,Ja),Zs.subVectors(e.a,Ja),Qs.subVectors(e.b,Ja),Js.subVectors(e.c,Ja),Fr.subVectors(Qs,Zs),Or.subVectors(Js,Qs),os.subVectors(Zs,Js);let t=[0,-Fr.z,Fr.y,0,-Or.z,Or.y,0,-os.z,os.y,Fr.z,0,-Fr.x,Or.z,0,-Or.x,os.z,0,-os.x,-Fr.y,Fr.x,0,-Or.y,Or.x,0,-os.y,os.x,0];return!xf(t,Zs,Qs,Js,wl)||(t=[1,0,0,0,1,0,0,0,1],!xf(t,Zs,Qs,Js,wl))?!1:(Al.crossVectors(Fr,Or),t=[Al.x,Al.y,Al.z],xf(t,Zs,Qs,Js,wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ar=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Ei=new Q,Tl=new mo,Zs=new Q,Qs=new Q,Js=new Q,Fr=new Q,Or=new Q,os=new Q,Ja=new Q,wl=new Q,Al=new Q,ls=new Q;function xf(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ls.fromArray(s,l);const d=o.x*Math.abs(ls.x)+o.y*Math.abs(ls.y)+o.z*Math.abs(ls.z),h=e.dot(ls),m=t.dot(ls),x=r.dot(ls);if(Math.max(-Math.max(h,m,x),Math.min(h,m,x))>d)return!1}return!0}const an=new Q,bl=new Pt;let Mv=0;class Ai extends vs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Nm,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)bl.fromBufferAttribute(this,t),bl.applyMatrix3(e),this.setXY(t,bl.x,bl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Za(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Za(t,this.array)),t}setX(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Za(t,this.array)),t}setY(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Za(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Za(t,this.array)),t}setW(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),r=jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),r=jn(r,this.array),o=jn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),r=jn(r,this.array),o=jn(o,this.array),l=jn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class e0 extends Ai{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class t0 extends Ai{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class ni extends Ai{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Ev=new mo,eo=new Q,vf=new Q;class go{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Ev.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const t=eo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(eo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(vf)),this.expandByPoint(eo.copy(e.center).sub(vf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Tv=0;const ci=new $t,Sf=new Pn,ea=new Q,Jn=new mo,to=new mo,gn=new Q;class qn extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iv(e)?t0:e0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new pt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,r){return ci.makeTranslation(e,t,r),this.applyMatrix4(ci),this}scale(e,t,r){return ci.makeScale(e,t,r),this.applyMatrix4(ci),this}lookAt(e){return Sf.lookAt(e),Sf.updateMatrix(),this.applyMatrix4(Sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ea).negate(),this.translate(ea.x,ea.y,ea.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ni(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Jn.setFromBufferAttribute(l),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];to.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(Jn.min,to.min),Jn.expandByPoint(gn),gn.addVectors(Jn.max,to.max),Jn.expandByPoint(gn)):(Jn.expandByPoint(to.min),Jn.expandByPoint(to.max))}Jn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)gn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(gn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],h=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)gn.fromBufferAttribute(d,m),h&&(ea.fromBufferAttribute(e,m),gn.add(ea)),o=Math.max(o,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let E=0;E<r.count;E++)d[E]=new Q,h[E]=new Q;const m=new Q,x=new Q,S=new Q,g=new Pt,y=new Pt,w=new Pt,R=new Q,v=new Q;function _(E,U,X){m.fromBufferAttribute(r,E),x.fromBufferAttribute(r,U),S.fromBufferAttribute(r,X),g.fromBufferAttribute(l,E),y.fromBufferAttribute(l,U),w.fromBufferAttribute(l,X),x.sub(m),S.sub(m),y.sub(g),w.sub(g);const I=1/(y.x*w.y-w.x*y.y);isFinite(I)&&(R.copy(x).multiplyScalar(w.y).addScaledVector(S,-y.y).multiplyScalar(I),v.copy(S).multiplyScalar(y.x).addScaledVector(x,-w.x).multiplyScalar(I),d[E].add(R),d[U].add(R),d[X].add(R),h[E].add(v),h[U].add(v),h[X].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let E=0,U=b.length;E<U;++E){const X=b[E],I=X.start,G=X.count;for(let se=I,oe=I+G;se<oe;se+=3)_(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const N=new Q,L=new Q,B=new Q,D=new Q;function O(E){B.fromBufferAttribute(o,E),D.copy(B);const U=d[E];N.copy(U),N.sub(B.multiplyScalar(B.dot(U))).normalize(),L.crossVectors(D,U);const I=L.dot(h[E])<0?-1:1;u.setXYZW(E,N.x,N.y,N.z,I)}for(let E=0,U=b.length;E<U;++E){const X=b[E],I=X.start,G=X.count;for(let se=I,oe=I+G;se<oe;se+=3)O(e.getX(se+0)),O(e.getX(se+1)),O(e.getX(se+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const o=new Q,l=new Q,u=new Q,d=new Q,h=new Q,m=new Q,x=new Q,S=new Q;if(e)for(let g=0,y=e.count;g<y;g+=3){const w=e.getX(g+0),R=e.getX(g+1),v=e.getX(g+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,v),x.subVectors(u,l),S.subVectors(o,l),x.cross(S),d.fromBufferAttribute(r,w),h.fromBufferAttribute(r,R),m.fromBufferAttribute(r,v),d.add(x),h.add(x),m.add(x),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let g=0,y=t.count;g<y;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),x.subVectors(u,l),S.subVectors(o,l),x.cross(S),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,h){const m=d.array,x=d.itemSize,S=d.normalized,g=new m.constructor(h.length*x);let y=0,w=0;for(let R=0,v=h.length;R<v;R++){d.isInterleavedBufferAttribute?y=h[R]*d.data.stride+d.offset:y=h[R]*x;for(let _=0;_<x;_++)g[w++]=m[y++]}return new Ai(g,x,S)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,r=this.index.array,o=this.attributes;for(const d in o){const h=o[d],m=e(h,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let x=0,S=m.length;x<S;x++){const g=m[x],y=e(g,r);h.push(y)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const m=u[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],x=[];for(let S=0,g=m.length;S<g;S++){const y=m[S];x.push(y.toJSON(e.data))}x.length>0&&(o[h]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(t))}const l=e.morphAttributes;for(const m in l){const x=[],S=l[m];for(let g=0,y=S.length;g<y;g++)x.push(S[g].clone(t));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const S=u[m];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let wv=0;class Ss extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=po(),this.name="",this.type="Material",this.blending=ra,this.side=jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kf,this.blendDst=Bf,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ra&&(r.blending=this.blending),this.side!==jr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==kf&&(r.blendSrc=this.blendSrc),this.blendDst!==Bf&&(r.blendDst=this.blendDst),this.blendEquation!==ds&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==aa&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const or=new Q,yf=new Q,Cl=new Q,kr=new Q,Mf=new Q,Rl=new Q,Ef=new Q;class Gd{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){yf.copy(e).add(t).multiplyScalar(.5),Cl.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(yf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Cl),d=kr.dot(this.direction),h=-kr.dot(Cl),m=kr.lengthSq(),x=Math.abs(1-u*u);let S,g,y,w;if(x>0)if(S=u*h-d,g=u*d-h,w=l*x,S>=0)if(g>=-w)if(g<=w){const R=1/x;S*=R,g*=R,y=S*(S+u*g+2*d)+g*(u*S+g+2*h)+m}else g=l,S=Math.max(0,-(u*g+d)),y=-S*S+g*(g+2*h)+m;else g=-l,S=Math.max(0,-(u*g+d)),y=-S*S+g*(g+2*h)+m;else g<=-w?(S=Math.max(0,-(-u*l+d)),g=S>0?-l:Math.min(Math.max(-l,-h),l),y=-S*S+g*(g+2*h)+m):g<=w?(S=0,g=Math.min(Math.max(-l,-h),l),y=g*(g+2*h)+m):(S=Math.max(0,-(u*l+d)),g=S>0?l:Math.min(Math.max(-l,-h),l),y=-S*S+g*(g+2*h)+m);else g=u>0?-l:l,S=Math.max(0,-(u*g+d)),y=-S*S+g*(g+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(yf).addScaledVector(Cl,g),y}intersectSphere(e,t){or.subVectors(e.center,this.origin);const r=or.dot(this.direction),o=or.dot(or)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,h;const m=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),x>=0?(l=(e.min.y-g.y)*x,u=(e.max.y-g.y)*x):(l=(e.max.y-g.y)*x,u=(e.min.y-g.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(d=(e.min.z-g.z)*S,h=(e.max.z-g.z)*S):(d=(e.max.z-g.z)*S,h=(e.min.z-g.z)*S),r>h||d>o)||((d>r||r!==r)&&(r=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,r,o,l){Mf.subVectors(t,e),Rl.subVectors(r,e),Ef.crossVectors(Mf,Rl);let u=this.direction.dot(Ef),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;kr.subVectors(this.origin,e);const h=d*this.direction.dot(Rl.crossVectors(kr,Rl));if(h<0)return null;const m=d*this.direction.dot(Mf.cross(kr));if(m<0||h+m>u)return null;const x=-d*kr.dot(Ef);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class n0 extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=Ig,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xm=new $t,cs=new Gd,Pl=new go,qm=new Q,Nl=new Q,Ll=new Q,Dl=new Q,Tf=new Q,Il=new Q,Ym=new Q,Ul=new Q;class ji extends Pn{constructor(e=new qn,t=new n0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Il.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const x=d[h],S=l[h];x!==0&&(Tf.fromBufferAttribute(S,e),u?Il.addScaledVector(Tf,x):Il.addScaledVector(Tf.sub(t),x))}t.add(Il)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Pl.copy(r.boundingSphere),Pl.applyMatrix4(l),cs.copy(e.ray).recast(e.near),!(Pl.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Pl,qm)===null||cs.origin.distanceToSquared(qm)>(e.far-e.near)**2))&&(Xm.copy(l).invert(),cs.copy(e.ray).applyMatrix4(Xm),!(r.boundingBox!==null&&cs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,S=l.attributes.normal,g=l.groups,y=l.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,R=g.length;w<R;w++){const v=g[w],_=u[v.materialIndex],b=Math.max(v.start,y.start),N=Math.min(d.count,Math.min(v.start+v.count,y.start+y.count));for(let L=b,B=N;L<B;L+=3){const D=d.getX(L),O=d.getX(L+1),E=d.getX(L+2);o=Fl(this,_,e,r,m,x,S,D,O,E),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let v=w,_=R;v<_;v+=3){const b=d.getX(v),N=d.getX(v+1),L=d.getX(v+2);o=Fl(this,u,e,r,m,x,S,b,N,L),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,R=g.length;w<R;w++){const v=g[w],_=u[v.materialIndex],b=Math.max(v.start,y.start),N=Math.min(h.count,Math.min(v.start+v.count,y.start+y.count));for(let L=b,B=N;L<B;L+=3){const D=L,O=L+1,E=L+2;o=Fl(this,_,e,r,m,x,S,D,O,E),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let v=w,_=R;v<_;v+=3){const b=v,N=v+1,L=v+2;o=Fl(this,u,e,r,m,x,S,b,N,L),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function Av(s,e,t,r,o,l,u,d){let h;if(e.side===Xn?h=r.intersectTriangle(u,l,o,!0,d):h=r.intersectTriangle(o,l,u,e.side===jr,d),h===null)return null;Ul.copy(d),Ul.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Ul);return m<t.near||m>t.far?null:{distance:m,point:Ul.clone(),object:s}}function Fl(s,e,t,r,o,l,u,d,h,m){s.getVertexPosition(d,Nl),s.getVertexPosition(h,Ll),s.getVertexPosition(m,Dl);const x=Av(s,e,t,r,Nl,Ll,Dl,Ym);if(x){const S=new Q;Ti.getBarycoord(Ym,Nl,Ll,Dl,S),o&&(x.uv=Ti.getInterpolatedAttribute(o,d,h,m,S,new Pt)),l&&(x.uv1=Ti.getInterpolatedAttribute(l,d,h,m,S,new Pt)),u&&(x.normal=Ti.getInterpolatedAttribute(u,d,h,m,S,new Q),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:d,b:h,c:m,normal:new Q,materialIndex:0};Ti.getNormal(Nl,Ll,Dl,g.normal),x.face=g,x.barycoord=S}return x}class bv extends Un{constructor(e=null,t=1,r=1,o,l,u,d,h,m=Mn,x=Mn,S,g){super(null,u,d,h,m,x,o,l,S,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wf=new Q,Cv=new Q,Rv=new pt;class fs{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=wf.subVectors(r,t).cross(Cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(wf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Rv.getNormalMatrix(e),o=this.coplanarPoint(wf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new go,Pv=new Pt(.5,.5),Ol=new Q;class Hd{constructor(e=new fs,t=new fs,r=new fs,o=new fs,l=new fs,u=new fs){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=zi,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],x=l[4],S=l[5],g=l[6],y=l[7],w=l[8],R=l[9],v=l[10],_=l[11],b=l[12],N=l[13],L=l[14],B=l[15];if(o[0].setComponents(m-u,y-x,_-w,B-b).normalize(),o[1].setComponents(m+u,y+x,_+w,B+b).normalize(),o[2].setComponents(m+d,y+S,_+R,B+N).normalize(),o[3].setComponents(m-d,y-S,_-R,B-N).normalize(),r)o[4].setComponents(h,g,v,L).normalize(),o[5].setComponents(m-h,y-g,_-v,B-L).normalize();else if(o[4].setComponents(m-h,y-g,_-v,B-L).normalize(),t===zi)o[5].setComponents(m+h,y+g,_+v,B+L).normalize();else if(t===fo)o[5].setComponents(h,g,v,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);const t=Pv.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ol.x=o.normal.x>0?e.max.x:e.min.x,Ol.y=o.normal.y>0?e.max.y:e.min.y,Ol.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class i0 extends Ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sc=new Q,ac=new Q,$m=new $t,no=new Gd,kl=new go,Af=new Q,Km=new Q;class Nv extends Pn{constructor(e=new qn,t=new i0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)sc.fromBufferAttribute(t,o-1),ac.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=sc.distanceTo(ac);e.setAttribute("lineDistance",new ni(r,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),kl.copy(r.boundingSphere),kl.applyMatrix4(o),kl.radius+=l,e.ray.intersectsSphere(kl)===!1)return;$m.copy(o).invert(),no.copy(e.ray).applyMatrix4($m);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=this.isLineSegments?2:1,x=r.index,g=r.attributes.position;if(x!==null){const y=Math.max(0,u.start),w=Math.min(x.count,u.start+u.count);for(let R=y,v=w-1;R<v;R+=m){const _=x.getX(R),b=x.getX(R+1),N=Bl(this,e,no,h,_,b,R);N&&t.push(N)}if(this.isLineLoop){const R=x.getX(w-1),v=x.getX(y),_=Bl(this,e,no,h,R,v,w-1);_&&t.push(_)}}else{const y=Math.max(0,u.start),w=Math.min(g.count,u.start+u.count);for(let R=y,v=w-1;R<v;R+=m){const _=Bl(this,e,no,h,R,R+1,R);_&&t.push(_)}if(this.isLineLoop){const R=Bl(this,e,no,h,w-1,y,w-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Bl(s,e,t,r,o,l,u){const d=s.geometry.attributes.position;if(sc.fromBufferAttribute(d,o),ac.fromBufferAttribute(d,l),t.distanceSqToSegment(sc,ac,Af,Km)>r)return;Af.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(Af);if(!(m<e.near||m>e.far))return{distance:m,point:Km.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}class Lv extends Nv{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class r0 extends Ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zm=new $t,Cd=new Gd,zl=new go,Vl=new Q;class Dv extends Pn{constructor(e=new qn,t=new r0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zl.copy(r.boundingSphere),zl.applyMatrix4(o),zl.radius+=l,e.ray.intersectsSphere(zl)===!1)return;Zm.copy(o).invert(),Cd.copy(e.ray).applyMatrix4(Zm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=r.index,S=r.attributes.position;if(m!==null){const g=Math.max(0,u.start),y=Math.min(m.count,u.start+u.count);for(let w=g,R=y;w<R;w++){const v=m.getX(w);Vl.fromBufferAttribute(S,v),Qm(Vl,v,h,o,e,t,this)}}else{const g=Math.max(0,u.start),y=Math.min(S.count,u.start+u.count);for(let w=g,R=y;w<R;w++)Vl.fromBufferAttribute(S,w),Qm(Vl,w,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Qm(s,e,t,r,o,l,u){const d=Cd.distanceSqToPoint(s);if(d<t){const h=new Q;Cd.closestPointToPoint(s,h),h.applyMatrix4(r);const m=o.ray.origin.distanceTo(h);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class s0 extends Un{constructor(e=[],t=_s,r,o,l,u,d,h,m,x){super(e,t,r,o,l,u,d,h,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class la extends Un{constructor(e,t,r=Wi,o,l,u,d=Mn,h=Mn,m,x=pr,S=1){if(x!==pr&&x!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:S};super(g,o,l,u,d,h,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Iv extends la{constructor(e,t=Wi,r=_s,o,l,u=Mn,d=Mn,h,m=pr){const x={width:e,height:e,depth:1},S=[x,x,x,x,x,x];super(e,e,t,r,o,l,u,d,h,m),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class a0 extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _o extends qn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],m=[],x=[],S=[];let g=0,y=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,o,u,2),w("x","z","y",1,-1,e,r,-t,o,u,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new ni(m,3)),this.setAttribute("normal",new ni(x,3)),this.setAttribute("uv",new ni(S,2));function w(R,v,_,b,N,L,B,D,O,E,U){const X=L/O,I=B/E,G=L/2,se=B/2,oe=D/2,H=O+1,Z=E+1;let q=0,K=0;const ce=new Q;for(let ue=0;ue<Z;ue++){const k=ue*I-se;for(let ee=0;ee<H;ee++){const De=ee*X-G;ce[R]=De*b,ce[v]=k*N,ce[_]=oe,m.push(ce.x,ce.y,ce.z),ce[R]=0,ce[v]=0,ce[_]=D>0?1:-1,x.push(ce.x,ce.y,ce.z),S.push(ee/O),S.push(1-ue/E),q+=1}}for(let ue=0;ue<E;ue++)for(let k=0;k<O;k++){const ee=g+k+H*ue,De=g+k+H*(ue+1),ze=g+(k+1)+H*(ue+1),Le=g+(k+1)+H*ue;h.push(ee,De,Le),h.push(De,ze,Le),K+=6}d.addGroup(y,K,U),y+=K,g+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Uv{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){at("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,h=l-1,m;for(;d<=h;)if(o=Math.floor(d+(h-d)/2),m=r[o]-u,m<0)d=o+1;else if(m>0)h=o-1;else{h=o;break}if(o=h,r[o]===u)return o/(l-1);const x=r[o],g=r[o+1]-x,y=(u-x)/g;return(o+y)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),h=t||(u.isVector2?new Pt:new Q);return h.copy(d).sub(u).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new Q,o=[],l=[],u=[],d=new Q,h=new $t;for(let y=0;y<=e;y++){const w=y/e;o[y]=this.getTangentAt(w,new Q)}l[0]=new Q,u[0]=new Q;let m=Number.MAX_VALUE;const x=Math.abs(o[0].x),S=Math.abs(o[0].y),g=Math.abs(o[0].z);x<=m&&(m=x,r.set(1,0,0)),S<=m&&(m=S,r.set(0,1,0)),g<=m&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),u[y]=u[y-1].clone(),d.crossVectors(o[y-1],o[y]),d.length()>Number.EPSILON){d.normalize();const w=Math.acos(St(o[y-1].dot(o[y]),-1,1));l[y].applyMatrix4(h.makeRotationAxis(d,w))}u[y].crossVectors(o[y],l[y])}if(t===!0){let y=Math.acos(St(l[0].dot(l[e]),-1,1));y/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(y=-y);for(let w=1;w<=e;w++)l[w].applyMatrix4(h.makeRotationAxis(o[w],y*w)),u[w].crossVectors(o[w],l[w])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Fv extends Uv{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=h}getPoint(e,t=new Pt){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const x=Math.cos(this.aRotation),S=Math.sin(this.aRotation),g=h-this.aX,y=m-this.aY;h=g*x-y*S+this.aX,m=g*S+y*x+this.aY}return r.set(h,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class hc extends qn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),h=Math.floor(o),m=d+1,x=h+1,S=e/d,g=t/h,y=[],w=[],R=[],v=[];for(let _=0;_<x;_++){const b=_*g-u;for(let N=0;N<m;N++){const L=N*S-l;w.push(L,-b,0),R.push(0,0,1),v.push(N/d),v.push(1-_/h)}}for(let _=0;_<h;_++)for(let b=0;b<d;b++){const N=b+m*_,L=b+m*(_+1),B=b+1+m*(_+1),D=b+1+m*_;y.push(N,L,D),y.push(L,B,D)}this.setIndex(y),this.setAttribute("position",new ni(w,3)),this.setAttribute("normal",new ni(R,3)),this.setAttribute("uv",new ni(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wd extends qn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+d,Math.PI);let m=0;const x=[],S=new Q,g=new Q,y=[],w=[],R=[],v=[];for(let _=0;_<=r;_++){const b=[],N=_/r;let L=0;_===0&&u===0?L=.5/t:_===r&&h===Math.PI&&(L=-.5/t);for(let B=0;B<=t;B++){const D=B/t;S.x=-e*Math.cos(o+D*l)*Math.sin(u+N*d),S.y=e*Math.cos(u+N*d),S.z=e*Math.sin(o+D*l)*Math.sin(u+N*d),w.push(S.x,S.y,S.z),g.copy(S).normalize(),R.push(g.x,g.y,g.z),v.push(D+L,1-N),b.push(m++)}x.push(b)}for(let _=0;_<r;_++)for(let b=0;b<t;b++){const N=x[_][b+1],L=x[_][b],B=x[_+1][b],D=x[_+1][b+1];(_!==0||u>0)&&y.push(N,L,D),(_!==r-1||h<Math.PI)&&y.push(L,B,D)}this.setIndex(y),this.setAttribute("position",new ni(w,3)),this.setAttribute("normal",new ni(R,3)),this.setAttribute("uv",new ni(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ca(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Jm(o))o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Jm(o[0])){const l=[];for(let u=0,d=o.length;u<d;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function In(s){const e={};for(let t=0;t<s.length;t++){const r=ca(s[t]);for(const o in r)e[o]=r[o]}return e}function Jm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ov(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function o0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const kv={clone:ca,merge:In};var Bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bv,this.fragmentShader=zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ca(e.uniforms),this.uniformsGroups=Ov(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Vv extends Xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gv extends Ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wd,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hv extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$x,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wv extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class l0 extends Pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const bf=new $t,eg=new Q,tg=new Q;class jv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hd,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;eg.setFromMatrixPosition(e.matrixWorld),t.position.copy(eg),tg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tg),t.updateMatrixWorld(),bf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===fo||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(bf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gl=new Q,Hl=new da,Ui=new Q;let c0=class extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gl,Hl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Hl,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Gl,Hl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Hl,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Br=new Q,ng=new Pt,ig=new Pt;class ei extends c0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bd*2*Math.atan(Math.tan(tf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,t){return this.getViewBounds(e,ng,ig),t.subVectors(ig,ng)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tf*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/m,o*=u.width/h,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Xv extends jv{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0}}class rg extends l0{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Xv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class u0 extends c0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=x*this.view.offsetY,h=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qv extends l0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ta=-90,na=1;class Yv extends Pn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ei(ta,na,e,t);o.layers=this.layers,this.add(o);const l=new ei(ta,na,e,t);l.layers=this.layers,this.add(l);const u=new ei(ta,na,e,t);u.layers=this.layers,this.add(u);const d=new ei(ta,na,e,t);d.layers=this.layers,this.add(d);const h=new ei(ta,na,e,t);h.layers=this.layers,this.add(h);const m=new ei(ta,na,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,h]=t;for(const m of t)this.remove(m);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===fo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,m,x]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,x),e.setRenderTarget(S,g,y),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class $v extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Jd=class Jd{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Jd.prototype.isMatrix2=!0;let sg=Jd;function ag(s,e,t,r){const o=Kv(r);switch(t){case qg:return s*e;case $g:return s*e/o.components*o.byteLength;case Fd:return s*e/o.components*o.byteLength;case xs:return s*e*2/o.components*o.byteLength;case Od:return s*e*2/o.components*o.byteLength;case Yg:return s*e*3/o.components*o.byteLength;case wi:return s*e*4/o.components*o.byteLength;case kd:return s*e*4/o.components*o.byteLength;case $l:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kf:case Qf:return Math.max(s,16)*Math.max(e,8)/4;case $f:case Zf:return Math.max(s,8)*Math.max(e,8)/2;case Jf:case ed:case nd:case id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case td:case ec:case rd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ad:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case od:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ld:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case cd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ud:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case fd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case dd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case hd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case pd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case md:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case gd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case _d:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case xd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case vd:case Sd:case yd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Md:case Ed:return Math.ceil(s/4)*Math.ceil(e/4)*8;case tc:case Td:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kv(s){switch(s){case ti:case Hg:return{byteLength:1,components:1};case co:case Wg:case hr:return{byteLength:2,components:1};case Id:case Ud:return{byteLength:2,components:4};case Wi:case Dd:case Bi:return{byteLength:4,components:1};case jg:case Xg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ld}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ld);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function f0(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Zv(s){const e=new WeakMap;function t(d,h){const m=d.array,x=d.usage,S=m.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,m,x),d.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,h,m){const x=h.array,S=h.updateRanges;if(s.bindBuffer(m,d),S.length===0)s.bufferSubData(m,0,x);else{S.sort((y,w)=>y.start-w.start);let g=0;for(let y=1;y<S.length;y++){const w=S[g],R=S[y];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++g,S[g]=R)}S.length=g+1;for(let y=0,w=S.length;y<w;y++){const R=S[y];s.bufferSubData(m,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:o,remove:l,update:u}}var Qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jv=`#ifdef USE_ALPHAHASH
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
#endif`,eS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rS=`#ifdef USE_AOMAP
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
#endif`,sS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aS=`#ifdef USE_BATCHING
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
#endif`,oS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fS=`#ifdef USE_IRIDESCENCE
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
#endif`,dS=`#ifdef USE_BUMPMAP
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
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_S=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,SS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yS=`#define PI 3.141592653589793
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
} // validated`,MS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ES=`vec3 transformedNormal = objectNormal;
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
#endif`,TS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CS="gl_FragColor = linearToOutputTexel( gl_FragColor );",RS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PS=`#ifdef USE_ENVMAP
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
#endif`,NS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,LS=`#ifdef USE_ENVMAP
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
#endif`,DS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IS=`#ifdef USE_ENVMAP
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
#endif`,US=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BS=`#ifdef USE_GRADIENTMAP
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
}`,zS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,WS=`#ifdef USE_ENVMAP
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
#endif`,jS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$S=`PhysicalMaterial material;
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
#endif`,KS=`uniform sampler2D dfgLUT;
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
}`,ZS=`
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
#endif`,QS=`#if defined( RE_IndirectDiffuse )
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
#endif`,JS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ey=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ay=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ly=`#if defined( USE_POINTS_UV )
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
#endif`,cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
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
#endif`,my=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_y=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yy=`#ifdef USE_NORMALMAP
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
#endif`,My=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ey=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ay=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,by=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ry=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ny=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Oy=`float getShadowMask() {
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
}`,ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,By=`#ifdef USE_SKINNING
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
#endif`,zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vy=`#ifdef USE_SKINNING
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
#endif`,Gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xy=`#ifdef USE_TRANSMISSION
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
#endif`,qy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jy=`uniform sampler2D t2D;
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`#include <common>
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
}`,sM=`#if DEPTH_PACKING == 3200
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
}`,aM=`#define DISTANCE
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
}`,oM=`#define DISTANCE
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`uniform float scale;
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
}`,fM=`uniform vec3 diffuse;
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
}`,dM=`#include <common>
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
}`,hM=`uniform vec3 diffuse;
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
}`,pM=`#define LAMBERT
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
}`,mM=`#define LAMBERT
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
}`,gM=`#define MATCAP
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
}`,_M=`#define MATCAP
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
}`,xM=`#define NORMAL
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
}`,vM=`#define NORMAL
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
}`,SM=`#define PHONG
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
}`,yM=`#define PHONG
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
}`,MM=`#define STANDARD
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
}`,EM=`#define STANDARD
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
}`,TM=`#define TOON
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
}`,wM=`#define TOON
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
}`,AM=`uniform float size;
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
}`,bM=`uniform vec3 diffuse;
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
}`,CM=`#include <common>
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
}`,RM=`uniform vec3 color;
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
}`,PM=`uniform float rotation;
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
}`,NM=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:Qv,alphahash_pars_fragment:Jv,alphamap_fragment:eS,alphamap_pars_fragment:tS,alphatest_fragment:nS,alphatest_pars_fragment:iS,aomap_fragment:rS,aomap_pars_fragment:sS,batching_pars_vertex:aS,batching_vertex:oS,begin_vertex:lS,beginnormal_vertex:cS,bsdfs:uS,iridescence_fragment:fS,bumpmap_pars_fragment:dS,clipping_planes_fragment:hS,clipping_planes_pars_fragment:pS,clipping_planes_pars_vertex:mS,clipping_planes_vertex:gS,color_fragment:_S,color_pars_fragment:xS,color_pars_vertex:vS,color_vertex:SS,common:yS,cube_uv_reflection_fragment:MS,defaultnormal_vertex:ES,displacementmap_pars_vertex:TS,displacementmap_vertex:wS,emissivemap_fragment:AS,emissivemap_pars_fragment:bS,colorspace_fragment:CS,colorspace_pars_fragment:RS,envmap_fragment:PS,envmap_common_pars_fragment:NS,envmap_pars_fragment:LS,envmap_pars_vertex:DS,envmap_physical_pars_fragment:WS,envmap_vertex:IS,fog_vertex:US,fog_pars_vertex:FS,fog_fragment:OS,fog_pars_fragment:kS,gradientmap_pars_fragment:BS,lightmap_pars_fragment:zS,lights_lambert_fragment:VS,lights_lambert_pars_fragment:GS,lights_pars_begin:HS,lights_toon_fragment:jS,lights_toon_pars_fragment:XS,lights_phong_fragment:qS,lights_phong_pars_fragment:YS,lights_physical_fragment:$S,lights_physical_pars_fragment:KS,lights_fragment_begin:ZS,lights_fragment_maps:QS,lights_fragment_end:JS,lightprobes_pars_fragment:ey,logdepthbuf_fragment:ty,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:ry,map_fragment:sy,map_pars_fragment:ay,map_particle_fragment:oy,map_particle_pars_fragment:ly,metalnessmap_fragment:cy,metalnessmap_pars_fragment:uy,morphinstance_vertex:fy,morphcolor_vertex:dy,morphnormal_vertex:hy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:gy,normal_fragment_maps:_y,normal_pars_fragment:xy,normal_pars_vertex:vy,normal_vertex:Sy,normalmap_pars_fragment:yy,clearcoat_normal_fragment_begin:My,clearcoat_normal_fragment_maps:Ey,clearcoat_pars_fragment:Ty,iridescence_pars_fragment:wy,opaque_fragment:Ay,packing:by,premultiplied_alpha_fragment:Cy,project_vertex:Ry,dithering_fragment:Py,dithering_pars_fragment:Ny,roughnessmap_fragment:Ly,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:Iy,shadowmap_pars_vertex:Uy,shadowmap_vertex:Fy,shadowmask_pars_fragment:Oy,skinbase_vertex:ky,skinning_pars_vertex:By,skinning_vertex:zy,skinnormal_vertex:Vy,specularmap_fragment:Gy,specularmap_pars_fragment:Hy,tonemapping_fragment:Wy,tonemapping_pars_fragment:jy,transmission_fragment:Xy,transmission_pars_fragment:qy,uv_pars_fragment:Yy,uv_pars_vertex:$y,uv_vertex:Ky,worldpos_vertex:Zy,background_vert:Qy,background_frag:Jy,backgroundCube_vert:eM,backgroundCube_frag:tM,cube_vert:nM,cube_frag:iM,depth_vert:rM,depth_frag:sM,distance_vert:aM,distance_frag:oM,equirect_vert:lM,equirect_frag:cM,linedashed_vert:uM,linedashed_frag:fM,meshbasic_vert:dM,meshbasic_frag:hM,meshlambert_vert:pM,meshlambert_frag:mM,meshmatcap_vert:gM,meshmatcap_frag:_M,meshnormal_vert:xM,meshnormal_frag:vM,meshphong_vert:SM,meshphong_frag:yM,meshphysical_vert:MM,meshphysical_frag:EM,meshtoon_vert:TM,meshtoon_frag:wM,points_vert:AM,points_frag:bM,shadow_vert:CM,shadow_frag:RM,sprite_vert:PM,sprite_frag:NM},Fe={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},ki={basic:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:In([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:In([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:In([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:In([Fe.points,Fe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:In([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:In([Fe.common,Fe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:In([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:In([Fe.sprite,Fe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:In([Fe.common,Fe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:In([Fe.lights,Fe.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};ki.physical={uniforms:In([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Wl={r:0,b:0,g:0},LM=new $t,d0=new pt;d0.set(-1,0,0,0,1,0,0,0,1);function DM(s,e,t,r,o,l){const u=new Rt(0);let d=o===!0?0:1,h,m,x=null,S=0,g=null;function y(b){let N=b.isScene===!0?b.background:null;if(N&&N.isTexture){const L=b.backgroundBlurriness>0;N=e.get(N,L)}return N}function w(b){let N=!1;const L=y(b);L===null?v(u,d):L&&L.isColor&&(v(L,1),N=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?t.buffers.color.setClear(0,0,0,1,l):B==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(b,N){const L=y(N);L&&(L.isCubeTexture||L.mapping===dc)?(m===void 0&&(m=new ji(new _o(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:ca(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(B,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=L,m.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(LM.makeRotationFromEuler(N.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(d0),m.material.toneMapped=Tt.getTransfer(L.colorSpace)!==kt,(x!==L||S!==L.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,x=L,S=L.version,g=s.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new ji(new hc(2,2),new Xi({name:"BackgroundMaterial",uniforms:ca(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.toneMapped=Tt.getTransfer(L.colorSpace)!==kt,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(x!==L||S!==L.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,x=L,S=L.version,g=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function v(b,N){b.getRGB(Wl,o0(s)),t.buffers.color.setClear(Wl.r,Wl.g,Wl.b,N,l)}function _(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,N=1){u.set(b),d=N,v(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,v(u,d)},render:w,addToRenderList:R,dispose:_}}function IM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function d(I,G,se,oe,H){let Z=!1;const q=S(I,oe,se,G);l!==q&&(l=q,m(l.object)),Z=y(I,oe,se,H),Z&&w(I,oe,se,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,L(I,G,se,oe),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function h(){return s.createVertexArray()}function m(I){return s.bindVertexArray(I)}function x(I){return s.deleteVertexArray(I)}function S(I,G,se,oe){const H=oe.wireframe===!0;let Z=r[G.id];Z===void 0&&(Z={},r[G.id]=Z);const q=I.isInstancedMesh===!0?I.id:0;let K=Z[q];K===void 0&&(K={},Z[q]=K);let ce=K[se.id];ce===void 0&&(ce={},K[se.id]=ce);let ue=ce[H];return ue===void 0&&(ue=g(h()),ce[H]=ue),ue}function g(I){const G=[],se=[],oe=[];for(let H=0;H<t;H++)G[H]=0,se[H]=0,oe[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:se,attributeDivisors:oe,object:I,attributes:{},index:null}}function y(I,G,se,oe){const H=l.attributes,Z=G.attributes;let q=0;const K=se.getAttributes();for(const ce in K)if(K[ce].location>=0){const k=H[ce];let ee=Z[ce];if(ee===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),k===void 0||k.attribute!==ee||ee&&k.data!==ee.data)return!0;q++}return l.attributesNum!==q||l.index!==oe}function w(I,G,se,oe){const H={},Z=G.attributes;let q=0;const K=se.getAttributes();for(const ce in K)if(K[ce].location>=0){let k=Z[ce];k===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(k=I.instanceColor));const ee={};ee.attribute=k,k&&k.data&&(ee.data=k.data),H[ce]=ee,q++}l.attributes=H,l.attributesNum=q,l.index=oe}function R(){const I=l.newAttributes;for(let G=0,se=I.length;G<se;G++)I[G]=0}function v(I){_(I,0)}function _(I,G){const se=l.newAttributes,oe=l.enabledAttributes,H=l.attributeDivisors;se[I]=1,oe[I]===0&&(s.enableVertexAttribArray(I),oe[I]=1),H[I]!==G&&(s.vertexAttribDivisor(I,G),H[I]=G)}function b(){const I=l.newAttributes,G=l.enabledAttributes;for(let se=0,oe=G.length;se<oe;se++)G[se]!==I[se]&&(s.disableVertexAttribArray(se),G[se]=0)}function N(I,G,se,oe,H,Z,q){q===!0?s.vertexAttribIPointer(I,G,se,H,Z):s.vertexAttribPointer(I,G,se,oe,H,Z)}function L(I,G,se,oe){R();const H=oe.attributes,Z=se.getAttributes(),q=G.defaultAttributeValues;for(const K in Z){const ce=Z[K];if(ce.location>=0){let ue=H[K];if(ue===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor)),ue!==void 0){const k=ue.normalized,ee=ue.itemSize,De=e.get(ue);if(De===void 0)continue;const ze=De.buffer,Le=De.type,re=De.bytesPerElement,ve=Le===s.INT||Le===s.UNSIGNED_INT||ue.gpuType===Dd;if(ue.isInterleavedBufferAttribute){const me=ue.data,Ie=me.stride,$e=ue.offset;if(me.isInstancedInterleavedBuffer){for(let et=0;et<ce.locationSize;et++)_(ce.location+et,me.meshPerAttribute);I.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let et=0;et<ce.locationSize;et++)v(ce.location+et);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let et=0;et<ce.locationSize;et++)N(ce.location+et,ee/ce.locationSize,Le,k,Ie*re,($e+ee/ce.locationSize*et)*re,ve)}else{if(ue.isInstancedBufferAttribute){for(let me=0;me<ce.locationSize;me++)_(ce.location+me,ue.meshPerAttribute);I.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<ce.locationSize;me++)v(ce.location+me);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let me=0;me<ce.locationSize;me++)N(ce.location+me,ee/ce.locationSize,Le,k,ee*re,ee/ce.locationSize*me*re,ve)}}else if(q!==void 0){const k=q[K];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(ce.location,k);break;case 3:s.vertexAttrib3fv(ce.location,k);break;case 4:s.vertexAttrib4fv(ce.location,k);break;default:s.vertexAttrib1fv(ce.location,k)}}}}b()}function B(){U();for(const I in r){const G=r[I];for(const se in G){const oe=G[se];for(const H in oe){const Z=oe[H];for(const q in Z)x(Z[q].object),delete Z[q];delete oe[H]}}delete r[I]}}function D(I){if(r[I.id]===void 0)return;const G=r[I.id];for(const se in G){const oe=G[se];for(const H in oe){const Z=oe[H];for(const q in Z)x(Z[q].object),delete Z[q];delete oe[H]}}delete r[I.id]}function O(I){for(const G in r){const se=r[G];for(const oe in se){const H=se[oe];if(H[I.id]===void 0)continue;const Z=H[I.id];for(const q in Z)x(Z[q].object),delete Z[q];delete H[I.id]}}}function E(I){for(const G in r){const se=r[G],oe=I.isInstancedMesh===!0?I.id:0,H=se[oe];if(H!==void 0){for(const Z in H){const q=H[Z];for(const K in q)x(q[K].object),delete q[K];delete H[Z]}delete se[oe],Object.keys(se).length===0&&delete r[G]}}}function U(){X(),u=!0,l!==o&&(l=o,m(l.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:U,resetDefaultState:X,dispose:B,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:v,disableUnusedAttributes:b}}function UM(s,e,t){let r;function o(h){r=h}function l(h,m){s.drawArrays(r,h,m),t.update(m,r,1)}function u(h,m,x){x!==0&&(s.drawArraysInstanced(r,h,m,x),t.update(m,r,x))}function d(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,x);let g=0;for(let y=0;y<x;y++)g+=m[y];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function FM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==wi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const E=O===hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ti&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Bi&&!E)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const x=h(m);x!==m&&(at("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const S=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:b,maxVaryings:N,maxFragmentUniforms:L,maxSamples:B,samples:D}}function OM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new fs,d=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const y=S.length!==0||g||r!==0||o;return o=g,r=S.length,y},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,g){t=x(S,g,0)},this.setState=function(S,g,y){const w=S.clippingPlanes,R=S.clipIntersection,v=S.clipShadows,_=s.get(S);if(!o||w===null||w.length===0||l&&!v)l?x(null):m();else{const b=l?0:r,N=b*4;let L=_.clippingState||null;h.value=L,L=x(w,g,N,y);for(let B=0;B!==N;++B)L[B]=t[B];_.clippingState=L,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=b}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(S,g,y,w){const R=S!==null?S.length:0;let v=null;if(R!==0){if(v=h.value,w!==!0||v===null){const _=y+R*4,b=g.matrixWorldInverse;d.getNormalMatrix(b),(v===null||v.length<_)&&(v=new Float32Array(_));for(let N=0,L=y;N!==R;++N,L+=4)u.copy(S[N]).applyMatrix4(b,d),u.normal.toArray(v,L),v[L+3]=u.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}const Hr=4,og=[.125,.215,.35,.446,.526,.582],hs=20,kM=256,io=new u0,lg=new Rt;let Cf=null,Rf=0,Pf=0,Nf=!1;const BM=new Q;class cg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:d=BM}=l;Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cf,Rf,Pf),this._renderer.xr.enabled=Nf,e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===oa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:hr,format:wi,colorSpace:nc,depthBuffer:!1},o=ug(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ug(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zM(l)),this._blurMaterial=GM(l,e,t),this._ggxMaterial=VM(l,e,t)}return o}_compileMaterial(e){const t=new ji(new qn,e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,r,o,l){const h=new ei(90,1,t,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,y=S.toneMapping;S.getClearColor(lg),S.toneMapping=Gi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ji(new _o,new n0({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,v=R.material;let _=!1;const b=e.background;b?b.isColor&&(v.color.copy(b),e.background=null,_=!0):(v.color.copy(lg),_=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(h.up.set(0,m[N],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+x[N],l.y,l.z)):L===1?(h.up.set(0,0,m[N]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+x[N],l.z)):(h.up.set(0,m[N],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+x[N]));const B=this._cubeSize;ia(o,L*B,N>2?B:0,B,B),S.setRenderTarget(o),_&&S.render(R,h),S.render(e,h)}S.toneMapping=y,S.autoClear=g,e.background=b}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===_s||e.mapping===oa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;ia(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,io)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const h=u.uniforms,m=r/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),S=Math.sqrt(m*m-x*x),g=0+m*1.25,y=S*g,{_lodMax:w}=this,R=this._sizeLods[r],v=3*R*(r>w-Hr?r-w+Hr:0),_=4*(this._cubeSize-R);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=w-t,ia(l,v,_,3*R,2*R),o.setRenderTarget(l),o.render(d,io),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=w-r,ia(e,v,_,3*R,2*R),o.setRenderTarget(e),o.render(d,io)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[o];S.material=m;const g=m.uniforms,y=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*hs-1),R=l/w,v=isFinite(l)?1+Math.floor(x*R):hs;v>hs&&at(`sigmaRadians, ${l}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${hs}`);const _=[];let b=0;for(let O=0;O<hs;++O){const E=O/R,U=Math.exp(-E*E/2);_.push(U),O===0?b+=U:O<v&&(b+=2*U)}for(let O=0;O<_.length;O++)_[O]=_[O]/b;g.envMap.value=e.texture,g.samples.value=v,g.weights.value=_,g.latitudinal.value=u==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:N}=this;g.dTheta.value=w,g.mipInt.value=N-r;const L=this._sizeLods[o],B=3*L*(o>N-Hr?o-N+Hr:0),D=4*(this._cubeSize-L);ia(t,B,D,3*L,2*L),h.setRenderTarget(t),h.render(S,io)}}function zM(s){const e=[],t=[],r=[];let o=s;const l=s-Hr+1+og.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);e.push(d);let h=1/d;u>s-Hr?h=og[u-s+Hr-1]:u===0&&(h=0),t.push(h);const m=1/(d-2),x=-m,S=1+m,g=[x,x,S,x,S,S,x,x,S,S,x,S],y=6,w=6,R=3,v=2,_=1,b=new Float32Array(R*w*y),N=new Float32Array(v*w*y),L=new Float32Array(_*w*y);for(let D=0;D<y;D++){const O=D%3*2/3-1,E=D>2?0:-1,U=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];b.set(U,R*w*D),N.set(g,v*w*D);const X=[D,D,D,D,D,D];L.set(X,_*w*D)}const B=new qn;B.setAttribute("position",new Ai(b,R)),B.setAttribute("uv",new Ai(N,v)),B.setAttribute("faceIndex",new Ai(L,_)),r.push(new ji(B,null)),o>Hr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function ug(s,e,t){const r=new Hi(s,e,t);return r.texture.mapping=dc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ia(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function VM(s,e,t){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function GM(s,e,t){const r=new Float32Array(hs),o=new Q(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:pc(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function fg(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function dg(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function pc(){return`

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
	`}class h0 extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new s0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new _o(5,5,5),l=new Xi({name:"CubemapFromEquirect",uniforms:ca(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:fr});l.uniforms.tEquirect.value=t;const u=new ji(o,l),d=t.minFilter;return t.minFilter===ms&&(t.minFilter=Rn),new Yv(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function HM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,y=!1){return g==null?null:y?u(g):l(g)}function l(g){if(g&&g.isTexture){const y=g.mapping;if(y===Qu||y===Ju)if(e.has(g)){const w=e.get(g).texture;return d(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const R=new h0(w.height);return R.fromEquirectangularTexture(s,g),e.set(g,R),g.addEventListener("dispose",m),d(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const y=g.mapping,w=y===Qu||y===Ju,R=y===_s||y===oa;if(w||R){let v=t.get(g);const _=v!==void 0?v.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new cg(s)),v=w?r.fromEquirectangular(g,v):r.fromCubemap(g,v),v.texture.pmremVersion=g.pmremVersion,t.set(g,v),v.texture;if(v!==void 0)return v.texture;{const b=g.image;return w&&b&&b.height>0||R&&b&&h(b)?(r===null&&(r=new cg(s)),v=w?r.fromEquirectangular(g):r.fromCubemap(g),v.texture.pmremVersion=g.pmremVersion,t.set(g,v),g.addEventListener("dispose",x),v.texture):null}}}return g}function d(g,y){return y===Qu?g.mapping=_s:y===Ju&&(g.mapping=oa),g}function h(g){let y=0;const w=6;for(let R=0;R<w;R++)g[R]!==void 0&&y++;return y===w}function m(g){const y=g.target;y.removeEventListener("dispose",m);const w=e.get(y);w!==void 0&&(e.delete(y),w.dispose())}function x(g){const y=g.target;y.removeEventListener("dispose",x);const w=t.get(y);w!==void 0&&(t.delete(y),w.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function WM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ad("WebGLRenderer: "+r+" extension not supported."),o}}}function jM(s,e,t,r){const o={},l=new WeakMap;function u(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",u),delete o[g.id];const y=l.get(g);y&&(e.remove(y),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function d(S,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function h(S){const g=S.attributes;for(const y in g)e.update(g[y],s.ARRAY_BUFFER)}function m(S){const g=[],y=S.index,w=S.attributes.position;let R=0;if(w===void 0)return;if(y!==null){const b=y.array;R=y.version;for(let N=0,L=b.length;N<L;N+=3){const B=b[N+0],D=b[N+1],O=b[N+2];g.push(B,D,D,O,O,B)}}else{const b=w.array;R=w.version;for(let N=0,L=b.length/3-1;N<L;N+=3){const B=N+0,D=N+1,O=N+2;g.push(B,D,D,O,O,B)}}const v=new(w.count>=65535?t0:e0)(g,1);v.version=R;const _=l.get(S);_&&e.remove(_),l.set(S,v)}function x(S){const g=l.get(S);if(g){const y=S.index;y!==null&&g.version<y.version&&m(S)}else m(S);return l.get(S)}return{get:d,update:h,getWireframeAttribute:x}}function XM(s,e,t){let r;function o(S){r=S}let l,u;function d(S){l=S.type,u=S.bytesPerElement}function h(S,g){s.drawElements(r,g,l,S*u),t.update(g,r,1)}function m(S,g,y){y!==0&&(s.drawElementsInstanced(r,g,l,S*u,y),t.update(g,r,y))}function x(S,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,S,0,y);let R=0;for(let v=0;v<y;v++)R+=g[v];t.update(R,r,1)}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=x}function qM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:Ct("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function YM(s,e,t){const r=new WeakMap,o=new en;function l(u,d,h){const m=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=x!==void 0?x.length:0;let g=r.get(d);if(g===void 0||g.count!==S){let X=function(){E.dispose(),r.delete(d),d.removeEventListener("dispose",X)};var y=X;g!==void 0&&g.texture.dispose();const w=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let L=0;w===!0&&(L=1),R===!0&&(L=2),v===!0&&(L=3);let B=d.attributes.position.count*L,D=1;B>e.maxTextureSize&&(D=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const O=new Float32Array(B*D*4*S),E=new Zg(O,B,D,S);E.type=Bi,E.needsUpdate=!0;const U=L*4;for(let I=0;I<S;I++){const G=_[I],se=b[I],oe=N[I],H=B*D*4*I;for(let Z=0;Z<G.count;Z++){const q=Z*U;w===!0&&(o.fromBufferAttribute(G,Z),O[H+q+0]=o.x,O[H+q+1]=o.y,O[H+q+2]=o.z,O[H+q+3]=0),R===!0&&(o.fromBufferAttribute(se,Z),O[H+q+4]=o.x,O[H+q+5]=o.y,O[H+q+6]=o.z,O[H+q+7]=0),v===!0&&(o.fromBufferAttribute(oe,Z),O[H+q+8]=o.x,O[H+q+9]=o.y,O[H+q+10]=o.z,O[H+q+11]=oe.itemSize===4?o.w:1)}}g={count:S,texture:E,size:new Pt(B,D)},r.set(d,g),d.addEventListener("dispose",X)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let v=0;v<m.length;v++)w+=m[v];const R=d.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",R),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function $M(s,e,t,r,o){let l=new WeakMap;function u(m){const x=o.render.frame,S=m.geometry,g=e.get(m,S);if(l.get(g)!==x&&(e.update(g),l.set(g,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==x&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,x))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==x&&(y.update(),l.set(y,x))}return g}function d(){l=new WeakMap}function h(m){const x=m.target;x.removeEventListener("dispose",h),r.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:u,dispose:d}}const KM={[Ug]:"LINEAR_TONE_MAPPING",[Fg]:"REINHARD_TONE_MAPPING",[Og]:"CINEON_TONE_MAPPING",[kg]:"ACES_FILMIC_TONE_MAPPING",[zg]:"AGX_TONE_MAPPING",[Vg]:"NEUTRAL_TONE_MAPPING",[Bg]:"CUSTOM_TONE_MAPPING"};function ZM(s,e,t,r,o){const l=new Hi(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new la(e,t):void 0}),u=new Hi(e,t,{type:hr,depthBuffer:!1,stencilBuffer:!1}),d=new qn;d.setAttribute("position",new ni([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ni([0,2,0,0,2,0],2));const h=new Vv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new ji(d,h),x=new u0(-1,1,1,-1,0,1);let S=null,g=null,y=!1,w,R=null,v=[],_=!1;this.setSize=function(b,N){l.setSize(b,N),u.setSize(b,N);for(let L=0;L<v.length;L++){const B=v[L];B.setSize&&B.setSize(b,N)}},this.setEffects=function(b){v=b,_=v.length>0&&v[0].isRenderPass===!0;const N=l.width,L=l.height;for(let B=0;B<v.length;B++){const D=v[B];D.setSize&&D.setSize(N,L)}},this.begin=function(b,N){if(y||b.toneMapping===Gi&&v.length===0)return!1;if(R=N,N!==null){const L=N.width,B=N.height;(l.width!==L||l.height!==B)&&this.setSize(L,B)}return _===!1&&b.setRenderTarget(l),w=b.toneMapping,b.toneMapping=Gi,!0},this.hasRenderPass=function(){return _},this.end=function(b,N){b.toneMapping=w,y=!0;let L=l,B=u;for(let D=0;D<v.length;D++){const O=v[D];if(O.enabled!==!1&&(O.render(b,B,L,N),O.needsSwap!==!1)){const E=L;L=B,B=E}}if(S!==b.outputColorSpace||g!==b.toneMapping){S=b.outputColorSpace,g=b.toneMapping,h.defines={},Tt.getTransfer(S)===kt&&(h.defines.SRGB_TRANSFER="");const D=KM[g];D&&(h.defines[D]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,b.setRenderTarget(R),b.render(m,x),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),d.dispose(),h.dispose()}}const p0=new Un,Rd=new la(1,1),m0=new Zg,g0=new hv,_0=new s0,hg=[],pg=[],mg=new Float32Array(16),gg=new Float32Array(9),_g=new Float32Array(4);function ha(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=hg[o];if(l===void 0&&(l=new Float32Array(o),hg[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function fn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function dn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function mc(s,e){let t=pg[e];t===void 0&&(t=new Int32Array(e),pg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function QM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function JM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2fv(this.addr,e),dn(t,e)}}function e1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;s.uniform3fv(this.addr,e),dn(t,e)}}function t1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4fv(this.addr,e),dn(t,e)}}function n1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,r))return;_g.set(r),s.uniformMatrix2fv(this.addr,!1,_g),dn(t,r)}}function i1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,r))return;gg.set(r),s.uniformMatrix3fv(this.addr,!1,gg),dn(t,r)}}function r1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,r))return;mg.set(r),s.uniformMatrix4fv(this.addr,!1,mg),dn(t,r)}}function s1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function a1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2iv(this.addr,e),dn(t,e)}}function o1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;s.uniform3iv(this.addr,e),dn(t,e)}}function l1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4iv(this.addr,e),dn(t,e)}}function c1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function u1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2uiv(this.addr,e),dn(t,e)}}function f1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;s.uniform3uiv(this.addr,e),dn(t,e)}}function d1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4uiv(this.addr,e),dn(t,e)}}function h1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Rd.compareFunction=t.isReversedDepthBuffer()?zd:Bd,l=Rd):l=p0,t.setTexture2D(e||l,o)}function p1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||g0,o)}function m1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||_0,o)}function g1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||m0,o)}function _1(s){switch(s){case 5126:return QM;case 35664:return JM;case 35665:return e1;case 35666:return t1;case 35674:return n1;case 35675:return i1;case 35676:return r1;case 5124:case 35670:return s1;case 35667:case 35671:return a1;case 35668:case 35672:return o1;case 35669:case 35673:return l1;case 5125:return c1;case 36294:return u1;case 36295:return f1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return h1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return g1}}function x1(s,e){s.uniform1fv(this.addr,e)}function v1(s,e){const t=ha(e,this.size,2);s.uniform2fv(this.addr,t)}function S1(s,e){const t=ha(e,this.size,3);s.uniform3fv(this.addr,t)}function y1(s,e){const t=ha(e,this.size,4);s.uniform4fv(this.addr,t)}function M1(s,e){const t=ha(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function E1(s,e){const t=ha(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function T1(s,e){const t=ha(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function w1(s,e){s.uniform1iv(this.addr,e)}function A1(s,e){s.uniform2iv(this.addr,e)}function b1(s,e){s.uniform3iv(this.addr,e)}function C1(s,e){s.uniform4iv(this.addr,e)}function R1(s,e){s.uniform1uiv(this.addr,e)}function P1(s,e){s.uniform2uiv(this.addr,e)}function N1(s,e){s.uniform3uiv(this.addr,e)}function L1(s,e){s.uniform4uiv(this.addr,e)}function D1(s,e,t){const r=this.cache,o=e.length,l=mc(t,o);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Rd:u=p0;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,l[d])}function I1(s,e,t){const r=this.cache,o=e.length,l=mc(t,o);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||g0,l[u])}function U1(s,e,t){const r=this.cache,o=e.length,l=mc(t,o);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||_0,l[u])}function F1(s,e,t){const r=this.cache,o=e.length,l=mc(t,o);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||m0,l[u])}function O1(s){switch(s){case 5126:return x1;case 35664:return v1;case 35665:return S1;case 35666:return y1;case 35674:return M1;case 35675:return E1;case 35676:return T1;case 5124:case 35670:return w1;case 35667:case 35671:return A1;case 35668:case 35672:return b1;case 35669:case 35673:return C1;case 5125:return R1;case 36294:return P1;case 36295:return N1;case 36296:return L1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return F1}}class k1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=_1(t.type)}}class B1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O1(t.type)}}class z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const Lf=/(\w+)(\])?(\[|\.)?/g;function xg(s,e){s.seq.push(e),s.map[e.id]=e}function V1(s,e,t){const r=s.name,o=r.length;for(Lf.lastIndex=0;;){const l=Lf.exec(r),u=Lf.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&u+2===o){xg(t,m===void 0?new k1(d,s,e):new B1(d,s,e));break}else{let S=t.map[d];S===void 0&&(S=new z1(d),xg(t,S)),t=S}}}class Jl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),h=e.getUniformLocation(t,d.name);V1(d,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function vg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const G1=37297;let H1=0;function W1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const Sg=new pt;function j1(s){Tt._getMatrix(Sg,Tt.workingColorSpace,s);const e=`mat3( ${Sg.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(s)){case ic:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function yg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+W1(s.getShaderSource(e),d)}else return l}function X1(s,e){const t=j1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const q1={[Ug]:"Linear",[Fg]:"Reinhard",[Og]:"Cineon",[kg]:"ACESFilmic",[zg]:"AgX",[Vg]:"Neutral",[Bg]:"Custom"};function Y1(s,e){const t=q1[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jl=new Q;function $1(){Tt.getLuminanceCoefficients(jl);const s=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function Z1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Q1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function lo(s){return s!==""}function Mg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pd(s){return s.replace(J1,tE)}const eE=new Map;function tE(s,e){let t=gt[e];if(t===void 0){const r=eE.get(e);if(r!==void 0)t=gt[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Pd(t)}const nE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tg(s){return s.replace(nE,iE)}function iE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function wg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const rE={[Yl]:"SHADOWMAP_TYPE_PCF",[ao]:"SHADOWMAP_TYPE_VSM"};function sE(s){return rE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aE={[_s]:"ENVMAP_TYPE_CUBE",[oa]:"ENVMAP_TYPE_CUBE",[dc]:"ENVMAP_TYPE_CUBE_UV"};function oE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":aE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const lE={[oa]:"ENVMAP_MODE_REFRACTION"};function cE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":lE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uE={[Ig]:"ENVMAP_BLENDING_MULTIPLY",[Xx]:"ENVMAP_BLENDING_MIX",[qx]:"ENVMAP_BLENDING_ADD"};function fE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":uE[s.combine]||"ENVMAP_BLENDING_NONE"}function dE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function hE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const h=sE(t),m=oE(t),x=cE(t),S=fE(t),g=dE(t),y=K1(t),w=Z1(l),R=o.createProgram();let v,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(lo).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(lo).join(`
`),_.length>0&&(_+=`
`)):(v=[wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),_=[wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",t.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?gt.tonemapping_pars_fragment:"",t.toneMapping!==Gi?Y1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,X1("linearToOutputTexel",t.outputColorSpace),$1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),u=Pd(u),u=Mg(u,t),u=Eg(u,t),d=Pd(d),d=Mg(d,t),d=Eg(d,t),u=Tg(u),d=Tg(d),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",t.glslVersion===Lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=b+v+u,L=b+_+d,B=vg(o,o.VERTEX_SHADER,N),D=vg(o,o.FRAGMENT_SHADER,L);o.attachShader(R,B),o.attachShader(R,D),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function O(I){if(s.debug.checkShaderErrors){const G=o.getProgramInfoLog(R)||"",se=o.getShaderInfoLog(B)||"",oe=o.getShaderInfoLog(D)||"",H=G.trim(),Z=se.trim(),q=oe.trim();let K=!0,ce=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,R,B,D);else{const ue=yg(o,B,"vertex"),k=yg(o,D,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+ue+`
`+k)}else H!==""?at("WebGLProgram: Program Info Log:",H):(Z===""||q==="")&&(ce=!1);ce&&(I.diagnostics={runnable:K,programLog:H,vertexShader:{log:Z,prefix:v},fragmentShader:{log:q,prefix:_}})}o.deleteShader(B),o.deleteShader(D),E=new Jl(o,R),U=Q1(o,R)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let U;this.getAttributes=function(){return U===void 0&&O(this),U};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(R,G1)),X},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=H1++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=D,this}let pE=0;class mE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new gE(e),t.set(e,r)),r}}class gE{constructor(e){this.id=pE++,this.code=e,this.usedTimes=0}}function _E(s){return s===xs||s===ec||s===tc}function xE(s,e,t,r,o,l){const u=new Qg,d=new mE,h=new Set,m=[],x=new Map,S=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return h.add(E),E===0?"uv":`uv${E}`}function R(E,U,X,I,G,se){const oe=I.fog,H=G.geometry,Z=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?I.environment:null,q=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,K=e.get(E.envMap||Z,q),ce=K&&K.mapping===dc?K.image.height:null,ue=y[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&at("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const k=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ee=k!==void 0?k.length:0;let De=0;H.morphAttributes.position!==void 0&&(De=1),H.morphAttributes.normal!==void 0&&(De=2),H.morphAttributes.color!==void 0&&(De=3);let ze,Le,re,ve;if(ue){const ct=ki[ue];ze=ct.vertexShader,Le=ct.fragmentShader}else ze=E.vertexShader,Le=E.fragmentShader,d.update(E),re=d.getVertexShaderID(E),ve=d.getFragmentShaderID(E);const me=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),$e=G.isInstancedMesh===!0,et=G.isBatchedMesh===!0,Bt=!!E.map,Je=!!E.matcap,Mt=!!K,Lt=!!E.aoMap,mt=!!E.lightMap,Ht=!!E.bumpMap,It=!!E.normalMap,ln=!!E.displacementMap,W=!!E.emissiveMap,zt=!!E.metalnessMap,Be=!!E.roughnessMap,tt=E.anisotropy>0,Ee=E.clearcoat>0,yt=E.dispersion>0,P=E.iridescence>0,M=E.sheen>0,$=E.transmission>0,he=tt&&!!E.anisotropyMap,ge=Ee&&!!E.clearcoatMap,Me=Ee&&!!E.clearcoatNormalMap,Pe=Ee&&!!E.clearcoatRoughnessMap,fe=P&&!!E.iridescenceMap,pe=P&&!!E.iridescenceThicknessMap,Ue=M&&!!E.sheenColorMap,ke=M&&!!E.sheenRoughnessMap,Ae=!!E.specularMap,we=!!E.specularColorMap,rt=!!E.specularIntensityMap,lt=$&&!!E.transmissionMap,st=$&&!!E.thicknessMap,z=!!E.gradientMap,Te=!!E.alphaMap,de=E.alphaTest>0,Oe=!!E.alphaHash,be=!!E.extensions;let _e=Gi;E.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(_e=s.toneMapping);const je={shaderID:ue,shaderType:E.type,shaderName:E.name,vertexShader:ze,fragmentShader:Le,defines:E.defines,customVertexShaderID:re,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:et,batchingColor:et&&G._colorsTexture!==null,instancing:$e,instancingColor:$e&&G.instanceColor!==null,instancingMorph:$e&&G.morphTexture!==null,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Bt,matcap:Je,envMap:Mt,envMapMode:Mt&&K.mapping,envMapCubeUVHeight:ce,aoMap:Lt,lightMap:mt,bumpMap:Ht,normalMap:It,displacementMap:ln,emissiveMap:W,normalMapObjectSpace:It&&E.normalMapType===Kx,normalMapTangentSpace:It&&E.normalMapType===wd,packedNormalMap:It&&E.normalMapType===wd&&_E(E.normalMap.format),metalnessMap:zt,roughnessMap:Be,anisotropy:tt,anisotropyMap:he,clearcoat:Ee,clearcoatMap:ge,clearcoatNormalMap:Me,clearcoatRoughnessMap:Pe,dispersion:yt,iridescence:P,iridescenceMap:fe,iridescenceThicknessMap:pe,sheen:M,sheenColorMap:Ue,sheenRoughnessMap:ke,specularMap:Ae,specularColorMap:we,specularIntensityMap:rt,transmission:$,transmissionMap:lt,thicknessMap:st,gradientMap:z,opaque:E.transparent===!1&&E.blending===ra&&E.alphaToCoverage===!1,alphaMap:Te,alphaTest:de,alphaHash:Oe,combine:E.combine,mapUv:Bt&&w(E.map.channel),aoMapUv:Lt&&w(E.aoMap.channel),lightMapUv:mt&&w(E.lightMap.channel),bumpMapUv:Ht&&w(E.bumpMap.channel),normalMapUv:It&&w(E.normalMap.channel),displacementMapUv:ln&&w(E.displacementMap.channel),emissiveMapUv:W&&w(E.emissiveMap.channel),metalnessMapUv:zt&&w(E.metalnessMap.channel),roughnessMapUv:Be&&w(E.roughnessMap.channel),anisotropyMapUv:he&&w(E.anisotropyMap.channel),clearcoatMapUv:ge&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:Me&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:ke&&w(E.sheenRoughnessMap.channel),specularMapUv:Ae&&w(E.specularMap.channel),specularColorMapUv:we&&w(E.specularColorMap.channel),specularIntensityMapUv:rt&&w(E.specularIntensityMap.channel),transmissionMapUv:lt&&w(E.transmissionMap.channel),thicknessMapUv:st&&w(E.thicknessMap.channel),alphaMapUv:Te&&w(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(It||tt),vertexNormals:!!H.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!H.attributes.uv&&(Bt||Te),fog:!!oe,useFog:E.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||H.attributes.normal===void 0&&It===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ie,skinning:G.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:De,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:Bt&&E.map.isVideoTexture===!0&&Tt.getTransfer(E.map.colorSpace)===kt,decodeVideoTextureEmissive:W&&E.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(E.emissiveMap.colorSpace)===kt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===cr,flipSided:E.side===Xn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:be&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&E.extensions.multiDraw===!0||et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return je.vertexUv1s=h.has(1),je.vertexUv2s=h.has(2),je.vertexUv3s=h.has(3),h.clear(),je}function v(E){const U=[];if(E.shaderID?U.push(E.shaderID):(U.push(E.customVertexShaderID),U.push(E.customFragmentShaderID)),E.defines!==void 0)for(const X in E.defines)U.push(X),U.push(E.defines[X]);return E.isRawShaderMaterial===!1&&(_(U,E),b(U,E),U.push(s.outputColorSpace)),U.push(E.customProgramCacheKey),U.join()}function _(E,U){E.push(U.precision),E.push(U.outputColorSpace),E.push(U.envMapMode),E.push(U.envMapCubeUVHeight),E.push(U.mapUv),E.push(U.alphaMapUv),E.push(U.lightMapUv),E.push(U.aoMapUv),E.push(U.bumpMapUv),E.push(U.normalMapUv),E.push(U.displacementMapUv),E.push(U.emissiveMapUv),E.push(U.metalnessMapUv),E.push(U.roughnessMapUv),E.push(U.anisotropyMapUv),E.push(U.clearcoatMapUv),E.push(U.clearcoatNormalMapUv),E.push(U.clearcoatRoughnessMapUv),E.push(U.iridescenceMapUv),E.push(U.iridescenceThicknessMapUv),E.push(U.sheenColorMapUv),E.push(U.sheenRoughnessMapUv),E.push(U.specularMapUv),E.push(U.specularColorMapUv),E.push(U.specularIntensityMapUv),E.push(U.transmissionMapUv),E.push(U.thicknessMapUv),E.push(U.combine),E.push(U.fogExp2),E.push(U.sizeAttenuation),E.push(U.morphTargetsCount),E.push(U.morphAttributeCount),E.push(U.numDirLights),E.push(U.numPointLights),E.push(U.numSpotLights),E.push(U.numSpotLightMaps),E.push(U.numHemiLights),E.push(U.numRectAreaLights),E.push(U.numDirLightShadows),E.push(U.numPointLightShadows),E.push(U.numSpotLightShadows),E.push(U.numSpotLightShadowsWithMaps),E.push(U.numLightProbes),E.push(U.shadowMapType),E.push(U.toneMapping),E.push(U.numClippingPlanes),E.push(U.numClipIntersection),E.push(U.depthPacking)}function b(E,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),E.push(u.mask)}function N(E){const U=y[E.type];let X;if(U){const I=ki[U];X=kv.clone(I.uniforms)}else X=E.uniforms;return X}function L(E,U){let X=x.get(U);return X!==void 0?++X.usedTimes:(X=new hE(s,U,E,o),m.push(X),x.set(U,X)),X}function B(E){if(--E.usedTimes===0){const U=m.indexOf(E);m[U]=m[m.length-1],m.pop(),x.delete(E.cacheKey),E.destroy()}}function D(E){d.remove(E)}function O(){d.dispose()}return{getParameters:R,getProgramCacheKey:v,getUniforms:N,acquireProgram:L,releaseProgram:B,releaseShaderCache:D,programs:m,dispose:O}}function vE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,h){s.get(u)[d]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function SE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Ag(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function bg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,w,R,v,_){let b=s[e];return b===void 0?(b={id:g.id,object:g,geometry:y,material:w,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:v,group:_},s[e]=b):(b.id=g.id,b.object=g,b.geometry=y,b.material=w,b.materialVariant=u(g),b.groupOrder=R,b.renderOrder=g.renderOrder,b.z=v,b.group=_),e++,b}function h(g,y,w,R,v,_){const b=d(g,y,w,R,v,_);w.transmission>0?r.push(b):w.transparent===!0?o.push(b):t.push(b)}function m(g,y,w,R,v,_){const b=d(g,y,w,R,v,_);w.transmission>0?r.unshift(b):w.transparent===!0?o.unshift(b):t.unshift(b)}function x(g,y){t.length>1&&t.sort(g||SE),r.length>1&&r.sort(y||Ag),o.length>1&&o.sort(y||Ag)}function S(){for(let g=e,y=s.length;g<y;g++){const w=s[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:m,finish:S,sort:x}}function yE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new bg,s.set(r,[u])):o>=l.length?(u=new bg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function ME(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new Rt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=t,t}}}function EE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let TE=0;function wE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function AE(s){const e=new ME,t=EE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const o=new Q,l=new $t,u=new $t;function d(m){let x=0,S=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let y=0,w=0,R=0,v=0,_=0,b=0,N=0,L=0,B=0,D=0,O=0;m.sort(wE);for(let U=0,X=m.length;U<X;U++){const I=m[U],G=I.color,se=I.intensity,oe=I.distance;let H=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===xs?H=I.shadow.map.texture:H=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)x+=G.r*se,S+=G.g*se,g+=G.b*se;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(I.sh.coefficients[Z],se);O++}else if(I.isDirectionalLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const q=I.shadow,K=t.get(I);K.shadowIntensity=q.intensity,K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,r.directionalShadow[y]=K,r.directionalShadowMap[y]=H,r.directionalShadowMatrix[y]=I.shadow.matrix,b++}r.directional[y]=Z,y++}else if(I.isSpotLight){const Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(G).multiplyScalar(se),Z.distance=oe,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,r.spot[R]=Z;const q=I.shadow;if(I.map&&(r.spotLightMap[B]=I.map,B++,q.updateMatrices(I),I.castShadow&&D++),r.spotLightMatrix[R]=q.matrix,I.castShadow){const K=t.get(I);K.shadowIntensity=q.intensity,K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,r.spotShadow[R]=K,r.spotShadowMap[R]=H,L++}R++}else if(I.isRectAreaLight){const Z=e.get(I);Z.color.copy(G).multiplyScalar(se),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),r.rectArea[v]=Z,v++}else if(I.isPointLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const q=I.shadow,K=t.get(I);K.shadowIntensity=q.intensity,K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,K.shadowCameraNear=q.camera.near,K.shadowCameraFar=q.camera.far,r.pointShadow[w]=K,r.pointShadowMap[w]=H,r.pointShadowMatrix[w]=I.shadow.matrix,N++}r.point[w]=Z,w++}else if(I.isHemisphereLight){const Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(se),Z.groundColor.copy(I.groundColor).multiplyScalar(se),r.hemi[_]=Z,_++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=S,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==y||E.pointLength!==w||E.spotLength!==R||E.rectAreaLength!==v||E.hemiLength!==_||E.numDirectionalShadows!==b||E.numPointShadows!==N||E.numSpotShadows!==L||E.numSpotMaps!==B||E.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=v,r.point.length=w,r.hemi.length=_,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=L+B-D,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=O,E.directionalLength=y,E.pointLength=w,E.spotLength=R,E.rectAreaLength=v,E.hemiLength=_,E.numDirectionalShadows=b,E.numPointShadows=N,E.numSpotShadows=L,E.numSpotMaps=B,E.numLightProbes=O,r.version=TE++)}function h(m,x){let S=0,g=0,y=0,w=0,R=0;const v=x.matrixWorldInverse;for(let _=0,b=m.length;_<b;_++){const N=m[_];if(N.isDirectionalLight){const L=r.directional[S];L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(v),S++}else if(N.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(v),L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(v),y++}else if(N.isRectAreaLight){const L=r.rectArea[w];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(v),u.identity(),l.copy(N.matrixWorld),l.premultiply(v),u.extractRotation(l),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),w++}else if(N.isPointLight){const L=r.point[g];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(v),g++}else if(N.isHemisphereLight){const L=r.hemi[R];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(v),R++}}}return{setup:d,setupView:h,state:r}}function Cg(s){const e=new AE(s),t=[],r=[],o=[];function l(g){S.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function d(g){r.push(g)}function h(g){o.push(g)}function m(){e.setup(t)}function x(g){e.setupView(t,g)}const S={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:m,setupLightsView:x,pushLight:u,pushShadow:d,pushLightProbeGrid:h}}function bE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new Cg(s),e.set(o,[d])):l>=u.length?(d=new Cg(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const CE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RE=`uniform sampler2D shadow_pass;
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
}`,PE=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],NE=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Rg=new $t,ro=new Q,Df=new Q;function LE(s,e,t){let r=new Hd;const o=new Pt,l=new Pt,u=new en,d=new Hv,h=new Wv,m={},x=t.maxTextureSize,S={[jr]:Xn,[Xn]:jr,[cr]:cr},g=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:CE,fragmentShader:RE}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const w=new qn;w.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ji(w,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let _=this.type;this.render=function(D,O,E){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||D.length===0)return;this.type===bx&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yl);const U=s.getRenderTarget(),X=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),G=s.state;G.setBlending(fr),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const se=_!==this.type;se&&O.traverse(function(oe){oe.material&&(Array.isArray(oe.material)?oe.material.forEach(H=>H.needsUpdate=!0):oe.material.needsUpdate=!0)});for(let oe=0,H=D.length;oe<H;oe++){const Z=D[oe],q=Z.shadow;if(q===void 0){at("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const K=q.getFrameExtents();o.multiply(K),l.copy(q.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/K.x),o.x=l.x*K.x,q.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/K.y),o.y=l.y*K.y,q.mapSize.y=l.y));const ce=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=ce,q.map===null||se===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ao){if(Z.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Hi(o.x,o.y,{format:xs,type:hr,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new la(o.x,o.y,Bi),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=pr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Mn,q.map.depthTexture.magFilter=Mn}else Z.isPointLight?(q.map=new h0(o.x),q.map.depthTexture=new Iv(o.x,Wi)):(q.map=new Hi(o.x,o.y),q.map.depthTexture=new la(o.x,o.y,Wi)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=pr,this.type===Yl?(q.map.depthTexture.compareFunction=ce?zd:Bd,q.map.depthTexture.minFilter=Rn,q.map.depthTexture.magFilter=Rn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Mn,q.map.depthTexture.magFilter=Mn);q.camera.updateProjectionMatrix()}const ue=q.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<ue;k++){if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,k),s.clear();else{k===0&&(s.setRenderTarget(q.map),s.clear());const ee=q.getViewport(k);u.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),G.viewport(u)}if(Z.isPointLight){const ee=q.camera,De=q.matrix,ze=Z.distance||ee.far;ze!==ee.far&&(ee.far=ze,ee.updateProjectionMatrix()),ro.setFromMatrixPosition(Z.matrixWorld),ee.position.copy(ro),Df.copy(ee.position),Df.add(PE[k]),ee.up.copy(NE[k]),ee.lookAt(Df),ee.updateMatrixWorld(),De.makeTranslation(-ro.x,-ro.y,-ro.z),Rg.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Rg,ee.coordinateSystem,ee.reversedDepth)}else q.updateMatrices(Z);r=q.getFrustum(),L(O,E,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===ao&&b(q,E),q.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget(U,X,I)};function b(D,O){const E=e.update(R);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Hi(o.x,o.y,{format:xs,type:hr})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(O,null,E,g,R,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(O,null,E,y,R,null)}function N(D,O,E,U){let X=null;const I=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(I!==void 0)X=I;else if(X=E.isPointLight===!0?h:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const G=X.uuid,se=O.uuid;let oe=m[G];oe===void 0&&(oe={},m[G]=oe);let H=oe[se];H===void 0&&(H=X.clone(),oe[se]=H,O.addEventListener("dispose",B)),X=H}if(X.visible=O.visible,X.wireframe=O.wireframe,U===ao?X.side=O.shadowSide!==null?O.shadowSide:O.side:X.side=O.shadowSide!==null?O.shadowSide:S[O.side],X.alphaMap=O.alphaMap,X.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,X.map=O.map,X.clipShadows=O.clipShadows,X.clippingPlanes=O.clippingPlanes,X.clipIntersection=O.clipIntersection,X.displacementMap=O.displacementMap,X.displacementScale=O.displacementScale,X.displacementBias=O.displacementBias,X.wireframeLinewidth=O.wireframeLinewidth,X.linewidth=O.linewidth,E.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const G=s.properties.get(X);G.light=E}return X}function L(D,O,E,U,X){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&X===ao)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const se=e.update(D),oe=D.material;if(Array.isArray(oe)){const H=se.groups;for(let Z=0,q=H.length;Z<q;Z++){const K=H[Z],ce=oe[K.materialIndex];if(ce&&ce.visible){const ue=N(D,ce,U,X);D.onBeforeShadow(s,D,O,E,se,ue,K),s.renderBufferDirect(E,null,se,ue,D,K),D.onAfterShadow(s,D,O,E,se,ue,K)}}}else if(oe.visible){const H=N(D,oe,U,X);D.onBeforeShadow(s,D,O,E,se,H,null),s.renderBufferDirect(E,null,se,H,D,null),D.onAfterShadow(s,D,O,E,se,H,null)}}const G=D.children;for(let se=0,oe=G.length;se<oe;se++)L(G[se],O,E,U,X)}function B(D){D.target.removeEventListener("dispose",B);for(const E in m){const U=m[E],X=D.target.uuid;X in U&&(U[X].dispose(),delete U[X])}}}function DE(s,e){function t(){let z=!1;const Te=new en;let de=null;const Oe=new en(0,0,0,0);return{setMask:function(be){de!==be&&!z&&(s.colorMask(be,be,be,be),de=be)},setLocked:function(be){z=be},setClear:function(be,_e,je,ct,Ut){Ut===!0&&(be*=ct,_e*=ct,je*=ct),Te.set(be,_e,je,ct),Oe.equals(Te)===!1&&(s.clearColor(be,_e,je,ct),Oe.copy(Te))},reset:function(){z=!1,de=null,Oe.set(-1,0,0,0)}}}function r(){let z=!1,Te=!1,de=null,Oe=null,be=null;return{setReversed:function(_e){if(Te!==_e){const je=e.get("EXT_clip_control");_e?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Te=_e;const ct=be;be=null,this.setClear(ct)}},getReversed:function(){return Te},setTest:function(_e){_e?me(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(_e){de!==_e&&!z&&(s.depthMask(_e),de=_e)},setFunc:function(_e){if(Te&&(_e=av[_e]),Oe!==_e){switch(_e){case zf:s.depthFunc(s.NEVER);break;case Vf:s.depthFunc(s.ALWAYS);break;case Gf:s.depthFunc(s.LESS);break;case aa:s.depthFunc(s.LEQUAL);break;case Hf:s.depthFunc(s.EQUAL);break;case Wf:s.depthFunc(s.GEQUAL);break;case jf:s.depthFunc(s.GREATER);break;case Xf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Oe=_e}},setLocked:function(_e){z=_e},setClear:function(_e){be!==_e&&(be=_e,Te&&(_e=1-_e),s.clearDepth(_e))},reset:function(){z=!1,de=null,Oe=null,be=null,Te=!1}}}function o(){let z=!1,Te=null,de=null,Oe=null,be=null,_e=null,je=null,ct=null,Ut=null;return{setTest:function(wt){z||(wt?me(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(wt){Te!==wt&&!z&&(s.stencilMask(wt),Te=wt)},setFunc:function(wt,_n,Fn){(de!==wt||Oe!==_n||be!==Fn)&&(s.stencilFunc(wt,_n,Fn),de=wt,Oe=_n,be=Fn)},setOp:function(wt,_n,Fn){(_e!==wt||je!==_n||ct!==Fn)&&(s.stencilOp(wt,_n,Fn),_e=wt,je=_n,ct=Fn)},setLocked:function(wt){z=wt},setClear:function(wt){Ut!==wt&&(s.clearStencil(wt),Ut=wt)},reset:function(){z=!1,Te=null,de=null,Oe=null,be=null,_e=null,je=null,ct=null,Ut=null}}}const l=new t,u=new r,d=new o,h=new WeakMap,m=new WeakMap;let x={},S={},g={},y=new WeakMap,w=[],R=null,v=!1,_=null,b=null,N=null,L=null,B=null,D=null,O=null,E=new Rt(0,0,0),U=0,X=!1,I=null,G=null,se=null,oe=null,H=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const ce=s.getParameter(s.VERSION);ce.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ce)[1]),q=K>=1):ce.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),q=K>=2);let ue=null,k={};const ee=s.getParameter(s.SCISSOR_BOX),De=s.getParameter(s.VIEWPORT),ze=new en().fromArray(ee),Le=new en().fromArray(De);function re(z,Te,de,Oe){const be=new Uint8Array(4),_e=s.createTexture();s.bindTexture(z,_e),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<de;je++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Te+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return _e}const ve={};ve[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),me(s.DEPTH_TEST),u.setFunc(aa),Ht(!1),It(Am),me(s.CULL_FACE),Lt(fr);function me(z){x[z]!==!0&&(s.enable(z),x[z]=!0)}function Ie(z){x[z]!==!1&&(s.disable(z),x[z]=!1)}function $e(z,Te){return g[z]!==Te?(s.bindFramebuffer(z,Te),g[z]=Te,z===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Te),z===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function et(z,Te){let de=w,Oe=!1;if(z){de=y.get(Te),de===void 0&&(de=[],y.set(Te,de));const be=z.textures;if(de.length!==be.length||de[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,je=be.length;_e<je;_e++)de[_e]=s.COLOR_ATTACHMENT0+_e;de.length=be.length,Oe=!0}}else de[0]!==s.BACK&&(de[0]=s.BACK,Oe=!0);Oe&&s.drawBuffers(de)}function Bt(z){return R!==z?(s.useProgram(z),R=z,!0):!1}const Je={[ds]:s.FUNC_ADD,[Rx]:s.FUNC_SUBTRACT,[Px]:s.FUNC_REVERSE_SUBTRACT};Je[Nx]=s.MIN,Je[Lx]=s.MAX;const Mt={[Dx]:s.ZERO,[Ix]:s.ONE,[Ux]:s.SRC_COLOR,[kf]:s.SRC_ALPHA,[Vx]:s.SRC_ALPHA_SATURATE,[Bx]:s.DST_COLOR,[Ox]:s.DST_ALPHA,[Fx]:s.ONE_MINUS_SRC_COLOR,[Bf]:s.ONE_MINUS_SRC_ALPHA,[zx]:s.ONE_MINUS_DST_COLOR,[kx]:s.ONE_MINUS_DST_ALPHA,[Gx]:s.CONSTANT_COLOR,[Hx]:s.ONE_MINUS_CONSTANT_COLOR,[Wx]:s.CONSTANT_ALPHA,[jx]:s.ONE_MINUS_CONSTANT_ALPHA};function Lt(z,Te,de,Oe,be,_e,je,ct,Ut,wt){if(z===fr){v===!0&&(Ie(s.BLEND),v=!1);return}if(v===!1&&(me(s.BLEND),v=!0),z!==Cx){if(z!==_||wt!==X){if((b!==ds||B!==ds)&&(s.blendEquation(s.FUNC_ADD),b=ds,B=ds),wt)switch(z){case ra:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bm:s.blendFunc(s.ONE,s.ONE);break;case Cm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",z);break}else switch(z){case ra:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Cm:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rm:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",z);break}N=null,L=null,D=null,O=null,E.set(0,0,0),U=0,_=z,X=wt}return}be=be||Te,_e=_e||de,je=je||Oe,(Te!==b||be!==B)&&(s.blendEquationSeparate(Je[Te],Je[be]),b=Te,B=be),(de!==N||Oe!==L||_e!==D||je!==O)&&(s.blendFuncSeparate(Mt[de],Mt[Oe],Mt[_e],Mt[je]),N=de,L=Oe,D=_e,O=je),(ct.equals(E)===!1||Ut!==U)&&(s.blendColor(ct.r,ct.g,ct.b,Ut),E.copy(ct),U=Ut),_=z,X=!1}function mt(z,Te){z.side===cr?Ie(s.CULL_FACE):me(s.CULL_FACE);let de=z.side===Xn;Te&&(de=!de),Ht(de),z.blending===ra&&z.transparent===!1?Lt(fr):Lt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),l.setMask(z.colorWrite);const Oe=z.stencilWrite;d.setTest(Oe),Oe&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),W(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(z){I!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),I=z)}function It(z){z!==wx?(me(s.CULL_FACE),z!==G&&(z===Am?s.cullFace(s.BACK):z===Ax?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),G=z}function ln(z){z!==se&&(q&&s.lineWidth(z),se=z)}function W(z,Te,de){z?(me(s.POLYGON_OFFSET_FILL),(oe!==Te||H!==de)&&(oe=Te,H=de,u.getReversed()&&(Te=-Te),s.polygonOffset(Te,de))):Ie(s.POLYGON_OFFSET_FILL)}function zt(z){z?me(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function Be(z){z===void 0&&(z=s.TEXTURE0+Z-1),ue!==z&&(s.activeTexture(z),ue=z)}function tt(z,Te,de){de===void 0&&(ue===null?de=s.TEXTURE0+Z-1:de=ue);let Oe=k[de];Oe===void 0&&(Oe={type:void 0,texture:void 0},k[de]=Oe),(Oe.type!==z||Oe.texture!==Te)&&(ue!==de&&(s.activeTexture(de),ue=de),s.bindTexture(z,Te||ve[z]),Oe.type=z,Oe.texture=Te)}function Ee(){const z=k[ue];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function yt(){try{s.compressedTexImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function M(){try{s.texSubImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function $(){try{s.texSubImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function ge(){try{s.compressedTexSubImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function Me(){try{s.texStorage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function Pe(){try{s.texStorage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function fe(){try{s.texImage2D(...arguments)}catch(z){Ct("WebGLState:",z)}}function pe(){try{s.texImage3D(...arguments)}catch(z){Ct("WebGLState:",z)}}function Ue(z){return S[z]!==void 0?S[z]:s.getParameter(z)}function ke(z,Te){S[z]!==Te&&(s.pixelStorei(z,Te),S[z]=Te)}function Ae(z){ze.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),ze.copy(z))}function we(z){Le.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Le.copy(z))}function rt(z,Te){let de=m.get(Te);de===void 0&&(de=new WeakMap,m.set(Te,de));let Oe=de.get(z);Oe===void 0&&(Oe=s.getUniformBlockIndex(Te,z.name),de.set(z,Oe))}function lt(z,Te){const Oe=m.get(Te).get(z);h.get(Te)!==Oe&&(s.uniformBlockBinding(Te,Oe,z.__bindingPointIndex),h.set(Te,Oe))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},S={},ue=null,k={},g={},y=new WeakMap,w=[],R=null,v=!1,_=null,b=null,N=null,L=null,B=null,D=null,O=null,E=new Rt(0,0,0),U=0,X=!1,I=null,G=null,se=null,oe=null,H=null,ze.set(0,0,s.canvas.width,s.canvas.height),Le.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:me,disable:Ie,bindFramebuffer:$e,drawBuffers:et,useProgram:Bt,setBlending:Lt,setMaterial:mt,setFlipSided:Ht,setCullFace:It,setLineWidth:ln,setPolygonOffset:W,setScissorTest:zt,activeTexture:Be,bindTexture:tt,unbindTexture:Ee,compressedTexImage2D:yt,compressedTexImage3D:P,texImage2D:fe,texImage3D:pe,pixelStorei:ke,getParameter:Ue,updateUBOMapping:rt,uniformBlockBinding:lt,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:M,texSubImage3D:$,compressedTexSubImage2D:he,compressedTexSubImage3D:ge,scissor:Ae,viewport:we,reset:st}}function IE(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Pt,x=new WeakMap,S=new Set;let g;const y=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(P,M){return w?new OffscreenCanvas(P,M):rc("canvas")}function v(P,M,$){let he=1;const ge=yt(P);if((ge.width>$||ge.height>$)&&(he=$/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Me=Math.floor(he*ge.width),Pe=Math.floor(he*ge.height);g===void 0&&(g=R(Me,Pe));const fe=M?R(Me,Pe):g;return fe.width=Me,fe.height=Pe,fe.getContext("2d").drawImage(P,0,0,Me,Pe),at("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Me+"x"+Pe+")."),fe}else return"data"in P&&at("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function _(P){return P.generateMipmaps}function b(P){s.generateMipmap(P)}function N(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(P,M,$,he,ge,Me=!1){if(P!==null){if(s[P]!==void 0)return s[P];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Pe;he&&(Pe=e.get("EXT_texture_norm16"),Pe||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=M;if(M===s.RED&&($===s.FLOAT&&(fe=s.R32F),$===s.HALF_FLOAT&&(fe=s.R16F),$===s.UNSIGNED_BYTE&&(fe=s.R8),$===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.R16_EXT),$===s.SHORT&&Pe&&(fe=Pe.R16_SNORM_EXT)),M===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.R8UI),$===s.UNSIGNED_SHORT&&(fe=s.R16UI),$===s.UNSIGNED_INT&&(fe=s.R32UI),$===s.BYTE&&(fe=s.R8I),$===s.SHORT&&(fe=s.R16I),$===s.INT&&(fe=s.R32I)),M===s.RG&&($===s.FLOAT&&(fe=s.RG32F),$===s.HALF_FLOAT&&(fe=s.RG16F),$===s.UNSIGNED_BYTE&&(fe=s.RG8),$===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RG16_EXT),$===s.SHORT&&Pe&&(fe=Pe.RG16_SNORM_EXT)),M===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.RG8UI),$===s.UNSIGNED_SHORT&&(fe=s.RG16UI),$===s.UNSIGNED_INT&&(fe=s.RG32UI),$===s.BYTE&&(fe=s.RG8I),$===s.SHORT&&(fe=s.RG16I),$===s.INT&&(fe=s.RG32I)),M===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),$===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),$===s.UNSIGNED_INT&&(fe=s.RGB32UI),$===s.BYTE&&(fe=s.RGB8I),$===s.SHORT&&(fe=s.RGB16I),$===s.INT&&(fe=s.RGB32I)),M===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),$===s.UNSIGNED_INT&&(fe=s.RGBA32UI),$===s.BYTE&&(fe=s.RGBA8I),$===s.SHORT&&(fe=s.RGBA16I),$===s.INT&&(fe=s.RGBA32I)),M===s.RGB&&($===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGB16_EXT),$===s.SHORT&&Pe&&(fe=Pe.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),M===s.RGBA){const pe=Me?ic:Tt.getTransfer(ge);$===s.FLOAT&&(fe=s.RGBA32F),$===s.HALF_FLOAT&&(fe=s.RGBA16F),$===s.UNSIGNED_BYTE&&(fe=pe===kt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGBA16_EXT),$===s.SHORT&&Pe&&(fe=Pe.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function B(P,M){let $;return P?M===null||M===Wi||M===uo?$=s.DEPTH24_STENCIL8:M===Bi?$=s.DEPTH32F_STENCIL8:M===co&&($=s.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wi||M===uo?$=s.DEPTH_COMPONENT24:M===Bi?$=s.DEPTH_COMPONENT32F:M===co&&($=s.DEPTH_COMPONENT16),$}function D(P,M){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Mn&&P.minFilter!==Rn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function O(P){const M=P.target;M.removeEventListener("dispose",O),U(M),M.isVideoTexture&&x.delete(M),M.isHTMLTexture&&S.delete(M)}function E(P){const M=P.target;M.removeEventListener("dispose",E),I(M)}function U(P){const M=r.get(P);if(M.__webglInit===void 0)return;const $=P.source,he=y.get($);if(he){const ge=he[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&X(P),Object.keys(he).length===0&&y.delete($)}r.remove(P)}function X(P){const M=r.get(P);s.deleteTexture(M.__webglTexture);const $=P.source,he=y.get($);delete he[M.__cacheKey],u.memory.textures--}function I(P){const M=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(M.__webglFramebuffer[he]))for(let ge=0;ge<M.__webglFramebuffer[he].length;ge++)s.deleteFramebuffer(M.__webglFramebuffer[he][ge]);else s.deleteFramebuffer(M.__webglFramebuffer[he]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[he])}else{if(Array.isArray(M.__webglFramebuffer))for(let he=0;he<M.__webglFramebuffer.length;he++)s.deleteFramebuffer(M.__webglFramebuffer[he]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let he=0;he<M.__webglColorRenderbuffer.length;he++)M.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[he]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=P.textures;for(let he=0,ge=$.length;he<ge;he++){const Me=r.get($[he]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),u.memory.textures--),r.remove($[he])}r.remove(P)}let G=0;function se(){G=0}function oe(){return G}function H(P){G=P}function Z(){const P=G;return P>=o.maxTextures&&at("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),G+=1,P}function q(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function K(P,M){const $=r.get(P);if(P.isVideoTexture&&tt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){const he=P.image;if(he===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie($,P,M);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+M)}function ce(P,M){const $=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Ie($,P,M);return}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+M)}function ue(P,M){const $=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Ie($,P,M);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+M)}function k(P,M){const $=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&$.__version!==P.version){$e($,P,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+M)}const ee={[qf]:s.REPEAT,[ur]:s.CLAMP_TO_EDGE,[Yf]:s.MIRRORED_REPEAT},De={[Mn]:s.NEAREST,[Yx]:s.NEAREST_MIPMAP_NEAREST,[Sl]:s.NEAREST_MIPMAP_LINEAR,[Rn]:s.LINEAR,[ef]:s.LINEAR_MIPMAP_NEAREST,[ms]:s.LINEAR_MIPMAP_LINEAR},ze={[Zx]:s.NEVER,[nv]:s.ALWAYS,[Qx]:s.LESS,[Bd]:s.LEQUAL,[Jx]:s.EQUAL,[zd]:s.GEQUAL,[ev]:s.GREATER,[tv]:s.NOTEQUAL};function Le(P,M){if(M.type===Bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Rn||M.magFilter===ef||M.magFilter===Sl||M.magFilter===ms||M.minFilter===Rn||M.minFilter===ef||M.minFilter===Sl||M.minFilter===ms)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ee[M.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ee[M.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ee[M.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,De[M.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,De[M.minFilter]),M.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ze[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Mn||M.minFilter!==Sl&&M.minFilter!==ms||M.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function re(P,M){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",O));const he=M.source;let ge=y.get(he);ge===void 0&&(ge={},y.set(he,ge));const Me=q(M);if(Me!==P.__cacheKey){ge[Me]===void 0&&(ge[Me]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,$=!0),ge[Me].usedTimes++;const Pe=ge[P.__cacheKey];Pe!==void 0&&(ge[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&X(M)),P.__cacheKey=Me,P.__webglTexture=ge[Me].texture}return $}function ve(P,M,$){return Math.floor(Math.floor(P/$)/M)}function me(P,M,$,he){const Me=P.updateRanges;if(Me.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,$,he,M.data);else{Me.sort((ke,Ae)=>ke.start-Ae.start);let Pe=0;for(let ke=1;ke<Me.length;ke++){const Ae=Me[Pe],we=Me[ke],rt=Ae.start+Ae.count,lt=ve(we.start,M.width,4),st=ve(Ae.start,M.width,4);we.start<=rt+1&&lt===st&&ve(we.start+we.count-1,M.width,4)===lt?Ae.count=Math.max(Ae.count,we.start+we.count-Ae.start):(++Pe,Me[Pe]=we)}Me.length=Pe+1;const fe=t.getParameter(s.UNPACK_ROW_LENGTH),pe=t.getParameter(s.UNPACK_SKIP_PIXELS),Ue=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let ke=0,Ae=Me.length;ke<Ae;ke++){const we=Me[ke],rt=Math.floor(we.start/4),lt=Math.ceil(we.count/4),st=rt%M.width,z=Math.floor(rt/M.width),Te=lt,de=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,st),t.pixelStorei(s.UNPACK_SKIP_ROWS,z),t.texSubImage2D(s.TEXTURE_2D,0,st,z,Te,de,$,he,M.data)}P.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,fe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ue)}}function Ie(P,M,$){let he=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=s.TEXTURE_3D);const ge=re(P,M),Me=M.source;t.bindTexture(he,P.__webglTexture,s.TEXTURE0+$);const Pe=r.get(Me);if(Me.version!==Pe.__version||ge===!0){if(t.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const de=Tt.getPrimaries(Tt.workingColorSpace),Oe=M.colorSpace===Vr?null:Tt.getPrimaries(M.colorSpace),be=M.colorSpace===Vr||de===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let pe=v(M.image,!1,o.maxTextureSize);pe=Ee(M,pe);const Ue=l.convert(M.format,M.colorSpace),ke=l.convert(M.type);let Ae=L(M.internalFormat,Ue,ke,M.normalized,M.colorSpace,M.isVideoTexture);Le(he,M);let we;const rt=M.mipmaps,lt=M.isVideoTexture!==!0,st=Pe.__version===void 0||ge===!0,z=Me.dataReady,Te=D(M,pe);if(M.isDepthTexture)Ae=B(M.format===gs,M.type),st&&(lt?t.texStorage2D(s.TEXTURE_2D,1,Ae,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,Ae,pe.width,pe.height,0,Ue,ke,null));else if(M.isDataTexture)if(rt.length>0){lt&&st&&t.texStorage2D(s.TEXTURE_2D,Te,Ae,rt[0].width,rt[0].height);for(let de=0,Oe=rt.length;de<Oe;de++)we=rt[de],lt?z&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,we.width,we.height,Ue,ke,we.data):t.texImage2D(s.TEXTURE_2D,de,Ae,we.width,we.height,0,Ue,ke,we.data);M.generateMipmaps=!1}else lt?(st&&t.texStorage2D(s.TEXTURE_2D,Te,Ae,pe.width,pe.height),z&&me(M,pe,Ue,ke)):t.texImage2D(s.TEXTURE_2D,0,Ae,pe.width,pe.height,0,Ue,ke,pe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){lt&&st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Ae,rt[0].width,rt[0].height,pe.depth);for(let de=0,Oe=rt.length;de<Oe;de++)if(we=rt[de],M.format!==wi)if(Ue!==null)if(lt){if(z)if(M.layerUpdates.size>0){const be=ag(we.width,we.height,M.format,M.type);for(const _e of M.layerUpdates){const je=we.data.subarray(_e*be/we.data.BYTES_PER_ELEMENT,(_e+1)*be/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,_e,we.width,we.height,1,Ue,je)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,we.width,we.height,pe.depth,Ue,we.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,Ae,we.width,we.height,pe.depth,0,we.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,we.width,we.height,pe.depth,Ue,ke,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,de,Ae,we.width,we.height,pe.depth,0,Ue,ke,we.data)}else{lt&&st&&t.texStorage2D(s.TEXTURE_2D,Te,Ae,rt[0].width,rt[0].height);for(let de=0,Oe=rt.length;de<Oe;de++)we=rt[de],M.format!==wi?Ue!==null?lt?z&&t.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,we.width,we.height,Ue,we.data):t.compressedTexImage2D(s.TEXTURE_2D,de,Ae,we.width,we.height,0,we.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?z&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,we.width,we.height,Ue,ke,we.data):t.texImage2D(s.TEXTURE_2D,de,Ae,we.width,we.height,0,Ue,ke,we.data)}else if(M.isDataArrayTexture)if(lt){if(st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Ae,pe.width,pe.height,pe.depth),z)if(M.layerUpdates.size>0){const de=ag(pe.width,pe.height,M.format,M.type);for(const Oe of M.layerUpdates){const be=pe.data.subarray(Oe*de/pe.data.BYTES_PER_ELEMENT,(Oe+1)*de/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Oe,pe.width,pe.height,1,Ue,ke,be)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ue,ke,pe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,pe.width,pe.height,pe.depth,0,Ue,ke,pe.data);else if(M.isData3DTexture)lt?(st&&t.texStorage3D(s.TEXTURE_3D,Te,Ae,pe.width,pe.height,pe.depth),z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ue,ke,pe.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,pe.width,pe.height,pe.depth,0,Ue,ke,pe.data);else if(M.isFramebufferTexture){if(st)if(lt)t.texStorage2D(s.TEXTURE_2D,Te,Ae,pe.width,pe.height);else{let de=pe.width,Oe=pe.height;for(let be=0;be<Te;be++)t.texImage2D(s.TEXTURE_2D,be,Ae,de,Oe,0,Ue,ke,null),de>>=1,Oe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const de=s.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),pe.parentNode!==de){de.appendChild(pe),S.add(M),de.onpaint=ct=>{const Ut=ct.changedElements;for(const wt of S)Ut.includes(wt.image)&&(wt.needsUpdate=!0)},de.requestPaint();return}const Oe=0,be=s.RGBA,_e=s.RGBA,je=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Oe,be,_e,je,pe),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(rt.length>0){if(lt&&st){const de=yt(rt[0]);t.texStorage2D(s.TEXTURE_2D,Te,Ae,de.width,de.height)}for(let de=0,Oe=rt.length;de<Oe;de++)we=rt[de],lt?z&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Ue,ke,we):t.texImage2D(s.TEXTURE_2D,de,Ae,Ue,ke,we);M.generateMipmaps=!1}else if(lt){if(st){const de=yt(pe);t.texStorage2D(s.TEXTURE_2D,Te,Ae,de.width,de.height)}z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue,ke,pe)}else t.texImage2D(s.TEXTURE_2D,0,Ae,Ue,ke,pe);_(M)&&b(he),Pe.__version=Me.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function $e(P,M,$){if(M.image.length!==6)return;const he=re(P,M),ge=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+$);const Me=r.get(ge);if(ge.version!==Me.__version||he===!0){t.activeTexture(s.TEXTURE0+$);const Pe=Tt.getPrimaries(Tt.workingColorSpace),fe=M.colorSpace===Vr?null:Tt.getPrimaries(M.colorSpace),pe=M.colorSpace===Vr||Pe===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ue=M.isCompressedTexture||M.image[0].isCompressedTexture,ke=M.image[0]&&M.image[0].isDataTexture,Ae=[];for(let _e=0;_e<6;_e++)!Ue&&!ke?Ae[_e]=v(M.image[_e],!0,o.maxCubemapSize):Ae[_e]=ke?M.image[_e].image:M.image[_e],Ae[_e]=Ee(M,Ae[_e]);const we=Ae[0],rt=l.convert(M.format,M.colorSpace),lt=l.convert(M.type),st=L(M.internalFormat,rt,lt,M.normalized,M.colorSpace),z=M.isVideoTexture!==!0,Te=Me.__version===void 0||he===!0,de=ge.dataReady;let Oe=D(M,we);Le(s.TEXTURE_CUBE_MAP,M);let be;if(Ue){z&&Te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,st,we.width,we.height);for(let _e=0;_e<6;_e++){be=Ae[_e].mipmaps;for(let je=0;je<be.length;je++){const ct=be[je];M.format!==wi?rt!==null?z?de&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,0,0,ct.width,ct.height,rt,ct.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,st,ct.width,ct.height,0,ct.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,0,0,ct.width,ct.height,rt,lt,ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,st,ct.width,ct.height,0,rt,lt,ct.data)}}}else{if(be=M.mipmaps,z&&Te){be.length>0&&Oe++;const _e=yt(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,st,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ke){z?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ae[_e].width,Ae[_e].height,rt,lt,Ae[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,st,Ae[_e].width,Ae[_e].height,0,rt,lt,Ae[_e].data);for(let je=0;je<be.length;je++){const Ut=be[je].image[_e].image;z?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,0,0,Ut.width,Ut.height,rt,lt,Ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,st,Ut.width,Ut.height,0,rt,lt,Ut.data)}}else{z?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,rt,lt,Ae[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,st,rt,lt,Ae[_e]);for(let je=0;je<be.length;je++){const ct=be[je];z?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,0,0,rt,lt,ct.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,st,rt,lt,ct.image[_e])}}}_(M)&&b(s.TEXTURE_CUBE_MAP),Me.__version=ge.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function et(P,M,$,he,ge,Me){const Pe=l.convert($.format,$.colorSpace),fe=l.convert($.type),pe=L($.internalFormat,Pe,fe,$.normalized,$.colorSpace),Ue=r.get(M),ke=r.get($);if(ke.__renderTarget=M,!Ue.__hasExternalTextures){const Ae=Math.max(1,M.width>>Me),we=Math.max(1,M.height>>Me);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,Me,pe,Ae,we,M.depth,0,Pe,fe,null):t.texImage2D(ge,Me,pe,Ae,we,0,Pe,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Be(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ge,ke.__webglTexture,0,zt(M)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ge,ke.__webglTexture,Me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(P,M,$){if(s.bindRenderbuffer(s.RENDERBUFFER,P),M.depthBuffer){const he=M.depthTexture,ge=he&&he.isDepthTexture?he.type:null,Me=B(M.stencilBuffer,ge),Pe=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Be(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,zt(M),Me,M.width,M.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,zt(M),Me,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Me,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,P)}else{const he=M.textures;for(let ge=0;ge<he.length;ge++){const Me=he[ge],Pe=l.convert(Me.format,Me.colorSpace),fe=l.convert(Me.type),pe=L(Me.internalFormat,Pe,fe,Me.normalized,Me.colorSpace);Be(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,zt(M),pe,M.width,M.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,zt(M),pe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,pe,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Je(P,M,$){const he=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(M.depthTexture);if(ge.__renderTarget=M,(!ge.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,M.depthTexture.addEventListener("dispose",O)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),Le(s.TEXTURE_CUBE_MAP,M.depthTexture);const Ue=l.convert(M.depthTexture.format),ke=l.convert(M.depthTexture.type);let Ae;M.depthTexture.format===pr?Ae=s.DEPTH_COMPONENT24:M.depthTexture.format===gs&&(Ae=s.DEPTH24_STENCIL8);for(let we=0;we<6;we++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ae,M.width,M.height,0,Ue,ke,null)}}else K(M.depthTexture,0);const Me=ge.__webglTexture,Pe=zt(M),fe=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,pe=M.depthTexture.format===gs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===pr)Be(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,fe,Me,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,pe,fe,Me,0);else if(M.depthTexture.format===gs)Be(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,fe,Me,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,pe,fe,Me,0);else throw new Error("Unknown depthTexture format")}function Mt(P){const M=r.get(P),$=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const he=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){const ge=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),M.__depthDisposeCallback=ge}M.__boundDepthTexture=he}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if($)for(let he=0;he<6;he++)Je(M.__webglFramebuffer[he],P,he);else{const he=P.texture.mipmaps;he&&he.length>0?Je(M.__webglFramebuffer[0],P,0):Je(M.__webglFramebuffer,P,0)}else if($){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=s.createRenderbuffer(),Bt(M.__webglDepthbuffer[he],P,!1);else{const ge=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=M.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Me)}}else{const he=P.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Bt(M.__webglDepthbuffer,P,!1);else{const ge=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Me)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(P,M,$){const he=r.get(P);M!==void 0&&et(he.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Mt(P)}function mt(P){const M=P.texture,$=r.get(P),he=r.get(M);P.addEventListener("dispose",E);const ge=P.textures,Me=P.isWebGLCubeRenderTarget===!0,Pe=ge.length>1;if(Pe||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=M.version,u.memory.textures++),Me){$.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[fe]=[];for(let pe=0;pe<M.mipmaps.length;pe++)$.__webglFramebuffer[fe][pe]=s.createFramebuffer()}else $.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)$.__webglFramebuffer[fe]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let fe=0,pe=ge.length;fe<pe;fe++){const Ue=r.get(ge[fe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),u.memory.textures++)}if(P.samples>0&&Be(P)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let fe=0;fe<ge.length;fe++){const pe=ge[fe];$.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[fe]);const Ue=l.convert(pe.format,pe.colorSpace),ke=l.convert(pe.type),Ae=L(pe.internalFormat,Ue,ke,pe.normalized,pe.colorSpace,P.isXRRenderTarget===!0),we=zt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,we,Ae,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,$.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Bt($.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),Le(s.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)et($.__webglFramebuffer[fe][pe],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else et($.__webglFramebuffer[fe],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);_(M)&&b(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let fe=0,pe=ge.length;fe<pe;fe++){const Ue=ge[fe],ke=r.get(Ue);let Ae=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ke.__webglTexture),Le(Ae,Ue),et($.__webglFramebuffer,P,Ue,s.COLOR_ATTACHMENT0+fe,Ae,0),_(Ue)&&b(Ae)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,he.__webglTexture),Le(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)et($.__webglFramebuffer[pe],P,M,s.COLOR_ATTACHMENT0,fe,pe);else et($.__webglFramebuffer,P,M,s.COLOR_ATTACHMENT0,fe,0);_(M)&&b(fe),t.unbindTexture()}P.depthBuffer&&Mt(P)}function Ht(P){const M=P.textures;for(let $=0,he=M.length;$<he;$++){const ge=M[$];if(_(ge)){const Me=N(P),Pe=r.get(ge).__webglTexture;t.bindTexture(Me,Pe),b(Me),t.unbindTexture()}}}const It=[],ln=[];function W(P){if(P.samples>0){if(Be(P)===!1){const M=P.textures,$=P.width,he=P.height;let ge=s.COLOR_BUFFER_BIT;const Me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(P),fe=M.length>1;if(fe)for(let Ue=0;Ue<M.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const pe=P.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ue=0;Ue<M.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ue]);const ke=r.get(M[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ke,0)}s.blitFramebuffer(0,0,$,he,0,0,$,he,ge,s.NEAREST),h===!0&&(It.length=0,ln.length=0,It.push(s.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(It.push(Me),ln.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ln)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Ue=0;Ue<M.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ue]);const ke=r.get(M[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const M=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function zt(P){return Math.min(o.maxSamples,P.samples)}function Be(P){const M=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function tt(P){const M=u.render.frame;x.get(P)!==M&&(x.set(P,M),P.update())}function Ee(P,M){const $=P.colorSpace,he=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==nc&&$!==Vr&&(Tt.getTransfer($)===kt?(he!==wi||ge!==ti)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",$)),M}function yt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=se,this.getTextureUnits=oe,this.setTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=ce,this.setTexture3D=ue,this.setTextureCube=k,this.rebindTextures=Lt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function UE(s,e){function t(r,o=Vr){let l;const u=Tt.getTransfer(o);if(r===ti)return s.UNSIGNED_BYTE;if(r===Id)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ud)return s.UNSIGNED_SHORT_5_5_5_1;if(r===jg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Xg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Hg)return s.BYTE;if(r===Wg)return s.SHORT;if(r===co)return s.UNSIGNED_SHORT;if(r===Dd)return s.INT;if(r===Wi)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===hr)return s.HALF_FLOAT;if(r===qg)return s.ALPHA;if(r===Yg)return s.RGB;if(r===wi)return s.RGBA;if(r===pr)return s.DEPTH_COMPONENT;if(r===gs)return s.DEPTH_STENCIL;if(r===$g)return s.RED;if(r===Fd)return s.RED_INTEGER;if(r===xs)return s.RG;if(r===Od)return s.RG_INTEGER;if(r===kd)return s.RGBA_INTEGER;if(r===$l||r===Kl||r===Zl||r===Ql)if(u===kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===$l)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===$l)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ql)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$f||r===Kf||r===Zf||r===Qf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===$f)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jf||r===ed||r===td||r===nd||r===id||r===ec||r===rd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Jf||r===ed)return u===kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===td)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===nd)return l.COMPRESSED_R11_EAC;if(r===id)return l.COMPRESSED_SIGNED_R11_EAC;if(r===ec)return l.COMPRESSED_RG11_EAC;if(r===rd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===sd||r===ad||r===od||r===ld||r===cd||r===ud||r===fd||r===dd||r===hd||r===pd||r===md||r===gd||r===_d||r===xd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===sd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ad)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===od)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ld)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ud)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===hd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===md)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_d)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vd||r===Sd||r===yd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===vd)return u===kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Md||r===Ed||r===tc||r===Td)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Md)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Ed)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Td)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===uo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const FE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OE=`
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

}`;class kE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new a0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Xi({vertexShader:FE,fragmentShader:OE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ji(new hc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BE extends vs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",h=1,m=null,x=null,S=null,g=null,y=null,w=null;const R=typeof XRWebGLBinding<"u",v=new kE,_={},b=t.getContextAttributes();let N=null,L=null;const B=[],D=[],O=new Pt;let E=null;const U=new ei;U.viewport=new en;const X=new ei;X.viewport=new en;const I=[U,X],G=new $v;let se=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ve=B[re];return ve===void 0&&(ve=new cf,B[re]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(re){let ve=B[re];return ve===void 0&&(ve=new cf,B[re]=ve),ve.getGripSpace()},this.getHand=function(re){let ve=B[re];return ve===void 0&&(ve=new cf,B[re]=ve),ve.getHandSpace()};function H(re){const ve=D.indexOf(re.inputSource);if(ve===-1)return;const me=B[ve];me!==void 0&&(me.update(re.inputSource,re.frame,m||u),me.dispatchEvent({type:re.type,data:re.inputSource}))}function Z(){o.removeEventListener("select",H),o.removeEventListener("selectstart",H),o.removeEventListener("selectend",H),o.removeEventListener("squeeze",H),o.removeEventListener("squeezestart",H),o.removeEventListener("squeezeend",H),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",q);for(let re=0;re<B.length;re++){const ve=D[re];ve!==null&&(D[re]=null,B[re].disconnect(ve))}se=null,oe=null,v.reset();for(const re in _)delete _[re];e.setRenderTarget(N),y=null,g=null,S=null,o=null,L=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",H),o.addEventListener("selectstart",H),o.addEventListener("selectend",H),o.addEventListener("squeeze",H),o.addEventListener("squeezestart",H),o.addEventListener("squeezeend",H),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",q),b.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ie=null,$e=null;b.depth&&($e=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=b.stencil?gs:pr,Ie=b.stencil?uo:Wi);const et={colorFormat:t.RGBA8,depthFormat:$e,scaleFactor:l};S=this.getBinding(),g=S.createProjectionLayer(et),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new Hi(g.textureWidth,g.textureHeight,{format:wi,type:ti,depthTexture:new la(g.textureWidth,g.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Hi(y.framebufferWidth,y.framebufferHeight,{format:wi,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(d),Le.setContext(o),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(re){for(let ve=0;ve<re.removed.length;ve++){const me=re.removed[ve],Ie=D.indexOf(me);Ie>=0&&(D[Ie]=null,B[Ie].disconnect(me))}for(let ve=0;ve<re.added.length;ve++){const me=re.added[ve];let Ie=D.indexOf(me);if(Ie===-1){for(let et=0;et<B.length;et++)if(et>=D.length){D.push(me),Ie=et;break}else if(D[et]===null){D[et]=me,Ie=et;break}if(Ie===-1)break}const $e=B[Ie];$e&&$e.connect(me)}}const K=new Q,ce=new Q;function ue(re,ve,me){K.setFromMatrixPosition(ve.matrixWorld),ce.setFromMatrixPosition(me.matrixWorld);const Ie=K.distanceTo(ce),$e=ve.projectionMatrix.elements,et=me.projectionMatrix.elements,Bt=$e[14]/($e[10]-1),Je=$e[14]/($e[10]+1),Mt=($e[9]+1)/$e[5],Lt=($e[9]-1)/$e[5],mt=($e[8]-1)/$e[0],Ht=(et[8]+1)/et[0],It=Bt*mt,ln=Bt*Ht,W=Ie/(-mt+Ht),zt=W*-mt;if(ve.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(zt),re.translateZ(W),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),$e[10]===-1)re.projectionMatrix.copy(ve.projectionMatrix),re.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Be=Bt+W,tt=Je+W,Ee=It-zt,yt=ln+(Ie-zt),P=Mt*Je/tt*Be,M=Lt*Je/tt*Be;re.projectionMatrix.makePerspective(Ee,yt,P,M,Be,tt),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function k(re,ve){ve===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ve.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let ve=re.near,me=re.far;v.texture!==null&&(v.depthNear>0&&(ve=v.depthNear),v.depthFar>0&&(me=v.depthFar)),G.near=X.near=U.near=ve,G.far=X.far=U.far=me,(se!==G.near||oe!==G.far)&&(o.updateRenderState({depthNear:G.near,depthFar:G.far}),se=G.near,oe=G.far),G.layers.mask=re.layers.mask|6,U.layers.mask=G.layers.mask&-5,X.layers.mask=G.layers.mask&-3;const Ie=re.parent,$e=G.cameras;k(G,Ie);for(let et=0;et<$e.length;et++)k($e[et],Ie);$e.length===2?ue(G,U,X):G.projectionMatrix.copy(U.projectionMatrix),ee(re,G,Ie)};function ee(re,ve,me){me===null?re.matrix.copy(ve.matrixWorld):(re.matrix.copy(me.matrixWorld),re.matrix.invert(),re.matrix.multiply(ve.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ve.projectionMatrix),re.projectionMatrixInverse.copy(ve.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=bd*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(g===null&&y===null))return h},this.setFoveation=function(re){h=re,g!==null&&(g.fixedFoveation=re),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=re)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(G)},this.getCameraTexture=function(re){return _[re]};let De=null;function ze(re,ve){if(x=ve.getViewerPose(m||u),w=ve,x!==null){const me=x.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let Ie=!1;me.length!==G.cameras.length&&(G.cameras.length=0,Ie=!0);for(let Je=0;Je<me.length;Je++){const Mt=me[Je];let Lt=null;if(y!==null)Lt=y.getViewport(Mt);else{const Ht=S.getViewSubImage(g,Mt);Lt=Ht.viewport,Je===0&&(e.setRenderTargetTextures(L,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(L))}let mt=I[Je];mt===void 0&&(mt=new ei,mt.layers.enable(Je),mt.viewport=new en,I[Je]=mt),mt.matrix.fromArray(Mt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Mt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Je===0&&(G.matrix.copy(mt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ie===!0&&G.cameras.push(mt)}const $e=o.enabledFeatures;if($e&&$e.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){S=r.getBinding();const Je=S.getDepthInformation(me[0]);Je&&Je.isValid&&Je.texture&&v.init(Je,o.renderState)}if($e&&$e.includes("camera-access")&&R){e.state.unbindTexture(),S=r.getBinding();for(let Je=0;Je<me.length;Je++){const Mt=me[Je].camera;if(Mt){let Lt=_[Mt];Lt||(Lt=new a0,_[Mt]=Lt);const mt=S.getCameraImage(Mt);Lt.sourceTexture=mt}}}}for(let me=0;me<B.length;me++){const Ie=D[me],$e=B[me];Ie!==null&&$e!==void 0&&$e.update(Ie,ve,m||u)}De&&De(re,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),w=null}const Le=new f0;Le.setAnimationLoop(ze),this.setAnimationLoop=function(re){De=re},this.dispose=function(){}}}const zE=new $t,x0=new pt;x0.set(-1,0,0,0,1,0,0,0,1);function VE(s,e){function t(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,o0(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function o(v,_,b,N,L){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(v,_):_.isMeshLambertMaterial?(l(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(v,_),S(v,_)):_.isMeshPhongMaterial?(l(v,_),x(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(v,_),g(v,_),_.isMeshPhysicalMaterial&&y(v,_,L)):_.isMeshMatcapMaterial?(l(v,_),w(v,_)):_.isMeshDepthMaterial?l(v,_):_.isMeshDistanceMaterial?(l(v,_),R(v,_)):_.isMeshNormalMaterial?l(v,_):_.isLineBasicMaterial?(u(v,_),_.isLineDashedMaterial&&d(v,_)):_.isPointsMaterial?h(v,_,b,N):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,t(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Xn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,t(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Xn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,t(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,t(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const b=e.get(_),N=b.envMap,L=b.envMapRotation;N&&(v.envMap.value=N,v.envMapRotation.value.setFromMatrix4(zE.makeRotationFromEuler(L)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(x0),v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,v.aoMapTransform))}function u(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform))}function d(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function h(v,_,b,N){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*b,v.scale.value=N*.5,_.map&&(v.map.value=_.map,t(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function x(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function S(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function g(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function y(v,_,b){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,v.specularIntensityMapTransform))}function w(v,_){_.matcap&&(v.matcap.value=_.matcap)}function R(v,_){const b=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(b.matrixWorld),v.nearDistance.value=b.shadow.camera.near,v.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function GE(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,N){const L=N.program;r.uniformBlockBinding(b,L)}function m(b,N){let L=o[b.id];L===void 0&&(w(b),L=x(b),o[b.id]=L,b.addEventListener("dispose",v));const B=N.program;r.updateUBOMapping(b,B);const D=e.render.frame;l[b.id]!==D&&(g(b),l[b.id]=D)}function x(b){const N=S();b.__bindingPointIndex=N;const L=s.createBuffer(),B=b.__size,D=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,B,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,L),L}function S(){for(let b=0;b<d;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const N=o[b.id],L=b.uniforms,B=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let D=0,O=L.length;D<O;D++){const E=Array.isArray(L[D])?L[D]:[L[D]];for(let U=0,X=E.length;U<X;U++){const I=E[U];if(y(I,D,U,B)===!0){const G=I.__offset,se=Array.isArray(I.value)?I.value:[I.value];let oe=0;for(let H=0;H<se.length;H++){const Z=se[H],q=R(Z);typeof Z=="number"||typeof Z=="boolean"?(I.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,G+oe,I.__data)):Z.isMatrix3?(I.__data[0]=Z.elements[0],I.__data[1]=Z.elements[1],I.__data[2]=Z.elements[2],I.__data[3]=0,I.__data[4]=Z.elements[3],I.__data[5]=Z.elements[4],I.__data[6]=Z.elements[5],I.__data[7]=0,I.__data[8]=Z.elements[6],I.__data[9]=Z.elements[7],I.__data[10]=Z.elements[8],I.__data[11]=0):ArrayBuffer.isView(Z)?I.__data.set(new Z.constructor(Z.buffer,Z.byteOffset,I.__data.length)):(Z.toArray(I.__data,oe),oe+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(b,N,L,B){const D=b.value,O=N+"_"+L;if(B[O]===void 0)return typeof D=="number"||typeof D=="boolean"?B[O]=D:ArrayBuffer.isView(D)?B[O]=D.slice():B[O]=D.clone(),!0;{const E=B[O];if(typeof D=="number"||typeof D=="boolean"){if(E!==D)return B[O]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(E.equals(D)===!1)return E.copy(D),!0}}return!1}function w(b){const N=b.uniforms;let L=0;const B=16;for(let O=0,E=N.length;O<E;O++){const U=Array.isArray(N[O])?N[O]:[N[O]];for(let X=0,I=U.length;X<I;X++){const G=U[X],se=Array.isArray(G.value)?G.value:[G.value];for(let oe=0,H=se.length;oe<H;oe++){const Z=se[oe],q=R(Z),K=L%B,ce=K%q.boundary,ue=K+ce;L+=ce,ue!==0&&B-ue<q.storage&&(L+=B-ue),G.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=L,L+=q.storage}}}const D=L%B;return D>0&&(L+=B-D),b.__size=L,b.__cache={},this}function R(b){const N={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(N.boundary=4,N.storage=4):b.isVector2?(N.boundary=8,N.storage=8):b.isVector3||b.isColor?(N.boundary=16,N.storage=12):b.isVector4?(N.boundary=16,N.storage=16):b.isMatrix3?(N.boundary=48,N.storage=48):b.isMatrix4?(N.boundary=64,N.storage=64):b.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(N.boundary=16,N.storage=b.byteLength):at("WebGLRenderer: Unsupported uniform value type.",b),N}function v(b){const N=b.target;N.removeEventListener("dispose",v);const L=u.indexOf(N.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function _(){for(const b in o)s.deleteBuffer(o[b]);u=[],o={},l={}}return{bind:h,update:m,dispose:_}}const HE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function WE(){return Fi===null&&(Fi=new bv(HE,16,16,xs,hr),Fi.name="DFG_LUT",Fi.minFilter=Rn,Fi.magFilter=Rn,Fi.wrapS=ur,Fi.wrapT=ur,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class jE{constructor(e={}){const{canvas:t=rv(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:y=ti}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const R=y,v=new Set([kd,Od,Fd]),_=new Set([ti,Wi,co,uo,Id,Ud]),b=new Uint32Array(4),N=new Int32Array(4),L=new Q;let B=null,D=null;const O=[],E=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let I=!1,G=null;this._outputColorSpace=fi;let se=0,oe=0,H=null,Z=-1,q=null;const K=new en,ce=new en;let ue=null;const k=new Rt(0);let ee=0,De=t.width,ze=t.height,Le=1,re=null,ve=null;const me=new en(0,0,De,ze),Ie=new en(0,0,De,ze);let $e=!1;const et=new Hd;let Bt=!1,Je=!1;const Mt=new $t,Lt=new Q,mt=new en,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function ln(){return H===null?Le:1}let W=r;function zt(A,Y){return t.getContext(A,Y)}try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ld}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",ct,!1),W===null){const Y="webgl2";if(W=zt(Y,A),W===null)throw zt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ct("WebGLRenderer: "+A.message),A}let Be,tt,Ee,yt,P,M,$,he,ge,Me,Pe,fe,pe,Ue,ke,Ae,we,rt,lt,st,z,Te,de;function Oe(){Be=new WM(W),Be.init(),z=new UE(W,Be),tt=new FM(W,Be,e,z),Ee=new DE(W,Be),tt.reversedDepthBuffer&&g&&Ee.buffers.depth.setReversed(!0),yt=new qM(W),P=new vE,M=new IE(W,Be,Ee,P,tt,z,yt),$=new HM(X),he=new Zv(W),Te=new IM(W,he),ge=new jM(W,he,yt,Te),Me=new $M(W,ge,he,Te,yt),rt=new YM(W,tt,M),ke=new OM(P),Pe=new xE(X,$,Be,tt,Te,ke),fe=new VE(X,P),pe=new yE,Ue=new bE(Be),we=new DM(X,$,Ee,Me,w,h),Ae=new LE(X,Me,tt),de=new GE(W,yt,tt,Ee),lt=new UM(W,Be,yt),st=new XM(W,Be,yt),yt.programs=Pe.programs,X.capabilities=tt,X.extensions=Be,X.properties=P,X.renderLists=pe,X.shadowMap=Ae,X.state=Ee,X.info=yt}Oe(),R!==ti&&(U=new ZM(R,t.width,t.height,o,l));const be=new BE(X,W);this.xr=be,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=Be.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Be.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(A){A!==void 0&&(Le=A,this.setSize(De,ze,!1))},this.getSize=function(A){return A.set(De,ze)},this.setSize=function(A,Y,ae=!0){if(be.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}De=A,ze=Y,t.width=Math.floor(A*Le),t.height=Math.floor(Y*Le),ae===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(De*Le,ze*Le).floor()},this.setDrawingBufferSize=function(A,Y,ae){De=A,ze=Y,Le=ae,t.width=Math.floor(A*ae),t.height=Math.floor(Y*ae),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(R===ti){Ct("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){at("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(K)},this.getViewport=function(A){return A.copy(me)},this.setViewport=function(A,Y,ae,ne){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,Y,ae,ne),Ee.viewport(K.copy(me).multiplyScalar(Le).round())},this.getScissor=function(A){return A.copy(Ie)},this.setScissor=function(A,Y,ae,ne){A.isVector4?Ie.set(A.x,A.y,A.z,A.w):Ie.set(A,Y,ae,ne),Ee.scissor(ce.copy(Ie).multiplyScalar(Le).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(A){Ee.setScissorTest($e=A)},this.setOpaqueSort=function(A){re=A},this.setTransparentSort=function(A){ve=A},this.getClearColor=function(A){return A.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,ae=!0){let ne=0;if(A){let te=!1;if(H!==null){const Ne=H.texture.format;te=v.has(Ne)}if(te){const Ne=H.texture.type,He=_.has(Ne),Re=we.getClearColor(),qe=we.getClearAlpha(),Qe=Re.r,dt=Re.g,ht=Re.b;He?(b[0]=Qe,b[1]=dt,b[2]=ht,b[3]=qe,W.clearBufferuiv(W.COLOR,0,b)):(N[0]=Qe,N[1]=dt,N[2]=ht,N[3]=qe,W.clearBufferiv(W.COLOR,0,N))}else ne|=W.COLOR_BUFFER_BIT}Y&&(ne|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ne|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&W.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),G=A},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),we.dispose(),pe.dispose(),Ue.dispose(),P.dispose(),$.dispose(),Me.dispose(),Te.dispose(),de.dispose(),Pe.dispose(),be.dispose(),be.removeEventListener("sessionstart",bi),be.removeEventListener("sessionend",ft),ot.stop()};function _e(A){A.preventDefault(),Im("WebGLRenderer: Context Lost."),I=!0}function je(){Im("WebGLRenderer: Context Restored."),I=!1;const A=yt.autoReset,Y=Ae.enabled,ae=Ae.autoUpdate,ne=Ae.needsUpdate,te=Ae.type;Oe(),yt.autoReset=A,Ae.enabled=Y,Ae.autoUpdate=ae,Ae.needsUpdate=ne,Ae.type=te}function ct(A){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ut(A){const Y=A.target;Y.removeEventListener("dispose",Ut),wt(Y)}function wt(A){_n(A),P.remove(A)}function _n(A){const Y=P.get(A).programs;Y!==void 0&&(Y.forEach(function(ae){Pe.releaseProgram(ae)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,ae,ne,te,Ne){Y===null&&(Y=Ht);const He=te.isMesh&&te.matrixWorld.determinant()<0,Re=vo(A,Y,ae,ne,te);Ee.setMaterial(ne,He);let qe=ae.index,Qe=1;if(ne.wireframe===!0){if(qe=ge.getWireframeAttribute(ae),qe===void 0)return;Qe=2}const dt=ae.drawRange,ht=ae.attributes.position;let Ke=dt.start*Qe,At=(dt.start+dt.count)*Qe;Ne!==null&&(Ke=Math.max(Ke,Ne.start*Qe),At=Math.min(At,(Ne.start+Ne.count)*Qe)),qe!==null?(Ke=Math.max(Ke,0),At=Math.min(At,qe.count)):ht!=null&&(Ke=Math.max(Ke,0),At=Math.min(At,ht.count));const Vt=At-Ke;if(Vt<0||Vt===1/0)return;Te.setup(te,ne,Re,ae,qe);let qt,Ft=lt;if(qe!==null&&(qt=he.get(qe),Ft=st,Ft.setIndex(qt)),te.isMesh)ne.wireframe===!0?(Ee.setLineWidth(ne.wireframeLinewidth*ln()),Ft.setMode(W.LINES)):Ft.setMode(W.TRIANGLES);else if(te.isLine){let rn=ne.linewidth;rn===void 0&&(rn=1),Ee.setLineWidth(rn*ln()),te.isLineSegments?Ft.setMode(W.LINES):te.isLineLoop?Ft.setMode(W.LINE_LOOP):Ft.setMode(W.LINE_STRIP)}else te.isPoints?Ft.setMode(W.POINTS):te.isSprite&&Ft.setMode(W.TRIANGLES);if(te.isBatchedMesh)if(Be.get("WEBGL_multi_draw"))Ft.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const rn=te._multiDrawStarts,Ve=te._multiDrawCounts,xn=te._multiDrawCount,_t=qe?he.get(qe).bytesPerElement:1,On=P.get(ne).currentProgram.getUniforms();for(let kn=0;kn<xn;kn++)On.setValue(W,"_gl_DrawID",kn),Ft.render(rn[kn]/_t,Ve[kn])}else if(te.isInstancedMesh)Ft.renderInstances(Ke,Vt,te.count);else if(ae.isInstancedBufferGeometry){const rn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ve=Math.min(ae.instanceCount,rn);Ft.renderInstances(Ke,Vt,Ve)}else Ft.render(Ke,Vt)};function Fn(A,Y,ae){A.transparent===!0&&A.side===cr&&A.forceSinglePass===!1?(A.side=Xn,A.needsUpdate=!0,ys(A,Y,ae),A.side=jr,A.needsUpdate=!0,ys(A,Y,ae),A.side=cr):ys(A,Y,ae)}this.compile=function(A,Y,ae=null){ae===null&&(ae=A),D=Ue.get(ae),D.init(Y),E.push(D),ae.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(D.pushLight(te),te.castShadow&&D.pushShadow(te))}),A!==ae&&A.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(D.pushLight(te),te.castShadow&&D.pushShadow(te))}),D.setupLights();const ne=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ne=te.material;if(Ne)if(Array.isArray(Ne))for(let He=0;He<Ne.length;He++){const Re=Ne[He];Fn(Re,ae,te),ne.add(Re)}else Fn(Ne,ae,te),ne.add(Ne)}),D=E.pop(),ne},this.compileAsync=function(A,Y,ae=null){const ne=this.compile(A,Y,ae);return new Promise(te=>{function Ne(){if(ne.forEach(function(He){P.get(He).currentProgram.isReady()&&ne.delete(He)}),ne.size===0){te(A);return}setTimeout(Ne,10)}Be.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let di=null;function qi(A){di&&di(A)}function bi(){ot.stop()}function ft(){ot.start()}const ot=new f0;ot.setAnimationLoop(qi),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(A){di=A,be.setAnimationLoop(A),A===null?ot.stop():ot.start()},be.addEventListener("sessionstart",bi),be.addEventListener("sessionend",ft),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;G!==null&&G.renderStart(A,Y);const ae=be.enabled===!0&&be.isPresenting===!0,ne=U!==null&&(H===null||ae)&&U.begin(X,H);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(Y),Y=be.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,Y,H),D=Ue.get(A,E.length),D.init(Y),D.state.textureUnits=M.getTextureUnits(),E.push(D),Mt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),et.setFromProjectionMatrix(Mt,zi,Y.reversedDepth),Je=this.localClippingEnabled,Bt=ke.init(this.clippingPlanes,Je),B=pe.get(A,O.length),B.init(),O.push(B),be.enabled===!0&&be.isPresenting===!0){const He=X.xr.getDepthSensingMesh();He!==null&&Nn(He,Y,-1/0,X.sortObjects)}Nn(A,Y,0,X.sortObjects),B.finish(),X.sortObjects===!0&&B.sort(re,ve),It=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,It&&we.addToRenderList(B,A),this.info.render.frame++,Bt===!0&&ke.beginShadows();const te=D.state.shadowsArray;if(Ae.render(te,A,Y),Bt===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&U.hasRenderPass())===!1){const He=B.opaque,Re=B.transmissive;if(D.setupLights(),Y.isArrayCamera){const qe=Y.cameras;if(Re.length>0)for(let Qe=0,dt=qe.length;Qe<dt;Qe++){const ht=qe[Qe];Ri(He,Re,A,ht)}It&&we.render(A);for(let Qe=0,dt=qe.length;Qe<dt;Qe++){const ht=qe[Qe];Ci(B,A,ht,ht.viewport)}}else Re.length>0&&Ri(He,Re,A,Y),It&&we.render(A),Ci(B,A,Y)}H!==null&&oe===0&&(M.updateMultisampleRenderTarget(H),M.updateRenderTargetMipmap(H)),ne&&U.end(X),A.isScene===!0&&A.onAfterRender(X,A,Y),Te.resetDefaultState(),Z=-1,q=null,E.pop(),E.length>0?(D=E[E.length-1],M.setTextureUnits(D.state.textureUnits),Bt===!0&&ke.setGlobalState(X.clippingPlanes,D.state.camera)):D=null,O.pop(),O.length>0?B=O[O.length-1]:B=null,G!==null&&G.renderEnd()};function Nn(A,Y,ae,ne){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)D.pushLightProbeGrid(A);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||et.intersectsSprite(A)){ne&&mt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Mt);const He=Me.update(A),Re=A.material;Re.visible&&B.push(A,He,Re,ae,mt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||et.intersectsObject(A))){const He=Me.update(A),Re=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),mt.copy(A.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),mt.copy(He.boundingSphere.center)),mt.applyMatrix4(A.matrixWorld).applyMatrix4(Mt)),Array.isArray(Re)){const qe=He.groups;for(let Qe=0,dt=qe.length;Qe<dt;Qe++){const ht=qe[Qe],Ke=Re[ht.materialIndex];Ke&&Ke.visible&&B.push(A,He,Ke,ae,mt.z,ht)}}else Re.visible&&B.push(A,He,Re,ae,mt.z,null)}}const Ne=A.children;for(let He=0,Re=Ne.length;He<Re;He++)Nn(Ne[He],Y,ae,ne)}function Ci(A,Y,ae,ne){const{opaque:te,transmissive:Ne,transparent:He}=A;D.setupLightsView(ae),Bt===!0&&ke.setGlobalState(X.clippingPlanes,ae),ne&&Ee.viewport(K.copy(ne)),te.length>0&&qr(te,Y,ae),Ne.length>0&&qr(Ne,Y,ae),He.length>0&&qr(He,Y,ae),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Ri(A,Y,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ne.id]===void 0){const Ke=Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ne.id]=new Hi(1,1,{generateMipmaps:!0,type:Ke?hr:ti,minFilter:ms,samples:Math.max(4,tt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ne=D.state.transmissionRenderTarget[ne.id],He=ne.viewport||K;Ne.setSize(He.z*X.transmissionResolutionScale,He.w*X.transmissionResolutionScale);const Re=X.getRenderTarget(),qe=X.getActiveCubeFace(),Qe=X.getActiveMipmapLevel();X.setRenderTarget(Ne),X.getClearColor(k),ee=X.getClearAlpha(),ee<1&&X.setClearColor(16777215,.5),X.clear(),It&&we.render(ae);const dt=X.toneMapping;X.toneMapping=Gi;const ht=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),D.setupLightsView(ne),Bt===!0&&ke.setGlobalState(X.clippingPlanes,ne),qr(A,ae,ne),M.updateMultisampleRenderTarget(Ne),M.updateRenderTargetMipmap(Ne),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let At=0,Vt=Y.length;At<Vt;At++){const qt=Y[At],{object:Ft,geometry:rn,material:Ve,group:xn}=qt;if(Ve.side===cr&&Ft.layers.test(ne.layers)){const _t=Ve.side;Ve.side=Xn,Ve.needsUpdate=!0,ma(Ft,ae,ne,rn,Ve,xn),Ve.side=_t,Ve.needsUpdate=!0,Ke=!0}}Ke===!0&&(M.updateMultisampleRenderTarget(Ne),M.updateRenderTargetMipmap(Ne))}X.setRenderTarget(Re,qe,Qe),X.setClearColor(k,ee),ht!==void 0&&(ne.viewport=ht),X.toneMapping=dt}function qr(A,Y,ae){const ne=Y.isScene===!0?Y.overrideMaterial:null;for(let te=0,Ne=A.length;te<Ne;te++){const He=A[te],{object:Re,geometry:qe,group:Qe}=He;let dt=He.material;dt.allowOverride===!0&&ne!==null&&(dt=ne),Re.layers.test(ae.layers)&&ma(Re,Y,ae,qe,dt,Qe)}}function ma(A,Y,ae,ne,te,Ne){A.onBeforeRender(X,Y,ae,ne,te,Ne),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(X,Y,ae,ne,A,Ne),te.transparent===!0&&te.side===cr&&te.forceSinglePass===!1?(te.side=Xn,te.needsUpdate=!0,X.renderBufferDirect(ae,Y,ne,te,A,Ne),te.side=jr,te.needsUpdate=!0,X.renderBufferDirect(ae,Y,ne,te,A,Ne),te.side=cr):X.renderBufferDirect(ae,Y,ne,te,A,Ne),A.onAfterRender(X,Y,ae,ne,te,Ne)}function ys(A,Y,ae){Y.isScene!==!0&&(Y=Ht);const ne=P.get(A),te=D.state.lights,Ne=D.state.shadowsArray,He=te.state.version,Re=Pe.getParameters(A,te.state,Ne,Y,ae,D.state.lightProbeGridArray),qe=Pe.getProgramCacheKey(Re);let Qe=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,ne.fog=Y.fog;const dt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=$.get(A.envMap||ne.environment,dt),ne.envMapRotation=ne.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",Ut),Qe=new Map,ne.programs=Qe);let ht=Qe.get(qe);if(ht!==void 0){if(ne.currentProgram===ht&&ne.lightsStateVersion===He)return _a(A,Re),ht}else Re.uniforms=Pe.getUniforms(A),G!==null&&A.isNodeMaterial&&G.build(A,ae,Re),A.onBeforeCompile(Re,X),ht=Pe.acquireProgram(Re,qe),Qe.set(qe,ht),ne.uniforms=Re.uniforms;const Ke=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=ke.uniform),_a(A,Re),ne.needsLights=_c(A),ne.lightsStateVersion=He,ne.needsLights&&(Ke.ambientLightColor.value=te.state.ambient,Ke.lightProbe.value=te.state.probe,Ke.directionalLights.value=te.state.directional,Ke.directionalLightShadows.value=te.state.directionalShadow,Ke.spotLights.value=te.state.spot,Ke.spotLightShadows.value=te.state.spotShadow,Ke.rectAreaLights.value=te.state.rectArea,Ke.ltc_1.value=te.state.rectAreaLTC1,Ke.ltc_2.value=te.state.rectAreaLTC2,Ke.pointLights.value=te.state.point,Ke.pointLightShadows.value=te.state.pointShadow,Ke.hemisphereLights.value=te.state.hemi,Ke.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ke.spotLightMatrix.value=te.state.spotLightMatrix,Ke.spotLightMap.value=te.state.spotLightMap,Ke.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=D.state.lightProbeGridArray.length>0,ne.currentProgram=ht,ne.uniformsList=null,ht}function ga(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Jl.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function _a(A,Y){const ae=P.get(A);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function xo(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;L.setFromMatrixPosition(Y.matrixWorld);for(let ae=0,ne=A.length;ae<ne;ae++){const te=A[ae];if(te.texture!==null&&te.boundingBox.containsPoint(L))return te}return null}function vo(A,Y,ae,ne,te){Y.isScene!==!0&&(Y=Ht),M.resetTextureUnits();const Ne=Y.fog,He=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?Y.environment:null,Re=H===null?X.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Tt.workingColorSpace,qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Qe=$.get(ne.envMap||He,qe),dt=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ht=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ke=!!ae.morphAttributes.position,At=!!ae.morphAttributes.normal,Vt=!!ae.morphAttributes.color;let qt=Gi;ne.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(qt=X.toneMapping);const Ft=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,rn=Ft!==void 0?Ft.length:0,Ve=P.get(ne),xn=D.state.lights;if(Bt===!0&&(Je===!0||A!==q)){const Ot=A===q&&ne.id===Z;ke.setState(ne,A,Ot)}let _t=!1;ne.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==xn.state.version||Ve.outputColorSpace!==Re||te.isBatchedMesh&&Ve.batching===!1||!te.isBatchedMesh&&Ve.batching===!0||te.isBatchedMesh&&Ve.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ve.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ve.instancing===!1||!te.isInstancedMesh&&Ve.instancing===!0||te.isSkinnedMesh&&Ve.skinning===!1||!te.isSkinnedMesh&&Ve.skinning===!0||te.isInstancedMesh&&Ve.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ve.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ve.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ve.instancingMorph===!1&&te.morphTexture!==null||Ve.envMap!==Qe||ne.fog===!0&&Ve.fog!==Ne||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ke.numPlanes||Ve.numIntersection!==ke.numIntersection)||Ve.vertexAlphas!==dt||Ve.vertexTangents!==ht||Ve.morphTargets!==Ke||Ve.morphNormals!==At||Ve.morphColors!==Vt||Ve.toneMapping!==qt||Ve.morphTargetsCount!==rn||!!Ve.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Ve.__version=ne.version);let On=Ve.currentProgram;_t===!0&&(On=ys(ne,Y,te),G&&ne.isNodeMaterial&&G.onUpdateProgram(ne,On,Ve));let kn=!1,xt=!1,Yi=!1;const Dt=On.getUniforms(),Wt=Ve.uniforms;if(Ee.useProgram(On.program)&&(kn=!0,xt=!0,Yi=!0),ne.id!==Z&&(Z=ne.id,xt=!0),Ve.needsLights){const Ot=xo(D.state.lightProbeGridArray,te);Ve.lightProbeGrid!==Ot&&(Ve.lightProbeGrid=Ot,xt=!0)}if(kn||q!==A){Ee.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Dt.setValue(W,"projectionMatrix",A.projectionMatrix),Dt.setValue(W,"viewMatrix",A.matrixWorldInverse);const pi=Dt.map.cameraPosition;pi!==void 0&&pi.setValue(W,Lt.setFromMatrixPosition(A.matrixWorld)),tt.logarithmicDepthBuffer&&Dt.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Dt.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,xt=!0,Yi=!0)}if(Ve.needsLights&&(xn.state.directionalShadowMap.length>0&&Dt.setValue(W,"directionalShadowMap",xn.state.directionalShadowMap,M),xn.state.spotShadowMap.length>0&&Dt.setValue(W,"spotShadowMap",xn.state.spotShadowMap,M),xn.state.pointShadowMap.length>0&&Dt.setValue(W,"pointShadowMap",xn.state.pointShadowMap,M)),te.isSkinnedMesh){Dt.setOptional(W,te,"bindMatrix"),Dt.setOptional(W,te,"bindMatrixInverse");const Ot=te.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Dt.setValue(W,"boneTexture",Ot.boneTexture,M))}te.isBatchedMesh&&(Dt.setOptional(W,te,"batchingTexture"),Dt.setValue(W,"batchingTexture",te._matricesTexture,M),Dt.setOptional(W,te,"batchingIdTexture"),Dt.setValue(W,"batchingIdTexture",te._indirectTexture,M),Dt.setOptional(W,te,"batchingColorTexture"),te._colorsTexture!==null&&Dt.setValue(W,"batchingColorTexture",te._colorsTexture,M));const hi=ae.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&rt.update(te,ae,On),(xt||Ve.receiveShadow!==te.receiveShadow)&&(Ve.receiveShadow=te.receiveShadow,Dt.setValue(W,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&Y.environment!==null&&(Wt.envMapIntensity.value=Y.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=WE()),xt){if(Dt.setValue(W,"toneMappingExposure",X.toneMappingExposure),Ve.needsLights&&gc(Wt,Yi),Ne&&ne.fog===!0&&fe.refreshFogUniforms(Wt,Ne),fe.refreshMaterialUniforms(Wt,ne,Le,ze,D.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){const Ot=Ve.lightProbeGrid;Wt.probesSH.value=Ot.texture,Wt.probesMin.value.copy(Ot.boundingBox.min),Wt.probesMax.value.copy(Ot.boundingBox.max),Wt.probesResolution.value.copy(Ot.resolution)}Jl.upload(W,ga(Ve),Wt,M)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Jl.upload(W,ga(Ve),Wt,M),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Dt.setValue(W,"center",te.center),Dt.setValue(W,"modelViewMatrix",te.modelViewMatrix),Dt.setValue(W,"normalMatrix",te.normalMatrix),Dt.setValue(W,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const Ot=ne.uniformsGroups;for(let pi=0,Pi=Ot.length;pi<Pi;pi++){const Yr=Ot[pi];de.update(Yr,On),de.bind(Yr,On)}}return On}function gc(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function _c(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,Y,ae){const ne=P.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),P.get(A.texture).__webglTexture=Y,P.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const ae=P.get(A);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0};const Kt=W.createFramebuffer();this.setRenderTarget=function(A,Y=0,ae=0){H=A,se=Y,oe=ae;let ne=null,te=!1,Ne=!1;if(A){const Re=P.get(A);if(Re.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(W.FRAMEBUFFER,Re.__webglFramebuffer),K.copy(A.viewport),ce.copy(A.scissor),ue=A.scissorTest,Ee.viewport(K),Ee.scissor(ce),Ee.setScissorTest(ue),Z=-1;return}else if(Re.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(Re.__hasExternalTextures)M.rebindTextures(A,P.get(A.texture).__webglTexture,P.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const dt=A.depthTexture;if(Re.__boundDepthTexture!==dt){if(dt!==null&&P.has(dt)&&(A.width!==dt.image.width||A.height!==dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ne=!0);const Qe=P.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[Y])?ne=Qe[Y][ae]:ne=Qe[Y],te=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?ne=P.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?ne=Qe[ae]:ne=Qe,K.copy(A.viewport),ce.copy(A.scissor),ue=A.scissorTest}else K.copy(me).multiplyScalar(Le).floor(),ce.copy(Ie).multiplyScalar(Le).floor(),ue=$e;if(ae!==0&&(ne=Kt),Ee.bindFramebuffer(W.FRAMEBUFFER,ne)&&Ee.drawBuffers(A,ne),Ee.viewport(K),Ee.scissor(ce),Ee.setScissorTest(ue),te){const Re=P.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re.__webglTexture,ae)}else if(Ne){const Re=Y;for(let qe=0;qe<A.textures.length;qe++){const Qe=P.get(A.textures[qe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+qe,Qe.__webglTexture,ae,Re)}}else if(A!==null&&ae!==0){const Re=P.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Re.__webglTexture,ae)}Z=-1},this.readRenderTargetPixels=function(A,Y,ae,ne,te,Ne,He,Re=0){if(!(A&&A.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe){Ee.bindFramebuffer(W.FRAMEBUFFER,qe);try{const Qe=A.textures[Re],dt=Qe.format,ht=Qe.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Re),!tt.textureFormatReadable(dt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(ht)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ne&&ae>=0&&ae<=A.height-te&&W.readPixels(Y,ae,ne,te,z.convert(dt),z.convert(ht),Ne)}finally{const Qe=H!==null?P.get(H).__webglFramebuffer:null;Ee.bindFramebuffer(W.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(A,Y,ae,ne,te,Ne,He,Re=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe)if(Y>=0&&Y<=A.width-ne&&ae>=0&&ae<=A.height-te){Ee.bindFramebuffer(W.FRAMEBUFFER,qe);const Qe=A.textures[Re],dt=Qe.format,ht=Qe.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Re),!tt.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ke),W.bufferData(W.PIXEL_PACK_BUFFER,Ne.byteLength,W.STREAM_READ),W.readPixels(Y,ae,ne,te,z.convert(dt),z.convert(ht),0);const At=H!==null?P.get(H).__webglFramebuffer:null;Ee.bindFramebuffer(W.FRAMEBUFFER,At);const Vt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await sv(W,Vt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ke),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ne),W.deleteBuffer(Ke),W.deleteSync(Vt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,ae=0){const ne=Math.pow(2,-ae),te=Math.floor(A.image.width*ne),Ne=Math.floor(A.image.height*ne),He=Y!==null?Y.x:0,Re=Y!==null?Y.y:0;M.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,ae,0,0,He,Re,te,Ne),Ee.unbindTexture()};const xc=W.createFramebuffer(),xa=W.createFramebuffer();this.copyTextureToTexture=function(A,Y,ae=null,ne=null,te=0,Ne=0){let He,Re,qe,Qe,dt,ht,Ke,At,Vt;const qt=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(ae!==null)He=ae.max.x-ae.min.x,Re=ae.max.y-ae.min.y,qe=ae.isBox3?ae.max.z-ae.min.z:1,Qe=ae.min.x,dt=ae.min.y,ht=ae.isBox3?ae.min.z:0;else{const Wt=Math.pow(2,-te);He=Math.floor(qt.width*Wt),Re=Math.floor(qt.height*Wt),A.isDataArrayTexture?qe=qt.depth:A.isData3DTexture?qe=Math.floor(qt.depth*Wt):qe=1,Qe=0,dt=0,ht=0}ne!==null?(Ke=ne.x,At=ne.y,Vt=ne.z):(Ke=0,At=0,Vt=0);const Ft=z.convert(Y.format),rn=z.convert(Y.type);let Ve;Y.isData3DTexture?(M.setTexture3D(Y,0),Ve=W.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(M.setTexture2DArray(Y,0),Ve=W.TEXTURE_2D_ARRAY):(M.setTexture2D(Y,0),Ve=W.TEXTURE_2D),Ee.activeTexture(W.TEXTURE0),Ee.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Y.flipY),Ee.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Ee.pixelStorei(W.UNPACK_ALIGNMENT,Y.unpackAlignment);const xn=Ee.getParameter(W.UNPACK_ROW_LENGTH),_t=Ee.getParameter(W.UNPACK_IMAGE_HEIGHT),On=Ee.getParameter(W.UNPACK_SKIP_PIXELS),kn=Ee.getParameter(W.UNPACK_SKIP_ROWS),xt=Ee.getParameter(W.UNPACK_SKIP_IMAGES);Ee.pixelStorei(W.UNPACK_ROW_LENGTH,qt.width),Ee.pixelStorei(W.UNPACK_IMAGE_HEIGHT,qt.height),Ee.pixelStorei(W.UNPACK_SKIP_PIXELS,Qe),Ee.pixelStorei(W.UNPACK_SKIP_ROWS,dt),Ee.pixelStorei(W.UNPACK_SKIP_IMAGES,ht);const Yi=A.isDataArrayTexture||A.isData3DTexture,Dt=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const Wt=P.get(A),hi=P.get(Y),Ot=P.get(Wt.__renderTarget),pi=P.get(hi.__renderTarget);Ee.bindFramebuffer(W.READ_FRAMEBUFFER,Ot.__webglFramebuffer),Ee.bindFramebuffer(W.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let Pi=0;Pi<qe;Pi++)Yi&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,P.get(A).__webglTexture,te,ht+Pi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,P.get(Y).__webglTexture,Ne,Vt+Pi)),W.blitFramebuffer(Qe,dt,He,Re,Ke,At,He,Re,W.DEPTH_BUFFER_BIT,W.NEAREST);Ee.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||P.has(A)){const Wt=P.get(A),hi=P.get(Y);Ee.bindFramebuffer(W.READ_FRAMEBUFFER,xc),Ee.bindFramebuffer(W.DRAW_FRAMEBUFFER,xa);for(let Ot=0;Ot<qe;Ot++)Yi?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Wt.__webglTexture,te,ht+Ot):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Wt.__webglTexture,te),Dt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,hi.__webglTexture,Ne,Vt+Ot):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,hi.__webglTexture,Ne),te!==0?W.blitFramebuffer(Qe,dt,He,Re,Ke,At,He,Re,W.COLOR_BUFFER_BIT,W.NEAREST):Dt?W.copyTexSubImage3D(Ve,Ne,Ke,At,Vt+Ot,Qe,dt,He,Re):W.copyTexSubImage2D(Ve,Ne,Ke,At,Qe,dt,He,Re);Ee.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Dt?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Ve,Ne,Ke,At,Vt,He,Re,qe,Ft,rn,qt.data):Y.isCompressedArrayTexture?W.compressedTexSubImage3D(Ve,Ne,Ke,At,Vt,He,Re,qe,Ft,qt.data):W.texSubImage3D(Ve,Ne,Ke,At,Vt,He,Re,qe,Ft,rn,qt):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ne,Ke,At,He,Re,Ft,rn,qt.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ne,Ke,At,qt.width,qt.height,Ft,qt.data):W.texSubImage2D(W.TEXTURE_2D,Ne,Ke,At,He,Re,Ft,rn,qt);Ee.pixelStorei(W.UNPACK_ROW_LENGTH,xn),Ee.pixelStorei(W.UNPACK_IMAGE_HEIGHT,_t),Ee.pixelStorei(W.UNPACK_SKIP_PIXELS,On),Ee.pixelStorei(W.UNPACK_SKIP_ROWS,kn),Ee.pixelStorei(W.UNPACK_SKIP_IMAGES,xt),Ne===0&&Y.generateMipmaps&&W.generateMipmap(Ve),Ee.unbindTexture()},this.initRenderTarget=function(A){P.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),Ee.unbindTexture()},this.resetState=function(){se=0,oe=0,H=null,Ee.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=s=>{const e=qE(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var If={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},$E=Et.createContext({}),KE=()=>Et.useContext($E),ZE=Et.forwardRef(({color:s,size:e,strokeWidth:t,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},h)=>{const{size:m=24,strokeWidth:x=2,absoluteStrokeWidth:S=!1,color:g="currentColor",className:y=""}=KE()??{},w=r??S?Number(t??x)*24/Number(e??m):t??x;return Et.createElement("svg",{ref:h,...If,width:e??m??If.width,height:e??m??If.height,stroke:s??g,strokeWidth:w,className:v0("lucide",y,o),...!l&&!YE(d)&&{"aria-hidden":"true"},...d},[...u.map(([R,v])=>Et.createElement(R,v)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=(s,e)=>{const t=Et.forwardRef(({className:r,...o},l)=>Et.createElement(ZE,{ref:l,iconNode:e,className:v0(`lucide-${XE(Pg(s))}`,`lucide-${s}`,r),...o}));return t.displayName=Pg(s),t};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],JE=on("activity",QE);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],tT=on("calendar-days",eT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],iT=on("camera",nT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],sT=on("chevron-down",rT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],S0=on("clipboard-list",aT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],lT=on("download",oT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],y0=on("dumbbell",cT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],M0=on("flame",uT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],E0=on("gauge",fT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]],T0=on("goal",dT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],pT=on("leaf",hT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["path",{d:"M5 12h14",key:"1ays0h"}]],jd=on("minus",mT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Xd=on("plus",gT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],oc=on("rotate-ccw",_T);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],vT=on("settings-2",xT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]],yT=on("shopping-basket",ST);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],w0=on("sparkles",MT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],A0=on("utensils",ET);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],b0=on("x",TT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],AT=on("zap",wT),qd=s=>`./assets/${s}`,Yd=s=>qd(`generated/${s}`),Ng={p:140,c:225,f:60,kcal:2e3},bT=2900,CT=135,C0={pasta:{name:"意面 · Garlic oil",short:"意面",sub:"力量日最爽",unit:"g",step:10,perUnit:{p:.12,c:.71,f:.015},kcalUnit:3.55,color:"#ffb55c"},soba:{name:"荞麦面 · Soba",short:"荞麦",sub:"清爽低负担",unit:"g",step:10,perUnit:{p:.14,c:.66,f:.023},kcalUnit:3.44,color:"#a8d46f"},nissin:{name:"日清非油炸",short:"日清",sub:"懒人汤面",unit:"包",step:1,perUnit:{p:6.7,c:55,f:4.9},kcalUnit:291,color:"#ff766f"},pho:{name:"越南米粉",short:"米粉",sub:"低脂换口味",unit:"包",step:1,perUnit:{p:4,c:43,f:2},kcalUnit:210,color:"#7bd6d0"},bifun:{name:"纯干米粉",short:"干米粉",sub:"纯碳水补满",unit:"g",step:10,perUnit:{p:.06,c:.79,f:.005},kcalUnit:3.45,color:"#f7df77"}},R0={beef:{label:"牛肉切り落とし",short:"牛肉",tag:"raw · per g",unit:"g",step:10,p:.19,c:0,max:650,note:"脂肪按包装校准"},chicken:{label:"速食鸡胸",short:"鸡胸",tag:"per pack",unit:"块",step:1,p:22,c:1,f:2,max:6,note:"最稳高蛋白"},duck:{label:"合鸭胸去皮",short:"合鸭",tag:"100g serve",unit:"份",step:1,p:21,c:.5,f:6,max:4,note:"香但不太肥"},kfc:{label:"KFC 原味鸡",short:"KFC",tag:"per piece",unit:"块",step:1,p:18,c:8,f:14,max:5,note:"爽，但盐高"},oikos:{label:"Oikos 高蛋白酸奶",short:"Oikos",tag:"per cup",unit:"個",step:1,p:12,c:5,f:0,max:8,note:"零脂补蛋白"}},P0={egg_fried:{label:"煎蛋",short:"煎蛋",unit:"个",step:1,p:6,c:.4,f:7,max:6},sauce:{label:"ペペロン酱",short:"蒜油酱",unit:"包",step:1,p:.9,c:1.5,f:10,max:2},olive:{label:"橄榄油",short:"橄榄油",unit:"小勺",step:1,p:0,c:0,f:4.5,max:6},nuts:{label:"素焼きナッツ",short:"坚果",unit:"10g",step:1,p:2,c:2,f:5,max:5},avocado:{label:"アボカド",short:"牛油果",unit:"半个",step:1,p:1,c:4,f:15,max:2}},lr={banana:{label:"香蕉",unit:"根",step:1,max:4,p:1,c:27,f:.3},apple:{label:"苹果",unit:"个",step:1,max:3,p:.4,c:35,f:.3},kiwi:{label:"奇异果",unit:"个",step:1,max:4,p:1,c:14,f:.2},pineapple:{label:"切块菠萝 240g",unit:"盒",step:1,max:2,p:1.44,c:31.2,f:.24},yogurt:{label:"无糖酸奶",unit:"g",step:50,max:400,p:.036,c:.049,f:.03}},N0={chicken:{label:"鸡胸",unit:"块",step:1,max:10,p:22,c:1,f:2},egg:{label:"全蛋",unit:"个",step:1,max:10,p:6,c:.5,f:5},oikos:{label:"Oikos",unit:"個",step:1,max:6,p:12,c:5,f:0},onigiri:{label:"饭团",unit:"个",step:1,max:6,p:3,c:39,f:.5},nissin:{label:"日清面",unit:"包",step:1,max:4,p:6.7,c:55,f:4.9},rice:{label:"米饭",unit:"g",step:50,max:1e3,p:.026,c:.28,f:.003},beef:{label:"牛肉",unit:"g",step:50,max:600,p:.19,c:0,f:.072},pasta:{label:"干意面",unit:"g",step:50,max:300,p:.12,c:.71,f:.015},banana:{label:"香蕉",unit:"根",step:1,max:4,p:1,c:27,f:.25}},ua={chicken:{label:"鸡胸",unit:"块",step:1,max:5,p:22,c:1,f:2},eggs:{label:"全蛋",unit:"个",step:1,max:6,p:6,c:.5,f:5},banana:{label:"香蕉",unit:"根",step:1,max:4,p:1,c:27,f:.25},pineapple:{label:"菠萝 240g",unit:"盒",step:1,max:2,p:1.44,c:31.2,f:.24},oikos:{label:"Oikos",unit:"個",step:1,max:5,p:12,c:5,f:0}},Wr={tomato:{label:"无盐番茄汁",sub:"K 600 / 200ml",p:1.8,c:7.1,f:0,kcal:39,k:600,na:5},yasai:{label:"野菜一日",sub:"K 740 / 200ml",p:3,c:14.5,f:0,kcal:75,k:740,na:80},none:{label:"不补钾",sub:"今天省了",p:0,c:0,f:0,kcal:0,k:0,na:0}},L0=[{id:"burger",label:"汉堡 + 薯条",kcal:980},{id:"ramen",label:"拉面 + 饭",kcal:1200},{id:"sushi",label:"回转寿司 12 皿",kcal:1050},{id:"pizza",label:"Pizza 半张",kcal:1150},{id:"dessert",label:"甜品奶茶",kcal:620},{id:"katsu",label:"炸猪排咖喱",kcal:1450}],RT=[{id:"plan",label:"今日",icon:A0},{id:"detail",label:"明细",icon:E0},{id:"shop",label:"采购",icon:yT},{id:"cheat",label:"放松",icon:M0}],zr={p:0,c:0,f:0,kcal:0},yn=(s,e,t)=>Math.max(e,Math.min(t,Number(s)||0)),nn=(s,e=0)=>Number((Number(s)||0).toFixed(e)),pa=s=>s.kcal??s.p*4+s.c*4+s.f*9,ho=s=>({...s,kcal:pa(s)}),Oi=(...s)=>ho(s.reduce((e,t)=>({p:e.p+((t==null?void 0:t.p)||0),c:e.c+((t==null?void 0:t.c)||0),f:e.f+((t==null?void 0:t.f)||0),kcal:e.kcal+pa(t||zr)}),{...zr}));function ui(s,e){return ho({p:s.p*e,c:s.c*e,f:s.f*e})}function D0(s){return Object.entries(s).filter(([e,t])=>ua[e]&&t>0)}function PT(s){const e=D0(s);return e.length?e.map(([t,r])=>`${ua[t].label} ${nn(r)}${ua[t].unit}`).join(" / "):"不吃"}function NT(s,e){const t=Wr[s]||Wr.none;return s==="none"||e<=0?"不喝":`${t.label} ${nn(e)}ml`}function I0(s,e,t){return D0(s).length>0||e!=="none"&&t>0}function U0(s,e,t){return`${PT(s)} · ${NT(e,t)}`}function LT(s,e){return s.map(t=>{const r=t.qty,o=e[t.key]||0,l=t.max??1/0,u=yn(r+o,0,l),d=nn(u-r,t.step<1?1:2);return{...t,baseQty:r,qty:u,adjustment:d,macro:ui(t.unitMacro,u)}})}function Uf(s,e){return!Number.isFinite(s)||s<=0?0:Math.max(0,Math.round(s/e)*e)}function DT(s){return ho({p:s*.31/4,c:s*.49/4,f:s*.2/9,kcal:s})}function IT(s,e){const t=R0[s];return{...t,f:s==="beef"?e*.8/100:t.f}}function UT(s,e){const[t,r]=Et.useState(()=>{const o=Number(localStorage.getItem(s));return Number.isFinite(o)&&o>0?o:e});return Et.useEffect(()=>{localStorage.setItem(s,String(t))},[s,t]),[t,r]}function FT({tone:s="warm"}){const e=Et.useRef(null);return Et.useEffect(()=>{const t=e.current;if(!t)return;const r=()=>{const O=document.createElement("canvas");O.dataset.engine="2d-fallback";const E=O.getContext("2d");t.appendChild(O);const U=()=>{const{width:oe,height:H}=t.getBoundingClientRect(),Z=Math.min(window.devicePixelRatio||1,2);O.width=Math.max(1,Math.floor(oe*Z)),O.height=Math.max(1,Math.floor(H*Z)),O.style.width=`${Math.max(1,oe)}px`,O.style.height=`${Math.max(1,H)}px`,E.setTransform(Z,0,0,Z,0,0)};U();const X=new ResizeObserver(U);X.observe(t);let I=0;const G=Array.from({length:46},(oe,H)=>({angle:H*.72,radius:70+H%9*22,color:["#ff8068","#ffcf69","#a8d46f"][H%3],size:2.5+H%5})),se=()=>{I=window.requestAnimationFrame(se);const{width:oe,height:H}=O.getBoundingClientRect();E.clearRect(0,0,oe,H);const Z=E.createRadialGradient(oe*.55,H*.28,0,oe*.55,H*.28,Math.max(oe,H)*.75);Z.addColorStop(0,"rgba(255,207,105,0.18)"),Z.addColorStop(.45,"rgba(255,128,104,0.08)"),Z.addColorStop(1,"rgba(0,0,0,0)"),E.fillStyle=Z,E.fillRect(0,0,oe,H),E.globalCompositeOperation="screen",G.forEach(q=>{q.angle+=.006;const K=oe*.5+Math.cos(q.angle)*q.radius*(oe/390),ce=H*.46+Math.sin(q.angle)*q.radius*.52*(H/844);E.beginPath(),E.fillStyle=q.color,E.globalAlpha=.38,E.arc(K,ce,q.size,0,Math.PI*2),E.fill()}),E.globalAlpha=1,E.globalCompositeOperation="source-over"};return se(),()=>{window.cancelAnimationFrame(I),X.disconnect(),t.removeChild(O)}},o=document.createElement("canvas");let l=!1;try{l=!!(o.getContext("webgl2")||o.getContext("webgl"))}catch{l=!1}if(!l)return r();const u=new yv,d=new ei(45,1,.1,100);d.position.set(0,0,9);let h;try{h=new jE({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{return r()}h.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),h.setClearColor(0,0),t.appendChild(h.domElement);const m=new oo;u.add(m),u.add(new qv(16777215,.75));const x=new rg(16760179,3.4,22);x.position.set(4,2,6),u.add(x);const S=new rg(9752970,2.1,18);S.position.set(-5,-2,4),u.add(S);const g=s==="cool"?[8640255,11064431,16764777]:[16747377,16764777,11064431],y=new Wd(.16,32,32),w=g.flatMap((O,E)=>{const U=new Gv({color:O,emissive:O,emissiveIntensity:.22,roughness:.22,metalness:.24});return Array.from({length:9},(X,I)=>{const G=new ji(y,U),se=I/9*Math.PI*2+E*.55,oe=2.05+E*.68;return G.position.set(Math.cos(se)*oe,Math.sin(se)*oe*.48,E*-.4),G.userData={angle:se,radius:oe,band:E,speed:.004+E*.0015},m.add(G),G})});[2.05,2.75,3.45].forEach((O,E)=>{const X=new Fv(0,0,O,O*.48,0,Math.PI*2).getPoints(120).map(oe=>new Q(oe.x,oe.y,-.5+E*-.2)),I=new qn().setFromPoints(X),G=new i0({color:g[E],transparent:!0,opacity:.22}),se=new Lv(I,G);se.rotation.z=E*.34,m.add(se)});const R=120,v=new qn,_=new Float32Array(R*3);for(let O=0;O<R;O+=1){const E=O*1.618,U=1.5+O*37%100/22;_[O*3]=Math.cos(E)*U,_[O*3+1]=Math.sin(E*.9)*U*.42,_[O*3+2]=-2.2-O*17%80/32}v.setAttribute("position",new Ai(_,3));const b=new Dv(v,new r0({color:16769443,size:.035,transparent:!0,opacity:.46}));u.add(b);const N=()=>{const{width:O,height:E}=t.getBoundingClientRect();h.setSize(Math.max(1,O),Math.max(1,E),!1),d.aspect=Math.max(1,O)/Math.max(1,E),d.updateProjectionMatrix()};N();const L=new ResizeObserver(N);L.observe(t);let B=0;const D=()=>{B=window.requestAnimationFrame(D),m.rotation.z+=.0018,m.rotation.y=Math.sin(Date.now()*35e-5)*.18,b.rotation.z-=9e-4,w.forEach(O=>{O.userData.angle+=O.userData.speed;const{angle:E,radius:U,band:X}=O.userData;O.position.x=Math.cos(E)*U,O.position.y=Math.sin(E)*U*.48,O.position.z=-.25-X*.42+Math.sin(E*2)*.12}),h.render(u,d)};return D(),()=>{window.cancelAnimationFrame(B),L.disconnect(),h.dispose(),y.dispose(),v.dispose(),t.removeChild(h.domElement)}},[s]),C.jsx("div",{ref:e,className:"pointer-events-none fixed inset-0 -z-10 opacity-70","data-three-orbit":!0})}function OT(){const[s,e]=Et.useState("plan"),[t,r]=Et.useState(Ng),[o,l]=UT("cutting:tdee",bT),[u,d]=Et.useState("quick"),[h,m]=Et.useState(800),[x,S]=Et.useState({}),[g,y]=Et.useState("pasta"),[w,R]=Et.useState(["beef"]),[v,_]=Et.useState(["sauce","egg_fried"]),[b,N]=Et.useState({}),[L,B]=Et.useState(13),[D,O]=Et.useState({}),[E,U]=Et.useState("tomato"),[X,I]=Et.useState(400),[G,se]=Et.useState(6.5),[oe,H]=Et.useState(2e3),[Z,q]=Et.useState(7),[K,ce]=Et.useState(!1),[ue,k]=Et.useState(!1),[ee,De]=Et.useState(!1),[ze,Le]=Et.useState({}),[re,ve]=Et.useState({name:"手动加餐",p:0,c:0,f:0,kcal:0}),[me,Ie]=Et.useState({}),$e=(Be,tt,Ee,yt=1/0)=>{Be(P=>{const M=yn(Ee,0,yt),$={...P};return M>0?$[tt]=M:delete $[tt],$})},et=Be=>{R(tt=>tt.includes(Be)?tt.length>1?tt.filter(Ee=>Ee!==Be):tt:[...tt,Be])},Bt=Be=>{_(tt=>tt.includes(Be)?tt.filter(Ee=>Ee!==Be):[...tt,Be])},Je=Et.useMemo(()=>{var qi,bi;const Be=Object.entries(x).reduce((ft,[ot,Nn])=>Oi(ft,ui(N0[ot],Nn)),zr),tt=u==="tally"&&Be.kcal>0?Be:DT(h),Ee=Object.entries(D).reduce((ft,[ot,Nn])=>Oi(ft,ui(ua[ot],Nn)),zr),yt=Wr[E]||Wr.none,P=ho(ui(yt,X/200));P.kcal=yt.kcal*(X/200);const M=ho(re),$=Oi(tt,Ee,P,M),he=Object.entries(b).filter(([ft,ot])=>lr[ft]&&ot>0),ge=he.reduce((ft,[ot,Nn])=>Oi(ft,ui(lr[ot],Nn)),zr),Me=he.map(([ft,ot])=>({key:`extra-${ft}`,name:lr[ft].label,qty:ot,unit:lr[ft].unit,step:lr[ft].step,max:lr[ft].max,unitMacro:lr[ft],macro:ui(lr[ft],ot),tone:"gold"})),Pe=Math.max(0,Math.min(CT,t.p)-$.p),fe=w.map(ft=>{const ot=IT(ft,L),Nn=Pe/Math.max(1,w.length)/ot.p,Ci=yn(Uf(Nn,ot.step),0,ot.max);return{key:ft,name:ot.label,short:ot.short,qty:Ci,unit:ot.unit,step:ot.step,max:ot.max,unitMacro:ot,macro:ui(ot,Ci),tone:"red"}}).filter(ft=>ft.qty>0),pe=fe.reduce((ft,ot)=>Oi(ft,ot.macro),zr),Ue=Math.max(0,t.f-$.f-ge.f-pe.f),ke=v.length?v:[],Ae=ke.map(ft=>{const ot=P0[ft],Nn=Ue/Math.max(1,ke.length)/ot.f,Ci=yn(Uf(Nn,ot.step),0,ot.max);return{key:`fat-${ft}`,name:ot.label,short:ot.short,qty:Ci,unit:ot.unit,step:ot.step,max:ot.max,unitMacro:ot,macro:ui(ot,Ci),tone:"amber"}}).filter(ft=>ft.qty>0),we=Ae.reduce((ft,ot)=>Oi(ft,ot.macro),zr),rt=Oi($,ge,pe,we),lt=Math.max(0,t.kcal-rt.kcal),st=C0[g],z=st.unit==="包"?8:420,Te=yn(Uf(lt/st.kcalUnit,st.step),0,z),de=ui(st.perUnit,Te),Oe=Te>0?[{key:`carb-${g}`,name:st.name,short:st.short,qty:Te,unit:st.unit,step:st.step,max:z,unitMacro:st.perUnit,macro:de,tone:"green"}]:[],be=LT([...fe,...Ae,...Me,...Oe],ze),_e=be.reduce((ft,ot)=>Oi(ft,ot.macro),zr),je=Oi($,_e),ct=Math.round(o-je.kcal),Ut=(((qi=Wr[E])==null?void 0:qi.k)||0)*(X/200),wt=(((bi=Wr[E])==null?void 0:bi.na)||0)*(X/200),_n=G*393+wt,Fn=oe+Ut,di=be.filter(ft=>ft.qty>0).map(ft=>({...ft,weeklyQty:nn(ft.qty*Z,ft.unit==="g"?0:1)}));return{lunch:tt,pre:Ee,drink:P,snack:M,beforeDinner:$,dinner:_e,dinnerItems:be,total:je,deficit:ct,potassium:Fn,sodium:_n,shopping:di,carb:st}},[L,g,ze,E,X,b,v,oe,h,u,D,G,Z,re,x,t,o,w]),Mt=L0.reduce((Be,tt)=>Be+(me[tt.id]||0)*tt.kcal,0),Lt=Math.round(Je.total.kcal+Mt-o),mt=I0(D,E,X),Ht=U0(D,E,X),It=re.kcal>0||re.p>0||re.c>0||re.f>0,ln=(Be,tt)=>{Le(Ee=>{const yt=Be.baseQty??Be.qty,P=yn(Be.qty+tt,0,Be.max??1/0),M=nn(P-yt,Be.step<1?1:2),$={...Ee};return M!==0?$[Be.key]=M:delete $[Be.key],$})},W=()=>{r(Ng),m(800),S({}),y("pasta"),R(["beef"]),_(["sauce","egg_fried"]),N({}),B(13),O({}),U("tomato"),I(400),Le({}),ve({name:"手动加餐",p:0,c:0,f:0,kcal:0})},zt=()=>{const Be={date:new Date().toISOString().slice(0,10),targets:t,lunch:Je.lunch,pre:Je.pre,drink:{key:E,ml:X,macro:Je.drink},snack:re,dinnerAdjustments:ze,dinner:{items:Je.dinnerItems,macro:Je.dinner},total:Je.total,deficit:Je.deficit},tt=new Blob([JSON.stringify(Be,null,2)],{type:"application/json"}),Ee=URL.createObjectURL(tt),yt=document.createElement("a");yt.href=Ee,yt.download=`cutting-protocol-${Be.date}.json`,yt.click(),URL.revokeObjectURL(Ee)};return C.jsxs("div",{className:"min-h-screen overflow-hidden text-zinc-50",children:[C.jsx(FT,{tone:s==="cheat"?"cool":"warm"}),C.jsx("div",{className:"fixed inset-0 -z-20 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,181,92,0.24),transparent_38%),radial-gradient(circle_at_0%_20%,rgba(122,214,208,0.16),transparent_32%),linear-gradient(135deg,#0d0f10_0%,#17120f_45%,#101615_100%)]"}),C.jsx("div",{className:"fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35"}),C.jsxs("div",{className:"mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-28 pt-4 sm:px-6 lg:px-8",children:[C.jsxs("header",{className:"sticky top-3 z-40 flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-black/35 px-2 py-2 backdrop-blur-2xl sm:gap-3 sm:px-3",children:[C.jsxs("button",{onClick:()=>e("plan"),className:"flex min-w-0 items-center gap-2 text-left",children:[C.jsx("span",{className:"grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-zinc-950",children:C.jsx(w0,{className:"h-4 w-4"})}),C.jsxs("span",{className:"hidden min-w-0 sm:block",children:[C.jsx("span",{className:"block truncate font-display text-base leading-none",children:"Cutting Lab"}),C.jsx("span",{className:"mt-1 block truncate text-[10px] uppercase tracking-[0.24em] text-zinc-400",children:"dinner pilot"})]})]}),C.jsx("nav",{className:"ml-auto hidden shrink-0 grid-cols-4 rounded-lg bg-white/7 p-1 lg:grid",children:C.jsx(Lg,{tab:s,setTab:e,mode:"top"})})]}),C.jsx(kT,{model:Je,targets:t,onFuel:()=>k(!0),fuelActive:mt,fuelSummary:Ht,onSnack:()=>De(!0),onDownload:zt}),s==="plan"&&C.jsx(BT,{model:Je,lunchMode:u,setLunchMode:d,lunchKcal:h,setLunchKcal:m,tally:x,setTally:S,setMapQty:$e,carbPlan:g,setCarbPlan:y,proteinKeys:w,toggleProtein:et,fatKeys:v,toggleFat:Bt,extraCarbs:b,setExtraCarbs:N,beefFat:L,setBeefFat:B,advancedOpen:K,setAdvancedOpen:ce,targets:t,setTargets:r,resetDefaults:W,onTuneDinner:ln,resetDinnerAdjustments:()=>Le({})}),s==="detail"&&C.jsx(zT,{model:Je,targets:t,setTargets:r,tdee:o,setTdee:l,pre:D,setPre:O,setMapQty:$e,drinkKey:E,setDrinkKey:U,drinkMl:X,setDrinkMl:I,saltG:G,setSaltG:se,foodK:oe,setFoodK:H}),s==="shop"&&C.jsx(VT,{model:Je,shopDays:Z,setShopDays:q}),s==="cheat"&&C.jsx(GT,{cheat:me,setCheat:Ie,cheatTotal:Mt,cheatSurplus:Lt,tdee:o,dayKcal:Je.total.kcal})]}),C.jsx(HT,{open:ue,setOpen:k,pre:D,setPre:O,setMapQty:$e,drinkKey:E,setDrinkKey:U,drinkMl:X,setDrinkMl:I,model:Je}),C.jsx(WT,{open:ee,setOpen:De,snack:re,setSnack:ve,active:It,dinnerSummary:Je.dinnerItems.slice(0,4).map(Be=>`${Be.short||Be.name} ${nn(Be.qty)}${Be.unit}`).join(" · ")}),C.jsxs("button",{onClick:()=>De(!0),className:"fixed bottom-24 right-5 z-50 grid h-14 w-14 place-items-center rounded-lg border border-white/15 bg-[#ff8068] text-white shadow-[0_16px_40px_-18px_#ff8068] transition hover:-translate-y-0.5 lg:bottom-5","aria-label":"零食加餐",children:[C.jsx(iT,{className:"h-6 w-6"}),It&&C.jsx("span",{className:"absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#a8d46f]"})]}),C.jsx("nav",{className:"fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 rounded-lg border border-white/10 bg-black/65 p-1 backdrop-blur-2xl lg:hidden",children:C.jsx(Lg,{tab:s,setTab:e,mode:"bottom"})})]})}function Lg({tab:s,setTab:e,mode:t}){return RT.map(r=>{const o=r.icon;return C.jsxs("button",{onClick:()=>e(r.id),className:`grid h-11 place-items-center rounded-md px-2 text-[11px] transition ${t==="top"?"min-w-20 grid-cols-[16px_auto] gap-1.5":"grid-rows-[18px_auto] gap-0.5"} ${s===r.id?"bg-white text-zinc-950 shadow-[0_10px_30px_-18px_rgba(255,255,255,0.9)]":"text-zinc-400 hover:bg-white/10 hover:text-white"}`,"aria-label":r.label,children:[C.jsx(o,{className:"h-4 w-4"}),C.jsx("span",{children:r.label})]},r.id)})}function kT({model:s,targets:e,onFuel:t,fuelActive:r,fuelSummary:o,onSnack:l,onDownload:u}){const d=s.deficit>=650?"text-[#a8d46f]":s.deficit>=300?"text-[#ffcf69]":"text-[#ff8068]";return C.jsxs("section",{className:"relative grid min-h-[78vh] items-end gap-6 py-4 lg:grid-cols-[minmax(0,1.03fr)_minmax(360px,0.97fr)] lg:items-center",children:[C.jsxs("div",{className:"relative order-2 lg:order-1",children:[C.jsxs("div",{className:"mb-5 flex flex-wrap items-center gap-2",children:[C.jsxs("div",{className:"inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/8 px-3 py-2 text-xs text-zinc-300 backdrop-blur-xl",children:[C.jsx(JE,{className:"h-4 w-4 text-[#a8d46f]"}),C.jsxs("span",{children:["83 kg · 25% BF · 16:8 IF · 今日 ",e.kcal," kcal"]})]}),C.jsxs("button",{"data-home-fuel-button":!0,onClick:t,className:`inline-flex max-w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-xs backdrop-blur-xl transition hover:-translate-y-0.5 ${r?"border-[#a8d46f]/35 bg-[#a8d46f]/12 text-[#d8ffc9]":"border-white/10 bg-white/8 text-zinc-300 hover:border-[#ffcf69]/40"}`,"aria-label":`补给：${o}`,children:[C.jsx(y0,{className:`h-4 w-4 shrink-0 ${r?"text-[#a8d46f]":"text-[#ffcf69]"}`}),C.jsx("span",{className:"shrink-0 font-cjk font-semibold",children:"补给"}),C.jsx("span",{className:`rounded-md px-2 py-0.5 font-mono text-[10px] ${r?"bg-[#a8d46f] text-zinc-950":"bg-white/10 text-zinc-300"}`,children:r?"ON":"OFF"}),C.jsx("span",{className:"hidden max-w-[260px] truncate text-zinc-400 sm:inline",children:o})]})]}),C.jsxs("h1",{className:"max-w-3xl font-display text-5xl leading-[0.92] tracking-normal text-white sm:text-7xl lg:text-8xl",children:["今晚吃得",C.jsx("span",{className:"block text-[#ffcf69]",children:"刚刚好"})]}),C.jsx("p",{className:"mt-5 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base",children:"中午吃了多少，训练前垫了什么，晚餐自己收口。肉、主食、脂肪和水果都算好，打开手机先看答案。"}),C.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap",children:[C.jsx(Ff,{icon:AT,label:"零食",onClick:l}),C.jsx(Ff,{icon:lT,label:"导出",onClick:u}),C.jsx(Ff,{icon:T0,label:`${s.deficit>0?"-":"+"}${Math.abs(s.deficit)}`,sub:"今日赤字"})]})]}),C.jsxs("div",{className:"relative order-1 lg:order-2",children:[C.jsx("div",{className:"absolute -inset-8 rounded-[2rem] bg-[#ff8068]/10 blur-3xl"}),C.jsxs("div",{className:"relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] shadow-[0_30px_90px_-50px_rgba(0,0,0,0.95)] backdrop-blur-xl",children:[C.jsx("img",{src:Yd("protocol-hero.jpg"),alt:"Cutting Lab dinner visual",className:"h-[280px] w-full object-cover sm:h-[420px]"}),C.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent"}),C.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-4 sm:p-5",children:[C.jsxs("div",{className:"mb-3 flex items-end justify-between gap-3",children:[C.jsxs("div",{children:[C.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#ffcf69]",children:"今晚"}),C.jsx("div",{className:"font-display text-4xl leading-none text-white sm:text-5xl",children:Math.round(s.dinner.kcal)}),C.jsx("div",{className:"mt-1 text-xs text-zinc-400",children:"晚餐热量"})]}),C.jsxs("div",{className:`rounded-lg bg-black/45 px-3 py-2 text-right backdrop-blur ${d}`,children:[C.jsx("div",{className:"text-[10px] uppercase tracking-[0.2em] text-zinc-400",children:"今日赤字"}),C.jsxs("div",{className:"font-mono text-xl",children:[s.deficit>0?"-":"+",Math.abs(s.deficit)]})]})]}),C.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[C.jsx(Xl,{label:"P",value:s.total.p,target:e.p,unit:"g"}),C.jsx(Xl,{label:"C",value:s.total.c,target:e.c,unit:"g"}),C.jsx(Xl,{label:"F",value:s.total.f,target:e.f,unit:"g"}),C.jsx(Xl,{label:"Kcal",value:s.total.kcal,target:e.kcal,unit:""})]})]})]})]})]})}function BT(s){const{model:e,lunchMode:t,setLunchMode:r,lunchKcal:o,setLunchKcal:l,tally:u,setTally:d,setMapQty:h,carbPlan:m,setCarbPlan:x,proteinKeys:S,toggleProtein:g,fatKeys:y,toggleFat:w,extraCarbs:R,setExtraCarbs:v,beefFat:_,setBeefFat:b,advancedOpen:N,setAdvancedOpen:L,targets:B,setTargets:D,resetDefaults:O,onTuneDinner:E,resetDinnerAdjustments:U}=s,X=e.dinnerItems.some(I=>I.adjustment!==0);return C.jsxs("main",{className:"grid gap-6 lg:grid-cols-[0.9fr_1.1fr]",children:[C.jsxs("section",{className:"space-y-6",children:[C.jsxs(Vi,{eyebrow:"01 · 先记今天",title:"今天吃到哪了",icon:S0,children:[C.jsx(jT,{value:t,onChange:r,options:[{value:"quick",label:"直接 kcal"},{value:"tally",label:"点选记账"}]}),t==="quick"?C.jsxs("div",{className:"mt-5",children:[C.jsx("label",{className:"text-[10px] uppercase tracking-[0.24em] text-zinc-500",children:"Lunch kcal"}),C.jsxs("div",{className:"mt-2 flex items-end gap-3",children:[C.jsx("input",{type:"number",value:o,onChange:I=>l(yn(I.target.value,0,5e3)),className:"w-36 border-b border-white/20 bg-transparent font-display text-6xl leading-none text-white outline-none focus:border-[#ffcf69]"}),C.jsx("span",{className:"pb-2 text-xs uppercase tracking-[0.2em] text-zinc-500",children:"kcal"})]}),C.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:[600,700,800,900,1e3].map(I=>C.jsx(lc,{active:o===I,onClick:()=>l(I),children:I},I))})]}):C.jsx("div",{className:"mt-5 grid gap-2 sm:grid-cols-2",children:Object.entries(N0).map(([I,G])=>C.jsx(uc,{label:G.label,meta:`每${G.step}${G.unit} · ${Math.round(pa(ui(G,G.step)))} kcal`,value:u[I]||0,unit:G.unit,step:G.step,max:G.max,onChange:se=>h(d,I,se,G.max)},I))})]}),C.jsx(Vi,{eyebrow:"02 · 选个口味",title:"今晚想吃什么",icon:A0,children:C.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-5",children:Object.entries(C0).map(([I,G])=>C.jsxs("button",{onClick:()=>x(I),className:`rounded-lg border p-3 text-left transition ${m===I?"border-[#ffcf69] bg-[#ffcf69]/12 text-white":"border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/25 hover:text-white"}`,children:[C.jsx("div",{className:"font-cjk text-sm font-semibold",children:G.short}),C.jsx("div",{className:"mt-1 text-[10px] text-zinc-500",children:G.sub})]},I))})}),C.jsx(XT,{open:N,onToggle:()=>L(!N),title:"高级配置",subtitle:"肉、油脂、水果、牛肉脂肪、目标值",children:C.jsxs("div",{className:"grid gap-5",children:[C.jsx(ps,{title:"晚餐蛋白",children:C.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries(R0).map(([I,G])=>C.jsx(cc,{active:S.includes(I),onClick:()=>g(I),title:G.short,meta:G.note},I))})}),C.jsx(ps,{title:"脂肪来源",children:C.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries(P0).map(([I,G])=>C.jsx(cc,{active:y.includes(I),onClick:()=>w(I),title:G.short,meta:`${G.f}g 脂 / ${G.unit}`,tone:"amber"},I))})}),C.jsx(ps,{title:"水果 / 酸奶",children:C.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(lr).map(([I,G])=>C.jsx(uc,{label:G.label,meta:`每${G.step}${G.unit} · C${Math.round(G.c*G.step)}`,value:R[I]||0,unit:G.unit,step:G.step,max:G.max,onChange:se=>h(v,I,se,G.max)},I))})}),C.jsxs(ps,{title:"牛肉脂肪",children:[C.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,9,13,18].map(I=>C.jsxs(lc,{active:_===I,onClick:()=>b(I),children:[I,"g"]},I))}),C.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[C.jsx("input",{type:"number",value:_,onChange:I=>b(yn(I.target.value,0,40)),className:"h-11 w-20 rounded-lg border border-white/10 bg-white/5 text-center font-mono text-lg outline-none focus:border-[#ffcf69]"}),C.jsx("span",{className:"text-xs text-zinc-500",children:"脂質 g / 100g raw · 水煮按 80%"})]})]}),C.jsxs(ps,{title:"目标值",children:[C.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[["p","蛋白","g",500],["c","碳水","g",800],["f","脂肪","g",300],["kcal","热量","",8e3]].map(([I,G,se,oe])=>C.jsx(Gr,{label:G,unit:se,value:B[I],onChange:H=>D(Z=>({...Z,[I]:yn(H,0,oe)}))},I))}),C.jsxs("button",{onClick:O,className:"mt-3 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 transition hover:border-[#ff8068]/60 hover:text-[#ff8068]",children:[C.jsx(oc,{className:"h-4 w-4"}),"重置默认"]})]})]})})]}),C.jsxs("section",{className:"space-y-6",children:[C.jsxs(Vi,{eyebrow:"03 · 今晚答案",title:"今晚就这样吃",icon:w0,children:[C.jsx("div",{className:"grid gap-2",children:e.dinnerItems.map((I,G)=>C.jsx(YT,{item:I,index:G,onTune:E},I.key))}),X&&C.jsxs("button",{onClick:U,className:"mt-3 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 transition hover:border-[#ff8068]/60 hover:text-[#ff8068]",children:[C.jsx(oc,{className:"h-4 w-4"}),"重置微调"]})]}),C.jsx(Vi,{eyebrow:"04 · 今日节奏",title:"看一眼就够",icon:E0,children:C.jsxs("div",{className:"space-y-3",children:[C.jsx(ql,{label:"蛋白",value:e.total.p,target:B.p,unit:"g",color:"#ff8068"}),C.jsx(ql,{label:"碳水",value:e.total.c,target:B.c,unit:"g",color:"#ffcf69"}),C.jsx(ql,{label:"脂肪",value:e.total.f,target:B.f,unit:"g",color:"#a8d46f"}),C.jsx(ql,{label:"热量",value:e.total.kcal,target:B.kcal,unit:"kcal",color:"#7bd6d0"})]})})]})]})}function zT(s){const{model:e,targets:t,setTargets:r,tdee:o,setTdee:l,pre:u,setPre:d,setMapQty:h,drinkKey:m,setDrinkKey:x,drinkMl:S,setDrinkMl:g,saltG:y,setSaltG:w,foodK:R,setFoodK:v}=s,_=e.potassium>=e.sodium;return C.jsxs("main",{className:"grid gap-6 lg:grid-cols-[1fr_1fr]",children:[C.jsxs(Vi,{eyebrow:"今日账本",title:"吃进去的东西",icon:S0,children:[C.jsx(so,{label:"午餐",macro:e.lunch}),C.jsx(so,{label:"训练前",macro:e.pre}),C.jsx(so,{label:"饮料/电解质",macro:e.drink}),C.jsx(so,{label:"零食加餐",macro:e.snack}),C.jsx(so,{label:"晚餐",macro:e.dinner,strong:!0})]}),C.jsx(Vi,{eyebrow:"目标设置",title:"目标和消耗",icon:T0,children:C.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-5",children:[[["p","蛋白","g",500],["c","碳水","g",800],["f","脂肪","g",300],["kcal","热量","",8e3]].map(([b,N,L,B])=>C.jsx(Gr,{label:N,unit:L,value:t[b],onChange:D=>r(O=>({...O,[b]:yn(D,0,B)}))},b)),C.jsx(Gr,{label:"TDEE",unit:"",value:o,onChange:b=>l(yn(b,0,9e3))})]})}),C.jsx(Vi,{eyebrow:"训练前",title:"垫一口也算进去",icon:y0,children:C.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(ua).map(([b,N])=>C.jsx(uc,{label:N.label,meta:`每${N.step}${N.unit} · ${Math.round(pa(ui(N,N.step)))} kcal`,value:u[b]||0,unit:N.unit,step:N.step,max:N.max,onChange:L=>h(d,b,L,N.max)},b))})}),C.jsxs(Vi,{eyebrow:"电解质",title:"钾钠别太偏",icon:pT,children:[C.jsx("div",{className:"grid grid-cols-3 gap-2",children:Object.entries(Wr).map(([b,N])=>C.jsx(cc,{active:m===b,onClick:()=>x(b),title:N.label,meta:N.sub,tone:"green"},b))}),C.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[C.jsx(Gr,{label:"饮料",unit:"ml",value:S,onChange:b=>g(yn(b,0,2e3))}),C.jsx(Gr,{label:"盐",unit:"g",value:y,onChange:b=>w(yn(b,0,20))}),C.jsx(Gr,{label:"食物钾",unit:"mg",value:R,onChange:b=>v(yn(b,0,8e3))})]}),C.jsxs("div",{className:`mt-4 rounded-lg border p-4 ${_?"border-[#a8d46f]/30 bg-[#a8d46f]/10":"border-[#ff8068]/30 bg-[#ff8068]/10"}`,children:[C.jsxs("div",{className:"flex items-center justify-between gap-3",children:[C.jsx("span",{className:"text-sm text-zinc-300",children:"K / Na"}),C.jsx("span",{className:_?"text-[#a8d46f]":"text-[#ff8068]",children:_?"平衡":"钾偏低"})]}),C.jsxs("div",{className:"mt-2 text-xs text-zinc-500",children:["钾 ",Math.round(e.potassium)," mg · 钠 ",Math.round(e.sodium)," mg"]})]})]})]})}function VT({model:s,shopDays:e,setShopDays:t}){return C.jsxs("main",{className:"grid gap-6 lg:grid-cols-[0.85fr_1.15fr]",children:[C.jsxs("section",{className:"overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]",children:[C.jsx("img",{src:Yd("shop-basket.jpg"),alt:"weekly grocery basket",className:"h-[360px] w-full object-cover"}),C.jsxs("div",{className:"p-4",children:[C.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#ffcf69]",children:"备货模式"}),C.jsxs("h2",{className:"mt-1 font-display text-4xl",children:["按 ",e," 天备货"]}),C.jsx("div",{className:"mt-4 flex gap-2",children:[3,5,7,10].map(r=>C.jsxs(lc,{active:e===r,onClick:()=>t(r),children:[r," 天"]},r))})]})]}),C.jsx(Vi,{eyebrow:"买这些就行",title:"采购清单",icon:tT,children:C.jsx("div",{className:"grid gap-2",children:s.shopping.map(r=>C.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-black/25 px-3 py-3",children:[C.jsxs("div",{children:[C.jsx("div",{className:"font-cjk text-sm text-white",children:r.name}),C.jsxs("div",{className:"mt-1 text-xs text-zinc-500",children:["每天 ",nn(r.qty),r.unit]})]}),C.jsxs("div",{className:"rounded-md bg-white px-2.5 py-1 font-mono text-sm text-zinc-950",children:[r.weeklyQty,r.unit]})]},r.key))})})]})}function GT({cheat:s,setCheat:e,cheatTotal:t,cheatSurplus:r,tdee:o,dayKcal:l}){const u=(d,h)=>{e(m=>{const x={...m},S=yn(h,0,9);return S>0?x[d]=S:delete x[d],x})};return C.jsxs("main",{className:"grid gap-6 lg:grid-cols-[1fr_0.9fr]",children:[C.jsx(Vi,{eyebrow:"放松一下",title:"想吃也能算",icon:M0,children:C.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:L0.map(d=>C.jsx("div",{className:"rounded-lg border border-white/10 bg-white/[0.04] p-3",children:C.jsxs("div",{className:"flex items-center justify-between gap-3",children:[C.jsxs("div",{children:[C.jsx("div",{className:"font-cjk text-sm text-white",children:d.label}),C.jsxs("div",{className:"mt-1 text-xs text-zinc-500",children:[d.kcal," kcal"]})]}),C.jsx(qT,{value:s[d.id]||0,onChange:h=>u(d.id,h)})]})},d.id))})}),C.jsxs("section",{className:"overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]",children:[C.jsx("img",{src:qd("cheat.jpg"),alt:"cheat meal",className:"h-56 w-full object-cover"}),C.jsxs("div",{className:"p-5",children:[C.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#ff8068]",children:"吃完大概这样"}),C.jsx("div",{className:"mt-2 font-display text-6xl text-white",children:t}),C.jsx("div",{className:"text-sm text-zinc-500",children:"放松热量"}),C.jsxs("div",{className:"mt-5 grid grid-cols-3 gap-2",children:[C.jsx(Of,{label:"今日总摄入",value:Math.round(l+t)}),C.jsx(Of,{label:"TDEE",value:o}),C.jsx(Of,{label:"盈余",value:(r>=0?"+":"")+r,hot:r>0})]}),C.jsxs("button",{onClick:()=>e({}),className:"mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 transition hover:border-[#ff8068]/60 hover:text-[#ff8068]",children:[C.jsx(oc,{className:"h-4 w-4"}),"清空"]})]})]})]})}function HT({open:s,setOpen:e,pre:t,setPre:r,setMapQty:o,drinkKey:l,setDrinkKey:u,drinkMl:d,setDrinkMl:h,model:m}){if(!s)return null;const x=I0(t,l,d),S=U0(t,l,d),g=Oi(m.pre,m.drink),y=()=>{r({}),u("none"),h(0)},w=()=>{r({banana:1}),u("tomato"),h(400)},R=()=>{r({pineapple:1}),u("tomato"),h(400)},v=_=>{u(_),_==="none"?h(0):d<=0&&h(400)};return C.jsxs("div",{className:"fixed inset-0 z-[70]",children:[C.jsx("button",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>e(!1),"aria-label":"关闭补给"}),C.jsxs("aside",{className:"absolute inset-y-0 right-0 flex w-[min(460px,94vw)] flex-col border-l border-white/10 bg-[#101312] shadow-2xl",children:[C.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 p-4",children:[C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsx("img",{src:qd("pre.jpg"),alt:"",className:"h-12 w-12 rounded-lg object-cover"}),C.jsxs("div",{children:[C.jsx("div",{className:"font-display text-xl text-white",children:"补给开关"}),C.jsx("div",{className:"text-[10px] uppercase tracking-[0.22em] text-zinc-500",children:"训练前吃什么喝什么"})]})]}),C.jsx("button",{onClick:()=>e(!1),className:"grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-400 hover:text-white","aria-label":"关闭",children:C.jsx(b0,{className:"h-4 w-4"})})]}),C.jsxs("div",{className:"flex-1 overflow-y-auto p-4",children:[C.jsxs("div",{className:`rounded-lg border p-4 ${x?"border-[#a8d46f]/30 bg-[#a8d46f]/10":"border-white/10 bg-white/[0.045]"}`,children:[C.jsxs("div",{className:"flex items-center justify-between gap-3",children:[C.jsx("span",{className:"text-[10px] uppercase tracking-[0.24em] text-zinc-500",children:"当前状态"}),C.jsx("span",{className:x?"text-[#a8d46f]":"text-zinc-400",children:x?"已补给":"不补给"})]}),C.jsx("div",{className:"mt-2 text-sm leading-6 text-zinc-200",children:S}),C.jsxs("div",{className:"mt-2 font-mono text-xs text-zinc-500",children:["P",nn(g.p)," C",nn(g.c)," F",nn(g.f)," · ",Math.round(g.kcal)," kcal"]})]}),C.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[C.jsxs("button",{onClick:y,className:"rounded-lg border border-white/10 bg-white/[0.04] p-3 text-left transition hover:border-[#ff8068]/50",children:[C.jsx("div",{className:"font-cjk text-sm font-semibold text-white",children:"一键不补给"}),C.jsx("div",{className:"mt-1 text-[10px] text-zinc-500",children:"不吃也不喝"})]}),C.jsxs("button",{onClick:w,className:"rounded-lg border border-[#ffcf69]/30 bg-[#ffcf69]/10 p-3 text-left transition hover:-translate-y-0.5",children:[C.jsx("div",{className:"font-cjk text-sm font-semibold text-white",children:"轻补给"}),C.jsx("div",{className:"mt-1 text-[10px] text-zinc-500",children:"香蕉 + 番茄汁"})]}),C.jsxs("button",{onClick:R,className:"rounded-lg border border-[#a8d46f]/30 bg-[#a8d46f]/10 p-3 text-left transition hover:-translate-y-0.5",children:[C.jsx("div",{className:"font-cjk text-sm font-semibold text-white",children:"菠萝盒"}),C.jsx("div",{className:"mt-1 text-[10px] text-zinc-500",children:"240g + 番茄汁"})]})]}),C.jsxs("div",{className:"mt-5 grid gap-5",children:[C.jsx(ps,{title:"吃什么",children:C.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(ua).map(([_,b])=>C.jsx(uc,{label:b.label,meta:`每${b.step}${b.unit} · ${Math.round(pa(ui(b,b.step)))} kcal`,value:t[_]||0,unit:b.unit,step:b.step,max:b.max,onChange:N=>o(r,_,N,b.max)},_))})}),C.jsxs(ps,{title:"喝什么",children:[C.jsx("div",{className:"grid grid-cols-3 gap-2",children:Object.entries(Wr).map(([_,b])=>C.jsx(cc,{active:l===_,onClick:()=>v(_),title:b.label,meta:b.sub,tone:"green"},_))}),C.jsx("div",{className:"mt-3 grid grid-cols-3 gap-2",children:[200,400,600].map(_=>C.jsxs(lc,{active:d===_,onClick:()=>h(_),children:[_,"ml"]},_))}),C.jsx("div",{className:"mt-3",children:C.jsx(Gr,{label:"饮料",unit:"ml",value:d,onChange:_=>h(yn(_,0,2e3))})})]})]})]})]})]})}function WT({open:s,setOpen:e,snack:t,setSnack:r,active:o,dinnerSummary:l}){if(!s)return null;const u=(d,h)=>{r(m=>({...m,[d]:d==="name"?h:yn(h,0,d==="kcal"?5e3:500)}))};return C.jsxs("div",{className:"fixed inset-0 z-[70]",children:[C.jsx("button",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>e(!1),"aria-label":"关闭零食加餐"}),C.jsxs("aside",{className:"absolute inset-y-0 right-0 flex w-[min(430px,94vw)] flex-col border-l border-white/10 bg-[#111311] shadow-2xl",children:[C.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 p-4",children:[C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsx("img",{src:Yd("snack-scanner.jpg"),alt:"",className:"h-12 w-12 rounded-lg object-cover"}),C.jsxs("div",{children:[C.jsx("div",{className:"font-display text-xl text-white",children:"零食加餐"}),C.jsx("div",{className:"text-[10px] uppercase tracking-[0.22em] text-zinc-500",children:"自己填一下也行"})]})]}),C.jsx("button",{onClick:()=>e(!1),className:"grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-400 hover:text-white","aria-label":"关闭",children:C.jsx(b0,{className:"h-4 w-4"})})]}),C.jsxs("div",{className:"flex-1 overflow-y-auto p-4",children:[C.jsx("label",{className:"text-[10px] uppercase tracking-[0.22em] text-zinc-500",children:"名称"}),C.jsx("input",{value:t.name,onChange:d=>u("name",d.target.value),className:"mt-2 h-11 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white outline-none focus:border-[#ffcf69]"}),C.jsx("div",{className:"mt-4 grid grid-cols-4 gap-2",children:[["kcal","热量"],["p","蛋白"],["c","碳水"],["f","脂肪"]].map(([d,h])=>C.jsx(Gr,{label:h,unit:d==="kcal"?"":"g",value:t[d],onChange:m=>u(d,m)},d))}),C.jsxs("div",{className:"mt-5 rounded-lg border border-[#ffcf69]/20 bg-[#ffcf69]/10 p-4",children:[C.jsx("div",{className:"text-[10px] uppercase tracking-[0.22em] text-[#ffcf69]",children:"晚餐会跟着收口"}),C.jsxs("div",{className:"mt-2 text-sm leading-6 text-zinc-300",children:[l||"晚餐已砍到很低"," · 全天 ",Math.round(t.kcal)," kcal snack"]})]}),o&&C.jsxs("button",{onClick:()=>r({name:"手动加餐",p:0,c:0,f:0,kcal:0}),className:"mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 hover:text-[#ff8068]",children:[C.jsx(oc,{className:"h-4 w-4"}),"清除加餐"]})]})]})]})}function Vi({eyebrow:s,title:e,icon:t,children:r}){return C.jsxs("section",{className:"rounded-lg border border-white/10 bg-white/[0.055] p-4 shadow-[0_24px_80px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-5",children:[C.jsxs("div",{className:"mb-4 flex items-start justify-between gap-4",children:[C.jsxs("div",{children:[C.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#ffcf69]",children:s}),C.jsx("h2",{className:"mt-1 font-display text-2xl text-white",children:e})]}),t&&C.jsx("span",{className:"grid h-9 w-9 place-items-center rounded-lg bg-white text-zinc-950",children:C.jsx(t,{className:"h-4 w-4"})})]}),r]})}function Ff({icon:s,label:e,sub:t,onClick:r}){const o=r?"button":"div";return C.jsxs(o,{onClick:r,className:"rounded-lg border border-white/10 bg-white/[0.06] px-3 py-3 text-left backdrop-blur-xl transition hover:border-white/25",children:[C.jsx(s,{className:"mb-2 h-4 w-4 text-[#ffcf69]"}),C.jsx("div",{className:"text-sm text-white",children:e}),t&&C.jsx("div",{className:"mt-0.5 text-[10px] uppercase tracking-[0.18em] text-zinc-500",children:t})]})}function Xl({label:s,value:e,target:t,unit:r}){const o=e-t,l=Math.abs(o)<=(r?Math.max(8,t*.08):Math.max(80,t*.05));return C.jsxs("div",{className:"rounded-lg bg-white/10 p-2 backdrop-blur",children:[C.jsx("div",{className:"text-[10px] uppercase tracking-[0.16em] text-zinc-400",children:s}),C.jsx("div",{className:"mt-1 font-mono text-lg text-white",children:Math.round(e)}),C.jsxs("div",{className:`text-[10px] ${l?"text-[#a8d46f]":"text-[#ffcf69]"}`,children:[o>=0?"+":"",Math.round(o),r]})]})}function jT({value:s,onChange:e,options:t}){return C.jsx("div",{className:"grid grid-cols-2 rounded-lg bg-black/25 p-1",children:t.map(r=>C.jsx("button",{onClick:()=>e(r.value),className:`rounded-md px-3 py-2 text-sm transition ${s===r.value?"bg-white text-zinc-950":"text-zinc-400 hover:text-white"}`,children:r.label},r.value))})}function lc({active:s,onClick:e,children:t}){return C.jsx("button",{onClick:e,className:`rounded-lg border px-3 py-2 text-xs transition ${s?"border-[#ffcf69] bg-[#ffcf69]/15 text-[#ffcf69]":"border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/25 hover:text-white"}`,children:t})}function ps({title:s,children:e}){return C.jsxs("div",{children:[C.jsx("div",{className:"mb-2 text-[10px] uppercase tracking-[0.24em] text-zinc-500",children:s}),e]})}function cc({active:s,onClick:e,title:t,meta:r,tone:o="gold"}){const l=o==="green"?"#a8d46f":o==="amber"?"#ffb55c":"#ffcf69";return C.jsxs("button",{onClick:e,className:"rounded-lg border p-3 text-left transition hover:-translate-y-0.5",style:{borderColor:s?l:"rgba(255,255,255,0.10)",background:s?`${l}1f`:"rgba(255,255,255,0.045)"},children:[C.jsx("div",{className:"font-cjk text-sm font-semibold text-white",children:t}),C.jsx("div",{className:"mt-1 text-[10px] text-zinc-500",children:r})]})}function XT({open:s,onToggle:e,title:t,subtitle:r,children:o}){return C.jsxs("section",{className:"rounded-lg border border-white/10 bg-white/[0.045] backdrop-blur-xl",children:[C.jsxs("button",{onClick:e,className:"flex w-full items-center justify-between gap-3 p-4 text-left",children:[C.jsxs("span",{children:[C.jsxs("span",{className:"flex items-center gap-2 font-display text-2xl text-white",children:[C.jsx(vT,{className:"h-4 w-4 text-[#ffcf69]"}),t]}),C.jsx("span",{className:"mt-1 block text-xs text-zinc-500",children:r})]}),C.jsx(sT,{className:`h-5 w-5 text-zinc-500 transition ${s?"rotate-180":""}`})]}),s&&C.jsx("div",{className:"border-t border-white/10 p-4",children:o})]})}function uc({label:s,meta:e,value:t,unit:r,step:o,max:l,onChange:u}){return C.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-black/20 p-3",children:[C.jsxs("div",{className:"min-w-0",children:[C.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-white",children:s}),C.jsx("div",{className:"mt-1 truncate text-[10px] text-zinc-500",children:e})]}),C.jsxs("div",{className:"flex items-center gap-1",children:[C.jsx(fa,{label:`减少${s}`,onClick:()=>u(t-o),icon:jd}),C.jsxs("span",{className:"w-14 text-center font-mono text-sm text-white",children:[nn(t),t>0&&r==="g"?"g":""]}),C.jsx(fa,{label:`增加${s}`,onClick:()=>u(Math.min(l,t+o)),icon:Xd})]})]})}function qT({value:s,onChange:e}){return C.jsxs("div",{className:"flex items-center gap-1",children:[C.jsx(fa,{label:"减少",onClick:()=>e(s-1),icon:jd}),C.jsx("span",{className:"w-7 text-center font-mono text-sm text-white",children:s}),C.jsx(fa,{label:"增加",onClick:()=>e(s+1),icon:Xd})]})}function fa({label:s,onClick:e,icon:t}){return C.jsx("button",{onClick:e,"aria-label":s,className:"grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-400 transition hover:border-[#ffcf69]/60 hover:text-[#ffcf69]",children:C.jsx(t,{className:"h-4 w-4"})})}function Gr({label:s,unit:e,value:t,onChange:r}){return C.jsxs("label",{className:"block rounded-lg border border-white/10 bg-black/20 p-3",children:[C.jsx("span",{className:"block text-[10px] uppercase tracking-[0.18em] text-zinc-500",children:s}),C.jsxs("span",{className:"mt-1 flex items-baseline gap-1",children:[C.jsx("input",{type:"number",value:nn(t,1),onChange:o=>r(o.target.value),className:"min-w-0 flex-1 bg-transparent font-mono text-lg text-white outline-none"}),C.jsx("span",{className:"text-[10px] text-zinc-500",children:e})]})]})}function YT({item:s,index:e,onTune:t}){const o={red:"#ff8068",amber:"#ffb55c",gold:"#ffcf69",green:"#a8d46f"}[s.tone]||"#ffffff",l=s.adjustment>0?`+${nn(s.adjustment)}`:nn(s.adjustment);return C.jsxs("div",{"data-dinner-tune-row":!0,className:"grid grid-cols-[38px_1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-3",children:[C.jsx("span",{className:"grid h-9 w-9 place-items-center rounded-lg font-mono text-xs text-zinc-950",style:{backgroundColor:o},children:String(e+1).padStart(2,"0")}),C.jsxs("div",{className:"min-w-0",children:[C.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-white",children:s.name}),C.jsxs("div",{className:"mt-1 truncate text-[10px] text-zinc-500",children:["P",nn(s.macro.p)," · C",nn(s.macro.c)," · F",nn(s.macro.f),s.adjustment!==0&&C.jsxs("span",{className:"text-[#ffcf69]",children:[" · 调整 ",l,s.unit]})]})]}),C.jsxs("div",{className:"text-right",children:[C.jsx("div",{className:"font-display text-2xl leading-none text-white",children:nn(s.qty)}),C.jsx("div",{className:"mt-1 text-[10px] uppercase tracking-[0.16em] text-zinc-500",children:s.unit}),t&&C.jsxs("div",{className:"mt-2 flex items-center justify-end gap-1",children:[C.jsx(fa,{label:`减少${s.name}`,onClick:()=>t(s,-s.step),icon:jd}),C.jsx(fa,{label:`增加${s.name}`,onClick:()=>t(s,s.step),icon:Xd})]})]})]})}function ql({label:s,value:e,target:t,unit:r,color:o}){const l=Math.min(135,e/Math.max(1,t)*100),u=Math.round(e-t);return C.jsxs("div",{children:[C.jsxs("div",{className:"mb-2 flex items-center justify-between gap-3",children:[C.jsx("span",{className:"text-sm text-zinc-300",children:s}),C.jsxs("span",{className:"font-mono text-xs text-zinc-500",children:[Math.round(e)," / ",t," ",r]})]}),C.jsx("div",{className:"relative h-2 overflow-hidden rounded-full bg-white/10",children:C.jsx("div",{className:"h-full rounded-full transition-all duration-700",style:{width:`${l}%`,backgroundColor:o}})}),C.jsxs("div",{className:"mt-1 text-right text-[10px] text-zinc-500",children:[u>=0?"+":"",u,r]})]})}function so({label:s,macro:e,strong:t}){return C.jsxs("div",{className:`grid grid-cols-[1fr_auto] items-center gap-3 border-t border-white/10 py-3 first:border-t-0 ${t?"text-white":"text-zinc-300"}`,children:[C.jsx("div",{className:"font-cjk text-sm",children:s}),C.jsxs("div",{className:"font-mono text-xs text-zinc-500",children:["P",nn(e.p)," C",nn(e.c)," F",nn(e.f)," · ",Math.round(pa(e))," kcal"]})]})}function Of({label:s,value:e,hot:t}){return C.jsxs("div",{className:`rounded-lg border p-3 ${t?"border-[#ff8068]/30 bg-[#ff8068]/10":"border-white/10 bg-black/20"}`,children:[C.jsx("div",{className:"text-[10px] text-zinc-500",children:s}),C.jsx("div",{className:`mt-1 font-mono text-lg ${t?"text-[#ff8068]":"text-white"}`,children:e})]})}Tx.createRoot(document.getElementById("root")).render(C.jsx(_x.StrictMode,{children:C.jsx(OT,{})}));
