(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function n0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var od={exports:{}},oo={},ld={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function Fv(){if(Bm)return xt;Bm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function g(k){return k===null||typeof k!="object"?null:(k=y&&k[y]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,P={};function _(k,ee,Ue){this.props=k,this.context=ee,this.refs=P,this.updater=Ue||S}_.prototype.isReactComponent={},_.prototype.setState=function(k,ee){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ee,"setState")},_.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function x(){}x.prototype=_.prototype;function C(k,ee,Ue){this.props=k,this.context=ee,this.refs=P,this.updater=Ue||S}var D=C.prototype=new x;D.constructor=C,T(D,_.prototype),D.isPureReactComponent=!0;var L=Array.isArray,O=Object.prototype.hasOwnProperty,R={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function b(k,ee,Ue){var Ve,De={},ue=null,_e=null;if(ee!=null)for(Ve in ee.ref!==void 0&&(_e=ee.ref),ee.key!==void 0&&(ue=""+ee.key),ee)O.call(ee,Ve)&&!I.hasOwnProperty(Ve)&&(De[Ve]=ee[Ve]);var me=arguments.length-2;if(me===1)De.children=Ue;else if(1<me){for(var Ie=Array(me),Ge=0;Ge<me;Ge++)Ie[Ge]=arguments[Ge+2];De.children=Ie}if(k&&k.defaultProps)for(Ve in me=k.defaultProps,me)De[Ve]===void 0&&(De[Ve]=me[Ve]);return{$$typeof:r,type:k,key:ue,ref:_e,props:De,_owner:R.current}}function U(k,ee){return{$$typeof:r,type:k.type,key:ee,ref:k.ref,props:k.props,_owner:k._owner}}function X(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function z(k){var ee={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Ue){return ee[Ue]})}var Y=/\/+/g;function oe(k,ee){return typeof k=="object"&&k!==null&&k.key!=null?z(""+k.key):ee.toString(36)}function le(k,ee,Ue,Ve,De){var ue=typeof k;(ue==="undefined"||ue==="boolean")&&(k=null);var _e=!1;if(k===null)_e=!0;else switch(ue){case"string":case"number":_e=!0;break;case"object":switch(k.$$typeof){case r:case e:_e=!0}}if(_e)return _e=k,De=De(_e),k=Ve===""?"."+oe(_e,0):Ve,L(De)?(Ue="",k!=null&&(Ue=k.replace(Y,"$&/")+"/"),le(De,ee,Ue,"",function(Ge){return Ge})):De!=null&&(X(De)&&(De=U(De,Ue+(!De.key||_e&&_e.key===De.key?"":(""+De.key).replace(Y,"$&/")+"/")+k)),ee.push(De)),1;if(_e=0,Ve=Ve===""?".":Ve+":",L(k))for(var me=0;me<k.length;me++){ue=k[me];var Ie=Ve+oe(ue,me);_e+=le(ue,ee,Ue,Ie,De)}else if(Ie=g(k),typeof Ie=="function")for(k=Ie.call(k),me=0;!(ue=k.next()).done;)ue=ue.value,Ie=Ve+oe(ue,me++),_e+=le(ue,ee,Ue,Ie,De);else if(ue==="object")throw ee=String(k),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return _e}function G(k,ee,Ue){if(k==null)return k;var Ve=[],De=0;return le(k,Ve,"","",function(ue){return ee.call(Ue,ue,De++)}),Ve}function Q(k){if(k._status===-1){var ee=k._result;ee=ee(),ee.then(function(Ue){(k._status===0||k._status===-1)&&(k._status=1,k._result=Ue)},function(Ue){(k._status===0||k._status===-1)&&(k._status=2,k._result=Ue)}),k._status===-1&&(k._status=0,k._result=ee)}if(k._status===1)return k._result.default;throw k._result}var q={current:null},V={transition:null},K={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:V,ReactCurrentOwner:R};function ae(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:G,forEach:function(k,ee,Ue){G(k,function(){ee.apply(this,arguments)},Ue)},count:function(k){var ee=0;return G(k,function(){ee++}),ee},toArray:function(k){return G(k,function(ee){return ee})||[]},only:function(k){if(!X(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},xt.Component=_,xt.Fragment=t,xt.Profiler=o,xt.PureComponent=C,xt.StrictMode=s,xt.Suspense=h,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,xt.act=ae,xt.cloneElement=function(k,ee,Ue){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Ve=T({},k.props),De=k.key,ue=k.ref,_e=k._owner;if(ee!=null){if(ee.ref!==void 0&&(ue=ee.ref,_e=R.current),ee.key!==void 0&&(De=""+ee.key),k.type&&k.type.defaultProps)var me=k.type.defaultProps;for(Ie in ee)O.call(ee,Ie)&&!I.hasOwnProperty(Ie)&&(Ve[Ie]=ee[Ie]===void 0&&me!==void 0?me[Ie]:ee[Ie])}var Ie=arguments.length-2;if(Ie===1)Ve.children=Ue;else if(1<Ie){me=Array(Ie);for(var Ge=0;Ge<Ie;Ge++)me[Ge]=arguments[Ge+2];Ve.children=me}return{$$typeof:r,type:k.type,key:De,ref:ue,props:Ve,_owner:_e}},xt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},xt.createElement=b,xt.createFactory=function(k){var ee=b.bind(null,k);return ee.type=k,ee},xt.createRef=function(){return{current:null}},xt.forwardRef=function(k){return{$$typeof:f,render:k}},xt.isValidElement=X,xt.lazy=function(k){return{$$typeof:v,_payload:{_status:-1,_result:k},_init:Q}},xt.memo=function(k,ee){return{$$typeof:p,type:k,compare:ee===void 0?null:ee}},xt.startTransition=function(k){var ee=V.transition;V.transition={};try{k()}finally{V.transition=ee}},xt.unstable_act=ae,xt.useCallback=function(k,ee){return q.current.useCallback(k,ee)},xt.useContext=function(k){return q.current.useContext(k)},xt.useDebugValue=function(){},xt.useDeferredValue=function(k){return q.current.useDeferredValue(k)},xt.useEffect=function(k,ee){return q.current.useEffect(k,ee)},xt.useId=function(){return q.current.useId()},xt.useImperativeHandle=function(k,ee,Ue){return q.current.useImperativeHandle(k,ee,Ue)},xt.useInsertionEffect=function(k,ee){return q.current.useInsertionEffect(k,ee)},xt.useLayoutEffect=function(k,ee){return q.current.useLayoutEffect(k,ee)},xt.useMemo=function(k,ee){return q.current.useMemo(k,ee)},xt.useReducer=function(k,ee,Ue){return q.current.useReducer(k,ee,Ue)},xt.useRef=function(k){return q.current.useRef(k)},xt.useState=function(k){return q.current.useState(k)},xt.useSyncExternalStore=function(k,ee,Ue){return q.current.useSyncExternalStore(k,ee,Ue)},xt.useTransition=function(){return q.current.useTransition()},xt.version="18.3.1",xt}var zm;function qf(){return zm||(zm=1,ld.exports=Fv()),ld.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function kv(){if(Vm)return oo;Vm=1;var r=qf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var v,y={},g=null,S=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(S=h.ref);for(v in h)s.call(h,v)&&!l.hasOwnProperty(v)&&(y[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)y[v]===void 0&&(y[v]=h[v]);return{$$typeof:e,type:f,key:g,ref:S,props:y,_owner:o.current}}return oo.Fragment=t,oo.jsx=u,oo.jsxs=u,oo}var Hm;function Ov(){return Hm||(Hm=1,od.exports=kv()),od.exports}var M=Ov(),it=qf();const Bv=n0(it);var Dl={},cd={exports:{}},Wn={},ud={exports:{}},dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function zv(){return Gm||(Gm=1,(function(r){function e(V,K){var ae=V.length;V.push(K);e:for(;0<ae;){var k=ae-1>>>1,ee=V[k];if(0<o(ee,K))V[k]=K,V[ae]=ee,ae=k;else break e}}function t(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var K=V[0],ae=V.pop();if(ae!==K){V[0]=ae;e:for(var k=0,ee=V.length,Ue=ee>>>1;k<Ue;){var Ve=2*(k+1)-1,De=V[Ve],ue=Ve+1,_e=V[ue];if(0>o(De,ae))ue<ee&&0>o(_e,De)?(V[k]=_e,V[ue]=ae,k=ue):(V[k]=De,V[Ve]=ae,k=Ve);else if(ue<ee&&0>o(_e,ae))V[k]=_e,V[ue]=ae,k=ue;else break e}}return K}function o(V,K){var ae=V.sortIndex-K.sortIndex;return ae!==0?ae:V.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var h=[],p=[],v=1,y=null,g=3,S=!1,T=!1,P=!1,_=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(V){for(var K=t(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=V)s(p),K.sortIndex=K.expirationTime,e(h,K);else break;K=t(p)}}function L(V){if(P=!1,D(V),!T)if(t(h)!==null)T=!0,Q(O);else{var K=t(p);K!==null&&q(L,K.startTime-V)}}function O(V,K){T=!1,P&&(P=!1,x(b),b=-1),S=!0;var ae=g;try{for(D(K),y=t(h);y!==null&&(!(y.expirationTime>K)||V&&!z());){var k=y.callback;if(typeof k=="function"){y.callback=null,g=y.priorityLevel;var ee=k(y.expirationTime<=K);K=r.unstable_now(),typeof ee=="function"?y.callback=ee:y===t(h)&&s(h),D(K)}else s(h);y=t(h)}if(y!==null)var Ue=!0;else{var Ve=t(p);Ve!==null&&q(L,Ve.startTime-K),Ue=!1}return Ue}finally{y=null,g=ae,S=!1}}var R=!1,I=null,b=-1,U=5,X=-1;function z(){return!(r.unstable_now()-X<U)}function Y(){if(I!==null){var V=r.unstable_now();X=V;var K=!0;try{K=I(!0,V)}finally{K?oe():(R=!1,I=null)}}else R=!1}var oe;if(typeof C=="function")oe=function(){C(Y)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,G=le.port2;le.port1.onmessage=Y,oe=function(){G.postMessage(null)}}else oe=function(){_(Y,0)};function Q(V){I=V,R||(R=!0,oe())}function q(V,K){b=_(function(){V(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){T||S||(T=!0,Q(O))},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(V){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var ae=g;g=K;try{return V()}finally{g=ae}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,K){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ae=g;g=V;try{return K()}finally{g=ae}},r.unstable_scheduleCallback=function(V,K,ae){var k=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?k+ae:k):ae=k,V){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=ae+ee,V={id:v++,callback:K,priorityLevel:V,startTime:ae,expirationTime:ee,sortIndex:-1},ae>k?(V.sortIndex=ae,e(p,V),t(h)===null&&V===t(p)&&(P?(x(b),b=-1):P=!0,q(L,ae-k))):(V.sortIndex=ee,e(h,V),T||S||(T=!0,Q(O))),V},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(V){var K=g;return function(){var ae=g;g=K;try{return V.apply(this,arguments)}finally{g=ae}}}})(dd)),dd}var Wm;function Vv(){return Wm||(Wm=1,ud.exports=zv()),ud.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function Hv(){if(jm)return Wn;jm=1;var r=qf(),e=Vv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function g(n){return h.call(y,n)?!0:h.call(v,n)?!1:p.test(n)?y[n]=!0:(v[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function P(n,i,a,c,d,m,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=A}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new P(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new P(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new P(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new P(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new P(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new P(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new P(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new P(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new P(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,C);_[i]=new P(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,C);_[i]=new P(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,C);_[i]=new P(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new P(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new P(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,a,c){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var L=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),R=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),z=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),V=Symbol.iterator;function K(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,k;function ee(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var Ue=!1;function Ve(n,i){if(!n||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var c=ce}Reflect.construct(n,[],i)}else{try{i.call()}catch(ce){c=ce}n.call(i.prototype)}else{try{throw Error()}catch(ce){c=ce}n()}}catch(ce){if(ce&&c&&typeof ce.stack=="string"){for(var d=ce.stack.split(`
`),m=c.stack.split(`
`),A=d.length-1,F=m.length-1;1<=A&&0<=F&&d[A]!==m[F];)F--;for(;1<=A&&0<=F;A--,F--)if(d[A]!==m[F]){if(A!==1||F!==1)do if(A--,F--,0>F||d[A]!==m[F]){var W=`
`+d[A].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=A&&0<=F);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ee(n):""}function De(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=Ve(n.type,!1),n;case 11:return n=Ve(n.type.render,!1),n;case 1:return n=Ve(n.type,!0),n;default:return""}}function ue(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case R:return"Portal";case U:return"Profiler";case b:return"StrictMode";case oe:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case X:return(n._context.displayName||"Context")+".Provider";case Y:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return i=n.displayName||null,i!==null?i:ue(n.type)||"Memo";case Q:i=n._payload,n=n._init;try{return ue(n(i))}catch{}}return null}function _e(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(i);case 8:return i===b?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ge(n){var i=Ie(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(A){c=""+A,m.call(this,A)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Qe(n){n._valueTracker||(n._valueTracker=Ge(n))}function Dt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ie(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function _t(n,i){var a=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function yt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function Ht(n,i){ft(n,i);var a=me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Jt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Jt(n,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Bt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Jt(n,i,a){(i!=="number"||ut(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var j=Array.isArray;function Nt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+me(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function ht(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Pt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(j(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:me(a)}}function be(n,i){var a=me(i.value),c=me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function It(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function N(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?N(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Z,he=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Z=Z||document.createElement("div"),Z.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Z.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function xe(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(n){Ne.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),we[i]=we[n]})});function de(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||we.hasOwnProperty(n)&&we[n]?(""+i).trim():i+"px"}function pe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=de(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Fe=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Se(n,i){if(i){if(Fe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ge(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Me=null;function Je(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var et=null,st=null,H=null;function Ae(n){if(n=Xa(n)){if(typeof et!="function")throw Error(t(280));var i=n.stateNode;i&&(i=qo(i),et(n.stateNode,n.type,i))}}function fe(n){st?H?H.push(n):H=[n]:st=n}function Oe(){if(st){var n=st,i=H;if(H=st=null,Ae(n),i)for(n=0;n<i.length;n++)Ae(i[n])}}function Ce(n,i){return n(i)}function ve(){}var je=!1;function at(n,i,a){if(je)return n(i,a);je=!0;try{return Ce(n,i,a)}finally{je=!1,(st!==null||H!==null)&&(ve(),Oe())}}function Ut(n,i){var a=n.stateNode;if(a===null)return null;var c=qo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var St=!1;if(f)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){St=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{St=!1}function Un(n,i,a,c,d,m,A,F,W){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(a,ce)}catch(Ee){this.onError(Ee)}}var xi=!1,Sr=null,hn=!1,Zi=null,si={onError:function(n){xi=!0,Sr=n}};function ns(n,i,a,c,d,m,A,F,W){xi=!1,Sr=null,Un.apply(si,arguments)}function Ls(n,i,a,c,d,m,A,F,W){if(ns.apply(this,arguments),xi){if(xi){var ce=Sr;xi=!1,Sr=null}else throw Error(t(198));hn||(hn=!0,Zi=ce)}}function Fn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Di(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Mr(n){if(Fn(n)!==n)throw Error(t(188))}function Qi(n){var i=n.alternate;if(!i){if(i=Fn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Mr(d),n;if(m===c)return Mr(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var A=!1,F=d.child;F;){if(F===a){A=!0,a=d,c=m;break}if(F===c){A=!0,c=d,a=m;break}F=F.sibling}if(!A){for(F=m.child;F;){if(F===a){A=!0,a=m,c=d;break}if(F===c){A=!0,c=m,a=d;break}F=F.sibling}if(!A)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function is(n){return n=Qi(n),n!==null?rs(n):null}function rs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=rs(n);if(i!==null)return i;n=n.sibling}return null}var Ds=e.unstable_scheduleCallback,Is=e.unstable_cancelCallback,Ra=e.unstable_shouldYield,Us=e.unstable_requestPaint,Gt=e.unstable_now,Fs=e.unstable_getCurrentPriorityLevel,Er=e.unstable_ImmediatePriority,w=e.unstable_UserBlockingPriority,B=e.unstable_NormalPriority,re=e.unstable_LowPriority,te=e.unstable_IdlePriority,ie=null,Le=null;function He(n){if(Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(ie,n,void 0,(n.current.flags&128)===128)}catch{}}var Pe=Math.clz32?Math.clz32:lt,$e=Math.log,Ze=Math.LN2;function lt(n){return n>>>=0,n===0?32:31-($e(n)/Ze|0)|0}var ct=64,Ye=4194304;function Et(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function zt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,A=a&268435455;if(A!==0){var F=A&~d;F!==0?c=Et(F):(m&=A,m!==0&&(c=Et(m)))}else A=a&~d,A!==0?c=Et(A):m!==0&&(c=Et(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Pe(i),d=1<<a,c|=n[a],i&=~d;return c}function $t(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var A=31-Pe(m),F=1<<A,W=d[A];W===-1?((F&a)===0||(F&c)!==0)&&(d[A]=$t(F,i)):W<=i&&(n.expiredLanes|=F),m&=~F}}function rn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Be(){var n=ct;return ct<<=1,(ct&4194240)===0&&(ct=64),n}function vn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function mt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Pe(i),n[i]=a}function kn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Pe(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function On(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Pe(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var gt=0;function Ji(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Lt,Wt,vi,kt,_i,Ii=!1,ss=[],br=null,Tr=null,wr=null,Pa=new Map,Na=new Map,Ar=[],rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mh(n,i){switch(n){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Pa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(i.pointerId)}}function La(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Xa(i),i!==null&&Wt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function sx(n,i,a,c,d){switch(i){case"focusin":return br=La(br,n,i,a,c,d),!0;case"dragenter":return Tr=La(Tr,n,i,a,c,d),!0;case"mouseover":return wr=La(wr,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Pa.set(m,La(Pa.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Na.set(m,La(Na.get(m)||null,n,i,a,c,d)),!0}return!1}function Eh(n){var i=as(n.target);if(i!==null){var a=Fn(i);if(a!==null){if(i=a.tag,i===13){if(i=Di(a),i!==null){n.blockedOn=i,_i(n.priority,function(){vi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Io(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ic(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Me=c,a.target.dispatchEvent(c),Me=null}else return i=Xa(a),i!==null&&Wt(i),n.blockedOn=a,!1;i.shift()}return!0}function bh(n,i,a){Io(n)&&a.delete(i)}function ax(){Ii=!1,br!==null&&Io(br)&&(br=null),Tr!==null&&Io(Tr)&&(Tr=null),wr!==null&&Io(wr)&&(wr=null),Pa.forEach(bh),Na.forEach(bh)}function Da(n,i){n.blockedOn===i&&(n.blockedOn=null,Ii||(Ii=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ax)))}function Ia(n){function i(d){return Da(d,n)}if(0<ss.length){Da(ss[0],n);for(var a=1;a<ss.length;a++){var c=ss[a];c.blockedOn===n&&(c.blockedOn=null)}}for(br!==null&&Da(br,n),Tr!==null&&Da(Tr,n),wr!==null&&Da(wr,n),Pa.forEach(i),Na.forEach(i),a=0;a<Ar.length;a++)c=Ar[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Ar.length&&(a=Ar[0],a.blockedOn===null);)Eh(a),a.blockedOn===null&&Ar.shift()}var ks=L.ReactCurrentBatchConfig,Uo=!0;function ox(n,i,a,c){var d=gt,m=ks.transition;ks.transition=null;try{gt=1,Dc(n,i,a,c)}finally{gt=d,ks.transition=m}}function lx(n,i,a,c){var d=gt,m=ks.transition;ks.transition=null;try{gt=4,Dc(n,i,a,c)}finally{gt=d,ks.transition=m}}function Dc(n,i,a,c){if(Uo){var d=Ic(n,i,a,c);if(d===null)Zc(n,i,c,Fo,a),Mh(n,c);else if(sx(d,n,i,a,c))c.stopPropagation();else if(Mh(n,c),i&4&&-1<rx.indexOf(n)){for(;d!==null;){var m=Xa(d);if(m!==null&&Lt(m),m=Ic(n,i,a,c),m===null&&Zc(n,i,c,Fo,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Zc(n,i,c,null,a)}}var Fo=null;function Ic(n,i,a,c){if(Fo=null,n=Je(c),n=as(n),n!==null)if(i=Fn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Di(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Fo=n,null}function Th(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fs()){case Er:return 1;case w:return 4;case B:case re:return 16;case te:return 536870912;default:return 16}default:return 16}}var Cr=null,Uc=null,ko=null;function wh(){if(ko)return ko;var n,i=Uc,a=i.length,c,d="value"in Cr?Cr.value:Cr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var A=a-n;for(c=1;c<=A&&i[a-c]===d[m-c];c++);return ko=d.slice(n,1<c?1-c:void 0)}function Oo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Bo(){return!0}function Ah(){return!1}function Yn(n){function i(a,c,d,m,A){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=A,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(a=n[F],this[F]=a?a(m):m[F]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Bo:Ah,this.isPropagationStopped=Ah,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),i}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=Yn(Os),Ua=ae({},Os,{view:0,detail:0}),cx=Yn(Ua),kc,Oc,Fa,zo=ae({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Fa&&(Fa&&n.type==="mousemove"?(kc=n.screenX-Fa.screenX,Oc=n.screenY-Fa.screenY):Oc=kc=0,Fa=n),kc)},movementY:function(n){return"movementY"in n?n.movementY:Oc}}),Ch=Yn(zo),ux=ae({},zo,{dataTransfer:0}),dx=Yn(ux),fx=ae({},Ua,{relatedTarget:0}),Bc=Yn(fx),hx=ae({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),px=Yn(hx),mx=ae({},Os,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),gx=Yn(mx),xx=ae({},Os,{data:0}),Rh=Yn(xx),vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sx(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=yx[n])?!!i[n]:!1}function zc(){return Sx}var Mx=ae({},Ua,{key:function(n){if(n.key){var i=vx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Oo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?_x[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zc,charCode:function(n){return n.type==="keypress"?Oo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Oo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ex=Yn(Mx),bx=ae({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ph=Yn(bx),Tx=ae({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zc}),wx=Yn(Tx),Ax=ae({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cx=Yn(Ax),Rx=ae({},zo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Px=Yn(Rx),Nx=[9,13,27,32],Vc=f&&"CompositionEvent"in window,ka=null;f&&"documentMode"in document&&(ka=document.documentMode);var Lx=f&&"TextEvent"in window&&!ka,Nh=f&&(!Vc||ka&&8<ka&&11>=ka),Lh=" ",Dh=!1;function Ih(n,i){switch(n){case"keyup":return Nx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function Dx(n,i){switch(n){case"compositionend":return Uh(i);case"keypress":return i.which!==32?null:(Dh=!0,Lh);case"textInput":return n=i.data,n===Lh&&Dh?null:n;default:return null}}function Ix(n,i){if(Bs)return n==="compositionend"||!Vc&&Ih(n,i)?(n=wh(),ko=Uc=Cr=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Nh&&i.locale!=="ko"?null:i.data;default:return null}}var Ux={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Ux[n.type]:i==="textarea"}function kh(n,i,a,c){fe(c),i=jo(i,"onChange"),0<i.length&&(a=new Fc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Oa=null,Ba=null;function Fx(n){tp(n,0)}function Vo(n){var i=Ws(n);if(Dt(i))return n}function kx(n,i){if(n==="change")return i}var Oh=!1;if(f){var Hc;if(f){var Gc="oninput"in document;if(!Gc){var Bh=document.createElement("div");Bh.setAttribute("oninput","return;"),Gc=typeof Bh.oninput=="function"}Hc=Gc}else Hc=!1;Oh=Hc&&(!document.documentMode||9<document.documentMode)}function zh(){Oa&&(Oa.detachEvent("onpropertychange",Vh),Ba=Oa=null)}function Vh(n){if(n.propertyName==="value"&&Vo(Ba)){var i=[];kh(i,Ba,n,Je(n)),at(Fx,i)}}function Ox(n,i,a){n==="focusin"?(zh(),Oa=i,Ba=a,Oa.attachEvent("onpropertychange",Vh)):n==="focusout"&&zh()}function Bx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Vo(Ba)}function zx(n,i){if(n==="click")return Vo(i)}function Vx(n,i){if(n==="input"||n==="change")return Vo(i)}function Hx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var yi=typeof Object.is=="function"?Object.is:Hx;function za(n,i){if(yi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!yi(n[d],i[d]))return!1}return!0}function Hh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Gh(n,i){var a=Hh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hh(a)}}function Wh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Wh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function jh(){for(var n=window,i=ut();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ut(n.document)}return i}function Wc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Gx(n){var i=jh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Wh(a.ownerDocument.documentElement,a)){if(c!==null&&Wc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Gh(a,m);var A=Gh(a,c);d&&A&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Wx=f&&"documentMode"in document&&11>=document.documentMode,zs=null,jc=null,Va=null,Xc=!1;function Xh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xc||zs==null||zs!==ut(c)||(c=zs,"selectionStart"in c&&Wc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Va&&za(Va,c)||(Va=c,c=jo(jc,"onSelect"),0<c.length&&(i=new Fc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=zs)))}function Ho(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Vs={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},$c={},$h={};f&&($h=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function Go(n){if($c[n])return $c[n];if(!Vs[n])return n;var i=Vs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in $h)return $c[n]=i[a];return n}var qh=Go("animationend"),Yh=Go("animationiteration"),Kh=Go("animationstart"),Zh=Go("transitionend"),Qh=new Map,Jh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(n,i){Qh.set(n,i),l(i,[n])}for(var qc=0;qc<Jh.length;qc++){var Yc=Jh[qc],jx=Yc.toLowerCase(),Xx=Yc[0].toUpperCase()+Yc.slice(1);Rr(jx,"on"+Xx)}Rr(qh,"onAnimationEnd"),Rr(Yh,"onAnimationIteration"),Rr(Kh,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(Zh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$x=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ha));function ep(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Ls(c,i,void 0,n),n.currentTarget=null}function tp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var A=c.length-1;0<=A;A--){var F=c[A],W=F.instance,ce=F.currentTarget;if(F=F.listener,W!==m&&d.isPropagationStopped())break e;ep(d,F,ce),m=W}else for(A=0;A<c.length;A++){if(F=c[A],W=F.instance,ce=F.currentTarget,F=F.listener,W!==m&&d.isPropagationStopped())break e;ep(d,F,ce),m=W}}}if(hn)throw n=Zi,hn=!1,Zi=null,n}function jt(n,i){var a=i[iu];a===void 0&&(a=i[iu]=new Set);var c=n+"__bubble";a.has(c)||(np(i,n,2,!1),a.add(c))}function Kc(n,i,a){var c=0;i&&(c|=4),np(a,n,c,i)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function Ga(n){if(!n[Wo]){n[Wo]=!0,s.forEach(function(a){a!=="selectionchange"&&($x.has(a)||Kc(a,!1,n),Kc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Wo]||(i[Wo]=!0,Kc("selectionchange",!1,i))}}function np(n,i,a,c){switch(Th(i)){case 1:var d=ox;break;case 4:d=lx;break;default:d=Dc}a=d.bind(null,i,a,n),d=void 0,!St||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Zc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var F=c.stateNode.containerInfo;if(F===d||F.nodeType===8&&F.parentNode===d)break;if(A===4)for(A=c.return;A!==null;){var W=A.tag;if((W===3||W===4)&&(W=A.stateNode.containerInfo,W===d||W.nodeType===8&&W.parentNode===d))return;A=A.return}for(;F!==null;){if(A=as(F),A===null)return;if(W=A.tag,W===5||W===6){c=m=A;continue e}F=F.parentNode}}c=c.return}at(function(){var ce=m,Ee=Je(a),Te=[];e:{var ye=Qh.get(n);if(ye!==void 0){var ze=Fc,Xe=n;switch(n){case"keypress":if(Oo(a)===0)break e;case"keydown":case"keyup":ze=Ex;break;case"focusin":Xe="focus",ze=Bc;break;case"focusout":Xe="blur",ze=Bc;break;case"beforeblur":case"afterblur":ze=Bc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=wx;break;case qh:case Yh:case Kh:ze=px;break;case Zh:ze=Cx;break;case"scroll":ze=cx;break;case"wheel":ze=Px;break;case"copy":case"cut":case"paste":ze=gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Ph}var qe=(i&4)!==0,nn=!qe&&n==="scroll",ne=qe?ye!==null?ye+"Capture":null:ye;qe=[];for(var $=ce,se;$!==null;){se=$;var Re=se.stateNode;if(se.tag===5&&Re!==null&&(se=Re,ne!==null&&(Re=Ut($,ne),Re!=null&&qe.push(Wa($,Re,se)))),nn)break;$=$.return}0<qe.length&&(ye=new ze(ye,Xe,null,a,Ee),Te.push({event:ye,listeners:qe}))}}if((i&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",ye&&a!==Me&&(Xe=a.relatedTarget||a.fromElement)&&(as(Xe)||Xe[er]))break e;if((ze||ye)&&(ye=Ee.window===Ee?Ee:(ye=Ee.ownerDocument)?ye.defaultView||ye.parentWindow:window,ze?(Xe=a.relatedTarget||a.toElement,ze=ce,Xe=Xe?as(Xe):null,Xe!==null&&(nn=Fn(Xe),Xe!==nn||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(ze=null,Xe=ce),ze!==Xe)){if(qe=Ch,Re="onMouseLeave",ne="onMouseEnter",$="mouse",(n==="pointerout"||n==="pointerover")&&(qe=Ph,Re="onPointerLeave",ne="onPointerEnter",$="pointer"),nn=ze==null?ye:Ws(ze),se=Xe==null?ye:Ws(Xe),ye=new qe(Re,$+"leave",ze,a,Ee),ye.target=nn,ye.relatedTarget=se,Re=null,as(Ee)===ce&&(qe=new qe(ne,$+"enter",Xe,a,Ee),qe.target=se,qe.relatedTarget=nn,Re=qe),nn=Re,ze&&Xe)t:{for(qe=ze,ne=Xe,$=0,se=qe;se;se=Hs(se))$++;for(se=0,Re=ne;Re;Re=Hs(Re))se++;for(;0<$-se;)qe=Hs(qe),$--;for(;0<se-$;)ne=Hs(ne),se--;for(;$--;){if(qe===ne||ne!==null&&qe===ne.alternate)break t;qe=Hs(qe),ne=Hs(ne)}qe=null}else qe=null;ze!==null&&ip(Te,ye,ze,qe,!1),Xe!==null&&nn!==null&&ip(Te,nn,Xe,qe,!0)}}e:{if(ye=ce?Ws(ce):window,ze=ye.nodeName&&ye.nodeName.toLowerCase(),ze==="select"||ze==="input"&&ye.type==="file")var Ke=kx;else if(Fh(ye))if(Oh)Ke=Vx;else{Ke=Bx;var tt=Ox}else(ze=ye.nodeName)&&ze.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Ke=zx);if(Ke&&(Ke=Ke(n,ce))){kh(Te,Ke,a,Ee);break e}tt&&tt(n,ye,ce),n==="focusout"&&(tt=ye._wrapperState)&&tt.controlled&&ye.type==="number"&&Jt(ye,"number",ye.value)}switch(tt=ce?Ws(ce):window,n){case"focusin":(Fh(tt)||tt.contentEditable==="true")&&(zs=tt,jc=ce,Va=null);break;case"focusout":Va=jc=zs=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,Xh(Te,a,Ee);break;case"selectionchange":if(Wx)break;case"keydown":case"keyup":Xh(Te,a,Ee)}var nt;if(Vc)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else Bs?Ih(n,a)&&(ot="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&(Nh&&a.locale!=="ko"&&(Bs||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&Bs&&(nt=wh()):(Cr=Ee,Uc="value"in Cr?Cr.value:Cr.textContent,Bs=!0)),tt=jo(ce,ot),0<tt.length&&(ot=new Rh(ot,n,null,a,Ee),Te.push({event:ot,listeners:tt}),nt?ot.data=nt:(nt=Uh(a),nt!==null&&(ot.data=nt)))),(nt=Lx?Dx(n,a):Ix(n,a))&&(ce=jo(ce,"onBeforeInput"),0<ce.length&&(Ee=new Rh("onBeforeInput","beforeinput",null,a,Ee),Te.push({event:Ee,listeners:ce}),Ee.data=nt))}tp(Te,i)})}function Wa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function jo(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Ut(n,a),m!=null&&c.unshift(Wa(n,m,d)),m=Ut(n,i),m!=null&&c.push(Wa(n,m,d))),n=n.return}return c}function Hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ip(n,i,a,c,d){for(var m=i._reactName,A=[];a!==null&&a!==c;){var F=a,W=F.alternate,ce=F.stateNode;if(W!==null&&W===c)break;F.tag===5&&ce!==null&&(F=ce,d?(W=Ut(a,m),W!=null&&A.unshift(Wa(a,W,F))):d||(W=Ut(a,m),W!=null&&A.push(Wa(a,W,F)))),a=a.return}A.length!==0&&n.push({event:i,listeners:A})}var qx=/\r\n?/g,Yx=/\u0000|\uFFFD/g;function rp(n){return(typeof n=="string"?n:""+n).replace(qx,`
`).replace(Yx,"")}function Xo(n,i,a){if(i=rp(i),rp(n)!==i&&a)throw Error(t(425))}function $o(){}var Qc=null,Jc=null;function eu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,Kx=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,Zx=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(n){return sp.resolve(null).then(n).catch(Qx)}:tu;function Qx(n){setTimeout(function(){throw n})}function nu(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Ia(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Ia(i)}function Pr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ap(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),Ui="__reactFiber$"+Gs,ja="__reactProps$"+Gs,er="__reactContainer$"+Gs,iu="__reactEvents$"+Gs,Jx="__reactListeners$"+Gs,ev="__reactHandles$"+Gs;function as(n){var i=n[Ui];if(i)return i;for(var a=n.parentNode;a;){if(i=a[er]||a[Ui]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=ap(n);n!==null;){if(a=n[Ui])return a;n=ap(n)}return i}n=a,a=n.parentNode}return null}function Xa(n){return n=n[Ui]||n[er],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ws(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function qo(n){return n[ja]||null}var ru=[],js=-1;function Nr(n){return{current:n}}function Xt(n){0>js||(n.current=ru[js],ru[js]=null,js--)}function Vt(n,i){js++,ru[js]=n.current,n.current=i}var Lr={},Mn=Nr(Lr),Bn=Nr(!1),os=Lr;function Xs(n,i){var a=n.type.contextTypes;if(!a)return Lr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function zn(n){return n=n.childContextTypes,n!=null}function Yo(){Xt(Bn),Xt(Mn)}function op(n,i,a){if(Mn.current!==Lr)throw Error(t(168));Vt(Mn,i),Vt(Bn,a)}function lp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,_e(n)||"Unknown",d));return ae({},a,c)}function Ko(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Lr,os=Mn.current,Vt(Mn,n),Vt(Bn,Bn.current),!0}function cp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=lp(n,i,os),c.__reactInternalMemoizedMergedChildContext=n,Xt(Bn),Xt(Mn),Vt(Mn,n)):Xt(Bn),Vt(Bn,a)}var tr=null,Zo=!1,su=!1;function up(n){tr===null?tr=[n]:tr.push(n)}function tv(n){Zo=!0,up(n)}function Dr(){if(!su&&tr!==null){su=!0;var n=0,i=gt;try{var a=tr;for(gt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}tr=null,Zo=!1}catch(d){throw tr!==null&&(tr=tr.slice(n+1)),Ds(Er,Dr),d}finally{gt=i,su=!1}}return null}var $s=[],qs=0,Qo=null,Jo=0,ai=[],oi=0,ls=null,nr=1,ir="";function cs(n,i){$s[qs++]=Jo,$s[qs++]=Qo,Qo=n,Jo=i}function dp(n,i,a){ai[oi++]=nr,ai[oi++]=ir,ai[oi++]=ls,ls=n;var c=nr;n=ir;var d=32-Pe(c)-1;c&=~(1<<d),a+=1;var m=32-Pe(i)+d;if(30<m){var A=d-d%5;m=(c&(1<<A)-1).toString(32),c>>=A,d-=A,nr=1<<32-Pe(i)+d|a<<d|c,ir=m+n}else nr=1<<m|a<<d|c,ir=n}function au(n){n.return!==null&&(cs(n,1),dp(n,1,0))}function ou(n){for(;n===Qo;)Qo=$s[--qs],$s[qs]=null,Jo=$s[--qs],$s[qs]=null;for(;n===ls;)ls=ai[--oi],ai[oi]=null,ir=ai[--oi],ai[oi]=null,nr=ai[--oi],ai[oi]=null}var Kn=null,Zn=null,qt=!1,Si=null;function fp(n,i){var a=di(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function hp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Kn=n,Zn=Pr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Kn=n,Zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ls!==null?{id:nr,overflow:ir}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=di(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Kn=n,Zn=null,!0):!1;default:return!1}}function lu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function cu(n){if(qt){var i=Zn;if(i){var a=i;if(!hp(n,i)){if(lu(n))throw Error(t(418));i=Pr(a.nextSibling);var c=Kn;i&&hp(n,i)?fp(c,a):(n.flags=n.flags&-4097|2,qt=!1,Kn=n)}}else{if(lu(n))throw Error(t(418));n.flags=n.flags&-4097|2,qt=!1,Kn=n}}}function pp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kn=n}function el(n){if(n!==Kn)return!1;if(!qt)return pp(n),qt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!eu(n.type,n.memoizedProps)),i&&(i=Zn)){if(lu(n))throw mp(),Error(t(418));for(;i;)fp(n,i),i=Pr(i.nextSibling)}if(pp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Zn=Pr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Zn=null}}else Zn=Kn?Pr(n.stateNode.nextSibling):null;return!0}function mp(){for(var n=Zn;n;)n=Pr(n.nextSibling)}function Ys(){Zn=Kn=null,qt=!1}function uu(n){Si===null?Si=[n]:Si.push(n)}var nv=L.ReactCurrentBatchConfig;function $a(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(A){var F=d.refs;A===null?delete F[m]:F[m]=A},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function tl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function gp(n){var i=n._init;return i(n._payload)}function xp(n){function i(ne,$){if(n){var se=ne.deletions;se===null?(ne.deletions=[$],ne.flags|=16):se.push($)}}function a(ne,$){if(!n)return null;for(;$!==null;)i(ne,$),$=$.sibling;return null}function c(ne,$){for(ne=new Map;$!==null;)$.key!==null?ne.set($.key,$):ne.set($.index,$),$=$.sibling;return ne}function d(ne,$){return ne=Vr(ne,$),ne.index=0,ne.sibling=null,ne}function m(ne,$,se){return ne.index=se,n?(se=ne.alternate,se!==null?(se=se.index,se<$?(ne.flags|=2,$):se):(ne.flags|=2,$)):(ne.flags|=1048576,$)}function A(ne){return n&&ne.alternate===null&&(ne.flags|=2),ne}function F(ne,$,se,Re){return $===null||$.tag!==6?($=td(se,ne.mode,Re),$.return=ne,$):($=d($,se),$.return=ne,$)}function W(ne,$,se,Re){var Ke=se.type;return Ke===I?Ee(ne,$,se.props.children,Re,se.key):$!==null&&($.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Q&&gp(Ke)===$.type)?(Re=d($,se.props),Re.ref=$a(ne,$,se),Re.return=ne,Re):(Re=Tl(se.type,se.key,se.props,null,ne.mode,Re),Re.ref=$a(ne,$,se),Re.return=ne,Re)}function ce(ne,$,se,Re){return $===null||$.tag!==4||$.stateNode.containerInfo!==se.containerInfo||$.stateNode.implementation!==se.implementation?($=nd(se,ne.mode,Re),$.return=ne,$):($=d($,se.children||[]),$.return=ne,$)}function Ee(ne,$,se,Re,Ke){return $===null||$.tag!==7?($=xs(se,ne.mode,Re,Ke),$.return=ne,$):($=d($,se),$.return=ne,$)}function Te(ne,$,se){if(typeof $=="string"&&$!==""||typeof $=="number")return $=td(""+$,ne.mode,se),$.return=ne,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case O:return se=Tl($.type,$.key,$.props,null,ne.mode,se),se.ref=$a(ne,null,$),se.return=ne,se;case R:return $=nd($,ne.mode,se),$.return=ne,$;case Q:var Re=$._init;return Te(ne,Re($._payload),se)}if(j($)||K($))return $=xs($,ne.mode,se,null),$.return=ne,$;tl(ne,$)}return null}function ye(ne,$,se,Re){var Ke=$!==null?$.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Ke!==null?null:F(ne,$,""+se,Re);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case O:return se.key===Ke?W(ne,$,se,Re):null;case R:return se.key===Ke?ce(ne,$,se,Re):null;case Q:return Ke=se._init,ye(ne,$,Ke(se._payload),Re)}if(j(se)||K(se))return Ke!==null?null:Ee(ne,$,se,Re,null);tl(ne,se)}return null}function ze(ne,$,se,Re,Ke){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return ne=ne.get(se)||null,F($,ne,""+Re,Ke);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case O:return ne=ne.get(Re.key===null?se:Re.key)||null,W($,ne,Re,Ke);case R:return ne=ne.get(Re.key===null?se:Re.key)||null,ce($,ne,Re,Ke);case Q:var tt=Re._init;return ze(ne,$,se,tt(Re._payload),Ke)}if(j(Re)||K(Re))return ne=ne.get(se)||null,Ee($,ne,Re,Ke,null);tl($,Re)}return null}function Xe(ne,$,se,Re){for(var Ke=null,tt=null,nt=$,ot=$=0,gn=null;nt!==null&&ot<se.length;ot++){nt.index>ot?(gn=nt,nt=null):gn=nt.sibling;var Rt=ye(ne,nt,se[ot],Re);if(Rt===null){nt===null&&(nt=gn);break}n&&nt&&Rt.alternate===null&&i(ne,nt),$=m(Rt,$,ot),tt===null?Ke=Rt:tt.sibling=Rt,tt=Rt,nt=gn}if(ot===se.length)return a(ne,nt),qt&&cs(ne,ot),Ke;if(nt===null){for(;ot<se.length;ot++)nt=Te(ne,se[ot],Re),nt!==null&&($=m(nt,$,ot),tt===null?Ke=nt:tt.sibling=nt,tt=nt);return qt&&cs(ne,ot),Ke}for(nt=c(ne,nt);ot<se.length;ot++)gn=ze(nt,ne,ot,se[ot],Re),gn!==null&&(n&&gn.alternate!==null&&nt.delete(gn.key===null?ot:gn.key),$=m(gn,$,ot),tt===null?Ke=gn:tt.sibling=gn,tt=gn);return n&&nt.forEach(function(Hr){return i(ne,Hr)}),qt&&cs(ne,ot),Ke}function qe(ne,$,se,Re){var Ke=K(se);if(typeof Ke!="function")throw Error(t(150));if(se=Ke.call(se),se==null)throw Error(t(151));for(var tt=Ke=null,nt=$,ot=$=0,gn=null,Rt=se.next();nt!==null&&!Rt.done;ot++,Rt=se.next()){nt.index>ot?(gn=nt,nt=null):gn=nt.sibling;var Hr=ye(ne,nt,Rt.value,Re);if(Hr===null){nt===null&&(nt=gn);break}n&&nt&&Hr.alternate===null&&i(ne,nt),$=m(Hr,$,ot),tt===null?Ke=Hr:tt.sibling=Hr,tt=Hr,nt=gn}if(Rt.done)return a(ne,nt),qt&&cs(ne,ot),Ke;if(nt===null){for(;!Rt.done;ot++,Rt=se.next())Rt=Te(ne,Rt.value,Re),Rt!==null&&($=m(Rt,$,ot),tt===null?Ke=Rt:tt.sibling=Rt,tt=Rt);return qt&&cs(ne,ot),Ke}for(nt=c(ne,nt);!Rt.done;ot++,Rt=se.next())Rt=ze(nt,ne,ot,Rt.value,Re),Rt!==null&&(n&&Rt.alternate!==null&&nt.delete(Rt.key===null?ot:Rt.key),$=m(Rt,$,ot),tt===null?Ke=Rt:tt.sibling=Rt,tt=Rt);return n&&nt.forEach(function(Uv){return i(ne,Uv)}),qt&&cs(ne,ot),Ke}function nn(ne,$,se,Re){if(typeof se=="object"&&se!==null&&se.type===I&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case O:e:{for(var Ke=se.key,tt=$;tt!==null;){if(tt.key===Ke){if(Ke=se.type,Ke===I){if(tt.tag===7){a(ne,tt.sibling),$=d(tt,se.props.children),$.return=ne,ne=$;break e}}else if(tt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Q&&gp(Ke)===tt.type){a(ne,tt.sibling),$=d(tt,se.props),$.ref=$a(ne,tt,se),$.return=ne,ne=$;break e}a(ne,tt);break}else i(ne,tt);tt=tt.sibling}se.type===I?($=xs(se.props.children,ne.mode,Re,se.key),$.return=ne,ne=$):(Re=Tl(se.type,se.key,se.props,null,ne.mode,Re),Re.ref=$a(ne,$,se),Re.return=ne,ne=Re)}return A(ne);case R:e:{for(tt=se.key;$!==null;){if($.key===tt)if($.tag===4&&$.stateNode.containerInfo===se.containerInfo&&$.stateNode.implementation===se.implementation){a(ne,$.sibling),$=d($,se.children||[]),$.return=ne,ne=$;break e}else{a(ne,$);break}else i(ne,$);$=$.sibling}$=nd(se,ne.mode,Re),$.return=ne,ne=$}return A(ne);case Q:return tt=se._init,nn(ne,$,tt(se._payload),Re)}if(j(se))return Xe(ne,$,se,Re);if(K(se))return qe(ne,$,se,Re);tl(ne,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,$!==null&&$.tag===6?(a(ne,$.sibling),$=d($,se),$.return=ne,ne=$):(a(ne,$),$=td(se,ne.mode,Re),$.return=ne,ne=$),A(ne)):a(ne,$)}return nn}var Ks=xp(!0),vp=xp(!1),nl=Nr(null),il=null,Zs=null,du=null;function fu(){du=Zs=il=null}function hu(n){var i=nl.current;Xt(nl),n._currentValue=i}function pu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Qs(n,i){il=n,du=Zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Vn=!0),n.firstContext=null)}function li(n){var i=n._currentValue;if(du!==n)if(n={context:n,memoizedValue:i,next:null},Zs===null){if(il===null)throw Error(t(308));Zs=n,il.dependencies={lanes:0,firstContext:n}}else Zs=Zs.next=n;return i}var us=null;function mu(n){us===null?us=[n]:us.push(n)}function _p(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,mu(i)):(a.next=d.next,d.next=a),i.interleaved=a,rr(n,c)}function rr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Ir=!1;function gu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function sr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Ur(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,rr(n,a)}return d=c.interleaved,d===null?(i.next=i,mu(c)):(i.next=d.next,d.next=i),c.interleaved=i,rr(n,a)}function rl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,On(n,a)}}function Sp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var A={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=A:m=m.next=A,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function sl(n,i,a,c){var d=n.updateQueue;Ir=!1;var m=d.firstBaseUpdate,A=d.lastBaseUpdate,F=d.shared.pending;if(F!==null){d.shared.pending=null;var W=F,ce=W.next;W.next=null,A===null?m=ce:A.next=ce,A=W;var Ee=n.alternate;Ee!==null&&(Ee=Ee.updateQueue,F=Ee.lastBaseUpdate,F!==A&&(F===null?Ee.firstBaseUpdate=ce:F.next=ce,Ee.lastBaseUpdate=W))}if(m!==null){var Te=d.baseState;A=0,Ee=ce=W=null,F=m;do{var ye=F.lane,ze=F.eventTime;if((c&ye)===ye){Ee!==null&&(Ee=Ee.next={eventTime:ze,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Xe=n,qe=F;switch(ye=i,ze=a,qe.tag){case 1:if(Xe=qe.payload,typeof Xe=="function"){Te=Xe.call(ze,Te,ye);break e}Te=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=qe.payload,ye=typeof Xe=="function"?Xe.call(ze,Te,ye):Xe,ye==null)break e;Te=ae({},Te,ye);break e;case 2:Ir=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,ye=d.effects,ye===null?d.effects=[F]:ye.push(F))}else ze={eventTime:ze,lane:ye,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Ee===null?(ce=Ee=ze,W=Te):Ee=Ee.next=ze,A|=ye;if(F=F.next,F===null){if(F=d.shared.pending,F===null)break;ye=F,F=ye.next,ye.next=null,d.lastBaseUpdate=ye,d.shared.pending=null}}while(!0);if(Ee===null&&(W=Te),d.baseState=W,d.firstBaseUpdate=ce,d.lastBaseUpdate=Ee,i=d.shared.interleaved,i!==null){d=i;do A|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);hs|=A,n.lanes=A,n.memoizedState=Te}}function Mp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var qa={},Fi=Nr(qa),Ya=Nr(qa),Ka=Nr(qa);function ds(n){if(n===qa)throw Error(t(174));return n}function xu(n,i){switch(Vt(Ka,i),Vt(Ya,n),Vt(Fi,qa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}Xt(Fi),Vt(Fi,i)}function Js(){Xt(Fi),Xt(Ya),Xt(Ka)}function Ep(n){ds(Ka.current);var i=ds(Fi.current),a=E(i,n.type);i!==a&&(Vt(Ya,n),Vt(Fi,a))}function vu(n){Ya.current===n&&(Xt(Fi),Xt(Ya))}var Kt=Nr(0);function al(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var _u=[];function yu(){for(var n=0;n<_u.length;n++)_u[n]._workInProgressVersionPrimary=null;_u.length=0}var ol=L.ReactCurrentDispatcher,Su=L.ReactCurrentBatchConfig,fs=0,Zt=null,on=null,pn=null,ll=!1,Za=!1,Qa=0,iv=0;function En(){throw Error(t(321))}function Mu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!yi(n[a],i[a]))return!1;return!0}function Eu(n,i,a,c,d,m){if(fs=m,Zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ol.current=n===null||n.memoizedState===null?ov:lv,n=a(c,d),Za){m=0;do{if(Za=!1,Qa=0,25<=m)throw Error(t(301));m+=1,pn=on=null,i.updateQueue=null,ol.current=cv,n=a(c,d)}while(Za)}if(ol.current=dl,i=on!==null&&on.next!==null,fs=0,pn=on=Zt=null,ll=!1,i)throw Error(t(300));return n}function bu(){var n=Qa!==0;return Qa=0,n}function ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Zt.memoizedState=pn=n:pn=pn.next=n,pn}function ci(){if(on===null){var n=Zt.alternate;n=n!==null?n.memoizedState:null}else n=on.next;var i=pn===null?Zt.memoizedState:pn.next;if(i!==null)pn=i,on=n;else{if(n===null)throw Error(t(310));on=n,n={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},pn===null?Zt.memoizedState=pn=n:pn=pn.next=n}return pn}function Ja(n,i){return typeof i=="function"?i(n):i}function Tu(n){var i=ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=on,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var A=d.next;d.next=m.next,m.next=A}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var F=A=null,W=null,ce=m;do{var Ee=ce.lane;if((fs&Ee)===Ee)W!==null&&(W=W.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),c=ce.hasEagerState?ce.eagerState:n(c,ce.action);else{var Te={lane:Ee,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};W===null?(F=W=Te,A=c):W=W.next=Te,Zt.lanes|=Ee,hs|=Ee}ce=ce.next}while(ce!==null&&ce!==m);W===null?A=c:W.next=F,yi(c,i.memoizedState)||(Vn=!0),i.memoizedState=c,i.baseState=A,i.baseQueue=W,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Zt.lanes|=m,hs|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function wu(n){var i=ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var A=d=d.next;do m=n(m,A.action),A=A.next;while(A!==d);yi(m,i.memoizedState)||(Vn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function bp(){}function Tp(n,i){var a=Zt,c=ci(),d=i(),m=!yi(c.memoizedState,d);if(m&&(c.memoizedState=d,Vn=!0),c=c.queue,Au(Cp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||pn!==null&&pn.memoizedState.tag&1){if(a.flags|=2048,eo(9,Ap.bind(null,a,c,d,i),void 0,null),mn===null)throw Error(t(349));(fs&30)!==0||wp(a,i,d)}return d}function wp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Zt.updateQueue,i===null?(i={lastEffect:null,stores:null},Zt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Ap(n,i,a,c){i.value=a,i.getSnapshot=c,Rp(i)&&Pp(n)}function Cp(n,i,a){return a(function(){Rp(i)&&Pp(n)})}function Rp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!yi(n,a)}catch{return!0}}function Pp(n){var i=rr(n,1);i!==null&&Ti(i,n,1,-1)}function Np(n){var i=ki();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:n},i.queue=n,n=n.dispatch=av.bind(null,Zt,n),[i.memoizedState,n]}function eo(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Zt.updateQueue,i===null?(i={lastEffect:null,stores:null},Zt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Lp(){return ci().memoizedState}function cl(n,i,a,c){var d=ki();Zt.flags|=n,d.memoizedState=eo(1|i,a,void 0,c===void 0?null:c)}function ul(n,i,a,c){var d=ci();c=c===void 0?null:c;var m=void 0;if(on!==null){var A=on.memoizedState;if(m=A.destroy,c!==null&&Mu(c,A.deps)){d.memoizedState=eo(i,a,m,c);return}}Zt.flags|=n,d.memoizedState=eo(1|i,a,m,c)}function Dp(n,i){return cl(8390656,8,n,i)}function Au(n,i){return ul(2048,8,n,i)}function Ip(n,i){return ul(4,2,n,i)}function Up(n,i){return ul(4,4,n,i)}function Fp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function kp(n,i,a){return a=a!=null?a.concat([n]):null,ul(4,4,Fp.bind(null,i,n),a)}function Cu(){}function Op(n,i){var a=ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Mu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Bp(n,i){var a=ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Mu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function zp(n,i,a){return(fs&21)===0?(n.baseState&&(n.baseState=!1,Vn=!0),n.memoizedState=a):(yi(a,i)||(a=Be(),Zt.lanes|=a,hs|=a,n.baseState=!0),i)}function rv(n,i){var a=gt;gt=a!==0&&4>a?a:4,n(!0);var c=Su.transition;Su.transition={};try{n(!1),i()}finally{gt=a,Su.transition=c}}function Vp(){return ci().memoizedState}function sv(n,i,a){var c=Br(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Hp(n))Gp(i,a);else if(a=_p(n,i,a,c),a!==null){var d=Nn();Ti(a,n,c,d),Wp(a,i,c)}}function av(n,i,a){var c=Br(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hp(n))Gp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var A=i.lastRenderedState,F=m(A,a);if(d.hasEagerState=!0,d.eagerState=F,yi(F,A)){var W=i.interleaved;W===null?(d.next=d,mu(i)):(d.next=W.next,W.next=d),i.interleaved=d;return}}catch{}finally{}a=_p(n,i,d,c),a!==null&&(d=Nn(),Ti(a,n,c,d),Wp(a,i,c))}}function Hp(n){var i=n.alternate;return n===Zt||i!==null&&i===Zt}function Gp(n,i){Za=ll=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Wp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,On(n,a)}}var dl={readContext:li,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},ov={readContext:li,useCallback:function(n,i){return ki().memoizedState=[n,i===void 0?null:i],n},useContext:li,useEffect:Dp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,cl(4194308,4,Fp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return cl(4194308,4,n,i)},useInsertionEffect:function(n,i){return cl(4,2,n,i)},useMemo:function(n,i){var a=ki();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=ki();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=sv.bind(null,Zt,n),[c.memoizedState,n]},useRef:function(n){var i=ki();return n={current:n},i.memoizedState=n},useState:Np,useDebugValue:Cu,useDeferredValue:function(n){return ki().memoizedState=n},useTransition:function(){var n=Np(!1),i=n[0];return n=rv.bind(null,n[1]),ki().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Zt,d=ki();if(qt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),mn===null)throw Error(t(349));(fs&30)!==0||wp(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Dp(Cp.bind(null,c,m,n),[n]),c.flags|=2048,eo(9,Ap.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=ki(),i=mn.identifierPrefix;if(qt){var a=ir,c=nr;a=(c&~(1<<32-Pe(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Qa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=iv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},lv={readContext:li,useCallback:Op,useContext:li,useEffect:Au,useImperativeHandle:kp,useInsertionEffect:Ip,useLayoutEffect:Up,useMemo:Bp,useReducer:Tu,useRef:Lp,useState:function(){return Tu(Ja)},useDebugValue:Cu,useDeferredValue:function(n){var i=ci();return zp(i,on.memoizedState,n)},useTransition:function(){var n=Tu(Ja)[0],i=ci().memoizedState;return[n,i]},useMutableSource:bp,useSyncExternalStore:Tp,useId:Vp,unstable_isNewReconciler:!1},cv={readContext:li,useCallback:Op,useContext:li,useEffect:Au,useImperativeHandle:kp,useInsertionEffect:Ip,useLayoutEffect:Up,useMemo:Bp,useReducer:wu,useRef:Lp,useState:function(){return wu(Ja)},useDebugValue:Cu,useDeferredValue:function(n){var i=ci();return on===null?i.memoizedState=n:zp(i,on.memoizedState,n)},useTransition:function(){var n=wu(Ja)[0],i=ci().memoizedState;return[n,i]},useMutableSource:bp,useSyncExternalStore:Tp,useId:Vp,unstable_isNewReconciler:!1};function Mi(n,i){if(n&&n.defaultProps){i=ae({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Ru(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ae({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var fl={isMounted:function(n){return(n=n._reactInternals)?Fn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Nn(),d=Br(n),m=sr(c,d);m.payload=i,a!=null&&(m.callback=a),i=Ur(n,m,d),i!==null&&(Ti(i,n,d,c),rl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Nn(),d=Br(n),m=sr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Ur(n,m,d),i!==null&&(Ti(i,n,d,c),rl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Nn(),c=Br(n),d=sr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Ur(n,d,c),i!==null&&(Ti(i,n,c,a),rl(i,n,c))}};function jp(n,i,a,c,d,m,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,A):i.prototype&&i.prototype.isPureReactComponent?!za(a,c)||!za(d,m):!0}function Xp(n,i,a){var c=!1,d=Lr,m=i.contextType;return typeof m=="object"&&m!==null?m=li(m):(d=zn(i)?os:Mn.current,c=i.contextTypes,m=(c=c!=null)?Xs(n,d):Lr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=fl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function $p(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&fl.enqueueReplaceState(i,i.state,null)}function Pu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},gu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=li(m):(m=zn(i)?os:Mn.current,d.context=Xs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Ru(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&fl.enqueueReplaceState(d,d.state,null),sl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ea(n,i){try{var a="",c=i;do a+=De(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Nu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Lu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var uv=typeof WeakMap=="function"?WeakMap:Map;function qp(n,i,a){a=sr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){_l||(_l=!0,$u=c),Lu(n,i)},a}function Yp(n,i,a){a=sr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Lu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Lu(n,i),typeof c!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),a}function Kp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new uv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=bv.bind(null,n,i,a),i.then(n,n))}function Zp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Qp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=sr(-1,1),i.tag=2,Ur(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var dv=L.ReactCurrentOwner,Vn=!1;function Pn(n,i,a,c){i.child=n===null?vp(i,null,a,c):Ks(i,n.child,a,c)}function Jp(n,i,a,c,d){a=a.render;var m=i.ref;return Qs(i,d),c=Eu(n,i,a,c,m,d),a=bu(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ar(n,i,d)):(qt&&a&&au(i),i.flags|=1,Pn(n,i,c,d),i.child)}function em(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!ed(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,tm(n,i,m,c,d)):(n=Tl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var A=m.memoizedProps;if(a=a.compare,a=a!==null?a:za,a(A,c)&&n.ref===i.ref)return ar(n,i,d)}return i.flags|=1,n=Vr(m,c),n.ref=i.ref,n.return=i,i.child=n}function tm(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(za(m,c)&&n.ref===i.ref)if(Vn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Vn=!0);else return i.lanes=n.lanes,ar(n,i,d)}return Du(n,i,a,c,d)}function nm(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(na,Qn),Qn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Vt(na,Qn),Qn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Vt(na,Qn),Qn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Vt(na,Qn),Qn|=c;return Pn(n,i,d,a),i.child}function im(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Du(n,i,a,c,d){var m=zn(a)?os:Mn.current;return m=Xs(i,m),Qs(i,d),a=Eu(n,i,a,c,m,d),c=bu(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ar(n,i,d)):(qt&&c&&au(i),i.flags|=1,Pn(n,i,a,d),i.child)}function rm(n,i,a,c,d){if(zn(a)){var m=!0;Ko(i)}else m=!1;if(Qs(i,d),i.stateNode===null)pl(n,i),Xp(i,a,c),Pu(i,a,c,d),c=!0;else if(n===null){var A=i.stateNode,F=i.memoizedProps;A.props=F;var W=A.context,ce=a.contextType;typeof ce=="object"&&ce!==null?ce=li(ce):(ce=zn(a)?os:Mn.current,ce=Xs(i,ce));var Ee=a.getDerivedStateFromProps,Te=typeof Ee=="function"||typeof A.getSnapshotBeforeUpdate=="function";Te||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==c||W!==ce)&&$p(i,A,c,ce),Ir=!1;var ye=i.memoizedState;A.state=ye,sl(i,c,A,d),W=i.memoizedState,F!==c||ye!==W||Bn.current||Ir?(typeof Ee=="function"&&(Ru(i,a,Ee,c),W=i.memoizedState),(F=Ir||jp(i,a,F,c,ye,W,ce))?(Te||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=W),A.props=c,A.state=W,A.context=ce,c=F):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{A=i.stateNode,yp(n,i),F=i.memoizedProps,ce=i.type===i.elementType?F:Mi(i.type,F),A.props=ce,Te=i.pendingProps,ye=A.context,W=a.contextType,typeof W=="object"&&W!==null?W=li(W):(W=zn(a)?os:Mn.current,W=Xs(i,W));var ze=a.getDerivedStateFromProps;(Ee=typeof ze=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==Te||ye!==W)&&$p(i,A,c,W),Ir=!1,ye=i.memoizedState,A.state=ye,sl(i,c,A,d);var Xe=i.memoizedState;F!==Te||ye!==Xe||Bn.current||Ir?(typeof ze=="function"&&(Ru(i,a,ze,c),Xe=i.memoizedState),(ce=Ir||jp(i,a,ce,c,ye,Xe,W)||!1)?(Ee||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,Xe,W),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,Xe,W)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||F===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Xe),A.props=c,A.state=Xe,A.context=W,c=ce):(typeof A.componentDidUpdate!="function"||F===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),c=!1)}return Iu(n,i,a,c,m,d)}function Iu(n,i,a,c,d,m){im(n,i);var A=(i.flags&128)!==0;if(!c&&!A)return d&&cp(i,a,!1),ar(n,i,m);c=i.stateNode,dv.current=i;var F=A&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&A?(i.child=Ks(i,n.child,null,m),i.child=Ks(i,null,F,m)):Pn(n,i,F,m),i.memoizedState=c.state,d&&cp(i,a,!0),i.child}function sm(n){var i=n.stateNode;i.pendingContext?op(n,i.pendingContext,i.pendingContext!==i.context):i.context&&op(n,i.context,!1),xu(n,i.containerInfo)}function am(n,i,a,c,d){return Ys(),uu(d),i.flags|=256,Pn(n,i,a,c),i.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function Fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function om(n,i,a){var c=i.pendingProps,d=Kt.current,m=!1,A=(i.flags&128)!==0,F;if((F=A)||(F=n!==null&&n.memoizedState===null?!1:(d&2)!==0),F?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Vt(Kt,d&1),n===null)return cu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=c.children,n=c.fallback,m?(c=i.mode,m=i.child,A={mode:"hidden",children:A},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=A):m=wl(A,c,0,null),n=xs(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Fu(a),i.memoizedState=Uu,n):ku(i,A));if(d=n.memoizedState,d!==null&&(F=d.dehydrated,F!==null))return fv(n,i,A,c,F,d,a);if(m){m=c.fallback,A=i.mode,d=n.child,F=d.sibling;var W={mode:"hidden",children:c.children};return(A&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=W,i.deletions=null):(c=Vr(d,W),c.subtreeFlags=d.subtreeFlags&14680064),F!==null?m=Vr(F,m):(m=xs(m,A,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,A=n.child.memoizedState,A=A===null?Fu(a):{baseLanes:A.baseLanes|a,cachePool:null,transitions:A.transitions},m.memoizedState=A,m.childLanes=n.childLanes&~a,i.memoizedState=Uu,c}return m=n.child,n=m.sibling,c=Vr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function ku(n,i){return i=wl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function hl(n,i,a,c){return c!==null&&uu(c),Ks(i,n.child,null,a),n=ku(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function fv(n,i,a,c,d,m,A){if(a)return i.flags&256?(i.flags&=-257,c=Nu(Error(t(422))),hl(n,i,A,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=wl({mode:"visible",children:c.children},d,0,null),m=xs(m,d,A,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Ks(i,n.child,null,A),i.child.memoizedState=Fu(A),i.memoizedState=Uu,m);if((i.mode&1)===0)return hl(n,i,A,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var F=c.dgst;return c=F,m=Error(t(419)),c=Nu(m,c,void 0),hl(n,i,A,c)}if(F=(A&n.childLanes)!==0,Vn||F){if(c=mn,c!==null){switch(A&-A){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|A))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,rr(n,d),Ti(c,n,d,-1))}return Ju(),c=Nu(Error(t(421))),hl(n,i,A,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Tv.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Zn=Pr(d.nextSibling),Kn=i,qt=!0,Si=null,n!==null&&(ai[oi++]=nr,ai[oi++]=ir,ai[oi++]=ls,nr=n.id,ir=n.overflow,ls=i),i=ku(i,c.children),i.flags|=4096,i)}function lm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),pu(n.return,i,a)}function Ou(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function cm(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Pn(n,i,c.children,a),c=Kt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&lm(n,a,i);else if(n.tag===19)lm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Vt(Kt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&al(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Ou(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&al(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Ou(i,!0,a,null,m);break;case"together":Ou(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function pl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ar(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),hs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Vr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Vr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function hv(n,i,a){switch(i.tag){case 3:sm(i),Ys();break;case 5:Ep(i);break;case 1:zn(i.type)&&Ko(i);break;case 4:xu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Vt(nl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Vt(Kt,Kt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?om(n,i,a):(Vt(Kt,Kt.current&1),n=ar(n,i,a),n!==null?n.sibling:null);Vt(Kt,Kt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return cm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Vt(Kt,Kt.current),c)break;return null;case 22:case 23:return i.lanes=0,nm(n,i,a)}return ar(n,i,a)}var um,Bu,dm,fm;um=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Bu=function(){},dm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ds(Fi.current);var m=null;switch(a){case"input":d=_t(n,d),c=_t(n,c),m=[];break;case"select":d=ae({},d,{value:void 0}),c=ae({},c,{value:void 0}),m=[];break;case"textarea":d=ht(n,d),c=ht(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=$o)}Se(a,c);var A;a=null;for(ce in d)if(!c.hasOwnProperty(ce)&&d.hasOwnProperty(ce)&&d[ce]!=null)if(ce==="style"){var F=d[ce];for(A in F)F.hasOwnProperty(A)&&(a||(a={}),a[A]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?m||(m=[]):(m=m||[]).push(ce,null));for(ce in c){var W=c[ce];if(F=d!=null?d[ce]:void 0,c.hasOwnProperty(ce)&&W!==F&&(W!=null||F!=null))if(ce==="style")if(F){for(A in F)!F.hasOwnProperty(A)||W&&W.hasOwnProperty(A)||(a||(a={}),a[A]="");for(A in W)W.hasOwnProperty(A)&&F[A]!==W[A]&&(a||(a={}),a[A]=W[A])}else a||(m||(m=[]),m.push(ce,a)),a=W;else ce==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,F=F?F.__html:void 0,W!=null&&F!==W&&(m=m||[]).push(ce,W)):ce==="children"?typeof W!="string"&&typeof W!="number"||(m=m||[]).push(ce,""+W):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(W!=null&&ce==="onScroll"&&jt("scroll",n),m||F===W||(m=[])):(m=m||[]).push(ce,W))}a&&(m=m||[]).push("style",a);var ce=m;(i.updateQueue=ce)&&(i.flags|=4)}},fm=function(n,i,a,c){a!==c&&(i.flags|=4)};function to(n,i){if(!qt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function bn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function pv(n,i,a){var c=i.pendingProps;switch(ou(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(i),null;case 1:return zn(i.type)&&Yo(),bn(i),null;case 3:return c=i.stateNode,Js(),Xt(Bn),Xt(Mn),yu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(el(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Si!==null&&(Ku(Si),Si=null))),Bu(n,i),bn(i),null;case 5:vu(i);var d=ds(Ka.current);if(a=i.type,n!==null&&i.stateNode!=null)dm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return bn(i),null}if(n=ds(Fi.current),el(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Ui]=i,c[ja]=m,n=(i.mode&1)!==0,a){case"dialog":jt("cancel",c),jt("close",c);break;case"iframe":case"object":case"embed":jt("load",c);break;case"video":case"audio":for(d=0;d<Ha.length;d++)jt(Ha[d],c);break;case"source":jt("error",c);break;case"img":case"image":case"link":jt("error",c),jt("load",c);break;case"details":jt("toggle",c);break;case"input":yt(c,m),jt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},jt("invalid",c);break;case"textarea":Pt(c,m),jt("invalid",c)}Se(a,m),d=null;for(var A in m)if(m.hasOwnProperty(A)){var F=m[A];A==="children"?typeof F=="string"?c.textContent!==F&&(m.suppressHydrationWarning!==!0&&Xo(c.textContent,F,n),d=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(m.suppressHydrationWarning!==!0&&Xo(c.textContent,F,n),d=["children",""+F]):o.hasOwnProperty(A)&&F!=null&&A==="onScroll"&&jt("scroll",c)}switch(a){case"input":Qe(c),Bt(c,m,!0);break;case"textarea":Qe(c),It(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=$o)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{A=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=N(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(a,{is:c.is}):(n=A.createElement(a),a==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,a),n[Ui]=i,n[ja]=c,um(n,i,!1,!1),i.stateNode=n;e:{switch(A=ge(a,c),a){case"dialog":jt("cancel",n),jt("close",n),d=c;break;case"iframe":case"object":case"embed":jt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ha.length;d++)jt(Ha[d],n);d=c;break;case"source":jt("error",n),d=c;break;case"img":case"image":case"link":jt("error",n),jt("load",n),d=c;break;case"details":jt("toggle",n),d=c;break;case"input":yt(n,c),d=_t(n,c),jt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ae({},c,{value:void 0}),jt("invalid",n);break;case"textarea":Pt(n,c),d=ht(n,c),jt("invalid",n);break;default:d=c}Se(a,d),F=d;for(m in F)if(F.hasOwnProperty(m)){var W=F[m];m==="style"?pe(n,W):m==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&he(n,W)):m==="children"?typeof W=="string"?(a!=="textarea"||W!=="")&&xe(n,W):typeof W=="number"&&xe(n,""+W):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?W!=null&&m==="onScroll"&&jt("scroll",n):W!=null&&D(n,m,W,A))}switch(a){case"input":Qe(n),Bt(n,c,!1);break;case"textarea":Qe(n),It(n);break;case"option":c.value!=null&&n.setAttribute("value",""+me(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Nt(n,!!c.multiple,m,!1):c.defaultValue!=null&&Nt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=$o)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return bn(i),null;case 6:if(n&&i.stateNode!=null)fm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ds(Ka.current),ds(Fi.current),el(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ui]=i,(m=c.nodeValue!==a)&&(n=Kn,n!==null))switch(n.tag){case 3:Xo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Xo(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ui]=i,i.stateNode=c}return bn(i),null;case 13:if(Xt(Kt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(qt&&Zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)mp(),Ys(),i.flags|=98560,m=!1;else if(m=el(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ui]=i}else Ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bn(i),m=!1}else Si!==null&&(Ku(Si),Si=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Kt.current&1)!==0?ln===0&&(ln=3):Ju())),i.updateQueue!==null&&(i.flags|=4),bn(i),null);case 4:return Js(),Bu(n,i),n===null&&Ga(i.stateNode.containerInfo),bn(i),null;case 10:return hu(i.type._context),bn(i),null;case 17:return zn(i.type)&&Yo(),bn(i),null;case 19:if(Xt(Kt),m=i.memoizedState,m===null)return bn(i),null;if(c=(i.flags&128)!==0,A=m.rendering,A===null)if(c)to(m,!1);else{if(ln!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(A=al(n),A!==null){for(i.flags|=128,to(m,!1),c=A.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,A=m.alternate,A===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=A.childLanes,m.lanes=A.lanes,m.child=A.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=A.memoizedProps,m.memoizedState=A.memoizedState,m.updateQueue=A.updateQueue,m.type=A.type,n=A.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Vt(Kt,Kt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Gt()>ia&&(i.flags|=128,c=!0,to(m,!1),i.lanes=4194304)}else{if(!c)if(n=al(A),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),to(m,!0),m.tail===null&&m.tailMode==="hidden"&&!A.alternate&&!qt)return bn(i),null}else 2*Gt()-m.renderingStartTime>ia&&a!==1073741824&&(i.flags|=128,c=!0,to(m,!1),i.lanes=4194304);m.isBackwards?(A.sibling=i.child,i.child=A):(a=m.last,a!==null?a.sibling=A:i.child=A,m.last=A)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Gt(),i.sibling=null,a=Kt.current,Vt(Kt,c?a&1|2:a&1),i):(bn(i),null);case 22:case 23:return Qu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Qn&1073741824)!==0&&(bn(i),i.subtreeFlags&6&&(i.flags|=8192)):bn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function mv(n,i){switch(ou(i),i.tag){case 1:return zn(i.type)&&Yo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Js(),Xt(Bn),Xt(Mn),yu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return vu(i),null;case 13:if(Xt(Kt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ys()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Xt(Kt),null;case 4:return Js(),null;case 10:return hu(i.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var ml=!1,Tn=!1,gv=typeof WeakSet=="function"?WeakSet:Set,We=null;function ta(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){en(n,i,c)}else a.current=null}function zu(n,i,a){try{a()}catch(c){en(n,i,c)}}var hm=!1;function xv(n,i){if(Qc=Uo,n=jh(),Wc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var A=0,F=-1,W=-1,ce=0,Ee=0,Te=n,ye=null;t:for(;;){for(var ze;Te!==a||d!==0&&Te.nodeType!==3||(F=A+d),Te!==m||c!==0&&Te.nodeType!==3||(W=A+c),Te.nodeType===3&&(A+=Te.nodeValue.length),(ze=Te.firstChild)!==null;)ye=Te,Te=ze;for(;;){if(Te===n)break t;if(ye===a&&++ce===d&&(F=A),ye===m&&++Ee===c&&(W=A),(ze=Te.nextSibling)!==null)break;Te=ye,ye=Te.parentNode}Te=ze}a=F===-1||W===-1?null:{start:F,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jc={focusedElem:n,selectionRange:a},Uo=!1,We=i;We!==null;)if(i=We,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,We=n;else for(;We!==null;){i=We;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var qe=Xe.memoizedProps,nn=Xe.memoizedState,ne=i.stateNode,$=ne.getSnapshotBeforeUpdate(i.elementType===i.type?qe:Mi(i.type,qe),nn);ne.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var se=i.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){en(i,i.return,Re)}if(n=i.sibling,n!==null){n.return=i.return,We=n;break}We=i.return}return Xe=hm,hm=!1,Xe}function no(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&zu(i,a,m)}d=d.next}while(d!==c)}}function gl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Vu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function pm(n){var i=n.alternate;i!==null&&(n.alternate=null,pm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ui],delete i[ja],delete i[iu],delete i[Jx],delete i[ev])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function mm(n){return n.tag===5||n.tag===3||n.tag===4}function gm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||mm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Hu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=$o));else if(c!==4&&(n=n.child,n!==null))for(Hu(n,i,a),n=n.sibling;n!==null;)Hu(n,i,a),n=n.sibling}function Gu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Gu(n,i,a),n=n.sibling;n!==null;)Gu(n,i,a),n=n.sibling}var _n=null,Ei=!1;function Fr(n,i,a){for(a=a.child;a!==null;)xm(n,i,a),a=a.sibling}function xm(n,i,a){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(ie,a)}catch{}switch(a.tag){case 5:Tn||ta(a,i);case 6:var c=_n,d=Ei;_n=null,Fr(n,i,a),_n=c,Ei=d,_n!==null&&(Ei?(n=_n,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):_n.removeChild(a.stateNode));break;case 18:_n!==null&&(Ei?(n=_n,a=a.stateNode,n.nodeType===8?nu(n.parentNode,a):n.nodeType===1&&nu(n,a),Ia(n)):nu(_n,a.stateNode));break;case 4:c=_n,d=Ei,_n=a.stateNode.containerInfo,Ei=!0,Fr(n,i,a),_n=c,Ei=d;break;case 0:case 11:case 14:case 15:if(!Tn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,A=m.destroy;m=m.tag,A!==void 0&&((m&2)!==0||(m&4)!==0)&&zu(a,i,A),d=d.next}while(d!==c)}Fr(n,i,a);break;case 1:if(!Tn&&(ta(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(F){en(a,i,F)}Fr(n,i,a);break;case 21:Fr(n,i,a);break;case 22:a.mode&1?(Tn=(c=Tn)||a.memoizedState!==null,Fr(n,i,a),Tn=c):Fr(n,i,a);break;default:Fr(n,i,a)}}function vm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new gv),i.forEach(function(c){var d=wv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function bi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,A=i,F=A;e:for(;F!==null;){switch(F.tag){case 5:_n=F.stateNode,Ei=!1;break e;case 3:_n=F.stateNode.containerInfo,Ei=!0;break e;case 4:_n=F.stateNode.containerInfo,Ei=!0;break e}F=F.return}if(_n===null)throw Error(t(160));xm(m,A,d),_n=null,Ei=!1;var W=d.alternate;W!==null&&(W.return=null),d.return=null}catch(ce){en(d,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)_m(i,n),i=i.sibling}function _m(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(bi(i,n),Oi(n),c&4){try{no(3,n,n.return),gl(3,n)}catch(qe){en(n,n.return,qe)}try{no(5,n,n.return)}catch(qe){en(n,n.return,qe)}}break;case 1:bi(i,n),Oi(n),c&512&&a!==null&&ta(a,a.return);break;case 5:if(bi(i,n),Oi(n),c&512&&a!==null&&ta(a,a.return),n.flags&32){var d=n.stateNode;try{xe(d,"")}catch(qe){en(n,n.return,qe)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,A=a!==null?a.memoizedProps:m,F=n.type,W=n.updateQueue;if(n.updateQueue=null,W!==null)try{F==="input"&&m.type==="radio"&&m.name!=null&&ft(d,m),ge(F,A);var ce=ge(F,m);for(A=0;A<W.length;A+=2){var Ee=W[A],Te=W[A+1];Ee==="style"?pe(d,Te):Ee==="dangerouslySetInnerHTML"?he(d,Te):Ee==="children"?xe(d,Te):D(d,Ee,Te,ce)}switch(F){case"input":Ht(d,m);break;case"textarea":be(d,m);break;case"select":var ye=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ze=m.value;ze!=null?Nt(d,!!m.multiple,ze,!1):ye!==!!m.multiple&&(m.defaultValue!=null?Nt(d,!!m.multiple,m.defaultValue,!0):Nt(d,!!m.multiple,m.multiple?[]:"",!1))}d[ja]=m}catch(qe){en(n,n.return,qe)}}break;case 6:if(bi(i,n),Oi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(qe){en(n,n.return,qe)}}break;case 3:if(bi(i,n),Oi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ia(i.containerInfo)}catch(qe){en(n,n.return,qe)}break;case 4:bi(i,n),Oi(n);break;case 13:bi(i,n),Oi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Xu=Gt())),c&4&&vm(n);break;case 22:if(Ee=a!==null&&a.memoizedState!==null,n.mode&1?(Tn=(ce=Tn)||Ee,bi(i,n),Tn=ce):bi(i,n),Oi(n),c&8192){if(ce=n.memoizedState!==null,(n.stateNode.isHidden=ce)&&!Ee&&(n.mode&1)!==0)for(We=n,Ee=n.child;Ee!==null;){for(Te=We=Ee;We!==null;){switch(ye=We,ze=ye.child,ye.tag){case 0:case 11:case 14:case 15:no(4,ye,ye.return);break;case 1:ta(ye,ye.return);var Xe=ye.stateNode;if(typeof Xe.componentWillUnmount=="function"){c=ye,a=ye.return;try{i=c,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(qe){en(c,a,qe)}}break;case 5:ta(ye,ye.return);break;case 22:if(ye.memoizedState!==null){Mm(Te);continue}}ze!==null?(ze.return=ye,We=ze):Mm(Te)}Ee=Ee.sibling}e:for(Ee=null,Te=n;;){if(Te.tag===5){if(Ee===null){Ee=Te;try{d=Te.stateNode,ce?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(F=Te.stateNode,W=Te.memoizedProps.style,A=W!=null&&W.hasOwnProperty("display")?W.display:null,F.style.display=de("display",A))}catch(qe){en(n,n.return,qe)}}}else if(Te.tag===6){if(Ee===null)try{Te.stateNode.nodeValue=ce?"":Te.memoizedProps}catch(qe){en(n,n.return,qe)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;Ee===Te&&(Ee=null),Te=Te.return}Ee===Te&&(Ee=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:bi(i,n),Oi(n),c&4&&vm(n);break;case 21:break;default:bi(i,n),Oi(n)}}function Oi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(mm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(xe(d,""),c.flags&=-33);var m=gm(n);Gu(n,m,d);break;case 3:case 4:var A=c.stateNode.containerInfo,F=gm(n);Hu(n,F,A);break;default:throw Error(t(161))}}catch(W){en(n,n.return,W)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function vv(n,i,a){We=n,ym(n)}function ym(n,i,a){for(var c=(n.mode&1)!==0;We!==null;){var d=We,m=d.child;if(d.tag===22&&c){var A=d.memoizedState!==null||ml;if(!A){var F=d.alternate,W=F!==null&&F.memoizedState!==null||Tn;F=ml;var ce=Tn;if(ml=A,(Tn=W)&&!ce)for(We=d;We!==null;)A=We,W=A.child,A.tag===22&&A.memoizedState!==null?Em(d):W!==null?(W.return=A,We=W):Em(d);for(;m!==null;)We=m,ym(m),m=m.sibling;We=d,ml=F,Tn=ce}Sm(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,We=m):Sm(n)}}function Sm(n){for(;We!==null;){var i=We;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Tn||gl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Tn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Mi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Mp(i,m,c);break;case 3:var A=i.updateQueue;if(A!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Mp(i,A,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var W=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&a.focus();break;case"img":W.src&&(a.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var Ee=ce.memoizedState;if(Ee!==null){var Te=Ee.dehydrated;Te!==null&&Ia(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Tn||i.flags&512&&Vu(i)}catch(ye){en(i,i.return,ye)}}if(i===n){We=null;break}if(a=i.sibling,a!==null){a.return=i.return,We=a;break}We=i.return}}function Mm(n){for(;We!==null;){var i=We;if(i===n){We=null;break}var a=i.sibling;if(a!==null){a.return=i.return,We=a;break}We=i.return}}function Em(n){for(;We!==null;){var i=We;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{gl(4,i)}catch(W){en(i,a,W)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(W){en(i,d,W)}}var m=i.return;try{Vu(i)}catch(W){en(i,m,W)}break;case 5:var A=i.return;try{Vu(i)}catch(W){en(i,A,W)}}}catch(W){en(i,i.return,W)}if(i===n){We=null;break}var F=i.sibling;if(F!==null){F.return=i.return,We=F;break}We=i.return}}var _v=Math.ceil,xl=L.ReactCurrentDispatcher,Wu=L.ReactCurrentOwner,ui=L.ReactCurrentBatchConfig,Tt=0,mn=null,sn=null,yn=0,Qn=0,na=Nr(0),ln=0,io=null,hs=0,vl=0,ju=0,ro=null,Hn=null,Xu=0,ia=1/0,or=null,_l=!1,$u=null,kr=null,yl=!1,Or=null,Sl=0,so=0,qu=null,Ml=-1,El=0;function Nn(){return(Tt&6)!==0?Gt():Ml!==-1?Ml:Ml=Gt()}function Br(n){return(n.mode&1)===0?1:(Tt&2)!==0&&yn!==0?yn&-yn:nv.transition!==null?(El===0&&(El=Be()),El):(n=gt,n!==0||(n=window.event,n=n===void 0?16:Th(n.type)),n)}function Ti(n,i,a,c){if(50<so)throw so=0,qu=null,Error(t(185));mt(n,a,c),((Tt&2)===0||n!==mn)&&(n===mn&&((Tt&2)===0&&(vl|=a),ln===4&&zr(n,yn)),Gn(n,c),a===1&&Tt===0&&(i.mode&1)===0&&(ia=Gt()+500,Zo&&Dr()))}function Gn(n,i){var a=n.callbackNode;Ft(n,i);var c=zt(n,n===mn?yn:0);if(c===0)a!==null&&Is(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Is(a),i===1)n.tag===0?tv(Tm.bind(null,n)):up(Tm.bind(null,n)),Zx(function(){(Tt&6)===0&&Dr()}),a=null;else{switch(Ji(c)){case 1:a=Er;break;case 4:a=w;break;case 16:a=B;break;case 536870912:a=te;break;default:a=B}a=Dm(a,bm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function bm(n,i){if(Ml=-1,El=0,(Tt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ra()&&n.callbackNode!==a)return null;var c=zt(n,n===mn?yn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=bl(n,c);else{i=c;var d=Tt;Tt|=2;var m=Am();(mn!==n||yn!==i)&&(or=null,ia=Gt()+500,ms(n,i));do try{Mv();break}catch(F){wm(n,F)}while(!0);fu(),xl.current=m,Tt=d,sn!==null?i=0:(mn=null,yn=0,i=ln)}if(i!==0){if(i===2&&(d=rn(n),d!==0&&(c=d,i=Yu(n,d))),i===1)throw a=io,ms(n,0),zr(n,c),Gn(n,Gt()),a;if(i===6)zr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!yv(d)&&(i=bl(n,c),i===2&&(m=rn(n),m!==0&&(c=m,i=Yu(n,m))),i===1))throw a=io,ms(n,0),zr(n,c),Gn(n,Gt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:gs(n,Hn,or);break;case 3:if(zr(n,c),(c&130023424)===c&&(i=Xu+500-Gt(),10<i)){if(zt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Nn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=tu(gs.bind(null,n,Hn,or),i);break}gs(n,Hn,or);break;case 4:if(zr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var A=31-Pe(c);m=1<<A,A=i[A],A>d&&(d=A),c&=~m}if(c=d,c=Gt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*_v(c/1960))-c,10<c){n.timeoutHandle=tu(gs.bind(null,n,Hn,or),c);break}gs(n,Hn,or);break;case 5:gs(n,Hn,or);break;default:throw Error(t(329))}}}return Gn(n,Gt()),n.callbackNode===a?bm.bind(null,n):null}function Yu(n,i){var a=ro;return n.current.memoizedState.isDehydrated&&(ms(n,i).flags|=256),n=bl(n,i),n!==2&&(i=Hn,Hn=a,i!==null&&Ku(i)),n}function Ku(n){Hn===null?Hn=n:Hn.push.apply(Hn,n)}function yv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!yi(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function zr(n,i){for(i&=~ju,i&=~vl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Pe(i),c=1<<a;n[a]=-1,i&=~c}}function Tm(n){if((Tt&6)!==0)throw Error(t(327));ra();var i=zt(n,0);if((i&1)===0)return Gn(n,Gt()),null;var a=bl(n,i);if(n.tag!==0&&a===2){var c=rn(n);c!==0&&(i=c,a=Yu(n,c))}if(a===1)throw a=io,ms(n,0),zr(n,i),Gn(n,Gt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,gs(n,Hn,or),Gn(n,Gt()),null}function Zu(n,i){var a=Tt;Tt|=1;try{return n(i)}finally{Tt=a,Tt===0&&(ia=Gt()+500,Zo&&Dr())}}function ps(n){Or!==null&&Or.tag===0&&(Tt&6)===0&&ra();var i=Tt;Tt|=1;var a=ui.transition,c=gt;try{if(ui.transition=null,gt=1,n)return n()}finally{gt=c,ui.transition=a,Tt=i,(Tt&6)===0&&Dr()}}function Qu(){Qn=na.current,Xt(na)}function ms(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Kx(a)),sn!==null)for(a=sn.return;a!==null;){var c=a;switch(ou(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Yo();break;case 3:Js(),Xt(Bn),Xt(Mn),yu();break;case 5:vu(c);break;case 4:Js();break;case 13:Xt(Kt);break;case 19:Xt(Kt);break;case 10:hu(c.type._context);break;case 22:case 23:Qu()}a=a.return}if(mn=n,sn=n=Vr(n.current,null),yn=Qn=i,ln=0,io=null,ju=vl=hs=0,Hn=ro=null,us!==null){for(i=0;i<us.length;i++)if(a=us[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var A=m.next;m.next=d,c.next=A}a.pending=c}us=null}return n}function wm(n,i){do{var a=sn;try{if(fu(),ol.current=dl,ll){for(var c=Zt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}ll=!1}if(fs=0,pn=on=Zt=null,Za=!1,Qa=0,Wu.current=null,a===null||a.return===null){ln=1,io=i,sn=null;break}e:{var m=n,A=a.return,F=a,W=i;if(i=yn,F.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ce=W,Ee=F,Te=Ee.tag;if((Ee.mode&1)===0&&(Te===0||Te===11||Te===15)){var ye=Ee.alternate;ye?(Ee.updateQueue=ye.updateQueue,Ee.memoizedState=ye.memoizedState,Ee.lanes=ye.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var ze=Zp(A);if(ze!==null){ze.flags&=-257,Qp(ze,A,F,m,i),ze.mode&1&&Kp(m,ce,i),i=ze,W=ce;var Xe=i.updateQueue;if(Xe===null){var qe=new Set;qe.add(W),i.updateQueue=qe}else Xe.add(W);break e}else{if((i&1)===0){Kp(m,ce,i),Ju();break e}W=Error(t(426))}}else if(qt&&F.mode&1){var nn=Zp(A);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),Qp(nn,A,F,m,i),uu(ea(W,F));break e}}m=W=ea(W,F),ln!==4&&(ln=2),ro===null?ro=[m]:ro.push(m),m=A;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ne=qp(m,W,i);Sp(m,ne);break e;case 1:F=W;var $=m.type,se=m.stateNode;if((m.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(kr===null||!kr.has(se)))){m.flags|=65536,i&=-i,m.lanes|=i;var Re=Yp(m,F,i);Sp(m,Re);break e}}m=m.return}while(m!==null)}Rm(a)}catch(Ke){i=Ke,sn===a&&a!==null&&(sn=a=a.return);continue}break}while(!0)}function Am(){var n=xl.current;return xl.current=dl,n===null?dl:n}function Ju(){(ln===0||ln===3||ln===2)&&(ln=4),mn===null||(hs&268435455)===0&&(vl&268435455)===0||zr(mn,yn)}function bl(n,i){var a=Tt;Tt|=2;var c=Am();(mn!==n||yn!==i)&&(or=null,ms(n,i));do try{Sv();break}catch(d){wm(n,d)}while(!0);if(fu(),Tt=a,xl.current=c,sn!==null)throw Error(t(261));return mn=null,yn=0,ln}function Sv(){for(;sn!==null;)Cm(sn)}function Mv(){for(;sn!==null&&!Ra();)Cm(sn)}function Cm(n){var i=Lm(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,i===null?Rm(n):sn=i,Wu.current=null}function Rm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=pv(a,i,Qn),a!==null){sn=a;return}}else{if(a=mv(a,i),a!==null){a.flags&=32767,sn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ln=6,sn=null;return}}if(i=i.sibling,i!==null){sn=i;return}sn=i=n}while(i!==null);ln===0&&(ln=5)}function gs(n,i,a){var c=gt,d=ui.transition;try{ui.transition=null,gt=1,Ev(n,i,a,c)}finally{ui.transition=d,gt=c}return null}function Ev(n,i,a,c){do ra();while(Or!==null);if((Tt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(kn(n,m),n===mn&&(sn=mn=null,yn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||yl||(yl=!0,Dm(B,function(){return ra(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ui.transition,ui.transition=null;var A=gt;gt=1;var F=Tt;Tt|=4,Wu.current=null,xv(n,a),_m(a,n),Gx(Jc),Uo=!!Qc,Jc=Qc=null,n.current=a,vv(a),Us(),Tt=F,gt=A,ui.transition=m}else n.current=a;if(yl&&(yl=!1,Or=n,Sl=d),m=n.pendingLanes,m===0&&(kr=null),He(a.stateNode),Gn(n,Gt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(_l)throw _l=!1,n=$u,$u=null,n;return(Sl&1)!==0&&n.tag!==0&&ra(),m=n.pendingLanes,(m&1)!==0?n===qu?so++:(so=0,qu=n):so=0,Dr(),null}function ra(){if(Or!==null){var n=Ji(Sl),i=ui.transition,a=gt;try{if(ui.transition=null,gt=16>n?16:n,Or===null)var c=!1;else{if(n=Or,Or=null,Sl=0,(Tt&6)!==0)throw Error(t(331));var d=Tt;for(Tt|=4,We=n.current;We!==null;){var m=We,A=m.child;if((We.flags&16)!==0){var F=m.deletions;if(F!==null){for(var W=0;W<F.length;W++){var ce=F[W];for(We=ce;We!==null;){var Ee=We;switch(Ee.tag){case 0:case 11:case 15:no(8,Ee,m)}var Te=Ee.child;if(Te!==null)Te.return=Ee,We=Te;else for(;We!==null;){Ee=We;var ye=Ee.sibling,ze=Ee.return;if(pm(Ee),Ee===ce){We=null;break}if(ye!==null){ye.return=ze,We=ye;break}We=ze}}}var Xe=m.alternate;if(Xe!==null){var qe=Xe.child;if(qe!==null){Xe.child=null;do{var nn=qe.sibling;qe.sibling=null,qe=nn}while(qe!==null)}}We=m}}if((m.subtreeFlags&2064)!==0&&A!==null)A.return=m,We=A;else e:for(;We!==null;){if(m=We,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:no(9,m,m.return)}var ne=m.sibling;if(ne!==null){ne.return=m.return,We=ne;break e}We=m.return}}var $=n.current;for(We=$;We!==null;){A=We;var se=A.child;if((A.subtreeFlags&2064)!==0&&se!==null)se.return=A,We=se;else e:for(A=$;We!==null;){if(F=We,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:gl(9,F)}}catch(Ke){en(F,F.return,Ke)}if(F===A){We=null;break e}var Re=F.sibling;if(Re!==null){Re.return=F.return,We=Re;break e}We=F.return}}if(Tt=d,Dr(),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(ie,n)}catch{}c=!0}return c}finally{gt=a,ui.transition=i}}return!1}function Pm(n,i,a){i=ea(a,i),i=qp(n,i,1),n=Ur(n,i,1),i=Nn(),n!==null&&(mt(n,1,i),Gn(n,i))}function en(n,i,a){if(n.tag===3)Pm(n,n,a);else for(;i!==null;){if(i.tag===3){Pm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(kr===null||!kr.has(c))){n=ea(a,n),n=Yp(i,n,1),i=Ur(i,n,1),n=Nn(),i!==null&&(mt(i,1,n),Gn(i,n));break}}i=i.return}}function bv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Nn(),n.pingedLanes|=n.suspendedLanes&a,mn===n&&(yn&a)===a&&(ln===4||ln===3&&(yn&130023424)===yn&&500>Gt()-Xu?ms(n,0):ju|=a),Gn(n,i)}function Nm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ye,Ye<<=1,(Ye&130023424)===0&&(Ye=4194304)));var a=Nn();n=rr(n,i),n!==null&&(mt(n,i,a),Gn(n,a))}function Tv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Nm(n,a)}function wv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Nm(n,a)}var Lm;Lm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Bn.current)Vn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Vn=!1,hv(n,i,a);Vn=(n.flags&131072)!==0}else Vn=!1,qt&&(i.flags&1048576)!==0&&dp(i,Jo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;pl(n,i),n=i.pendingProps;var d=Xs(i,Mn.current);Qs(i,a),d=Eu(null,i,c,n,d,a);var m=bu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,zn(c)?(m=!0,Ko(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,gu(i),d.updater=fl,i.stateNode=d,d._reactInternals=i,Pu(i,c,n,a),i=Iu(null,i,c,!0,m,a)):(i.tag=0,qt&&m&&au(i),Pn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(pl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Cv(c),n=Mi(c,n),d){case 0:i=Du(null,i,c,n,a);break e;case 1:i=rm(null,i,c,n,a);break e;case 11:i=Jp(null,i,c,n,a);break e;case 14:i=em(null,i,c,Mi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mi(c,d),Du(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mi(c,d),rm(n,i,c,d,a);case 3:e:{if(sm(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,yp(n,i),sl(i,c,null,a);var A=i.memoizedState;if(c=A.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=ea(Error(t(423)),i),i=am(n,i,c,a,d);break e}else if(c!==d){d=ea(Error(t(424)),i),i=am(n,i,c,a,d);break e}else for(Zn=Pr(i.stateNode.containerInfo.firstChild),Kn=i,qt=!0,Si=null,a=vp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ys(),c===d){i=ar(n,i,a);break e}Pn(n,i,c,a)}i=i.child}return i;case 5:return Ep(i),n===null&&cu(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,A=d.children,eu(c,d)?A=null:m!==null&&eu(c,m)&&(i.flags|=32),im(n,i),Pn(n,i,A,a),i.child;case 6:return n===null&&cu(i),null;case 13:return om(n,i,a);case 4:return xu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ks(i,null,c,a):Pn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mi(c,d),Jp(n,i,c,d,a);case 7:return Pn(n,i,i.pendingProps,a),i.child;case 8:return Pn(n,i,i.pendingProps.children,a),i.child;case 12:return Pn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,A=d.value,Vt(nl,c._currentValue),c._currentValue=A,m!==null)if(yi(m.value,A)){if(m.children===d.children&&!Bn.current){i=ar(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var F=m.dependencies;if(F!==null){A=m.child;for(var W=F.firstContext;W!==null;){if(W.context===c){if(m.tag===1){W=sr(-1,a&-a),W.tag=2;var ce=m.updateQueue;if(ce!==null){ce=ce.shared;var Ee=ce.pending;Ee===null?W.next=W:(W.next=Ee.next,Ee.next=W),ce.pending=W}}m.lanes|=a,W=m.alternate,W!==null&&(W.lanes|=a),pu(m.return,a,i),F.lanes|=a;break}W=W.next}}else if(m.tag===10)A=m.type===i.type?null:m.child;else if(m.tag===18){if(A=m.return,A===null)throw Error(t(341));A.lanes|=a,F=A.alternate,F!==null&&(F.lanes|=a),pu(A,a,i),A=m.sibling}else A=m.child;if(A!==null)A.return=m;else for(A=m;A!==null;){if(A===i){A=null;break}if(m=A.sibling,m!==null){m.return=A.return,A=m;break}A=A.return}m=A}Pn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Qs(i,a),d=li(d),c=c(d),i.flags|=1,Pn(n,i,c,a),i.child;case 14:return c=i.type,d=Mi(c,i.pendingProps),d=Mi(c.type,d),em(n,i,c,d,a);case 15:return tm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mi(c,d),pl(n,i),i.tag=1,zn(c)?(n=!0,Ko(i)):n=!1,Qs(i,a),Xp(i,c,d),Pu(i,c,d,a),Iu(null,i,c,!0,n,a);case 19:return cm(n,i,a);case 22:return nm(n,i,a)}throw Error(t(156,i.tag))};function Dm(n,i){return Ds(n,i)}function Av(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,i,a,c){return new Av(n,i,a,c)}function ed(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Cv(n){if(typeof n=="function")return ed(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Y)return 11;if(n===G)return 14}return 2}function Vr(n,i){var a=n.alternate;return a===null?(a=di(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Tl(n,i,a,c,d,m){var A=2;if(c=n,typeof n=="function")ed(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case I:return xs(a.children,d,m,i);case b:A=8,d|=8;break;case U:return n=di(12,a,i,d|2),n.elementType=U,n.lanes=m,n;case oe:return n=di(13,a,i,d),n.elementType=oe,n.lanes=m,n;case le:return n=di(19,a,i,d),n.elementType=le,n.lanes=m,n;case q:return wl(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case X:A=10;break e;case z:A=9;break e;case Y:A=11;break e;case G:A=14;break e;case Q:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=di(A,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function xs(n,i,a,c){return n=di(7,n,c,i),n.lanes=a,n}function wl(n,i,a,c){return n=di(22,n,c,i),n.elementType=q,n.lanes=a,n.stateNode={isHidden:!1},n}function td(n,i,a){return n=di(6,n,null,i),n.lanes=a,n}function nd(n,i,a){return i=di(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Rv(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vn(0),this.expirationTimes=vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function id(n,i,a,c,d,m,A,F,W){return n=new Rv(n,i,a,F,W),i===1?(i=1,m===!0&&(i|=8)):i=0,m=di(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},gu(m),n}function Pv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Im(n){if(!n)return Lr;n=n._reactInternals;e:{if(Fn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(zn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(zn(a))return lp(n,a,i)}return i}function Um(n,i,a,c,d,m,A,F,W){return n=id(a,c,!0,n,d,m,A,F,W),n.context=Im(null),a=n.current,c=Nn(),d=Br(a),m=sr(c,d),m.callback=i??null,Ur(a,m,d),n.current.lanes=d,mt(n,d,c),Gn(n,c),n}function Al(n,i,a,c){var d=i.current,m=Nn(),A=Br(d);return a=Im(a),i.context===null?i.context=a:i.pendingContext=a,i=sr(m,A),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Ur(d,i,A),n!==null&&(Ti(n,d,A,m),rl(n,d,A)),A}function Cl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Fm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function rd(n,i){Fm(n,i),(n=n.alternate)&&Fm(n,i)}function Nv(){return null}var km=typeof reportError=="function"?reportError:function(n){console.error(n)};function sd(n){this._internalRoot=n}Rl.prototype.render=sd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Al(n,i,null,null)},Rl.prototype.unmount=sd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ps(function(){Al(null,n,null,null)}),i[er]=null}};function Rl(n){this._internalRoot=n}Rl.prototype.unstable_scheduleHydration=function(n){if(n){var i=kt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Ar.length&&i!==0&&i<Ar[a].priority;a++);Ar.splice(a,0,n),a===0&&Eh(n)}};function ad(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Om(){}function Lv(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ce=Cl(A);m.call(ce)}}var A=Um(i,c,n,0,null,!1,!1,"",Om);return n._reactRootContainer=A,n[er]=A.current,Ga(n.nodeType===8?n.parentNode:n),ps(),A}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var F=c;c=function(){var ce=Cl(W);F.call(ce)}}var W=id(n,0,!1,null,null,!1,!1,"",Om);return n._reactRootContainer=W,n[er]=W.current,Ga(n.nodeType===8?n.parentNode:n),ps(function(){Al(i,W,a,c)}),W}function Nl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var A=m;if(typeof d=="function"){var F=d;d=function(){var W=Cl(A);F.call(W)}}Al(i,A,n,d)}else A=Lv(a,i,n,d,c);return Cl(A)}Lt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Et(i.pendingLanes);a!==0&&(On(i,a|1),Gn(i,Gt()),(Tt&6)===0&&(ia=Gt()+500,Dr()))}break;case 13:ps(function(){var c=rr(n,1);if(c!==null){var d=Nn();Ti(c,n,1,d)}}),rd(n,1)}},Wt=function(n){if(n.tag===13){var i=rr(n,134217728);if(i!==null){var a=Nn();Ti(i,n,134217728,a)}rd(n,134217728)}},vi=function(n){if(n.tag===13){var i=Br(n),a=rr(n,i);if(a!==null){var c=Nn();Ti(a,n,i,c)}rd(n,i)}},kt=function(){return gt},_i=function(n,i){var a=gt;try{return gt=n,i()}finally{gt=a}},et=function(n,i,a){switch(i){case"input":if(Ht(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=qo(c);if(!d)throw Error(t(90));Dt(c),Ht(c,d)}}}break;case"textarea":be(n,a);break;case"select":i=a.value,i!=null&&Nt(n,!!a.multiple,i,!1)}},Ce=Zu,ve=ps;var Dv={usingClientEntryPoint:!1,Events:[Xa,Ws,qo,fe,Oe,Zu]},ao={findFiberByHostInstance:as,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Iv={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=is(n),n===null?null:n.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||Nv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{ie=Ll.inject(Iv),Le=Ll}catch{}}return Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dv,Wn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ad(i))throw Error(t(200));return Pv(n,i,null,a)},Wn.createRoot=function(n,i){if(!ad(n))throw Error(t(299));var a=!1,c="",d=km;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=id(n,1,!1,null,null,a,!1,c,d),n[er]=i.current,Ga(n.nodeType===8?n.parentNode:n),new sd(i)},Wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=is(i),n=n===null?null:n.stateNode,n},Wn.flushSync=function(n){return ps(n)},Wn.hydrate=function(n,i,a){if(!Pl(i))throw Error(t(200));return Nl(null,n,i,!0,a)},Wn.hydrateRoot=function(n,i,a){if(!ad(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",A=km;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(A=a.onRecoverableError)),i=Um(i,null,n,1,a??null,d,!1,m,A),n[er]=i.current,Ga(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Rl(i)},Wn.render=function(n,i,a){if(!Pl(i))throw Error(t(200));return Nl(null,n,i,!1,a)},Wn.unmountComponentAtNode=function(n){if(!Pl(n))throw Error(t(40));return n._reactRootContainer?(ps(function(){Nl(null,null,n,!1,function(){n._reactRootContainer=null,n[er]=null})}),!0):!1},Wn.unstable_batchedUpdates=Zu,Wn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Pl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Nl(n,i,a,!1,c)},Wn.version="18.3.1-next-f1338f8080-20240426",Wn}var Xm;function Gv(){if(Xm)return cd.exports;Xm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),cd.exports=Hv(),cd.exports}var $m;function Wv(){if($m)return Dl;$m=1;var r=Gv();return Dl.createRoot=r.createRoot,Dl.hydrateRoot=r.hydrateRoot,Dl}var jv=Wv();const Xv=n0(jv);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yf="184",$v=0,qm=1,qv=2,lc=1,Yv=2,vo=3,Jr=0,$n=1,hr=2,xr=0,_a=1,Ym=2,Km=3,Zm=4,Kv=5,Es=100,Zv=101,Qv=102,Jv=103,e_=104,t_=200,n_=201,i_=202,r_=203,Zd=204,Qd=205,s_=206,a_=207,o_=208,l_=209,c_=210,u_=211,d_=212,f_=213,h_=214,Jd=0,ef=1,tf=2,Sa=3,nf=4,rf=5,sf=6,af=7,i0=0,p_=1,m_=2,ji=0,r0=1,s0=2,a0=3,o0=4,l0=5,c0=6,u0=7,d0=300,Cs=301,Ma=302,fd=303,hd=304,Tc=306,of=1e3,mr=1001,lf=1002,Sn=1003,g_=1004,Il=1005,Cn=1006,pd=1007,ws=1008,ii=1009,f0=1010,h0=1011,Eo=1012,Kf=1013,$i=1014,Gi=1015,_r=1016,Zf=1017,Qf=1018,bo=1020,p0=35902,m0=35899,g0=1021,x0=1022,Ni=1023,yr=1026,As=1027,v0=1028,Jf=1029,Rs=1030,eh=1031,th=1033,cc=33776,uc=33777,dc=33778,fc=33779,cf=35840,uf=35841,df=35842,ff=35843,hf=36196,pf=37492,mf=37496,gf=37488,xf=37489,pc=37490,vf=37491,_f=37808,yf=37809,Sf=37810,Mf=37811,Ef=37812,bf=37813,Tf=37814,wf=37815,Af=37816,Cf=37817,Rf=37818,Pf=37819,Nf=37820,Lf=37821,Df=36492,If=36494,Uf=36495,Ff=36283,kf=36284,mc=36285,Of=36286,x_=3200,Bf=0,v_=1,Yr="",mi="srgb",gc="srgb-linear",xc="linear",Ot="srgb",sa=7680,Qm=519,__=512,y_=513,S_=514,nh=515,M_=516,E_=517,ih=518,b_=519,Jm=35044,eg="300 es",Wi=2e3,To=2001;function T_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function vc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function w_(){const r=vc("canvas");return r.style.display="block",r}const tg={};function ng(...r){const e="THREE."+r.shift();console.log(e,...r)}function _0(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function rt(...r){r=_0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function wt(...r){r=_0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function zf(...r){const e=r.join(" ");e in tg||(tg[e]=!0,rt(...r))}function A_(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const C_={[Jd]:ef,[tf]:sf,[nf]:af,[Sa]:rf,[ef]:Jd,[sf]:tf,[af]:nf,[rf]:Sa};class Ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],md=Math.PI/180,Vf=180/Math.PI;function Ro(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function R_(r,e){return(r%e+e)%e}function gd(r,e,t){return(1-t)*r+t*e}function lo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const xh=class xh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xh.prototype.isVector2=!0;let Ct=xh;class wa{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,f){let h=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3],g=l[u+0],S=l[u+1],T=l[u+2],P=l[u+3];if(y!==P||h!==g||p!==S||v!==T){let _=h*g+p*S+v*T+y*P;_<0&&(g=-g,S=-S,T=-T,P=-P,_=-_);let x=1-f;if(_<.9995){const C=Math.acos(_),D=Math.sin(C);x=Math.sin(x*C)/D,f=Math.sin(f*C)/D,h=h*x+g*f,p=p*x+S*f,v=v*x+T*f,y=y*x+P*f}else{h=h*x+g*f,p=p*x+S*f,v=v*x+T*f,y=y*x+P*f;const C=1/Math.sqrt(h*h+p*p+v*v+y*y);h*=C,p*=C,v*=C,y*=C}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=y}static multiplyQuaternionsFlat(e,t,s,o,l,u){const f=s[o],h=s[o+1],p=s[o+2],v=s[o+3],y=l[u],g=l[u+1],S=l[u+2],T=l[u+3];return e[t]=f*T+v*y+h*S-p*g,e[t+1]=h*T+v*g+p*y-f*S,e[t+2]=p*T+v*S+f*g-h*y,e[t+3]=v*T-f*y-h*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(s/2),v=f(o/2),y=f(l/2),g=h(s/2),S=h(o/2),T=h(l/2);switch(u){case"XYZ":this._x=g*v*y+p*S*T,this._y=p*S*y-g*v*T,this._z=p*v*T+g*S*y,this._w=p*v*y-g*S*T;break;case"YXZ":this._x=g*v*y+p*S*T,this._y=p*S*y-g*v*T,this._z=p*v*T-g*S*y,this._w=p*v*y+g*S*T;break;case"ZXY":this._x=g*v*y-p*S*T,this._y=p*S*y+g*v*T,this._z=p*v*T+g*S*y,this._w=p*v*y-g*S*T;break;case"ZYX":this._x=g*v*y-p*S*T,this._y=p*S*y+g*v*T,this._z=p*v*T-g*S*y,this._w=p*v*y+g*S*T;break;case"YZX":this._x=g*v*y+p*S*T,this._y=p*S*y+g*v*T,this._z=p*v*T-g*S*y,this._w=p*v*y-g*S*T;break;case"XZY":this._x=g*v*y-p*S*T,this._y=p*S*y-g*v*T,this._z=p*v*T+g*S*y,this._w=p*v*y+g*S*T;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],v=t[6],y=t[10],g=s+f+y;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(v-h)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(s>f&&s>y){const S=2*Math.sqrt(1+s-f-y);this._w=(v-h)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(f>y){const S=2*Math.sqrt(1+f-s-y);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(h+v)/S}else{const S=2*Math.sqrt(1+y-s-f);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(h+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=s*v+u*f+o*p-l*h,this._y=o*v+u*h+l*f-s*p,this._z=l*v+u*p+s*h-o*f,this._w=u*v-s*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(s=-s,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vh=class vh{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ig.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ig.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*s),v=2*(f*t-l*o),y=2*(l*s-u*t);return this.x=t+h*p+u*y-f*v,this.y=s+h*v+f*p-l*y,this.z=o+h*y+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-s*h,this.z=s*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vh.prototype.isVector3=!0;let J=vh;const xd=new J,ig=new wa,_h=class _h{constructor(e,t,s,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,h,p)}set(e,t,s,o,l,u,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=s,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[3],h=s[6],p=s[1],v=s[4],y=s[7],g=s[2],S=s[5],T=s[8],P=o[0],_=o[3],x=o[6],C=o[1],D=o[4],L=o[7],O=o[2],R=o[5],I=o[8];return l[0]=u*P+f*C+h*O,l[3]=u*_+f*D+h*R,l[6]=u*x+f*L+h*I,l[1]=p*P+v*C+y*O,l[4]=p*_+v*D+y*R,l[7]=p*x+v*L+y*I,l[2]=g*P+S*C+T*O,l[5]=g*_+S*D+T*R,l[8]=g*x+S*L+T*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-s*l*v+s*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],y=v*u-f*p,g=f*h-v*l,S=p*l-u*h,T=t*y+s*g+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=y*P,e[1]=(o*p-v*s)*P,e[2]=(f*s-o*u)*P,e[3]=g*P,e[4]=(v*t-o*h)*P,e[5]=(o*l-f*t)*P,e[6]=S*P,e[7]=(s*h-p*t)*P,e[8]=(u*t-s*l)*P,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(vd.makeScale(e,t)),this}rotate(e){return this.premultiply(vd.makeRotation(-e)),this}translate(e,t){return this.premultiply(vd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_h.prototype.isMatrix3=!0;let dt=_h;const vd=new dt,rg=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sg=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function P_(){const r={enabled:!0,workingColorSpace:gc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ot&&(o.r=vr(o.r),o.g=vr(o.g),o.b=vr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ot&&(o.r=ya(o.r),o.g=ya(o.g),o.b=ya(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Yr?xc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return zf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return zf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[gc]:{primaries:e,whitePoint:s,transfer:xc,toXYZ:rg,fromXYZ:sg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:s,transfer:Ot,toXYZ:rg,fromXYZ:sg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),r}const Mt=P_();function vr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ya(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let aa;class N_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{aa===void 0&&(aa=vc("canvas")),aa.width=e.width,aa.height=e.height;const o=aa.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=aa}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=vr(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(vr(t[s]/255)*255):t[s]=vr(t[s]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let L_=0;class rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(_d(o[u].image)):l.push(_d(o[u]))}else l=_d(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function _d(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?N_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let D_=0;const yd=new J;class In extends Ps{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,s=mr,o=mr,l=Cn,u=ws,f=Ni,h=ii,p=In.DEFAULT_ANISOTROPY,v=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=Ro(),this.name="",this.source=new rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yd).x}get height(){return this.source.getSize(yd).y}get depth(){return this.source.getSize(yd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==d0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case of:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case lf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case of:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case lf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=d0;In.DEFAULT_ANISOTROPY=1;const yh=class yh{constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,p=h[0],v=h[4],y=h[8],g=h[1],S=h[5],T=h[9],P=h[2],_=h[6],x=h[10];if(Math.abs(v-g)<.01&&Math.abs(y-P)<.01&&Math.abs(T-_)<.01){if(Math.abs(v+g)<.1&&Math.abs(y+P)<.1&&Math.abs(T+_)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(p+1)/2,L=(S+1)/2,O=(x+1)/2,R=(v+g)/4,I=(y+P)/4,b=(T+_)/4;return D>L&&D>O?D<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(D),o=R/s,l=I/s):L>O?L<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(L),s=R/o,l=b/o):O<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(O),s=I/l,o=b/l),this.set(s,o,l,t),this}let C=Math.sqrt((_-T)*(_-T)+(y-P)*(y-P)+(g-v)*(g-v));return Math.abs(C)<.001&&(C=1),this.x=(_-T)/C,this.y=(y-P)/C,this.z=(g-v)/C,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yh.prototype.isVector4=!0;let tn=yh;class I_ extends Ps{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},l=new In(o),u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new rh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends I_{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class y0 extends In{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class U_ extends In{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bc=class bc{constructor(e,t,s,o,l,u,f,h,p,v,y,g,S,T,P,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,h,p,v,y,g,S,T,P,_)}set(e,t,s,o,l,u,f,h,p,v,y,g,S,T,P,_){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=o,x[1]=l,x[5]=u,x[9]=f,x[13]=h,x[2]=p,x[6]=v,x[10]=y,x[14]=g,x[3]=S,x[7]=T,x[11]=P,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bc().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,s=e.elements,o=1/oa.setFromMatrixColumn(e,0).length(),l=1/oa.setFromMatrixColumn(e,1).length(),u=1/oa.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const g=u*v,S=u*y,T=f*v,P=f*y;t[0]=h*v,t[4]=-h*y,t[8]=p,t[1]=S+T*p,t[5]=g-P*p,t[9]=-f*h,t[2]=P-g*p,t[6]=T+S*p,t[10]=u*h}else if(e.order==="YXZ"){const g=h*v,S=h*y,T=p*v,P=p*y;t[0]=g+P*f,t[4]=T*f-S,t[8]=u*p,t[1]=u*y,t[5]=u*v,t[9]=-f,t[2]=S*f-T,t[6]=P+g*f,t[10]=u*h}else if(e.order==="ZXY"){const g=h*v,S=h*y,T=p*v,P=p*y;t[0]=g-P*f,t[4]=-u*y,t[8]=T+S*f,t[1]=S+T*f,t[5]=u*v,t[9]=P-g*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const g=u*v,S=u*y,T=f*v,P=f*y;t[0]=h*v,t[4]=T*p-S,t[8]=g*p+P,t[1]=h*y,t[5]=P*p+g,t[9]=S*p-T,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,S=u*p,T=f*h,P=f*p;t[0]=h*v,t[4]=P-g*y,t[8]=T*y+S,t[1]=y,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=S*y+T,t[10]=g-P*y}else if(e.order==="XZY"){const g=u*h,S=u*p,T=f*h,P=f*p;t[0]=h*v,t[4]=-y,t[8]=p*v,t[1]=g*y+P,t[5]=u*v,t[9]=S*y-T,t[2]=T*y-S,t[6]=f*v,t[10]=P*y+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(F_,e,k_)}lookAt(e,t,s){const o=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Gr.crossVectors(s,Jn),Gr.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Gr.crossVectors(s,Jn)),Gr.normalize(),Ul.crossVectors(Jn,Gr),o[0]=Gr.x,o[4]=Ul.x,o[8]=Jn.x,o[1]=Gr.y,o[5]=Ul.y,o[9]=Jn.y,o[2]=Gr.z,o[6]=Ul.z,o[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[4],h=s[8],p=s[12],v=s[1],y=s[5],g=s[9],S=s[13],T=s[2],P=s[6],_=s[10],x=s[14],C=s[3],D=s[7],L=s[11],O=s[15],R=o[0],I=o[4],b=o[8],U=o[12],X=o[1],z=o[5],Y=o[9],oe=o[13],le=o[2],G=o[6],Q=o[10],q=o[14],V=o[3],K=o[7],ae=o[11],k=o[15];return l[0]=u*R+f*X+h*le+p*V,l[4]=u*I+f*z+h*G+p*K,l[8]=u*b+f*Y+h*Q+p*ae,l[12]=u*U+f*oe+h*q+p*k,l[1]=v*R+y*X+g*le+S*V,l[5]=v*I+y*z+g*G+S*K,l[9]=v*b+y*Y+g*Q+S*ae,l[13]=v*U+y*oe+g*q+S*k,l[2]=T*R+P*X+_*le+x*V,l[6]=T*I+P*z+_*G+x*K,l[10]=T*b+P*Y+_*Q+x*ae,l[14]=T*U+P*oe+_*q+x*k,l[3]=C*R+D*X+L*le+O*V,l[7]=C*I+D*z+L*G+O*K,l[11]=C*b+D*Y+L*Q+O*ae,l[15]=C*U+D*oe+L*q+O*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],v=e[2],y=e[6],g=e[10],S=e[14],T=e[3],P=e[7],_=e[11],x=e[15],C=h*S-p*g,D=f*S-p*y,L=f*g-h*y,O=u*S-p*v,R=u*g-h*v,I=u*y-f*v;return t*(P*C-_*D+x*L)-s*(T*C-_*O+x*R)+o*(T*D-P*O+x*I)-l*(T*L-P*R+_*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],y=e[9],g=e[10],S=e[11],T=e[12],P=e[13],_=e[14],x=e[15],C=t*f-s*u,D=t*h-o*u,L=t*p-l*u,O=s*h-o*f,R=s*p-l*f,I=o*p-l*h,b=v*P-y*T,U=v*_-g*T,X=v*x-S*T,z=y*_-g*P,Y=y*x-S*P,oe=g*x-S*_,le=C*oe-D*Y+L*z+O*X-R*U+I*b;if(le===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/le;return e[0]=(f*oe-h*Y+p*z)*G,e[1]=(o*Y-s*oe-l*z)*G,e[2]=(P*I-_*R+x*O)*G,e[3]=(g*R-y*I-S*O)*G,e[4]=(h*X-u*oe-p*U)*G,e[5]=(t*oe-o*X+l*U)*G,e[6]=(_*L-T*I-x*D)*G,e[7]=(v*I-g*L+S*D)*G,e[8]=(u*Y-f*X+p*b)*G,e[9]=(s*X-t*Y-l*b)*G,e[10]=(T*R-P*L+x*C)*G,e[11]=(y*L-v*R-S*C)*G,e[12]=(f*U-u*z-h*b)*G,e[13]=(t*z-s*U+o*b)*G,e[14]=(P*D-T*O-_*C)*G,e[15]=(v*O-y*D+g*C)*G,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,f=e.y,h=e.z,p=l*u,v=l*f;return this.set(p*u+s,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+s,v*h-o*u,0,p*h-o*f,v*h+o*u,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,v=u+u,y=f+f,g=l*p,S=l*v,T=l*y,P=u*v,_=u*y,x=f*y,C=h*p,D=h*v,L=h*y,O=s.x,R=s.y,I=s.z;return o[0]=(1-(P+x))*O,o[1]=(S+L)*O,o[2]=(T-D)*O,o[3]=0,o[4]=(S-L)*R,o[5]=(1-(g+x))*R,o[6]=(_+C)*R,o[7]=0,o[8]=(T+D)*I,o[9]=(_-C)*I,o[10]=(1-(g+P))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return s.set(1,1,1),t.identity(),this;let u=oa.set(o[0],o[1],o[2]).length();const f=oa.set(o[4],o[5],o[6]).length(),h=oa.set(o[8],o[9],o[10]).length();l<0&&(u=-u),wi.copy(this);const p=1/u,v=1/f,y=1/h;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=v,wi.elements[5]*=v,wi.elements[6]*=v,wi.elements[8]*=y,wi.elements[9]*=y,wi.elements[10]*=y,t.setFromRotationMatrix(wi),s.x=u,s.y=f,s.z=h,this}makePerspective(e,t,s,o,l,u,f=Wi,h=!1){const p=this.elements,v=2*l/(t-e),y=2*l/(s-o),g=(t+e)/(t-e),S=(s+o)/(s-o);let T,P;if(h)T=l/(u-l),P=u*l/(u-l);else if(f===Wi)T=-(u+l)/(u-l),P=-2*u*l/(u-l);else if(f===To)T=-u/(u-l),P=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=y,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=P,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,u,f=Wi,h=!1){const p=this.elements,v=2/(t-e),y=2/(s-o),g=-(t+e)/(t-e),S=-(s+o)/(s-o);let T,P;if(h)T=1/(u-l),P=u/(u-l);else if(f===Wi)T=-2/(u-l),P=-(u+l)/(u-l);else if(f===To)T=-1/(u-l),P=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=y,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=P,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};bc.prototype.isMatrix4=!0;let Yt=bc;const oa=new J,wi=new Yt,F_=new J(0,0,0),k_=new J(1,1,1),Gr=new J,Ul=new J,Jn=new J,ag=new Yt,og=new wa;class es{constructor(e=0,t=0,s=0,o=es.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],v=o[9],y=o[2],g=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return ag.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ag,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return og.setFromEuler(this),this.setFromQuaternion(og,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}es.DEFAULT_ORDER="XYZ";class S0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let O_=0;const lg=new J,la=new wa,lr=new Yt,Fl=new J,co=new J,B_=new J,z_=new wa,cg=new J(1,0,0),ug=new J(0,1,0),dg=new J(0,0,1),fg={type:"added"},V_={type:"removed"},ca={type:"childadded",child:null},Sd={type:"childremoved",child:null};class Rn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new J,t=new es,s=new wa,o=new J(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Yt},normalMatrix:{value:new dt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new S0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return la.setFromAxisAngle(e,t),this.quaternion.multiply(la),this}rotateOnWorldAxis(e,t){return la.setFromAxisAngle(e,t),this.quaternion.premultiply(la),this}rotateX(e){return this.rotateOnAxis(cg,e)}rotateY(e){return this.rotateOnAxis(ug,e)}rotateZ(e){return this.rotateOnAxis(dg,e)}translateOnAxis(e,t){return lg.copy(e).applyQuaternion(this.quaternion),this.position.add(lg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cg,e)}translateY(e){return this.translateOnAxis(ug,e)}translateZ(e){return this.translateOnAxis(dg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Fl.copy(e):Fl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(co,Fl,this.up):lr.lookAt(Fl,co,this.up),this.quaternion.setFromRotationMatrix(lr),o&&(lr.extractRotation(o.matrixWorld),la.setFromRotationMatrix(lr),this.quaternion.premultiply(la.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fg),ca.child=e,this.dispatchEvent(ca),ca.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(V_),Sd.child=e,this.dispatchEvent(Sd),Sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fg),ca.child=e,this.dispatchEvent(ca),ca.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,B_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,z_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const y=h[p];l(e.shapes,y)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),y=u(e.shapes),g=u(e.skeletons),S=u(e.animations),T=u(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),y.length>0&&(s.shapes=y),g.length>0&&(s.skeletons=g),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=o,s;function u(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Rn.DEFAULT_UP=new J(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _o extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H_={type:"move"};class Md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const P of e.hand.values()){const _=t.getJointPose(P,s),x=this._getHandJoint(p,P);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const v=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],g=v.position.distanceTo(y.position),S=.02,T=.005;p.inputState.pinching&&g>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(H_)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new _o;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const M0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},kl={h:0,s:0,l:0};function Ed(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class At{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Mt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=Mt.workingColorSpace){if(e=R_(e,1),t=vt(t,0,1),s=vt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=Ed(u,l,e+1/3),this.g=Ed(u,l,e),this.b=Ed(u,l,e-1/3)}return Mt.colorSpaceToWorking(this,o),this}setStyle(e,t=mi){function s(l){l!==void 0&&parseFloat(l)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const s=M0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Mt.workingToColorSpace(An.copy(this),e),Math.round(vt(An.r*255,0,255))*65536+Math.round(vt(An.g*255,0,255))*256+Math.round(vt(An.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(An.copy(this),t);const s=An.r,o=An.g,l=An.b,u=Math.max(s,o,l),f=Math.min(s,o,l);let h,p;const v=(f+u)/2;if(f===u)h=0,p=0;else{const y=u-f;switch(p=v<=.5?y/(u+f):y/(2-u-f),u){case s:h=(o-l)/y+(o<l?6:0);break;case o:h=(l-s)/y+2;break;case l:h=(s-o)/y+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=mi){Mt.workingToColorSpace(An.copy(this),e);const t=An.r,s=An.g,o=An.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(kl);const s=gd(Wr.h,kl.h,t),o=gd(Wr.s,kl.s,t),l=gd(Wr.l,kl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new At;At.NAMES=M0;class G_ extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new es,this.environmentIntensity=1,this.environmentRotation=new es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ai=new J,cr=new J,bd=new J,ur=new J,ua=new J,da=new J,hg=new J,Td=new J,wd=new J,Ad=new J,Cd=new tn,Rd=new tn,Pd=new tn;class Ri{constructor(e=new J,t=new J,s=new J){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),Ai.subVectors(e,t),o.cross(Ai);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){Ai.subVectors(o,t),cr.subVectors(s,t),bd.subVectors(e,t);const u=Ai.dot(Ai),f=Ai.dot(cr),h=Ai.dot(bd),p=cr.dot(cr),v=cr.dot(bd),y=u*p-f*f;if(y===0)return l.set(0,0,0),null;const g=1/y,S=(p*h-f*v)*g,T=(u*v-f*h)*g;return l.set(1-S-T,T,S)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,s,o,l,u,f,h){return this.getBarycoord(e,t,s,o,ur)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,ur.x),h.addScaledVector(u,ur.y),h.addScaledVector(f,ur.z),h)}static getInterpolatedAttribute(e,t,s,o,l,u){return Cd.setScalar(0),Rd.setScalar(0),Pd.setScalar(0),Cd.fromBufferAttribute(e,t),Rd.fromBufferAttribute(e,s),Pd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Cd,l.x),u.addScaledVector(Rd,l.y),u.addScaledVector(Pd,l.z),u}static isFrontFacing(e,t,s,o){return Ai.subVectors(s,t),cr.subVectors(e,t),Ai.cross(cr).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),Ai.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return Ri.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,f;ua.subVectors(o,s),da.subVectors(l,s),Td.subVectors(e,s);const h=ua.dot(Td),p=da.dot(Td);if(h<=0&&p<=0)return t.copy(s);wd.subVectors(e,o);const v=ua.dot(wd),y=da.dot(wd);if(v>=0&&y<=v)return t.copy(o);const g=h*y-v*p;if(g<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(s).addScaledVector(ua,u);Ad.subVectors(e,l);const S=ua.dot(Ad),T=da.dot(Ad);if(T>=0&&S<=T)return t.copy(l);const P=S*p-h*T;if(P<=0&&p>=0&&T<=0)return f=p/(p-T),t.copy(s).addScaledVector(da,f);const _=v*T-S*y;if(_<=0&&y-v>=0&&S-T>=0)return hg.subVectors(l,o),f=(y-v)/(y-v+(S-T)),t.copy(o).addScaledVector(hg,f);const x=1/(_+P+g);return u=P*x,f=g*x,t.copy(s).addScaledVector(ua,u).addScaledVector(da,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Po{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ci):Ci.fromBufferAttribute(l,u),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ol.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ol.copy(s.boundingBox)),Ol.applyMatrix4(e.matrixWorld),this.union(Ol)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),Bl.subVectors(this.max,uo),fa.subVectors(e.a,uo),ha.subVectors(e.b,uo),pa.subVectors(e.c,uo),jr.subVectors(ha,fa),Xr.subVectors(pa,ha),vs.subVectors(fa,pa);let t=[0,-jr.z,jr.y,0,-Xr.z,Xr.y,0,-vs.z,vs.y,jr.z,0,-jr.x,Xr.z,0,-Xr.x,vs.z,0,-vs.x,-jr.y,jr.x,0,-Xr.y,Xr.x,0,-vs.y,vs.x,0];return!Nd(t,fa,ha,pa,Bl)||(t=[1,0,0,0,1,0,0,0,1],!Nd(t,fa,ha,pa,Bl))?!1:(zl.crossVectors(jr,Xr),t=[zl.x,zl.y,zl.z],Nd(t,fa,ha,pa,Bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dr=[new J,new J,new J,new J,new J,new J,new J,new J],Ci=new J,Ol=new Po,fa=new J,ha=new J,pa=new J,jr=new J,Xr=new J,vs=new J,uo=new J,Bl=new J,zl=new J,_s=new J;function Nd(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){_s.fromArray(r,l);const f=o.x*Math.abs(_s.x)+o.y*Math.abs(_s.y)+o.z*Math.abs(_s.z),h=e.dot(_s),p=t.dot(_s),v=s.dot(_s);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const an=new J,Vl=new Ct;let W_=0;class Li extends Ps{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:W_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Jm,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Vl.fromBufferAttribute(this,t),Vl.applyMatrix3(e),this.setXY(t,Vl.x,Vl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=lo(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=jn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lo(t,this.array)),t}setX(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lo(t,this.array)),t}setY(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lo(t,this.array)),t}setW(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),s=jn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),s=jn(s,this.array),o=jn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),s=jn(s,this.array),o=jn(o,this.array),l=jn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class E0 extends Li{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class b0 extends Li{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class ri extends Li{constructor(e,t,s){super(new Float32Array(e),t,s)}}const j_=new Po,fo=new J,Ld=new J;class No{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):j_.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);const t=fo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(fo,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(Ld)),this.expandByPoint(fo.copy(e.center).sub(Ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let X_=0;const fi=new Yt,Dd=new Rn,ma=new J,ei=new Po,ho=new Po,xn=new J;class qn extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(T_(e)?b0:E0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new dt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,s){return fi.makeTranslation(e,t,s),this.applyMatrix4(fi),this}scale(e,t,s){return fi.makeScale(e,t,s),this.applyMatrix4(fi),this}lookAt(e){return Dd.lookAt(e),Dd.updateMatrix(),this.applyMatrix4(Dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ma).negate(),this.translate(ma.x,ma.y,ma.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ri(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];ei.setFromBufferAttribute(l),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new No);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const s=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];ho.setFromBufferAttribute(f),this.morphTargetsRelative?(xn.addVectors(ei.min,ho.min),ei.expandByPoint(xn),xn.addVectors(ei.max,ho.max),ei.expandByPoint(xn)):(ei.expandByPoint(ho.min),ei.expandByPoint(ho.max))}ei.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)xn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(xn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)xn.fromBufferAttribute(f,p),h&&(ma.fromBufferAttribute(e,p),xn.add(ma)),o=Math.max(o,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let b=0;b<s.count;b++)f[b]=new J,h[b]=new J;const p=new J,v=new J,y=new J,g=new Ct,S=new Ct,T=new Ct,P=new J,_=new J;function x(b,U,X){p.fromBufferAttribute(s,b),v.fromBufferAttribute(s,U),y.fromBufferAttribute(s,X),g.fromBufferAttribute(l,b),S.fromBufferAttribute(l,U),T.fromBufferAttribute(l,X),v.sub(p),y.sub(p),S.sub(g),T.sub(g);const z=1/(S.x*T.y-T.x*S.y);isFinite(z)&&(P.copy(v).multiplyScalar(T.y).addScaledVector(y,-S.y).multiplyScalar(z),_.copy(y).multiplyScalar(S.x).addScaledVector(v,-T.x).multiplyScalar(z),f[b].add(P),f[U].add(P),f[X].add(P),h[b].add(_),h[U].add(_),h[X].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let b=0,U=C.length;b<U;++b){const X=C[b],z=X.start,Y=X.count;for(let oe=z,le=z+Y;oe<le;oe+=3)x(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const D=new J,L=new J,O=new J,R=new J;function I(b){O.fromBufferAttribute(o,b),R.copy(O);const U=f[b];D.copy(U),D.sub(O.multiplyScalar(O.dot(U))).normalize(),L.crossVectors(R,U);const z=L.dot(h[b])<0?-1:1;u.setXYZW(b,D.x,D.y,D.z,z)}for(let b=0,U=C.length;b<U;++b){const X=C[b],z=X.start,Y=X.count;for(let oe=z,le=z+Y;oe<le;oe+=3)I(e.getX(oe+0)),I(e.getX(oe+1)),I(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Li(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let g=0,S=s.count;g<S;g++)s.setXYZ(g,0,0,0);const o=new J,l=new J,u=new J,f=new J,h=new J,p=new J,v=new J,y=new J;if(e)for(let g=0,S=e.count;g<S;g+=3){const T=e.getX(g+0),P=e.getX(g+1),_=e.getX(g+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,P),u.fromBufferAttribute(t,_),v.subVectors(u,l),y.subVectors(o,l),v.cross(y),f.fromBufferAttribute(s,T),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,_),f.add(v),h.add(v),p.add(v),s.setXYZ(T,f.x,f.y,f.z),s.setXYZ(P,h.x,h.y,h.z),s.setXYZ(_,p.x,p.y,p.z)}else for(let g=0,S=t.count;g<S;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),y.subVectors(o,l),v.cross(y),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,y=f.normalized,g=new p.constructor(h.length*v);let S=0,T=0;for(let P=0,_=h.length;P<_;P++){f.isInterleavedBufferAttribute?S=h[P]*f.data.stride+f.offset:S=h[P]*v;for(let x=0;x<v;x++)g[T++]=p[S++]}return new Li(g,v,y)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,s=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,y=p.length;v<y;v++){const g=p[v],S=e(g,s);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let y=0,g=p.length;y<g;y++){const S=p[y];v.push(S.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],y=l[p];for(let g=0,S=y.length;g<S;g++)v.push(y[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const y=u[p];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let $_=0;class Ns extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=_a,this.side=Jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Qd,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==_a&&(s.blending=this.blending),this.side!==Jr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Zd&&(s.blendSrc=this.blendSrc),this.blendDst!==Qd&&(s.blendDst=this.blendDst),this.blendEquation!==Es&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Sa&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sa&&(s.stencilFail=this.stencilFail),this.stencilZFail!==sa&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==sa&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fr=new J,Id=new J,Hl=new J,$r=new J,Ud=new J,Gl=new J,Fd=new J;class sh{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fr.copy(this.origin).addScaledVector(this.direction,t),fr.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Id.copy(e).add(t).multiplyScalar(.5),Hl.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(Id);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Hl),f=$r.dot(this.direction),h=-$r.dot(Hl),p=$r.lengthSq(),v=Math.abs(1-u*u);let y,g,S,T;if(v>0)if(y=u*h-f,g=u*f-h,T=l*v,y>=0)if(g>=-T)if(g<=T){const P=1/v;y*=P,g*=P,S=y*(y+u*g+2*f)+g*(u*y+g+2*h)+p}else g=l,y=Math.max(0,-(u*g+f)),S=-y*y+g*(g+2*h)+p;else g=-l,y=Math.max(0,-(u*g+f)),S=-y*y+g*(g+2*h)+p;else g<=-T?(y=Math.max(0,-(-u*l+f)),g=y>0?-l:Math.min(Math.max(-l,-h),l),S=-y*y+g*(g+2*h)+p):g<=T?(y=0,g=Math.min(Math.max(-l,-h),l),S=g*(g+2*h)+p):(y=Math.max(0,-(u*l+f)),g=y>0?l:Math.min(Math.max(-l,-h),l),S=-y*y+g*(g+2*h)+p);else g=u>0?-l:l,y=Math.max(0,-(u*g+f)),S=-y*y+g*(g+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(Id).addScaledVector(Hl,g),S}intersectSphere(e,t){fr.subVectors(e.center,this.origin);const s=fr.dot(this.direction),o=fr.dot(fr)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=s-u,h=s+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,f,h;const p=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,g=this.origin;return p>=0?(s=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(s=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),y>=0?(f=(e.min.z-g.z)*y,h=(e.max.z-g.z)*y):(f=(e.max.z-g.z)*y,h=(e.min.z-g.z)*y),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,fr)!==null}intersectTriangle(e,t,s,o,l){Ud.subVectors(t,e),Gl.subVectors(s,e),Fd.crossVectors(Ud,Gl);let u=this.direction.dot(Fd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;$r.subVectors(this.origin,e);const h=f*this.direction.dot(Gl.crossVectors($r,Gl));if(h<0)return null;const p=f*this.direction.dot(Ud.cross($r));if(p<0||h+p>u)return null;const v=-f*$r.dot(Fd);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class T0 extends Ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.combine=i0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pg=new Yt,ys=new sh,Wl=new No,mg=new J,jl=new J,Xl=new J,$l=new J,kd=new J,ql=new J,gg=new J,Yl=new J;class qi extends Rn{constructor(e=new qn,t=new T0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){ql.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],y=l[h];v!==0&&(kd.fromBufferAttribute(y,e),u?ql.addScaledVector(kd,v):ql.addScaledVector(kd.sub(t),v))}t.add(ql)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Wl.copy(s.boundingSphere),Wl.applyMatrix4(l),ys.copy(e.ray).recast(e.near),!(Wl.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Wl,mg)===null||ys.origin.distanceToSquared(mg)>(e.far-e.near)**2))&&(pg.copy(l).invert(),ys.copy(e.ray).applyMatrix4(pg),!(s.boundingBox!==null&&ys.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,y=l.attributes.normal,g=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,P=g.length;T<P;T++){const _=g[T],x=u[_.materialIndex],C=Math.max(_.start,S.start),D=Math.min(f.count,Math.min(_.start+_.count,S.start+S.count));for(let L=C,O=D;L<O;L+=3){const R=f.getX(L),I=f.getX(L+1),b=f.getX(L+2);o=Kl(this,x,e,s,p,v,y,R,I,b),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),P=Math.min(f.count,S.start+S.count);for(let _=T,x=P;_<x;_+=3){const C=f.getX(_),D=f.getX(_+1),L=f.getX(_+2);o=Kl(this,u,e,s,p,v,y,C,D,L),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let T=0,P=g.length;T<P;T++){const _=g[T],x=u[_.materialIndex],C=Math.max(_.start,S.start),D=Math.min(h.count,Math.min(_.start+_.count,S.start+S.count));for(let L=C,O=D;L<O;L+=3){const R=L,I=L+1,b=L+2;o=Kl(this,x,e,s,p,v,y,R,I,b),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),P=Math.min(h.count,S.start+S.count);for(let _=T,x=P;_<x;_+=3){const C=_,D=_+1,L=_+2;o=Kl(this,u,e,s,p,v,y,C,D,L),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function q_(r,e,t,s,o,l,u,f){let h;if(e.side===$n?h=s.intersectTriangle(u,l,o,!0,f):h=s.intersectTriangle(o,l,u,e.side===Jr,f),h===null)return null;Yl.copy(f),Yl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Yl);return p<t.near||p>t.far?null:{distance:p,point:Yl.clone(),object:r}}function Kl(r,e,t,s,o,l,u,f,h,p){r.getVertexPosition(f,jl),r.getVertexPosition(h,Xl),r.getVertexPosition(p,$l);const v=q_(r,e,t,s,jl,Xl,$l,gg);if(v){const y=new J;Ri.getBarycoord(gg,jl,Xl,$l,y),o&&(v.uv=Ri.getInterpolatedAttribute(o,f,h,p,y,new Ct)),l&&(v.uv1=Ri.getInterpolatedAttribute(l,f,h,p,y,new Ct)),u&&(v.normal=Ri.getInterpolatedAttribute(u,f,h,p,y,new J),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new J,materialIndex:0};Ri.getNormal(jl,Xl,$l,g.normal),v.face=g,v.barycoord=y}return v}class Y_ extends In{constructor(e=null,t=1,s=1,o,l,u,f,h,p=Sn,v=Sn,y,g){super(null,u,f,h,p,v,o,l,y,g),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Od=new J,K_=new J,Z_=new dt;class Ms{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Od.subVectors(s,t).cross(K_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const o=e.delta(Od),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Z_.getNormalMatrix(e),o=this.coplanarPoint(Od).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new No,Q_=new Ct(.5,.5),Zl=new J;class ah{constructor(e=new Ms,t=new Ms,s=new Ms,o=new Ms,l=new Ms,u=new Ms){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Wi,s=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],v=l[4],y=l[5],g=l[6],S=l[7],T=l[8],P=l[9],_=l[10],x=l[11],C=l[12],D=l[13],L=l[14],O=l[15];if(o[0].setComponents(p-u,S-v,x-T,O-C).normalize(),o[1].setComponents(p+u,S+v,x+T,O+C).normalize(),o[2].setComponents(p+f,S+y,x+P,O+D).normalize(),o[3].setComponents(p-f,S-y,x-P,O-D).normalize(),s)o[4].setComponents(h,g,_,L).normalize(),o[5].setComponents(p-h,S-g,x-_,O-L).normalize();else if(o[4].setComponents(p-h,S-g,x-_,O-L).normalize(),t===Wi)o[5].setComponents(p+h,S+g,x+_,O+L).normalize();else if(t===To)o[5].setComponents(h,g,_,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);const t=Q_.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Zl.x=o.normal.x>0?e.max.x:e.min.x,Zl.y=o.normal.y>0?e.max.y:e.min.y,Zl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class w0 extends Ns{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _c=new J,yc=new J,xg=new Yt,po=new sh,Ql=new No,Bd=new J,vg=new J;class J_ extends Rn{constructor(e=new qn,t=new w0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)_c.fromBufferAttribute(t,o-1),yc.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=_c.distanceTo(yc);e.setAttribute("lineDistance",new ri(s,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ql.copy(s.boundingSphere),Ql.applyMatrix4(o),Ql.radius+=l,e.ray.intersectsSphere(Ql)===!1)return;xg.copy(o).invert(),po.copy(e.ray).applyMatrix4(xg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const S=Math.max(0,u.start),T=Math.min(v.count,u.start+u.count);for(let P=S,_=T-1;P<_;P+=p){const x=v.getX(P),C=v.getX(P+1),D=Jl(this,e,po,h,x,C,P);D&&t.push(D)}if(this.isLineLoop){const P=v.getX(T-1),_=v.getX(S),x=Jl(this,e,po,h,P,_,T-1);x&&t.push(x)}}else{const S=Math.max(0,u.start),T=Math.min(g.count,u.start+u.count);for(let P=S,_=T-1;P<_;P+=p){const x=Jl(this,e,po,h,P,P+1,P);x&&t.push(x)}if(this.isLineLoop){const P=Jl(this,e,po,h,T-1,S,T-1);P&&t.push(P)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Jl(r,e,t,s,o,l,u){const f=r.geometry.attributes.position;if(_c.fromBufferAttribute(f,o),yc.fromBufferAttribute(f,l),t.distanceSqToSegment(_c,yc,Bd,vg)>s)return;Bd.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Bd);if(!(p<e.near||p>e.far))return{distance:p,point:vg.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}class ey extends J_{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class A0 extends Ns{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _g=new Yt,Hf=new sh,ec=new No,tc=new J;class ty extends Rn{constructor(e=new qn,t=new A0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),ec.copy(s.boundingSphere),ec.applyMatrix4(o),ec.radius+=l,e.ray.intersectsSphere(ec)===!1)return;_g.copy(o).invert(),Hf.copy(e.ray).applyMatrix4(_g);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=s.index,y=s.attributes.position;if(p!==null){const g=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let T=g,P=S;T<P;T++){const _=p.getX(T);tc.fromBufferAttribute(y,_),yg(tc,_,h,o,e,t,this)}}else{const g=Math.max(0,u.start),S=Math.min(y.count,u.start+u.count);for(let T=g,P=S;T<P;T++)tc.fromBufferAttribute(y,T),yg(tc,T,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function yg(r,e,t,s,o,l,u){const f=Hf.distanceSqToPoint(r);if(f<t){const h=new J;Hf.closestPointToPoint(r,h),h.applyMatrix4(s);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class C0 extends In{constructor(e=[],t=Cs,s,o,l,u,f,h,p,v){super(e,t,s,o,l,u,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ea extends In{constructor(e,t,s=$i,o,l,u,f=Sn,h=Sn,p,v=yr,y=1){if(v!==yr&&v!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:y};super(g,o,l,u,f,h,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ny extends Ea{constructor(e,t=$i,s=Cs,o,l,u=Sn,f=Sn,h,p=yr){const v={width:e,height:e,depth:1},y=[v,v,v,v,v,v];super(e,e,t,s,o,l,u,f,h,p),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class R0 extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Lo extends qn{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],y=[];let g=0,S=0;T("z","y","x",-1,-1,s,t,e,u,l,0),T("z","y","x",1,-1,s,t,-e,u,l,1),T("x","z","y",1,1,e,s,t,o,u,2),T("x","z","y",1,-1,e,s,-t,o,u,3),T("x","y","z",1,-1,e,t,s,o,l,4),T("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new ri(p,3)),this.setAttribute("normal",new ri(v,3)),this.setAttribute("uv",new ri(y,2));function T(P,_,x,C,D,L,O,R,I,b,U){const X=L/I,z=O/b,Y=L/2,oe=O/2,le=R/2,G=I+1,Q=b+1;let q=0,V=0;const K=new J;for(let ae=0;ae<Q;ae++){const k=ae*z-oe;for(let ee=0;ee<G;ee++){const Ue=ee*X-Y;K[P]=Ue*C,K[_]=k*D,K[x]=le,p.push(K.x,K.y,K.z),K[P]=0,K[_]=0,K[x]=R>0?1:-1,v.push(K.x,K.y,K.z),y.push(ee/I),y.push(1-ae/b),q+=1}}for(let ae=0;ae<b;ae++)for(let k=0;k<I;k++){const ee=g+k+G*ae,Ue=g+k+G*(ae+1),Ve=g+(k+1)+G*(ae+1),De=g+(k+1)+G*ae;h.push(ee,Ue,De),h.push(Ue,Ve,De),V+=6}f.addGroup(S,V,U),S+=V,g+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class iy{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let s,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)s=this.getPoint(u/e),l+=s.distanceTo(o),t.push(l),o=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const s=this.getLengths();let o=0;const l=s.length;let u;t?u=t:u=e*s[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=s[o]-u,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,s[o]===u)return o/(l-1);const v=s[o],g=s[o+1]-v,S=(u-v)/g;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),h=t||(u.isVector2?new Ct:new J);return h.copy(f).sub(u).normalize(),h}getTangentAt(e,t){const s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t=!1){const s=new J,o=[],l=[],u=[],f=new J,h=new Yt;for(let S=0;S<=e;S++){const T=S/e;o[S]=this.getTangentAt(T,new J)}l[0]=new J,u[0]=new J;let p=Number.MAX_VALUE;const v=Math.abs(o[0].x),y=Math.abs(o[0].y),g=Math.abs(o[0].z);v<=p&&(p=v,s.set(1,0,0)),y<=p&&(p=y,s.set(0,1,0)),g<=p&&s.set(0,0,1),f.crossVectors(o[0],s).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),u[S]=u[S-1].clone(),f.crossVectors(o[S-1],o[S]),f.length()>Number.EPSILON){f.normalize();const T=Math.acos(vt(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(f,T))}u[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(vt(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let T=1;T<=e;T++)l[T].applyMatrix4(h.makeRotationAxis(o[T],S*T)),u[T].crossVectors(o[T],l[T])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ry extends iy{constructor(e=0,t=0,s=1,o=1,l=0,u=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=s,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Ct){const s=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),y=Math.sin(this.aRotation),g=h-this.aX,S=p-this.aY;h=g*v-S*y+this.aX,p=g*y+S*v+this.aY}return s.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wc extends qn{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(s),h=Math.floor(o),p=f+1,v=h+1,y=e/f,g=t/h,S=[],T=[],P=[],_=[];for(let x=0;x<v;x++){const C=x*g-u;for(let D=0;D<p;D++){const L=D*y-l;T.push(L,-C,0),P.push(0,0,1),_.push(D/f),_.push(1-x/h)}}for(let x=0;x<h;x++)for(let C=0;C<f;C++){const D=C+p*x,L=C+p*(x+1),O=C+1+p*(x+1),R=C+1+p*x;S.push(D,L,R),S.push(L,O,R)}this.setIndex(S),this.setAttribute("position",new ri(T,3)),this.setAttribute("normal",new ri(P,3)),this.setAttribute("uv",new ri(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.widthSegments,e.heightSegments)}}class oh extends qn{constructor(e=1,t=32,s=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const h=Math.min(u+f,Math.PI);let p=0;const v=[],y=new J,g=new J,S=[],T=[],P=[],_=[];for(let x=0;x<=s;x++){const C=[],D=x/s;let L=0;x===0&&u===0?L=.5/t:x===s&&h===Math.PI&&(L=-.5/t);for(let O=0;O<=t;O++){const R=O/t;y.x=-e*Math.cos(o+R*l)*Math.sin(u+D*f),y.y=e*Math.cos(u+D*f),y.z=e*Math.sin(o+R*l)*Math.sin(u+D*f),T.push(y.x,y.y,y.z),g.copy(y).normalize(),P.push(g.x,g.y,g.z),_.push(R+L,1-D),C.push(p++)}v.push(C)}for(let x=0;x<s;x++)for(let C=0;C<t;C++){const D=v[x][C+1],L=v[x][C],O=v[x+1][C],R=v[x+1][C+1];(x!==0||u>0)&&S.push(D,L,R),(x!==s-1||h<Math.PI)&&S.push(L,O,R)}this.setIndex(S),this.setAttribute("position",new ri(T,3)),this.setAttribute("normal",new ri(P,3)),this.setAttribute("uv",new ri(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ba(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];if(Sg(o))o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if(Sg(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][s]=l}else e[t][s]=o.slice();else e[t][s]=o}}return e}function Ln(r){const e={};for(let t=0;t<r.length;t++){const s=ba(r[t]);for(const o in s)e[o]=s[o]}return e}function Sg(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function sy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function P0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const ay={clone:ba,merge:Ln};var oy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ly=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oy,this.fragmentShader=ly,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ba(e.uniforms),this.uniformsGroups=sy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class cy extends Yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uy extends Ns{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bf,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dy extends Ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=x_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fy extends Ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class N0 extends Rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const zd=new Yt,Mg=new J,Eg=new J;class hy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ah,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Mg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mg),Eg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eg),t.updateMatrixWorld(),zd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===To||t.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const nc=new J,ic=new wa,Bi=new J;let L0=class extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(nc,ic,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nc,ic,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(nc,ic,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nc,ic,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const qr=new J,bg=new Ct,Tg=new Ct;class ni extends L0{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(md*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vf*2*Math.atan(Math.tan(md*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qr.x,qr.y).multiplyScalar(-e/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(qr.x,qr.y).multiplyScalar(-e/qr.z)}getViewSize(e,t){return this.getViewBounds(e,bg,Tg),t.subVectors(Tg,bg)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(md*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*s/p,o*=u.width/h,s*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class py extends hy{constructor(){super(new ni(90,1,.5,500)),this.isPointLightShadow=!0}}class wg extends N0{constructor(e,t,s=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=o,this.shadow=new py}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class D0 extends L0{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class my extends N0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ga=-90,xa=1;class gy extends Rn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ni(ga,xa,e,t);o.layers=this.layers,this.add(o);const l=new ni(ga,xa,e,t);l.layers=this.layers,this.add(l);const u=new ni(ga,xa,e,t);u.layers=this.layers,this.add(u);const f=new ni(ga,xa,e,t);f.layers=this.layers,this.add(f);const h=new ni(ga,xa,e,t);h.layers=this.layers,this.add(h);const p=new ni(ga,xa,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===To)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,v]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const P=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(s,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),s.texture.generateMipmaps=P,e.setRenderTarget(s,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(y,g,S),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class xy extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sh=class Sh{constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=o,this}};Sh.prototype.isMatrix2=!0;let Ag=Sh;function Cg(r,e,t,s){const o=vy(s);switch(t){case g0:return r*e;case v0:return r*e/o.components*o.byteLength;case Jf:return r*e/o.components*o.byteLength;case Rs:return r*e*2/o.components*o.byteLength;case eh:return r*e*2/o.components*o.byteLength;case x0:return r*e*3/o.components*o.byteLength;case Ni:return r*e*4/o.components*o.byteLength;case th:return r*e*4/o.components*o.byteLength;case cc:case uc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case dc:case fc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uf:case ff:return Math.max(r,16)*Math.max(e,8)/4;case cf:case df:return Math.max(r,8)*Math.max(e,8)/2;case hf:case pf:case gf:case xf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case mf:case pc:case vf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _f:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case bf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case wf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Af:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Nf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Df:case If:case Uf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ff:case kf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case mc:case Of:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vy(r){switch(r){case ii:case f0:return{byteLength:1,components:1};case Eo:case h0:case _r:return{byteLength:2,components:1};case Zf:case Qf:return{byteLength:2,components:4};case $i:case Kf:case Gi:return{byteLength:4,components:1};case p0:case m0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yf}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function I0(){let r=null,e=!1,t=null,s=null;function o(l,u){t(l,u),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function _y(r){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,y=p.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,p,v),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:y}}function s(f,h,p){const v=h.array,y=h.updateRanges;if(r.bindBuffer(p,f),y.length===0)r.bufferSubData(p,0,v);else{y.sort((S,T)=>S.start-T.start);let g=0;for(let S=1;S<y.length;S++){const T=y[g],P=y[S];P.start<=T.start+T.count+1?T.count=Math.max(T.count,P.start+P.count-T.start):(++g,y[g]=P)}y.length=g+1;for(let S=0,T=y.length;S<T;S++){const P=y[S];r.bufferSubData(p,P.start*v.BYTES_PER_ELEMENT,v,P.start,P.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var yy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sy=`#ifdef USE_ALPHAHASH
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
#endif`,My=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,by=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wy=`#ifdef USE_AOMAP
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
#endif`,Ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cy=`#ifdef USE_BATCHING
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
#endif`,Ry=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Py=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ly=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dy=`#ifdef USE_IRIDESCENCE
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
#endif`,Iy=`#ifdef USE_BUMPMAP
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
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,By=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gy=`#define PI 3.141592653589793
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
} // validated`,Wy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jy=`vec3 transformedNormal = objectNormal;
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
#endif`,Xy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qy=`#ifdef USE_ENVMAP
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
#endif`,Jy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eS=`#ifdef USE_ENVMAP
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
#endif`,tS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nS=`#ifdef USE_ENVMAP
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
#endif`,iS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oS=`#ifdef USE_GRADIENTMAP
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
}`,lS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fS=`#ifdef USE_ENVMAP
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
#endif`,hS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xS=`PhysicalMaterial material;
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
#endif`,vS=`uniform sampler2D dfgLUT;
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
}`,_S=`
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
#endif`,yS=`#if defined( RE_IndirectDiffuse )
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
#endif`,SS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ES=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PS=`#if defined( USE_POINTS_UV )
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
#endif`,NS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,US=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FS=`#ifdef USE_MORPHTARGETS
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
#endif`,kS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GS=`#ifdef USE_NORMALMAP
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
#endif`,WS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$S=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,KS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sM=`float getShadowMask() {
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
}`,aM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oM=`#ifdef USE_SKINNING
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
#endif`,lM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cM=`#ifdef USE_SKINNING
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
#endif`,uM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pM=`#ifdef USE_TRANSMISSION
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
#endif`,mM=`#ifdef USE_TRANSMISSION
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
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_M=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SM=`uniform sampler2D t2D;
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
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`#include <common>
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
}`,AM=`#if DEPTH_PACKING == 3200
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
}`,CM=`#define DISTANCE
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
}`,RM=`#define DISTANCE
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
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`uniform float scale;
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
}`,DM=`uniform vec3 diffuse;
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
}`,IM=`#include <common>
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
}`,UM=`uniform vec3 diffuse;
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
}`,FM=`#define LAMBERT
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
}`,kM=`#define LAMBERT
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
}`,OM=`#define MATCAP
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
}`,BM=`#define MATCAP
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
}`,zM=`#define NORMAL
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
}`,VM=`#define NORMAL
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
}`,HM=`#define PHONG
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
}`,GM=`#define PHONG
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
}`,WM=`#define STANDARD
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
}`,jM=`#define STANDARD
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
}`,XM=`#define TOON
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
}`,$M=`#define TOON
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
}`,qM=`uniform float size;
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
}`,YM=`uniform vec3 diffuse;
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
}`,KM=`#include <common>
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
}`,ZM=`uniform vec3 color;
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
}`,QM=`uniform float rotation;
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
}`,JM=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:yy,alphahash_pars_fragment:Sy,alphamap_fragment:My,alphamap_pars_fragment:Ey,alphatest_fragment:by,alphatest_pars_fragment:Ty,aomap_fragment:wy,aomap_pars_fragment:Ay,batching_pars_vertex:Cy,batching_vertex:Ry,begin_vertex:Py,beginnormal_vertex:Ny,bsdfs:Ly,iridescence_fragment:Dy,bumpmap_pars_fragment:Iy,clipping_planes_fragment:Uy,clipping_planes_pars_fragment:Fy,clipping_planes_pars_vertex:ky,clipping_planes_vertex:Oy,color_fragment:By,color_pars_fragment:zy,color_pars_vertex:Vy,color_vertex:Hy,common:Gy,cube_uv_reflection_fragment:Wy,defaultnormal_vertex:jy,displacementmap_pars_vertex:Xy,displacementmap_vertex:$y,emissivemap_fragment:qy,emissivemap_pars_fragment:Yy,colorspace_fragment:Ky,colorspace_pars_fragment:Zy,envmap_fragment:Qy,envmap_common_pars_fragment:Jy,envmap_pars_fragment:eS,envmap_pars_vertex:tS,envmap_physical_pars_fragment:fS,envmap_vertex:nS,fog_vertex:iS,fog_pars_vertex:rS,fog_fragment:sS,fog_pars_fragment:aS,gradientmap_pars_fragment:oS,lightmap_pars_fragment:lS,lights_lambert_fragment:cS,lights_lambert_pars_fragment:uS,lights_pars_begin:dS,lights_toon_fragment:hS,lights_toon_pars_fragment:pS,lights_phong_fragment:mS,lights_phong_pars_fragment:gS,lights_physical_fragment:xS,lights_physical_pars_fragment:vS,lights_fragment_begin:_S,lights_fragment_maps:yS,lights_fragment_end:SS,lightprobes_pars_fragment:MS,logdepthbuf_fragment:ES,logdepthbuf_pars_fragment:bS,logdepthbuf_pars_vertex:TS,logdepthbuf_vertex:wS,map_fragment:AS,map_pars_fragment:CS,map_particle_fragment:RS,map_particle_pars_fragment:PS,metalnessmap_fragment:NS,metalnessmap_pars_fragment:LS,morphinstance_vertex:DS,morphcolor_vertex:IS,morphnormal_vertex:US,morphtarget_pars_vertex:FS,morphtarget_vertex:kS,normal_fragment_begin:OS,normal_fragment_maps:BS,normal_pars_fragment:zS,normal_pars_vertex:VS,normal_vertex:HS,normalmap_pars_fragment:GS,clearcoat_normal_fragment_begin:WS,clearcoat_normal_fragment_maps:jS,clearcoat_pars_fragment:XS,iridescence_pars_fragment:$S,opaque_fragment:qS,packing:YS,premultiplied_alpha_fragment:KS,project_vertex:ZS,dithering_fragment:QS,dithering_pars_fragment:JS,roughnessmap_fragment:eM,roughnessmap_pars_fragment:tM,shadowmap_pars_fragment:nM,shadowmap_pars_vertex:iM,shadowmap_vertex:rM,shadowmask_pars_fragment:sM,skinbase_vertex:aM,skinning_pars_vertex:oM,skinning_vertex:lM,skinnormal_vertex:cM,specularmap_fragment:uM,specularmap_pars_fragment:dM,tonemapping_fragment:fM,tonemapping_pars_fragment:hM,transmission_fragment:pM,transmission_pars_fragment:mM,uv_pars_fragment:gM,uv_pars_vertex:xM,uv_vertex:vM,worldpos_vertex:_M,background_vert:yM,background_frag:SM,backgroundCube_vert:MM,backgroundCube_frag:EM,cube_vert:bM,cube_frag:TM,depth_vert:wM,depth_frag:AM,distance_vert:CM,distance_frag:RM,equirect_vert:PM,equirect_frag:NM,linedashed_vert:LM,linedashed_frag:DM,meshbasic_vert:IM,meshbasic_frag:UM,meshlambert_vert:FM,meshlambert_frag:kM,meshmatcap_vert:OM,meshmatcap_frag:BM,meshnormal_vert:zM,meshnormal_frag:VM,meshphong_vert:HM,meshphong_frag:GM,meshphysical_vert:WM,meshphysical_frag:jM,meshtoon_vert:XM,meshtoon_frag:$M,points_vert:qM,points_frag:YM,shadow_vert:KM,shadow_frag:ZM,sprite_vert:QM,sprite_frag:JM},ke={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Hi={basic:{uniforms:Ln([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Ln([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Ln([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Ln([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Ln([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new At(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Ln([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Ln([ke.points,ke.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Ln([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Ln([ke.common,ke.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Ln([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Ln([ke.sprite,ke.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Ln([ke.common,ke.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Ln([ke.lights,ke.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Hi.physical={uniforms:Ln([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const rc={r:0,b:0,g:0},e1=new Yt,U0=new dt;U0.set(-1,0,0,0,1,0,0,0,1);function t1(r,e,t,s,o,l){const u=new At(0);let f=o===!0?0:1,h,p,v=null,y=0,g=null;function S(C){let D=C.isScene===!0?C.background:null;if(D&&D.isTexture){const L=C.backgroundBlurriness>0;D=e.get(D,L)}return D}function T(C){let D=!1;const L=S(C);L===null?_(u,f):L&&L.isColor&&(_(L,1),D=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,l):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function P(C,D){const L=S(D);L&&(L.isCubeTexture||L.mapping===Tc)?(p===void 0&&(p=new qi(new Lo(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:ba(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=L,p.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(e1.makeRotationFromEuler(D.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(U0),p.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Ot,(v!==L||y!==L.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=L,y=L.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new qi(new wc(2,2),new Yi({name:"BackgroundMaterial",uniforms:ba(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Ot,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||y!==L.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,v=L,y=L.version,g=r.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function _(C,D){C.getRGB(rc,P0(r)),t.buffers.color.setClear(rc.r,rc.g,rc.b,D,l)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,D=1){u.set(C),f=D,_(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,_(u,f)},render:T,addToRenderList:P,dispose:x}}function n1(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=g(null);let l=o,u=!1;function f(z,Y,oe,le,G){let Q=!1;const q=y(z,le,oe,Y);l!==q&&(l=q,p(l.object)),Q=S(z,le,oe,G),Q&&T(z,le,oe,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,L(z,Y,oe,le),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function h(){return r.createVertexArray()}function p(z){return r.bindVertexArray(z)}function v(z){return r.deleteVertexArray(z)}function y(z,Y,oe,le){const G=le.wireframe===!0;let Q=s[Y.id];Q===void 0&&(Q={},s[Y.id]=Q);const q=z.isInstancedMesh===!0?z.id:0;let V=Q[q];V===void 0&&(V={},Q[q]=V);let K=V[oe.id];K===void 0&&(K={},V[oe.id]=K);let ae=K[G];return ae===void 0&&(ae=g(h()),K[G]=ae),ae}function g(z){const Y=[],oe=[],le=[];for(let G=0;G<t;G++)Y[G]=0,oe[G]=0,le[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:oe,attributeDivisors:le,object:z,attributes:{},index:null}}function S(z,Y,oe,le){const G=l.attributes,Q=Y.attributes;let q=0;const V=oe.getAttributes();for(const K in V)if(V[K].location>=0){const k=G[K];let ee=Q[K];if(ee===void 0&&(K==="instanceMatrix"&&z.instanceMatrix&&(ee=z.instanceMatrix),K==="instanceColor"&&z.instanceColor&&(ee=z.instanceColor)),k===void 0||k.attribute!==ee||ee&&k.data!==ee.data)return!0;q++}return l.attributesNum!==q||l.index!==le}function T(z,Y,oe,le){const G={},Q=Y.attributes;let q=0;const V=oe.getAttributes();for(const K in V)if(V[K].location>=0){let k=Q[K];k===void 0&&(K==="instanceMatrix"&&z.instanceMatrix&&(k=z.instanceMatrix),K==="instanceColor"&&z.instanceColor&&(k=z.instanceColor));const ee={};ee.attribute=k,k&&k.data&&(ee.data=k.data),G[K]=ee,q++}l.attributes=G,l.attributesNum=q,l.index=le}function P(){const z=l.newAttributes;for(let Y=0,oe=z.length;Y<oe;Y++)z[Y]=0}function _(z){x(z,0)}function x(z,Y){const oe=l.newAttributes,le=l.enabledAttributes,G=l.attributeDivisors;oe[z]=1,le[z]===0&&(r.enableVertexAttribArray(z),le[z]=1),G[z]!==Y&&(r.vertexAttribDivisor(z,Y),G[z]=Y)}function C(){const z=l.newAttributes,Y=l.enabledAttributes;for(let oe=0,le=Y.length;oe<le;oe++)Y[oe]!==z[oe]&&(r.disableVertexAttribArray(oe),Y[oe]=0)}function D(z,Y,oe,le,G,Q,q){q===!0?r.vertexAttribIPointer(z,Y,oe,G,Q):r.vertexAttribPointer(z,Y,oe,le,G,Q)}function L(z,Y,oe,le){P();const G=le.attributes,Q=oe.getAttributes(),q=Y.defaultAttributeValues;for(const V in Q){const K=Q[V];if(K.location>=0){let ae=G[V];if(ae===void 0&&(V==="instanceMatrix"&&z.instanceMatrix&&(ae=z.instanceMatrix),V==="instanceColor"&&z.instanceColor&&(ae=z.instanceColor)),ae!==void 0){const k=ae.normalized,ee=ae.itemSize,Ue=e.get(ae);if(Ue===void 0)continue;const Ve=Ue.buffer,De=Ue.type,ue=Ue.bytesPerElement,_e=De===r.INT||De===r.UNSIGNED_INT||ae.gpuType===Kf;if(ae.isInterleavedBufferAttribute){const me=ae.data,Ie=me.stride,Ge=ae.offset;if(me.isInstancedInterleavedBuffer){for(let Qe=0;Qe<K.locationSize;Qe++)x(K.location+Qe,me.meshPerAttribute);z.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Qe=0;Qe<K.locationSize;Qe++)_(K.location+Qe);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let Qe=0;Qe<K.locationSize;Qe++)D(K.location+Qe,ee/K.locationSize,De,k,Ie*ue,(Ge+ee/K.locationSize*Qe)*ue,_e)}else{if(ae.isInstancedBufferAttribute){for(let me=0;me<K.locationSize;me++)x(K.location+me,ae.meshPerAttribute);z.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let me=0;me<K.locationSize;me++)_(K.location+me);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let me=0;me<K.locationSize;me++)D(K.location+me,ee/K.locationSize,De,k,ee*ue,ee/K.locationSize*me*ue,_e)}}else if(q!==void 0){const k=q[V];if(k!==void 0)switch(k.length){case 2:r.vertexAttrib2fv(K.location,k);break;case 3:r.vertexAttrib3fv(K.location,k);break;case 4:r.vertexAttrib4fv(K.location,k);break;default:r.vertexAttrib1fv(K.location,k)}}}}C()}function O(){U();for(const z in s){const Y=s[z];for(const oe in Y){const le=Y[oe];for(const G in le){const Q=le[G];for(const q in Q)v(Q[q].object),delete Q[q];delete le[G]}}delete s[z]}}function R(z){if(s[z.id]===void 0)return;const Y=s[z.id];for(const oe in Y){const le=Y[oe];for(const G in le){const Q=le[G];for(const q in Q)v(Q[q].object),delete Q[q];delete le[G]}}delete s[z.id]}function I(z){for(const Y in s){const oe=s[Y];for(const le in oe){const G=oe[le];if(G[z.id]===void 0)continue;const Q=G[z.id];for(const q in Q)v(Q[q].object),delete Q[q];delete G[z.id]}}}function b(z){for(const Y in s){const oe=s[Y],le=z.isInstancedMesh===!0?z.id:0,G=oe[le];if(G!==void 0){for(const Q in G){const q=G[Q];for(const V in q)v(q[V].object),delete q[V];delete G[Q]}delete oe[le],Object.keys(oe).length===0&&delete s[Y]}}}function U(){X(),u=!0,l!==o&&(l=o,p(l.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:U,resetDefaultState:X,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfObject:b,releaseStatesOfProgram:I,initAttributes:P,enableAttribute:_,disableUnusedAttributes:C}}function i1(r,e,t){let s;function o(h){s=h}function l(h,p){r.drawArrays(s,h,p),t.update(p,s,1)}function u(h,p,v){v!==0&&(r.drawArraysInstanced(s,h,p,v),t.update(p,s,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,p,0,v);let g=0;for(let S=0;S<v;S++)g+=p[S];t.update(g,s,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function r1(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(I){return!(I!==Ni&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const b=I===_r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ii&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Gi&&!b)}function h(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(rt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const y=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=r.getParameter(r.MAX_SAMPLES),R=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:T,maxTextureSize:P,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:C,maxVaryings:D,maxFragmentUniforms:L,maxSamples:O,samples:R}}function s1(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new Ms,f=new dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const S=y.length!==0||g||s!==0||o;return o=g,s=y.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,g){t=v(y,g,0)},this.setState=function(y,g,S){const T=y.clippingPlanes,P=y.clipIntersection,_=y.clipShadows,x=r.get(y);if(!o||T===null||T.length===0||l&&!_)l?v(null):p();else{const C=l?0:s,D=C*4;let L=x.clippingState||null;h.value=L,L=v(T,g,D,S);for(let O=0;O!==D;++O)L[O]=t[O];x.clippingState=L,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=C}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(y,g,S,T){const P=y!==null?y.length:0;let _=null;if(P!==0){if(_=h.value,T!==!0||_===null){const x=S+P*4,C=g.matrixWorldInverse;f.getNormalMatrix(C),(_===null||_.length<x)&&(_=new Float32Array(x));for(let D=0,L=S;D!==P;++D,L+=4)u.copy(y[D]).applyMatrix4(C,f),u.normal.toArray(_,L),_[L+3]=u.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,_}}const Zr=4,Rg=[.125,.215,.35,.446,.526,.582],bs=20,a1=256,mo=new D0,Pg=new At;let Vd=null,Hd=0,Gd=0,Wd=!1;const o1=new J;class Ng{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){const{size:u=256,position:f=o1}=l;Vd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ig(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vd,Hd,Gd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:_r,format:Ni,colorSpace:gc,depthBuffer:!1},o=Lg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lg(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=l1(l)),this._blurMaterial=u1(l,e,t),this._ggxMaterial=c1(l,e,t)}return o}_compileMaterial(e){const t=new qi(new qn,e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,s,o,l){const h=new ni(90,1,t,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,S=y.toneMapping;y.getClearColor(Pg),y.toneMapping=ji,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qi(new Lo,new T0({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const P=this._backgroundBox,_=P.material;let x=!1;const C=e.background;C?C.isColor&&(_.color.copy(C),e.background=null,x=!0):(_.color.copy(Pg),x=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(h.up.set(0,p[D],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[D],l.y,l.z)):L===1?(h.up.set(0,0,p[D]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[D],l.z)):(h.up.set(0,p[D],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[D]));const O=this._cubeSize;va(o,L*O,D>2?O:0,O,O),y.setRenderTarget(o),x&&y.render(P,h),y.render(e,h)}y.toneMapping=S,y.autoClear=g,e.background=C}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===Cs||e.mapping===Ma;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ig()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;va(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(u,mo)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const h=u.uniforms,p=s/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),y=Math.sqrt(p*p-v*v),g=0+p*1.25,S=y*g,{_lodMax:T}=this,P=this._sizeLods[s],_=3*P*(s>T-Zr?s-T+Zr:0),x=4*(this._cubeSize-P);h.envMap.value=e.texture,h.roughness.value=S,h.mipInt.value=T-t,va(l,_,x,3*P,2*P),o.setRenderTarget(l),o.render(f,mo),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=T-s,va(e,_,x,3*P,2*P),o.setRenderTarget(e),o.render(f,mo)}_blur(e,t,s,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,o,"latitudinal",l),this._halfBlur(u,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const v=3,y=this._lodMeshes[o];y.material=p;const g=p.uniforms,S=this._sizeLods[s]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*bs-1),P=l/T,_=isFinite(l)?1+Math.floor(v*P):bs;_>bs&&rt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${bs}`);const x=[];let C=0;for(let I=0;I<bs;++I){const b=I/P,U=Math.exp(-b*b/2);x.push(U),I===0?C+=U:I<_&&(C+=2*U)}for(let I=0;I<x.length;I++)x[I]=x[I]/C;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=x,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:D}=this;g.dTheta.value=T,g.mipInt.value=D-s;const L=this._sizeLods[o],O=3*L*(o>D-Zr?o-D+Zr:0),R=4*(this._cubeSize-L);va(t,O,R,3*L,2*L),h.setRenderTarget(t),h.render(y,mo)}}function l1(r){const e=[],t=[],s=[];let o=r;const l=r-Zr+1+Rg.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>r-Zr?h=Rg[u-r+Zr-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,y=1+p,g=[v,v,y,v,y,y,v,v,y,y,v,y],S=6,T=6,P=3,_=2,x=1,C=new Float32Array(P*T*S),D=new Float32Array(_*T*S),L=new Float32Array(x*T*S);for(let R=0;R<S;R++){const I=R%3*2/3-1,b=R>2?0:-1,U=[I,b,0,I+2/3,b,0,I+2/3,b+1,0,I,b,0,I+2/3,b+1,0,I,b+1,0];C.set(U,P*T*R),D.set(g,_*T*R);const X=[R,R,R,R,R,R];L.set(X,x*T*R)}const O=new qn;O.setAttribute("position",new Li(C,P)),O.setAttribute("uv",new Li(D,_)),O.setAttribute("faceIndex",new Li(L,x)),s.push(new qi(O,null)),o>Zr&&o--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function Lg(r,e,t){const s=new Xi(r,e,t);return s.texture.mapping=Tc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function va(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function c1(r,e,t){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:a1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function u1(r,e,t){const s=new Float32Array(bs),o=new J(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Dg(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Ig(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Ac(){return`

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
	`}class F0 extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new C0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Lo(5,5,5),l=new Yi({name:"CubemapFromEquirect",uniforms:ba(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:xr});l.uniforms.tEquirect.value=t;const u=new qi(o,l),f=t.minFilter;return t.minFilter===ws&&(t.minFilter=Cn),new gy(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}function d1(r){let e=new WeakMap,t=new WeakMap,s=null;function o(g,S=!1){return g==null?null:S?u(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===fd||S===hd)if(e.has(g)){const T=e.get(g).texture;return f(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const P=new F0(T.height);return P.fromEquirectangularTexture(r,g),e.set(g,P),g.addEventListener("dispose",p),f(P.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,T=S===fd||S===hd,P=S===Cs||S===Ma;if(T||P){let _=t.get(g);const x=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new Ng(r)),_=T?s.fromEquirectangular(g,_):s.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,t.set(g,_),_.texture;if(_!==void 0)return _.texture;{const C=g.image;return T&&C&&C.height>0||P&&C&&h(C)?(s===null&&(s=new Ng(r)),_=T?s.fromEquirectangular(g):s.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,t.set(g,_),g.addEventListener("dispose",v),_.texture):null}}}return g}function f(g,S){return S===fd?g.mapping=Cs:S===hd&&(g.mapping=Ma),g}function h(g){let S=0;const T=6;for(let P=0;P<T;P++)g[P]!==void 0&&S++;return S===T}function p(g){const S=g.target;S.removeEventListener("dispose",p);const T=e.get(S);T!==void 0&&(e.delete(S),T.dispose())}function v(g){const S=g.target;S.removeEventListener("dispose",v);const T=t.get(S);T!==void 0&&(t.delete(S),T.dispose())}function y(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:y}}function f1(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&zf("WebGLRenderer: "+s+" extension not supported."),o}}}function h1(r,e,t,s){const o={},l=new WeakMap;function u(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",u),delete o[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(y,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function h(y){const g=y.attributes;for(const S in g)e.update(g[S],r.ARRAY_BUFFER)}function p(y){const g=[],S=y.index,T=y.attributes.position;let P=0;if(T===void 0)return;if(S!==null){const C=S.array;P=S.version;for(let D=0,L=C.length;D<L;D+=3){const O=C[D+0],R=C[D+1],I=C[D+2];g.push(O,R,R,I,I,O)}}else{const C=T.array;P=T.version;for(let D=0,L=C.length/3-1;D<L;D+=3){const O=D+0,R=D+1,I=D+2;g.push(O,R,R,I,I,O)}}const _=new(T.count>=65535?b0:E0)(g,1);_.version=P;const x=l.get(y);x&&e.remove(x),l.set(y,_)}function v(y){const g=l.get(y);if(g){const S=y.index;S!==null&&g.version<S.version&&p(y)}else p(y);return l.get(y)}return{get:f,update:h,getWireframeAttribute:v}}function p1(r,e,t){let s;function o(y){s=y}let l,u;function f(y){l=y.type,u=y.bytesPerElement}function h(y,g){r.drawElements(s,g,l,y*u),t.update(g,s,1)}function p(y,g,S){S!==0&&(r.drawElementsInstanced(s,g,l,y*u,S),t.update(g,s,S))}function v(y,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,l,y,0,S);let P=0;for(let _=0;_<S;_++)P+=g[_];t.update(P,s,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function m1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:wt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function g1(r,e,t){const s=new WeakMap,o=new tn;function l(u,f,h){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=v!==void 0?v.length:0;let g=s.get(f);if(g===void 0||g.count!==y){let X=function(){b.dispose(),s.delete(f),f.removeEventListener("dispose",X)};var S=X;g!==void 0&&g.texture.dispose();const T=f.morphAttributes.position!==void 0,P=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let L=0;T===!0&&(L=1),P===!0&&(L=2),_===!0&&(L=3);let O=f.attributes.position.count*L,R=1;O>e.maxTextureSize&&(R=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const I=new Float32Array(O*R*4*y),b=new y0(I,O,R,y);b.type=Gi,b.needsUpdate=!0;const U=L*4;for(let z=0;z<y;z++){const Y=x[z],oe=C[z],le=D[z],G=O*R*4*z;for(let Q=0;Q<Y.count;Q++){const q=Q*U;T===!0&&(o.fromBufferAttribute(Y,Q),I[G+q+0]=o.x,I[G+q+1]=o.y,I[G+q+2]=o.z,I[G+q+3]=0),P===!0&&(o.fromBufferAttribute(oe,Q),I[G+q+4]=o.x,I[G+q+5]=o.y,I[G+q+6]=o.z,I[G+q+7]=0),_===!0&&(o.fromBufferAttribute(le,Q),I[G+q+8]=o.x,I[G+q+9]=o.y,I[G+q+10]=o.z,I[G+q+11]=le.itemSize===4?o.w:1)}}g={count:y,texture:b,size:new Ct(O,R)},s.set(f,g),f.addEventListener("dispose",X)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let T=0;for(let _=0;_<p.length;_++)T+=p[_];const P=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(r,"morphTargetBaseInfluence",P),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:l}}function x1(r,e,t,s,o){let l=new WeakMap;function u(p){const v=o.render.frame,y=p.geometry,g=e.get(p,y);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==v&&(S.update(),l.set(S,v))}return g}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),s.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const v1={[r0]:"LINEAR_TONE_MAPPING",[s0]:"REINHARD_TONE_MAPPING",[a0]:"CINEON_TONE_MAPPING",[o0]:"ACES_FILMIC_TONE_MAPPING",[c0]:"AGX_TONE_MAPPING",[u0]:"NEUTRAL_TONE_MAPPING",[l0]:"CUSTOM_TONE_MAPPING"};function _1(r,e,t,s,o){const l=new Xi(e,t,{type:r,depthBuffer:s,stencilBuffer:o,depthTexture:s?new Ea(e,t):void 0}),u=new Xi(e,t,{type:_r,depthBuffer:!1,stencilBuffer:!1}),f=new qn;f.setAttribute("position",new ri([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ri([0,2,0,0,2,0],2));const h=new cy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new qi(f,h),v=new D0(-1,1,1,-1,0,1);let y=null,g=null,S=!1,T,P=null,_=[],x=!1;this.setSize=function(C,D){l.setSize(C,D),u.setSize(C,D);for(let L=0;L<_.length;L++){const O=_[L];O.setSize&&O.setSize(C,D)}},this.setEffects=function(C){_=C,x=_.length>0&&_[0].isRenderPass===!0;const D=l.width,L=l.height;for(let O=0;O<_.length;O++){const R=_[O];R.setSize&&R.setSize(D,L)}},this.begin=function(C,D){if(S||C.toneMapping===ji&&_.length===0)return!1;if(P=D,D!==null){const L=D.width,O=D.height;(l.width!==L||l.height!==O)&&this.setSize(L,O)}return x===!1&&C.setRenderTarget(l),T=C.toneMapping,C.toneMapping=ji,!0},this.hasRenderPass=function(){return x},this.end=function(C,D){C.toneMapping=T,S=!0;let L=l,O=u;for(let R=0;R<_.length;R++){const I=_[R];if(I.enabled!==!1&&(I.render(C,O,L,D),I.needsSwap!==!1)){const b=L;L=O,O=b}}if(y!==C.outputColorSpace||g!==C.toneMapping){y=C.outputColorSpace,g=C.toneMapping,h.defines={},Mt.getTransfer(y)===Ot&&(h.defines.SRGB_TRANSFER="");const R=v1[g];R&&(h.defines[R]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(P),C.render(p,v),P=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const k0=new In,Gf=new Ea(1,1),O0=new y0,B0=new U_,z0=new C0,Ug=[],Fg=[],kg=new Float32Array(16),Og=new Float32Array(9),Bg=new Float32Array(4);function Aa(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=Ug[o];if(l===void 0&&(l=new Float32Array(o),Ug[o]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function un(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function dn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Cc(r,e){let t=Fg[e];t===void 0&&(t=new Int32Array(e),Fg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function y1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function S1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2fv(this.addr,e),dn(t,e)}}function M1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;r.uniform3fv(this.addr,e),dn(t,e)}}function E1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4fv(this.addr,e),dn(t,e)}}function b1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(un(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(un(t,s))return;Bg.set(s),r.uniformMatrix2fv(this.addr,!1,Bg),dn(t,s)}}function T1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(un(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(un(t,s))return;Og.set(s),r.uniformMatrix3fv(this.addr,!1,Og),dn(t,s)}}function w1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(un(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(un(t,s))return;kg.set(s),r.uniformMatrix4fv(this.addr,!1,kg),dn(t,s)}}function A1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function C1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2iv(this.addr,e),dn(t,e)}}function R1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3iv(this.addr,e),dn(t,e)}}function P1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4iv(this.addr,e),dn(t,e)}}function N1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function L1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2uiv(this.addr,e),dn(t,e)}}function D1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3uiv(this.addr,e),dn(t,e)}}function I1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4uiv(this.addr,e),dn(t,e)}}function U1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(Gf.compareFunction=t.isReversedDepthBuffer()?ih:nh,l=Gf):l=k0,t.setTexture2D(e||l,o)}function F1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||B0,o)}function k1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||z0,o)}function O1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||O0,o)}function B1(r){switch(r){case 5126:return y1;case 35664:return S1;case 35665:return M1;case 35666:return E1;case 35674:return b1;case 35675:return T1;case 35676:return w1;case 5124:case 35670:return A1;case 35667:case 35671:return C1;case 35668:case 35672:return R1;case 35669:case 35673:return P1;case 5125:return N1;case 36294:return L1;case 36295:return D1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return O1}}function z1(r,e){r.uniform1fv(this.addr,e)}function V1(r,e){const t=Aa(e,this.size,2);r.uniform2fv(this.addr,t)}function H1(r,e){const t=Aa(e,this.size,3);r.uniform3fv(this.addr,t)}function G1(r,e){const t=Aa(e,this.size,4);r.uniform4fv(this.addr,t)}function W1(r,e){const t=Aa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function j1(r,e){const t=Aa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function X1(r,e){const t=Aa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function $1(r,e){r.uniform1iv(this.addr,e)}function q1(r,e){r.uniform2iv(this.addr,e)}function Y1(r,e){r.uniform3iv(this.addr,e)}function K1(r,e){r.uniform4iv(this.addr,e)}function Z1(r,e){r.uniform1uiv(this.addr,e)}function Q1(r,e){r.uniform2uiv(this.addr,e)}function J1(r,e){r.uniform3uiv(this.addr,e)}function eE(r,e){r.uniform4uiv(this.addr,e)}function tE(r,e,t){const s=this.cache,o=e.length,l=Cc(t,o);un(s,l)||(r.uniform1iv(this.addr,l),dn(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=Gf:u=k0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function nE(r,e,t){const s=this.cache,o=e.length,l=Cc(t,o);un(s,l)||(r.uniform1iv(this.addr,l),dn(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||B0,l[u])}function iE(r,e,t){const s=this.cache,o=e.length,l=Cc(t,o);un(s,l)||(r.uniform1iv(this.addr,l),dn(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||z0,l[u])}function rE(r,e,t){const s=this.cache,o=e.length,l=Cc(t,o);un(s,l)||(r.uniform1iv(this.addr,l),dn(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||O0,l[u])}function sE(r){switch(r){case 5126:return z1;case 35664:return V1;case 35665:return H1;case 35666:return G1;case 35674:return W1;case 35675:return j1;case 35676:return X1;case 5124:case 35670:return $1;case 35667:case 35671:return q1;case 35668:case 35672:return Y1;case 35669:case 35673:return K1;case 5125:return Z1;case 36294:return Q1;case 36295:return J1;case 36296:return eE;case 35678:case 36198:case 36298:case 36306:case 35682:return tE;case 35679:case 36299:case 36307:return nE;case 35680:case 36300:case 36308:case 36293:return iE;case 36289:case 36303:case 36311:case 36292:return rE}}class aE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=B1(t.type)}}class oE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sE(t.type)}}class lE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const jd=/(\w+)(\])?(\[|\.)?/g;function zg(r,e){r.seq.push(e),r.map[e.id]=e}function cE(r,e,t){const s=r.name,o=s.length;for(jd.lastIndex=0;;){const l=jd.exec(s),u=jd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){zg(t,p===void 0?new aE(f,r,e):new oE(f,r,e));break}else{let y=t.map[f];y===void 0&&(y=new lE(f),zg(t,y)),t=y}}}class hc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);cE(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function Vg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const uE=37297;let dE=0;function fE(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return s.join(`
`)}const Hg=new dt;function hE(r){Mt._getMatrix(Hg,Mt.workingColorSpace,r);const e=`mat3( ${Hg.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(r)){case xc:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Gg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+fE(r.getShaderSource(e),f)}else return l}function pE(r,e){const t=hE(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const mE={[r0]:"Linear",[s0]:"Reinhard",[a0]:"Cineon",[o0]:"ACESFilmic",[c0]:"AgX",[u0]:"Neutral",[l0]:"Custom"};function gE(r,e){const t=mE[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sc=new J;function xE(){Mt.getLuminanceCoefficients(sc);const r=sc.x.toFixed(4),e=sc.y.toFixed(4),t=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function _E(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function yE(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function yo(r){return r!==""}function Wg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wf(r){return r.replace(SE,EE)}const ME=new Map;function EE(r,e){let t=pt[e];if(t===void 0){const s=ME.get(e);if(s!==void 0)t=pt[s],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Wf(t)}const bE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xg(r){return r.replace(bE,TE)}function TE(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function $g(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const wE={[lc]:"SHADOWMAP_TYPE_PCF",[vo]:"SHADOWMAP_TYPE_VSM"};function AE(r){return wE[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CE={[Cs]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE",[Tc]:"ENVMAP_TYPE_CUBE_UV"};function RE(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":CE[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const PE={[Ma]:"ENVMAP_MODE_REFRACTION"};function NE(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":PE[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LE={[i0]:"ENVMAP_BLENDING_MULTIPLY",[p_]:"ENVMAP_BLENDING_MIX",[m_]:"ENVMAP_BLENDING_ADD"};function DE(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":LE[r.combine]||"ENVMAP_BLENDING_NONE"}function IE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function UE(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=AE(t),p=RE(t),v=NE(t),y=DE(t),g=IE(t),S=vE(t),T=_E(l),P=o.createProgram();let _,x,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(yo).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(yo).join(`
`),x.length>0&&(x+=`
`)):(_=[$g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),x=[$g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?pt.tonemapping_pars_fragment:"",t.toneMapping!==ji?gE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,pE("linearToOutputTexel",t.outputColorSpace),xE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yo).join(`
`)),u=Wf(u),u=Wg(u,t),u=jg(u,t),f=Wf(f),f=Wg(f,t),f=jg(f,t),u=Xg(u),f=Xg(f),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===eg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=C+_+u,L=C+x+f,O=Vg(o,o.VERTEX_SHADER,D),R=Vg(o,o.FRAGMENT_SHADER,L);o.attachShader(P,O),o.attachShader(P,R),t.index0AttributeName!==void 0?o.bindAttribLocation(P,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(P,0,"position"),o.linkProgram(P);function I(z){if(r.debug.checkShaderErrors){const Y=o.getProgramInfoLog(P)||"",oe=o.getShaderInfoLog(O)||"",le=o.getShaderInfoLog(R)||"",G=Y.trim(),Q=oe.trim(),q=le.trim();let V=!0,K=!0;if(o.getProgramParameter(P,o.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,P,O,R);else{const ae=Gg(o,O,"vertex"),k=Gg(o,R,"fragment");wt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(P,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+G+`
`+ae+`
`+k)}else G!==""?rt("WebGLProgram: Program Info Log:",G):(Q===""||q==="")&&(K=!1);K&&(z.diagnostics={runnable:V,programLog:G,vertexShader:{log:Q,prefix:_},fragmentShader:{log:q,prefix:x}})}o.deleteShader(O),o.deleteShader(R),b=new hc(o,P),U=yE(o,P)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(P,uE)),X},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(P),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dE++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=O,this.fragmentShader=R,this}let FE=0;class kE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new OE(e),t.set(e,s)),s}}class OE{constructor(e){this.id=FE++,this.code=e,this.usedTimes=0}}function BE(r){return r===Rs||r===pc||r===mc}function zE(r,e,t,s,o,l){const u=new S0,f=new kE,h=new Set,p=[],v=new Map,y=s.logarithmicDepthBuffer;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return h.add(b),b===0?"uv":`uv${b}`}function P(b,U,X,z,Y,oe){const le=z.fog,G=Y.geometry,Q=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,q=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,V=e.get(b.envMap||Q,q),K=V&&V.mapping===Tc?V.image.height:null,ae=S[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&rt("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const k=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ee=k!==void 0?k.length:0;let Ue=0;G.morphAttributes.position!==void 0&&(Ue=1),G.morphAttributes.normal!==void 0&&(Ue=2),G.morphAttributes.color!==void 0&&(Ue=3);let Ve,De,ue,_e;if(ae){const at=Hi[ae];Ve=at.vertexShader,De=at.fragmentShader}else Ve=b.vertexShader,De=b.fragmentShader,f.update(b),ue=f.getVertexShaderID(b),_e=f.getFragmentShaderID(b);const me=r.getRenderTarget(),Ie=r.state.buffers.depth.getReversed(),Ge=Y.isInstancedMesh===!0,Qe=Y.isBatchedMesh===!0,Dt=!!b.map,ut=!!b.matcap,_t=!!V,yt=!!b.aoMap,ft=!!b.lightMap,Ht=!!b.bumpMap,Bt=!!b.normalMap,Jt=!!b.displacementMap,j=!!b.emissiveMap,Nt=!!b.metalnessMap,ht=!!b.roughnessMap,Pt=b.anisotropy>0,be=b.clearcoat>0,It=b.dispersion>0,N=b.iridescence>0,E=b.sheen>0,Z=b.transmission>0,he=Pt&&!!b.anisotropyMap,xe=be&&!!b.clearcoatMap,we=be&&!!b.clearcoatNormalMap,Ne=be&&!!b.clearcoatRoughnessMap,de=N&&!!b.iridescenceMap,pe=N&&!!b.iridescenceThicknessMap,Fe=E&&!!b.sheenColorMap,Se=E&&!!b.sheenRoughnessMap,ge=!!b.specularMap,Me=!!b.specularColorMap,Je=!!b.specularIntensityMap,et=Z&&!!b.transmissionMap,st=Z&&!!b.thicknessMap,H=!!b.gradientMap,Ae=!!b.alphaMap,fe=b.alphaTest>0,Oe=!!b.alphaHash,Ce=!!b.extensions;let ve=ji;b.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ve=r.toneMapping);const je={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:Ve,fragmentShader:De,defines:b.defines,customVertexShaderID:ue,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&Y._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&Y.instanceColor!==null,instancingMorph:Ge&&Y.morphTexture!==null,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Dt,matcap:ut,envMap:_t,envMapMode:_t&&V.mapping,envMapCubeUVHeight:K,aoMap:yt,lightMap:ft,bumpMap:Ht,normalMap:Bt,displacementMap:Jt,emissiveMap:j,normalMapObjectSpace:Bt&&b.normalMapType===v_,normalMapTangentSpace:Bt&&b.normalMapType===Bf,packedNormalMap:Bt&&b.normalMapType===Bf&&BE(b.normalMap.format),metalnessMap:Nt,roughnessMap:ht,anisotropy:Pt,anisotropyMap:he,clearcoat:be,clearcoatMap:xe,clearcoatNormalMap:we,clearcoatRoughnessMap:Ne,dispersion:It,iridescence:N,iridescenceMap:de,iridescenceThicknessMap:pe,sheen:E,sheenColorMap:Fe,sheenRoughnessMap:Se,specularMap:ge,specularColorMap:Me,specularIntensityMap:Je,transmission:Z,transmissionMap:et,thicknessMap:st,gradientMap:H,opaque:b.transparent===!1&&b.blending===_a&&b.alphaToCoverage===!1,alphaMap:Ae,alphaTest:fe,alphaHash:Oe,combine:b.combine,mapUv:Dt&&T(b.map.channel),aoMapUv:yt&&T(b.aoMap.channel),lightMapUv:ft&&T(b.lightMap.channel),bumpMapUv:Ht&&T(b.bumpMap.channel),normalMapUv:Bt&&T(b.normalMap.channel),displacementMapUv:Jt&&T(b.displacementMap.channel),emissiveMapUv:j&&T(b.emissiveMap.channel),metalnessMapUv:Nt&&T(b.metalnessMap.channel),roughnessMapUv:ht&&T(b.roughnessMap.channel),anisotropyMapUv:he&&T(b.anisotropyMap.channel),clearcoatMapUv:xe&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:we&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Se&&T(b.sheenRoughnessMap.channel),specularMapUv:ge&&T(b.specularMap.channel),specularColorMapUv:Me&&T(b.specularColorMap.channel),specularIntensityMapUv:Je&&T(b.specularIntensityMap.channel),transmissionMapUv:et&&T(b.transmissionMap.channel),thicknessMapUv:st&&T(b.thicknessMap.channel),alphaMapUv:Ae&&T(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Bt||Pt),vertexNormals:!!G.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!G.attributes.uv&&(Dt||Ae),fog:!!le,useFog:b.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||G.attributes.normal===void 0&&Bt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ie,skinning:Y.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Ue,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:oe.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:ve,decodeVideoTexture:Dt&&b.map.isVideoTexture===!0&&Mt.getTransfer(b.map.colorSpace)===Ot,decodeVideoTextureEmissive:j&&b.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(b.emissiveMap.colorSpace)===Ot,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===hr,flipSided:b.side===$n,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ce&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&b.extensions.multiDraw===!0||Qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return je.vertexUv1s=h.has(1),je.vertexUv2s=h.has(2),je.vertexUv3s=h.has(3),h.clear(),je}function _(b){const U=[];if(b.shaderID?U.push(b.shaderID):(U.push(b.customVertexShaderID),U.push(b.customFragmentShaderID)),b.defines!==void 0)for(const X in b.defines)U.push(X),U.push(b.defines[X]);return b.isRawShaderMaterial===!1&&(x(U,b),C(U,b),U.push(r.outputColorSpace)),U.push(b.customProgramCacheKey),U.join()}function x(b,U){b.push(U.precision),b.push(U.outputColorSpace),b.push(U.envMapMode),b.push(U.envMapCubeUVHeight),b.push(U.mapUv),b.push(U.alphaMapUv),b.push(U.lightMapUv),b.push(U.aoMapUv),b.push(U.bumpMapUv),b.push(U.normalMapUv),b.push(U.displacementMapUv),b.push(U.emissiveMapUv),b.push(U.metalnessMapUv),b.push(U.roughnessMapUv),b.push(U.anisotropyMapUv),b.push(U.clearcoatMapUv),b.push(U.clearcoatNormalMapUv),b.push(U.clearcoatRoughnessMapUv),b.push(U.iridescenceMapUv),b.push(U.iridescenceThicknessMapUv),b.push(U.sheenColorMapUv),b.push(U.sheenRoughnessMapUv),b.push(U.specularMapUv),b.push(U.specularColorMapUv),b.push(U.specularIntensityMapUv),b.push(U.transmissionMapUv),b.push(U.thicknessMapUv),b.push(U.combine),b.push(U.fogExp2),b.push(U.sizeAttenuation),b.push(U.morphTargetsCount),b.push(U.morphAttributeCount),b.push(U.numDirLights),b.push(U.numPointLights),b.push(U.numSpotLights),b.push(U.numSpotLightMaps),b.push(U.numHemiLights),b.push(U.numRectAreaLights),b.push(U.numDirLightShadows),b.push(U.numPointLightShadows),b.push(U.numSpotLightShadows),b.push(U.numSpotLightShadowsWithMaps),b.push(U.numLightProbes),b.push(U.shadowMapType),b.push(U.toneMapping),b.push(U.numClippingPlanes),b.push(U.numClipIntersection),b.push(U.depthPacking)}function C(b,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),b.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),b.push(u.mask)}function D(b){const U=S[b.type];let X;if(U){const z=Hi[U];X=ay.clone(z.uniforms)}else X=b.uniforms;return X}function L(b,U){let X=v.get(U);return X!==void 0?++X.usedTimes:(X=new UE(r,U,b,o),p.push(X),v.set(U,X)),X}function O(b){if(--b.usedTimes===0){const U=p.indexOf(b);p[U]=p[p.length-1],p.pop(),v.delete(b.cacheKey),b.destroy()}}function R(b){f.remove(b)}function I(){f.dispose()}return{getParameters:P,getProgramCacheKey:_,getUniforms:D,acquireProgram:L,releaseProgram:O,releaseShaderCache:R,programs:p,dispose:I}}function VE(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function o(u,f,h){r.get(u)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function HE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function qg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Yg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function f(g,S,T,P,_,x){let C=r[e];return C===void 0?(C={id:g.id,object:g,geometry:S,material:T,materialVariant:u(g),groupOrder:P,renderOrder:g.renderOrder,z:_,group:x},r[e]=C):(C.id=g.id,C.object=g,C.geometry=S,C.material=T,C.materialVariant=u(g),C.groupOrder=P,C.renderOrder=g.renderOrder,C.z=_,C.group=x),e++,C}function h(g,S,T,P,_,x){const C=f(g,S,T,P,_,x);T.transmission>0?s.push(C):T.transparent===!0?o.push(C):t.push(C)}function p(g,S,T,P,_,x){const C=f(g,S,T,P,_,x);T.transmission>0?s.unshift(C):T.transparent===!0?o.unshift(C):t.unshift(C)}function v(g,S){t.length>1&&t.sort(g||HE),s.length>1&&s.sort(S||qg),o.length>1&&o.sort(S||qg)}function y(){for(let g=e,S=r.length;g<S;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:h,unshift:p,finish:y,sort:v}}function GE(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new Yg,r.set(s,[u])):o>=l.length?(u=new Yg,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function WE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new At};break;case"SpotLight":t={position:new J,direction:new J,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=t,t}}}function jE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let XE=0;function $E(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function qE(r){const e=new WE,t=jE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const o=new J,l=new Yt,u=new Yt;function f(p){let v=0,y=0,g=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let S=0,T=0,P=0,_=0,x=0,C=0,D=0,L=0,O=0,R=0,I=0;p.sort($E);for(let U=0,X=p.length;U<X;U++){const z=p[U],Y=z.color,oe=z.intensity,le=z.distance;let G=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Rs?G=z.shadow.map.texture:G=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)v+=Y.r*oe,y+=Y.g*oe,g+=Y.b*oe;else if(z.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(z.sh.coefficients[Q],oe);I++}else if(z.isDirectionalLight){const Q=e.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const q=z.shadow,V=t.get(z);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,s.directionalShadow[S]=V,s.directionalShadowMap[S]=G,s.directionalShadowMatrix[S]=z.shadow.matrix,C++}s.directional[S]=Q,S++}else if(z.isSpotLight){const Q=e.get(z);Q.position.setFromMatrixPosition(z.matrixWorld),Q.color.copy(Y).multiplyScalar(oe),Q.distance=le,Q.coneCos=Math.cos(z.angle),Q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Q.decay=z.decay,s.spot[P]=Q;const q=z.shadow;if(z.map&&(s.spotLightMap[O]=z.map,O++,q.updateMatrices(z),z.castShadow&&R++),s.spotLightMatrix[P]=q.matrix,z.castShadow){const V=t.get(z);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,s.spotShadow[P]=V,s.spotShadowMap[P]=G,L++}P++}else if(z.isRectAreaLight){const Q=e.get(z);Q.color.copy(Y).multiplyScalar(oe),Q.halfWidth.set(z.width*.5,0,0),Q.halfHeight.set(0,z.height*.5,0),s.rectArea[_]=Q,_++}else if(z.isPointLight){const Q=e.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),Q.distance=z.distance,Q.decay=z.decay,z.castShadow){const q=z.shadow,V=t.get(z);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,s.pointShadow[T]=V,s.pointShadowMap[T]=G,s.pointShadowMatrix[T]=z.shadow.matrix,D++}s.point[T]=Q,T++}else if(z.isHemisphereLight){const Q=e.get(z);Q.skyColor.copy(z.color).multiplyScalar(oe),Q.groundColor.copy(z.groundColor).multiplyScalar(oe),s.hemi[x]=Q,x++}}_>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ke.LTC_FLOAT_1,s.rectAreaLTC2=ke.LTC_FLOAT_2):(s.rectAreaLTC1=ke.LTC_HALF_1,s.rectAreaLTC2=ke.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=y,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==S||b.pointLength!==T||b.spotLength!==P||b.rectAreaLength!==_||b.hemiLength!==x||b.numDirectionalShadows!==C||b.numPointShadows!==D||b.numSpotShadows!==L||b.numSpotMaps!==O||b.numLightProbes!==I)&&(s.directional.length=S,s.spot.length=P,s.rectArea.length=_,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=L+O-R,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=R,s.numLightProbes=I,b.directionalLength=S,b.pointLength=T,b.spotLength=P,b.rectAreaLength=_,b.hemiLength=x,b.numDirectionalShadows=C,b.numPointShadows=D,b.numSpotShadows=L,b.numSpotMaps=O,b.numLightProbes=I,s.version=XE++)}function h(p,v){let y=0,g=0,S=0,T=0,P=0;const _=v.matrixWorldInverse;for(let x=0,C=p.length;x<C;x++){const D=p[x];if(D.isDirectionalLight){const L=s.directional[y];L.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(_),y++}else if(D.isSpotLight){const L=s.spot[S];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(_),L.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(_),S++}else if(D.isRectAreaLight){const L=s.rectArea[T];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(_),u.identity(),l.copy(D.matrixWorld),l.premultiply(_),u.extractRotation(l),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),T++}else if(D.isPointLight){const L=s.point[g];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(_),g++}else if(D.isHemisphereLight){const L=s.hemi[P];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(_),P++}}}return{setup:f,setupView:h,state:s}}function Kg(r){const e=new qE(r),t=[],s=[],o=[];function l(g){y.camera=g,t.length=0,s.length=0,o.length=0}function u(g){t.push(g)}function f(g){s.push(g)}function h(g){o.push(g)}function p(){e.setup(t)}function v(g){e.setupView(t,g)}const y={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function YE(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Kg(r),e.set(o,[f])):l>=u.length?(f=new Kg(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const KE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZE=`uniform sampler2D shadow_pass;
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
}`,QE=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],JE=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Zg=new Yt,go=new J,Xd=new J;function eb(r,e,t){let s=new ah;const o=new Ct,l=new Ct,u=new tn,f=new dy,h=new fy,p={},v=t.maxTextureSize,y={[Jr]:$n,[$n]:Jr,[hr]:hr},g=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:KE,fragmentShader:ZE}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const T=new qn;T.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new qi(T,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lc;let x=this.type;this.render=function(R,I,b){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;this.type===Yv&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=lc);const U=r.getRenderTarget(),X=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(xr),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const oe=x!==this.type;oe&&I.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(G=>G.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,G=R.length;le<G;le++){const Q=R[le],q=Q.shadow;if(q===void 0){rt("WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const V=q.getFrameExtents();o.multiply(V),l.copy(q.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/V.x),o.x=l.x*V.x,q.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/V.y),o.y=l.y*V.y,q.mapSize.y=l.y));const K=r.state.buffers.depth.getReversed();if(q.camera._reversedDepth=K,q.map===null||oe===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===vo){if(Q.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Xi(o.x,o.y,{format:Rs,type:_r,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),q.map.texture.name=Q.name+".shadowMap",q.map.depthTexture=new Ea(o.x,o.y,Gi),q.map.depthTexture.name=Q.name+".shadowMapDepth",q.map.depthTexture.format=yr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Sn,q.map.depthTexture.magFilter=Sn}else Q.isPointLight?(q.map=new F0(o.x),q.map.depthTexture=new ny(o.x,$i)):(q.map=new Xi(o.x,o.y),q.map.depthTexture=new Ea(o.x,o.y,$i)),q.map.depthTexture.name=Q.name+".shadowMap",q.map.depthTexture.format=yr,this.type===lc?(q.map.depthTexture.compareFunction=K?ih:nh,q.map.depthTexture.minFilter=Cn,q.map.depthTexture.magFilter=Cn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Sn,q.map.depthTexture.magFilter=Sn);q.camera.updateProjectionMatrix()}const ae=q.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<ae;k++){if(q.map.isWebGLCubeRenderTarget)r.setRenderTarget(q.map,k),r.clear();else{k===0&&(r.setRenderTarget(q.map),r.clear());const ee=q.getViewport(k);u.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),Y.viewport(u)}if(Q.isPointLight){const ee=q.camera,Ue=q.matrix,Ve=Q.distance||ee.far;Ve!==ee.far&&(ee.far=Ve,ee.updateProjectionMatrix()),go.setFromMatrixPosition(Q.matrixWorld),ee.position.copy(go),Xd.copy(ee.position),Xd.add(QE[k]),ee.up.copy(JE[k]),ee.lookAt(Xd),ee.updateMatrixWorld(),Ue.makeTranslation(-go.x,-go.y,-go.z),Zg.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Zg,ee.coordinateSystem,ee.reversedDepth)}else q.updateMatrices(Q);s=q.getFrustum(),L(I,b,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===vo&&C(q,b),q.needsUpdate=!1}x=this.type,_.needsUpdate=!1,r.setRenderTarget(U,X,z)};function C(R,I){const b=e.update(P);g.defines.VSM_SAMPLES!==R.blurSamples&&(g.defines.VSM_SAMPLES=R.blurSamples,S.defines.VSM_SAMPLES=R.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Xi(o.x,o.y,{format:Rs,type:_r})),g.uniforms.shadow_pass.value=R.map.depthTexture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(I,null,b,g,P,null),S.uniforms.shadow_pass.value=R.mapPass.texture,S.uniforms.resolution.value=R.mapSize,S.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(I,null,b,S,P,null)}function D(R,I,b,U){let X=null;const z=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)X=z;else if(X=b.isPointLight===!0?h:f,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Y=X.uuid,oe=I.uuid;let le=p[Y];le===void 0&&(le={},p[Y]=le);let G=le[oe];G===void 0&&(G=X.clone(),le[oe]=G,I.addEventListener("dispose",O)),X=G}if(X.visible=I.visible,X.wireframe=I.wireframe,U===vo?X.side=I.shadowSide!==null?I.shadowSide:I.side:X.side=I.shadowSide!==null?I.shadowSide:y[I.side],X.alphaMap=I.alphaMap,X.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,X.map=I.map,X.clipShadows=I.clipShadows,X.clippingPlanes=I.clippingPlanes,X.clipIntersection=I.clipIntersection,X.displacementMap=I.displacementMap,X.displacementScale=I.displacementScale,X.displacementBias=I.displacementBias,X.wireframeLinewidth=I.wireframeLinewidth,X.linewidth=I.linewidth,b.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const Y=r.properties.get(X);Y.light=b}return X}function L(R,I,b,U,X){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&X===vo)&&(!R.frustumCulled||s.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);const oe=e.update(R),le=R.material;if(Array.isArray(le)){const G=oe.groups;for(let Q=0,q=G.length;Q<q;Q++){const V=G[Q],K=le[V.materialIndex];if(K&&K.visible){const ae=D(R,K,U,X);R.onBeforeShadow(r,R,I,b,oe,ae,V),r.renderBufferDirect(b,null,oe,ae,R,V),R.onAfterShadow(r,R,I,b,oe,ae,V)}}}else if(le.visible){const G=D(R,le,U,X);R.onBeforeShadow(r,R,I,b,oe,G,null),r.renderBufferDirect(b,null,oe,G,R,null),R.onAfterShadow(r,R,I,b,oe,G,null)}}const Y=R.children;for(let oe=0,le=Y.length;oe<le;oe++)L(Y[oe],I,b,U,X)}function O(R){R.target.removeEventListener("dispose",O);for(const b in p){const U=p[b],X=R.target.uuid;X in U&&(U[X].dispose(),delete U[X])}}}function tb(r,e){function t(){let H=!1;const Ae=new tn;let fe=null;const Oe=new tn(0,0,0,0);return{setMask:function(Ce){fe!==Ce&&!H&&(r.colorMask(Ce,Ce,Ce,Ce),fe=Ce)},setLocked:function(Ce){H=Ce},setClear:function(Ce,ve,je,at,Ut){Ut===!0&&(Ce*=at,ve*=at,je*=at),Ae.set(Ce,ve,je,at),Oe.equals(Ae)===!1&&(r.clearColor(Ce,ve,je,at),Oe.copy(Ae))},reset:function(){H=!1,fe=null,Oe.set(-1,0,0,0)}}}function s(){let H=!1,Ae=!1,fe=null,Oe=null,Ce=null;return{setReversed:function(ve){if(Ae!==ve){const je=e.get("EXT_clip_control");ve?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Ae=ve;const at=Ce;Ce=null,this.setClear(at)}},getReversed:function(){return Ae},setTest:function(ve){ve?me(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(ve){fe!==ve&&!H&&(r.depthMask(ve),fe=ve)},setFunc:function(ve){if(Ae&&(ve=C_[ve]),Oe!==ve){switch(ve){case Jd:r.depthFunc(r.NEVER);break;case ef:r.depthFunc(r.ALWAYS);break;case tf:r.depthFunc(r.LESS);break;case Sa:r.depthFunc(r.LEQUAL);break;case nf:r.depthFunc(r.EQUAL);break;case rf:r.depthFunc(r.GEQUAL);break;case sf:r.depthFunc(r.GREATER);break;case af:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Oe=ve}},setLocked:function(ve){H=ve},setClear:function(ve){Ce!==ve&&(Ce=ve,Ae&&(ve=1-ve),r.clearDepth(ve))},reset:function(){H=!1,fe=null,Oe=null,Ce=null,Ae=!1}}}function o(){let H=!1,Ae=null,fe=null,Oe=null,Ce=null,ve=null,je=null,at=null,Ut=null;return{setTest:function(St){H||(St?me(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(St){Ae!==St&&!H&&(r.stencilMask(St),Ae=St)},setFunc:function(St,fn,Un){(fe!==St||Oe!==fn||Ce!==Un)&&(r.stencilFunc(St,fn,Un),fe=St,Oe=fn,Ce=Un)},setOp:function(St,fn,Un){(ve!==St||je!==fn||at!==Un)&&(r.stencilOp(St,fn,Un),ve=St,je=fn,at=Un)},setLocked:function(St){H=St},setClear:function(St){Ut!==St&&(r.clearStencil(St),Ut=St)},reset:function(){H=!1,Ae=null,fe=null,Oe=null,Ce=null,ve=null,je=null,at=null,Ut=null}}}const l=new t,u=new s,f=new o,h=new WeakMap,p=new WeakMap;let v={},y={},g={},S=new WeakMap,T=[],P=null,_=!1,x=null,C=null,D=null,L=null,O=null,R=null,I=null,b=new At(0,0,0),U=0,X=!1,z=null,Y=null,oe=null,le=null,G=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,V=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=V>=1):K.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=V>=2);let ae=null,k={};const ee=r.getParameter(r.SCISSOR_BOX),Ue=r.getParameter(r.VIEWPORT),Ve=new tn().fromArray(ee),De=new tn().fromArray(Ue);function ue(H,Ae,fe,Oe){const Ce=new Uint8Array(4),ve=r.createTexture();r.bindTexture(H,ve),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<fe;je++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(Ae,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,Ce):r.texImage2D(Ae+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ce);return ve}const _e={};_e[r.TEXTURE_2D]=ue(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),me(r.DEPTH_TEST),u.setFunc(Sa),Ht(!1),Bt(qm),me(r.CULL_FACE),yt(xr);function me(H){v[H]!==!0&&(r.enable(H),v[H]=!0)}function Ie(H){v[H]!==!1&&(r.disable(H),v[H]=!1)}function Ge(H,Ae){return g[H]!==Ae?(r.bindFramebuffer(H,Ae),g[H]=Ae,H===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ae),H===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Qe(H,Ae){let fe=T,Oe=!1;if(H){fe=S.get(Ae),fe===void 0&&(fe=[],S.set(Ae,fe));const Ce=H.textures;if(fe.length!==Ce.length||fe[0]!==r.COLOR_ATTACHMENT0){for(let ve=0,je=Ce.length;ve<je;ve++)fe[ve]=r.COLOR_ATTACHMENT0+ve;fe.length=Ce.length,Oe=!0}}else fe[0]!==r.BACK&&(fe[0]=r.BACK,Oe=!0);Oe&&r.drawBuffers(fe)}function Dt(H){return P!==H?(r.useProgram(H),P=H,!0):!1}const ut={[Es]:r.FUNC_ADD,[Zv]:r.FUNC_SUBTRACT,[Qv]:r.FUNC_REVERSE_SUBTRACT};ut[Jv]=r.MIN,ut[e_]=r.MAX;const _t={[t_]:r.ZERO,[n_]:r.ONE,[i_]:r.SRC_COLOR,[Zd]:r.SRC_ALPHA,[c_]:r.SRC_ALPHA_SATURATE,[o_]:r.DST_COLOR,[s_]:r.DST_ALPHA,[r_]:r.ONE_MINUS_SRC_COLOR,[Qd]:r.ONE_MINUS_SRC_ALPHA,[l_]:r.ONE_MINUS_DST_COLOR,[a_]:r.ONE_MINUS_DST_ALPHA,[u_]:r.CONSTANT_COLOR,[d_]:r.ONE_MINUS_CONSTANT_COLOR,[f_]:r.CONSTANT_ALPHA,[h_]:r.ONE_MINUS_CONSTANT_ALPHA};function yt(H,Ae,fe,Oe,Ce,ve,je,at,Ut,St){if(H===xr){_===!0&&(Ie(r.BLEND),_=!1);return}if(_===!1&&(me(r.BLEND),_=!0),H!==Kv){if(H!==x||St!==X){if((C!==Es||O!==Es)&&(r.blendEquation(r.FUNC_ADD),C=Es,O=Es),St)switch(H){case _a:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ym:r.blendFunc(r.ONE,r.ONE);break;case Km:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:wt("WebGLState: Invalid blending: ",H);break}else switch(H){case _a:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ym:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Km:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zm:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",H);break}D=null,L=null,R=null,I=null,b.set(0,0,0),U=0,x=H,X=St}return}Ce=Ce||Ae,ve=ve||fe,je=je||Oe,(Ae!==C||Ce!==O)&&(r.blendEquationSeparate(ut[Ae],ut[Ce]),C=Ae,O=Ce),(fe!==D||Oe!==L||ve!==R||je!==I)&&(r.blendFuncSeparate(_t[fe],_t[Oe],_t[ve],_t[je]),D=fe,L=Oe,R=ve,I=je),(at.equals(b)===!1||Ut!==U)&&(r.blendColor(at.r,at.g,at.b,Ut),b.copy(at),U=Ut),x=H,X=!1}function ft(H,Ae){H.side===hr?Ie(r.CULL_FACE):me(r.CULL_FACE);let fe=H.side===$n;Ae&&(fe=!fe),Ht(fe),H.blending===_a&&H.transparent===!1?yt(xr):yt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const Oe=H.stencilWrite;f.setTest(Oe),Oe&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),j(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(H){z!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),z=H)}function Bt(H){H!==$v?(me(r.CULL_FACE),H!==Y&&(H===qm?r.cullFace(r.BACK):H===qv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),Y=H}function Jt(H){H!==oe&&(q&&r.lineWidth(H),oe=H)}function j(H,Ae,fe){H?(me(r.POLYGON_OFFSET_FILL),(le!==Ae||G!==fe)&&(le=Ae,G=fe,u.getReversed()&&(Ae=-Ae),r.polygonOffset(Ae,fe))):Ie(r.POLYGON_OFFSET_FILL)}function Nt(H){H?me(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function ht(H){H===void 0&&(H=r.TEXTURE0+Q-1),ae!==H&&(r.activeTexture(H),ae=H)}function Pt(H,Ae,fe){fe===void 0&&(ae===null?fe=r.TEXTURE0+Q-1:fe=ae);let Oe=k[fe];Oe===void 0&&(Oe={type:void 0,texture:void 0},k[fe]=Oe),(Oe.type!==H||Oe.texture!==Ae)&&(ae!==fe&&(r.activeTexture(fe),ae=fe),r.bindTexture(H,Ae||_e[H]),Oe.type=H,Oe.texture=Ae)}function be(){const H=k[ae];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function It(){try{r.compressedTexImage2D(...arguments)}catch(H){wt("WebGLState:",H)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(H){wt("WebGLState:",H)}}function E(){try{r.texSubImage2D(...arguments)}catch(H){wt("WebGLState:",H)}}function Z(){try{r.texSubImage3D(...arguments)}catch(H){wt("WebGLState:",H)}}function he(){try{r.compressedTexSubImage2D(...arguments)}catch(H){wt("WebGLState:",H)}}function xe(){try{r.compressedTexSubImage3D(...arguments)}catch(H){wt("WebGLState:",H)}}function we(){try{r.texStorage2D(...arguments)}catch(H){wt("WebGLState:",H)}}function Ne(){try{r.texStorage3D(...arguments)}catch(H){wt("WebGLState:",H)}}function de(){try{r.texImage2D(...arguments)}catch(H){wt("WebGLState:",H)}}function pe(){try{r.texImage3D(...arguments)}catch(H){wt("WebGLState:",H)}}function Fe(H){return y[H]!==void 0?y[H]:r.getParameter(H)}function Se(H,Ae){y[H]!==Ae&&(r.pixelStorei(H,Ae),y[H]=Ae)}function ge(H){Ve.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),Ve.copy(H))}function Me(H){De.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),De.copy(H))}function Je(H,Ae){let fe=p.get(Ae);fe===void 0&&(fe=new WeakMap,p.set(Ae,fe));let Oe=fe.get(H);Oe===void 0&&(Oe=r.getUniformBlockIndex(Ae,H.name),fe.set(H,Oe))}function et(H,Ae){const Oe=p.get(Ae).get(H);h.get(Ae)!==Oe&&(r.uniformBlockBinding(Ae,Oe,H.__bindingPointIndex),h.set(Ae,Oe))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},y={},ae=null,k={},g={},S=new WeakMap,T=[],P=null,_=!1,x=null,C=null,D=null,L=null,O=null,R=null,I=null,b=new At(0,0,0),U=0,X=!1,z=null,Y=null,oe=null,le=null,G=null,Ve.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:me,disable:Ie,bindFramebuffer:Ge,drawBuffers:Qe,useProgram:Dt,setBlending:yt,setMaterial:ft,setFlipSided:Ht,setCullFace:Bt,setLineWidth:Jt,setPolygonOffset:j,setScissorTest:Nt,activeTexture:ht,bindTexture:Pt,unbindTexture:be,compressedTexImage2D:It,compressedTexImage3D:N,texImage2D:de,texImage3D:pe,pixelStorei:Se,getParameter:Fe,updateUBOMapping:Je,uniformBlockBinding:et,texStorage2D:we,texStorage3D:Ne,texSubImage2D:E,texSubImage3D:Z,compressedTexSubImage2D:he,compressedTexSubImage3D:xe,scissor:ge,viewport:Me,reset:st}}function nb(r,e,t,s,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ct,v=new WeakMap,y=new Set;let g;const S=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(N,E){return T?new OffscreenCanvas(N,E):vc("canvas")}function _(N,E,Z){let he=1;const xe=It(N);if((xe.width>Z||xe.height>Z)&&(he=Z/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const we=Math.floor(he*xe.width),Ne=Math.floor(he*xe.height);g===void 0&&(g=P(we,Ne));const de=E?P(we,Ne):g;return de.width=we,de.height=Ne,de.getContext("2d").drawImage(N,0,0,we,Ne),rt("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+we+"x"+Ne+")."),de}else return"data"in N&&rt("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),N;return N}function x(N){return N.generateMipmaps}function C(N){r.generateMipmap(N)}function D(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(N,E,Z,he,xe,we=!1){if(N!==null){if(r[N]!==void 0)return r[N];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ne;he&&(Ne=e.get("EXT_texture_norm16"),Ne||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=E;if(E===r.RED&&(Z===r.FLOAT&&(de=r.R32F),Z===r.HALF_FLOAT&&(de=r.R16F),Z===r.UNSIGNED_BYTE&&(de=r.R8),Z===r.UNSIGNED_SHORT&&Ne&&(de=Ne.R16_EXT),Z===r.SHORT&&Ne&&(de=Ne.R16_SNORM_EXT)),E===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(de=r.R8UI),Z===r.UNSIGNED_SHORT&&(de=r.R16UI),Z===r.UNSIGNED_INT&&(de=r.R32UI),Z===r.BYTE&&(de=r.R8I),Z===r.SHORT&&(de=r.R16I),Z===r.INT&&(de=r.R32I)),E===r.RG&&(Z===r.FLOAT&&(de=r.RG32F),Z===r.HALF_FLOAT&&(de=r.RG16F),Z===r.UNSIGNED_BYTE&&(de=r.RG8),Z===r.UNSIGNED_SHORT&&Ne&&(de=Ne.RG16_EXT),Z===r.SHORT&&Ne&&(de=Ne.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(de=r.RG8UI),Z===r.UNSIGNED_SHORT&&(de=r.RG16UI),Z===r.UNSIGNED_INT&&(de=r.RG32UI),Z===r.BYTE&&(de=r.RG8I),Z===r.SHORT&&(de=r.RG16I),Z===r.INT&&(de=r.RG32I)),E===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(de=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(de=r.RGB16UI),Z===r.UNSIGNED_INT&&(de=r.RGB32UI),Z===r.BYTE&&(de=r.RGB8I),Z===r.SHORT&&(de=r.RGB16I),Z===r.INT&&(de=r.RGB32I)),E===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),Z===r.UNSIGNED_INT&&(de=r.RGBA32UI),Z===r.BYTE&&(de=r.RGBA8I),Z===r.SHORT&&(de=r.RGBA16I),Z===r.INT&&(de=r.RGBA32I)),E===r.RGB&&(Z===r.UNSIGNED_SHORT&&Ne&&(de=Ne.RGB16_EXT),Z===r.SHORT&&Ne&&(de=Ne.RGB16_SNORM_EXT),Z===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(de=r.R11F_G11F_B10F)),E===r.RGBA){const pe=we?xc:Mt.getTransfer(xe);Z===r.FLOAT&&(de=r.RGBA32F),Z===r.HALF_FLOAT&&(de=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(de=pe===Ot?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT&&Ne&&(de=Ne.RGBA16_EXT),Z===r.SHORT&&Ne&&(de=Ne.RGBA16_SNORM_EXT),Z===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function O(N,E){let Z;return N?E===null||E===$i||E===bo?Z=r.DEPTH24_STENCIL8:E===Gi?Z=r.DEPTH32F_STENCIL8:E===Eo&&(Z=r.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===$i||E===bo?Z=r.DEPTH_COMPONENT24:E===Gi?Z=r.DEPTH_COMPONENT32F:E===Eo&&(Z=r.DEPTH_COMPONENT16),Z}function R(N,E){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==Sn&&N.minFilter!==Cn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function I(N){const E=N.target;E.removeEventListener("dispose",I),U(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&y.delete(E)}function b(N){const E=N.target;E.removeEventListener("dispose",b),z(E)}function U(N){const E=s.get(N);if(E.__webglInit===void 0)return;const Z=N.source,he=S.get(Z);if(he){const xe=he[E.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&X(N),Object.keys(he).length===0&&S.delete(Z)}s.remove(N)}function X(N){const E=s.get(N);r.deleteTexture(E.__webglTexture);const Z=N.source,he=S.get(Z);delete he[E.__cacheKey],u.memory.textures--}function z(N){const E=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let xe=0;xe<E.__webglFramebuffer[he].length;xe++)r.deleteFramebuffer(E.__webglFramebuffer[he][xe]);else r.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)r.deleteFramebuffer(E.__webglFramebuffer[he]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=N.textures;for(let he=0,xe=Z.length;he<xe;he++){const we=s.get(Z[he]);we.__webglTexture&&(r.deleteTexture(we.__webglTexture),u.memory.textures--),s.remove(Z[he])}s.remove(N)}let Y=0;function oe(){Y=0}function le(){return Y}function G(N){Y=N}function Q(){const N=Y;return N>=o.maxTextures&&rt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),Y+=1,N}function q(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function V(N,E){const Z=s.get(N);if(N.isVideoTexture&&Pt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Z.__version!==N.version){const he=N.image;if(he===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(Z,N,E);return}}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+E)}function K(N,E){const Z=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){Ie(Z,N,E);return}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+E)}function ae(N,E){const Z=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){Ie(Z,N,E);return}t.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+E)}function k(N,E){const Z=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Z.__version!==N.version){Ge(Z,N,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+E)}const ee={[of]:r.REPEAT,[mr]:r.CLAMP_TO_EDGE,[lf]:r.MIRRORED_REPEAT},Ue={[Sn]:r.NEAREST,[g_]:r.NEAREST_MIPMAP_NEAREST,[Il]:r.NEAREST_MIPMAP_LINEAR,[Cn]:r.LINEAR,[pd]:r.LINEAR_MIPMAP_NEAREST,[ws]:r.LINEAR_MIPMAP_LINEAR},Ve={[__]:r.NEVER,[b_]:r.ALWAYS,[y_]:r.LESS,[nh]:r.LEQUAL,[S_]:r.EQUAL,[ih]:r.GEQUAL,[M_]:r.GREATER,[E_]:r.NOTEQUAL};function De(N,E){if(E.type===Gi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Cn||E.magFilter===pd||E.magFilter===Il||E.magFilter===ws||E.minFilter===Cn||E.minFilter===pd||E.minFilter===Il||E.minFilter===ws)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,ee[E.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,ee[E.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,ee[E.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,Ue[E.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,Ue[E.minFilter]),E.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,Ve[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Sn||E.minFilter!==Il&&E.minFilter!==ws||E.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ue(N,E){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",I));const he=E.source;let xe=S.get(he);xe===void 0&&(xe={},S.set(he,xe));const we=q(E);if(we!==N.__cacheKey){xe[we]===void 0&&(xe[we]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),xe[we].usedTimes++;const Ne=xe[N.__cacheKey];Ne!==void 0&&(xe[N.__cacheKey].usedTimes--,Ne.usedTimes===0&&X(E)),N.__cacheKey=we,N.__webglTexture=xe[we].texture}return Z}function _e(N,E,Z){return Math.floor(Math.floor(N/Z)/E)}function me(N,E,Z,he){const we=N.updateRanges;if(we.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Z,he,E.data);else{we.sort((Se,ge)=>Se.start-ge.start);let Ne=0;for(let Se=1;Se<we.length;Se++){const ge=we[Ne],Me=we[Se],Je=ge.start+ge.count,et=_e(Me.start,E.width,4),st=_e(ge.start,E.width,4);Me.start<=Je+1&&et===st&&_e(Me.start+Me.count-1,E.width,4)===et?ge.count=Math.max(ge.count,Me.start+Me.count-ge.start):(++Ne,we[Ne]=Me)}we.length=Ne+1;const de=t.getParameter(r.UNPACK_ROW_LENGTH),pe=t.getParameter(r.UNPACK_SKIP_PIXELS),Fe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Se=0,ge=we.length;Se<ge;Se++){const Me=we[Se],Je=Math.floor(Me.start/4),et=Math.ceil(Me.count/4),st=Je%E.width,H=Math.floor(Je/E.width),Ae=et,fe=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,st),t.pixelStorei(r.UNPACK_SKIP_ROWS,H),t.texSubImage2D(r.TEXTURE_2D,0,st,H,Ae,fe,Z,he,E.data)}N.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,de),t.pixelStorei(r.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(r.UNPACK_SKIP_ROWS,Fe)}}function Ie(N,E,Z){let he=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=r.TEXTURE_3D);const xe=ue(N,E),we=E.source;t.bindTexture(he,N.__webglTexture,r.TEXTURE0+Z);const Ne=s.get(we);if(we.version!==Ne.__version||xe===!0){if(t.activeTexture(r.TEXTURE0+Z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const fe=Mt.getPrimaries(Mt.workingColorSpace),Oe=E.colorSpace===Yr?null:Mt.getPrimaries(E.colorSpace),Ce=E.colorSpace===Yr||fe===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let pe=_(E.image,!1,o.maxTextureSize);pe=be(E,pe);const Fe=l.convert(E.format,E.colorSpace),Se=l.convert(E.type);let ge=L(E.internalFormat,Fe,Se,E.normalized,E.colorSpace,E.isVideoTexture);De(he,E);let Me;const Je=E.mipmaps,et=E.isVideoTexture!==!0,st=Ne.__version===void 0||xe===!0,H=we.dataReady,Ae=R(E,pe);if(E.isDepthTexture)ge=O(E.format===As,E.type),st&&(et?t.texStorage2D(r.TEXTURE_2D,1,ge,pe.width,pe.height):t.texImage2D(r.TEXTURE_2D,0,ge,pe.width,pe.height,0,Fe,Se,null));else if(E.isDataTexture)if(Je.length>0){et&&st&&t.texStorage2D(r.TEXTURE_2D,Ae,ge,Je[0].width,Je[0].height);for(let fe=0,Oe=Je.length;fe<Oe;fe++)Me=Je[fe],et?H&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Me.width,Me.height,Fe,Se,Me.data):t.texImage2D(r.TEXTURE_2D,fe,ge,Me.width,Me.height,0,Fe,Se,Me.data);E.generateMipmaps=!1}else et?(st&&t.texStorage2D(r.TEXTURE_2D,Ae,ge,pe.width,pe.height),H&&me(E,pe,Fe,Se)):t.texImage2D(r.TEXTURE_2D,0,ge,pe.width,pe.height,0,Fe,Se,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){et&&st&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,ge,Je[0].width,Je[0].height,pe.depth);for(let fe=0,Oe=Je.length;fe<Oe;fe++)if(Me=Je[fe],E.format!==Ni)if(Fe!==null)if(et){if(H)if(E.layerUpdates.size>0){const Ce=Cg(Me.width,Me.height,E.format,E.type);for(const ve of E.layerUpdates){const je=Me.data.subarray(ve*Ce/Me.data.BYTES_PER_ELEMENT,(ve+1)*Ce/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,ve,Me.width,Me.height,1,Fe,je)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,Me.width,Me.height,pe.depth,Fe,Me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,ge,Me.width,Me.height,pe.depth,0,Me.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?H&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,Me.width,Me.height,pe.depth,Fe,Se,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,ge,Me.width,Me.height,pe.depth,0,Fe,Se,Me.data)}else{et&&st&&t.texStorage2D(r.TEXTURE_2D,Ae,ge,Je[0].width,Je[0].height);for(let fe=0,Oe=Je.length;fe<Oe;fe++)Me=Je[fe],E.format!==Ni?Fe!==null?et?H&&t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,Me.width,Me.height,Fe,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,ge,Me.width,Me.height,0,Me.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?H&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Me.width,Me.height,Fe,Se,Me.data):t.texImage2D(r.TEXTURE_2D,fe,ge,Me.width,Me.height,0,Fe,Se,Me.data)}else if(E.isDataArrayTexture)if(et){if(st&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,ge,pe.width,pe.height,pe.depth),H)if(E.layerUpdates.size>0){const fe=Cg(pe.width,pe.height,E.format,E.type);for(const Oe of E.layerUpdates){const Ce=pe.data.subarray(Oe*fe/pe.data.BYTES_PER_ELEMENT,(Oe+1)*fe/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Oe,pe.width,pe.height,1,Fe,Se,Ce)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Fe,Se,pe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ge,pe.width,pe.height,pe.depth,0,Fe,Se,pe.data);else if(E.isData3DTexture)et?(st&&t.texStorage3D(r.TEXTURE_3D,Ae,ge,pe.width,pe.height,pe.depth),H&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Fe,Se,pe.data)):t.texImage3D(r.TEXTURE_3D,0,ge,pe.width,pe.height,pe.depth,0,Fe,Se,pe.data);else if(E.isFramebufferTexture){if(st)if(et)t.texStorage2D(r.TEXTURE_2D,Ae,ge,pe.width,pe.height);else{let fe=pe.width,Oe=pe.height;for(let Ce=0;Ce<Ae;Ce++)t.texImage2D(r.TEXTURE_2D,Ce,ge,fe,Oe,0,Fe,Se,null),fe>>=1,Oe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const fe=r.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),pe.parentNode!==fe){fe.appendChild(pe),y.add(E),fe.onpaint=at=>{const Ut=at.changedElements;for(const St of y)Ut.includes(St.image)&&(St.needsUpdate=!0)},fe.requestPaint();return}const Oe=0,Ce=r.RGBA,ve=r.RGBA,je=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Oe,Ce,ve,je,pe),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Je.length>0){if(et&&st){const fe=It(Je[0]);t.texStorage2D(r.TEXTURE_2D,Ae,ge,fe.width,fe.height)}for(let fe=0,Oe=Je.length;fe<Oe;fe++)Me=Je[fe],et?H&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Fe,Se,Me):t.texImage2D(r.TEXTURE_2D,fe,ge,Fe,Se,Me);E.generateMipmaps=!1}else if(et){if(st){const fe=It(pe);t.texStorage2D(r.TEXTURE_2D,Ae,ge,fe.width,fe.height)}H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Fe,Se,pe)}else t.texImage2D(r.TEXTURE_2D,0,ge,Fe,Se,pe);x(E)&&C(he),Ne.__version=we.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Ge(N,E,Z){if(E.image.length!==6)return;const he=ue(N,E),xe=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+Z);const we=s.get(xe);if(xe.version!==we.__version||he===!0){t.activeTexture(r.TEXTURE0+Z);const Ne=Mt.getPrimaries(Mt.workingColorSpace),de=E.colorSpace===Yr?null:Mt.getPrimaries(E.colorSpace),pe=E.colorSpace===Yr||Ne===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Fe=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let ve=0;ve<6;ve++)!Fe&&!Se?ge[ve]=_(E.image[ve],!0,o.maxCubemapSize):ge[ve]=Se?E.image[ve].image:E.image[ve],ge[ve]=be(E,ge[ve]);const Me=ge[0],Je=l.convert(E.format,E.colorSpace),et=l.convert(E.type),st=L(E.internalFormat,Je,et,E.normalized,E.colorSpace),H=E.isVideoTexture!==!0,Ae=we.__version===void 0||he===!0,fe=xe.dataReady;let Oe=R(E,Me);De(r.TEXTURE_CUBE_MAP,E);let Ce;if(Fe){H&&Ae&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,st,Me.width,Me.height);for(let ve=0;ve<6;ve++){Ce=ge[ve].mipmaps;for(let je=0;je<Ce.length;je++){const at=Ce[je];E.format!==Ni?Je!==null?H?fe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,0,0,at.width,at.height,Je,at.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,st,at.width,at.height,0,at.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,0,0,at.width,at.height,Je,et,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,st,at.width,at.height,0,Je,et,at.data)}}}else{if(Ce=E.mipmaps,H&&Ae){Ce.length>0&&Oe++;const ve=It(ge[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,st,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Se){H?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ge[ve].width,ge[ve].height,Je,et,ge[ve].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,st,ge[ve].width,ge[ve].height,0,Je,et,ge[ve].data);for(let je=0;je<Ce.length;je++){const Ut=Ce[je].image[ve].image;H?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,0,0,Ut.width,Ut.height,Je,et,Ut.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,st,Ut.width,Ut.height,0,Je,et,Ut.data)}}else{H?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Je,et,ge[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,st,Je,et,ge[ve]);for(let je=0;je<Ce.length;je++){const at=Ce[je];H?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,0,0,Je,et,at.image[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,st,Je,et,at.image[ve])}}}x(E)&&C(r.TEXTURE_CUBE_MAP),we.__version=xe.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Qe(N,E,Z,he,xe,we){const Ne=l.convert(Z.format,Z.colorSpace),de=l.convert(Z.type),pe=L(Z.internalFormat,Ne,de,Z.normalized,Z.colorSpace),Fe=s.get(E),Se=s.get(Z);if(Se.__renderTarget=E,!Fe.__hasExternalTextures){const ge=Math.max(1,E.width>>we),Me=Math.max(1,E.height>>we);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?t.texImage3D(xe,we,pe,ge,Me,E.depth,0,Ne,de,null):t.texImage2D(xe,we,pe,ge,Me,0,Ne,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,N),ht(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,xe,Se.__webglTexture,0,Nt(E)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,xe,Se.__webglTexture,we),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(N,E,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,N),E.depthBuffer){const he=E.depthTexture,xe=he&&he.isDepthTexture?he.type:null,we=O(E.stencilBuffer,xe),Ne=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ht(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Nt(E),we,E.width,E.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt(E),we,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,we,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,N)}else{const he=E.textures;for(let xe=0;xe<he.length;xe++){const we=he[xe],Ne=l.convert(we.format,we.colorSpace),de=l.convert(we.type),pe=L(we.internalFormat,Ne,de,we.normalized,we.colorSpace);ht(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Nt(E),pe,E.width,E.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt(E),pe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,pe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ut(N,E,Z){const he=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=s.get(E.depthTexture);if(xe.__renderTarget=E,(!xe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),xe.__webglTexture===void 0){xe.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,xe.__webglTexture),De(r.TEXTURE_CUBE_MAP,E.depthTexture);const Fe=l.convert(E.depthTexture.format),Se=l.convert(E.depthTexture.type);let ge;E.depthTexture.format===yr?ge=r.DEPTH_COMPONENT24:E.depthTexture.format===As&&(ge=r.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ge,E.width,E.height,0,Fe,Se,null)}}else V(E.depthTexture,0);const we=xe.__webglTexture,Ne=Nt(E),de=he?r.TEXTURE_CUBE_MAP_POSITIVE_X+Z:r.TEXTURE_2D,pe=E.depthTexture.format===As?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===yr)ht(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,de,we,0,Ne):r.framebufferTexture2D(r.FRAMEBUFFER,pe,de,we,0);else if(E.depthTexture.format===As)ht(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,de,we,0,Ne):r.framebufferTexture2D(r.FRAMEBUFFER,pe,de,we,0);else throw new Error("Unknown depthTexture format")}function _t(N){const E=s.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const he=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const xe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),E.__depthDisposeCallback=xe}E.__boundDepthTexture=he}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(Z)for(let he=0;he<6;he++)ut(E.__webglFramebuffer[he],N,he);else{const he=N.texture.mipmaps;he&&he.length>0?ut(E.__webglFramebuffer[0],N,0):ut(E.__webglFramebuffer,N,0)}else if(Z){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=r.createRenderbuffer(),Dt(E.__webglDepthbuffer[he],N,!1);else{const xe=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,we)}}else{const he=N.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Dt(E.__webglDepthbuffer,N,!1);else{const xe=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,we)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function yt(N,E,Z){const he=s.get(N);E!==void 0&&Qe(he.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&_t(N)}function ft(N){const E=N.texture,Z=s.get(N),he=s.get(E);N.addEventListener("dispose",b);const xe=N.textures,we=N.isWebGLCubeRenderTarget===!0,Ne=xe.length>1;if(Ne||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=E.version,u.memory.textures++),we){Z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[de]=[];for(let pe=0;pe<E.mipmaps.length;pe++)Z.__webglFramebuffer[de][pe]=r.createFramebuffer()}else Z.__webglFramebuffer[de]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)Z.__webglFramebuffer[de]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Ne)for(let de=0,pe=xe.length;de<pe;de++){const Fe=s.get(xe[de]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=r.createTexture(),u.memory.textures++)}if(N.samples>0&&ht(N)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let de=0;de<xe.length;de++){const pe=xe[de];Z.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[de]);const Fe=l.convert(pe.format,pe.colorSpace),Se=l.convert(pe.type),ge=L(pe.internalFormat,Fe,Se,pe.normalized,pe.colorSpace,N.isXRRenderTarget===!0),Me=Nt(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,ge,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,Z.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),Dt(Z.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(we){t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),De(r.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Qe(Z.__webglFramebuffer[de][pe],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else Qe(Z.__webglFramebuffer[de],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(E)&&C(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let de=0,pe=xe.length;de<pe;de++){const Fe=xe[de],Se=s.get(Fe);let ge=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ge=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ge,Se.__webglTexture),De(ge,Fe),Qe(Z.__webglFramebuffer,N,Fe,r.COLOR_ATTACHMENT0+de,ge,0),x(Fe)&&C(ge)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(de=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,he.__webglTexture),De(de,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Qe(Z.__webglFramebuffer[pe],N,E,r.COLOR_ATTACHMENT0,de,pe);else Qe(Z.__webglFramebuffer,N,E,r.COLOR_ATTACHMENT0,de,0);x(E)&&C(de),t.unbindTexture()}N.depthBuffer&&_t(N)}function Ht(N){const E=N.textures;for(let Z=0,he=E.length;Z<he;Z++){const xe=E[Z];if(x(xe)){const we=D(N),Ne=s.get(xe).__webglTexture;t.bindTexture(we,Ne),C(we),t.unbindTexture()}}}const Bt=[],Jt=[];function j(N){if(N.samples>0){if(ht(N)===!1){const E=N.textures,Z=N.width,he=N.height;let xe=r.COLOR_BUFFER_BIT;const we=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=s.get(N),de=E.length>1;if(de)for(let Fe=0;Fe<E.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const pe=N.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Fe=0;Fe<E.length;Fe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),de){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Fe]);const Se=s.get(E[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,Z,he,0,0,Z,he,xe,r.NEAREST),h===!0&&(Bt.length=0,Jt.length=0,Bt.push(r.COLOR_ATTACHMENT0+Fe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Bt.push(we),Jt.push(we),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Jt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let Fe=0;Fe<E.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Fe]);const Se=s.get(E[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,Se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const E=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Nt(N){return Math.min(o.maxSamples,N.samples)}function ht(N){const E=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pt(N){const E=u.render.frame;v.get(N)!==E&&(v.set(N,E),N.update())}function be(N,E){const Z=N.colorSpace,he=N.format,xe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==gc&&Z!==Yr&&(Mt.getTransfer(Z)===Ot?(he!==Ni||xe!==ii)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",Z)),E}function It(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=oe,this.getTextureUnits=le,this.setTextureUnits=G,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=ae,this.setTextureCube=k,this.rebindTextures=yt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ib(r,e){function t(s,o=Yr){let l;const u=Mt.getTransfer(o);if(s===ii)return r.UNSIGNED_BYTE;if(s===Zf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Qf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===p0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===m0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===f0)return r.BYTE;if(s===h0)return r.SHORT;if(s===Eo)return r.UNSIGNED_SHORT;if(s===Kf)return r.INT;if(s===$i)return r.UNSIGNED_INT;if(s===Gi)return r.FLOAT;if(s===_r)return r.HALF_FLOAT;if(s===g0)return r.ALPHA;if(s===x0)return r.RGB;if(s===Ni)return r.RGBA;if(s===yr)return r.DEPTH_COMPONENT;if(s===As)return r.DEPTH_STENCIL;if(s===v0)return r.RED;if(s===Jf)return r.RED_INTEGER;if(s===Rs)return r.RG;if(s===eh)return r.RG_INTEGER;if(s===th)return r.RGBA_INTEGER;if(s===cc||s===uc||s===dc||s===fc)if(u===Ot)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===cc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===dc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===cc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===dc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cf||s===uf||s===df||s===ff)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===cf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===uf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===df)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ff)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hf||s===pf||s===mf||s===gf||s===xf||s===pc||s===vf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===hf||s===pf)return u===Ot?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===mf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===gf)return l.COMPRESSED_R11_EAC;if(s===xf)return l.COMPRESSED_SIGNED_R11_EAC;if(s===pc)return l.COMPRESSED_RG11_EAC;if(s===vf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===_f||s===yf||s===Sf||s===Mf||s===Ef||s===bf||s===Tf||s===wf||s===Af||s===Cf||s===Rf||s===Pf||s===Nf||s===Lf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===_f)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ef)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Tf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Af)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Rf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Pf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Nf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Lf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Df||s===If||s===Uf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Df)return u===Ot?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===If)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Uf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ff||s===kf||s===mc||s===Of)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Ff)return l.COMPRESSED_RED_RGTC1_EXT;if(s===kf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Of)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===bo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sb=`
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

}`;class ab{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new R0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Yi({vertexShader:rb,fragmentShader:sb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qi(new wc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ob extends Ps{constructor(e,t){super();const s=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,v=null,y=null,g=null,S=null,T=null;const P=typeof XRWebGLBinding<"u",_=new ab,x={},C=t.getContextAttributes();let D=null,L=null;const O=[],R=[],I=new Ct;let b=null;const U=new ni;U.viewport=new tn;const X=new ni;X.viewport=new tn;const z=[U,X],Y=new xy;let oe=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let _e=O[ue];return _e===void 0&&(_e=new Md,O[ue]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ue){let _e=O[ue];return _e===void 0&&(_e=new Md,O[ue]=_e),_e.getGripSpace()},this.getHand=function(ue){let _e=O[ue];return _e===void 0&&(_e=new Md,O[ue]=_e),_e.getHandSpace()};function G(ue){const _e=R.indexOf(ue.inputSource);if(_e===-1)return;const me=O[_e];me!==void 0&&(me.update(ue.inputSource,ue.frame,p||u),me.dispatchEvent({type:ue.type,data:ue.inputSource}))}function Q(){o.removeEventListener("select",G),o.removeEventListener("selectstart",G),o.removeEventListener("selectend",G),o.removeEventListener("squeeze",G),o.removeEventListener("squeezestart",G),o.removeEventListener("squeezeend",G),o.removeEventListener("end",Q),o.removeEventListener("inputsourceschange",q);for(let ue=0;ue<O.length;ue++){const _e=R[ue];_e!==null&&(R[ue]=null,O[ue].disconnect(_e))}oe=null,le=null,_.reset();for(const ue in x)delete x[ue];e.setRenderTarget(D),S=null,g=null,y=null,o=null,L=null,De.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){l=ue,s.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){f=ue,s.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ue){p=ue},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return y===null&&P&&(y=new XRWebGLBinding(o,t)),y},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(ue){if(o=ue,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",G),o.addEventListener("selectstart",G),o.addEventListener("selectend",G),o.addEventListener("squeeze",G),o.addEventListener("squeezestart",G),o.addEventListener("squeezeend",G),o.addEventListener("end",Q),o.addEventListener("inputsourceschange",q),C.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(I),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ie=null,Ge=null;C.depth&&(Ge=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=C.stencil?As:yr,Ie=C.stencil?bo:$i);const Qe={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:l};y=this.getBinding(),g=y.createProjectionLayer(Qe),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new Xi(g.textureWidth,g.textureHeight,{format:Ni,type:ii,depthTexture:new Ea(g.textureWidth,g.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Xi(S.framebufferWidth,S.framebufferHeight,{format:Ni,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),De.setContext(o),De.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(ue){for(let _e=0;_e<ue.removed.length;_e++){const me=ue.removed[_e],Ie=R.indexOf(me);Ie>=0&&(R[Ie]=null,O[Ie].disconnect(me))}for(let _e=0;_e<ue.added.length;_e++){const me=ue.added[_e];let Ie=R.indexOf(me);if(Ie===-1){for(let Qe=0;Qe<O.length;Qe++)if(Qe>=R.length){R.push(me),Ie=Qe;break}else if(R[Qe]===null){R[Qe]=me,Ie=Qe;break}if(Ie===-1)break}const Ge=O[Ie];Ge&&Ge.connect(me)}}const V=new J,K=new J;function ae(ue,_e,me){V.setFromMatrixPosition(_e.matrixWorld),K.setFromMatrixPosition(me.matrixWorld);const Ie=V.distanceTo(K),Ge=_e.projectionMatrix.elements,Qe=me.projectionMatrix.elements,Dt=Ge[14]/(Ge[10]-1),ut=Ge[14]/(Ge[10]+1),_t=(Ge[9]+1)/Ge[5],yt=(Ge[9]-1)/Ge[5],ft=(Ge[8]-1)/Ge[0],Ht=(Qe[8]+1)/Qe[0],Bt=Dt*ft,Jt=Dt*Ht,j=Ie/(-ft+Ht),Nt=j*-ft;if(_e.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(Nt),ue.translateZ(j),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),Ge[10]===-1)ue.projectionMatrix.copy(_e.projectionMatrix),ue.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const ht=Dt+j,Pt=ut+j,be=Bt-Nt,It=Jt+(Ie-Nt),N=_t*ut/Pt*ht,E=yt*ut/Pt*ht;ue.projectionMatrix.makePerspective(be,It,N,E,ht,Pt),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function k(ue,_e){_e===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(_e.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(o===null)return;let _e=ue.near,me=ue.far;_.texture!==null&&(_.depthNear>0&&(_e=_.depthNear),_.depthFar>0&&(me=_.depthFar)),Y.near=X.near=U.near=_e,Y.far=X.far=U.far=me,(oe!==Y.near||le!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),oe=Y.near,le=Y.far),Y.layers.mask=ue.layers.mask|6,U.layers.mask=Y.layers.mask&-5,X.layers.mask=Y.layers.mask&-3;const Ie=ue.parent,Ge=Y.cameras;k(Y,Ie);for(let Qe=0;Qe<Ge.length;Qe++)k(Ge[Qe],Ie);Ge.length===2?ae(Y,U,X):Y.projectionMatrix.copy(U.projectionMatrix),ee(ue,Y,Ie)};function ee(ue,_e,me){me===null?ue.matrix.copy(_e.matrixWorld):(ue.matrix.copy(me.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(_e.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(_e.projectionMatrix),ue.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=Vf*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&S===null))return h},this.setFoveation=function(ue){h=ue,g!==null&&(g.fixedFoveation=ue),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ue)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(Y)},this.getCameraTexture=function(ue){return x[ue]};let Ue=null;function Ve(ue,_e){if(v=_e.getViewerPose(p||u),T=_e,v!==null){const me=v.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Ie=!1;me.length!==Y.cameras.length&&(Y.cameras.length=0,Ie=!0);for(let ut=0;ut<me.length;ut++){const _t=me[ut];let yt=null;if(S!==null)yt=S.getViewport(_t);else{const Ht=y.getViewSubImage(g,_t);yt=Ht.viewport,ut===0&&(e.setRenderTargetTextures(L,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(L))}let ft=z[ut];ft===void 0&&(ft=new ni,ft.layers.enable(ut),ft.viewport=new tn,z[ut]=ft),ft.matrix.fromArray(_t.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(_t.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(yt.x,yt.y,yt.width,yt.height),ut===0&&(Y.matrix.copy(ft.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ie===!0&&Y.cameras.push(ft)}const Ge=o.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&P){y=s.getBinding();const ut=y.getDepthInformation(me[0]);ut&&ut.isValid&&ut.texture&&_.init(ut,o.renderState)}if(Ge&&Ge.includes("camera-access")&&P){e.state.unbindTexture(),y=s.getBinding();for(let ut=0;ut<me.length;ut++){const _t=me[ut].camera;if(_t){let yt=x[_t];yt||(yt=new R0,x[_t]=yt);const ft=y.getCameraImage(_t);yt.sourceTexture=ft}}}}for(let me=0;me<O.length;me++){const Ie=R[me],Ge=O[me];Ie!==null&&Ge!==void 0&&Ge.update(Ie,_e,p||u)}Ue&&Ue(ue,_e),_e.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:_e}),T=null}const De=new I0;De.setAnimationLoop(Ve),this.setAnimationLoop=function(ue){Ue=ue},this.dispose=function(){}}}const lb=new Yt,V0=new dt;V0.set(-1,0,0,0,1,0,0,0,1);function cb(r,e){function t(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function s(_,x){x.color.getRGB(_.fogColor.value,P0(r)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function o(_,x,C,D,L){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(_,x):x.isMeshLambertMaterial?(l(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(_,x),y(_,x)):x.isMeshPhongMaterial?(l(_,x),v(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(_,x),g(_,x),x.isMeshPhysicalMaterial&&S(_,x,L)):x.isMeshMatcapMaterial?(l(_,x),T(_,x)):x.isMeshDepthMaterial?l(_,x):x.isMeshDistanceMaterial?(l(_,x),P(_,x)):x.isMeshNormalMaterial?l(_,x):x.isLineBasicMaterial?(u(_,x),x.isLineDashedMaterial&&f(_,x)):x.isPointsMaterial?h(_,x,C,D):x.isSpriteMaterial?p(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,t(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===$n&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,t(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===$n&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,t(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,t(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const C=e.get(x),D=C.envMap,L=C.envMapRotation;D&&(_.envMap.value=D,_.envMapRotation.value.setFromMatrix4(lb.makeRotationFromEuler(L)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(V0),_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,_.aoMapTransform))}function u(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform))}function f(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function h(_,x,C,D){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*C,_.scale.value=D*.5,x.map&&(_.map.value=x.map,t(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function p(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function v(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function y(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function g(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function S(_,x,C){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===$n&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=C.texture,_.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,_.specularIntensityMapTransform))}function T(_,x){x.matcap&&(_.matcap.value=x.matcap)}function P(_,x){const C=e.get(x).light;_.referencePosition.value.setFromMatrixPosition(C.matrixWorld),_.nearDistance.value=C.shadow.camera.near,_.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function ub(r,e,t,s){let o={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,D){const L=D.program;s.uniformBlockBinding(C,L)}function p(C,D){let L=o[C.id];L===void 0&&(T(C),L=v(C),o[C.id]=L,C.addEventListener("dispose",_));const O=D.program;s.updateUBOMapping(C,O);const R=e.render.frame;l[C.id]!==R&&(g(C),l[C.id]=R)}function v(C){const D=y();C.__bindingPointIndex=D;const L=r.createBuffer(),O=C.__size,R=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,O,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,L),L}function y(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const D=o[C.id],L=C.uniforms,O=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let R=0,I=L.length;R<I;R++){const b=Array.isArray(L[R])?L[R]:[L[R]];for(let U=0,X=b.length;U<X;U++){const z=b[U];if(S(z,R,U,O)===!0){const Y=z.__offset,oe=Array.isArray(z.value)?z.value:[z.value];let le=0;for(let G=0;G<oe.length;G++){const Q=oe[G],q=P(Q);typeof Q=="number"||typeof Q=="boolean"?(z.__data[0]=Q,r.bufferSubData(r.UNIFORM_BUFFER,Y+le,z.__data)):Q.isMatrix3?(z.__data[0]=Q.elements[0],z.__data[1]=Q.elements[1],z.__data[2]=Q.elements[2],z.__data[3]=0,z.__data[4]=Q.elements[3],z.__data[5]=Q.elements[4],z.__data[6]=Q.elements[5],z.__data[7]=0,z.__data[8]=Q.elements[6],z.__data[9]=Q.elements[7],z.__data[10]=Q.elements[8],z.__data[11]=0):ArrayBuffer.isView(Q)?z.__data.set(new Q.constructor(Q.buffer,Q.byteOffset,z.__data.length)):(Q.toArray(z.__data,le),le+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(C,D,L,O){const R=C.value,I=D+"_"+L;if(O[I]===void 0)return typeof R=="number"||typeof R=="boolean"?O[I]=R:ArrayBuffer.isView(R)?O[I]=R.slice():O[I]=R.clone(),!0;{const b=O[I];if(typeof R=="number"||typeof R=="boolean"){if(b!==R)return O[I]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(b.equals(R)===!1)return b.copy(R),!0}}return!1}function T(C){const D=C.uniforms;let L=0;const O=16;for(let I=0,b=D.length;I<b;I++){const U=Array.isArray(D[I])?D[I]:[D[I]];for(let X=0,z=U.length;X<z;X++){const Y=U[X],oe=Array.isArray(Y.value)?Y.value:[Y.value];for(let le=0,G=oe.length;le<G;le++){const Q=oe[le],q=P(Q),V=L%O,K=V%q.boundary,ae=V+K;L+=K,ae!==0&&O-ae<q.storage&&(L+=O-ae),Y.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=L,L+=q.storage}}}const R=L%O;return R>0&&(L+=O-R),C.__size=L,C.__cache={},this}function P(C){const D={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(D.boundary=4,D.storage=4):C.isVector2?(D.boundary=8,D.storage=8):C.isVector3||C.isColor?(D.boundary=16,D.storage=12):C.isVector4?(D.boundary=16,D.storage=16):C.isMatrix3?(D.boundary=48,D.storage=48):C.isMatrix4?(D.boundary=64,D.storage=64):C.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(D.boundary=16,D.storage=C.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",C),D}function _(C){const D=C.target;D.removeEventListener("dispose",_);const L=u.indexOf(D.__bindingPointIndex);u.splice(L,1),r.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function x(){for(const C in o)r.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:h,update:p,dispose:x}}const db=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function fb(){return zi===null&&(zi=new Y_(db,16,16,Rs,_r),zi.name="DFG_LUT",zi.minFilter=Cn,zi.magFilter=Cn,zi.wrapS=mr,zi.wrapT=mr,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class hb{constructor(e={}){const{canvas:t=w_(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:S=ii}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=u;const P=S,_=new Set([th,eh,Jf]),x=new Set([ii,$i,Eo,bo,Zf,Qf]),C=new Uint32Array(4),D=new Int32Array(4),L=new J;let O=null,R=null;const I=[],b=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let z=!1,Y=null;this._outputColorSpace=mi;let oe=0,le=0,G=null,Q=-1,q=null;const V=new tn,K=new tn;let ae=null;const k=new At(0);let ee=0,Ue=t.width,Ve=t.height,De=1,ue=null,_e=null;const me=new tn(0,0,Ue,Ve),Ie=new tn(0,0,Ue,Ve);let Ge=!1;const Qe=new ah;let Dt=!1,ut=!1;const _t=new Yt,yt=new J,ft=new tn,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function Jt(){return G===null?De:1}let j=s;function Nt(w,B){return t.getContext(w,B)}try{const w={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yf}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",at,!1),j===null){const B="webgl2";if(j=Nt(B,w),j===null)throw Nt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw wt("WebGLRenderer: "+w.message),w}let ht,Pt,be,It,N,E,Z,he,xe,we,Ne,de,pe,Fe,Se,ge,Me,Je,et,st,H,Ae,fe;function Oe(){ht=new f1(j),ht.init(),H=new ib(j,ht),Pt=new r1(j,ht,e,H),be=new tb(j,ht),Pt.reversedDepthBuffer&&g&&be.buffers.depth.setReversed(!0),It=new m1(j),N=new VE,E=new nb(j,ht,be,N,Pt,H,It),Z=new d1(X),he=new _y(j),Ae=new n1(j,he),xe=new h1(j,he,It,Ae),we=new x1(j,xe,he,Ae,It),Je=new g1(j,Pt,E),Se=new s1(N),Ne=new zE(X,Z,ht,Pt,Ae,Se),de=new cb(X,N),pe=new GE,Fe=new YE(ht),Me=new t1(X,Z,be,we,T,h),ge=new eb(X,we,Pt),fe=new ub(j,It,Pt,be),et=new i1(j,ht,It),st=new p1(j,ht,It),It.programs=Ne.programs,X.capabilities=Pt,X.extensions=ht,X.properties=N,X.renderLists=pe,X.shadowMap=ge,X.state=be,X.info=It}Oe(),P!==ii&&(U=new _1(P,t.width,t.height,o,l));const Ce=new ob(X,j);this.xr=Ce,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const w=ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(w){w!==void 0&&(De=w,this.setSize(Ue,Ve,!1))},this.getSize=function(w){return w.set(Ue,Ve)},this.setSize=function(w,B,re=!0){if(Ce.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=w,Ve=B,t.width=Math.floor(w*De),t.height=Math.floor(B*De),re===!0&&(t.style.width=w+"px",t.style.height=B+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(Ue*De,Ve*De).floor()},this.setDrawingBufferSize=function(w,B,re){Ue=w,Ve=B,De=re,t.width=Math.floor(w*re),t.height=Math.floor(B*re),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(P===ii){wt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){rt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(V)},this.getViewport=function(w){return w.copy(me)},this.setViewport=function(w,B,re,te){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,B,re,te),be.viewport(V.copy(me).multiplyScalar(De).round())},this.getScissor=function(w){return w.copy(Ie)},this.setScissor=function(w,B,re,te){w.isVector4?Ie.set(w.x,w.y,w.z,w.w):Ie.set(w,B,re,te),be.scissor(K.copy(Ie).multiplyScalar(De).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(w){be.setScissorTest(Ge=w)},this.setOpaqueSort=function(w){ue=w},this.setTransparentSort=function(w){_e=w},this.getClearColor=function(w){return w.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,re=!0){let te=0;if(w){let ie=!1;if(G!==null){const Le=G.texture.format;ie=_.has(Le)}if(ie){const Le=G.texture.type,He=x.has(Le),Pe=Me.getClearColor(),$e=Me.getClearAlpha(),Ze=Pe.r,lt=Pe.g,ct=Pe.b;He?(C[0]=Ze,C[1]=lt,C[2]=ct,C[3]=$e,j.clearBufferuiv(j.COLOR,0,C)):(D[0]=Ze,D[1]=lt,D[2]=ct,D[3]=$e,j.clearBufferiv(j.COLOR,0,D))}else te|=j.COLOR_BUFFER_BIT}B&&(te|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(te|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&j.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Y=w},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",at,!1),Me.dispose(),pe.dispose(),Fe.dispose(),N.dispose(),Z.dispose(),we.dispose(),Ae.dispose(),fe.dispose(),Ne.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",hn),Ce.removeEventListener("sessionend",Zi),si.stop()};function ve(w){w.preventDefault(),ng("WebGLRenderer: Context Lost."),z=!0}function je(){ng("WebGLRenderer: Context Restored."),z=!1;const w=It.autoReset,B=ge.enabled,re=ge.autoUpdate,te=ge.needsUpdate,ie=ge.type;Oe(),It.autoReset=w,ge.enabled=B,ge.autoUpdate=re,ge.needsUpdate=te,ge.type=ie}function at(w){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ut(w){const B=w.target;B.removeEventListener("dispose",Ut),St(B)}function St(w){fn(w),N.remove(w)}function fn(w){const B=N.get(w).programs;B!==void 0&&(B.forEach(function(re){Ne.releaseProgram(re)}),w.isShaderMaterial&&Ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,re,te,ie,Le){B===null&&(B=Ht);const He=ie.isMesh&&ie.matrixWorld.determinant()<0,Pe=Is(w,B,re,te,ie);be.setMaterial(te,He);let $e=re.index,Ze=1;if(te.wireframe===!0){if($e=xe.getWireframeAttribute(re),$e===void 0)return;Ze=2}const lt=re.drawRange,ct=re.attributes.position;let Ye=lt.start*Ze,Et=(lt.start+lt.count)*Ze;Le!==null&&(Ye=Math.max(Ye,Le.start*Ze),Et=Math.min(Et,(Le.start+Le.count)*Ze)),$e!==null?(Ye=Math.max(Ye,0),Et=Math.min(Et,$e.count)):ct!=null&&(Ye=Math.max(Ye,0),Et=Math.min(Et,ct.count));const zt=Et-Ye;if(zt<0||zt===1/0)return;Ae.setup(ie,te,Pe,re,$e);let $t,Ft=et;if($e!==null&&($t=he.get($e),Ft=st,Ft.setIndex($t)),ie.isMesh)te.wireframe===!0?(be.setLineWidth(te.wireframeLinewidth*Jt()),Ft.setMode(j.LINES)):Ft.setMode(j.TRIANGLES);else if(ie.isLine){let rn=te.linewidth;rn===void 0&&(rn=1),be.setLineWidth(rn*Jt()),ie.isLineSegments?Ft.setMode(j.LINES):ie.isLineLoop?Ft.setMode(j.LINE_LOOP):Ft.setMode(j.LINE_STRIP)}else ie.isPoints?Ft.setMode(j.POINTS):ie.isSprite&&Ft.setMode(j.TRIANGLES);if(ie.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Ft.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const rn=ie._multiDrawStarts,Be=ie._multiDrawCounts,vn=ie._multiDrawCount,mt=$e?he.get($e).bytesPerElement:1,kn=N.get(te).currentProgram.getUniforms();for(let On=0;On<vn;On++)kn.setValue(j,"_gl_DrawID",On),Ft.render(rn[On]/mt,Be[On])}else if(ie.isInstancedMesh)Ft.renderInstances(Ye,zt,ie.count);else if(re.isInstancedBufferGeometry){const rn=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Be=Math.min(re.instanceCount,rn);Ft.renderInstances(Ye,zt,Be)}else Ft.render(Ye,zt)};function Un(w,B,re){w.transparent===!0&&w.side===hr&&w.forceSinglePass===!1?(w.side=$n,w.needsUpdate=!0,Qi(w,B,re),w.side=Jr,w.needsUpdate=!0,Qi(w,B,re),w.side=hr):Qi(w,B,re)}this.compile=function(w,B,re=null){re===null&&(re=w),R=Fe.get(re),R.init(B),b.push(R),re.traverseVisible(function(ie){ie.isLight&&ie.layers.test(B.layers)&&(R.pushLight(ie),ie.castShadow&&R.pushShadow(ie))}),w!==re&&w.traverseVisible(function(ie){ie.isLight&&ie.layers.test(B.layers)&&(R.pushLight(ie),ie.castShadow&&R.pushShadow(ie))}),R.setupLights();const te=new Set;return w.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Le=ie.material;if(Le)if(Array.isArray(Le))for(let He=0;He<Le.length;He++){const Pe=Le[He];Un(Pe,re,ie),te.add(Pe)}else Un(Le,re,ie),te.add(Le)}),R=b.pop(),te},this.compileAsync=function(w,B,re=null){const te=this.compile(w,B,re);return new Promise(ie=>{function Le(){if(te.forEach(function(He){N.get(He).currentProgram.isReady()&&te.delete(He)}),te.size===0){ie(w);return}setTimeout(Le,10)}ht.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let xi=null;function Sr(w){xi&&xi(w)}function hn(){si.stop()}function Zi(){si.start()}const si=new I0;si.setAnimationLoop(Sr),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(w){xi=w,Ce.setAnimationLoop(w),w===null?si.stop():si.start()},Ce.addEventListener("sessionstart",hn),Ce.addEventListener("sessionend",Zi),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;Y!==null&&Y.renderStart(w,B);const re=Ce.enabled===!0&&Ce.isPresenting===!0,te=U!==null&&(G===null||re)&&U.begin(X,G);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(B),B=Ce.getCamera()),w.isScene===!0&&w.onBeforeRender(X,w,B,G),R=Fe.get(w,b.length),R.init(B),R.state.textureUnits=E.getTextureUnits(),b.push(R),_t.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Qe.setFromProjectionMatrix(_t,Wi,B.reversedDepth),ut=this.localClippingEnabled,Dt=Se.init(this.clippingPlanes,ut),O=pe.get(w,I.length),O.init(),I.push(O),Ce.enabled===!0&&Ce.isPresenting===!0){const He=X.xr.getDepthSensingMesh();He!==null&&ns(He,B,-1/0,X.sortObjects)}ns(w,B,0,X.sortObjects),O.finish(),X.sortObjects===!0&&O.sort(ue,_e),Bt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Bt&&Me.addToRenderList(O,w),this.info.render.frame++,Dt===!0&&Se.beginShadows();const ie=R.state.shadowsArray;if(ge.render(ie,w,B),Dt===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&U.hasRenderPass())===!1){const He=O.opaque,Pe=O.transmissive;if(R.setupLights(),B.isArrayCamera){const $e=B.cameras;if(Pe.length>0)for(let Ze=0,lt=$e.length;Ze<lt;Ze++){const ct=$e[Ze];Fn(He,Pe,w,ct)}Bt&&Me.render(w);for(let Ze=0,lt=$e.length;Ze<lt;Ze++){const ct=$e[Ze];Ls(O,w,ct,ct.viewport)}}else Pe.length>0&&Fn(He,Pe,w,B),Bt&&Me.render(w),Ls(O,w,B)}G!==null&&le===0&&(E.updateMultisampleRenderTarget(G),E.updateRenderTargetMipmap(G)),te&&U.end(X),w.isScene===!0&&w.onAfterRender(X,w,B),Ae.resetDefaultState(),Q=-1,q=null,b.pop(),b.length>0?(R=b[b.length-1],E.setTextureUnits(R.state.textureUnits),Dt===!0&&Se.setGlobalState(X.clippingPlanes,R.state.camera)):R=null,I.pop(),I.length>0?O=I[I.length-1]:O=null,Y!==null&&Y.renderEnd()};function ns(w,B,re,te){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)re=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLightProbeGrid)R.pushLightProbeGrid(w);else if(w.isLight)R.pushLight(w),w.castShadow&&R.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Qe.intersectsSprite(w)){te&&ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_t);const He=we.update(w),Pe=w.material;Pe.visible&&O.push(w,He,Pe,re,ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Qe.intersectsObject(w))){const He=we.update(w),Pe=w.material;if(te&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ft.copy(w.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),ft.copy(He.boundingSphere.center)),ft.applyMatrix4(w.matrixWorld).applyMatrix4(_t)),Array.isArray(Pe)){const $e=He.groups;for(let Ze=0,lt=$e.length;Ze<lt;Ze++){const ct=$e[Ze],Ye=Pe[ct.materialIndex];Ye&&Ye.visible&&O.push(w,He,Ye,re,ft.z,ct)}}else Pe.visible&&O.push(w,He,Pe,re,ft.z,null)}}const Le=w.children;for(let He=0,Pe=Le.length;He<Pe;He++)ns(Le[He],B,re,te)}function Ls(w,B,re,te){const{opaque:ie,transmissive:Le,transparent:He}=w;R.setupLightsView(re),Dt===!0&&Se.setGlobalState(X.clippingPlanes,re),te&&be.viewport(V.copy(te)),ie.length>0&&Di(ie,B,re),Le.length>0&&Di(Le,B,re),He.length>0&&Di(He,B,re),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Fn(w,B,re,te){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[te.id]===void 0){const Ye=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[te.id]=new Xi(1,1,{generateMipmaps:!0,type:Ye?_r:ii,minFilter:ws,samples:Math.max(4,Pt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Le=R.state.transmissionRenderTarget[te.id],He=te.viewport||V;Le.setSize(He.z*X.transmissionResolutionScale,He.w*X.transmissionResolutionScale);const Pe=X.getRenderTarget(),$e=X.getActiveCubeFace(),Ze=X.getActiveMipmapLevel();X.setRenderTarget(Le),X.getClearColor(k),ee=X.getClearAlpha(),ee<1&&X.setClearColor(16777215,.5),X.clear(),Bt&&Me.render(re);const lt=X.toneMapping;X.toneMapping=ji;const ct=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),R.setupLightsView(te),Dt===!0&&Se.setGlobalState(X.clippingPlanes,te),Di(w,re,te),E.updateMultisampleRenderTarget(Le),E.updateRenderTargetMipmap(Le),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Et=0,zt=B.length;Et<zt;Et++){const $t=B[Et],{object:Ft,geometry:rn,material:Be,group:vn}=$t;if(Be.side===hr&&Ft.layers.test(te.layers)){const mt=Be.side;Be.side=$n,Be.needsUpdate=!0,Mr(Ft,re,te,rn,Be,vn),Be.side=mt,Be.needsUpdate=!0,Ye=!0}}Ye===!0&&(E.updateMultisampleRenderTarget(Le),E.updateRenderTargetMipmap(Le))}X.setRenderTarget(Pe,$e,Ze),X.setClearColor(k,ee),ct!==void 0&&(te.viewport=ct),X.toneMapping=lt}function Di(w,B,re){const te=B.isScene===!0?B.overrideMaterial:null;for(let ie=0,Le=w.length;ie<Le;ie++){const He=w[ie],{object:Pe,geometry:$e,group:Ze}=He;let lt=He.material;lt.allowOverride===!0&&te!==null&&(lt=te),Pe.layers.test(re.layers)&&Mr(Pe,B,re,$e,lt,Ze)}}function Mr(w,B,re,te,ie,Le){w.onBeforeRender(X,B,re,te,ie,Le),w.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ie.onBeforeRender(X,B,re,te,w,Le),ie.transparent===!0&&ie.side===hr&&ie.forceSinglePass===!1?(ie.side=$n,ie.needsUpdate=!0,X.renderBufferDirect(re,B,te,ie,w,Le),ie.side=Jr,ie.needsUpdate=!0,X.renderBufferDirect(re,B,te,ie,w,Le),ie.side=hr):X.renderBufferDirect(re,B,te,ie,w,Le),w.onAfterRender(X,B,re,te,ie,Le)}function Qi(w,B,re){B.isScene!==!0&&(B=Ht);const te=N.get(w),ie=R.state.lights,Le=R.state.shadowsArray,He=ie.state.version,Pe=Ne.getParameters(w,ie.state,Le,B,re,R.state.lightProbeGridArray),$e=Ne.getProgramCacheKey(Pe);let Ze=te.programs;te.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,te.fog=B.fog;const lt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;te.envMap=Z.get(w.envMap||te.environment,lt),te.envMapRotation=te.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ze===void 0&&(w.addEventListener("dispose",Ut),Ze=new Map,te.programs=Ze);let ct=Ze.get($e);if(ct!==void 0){if(te.currentProgram===ct&&te.lightsStateVersion===He)return rs(w,Pe),ct}else Pe.uniforms=Ne.getUniforms(w),Y!==null&&w.isNodeMaterial&&Y.build(w,re,Pe),w.onBeforeCompile(Pe,X),ct=Ne.acquireProgram(Pe,$e),Ze.set($e,ct),te.uniforms=Pe.uniforms;const Ye=te.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ye.clippingPlanes=Se.uniform),rs(w,Pe),te.needsLights=Us(w),te.lightsStateVersion=He,te.needsLights&&(Ye.ambientLightColor.value=ie.state.ambient,Ye.lightProbe.value=ie.state.probe,Ye.directionalLights.value=ie.state.directional,Ye.directionalLightShadows.value=ie.state.directionalShadow,Ye.spotLights.value=ie.state.spot,Ye.spotLightShadows.value=ie.state.spotShadow,Ye.rectAreaLights.value=ie.state.rectArea,Ye.ltc_1.value=ie.state.rectAreaLTC1,Ye.ltc_2.value=ie.state.rectAreaLTC2,Ye.pointLights.value=ie.state.point,Ye.pointLightShadows.value=ie.state.pointShadow,Ye.hemisphereLights.value=ie.state.hemi,Ye.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ie.state.spotLightMatrix,Ye.spotLightMap.value=ie.state.spotLightMap,Ye.pointShadowMatrix.value=ie.state.pointShadowMatrix),te.lightProbeGrid=R.state.lightProbeGridArray.length>0,te.currentProgram=ct,te.uniformsList=null,ct}function is(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=hc.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function rs(w,B){const re=N.get(w);re.outputColorSpace=B.outputColorSpace,re.batching=B.batching,re.batchingColor=B.batchingColor,re.instancing=B.instancing,re.instancingColor=B.instancingColor,re.instancingMorph=B.instancingMorph,re.skinning=B.skinning,re.morphTargets=B.morphTargets,re.morphNormals=B.morphNormals,re.morphColors=B.morphColors,re.morphTargetsCount=B.morphTargetsCount,re.numClippingPlanes=B.numClippingPlanes,re.numIntersection=B.numClipIntersection,re.vertexAlphas=B.vertexAlphas,re.vertexTangents=B.vertexTangents,re.toneMapping=B.toneMapping}function Ds(w,B){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;L.setFromMatrixPosition(B.matrixWorld);for(let re=0,te=w.length;re<te;re++){const ie=w[re];if(ie.texture!==null&&ie.boundingBox.containsPoint(L))return ie}return null}function Is(w,B,re,te,ie){B.isScene!==!0&&(B=Ht),E.resetTextureUnits();const Le=B.fog,He=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?B.environment:null,Pe=G===null?X.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Mt.workingColorSpace,$e=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ze=Z.get(te.envMap||He,$e),lt=te.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ct=!!re.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ye=!!re.morphAttributes.position,Et=!!re.morphAttributes.normal,zt=!!re.morphAttributes.color;let $t=ji;te.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&($t=X.toneMapping);const Ft=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,rn=Ft!==void 0?Ft.length:0,Be=N.get(te),vn=R.state.lights;if(Dt===!0&&(ut===!0||w!==q)){const kt=w===q&&te.id===Q;Se.setState(te,w,kt)}let mt=!1;te.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==vn.state.version||Be.outputColorSpace!==Pe||ie.isBatchedMesh&&Be.batching===!1||!ie.isBatchedMesh&&Be.batching===!0||ie.isBatchedMesh&&Be.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Be.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Be.instancing===!1||!ie.isInstancedMesh&&Be.instancing===!0||ie.isSkinnedMesh&&Be.skinning===!1||!ie.isSkinnedMesh&&Be.skinning===!0||ie.isInstancedMesh&&Be.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Be.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Be.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Be.instancingMorph===!1&&ie.morphTexture!==null||Be.envMap!==Ze||te.fog===!0&&Be.fog!==Le||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Se.numPlanes||Be.numIntersection!==Se.numIntersection)||Be.vertexAlphas!==lt||Be.vertexTangents!==ct||Be.morphTargets!==Ye||Be.morphNormals!==Et||Be.morphColors!==zt||Be.toneMapping!==$t||Be.morphTargetsCount!==rn||!!Be.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Be.__version=te.version);let kn=Be.currentProgram;mt===!0&&(kn=Qi(te,B,ie),Y&&te.isNodeMaterial&&Y.onUpdateProgram(te,kn,Be));let On=!1,gt=!1,Ji=!1;const Lt=kn.getUniforms(),Wt=Be.uniforms;if(be.useProgram(kn.program)&&(On=!0,gt=!0,Ji=!0),te.id!==Q&&(Q=te.id,gt=!0),Be.needsLights){const kt=Ds(R.state.lightProbeGridArray,ie);Be.lightProbeGrid!==kt&&(Be.lightProbeGrid=kt,gt=!0)}if(On||q!==w){be.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Lt.setValue(j,"projectionMatrix",w.projectionMatrix),Lt.setValue(j,"viewMatrix",w.matrixWorldInverse);const _i=Lt.map.cameraPosition;_i!==void 0&&_i.setValue(j,yt.setFromMatrixPosition(w.matrixWorld)),Pt.logarithmicDepthBuffer&&Lt.setValue(j,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Lt.setValue(j,"isOrthographic",w.isOrthographicCamera===!0),q!==w&&(q=w,gt=!0,Ji=!0)}if(Be.needsLights&&(vn.state.directionalShadowMap.length>0&&Lt.setValue(j,"directionalShadowMap",vn.state.directionalShadowMap,E),vn.state.spotShadowMap.length>0&&Lt.setValue(j,"spotShadowMap",vn.state.spotShadowMap,E),vn.state.pointShadowMap.length>0&&Lt.setValue(j,"pointShadowMap",vn.state.pointShadowMap,E)),ie.isSkinnedMesh){Lt.setOptional(j,ie,"bindMatrix"),Lt.setOptional(j,ie,"bindMatrixInverse");const kt=ie.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Lt.setValue(j,"boneTexture",kt.boneTexture,E))}ie.isBatchedMesh&&(Lt.setOptional(j,ie,"batchingTexture"),Lt.setValue(j,"batchingTexture",ie._matricesTexture,E),Lt.setOptional(j,ie,"batchingIdTexture"),Lt.setValue(j,"batchingIdTexture",ie._indirectTexture,E),Lt.setOptional(j,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Lt.setValue(j,"batchingColorTexture",ie._colorsTexture,E));const vi=re.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&Je.update(ie,re,kn),(gt||Be.receiveShadow!==ie.receiveShadow)&&(Be.receiveShadow=ie.receiveShadow,Lt.setValue(j,"receiveShadow",ie.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&B.environment!==null&&(Wt.envMapIntensity.value=B.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=fb()),gt){if(Lt.setValue(j,"toneMappingExposure",X.toneMappingExposure),Be.needsLights&&Ra(Wt,Ji),Le&&te.fog===!0&&de.refreshFogUniforms(Wt,Le),de.refreshMaterialUniforms(Wt,te,De,Ve,R.state.transmissionRenderTarget[w.id]),Be.needsLights&&Be.lightProbeGrid){const kt=Be.lightProbeGrid;Wt.probesSH.value=kt.texture,Wt.probesMin.value.copy(kt.boundingBox.min),Wt.probesMax.value.copy(kt.boundingBox.max),Wt.probesResolution.value.copy(kt.resolution)}hc.upload(j,is(Be),Wt,E)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(hc.upload(j,is(Be),Wt,E),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Lt.setValue(j,"center",ie.center),Lt.setValue(j,"modelViewMatrix",ie.modelViewMatrix),Lt.setValue(j,"normalMatrix",ie.normalMatrix),Lt.setValue(j,"modelMatrix",ie.matrixWorld),te.uniformsGroups!==void 0){const kt=te.uniformsGroups;for(let _i=0,Ii=kt.length;_i<Ii;_i++){const ss=kt[_i];fe.update(ss,kn),fe.bind(ss,kn)}}return kn}function Ra(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Us(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(w,B,re){const te=N.get(w);te.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),N.get(w.texture).__webglTexture=B,N.get(w.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:re,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){const re=N.get(w);re.__webglFramebuffer=B,re.__useDefaultFramebuffer=B===void 0};const Gt=j.createFramebuffer();this.setRenderTarget=function(w,B=0,re=0){G=w,oe=B,le=re;let te=null,ie=!1,Le=!1;if(w){const Pe=N.get(w);if(Pe.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(j.FRAMEBUFFER,Pe.__webglFramebuffer),V.copy(w.viewport),K.copy(w.scissor),ae=w.scissorTest,be.viewport(V),be.scissor(K),be.setScissorTest(ae),Q=-1;return}else if(Pe.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(Pe.__hasExternalTextures)E.rebindTextures(w,N.get(w.texture).__webglTexture,N.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const lt=w.depthTexture;if(Pe.__boundDepthTexture!==lt){if(lt!==null&&N.has(lt)&&(w.width!==lt.image.width||w.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}const $e=w.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Le=!0);const Ze=N.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[B])?te=Ze[B][re]:te=Ze[B],ie=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?te=N.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?te=Ze[re]:te=Ze,V.copy(w.viewport),K.copy(w.scissor),ae=w.scissorTest}else V.copy(me).multiplyScalar(De).floor(),K.copy(Ie).multiplyScalar(De).floor(),ae=Ge;if(re!==0&&(te=Gt),be.bindFramebuffer(j.FRAMEBUFFER,te)&&be.drawBuffers(w,te),be.viewport(V),be.scissor(K),be.setScissorTest(ae),ie){const Pe=N.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pe.__webglTexture,re)}else if(Le){const Pe=B;for(let $e=0;$e<w.textures.length;$e++){const Ze=N.get(w.textures[$e]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+$e,Ze.__webglTexture,re,Pe)}}else if(w!==null&&re!==0){const Pe=N.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Pe.__webglTexture,re)}Q=-1},this.readRenderTargetPixels=function(w,B,re,te,ie,Le,He,Pe=0){if(!(w&&w.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=N.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&He!==void 0&&($e=$e[He]),$e){be.bindFramebuffer(j.FRAMEBUFFER,$e);try{const Ze=w.textures[Pe],lt=Ze.format,ct=Ze.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Pe),!Pt.textureFormatReadable(lt)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(ct)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-te&&re>=0&&re<=w.height-ie&&j.readPixels(B,re,te,ie,H.convert(lt),H.convert(ct),Le)}finally{const Ze=G!==null?N.get(G).__webglFramebuffer:null;be.bindFramebuffer(j.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(w,B,re,te,ie,Le,He,Pe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=N.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&He!==void 0&&($e=$e[He]),$e)if(B>=0&&B<=w.width-te&&re>=0&&re<=w.height-ie){be.bindFramebuffer(j.FRAMEBUFFER,$e);const Ze=w.textures[Pe],lt=Ze.format,ct=Ze.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Pe),!Pt.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Ye),j.bufferData(j.PIXEL_PACK_BUFFER,Le.byteLength,j.STREAM_READ),j.readPixels(B,re,te,ie,H.convert(lt),H.convert(ct),0);const Et=G!==null?N.get(G).__webglFramebuffer:null;be.bindFramebuffer(j.FRAMEBUFFER,Et);const zt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await A_(j,zt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Ye),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Le),j.deleteBuffer(Ye),j.deleteSync(zt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,re=0){const te=Math.pow(2,-re),ie=Math.floor(w.image.width*te),Le=Math.floor(w.image.height*te),He=B!==null?B.x:0,Pe=B!==null?B.y:0;E.setTexture2D(w,0),j.copyTexSubImage2D(j.TEXTURE_2D,re,0,0,He,Pe,ie,Le),be.unbindTexture()};const Fs=j.createFramebuffer(),Er=j.createFramebuffer();this.copyTextureToTexture=function(w,B,re=null,te=null,ie=0,Le=0){let He,Pe,$e,Ze,lt,ct,Ye,Et,zt;const $t=w.isCompressedTexture?w.mipmaps[Le]:w.image;if(re!==null)He=re.max.x-re.min.x,Pe=re.max.y-re.min.y,$e=re.isBox3?re.max.z-re.min.z:1,Ze=re.min.x,lt=re.min.y,ct=re.isBox3?re.min.z:0;else{const Wt=Math.pow(2,-ie);He=Math.floor($t.width*Wt),Pe=Math.floor($t.height*Wt),w.isDataArrayTexture?$e=$t.depth:w.isData3DTexture?$e=Math.floor($t.depth*Wt):$e=1,Ze=0,lt=0,ct=0}te!==null?(Ye=te.x,Et=te.y,zt=te.z):(Ye=0,Et=0,zt=0);const Ft=H.convert(B.format),rn=H.convert(B.type);let Be;B.isData3DTexture?(E.setTexture3D(B,0),Be=j.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(E.setTexture2DArray(B,0),Be=j.TEXTURE_2D_ARRAY):(E.setTexture2D(B,0),Be=j.TEXTURE_2D),be.activeTexture(j.TEXTURE0),be.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,B.flipY),be.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),be.pixelStorei(j.UNPACK_ALIGNMENT,B.unpackAlignment);const vn=be.getParameter(j.UNPACK_ROW_LENGTH),mt=be.getParameter(j.UNPACK_IMAGE_HEIGHT),kn=be.getParameter(j.UNPACK_SKIP_PIXELS),On=be.getParameter(j.UNPACK_SKIP_ROWS),gt=be.getParameter(j.UNPACK_SKIP_IMAGES);be.pixelStorei(j.UNPACK_ROW_LENGTH,$t.width),be.pixelStorei(j.UNPACK_IMAGE_HEIGHT,$t.height),be.pixelStorei(j.UNPACK_SKIP_PIXELS,Ze),be.pixelStorei(j.UNPACK_SKIP_ROWS,lt),be.pixelStorei(j.UNPACK_SKIP_IMAGES,ct);const Ji=w.isDataArrayTexture||w.isData3DTexture,Lt=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){const Wt=N.get(w),vi=N.get(B),kt=N.get(Wt.__renderTarget),_i=N.get(vi.__renderTarget);be.bindFramebuffer(j.READ_FRAMEBUFFER,kt.__webglFramebuffer),be.bindFramebuffer(j.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Ii=0;Ii<$e;Ii++)Ji&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,N.get(w).__webglTexture,ie,ct+Ii),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,N.get(B).__webglTexture,Le,zt+Ii)),j.blitFramebuffer(Ze,lt,He,Pe,Ye,Et,He,Pe,j.DEPTH_BUFFER_BIT,j.NEAREST);be.bindFramebuffer(j.READ_FRAMEBUFFER,null),be.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ie!==0||w.isRenderTargetTexture||N.has(w)){const Wt=N.get(w),vi=N.get(B);be.bindFramebuffer(j.READ_FRAMEBUFFER,Fs),be.bindFramebuffer(j.DRAW_FRAMEBUFFER,Er);for(let kt=0;kt<$e;kt++)Ji?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Wt.__webglTexture,ie,ct+kt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Wt.__webglTexture,ie),Lt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,vi.__webglTexture,Le,zt+kt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,vi.__webglTexture,Le),ie!==0?j.blitFramebuffer(Ze,lt,He,Pe,Ye,Et,He,Pe,j.COLOR_BUFFER_BIT,j.NEAREST):Lt?j.copyTexSubImage3D(Be,Le,Ye,Et,zt+kt,Ze,lt,He,Pe):j.copyTexSubImage2D(Be,Le,Ye,Et,Ze,lt,He,Pe);be.bindFramebuffer(j.READ_FRAMEBUFFER,null),be.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Lt?w.isDataTexture||w.isData3DTexture?j.texSubImage3D(Be,Le,Ye,Et,zt,He,Pe,$e,Ft,rn,$t.data):B.isCompressedArrayTexture?j.compressedTexSubImage3D(Be,Le,Ye,Et,zt,He,Pe,$e,Ft,$t.data):j.texSubImage3D(Be,Le,Ye,Et,zt,He,Pe,$e,Ft,rn,$t):w.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Le,Ye,Et,He,Pe,Ft,rn,$t.data):w.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Le,Ye,Et,$t.width,$t.height,Ft,$t.data):j.texSubImage2D(j.TEXTURE_2D,Le,Ye,Et,He,Pe,Ft,rn,$t);be.pixelStorei(j.UNPACK_ROW_LENGTH,vn),be.pixelStorei(j.UNPACK_IMAGE_HEIGHT,mt),be.pixelStorei(j.UNPACK_SKIP_PIXELS,kn),be.pixelStorei(j.UNPACK_SKIP_ROWS,On),be.pixelStorei(j.UNPACK_SKIP_IMAGES,gt),Le===0&&B.generateMipmaps&&j.generateMipmap(Be),be.unbindTexture()},this.initRenderTarget=function(w){N.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),be.unbindTexture()},this.resetState=function(){oe=0,le=0,G=null,be.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=r=>{const e=mb(r);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},xb=it.createContext({}),vb=()=>it.useContext(xb),_b=it.forwardRef(({color:r,size:e,strokeWidth:t,absoluteStrokeWidth:s,className:o="",children:l,iconNode:u,...f},h)=>{const{size:p=24,strokeWidth:v=2,absoluteStrokeWidth:y=!1,color:g="currentColor",className:S=""}=vb()??{},T=s??y?Number(t??v)*24/Number(e??p):t??v;return it.createElement("svg",{ref:h,...$d,width:e??p??$d.width,height:e??p??$d.height,stroke:r??g,strokeWidth:T,className:H0("lucide",S,o),...!l&&!gb(f)&&{"aria-hidden":"true"},...f},[...u.map(([P,_])=>it.createElement(P,_)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=(r,e)=>{const t=it.forwardRef(({className:s,...o},l)=>it.createElement(_b,{ref:l,iconNode:e,className:H0(`lucide-${pb(Qg(r))}`,`lucide-${r}`,s),...o}));return t.displayName=Qg(r),t};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Sb=Qt("activity",yb);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M12 6.528V3a1 1 0 0 1 1-1h0",key:"11qiee"}],["path",{d:"M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21",key:"110c12"}]],Eb=Qt("apple",Mb);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Tb=Qt("camera",bb);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],G0=Qt("circle-check",wb);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Cb=Qt("chevron-down",Ab);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],gr=Qt("clipboard-list",Rb);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],Rc=Qt("dumbbell",Pb);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],lh=Qt("flame",Nb);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],Do=Qt("gauge",Lb);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]],W0=Qt("goal",Db);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],Ub=Qt("leaf",Ib);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],kb=Qt("boxes",Fb);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M5 12h14",key:"1ays0h"}]],Pc=Qt("minus",Ob);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m16 17 2 2 4-4",key:"uh5qu3"}],["path",{d:"M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",key:"kpkbpo"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]],zb=Qt("package-check",Bb);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Nc=Qt("plus",Vb);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],wo=Qt("rotate-ccw",Hb);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Wb=Qt("settings-2",Gb);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]],ch=Qt("shopping-basket",jb);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],j0=Qt("sparkles",Xb);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],qb=Qt("timer",$b);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],Lc=Qt("utensils",Yb);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],uh=Qt("x",Kb);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Qb=Qt("zap",Zb),Ki={p:0,c:0,f:0,kcal:0};function Dn(r,e,t){return Math.max(e,Math.min(t,Number(r)||0))}function ti(r,e=0){return Number((Number(r)||0).toFixed(e))}function pr(r,e=1){return!Number.isFinite(Number(r))||Number(r)<=0?0:Math.max(0,Math.round(Number(r)/e)*e)}function dh(r=Ki){return Number.isFinite(r.kcal)?r.kcal:(r.p||0)*4+(r.c||0)*4+(r.f||0)*9}function fh(r=Ki){return{...r,kcal:dh(r)}}function jf(...r){return fh(r.reduce((e,t)=>({p:e.p+((t==null?void 0:t.p)||0),c:e.c+((t==null?void 0:t.c)||0),f:e.f+((t==null?void 0:t.f)||0),kcal:e.kcal+dh(t||Ki)}),{...Ki}))}function Ao(r=Ki,e=0){return fh({p:(r.p||0)*e,c:(r.c||0)*e,f:(r.f||0)*e,...Number.isFinite(r.kcal)?{kcal:r.kcal*e}:{}})}function Jb(r={}){const e=Dn(r.bodyWeightKg,1,300),t=Dn(r.proteinPerKg,0,5),s=Dn(r.fatMinPerKg,0,3),o=ti(Dn(r.kcal,0,9e3)),l=ti(e*t,1),u=ti(e*s,1),f=Math.max(0,o-l*4-u*9),h=ti(f/4,1);return{p:l,c:h,f:u,kcal:o}}function eT(r=0,e=1){const t=Dn(r,0,1/0)/Math.max(1,Dn(e,1,300));return t<2?{label:"低碳",tone:"amber",note:"碳水低于 2.0g/kg，今天算收紧日"}:t<3?{label:"中碳",tone:"green",note:"碳水在 2.0-3.0g/kg，训练和恢复都比较稳"}:{label:"高碳",tone:"red",note:"碳水超过 3.0g/kg，更像补糖或高活动日"}}function tT(r=Ki,e=Ki,t=1){const s=Math.max(1,dh(r)),o=Math.max(1,Dn(t,1,300)),l=(r.p||0)*4,u=(r.c||0)*4,f=(r.f||0)*9;return{proteinPct:ti(l/s*100,1),carbPct:ti(u/s*100,1),fatPct:ti(f/s*100,1),proteinPerKg:ti((r.p||0)/o,1),carbPerKg:ti((r.c||0)/o,1),fatPerKg:ti((r.f||0)/o,1),proteinTargetPerKg:ti((e.p||0)/o,1),carbTargetPerKg:ti((e.c||0)/o,1),carbDay:eT(r.c||0,o)}}function nT(r,e){const t=pr(Dn(e,0,r.max??1/0),r.step||1);return{...r,qty:t,macro:Ao(r.unitMacro,t)}}function Xf(r,e){const t=r.kcal-e.kcal,s=Math.pow(t/(t>0?150:125),2)*8+Math.max(0,t-220)*.28,o=Math.max(0,e.p-r.p),l=Math.max(0,r.p-e.p),u=r.c-e.c,f=Math.max(0,e.f-r.f),h=Math.max(0,r.f-e.f);return s+Math.pow(o/4,2)*28+Math.pow(l/12,2)*4+Math.pow(u/14,2)*10+Math.pow(f/4,2)*24+Math.pow(h/7,2)*12}function iT(r){const e=r.step||1,t=Math.max(0,r.max??r.qty??e*20),s=Math.floor(t/e),o=new Set([0,pr(r.qty||0,e),pr(t,e)]);if(s<=90)for(let l=0;l<=s;l+=1)o.add(pr(l*e,e));else{for(let l=-14;l<=14;l+=1)o.add(pr((r.qty||0)+l*e,e));[.15,.25,.35,.5,.65,.8,1].forEach(l=>o.add(pr(t*l,e)))}return[...o].filter(l=>l>=0&&l<=t).sort((l,u)=>l-u)}function rT(r,e,t){const s=t.reduce((v,y)=>jf(v,Ao(y.unitMacro,y.max??0)),Ki),o=jf(r,s),l=r.p>e.p?r.p-e.p:Math.max(0,e.p-o.p),u=r.c>e.c?r.c-e.c:Math.max(0,e.c-o.c),f=r.f>e.f?r.f-e.f:Math.max(0,e.f-o.f),h=Math.max(0,r.kcal-e.kcal-220),p=Math.max(0,e.kcal-o.kcal);return Math.pow(l/6,2)*30+Math.pow(u/22,2)*10+Math.pow(f/7,2)*20+Math.pow(h/110,2)*12+Math.pow(p/160,2)*8+Xf(r,e)*.015}function sT(r,e,t,s={}){const o=r.filter(h=>h&&h.unitMacro&&(h.max??0)>0),l=s.beamWidth??520;let u=[{choices:[],macro:fh(e||Ki),rank:0}];o.forEach((h,p)=>{const v=o.slice(p+1),y=iT(h),g=[];u.forEach(S=>{y.forEach(T=>{const P=Ao(h.unitMacro,T),_=jf(S.macro,P),x=rT(_,t,v)+Math.abs(T-(h.qty||0))*5e-4;g.push({choices:[...S.choices,T],macro:_,rank:x})})}),g.sort((S,T)=>S.rank-T.rank),u=g.slice(0,l)});const f=u.reduce((h,p)=>Xf(p.macro,t)<Xf(h.macro,t)?p:h,u[0]);return o.map((h,p)=>nT(h,f.choices[p]||0)).filter(h=>h.qty>0)}function X0(r){return r.reduce((e,t)=>({...e,[t.key]:{enabled:t.defaultEnabled!==!1,target:t.defaultTarget??0,stock:t.defaultStock??0}}),{})}function $f(r,e){const t=X0(e);return e.reduce((s,o)=>{const l=(r==null?void 0:r[o.key])||{},u=o.max??1/0;return s[o.key]={enabled:l.enabled??t[o.key].enabled,target:Dn(l.target??t[o.key].target,0,u),stock:Dn(l.stock??t[o.key].stock,0,u)},s},{})}function aT(r,e,t=7){const s=$f(e,r),o=Dn(t,1,21);return r.map(l=>{const u=s[l.key],f=l.max??1/0,h=Dn(u.target,0,f),p=Dn(pr(h*o/7,l.step||1),0,f),v=Dn(pr(u.stock,l.step||1),0,f),y=u.enabled?Dn(pr(Math.max(0,p-v),l.step||1),0,f):0,g=l.unitMacro||Ki;return{...l,enabled:u.enabled,weeklyTarget:h,targetQty:p,stockQty:v,buyQty:y,weeklyQty:y,qty:y,unitMacro:g,macro:Ao(g,y),expectedMacro:Ao(g,p),needState:u.enabled&&y>0?"need":"ok"}})}function qd(r,e){return`${ti(r,e==="g"?0:1)}${e}`}function oT(r,e={}){return r.filter(t=>t.enabled&&t.buyQty>0).sort((t,s)=>(e[t.tone]??9)-(e[s.tone]??9)||s.buyQty-t.buyQty).map((t,s)=>{const o=qd(t.targetQty,t.unit),l=qd(t.stockQty,t.unit),u=qd(t.buyQty,t.unit),f=t.buyHint||(t.stockQty>0?`家里还有 ${l}，补到目标 ${o}`:`本周期目标 ${o}`);return{...t,order:s+1,buyText:u,targetText:o,stockText:l,reason:f}})}const hh=r=>`./assets/${r}`,ph=r=>hh(`generated/${r}`),So={bodyWeightKg:83,proteinPerKg:1.8,fatMinPerKg:.6,kcal:2e3},lT=2900,mh={pasta:{name:"意面 · Garlic oil",short:"意面",sub:"力量日最爽",unit:"g",step:10,perUnit:{p:.12,c:.71,f:.015},kcalUnit:3.55,color:"#ffb55c"},soba:{name:"荞麦面 · Soba",short:"荞麦",sub:"清爽低负担",unit:"g",step:10,perUnit:{p:.14,c:.66,f:.023},kcalUnit:3.44,color:"#9fb58f"},nissin:{name:"日清非油炸",short:"日清",sub:"懒人汤面",unit:"包",step:1,perUnit:{p:6.7,c:55,f:4.9},kcalUnit:291,color:"#ff766f"},fresh_noodle:{name:"冷藏鲜面 · 生ラーメン",short:"鲜面",sub:"冷藏柜无调味包",unit:"g",step:10,perUnit:{p:.0869,c:.5469,f:.0123,kcal:2.623},kcalUnit:2.623,color:"#f0c68a"},pho:{name:"越南米粉",short:"米粉",sub:"低脂换口味",unit:"包",step:1,perUnit:{p:4,c:43,f:2},kcalUnit:210,color:"#7bd6d0"},bifun:{name:"纯干米粉",short:"干米粉",sub:"纯碳水补满",unit:"g",step:10,perUnit:{p:.06,c:.79,f:.005},kcalUnit:3.45,color:"#f7df77"}},$0={beef:{label:"牛肉切り落とし",short:"牛肉",tag:"raw · per g",unit:"g",step:10,p:.19,c:0,max:650,note:"脂肪按包装校准"},chicken:{label:"速食鸡胸",short:"鸡胸",tag:"per pack",unit:"块",step:1,p:22,c:1,f:2,max:6,note:"最稳高蛋白"},duck:{label:"合鸭胸去皮",short:"合鸭",tag:"100g serve",unit:"份",step:1,p:21,c:.5,f:6,max:4,note:"香但不太肥"},kfc:{label:"KFC 原味鸡",short:"KFC",tag:"per piece",unit:"块",step:1,p:18,c:8,f:14,max:5,note:"爽，但盐高"},oikos:{label:"Oikos 高蛋白酸奶",short:"Oikos",tag:"per cup",unit:"個",step:1,p:12,c:5,f:0,max:8,note:"零脂补蛋白"}},gh={egg_fried:{label:"煎蛋",short:"煎蛋",unit:"个",step:1,p:6,c:.4,f:7,max:6},sauce:{label:"ペペロン酱",short:"蒜油酱",unit:"包",step:1,p:.9,c:1.5,f:10,max:2},olive:{label:"橄榄油",short:"橄榄油",unit:"小勺",step:1,p:0,c:0,f:4.5,max:6},nuts:{label:"素焼きナッツ",short:"坚果",unit:"10g",step:1,p:2,c:2,f:5,max:5},avocado:{label:"アボカド",short:"牛油果",unit:"半个",step:1,p:1,c:4,f:15,max:2}},Vi={banana:{label:"香蕉",unit:"根",step:1,max:4,p:1,c:27,f:.3},apple:{label:"苹果",unit:"个",step:1,max:3,p:.4,c:35,f:.3},kiwi:{label:"奇异果",unit:"个",step:1,max:4,p:1,c:14,f:.2},pineapple:{label:"切块菠萝 240g",unit:"盒",step:1,max:2,p:1.44,c:31.2,f:.24},yogurt:{label:"无糖酸奶",unit:"g",step:50,max:400,p:.036,c:.049,f:.03}},q0=[{key:"beef",tone:"red",source:"protein",sourceKey:"beef",label:"牛肉切り落とし",short:"牛肉",unit:"g",step:100,defaultTarget:1200,max:3e3,buyHint:"晚餐主蛋白，先拿这个"},{key:"chicken",tone:"red",source:"protein",sourceKey:"chicken",label:"速食鸡胸",short:"鸡胸",unit:"块",step:1,defaultTarget:3,max:12,buyHint:"懒人备用蛋白"},{key:"oikos",tone:"red",source:"protein",sourceKey:"oikos",label:"Oikos 高蛋白酸奶",short:"Oikos",unit:"個",step:1,defaultTarget:4,max:14,buyHint:"零脂补蛋白"},{key:"pasta",tone:"green",source:"carb",sourceKey:"pasta",label:"干意面",short:"意面",unit:"g",step:100,defaultTarget:500,max:2e3,buyHint:"主力晚餐碳水"},{key:"soba",tone:"green",source:"carb",sourceKey:"soba",label:"荞麦面",short:"荞麦",unit:"g",step:100,defaultTarget:400,max:1600,buyHint:"清爽换口味"},{key:"nissin",tone:"green",source:"carb",sourceKey:"nissin",label:"日清非油炸",short:"日清",unit:"包",step:1,defaultTarget:2,max:10,buyHint:"没时间时顶上"},{key:"fresh_noodle",tone:"green",source:"carb",sourceKey:"fresh_noodle",label:"冷藏鲜面",short:"鲜面",unit:"g",step:10,defaultTarget:400,max:2e3,buyHint:"冷藏柜无调味包，按 10g 算"},{key:"pineapple",tone:"gold",source:"extra",sourceKey:"pineapple",label:"菠萝 240g",short:"菠萝",unit:"盒",step:1,defaultTarget:2,max:8,buyHint:"训练前后直接吃"},{key:"banana",tone:"gold",source:"extra",sourceKey:"banana",label:"香蕉",short:"香蕉",unit:"根",step:1,defaultTarget:4,max:14,buyHint:"快速补碳水"},{key:"apple",tone:"gold",source:"extra",sourceKey:"apple",label:"苹果",short:"苹果",unit:"个",step:1,defaultTarget:2,max:10,buyHint:"顶饥水果"},{key:"egg_fried",tone:"amber",source:"fat",sourceKey:"egg_fried",label:"鸡蛋",short:"鸡蛋",unit:"个",step:1,defaultTarget:6,max:20,buyHint:"补脂肪和口感"},{key:"sauce",tone:"amber",source:"fat",sourceKey:"sauce",label:"ペペロン酱",short:"蒜油酱",unit:"包",step:1,defaultTarget:3,max:12,buyHint:"意面直接好吃"},{key:"nuts",tone:"amber",source:"fat",sourceKey:"nuts",label:"素焼きナッツ",short:"坚果",unit:"10g",step:1,defaultTarget:4,max:20,buyHint:"少量脂肪备用"}],Y0={chicken:{label:"鸡胸",unit:"块",step:1,max:10,p:22,c:1,f:2},egg:{label:"全蛋",unit:"个",step:1,max:10,p:6,c:.5,f:5},oikos:{label:"Oikos",unit:"個",step:1,max:6,p:12,c:5,f:0},onigiri:{label:"饭团",unit:"个",step:1,max:6,p:3,c:39,f:.5},nissin:{label:"日清面",unit:"包",step:1,max:4,p:6.7,c:55,f:4.9},rice:{label:"米饭",unit:"g",step:50,max:1e3,p:.026,c:.28,f:.003},beef:{label:"牛肉",unit:"g",step:50,max:600,p:.19,c:0,f:.072},pasta:{label:"干意面",unit:"g",step:50,max:300,p:.12,c:.71,f:.015},banana:{label:"香蕉",unit:"根",step:1,max:4,p:1,c:27,f:.25}},Ta={chicken:{label:"鸡胸",unit:"块",step:1,max:5,p:22,c:1,f:2},eggs:{label:"全蛋",unit:"个",step:1,max:6,p:6,c:.5,f:5},banana:{label:"香蕉",unit:"根",step:1,max:4,p:1,c:27,f:.25},pineapple:{label:"菠萝 240g",unit:"盒",step:1,max:2,p:1.44,c:31.2,f:.24},oikos:{label:"Oikos",unit:"個",step:1,max:5,p:12,c:5,f:0}},Qr={tomato:{label:"无盐番茄汁",sub:"K 600 / 200ml",p:1.8,c:7.1,f:0,kcal:39,k:600,na:5},yasai:{label:"野菜一日",sub:"K 740 / 200ml",p:3,c:14.5,f:0,kcal:75,k:740,na:80},none:{label:"不补钾",sub:"今天省了",p:0,c:0,f:0,kcal:0,k:0,na:0}},K0=[{id:"burger",label:"汉堡 + 薯条",kcal:980},{id:"ramen",label:"拉面 + 饭",kcal:1200},{id:"sushi",label:"回转寿司 12 皿",kcal:1050},{id:"pizza",label:"Pizza 半张",kcal:1150},{id:"dessert",label:"甜品奶茶",kcal:620},{id:"katsu",label:"炸猪排咖喱",kcal:1450}],cT=[{id:"plan",label:"今日",icon:Lc},{id:"detail",label:"明细",icon:Do},{id:"shop",label:"采购",icon:ch},{id:"cheat",label:"放松",icon:lh}],gi={p:0,c:0,f:0,kcal:0},cn=(r,e,t)=>Math.max(e,Math.min(t,Number(r)||0)),bt=(r,e=0)=>Number((Number(r)||0).toFixed(e)),Ca=r=>r.kcal??r.p*4+r.c*4+r.f*9,Co=r=>({...r,kcal:Ca(r)}),Xn=(...r)=>Co(r.reduce((e,t)=>({p:e.p+((t==null?void 0:t.p)||0),c:e.c+((t==null?void 0:t.c)||0),f:e.f+((t==null?void 0:t.f)||0),kcal:e.kcal+Ca(t||gi)}),{...gi}));function hi(r,e){return Co({p:r.p*e,c:r.c*e,f:r.f*e,...Number.isFinite(r.kcal)?{kcal:r.kcal*e}:{}})}async function Z0(r){var t;if((t=navigator.clipboard)!=null&&t.writeText&&window.isSecureContext)try{await navigator.clipboard.writeText(r);return}catch{}const e=document.createElement("textarea");e.value=r,e.setAttribute("readonly",""),e.style.position="fixed",e.style.left="-9999px",e.style.top="0",e.style.fontSize="16px",document.body.appendChild(e),e.focus(),e.select(),e.setSelectionRange(0,r.length);try{if(!document.execCommand("copy"))throw new Error("copy command failed")}finally{document.body.removeChild(e)}}function Q0(r){return Object.entries(r).filter(([e,t])=>Ta[e]&&t>0)}function uT(r){const e=Q0(r);return e.length?e.map(([t,s])=>`${Ta[t].label} ${bt(s)}${Ta[t].unit}`).join(" / "):"不吃"}function dT(r,e){const t=Qr[r]||Qr.none;return r==="none"||e<=0?"不喝":`${t.label} ${bt(e)}ml`}function J0(r,e,t){return Q0(r).length>0||e!=="none"&&t>0}function ex(r,e,t){return`${uT(r)} · ${dT(e,t)}`}function fT(r,e){return r.map(t=>{const s=t.qty,o=e[t.key]||0,l=t.max??1/0,u=cn(s+o,0,l),f=bt(u-s,t.step<1?1:2);return{...t,baseQty:s,qty:u,adjustment:f,macro:hi(t.unitMacro,u)}})}function Mo(r,e){return!Number.isFinite(r)||r<=0?0:Math.max(0,Math.round(r/e)*e)}function hT(r){return Co({p:r*.31/4,c:r*.49/4,f:r*.2/9,kcal:r})}function tx(r,e){const t=$0[r];return{...t,f:r==="beef"?e*.8/100:t.f}}function pT(r,e){return r.source==="protein"?tx(r.sourceKey,e):r.source==="carb"?mh[r.sourceKey].perUnit:r.source==="extra"?Vi[r.sourceKey]:r.source==="fat"?gh[r.sourceKey]:gi}function mT(r){return q0.map(e=>({...e,unitMacro:pT(e,r)}))}function gT(r,e){const[t,s]=it.useState(()=>{const o=Number(localStorage.getItem(r));return Number.isFinite(o)&&o>0?o:e});return it.useEffect(()=>{localStorage.setItem(r,String(t))},[r,t]),[t,s]}function Jg(r,e){const t=()=>typeof e=="function"?e():e,[s,o]=it.useState(()=>{try{const l=localStorage.getItem(r);return l?JSON.parse(l):t()}catch{return t()}});return it.useEffect(()=>{localStorage.setItem(r,JSON.stringify(s))},[r,s]),[s,o]}function xT({tone:r="warm"}){const e=it.useRef(null);return it.useEffect(()=>{const t=e.current;if(!t)return;const s=()=>{const I=document.createElement("canvas");I.dataset.engine="2d-fallback";const b=I.getContext("2d");t.appendChild(I);const U=()=>{const{width:le,height:G}=t.getBoundingClientRect(),Q=Math.min(window.devicePixelRatio||1,2);I.width=Math.max(1,Math.floor(le*Q)),I.height=Math.max(1,Math.floor(G*Q)),I.style.width=`${Math.max(1,le)}px`,I.style.height=`${Math.max(1,G)}px`,b.setTransform(Q,0,0,Q,0,0)};U();const X=new ResizeObserver(U);X.observe(t);let z=0;const Y=Array.from({length:46},(le,G)=>({angle:G*.72,radius:70+G%9*22,color:["#c8a86a","#6f8f7a","#d9d0bd"][G%3],size:2.5+G%5})),oe=()=>{z=window.requestAnimationFrame(oe);const{width:le,height:G}=I.getBoundingClientRect();b.clearRect(0,0,le,G);const Q=b.createRadialGradient(le*.55,G*.28,0,le*.55,G*.28,Math.max(le,G)*.75);Q.addColorStop(0,"rgba(200,168,106,0.10)"),Q.addColorStop(.45,"rgba(111,143,122,0.08)"),Q.addColorStop(1,"rgba(0,0,0,0)"),b.fillStyle=Q,b.fillRect(0,0,le,G),b.globalCompositeOperation="screen",Y.forEach(q=>{q.angle+=.006;const V=le*.5+Math.cos(q.angle)*q.radius*(le/390),K=G*.46+Math.sin(q.angle)*q.radius*.52*(G/844);b.beginPath(),b.fillStyle=q.color,b.globalAlpha=.24,b.arc(V,K,q.size,0,Math.PI*2),b.fill()}),b.globalAlpha=1,b.globalCompositeOperation="source-over"};return oe(),()=>{window.cancelAnimationFrame(z),X.disconnect(),t.removeChild(I)}},o=document.createElement("canvas");let l=!1;try{l=!!(o.getContext("webgl2")||o.getContext("webgl"))}catch{l=!1}if(!l)return s();const u=new G_,f=new ni(45,1,.1,100);f.position.set(0,0,9);let h;try{h=new hb({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{return s()}h.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),h.setClearColor(0,0),t.appendChild(h.domElement);const p=new _o;u.add(p),u.add(new my(16777215,.75));const v=new wg(16760179,3.4,22);v.position.set(4,2,6),u.add(v);const y=new wg(9752970,2.1,18);y.position.set(-5,-2,4),u.add(y);const g=r==="cool"?[7311226,12165996,14274749]:[13150314,7311226,14274749],S=new oh(.16,32,32),T=g.flatMap((I,b)=>{const U=new uy({color:I,emissive:I,emissiveIntensity:.22,roughness:.22,metalness:.24});return Array.from({length:9},(X,z)=>{const Y=new qi(S,U),oe=z/9*Math.PI*2+b*.55,le=2.05+b*.68;return Y.position.set(Math.cos(oe)*le,Math.sin(oe)*le*.48,b*-.4),Y.userData={angle:oe,radius:le,band:b,speed:.004+b*.0015},p.add(Y),Y})});[2.05,2.75,3.45].forEach((I,b)=>{const X=new ry(0,0,I,I*.48,0,Math.PI*2).getPoints(120).map(le=>new J(le.x,le.y,-.5+b*-.2)),z=new qn().setFromPoints(X),Y=new w0({color:g[b],transparent:!0,opacity:.14}),oe=new ey(z,Y);oe.rotation.z=b*.34,p.add(oe)});const P=120,_=new qn,x=new Float32Array(P*3);for(let I=0;I<P;I+=1){const b=I*1.618,U=1.5+I*37%100/22;x[I*3]=Math.cos(b)*U,x[I*3+1]=Math.sin(b*.9)*U*.42,x[I*3+2]=-2.2-I*17%80/32}_.setAttribute("position",new Li(x,3));const C=new ty(_,new A0({color:14206883,size:.035,transparent:!0,opacity:.22}));u.add(C);const D=()=>{const{width:I,height:b}=t.getBoundingClientRect();h.setSize(Math.max(1,I),Math.max(1,b),!1),f.aspect=Math.max(1,I)/Math.max(1,b),f.updateProjectionMatrix()};D();const L=new ResizeObserver(D);L.observe(t);let O=0;const R=()=>{O=window.requestAnimationFrame(R),p.rotation.z+=.0018,p.rotation.y=Math.sin(Date.now()*35e-5)*.18,C.rotation.z-=9e-4,T.forEach(I=>{I.userData.angle+=I.userData.speed;const{angle:b,radius:U,band:X}=I.userData;I.position.x=Math.cos(b)*U,I.position.y=Math.sin(b)*U*.48,I.position.z=-.25-X*.42+Math.sin(b*2)*.12}),h.render(u,f)};return R(),()=>{window.cancelAnimationFrame(O),L.disconnect(),h.dispose(),S.dispose(),_.dispose(),t.removeChild(h.domElement)}},[r]),M.jsx("div",{ref:e,className:"pointer-events-none fixed inset-0 -z-10 opacity-45","data-three-orbit":!0})}function vT(){const[r,e]=it.useState("plan"),[t,s]=Jg("cutting:targetProfile:v1",So),o=it.useMemo(()=>({...So,...t||{}}),[t]),l=it.useMemo(()=>Jb(o),[o]),[u,f]=gT("cutting:tdee",lT),[h,p]=it.useState("quick"),[v,y]=it.useState(800),[g,S]=it.useState({}),[T,P]=it.useState("pasta"),[_,x]=it.useState(["beef"]),[C,D]=it.useState(["sauce","egg_fried"]),[L,O]=it.useState({}),[R,I]=it.useState(13),[b,U]=it.useState({}),[X,z]=it.useState("tomato"),[Y,oe]=it.useState(400),[le,G]=it.useState(6.5),[Q,q]=it.useState(2e3),[V,K]=it.useState(7),[ae,k]=Jg("cutting:shopPlan:v1",()=>X0(q0)),[ee,Ue]=it.useState(!1),[Ve,De]=it.useState(!1),[ue,_e]=it.useState(!1),[me,Ie]=it.useState({}),[Ge,Qe]=it.useState({name:"手动加餐",p:0,c:0,f:0,kcal:0}),[Dt,ut]=it.useState({}),[_t,yt]=it.useState("idle"),[ft,Ht]=it.useState(""),[Bt,Jt]=it.useState(!1),j=it.useRef(0),Nt=(Se,ge,Me,Je=1/0)=>{Se(et=>{const st=cn(Me,0,Je),H={...et};return st>0?H[ge]=st:delete H[ge],H})},ht=Se=>{x(ge=>ge.includes(Se)?ge.length>1?ge.filter(Me=>Me!==Se):ge:[...ge,Se])},Pt=Se=>{D(ge=>ge.includes(Se)?ge.filter(Me=>Me!==Se):[...ge,Se])},be=it.useMemo(()=>{var Fs,Er;const Se=Object.entries(g).reduce((w,[B,re])=>Xn(w,hi(Y0[B],re)),gi),ge=h==="tally"&&Se.kcal>0?Se:hT(v),Me=Object.entries(b).reduce((w,[B,re])=>Xn(w,hi(Ta[B],re)),gi),Je=Qr[X]||Qr.none,et=Co(hi(Je,Y/200));et.kcal=Je.kcal*(Y/200);const st=Co(Ge),H=Xn(ge,Me,et,st),Ae=Object.entries(L).filter(([w,B])=>Vi[w]&&B>0),fe=Ae.reduce((w,[B,re])=>Xn(w,hi(Vi[B],re)),gi),Oe=Ae.map(([w,B])=>({key:`extra-${w}`,name:Vi[w].label,qty:B,unit:Vi[w].unit,step:Vi[w].step,max:Vi[w].max,unitMacro:Vi[w],macro:hi(Vi[w],B),tone:"gold"})),Ce=Xn(H,fe),ve=Math.max(0,l.p-Ce.p),je=_.map(w=>{const B=tx(w,R),re=ve/Math.max(1,_.length)/B.p,te=cn(Mo(re,B.step),0,B.max);return{key:w,name:B.label,short:B.short,qty:te,unit:B.unit,step:B.step,max:B.max,unitMacro:B,macro:hi(B,te),tone:"red"}}),at=je.reduce((w,B)=>Xn(w,B.macro),gi),Ut=Math.max(0,l.f-Ce.f-at.f),St=C.length?C:[],fn=St.map(w=>{const B=gh[w],re=Ut/Math.max(1,St.length)/B.f,te=cn(Mo(re,B.step),0,B.max);return{key:`fat-${w}`,name:B.label,short:B.short,qty:te,unit:B.unit,step:B.step,max:B.max,unitMacro:B,macro:hi(B,te),tone:"amber"}}),Un=fn.reduce((w,B)=>Xn(w,B.macro),gi),xi=Xn(Ce,at,Un),Sr=Math.max(0,l.kcal-xi.kcal),hn=mh[T],Zi=hn.unit==="包"?8:420,si=cn(Mo(Sr/hn.kcalUnit,hn.step),0,Zi),ns=hi(hn.perUnit,si),Ls={key:`carb-${T}`,name:hn.name,short:hn.short,qty:si,unit:hn.unit,step:hn.step,max:Zi,unitMacro:hn.perUnit,macro:ns,tone:"green"},Fn=sT([...je,...fn,Ls],Ce,l),Di=fT([...Fn.filter(w=>w.tone==="red"),...Fn.filter(w=>w.tone==="amber"),...Oe,...Fn.filter(w=>w.tone==="green")],me),Mr=Di.reduce((w,B)=>Xn(w,B.macro),gi),Qi=Xn(H,Mr),is=Math.round(u-Qi.kcal),rs=(((Fs=Qr[X])==null?void 0:Fs.k)||0)*(Y/200),Ds=(((Er=Qr[X])==null?void 0:Er.na)||0)*(Y/200),Is=le*393+Ds,Ra=Q+rs,Us=aT(mT(R),ae,V),Gt=Us.reduce((w,B)=>Xn(w,B.macro),gi);return{lunch:ge,pre:Me,drink:et,snack:st,beforeDinner:H,dinner:Mr,dinnerItems:Di,total:Qi,deficit:is,potassium:Ra,sodium:Is,shopping:Us,shoppingMacro:Gt,carb:hn}},[R,T,me,X,Y,L,C,Q,v,h,b,le,V,ae,Ge,g,l,u,_]),It=it.useMemo(()=>tT(be.total,l,o.bodyWeightKg),[be.total,o.bodyWeightKg,l]),N=K0.reduce((Se,ge)=>Se+(Dt[ge.id]||0)*ge.kcal,0),E=Math.round(be.total.kcal+N-u),Z=J0(b,X,Y),he=ex(b,X,Y),xe=Ge.kcal>0||Ge.p>0||Ge.c>0||Ge.f>0,we=(Se,ge)=>{Ie(Me=>{const Je=Se.baseQty??Se.qty,et=cn(Se.qty+ge,0,Se.max??1/0),st=bt(et-Je,Se.step<1?1:2),H={...Me};return st!==0?H[Se.key]=st:delete H[Se.key],H})},Ne=()=>{s(So),y(800),S({}),P("pasta"),x(["beef"]),D(["sauce","egg_fried"]),O({}),I(13),U({}),z("tomato"),oe(400),Ie({}),Qe({name:"手动加餐",p:0,c:0,f:0,kcal:0})};it.useEffect(()=>()=>window.clearTimeout(j.current),[]),it.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"})},[r]);const de=()=>({date:new Date().toISOString().slice(0,10),targetProfile:o,targets:l,lunch:be.lunch,pre:be.pre,drink:{key:X,ml:Y,macro:be.drink},snack:Ge,dinnerAdjustments:me,dinner:{items:be.dinnerItems,macro:be.dinner},total:be.total,deficit:be.deficit}),pe=async()=>{const Se={...de(),copiedAt:new Date().toISOString()},ge=JSON.stringify(Se,null,2);Ht(ge),window.clearTimeout(j.current),yt("copying");try{await Z0(ge),Jt(!1),yt("copied")}catch(Me){console.error(Me),yt("failed"),Jt(!0)}j.current=window.setTimeout(()=>yt("idle"),1800)},Fe=Se=>{window.requestAnimationFrame(()=>{var ge;(ge=document.getElementById(`plan-${Se}`))==null||ge.scrollIntoView({behavior:"smooth",block:"start"})})};return M.jsxs("div",{className:"min-h-screen overflow-hidden text-[#eee8dc]",children:[M.jsx(xT,{tone:r==="cheat"?"cool":"warm"}),M.jsx("div",{className:"premium-app-bg fixed inset-0 -z-20"}),M.jsx("div",{className:"premium-grid-bg fixed inset-0 -z-10 opacity-20"}),M.jsxs("div",{className:"mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-28 pt-4 sm:px-6 lg:px-8",children:[M.jsxs("header",{className:"premium-header-shadow sticky top-3 z-40 flex items-center justify-between gap-2 rounded-lg border border-[#d8c7a3]/12 bg-[#090b0a]/75 px-2 py-2 backdrop-blur-2xl sm:gap-3 sm:px-3",children:[M.jsxs("button",{onClick:()=>e("plan"),className:"flex min-w-0 items-center gap-2 text-left",children:[M.jsx("span",{className:"grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#d8c7a3] text-[#11110d]",children:M.jsx(j0,{className:"h-4 w-4"})}),M.jsxs("span",{className:"block min-w-0",children:[M.jsx("span",{className:"block truncate font-display text-base leading-none text-[#f2eadb]",children:"Cutting Lab"}),M.jsx("span",{className:"mt-1 block truncate text-[10px] uppercase tracking-[0.24em] text-[#918a7c]",children:"daily console"})]})]}),M.jsx("nav",{className:"ml-auto hidden shrink-0 grid-cols-4 rounded-lg border border-[#d8c7a3]/10 bg-[#151612]/70 p-1 lg:grid",children:M.jsx(e0,{tab:r,setTab:e,mode:"top"})})]}),r==="plan"&&M.jsx(_T,{model:be,macroReport:It,fuelActive:Z,onFuel:()=>De(!0),onSnack:()=>_e(!0),onCopy:pe,copyStatus:_t,onJump:Fe}),r==="plan"&&M.jsx(yT,{model:be,targets:l,targetProfile:o,onFuel:()=>De(!0),fuelActive:Z,fuelSummary:he,onSnack:()=>_e(!0),onCopy:pe,copyStatus:_t}),r==="plan"&&M.jsx(ST,{model:be,lunchMode:h,setLunchMode:p,lunchKcal:v,setLunchKcal:y,tally:g,setTally:S,setMapQty:Nt,carbPlan:T,setCarbPlan:P,proteinKeys:_,toggleProtein:ht,fatKeys:C,toggleFat:Pt,extraCarbs:L,setExtraCarbs:O,beefFat:R,setBeefFat:I,advancedOpen:ee,setAdvancedOpen:Ue,targets:l,targetProfile:o,setTargetProfile:s,macroReport:It,resetDefaults:Ne,onTuneDinner:we,resetDinnerAdjustments:()=>Ie({})}),r==="detail"&&M.jsx(MT,{model:be,targets:l,targetProfile:o,setTargetProfile:s,macroReport:It,tdee:u,setTdee:f,pre:b,setPre:U,setMapQty:Nt,drinkKey:X,setDrinkKey:z,drinkMl:Y,setDrinkMl:oe,saltG:le,setSaltG:G,foodK:Q,setFoodK:q}),r==="shop"&&M.jsx(ET,{model:be,shopDays:V,setShopDays:K,shopPlan:ae,setShopPlan:k}),r==="cheat"&&M.jsx(AT,{cheat:Dt,setCheat:ut,cheatTotal:N,cheatSurplus:E,tdee:u,dayKcal:be.total.kcal})]}),M.jsx(CT,{open:Ve,setOpen:De,pre:b,setPre:U,setMapQty:Nt,drinkKey:X,setDrinkKey:z,drinkMl:Y,setDrinkMl:oe,model:be}),M.jsx(PT,{open:ue,setOpen:_e,snack:Ge,setSnack:Qe,active:xe,dinnerSummary:be.dinnerItems.slice(0,4).map(Se=>`${Se.short||Se.name} ${bt(Se.qty)}${Se.unit}`).join(" · ")}),M.jsx(RT,{open:Bt,setOpen:Jt,text:ft,onCopied:()=>{Jt(!1),yt("copied"),window.clearTimeout(j.current),j.current=window.setTimeout(()=>yt("idle"),1800)}}),M.jsxs("button",{onClick:()=>_e(!0),className:"premium-fab-shadow fixed bottom-5 right-5 z-50 hidden h-14 w-14 place-items-center rounded-lg border border-[#d8c7a3]/18 bg-[#d8c7a3] text-[#11110d] transition hover:-translate-y-0.5 lg:grid","aria-label":"零食加餐",children:[M.jsx(Tb,{className:"h-6 w-6"}),xe&&M.jsx("span",{className:"absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#6f8f7a]"})]}),M.jsx("nav",{className:"premium-nav-shadow fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 rounded-lg border border-[#d8c7a3]/12 bg-[#080908]/82 p-1 backdrop-blur-2xl lg:hidden",children:M.jsx(e0,{tab:r,setTab:e,mode:"bottom"})})]})}function e0({tab:r,setTab:e,mode:t}){return cT.map(s=>{const o=s.icon;return M.jsxs("button",{onClick:()=>e(s.id),className:`grid h-11 place-items-center rounded-md px-2 text-[11px] transition ${t==="top"?"min-w-20 grid-cols-[16px_auto] gap-1.5":"grid-rows-[18px_auto] gap-0.5"} ${r===s.id?"premium-nav-active-shadow bg-[#d8c7a3] text-[#11110d]":"text-[#918a7c] hover:bg-[#d8c7a3]/8 hover:text-[#eee8dc]"}`,"aria-label":s.label,children:[M.jsx(o,{className:"h-4 w-4"}),M.jsx("span",{children:s.label})]},s.id)})}function _T({model:r,macroReport:e,fuelActive:t,onFuel:s,onSnack:o,onCopy:l,copyStatus:u,onJump:f}){const h={idle:"复制",copying:"复制中",copied:"已复制",failed:"重试"}[u]||"复制",p=[{key:"intake",icon:gr,label:"已吃",value:`${Math.round(r.lunch.kcal)} kcal`,onClick:()=>f("intake")},{key:"dinner",icon:Lc,label:"晚餐",value:`${Math.round(r.dinner.kcal)} kcal`,onClick:()=>f("dinner")},{key:"rhythm",icon:Do,label:e.carbDay.label,value:`C ${e.carbPerKg}g/kg`,onClick:()=>f("rhythm")},{key:"fuel",icon:Rc,label:"补给",value:t?"ON":"OFF",onClick:s},{key:"copy",icon:gr,label:h,value:"记录",onClick:l}];return M.jsx("div",{"data-plan-flow-dock":!0,className:"premium-header-shadow sticky top-[74px] z-30 rounded-lg border border-[#d8c7a3]/12 bg-[#090b0a]/82 p-1.5 backdrop-blur-2xl lg:top-[82px]",children:M.jsx("div",{className:"grid grid-cols-5 gap-1",children:p.map(v=>{const y=v.icon;return M.jsxs("button",{"data-flow-action":v.key,onClick:v.onClick,className:"min-w-0 rounded-md border border-[#d8c7a3]/8 bg-[#11130f]/70 px-1.5 py-2 text-left transition hover:border-[#d8c7a3]/28 hover:bg-[#171912]",children:[M.jsx(y,{className:"mx-auto h-4 w-4 text-[#b9a36c]"}),M.jsx("div",{className:"mt-1 truncate text-center font-cjk text-[11px] font-semibold leading-none text-[#f2eadb]",children:v.label}),M.jsx("div",{className:"mt-1 truncate text-center font-mono text-[9px] leading-none text-[#918a7c]",children:v.value})]},v.key)})})})}function yT({model:r,targets:e,targetProfile:t,onFuel:s,fuelActive:o,fuelSummary:l,onSnack:u,onCopy:f,copyStatus:h}){const p=r.deficit>=650?"text-[#9fb58f]":r.deficit>=300?"text-[#d8c7a3]":"text-[#c77e68]",v={idle:{label:"复制",sub:"今日记录",icon:gr},copying:{label:"复制中",sub:"clipboard",icon:gr},copied:{label:"已复制",sub:"可直接粘贴",icon:G0},failed:{label:"复制失败",sub:"再点一次",icon:gr}}[h]||{label:"复制",sub:"今日记录",icon:gr};return M.jsxs("section",{className:"premium-hero-grid relative grid min-h-[46vh] items-end gap-4 py-2 sm:min-h-[60vh] sm:gap-6 sm:py-4 lg:min-h-[72vh] lg:items-center",children:[M.jsxs("div",{className:"relative order-2 lg:order-1",children:[M.jsxs("div",{className:"mb-5 flex flex-wrap items-center gap-2",children:[M.jsxs("div",{className:"inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/12 bg-[#11130f]/78 px-3 py-2 text-xs text-[#bdb4a3] backdrop-blur-xl",children:[M.jsx(Sb,{className:"h-4 w-4 text-[#9fb58f]"}),M.jsxs("span",{children:[bt(t.bodyWeightKg)," kg · P ",bt(t.proteinPerKg,1),"g/kg · F min ",bt(t.fatMinPerKg,1),"g/kg · ",e.kcal," kcal"]})]}),M.jsxs("button",{"data-home-fuel-button":!0,onClick:s,className:`inline-flex max-w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-xs backdrop-blur-xl transition hover:-translate-y-0.5 ${o?"border-[#9fb58f]/35 bg-[#9fb58f]/12 text-[#d8e7cf]":"border-[#d8c7a3]/12 bg-[#11130f]/78 text-[#bdb4a3] hover:border-[#d8c7a3]/32"}`,"aria-label":`补给：${l}`,children:[M.jsx(Rc,{className:`h-4 w-4 shrink-0 ${o?"text-[#9fb58f]":"text-[#d8c7a3]"}`}),M.jsx("span",{className:"shrink-0 font-cjk font-semibold",children:"补给"}),M.jsx("span",{className:`rounded-md px-2 py-0.5 font-mono text-[10px] ${o?"bg-[#9fb58f] text-[#10110d]":"bg-[#d8c7a3]/10 text-[#cfc4b2]"}`,children:o?"ON":"OFF"}),M.jsx("span",{className:"hidden max-w-[260px] truncate text-[#918a7c] sm:inline",children:l})]})]}),M.jsxs("h1",{className:"max-w-2xl font-display text-4xl leading-[0.98] tracking-normal text-[#f3ecdc] sm:text-6xl lg:text-7xl",children:["今晚吃什么",M.jsx("span",{className:"block text-[#9fb58f]",children:"一眼定"})]}),M.jsx("p",{className:"mt-5 hidden max-w-xl text-sm leading-7 text-[#bdb4a3] sm:block sm:text-base",children:"输入今天已经吃掉的部分，系统把晚餐、补给和赤字压成一张清楚的执行卡。少解释，直接吃。"}),M.jsxs("div",{className:"mt-6 hidden grid-cols-3 gap-2 sm:flex sm:flex-wrap",children:[M.jsx(Kd,{icon:Qb,label:"零食",onClick:u}),M.jsx(Kd,{icon:v.icon,label:v.label,sub:v.sub,onClick:f,dataAttr:"copy-plan-button"}),M.jsx(Kd,{icon:W0,label:`${r.deficit>0?"-":"+"}${Math.abs(r.deficit)}`,sub:"今日赤字"})]})]}),M.jsxs("div",{className:"relative order-1 lg:order-2",children:[M.jsx("div",{className:"absolute -inset-6 rounded-lg bg-[#d8c7a3]/8 blur-3xl"}),M.jsxs("div",{className:"premium-card-shadow relative overflow-hidden rounded-lg border border-[#d8c7a3]/12 bg-[#11130f]/86 backdrop-blur-xl",children:[M.jsx("img",{src:ph("protocol-hero-premium.jpg"),alt:"Cutting Lab dinner visual",className:"h-[190px] w-full object-cover object-center saturate-[0.92] contrast-[1.04] sm:h-[360px] lg:h-[440px]"}),M.jsx("div",{className:"premium-hero-overlay absolute inset-0"}),M.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-4 sm:p-5",children:[M.jsxs("div",{className:"mb-3 flex items-end justify-between gap-3",children:[M.jsxs("div",{children:[M.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#d8c7a3]",children:"dinner"}),M.jsx("div",{className:"font-display text-4xl leading-none text-[#f3ecdc] sm:text-5xl",children:Math.round(r.dinner.kcal)}),M.jsx("div",{className:"mt-1 text-xs text-[#918a7c]",children:"晚餐热量"})]}),M.jsxs("div",{className:`rounded-lg border border-[#d8c7a3]/12 bg-[#090b0a]/72 px-3 py-2 text-right backdrop-blur ${p}`,children:[M.jsx("div",{className:"text-[10px] uppercase tracking-[0.2em] text-[#918a7c]",children:"今日赤字"}),M.jsxs("div",{className:"font-mono text-xl",children:[r.deficit>0?"-":"+",Math.abs(r.deficit)]})]})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[M.jsx(ac,{label:"P",value:r.total.p,target:e.p,unit:"g"}),M.jsx(ac,{label:"C",value:r.total.c,target:e.c,unit:"g"}),M.jsx(ac,{label:"F",value:r.total.f,target:e.f,unit:"g"}),M.jsx(ac,{label:"Kcal",value:r.total.kcal,target:e.kcal,unit:""})]})]})]})]})]})}function ST(r){const{model:e,lunchMode:t,setLunchMode:s,lunchKcal:o,setLunchKcal:l,tally:u,setTally:f,setMapQty:h,carbPlan:p,setCarbPlan:v,proteinKeys:y,toggleProtein:g,fatKeys:S,toggleFat:T,extraCarbs:P,setExtraCarbs:_,beefFat:x,setBeefFat:C,advancedOpen:D,setAdvancedOpen:L,targets:O,targetProfile:R,setTargetProfile:I,macroReport:b,resetDefaults:U,onTuneDinner:X,resetDinnerAdjustments:z}=r,Y=e.dinnerItems.some(V=>V.adjustment!==0),oe=it.useRef(!1),[le,G]=it.useState(String(Math.round(o)));it.useEffect(()=>{oe.current||G(String(Math.round(o)))},[o]);const Q=V=>{const K=V.replace(/\D/g,"");if(!K){G(""),l(0);return}const ae=K.replace(/^0+(?=\d)/,""),k=cn(ae,0,5e3);G(String(k)),l(k)},q=(V,K,ae,k)=>{I(ee=>({...So,...ee||{},[V]:cn(K,ae,k)}))};return M.jsxs("main",{className:"grid gap-6 lg:grid-cols-[0.9fr_1.1fr]",children:[M.jsxs("section",{className:"space-y-6",children:[M.jsxs(Pi,{id:"plan-intake",eyebrow:"01 · 先记今天",title:"今天吃到哪了",icon:gr,children:[M.jsx(NT,{value:t,onChange:s,options:[{value:"quick",label:"直接 kcal"},{value:"tally",label:"点选记账"}]}),t==="quick"?M.jsxs("div",{className:"mt-5",children:[M.jsx("label",{className:"text-[10px] uppercase tracking-[0.24em] text-[#918a7c]",children:"Lunch kcal"}),M.jsxs("div",{className:"mt-2 flex items-end gap-3",children:[M.jsx("input",{type:"text",inputMode:"numeric",pattern:"[0-9]*","aria-label":"午餐热量",value:le,onFocus:()=>{oe.current=!0},onBlur:()=>{oe.current=!1,G(String(Math.round(o)))},onChange:V=>Q(V.target.value),className:"w-36 border-b border-[#d8c7a3]/24 bg-transparent font-display text-6xl leading-none text-[#f2eadb] outline-none focus:border-[#d8c7a3]"}),M.jsx("span",{className:"pb-2 text-xs uppercase tracking-[0.2em] text-[#918a7c]",children:"kcal"})]}),M.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:[600,700,800,900,1e3].map(V=>M.jsx(Sc,{active:o===V,onClick:()=>l(V),children:V},V))})]}):M.jsx("div",{className:"mt-5 grid gap-2 sm:grid-cols-2",children:Object.entries(Y0).map(([V,K])=>M.jsx(Ec,{label:K.label,meta:`每${K.step}${K.unit} · ${Math.round(Ca(hi(K,K.step)))} kcal`,value:u[V]||0,unit:K.unit,step:K.step,max:K.max,onChange:ae=>h(f,V,ae,K.max)},V))})]}),M.jsx(Pi,{eyebrow:"02 · 选个口味",title:"今晚想吃什么",icon:Lc,children:M.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-5",children:Object.entries(mh).map(([V,K])=>M.jsxs("button",{onClick:()=>v(V),className:`rounded-lg border p-3 text-left transition ${p===V?"border-[#d8c7a3]/55 bg-[#d8c7a3]/12 text-[#f2eadb]":"border-[#d8c7a3]/10 bg-[#11130f]/72 text-[#918a7c] hover:border-[#d8c7a3]/28 hover:text-[#f2eadb]"}`,children:[M.jsx("div",{className:"font-cjk text-sm font-semibold",children:K.short}),M.jsx("div",{className:"mt-1 text-[10px] text-[#918a7c]",children:K.sub})]},V))})}),M.jsx(nx,{open:D,onToggle:()=>L(!D),title:"高级配置",subtitle:"肉、油脂、水果、牛肉脂肪、目标公式",children:M.jsxs("div",{className:"grid gap-5",children:[M.jsx(Ts,{title:"晚餐蛋白",children:M.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries($0).map(([V,K])=>M.jsx(Mc,{active:y.includes(V),onClick:()=>g(V),title:K.short,meta:K.note},V))})}),M.jsx(Ts,{title:"脂肪来源",children:M.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries(gh).map(([V,K])=>M.jsx(Mc,{active:S.includes(V),onClick:()=>T(V),title:K.short,meta:`${K.f}g 脂 / ${K.unit}`,tone:"amber"},V))})}),M.jsx(Ts,{title:"水果 / 酸奶",children:M.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(Vi).map(([V,K])=>M.jsx(Ec,{label:K.label,meta:`每${K.step}${K.unit} · C${Math.round(K.c*K.step)}`,value:P[V]||0,unit:K.unit,step:K.step,max:K.max,onChange:ae=>h(_,V,ae,K.max)},V))})}),M.jsxs(Ts,{title:"牛肉脂肪",children:[M.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,9,13,18].map(V=>M.jsxs(Sc,{active:x===V,onClick:()=>C(V),children:[V,"g"]},V))}),M.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[M.jsx("input",{type:"number",value:x,onChange:V=>C(cn(V.target.value,0,40)),className:"h-11 w-20 rounded-lg border border-[#d8c7a3]/12 bg-[#080908]/42 text-center font-mono text-lg text-[#f2eadb] outline-none focus:border-[#d8c7a3]"}),M.jsx("span",{className:"text-xs text-[#918a7c]",children:"脂質 g / 100g raw · 水煮按 80%"})]})]}),M.jsxs(Ts,{title:"目标公式",children:[M.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[["bodyWeightKg","体重","kg",30,250],["proteinPerKg","蛋白倍率","g/kg",.8,3],["fatMinPerKg","脂肪最低","g/kg",.3,1.5],["kcal","热量","kcal",1e3,5e3]].map(([V,K,ae,k,ee])=>M.jsx(Kr,{label:K,unit:ae,value:R[V],onChange:Ue=>q(V,Ue,k,ee)},V))}),M.jsx(ix,{targets:O,targetProfile:R}),M.jsxs("button",{onClick:U,className:"mt-3 inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/12 px-3 py-2 text-xs text-[#918a7c] transition hover:border-[#c77e68]/60 hover:text-[#c77e68]",children:[M.jsx(wo,{className:"h-4 w-4"}),"重置默认"]})]})]})})]}),M.jsxs("section",{className:"space-y-6",children:[M.jsxs(Pi,{id:"plan-dinner",eyebrow:"03 · 今晚答案",title:"今晚就这样吃",icon:j0,children:[M.jsx("div",{className:"grid gap-2",children:e.dinnerItems.map((V,K)=>M.jsx(UT,{item:V,index:K,onTune:X},V.key))}),Y&&M.jsxs("button",{onClick:z,className:"mt-3 inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/12 px-3 py-2 text-xs text-[#918a7c] transition hover:border-[#c77e68]/60 hover:text-[#c77e68]",children:[M.jsx(wo,{className:"h-4 w-4"}),"重置微调"]})]}),M.jsx(Pi,{id:"plan-rhythm",eyebrow:"04 · 今日节奏",title:"看一眼就够",icon:Do,children:M.jsxs("div",{className:"space-y-3",children:[M.jsx(oc,{label:"蛋白",value:e.total.p,target:O.p,unit:"g",color:"#c77e68"}),M.jsx(oc,{label:"碳水",value:e.total.c,target:O.c,unit:"g",color:"#d8c7a3"}),M.jsx(oc,{label:"脂肪",value:e.total.f,target:O.f,unit:"g",color:"#9fb58f"}),M.jsx(oc,{label:"热量",value:e.total.kcal,target:O.kcal,unit:"kcal",color:"#8fb8ad"}),M.jsx(DT,{report:b})]})})]})]})}function MT(r){const{model:e,targets:t,targetProfile:s,setTargetProfile:o,macroReport:l,tdee:u,setTdee:f,pre:h,setPre:p,setMapQty:v,drinkKey:y,setDrinkKey:g,drinkMl:S,setDrinkMl:T,saltG:P,setSaltG:_,foodK:x,setFoodK:C}=r,D=e.potassium>=e.sodium,L=(O,R,I,b)=>{o(U=>({...So,...U||{},[O]:cn(R,I,b)}))};return M.jsxs("main",{className:"grid gap-6 lg:grid-cols-[1fr_1fr]",children:[M.jsxs(Pi,{eyebrow:"今日账本",title:"吃进去的东西",icon:gr,children:[M.jsx(xo,{label:"午餐",macro:e.lunch}),M.jsx(xo,{label:"训练前",macro:e.pre}),M.jsx(xo,{label:"饮料/电解质",macro:e.drink}),M.jsx(xo,{label:"零食加餐",macro:e.snack}),M.jsx(xo,{label:"晚餐",macro:e.dinner,strong:!0})]}),M.jsxs(Pi,{eyebrow:"目标公式",title:"按体重自动分配",icon:W0,children:[M.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-5",children:[[["bodyWeightKg","体重","kg",30,250],["proteinPerKg","蛋白倍率","g/kg",.8,3],["fatMinPerKg","脂肪最低","g/kg",.3,1.5],["kcal","热量","kcal",1e3,5e3]].map(([O,R,I,b,U])=>M.jsx(Kr,{label:R,unit:I,value:s[O],onChange:X=>L(O,X,b,U)},O)),M.jsx(Kr,{label:"TDEE",unit:"kcal",value:u,onChange:O=>f(cn(O,0,9e3))})]}),M.jsx(ix,{targets:t,targetProfile:s})]}),M.jsx(Pi,{eyebrow:"今日结构",title:"占比和体重倍数",icon:Do,children:M.jsx(IT,{report:l,targets:t})}),M.jsx(Pi,{eyebrow:"训练前",title:"垫一口也算进去",icon:Rc,children:M.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(Ta).map(([O,R])=>M.jsx(Ec,{label:R.label,meta:`每${R.step}${R.unit} · ${Math.round(Ca(hi(R,R.step)))} kcal`,value:h[O]||0,unit:R.unit,step:R.step,max:R.max,onChange:I=>v(p,O,I,R.max)},O))})}),M.jsxs(Pi,{eyebrow:"电解质",title:"钾钠别太偏",icon:Ub,children:[M.jsx("div",{className:"grid grid-cols-3 gap-2",children:Object.entries(Qr).map(([O,R])=>M.jsx(Mc,{active:y===O,onClick:()=>g(O),title:R.label,meta:R.sub,tone:"green"},O))}),M.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[M.jsx(Kr,{label:"饮料",unit:"ml",value:S,onChange:O=>T(cn(O,0,2e3))}),M.jsx(Kr,{label:"盐",unit:"g",value:P,onChange:O=>_(cn(O,0,20))}),M.jsx(Kr,{label:"食物钾",unit:"mg",value:x,onChange:O=>C(cn(O,0,8e3))})]}),M.jsxs("div",{className:`mt-4 rounded-lg border p-4 ${D?"border-[#9fb58f]/30 bg-[#9fb58f]/10":"border-[#c77e68]/30 bg-[#c77e68]/10"}`,children:[M.jsxs("div",{className:"flex items-center justify-between gap-3",children:[M.jsx("span",{className:"text-sm text-zinc-300",children:"K / Na"}),M.jsx("span",{className:D?"text-[#9fb58f]":"text-[#c77e68]",children:D?"平衡":"钾偏低"})]}),M.jsxs("div",{className:"mt-2 text-xs text-[#918a7c]",children:["钾 ",Math.round(e.potassium)," mg · 钠 ",Math.round(e.sodium)," mg"]})]})]})]})}function ET({model:r,shopDays:e,setShopDays:t,setShopPlan:s}){const[o,l]=it.useState({}),[u,f]=it.useState(!1),h=[{tone:"red",label:"蛋白主菜",caption:"肉、鸡胸、Oikos 先补齐",icon:Rc,accent:"#c77e68"},{tone:"green",label:"主食碳水",caption:"按一周期望备货",icon:Lc,accent:"#9fb58f"},{tone:"gold",label:"水果加料",caption:"菠萝 240g、香蕉、苹果",icon:Eb,accent:"#d8c7a3"},{tone:"amber",label:"油脂口味",caption:"蛋、酱、坚果和风味",icon:lh,accent:"#c8a86a"}],p={red:0,green:1,gold:2,amber:3},v=Object.fromEntries(h.map(R=>[R.tone,R])),y=r.shopping.filter(R=>R.enabled),g=y.filter(R=>R.buyQty>0),S=y.filter(R=>R.buyQty<=0),T=h.map(R=>({...R,items:r.shopping.filter(I=>I.tone===R.tone)})).filter(R=>R.items.length>0),P=oT(r.shopping,p),_=P.filter(R=>o[R.key]).length,x=g.reduce((R,I)=>Xn(R,I.macro),gi),C=y.reduce((R,I)=>Xn(R,I.expectedMacro),gi),D=(R,I)=>{s(b=>{const U=$f(b,r.shopping);return{...U,[R]:{...U[R],...I}}})},L=()=>{s(R=>{const I=$f(R,r.shopping);return Object.fromEntries(Object.entries(I).map(([b,U])=>[b,{...U,stock:0}]))})},O=R=>{l(I=>({...I,[R]:!I[R]}))};return M.jsxs("main",{className:"grid gap-6",children:[M.jsxs("section",{className:"relative overflow-hidden rounded-lg border border-[#d8c7a3]/12 bg-[#10120f]/92",children:[M.jsx("img",{src:ph("shop-basket.jpg"),alt:"weekly grocery basket",className:"absolute inset-0 h-full w-full object-cover opacity-45"}),M.jsx("div",{className:"shop-hero-overlay absolute inset-0"}),M.jsxs("div",{className:"relative grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_0.95fr] lg:items-end",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/14 bg-[#080908]/58 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-[#b9a36c] backdrop-blur",children:[M.jsx(zb,{className:"h-4 w-4"}),"market run"]}),M.jsx("h2",{className:"mt-4 font-display text-4xl leading-none text-[#f2eadb] sm:text-5xl",children:"采购清单"}),M.jsx("p",{className:"mt-3 max-w-xl text-sm leading-6 text-[#cfc4b2]",children:"不用自己填。下面已经按进店顺序列好这轮直接买什么，库存只有需要微调时再打开。"}),M.jsxs("div",{className:"mt-5 flex flex-wrap items-center gap-2",children:[[3,5,7,10].map(R=>M.jsxs(Sc,{active:e===R,onClick:()=>t(R),children:[R," 天"]},R)),M.jsxs("button",{onClick:L,className:"inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/12 bg-[#080908]/58 px-3 py-2 text-xs text-[#918a7c] transition hover:border-[#d8c7a3]/32 hover:text-[#f2eadb]",children:[M.jsx(wo,{className:"h-4 w-4"}),"清空已有"]})]})]}),M.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[M.jsx(Yd,{icon:qb,label:"备货",value:`${e}天`,sub:"周期"}),M.jsx(Yd,{icon:kb,label:"商品",value:P.length,sub:`已拿${_}`}),M.jsx(Yd,{icon:Do,label:"本次",value:Math.round(x.kcal),sub:"kcal"})]})]})]}),M.jsxs(Pi,{eyebrow:"直接方案",title:"照单买这些",icon:ch,children:[P.length>0?M.jsx("div",{className:"grid gap-3 sm:grid-cols-2 xl:grid-cols-3",children:P.map(R=>M.jsx(bT,{item:R,group:v[R.tone],picked:!!o[R.key],onToggle:()=>O(R.key)},R.key))}):M.jsxs("div",{className:"rounded-lg border border-[#9fb58f]/20 bg-[#9fb58f]/10 p-4",children:[M.jsx("div",{className:"font-cjk text-sm font-semibold text-[#d8e7cf]",children:"这轮不用买"}),M.jsx("div",{className:"mt-1 text-xs leading-5 text-[#918a7c]",children:"已选品类的家里库存覆盖了这个备货周期。要强制生成清单可以点“清空已有”。"})]}),M.jsxs("div",{className:"mt-4 grid grid-cols-4 gap-2",children:[M.jsx(pi,{label:"商品",value:P.length}),M.jsx(pi,{label:"已拿",value:_}),M.jsx(pi,{label:"已够",value:S.length}),M.jsx(pi,{label:"Kcal",value:Math.round(x.kcal)})]})]}),M.jsx(nx,{open:u,onToggle:()=>f(!u),title:"库存微调",subtitle:"平时不用管；只有家里还有东西时再改目标和已有",children:M.jsxs("div",{className:"grid gap-6 lg:grid-cols-[0.86fr_1.14fr]",children:[M.jsxs("div",{className:"mt-4 rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/42 p-4",children:[M.jsx("div",{className:"text-[10px] uppercase tracking-[0.24em] text-[#918a7c]",children:"cycle target base"}),M.jsxs("div",{className:"mt-2 grid grid-cols-4 gap-2",children:[M.jsx(pi,{label:"P",value:Math.round(C.p)}),M.jsx(pi,{label:"C",value:Math.round(C.c)}),M.jsx(pi,{label:"F",value:Math.round(C.f)}),M.jsx(pi,{label:"Kcal",value:Math.round(C.kcal)})]})]}),M.jsx("div",{className:"grid gap-3",children:T.map(R=>M.jsx(TT,{group:R,shopDays:e,onUpdate:D},R.tone))})]})})]})}function bT({item:r,group:e,picked:t,onToggle:s}){const o=(e==null?void 0:e.icon)||ch,l=(e==null?void 0:e.accent)||"#d8c7a3";return M.jsxs("button",{"data-direct-buy-card":!0,onClick:s,"aria-pressed":t,className:`min-h-[156px] rounded-lg border p-4 text-left transition hover:-translate-y-0.5 ${t?"border-[#9fb58f]/42 bg-[#9fb58f]/12":"border-[#d8c7a3]/10 bg-[#080908]/46 hover:border-[#d8c7a3]/28"}`,children:[M.jsxs("div",{className:"flex items-start justify-between gap-3",children:[M.jsxs("span",{className:"inline-flex items-center gap-2 rounded-md px-2 py-1 text-[10px] uppercase tracking-[0.16em]",style:{backgroundColor:`${l}22`,color:l},children:[M.jsx(o,{className:"h-3.5 w-3.5"}),(e==null?void 0:e.label)||"商品"]}),M.jsx("span",{className:`grid h-8 w-8 place-items-center rounded-lg border ${t?"border-[#9fb58f]/40 bg-[#9fb58f] text-[#10110d]":"border-[#d8c7a3]/12 text-[#918a7c]"}`,children:M.jsx(G0,{className:"h-4 w-4"})})]}),M.jsxs("div",{className:"mt-4 min-w-0",children:[M.jsx("div",{className:"truncate font-cjk text-base font-semibold text-[#f2eadb]",children:r.label}),M.jsxs("div",{className:"mt-2 flex items-end gap-2",children:[M.jsx("span",{className:"font-display text-5xl leading-none text-[#f2eadb]",children:bt(r.buyQty)}),M.jsx("span",{className:"pb-1 text-xs text-[#918a7c]",children:r.unit})]}),M.jsx("div",{className:"mt-3 text-xs leading-5 text-[#bdb4a3]",children:r.reason}),M.jsxs("div",{className:"mt-2 text-[10px] text-[#918a7c]",children:["目标 ",r.targetText," · 已有 ",r.stockText]})]})]})}function Yd({icon:r,label:e,value:t,sub:s}){return M.jsxs("div",{className:"rounded-lg border border-[#d8c7a3]/12 bg-[#080908]/58 p-3 backdrop-blur",children:[M.jsx(r,{className:"h-4 w-4 text-[#b9a36c]"}),M.jsx("div",{className:"mt-3 font-display text-3xl leading-none text-[#f2eadb]",children:t}),M.jsxs("div",{className:"mt-1 text-[10px] uppercase tracking-[0.16em] text-[#918a7c]",children:[e," · ",s]})]})}function TT({group:r,shopDays:e,onUpdate:t}){const s=r.icon,o=r.items.filter(l=>l.enabled&&l.buyQty>0).length;return M.jsxs("section",{className:"rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/42 p-3",children:[M.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[M.jsxs("div",{className:"flex min-w-0 items-center gap-2",children:[M.jsx("span",{className:"grid h-9 w-9 shrink-0 place-items-center rounded-lg",style:{backgroundColor:`${r.accent}24`,color:r.accent},children:M.jsx(s,{className:"h-4 w-4"})}),M.jsxs("div",{className:"min-w-0",children:[M.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-[#f2eadb]",children:r.label}),M.jsx("div",{className:"mt-0.5 truncate text-[10px] text-[#918a7c]",children:r.caption})]})]}),M.jsxs("span",{className:"rounded-md border border-[#d8c7a3]/10 px-2 py-1 font-mono text-xs text-[#cfc4b2]",children:["补 ",o,"/",r.items.length]})]}),M.jsx("div",{className:"grid gap-2",children:r.items.map(l=>M.jsx(wT,{item:l,accent:r.accent,shopDays:e,onUpdate:t},l.key))})]})}function wT({item:r,accent:e,shopDays:t,onUpdate:s}){const o=f=>{s(r.key,{target:cn(Mo(r.weeklyTarget+f,r.step),0,r.max??1/0)})},l=f=>{s(r.key,{stock:cn(Mo(r.stockQty+f,r.step),0,r.max??1/0)})},u=r.enabled?r.buyQty>0?`补 ${bt(r.buyQty)}${r.unit}`:"已够":"跳过";return M.jsxs("div",{"data-shop-item-row":!0,className:`rounded-lg border border-[#d8c7a3]/8 bg-[#11130f]/68 p-3 transition ${r.enabled?"":"opacity-55"}`,children:[M.jsxs("div",{className:"grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start",children:[M.jsxs("div",{className:"min-w-0",children:[M.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-[#f2eadb]",children:r.name}),M.jsxs("div",{className:"mt-1 text-xs leading-5 text-[#918a7c]",children:["周目标 ",bt(r.weeklyTarget),r.unit," · ",t,"天目标 ",bt(r.targetQty),r.unit," · 家里 ",bt(r.stockQty),r.unit]})]}),M.jsxs("div",{className:"flex items-center justify-between gap-2 sm:justify-end",children:[M.jsxs("div",{className:"rounded-md px-2.5 py-1 text-right",style:{backgroundColor:`${e}22`},children:[M.jsx("div",{className:"font-mono text-sm text-[#f2eadb]",children:u}),M.jsx("div",{className:"mt-0.5 text-[10px] uppercase tracking-[0.14em] text-[#918a7c]",children:"this run"})]}),M.jsx("button",{onClick:()=>s(r.key,{enabled:!r.enabled}),className:"h-9 rounded-lg border border-[#d8c7a3]/10 px-3 text-xs text-[#cfc4b2] transition hover:border-[#d8c7a3]/35 hover:text-[#f2eadb]",children:r.enabled?"跳过":"加入"})]})]}),M.jsxs("div",{className:"mt-3 grid gap-2 sm:grid-cols-2",children:[M.jsx(t0,{label:"周目标",value:r.weeklyTarget,unit:r.unit,step:r.step,onMinus:()=>o(-r.step),onPlus:()=>o(r.step)}),M.jsx(t0,{label:"家里已有",value:r.stockQty,unit:r.unit,step:r.step,onMinus:()=>l(-r.step),onPlus:()=>l(r.step)})]})]})}function t0({label:r,value:e,unit:t,onMinus:s,onPlus:o}){return M.jsxs("div",{className:"flex items-center justify-between gap-2 rounded-lg border border-[#d8c7a3]/8 bg-[#080908]/40 px-2.5 py-2",children:[M.jsx("span",{className:"text-[10px] uppercase tracking-[0.18em] text-[#918a7c]",children:r}),M.jsxs("div",{className:"flex items-center gap-1",children:[M.jsx(ts,{label:`减少${r}`,onClick:s,icon:Pc}),M.jsxs("span",{className:"w-16 text-center font-mono text-xs text-[#f2eadb]",children:[bt(e),t]}),M.jsx(ts,{label:`增加${r}`,onClick:o,icon:Nc})]})]})}function AT({cheat:r,setCheat:e,cheatTotal:t,cheatSurplus:s,tdee:o,dayKcal:l}){const u=(f,h)=>{e(p=>{const v={...p},y=cn(h,0,9);return y>0?v[f]=y:delete v[f],v})};return M.jsxs("main",{className:"grid gap-6 lg:grid-cols-[1fr_0.9fr]",children:[M.jsx(Pi,{eyebrow:"放松一下",title:"想吃也能算",icon:lh,children:M.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:K0.map(f=>M.jsx("div",{className:"rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/42 p-3",children:M.jsxs("div",{className:"flex items-center justify-between gap-3",children:[M.jsxs("div",{children:[M.jsx("div",{className:"font-cjk text-sm text-[#f2eadb]",children:f.label}),M.jsxs("div",{className:"mt-1 text-xs text-[#918a7c]",children:[f.kcal," kcal"]})]}),M.jsx(LT,{value:r[f.id]||0,onChange:h=>u(f.id,h)})]})},f.id))})}),M.jsxs("section",{className:"overflow-hidden rounded-lg border border-[#d8c7a3]/12 bg-[#10120f]/92",children:[M.jsx("img",{src:hh("cheat.jpg"),alt:"cheat meal",className:"h-56 w-full object-cover"}),M.jsxs("div",{className:"p-5",children:[M.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#c77e68]",children:"吃完大概这样"}),M.jsx("div",{className:"mt-2 font-display text-6xl text-[#f2eadb]",children:t}),M.jsx("div",{className:"text-sm text-[#918a7c]",children:"放松热量"}),M.jsxs("div",{className:"mt-5 grid grid-cols-3 gap-2",children:[M.jsx(pi,{label:"今日总摄入",value:Math.round(l+t)}),M.jsx(pi,{label:"TDEE",value:o}),M.jsx(pi,{label:"盈余",value:(s>=0?"+":"")+s,hot:s>0})]}),M.jsxs("button",{onClick:()=>e({}),className:"mt-4 inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/12 px-3 py-2 text-xs text-[#918a7c] transition hover:border-[#c77e68]/60 hover:text-[#c77e68]",children:[M.jsx(wo,{className:"h-4 w-4"}),"清空"]})]})]})]})}function CT({open:r,setOpen:e,pre:t,setPre:s,setMapQty:o,drinkKey:l,setDrinkKey:u,drinkMl:f,setDrinkMl:h,model:p}){if(!r)return null;const v=J0(t,l,f),y=ex(t,l,f),g=Xn(p.pre,p.drink),S=()=>{s({}),u("none"),h(0)},T=()=>{s({banana:1}),u("tomato"),h(400)},P=()=>{s({pineapple:1}),u("tomato"),h(400)},_=x=>{u(x),x==="none"?h(0):f<=0&&h(400)};return M.jsxs("div",{className:"fixed inset-0 z-[70]",children:[M.jsx("button",{className:"absolute inset-0 bg-black/68 backdrop-blur-sm",onClick:()=>e(!1),"aria-label":"关闭补给"}),M.jsxs("aside",{className:"absolute inset-y-0 right-0 flex w-[min(460px,94vw)] flex-col border-l border-[#d8c7a3]/12 bg-[#0d0f0c] shadow-2xl",children:[M.jsxs("div",{className:"flex items-center justify-between border-b border-[#d8c7a3]/10 p-4",children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("img",{src:hh("pre.jpg"),alt:"",className:"h-12 w-12 rounded-lg object-cover"}),M.jsxs("div",{children:[M.jsx("div",{className:"font-display text-xl text-[#f2eadb]",children:"补给开关"}),M.jsx("div",{className:"text-[10px] uppercase tracking-[0.22em] text-[#918a7c]",children:"训练前吃什么喝什么"})]})]}),M.jsx("button",{onClick:()=>e(!1),className:"grid h-9 w-9 place-items-center rounded-lg border border-[#d8c7a3]/12 text-[#918a7c] hover:text-[#f2eadb]","aria-label":"关闭",children:M.jsx(uh,{className:"h-4 w-4"})})]}),M.jsxs("div",{className:"flex-1 overflow-y-auto p-4",children:[M.jsxs("div",{className:`rounded-lg border p-4 ${v?"border-[#9fb58f]/30 bg-[#9fb58f]/10":"border-[#d8c7a3]/10 bg-[#10120f]"}`,children:[M.jsxs("div",{className:"flex items-center justify-between gap-3",children:[M.jsx("span",{className:"text-[10px] uppercase tracking-[0.24em] text-[#918a7c]",children:"当前状态"}),M.jsx("span",{className:v?"text-[#9fb58f]":"text-[#918a7c]",children:v?"已补给":"不补给"})]}),M.jsx("div",{className:"mt-2 text-sm leading-6 text-[#ddd5c6]",children:y}),M.jsxs("div",{className:"mt-2 font-mono text-xs text-[#918a7c]",children:["P",bt(g.p)," C",bt(g.c)," F",bt(g.f)," · ",Math.round(g.kcal)," kcal"]})]}),M.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[M.jsxs("button",{onClick:S,className:"rounded-lg border border-[#d8c7a3]/10 bg-[#10120f] p-3 text-left transition hover:border-[#c77e68]/50",children:[M.jsx("div",{className:"font-cjk text-sm font-semibold text-[#f2eadb]",children:"一键不补给"}),M.jsx("div",{className:"mt-1 text-[10px] text-[#918a7c]",children:"不吃也不喝"})]}),M.jsxs("button",{onClick:T,className:"rounded-lg border border-[#d8c7a3]/30 bg-[#d8c7a3]/10 p-3 text-left transition hover:-translate-y-0.5",children:[M.jsx("div",{className:"font-cjk text-sm font-semibold text-[#f2eadb]",children:"轻补给"}),M.jsx("div",{className:"mt-1 text-[10px] text-[#918a7c]",children:"香蕉 + 番茄汁"})]}),M.jsxs("button",{onClick:P,className:"rounded-lg border border-[#9fb58f]/30 bg-[#9fb58f]/10 p-3 text-left transition hover:-translate-y-0.5",children:[M.jsx("div",{className:"font-cjk text-sm font-semibold text-[#f2eadb]",children:"菠萝盒"}),M.jsx("div",{className:"mt-1 text-[10px] text-[#918a7c]",children:"240g + 番茄汁"})]})]}),M.jsxs("div",{className:"mt-5 grid gap-5",children:[M.jsx(Ts,{title:"吃什么",children:M.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(Ta).map(([x,C])=>M.jsx(Ec,{label:C.label,meta:`每${C.step}${C.unit} · ${Math.round(Ca(hi(C,C.step)))} kcal`,value:t[x]||0,unit:C.unit,step:C.step,max:C.max,onChange:D=>o(s,x,D,C.max)},x))})}),M.jsxs(Ts,{title:"喝什么",children:[M.jsx("div",{className:"grid grid-cols-3 gap-2",children:Object.entries(Qr).map(([x,C])=>M.jsx(Mc,{active:l===x,onClick:()=>_(x),title:C.label,meta:C.sub,tone:"green"},x))}),M.jsx("div",{className:"mt-3 grid grid-cols-3 gap-2",children:[200,400,600].map(x=>M.jsxs(Sc,{active:f===x,onClick:()=>h(x),children:[x,"ml"]},x))}),M.jsx("div",{className:"mt-3",children:M.jsx(Kr,{label:"饮料",unit:"ml",value:f,onChange:x=>h(cn(x,0,2e3))})})]})]})]})]})]})}function RT({open:r,setOpen:e,text:t,onCopied:s}){const o=it.useRef(null);if(it.useEffect(()=>{if(!r)return;const u=window.setTimeout(()=>{var f,h,p;(f=o.current)==null||f.focus(),(h=o.current)==null||h.select(),(p=o.current)==null||p.setSelectionRange(0,t.length)},80);return()=>window.clearTimeout(u)},[r,t]),!r)return null;const l=async()=>{var u,f,h;try{await Z0(t),s()}catch{(u=o.current)==null||u.focus(),(f=o.current)==null||f.select(),(h=o.current)==null||h.setSelectionRange(0,t.length)}};return M.jsxs("div",{className:"fixed inset-0 z-[80]",children:[M.jsx("button",{className:"absolute inset-0 bg-black/68 backdrop-blur-sm",onClick:()=>e(!1),"aria-label":"关闭复制面板"}),M.jsxs("aside",{className:"absolute inset-x-3 bottom-3 rounded-lg border border-[#d8c7a3]/12 bg-[#0d0f0c] p-4 shadow-2xl sm:left-auto sm:right-5 sm:w-[min(520px,92vw)]",children:[M.jsxs("div",{className:"flex items-start justify-between gap-3",children:[M.jsxs("div",{children:[M.jsx("div",{className:"font-display text-xl text-[#f2eadb]",children:"手动复制"}),M.jsx("div",{className:"mt-1 text-xs leading-5 text-[#918a7c]",children:"浏览器拦截了自动复制，文本已经选中。手机上直接长按复制也可以。"})]}),M.jsx("button",{onClick:()=>e(!1),className:"grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#d8c7a3]/12 text-[#918a7c] hover:text-[#f2eadb]","aria-label":"关闭",children:M.jsx(uh,{className:"h-4 w-4"})})]}),M.jsx("textarea",{ref:o,readOnly:!0,value:t,className:"mt-4 h-48 w-full resize-none rounded-lg border border-[#d8c7a3]/12 bg-[#080908]/58 p-3 font-mono text-xs leading-5 text-[#ddd5c6] outline-none focus:border-[#d8c7a3]"}),M.jsx("div",{className:"mt-3 flex justify-end gap-2",children:M.jsxs("button",{onClick:l,className:"inline-flex items-center gap-2 rounded-lg bg-[#d8c7a3] px-3 py-2 text-xs font-semibold text-[#11110d]",children:[M.jsx(gr,{className:"h-4 w-4"}),"再复制一次"]})})]})]})}function PT({open:r,setOpen:e,snack:t,setSnack:s,active:o,dinnerSummary:l}){if(!r)return null;const u=(f,h)=>{s(p=>({...p,[f]:f==="name"?h:cn(h,0,f==="kcal"?5e3:500)}))};return M.jsxs("div",{className:"fixed inset-0 z-[70]",children:[M.jsx("button",{className:"absolute inset-0 bg-black/68 backdrop-blur-sm",onClick:()=>e(!1),"aria-label":"关闭零食加餐"}),M.jsxs("aside",{className:"absolute inset-y-0 right-0 flex w-[min(430px,94vw)] flex-col border-l border-[#d8c7a3]/12 bg-[#0d0f0c] shadow-2xl",children:[M.jsxs("div",{className:"flex items-center justify-between border-b border-[#d8c7a3]/10 p-4",children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("img",{src:ph("snack-scanner.jpg"),alt:"",className:"h-12 w-12 rounded-lg object-cover"}),M.jsxs("div",{children:[M.jsx("div",{className:"font-display text-xl text-[#f2eadb]",children:"零食加餐"}),M.jsx("div",{className:"text-[10px] uppercase tracking-[0.22em] text-[#918a7c]",children:"自己填一下也行"})]})]}),M.jsx("button",{onClick:()=>e(!1),className:"grid h-9 w-9 place-items-center rounded-lg border border-[#d8c7a3]/12 text-[#918a7c] hover:text-[#f2eadb]","aria-label":"关闭",children:M.jsx(uh,{className:"h-4 w-4"})})]}),M.jsxs("div",{className:"flex-1 overflow-y-auto p-4",children:[M.jsx("label",{className:"text-[10px] uppercase tracking-[0.22em] text-[#918a7c]",children:"名称"}),M.jsx("input",{value:t.name,onChange:f=>u("name",f.target.value),className:"mt-2 h-11 w-full rounded-lg border border-[#d8c7a3]/12 bg-[#080908]/42 px-3 text-sm text-[#f2eadb] outline-none focus:border-[#d8c7a3]"}),M.jsx("div",{className:"mt-4 grid grid-cols-4 gap-2",children:[["kcal","热量"],["p","蛋白"],["c","碳水"],["f","脂肪"]].map(([f,h])=>M.jsx(Kr,{label:h,unit:f==="kcal"?"":"g",value:t[f],onChange:p=>u(f,p)},f))}),M.jsxs("div",{className:"mt-5 rounded-lg border border-[#d8c7a3]/20 bg-[#d8c7a3]/10 p-4",children:[M.jsx("div",{className:"text-[10px] uppercase tracking-[0.22em] text-[#d8c7a3]",children:"晚餐会跟着收口"}),M.jsxs("div",{className:"mt-2 text-sm leading-6 text-[#cfc4b2]",children:[l||"晚餐已砍到很低"," · 全天 ",Math.round(t.kcal)," kcal snack"]})]}),o&&M.jsxs("button",{onClick:()=>s({name:"手动加餐",p:0,c:0,f:0,kcal:0}),className:"mt-4 inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/12 px-3 py-2 text-xs text-[#918a7c] hover:text-[#c77e68]",children:[M.jsx(wo,{className:"h-4 w-4"}),"清除加餐"]})]})]})]})}function Pi({id:r,eyebrow:e,title:t,icon:s,children:o}){return M.jsxs("section",{id:r,className:"premium-panel-shadow scroll-mt-28 rounded-lg border border-[#d8c7a3]/12 bg-[#10120f]/92 p-4 backdrop-blur-xl sm:p-5",children:[M.jsxs("div",{className:"mb-4 flex items-start justify-between gap-4",children:[M.jsxs("div",{children:[M.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#b9a36c]",children:e}),M.jsx("h2",{className:"mt-1 font-display text-2xl text-[#f2eadb]",children:t})]}),s&&M.jsx("span",{className:"grid h-9 w-9 place-items-center rounded-lg bg-[#d8c7a3] text-[#11110d]",children:M.jsx(s,{className:"h-4 w-4"})})]}),o]})}function Kd({icon:r,label:e,sub:t,onClick:s,dataAttr:o}){const l=s?"button":"div";return M.jsxs(l,{"data-copy-plan-button":o==="copy-plan-button"?!0:void 0,onClick:s,className:"min-w-0 rounded-lg border border-[#d8c7a3]/12 bg-[#11130f]/82 px-3 py-2.5 text-left backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#d8c7a3]/28 hover:bg-[#171912] sm:py-3",children:[M.jsx(r,{className:"mb-1.5 h-4 w-4 text-[#b9a36c]"}),M.jsx("div",{className:"truncate text-sm text-[#f2eadb]",children:e}),t&&M.jsx("div",{className:"mt-0.5 truncate text-[10px] uppercase tracking-[0.12em] text-[#918a7c] sm:tracking-[0.18em]",children:t})]})}function ac({label:r,value:e,target:t,unit:s}){const o=e-t,l=Math.abs(o)<=(s?Math.max(8,t*.08):Math.max(80,t*.05));return M.jsxs("div",{className:"rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/58 p-2 backdrop-blur",children:[M.jsx("div",{className:"text-[10px] uppercase tracking-[0.16em] text-[#918a7c]",children:r}),M.jsx("div",{className:"mt-1 font-mono text-lg text-[#f2eadb]",children:Math.round(e)}),M.jsxs("div",{className:`text-[10px] ${l?"text-[#9fb58f]":"text-[#d8c7a3]"}`,children:[o>=0?"+":"",Math.round(o),s]})]})}function NT({value:r,onChange:e,options:t}){return M.jsx("div",{className:"grid grid-cols-2 rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/48 p-1",children:t.map(s=>M.jsx("button",{onClick:()=>e(s.value),className:`rounded-md px-3 py-2 text-sm transition ${r===s.value?"bg-[#d8c7a3] text-[#11110d]":"text-[#918a7c] hover:text-[#f2eadb]"}`,children:s.label},s.value))})}function Sc({active:r,onClick:e,children:t}){return M.jsx("button",{onClick:e,className:`rounded-lg border px-3 py-2 text-xs transition ${r?"border-[#d8c7a3]/55 bg-[#d8c7a3]/14 text-[#f0dfb9]":"border-[#d8c7a3]/10 bg-[#11130f]/72 text-[#918a7c] hover:border-[#d8c7a3]/28 hover:text-[#f2eadb]"}`,children:t})}function Ts({title:r,children:e}){return M.jsxs("div",{children:[M.jsx("div",{className:"mb-2 text-[10px] uppercase tracking-[0.24em] text-[#918a7c]",children:r}),e]})}function Mc({active:r,onClick:e,title:t,meta:s,tone:o="gold"}){const l=o==="green"?"#9fb58f":o==="amber"?"#c8a86a":"#d8c7a3";return M.jsxs("button",{onClick:e,className:"rounded-lg border p-3 text-left transition hover:-translate-y-0.5",style:{borderColor:r?l:"rgba(255,255,255,0.10)",background:r?`${l}1f`:"rgba(255,255,255,0.045)"},children:[M.jsx("div",{className:"font-cjk text-sm font-semibold text-[#f2eadb]",children:t}),M.jsx("div",{className:"mt-1 text-[10px] text-[#918a7c]",children:s})]})}function nx({open:r,onToggle:e,title:t,subtitle:s,children:o}){return M.jsxs("section",{className:"rounded-lg border border-[#d8c7a3]/12 bg-[#10120f]/86 backdrop-blur-xl",children:[M.jsxs("button",{onClick:e,className:"flex w-full items-center justify-between gap-3 p-4 text-left",children:[M.jsxs("span",{children:[M.jsxs("span",{className:"flex items-center gap-2 font-display text-2xl text-[#f2eadb]",children:[M.jsx(Wb,{className:"h-4 w-4 text-[#b9a36c]"}),t]}),M.jsx("span",{className:"mt-1 block text-xs text-[#918a7c]",children:s})]}),M.jsx(Cb,{className:`h-5 w-5 text-[#918a7c] transition ${r?"rotate-180":""}`})]}),r&&M.jsx("div",{className:"border-t border-[#d8c7a3]/10 p-4",children:o})]})}function Ec({label:r,meta:e,value:t,unit:s,step:o,max:l,onChange:u}){return M.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/42 p-3",children:[M.jsxs("div",{className:"min-w-0",children:[M.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-[#f2eadb]",children:r}),M.jsx("div",{className:"mt-1 truncate text-[10px] text-[#918a7c]",children:e})]}),M.jsxs("div",{className:"flex items-center gap-1",children:[M.jsx(ts,{label:`减少${r}`,onClick:()=>u(t-o),icon:Pc}),M.jsxs("span",{className:"w-14 text-center font-mono text-sm text-[#f2eadb]",children:[bt(t),t>0&&s==="g"?"g":""]}),M.jsx(ts,{label:`增加${r}`,onClick:()=>u(Math.min(l,t+o)),icon:Nc})]})]})}function LT({value:r,onChange:e}){return M.jsxs("div",{className:"flex items-center gap-1",children:[M.jsx(ts,{label:"减少",onClick:()=>e(r-1),icon:Pc}),M.jsx("span",{className:"w-7 text-center font-mono text-sm text-[#f2eadb]",children:r}),M.jsx(ts,{label:"增加",onClick:()=>e(r+1),icon:Nc})]})}function ts({label:r,onClick:e,icon:t}){return M.jsx("button",{onClick:e,"aria-label":r,className:"grid h-8 w-8 place-items-center rounded-lg border border-[#d8c7a3]/10 bg-[#11130f]/72 text-[#918a7c] transition hover:border-[#d8c7a3]/55 hover:text-[#d8c7a3]",children:M.jsx(t,{className:"h-4 w-4"})})}function Kr({label:r,unit:e,value:t,onChange:s}){return M.jsxs("label",{className:"block rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/42 p-3",children:[M.jsx("span",{className:"block text-[10px] uppercase tracking-[0.18em] text-[#918a7c]",children:r}),M.jsxs("span",{className:"mt-1 flex items-baseline gap-1",children:[M.jsx("input",{type:"number",value:bt(t,1),onChange:o=>s(o.target.value),className:"min-w-0 flex-1 bg-transparent font-mono text-lg text-[#f2eadb] outline-none"}),M.jsx("span",{className:"text-[10px] text-[#918a7c]",children:e})]})]})}function ix({targets:r,targetProfile:e}){const t=[{label:"蛋白目标",value:`${bt(r.p,1)}g`,sub:`${bt(e.proteinPerKg,1)}g/kg`},{label:"脂肪最低",value:`${bt(r.f,1)}g`,sub:`${bt(e.fatMinPerKg,1)}g/kg`},{label:"剩余碳水",value:`${bt(r.c,1)}g`,sub:"热量扣完 P/F 后全给碳水"}];return M.jsx("div",{className:"mt-3 grid gap-2 sm:grid-cols-3",children:t.map(s=>M.jsxs("div",{className:"rounded-lg border border-[#d8c7a3]/10 bg-[#11130f]/58 p-3",children:[M.jsx("div",{className:"text-[10px] uppercase tracking-[0.18em] text-[#918a7c]",children:s.label}),M.jsx("div",{className:"mt-1 font-mono text-lg text-[#f2eadb]",children:s.value}),M.jsx("div",{className:"mt-1 text-[10px] text-[#918a7c]",children:s.sub})]},s.label))})}function DT({report:r}){const e={amber:"border-[#d8c7a3]/24 bg-[#d8c7a3]/10 text-[#e7d6b9]",green:"border-[#9fb58f]/30 bg-[#9fb58f]/10 text-[#d8e7cf]",red:"border-[#c77e68]/30 bg-[#c77e68]/10 text-[#f0c5b7]"}[r.carbDay.tone]||"border-[#d8c7a3]/16 bg-[#11130f]/60 text-[#cfc4b2]";return M.jsxs("div",{className:`rounded-lg border p-3 ${e}`,children:[M.jsxs("div",{className:"flex items-center justify-between gap-3",children:[M.jsx("span",{className:"text-xs text-[#918a7c]",children:"今天碳水日"}),M.jsx("span",{className:"font-cjk text-sm font-semibold",children:r.carbDay.label})]}),M.jsxs("div",{className:"mt-1 text-[10px] text-[#918a7c]",children:["C ",r.carbPerKg,"g/kg · P ",r.proteinPerKg,"g/kg"]})]})}function IT({report:r,targets:e}){const t=[{label:"蛋白热量",value:`${r.proteinPct}%`,sub:`${r.proteinPerKg}g/kg · 目标 ${r.proteinTargetPerKg}g/kg`},{label:"碳水热量",value:`${r.carbPct}%`,sub:`${r.carbPerKg}g/kg · 目标 ${r.carbTargetPerKg}g/kg`},{label:"脂肪热量",value:`${r.fatPct}%`,sub:`${r.fatPerKg}g/kg · 目标 ${bt(e.f,1)}g`},{label:"低碳判断",value:r.carbDay.label,sub:r.carbDay.note,hot:r.carbDay.tone==="red"}];return M.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:t.map(s=>M.jsx(pi,{label:s.label,value:s.value,sub:s.sub,hot:s.hot},s.label))})}function UT({item:r,index:e,onTune:t}){const o={red:"#c77e68",amber:"#c8a86a",gold:"#d8c7a3",green:"#9fb58f"}[r.tone]||"#ffffff",l=r.adjustment>0?`+${bt(r.adjustment)}`:bt(r.adjustment);return M.jsxs("div",{"data-dinner-tune-row":!0,className:"grid grid-cols-[38px_1fr_auto] items-center gap-3 rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/46 p-3",children:[M.jsx("span",{className:"grid h-9 w-9 place-items-center rounded-lg font-mono text-xs text-zinc-950",style:{backgroundColor:o},children:String(e+1).padStart(2,"0")}),M.jsxs("div",{className:"min-w-0",children:[M.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-[#f2eadb]",children:r.name}),M.jsxs("div",{className:"mt-1 truncate text-[10px] text-[#918a7c]",children:["P",bt(r.macro.p)," · C",bt(r.macro.c)," · F",bt(r.macro.f),r.adjustment!==0&&M.jsxs("span",{className:"text-[#d8c7a3]",children:[" · 调整 ",l,r.unit]})]})]}),M.jsxs("div",{className:"text-right",children:[M.jsx("div",{className:"font-display text-2xl leading-none text-[#f2eadb]",children:bt(r.qty)}),M.jsx("div",{className:"mt-1 text-[10px] text-[#918a7c]",children:r.unit}),t&&M.jsxs("div",{className:"mt-2 flex items-center justify-end gap-1",children:[M.jsx(ts,{label:`减少${r.name}`,onClick:()=>t(r,-r.step),icon:Pc}),M.jsx(ts,{label:`增加${r.name}`,onClick:()=>t(r,r.step),icon:Nc})]})]})]})}function oc({label:r,value:e,target:t,unit:s,color:o}){const l=Math.min(135,e/Math.max(1,t)*100),u=Math.round(e-t);return M.jsxs("div",{children:[M.jsxs("div",{className:"mb-2 flex items-center justify-between gap-3",children:[M.jsx("span",{className:"text-sm text-[#cfc4b2]",children:r}),M.jsxs("span",{className:"font-mono text-xs text-[#918a7c]",children:[Math.round(e)," / ",t," ",s]})]}),M.jsx("div",{className:"relative h-2 overflow-hidden rounded-full bg-[#d8c7a3]/10",children:M.jsx("div",{className:"h-full rounded-full transition-all duration-700",style:{width:`${l}%`,backgroundColor:o}})}),M.jsxs("div",{className:"mt-1 text-right text-[10px] text-[#918a7c]",children:[u>=0?"+":"",u,s]})]})}function xo({label:r,macro:e,strong:t}){return M.jsxs("div",{className:`grid grid-cols-[1fr_auto] items-center gap-3 border-t border-[#d8c7a3]/10 py-3 first:border-t-0 ${t?"text-[#f2eadb]":"text-[#cfc4b2]"}`,children:[M.jsx("div",{className:"font-cjk text-sm",children:r}),M.jsxs("div",{className:"font-mono text-xs text-[#918a7c]",children:["P",bt(e.p)," C",bt(e.c)," F",bt(e.f)," · ",Math.round(Ca(e))," kcal"]})]})}function pi({label:r,value:e,sub:t,hot:s}){return M.jsxs("div",{className:`rounded-lg border p-3 ${s?"border-[#c77e68]/30 bg-[#c77e68]/10":"border-[#d8c7a3]/10 bg-[#080908]/42"}`,children:[M.jsx("div",{className:"text-[10px] text-[#918a7c]",children:r}),M.jsx("div",{className:`mt-1 font-mono text-lg ${s?"text-[#c77e68]":"text-[#f2eadb]"}`,children:e}),t&&M.jsx("div",{className:"mt-1 text-[10px] leading-4 text-[#918a7c]",children:t})]})}Xv.createRoot(document.getElementById("root")).render(M.jsx(Bv.StrictMode,{children:M.jsx(vT,{})}));
