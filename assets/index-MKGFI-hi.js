(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Ng(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Xu={exports:{}},Ya={},qu={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function px(){if(mm)return St;mm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function g(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function v(O,ee,Le){this.props=O,this.context=ee,this.refs=C,this.updater=Le||y}v.prototype.isReactComponent={},v.prototype.setState=function(O,ee){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ee,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=v.prototype;function b(O,ee,Le){this.props=O,this.context=ee,this.refs=C,this.updater=Le||y}var L=b.prototype=new _;L.constructor=b,w(L,v.prototype),L.isPureReactComponent=!0;var D=Array.isArray,z=Object.prototype.hasOwnProperty,I={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function M(O,ee,Le){var Fe,De={},ae=null,ve=null;if(ee!=null)for(Fe in ee.ref!==void 0&&(ve=ee.ref),ee.key!==void 0&&(ae=""+ee.key),ee)z.call(ee,Fe)&&!F.hasOwnProperty(Fe)&&(De[Fe]=ee[Fe]);var me=arguments.length-2;if(me===1)De.children=Le;else if(1<me){for(var Ie=Array(me),Ze=0;Ze<me;Ze++)Ie[Ze]=arguments[Ze+2];De.children=Ie}if(O&&O.defaultProps)for(Fe in me=O.defaultProps,me)De[Fe]===void 0&&(De[Fe]=me[Fe]);return{$$typeof:s,type:O,key:ae,ref:ve,props:De,_owner:I.current}}function N(O,ee){return{$$typeof:s,type:O.type,key:ee,ref:O.ref,props:O.props,_owner:O._owner}}function W(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function k(O){var ee={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Le){return ee[Le]})}var Y=/\/+/g;function re(O,ee){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):ee.toString(36)}function le(O,ee,Le,Fe,De){var ae=typeof O;(ae==="undefined"||ae==="boolean")&&(O=null);var ve=!1;if(O===null)ve=!0;else switch(ae){case"string":case"number":ve=!0;break;case"object":switch(O.$$typeof){case s:case e:ve=!0}}if(ve)return ve=O,De=De(ve),O=Fe===""?"."+re(ve,0):Fe,D(De)?(Le="",O!=null&&(Le=O.replace(Y,"$&/")+"/"),le(De,ee,Le,"",function(Ze){return Ze})):De!=null&&(W(De)&&(De=N(De,Le+(!De.key||ve&&ve.key===De.key?"":(""+De.key).replace(Y,"$&/")+"/")+O)),ee.push(De)),1;if(ve=0,Fe=Fe===""?".":Fe+":",D(O))for(var me=0;me<O.length;me++){ae=O[me];var Ie=Fe+re(ae,me);ve+=le(ae,ee,Le,Ie,De)}else if(Ie=g(O),typeof Ie=="function")for(O=Ie.call(O),me=0;!(ae=O.next()).done;)ae=ae.value,Ie=Fe+re(ae,me++),ve+=le(ae,ee,Le,Ie,De);else if(ae==="object")throw ee=String(O),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return ve}function H(O,ee,Le){if(O==null)return O;var Fe=[],De=0;return le(O,Fe,"","",function(ae){return ee.call(Le,ae,De++)}),Fe}function Z(O){if(O._status===-1){var ee=O._result;ee=ee(),ee.then(function(Le){(O._status===0||O._status===-1)&&(O._status=1,O._result=Le)},function(Le){(O._status===0||O._status===-1)&&(O._status=2,O._result=Le)}),O._status===-1&&(O._status=0,O._result=ee)}if(O._status===1)return O._result.default;throw O._result}var X={current:null},$={transition:null},ce={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:$,ReactCurrentOwner:I};function ue(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:H,forEach:function(O,ee,Le){H(O,function(){ee.apply(this,arguments)},Le)},count:function(O){var ee=0;return H(O,function(){ee++}),ee},toArray:function(O){return H(O,function(ee){return ee})||[]},only:function(O){if(!W(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},St.Component=v,St.Fragment=t,St.Profiler=o,St.PureComponent=b,St.StrictMode=r,St.Suspense=h,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,St.act=ue,St.cloneElement=function(O,ee,Le){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Fe=w({},O.props),De=O.key,ae=O.ref,ve=O._owner;if(ee!=null){if(ee.ref!==void 0&&(ae=ee.ref,ve=I.current),ee.key!==void 0&&(De=""+ee.key),O.type&&O.type.defaultProps)var me=O.type.defaultProps;for(Ie in ee)z.call(ee,Ie)&&!F.hasOwnProperty(Ie)&&(Fe[Ie]=ee[Ie]===void 0&&me!==void 0?me[Ie]:ee[Ie])}var Ie=arguments.length-2;if(Ie===1)Fe.children=Le;else if(1<Ie){me=Array(Ie);for(var Ze=0;Ze<Ie;Ze++)me[Ze]=arguments[Ze+2];Fe.children=me}return{$$typeof:s,type:O.type,key:De,ref:ae,props:Fe,_owner:ve}},St.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},St.createElement=M,St.createFactory=function(O){var ee=M.bind(null,O);return ee.type=O,ee},St.createRef=function(){return{current:null}},St.forwardRef=function(O){return{$$typeof:d,render:O}},St.isValidElement=W,St.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:Z}},St.memo=function(O,ee){return{$$typeof:m,type:O,compare:ee===void 0?null:ee}},St.startTransition=function(O){var ee=$.transition;$.transition={};try{O()}finally{$.transition=ee}},St.unstable_act=ue,St.useCallback=function(O,ee){return X.current.useCallback(O,ee)},St.useContext=function(O){return X.current.useContext(O)},St.useDebugValue=function(){},St.useDeferredValue=function(O){return X.current.useDeferredValue(O)},St.useEffect=function(O,ee){return X.current.useEffect(O,ee)},St.useId=function(){return X.current.useId()},St.useImperativeHandle=function(O,ee,Le){return X.current.useImperativeHandle(O,ee,Le)},St.useInsertionEffect=function(O,ee){return X.current.useInsertionEffect(O,ee)},St.useLayoutEffect=function(O,ee){return X.current.useLayoutEffect(O,ee)},St.useMemo=function(O,ee){return X.current.useMemo(O,ee)},St.useReducer=function(O,ee,Le){return X.current.useReducer(O,ee,Le)},St.useRef=function(O){return X.current.useRef(O)},St.useState=function(O){return X.current.useState(O)},St.useSyncExternalStore=function(O,ee,Le){return X.current.useSyncExternalStore(O,ee,Le)},St.useTransition=function(){return X.current.useTransition()},St.version="18.3.1",St}var gm;function Pd(){return gm||(gm=1,qu.exports=px()),qu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function mx(){if(_m)return Ya;_m=1;var s=Pd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,m){var x,S={},g=null,y=null;m!==void 0&&(g=""+m),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(y=h.ref);for(x in h)r.call(h,x)&&!l.hasOwnProperty(x)&&(S[x]=h[x]);if(d&&d.defaultProps)for(x in h=d.defaultProps,h)S[x]===void 0&&(S[x]=h[x]);return{$$typeof:e,type:d,key:g,ref:y,props:S,_owner:o.current}}return Ya.Fragment=t,Ya.jsx=u,Ya.jsxs=u,Ya}var xm;function gx(){return xm||(xm=1,Xu.exports=mx()),Xu.exports}var R=gx(),Ct=Pd();const _x=Ng(Ct);var xl={},Yu={exports:{}},Hn={},$u={exports:{}},Ku={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function xx(){return vm||(vm=1,(function(s){function e($,ce){var ue=$.length;$.push(ce);e:for(;0<ue;){var O=ue-1>>>1,ee=$[O];if(0<o(ee,ce))$[O]=ce,$[ue]=ee,ue=O;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var ce=$[0],ue=$.pop();if(ue!==ce){$[0]=ue;e:for(var O=0,ee=$.length,Le=ee>>>1;O<Le;){var Fe=2*(O+1)-1,De=$[Fe],ae=Fe+1,ve=$[ae];if(0>o(De,ue))ae<ee&&0>o(ve,De)?($[O]=ve,$[ae]=ue,O=ae):($[O]=De,$[Fe]=ue,O=Fe);else if(ae<ee&&0>o(ve,ue))$[O]=ve,$[ae]=ue,O=ae;else break e}}return ce}function o($,ce){var ue=$.sortIndex-ce.sortIndex;return ue!==0?ue:$.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],m=[],x=1,S=null,g=3,y=!1,w=!1,C=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L($){for(var ce=t(m);ce!==null;){if(ce.callback===null)r(m);else if(ce.startTime<=$)r(m),ce.sortIndex=ce.expirationTime,e(h,ce);else break;ce=t(m)}}function D($){if(C=!1,L($),!w)if(t(h)!==null)w=!0,Z(z);else{var ce=t(m);ce!==null&&X(D,ce.startTime-$)}}function z($,ce){w=!1,C&&(C=!1,_(M),M=-1),y=!0;var ue=g;try{for(L(ce),S=t(h);S!==null&&(!(S.expirationTime>ce)||$&&!k());){var O=S.callback;if(typeof O=="function"){S.callback=null,g=S.priorityLevel;var ee=O(S.expirationTime<=ce);ce=s.unstable_now(),typeof ee=="function"?S.callback=ee:S===t(h)&&r(h),L(ce)}else r(h);S=t(h)}if(S!==null)var Le=!0;else{var Fe=t(m);Fe!==null&&X(D,Fe.startTime-ce),Le=!1}return Le}finally{S=null,g=ue,y=!1}}var I=!1,F=null,M=-1,N=5,W=-1;function k(){return!(s.unstable_now()-W<N)}function Y(){if(F!==null){var $=s.unstable_now();W=$;var ce=!0;try{ce=F(!0,$)}finally{ce?re():(I=!1,F=null)}}else I=!1}var re;if(typeof b=="function")re=function(){b(Y)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,H=le.port2;le.port1.onmessage=Y,re=function(){H.postMessage(null)}}else re=function(){v(Y,0)};function Z($){F=$,I||(I=!0,re())}function X($,ce){M=v(function(){$(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function($){$.callback=null},s.unstable_continueExecution=function(){w||y||(w=!0,Z(z))},s.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<$?Math.floor(1e3/$):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function($){switch(g){case 1:case 2:case 3:var ce=3;break;default:ce=g}var ue=g;g=ce;try{return $()}finally{g=ue}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function($,ce){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ue=g;g=$;try{return ce()}finally{g=ue}},s.unstable_scheduleCallback=function($,ce,ue){var O=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?O+ue:O):ue=O,$){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=ue+ee,$={id:x++,callback:ce,priorityLevel:$,startTime:ue,expirationTime:ee,sortIndex:-1},ue>O?($.sortIndex=ue,e(m,$),t(h)===null&&$===t(m)&&(C?(_(M),M=-1):C=!0,X(D,ue-O))):($.sortIndex=ee,e(h,$),w||y||(w=!0,Z(z))),$},s.unstable_shouldYield=k,s.unstable_wrapCallback=function($){var ce=g;return function(){var ue=g;g=ce;try{return $.apply(this,arguments)}finally{g=ue}}}})(Ku)),Ku}var Sm;function vx(){return Sm||(Sm=1,$u.exports=xx()),$u.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function Sx(){if(ym)return Hn;ym=1;var s=Pd(),e=vx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},S={};function g(n){return h.call(S,n)?!0:h.call(x,n)?!1:m.test(n)?S[n]=!0:(x[n]=!0,!1)}function y(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||y(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,f,p,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=T}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,b);v[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,b);v[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,b);v[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,c){var f=v.hasOwnProperty(i)?v[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,f,c)&&(a=null),c||f===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),I=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),k=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),$=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Object.assign,O;function ee(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Le=!1;function Fe(n,i){if(!n||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var c=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){c=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){c=oe}n()}}catch(oe){if(oe&&c&&typeof oe.stack=="string"){for(var f=oe.stack.split(`
`),p=c.stack.split(`
`),T=f.length-1,U=p.length-1;1<=T&&0<=U&&f[T]!==p[U];)U--;for(;1<=T&&0<=U;T--,U--)if(f[T]!==p[U]){if(T!==1||U!==1)do if(T--,U--,0>U||f[T]!==p[U]){var G=`
`+f[T].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=T&&0<=U);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ee(n):""}function De(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=Fe(n.type,!1),n;case 11:return n=Fe(n.type.render,!1),n;case 1:return n=Fe(n.type,!0),n;default:return""}}function ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case I:return"Portal";case N:return"Profiler";case M:return"StrictMode";case re:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case W:return(n._context.displayName||"Context")+".Provider";case Y:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case H:return i=n.displayName||null,i!==null?i:ae(n.type)||"Memo";case Z:i=n._payload,n=n._init;try{return ae(n(i))}catch{}}return null}function ve(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(i);case 8:return i===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=Ie(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,p.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ge(n){n._valueTracker||(n._valueTracker=Ze(n))}function Ft(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ie(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function At(n,i){var a=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function It(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function Wt(n,i){ft(n,i);var a=me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?mt(n,i.type,a):i.hasOwnProperty("defaultValue")&&mt(n,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Vt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function mt(n,i,a){(i!=="number"||ut(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var B=Array.isArray;function xt(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+me(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function nt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Mt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(B(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:me(a)}}function Pe(n,i){var a=me(i.value),c=me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Et(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function P(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?P(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var K,he=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ge(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Re.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function fe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function pe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=fe(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Ue=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Be(n,i){if(i){if(Ue[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ae(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ye=null;function Je(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rt=null,pt=null,V=null;function Te(n){if(n=Da(n)){if(typeof rt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Do(i),rt(n.stateNode,n.type,i))}}function de(n){pt?V?V.push(n):V=[n]:pt=n}function ke(){if(pt){var n=pt,i=V;if(V=pt=null,Te(n),i)for(n=0;n<i.length;n++)Te(i[n])}}function be(n,i){return n(i)}function _e(){}var je=!1;function st(n,i,a){if(je)return n(i,a);je=!0;try{return be(n,i,a)}finally{je=!1,(pt!==null||V!==null)&&(_e(),ke())}}function Ot(n,i){var a=n.stateNode;if(a===null)return null;var c=Do(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Tt=!1;if(d)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){Tt=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{Tt=!1}function ot(n,i,a,c,f,p,T,U,G){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(a,oe)}catch(Se){this.onError(Se)}}var ht=!1,Mn=null,qn=!1,_s=null,Wi={onError:function(n){ht=!0,Mn=n}};function da(n,i,a,c,f,p,T,U,G){ht=!1,Mn=null,ot.apply(Wi,arguments)}function go(n,i,a,c,f,p,T,U,G){if(da.apply(this,arguments),ht){if(ht){var oe=Mn;ht=!1,Mn=null}else throw Error(t(198));qn||(qn=!0,_s=oe)}}function Ai(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Hr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ha(n){if(Ai(n)!==n)throw Error(t(188))}function xs(n){var i=n.alternate;if(!i){if(i=Ai(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var p=f.alternate;if(p===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===a)return ha(f),n;if(p===c)return ha(f),i;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=p;else{for(var T=!1,U=f.child;U;){if(U===a){T=!0,a=f,c=p;break}if(U===c){T=!0,c=f,a=p;break}U=U.sibling}if(!T){for(U=p.child;U;){if(U===a){T=!0,a=p,c=f;break}if(U===c){T=!0,c=p,a=f;break}U=U.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function pa(n){return n=xs(n),n!==null?ma(n):null}function ma(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ma(n);if(i!==null)return i;n=n.sibling}return null}var _o=e.unstable_scheduleCallback,xo=e.unstable_cancelCallback,mc=e.unstable_shouldYield,gc=e.unstable_requestPaint,Zt=e.unstable_now,_c=e.unstable_getCurrentPriorityLevel,ga=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,q=e.unstable_NormalPriority,se=e.unstable_LowPriority,ne=e.unstable_IdlePriority,te=null,Ne=null;function He(n){if(Ne&&typeof Ne.onCommitFiberRoot=="function")try{Ne.onCommitFiberRoot(te,n,void 0,(n.current.flags&128)===128)}catch{}}var Ce=Math.clz32?Math.clz32:lt,qe=Math.log,Qe=Math.LN2;function lt(n){return n>>>=0,n===0?32:31-(qe(n)/Qe|0)|0}var ct=64,$e=4194304;function bt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Gt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,p=n.pingedLanes,T=a&268435455;if(T!==0){var U=T&~f;U!==0?c=bt(U):(p&=T,p!==0&&(c=bt(p)))}else T=a&~f,T!==0?c=bt(T):p!==0&&(c=bt(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ce(i),f=1<<a,c|=n[a],i&=~f;return c}function Yt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,p=n.pendingLanes;0<p;){var T=31-Ce(p),U=1<<T,G=f[T];G===-1?((U&a)===0||(U&c)!==0)&&(f[T]=Yt(U,i)):G<=i&&(n.expiredLanes|=U),p&=~U}}function rn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ze(){var n=ct;return ct<<=1,(ct&4194240)===0&&(ct=64),n}function _n(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function _t(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ce(i),n[i]=a}function Fn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-Ce(a),p=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~p}}function On(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ce(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var vt=0;function ji(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ut,jt,fi,Bt,di,bi=!1,Wr=[],fr=null,dr=null,hr=null,_a=new Map,xa=new Map,pr=[],F0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qd(n,i){switch(n){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":_a.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(i.pointerId)}}function va(n,i,a,c,f,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[f]},i!==null&&(i=Da(i),i!==null&&jt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function O0(n,i,a,c,f){switch(i){case"focusin":return fr=va(fr,n,i,a,c,f),!0;case"dragenter":return dr=va(dr,n,i,a,c,f),!0;case"mouseover":return hr=va(hr,n,i,a,c,f),!0;case"pointerover":var p=f.pointerId;return _a.set(p,va(_a.get(p)||null,n,i,a,c,f)),!0;case"gotpointercapture":return p=f.pointerId,xa.set(p,va(xa.get(p)||null,n,i,a,c,f)),!0}return!1}function Jd(n){var i=jr(n.target);if(i!==null){var a=Ai(i);if(a!==null){if(i=a.tag,i===13){if(i=Hr(a),i!==null){n.blockedOn=i,di(n.priority,function(){fi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=vc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);ye=c,a.target.dispatchEvent(c),ye=null}else return i=Da(a),i!==null&&jt(i),n.blockedOn=a,!1;i.shift()}return!0}function eh(n,i,a){vo(n)&&a.delete(i)}function k0(){bi=!1,fr!==null&&vo(fr)&&(fr=null),dr!==null&&vo(dr)&&(dr=null),hr!==null&&vo(hr)&&(hr=null),_a.forEach(eh),xa.forEach(eh)}function Sa(n,i){n.blockedOn===i&&(n.blockedOn=null,bi||(bi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,k0)))}function ya(n){function i(f){return Sa(f,n)}if(0<Wr.length){Sa(Wr[0],n);for(var a=1;a<Wr.length;a++){var c=Wr[a];c.blockedOn===n&&(c.blockedOn=null)}}for(fr!==null&&Sa(fr,n),dr!==null&&Sa(dr,n),hr!==null&&Sa(hr,n),_a.forEach(i),xa.forEach(i),a=0;a<pr.length;a++)c=pr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<pr.length&&(a=pr[0],a.blockedOn===null);)Jd(a),a.blockedOn===null&&pr.shift()}var vs=D.ReactCurrentBatchConfig,So=!0;function B0(n,i,a,c){var f=vt,p=vs.transition;vs.transition=null;try{vt=1,xc(n,i,a,c)}finally{vt=f,vs.transition=p}}function z0(n,i,a,c){var f=vt,p=vs.transition;vs.transition=null;try{vt=4,xc(n,i,a,c)}finally{vt=f,vs.transition=p}}function xc(n,i,a,c){if(So){var f=vc(n,i,a,c);if(f===null)Fc(n,i,c,yo,a),Qd(n,c);else if(O0(f,n,i,a,c))c.stopPropagation();else if(Qd(n,c),i&4&&-1<F0.indexOf(n)){for(;f!==null;){var p=Da(f);if(p!==null&&Ut(p),p=vc(n,i,a,c),p===null&&Fc(n,i,c,yo,a),p===f)break;f=p}f!==null&&c.stopPropagation()}else Fc(n,i,c,null,a)}}var yo=null;function vc(n,i,a,c){if(yo=null,n=Je(c),n=jr(n),n!==null)if(i=Ai(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Hr(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return yo=n,null}function th(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_c()){case ga:return 1;case A:return 4;case q:case se:return 16;case ne:return 536870912;default:return 16}default:return 16}}var mr=null,Sc=null,Mo=null;function nh(){if(Mo)return Mo;var n,i=Sc,a=i.length,c,f="value"in mr?mr.value:mr.textContent,p=f.length;for(n=0;n<a&&i[n]===f[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===f[p-c];c++);return Mo=f.slice(n,1<c?1-c:void 0)}function Eo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function To(){return!0}function ih(){return!1}function Yn(n){function i(a,c,f,p,T){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=p,this.target=T,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(p):p[U]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?To:ih,this.isPropagationStopped=ih,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),i}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yc=Yn(Ss),Ma=ue({},Ss,{view:0,detail:0}),V0=Yn(Ma),Mc,Ec,Ea,wo=ue({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ea&&(Ea&&n.type==="mousemove"?(Mc=n.screenX-Ea.screenX,Ec=n.screenY-Ea.screenY):Ec=Mc=0,Ea=n),Mc)},movementY:function(n){return"movementY"in n?n.movementY:Ec}}),rh=Yn(wo),G0=ue({},wo,{dataTransfer:0}),H0=Yn(G0),W0=ue({},Ma,{relatedTarget:0}),Tc=Yn(W0),j0=ue({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=Yn(j0),q0=ue({},Ss,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Y0=Yn(q0),$0=ue({},Ss,{data:0}),sh=Yn($0),K0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Q0[n])?!!i[n]:!1}function wc(){return J0}var e_=ue({},Ma,{key:function(n){if(n.key){var i=K0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Eo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Z0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wc,charCode:function(n){return n.type==="keypress"?Eo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Eo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),t_=Yn(e_),n_=ue({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=Yn(n_),i_=ue({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wc}),r_=Yn(i_),s_=ue({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),a_=Yn(s_),o_=ue({},wo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),l_=Yn(o_),c_=[9,13,27,32],Ac=d&&"CompositionEvent"in window,Ta=null;d&&"documentMode"in document&&(Ta=document.documentMode);var u_=d&&"TextEvent"in window&&!Ta,oh=d&&(!Ac||Ta&&8<Ta&&11>=Ta),lh=" ",ch=!1;function uh(n,i){switch(n){case"keyup":return c_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ys=!1;function f_(n,i){switch(n){case"compositionend":return fh(i);case"keypress":return i.which!==32?null:(ch=!0,lh);case"textInput":return n=i.data,n===lh&&ch?null:n;default:return null}}function d_(n,i){if(ys)return n==="compositionend"||!Ac&&uh(n,i)?(n=nh(),Mo=Sc=mr=null,ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return oh&&i.locale!=="ko"?null:i.data;default:return null}}var h_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!h_[n.type]:i==="textarea"}function hh(n,i,a,c){de(c),i=Po(i,"onChange"),0<i.length&&(a=new yc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var wa=null,Aa=null;function p_(n){Nh(n,0)}function Ao(n){var i=As(n);if(Ft(i))return n}function m_(n,i){if(n==="change")return i}var ph=!1;if(d){var bc;if(d){var Cc="oninput"in document;if(!Cc){var mh=document.createElement("div");mh.setAttribute("oninput","return;"),Cc=typeof mh.oninput=="function"}bc=Cc}else bc=!1;ph=bc&&(!document.documentMode||9<document.documentMode)}function gh(){wa&&(wa.detachEvent("onpropertychange",_h),Aa=wa=null)}function _h(n){if(n.propertyName==="value"&&Ao(Aa)){var i=[];hh(i,Aa,n,Je(n)),st(p_,i)}}function g_(n,i,a){n==="focusin"?(gh(),wa=i,Aa=a,wa.attachEvent("onpropertychange",_h)):n==="focusout"&&gh()}function __(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ao(Aa)}function x_(n,i){if(n==="click")return Ao(i)}function v_(n,i){if(n==="input"||n==="change")return Ao(i)}function S_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var hi=typeof Object.is=="function"?Object.is:S_;function ba(n,i){if(hi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!h.call(i,f)||!hi(n[f],i[f]))return!1}return!0}function xh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vh(n,i){var a=xh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xh(a)}}function Sh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Sh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function yh(){for(var n=window,i=ut();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ut(n.document)}return i}function Rc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function y_(n){var i=yh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Sh(a.ownerDocument.documentElement,a)){if(c!==null&&Rc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,p=Math.min(c.start,f);c=c.end===void 0?p:Math.min(c.end,f),!n.extend&&p>c&&(f=c,c=p,p=f),f=vh(a,p);var T=vh(a,c);f&&T&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),p>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var M_=d&&"documentMode"in document&&11>=document.documentMode,Ms=null,Pc=null,Ca=null,Nc=!1;function Mh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nc||Ms==null||Ms!==ut(c)||(c=Ms,"selectionStart"in c&&Rc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ca&&ba(Ca,c)||(Ca=c,c=Po(Pc,"onSelect"),0<c.length&&(i=new yc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ms)))}function bo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Es={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},Lc={},Eh={};d&&(Eh=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function Co(n){if(Lc[n])return Lc[n];if(!Es[n])return n;var i=Es[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Eh)return Lc[n]=i[a];return n}var Th=Co("animationend"),wh=Co("animationiteration"),Ah=Co("animationstart"),bh=Co("transitionend"),Ch=new Map,Rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(n,i){Ch.set(n,i),l(i,[n])}for(var Dc=0;Dc<Rh.length;Dc++){var Ic=Rh[Dc],E_=Ic.toLowerCase(),T_=Ic[0].toUpperCase()+Ic.slice(1);gr(E_,"on"+T_)}gr(Th,"onAnimationEnd"),gr(wh,"onAnimationIteration"),gr(Ah,"onAnimationStart"),gr("dblclick","onDoubleClick"),gr("focusin","onFocus"),gr("focusout","onBlur"),gr(bh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function Ph(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,go(c,i,void 0,n),n.currentTarget=null}function Nh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var T=c.length-1;0<=T;T--){var U=c[T],G=U.instance,oe=U.currentTarget;if(U=U.listener,G!==p&&f.isPropagationStopped())break e;Ph(f,U,oe),p=G}else for(T=0;T<c.length;T++){if(U=c[T],G=U.instance,oe=U.currentTarget,U=U.listener,G!==p&&f.isPropagationStopped())break e;Ph(f,U,oe),p=G}}}if(qn)throw n=_s,qn=!1,_s=null,n}function Xt(n,i){var a=i[Gc];a===void 0&&(a=i[Gc]=new Set);var c=n+"__bubble";a.has(c)||(Lh(i,n,2,!1),a.add(c))}function Uc(n,i,a){var c=0;i&&(c|=4),Lh(a,n,c,i)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Pa(n){if(!n[Ro]){n[Ro]=!0,r.forEach(function(a){a!=="selectionchange"&&(w_.has(a)||Uc(a,!1,n),Uc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ro]||(i[Ro]=!0,Uc("selectionchange",!1,i))}}function Lh(n,i,a,c){switch(th(i)){case 1:var f=B0;break;case 4:f=z0;break;default:f=xc}a=f.bind(null,i,a,n),f=void 0,!Tt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Fc(n,i,a,c,f){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var U=c.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var G=T.tag;if((G===3||G===4)&&(G=T.stateNode.containerInfo,G===f||G.nodeType===8&&G.parentNode===f))return;T=T.return}for(;U!==null;){if(T=jr(U),T===null)return;if(G=T.tag,G===5||G===6){c=p=T;continue e}U=U.parentNode}}c=c.return}st(function(){var oe=p,Se=Je(a),Me=[];e:{var xe=Ch.get(n);if(xe!==void 0){var Ve=yc,Xe=n;switch(n){case"keypress":if(Eo(a)===0)break e;case"keydown":case"keyup":Ve=t_;break;case"focusin":Xe="focus",Ve=Tc;break;case"focusout":Xe="blur",Ve=Tc;break;case"beforeblur":case"afterblur":Ve=Tc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=H0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=r_;break;case Th:case wh:case Ah:Ve=X0;break;case bh:Ve=a_;break;case"scroll":Ve=V0;break;case"wheel":Ve=l_;break;case"copy":case"cut":case"paste":Ve=Y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=ah}var Ye=(i&4)!==0,nn=!Ye&&n==="scroll",J=Ye?xe!==null?xe+"Capture":null:xe;Ye=[];for(var j=oe,ie;j!==null;){ie=j;var we=ie.stateNode;if(ie.tag===5&&we!==null&&(ie=we,J!==null&&(we=Ot(j,J),we!=null&&Ye.push(Na(j,we,ie)))),nn)break;j=j.return}0<Ye.length&&(xe=new Ve(xe,Xe,null,a,Se),Me.push({event:xe,listeners:Ye}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",xe&&a!==ye&&(Xe=a.relatedTarget||a.fromElement)&&(jr(Xe)||Xe[Xi]))break e;if((Ve||xe)&&(xe=Se.window===Se?Se:(xe=Se.ownerDocument)?xe.defaultView||xe.parentWindow:window,Ve?(Xe=a.relatedTarget||a.toElement,Ve=oe,Xe=Xe?jr(Xe):null,Xe!==null&&(nn=Ai(Xe),Xe!==nn||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Ve=null,Xe=oe),Ve!==Xe)){if(Ye=rh,we="onMouseLeave",J="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=ah,we="onPointerLeave",J="onPointerEnter",j="pointer"),nn=Ve==null?xe:As(Ve),ie=Xe==null?xe:As(Xe),xe=new Ye(we,j+"leave",Ve,a,Se),xe.target=nn,xe.relatedTarget=ie,we=null,jr(Se)===oe&&(Ye=new Ye(J,j+"enter",Xe,a,Se),Ye.target=ie,Ye.relatedTarget=nn,we=Ye),nn=we,Ve&&Xe)t:{for(Ye=Ve,J=Xe,j=0,ie=Ye;ie;ie=Ts(ie))j++;for(ie=0,we=J;we;we=Ts(we))ie++;for(;0<j-ie;)Ye=Ts(Ye),j--;for(;0<ie-j;)J=Ts(J),ie--;for(;j--;){if(Ye===J||J!==null&&Ye===J.alternate)break t;Ye=Ts(Ye),J=Ts(J)}Ye=null}else Ye=null;Ve!==null&&Dh(Me,xe,Ve,Ye,!1),Xe!==null&&nn!==null&&Dh(Me,nn,Xe,Ye,!0)}}e:{if(xe=oe?As(oe):window,Ve=xe.nodeName&&xe.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&xe.type==="file")var Ke=m_;else if(dh(xe))if(ph)Ke=v_;else{Ke=__;var et=g_}else(Ve=xe.nodeName)&&Ve.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ke=x_);if(Ke&&(Ke=Ke(n,oe))){hh(Me,Ke,a,Se);break e}et&&et(n,xe,oe),n==="focusout"&&(et=xe._wrapperState)&&et.controlled&&xe.type==="number"&&mt(xe,"number",xe.value)}switch(et=oe?As(oe):window,n){case"focusin":(dh(et)||et.contentEditable==="true")&&(Ms=et,Pc=oe,Ca=null);break;case"focusout":Ca=Pc=Ms=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,Mh(Me,a,Se);break;case"selectionchange":if(M_)break;case"keydown":case"keyup":Mh(Me,a,Se)}var tt;if(Ac)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else ys?uh(n,a)&&(at="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(oh&&a.locale!=="ko"&&(ys||at!=="onCompositionStart"?at==="onCompositionEnd"&&ys&&(tt=nh()):(mr=Se,Sc="value"in mr?mr.value:mr.textContent,ys=!0)),et=Po(oe,at),0<et.length&&(at=new sh(at,n,null,a,Se),Me.push({event:at,listeners:et}),tt?at.data=tt:(tt=fh(a),tt!==null&&(at.data=tt)))),(tt=u_?f_(n,a):d_(n,a))&&(oe=Po(oe,"onBeforeInput"),0<oe.length&&(Se=new sh("onBeforeInput","beforeinput",null,a,Se),Me.push({event:Se,listeners:oe}),Se.data=tt))}Nh(Me,i)})}function Na(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Po(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=Ot(n,a),p!=null&&c.unshift(Na(n,p,f)),p=Ot(n,i),p!=null&&c.push(Na(n,p,f))),n=n.return}return c}function Ts(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Dh(n,i,a,c,f){for(var p=i._reactName,T=[];a!==null&&a!==c;){var U=a,G=U.alternate,oe=U.stateNode;if(G!==null&&G===c)break;U.tag===5&&oe!==null&&(U=oe,f?(G=Ot(a,p),G!=null&&T.unshift(Na(a,G,U))):f||(G=Ot(a,p),G!=null&&T.push(Na(a,G,U)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var A_=/\r\n?/g,b_=/\u0000|\uFFFD/g;function Ih(n){return(typeof n=="string"?n:""+n).replace(A_,`
`).replace(b_,"")}function No(n,i,a){if(i=Ih(i),Ih(n)!==i&&a)throw Error(t(425))}function Lo(){}var Oc=null,kc=null;function Bc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,C_=typeof clearTimeout=="function"?clearTimeout:void 0,Uh=typeof Promise=="function"?Promise:void 0,R_=typeof queueMicrotask=="function"?queueMicrotask:typeof Uh<"u"?function(n){return Uh.resolve(null).then(n).catch(P_)}:zc;function P_(n){setTimeout(function(){throw n})}function Vc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),ya(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);ya(i)}function _r(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Fh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ws=Math.random().toString(36).slice(2),Ci="__reactFiber$"+ws,La="__reactProps$"+ws,Xi="__reactContainer$"+ws,Gc="__reactEvents$"+ws,N_="__reactListeners$"+ws,L_="__reactHandles$"+ws;function jr(n){var i=n[Ci];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Xi]||a[Ci]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Fh(n);n!==null;){if(a=n[Ci])return a;n=Fh(n)}return i}n=a,a=n.parentNode}return null}function Da(n){return n=n[Ci]||n[Xi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function As(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Do(n){return n[La]||null}var Hc=[],bs=-1;function xr(n){return{current:n}}function qt(n){0>bs||(n.current=Hc[bs],Hc[bs]=null,bs--)}function Ht(n,i){bs++,Hc[bs]=n.current,n.current=i}var vr={},En=xr(vr),kn=xr(!1),Xr=vr;function Cs(n,i){var a=n.type.contextTypes;if(!a)return vr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in a)f[p]=i[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Bn(n){return n=n.childContextTypes,n!=null}function Io(){qt(kn),qt(En)}function Oh(n,i,a){if(En.current!==vr)throw Error(t(168));Ht(En,i),Ht(kn,a)}function kh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,ve(n)||"Unknown",f));return ue({},a,c)}function Uo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||vr,Xr=En.current,Ht(En,n),Ht(kn,kn.current),!0}function Bh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=kh(n,i,Xr),c.__reactInternalMemoizedMergedChildContext=n,qt(kn),qt(En),Ht(En,n)):qt(kn),Ht(kn,a)}var qi=null,Fo=!1,Wc=!1;function zh(n){qi===null?qi=[n]:qi.push(n)}function D_(n){Fo=!0,zh(n)}function Sr(){if(!Wc&&qi!==null){Wc=!0;var n=0,i=vt;try{var a=qi;for(vt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}qi=null,Fo=!1}catch(f){throw qi!==null&&(qi=qi.slice(n+1)),_o(ga,Sr),f}finally{vt=i,Wc=!1}}return null}var Rs=[],Ps=0,Oo=null,ko=0,ii=[],ri=0,qr=null,Yi=1,$i="";function Yr(n,i){Rs[Ps++]=ko,Rs[Ps++]=Oo,Oo=n,ko=i}function Vh(n,i,a){ii[ri++]=Yi,ii[ri++]=$i,ii[ri++]=qr,qr=n;var c=Yi;n=$i;var f=32-Ce(c)-1;c&=~(1<<f),a+=1;var p=32-Ce(i)+f;if(30<p){var T=f-f%5;p=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Yi=1<<32-Ce(i)+f|a<<f|c,$i=p+n}else Yi=1<<p|a<<f|c,$i=n}function jc(n){n.return!==null&&(Yr(n,1),Vh(n,1,0))}function Xc(n){for(;n===Oo;)Oo=Rs[--Ps],Rs[Ps]=null,ko=Rs[--Ps],Rs[Ps]=null;for(;n===qr;)qr=ii[--ri],ii[ri]=null,$i=ii[--ri],ii[ri]=null,Yi=ii[--ri],ii[ri]=null}var $n=null,Kn=null,$t=!1,pi=null;function Gh(n,i){var a=li(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Hh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,$n=n,Kn=_r(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,$n=n,Kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=qr!==null?{id:Yi,overflow:$i}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=li(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,$n=n,Kn=null,!0):!1;default:return!1}}function qc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Yc(n){if($t){var i=Kn;if(i){var a=i;if(!Hh(n,i)){if(qc(n))throw Error(t(418));i=_r(a.nextSibling);var c=$n;i&&Hh(n,i)?Gh(c,a):(n.flags=n.flags&-4097|2,$t=!1,$n=n)}}else{if(qc(n))throw Error(t(418));n.flags=n.flags&-4097|2,$t=!1,$n=n}}}function Wh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;$n=n}function Bo(n){if(n!==$n)return!1;if(!$t)return Wh(n),$t=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Bc(n.type,n.memoizedProps)),i&&(i=Kn)){if(qc(n))throw jh(),Error(t(418));for(;i;)Gh(n,i),i=_r(i.nextSibling)}if(Wh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Kn=_r(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Kn=null}}else Kn=$n?_r(n.stateNode.nextSibling):null;return!0}function jh(){for(var n=Kn;n;)n=_r(n.nextSibling)}function Ns(){Kn=$n=null,$t=!1}function $c(n){pi===null?pi=[n]:pi.push(n)}var I_=D.ReactCurrentBatchConfig;function Ia(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(T){var U=f.refs;T===null?delete U[p]:U[p]=T},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function zo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Xh(n){var i=n._init;return i(n._payload)}function qh(n){function i(J,j){if(n){var ie=J.deletions;ie===null?(J.deletions=[j],J.flags|=16):ie.push(j)}}function a(J,j){if(!n)return null;for(;j!==null;)i(J,j),j=j.sibling;return null}function c(J,j){for(J=new Map;j!==null;)j.key!==null?J.set(j.key,j):J.set(j.index,j),j=j.sibling;return J}function f(J,j){return J=Cr(J,j),J.index=0,J.sibling=null,J}function p(J,j,ie){return J.index=ie,n?(ie=J.alternate,ie!==null?(ie=ie.index,ie<j?(J.flags|=2,j):ie):(J.flags|=2,j)):(J.flags|=1048576,j)}function T(J){return n&&J.alternate===null&&(J.flags|=2),J}function U(J,j,ie,we){return j===null||j.tag!==6?(j=zu(ie,J.mode,we),j.return=J,j):(j=f(j,ie),j.return=J,j)}function G(J,j,ie,we){var Ke=ie.type;return Ke===F?Se(J,j,ie.props.children,we,ie.key):j!==null&&(j.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Z&&Xh(Ke)===j.type)?(we=f(j,ie.props),we.ref=Ia(J,j,ie),we.return=J,we):(we=ul(ie.type,ie.key,ie.props,null,J.mode,we),we.ref=Ia(J,j,ie),we.return=J,we)}function oe(J,j,ie,we){return j===null||j.tag!==4||j.stateNode.containerInfo!==ie.containerInfo||j.stateNode.implementation!==ie.implementation?(j=Vu(ie,J.mode,we),j.return=J,j):(j=f(j,ie.children||[]),j.return=J,j)}function Se(J,j,ie,we,Ke){return j===null||j.tag!==7?(j=ns(ie,J.mode,we,Ke),j.return=J,j):(j=f(j,ie),j.return=J,j)}function Me(J,j,ie){if(typeof j=="string"&&j!==""||typeof j=="number")return j=zu(""+j,J.mode,ie),j.return=J,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case z:return ie=ul(j.type,j.key,j.props,null,J.mode,ie),ie.ref=Ia(J,null,j),ie.return=J,ie;case I:return j=Vu(j,J.mode,ie),j.return=J,j;case Z:var we=j._init;return Me(J,we(j._payload),ie)}if(B(j)||ce(j))return j=ns(j,J.mode,ie,null),j.return=J,j;zo(J,j)}return null}function xe(J,j,ie,we){var Ke=j!==null?j.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Ke!==null?null:U(J,j,""+ie,we);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case z:return ie.key===Ke?G(J,j,ie,we):null;case I:return ie.key===Ke?oe(J,j,ie,we):null;case Z:return Ke=ie._init,xe(J,j,Ke(ie._payload),we)}if(B(ie)||ce(ie))return Ke!==null?null:Se(J,j,ie,we,null);zo(J,ie)}return null}function Ve(J,j,ie,we,Ke){if(typeof we=="string"&&we!==""||typeof we=="number")return J=J.get(ie)||null,U(j,J,""+we,Ke);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case z:return J=J.get(we.key===null?ie:we.key)||null,G(j,J,we,Ke);case I:return J=J.get(we.key===null?ie:we.key)||null,oe(j,J,we,Ke);case Z:var et=we._init;return Ve(J,j,ie,et(we._payload),Ke)}if(B(we)||ce(we))return J=J.get(ie)||null,Se(j,J,we,Ke,null);zo(j,we)}return null}function Xe(J,j,ie,we){for(var Ke=null,et=null,tt=j,at=j=0,mn=null;tt!==null&&at<ie.length;at++){tt.index>at?(mn=tt,tt=null):mn=tt.sibling;var Dt=xe(J,tt,ie[at],we);if(Dt===null){tt===null&&(tt=mn);break}n&&tt&&Dt.alternate===null&&i(J,tt),j=p(Dt,j,at),et===null?Ke=Dt:et.sibling=Dt,et=Dt,tt=mn}if(at===ie.length)return a(J,tt),$t&&Yr(J,at),Ke;if(tt===null){for(;at<ie.length;at++)tt=Me(J,ie[at],we),tt!==null&&(j=p(tt,j,at),et===null?Ke=tt:et.sibling=tt,et=tt);return $t&&Yr(J,at),Ke}for(tt=c(J,tt);at<ie.length;at++)mn=Ve(tt,J,at,ie[at],we),mn!==null&&(n&&mn.alternate!==null&&tt.delete(mn.key===null?at:mn.key),j=p(mn,j,at),et===null?Ke=mn:et.sibling=mn,et=mn);return n&&tt.forEach(function(Rr){return i(J,Rr)}),$t&&Yr(J,at),Ke}function Ye(J,j,ie,we){var Ke=ce(ie);if(typeof Ke!="function")throw Error(t(150));if(ie=Ke.call(ie),ie==null)throw Error(t(151));for(var et=Ke=null,tt=j,at=j=0,mn=null,Dt=ie.next();tt!==null&&!Dt.done;at++,Dt=ie.next()){tt.index>at?(mn=tt,tt=null):mn=tt.sibling;var Rr=xe(J,tt,Dt.value,we);if(Rr===null){tt===null&&(tt=mn);break}n&&tt&&Rr.alternate===null&&i(J,tt),j=p(Rr,j,at),et===null?Ke=Rr:et.sibling=Rr,et=Rr,tt=mn}if(Dt.done)return a(J,tt),$t&&Yr(J,at),Ke;if(tt===null){for(;!Dt.done;at++,Dt=ie.next())Dt=Me(J,Dt.value,we),Dt!==null&&(j=p(Dt,j,at),et===null?Ke=Dt:et.sibling=Dt,et=Dt);return $t&&Yr(J,at),Ke}for(tt=c(J,tt);!Dt.done;at++,Dt=ie.next())Dt=Ve(tt,J,at,Dt.value,we),Dt!==null&&(n&&Dt.alternate!==null&&tt.delete(Dt.key===null?at:Dt.key),j=p(Dt,j,at),et===null?Ke=Dt:et.sibling=Dt,et=Dt);return n&&tt.forEach(function(hx){return i(J,hx)}),$t&&Yr(J,at),Ke}function nn(J,j,ie,we){if(typeof ie=="object"&&ie!==null&&ie.type===F&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case z:e:{for(var Ke=ie.key,et=j;et!==null;){if(et.key===Ke){if(Ke=ie.type,Ke===F){if(et.tag===7){a(J,et.sibling),j=f(et,ie.props.children),j.return=J,J=j;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Z&&Xh(Ke)===et.type){a(J,et.sibling),j=f(et,ie.props),j.ref=Ia(J,et,ie),j.return=J,J=j;break e}a(J,et);break}else i(J,et);et=et.sibling}ie.type===F?(j=ns(ie.props.children,J.mode,we,ie.key),j.return=J,J=j):(we=ul(ie.type,ie.key,ie.props,null,J.mode,we),we.ref=Ia(J,j,ie),we.return=J,J=we)}return T(J);case I:e:{for(et=ie.key;j!==null;){if(j.key===et)if(j.tag===4&&j.stateNode.containerInfo===ie.containerInfo&&j.stateNode.implementation===ie.implementation){a(J,j.sibling),j=f(j,ie.children||[]),j.return=J,J=j;break e}else{a(J,j);break}else i(J,j);j=j.sibling}j=Vu(ie,J.mode,we),j.return=J,J=j}return T(J);case Z:return et=ie._init,nn(J,j,et(ie._payload),we)}if(B(ie))return Xe(J,j,ie,we);if(ce(ie))return Ye(J,j,ie,we);zo(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,j!==null&&j.tag===6?(a(J,j.sibling),j=f(j,ie),j.return=J,J=j):(a(J,j),j=zu(ie,J.mode,we),j.return=J,J=j),T(J)):a(J,j)}return nn}var Ls=qh(!0),Yh=qh(!1),Vo=xr(null),Go=null,Ds=null,Kc=null;function Zc(){Kc=Ds=Go=null}function Qc(n){var i=Vo.current;qt(Vo),n._currentValue=i}function Jc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Is(n,i){Go=n,Kc=Ds=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(zn=!0),n.firstContext=null)}function si(n){var i=n._currentValue;if(Kc!==n)if(n={context:n,memoizedValue:i,next:null},Ds===null){if(Go===null)throw Error(t(308));Ds=n,Go.dependencies={lanes:0,firstContext:n}}else Ds=Ds.next=n;return i}var $r=null;function eu(n){$r===null?$r=[n]:$r.push(n)}function $h(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,eu(i)):(a.next=f.next,f.next=a),i.interleaved=a,Ki(n,c)}function Ki(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var yr=!1;function tu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Mr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Rt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ki(n,a)}return f=c.interleaved,f===null?(i.next=i,eu(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ki(n,a)}function Ho(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,On(n,a)}}function Zh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?f=p=T:p=p.next=T,a=a.next}while(a!==null);p===null?f=p=i:p=p.next=i}else f=p=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Wo(n,i,a,c){var f=n.updateQueue;yr=!1;var p=f.firstBaseUpdate,T=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var G=U,oe=G.next;G.next=null,T===null?p=oe:T.next=oe,T=G;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,U=Se.lastBaseUpdate,U!==T&&(U===null?Se.firstBaseUpdate=oe:U.next=oe,Se.lastBaseUpdate=G))}if(p!==null){var Me=f.baseState;T=0,Se=oe=G=null,U=p;do{var xe=U.lane,Ve=U.eventTime;if((c&xe)===xe){Se!==null&&(Se=Se.next={eventTime:Ve,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Xe=n,Ye=U;switch(xe=i,Ve=a,Ye.tag){case 1:if(Xe=Ye.payload,typeof Xe=="function"){Me=Xe.call(Ve,Me,xe);break e}Me=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=Ye.payload,xe=typeof Xe=="function"?Xe.call(Ve,Me,xe):Xe,xe==null)break e;Me=ue({},Me,xe);break e;case 2:yr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,xe=f.effects,xe===null?f.effects=[U]:xe.push(U))}else Ve={eventTime:Ve,lane:xe,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Se===null?(oe=Se=Ve,G=Me):Se=Se.next=Ve,T|=xe;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;xe=U,U=xe.next,xe.next=null,f.lastBaseUpdate=xe,f.shared.pending=null}}while(!0);if(Se===null&&(G=Me),f.baseState=G,f.firstBaseUpdate=oe,f.lastBaseUpdate=Se,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Qr|=T,n.lanes=T,n.memoizedState=Me}}function Qh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Ua={},Ri=xr(Ua),Fa=xr(Ua),Oa=xr(Ua);function Kr(n){if(n===Ua)throw Error(t(174));return n}function nu(n,i){switch(Ht(Oa,i),Ht(Fa,n),Ht(Ri,Ua),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}qt(Ri),Ht(Ri,i)}function Us(){qt(Ri),qt(Fa),qt(Oa)}function Jh(n){Kr(Oa.current);var i=Kr(Ri.current),a=E(i,n.type);i!==a&&(Ht(Fa,n),Ht(Ri,a))}function iu(n){Fa.current===n&&(qt(Ri),qt(Fa))}var Qt=xr(0);function jo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ru=[];function su(){for(var n=0;n<ru.length;n++)ru[n]._workInProgressVersionPrimary=null;ru.length=0}var Xo=D.ReactCurrentDispatcher,au=D.ReactCurrentBatchConfig,Zr=0,Jt=null,ln=null,hn=null,qo=!1,ka=!1,Ba=0,U_=0;function Tn(){throw Error(t(321))}function ou(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!hi(n[a],i[a]))return!1;return!0}function lu(n,i,a,c,f,p){if(Zr=p,Jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Xo.current=n===null||n.memoizedState===null?B_:z_,n=a(c,f),ka){p=0;do{if(ka=!1,Ba=0,25<=p)throw Error(t(301));p+=1,hn=ln=null,i.updateQueue=null,Xo.current=V_,n=a(c,f)}while(ka)}if(Xo.current=Ko,i=ln!==null&&ln.next!==null,Zr=0,hn=ln=Jt=null,qo=!1,i)throw Error(t(300));return n}function cu(){var n=Ba!==0;return Ba=0,n}function Pi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Jt.memoizedState=hn=n:hn=hn.next=n,hn}function ai(){if(ln===null){var n=Jt.alternate;n=n!==null?n.memoizedState:null}else n=ln.next;var i=hn===null?Jt.memoizedState:hn.next;if(i!==null)hn=i,ln=n;else{if(n===null)throw Error(t(310));ln=n,n={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},hn===null?Jt.memoizedState=hn=n:hn=hn.next=n}return hn}function za(n,i){return typeof i=="function"?i(n):i}function uu(n){var i=ai(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ln,f=c.baseQueue,p=a.pending;if(p!==null){if(f!==null){var T=f.next;f.next=p.next,p.next=T}c.baseQueue=f=p,a.pending=null}if(f!==null){p=f.next,c=c.baseState;var U=T=null,G=null,oe=p;do{var Se=oe.lane;if((Zr&Se)===Se)G!==null&&(G=G.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),c=oe.hasEagerState?oe.eagerState:n(c,oe.action);else{var Me={lane:Se,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};G===null?(U=G=Me,T=c):G=G.next=Me,Jt.lanes|=Se,Qr|=Se}oe=oe.next}while(oe!==null&&oe!==p);G===null?T=c:G.next=U,hi(c,i.memoizedState)||(zn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=G,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do p=f.lane,Jt.lanes|=p,Qr|=p,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function fu(n){var i=ai(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,p=i.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do p=n(p,T.action),T=T.next;while(T!==f);hi(p,i.memoizedState)||(zn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function ep(){}function tp(n,i){var a=Jt,c=ai(),f=i(),p=!hi(c.memoizedState,f);if(p&&(c.memoizedState=f,zn=!0),c=c.queue,du(rp.bind(null,a,c,n),[n]),c.getSnapshot!==i||p||hn!==null&&hn.memoizedState.tag&1){if(a.flags|=2048,Va(9,ip.bind(null,a,c,f,i),void 0,null),pn===null)throw Error(t(349));(Zr&30)!==0||np(a,i,f)}return f}function np(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function ip(n,i,a,c){i.value=a,i.getSnapshot=c,sp(i)&&ap(n)}function rp(n,i,a){return a(function(){sp(i)&&ap(n)})}function sp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!hi(n,a)}catch{return!0}}function ap(n){var i=Ki(n,1);i!==null&&xi(i,n,1,-1)}function op(n){var i=Pi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:n},i.queue=n,n=n.dispatch=k_.bind(null,Jt,n),[i.memoizedState,n]}function Va(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function lp(){return ai().memoizedState}function Yo(n,i,a,c){var f=Pi();Jt.flags|=n,f.memoizedState=Va(1|i,a,void 0,c===void 0?null:c)}function $o(n,i,a,c){var f=ai();c=c===void 0?null:c;var p=void 0;if(ln!==null){var T=ln.memoizedState;if(p=T.destroy,c!==null&&ou(c,T.deps)){f.memoizedState=Va(i,a,p,c);return}}Jt.flags|=n,f.memoizedState=Va(1|i,a,p,c)}function cp(n,i){return Yo(8390656,8,n,i)}function du(n,i){return $o(2048,8,n,i)}function up(n,i){return $o(4,2,n,i)}function fp(n,i){return $o(4,4,n,i)}function dp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function hp(n,i,a){return a=a!=null?a.concat([n]):null,$o(4,4,dp.bind(null,i,n),a)}function hu(){}function pp(n,i){var a=ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ou(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function mp(n,i){var a=ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ou(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function gp(n,i,a){return(Zr&21)===0?(n.baseState&&(n.baseState=!1,zn=!0),n.memoizedState=a):(hi(a,i)||(a=ze(),Jt.lanes|=a,Qr|=a,n.baseState=!0),i)}function F_(n,i){var a=vt;vt=a!==0&&4>a?a:4,n(!0);var c=au.transition;au.transition={};try{n(!1),i()}finally{vt=a,au.transition=c}}function _p(){return ai().memoizedState}function O_(n,i,a){var c=Ar(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},xp(n))vp(i,a);else if(a=$h(n,i,a,c),a!==null){var f=Ln();xi(a,n,c,f),Sp(a,i,c)}}function k_(n,i,a){var c=Ar(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(xp(n))vp(i,f);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var T=i.lastRenderedState,U=p(T,a);if(f.hasEagerState=!0,f.eagerState=U,hi(U,T)){var G=i.interleaved;G===null?(f.next=f,eu(i)):(f.next=G.next,G.next=f),i.interleaved=f;return}}catch{}finally{}a=$h(n,i,f,c),a!==null&&(f=Ln(),xi(a,n,c,f),Sp(a,i,c))}}function xp(n){var i=n.alternate;return n===Jt||i!==null&&i===Jt}function vp(n,i){ka=qo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Sp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,On(n,a)}}var Ko={readContext:si,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},B_={readContext:si,useCallback:function(n,i){return Pi().memoizedState=[n,i===void 0?null:i],n},useContext:si,useEffect:cp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Yo(4194308,4,dp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Yo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Yo(4,2,n,i)},useMemo:function(n,i){var a=Pi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Pi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=O_.bind(null,Jt,n),[c.memoizedState,n]},useRef:function(n){var i=Pi();return n={current:n},i.memoizedState=n},useState:op,useDebugValue:hu,useDeferredValue:function(n){return Pi().memoizedState=n},useTransition:function(){var n=op(!1),i=n[0];return n=F_.bind(null,n[1]),Pi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Jt,f=Pi();if($t){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),pn===null)throw Error(t(349));(Zr&30)!==0||np(c,i,a)}f.memoizedState=a;var p={value:a,getSnapshot:i};return f.queue=p,cp(rp.bind(null,c,p,n),[n]),c.flags|=2048,Va(9,ip.bind(null,c,p,a,i),void 0,null),a},useId:function(){var n=Pi(),i=pn.identifierPrefix;if($t){var a=$i,c=Yi;a=(c&~(1<<32-Ce(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ba++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=U_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},z_={readContext:si,useCallback:pp,useContext:si,useEffect:du,useImperativeHandle:hp,useInsertionEffect:up,useLayoutEffect:fp,useMemo:mp,useReducer:uu,useRef:lp,useState:function(){return uu(za)},useDebugValue:hu,useDeferredValue:function(n){var i=ai();return gp(i,ln.memoizedState,n)},useTransition:function(){var n=uu(za)[0],i=ai().memoizedState;return[n,i]},useMutableSource:ep,useSyncExternalStore:tp,useId:_p,unstable_isNewReconciler:!1},V_={readContext:si,useCallback:pp,useContext:si,useEffect:du,useImperativeHandle:hp,useInsertionEffect:up,useLayoutEffect:fp,useMemo:mp,useReducer:fu,useRef:lp,useState:function(){return fu(za)},useDebugValue:hu,useDeferredValue:function(n){var i=ai();return ln===null?i.memoizedState=n:gp(i,ln.memoizedState,n)},useTransition:function(){var n=fu(za)[0],i=ai().memoizedState;return[n,i]},useMutableSource:ep,useSyncExternalStore:tp,useId:_p,unstable_isNewReconciler:!1};function mi(n,i){if(n&&n.defaultProps){i=ue({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function pu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ue({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Zo={isMounted:function(n){return(n=n._reactInternals)?Ai(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ln(),f=Ar(n),p=Zi(c,f);p.payload=i,a!=null&&(p.callback=a),i=Mr(n,p,f),i!==null&&(xi(i,n,f,c),Ho(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ln(),f=Ar(n),p=Zi(c,f);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=Mr(n,p,f),i!==null&&(xi(i,n,f,c),Ho(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ln(),c=Ar(n),f=Zi(a,c);f.tag=2,i!=null&&(f.callback=i),i=Mr(n,f,c),i!==null&&(xi(i,n,c,a),Ho(i,n,c))}};function yp(n,i,a,c,f,p,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,T):i.prototype&&i.prototype.isPureReactComponent?!ba(a,c)||!ba(f,p):!0}function Mp(n,i,a){var c=!1,f=vr,p=i.contextType;return typeof p=="object"&&p!==null?p=si(p):(f=Bn(i)?Xr:En.current,c=i.contextTypes,p=(c=c!=null)?Cs(n,f):vr),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Zo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=p),i}function Ep(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Zo.enqueueReplaceState(i,i.state,null)}function mu(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},tu(n);var p=i.contextType;typeof p=="object"&&p!==null?f.context=si(p):(p=Bn(i)?Xr:En.current,f.context=Cs(n,p)),f.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(pu(n,i,p,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Zo.enqueueReplaceState(f,f.state,null),Wo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Fs(n,i){try{var a="",c=i;do a+=De(c),c=c.return;while(c);var f=a}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:f,digest:null}}function gu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function _u(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var G_=typeof WeakMap=="function"?WeakMap:Map;function Tp(n,i,a){a=Zi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){rl||(rl=!0,Lu=c),_u(n,i)},a}function wp(n,i,a){a=Zi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){_u(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){_u(n,i),typeof c!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Ap(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new G_;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=nx.bind(null,n,i,a),i.then(n,n))}function bp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Cp(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Zi(-1,1),i.tag=2,Mr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var H_=D.ReactCurrentOwner,zn=!1;function Nn(n,i,a,c){i.child=n===null?Yh(i,null,a,c):Ls(i,n.child,a,c)}function Rp(n,i,a,c,f){a=a.render;var p=i.ref;return Is(i,f),c=lu(n,i,a,c,p,f),a=cu(),n!==null&&!zn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Qi(n,i,f)):($t&&a&&jc(i),i.flags|=1,Nn(n,i,c,f),i.child)}function Pp(n,i,a,c,f){if(n===null){var p=a.type;return typeof p=="function"&&!Bu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,Np(n,i,p,c,f)):(n=ul(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&f)===0){var T=p.memoizedProps;if(a=a.compare,a=a!==null?a:ba,a(T,c)&&n.ref===i.ref)return Qi(n,i,f)}return i.flags|=1,n=Cr(p,c),n.ref=i.ref,n.return=i,i.child=n}function Np(n,i,a,c,f){if(n!==null){var p=n.memoizedProps;if(ba(p,c)&&n.ref===i.ref)if(zn=!1,i.pendingProps=c=p,(n.lanes&f)!==0)(n.flags&131072)!==0&&(zn=!0);else return i.lanes=n.lanes,Qi(n,i,f)}return xu(n,i,a,c,f)}function Lp(n,i,a){var c=i.pendingProps,f=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(ks,Zn),Zn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ht(ks,Zn),Zn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Ht(ks,Zn),Zn|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,Ht(ks,Zn),Zn|=c;return Nn(n,i,f,a),i.child}function Dp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function xu(n,i,a,c,f){var p=Bn(a)?Xr:En.current;return p=Cs(i,p),Is(i,f),a=lu(n,i,a,c,p,f),c=cu(),n!==null&&!zn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Qi(n,i,f)):($t&&c&&jc(i),i.flags|=1,Nn(n,i,a,f),i.child)}function Ip(n,i,a,c,f){if(Bn(a)){var p=!0;Uo(i)}else p=!1;if(Is(i,f),i.stateNode===null)Jo(n,i),Mp(i,a,c),mu(i,a,c,f),c=!0;else if(n===null){var T=i.stateNode,U=i.memoizedProps;T.props=U;var G=T.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=si(oe):(oe=Bn(a)?Xr:En.current,oe=Cs(i,oe));var Se=a.getDerivedStateFromProps,Me=typeof Se=="function"||typeof T.getSnapshotBeforeUpdate=="function";Me||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==c||G!==oe)&&Ep(i,T,c,oe),yr=!1;var xe=i.memoizedState;T.state=xe,Wo(i,c,T,f),G=i.memoizedState,U!==c||xe!==G||kn.current||yr?(typeof Se=="function"&&(pu(i,a,Se,c),G=i.memoizedState),(U=yr||yp(i,a,U,c,xe,G,oe))?(Me||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=G),T.props=c,T.state=G,T.context=oe,c=U):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Kh(n,i),U=i.memoizedProps,oe=i.type===i.elementType?U:mi(i.type,U),T.props=oe,Me=i.pendingProps,xe=T.context,G=a.contextType,typeof G=="object"&&G!==null?G=si(G):(G=Bn(a)?Xr:En.current,G=Cs(i,G));var Ve=a.getDerivedStateFromProps;(Se=typeof Ve=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==Me||xe!==G)&&Ep(i,T,c,G),yr=!1,xe=i.memoizedState,T.state=xe,Wo(i,c,T,f);var Xe=i.memoizedState;U!==Me||xe!==Xe||kn.current||yr?(typeof Ve=="function"&&(pu(i,a,Ve,c),Xe=i.memoizedState),(oe=yr||yp(i,a,oe,c,xe,Xe,G)||!1)?(Se||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Xe,G),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Xe,G)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Xe),T.props=c,T.state=Xe,T.context=G,c=oe):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),c=!1)}return vu(n,i,a,c,p,f)}function vu(n,i,a,c,f,p){Dp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return f&&Bh(i,a,!1),Qi(n,i,p);c=i.stateNode,H_.current=i;var U=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Ls(i,n.child,null,p),i.child=Ls(i,null,U,p)):Nn(n,i,U,p),i.memoizedState=c.state,f&&Bh(i,a,!0),i.child}function Up(n){var i=n.stateNode;i.pendingContext?Oh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Oh(n,i.context,!1),nu(n,i.containerInfo)}function Fp(n,i,a,c,f){return Ns(),$c(f),i.flags|=256,Nn(n,i,a,c),i.child}var Su={dehydrated:null,treeContext:null,retryLane:0};function yu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Op(n,i,a){var c=i.pendingProps,f=Qt.current,p=!1,T=(i.flags&128)!==0,U;if((U=T)||(U=n!==null&&n.memoizedState===null?!1:(f&2)!==0),U?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Ht(Qt,f&1),n===null)return Yc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,p?(c=i.mode,p=i.child,T={mode:"hidden",children:T},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=T):p=fl(T,c,0,null),n=ns(n,c,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=yu(a),i.memoizedState=Su,n):Mu(i,T));if(f=n.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return W_(n,i,T,c,U,f,a);if(p){p=c.fallback,T=i.mode,f=n.child,U=f.sibling;var G={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=G,i.deletions=null):(c=Cr(f,G),c.subtreeFlags=f.subtreeFlags&14680064),U!==null?p=Cr(U,p):(p=ns(p,T,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,T=n.child.memoizedState,T=T===null?yu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},p.memoizedState=T,p.childLanes=n.childLanes&~a,i.memoizedState=Su,c}return p=n.child,n=p.sibling,c=Cr(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Mu(n,i){return i=fl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Qo(n,i,a,c){return c!==null&&$c(c),Ls(i,n.child,null,a),n=Mu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function W_(n,i,a,c,f,p,T){if(a)return i.flags&256?(i.flags&=-257,c=gu(Error(t(422))),Qo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=c.fallback,f=i.mode,c=fl({mode:"visible",children:c.children},f,0,null),p=ns(p,f,T,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&Ls(i,n.child,null,T),i.child.memoizedState=yu(T),i.memoizedState=Su,p);if((i.mode&1)===0)return Qo(n,i,T,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var U=c.dgst;return c=U,p=Error(t(419)),c=gu(p,c,void 0),Qo(n,i,T,c)}if(U=(T&n.childLanes)!==0,zn||U){if(c=pn,c!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|T))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Ki(n,f),xi(c,n,f,-1))}return ku(),c=gu(Error(t(421))),Qo(n,i,T,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=ix.bind(null,n),f._reactRetry=i,null):(n=p.treeContext,Kn=_r(f.nextSibling),$n=i,$t=!0,pi=null,n!==null&&(ii[ri++]=Yi,ii[ri++]=$i,ii[ri++]=qr,Yi=n.id,$i=n.overflow,qr=i),i=Mu(i,c.children),i.flags|=4096,i)}function kp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Jc(n.return,i,a)}function Eu(n,i,a,c,f){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=f)}function Bp(n,i,a){var c=i.pendingProps,f=c.revealOrder,p=c.tail;if(Nn(n,i,c.children,a),c=Qt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&kp(n,a,i);else if(n.tag===19)kp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ht(Qt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&jo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Eu(i,!1,f,a,p);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&jo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Eu(i,!0,a,null,p);break;case"together":Eu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Jo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Qi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Qr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Cr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Cr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function j_(n,i,a){switch(i.tag){case 3:Up(i),Ns();break;case 5:Jh(i);break;case 1:Bn(i.type)&&Uo(i);break;case 4:nu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Ht(Vo,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ht(Qt,Qt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Op(n,i,a):(Ht(Qt,Qt.current&1),n=Qi(n,i,a),n!==null?n.sibling:null);Ht(Qt,Qt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Bp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ht(Qt,Qt.current),c)break;return null;case 22:case 23:return i.lanes=0,Lp(n,i,a)}return Qi(n,i,a)}var zp,Tu,Vp,Gp;zp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Tu=function(){},Vp=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Kr(Ri.current);var p=null;switch(a){case"input":f=At(n,f),c=At(n,c),p=[];break;case"select":f=ue({},f,{value:void 0}),c=ue({},c,{value:void 0}),p=[];break;case"textarea":f=nt(n,f),c=nt(n,c),p=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Lo)}Be(a,c);var T;a=null;for(oe in f)if(!c.hasOwnProperty(oe)&&f.hasOwnProperty(oe)&&f[oe]!=null)if(oe==="style"){var U=f[oe];for(T in U)U.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?p||(p=[]):(p=p||[]).push(oe,null));for(oe in c){var G=c[oe];if(U=f!=null?f[oe]:void 0,c.hasOwnProperty(oe)&&G!==U&&(G!=null||U!=null))if(oe==="style")if(U){for(T in U)!U.hasOwnProperty(T)||G&&G.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in G)G.hasOwnProperty(T)&&U[T]!==G[T]&&(a||(a={}),a[T]=G[T])}else a||(p||(p=[]),p.push(oe,a)),a=G;else oe==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,U=U?U.__html:void 0,G!=null&&U!==G&&(p=p||[]).push(oe,G)):oe==="children"?typeof G!="string"&&typeof G!="number"||(p=p||[]).push(oe,""+G):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(G!=null&&oe==="onScroll"&&Xt("scroll",n),p||U===G||(p=[])):(p=p||[]).push(oe,G))}a&&(p=p||[]).push("style",a);var oe=p;(i.updateQueue=oe)&&(i.flags|=4)}},Gp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ga(n,i){if(!$t)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function wn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function X_(n,i,a){var c=i.pendingProps;switch(Xc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(i),null;case 1:return Bn(i.type)&&Io(),wn(i),null;case 3:return c=i.stateNode,Us(),qt(kn),qt(En),su(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Bo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,pi!==null&&(Uu(pi),pi=null))),Tu(n,i),wn(i),null;case 5:iu(i);var f=Kr(Oa.current);if(a=i.type,n!==null&&i.stateNode!=null)Vp(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return wn(i),null}if(n=Kr(Ri.current),Bo(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[Ci]=i,c[La]=p,n=(i.mode&1)!==0,a){case"dialog":Xt("cancel",c),Xt("close",c);break;case"iframe":case"object":case"embed":Xt("load",c);break;case"video":case"audio":for(f=0;f<Ra.length;f++)Xt(Ra[f],c);break;case"source":Xt("error",c);break;case"img":case"image":case"link":Xt("error",c),Xt("load",c);break;case"details":Xt("toggle",c);break;case"input":It(c,p),Xt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Xt("invalid",c);break;case"textarea":Mt(c,p),Xt("invalid",c)}Be(a,p),f=null;for(var T in p)if(p.hasOwnProperty(T)){var U=p[T];T==="children"?typeof U=="string"?c.textContent!==U&&(p.suppressHydrationWarning!==!0&&No(c.textContent,U,n),f=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(p.suppressHydrationWarning!==!0&&No(c.textContent,U,n),f=["children",""+U]):o.hasOwnProperty(T)&&U!=null&&T==="onScroll"&&Xt("scroll",c)}switch(a){case"input":Ge(c),Vt(c,p,!0);break;case"textarea":Ge(c),Et(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Lo)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=P(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Ci]=i,n[La]=c,zp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ae(a,c),a){case"dialog":Xt("cancel",n),Xt("close",n),f=c;break;case"iframe":case"object":case"embed":Xt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Ra.length;f++)Xt(Ra[f],n);f=c;break;case"source":Xt("error",n),f=c;break;case"img":case"image":case"link":Xt("error",n),Xt("load",n),f=c;break;case"details":Xt("toggle",n),f=c;break;case"input":It(n,c),f=At(n,c),Xt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=ue({},c,{value:void 0}),Xt("invalid",n);break;case"textarea":Mt(n,c),f=nt(n,c),Xt("invalid",n);break;default:f=c}Be(a,f),U=f;for(p in U)if(U.hasOwnProperty(p)){var G=U[p];p==="style"?pe(n,G):p==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&he(n,G)):p==="children"?typeof G=="string"?(a!=="textarea"||G!=="")&&ge(n,G):typeof G=="number"&&ge(n,""+G):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?G!=null&&p==="onScroll"&&Xt("scroll",n):G!=null&&L(n,p,G,T))}switch(a){case"input":Ge(n),Vt(n,c,!1);break;case"textarea":Ge(n),Et(n);break;case"option":c.value!=null&&n.setAttribute("value",""+me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?xt(n,!!c.multiple,p,!1):c.defaultValue!=null&&xt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Lo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return wn(i),null;case 6:if(n&&i.stateNode!=null)Gp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Kr(Oa.current),Kr(Ri.current),Bo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ci]=i,(p=c.nodeValue!==a)&&(n=$n,n!==null))switch(n.tag){case 3:No(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&No(c.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ci]=i,i.stateNode=c}return wn(i),null;case 13:if(qt(Qt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if($t&&Kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)jh(),Ns(),i.flags|=98560,p=!1;else if(p=Bo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Ci]=i}else Ns(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;wn(i),p=!1}else pi!==null&&(Uu(pi),pi=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Qt.current&1)!==0?cn===0&&(cn=3):ku())),i.updateQueue!==null&&(i.flags|=4),wn(i),null);case 4:return Us(),Tu(n,i),n===null&&Pa(i.stateNode.containerInfo),wn(i),null;case 10:return Qc(i.type._context),wn(i),null;case 17:return Bn(i.type)&&Io(),wn(i),null;case 19:if(qt(Qt),p=i.memoizedState,p===null)return wn(i),null;if(c=(i.flags&128)!==0,T=p.rendering,T===null)if(c)Ga(p,!1);else{if(cn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=jo(n),T!==null){for(i.flags|=128,Ga(p,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,n=c,p.flags&=14680066,T=p.alternate,T===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=T.childLanes,p.lanes=T.lanes,p.child=T.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=T.memoizedProps,p.memoizedState=T.memoizedState,p.updateQueue=T.updateQueue,p.type=T.type,n=T.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ht(Qt,Qt.current&1|2),i.child}n=n.sibling}p.tail!==null&&Zt()>Bs&&(i.flags|=128,c=!0,Ga(p,!1),i.lanes=4194304)}else{if(!c)if(n=jo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ga(p,!0),p.tail===null&&p.tailMode==="hidden"&&!T.alternate&&!$t)return wn(i),null}else 2*Zt()-p.renderingStartTime>Bs&&a!==1073741824&&(i.flags|=128,c=!0,Ga(p,!1),i.lanes=4194304);p.isBackwards?(T.sibling=i.child,i.child=T):(a=p.last,a!==null?a.sibling=T:i.child=T,p.last=T)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Zt(),i.sibling=null,a=Qt.current,Ht(Qt,c?a&1|2:a&1),i):(wn(i),null);case 22:case 23:return Ou(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Zn&1073741824)!==0&&(wn(i),i.subtreeFlags&6&&(i.flags|=8192)):wn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function q_(n,i){switch(Xc(i),i.tag){case 1:return Bn(i.type)&&Io(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Us(),qt(kn),qt(En),su(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return iu(i),null;case 13:if(qt(Qt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ns()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return qt(Qt),null;case 4:return Us(),null;case 10:return Qc(i.type._context),null;case 22:case 23:return Ou(),null;case 24:return null;default:return null}}var el=!1,An=!1,Y_=typeof WeakSet=="function"?WeakSet:Set,We=null;function Os(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){en(n,i,c)}else a.current=null}function wu(n,i,a){try{a()}catch(c){en(n,i,c)}}var Hp=!1;function $_(n,i){if(Oc=So,n=yh(),Rc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var T=0,U=-1,G=-1,oe=0,Se=0,Me=n,xe=null;t:for(;;){for(var Ve;Me!==a||f!==0&&Me.nodeType!==3||(U=T+f),Me!==p||c!==0&&Me.nodeType!==3||(G=T+c),Me.nodeType===3&&(T+=Me.nodeValue.length),(Ve=Me.firstChild)!==null;)xe=Me,Me=Ve;for(;;){if(Me===n)break t;if(xe===a&&++oe===f&&(U=T),xe===p&&++Se===c&&(G=T),(Ve=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=Ve}a=U===-1||G===-1?null:{start:U,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(kc={focusedElem:n,selectionRange:a},So=!1,We=i;We!==null;)if(i=We,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,We=n;else for(;We!==null;){i=We;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var Ye=Xe.memoizedProps,nn=Xe.memoizedState,J=i.stateNode,j=J.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:mi(i.type,Ye),nn);J.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){en(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,We=n;break}We=i.return}return Xe=Hp,Hp=!1,Xe}function Ha(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var p=f.destroy;f.destroy=void 0,p!==void 0&&wu(i,a,p)}f=f.next}while(f!==c)}}function tl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Au(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Wp(n){var i=n.alternate;i!==null&&(n.alternate=null,Wp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ci],delete i[La],delete i[Gc],delete i[N_],delete i[L_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function jp(n){return n.tag===5||n.tag===3||n.tag===4}function Xp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||jp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Lo));else if(c!==4&&(n=n.child,n!==null))for(bu(n,i,a),n=n.sibling;n!==null;)bu(n,i,a),n=n.sibling}function Cu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Cu(n,i,a),n=n.sibling;n!==null;)Cu(n,i,a),n=n.sibling}var xn=null,gi=!1;function Er(n,i,a){for(a=a.child;a!==null;)qp(n,i,a),a=a.sibling}function qp(n,i,a){if(Ne&&typeof Ne.onCommitFiberUnmount=="function")try{Ne.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 5:An||Os(a,i);case 6:var c=xn,f=gi;xn=null,Er(n,i,a),xn=c,gi=f,xn!==null&&(gi?(n=xn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):xn.removeChild(a.stateNode));break;case 18:xn!==null&&(gi?(n=xn,a=a.stateNode,n.nodeType===8?Vc(n.parentNode,a):n.nodeType===1&&Vc(n,a),ya(n)):Vc(xn,a.stateNode));break;case 4:c=xn,f=gi,xn=a.stateNode.containerInfo,gi=!0,Er(n,i,a),xn=c,gi=f;break;case 0:case 11:case 14:case 15:if(!An&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var p=f,T=p.destroy;p=p.tag,T!==void 0&&((p&2)!==0||(p&4)!==0)&&wu(a,i,T),f=f.next}while(f!==c)}Er(n,i,a);break;case 1:if(!An&&(Os(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){en(a,i,U)}Er(n,i,a);break;case 21:Er(n,i,a);break;case 22:a.mode&1?(An=(c=An)||a.memoizedState!==null,Er(n,i,a),An=c):Er(n,i,a);break;default:Er(n,i,a)}}function Yp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Y_),i.forEach(function(c){var f=rx.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function _i(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var p=n,T=i,U=T;e:for(;U!==null;){switch(U.tag){case 5:xn=U.stateNode,gi=!1;break e;case 3:xn=U.stateNode.containerInfo,gi=!0;break e;case 4:xn=U.stateNode.containerInfo,gi=!0;break e}U=U.return}if(xn===null)throw Error(t(160));qp(p,T,f),xn=null,gi=!1;var G=f.alternate;G!==null&&(G.return=null),f.return=null}catch(oe){en(f,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$p(i,n),i=i.sibling}function $p(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(_i(i,n),Ni(n),c&4){try{Ha(3,n,n.return),tl(3,n)}catch(Ye){en(n,n.return,Ye)}try{Ha(5,n,n.return)}catch(Ye){en(n,n.return,Ye)}}break;case 1:_i(i,n),Ni(n),c&512&&a!==null&&Os(a,a.return);break;case 5:if(_i(i,n),Ni(n),c&512&&a!==null&&Os(a,a.return),n.flags&32){var f=n.stateNode;try{ge(f,"")}catch(Ye){en(n,n.return,Ye)}}if(c&4&&(f=n.stateNode,f!=null)){var p=n.memoizedProps,T=a!==null?a.memoizedProps:p,U=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{U==="input"&&p.type==="radio"&&p.name!=null&&ft(f,p),Ae(U,T);var oe=Ae(U,p);for(T=0;T<G.length;T+=2){var Se=G[T],Me=G[T+1];Se==="style"?pe(f,Me):Se==="dangerouslySetInnerHTML"?he(f,Me):Se==="children"?ge(f,Me):L(f,Se,Me,oe)}switch(U){case"input":Wt(f,p);break;case"textarea":Pe(f,p);break;case"select":var xe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Ve=p.value;Ve!=null?xt(f,!!p.multiple,Ve,!1):xe!==!!p.multiple&&(p.defaultValue!=null?xt(f,!!p.multiple,p.defaultValue,!0):xt(f,!!p.multiple,p.multiple?[]:"",!1))}f[La]=p}catch(Ye){en(n,n.return,Ye)}}break;case 6:if(_i(i,n),Ni(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,p=n.memoizedProps;try{f.nodeValue=p}catch(Ye){en(n,n.return,Ye)}}break;case 3:if(_i(i,n),Ni(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ya(i.containerInfo)}catch(Ye){en(n,n.return,Ye)}break;case 4:_i(i,n),Ni(n);break;case 13:_i(i,n),Ni(n),f=n.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(Nu=Zt())),c&4&&Yp(n);break;case 22:if(Se=a!==null&&a.memoizedState!==null,n.mode&1?(An=(oe=An)||Se,_i(i,n),An=oe):_i(i,n),Ni(n),c&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!Se&&(n.mode&1)!==0)for(We=n,Se=n.child;Se!==null;){for(Me=We=Se;We!==null;){switch(xe=We,Ve=xe.child,xe.tag){case 0:case 11:case 14:case 15:Ha(4,xe,xe.return);break;case 1:Os(xe,xe.return);var Xe=xe.stateNode;if(typeof Xe.componentWillUnmount=="function"){c=xe,a=xe.return;try{i=c,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(Ye){en(c,a,Ye)}}break;case 5:Os(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Qp(Me);continue}}Ve!==null?(Ve.return=xe,We=Ve):Qp(Me)}Se=Se.sibling}e:for(Se=null,Me=n;;){if(Me.tag===5){if(Se===null){Se=Me;try{f=Me.stateNode,oe?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(U=Me.stateNode,G=Me.memoizedProps.style,T=G!=null&&G.hasOwnProperty("display")?G.display:null,U.style.display=fe("display",T))}catch(Ye){en(n,n.return,Ye)}}}else if(Me.tag===6){if(Se===null)try{Me.stateNode.nodeValue=oe?"":Me.memoizedProps}catch(Ye){en(n,n.return,Ye)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;Se===Me&&(Se=null),Me=Me.return}Se===Me&&(Se=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:_i(i,n),Ni(n),c&4&&Yp(n);break;case 21:break;default:_i(i,n),Ni(n)}}function Ni(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(jp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(ge(f,""),c.flags&=-33);var p=Xp(n);Cu(n,p,f);break;case 3:case 4:var T=c.stateNode.containerInfo,U=Xp(n);bu(n,U,T);break;default:throw Error(t(161))}}catch(G){en(n,n.return,G)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function K_(n,i,a){We=n,Kp(n)}function Kp(n,i,a){for(var c=(n.mode&1)!==0;We!==null;){var f=We,p=f.child;if(f.tag===22&&c){var T=f.memoizedState!==null||el;if(!T){var U=f.alternate,G=U!==null&&U.memoizedState!==null||An;U=el;var oe=An;if(el=T,(An=G)&&!oe)for(We=f;We!==null;)T=We,G=T.child,T.tag===22&&T.memoizedState!==null?Jp(f):G!==null?(G.return=T,We=G):Jp(f);for(;p!==null;)We=p,Kp(p),p=p.sibling;We=f,el=U,An=oe}Zp(n)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,We=p):Zp(n)}}function Zp(n){for(;We!==null;){var i=We;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:An||tl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!An)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:mi(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Qh(i,p,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Qh(i,T,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&a.focus();break;case"img":G.src&&(a.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var Se=oe.memoizedState;if(Se!==null){var Me=Se.dehydrated;Me!==null&&ya(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||i.flags&512&&Au(i)}catch(xe){en(i,i.return,xe)}}if(i===n){We=null;break}if(a=i.sibling,a!==null){a.return=i.return,We=a;break}We=i.return}}function Qp(n){for(;We!==null;){var i=We;if(i===n){We=null;break}var a=i.sibling;if(a!==null){a.return=i.return,We=a;break}We=i.return}}function Jp(n){for(;We!==null;){var i=We;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{tl(4,i)}catch(G){en(i,a,G)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(G){en(i,f,G)}}var p=i.return;try{Au(i)}catch(G){en(i,p,G)}break;case 5:var T=i.return;try{Au(i)}catch(G){en(i,T,G)}}}catch(G){en(i,i.return,G)}if(i===n){We=null;break}var U=i.sibling;if(U!==null){U.return=i.return,We=U;break}We=i.return}}var Z_=Math.ceil,nl=D.ReactCurrentDispatcher,Ru=D.ReactCurrentOwner,oi=D.ReactCurrentBatchConfig,Rt=0,pn=null,sn=null,vn=0,Zn=0,ks=xr(0),cn=0,Wa=null,Qr=0,il=0,Pu=0,ja=null,Vn=null,Nu=0,Bs=1/0,Ji=null,rl=!1,Lu=null,Tr=null,sl=!1,wr=null,al=0,Xa=0,Du=null,ol=-1,ll=0;function Ln(){return(Rt&6)!==0?Zt():ol!==-1?ol:ol=Zt()}function Ar(n){return(n.mode&1)===0?1:(Rt&2)!==0&&vn!==0?vn&-vn:I_.transition!==null?(ll===0&&(ll=ze()),ll):(n=vt,n!==0||(n=window.event,n=n===void 0?16:th(n.type)),n)}function xi(n,i,a,c){if(50<Xa)throw Xa=0,Du=null,Error(t(185));_t(n,a,c),((Rt&2)===0||n!==pn)&&(n===pn&&((Rt&2)===0&&(il|=a),cn===4&&br(n,vn)),Gn(n,c),a===1&&Rt===0&&(i.mode&1)===0&&(Bs=Zt()+500,Fo&&Sr()))}function Gn(n,i){var a=n.callbackNode;kt(n,i);var c=Gt(n,n===pn?vn:0);if(c===0)a!==null&&xo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&xo(a),i===1)n.tag===0?D_(tm.bind(null,n)):zh(tm.bind(null,n)),R_(function(){(Rt&6)===0&&Sr()}),a=null;else{switch(ji(c)){case 1:a=ga;break;case 4:a=A;break;case 16:a=q;break;case 536870912:a=ne;break;default:a=q}a=cm(a,em.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function em(n,i){if(ol=-1,ll=0,(Rt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(zs()&&n.callbackNode!==a)return null;var c=Gt(n,n===pn?vn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=cl(n,c);else{i=c;var f=Rt;Rt|=2;var p=im();(pn!==n||vn!==i)&&(Ji=null,Bs=Zt()+500,es(n,i));do try{ex();break}catch(U){nm(n,U)}while(!0);Zc(),nl.current=p,Rt=f,sn!==null?i=0:(pn=null,vn=0,i=cn)}if(i!==0){if(i===2&&(f=rn(n),f!==0&&(c=f,i=Iu(n,f))),i===1)throw a=Wa,es(n,0),br(n,c),Gn(n,Zt()),a;if(i===6)br(n,c);else{if(f=n.current.alternate,(c&30)===0&&!Q_(f)&&(i=cl(n,c),i===2&&(p=rn(n),p!==0&&(c=p,i=Iu(n,p))),i===1))throw a=Wa,es(n,0),br(n,c),Gn(n,Zt()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ts(n,Vn,Ji);break;case 3:if(br(n,c),(c&130023424)===c&&(i=Nu+500-Zt(),10<i)){if(Gt(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Ln(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=zc(ts.bind(null,n,Vn,Ji),i);break}ts(n,Vn,Ji);break;case 4:if(br(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var T=31-Ce(c);p=1<<T,T=i[T],T>f&&(f=T),c&=~p}if(c=f,c=Zt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Z_(c/1960))-c,10<c){n.timeoutHandle=zc(ts.bind(null,n,Vn,Ji),c);break}ts(n,Vn,Ji);break;case 5:ts(n,Vn,Ji);break;default:throw Error(t(329))}}}return Gn(n,Zt()),n.callbackNode===a?em.bind(null,n):null}function Iu(n,i){var a=ja;return n.current.memoizedState.isDehydrated&&(es(n,i).flags|=256),n=cl(n,i),n!==2&&(i=Vn,Vn=a,i!==null&&Uu(i)),n}function Uu(n){Vn===null?Vn=n:Vn.push.apply(Vn,n)}function Q_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],p=f.getSnapshot;f=f.value;try{if(!hi(p(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function br(n,i){for(i&=~Pu,i&=~il,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ce(i),c=1<<a;n[a]=-1,i&=~c}}function tm(n){if((Rt&6)!==0)throw Error(t(327));zs();var i=Gt(n,0);if((i&1)===0)return Gn(n,Zt()),null;var a=cl(n,i);if(n.tag!==0&&a===2){var c=rn(n);c!==0&&(i=c,a=Iu(n,c))}if(a===1)throw a=Wa,es(n,0),br(n,i),Gn(n,Zt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ts(n,Vn,Ji),Gn(n,Zt()),null}function Fu(n,i){var a=Rt;Rt|=1;try{return n(i)}finally{Rt=a,Rt===0&&(Bs=Zt()+500,Fo&&Sr())}}function Jr(n){wr!==null&&wr.tag===0&&(Rt&6)===0&&zs();var i=Rt;Rt|=1;var a=oi.transition,c=vt;try{if(oi.transition=null,vt=1,n)return n()}finally{vt=c,oi.transition=a,Rt=i,(Rt&6)===0&&Sr()}}function Ou(){Zn=ks.current,qt(ks)}function es(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,C_(a)),sn!==null)for(a=sn.return;a!==null;){var c=a;switch(Xc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Io();break;case 3:Us(),qt(kn),qt(En),su();break;case 5:iu(c);break;case 4:Us();break;case 13:qt(Qt);break;case 19:qt(Qt);break;case 10:Qc(c.type._context);break;case 22:case 23:Ou()}a=a.return}if(pn=n,sn=n=Cr(n.current,null),vn=Zn=i,cn=0,Wa=null,Pu=il=Qr=0,Vn=ja=null,$r!==null){for(i=0;i<$r.length;i++)if(a=$r[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,p=a.pending;if(p!==null){var T=p.next;p.next=f,c.next=T}a.pending=c}$r=null}return n}function nm(n,i){do{var a=sn;try{if(Zc(),Xo.current=Ko,qo){for(var c=Jt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}qo=!1}if(Zr=0,hn=ln=Jt=null,ka=!1,Ba=0,Ru.current=null,a===null||a.return===null){cn=1,Wa=i,sn=null;break}e:{var p=n,T=a.return,U=a,G=i;if(i=vn,U.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var oe=G,Se=U,Me=Se.tag;if((Se.mode&1)===0&&(Me===0||Me===11||Me===15)){var xe=Se.alternate;xe?(Se.updateQueue=xe.updateQueue,Se.memoizedState=xe.memoizedState,Se.lanes=xe.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ve=bp(T);if(Ve!==null){Ve.flags&=-257,Cp(Ve,T,U,p,i),Ve.mode&1&&Ap(p,oe,i),i=Ve,G=oe;var Xe=i.updateQueue;if(Xe===null){var Ye=new Set;Ye.add(G),i.updateQueue=Ye}else Xe.add(G);break e}else{if((i&1)===0){Ap(p,oe,i),ku();break e}G=Error(t(426))}}else if($t&&U.mode&1){var nn=bp(T);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),Cp(nn,T,U,p,i),$c(Fs(G,U));break e}}p=G=Fs(G,U),cn!==4&&(cn=2),ja===null?ja=[p]:ja.push(p),p=T;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var J=Tp(p,G,i);Zh(p,J);break e;case 1:U=G;var j=p.type,ie=p.stateNode;if((p.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Tr===null||!Tr.has(ie)))){p.flags|=65536,i&=-i,p.lanes|=i;var we=wp(p,U,i);Zh(p,we);break e}}p=p.return}while(p!==null)}sm(a)}catch(Ke){i=Ke,sn===a&&a!==null&&(sn=a=a.return);continue}break}while(!0)}function im(){var n=nl.current;return nl.current=Ko,n===null?Ko:n}function ku(){(cn===0||cn===3||cn===2)&&(cn=4),pn===null||(Qr&268435455)===0&&(il&268435455)===0||br(pn,vn)}function cl(n,i){var a=Rt;Rt|=2;var c=im();(pn!==n||vn!==i)&&(Ji=null,es(n,i));do try{J_();break}catch(f){nm(n,f)}while(!0);if(Zc(),Rt=a,nl.current=c,sn!==null)throw Error(t(261));return pn=null,vn=0,cn}function J_(){for(;sn!==null;)rm(sn)}function ex(){for(;sn!==null&&!mc();)rm(sn)}function rm(n){var i=lm(n.alternate,n,Zn);n.memoizedProps=n.pendingProps,i===null?sm(n):sn=i,Ru.current=null}function sm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=X_(a,i,Zn),a!==null){sn=a;return}}else{if(a=q_(a,i),a!==null){a.flags&=32767,sn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{cn=6,sn=null;return}}if(i=i.sibling,i!==null){sn=i;return}sn=i=n}while(i!==null);cn===0&&(cn=5)}function ts(n,i,a){var c=vt,f=oi.transition;try{oi.transition=null,vt=1,tx(n,i,a,c)}finally{oi.transition=f,vt=c}return null}function tx(n,i,a,c){do zs();while(wr!==null);if((Rt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Fn(n,p),n===pn&&(sn=pn=null,vn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||sl||(sl=!0,cm(q,function(){return zs(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=oi.transition,oi.transition=null;var T=vt;vt=1;var U=Rt;Rt|=4,Ru.current=null,$_(n,a),$p(a,n),y_(kc),So=!!Oc,kc=Oc=null,n.current=a,K_(a),gc(),Rt=U,vt=T,oi.transition=p}else n.current=a;if(sl&&(sl=!1,wr=n,al=f),p=n.pendingLanes,p===0&&(Tr=null),He(a.stateNode),Gn(n,Zt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(rl)throw rl=!1,n=Lu,Lu=null,n;return(al&1)!==0&&n.tag!==0&&zs(),p=n.pendingLanes,(p&1)!==0?n===Du?Xa++:(Xa=0,Du=n):Xa=0,Sr(),null}function zs(){if(wr!==null){var n=ji(al),i=oi.transition,a=vt;try{if(oi.transition=null,vt=16>n?16:n,wr===null)var c=!1;else{if(n=wr,wr=null,al=0,(Rt&6)!==0)throw Error(t(331));var f=Rt;for(Rt|=4,We=n.current;We!==null;){var p=We,T=p.child;if((We.flags&16)!==0){var U=p.deletions;if(U!==null){for(var G=0;G<U.length;G++){var oe=U[G];for(We=oe;We!==null;){var Se=We;switch(Se.tag){case 0:case 11:case 15:Ha(8,Se,p)}var Me=Se.child;if(Me!==null)Me.return=Se,We=Me;else for(;We!==null;){Se=We;var xe=Se.sibling,Ve=Se.return;if(Wp(Se),Se===oe){We=null;break}if(xe!==null){xe.return=Ve,We=xe;break}We=Ve}}}var Xe=p.alternate;if(Xe!==null){var Ye=Xe.child;if(Ye!==null){Xe.child=null;do{var nn=Ye.sibling;Ye.sibling=null,Ye=nn}while(Ye!==null)}}We=p}}if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,We=T;else e:for(;We!==null;){if(p=We,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ha(9,p,p.return)}var J=p.sibling;if(J!==null){J.return=p.return,We=J;break e}We=p.return}}var j=n.current;for(We=j;We!==null;){T=We;var ie=T.child;if((T.subtreeFlags&2064)!==0&&ie!==null)ie.return=T,We=ie;else e:for(T=j;We!==null;){if(U=We,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:tl(9,U)}}catch(Ke){en(U,U.return,Ke)}if(U===T){We=null;break e}var we=U.sibling;if(we!==null){we.return=U.return,We=we;break e}We=U.return}}if(Rt=f,Sr(),Ne&&typeof Ne.onPostCommitFiberRoot=="function")try{Ne.onPostCommitFiberRoot(te,n)}catch{}c=!0}return c}finally{vt=a,oi.transition=i}}return!1}function am(n,i,a){i=Fs(a,i),i=Tp(n,i,1),n=Mr(n,i,1),i=Ln(),n!==null&&(_t(n,1,i),Gn(n,i))}function en(n,i,a){if(n.tag===3)am(n,n,a);else for(;i!==null;){if(i.tag===3){am(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Tr===null||!Tr.has(c))){n=Fs(a,n),n=wp(i,n,1),i=Mr(i,n,1),n=Ln(),i!==null&&(_t(i,1,n),Gn(i,n));break}}i=i.return}}function nx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ln(),n.pingedLanes|=n.suspendedLanes&a,pn===n&&(vn&a)===a&&(cn===4||cn===3&&(vn&130023424)===vn&&500>Zt()-Nu?es(n,0):Pu|=a),Gn(n,i)}function om(n,i){i===0&&((n.mode&1)===0?i=1:(i=$e,$e<<=1,($e&130023424)===0&&($e=4194304)));var a=Ln();n=Ki(n,i),n!==null&&(_t(n,i,a),Gn(n,a))}function ix(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),om(n,a)}function rx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),om(n,a)}var lm;lm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||kn.current)zn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return zn=!1,j_(n,i,a);zn=(n.flags&131072)!==0}else zn=!1,$t&&(i.flags&1048576)!==0&&Vh(i,ko,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Jo(n,i),n=i.pendingProps;var f=Cs(i,En.current);Is(i,a),f=lu(null,i,c,n,f,a);var p=cu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Bn(c)?(p=!0,Uo(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,tu(i),f.updater=Zo,i.stateNode=f,f._reactInternals=i,mu(i,c,n,a),i=vu(null,i,c,!0,p,a)):(i.tag=0,$t&&p&&jc(i),Nn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Jo(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=ax(c),n=mi(c,n),f){case 0:i=xu(null,i,c,n,a);break e;case 1:i=Ip(null,i,c,n,a);break e;case 11:i=Rp(null,i,c,n,a);break e;case 14:i=Pp(null,i,c,mi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:mi(c,f),xu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:mi(c,f),Ip(n,i,c,f,a);case 3:e:{if(Up(i),n===null)throw Error(t(387));c=i.pendingProps,p=i.memoizedState,f=p.element,Kh(n,i),Wo(i,c,null,a);var T=i.memoizedState;if(c=T.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=Fs(Error(t(423)),i),i=Fp(n,i,c,a,f);break e}else if(c!==f){f=Fs(Error(t(424)),i),i=Fp(n,i,c,a,f);break e}else for(Kn=_r(i.stateNode.containerInfo.firstChild),$n=i,$t=!0,pi=null,a=Yh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ns(),c===f){i=Qi(n,i,a);break e}Nn(n,i,c,a)}i=i.child}return i;case 5:return Jh(i),n===null&&Yc(i),c=i.type,f=i.pendingProps,p=n!==null?n.memoizedProps:null,T=f.children,Bc(c,f)?T=null:p!==null&&Bc(c,p)&&(i.flags|=32),Dp(n,i),Nn(n,i,T,a),i.child;case 6:return n===null&&Yc(i),null;case 13:return Op(n,i,a);case 4:return nu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ls(i,null,c,a):Nn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:mi(c,f),Rp(n,i,c,f,a);case 7:return Nn(n,i,i.pendingProps,a),i.child;case 8:return Nn(n,i,i.pendingProps.children,a),i.child;case 12:return Nn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,p=i.memoizedProps,T=f.value,Ht(Vo,c._currentValue),c._currentValue=T,p!==null)if(hi(p.value,T)){if(p.children===f.children&&!kn.current){i=Qi(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var U=p.dependencies;if(U!==null){T=p.child;for(var G=U.firstContext;G!==null;){if(G.context===c){if(p.tag===1){G=Zi(-1,a&-a),G.tag=2;var oe=p.updateQueue;if(oe!==null){oe=oe.shared;var Se=oe.pending;Se===null?G.next=G:(G.next=Se.next,Se.next=G),oe.pending=G}}p.lanes|=a,G=p.alternate,G!==null&&(G.lanes|=a),Jc(p.return,a,i),U.lanes|=a;break}G=G.next}}else if(p.tag===10)T=p.type===i.type?null:p.child;else if(p.tag===18){if(T=p.return,T===null)throw Error(t(341));T.lanes|=a,U=T.alternate,U!==null&&(U.lanes|=a),Jc(T,a,i),T=p.sibling}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===i){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}Nn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Is(i,a),f=si(f),c=c(f),i.flags|=1,Nn(n,i,c,a),i.child;case 14:return c=i.type,f=mi(c,i.pendingProps),f=mi(c.type,f),Pp(n,i,c,f,a);case 15:return Np(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:mi(c,f),Jo(n,i),i.tag=1,Bn(c)?(n=!0,Uo(i)):n=!1,Is(i,a),Mp(i,c,f),mu(i,c,f,a),vu(null,i,c,!0,n,a);case 19:return Bp(n,i,a);case 22:return Lp(n,i,a)}throw Error(t(156,i.tag))};function cm(n,i){return _o(n,i)}function sx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(n,i,a,c){return new sx(n,i,a,c)}function Bu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ax(n){if(typeof n=="function")return Bu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Y)return 11;if(n===H)return 14}return 2}function Cr(n,i){var a=n.alternate;return a===null?(a=li(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ul(n,i,a,c,f,p){var T=2;if(c=n,typeof n=="function")Bu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case F:return ns(a.children,f,p,i);case M:T=8,f|=8;break;case N:return n=li(12,a,i,f|2),n.elementType=N,n.lanes=p,n;case re:return n=li(13,a,i,f),n.elementType=re,n.lanes=p,n;case le:return n=li(19,a,i,f),n.elementType=le,n.lanes=p,n;case X:return fl(a,f,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case W:T=10;break e;case k:T=9;break e;case Y:T=11;break e;case H:T=14;break e;case Z:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=li(T,a,i,f),i.elementType=n,i.type=c,i.lanes=p,i}function ns(n,i,a,c){return n=li(7,n,c,i),n.lanes=a,n}function fl(n,i,a,c){return n=li(22,n,c,i),n.elementType=X,n.lanes=a,n.stateNode={isHidden:!1},n}function zu(n,i,a){return n=li(6,n,null,i),n.lanes=a,n}function Vu(n,i,a){return i=li(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function ox(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_n(0),this.expirationTimes=_n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Gu(n,i,a,c,f,p,T,U,G){return n=new ox(n,i,a,U,G),i===1?(i=1,p===!0&&(i|=8)):i=0,p=li(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},tu(p),n}function lx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function um(n){if(!n)return vr;n=n._reactInternals;e:{if(Ai(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Bn(a))return kh(n,a,i)}return i}function fm(n,i,a,c,f,p,T,U,G){return n=Gu(a,c,!0,n,f,p,T,U,G),n.context=um(null),a=n.current,c=Ln(),f=Ar(a),p=Zi(c,f),p.callback=i??null,Mr(a,p,f),n.current.lanes=f,_t(n,f,c),Gn(n,c),n}function dl(n,i,a,c){var f=i.current,p=Ln(),T=Ar(f);return a=um(a),i.context===null?i.context=a:i.pendingContext=a,i=Zi(p,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Mr(f,i,T),n!==null&&(xi(n,f,T,p),Ho(n,f,T)),T}function hl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function dm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Hu(n,i){dm(n,i),(n=n.alternate)&&dm(n,i)}function cx(){return null}var hm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wu(n){this._internalRoot=n}pl.prototype.render=Wu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));dl(n,i,null,null)},pl.prototype.unmount=Wu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Jr(function(){dl(null,n,null,null)}),i[Xi]=null}};function pl(n){this._internalRoot=n}pl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Bt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<pr.length&&i!==0&&i<pr[a].priority;a++);pr.splice(a,0,n),a===0&&Jd(n)}};function ju(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function pm(){}function ux(n,i,a,c,f){if(f){if(typeof c=="function"){var p=c;c=function(){var oe=hl(T);p.call(oe)}}var T=fm(i,c,n,0,null,!1,!1,"",pm);return n._reactRootContainer=T,n[Xi]=T.current,Pa(n.nodeType===8?n.parentNode:n),Jr(),T}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var U=c;c=function(){var oe=hl(G);U.call(oe)}}var G=Gu(n,0,!1,null,null,!1,!1,"",pm);return n._reactRootContainer=G,n[Xi]=G.current,Pa(n.nodeType===8?n.parentNode:n),Jr(function(){dl(i,G,a,c)}),G}function gl(n,i,a,c,f){var p=a._reactRootContainer;if(p){var T=p;if(typeof f=="function"){var U=f;f=function(){var G=hl(T);U.call(G)}}dl(i,T,n,f)}else T=ux(a,i,n,f,c);return hl(T)}Ut=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=bt(i.pendingLanes);a!==0&&(On(i,a|1),Gn(i,Zt()),(Rt&6)===0&&(Bs=Zt()+500,Sr()))}break;case 13:Jr(function(){var c=Ki(n,1);if(c!==null){var f=Ln();xi(c,n,1,f)}}),Hu(n,1)}},jt=function(n){if(n.tag===13){var i=Ki(n,134217728);if(i!==null){var a=Ln();xi(i,n,134217728,a)}Hu(n,134217728)}},fi=function(n){if(n.tag===13){var i=Ar(n),a=Ki(n,i);if(a!==null){var c=Ln();xi(a,n,i,c)}Hu(n,i)}},Bt=function(){return vt},di=function(n,i){var a=vt;try{return vt=n,i()}finally{vt=a}},rt=function(n,i,a){switch(i){case"input":if(Wt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Do(c);if(!f)throw Error(t(90));Ft(c),Wt(c,f)}}}break;case"textarea":Pe(n,a);break;case"select":i=a.value,i!=null&&xt(n,!!a.multiple,i,!1)}},be=Fu,_e=Jr;var fx={usingClientEntryPoint:!1,Events:[Da,As,Do,de,ke,Fu]},qa={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dx={bundleType:qa.bundleType,version:qa.version,rendererPackageName:qa.rendererPackageName,rendererConfig:qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=pa(n),n===null?null:n.stateNode},findFiberByHostInstance:qa.findFiberByHostInstance||cx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{te=_l.inject(dx),Ne=_l}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fx,Hn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ju(i))throw Error(t(200));return lx(n,i,null,a)},Hn.createRoot=function(n,i){if(!ju(n))throw Error(t(299));var a=!1,c="",f=hm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Gu(n,1,!1,null,null,a,!1,c,f),n[Xi]=i.current,Pa(n.nodeType===8?n.parentNode:n),new Wu(i)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=pa(i),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return Jr(n)},Hn.hydrate=function(n,i,a){if(!ml(i))throw Error(t(200));return gl(null,n,i,!0,a)},Hn.hydrateRoot=function(n,i,a){if(!ju(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,p="",T=hm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=fm(i,null,n,1,a??null,f,!1,p,T),n[Xi]=i.current,Pa(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new pl(i)},Hn.render=function(n,i,a){if(!ml(i))throw Error(t(200));return gl(null,n,i,!1,a)},Hn.unmountComponentAtNode=function(n){if(!ml(n))throw Error(t(40));return n._reactRootContainer?(Jr(function(){gl(null,null,n,!1,function(){n._reactRootContainer=null,n[Xi]=null})}),!0):!1},Hn.unstable_batchedUpdates=Fu,Hn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!ml(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gl(n,i,a,!1,c)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var Mm;function yx(){if(Mm)return Yu.exports;Mm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Yu.exports=Sx(),Yu.exports}var Em;function Mx(){if(Em)return xl;Em=1;var s=yx();return xl.createRoot=s.createRoot,xl.hydrateRoot=s.hydrateRoot,xl}var Ex=Mx();const Tx=Ng(Ex);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nd="184",wx=0,Tm=1,Ax=2,ql=1,bx=2,ro=3,Vr=0,jn=1,sr=2,or=0,na=1,wm=2,Am=3,bm=4,Cx=5,ls=100,Rx=101,Px=102,Nx=103,Lx=104,Dx=200,Ix=201,Ux=202,Fx=203,Of=204,kf=205,Ox=206,kx=207,Bx=208,zx=209,Vx=210,Gx=211,Hx=212,Wx=213,jx=214,Bf=0,zf=1,Vf=2,ra=3,Gf=4,Hf=5,Wf=6,jf=7,Lg=0,Xx=1,qx=2,Bi=0,Dg=1,Ig=2,Ug=3,Fg=4,Og=5,kg=6,Bg=7,zg=300,hs=301,sa=302,Zu=303,Qu=304,fc=306,Xf=1e3,ar=1001,qf=1002,Sn=1003,Yx=1004,vl=1005,Rn=1006,Ju=1007,fs=1008,ti=1009,Vg=1010,Gg=1011,oo=1012,Ld=1013,Vi=1014,Fi=1015,cr=1016,Dd=1017,Id=1018,lo=1020,Hg=35902,Wg=35899,jg=1021,Xg=1022,Ti=1023,ur=1026,ds=1027,qg=1028,Ud=1029,ps=1030,Fd=1031,Od=1033,Yl=33776,$l=33777,Kl=33778,Zl=33779,Yf=35840,$f=35841,Kf=35842,Zf=35843,Qf=36196,Jf=37492,ed=37496,td=37488,nd=37489,Jl=37490,id=37491,rd=37808,sd=37809,ad=37810,od=37811,ld=37812,cd=37813,ud=37814,fd=37815,dd=37816,hd=37817,pd=37818,md=37819,gd=37820,_d=37821,xd=36492,vd=36494,Sd=36495,yd=36283,Md=36284,ec=36285,Ed=36286,$x=3200,Td=0,Kx=1,Or="",ui="srgb",tc="srgb-linear",nc="linear",zt="srgb",Vs=7680,Cm=519,Zx=512,Qx=513,Jx=514,kd=515,ev=516,tv=517,Bd=518,nv=519,Rm=35044,Pm="300 es",Oi=2e3,co=2001;function iv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ic(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rv(){const s=ic("canvas");return s.style.display="block",s}const Nm={};function Lm(...s){const e="THREE."+s.shift();console.log(e,...s)}function Yg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function it(...s){s=Yg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Pt(...s){s=Yg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function wd(...s){const e=s.join(" ");e in Nm||(Nm[e]=!0,it(...s))}function sv(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const av={[Bf]:zf,[Vf]:Wf,[Gf]:jf,[ra]:Hf,[zf]:Bf,[Wf]:Vf,[jf]:Gf,[Hf]:ra};class ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ef=Math.PI/180,Ad=180/Math.PI;function fo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function yt(s,e,t){return Math.max(e,Math.min(t,s))}function ov(s,e){return(s%e+e)%e}function tf(s,e,t){return(1-t)*s+t*e}function $a(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const qd=class qd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qd.prototype.isVector2=!0;let Lt=qd;class ca{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let h=r[o+0],m=r[o+1],x=r[o+2],S=r[o+3],g=l[u+0],y=l[u+1],w=l[u+2],C=l[u+3];if(S!==C||h!==g||m!==y||x!==w){let v=h*g+m*y+x*w+S*C;v<0&&(g=-g,y=-y,w=-w,C=-C,v=-v);let _=1-d;if(v<.9995){const b=Math.acos(v),L=Math.sin(b);_=Math.sin(_*b)/L,d=Math.sin(d*b)/L,h=h*_+g*d,m=m*_+y*d,x=x*_+w*d,S=S*_+C*d}else{h=h*_+g*d,m=m*_+y*d,x=x*_+w*d,S=S*_+C*d;const b=1/Math.sqrt(h*h+m*m+x*x+S*S);h*=b,m*=b,x*=b,S*=b}}e[t]=h,e[t+1]=m,e[t+2]=x,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],h=r[o+1],m=r[o+2],x=r[o+3],S=l[u],g=l[u+1],y=l[u+2],w=l[u+3];return e[t]=d*w+x*S+h*y-m*g,e[t+1]=h*w+x*g+m*S-d*y,e[t+2]=m*w+x*y+d*g-h*S,e[t+3]=x*w-d*S-h*g-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,m=d(r/2),x=d(o/2),S=d(l/2),g=h(r/2),y=h(o/2),w=h(l/2);switch(u){case"XYZ":this._x=g*x*S+m*y*w,this._y=m*y*S-g*x*w,this._z=m*x*w+g*y*S,this._w=m*x*S-g*y*w;break;case"YXZ":this._x=g*x*S+m*y*w,this._y=m*y*S-g*x*w,this._z=m*x*w-g*y*S,this._w=m*x*S+g*y*w;break;case"ZXY":this._x=g*x*S-m*y*w,this._y=m*y*S+g*x*w,this._z=m*x*w+g*y*S,this._w=m*x*S-g*y*w;break;case"ZYX":this._x=g*x*S-m*y*w,this._y=m*y*S+g*x*w,this._z=m*x*w-g*y*S,this._w=m*x*S+g*y*w;break;case"YZX":this._x=g*x*S+m*y*w,this._y=m*y*S+g*x*w,this._z=m*x*w-g*y*S,this._w=m*x*S-g*y*w;break;case"XZY":this._x=g*x*S-m*y*w,this._y=m*y*S-g*x*w,this._z=m*x*w+g*y*S,this._w=m*x*S+g*y*w;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],h=t[9],m=t[2],x=t[6],S=t[10],g=r+d+S;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(x-h)*y,this._y=(l-m)*y,this._z=(u-o)*y}else if(r>d&&r>S){const y=2*Math.sqrt(1+r-d-S);this._w=(x-h)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+m)/y}else if(d>S){const y=2*Math.sqrt(1+d-r-S);this._w=(l-m)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(h+x)/y}else{const y=2*Math.sqrt(1+S-r-d);this._w=(u-o)/y,this._x=(l+m)/y,this._y=(h+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,h=t._y,m=t._z,x=t._w;return this._x=r*x+u*d+o*m-l*h,this._y=o*x+u*h+l*d-r*m,this._z=l*x+u*m+r*h-o*d,this._w=u*x-r*d-o*h-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let h=1-t;if(d<.9995){const m=Math.acos(d),x=Math.sin(m);h=Math.sin(h*m)/x,t=Math.sin(t*m)/x,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yd=class Yd{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,h=e.w,m=2*(u*o-d*r),x=2*(d*t-l*o),S=2*(l*r-u*t);return this.x=t+h*m+u*S-d*x,this.y=r+h*x+d*m-l*S,this.z=o+h*S+l*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,h=t.z;return this.x=o*h-l*d,this.y=l*u-r*h,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nf.copy(this).projectOnVector(e),this.sub(nf)}reflect(e){return this.sub(nf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yd.prototype.isVector3=!0;let Q=Yd;const nf=new Q,Dm=new ca,$d=class $d{constructor(e,t,r,o,l,u,d,h,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,h,m)}set(e,t,r,o,l,u,d,h,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=t,x[4]=l,x[5]=h,x[6]=r,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],h=r[6],m=r[1],x=r[4],S=r[7],g=r[2],y=r[5],w=r[8],C=o[0],v=o[3],_=o[6],b=o[1],L=o[4],D=o[7],z=o[2],I=o[5],F=o[8];return l[0]=u*C+d*b+h*z,l[3]=u*v+d*L+h*I,l[6]=u*_+d*D+h*F,l[1]=m*C+x*b+S*z,l[4]=m*v+x*L+S*I,l[7]=m*_+x*D+S*F,l[2]=g*C+y*b+w*z,l[5]=g*v+y*L+w*I,l[8]=g*_+y*D+w*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],x=e[8];return t*u*x-t*d*m-r*l*x+r*d*h+o*l*m-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],x=e[8],S=x*u-d*m,g=d*h-x*l,y=m*l-u*h,w=t*S+r*g+o*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=S*C,e[1]=(o*m-x*r)*C,e[2]=(d*r-o*u)*C,e[3]=g*C,e[4]=(x*t-o*h)*C,e[5]=(o*l-d*t)*C,e[6]=y*C,e[7]=(r*h-m*t)*C,e[8]=(u*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*u+m*d)+u+e,-o*m,o*h,-o*(-m*u+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(rf.makeScale(e,t)),this}rotate(e){return this.premultiply(rf.makeRotation(-e)),this}translate(e,t){return this.premultiply(rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$d.prototype.isMatrix3=!0;let dt=$d;const rf=new dt,Im=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Um=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lv(){const s={enabled:!0,workingColorSpace:tc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===zt&&(o.r=lr(o.r),o.g=lr(o.g),o.b=lr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===zt&&(o.r=ia(o.r),o.g=ia(o.g),o.b=ia(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Or?nc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return wd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return wd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[tc]:{primaries:e,whitePoint:r,transfer:nc,toXYZ:Im,fromXYZ:Um,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:Im,fromXYZ:Um,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const wt=lv();function lr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ia(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gs;class cv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Gs===void 0&&(Gs=ic("canvas")),Gs.width=e.width,Gs.height=e.height;const o=Gs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Gs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ic("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=lr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(lr(t[r]/255)*255):t[r]=lr(t[r]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uv=0;class zd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=fo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(sf(o[u].image)):l.push(sf(o[u]))}else l=sf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function sf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let fv=0;const af=new Q;class Un extends ms{constructor(e=Un.DEFAULT_IMAGE,t=Un.DEFAULT_MAPPING,r=ar,o=ar,l=Rn,u=fs,d=Ti,h=ti,m=Un.DEFAULT_ANISOTROPY,x=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=fo(),this.name="",this.source=new zd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(af).x}get height(){return this.source.getSize(af).y}get depth(){return this.source.getSize(af).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xf:e.x=e.x-Math.floor(e.x);break;case ar:e.x=e.x<0?0:1;break;case qf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xf:e.y=e.y-Math.floor(e.y);break;case ar:e.y=e.y<0?0:1;break;case qf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=zg;Un.DEFAULT_ANISOTROPY=1;const Kd=class Kd{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,m=h[0],x=h[4],S=h[8],g=h[1],y=h[5],w=h[9],C=h[2],v=h[6],_=h[10];if(Math.abs(x-g)<.01&&Math.abs(S-C)<.01&&Math.abs(w-v)<.01){if(Math.abs(x+g)<.1&&Math.abs(S+C)<.1&&Math.abs(w+v)<.1&&Math.abs(m+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(m+1)/2,D=(y+1)/2,z=(_+1)/2,I=(x+g)/4,F=(S+C)/4,M=(w+v)/4;return L>D&&L>z?L<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(L),o=I/r,l=F/r):D>z?D<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),r=I/o,l=M/o):z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),r=F/l,o=M/l),this.set(r,o,l,t),this}let b=Math.sqrt((v-w)*(v-w)+(S-C)*(S-C)+(g-x)*(g-x));return Math.abs(b)<.001&&(b=1),this.x=(v-w)/b,this.y=(S-C)/b,this.z=(g-x)/b,this.w=Math.acos((m+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kd.prototype.isVector4=!0;let tn=Kd;class dv extends ms{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Un(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new zd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends dv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class $g extends Un{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hv extends Un{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uc=class uc{constructor(e,t,r,o,l,u,d,h,m,x,S,g,y,w,C,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,h,m,x,S,g,y,w,C,v)}set(e,t,r,o,l,u,d,h,m,x,S,g,y,w,C,v){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=d,_[13]=h,_[2]=m,_[6]=x,_[10]=S,_[14]=g,_[3]=y,_[7]=w,_[11]=C,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Hs.setFromMatrixColumn(e,0).length(),l=1/Hs.setFromMatrixColumn(e,1).length(),u=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(o),m=Math.sin(o),x=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const g=u*x,y=u*S,w=d*x,C=d*S;t[0]=h*x,t[4]=-h*S,t[8]=m,t[1]=y+w*m,t[5]=g-C*m,t[9]=-d*h,t[2]=C-g*m,t[6]=w+y*m,t[10]=u*h}else if(e.order==="YXZ"){const g=h*x,y=h*S,w=m*x,C=m*S;t[0]=g+C*d,t[4]=w*d-y,t[8]=u*m,t[1]=u*S,t[5]=u*x,t[9]=-d,t[2]=y*d-w,t[6]=C+g*d,t[10]=u*h}else if(e.order==="ZXY"){const g=h*x,y=h*S,w=m*x,C=m*S;t[0]=g-C*d,t[4]=-u*S,t[8]=w+y*d,t[1]=y+w*d,t[5]=u*x,t[9]=C-g*d,t[2]=-u*m,t[6]=d,t[10]=u*h}else if(e.order==="ZYX"){const g=u*x,y=u*S,w=d*x,C=d*S;t[0]=h*x,t[4]=w*m-y,t[8]=g*m+C,t[1]=h*S,t[5]=C*m+g,t[9]=y*m-w,t[2]=-m,t[6]=d*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,y=u*m,w=d*h,C=d*m;t[0]=h*x,t[4]=C-g*S,t[8]=w*S+y,t[1]=S,t[5]=u*x,t[9]=-d*x,t[2]=-m*x,t[6]=y*S+w,t[10]=g-C*S}else if(e.order==="XZY"){const g=u*h,y=u*m,w=d*h,C=d*m;t[0]=h*x,t[4]=-S,t[8]=m*x,t[1]=g*S+C,t[5]=u*x,t[9]=y*S-w,t[2]=w*S-y,t[6]=d*x,t[10]=C*S+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pv,e,mv)}lookAt(e,t,r){const o=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Pr.crossVectors(r,Qn),Pr.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Pr.crossVectors(r,Qn)),Pr.normalize(),Sl.crossVectors(Qn,Pr),o[0]=Pr.x,o[4]=Sl.x,o[8]=Qn.x,o[1]=Pr.y,o[5]=Sl.y,o[9]=Qn.y,o[2]=Pr.z,o[6]=Sl.z,o[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],h=r[8],m=r[12],x=r[1],S=r[5],g=r[9],y=r[13],w=r[2],C=r[6],v=r[10],_=r[14],b=r[3],L=r[7],D=r[11],z=r[15],I=o[0],F=o[4],M=o[8],N=o[12],W=o[1],k=o[5],Y=o[9],re=o[13],le=o[2],H=o[6],Z=o[10],X=o[14],$=o[3],ce=o[7],ue=o[11],O=o[15];return l[0]=u*I+d*W+h*le+m*$,l[4]=u*F+d*k+h*H+m*ce,l[8]=u*M+d*Y+h*Z+m*ue,l[12]=u*N+d*re+h*X+m*O,l[1]=x*I+S*W+g*le+y*$,l[5]=x*F+S*k+g*H+y*ce,l[9]=x*M+S*Y+g*Z+y*ue,l[13]=x*N+S*re+g*X+y*O,l[2]=w*I+C*W+v*le+_*$,l[6]=w*F+C*k+v*H+_*ce,l[10]=w*M+C*Y+v*Z+_*ue,l[14]=w*N+C*re+v*X+_*O,l[3]=b*I+L*W+D*le+z*$,l[7]=b*F+L*k+D*H+z*ce,l[11]=b*M+L*Y+D*Z+z*ue,l[15]=b*N+L*re+D*X+z*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],h=e[9],m=e[13],x=e[2],S=e[6],g=e[10],y=e[14],w=e[3],C=e[7],v=e[11],_=e[15],b=h*y-m*g,L=d*y-m*S,D=d*g-h*S,z=u*y-m*x,I=u*g-h*x,F=u*S-d*x;return t*(C*b-v*L+_*D)-r*(w*b-v*z+_*I)+o*(w*L-C*z+_*F)-l*(w*D-C*I+v*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],x=e[8],S=e[9],g=e[10],y=e[11],w=e[12],C=e[13],v=e[14],_=e[15],b=t*d-r*u,L=t*h-o*u,D=t*m-l*u,z=r*h-o*d,I=r*m-l*d,F=o*m-l*h,M=x*C-S*w,N=x*v-g*w,W=x*_-y*w,k=S*v-g*C,Y=S*_-y*C,re=g*_-y*v,le=b*re-L*Y+D*k+z*W-I*N+F*M;if(le===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/le;return e[0]=(d*re-h*Y+m*k)*H,e[1]=(o*Y-r*re-l*k)*H,e[2]=(C*F-v*I+_*z)*H,e[3]=(g*I-S*F-y*z)*H,e[4]=(h*W-u*re-m*N)*H,e[5]=(t*re-o*W+l*N)*H,e[6]=(v*D-w*F-_*L)*H,e[7]=(x*F-g*D+y*L)*H,e[8]=(u*Y-d*W+m*M)*H,e[9]=(r*W-t*Y-l*M)*H,e[10]=(w*I-C*D+_*b)*H,e[11]=(S*D-x*I-y*b)*H,e[12]=(d*N-u*k-h*M)*H,e[13]=(t*k-r*N+o*M)*H,e[14]=(C*L-w*z-v*b)*H,e[15]=(x*z-S*L+g*b)*H,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,h=e.z,m=l*u,x=l*d;return this.set(m*u+r,m*d-o*h,m*h+o*d,0,m*d+o*h,x*d+r,x*h-o*u,0,m*h-o*d,x*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,h=t._w,m=l+l,x=u+u,S=d+d,g=l*m,y=l*x,w=l*S,C=u*x,v=u*S,_=d*S,b=h*m,L=h*x,D=h*S,z=r.x,I=r.y,F=r.z;return o[0]=(1-(C+_))*z,o[1]=(y+D)*z,o[2]=(w-L)*z,o[3]=0,o[4]=(y-D)*I,o[5]=(1-(g+_))*I,o[6]=(v+b)*I,o[7]=0,o[8]=(w+L)*F,o[9]=(v-b)*F,o[10]=(1-(g+C))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Hs.set(o[0],o[1],o[2]).length();const d=Hs.set(o[4],o[5],o[6]).length(),h=Hs.set(o[8],o[9],o[10]).length();l<0&&(u=-u),vi.copy(this);const m=1/u,x=1/d,S=1/h;return vi.elements[0]*=m,vi.elements[1]*=m,vi.elements[2]*=m,vi.elements[4]*=x,vi.elements[5]*=x,vi.elements[6]*=x,vi.elements[8]*=S,vi.elements[9]*=S,vi.elements[10]*=S,t.setFromRotationMatrix(vi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,t,r,o,l,u,d=Oi,h=!1){const m=this.elements,x=2*l/(t-e),S=2*l/(r-o),g=(t+e)/(t-e),y=(r+o)/(r-o);let w,C;if(h)w=l/(u-l),C=u*l/(u-l);else if(d===Oi)w=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(d===co)w=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=S,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Oi,h=!1){const m=this.elements,x=2/(t-e),S=2/(r-o),g=-(t+e)/(t-e),y=-(r+o)/(r-o);let w,C;if(h)w=1/(u-l),C=u/(u-l);else if(d===Oi)w=-2/(u-l),C=-(u+l)/(u-l);else if(d===co)w=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=S,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=w,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};uc.prototype.isMatrix4=!0;let Kt=uc;const Hs=new Q,vi=new Kt,pv=new Q(0,0,0),mv=new Q(1,1,1),Pr=new Q,Sl=new Q,Qn=new Q,Fm=new Kt,Om=new ca;class Gr{constructor(e=0,t=0,r=0,o=Gr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],h=o[1],m=o[5],x=o[9],S=o[2],g=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-yt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,y),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Om.setFromEuler(this),this.setFromQuaternion(Om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gr.DEFAULT_ORDER="XYZ";class Kg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gv=0;const km=new Q,Ws=new ca,er=new Kt,yl=new Q,Ka=new Q,_v=new Q,xv=new ca,Bm=new Q(1,0,0),zm=new Q(0,1,0),Vm=new Q(0,0,1),Gm={type:"added"},vv={type:"removed"},js={type:"childadded",child:null},of={type:"childremoved",child:null};class Pn extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new Q,t=new Gr,r=new ca,o=new Q(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new dt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Bm,e)}rotateY(e){return this.rotateOnAxis(zm,e)}rotateZ(e){return this.rotateOnAxis(Vm,e)}translateOnAxis(e,t){return km.copy(e).applyQuaternion(this.quaternion),this.position.add(km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bm,e)}translateY(e){return this.translateOnAxis(zm,e)}translateZ(e){return this.translateOnAxis(Vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?yl.copy(e):yl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(Ka,yl,this.up):er.lookAt(yl,Ka,this.up),this.quaternion.setFromRotationMatrix(er),o&&(er.extractRotation(o.matrixWorld),Ws.setFromRotationMatrix(er),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gm),js.child=e,this.dispatchEvent(js),js.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vv),of.child=e,this.dispatchEvent(of),of.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gm),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,e,_v),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,xv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,x=h.length;m<x;m++){const S=h[m];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(l(e.animations,h))}}if(t){const d=u(e.geometries),h=u(e.materials),m=u(e.textures),x=u(e.images),S=u(e.shapes),g=u(e.skeletons),y=u(e.animations),w=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(d){const h=[];for(const m in d){const x=d[m];delete x.metadata,h.push(x)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Pn.DEFAULT_UP=new Q(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class so extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sv={type:"move"};class lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new so,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new so,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new so,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const C of e.hand.values()){const v=t.getJointPose(C,r),_=this._getHandJoint(m,C);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const x=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],g=x.position.distanceTo(S.position),y=.02,w=.005;m.inputState.pinching&&g>y+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=y-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Sv)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new so;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function cf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Nt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=wt.workingColorSpace){if(e=ov(e,1),t=yt(t,0,1),r=yt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=cf(u,l,e+1/3),this.g=cf(u,l,e),this.b=cf(u,l,e-1/3)}return wt.colorSpaceToWorking(this,o),this}setStyle(e,t=ui){function r(l){l!==void 0&&parseFloat(l)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const r=Zg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return wt.workingToColorSpace(Cn.copy(this),e),Math.round(yt(Cn.r*255,0,255))*65536+Math.round(yt(Cn.g*255,0,255))*256+Math.round(yt(Cn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(Cn.copy(this),t);const r=Cn.r,o=Cn.g,l=Cn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let h,m;const x=(d+u)/2;if(d===u)h=0,m=0;else{const S=u-d;switch(m=x<=.5?S/(u+d):S/(2-u-d),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=m,e.l=x,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=ui){wt.workingToColorSpace(Cn.copy(this),e);const t=Cn.r,r=Cn.g,o=Cn.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Nr),this.setHSL(Nr.h+e,Nr.s+t,Nr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Nr),e.getHSL(Ml);const r=tf(Nr.h,Ml.h,t),o=tf(Nr.s,Ml.s,t),l=tf(Nr.l,Ml.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Nt;Nt.NAMES=Zg;class yv extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gr,this.environmentIntensity=1,this.environmentRotation=new Gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Si=new Q,tr=new Q,uf=new Q,nr=new Q,Xs=new Q,qs=new Q,Hm=new Q,ff=new Q,df=new Q,hf=new Q,pf=new tn,mf=new tn,gf=new tn;class Ei{constructor(e=new Q,t=new Q,r=new Q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Si.subVectors(e,t),o.cross(Si);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Si.subVectors(o,t),tr.subVectors(r,t),uf.subVectors(e,t);const u=Si.dot(Si),d=Si.dot(tr),h=Si.dot(uf),m=tr.dot(tr),x=tr.dot(uf),S=u*m-d*d;if(S===0)return l.set(0,0,0),null;const g=1/S,y=(m*h-d*x)*g,w=(u*x-d*h)*g;return l.set(1-y-w,w,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,t,r,o,l,u,d,h){return this.getBarycoord(e,t,r,o,nr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,nr.x),h.addScaledVector(u,nr.y),h.addScaledVector(d,nr.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return pf.setScalar(0),mf.setScalar(0),gf.setScalar(0),pf.fromBufferAttribute(e,t),mf.fromBufferAttribute(e,r),gf.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(pf,l.x),u.addScaledVector(mf,l.y),u.addScaledVector(gf,l.z),u}static isFrontFacing(e,t,r,o){return Si.subVectors(r,t),tr.subVectors(e,t),Si.cross(tr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),Si.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ei.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;Xs.subVectors(o,r),qs.subVectors(l,r),ff.subVectors(e,r);const h=Xs.dot(ff),m=qs.dot(ff);if(h<=0&&m<=0)return t.copy(r);df.subVectors(e,o);const x=Xs.dot(df),S=qs.dot(df);if(x>=0&&S<=x)return t.copy(o);const g=h*S-x*m;if(g<=0&&h>=0&&x<=0)return u=h/(h-x),t.copy(r).addScaledVector(Xs,u);hf.subVectors(e,l);const y=Xs.dot(hf),w=qs.dot(hf);if(w>=0&&y<=w)return t.copy(l);const C=y*m-h*w;if(C<=0&&m>=0&&w<=0)return d=m/(m-w),t.copy(r).addScaledVector(qs,d);const v=x*w-y*S;if(v<=0&&S-x>=0&&y-w>=0)return Hm.subVectors(l,o),d=(S-x)/(S-x+(y-w)),t.copy(o).addScaledVector(Hm,d);const _=1/(v+C+g);return u=C*_,d=g*_,t.copy(r).addScaledVector(Xs,u).addScaledVector(qs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ho{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,yi):yi.fromBufferAttribute(l,u),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),El.copy(r.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Za),Tl.subVectors(this.max,Za),Ys.subVectors(e.a,Za),$s.subVectors(e.b,Za),Ks.subVectors(e.c,Za),Lr.subVectors($s,Ys),Dr.subVectors(Ks,$s),is.subVectors(Ys,Ks);let t=[0,-Lr.z,Lr.y,0,-Dr.z,Dr.y,0,-is.z,is.y,Lr.z,0,-Lr.x,Dr.z,0,-Dr.x,is.z,0,-is.x,-Lr.y,Lr.x,0,-Dr.y,Dr.x,0,-is.y,is.x,0];return!_f(t,Ys,$s,Ks,Tl)||(t=[1,0,0,0,1,0,0,0,1],!_f(t,Ys,$s,Ks,Tl))?!1:(wl.crossVectors(Lr,Dr),t=[wl.x,wl.y,wl.z],_f(t,Ys,$s,Ks,Tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ir=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],yi=new Q,El=new ho,Ys=new Q,$s=new Q,Ks=new Q,Lr=new Q,Dr=new Q,is=new Q,Za=new Q,Tl=new Q,wl=new Q,rs=new Q;function _f(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){rs.fromArray(s,l);const d=o.x*Math.abs(rs.x)+o.y*Math.abs(rs.y)+o.z*Math.abs(rs.z),h=e.dot(rs),m=t.dot(rs),x=r.dot(rs);if(Math.max(-Math.max(h,m,x),Math.min(h,m,x))>d)return!1}return!0}const an=new Q,Al=new Lt;let Mv=0;class wi extends ms{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Rm,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Al.fromBufferAttribute(this,t),Al.applyMatrix3(e),this.setXY(t,Al.x,Al.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=$a(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Wn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$a(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$a(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$a(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$a(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array),o=Wn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array),o=Wn(o,this.array),l=Wn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Qg extends wi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Jg extends wi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class ni extends wi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Ev=new ho,Qa=new Q,xf=new Q;class po{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Ev.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qa.subVectors(e,this.center);const t=Qa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Qa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qa.copy(e.center).add(xf)),this.expandByPoint(Qa.copy(e.center).sub(xf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Tv=0;const ci=new Kt,vf=new Pn,Zs=new Q,Jn=new ho,Ja=new ho,gn=new Q;class Xn extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iv(e)?Jg:Qg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new dt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,r){return ci.makeTranslation(e,t,r),this.applyMatrix4(ci),this}scale(e,t,r){return ci.makeScale(e,t,r),this.applyMatrix4(ci),this}lookAt(e){return vf.lookAt(e),vf.updateMatrix(),this.applyMatrix4(vf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ni(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Jn.setFromBufferAttribute(l),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Ja.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(Jn.min,Ja.min),Jn.expandByPoint(gn),gn.addVectors(Jn.max,Ja.max),Jn.expandByPoint(gn)):(Jn.expandByPoint(Ja.min),Jn.expandByPoint(Ja.max))}Jn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)gn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(gn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],h=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)gn.fromBufferAttribute(d,m),h&&(Zs.fromBufferAttribute(e,m),gn.add(Zs)),o=Math.max(o,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let M=0;M<r.count;M++)d[M]=new Q,h[M]=new Q;const m=new Q,x=new Q,S=new Q,g=new Lt,y=new Lt,w=new Lt,C=new Q,v=new Q;function _(M,N,W){m.fromBufferAttribute(r,M),x.fromBufferAttribute(r,N),S.fromBufferAttribute(r,W),g.fromBufferAttribute(l,M),y.fromBufferAttribute(l,N),w.fromBufferAttribute(l,W),x.sub(m),S.sub(m),y.sub(g),w.sub(g);const k=1/(y.x*w.y-w.x*y.y);isFinite(k)&&(C.copy(x).multiplyScalar(w.y).addScaledVector(S,-y.y).multiplyScalar(k),v.copy(S).multiplyScalar(y.x).addScaledVector(x,-w.x).multiplyScalar(k),d[M].add(C),d[N].add(C),d[W].add(C),h[M].add(v),h[N].add(v),h[W].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let M=0,N=b.length;M<N;++M){const W=b[M],k=W.start,Y=W.count;for(let re=k,le=k+Y;re<le;re+=3)_(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const L=new Q,D=new Q,z=new Q,I=new Q;function F(M){z.fromBufferAttribute(o,M),I.copy(z);const N=d[M];L.copy(N),L.sub(z.multiplyScalar(z.dot(N))).normalize(),D.crossVectors(I,N);const k=D.dot(h[M])<0?-1:1;u.setXYZW(M,L.x,L.y,L.z,k)}for(let M=0,N=b.length;M<N;++M){const W=b[M],k=W.start,Y=W.count;for(let re=k,le=k+Y;re<le;re+=3)F(e.getX(re+0)),F(e.getX(re+1)),F(e.getX(re+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const o=new Q,l=new Q,u=new Q,d=new Q,h=new Q,m=new Q,x=new Q,S=new Q;if(e)for(let g=0,y=e.count;g<y;g+=3){const w=e.getX(g+0),C=e.getX(g+1),v=e.getX(g+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,v),x.subVectors(u,l),S.subVectors(o,l),x.cross(S),d.fromBufferAttribute(r,w),h.fromBufferAttribute(r,C),m.fromBufferAttribute(r,v),d.add(x),h.add(x),m.add(x),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let g=0,y=t.count;g<y;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),x.subVectors(u,l),S.subVectors(o,l),x.cross(S),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,h){const m=d.array,x=d.itemSize,S=d.normalized,g=new m.constructor(h.length*x);let y=0,w=0;for(let C=0,v=h.length;C<v;C++){d.isInterleavedBufferAttribute?y=h[C]*d.data.stride+d.offset:y=h[C]*x;for(let _=0;_<x;_++)g[w++]=m[y++]}return new wi(g,x,S)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xn,r=this.index.array,o=this.attributes;for(const d in o){const h=o[d],m=e(h,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let x=0,S=m.length;x<S;x++){const g=m[x],y=e(g,r);h.push(y)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const m=u[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],x=[];for(let S=0,g=m.length;S<g;S++){const y=m[S];x.push(y.toJSON(e.data))}x.length>0&&(o[h]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(t))}const l=e.morphAttributes;for(const m in l){const x=[],S=l[m];for(let g=0,y=S.length;g<y;g++)x.push(S[g].clone(t));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const S=u[m];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let wv=0;class gs extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=fo(),this.name="",this.type="Material",this.blending=na,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Of,this.blendDst=kf,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==na&&(r.blending=this.blending),this.side!==Vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Of&&(r.blendSrc=this.blendSrc),this.blendDst!==kf&&(r.blendDst=this.blendDst),this.blendEquation!==ls&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ra&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const rr=new Q,Sf=new Q,bl=new Q,Ir=new Q,yf=new Q,Cl=new Q,Mf=new Q;class Vd{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Sf.copy(e).add(t).multiplyScalar(.5),bl.copy(t).sub(e).normalize(),Ir.copy(this.origin).sub(Sf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(bl),d=Ir.dot(this.direction),h=-Ir.dot(bl),m=Ir.lengthSq(),x=Math.abs(1-u*u);let S,g,y,w;if(x>0)if(S=u*h-d,g=u*d-h,w=l*x,S>=0)if(g>=-w)if(g<=w){const C=1/x;S*=C,g*=C,y=S*(S+u*g+2*d)+g*(u*S+g+2*h)+m}else g=l,S=Math.max(0,-(u*g+d)),y=-S*S+g*(g+2*h)+m;else g=-l,S=Math.max(0,-(u*g+d)),y=-S*S+g*(g+2*h)+m;else g<=-w?(S=Math.max(0,-(-u*l+d)),g=S>0?-l:Math.min(Math.max(-l,-h),l),y=-S*S+g*(g+2*h)+m):g<=w?(S=0,g=Math.min(Math.max(-l,-h),l),y=g*(g+2*h)+m):(S=Math.max(0,-(u*l+d)),g=S>0?l:Math.min(Math.max(-l,-h),l),y=-S*S+g*(g+2*h)+m);else g=u>0?-l:l,S=Math.max(0,-(u*g+d)),y=-S*S+g*(g+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(Sf).addScaledVector(bl,g),y}intersectSphere(e,t){rr.subVectors(e.center,this.origin);const r=rr.dot(this.direction),o=rr.dot(rr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,h;const m=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),x>=0?(l=(e.min.y-g.y)*x,u=(e.max.y-g.y)*x):(l=(e.max.y-g.y)*x,u=(e.min.y-g.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(d=(e.min.z-g.z)*S,h=(e.max.z-g.z)*S):(d=(e.max.z-g.z)*S,h=(e.min.z-g.z)*S),r>h||d>o)||((d>r||r!==r)&&(r=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,r,o,l){yf.subVectors(t,e),Cl.subVectors(r,e),Mf.crossVectors(yf,Cl);let u=this.direction.dot(Mf),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Ir.subVectors(this.origin,e);const h=d*this.direction.dot(Cl.crossVectors(Ir,Cl));if(h<0)return null;const m=d*this.direction.dot(yf.cross(Ir));if(m<0||h+m>u)return null;const x=-d*Ir.dot(Mf);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class e0 extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gr,this.combine=Lg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wm=new Kt,ss=new Vd,Rl=new po,jm=new Q,Pl=new Q,Nl=new Q,Ll=new Q,Ef=new Q,Dl=new Q,Xm=new Q,Il=new Q;class Gi extends Pn{constructor(e=new Xn,t=new e0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Dl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const x=d[h],S=l[h];x!==0&&(Ef.fromBufferAttribute(S,e),u?Dl.addScaledVector(Ef,x):Dl.addScaledVector(Ef.sub(t),x))}t.add(Dl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(l),ss.copy(e.ray).recast(e.near),!(Rl.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Rl,jm)===null||ss.origin.distanceToSquared(jm)>(e.far-e.near)**2))&&(Wm.copy(l).invert(),ss.copy(e.ray).applyMatrix4(Wm),!(r.boundingBox!==null&&ss.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,S=l.attributes.normal,g=l.groups,y=l.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,C=g.length;w<C;w++){const v=g[w],_=u[v.materialIndex],b=Math.max(v.start,y.start),L=Math.min(d.count,Math.min(v.start+v.count,y.start+y.count));for(let D=b,z=L;D<z;D+=3){const I=d.getX(D),F=d.getX(D+1),M=d.getX(D+2);o=Ul(this,_,e,r,m,x,S,I,F,M),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let v=w,_=C;v<_;v+=3){const b=d.getX(v),L=d.getX(v+1),D=d.getX(v+2);o=Ul(this,u,e,r,m,x,S,b,L,D),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,C=g.length;w<C;w++){const v=g[w],_=u[v.materialIndex],b=Math.max(v.start,y.start),L=Math.min(h.count,Math.min(v.start+v.count,y.start+y.count));for(let D=b,z=L;D<z;D+=3){const I=D,F=D+1,M=D+2;o=Ul(this,_,e,r,m,x,S,I,F,M),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),C=Math.min(h.count,y.start+y.count);for(let v=w,_=C;v<_;v+=3){const b=v,L=v+1,D=v+2;o=Ul(this,u,e,r,m,x,S,b,L,D),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function Av(s,e,t,r,o,l,u,d){let h;if(e.side===jn?h=r.intersectTriangle(u,l,o,!0,d):h=r.intersectTriangle(o,l,u,e.side===Vr,d),h===null)return null;Il.copy(d),Il.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Il);return m<t.near||m>t.far?null:{distance:m,point:Il.clone(),object:s}}function Ul(s,e,t,r,o,l,u,d,h,m){s.getVertexPosition(d,Pl),s.getVertexPosition(h,Nl),s.getVertexPosition(m,Ll);const x=Av(s,e,t,r,Pl,Nl,Ll,Xm);if(x){const S=new Q;Ei.getBarycoord(Xm,Pl,Nl,Ll,S),o&&(x.uv=Ei.getInterpolatedAttribute(o,d,h,m,S,new Lt)),l&&(x.uv1=Ei.getInterpolatedAttribute(l,d,h,m,S,new Lt)),u&&(x.normal=Ei.getInterpolatedAttribute(u,d,h,m,S,new Q),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:d,b:h,c:m,normal:new Q,materialIndex:0};Ei.getNormal(Pl,Nl,Ll,g.normal),x.face=g,x.barycoord=S}return x}class bv extends Un{constructor(e=null,t=1,r=1,o,l,u,d,h,m=Sn,x=Sn,S,g){super(null,u,d,h,m,x,o,l,S,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tf=new Q,Cv=new Q,Rv=new dt;class os{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Tf.subVectors(r,t).cross(Cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Tf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Rv.getNormalMatrix(e),o=this.coplanarPoint(Tf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new po,Pv=new Lt(.5,.5),Fl=new Q;class Gd{constructor(e=new os,t=new os,r=new os,o=new os,l=new os,u=new os){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Oi,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],x=l[4],S=l[5],g=l[6],y=l[7],w=l[8],C=l[9],v=l[10],_=l[11],b=l[12],L=l[13],D=l[14],z=l[15];if(o[0].setComponents(m-u,y-x,_-w,z-b).normalize(),o[1].setComponents(m+u,y+x,_+w,z+b).normalize(),o[2].setComponents(m+d,y+S,_+C,z+L).normalize(),o[3].setComponents(m-d,y-S,_-C,z-L).normalize(),r)o[4].setComponents(h,g,v,D).normalize(),o[5].setComponents(m-h,y-g,_-v,z-D).normalize();else if(o[4].setComponents(m-h,y-g,_-v,z-D).normalize(),t===Oi)o[5].setComponents(m+h,y+g,_+v,z+D).normalize();else if(t===co)o[5].setComponents(h,g,v,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);const t=Pv.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Fl.x=o.normal.x>0?e.max.x:e.min.x,Fl.y=o.normal.y>0?e.max.y:e.min.y,Fl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class t0 extends gs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rc=new Q,sc=new Q,qm=new Kt,eo=new Vd,Ol=new po,wf=new Q,Ym=new Q;class Nv extends Pn{constructor(e=new Xn,t=new t0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)rc.fromBufferAttribute(t,o-1),sc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=rc.distanceTo(sc);e.setAttribute("lineDistance",new ni(r,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ol.copy(r.boundingSphere),Ol.applyMatrix4(o),Ol.radius+=l,e.ray.intersectsSphere(Ol)===!1)return;qm.copy(o).invert(),eo.copy(e.ray).applyMatrix4(qm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=this.isLineSegments?2:1,x=r.index,g=r.attributes.position;if(x!==null){const y=Math.max(0,u.start),w=Math.min(x.count,u.start+u.count);for(let C=y,v=w-1;C<v;C+=m){const _=x.getX(C),b=x.getX(C+1),L=kl(this,e,eo,h,_,b,C);L&&t.push(L)}if(this.isLineLoop){const C=x.getX(w-1),v=x.getX(y),_=kl(this,e,eo,h,C,v,w-1);_&&t.push(_)}}else{const y=Math.max(0,u.start),w=Math.min(g.count,u.start+u.count);for(let C=y,v=w-1;C<v;C+=m){const _=kl(this,e,eo,h,C,C+1,C);_&&t.push(_)}if(this.isLineLoop){const C=kl(this,e,eo,h,w-1,y,w-1);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function kl(s,e,t,r,o,l,u){const d=s.geometry.attributes.position;if(rc.fromBufferAttribute(d,o),sc.fromBufferAttribute(d,l),t.distanceSqToSegment(rc,sc,wf,Ym)>r)return;wf.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(wf);if(!(m<e.near||m>e.far))return{distance:m,point:Ym.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}class Lv extends Nv{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class n0 extends gs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $m=new Kt,bd=new Vd,Bl=new po,zl=new Q;class Dv extends Pn{constructor(e=new Xn,t=new n0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Bl.copy(r.boundingSphere),Bl.applyMatrix4(o),Bl.radius+=l,e.ray.intersectsSphere(Bl)===!1)return;$m.copy(o).invert(),bd.copy(e.ray).applyMatrix4($m);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=r.index,S=r.attributes.position;if(m!==null){const g=Math.max(0,u.start),y=Math.min(m.count,u.start+u.count);for(let w=g,C=y;w<C;w++){const v=m.getX(w);zl.fromBufferAttribute(S,v),Km(zl,v,h,o,e,t,this)}}else{const g=Math.max(0,u.start),y=Math.min(S.count,u.start+u.count);for(let w=g,C=y;w<C;w++)zl.fromBufferAttribute(S,w),Km(zl,w,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Km(s,e,t,r,o,l,u){const d=bd.distanceSqToPoint(s);if(d<t){const h=new Q;bd.closestPointToPoint(s,h),h.applyMatrix4(r);const m=o.ray.origin.distanceTo(h);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class i0 extends Un{constructor(e=[],t=hs,r,o,l,u,d,h,m,x){super(e,t,r,o,l,u,d,h,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aa extends Un{constructor(e,t,r=Vi,o,l,u,d=Sn,h=Sn,m,x=ur,S=1){if(x!==ur&&x!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:S};super(g,o,l,u,d,h,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Iv extends aa{constructor(e,t=Vi,r=hs,o,l,u=Sn,d=Sn,h,m=ur){const x={width:e,height:e,depth:1},S=[x,x,x,x,x,x];super(e,e,t,r,o,l,u,d,h,m),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class r0 extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mo extends Xn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],m=[],x=[],S=[];let g=0,y=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,o,u,2),w("x","z","y",1,-1,e,r,-t,o,u,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new ni(m,3)),this.setAttribute("normal",new ni(x,3)),this.setAttribute("uv",new ni(S,2));function w(C,v,_,b,L,D,z,I,F,M,N){const W=D/F,k=z/M,Y=D/2,re=z/2,le=I/2,H=F+1,Z=M+1;let X=0,$=0;const ce=new Q;for(let ue=0;ue<Z;ue++){const O=ue*k-re;for(let ee=0;ee<H;ee++){const Le=ee*W-Y;ce[C]=Le*b,ce[v]=O*L,ce[_]=le,m.push(ce.x,ce.y,ce.z),ce[C]=0,ce[v]=0,ce[_]=I>0?1:-1,x.push(ce.x,ce.y,ce.z),S.push(ee/F),S.push(1-ue/M),X+=1}}for(let ue=0;ue<M;ue++)for(let O=0;O<F;O++){const ee=g+O+H*ue,Le=g+O+H*(ue+1),Fe=g+(O+1)+H*(ue+1),De=g+(O+1)+H*ue;h.push(ee,Le,De),h.push(Le,Fe,De),$+=6}d.addGroup(y,$,N),y+=$,g+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Uv{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){it("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,h=l-1,m;for(;d<=h;)if(o=Math.floor(d+(h-d)/2),m=r[o]-u,m<0)d=o+1;else if(m>0)h=o-1;else{h=o;break}if(o=h,r[o]===u)return o/(l-1);const x=r[o],g=r[o+1]-x,y=(u-x)/g;return(o+y)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),h=t||(u.isVector2?new Lt:new Q);return h.copy(d).sub(u).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new Q,o=[],l=[],u=[],d=new Q,h=new Kt;for(let y=0;y<=e;y++){const w=y/e;o[y]=this.getTangentAt(w,new Q)}l[0]=new Q,u[0]=new Q;let m=Number.MAX_VALUE;const x=Math.abs(o[0].x),S=Math.abs(o[0].y),g=Math.abs(o[0].z);x<=m&&(m=x,r.set(1,0,0)),S<=m&&(m=S,r.set(0,1,0)),g<=m&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),u[y]=u[y-1].clone(),d.crossVectors(o[y-1],o[y]),d.length()>Number.EPSILON){d.normalize();const w=Math.acos(yt(o[y-1].dot(o[y]),-1,1));l[y].applyMatrix4(h.makeRotationAxis(d,w))}u[y].crossVectors(o[y],l[y])}if(t===!0){let y=Math.acos(yt(l[0].dot(l[e]),-1,1));y/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(y=-y);for(let w=1;w<=e;w++)l[w].applyMatrix4(h.makeRotationAxis(o[w],y*w)),u[w].crossVectors(o[w],l[w])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Fv extends Uv{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=h}getPoint(e,t=new Lt){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const x=Math.cos(this.aRotation),S=Math.sin(this.aRotation),g=h-this.aX,y=m-this.aY;h=g*x-y*S+this.aX,m=g*S+y*x+this.aY}return r.set(h,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class dc extends Xn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),h=Math.floor(o),m=d+1,x=h+1,S=e/d,g=t/h,y=[],w=[],C=[],v=[];for(let _=0;_<x;_++){const b=_*g-u;for(let L=0;L<m;L++){const D=L*S-l;w.push(D,-b,0),C.push(0,0,1),v.push(L/d),v.push(1-_/h)}}for(let _=0;_<h;_++)for(let b=0;b<d;b++){const L=b+m*_,D=b+m*(_+1),z=b+1+m*(_+1),I=b+1+m*_;y.push(L,D,I),y.push(D,z,I)}this.setIndex(y),this.setAttribute("position",new ni(w,3)),this.setAttribute("normal",new ni(C,3)),this.setAttribute("uv",new ni(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hd extends Xn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+d,Math.PI);let m=0;const x=[],S=new Q,g=new Q,y=[],w=[],C=[],v=[];for(let _=0;_<=r;_++){const b=[],L=_/r;let D=0;_===0&&u===0?D=.5/t:_===r&&h===Math.PI&&(D=-.5/t);for(let z=0;z<=t;z++){const I=z/t;S.x=-e*Math.cos(o+I*l)*Math.sin(u+L*d),S.y=e*Math.cos(u+L*d),S.z=e*Math.sin(o+I*l)*Math.sin(u+L*d),w.push(S.x,S.y,S.z),g.copy(S).normalize(),C.push(g.x,g.y,g.z),v.push(I+D,1-L),b.push(m++)}x.push(b)}for(let _=0;_<r;_++)for(let b=0;b<t;b++){const L=x[_][b+1],D=x[_][b],z=x[_+1][b],I=x[_+1][b+1];(_!==0||u>0)&&y.push(L,D,I),(_!==r-1||h<Math.PI)&&y.push(D,z,I)}this.setIndex(y),this.setAttribute("position",new ni(w,3)),this.setAttribute("normal",new ni(C,3)),this.setAttribute("uv",new ni(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function oa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Zm(o))o.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Zm(o[0])){const l=[];for(let u=0,d=o.length;u<d;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Dn(s){const e={};for(let t=0;t<s.length;t++){const r=oa(s[t]);for(const o in r)e[o]=r[o]}return e}function Zm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ov(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function s0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const kv={clone:oa,merge:Dn};var Bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bv,this.fragmentShader=zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oa(e.uniforms),this.uniformsGroups=Ov(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Vv extends Hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gv extends gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Td,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hv extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$x,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wv extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class a0 extends Pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Af=new Kt,Qm=new Q,Jm=new Q;class jv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gd,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Qm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qm),Jm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jm),t.updateMatrixWorld(),Af.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Af,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===co||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vl=new Q,Gl=new ca,Li=new Q;let o0=class extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vl,Gl,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Gl,Li.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Vl,Gl,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Gl,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Ur=new Q,eg=new Lt,tg=new Lt;class ei extends o0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ad*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ef*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ad*2*Math.atan(Math.tan(ef*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,eg,tg),t.subVectors(tg,eg)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ef*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/m,o*=u.width/h,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Xv extends jv{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0}}class ng extends a0{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Xv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class l0 extends o0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=x*this.view.offsetY,h=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qv extends a0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Qs=-90,Js=1;class Yv extends Pn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ei(Qs,Js,e,t);o.layers=this.layers,this.add(o);const l=new ei(Qs,Js,e,t);l.layers=this.layers,this.add(l);const u=new ei(Qs,Js,e,t);u.layers=this.layers,this.add(u);const d=new ei(Qs,Js,e,t);d.layers=this.layers,this.add(d);const h=new ei(Qs,Js,e,t);h.layers=this.layers,this.add(h);const m=new ei(Qs,Js,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,h]=t;for(const m of t)this.remove(m);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===co)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,m,x]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,x),e.setRenderTarget(S,g,y),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class $v extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Zd=class Zd{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Zd.prototype.isMatrix2=!0;let ig=Zd;function rg(s,e,t,r){const o=Kv(r);switch(t){case jg:return s*e;case qg:return s*e/o.components*o.byteLength;case Ud:return s*e/o.components*o.byteLength;case ps:return s*e*2/o.components*o.byteLength;case Fd:return s*e*2/o.components*o.byteLength;case Xg:return s*e*3/o.components*o.byteLength;case Ti:return s*e*4/o.components*o.byteLength;case Od:return s*e*4/o.components*o.byteLength;case Yl:case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kl:case Zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $f:case Zf:return Math.max(s,16)*Math.max(e,8)/4;case Yf:case Kf:return Math.max(s,8)*Math.max(e,8)/2;case Qf:case Jf:case td:case nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ed:case Jl:case id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ad:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case od:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ld:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case cd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ud:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case fd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case dd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case hd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case pd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case md:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case gd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case _d:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case xd:case vd:case Sd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case yd:case Md:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ec:case Ed:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kv(s){switch(s){case ti:case Vg:return{byteLength:1,components:1};case oo:case Gg:case cr:return{byteLength:2,components:1};case Dd:case Id:return{byteLength:2,components:4};case Vi:case Ld:case Fi:return{byteLength:4,components:1};case Hg:case Wg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nd}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function c0(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Zv(s){const e=new WeakMap;function t(d,h){const m=d.array,x=d.usage,S=m.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,m,x),d.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,h,m){const x=h.array,S=h.updateRanges;if(s.bindBuffer(m,d),S.length===0)s.bufferSubData(m,0,x);else{S.sort((y,w)=>y.start-w.start);let g=0;for(let y=1;y<S.length;y++){const w=S[g],C=S[y];C.start<=w.start+w.count+1?w.count=Math.max(w.count,C.start+C.count-w.start):(++g,S[g]=C)}S.length=g+1;for(let y=0,w=S.length;y<w;y++){const C=S[y];s.bufferSubData(m,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:o,remove:l,update:u}}var Qv=`#ifdef USE_ALPHAHASH
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
}`,gt={alphahash_fragment:Qv,alphahash_pars_fragment:Jv,alphamap_fragment:eS,alphamap_pars_fragment:tS,alphatest_fragment:nS,alphatest_pars_fragment:iS,aomap_fragment:rS,aomap_pars_fragment:sS,batching_pars_vertex:aS,batching_vertex:oS,begin_vertex:lS,beginnormal_vertex:cS,bsdfs:uS,iridescence_fragment:fS,bumpmap_pars_fragment:dS,clipping_planes_fragment:hS,clipping_planes_pars_fragment:pS,clipping_planes_pars_vertex:mS,clipping_planes_vertex:gS,color_fragment:_S,color_pars_fragment:xS,color_pars_vertex:vS,color_vertex:SS,common:yS,cube_uv_reflection_fragment:MS,defaultnormal_vertex:ES,displacementmap_pars_vertex:TS,displacementmap_vertex:wS,emissivemap_fragment:AS,emissivemap_pars_fragment:bS,colorspace_fragment:CS,colorspace_pars_fragment:RS,envmap_fragment:PS,envmap_common_pars_fragment:NS,envmap_pars_fragment:LS,envmap_pars_vertex:DS,envmap_physical_pars_fragment:WS,envmap_vertex:IS,fog_vertex:US,fog_pars_vertex:FS,fog_fragment:OS,fog_pars_fragment:kS,gradientmap_pars_fragment:BS,lightmap_pars_fragment:zS,lights_lambert_fragment:VS,lights_lambert_pars_fragment:GS,lights_pars_begin:HS,lights_toon_fragment:jS,lights_toon_pars_fragment:XS,lights_phong_fragment:qS,lights_phong_pars_fragment:YS,lights_physical_fragment:$S,lights_physical_pars_fragment:KS,lights_fragment_begin:ZS,lights_fragment_maps:QS,lights_fragment_end:JS,lightprobes_pars_fragment:ey,logdepthbuf_fragment:ty,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:ry,map_fragment:sy,map_pars_fragment:ay,map_particle_fragment:oy,map_particle_pars_fragment:ly,metalnessmap_fragment:cy,metalnessmap_pars_fragment:uy,morphinstance_vertex:fy,morphcolor_vertex:dy,morphnormal_vertex:hy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:gy,normal_fragment_maps:_y,normal_pars_fragment:xy,normal_pars_vertex:vy,normal_vertex:Sy,normalmap_pars_fragment:yy,clearcoat_normal_fragment_begin:My,clearcoat_normal_fragment_maps:Ey,clearcoat_pars_fragment:Ty,iridescence_pars_fragment:wy,opaque_fragment:Ay,packing:by,premultiplied_alpha_fragment:Cy,project_vertex:Ry,dithering_fragment:Py,dithering_pars_fragment:Ny,roughnessmap_fragment:Ly,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:Iy,shadowmap_pars_vertex:Uy,shadowmap_vertex:Fy,shadowmask_pars_fragment:Oy,skinbase_vertex:ky,skinning_pars_vertex:By,skinning_vertex:zy,skinnormal_vertex:Vy,specularmap_fragment:Gy,specularmap_pars_fragment:Hy,tonemapping_fragment:Wy,tonemapping_pars_fragment:jy,transmission_fragment:Xy,transmission_pars_fragment:qy,uv_pars_fragment:Yy,uv_pars_vertex:$y,uv_vertex:Ky,worldpos_vertex:Zy,background_vert:Qy,background_frag:Jy,backgroundCube_vert:eM,backgroundCube_frag:tM,cube_vert:nM,cube_frag:iM,depth_vert:rM,depth_frag:sM,distance_vert:aM,distance_frag:oM,equirect_vert:lM,equirect_frag:cM,linedashed_vert:uM,linedashed_frag:fM,meshbasic_vert:dM,meshbasic_frag:hM,meshlambert_vert:pM,meshlambert_frag:mM,meshmatcap_vert:gM,meshmatcap_frag:_M,meshnormal_vert:xM,meshnormal_frag:vM,meshphong_vert:SM,meshphong_frag:yM,meshphysical_vert:MM,meshphysical_frag:EM,meshtoon_vert:TM,meshtoon_frag:wM,points_vert:AM,points_frag:bM,shadow_vert:CM,shadow_frag:RM,sprite_vert:PM,sprite_frag:NM},Oe={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ui={basic:{uniforms:Dn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Dn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Dn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Dn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Dn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Dn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Dn([Oe.points,Oe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Dn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Dn([Oe.common,Oe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Dn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Dn([Oe.sprite,Oe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Dn([Oe.common,Oe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Dn([Oe.lights,Oe.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ui.physical={uniforms:Dn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Hl={r:0,b:0,g:0},LM=new Kt,u0=new dt;u0.set(-1,0,0,0,1,0,0,0,1);function DM(s,e,t,r,o,l){const u=new Nt(0);let d=o===!0?0:1,h,m,x=null,S=0,g=null;function y(b){let L=b.isScene===!0?b.background:null;if(L&&L.isTexture){const D=b.backgroundBlurriness>0;L=e.get(L,D)}return L}function w(b){let L=!1;const D=y(b);D===null?v(u,d):D&&D.isColor&&(v(D,1),L=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?t.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(b,L){const D=y(L);D&&(D.isCubeTexture||D.mapping===fc)?(m===void 0&&(m=new Gi(new mo(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:oa(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=D,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(LM.makeRotationFromEuler(L.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(u0),m.material.toneMapped=wt.getTransfer(D.colorSpace)!==zt,(x!==D||S!==D.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,x=D,S=D.version,g=s.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):D&&D.isTexture&&(h===void 0&&(h=new Gi(new dc(2,2),new Hi({name:"BackgroundMaterial",uniforms:oa(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=D,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.toneMapped=wt.getTransfer(D.colorSpace)!==zt,D.matrixAutoUpdate===!0&&D.updateMatrix(),h.material.uniforms.uvTransform.value.copy(D.matrix),(x!==D||S!==D.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,x=D,S=D.version,g=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function v(b,L){b.getRGB(Hl,s0(s)),t.buffers.color.setClear(Hl.r,Hl.g,Hl.b,L,l)}function _(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,L=1){u.set(b),d=L,v(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,v(u,d)},render:w,addToRenderList:C,dispose:_}}function IM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function d(k,Y,re,le,H){let Z=!1;const X=S(k,le,re,Y);l!==X&&(l=X,m(l.object)),Z=y(k,le,re,H),Z&&w(k,le,re,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,D(k,Y,re,le),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function h(){return s.createVertexArray()}function m(k){return s.bindVertexArray(k)}function x(k){return s.deleteVertexArray(k)}function S(k,Y,re,le){const H=le.wireframe===!0;let Z=r[Y.id];Z===void 0&&(Z={},r[Y.id]=Z);const X=k.isInstancedMesh===!0?k.id:0;let $=Z[X];$===void 0&&($={},Z[X]=$);let ce=$[re.id];ce===void 0&&(ce={},$[re.id]=ce);let ue=ce[H];return ue===void 0&&(ue=g(h()),ce[H]=ue),ue}function g(k){const Y=[],re=[],le=[];for(let H=0;H<t;H++)Y[H]=0,re[H]=0,le[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:re,attributeDivisors:le,object:k,attributes:{},index:null}}function y(k,Y,re,le){const H=l.attributes,Z=Y.attributes;let X=0;const $=re.getAttributes();for(const ce in $)if($[ce].location>=0){const O=H[ce];let ee=Z[ce];if(ee===void 0&&(ce==="instanceMatrix"&&k.instanceMatrix&&(ee=k.instanceMatrix),ce==="instanceColor"&&k.instanceColor&&(ee=k.instanceColor)),O===void 0||O.attribute!==ee||ee&&O.data!==ee.data)return!0;X++}return l.attributesNum!==X||l.index!==le}function w(k,Y,re,le){const H={},Z=Y.attributes;let X=0;const $=re.getAttributes();for(const ce in $)if($[ce].location>=0){let O=Z[ce];O===void 0&&(ce==="instanceMatrix"&&k.instanceMatrix&&(O=k.instanceMatrix),ce==="instanceColor"&&k.instanceColor&&(O=k.instanceColor));const ee={};ee.attribute=O,O&&O.data&&(ee.data=O.data),H[ce]=ee,X++}l.attributes=H,l.attributesNum=X,l.index=le}function C(){const k=l.newAttributes;for(let Y=0,re=k.length;Y<re;Y++)k[Y]=0}function v(k){_(k,0)}function _(k,Y){const re=l.newAttributes,le=l.enabledAttributes,H=l.attributeDivisors;re[k]=1,le[k]===0&&(s.enableVertexAttribArray(k),le[k]=1),H[k]!==Y&&(s.vertexAttribDivisor(k,Y),H[k]=Y)}function b(){const k=l.newAttributes,Y=l.enabledAttributes;for(let re=0,le=Y.length;re<le;re++)Y[re]!==k[re]&&(s.disableVertexAttribArray(re),Y[re]=0)}function L(k,Y,re,le,H,Z,X){X===!0?s.vertexAttribIPointer(k,Y,re,H,Z):s.vertexAttribPointer(k,Y,re,le,H,Z)}function D(k,Y,re,le){C();const H=le.attributes,Z=re.getAttributes(),X=Y.defaultAttributeValues;for(const $ in Z){const ce=Z[$];if(ce.location>=0){let ue=H[$];if(ue===void 0&&($==="instanceMatrix"&&k.instanceMatrix&&(ue=k.instanceMatrix),$==="instanceColor"&&k.instanceColor&&(ue=k.instanceColor)),ue!==void 0){const O=ue.normalized,ee=ue.itemSize,Le=e.get(ue);if(Le===void 0)continue;const Fe=Le.buffer,De=Le.type,ae=Le.bytesPerElement,ve=De===s.INT||De===s.UNSIGNED_INT||ue.gpuType===Ld;if(ue.isInterleavedBufferAttribute){const me=ue.data,Ie=me.stride,Ze=ue.offset;if(me.isInstancedInterleavedBuffer){for(let Ge=0;Ge<ce.locationSize;Ge++)_(ce.location+Ge,me.meshPerAttribute);k.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ge=0;Ge<ce.locationSize;Ge++)v(ce.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let Ge=0;Ge<ce.locationSize;Ge++)L(ce.location+Ge,ee/ce.locationSize,De,O,Ie*ae,(Ze+ee/ce.locationSize*Ge)*ae,ve)}else{if(ue.isInstancedBufferAttribute){for(let me=0;me<ce.locationSize;me++)_(ce.location+me,ue.meshPerAttribute);k.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<ce.locationSize;me++)v(ce.location+me);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let me=0;me<ce.locationSize;me++)L(ce.location+me,ee/ce.locationSize,De,O,ee*ae,ee/ce.locationSize*me*ae,ve)}}else if(X!==void 0){const O=X[$];if(O!==void 0)switch(O.length){case 2:s.vertexAttrib2fv(ce.location,O);break;case 3:s.vertexAttrib3fv(ce.location,O);break;case 4:s.vertexAttrib4fv(ce.location,O);break;default:s.vertexAttrib1fv(ce.location,O)}}}}b()}function z(){N();for(const k in r){const Y=r[k];for(const re in Y){const le=Y[re];for(const H in le){const Z=le[H];for(const X in Z)x(Z[X].object),delete Z[X];delete le[H]}}delete r[k]}}function I(k){if(r[k.id]===void 0)return;const Y=r[k.id];for(const re in Y){const le=Y[re];for(const H in le){const Z=le[H];for(const X in Z)x(Z[X].object),delete Z[X];delete le[H]}}delete r[k.id]}function F(k){for(const Y in r){const re=r[Y];for(const le in re){const H=re[le];if(H[k.id]===void 0)continue;const Z=H[k.id];for(const X in Z)x(Z[X].object),delete Z[X];delete H[k.id]}}}function M(k){for(const Y in r){const re=r[Y],le=k.isInstancedMesh===!0?k.id:0,H=re[le];if(H!==void 0){for(const Z in H){const X=H[Z];for(const $ in X)x(X[$].object),delete X[$];delete H[Z]}delete re[le],Object.keys(re).length===0&&delete r[Y]}}}function N(){W(),u=!0,l!==o&&(l=o,m(l.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:N,resetDefaultState:W,dispose:z,releaseStatesOfGeometry:I,releaseStatesOfObject:M,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:v,disableUnusedAttributes:b}}function UM(s,e,t){let r;function o(h){r=h}function l(h,m){s.drawArrays(r,h,m),t.update(m,r,1)}function u(h,m,x){x!==0&&(s.drawArraysInstanced(r,h,m,x),t.update(m,r,x))}function d(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,x);let g=0;for(let y=0;y<x;y++)g+=m[y];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function FM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==Ti&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const M=F===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ti&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Fi&&!M)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const x=h(m);x!==m&&(it("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const S=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:w,maxTextureSize:C,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:D,maxSamples:z,samples:I}}function OM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new os,d=new dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const y=S.length!==0||g||r!==0||o;return o=g,r=S.length,y},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,g){t=x(S,g,0)},this.setState=function(S,g,y){const w=S.clippingPlanes,C=S.clipIntersection,v=S.clipShadows,_=s.get(S);if(!o||w===null||w.length===0||l&&!v)l?x(null):m();else{const b=l?0:r,L=b*4;let D=_.clippingState||null;h.value=D,D=x(w,g,L,y);for(let z=0;z!==L;++z)D[z]=t[z];_.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=b}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(S,g,y,w){const C=S!==null?S.length:0;let v=null;if(C!==0){if(v=h.value,w!==!0||v===null){const _=y+C*4,b=g.matrixWorldInverse;d.getNormalMatrix(b),(v===null||v.length<_)&&(v=new Float32Array(_));for(let L=0,D=y;L!==C;++L,D+=4)u.copy(S[L]).applyMatrix4(b,d),u.normal.toArray(v,D),v[D+3]=u.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,v}}const Br=4,sg=[.125,.215,.35,.446,.526,.582],cs=20,kM=256,to=new l0,ag=new Nt;let bf=null,Cf=0,Rf=0,Pf=!1;const BM=new Q;class og{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:d=BM}=l;bf=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Rf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ug(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bf,Cf,Rf),this._renderer.xr.enabled=Pf,e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bf=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Rf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:cr,format:Ti,colorSpace:tc,depthBuffer:!1},o=lg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lg(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zM(l)),this._blurMaterial=GM(l,e,t),this._ggxMaterial=VM(l,e,t)}return o}_compileMaterial(e){const t=new Gi(new Xn,e);this._renderer.compile(t,to)}_sceneToCubeUV(e,t,r,o,l){const h=new ei(90,1,t,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,y=S.toneMapping;S.getClearColor(ag),S.toneMapping=Bi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gi(new mo,new e0({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,v=C.material;let _=!1;const b=e.background;b?b.isColor&&(v.color.copy(b),e.background=null,_=!0):(v.color.copy(ag),_=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(h.up.set(0,m[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+x[L],l.y,l.z)):D===1?(h.up.set(0,0,m[L]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+x[L],l.z)):(h.up.set(0,m[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+x[L]));const z=this._cubeSize;ea(o,D*z,L>2?z:0,z,z),S.setRenderTarget(o),_&&S.render(C,h),S.render(e,h)}S.toneMapping=y,S.autoClear=g,e.background=b}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===hs||e.mapping===sa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ug()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;ea(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,to)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const h=u.uniforms,m=r/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),S=Math.sqrt(m*m-x*x),g=0+m*1.25,y=S*g,{_lodMax:w}=this,C=this._sizeLods[r],v=3*C*(r>w-Br?r-w+Br:0),_=4*(this._cubeSize-C);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=w-t,ea(l,v,_,3*C,2*C),o.setRenderTarget(l),o.render(d,to),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=w-r,ea(e,v,_,3*C,2*C),o.setRenderTarget(e),o.render(d,to)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[o];S.material=m;const g=m.uniforms,y=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*cs-1),C=l/w,v=isFinite(l)?1+Math.floor(x*C):cs;v>cs&&it(`sigmaRadians, ${l}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${cs}`);const _=[];let b=0;for(let F=0;F<cs;++F){const M=F/C,N=Math.exp(-M*M/2);_.push(N),F===0?b+=N:F<v&&(b+=2*N)}for(let F=0;F<_.length;F++)_[F]=_[F]/b;g.envMap.value=e.texture,g.samples.value=v,g.weights.value=_,g.latitudinal.value=u==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:L}=this;g.dTheta.value=w,g.mipInt.value=L-r;const D=this._sizeLods[o],z=3*D*(o>L-Br?o-L+Br:0),I=4*(this._cubeSize-D);ea(t,z,I,3*D,2*D),h.setRenderTarget(t),h.render(S,to)}}function zM(s){const e=[],t=[],r=[];let o=s;const l=s-Br+1+sg.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);e.push(d);let h=1/d;u>s-Br?h=sg[u-s+Br-1]:u===0&&(h=0),t.push(h);const m=1/(d-2),x=-m,S=1+m,g=[x,x,S,x,S,S,x,x,S,S,x,S],y=6,w=6,C=3,v=2,_=1,b=new Float32Array(C*w*y),L=new Float32Array(v*w*y),D=new Float32Array(_*w*y);for(let I=0;I<y;I++){const F=I%3*2/3-1,M=I>2?0:-1,N=[F,M,0,F+2/3,M,0,F+2/3,M+1,0,F,M,0,F+2/3,M+1,0,F,M+1,0];b.set(N,C*w*I),L.set(g,v*w*I);const W=[I,I,I,I,I,I];D.set(W,_*w*I)}const z=new Xn;z.setAttribute("position",new wi(b,C)),z.setAttribute("uv",new wi(L,v)),z.setAttribute("faceIndex",new wi(D,_)),r.push(new Gi(z,null)),o>Br&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function lg(s,e,t){const r=new zi(s,e,t);return r.texture.mapping=fc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ea(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function VM(s,e,t){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function GM(s,e,t){const r=new Float32Array(cs),o=new Q(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:hc(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function cg(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function ug(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function hc(){return`

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
	`}class f0 extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new i0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new mo(5,5,5),l=new Hi({name:"CubemapFromEquirect",uniforms:oa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:or});l.uniforms.tEquirect.value=t;const u=new Gi(o,l),d=t.minFilter;return t.minFilter===fs&&(t.minFilter=Rn),new Yv(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function HM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,y=!1){return g==null?null:y?u(g):l(g)}function l(g){if(g&&g.isTexture){const y=g.mapping;if(y===Zu||y===Qu)if(e.has(g)){const w=e.get(g).texture;return d(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const C=new f0(w.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",m),d(C.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const y=g.mapping,w=y===Zu||y===Qu,C=y===hs||y===sa;if(w||C){let v=t.get(g);const _=v!==void 0?v.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new og(s)),v=w?r.fromEquirectangular(g,v):r.fromCubemap(g,v),v.texture.pmremVersion=g.pmremVersion,t.set(g,v),v.texture;if(v!==void 0)return v.texture;{const b=g.image;return w&&b&&b.height>0||C&&b&&h(b)?(r===null&&(r=new og(s)),v=w?r.fromEquirectangular(g):r.fromCubemap(g),v.texture.pmremVersion=g.pmremVersion,t.set(g,v),g.addEventListener("dispose",x),v.texture):null}}}return g}function d(g,y){return y===Zu?g.mapping=hs:y===Qu&&(g.mapping=sa),g}function h(g){let y=0;const w=6;for(let C=0;C<w;C++)g[C]!==void 0&&y++;return y===w}function m(g){const y=g.target;y.removeEventListener("dispose",m);const w=e.get(y);w!==void 0&&(e.delete(y),w.dispose())}function x(g){const y=g.target;y.removeEventListener("dispose",x);const w=t.get(y);w!==void 0&&(t.delete(y),w.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function WM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&wd("WebGLRenderer: "+r+" extension not supported."),o}}}function jM(s,e,t,r){const o={},l=new WeakMap;function u(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",u),delete o[g.id];const y=l.get(g);y&&(e.remove(y),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function d(S,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function h(S){const g=S.attributes;for(const y in g)e.update(g[y],s.ARRAY_BUFFER)}function m(S){const g=[],y=S.index,w=S.attributes.position;let C=0;if(w===void 0)return;if(y!==null){const b=y.array;C=y.version;for(let L=0,D=b.length;L<D;L+=3){const z=b[L+0],I=b[L+1],F=b[L+2];g.push(z,I,I,F,F,z)}}else{const b=w.array;C=w.version;for(let L=0,D=b.length/3-1;L<D;L+=3){const z=L+0,I=L+1,F=L+2;g.push(z,I,I,F,F,z)}}const v=new(w.count>=65535?Jg:Qg)(g,1);v.version=C;const _=l.get(S);_&&e.remove(_),l.set(S,v)}function x(S){const g=l.get(S);if(g){const y=S.index;y!==null&&g.version<y.version&&m(S)}else m(S);return l.get(S)}return{get:d,update:h,getWireframeAttribute:x}}function XM(s,e,t){let r;function o(S){r=S}let l,u;function d(S){l=S.type,u=S.bytesPerElement}function h(S,g){s.drawElements(r,g,l,S*u),t.update(g,r,1)}function m(S,g,y){y!==0&&(s.drawElementsInstanced(r,g,l,S*u,y),t.update(g,r,y))}function x(S,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,S,0,y);let C=0;for(let v=0;v<y;v++)C+=g[v];t.update(C,r,1)}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=x}function qM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:Pt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function YM(s,e,t){const r=new WeakMap,o=new tn;function l(u,d,h){const m=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=x!==void 0?x.length:0;let g=r.get(d);if(g===void 0||g.count!==S){let W=function(){M.dispose(),r.delete(d),d.removeEventListener("dispose",W)};var y=W;g!==void 0&&g.texture.dispose();const w=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;w===!0&&(D=1),C===!0&&(D=2),v===!0&&(D=3);let z=d.attributes.position.count*D,I=1;z>e.maxTextureSize&&(I=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const F=new Float32Array(z*I*4*S),M=new $g(F,z,I,S);M.type=Fi,M.needsUpdate=!0;const N=D*4;for(let k=0;k<S;k++){const Y=_[k],re=b[k],le=L[k],H=z*I*4*k;for(let Z=0;Z<Y.count;Z++){const X=Z*N;w===!0&&(o.fromBufferAttribute(Y,Z),F[H+X+0]=o.x,F[H+X+1]=o.y,F[H+X+2]=o.z,F[H+X+3]=0),C===!0&&(o.fromBufferAttribute(re,Z),F[H+X+4]=o.x,F[H+X+5]=o.y,F[H+X+6]=o.z,F[H+X+7]=0),v===!0&&(o.fromBufferAttribute(le,Z),F[H+X+8]=o.x,F[H+X+9]=o.y,F[H+X+10]=o.z,F[H+X+11]=le.itemSize===4?o.w:1)}}g={count:S,texture:M,size:new Lt(z,I)},r.set(d,g),d.addEventListener("dispose",W)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let v=0;v<m.length;v++)w+=m[v];const C=d.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",C),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function $M(s,e,t,r,o){let l=new WeakMap;function u(m){const x=o.render.frame,S=m.geometry,g=e.get(m,S);if(l.get(g)!==x&&(e.update(g),l.set(g,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==x&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,x))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==x&&(y.update(),l.set(y,x))}return g}function d(){l=new WeakMap}function h(m){const x=m.target;x.removeEventListener("dispose",h),r.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:u,dispose:d}}const KM={[Dg]:"LINEAR_TONE_MAPPING",[Ig]:"REINHARD_TONE_MAPPING",[Ug]:"CINEON_TONE_MAPPING",[Fg]:"ACES_FILMIC_TONE_MAPPING",[kg]:"AGX_TONE_MAPPING",[Bg]:"NEUTRAL_TONE_MAPPING",[Og]:"CUSTOM_TONE_MAPPING"};function ZM(s,e,t,r,o){const l=new zi(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new aa(e,t):void 0}),u=new zi(e,t,{type:cr,depthBuffer:!1,stencilBuffer:!1}),d=new Xn;d.setAttribute("position",new ni([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ni([0,2,0,0,2,0],2));const h=new Vv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Gi(d,h),x=new l0(-1,1,1,-1,0,1);let S=null,g=null,y=!1,w,C=null,v=[],_=!1;this.setSize=function(b,L){l.setSize(b,L),u.setSize(b,L);for(let D=0;D<v.length;D++){const z=v[D];z.setSize&&z.setSize(b,L)}},this.setEffects=function(b){v=b,_=v.length>0&&v[0].isRenderPass===!0;const L=l.width,D=l.height;for(let z=0;z<v.length;z++){const I=v[z];I.setSize&&I.setSize(L,D)}},this.begin=function(b,L){if(y||b.toneMapping===Bi&&v.length===0)return!1;if(C=L,L!==null){const D=L.width,z=L.height;(l.width!==D||l.height!==z)&&this.setSize(D,z)}return _===!1&&b.setRenderTarget(l),w=b.toneMapping,b.toneMapping=Bi,!0},this.hasRenderPass=function(){return _},this.end=function(b,L){b.toneMapping=w,y=!0;let D=l,z=u;for(let I=0;I<v.length;I++){const F=v[I];if(F.enabled!==!1&&(F.render(b,z,D,L),F.needsSwap!==!1)){const M=D;D=z,z=M}}if(S!==b.outputColorSpace||g!==b.toneMapping){S=b.outputColorSpace,g=b.toneMapping,h.defines={},wt.getTransfer(S)===zt&&(h.defines.SRGB_TRANSFER="");const I=KM[g];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=D.texture,b.setRenderTarget(C),b.render(m,x),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),d.dispose(),h.dispose()}}const d0=new Un,Cd=new aa(1,1),h0=new $g,p0=new hv,m0=new i0,fg=[],dg=[],hg=new Float32Array(16),pg=new Float32Array(9),mg=new Float32Array(4);function ua(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=fg[o];if(l===void 0&&(l=new Float32Array(o),fg[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function un(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function fn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function pc(s,e){let t=dg[e];t===void 0&&(t=new Int32Array(e),dg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function QM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function JM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2fv(this.addr,e),fn(t,e)}}function e1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;s.uniform3fv(this.addr,e),fn(t,e)}}function t1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4fv(this.addr,e),fn(t,e)}}function n1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,r))return;mg.set(r),s.uniformMatrix2fv(this.addr,!1,mg),fn(t,r)}}function i1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,r))return;pg.set(r),s.uniformMatrix3fv(this.addr,!1,pg),fn(t,r)}}function r1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,r))return;hg.set(r),s.uniformMatrix4fv(this.addr,!1,hg),fn(t,r)}}function s1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function a1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2iv(this.addr,e),fn(t,e)}}function o1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3iv(this.addr,e),fn(t,e)}}function l1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4iv(this.addr,e),fn(t,e)}}function c1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function u1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2uiv(this.addr,e),fn(t,e)}}function f1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3uiv(this.addr,e),fn(t,e)}}function d1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4uiv(this.addr,e),fn(t,e)}}function h1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Cd.compareFunction=t.isReversedDepthBuffer()?Bd:kd,l=Cd):l=d0,t.setTexture2D(e||l,o)}function p1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||p0,o)}function m1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||m0,o)}function g1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||h0,o)}function _1(s){switch(s){case 5126:return QM;case 35664:return JM;case 35665:return e1;case 35666:return t1;case 35674:return n1;case 35675:return i1;case 35676:return r1;case 5124:case 35670:return s1;case 35667:case 35671:return a1;case 35668:case 35672:return o1;case 35669:case 35673:return l1;case 5125:return c1;case 36294:return u1;case 36295:return f1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return h1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return g1}}function x1(s,e){s.uniform1fv(this.addr,e)}function v1(s,e){const t=ua(e,this.size,2);s.uniform2fv(this.addr,t)}function S1(s,e){const t=ua(e,this.size,3);s.uniform3fv(this.addr,t)}function y1(s,e){const t=ua(e,this.size,4);s.uniform4fv(this.addr,t)}function M1(s,e){const t=ua(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function E1(s,e){const t=ua(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function T1(s,e){const t=ua(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function w1(s,e){s.uniform1iv(this.addr,e)}function A1(s,e){s.uniform2iv(this.addr,e)}function b1(s,e){s.uniform3iv(this.addr,e)}function C1(s,e){s.uniform4iv(this.addr,e)}function R1(s,e){s.uniform1uiv(this.addr,e)}function P1(s,e){s.uniform2uiv(this.addr,e)}function N1(s,e){s.uniform3uiv(this.addr,e)}function L1(s,e){s.uniform4uiv(this.addr,e)}function D1(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);un(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Cd:u=d0;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,l[d])}function I1(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);un(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||p0,l[u])}function U1(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);un(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||m0,l[u])}function F1(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);un(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||h0,l[u])}function O1(s){switch(s){case 5126:return x1;case 35664:return v1;case 35665:return S1;case 35666:return y1;case 35674:return M1;case 35675:return E1;case 35676:return T1;case 5124:case 35670:return w1;case 35667:case 35671:return A1;case 35668:case 35672:return b1;case 35669:case 35673:return C1;case 5125:return R1;case 36294:return P1;case 36295:return N1;case 36296:return L1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return F1}}class k1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=_1(t.type)}}class B1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O1(t.type)}}class z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const Nf=/(\w+)(\])?(\[|\.)?/g;function gg(s,e){s.seq.push(e),s.map[e.id]=e}function V1(s,e,t){const r=s.name,o=r.length;for(Nf.lastIndex=0;;){const l=Nf.exec(r),u=Nf.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&u+2===o){gg(t,m===void 0?new k1(d,s,e):new B1(d,s,e));break}else{let S=t.map[d];S===void 0&&(S=new z1(d),gg(t,S)),t=S}}}class Ql{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),h=e.getUniformLocation(t,d.name);V1(d,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function _g(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const G1=37297;let H1=0;function W1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const xg=new dt;function j1(s){wt._getMatrix(xg,wt.workingColorSpace,s);const e=`mat3( ${xg.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(s)){case nc:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function vg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+W1(s.getShaderSource(e),d)}else return l}function X1(s,e){const t=j1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const q1={[Dg]:"Linear",[Ig]:"Reinhard",[Ug]:"Cineon",[Fg]:"ACESFilmic",[kg]:"AgX",[Bg]:"Neutral",[Og]:"Custom"};function Y1(s,e){const t=q1[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new Q;function $1(){wt.getLuminanceCoefficients(Wl);const s=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function Z1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Q1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function ao(s){return s!==""}function Sg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(s){return s.replace(J1,tE)}const eE=new Map;function tE(s,e){let t=gt[e];if(t===void 0){const r=eE.get(e);if(r!==void 0)t=gt[r],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Rd(t)}const nE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mg(s){return s.replace(nE,iE)}function iE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Eg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const rE={[ql]:"SHADOWMAP_TYPE_PCF",[ro]:"SHADOWMAP_TYPE_VSM"};function sE(s){return rE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aE={[hs]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE",[fc]:"ENVMAP_TYPE_CUBE_UV"};function oE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":aE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const lE={[sa]:"ENVMAP_MODE_REFRACTION"};function cE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":lE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uE={[Lg]:"ENVMAP_BLENDING_MULTIPLY",[Xx]:"ENVMAP_BLENDING_MIX",[qx]:"ENVMAP_BLENDING_ADD"};function fE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":uE[s.combine]||"ENVMAP_BLENDING_NONE"}function dE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function hE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const h=sE(t),m=oE(t),x=cE(t),S=fE(t),g=dE(t),y=K1(t),w=Z1(l),C=o.createProgram();let v,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ao).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ao).join(`
`),_.length>0&&(_+=`
`)):(v=[Eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),_=[Eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",t.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?gt.tonemapping_pars_fragment:"",t.toneMapping!==Bi?Y1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,X1("linearToOutputTexel",t.outputColorSpace),$1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),u=Rd(u),u=Sg(u,t),u=yg(u,t),d=Rd(d),d=Sg(d,t),d=yg(d,t),u=Mg(u),d=Mg(d),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",t.glslVersion===Pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=b+v+u,D=b+_+d,z=_g(o,o.VERTEX_SHADER,L),I=_g(o,o.FRAGMENT_SHADER,D);o.attachShader(C,z),o.attachShader(C,I),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function F(k){if(s.debug.checkShaderErrors){const Y=o.getProgramInfoLog(C)||"",re=o.getShaderInfoLog(z)||"",le=o.getShaderInfoLog(I)||"",H=Y.trim(),Z=re.trim(),X=le.trim();let $=!0,ce=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,z,I);else{const ue=vg(o,z,"vertex"),O=vg(o,I,"fragment");Pt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+H+`
`+ue+`
`+O)}else H!==""?it("WebGLProgram: Program Info Log:",H):(Z===""||X==="")&&(ce=!1);ce&&(k.diagnostics={runnable:$,programLog:H,vertexShader:{log:Z,prefix:v},fragmentShader:{log:X,prefix:_}})}o.deleteShader(z),o.deleteShader(I),M=new Ql(o,C),N=Q1(o,C)}let M;this.getUniforms=function(){return M===void 0&&F(this),M};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(C,G1)),W},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=H1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=I,this}let pE=0;class mE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new gE(e),t.set(e,r)),r}}class gE{constructor(e){this.id=pE++,this.code=e,this.usedTimes=0}}function _E(s){return s===ps||s===Jl||s===ec}function xE(s,e,t,r,o,l){const u=new Kg,d=new mE,h=new Set,m=[],x=new Map,S=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(M){return h.add(M),M===0?"uv":`uv${M}`}function C(M,N,W,k,Y,re){const le=k.fog,H=Y.geometry,Z=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,X=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,$=e.get(M.envMap||Z,X),ce=$&&$.mapping===fc?$.image.height:null,ue=y[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&it("WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const O=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ee=O!==void 0?O.length:0;let Le=0;H.morphAttributes.position!==void 0&&(Le=1),H.morphAttributes.normal!==void 0&&(Le=2),H.morphAttributes.color!==void 0&&(Le=3);let Fe,De,ae,ve;if(ue){const st=Ui[ue];Fe=st.vertexShader,De=st.fragmentShader}else Fe=M.vertexShader,De=M.fragmentShader,d.update(M),ae=d.getVertexShaderID(M),ve=d.getFragmentShaderID(M);const me=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),Ze=Y.isInstancedMesh===!0,Ge=Y.isBatchedMesh===!0,Ft=!!M.map,ut=!!M.matcap,At=!!$,It=!!M.aoMap,ft=!!M.lightMap,Wt=!!M.bumpMap,Vt=!!M.normalMap,mt=!!M.displacementMap,B=!!M.emissiveMap,xt=!!M.metalnessMap,nt=!!M.roughnessMap,Mt=M.anisotropy>0,Pe=M.clearcoat>0,Et=M.dispersion>0,P=M.iridescence>0,E=M.sheen>0,K=M.transmission>0,he=Mt&&!!M.anisotropyMap,ge=Pe&&!!M.clearcoatMap,Ee=Pe&&!!M.clearcoatNormalMap,Re=Pe&&!!M.clearcoatRoughnessMap,fe=P&&!!M.iridescenceMap,pe=P&&!!M.iridescenceThicknessMap,Ue=E&&!!M.sheenColorMap,Be=E&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,ye=!!M.specularColorMap,Je=!!M.specularIntensityMap,rt=K&&!!M.transmissionMap,pt=K&&!!M.thicknessMap,V=!!M.gradientMap,Te=!!M.alphaMap,de=M.alphaTest>0,ke=!!M.alphaHash,be=!!M.extensions;let _e=Bi;M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(_e=s.toneMapping);const je={shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:Fe,fragmentShader:De,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Ge,batchingColor:Ge&&Y._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&Y.instanceColor!==null,instancingMorph:Ze&&Y.morphTexture!==null,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ft,matcap:ut,envMap:At,envMapMode:At&&$.mapping,envMapCubeUVHeight:ce,aoMap:It,lightMap:ft,bumpMap:Wt,normalMap:Vt,displacementMap:mt,emissiveMap:B,normalMapObjectSpace:Vt&&M.normalMapType===Kx,normalMapTangentSpace:Vt&&M.normalMapType===Td,packedNormalMap:Vt&&M.normalMapType===Td&&_E(M.normalMap.format),metalnessMap:xt,roughnessMap:nt,anisotropy:Mt,anisotropyMap:he,clearcoat:Pe,clearcoatMap:ge,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Re,dispersion:Et,iridescence:P,iridescenceMap:fe,iridescenceThicknessMap:pe,sheen:E,sheenColorMap:Ue,sheenRoughnessMap:Be,specularMap:Ae,specularColorMap:ye,specularIntensityMap:Je,transmission:K,transmissionMap:rt,thicknessMap:pt,gradientMap:V,opaque:M.transparent===!1&&M.blending===na&&M.alphaToCoverage===!1,alphaMap:Te,alphaTest:de,alphaHash:ke,combine:M.combine,mapUv:Ft&&w(M.map.channel),aoMapUv:It&&w(M.aoMap.channel),lightMapUv:ft&&w(M.lightMap.channel),bumpMapUv:Wt&&w(M.bumpMap.channel),normalMapUv:Vt&&w(M.normalMap.channel),displacementMapUv:mt&&w(M.displacementMap.channel),emissiveMapUv:B&&w(M.emissiveMap.channel),metalnessMapUv:xt&&w(M.metalnessMap.channel),roughnessMapUv:nt&&w(M.roughnessMap.channel),anisotropyMapUv:he&&w(M.anisotropyMap.channel),clearcoatMapUv:ge&&w(M.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&w(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&w(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&w(M.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&w(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&w(M.sheenColorMap.channel),sheenRoughnessMapUv:Be&&w(M.sheenRoughnessMap.channel),specularMapUv:Ae&&w(M.specularMap.channel),specularColorMapUv:ye&&w(M.specularColorMap.channel),specularIntensityMapUv:Je&&w(M.specularIntensityMap.channel),transmissionMapUv:rt&&w(M.transmissionMap.channel),thicknessMapUv:pt&&w(M.thicknessMap.channel),alphaMapUv:Te&&w(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Vt||Mt),vertexNormals:!!H.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!H.attributes.uv&&(Ft||Te),fog:!!le,useFog:M.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||H.attributes.normal===void 0&&Vt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ie,skinning:Y.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Le,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:re.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:Ft&&M.map.isVideoTexture===!0&&wt.getTransfer(M.map.colorSpace)===zt,decodeVideoTextureEmissive:B&&M.emissiveMap.isVideoTexture===!0&&wt.getTransfer(M.emissiveMap.colorSpace)===zt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===sr,flipSided:M.side===jn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:be&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&M.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return je.vertexUv1s=h.has(1),je.vertexUv2s=h.has(2),je.vertexUv3s=h.has(3),h.clear(),je}function v(M){const N=[];if(M.shaderID?N.push(M.shaderID):(N.push(M.customVertexShaderID),N.push(M.customFragmentShaderID)),M.defines!==void 0)for(const W in M.defines)N.push(W),N.push(M.defines[W]);return M.isRawShaderMaterial===!1&&(_(N,M),b(N,M),N.push(s.outputColorSpace)),N.push(M.customProgramCacheKey),N.join()}function _(M,N){M.push(N.precision),M.push(N.outputColorSpace),M.push(N.envMapMode),M.push(N.envMapCubeUVHeight),M.push(N.mapUv),M.push(N.alphaMapUv),M.push(N.lightMapUv),M.push(N.aoMapUv),M.push(N.bumpMapUv),M.push(N.normalMapUv),M.push(N.displacementMapUv),M.push(N.emissiveMapUv),M.push(N.metalnessMapUv),M.push(N.roughnessMapUv),M.push(N.anisotropyMapUv),M.push(N.clearcoatMapUv),M.push(N.clearcoatNormalMapUv),M.push(N.clearcoatRoughnessMapUv),M.push(N.iridescenceMapUv),M.push(N.iridescenceThicknessMapUv),M.push(N.sheenColorMapUv),M.push(N.sheenRoughnessMapUv),M.push(N.specularMapUv),M.push(N.specularColorMapUv),M.push(N.specularIntensityMapUv),M.push(N.transmissionMapUv),M.push(N.thicknessMapUv),M.push(N.combine),M.push(N.fogExp2),M.push(N.sizeAttenuation),M.push(N.morphTargetsCount),M.push(N.morphAttributeCount),M.push(N.numDirLights),M.push(N.numPointLights),M.push(N.numSpotLights),M.push(N.numSpotLightMaps),M.push(N.numHemiLights),M.push(N.numRectAreaLights),M.push(N.numDirLightShadows),M.push(N.numPointLightShadows),M.push(N.numSpotLightShadows),M.push(N.numSpotLightShadowsWithMaps),M.push(N.numLightProbes),M.push(N.shadowMapType),M.push(N.toneMapping),M.push(N.numClippingPlanes),M.push(N.numClipIntersection),M.push(N.depthPacking)}function b(M,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),M.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),M.push(u.mask)}function L(M){const N=y[M.type];let W;if(N){const k=Ui[N];W=kv.clone(k.uniforms)}else W=M.uniforms;return W}function D(M,N){let W=x.get(N);return W!==void 0?++W.usedTimes:(W=new hE(s,N,M,o),m.push(W),x.set(N,W)),W}function z(M){if(--M.usedTimes===0){const N=m.indexOf(M);m[N]=m[m.length-1],m.pop(),x.delete(M.cacheKey),M.destroy()}}function I(M){d.remove(M)}function F(){d.dispose()}return{getParameters:C,getProgramCacheKey:v,getUniforms:L,acquireProgram:D,releaseProgram:z,releaseShaderCache:I,programs:m,dispose:F}}function vE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,h){s.get(u)[d]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function SE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Tg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,w,C,v,_){let b=s[e];return b===void 0?(b={id:g.id,object:g,geometry:y,material:w,materialVariant:u(g),groupOrder:C,renderOrder:g.renderOrder,z:v,group:_},s[e]=b):(b.id=g.id,b.object=g,b.geometry=y,b.material=w,b.materialVariant=u(g),b.groupOrder=C,b.renderOrder=g.renderOrder,b.z=v,b.group=_),e++,b}function h(g,y,w,C,v,_){const b=d(g,y,w,C,v,_);w.transmission>0?r.push(b):w.transparent===!0?o.push(b):t.push(b)}function m(g,y,w,C,v,_){const b=d(g,y,w,C,v,_);w.transmission>0?r.unshift(b):w.transparent===!0?o.unshift(b):t.unshift(b)}function x(g,y){t.length>1&&t.sort(g||SE),r.length>1&&r.sort(y||Tg),o.length>1&&o.sort(y||Tg)}function S(){for(let g=e,y=s.length;g<y;g++){const w=s[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:m,finish:S,sort:x}}function yE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new wg,s.set(r,[u])):o>=l.length?(u=new wg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function ME(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new Nt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":t={color:new Nt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=t,t}}}function EE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let TE=0;function wE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function AE(s){const e=new ME,t=EE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const o=new Q,l=new Kt,u=new Kt;function d(m){let x=0,S=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let y=0,w=0,C=0,v=0,_=0,b=0,L=0,D=0,z=0,I=0,F=0;m.sort(wE);for(let N=0,W=m.length;N<W;N++){const k=m[N],Y=k.color,re=k.intensity,le=k.distance;let H=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ps?H=k.shadow.map.texture:H=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)x+=Y.r*re,S+=Y.g*re,g+=Y.b*re;else if(k.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(k.sh.coefficients[Z],re);F++}else if(k.isDirectionalLight){const Z=e.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const X=k.shadow,$=t.get(k);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,r.directionalShadow[y]=$,r.directionalShadowMap[y]=H,r.directionalShadowMatrix[y]=k.shadow.matrix,b++}r.directional[y]=Z,y++}else if(k.isSpotLight){const Z=e.get(k);Z.position.setFromMatrixPosition(k.matrixWorld),Z.color.copy(Y).multiplyScalar(re),Z.distance=le,Z.coneCos=Math.cos(k.angle),Z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Z.decay=k.decay,r.spot[C]=Z;const X=k.shadow;if(k.map&&(r.spotLightMap[z]=k.map,z++,X.updateMatrices(k),k.castShadow&&I++),r.spotLightMatrix[C]=X.matrix,k.castShadow){const $=t.get(k);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,r.spotShadow[C]=$,r.spotShadowMap[C]=H,D++}C++}else if(k.isRectAreaLight){const Z=e.get(k);Z.color.copy(Y).multiplyScalar(re),Z.halfWidth.set(k.width*.5,0,0),Z.halfHeight.set(0,k.height*.5,0),r.rectArea[v]=Z,v++}else if(k.isPointLight){const Z=e.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),Z.distance=k.distance,Z.decay=k.decay,k.castShadow){const X=k.shadow,$=t.get(k);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,$.shadowCameraNear=X.camera.near,$.shadowCameraFar=X.camera.far,r.pointShadow[w]=$,r.pointShadowMap[w]=H,r.pointShadowMatrix[w]=k.shadow.matrix,L++}r.point[w]=Z,w++}else if(k.isHemisphereLight){const Z=e.get(k);Z.skyColor.copy(k.color).multiplyScalar(re),Z.groundColor.copy(k.groundColor).multiplyScalar(re),r.hemi[_]=Z,_++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=S,r.ambient[2]=g;const M=r.hash;(M.directionalLength!==y||M.pointLength!==w||M.spotLength!==C||M.rectAreaLength!==v||M.hemiLength!==_||M.numDirectionalShadows!==b||M.numPointShadows!==L||M.numSpotShadows!==D||M.numSpotMaps!==z||M.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=v,r.point.length=w,r.hemi.length=_,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=D+z-I,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=F,M.directionalLength=y,M.pointLength=w,M.spotLength=C,M.rectAreaLength=v,M.hemiLength=_,M.numDirectionalShadows=b,M.numPointShadows=L,M.numSpotShadows=D,M.numSpotMaps=z,M.numLightProbes=F,r.version=TE++)}function h(m,x){let S=0,g=0,y=0,w=0,C=0;const v=x.matrixWorldInverse;for(let _=0,b=m.length;_<b;_++){const L=m[_];if(L.isDirectionalLight){const D=r.directional[S];D.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(v),S++}else if(L.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(v),D.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(v),y++}else if(L.isRectAreaLight){const D=r.rectArea[w];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(v),u.identity(),l.copy(L.matrixWorld),l.premultiply(v),u.extractRotation(l),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),w++}else if(L.isPointLight){const D=r.point[g];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(v),g++}else if(L.isHemisphereLight){const D=r.hemi[C];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(v),C++}}}return{setup:d,setupView:h,state:r}}function Ag(s){const e=new AE(s),t=[],r=[],o=[];function l(g){S.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function d(g){r.push(g)}function h(g){o.push(g)}function m(){e.setup(t)}function x(g){e.setupView(t,g)}const S={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:m,setupLightsView:x,pushLight:u,pushShadow:d,pushLightProbeGrid:h}}function bE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new Ag(s),e.set(o,[d])):l>=u.length?(d=new Ag(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const CE=`void main() {
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
}`,PE=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],NE=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],bg=new Kt,no=new Q,Lf=new Q;function LE(s,e,t){let r=new Gd;const o=new Lt,l=new Lt,u=new tn,d=new Hv,h=new Wv,m={},x=t.maxTextureSize,S={[Vr]:jn,[jn]:Vr,[sr]:sr},g=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:CE,fragmentShader:RE}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const w=new Xn;w.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Gi(w,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let _=this.type;this.render=function(I,F,M){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;this.type===bx&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ql);const N=s.getRenderTarget(),W=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(or),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const re=_!==this.type;re&&F.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(H=>H.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,H=I.length;le<H;le++){const Z=I[le],X=Z.shadow;if(X===void 0){it("WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const $=X.getFrameExtents();o.multiply($),l.copy(X.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/$.x),o.x=l.x*$.x,X.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/$.y),o.y=l.y*$.y,X.mapSize.y=l.y));const ce=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=ce,X.map===null||re===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ro){if(Z.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new zi(o.x,o.y,{format:ps,type:cr,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),X.map.texture.name=Z.name+".shadowMap",X.map.depthTexture=new aa(o.x,o.y,Fi),X.map.depthTexture.name=Z.name+".shadowMapDepth",X.map.depthTexture.format=ur,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Sn,X.map.depthTexture.magFilter=Sn}else Z.isPointLight?(X.map=new f0(o.x),X.map.depthTexture=new Iv(o.x,Vi)):(X.map=new zi(o.x,o.y),X.map.depthTexture=new aa(o.x,o.y,Vi)),X.map.depthTexture.name=Z.name+".shadowMap",X.map.depthTexture.format=ur,this.type===ql?(X.map.depthTexture.compareFunction=ce?Bd:kd,X.map.depthTexture.minFilter=Rn,X.map.depthTexture.magFilter=Rn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Sn,X.map.depthTexture.magFilter=Sn);X.camera.updateProjectionMatrix()}const ue=X.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<ue;O++){if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,O),s.clear();else{O===0&&(s.setRenderTarget(X.map),s.clear());const ee=X.getViewport(O);u.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),Y.viewport(u)}if(Z.isPointLight){const ee=X.camera,Le=X.matrix,Fe=Z.distance||ee.far;Fe!==ee.far&&(ee.far=Fe,ee.updateProjectionMatrix()),no.setFromMatrixPosition(Z.matrixWorld),ee.position.copy(no),Lf.copy(ee.position),Lf.add(PE[O]),ee.up.copy(NE[O]),ee.lookAt(Lf),ee.updateMatrixWorld(),Le.makeTranslation(-no.x,-no.y,-no.z),bg.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),X._frustum.setFromProjectionMatrix(bg,ee.coordinateSystem,ee.reversedDepth)}else X.updateMatrices(Z);r=X.getFrustum(),D(F,M,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===ro&&b(X,M),X.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget(N,W,k)};function b(I,F){const M=e.update(C);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new zi(o.x,o.y,{format:ps,type:cr})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(F,null,M,g,C,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(F,null,M,y,C,null)}function L(I,F,M,N){let W=null;const k=M.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)W=k;else if(W=M.isPointLight===!0?h:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Y=W.uuid,re=F.uuid;let le=m[Y];le===void 0&&(le={},m[Y]=le);let H=le[re];H===void 0&&(H=W.clone(),le[re]=H,F.addEventListener("dispose",z)),W=H}if(W.visible=F.visible,W.wireframe=F.wireframe,N===ro?W.side=F.shadowSide!==null?F.shadowSide:F.side:W.side=F.shadowSide!==null?F.shadowSide:S[F.side],W.alphaMap=F.alphaMap,W.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,W.map=F.map,W.clipShadows=F.clipShadows,W.clippingPlanes=F.clippingPlanes,W.clipIntersection=F.clipIntersection,W.displacementMap=F.displacementMap,W.displacementScale=F.displacementScale,W.displacementBias=F.displacementBias,W.wireframeLinewidth=F.wireframeLinewidth,W.linewidth=F.linewidth,M.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const Y=s.properties.get(W);Y.light=M}return W}function D(I,F,M,N,W){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&W===ro)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,I.matrixWorld);const re=e.update(I),le=I.material;if(Array.isArray(le)){const H=re.groups;for(let Z=0,X=H.length;Z<X;Z++){const $=H[Z],ce=le[$.materialIndex];if(ce&&ce.visible){const ue=L(I,ce,N,W);I.onBeforeShadow(s,I,F,M,re,ue,$),s.renderBufferDirect(M,null,re,ue,I,$),I.onAfterShadow(s,I,F,M,re,ue,$)}}}else if(le.visible){const H=L(I,le,N,W);I.onBeforeShadow(s,I,F,M,re,H,null),s.renderBufferDirect(M,null,re,H,I,null),I.onAfterShadow(s,I,F,M,re,H,null)}}const Y=I.children;for(let re=0,le=Y.length;re<le;re++)D(Y[re],F,M,N,W)}function z(I){I.target.removeEventListener("dispose",z);for(const M in m){const N=m[M],W=I.target.uuid;W in N&&(N[W].dispose(),delete N[W])}}}function DE(s,e){function t(){let V=!1;const Te=new tn;let de=null;const ke=new tn(0,0,0,0);return{setMask:function(be){de!==be&&!V&&(s.colorMask(be,be,be,be),de=be)},setLocked:function(be){V=be},setClear:function(be,_e,je,st,Ot){Ot===!0&&(be*=st,_e*=st,je*=st),Te.set(be,_e,je,st),ke.equals(Te)===!1&&(s.clearColor(be,_e,je,st),ke.copy(Te))},reset:function(){V=!1,de=null,ke.set(-1,0,0,0)}}}function r(){let V=!1,Te=!1,de=null,ke=null,be=null;return{setReversed:function(_e){if(Te!==_e){const je=e.get("EXT_clip_control");_e?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Te=_e;const st=be;be=null,this.setClear(st)}},getReversed:function(){return Te},setTest:function(_e){_e?me(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(_e){de!==_e&&!V&&(s.depthMask(_e),de=_e)},setFunc:function(_e){if(Te&&(_e=av[_e]),ke!==_e){switch(_e){case Bf:s.depthFunc(s.NEVER);break;case zf:s.depthFunc(s.ALWAYS);break;case Vf:s.depthFunc(s.LESS);break;case ra:s.depthFunc(s.LEQUAL);break;case Gf:s.depthFunc(s.EQUAL);break;case Hf:s.depthFunc(s.GEQUAL);break;case Wf:s.depthFunc(s.GREATER);break;case jf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ke=_e}},setLocked:function(_e){V=_e},setClear:function(_e){be!==_e&&(be=_e,Te&&(_e=1-_e),s.clearDepth(_e))},reset:function(){V=!1,de=null,ke=null,be=null,Te=!1}}}function o(){let V=!1,Te=null,de=null,ke=null,be=null,_e=null,je=null,st=null,Ot=null;return{setTest:function(Tt){V||(Tt?me(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(Tt){Te!==Tt&&!V&&(s.stencilMask(Tt),Te=Tt)},setFunc:function(Tt,dn,ot){(de!==Tt||ke!==dn||be!==ot)&&(s.stencilFunc(Tt,dn,ot),de=Tt,ke=dn,be=ot)},setOp:function(Tt,dn,ot){(_e!==Tt||je!==dn||st!==ot)&&(s.stencilOp(Tt,dn,ot),_e=Tt,je=dn,st=ot)},setLocked:function(Tt){V=Tt},setClear:function(Tt){Ot!==Tt&&(s.clearStencil(Tt),Ot=Tt)},reset:function(){V=!1,Te=null,de=null,ke=null,be=null,_e=null,je=null,st=null,Ot=null}}}const l=new t,u=new r,d=new o,h=new WeakMap,m=new WeakMap;let x={},S={},g={},y=new WeakMap,w=[],C=null,v=!1,_=null,b=null,L=null,D=null,z=null,I=null,F=null,M=new Nt(0,0,0),N=0,W=!1,k=null,Y=null,re=null,le=null,H=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const ce=s.getParameter(s.VERSION);ce.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ce)[1]),X=$>=1):ce.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),X=$>=2);let ue=null,O={};const ee=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),Fe=new tn().fromArray(ee),De=new tn().fromArray(Le);function ae(V,Te,de,ke){const be=new Uint8Array(4),_e=s.createTexture();s.bindTexture(V,_e),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<de;je++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,ke,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Te+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return _e}const ve={};ve[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),me(s.DEPTH_TEST),u.setFunc(ra),Wt(!1),Vt(Tm),me(s.CULL_FACE),It(or);function me(V){x[V]!==!0&&(s.enable(V),x[V]=!0)}function Ie(V){x[V]!==!1&&(s.disable(V),x[V]=!1)}function Ze(V,Te){return g[V]!==Te?(s.bindFramebuffer(V,Te),g[V]=Te,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Te),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ge(V,Te){let de=w,ke=!1;if(V){de=y.get(Te),de===void 0&&(de=[],y.set(Te,de));const be=V.textures;if(de.length!==be.length||de[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,je=be.length;_e<je;_e++)de[_e]=s.COLOR_ATTACHMENT0+_e;de.length=be.length,ke=!0}}else de[0]!==s.BACK&&(de[0]=s.BACK,ke=!0);ke&&s.drawBuffers(de)}function Ft(V){return C!==V?(s.useProgram(V),C=V,!0):!1}const ut={[ls]:s.FUNC_ADD,[Rx]:s.FUNC_SUBTRACT,[Px]:s.FUNC_REVERSE_SUBTRACT};ut[Nx]=s.MIN,ut[Lx]=s.MAX;const At={[Dx]:s.ZERO,[Ix]:s.ONE,[Ux]:s.SRC_COLOR,[Of]:s.SRC_ALPHA,[Vx]:s.SRC_ALPHA_SATURATE,[Bx]:s.DST_COLOR,[Ox]:s.DST_ALPHA,[Fx]:s.ONE_MINUS_SRC_COLOR,[kf]:s.ONE_MINUS_SRC_ALPHA,[zx]:s.ONE_MINUS_DST_COLOR,[kx]:s.ONE_MINUS_DST_ALPHA,[Gx]:s.CONSTANT_COLOR,[Hx]:s.ONE_MINUS_CONSTANT_COLOR,[Wx]:s.CONSTANT_ALPHA,[jx]:s.ONE_MINUS_CONSTANT_ALPHA};function It(V,Te,de,ke,be,_e,je,st,Ot,Tt){if(V===or){v===!0&&(Ie(s.BLEND),v=!1);return}if(v===!1&&(me(s.BLEND),v=!0),V!==Cx){if(V!==_||Tt!==W){if((b!==ls||z!==ls)&&(s.blendEquation(s.FUNC_ADD),b=ls,z=ls),Tt)switch(V){case na:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wm:s.blendFunc(s.ONE,s.ONE);break;case Am:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Pt("WebGLState: Invalid blending: ",V);break}else switch(V){case na:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Am:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bm:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",V);break}L=null,D=null,I=null,F=null,M.set(0,0,0),N=0,_=V,W=Tt}return}be=be||Te,_e=_e||de,je=je||ke,(Te!==b||be!==z)&&(s.blendEquationSeparate(ut[Te],ut[be]),b=Te,z=be),(de!==L||ke!==D||_e!==I||je!==F)&&(s.blendFuncSeparate(At[de],At[ke],At[_e],At[je]),L=de,D=ke,I=_e,F=je),(st.equals(M)===!1||Ot!==N)&&(s.blendColor(st.r,st.g,st.b,Ot),M.copy(st),N=Ot),_=V,W=!1}function ft(V,Te){V.side===sr?Ie(s.CULL_FACE):me(s.CULL_FACE);let de=V.side===jn;Te&&(de=!de),Wt(de),V.blending===na&&V.transparent===!1?It(or):It(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const ke=V.stencilWrite;d.setTest(ke),ke&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),B(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(V){k!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),k=V)}function Vt(V){V!==wx?(me(s.CULL_FACE),V!==Y&&(V===Tm?s.cullFace(s.BACK):V===Ax?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),Y=V}function mt(V){V!==re&&(X&&s.lineWidth(V),re=V)}function B(V,Te,de){V?(me(s.POLYGON_OFFSET_FILL),(le!==Te||H!==de)&&(le=Te,H=de,u.getReversed()&&(Te=-Te),s.polygonOffset(Te,de))):Ie(s.POLYGON_OFFSET_FILL)}function xt(V){V?me(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function nt(V){V===void 0&&(V=s.TEXTURE0+Z-1),ue!==V&&(s.activeTexture(V),ue=V)}function Mt(V,Te,de){de===void 0&&(ue===null?de=s.TEXTURE0+Z-1:de=ue);let ke=O[de];ke===void 0&&(ke={type:void 0,texture:void 0},O[de]=ke),(ke.type!==V||ke.texture!==Te)&&(ue!==de&&(s.activeTexture(de),ue=de),s.bindTexture(V,Te||ve[V]),ke.type=V,ke.texture=Te)}function Pe(){const V=O[ue];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Et(){try{s.compressedTexImage2D(...arguments)}catch(V){Pt("WebGLState:",V)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(V){Pt("WebGLState:",V)}}function E(){try{s.texSubImage2D(...arguments)}catch(V){Pt("WebGLState:",V)}}function K(){try{s.texSubImage3D(...arguments)}catch(V){Pt("WebGLState:",V)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(V){Pt("WebGLState:",V)}}function ge(){try{s.compressedTexSubImage3D(...arguments)}catch(V){Pt("WebGLState:",V)}}function Ee(){try{s.texStorage2D(...arguments)}catch(V){Pt("WebGLState:",V)}}function Re(){try{s.texStorage3D(...arguments)}catch(V){Pt("WebGLState:",V)}}function fe(){try{s.texImage2D(...arguments)}catch(V){Pt("WebGLState:",V)}}function pe(){try{s.texImage3D(...arguments)}catch(V){Pt("WebGLState:",V)}}function Ue(V){return S[V]!==void 0?S[V]:s.getParameter(V)}function Be(V,Te){S[V]!==Te&&(s.pixelStorei(V,Te),S[V]=Te)}function Ae(V){Fe.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Fe.copy(V))}function ye(V){De.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),De.copy(V))}function Je(V,Te){let de=m.get(Te);de===void 0&&(de=new WeakMap,m.set(Te,de));let ke=de.get(V);ke===void 0&&(ke=s.getUniformBlockIndex(Te,V.name),de.set(V,ke))}function rt(V,Te){const ke=m.get(Te).get(V);h.get(Te)!==ke&&(s.uniformBlockBinding(Te,ke,V.__bindingPointIndex),h.set(Te,ke))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},S={},ue=null,O={},g={},y=new WeakMap,w=[],C=null,v=!1,_=null,b=null,L=null,D=null,z=null,I=null,F=null,M=new Nt(0,0,0),N=0,W=!1,k=null,Y=null,re=null,le=null,H=null,Fe.set(0,0,s.canvas.width,s.canvas.height),De.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:me,disable:Ie,bindFramebuffer:Ze,drawBuffers:Ge,useProgram:Ft,setBlending:It,setMaterial:ft,setFlipSided:Wt,setCullFace:Vt,setLineWidth:mt,setPolygonOffset:B,setScissorTest:xt,activeTexture:nt,bindTexture:Mt,unbindTexture:Pe,compressedTexImage2D:Et,compressedTexImage3D:P,texImage2D:fe,texImage3D:pe,pixelStorei:Be,getParameter:Ue,updateUBOMapping:Je,uniformBlockBinding:rt,texStorage2D:Ee,texStorage3D:Re,texSubImage2D:E,texSubImage3D:K,compressedTexSubImage2D:he,compressedTexSubImage3D:ge,scissor:Ae,viewport:ye,reset:pt}}function IE(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Lt,x=new WeakMap,S=new Set;let g;const y=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(P,E){return w?new OffscreenCanvas(P,E):ic("canvas")}function v(P,E,K){let he=1;const ge=Et(P);if((ge.width>K||ge.height>K)&&(he=K/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ee=Math.floor(he*ge.width),Re=Math.floor(he*ge.height);g===void 0&&(g=C(Ee,Re));const fe=E?C(Ee,Re):g;return fe.width=Ee,fe.height=Re,fe.getContext("2d").drawImage(P,0,0,Ee,Re),it("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ee+"x"+Re+")."),fe}else return"data"in P&&it("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function _(P){return P.generateMipmaps}function b(P){s.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(P,E,K,he,ge,Ee=!1){if(P!==null){if(s[P]!==void 0)return s[P];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Re;he&&(Re=e.get("EXT_texture_norm16"),Re||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===s.RED&&(K===s.FLOAT&&(fe=s.R32F),K===s.HALF_FLOAT&&(fe=s.R16F),K===s.UNSIGNED_BYTE&&(fe=s.R8),K===s.UNSIGNED_SHORT&&Re&&(fe=Re.R16_EXT),K===s.SHORT&&Re&&(fe=Re.R16_SNORM_EXT)),E===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.R8UI),K===s.UNSIGNED_SHORT&&(fe=s.R16UI),K===s.UNSIGNED_INT&&(fe=s.R32UI),K===s.BYTE&&(fe=s.R8I),K===s.SHORT&&(fe=s.R16I),K===s.INT&&(fe=s.R32I)),E===s.RG&&(K===s.FLOAT&&(fe=s.RG32F),K===s.HALF_FLOAT&&(fe=s.RG16F),K===s.UNSIGNED_BYTE&&(fe=s.RG8),K===s.UNSIGNED_SHORT&&Re&&(fe=Re.RG16_EXT),K===s.SHORT&&Re&&(fe=Re.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RG8UI),K===s.UNSIGNED_SHORT&&(fe=s.RG16UI),K===s.UNSIGNED_INT&&(fe=s.RG32UI),K===s.BYTE&&(fe=s.RG8I),K===s.SHORT&&(fe=s.RG16I),K===s.INT&&(fe=s.RG32I)),E===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),K===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),K===s.UNSIGNED_INT&&(fe=s.RGB32UI),K===s.BYTE&&(fe=s.RGB8I),K===s.SHORT&&(fe=s.RGB16I),K===s.INT&&(fe=s.RGB32I)),E===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),K===s.UNSIGNED_INT&&(fe=s.RGBA32UI),K===s.BYTE&&(fe=s.RGBA8I),K===s.SHORT&&(fe=s.RGBA16I),K===s.INT&&(fe=s.RGBA32I)),E===s.RGB&&(K===s.UNSIGNED_SHORT&&Re&&(fe=Re.RGB16_EXT),K===s.SHORT&&Re&&(fe=Re.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),E===s.RGBA){const pe=Ee?nc:wt.getTransfer(ge);K===s.FLOAT&&(fe=s.RGBA32F),K===s.HALF_FLOAT&&(fe=s.RGBA16F),K===s.UNSIGNED_BYTE&&(fe=pe===zt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Re&&(fe=Re.RGBA16_EXT),K===s.SHORT&&Re&&(fe=Re.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function z(P,E){let K;return P?E===null||E===Vi||E===lo?K=s.DEPTH24_STENCIL8:E===Fi?K=s.DEPTH32F_STENCIL8:E===oo&&(K=s.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Vi||E===lo?K=s.DEPTH_COMPONENT24:E===Fi?K=s.DEPTH_COMPONENT32F:E===oo&&(K=s.DEPTH_COMPONENT16),K}function I(P,E){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Sn&&P.minFilter!==Rn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function F(P){const E=P.target;E.removeEventListener("dispose",F),N(E),E.isVideoTexture&&x.delete(E),E.isHTMLTexture&&S.delete(E)}function M(P){const E=P.target;E.removeEventListener("dispose",M),k(E)}function N(P){const E=r.get(P);if(E.__webglInit===void 0)return;const K=P.source,he=y.get(K);if(he){const ge=he[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&W(P),Object.keys(he).length===0&&y.delete(K)}r.remove(P)}function W(P){const E=r.get(P);s.deleteTexture(E.__webglTexture);const K=P.source,he=y.get(K);delete he[E.__cacheKey],u.memory.textures--}function k(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let ge=0;ge<E.__webglFramebuffer[he].length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[he][ge]);else s.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)s.deleteFramebuffer(E.__webglFramebuffer[he]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=P.textures;for(let he=0,ge=K.length;he<ge;he++){const Ee=r.get(K[he]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),u.memory.textures--),r.remove(K[he])}r.remove(P)}let Y=0;function re(){Y=0}function le(){return Y}function H(P){Y=P}function Z(){const P=Y;return P>=o.maxTextures&&it("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),Y+=1,P}function X(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function $(P,E){const K=r.get(P);if(P.isVideoTexture&&Mt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&K.__version!==P.version){const he=P.image;if(he===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(K,P,E);return}}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+E)}function ce(P,E){const K=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){Ie(K,P,E);return}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+E)}function ue(P,E){const K=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){Ie(K,P,E);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+E)}function O(P,E){const K=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&K.__version!==P.version){Ze(K,P,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+E)}const ee={[Xf]:s.REPEAT,[ar]:s.CLAMP_TO_EDGE,[qf]:s.MIRRORED_REPEAT},Le={[Sn]:s.NEAREST,[Yx]:s.NEAREST_MIPMAP_NEAREST,[vl]:s.NEAREST_MIPMAP_LINEAR,[Rn]:s.LINEAR,[Ju]:s.LINEAR_MIPMAP_NEAREST,[fs]:s.LINEAR_MIPMAP_LINEAR},Fe={[Zx]:s.NEVER,[nv]:s.ALWAYS,[Qx]:s.LESS,[kd]:s.LEQUAL,[Jx]:s.EQUAL,[Bd]:s.GEQUAL,[ev]:s.GREATER,[tv]:s.NOTEQUAL};function De(P,E){if(E.type===Fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Rn||E.magFilter===Ju||E.magFilter===vl||E.magFilter===fs||E.minFilter===Rn||E.minFilter===Ju||E.minFilter===vl||E.minFilter===fs)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ee[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ee[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ee[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Le[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Le[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Sn||E.minFilter!==vl&&E.minFilter!==fs||E.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ae(P,E){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",F));const he=E.source;let ge=y.get(he);ge===void 0&&(ge={},y.set(he,ge));const Ee=X(E);if(Ee!==P.__cacheKey){ge[Ee]===void 0&&(ge[Ee]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,K=!0),ge[Ee].usedTimes++;const Re=ge[P.__cacheKey];Re!==void 0&&(ge[P.__cacheKey].usedTimes--,Re.usedTimes===0&&W(E)),P.__cacheKey=Ee,P.__webglTexture=ge[Ee].texture}return K}function ve(P,E,K){return Math.floor(Math.floor(P/K)/E)}function me(P,E,K,he){const Ee=P.updateRanges;if(Ee.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,K,he,E.data);else{Ee.sort((Be,Ae)=>Be.start-Ae.start);let Re=0;for(let Be=1;Be<Ee.length;Be++){const Ae=Ee[Re],ye=Ee[Be],Je=Ae.start+Ae.count,rt=ve(ye.start,E.width,4),pt=ve(Ae.start,E.width,4);ye.start<=Je+1&&rt===pt&&ve(ye.start+ye.count-1,E.width,4)===rt?Ae.count=Math.max(Ae.count,ye.start+ye.count-Ae.start):(++Re,Ee[Re]=ye)}Ee.length=Re+1;const fe=t.getParameter(s.UNPACK_ROW_LENGTH),pe=t.getParameter(s.UNPACK_SKIP_PIXELS),Ue=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Be=0,Ae=Ee.length;Be<Ae;Be++){const ye=Ee[Be],Je=Math.floor(ye.start/4),rt=Math.ceil(ye.count/4),pt=Je%E.width,V=Math.floor(Je/E.width),Te=rt,de=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),t.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,pt,V,Te,de,K,he,E.data)}P.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,fe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ue)}}function Ie(P,E,K){let he=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=s.TEXTURE_3D);const ge=ae(P,E),Ee=E.source;t.bindTexture(he,P.__webglTexture,s.TEXTURE0+K);const Re=r.get(Ee);if(Ee.version!==Re.__version||ge===!0){if(t.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const de=wt.getPrimaries(wt.workingColorSpace),ke=E.colorSpace===Or?null:wt.getPrimaries(E.colorSpace),be=E.colorSpace===Or||de===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let pe=v(E.image,!1,o.maxTextureSize);pe=Pe(E,pe);const Ue=l.convert(E.format,E.colorSpace),Be=l.convert(E.type);let Ae=D(E.internalFormat,Ue,Be,E.normalized,E.colorSpace,E.isVideoTexture);De(he,E);let ye;const Je=E.mipmaps,rt=E.isVideoTexture!==!0,pt=Re.__version===void 0||ge===!0,V=Ee.dataReady,Te=I(E,pe);if(E.isDepthTexture)Ae=z(E.format===ds,E.type),pt&&(rt?t.texStorage2D(s.TEXTURE_2D,1,Ae,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,Ae,pe.width,pe.height,0,Ue,Be,null));else if(E.isDataTexture)if(Je.length>0){rt&&pt&&t.texStorage2D(s.TEXTURE_2D,Te,Ae,Je[0].width,Je[0].height);for(let de=0,ke=Je.length;de<ke;de++)ye=Je[de],rt?V&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,ye.width,ye.height,Ue,Be,ye.data):t.texImage2D(s.TEXTURE_2D,de,Ae,ye.width,ye.height,0,Ue,Be,ye.data);E.generateMipmaps=!1}else rt?(pt&&t.texStorage2D(s.TEXTURE_2D,Te,Ae,pe.width,pe.height),V&&me(E,pe,Ue,Be)):t.texImage2D(s.TEXTURE_2D,0,Ae,pe.width,pe.height,0,Ue,Be,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){rt&&pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Ae,Je[0].width,Je[0].height,pe.depth);for(let de=0,ke=Je.length;de<ke;de++)if(ye=Je[de],E.format!==Ti)if(Ue!==null)if(rt){if(V)if(E.layerUpdates.size>0){const be=rg(ye.width,ye.height,E.format,E.type);for(const _e of E.layerUpdates){const je=ye.data.subarray(_e*be/ye.data.BYTES_PER_ELEMENT,(_e+1)*be/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,_e,ye.width,ye.height,1,Ue,je)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,ye.width,ye.height,pe.depth,Ue,ye.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,Ae,ye.width,ye.height,pe.depth,0,ye.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,ye.width,ye.height,pe.depth,Ue,Be,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,de,Ae,ye.width,ye.height,pe.depth,0,Ue,Be,ye.data)}else{rt&&pt&&t.texStorage2D(s.TEXTURE_2D,Te,Ae,Je[0].width,Je[0].height);for(let de=0,ke=Je.length;de<ke;de++)ye=Je[de],E.format!==Ti?Ue!==null?rt?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,ye.width,ye.height,Ue,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,de,Ae,ye.width,ye.height,0,ye.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?V&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,ye.width,ye.height,Ue,Be,ye.data):t.texImage2D(s.TEXTURE_2D,de,Ae,ye.width,ye.height,0,Ue,Be,ye.data)}else if(E.isDataArrayTexture)if(rt){if(pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Ae,pe.width,pe.height,pe.depth),V)if(E.layerUpdates.size>0){const de=rg(pe.width,pe.height,E.format,E.type);for(const ke of E.layerUpdates){const be=pe.data.subarray(ke*de/pe.data.BYTES_PER_ELEMENT,(ke+1)*de/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ke,pe.width,pe.height,1,Ue,Be,be)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ue,Be,pe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,pe.width,pe.height,pe.depth,0,Ue,Be,pe.data);else if(E.isData3DTexture)rt?(pt&&t.texStorage3D(s.TEXTURE_3D,Te,Ae,pe.width,pe.height,pe.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ue,Be,pe.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,pe.width,pe.height,pe.depth,0,Ue,Be,pe.data);else if(E.isFramebufferTexture){if(pt)if(rt)t.texStorage2D(s.TEXTURE_2D,Te,Ae,pe.width,pe.height);else{let de=pe.width,ke=pe.height;for(let be=0;be<Te;be++)t.texImage2D(s.TEXTURE_2D,be,Ae,de,ke,0,Ue,Be,null),de>>=1,ke>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const de=s.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),pe.parentNode!==de){de.appendChild(pe),S.add(E),de.onpaint=st=>{const Ot=st.changedElements;for(const Tt of S)Ot.includes(Tt.image)&&(Tt.needsUpdate=!0)},de.requestPaint();return}const ke=0,be=s.RGBA,_e=s.RGBA,je=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,ke,be,_e,je,pe),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Je.length>0){if(rt&&pt){const de=Et(Je[0]);t.texStorage2D(s.TEXTURE_2D,Te,Ae,de.width,de.height)}for(let de=0,ke=Je.length;de<ke;de++)ye=Je[de],rt?V&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Ue,Be,ye):t.texImage2D(s.TEXTURE_2D,de,Ae,Ue,Be,ye);E.generateMipmaps=!1}else if(rt){if(pt){const de=Et(pe);t.texStorage2D(s.TEXTURE_2D,Te,Ae,de.width,de.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue,Be,pe)}else t.texImage2D(s.TEXTURE_2D,0,Ae,Ue,Be,pe);_(E)&&b(he),Re.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ze(P,E,K){if(E.image.length!==6)return;const he=ae(P,E),ge=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+K);const Ee=r.get(ge);if(ge.version!==Ee.__version||he===!0){t.activeTexture(s.TEXTURE0+K);const Re=wt.getPrimaries(wt.workingColorSpace),fe=E.colorSpace===Or?null:wt.getPrimaries(E.colorSpace),pe=E.colorSpace===Or||Re===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ue=E.isCompressedTexture||E.image[0].isCompressedTexture,Be=E.image[0]&&E.image[0].isDataTexture,Ae=[];for(let _e=0;_e<6;_e++)!Ue&&!Be?Ae[_e]=v(E.image[_e],!0,o.maxCubemapSize):Ae[_e]=Be?E.image[_e].image:E.image[_e],Ae[_e]=Pe(E,Ae[_e]);const ye=Ae[0],Je=l.convert(E.format,E.colorSpace),rt=l.convert(E.type),pt=D(E.internalFormat,Je,rt,E.normalized,E.colorSpace),V=E.isVideoTexture!==!0,Te=Ee.__version===void 0||he===!0,de=ge.dataReady;let ke=I(E,ye);De(s.TEXTURE_CUBE_MAP,E);let be;if(Ue){V&&Te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,pt,ye.width,ye.height);for(let _e=0;_e<6;_e++){be=Ae[_e].mipmaps;for(let je=0;je<be.length;je++){const st=be[je];E.format!==Ti?Je!==null?V?de&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,0,0,st.width,st.height,Je,st.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,pt,st.width,st.height,0,st.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,0,0,st.width,st.height,Je,rt,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,pt,st.width,st.height,0,Je,rt,st.data)}}}else{if(be=E.mipmaps,V&&Te){be.length>0&&ke++;const _e=Et(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,pt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Be){V?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ae[_e].width,Ae[_e].height,Je,rt,Ae[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pt,Ae[_e].width,Ae[_e].height,0,Je,rt,Ae[_e].data);for(let je=0;je<be.length;je++){const Ot=be[je].image[_e].image;V?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,0,0,Ot.width,Ot.height,Je,rt,Ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,pt,Ot.width,Ot.height,0,Je,rt,Ot.data)}}else{V?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Je,rt,Ae[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pt,Je,rt,Ae[_e]);for(let je=0;je<be.length;je++){const st=be[je];V?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,0,0,Je,rt,st.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,pt,Je,rt,st.image[_e])}}}_(E)&&b(s.TEXTURE_CUBE_MAP),Ee.__version=ge.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ge(P,E,K,he,ge,Ee){const Re=l.convert(K.format,K.colorSpace),fe=l.convert(K.type),pe=D(K.internalFormat,Re,fe,K.normalized,K.colorSpace),Ue=r.get(E),Be=r.get(K);if(Be.__renderTarget=E,!Ue.__hasExternalTextures){const Ae=Math.max(1,E.width>>Ee),ye=Math.max(1,E.height>>Ee);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,Ee,pe,Ae,ye,E.depth,0,Re,fe,null):t.texImage2D(ge,Ee,pe,Ae,ye,0,Re,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),nt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ge,Be.__webglTexture,0,xt(E)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ge,Be.__webglTexture,Ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(P,E,K){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const he=E.depthTexture,ge=he&&he.isDepthTexture?he.type:null,Ee=z(E.stencilBuffer,ge),Re=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;nt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt(E),Ee,E.width,E.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt(E),Ee,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,P)}else{const he=E.textures;for(let ge=0;ge<he.length;ge++){const Ee=he[ge],Re=l.convert(Ee.format,Ee.colorSpace),fe=l.convert(Ee.type),pe=D(Ee.internalFormat,Re,fe,Ee.normalized,Ee.colorSpace);nt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt(E),pe,E.width,E.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt(E),pe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,pe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ut(P,E,K){const he=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),De(s.TEXTURE_CUBE_MAP,E.depthTexture);const Ue=l.convert(E.depthTexture.format),Be=l.convert(E.depthTexture.type);let Ae;E.depthTexture.format===ur?Ae=s.DEPTH_COMPONENT24:E.depthTexture.format===ds&&(Ae=s.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Ae,E.width,E.height,0,Ue,Be,null)}}else $(E.depthTexture,0);const Ee=ge.__webglTexture,Re=xt(E),fe=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,pe=E.depthTexture.format===ds?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===ur)nt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,fe,Ee,0,Re):s.framebufferTexture2D(s.FRAMEBUFFER,pe,fe,Ee,0);else if(E.depthTexture.format===ds)nt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,fe,Ee,0,Re):s.framebufferTexture2D(s.FRAMEBUFFER,pe,fe,Ee,0);else throw new Error("Unknown depthTexture format")}function At(P){const E=r.get(P),K=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const he=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=he}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(K)for(let he=0;he<6;he++)ut(E.__webglFramebuffer[he],P,he);else{const he=P.texture.mipmaps;he&&he.length>0?ut(E.__webglFramebuffer[0],P,0):ut(E.__webglFramebuffer,P,0)}else if(K){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=s.createRenderbuffer(),Ft(E.__webglDepthbuffer[he],P,!1);else{const ge=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Ee)}}else{const he=P.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ft(E.__webglDepthbuffer,P,!1);else{const ge=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Ee)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function It(P,E,K){const he=r.get(P);E!==void 0&&Ge(he.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&At(P)}function ft(P){const E=P.texture,K=r.get(P),he=r.get(E);P.addEventListener("dispose",M);const ge=P.textures,Ee=P.isWebGLCubeRenderTarget===!0,Re=ge.length>1;if(Re||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=E.version,u.memory.textures++),Ee){K.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[fe]=[];for(let pe=0;pe<E.mipmaps.length;pe++)K.__webglFramebuffer[fe][pe]=s.createFramebuffer()}else K.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)K.__webglFramebuffer[fe]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Re)for(let fe=0,pe=ge.length;fe<pe;fe++){const Ue=r.get(ge[fe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),u.memory.textures++)}if(P.samples>0&&nt(P)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let fe=0;fe<ge.length;fe++){const pe=ge[fe];K.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[fe]);const Ue=l.convert(pe.format,pe.colorSpace),Be=l.convert(pe.type),Ae=D(pe.internalFormat,Ue,Be,pe.normalized,pe.colorSpace,P.isXRRenderTarget===!0),ye=xt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,Ae,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,K.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Ft(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),De(s.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Ge(K.__webglFramebuffer[fe][pe],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else Ge(K.__webglFramebuffer[fe],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);_(E)&&b(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let fe=0,pe=ge.length;fe<pe;fe++){const Ue=ge[fe],Be=r.get(Ue);let Ae=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Be.__webglTexture),De(Ae,Ue),Ge(K.__webglFramebuffer,P,Ue,s.COLOR_ATTACHMENT0+fe,Ae,0),_(Ue)&&b(Ae)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,he.__webglTexture),De(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Ge(K.__webglFramebuffer[pe],P,E,s.COLOR_ATTACHMENT0,fe,pe);else Ge(K.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,fe,0);_(E)&&b(fe),t.unbindTexture()}P.depthBuffer&&At(P)}function Wt(P){const E=P.textures;for(let K=0,he=E.length;K<he;K++){const ge=E[K];if(_(ge)){const Ee=L(P),Re=r.get(ge).__webglTexture;t.bindTexture(Ee,Re),b(Ee),t.unbindTexture()}}}const Vt=[],mt=[];function B(P){if(P.samples>0){if(nt(P)===!1){const E=P.textures,K=P.width,he=P.height;let ge=s.COLOR_BUFFER_BIT;const Ee=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=r.get(P),fe=E.length>1;if(fe)for(let Ue=0;Ue<E.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const pe=P.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ue=0;Ue<E.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[Ue]);const Be=r.get(E[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Be,0)}s.blitFramebuffer(0,0,K,he,0,0,K,he,ge,s.NEAREST),h===!0&&(Vt.length=0,mt.length=0,Vt.push(s.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Vt.push(Ee),mt.push(Ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,mt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Vt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Ue=0;Ue<E.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Re.__webglColorRenderbuffer[Ue]);const Be=r.get(E[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,Be,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function xt(P){return Math.min(o.maxSamples,P.samples)}function nt(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Mt(P){const E=u.render.frame;x.get(P)!==E&&(x.set(P,E),P.update())}function Pe(P,E){const K=P.colorSpace,he=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==tc&&K!==Or&&(wt.getTransfer(K)===zt?(he!==Ti||ge!==ti)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",K)),E}function Et(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=re,this.getTextureUnits=le,this.setTextureUnits=H,this.setTexture2D=$,this.setTexture2DArray=ce,this.setTexture3D=ue,this.setTextureCube=O,this.rebindTextures=It,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=nt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function UE(s,e){function t(r,o=Or){let l;const u=wt.getTransfer(o);if(r===ti)return s.UNSIGNED_BYTE;if(r===Dd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Id)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Hg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Wg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Vg)return s.BYTE;if(r===Gg)return s.SHORT;if(r===oo)return s.UNSIGNED_SHORT;if(r===Ld)return s.INT;if(r===Vi)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===cr)return s.HALF_FLOAT;if(r===jg)return s.ALPHA;if(r===Xg)return s.RGB;if(r===Ti)return s.RGBA;if(r===ur)return s.DEPTH_COMPONENT;if(r===ds)return s.DEPTH_STENCIL;if(r===qg)return s.RED;if(r===Ud)return s.RED_INTEGER;if(r===ps)return s.RG;if(r===Fd)return s.RG_INTEGER;if(r===Od)return s.RGBA_INTEGER;if(r===Yl||r===$l||r===Kl||r===Zl)if(u===zt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Yl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Yl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yf||r===$f||r===Kf||r===Zf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Yf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$f)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qf||r===Jf||r===ed||r===td||r===nd||r===Jl||r===id)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Qf||r===Jf)return u===zt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===ed)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===td)return l.COMPRESSED_R11_EAC;if(r===nd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Jl)return l.COMPRESSED_RG11_EAC;if(r===id)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===rd||r===sd||r===ad||r===od||r===ld||r===cd||r===ud||r===fd||r===dd||r===hd||r===pd||r===md||r===gd||r===_d)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===rd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ad)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===od)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ld)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ud)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===md)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_d)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xd||r===vd||r===Sd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===xd)return u===zt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yd||r===Md||r===ec||r===Ed)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===yd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Md)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ec)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ed)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===lo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const FE=`
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

}`;class kE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new r0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Hi({vertexShader:FE,fragmentShader:OE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gi(new dc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BE extends ms{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",h=1,m=null,x=null,S=null,g=null,y=null,w=null;const C=typeof XRWebGLBinding<"u",v=new kE,_={},b=t.getContextAttributes();let L=null,D=null;const z=[],I=[],F=new Lt;let M=null;const N=new ei;N.viewport=new tn;const W=new ei;W.viewport=new tn;const k=[N,W],Y=new $v;let re=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ve=z[ae];return ve===void 0&&(ve=new lf,z[ae]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ae){let ve=z[ae];return ve===void 0&&(ve=new lf,z[ae]=ve),ve.getGripSpace()},this.getHand=function(ae){let ve=z[ae];return ve===void 0&&(ve=new lf,z[ae]=ve),ve.getHandSpace()};function H(ae){const ve=I.indexOf(ae.inputSource);if(ve===-1)return;const me=z[ve];me!==void 0&&(me.update(ae.inputSource,ae.frame,m||u),me.dispatchEvent({type:ae.type,data:ae.inputSource}))}function Z(){o.removeEventListener("select",H),o.removeEventListener("selectstart",H),o.removeEventListener("selectend",H),o.removeEventListener("squeeze",H),o.removeEventListener("squeezestart",H),o.removeEventListener("squeezeend",H),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",X);for(let ae=0;ae<z.length;ae++){const ve=I[ae];ve!==null&&(I[ae]=null,z[ae].disconnect(ve))}re=null,le=null,v.reset();for(const ae in _)delete _[ae];e.setRenderTarget(L),y=null,g=null,S=null,o=null,D=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(M),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,r.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,r.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ae){m=ae},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",H),o.addEventListener("selectstart",H),o.addEventListener("selectend",H),o.addEventListener("squeeze",H),o.addEventListener("squeezestart",H),o.addEventListener("squeezeend",H),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",X),b.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ie=null,Ze=null;b.depth&&(Ze=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=b.stencil?ds:ur,Ie=b.stencil?lo:Vi);const Ge={colorFormat:t.RGBA8,depthFormat:Ze,scaleFactor:l};S=this.getBinding(),g=S.createProjectionLayer(Ge),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),D=new zi(g.textureWidth,g.textureHeight,{format:Ti,type:ti,depthTexture:new aa(g.textureWidth,g.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new zi(y.framebufferWidth,y.framebufferHeight,{format:Ti,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(d),De.setContext(o),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(ae){for(let ve=0;ve<ae.removed.length;ve++){const me=ae.removed[ve],Ie=I.indexOf(me);Ie>=0&&(I[Ie]=null,z[Ie].disconnect(me))}for(let ve=0;ve<ae.added.length;ve++){const me=ae.added[ve];let Ie=I.indexOf(me);if(Ie===-1){for(let Ge=0;Ge<z.length;Ge++)if(Ge>=I.length){I.push(me),Ie=Ge;break}else if(I[Ge]===null){I[Ge]=me,Ie=Ge;break}if(Ie===-1)break}const Ze=z[Ie];Ze&&Ze.connect(me)}}const $=new Q,ce=new Q;function ue(ae,ve,me){$.setFromMatrixPosition(ve.matrixWorld),ce.setFromMatrixPosition(me.matrixWorld);const Ie=$.distanceTo(ce),Ze=ve.projectionMatrix.elements,Ge=me.projectionMatrix.elements,Ft=Ze[14]/(Ze[10]-1),ut=Ze[14]/(Ze[10]+1),At=(Ze[9]+1)/Ze[5],It=(Ze[9]-1)/Ze[5],ft=(Ze[8]-1)/Ze[0],Wt=(Ge[8]+1)/Ge[0],Vt=Ft*ft,mt=Ft*Wt,B=Ie/(-ft+Wt),xt=B*-ft;if(ve.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(xt),ae.translateZ(B),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ze[10]===-1)ae.projectionMatrix.copy(ve.projectionMatrix),ae.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const nt=Ft+B,Mt=ut+B,Pe=Vt-xt,Et=mt+(Ie-xt),P=At*ut/Mt*nt,E=It*ut/Mt*nt;ae.projectionMatrix.makePerspective(Pe,Et,P,E,nt,Mt),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function O(ae,ve){ve===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ve.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let ve=ae.near,me=ae.far;v.texture!==null&&(v.depthNear>0&&(ve=v.depthNear),v.depthFar>0&&(me=v.depthFar)),Y.near=W.near=N.near=ve,Y.far=W.far=N.far=me,(re!==Y.near||le!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),re=Y.near,le=Y.far),Y.layers.mask=ae.layers.mask|6,N.layers.mask=Y.layers.mask&-5,W.layers.mask=Y.layers.mask&-3;const Ie=ae.parent,Ze=Y.cameras;O(Y,Ie);for(let Ge=0;Ge<Ze.length;Ge++)O(Ze[Ge],Ie);Ze.length===2?ue(Y,N,W):Y.projectionMatrix.copy(N.projectionMatrix),ee(ae,Y,Ie)};function ee(ae,ve,me){me===null?ae.matrix.copy(ve.matrixWorld):(ae.matrix.copy(me.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ve.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ve.projectionMatrix),ae.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Ad*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&y===null))return h},this.setFoveation=function(ae){h=ae,g!==null&&(g.fixedFoveation=ae),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ae)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(Y)},this.getCameraTexture=function(ae){return _[ae]};let Le=null;function Fe(ae,ve){if(x=ve.getViewerPose(m||u),w=ve,x!==null){const me=x.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let Ie=!1;me.length!==Y.cameras.length&&(Y.cameras.length=0,Ie=!0);for(let ut=0;ut<me.length;ut++){const At=me[ut];let It=null;if(y!==null)It=y.getViewport(At);else{const Wt=S.getViewSubImage(g,At);It=Wt.viewport,ut===0&&(e.setRenderTargetTextures(D,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(D))}let ft=k[ut];ft===void 0&&(ft=new ei,ft.layers.enable(ut),ft.viewport=new tn,k[ut]=ft),ft.matrix.fromArray(At.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(At.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(It.x,It.y,It.width,It.height),ut===0&&(Y.matrix.copy(ft.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ie===!0&&Y.cameras.push(ft)}const Ze=o.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){S=r.getBinding();const ut=S.getDepthInformation(me[0]);ut&&ut.isValid&&ut.texture&&v.init(ut,o.renderState)}if(Ze&&Ze.includes("camera-access")&&C){e.state.unbindTexture(),S=r.getBinding();for(let ut=0;ut<me.length;ut++){const At=me[ut].camera;if(At){let It=_[At];It||(It=new r0,_[At]=It);const ft=S.getCameraImage(At);It.sourceTexture=ft}}}}for(let me=0;me<z.length;me++){const Ie=I[me],Ze=z[me];Ie!==null&&Ze!==void 0&&Ze.update(Ie,ve,m||u)}Le&&Le(ae,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),w=null}const De=new c0;De.setAnimationLoop(Fe),this.setAnimationLoop=function(ae){Le=ae},this.dispose=function(){}}}const zE=new Kt,g0=new dt;g0.set(-1,0,0,0,1,0,0,0,1);function VE(s,e){function t(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,s0(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function o(v,_,b,L,D){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(v,_):_.isMeshLambertMaterial?(l(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(v,_),S(v,_)):_.isMeshPhongMaterial?(l(v,_),x(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(v,_),g(v,_),_.isMeshPhysicalMaterial&&y(v,_,D)):_.isMeshMatcapMaterial?(l(v,_),w(v,_)):_.isMeshDepthMaterial?l(v,_):_.isMeshDistanceMaterial?(l(v,_),C(v,_)):_.isMeshNormalMaterial?l(v,_):_.isLineBasicMaterial?(u(v,_),_.isLineDashedMaterial&&d(v,_)):_.isPointsMaterial?h(v,_,b,L):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,t(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===jn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,t(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===jn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,t(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,t(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const b=e.get(_),L=b.envMap,D=b.envMapRotation;L&&(v.envMap.value=L,v.envMapRotation.value.setFromMatrix4(zE.makeRotationFromEuler(D)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(g0),v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,v.aoMapTransform))}function u(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform))}function d(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function h(v,_,b,L){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*b,v.scale.value=L*.5,_.map&&(v.map.value=_.map,t(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function x(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function S(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function g(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function y(v,_,b){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===jn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,v.specularIntensityMapTransform))}function w(v,_){_.matcap&&(v.matcap.value=_.matcap)}function C(v,_){const b=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(b.matrixWorld),v.nearDistance.value=b.shadow.camera.near,v.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function GE(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,L){const D=L.program;r.uniformBlockBinding(b,D)}function m(b,L){let D=o[b.id];D===void 0&&(w(b),D=x(b),o[b.id]=D,b.addEventListener("dispose",v));const z=L.program;r.updateUBOMapping(b,z);const I=e.render.frame;l[b.id]!==I&&(g(b),l[b.id]=I)}function x(b){const L=S();b.__bindingPointIndex=L;const D=s.createBuffer(),z=b.__size,I=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,z,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,D),D}function S(){for(let b=0;b<d;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const L=o[b.id],D=b.uniforms,z=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let I=0,F=D.length;I<F;I++){const M=Array.isArray(D[I])?D[I]:[D[I]];for(let N=0,W=M.length;N<W;N++){const k=M[N];if(y(k,I,N,z)===!0){const Y=k.__offset,re=Array.isArray(k.value)?k.value:[k.value];let le=0;for(let H=0;H<re.length;H++){const Z=re[H],X=C(Z);typeof Z=="number"||typeof Z=="boolean"?(k.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,Y+le,k.__data)):Z.isMatrix3?(k.__data[0]=Z.elements[0],k.__data[1]=Z.elements[1],k.__data[2]=Z.elements[2],k.__data[3]=0,k.__data[4]=Z.elements[3],k.__data[5]=Z.elements[4],k.__data[6]=Z.elements[5],k.__data[7]=0,k.__data[8]=Z.elements[6],k.__data[9]=Z.elements[7],k.__data[10]=Z.elements[8],k.__data[11]=0):ArrayBuffer.isView(Z)?k.__data.set(new Z.constructor(Z.buffer,Z.byteOffset,k.__data.length)):(Z.toArray(k.__data,le),le+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(b,L,D,z){const I=b.value,F=L+"_"+D;if(z[F]===void 0)return typeof I=="number"||typeof I=="boolean"?z[F]=I:ArrayBuffer.isView(I)?z[F]=I.slice():z[F]=I.clone(),!0;{const M=z[F];if(typeof I=="number"||typeof I=="boolean"){if(M!==I)return z[F]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(M.equals(I)===!1)return M.copy(I),!0}}return!1}function w(b){const L=b.uniforms;let D=0;const z=16;for(let F=0,M=L.length;F<M;F++){const N=Array.isArray(L[F])?L[F]:[L[F]];for(let W=0,k=N.length;W<k;W++){const Y=N[W],re=Array.isArray(Y.value)?Y.value:[Y.value];for(let le=0,H=re.length;le<H;le++){const Z=re[le],X=C(Z),$=D%z,ce=$%X.boundary,ue=$+ce;D+=ce,ue!==0&&z-ue<X.storage&&(D+=z-ue),Y.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=D,D+=X.storage}}}const I=D%z;return I>0&&(D+=z-I),b.__size=D,b.__cache={},this}function C(b){const L={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(L.boundary=4,L.storage=4):b.isVector2?(L.boundary=8,L.storage=8):b.isVector3||b.isColor?(L.boundary=16,L.storage=12):b.isVector4?(L.boundary=16,L.storage=16):b.isMatrix3?(L.boundary=48,L.storage=48):b.isMatrix4?(L.boundary=64,L.storage=64):b.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(L.boundary=16,L.storage=b.byteLength):it("WebGLRenderer: Unsupported uniform value type.",b),L}function v(b){const L=b.target;L.removeEventListener("dispose",v);const D=u.indexOf(L.__bindingPointIndex);u.splice(D,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function _(){for(const b in o)s.deleteBuffer(o[b]);u=[],o={},l={}}return{bind:h,update:m,dispose:_}}const HE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Di=null;function WE(){return Di===null&&(Di=new bv(HE,16,16,ps,cr),Di.name="DFG_LUT",Di.minFilter=Rn,Di.magFilter=Rn,Di.wrapS=ar,Di.wrapT=ar,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}class jE{constructor(e={}){const{canvas:t=rv(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:y=ti}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const C=y,v=new Set([Od,Fd,Ud]),_=new Set([ti,Vi,oo,lo,Dd,Id]),b=new Uint32Array(4),L=new Int32Array(4),D=new Q;let z=null,I=null;const F=[],M=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let k=!1,Y=null;this._outputColorSpace=ui;let re=0,le=0,H=null,Z=-1,X=null;const $=new tn,ce=new tn;let ue=null;const O=new Nt(0);let ee=0,Le=t.width,Fe=t.height,De=1,ae=null,ve=null;const me=new tn(0,0,Le,Fe),Ie=new tn(0,0,Le,Fe);let Ze=!1;const Ge=new Gd;let Ft=!1,ut=!1;const At=new Kt,It=new Q,ft=new tn,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function mt(){return H===null?De:1}let B=r;function xt(A,q){return t.getContext(A,q)}try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nd}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",st,!1),B===null){const q="webgl2";if(B=xt(q,A),B===null)throw xt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Pt("WebGLRenderer: "+A.message),A}let nt,Mt,Pe,Et,P,E,K,he,ge,Ee,Re,fe,pe,Ue,Be,Ae,ye,Je,rt,pt,V,Te,de;function ke(){nt=new WM(B),nt.init(),V=new UE(B,nt),Mt=new FM(B,nt,e,V),Pe=new DE(B,nt),Mt.reversedDepthBuffer&&g&&Pe.buffers.depth.setReversed(!0),Et=new qM(B),P=new vE,E=new IE(B,nt,Pe,P,Mt,V,Et),K=new HM(W),he=new Zv(B),Te=new IM(B,he),ge=new jM(B,he,Et,Te),Ee=new $M(B,ge,he,Te,Et),Je=new YM(B,Mt,E),Be=new OM(P),Re=new xE(W,K,nt,Mt,Te,Be),fe=new VE(W,P),pe=new yE,Ue=new bE(nt),ye=new DM(W,K,Pe,Ee,w,h),Ae=new LE(W,Ee,Mt),de=new GE(B,Et,Mt,Pe),rt=new UM(B,nt,Et),pt=new XM(B,nt,Et),Et.programs=Re.programs,W.capabilities=Mt,W.extensions=nt,W.properties=P,W.renderLists=pe,W.shadowMap=Ae,W.state=Pe,W.info=Et}ke(),C!==ti&&(N=new ZM(C,t.width,t.height,o,l));const be=new BE(W,B);this.xr=be,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=nt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=nt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(A){A!==void 0&&(De=A,this.setSize(Le,Fe,!1))},this.getSize=function(A){return A.set(Le,Fe)},this.setSize=function(A,q,se=!0){if(be.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}Le=A,Fe=q,t.width=Math.floor(A*De),t.height=Math.floor(q*De),se===!0&&(t.style.width=A+"px",t.style.height=q+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(Le*De,Fe*De).floor()},this.setDrawingBufferSize=function(A,q,se){Le=A,Fe=q,De=se,t.width=Math.floor(A*se),t.height=Math.floor(q*se),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===ti){Pt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){it("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy($)},this.getViewport=function(A){return A.copy(me)},this.setViewport=function(A,q,se,ne){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,q,se,ne),Pe.viewport($.copy(me).multiplyScalar(De).round())},this.getScissor=function(A){return A.copy(Ie)},this.setScissor=function(A,q,se,ne){A.isVector4?Ie.set(A.x,A.y,A.z,A.w):Ie.set(A,q,se,ne),Pe.scissor(ce.copy(Ie).multiplyScalar(De).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(A){Pe.setScissorTest(Ze=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){ve=A},this.getClearColor=function(A){return A.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,se=!0){let ne=0;if(A){let te=!1;if(H!==null){const Ne=H.texture.format;te=v.has(Ne)}if(te){const Ne=H.texture.type,He=_.has(Ne),Ce=ye.getClearColor(),qe=ye.getClearAlpha(),Qe=Ce.r,lt=Ce.g,ct=Ce.b;He?(b[0]=Qe,b[1]=lt,b[2]=ct,b[3]=qe,B.clearBufferuiv(B.COLOR,0,b)):(L[0]=Qe,L[1]=lt,L[2]=ct,L[3]=qe,B.clearBufferiv(B.COLOR,0,L))}else ne|=B.COLOR_BUFFER_BIT}q&&(ne|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ne|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&B.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Y=A},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",st,!1),ye.dispose(),pe.dispose(),Ue.dispose(),P.dispose(),K.dispose(),Ee.dispose(),Te.dispose(),de.dispose(),Re.dispose(),be.dispose(),be.removeEventListener("sessionstart",qn),be.removeEventListener("sessionend",_s),Wi.stop()};function _e(A){A.preventDefault(),Lm("WebGLRenderer: Context Lost."),k=!0}function je(){Lm("WebGLRenderer: Context Restored."),k=!1;const A=Et.autoReset,q=Ae.enabled,se=Ae.autoUpdate,ne=Ae.needsUpdate,te=Ae.type;ke(),Et.autoReset=A,Ae.enabled=q,Ae.autoUpdate=se,Ae.needsUpdate=ne,Ae.type=te}function st(A){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ot(A){const q=A.target;q.removeEventListener("dispose",Ot),Tt(q)}function Tt(A){dn(A),P.remove(A)}function dn(A){const q=P.get(A).programs;q!==void 0&&(q.forEach(function(se){Re.releaseProgram(se)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,se,ne,te,Ne){q===null&&(q=Wt);const He=te.isMesh&&te.matrixWorld.determinant()<0,Ce=xo(A,q,se,ne,te);Pe.setMaterial(ne,He);let qe=se.index,Qe=1;if(ne.wireframe===!0){if(qe=ge.getWireframeAttribute(se),qe===void 0)return;Qe=2}const lt=se.drawRange,ct=se.attributes.position;let $e=lt.start*Qe,bt=(lt.start+lt.count)*Qe;Ne!==null&&($e=Math.max($e,Ne.start*Qe),bt=Math.min(bt,(Ne.start+Ne.count)*Qe)),qe!==null?($e=Math.max($e,0),bt=Math.min(bt,qe.count)):ct!=null&&($e=Math.max($e,0),bt=Math.min(bt,ct.count));const Gt=bt-$e;if(Gt<0||Gt===1/0)return;Te.setup(te,ne,Ce,se,qe);let Yt,kt=rt;if(qe!==null&&(Yt=he.get(qe),kt=pt,kt.setIndex(Yt)),te.isMesh)ne.wireframe===!0?(Pe.setLineWidth(ne.wireframeLinewidth*mt()),kt.setMode(B.LINES)):kt.setMode(B.TRIANGLES);else if(te.isLine){let rn=ne.linewidth;rn===void 0&&(rn=1),Pe.setLineWidth(rn*mt()),te.isLineSegments?kt.setMode(B.LINES):te.isLineLoop?kt.setMode(B.LINE_LOOP):kt.setMode(B.LINE_STRIP)}else te.isPoints?kt.setMode(B.POINTS):te.isSprite&&kt.setMode(B.TRIANGLES);if(te.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))kt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const rn=te._multiDrawStarts,ze=te._multiDrawCounts,_n=te._multiDrawCount,_t=qe?he.get(qe).bytesPerElement:1,Fn=P.get(ne).currentProgram.getUniforms();for(let On=0;On<_n;On++)Fn.setValue(B,"_gl_DrawID",On),kt.render(rn[On]/_t,ze[On])}else if(te.isInstancedMesh)kt.renderInstances($e,Gt,te.count);else if(se.isInstancedBufferGeometry){const rn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,ze=Math.min(se.instanceCount,rn);kt.renderInstances($e,Gt,ze)}else kt.render($e,Gt)};function ot(A,q,se){A.transparent===!0&&A.side===sr&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,xs(A,q,se),A.side=Vr,A.needsUpdate=!0,xs(A,q,se),A.side=sr):xs(A,q,se)}this.compile=function(A,q,se=null){se===null&&(se=A),I=Ue.get(se),I.init(q),M.push(I),se.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(I.pushLight(te),te.castShadow&&I.pushShadow(te))}),A!==se&&A.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(I.pushLight(te),te.castShadow&&I.pushShadow(te))}),I.setupLights();const ne=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ne=te.material;if(Ne)if(Array.isArray(Ne))for(let He=0;He<Ne.length;He++){const Ce=Ne[He];ot(Ce,se,te),ne.add(Ce)}else ot(Ne,se,te),ne.add(Ne)}),I=M.pop(),ne},this.compileAsync=function(A,q,se=null){const ne=this.compile(A,q,se);return new Promise(te=>{function Ne(){if(ne.forEach(function(He){P.get(He).currentProgram.isReady()&&ne.delete(He)}),ne.size===0){te(A);return}setTimeout(Ne,10)}nt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let ht=null;function Mn(A){ht&&ht(A)}function qn(){Wi.stop()}function _s(){Wi.start()}const Wi=new c0;Wi.setAnimationLoop(Mn),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(A){ht=A,be.setAnimationLoop(A),A===null?Wi.stop():Wi.start()},be.addEventListener("sessionstart",qn),be.addEventListener("sessionend",_s),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;Y!==null&&Y.renderStart(A,q);const se=be.enabled===!0&&be.isPresenting===!0,ne=N!==null&&(H===null||se)&&N.begin(W,H);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(q),q=be.getCamera()),A.isScene===!0&&A.onBeforeRender(W,A,q,H),I=Ue.get(A,M.length),I.init(q),I.state.textureUnits=E.getTextureUnits(),M.push(I),At.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ge.setFromProjectionMatrix(At,Oi,q.reversedDepth),ut=this.localClippingEnabled,Ft=Be.init(this.clippingPlanes,ut),z=pe.get(A,F.length),z.init(),F.push(z),be.enabled===!0&&be.isPresenting===!0){const He=W.xr.getDepthSensingMesh();He!==null&&da(He,q,-1/0,W.sortObjects)}da(A,q,0,W.sortObjects),z.finish(),W.sortObjects===!0&&z.sort(ae,ve),Vt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Vt&&ye.addToRenderList(z,A),this.info.render.frame++,Ft===!0&&Be.beginShadows();const te=I.state.shadowsArray;if(Ae.render(te,A,q),Ft===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&N.hasRenderPass())===!1){const He=z.opaque,Ce=z.transmissive;if(I.setupLights(),q.isArrayCamera){const qe=q.cameras;if(Ce.length>0)for(let Qe=0,lt=qe.length;Qe<lt;Qe++){const ct=qe[Qe];Ai(He,Ce,A,ct)}Vt&&ye.render(A);for(let Qe=0,lt=qe.length;Qe<lt;Qe++){const ct=qe[Qe];go(z,A,ct,ct.viewport)}}else Ce.length>0&&Ai(He,Ce,A,q),Vt&&ye.render(A),go(z,A,q)}H!==null&&le===0&&(E.updateMultisampleRenderTarget(H),E.updateRenderTargetMipmap(H)),ne&&N.end(W),A.isScene===!0&&A.onAfterRender(W,A,q),Te.resetDefaultState(),Z=-1,X=null,M.pop(),M.length>0?(I=M[M.length-1],E.setTextureUnits(I.state.textureUnits),Ft===!0&&Be.setGlobalState(W.clippingPlanes,I.state.camera)):I=null,F.pop(),F.length>0?z=F[F.length-1]:z=null,Y!==null&&Y.renderEnd()};function da(A,q,se,ne){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)I.pushLightProbeGrid(A);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ge.intersectsSprite(A)){ne&&ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(At);const He=Ee.update(A),Ce=A.material;Ce.visible&&z.push(A,He,Ce,se,ft.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ge.intersectsObject(A))){const He=Ee.update(A),Ce=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ft.copy(A.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),ft.copy(He.boundingSphere.center)),ft.applyMatrix4(A.matrixWorld).applyMatrix4(At)),Array.isArray(Ce)){const qe=He.groups;for(let Qe=0,lt=qe.length;Qe<lt;Qe++){const ct=qe[Qe],$e=Ce[ct.materialIndex];$e&&$e.visible&&z.push(A,He,$e,se,ft.z,ct)}}else Ce.visible&&z.push(A,He,Ce,se,ft.z,null)}}const Ne=A.children;for(let He=0,Ce=Ne.length;He<Ce;He++)da(Ne[He],q,se,ne)}function go(A,q,se,ne){const{opaque:te,transmissive:Ne,transparent:He}=A;I.setupLightsView(se),Ft===!0&&Be.setGlobalState(W.clippingPlanes,se),ne&&Pe.viewport($.copy(ne)),te.length>0&&Hr(te,q,se),Ne.length>0&&Hr(Ne,q,se),He.length>0&&Hr(He,q,se),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Ai(A,q,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ne.id]===void 0){const $e=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ne.id]=new zi(1,1,{generateMipmaps:!0,type:$e?cr:ti,minFilter:fs,samples:Math.max(4,Mt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Ne=I.state.transmissionRenderTarget[ne.id],He=ne.viewport||$;Ne.setSize(He.z*W.transmissionResolutionScale,He.w*W.transmissionResolutionScale);const Ce=W.getRenderTarget(),qe=W.getActiveCubeFace(),Qe=W.getActiveMipmapLevel();W.setRenderTarget(Ne),W.getClearColor(O),ee=W.getClearAlpha(),ee<1&&W.setClearColor(16777215,.5),W.clear(),Vt&&ye.render(se);const lt=W.toneMapping;W.toneMapping=Bi;const ct=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),I.setupLightsView(ne),Ft===!0&&Be.setGlobalState(W.clippingPlanes,ne),Hr(A,se,ne),E.updateMultisampleRenderTarget(Ne),E.updateRenderTargetMipmap(Ne),nt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let bt=0,Gt=q.length;bt<Gt;bt++){const Yt=q[bt],{object:kt,geometry:rn,material:ze,group:_n}=Yt;if(ze.side===sr&&kt.layers.test(ne.layers)){const _t=ze.side;ze.side=jn,ze.needsUpdate=!0,ha(kt,se,ne,rn,ze,_n),ze.side=_t,ze.needsUpdate=!0,$e=!0}}$e===!0&&(E.updateMultisampleRenderTarget(Ne),E.updateRenderTargetMipmap(Ne))}W.setRenderTarget(Ce,qe,Qe),W.setClearColor(O,ee),ct!==void 0&&(ne.viewport=ct),W.toneMapping=lt}function Hr(A,q,se){const ne=q.isScene===!0?q.overrideMaterial:null;for(let te=0,Ne=A.length;te<Ne;te++){const He=A[te],{object:Ce,geometry:qe,group:Qe}=He;let lt=He.material;lt.allowOverride===!0&&ne!==null&&(lt=ne),Ce.layers.test(se.layers)&&ha(Ce,q,se,qe,lt,Qe)}}function ha(A,q,se,ne,te,Ne){A.onBeforeRender(W,q,se,ne,te,Ne),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(W,q,se,ne,A,Ne),te.transparent===!0&&te.side===sr&&te.forceSinglePass===!1?(te.side=jn,te.needsUpdate=!0,W.renderBufferDirect(se,q,ne,te,A,Ne),te.side=Vr,te.needsUpdate=!0,W.renderBufferDirect(se,q,ne,te,A,Ne),te.side=sr):W.renderBufferDirect(se,q,ne,te,A,Ne),A.onAfterRender(W,q,se,ne,te,Ne)}function xs(A,q,se){q.isScene!==!0&&(q=Wt);const ne=P.get(A),te=I.state.lights,Ne=I.state.shadowsArray,He=te.state.version,Ce=Re.getParameters(A,te.state,Ne,q,se,I.state.lightProbeGridArray),qe=Re.getProgramCacheKey(Ce);let Qe=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const lt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=K.get(A.envMap||ne.environment,lt),ne.envMapRotation=ne.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",Ot),Qe=new Map,ne.programs=Qe);let ct=Qe.get(qe);if(ct!==void 0){if(ne.currentProgram===ct&&ne.lightsStateVersion===He)return ma(A,Ce),ct}else Ce.uniforms=Re.getUniforms(A),Y!==null&&A.isNodeMaterial&&Y.build(A,se,Ce),A.onBeforeCompile(Ce,W),ct=Re.acquireProgram(Ce,qe),Qe.set(qe,ct),ne.uniforms=Ce.uniforms;const $e=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=Be.uniform),ma(A,Ce),ne.needsLights=gc(A),ne.lightsStateVersion=He,ne.needsLights&&($e.ambientLightColor.value=te.state.ambient,$e.lightProbe.value=te.state.probe,$e.directionalLights.value=te.state.directional,$e.directionalLightShadows.value=te.state.directionalShadow,$e.spotLights.value=te.state.spot,$e.spotLightShadows.value=te.state.spotShadow,$e.rectAreaLights.value=te.state.rectArea,$e.ltc_1.value=te.state.rectAreaLTC1,$e.ltc_2.value=te.state.rectAreaLTC2,$e.pointLights.value=te.state.point,$e.pointLightShadows.value=te.state.pointShadow,$e.hemisphereLights.value=te.state.hemi,$e.directionalShadowMatrix.value=te.state.directionalShadowMatrix,$e.spotLightMatrix.value=te.state.spotLightMatrix,$e.spotLightMap.value=te.state.spotLightMap,$e.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=I.state.lightProbeGridArray.length>0,ne.currentProgram=ct,ne.uniformsList=null,ct}function pa(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Ql.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function ma(A,q){const se=P.get(A);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function _o(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;D.setFromMatrixPosition(q.matrixWorld);for(let se=0,ne=A.length;se<ne;se++){const te=A[se];if(te.texture!==null&&te.boundingBox.containsPoint(D))return te}return null}function xo(A,q,se,ne,te){q.isScene!==!0&&(q=Wt),E.resetTextureUnits();const Ne=q.fog,He=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,Ce=H===null?W.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:wt.workingColorSpace,qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Qe=K.get(ne.envMap||He,qe),lt=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ct=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),$e=!!se.morphAttributes.position,bt=!!se.morphAttributes.normal,Gt=!!se.morphAttributes.color;let Yt=Bi;ne.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Yt=W.toneMapping);const kt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,rn=kt!==void 0?kt.length:0,ze=P.get(ne),_n=I.state.lights;if(Ft===!0&&(ut===!0||A!==X)){const Bt=A===X&&ne.id===Z;Be.setState(ne,A,Bt)}let _t=!1;ne.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==_n.state.version||ze.outputColorSpace!==Ce||te.isBatchedMesh&&ze.batching===!1||!te.isBatchedMesh&&ze.batching===!0||te.isBatchedMesh&&ze.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&ze.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&ze.instancing===!1||!te.isInstancedMesh&&ze.instancing===!0||te.isSkinnedMesh&&ze.skinning===!1||!te.isSkinnedMesh&&ze.skinning===!0||te.isInstancedMesh&&ze.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ze.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&ze.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&ze.instancingMorph===!1&&te.morphTexture!==null||ze.envMap!==Qe||ne.fog===!0&&ze.fog!==Ne||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Be.numPlanes||ze.numIntersection!==Be.numIntersection)||ze.vertexAlphas!==lt||ze.vertexTangents!==ct||ze.morphTargets!==$e||ze.morphNormals!==bt||ze.morphColors!==Gt||ze.toneMapping!==Yt||ze.morphTargetsCount!==rn||!!ze.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,ze.__version=ne.version);let Fn=ze.currentProgram;_t===!0&&(Fn=xs(ne,q,te),Y&&ne.isNodeMaterial&&Y.onUpdateProgram(ne,Fn,ze));let On=!1,vt=!1,ji=!1;const Ut=Fn.getUniforms(),jt=ze.uniforms;if(Pe.useProgram(Fn.program)&&(On=!0,vt=!0,ji=!0),ne.id!==Z&&(Z=ne.id,vt=!0),ze.needsLights){const Bt=_o(I.state.lightProbeGridArray,te);ze.lightProbeGrid!==Bt&&(ze.lightProbeGrid=Bt,vt=!0)}if(On||X!==A){Pe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ut.setValue(B,"projectionMatrix",A.projectionMatrix),Ut.setValue(B,"viewMatrix",A.matrixWorldInverse);const di=Ut.map.cameraPosition;di!==void 0&&di.setValue(B,It.setFromMatrixPosition(A.matrixWorld)),Mt.logarithmicDepthBuffer&&Ut.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ut.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),X!==A&&(X=A,vt=!0,ji=!0)}if(ze.needsLights&&(_n.state.directionalShadowMap.length>0&&Ut.setValue(B,"directionalShadowMap",_n.state.directionalShadowMap,E),_n.state.spotShadowMap.length>0&&Ut.setValue(B,"spotShadowMap",_n.state.spotShadowMap,E),_n.state.pointShadowMap.length>0&&Ut.setValue(B,"pointShadowMap",_n.state.pointShadowMap,E)),te.isSkinnedMesh){Ut.setOptional(B,te,"bindMatrix"),Ut.setOptional(B,te,"bindMatrixInverse");const Bt=te.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ut.setValue(B,"boneTexture",Bt.boneTexture,E))}te.isBatchedMesh&&(Ut.setOptional(B,te,"batchingTexture"),Ut.setValue(B,"batchingTexture",te._matricesTexture,E),Ut.setOptional(B,te,"batchingIdTexture"),Ut.setValue(B,"batchingIdTexture",te._indirectTexture,E),Ut.setOptional(B,te,"batchingColorTexture"),te._colorsTexture!==null&&Ut.setValue(B,"batchingColorTexture",te._colorsTexture,E));const fi=se.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&Je.update(te,se,Fn),(vt||ze.receiveShadow!==te.receiveShadow)&&(ze.receiveShadow=te.receiveShadow,Ut.setValue(B,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(jt.envMapIntensity.value=q.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=WE()),vt){if(Ut.setValue(B,"toneMappingExposure",W.toneMappingExposure),ze.needsLights&&mc(jt,ji),Ne&&ne.fog===!0&&fe.refreshFogUniforms(jt,Ne),fe.refreshMaterialUniforms(jt,ne,De,Fe,I.state.transmissionRenderTarget[A.id]),ze.needsLights&&ze.lightProbeGrid){const Bt=ze.lightProbeGrid;jt.probesSH.value=Bt.texture,jt.probesMin.value.copy(Bt.boundingBox.min),jt.probesMax.value.copy(Bt.boundingBox.max),jt.probesResolution.value.copy(Bt.resolution)}Ql.upload(B,pa(ze),jt,E)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ql.upload(B,pa(ze),jt,E),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ut.setValue(B,"center",te.center),Ut.setValue(B,"modelViewMatrix",te.modelViewMatrix),Ut.setValue(B,"normalMatrix",te.normalMatrix),Ut.setValue(B,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const Bt=ne.uniformsGroups;for(let di=0,bi=Bt.length;di<bi;di++){const Wr=Bt[di];de.update(Wr,Fn),de.bind(Wr,Fn)}}return Fn}function mc(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function gc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,q,se){const ne=P.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),P.get(A.texture).__webglTexture=q,P.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:se,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const se=P.get(A);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0};const Zt=B.createFramebuffer();this.setRenderTarget=function(A,q=0,se=0){H=A,re=q,le=se;let ne=null,te=!1,Ne=!1;if(A){const Ce=P.get(A);if(Ce.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(B.FRAMEBUFFER,Ce.__webglFramebuffer),$.copy(A.viewport),ce.copy(A.scissor),ue=A.scissorTest,Pe.viewport($),Pe.scissor(ce),Pe.setScissorTest(ue),Z=-1;return}else if(Ce.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Ce.__hasExternalTextures)E.rebindTextures(A,P.get(A.texture).__webglTexture,P.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const lt=A.depthTexture;if(Ce.__boundDepthTexture!==lt){if(lt!==null&&P.has(lt)&&(A.width!==lt.image.width||A.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ne=!0);const Qe=P.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[q])?ne=Qe[q][se]:ne=Qe[q],te=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?ne=P.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?ne=Qe[se]:ne=Qe,$.copy(A.viewport),ce.copy(A.scissor),ue=A.scissorTest}else $.copy(me).multiplyScalar(De).floor(),ce.copy(Ie).multiplyScalar(De).floor(),ue=Ze;if(se!==0&&(ne=Zt),Pe.bindFramebuffer(B.FRAMEBUFFER,ne)&&Pe.drawBuffers(A,ne),Pe.viewport($),Pe.scissor(ce),Pe.setScissorTest(ue),te){const Ce=P.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ce.__webglTexture,se)}else if(Ne){const Ce=q;for(let qe=0;qe<A.textures.length;qe++){const Qe=P.get(A.textures[qe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+qe,Qe.__webglTexture,se,Ce)}}else if(A!==null&&se!==0){const Ce=P.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ce.__webglTexture,se)}Z=-1},this.readRenderTargetPixels=function(A,q,se,ne,te,Ne,He,Ce=0){if(!(A&&A.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe){Pe.bindFramebuffer(B.FRAMEBUFFER,qe);try{const Qe=A.textures[Ce],lt=Qe.format,ct=Qe.type;if(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ce),!Mt.textureFormatReadable(lt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(ct)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ne&&se>=0&&se<=A.height-te&&B.readPixels(q,se,ne,te,V.convert(lt),V.convert(ct),Ne)}finally{const Qe=H!==null?P.get(H).__webglFramebuffer:null;Pe.bindFramebuffer(B.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(A,q,se,ne,te,Ne,He,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe)if(q>=0&&q<=A.width-ne&&se>=0&&se<=A.height-te){Pe.bindFramebuffer(B.FRAMEBUFFER,qe);const Qe=A.textures[Ce],lt=Qe.format,ct=Qe.type;if(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ce),!Mt.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,$e),B.bufferData(B.PIXEL_PACK_BUFFER,Ne.byteLength,B.STREAM_READ),B.readPixels(q,se,ne,te,V.convert(lt),V.convert(ct),0);const bt=H!==null?P.get(H).__webglFramebuffer:null;Pe.bindFramebuffer(B.FRAMEBUFFER,bt);const Gt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await sv(B,Gt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,$e),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ne),B.deleteBuffer($e),B.deleteSync(Gt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,se=0){const ne=Math.pow(2,-se),te=Math.floor(A.image.width*ne),Ne=Math.floor(A.image.height*ne),He=q!==null?q.x:0,Ce=q!==null?q.y:0;E.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,se,0,0,He,Ce,te,Ne),Pe.unbindTexture()};const _c=B.createFramebuffer(),ga=B.createFramebuffer();this.copyTextureToTexture=function(A,q,se=null,ne=null,te=0,Ne=0){let He,Ce,qe,Qe,lt,ct,$e,bt,Gt;const Yt=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(se!==null)He=se.max.x-se.min.x,Ce=se.max.y-se.min.y,qe=se.isBox3?se.max.z-se.min.z:1,Qe=se.min.x,lt=se.min.y,ct=se.isBox3?se.min.z:0;else{const jt=Math.pow(2,-te);He=Math.floor(Yt.width*jt),Ce=Math.floor(Yt.height*jt),A.isDataArrayTexture?qe=Yt.depth:A.isData3DTexture?qe=Math.floor(Yt.depth*jt):qe=1,Qe=0,lt=0,ct=0}ne!==null?($e=ne.x,bt=ne.y,Gt=ne.z):($e=0,bt=0,Gt=0);const kt=V.convert(q.format),rn=V.convert(q.type);let ze;q.isData3DTexture?(E.setTexture3D(q,0),ze=B.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(E.setTexture2DArray(q,0),ze=B.TEXTURE_2D_ARRAY):(E.setTexture2D(q,0),ze=B.TEXTURE_2D),Pe.activeTexture(B.TEXTURE0),Pe.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),Pe.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Pe.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);const _n=Pe.getParameter(B.UNPACK_ROW_LENGTH),_t=Pe.getParameter(B.UNPACK_IMAGE_HEIGHT),Fn=Pe.getParameter(B.UNPACK_SKIP_PIXELS),On=Pe.getParameter(B.UNPACK_SKIP_ROWS),vt=Pe.getParameter(B.UNPACK_SKIP_IMAGES);Pe.pixelStorei(B.UNPACK_ROW_LENGTH,Yt.width),Pe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Yt.height),Pe.pixelStorei(B.UNPACK_SKIP_PIXELS,Qe),Pe.pixelStorei(B.UNPACK_SKIP_ROWS,lt),Pe.pixelStorei(B.UNPACK_SKIP_IMAGES,ct);const ji=A.isDataArrayTexture||A.isData3DTexture,Ut=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const jt=P.get(A),fi=P.get(q),Bt=P.get(jt.__renderTarget),di=P.get(fi.__renderTarget);Pe.bindFramebuffer(B.READ_FRAMEBUFFER,Bt.__webglFramebuffer),Pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let bi=0;bi<qe;bi++)ji&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,P.get(A).__webglTexture,te,ct+bi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,P.get(q).__webglTexture,Ne,Gt+bi)),B.blitFramebuffer(Qe,lt,He,Ce,$e,bt,He,Ce,B.DEPTH_BUFFER_BIT,B.NEAREST);Pe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||P.has(A)){const jt=P.get(A),fi=P.get(q);Pe.bindFramebuffer(B.READ_FRAMEBUFFER,_c),Pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,ga);for(let Bt=0;Bt<qe;Bt++)ji?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,jt.__webglTexture,te,ct+Bt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,jt.__webglTexture,te),Ut?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,fi.__webglTexture,Ne,Gt+Bt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fi.__webglTexture,Ne),te!==0?B.blitFramebuffer(Qe,lt,He,Ce,$e,bt,He,Ce,B.COLOR_BUFFER_BIT,B.NEAREST):Ut?B.copyTexSubImage3D(ze,Ne,$e,bt,Gt+Bt,Qe,lt,He,Ce):B.copyTexSubImage2D(ze,Ne,$e,bt,Qe,lt,He,Ce);Pe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ut?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(ze,Ne,$e,bt,Gt,He,Ce,qe,kt,rn,Yt.data):q.isCompressedArrayTexture?B.compressedTexSubImage3D(ze,Ne,$e,bt,Gt,He,Ce,qe,kt,Yt.data):B.texSubImage3D(ze,Ne,$e,bt,Gt,He,Ce,qe,kt,rn,Yt):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ne,$e,bt,He,Ce,kt,rn,Yt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ne,$e,bt,Yt.width,Yt.height,kt,Yt.data):B.texSubImage2D(B.TEXTURE_2D,Ne,$e,bt,He,Ce,kt,rn,Yt);Pe.pixelStorei(B.UNPACK_ROW_LENGTH,_n),Pe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_t),Pe.pixelStorei(B.UNPACK_SKIP_PIXELS,Fn),Pe.pixelStorei(B.UNPACK_SKIP_ROWS,On),Pe.pixelStorei(B.UNPACK_SKIP_IMAGES,vt),Ne===0&&q.generateMipmaps&&B.generateMipmap(ze),Pe.unbindTexture()},this.initRenderTarget=function(A){P.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),Pe.unbindTexture()},this.resetState=function(){re=0,le=0,H=null,Pe.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
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
 */const Cg=s=>{const e=qE(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Df={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},$E=Ct.createContext({}),KE=()=>Ct.useContext($E),ZE=Ct.forwardRef(({color:s,size:e,strokeWidth:t,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},h)=>{const{size:m=24,strokeWidth:x=2,absoluteStrokeWidth:S=!1,color:g="currentColor",className:y=""}=KE()??{},w=r??S?Number(t??x)*24/Number(e??m):t??x;return Ct.createElement("svg",{ref:h,...Df,width:e??m??Df.width,height:e??m??Df.height,stroke:s??g,strokeWidth:w,className:_0("lucide",y,o),...!l&&!YE(d)&&{"aria-hidden":"true"},...d},[...u.map(([C,v])=>Ct.createElement(C,v)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=(s,e)=>{const t=Ct.forwardRef(({className:r,...o},l)=>Ct.createElement(ZE,{ref:l,iconNode:e,className:_0(`lucide-${XE(Cg(s))}`,`lucide-${s}`,r),...o}));return t.displayName=Cg(s),t};/**
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
 */const aT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],x0=on("clipboard-list",aT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],lT=on("download",oT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],v0=on("dumbbell",cT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],S0=on("flame",uT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],y0=on("gauge",fT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]],M0=on("goal",dT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],pT=on("leaf",hT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["path",{d:"M5 12h14",key:"1ays0h"}]],E0=on("minus",mT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],T0=on("plus",gT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Wd=on("rotate-ccw",_T);/**
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
 */const wT=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],AT=on("zap",wT),jd=s=>`./assets/${s}`,Xd=s=>jd(`generated/${s}`),Rg={p:140,c:225,f:60,kcal:2e3},bT=2900,CT=135,C0={pasta:{name:"意面 · Garlic oil",short:"意面",sub:"力量日最爽",unit:"g",step:10,perUnit:{p:.12,c:.71,f:.015},kcalUnit:3.55,color:"#ffb55c"},soba:{name:"荞麦面 · Soba",short:"荞麦",sub:"清爽低负担",unit:"g",step:10,perUnit:{p:.14,c:.66,f:.023},kcalUnit:3.44,color:"#a8d46f"},nissin:{name:"日清非油炸",short:"日清",sub:"懒人汤面",unit:"包",step:1,perUnit:{p:6.7,c:55,f:4.9},kcalUnit:291,color:"#ff766f"},pho:{name:"越南米粉",short:"米粉",sub:"低脂换口味",unit:"包",step:1,perUnit:{p:4,c:43,f:2},kcalUnit:210,color:"#7bd6d0"},bifun:{name:"纯干米粉",short:"干米粉",sub:"纯碳水补满",unit:"g",step:10,perUnit:{p:.06,c:.79,f:.005},kcalUnit:3.45,color:"#f7df77"}},R0={beef:{label:"牛肉切り落とし",short:"牛肉",tag:"raw · per g",unit:"g",step:10,p:.19,c:0,max:650,note:"脂肪按包装校准"},chicken:{label:"速食鸡胸",short:"鸡胸",tag:"per pack",unit:"块",step:1,p:22,c:1,f:2,max:6,note:"最稳高蛋白"},duck:{label:"合鸭胸去皮",short:"合鸭",tag:"100g serve",unit:"份",step:1,p:21,c:.5,f:6,max:4,note:"香但不太肥"},kfc:{label:"KFC 原味鸡",short:"KFC",tag:"per piece",unit:"块",step:1,p:18,c:8,f:14,max:5,note:"爽，但盐高"},oikos:{label:"Oikos 高蛋白酸奶",short:"Oikos",tag:"per cup",unit:"個",step:1,p:12,c:5,f:0,max:8,note:"零脂补蛋白"}},P0={egg_fried:{label:"煎蛋",short:"煎蛋",unit:"个",step:1,p:6,c:.4,f:7,max:6},sauce:{label:"ペペロン酱",short:"蒜油酱",unit:"包",step:1,p:.9,c:1.5,f:10,max:2},olive:{label:"橄榄油",short:"橄榄油",unit:"小勺",step:1,p:0,c:0,f:4.5,max:6},nuts:{label:"素焼きナッツ",short:"坚果",unit:"10g",step:1,p:2,c:2,f:5,max:5},avocado:{label:"アボカド",short:"牛油果",unit:"半个",step:1,p:1,c:4,f:15,max:2}},ta={banana:{label:"香蕉",unit:"根",step:1,max:4,p:1,c:27,f:.3},apple:{label:"苹果",unit:"个",step:1,max:3,p:.4,c:35,f:.3},kiwi:{label:"奇异果",unit:"个",step:1,max:4,p:1,c:14,f:.2},pineapple:{label:"切块菠萝 240g",unit:"盒",step:1,max:2,p:1.44,c:31.2,f:.24},yogurt:{label:"无糖酸奶",unit:"g",step:50,max:400,p:.036,c:.049,f:.03}},N0={chicken:{label:"鸡胸",unit:"块",step:1,max:10,p:22,c:1,f:2},egg:{label:"全蛋",unit:"个",step:1,max:10,p:6,c:.5,f:5},oikos:{label:"Oikos",unit:"個",step:1,max:6,p:12,c:5,f:0},onigiri:{label:"饭团",unit:"个",step:1,max:6,p:3,c:39,f:.5},nissin:{label:"日清面",unit:"包",step:1,max:4,p:6.7,c:55,f:4.9},rice:{label:"米饭",unit:"g",step:50,max:1e3,p:.026,c:.28,f:.003},beef:{label:"牛肉",unit:"g",step:50,max:600,p:.19,c:0,f:.072},pasta:{label:"干意面",unit:"g",step:50,max:300,p:.12,c:.71,f:.015},banana:{label:"香蕉",unit:"根",step:1,max:4,p:1,c:27,f:.25}},la={chicken:{label:"鸡胸",unit:"块",step:1,max:5,p:22,c:1,f:2},eggs:{label:"全蛋",unit:"个",step:1,max:6,p:6,c:.5,f:5},banana:{label:"香蕉",unit:"根",step:1,max:4,p:1,c:27,f:.25},pineapple:{label:"菠萝 240g",unit:"盒",step:1,max:2,p:1.44,c:31.2,f:.24},oikos:{label:"Oikos",unit:"個",step:1,max:5,p:12,c:5,f:0}},zr={tomato:{label:"无盐番茄汁",sub:"K 600 / 200ml",p:1.8,c:7.1,f:0,kcal:39,k:600,na:5},yasai:{label:"野菜一日",sub:"K 740 / 200ml",p:3,c:14.5,f:0,kcal:75,k:740,na:80},none:{label:"不补钾",sub:"今天省了",p:0,c:0,f:0,kcal:0,k:0,na:0}},L0=[{id:"burger",label:"汉堡 + 薯条",kcal:980},{id:"ramen",label:"拉面 + 饭",kcal:1200},{id:"sushi",label:"回转寿司 12 皿",kcal:1050},{id:"pizza",label:"Pizza 半张",kcal:1150},{id:"dessert",label:"甜品奶茶",kcal:620},{id:"katsu",label:"炸猪排咖喱",kcal:1450}],RT=[{id:"plan",label:"今日",icon:A0},{id:"detail",label:"明细",icon:y0},{id:"shop",label:"采购",icon:yT},{id:"cheat",label:"放松",icon:S0}],Fr={p:0,c:0,f:0,kcal:0},In=(s,e,t)=>Math.max(e,Math.min(t,Number(s)||0)),yn=(s,e=0)=>Number((Number(s)||0).toFixed(e)),fa=s=>s.kcal??s.p*4+s.c*4+s.f*9,uo=s=>({...s,kcal:fa(s)}),Ii=(...s)=>uo(s.reduce((e,t)=>({p:e.p+((t==null?void 0:t.p)||0),c:e.c+((t==null?void 0:t.c)||0),f:e.f+((t==null?void 0:t.f)||0),kcal:e.kcal+fa(t||Fr)}),{...Fr}));function Mi(s,e){return uo({p:s.p*e,c:s.c*e,f:s.f*e})}function D0(s){return Object.entries(s).filter(([e,t])=>la[e]&&t>0)}function PT(s){const e=D0(s);return e.length?e.map(([t,r])=>`${la[t].label} ${yn(r)}${la[t].unit}`).join(" / "):"不吃"}function NT(s,e){const t=zr[s]||zr.none;return s==="none"||e<=0?"不喝":`${t.label} ${yn(e)}ml`}function I0(s,e,t){return D0(s).length>0||e!=="none"&&t>0}function U0(s,e,t){return`${PT(s)} · ${NT(e,t)}`}function If(s,e){return!Number.isFinite(s)||s<=0?0:Math.max(0,Math.round(s/e)*e)}function LT(s){return uo({p:s*.31/4,c:s*.49/4,f:s*.2/9,kcal:s})}function DT(s,e){const t=R0[s];return{...t,f:s==="beef"?e*.8/100:t.f}}function IT(s,e){const[t,r]=Ct.useState(()=>{const o=Number(localStorage.getItem(s));return Number.isFinite(o)&&o>0?o:e});return Ct.useEffect(()=>{localStorage.setItem(s,String(t))},[s,t]),[t,r]}function UT({tone:s="warm"}){const e=Ct.useRef(null);return Ct.useEffect(()=>{const t=e.current;if(!t)return;const r=()=>{const F=document.createElement("canvas");F.dataset.engine="2d-fallback";const M=F.getContext("2d");t.appendChild(F);const N=()=>{const{width:le,height:H}=t.getBoundingClientRect(),Z=Math.min(window.devicePixelRatio||1,2);F.width=Math.max(1,Math.floor(le*Z)),F.height=Math.max(1,Math.floor(H*Z)),F.style.width=`${Math.max(1,le)}px`,F.style.height=`${Math.max(1,H)}px`,M.setTransform(Z,0,0,Z,0,0)};N();const W=new ResizeObserver(N);W.observe(t);let k=0;const Y=Array.from({length:46},(le,H)=>({angle:H*.72,radius:70+H%9*22,color:["#ff8068","#ffcf69","#a8d46f"][H%3],size:2.5+H%5})),re=()=>{k=window.requestAnimationFrame(re);const{width:le,height:H}=F.getBoundingClientRect();M.clearRect(0,0,le,H);const Z=M.createRadialGradient(le*.55,H*.28,0,le*.55,H*.28,Math.max(le,H)*.75);Z.addColorStop(0,"rgba(255,207,105,0.18)"),Z.addColorStop(.45,"rgba(255,128,104,0.08)"),Z.addColorStop(1,"rgba(0,0,0,0)"),M.fillStyle=Z,M.fillRect(0,0,le,H),M.globalCompositeOperation="screen",Y.forEach(X=>{X.angle+=.006;const $=le*.5+Math.cos(X.angle)*X.radius*(le/390),ce=H*.46+Math.sin(X.angle)*X.radius*.52*(H/844);M.beginPath(),M.fillStyle=X.color,M.globalAlpha=.38,M.arc($,ce,X.size,0,Math.PI*2),M.fill()}),M.globalAlpha=1,M.globalCompositeOperation="source-over"};return re(),()=>{window.cancelAnimationFrame(k),W.disconnect(),t.removeChild(F)}},o=document.createElement("canvas");let l=!1;try{l=!!(o.getContext("webgl2")||o.getContext("webgl"))}catch{l=!1}if(!l)return r();const u=new yv,d=new ei(45,1,.1,100);d.position.set(0,0,9);let h;try{h=new jE({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{return r()}h.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),h.setClearColor(0,0),t.appendChild(h.domElement);const m=new so;u.add(m),u.add(new qv(16777215,.75));const x=new ng(16760179,3.4,22);x.position.set(4,2,6),u.add(x);const S=new ng(9752970,2.1,18);S.position.set(-5,-2,4),u.add(S);const g=s==="cool"?[8640255,11064431,16764777]:[16747377,16764777,11064431],y=new Hd(.16,32,32),w=g.flatMap((F,M)=>{const N=new Gv({color:F,emissive:F,emissiveIntensity:.22,roughness:.22,metalness:.24});return Array.from({length:9},(W,k)=>{const Y=new Gi(y,N),re=k/9*Math.PI*2+M*.55,le=2.05+M*.68;return Y.position.set(Math.cos(re)*le,Math.sin(re)*le*.48,M*-.4),Y.userData={angle:re,radius:le,band:M,speed:.004+M*.0015},m.add(Y),Y})});[2.05,2.75,3.45].forEach((F,M)=>{const W=new Fv(0,0,F,F*.48,0,Math.PI*2).getPoints(120).map(le=>new Q(le.x,le.y,-.5+M*-.2)),k=new Xn().setFromPoints(W),Y=new t0({color:g[M],transparent:!0,opacity:.22}),re=new Lv(k,Y);re.rotation.z=M*.34,m.add(re)});const C=120,v=new Xn,_=new Float32Array(C*3);for(let F=0;F<C;F+=1){const M=F*1.618,N=1.5+F*37%100/22;_[F*3]=Math.cos(M)*N,_[F*3+1]=Math.sin(M*.9)*N*.42,_[F*3+2]=-2.2-F*17%80/32}v.setAttribute("position",new wi(_,3));const b=new Dv(v,new n0({color:16769443,size:.035,transparent:!0,opacity:.46}));u.add(b);const L=()=>{const{width:F,height:M}=t.getBoundingClientRect();h.setSize(Math.max(1,F),Math.max(1,M),!1),d.aspect=Math.max(1,F)/Math.max(1,M),d.updateProjectionMatrix()};L();const D=new ResizeObserver(L);D.observe(t);let z=0;const I=()=>{z=window.requestAnimationFrame(I),m.rotation.z+=.0018,m.rotation.y=Math.sin(Date.now()*35e-5)*.18,b.rotation.z-=9e-4,w.forEach(F=>{F.userData.angle+=F.userData.speed;const{angle:M,radius:N,band:W}=F.userData;F.position.x=Math.cos(M)*N,F.position.y=Math.sin(M)*N*.48,F.position.z=-.25-W*.42+Math.sin(M*2)*.12}),h.render(u,d)};return I(),()=>{window.cancelAnimationFrame(z),D.disconnect(),h.dispose(),y.dispose(),v.dispose(),t.removeChild(h.domElement)}},[s]),R.jsx("div",{ref:e,className:"pointer-events-none fixed inset-0 -z-10 opacity-70","data-three-orbit":!0})}function FT(){const[s,e]=Ct.useState("plan"),[t,r]=Ct.useState(Rg),[o,l]=IT("cutting:tdee",bT),[u,d]=Ct.useState("quick"),[h,m]=Ct.useState(800),[x,S]=Ct.useState({}),[g,y]=Ct.useState("pasta"),[w,C]=Ct.useState(["beef"]),[v,_]=Ct.useState(["sauce","egg_fried"]),[b,L]=Ct.useState({}),[D,z]=Ct.useState(13),[I,F]=Ct.useState({}),[M,N]=Ct.useState("tomato"),[W,k]=Ct.useState(400),[Y,re]=Ct.useState(6.5),[le,H]=Ct.useState(2e3),[Z,X]=Ct.useState(7),[$,ce]=Ct.useState(!1),[ue,O]=Ct.useState(!1),[ee,Le]=Ct.useState(!1),[Fe,De]=Ct.useState({name:"手动加餐",p:0,c:0,f:0,kcal:0}),[ae,ve]=Ct.useState({}),me=(mt,B,xt,nt=1/0)=>{mt(Mt=>{const Pe=In(xt,0,nt),Et={...Mt};return Pe>0?Et[B]=Pe:delete Et[B],Et})},Ie=mt=>{C(B=>B.includes(mt)?B.length>1?B.filter(xt=>xt!==mt):B:[...B,mt])},Ze=mt=>{_(B=>B.includes(mt)?B.filter(xt=>xt!==mt):[...B,mt])},Ge=Ct.useMemo(()=>{var Tt,dn;const mt=Object.entries(x).reduce((ot,[ht,Mn])=>Ii(ot,Mi(N0[ht],Mn)),Fr),B=u==="tally"&&mt.kcal>0?mt:LT(h),xt=Object.entries(I).reduce((ot,[ht,Mn])=>Ii(ot,Mi(la[ht],Mn)),Fr),nt=zr[M]||zr.none,Mt=uo(Mi(nt,W/200));Mt.kcal=nt.kcal*(W/200);const Pe=uo(Fe),Et=Ii(B,xt,Mt,Pe),P=Object.entries(b).filter(([ot,ht])=>ta[ot]&&ht>0),E=P.reduce((ot,[ht,Mn])=>Ii(ot,Mi(ta[ht],Mn)),Fr),K=P.map(([ot,ht])=>({key:`extra-${ot}`,name:ta[ot].label,qty:ht,unit:ta[ot].unit,macro:Mi(ta[ot],ht),tone:"gold"})),he=Math.max(0,Math.min(CT,t.p)-Et.p),ge=w.map(ot=>{const ht=DT(ot,D),Mn=he/Math.max(1,w.length)/ht.p,qn=In(If(Mn,ht.step),0,ht.max);return{key:ot,name:ht.label,short:ht.short,qty:qn,unit:ht.unit,macro:Mi(ht,qn),tone:"red"}}).filter(ot=>ot.qty>0),Ee=ge.reduce((ot,ht)=>Ii(ot,ht.macro),Fr),Re=Math.max(0,t.f-Et.f-E.f-Ee.f),fe=v.length?v:[],pe=fe.map(ot=>{const ht=P0[ot],Mn=Re/Math.max(1,fe.length)/ht.f,qn=In(If(Mn,ht.step),0,ht.max);return{key:`fat-${ot}`,name:ht.label,short:ht.short,qty:qn,unit:ht.unit,macro:Mi(ht,qn),tone:"amber"}}).filter(ot=>ot.qty>0),Ue=pe.reduce((ot,ht)=>Ii(ot,ht.macro),Fr),Be=Ii(Et,E,Ee,Ue),Ae=Math.max(0,t.kcal-Be.kcal),ye=C0[g],Je=In(If(Ae/ye.kcalUnit,ye.step),0,ye.unit==="包"?8:420),rt=Mi(ye.perUnit,Je),pt=Je>0?[{key:`carb-${g}`,name:ye.name,short:ye.short,qty:Je,unit:ye.unit,macro:rt,tone:"green"}]:[],V=[...ge,...pe,...K,...pt],Te=V.reduce((ot,ht)=>Ii(ot,ht.macro),Fr),de=Ii(Et,Te),ke=Math.round(o-de.kcal),be=(((Tt=zr[M])==null?void 0:Tt.k)||0)*(W/200),_e=(((dn=zr[M])==null?void 0:dn.na)||0)*(W/200),je=Y*393+_e,st=le+be,Ot=V.map(ot=>({...ot,weeklyQty:yn(ot.qty*Z,ot.unit==="g"?0:1)}));return{lunch:B,pre:xt,drink:Mt,snack:Pe,beforeDinner:Et,dinner:Te,dinnerItems:V,total:de,deficit:ke,potassium:st,sodium:je,shopping:Ot,carb:ye}},[D,g,M,W,b,v,le,h,u,I,Y,Z,Fe,x,t,o,w]),Ft=L0.reduce((mt,B)=>mt+(ae[B.id]||0)*B.kcal,0),ut=Math.round(Ge.total.kcal+Ft-o),At=I0(I,M,W),It=U0(I,M,W),ft=Fe.kcal>0||Fe.p>0||Fe.c>0||Fe.f>0,Wt=()=>{r(Rg),m(800),S({}),y("pasta"),C(["beef"]),_(["sauce","egg_fried"]),L({}),z(13),F({}),N("tomato"),k(400),De({name:"手动加餐",p:0,c:0,f:0,kcal:0})},Vt=()=>{const mt={date:new Date().toISOString().slice(0,10),targets:t,lunch:Ge.lunch,pre:Ge.pre,drink:{key:M,ml:W,macro:Ge.drink},snack:Fe,dinner:{items:Ge.dinnerItems,macro:Ge.dinner},total:Ge.total,deficit:Ge.deficit},B=new Blob([JSON.stringify(mt,null,2)],{type:"application/json"}),xt=URL.createObjectURL(B),nt=document.createElement("a");nt.href=xt,nt.download=`cutting-protocol-${mt.date}.json`,nt.click(),URL.revokeObjectURL(xt)};return R.jsxs("div",{className:"min-h-screen overflow-hidden text-zinc-50",children:[R.jsx(UT,{tone:s==="cheat"?"cool":"warm"}),R.jsx("div",{className:"fixed inset-0 -z-20 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,181,92,0.24),transparent_38%),radial-gradient(circle_at_0%_20%,rgba(122,214,208,0.16),transparent_32%),linear-gradient(135deg,#0d0f10_0%,#17120f_45%,#101615_100%)]"}),R.jsx("div",{className:"fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35"}),R.jsxs("div",{className:"mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-28 pt-4 sm:px-6 lg:px-8",children:[R.jsxs("header",{className:"sticky top-3 z-40 flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-black/35 px-2 py-2 backdrop-blur-2xl sm:gap-3 sm:px-3",children:[R.jsxs("button",{onClick:()=>e("plan"),className:"flex min-w-0 items-center gap-2 text-left",children:[R.jsx("span",{className:"grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-zinc-950",children:R.jsx(w0,{className:"h-4 w-4"})}),R.jsxs("span",{className:"hidden min-w-0 sm:block",children:[R.jsx("span",{className:"block truncate font-display text-base leading-none",children:"Cutting Lab"}),R.jsx("span",{className:"mt-1 block truncate text-[10px] uppercase tracking-[0.24em] text-zinc-400",children:"dinner pilot"})]})]}),R.jsx("nav",{className:"ml-auto hidden shrink-0 grid-cols-4 rounded-lg bg-white/7 p-1 lg:grid",children:R.jsx(Pg,{tab:s,setTab:e,mode:"top"})})]}),R.jsx(OT,{model:Ge,targets:t,onFuel:()=>O(!0),fuelActive:At,fuelSummary:It,onSnack:()=>Le(!0),onDownload:Vt}),s==="plan"&&R.jsx(kT,{model:Ge,lunchMode:u,setLunchMode:d,lunchKcal:h,setLunchKcal:m,tally:x,setTally:S,setMapQty:me,carbPlan:g,setCarbPlan:y,proteinKeys:w,toggleProtein:Ie,fatKeys:v,toggleFat:Ze,extraCarbs:b,setExtraCarbs:L,beefFat:D,setBeefFat:z,advancedOpen:$,setAdvancedOpen:ce,targets:t,setTargets:r,resetDefaults:Wt}),s==="detail"&&R.jsx(BT,{model:Ge,targets:t,setTargets:r,tdee:o,setTdee:l,pre:I,setPre:F,setMapQty:me,drinkKey:M,setDrinkKey:N,drinkMl:W,setDrinkMl:k,saltG:Y,setSaltG:re,foodK:le,setFoodK:H}),s==="shop"&&R.jsx(zT,{model:Ge,shopDays:Z,setShopDays:X}),s==="cheat"&&R.jsx(VT,{cheat:ae,setCheat:ve,cheatTotal:Ft,cheatSurplus:ut,tdee:o,dayKcal:Ge.total.kcal})]}),R.jsx(GT,{open:ue,setOpen:O,pre:I,setPre:F,setMapQty:me,drinkKey:M,setDrinkKey:N,drinkMl:W,setDrinkMl:k,model:Ge}),R.jsx(HT,{open:ee,setOpen:Le,snack:Fe,setSnack:De,active:ft,dinnerSummary:Ge.dinnerItems.slice(0,4).map(mt=>`${mt.short||mt.name} ${yn(mt.qty)}${mt.unit}`).join(" · ")}),R.jsxs("button",{onClick:()=>Le(!0),className:"fixed bottom-24 right-5 z-50 grid h-14 w-14 place-items-center rounded-lg border border-white/15 bg-[#ff8068] text-white shadow-[0_16px_40px_-18px_#ff8068] transition hover:-translate-y-0.5 lg:bottom-5","aria-label":"零食加餐",children:[R.jsx(iT,{className:"h-6 w-6"}),ft&&R.jsx("span",{className:"absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#a8d46f]"})]}),R.jsx("nav",{className:"fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 rounded-lg border border-white/10 bg-black/65 p-1 backdrop-blur-2xl lg:hidden",children:R.jsx(Pg,{tab:s,setTab:e,mode:"bottom"})})]})}function Pg({tab:s,setTab:e,mode:t}){return RT.map(r=>{const o=r.icon;return R.jsxs("button",{onClick:()=>e(r.id),className:`grid h-11 place-items-center rounded-md px-2 text-[11px] transition ${t==="top"?"min-w-20 grid-cols-[16px_auto] gap-1.5":"grid-rows-[18px_auto] gap-0.5"} ${s===r.id?"bg-white text-zinc-950 shadow-[0_10px_30px_-18px_rgba(255,255,255,0.9)]":"text-zinc-400 hover:bg-white/10 hover:text-white"}`,"aria-label":r.label,children:[R.jsx(o,{className:"h-4 w-4"}),R.jsx("span",{children:r.label})]},r.id)})}function OT({model:s,targets:e,onFuel:t,fuelActive:r,fuelSummary:o,onSnack:l,onDownload:u}){const d=s.deficit>=650?"text-[#a8d46f]":s.deficit>=300?"text-[#ffcf69]":"text-[#ff8068]";return R.jsxs("section",{className:"relative grid min-h-[78vh] items-end gap-6 py-4 lg:grid-cols-[minmax(0,1.03fr)_minmax(360px,0.97fr)] lg:items-center",children:[R.jsxs("div",{className:"relative order-2 lg:order-1",children:[R.jsxs("div",{className:"mb-5 flex flex-wrap items-center gap-2",children:[R.jsxs("div",{className:"inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/8 px-3 py-2 text-xs text-zinc-300 backdrop-blur-xl",children:[R.jsx(JE,{className:"h-4 w-4 text-[#a8d46f]"}),R.jsxs("span",{children:["83 kg · 25% BF · 16:8 IF · 今日 ",e.kcal," kcal"]})]}),R.jsxs("button",{"data-home-fuel-button":!0,onClick:t,className:`inline-flex max-w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-xs backdrop-blur-xl transition hover:-translate-y-0.5 ${r?"border-[#a8d46f]/35 bg-[#a8d46f]/12 text-[#d8ffc9]":"border-white/10 bg-white/8 text-zinc-300 hover:border-[#ffcf69]/40"}`,"aria-label":`补给：${o}`,children:[R.jsx(v0,{className:`h-4 w-4 shrink-0 ${r?"text-[#a8d46f]":"text-[#ffcf69]"}`}),R.jsx("span",{className:"shrink-0 font-cjk font-semibold",children:"补给"}),R.jsx("span",{className:`rounded-md px-2 py-0.5 font-mono text-[10px] ${r?"bg-[#a8d46f] text-zinc-950":"bg-white/10 text-zinc-300"}`,children:r?"ON":"OFF"}),R.jsx("span",{className:"hidden max-w-[260px] truncate text-zinc-400 sm:inline",children:o})]})]}),R.jsxs("h1",{className:"max-w-3xl font-display text-5xl leading-[0.92] tracking-normal text-white sm:text-7xl lg:text-8xl",children:["今晚吃得",R.jsx("span",{className:"block text-[#ffcf69]",children:"刚刚好"})]}),R.jsx("p",{className:"mt-5 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base",children:"中午吃了多少，训练前垫了什么，晚餐自己收口。肉、主食、脂肪和水果都算好，打开手机先看答案。"}),R.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap",children:[R.jsx(Uf,{icon:AT,label:"零食",onClick:l}),R.jsx(Uf,{icon:lT,label:"导出",onClick:u}),R.jsx(Uf,{icon:M0,label:`${s.deficit>0?"-":"+"}${Math.abs(s.deficit)}`,sub:"今日赤字"})]})]}),R.jsxs("div",{className:"relative order-1 lg:order-2",children:[R.jsx("div",{className:"absolute -inset-8 rounded-[2rem] bg-[#ff8068]/10 blur-3xl"}),R.jsxs("div",{className:"relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] shadow-[0_30px_90px_-50px_rgba(0,0,0,0.95)] backdrop-blur-xl",children:[R.jsx("img",{src:Xd("protocol-hero.jpg"),alt:"Cutting Lab dinner visual",className:"h-[280px] w-full object-cover sm:h-[420px]"}),R.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent"}),R.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-4 sm:p-5",children:[R.jsxs("div",{className:"mb-3 flex items-end justify-between gap-3",children:[R.jsxs("div",{children:[R.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#ffcf69]",children:"今晚"}),R.jsx("div",{className:"font-display text-4xl leading-none text-white sm:text-5xl",children:Math.round(s.dinner.kcal)}),R.jsx("div",{className:"mt-1 text-xs text-zinc-400",children:"晚餐热量"})]}),R.jsxs("div",{className:`rounded-lg bg-black/45 px-3 py-2 text-right backdrop-blur ${d}`,children:[R.jsx("div",{className:"text-[10px] uppercase tracking-[0.2em] text-zinc-400",children:"今日赤字"}),R.jsxs("div",{className:"font-mono text-xl",children:[s.deficit>0?"-":"+",Math.abs(s.deficit)]})]})]}),R.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[R.jsx(jl,{label:"P",value:s.total.p,target:e.p,unit:"g"}),R.jsx(jl,{label:"C",value:s.total.c,target:e.c,unit:"g"}),R.jsx(jl,{label:"F",value:s.total.f,target:e.f,unit:"g"}),R.jsx(jl,{label:"Kcal",value:s.total.kcal,target:e.kcal,unit:""})]})]})]})]})]})}function kT(s){const{model:e,lunchMode:t,setLunchMode:r,lunchKcal:o,setLunchKcal:l,tally:u,setTally:d,setMapQty:h,carbPlan:m,setCarbPlan:x,proteinKeys:S,toggleProtein:g,fatKeys:y,toggleFat:w,extraCarbs:C,setExtraCarbs:v,beefFat:_,setBeefFat:b,advancedOpen:L,setAdvancedOpen:D,targets:z,setTargets:I,resetDefaults:F}=s;return R.jsxs("main",{className:"grid gap-6 lg:grid-cols-[0.9fr_1.1fr]",children:[R.jsxs("section",{className:"space-y-6",children:[R.jsxs(ki,{eyebrow:"01 · 先记今天",title:"今天吃到哪了",icon:x0,children:[R.jsx(WT,{value:t,onChange:r,options:[{value:"quick",label:"直接 kcal"},{value:"tally",label:"点选记账"}]}),t==="quick"?R.jsxs("div",{className:"mt-5",children:[R.jsx("label",{className:"text-[10px] uppercase tracking-[0.24em] text-zinc-500",children:"Lunch kcal"}),R.jsxs("div",{className:"mt-2 flex items-end gap-3",children:[R.jsx("input",{type:"number",value:o,onChange:M=>l(In(M.target.value,0,5e3)),className:"w-36 border-b border-white/20 bg-transparent font-display text-6xl leading-none text-white outline-none focus:border-[#ffcf69]"}),R.jsx("span",{className:"pb-2 text-xs uppercase tracking-[0.2em] text-zinc-500",children:"kcal"})]}),R.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:[600,700,800,900,1e3].map(M=>R.jsx(ac,{active:o===M,onClick:()=>l(M),children:M},M))})]}):R.jsx("div",{className:"mt-5 grid gap-2 sm:grid-cols-2",children:Object.entries(N0).map(([M,N])=>R.jsx(lc,{label:N.label,meta:`每${N.step}${N.unit} · ${Math.round(fa(Mi(N,N.step)))} kcal`,value:u[M]||0,unit:N.unit,step:N.step,max:N.max,onChange:W=>h(d,M,W,N.max)},M))})]}),R.jsx(ki,{eyebrow:"02 · 选个口味",title:"今晚想吃什么",icon:A0,children:R.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-5",children:Object.entries(C0).map(([M,N])=>R.jsxs("button",{onClick:()=>x(M),className:`rounded-lg border p-3 text-left transition ${m===M?"border-[#ffcf69] bg-[#ffcf69]/12 text-white":"border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/25 hover:text-white"}`,children:[R.jsx("div",{className:"font-cjk text-sm font-semibold",children:N.short}),R.jsx("div",{className:"mt-1 text-[10px] text-zinc-500",children:N.sub})]},M))})}),R.jsx(jT,{open:L,onToggle:()=>D(!L),title:"高级配置",subtitle:"肉、油脂、水果、牛肉脂肪、目标值",children:R.jsxs("div",{className:"grid gap-5",children:[R.jsx(us,{title:"晚餐蛋白",children:R.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries(R0).map(([M,N])=>R.jsx(oc,{active:S.includes(M),onClick:()=>g(M),title:N.short,meta:N.note},M))})}),R.jsx(us,{title:"脂肪来源",children:R.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries(P0).map(([M,N])=>R.jsx(oc,{active:y.includes(M),onClick:()=>w(M),title:N.short,meta:`${N.f}g 脂 / ${N.unit}`,tone:"amber"},M))})}),R.jsx(us,{title:"水果 / 酸奶",children:R.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(ta).map(([M,N])=>R.jsx(lc,{label:N.label,meta:`每${N.step}${N.unit} · C${Math.round(N.c*N.step)}`,value:C[M]||0,unit:N.unit,step:N.step,max:N.max,onChange:W=>h(v,M,W,N.max)},M))})}),R.jsxs(us,{title:"牛肉脂肪",children:[R.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,9,13,18].map(M=>R.jsxs(ac,{active:_===M,onClick:()=>b(M),children:[M,"g"]},M))}),R.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[R.jsx("input",{type:"number",value:_,onChange:M=>b(In(M.target.value,0,40)),className:"h-11 w-20 rounded-lg border border-white/10 bg-white/5 text-center font-mono text-lg outline-none focus:border-[#ffcf69]"}),R.jsx("span",{className:"text-xs text-zinc-500",children:"脂質 g / 100g raw · 水煮按 80%"})]})]}),R.jsxs(us,{title:"目标值",children:[R.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[["p","蛋白","g",500],["c","碳水","g",800],["f","脂肪","g",300],["kcal","热量","",8e3]].map(([M,N,W,k])=>R.jsx(kr,{label:N,unit:W,value:z[M],onChange:Y=>I(re=>({...re,[M]:In(Y,0,k)}))},M))}),R.jsxs("button",{onClick:F,className:"mt-3 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 transition hover:border-[#ff8068]/60 hover:text-[#ff8068]",children:[R.jsx(Wd,{className:"h-4 w-4"}),"重置默认"]})]})]})})]}),R.jsxs("section",{className:"space-y-6",children:[R.jsx(ki,{eyebrow:"03 · 今晚答案",title:"今晚就这样吃",icon:w0,children:R.jsx("div",{className:"grid gap-2",children:e.dinnerItems.map((M,N)=>R.jsx(qT,{item:M,index:N},M.key))})}),R.jsx(ki,{eyebrow:"04 · 今日节奏",title:"看一眼就够",icon:y0,children:R.jsxs("div",{className:"space-y-3",children:[R.jsx(Xl,{label:"蛋白",value:e.total.p,target:z.p,unit:"g",color:"#ff8068"}),R.jsx(Xl,{label:"碳水",value:e.total.c,target:z.c,unit:"g",color:"#ffcf69"}),R.jsx(Xl,{label:"脂肪",value:e.total.f,target:z.f,unit:"g",color:"#a8d46f"}),R.jsx(Xl,{label:"热量",value:e.total.kcal,target:z.kcal,unit:"kcal",color:"#7bd6d0"})]})})]})]})}function BT(s){const{model:e,targets:t,setTargets:r,tdee:o,setTdee:l,pre:u,setPre:d,setMapQty:h,drinkKey:m,setDrinkKey:x,drinkMl:S,setDrinkMl:g,saltG:y,setSaltG:w,foodK:C,setFoodK:v}=s,_=e.potassium>=e.sodium;return R.jsxs("main",{className:"grid gap-6 lg:grid-cols-[1fr_1fr]",children:[R.jsxs(ki,{eyebrow:"今日账本",title:"吃进去的东西",icon:x0,children:[R.jsx(io,{label:"午餐",macro:e.lunch}),R.jsx(io,{label:"训练前",macro:e.pre}),R.jsx(io,{label:"饮料/电解质",macro:e.drink}),R.jsx(io,{label:"零食加餐",macro:e.snack}),R.jsx(io,{label:"晚餐",macro:e.dinner,strong:!0})]}),R.jsx(ki,{eyebrow:"目标设置",title:"目标和消耗",icon:M0,children:R.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-5",children:[[["p","蛋白","g",500],["c","碳水","g",800],["f","脂肪","g",300],["kcal","热量","",8e3]].map(([b,L,D,z])=>R.jsx(kr,{label:L,unit:D,value:t[b],onChange:I=>r(F=>({...F,[b]:In(I,0,z)}))},b)),R.jsx(kr,{label:"TDEE",unit:"",value:o,onChange:b=>l(In(b,0,9e3))})]})}),R.jsx(ki,{eyebrow:"训练前",title:"垫一口也算进去",icon:v0,children:R.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(la).map(([b,L])=>R.jsx(lc,{label:L.label,meta:`每${L.step}${L.unit} · ${Math.round(fa(Mi(L,L.step)))} kcal`,value:u[b]||0,unit:L.unit,step:L.step,max:L.max,onChange:D=>h(d,b,D,L.max)},b))})}),R.jsxs(ki,{eyebrow:"电解质",title:"钾钠别太偏",icon:pT,children:[R.jsx("div",{className:"grid grid-cols-3 gap-2",children:Object.entries(zr).map(([b,L])=>R.jsx(oc,{active:m===b,onClick:()=>x(b),title:L.label,meta:L.sub,tone:"green"},b))}),R.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[R.jsx(kr,{label:"饮料",unit:"ml",value:S,onChange:b=>g(In(b,0,2e3))}),R.jsx(kr,{label:"盐",unit:"g",value:y,onChange:b=>w(In(b,0,20))}),R.jsx(kr,{label:"食物钾",unit:"mg",value:C,onChange:b=>v(In(b,0,8e3))})]}),R.jsxs("div",{className:`mt-4 rounded-lg border p-4 ${_?"border-[#a8d46f]/30 bg-[#a8d46f]/10":"border-[#ff8068]/30 bg-[#ff8068]/10"}`,children:[R.jsxs("div",{className:"flex items-center justify-between gap-3",children:[R.jsx("span",{className:"text-sm text-zinc-300",children:"K / Na"}),R.jsx("span",{className:_?"text-[#a8d46f]":"text-[#ff8068]",children:_?"平衡":"钾偏低"})]}),R.jsxs("div",{className:"mt-2 text-xs text-zinc-500",children:["钾 ",Math.round(e.potassium)," mg · 钠 ",Math.round(e.sodium)," mg"]})]})]})]})}function zT({model:s,shopDays:e,setShopDays:t}){return R.jsxs("main",{className:"grid gap-6 lg:grid-cols-[0.85fr_1.15fr]",children:[R.jsxs("section",{className:"overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]",children:[R.jsx("img",{src:Xd("shop-basket.jpg"),alt:"weekly grocery basket",className:"h-[360px] w-full object-cover"}),R.jsxs("div",{className:"p-4",children:[R.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#ffcf69]",children:"备货模式"}),R.jsxs("h2",{className:"mt-1 font-display text-4xl",children:["按 ",e," 天备货"]}),R.jsx("div",{className:"mt-4 flex gap-2",children:[3,5,7,10].map(r=>R.jsxs(ac,{active:e===r,onClick:()=>t(r),children:[r," 天"]},r))})]})]}),R.jsx(ki,{eyebrow:"买这些就行",title:"采购清单",icon:tT,children:R.jsx("div",{className:"grid gap-2",children:s.shopping.map(r=>R.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-black/25 px-3 py-3",children:[R.jsxs("div",{children:[R.jsx("div",{className:"font-cjk text-sm text-white",children:r.name}),R.jsxs("div",{className:"mt-1 text-xs text-zinc-500",children:["每天 ",yn(r.qty),r.unit]})]}),R.jsxs("div",{className:"rounded-md bg-white px-2.5 py-1 font-mono text-sm text-zinc-950",children:[r.weeklyQty,r.unit]})]},r.key))})})]})}function VT({cheat:s,setCheat:e,cheatTotal:t,cheatSurplus:r,tdee:o,dayKcal:l}){const u=(d,h)=>{e(m=>{const x={...m},S=In(h,0,9);return S>0?x[d]=S:delete x[d],x})};return R.jsxs("main",{className:"grid gap-6 lg:grid-cols-[1fr_0.9fr]",children:[R.jsx(ki,{eyebrow:"放松一下",title:"想吃也能算",icon:S0,children:R.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:L0.map(d=>R.jsx("div",{className:"rounded-lg border border-white/10 bg-white/[0.04] p-3",children:R.jsxs("div",{className:"flex items-center justify-between gap-3",children:[R.jsxs("div",{children:[R.jsx("div",{className:"font-cjk text-sm text-white",children:d.label}),R.jsxs("div",{className:"mt-1 text-xs text-zinc-500",children:[d.kcal," kcal"]})]}),R.jsx(XT,{value:s[d.id]||0,onChange:h=>u(d.id,h)})]})},d.id))})}),R.jsxs("section",{className:"overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]",children:[R.jsx("img",{src:jd("cheat.jpg"),alt:"cheat meal",className:"h-56 w-full object-cover"}),R.jsxs("div",{className:"p-5",children:[R.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#ff8068]",children:"吃完大概这样"}),R.jsx("div",{className:"mt-2 font-display text-6xl text-white",children:t}),R.jsx("div",{className:"text-sm text-zinc-500",children:"放松热量"}),R.jsxs("div",{className:"mt-5 grid grid-cols-3 gap-2",children:[R.jsx(Ff,{label:"今日总摄入",value:Math.round(l+t)}),R.jsx(Ff,{label:"TDEE",value:o}),R.jsx(Ff,{label:"盈余",value:(r>=0?"+":"")+r,hot:r>0})]}),R.jsxs("button",{onClick:()=>e({}),className:"mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 transition hover:border-[#ff8068]/60 hover:text-[#ff8068]",children:[R.jsx(Wd,{className:"h-4 w-4"}),"清空"]})]})]})]})}function GT({open:s,setOpen:e,pre:t,setPre:r,setMapQty:o,drinkKey:l,setDrinkKey:u,drinkMl:d,setDrinkMl:h,model:m}){if(!s)return null;const x=I0(t,l,d),S=U0(t,l,d),g=Ii(m.pre,m.drink),y=()=>{r({}),u("none"),h(0)},w=()=>{r({banana:1}),u("tomato"),h(400)},C=()=>{r({pineapple:1}),u("tomato"),h(400)},v=_=>{u(_),_==="none"?h(0):d<=0&&h(400)};return R.jsxs("div",{className:"fixed inset-0 z-[70]",children:[R.jsx("button",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>e(!1),"aria-label":"关闭补给"}),R.jsxs("aside",{className:"absolute inset-y-0 right-0 flex w-[min(460px,94vw)] flex-col border-l border-white/10 bg-[#101312] shadow-2xl",children:[R.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 p-4",children:[R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx("img",{src:jd("pre.jpg"),alt:"",className:"h-12 w-12 rounded-lg object-cover"}),R.jsxs("div",{children:[R.jsx("div",{className:"font-display text-xl text-white",children:"补给开关"}),R.jsx("div",{className:"text-[10px] uppercase tracking-[0.22em] text-zinc-500",children:"训练前吃什么喝什么"})]})]}),R.jsx("button",{onClick:()=>e(!1),className:"grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-400 hover:text-white","aria-label":"关闭",children:R.jsx(b0,{className:"h-4 w-4"})})]}),R.jsxs("div",{className:"flex-1 overflow-y-auto p-4",children:[R.jsxs("div",{className:`rounded-lg border p-4 ${x?"border-[#a8d46f]/30 bg-[#a8d46f]/10":"border-white/10 bg-white/[0.045]"}`,children:[R.jsxs("div",{className:"flex items-center justify-between gap-3",children:[R.jsx("span",{className:"text-[10px] uppercase tracking-[0.24em] text-zinc-500",children:"当前状态"}),R.jsx("span",{className:x?"text-[#a8d46f]":"text-zinc-400",children:x?"已补给":"不补给"})]}),R.jsx("div",{className:"mt-2 text-sm leading-6 text-zinc-200",children:S}),R.jsxs("div",{className:"mt-2 font-mono text-xs text-zinc-500",children:["P",yn(g.p)," C",yn(g.c)," F",yn(g.f)," · ",Math.round(g.kcal)," kcal"]})]}),R.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[R.jsxs("button",{onClick:y,className:"rounded-lg border border-white/10 bg-white/[0.04] p-3 text-left transition hover:border-[#ff8068]/50",children:[R.jsx("div",{className:"font-cjk text-sm font-semibold text-white",children:"一键不补给"}),R.jsx("div",{className:"mt-1 text-[10px] text-zinc-500",children:"不吃也不喝"})]}),R.jsxs("button",{onClick:w,className:"rounded-lg border border-[#ffcf69]/30 bg-[#ffcf69]/10 p-3 text-left transition hover:-translate-y-0.5",children:[R.jsx("div",{className:"font-cjk text-sm font-semibold text-white",children:"轻补给"}),R.jsx("div",{className:"mt-1 text-[10px] text-zinc-500",children:"香蕉 + 番茄汁"})]}),R.jsxs("button",{onClick:C,className:"rounded-lg border border-[#a8d46f]/30 bg-[#a8d46f]/10 p-3 text-left transition hover:-translate-y-0.5",children:[R.jsx("div",{className:"font-cjk text-sm font-semibold text-white",children:"菠萝盒"}),R.jsx("div",{className:"mt-1 text-[10px] text-zinc-500",children:"240g + 番茄汁"})]})]}),R.jsxs("div",{className:"mt-5 grid gap-5",children:[R.jsx(us,{title:"吃什么",children:R.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(la).map(([_,b])=>R.jsx(lc,{label:b.label,meta:`每${b.step}${b.unit} · ${Math.round(fa(Mi(b,b.step)))} kcal`,value:t[_]||0,unit:b.unit,step:b.step,max:b.max,onChange:L=>o(r,_,L,b.max)},_))})}),R.jsxs(us,{title:"喝什么",children:[R.jsx("div",{className:"grid grid-cols-3 gap-2",children:Object.entries(zr).map(([_,b])=>R.jsx(oc,{active:l===_,onClick:()=>v(_),title:b.label,meta:b.sub,tone:"green"},_))}),R.jsx("div",{className:"mt-3 grid grid-cols-3 gap-2",children:[200,400,600].map(_=>R.jsxs(ac,{active:d===_,onClick:()=>h(_),children:[_,"ml"]},_))}),R.jsx("div",{className:"mt-3",children:R.jsx(kr,{label:"饮料",unit:"ml",value:d,onChange:_=>h(In(_,0,2e3))})})]})]})]})]})]})}function HT({open:s,setOpen:e,snack:t,setSnack:r,active:o,dinnerSummary:l}){if(!s)return null;const u=(d,h)=>{r(m=>({...m,[d]:d==="name"?h:In(h,0,d==="kcal"?5e3:500)}))};return R.jsxs("div",{className:"fixed inset-0 z-[70]",children:[R.jsx("button",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>e(!1),"aria-label":"关闭零食加餐"}),R.jsxs("aside",{className:"absolute inset-y-0 right-0 flex w-[min(430px,94vw)] flex-col border-l border-white/10 bg-[#111311] shadow-2xl",children:[R.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 p-4",children:[R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx("img",{src:Xd("snack-scanner.jpg"),alt:"",className:"h-12 w-12 rounded-lg object-cover"}),R.jsxs("div",{children:[R.jsx("div",{className:"font-display text-xl text-white",children:"零食加餐"}),R.jsx("div",{className:"text-[10px] uppercase tracking-[0.22em] text-zinc-500",children:"自己填一下也行"})]})]}),R.jsx("button",{onClick:()=>e(!1),className:"grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-400 hover:text-white","aria-label":"关闭",children:R.jsx(b0,{className:"h-4 w-4"})})]}),R.jsxs("div",{className:"flex-1 overflow-y-auto p-4",children:[R.jsx("label",{className:"text-[10px] uppercase tracking-[0.22em] text-zinc-500",children:"名称"}),R.jsx("input",{value:t.name,onChange:d=>u("name",d.target.value),className:"mt-2 h-11 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white outline-none focus:border-[#ffcf69]"}),R.jsx("div",{className:"mt-4 grid grid-cols-4 gap-2",children:[["kcal","热量"],["p","蛋白"],["c","碳水"],["f","脂肪"]].map(([d,h])=>R.jsx(kr,{label:h,unit:d==="kcal"?"":"g",value:t[d],onChange:m=>u(d,m)},d))}),R.jsxs("div",{className:"mt-5 rounded-lg border border-[#ffcf69]/20 bg-[#ffcf69]/10 p-4",children:[R.jsx("div",{className:"text-[10px] uppercase tracking-[0.22em] text-[#ffcf69]",children:"晚餐会跟着收口"}),R.jsxs("div",{className:"mt-2 text-sm leading-6 text-zinc-300",children:[l||"晚餐已砍到很低"," · 全天 ",Math.round(t.kcal)," kcal snack"]})]}),o&&R.jsxs("button",{onClick:()=>r({name:"手动加餐",p:0,c:0,f:0,kcal:0}),className:"mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 hover:text-[#ff8068]",children:[R.jsx(Wd,{className:"h-4 w-4"}),"清除加餐"]})]})]})]})}function ki({eyebrow:s,title:e,icon:t,children:r}){return R.jsxs("section",{className:"rounded-lg border border-white/10 bg-white/[0.055] p-4 shadow-[0_24px_80px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-5",children:[R.jsxs("div",{className:"mb-4 flex items-start justify-between gap-4",children:[R.jsxs("div",{children:[R.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#ffcf69]",children:s}),R.jsx("h2",{className:"mt-1 font-display text-2xl text-white",children:e})]}),t&&R.jsx("span",{className:"grid h-9 w-9 place-items-center rounded-lg bg-white text-zinc-950",children:R.jsx(t,{className:"h-4 w-4"})})]}),r]})}function Uf({icon:s,label:e,sub:t,onClick:r}){const o=r?"button":"div";return R.jsxs(o,{onClick:r,className:"rounded-lg border border-white/10 bg-white/[0.06] px-3 py-3 text-left backdrop-blur-xl transition hover:border-white/25",children:[R.jsx(s,{className:"mb-2 h-4 w-4 text-[#ffcf69]"}),R.jsx("div",{className:"text-sm text-white",children:e}),t&&R.jsx("div",{className:"mt-0.5 text-[10px] uppercase tracking-[0.18em] text-zinc-500",children:t})]})}function jl({label:s,value:e,target:t,unit:r}){const o=e-t,l=Math.abs(o)<=(r?Math.max(8,t*.08):Math.max(80,t*.05));return R.jsxs("div",{className:"rounded-lg bg-white/10 p-2 backdrop-blur",children:[R.jsx("div",{className:"text-[10px] uppercase tracking-[0.16em] text-zinc-400",children:s}),R.jsx("div",{className:"mt-1 font-mono text-lg text-white",children:Math.round(e)}),R.jsxs("div",{className:`text-[10px] ${l?"text-[#a8d46f]":"text-[#ffcf69]"}`,children:[o>=0?"+":"",Math.round(o),r]})]})}function WT({value:s,onChange:e,options:t}){return R.jsx("div",{className:"grid grid-cols-2 rounded-lg bg-black/25 p-1",children:t.map(r=>R.jsx("button",{onClick:()=>e(r.value),className:`rounded-md px-3 py-2 text-sm transition ${s===r.value?"bg-white text-zinc-950":"text-zinc-400 hover:text-white"}`,children:r.label},r.value))})}function ac({active:s,onClick:e,children:t}){return R.jsx("button",{onClick:e,className:`rounded-lg border px-3 py-2 text-xs transition ${s?"border-[#ffcf69] bg-[#ffcf69]/15 text-[#ffcf69]":"border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/25 hover:text-white"}`,children:t})}function us({title:s,children:e}){return R.jsxs("div",{children:[R.jsx("div",{className:"mb-2 text-[10px] uppercase tracking-[0.24em] text-zinc-500",children:s}),e]})}function oc({active:s,onClick:e,title:t,meta:r,tone:o="gold"}){const l=o==="green"?"#a8d46f":o==="amber"?"#ffb55c":"#ffcf69";return R.jsxs("button",{onClick:e,className:"rounded-lg border p-3 text-left transition hover:-translate-y-0.5",style:{borderColor:s?l:"rgba(255,255,255,0.10)",background:s?`${l}1f`:"rgba(255,255,255,0.045)"},children:[R.jsx("div",{className:"font-cjk text-sm font-semibold text-white",children:t}),R.jsx("div",{className:"mt-1 text-[10px] text-zinc-500",children:r})]})}function jT({open:s,onToggle:e,title:t,subtitle:r,children:o}){return R.jsxs("section",{className:"rounded-lg border border-white/10 bg-white/[0.045] backdrop-blur-xl",children:[R.jsxs("button",{onClick:e,className:"flex w-full items-center justify-between gap-3 p-4 text-left",children:[R.jsxs("span",{children:[R.jsxs("span",{className:"flex items-center gap-2 font-display text-2xl text-white",children:[R.jsx(vT,{className:"h-4 w-4 text-[#ffcf69]"}),t]}),R.jsx("span",{className:"mt-1 block text-xs text-zinc-500",children:r})]}),R.jsx(sT,{className:`h-5 w-5 text-zinc-500 transition ${s?"rotate-180":""}`})]}),s&&R.jsx("div",{className:"border-t border-white/10 p-4",children:o})]})}function lc({label:s,meta:e,value:t,unit:r,step:o,max:l,onChange:u}){return R.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-black/20 p-3",children:[R.jsxs("div",{className:"min-w-0",children:[R.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-white",children:s}),R.jsx("div",{className:"mt-1 truncate text-[10px] text-zinc-500",children:e})]}),R.jsxs("div",{className:"flex items-center gap-1",children:[R.jsx(cc,{label:`减少${s}`,onClick:()=>u(t-o),icon:E0}),R.jsxs("span",{className:"w-14 text-center font-mono text-sm text-white",children:[yn(t),t>0&&r==="g"?"g":""]}),R.jsx(cc,{label:`增加${s}`,onClick:()=>u(Math.min(l,t+o)),icon:T0})]})]})}function XT({value:s,onChange:e}){return R.jsxs("div",{className:"flex items-center gap-1",children:[R.jsx(cc,{label:"减少",onClick:()=>e(s-1),icon:E0}),R.jsx("span",{className:"w-7 text-center font-mono text-sm text-white",children:s}),R.jsx(cc,{label:"增加",onClick:()=>e(s+1),icon:T0})]})}function cc({label:s,onClick:e,icon:t}){return R.jsx("button",{onClick:e,"aria-label":s,className:"grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-400 transition hover:border-[#ffcf69]/60 hover:text-[#ffcf69]",children:R.jsx(t,{className:"h-4 w-4"})})}function kr({label:s,unit:e,value:t,onChange:r}){return R.jsxs("label",{className:"block rounded-lg border border-white/10 bg-black/20 p-3",children:[R.jsx("span",{className:"block text-[10px] uppercase tracking-[0.18em] text-zinc-500",children:s}),R.jsxs("span",{className:"mt-1 flex items-baseline gap-1",children:[R.jsx("input",{type:"number",value:yn(t,1),onChange:o=>r(o.target.value),className:"min-w-0 flex-1 bg-transparent font-mono text-lg text-white outline-none"}),R.jsx("span",{className:"text-[10px] text-zinc-500",children:e})]})]})}function qT({item:s,index:e}){const r={red:"#ff8068",amber:"#ffb55c",gold:"#ffcf69",green:"#a8d46f"}[s.tone]||"#ffffff";return R.jsxs("div",{className:"grid grid-cols-[38px_1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-3",children:[R.jsx("span",{className:"grid h-9 w-9 place-items-center rounded-lg font-mono text-xs text-zinc-950",style:{backgroundColor:r},children:String(e+1).padStart(2,"0")}),R.jsxs("div",{className:"min-w-0",children:[R.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-white",children:s.name}),R.jsxs("div",{className:"mt-1 text-[10px] text-zinc-500",children:["P",yn(s.macro.p)," · C",yn(s.macro.c)," · F",yn(s.macro.f)]})]}),R.jsxs("div",{className:"text-right",children:[R.jsx("div",{className:"font-display text-2xl leading-none text-white",children:yn(s.qty)}),R.jsx("div",{className:"mt-1 text-[10px] uppercase tracking-[0.16em] text-zinc-500",children:s.unit})]})]})}function Xl({label:s,value:e,target:t,unit:r,color:o}){const l=Math.min(135,e/Math.max(1,t)*100),u=Math.round(e-t);return R.jsxs("div",{children:[R.jsxs("div",{className:"mb-2 flex items-center justify-between gap-3",children:[R.jsx("span",{className:"text-sm text-zinc-300",children:s}),R.jsxs("span",{className:"font-mono text-xs text-zinc-500",children:[Math.round(e)," / ",t," ",r]})]}),R.jsx("div",{className:"relative h-2 overflow-hidden rounded-full bg-white/10",children:R.jsx("div",{className:"h-full rounded-full transition-all duration-700",style:{width:`${l}%`,backgroundColor:o}})}),R.jsxs("div",{className:"mt-1 text-right text-[10px] text-zinc-500",children:[u>=0?"+":"",u,r]})]})}function io({label:s,macro:e,strong:t}){return R.jsxs("div",{className:`grid grid-cols-[1fr_auto] items-center gap-3 border-t border-white/10 py-3 first:border-t-0 ${t?"text-white":"text-zinc-300"}`,children:[R.jsx("div",{className:"font-cjk text-sm",children:s}),R.jsxs("div",{className:"font-mono text-xs text-zinc-500",children:["P",yn(e.p)," C",yn(e.c)," F",yn(e.f)," · ",Math.round(fa(e))," kcal"]})]})}function Ff({label:s,value:e,hot:t}){return R.jsxs("div",{className:`rounded-lg border p-3 ${t?"border-[#ff8068]/30 bg-[#ff8068]/10":"border-white/10 bg-black/20"}`,children:[R.jsx("div",{className:"text-[10px] text-zinc-500",children:s}),R.jsx("div",{className:`mt-1 font-mono text-lg ${t?"text-[#ff8068]":"text-white"}`,children:e})]})}Tx.createRoot(document.getElementById("root")).render(R.jsx(_x.StrictMode,{children:R.jsx(FT,{})}));
