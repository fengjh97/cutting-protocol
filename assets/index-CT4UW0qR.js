(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function zg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Yu={exports:{}},eo={},Ku={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm;function g_(){if(Tm)return vt;Tm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function g(k){return k===null||typeof k!="object"?null:(k=S&&k[S]||k["@@iterator"],typeof k=="function"?k:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function v(k,ee,Ue){this.props=k,this.context=ee,this.refs=R,this.updater=Ue||y}v.prototype.isReactComponent={},v.prototype.setState=function(k,ee){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ee,"setState")},v.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function x(){}x.prototype=v.prototype;function C(k,ee,Ue){this.props=k,this.context=ee,this.refs=R,this.updater=Ue||y}var N=C.prototype=new x;N.constructor=C,w(N,v.prototype),N.isPureReactComponent=!0;var L=Array.isArray,B=Object.prototype.hasOwnProperty,D={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function E(k,ee,Ue){var Be,Ie={},re=null,Se=null;if(ee!=null)for(Be in ee.ref!==void 0&&(Se=ee.ref),ee.key!==void 0&&(re=""+ee.key),ee)B.call(ee,Be)&&!O.hasOwnProperty(Be)&&(Ie[Be]=ee[Be]);var ge=arguments.length-2;if(ge===1)Ie.children=Ue;else if(1<ge){for(var Fe=Array(ge),Ze=0;Ze<ge;Ze++)Fe[Ze]=arguments[Ze+2];Ie.children=Fe}if(k&&k.defaultProps)for(Be in ge=k.defaultProps,ge)Ie[Be]===void 0&&(Ie[Be]=ge[Be]);return{$$typeof:s,type:k,key:re,ref:Se,props:Ie,_owner:D.current}}function U(k,ee){return{$$typeof:s,type:k.type,key:ee,ref:k.ref,props:k.props,_owner:k._owner}}function X(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function I(k){var ee={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Ue){return ee[Ue]})}var H=/\/+/g;function se(k,ee){return typeof k=="object"&&k!==null&&k.key!=null?I(""+k.key):ee.toString(36)}function oe(k,ee,Ue,Be,Ie){var re=typeof k;(re==="undefined"||re==="boolean")&&(k=null);var Se=!1;if(k===null)Se=!0;else switch(re){case"string":case"number":Se=!0;break;case"object":switch(k.$$typeof){case s:case e:Se=!0}}if(Se)return Se=k,Ie=Ie(Se),k=Be===""?"."+se(Se,0):Be,L(Ie)?(Ue="",k!=null&&(Ue=k.replace(H,"$&/")+"/"),oe(Ie,ee,Ue,"",function(Ze){return Ze})):Ie!=null&&(X(Ie)&&(Ie=U(Ie,Ue+(!Ie.key||Se&&Se.key===Ie.key?"":(""+Ie.key).replace(H,"$&/")+"/")+k)),ee.push(Ie)),1;if(Se=0,Be=Be===""?".":Be+":",L(k))for(var ge=0;ge<k.length;ge++){re=k[ge];var Fe=Be+se(re,ge);Se+=oe(re,ee,Ue,Fe,Ie)}else if(Fe=g(k),typeof Fe=="function")for(k=Fe.call(k),ge=0;!(re=k.next()).done;)re=re.value,Fe=Be+se(re,ge++),Se+=oe(re,ee,Ue,Fe,Ie);else if(re==="object")throw ee=String(k),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return Se}function W(k,ee,Ue){if(k==null)return k;var Be=[],Ie=0;return oe(k,Be,"","",function(re){return ee.call(Ue,re,Ie++)}),Be}function Z(k){if(k._status===-1){var ee=k._result;ee=ee(),ee.then(function(Ue){(k._status===0||k._status===-1)&&(k._status=1,k._result=Ue)},function(Ue){(k._status===0||k._status===-1)&&(k._status=2,k._result=Ue)}),k._status===-1&&(k._status=0,k._result=ee)}if(k._status===1)return k._result.default;throw k._result}var q={current:null},Y={transition:null},ce={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:Y,ReactCurrentOwner:D};function ue(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:W,forEach:function(k,ee,Ue){W(k,function(){ee.apply(this,arguments)},Ue)},count:function(k){var ee=0;return W(k,function(){ee++}),ee},toArray:function(k){return W(k,function(ee){return ee})||[]},only:function(k){if(!X(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},vt.Component=v,vt.Fragment=t,vt.Profiler=o,vt.PureComponent=C,vt.StrictMode=r,vt.Suspense=h,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,vt.act=ue,vt.cloneElement=function(k,ee,Ue){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Be=w({},k.props),Ie=k.key,re=k.ref,Se=k._owner;if(ee!=null){if(ee.ref!==void 0&&(re=ee.ref,Se=D.current),ee.key!==void 0&&(Ie=""+ee.key),k.type&&k.type.defaultProps)var ge=k.type.defaultProps;for(Fe in ee)B.call(ee,Fe)&&!O.hasOwnProperty(Fe)&&(Be[Fe]=ee[Fe]===void 0&&ge!==void 0?ge[Fe]:ee[Fe])}var Fe=arguments.length-2;if(Fe===1)Be.children=Ue;else if(1<Fe){ge=Array(Fe);for(var Ze=0;Ze<Fe;Ze++)ge[Ze]=arguments[Ze+2];Be.children=ge}return{$$typeof:s,type:k.type,key:Ie,ref:re,props:Be,_owner:Se}},vt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},vt.createElement=E,vt.createFactory=function(k){var ee=E.bind(null,k);return ee.type=k,ee},vt.createRef=function(){return{current:null}},vt.forwardRef=function(k){return{$$typeof:f,render:k}},vt.isValidElement=X,vt.lazy=function(k){return{$$typeof:_,_payload:{_status:-1,_result:k},_init:Z}},vt.memo=function(k,ee){return{$$typeof:p,type:k,compare:ee===void 0?null:ee}},vt.startTransition=function(k){var ee=Y.transition;Y.transition={};try{k()}finally{Y.transition=ee}},vt.unstable_act=ue,vt.useCallback=function(k,ee){return q.current.useCallback(k,ee)},vt.useContext=function(k){return q.current.useContext(k)},vt.useDebugValue=function(){},vt.useDeferredValue=function(k){return q.current.useDeferredValue(k)},vt.useEffect=function(k,ee){return q.current.useEffect(k,ee)},vt.useId=function(){return q.current.useId()},vt.useImperativeHandle=function(k,ee,Ue){return q.current.useImperativeHandle(k,ee,Ue)},vt.useInsertionEffect=function(k,ee){return q.current.useInsertionEffect(k,ee)},vt.useLayoutEffect=function(k,ee){return q.current.useLayoutEffect(k,ee)},vt.useMemo=function(k,ee){return q.current.useMemo(k,ee)},vt.useReducer=function(k,ee,Ue){return q.current.useReducer(k,ee,Ue)},vt.useRef=function(k){return q.current.useRef(k)},vt.useState=function(k){return q.current.useState(k)},vt.useSyncExternalStore=function(k,ee,Ue){return q.current.useSyncExternalStore(k,ee,Ue)},vt.useTransition=function(){return q.current.useTransition()},vt.version="18.3.1",vt}var wm;function Df(){return wm||(wm=1,Ku.exports=g_()),Ku.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function x_(){if(bm)return eo;bm=1;var s=Df(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var _,S={},g=null,y=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(y=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(S[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)S[_]===void 0&&(S[_]=h[_]);return{$$typeof:e,type:f,key:g,ref:y,props:S,_owner:o.current}}return eo.Fragment=t,eo.jsx=u,eo.jsxs=u,eo}var Am;function __(){return Am||(Am=1,Yu.exports=x_()),Yu.exports}var b=__(),mt=Df();const v_=zg(mt);var yl={},Zu={exports:{}},Wn={},Qu={exports:{}},Ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function S_(){return Cm||(Cm=1,(function(s){function e(Y,ce){var ue=Y.length;Y.push(ce);e:for(;0<ue;){var k=ue-1>>>1,ee=Y[k];if(0<o(ee,ce))Y[k]=ce,Y[ue]=ee,ue=k;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var ce=Y[0],ue=Y.pop();if(ue!==ce){Y[0]=ue;e:for(var k=0,ee=Y.length,Ue=ee>>>1;k<Ue;){var Be=2*(k+1)-1,Ie=Y[Be],re=Be+1,Se=Y[re];if(0>o(Ie,ue))re<ee&&0>o(Se,Ie)?(Y[k]=Se,Y[re]=ue,k=re):(Y[k]=Ie,Y[Be]=ue,k=Be);else if(re<ee&&0>o(Se,ue))Y[k]=Se,Y[re]=ue,k=re;else break e}}return ce}function o(Y,ce){var ue=Y.sortIndex-ce.sortIndex;return ue!==0?ue:Y.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],_=1,S=null,g=3,y=!1,w=!1,R=!1,v=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(Y){for(var ce=t(p);ce!==null;){if(ce.callback===null)r(p);else if(ce.startTime<=Y)r(p),ce.sortIndex=ce.expirationTime,e(h,ce);else break;ce=t(p)}}function L(Y){if(R=!1,N(Y),!w)if(t(h)!==null)w=!0,Z(B);else{var ce=t(p);ce!==null&&q(L,ce.startTime-Y)}}function B(Y,ce){w=!1,R&&(R=!1,x(E),E=-1),y=!0;var ue=g;try{for(N(ce),S=t(h);S!==null&&(!(S.expirationTime>ce)||Y&&!I());){var k=S.callback;if(typeof k=="function"){S.callback=null,g=S.priorityLevel;var ee=k(S.expirationTime<=ce);ce=s.unstable_now(),typeof ee=="function"?S.callback=ee:S===t(h)&&r(h),N(ce)}else r(h);S=t(h)}if(S!==null)var Ue=!0;else{var Be=t(p);Be!==null&&q(L,Be.startTime-ce),Ue=!1}return Ue}finally{S=null,g=ue,y=!1}}var D=!1,O=null,E=-1,U=5,X=-1;function I(){return!(s.unstable_now()-X<U)}function H(){if(O!==null){var Y=s.unstable_now();X=Y;var ce=!0;try{ce=O(!0,Y)}finally{ce?se():(D=!1,O=null)}}else D=!1}var se;if(typeof C=="function")se=function(){C(H)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,W=oe.port2;oe.port1.onmessage=H,se=function(){W.postMessage(null)}}else se=function(){v(H,0)};function Z(Y){O=Y,D||(D=!0,se())}function q(Y,ce){E=v(function(){Y(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){w||y||(w=!0,Z(B))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var ce=3;break;default:ce=g}var ue=g;g=ce;try{return Y()}finally{g=ue}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,ce){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ue=g;g=Y;try{return ce()}finally{g=ue}},s.unstable_scheduleCallback=function(Y,ce,ue){var k=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?k+ue:k):ue=k,Y){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=ue+ee,Y={id:_++,callback:ce,priorityLevel:Y,startTime:ue,expirationTime:ee,sortIndex:-1},ue>k?(Y.sortIndex=ue,e(p,Y),t(h)===null&&Y===t(p)&&(R?(x(E),E=-1):R=!0,q(L,ue-k))):(Y.sortIndex=ee,e(h,Y),w||y||(w=!0,Z(B))),Y},s.unstable_shouldYield=I,s.unstable_wrapCallback=function(Y){var ce=g;return function(){var ue=g;g=ce;try{return Y.apply(this,arguments)}finally{g=ue}}}})(Ju)),Ju}var Rm;function y_(){return Rm||(Rm=1,Qu.exports=S_()),Qu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function M_(){if(Pm)return Wn;Pm=1;var s=Df(),e=y_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},S={};function g(n){return h.call(S,n)?!0:h.call(_,n)?!1:p.test(n)?S[n]=!0:(_[n]=!0,!1)}function y(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||y(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,c,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,C);v[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,C);v[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,C);v[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,i,a,c){var d=v.hasOwnProperty(i)?v[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),D=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),I=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),Y=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Object.assign,k;function ee(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var Ue=!1;function Be(n,i){if(!n||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var c=le}Reflect.construct(n,[],i)}else{try{i.call()}catch(le){c=le}n.call(i.prototype)}else{try{throw Error()}catch(le){c=le}n()}}catch(le){if(le&&c&&typeof le.stack=="string"){for(var d=le.stack.split(`
`),m=c.stack.split(`
`),T=d.length-1,F=m.length-1;1<=T&&0<=F&&d[T]!==m[F];)F--;for(;1<=T&&0<=F;T--,F--)if(d[T]!==m[F]){if(T!==1||F!==1)do if(T--,F--,0>F||d[T]!==m[F]){var G=`
`+d[T].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=T&&0<=F);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ee(n):""}function Ie(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=Be(n.type,!1),n;case 11:return n=Be(n.type.render,!1),n;case 1:return n=Be(n.type,!0),n;default:return""}}function re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case D:return"Portal";case U:return"Profiler";case E:return"StrictMode";case se:return"Suspense";case oe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case I:return(n.displayName||"Context")+".Consumer";case X:return(n._context.displayName||"Context")+".Provider";case H:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return i=n.displayName||null,i!==null?i:re(n.type)||"Memo";case Z:i=n._payload,n=n._init;try{return re(n(i))}catch{}}return null}function Se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=Fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ye(n){n._valueTracker||(n._valueTracker=Ze(n))}function kt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Et(n,i){var a=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function wt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ge(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function at(n,i){i=i.checked,i!=null&&N(n,"checked",i,!1)}function Vt(n,i){at(n,i);var a=ge(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ln(n,i.type,a):i.hasOwnProperty("defaultValue")&&ln(n,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Bt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ln(n,i,a){(i!=="number"||ut(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var z=Array.isArray;function It(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ge(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function ht(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Nt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(z(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ge(a)}}function De(n,i){var a=ge(i.value),c=ge(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function zt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function P(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?P(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var K,me=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function fe(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var xe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Me=["Webkit","ms","Moz","O"];Object.keys(xe).forEach(function(n){Me.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),xe[i]=xe[n]})});function de(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||xe.hasOwnProperty(n)&&xe[n]?(""+i).trim():i+"px"}function pe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=de(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Le=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pe(n,i){if(i){if(Le[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function be(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Te=null;function nt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rt=null,pt=null,V=null;function we(n){if(n=Ba(n)){if(typeof rt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Fo(i),rt(n.stateNode,n.type,i))}}function he(n){pt?V?V.push(n):V=[n]:pt=n}function Oe(){if(pt){var n=pt,i=V;if(V=pt=null,we(n),i)for(n=0;n<i.length;n++)we(i[n])}}function Ce(n,i){return n(i)}function _e(){}var We=!1;function Je(n,i,a){if(We)return n(i,a);We=!0;try{return Ce(n,i,a)}finally{We=!1,(pt!==null||V!==null)&&(_e(),Oe())}}function Lt(n,i){var a=n.stateNode;if(a===null)return null;var c=Fo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var yt=!1;if(f)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){yt=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{yt=!1}function Un(n,i,a,c,d,m,T,F,G){var le=Array.prototype.slice.call(arguments,3);try{i.apply(a,le)}catch(ye){this.onError(ye)}}var $n=!1,$i=null,Pi=!1,_r=null,pi={onError:function(n){$n=!0,$i=n}};function Qr(n,i,a,c,d,m,T,F,G){$n=!1,$i=null,Un.apply(pi,arguments)}function Rs(n,i,a,c,d,m,T,F,G){if(Qr.apply(this,arguments),$n){if($n){var le=$i;$n=!1,$i=null}else throw Error(t(198));Pi||(Pi=!0,_r=le)}}function si(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Yi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function vr(n){if(si(n)!==n)throw Error(t(188))}function Ki(n){var i=n.alternate;if(!i){if(i=si(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return vr(d),n;if(m===c)return vr(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var T=!1,F=d.child;F;){if(F===a){T=!0,a=d,c=m;break}if(F===c){T=!0,c=d,a=m;break}F=F.sibling}if(!T){for(F=m.child;F;){if(F===a){T=!0,a=m,c=d;break}if(F===c){T=!0,c=m,a=d;break}F=F.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function dt(n){return n=Ki(n),n!==null?ot(n):null}function ot(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ot(n);if(i!==null)return i;n=n.sibling}return null}var Fn=e.unstable_scheduleCallback,Ni=e.unstable_cancelCallback,_c=e.unstable_shouldYield,vc=e.unstable_requestPaint,Zt=e.unstable_now,Sc=e.unstable_getCurrentPriorityLevel,Ma=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,$=e.unstable_NormalPriority,ae=e.unstable_LowPriority,ne=e.unstable_IdlePriority,te=null,Ne=null;function Ge(n){if(Ne&&typeof Ne.onCommitFiberRoot=="function")try{Ne.onCommitFiberRoot(te,n,void 0,(n.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:lt,Xe=Math.log,Qe=Math.LN2;function lt(n){return n>>>=0,n===0?32:31-(Xe(n)/Qe|0)|0}var ct=64,$e=4194304;function Tt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Gt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,T=a&268435455;if(T!==0){var F=T&~d;F!==0?c=Tt(F):(m&=T,m!==0&&(c=Tt(m)))}else T=a&~d,T!==0?c=Tt(T):m!==0&&(c=Tt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Re(i),d=1<<a,c|=n[a],i&=~d;return c}function $t(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ut(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-Re(m),F=1<<T,G=d[T];G===-1?((F&a)===0||(F&c)!==0)&&(d[T]=$t(F,i)):G<=i&&(n.expiredLanes|=F),m&=~F}}function sn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ze(){var n=ct;return ct<<=1,(ct&4194240)===0&&(ct=64),n}function _n(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function xt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Re(i),n[i]=a}function On(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Re(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function kn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Re(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var _t=0;function Zi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Dt,Wt,mi,Ft,gi,Li=!1,Jr=[],Sr=null,yr=null,Mr=null,Ea=new Map,Ta=new Map,Er=[],k0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oh(n,i){switch(n){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":Ea.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(i.pointerId)}}function wa(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ba(i),i!==null&&Wt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function B0(n,i,a,c,d){switch(i){case"focusin":return Sr=wa(Sr,n,i,a,c,d),!0;case"dragenter":return yr=wa(yr,n,i,a,c,d),!0;case"mouseover":return Mr=wa(Mr,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Ea.set(m,wa(Ea.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Ta.set(m,wa(Ta.get(m)||null,n,i,a,c,d)),!0}return!1}function lh(n){var i=es(n.target);if(i!==null){var a=si(i);if(a!==null){if(i=a.tag,i===13){if(i=Yi(a),i!==null){n.blockedOn=i,gi(n.priority,function(){mi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Mo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Mc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Te=c,a.target.dispatchEvent(c),Te=null}else return i=Ba(a),i!==null&&Wt(i),n.blockedOn=a,!1;i.shift()}return!0}function ch(n,i,a){Mo(n)&&a.delete(i)}function z0(){Li=!1,Sr!==null&&Mo(Sr)&&(Sr=null),yr!==null&&Mo(yr)&&(yr=null),Mr!==null&&Mo(Mr)&&(Mr=null),Ea.forEach(ch),Ta.forEach(ch)}function ba(n,i){n.blockedOn===i&&(n.blockedOn=null,Li||(Li=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,z0)))}function Aa(n){function i(d){return ba(d,n)}if(0<Jr.length){ba(Jr[0],n);for(var a=1;a<Jr.length;a++){var c=Jr[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Sr!==null&&ba(Sr,n),yr!==null&&ba(yr,n),Mr!==null&&ba(Mr,n),Ea.forEach(i),Ta.forEach(i),a=0;a<Er.length;a++)c=Er[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Er.length&&(a=Er[0],a.blockedOn===null);)lh(a),a.blockedOn===null&&Er.shift()}var Ps=L.ReactCurrentBatchConfig,Eo=!0;function V0(n,i,a,c){var d=_t,m=Ps.transition;Ps.transition=null;try{_t=1,yc(n,i,a,c)}finally{_t=d,Ps.transition=m}}function G0(n,i,a,c){var d=_t,m=Ps.transition;Ps.transition=null;try{_t=4,yc(n,i,a,c)}finally{_t=d,Ps.transition=m}}function yc(n,i,a,c){if(Eo){var d=Mc(n,i,a,c);if(d===null)Bc(n,i,c,To,a),oh(n,c);else if(B0(d,n,i,a,c))c.stopPropagation();else if(oh(n,c),i&4&&-1<k0.indexOf(n)){for(;d!==null;){var m=Ba(d);if(m!==null&&Dt(m),m=Mc(n,i,a,c),m===null&&Bc(n,i,c,To,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Bc(n,i,c,null,a)}}var To=null;function Mc(n,i,a,c){if(To=null,n=nt(c),n=es(n),n!==null)if(i=si(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Yi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return To=n,null}function uh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sc()){case Ma:return 1;case A:return 4;case $:case ae:return 16;case ne:return 536870912;default:return 16}default:return 16}}var Tr=null,Ec=null,wo=null;function dh(){if(wo)return wo;var n,i=Ec,a=i.length,c,d="value"in Tr?Tr.value:Tr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[m-c];c++);return wo=d.slice(n,1<c?1-c:void 0)}function bo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ao(){return!0}function fh(){return!1}function Yn(n){function i(a,c,d,m,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(a=n[F],this[F]=a?a(m):m[F]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ao:fh,this.isPropagationStopped=fh,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ao)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ao)},persist:function(){},isPersistent:Ao}),i}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tc=Yn(Ns),Ca=ue({},Ns,{view:0,detail:0}),H0=Yn(Ca),wc,bc,Ra,Co=ue({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ra&&(Ra&&n.type==="mousemove"?(wc=n.screenX-Ra.screenX,bc=n.screenY-Ra.screenY):bc=wc=0,Ra=n),wc)},movementY:function(n){return"movementY"in n?n.movementY:bc}}),hh=Yn(Co),W0=ue({},Co,{dataTransfer:0}),j0=Yn(W0),X0=ue({},Ca,{relatedTarget:0}),Ac=Yn(X0),q0=ue({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),$0=Yn(q0),Y0=ue({},Ns,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),K0=Yn(Y0),Z0=ue({},Ns,{data:0}),ph=Yn(Z0),Q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=ex[n])?!!i[n]:!1}function Cc(){return tx}var nx=ue({},Ca,{key:function(n){if(n.key){var i=Q0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=bo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?J0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(n){return n.type==="keypress"?bo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ix=Yn(nx),rx=ue({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mh=Yn(rx),sx=ue({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),ax=Yn(sx),ox=ue({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=Yn(ox),cx=ue({},Co,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=Yn(cx),dx=[9,13,27,32],Rc=f&&"CompositionEvent"in window,Pa=null;f&&"documentMode"in document&&(Pa=document.documentMode);var fx=f&&"TextEvent"in window&&!Pa,gh=f&&(!Rc||Pa&&8<Pa&&11>=Pa),xh=" ",_h=!1;function vh(n,i){switch(n){case"keyup":return dx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function hx(n,i){switch(n){case"compositionend":return Sh(i);case"keypress":return i.which!==32?null:(_h=!0,xh);case"textInput":return n=i.data,n===xh&&_h?null:n;default:return null}}function px(n,i){if(Ls)return n==="compositionend"||!Rc&&vh(n,i)?(n=dh(),wo=Ec=Tr=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return gh&&i.locale!=="ko"?null:i.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!mx[n.type]:i==="textarea"}function Mh(n,i,a,c){he(c),i=Do(i,"onChange"),0<i.length&&(a=new Tc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Na=null,La=null;function gx(n){zh(n,0)}function Ro(n){var i=Os(n);if(kt(i))return n}function xx(n,i){if(n==="change")return i}var Eh=!1;if(f){var Pc;if(f){var Nc="oninput"in document;if(!Nc){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),Nc=typeof Th.oninput=="function"}Pc=Nc}else Pc=!1;Eh=Pc&&(!document.documentMode||9<document.documentMode)}function wh(){Na&&(Na.detachEvent("onpropertychange",bh),La=Na=null)}function bh(n){if(n.propertyName==="value"&&Ro(La)){var i=[];Mh(i,La,n,nt(n)),Je(gx,i)}}function _x(n,i,a){n==="focusin"?(wh(),Na=i,La=a,Na.attachEvent("onpropertychange",bh)):n==="focusout"&&wh()}function vx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ro(La)}function Sx(n,i){if(n==="click")return Ro(i)}function yx(n,i){if(n==="input"||n==="change")return Ro(i)}function Mx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var xi=typeof Object.is=="function"?Object.is:Mx;function Da(n,i){if(xi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!xi(n[d],i[d]))return!1}return!0}function Ah(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ch(n,i){var a=Ah(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ah(a)}}function Rh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Rh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ph(){for(var n=window,i=ut();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ut(n.document)}return i}function Lc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Ex(n){var i=Ph(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Rh(a.ownerDocument.documentElement,a)){if(c!==null&&Lc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Ch(a,m);var T=Ch(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Tx=f&&"documentMode"in document&&11>=document.documentMode,Ds=null,Dc=null,Ia=null,Ic=!1;function Nh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ic||Ds==null||Ds!==ut(c)||(c=Ds,"selectionStart"in c&&Lc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ia&&Da(Ia,c)||(Ia=c,c=Do(Dc,"onSelect"),0<c.length&&(i=new Tc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ds)))}function Po(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Is={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},Uc={},Lh={};f&&(Lh=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function No(n){if(Uc[n])return Uc[n];if(!Is[n])return n;var i=Is[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Lh)return Uc[n]=i[a];return n}var Dh=No("animationend"),Ih=No("animationiteration"),Uh=No("animationstart"),Fh=No("transitionend"),Oh=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(n,i){Oh.set(n,i),l(i,[n])}for(var Fc=0;Fc<kh.length;Fc++){var Oc=kh[Fc],wx=Oc.toLowerCase(),bx=Oc[0].toUpperCase()+Oc.slice(1);wr(wx,"on"+bx)}wr(Dh,"onAnimationEnd"),wr(Ih,"onAnimationIteration"),wr(Uh,"onAnimationStart"),wr("dblclick","onDoubleClick"),wr("focusin","onFocus"),wr("focusout","onBlur"),wr(Fh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function Bh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Rs(c,i,void 0,n),n.currentTarget=null}function zh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var F=c[T],G=F.instance,le=F.currentTarget;if(F=F.listener,G!==m&&d.isPropagationStopped())break e;Bh(d,F,le),m=G}else for(T=0;T<c.length;T++){if(F=c[T],G=F.instance,le=F.currentTarget,F=F.listener,G!==m&&d.isPropagationStopped())break e;Bh(d,F,le),m=G}}}if(Pi)throw n=_r,Pi=!1,_r=null,n}function jt(n,i){var a=i[jc];a===void 0&&(a=i[jc]=new Set);var c=n+"__bubble";a.has(c)||(Vh(i,n,2,!1),a.add(c))}function kc(n,i,a){var c=0;i&&(c|=4),Vh(a,n,c,i)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function Fa(n){if(!n[Lo]){n[Lo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Ax.has(a)||kc(a,!1,n),kc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Lo]||(i[Lo]=!0,kc("selectionchange",!1,i))}}function Vh(n,i,a,c){switch(uh(i)){case 1:var d=V0;break;case 4:d=G0;break;default:d=yc}a=d.bind(null,i,a,n),d=void 0,!yt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Bc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var F=c.stateNode.containerInfo;if(F===d||F.nodeType===8&&F.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var G=T.tag;if((G===3||G===4)&&(G=T.stateNode.containerInfo,G===d||G.nodeType===8&&G.parentNode===d))return;T=T.return}for(;F!==null;){if(T=es(F),T===null)return;if(G=T.tag,G===5||G===6){c=m=T;continue e}F=F.parentNode}}c=c.return}Je(function(){var le=m,ye=nt(a),Ee=[];e:{var ve=Oh.get(n);if(ve!==void 0){var Ve=Tc,je=n;switch(n){case"keypress":if(bo(a)===0)break e;case"keydown":case"keyup":Ve=ix;break;case"focusin":je="focus",Ve=Ac;break;case"focusout":je="blur",Ve=Ac;break;case"beforeblur":case"afterblur":Ve=Ac;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=ax;break;case Dh:case Ih:case Uh:Ve=$0;break;case Fh:Ve=lx;break;case"scroll":Ve=H0;break;case"wheel":Ve=ux;break;case"copy":case"cut":case"paste":Ve=K0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=mh}var qe=(i&4)!==0,rn=!qe&&n==="scroll",J=qe?ve!==null?ve+"Capture":null:ve;qe=[];for(var j=le,ie;j!==null;){ie=j;var Ae=ie.stateNode;if(ie.tag===5&&Ae!==null&&(ie=Ae,J!==null&&(Ae=Lt(j,J),Ae!=null&&qe.push(Oa(j,Ae,ie)))),rn)break;j=j.return}0<qe.length&&(ve=new Ve(ve,je,null,a,ye),Ee.push({event:ve,listeners:qe}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",ve&&a!==Te&&(je=a.relatedTarget||a.fromElement)&&(es(je)||je[Qi]))break e;if((Ve||ve)&&(ve=ye.window===ye?ye:(ve=ye.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ve?(je=a.relatedTarget||a.toElement,Ve=le,je=je?es(je):null,je!==null&&(rn=si(je),je!==rn||je.tag!==5&&je.tag!==6)&&(je=null)):(Ve=null,je=le),Ve!==je)){if(qe=hh,Ae="onMouseLeave",J="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(qe=mh,Ae="onPointerLeave",J="onPointerEnter",j="pointer"),rn=Ve==null?ve:Os(Ve),ie=je==null?ve:Os(je),ve=new qe(Ae,j+"leave",Ve,a,ye),ve.target=rn,ve.relatedTarget=ie,Ae=null,es(ye)===le&&(qe=new qe(J,j+"enter",je,a,ye),qe.target=ie,qe.relatedTarget=rn,Ae=qe),rn=Ae,Ve&&je)t:{for(qe=Ve,J=je,j=0,ie=qe;ie;ie=Us(ie))j++;for(ie=0,Ae=J;Ae;Ae=Us(Ae))ie++;for(;0<j-ie;)qe=Us(qe),j--;for(;0<ie-j;)J=Us(J),ie--;for(;j--;){if(qe===J||J!==null&&qe===J.alternate)break t;qe=Us(qe),J=Us(J)}qe=null}else qe=null;Ve!==null&&Gh(Ee,ve,Ve,qe,!1),je!==null&&rn!==null&&Gh(Ee,rn,je,qe,!0)}}e:{if(ve=le?Os(le):window,Ve=ve.nodeName&&ve.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&ve.type==="file")var Ke=xx;else if(yh(ve))if(Eh)Ke=yx;else{Ke=vx;var et=_x}else(Ve=ve.nodeName)&&Ve.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ke=Sx);if(Ke&&(Ke=Ke(n,le))){Mh(Ee,Ke,a,ye);break e}et&&et(n,ve,le),n==="focusout"&&(et=ve._wrapperState)&&et.controlled&&ve.type==="number"&&ln(ve,"number",ve.value)}switch(et=le?Os(le):window,n){case"focusin":(yh(et)||et.contentEditable==="true")&&(Ds=et,Dc=le,Ia=null);break;case"focusout":Ia=Dc=Ds=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,Nh(Ee,a,ye);break;case"selectionchange":if(Tx)break;case"keydown":case"keyup":Nh(Ee,a,ye)}var tt;if(Rc)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else Ls?vh(n,a)&&(st="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(gh&&a.locale!=="ko"&&(Ls||st!=="onCompositionStart"?st==="onCompositionEnd"&&Ls&&(tt=dh()):(Tr=ye,Ec="value"in Tr?Tr.value:Tr.textContent,Ls=!0)),et=Do(le,st),0<et.length&&(st=new ph(st,n,null,a,ye),Ee.push({event:st,listeners:et}),tt?st.data=tt:(tt=Sh(a),tt!==null&&(st.data=tt)))),(tt=fx?hx(n,a):px(n,a))&&(le=Do(le,"onBeforeInput"),0<le.length&&(ye=new ph("onBeforeInput","beforeinput",null,a,ye),Ee.push({event:ye,listeners:le}),ye.data=tt))}zh(Ee,i)})}function Oa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Do(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Lt(n,a),m!=null&&c.unshift(Oa(n,m,d)),m=Lt(n,i),m!=null&&c.push(Oa(n,m,d))),n=n.return}return c}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Gh(n,i,a,c,d){for(var m=i._reactName,T=[];a!==null&&a!==c;){var F=a,G=F.alternate,le=F.stateNode;if(G!==null&&G===c)break;F.tag===5&&le!==null&&(F=le,d?(G=Lt(a,m),G!=null&&T.unshift(Oa(a,G,F))):d||(G=Lt(a,m),G!=null&&T.push(Oa(a,G,F)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var Cx=/\r\n?/g,Rx=/\u0000|\uFFFD/g;function Hh(n){return(typeof n=="string"?n:""+n).replace(Cx,`
`).replace(Rx,"")}function Io(n,i,a){if(i=Hh(i),Hh(n)!==i&&a)throw Error(t(425))}function Uo(){}var zc=null,Vc=null;function Gc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Hc=typeof setTimeout=="function"?setTimeout:void 0,Px=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,Nx=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(n){return Wh.resolve(null).then(n).catch(Lx)}:Hc;function Lx(n){setTimeout(function(){throw n})}function Wc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Aa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Aa(i)}function br(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function jh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Di="__reactFiber$"+Fs,ka="__reactProps$"+Fs,Qi="__reactContainer$"+Fs,jc="__reactEvents$"+Fs,Dx="__reactListeners$"+Fs,Ix="__reactHandles$"+Fs;function es(n){var i=n[Di];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Qi]||a[Di]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=jh(n);n!==null;){if(a=n[Di])return a;n=jh(n)}return i}n=a,a=n.parentNode}return null}function Ba(n){return n=n[Di]||n[Qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Os(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Fo(n){return n[ka]||null}var Xc=[],ks=-1;function Ar(n){return{current:n}}function Xt(n){0>ks||(n.current=Xc[ks],Xc[ks]=null,ks--)}function Ht(n,i){ks++,Xc[ks]=n.current,n.current=i}var Cr={},En=Ar(Cr),Bn=Ar(!1),ts=Cr;function Bs(n,i){var a=n.type.contextTypes;if(!a)return Cr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function zn(n){return n=n.childContextTypes,n!=null}function Oo(){Xt(Bn),Xt(En)}function Xh(n,i,a){if(En.current!==Cr)throw Error(t(168));Ht(En,i),Ht(Bn,a)}function qh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Se(n)||"Unknown",d));return ue({},a,c)}function ko(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Cr,ts=En.current,Ht(En,n),Ht(Bn,Bn.current),!0}function $h(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=qh(n,i,ts),c.__reactInternalMemoizedMergedChildContext=n,Xt(Bn),Xt(En),Ht(En,n)):Xt(Bn),Ht(Bn,a)}var Ji=null,Bo=!1,qc=!1;function Yh(n){Ji===null?Ji=[n]:Ji.push(n)}function Ux(n){Bo=!0,Yh(n)}function Rr(){if(!qc&&Ji!==null){qc=!0;var n=0,i=_t;try{var a=Ji;for(_t=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ji=null,Bo=!1}catch(d){throw Ji!==null&&(Ji=Ji.slice(n+1)),Fn(Ma,Rr),d}finally{_t=i,qc=!1}}return null}var zs=[],Vs=0,zo=null,Vo=0,ai=[],oi=0,ns=null,er=1,tr="";function is(n,i){zs[Vs++]=Vo,zs[Vs++]=zo,zo=n,Vo=i}function Kh(n,i,a){ai[oi++]=er,ai[oi++]=tr,ai[oi++]=ns,ns=n;var c=er;n=tr;var d=32-Re(c)-1;c&=~(1<<d),a+=1;var m=32-Re(i)+d;if(30<m){var T=d-d%5;m=(c&(1<<T)-1).toString(32),c>>=T,d-=T,er=1<<32-Re(i)+d|a<<d|c,tr=m+n}else er=1<<m|a<<d|c,tr=n}function $c(n){n.return!==null&&(is(n,1),Kh(n,1,0))}function Yc(n){for(;n===zo;)zo=zs[--Vs],zs[Vs]=null,Vo=zs[--Vs],zs[Vs]=null;for(;n===ns;)ns=ai[--oi],ai[oi]=null,tr=ai[--oi],ai[oi]=null,er=ai[--oi],ai[oi]=null}var Kn=null,Zn=null,Yt=!1,_i=null;function Zh(n,i){var a=di(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Qh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Kn=n,Zn=br(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Kn=n,Zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ns!==null?{id:er,overflow:tr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=di(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Kn=n,Zn=null,!0):!1;default:return!1}}function Kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Zc(n){if(Yt){var i=Zn;if(i){var a=i;if(!Qh(n,i)){if(Kc(n))throw Error(t(418));i=br(a.nextSibling);var c=Kn;i&&Qh(n,i)?Zh(c,a):(n.flags=n.flags&-4097|2,Yt=!1,Kn=n)}}else{if(Kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,Kn=n}}}function Jh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kn=n}function Go(n){if(n!==Kn)return!1;if(!Yt)return Jh(n),Yt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Gc(n.type,n.memoizedProps)),i&&(i=Zn)){if(Kc(n))throw ep(),Error(t(418));for(;i;)Zh(n,i),i=br(i.nextSibling)}if(Jh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Zn=br(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Zn=null}}else Zn=Kn?br(n.stateNode.nextSibling):null;return!0}function ep(){for(var n=Zn;n;)n=br(n.nextSibling)}function Gs(){Zn=Kn=null,Yt=!1}function Qc(n){_i===null?_i=[n]:_i.push(n)}var Fx=L.ReactCurrentBatchConfig;function za(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var F=d.refs;T===null?delete F[m]:F[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ho(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function tp(n){var i=n._init;return i(n._payload)}function np(n){function i(J,j){if(n){var ie=J.deletions;ie===null?(J.deletions=[j],J.flags|=16):ie.push(j)}}function a(J,j){if(!n)return null;for(;j!==null;)i(J,j),j=j.sibling;return null}function c(J,j){for(J=new Map;j!==null;)j.key!==null?J.set(j.key,j):J.set(j.index,j),j=j.sibling;return J}function d(J,j){return J=Or(J,j),J.index=0,J.sibling=null,J}function m(J,j,ie){return J.index=ie,n?(ie=J.alternate,ie!==null?(ie=ie.index,ie<j?(J.flags|=2,j):ie):(J.flags|=2,j)):(J.flags|=1048576,j)}function T(J){return n&&J.alternate===null&&(J.flags|=2),J}function F(J,j,ie,Ae){return j===null||j.tag!==6?(j=Hu(ie,J.mode,Ae),j.return=J,j):(j=d(j,ie),j.return=J,j)}function G(J,j,ie,Ae){var Ke=ie.type;return Ke===O?ye(J,j,ie.props.children,Ae,ie.key):j!==null&&(j.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Z&&tp(Ke)===j.type)?(Ae=d(j,ie.props),Ae.ref=za(J,j,ie),Ae.return=J,Ae):(Ae=hl(ie.type,ie.key,ie.props,null,J.mode,Ae),Ae.ref=za(J,j,ie),Ae.return=J,Ae)}function le(J,j,ie,Ae){return j===null||j.tag!==4||j.stateNode.containerInfo!==ie.containerInfo||j.stateNode.implementation!==ie.implementation?(j=Wu(ie,J.mode,Ae),j.return=J,j):(j=d(j,ie.children||[]),j.return=J,j)}function ye(J,j,ie,Ae,Ke){return j===null||j.tag!==7?(j=ds(ie,J.mode,Ae,Ke),j.return=J,j):(j=d(j,ie),j.return=J,j)}function Ee(J,j,ie){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Hu(""+j,J.mode,ie),j.return=J,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case B:return ie=hl(j.type,j.key,j.props,null,J.mode,ie),ie.ref=za(J,null,j),ie.return=J,ie;case D:return j=Wu(j,J.mode,ie),j.return=J,j;case Z:var Ae=j._init;return Ee(J,Ae(j._payload),ie)}if(z(j)||ce(j))return j=ds(j,J.mode,ie,null),j.return=J,j;Ho(J,j)}return null}function ve(J,j,ie,Ae){var Ke=j!==null?j.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Ke!==null?null:F(J,j,""+ie,Ae);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case B:return ie.key===Ke?G(J,j,ie,Ae):null;case D:return ie.key===Ke?le(J,j,ie,Ae):null;case Z:return Ke=ie._init,ve(J,j,Ke(ie._payload),Ae)}if(z(ie)||ce(ie))return Ke!==null?null:ye(J,j,ie,Ae,null);Ho(J,ie)}return null}function Ve(J,j,ie,Ae,Ke){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return J=J.get(ie)||null,F(j,J,""+Ae,Ke);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case B:return J=J.get(Ae.key===null?ie:Ae.key)||null,G(j,J,Ae,Ke);case D:return J=J.get(Ae.key===null?ie:Ae.key)||null,le(j,J,Ae,Ke);case Z:var et=Ae._init;return Ve(J,j,ie,et(Ae._payload),Ke)}if(z(Ae)||ce(Ae))return J=J.get(ie)||null,ye(j,J,Ae,Ke,null);Ho(j,Ae)}return null}function je(J,j,ie,Ae){for(var Ke=null,et=null,tt=j,st=j=0,mn=null;tt!==null&&st<ie.length;st++){tt.index>st?(mn=tt,tt=null):mn=tt.sibling;var Pt=ve(J,tt,ie[st],Ae);if(Pt===null){tt===null&&(tt=mn);break}n&&tt&&Pt.alternate===null&&i(J,tt),j=m(Pt,j,st),et===null?Ke=Pt:et.sibling=Pt,et=Pt,tt=mn}if(st===ie.length)return a(J,tt),Yt&&is(J,st),Ke;if(tt===null){for(;st<ie.length;st++)tt=Ee(J,ie[st],Ae),tt!==null&&(j=m(tt,j,st),et===null?Ke=tt:et.sibling=tt,et=tt);return Yt&&is(J,st),Ke}for(tt=c(J,tt);st<ie.length;st++)mn=Ve(tt,J,st,ie[st],Ae),mn!==null&&(n&&mn.alternate!==null&&tt.delete(mn.key===null?st:mn.key),j=m(mn,j,st),et===null?Ke=mn:et.sibling=mn,et=mn);return n&&tt.forEach(function(kr){return i(J,kr)}),Yt&&is(J,st),Ke}function qe(J,j,ie,Ae){var Ke=ce(ie);if(typeof Ke!="function")throw Error(t(150));if(ie=Ke.call(ie),ie==null)throw Error(t(151));for(var et=Ke=null,tt=j,st=j=0,mn=null,Pt=ie.next();tt!==null&&!Pt.done;st++,Pt=ie.next()){tt.index>st?(mn=tt,tt=null):mn=tt.sibling;var kr=ve(J,tt,Pt.value,Ae);if(kr===null){tt===null&&(tt=mn);break}n&&tt&&kr.alternate===null&&i(J,tt),j=m(kr,j,st),et===null?Ke=kr:et.sibling=kr,et=kr,tt=mn}if(Pt.done)return a(J,tt),Yt&&is(J,st),Ke;if(tt===null){for(;!Pt.done;st++,Pt=ie.next())Pt=Ee(J,Pt.value,Ae),Pt!==null&&(j=m(Pt,j,st),et===null?Ke=Pt:et.sibling=Pt,et=Pt);return Yt&&is(J,st),Ke}for(tt=c(J,tt);!Pt.done;st++,Pt=ie.next())Pt=Ve(tt,J,st,Pt.value,Ae),Pt!==null&&(n&&Pt.alternate!==null&&tt.delete(Pt.key===null?st:Pt.key),j=m(Pt,j,st),et===null?Ke=Pt:et.sibling=Pt,et=Pt);return n&&tt.forEach(function(m_){return i(J,m_)}),Yt&&is(J,st),Ke}function rn(J,j,ie,Ae){if(typeof ie=="object"&&ie!==null&&ie.type===O&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case B:e:{for(var Ke=ie.key,et=j;et!==null;){if(et.key===Ke){if(Ke=ie.type,Ke===O){if(et.tag===7){a(J,et.sibling),j=d(et,ie.props.children),j.return=J,J=j;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Z&&tp(Ke)===et.type){a(J,et.sibling),j=d(et,ie.props),j.ref=za(J,et,ie),j.return=J,J=j;break e}a(J,et);break}else i(J,et);et=et.sibling}ie.type===O?(j=ds(ie.props.children,J.mode,Ae,ie.key),j.return=J,J=j):(Ae=hl(ie.type,ie.key,ie.props,null,J.mode,Ae),Ae.ref=za(J,j,ie),Ae.return=J,J=Ae)}return T(J);case D:e:{for(et=ie.key;j!==null;){if(j.key===et)if(j.tag===4&&j.stateNode.containerInfo===ie.containerInfo&&j.stateNode.implementation===ie.implementation){a(J,j.sibling),j=d(j,ie.children||[]),j.return=J,J=j;break e}else{a(J,j);break}else i(J,j);j=j.sibling}j=Wu(ie,J.mode,Ae),j.return=J,J=j}return T(J);case Z:return et=ie._init,rn(J,j,et(ie._payload),Ae)}if(z(ie))return je(J,j,ie,Ae);if(ce(ie))return qe(J,j,ie,Ae);Ho(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,j!==null&&j.tag===6?(a(J,j.sibling),j=d(j,ie),j.return=J,J=j):(a(J,j),j=Hu(ie,J.mode,Ae),j.return=J,J=j),T(J)):a(J,j)}return rn}var Hs=np(!0),ip=np(!1),Wo=Ar(null),jo=null,Ws=null,Jc=null;function eu(){Jc=Ws=jo=null}function tu(n){var i=Wo.current;Xt(Wo),n._currentValue=i}function nu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function js(n,i){jo=n,Jc=Ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Vn=!0),n.firstContext=null)}function li(n){var i=n._currentValue;if(Jc!==n)if(n={context:n,memoizedValue:i,next:null},Ws===null){if(jo===null)throw Error(t(308));Ws=n,jo.dependencies={lanes:0,firstContext:n}}else Ws=Ws.next=n;return i}var rs=null;function iu(n){rs===null?rs=[n]:rs.push(n)}function rp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,iu(i)):(a.next=d.next,d.next=a),i.interleaved=a,nr(n,c)}function nr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Pr=!1;function ru(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ir(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Nr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(bt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,nr(n,a)}return d=c.interleaved,d===null?(i.next=i,iu(c)):(i.next=d.next,d.next=i),c.interleaved=i,nr(n,a)}function Xo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,kn(n,a)}}function ap(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function qo(n,i,a,c){var d=n.updateQueue;Pr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,F=d.shared.pending;if(F!==null){d.shared.pending=null;var G=F,le=G.next;G.next=null,T===null?m=le:T.next=le,T=G;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,F=ye.lastBaseUpdate,F!==T&&(F===null?ye.firstBaseUpdate=le:F.next=le,ye.lastBaseUpdate=G))}if(m!==null){var Ee=d.baseState;T=0,ye=le=G=null,F=m;do{var ve=F.lane,Ve=F.eventTime;if((c&ve)===ve){ye!==null&&(ye=ye.next={eventTime:Ve,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var je=n,qe=F;switch(ve=i,Ve=a,qe.tag){case 1:if(je=qe.payload,typeof je=="function"){Ee=je.call(Ve,Ee,ve);break e}Ee=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=qe.payload,ve=typeof je=="function"?je.call(Ve,Ee,ve):je,ve==null)break e;Ee=ue({},Ee,ve);break e;case 2:Pr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,ve=d.effects,ve===null?d.effects=[F]:ve.push(F))}else Ve={eventTime:Ve,lane:ve,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ye===null?(le=ye=Ve,G=Ee):ye=ye.next=Ve,T|=ve;if(F=F.next,F===null){if(F=d.shared.pending,F===null)break;ve=F,F=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(ye===null&&(G=Ee),d.baseState=G,d.firstBaseUpdate=le,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);os|=T,n.lanes=T,n.memoizedState=Ee}}function op(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Va={},Ii=Ar(Va),Ga=Ar(Va),Ha=Ar(Va);function ss(n){if(n===Va)throw Error(t(174));return n}function su(n,i){switch(Ht(Ha,i),Ht(Ga,n),Ht(Ii,Va),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=M(i,n)}Xt(Ii),Ht(Ii,i)}function Xs(){Xt(Ii),Xt(Ga),Xt(Ha)}function lp(n){ss(Ha.current);var i=ss(Ii.current),a=M(i,n.type);i!==a&&(Ht(Ga,n),Ht(Ii,a))}function au(n){Ga.current===n&&(Xt(Ii),Xt(Ga))}var Qt=Ar(0);function $o(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ou=[];function lu(){for(var n=0;n<ou.length;n++)ou[n]._workInProgressVersionPrimary=null;ou.length=0}var Yo=L.ReactCurrentDispatcher,cu=L.ReactCurrentBatchConfig,as=0,Jt=null,cn=null,hn=null,Ko=!1,Wa=!1,ja=0,Ox=0;function Tn(){throw Error(t(321))}function uu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!xi(n[a],i[a]))return!1;return!0}function du(n,i,a,c,d,m){if(as=m,Jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Yo.current=n===null||n.memoizedState===null?Vx:Gx,n=a(c,d),Wa){m=0;do{if(Wa=!1,ja=0,25<=m)throw Error(t(301));m+=1,hn=cn=null,i.updateQueue=null,Yo.current=Hx,n=a(c,d)}while(Wa)}if(Yo.current=Jo,i=cn!==null&&cn.next!==null,as=0,hn=cn=Jt=null,Ko=!1,i)throw Error(t(300));return n}function fu(){var n=ja!==0;return ja=0,n}function Ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Jt.memoizedState=hn=n:hn=hn.next=n,hn}function ci(){if(cn===null){var n=Jt.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var i=hn===null?Jt.memoizedState:hn.next;if(i!==null)hn=i,cn=n;else{if(n===null)throw Error(t(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},hn===null?Jt.memoizedState=hn=n:hn=hn.next=n}return hn}function Xa(n,i){return typeof i=="function"?i(n):i}function hu(n){var i=ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=cn,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var F=T=null,G=null,le=m;do{var ye=le.lane;if((as&ye)===ye)G!==null&&(G=G.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),c=le.hasEagerState?le.eagerState:n(c,le.action);else{var Ee={lane:ye,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};G===null?(F=G=Ee,T=c):G=G.next=Ee,Jt.lanes|=ye,os|=ye}le=le.next}while(le!==null&&le!==m);G===null?T=c:G.next=F,xi(c,i.memoizedState)||(Vn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=G,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Jt.lanes|=m,os|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function pu(n){var i=ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);xi(m,i.memoizedState)||(Vn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function cp(){}function up(n,i){var a=Jt,c=ci(),d=i(),m=!xi(c.memoizedState,d);if(m&&(c.memoizedState=d,Vn=!0),c=c.queue,mu(hp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||hn!==null&&hn.memoizedState.tag&1){if(a.flags|=2048,qa(9,fp.bind(null,a,c,d,i),void 0,null),pn===null)throw Error(t(349));(as&30)!==0||dp(a,i,d)}return d}function dp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function fp(n,i,a,c){i.value=a,i.getSnapshot=c,pp(i)&&mp(n)}function hp(n,i,a){return a(function(){pp(i)&&mp(n)})}function pp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!xi(n,a)}catch{return!0}}function mp(n){var i=nr(n,1);i!==null&&Mi(i,n,1,-1)}function gp(n){var i=Ui();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:n},i.queue=n,n=n.dispatch=zx.bind(null,Jt,n),[i.memoizedState,n]}function qa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function xp(){return ci().memoizedState}function Zo(n,i,a,c){var d=Ui();Jt.flags|=n,d.memoizedState=qa(1|i,a,void 0,c===void 0?null:c)}function Qo(n,i,a,c){var d=ci();c=c===void 0?null:c;var m=void 0;if(cn!==null){var T=cn.memoizedState;if(m=T.destroy,c!==null&&uu(c,T.deps)){d.memoizedState=qa(i,a,m,c);return}}Jt.flags|=n,d.memoizedState=qa(1|i,a,m,c)}function _p(n,i){return Zo(8390656,8,n,i)}function mu(n,i){return Qo(2048,8,n,i)}function vp(n,i){return Qo(4,2,n,i)}function Sp(n,i){return Qo(4,4,n,i)}function yp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Mp(n,i,a){return a=a!=null?a.concat([n]):null,Qo(4,4,yp.bind(null,i,n),a)}function gu(){}function Ep(n,i){var a=ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&uu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Tp(n,i){var a=ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&uu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function wp(n,i,a){return(as&21)===0?(n.baseState&&(n.baseState=!1,Vn=!0),n.memoizedState=a):(xi(a,i)||(a=ze(),Jt.lanes|=a,os|=a,n.baseState=!0),i)}function kx(n,i){var a=_t;_t=a!==0&&4>a?a:4,n(!0);var c=cu.transition;cu.transition={};try{n(!1),i()}finally{_t=a,cu.transition=c}}function bp(){return ci().memoizedState}function Bx(n,i,a){var c=Ur(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Ap(n))Cp(i,a);else if(a=rp(n,i,a,c),a!==null){var d=Ln();Mi(a,n,c,d),Rp(a,i,c)}}function zx(n,i,a){var c=Ur(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ap(n))Cp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,F=m(T,a);if(d.hasEagerState=!0,d.eagerState=F,xi(F,T)){var G=i.interleaved;G===null?(d.next=d,iu(i)):(d.next=G.next,G.next=d),i.interleaved=d;return}}catch{}finally{}a=rp(n,i,d,c),a!==null&&(d=Ln(),Mi(a,n,c,d),Rp(a,i,c))}}function Ap(n){var i=n.alternate;return n===Jt||i!==null&&i===Jt}function Cp(n,i){Wa=Ko=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Rp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,kn(n,a)}}var Jo={readContext:li,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},Vx={readContext:li,useCallback:function(n,i){return Ui().memoizedState=[n,i===void 0?null:i],n},useContext:li,useEffect:_p,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Zo(4194308,4,yp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Zo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Zo(4,2,n,i)},useMemo:function(n,i){var a=Ui();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ui();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Bx.bind(null,Jt,n),[c.memoizedState,n]},useRef:function(n){var i=Ui();return n={current:n},i.memoizedState=n},useState:gp,useDebugValue:gu,useDeferredValue:function(n){return Ui().memoizedState=n},useTransition:function(){var n=gp(!1),i=n[0];return n=kx.bind(null,n[1]),Ui().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Jt,d=Ui();if(Yt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),pn===null)throw Error(t(349));(as&30)!==0||dp(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,_p(hp.bind(null,c,m,n),[n]),c.flags|=2048,qa(9,fp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Ui(),i=pn.identifierPrefix;if(Yt){var a=tr,c=er;a=(c&~(1<<32-Re(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ja++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Ox++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Gx={readContext:li,useCallback:Ep,useContext:li,useEffect:mu,useImperativeHandle:Mp,useInsertionEffect:vp,useLayoutEffect:Sp,useMemo:Tp,useReducer:hu,useRef:xp,useState:function(){return hu(Xa)},useDebugValue:gu,useDeferredValue:function(n){var i=ci();return wp(i,cn.memoizedState,n)},useTransition:function(){var n=hu(Xa)[0],i=ci().memoizedState;return[n,i]},useMutableSource:cp,useSyncExternalStore:up,useId:bp,unstable_isNewReconciler:!1},Hx={readContext:li,useCallback:Ep,useContext:li,useEffect:mu,useImperativeHandle:Mp,useInsertionEffect:vp,useLayoutEffect:Sp,useMemo:Tp,useReducer:pu,useRef:xp,useState:function(){return pu(Xa)},useDebugValue:gu,useDeferredValue:function(n){var i=ci();return cn===null?i.memoizedState=n:wp(i,cn.memoizedState,n)},useTransition:function(){var n=pu(Xa)[0],i=ci().memoizedState;return[n,i]},useMutableSource:cp,useSyncExternalStore:up,useId:bp,unstable_isNewReconciler:!1};function vi(n,i){if(n&&n.defaultProps){i=ue({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function xu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ue({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var el={isMounted:function(n){return(n=n._reactInternals)?si(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ln(),d=Ur(n),m=ir(c,d);m.payload=i,a!=null&&(m.callback=a),i=Nr(n,m,d),i!==null&&(Mi(i,n,d,c),Xo(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ln(),d=Ur(n),m=ir(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Nr(n,m,d),i!==null&&(Mi(i,n,d,c),Xo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ln(),c=Ur(n),d=ir(a,c);d.tag=2,i!=null&&(d.callback=i),i=Nr(n,d,c),i!==null&&(Mi(i,n,c,a),Xo(i,n,c))}};function Pp(n,i,a,c,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!Da(a,c)||!Da(d,m):!0}function Np(n,i,a){var c=!1,d=Cr,m=i.contextType;return typeof m=="object"&&m!==null?m=li(m):(d=zn(i)?ts:En.current,c=i.contextTypes,m=(c=c!=null)?Bs(n,d):Cr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=el,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Lp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&el.enqueueReplaceState(i,i.state,null)}function _u(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},ru(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=li(m):(m=zn(i)?ts:En.current,d.context=Bs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(xu(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&el.enqueueReplaceState(d,d.state,null),qo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function qs(n,i){try{var a="",c=i;do a+=Ie(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function vu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Su(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Wx=typeof WeakMap=="function"?WeakMap:Map;function Dp(n,i,a){a=ir(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ol||(ol=!0,Uu=c),Su(n,i)},a}function Ip(n,i,a){a=ir(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Su(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Su(n,i),typeof c!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Up(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Wx;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=r_.bind(null,n,i,a),i.then(n,n))}function Fp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Op(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ir(-1,1),i.tag=2,Nr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var jx=L.ReactCurrentOwner,Vn=!1;function Nn(n,i,a,c){i.child=n===null?ip(i,null,a,c):Hs(i,n.child,a,c)}function kp(n,i,a,c,d){a=a.render;var m=i.ref;return js(i,d),c=du(n,i,a,c,m,d),a=fu(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,rr(n,i,d)):(Yt&&a&&$c(i),i.flags|=1,Nn(n,i,c,d),i.child)}function Bp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Gu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,zp(n,i,m,c,d)):(n=hl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:Da,a(T,c)&&n.ref===i.ref)return rr(n,i,d)}return i.flags|=1,n=Or(m,c),n.ref=i.ref,n.return=i,i.child=n}function zp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Da(m,c)&&n.ref===i.ref)if(Vn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Vn=!0);else return i.lanes=n.lanes,rr(n,i,d)}return yu(n,i,a,c,d)}function Vp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Ys,Qn),Qn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ht(Ys,Qn),Qn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Ht(Ys,Qn),Qn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Ht(Ys,Qn),Qn|=c;return Nn(n,i,d,a),i.child}function Gp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function yu(n,i,a,c,d){var m=zn(a)?ts:En.current;return m=Bs(i,m),js(i,d),a=du(n,i,a,c,m,d),c=fu(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,rr(n,i,d)):(Yt&&c&&$c(i),i.flags|=1,Nn(n,i,a,d),i.child)}function Hp(n,i,a,c,d){if(zn(a)){var m=!0;ko(i)}else m=!1;if(js(i,d),i.stateNode===null)nl(n,i),Np(i,a,c),_u(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,F=i.memoizedProps;T.props=F;var G=T.context,le=a.contextType;typeof le=="object"&&le!==null?le=li(le):(le=zn(a)?ts:En.current,le=Bs(i,le));var ye=a.getDerivedStateFromProps,Ee=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==c||G!==le)&&Lp(i,T,c,le),Pr=!1;var ve=i.memoizedState;T.state=ve,qo(i,c,T,d),G=i.memoizedState,F!==c||ve!==G||Bn.current||Pr?(typeof ye=="function"&&(xu(i,a,ye,c),G=i.memoizedState),(F=Pr||Pp(i,a,F,c,ve,G,le))?(Ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=G),T.props=c,T.state=G,T.context=le,c=F):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,sp(n,i),F=i.memoizedProps,le=i.type===i.elementType?F:vi(i.type,F),T.props=le,Ee=i.pendingProps,ve=T.context,G=a.contextType,typeof G=="object"&&G!==null?G=li(G):(G=zn(a)?ts:En.current,G=Bs(i,G));var Ve=a.getDerivedStateFromProps;(ye=typeof Ve=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==Ee||ve!==G)&&Lp(i,T,c,G),Pr=!1,ve=i.memoizedState,T.state=ve,qo(i,c,T,d);var je=i.memoizedState;F!==Ee||ve!==je||Bn.current||Pr?(typeof Ve=="function"&&(xu(i,a,Ve,c),je=i.memoizedState),(le=Pr||Pp(i,a,le,c,ve,je,G)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,je,G),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,je,G)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=je),T.props=c,T.state=je,T.context=G,c=le):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),c=!1)}return Mu(n,i,a,c,m,d)}function Mu(n,i,a,c,d,m){Gp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&$h(i,a,!1),rr(n,i,m);c=i.stateNode,jx.current=i;var F=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Hs(i,n.child,null,m),i.child=Hs(i,null,F,m)):Nn(n,i,F,m),i.memoizedState=c.state,d&&$h(i,a,!0),i.child}function Wp(n){var i=n.stateNode;i.pendingContext?Xh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Xh(n,i.context,!1),su(n,i.containerInfo)}function jp(n,i,a,c,d){return Gs(),Qc(d),i.flags|=256,Nn(n,i,a,c),i.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function Tu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Xp(n,i,a){var c=i.pendingProps,d=Qt.current,m=!1,T=(i.flags&128)!==0,F;if((F=T)||(F=n!==null&&n.memoizedState===null?!1:(d&2)!==0),F?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ht(Qt,d&1),n===null)return Zc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=pl(T,c,0,null),n=ds(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Tu(a),i.memoizedState=Eu,n):wu(i,T));if(d=n.memoizedState,d!==null&&(F=d.dehydrated,F!==null))return Xx(n,i,T,c,F,d,a);if(m){m=c.fallback,T=i.mode,d=n.child,F=d.sibling;var G={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=G,i.deletions=null):(c=Or(d,G),c.subtreeFlags=d.subtreeFlags&14680064),F!==null?m=Or(F,m):(m=ds(m,T,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?Tu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~a,i.memoizedState=Eu,c}return m=n.child,n=m.sibling,c=Or(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function wu(n,i){return i=pl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function tl(n,i,a,c){return c!==null&&Qc(c),Hs(i,n.child,null,a),n=wu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Xx(n,i,a,c,d,m,T){if(a)return i.flags&256?(i.flags&=-257,c=vu(Error(t(422))),tl(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=pl({mode:"visible",children:c.children},d,0,null),m=ds(m,d,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Hs(i,n.child,null,T),i.child.memoizedState=Tu(T),i.memoizedState=Eu,m);if((i.mode&1)===0)return tl(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var F=c.dgst;return c=F,m=Error(t(419)),c=vu(m,c,void 0),tl(n,i,T,c)}if(F=(T&n.childLanes)!==0,Vn||F){if(c=pn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,nr(n,d),Mi(c,n,d,-1))}return Vu(),c=vu(Error(t(421))),tl(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=s_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Zn=br(d.nextSibling),Kn=i,Yt=!0,_i=null,n!==null&&(ai[oi++]=er,ai[oi++]=tr,ai[oi++]=ns,er=n.id,tr=n.overflow,ns=i),i=wu(i,c.children),i.flags|=4096,i)}function qp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),nu(n.return,i,a)}function bu(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function $p(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Nn(n,i,c.children,a),c=Qt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&qp(n,a,i);else if(n.tag===19)qp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ht(Qt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&$o(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),bu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&$o(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}bu(i,!0,a,null,m);break;case"together":bu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function nl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function rr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),os|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Or(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Or(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function qx(n,i,a){switch(i.tag){case 3:Wp(i),Gs();break;case 5:lp(i);break;case 1:zn(i.type)&&ko(i);break;case 4:su(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ht(Wo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ht(Qt,Qt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Xp(n,i,a):(Ht(Qt,Qt.current&1),n=rr(n,i,a),n!==null?n.sibling:null);Ht(Qt,Qt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return $p(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ht(Qt,Qt.current),c)break;return null;case 22:case 23:return i.lanes=0,Vp(n,i,a)}return rr(n,i,a)}var Yp,Au,Kp,Zp;Yp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Au=function(){},Kp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ss(Ii.current);var m=null;switch(a){case"input":d=Et(n,d),c=Et(n,c),m=[];break;case"select":d=ue({},d,{value:void 0}),c=ue({},c,{value:void 0}),m=[];break;case"textarea":d=ht(n,d),c=ht(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Uo)}Pe(a,c);var T;a=null;for(le in d)if(!c.hasOwnProperty(le)&&d.hasOwnProperty(le)&&d[le]!=null)if(le==="style"){var F=d[le];for(T in F)F.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(o.hasOwnProperty(le)?m||(m=[]):(m=m||[]).push(le,null));for(le in c){var G=c[le];if(F=d!=null?d[le]:void 0,c.hasOwnProperty(le)&&G!==F&&(G!=null||F!=null))if(le==="style")if(F){for(T in F)!F.hasOwnProperty(T)||G&&G.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in G)G.hasOwnProperty(T)&&F[T]!==G[T]&&(a||(a={}),a[T]=G[T])}else a||(m||(m=[]),m.push(le,a)),a=G;else le==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,F=F?F.__html:void 0,G!=null&&F!==G&&(m=m||[]).push(le,G)):le==="children"?typeof G!="string"&&typeof G!="number"||(m=m||[]).push(le,""+G):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(o.hasOwnProperty(le)?(G!=null&&le==="onScroll"&&jt("scroll",n),m||F===G||(m=[])):(m=m||[]).push(le,G))}a&&(m=m||[]).push("style",a);var le=m;(i.updateQueue=le)&&(i.flags|=4)}},Zp=function(n,i,a,c){a!==c&&(i.flags|=4)};function $a(n,i){if(!Yt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function wn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function $x(n,i,a){var c=i.pendingProps;switch(Yc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(i),null;case 1:return zn(i.type)&&Oo(),wn(i),null;case 3:return c=i.stateNode,Xs(),Xt(Bn),Xt(En),lu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Go(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,_i!==null&&(ku(_i),_i=null))),Au(n,i),wn(i),null;case 5:au(i);var d=ss(Ha.current);if(a=i.type,n!==null&&i.stateNode!=null)Kp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return wn(i),null}if(n=ss(Ii.current),Go(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Di]=i,c[ka]=m,n=(i.mode&1)!==0,a){case"dialog":jt("cancel",c),jt("close",c);break;case"iframe":case"object":case"embed":jt("load",c);break;case"video":case"audio":for(d=0;d<Ua.length;d++)jt(Ua[d],c);break;case"source":jt("error",c);break;case"img":case"image":case"link":jt("error",c),jt("load",c);break;case"details":jt("toggle",c);break;case"input":wt(c,m),jt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},jt("invalid",c);break;case"textarea":Nt(c,m),jt("invalid",c)}Pe(a,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var F=m[T];T==="children"?typeof F=="string"?c.textContent!==F&&(m.suppressHydrationWarning!==!0&&Io(c.textContent,F,n),d=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(m.suppressHydrationWarning!==!0&&Io(c.textContent,F,n),d=["children",""+F]):o.hasOwnProperty(T)&&F!=null&&T==="onScroll"&&jt("scroll",c)}switch(a){case"input":Ye(c),Bt(c,m,!0);break;case"textarea":Ye(c),zt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Uo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=P(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Di]=i,n[ka]=c,Yp(n,i,!1,!1),i.stateNode=n;e:{switch(T=be(a,c),a){case"dialog":jt("cancel",n),jt("close",n),d=c;break;case"iframe":case"object":case"embed":jt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ua.length;d++)jt(Ua[d],n);d=c;break;case"source":jt("error",n),d=c;break;case"img":case"image":case"link":jt("error",n),jt("load",n),d=c;break;case"details":jt("toggle",n),d=c;break;case"input":wt(n,c),d=Et(n,c),jt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ue({},c,{value:void 0}),jt("invalid",n);break;case"textarea":Nt(n,c),d=ht(n,c),jt("invalid",n);break;default:d=c}Pe(a,d),F=d;for(m in F)if(F.hasOwnProperty(m)){var G=F[m];m==="style"?pe(n,G):m==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&me(n,G)):m==="children"?typeof G=="string"?(a!=="textarea"||G!=="")&&fe(n,G):typeof G=="number"&&fe(n,""+G):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?G!=null&&m==="onScroll"&&jt("scroll",n):G!=null&&N(n,m,G,T))}switch(a){case"input":Ye(n),Bt(n,c,!1);break;case"textarea":Ye(n),zt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ge(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?It(n,!!c.multiple,m,!1):c.defaultValue!=null&&It(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Uo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return wn(i),null;case 6:if(n&&i.stateNode!=null)Zp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ss(Ha.current),ss(Ii.current),Go(i)){if(c=i.stateNode,a=i.memoizedProps,c[Di]=i,(m=c.nodeValue!==a)&&(n=Kn,n!==null))switch(n.tag){case 3:Io(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Io(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Di]=i,i.stateNode=c}return wn(i),null;case 13:if(Xt(Qt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&Zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ep(),Gs(),i.flags|=98560,m=!1;else if(m=Go(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Di]=i}else Gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;wn(i),m=!1}else _i!==null&&(ku(_i),_i=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Qt.current&1)!==0?un===0&&(un=3):Vu())),i.updateQueue!==null&&(i.flags|=4),wn(i),null);case 4:return Xs(),Au(n,i),n===null&&Fa(i.stateNode.containerInfo),wn(i),null;case 10:return tu(i.type._context),wn(i),null;case 17:return zn(i.type)&&Oo(),wn(i),null;case 19:if(Xt(Qt),m=i.memoizedState,m===null)return wn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)$a(m,!1);else{if(un!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=$o(n),T!==null){for(i.flags|=128,$a(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ht(Qt,Qt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Zt()>Ks&&(i.flags|=128,c=!0,$a(m,!1),i.lanes=4194304)}else{if(!c)if(n=$o(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),$a(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Yt)return wn(i),null}else 2*Zt()-m.renderingStartTime>Ks&&a!==1073741824&&(i.flags|=128,c=!0,$a(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Zt(),i.sibling=null,a=Qt.current,Ht(Qt,c?a&1|2:a&1),i):(wn(i),null);case 22:case 23:return zu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Qn&1073741824)!==0&&(wn(i),i.subtreeFlags&6&&(i.flags|=8192)):wn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Yx(n,i){switch(Yc(i),i.tag){case 1:return zn(i.type)&&Oo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Xs(),Xt(Bn),Xt(En),lu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return au(i),null;case 13:if(Xt(Qt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Xt(Qt),null;case 4:return Xs(),null;case 10:return tu(i.type._context),null;case 22:case 23:return zu(),null;case 24:return null;default:return null}}var il=!1,bn=!1,Kx=typeof WeakSet=="function"?WeakSet:Set,He=null;function $s(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){en(n,i,c)}else a.current=null}function Cu(n,i,a){try{a()}catch(c){en(n,i,c)}}var Qp=!1;function Zx(n,i){if(zc=Eo,n=Ph(),Lc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,F=-1,G=-1,le=0,ye=0,Ee=n,ve=null;t:for(;;){for(var Ve;Ee!==a||d!==0&&Ee.nodeType!==3||(F=T+d),Ee!==m||c!==0&&Ee.nodeType!==3||(G=T+c),Ee.nodeType===3&&(T+=Ee.nodeValue.length),(Ve=Ee.firstChild)!==null;)ve=Ee,Ee=Ve;for(;;){if(Ee===n)break t;if(ve===a&&++le===d&&(F=T),ve===m&&++ye===c&&(G=T),(Ve=Ee.nextSibling)!==null)break;Ee=ve,ve=Ee.parentNode}Ee=Ve}a=F===-1||G===-1?null:{start:F,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vc={focusedElem:n,selectionRange:a},Eo=!1,He=i;He!==null;)if(i=He,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,He=n;else for(;He!==null;){i=He;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var qe=je.memoizedProps,rn=je.memoizedState,J=i.stateNode,j=J.getSnapshotBeforeUpdate(i.elementType===i.type?qe:vi(i.type,qe),rn);J.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){en(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,He=n;break}He=i.return}return je=Qp,Qp=!1,je}function Ya(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Cu(i,a,m)}d=d.next}while(d!==c)}}function rl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Ru(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Jp(n){var i=n.alternate;i!==null&&(n.alternate=null,Jp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Di],delete i[ka],delete i[jc],delete i[Dx],delete i[Ix])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function em(n){return n.tag===5||n.tag===3||n.tag===4}function tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||em(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Pu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Uo));else if(c!==4&&(n=n.child,n!==null))for(Pu(n,i,a),n=n.sibling;n!==null;)Pu(n,i,a),n=n.sibling}function Nu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Nu(n,i,a),n=n.sibling;n!==null;)Nu(n,i,a),n=n.sibling}var vn=null,Si=!1;function Lr(n,i,a){for(a=a.child;a!==null;)nm(n,i,a),a=a.sibling}function nm(n,i,a){if(Ne&&typeof Ne.onCommitFiberUnmount=="function")try{Ne.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 5:bn||$s(a,i);case 6:var c=vn,d=Si;vn=null,Lr(n,i,a),vn=c,Si=d,vn!==null&&(Si?(n=vn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):vn.removeChild(a.stateNode));break;case 18:vn!==null&&(Si?(n=vn,a=a.stateNode,n.nodeType===8?Wc(n.parentNode,a):n.nodeType===1&&Wc(n,a),Aa(n)):Wc(vn,a.stateNode));break;case 4:c=vn,d=Si,vn=a.stateNode.containerInfo,Si=!0,Lr(n,i,a),vn=c,Si=d;break;case 0:case 11:case 14:case 15:if(!bn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&Cu(a,i,T),d=d.next}while(d!==c)}Lr(n,i,a);break;case 1:if(!bn&&($s(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(F){en(a,i,F)}Lr(n,i,a);break;case 21:Lr(n,i,a);break;case 22:a.mode&1?(bn=(c=bn)||a.memoizedState!==null,Lr(n,i,a),bn=c):Lr(n,i,a);break;default:Lr(n,i,a)}}function im(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Kx),i.forEach(function(c){var d=a_.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function yi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,T=i,F=T;e:for(;F!==null;){switch(F.tag){case 5:vn=F.stateNode,Si=!1;break e;case 3:vn=F.stateNode.containerInfo,Si=!0;break e;case 4:vn=F.stateNode.containerInfo,Si=!0;break e}F=F.return}if(vn===null)throw Error(t(160));nm(m,T,d),vn=null,Si=!1;var G=d.alternate;G!==null&&(G.return=null),d.return=null}catch(le){en(d,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)rm(i,n),i=i.sibling}function rm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(yi(i,n),Fi(n),c&4){try{Ya(3,n,n.return),rl(3,n)}catch(qe){en(n,n.return,qe)}try{Ya(5,n,n.return)}catch(qe){en(n,n.return,qe)}}break;case 1:yi(i,n),Fi(n),c&512&&a!==null&&$s(a,a.return);break;case 5:if(yi(i,n),Fi(n),c&512&&a!==null&&$s(a,a.return),n.flags&32){var d=n.stateNode;try{fe(d,"")}catch(qe){en(n,n.return,qe)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=a!==null?a.memoizedProps:m,F=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{F==="input"&&m.type==="radio"&&m.name!=null&&at(d,m),be(F,T);var le=be(F,m);for(T=0;T<G.length;T+=2){var ye=G[T],Ee=G[T+1];ye==="style"?pe(d,Ee):ye==="dangerouslySetInnerHTML"?me(d,Ee):ye==="children"?fe(d,Ee):N(d,ye,Ee,le)}switch(F){case"input":Vt(d,m);break;case"textarea":De(d,m);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ve=m.value;Ve!=null?It(d,!!m.multiple,Ve,!1):ve!==!!m.multiple&&(m.defaultValue!=null?It(d,!!m.multiple,m.defaultValue,!0):It(d,!!m.multiple,m.multiple?[]:"",!1))}d[ka]=m}catch(qe){en(n,n.return,qe)}}break;case 6:if(yi(i,n),Fi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(qe){en(n,n.return,qe)}}break;case 3:if(yi(i,n),Fi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Aa(i.containerInfo)}catch(qe){en(n,n.return,qe)}break;case 4:yi(i,n),Fi(n);break;case 13:yi(i,n),Fi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Iu=Zt())),c&4&&im(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(bn=(le=bn)||ye,yi(i,n),bn=le):yi(i,n),Fi(n),c&8192){if(le=n.memoizedState!==null,(n.stateNode.isHidden=le)&&!ye&&(n.mode&1)!==0)for(He=n,ye=n.child;ye!==null;){for(Ee=He=ye;He!==null;){switch(ve=He,Ve=ve.child,ve.tag){case 0:case 11:case 14:case 15:Ya(4,ve,ve.return);break;case 1:$s(ve,ve.return);var je=ve.stateNode;if(typeof je.componentWillUnmount=="function"){c=ve,a=ve.return;try{i=c,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(qe){en(c,a,qe)}}break;case 5:$s(ve,ve.return);break;case 22:if(ve.memoizedState!==null){om(Ee);continue}}Ve!==null?(Ve.return=ve,He=Ve):om(Ee)}ye=ye.sibling}e:for(ye=null,Ee=n;;){if(Ee.tag===5){if(ye===null){ye=Ee;try{d=Ee.stateNode,le?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(F=Ee.stateNode,G=Ee.memoizedProps.style,T=G!=null&&G.hasOwnProperty("display")?G.display:null,F.style.display=de("display",T))}catch(qe){en(n,n.return,qe)}}}else if(Ee.tag===6){if(ye===null)try{Ee.stateNode.nodeValue=le?"":Ee.memoizedProps}catch(qe){en(n,n.return,qe)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;ye===Ee&&(ye=null),Ee=Ee.return}ye===Ee&&(ye=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:yi(i,n),Fi(n),c&4&&im(n);break;case 21:break;default:yi(i,n),Fi(n)}}function Fi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(em(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(fe(d,""),c.flags&=-33);var m=tm(n);Nu(n,m,d);break;case 3:case 4:var T=c.stateNode.containerInfo,F=tm(n);Pu(n,F,T);break;default:throw Error(t(161))}}catch(G){en(n,n.return,G)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Qx(n,i,a){He=n,sm(n)}function sm(n,i,a){for(var c=(n.mode&1)!==0;He!==null;){var d=He,m=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||il;if(!T){var F=d.alternate,G=F!==null&&F.memoizedState!==null||bn;F=il;var le=bn;if(il=T,(bn=G)&&!le)for(He=d;He!==null;)T=He,G=T.child,T.tag===22&&T.memoizedState!==null?lm(d):G!==null?(G.return=T,He=G):lm(d);for(;m!==null;)He=m,sm(m),m=m.sibling;He=d,il=F,bn=le}am(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,He=m):am(n)}}function am(n){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:bn||rl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!bn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:vi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&op(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}op(i,T,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&a.focus();break;case"img":G.src&&(a.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var ye=le.memoizedState;if(ye!==null){var Ee=ye.dehydrated;Ee!==null&&Aa(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bn||i.flags&512&&Ru(i)}catch(ve){en(i,i.return,ve)}}if(i===n){He=null;break}if(a=i.sibling,a!==null){a.return=i.return,He=a;break}He=i.return}}function om(n){for(;He!==null;){var i=He;if(i===n){He=null;break}var a=i.sibling;if(a!==null){a.return=i.return,He=a;break}He=i.return}}function lm(n){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{rl(4,i)}catch(G){en(i,a,G)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(G){en(i,d,G)}}var m=i.return;try{Ru(i)}catch(G){en(i,m,G)}break;case 5:var T=i.return;try{Ru(i)}catch(G){en(i,T,G)}}}catch(G){en(i,i.return,G)}if(i===n){He=null;break}var F=i.sibling;if(F!==null){F.return=i.return,He=F;break}He=i.return}}var Jx=Math.ceil,sl=L.ReactCurrentDispatcher,Lu=L.ReactCurrentOwner,ui=L.ReactCurrentBatchConfig,bt=0,pn=null,an=null,Sn=0,Qn=0,Ys=Ar(0),un=0,Ka=null,os=0,al=0,Du=0,Za=null,Gn=null,Iu=0,Ks=1/0,sr=null,ol=!1,Uu=null,Dr=null,ll=!1,Ir=null,cl=0,Qa=0,Fu=null,ul=-1,dl=0;function Ln(){return(bt&6)!==0?Zt():ul!==-1?ul:ul=Zt()}function Ur(n){return(n.mode&1)===0?1:(bt&2)!==0&&Sn!==0?Sn&-Sn:Fx.transition!==null?(dl===0&&(dl=ze()),dl):(n=_t,n!==0||(n=window.event,n=n===void 0?16:uh(n.type)),n)}function Mi(n,i,a,c){if(50<Qa)throw Qa=0,Fu=null,Error(t(185));xt(n,a,c),((bt&2)===0||n!==pn)&&(n===pn&&((bt&2)===0&&(al|=a),un===4&&Fr(n,Sn)),Hn(n,c),a===1&&bt===0&&(i.mode&1)===0&&(Ks=Zt()+500,Bo&&Rr()))}function Hn(n,i){var a=n.callbackNode;Ut(n,i);var c=Gt(n,n===pn?Sn:0);if(c===0)a!==null&&Ni(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Ni(a),i===1)n.tag===0?Ux(um.bind(null,n)):Yh(um.bind(null,n)),Nx(function(){(bt&6)===0&&Rr()}),a=null;else{switch(Zi(c)){case 1:a=Ma;break;case 4:a=A;break;case 16:a=$;break;case 536870912:a=ne;break;default:a=$}a=_m(a,cm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function cm(n,i){if(ul=-1,dl=0,(bt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Zs()&&n.callbackNode!==a)return null;var c=Gt(n,n===pn?Sn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=fl(n,c);else{i=c;var d=bt;bt|=2;var m=fm();(pn!==n||Sn!==i)&&(sr=null,Ks=Zt()+500,cs(n,i));do try{n_();break}catch(F){dm(n,F)}while(!0);eu(),sl.current=m,bt=d,an!==null?i=0:(pn=null,Sn=0,i=un)}if(i!==0){if(i===2&&(d=sn(n),d!==0&&(c=d,i=Ou(n,d))),i===1)throw a=Ka,cs(n,0),Fr(n,c),Hn(n,Zt()),a;if(i===6)Fr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!e_(d)&&(i=fl(n,c),i===2&&(m=sn(n),m!==0&&(c=m,i=Ou(n,m))),i===1))throw a=Ka,cs(n,0),Fr(n,c),Hn(n,Zt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:us(n,Gn,sr);break;case 3:if(Fr(n,c),(c&130023424)===c&&(i=Iu+500-Zt(),10<i)){if(Gt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ln(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Hc(us.bind(null,n,Gn,sr),i);break}us(n,Gn,sr);break;case 4:if(Fr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-Re(c);m=1<<T,T=i[T],T>d&&(d=T),c&=~m}if(c=d,c=Zt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Jx(c/1960))-c,10<c){n.timeoutHandle=Hc(us.bind(null,n,Gn,sr),c);break}us(n,Gn,sr);break;case 5:us(n,Gn,sr);break;default:throw Error(t(329))}}}return Hn(n,Zt()),n.callbackNode===a?cm.bind(null,n):null}function Ou(n,i){var a=Za;return n.current.memoizedState.isDehydrated&&(cs(n,i).flags|=256),n=fl(n,i),n!==2&&(i=Gn,Gn=a,i!==null&&ku(i)),n}function ku(n){Gn===null?Gn=n:Gn.push.apply(Gn,n)}function e_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!xi(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Fr(n,i){for(i&=~Du,i&=~al,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Re(i),c=1<<a;n[a]=-1,i&=~c}}function um(n){if((bt&6)!==0)throw Error(t(327));Zs();var i=Gt(n,0);if((i&1)===0)return Hn(n,Zt()),null;var a=fl(n,i);if(n.tag!==0&&a===2){var c=sn(n);c!==0&&(i=c,a=Ou(n,c))}if(a===1)throw a=Ka,cs(n,0),Fr(n,i),Hn(n,Zt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,us(n,Gn,sr),Hn(n,Zt()),null}function Bu(n,i){var a=bt;bt|=1;try{return n(i)}finally{bt=a,bt===0&&(Ks=Zt()+500,Bo&&Rr())}}function ls(n){Ir!==null&&Ir.tag===0&&(bt&6)===0&&Zs();var i=bt;bt|=1;var a=ui.transition,c=_t;try{if(ui.transition=null,_t=1,n)return n()}finally{_t=c,ui.transition=a,bt=i,(bt&6)===0&&Rr()}}function zu(){Qn=Ys.current,Xt(Ys)}function cs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Px(a)),an!==null)for(a=an.return;a!==null;){var c=a;switch(Yc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Oo();break;case 3:Xs(),Xt(Bn),Xt(En),lu();break;case 5:au(c);break;case 4:Xs();break;case 13:Xt(Qt);break;case 19:Xt(Qt);break;case 10:tu(c.type._context);break;case 22:case 23:zu()}a=a.return}if(pn=n,an=n=Or(n.current,null),Sn=Qn=i,un=0,Ka=null,Du=al=os=0,Gn=Za=null,rs!==null){for(i=0;i<rs.length;i++)if(a=rs[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var T=m.next;m.next=d,c.next=T}a.pending=c}rs=null}return n}function dm(n,i){do{var a=an;try{if(eu(),Yo.current=Jo,Ko){for(var c=Jt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ko=!1}if(as=0,hn=cn=Jt=null,Wa=!1,ja=0,Lu.current=null,a===null||a.return===null){un=1,Ka=i,an=null;break}e:{var m=n,T=a.return,F=a,G=i;if(i=Sn,F.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var le=G,ye=F,Ee=ye.tag;if((ye.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ve=ye.alternate;ve?(ye.updateQueue=ve.updateQueue,ye.memoizedState=ve.memoizedState,ye.lanes=ve.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ve=Fp(T);if(Ve!==null){Ve.flags&=-257,Op(Ve,T,F,m,i),Ve.mode&1&&Up(m,le,i),i=Ve,G=le;var je=i.updateQueue;if(je===null){var qe=new Set;qe.add(G),i.updateQueue=qe}else je.add(G);break e}else{if((i&1)===0){Up(m,le,i),Vu();break e}G=Error(t(426))}}else if(Yt&&F.mode&1){var rn=Fp(T);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),Op(rn,T,F,m,i),Qc(qs(G,F));break e}}m=G=qs(G,F),un!==4&&(un=2),Za===null?Za=[m]:Za.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var J=Dp(m,G,i);ap(m,J);break e;case 1:F=G;var j=m.type,ie=m.stateNode;if((m.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Dr===null||!Dr.has(ie)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ae=Ip(m,F,i);ap(m,Ae);break e}}m=m.return}while(m!==null)}pm(a)}catch(Ke){i=Ke,an===a&&a!==null&&(an=a=a.return);continue}break}while(!0)}function fm(){var n=sl.current;return sl.current=Jo,n===null?Jo:n}function Vu(){(un===0||un===3||un===2)&&(un=4),pn===null||(os&268435455)===0&&(al&268435455)===0||Fr(pn,Sn)}function fl(n,i){var a=bt;bt|=2;var c=fm();(pn!==n||Sn!==i)&&(sr=null,cs(n,i));do try{t_();break}catch(d){dm(n,d)}while(!0);if(eu(),bt=a,sl.current=c,an!==null)throw Error(t(261));return pn=null,Sn=0,un}function t_(){for(;an!==null;)hm(an)}function n_(){for(;an!==null&&!_c();)hm(an)}function hm(n){var i=xm(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,i===null?pm(n):an=i,Lu.current=null}function pm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=$x(a,i,Qn),a!==null){an=a;return}}else{if(a=Yx(a,i),a!==null){a.flags&=32767,an=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{un=6,an=null;return}}if(i=i.sibling,i!==null){an=i;return}an=i=n}while(i!==null);un===0&&(un=5)}function us(n,i,a){var c=_t,d=ui.transition;try{ui.transition=null,_t=1,i_(n,i,a,c)}finally{ui.transition=d,_t=c}return null}function i_(n,i,a,c){do Zs();while(Ir!==null);if((bt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(On(n,m),n===pn&&(an=pn=null,Sn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ll||(ll=!0,_m($,function(){return Zs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ui.transition,ui.transition=null;var T=_t;_t=1;var F=bt;bt|=4,Lu.current=null,Zx(n,a),rm(a,n),Ex(Vc),Eo=!!zc,Vc=zc=null,n.current=a,Qx(a),vc(),bt=F,_t=T,ui.transition=m}else n.current=a;if(ll&&(ll=!1,Ir=n,cl=d),m=n.pendingLanes,m===0&&(Dr=null),Ge(a.stateNode),Hn(n,Zt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(ol)throw ol=!1,n=Uu,Uu=null,n;return(cl&1)!==0&&n.tag!==0&&Zs(),m=n.pendingLanes,(m&1)!==0?n===Fu?Qa++:(Qa=0,Fu=n):Qa=0,Rr(),null}function Zs(){if(Ir!==null){var n=Zi(cl),i=ui.transition,a=_t;try{if(ui.transition=null,_t=16>n?16:n,Ir===null)var c=!1;else{if(n=Ir,Ir=null,cl=0,(bt&6)!==0)throw Error(t(331));var d=bt;for(bt|=4,He=n.current;He!==null;){var m=He,T=m.child;if((He.flags&16)!==0){var F=m.deletions;if(F!==null){for(var G=0;G<F.length;G++){var le=F[G];for(He=le;He!==null;){var ye=He;switch(ye.tag){case 0:case 11:case 15:Ya(8,ye,m)}var Ee=ye.child;if(Ee!==null)Ee.return=ye,He=Ee;else for(;He!==null;){ye=He;var ve=ye.sibling,Ve=ye.return;if(Jp(ye),ye===le){He=null;break}if(ve!==null){ve.return=Ve,He=ve;break}He=Ve}}}var je=m.alternate;if(je!==null){var qe=je.child;if(qe!==null){je.child=null;do{var rn=qe.sibling;qe.sibling=null,qe=rn}while(qe!==null)}}He=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,He=T;else e:for(;He!==null;){if(m=He,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ya(9,m,m.return)}var J=m.sibling;if(J!==null){J.return=m.return,He=J;break e}He=m.return}}var j=n.current;for(He=j;He!==null;){T=He;var ie=T.child;if((T.subtreeFlags&2064)!==0&&ie!==null)ie.return=T,He=ie;else e:for(T=j;He!==null;){if(F=He,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:rl(9,F)}}catch(Ke){en(F,F.return,Ke)}if(F===T){He=null;break e}var Ae=F.sibling;if(Ae!==null){Ae.return=F.return,He=Ae;break e}He=F.return}}if(bt=d,Rr(),Ne&&typeof Ne.onPostCommitFiberRoot=="function")try{Ne.onPostCommitFiberRoot(te,n)}catch{}c=!0}return c}finally{_t=a,ui.transition=i}}return!1}function mm(n,i,a){i=qs(a,i),i=Dp(n,i,1),n=Nr(n,i,1),i=Ln(),n!==null&&(xt(n,1,i),Hn(n,i))}function en(n,i,a){if(n.tag===3)mm(n,n,a);else for(;i!==null;){if(i.tag===3){mm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Dr===null||!Dr.has(c))){n=qs(a,n),n=Ip(i,n,1),i=Nr(i,n,1),n=Ln(),i!==null&&(xt(i,1,n),Hn(i,n));break}}i=i.return}}function r_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ln(),n.pingedLanes|=n.suspendedLanes&a,pn===n&&(Sn&a)===a&&(un===4||un===3&&(Sn&130023424)===Sn&&500>Zt()-Iu?cs(n,0):Du|=a),Hn(n,i)}function gm(n,i){i===0&&((n.mode&1)===0?i=1:(i=$e,$e<<=1,($e&130023424)===0&&($e=4194304)));var a=Ln();n=nr(n,i),n!==null&&(xt(n,i,a),Hn(n,a))}function s_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),gm(n,a)}function a_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),gm(n,a)}var xm;xm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Bn.current)Vn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Vn=!1,qx(n,i,a);Vn=(n.flags&131072)!==0}else Vn=!1,Yt&&(i.flags&1048576)!==0&&Kh(i,Vo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;nl(n,i),n=i.pendingProps;var d=Bs(i,En.current);js(i,a),d=du(null,i,c,n,d,a);var m=fu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,zn(c)?(m=!0,ko(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ru(i),d.updater=el,i.stateNode=d,d._reactInternals=i,_u(i,c,n,a),i=Mu(null,i,c,!0,m,a)):(i.tag=0,Yt&&m&&$c(i),Nn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(nl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=l_(c),n=vi(c,n),d){case 0:i=yu(null,i,c,n,a);break e;case 1:i=Hp(null,i,c,n,a);break e;case 11:i=kp(null,i,c,n,a);break e;case 14:i=Bp(null,i,c,vi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:vi(c,d),yu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:vi(c,d),Hp(n,i,c,d,a);case 3:e:{if(Wp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,sp(n,i),qo(i,c,null,a);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=qs(Error(t(423)),i),i=jp(n,i,c,a,d);break e}else if(c!==d){d=qs(Error(t(424)),i),i=jp(n,i,c,a,d);break e}else for(Zn=br(i.stateNode.containerInfo.firstChild),Kn=i,Yt=!0,_i=null,a=ip(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Gs(),c===d){i=rr(n,i,a);break e}Nn(n,i,c,a)}i=i.child}return i;case 5:return lp(i),n===null&&Zc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,Gc(c,d)?T=null:m!==null&&Gc(c,m)&&(i.flags|=32),Gp(n,i),Nn(n,i,T,a),i.child;case 6:return n===null&&Zc(i),null;case 13:return Xp(n,i,a);case 4:return su(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Hs(i,null,c,a):Nn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:vi(c,d),kp(n,i,c,d,a);case 7:return Nn(n,i,i.pendingProps,a),i.child;case 8:return Nn(n,i,i.pendingProps.children,a),i.child;case 12:return Nn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,Ht(Wo,c._currentValue),c._currentValue=T,m!==null)if(xi(m.value,T)){if(m.children===d.children&&!Bn.current){i=rr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var F=m.dependencies;if(F!==null){T=m.child;for(var G=F.firstContext;G!==null;){if(G.context===c){if(m.tag===1){G=ir(-1,a&-a),G.tag=2;var le=m.updateQueue;if(le!==null){le=le.shared;var ye=le.pending;ye===null?G.next=G:(G.next=ye.next,ye.next=G),le.pending=G}}m.lanes|=a,G=m.alternate,G!==null&&(G.lanes|=a),nu(m.return,a,i),F.lanes|=a;break}G=G.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=a,F=T.alternate,F!==null&&(F.lanes|=a),nu(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}Nn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,js(i,a),d=li(d),c=c(d),i.flags|=1,Nn(n,i,c,a),i.child;case 14:return c=i.type,d=vi(c,i.pendingProps),d=vi(c.type,d),Bp(n,i,c,d,a);case 15:return zp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:vi(c,d),nl(n,i),i.tag=1,zn(c)?(n=!0,ko(i)):n=!1,js(i,a),Np(i,c,d),_u(i,c,d,a),Mu(null,i,c,!0,n,a);case 19:return $p(n,i,a);case 22:return Vp(n,i,a)}throw Error(t(156,i.tag))};function _m(n,i){return Fn(n,i)}function o_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,i,a,c){return new o_(n,i,a,c)}function Gu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function l_(n){if(typeof n=="function")return Gu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===H)return 11;if(n===W)return 14}return 2}function Or(n,i){var a=n.alternate;return a===null?(a=di(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function hl(n,i,a,c,d,m){var T=2;if(c=n,typeof n=="function")Gu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case O:return ds(a.children,d,m,i);case E:T=8,d|=8;break;case U:return n=di(12,a,i,d|2),n.elementType=U,n.lanes=m,n;case se:return n=di(13,a,i,d),n.elementType=se,n.lanes=m,n;case oe:return n=di(19,a,i,d),n.elementType=oe,n.lanes=m,n;case q:return pl(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case X:T=10;break e;case I:T=9;break e;case H:T=11;break e;case W:T=14;break e;case Z:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=di(T,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function ds(n,i,a,c){return n=di(7,n,c,i),n.lanes=a,n}function pl(n,i,a,c){return n=di(22,n,c,i),n.elementType=q,n.lanes=a,n.stateNode={isHidden:!1},n}function Hu(n,i,a){return n=di(6,n,null,i),n.lanes=a,n}function Wu(n,i,a){return i=di(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function c_(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_n(0),this.expirationTimes=_n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ju(n,i,a,c,d,m,T,F,G){return n=new c_(n,i,a,F,G),i===1?(i=1,m===!0&&(i|=8)):i=0,m=di(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ru(m),n}function u_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function vm(n){if(!n)return Cr;n=n._reactInternals;e:{if(si(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(zn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(zn(a))return qh(n,a,i)}return i}function Sm(n,i,a,c,d,m,T,F,G){return n=ju(a,c,!0,n,d,m,T,F,G),n.context=vm(null),a=n.current,c=Ln(),d=Ur(a),m=ir(c,d),m.callback=i??null,Nr(a,m,d),n.current.lanes=d,xt(n,d,c),Hn(n,c),n}function ml(n,i,a,c){var d=i.current,m=Ln(),T=Ur(d);return a=vm(a),i.context===null?i.context=a:i.pendingContext=a,i=ir(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Nr(d,i,T),n!==null&&(Mi(n,d,T,m),Xo(n,d,T)),T}function gl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ym(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Xu(n,i){ym(n,i),(n=n.alternate)&&ym(n,i)}function d_(){return null}var Mm=typeof reportError=="function"?reportError:function(n){console.error(n)};function qu(n){this._internalRoot=n}xl.prototype.render=qu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ml(n,i,null,null)},xl.prototype.unmount=qu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ls(function(){ml(null,n,null,null)}),i[Qi]=null}};function xl(n){this._internalRoot=n}xl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ft();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Er.length&&i!==0&&i<Er[a].priority;a++);Er.splice(a,0,n),a===0&&lh(n)}};function $u(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Em(){}function f_(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var le=gl(T);m.call(le)}}var T=Sm(i,c,n,0,null,!1,!1,"",Em);return n._reactRootContainer=T,n[Qi]=T.current,Fa(n.nodeType===8?n.parentNode:n),ls(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var F=c;c=function(){var le=gl(G);F.call(le)}}var G=ju(n,0,!1,null,null,!1,!1,"",Em);return n._reactRootContainer=G,n[Qi]=G.current,Fa(n.nodeType===8?n.parentNode:n),ls(function(){ml(i,G,a,c)}),G}function vl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var F=d;d=function(){var G=gl(T);F.call(G)}}ml(i,T,n,d)}else T=f_(a,i,n,d,c);return gl(T)}Dt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Tt(i.pendingLanes);a!==0&&(kn(i,a|1),Hn(i,Zt()),(bt&6)===0&&(Ks=Zt()+500,Rr()))}break;case 13:ls(function(){var c=nr(n,1);if(c!==null){var d=Ln();Mi(c,n,1,d)}}),Xu(n,1)}},Wt=function(n){if(n.tag===13){var i=nr(n,134217728);if(i!==null){var a=Ln();Mi(i,n,134217728,a)}Xu(n,134217728)}},mi=function(n){if(n.tag===13){var i=Ur(n),a=nr(n,i);if(a!==null){var c=Ln();Mi(a,n,i,c)}Xu(n,i)}},Ft=function(){return _t},gi=function(n,i){var a=_t;try{return _t=n,i()}finally{_t=a}},rt=function(n,i,a){switch(i){case"input":if(Vt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Fo(c);if(!d)throw Error(t(90));kt(c),Vt(c,d)}}}break;case"textarea":De(n,a);break;case"select":i=a.value,i!=null&&It(n,!!a.multiple,i,!1)}},Ce=Bu,_e=ls;var h_={usingClientEntryPoint:!1,Events:[Ba,Os,Fo,he,Oe,Bu]},Ja={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p_={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=dt(n),n===null?null:n.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||d_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{te=Sl.inject(p_),Ne=Sl}catch{}}return Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h_,Wn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$u(i))throw Error(t(200));return u_(n,i,null,a)},Wn.createRoot=function(n,i){if(!$u(n))throw Error(t(299));var a=!1,c="",d=Mm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ju(n,1,!1,null,null,a,!1,c,d),n[Qi]=i.current,Fa(n.nodeType===8?n.parentNode:n),new qu(i)},Wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=dt(i),n=n===null?null:n.stateNode,n},Wn.flushSync=function(n){return ls(n)},Wn.hydrate=function(n,i,a){if(!_l(i))throw Error(t(200));return vl(null,n,i,!0,a)},Wn.hydrateRoot=function(n,i,a){if(!$u(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",T=Mm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=Sm(i,null,n,1,a??null,d,!1,m,T),n[Qi]=i.current,Fa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new xl(i)},Wn.render=function(n,i,a){if(!_l(i))throw Error(t(200));return vl(null,n,i,!1,a)},Wn.unmountComponentAtNode=function(n){if(!_l(n))throw Error(t(40));return n._reactRootContainer?(ls(function(){vl(null,null,n,!1,function(){n._reactRootContainer=null,n[Qi]=null})}),!0):!1},Wn.unstable_batchedUpdates=Bu,Wn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!_l(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return vl(n,i,a,!1,c)},Wn.version="18.3.1-next-f1338f8080-20240426",Wn}var Nm;function E_(){if(Nm)return Zu.exports;Nm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Zu.exports=M_(),Zu.exports}var Lm;function T_(){if(Lm)return yl;Lm=1;var s=E_();return yl.createRoot=s.createRoot,yl.hydrateRoot=s.hydrateRoot,yl}var w_=T_();const b_=zg(w_);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const If="184",A_=0,Dm=1,C_=2,Kl=1,R_=2,uo=3,Kr=0,Xn=1,fr=2,pr=0,fa=1,Im=2,Um=3,Fm=4,P_=5,xs=100,N_=101,L_=102,D_=103,I_=104,U_=200,F_=201,O_=202,k_=203,Bd=204,zd=205,B_=206,z_=207,V_=208,G_=209,H_=210,W_=211,j_=212,X_=213,q_=214,Vd=0,Gd=1,Hd=2,pa=3,Wd=4,jd=5,Xd=6,qd=7,Vg=0,$_=1,Y_=2,Hi=0,Gg=1,Hg=2,Wg=3,jg=4,Xg=5,qg=6,$g=7,Yg=300,Ts=301,ma=302,ed=303,td=304,pc=306,$d=1e3,hr=1001,Yd=1002,Mn=1003,K_=1004,Ml=1005,Rn=1006,nd=1007,Ss=1008,ii=1009,Kg=1010,Zg=1011,po=1012,Uf=1013,ji=1014,Vi=1015,gr=1016,Ff=1017,Of=1018,mo=1020,Qg=35902,Jg=35899,e0=1021,t0=1022,Ai=1023,xr=1026,ys=1027,n0=1028,kf=1029,ws=1030,Bf=1031,zf=1033,Zl=33776,Ql=33777,Jl=33778,ec=33779,Kd=35840,Zd=35841,Qd=35842,Jd=35843,ef=36196,tf=37492,nf=37496,rf=37488,sf=37489,nc=37490,af=37491,of=37808,lf=37809,cf=37810,uf=37811,df=37812,ff=37813,hf=37814,pf=37815,mf=37816,gf=37817,xf=37818,_f=37819,vf=37820,Sf=37821,yf=36492,Mf=36494,Ef=36495,Tf=36283,wf=36284,ic=36285,bf=36286,Z_=3200,Af=0,Q_=1,Xr="",hi="srgb",rc="srgb-linear",sc="linear",Ot="srgb",Qs=7680,Om=519,J_=512,ev=513,tv=514,Vf=515,nv=516,iv=517,Gf=518,rv=519,km=35044,Bm="300 es",Gi=2e3,go=2001;function sv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ac(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function av(){const s=ac("canvas");return s.style.display="block",s}const zm={};function Vm(...s){const e="THREE."+s.shift();console.log(e,...s)}function i0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function it(...s){s=i0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function At(...s){s=i0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Cf(...s){const e=s.join(" ");e in zm||(zm[e]=!0,it(...s))}function ov(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const lv={[Vd]:Gd,[Hd]:Xd,[Wd]:qd,[pa]:jd,[Gd]:Vd,[Xd]:Hd,[qd]:Wd,[jd]:pa};class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],id=Math.PI/180,Rf=180/Math.PI;function _o(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function St(s,e,t){return Math.max(e,Math.min(t,s))}function cv(s,e){return(s%e+e)%e}function rd(s,e,t){return(1-t)*s+t*e}function to(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const nh=class nh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nh.prototype.isVector2=!0;let Rt=nh;class Sa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],_=r[o+2],S=r[o+3],g=l[u+0],y=l[u+1],w=l[u+2],R=l[u+3];if(S!==R||h!==g||p!==y||_!==w){let v=h*g+p*y+_*w+S*R;v<0&&(g=-g,y=-y,w=-w,R=-R,v=-v);let x=1-f;if(v<.9995){const C=Math.acos(v),N=Math.sin(C);x=Math.sin(x*C)/N,f=Math.sin(f*C)/N,h=h*x+g*f,p=p*x+y*f,_=_*x+w*f,S=S*x+R*f}else{h=h*x+g*f,p=p*x+y*f,_=_*x+w*f,S=S*x+R*f;const C=1/Math.sqrt(h*h+p*p+_*_+S*S);h*=C,p*=C,_*=C,S*=C}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],_=r[o+3],S=l[u],g=l[u+1],y=l[u+2],w=l[u+3];return e[t]=f*w+_*S+h*y-p*g,e[t+1]=h*w+_*g+p*S-f*y,e[t+2]=p*w+_*y+f*g-h*S,e[t+3]=_*w-f*S-h*g-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),_=f(o/2),S=f(l/2),g=h(r/2),y=h(o/2),w=h(l/2);switch(u){case"XYZ":this._x=g*_*S+p*y*w,this._y=p*y*S-g*_*w,this._z=p*_*w+g*y*S,this._w=p*_*S-g*y*w;break;case"YXZ":this._x=g*_*S+p*y*w,this._y=p*y*S-g*_*w,this._z=p*_*w-g*y*S,this._w=p*_*S+g*y*w;break;case"ZXY":this._x=g*_*S-p*y*w,this._y=p*y*S+g*_*w,this._z=p*_*w+g*y*S,this._w=p*_*S-g*y*w;break;case"ZYX":this._x=g*_*S-p*y*w,this._y=p*y*S+g*_*w,this._z=p*_*w-g*y*S,this._w=p*_*S+g*y*w;break;case"YZX":this._x=g*_*S+p*y*w,this._y=p*y*S+g*_*w,this._z=p*_*w-g*y*S,this._w=p*_*S-g*y*w;break;case"XZY":this._x=g*_*S-p*y*w,this._y=p*y*S-g*_*w,this._z=p*_*w+g*y*S,this._w=p*_*S+g*y*w;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],_=t[6],S=t[10],g=r+f+S;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-h)*y,this._y=(l-p)*y,this._z=(u-o)*y}else if(r>f&&r>S){const y=2*Math.sqrt(1+r-f-S);this._w=(_-h)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+p)/y}else if(f>S){const y=2*Math.sqrt(1+f-r-S);this._w=(l-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(h+_)/y}else{const y=2*Math.sqrt(1+S-r-f);this._w=(u-o)/y,this._x=(l+p)/y,this._y=(h+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,_=t._w;return this._x=r*_+u*f+o*p-l*h,this._y=o*_+u*h+l*f-r*p,this._z=l*_+u*p+r*h-o*f,this._w=u*_-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),_=Math.sin(p);h=Math.sin(h*p)/_,t=Math.sin(t*p)/_,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ih=class ih{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),_=2*(f*t-l*o),S=2*(l*r-u*t);return this.x=t+h*p+u*S-f*_,this.y=r+h*_+f*p-l*S,this.z=o+h*S+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return sd.copy(this).projectOnVector(e),this.sub(sd)}reflect(e){return this.sub(sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ih.prototype.isVector3=!0;let Q=ih;const sd=new Q,Gm=new Sa,rh=class rh{constructor(e,t,r,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=t,_[4]=l,_[5]=h,_[6]=r,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],_=r[4],S=r[7],g=r[2],y=r[5],w=r[8],R=o[0],v=o[3],x=o[6],C=o[1],N=o[4],L=o[7],B=o[2],D=o[5],O=o[8];return l[0]=u*R+f*C+h*B,l[3]=u*v+f*N+h*D,l[6]=u*x+f*L+h*O,l[1]=p*R+_*C+S*B,l[4]=p*v+_*N+S*D,l[7]=p*x+_*L+S*O,l[2]=g*R+y*C+w*B,l[5]=g*v+y*N+w*D,l[8]=g*x+y*L+w*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8];return t*u*_-t*f*p-r*l*_+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8],S=_*u-f*p,g=f*h-_*l,y=p*l-u*h,w=t*S+r*g+o*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=S*R,e[1]=(o*p-_*r)*R,e[2]=(f*r-o*u)*R,e[3]=g*R,e[4]=(_*t-o*h)*R,e[5]=(o*l-f*t)*R,e[6]=y*R,e[7]=(r*h-p*t)*R,e[8]=(u*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(ad.makeScale(e,t)),this}rotate(e){return this.premultiply(ad.makeRotation(-e)),this}translate(e,t){return this.premultiply(ad.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};rh.prototype.isMatrix3=!0;let ft=rh;const ad=new ft,Hm=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wm=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uv(){const s={enabled:!0,workingColorSpace:rc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ot&&(o.r=mr(o.r),o.g=mr(o.g),o.b=mr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ot&&(o.r=ha(o.r),o.g=ha(o.g),o.b=ha(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Xr?sc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Cf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Cf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[rc]:{primaries:e,whitePoint:r,transfer:sc,toXYZ:Hm,fromXYZ:Wm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:Ot,toXYZ:Hm,fromXYZ:Wm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const Mt=uv();function mr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ha(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Js;class dv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Js===void 0&&(Js=ac("canvas")),Js.width=e.width,Js.height=e.height;const o=Js.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Js}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ac("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=mr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(mr(t[r]/255)*255):t[r]=mr(t[r]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fv=0;class Hf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=_o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(od(o[u].image)):l.push(od(o[u]))}else l=od(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function od(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let hv=0;const ld=new Q;class In extends bs{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,r=hr,o=hr,l=Rn,u=Ss,f=Ai,h=ii,p=In.DEFAULT_ANISOTROPY,_=Xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=_o(),this.name="",this.source=new Hf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ld).x}get height(){return this.source.getSize(ld).y}get depth(){return this.source.getSize(ld).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $d:e.x=e.x-Math.floor(e.x);break;case hr:e.x=e.x<0?0:1;break;case Yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $d:e.y=e.y-Math.floor(e.y);break;case hr:e.y=e.y<0?0:1;break;case Yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Yg;In.DEFAULT_ANISOTROPY=1;const sh=class sh{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],_=h[4],S=h[8],g=h[1],y=h[5],w=h[9],R=h[2],v=h[6],x=h[10];if(Math.abs(_-g)<.01&&Math.abs(S-R)<.01&&Math.abs(w-v)<.01){if(Math.abs(_+g)<.1&&Math.abs(S+R)<.1&&Math.abs(w+v)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(p+1)/2,L=(y+1)/2,B=(x+1)/2,D=(_+g)/4,O=(S+R)/4,E=(w+v)/4;return N>L&&N>B?N<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(N),o=D/r,l=O/r):L>B?L<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(L),r=D/o,l=E/o):B<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(B),r=O/l,o=E/l),this.set(r,o,l,t),this}let C=Math.sqrt((v-w)*(v-w)+(S-R)*(S-R)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(v-w)/C,this.y=(S-R)/C,this.z=(g-_)/C,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sh.prototype.isVector4=!0;let nn=sh;class pv extends bs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new In(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Hf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends pv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class r0 extends In{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mv extends In{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hc=class hc{constructor(e,t,r,o,l,u,f,h,p,_,S,g,y,w,R,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,_,S,g,y,w,R,v)}set(e,t,r,o,l,u,f,h,p,_,S,g,y,w,R,v){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=f,x[13]=h,x[2]=p,x[6]=_,x[10]=S,x[14]=g,x[3]=y,x[7]=w,x[11]=R,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ea.setFromMatrixColumn(e,0).length(),l=1/ea.setFromMatrixColumn(e,1).length(),u=1/ea.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),_=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const g=u*_,y=u*S,w=f*_,R=f*S;t[0]=h*_,t[4]=-h*S,t[8]=p,t[1]=y+w*p,t[5]=g-R*p,t[9]=-f*h,t[2]=R-g*p,t[6]=w+y*p,t[10]=u*h}else if(e.order==="YXZ"){const g=h*_,y=h*S,w=p*_,R=p*S;t[0]=g+R*f,t[4]=w*f-y,t[8]=u*p,t[1]=u*S,t[5]=u*_,t[9]=-f,t[2]=y*f-w,t[6]=R+g*f,t[10]=u*h}else if(e.order==="ZXY"){const g=h*_,y=h*S,w=p*_,R=p*S;t[0]=g-R*f,t[4]=-u*S,t[8]=w+y*f,t[1]=y+w*f,t[5]=u*_,t[9]=R-g*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const g=u*_,y=u*S,w=f*_,R=f*S;t[0]=h*_,t[4]=w*p-y,t[8]=g*p+R,t[1]=h*S,t[5]=R*p+g,t[9]=y*p-w,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,y=u*p,w=f*h,R=f*p;t[0]=h*_,t[4]=R-g*S,t[8]=w*S+y,t[1]=S,t[5]=u*_,t[9]=-f*_,t[2]=-p*_,t[6]=y*S+w,t[10]=g-R*S}else if(e.order==="XZY"){const g=u*h,y=u*p,w=f*h,R=f*p;t[0]=h*_,t[4]=-S,t[8]=p*_,t[1]=g*S+R,t[5]=u*_,t[9]=y*S-w,t[2]=w*S-y,t[6]=f*_,t[10]=R*S+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gv,e,xv)}lookAt(e,t,r){const o=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Br.crossVectors(r,Jn),Br.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Br.crossVectors(r,Jn)),Br.normalize(),El.crossVectors(Jn,Br),o[0]=Br.x,o[4]=El.x,o[8]=Jn.x,o[1]=Br.y,o[5]=El.y,o[9]=Jn.y,o[2]=Br.z,o[6]=El.z,o[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],_=r[1],S=r[5],g=r[9],y=r[13],w=r[2],R=r[6],v=r[10],x=r[14],C=r[3],N=r[7],L=r[11],B=r[15],D=o[0],O=o[4],E=o[8],U=o[12],X=o[1],I=o[5],H=o[9],se=o[13],oe=o[2],W=o[6],Z=o[10],q=o[14],Y=o[3],ce=o[7],ue=o[11],k=o[15];return l[0]=u*D+f*X+h*oe+p*Y,l[4]=u*O+f*I+h*W+p*ce,l[8]=u*E+f*H+h*Z+p*ue,l[12]=u*U+f*se+h*q+p*k,l[1]=_*D+S*X+g*oe+y*Y,l[5]=_*O+S*I+g*W+y*ce,l[9]=_*E+S*H+g*Z+y*ue,l[13]=_*U+S*se+g*q+y*k,l[2]=w*D+R*X+v*oe+x*Y,l[6]=w*O+R*I+v*W+x*ce,l[10]=w*E+R*H+v*Z+x*ue,l[14]=w*U+R*se+v*q+x*k,l[3]=C*D+N*X+L*oe+B*Y,l[7]=C*O+N*I+L*W+B*ce,l[11]=C*E+N*H+L*Z+B*ue,l[15]=C*U+N*se+L*q+B*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],_=e[2],S=e[6],g=e[10],y=e[14],w=e[3],R=e[7],v=e[11],x=e[15],C=h*y-p*g,N=f*y-p*S,L=f*g-h*S,B=u*y-p*_,D=u*g-h*_,O=u*S-f*_;return t*(R*C-v*N+x*L)-r*(w*C-v*B+x*D)+o*(w*N-R*B+x*O)-l*(w*L-R*D+v*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8],S=e[9],g=e[10],y=e[11],w=e[12],R=e[13],v=e[14],x=e[15],C=t*f-r*u,N=t*h-o*u,L=t*p-l*u,B=r*h-o*f,D=r*p-l*f,O=o*p-l*h,E=_*R-S*w,U=_*v-g*w,X=_*x-y*w,I=S*v-g*R,H=S*x-y*R,se=g*x-y*v,oe=C*se-N*H+L*I+B*X-D*U+O*E;if(oe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/oe;return e[0]=(f*se-h*H+p*I)*W,e[1]=(o*H-r*se-l*I)*W,e[2]=(R*O-v*D+x*B)*W,e[3]=(g*D-S*O-y*B)*W,e[4]=(h*X-u*se-p*U)*W,e[5]=(t*se-o*X+l*U)*W,e[6]=(v*L-w*O-x*N)*W,e[7]=(_*O-g*L+y*N)*W,e[8]=(u*H-f*X+p*E)*W,e[9]=(r*X-t*H-l*E)*W,e[10]=(w*D-R*L+x*C)*W,e[11]=(S*L-_*D-y*C)*W,e[12]=(f*U-u*I-h*E)*W,e[13]=(t*I-r*U+o*E)*W,e[14]=(R*N-w*B-v*C)*W,e[15]=(_*B-S*N+g*C)*W,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,_=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,_*f+r,_*h-o*u,0,p*h-o*f,_*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,_=u+u,S=f+f,g=l*p,y=l*_,w=l*S,R=u*_,v=u*S,x=f*S,C=h*p,N=h*_,L=h*S,B=r.x,D=r.y,O=r.z;return o[0]=(1-(R+x))*B,o[1]=(y+L)*B,o[2]=(w-N)*B,o[3]=0,o[4]=(y-L)*D,o[5]=(1-(g+x))*D,o[6]=(v+C)*D,o[7]=0,o[8]=(w+N)*O,o[9]=(v-C)*O,o[10]=(1-(g+R))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ea.set(o[0],o[1],o[2]).length();const f=ea.set(o[4],o[5],o[6]).length(),h=ea.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Ei.copy(this);const p=1/u,_=1/f,S=1/h;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=_,Ei.elements[5]*=_,Ei.elements[6]*=_,Ei.elements[8]*=S,Ei.elements[9]*=S,Ei.elements[10]*=S,t.setFromRotationMatrix(Ei),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,u,f=Gi,h=!1){const p=this.elements,_=2*l/(t-e),S=2*l/(r-o),g=(t+e)/(t-e),y=(r+o)/(r-o);let w,R;if(h)w=l/(u-l),R=u*l/(u-l);else if(f===Gi)w=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(f===go)w=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=S,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Gi,h=!1){const p=this.elements,_=2/(t-e),S=2/(r-o),g=-(t+e)/(t-e),y=-(r+o)/(r-o);let w,R;if(h)w=1/(u-l),R=u/(u-l);else if(f===Gi)w=-2/(u-l),R=-(u+l)/(u-l);else if(f===go)w=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=S,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=w,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};hc.prototype.isMatrix4=!0;let Kt=hc;const ea=new Q,Ei=new Kt,gv=new Q(0,0,0),xv=new Q(1,1,1),Br=new Q,El=new Q,Jn=new Q,jm=new Kt,Xm=new Sa;class Zr{constructor(e=0,t=0,r=0,o=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],_=o[9],S=o[2],g=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-St(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xm.setFromEuler(this),this.setFromQuaternion(Xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class s0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _v=0;const qm=new Q,ta=new Sa,ar=new Kt,Tl=new Q,no=new Q,vv=new Q,Sv=new Sa,$m=new Q(1,0,0),Ym=new Q(0,1,0),Km=new Q(0,0,1),Zm={type:"added"},yv={type:"removed"},na={type:"childadded",child:null},cd={type:"childremoved",child:null};class Pn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new Q,t=new Zr,r=new Sa,o=new Q(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ft}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new s0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis($m,e)}rotateY(e){return this.rotateOnAxis(Ym,e)}rotateZ(e){return this.rotateOnAxis(Km,e)}translateOnAxis(e,t){return qm.copy(e).applyQuaternion(this.quaternion),this.position.add(qm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($m,e)}translateY(e){return this.translateOnAxis(Ym,e)}translateZ(e){return this.translateOnAxis(Km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ar.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Tl.copy(e):Tl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ar.lookAt(no,Tl,this.up):ar.lookAt(Tl,no,this.up),this.quaternion.setFromRotationMatrix(ar),o&&(ar.extractRotation(o.matrixWorld),ta.setFromRotationMatrix(ar),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zm),na.child=e,this.dispatchEvent(na),na.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yv),cd.child=e,this.dispatchEvent(cd),cd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zm),na.child=e,this.dispatchEvent(na),na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,vv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,Sv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const S=h[p];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),_=u(e.images),S=u(e.shapes),g=u(e.skeletons),y=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(f){const h=[];for(const p in f){const _=f[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Pn.DEFAULT_UP=new Q(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fo extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mv={type:"move"};class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const v=t.getJointPose(R,r),x=this._getHandJoint(p,R);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}const _=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],g=_.position.distanceTo(S.position),y=.02,w=.005;p.inputState.pinching&&g>y+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=y-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Mv)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new fo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const a0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},wl={h:0,s:0,l:0};function dd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Mt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Mt.workingColorSpace){if(e=cv(e,1),t=St(t,0,1),r=St(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=dd(u,l,e+1/3),this.g=dd(u,l,e),this.b=dd(u,l,e-1/3)}return Mt.colorSpaceToWorking(this,o),this}setStyle(e,t=hi){function r(l){l!==void 0&&parseFloat(l)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const r=a0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Mt.workingToColorSpace(Cn.copy(this),e),Math.round(St(Cn.r*255,0,255))*65536+Math.round(St(Cn.g*255,0,255))*256+Math.round(St(Cn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(Cn.copy(this),t);const r=Cn.r,o=Cn.g,l=Cn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const _=(f+u)/2;if(f===u)h=0,p=0;else{const S=u-f;switch(p=_<=.5?S/(u+f):S/(2-u-f),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=hi){Mt.workingToColorSpace(Cn.copy(this),e);const t=Cn.r,r=Cn.g,o=Cn.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+t,zr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(zr),e.getHSL(wl);const r=rd(zr.h,wl.h,t),o=rd(zr.s,wl.s,t),l=rd(zr.l,wl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ct;Ct.NAMES=a0;class Ev extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ti=new Q,or=new Q,fd=new Q,lr=new Q,ia=new Q,ra=new Q,Qm=new Q,hd=new Q,pd=new Q,md=new Q,gd=new nn,xd=new nn,_d=new nn;class bi{constructor(e=new Q,t=new Q,r=new Q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ti.subVectors(e,t),o.cross(Ti);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ti.subVectors(o,t),or.subVectors(r,t),fd.subVectors(e,t);const u=Ti.dot(Ti),f=Ti.dot(or),h=Ti.dot(fd),p=or.dot(or),_=or.dot(fd),S=u*p-f*f;if(S===0)return l.set(0,0,0),null;const g=1/S,y=(p*h-f*_)*g,w=(u*_-f*h)*g;return l.set(1-y-w,w,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,lr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,lr.x),h.addScaledVector(u,lr.y),h.addScaledVector(f,lr.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return gd.setScalar(0),xd.setScalar(0),_d.setScalar(0),gd.fromBufferAttribute(e,t),xd.fromBufferAttribute(e,r),_d.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(gd,l.x),u.addScaledVector(xd,l.y),u.addScaledVector(_d,l.z),u}static isFrontFacing(e,t,r,o){return Ti.subVectors(r,t),or.subVectors(e,t),Ti.cross(or).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),or.subVectors(this.a,this.b),Ti.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return bi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;ia.subVectors(o,r),ra.subVectors(l,r),hd.subVectors(e,r);const h=ia.dot(hd),p=ra.dot(hd);if(h<=0&&p<=0)return t.copy(r);pd.subVectors(e,o);const _=ia.dot(pd),S=ra.dot(pd);if(_>=0&&S<=_)return t.copy(o);const g=h*S-_*p;if(g<=0&&h>=0&&_<=0)return u=h/(h-_),t.copy(r).addScaledVector(ia,u);md.subVectors(e,l);const y=ia.dot(md),w=ra.dot(md);if(w>=0&&y<=w)return t.copy(l);const R=y*p-h*w;if(R<=0&&p>=0&&w<=0)return f=p/(p-w),t.copy(r).addScaledVector(ra,f);const v=_*w-y*S;if(v<=0&&S-_>=0&&y-w>=0)return Qm.subVectors(l,o),f=(S-_)/(S-_+(y-w)),t.copy(o).addScaledVector(Qm,f);const x=1/(v+R+g);return u=R*x,f=g*x,t.copy(r).addScaledVector(ia,u).addScaledVector(ra,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class vo{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,wi):wi.fromBufferAttribute(l,u),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),bl.copy(r.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),Al.subVectors(this.max,io),sa.subVectors(e.a,io),aa.subVectors(e.b,io),oa.subVectors(e.c,io),Vr.subVectors(aa,sa),Gr.subVectors(oa,aa),fs.subVectors(sa,oa);let t=[0,-Vr.z,Vr.y,0,-Gr.z,Gr.y,0,-fs.z,fs.y,Vr.z,0,-Vr.x,Gr.z,0,-Gr.x,fs.z,0,-fs.x,-Vr.y,Vr.x,0,-Gr.y,Gr.x,0,-fs.y,fs.x,0];return!vd(t,sa,aa,oa,Al)||(t=[1,0,0,0,1,0,0,0,1],!vd(t,sa,aa,oa,Al))?!1:(Cl.crossVectors(Vr,Gr),t=[Cl.x,Cl.y,Cl.z],vd(t,sa,aa,oa,Al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cr=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],wi=new Q,bl=new vo,sa=new Q,aa=new Q,oa=new Q,Vr=new Q,Gr=new Q,fs=new Q,io=new Q,Al=new Q,Cl=new Q,hs=new Q;function vd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){hs.fromArray(s,l);const f=o.x*Math.abs(hs.x)+o.y*Math.abs(hs.y)+o.z*Math.abs(hs.z),h=e.dot(hs),p=t.dot(hs),_=r.dot(hs);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>f)return!1}return!0}const on=new Q,Rl=new Rt;let Tv=0;class Ri extends bs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=km,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Rl.fromBufferAttribute(this,t),Rl.applyMatrix3(e),this.setXY(t,Rl.x,Rl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=to(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=to(t,this.array)),t}setX(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=to(t,this.array)),t}setY(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=to(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=to(t,this.array)),t}setW(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),r=jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),r=jn(r,this.array),o=jn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),r=jn(r,this.array),o=jn(o,this.array),l=jn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==km&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class o0 extends Ri{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class l0 extends Ri{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class ri extends Ri{constructor(e,t,r){super(new Float32Array(e),t,r)}}const wv=new vo,ro=new Q,Sd=new Q;class So{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):wv.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);const t=ro.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ro,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(Sd)),this.expandByPoint(ro.copy(e.center).sub(Sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let bv=0;const fi=new Kt,yd=new Pn,la=new Q,ei=new vo,so=new vo,gn=new Q;class qn extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sv(e)?l0:o0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,r){return fi.makeTranslation(e,t,r),this.applyMatrix4(fi),this}scale(e,t,r){return fi.makeScale(e,t,r),this.applyMatrix4(fi),this}lookAt(e){return yd.lookAt(e),yd.updateMatrix(),this.applyMatrix4(yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(la).negate(),this.translate(la.x,la.y,la.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ri(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ei.setFromBufferAttribute(l),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];so.setFromBufferAttribute(f),this.morphTargetsRelative?(gn.addVectors(ei.min,so.min),ei.expandByPoint(gn),gn.addVectors(ei.max,so.max),ei.expandByPoint(gn)):(ei.expandByPoint(so.min),ei.expandByPoint(so.max))}ei.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)gn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(gn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)gn.fromBufferAttribute(f,p),h&&(la.fromBufferAttribute(e,p),gn.add(la)),o=Math.max(o,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let E=0;E<r.count;E++)f[E]=new Q,h[E]=new Q;const p=new Q,_=new Q,S=new Q,g=new Rt,y=new Rt,w=new Rt,R=new Q,v=new Q;function x(E,U,X){p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,U),S.fromBufferAttribute(r,X),g.fromBufferAttribute(l,E),y.fromBufferAttribute(l,U),w.fromBufferAttribute(l,X),_.sub(p),S.sub(p),y.sub(g),w.sub(g);const I=1/(y.x*w.y-w.x*y.y);isFinite(I)&&(R.copy(_).multiplyScalar(w.y).addScaledVector(S,-y.y).multiplyScalar(I),v.copy(S).multiplyScalar(y.x).addScaledVector(_,-w.x).multiplyScalar(I),f[E].add(R),f[U].add(R),f[X].add(R),h[E].add(v),h[U].add(v),h[X].add(v))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let E=0,U=C.length;E<U;++E){const X=C[E],I=X.start,H=X.count;for(let se=I,oe=I+H;se<oe;se+=3)x(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const N=new Q,L=new Q,B=new Q,D=new Q;function O(E){B.fromBufferAttribute(o,E),D.copy(B);const U=f[E];N.copy(U),N.sub(B.multiplyScalar(B.dot(U))).normalize(),L.crossVectors(D,U);const I=L.dot(h[E])<0?-1:1;u.setXYZW(E,N.x,N.y,N.z,I)}for(let E=0,U=C.length;E<U;++E){const X=C[E],I=X.start,H=X.count;for(let se=I,oe=I+H;se<oe;se+=3)O(e.getX(se+0)),O(e.getX(se+1)),O(e.getX(se+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const o=new Q,l=new Q,u=new Q,f=new Q,h=new Q,p=new Q,_=new Q,S=new Q;if(e)for(let g=0,y=e.count;g<y;g+=3){const w=e.getX(g+0),R=e.getX(g+1),v=e.getX(g+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,v),_.subVectors(u,l),S.subVectors(o,l),_.cross(S),f.fromBufferAttribute(r,w),h.fromBufferAttribute(r,R),p.fromBufferAttribute(r,v),f.add(_),h.add(_),p.add(_),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(v,p.x,p.y,p.z)}else for(let g=0,y=t.count;g<y;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),_.subVectors(u,l),S.subVectors(o,l),_.cross(S),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(f,h){const p=f.array,_=f.itemSize,S=f.normalized,g=new p.constructor(h.length*_);let y=0,w=0;for(let R=0,v=h.length;R<v;R++){f.isInterleavedBufferAttribute?y=h[R]*f.data.stride+f.offset:y=h[R]*_;for(let x=0;x<_;x++)g[w++]=p[y++]}return new Ri(g,_,S)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let _=0,S=p.length;_<S;_++){const g=p[_],y=e(g,r);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let S=0,g=p.length;S<g;S++){const y=p[S];_.push(y.toJSON(e.data))}_.length>0&&(o[h]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],S=l[p];for(let g=0,y=S.length;g<y;g++)_.push(S[g].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Av=0;class As extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=fa,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=zd,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==fa&&(r.blending=this.blending),this.side!==Kr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Bd&&(r.blendSrc=this.blendSrc),this.blendDst!==zd&&(r.blendDst=this.blendDst),this.blendEquation!==xs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==pa&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Om&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ur=new Q,Md=new Q,Pl=new Q,Hr=new Q,Ed=new Q,Nl=new Q,Td=new Q;class Wf{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Md.copy(e).add(t).multiplyScalar(.5),Pl.copy(t).sub(e).normalize(),Hr.copy(this.origin).sub(Md);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Pl),f=Hr.dot(this.direction),h=-Hr.dot(Pl),p=Hr.lengthSq(),_=Math.abs(1-u*u);let S,g,y,w;if(_>0)if(S=u*h-f,g=u*f-h,w=l*_,S>=0)if(g>=-w)if(g<=w){const R=1/_;S*=R,g*=R,y=S*(S+u*g+2*f)+g*(u*S+g+2*h)+p}else g=l,S=Math.max(0,-(u*g+f)),y=-S*S+g*(g+2*h)+p;else g=-l,S=Math.max(0,-(u*g+f)),y=-S*S+g*(g+2*h)+p;else g<=-w?(S=Math.max(0,-(-u*l+f)),g=S>0?-l:Math.min(Math.max(-l,-h),l),y=-S*S+g*(g+2*h)+p):g<=w?(S=0,g=Math.min(Math.max(-l,-h),l),y=g*(g+2*h)+p):(S=Math.max(0,-(u*l+f)),g=S>0?l:Math.min(Math.max(-l,-h),l),y=-S*S+g*(g+2*h)+p);else g=u>0?-l:l,S=Math.max(0,-(u*g+f)),y=-S*S+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(Md).addScaledVector(Pl,g),y}intersectSphere(e,t){ur.subVectors(e.center,this.origin);const r=ur.dot(this.direction),o=ur.dot(ur)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),_>=0?(l=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(l=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-g.z)*S,h=(e.max.z-g.z)*S):(f=(e.max.z-g.z)*S,h=(e.min.z-g.z)*S),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,r,o,l){Ed.subVectors(t,e),Nl.subVectors(r,e),Td.crossVectors(Ed,Nl);let u=this.direction.dot(Td),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Hr.subVectors(this.origin,e);const h=f*this.direction.dot(Nl.crossVectors(Hr,Nl));if(h<0)return null;const p=f*this.direction.dot(Ed.cross(Hr));if(p<0||h+p>u)return null;const _=-f*Hr.dot(Td);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class c0 extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=Vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jm=new Kt,ps=new Wf,Ll=new So,eg=new Q,Dl=new Q,Il=new Q,Ul=new Q,wd=new Q,Fl=new Q,tg=new Q,Ol=new Q;class Xi extends Pn{constructor(e=new qn,t=new c0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Fl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=f[h],S=l[h];_!==0&&(wd.fromBufferAttribute(S,e),u?Fl.addScaledVector(wd,_):Fl.addScaledVector(wd.sub(t),_))}t.add(Fl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ll.copy(r.boundingSphere),Ll.applyMatrix4(l),ps.copy(e.ray).recast(e.near),!(Ll.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Ll,eg)===null||ps.origin.distanceToSquared(eg)>(e.far-e.near)**2))&&(Jm.copy(l).invert(),ps.copy(e.ray).applyMatrix4(Jm),!(r.boundingBox!==null&&ps.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,S=l.attributes.normal,g=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,R=g.length;w<R;w++){const v=g[w],x=u[v.materialIndex],C=Math.max(v.start,y.start),N=Math.min(f.count,Math.min(v.start+v.count,y.start+y.count));for(let L=C,B=N;L<B;L+=3){const D=f.getX(L),O=f.getX(L+1),E=f.getX(L+2);o=kl(this,x,e,r,p,_,S,D,O,E),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),R=Math.min(f.count,y.start+y.count);for(let v=w,x=R;v<x;v+=3){const C=f.getX(v),N=f.getX(v+1),L=f.getX(v+2);o=kl(this,u,e,r,p,_,S,C,N,L),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,R=g.length;w<R;w++){const v=g[w],x=u[v.materialIndex],C=Math.max(v.start,y.start),N=Math.min(h.count,Math.min(v.start+v.count,y.start+y.count));for(let L=C,B=N;L<B;L+=3){const D=L,O=L+1,E=L+2;o=kl(this,x,e,r,p,_,S,D,O,E),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let v=w,x=R;v<x;v+=3){const C=v,N=v+1,L=v+2;o=kl(this,u,e,r,p,_,S,C,N,L),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function Cv(s,e,t,r,o,l,u,f){let h;if(e.side===Xn?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===Kr,f),h===null)return null;Ol.copy(f),Ol.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Ol);return p<t.near||p>t.far?null:{distance:p,point:Ol.clone(),object:s}}function kl(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,Dl),s.getVertexPosition(h,Il),s.getVertexPosition(p,Ul);const _=Cv(s,e,t,r,Dl,Il,Ul,tg);if(_){const S=new Q;bi.getBarycoord(tg,Dl,Il,Ul,S),o&&(_.uv=bi.getInterpolatedAttribute(o,f,h,p,S,new Rt)),l&&(_.uv1=bi.getInterpolatedAttribute(l,f,h,p,S,new Rt)),u&&(_.normal=bi.getInterpolatedAttribute(u,f,h,p,S,new Q),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new Q,materialIndex:0};bi.getNormal(Dl,Il,Ul,g.normal),_.face=g,_.barycoord=S}return _}class Rv extends In{constructor(e=null,t=1,r=1,o,l,u,f,h,p=Mn,_=Mn,S,g){super(null,u,f,h,p,_,o,l,S,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bd=new Q,Pv=new Q,Nv=new ft;class gs{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=bd.subVectors(r,t).cross(Pv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(bd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Nv.getNormalMatrix(e),o=this.coplanarPoint(bd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new So,Lv=new Rt(.5,.5),Bl=new Q;class jf{constructor(e=new gs,t=new gs,r=new gs,o=new gs,l=new gs,u=new gs){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Gi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],_=l[4],S=l[5],g=l[6],y=l[7],w=l[8],R=l[9],v=l[10],x=l[11],C=l[12],N=l[13],L=l[14],B=l[15];if(o[0].setComponents(p-u,y-_,x-w,B-C).normalize(),o[1].setComponents(p+u,y+_,x+w,B+C).normalize(),o[2].setComponents(p+f,y+S,x+R,B+N).normalize(),o[3].setComponents(p-f,y-S,x-R,B-N).normalize(),r)o[4].setComponents(h,g,v,L).normalize(),o[5].setComponents(p-h,y-g,x-v,B-L).normalize();else if(o[4].setComponents(p-h,y-g,x-v,B-L).normalize(),t===Gi)o[5].setComponents(p+h,y+g,x+v,B+L).normalize();else if(t===go)o[5].setComponents(h,g,v,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const t=Lv.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Bl.x=o.normal.x>0?e.max.x:e.min.x,Bl.y=o.normal.y>0?e.max.y:e.min.y,Bl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class u0 extends As{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oc=new Q,lc=new Q,ng=new Kt,ao=new Wf,zl=new So,Ad=new Q,ig=new Q;class Dv extends Pn{constructor(e=new qn,t=new u0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)oc.fromBufferAttribute(t,o-1),lc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=oc.distanceTo(lc);e.setAttribute("lineDistance",new ri(r,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zl.copy(r.boundingSphere),zl.applyMatrix4(o),zl.radius+=l,e.ray.intersectsSphere(zl)===!1)return;ng.copy(o).invert(),ao.copy(e.ray).applyMatrix4(ng);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,_=r.index,g=r.attributes.position;if(_!==null){const y=Math.max(0,u.start),w=Math.min(_.count,u.start+u.count);for(let R=y,v=w-1;R<v;R+=p){const x=_.getX(R),C=_.getX(R+1),N=Vl(this,e,ao,h,x,C,R);N&&t.push(N)}if(this.isLineLoop){const R=_.getX(w-1),v=_.getX(y),x=Vl(this,e,ao,h,R,v,w-1);x&&t.push(x)}}else{const y=Math.max(0,u.start),w=Math.min(g.count,u.start+u.count);for(let R=y,v=w-1;R<v;R+=p){const x=Vl(this,e,ao,h,R,R+1,R);x&&t.push(x)}if(this.isLineLoop){const R=Vl(this,e,ao,h,w-1,y,w-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Vl(s,e,t,r,o,l,u){const f=s.geometry.attributes.position;if(oc.fromBufferAttribute(f,o),lc.fromBufferAttribute(f,l),t.distanceSqToSegment(oc,lc,Ad,ig)>r)return;Ad.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Ad);if(!(p<e.near||p>e.far))return{distance:p,point:ig.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}class Iv extends Dv{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class d0 extends As{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rg=new Kt,Pf=new Wf,Gl=new So,Hl=new Q;class Uv extends Pn{constructor(e=new qn,t=new d0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gl.copy(r.boundingSphere),Gl.applyMatrix4(o),Gl.radius+=l,e.ray.intersectsSphere(Gl)===!1)return;rg.copy(o).invert(),Pf.copy(e.ray).applyMatrix4(rg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=r.index,S=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let w=g,R=y;w<R;w++){const v=p.getX(w);Hl.fromBufferAttribute(S,v),sg(Hl,v,h,o,e,t,this)}}else{const g=Math.max(0,u.start),y=Math.min(S.count,u.start+u.count);for(let w=g,R=y;w<R;w++)Hl.fromBufferAttribute(S,w),sg(Hl,w,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function sg(s,e,t,r,o,l,u){const f=Pf.distanceSqToPoint(s);if(f<t){const h=new Q;Pf.closestPointToPoint(s,h),h.applyMatrix4(r);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class f0 extends In{constructor(e=[],t=Ts,r,o,l,u,f,h,p,_){super(e,t,r,o,l,u,f,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ga extends In{constructor(e,t,r=ji,o,l,u,f=Mn,h=Mn,p,_=xr,S=1){if(_!==xr&&_!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:S};super(g,o,l,u,f,h,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fv extends ga{constructor(e,t=ji,r=Ts,o,l,u=Mn,f=Mn,h,p=xr){const _={width:e,height:e,depth:1},S=[_,_,_,_,_,_];super(e,e,t,r,o,l,u,f,h,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class h0 extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yo extends qn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],_=[],S=[];let g=0,y=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,o,u,2),w("x","z","y",1,-1,e,r,-t,o,u,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new ri(p,3)),this.setAttribute("normal",new ri(_,3)),this.setAttribute("uv",new ri(S,2));function w(R,v,x,C,N,L,B,D,O,E,U){const X=L/O,I=B/E,H=L/2,se=B/2,oe=D/2,W=O+1,Z=E+1;let q=0,Y=0;const ce=new Q;for(let ue=0;ue<Z;ue++){const k=ue*I-se;for(let ee=0;ee<W;ee++){const Ue=ee*X-H;ce[R]=Ue*C,ce[v]=k*N,ce[x]=oe,p.push(ce.x,ce.y,ce.z),ce[R]=0,ce[v]=0,ce[x]=D>0?1:-1,_.push(ce.x,ce.y,ce.z),S.push(ee/O),S.push(1-ue/E),q+=1}}for(let ue=0;ue<E;ue++)for(let k=0;k<O;k++){const ee=g+k+W*ue,Ue=g+k+W*(ue+1),Be=g+(k+1)+W*(ue+1),Ie=g+(k+1)+W*ue;h.push(ee,Ue,Ie),h.push(Ue,Be,Ie),Y+=6}f.addGroup(y,Y,U),y+=Y,g+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ov{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){it("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=r[o]-u,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===u)return o/(l-1);const _=r[o],g=r[o+1]-_,y=(u-_)/g;return(o+y)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),h=t||(u.isVector2?new Rt:new Q);return h.copy(f).sub(u).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new Q,o=[],l=[],u=[],f=new Q,h=new Kt;for(let y=0;y<=e;y++){const w=y/e;o[y]=this.getTangentAt(w,new Q)}l[0]=new Q,u[0]=new Q;let p=Number.MAX_VALUE;const _=Math.abs(o[0].x),S=Math.abs(o[0].y),g=Math.abs(o[0].z);_<=p&&(p=_,r.set(1,0,0)),S<=p&&(p=S,r.set(0,1,0)),g<=p&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),u[y]=u[y-1].clone(),f.crossVectors(o[y-1],o[y]),f.length()>Number.EPSILON){f.normalize();const w=Math.acos(St(o[y-1].dot(o[y]),-1,1));l[y].applyMatrix4(h.makeRotationAxis(f,w))}u[y].crossVectors(o[y],l[y])}if(t===!0){let y=Math.acos(St(l[0].dot(l[e]),-1,1));y/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(y=-y);for(let w=1;w<=e;w++)l[w].applyMatrix4(h.makeRotationAxis(o[w],y*w)),u[w].crossVectors(o[w],l[w])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class kv extends Ov{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Rt){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const _=Math.cos(this.aRotation),S=Math.sin(this.aRotation),g=h-this.aX,y=p-this.aY;h=g*_-y*S+this.aX,p=g*S+y*_+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class mc extends qn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,_=h+1,S=e/f,g=t/h,y=[],w=[],R=[],v=[];for(let x=0;x<_;x++){const C=x*g-u;for(let N=0;N<p;N++){const L=N*S-l;w.push(L,-C,0),R.push(0,0,1),v.push(N/f),v.push(1-x/h)}}for(let x=0;x<h;x++)for(let C=0;C<f;C++){const N=C+p*x,L=C+p*(x+1),B=C+1+p*(x+1),D=C+1+p*x;y.push(N,L,D),y.push(L,B,D)}this.setIndex(y),this.setAttribute("position",new ri(w,3)),this.setAttribute("normal",new ri(R,3)),this.setAttribute("uv",new ri(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xf extends qn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const _=[],S=new Q,g=new Q,y=[],w=[],R=[],v=[];for(let x=0;x<=r;x++){const C=[],N=x/r;let L=0;x===0&&u===0?L=.5/t:x===r&&h===Math.PI&&(L=-.5/t);for(let B=0;B<=t;B++){const D=B/t;S.x=-e*Math.cos(o+D*l)*Math.sin(u+N*f),S.y=e*Math.cos(u+N*f),S.z=e*Math.sin(o+D*l)*Math.sin(u+N*f),w.push(S.x,S.y,S.z),g.copy(S).normalize(),R.push(g.x,g.y,g.z),v.push(D+L,1-N),C.push(p++)}_.push(C)}for(let x=0;x<r;x++)for(let C=0;C<t;C++){const N=_[x][C+1],L=_[x][C],B=_[x+1][C],D=_[x+1][C+1];(x!==0||u>0)&&y.push(N,L,D),(x!==r-1||h<Math.PI)&&y.push(L,B,D)}this.setIndex(y),this.setAttribute("position",new ri(w,3)),this.setAttribute("normal",new ri(R,3)),this.setAttribute("uv",new ri(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function xa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(ag(o))o.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(ag(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Dn(s){const e={};for(let t=0;t<s.length;t++){const r=xa(s[t]);for(const o in r)e[o]=r[o]}return e}function ag(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Bv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function p0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const zv={clone:xa,merge:Dn};var Vv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vv,this.fragmentShader=Gv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xa(e.uniforms),this.uniformsGroups=Bv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Hv extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wv extends As{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Af,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jv extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xv extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class m0 extends Pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Cd=new Kt,og=new Q,lg=new Q;class qv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jf,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;og.setFromMatrixPosition(e.matrixWorld),t.position.copy(og),lg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lg),t.updateMatrixWorld(),Cd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===go||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wl=new Q,jl=new Sa,Oi=new Q;let g0=class extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wl,jl,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,jl,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Wl,jl,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,jl,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Wr=new Q,cg=new Rt,ug=new Rt;class ni extends g0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(id*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rf*2*Math.atan(Math.tan(id*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,t){return this.getViewBounds(e,cg,ug),t.subVectors(ug,cg)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(id*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class $v extends qv{constructor(){super(new ni(90,1,.5,500)),this.isPointLightShadow=!0}}class dg extends m0{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new $v}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class x0 extends g0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yv extends m0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ca=-90,ua=1;class Kv extends Pn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ni(ca,ua,e,t);o.layers=this.layers,this.add(o);const l=new ni(ca,ua,e,t);l.layers=this.layers,this.add(l);const u=new ni(ca,ua,e,t);u.layers=this.layers,this.add(u);const f=new ni(ca,ua,e,t);f.layers=this.layers,this.add(f);const h=new ni(ca,ua,e,t);h.layers=this.layers,this.add(h);const p=new ni(ca,ua,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===go)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,_]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(S,g,y),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Zv extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ah=class ah{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};ah.prototype.isMatrix2=!0;let fg=ah;function hg(s,e,t,r){const o=Qv(r);switch(t){case e0:return s*e;case n0:return s*e/o.components*o.byteLength;case kf:return s*e/o.components*o.byteLength;case ws:return s*e*2/o.components*o.byteLength;case Bf:return s*e*2/o.components*o.byteLength;case t0:return s*e*3/o.components*o.byteLength;case Ai:return s*e*4/o.components*o.byteLength;case zf:return s*e*4/o.components*o.byteLength;case Zl:case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jl:case ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zd:case Jd:return Math.max(s,16)*Math.max(e,8)/4;case Kd:case Qd:return Math.max(s,8)*Math.max(e,8)/2;case ef:case tf:case rf:case sf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case nf:case nc:case af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case of:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case cf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case uf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case df:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ff:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case hf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case pf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case mf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case gf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case _f:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case vf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Sf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case yf:case Mf:case Ef:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Tf:case wf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ic:case bf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qv(s){switch(s){case ii:case Kg:return{byteLength:1,components:1};case po:case Zg:case gr:return{byteLength:2,components:1};case Ff:case Of:return{byteLength:2,components:4};case ji:case Uf:case Vi:return{byteLength:4,components:1};case Qg:case Jg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:If}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=If);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _0(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Jv(s){const e=new WeakMap;function t(f,h){const p=f.array,_=f.usage,S=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,_),f.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,h,p){const _=h.array,S=h.updateRanges;if(s.bindBuffer(p,f),S.length===0)s.bufferSubData(p,0,_);else{S.sort((y,w)=>y.start-w.start);let g=0;for(let y=1;y<S.length;y++){const w=S[g],R=S[y];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++g,S[g]=R)}S.length=g+1;for(let y=0,w=S.length;y<w;y++){const R=S[y];s.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var eS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tS=`#ifdef USE_ALPHAHASH
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
#endif`,nS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aS=`#ifdef USE_AOMAP
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
#endif`,oS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lS=`#ifdef USE_BATCHING
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
#endif`,cS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hS=`#ifdef USE_IRIDESCENCE
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
#endif`,pS=`#ifdef USE_BUMPMAP
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
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,SS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,MS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ES=`#define PI 3.141592653589793
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
} // validated`,TS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wS=`vec3 transformedNormal = objectNormal;
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
#endif`,bS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PS="gl_FragColor = linearToOutputTexel( gl_FragColor );",NS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LS=`#ifdef USE_ENVMAP
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
#endif`,DS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,IS=`#ifdef USE_ENVMAP
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
#endif`,US=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FS=`#ifdef USE_ENVMAP
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
#endif`,OS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VS=`#ifdef USE_GRADIENTMAP
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
}`,GS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,XS=`#ifdef USE_ENVMAP
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
#endif`,qS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZS=`PhysicalMaterial material;
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
#endif`,QS=`uniform sampler2D dfgLUT;
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
}`,JS=`
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
#endif`,ey=`#if defined( RE_IndirectDiffuse )
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
#endif`,ty=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ny=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ry=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ay=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uy=`#if defined( USE_POINTS_UV )
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
#endif`,dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,py=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,my=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`#ifdef USE_MORPHTARGETS
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
#endif`,xy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_y=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ey=`#ifdef USE_NORMALMAP
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
#endif`,Ty=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,by=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ry=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ky=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,By=`float getShadowMask() {
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
}`,zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vy=`#ifdef USE_SKINNING
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
#endif`,Gy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hy=`#ifdef USE_SKINNING
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
#endif`,Wy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$y=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#ifdef USE_TRANSMISSION
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tM=`uniform sampler2D t2D;
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`#include <common>
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
}`,oM=`#if DEPTH_PACKING == 3200
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
}`,lM=`#define DISTANCE
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
}`,cM=`#define DISTANCE
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
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`uniform float scale;
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
}`,hM=`uniform vec3 diffuse;
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
}`,pM=`#include <common>
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
}`,mM=`uniform vec3 diffuse;
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
}`,gM=`#define LAMBERT
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
}`,xM=`#define LAMBERT
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
}`,_M=`#define MATCAP
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
}`,vM=`#define MATCAP
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
}`,SM=`#define NORMAL
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
}`,yM=`#define NORMAL
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
}`,MM=`#define PHONG
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
}`,EM=`#define PHONG
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
}`,TM=`#define STANDARD
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
}`,wM=`#define STANDARD
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
}`,bM=`#define TOON
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
}`,AM=`#define TOON
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
}`,CM=`uniform float size;
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
}`,RM=`uniform vec3 diffuse;
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
}`,PM=`#include <common>
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
}`,NM=`uniform vec3 color;
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
}`,LM=`uniform float rotation;
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
}`,DM=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:eS,alphahash_pars_fragment:tS,alphamap_fragment:nS,alphamap_pars_fragment:iS,alphatest_fragment:rS,alphatest_pars_fragment:sS,aomap_fragment:aS,aomap_pars_fragment:oS,batching_pars_vertex:lS,batching_vertex:cS,begin_vertex:uS,beginnormal_vertex:dS,bsdfs:fS,iridescence_fragment:hS,bumpmap_pars_fragment:pS,clipping_planes_fragment:mS,clipping_planes_pars_fragment:gS,clipping_planes_pars_vertex:xS,clipping_planes_vertex:_S,color_fragment:vS,color_pars_fragment:SS,color_pars_vertex:yS,color_vertex:MS,common:ES,cube_uv_reflection_fragment:TS,defaultnormal_vertex:wS,displacementmap_pars_vertex:bS,displacementmap_vertex:AS,emissivemap_fragment:CS,emissivemap_pars_fragment:RS,colorspace_fragment:PS,colorspace_pars_fragment:NS,envmap_fragment:LS,envmap_common_pars_fragment:DS,envmap_pars_fragment:IS,envmap_pars_vertex:US,envmap_physical_pars_fragment:XS,envmap_vertex:FS,fog_vertex:OS,fog_pars_vertex:kS,fog_fragment:BS,fog_pars_fragment:zS,gradientmap_pars_fragment:VS,lightmap_pars_fragment:GS,lights_lambert_fragment:HS,lights_lambert_pars_fragment:WS,lights_pars_begin:jS,lights_toon_fragment:qS,lights_toon_pars_fragment:$S,lights_phong_fragment:YS,lights_phong_pars_fragment:KS,lights_physical_fragment:ZS,lights_physical_pars_fragment:QS,lights_fragment_begin:JS,lights_fragment_maps:ey,lights_fragment_end:ty,lightprobes_pars_fragment:ny,logdepthbuf_fragment:iy,logdepthbuf_pars_fragment:ry,logdepthbuf_pars_vertex:sy,logdepthbuf_vertex:ay,map_fragment:oy,map_pars_fragment:ly,map_particle_fragment:cy,map_particle_pars_fragment:uy,metalnessmap_fragment:dy,metalnessmap_pars_fragment:fy,morphinstance_vertex:hy,morphcolor_vertex:py,morphnormal_vertex:my,morphtarget_pars_vertex:gy,morphtarget_vertex:xy,normal_fragment_begin:_y,normal_fragment_maps:vy,normal_pars_fragment:Sy,normal_pars_vertex:yy,normal_vertex:My,normalmap_pars_fragment:Ey,clearcoat_normal_fragment_begin:Ty,clearcoat_normal_fragment_maps:wy,clearcoat_pars_fragment:by,iridescence_pars_fragment:Ay,opaque_fragment:Cy,packing:Ry,premultiplied_alpha_fragment:Py,project_vertex:Ny,dithering_fragment:Ly,dithering_pars_fragment:Dy,roughnessmap_fragment:Iy,roughnessmap_pars_fragment:Uy,shadowmap_pars_fragment:Fy,shadowmap_pars_vertex:Oy,shadowmap_vertex:ky,shadowmask_pars_fragment:By,skinbase_vertex:zy,skinning_pars_vertex:Vy,skinning_vertex:Gy,skinnormal_vertex:Hy,specularmap_fragment:Wy,specularmap_pars_fragment:jy,tonemapping_fragment:Xy,tonemapping_pars_fragment:qy,transmission_fragment:$y,transmission_pars_fragment:Yy,uv_pars_fragment:Ky,uv_pars_vertex:Zy,uv_vertex:Qy,worldpos_vertex:Jy,background_vert:eM,background_frag:tM,backgroundCube_vert:nM,backgroundCube_frag:iM,cube_vert:rM,cube_frag:sM,depth_vert:aM,depth_frag:oM,distance_vert:lM,distance_frag:cM,equirect_vert:uM,equirect_frag:dM,linedashed_vert:fM,linedashed_frag:hM,meshbasic_vert:pM,meshbasic_frag:mM,meshlambert_vert:gM,meshlambert_frag:xM,meshmatcap_vert:_M,meshmatcap_frag:vM,meshnormal_vert:SM,meshnormal_frag:yM,meshphong_vert:MM,meshphong_frag:EM,meshphysical_vert:TM,meshphysical_frag:wM,meshtoon_vert:bM,meshtoon_frag:AM,points_vert:CM,points_frag:RM,shadow_vert:PM,shadow_frag:NM,sprite_vert:LM,sprite_frag:DM},ke={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},zi={basic:{uniforms:Dn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Dn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Dn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Dn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Dn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Dn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Dn([ke.points,ke.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Dn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Dn([ke.common,ke.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Dn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Dn([ke.sprite,ke.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Dn([ke.common,ke.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Dn([ke.lights,ke.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};zi.physical={uniforms:Dn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Xl={r:0,b:0,g:0},IM=new Kt,v0=new ft;v0.set(-1,0,0,0,1,0,0,0,1);function UM(s,e,t,r,o,l){const u=new Ct(0);let f=o===!0?0:1,h,p,_=null,S=0,g=null;function y(C){let N=C.isScene===!0?C.background:null;if(N&&N.isTexture){const L=C.backgroundBlurriness>0;N=e.get(N,L)}return N}function w(C){let N=!1;const L=y(C);L===null?v(u,f):L&&L.isColor&&(v(L,1),N=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?t.buffers.color.setClear(0,0,0,1,l):B==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(C,N){const L=y(N);L&&(L.isCubeTexture||L.mapping===pc)?(p===void 0&&(p=new Xi(new yo(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:xa(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=L,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(IM.makeRotationFromEuler(N.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(v0),p.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Ot,(_!==L||S!==L.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,_=L,S=L.version,g=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new Xi(new mc(2,2),new qi({name:"BackgroundMaterial",uniforms:xa(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Ot,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||S!==L.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,_=L,S=L.version,g=s.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function v(C,N){C.getRGB(Xl,p0(s)),t.buffers.color.setClear(Xl.r,Xl.g,Xl.b,N,l)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,N=1){u.set(C),f=N,v(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,v(u,f)},render:w,addToRenderList:R,dispose:x}}function FM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(I,H,se,oe,W){let Z=!1;const q=S(I,oe,se,H);l!==q&&(l=q,p(l.object)),Z=y(I,oe,se,W),Z&&w(I,oe,se,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,L(I,H,se,oe),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function h(){return s.createVertexArray()}function p(I){return s.bindVertexArray(I)}function _(I){return s.deleteVertexArray(I)}function S(I,H,se,oe){const W=oe.wireframe===!0;let Z=r[H.id];Z===void 0&&(Z={},r[H.id]=Z);const q=I.isInstancedMesh===!0?I.id:0;let Y=Z[q];Y===void 0&&(Y={},Z[q]=Y);let ce=Y[se.id];ce===void 0&&(ce={},Y[se.id]=ce);let ue=ce[W];return ue===void 0&&(ue=g(h()),ce[W]=ue),ue}function g(I){const H=[],se=[],oe=[];for(let W=0;W<t;W++)H[W]=0,se[W]=0,oe[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:se,attributeDivisors:oe,object:I,attributes:{},index:null}}function y(I,H,se,oe){const W=l.attributes,Z=H.attributes;let q=0;const Y=se.getAttributes();for(const ce in Y)if(Y[ce].location>=0){const k=W[ce];let ee=Z[ce];if(ee===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),k===void 0||k.attribute!==ee||ee&&k.data!==ee.data)return!0;q++}return l.attributesNum!==q||l.index!==oe}function w(I,H,se,oe){const W={},Z=H.attributes;let q=0;const Y=se.getAttributes();for(const ce in Y)if(Y[ce].location>=0){let k=Z[ce];k===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(k=I.instanceColor));const ee={};ee.attribute=k,k&&k.data&&(ee.data=k.data),W[ce]=ee,q++}l.attributes=W,l.attributesNum=q,l.index=oe}function R(){const I=l.newAttributes;for(let H=0,se=I.length;H<se;H++)I[H]=0}function v(I){x(I,0)}function x(I,H){const se=l.newAttributes,oe=l.enabledAttributes,W=l.attributeDivisors;se[I]=1,oe[I]===0&&(s.enableVertexAttribArray(I),oe[I]=1),W[I]!==H&&(s.vertexAttribDivisor(I,H),W[I]=H)}function C(){const I=l.newAttributes,H=l.enabledAttributes;for(let se=0,oe=H.length;se<oe;se++)H[se]!==I[se]&&(s.disableVertexAttribArray(se),H[se]=0)}function N(I,H,se,oe,W,Z,q){q===!0?s.vertexAttribIPointer(I,H,se,W,Z):s.vertexAttribPointer(I,H,se,oe,W,Z)}function L(I,H,se,oe){R();const W=oe.attributes,Z=se.getAttributes(),q=H.defaultAttributeValues;for(const Y in Z){const ce=Z[Y];if(ce.location>=0){let ue=W[Y];if(ue===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor)),ue!==void 0){const k=ue.normalized,ee=ue.itemSize,Ue=e.get(ue);if(Ue===void 0)continue;const Be=Ue.buffer,Ie=Ue.type,re=Ue.bytesPerElement,Se=Ie===s.INT||Ie===s.UNSIGNED_INT||ue.gpuType===Uf;if(ue.isInterleavedBufferAttribute){const ge=ue.data,Fe=ge.stride,Ze=ue.offset;if(ge.isInstancedInterleavedBuffer){for(let Ye=0;Ye<ce.locationSize;Ye++)x(ce.location+Ye,ge.meshPerAttribute);I.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ye=0;Ye<ce.locationSize;Ye++)v(ce.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,Be);for(let Ye=0;Ye<ce.locationSize;Ye++)N(ce.location+Ye,ee/ce.locationSize,Ie,k,Fe*re,(Ze+ee/ce.locationSize*Ye)*re,Se)}else{if(ue.isInstancedBufferAttribute){for(let ge=0;ge<ce.locationSize;ge++)x(ce.location+ge,ue.meshPerAttribute);I.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<ce.locationSize;ge++)v(ce.location+ge);s.bindBuffer(s.ARRAY_BUFFER,Be);for(let ge=0;ge<ce.locationSize;ge++)N(ce.location+ge,ee/ce.locationSize,Ie,k,ee*re,ee/ce.locationSize*ge*re,Se)}}else if(q!==void 0){const k=q[Y];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(ce.location,k);break;case 3:s.vertexAttrib3fv(ce.location,k);break;case 4:s.vertexAttrib4fv(ce.location,k);break;default:s.vertexAttrib1fv(ce.location,k)}}}}C()}function B(){U();for(const I in r){const H=r[I];for(const se in H){const oe=H[se];for(const W in oe){const Z=oe[W];for(const q in Z)_(Z[q].object),delete Z[q];delete oe[W]}}delete r[I]}}function D(I){if(r[I.id]===void 0)return;const H=r[I.id];for(const se in H){const oe=H[se];for(const W in oe){const Z=oe[W];for(const q in Z)_(Z[q].object),delete Z[q];delete oe[W]}}delete r[I.id]}function O(I){for(const H in r){const se=r[H];for(const oe in se){const W=se[oe];if(W[I.id]===void 0)continue;const Z=W[I.id];for(const q in Z)_(Z[q].object),delete Z[q];delete W[I.id]}}}function E(I){for(const H in r){const se=r[H],oe=I.isInstancedMesh===!0?I.id:0,W=se[oe];if(W!==void 0){for(const Z in W){const q=W[Z];for(const Y in q)_(q[Y].object),delete q[Y];delete W[Z]}delete se[oe],Object.keys(se).length===0&&delete r[H]}}}function U(){X(),u=!0,l!==o&&(l=o,p(l.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:U,resetDefaultState:X,dispose:B,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:v,disableUnusedAttributes:C}}function OM(s,e,t){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,_){_!==0&&(s.drawArraysInstanced(r,h,p,_),t.update(p,r,_))}function f(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,_);let g=0;for(let y=0;y<_;y++)g+=p[y];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function kM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Ai&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const E=O===gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ii&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Vi&&!E)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(it("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const S=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:L,maxSamples:B,samples:D}}function BM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new gs,f=new ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const y=S.length!==0||g||r!==0||o;return o=g,r=S.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,g){t=_(S,g,0)},this.setState=function(S,g,y){const w=S.clippingPlanes,R=S.clipIntersection,v=S.clipShadows,x=s.get(S);if(!o||w===null||w.length===0||l&&!v)l?_(null):p();else{const C=l?0:r,N=C*4;let L=x.clippingState||null;h.value=L,L=_(w,g,N,y);for(let B=0;B!==N;++B)L[B]=t[B];x.clippingState=L,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=C}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(S,g,y,w){const R=S!==null?S.length:0;let v=null;if(R!==0){if(v=h.value,w!==!0||v===null){const x=y+R*4,C=g.matrixWorldInverse;f.getNormalMatrix(C),(v===null||v.length<x)&&(v=new Float32Array(x));for(let N=0,L=y;N!==R;++N,L+=4)u.copy(S[N]).applyMatrix4(C,f),u.normal.toArray(v,L),v[L+3]=u.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}const $r=4,pg=[.125,.215,.35,.446,.526,.582],_s=20,zM=256,oo=new x0,mg=new Ct;let Rd=null,Pd=0,Nd=0,Ld=!1;const VM=new Q;class gg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=VM}=l;Rd=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rd,Pd,Nd),this._renderer.xr.enabled=Ld,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rd=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:gr,format:Ai,colorSpace:rc,depthBuffer:!1},o=xg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xg(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=GM(l)),this._blurMaterial=WM(l,e,t),this._ggxMaterial=HM(l,e,t)}return o}_compileMaterial(e){const t=new Xi(new qn,e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,r,o,l){const h=new ni(90,1,t,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,y=S.toneMapping;S.getClearColor(mg),S.toneMapping=Hi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xi(new yo,new c0({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,v=R.material;let x=!1;const C=e.background;C?C.isColor&&(v.color.copy(C),e.background=null,x=!0):(v.color.copy(mg),x=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(h.up.set(0,p[N],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[N],l.y,l.z)):L===1?(h.up.set(0,0,p[N]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[N],l.z)):(h.up.set(0,p[N],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[N]));const B=this._cubeSize;da(o,L*B,N>2?B:0,B,B),S.setRenderTarget(o),x&&S.render(R,h),S.render(e,h)}S.toneMapping=y,S.autoClear=g,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ts||e.mapping===ma;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_g());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;da(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,oo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),S=Math.sqrt(p*p-_*_),g=0+p*1.25,y=S*g,{_lodMax:w}=this,R=this._sizeLods[r],v=3*R*(r>w-$r?r-w+$r:0),x=4*(this._cubeSize-R);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=w-t,da(l,v,x,3*R,2*R),o.setRenderTarget(l),o.render(f,oo),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=w-r,da(e,v,x,3*R,2*R),o.setRenderTarget(e),o.render(f,oo)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const _=3,S=this._lodMeshes[o];S.material=p;const g=p.uniforms,y=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*_s-1),R=l/w,v=isFinite(l)?1+Math.floor(_*R):_s;v>_s&&it(`sigmaRadians, ${l}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${_s}`);const x=[];let C=0;for(let O=0;O<_s;++O){const E=O/R,U=Math.exp(-E*E/2);x.push(U),O===0?C+=U:O<v&&(C+=2*U)}for(let O=0;O<x.length;O++)x[O]=x[O]/C;g.envMap.value=e.texture,g.samples.value=v,g.weights.value=x,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:N}=this;g.dTheta.value=w,g.mipInt.value=N-r;const L=this._sizeLods[o],B=3*L*(o>N-$r?o-N+$r:0),D=4*(this._cubeSize-L);da(t,B,D,3*L,2*L),h.setRenderTarget(t),h.render(S,oo)}}function GM(s){const e=[],t=[],r=[];let o=s;const l=s-$r+1+pg.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>s-$r?h=pg[u-s+$r-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),_=-p,S=1+p,g=[_,_,S,_,S,S,_,_,S,S,_,S],y=6,w=6,R=3,v=2,x=1,C=new Float32Array(R*w*y),N=new Float32Array(v*w*y),L=new Float32Array(x*w*y);for(let D=0;D<y;D++){const O=D%3*2/3-1,E=D>2?0:-1,U=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];C.set(U,R*w*D),N.set(g,v*w*D);const X=[D,D,D,D,D,D];L.set(X,x*w*D)}const B=new qn;B.setAttribute("position",new Ri(C,R)),B.setAttribute("uv",new Ri(N,v)),B.setAttribute("faceIndex",new Ri(L,x)),r.push(new Xi(B,null)),o>$r&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function xg(s,e,t){const r=new Wi(s,e,t);return r.texture.mapping=pc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function da(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function HM(s,e,t){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function WM(s,e,t){const r=new Float32Array(_s),o=new Q(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:gc(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function _g(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function vg(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}class S0 extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new f0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new yo(5,5,5),l=new qi({name:"CubemapFromEquirect",uniforms:xa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:pr});l.uniforms.tEquirect.value=t;const u=new Xi(o,l),f=t.minFilter;return t.minFilter===Ss&&(t.minFilter=Rn),new Kv(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function jM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,y=!1){return g==null?null:y?u(g):l(g)}function l(g){if(g&&g.isTexture){const y=g.mapping;if(y===ed||y===td)if(e.has(g)){const w=e.get(g).texture;return f(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const R=new S0(w.height);return R.fromEquirectangularTexture(s,g),e.set(g,R),g.addEventListener("dispose",p),f(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const y=g.mapping,w=y===ed||y===td,R=y===Ts||y===ma;if(w||R){let v=t.get(g);const x=v!==void 0?v.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new gg(s)),v=w?r.fromEquirectangular(g,v):r.fromCubemap(g,v),v.texture.pmremVersion=g.pmremVersion,t.set(g,v),v.texture;if(v!==void 0)return v.texture;{const C=g.image;return w&&C&&C.height>0||R&&C&&h(C)?(r===null&&(r=new gg(s)),v=w?r.fromEquirectangular(g):r.fromCubemap(g),v.texture.pmremVersion=g.pmremVersion,t.set(g,v),g.addEventListener("dispose",_),v.texture):null}}}return g}function f(g,y){return y===ed?g.mapping=Ts:y===td&&(g.mapping=ma),g}function h(g){let y=0;const w=6;for(let R=0;R<w;R++)g[R]!==void 0&&y++;return y===w}function p(g){const y=g.target;y.removeEventListener("dispose",p);const w=e.get(y);w!==void 0&&(e.delete(y),w.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const w=t.get(y);w!==void 0&&(t.delete(y),w.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function XM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Cf("WebGLRenderer: "+r+" extension not supported."),o}}}function qM(s,e,t,r){const o={},l=new WeakMap;function u(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",u),delete o[g.id];const y=l.get(g);y&&(e.remove(y),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(S,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function h(S){const g=S.attributes;for(const y in g)e.update(g[y],s.ARRAY_BUFFER)}function p(S){const g=[],y=S.index,w=S.attributes.position;let R=0;if(w===void 0)return;if(y!==null){const C=y.array;R=y.version;for(let N=0,L=C.length;N<L;N+=3){const B=C[N+0],D=C[N+1],O=C[N+2];g.push(B,D,D,O,O,B)}}else{const C=w.array;R=w.version;for(let N=0,L=C.length/3-1;N<L;N+=3){const B=N+0,D=N+1,O=N+2;g.push(B,D,D,O,O,B)}}const v=new(w.count>=65535?l0:o0)(g,1);v.version=R;const x=l.get(S);x&&e.remove(x),l.set(S,v)}function _(S){const g=l.get(S);if(g){const y=S.index;y!==null&&g.version<y.version&&p(S)}else p(S);return l.get(S)}return{get:f,update:h,getWireframeAttribute:_}}function $M(s,e,t){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function h(S,g){s.drawElements(r,g,l,S*u),t.update(g,r,1)}function p(S,g,y){y!==0&&(s.drawElementsInstanced(r,g,l,S*u,y),t.update(g,r,y))}function _(S,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,S,0,y);let R=0;for(let v=0;v<y;v++)R+=g[v];t.update(R,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=_}function YM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:At("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function KM(s,e,t){const r=new WeakMap,o=new nn;function l(u,f,h){const p=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=_!==void 0?_.length:0;let g=r.get(f);if(g===void 0||g.count!==S){let X=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",X)};var y=X;g!==void 0&&g.texture.dispose();const w=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let L=0;w===!0&&(L=1),R===!0&&(L=2),v===!0&&(L=3);let B=f.attributes.position.count*L,D=1;B>e.maxTextureSize&&(D=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const O=new Float32Array(B*D*4*S),E=new r0(O,B,D,S);E.type=Vi,E.needsUpdate=!0;const U=L*4;for(let I=0;I<S;I++){const H=x[I],se=C[I],oe=N[I],W=B*D*4*I;for(let Z=0;Z<H.count;Z++){const q=Z*U;w===!0&&(o.fromBufferAttribute(H,Z),O[W+q+0]=o.x,O[W+q+1]=o.y,O[W+q+2]=o.z,O[W+q+3]=0),R===!0&&(o.fromBufferAttribute(se,Z),O[W+q+4]=o.x,O[W+q+5]=o.y,O[W+q+6]=o.z,O[W+q+7]=0),v===!0&&(o.fromBufferAttribute(oe,Z),O[W+q+8]=o.x,O[W+q+9]=o.y,O[W+q+10]=o.z,O[W+q+11]=oe.itemSize===4?o.w:1)}}g={count:S,texture:E,size:new Rt(B,D)},r.set(f,g),f.addEventListener("dispose",X)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let v=0;v<p.length;v++)w+=p[v];const R=f.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",R),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function ZM(s,e,t,r,o){let l=new WeakMap;function u(p){const _=o.render.frame,S=p.geometry,g=e.get(p,S);if(l.get(g)!==_&&(e.update(g),l.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==_&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==_&&(y.update(),l.set(y,_))}return g}function f(){l=new WeakMap}function h(p){const _=p.target;_.removeEventListener("dispose",h),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:u,dispose:f}}const QM={[Gg]:"LINEAR_TONE_MAPPING",[Hg]:"REINHARD_TONE_MAPPING",[Wg]:"CINEON_TONE_MAPPING",[jg]:"ACES_FILMIC_TONE_MAPPING",[qg]:"AGX_TONE_MAPPING",[$g]:"NEUTRAL_TONE_MAPPING",[Xg]:"CUSTOM_TONE_MAPPING"};function JM(s,e,t,r,o){const l=new Wi(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new ga(e,t):void 0}),u=new Wi(e,t,{type:gr,depthBuffer:!1,stencilBuffer:!1}),f=new qn;f.setAttribute("position",new ri([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ri([0,2,0,0,2,0],2));const h=new Hv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Xi(f,h),_=new x0(-1,1,1,-1,0,1);let S=null,g=null,y=!1,w,R=null,v=[],x=!1;this.setSize=function(C,N){l.setSize(C,N),u.setSize(C,N);for(let L=0;L<v.length;L++){const B=v[L];B.setSize&&B.setSize(C,N)}},this.setEffects=function(C){v=C,x=v.length>0&&v[0].isRenderPass===!0;const N=l.width,L=l.height;for(let B=0;B<v.length;B++){const D=v[B];D.setSize&&D.setSize(N,L)}},this.begin=function(C,N){if(y||C.toneMapping===Hi&&v.length===0)return!1;if(R=N,N!==null){const L=N.width,B=N.height;(l.width!==L||l.height!==B)&&this.setSize(L,B)}return x===!1&&C.setRenderTarget(l),w=C.toneMapping,C.toneMapping=Hi,!0},this.hasRenderPass=function(){return x},this.end=function(C,N){C.toneMapping=w,y=!0;let L=l,B=u;for(let D=0;D<v.length;D++){const O=v[D];if(O.enabled!==!1&&(O.render(C,B,L,N),O.needsSwap!==!1)){const E=L;L=B,B=E}}if(S!==C.outputColorSpace||g!==C.toneMapping){S=C.outputColorSpace,g=C.toneMapping,h.defines={},Mt.getTransfer(S)===Ot&&(h.defines.SRGB_TRANSFER="");const D=QM[g];D&&(h.defines[D]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(R),C.render(p,_),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const y0=new In,Nf=new ga(1,1),M0=new r0,E0=new mv,T0=new f0,Sg=[],yg=[],Mg=new Float32Array(16),Eg=new Float32Array(9),Tg=new Float32Array(4);function ya(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Sg[o];if(l===void 0&&(l=new Float32Array(o),Sg[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function dn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function fn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function xc(s,e){let t=yg[e];t===void 0&&(t=new Int32Array(e),yg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function e1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function t1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2fv(this.addr,e),fn(t,e)}}function n1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;s.uniform3fv(this.addr,e),fn(t,e)}}function i1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4fv(this.addr,e),fn(t,e)}}function r1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,r))return;Tg.set(r),s.uniformMatrix2fv(this.addr,!1,Tg),fn(t,r)}}function s1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,r))return;Eg.set(r),s.uniformMatrix3fv(this.addr,!1,Eg),fn(t,r)}}function a1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,r))return;Mg.set(r),s.uniformMatrix4fv(this.addr,!1,Mg),fn(t,r)}}function o1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function l1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2iv(this.addr,e),fn(t,e)}}function c1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;s.uniform3iv(this.addr,e),fn(t,e)}}function u1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4iv(this.addr,e),fn(t,e)}}function d1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function f1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2uiv(this.addr,e),fn(t,e)}}function h1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;s.uniform3uiv(this.addr,e),fn(t,e)}}function p1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4uiv(this.addr,e),fn(t,e)}}function m1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Nf.compareFunction=t.isReversedDepthBuffer()?Gf:Vf,l=Nf):l=y0,t.setTexture2D(e||l,o)}function g1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||E0,o)}function x1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||T0,o)}function _1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||M0,o)}function v1(s){switch(s){case 5126:return e1;case 35664:return t1;case 35665:return n1;case 35666:return i1;case 35674:return r1;case 35675:return s1;case 35676:return a1;case 5124:case 35670:return o1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return u1;case 5125:return d1;case 36294:return f1;case 36295:return h1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return x1;case 36289:case 36303:case 36311:case 36292:return _1}}function S1(s,e){s.uniform1fv(this.addr,e)}function y1(s,e){const t=ya(e,this.size,2);s.uniform2fv(this.addr,t)}function M1(s,e){const t=ya(e,this.size,3);s.uniform3fv(this.addr,t)}function E1(s,e){const t=ya(e,this.size,4);s.uniform4fv(this.addr,t)}function T1(s,e){const t=ya(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function w1(s,e){const t=ya(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function b1(s,e){const t=ya(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function A1(s,e){s.uniform1iv(this.addr,e)}function C1(s,e){s.uniform2iv(this.addr,e)}function R1(s,e){s.uniform3iv(this.addr,e)}function P1(s,e){s.uniform4iv(this.addr,e)}function N1(s,e){s.uniform1uiv(this.addr,e)}function L1(s,e){s.uniform2uiv(this.addr,e)}function D1(s,e){s.uniform3uiv(this.addr,e)}function I1(s,e){s.uniform4uiv(this.addr,e)}function U1(s,e,t){const r=this.cache,o=e.length,l=xc(t,o);dn(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Nf:u=y0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function F1(s,e,t){const r=this.cache,o=e.length,l=xc(t,o);dn(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||E0,l[u])}function O1(s,e,t){const r=this.cache,o=e.length,l=xc(t,o);dn(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||T0,l[u])}function k1(s,e,t){const r=this.cache,o=e.length,l=xc(t,o);dn(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||M0,l[u])}function B1(s){switch(s){case 5126:return S1;case 35664:return y1;case 35665:return M1;case 35666:return E1;case 35674:return T1;case 35675:return w1;case 35676:return b1;case 5124:case 35670:return A1;case 35667:case 35671:return C1;case 35668:case 35672:return R1;case 35669:case 35673:return P1;case 5125:return N1;case 36294:return L1;case 36295:return D1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return k1}}class z1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=v1(t.type)}}class V1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B1(t.type)}}class G1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function wg(s,e){s.seq.push(e),s.map[e.id]=e}function H1(s,e,t){const r=s.name,o=r.length;for(Dd.lastIndex=0;;){const l=Dd.exec(r),u=Dd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){wg(t,p===void 0?new z1(f,s,e):new V1(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new G1(f),wg(t,S)),t=S}}}class tc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);H1(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function bg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const W1=37297;let j1=0;function X1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const Ag=new ft;function q1(s){Mt._getMatrix(Ag,Mt.workingColorSpace,s);const e=`mat3( ${Ag.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(s)){case sc:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Cg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+X1(s.getShaderSource(e),f)}else return l}function $1(s,e){const t=q1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Y1={[Gg]:"Linear",[Hg]:"Reinhard",[Wg]:"Cineon",[jg]:"ACESFilmic",[qg]:"AgX",[$g]:"Neutral",[Xg]:"Custom"};function K1(s,e){const t=Y1[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ql=new Q;function Z1(){Mt.getLuminanceCoefficients(ql);const s=ql.x.toFixed(4),e=ql.y.toFixed(4),t=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function J1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function eE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function ho(s){return s!==""}function Rg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(s){return s.replace(tE,iE)}const nE=new Map;function iE(s,e){let t=gt[e];if(t===void 0){const r=nE.get(e);if(r!==void 0)t=gt[r],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Lf(t)}const rE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ng(s){return s.replace(rE,sE)}function sE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Lg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const aE={[Kl]:"SHADOWMAP_TYPE_PCF",[uo]:"SHADOWMAP_TYPE_VSM"};function oE(s){return aE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lE={[Ts]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE",[pc]:"ENVMAP_TYPE_CUBE_UV"};function cE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":lE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const uE={[ma]:"ENVMAP_MODE_REFRACTION"};function dE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":uE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fE={[Vg]:"ENVMAP_BLENDING_MULTIPLY",[$_]:"ENVMAP_BLENDING_MIX",[Y_]:"ENVMAP_BLENDING_ADD"};function hE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":fE[s.combine]||"ENVMAP_BLENDING_NONE"}function pE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function mE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=oE(t),p=cE(t),_=dE(t),S=hE(t),g=pE(t),y=Q1(t),w=J1(l),R=o.createProgram();let v,x,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ho).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ho).join(`
`),x.length>0&&(x+=`
`)):(v=[Lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),x=[Lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?gt.tonemapping_pars_fragment:"",t.toneMapping!==Hi?K1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,$1("linearToOutputTexel",t.outputColorSpace),Z1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ho).join(`
`)),u=Lf(u),u=Rg(u,t),u=Pg(u,t),f=Lf(f),f=Rg(f,t),f=Pg(f,t),u=Ng(u),f=Ng(f),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,v=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",t.glslVersion===Bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=C+v+u,L=C+x+f,B=bg(o,o.VERTEX_SHADER,N),D=bg(o,o.FRAGMENT_SHADER,L);o.attachShader(R,B),o.attachShader(R,D),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function O(I){if(s.debug.checkShaderErrors){const H=o.getProgramInfoLog(R)||"",se=o.getShaderInfoLog(B)||"",oe=o.getShaderInfoLog(D)||"",W=H.trim(),Z=se.trim(),q=oe.trim();let Y=!0,ce=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,R,B,D);else{const ue=Cg(o,B,"vertex"),k=Cg(o,D,"fragment");At("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+ue+`
`+k)}else W!==""?it("WebGLProgram: Program Info Log:",W):(Z===""||q==="")&&(ce=!1);ce&&(I.diagnostics={runnable:Y,programLog:W,vertexShader:{log:Z,prefix:v},fragmentShader:{log:q,prefix:x}})}o.deleteShader(B),o.deleteShader(D),E=new tc(o,R),U=eE(o,R)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let U;this.getAttributes=function(){return U===void 0&&O(this),U};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(R,W1)),X},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j1++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=D,this}let gE=0;class xE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new _E(e),t.set(e,r)),r}}class _E{constructor(e){this.id=gE++,this.code=e,this.usedTimes=0}}function vE(s){return s===ws||s===nc||s===ic}function SE(s,e,t,r,o,l){const u=new s0,f=new xE,h=new Set,p=[],_=new Map,S=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return h.add(E),E===0?"uv":`uv${E}`}function R(E,U,X,I,H,se){const oe=I.fog,W=H.geometry,Z=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?I.environment:null,q=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,Y=e.get(E.envMap||Z,q),ce=Y&&Y.mapping===pc?Y.image.height:null,ue=y[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&it("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const k=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ee=k!==void 0?k.length:0;let Ue=0;W.morphAttributes.position!==void 0&&(Ue=1),W.morphAttributes.normal!==void 0&&(Ue=2),W.morphAttributes.color!==void 0&&(Ue=3);let Be,Ie,re,Se;if(ue){const Je=zi[ue];Be=Je.vertexShader,Ie=Je.fragmentShader}else Be=E.vertexShader,Ie=E.fragmentShader,f.update(E),re=f.getVertexShaderID(E),Se=f.getFragmentShaderID(E);const ge=s.getRenderTarget(),Fe=s.state.buffers.depth.getReversed(),Ze=H.isInstancedMesh===!0,Ye=H.isBatchedMesh===!0,kt=!!E.map,ut=!!E.matcap,Et=!!Y,wt=!!E.aoMap,at=!!E.lightMap,Vt=!!E.bumpMap,Bt=!!E.normalMap,ln=!!E.displacementMap,z=!!E.emissiveMap,It=!!E.metalnessMap,ht=!!E.roughnessMap,Nt=E.anisotropy>0,De=E.clearcoat>0,zt=E.dispersion>0,P=E.iridescence>0,M=E.sheen>0,K=E.transmission>0,me=Nt&&!!E.anisotropyMap,fe=De&&!!E.clearcoatMap,xe=De&&!!E.clearcoatNormalMap,Me=De&&!!E.clearcoatRoughnessMap,de=P&&!!E.iridescenceMap,pe=P&&!!E.iridescenceThicknessMap,Le=M&&!!E.sheenColorMap,Pe=M&&!!E.sheenRoughnessMap,be=!!E.specularMap,Te=!!E.specularColorMap,nt=!!E.specularIntensityMap,rt=K&&!!E.transmissionMap,pt=K&&!!E.thicknessMap,V=!!E.gradientMap,we=!!E.alphaMap,he=E.alphaTest>0,Oe=!!E.alphaHash,Ce=!!E.extensions;let _e=Hi;E.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(_e=s.toneMapping);const We={shaderID:ue,shaderType:E.type,shaderName:E.name,vertexShader:Be,fragmentShader:Ie,defines:E.defines,customVertexShaderID:re,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Ye,batchingColor:Ye&&H._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&H.instanceColor!==null,instancingMorph:Ze&&H.morphTexture!==null,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:kt,matcap:ut,envMap:Et,envMapMode:Et&&Y.mapping,envMapCubeUVHeight:ce,aoMap:wt,lightMap:at,bumpMap:Vt,normalMap:Bt,displacementMap:ln,emissiveMap:z,normalMapObjectSpace:Bt&&E.normalMapType===Q_,normalMapTangentSpace:Bt&&E.normalMapType===Af,packedNormalMap:Bt&&E.normalMapType===Af&&vE(E.normalMap.format),metalnessMap:It,roughnessMap:ht,anisotropy:Nt,anisotropyMap:me,clearcoat:De,clearcoatMap:fe,clearcoatNormalMap:xe,clearcoatRoughnessMap:Me,dispersion:zt,iridescence:P,iridescenceMap:de,iridescenceThicknessMap:pe,sheen:M,sheenColorMap:Le,sheenRoughnessMap:Pe,specularMap:be,specularColorMap:Te,specularIntensityMap:nt,transmission:K,transmissionMap:rt,thicknessMap:pt,gradientMap:V,opaque:E.transparent===!1&&E.blending===fa&&E.alphaToCoverage===!1,alphaMap:we,alphaTest:he,alphaHash:Oe,combine:E.combine,mapUv:kt&&w(E.map.channel),aoMapUv:wt&&w(E.aoMap.channel),lightMapUv:at&&w(E.lightMap.channel),bumpMapUv:Vt&&w(E.bumpMap.channel),normalMapUv:Bt&&w(E.normalMap.channel),displacementMapUv:ln&&w(E.displacementMap.channel),emissiveMapUv:z&&w(E.emissiveMap.channel),metalnessMapUv:It&&w(E.metalnessMap.channel),roughnessMapUv:ht&&w(E.roughnessMap.channel),anisotropyMapUv:me&&w(E.anisotropyMap.channel),clearcoatMapUv:fe&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:xe&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&w(E.sheenRoughnessMap.channel),specularMapUv:be&&w(E.specularMap.channel),specularColorMapUv:Te&&w(E.specularColorMap.channel),specularIntensityMapUv:nt&&w(E.specularIntensityMap.channel),transmissionMapUv:rt&&w(E.transmissionMap.channel),thicknessMapUv:pt&&w(E.thicknessMap.channel),alphaMapUv:we&&w(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Bt||Nt),vertexNormals:!!W.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!W.attributes.uv&&(kt||we),fog:!!oe,useFog:E.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||W.attributes.normal===void 0&&Bt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Fe,skinning:H.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Ue,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:kt&&E.map.isVideoTexture===!0&&Mt.getTransfer(E.map.colorSpace)===Ot,decodeVideoTextureEmissive:z&&E.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(E.emissiveMap.colorSpace)===Ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fr,flipSided:E.side===Xn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ce&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&E.extensions.multiDraw===!0||Ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return We.vertexUv1s=h.has(1),We.vertexUv2s=h.has(2),We.vertexUv3s=h.has(3),h.clear(),We}function v(E){const U=[];if(E.shaderID?U.push(E.shaderID):(U.push(E.customVertexShaderID),U.push(E.customFragmentShaderID)),E.defines!==void 0)for(const X in E.defines)U.push(X),U.push(E.defines[X]);return E.isRawShaderMaterial===!1&&(x(U,E),C(U,E),U.push(s.outputColorSpace)),U.push(E.customProgramCacheKey),U.join()}function x(E,U){E.push(U.precision),E.push(U.outputColorSpace),E.push(U.envMapMode),E.push(U.envMapCubeUVHeight),E.push(U.mapUv),E.push(U.alphaMapUv),E.push(U.lightMapUv),E.push(U.aoMapUv),E.push(U.bumpMapUv),E.push(U.normalMapUv),E.push(U.displacementMapUv),E.push(U.emissiveMapUv),E.push(U.metalnessMapUv),E.push(U.roughnessMapUv),E.push(U.anisotropyMapUv),E.push(U.clearcoatMapUv),E.push(U.clearcoatNormalMapUv),E.push(U.clearcoatRoughnessMapUv),E.push(U.iridescenceMapUv),E.push(U.iridescenceThicknessMapUv),E.push(U.sheenColorMapUv),E.push(U.sheenRoughnessMapUv),E.push(U.specularMapUv),E.push(U.specularColorMapUv),E.push(U.specularIntensityMapUv),E.push(U.transmissionMapUv),E.push(U.thicknessMapUv),E.push(U.combine),E.push(U.fogExp2),E.push(U.sizeAttenuation),E.push(U.morphTargetsCount),E.push(U.morphAttributeCount),E.push(U.numDirLights),E.push(U.numPointLights),E.push(U.numSpotLights),E.push(U.numSpotLightMaps),E.push(U.numHemiLights),E.push(U.numRectAreaLights),E.push(U.numDirLightShadows),E.push(U.numPointLightShadows),E.push(U.numSpotLightShadows),E.push(U.numSpotLightShadowsWithMaps),E.push(U.numLightProbes),E.push(U.shadowMapType),E.push(U.toneMapping),E.push(U.numClippingPlanes),E.push(U.numClipIntersection),E.push(U.depthPacking)}function C(E,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),E.push(u.mask)}function N(E){const U=y[E.type];let X;if(U){const I=zi[U];X=zv.clone(I.uniforms)}else X=E.uniforms;return X}function L(E,U){let X=_.get(U);return X!==void 0?++X.usedTimes:(X=new mE(s,U,E,o),p.push(X),_.set(U,X)),X}function B(E){if(--E.usedTimes===0){const U=p.indexOf(E);p[U]=p[p.length-1],p.pop(),_.delete(E.cacheKey),E.destroy()}}function D(E){f.remove(E)}function O(){f.dispose()}return{getParameters:R,getProgramCacheKey:v,getUniforms:N,acquireProgram:L,releaseProgram:B,releaseShaderCache:D,programs:p,dispose:O}}function yE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function ME(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Dg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ig(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function f(g,y,w,R,v,x){let C=s[e];return C===void 0?(C={id:g.id,object:g,geometry:y,material:w,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:v,group:x},s[e]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=w,C.materialVariant=u(g),C.groupOrder=R,C.renderOrder=g.renderOrder,C.z=v,C.group=x),e++,C}function h(g,y,w,R,v,x){const C=f(g,y,w,R,v,x);w.transmission>0?r.push(C):w.transparent===!0?o.push(C):t.push(C)}function p(g,y,w,R,v,x){const C=f(g,y,w,R,v,x);w.transmission>0?r.unshift(C):w.transparent===!0?o.unshift(C):t.unshift(C)}function _(g,y){t.length>1&&t.sort(g||ME),r.length>1&&r.sort(y||Dg),o.length>1&&o.sort(y||Dg)}function S(){for(let g=e,y=s.length;g<y;g++){const w=s[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:S,sort:_}}function EE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Ig,s.set(r,[u])):o>=l.length?(u=new Ig,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function TE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new Ct};break;case"SpotLight":t={position:new Q,direction:new Q,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=t,t}}}function wE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let bE=0;function AE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function CE(s){const e=new TE,t=wE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Q);const o=new Q,l=new Kt,u=new Kt;function f(p){let _=0,S=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let y=0,w=0,R=0,v=0,x=0,C=0,N=0,L=0,B=0,D=0,O=0;p.sort(AE);for(let U=0,X=p.length;U<X;U++){const I=p[U],H=I.color,se=I.intensity,oe=I.distance;let W=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ws?W=I.shadow.map.texture:W=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)_+=H.r*se,S+=H.g*se,g+=H.b*se;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(I.sh.coefficients[Z],se);O++}else if(I.isDirectionalLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const q=I.shadow,Y=t.get(I);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=W,r.directionalShadowMatrix[y]=I.shadow.matrix,C++}r.directional[y]=Z,y++}else if(I.isSpotLight){const Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(H).multiplyScalar(se),Z.distance=oe,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,r.spot[R]=Z;const q=I.shadow;if(I.map&&(r.spotLightMap[B]=I.map,B++,q.updateMatrices(I),I.castShadow&&D++),r.spotLightMatrix[R]=q.matrix,I.castShadow){const Y=t.get(I);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,r.spotShadow[R]=Y,r.spotShadowMap[R]=W,L++}R++}else if(I.isRectAreaLight){const Z=e.get(I);Z.color.copy(H).multiplyScalar(se),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),r.rectArea[v]=Z,v++}else if(I.isPointLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const q=I.shadow,Y=t.get(I);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,r.pointShadow[w]=Y,r.pointShadowMap[w]=W,r.pointShadowMatrix[w]=I.shadow.matrix,N++}r.point[w]=Z,w++}else if(I.isHemisphereLight){const Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(se),Z.groundColor.copy(I.groundColor).multiplyScalar(se),r.hemi[x]=Z,x++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ke.LTC_FLOAT_1,r.rectAreaLTC2=ke.LTC_FLOAT_2):(r.rectAreaLTC1=ke.LTC_HALF_1,r.rectAreaLTC2=ke.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=S,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==y||E.pointLength!==w||E.spotLength!==R||E.rectAreaLength!==v||E.hemiLength!==x||E.numDirectionalShadows!==C||E.numPointShadows!==N||E.numSpotShadows!==L||E.numSpotMaps!==B||E.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=v,r.point.length=w,r.hemi.length=x,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=L+B-D,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=O,E.directionalLength=y,E.pointLength=w,E.spotLength=R,E.rectAreaLength=v,E.hemiLength=x,E.numDirectionalShadows=C,E.numPointShadows=N,E.numSpotShadows=L,E.numSpotMaps=B,E.numLightProbes=O,r.version=bE++)}function h(p,_){let S=0,g=0,y=0,w=0,R=0;const v=_.matrixWorldInverse;for(let x=0,C=p.length;x<C;x++){const N=p[x];if(N.isDirectionalLight){const L=r.directional[S];L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(v),S++}else if(N.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(v),L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(v),y++}else if(N.isRectAreaLight){const L=r.rectArea[w];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(v),u.identity(),l.copy(N.matrixWorld),l.premultiply(v),u.extractRotation(l),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),w++}else if(N.isPointLight){const L=r.point[g];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(v),g++}else if(N.isHemisphereLight){const L=r.hemi[R];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(v),R++}}}return{setup:f,setupView:h,state:r}}function Ug(s){const e=new CE(s),t=[],r=[],o=[];function l(g){S.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function f(g){r.push(g)}function h(g){o.push(g)}function p(){e.setup(t)}function _(g){e.setupView(t,g)}const S={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:p,setupLightsView:_,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function RE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Ug(s),e.set(o,[f])):l>=u.length?(f=new Ug(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const PE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NE=`uniform sampler2D shadow_pass;
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
}`,LE=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],DE=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Fg=new Kt,lo=new Q,Id=new Q;function IE(s,e,t){let r=new jf;const o=new Rt,l=new Rt,u=new nn,f=new jv,h=new Xv,p={},_=t.maxTextureSize,S={[Kr]:Xn,[Xn]:Kr,[fr]:fr},g=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:PE,fragmentShader:NE}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const w=new qn;w.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Xi(w,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let x=this.type;this.render=function(D,O,E){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||D.length===0)return;this.type===R_&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Kl);const U=s.getRenderTarget(),X=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),H=s.state;H.setBlending(pr),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const se=x!==this.type;se&&O.traverse(function(oe){oe.material&&(Array.isArray(oe.material)?oe.material.forEach(W=>W.needsUpdate=!0):oe.material.needsUpdate=!0)});for(let oe=0,W=D.length;oe<W;oe++){const Z=D[oe],q=Z.shadow;if(q===void 0){it("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const Y=q.getFrameExtents();o.multiply(Y),l.copy(q.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/Y.x),o.x=l.x*Y.x,q.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/Y.y),o.y=l.y*Y.y,q.mapSize.y=l.y));const ce=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=ce,q.map===null||se===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===uo){if(Z.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Wi(o.x,o.y,{format:ws,type:gr,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new ga(o.x,o.y,Vi),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=xr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Mn,q.map.depthTexture.magFilter=Mn}else Z.isPointLight?(q.map=new S0(o.x),q.map.depthTexture=new Fv(o.x,ji)):(q.map=new Wi(o.x,o.y),q.map.depthTexture=new ga(o.x,o.y,ji)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=xr,this.type===Kl?(q.map.depthTexture.compareFunction=ce?Gf:Vf,q.map.depthTexture.minFilter=Rn,q.map.depthTexture.magFilter=Rn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Mn,q.map.depthTexture.magFilter=Mn);q.camera.updateProjectionMatrix()}const ue=q.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<ue;k++){if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,k),s.clear();else{k===0&&(s.setRenderTarget(q.map),s.clear());const ee=q.getViewport(k);u.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),H.viewport(u)}if(Z.isPointLight){const ee=q.camera,Ue=q.matrix,Be=Z.distance||ee.far;Be!==ee.far&&(ee.far=Be,ee.updateProjectionMatrix()),lo.setFromMatrixPosition(Z.matrixWorld),ee.position.copy(lo),Id.copy(ee.position),Id.add(LE[k]),ee.up.copy(DE[k]),ee.lookAt(Id),ee.updateMatrixWorld(),Ue.makeTranslation(-lo.x,-lo.y,-lo.z),Fg.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Fg,ee.coordinateSystem,ee.reversedDepth)}else q.updateMatrices(Z);r=q.getFrustum(),L(O,E,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===uo&&C(q,E),q.needsUpdate=!1}x=this.type,v.needsUpdate=!1,s.setRenderTarget(U,X,I)};function C(D,O){const E=e.update(R);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Wi(o.x,o.y,{format:ws,type:gr})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(O,null,E,g,R,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(O,null,E,y,R,null)}function N(D,O,E,U){let X=null;const I=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(I!==void 0)X=I;else if(X=E.isPointLight===!0?h:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const H=X.uuid,se=O.uuid;let oe=p[H];oe===void 0&&(oe={},p[H]=oe);let W=oe[se];W===void 0&&(W=X.clone(),oe[se]=W,O.addEventListener("dispose",B)),X=W}if(X.visible=O.visible,X.wireframe=O.wireframe,U===uo?X.side=O.shadowSide!==null?O.shadowSide:O.side:X.side=O.shadowSide!==null?O.shadowSide:S[O.side],X.alphaMap=O.alphaMap,X.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,X.map=O.map,X.clipShadows=O.clipShadows,X.clippingPlanes=O.clippingPlanes,X.clipIntersection=O.clipIntersection,X.displacementMap=O.displacementMap,X.displacementScale=O.displacementScale,X.displacementBias=O.displacementBias,X.wireframeLinewidth=O.wireframeLinewidth,X.linewidth=O.linewidth,E.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const H=s.properties.get(X);H.light=E}return X}function L(D,O,E,U,X){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&X===uo)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const se=e.update(D),oe=D.material;if(Array.isArray(oe)){const W=se.groups;for(let Z=0,q=W.length;Z<q;Z++){const Y=W[Z],ce=oe[Y.materialIndex];if(ce&&ce.visible){const ue=N(D,ce,U,X);D.onBeforeShadow(s,D,O,E,se,ue,Y),s.renderBufferDirect(E,null,se,ue,D,Y),D.onAfterShadow(s,D,O,E,se,ue,Y)}}}else if(oe.visible){const W=N(D,oe,U,X);D.onBeforeShadow(s,D,O,E,se,W,null),s.renderBufferDirect(E,null,se,W,D,null),D.onAfterShadow(s,D,O,E,se,W,null)}}const H=D.children;for(let se=0,oe=H.length;se<oe;se++)L(H[se],O,E,U,X)}function B(D){D.target.removeEventListener("dispose",B);for(const E in p){const U=p[E],X=D.target.uuid;X in U&&(U[X].dispose(),delete U[X])}}}function UE(s,e){function t(){let V=!1;const we=new nn;let he=null;const Oe=new nn(0,0,0,0);return{setMask:function(Ce){he!==Ce&&!V&&(s.colorMask(Ce,Ce,Ce,Ce),he=Ce)},setLocked:function(Ce){V=Ce},setClear:function(Ce,_e,We,Je,Lt){Lt===!0&&(Ce*=Je,_e*=Je,We*=Je),we.set(Ce,_e,We,Je),Oe.equals(we)===!1&&(s.clearColor(Ce,_e,We,Je),Oe.copy(we))},reset:function(){V=!1,he=null,Oe.set(-1,0,0,0)}}}function r(){let V=!1,we=!1,he=null,Oe=null,Ce=null;return{setReversed:function(_e){if(we!==_e){const We=e.get("EXT_clip_control");_e?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),we=_e;const Je=Ce;Ce=null,this.setClear(Je)}},getReversed:function(){return we},setTest:function(_e){_e?ge(s.DEPTH_TEST):Fe(s.DEPTH_TEST)},setMask:function(_e){he!==_e&&!V&&(s.depthMask(_e),he=_e)},setFunc:function(_e){if(we&&(_e=lv[_e]),Oe!==_e){switch(_e){case Vd:s.depthFunc(s.NEVER);break;case Gd:s.depthFunc(s.ALWAYS);break;case Hd:s.depthFunc(s.LESS);break;case pa:s.depthFunc(s.LEQUAL);break;case Wd:s.depthFunc(s.EQUAL);break;case jd:s.depthFunc(s.GEQUAL);break;case Xd:s.depthFunc(s.GREATER);break;case qd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Oe=_e}},setLocked:function(_e){V=_e},setClear:function(_e){Ce!==_e&&(Ce=_e,we&&(_e=1-_e),s.clearDepth(_e))},reset:function(){V=!1,he=null,Oe=null,Ce=null,we=!1}}}function o(){let V=!1,we=null,he=null,Oe=null,Ce=null,_e=null,We=null,Je=null,Lt=null;return{setTest:function(yt){V||(yt?ge(s.STENCIL_TEST):Fe(s.STENCIL_TEST))},setMask:function(yt){we!==yt&&!V&&(s.stencilMask(yt),we=yt)},setFunc:function(yt,xn,Un){(he!==yt||Oe!==xn||Ce!==Un)&&(s.stencilFunc(yt,xn,Un),he=yt,Oe=xn,Ce=Un)},setOp:function(yt,xn,Un){(_e!==yt||We!==xn||Je!==Un)&&(s.stencilOp(yt,xn,Un),_e=yt,We=xn,Je=Un)},setLocked:function(yt){V=yt},setClear:function(yt){Lt!==yt&&(s.clearStencil(yt),Lt=yt)},reset:function(){V=!1,we=null,he=null,Oe=null,Ce=null,_e=null,We=null,Je=null,Lt=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let _={},S={},g={},y=new WeakMap,w=[],R=null,v=!1,x=null,C=null,N=null,L=null,B=null,D=null,O=null,E=new Ct(0,0,0),U=0,X=!1,I=null,H=null,se=null,oe=null,W=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const ce=s.getParameter(s.VERSION);ce.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ce)[1]),q=Y>=1):ce.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),q=Y>=2);let ue=null,k={};const ee=s.getParameter(s.SCISSOR_BOX),Ue=s.getParameter(s.VIEWPORT),Be=new nn().fromArray(ee),Ie=new nn().fromArray(Ue);function re(V,we,he,Oe){const Ce=new Uint8Array(4),_e=s.createTexture();s.bindTexture(V,_e),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<he;We++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(we+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return _e}const Se={};Se[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ge(s.DEPTH_TEST),u.setFunc(pa),Vt(!1),Bt(Dm),ge(s.CULL_FACE),wt(pr);function ge(V){_[V]!==!0&&(s.enable(V),_[V]=!0)}function Fe(V){_[V]!==!1&&(s.disable(V),_[V]=!1)}function Ze(V,we){return g[V]!==we?(s.bindFramebuffer(V,we),g[V]=we,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=we),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=we),!0):!1}function Ye(V,we){let he=w,Oe=!1;if(V){he=y.get(we),he===void 0&&(he=[],y.set(we,he));const Ce=V.textures;if(he.length!==Ce.length||he[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,We=Ce.length;_e<We;_e++)he[_e]=s.COLOR_ATTACHMENT0+_e;he.length=Ce.length,Oe=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,Oe=!0);Oe&&s.drawBuffers(he)}function kt(V){return R!==V?(s.useProgram(V),R=V,!0):!1}const ut={[xs]:s.FUNC_ADD,[N_]:s.FUNC_SUBTRACT,[L_]:s.FUNC_REVERSE_SUBTRACT};ut[D_]=s.MIN,ut[I_]=s.MAX;const Et={[U_]:s.ZERO,[F_]:s.ONE,[O_]:s.SRC_COLOR,[Bd]:s.SRC_ALPHA,[H_]:s.SRC_ALPHA_SATURATE,[V_]:s.DST_COLOR,[B_]:s.DST_ALPHA,[k_]:s.ONE_MINUS_SRC_COLOR,[zd]:s.ONE_MINUS_SRC_ALPHA,[G_]:s.ONE_MINUS_DST_COLOR,[z_]:s.ONE_MINUS_DST_ALPHA,[W_]:s.CONSTANT_COLOR,[j_]:s.ONE_MINUS_CONSTANT_COLOR,[X_]:s.CONSTANT_ALPHA,[q_]:s.ONE_MINUS_CONSTANT_ALPHA};function wt(V,we,he,Oe,Ce,_e,We,Je,Lt,yt){if(V===pr){v===!0&&(Fe(s.BLEND),v=!1);return}if(v===!1&&(ge(s.BLEND),v=!0),V!==P_){if(V!==x||yt!==X){if((C!==xs||B!==xs)&&(s.blendEquation(s.FUNC_ADD),C=xs,B=xs),yt)switch(V){case fa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Im:s.blendFunc(s.ONE,s.ONE);break;case Um:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:At("WebGLState: Invalid blending: ",V);break}else switch(V){case fa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Im:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Um:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fm:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",V);break}N=null,L=null,D=null,O=null,E.set(0,0,0),U=0,x=V,X=yt}return}Ce=Ce||we,_e=_e||he,We=We||Oe,(we!==C||Ce!==B)&&(s.blendEquationSeparate(ut[we],ut[Ce]),C=we,B=Ce),(he!==N||Oe!==L||_e!==D||We!==O)&&(s.blendFuncSeparate(Et[he],Et[Oe],Et[_e],Et[We]),N=he,L=Oe,D=_e,O=We),(Je.equals(E)===!1||Lt!==U)&&(s.blendColor(Je.r,Je.g,Je.b,Lt),E.copy(Je),U=Lt),x=V,X=!1}function at(V,we){V.side===fr?Fe(s.CULL_FACE):ge(s.CULL_FACE);let he=V.side===Xn;we&&(he=!he),Vt(he),V.blending===fa&&V.transparent===!1?wt(pr):wt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const Oe=V.stencilWrite;f.setTest(Oe),Oe&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),z(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):Fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(V){I!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),I=V)}function Bt(V){V!==A_?(ge(s.CULL_FACE),V!==H&&(V===Dm?s.cullFace(s.BACK):V===C_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Fe(s.CULL_FACE),H=V}function ln(V){V!==se&&(q&&s.lineWidth(V),se=V)}function z(V,we,he){V?(ge(s.POLYGON_OFFSET_FILL),(oe!==we||W!==he)&&(oe=we,W=he,u.getReversed()&&(we=-we),s.polygonOffset(we,he))):Fe(s.POLYGON_OFFSET_FILL)}function It(V){V?ge(s.SCISSOR_TEST):Fe(s.SCISSOR_TEST)}function ht(V){V===void 0&&(V=s.TEXTURE0+Z-1),ue!==V&&(s.activeTexture(V),ue=V)}function Nt(V,we,he){he===void 0&&(ue===null?he=s.TEXTURE0+Z-1:he=ue);let Oe=k[he];Oe===void 0&&(Oe={type:void 0,texture:void 0},k[he]=Oe),(Oe.type!==V||Oe.texture!==we)&&(ue!==he&&(s.activeTexture(he),ue=he),s.bindTexture(V,we||Se[V]),Oe.type=V,Oe.texture=we)}function De(){const V=k[ue];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function zt(){try{s.compressedTexImage2D(...arguments)}catch(V){At("WebGLState:",V)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(V){At("WebGLState:",V)}}function M(){try{s.texSubImage2D(...arguments)}catch(V){At("WebGLState:",V)}}function K(){try{s.texSubImage3D(...arguments)}catch(V){At("WebGLState:",V)}}function me(){try{s.compressedTexSubImage2D(...arguments)}catch(V){At("WebGLState:",V)}}function fe(){try{s.compressedTexSubImage3D(...arguments)}catch(V){At("WebGLState:",V)}}function xe(){try{s.texStorage2D(...arguments)}catch(V){At("WebGLState:",V)}}function Me(){try{s.texStorage3D(...arguments)}catch(V){At("WebGLState:",V)}}function de(){try{s.texImage2D(...arguments)}catch(V){At("WebGLState:",V)}}function pe(){try{s.texImage3D(...arguments)}catch(V){At("WebGLState:",V)}}function Le(V){return S[V]!==void 0?S[V]:s.getParameter(V)}function Pe(V,we){S[V]!==we&&(s.pixelStorei(V,we),S[V]=we)}function be(V){Be.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Be.copy(V))}function Te(V){Ie.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Ie.copy(V))}function nt(V,we){let he=p.get(we);he===void 0&&(he=new WeakMap,p.set(we,he));let Oe=he.get(V);Oe===void 0&&(Oe=s.getUniformBlockIndex(we,V.name),he.set(V,Oe))}function rt(V,we){const Oe=p.get(we).get(V);h.get(we)!==Oe&&(s.uniformBlockBinding(we,Oe,V.__bindingPointIndex),h.set(we,Oe))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},S={},ue=null,k={},g={},y=new WeakMap,w=[],R=null,v=!1,x=null,C=null,N=null,L=null,B=null,D=null,O=null,E=new Ct(0,0,0),U=0,X=!1,I=null,H=null,se=null,oe=null,W=null,Be.set(0,0,s.canvas.width,s.canvas.height),Ie.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ge,disable:Fe,bindFramebuffer:Ze,drawBuffers:Ye,useProgram:kt,setBlending:wt,setMaterial:at,setFlipSided:Vt,setCullFace:Bt,setLineWidth:ln,setPolygonOffset:z,setScissorTest:It,activeTexture:ht,bindTexture:Nt,unbindTexture:De,compressedTexImage2D:zt,compressedTexImage3D:P,texImage2D:de,texImage3D:pe,pixelStorei:Pe,getParameter:Le,updateUBOMapping:nt,uniformBlockBinding:rt,texStorage2D:xe,texStorage3D:Me,texSubImage2D:M,texSubImage3D:K,compressedTexSubImage2D:me,compressedTexSubImage3D:fe,scissor:be,viewport:Te,reset:pt}}function FE(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Rt,_=new WeakMap,S=new Set;let g;const y=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(P,M){return w?new OffscreenCanvas(P,M):ac("canvas")}function v(P,M,K){let me=1;const fe=zt(P);if((fe.width>K||fe.height>K)&&(me=K/Math.max(fe.width,fe.height)),me<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const xe=Math.floor(me*fe.width),Me=Math.floor(me*fe.height);g===void 0&&(g=R(xe,Me));const de=M?R(xe,Me):g;return de.width=xe,de.height=Me,de.getContext("2d").drawImage(P,0,0,xe,Me),it("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+xe+"x"+Me+")."),de}else return"data"in P&&it("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),P;return P}function x(P){return P.generateMipmaps}function C(P){s.generateMipmap(P)}function N(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(P,M,K,me,fe,xe=!1){if(P!==null){if(s[P]!==void 0)return s[P];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Me;me&&(Me=e.get("EXT_texture_norm16"),Me||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=M;if(M===s.RED&&(K===s.FLOAT&&(de=s.R32F),K===s.HALF_FLOAT&&(de=s.R16F),K===s.UNSIGNED_BYTE&&(de=s.R8),K===s.UNSIGNED_SHORT&&Me&&(de=Me.R16_EXT),K===s.SHORT&&Me&&(de=Me.R16_SNORM_EXT)),M===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(de=s.R8UI),K===s.UNSIGNED_SHORT&&(de=s.R16UI),K===s.UNSIGNED_INT&&(de=s.R32UI),K===s.BYTE&&(de=s.R8I),K===s.SHORT&&(de=s.R16I),K===s.INT&&(de=s.R32I)),M===s.RG&&(K===s.FLOAT&&(de=s.RG32F),K===s.HALF_FLOAT&&(de=s.RG16F),K===s.UNSIGNED_BYTE&&(de=s.RG8),K===s.UNSIGNED_SHORT&&Me&&(de=Me.RG16_EXT),K===s.SHORT&&Me&&(de=Me.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(de=s.RG8UI),K===s.UNSIGNED_SHORT&&(de=s.RG16UI),K===s.UNSIGNED_INT&&(de=s.RG32UI),K===s.BYTE&&(de=s.RG8I),K===s.SHORT&&(de=s.RG16I),K===s.INT&&(de=s.RG32I)),M===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(de=s.RGB8UI),K===s.UNSIGNED_SHORT&&(de=s.RGB16UI),K===s.UNSIGNED_INT&&(de=s.RGB32UI),K===s.BYTE&&(de=s.RGB8I),K===s.SHORT&&(de=s.RGB16I),K===s.INT&&(de=s.RGB32I)),M===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),K===s.UNSIGNED_INT&&(de=s.RGBA32UI),K===s.BYTE&&(de=s.RGBA8I),K===s.SHORT&&(de=s.RGBA16I),K===s.INT&&(de=s.RGBA32I)),M===s.RGB&&(K===s.UNSIGNED_SHORT&&Me&&(de=Me.RGB16_EXT),K===s.SHORT&&Me&&(de=Me.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(de=s.R11F_G11F_B10F)),M===s.RGBA){const pe=xe?sc:Mt.getTransfer(fe);K===s.FLOAT&&(de=s.RGBA32F),K===s.HALF_FLOAT&&(de=s.RGBA16F),K===s.UNSIGNED_BYTE&&(de=pe===Ot?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Me&&(de=Me.RGBA16_EXT),K===s.SHORT&&Me&&(de=Me.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function B(P,M){let K;return P?M===null||M===ji||M===mo?K=s.DEPTH24_STENCIL8:M===Vi?K=s.DEPTH32F_STENCIL8:M===po&&(K=s.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ji||M===mo?K=s.DEPTH_COMPONENT24:M===Vi?K=s.DEPTH_COMPONENT32F:M===po&&(K=s.DEPTH_COMPONENT16),K}function D(P,M){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==Mn&&P.minFilter!==Rn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function O(P){const M=P.target;M.removeEventListener("dispose",O),U(M),M.isVideoTexture&&_.delete(M),M.isHTMLTexture&&S.delete(M)}function E(P){const M=P.target;M.removeEventListener("dispose",E),I(M)}function U(P){const M=r.get(P);if(M.__webglInit===void 0)return;const K=P.source,me=y.get(K);if(me){const fe=me[M.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&X(P),Object.keys(me).length===0&&y.delete(K)}r.remove(P)}function X(P){const M=r.get(P);s.deleteTexture(M.__webglTexture);const K=P.source,me=y.get(K);delete me[M.__cacheKey],u.memory.textures--}function I(P){const M=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(M.__webglFramebuffer[me]))for(let fe=0;fe<M.__webglFramebuffer[me].length;fe++)s.deleteFramebuffer(M.__webglFramebuffer[me][fe]);else s.deleteFramebuffer(M.__webglFramebuffer[me]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[me])}else{if(Array.isArray(M.__webglFramebuffer))for(let me=0;me<M.__webglFramebuffer.length;me++)s.deleteFramebuffer(M.__webglFramebuffer[me]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let me=0;me<M.__webglColorRenderbuffer.length;me++)M.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[me]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=P.textures;for(let me=0,fe=K.length;me<fe;me++){const xe=r.get(K[me]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),u.memory.textures--),r.remove(K[me])}r.remove(P)}let H=0;function se(){H=0}function oe(){return H}function W(P){H=P}function Z(){const P=H;return P>=o.maxTextures&&it("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),H+=1,P}function q(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function Y(P,M){const K=r.get(P);if(P.isVideoTexture&&Nt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&K.__version!==P.version){const me=P.image;if(me===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(K,P,M);return}}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+M)}function ce(P,M){const K=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){Fe(K,P,M);return}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+M)}function ue(P,M){const K=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){Fe(K,P,M);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+M)}function k(P,M){const K=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&K.__version!==P.version){Ze(K,P,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+M)}const ee={[$d]:s.REPEAT,[hr]:s.CLAMP_TO_EDGE,[Yd]:s.MIRRORED_REPEAT},Ue={[Mn]:s.NEAREST,[K_]:s.NEAREST_MIPMAP_NEAREST,[Ml]:s.NEAREST_MIPMAP_LINEAR,[Rn]:s.LINEAR,[nd]:s.LINEAR_MIPMAP_NEAREST,[Ss]:s.LINEAR_MIPMAP_LINEAR},Be={[J_]:s.NEVER,[rv]:s.ALWAYS,[ev]:s.LESS,[Vf]:s.LEQUAL,[tv]:s.EQUAL,[Gf]:s.GEQUAL,[nv]:s.GREATER,[iv]:s.NOTEQUAL};function Ie(P,M){if(M.type===Vi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Rn||M.magFilter===nd||M.magFilter===Ml||M.magFilter===Ss||M.minFilter===Rn||M.minFilter===nd||M.minFilter===Ml||M.minFilter===Ss)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ee[M.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ee[M.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ee[M.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Ue[M.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Ue[M.minFilter]),M.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Be[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Mn||M.minFilter!==Ml&&M.minFilter!==Ss||M.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function re(P,M){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",O));const me=M.source;let fe=y.get(me);fe===void 0&&(fe={},y.set(me,fe));const xe=q(M);if(xe!==P.__cacheKey){fe[xe]===void 0&&(fe[xe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,K=!0),fe[xe].usedTimes++;const Me=fe[P.__cacheKey];Me!==void 0&&(fe[P.__cacheKey].usedTimes--,Me.usedTimes===0&&X(M)),P.__cacheKey=xe,P.__webglTexture=fe[xe].texture}return K}function Se(P,M,K){return Math.floor(Math.floor(P/K)/M)}function ge(P,M,K,me){const xe=P.updateRanges;if(xe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,K,me,M.data);else{xe.sort((Pe,be)=>Pe.start-be.start);let Me=0;for(let Pe=1;Pe<xe.length;Pe++){const be=xe[Me],Te=xe[Pe],nt=be.start+be.count,rt=Se(Te.start,M.width,4),pt=Se(be.start,M.width,4);Te.start<=nt+1&&rt===pt&&Se(Te.start+Te.count-1,M.width,4)===rt?be.count=Math.max(be.count,Te.start+Te.count-be.start):(++Me,xe[Me]=Te)}xe.length=Me+1;const de=t.getParameter(s.UNPACK_ROW_LENGTH),pe=t.getParameter(s.UNPACK_SKIP_PIXELS),Le=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Pe=0,be=xe.length;Pe<be;Pe++){const Te=xe[Pe],nt=Math.floor(Te.start/4),rt=Math.ceil(Te.count/4),pt=nt%M.width,V=Math.floor(nt/M.width),we=rt,he=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),t.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,pt,V,we,he,K,me,M.data)}P.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,de),t.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Le)}}function Fe(P,M,K){let me=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(me=s.TEXTURE_3D);const fe=re(P,M),xe=M.source;t.bindTexture(me,P.__webglTexture,s.TEXTURE0+K);const Me=r.get(xe);if(xe.version!==Me.__version||fe===!0){if(t.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const he=Mt.getPrimaries(Mt.workingColorSpace),Oe=M.colorSpace===Xr?null:Mt.getPrimaries(M.colorSpace),Ce=M.colorSpace===Xr||he===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let pe=v(M.image,!1,o.maxTextureSize);pe=De(M,pe);const Le=l.convert(M.format,M.colorSpace),Pe=l.convert(M.type);let be=L(M.internalFormat,Le,Pe,M.normalized,M.colorSpace,M.isVideoTexture);Ie(me,M);let Te;const nt=M.mipmaps,rt=M.isVideoTexture!==!0,pt=Me.__version===void 0||fe===!0,V=xe.dataReady,we=D(M,pe);if(M.isDepthTexture)be=B(M.format===ys,M.type),pt&&(rt?t.texStorage2D(s.TEXTURE_2D,1,be,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,be,pe.width,pe.height,0,Le,Pe,null));else if(M.isDataTexture)if(nt.length>0){rt&&pt&&t.texStorage2D(s.TEXTURE_2D,we,be,nt[0].width,nt[0].height);for(let he=0,Oe=nt.length;he<Oe;he++)Te=nt[he],rt?V&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Te.width,Te.height,Le,Pe,Te.data):t.texImage2D(s.TEXTURE_2D,he,be,Te.width,Te.height,0,Le,Pe,Te.data);M.generateMipmaps=!1}else rt?(pt&&t.texStorage2D(s.TEXTURE_2D,we,be,pe.width,pe.height),V&&ge(M,pe,Le,Pe)):t.texImage2D(s.TEXTURE_2D,0,be,pe.width,pe.height,0,Le,Pe,pe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){rt&&pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,be,nt[0].width,nt[0].height,pe.depth);for(let he=0,Oe=nt.length;he<Oe;he++)if(Te=nt[he],M.format!==Ai)if(Le!==null)if(rt){if(V)if(M.layerUpdates.size>0){const Ce=hg(Te.width,Te.height,M.format,M.type);for(const _e of M.layerUpdates){const We=Te.data.subarray(_e*Ce/Te.data.BYTES_PER_ELEMENT,(_e+1)*Ce/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,_e,Te.width,Te.height,1,Le,We)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Te.width,Te.height,pe.depth,Le,Te.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,be,Te.width,Te.height,pe.depth,0,Te.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Te.width,Te.height,pe.depth,Le,Pe,Te.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,be,Te.width,Te.height,pe.depth,0,Le,Pe,Te.data)}else{rt&&pt&&t.texStorage2D(s.TEXTURE_2D,we,be,nt[0].width,nt[0].height);for(let he=0,Oe=nt.length;he<Oe;he++)Te=nt[he],M.format!==Ai?Le!==null?rt?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Te.width,Te.height,Le,Te.data):t.compressedTexImage2D(s.TEXTURE_2D,he,be,Te.width,Te.height,0,Te.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?V&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Te.width,Te.height,Le,Pe,Te.data):t.texImage2D(s.TEXTURE_2D,he,be,Te.width,Te.height,0,Le,Pe,Te.data)}else if(M.isDataArrayTexture)if(rt){if(pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,be,pe.width,pe.height,pe.depth),V)if(M.layerUpdates.size>0){const he=hg(pe.width,pe.height,M.format,M.type);for(const Oe of M.layerUpdates){const Ce=pe.data.subarray(Oe*he/pe.data.BYTES_PER_ELEMENT,(Oe+1)*he/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Oe,pe.width,pe.height,1,Le,Pe,Ce)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Le,Pe,pe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,be,pe.width,pe.height,pe.depth,0,Le,Pe,pe.data);else if(M.isData3DTexture)rt?(pt&&t.texStorage3D(s.TEXTURE_3D,we,be,pe.width,pe.height,pe.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Le,Pe,pe.data)):t.texImage3D(s.TEXTURE_3D,0,be,pe.width,pe.height,pe.depth,0,Le,Pe,pe.data);else if(M.isFramebufferTexture){if(pt)if(rt)t.texStorage2D(s.TEXTURE_2D,we,be,pe.width,pe.height);else{let he=pe.width,Oe=pe.height;for(let Ce=0;Ce<we;Ce++)t.texImage2D(s.TEXTURE_2D,Ce,be,he,Oe,0,Le,Pe,null),he>>=1,Oe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const he=s.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),pe.parentNode!==he){he.appendChild(pe),S.add(M),he.onpaint=Je=>{const Lt=Je.changedElements;for(const yt of S)Lt.includes(yt.image)&&(yt.needsUpdate=!0)},he.requestPaint();return}const Oe=0,Ce=s.RGBA,_e=s.RGBA,We=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Oe,Ce,_e,We,pe),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(nt.length>0){if(rt&&pt){const he=zt(nt[0]);t.texStorage2D(s.TEXTURE_2D,we,be,he.width,he.height)}for(let he=0,Oe=nt.length;he<Oe;he++)Te=nt[he],rt?V&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Le,Pe,Te):t.texImage2D(s.TEXTURE_2D,he,be,Le,Pe,Te);M.generateMipmaps=!1}else if(rt){if(pt){const he=zt(pe);t.texStorage2D(s.TEXTURE_2D,we,be,he.width,he.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Le,Pe,pe)}else t.texImage2D(s.TEXTURE_2D,0,be,Le,Pe,pe);x(M)&&C(me),Me.__version=xe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ze(P,M,K){if(M.image.length!==6)return;const me=re(P,M),fe=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+K);const xe=r.get(fe);if(fe.version!==xe.__version||me===!0){t.activeTexture(s.TEXTURE0+K);const Me=Mt.getPrimaries(Mt.workingColorSpace),de=M.colorSpace===Xr?null:Mt.getPrimaries(M.colorSpace),pe=M.colorSpace===Xr||Me===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Le=M.isCompressedTexture||M.image[0].isCompressedTexture,Pe=M.image[0]&&M.image[0].isDataTexture,be=[];for(let _e=0;_e<6;_e++)!Le&&!Pe?be[_e]=v(M.image[_e],!0,o.maxCubemapSize):be[_e]=Pe?M.image[_e].image:M.image[_e],be[_e]=De(M,be[_e]);const Te=be[0],nt=l.convert(M.format,M.colorSpace),rt=l.convert(M.type),pt=L(M.internalFormat,nt,rt,M.normalized,M.colorSpace),V=M.isVideoTexture!==!0,we=xe.__version===void 0||me===!0,he=fe.dataReady;let Oe=D(M,Te);Ie(s.TEXTURE_CUBE_MAP,M);let Ce;if(Le){V&&we&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,pt,Te.width,Te.height);for(let _e=0;_e<6;_e++){Ce=be[_e].mipmaps;for(let We=0;We<Ce.length;We++){const Je=Ce[We];M.format!==Ai?nt!==null?V?he&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,0,0,Je.width,Je.height,nt,Je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,pt,Je.width,Je.height,0,Je.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,0,0,Je.width,Je.height,nt,rt,Je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,pt,Je.width,Je.height,0,nt,rt,Je.data)}}}else{if(Ce=M.mipmaps,V&&we){Ce.length>0&&Oe++;const _e=zt(be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,pt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Pe){V?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,be[_e].width,be[_e].height,nt,rt,be[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pt,be[_e].width,be[_e].height,0,nt,rt,be[_e].data);for(let We=0;We<Ce.length;We++){const Lt=Ce[We].image[_e].image;V?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,0,0,Lt.width,Lt.height,nt,rt,Lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,pt,Lt.width,Lt.height,0,nt,rt,Lt.data)}}else{V?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,nt,rt,be[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pt,nt,rt,be[_e]);for(let We=0;We<Ce.length;We++){const Je=Ce[We];V?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,0,0,nt,rt,Je.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,pt,nt,rt,Je.image[_e])}}}x(M)&&C(s.TEXTURE_CUBE_MAP),xe.__version=fe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ye(P,M,K,me,fe,xe){const Me=l.convert(K.format,K.colorSpace),de=l.convert(K.type),pe=L(K.internalFormat,Me,de,K.normalized,K.colorSpace),Le=r.get(M),Pe=r.get(K);if(Pe.__renderTarget=M,!Le.__hasExternalTextures){const be=Math.max(1,M.width>>xe),Te=Math.max(1,M.height>>xe);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?t.texImage3D(fe,xe,pe,be,Te,M.depth,0,Me,de,null):t.texImage2D(fe,xe,pe,be,Te,0,Me,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),ht(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,fe,Pe.__webglTexture,0,It(M)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,fe,Pe.__webglTexture,xe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(P,M,K){if(s.bindRenderbuffer(s.RENDERBUFFER,P),M.depthBuffer){const me=M.depthTexture,fe=me&&me.isDepthTexture?me.type:null,xe=B(M.stencilBuffer,fe),Me=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ht(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It(M),xe,M.width,M.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,It(M),xe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,xe,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,P)}else{const me=M.textures;for(let fe=0;fe<me.length;fe++){const xe=me[fe],Me=l.convert(xe.format,xe.colorSpace),de=l.convert(xe.type),pe=L(xe.internalFormat,Me,de,xe.normalized,xe.colorSpace);ht(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It(M),pe,M.width,M.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,It(M),pe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,pe,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ut(P,M,K){const me=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(M.depthTexture);if(fe.__renderTarget=M,(!fe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),me){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,M.depthTexture.addEventListener("dispose",O)),fe.__webglTexture===void 0){fe.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Ie(s.TEXTURE_CUBE_MAP,M.depthTexture);const Le=l.convert(M.depthTexture.format),Pe=l.convert(M.depthTexture.type);let be;M.depthTexture.format===xr?be=s.DEPTH_COMPONENT24:M.depthTexture.format===ys&&(be=s.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,be,M.width,M.height,0,Le,Pe,null)}}else Y(M.depthTexture,0);const xe=fe.__webglTexture,Me=It(M),de=me?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,pe=M.depthTexture.format===ys?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===xr)ht(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,de,xe,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,pe,de,xe,0);else if(M.depthTexture.format===ys)ht(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,de,xe,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,pe,de,xe,0);else throw new Error("Unknown depthTexture format")}function Et(P){const M=r.get(P),K=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const me=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),me){const fe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,me.removeEventListener("dispose",fe)};me.addEventListener("dispose",fe),M.__depthDisposeCallback=fe}M.__boundDepthTexture=me}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(K)for(let me=0;me<6;me++)ut(M.__webglFramebuffer[me],P,me);else{const me=P.texture.mipmaps;me&&me.length>0?ut(M.__webglFramebuffer[0],P,0):ut(M.__webglFramebuffer,P,0)}else if(K){M.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[me]),M.__webglDepthbuffer[me]===void 0)M.__webglDepthbuffer[me]=s.createRenderbuffer(),kt(M.__webglDepthbuffer[me],P,!1);else{const fe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=M.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,xe)}}else{const me=P.texture.mipmaps;if(me&&me.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),kt(M.__webglDepthbuffer,P,!1);else{const fe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,xe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(P,M,K){const me=r.get(P);M!==void 0&&Ye(me.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Et(P)}function at(P){const M=P.texture,K=r.get(P),me=r.get(M);P.addEventListener("dispose",E);const fe=P.textures,xe=P.isWebGLCubeRenderTarget===!0,Me=fe.length>1;if(Me||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=M.version,u.memory.textures++),xe){K.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[de]=[];for(let pe=0;pe<M.mipmaps.length;pe++)K.__webglFramebuffer[de][pe]=s.createFramebuffer()}else K.__webglFramebuffer[de]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)K.__webglFramebuffer[de]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Me)for(let de=0,pe=fe.length;de<pe;de++){const Le=r.get(fe[de]);Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture(),u.memory.textures++)}if(P.samples>0&&ht(P)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let de=0;de<fe.length;de++){const pe=fe[de];K.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[de]);const Le=l.convert(pe.format,pe.colorSpace),Pe=l.convert(pe.type),be=L(pe.internalFormat,Le,Pe,pe.normalized,pe.colorSpace,P.isXRRenderTarget===!0),Te=It(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,be,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,K.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),kt(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xe){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),Ie(s.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)Ye(K.__webglFramebuffer[de][pe],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else Ye(K.__webglFramebuffer[de],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(M)&&C(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let de=0,pe=fe.length;de<pe;de++){const Le=fe[de],Pe=r.get(Le);let be=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(be=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,Pe.__webglTexture),Ie(be,Le),Ye(K.__webglFramebuffer,P,Le,s.COLOR_ATTACHMENT0+de,be,0),x(Le)&&C(be)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,me.__webglTexture),Ie(de,M),M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)Ye(K.__webglFramebuffer[pe],P,M,s.COLOR_ATTACHMENT0,de,pe);else Ye(K.__webglFramebuffer,P,M,s.COLOR_ATTACHMENT0,de,0);x(M)&&C(de),t.unbindTexture()}P.depthBuffer&&Et(P)}function Vt(P){const M=P.textures;for(let K=0,me=M.length;K<me;K++){const fe=M[K];if(x(fe)){const xe=N(P),Me=r.get(fe).__webglTexture;t.bindTexture(xe,Me),C(xe),t.unbindTexture()}}}const Bt=[],ln=[];function z(P){if(P.samples>0){if(ht(P)===!1){const M=P.textures,K=P.width,me=P.height;let fe=s.COLOR_BUFFER_BIT;const xe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=r.get(P),de=M.length>1;if(de)for(let Le=0;Le<M.length;Le++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const pe=P.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Le]);const Pe=r.get(M[Le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pe,0)}s.blitFramebuffer(0,0,K,me,0,0,K,me,fe,s.NEAREST),h===!0&&(Bt.length=0,ln.length=0,Bt.push(s.COLOR_ATTACHMENT0+Le),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Bt.push(xe),ln.push(xe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ln)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let Le=0;Le<M.length;Le++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Le]);const Pe=r.get(M[Le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,Pe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const M=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function It(P){return Math.min(o.maxSamples,P.samples)}function ht(P){const M=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Nt(P){const M=u.render.frame;_.get(P)!==M&&(_.set(P,M),P.update())}function De(P,M){const K=P.colorSpace,me=P.format,fe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==rc&&K!==Xr&&(Mt.getTransfer(K)===Ot?(me!==Ai||fe!==ii)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",K)),M}function zt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=Z,this.resetTextureUnits=se,this.getTextureUnits=oe,this.setTextureUnits=W,this.setTexture2D=Y,this.setTexture2DArray=ce,this.setTexture3D=ue,this.setTextureCube=k,this.rebindTextures=wt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function OE(s,e){function t(r,o=Xr){let l;const u=Mt.getTransfer(o);if(r===ii)return s.UNSIGNED_BYTE;if(r===Ff)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Of)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Qg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Jg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Kg)return s.BYTE;if(r===Zg)return s.SHORT;if(r===po)return s.UNSIGNED_SHORT;if(r===Uf)return s.INT;if(r===ji)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===gr)return s.HALF_FLOAT;if(r===e0)return s.ALPHA;if(r===t0)return s.RGB;if(r===Ai)return s.RGBA;if(r===xr)return s.DEPTH_COMPONENT;if(r===ys)return s.DEPTH_STENCIL;if(r===n0)return s.RED;if(r===kf)return s.RED_INTEGER;if(r===ws)return s.RG;if(r===Bf)return s.RG_INTEGER;if(r===zf)return s.RGBA_INTEGER;if(r===Zl||r===Ql||r===Jl||r===ec)if(u===Ot)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Zl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ec)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Zl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ql)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ec)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kd||r===Zd||r===Qd||r===Jd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Kd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ef||r===tf||r===nf||r===rf||r===sf||r===nc||r===af)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===ef||r===tf)return u===Ot?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===nf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===rf)return l.COMPRESSED_R11_EAC;if(r===sf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===nc)return l.COMPRESSED_RG11_EAC;if(r===af)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===of||r===lf||r===cf||r===uf||r===df||r===ff||r===hf||r===pf||r===mf||r===gf||r===xf||r===_f||r===vf||r===Sf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===of)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===uf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===df)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ff)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===pf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===mf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===gf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_f)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yf||r===Mf||r===Ef)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===yf)return u===Ot?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Mf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ef)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Tf||r===wf||r===ic||r===bf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Tf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===wf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ic)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===mo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const kE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BE=`
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

}`;class zE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new h0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new qi({vertexShader:kE,fragmentShader:BE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xi(new mc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VE extends bs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,_=null,S=null,g=null,y=null,w=null;const R=typeof XRWebGLBinding<"u",v=new zE,x={},C=t.getContextAttributes();let N=null,L=null;const B=[],D=[],O=new Rt;let E=null;const U=new ni;U.viewport=new nn;const X=new ni;X.viewport=new nn;const I=[U,X],H=new Zv;let se=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Se=B[re];return Se===void 0&&(Se=new ud,B[re]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(re){let Se=B[re];return Se===void 0&&(Se=new ud,B[re]=Se),Se.getGripSpace()},this.getHand=function(re){let Se=B[re];return Se===void 0&&(Se=new ud,B[re]=Se),Se.getHandSpace()};function W(re){const Se=D.indexOf(re.inputSource);if(Se===-1)return;const ge=B[Se];ge!==void 0&&(ge.update(re.inputSource,re.frame,p||u),ge.dispatchEvent({type:re.type,data:re.inputSource}))}function Z(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",q);for(let re=0;re<B.length;re++){const Se=D[re];Se!==null&&(D[re]=null,B[re].disconnect(Se))}se=null,oe=null,v.reset();for(const re in x)delete x[re];e.setRenderTarget(N),y=null,g=null,S=null,o=null,L=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,r.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){f=re,r.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",q),C.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Fe=null,Ze=null;C.depth&&(Ze=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=C.stencil?ys:xr,Fe=C.stencil?mo:ji);const Ye={colorFormat:t.RGBA8,depthFormat:Ze,scaleFactor:l};S=this.getBinding(),g=S.createProjectionLayer(Ye),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new Wi(g.textureWidth,g.textureHeight,{format:Ai,type:ii,depthTexture:new ga(g.textureWidth,g.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ge={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,ge),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Wi(y.framebufferWidth,y.framebufferHeight,{format:Ai,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Ie.setContext(o),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(re){for(let Se=0;Se<re.removed.length;Se++){const ge=re.removed[Se],Fe=D.indexOf(ge);Fe>=0&&(D[Fe]=null,B[Fe].disconnect(ge))}for(let Se=0;Se<re.added.length;Se++){const ge=re.added[Se];let Fe=D.indexOf(ge);if(Fe===-1){for(let Ye=0;Ye<B.length;Ye++)if(Ye>=D.length){D.push(ge),Fe=Ye;break}else if(D[Ye]===null){D[Ye]=ge,Fe=Ye;break}if(Fe===-1)break}const Ze=B[Fe];Ze&&Ze.connect(ge)}}const Y=new Q,ce=new Q;function ue(re,Se,ge){Y.setFromMatrixPosition(Se.matrixWorld),ce.setFromMatrixPosition(ge.matrixWorld);const Fe=Y.distanceTo(ce),Ze=Se.projectionMatrix.elements,Ye=ge.projectionMatrix.elements,kt=Ze[14]/(Ze[10]-1),ut=Ze[14]/(Ze[10]+1),Et=(Ze[9]+1)/Ze[5],wt=(Ze[9]-1)/Ze[5],at=(Ze[8]-1)/Ze[0],Vt=(Ye[8]+1)/Ye[0],Bt=kt*at,ln=kt*Vt,z=Fe/(-at+Vt),It=z*-at;if(Se.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(It),re.translateZ(z),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ze[10]===-1)re.projectionMatrix.copy(Se.projectionMatrix),re.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const ht=kt+z,Nt=ut+z,De=Bt-It,zt=ln+(Fe-It),P=Et*ut/Nt*ht,M=wt*ut/Nt*ht;re.projectionMatrix.makePerspective(De,zt,P,M,ht,Nt),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function k(re,Se){Se===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Se.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let Se=re.near,ge=re.far;v.texture!==null&&(v.depthNear>0&&(Se=v.depthNear),v.depthFar>0&&(ge=v.depthFar)),H.near=X.near=U.near=Se,H.far=X.far=U.far=ge,(se!==H.near||oe!==H.far)&&(o.updateRenderState({depthNear:H.near,depthFar:H.far}),se=H.near,oe=H.far),H.layers.mask=re.layers.mask|6,U.layers.mask=H.layers.mask&-5,X.layers.mask=H.layers.mask&-3;const Fe=re.parent,Ze=H.cameras;k(H,Fe);for(let Ye=0;Ye<Ze.length;Ye++)k(Ze[Ye],Fe);Ze.length===2?ue(H,U,X):H.projectionMatrix.copy(U.projectionMatrix),ee(re,H,Fe)};function ee(re,Se,ge){ge===null?re.matrix.copy(Se.matrixWorld):(re.matrix.copy(ge.matrixWorld),re.matrix.invert(),re.matrix.multiply(Se.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Se.projectionMatrix),re.projectionMatrixInverse.copy(Se.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Rf*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(g===null&&y===null))return h},this.setFoveation=function(re){h=re,g!==null&&(g.fixedFoveation=re),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=re)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(H)},this.getCameraTexture=function(re){return x[re]};let Ue=null;function Be(re,Se){if(_=Se.getViewerPose(p||u),w=Se,_!==null){const ge=_.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let Fe=!1;ge.length!==H.cameras.length&&(H.cameras.length=0,Fe=!0);for(let ut=0;ut<ge.length;ut++){const Et=ge[ut];let wt=null;if(y!==null)wt=y.getViewport(Et);else{const Vt=S.getViewSubImage(g,Et);wt=Vt.viewport,ut===0&&(e.setRenderTargetTextures(L,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(L))}let at=I[ut];at===void 0&&(at=new ni,at.layers.enable(ut),at.viewport=new nn,I[ut]=at),at.matrix.fromArray(Et.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Et.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(wt.x,wt.y,wt.width,wt.height),ut===0&&(H.matrix.copy(at.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Fe===!0&&H.cameras.push(at)}const Ze=o.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){S=r.getBinding();const ut=S.getDepthInformation(ge[0]);ut&&ut.isValid&&ut.texture&&v.init(ut,o.renderState)}if(Ze&&Ze.includes("camera-access")&&R){e.state.unbindTexture(),S=r.getBinding();for(let ut=0;ut<ge.length;ut++){const Et=ge[ut].camera;if(Et){let wt=x[Et];wt||(wt=new h0,x[Et]=wt);const at=S.getCameraImage(Et);wt.sourceTexture=at}}}}for(let ge=0;ge<B.length;ge++){const Fe=D[ge],Ze=B[ge];Fe!==null&&Ze!==void 0&&Ze.update(Fe,Se,p||u)}Ue&&Ue(re,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),w=null}const Ie=new _0;Ie.setAnimationLoop(Be),this.setAnimationLoop=function(re){Ue=re},this.dispose=function(){}}}const GE=new Kt,w0=new ft;w0.set(-1,0,0,0,1,0,0,0,1);function HE(s,e){function t(v,x){v.matrixAutoUpdate===!0&&v.updateMatrix(),x.value.copy(v.matrix)}function r(v,x){x.color.getRGB(v.fogColor.value,p0(s)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function o(v,x,C,N,L){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(v,x):x.isMeshLambertMaterial?(l(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(v,x),S(v,x)):x.isMeshPhongMaterial?(l(v,x),_(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(v,x),g(v,x),x.isMeshPhysicalMaterial&&y(v,x,L)):x.isMeshMatcapMaterial?(l(v,x),w(v,x)):x.isMeshDepthMaterial?l(v,x):x.isMeshDistanceMaterial?(l(v,x),R(v,x)):x.isMeshNormalMaterial?l(v,x):x.isLineBasicMaterial?(u(v,x),x.isLineDashedMaterial&&f(v,x)):x.isPointsMaterial?h(v,x,C,N):x.isSpriteMaterial?p(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map,t(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.bumpMap&&(v.bumpMap.value=x.bumpMap,t(x.bumpMap,v.bumpMapTransform),v.bumpScale.value=x.bumpScale,x.side===Xn&&(v.bumpScale.value*=-1)),x.normalMap&&(v.normalMap.value=x.normalMap,t(x.normalMap,v.normalMapTransform),v.normalScale.value.copy(x.normalScale),x.side===Xn&&v.normalScale.value.negate()),x.displacementMap&&(v.displacementMap.value=x.displacementMap,t(x.displacementMap,v.displacementMapTransform),v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,v.emissiveMapTransform)),x.specularMap&&(v.specularMap.value=x.specularMap,t(x.specularMap,v.specularMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const C=e.get(x),N=C.envMap,L=C.envMapRotation;N&&(v.envMap.value=N,v.envMapRotation.value.setFromMatrix4(GE.makeRotationFromEuler(L)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(w0),v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap&&(v.lightMap.value=x.lightMap,v.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,v.lightMapTransform)),x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,v.aoMapTransform))}function u(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,x.map&&(v.map.value=x.map,t(x.map,v.mapTransform))}function f(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function h(v,x,C,N){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*C,v.scale.value=N*.5,x.map&&(v.map.value=x.map,t(x.map,v.uvTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function p(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map,t(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function _(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function S(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function g(v,x){v.metalness.value=x.metalness,x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,v.metalnessMapTransform)),v.roughness.value=x.roughness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,v.roughnessMapTransform)),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function y(v,x,C){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,v.sheenColorMapTransform)),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,v.sheenRoughnessMapTransform))),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,v.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(v.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Xn&&v.clearcoatNormalScale.value.negate())),x.dispersion>0&&(v.dispersion.value=x.dispersion),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,v.iridescenceMapTransform)),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=C.texture,v.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,v.transmissionMapTransform)),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(v.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(v.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,v.specularColorMapTransform)),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,v.specularIntensityMapTransform))}function w(v,x){x.matcap&&(v.matcap.value=x.matcap)}function R(v,x){const C=e.get(x).light;v.referencePosition.value.setFromMatrixPosition(C.matrixWorld),v.nearDistance.value=C.shadow.camera.near,v.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function WE(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,N){const L=N.program;r.uniformBlockBinding(C,L)}function p(C,N){let L=o[C.id];L===void 0&&(w(C),L=_(C),o[C.id]=L,C.addEventListener("dispose",v));const B=N.program;r.updateUBOMapping(C,B);const D=e.render.frame;l[C.id]!==D&&(g(C),l[C.id]=D)}function _(C){const N=S();C.__bindingPointIndex=N;const L=s.createBuffer(),B=C.__size,D=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,B,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,L),L}function S(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const N=o[C.id],L=C.uniforms,B=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let D=0,O=L.length;D<O;D++){const E=Array.isArray(L[D])?L[D]:[L[D]];for(let U=0,X=E.length;U<X;U++){const I=E[U];if(y(I,D,U,B)===!0){const H=I.__offset,se=Array.isArray(I.value)?I.value:[I.value];let oe=0;for(let W=0;W<se.length;W++){const Z=se[W],q=R(Z);typeof Z=="number"||typeof Z=="boolean"?(I.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,H+oe,I.__data)):Z.isMatrix3?(I.__data[0]=Z.elements[0],I.__data[1]=Z.elements[1],I.__data[2]=Z.elements[2],I.__data[3]=0,I.__data[4]=Z.elements[3],I.__data[5]=Z.elements[4],I.__data[6]=Z.elements[5],I.__data[7]=0,I.__data[8]=Z.elements[6],I.__data[9]=Z.elements[7],I.__data[10]=Z.elements[8],I.__data[11]=0):ArrayBuffer.isView(Z)?I.__data.set(new Z.constructor(Z.buffer,Z.byteOffset,I.__data.length)):(Z.toArray(I.__data,oe),oe+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(C,N,L,B){const D=C.value,O=N+"_"+L;if(B[O]===void 0)return typeof D=="number"||typeof D=="boolean"?B[O]=D:ArrayBuffer.isView(D)?B[O]=D.slice():B[O]=D.clone(),!0;{const E=B[O];if(typeof D=="number"||typeof D=="boolean"){if(E!==D)return B[O]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(E.equals(D)===!1)return E.copy(D),!0}}return!1}function w(C){const N=C.uniforms;let L=0;const B=16;for(let O=0,E=N.length;O<E;O++){const U=Array.isArray(N[O])?N[O]:[N[O]];for(let X=0,I=U.length;X<I;X++){const H=U[X],se=Array.isArray(H.value)?H.value:[H.value];for(let oe=0,W=se.length;oe<W;oe++){const Z=se[oe],q=R(Z),Y=L%B,ce=Y%q.boundary,ue=Y+ce;L+=ce,ue!==0&&B-ue<q.storage&&(L+=B-ue),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=L,L+=q.storage}}}const D=L%B;return D>0&&(L+=B-D),C.__size=L,C.__cache={},this}function R(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):it("WebGLRenderer: Unsupported uniform value type.",C),N}function v(C){const N=C.target;N.removeEventListener("dispose",v);const L=u.indexOf(N.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function x(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:h,update:p,dispose:x}}const jE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function XE(){return ki===null&&(ki=new Rv(jE,16,16,ws,gr),ki.name="DFG_LUT",ki.minFilter=Rn,ki.magFilter=Rn,ki.wrapS=hr,ki.wrapT=hr,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class qE{constructor(e={}){const{canvas:t=av(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:y=ii}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const R=y,v=new Set([zf,Bf,kf]),x=new Set([ii,ji,po,mo,Ff,Of]),C=new Uint32Array(4),N=new Int32Array(4),L=new Q;let B=null,D=null;const O=[],E=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let I=!1,H=null;this._outputColorSpace=hi;let se=0,oe=0,W=null,Z=-1,q=null;const Y=new nn,ce=new nn;let ue=null;const k=new Ct(0);let ee=0,Ue=t.width,Be=t.height,Ie=1,re=null,Se=null;const ge=new nn(0,0,Ue,Be),Fe=new nn(0,0,Ue,Be);let Ze=!1;const Ye=new jf;let kt=!1,ut=!1;const Et=new Kt,wt=new Q,at=new nn,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function ln(){return W===null?Ie:1}let z=r;function It(A,$){return t.getContext(A,$)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${If}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",Je,!1),z===null){const $="webgl2";if(z=It($,A),z===null)throw It($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw At("WebGLRenderer: "+A.message),A}let ht,Nt,De,zt,P,M,K,me,fe,xe,Me,de,pe,Le,Pe,be,Te,nt,rt,pt,V,we,he;function Oe(){ht=new XM(z),ht.init(),V=new OE(z,ht),Nt=new kM(z,ht,e,V),De=new UE(z,ht),Nt.reversedDepthBuffer&&g&&De.buffers.depth.setReversed(!0),zt=new YM(z),P=new yE,M=new FE(z,ht,De,P,Nt,V,zt),K=new jM(X),me=new Jv(z),we=new FM(z,me),fe=new qM(z,me,zt,we),xe=new ZM(z,fe,me,we,zt),nt=new KM(z,Nt,M),Pe=new BM(P),Me=new SE(X,K,ht,Nt,we,Pe),de=new HE(X,P),pe=new EE,Le=new RE(ht),Te=new UM(X,K,De,xe,w,h),be=new IE(X,xe,Nt),he=new WE(z,zt,Nt,De),rt=new OM(z,ht,zt),pt=new $M(z,ht,zt),zt.programs=Me.programs,X.capabilities=Nt,X.extensions=ht,X.properties=P,X.renderLists=pe,X.shadowMap=be,X.state=De,X.info=zt}Oe(),R!==ii&&(U=new JM(R,t.width,t.height,o,l));const Ce=new VE(X,z);this.xr=Ce,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(A){A!==void 0&&(Ie=A,this.setSize(Ue,Be,!1))},this.getSize=function(A){return A.set(Ue,Be)},this.setSize=function(A,$,ae=!0){if(Ce.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=A,Be=$,t.width=Math.floor(A*Ie),t.height=Math.floor($*Ie),ae===!0&&(t.style.width=A+"px",t.style.height=$+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,A,$)},this.getDrawingBufferSize=function(A){return A.set(Ue*Ie,Be*Ie).floor()},this.setDrawingBufferSize=function(A,$,ae){Ue=A,Be=$,Ie=ae,t.width=Math.floor(A*ae),t.height=Math.floor($*ae),this.setViewport(0,0,A,$)},this.setEffects=function(A){if(R===ii){At("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let $=0;$<A.length;$++)if(A[$].isOutputPass===!0){it("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Y)},this.getViewport=function(A){return A.copy(ge)},this.setViewport=function(A,$,ae,ne){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,$,ae,ne),De.viewport(Y.copy(ge).multiplyScalar(Ie).round())},this.getScissor=function(A){return A.copy(Fe)},this.setScissor=function(A,$,ae,ne){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,$,ae,ne),De.scissor(ce.copy(Fe).multiplyScalar(Ie).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(A){De.setScissorTest(Ze=A)},this.setOpaqueSort=function(A){re=A},this.setTransparentSort=function(A){Se=A},this.getClearColor=function(A){return A.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(A=!0,$=!0,ae=!0){let ne=0;if(A){let te=!1;if(W!==null){const Ne=W.texture.format;te=v.has(Ne)}if(te){const Ne=W.texture.type,Ge=x.has(Ne),Re=Te.getClearColor(),Xe=Te.getClearAlpha(),Qe=Re.r,lt=Re.g,ct=Re.b;Ge?(C[0]=Qe,C[1]=lt,C[2]=ct,C[3]=Xe,z.clearBufferuiv(z.COLOR,0,C)):(N[0]=Qe,N[1]=lt,N[2]=ct,N[3]=Xe,z.clearBufferiv(z.COLOR,0,N))}else ne|=z.COLOR_BUFFER_BIT}$&&(ne|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ne|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),H=A},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),Te.dispose(),pe.dispose(),Le.dispose(),P.dispose(),K.dispose(),xe.dispose(),we.dispose(),he.dispose(),Me.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Pi),Ce.removeEventListener("sessionend",_r),pi.stop()};function _e(A){A.preventDefault(),Vm("WebGLRenderer: Context Lost."),I=!0}function We(){Vm("WebGLRenderer: Context Restored."),I=!1;const A=zt.autoReset,$=be.enabled,ae=be.autoUpdate,ne=be.needsUpdate,te=be.type;Oe(),zt.autoReset=A,be.enabled=$,be.autoUpdate=ae,be.needsUpdate=ne,be.type=te}function Je(A){At("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Lt(A){const $=A.target;$.removeEventListener("dispose",Lt),yt($)}function yt(A){xn(A),P.remove(A)}function xn(A){const $=P.get(A).programs;$!==void 0&&($.forEach(function(ae){Me.releaseProgram(ae)}),A.isShaderMaterial&&Me.releaseShaderCache(A))}this.renderBufferDirect=function(A,$,ae,ne,te,Ne){$===null&&($=Vt);const Ge=te.isMesh&&te.matrixWorld.determinant()<0,Re=Ni(A,$,ae,ne,te);De.setMaterial(ne,Ge);let Xe=ae.index,Qe=1;if(ne.wireframe===!0){if(Xe=fe.getWireframeAttribute(ae),Xe===void 0)return;Qe=2}const lt=ae.drawRange,ct=ae.attributes.position;let $e=lt.start*Qe,Tt=(lt.start+lt.count)*Qe;Ne!==null&&($e=Math.max($e,Ne.start*Qe),Tt=Math.min(Tt,(Ne.start+Ne.count)*Qe)),Xe!==null?($e=Math.max($e,0),Tt=Math.min(Tt,Xe.count)):ct!=null&&($e=Math.max($e,0),Tt=Math.min(Tt,ct.count));const Gt=Tt-$e;if(Gt<0||Gt===1/0)return;we.setup(te,ne,Re,ae,Xe);let $t,Ut=rt;if(Xe!==null&&($t=me.get(Xe),Ut=pt,Ut.setIndex($t)),te.isMesh)ne.wireframe===!0?(De.setLineWidth(ne.wireframeLinewidth*ln()),Ut.setMode(z.LINES)):Ut.setMode(z.TRIANGLES);else if(te.isLine){let sn=ne.linewidth;sn===void 0&&(sn=1),De.setLineWidth(sn*ln()),te.isLineSegments?Ut.setMode(z.LINES):te.isLineLoop?Ut.setMode(z.LINE_LOOP):Ut.setMode(z.LINE_STRIP)}else te.isPoints?Ut.setMode(z.POINTS):te.isSprite&&Ut.setMode(z.TRIANGLES);if(te.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Ut.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const sn=te._multiDrawStarts,ze=te._multiDrawCounts,_n=te._multiDrawCount,xt=Xe?me.get(Xe).bytesPerElement:1,On=P.get(ne).currentProgram.getUniforms();for(let kn=0;kn<_n;kn++)On.setValue(z,"_gl_DrawID",kn),Ut.render(sn[kn]/xt,ze[kn])}else if(te.isInstancedMesh)Ut.renderInstances($e,Gt,te.count);else if(ae.isInstancedBufferGeometry){const sn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,ze=Math.min(ae.instanceCount,sn);Ut.renderInstances($e,Gt,ze)}else Ut.render($e,Gt)};function Un(A,$,ae){A.transparent===!0&&A.side===fr&&A.forceSinglePass===!1?(A.side=Xn,A.needsUpdate=!0,Ki(A,$,ae),A.side=Kr,A.needsUpdate=!0,Ki(A,$,ae),A.side=fr):Ki(A,$,ae)}this.compile=function(A,$,ae=null){ae===null&&(ae=A),D=Le.get(ae),D.init($),E.push(D),ae.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(D.pushLight(te),te.castShadow&&D.pushShadow(te))}),A!==ae&&A.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(D.pushLight(te),te.castShadow&&D.pushShadow(te))}),D.setupLights();const ne=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ne=te.material;if(Ne)if(Array.isArray(Ne))for(let Ge=0;Ge<Ne.length;Ge++){const Re=Ne[Ge];Un(Re,ae,te),ne.add(Re)}else Un(Ne,ae,te),ne.add(Ne)}),D=E.pop(),ne},this.compileAsync=function(A,$,ae=null){const ne=this.compile(A,$,ae);return new Promise(te=>{function Ne(){if(ne.forEach(function(Ge){P.get(Ge).currentProgram.isReady()&&ne.delete(Ge)}),ne.size===0){te(A);return}setTimeout(Ne,10)}ht.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let $n=null;function $i(A){$n&&$n(A)}function Pi(){pi.stop()}function _r(){pi.start()}const pi=new _0;pi.setAnimationLoop($i),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(A){$n=A,Ce.setAnimationLoop(A),A===null?pi.stop():pi.start()},Ce.addEventListener("sessionstart",Pi),Ce.addEventListener("sessionend",_r),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;H!==null&&H.renderStart(A,$);const ae=Ce.enabled===!0&&Ce.isPresenting===!0,ne=U!==null&&(W===null||ae)&&U.begin(X,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera($),$=Ce.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,$,W),D=Le.get(A,E.length),D.init($),D.state.textureUnits=M.getTextureUnits(),E.push(D),Et.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Ye.setFromProjectionMatrix(Et,Gi,$.reversedDepth),ut=this.localClippingEnabled,kt=Pe.init(this.clippingPlanes,ut),B=pe.get(A,O.length),B.init(),O.push(B),Ce.enabled===!0&&Ce.isPresenting===!0){const Ge=X.xr.getDepthSensingMesh();Ge!==null&&Qr(Ge,$,-1/0,X.sortObjects)}Qr(A,$,0,X.sortObjects),B.finish(),X.sortObjects===!0&&B.sort(re,Se),Bt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Bt&&Te.addToRenderList(B,A),this.info.render.frame++,kt===!0&&Pe.beginShadows();const te=D.state.shadowsArray;if(be.render(te,A,$),kt===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&U.hasRenderPass())===!1){const Ge=B.opaque,Re=B.transmissive;if(D.setupLights(),$.isArrayCamera){const Xe=$.cameras;if(Re.length>0)for(let Qe=0,lt=Xe.length;Qe<lt;Qe++){const ct=Xe[Qe];si(Ge,Re,A,ct)}Bt&&Te.render(A);for(let Qe=0,lt=Xe.length;Qe<lt;Qe++){const ct=Xe[Qe];Rs(B,A,ct,ct.viewport)}}else Re.length>0&&si(Ge,Re,A,$),Bt&&Te.render(A),Rs(B,A,$)}W!==null&&oe===0&&(M.updateMultisampleRenderTarget(W),M.updateRenderTargetMipmap(W)),ne&&U.end(X),A.isScene===!0&&A.onAfterRender(X,A,$),we.resetDefaultState(),Z=-1,q=null,E.pop(),E.length>0?(D=E[E.length-1],M.setTextureUnits(D.state.textureUnits),kt===!0&&Pe.setGlobalState(X.clippingPlanes,D.state.camera)):D=null,O.pop(),O.length>0?B=O[O.length-1]:B=null,H!==null&&H.renderEnd()};function Qr(A,$,ae,ne){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLightProbeGrid)D.pushLightProbeGrid(A);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ye.intersectsSprite(A)){ne&&at.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Et);const Ge=xe.update(A),Re=A.material;Re.visible&&B.push(A,Ge,Re,ae,at.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ye.intersectsObject(A))){const Ge=xe.update(A),Re=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),at.copy(A.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),at.copy(Ge.boundingSphere.center)),at.applyMatrix4(A.matrixWorld).applyMatrix4(Et)),Array.isArray(Re)){const Xe=Ge.groups;for(let Qe=0,lt=Xe.length;Qe<lt;Qe++){const ct=Xe[Qe],$e=Re[ct.materialIndex];$e&&$e.visible&&B.push(A,Ge,$e,ae,at.z,ct)}}else Re.visible&&B.push(A,Ge,Re,ae,at.z,null)}}const Ne=A.children;for(let Ge=0,Re=Ne.length;Ge<Re;Ge++)Qr(Ne[Ge],$,ae,ne)}function Rs(A,$,ae,ne){const{opaque:te,transmissive:Ne,transparent:Ge}=A;D.setupLightsView(ae),kt===!0&&Pe.setGlobalState(X.clippingPlanes,ae),ne&&De.viewport(Y.copy(ne)),te.length>0&&Yi(te,$,ae),Ne.length>0&&Yi(Ne,$,ae),Ge.length>0&&Yi(Ge,$,ae),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function si(A,$,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ne.id]===void 0){const $e=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ne.id]=new Wi(1,1,{generateMipmaps:!0,type:$e?gr:ii,minFilter:Ss,samples:Math.max(4,Nt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Ne=D.state.transmissionRenderTarget[ne.id],Ge=ne.viewport||Y;Ne.setSize(Ge.z*X.transmissionResolutionScale,Ge.w*X.transmissionResolutionScale);const Re=X.getRenderTarget(),Xe=X.getActiveCubeFace(),Qe=X.getActiveMipmapLevel();X.setRenderTarget(Ne),X.getClearColor(k),ee=X.getClearAlpha(),ee<1&&X.setClearColor(16777215,.5),X.clear(),Bt&&Te.render(ae);const lt=X.toneMapping;X.toneMapping=Hi;const ct=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),D.setupLightsView(ne),kt===!0&&Pe.setGlobalState(X.clippingPlanes,ne),Yi(A,ae,ne),M.updateMultisampleRenderTarget(Ne),M.updateRenderTargetMipmap(Ne),ht.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Tt=0,Gt=$.length;Tt<Gt;Tt++){const $t=$[Tt],{object:Ut,geometry:sn,material:ze,group:_n}=$t;if(ze.side===fr&&Ut.layers.test(ne.layers)){const xt=ze.side;ze.side=Xn,ze.needsUpdate=!0,vr(Ut,ae,ne,sn,ze,_n),ze.side=xt,ze.needsUpdate=!0,$e=!0}}$e===!0&&(M.updateMultisampleRenderTarget(Ne),M.updateRenderTargetMipmap(Ne))}X.setRenderTarget(Re,Xe,Qe),X.setClearColor(k,ee),ct!==void 0&&(ne.viewport=ct),X.toneMapping=lt}function Yi(A,$,ae){const ne=$.isScene===!0?$.overrideMaterial:null;for(let te=0,Ne=A.length;te<Ne;te++){const Ge=A[te],{object:Re,geometry:Xe,group:Qe}=Ge;let lt=Ge.material;lt.allowOverride===!0&&ne!==null&&(lt=ne),Re.layers.test(ae.layers)&&vr(Re,$,ae,Xe,lt,Qe)}}function vr(A,$,ae,ne,te,Ne){A.onBeforeRender(X,$,ae,ne,te,Ne),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(X,$,ae,ne,A,Ne),te.transparent===!0&&te.side===fr&&te.forceSinglePass===!1?(te.side=Xn,te.needsUpdate=!0,X.renderBufferDirect(ae,$,ne,te,A,Ne),te.side=Kr,te.needsUpdate=!0,X.renderBufferDirect(ae,$,ne,te,A,Ne),te.side=fr):X.renderBufferDirect(ae,$,ne,te,A,Ne),A.onAfterRender(X,$,ae,ne,te,Ne)}function Ki(A,$,ae){$.isScene!==!0&&($=Vt);const ne=P.get(A),te=D.state.lights,Ne=D.state.shadowsArray,Ge=te.state.version,Re=Me.getParameters(A,te.state,Ne,$,ae,D.state.lightProbeGridArray),Xe=Me.getProgramCacheKey(Re);let Qe=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?$.environment:null,ne.fog=$.fog;const lt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=K.get(A.envMap||ne.environment,lt),ne.envMapRotation=ne.environment!==null&&A.envMap===null?$.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",Lt),Qe=new Map,ne.programs=Qe);let ct=Qe.get(Xe);if(ct!==void 0){if(ne.currentProgram===ct&&ne.lightsStateVersion===Ge)return ot(A,Re),ct}else Re.uniforms=Me.getUniforms(A),H!==null&&A.isNodeMaterial&&H.build(A,ae,Re),A.onBeforeCompile(Re,X),ct=Me.acquireProgram(Re,Xe),Qe.set(Xe,ct),ne.uniforms=Re.uniforms;const $e=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=Pe.uniform),ot(A,Re),ne.needsLights=vc(A),ne.lightsStateVersion=Ge,ne.needsLights&&($e.ambientLightColor.value=te.state.ambient,$e.lightProbe.value=te.state.probe,$e.directionalLights.value=te.state.directional,$e.directionalLightShadows.value=te.state.directionalShadow,$e.spotLights.value=te.state.spot,$e.spotLightShadows.value=te.state.spotShadow,$e.rectAreaLights.value=te.state.rectArea,$e.ltc_1.value=te.state.rectAreaLTC1,$e.ltc_2.value=te.state.rectAreaLTC2,$e.pointLights.value=te.state.point,$e.pointLightShadows.value=te.state.pointShadow,$e.hemisphereLights.value=te.state.hemi,$e.directionalShadowMatrix.value=te.state.directionalShadowMatrix,$e.spotLightMatrix.value=te.state.spotLightMatrix,$e.spotLightMap.value=te.state.spotLightMap,$e.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=D.state.lightProbeGridArray.length>0,ne.currentProgram=ct,ne.uniformsList=null,ct}function dt(A){if(A.uniformsList===null){const $=A.currentProgram.getUniforms();A.uniformsList=tc.seqWithValue($.seq,A.uniforms)}return A.uniformsList}function ot(A,$){const ae=P.get(A);ae.outputColorSpace=$.outputColorSpace,ae.batching=$.batching,ae.batchingColor=$.batchingColor,ae.instancing=$.instancing,ae.instancingColor=$.instancingColor,ae.instancingMorph=$.instancingMorph,ae.skinning=$.skinning,ae.morphTargets=$.morphTargets,ae.morphNormals=$.morphNormals,ae.morphColors=$.morphColors,ae.morphTargetsCount=$.morphTargetsCount,ae.numClippingPlanes=$.numClippingPlanes,ae.numIntersection=$.numClipIntersection,ae.vertexAlphas=$.vertexAlphas,ae.vertexTangents=$.vertexTangents,ae.toneMapping=$.toneMapping}function Fn(A,$){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;L.setFromMatrixPosition($.matrixWorld);for(let ae=0,ne=A.length;ae<ne;ae++){const te=A[ae];if(te.texture!==null&&te.boundingBox.containsPoint(L))return te}return null}function Ni(A,$,ae,ne,te){$.isScene!==!0&&($=Vt),M.resetTextureUnits();const Ne=$.fog,Ge=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?$.environment:null,Re=W===null?X.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Mt.workingColorSpace,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Qe=K.get(ne.envMap||Ge,Xe),lt=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ct=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),$e=!!ae.morphAttributes.position,Tt=!!ae.morphAttributes.normal,Gt=!!ae.morphAttributes.color;let $t=Hi;ne.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&($t=X.toneMapping);const Ut=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,sn=Ut!==void 0?Ut.length:0,ze=P.get(ne),_n=D.state.lights;if(kt===!0&&(ut===!0||A!==q)){const Ft=A===q&&ne.id===Z;Pe.setState(ne,A,Ft)}let xt=!1;ne.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==_n.state.version||ze.outputColorSpace!==Re||te.isBatchedMesh&&ze.batching===!1||!te.isBatchedMesh&&ze.batching===!0||te.isBatchedMesh&&ze.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&ze.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&ze.instancing===!1||!te.isInstancedMesh&&ze.instancing===!0||te.isSkinnedMesh&&ze.skinning===!1||!te.isSkinnedMesh&&ze.skinning===!0||te.isInstancedMesh&&ze.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ze.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&ze.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&ze.instancingMorph===!1&&te.morphTexture!==null||ze.envMap!==Qe||ne.fog===!0&&ze.fog!==Ne||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Pe.numPlanes||ze.numIntersection!==Pe.numIntersection)||ze.vertexAlphas!==lt||ze.vertexTangents!==ct||ze.morphTargets!==$e||ze.morphNormals!==Tt||ze.morphColors!==Gt||ze.toneMapping!==$t||ze.morphTargetsCount!==sn||!!ze.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,ze.__version=ne.version);let On=ze.currentProgram;xt===!0&&(On=Ki(ne,$,te),H&&ne.isNodeMaterial&&H.onUpdateProgram(ne,On,ze));let kn=!1,_t=!1,Zi=!1;const Dt=On.getUniforms(),Wt=ze.uniforms;if(De.useProgram(On.program)&&(kn=!0,_t=!0,Zi=!0),ne.id!==Z&&(Z=ne.id,_t=!0),ze.needsLights){const Ft=Fn(D.state.lightProbeGridArray,te);ze.lightProbeGrid!==Ft&&(ze.lightProbeGrid=Ft,_t=!0)}if(kn||q!==A){De.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Dt.setValue(z,"projectionMatrix",A.projectionMatrix),Dt.setValue(z,"viewMatrix",A.matrixWorldInverse);const gi=Dt.map.cameraPosition;gi!==void 0&&gi.setValue(z,wt.setFromMatrixPosition(A.matrixWorld)),Nt.logarithmicDepthBuffer&&Dt.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Dt.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,_t=!0,Zi=!0)}if(ze.needsLights&&(_n.state.directionalShadowMap.length>0&&Dt.setValue(z,"directionalShadowMap",_n.state.directionalShadowMap,M),_n.state.spotShadowMap.length>0&&Dt.setValue(z,"spotShadowMap",_n.state.spotShadowMap,M),_n.state.pointShadowMap.length>0&&Dt.setValue(z,"pointShadowMap",_n.state.pointShadowMap,M)),te.isSkinnedMesh){Dt.setOptional(z,te,"bindMatrix"),Dt.setOptional(z,te,"bindMatrixInverse");const Ft=te.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Dt.setValue(z,"boneTexture",Ft.boneTexture,M))}te.isBatchedMesh&&(Dt.setOptional(z,te,"batchingTexture"),Dt.setValue(z,"batchingTexture",te._matricesTexture,M),Dt.setOptional(z,te,"batchingIdTexture"),Dt.setValue(z,"batchingIdTexture",te._indirectTexture,M),Dt.setOptional(z,te,"batchingColorTexture"),te._colorsTexture!==null&&Dt.setValue(z,"batchingColorTexture",te._colorsTexture,M));const mi=ae.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&nt.update(te,ae,On),(_t||ze.receiveShadow!==te.receiveShadow)&&(ze.receiveShadow=te.receiveShadow,Dt.setValue(z,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&$.environment!==null&&(Wt.envMapIntensity.value=$.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=XE()),_t){if(Dt.setValue(z,"toneMappingExposure",X.toneMappingExposure),ze.needsLights&&_c(Wt,Zi),Ne&&ne.fog===!0&&de.refreshFogUniforms(Wt,Ne),de.refreshMaterialUniforms(Wt,ne,Ie,Be,D.state.transmissionRenderTarget[A.id]),ze.needsLights&&ze.lightProbeGrid){const Ft=ze.lightProbeGrid;Wt.probesSH.value=Ft.texture,Wt.probesMin.value.copy(Ft.boundingBox.min),Wt.probesMax.value.copy(Ft.boundingBox.max),Wt.probesResolution.value.copy(Ft.resolution)}tc.upload(z,dt(ze),Wt,M)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(tc.upload(z,dt(ze),Wt,M),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Dt.setValue(z,"center",te.center),Dt.setValue(z,"modelViewMatrix",te.modelViewMatrix),Dt.setValue(z,"normalMatrix",te.normalMatrix),Dt.setValue(z,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const Ft=ne.uniformsGroups;for(let gi=0,Li=Ft.length;gi<Li;gi++){const Jr=Ft[gi];he.update(Jr,On),he.bind(Jr,On)}}return On}function _c(A,$){A.ambientLightColor.needsUpdate=$,A.lightProbe.needsUpdate=$,A.directionalLights.needsUpdate=$,A.directionalLightShadows.needsUpdate=$,A.pointLights.needsUpdate=$,A.pointLightShadows.needsUpdate=$,A.spotLights.needsUpdate=$,A.spotLightShadows.needsUpdate=$,A.rectAreaLights.needsUpdate=$,A.hemisphereLights.needsUpdate=$}function vc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,$,ae){const ne=P.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),P.get(A.texture).__webglTexture=$,P.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,$){const ae=P.get(A);ae.__webglFramebuffer=$,ae.__useDefaultFramebuffer=$===void 0};const Zt=z.createFramebuffer();this.setRenderTarget=function(A,$=0,ae=0){W=A,se=$,oe=ae;let ne=null,te=!1,Ne=!1;if(A){const Re=P.get(A);if(Re.__useDefaultFramebuffer!==void 0){De.bindFramebuffer(z.FRAMEBUFFER,Re.__webglFramebuffer),Y.copy(A.viewport),ce.copy(A.scissor),ue=A.scissorTest,De.viewport(Y),De.scissor(ce),De.setScissorTest(ue),Z=-1;return}else if(Re.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(Re.__hasExternalTextures)M.rebindTextures(A,P.get(A.texture).__webglTexture,P.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const lt=A.depthTexture;if(Re.__boundDepthTexture!==lt){if(lt!==null&&P.has(lt)&&(A.width!==lt.image.width||A.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ne=!0);const Qe=P.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[$])?ne=Qe[$][ae]:ne=Qe[$],te=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?ne=P.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?ne=Qe[ae]:ne=Qe,Y.copy(A.viewport),ce.copy(A.scissor),ue=A.scissorTest}else Y.copy(ge).multiplyScalar(Ie).floor(),ce.copy(Fe).multiplyScalar(Ie).floor(),ue=Ze;if(ae!==0&&(ne=Zt),De.bindFramebuffer(z.FRAMEBUFFER,ne)&&De.drawBuffers(A,ne),De.viewport(Y),De.scissor(ce),De.setScissorTest(ue),te){const Re=P.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+$,Re.__webglTexture,ae)}else if(Ne){const Re=$;for(let Xe=0;Xe<A.textures.length;Xe++){const Qe=P.get(A.textures[Xe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Xe,Qe.__webglTexture,ae,Re)}}else if(A!==null&&ae!==0){const Re=P.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Re.__webglTexture,ae)}Z=-1},this.readRenderTargetPixels=function(A,$,ae,ne,te,Ne,Ge,Re=0){if(!(A&&A.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe){De.bindFramebuffer(z.FRAMEBUFFER,Xe);try{const Qe=A.textures[Re],lt=Qe.format,ct=Qe.type;if(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Re),!Nt.textureFormatReadable(lt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(ct)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=A.width-ne&&ae>=0&&ae<=A.height-te&&z.readPixels($,ae,ne,te,V.convert(lt),V.convert(ct),Ne)}finally{const Qe=W!==null?P.get(W).__webglFramebuffer:null;De.bindFramebuffer(z.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(A,$,ae,ne,te,Ne,Ge,Re=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe)if($>=0&&$<=A.width-ne&&ae>=0&&ae<=A.height-te){De.bindFramebuffer(z.FRAMEBUFFER,Xe);const Qe=A.textures[Re],lt=Qe.format,ct=Qe.type;if(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Re),!Nt.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,$e),z.bufferData(z.PIXEL_PACK_BUFFER,Ne.byteLength,z.STREAM_READ),z.readPixels($,ae,ne,te,V.convert(lt),V.convert(ct),0);const Tt=W!==null?P.get(W).__webglFramebuffer:null;De.bindFramebuffer(z.FRAMEBUFFER,Tt);const Gt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ov(z,Gt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,$e),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ne),z.deleteBuffer($e),z.deleteSync(Gt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,$=null,ae=0){const ne=Math.pow(2,-ae),te=Math.floor(A.image.width*ne),Ne=Math.floor(A.image.height*ne),Ge=$!==null?$.x:0,Re=$!==null?$.y:0;M.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,ae,0,0,Ge,Re,te,Ne),De.unbindTexture()};const Sc=z.createFramebuffer(),Ma=z.createFramebuffer();this.copyTextureToTexture=function(A,$,ae=null,ne=null,te=0,Ne=0){let Ge,Re,Xe,Qe,lt,ct,$e,Tt,Gt;const $t=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(ae!==null)Ge=ae.max.x-ae.min.x,Re=ae.max.y-ae.min.y,Xe=ae.isBox3?ae.max.z-ae.min.z:1,Qe=ae.min.x,lt=ae.min.y,ct=ae.isBox3?ae.min.z:0;else{const Wt=Math.pow(2,-te);Ge=Math.floor($t.width*Wt),Re=Math.floor($t.height*Wt),A.isDataArrayTexture?Xe=$t.depth:A.isData3DTexture?Xe=Math.floor($t.depth*Wt):Xe=1,Qe=0,lt=0,ct=0}ne!==null?($e=ne.x,Tt=ne.y,Gt=ne.z):($e=0,Tt=0,Gt=0);const Ut=V.convert($.format),sn=V.convert($.type);let ze;$.isData3DTexture?(M.setTexture3D($,0),ze=z.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(M.setTexture2DArray($,0),ze=z.TEXTURE_2D_ARRAY):(M.setTexture2D($,0),ze=z.TEXTURE_2D),De.activeTexture(z.TEXTURE0),De.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,$.flipY),De.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),De.pixelStorei(z.UNPACK_ALIGNMENT,$.unpackAlignment);const _n=De.getParameter(z.UNPACK_ROW_LENGTH),xt=De.getParameter(z.UNPACK_IMAGE_HEIGHT),On=De.getParameter(z.UNPACK_SKIP_PIXELS),kn=De.getParameter(z.UNPACK_SKIP_ROWS),_t=De.getParameter(z.UNPACK_SKIP_IMAGES);De.pixelStorei(z.UNPACK_ROW_LENGTH,$t.width),De.pixelStorei(z.UNPACK_IMAGE_HEIGHT,$t.height),De.pixelStorei(z.UNPACK_SKIP_PIXELS,Qe),De.pixelStorei(z.UNPACK_SKIP_ROWS,lt),De.pixelStorei(z.UNPACK_SKIP_IMAGES,ct);const Zi=A.isDataArrayTexture||A.isData3DTexture,Dt=$.isDataArrayTexture||$.isData3DTexture;if(A.isDepthTexture){const Wt=P.get(A),mi=P.get($),Ft=P.get(Wt.__renderTarget),gi=P.get(mi.__renderTarget);De.bindFramebuffer(z.READ_FRAMEBUFFER,Ft.__webglFramebuffer),De.bindFramebuffer(z.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let Li=0;Li<Xe;Li++)Zi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,P.get(A).__webglTexture,te,ct+Li),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,P.get($).__webglTexture,Ne,Gt+Li)),z.blitFramebuffer(Qe,lt,Ge,Re,$e,Tt,Ge,Re,z.DEPTH_BUFFER_BIT,z.NEAREST);De.bindFramebuffer(z.READ_FRAMEBUFFER,null),De.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||P.has(A)){const Wt=P.get(A),mi=P.get($);De.bindFramebuffer(z.READ_FRAMEBUFFER,Sc),De.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ma);for(let Ft=0;Ft<Xe;Ft++)Zi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Wt.__webglTexture,te,ct+Ft):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Wt.__webglTexture,te),Dt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,mi.__webglTexture,Ne,Gt+Ft):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,mi.__webglTexture,Ne),te!==0?z.blitFramebuffer(Qe,lt,Ge,Re,$e,Tt,Ge,Re,z.COLOR_BUFFER_BIT,z.NEAREST):Dt?z.copyTexSubImage3D(ze,Ne,$e,Tt,Gt+Ft,Qe,lt,Ge,Re):z.copyTexSubImage2D(ze,Ne,$e,Tt,Qe,lt,Ge,Re);De.bindFramebuffer(z.READ_FRAMEBUFFER,null),De.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Dt?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(ze,Ne,$e,Tt,Gt,Ge,Re,Xe,Ut,sn,$t.data):$.isCompressedArrayTexture?z.compressedTexSubImage3D(ze,Ne,$e,Tt,Gt,Ge,Re,Xe,Ut,$t.data):z.texSubImage3D(ze,Ne,$e,Tt,Gt,Ge,Re,Xe,Ut,sn,$t):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ne,$e,Tt,Ge,Re,Ut,sn,$t.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ne,$e,Tt,$t.width,$t.height,Ut,$t.data):z.texSubImage2D(z.TEXTURE_2D,Ne,$e,Tt,Ge,Re,Ut,sn,$t);De.pixelStorei(z.UNPACK_ROW_LENGTH,_n),De.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xt),De.pixelStorei(z.UNPACK_SKIP_PIXELS,On),De.pixelStorei(z.UNPACK_SKIP_ROWS,kn),De.pixelStorei(z.UNPACK_SKIP_IMAGES,_t),Ne===0&&$.generateMipmaps&&z.generateMipmap(ze),De.unbindTexture()},this.initRenderTarget=function(A){P.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),De.unbindTexture()},this.resetState=function(){se=0,oe=0,W=null,De.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=s=>{const e=YE(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ud={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},ZE=mt.createContext({}),QE=()=>mt.useContext(ZE),JE=mt.forwardRef(({color:s,size:e,strokeWidth:t,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},h)=>{const{size:p=24,strokeWidth:_=2,absoluteStrokeWidth:S=!1,color:g="currentColor",className:y=""}=QE()??{},w=r??S?Number(t??_)*24/Number(e??p):t??_;return mt.createElement("svg",{ref:h,...Ud,width:e??p??Ud.width,height:e??p??Ud.height,stroke:s??g,strokeWidth:w,className:b0("lucide",y,o),...!l&&!KE(f)&&{"aria-hidden":"true"},...f},[...u.map(([R,v])=>mt.createElement(R,v)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=(s,e)=>{const t=mt.forwardRef(({className:r,...o},l)=>mt.createElement(JE,{ref:l,iconNode:e,className:b0(`lucide-${$E(Og(s))}`,`lucide-${s}`,r),...o}));return t.displayName=Og(s),t};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],tT=qt("activity",eT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["path",{d:"M12 6.528V3a1 1 0 0 1 1-1h0",key:"11qiee"}],["path",{d:"M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21",key:"110c12"}]],iT=qt("apple",nT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],sT=qt("calendar-days",rT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],oT=qt("camera",aT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],cT=qt("circle-check",lT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],dT=qt("chevron-down",uT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Ms=qt("clipboard-list",fT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],qf=qt("dumbbell",hT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],$f=qt("flame",pT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],Yf=qt("gauge",mT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]],A0=qt("goal",gT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],_T=qt("leaf",xT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],ST=qt("boxes",vT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],MT=qt("list-checks",yT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["path",{d:"M5 12h14",key:"1ays0h"}]],Kf=qt("minus",ET);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m16 17 2 2 4-4",key:"uh5qu3"}],["path",{d:"M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",key:"kpkbpo"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]],wT=qt("package-check",TT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Zf=qt("plus",bT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],cc=qt("rotate-ccw",AT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],RT=qt("settings-2",CT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]],NT=qt("shopping-basket",PT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],C0=qt("sparkles",LT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],IT=qt("timer",DT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],Qf=qt("utensils",UT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jf=qt("x",FT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],kT=qt("zap",OT),eh=s=>`./assets/${s}`,th=s=>eh(`generated/${s}`),kg={p:140,c:225,f:60,kcal:2e3},BT=2900,zT=135,R0={pasta:{name:"意面 · Garlic oil",short:"意面",sub:"力量日最爽",unit:"g",step:10,perUnit:{p:.12,c:.71,f:.015},kcalUnit:3.55,color:"#ffb55c"},soba:{name:"荞麦面 · Soba",short:"荞麦",sub:"清爽低负担",unit:"g",step:10,perUnit:{p:.14,c:.66,f:.023},kcalUnit:3.44,color:"#9fb58f"},nissin:{name:"日清非油炸",short:"日清",sub:"懒人汤面",unit:"包",step:1,perUnit:{p:6.7,c:55,f:4.9},kcalUnit:291,color:"#ff766f"},pho:{name:"越南米粉",short:"米粉",sub:"低脂换口味",unit:"包",step:1,perUnit:{p:4,c:43,f:2},kcalUnit:210,color:"#7bd6d0"},bifun:{name:"纯干米粉",short:"干米粉",sub:"纯碳水补满",unit:"g",step:10,perUnit:{p:.06,c:.79,f:.005},kcalUnit:3.45,color:"#f7df77"}},P0={beef:{label:"牛肉切り落とし",short:"牛肉",tag:"raw · per g",unit:"g",step:10,p:.19,c:0,max:650,note:"脂肪按包装校准"},chicken:{label:"速食鸡胸",short:"鸡胸",tag:"per pack",unit:"块",step:1,p:22,c:1,f:2,max:6,note:"最稳高蛋白"},duck:{label:"合鸭胸去皮",short:"合鸭",tag:"100g serve",unit:"份",step:1,p:21,c:.5,f:6,max:4,note:"香但不太肥"},kfc:{label:"KFC 原味鸡",short:"KFC",tag:"per piece",unit:"块",step:1,p:18,c:8,f:14,max:5,note:"爽，但盐高"},oikos:{label:"Oikos 高蛋白酸奶",short:"Oikos",tag:"per cup",unit:"個",step:1,p:12,c:5,f:0,max:8,note:"零脂补蛋白"}},N0={egg_fried:{label:"煎蛋",short:"煎蛋",unit:"个",step:1,p:6,c:.4,f:7,max:6},sauce:{label:"ペペロン酱",short:"蒜油酱",unit:"包",step:1,p:.9,c:1.5,f:10,max:2},olive:{label:"橄榄油",short:"橄榄油",unit:"小勺",step:1,p:0,c:0,f:4.5,max:6},nuts:{label:"素焼きナッツ",short:"坚果",unit:"10g",step:1,p:2,c:2,f:5,max:5},avocado:{label:"アボカド",short:"牛油果",unit:"半个",step:1,p:1,c:4,f:15,max:2}},dr={banana:{label:"香蕉",unit:"根",step:1,max:4,p:1,c:27,f:.3},apple:{label:"苹果",unit:"个",step:1,max:3,p:.4,c:35,f:.3},kiwi:{label:"奇异果",unit:"个",step:1,max:4,p:1,c:14,f:.2},pineapple:{label:"切块菠萝 240g",unit:"盒",step:1,max:2,p:1.44,c:31.2,f:.24},yogurt:{label:"无糖酸奶",unit:"g",step:50,max:400,p:.036,c:.049,f:.03}},L0={chicken:{label:"鸡胸",unit:"块",step:1,max:10,p:22,c:1,f:2},egg:{label:"全蛋",unit:"个",step:1,max:10,p:6,c:.5,f:5},oikos:{label:"Oikos",unit:"個",step:1,max:6,p:12,c:5,f:0},onigiri:{label:"饭团",unit:"个",step:1,max:6,p:3,c:39,f:.5},nissin:{label:"日清面",unit:"包",step:1,max:4,p:6.7,c:55,f:4.9},rice:{label:"米饭",unit:"g",step:50,max:1e3,p:.026,c:.28,f:.003},beef:{label:"牛肉",unit:"g",step:50,max:600,p:.19,c:0,f:.072},pasta:{label:"干意面",unit:"g",step:50,max:300,p:.12,c:.71,f:.015},banana:{label:"香蕉",unit:"根",step:1,max:4,p:1,c:27,f:.25}},_a={chicken:{label:"鸡胸",unit:"块",step:1,max:5,p:22,c:1,f:2},eggs:{label:"全蛋",unit:"个",step:1,max:6,p:6,c:.5,f:5},banana:{label:"香蕉",unit:"根",step:1,max:4,p:1,c:27,f:.25},pineapple:{label:"菠萝 240g",unit:"盒",step:1,max:2,p:1.44,c:31.2,f:.24},oikos:{label:"Oikos",unit:"個",step:1,max:5,p:12,c:5,f:0}},Yr={tomato:{label:"无盐番茄汁",sub:"K 600 / 200ml",p:1.8,c:7.1,f:0,kcal:39,k:600,na:5},yasai:{label:"野菜一日",sub:"K 740 / 200ml",p:3,c:14.5,f:0,kcal:75,k:740,na:80},none:{label:"不补钾",sub:"今天省了",p:0,c:0,f:0,kcal:0,k:0,na:0}},D0=[{id:"burger",label:"汉堡 + 薯条",kcal:980},{id:"ramen",label:"拉面 + 饭",kcal:1200},{id:"sushi",label:"回转寿司 12 皿",kcal:1050},{id:"pizza",label:"Pizza 半张",kcal:1150},{id:"dessert",label:"甜品奶茶",kcal:620},{id:"katsu",label:"炸猪排咖喱",kcal:1450}],VT=[{id:"plan",label:"今日",icon:Qf},{id:"detail",label:"明细",icon:Yf},{id:"shop",label:"采购",icon:NT},{id:"cheat",label:"放松",icon:$f}],jr={p:0,c:0,f:0,kcal:0},yn=(s,e,t)=>Math.max(e,Math.min(t,Number(s)||0)),tn=(s,e=0)=>Number((Number(s)||0).toFixed(e)),Cs=s=>s.kcal??s.p*4+s.c*4+s.f*9,xo=s=>({...s,kcal:Cs(s)}),Bi=(...s)=>xo(s.reduce((e,t)=>({p:e.p+((t==null?void 0:t.p)||0),c:e.c+((t==null?void 0:t.c)||0),f:e.f+((t==null?void 0:t.f)||0),kcal:e.kcal+Cs(t||jr)}),{...jr}));function ti(s,e){return xo({p:s.p*e,c:s.c*e,f:s.f*e})}async function I0(s){var t;if((t=navigator.clipboard)!=null&&t.writeText&&window.isSecureContext)try{await navigator.clipboard.writeText(s);return}catch{}const e=document.createElement("textarea");e.value=s,e.setAttribute("readonly",""),e.style.position="fixed",e.style.left="-9999px",e.style.top="0",e.style.fontSize="16px",document.body.appendChild(e),e.focus(),e.select(),e.setSelectionRange(0,s.length);try{if(!document.execCommand("copy"))throw new Error("copy command failed")}finally{document.body.removeChild(e)}}function U0(s){return Object.entries(s).filter(([e,t])=>_a[e]&&t>0)}function GT(s){const e=U0(s);return e.length?e.map(([t,r])=>`${_a[t].label} ${tn(r)}${_a[t].unit}`).join(" / "):"不吃"}function HT(s,e){const t=Yr[s]||Yr.none;return s==="none"||e<=0?"不喝":`${t.label} ${tn(e)}ml`}function F0(s,e,t){return U0(s).length>0||e!=="none"&&t>0}function O0(s,e,t){return`${GT(s)} · ${HT(e,t)}`}function WT(s,e){return s.map(t=>{const r=t.qty,o=e[t.key]||0,l=t.max??1/0,u=yn(r+o,0,l),f=tn(u-r,t.step<1?1:2);return{...t,baseQty:r,qty:u,adjustment:f,macro:ti(t.unitMacro,u)}})}function Fd(s,e){return!Number.isFinite(s)||s<=0?0:Math.max(0,Math.round(s/e)*e)}function jT(s){return xo({p:s*.31/4,c:s*.49/4,f:s*.2/9,kcal:s})}function XT(s,e){const t=P0[s];return{...t,f:s==="beef"?e*.8/100:t.f}}function qT(s,e){const[t,r]=mt.useState(()=>{const o=Number(localStorage.getItem(s));return Number.isFinite(o)&&o>0?o:e});return mt.useEffect(()=>{localStorage.setItem(s,String(t))},[s,t]),[t,r]}function $T({tone:s="warm"}){const e=mt.useRef(null);return mt.useEffect(()=>{const t=e.current;if(!t)return;const r=()=>{const O=document.createElement("canvas");O.dataset.engine="2d-fallback";const E=O.getContext("2d");t.appendChild(O);const U=()=>{const{width:oe,height:W}=t.getBoundingClientRect(),Z=Math.min(window.devicePixelRatio||1,2);O.width=Math.max(1,Math.floor(oe*Z)),O.height=Math.max(1,Math.floor(W*Z)),O.style.width=`${Math.max(1,oe)}px`,O.style.height=`${Math.max(1,W)}px`,E.setTransform(Z,0,0,Z,0,0)};U();const X=new ResizeObserver(U);X.observe(t);let I=0;const H=Array.from({length:46},(oe,W)=>({angle:W*.72,radius:70+W%9*22,color:["#c8a86a","#6f8f7a","#d9d0bd"][W%3],size:2.5+W%5})),se=()=>{I=window.requestAnimationFrame(se);const{width:oe,height:W}=O.getBoundingClientRect();E.clearRect(0,0,oe,W);const Z=E.createRadialGradient(oe*.55,W*.28,0,oe*.55,W*.28,Math.max(oe,W)*.75);Z.addColorStop(0,"rgba(200,168,106,0.10)"),Z.addColorStop(.45,"rgba(111,143,122,0.08)"),Z.addColorStop(1,"rgba(0,0,0,0)"),E.fillStyle=Z,E.fillRect(0,0,oe,W),E.globalCompositeOperation="screen",H.forEach(q=>{q.angle+=.006;const Y=oe*.5+Math.cos(q.angle)*q.radius*(oe/390),ce=W*.46+Math.sin(q.angle)*q.radius*.52*(W/844);E.beginPath(),E.fillStyle=q.color,E.globalAlpha=.24,E.arc(Y,ce,q.size,0,Math.PI*2),E.fill()}),E.globalAlpha=1,E.globalCompositeOperation="source-over"};return se(),()=>{window.cancelAnimationFrame(I),X.disconnect(),t.removeChild(O)}},o=document.createElement("canvas");let l=!1;try{l=!!(o.getContext("webgl2")||o.getContext("webgl"))}catch{l=!1}if(!l)return r();const u=new Ev,f=new ni(45,1,.1,100);f.position.set(0,0,9);let h;try{h=new qE({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{return r()}h.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),h.setClearColor(0,0),t.appendChild(h.domElement);const p=new fo;u.add(p),u.add(new Yv(16777215,.75));const _=new dg(16760179,3.4,22);_.position.set(4,2,6),u.add(_);const S=new dg(9752970,2.1,18);S.position.set(-5,-2,4),u.add(S);const g=s==="cool"?[7311226,12165996,14274749]:[13150314,7311226,14274749],y=new Xf(.16,32,32),w=g.flatMap((O,E)=>{const U=new Wv({color:O,emissive:O,emissiveIntensity:.22,roughness:.22,metalness:.24});return Array.from({length:9},(X,I)=>{const H=new Xi(y,U),se=I/9*Math.PI*2+E*.55,oe=2.05+E*.68;return H.position.set(Math.cos(se)*oe,Math.sin(se)*oe*.48,E*-.4),H.userData={angle:se,radius:oe,band:E,speed:.004+E*.0015},p.add(H),H})});[2.05,2.75,3.45].forEach((O,E)=>{const X=new kv(0,0,O,O*.48,0,Math.PI*2).getPoints(120).map(oe=>new Q(oe.x,oe.y,-.5+E*-.2)),I=new qn().setFromPoints(X),H=new u0({color:g[E],transparent:!0,opacity:.14}),se=new Iv(I,H);se.rotation.z=E*.34,p.add(se)});const R=120,v=new qn,x=new Float32Array(R*3);for(let O=0;O<R;O+=1){const E=O*1.618,U=1.5+O*37%100/22;x[O*3]=Math.cos(E)*U,x[O*3+1]=Math.sin(E*.9)*U*.42,x[O*3+2]=-2.2-O*17%80/32}v.setAttribute("position",new Ri(x,3));const C=new Uv(v,new d0({color:14206883,size:.035,transparent:!0,opacity:.22}));u.add(C);const N=()=>{const{width:O,height:E}=t.getBoundingClientRect();h.setSize(Math.max(1,O),Math.max(1,E),!1),f.aspect=Math.max(1,O)/Math.max(1,E),f.updateProjectionMatrix()};N();const L=new ResizeObserver(N);L.observe(t);let B=0;const D=()=>{B=window.requestAnimationFrame(D),p.rotation.z+=.0018,p.rotation.y=Math.sin(Date.now()*35e-5)*.18,C.rotation.z-=9e-4,w.forEach(O=>{O.userData.angle+=O.userData.speed;const{angle:E,radius:U,band:X}=O.userData;O.position.x=Math.cos(E)*U,O.position.y=Math.sin(E)*U*.48,O.position.z=-.25-X*.42+Math.sin(E*2)*.12}),h.render(u,f)};return D(),()=>{window.cancelAnimationFrame(B),L.disconnect(),h.dispose(),y.dispose(),v.dispose(),t.removeChild(h.domElement)}},[s]),b.jsx("div",{ref:e,className:"pointer-events-none fixed inset-0 -z-10 opacity-45","data-three-orbit":!0})}function YT(){const[s,e]=mt.useState("plan"),[t,r]=mt.useState(kg),[o,l]=qT("cutting:tdee",BT),[u,f]=mt.useState("quick"),[h,p]=mt.useState(800),[_,S]=mt.useState({}),[g,y]=mt.useState("pasta"),[w,R]=mt.useState(["beef"]),[v,x]=mt.useState(["sauce","egg_fried"]),[C,N]=mt.useState({}),[L,B]=mt.useState(13),[D,O]=mt.useState({}),[E,U]=mt.useState("tomato"),[X,I]=mt.useState(400),[H,se]=mt.useState(6.5),[oe,W]=mt.useState(2e3),[Z,q]=mt.useState(7),[Y,ce]=mt.useState(!1),[ue,k]=mt.useState(!1),[ee,Ue]=mt.useState(!1),[Be,Ie]=mt.useState({}),[re,Se]=mt.useState({name:"手动加餐",p:0,c:0,f:0,kcal:0}),[ge,Fe]=mt.useState({}),[Ze,Ye]=mt.useState("idle"),[kt,ut]=mt.useState(""),[Et,wt]=mt.useState(!1),at=mt.useRef(0),Vt=(fe,xe,Me,de=1/0)=>{fe(pe=>{const Le=yn(Me,0,de),Pe={...pe};return Le>0?Pe[xe]=Le:delete Pe[xe],Pe})},Bt=fe=>{R(xe=>xe.includes(fe)?xe.length>1?xe.filter(Me=>Me!==fe):xe:[...xe,fe])},ln=fe=>{x(xe=>xe.includes(fe)?xe.filter(Me=>Me!==fe):[...xe,fe])},z=mt.useMemo(()=>{var vr,Ki;const fe=Object.entries(_).reduce((dt,[ot,Fn])=>Bi(dt,ti(L0[ot],Fn)),jr),xe=u==="tally"&&fe.kcal>0?fe:jT(h),Me=Object.entries(D).reduce((dt,[ot,Fn])=>Bi(dt,ti(_a[ot],Fn)),jr),de=Yr[E]||Yr.none,pe=xo(ti(de,X/200));pe.kcal=de.kcal*(X/200);const Le=xo(re),Pe=Bi(xe,Me,pe,Le),be=Object.entries(C).filter(([dt,ot])=>dr[dt]&&ot>0),Te=be.reduce((dt,[ot,Fn])=>Bi(dt,ti(dr[ot],Fn)),jr),nt=be.map(([dt,ot])=>({key:`extra-${dt}`,name:dr[dt].label,qty:ot,unit:dr[dt].unit,step:dr[dt].step,max:dr[dt].max,unitMacro:dr[dt],macro:ti(dr[dt],ot),tone:"gold"})),rt=Math.max(0,Math.min(zT,t.p)-Pe.p),pt=w.map(dt=>{const ot=XT(dt,L),Fn=rt/Math.max(1,w.length)/ot.p,Ni=yn(Fd(Fn,ot.step),0,ot.max);return{key:dt,name:ot.label,short:ot.short,qty:Ni,unit:ot.unit,step:ot.step,max:ot.max,unitMacro:ot,macro:ti(ot,Ni),tone:"red"}}).filter(dt=>dt.qty>0),V=pt.reduce((dt,ot)=>Bi(dt,ot.macro),jr),we=Math.max(0,t.f-Pe.f-Te.f-V.f),he=v.length?v:[],Oe=he.map(dt=>{const ot=N0[dt],Fn=we/Math.max(1,he.length)/ot.f,Ni=yn(Fd(Fn,ot.step),0,ot.max);return{key:`fat-${dt}`,name:ot.label,short:ot.short,qty:Ni,unit:ot.unit,step:ot.step,max:ot.max,unitMacro:ot,macro:ti(ot,Ni),tone:"amber"}}).filter(dt=>dt.qty>0),Ce=Oe.reduce((dt,ot)=>Bi(dt,ot.macro),jr),_e=Bi(Pe,Te,V,Ce),We=Math.max(0,t.kcal-_e.kcal),Je=R0[g],Lt=Je.unit==="包"?8:420,yt=yn(Fd(We/Je.kcalUnit,Je.step),0,Lt),xn=ti(Je.perUnit,yt),Un=yt>0?[{key:`carb-${g}`,name:Je.name,short:Je.short,qty:yt,unit:Je.unit,step:Je.step,max:Lt,unitMacro:Je.perUnit,macro:xn,tone:"green"}]:[],$n=WT([...pt,...Oe,...nt,...Un],Be),$i=$n.reduce((dt,ot)=>Bi(dt,ot.macro),jr),Pi=Bi(Pe,$i),_r=Math.round(o-Pi.kcal),pi=(((vr=Yr[E])==null?void 0:vr.k)||0)*(X/200),Qr=(((Ki=Yr[E])==null?void 0:Ki.na)||0)*(X/200),Rs=H*393+Qr,si=oe+pi,Yi=$n.filter(dt=>dt.qty>0).map(dt=>({...dt,weeklyQty:tn(dt.qty*Z,dt.unit==="g"?0:1)}));return{lunch:xe,pre:Me,drink:pe,snack:Le,beforeDinner:Pe,dinner:$i,dinnerItems:$n,total:Pi,deficit:_r,potassium:si,sodium:Rs,shopping:Yi,carb:Je}},[L,g,Be,E,X,C,v,oe,h,u,D,H,Z,re,_,t,o,w]),It=D0.reduce((fe,xe)=>fe+(ge[xe.id]||0)*xe.kcal,0),ht=Math.round(z.total.kcal+It-o),Nt=F0(D,E,X),De=O0(D,E,X),zt=re.kcal>0||re.p>0||re.c>0||re.f>0,P=(fe,xe)=>{Ie(Me=>{const de=fe.baseQty??fe.qty,pe=yn(fe.qty+xe,0,fe.max??1/0),Le=tn(pe-de,fe.step<1?1:2),Pe={...Me};return Le!==0?Pe[fe.key]=Le:delete Pe[fe.key],Pe})},M=()=>{r(kg),p(800),S({}),y("pasta"),R(["beef"]),x(["sauce","egg_fried"]),N({}),B(13),O({}),U("tomato"),I(400),Ie({}),Se({name:"手动加餐",p:0,c:0,f:0,kcal:0})};mt.useEffect(()=>()=>window.clearTimeout(at.current),[]);const K=()=>({date:new Date().toISOString().slice(0,10),targets:t,lunch:z.lunch,pre:z.pre,drink:{key:E,ml:X,macro:z.drink},snack:re,dinnerAdjustments:Be,dinner:{items:z.dinnerItems,macro:z.dinner},total:z.total,deficit:z.deficit}),me=async()=>{const fe={...K(),copiedAt:new Date().toISOString()},xe=JSON.stringify(fe,null,2);ut(xe),window.clearTimeout(at.current),Ye("copying");try{await I0(xe),wt(!1),Ye("copied")}catch(Me){console.error(Me),Ye("failed"),wt(!0)}at.current=window.setTimeout(()=>Ye("idle"),1800)};return b.jsxs("div",{className:"min-h-screen overflow-hidden text-[#eee8dc]",children:[b.jsx($T,{tone:s==="cheat"?"cool":"warm"}),b.jsx("div",{className:"premium-app-bg fixed inset-0 -z-20"}),b.jsx("div",{className:"premium-grid-bg fixed inset-0 -z-10 opacity-20"}),b.jsxs("div",{className:"mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-28 pt-4 sm:px-6 lg:px-8",children:[b.jsxs("header",{className:"premium-header-shadow sticky top-3 z-40 flex items-center justify-between gap-2 rounded-lg border border-[#d8c7a3]/12 bg-[#090b0a]/75 px-2 py-2 backdrop-blur-2xl sm:gap-3 sm:px-3",children:[b.jsxs("button",{onClick:()=>e("plan"),className:"flex min-w-0 items-center gap-2 text-left",children:[b.jsx("span",{className:"grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#d8c7a3] text-[#11110d]",children:b.jsx(C0,{className:"h-4 w-4"})}),b.jsxs("span",{className:"block min-w-0",children:[b.jsx("span",{className:"block truncate font-display text-base leading-none text-[#f2eadb]",children:"Cutting Lab"}),b.jsx("span",{className:"mt-1 block truncate text-[10px] uppercase tracking-[0.24em] text-[#918a7c]",children:"daily console"})]})]}),b.jsx("nav",{className:"ml-auto hidden shrink-0 grid-cols-4 rounded-lg border border-[#d8c7a3]/10 bg-[#151612]/70 p-1 lg:grid",children:b.jsx(Bg,{tab:s,setTab:e,mode:"top"})})]}),s==="plan"&&b.jsx(KT,{model:z,targets:t,onFuel:()=>k(!0),fuelActive:Nt,fuelSummary:De,onSnack:()=>Ue(!0),onCopy:me,copyStatus:Ze}),s==="plan"&&b.jsx(ZT,{model:z,lunchMode:u,setLunchMode:f,lunchKcal:h,setLunchKcal:p,tally:_,setTally:S,setMapQty:Vt,carbPlan:g,setCarbPlan:y,proteinKeys:w,toggleProtein:Bt,fatKeys:v,toggleFat:ln,extraCarbs:C,setExtraCarbs:N,beefFat:L,setBeefFat:B,advancedOpen:Y,setAdvancedOpen:ce,targets:t,setTargets:r,resetDefaults:M,onTuneDinner:P,resetDinnerAdjustments:()=>Ie({})}),s==="detail"&&b.jsx(QT,{model:z,targets:t,setTargets:r,tdee:o,setTdee:l,pre:D,setPre:O,setMapQty:Vt,drinkKey:E,setDrinkKey:U,drinkMl:X,setDrinkMl:I,saltG:H,setSaltG:se,foodK:oe,setFoodK:W}),s==="shop"&&b.jsx(JT,{model:z,shopDays:Z,setShopDays:q}),s==="cheat"&&b.jsx(iw,{cheat:ge,setCheat:Fe,cheatTotal:It,cheatSurplus:ht,tdee:o,dayKcal:z.total.kcal})]}),b.jsx(rw,{open:ue,setOpen:k,pre:D,setPre:O,setMapQty:Vt,drinkKey:E,setDrinkKey:U,drinkMl:X,setDrinkMl:I,model:z}),b.jsx(aw,{open:ee,setOpen:Ue,snack:re,setSnack:Se,active:zt,dinnerSummary:z.dinnerItems.slice(0,4).map(fe=>`${fe.short||fe.name} ${tn(fe.qty)}${fe.unit}`).join(" · ")}),b.jsx(sw,{open:Et,setOpen:wt,text:kt,onCopied:()=>{wt(!1),Ye("copied"),window.clearTimeout(at.current),at.current=window.setTimeout(()=>Ye("idle"),1800)}}),b.jsxs("button",{onClick:()=>Ue(!0),className:"premium-fab-shadow fixed bottom-5 right-5 z-50 hidden h-14 w-14 place-items-center rounded-lg border border-[#d8c7a3]/18 bg-[#d8c7a3] text-[#11110d] transition hover:-translate-y-0.5 lg:grid","aria-label":"零食加餐",children:[b.jsx(oT,{className:"h-6 w-6"}),zt&&b.jsx("span",{className:"absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#6f8f7a]"})]}),b.jsx("nav",{className:"premium-nav-shadow fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 rounded-lg border border-[#d8c7a3]/12 bg-[#080908]/82 p-1 backdrop-blur-2xl lg:hidden",children:b.jsx(Bg,{tab:s,setTab:e,mode:"bottom"})})]})}function Bg({tab:s,setTab:e,mode:t}){return VT.map(r=>{const o=r.icon;return b.jsxs("button",{onClick:()=>e(r.id),className:`grid h-11 place-items-center rounded-md px-2 text-[11px] transition ${t==="top"?"min-w-20 grid-cols-[16px_auto] gap-1.5":"grid-rows-[18px_auto] gap-0.5"} ${s===r.id?"premium-nav-active-shadow bg-[#d8c7a3] text-[#11110d]":"text-[#918a7c] hover:bg-[#d8c7a3]/8 hover:text-[#eee8dc]"}`,"aria-label":r.label,children:[b.jsx(o,{className:"h-4 w-4"}),b.jsx("span",{children:r.label})]},r.id)})}function KT({model:s,targets:e,onFuel:t,fuelActive:r,fuelSummary:o,onSnack:l,onCopy:u,copyStatus:f}){const h=s.deficit>=650?"text-[#9fb58f]":s.deficit>=300?"text-[#d8c7a3]":"text-[#c77e68]",p={idle:{label:"复制",sub:"今日记录",icon:Ms},copying:{label:"复制中",sub:"clipboard",icon:Ms},copied:{label:"已复制",sub:"可直接粘贴",icon:cT},failed:{label:"复制失败",sub:"再点一次",icon:Ms}}[f]||{label:"复制",sub:"今日记录",icon:Ms};return b.jsxs("section",{className:"premium-hero-grid relative grid min-h-[72vh] items-end gap-6 py-4 lg:items-center",children:[b.jsxs("div",{className:"relative order-2 lg:order-1",children:[b.jsxs("div",{className:"mb-5 flex flex-wrap items-center gap-2",children:[b.jsxs("div",{className:"inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/12 bg-[#11130f]/78 px-3 py-2 text-xs text-[#bdb4a3] backdrop-blur-xl",children:[b.jsx(tT,{className:"h-4 w-4 text-[#9fb58f]"}),b.jsxs("span",{children:["83 kg · 25% BF · 16:8 IF · ",e.kcal," kcal target"]})]}),b.jsxs("button",{"data-home-fuel-button":!0,onClick:t,className:`inline-flex max-w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-xs backdrop-blur-xl transition hover:-translate-y-0.5 ${r?"border-[#9fb58f]/35 bg-[#9fb58f]/12 text-[#d8e7cf]":"border-[#d8c7a3]/12 bg-[#11130f]/78 text-[#bdb4a3] hover:border-[#d8c7a3]/32"}`,"aria-label":`补给：${o}`,children:[b.jsx(qf,{className:`h-4 w-4 shrink-0 ${r?"text-[#9fb58f]":"text-[#d8c7a3]"}`}),b.jsx("span",{className:"shrink-0 font-cjk font-semibold",children:"补给"}),b.jsx("span",{className:`rounded-md px-2 py-0.5 font-mono text-[10px] ${r?"bg-[#9fb58f] text-[#10110d]":"bg-[#d8c7a3]/10 text-[#cfc4b2]"}`,children:r?"ON":"OFF"}),b.jsx("span",{className:"hidden max-w-[260px] truncate text-[#918a7c] sm:inline",children:o})]})]}),b.jsxs("h1",{className:"max-w-2xl font-display text-4xl leading-[0.98] tracking-normal text-[#f3ecdc] sm:text-6xl lg:text-7xl",children:["今晚吃什么",b.jsx("span",{className:"block text-[#9fb58f]",children:"一眼定"})]}),b.jsx("p",{className:"mt-5 max-w-xl text-sm leading-7 text-[#bdb4a3] sm:text-base",children:"输入今天已经吃掉的部分，系统把晚餐、补给和赤字压成一张清楚的执行卡。少解释，直接吃。"}),b.jsxs("div",{className:"mt-6 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap",children:[b.jsx(kd,{icon:kT,label:"零食",onClick:l}),b.jsx(kd,{icon:p.icon,label:p.label,sub:p.sub,onClick:u,dataAttr:"copy-plan-button"}),b.jsx(kd,{icon:A0,label:`${s.deficit>0?"-":"+"}${Math.abs(s.deficit)}`,sub:"今日赤字"})]})]}),b.jsxs("div",{className:"relative order-1 lg:order-2",children:[b.jsx("div",{className:"absolute -inset-6 rounded-lg bg-[#d8c7a3]/8 blur-3xl"}),b.jsxs("div",{className:"premium-card-shadow relative overflow-hidden rounded-lg border border-[#d8c7a3]/12 bg-[#11130f]/86 backdrop-blur-xl",children:[b.jsx("img",{src:th("protocol-hero-premium.jpg"),alt:"Cutting Lab dinner visual",className:"h-[280px] w-full object-cover object-center saturate-[0.92] contrast-[1.04] sm:h-[440px]"}),b.jsx("div",{className:"premium-hero-overlay absolute inset-0"}),b.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-4 sm:p-5",children:[b.jsxs("div",{className:"mb-3 flex items-end justify-between gap-3",children:[b.jsxs("div",{children:[b.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#d8c7a3]",children:"dinner"}),b.jsx("div",{className:"font-display text-4xl leading-none text-[#f3ecdc] sm:text-5xl",children:Math.round(s.dinner.kcal)}),b.jsx("div",{className:"mt-1 text-xs text-[#918a7c]",children:"晚餐热量"})]}),b.jsxs("div",{className:`rounded-lg border border-[#d8c7a3]/12 bg-[#090b0a]/72 px-3 py-2 text-right backdrop-blur ${h}`,children:[b.jsx("div",{className:"text-[10px] uppercase tracking-[0.2em] text-[#918a7c]",children:"今日赤字"}),b.jsxs("div",{className:"font-mono text-xl",children:[s.deficit>0?"-":"+",Math.abs(s.deficit)]})]})]}),b.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[b.jsx($l,{label:"P",value:s.total.p,target:e.p,unit:"g"}),b.jsx($l,{label:"C",value:s.total.c,target:e.c,unit:"g"}),b.jsx($l,{label:"F",value:s.total.f,target:e.f,unit:"g"}),b.jsx($l,{label:"Kcal",value:s.total.kcal,target:e.kcal,unit:""})]})]})]})]})]})}function ZT(s){const{model:e,lunchMode:t,setLunchMode:r,lunchKcal:o,setLunchKcal:l,tally:u,setTally:f,setMapQty:h,carbPlan:p,setCarbPlan:_,proteinKeys:S,toggleProtein:g,fatKeys:y,toggleFat:w,extraCarbs:R,setExtraCarbs:v,beefFat:x,setBeefFat:C,advancedOpen:N,setAdvancedOpen:L,targets:B,setTargets:D,resetDefaults:O,onTuneDinner:E,resetDinnerAdjustments:U}=s,X=e.dinnerItems.some(I=>I.adjustment!==0);return b.jsxs("main",{className:"grid gap-6 lg:grid-cols-[0.9fr_1.1fr]",children:[b.jsxs("section",{className:"space-y-6",children:[b.jsxs(Ci,{eyebrow:"01 · 先记今天",title:"今天吃到哪了",icon:Ms,children:[b.jsx(ow,{value:t,onChange:r,options:[{value:"quick",label:"直接 kcal"},{value:"tally",label:"点选记账"}]}),t==="quick"?b.jsxs("div",{className:"mt-5",children:[b.jsx("label",{className:"text-[10px] uppercase tracking-[0.24em] text-[#918a7c]",children:"Lunch kcal"}),b.jsxs("div",{className:"mt-2 flex items-end gap-3",children:[b.jsx("input",{type:"number",value:o,onChange:I=>l(yn(I.target.value,0,5e3)),className:"w-36 border-b border-[#d8c7a3]/24 bg-transparent font-display text-6xl leading-none text-[#f2eadb] outline-none focus:border-[#d8c7a3]"}),b.jsx("span",{className:"pb-2 text-xs uppercase tracking-[0.2em] text-[#918a7c]",children:"kcal"})]}),b.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:[600,700,800,900,1e3].map(I=>b.jsx(uc,{active:o===I,onClick:()=>l(I),children:I},I))})]}):b.jsx("div",{className:"mt-5 grid gap-2 sm:grid-cols-2",children:Object.entries(L0).map(([I,H])=>b.jsx(fc,{label:H.label,meta:`每${H.step}${H.unit} · ${Math.round(Cs(ti(H,H.step)))} kcal`,value:u[I]||0,unit:H.unit,step:H.step,max:H.max,onChange:se=>h(f,I,se,H.max)},I))})]}),b.jsx(Ci,{eyebrow:"02 · 选个口味",title:"今晚想吃什么",icon:Qf,children:b.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-5",children:Object.entries(R0).map(([I,H])=>b.jsxs("button",{onClick:()=>_(I),className:`rounded-lg border p-3 text-left transition ${p===I?"border-[#d8c7a3]/55 bg-[#d8c7a3]/12 text-[#f2eadb]":"border-[#d8c7a3]/10 bg-[#11130f]/72 text-[#918a7c] hover:border-[#d8c7a3]/28 hover:text-[#f2eadb]"}`,children:[b.jsx("div",{className:"font-cjk text-sm font-semibold",children:H.short}),b.jsx("div",{className:"mt-1 text-[10px] text-[#918a7c]",children:H.sub})]},I))})}),b.jsx(lw,{open:N,onToggle:()=>L(!N),title:"高级配置",subtitle:"肉、油脂、水果、牛肉脂肪、目标值",children:b.jsxs("div",{className:"grid gap-5",children:[b.jsx(vs,{title:"晚餐蛋白",children:b.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries(P0).map(([I,H])=>b.jsx(dc,{active:S.includes(I),onClick:()=>g(I),title:H.short,meta:H.note},I))})}),b.jsx(vs,{title:"脂肪来源",children:b.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries(N0).map(([I,H])=>b.jsx(dc,{active:y.includes(I),onClick:()=>w(I),title:H.short,meta:`${H.f}g 脂 / ${H.unit}`,tone:"amber"},I))})}),b.jsx(vs,{title:"水果 / 酸奶",children:b.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(dr).map(([I,H])=>b.jsx(fc,{label:H.label,meta:`每${H.step}${H.unit} · C${Math.round(H.c*H.step)}`,value:R[I]||0,unit:H.unit,step:H.step,max:H.max,onChange:se=>h(v,I,se,H.max)},I))})}),b.jsxs(vs,{title:"牛肉脂肪",children:[b.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,9,13,18].map(I=>b.jsxs(uc,{active:x===I,onClick:()=>C(I),children:[I,"g"]},I))}),b.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[b.jsx("input",{type:"number",value:x,onChange:I=>C(yn(I.target.value,0,40)),className:"h-11 w-20 rounded-lg border border-[#d8c7a3]/12 bg-[#080908]/42 text-center font-mono text-lg text-[#f2eadb] outline-none focus:border-[#d8c7a3]"}),b.jsx("span",{className:"text-xs text-[#918a7c]",children:"脂質 g / 100g raw · 水煮按 80%"})]})]}),b.jsxs(vs,{title:"目标值",children:[b.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[["p","蛋白","g",500],["c","碳水","g",800],["f","脂肪","g",300],["kcal","热量","",8e3]].map(([I,H,se,oe])=>b.jsx(qr,{label:H,unit:se,value:B[I],onChange:W=>D(Z=>({...Z,[I]:yn(W,0,oe)}))},I))}),b.jsxs("button",{onClick:O,className:"mt-3 inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/12 px-3 py-2 text-xs text-[#918a7c] transition hover:border-[#c77e68]/60 hover:text-[#c77e68]",children:[b.jsx(cc,{className:"h-4 w-4"}),"重置默认"]})]})]})})]}),b.jsxs("section",{className:"space-y-6",children:[b.jsxs(Ci,{eyebrow:"03 · 今晚答案",title:"今晚就这样吃",icon:C0,children:[b.jsx("div",{className:"grid gap-2",children:e.dinnerItems.map((I,H)=>b.jsx(uw,{item:I,index:H,onTune:E},I.key))}),X&&b.jsxs("button",{onClick:U,className:"mt-3 inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/12 px-3 py-2 text-xs text-[#918a7c] transition hover:border-[#c77e68]/60 hover:text-[#c77e68]",children:[b.jsx(cc,{className:"h-4 w-4"}),"重置微调"]})]}),b.jsx(Ci,{eyebrow:"04 · 今日节奏",title:"看一眼就够",icon:Yf,children:b.jsxs("div",{className:"space-y-3",children:[b.jsx(Yl,{label:"蛋白",value:e.total.p,target:B.p,unit:"g",color:"#c77e68"}),b.jsx(Yl,{label:"碳水",value:e.total.c,target:B.c,unit:"g",color:"#d8c7a3"}),b.jsx(Yl,{label:"脂肪",value:e.total.f,target:B.f,unit:"g",color:"#9fb58f"}),b.jsx(Yl,{label:"热量",value:e.total.kcal,target:B.kcal,unit:"kcal",color:"#8fb8ad"})]})})]})]})}function QT(s){const{model:e,targets:t,setTargets:r,tdee:o,setTdee:l,pre:u,setPre:f,setMapQty:h,drinkKey:p,setDrinkKey:_,drinkMl:S,setDrinkMl:g,saltG:y,setSaltG:w,foodK:R,setFoodK:v}=s,x=e.potassium>=e.sodium;return b.jsxs("main",{className:"grid gap-6 lg:grid-cols-[1fr_1fr]",children:[b.jsxs(Ci,{eyebrow:"今日账本",title:"吃进去的东西",icon:Ms,children:[b.jsx(co,{label:"午餐",macro:e.lunch}),b.jsx(co,{label:"训练前",macro:e.pre}),b.jsx(co,{label:"饮料/电解质",macro:e.drink}),b.jsx(co,{label:"零食加餐",macro:e.snack}),b.jsx(co,{label:"晚餐",macro:e.dinner,strong:!0})]}),b.jsx(Ci,{eyebrow:"目标设置",title:"目标和消耗",icon:A0,children:b.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-5",children:[[["p","蛋白","g",500],["c","碳水","g",800],["f","脂肪","g",300],["kcal","热量","",8e3]].map(([C,N,L,B])=>b.jsx(qr,{label:N,unit:L,value:t[C],onChange:D=>r(O=>({...O,[C]:yn(D,0,B)}))},C)),b.jsx(qr,{label:"TDEE",unit:"",value:o,onChange:C=>l(yn(C,0,9e3))})]})}),b.jsx(Ci,{eyebrow:"训练前",title:"垫一口也算进去",icon:qf,children:b.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(_a).map(([C,N])=>b.jsx(fc,{label:N.label,meta:`每${N.step}${N.unit} · ${Math.round(Cs(ti(N,N.step)))} kcal`,value:u[C]||0,unit:N.unit,step:N.step,max:N.max,onChange:L=>h(f,C,L,N.max)},C))})}),b.jsxs(Ci,{eyebrow:"电解质",title:"钾钠别太偏",icon:_T,children:[b.jsx("div",{className:"grid grid-cols-3 gap-2",children:Object.entries(Yr).map(([C,N])=>b.jsx(dc,{active:p===C,onClick:()=>_(C),title:N.label,meta:N.sub,tone:"green"},C))}),b.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[b.jsx(qr,{label:"饮料",unit:"ml",value:S,onChange:C=>g(yn(C,0,2e3))}),b.jsx(qr,{label:"盐",unit:"g",value:y,onChange:C=>w(yn(C,0,20))}),b.jsx(qr,{label:"食物钾",unit:"mg",value:R,onChange:C=>v(yn(C,0,8e3))})]}),b.jsxs("div",{className:`mt-4 rounded-lg border p-4 ${x?"border-[#9fb58f]/30 bg-[#9fb58f]/10":"border-[#c77e68]/30 bg-[#c77e68]/10"}`,children:[b.jsxs("div",{className:"flex items-center justify-between gap-3",children:[b.jsx("span",{className:"text-sm text-zinc-300",children:"K / Na"}),b.jsx("span",{className:x?"text-[#9fb58f]":"text-[#c77e68]",children:x?"平衡":"钾偏低"})]}),b.jsxs("div",{className:"mt-2 text-xs text-[#918a7c]",children:["钾 ",Math.round(e.potassium)," mg · 钠 ",Math.round(e.sodium)," mg"]})]})]})]})}function JT({model:s,shopDays:e,setShopDays:t}){const r=[{tone:"red",label:"蛋白主菜",caption:"肉和高蛋白先拿够",icon:qf,accent:"#c77e68"},{tone:"green",label:"主食碳水",caption:"晚饭的底盘",icon:Qf,accent:"#9fb58f"},{tone:"gold",label:"水果加料",caption:"菠萝、香蕉、酸奶这类",icon:iT,accent:"#d8c7a3"},{tone:"amber",label:"油脂口味",caption:"酱、蛋、坚果和风味",icon:$f,accent:"#c8a86a"}],o={red:0,green:1,gold:2,amber:3},l=r.map(p=>({...p,items:s.shopping.filter(_=>_.tone===p.tone)})).filter(p=>p.items.length>0),u=[...s.shopping].sort((p,_)=>(o[p.tone]??9)-(o[_.tone]??9)).slice(0,3),f=ti(s.dinner,e),h=s.shopping.length;return b.jsxs("main",{className:"grid gap-6",children:[b.jsxs("section",{className:"relative overflow-hidden rounded-lg border border-[#d8c7a3]/12 bg-[#10120f]/92",children:[b.jsx("img",{src:th("shop-basket.jpg"),alt:"weekly grocery basket",className:"absolute inset-0 h-full w-full object-cover opacity-45"}),b.jsx("div",{className:"shop-hero-overlay absolute inset-0"}),b.jsxs("div",{className:"relative grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_0.95fr] lg:items-end",children:[b.jsxs("div",{children:[b.jsxs("div",{className:"inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/14 bg-[#080908]/58 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-[#b9a36c] backdrop-blur",children:[b.jsx(wT,{className:"h-4 w-4"}),"market run"]}),b.jsx("h2",{className:"mt-4 font-display text-4xl leading-none text-[#f2eadb] sm:text-5xl",children:"采购清单"}),b.jsx("p",{className:"mt-3 max-w-xl text-sm leading-6 text-[#cfc4b2]",children:"按今晚的晚餐结果自动折算。进店先拿主菜和主食，再补水果和风味，别在货架前重新算。"}),b.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:[3,5,7,10].map(p=>b.jsxs(uc,{active:e===p,onClick:()=>t(p),children:[p," 天"]},p))})]}),b.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[b.jsx(Od,{icon:IT,label:"备货",value:`${e}天`,sub:"周期"}),b.jsx(Od,{icon:ST,label:"品类",value:h,sub:"件要拿"}),b.jsx(Od,{icon:Yf,label:"库存",value:Math.round(f.kcal),sub:"kcal"})]})]})]}),b.jsxs("div",{className:"grid gap-6 lg:grid-cols-[0.88fr_1.12fr]",children:[b.jsxs(Ci,{eyebrow:"先拿这些",title:"进店顺序",icon:MT,children:[b.jsx("div",{className:"grid gap-3",children:u.map((p,_)=>b.jsx(ew,{item:p,index:_},p.key))}),b.jsxs("div",{className:"mt-4 rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/42 p-4",children:[b.jsx("div",{className:"text-[10px] uppercase tracking-[0.24em] text-[#918a7c]",children:"daily dinner base"}),b.jsxs("div",{className:"mt-2 grid grid-cols-4 gap-2",children:[b.jsx(Es,{label:"P",value:Math.round(s.dinner.p)}),b.jsx(Es,{label:"C",value:Math.round(s.dinner.c)}),b.jsx(Es,{label:"F",value:Math.round(s.dinner.f)}),b.jsx(Es,{label:"Kcal",value:Math.round(s.dinner.kcal)})]})]})]}),b.jsx(Ci,{eyebrow:"分区拿货",title:"照这个买",icon:sT,children:b.jsx("div",{className:"grid gap-3",children:l.map(p=>b.jsx(tw,{group:p},p.tone))})})]})]})}function Od({icon:s,label:e,value:t,sub:r}){return b.jsxs("div",{className:"rounded-lg border border-[#d8c7a3]/12 bg-[#080908]/58 p-3 backdrop-blur",children:[b.jsx(s,{className:"h-4 w-4 text-[#b9a36c]"}),b.jsx("div",{className:"mt-3 font-display text-3xl leading-none text-[#f2eadb]",children:t}),b.jsxs("div",{className:"mt-1 text-[10px] uppercase tracking-[0.16em] text-[#918a7c]",children:[e," · ",r]})]})}function ew({item:s,index:e}){return b.jsxs("div",{className:"grid grid-cols-[42px_1fr_auto] items-center gap-3 rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/46 p-3",children:[b.jsx("span",{className:"grid h-10 w-10 place-items-center rounded-lg bg-[#d8c7a3] font-mono text-sm text-[#11110d]",children:String(e+1).padStart(2,"0")}),b.jsxs("div",{className:"min-w-0",children:[b.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-[#f2eadb]",children:s.name}),b.jsxs("div",{className:"mt-1 truncate text-[10px] text-[#918a7c]",children:["每天 ",tn(s.qty),s.unit," · ",Math.round(Cs(s.macro))," kcal"]})]}),b.jsxs("div",{className:"text-right",children:[b.jsx("div",{className:"font-display text-2xl leading-none text-[#f2eadb]",children:s.weeklyQty}),b.jsx("div",{className:"mt-1 text-[10px] uppercase tracking-[0.16em] text-[#918a7c]",children:s.unit})]})]})}function tw({group:s}){const e=s.icon;return b.jsxs("section",{className:"rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/42 p-3",children:[b.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[b.jsxs("div",{className:"flex min-w-0 items-center gap-2",children:[b.jsx("span",{className:"grid h-9 w-9 shrink-0 place-items-center rounded-lg",style:{backgroundColor:`${s.accent}24`,color:s.accent},children:b.jsx(e,{className:"h-4 w-4"})}),b.jsxs("div",{className:"min-w-0",children:[b.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-[#f2eadb]",children:s.label}),b.jsx("div",{className:"mt-0.5 truncate text-[10px] text-[#918a7c]",children:s.caption})]})]}),b.jsxs("span",{className:"rounded-md border border-[#d8c7a3]/10 px-2 py-1 font-mono text-xs text-[#cfc4b2]",children:[s.items.length," 项"]})]}),b.jsx("div",{className:"grid gap-2",children:s.items.map(t=>b.jsx(nw,{item:t,accent:s.accent},t.key))})]})}function nw({item:s,accent:e}){return b.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-[#d8c7a3]/8 bg-[#11130f]/68 px-3 py-3",children:[b.jsxs("div",{className:"min-w-0",children:[b.jsx("div",{className:"truncate font-cjk text-sm text-[#f2eadb]",children:s.name}),b.jsxs("div",{className:"mt-1 text-xs text-[#918a7c]",children:["每天 ",tn(s.qty),s.unit]})]}),b.jsxs("div",{className:"rounded-md px-2.5 py-1 text-right",style:{backgroundColor:`${e}22`},children:[b.jsxs("div",{className:"font-mono text-sm text-[#f2eadb]",children:[s.weeklyQty,s.unit]}),b.jsx("div",{className:"mt-0.5 text-[10px] uppercase tracking-[0.14em] text-[#918a7c]",children:"to buy"})]})]})}function iw({cheat:s,setCheat:e,cheatTotal:t,cheatSurplus:r,tdee:o,dayKcal:l}){const u=(f,h)=>{e(p=>{const _={...p},S=yn(h,0,9);return S>0?_[f]=S:delete _[f],_})};return b.jsxs("main",{className:"grid gap-6 lg:grid-cols-[1fr_0.9fr]",children:[b.jsx(Ci,{eyebrow:"放松一下",title:"想吃也能算",icon:$f,children:b.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:D0.map(f=>b.jsx("div",{className:"rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/42 p-3",children:b.jsxs("div",{className:"flex items-center justify-between gap-3",children:[b.jsxs("div",{children:[b.jsx("div",{className:"font-cjk text-sm text-[#f2eadb]",children:f.label}),b.jsxs("div",{className:"mt-1 text-xs text-[#918a7c]",children:[f.kcal," kcal"]})]}),b.jsx(cw,{value:s[f.id]||0,onChange:h=>u(f.id,h)})]})},f.id))})}),b.jsxs("section",{className:"overflow-hidden rounded-lg border border-[#d8c7a3]/12 bg-[#10120f]/92",children:[b.jsx("img",{src:eh("cheat.jpg"),alt:"cheat meal",className:"h-56 w-full object-cover"}),b.jsxs("div",{className:"p-5",children:[b.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#c77e68]",children:"吃完大概这样"}),b.jsx("div",{className:"mt-2 font-display text-6xl text-[#f2eadb]",children:t}),b.jsx("div",{className:"text-sm text-[#918a7c]",children:"放松热量"}),b.jsxs("div",{className:"mt-5 grid grid-cols-3 gap-2",children:[b.jsx(Es,{label:"今日总摄入",value:Math.round(l+t)}),b.jsx(Es,{label:"TDEE",value:o}),b.jsx(Es,{label:"盈余",value:(r>=0?"+":"")+r,hot:r>0})]}),b.jsxs("button",{onClick:()=>e({}),className:"mt-4 inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/12 px-3 py-2 text-xs text-[#918a7c] transition hover:border-[#c77e68]/60 hover:text-[#c77e68]",children:[b.jsx(cc,{className:"h-4 w-4"}),"清空"]})]})]})]})}function rw({open:s,setOpen:e,pre:t,setPre:r,setMapQty:o,drinkKey:l,setDrinkKey:u,drinkMl:f,setDrinkMl:h,model:p}){if(!s)return null;const _=F0(t,l,f),S=O0(t,l,f),g=Bi(p.pre,p.drink),y=()=>{r({}),u("none"),h(0)},w=()=>{r({banana:1}),u("tomato"),h(400)},R=()=>{r({pineapple:1}),u("tomato"),h(400)},v=x=>{u(x),x==="none"?h(0):f<=0&&h(400)};return b.jsxs("div",{className:"fixed inset-0 z-[70]",children:[b.jsx("button",{className:"absolute inset-0 bg-black/68 backdrop-blur-sm",onClick:()=>e(!1),"aria-label":"关闭补给"}),b.jsxs("aside",{className:"absolute inset-y-0 right-0 flex w-[min(460px,94vw)] flex-col border-l border-[#d8c7a3]/12 bg-[#0d0f0c] shadow-2xl",children:[b.jsxs("div",{className:"flex items-center justify-between border-b border-[#d8c7a3]/10 p-4",children:[b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("img",{src:eh("pre.jpg"),alt:"",className:"h-12 w-12 rounded-lg object-cover"}),b.jsxs("div",{children:[b.jsx("div",{className:"font-display text-xl text-[#f2eadb]",children:"补给开关"}),b.jsx("div",{className:"text-[10px] uppercase tracking-[0.22em] text-[#918a7c]",children:"训练前吃什么喝什么"})]})]}),b.jsx("button",{onClick:()=>e(!1),className:"grid h-9 w-9 place-items-center rounded-lg border border-[#d8c7a3]/12 text-[#918a7c] hover:text-[#f2eadb]","aria-label":"关闭",children:b.jsx(Jf,{className:"h-4 w-4"})})]}),b.jsxs("div",{className:"flex-1 overflow-y-auto p-4",children:[b.jsxs("div",{className:`rounded-lg border p-4 ${_?"border-[#9fb58f]/30 bg-[#9fb58f]/10":"border-[#d8c7a3]/10 bg-[#10120f]"}`,children:[b.jsxs("div",{className:"flex items-center justify-between gap-3",children:[b.jsx("span",{className:"text-[10px] uppercase tracking-[0.24em] text-[#918a7c]",children:"当前状态"}),b.jsx("span",{className:_?"text-[#9fb58f]":"text-[#918a7c]",children:_?"已补给":"不补给"})]}),b.jsx("div",{className:"mt-2 text-sm leading-6 text-[#ddd5c6]",children:S}),b.jsxs("div",{className:"mt-2 font-mono text-xs text-[#918a7c]",children:["P",tn(g.p)," C",tn(g.c)," F",tn(g.f)," · ",Math.round(g.kcal)," kcal"]})]}),b.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[b.jsxs("button",{onClick:y,className:"rounded-lg border border-[#d8c7a3]/10 bg-[#10120f] p-3 text-left transition hover:border-[#c77e68]/50",children:[b.jsx("div",{className:"font-cjk text-sm font-semibold text-[#f2eadb]",children:"一键不补给"}),b.jsx("div",{className:"mt-1 text-[10px] text-[#918a7c]",children:"不吃也不喝"})]}),b.jsxs("button",{onClick:w,className:"rounded-lg border border-[#d8c7a3]/30 bg-[#d8c7a3]/10 p-3 text-left transition hover:-translate-y-0.5",children:[b.jsx("div",{className:"font-cjk text-sm font-semibold text-[#f2eadb]",children:"轻补给"}),b.jsx("div",{className:"mt-1 text-[10px] text-[#918a7c]",children:"香蕉 + 番茄汁"})]}),b.jsxs("button",{onClick:R,className:"rounded-lg border border-[#9fb58f]/30 bg-[#9fb58f]/10 p-3 text-left transition hover:-translate-y-0.5",children:[b.jsx("div",{className:"font-cjk text-sm font-semibold text-[#f2eadb]",children:"菠萝盒"}),b.jsx("div",{className:"mt-1 text-[10px] text-[#918a7c]",children:"240g + 番茄汁"})]})]}),b.jsxs("div",{className:"mt-5 grid gap-5",children:[b.jsx(vs,{title:"吃什么",children:b.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(_a).map(([x,C])=>b.jsx(fc,{label:C.label,meta:`每${C.step}${C.unit} · ${Math.round(Cs(ti(C,C.step)))} kcal`,value:t[x]||0,unit:C.unit,step:C.step,max:C.max,onChange:N=>o(r,x,N,C.max)},x))})}),b.jsxs(vs,{title:"喝什么",children:[b.jsx("div",{className:"grid grid-cols-3 gap-2",children:Object.entries(Yr).map(([x,C])=>b.jsx(dc,{active:l===x,onClick:()=>v(x),title:C.label,meta:C.sub,tone:"green"},x))}),b.jsx("div",{className:"mt-3 grid grid-cols-3 gap-2",children:[200,400,600].map(x=>b.jsxs(uc,{active:f===x,onClick:()=>h(x),children:[x,"ml"]},x))}),b.jsx("div",{className:"mt-3",children:b.jsx(qr,{label:"饮料",unit:"ml",value:f,onChange:x=>h(yn(x,0,2e3))})})]})]})]})]})]})}function sw({open:s,setOpen:e,text:t,onCopied:r}){const o=mt.useRef(null);if(mt.useEffect(()=>{if(!s)return;const u=window.setTimeout(()=>{var f,h,p;(f=o.current)==null||f.focus(),(h=o.current)==null||h.select(),(p=o.current)==null||p.setSelectionRange(0,t.length)},80);return()=>window.clearTimeout(u)},[s,t]),!s)return null;const l=async()=>{var u,f,h;try{await I0(t),r()}catch{(u=o.current)==null||u.focus(),(f=o.current)==null||f.select(),(h=o.current)==null||h.setSelectionRange(0,t.length)}};return b.jsxs("div",{className:"fixed inset-0 z-[80]",children:[b.jsx("button",{className:"absolute inset-0 bg-black/68 backdrop-blur-sm",onClick:()=>e(!1),"aria-label":"关闭复制面板"}),b.jsxs("aside",{className:"absolute inset-x-3 bottom-3 rounded-lg border border-[#d8c7a3]/12 bg-[#0d0f0c] p-4 shadow-2xl sm:left-auto sm:right-5 sm:w-[min(520px,92vw)]",children:[b.jsxs("div",{className:"flex items-start justify-between gap-3",children:[b.jsxs("div",{children:[b.jsx("div",{className:"font-display text-xl text-[#f2eadb]",children:"手动复制"}),b.jsx("div",{className:"mt-1 text-xs leading-5 text-[#918a7c]",children:"浏览器拦截了自动复制，文本已经选中。手机上直接长按复制也可以。"})]}),b.jsx("button",{onClick:()=>e(!1),className:"grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#d8c7a3]/12 text-[#918a7c] hover:text-[#f2eadb]","aria-label":"关闭",children:b.jsx(Jf,{className:"h-4 w-4"})})]}),b.jsx("textarea",{ref:o,readOnly:!0,value:t,className:"mt-4 h-48 w-full resize-none rounded-lg border border-[#d8c7a3]/12 bg-[#080908]/58 p-3 font-mono text-xs leading-5 text-[#ddd5c6] outline-none focus:border-[#d8c7a3]"}),b.jsx("div",{className:"mt-3 flex justify-end gap-2",children:b.jsxs("button",{onClick:l,className:"inline-flex items-center gap-2 rounded-lg bg-[#d8c7a3] px-3 py-2 text-xs font-semibold text-[#11110d]",children:[b.jsx(Ms,{className:"h-4 w-4"}),"再复制一次"]})})]})]})}function aw({open:s,setOpen:e,snack:t,setSnack:r,active:o,dinnerSummary:l}){if(!s)return null;const u=(f,h)=>{r(p=>({...p,[f]:f==="name"?h:yn(h,0,f==="kcal"?5e3:500)}))};return b.jsxs("div",{className:"fixed inset-0 z-[70]",children:[b.jsx("button",{className:"absolute inset-0 bg-black/68 backdrop-blur-sm",onClick:()=>e(!1),"aria-label":"关闭零食加餐"}),b.jsxs("aside",{className:"absolute inset-y-0 right-0 flex w-[min(430px,94vw)] flex-col border-l border-[#d8c7a3]/12 bg-[#0d0f0c] shadow-2xl",children:[b.jsxs("div",{className:"flex items-center justify-between border-b border-[#d8c7a3]/10 p-4",children:[b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("img",{src:th("snack-scanner.jpg"),alt:"",className:"h-12 w-12 rounded-lg object-cover"}),b.jsxs("div",{children:[b.jsx("div",{className:"font-display text-xl text-[#f2eadb]",children:"零食加餐"}),b.jsx("div",{className:"text-[10px] uppercase tracking-[0.22em] text-[#918a7c]",children:"自己填一下也行"})]})]}),b.jsx("button",{onClick:()=>e(!1),className:"grid h-9 w-9 place-items-center rounded-lg border border-[#d8c7a3]/12 text-[#918a7c] hover:text-[#f2eadb]","aria-label":"关闭",children:b.jsx(Jf,{className:"h-4 w-4"})})]}),b.jsxs("div",{className:"flex-1 overflow-y-auto p-4",children:[b.jsx("label",{className:"text-[10px] uppercase tracking-[0.22em] text-[#918a7c]",children:"名称"}),b.jsx("input",{value:t.name,onChange:f=>u("name",f.target.value),className:"mt-2 h-11 w-full rounded-lg border border-[#d8c7a3]/12 bg-[#080908]/42 px-3 text-sm text-[#f2eadb] outline-none focus:border-[#d8c7a3]"}),b.jsx("div",{className:"mt-4 grid grid-cols-4 gap-2",children:[["kcal","热量"],["p","蛋白"],["c","碳水"],["f","脂肪"]].map(([f,h])=>b.jsx(qr,{label:h,unit:f==="kcal"?"":"g",value:t[f],onChange:p=>u(f,p)},f))}),b.jsxs("div",{className:"mt-5 rounded-lg border border-[#d8c7a3]/20 bg-[#d8c7a3]/10 p-4",children:[b.jsx("div",{className:"text-[10px] uppercase tracking-[0.22em] text-[#d8c7a3]",children:"晚餐会跟着收口"}),b.jsxs("div",{className:"mt-2 text-sm leading-6 text-[#cfc4b2]",children:[l||"晚餐已砍到很低"," · 全天 ",Math.round(t.kcal)," kcal snack"]})]}),o&&b.jsxs("button",{onClick:()=>r({name:"手动加餐",p:0,c:0,f:0,kcal:0}),className:"mt-4 inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/12 px-3 py-2 text-xs text-[#918a7c] hover:text-[#c77e68]",children:[b.jsx(cc,{className:"h-4 w-4"}),"清除加餐"]})]})]})]})}function Ci({eyebrow:s,title:e,icon:t,children:r}){return b.jsxs("section",{className:"premium-panel-shadow rounded-lg border border-[#d8c7a3]/12 bg-[#10120f]/92 p-4 backdrop-blur-xl sm:p-5",children:[b.jsxs("div",{className:"mb-4 flex items-start justify-between gap-4",children:[b.jsxs("div",{children:[b.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#b9a36c]",children:s}),b.jsx("h2",{className:"mt-1 font-display text-2xl text-[#f2eadb]",children:e})]}),t&&b.jsx("span",{className:"grid h-9 w-9 place-items-center rounded-lg bg-[#d8c7a3] text-[#11110d]",children:b.jsx(t,{className:"h-4 w-4"})})]}),r]})}function kd({icon:s,label:e,sub:t,onClick:r,dataAttr:o}){const l=r?"button":"div";return b.jsxs(l,{"data-copy-plan-button":o==="copy-plan-button"?!0:void 0,onClick:r,className:"min-w-0 rounded-lg border border-[#d8c7a3]/12 bg-[#11130f]/82 px-3 py-2.5 text-left backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#d8c7a3]/28 hover:bg-[#171912] sm:py-3",children:[b.jsx(s,{className:"mb-1.5 h-4 w-4 text-[#b9a36c]"}),b.jsx("div",{className:"truncate text-sm text-[#f2eadb]",children:e}),t&&b.jsx("div",{className:"mt-0.5 truncate text-[10px] uppercase tracking-[0.12em] text-[#918a7c] sm:tracking-[0.18em]",children:t})]})}function $l({label:s,value:e,target:t,unit:r}){const o=e-t,l=Math.abs(o)<=(r?Math.max(8,t*.08):Math.max(80,t*.05));return b.jsxs("div",{className:"rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/58 p-2 backdrop-blur",children:[b.jsx("div",{className:"text-[10px] uppercase tracking-[0.16em] text-[#918a7c]",children:s}),b.jsx("div",{className:"mt-1 font-mono text-lg text-[#f2eadb]",children:Math.round(e)}),b.jsxs("div",{className:`text-[10px] ${l?"text-[#9fb58f]":"text-[#d8c7a3]"}`,children:[o>=0?"+":"",Math.round(o),r]})]})}function ow({value:s,onChange:e,options:t}){return b.jsx("div",{className:"grid grid-cols-2 rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/48 p-1",children:t.map(r=>b.jsx("button",{onClick:()=>e(r.value),className:`rounded-md px-3 py-2 text-sm transition ${s===r.value?"bg-[#d8c7a3] text-[#11110d]":"text-[#918a7c] hover:text-[#f2eadb]"}`,children:r.label},r.value))})}function uc({active:s,onClick:e,children:t}){return b.jsx("button",{onClick:e,className:`rounded-lg border px-3 py-2 text-xs transition ${s?"border-[#d8c7a3]/55 bg-[#d8c7a3]/14 text-[#f0dfb9]":"border-[#d8c7a3]/10 bg-[#11130f]/72 text-[#918a7c] hover:border-[#d8c7a3]/28 hover:text-[#f2eadb]"}`,children:t})}function vs({title:s,children:e}){return b.jsxs("div",{children:[b.jsx("div",{className:"mb-2 text-[10px] uppercase tracking-[0.24em] text-[#918a7c]",children:s}),e]})}function dc({active:s,onClick:e,title:t,meta:r,tone:o="gold"}){const l=o==="green"?"#9fb58f":o==="amber"?"#c8a86a":"#d8c7a3";return b.jsxs("button",{onClick:e,className:"rounded-lg border p-3 text-left transition hover:-translate-y-0.5",style:{borderColor:s?l:"rgba(255,255,255,0.10)",background:s?`${l}1f`:"rgba(255,255,255,0.045)"},children:[b.jsx("div",{className:"font-cjk text-sm font-semibold text-[#f2eadb]",children:t}),b.jsx("div",{className:"mt-1 text-[10px] text-[#918a7c]",children:r})]})}function lw({open:s,onToggle:e,title:t,subtitle:r,children:o}){return b.jsxs("section",{className:"rounded-lg border border-[#d8c7a3]/12 bg-[#10120f]/86 backdrop-blur-xl",children:[b.jsxs("button",{onClick:e,className:"flex w-full items-center justify-between gap-3 p-4 text-left",children:[b.jsxs("span",{children:[b.jsxs("span",{className:"flex items-center gap-2 font-display text-2xl text-[#f2eadb]",children:[b.jsx(RT,{className:"h-4 w-4 text-[#b9a36c]"}),t]}),b.jsx("span",{className:"mt-1 block text-xs text-[#918a7c]",children:r})]}),b.jsx(dT,{className:`h-5 w-5 text-[#918a7c] transition ${s?"rotate-180":""}`})]}),s&&b.jsx("div",{className:"border-t border-[#d8c7a3]/10 p-4",children:o})]})}function fc({label:s,meta:e,value:t,unit:r,step:o,max:l,onChange:u}){return b.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/42 p-3",children:[b.jsxs("div",{className:"min-w-0",children:[b.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-[#f2eadb]",children:s}),b.jsx("div",{className:"mt-1 truncate text-[10px] text-[#918a7c]",children:e})]}),b.jsxs("div",{className:"flex items-center gap-1",children:[b.jsx(va,{label:`减少${s}`,onClick:()=>u(t-o),icon:Kf}),b.jsxs("span",{className:"w-14 text-center font-mono text-sm text-[#f2eadb]",children:[tn(t),t>0&&r==="g"?"g":""]}),b.jsx(va,{label:`增加${s}`,onClick:()=>u(Math.min(l,t+o)),icon:Zf})]})]})}function cw({value:s,onChange:e}){return b.jsxs("div",{className:"flex items-center gap-1",children:[b.jsx(va,{label:"减少",onClick:()=>e(s-1),icon:Kf}),b.jsx("span",{className:"w-7 text-center font-mono text-sm text-[#f2eadb]",children:s}),b.jsx(va,{label:"增加",onClick:()=>e(s+1),icon:Zf})]})}function va({label:s,onClick:e,icon:t}){return b.jsx("button",{onClick:e,"aria-label":s,className:"grid h-8 w-8 place-items-center rounded-lg border border-[#d8c7a3]/10 bg-[#11130f]/72 text-[#918a7c] transition hover:border-[#d8c7a3]/55 hover:text-[#d8c7a3]",children:b.jsx(t,{className:"h-4 w-4"})})}function qr({label:s,unit:e,value:t,onChange:r}){return b.jsxs("label",{className:"block rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/42 p-3",children:[b.jsx("span",{className:"block text-[10px] uppercase tracking-[0.18em] text-[#918a7c]",children:s}),b.jsxs("span",{className:"mt-1 flex items-baseline gap-1",children:[b.jsx("input",{type:"number",value:tn(t,1),onChange:o=>r(o.target.value),className:"min-w-0 flex-1 bg-transparent font-mono text-lg text-[#f2eadb] outline-none"}),b.jsx("span",{className:"text-[10px] text-[#918a7c]",children:e})]})]})}function uw({item:s,index:e,onTune:t}){const o={red:"#c77e68",amber:"#c8a86a",gold:"#d8c7a3",green:"#9fb58f"}[s.tone]||"#ffffff",l=s.adjustment>0?`+${tn(s.adjustment)}`:tn(s.adjustment);return b.jsxs("div",{"data-dinner-tune-row":!0,className:"grid grid-cols-[38px_1fr_auto] items-center gap-3 rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/46 p-3",children:[b.jsx("span",{className:"grid h-9 w-9 place-items-center rounded-lg font-mono text-xs text-zinc-950",style:{backgroundColor:o},children:String(e+1).padStart(2,"0")}),b.jsxs("div",{className:"min-w-0",children:[b.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-[#f2eadb]",children:s.name}),b.jsxs("div",{className:"mt-1 truncate text-[10px] text-[#918a7c]",children:["P",tn(s.macro.p)," · C",tn(s.macro.c)," · F",tn(s.macro.f),s.adjustment!==0&&b.jsxs("span",{className:"text-[#d8c7a3]",children:[" · 调整 ",l,s.unit]})]})]}),b.jsxs("div",{className:"text-right",children:[b.jsx("div",{className:"font-display text-2xl leading-none text-[#f2eadb]",children:tn(s.qty)}),b.jsx("div",{className:"mt-1 text-[10px] uppercase tracking-[0.16em] text-[#918a7c]",children:s.unit}),t&&b.jsxs("div",{className:"mt-2 flex items-center justify-end gap-1",children:[b.jsx(va,{label:`减少${s.name}`,onClick:()=>t(s,-s.step),icon:Kf}),b.jsx(va,{label:`增加${s.name}`,onClick:()=>t(s,s.step),icon:Zf})]})]})]})}function Yl({label:s,value:e,target:t,unit:r,color:o}){const l=Math.min(135,e/Math.max(1,t)*100),u=Math.round(e-t);return b.jsxs("div",{children:[b.jsxs("div",{className:"mb-2 flex items-center justify-between gap-3",children:[b.jsx("span",{className:"text-sm text-[#cfc4b2]",children:s}),b.jsxs("span",{className:"font-mono text-xs text-[#918a7c]",children:[Math.round(e)," / ",t," ",r]})]}),b.jsx("div",{className:"relative h-2 overflow-hidden rounded-full bg-[#d8c7a3]/10",children:b.jsx("div",{className:"h-full rounded-full transition-all duration-700",style:{width:`${l}%`,backgroundColor:o}})}),b.jsxs("div",{className:"mt-1 text-right text-[10px] text-[#918a7c]",children:[u>=0?"+":"",u,r]})]})}function co({label:s,macro:e,strong:t}){return b.jsxs("div",{className:`grid grid-cols-[1fr_auto] items-center gap-3 border-t border-[#d8c7a3]/10 py-3 first:border-t-0 ${t?"text-[#f2eadb]":"text-[#cfc4b2]"}`,children:[b.jsx("div",{className:"font-cjk text-sm",children:s}),b.jsxs("div",{className:"font-mono text-xs text-[#918a7c]",children:["P",tn(e.p)," C",tn(e.c)," F",tn(e.f)," · ",Math.round(Cs(e))," kcal"]})]})}function Es({label:s,value:e,hot:t}){return b.jsxs("div",{className:`rounded-lg border p-3 ${t?"border-[#c77e68]/30 bg-[#c77e68]/10":"border-[#d8c7a3]/10 bg-[#080908]/42"}`,children:[b.jsx("div",{className:"text-[10px] text-[#918a7c]",children:s}),b.jsx("div",{className:`mt-1 font-mono text-lg ${t?"text-[#c77e68]":"text-[#f2eadb]"}`,children:e})]})}b_.createRoot(document.getElementById("root")).render(b.jsx(v_.StrictMode,{children:b.jsx(YT,{})}));
