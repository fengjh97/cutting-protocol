(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Zg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var nd={exports:{}},ao={},id={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function R_(){if(Im)return vt;Im=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function g(k){return k===null||typeof k!="object"?null:(k=y&&k[y]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function _(k,ee,Fe){this.props=k,this.context=ee,this.refs=C,this.updater=Fe||S}_.prototype.isReactComponent={},_.prototype.setState=function(k,ee){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ee,"setState")},_.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function x(){}x.prototype=_.prototype;function R(k,ee,Fe){this.props=k,this.context=ee,this.refs=C,this.updater=Fe||S}var N=R.prototype=new x;N.constructor=R,w(N,_.prototype),N.isPureReactComponent=!0;var L=Array.isArray,B=Object.prototype.hasOwnProperty,D={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function E(k,ee,Fe){var Ve,De={},ae=null,ve=null;if(ee!=null)for(Ve in ee.ref!==void 0&&(ve=ee.ref),ee.key!==void 0&&(ae=""+ee.key),ee)B.call(ee,Ve)&&!O.hasOwnProperty(Ve)&&(De[Ve]=ee[Ve]);var pe=arguments.length-2;if(pe===1)De.children=Fe;else if(1<pe){for(var Ue=Array(pe),Ke=0;Ke<pe;Ke++)Ue[Ke]=arguments[Ke+2];De.children=Ue}if(k&&k.defaultProps)for(Ve in pe=k.defaultProps,pe)De[Ve]===void 0&&(De[Ve]=pe[Ve]);return{$$typeof:r,type:k,key:ae,ref:ve,props:De,_owner:D.current}}function U(k,ee){return{$$typeof:r,type:k.type,key:ee,ref:k.ref,props:k.props,_owner:k._owner}}function X(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function I(k){var ee={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Fe){return ee[Fe]})}var G=/\/+/g;function se(k,ee){return typeof k=="object"&&k!==null&&k.key!=null?I(""+k.key):ee.toString(36)}function le(k,ee,Fe,Ve,De){var ae=typeof k;(ae==="undefined"||ae==="boolean")&&(k=null);var ve=!1;if(k===null)ve=!0;else switch(ae){case"string":case"number":ve=!0;break;case"object":switch(k.$$typeof){case r:case e:ve=!0}}if(ve)return ve=k,De=De(ve),k=Ve===""?"."+se(ve,0):Ve,L(De)?(Fe="",k!=null&&(Fe=k.replace(G,"$&/")+"/"),le(De,ee,Fe,"",function(Ke){return Ke})):De!=null&&(X(De)&&(De=U(De,Fe+(!De.key||ve&&ve.key===De.key?"":(""+De.key).replace(G,"$&/")+"/")+k)),ee.push(De)),1;if(ve=0,Ve=Ve===""?".":Ve+":",L(k))for(var pe=0;pe<k.length;pe++){ae=k[pe];var Ue=Ve+se(ae,pe);ve+=le(ae,ee,Fe,Ue,De)}else if(Ue=g(k),typeof Ue=="function")for(k=Ue.call(k),pe=0;!(ae=k.next()).done;)ae=ae.value,Ue=Ve+se(ae,pe++),ve+=le(ae,ee,Fe,Ue,De);else if(ae==="object")throw ee=String(k),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return ve}function H(k,ee,Fe){if(k==null)return k;var Ve=[],De=0;return le(k,Ve,"","",function(ae){return ee.call(Fe,ae,De++)}),Ve}function Z(k){if(k._status===-1){var ee=k._result;ee=ee(),ee.then(function(Fe){(k._status===0||k._status===-1)&&(k._status=1,k._result=Fe)},function(Fe){(k._status===0||k._status===-1)&&(k._status=2,k._result=Fe)}),k._status===-1&&(k._status=0,k._result=ee)}if(k._status===1)return k._result.default;throw k._result}var q={current:null},Y={transition:null},ue={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:Y,ReactCurrentOwner:D};function de(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:H,forEach:function(k,ee,Fe){H(k,function(){ee.apply(this,arguments)},Fe)},count:function(k){var ee=0;return H(k,function(){ee++}),ee},toArray:function(k){return H(k,function(ee){return ee})||[]},only:function(k){if(!X(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},vt.Component=_,vt.Fragment=t,vt.Profiler=o,vt.PureComponent=R,vt.StrictMode=s,vt.Suspense=h,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,vt.act=de,vt.cloneElement=function(k,ee,Fe){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Ve=w({},k.props),De=k.key,ae=k.ref,ve=k._owner;if(ee!=null){if(ee.ref!==void 0&&(ae=ee.ref,ve=D.current),ee.key!==void 0&&(De=""+ee.key),k.type&&k.type.defaultProps)var pe=k.type.defaultProps;for(Ue in ee)B.call(ee,Ue)&&!O.hasOwnProperty(Ue)&&(Ve[Ue]=ee[Ue]===void 0&&pe!==void 0?pe[Ue]:ee[Ue])}var Ue=arguments.length-2;if(Ue===1)Ve.children=Fe;else if(1<Ue){pe=Array(Ue);for(var Ke=0;Ke<Ue;Ke++)pe[Ke]=arguments[Ke+2];Ve.children=pe}return{$$typeof:r,type:k.type,key:De,ref:ae,props:Ve,_owner:ve}},vt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},vt.createElement=E,vt.createFactory=function(k){var ee=E.bind(null,k);return ee.type=k,ee},vt.createRef=function(){return{current:null}},vt.forwardRef=function(k){return{$$typeof:f,render:k}},vt.isValidElement=X,vt.lazy=function(k){return{$$typeof:v,_payload:{_status:-1,_result:k},_init:Z}},vt.memo=function(k,ee){return{$$typeof:p,type:k,compare:ee===void 0?null:ee}},vt.startTransition=function(k){var ee=Y.transition;Y.transition={};try{k()}finally{Y.transition=ee}},vt.unstable_act=de,vt.useCallback=function(k,ee){return q.current.useCallback(k,ee)},vt.useContext=function(k){return q.current.useContext(k)},vt.useDebugValue=function(){},vt.useDeferredValue=function(k){return q.current.useDeferredValue(k)},vt.useEffect=function(k,ee){return q.current.useEffect(k,ee)},vt.useId=function(){return q.current.useId()},vt.useImperativeHandle=function(k,ee,Fe){return q.current.useImperativeHandle(k,ee,Fe)},vt.useInsertionEffect=function(k,ee){return q.current.useInsertionEffect(k,ee)},vt.useLayoutEffect=function(k,ee){return q.current.useLayoutEffect(k,ee)},vt.useMemo=function(k,ee){return q.current.useMemo(k,ee)},vt.useReducer=function(k,ee,Fe){return q.current.useReducer(k,ee,Fe)},vt.useRef=function(k){return q.current.useRef(k)},vt.useState=function(k){return q.current.useState(k)},vt.useSyncExternalStore=function(k,ee,Fe){return q.current.useSyncExternalStore(k,ee,Fe)},vt.useTransition=function(){return q.current.useTransition()},vt.version="18.3.1",vt}var Um;function Gf(){return Um||(Um=1,id.exports=R_()),id.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function P_(){if(Fm)return ao;Fm=1;var r=Gf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var v,y={},g=null,S=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(S=h.ref);for(v in h)s.call(h,v)&&!l.hasOwnProperty(v)&&(y[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)y[v]===void 0&&(y[v]=h[v]);return{$$typeof:e,type:f,key:g,ref:S,props:y,_owner:o.current}}return ao.Fragment=t,ao.jsx=u,ao.jsxs=u,ao}var Om;function N_(){return Om||(Om=1,nd.exports=P_()),nd.exports}var T=N_(),dt=Gf();const L_=Zg(dt);var Pl={},rd={exports:{}},Gn={},sd={exports:{}},ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function D_(){return km||(km=1,(function(r){function e(Y,ue){var de=Y.length;Y.push(ue);e:for(;0<de;){var k=de-1>>>1,ee=Y[k];if(0<o(ee,ue))Y[k]=ue,Y[de]=ee,de=k;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var ue=Y[0],de=Y.pop();if(de!==ue){Y[0]=de;e:for(var k=0,ee=Y.length,Fe=ee>>>1;k<Fe;){var Ve=2*(k+1)-1,De=Y[Ve],ae=Ve+1,ve=Y[ae];if(0>o(De,de))ae<ee&&0>o(ve,De)?(Y[k]=ve,Y[ae]=de,k=ae):(Y[k]=De,Y[Ve]=de,k=Ve);else if(ae<ee&&0>o(ve,de))Y[k]=ve,Y[ae]=de,k=ae;else break e}}return ue}function o(Y,ue){var de=Y.sortIndex-ue.sortIndex;return de!==0?de:Y.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var h=[],p=[],v=1,y=null,g=3,S=!1,w=!1,C=!1,_=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(Y){for(var ue=t(p);ue!==null;){if(ue.callback===null)s(p);else if(ue.startTime<=Y)s(p),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=t(p)}}function L(Y){if(C=!1,N(Y),!w)if(t(h)!==null)w=!0,Z(B);else{var ue=t(p);ue!==null&&q(L,ue.startTime-Y)}}function B(Y,ue){w=!1,C&&(C=!1,x(E),E=-1),S=!0;var de=g;try{for(N(ue),y=t(h);y!==null&&(!(y.expirationTime>ue)||Y&&!I());){var k=y.callback;if(typeof k=="function"){y.callback=null,g=y.priorityLevel;var ee=k(y.expirationTime<=ue);ue=r.unstable_now(),typeof ee=="function"?y.callback=ee:y===t(h)&&s(h),N(ue)}else s(h);y=t(h)}if(y!==null)var Fe=!0;else{var Ve=t(p);Ve!==null&&q(L,Ve.startTime-ue),Fe=!1}return Fe}finally{y=null,g=de,S=!1}}var D=!1,O=null,E=-1,U=5,X=-1;function I(){return!(r.unstable_now()-X<U)}function G(){if(O!==null){var Y=r.unstable_now();X=Y;var ue=!0;try{ue=O(!0,Y)}finally{ue?se():(D=!1,O=null)}}else D=!1}var se;if(typeof R=="function")se=function(){R(G)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,H=le.port2;le.port1.onmessage=G,se=function(){H.postMessage(null)}}else se=function(){_(G,0)};function Z(Y){O=Y,D||(D=!0,se())}function q(Y,ue){E=_(function(){Y(r.unstable_now())},ue)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_continueExecution=function(){w||S||(w=!0,Z(B))},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var ue=3;break;default:ue=g}var de=g;g=ue;try{return Y()}finally{g=de}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Y,ue){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var de=g;g=Y;try{return ue()}finally{g=de}},r.unstable_scheduleCallback=function(Y,ue,de){var k=r.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?k+de:k):de=k,Y){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=de+ee,Y={id:v++,callback:ue,priorityLevel:Y,startTime:de,expirationTime:ee,sortIndex:-1},de>k?(Y.sortIndex=de,e(p,Y),t(h)===null&&Y===t(p)&&(C?(x(E),E=-1):C=!0,q(L,de-k))):(Y.sortIndex=ee,e(h,Y),w||S||(w=!0,Z(B))),Y},r.unstable_shouldYield=I,r.unstable_wrapCallback=function(Y){var ue=g;return function(){var de=g;g=ue;try{return Y.apply(this,arguments)}finally{g=de}}}})(ad)),ad}var Bm;function I_(){return Bm||(Bm=1,sd.exports=D_()),sd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function U_(){if(zm)return Gn;zm=1;var r=Gf(),e=I_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function g(n){return h.call(y,n)?!0:h.call(v,n)?!1:p.test(n)?y[n]=!0:(v[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,d,m,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=b}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,R);_[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,R);_[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,R);_[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,i,a,c){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var L=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),D=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),I=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),Y=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var de=Object.assign,k;function ee(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var Fe=!1;function Ve(n,i){if(!n||Fe)return"";Fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var c=ce}Reflect.construct(n,[],i)}else{try{i.call()}catch(ce){c=ce}n.call(i.prototype)}else{try{throw Error()}catch(ce){c=ce}n()}}catch(ce){if(ce&&c&&typeof ce.stack=="string"){for(var d=ce.stack.split(`
`),m=c.stack.split(`
`),b=d.length-1,F=m.length-1;1<=b&&0<=F&&d[b]!==m[F];)F--;for(;1<=b&&0<=F;b--,F--)if(d[b]!==m[F]){if(b!==1||F!==1)do if(b--,F--,0>F||d[b]!==m[F]){var V=`
`+d[b].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=b&&0<=F);break}}}finally{Fe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ee(n):""}function De(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=Ve(n.type,!1),n;case 11:return n=Ve(n.type.render,!1),n;case 1:return n=Ve(n.type,!0),n;default:return""}}function ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case D:return"Portal";case U:return"Profiler";case E:return"StrictMode";case se:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case I:return(n.displayName||"Context")+".Consumer";case X:return(n._context.displayName||"Context")+".Provider";case G:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case H:return i=n.displayName||null,i!==null?i:ae(n.type)||"Memo";case Z:i=n._payload,n=n._init;try{return ae(n(i))}catch{}}return null}function ve(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(n){var i=Ue(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(b){c=""+b,m.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function et(n){n._valueTracker||(n._valueTracker=Ke(n))}function kt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ue(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function st(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Mt(n,i){var a=i.checked;return de({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Lt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=pe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(n,i){i=i.checked,i!=null&&N(n,"checked",i,!1)}function Bt(n,i){ht(n,i);var a=pe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?rn(n,i.type,a):i.hasOwnProperty("defaultValue")&&rn(n,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Rt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function rn(n,i,a){(i!=="number"||st(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var W=Array.isArray;function zt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+pe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Je(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return de({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Pt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(W(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:pe(a)}}function Le(n,i){var a=pe(i.value),c=pe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Vt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function P(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?P(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var K,me=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function xe(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ge=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(n){ge.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),we[i]=we[n]})});function re(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||we.hasOwnProperty(n)&&we[n]?(""+i).trim():i+"px"}function fe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=re(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ne=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ie(n,i){if(i){if(Ne[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Te(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Se=null;function it(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var at=null,pt=null,z=null;function be(n){if(n=ja(n)){if(typeof at!="function")throw Error(t(280));var i=n.stateNode;i&&(i=jo(i),at(n.stateNode,n.type,i))}}function he(n){pt?z?z.push(n):z=[n]:pt=n}function Oe(){if(pt){var n=pt,i=z;if(z=pt=null,be(n),i)for(n=0;n<i.length;n++)be(i[n])}}function Ce(n,i){return n(i)}function _e(){}var We=!1;function ot(n,i,a){if(We)return n(i,a);We=!0;try{return Ce(n,i,a)}finally{We=!1,(pt!==null||z!==null)&&(_e(),Oe())}}function It(n,i){var a=n.stateNode;if(a===null)return null;var c=jo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Et=!1;if(f)try{var Ht={};Object.defineProperty(Ht,"passive",{get:function(){Et=!0}}),window.addEventListener("test",Ht,Ht),window.removeEventListener("test",Ht,Ht)}catch{Et=!1}function Pn(n,i,a,c,d,m,b,F,V){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(a,ce)}catch(Me){this.onError(Me)}}var ii=!1,_r=null,Yi=!1,Li=null,ri={onError:function(n){ii=!0,_r=n}};function vr(n,i,a,c,d,m,b,F,V){ii=!1,_r=null,Pn.apply(ri,arguments)}function ns(n,i,a,c,d,m,b,F,V){if(vr.apply(this,arguments),ii){if(ii){var ce=_r;ii=!1,_r=null}else throw Error(t(198));Yi||(Yi=!0,Li=ce)}}function si(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ki(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function is(n){if(si(n)!==n)throw Error(t(188))}function yr(n){var i=n.alternate;if(!i){if(i=si(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return is(d),n;if(m===c)return is(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var b=!1,F=d.child;F;){if(F===a){b=!0,a=d,c=m;break}if(F===c){b=!0,c=d,a=m;break}F=F.sibling}if(!b){for(F=m.child;F;){if(F===a){b=!0,a=m,c=d;break}if(F===c){b=!0,c=m,a=d;break}F=F.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function rs(n){return n=yr(n),n!==null?Sr(n):null}function Sr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Sr(n);if(i!==null)return i;n=n.sibling}return null}var Us=e.unstable_scheduleCallback,ss=e.unstable_cancelCallback,Fs=e.unstable_shouldYield,gt=e.unstable_requestPaint,je=e.unstable_now,qn=e.unstable_getCurrentPriorityLevel,gi=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,$=e.unstable_NormalPriority,oe=e.unstable_LowPriority,ne=e.unstable_IdlePriority,te=null,Pe=null;function Ge(n){if(Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(te,n,void 0,(n.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:ct,qe=Math.log,Qe=Math.LN2;function ct(n){return n>>>=0,n===0?32:31-(qe(n)/Qe|0)|0}var ut=64,Ye=4194304;function Tt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,b=a&268435455;if(b!==0){var F=b&~d;F!==0?c=Tt(F):(m&=b,m!==0&&(c=Tt(m)))}else b=a&~d,b!==0?c=Tt(b):m!==0&&(c=Tt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Re(i),d=1<<a,c|=n[a],i&=~d;return c}function Kt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ut(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var b=31-Re(m),F=1<<b,V=d[b];V===-1?((F&a)===0||(F&c)!==0)&&(d[b]=Kt(F,i)):V<=i&&(n.expiredLanes|=F),m&=~F}}function an(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Be(){var n=ut;return ut<<=1,(ut&4194240)===0&&(ut=64),n}function _n(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function xt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Re(i),n[i]=a}function Un(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Re(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Fn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Re(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var _t=0;function Zi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Dt,Xt,xi,Ft,_i,Di=!1,as=[],Mr=null,Er=null,Tr=null,Ra=new Map,Pa=new Map,wr=[],Z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xh(n,i){switch(n){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Ra.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(i.pointerId)}}function Na(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=ja(i),i!==null&&Xt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Q0(n,i,a,c,d){switch(i){case"focusin":return Mr=Na(Mr,n,i,a,c,d),!0;case"dragenter":return Er=Na(Er,n,i,a,c,d),!0;case"mouseover":return Tr=Na(Tr,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Ra.set(m,Na(Ra.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Pa.set(m,Na(Pa.get(m)||null,n,i,a,c,d)),!0}return!1}function _h(n){var i=os(n.target);if(i!==null){var a=si(i);if(a!==null){if(i=a.tag,i===13){if(i=Ki(a),i!==null){n.blockedOn=i,_i(n.priority,function(){xi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function No(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Rc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Se=c,a.target.dispatchEvent(c),Se=null}else return i=ja(a),i!==null&&Xt(i),n.blockedOn=a,!1;i.shift()}return!0}function vh(n,i,a){No(n)&&a.delete(i)}function J0(){Di=!1,Mr!==null&&No(Mr)&&(Mr=null),Er!==null&&No(Er)&&(Er=null),Tr!==null&&No(Tr)&&(Tr=null),Ra.forEach(vh),Pa.forEach(vh)}function La(n,i){n.blockedOn===i&&(n.blockedOn=null,Di||(Di=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,J0)))}function Da(n){function i(d){return La(d,n)}if(0<as.length){La(as[0],n);for(var a=1;a<as.length;a++){var c=as[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Mr!==null&&La(Mr,n),Er!==null&&La(Er,n),Tr!==null&&La(Tr,n),Ra.forEach(i),Pa.forEach(i),a=0;a<wr.length;a++)c=wr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<wr.length&&(a=wr[0],a.blockedOn===null);)_h(a),a.blockedOn===null&&wr.shift()}var Os=L.ReactCurrentBatchConfig,Lo=!0;function ex(n,i,a,c){var d=_t,m=Os.transition;Os.transition=null;try{_t=1,Cc(n,i,a,c)}finally{_t=d,Os.transition=m}}function tx(n,i,a,c){var d=_t,m=Os.transition;Os.transition=null;try{_t=4,Cc(n,i,a,c)}finally{_t=d,Os.transition=m}}function Cc(n,i,a,c){if(Lo){var d=Rc(n,i,a,c);if(d===null)Xc(n,i,c,Do,a),xh(n,c);else if(Q0(d,n,i,a,c))c.stopPropagation();else if(xh(n,c),i&4&&-1<Z0.indexOf(n)){for(;d!==null;){var m=ja(d);if(m!==null&&Dt(m),m=Rc(n,i,a,c),m===null&&Xc(n,i,c,Do,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Xc(n,i,c,null,a)}}var Do=null;function Rc(n,i,a,c){if(Do=null,n=it(c),n=os(n),n!==null)if(i=si(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ki(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Do=n,null}function yh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qn()){case gi:return 1;case A:return 4;case $:case oe:return 16;case ne:return 536870912;default:return 16}default:return 16}}var br=null,Pc=null,Io=null;function Sh(){if(Io)return Io;var n,i=Pc,a=i.length,c,d="value"in br?br.value:br.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var b=a-n;for(c=1;c<=b&&i[a-c]===d[m-c];c++);return Io=d.slice(n,1<c?1-c:void 0)}function Uo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Fo(){return!0}function Mh(){return!1}function $n(n){function i(a,c,d,m,b){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(a=n[F],this[F]=a?a(m):m[F]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Fo:Mh,this.isPropagationStopped=Mh,this}return de(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),i}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nc=$n(ks),Ia=de({},ks,{view:0,detail:0}),nx=$n(Ia),Lc,Dc,Ua,Oo=de({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ua&&(Ua&&n.type==="mousemove"?(Lc=n.screenX-Ua.screenX,Dc=n.screenY-Ua.screenY):Dc=Lc=0,Ua=n),Lc)},movementY:function(n){return"movementY"in n?n.movementY:Dc}}),Eh=$n(Oo),ix=de({},Oo,{dataTransfer:0}),rx=$n(ix),sx=de({},Ia,{relatedTarget:0}),Ic=$n(sx),ax=de({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),ox=$n(ax),lx=de({},ks,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),cx=$n(lx),ux=de({},ks,{data:0}),Th=$n(ux),dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function px(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=hx[n])?!!i[n]:!1}function Uc(){return px}var mx=de({},Ia,{key:function(n){if(n.key){var i=dx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Uo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?fx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(n){return n.type==="keypress"?Uo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Uo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),gx=$n(mx),xx=de({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=$n(xx),_x=de({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),vx=$n(_x),yx=de({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sx=$n(yx),Mx=de({},Oo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ex=$n(Mx),Tx=[9,13,27,32],Fc=f&&"CompositionEvent"in window,Fa=null;f&&"documentMode"in document&&(Fa=document.documentMode);var wx=f&&"TextEvent"in window&&!Fa,bh=f&&(!Fc||Fa&&8<Fa&&11>=Fa),Ah=" ",Ch=!1;function Rh(n,i){switch(n){case"keyup":return Tx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ph(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function bx(n,i){switch(n){case"compositionend":return Ph(i);case"keypress":return i.which!==32?null:(Ch=!0,Ah);case"textInput":return n=i.data,n===Ah&&Ch?null:n;default:return null}}function Ax(n,i){if(Bs)return n==="compositionend"||!Fc&&Rh(n,i)?(n=Sh(),Io=Pc=br=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return bh&&i.locale!=="ko"?null:i.data;default:return null}}var Cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Cx[n.type]:i==="textarea"}function Lh(n,i,a,c){he(c),i=Go(i,"onChange"),0<i.length&&(a=new Nc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Oa=null,ka=null;function Rx(n){Kh(n,0)}function ko(n){var i=Ws(n);if(kt(i))return n}function Px(n,i){if(n==="change")return i}var Dh=!1;if(f){var Oc;if(f){var kc="oninput"in document;if(!kc){var Ih=document.createElement("div");Ih.setAttribute("oninput","return;"),kc=typeof Ih.oninput=="function"}Oc=kc}else Oc=!1;Dh=Oc&&(!document.documentMode||9<document.documentMode)}function Uh(){Oa&&(Oa.detachEvent("onpropertychange",Fh),ka=Oa=null)}function Fh(n){if(n.propertyName==="value"&&ko(ka)){var i=[];Lh(i,ka,n,it(n)),ot(Rx,i)}}function Nx(n,i,a){n==="focusin"?(Uh(),Oa=i,ka=a,Oa.attachEvent("onpropertychange",Fh)):n==="focusout"&&Uh()}function Lx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ko(ka)}function Dx(n,i){if(n==="click")return ko(i)}function Ix(n,i){if(n==="input"||n==="change")return ko(i)}function Ux(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var vi=typeof Object.is=="function"?Object.is:Ux;function Ba(n,i){if(vi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!vi(n[d],i[d]))return!1}return!0}function Oh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function kh(n,i){var a=Oh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Oh(a)}}function Bh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Bh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function zh(){for(var n=window,i=st();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=st(n.document)}return i}function Bc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Fx(n){var i=zh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Bh(a.ownerDocument.documentElement,a)){if(c!==null&&Bc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=kh(a,m);var b=kh(a,c);d&&b&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Ox=f&&"documentMode"in document&&11>=document.documentMode,zs=null,zc=null,za=null,Vc=!1;function Vh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vc||zs==null||zs!==st(c)||(c=zs,"selectionStart"in c&&Bc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),za&&Ba(za,c)||(za=c,c=Go(zc,"onSelect"),0<c.length&&(i=new Nc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=zs)))}function Bo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Vs={animationend:Bo("Animation","AnimationEnd"),animationiteration:Bo("Animation","AnimationIteration"),animationstart:Bo("Animation","AnimationStart"),transitionend:Bo("Transition","TransitionEnd")},Gc={},Gh={};f&&(Gh=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function zo(n){if(Gc[n])return Gc[n];if(!Vs[n])return n;var i=Vs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Gh)return Gc[n]=i[a];return n}var Hh=zo("animationend"),Wh=zo("animationiteration"),jh=zo("animationstart"),Xh=zo("transitionend"),qh=new Map,$h="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(n,i){qh.set(n,i),l(i,[n])}for(var Hc=0;Hc<$h.length;Hc++){var Wc=$h[Hc],kx=Wc.toLowerCase(),Bx=Wc[0].toUpperCase()+Wc.slice(1);Ar(kx,"on"+Bx)}Ar(Hh,"onAnimationEnd"),Ar(Wh,"onAnimationIteration"),Ar(jh,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(Xh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Va));function Yh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,ns(c,i,void 0,n),n.currentTarget=null}function Kh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var b=c.length-1;0<=b;b--){var F=c[b],V=F.instance,ce=F.currentTarget;if(F=F.listener,V!==m&&d.isPropagationStopped())break e;Yh(d,F,ce),m=V}else for(b=0;b<c.length;b++){if(F=c[b],V=F.instance,ce=F.currentTarget,F=F.listener,V!==m&&d.isPropagationStopped())break e;Yh(d,F,ce),m=V}}}if(Yi)throw n=Li,Yi=!1,Li=null,n}function qt(n,i){var a=i[Qc];a===void 0&&(a=i[Qc]=new Set);var c=n+"__bubble";a.has(c)||(Zh(i,n,2,!1),a.add(c))}function jc(n,i,a){var c=0;i&&(c|=4),Zh(a,n,c,i)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function Ga(n){if(!n[Vo]){n[Vo]=!0,s.forEach(function(a){a!=="selectionchange"&&(zx.has(a)||jc(a,!1,n),jc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Vo]||(i[Vo]=!0,jc("selectionchange",!1,i))}}function Zh(n,i,a,c){switch(yh(i)){case 1:var d=ex;break;case 4:d=tx;break;default:d=Cc}a=d.bind(null,i,a,n),d=void 0,!Et||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Xc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var F=c.stateNode.containerInfo;if(F===d||F.nodeType===8&&F.parentNode===d)break;if(b===4)for(b=c.return;b!==null;){var V=b.tag;if((V===3||V===4)&&(V=b.stateNode.containerInfo,V===d||V.nodeType===8&&V.parentNode===d))return;b=b.return}for(;F!==null;){if(b=os(F),b===null)return;if(V=b.tag,V===5||V===6){c=m=b;continue e}F=F.parentNode}}c=c.return}ot(function(){var ce=m,Me=it(a),Ee=[];e:{var ye=qh.get(n);if(ye!==void 0){var ze=Nc,Xe=n;switch(n){case"keypress":if(Uo(a)===0)break e;case"keydown":case"keyup":ze=gx;break;case"focusin":Xe="focus",ze=Ic;break;case"focusout":Xe="blur",ze=Ic;break;case"beforeblur":case"afterblur":ze=Ic;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=Eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=vx;break;case Hh:case Wh:case jh:ze=ox;break;case Xh:ze=Sx;break;case"scroll":ze=nx;break;case"wheel":ze=Ex;break;case"copy":case"cut":case"paste":ze=cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=wh}var $e=(i&4)!==0,sn=!$e&&n==="scroll",J=$e?ye!==null?ye+"Capture":null:ye;$e=[];for(var j=ce,ie;j!==null;){ie=j;var Ae=ie.stateNode;if(ie.tag===5&&Ae!==null&&(ie=Ae,J!==null&&(Ae=It(j,J),Ae!=null&&$e.push(Ha(j,Ae,ie)))),sn)break;j=j.return}0<$e.length&&(ye=new ze(ye,Xe,null,a,Me),Ee.push({event:ye,listeners:$e}))}}if((i&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",ye&&a!==Se&&(Xe=a.relatedTarget||a.fromElement)&&(os(Xe)||Xe[Qi]))break e;if((ze||ye)&&(ye=Me.window===Me?Me:(ye=Me.ownerDocument)?ye.defaultView||ye.parentWindow:window,ze?(Xe=a.relatedTarget||a.toElement,ze=ce,Xe=Xe?os(Xe):null,Xe!==null&&(sn=si(Xe),Xe!==sn||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(ze=null,Xe=ce),ze!==Xe)){if($e=Eh,Ae="onMouseLeave",J="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&($e=wh,Ae="onPointerLeave",J="onPointerEnter",j="pointer"),sn=ze==null?ye:Ws(ze),ie=Xe==null?ye:Ws(Xe),ye=new $e(Ae,j+"leave",ze,a,Me),ye.target=sn,ye.relatedTarget=ie,Ae=null,os(Me)===ce&&($e=new $e(J,j+"enter",Xe,a,Me),$e.target=ie,$e.relatedTarget=sn,Ae=$e),sn=Ae,ze&&Xe)t:{for($e=ze,J=Xe,j=0,ie=$e;ie;ie=Gs(ie))j++;for(ie=0,Ae=J;Ae;Ae=Gs(Ae))ie++;for(;0<j-ie;)$e=Gs($e),j--;for(;0<ie-j;)J=Gs(J),ie--;for(;j--;){if($e===J||J!==null&&$e===J.alternate)break t;$e=Gs($e),J=Gs(J)}$e=null}else $e=null;ze!==null&&Qh(Ee,ye,ze,$e,!1),Xe!==null&&sn!==null&&Qh(Ee,sn,Xe,$e,!0)}}e:{if(ye=ce?Ws(ce):window,ze=ye.nodeName&&ye.nodeName.toLowerCase(),ze==="select"||ze==="input"&&ye.type==="file")var Ze=Px;else if(Nh(ye))if(Dh)Ze=Ix;else{Ze=Lx;var tt=Nx}else(ze=ye.nodeName)&&ze.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Ze=Dx);if(Ze&&(Ze=Ze(n,ce))){Lh(Ee,Ze,a,Me);break e}tt&&tt(n,ye,ce),n==="focusout"&&(tt=ye._wrapperState)&&tt.controlled&&ye.type==="number"&&rn(ye,"number",ye.value)}switch(tt=ce?Ws(ce):window,n){case"focusin":(Nh(tt)||tt.contentEditable==="true")&&(zs=tt,zc=ce,za=null);break;case"focusout":za=zc=zs=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,Vh(Ee,a,Me);break;case"selectionchange":if(Ox)break;case"keydown":case"keyup":Vh(Ee,a,Me)}var nt;if(Fc)e:{switch(n){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else Bs?Rh(n,a)&&(lt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(bh&&a.locale!=="ko"&&(Bs||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&Bs&&(nt=Sh()):(br=Me,Pc="value"in br?br.value:br.textContent,Bs=!0)),tt=Go(ce,lt),0<tt.length&&(lt=new Th(lt,n,null,a,Me),Ee.push({event:lt,listeners:tt}),nt?lt.data=nt:(nt=Ph(a),nt!==null&&(lt.data=nt)))),(nt=wx?bx(n,a):Ax(n,a))&&(ce=Go(ce,"onBeforeInput"),0<ce.length&&(Me=new Th("onBeforeInput","beforeinput",null,a,Me),Ee.push({event:Me,listeners:ce}),Me.data=nt))}Kh(Ee,i)})}function Ha(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Go(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=It(n,a),m!=null&&c.unshift(Ha(n,m,d)),m=It(n,i),m!=null&&c.push(Ha(n,m,d))),n=n.return}return c}function Gs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Qh(n,i,a,c,d){for(var m=i._reactName,b=[];a!==null&&a!==c;){var F=a,V=F.alternate,ce=F.stateNode;if(V!==null&&V===c)break;F.tag===5&&ce!==null&&(F=ce,d?(V=It(a,m),V!=null&&b.unshift(Ha(a,V,F))):d||(V=It(a,m),V!=null&&b.push(Ha(a,V,F)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var Vx=/\r\n?/g,Gx=/\u0000|\uFFFD/g;function Jh(n){return(typeof n=="string"?n:""+n).replace(Vx,`
`).replace(Gx,"")}function Ho(n,i,a){if(i=Jh(i),Jh(n)!==i&&a)throw Error(t(425))}function Wo(){}var qc=null,$c=null;function Yc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,Hx=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,Wx=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(n){return ep.resolve(null).then(n).catch(jx)}:Kc;function jx(n){setTimeout(function(){throw n})}function Zc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Da(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Da(i)}function Cr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function tp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),Ii="__reactFiber$"+Hs,Wa="__reactProps$"+Hs,Qi="__reactContainer$"+Hs,Qc="__reactEvents$"+Hs,Xx="__reactListeners$"+Hs,qx="__reactHandles$"+Hs;function os(n){var i=n[Ii];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Qi]||a[Ii]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=tp(n);n!==null;){if(a=n[Ii])return a;n=tp(n)}return i}n=a,a=n.parentNode}return null}function ja(n){return n=n[Ii]||n[Qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ws(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function jo(n){return n[Wa]||null}var Jc=[],js=-1;function Rr(n){return{current:n}}function $t(n){0>js||(n.current=Jc[js],Jc[js]=null,js--)}function jt(n,i){js++,Jc[js]=n.current,n.current=i}var Pr={},Mn=Rr(Pr),On=Rr(!1),ls=Pr;function Xs(n,i){var a=n.type.contextTypes;if(!a)return Pr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function kn(n){return n=n.childContextTypes,n!=null}function Xo(){$t(On),$t(Mn)}function np(n,i,a){if(Mn.current!==Pr)throw Error(t(168));jt(Mn,i),jt(On,a)}function ip(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ve(n)||"Unknown",d));return de({},a,c)}function qo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Pr,ls=Mn.current,jt(Mn,n),jt(On,On.current),!0}function rp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=ip(n,i,ls),c.__reactInternalMemoizedMergedChildContext=n,$t(On),$t(Mn),jt(Mn,n)):$t(On),jt(On,a)}var Ji=null,$o=!1,eu=!1;function sp(n){Ji===null?Ji=[n]:Ji.push(n)}function $x(n){$o=!0,sp(n)}function Nr(){if(!eu&&Ji!==null){eu=!0;var n=0,i=_t;try{var a=Ji;for(_t=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ji=null,$o=!1}catch(d){throw Ji!==null&&(Ji=Ji.slice(n+1)),Us(gi,Nr),d}finally{_t=i,eu=!1}}return null}var qs=[],$s=0,Yo=null,Ko=0,ai=[],oi=0,cs=null,er=1,tr="";function us(n,i){qs[$s++]=Ko,qs[$s++]=Yo,Yo=n,Ko=i}function ap(n,i,a){ai[oi++]=er,ai[oi++]=tr,ai[oi++]=cs,cs=n;var c=er;n=tr;var d=32-Re(c)-1;c&=~(1<<d),a+=1;var m=32-Re(i)+d;if(30<m){var b=d-d%5;m=(c&(1<<b)-1).toString(32),c>>=b,d-=b,er=1<<32-Re(i)+d|a<<d|c,tr=m+n}else er=1<<m|a<<d|c,tr=n}function tu(n){n.return!==null&&(us(n,1),ap(n,1,0))}function nu(n){for(;n===Yo;)Yo=qs[--$s],qs[$s]=null,Ko=qs[--$s],qs[$s]=null;for(;n===cs;)cs=ai[--oi],ai[oi]=null,tr=ai[--oi],ai[oi]=null,er=ai[--oi],ai[oi]=null}var Yn=null,Kn=null,Zt=!1,yi=null;function op(n,i){var a=di(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function lp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Yn=n,Kn=Cr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Yn=n,Kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=cs!==null?{id:er,overflow:tr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=di(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Yn=n,Kn=null,!0):!1;default:return!1}}function iu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ru(n){if(Zt){var i=Kn;if(i){var a=i;if(!lp(n,i)){if(iu(n))throw Error(t(418));i=Cr(a.nextSibling);var c=Yn;i&&lp(n,i)?op(c,a):(n.flags=n.flags&-4097|2,Zt=!1,Yn=n)}}else{if(iu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Zt=!1,Yn=n}}}function cp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Yn=n}function Zo(n){if(n!==Yn)return!1;if(!Zt)return cp(n),Zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Yc(n.type,n.memoizedProps)),i&&(i=Kn)){if(iu(n))throw up(),Error(t(418));for(;i;)op(n,i),i=Cr(i.nextSibling)}if(cp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Kn=Cr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Kn=null}}else Kn=Yn?Cr(n.stateNode.nextSibling):null;return!0}function up(){for(var n=Kn;n;)n=Cr(n.nextSibling)}function Ys(){Kn=Yn=null,Zt=!1}function su(n){yi===null?yi=[n]:yi.push(n)}var Yx=L.ReactCurrentBatchConfig;function Xa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(b){var F=d.refs;b===null?delete F[m]:F[m]=b},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Qo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function dp(n){var i=n._init;return i(n._payload)}function fp(n){function i(J,j){if(n){var ie=J.deletions;ie===null?(J.deletions=[j],J.flags|=16):ie.push(j)}}function a(J,j){if(!n)return null;for(;j!==null;)i(J,j),j=j.sibling;return null}function c(J,j){for(J=new Map;j!==null;)j.key!==null?J.set(j.key,j):J.set(j.index,j),j=j.sibling;return J}function d(J,j){return J=Br(J,j),J.index=0,J.sibling=null,J}function m(J,j,ie){return J.index=ie,n?(ie=J.alternate,ie!==null?(ie=ie.index,ie<j?(J.flags|=2,j):ie):(J.flags|=2,j)):(J.flags|=1048576,j)}function b(J){return n&&J.alternate===null&&(J.flags|=2),J}function F(J,j,ie,Ae){return j===null||j.tag!==6?(j=Ku(ie,J.mode,Ae),j.return=J,j):(j=d(j,ie),j.return=J,j)}function V(J,j,ie,Ae){var Ze=ie.type;return Ze===O?Me(J,j,ie.props.children,Ae,ie.key):j!==null&&(j.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Z&&dp(Ze)===j.type)?(Ae=d(j,ie.props),Ae.ref=Xa(J,j,ie),Ae.return=J,Ae):(Ae=Ml(ie.type,ie.key,ie.props,null,J.mode,Ae),Ae.ref=Xa(J,j,ie),Ae.return=J,Ae)}function ce(J,j,ie,Ae){return j===null||j.tag!==4||j.stateNode.containerInfo!==ie.containerInfo||j.stateNode.implementation!==ie.implementation?(j=Zu(ie,J.mode,Ae),j.return=J,j):(j=d(j,ie.children||[]),j.return=J,j)}function Me(J,j,ie,Ae,Ze){return j===null||j.tag!==7?(j=_s(ie,J.mode,Ae,Ze),j.return=J,j):(j=d(j,ie),j.return=J,j)}function Ee(J,j,ie){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Ku(""+j,J.mode,ie),j.return=J,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case B:return ie=Ml(j.type,j.key,j.props,null,J.mode,ie),ie.ref=Xa(J,null,j),ie.return=J,ie;case D:return j=Zu(j,J.mode,ie),j.return=J,j;case Z:var Ae=j._init;return Ee(J,Ae(j._payload),ie)}if(W(j)||ue(j))return j=_s(j,J.mode,ie,null),j.return=J,j;Qo(J,j)}return null}function ye(J,j,ie,Ae){var Ze=j!==null?j.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Ze!==null?null:F(J,j,""+ie,Ae);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case B:return ie.key===Ze?V(J,j,ie,Ae):null;case D:return ie.key===Ze?ce(J,j,ie,Ae):null;case Z:return Ze=ie._init,ye(J,j,Ze(ie._payload),Ae)}if(W(ie)||ue(ie))return Ze!==null?null:Me(J,j,ie,Ae,null);Qo(J,ie)}return null}function ze(J,j,ie,Ae,Ze){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return J=J.get(ie)||null,F(j,J,""+Ae,Ze);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case B:return J=J.get(Ae.key===null?ie:Ae.key)||null,V(j,J,Ae,Ze);case D:return J=J.get(Ae.key===null?ie:Ae.key)||null,ce(j,J,Ae,Ze);case Z:var tt=Ae._init;return ze(J,j,ie,tt(Ae._payload),Ze)}if(W(Ae)||ue(Ae))return J=J.get(ie)||null,Me(j,J,Ae,Ze,null);Qo(j,Ae)}return null}function Xe(J,j,ie,Ae){for(var Ze=null,tt=null,nt=j,lt=j=0,gn=null;nt!==null&&lt<ie.length;lt++){nt.index>lt?(gn=nt,nt=null):gn=nt.sibling;var Nt=ye(J,nt,ie[lt],Ae);if(Nt===null){nt===null&&(nt=gn);break}n&&nt&&Nt.alternate===null&&i(J,nt),j=m(Nt,j,lt),tt===null?Ze=Nt:tt.sibling=Nt,tt=Nt,nt=gn}if(lt===ie.length)return a(J,nt),Zt&&us(J,lt),Ze;if(nt===null){for(;lt<ie.length;lt++)nt=Ee(J,ie[lt],Ae),nt!==null&&(j=m(nt,j,lt),tt===null?Ze=nt:tt.sibling=nt,tt=nt);return Zt&&us(J,lt),Ze}for(nt=c(J,nt);lt<ie.length;lt++)gn=ze(nt,J,lt,ie[lt],Ae),gn!==null&&(n&&gn.alternate!==null&&nt.delete(gn.key===null?lt:gn.key),j=m(gn,j,lt),tt===null?Ze=gn:tt.sibling=gn,tt=gn);return n&&nt.forEach(function(zr){return i(J,zr)}),Zt&&us(J,lt),Ze}function $e(J,j,ie,Ae){var Ze=ue(ie);if(typeof Ze!="function")throw Error(t(150));if(ie=Ze.call(ie),ie==null)throw Error(t(151));for(var tt=Ze=null,nt=j,lt=j=0,gn=null,Nt=ie.next();nt!==null&&!Nt.done;lt++,Nt=ie.next()){nt.index>lt?(gn=nt,nt=null):gn=nt.sibling;var zr=ye(J,nt,Nt.value,Ae);if(zr===null){nt===null&&(nt=gn);break}n&&nt&&zr.alternate===null&&i(J,nt),j=m(zr,j,lt),tt===null?Ze=zr:tt.sibling=zr,tt=zr,nt=gn}if(Nt.done)return a(J,nt),Zt&&us(J,lt),Ze;if(nt===null){for(;!Nt.done;lt++,Nt=ie.next())Nt=Ee(J,Nt.value,Ae),Nt!==null&&(j=m(Nt,j,lt),tt===null?Ze=Nt:tt.sibling=Nt,tt=Nt);return Zt&&us(J,lt),Ze}for(nt=c(J,nt);!Nt.done;lt++,Nt=ie.next())Nt=ze(nt,J,lt,Nt.value,Ae),Nt!==null&&(n&&Nt.alternate!==null&&nt.delete(Nt.key===null?lt:Nt.key),j=m(Nt,j,lt),tt===null?Ze=Nt:tt.sibling=Nt,tt=Nt);return n&&nt.forEach(function(C_){return i(J,C_)}),Zt&&us(J,lt),Ze}function sn(J,j,ie,Ae){if(typeof ie=="object"&&ie!==null&&ie.type===O&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case B:e:{for(var Ze=ie.key,tt=j;tt!==null;){if(tt.key===Ze){if(Ze=ie.type,Ze===O){if(tt.tag===7){a(J,tt.sibling),j=d(tt,ie.props.children),j.return=J,J=j;break e}}else if(tt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Z&&dp(Ze)===tt.type){a(J,tt.sibling),j=d(tt,ie.props),j.ref=Xa(J,tt,ie),j.return=J,J=j;break e}a(J,tt);break}else i(J,tt);tt=tt.sibling}ie.type===O?(j=_s(ie.props.children,J.mode,Ae,ie.key),j.return=J,J=j):(Ae=Ml(ie.type,ie.key,ie.props,null,J.mode,Ae),Ae.ref=Xa(J,j,ie),Ae.return=J,J=Ae)}return b(J);case D:e:{for(tt=ie.key;j!==null;){if(j.key===tt)if(j.tag===4&&j.stateNode.containerInfo===ie.containerInfo&&j.stateNode.implementation===ie.implementation){a(J,j.sibling),j=d(j,ie.children||[]),j.return=J,J=j;break e}else{a(J,j);break}else i(J,j);j=j.sibling}j=Zu(ie,J.mode,Ae),j.return=J,J=j}return b(J);case Z:return tt=ie._init,sn(J,j,tt(ie._payload),Ae)}if(W(ie))return Xe(J,j,ie,Ae);if(ue(ie))return $e(J,j,ie,Ae);Qo(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,j!==null&&j.tag===6?(a(J,j.sibling),j=d(j,ie),j.return=J,J=j):(a(J,j),j=Ku(ie,J.mode,Ae),j.return=J,J=j),b(J)):a(J,j)}return sn}var Ks=fp(!0),hp=fp(!1),Jo=Rr(null),el=null,Zs=null,au=null;function ou(){au=Zs=el=null}function lu(n){var i=Jo.current;$t(Jo),n._currentValue=i}function cu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Qs(n,i){el=n,au=Zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Bn=!0),n.firstContext=null)}function li(n){var i=n._currentValue;if(au!==n)if(n={context:n,memoizedValue:i,next:null},Zs===null){if(el===null)throw Error(t(308));Zs=n,el.dependencies={lanes:0,firstContext:n}}else Zs=Zs.next=n;return i}var ds=null;function uu(n){ds===null?ds=[n]:ds.push(n)}function pp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,uu(i)):(a.next=d.next,d.next=a),i.interleaved=a,nr(n,c)}function nr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Lr=!1;function du(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ir(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Dr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(wt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,nr(n,a)}return d=c.interleaved,d===null?(i.next=i,uu(c)):(i.next=d.next,d.next=i),c.interleaved=i,nr(n,a)}function tl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Fn(n,a)}}function gp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=b:m=m.next=b,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function nl(n,i,a,c){var d=n.updateQueue;Lr=!1;var m=d.firstBaseUpdate,b=d.lastBaseUpdate,F=d.shared.pending;if(F!==null){d.shared.pending=null;var V=F,ce=V.next;V.next=null,b===null?m=ce:b.next=ce,b=V;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,F=Me.lastBaseUpdate,F!==b&&(F===null?Me.firstBaseUpdate=ce:F.next=ce,Me.lastBaseUpdate=V))}if(m!==null){var Ee=d.baseState;b=0,Me=ce=V=null,F=m;do{var ye=F.lane,ze=F.eventTime;if((c&ye)===ye){Me!==null&&(Me=Me.next={eventTime:ze,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Xe=n,$e=F;switch(ye=i,ze=a,$e.tag){case 1:if(Xe=$e.payload,typeof Xe=="function"){Ee=Xe.call(ze,Ee,ye);break e}Ee=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=$e.payload,ye=typeof Xe=="function"?Xe.call(ze,Ee,ye):Xe,ye==null)break e;Ee=de({},Ee,ye);break e;case 2:Lr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,ye=d.effects,ye===null?d.effects=[F]:ye.push(F))}else ze={eventTime:ze,lane:ye,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Me===null?(ce=Me=ze,V=Ee):Me=Me.next=ze,b|=ye;if(F=F.next,F===null){if(F=d.shared.pending,F===null)break;ye=F,F=ye.next,ye.next=null,d.lastBaseUpdate=ye,d.shared.pending=null}}while(!0);if(Me===null&&(V=Ee),d.baseState=V,d.firstBaseUpdate=ce,d.lastBaseUpdate=Me,i=d.shared.interleaved,i!==null){d=i;do b|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);ps|=b,n.lanes=b,n.memoizedState=Ee}}function xp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var qa={},Ui=Rr(qa),$a=Rr(qa),Ya=Rr(qa);function fs(n){if(n===qa)throw Error(t(174));return n}function fu(n,i){switch(jt(Ya,i),jt($a,n),jt(Ui,qa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=M(i,n)}$t(Ui),jt(Ui,i)}function Js(){$t(Ui),$t($a),$t(Ya)}function _p(n){fs(Ya.current);var i=fs(Ui.current),a=M(i,n.type);i!==a&&(jt($a,n),jt(Ui,a))}function hu(n){$a.current===n&&($t(Ui),$t($a))}var Jt=Rr(0);function il(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var pu=[];function mu(){for(var n=0;n<pu.length;n++)pu[n]._workInProgressVersionPrimary=null;pu.length=0}var rl=L.ReactCurrentDispatcher,gu=L.ReactCurrentBatchConfig,hs=0,en=null,cn=null,pn=null,sl=!1,Ka=!1,Za=0,Kx=0;function En(){throw Error(t(321))}function xu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!vi(n[a],i[a]))return!1;return!0}function _u(n,i,a,c,d,m){if(hs=m,en=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,rl.current=n===null||n.memoizedState===null?e_:t_,n=a(c,d),Ka){m=0;do{if(Ka=!1,Za=0,25<=m)throw Error(t(301));m+=1,pn=cn=null,i.updateQueue=null,rl.current=n_,n=a(c,d)}while(Ka)}if(rl.current=ll,i=cn!==null&&cn.next!==null,hs=0,pn=cn=en=null,sl=!1,i)throw Error(t(300));return n}function vu(){var n=Za!==0;return Za=0,n}function Fi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?en.memoizedState=pn=n:pn=pn.next=n,pn}function ci(){if(cn===null){var n=en.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var i=pn===null?en.memoizedState:pn.next;if(i!==null)pn=i,cn=n;else{if(n===null)throw Error(t(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},pn===null?en.memoizedState=pn=n:pn=pn.next=n}return pn}function Qa(n,i){return typeof i=="function"?i(n):i}function yu(n){var i=ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=cn,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var b=d.next;d.next=m.next,m.next=b}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var F=b=null,V=null,ce=m;do{var Me=ce.lane;if((hs&Me)===Me)V!==null&&(V=V.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),c=ce.hasEagerState?ce.eagerState:n(c,ce.action);else{var Ee={lane:Me,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};V===null?(F=V=Ee,b=c):V=V.next=Ee,en.lanes|=Me,ps|=Me}ce=ce.next}while(ce!==null&&ce!==m);V===null?b=c:V.next=F,vi(c,i.memoizedState)||(Bn=!0),i.memoizedState=c,i.baseState=b,i.baseQueue=V,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,en.lanes|=m,ps|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Su(n){var i=ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var b=d=d.next;do m=n(m,b.action),b=b.next;while(b!==d);vi(m,i.memoizedState)||(Bn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function vp(){}function yp(n,i){var a=en,c=ci(),d=i(),m=!vi(c.memoizedState,d);if(m&&(c.memoizedState=d,Bn=!0),c=c.queue,Mu(Ep.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||pn!==null&&pn.memoizedState.tag&1){if(a.flags|=2048,Ja(9,Mp.bind(null,a,c,d,i),void 0,null),mn===null)throw Error(t(349));(hs&30)!==0||Sp(a,i,d)}return d}function Sp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Mp(n,i,a,c){i.value=a,i.getSnapshot=c,Tp(i)&&wp(n)}function Ep(n,i,a){return a(function(){Tp(i)&&wp(n)})}function Tp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!vi(n,a)}catch{return!0}}function wp(n){var i=nr(n,1);i!==null&&Ti(i,n,1,-1)}function bp(n){var i=Fi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:n},i.queue=n,n=n.dispatch=Jx.bind(null,en,n),[i.memoizedState,n]}function Ja(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Ap(){return ci().memoizedState}function al(n,i,a,c){var d=Fi();en.flags|=n,d.memoizedState=Ja(1|i,a,void 0,c===void 0?null:c)}function ol(n,i,a,c){var d=ci();c=c===void 0?null:c;var m=void 0;if(cn!==null){var b=cn.memoizedState;if(m=b.destroy,c!==null&&xu(c,b.deps)){d.memoizedState=Ja(i,a,m,c);return}}en.flags|=n,d.memoizedState=Ja(1|i,a,m,c)}function Cp(n,i){return al(8390656,8,n,i)}function Mu(n,i){return ol(2048,8,n,i)}function Rp(n,i){return ol(4,2,n,i)}function Pp(n,i){return ol(4,4,n,i)}function Np(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Lp(n,i,a){return a=a!=null?a.concat([n]):null,ol(4,4,Np.bind(null,i,n),a)}function Eu(){}function Dp(n,i){var a=ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&xu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Ip(n,i){var a=ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&xu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Up(n,i,a){return(hs&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=a):(vi(a,i)||(a=Be(),en.lanes|=a,ps|=a,n.baseState=!0),i)}function Zx(n,i){var a=_t;_t=a!==0&&4>a?a:4,n(!0);var c=gu.transition;gu.transition={};try{n(!1),i()}finally{_t=a,gu.transition=c}}function Fp(){return ci().memoizedState}function Qx(n,i,a){var c=Or(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Op(n))kp(i,a);else if(a=pp(n,i,a,c),a!==null){var d=Ln();Ti(a,n,c,d),Bp(a,i,c)}}function Jx(n,i,a){var c=Or(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Op(n))kp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,F=m(b,a);if(d.hasEagerState=!0,d.eagerState=F,vi(F,b)){var V=i.interleaved;V===null?(d.next=d,uu(i)):(d.next=V.next,V.next=d),i.interleaved=d;return}}catch{}finally{}a=pp(n,i,d,c),a!==null&&(d=Ln(),Ti(a,n,c,d),Bp(a,i,c))}}function Op(n){var i=n.alternate;return n===en||i!==null&&i===en}function kp(n,i){Ka=sl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Bp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Fn(n,a)}}var ll={readContext:li,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},e_={readContext:li,useCallback:function(n,i){return Fi().memoizedState=[n,i===void 0?null:i],n},useContext:li,useEffect:Cp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,al(4194308,4,Np.bind(null,i,n),a)},useLayoutEffect:function(n,i){return al(4194308,4,n,i)},useInsertionEffect:function(n,i){return al(4,2,n,i)},useMemo:function(n,i){var a=Fi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Fi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Qx.bind(null,en,n),[c.memoizedState,n]},useRef:function(n){var i=Fi();return n={current:n},i.memoizedState=n},useState:bp,useDebugValue:Eu,useDeferredValue:function(n){return Fi().memoizedState=n},useTransition:function(){var n=bp(!1),i=n[0];return n=Zx.bind(null,n[1]),Fi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=en,d=Fi();if(Zt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),mn===null)throw Error(t(349));(hs&30)!==0||Sp(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Cp(Ep.bind(null,c,m,n),[n]),c.flags|=2048,Ja(9,Mp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Fi(),i=mn.identifierPrefix;if(Zt){var a=tr,c=er;a=(c&~(1<<32-Re(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Za++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Kx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},t_={readContext:li,useCallback:Dp,useContext:li,useEffect:Mu,useImperativeHandle:Lp,useInsertionEffect:Rp,useLayoutEffect:Pp,useMemo:Ip,useReducer:yu,useRef:Ap,useState:function(){return yu(Qa)},useDebugValue:Eu,useDeferredValue:function(n){var i=ci();return Up(i,cn.memoizedState,n)},useTransition:function(){var n=yu(Qa)[0],i=ci().memoizedState;return[n,i]},useMutableSource:vp,useSyncExternalStore:yp,useId:Fp,unstable_isNewReconciler:!1},n_={readContext:li,useCallback:Dp,useContext:li,useEffect:Mu,useImperativeHandle:Lp,useInsertionEffect:Rp,useLayoutEffect:Pp,useMemo:Ip,useReducer:Su,useRef:Ap,useState:function(){return Su(Qa)},useDebugValue:Eu,useDeferredValue:function(n){var i=ci();return cn===null?i.memoizedState=n:Up(i,cn.memoizedState,n)},useTransition:function(){var n=Su(Qa)[0],i=ci().memoizedState;return[n,i]},useMutableSource:vp,useSyncExternalStore:yp,useId:Fp,unstable_isNewReconciler:!1};function Si(n,i){if(n&&n.defaultProps){i=de({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Tu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:de({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var cl={isMounted:function(n){return(n=n._reactInternals)?si(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ln(),d=Or(n),m=ir(c,d);m.payload=i,a!=null&&(m.callback=a),i=Dr(n,m,d),i!==null&&(Ti(i,n,d,c),tl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ln(),d=Or(n),m=ir(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Dr(n,m,d),i!==null&&(Ti(i,n,d,c),tl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ln(),c=Or(n),d=ir(a,c);d.tag=2,i!=null&&(d.callback=i),i=Dr(n,d,c),i!==null&&(Ti(i,n,c,a),tl(i,n,c))}};function zp(n,i,a,c,d,m,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,b):i.prototype&&i.prototype.isPureReactComponent?!Ba(a,c)||!Ba(d,m):!0}function Vp(n,i,a){var c=!1,d=Pr,m=i.contextType;return typeof m=="object"&&m!==null?m=li(m):(d=kn(i)?ls:Mn.current,c=i.contextTypes,m=(c=c!=null)?Xs(n,d):Pr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=cl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Gp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&cl.enqueueReplaceState(i,i.state,null)}function wu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},du(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=li(m):(m=kn(i)?ls:Mn.current,d.context=Xs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Tu(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&cl.enqueueReplaceState(d,d.state,null),nl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ea(n,i){try{var a="",c=i;do a+=De(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function bu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Au(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var i_=typeof WeakMap=="function"?WeakMap:Map;function Hp(n,i,a){a=ir(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){gl||(gl=!0,Gu=c),Au(n,i)},a}function Wp(n,i,a){a=ir(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Au(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Au(n,i),typeof c!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function jp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new i_;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=x_.bind(null,n,i,a),i.then(n,n))}function Xp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function qp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ir(-1,1),i.tag=2,Dr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var r_=L.ReactCurrentOwner,Bn=!1;function Nn(n,i,a,c){i.child=n===null?hp(i,null,a,c):Ks(i,n.child,a,c)}function $p(n,i,a,c,d){a=a.render;var m=i.ref;return Qs(i,d),c=_u(n,i,a,c,m,d),a=vu(),n!==null&&!Bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,rr(n,i,d)):(Zt&&a&&tu(i),i.flags|=1,Nn(n,i,c,d),i.child)}function Yp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Yu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Kp(n,i,m,c,d)):(n=Ml(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var b=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ba,a(b,c)&&n.ref===i.ref)return rr(n,i,d)}return i.flags|=1,n=Br(m,c),n.ref=i.ref,n.return=i,i.child=n}function Kp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Ba(m,c)&&n.ref===i.ref)if(Bn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Bn=!0);else return i.lanes=n.lanes,rr(n,i,d)}return Cu(n,i,a,c,d)}function Zp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(na,Zn),Zn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,jt(na,Zn),Zn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,jt(na,Zn),Zn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,jt(na,Zn),Zn|=c;return Nn(n,i,d,a),i.child}function Qp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Cu(n,i,a,c,d){var m=kn(a)?ls:Mn.current;return m=Xs(i,m),Qs(i,d),a=_u(n,i,a,c,m,d),c=vu(),n!==null&&!Bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,rr(n,i,d)):(Zt&&c&&tu(i),i.flags|=1,Nn(n,i,a,d),i.child)}function Jp(n,i,a,c,d){if(kn(a)){var m=!0;qo(i)}else m=!1;if(Qs(i,d),i.stateNode===null)dl(n,i),Vp(i,a,c),wu(i,a,c,d),c=!0;else if(n===null){var b=i.stateNode,F=i.memoizedProps;b.props=F;var V=b.context,ce=a.contextType;typeof ce=="object"&&ce!==null?ce=li(ce):(ce=kn(a)?ls:Mn.current,ce=Xs(i,ce));var Me=a.getDerivedStateFromProps,Ee=typeof Me=="function"||typeof b.getSnapshotBeforeUpdate=="function";Ee||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(F!==c||V!==ce)&&Gp(i,b,c,ce),Lr=!1;var ye=i.memoizedState;b.state=ye,nl(i,c,b,d),V=i.memoizedState,F!==c||ye!==V||On.current||Lr?(typeof Me=="function"&&(Tu(i,a,Me,c),V=i.memoizedState),(F=Lr||zp(i,a,F,c,ye,V,ce))?(Ee||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),b.props=c,b.state=V,b.context=ce,c=F):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{b=i.stateNode,mp(n,i),F=i.memoizedProps,ce=i.type===i.elementType?F:Si(i.type,F),b.props=ce,Ee=i.pendingProps,ye=b.context,V=a.contextType,typeof V=="object"&&V!==null?V=li(V):(V=kn(a)?ls:Mn.current,V=Xs(i,V));var ze=a.getDerivedStateFromProps;(Me=typeof ze=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(F!==Ee||ye!==V)&&Gp(i,b,c,V),Lr=!1,ye=i.memoizedState,b.state=ye,nl(i,c,b,d);var Xe=i.memoizedState;F!==Ee||ye!==Xe||On.current||Lr?(typeof ze=="function"&&(Tu(i,a,ze,c),Xe=i.memoizedState),(ce=Lr||zp(i,a,ce,c,ye,Xe,V)||!1)?(Me||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,Xe,V),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,Xe,V)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||F===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Xe),b.props=c,b.state=Xe,b.context=V,c=ce):(typeof b.componentDidUpdate!="function"||F===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),c=!1)}return Ru(n,i,a,c,m,d)}function Ru(n,i,a,c,d,m){Qp(n,i);var b=(i.flags&128)!==0;if(!c&&!b)return d&&rp(i,a,!1),rr(n,i,m);c=i.stateNode,r_.current=i;var F=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&b?(i.child=Ks(i,n.child,null,m),i.child=Ks(i,null,F,m)):Nn(n,i,F,m),i.memoizedState=c.state,d&&rp(i,a,!0),i.child}function em(n){var i=n.stateNode;i.pendingContext?np(n,i.pendingContext,i.pendingContext!==i.context):i.context&&np(n,i.context,!1),fu(n,i.containerInfo)}function tm(n,i,a,c,d){return Ys(),su(d),i.flags|=256,Nn(n,i,a,c),i.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Nu(n){return{baseLanes:n,cachePool:null,transitions:null}}function nm(n,i,a){var c=i.pendingProps,d=Jt.current,m=!1,b=(i.flags&128)!==0,F;if((F=b)||(F=n!==null&&n.memoizedState===null?!1:(d&2)!==0),F?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),jt(Jt,d&1),n===null)return ru(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=c.children,n=c.fallback,m?(c=i.mode,m=i.child,b={mode:"hidden",children:b},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=b):m=El(b,c,0,null),n=_s(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Nu(a),i.memoizedState=Pu,n):Lu(i,b));if(d=n.memoizedState,d!==null&&(F=d.dehydrated,F!==null))return s_(n,i,b,c,F,d,a);if(m){m=c.fallback,b=i.mode,d=n.child,F=d.sibling;var V={mode:"hidden",children:c.children};return(b&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=Br(d,V),c.subtreeFlags=d.subtreeFlags&14680064),F!==null?m=Br(F,m):(m=_s(m,b,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,b=n.child.memoizedState,b=b===null?Nu(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},m.memoizedState=b,m.childLanes=n.childLanes&~a,i.memoizedState=Pu,c}return m=n.child,n=m.sibling,c=Br(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Lu(n,i){return i=El({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ul(n,i,a,c){return c!==null&&su(c),Ks(i,n.child,null,a),n=Lu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function s_(n,i,a,c,d,m,b){if(a)return i.flags&256?(i.flags&=-257,c=bu(Error(t(422))),ul(n,i,b,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=El({mode:"visible",children:c.children},d,0,null),m=_s(m,d,b,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Ks(i,n.child,null,b),i.child.memoizedState=Nu(b),i.memoizedState=Pu,m);if((i.mode&1)===0)return ul(n,i,b,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var F=c.dgst;return c=F,m=Error(t(419)),c=bu(m,c,void 0),ul(n,i,b,c)}if(F=(b&n.childLanes)!==0,Bn||F){if(c=mn,c!==null){switch(b&-b){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|b))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,nr(n,d),Ti(c,n,d,-1))}return $u(),c=bu(Error(t(421))),ul(n,i,b,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=__.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Kn=Cr(d.nextSibling),Yn=i,Zt=!0,yi=null,n!==null&&(ai[oi++]=er,ai[oi++]=tr,ai[oi++]=cs,er=n.id,tr=n.overflow,cs=i),i=Lu(i,c.children),i.flags|=4096,i)}function im(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),cu(n.return,i,a)}function Du(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function rm(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Nn(n,i,c.children,a),c=Jt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&im(n,a,i);else if(n.tag===19)im(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(jt(Jt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&il(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Du(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&il(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Du(i,!0,a,null,m);break;case"together":Du(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function dl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function rr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ps|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Br(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Br(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function a_(n,i,a){switch(i.tag){case 3:em(i),Ys();break;case 5:_p(i);break;case 1:kn(i.type)&&qo(i);break;case 4:fu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;jt(Jo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(jt(Jt,Jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?nm(n,i,a):(jt(Jt,Jt.current&1),n=rr(n,i,a),n!==null?n.sibling:null);jt(Jt,Jt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return rm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),jt(Jt,Jt.current),c)break;return null;case 22:case 23:return i.lanes=0,Zp(n,i,a)}return rr(n,i,a)}var sm,Iu,am,om;sm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Iu=function(){},am=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,fs(Ui.current);var m=null;switch(a){case"input":d=Mt(n,d),c=Mt(n,c),m=[];break;case"select":d=de({},d,{value:void 0}),c=de({},c,{value:void 0}),m=[];break;case"textarea":d=Je(n,d),c=Je(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Wo)}Ie(a,c);var b;a=null;for(ce in d)if(!c.hasOwnProperty(ce)&&d.hasOwnProperty(ce)&&d[ce]!=null)if(ce==="style"){var F=d[ce];for(b in F)F.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?m||(m=[]):(m=m||[]).push(ce,null));for(ce in c){var V=c[ce];if(F=d!=null?d[ce]:void 0,c.hasOwnProperty(ce)&&V!==F&&(V!=null||F!=null))if(ce==="style")if(F){for(b in F)!F.hasOwnProperty(b)||V&&V.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in V)V.hasOwnProperty(b)&&F[b]!==V[b]&&(a||(a={}),a[b]=V[b])}else a||(m||(m=[]),m.push(ce,a)),a=V;else ce==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,F=F?F.__html:void 0,V!=null&&F!==V&&(m=m||[]).push(ce,V)):ce==="children"?typeof V!="string"&&typeof V!="number"||(m=m||[]).push(ce,""+V):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(V!=null&&ce==="onScroll"&&qt("scroll",n),m||F===V||(m=[])):(m=m||[]).push(ce,V))}a&&(m=m||[]).push("style",a);var ce=m;(i.updateQueue=ce)&&(i.flags|=4)}},om=function(n,i,a,c){a!==c&&(i.flags|=4)};function eo(n,i){if(!Zt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Tn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function o_(n,i,a){var c=i.pendingProps;switch(nu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(i),null;case 1:return kn(i.type)&&Xo(),Tn(i),null;case 3:return c=i.stateNode,Js(),$t(On),$t(Mn),mu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Zo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,yi!==null&&(ju(yi),yi=null))),Iu(n,i),Tn(i),null;case 5:hu(i);var d=fs(Ya.current);if(a=i.type,n!==null&&i.stateNode!=null)am(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Tn(i),null}if(n=fs(Ui.current),Zo(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Ii]=i,c[Wa]=m,n=(i.mode&1)!==0,a){case"dialog":qt("cancel",c),qt("close",c);break;case"iframe":case"object":case"embed":qt("load",c);break;case"video":case"audio":for(d=0;d<Va.length;d++)qt(Va[d],c);break;case"source":qt("error",c);break;case"img":case"image":case"link":qt("error",c),qt("load",c);break;case"details":qt("toggle",c);break;case"input":Lt(c,m),qt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},qt("invalid",c);break;case"textarea":Pt(c,m),qt("invalid",c)}Ie(a,m),d=null;for(var b in m)if(m.hasOwnProperty(b)){var F=m[b];b==="children"?typeof F=="string"?c.textContent!==F&&(m.suppressHydrationWarning!==!0&&Ho(c.textContent,F,n),d=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(m.suppressHydrationWarning!==!0&&Ho(c.textContent,F,n),d=["children",""+F]):o.hasOwnProperty(b)&&F!=null&&b==="onScroll"&&qt("scroll",c)}switch(a){case"input":et(c),Rt(c,m,!0);break;case"textarea":et(c),Vt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Wo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{b=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=P(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=b.createElement(a,{is:c.is}):(n=b.createElement(a),a==="select"&&(b=n,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):n=b.createElementNS(n,a),n[Ii]=i,n[Wa]=c,sm(n,i,!1,!1),i.stateNode=n;e:{switch(b=Te(a,c),a){case"dialog":qt("cancel",n),qt("close",n),d=c;break;case"iframe":case"object":case"embed":qt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Va.length;d++)qt(Va[d],n);d=c;break;case"source":qt("error",n),d=c;break;case"img":case"image":case"link":qt("error",n),qt("load",n),d=c;break;case"details":qt("toggle",n),d=c;break;case"input":Lt(n,c),d=Mt(n,c),qt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=de({},c,{value:void 0}),qt("invalid",n);break;case"textarea":Pt(n,c),d=Je(n,c),qt("invalid",n);break;default:d=c}Ie(a,d),F=d;for(m in F)if(F.hasOwnProperty(m)){var V=F[m];m==="style"?fe(n,V):m==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&me(n,V)):m==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&xe(n,V):typeof V=="number"&&xe(n,""+V):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?V!=null&&m==="onScroll"&&qt("scroll",n):V!=null&&N(n,m,V,b))}switch(a){case"input":et(n),Rt(n,c,!1);break;case"textarea":et(n),Vt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+pe(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?zt(n,!!c.multiple,m,!1):c.defaultValue!=null&&zt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Wo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Tn(i),null;case 6:if(n&&i.stateNode!=null)om(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=fs(Ya.current),fs(Ui.current),Zo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ii]=i,(m=c.nodeValue!==a)&&(n=Yn,n!==null))switch(n.tag){case 3:Ho(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ho(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ii]=i,i.stateNode=c}return Tn(i),null;case 13:if($t(Jt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Zt&&Kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)up(),Ys(),i.flags|=98560,m=!1;else if(m=Zo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ii]=i}else Ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Tn(i),m=!1}else yi!==null&&(ju(yi),yi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Jt.current&1)!==0?un===0&&(un=3):$u())),i.updateQueue!==null&&(i.flags|=4),Tn(i),null);case 4:return Js(),Iu(n,i),n===null&&Ga(i.stateNode.containerInfo),Tn(i),null;case 10:return lu(i.type._context),Tn(i),null;case 17:return kn(i.type)&&Xo(),Tn(i),null;case 19:if($t(Jt),m=i.memoizedState,m===null)return Tn(i),null;if(c=(i.flags&128)!==0,b=m.rendering,b===null)if(c)eo(m,!1);else{if(un!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=il(n),b!==null){for(i.flags|=128,eo(m,!1),c=b.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,b=m.alternate,b===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=b.childLanes,m.lanes=b.lanes,m.child=b.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=b.memoizedProps,m.memoizedState=b.memoizedState,m.updateQueue=b.updateQueue,m.type=b.type,n=b.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return jt(Jt,Jt.current&1|2),i.child}n=n.sibling}m.tail!==null&&je()>ia&&(i.flags|=128,c=!0,eo(m,!1),i.lanes=4194304)}else{if(!c)if(n=il(b),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),eo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!b.alternate&&!Zt)return Tn(i),null}else 2*je()-m.renderingStartTime>ia&&a!==1073741824&&(i.flags|=128,c=!0,eo(m,!1),i.lanes=4194304);m.isBackwards?(b.sibling=i.child,i.child=b):(a=m.last,a!==null?a.sibling=b:i.child=b,m.last=b)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=je(),i.sibling=null,a=Jt.current,jt(Jt,c?a&1|2:a&1),i):(Tn(i),null);case 22:case 23:return qu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Zn&1073741824)!==0&&(Tn(i),i.subtreeFlags&6&&(i.flags|=8192)):Tn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function l_(n,i){switch(nu(i),i.tag){case 1:return kn(i.type)&&Xo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Js(),$t(On),$t(Mn),mu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return hu(i),null;case 13:if($t(Jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ys()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return $t(Jt),null;case 4:return Js(),null;case 10:return lu(i.type._context),null;case 22:case 23:return qu(),null;case 24:return null;default:return null}}var fl=!1,wn=!1,c_=typeof WeakSet=="function"?WeakSet:Set,He=null;function ta(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tn(n,i,c)}else a.current=null}function Uu(n,i,a){try{a()}catch(c){tn(n,i,c)}}var lm=!1;function u_(n,i){if(qc=Lo,n=zh(),Bc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var b=0,F=-1,V=-1,ce=0,Me=0,Ee=n,ye=null;t:for(;;){for(var ze;Ee!==a||d!==0&&Ee.nodeType!==3||(F=b+d),Ee!==m||c!==0&&Ee.nodeType!==3||(V=b+c),Ee.nodeType===3&&(b+=Ee.nodeValue.length),(ze=Ee.firstChild)!==null;)ye=Ee,Ee=ze;for(;;){if(Ee===n)break t;if(ye===a&&++ce===d&&(F=b),ye===m&&++Me===c&&(V=b),(ze=Ee.nextSibling)!==null)break;Ee=ye,ye=Ee.parentNode}Ee=ze}a=F===-1||V===-1?null:{start:F,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for($c={focusedElem:n,selectionRange:a},Lo=!1,He=i;He!==null;)if(i=He,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,He=n;else for(;He!==null;){i=He;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var $e=Xe.memoizedProps,sn=Xe.memoizedState,J=i.stateNode,j=J.getSnapshotBeforeUpdate(i.elementType===i.type?$e:Si(i.type,$e),sn);J.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){tn(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,He=n;break}He=i.return}return Xe=lm,lm=!1,Xe}function to(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Uu(i,a,m)}d=d.next}while(d!==c)}}function hl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Fu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function cm(n){var i=n.alternate;i!==null&&(n.alternate=null,cm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ii],delete i[Wa],delete i[Qc],delete i[Xx],delete i[qx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function um(n){return n.tag===5||n.tag===3||n.tag===4}function dm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||um(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ou(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Wo));else if(c!==4&&(n=n.child,n!==null))for(Ou(n,i,a),n=n.sibling;n!==null;)Ou(n,i,a),n=n.sibling}function ku(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(ku(n,i,a),n=n.sibling;n!==null;)ku(n,i,a),n=n.sibling}var vn=null,Mi=!1;function Ir(n,i,a){for(a=a.child;a!==null;)fm(n,i,a),a=a.sibling}function fm(n,i,a){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 5:wn||ta(a,i);case 6:var c=vn,d=Mi;vn=null,Ir(n,i,a),vn=c,Mi=d,vn!==null&&(Mi?(n=vn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):vn.removeChild(a.stateNode));break;case 18:vn!==null&&(Mi?(n=vn,a=a.stateNode,n.nodeType===8?Zc(n.parentNode,a):n.nodeType===1&&Zc(n,a),Da(n)):Zc(vn,a.stateNode));break;case 4:c=vn,d=Mi,vn=a.stateNode.containerInfo,Mi=!0,Ir(n,i,a),vn=c,Mi=d;break;case 0:case 11:case 14:case 15:if(!wn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,b=m.destroy;m=m.tag,b!==void 0&&((m&2)!==0||(m&4)!==0)&&Uu(a,i,b),d=d.next}while(d!==c)}Ir(n,i,a);break;case 1:if(!wn&&(ta(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(F){tn(a,i,F)}Ir(n,i,a);break;case 21:Ir(n,i,a);break;case 22:a.mode&1?(wn=(c=wn)||a.memoizedState!==null,Ir(n,i,a),wn=c):Ir(n,i,a);break;default:Ir(n,i,a)}}function hm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new c_),i.forEach(function(c){var d=v_.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ei(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,b=i,F=b;e:for(;F!==null;){switch(F.tag){case 5:vn=F.stateNode,Mi=!1;break e;case 3:vn=F.stateNode.containerInfo,Mi=!0;break e;case 4:vn=F.stateNode.containerInfo,Mi=!0;break e}F=F.return}if(vn===null)throw Error(t(160));fm(m,b,d),vn=null,Mi=!1;var V=d.alternate;V!==null&&(V.return=null),d.return=null}catch(ce){tn(d,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)pm(i,n),i=i.sibling}function pm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ei(i,n),Oi(n),c&4){try{to(3,n,n.return),hl(3,n)}catch($e){tn(n,n.return,$e)}try{to(5,n,n.return)}catch($e){tn(n,n.return,$e)}}break;case 1:Ei(i,n),Oi(n),c&512&&a!==null&&ta(a,a.return);break;case 5:if(Ei(i,n),Oi(n),c&512&&a!==null&&ta(a,a.return),n.flags&32){var d=n.stateNode;try{xe(d,"")}catch($e){tn(n,n.return,$e)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,b=a!==null?a.memoizedProps:m,F=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{F==="input"&&m.type==="radio"&&m.name!=null&&ht(d,m),Te(F,b);var ce=Te(F,m);for(b=0;b<V.length;b+=2){var Me=V[b],Ee=V[b+1];Me==="style"?fe(d,Ee):Me==="dangerouslySetInnerHTML"?me(d,Ee):Me==="children"?xe(d,Ee):N(d,Me,Ee,ce)}switch(F){case"input":Bt(d,m);break;case"textarea":Le(d,m);break;case"select":var ye=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ze=m.value;ze!=null?zt(d,!!m.multiple,ze,!1):ye!==!!m.multiple&&(m.defaultValue!=null?zt(d,!!m.multiple,m.defaultValue,!0):zt(d,!!m.multiple,m.multiple?[]:"",!1))}d[Wa]=m}catch($e){tn(n,n.return,$e)}}break;case 6:if(Ei(i,n),Oi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch($e){tn(n,n.return,$e)}}break;case 3:if(Ei(i,n),Oi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Da(i.containerInfo)}catch($e){tn(n,n.return,$e)}break;case 4:Ei(i,n),Oi(n);break;case 13:Ei(i,n),Oi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Vu=je())),c&4&&hm(n);break;case 22:if(Me=a!==null&&a.memoizedState!==null,n.mode&1?(wn=(ce=wn)||Me,Ei(i,n),wn=ce):Ei(i,n),Oi(n),c&8192){if(ce=n.memoizedState!==null,(n.stateNode.isHidden=ce)&&!Me&&(n.mode&1)!==0)for(He=n,Me=n.child;Me!==null;){for(Ee=He=Me;He!==null;){switch(ye=He,ze=ye.child,ye.tag){case 0:case 11:case 14:case 15:to(4,ye,ye.return);break;case 1:ta(ye,ye.return);var Xe=ye.stateNode;if(typeof Xe.componentWillUnmount=="function"){c=ye,a=ye.return;try{i=c,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch($e){tn(c,a,$e)}}break;case 5:ta(ye,ye.return);break;case 22:if(ye.memoizedState!==null){xm(Ee);continue}}ze!==null?(ze.return=ye,He=ze):xm(Ee)}Me=Me.sibling}e:for(Me=null,Ee=n;;){if(Ee.tag===5){if(Me===null){Me=Ee;try{d=Ee.stateNode,ce?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(F=Ee.stateNode,V=Ee.memoizedProps.style,b=V!=null&&V.hasOwnProperty("display")?V.display:null,F.style.display=re("display",b))}catch($e){tn(n,n.return,$e)}}}else if(Ee.tag===6){if(Me===null)try{Ee.stateNode.nodeValue=ce?"":Ee.memoizedProps}catch($e){tn(n,n.return,$e)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;Me===Ee&&(Me=null),Ee=Ee.return}Me===Ee&&(Me=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:Ei(i,n),Oi(n),c&4&&hm(n);break;case 21:break;default:Ei(i,n),Oi(n)}}function Oi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(um(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(xe(d,""),c.flags&=-33);var m=dm(n);ku(n,m,d);break;case 3:case 4:var b=c.stateNode.containerInfo,F=dm(n);Ou(n,F,b);break;default:throw Error(t(161))}}catch(V){tn(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function d_(n,i,a){He=n,mm(n)}function mm(n,i,a){for(var c=(n.mode&1)!==0;He!==null;){var d=He,m=d.child;if(d.tag===22&&c){var b=d.memoizedState!==null||fl;if(!b){var F=d.alternate,V=F!==null&&F.memoizedState!==null||wn;F=fl;var ce=wn;if(fl=b,(wn=V)&&!ce)for(He=d;He!==null;)b=He,V=b.child,b.tag===22&&b.memoizedState!==null?_m(d):V!==null?(V.return=b,He=V):_m(d);for(;m!==null;)He=m,mm(m),m=m.sibling;He=d,fl=F,wn=ce}gm(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,He=m):gm(n)}}function gm(n){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:wn||hl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!wn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Si(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&xp(i,m,c);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}xp(i,b,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var Me=ce.memoizedState;if(Me!==null){var Ee=Me.dehydrated;Ee!==null&&Da(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}wn||i.flags&512&&Fu(i)}catch(ye){tn(i,i.return,ye)}}if(i===n){He=null;break}if(a=i.sibling,a!==null){a.return=i.return,He=a;break}He=i.return}}function xm(n){for(;He!==null;){var i=He;if(i===n){He=null;break}var a=i.sibling;if(a!==null){a.return=i.return,He=a;break}He=i.return}}function _m(n){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{hl(4,i)}catch(V){tn(i,a,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(V){tn(i,d,V)}}var m=i.return;try{Fu(i)}catch(V){tn(i,m,V)}break;case 5:var b=i.return;try{Fu(i)}catch(V){tn(i,b,V)}}}catch(V){tn(i,i.return,V)}if(i===n){He=null;break}var F=i.sibling;if(F!==null){F.return=i.return,He=F;break}He=i.return}}var f_=Math.ceil,pl=L.ReactCurrentDispatcher,Bu=L.ReactCurrentOwner,ui=L.ReactCurrentBatchConfig,wt=0,mn=null,on=null,yn=0,Zn=0,na=Rr(0),un=0,no=null,ps=0,ml=0,zu=0,io=null,zn=null,Vu=0,ia=1/0,sr=null,gl=!1,Gu=null,Ur=null,xl=!1,Fr=null,_l=0,ro=0,Hu=null,vl=-1,yl=0;function Ln(){return(wt&6)!==0?je():vl!==-1?vl:vl=je()}function Or(n){return(n.mode&1)===0?1:(wt&2)!==0&&yn!==0?yn&-yn:Yx.transition!==null?(yl===0&&(yl=Be()),yl):(n=_t,n!==0||(n=window.event,n=n===void 0?16:yh(n.type)),n)}function Ti(n,i,a,c){if(50<ro)throw ro=0,Hu=null,Error(t(185));xt(n,a,c),((wt&2)===0||n!==mn)&&(n===mn&&((wt&2)===0&&(ml|=a),un===4&&kr(n,yn)),Vn(n,c),a===1&&wt===0&&(i.mode&1)===0&&(ia=je()+500,$o&&Nr()))}function Vn(n,i){var a=n.callbackNode;Ut(n,i);var c=Wt(n,n===mn?yn:0);if(c===0)a!==null&&ss(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ss(a),i===1)n.tag===0?$x(ym.bind(null,n)):sp(ym.bind(null,n)),Wx(function(){(wt&6)===0&&Nr()}),a=null;else{switch(Zi(c)){case 1:a=gi;break;case 4:a=A;break;case 16:a=$;break;case 536870912:a=ne;break;default:a=$}a=Cm(a,vm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function vm(n,i){if(vl=-1,yl=0,(wt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ra()&&n.callbackNode!==a)return null;var c=Wt(n,n===mn?yn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Sl(n,c);else{i=c;var d=wt;wt|=2;var m=Mm();(mn!==n||yn!==i)&&(sr=null,ia=je()+500,gs(n,i));do try{m_();break}catch(F){Sm(n,F)}while(!0);ou(),pl.current=m,wt=d,on!==null?i=0:(mn=null,yn=0,i=un)}if(i!==0){if(i===2&&(d=an(n),d!==0&&(c=d,i=Wu(n,d))),i===1)throw a=no,gs(n,0),kr(n,c),Vn(n,je()),a;if(i===6)kr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!h_(d)&&(i=Sl(n,c),i===2&&(m=an(n),m!==0&&(c=m,i=Wu(n,m))),i===1))throw a=no,gs(n,0),kr(n,c),Vn(n,je()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:xs(n,zn,sr);break;case 3:if(kr(n,c),(c&130023424)===c&&(i=Vu+500-je(),10<i)){if(Wt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ln(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Kc(xs.bind(null,n,zn,sr),i);break}xs(n,zn,sr);break;case 4:if(kr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var b=31-Re(c);m=1<<b,b=i[b],b>d&&(d=b),c&=~m}if(c=d,c=je()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*f_(c/1960))-c,10<c){n.timeoutHandle=Kc(xs.bind(null,n,zn,sr),c);break}xs(n,zn,sr);break;case 5:xs(n,zn,sr);break;default:throw Error(t(329))}}}return Vn(n,je()),n.callbackNode===a?vm.bind(null,n):null}function Wu(n,i){var a=io;return n.current.memoizedState.isDehydrated&&(gs(n,i).flags|=256),n=Sl(n,i),n!==2&&(i=zn,zn=a,i!==null&&ju(i)),n}function ju(n){zn===null?zn=n:zn.push.apply(zn,n)}function h_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!vi(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function kr(n,i){for(i&=~zu,i&=~ml,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Re(i),c=1<<a;n[a]=-1,i&=~c}}function ym(n){if((wt&6)!==0)throw Error(t(327));ra();var i=Wt(n,0);if((i&1)===0)return Vn(n,je()),null;var a=Sl(n,i);if(n.tag!==0&&a===2){var c=an(n);c!==0&&(i=c,a=Wu(n,c))}if(a===1)throw a=no,gs(n,0),kr(n,i),Vn(n,je()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,xs(n,zn,sr),Vn(n,je()),null}function Xu(n,i){var a=wt;wt|=1;try{return n(i)}finally{wt=a,wt===0&&(ia=je()+500,$o&&Nr())}}function ms(n){Fr!==null&&Fr.tag===0&&(wt&6)===0&&ra();var i=wt;wt|=1;var a=ui.transition,c=_t;try{if(ui.transition=null,_t=1,n)return n()}finally{_t=c,ui.transition=a,wt=i,(wt&6)===0&&Nr()}}function qu(){Zn=na.current,$t(na)}function gs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Hx(a)),on!==null)for(a=on.return;a!==null;){var c=a;switch(nu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Xo();break;case 3:Js(),$t(On),$t(Mn),mu();break;case 5:hu(c);break;case 4:Js();break;case 13:$t(Jt);break;case 19:$t(Jt);break;case 10:lu(c.type._context);break;case 22:case 23:qu()}a=a.return}if(mn=n,on=n=Br(n.current,null),yn=Zn=i,un=0,no=null,zu=ml=ps=0,zn=io=null,ds!==null){for(i=0;i<ds.length;i++)if(a=ds[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var b=m.next;m.next=d,c.next=b}a.pending=c}ds=null}return n}function Sm(n,i){do{var a=on;try{if(ou(),rl.current=ll,sl){for(var c=en.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}sl=!1}if(hs=0,pn=cn=en=null,Ka=!1,Za=0,Bu.current=null,a===null||a.return===null){un=1,no=i,on=null;break}e:{var m=n,b=a.return,F=a,V=i;if(i=yn,F.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ce=V,Me=F,Ee=Me.tag;if((Me.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ye=Me.alternate;ye?(Me.updateQueue=ye.updateQueue,Me.memoizedState=ye.memoizedState,Me.lanes=ye.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var ze=Xp(b);if(ze!==null){ze.flags&=-257,qp(ze,b,F,m,i),ze.mode&1&&jp(m,ce,i),i=ze,V=ce;var Xe=i.updateQueue;if(Xe===null){var $e=new Set;$e.add(V),i.updateQueue=$e}else Xe.add(V);break e}else{if((i&1)===0){jp(m,ce,i),$u();break e}V=Error(t(426))}}else if(Zt&&F.mode&1){var sn=Xp(b);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),qp(sn,b,F,m,i),su(ea(V,F));break e}}m=V=ea(V,F),un!==4&&(un=2),io===null?io=[m]:io.push(m),m=b;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var J=Hp(m,V,i);gp(m,J);break e;case 1:F=V;var j=m.type,ie=m.stateNode;if((m.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Ur===null||!Ur.has(ie)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ae=Wp(m,F,i);gp(m,Ae);break e}}m=m.return}while(m!==null)}Tm(a)}catch(Ze){i=Ze,on===a&&a!==null&&(on=a=a.return);continue}break}while(!0)}function Mm(){var n=pl.current;return pl.current=ll,n===null?ll:n}function $u(){(un===0||un===3||un===2)&&(un=4),mn===null||(ps&268435455)===0&&(ml&268435455)===0||kr(mn,yn)}function Sl(n,i){var a=wt;wt|=2;var c=Mm();(mn!==n||yn!==i)&&(sr=null,gs(n,i));do try{p_();break}catch(d){Sm(n,d)}while(!0);if(ou(),wt=a,pl.current=c,on!==null)throw Error(t(261));return mn=null,yn=0,un}function p_(){for(;on!==null;)Em(on)}function m_(){for(;on!==null&&!Fs();)Em(on)}function Em(n){var i=Am(n.alternate,n,Zn);n.memoizedProps=n.pendingProps,i===null?Tm(n):on=i,Bu.current=null}function Tm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=o_(a,i,Zn),a!==null){on=a;return}}else{if(a=l_(a,i),a!==null){a.flags&=32767,on=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{un=6,on=null;return}}if(i=i.sibling,i!==null){on=i;return}on=i=n}while(i!==null);un===0&&(un=5)}function xs(n,i,a){var c=_t,d=ui.transition;try{ui.transition=null,_t=1,g_(n,i,a,c)}finally{ui.transition=d,_t=c}return null}function g_(n,i,a,c){do ra();while(Fr!==null);if((wt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Un(n,m),n===mn&&(on=mn=null,yn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||xl||(xl=!0,Cm($,function(){return ra(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ui.transition,ui.transition=null;var b=_t;_t=1;var F=wt;wt|=4,Bu.current=null,u_(n,a),pm(a,n),Fx($c),Lo=!!qc,$c=qc=null,n.current=a,d_(a),gt(),wt=F,_t=b,ui.transition=m}else n.current=a;if(xl&&(xl=!1,Fr=n,_l=d),m=n.pendingLanes,m===0&&(Ur=null),Ge(a.stateNode),Vn(n,je()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(gl)throw gl=!1,n=Gu,Gu=null,n;return(_l&1)!==0&&n.tag!==0&&ra(),m=n.pendingLanes,(m&1)!==0?n===Hu?ro++:(ro=0,Hu=n):ro=0,Nr(),null}function ra(){if(Fr!==null){var n=Zi(_l),i=ui.transition,a=_t;try{if(ui.transition=null,_t=16>n?16:n,Fr===null)var c=!1;else{if(n=Fr,Fr=null,_l=0,(wt&6)!==0)throw Error(t(331));var d=wt;for(wt|=4,He=n.current;He!==null;){var m=He,b=m.child;if((He.flags&16)!==0){var F=m.deletions;if(F!==null){for(var V=0;V<F.length;V++){var ce=F[V];for(He=ce;He!==null;){var Me=He;switch(Me.tag){case 0:case 11:case 15:to(8,Me,m)}var Ee=Me.child;if(Ee!==null)Ee.return=Me,He=Ee;else for(;He!==null;){Me=He;var ye=Me.sibling,ze=Me.return;if(cm(Me),Me===ce){He=null;break}if(ye!==null){ye.return=ze,He=ye;break}He=ze}}}var Xe=m.alternate;if(Xe!==null){var $e=Xe.child;if($e!==null){Xe.child=null;do{var sn=$e.sibling;$e.sibling=null,$e=sn}while($e!==null)}}He=m}}if((m.subtreeFlags&2064)!==0&&b!==null)b.return=m,He=b;else e:for(;He!==null;){if(m=He,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:to(9,m,m.return)}var J=m.sibling;if(J!==null){J.return=m.return,He=J;break e}He=m.return}}var j=n.current;for(He=j;He!==null;){b=He;var ie=b.child;if((b.subtreeFlags&2064)!==0&&ie!==null)ie.return=b,He=ie;else e:for(b=j;He!==null;){if(F=He,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:hl(9,F)}}catch(Ze){tn(F,F.return,Ze)}if(F===b){He=null;break e}var Ae=F.sibling;if(Ae!==null){Ae.return=F.return,He=Ae;break e}He=F.return}}if(wt=d,Nr(),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(te,n)}catch{}c=!0}return c}finally{_t=a,ui.transition=i}}return!1}function wm(n,i,a){i=ea(a,i),i=Hp(n,i,1),n=Dr(n,i,1),i=Ln(),n!==null&&(xt(n,1,i),Vn(n,i))}function tn(n,i,a){if(n.tag===3)wm(n,n,a);else for(;i!==null;){if(i.tag===3){wm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ur===null||!Ur.has(c))){n=ea(a,n),n=Wp(i,n,1),i=Dr(i,n,1),n=Ln(),i!==null&&(xt(i,1,n),Vn(i,n));break}}i=i.return}}function x_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ln(),n.pingedLanes|=n.suspendedLanes&a,mn===n&&(yn&a)===a&&(un===4||un===3&&(yn&130023424)===yn&&500>je()-Vu?gs(n,0):zu|=a),Vn(n,i)}function bm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ye,Ye<<=1,(Ye&130023424)===0&&(Ye=4194304)));var a=Ln();n=nr(n,i),n!==null&&(xt(n,i,a),Vn(n,a))}function __(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),bm(n,a)}function v_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),bm(n,a)}var Am;Am=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||On.current)Bn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Bn=!1,a_(n,i,a);Bn=(n.flags&131072)!==0}else Bn=!1,Zt&&(i.flags&1048576)!==0&&ap(i,Ko,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;dl(n,i),n=i.pendingProps;var d=Xs(i,Mn.current);Qs(i,a),d=_u(null,i,c,n,d,a);var m=vu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,kn(c)?(m=!0,qo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,du(i),d.updater=cl,i.stateNode=d,d._reactInternals=i,wu(i,c,n,a),i=Ru(null,i,c,!0,m,a)):(i.tag=0,Zt&&m&&tu(i),Nn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(dl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=S_(c),n=Si(c,n),d){case 0:i=Cu(null,i,c,n,a);break e;case 1:i=Jp(null,i,c,n,a);break e;case 11:i=$p(null,i,c,n,a);break e;case 14:i=Yp(null,i,c,Si(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Si(c,d),Cu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Si(c,d),Jp(n,i,c,d,a);case 3:e:{if(em(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,mp(n,i),nl(i,c,null,a);var b=i.memoizedState;if(c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=ea(Error(t(423)),i),i=tm(n,i,c,a,d);break e}else if(c!==d){d=ea(Error(t(424)),i),i=tm(n,i,c,a,d);break e}else for(Kn=Cr(i.stateNode.containerInfo.firstChild),Yn=i,Zt=!0,yi=null,a=hp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ys(),c===d){i=rr(n,i,a);break e}Nn(n,i,c,a)}i=i.child}return i;case 5:return _p(i),n===null&&ru(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,b=d.children,Yc(c,d)?b=null:m!==null&&Yc(c,m)&&(i.flags|=32),Qp(n,i),Nn(n,i,b,a),i.child;case 6:return n===null&&ru(i),null;case 13:return nm(n,i,a);case 4:return fu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ks(i,null,c,a):Nn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Si(c,d),$p(n,i,c,d,a);case 7:return Nn(n,i,i.pendingProps,a),i.child;case 8:return Nn(n,i,i.pendingProps.children,a),i.child;case 12:return Nn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,b=d.value,jt(Jo,c._currentValue),c._currentValue=b,m!==null)if(vi(m.value,b)){if(m.children===d.children&&!On.current){i=rr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var F=m.dependencies;if(F!==null){b=m.child;for(var V=F.firstContext;V!==null;){if(V.context===c){if(m.tag===1){V=ir(-1,a&-a),V.tag=2;var ce=m.updateQueue;if(ce!==null){ce=ce.shared;var Me=ce.pending;Me===null?V.next=V:(V.next=Me.next,Me.next=V),ce.pending=V}}m.lanes|=a,V=m.alternate,V!==null&&(V.lanes|=a),cu(m.return,a,i),F.lanes|=a;break}V=V.next}}else if(m.tag===10)b=m.type===i.type?null:m.child;else if(m.tag===18){if(b=m.return,b===null)throw Error(t(341));b.lanes|=a,F=b.alternate,F!==null&&(F.lanes|=a),cu(b,a,i),b=m.sibling}else b=m.child;if(b!==null)b.return=m;else for(b=m;b!==null;){if(b===i){b=null;break}if(m=b.sibling,m!==null){m.return=b.return,b=m;break}b=b.return}m=b}Nn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Qs(i,a),d=li(d),c=c(d),i.flags|=1,Nn(n,i,c,a),i.child;case 14:return c=i.type,d=Si(c,i.pendingProps),d=Si(c.type,d),Yp(n,i,c,d,a);case 15:return Kp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Si(c,d),dl(n,i),i.tag=1,kn(c)?(n=!0,qo(i)):n=!1,Qs(i,a),Vp(i,c,d),wu(i,c,d,a),Ru(null,i,c,!0,n,a);case 19:return rm(n,i,a);case 22:return Zp(n,i,a)}throw Error(t(156,i.tag))};function Cm(n,i){return Us(n,i)}function y_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,i,a,c){return new y_(n,i,a,c)}function Yu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function S_(n){if(typeof n=="function")return Yu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===G)return 11;if(n===H)return 14}return 2}function Br(n,i){var a=n.alternate;return a===null?(a=di(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ml(n,i,a,c,d,m){var b=2;if(c=n,typeof n=="function")Yu(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case O:return _s(a.children,d,m,i);case E:b=8,d|=8;break;case U:return n=di(12,a,i,d|2),n.elementType=U,n.lanes=m,n;case se:return n=di(13,a,i,d),n.elementType=se,n.lanes=m,n;case le:return n=di(19,a,i,d),n.elementType=le,n.lanes=m,n;case q:return El(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case X:b=10;break e;case I:b=9;break e;case G:b=11;break e;case H:b=14;break e;case Z:b=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=di(b,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function _s(n,i,a,c){return n=di(7,n,c,i),n.lanes=a,n}function El(n,i,a,c){return n=di(22,n,c,i),n.elementType=q,n.lanes=a,n.stateNode={isHidden:!1},n}function Ku(n,i,a){return n=di(6,n,null,i),n.lanes=a,n}function Zu(n,i,a){return i=di(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function M_(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_n(0),this.expirationTimes=_n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Qu(n,i,a,c,d,m,b,F,V){return n=new M_(n,i,a,F,V),i===1?(i=1,m===!0&&(i|=8)):i=0,m=di(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},du(m),n}function E_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Rm(n){if(!n)return Pr;n=n._reactInternals;e:{if(si(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(kn(a))return ip(n,a,i)}return i}function Pm(n,i,a,c,d,m,b,F,V){return n=Qu(a,c,!0,n,d,m,b,F,V),n.context=Rm(null),a=n.current,c=Ln(),d=Or(a),m=ir(c,d),m.callback=i??null,Dr(a,m,d),n.current.lanes=d,xt(n,d,c),Vn(n,c),n}function Tl(n,i,a,c){var d=i.current,m=Ln(),b=Or(d);return a=Rm(a),i.context===null?i.context=a:i.pendingContext=a,i=ir(m,b),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Dr(d,i,b),n!==null&&(Ti(n,d,b,m),tl(n,d,b)),b}function wl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Nm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ju(n,i){Nm(n,i),(n=n.alternate)&&Nm(n,i)}function T_(){return null}var Lm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ed(n){this._internalRoot=n}bl.prototype.render=ed.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Tl(n,i,null,null)},bl.prototype.unmount=ed.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ms(function(){Tl(null,n,null,null)}),i[Qi]=null}};function bl(n){this._internalRoot=n}bl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ft();n={blockedOn:null,target:n,priority:i};for(var a=0;a<wr.length&&i!==0&&i<wr[a].priority;a++);wr.splice(a,0,n),a===0&&_h(n)}};function td(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function w_(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ce=wl(b);m.call(ce)}}var b=Pm(i,c,n,0,null,!1,!1,"",Dm);return n._reactRootContainer=b,n[Qi]=b.current,Ga(n.nodeType===8?n.parentNode:n),ms(),b}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var F=c;c=function(){var ce=wl(V);F.call(ce)}}var V=Qu(n,0,!1,null,null,!1,!1,"",Dm);return n._reactRootContainer=V,n[Qi]=V.current,Ga(n.nodeType===8?n.parentNode:n),ms(function(){Tl(i,V,a,c)}),V}function Cl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var b=m;if(typeof d=="function"){var F=d;d=function(){var V=wl(b);F.call(V)}}Tl(i,b,n,d)}else b=w_(a,i,n,d,c);return wl(b)}Dt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Tt(i.pendingLanes);a!==0&&(Fn(i,a|1),Vn(i,je()),(wt&6)===0&&(ia=je()+500,Nr()))}break;case 13:ms(function(){var c=nr(n,1);if(c!==null){var d=Ln();Ti(c,n,1,d)}}),Ju(n,1)}},Xt=function(n){if(n.tag===13){var i=nr(n,134217728);if(i!==null){var a=Ln();Ti(i,n,134217728,a)}Ju(n,134217728)}},xi=function(n){if(n.tag===13){var i=Or(n),a=nr(n,i);if(a!==null){var c=Ln();Ti(a,n,i,c)}Ju(n,i)}},Ft=function(){return _t},_i=function(n,i){var a=_t;try{return _t=n,i()}finally{_t=a}},at=function(n,i,a){switch(i){case"input":if(Bt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=jo(c);if(!d)throw Error(t(90));kt(c),Bt(c,d)}}}break;case"textarea":Le(n,a);break;case"select":i=a.value,i!=null&&zt(n,!!a.multiple,i,!1)}},Ce=Xu,_e=ms;var b_={usingClientEntryPoint:!1,Events:[ja,Ws,jo,he,Oe,Xu]},so={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A_={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=rs(n),n===null?null:n.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||T_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{te=Rl.inject(A_),Pe=Rl}catch{}}return Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b_,Gn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!td(i))throw Error(t(200));return E_(n,i,null,a)},Gn.createRoot=function(n,i){if(!td(n))throw Error(t(299));var a=!1,c="",d=Lm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Qu(n,1,!1,null,null,a,!1,c,d),n[Qi]=i.current,Ga(n.nodeType===8?n.parentNode:n),new ed(i)},Gn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=rs(i),n=n===null?null:n.stateNode,n},Gn.flushSync=function(n){return ms(n)},Gn.hydrate=function(n,i,a){if(!Al(i))throw Error(t(200));return Cl(null,n,i,!0,a)},Gn.hydrateRoot=function(n,i,a){if(!td(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",b=Lm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=Pm(i,null,n,1,a??null,d,!1,m,b),n[Qi]=i.current,Ga(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new bl(i)},Gn.render=function(n,i,a){if(!Al(i))throw Error(t(200));return Cl(null,n,i,!1,a)},Gn.unmountComponentAtNode=function(n){if(!Al(n))throw Error(t(40));return n._reactRootContainer?(ms(function(){Cl(null,null,n,!1,function(){n._reactRootContainer=null,n[Qi]=null})}),!0):!1},Gn.unstable_batchedUpdates=Xu,Gn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Al(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Cl(n,i,a,!1,c)},Gn.version="18.3.1-next-f1338f8080-20240426",Gn}var Vm;function F_(){if(Vm)return rd.exports;Vm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),rd.exports=U_(),rd.exports}var Gm;function O_(){if(Gm)return Pl;Gm=1;var r=F_();return Pl.createRoot=r.createRoot,Pl.hydrateRoot=r.hydrateRoot,Pl}var k_=O_();const B_=Zg(k_);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hf="184",z_=0,Hm=1,V_=2,sc=1,G_=2,xo=3,Qr=0,jn=1,dr=2,pr=0,va=1,Wm=2,jm=3,Xm=4,H_=5,Ts=100,W_=101,j_=102,X_=103,q_=104,$_=200,Y_=201,K_=202,Z_=203,jd=204,Xd=205,Q_=206,J_=207,ev=208,tv=209,nv=210,iv=211,rv=212,sv=213,av=214,qd=0,$d=1,Yd=2,Sa=3,Kd=4,Zd=5,Qd=6,Jd=7,Qg=0,ov=1,lv=2,Wi=0,Jg=1,e0=2,t0=3,n0=4,i0=5,r0=6,s0=7,a0=300,Ns=301,Ma=302,od=303,ld=304,Mc=306,ef=1e3,hr=1001,tf=1002,Sn=1003,cv=1004,Nl=1005,Cn=1006,cd=1007,As=1008,ti=1009,o0=1010,l0=1011,So=1012,Wf=1013,Xi=1014,Gi=1015,gr=1016,jf=1017,Xf=1018,Mo=1020,c0=35902,u0=35899,d0=1021,f0=1022,Ri=1023,xr=1026,Cs=1027,h0=1028,qf=1029,Ls=1030,$f=1031,Yf=1033,ac=33776,oc=33777,lc=33778,cc=33779,nf=35840,rf=35841,sf=35842,af=35843,of=36196,lf=37492,cf=37496,uf=37488,df=37489,dc=37490,ff=37491,hf=37808,pf=37809,mf=37810,gf=37811,xf=37812,_f=37813,vf=37814,yf=37815,Sf=37816,Mf=37817,Ef=37818,Tf=37819,wf=37820,bf=37821,Af=36492,Cf=36494,Rf=36495,Pf=36283,Nf=36284,fc=36285,Lf=36286,uv=3200,Df=0,dv=1,qr="",pi="srgb",hc="srgb-linear",pc="linear",Ot="srgb",sa=7680,qm=519,fv=512,hv=513,pv=514,Kf=515,mv=516,gv=517,Zf=518,xv=519,$m=35044,Ym="300 es",Hi=2e3,Eo=2001;function _v(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function mc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function vv(){const r=mc("canvas");return r.style.display="block",r}const Km={};function Zm(...r){const e="THREE."+r.shift();console.log(e,...r)}function p0(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function rt(...r){r=p0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function bt(...r){r=p0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function If(...r){const e=r.join(" ");e in Km||(Km[e]=!0,rt(...r))}function yv(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const Sv={[qd]:$d,[Yd]:Qd,[Kd]:Jd,[Sa]:Zd,[$d]:qd,[Qd]:Yd,[Jd]:Kd,[Zd]:Sa};class Ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ud=Math.PI/180,Uf=180/Math.PI;function Ao(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]).toLowerCase()}function yt(r,e,t){return Math.max(e,Math.min(t,r))}function Mv(r,e){return(r%e+e)%e}function dd(r,e,t){return(1-t)*r+t*e}function oo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const fh=class fh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(yt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fh.prototype.isVector2=!0;let Ct=fh;class ba{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,f){let h=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3],g=l[u+0],S=l[u+1],w=l[u+2],C=l[u+3];if(y!==C||h!==g||p!==S||v!==w){let _=h*g+p*S+v*w+y*C;_<0&&(g=-g,S=-S,w=-w,C=-C,_=-_);let x=1-f;if(_<.9995){const R=Math.acos(_),N=Math.sin(R);x=Math.sin(x*R)/N,f=Math.sin(f*R)/N,h=h*x+g*f,p=p*x+S*f,v=v*x+w*f,y=y*x+C*f}else{h=h*x+g*f,p=p*x+S*f,v=v*x+w*f,y=y*x+C*f;const R=1/Math.sqrt(h*h+p*p+v*v+y*y);h*=R,p*=R,v*=R,y*=R}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=y}static multiplyQuaternionsFlat(e,t,s,o,l,u){const f=s[o],h=s[o+1],p=s[o+2],v=s[o+3],y=l[u],g=l[u+1],S=l[u+2],w=l[u+3];return e[t]=f*w+v*y+h*S-p*g,e[t+1]=h*w+v*g+p*y-f*S,e[t+2]=p*w+v*S+f*g-h*y,e[t+3]=v*w-f*y-h*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(s/2),v=f(o/2),y=f(l/2),g=h(s/2),S=h(o/2),w=h(l/2);switch(u){case"XYZ":this._x=g*v*y+p*S*w,this._y=p*S*y-g*v*w,this._z=p*v*w+g*S*y,this._w=p*v*y-g*S*w;break;case"YXZ":this._x=g*v*y+p*S*w,this._y=p*S*y-g*v*w,this._z=p*v*w-g*S*y,this._w=p*v*y+g*S*w;break;case"ZXY":this._x=g*v*y-p*S*w,this._y=p*S*y+g*v*w,this._z=p*v*w+g*S*y,this._w=p*v*y-g*S*w;break;case"ZYX":this._x=g*v*y-p*S*w,this._y=p*S*y+g*v*w,this._z=p*v*w-g*S*y,this._w=p*v*y+g*S*w;break;case"YZX":this._x=g*v*y+p*S*w,this._y=p*S*y+g*v*w,this._z=p*v*w-g*S*y,this._w=p*v*y-g*S*w;break;case"XZY":this._x=g*v*y-p*S*w,this._y=p*S*y-g*v*w,this._z=p*v*w+g*S*y,this._w=p*v*y+g*S*w;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],v=t[6],y=t[10],g=s+f+y;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(v-h)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(s>f&&s>y){const S=2*Math.sqrt(1+s-f-y);this._w=(v-h)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(f>y){const S=2*Math.sqrt(1+f-s-y);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(h+v)/S}else{const S=2*Math.sqrt(1+y-s-f);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(h+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=s*v+u*f+o*p-l*h,this._y=o*v+u*h+l*f-s*p,this._z=l*v+u*p+s*h-o*f,this._w=u*v-s*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(s=-s,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hh=class hh{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*s),v=2*(f*t-l*o),y=2*(l*s-u*t);return this.x=t+h*p+u*y-f*v,this.y=s+h*v+f*p-l*y,this.z=o+h*y+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-s*h,this.z=s*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return fd.copy(this).projectOnVector(e),this.sub(fd)}reflect(e){return this.sub(fd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(yt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hh.prototype.isVector3=!0;let Q=hh;const fd=new Q,Qm=new ba,ph=class ph{constructor(e,t,s,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,h,p)}set(e,t,s,o,l,u,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=s,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[3],h=s[6],p=s[1],v=s[4],y=s[7],g=s[2],S=s[5],w=s[8],C=o[0],_=o[3],x=o[6],R=o[1],N=o[4],L=o[7],B=o[2],D=o[5],O=o[8];return l[0]=u*C+f*R+h*B,l[3]=u*_+f*N+h*D,l[6]=u*x+f*L+h*O,l[1]=p*C+v*R+y*B,l[4]=p*_+v*N+y*D,l[7]=p*x+v*L+y*O,l[2]=g*C+S*R+w*B,l[5]=g*_+S*N+w*D,l[8]=g*x+S*L+w*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-s*l*v+s*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],y=v*u-f*p,g=f*h-v*l,S=p*l-u*h,w=t*y+s*g+o*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=y*C,e[1]=(o*p-v*s)*C,e[2]=(f*s-o*u)*C,e[3]=g*C,e[4]=(v*t-o*h)*C,e[5]=(o*l-f*t)*C,e[6]=S*C,e[7]=(s*h-p*t)*C,e[8]=(u*t-s*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(hd.makeScale(e,t)),this}rotate(e){return this.premultiply(hd.makeRotation(-e)),this}translate(e,t){return this.premultiply(hd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ph.prototype.isMatrix3=!0;let ft=ph;const hd=new ft,Jm=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eg=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ev(){const r={enabled:!0,workingColorSpace:hc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ot&&(o.r=mr(o.r),o.g=mr(o.g),o.b=mr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ot&&(o.r=ya(o.r),o.g=ya(o.g),o.b=ya(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===qr?pc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return If("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return If("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[hc]:{primaries:e,whitePoint:s,transfer:pc,toXYZ:Jm,fromXYZ:eg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:s,transfer:Ot,toXYZ:Jm,fromXYZ:eg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),r}const St=Ev();function mr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ya(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let aa;class Tv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{aa===void 0&&(aa=mc("canvas")),aa.width=e.width,aa.height=e.height;const o=aa.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=aa}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=mr(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(mr(t[s]/255)*255):t[s]=mr(t[s]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wv=0;class Qf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=Ao(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(pd(o[u].image)):l.push(pd(o[u]))}else l=pd(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function pd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Tv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let bv=0;const md=new Q;class In extends Ds{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,s=hr,o=hr,l=Cn,u=As,f=Ri,h=ti,p=In.DEFAULT_ANISOTROPY,v=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=Ao(),this.name="",this.source=new Qf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(md).x}get height(){return this.source.getSize(md).y}get depth(){return this.source.getSize(md).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==a0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ef:e.x=e.x-Math.floor(e.x);break;case hr:e.x=e.x<0?0:1;break;case tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ef:e.y=e.y-Math.floor(e.y);break;case hr:e.y=e.y<0?0:1;break;case tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=a0;In.DEFAULT_ANISOTROPY=1;const mh=class mh{constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,p=h[0],v=h[4],y=h[8],g=h[1],S=h[5],w=h[9],C=h[2],_=h[6],x=h[10];if(Math.abs(v-g)<.01&&Math.abs(y-C)<.01&&Math.abs(w-_)<.01){if(Math.abs(v+g)<.1&&Math.abs(y+C)<.1&&Math.abs(w+_)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(p+1)/2,L=(S+1)/2,B=(x+1)/2,D=(v+g)/4,O=(y+C)/4,E=(w+_)/4;return N>L&&N>B?N<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(N),o=D/s,l=O/s):L>B?L<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(L),s=D/o,l=E/o):B<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(B),s=O/l,o=E/l),this.set(s,o,l,t),this}let R=Math.sqrt((_-w)*(_-w)+(y-C)*(y-C)+(g-v)*(g-v));return Math.abs(R)<.001&&(R=1),this.x=(_-w)/R,this.y=(y-C)/R,this.z=(g-v)/R,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mh.prototype.isVector4=!0;let nn=mh;class Av extends Ds{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},l=new In(o),u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Qf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends Av{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class m0 extends In{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cv extends In{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sc=class Sc{constructor(e,t,s,o,l,u,f,h,p,v,y,g,S,w,C,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,h,p,v,y,g,S,w,C,_)}set(e,t,s,o,l,u,f,h,p,v,y,g,S,w,C,_){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=o,x[1]=l,x[5]=u,x[9]=f,x[13]=h,x[2]=p,x[6]=v,x[10]=y,x[14]=g,x[3]=S,x[7]=w,x[11]=C,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sc().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,s=e.elements,o=1/oa.setFromMatrixColumn(e,0).length(),l=1/oa.setFromMatrixColumn(e,1).length(),u=1/oa.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const g=u*v,S=u*y,w=f*v,C=f*y;t[0]=h*v,t[4]=-h*y,t[8]=p,t[1]=S+w*p,t[5]=g-C*p,t[9]=-f*h,t[2]=C-g*p,t[6]=w+S*p,t[10]=u*h}else if(e.order==="YXZ"){const g=h*v,S=h*y,w=p*v,C=p*y;t[0]=g+C*f,t[4]=w*f-S,t[8]=u*p,t[1]=u*y,t[5]=u*v,t[9]=-f,t[2]=S*f-w,t[6]=C+g*f,t[10]=u*h}else if(e.order==="ZXY"){const g=h*v,S=h*y,w=p*v,C=p*y;t[0]=g-C*f,t[4]=-u*y,t[8]=w+S*f,t[1]=S+w*f,t[5]=u*v,t[9]=C-g*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const g=u*v,S=u*y,w=f*v,C=f*y;t[0]=h*v,t[4]=w*p-S,t[8]=g*p+C,t[1]=h*y,t[5]=C*p+g,t[9]=S*p-w,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,S=u*p,w=f*h,C=f*p;t[0]=h*v,t[4]=C-g*y,t[8]=w*y+S,t[1]=y,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=S*y+w,t[10]=g-C*y}else if(e.order==="XZY"){const g=u*h,S=u*p,w=f*h,C=f*p;t[0]=h*v,t[4]=-y,t[8]=p*v,t[1]=g*y+C,t[5]=u*v,t[9]=S*y-w,t[2]=w*y-S,t[6]=f*v,t[10]=C*y+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rv,e,Pv)}lookAt(e,t,s){const o=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Vr.crossVectors(s,Qn),Vr.lengthSq()===0&&(Math.abs(s.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Vr.crossVectors(s,Qn)),Vr.normalize(),Ll.crossVectors(Qn,Vr),o[0]=Vr.x,o[4]=Ll.x,o[8]=Qn.x,o[1]=Vr.y,o[5]=Ll.y,o[9]=Qn.y,o[2]=Vr.z,o[6]=Ll.z,o[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[4],h=s[8],p=s[12],v=s[1],y=s[5],g=s[9],S=s[13],w=s[2],C=s[6],_=s[10],x=s[14],R=s[3],N=s[7],L=s[11],B=s[15],D=o[0],O=o[4],E=o[8],U=o[12],X=o[1],I=o[5],G=o[9],se=o[13],le=o[2],H=o[6],Z=o[10],q=o[14],Y=o[3],ue=o[7],de=o[11],k=o[15];return l[0]=u*D+f*X+h*le+p*Y,l[4]=u*O+f*I+h*H+p*ue,l[8]=u*E+f*G+h*Z+p*de,l[12]=u*U+f*se+h*q+p*k,l[1]=v*D+y*X+g*le+S*Y,l[5]=v*O+y*I+g*H+S*ue,l[9]=v*E+y*G+g*Z+S*de,l[13]=v*U+y*se+g*q+S*k,l[2]=w*D+C*X+_*le+x*Y,l[6]=w*O+C*I+_*H+x*ue,l[10]=w*E+C*G+_*Z+x*de,l[14]=w*U+C*se+_*q+x*k,l[3]=R*D+N*X+L*le+B*Y,l[7]=R*O+N*I+L*H+B*ue,l[11]=R*E+N*G+L*Z+B*de,l[15]=R*U+N*se+L*q+B*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],v=e[2],y=e[6],g=e[10],S=e[14],w=e[3],C=e[7],_=e[11],x=e[15],R=h*S-p*g,N=f*S-p*y,L=f*g-h*y,B=u*S-p*v,D=u*g-h*v,O=u*y-f*v;return t*(C*R-_*N+x*L)-s*(w*R-_*B+x*D)+o*(w*N-C*B+x*O)-l*(w*L-C*D+_*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],y=e[9],g=e[10],S=e[11],w=e[12],C=e[13],_=e[14],x=e[15],R=t*f-s*u,N=t*h-o*u,L=t*p-l*u,B=s*h-o*f,D=s*p-l*f,O=o*p-l*h,E=v*C-y*w,U=v*_-g*w,X=v*x-S*w,I=y*_-g*C,G=y*x-S*C,se=g*x-S*_,le=R*se-N*G+L*I+B*X-D*U+O*E;if(le===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/le;return e[0]=(f*se-h*G+p*I)*H,e[1]=(o*G-s*se-l*I)*H,e[2]=(C*O-_*D+x*B)*H,e[3]=(g*D-y*O-S*B)*H,e[4]=(h*X-u*se-p*U)*H,e[5]=(t*se-o*X+l*U)*H,e[6]=(_*L-w*O-x*N)*H,e[7]=(v*O-g*L+S*N)*H,e[8]=(u*G-f*X+p*E)*H,e[9]=(s*X-t*G-l*E)*H,e[10]=(w*D-C*L+x*R)*H,e[11]=(y*L-v*D-S*R)*H,e[12]=(f*U-u*I-h*E)*H,e[13]=(t*I-s*U+o*E)*H,e[14]=(C*N-w*B-_*R)*H,e[15]=(v*B-y*N+g*R)*H,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,f=e.y,h=e.z,p=l*u,v=l*f;return this.set(p*u+s,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+s,v*h-o*u,0,p*h-o*f,v*h+o*u,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,v=u+u,y=f+f,g=l*p,S=l*v,w=l*y,C=u*v,_=u*y,x=f*y,R=h*p,N=h*v,L=h*y,B=s.x,D=s.y,O=s.z;return o[0]=(1-(C+x))*B,o[1]=(S+L)*B,o[2]=(w-N)*B,o[3]=0,o[4]=(S-L)*D,o[5]=(1-(g+x))*D,o[6]=(_+R)*D,o[7]=0,o[8]=(w+N)*O,o[9]=(_-R)*O,o[10]=(1-(g+C))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return s.set(1,1,1),t.identity(),this;let u=oa.set(o[0],o[1],o[2]).length();const f=oa.set(o[4],o[5],o[6]).length(),h=oa.set(o[8],o[9],o[10]).length();l<0&&(u=-u),wi.copy(this);const p=1/u,v=1/f,y=1/h;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=v,wi.elements[5]*=v,wi.elements[6]*=v,wi.elements[8]*=y,wi.elements[9]*=y,wi.elements[10]*=y,t.setFromRotationMatrix(wi),s.x=u,s.y=f,s.z=h,this}makePerspective(e,t,s,o,l,u,f=Hi,h=!1){const p=this.elements,v=2*l/(t-e),y=2*l/(s-o),g=(t+e)/(t-e),S=(s+o)/(s-o);let w,C;if(h)w=l/(u-l),C=u*l/(u-l);else if(f===Hi)w=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(f===Eo)w=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=y,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,u,f=Hi,h=!1){const p=this.elements,v=2/(t-e),y=2/(s-o),g=-(t+e)/(t-e),S=-(s+o)/(s-o);let w,C;if(h)w=1/(u-l),C=u/(u-l);else if(f===Hi)w=-2/(u-l),C=-(u+l)/(u-l);else if(f===Eo)w=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=y,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=w,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};Sc.prototype.isMatrix4=!0;let Qt=Sc;const oa=new Q,wi=new Qt,Rv=new Q(0,0,0),Pv=new Q(1,1,1),Vr=new Q,Ll=new Q,Qn=new Q,tg=new Qt,ng=new ba;class Jr{constructor(e=0,t=0,s=0,o=Jr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],v=o[9],y=o[2],g=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-yt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return tg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tg,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ng.setFromEuler(this),this.setFromQuaternion(ng,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jr.DEFAULT_ORDER="XYZ";class g0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nv=0;const ig=new Q,la=new ba,ar=new Qt,Dl=new Q,lo=new Q,Lv=new Q,Dv=new ba,rg=new Q(1,0,0),sg=new Q(0,1,0),ag=new Q(0,0,1),og={type:"added"},Iv={type:"removed"},ca={type:"childadded",child:null},gd={type:"childremoved",child:null};class Rn extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new Q,t=new Jr,s=new ba,o=new Q(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Qt},normalMatrix:{value:new ft}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new g0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return la.setFromAxisAngle(e,t),this.quaternion.multiply(la),this}rotateOnWorldAxis(e,t){return la.setFromAxisAngle(e,t),this.quaternion.premultiply(la),this}rotateX(e){return this.rotateOnAxis(rg,e)}rotateY(e){return this.rotateOnAxis(sg,e)}rotateZ(e){return this.rotateOnAxis(ag,e)}translateOnAxis(e,t){return ig.copy(e).applyQuaternion(this.quaternion),this.position.add(ig.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rg,e)}translateY(e){return this.translateOnAxis(sg,e)}translateZ(e){return this.translateOnAxis(ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ar.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Dl.copy(e):Dl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ar.lookAt(lo,Dl,this.up):ar.lookAt(Dl,lo,this.up),this.quaternion.setFromRotationMatrix(ar),o&&(ar.extractRotation(o.matrixWorld),la.setFromRotationMatrix(ar),this.quaternion.premultiply(la.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(og),ca.child=e,this.dispatchEvent(ca),ca.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Iv),gd.child=e,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(og),ca.child=e,this.dispatchEvent(ca),ca.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,Lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,Dv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const y=h[p];l(e.shapes,y)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),y=u(e.shapes),g=u(e.skeletons),S=u(e.animations),w=u(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),y.length>0&&(s.shapes=y),g.length>0&&(s.skeletons=g),S.length>0&&(s.animations=S),w.length>0&&(s.nodes=w)}return s.object=o,s;function u(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Rn.DEFAULT_UP=new Q(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _o extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uv={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const C of e.hand.values()){const _=t.getJointPose(C,s),x=this._getHandJoint(p,C);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const v=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],g=v.position.distanceTo(y.position),S=.02,w=.005;p.inputState.pinching&&g>S+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Uv)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new _o;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const x0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gr={h:0,s:0,l:0},Il={h:0,s:0,l:0};function _d(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class At{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=St.workingColorSpace){return this.r=e,this.g=t,this.b=s,St.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=St.workingColorSpace){if(e=Mv(e,1),t=yt(t,0,1),s=yt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=_d(u,l,e+1/3),this.g=_d(u,l,e),this.b=_d(u,l,e-1/3)}return St.colorSpaceToWorking(this,o),this}setStyle(e,t=pi){function s(l){l!==void 0&&parseFloat(l)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){const s=x0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return St.workingToColorSpace(An.copy(this),e),Math.round(yt(An.r*255,0,255))*65536+Math.round(yt(An.g*255,0,255))*256+Math.round(yt(An.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.workingToColorSpace(An.copy(this),t);const s=An.r,o=An.g,l=An.b,u=Math.max(s,o,l),f=Math.min(s,o,l);let h,p;const v=(f+u)/2;if(f===u)h=0,p=0;else{const y=u-f;switch(p=v<=.5?y/(u+f):y/(2-u-f),u){case s:h=(o-l)/y+(o<l?6:0);break;case o:h=(l-s)/y+2;break;case l:h=(s-o)/y+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=St.workingColorSpace){return St.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=pi){St.workingToColorSpace(An.copy(this),e);const t=An.r,s=An.g,o=An.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Gr),this.setHSL(Gr.h+e,Gr.s+t,Gr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Gr),e.getHSL(Il);const s=dd(Gr.h,Il.h,t),o=dd(Gr.s,Il.s,t),l=dd(Gr.l,Il.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new At;At.NAMES=x0;class Fv extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jr,this.environmentIntensity=1,this.environmentRotation=new Jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bi=new Q,or=new Q,vd=new Q,lr=new Q,ua=new Q,da=new Q,lg=new Q,yd=new Q,Sd=new Q,Md=new Q,Ed=new nn,Td=new nn,wd=new nn;class Ci{constructor(e=new Q,t=new Q,s=new Q){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),bi.subVectors(e,t),o.cross(bi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){bi.subVectors(o,t),or.subVectors(s,t),vd.subVectors(e,t);const u=bi.dot(bi),f=bi.dot(or),h=bi.dot(vd),p=or.dot(or),v=or.dot(vd),y=u*p-f*f;if(y===0)return l.set(0,0,0),null;const g=1/y,S=(p*h-f*v)*g,w=(u*v-f*h)*g;return l.set(1-S-w,w,S)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,s,o,l,u,f,h){return this.getBarycoord(e,t,s,o,lr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,lr.x),h.addScaledVector(u,lr.y),h.addScaledVector(f,lr.z),h)}static getInterpolatedAttribute(e,t,s,o,l,u){return Ed.setScalar(0),Td.setScalar(0),wd.setScalar(0),Ed.fromBufferAttribute(e,t),Td.fromBufferAttribute(e,s),wd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Ed,l.x),u.addScaledVector(Td,l.y),u.addScaledVector(wd,l.z),u}static isFrontFacing(e,t,s,o){return bi.subVectors(s,t),or.subVectors(e,t),bi.cross(or).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),or.subVectors(this.a,this.b),bi.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return Ci.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,f;ua.subVectors(o,s),da.subVectors(l,s),yd.subVectors(e,s);const h=ua.dot(yd),p=da.dot(yd);if(h<=0&&p<=0)return t.copy(s);Sd.subVectors(e,o);const v=ua.dot(Sd),y=da.dot(Sd);if(v>=0&&y<=v)return t.copy(o);const g=h*y-v*p;if(g<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(s).addScaledVector(ua,u);Md.subVectors(e,l);const S=ua.dot(Md),w=da.dot(Md);if(w>=0&&S<=w)return t.copy(l);const C=S*p-h*w;if(C<=0&&p>=0&&w<=0)return f=p/(p-w),t.copy(s).addScaledVector(da,f);const _=v*w-S*y;if(_<=0&&y-v>=0&&S-w>=0)return lg.subVectors(l,o),f=(y-v)/(y-v+(S-w)),t.copy(o).addScaledVector(lg,f);const x=1/(_+C+g);return u=C*x,f=g*x,t.copy(s).addScaledVector(ua,u).addScaledVector(da,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Co{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ai):Ai.fromBufferAttribute(l,u),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ul.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ul.copy(s.boundingBox)),Ul.applyMatrix4(e.matrixWorld),this.union(Ul)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),Fl.subVectors(this.max,co),fa.subVectors(e.a,co),ha.subVectors(e.b,co),pa.subVectors(e.c,co),Hr.subVectors(ha,fa),Wr.subVectors(pa,ha),vs.subVectors(fa,pa);let t=[0,-Hr.z,Hr.y,0,-Wr.z,Wr.y,0,-vs.z,vs.y,Hr.z,0,-Hr.x,Wr.z,0,-Wr.x,vs.z,0,-vs.x,-Hr.y,Hr.x,0,-Wr.y,Wr.x,0,-vs.y,vs.x,0];return!bd(t,fa,ha,pa,Fl)||(t=[1,0,0,0,1,0,0,0,1],!bd(t,fa,ha,pa,Fl))?!1:(Ol.crossVectors(Hr,Wr),t=[Ol.x,Ol.y,Ol.z],bd(t,fa,ha,pa,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cr=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Ai=new Q,Ul=new Co,fa=new Q,ha=new Q,pa=new Q,Hr=new Q,Wr=new Q,vs=new Q,co=new Q,Fl=new Q,Ol=new Q,ys=new Q;function bd(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){ys.fromArray(r,l);const f=o.x*Math.abs(ys.x)+o.y*Math.abs(ys.y)+o.z*Math.abs(ys.z),h=e.dot(ys),p=t.dot(ys),v=s.dot(ys);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const ln=new Q,kl=new Ct;let Ov=0;class Ni extends Ds{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ov++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=$m,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)kl.fromBufferAttribute(this,t),kl.applyMatrix3(e),this.setXY(t,kl.x,kl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=oo(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Hn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),s=Hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),s=Hn(s,this.array),o=Hn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),s=Hn(s,this.array),o=Hn(o,this.array),l=Hn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$m&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class _0 extends Ni{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class v0 extends Ni{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class ni extends Ni{constructor(e,t,s){super(new Float32Array(e),t,s)}}const kv=new Co,uo=new Q,Ad=new Q;class Ro{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):kv.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);const t=uo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(uo,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(Ad)),this.expandByPoint(uo.copy(e.center).sub(Ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Bv=0;const fi=new Qt,Cd=new Rn,ma=new Q,Jn=new Co,fo=new Co,xn=new Q;class Xn extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_v(e)?v0:_0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ft().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,s){return fi.makeTranslation(e,t,s),this.applyMatrix4(fi),this}scale(e,t,s){return fi.makeScale(e,t,s),this.applyMatrix4(fi),this}lookAt(e){return Cd.lookAt(e),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ma).negate(),this.translate(ma.x,ma.y,ma.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ni(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Jn.setFromBufferAttribute(l),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const s=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];fo.setFromBufferAttribute(f),this.morphTargetsRelative?(xn.addVectors(Jn.min,fo.min),Jn.expandByPoint(xn),xn.addVectors(Jn.max,fo.max),Jn.expandByPoint(xn)):(Jn.expandByPoint(fo.min),Jn.expandByPoint(fo.max))}Jn.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)xn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(xn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)xn.fromBufferAttribute(f,p),h&&(ma.fromBufferAttribute(e,p),xn.add(ma)),o=Math.max(o,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let E=0;E<s.count;E++)f[E]=new Q,h[E]=new Q;const p=new Q,v=new Q,y=new Q,g=new Ct,S=new Ct,w=new Ct,C=new Q,_=new Q;function x(E,U,X){p.fromBufferAttribute(s,E),v.fromBufferAttribute(s,U),y.fromBufferAttribute(s,X),g.fromBufferAttribute(l,E),S.fromBufferAttribute(l,U),w.fromBufferAttribute(l,X),v.sub(p),y.sub(p),S.sub(g),w.sub(g);const I=1/(S.x*w.y-w.x*S.y);isFinite(I)&&(C.copy(v).multiplyScalar(w.y).addScaledVector(y,-S.y).multiplyScalar(I),_.copy(y).multiplyScalar(S.x).addScaledVector(v,-w.x).multiplyScalar(I),f[E].add(C),f[U].add(C),f[X].add(C),h[E].add(_),h[U].add(_),h[X].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let E=0,U=R.length;E<U;++E){const X=R[E],I=X.start,G=X.count;for(let se=I,le=I+G;se<le;se+=3)x(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const N=new Q,L=new Q,B=new Q,D=new Q;function O(E){B.fromBufferAttribute(o,E),D.copy(B);const U=f[E];N.copy(U),N.sub(B.multiplyScalar(B.dot(U))).normalize(),L.crossVectors(D,U);const I=L.dot(h[E])<0?-1:1;u.setXYZW(E,N.x,N.y,N.z,I)}for(let E=0,U=R.length;E<U;++E){const X=R[E],I=X.start,G=X.count;for(let se=I,le=I+G;se<le;se+=3)O(e.getX(se+0)),O(e.getX(se+1)),O(e.getX(se+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ni(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let g=0,S=s.count;g<S;g++)s.setXYZ(g,0,0,0);const o=new Q,l=new Q,u=new Q,f=new Q,h=new Q,p=new Q,v=new Q,y=new Q;if(e)for(let g=0,S=e.count;g<S;g+=3){const w=e.getX(g+0),C=e.getX(g+1),_=e.getX(g+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,_),v.subVectors(u,l),y.subVectors(o,l),v.cross(y),f.fromBufferAttribute(s,w),h.fromBufferAttribute(s,C),p.fromBufferAttribute(s,_),f.add(v),h.add(v),p.add(v),s.setXYZ(w,f.x,f.y,f.z),s.setXYZ(C,h.x,h.y,h.z),s.setXYZ(_,p.x,p.y,p.z)}else for(let g=0,S=t.count;g<S;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),y.subVectors(o,l),v.cross(y),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,y=f.normalized,g=new p.constructor(h.length*v);let S=0,w=0;for(let C=0,_=h.length;C<_;C++){f.isInterleavedBufferAttribute?S=h[C]*f.data.stride+f.offset:S=h[C]*v;for(let x=0;x<v;x++)g[w++]=p[S++]}return new Ni(g,v,y)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xn,s=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,y=p.length;v<y;v++){const g=p[v],S=e(g,s);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let y=0,g=p.length;y<g;y++){const S=p[y];v.push(S.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],y=l[p];for(let g=0,S=y.length;g<S;g++)v.push(y[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const y=u[p];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let zv=0;class Is extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=va,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jd,this.blendDst=Xd,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==va&&(s.blending=this.blending),this.side!==Qr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==jd&&(s.blendSrc=this.blendSrc),this.blendDst!==Xd&&(s.blendDst=this.blendDst),this.blendEquation!==Ts&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Sa&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sa&&(s.stencilFail=this.stencilFail),this.stencilZFail!==sa&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==sa&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ur=new Q,Rd=new Q,Bl=new Q,jr=new Q,Pd=new Q,zl=new Q,Nd=new Q;class Jf{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Rd.copy(e).add(t).multiplyScalar(.5),Bl.copy(t).sub(e).normalize(),jr.copy(this.origin).sub(Rd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Bl),f=jr.dot(this.direction),h=-jr.dot(Bl),p=jr.lengthSq(),v=Math.abs(1-u*u);let y,g,S,w;if(v>0)if(y=u*h-f,g=u*f-h,w=l*v,y>=0)if(g>=-w)if(g<=w){const C=1/v;y*=C,g*=C,S=y*(y+u*g+2*f)+g*(u*y+g+2*h)+p}else g=l,y=Math.max(0,-(u*g+f)),S=-y*y+g*(g+2*h)+p;else g=-l,y=Math.max(0,-(u*g+f)),S=-y*y+g*(g+2*h)+p;else g<=-w?(y=Math.max(0,-(-u*l+f)),g=y>0?-l:Math.min(Math.max(-l,-h),l),S=-y*y+g*(g+2*h)+p):g<=w?(y=0,g=Math.min(Math.max(-l,-h),l),S=g*(g+2*h)+p):(y=Math.max(0,-(u*l+f)),g=y>0?l:Math.min(Math.max(-l,-h),l),S=-y*y+g*(g+2*h)+p);else g=u>0?-l:l,y=Math.max(0,-(u*g+f)),S=-y*y+g*(g+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(Rd).addScaledVector(Bl,g),S}intersectSphere(e,t){ur.subVectors(e.center,this.origin);const s=ur.dot(this.direction),o=ur.dot(ur)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=s-u,h=s+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,f,h;const p=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,g=this.origin;return p>=0?(s=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(s=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),y>=0?(f=(e.min.z-g.z)*y,h=(e.max.z-g.z)*y):(f=(e.max.z-g.z)*y,h=(e.min.z-g.z)*y),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,s,o,l){Pd.subVectors(t,e),zl.subVectors(s,e),Nd.crossVectors(Pd,zl);let u=this.direction.dot(Nd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;jr.subVectors(this.origin,e);const h=f*this.direction.dot(zl.crossVectors(jr,zl));if(h<0)return null;const p=f*this.direction.dot(Pd.cross(jr));if(p<0||h+p>u)return null;const v=-f*jr.dot(Nd);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class y0 extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jr,this.combine=Qg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cg=new Qt,Ss=new Jf,Vl=new Ro,ug=new Q,Gl=new Q,Hl=new Q,Wl=new Q,Ld=new Q,jl=new Q,dg=new Q,Xl=new Q;class qi extends Rn{constructor(e=new Xn,t=new y0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){jl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],y=l[h];v!==0&&(Ld.fromBufferAttribute(y,e),u?jl.addScaledVector(Ld,v):jl.addScaledVector(Ld.sub(t),v))}t.add(jl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Vl.copy(s.boundingSphere),Vl.applyMatrix4(l),Ss.copy(e.ray).recast(e.near),!(Vl.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Vl,ug)===null||Ss.origin.distanceToSquared(ug)>(e.far-e.near)**2))&&(cg.copy(l).invert(),Ss.copy(e.ray).applyMatrix4(cg),!(s.boundingBox!==null&&Ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,y=l.attributes.normal,g=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,C=g.length;w<C;w++){const _=g[w],x=u[_.materialIndex],R=Math.max(_.start,S.start),N=Math.min(f.count,Math.min(_.start+_.count,S.start+S.count));for(let L=R,B=N;L<B;L+=3){const D=f.getX(L),O=f.getX(L+1),E=f.getX(L+2);o=ql(this,x,e,s,p,v,y,D,O,E),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),C=Math.min(f.count,S.start+S.count);for(let _=w,x=C;_<x;_+=3){const R=f.getX(_),N=f.getX(_+1),L=f.getX(_+2);o=ql(this,u,e,s,p,v,y,R,N,L),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,C=g.length;w<C;w++){const _=g[w],x=u[_.materialIndex],R=Math.max(_.start,S.start),N=Math.min(h.count,Math.min(_.start+_.count,S.start+S.count));for(let L=R,B=N;L<B;L+=3){const D=L,O=L+1,E=L+2;o=ql(this,x,e,s,p,v,y,D,O,E),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),C=Math.min(h.count,S.start+S.count);for(let _=w,x=C;_<x;_+=3){const R=_,N=_+1,L=_+2;o=ql(this,u,e,s,p,v,y,R,N,L),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Vv(r,e,t,s,o,l,u,f){let h;if(e.side===jn?h=s.intersectTriangle(u,l,o,!0,f):h=s.intersectTriangle(o,l,u,e.side===Qr,f),h===null)return null;Xl.copy(f),Xl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Xl);return p<t.near||p>t.far?null:{distance:p,point:Xl.clone(),object:r}}function ql(r,e,t,s,o,l,u,f,h,p){r.getVertexPosition(f,Gl),r.getVertexPosition(h,Hl),r.getVertexPosition(p,Wl);const v=Vv(r,e,t,s,Gl,Hl,Wl,dg);if(v){const y=new Q;Ci.getBarycoord(dg,Gl,Hl,Wl,y),o&&(v.uv=Ci.getInterpolatedAttribute(o,f,h,p,y,new Ct)),l&&(v.uv1=Ci.getInterpolatedAttribute(l,f,h,p,y,new Ct)),u&&(v.normal=Ci.getInterpolatedAttribute(u,f,h,p,y,new Q),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new Q,materialIndex:0};Ci.getNormal(Gl,Hl,Wl,g.normal),v.face=g,v.barycoord=y}return v}class Gv extends In{constructor(e=null,t=1,s=1,o,l,u,f,h,p=Sn,v=Sn,y,g){super(null,u,f,h,p,v,o,l,y,g),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dd=new Q,Hv=new Q,Wv=new ft;class Es{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Dd.subVectors(s,t).cross(Hv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const o=e.delta(Dd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Wv.getNormalMatrix(e),o=this.coplanarPoint(Dd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new Ro,jv=new Ct(.5,.5),$l=new Q;class eh{constructor(e=new Es,t=new Es,s=new Es,o=new Es,l=new Es,u=new Es){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Hi,s=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],v=l[4],y=l[5],g=l[6],S=l[7],w=l[8],C=l[9],_=l[10],x=l[11],R=l[12],N=l[13],L=l[14],B=l[15];if(o[0].setComponents(p-u,S-v,x-w,B-R).normalize(),o[1].setComponents(p+u,S+v,x+w,B+R).normalize(),o[2].setComponents(p+f,S+y,x+C,B+N).normalize(),o[3].setComponents(p-f,S-y,x-C,B-N).normalize(),s)o[4].setComponents(h,g,_,L).normalize(),o[5].setComponents(p-h,S-g,x-_,B-L).normalize();else if(o[4].setComponents(p-h,S-g,x-_,B-L).normalize(),t===Hi)o[5].setComponents(p+h,S+g,x+_,B+L).normalize();else if(t===Eo)o[5].setComponents(h,g,_,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);const t=jv.distanceTo(e.center);return Ms.radius=.7071067811865476+t,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if($l.x=o.normal.x>0?e.max.x:e.min.x,$l.y=o.normal.y>0?e.max.y:e.min.y,$l.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint($l)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class S0 extends Is{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gc=new Q,xc=new Q,fg=new Qt,ho=new Jf,Yl=new Ro,Id=new Q,hg=new Q;class Xv extends Rn{constructor(e=new Xn,t=new S0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)gc.fromBufferAttribute(t,o-1),xc.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=gc.distanceTo(xc);e.setAttribute("lineDistance",new ni(s,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Yl.copy(s.boundingSphere),Yl.applyMatrix4(o),Yl.radius+=l,e.ray.intersectsSphere(Yl)===!1)return;fg.copy(o).invert(),ho.copy(e.ray).applyMatrix4(fg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const S=Math.max(0,u.start),w=Math.min(v.count,u.start+u.count);for(let C=S,_=w-1;C<_;C+=p){const x=v.getX(C),R=v.getX(C+1),N=Kl(this,e,ho,h,x,R,C);N&&t.push(N)}if(this.isLineLoop){const C=v.getX(w-1),_=v.getX(S),x=Kl(this,e,ho,h,C,_,w-1);x&&t.push(x)}}else{const S=Math.max(0,u.start),w=Math.min(g.count,u.start+u.count);for(let C=S,_=w-1;C<_;C+=p){const x=Kl(this,e,ho,h,C,C+1,C);x&&t.push(x)}if(this.isLineLoop){const C=Kl(this,e,ho,h,w-1,S,w-1);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Kl(r,e,t,s,o,l,u){const f=r.geometry.attributes.position;if(gc.fromBufferAttribute(f,o),xc.fromBufferAttribute(f,l),t.distanceSqToSegment(gc,xc,Id,hg)>s)return;Id.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Id);if(!(p<e.near||p>e.far))return{distance:p,point:hg.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}class qv extends Xv{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class M0 extends Is{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pg=new Qt,Ff=new Jf,Zl=new Ro,Ql=new Q;class $v extends Rn{constructor(e=new Xn,t=new M0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Zl.copy(s.boundingSphere),Zl.applyMatrix4(o),Zl.radius+=l,e.ray.intersectsSphere(Zl)===!1)return;pg.copy(o).invert(),Ff.copy(e.ray).applyMatrix4(pg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=s.index,y=s.attributes.position;if(p!==null){const g=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let w=g,C=S;w<C;w++){const _=p.getX(w);Ql.fromBufferAttribute(y,_),mg(Ql,_,h,o,e,t,this)}}else{const g=Math.max(0,u.start),S=Math.min(y.count,u.start+u.count);for(let w=g,C=S;w<C;w++)Ql.fromBufferAttribute(y,w),mg(Ql,w,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function mg(r,e,t,s,o,l,u){const f=Ff.distanceSqToPoint(r);if(f<t){const h=new Q;Ff.closestPointToPoint(r,h),h.applyMatrix4(s);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class E0 extends In{constructor(e=[],t=Ns,s,o,l,u,f,h,p,v){super(e,t,s,o,l,u,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ea extends In{constructor(e,t,s=Xi,o,l,u,f=Sn,h=Sn,p,v=xr,y=1){if(v!==xr&&v!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:y};super(g,o,l,u,f,h,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yv extends Ea{constructor(e,t=Xi,s=Ns,o,l,u=Sn,f=Sn,h,p=xr){const v={width:e,height:e,depth:1},y=[v,v,v,v,v,v];super(e,e,t,s,o,l,u,f,h,p),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class T0 extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Po extends Xn{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],y=[];let g=0,S=0;w("z","y","x",-1,-1,s,t,e,u,l,0),w("z","y","x",1,-1,s,t,-e,u,l,1),w("x","z","y",1,1,e,s,t,o,u,2),w("x","z","y",1,-1,e,s,-t,o,u,3),w("x","y","z",1,-1,e,t,s,o,l,4),w("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new ni(p,3)),this.setAttribute("normal",new ni(v,3)),this.setAttribute("uv",new ni(y,2));function w(C,_,x,R,N,L,B,D,O,E,U){const X=L/O,I=B/E,G=L/2,se=B/2,le=D/2,H=O+1,Z=E+1;let q=0,Y=0;const ue=new Q;for(let de=0;de<Z;de++){const k=de*I-se;for(let ee=0;ee<H;ee++){const Fe=ee*X-G;ue[C]=Fe*R,ue[_]=k*N,ue[x]=le,p.push(ue.x,ue.y,ue.z),ue[C]=0,ue[_]=0,ue[x]=D>0?1:-1,v.push(ue.x,ue.y,ue.z),y.push(ee/O),y.push(1-de/E),q+=1}}for(let de=0;de<E;de++)for(let k=0;k<O;k++){const ee=g+k+H*de,Fe=g+k+H*(de+1),Ve=g+(k+1)+H*(de+1),De=g+(k+1)+H*de;h.push(ee,Fe,De),h.push(Fe,Ve,De),Y+=6}f.addGroup(S,Y,U),S+=Y,g+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Kv{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let s,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)s=this.getPoint(u/e),l+=s.distanceTo(o),t.push(l),o=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const s=this.getLengths();let o=0;const l=s.length;let u;t?u=t:u=e*s[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=s[o]-u,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,s[o]===u)return o/(l-1);const v=s[o],g=s[o+1]-v,S=(u-v)/g;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),h=t||(u.isVector2?new Ct:new Q);return h.copy(f).sub(u).normalize(),h}getTangentAt(e,t){const s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t=!1){const s=new Q,o=[],l=[],u=[],f=new Q,h=new Qt;for(let S=0;S<=e;S++){const w=S/e;o[S]=this.getTangentAt(w,new Q)}l[0]=new Q,u[0]=new Q;let p=Number.MAX_VALUE;const v=Math.abs(o[0].x),y=Math.abs(o[0].y),g=Math.abs(o[0].z);v<=p&&(p=v,s.set(1,0,0)),y<=p&&(p=y,s.set(0,1,0)),g<=p&&s.set(0,0,1),f.crossVectors(o[0],s).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),u[S]=u[S-1].clone(),f.crossVectors(o[S-1],o[S]),f.length()>Number.EPSILON){f.normalize();const w=Math.acos(yt(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(f,w))}u[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(yt(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let w=1;w<=e;w++)l[w].applyMatrix4(h.makeRotationAxis(o[w],S*w)),u[w].crossVectors(o[w],l[w])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Zv extends Kv{constructor(e=0,t=0,s=1,o=1,l=0,u=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=s,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Ct){const s=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),y=Math.sin(this.aRotation),g=h-this.aX,S=p-this.aY;h=g*v-S*y+this.aX,p=g*y+S*v+this.aY}return s.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ec extends Xn{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(s),h=Math.floor(o),p=f+1,v=h+1,y=e/f,g=t/h,S=[],w=[],C=[],_=[];for(let x=0;x<v;x++){const R=x*g-u;for(let N=0;N<p;N++){const L=N*y-l;w.push(L,-R,0),C.push(0,0,1),_.push(N/f),_.push(1-x/h)}}for(let x=0;x<h;x++)for(let R=0;R<f;R++){const N=R+p*x,L=R+p*(x+1),B=R+1+p*(x+1),D=R+1+p*x;S.push(N,L,D),S.push(L,B,D)}this.setIndex(S),this.setAttribute("position",new ni(w,3)),this.setAttribute("normal",new ni(C,3)),this.setAttribute("uv",new ni(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.width,e.height,e.widthSegments,e.heightSegments)}}class th extends Xn{constructor(e=1,t=32,s=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const h=Math.min(u+f,Math.PI);let p=0;const v=[],y=new Q,g=new Q,S=[],w=[],C=[],_=[];for(let x=0;x<=s;x++){const R=[],N=x/s;let L=0;x===0&&u===0?L=.5/t:x===s&&h===Math.PI&&(L=-.5/t);for(let B=0;B<=t;B++){const D=B/t;y.x=-e*Math.cos(o+D*l)*Math.sin(u+N*f),y.y=e*Math.cos(u+N*f),y.z=e*Math.sin(o+D*l)*Math.sin(u+N*f),w.push(y.x,y.y,y.z),g.copy(y).normalize(),C.push(g.x,g.y,g.z),_.push(D+L,1-N),R.push(p++)}v.push(R)}for(let x=0;x<s;x++)for(let R=0;R<t;R++){const N=v[x][R+1],L=v[x][R],B=v[x+1][R],D=v[x+1][R+1];(x!==0||u>0)&&S.push(N,L,D),(x!==s-1||h<Math.PI)&&S.push(L,B,D)}this.setIndex(S),this.setAttribute("position",new ni(w,3)),this.setAttribute("normal",new ni(C,3)),this.setAttribute("uv",new ni(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new th(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ta(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];if(gg(o))o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if(gg(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][s]=l}else e[t][s]=o.slice();else e[t][s]=o}}return e}function Dn(r){const e={};for(let t=0;t<r.length;t++){const s=Ta(r[t]);for(const o in s)e[o]=s[o]}return e}function gg(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Qv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function w0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const Jv={clone:Ta,merge:Dn};var ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ey,this.fragmentShader=ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ta(e.uniforms),this.uniformsGroups=Qv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class ny extends $i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class iy extends Is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Df,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ry extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sy extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class b0 extends Rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ud=new Qt,xg=new Q,_g=new Q;class ay{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eh,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;xg.setFromMatrixPosition(e.matrixWorld),t.position.copy(xg),_g.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_g),t.updateMatrixWorld(),Ud.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ud,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Eo||t.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ud)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jl=new Q,ec=new ba,ki=new Q;let A0=class extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jl,ec,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,ec,ki.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Jl,ec,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,ec,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Xr=new Q,vg=new Ct,yg=new Ct;class ei extends A0{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uf*2*Math.atan(Math.tan(ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,vg,yg),t.subVectors(yg,vg)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ud*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*s/p,o*=u.width/h,s*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class oy extends ay{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0}}class Sg extends b0{constructor(e,t,s=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=o,this.shadow=new oy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class C0 extends A0{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ly extends b0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ga=-90,xa=1;class cy extends Rn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ei(ga,xa,e,t);o.layers=this.layers,this.add(o);const l=new ei(ga,xa,e,t);l.layers=this.layers,this.add(l);const u=new ei(ga,xa,e,t);u.layers=this.layers,this.add(u);const f=new ei(ga,xa,e,t);f.layers=this.layers,this.add(f);const h=new ei(ga,xa,e,t);h.layers=this.layers,this.add(h);const p=new ei(ga,xa,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Eo)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,v]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(s,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(y,g,S),e.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class uy extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const gh=class gh{constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=o,this}};gh.prototype.isMatrix2=!0;let Mg=gh;function Eg(r,e,t,s){const o=dy(s);switch(t){case d0:return r*e;case h0:return r*e/o.components*o.byteLength;case qf:return r*e/o.components*o.byteLength;case Ls:return r*e*2/o.components*o.byteLength;case $f:return r*e*2/o.components*o.byteLength;case f0:return r*e*3/o.components*o.byteLength;case Ri:return r*e*4/o.components*o.byteLength;case Yf:return r*e*4/o.components*o.byteLength;case ac:case oc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case lc:case cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rf:case af:return Math.max(r,16)*Math.max(e,8)/4;case nf:case sf:return Math.max(r,8)*Math.max(e,8)/2;case of:case lf:case uf:case df:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case cf:case dc:case ff:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case mf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case gf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case _f:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case vf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case yf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Sf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Tf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case wf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case bf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Af:case Cf:case Rf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Pf:case Nf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case fc:case Lf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dy(r){switch(r){case ti:case o0:return{byteLength:1,components:1};case So:case l0:case gr:return{byteLength:2,components:1};case jf:case Xf:return{byteLength:2,components:4};case Xi:case Wf:case Gi:return{byteLength:4,components:1};case c0:case u0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hf}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function R0(){let r=null,e=!1,t=null,s=null;function o(l,u){t(l,u),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function fy(r){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,y=p.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,p,v),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:y}}function s(f,h,p){const v=h.array,y=h.updateRanges;if(r.bindBuffer(p,f),y.length===0)r.bufferSubData(p,0,v);else{y.sort((S,w)=>S.start-w.start);let g=0;for(let S=1;S<y.length;S++){const w=y[g],C=y[S];C.start<=w.start+w.count+1?w.count=Math.max(w.count,C.start+C.count-w.start):(++g,y[g]=C)}y.length=g+1;for(let S=0,w=y.length;S<w;S++){const C=y[S];r.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,py=`#ifdef USE_ALPHAHASH
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
#endif`,my=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vy=`#ifdef USE_AOMAP
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
#endif`,yy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sy=`#ifdef USE_BATCHING
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
#endif`,My=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,by=`#ifdef USE_IRIDESCENCE
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
#endif`,Ay=`#ifdef USE_BUMPMAP
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
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Fy=`#define PI 3.141592653589793
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
} // validated`,Oy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ky=`vec3 transformedNormal = objectNormal;
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
#endif`,By=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jy=`#ifdef USE_ENVMAP
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
#endif`,Xy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
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
#endif`,$y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
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
#endif`,Ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eS=`#ifdef USE_GRADIENTMAP
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
}`,tS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sS=`#ifdef USE_ENVMAP
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
#endif`,aS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uS=`PhysicalMaterial material;
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
#endif`,dS=`uniform sampler2D dfgLUT;
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
}`,fS=`
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
#endif`,hS=`#if defined( RE_IndirectDiffuse )
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
#endif`,pS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,gS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_S=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ES=`#if defined( USE_POINTS_UV )
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
#endif`,TS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RS=`#ifdef USE_MORPHTARGETS
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
#endif`,PS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,US=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FS=`#ifdef USE_NORMALMAP
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
#endif`,OS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$S=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QS=`float getShadowMask() {
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
}`,JS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eM=`#ifdef USE_SKINNING
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
#endif`,tM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nM=`#ifdef USE_SKINNING
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
#endif`,iM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oM=`#ifdef USE_TRANSMISSION
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
#endif`,lM=`#ifdef USE_TRANSMISSION
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
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pM=`uniform sampler2D t2D;
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
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`#include <common>
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
}`,yM=`#if DEPTH_PACKING == 3200
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
}`,SM=`#define DISTANCE
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
}`,MM=`#define DISTANCE
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
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`uniform float scale;
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
}`,bM=`uniform vec3 diffuse;
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
}`,AM=`#include <common>
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
}`,CM=`uniform vec3 diffuse;
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
}`,RM=`#define LAMBERT
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
}`,PM=`#define LAMBERT
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
}`,NM=`#define MATCAP
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
}`,LM=`#define MATCAP
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
}`,DM=`#define NORMAL
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
}`,IM=`#define NORMAL
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
}`,UM=`#define PHONG
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
}`,FM=`#define PHONG
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
}`,OM=`#define STANDARD
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
}`,kM=`#define STANDARD
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
}`,BM=`#define TOON
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
}`,zM=`#define TOON
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
}`,VM=`uniform float size;
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
}`,GM=`uniform vec3 diffuse;
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
}`,HM=`#include <common>
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
}`,WM=`uniform vec3 color;
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
}`,jM=`uniform float rotation;
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
}`,XM=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:hy,alphahash_pars_fragment:py,alphamap_fragment:my,alphamap_pars_fragment:gy,alphatest_fragment:xy,alphatest_pars_fragment:_y,aomap_fragment:vy,aomap_pars_fragment:yy,batching_pars_vertex:Sy,batching_vertex:My,begin_vertex:Ey,beginnormal_vertex:Ty,bsdfs:wy,iridescence_fragment:by,bumpmap_pars_fragment:Ay,clipping_planes_fragment:Cy,clipping_planes_pars_fragment:Ry,clipping_planes_pars_vertex:Py,clipping_planes_vertex:Ny,color_fragment:Ly,color_pars_fragment:Dy,color_pars_vertex:Iy,color_vertex:Uy,common:Fy,cube_uv_reflection_fragment:Oy,defaultnormal_vertex:ky,displacementmap_pars_vertex:By,displacementmap_vertex:zy,emissivemap_fragment:Vy,emissivemap_pars_fragment:Gy,colorspace_fragment:Hy,colorspace_pars_fragment:Wy,envmap_fragment:jy,envmap_common_pars_fragment:Xy,envmap_pars_fragment:qy,envmap_pars_vertex:$y,envmap_physical_pars_fragment:sS,envmap_vertex:Yy,fog_vertex:Ky,fog_pars_vertex:Zy,fog_fragment:Qy,fog_pars_fragment:Jy,gradientmap_pars_fragment:eS,lightmap_pars_fragment:tS,lights_lambert_fragment:nS,lights_lambert_pars_fragment:iS,lights_pars_begin:rS,lights_toon_fragment:aS,lights_toon_pars_fragment:oS,lights_phong_fragment:lS,lights_phong_pars_fragment:cS,lights_physical_fragment:uS,lights_physical_pars_fragment:dS,lights_fragment_begin:fS,lights_fragment_maps:hS,lights_fragment_end:pS,lightprobes_pars_fragment:mS,logdepthbuf_fragment:gS,logdepthbuf_pars_fragment:xS,logdepthbuf_pars_vertex:_S,logdepthbuf_vertex:vS,map_fragment:yS,map_pars_fragment:SS,map_particle_fragment:MS,map_particle_pars_fragment:ES,metalnessmap_fragment:TS,metalnessmap_pars_fragment:wS,morphinstance_vertex:bS,morphcolor_vertex:AS,morphnormal_vertex:CS,morphtarget_pars_vertex:RS,morphtarget_vertex:PS,normal_fragment_begin:NS,normal_fragment_maps:LS,normal_pars_fragment:DS,normal_pars_vertex:IS,normal_vertex:US,normalmap_pars_fragment:FS,clearcoat_normal_fragment_begin:OS,clearcoat_normal_fragment_maps:kS,clearcoat_pars_fragment:BS,iridescence_pars_fragment:zS,opaque_fragment:VS,packing:GS,premultiplied_alpha_fragment:HS,project_vertex:WS,dithering_fragment:jS,dithering_pars_fragment:XS,roughnessmap_fragment:qS,roughnessmap_pars_fragment:$S,shadowmap_pars_fragment:YS,shadowmap_pars_vertex:KS,shadowmap_vertex:ZS,shadowmask_pars_fragment:QS,skinbase_vertex:JS,skinning_pars_vertex:eM,skinning_vertex:tM,skinnormal_vertex:nM,specularmap_fragment:iM,specularmap_pars_fragment:rM,tonemapping_fragment:sM,tonemapping_pars_fragment:aM,transmission_fragment:oM,transmission_pars_fragment:lM,uv_pars_fragment:cM,uv_pars_vertex:uM,uv_vertex:dM,worldpos_vertex:fM,background_vert:hM,background_frag:pM,backgroundCube_vert:mM,backgroundCube_frag:gM,cube_vert:xM,cube_frag:_M,depth_vert:vM,depth_frag:yM,distance_vert:SM,distance_frag:MM,equirect_vert:EM,equirect_frag:TM,linedashed_vert:wM,linedashed_frag:bM,meshbasic_vert:AM,meshbasic_frag:CM,meshlambert_vert:RM,meshlambert_frag:PM,meshmatcap_vert:NM,meshmatcap_frag:LM,meshnormal_vert:DM,meshnormal_frag:IM,meshphong_vert:UM,meshphong_frag:FM,meshphysical_vert:OM,meshphysical_frag:kM,meshtoon_vert:BM,meshtoon_frag:zM,points_vert:VM,points_frag:GM,shadow_vert:HM,shadow_frag:WM,sprite_vert:jM,sprite_frag:XM},ke={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Vi={basic:{uniforms:Dn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Dn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Dn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Dn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Dn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new At(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Dn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Dn([ke.points,ke.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Dn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Dn([ke.common,ke.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Dn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Dn([ke.sprite,ke.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Dn([ke.common,ke.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Dn([ke.lights,ke.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Vi.physical={uniforms:Dn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const tc={r:0,b:0,g:0},qM=new Qt,P0=new ft;P0.set(-1,0,0,0,1,0,0,0,1);function $M(r,e,t,s,o,l){const u=new At(0);let f=o===!0?0:1,h,p,v=null,y=0,g=null;function S(R){let N=R.isScene===!0?R.background:null;if(N&&N.isTexture){const L=R.backgroundBlurriness>0;N=e.get(N,L)}return N}function w(R){let N=!1;const L=S(R);L===null?_(u,f):L&&L.isColor&&(_(L,1),N=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?t.buffers.color.setClear(0,0,0,1,l):B==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(R,N){const L=S(N);L&&(L.isCubeTexture||L.mapping===Mc)?(p===void 0&&(p=new qi(new Po(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Ta(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=L,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(qM.makeRotationFromEuler(N.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(P0),p.material.toneMapped=St.getTransfer(L.colorSpace)!==Ot,(v!==L||y!==L.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=L,y=L.version,g=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new qi(new Ec(2,2),new $i({name:"BackgroundMaterial",uniforms:Ta(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.toneMapped=St.getTransfer(L.colorSpace)!==Ot,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||y!==L.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,v=L,y=L.version,g=r.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function _(R,N){R.getRGB(tc,w0(r)),t.buffers.color.setClear(tc.r,tc.g,tc.b,N,l)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,N=1){u.set(R),f=N,_(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,_(u,f)},render:w,addToRenderList:C,dispose:x}}function YM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=g(null);let l=o,u=!1;function f(I,G,se,le,H){let Z=!1;const q=y(I,le,se,G);l!==q&&(l=q,p(l.object)),Z=S(I,le,se,H),Z&&w(I,le,se,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,L(I,G,se,le),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function h(){return r.createVertexArray()}function p(I){return r.bindVertexArray(I)}function v(I){return r.deleteVertexArray(I)}function y(I,G,se,le){const H=le.wireframe===!0;let Z=s[G.id];Z===void 0&&(Z={},s[G.id]=Z);const q=I.isInstancedMesh===!0?I.id:0;let Y=Z[q];Y===void 0&&(Y={},Z[q]=Y);let ue=Y[se.id];ue===void 0&&(ue={},Y[se.id]=ue);let de=ue[H];return de===void 0&&(de=g(h()),ue[H]=de),de}function g(I){const G=[],se=[],le=[];for(let H=0;H<t;H++)G[H]=0,se[H]=0,le[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:se,attributeDivisors:le,object:I,attributes:{},index:null}}function S(I,G,se,le){const H=l.attributes,Z=G.attributes;let q=0;const Y=se.getAttributes();for(const ue in Y)if(Y[ue].location>=0){const k=H[ue];let ee=Z[ue];if(ee===void 0&&(ue==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),ue==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),k===void 0||k.attribute!==ee||ee&&k.data!==ee.data)return!0;q++}return l.attributesNum!==q||l.index!==le}function w(I,G,se,le){const H={},Z=G.attributes;let q=0;const Y=se.getAttributes();for(const ue in Y)if(Y[ue].location>=0){let k=Z[ue];k===void 0&&(ue==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),ue==="instanceColor"&&I.instanceColor&&(k=I.instanceColor));const ee={};ee.attribute=k,k&&k.data&&(ee.data=k.data),H[ue]=ee,q++}l.attributes=H,l.attributesNum=q,l.index=le}function C(){const I=l.newAttributes;for(let G=0,se=I.length;G<se;G++)I[G]=0}function _(I){x(I,0)}function x(I,G){const se=l.newAttributes,le=l.enabledAttributes,H=l.attributeDivisors;se[I]=1,le[I]===0&&(r.enableVertexAttribArray(I),le[I]=1),H[I]!==G&&(r.vertexAttribDivisor(I,G),H[I]=G)}function R(){const I=l.newAttributes,G=l.enabledAttributes;for(let se=0,le=G.length;se<le;se++)G[se]!==I[se]&&(r.disableVertexAttribArray(se),G[se]=0)}function N(I,G,se,le,H,Z,q){q===!0?r.vertexAttribIPointer(I,G,se,H,Z):r.vertexAttribPointer(I,G,se,le,H,Z)}function L(I,G,se,le){C();const H=le.attributes,Z=se.getAttributes(),q=G.defaultAttributeValues;for(const Y in Z){const ue=Z[Y];if(ue.location>=0){let de=H[Y];if(de===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(de=I.instanceColor)),de!==void 0){const k=de.normalized,ee=de.itemSize,Fe=e.get(de);if(Fe===void 0)continue;const Ve=Fe.buffer,De=Fe.type,ae=Fe.bytesPerElement,ve=De===r.INT||De===r.UNSIGNED_INT||de.gpuType===Wf;if(de.isInterleavedBufferAttribute){const pe=de.data,Ue=pe.stride,Ke=de.offset;if(pe.isInstancedInterleavedBuffer){for(let et=0;et<ue.locationSize;et++)x(ue.location+et,pe.meshPerAttribute);I.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let et=0;et<ue.locationSize;et++)_(ue.location+et);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let et=0;et<ue.locationSize;et++)N(ue.location+et,ee/ue.locationSize,De,k,Ue*ae,(Ke+ee/ue.locationSize*et)*ae,ve)}else{if(de.isInstancedBufferAttribute){for(let pe=0;pe<ue.locationSize;pe++)x(ue.location+pe,de.meshPerAttribute);I.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let pe=0;pe<ue.locationSize;pe++)_(ue.location+pe);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let pe=0;pe<ue.locationSize;pe++)N(ue.location+pe,ee/ue.locationSize,De,k,ee*ae,ee/ue.locationSize*pe*ae,ve)}}else if(q!==void 0){const k=q[Y];if(k!==void 0)switch(k.length){case 2:r.vertexAttrib2fv(ue.location,k);break;case 3:r.vertexAttrib3fv(ue.location,k);break;case 4:r.vertexAttrib4fv(ue.location,k);break;default:r.vertexAttrib1fv(ue.location,k)}}}}R()}function B(){U();for(const I in s){const G=s[I];for(const se in G){const le=G[se];for(const H in le){const Z=le[H];for(const q in Z)v(Z[q].object),delete Z[q];delete le[H]}}delete s[I]}}function D(I){if(s[I.id]===void 0)return;const G=s[I.id];for(const se in G){const le=G[se];for(const H in le){const Z=le[H];for(const q in Z)v(Z[q].object),delete Z[q];delete le[H]}}delete s[I.id]}function O(I){for(const G in s){const se=s[G];for(const le in se){const H=se[le];if(H[I.id]===void 0)continue;const Z=H[I.id];for(const q in Z)v(Z[q].object),delete Z[q];delete H[I.id]}}}function E(I){for(const G in s){const se=s[G],le=I.isInstancedMesh===!0?I.id:0,H=se[le];if(H!==void 0){for(const Z in H){const q=H[Z];for(const Y in q)v(q[Y].object),delete q[Y];delete H[Z]}delete se[le],Object.keys(se).length===0&&delete s[G]}}}function U(){X(),u=!0,l!==o&&(l=o,p(l.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:U,resetDefaultState:X,dispose:B,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:_,disableUnusedAttributes:R}}function KM(r,e,t){let s;function o(h){s=h}function l(h,p){r.drawArrays(s,h,p),t.update(p,s,1)}function u(h,p,v){v!==0&&(r.drawArraysInstanced(s,h,p,v),t.update(p,s,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,p,0,v);let g=0;for(let S=0;S<v;S++)g+=p[S];t.update(g,s,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function ZM(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Ri&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const E=O===gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ti&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Gi&&!E)}function h(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(rt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const y=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),D=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:w,maxTextureSize:C,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:R,maxVaryings:N,maxFragmentUniforms:L,maxSamples:B,samples:D}}function QM(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new Es,f=new ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const S=y.length!==0||g||s!==0||o;return o=g,s=y.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,g){t=v(y,g,0)},this.setState=function(y,g,S){const w=y.clippingPlanes,C=y.clipIntersection,_=y.clipShadows,x=r.get(y);if(!o||w===null||w.length===0||l&&!_)l?v(null):p();else{const R=l?0:s,N=R*4;let L=x.clippingState||null;h.value=L,L=v(w,g,N,S);for(let B=0;B!==N;++B)L[B]=t[B];x.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(y,g,S,w){const C=y!==null?y.length:0;let _=null;if(C!==0){if(_=h.value,w!==!0||_===null){const x=S+C*4,R=g.matrixWorldInverse;f.getNormalMatrix(R),(_===null||_.length<x)&&(_=new Float32Array(x));for(let N=0,L=S;N!==C;++N,L+=4)u.copy(y[N]).applyMatrix4(R,f),u.normal.toArray(_,L),_[L+3]=u.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,_}}const Kr=4,Tg=[.125,.215,.35,.446,.526,.582],ws=20,JM=256,po=new C0,wg=new At;let Fd=null,Od=0,kd=0,Bd=!1;const e1=new Q;class bg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){const{size:u=256,position:f=e1}=l;Fd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fd,Od,kd),this._renderer.xr.enabled=Bd,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:gr,format:Ri,colorSpace:hc,depthBuffer:!1},o=Ag(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ag(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=t1(l)),this._blurMaterial=i1(l,e,t),this._ggxMaterial=n1(l,e,t)}return o}_compileMaterial(e){const t=new qi(new Xn,e);this._renderer.compile(t,po)}_sceneToCubeUV(e,t,s,o,l){const h=new ei(90,1,t,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,S=y.toneMapping;y.getClearColor(wg),y.toneMapping=Wi,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qi(new Po,new y0({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,_=C.material;let x=!1;const R=e.background;R?R.isColor&&(_.color.copy(R),e.background=null,x=!0):(_.color.copy(wg),x=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(h.up.set(0,p[N],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[N],l.y,l.z)):L===1?(h.up.set(0,0,p[N]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[N],l.z)):(h.up.set(0,p[N],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[N]));const B=this._cubeSize;_a(o,L*B,N>2?B:0,B,B),y.setRenderTarget(o),x&&y.render(C,h),y.render(e,h)}y.toneMapping=S,y.autoClear=g,e.background=R}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===Ns||e.mapping===Ma;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;_a(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(u,po)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const h=u.uniforms,p=s/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),y=Math.sqrt(p*p-v*v),g=0+p*1.25,S=y*g,{_lodMax:w}=this,C=this._sizeLods[s],_=3*C*(s>w-Kr?s-w+Kr:0),x=4*(this._cubeSize-C);h.envMap.value=e.texture,h.roughness.value=S,h.mipInt.value=w-t,_a(l,_,x,3*C,2*C),o.setRenderTarget(l),o.render(f,po),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=w-s,_a(e,_,x,3*C,2*C),o.setRenderTarget(e),o.render(f,po)}_blur(e,t,s,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,o,"latitudinal",l),this._halfBlur(u,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&bt("blur direction must be either latitudinal or longitudinal!");const v=3,y=this._lodMeshes[o];y.material=p;const g=p.uniforms,S=this._sizeLods[s]-1,w=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ws-1),C=l/w,_=isFinite(l)?1+Math.floor(v*C):ws;_>ws&&rt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ws}`);const x=[];let R=0;for(let O=0;O<ws;++O){const E=O/C,U=Math.exp(-E*E/2);x.push(U),O===0?R+=U:O<_&&(R+=2*U)}for(let O=0;O<x.length;O++)x[O]=x[O]/R;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=x,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:N}=this;g.dTheta.value=w,g.mipInt.value=N-s;const L=this._sizeLods[o],B=3*L*(o>N-Kr?o-N+Kr:0),D=4*(this._cubeSize-L);_a(t,B,D,3*L,2*L),h.setRenderTarget(t),h.render(y,po)}}function t1(r){const e=[],t=[],s=[];let o=r;const l=r-Kr+1+Tg.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>r-Kr?h=Tg[u-r+Kr-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,y=1+p,g=[v,v,y,v,y,y,v,v,y,y,v,y],S=6,w=6,C=3,_=2,x=1,R=new Float32Array(C*w*S),N=new Float32Array(_*w*S),L=new Float32Array(x*w*S);for(let D=0;D<S;D++){const O=D%3*2/3-1,E=D>2?0:-1,U=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];R.set(U,C*w*D),N.set(g,_*w*D);const X=[D,D,D,D,D,D];L.set(X,x*w*D)}const B=new Xn;B.setAttribute("position",new Ni(R,C)),B.setAttribute("uv",new Ni(N,_)),B.setAttribute("faceIndex",new Ni(L,x)),s.push(new qi(B,null)),o>Kr&&o--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function Ag(r,e,t){const s=new ji(r,e,t);return s.texture.mapping=Mc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function _a(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function n1(r,e,t){return new $i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:JM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function i1(r,e,t){const s=new Float32Array(ws),o=new Q(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Cg(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Rg(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}class N0 extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new E0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Po(5,5,5),l=new $i({name:"CubemapFromEquirect",uniforms:Ta(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:pr});l.uniforms.tEquirect.value=t;const u=new qi(o,l),f=t.minFilter;return t.minFilter===As&&(t.minFilter=Cn),new cy(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}function r1(r){let e=new WeakMap,t=new WeakMap,s=null;function o(g,S=!1){return g==null?null:S?u(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===od||S===ld)if(e.has(g)){const w=e.get(g).texture;return f(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const C=new N0(w.height);return C.fromEquirectangularTexture(r,g),e.set(g,C),g.addEventListener("dispose",p),f(C.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,w=S===od||S===ld,C=S===Ns||S===Ma;if(w||C){let _=t.get(g);const x=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new bg(r)),_=w?s.fromEquirectangular(g,_):s.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,t.set(g,_),_.texture;if(_!==void 0)return _.texture;{const R=g.image;return w&&R&&R.height>0||C&&R&&h(R)?(s===null&&(s=new bg(r)),_=w?s.fromEquirectangular(g):s.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,t.set(g,_),g.addEventListener("dispose",v),_.texture):null}}}return g}function f(g,S){return S===od?g.mapping=Ns:S===ld&&(g.mapping=Ma),g}function h(g){let S=0;const w=6;for(let C=0;C<w;C++)g[C]!==void 0&&S++;return S===w}function p(g){const S=g.target;S.removeEventListener("dispose",p);const w=e.get(S);w!==void 0&&(e.delete(S),w.dispose())}function v(g){const S=g.target;S.removeEventListener("dispose",v);const w=t.get(S);w!==void 0&&(t.delete(S),w.dispose())}function y(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:y}}function s1(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&If("WebGLRenderer: "+s+" extension not supported."),o}}}function a1(r,e,t,s){const o={},l=new WeakMap;function u(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",u),delete o[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(y,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function h(y){const g=y.attributes;for(const S in g)e.update(g[S],r.ARRAY_BUFFER)}function p(y){const g=[],S=y.index,w=y.attributes.position;let C=0;if(w===void 0)return;if(S!==null){const R=S.array;C=S.version;for(let N=0,L=R.length;N<L;N+=3){const B=R[N+0],D=R[N+1],O=R[N+2];g.push(B,D,D,O,O,B)}}else{const R=w.array;C=w.version;for(let N=0,L=R.length/3-1;N<L;N+=3){const B=N+0,D=N+1,O=N+2;g.push(B,D,D,O,O,B)}}const _=new(w.count>=65535?v0:_0)(g,1);_.version=C;const x=l.get(y);x&&e.remove(x),l.set(y,_)}function v(y){const g=l.get(y);if(g){const S=y.index;S!==null&&g.version<S.version&&p(y)}else p(y);return l.get(y)}return{get:f,update:h,getWireframeAttribute:v}}function o1(r,e,t){let s;function o(y){s=y}let l,u;function f(y){l=y.type,u=y.bytesPerElement}function h(y,g){r.drawElements(s,g,l,y*u),t.update(g,s,1)}function p(y,g,S){S!==0&&(r.drawElementsInstanced(s,g,l,y*u,S),t.update(g,s,S))}function v(y,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,l,y,0,S);let C=0;for(let _=0;_<S;_++)C+=g[_];t.update(C,s,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function l1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:bt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function c1(r,e,t){const s=new WeakMap,o=new nn;function l(u,f,h){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=v!==void 0?v.length:0;let g=s.get(f);if(g===void 0||g.count!==y){let X=function(){E.dispose(),s.delete(f),f.removeEventListener("dispose",X)};var S=X;g!==void 0&&g.texture.dispose();const w=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let L=0;w===!0&&(L=1),C===!0&&(L=2),_===!0&&(L=3);let B=f.attributes.position.count*L,D=1;B>e.maxTextureSize&&(D=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const O=new Float32Array(B*D*4*y),E=new m0(O,B,D,y);E.type=Gi,E.needsUpdate=!0;const U=L*4;for(let I=0;I<y;I++){const G=x[I],se=R[I],le=N[I],H=B*D*4*I;for(let Z=0;Z<G.count;Z++){const q=Z*U;w===!0&&(o.fromBufferAttribute(G,Z),O[H+q+0]=o.x,O[H+q+1]=o.y,O[H+q+2]=o.z,O[H+q+3]=0),C===!0&&(o.fromBufferAttribute(se,Z),O[H+q+4]=o.x,O[H+q+5]=o.y,O[H+q+6]=o.z,O[H+q+7]=0),_===!0&&(o.fromBufferAttribute(le,Z),O[H+q+8]=o.x,O[H+q+9]=o.y,O[H+q+10]=o.z,O[H+q+11]=le.itemSize===4?o.w:1)}}g={count:y,texture:E,size:new Ct(B,D)},s.set(f,g),f.addEventListener("dispose",X)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let w=0;for(let _=0;_<p.length;_++)w+=p[_];const C=f.morphTargetsRelative?1:1-w;h.getUniforms().setValue(r,"morphTargetBaseInfluence",C),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:l}}function u1(r,e,t,s,o){let l=new WeakMap;function u(p){const v=o.render.frame,y=p.geometry,g=e.get(p,y);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==v&&(S.update(),l.set(S,v))}return g}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),s.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const d1={[Jg]:"LINEAR_TONE_MAPPING",[e0]:"REINHARD_TONE_MAPPING",[t0]:"CINEON_TONE_MAPPING",[n0]:"ACES_FILMIC_TONE_MAPPING",[r0]:"AGX_TONE_MAPPING",[s0]:"NEUTRAL_TONE_MAPPING",[i0]:"CUSTOM_TONE_MAPPING"};function f1(r,e,t,s,o){const l=new ji(e,t,{type:r,depthBuffer:s,stencilBuffer:o,depthTexture:s?new Ea(e,t):void 0}),u=new ji(e,t,{type:gr,depthBuffer:!1,stencilBuffer:!1}),f=new Xn;f.setAttribute("position",new ni([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ni([0,2,0,0,2,0],2));const h=new ny({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new qi(f,h),v=new C0(-1,1,1,-1,0,1);let y=null,g=null,S=!1,w,C=null,_=[],x=!1;this.setSize=function(R,N){l.setSize(R,N),u.setSize(R,N);for(let L=0;L<_.length;L++){const B=_[L];B.setSize&&B.setSize(R,N)}},this.setEffects=function(R){_=R,x=_.length>0&&_[0].isRenderPass===!0;const N=l.width,L=l.height;for(let B=0;B<_.length;B++){const D=_[B];D.setSize&&D.setSize(N,L)}},this.begin=function(R,N){if(S||R.toneMapping===Wi&&_.length===0)return!1;if(C=N,N!==null){const L=N.width,B=N.height;(l.width!==L||l.height!==B)&&this.setSize(L,B)}return x===!1&&R.setRenderTarget(l),w=R.toneMapping,R.toneMapping=Wi,!0},this.hasRenderPass=function(){return x},this.end=function(R,N){R.toneMapping=w,S=!0;let L=l,B=u;for(let D=0;D<_.length;D++){const O=_[D];if(O.enabled!==!1&&(O.render(R,B,L,N),O.needsSwap!==!1)){const E=L;L=B,B=E}}if(y!==R.outputColorSpace||g!==R.toneMapping){y=R.outputColorSpace,g=R.toneMapping,h.defines={},St.getTransfer(y)===Ot&&(h.defines.SRGB_TRANSFER="");const D=d1[g];D&&(h.defines[D]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,R.setRenderTarget(C),R.render(p,v),C=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const L0=new In,Of=new Ea(1,1),D0=new m0,I0=new Cv,U0=new E0,Pg=[],Ng=[],Lg=new Float32Array(16),Dg=new Float32Array(9),Ig=new Float32Array(4);function Aa(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=Pg[o];if(l===void 0&&(l=new Float32Array(o),Pg[o]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function fn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function hn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function wc(r,e){let t=Ng[e];t===void 0&&(t=new Int32Array(e),Ng[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function h1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function p1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2fv(this.addr,e),hn(t,e)}}function m1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;r.uniform3fv(this.addr,e),hn(t,e)}}function g1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4fv(this.addr,e),hn(t,e)}}function x1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(fn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,s))return;Ig.set(s),r.uniformMatrix2fv(this.addr,!1,Ig),hn(t,s)}}function _1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(fn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,s))return;Dg.set(s),r.uniformMatrix3fv(this.addr,!1,Dg),hn(t,s)}}function v1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(fn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,s))return;Lg.set(s),r.uniformMatrix4fv(this.addr,!1,Lg),hn(t,s)}}function y1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function S1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2iv(this.addr,e),hn(t,e)}}function M1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3iv(this.addr,e),hn(t,e)}}function E1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4iv(this.addr,e),hn(t,e)}}function T1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function w1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2uiv(this.addr,e),hn(t,e)}}function b1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3uiv(this.addr,e),hn(t,e)}}function A1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4uiv(this.addr,e),hn(t,e)}}function C1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(Of.compareFunction=t.isReversedDepthBuffer()?Zf:Kf,l=Of):l=L0,t.setTexture2D(e||l,o)}function R1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||I0,o)}function P1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||U0,o)}function N1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||D0,o)}function L1(r){switch(r){case 5126:return h1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return x1;case 35675:return _1;case 35676:return v1;case 5124:case 35670:return y1;case 35667:case 35671:return S1;case 35668:case 35672:return M1;case 35669:case 35673:return E1;case 5125:return T1;case 36294:return w1;case 36295:return b1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return N1}}function D1(r,e){r.uniform1fv(this.addr,e)}function I1(r,e){const t=Aa(e,this.size,2);r.uniform2fv(this.addr,t)}function U1(r,e){const t=Aa(e,this.size,3);r.uniform3fv(this.addr,t)}function F1(r,e){const t=Aa(e,this.size,4);r.uniform4fv(this.addr,t)}function O1(r,e){const t=Aa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function k1(r,e){const t=Aa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function B1(r,e){const t=Aa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function z1(r,e){r.uniform1iv(this.addr,e)}function V1(r,e){r.uniform2iv(this.addr,e)}function G1(r,e){r.uniform3iv(this.addr,e)}function H1(r,e){r.uniform4iv(this.addr,e)}function W1(r,e){r.uniform1uiv(this.addr,e)}function j1(r,e){r.uniform2uiv(this.addr,e)}function X1(r,e){r.uniform3uiv(this.addr,e)}function q1(r,e){r.uniform4uiv(this.addr,e)}function $1(r,e,t){const s=this.cache,o=e.length,l=wc(t,o);fn(s,l)||(r.uniform1iv(this.addr,l),hn(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=Of:u=L0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function Y1(r,e,t){const s=this.cache,o=e.length,l=wc(t,o);fn(s,l)||(r.uniform1iv(this.addr,l),hn(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||I0,l[u])}function K1(r,e,t){const s=this.cache,o=e.length,l=wc(t,o);fn(s,l)||(r.uniform1iv(this.addr,l),hn(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||U0,l[u])}function Z1(r,e,t){const s=this.cache,o=e.length,l=wc(t,o);fn(s,l)||(r.uniform1iv(this.addr,l),hn(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||D0,l[u])}function Q1(r){switch(r){case 5126:return D1;case 35664:return I1;case 35665:return U1;case 35666:return F1;case 35674:return O1;case 35675:return k1;case 35676:return B1;case 5124:case 35670:return z1;case 35667:case 35671:return V1;case 35668:case 35672:return G1;case 35669:case 35673:return H1;case 5125:return W1;case 36294:return j1;case 36295:return X1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Z1}}class J1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=L1(t.type)}}class eE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Q1(t.type)}}class tE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const zd=/(\w+)(\])?(\[|\.)?/g;function Ug(r,e){r.seq.push(e),r.map[e.id]=e}function nE(r,e,t){const s=r.name,o=s.length;for(zd.lastIndex=0;;){const l=zd.exec(s),u=zd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){Ug(t,p===void 0?new J1(f,r,e):new eE(f,r,e));break}else{let y=t.map[f];y===void 0&&(y=new tE(f),Ug(t,y)),t=y}}}class uc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);nE(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function Fg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const iE=37297;let rE=0;function sE(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return s.join(`
`)}const Og=new ft;function aE(r){St._getMatrix(Og,St.workingColorSpace,r);const e=`mat3( ${Og.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(r)){case pc:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function kg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+sE(r.getShaderSource(e),f)}else return l}function oE(r,e){const t=aE(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const lE={[Jg]:"Linear",[e0]:"Reinhard",[t0]:"Cineon",[n0]:"ACESFilmic",[r0]:"AgX",[s0]:"Neutral",[i0]:"Custom"};function cE(r,e){const t=lE[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nc=new Q;function uE(){St.getLuminanceCoefficients(nc);const r=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function fE(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function hE(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function vo(r){return r!==""}function Bg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pE=/^[ \t]*#include +<([\w\d./]+)>/gm;function kf(r){return r.replace(pE,gE)}const mE=new Map;function gE(r,e){let t=mt[e];if(t===void 0){const s=mE.get(e);if(s!==void 0)t=mt[s],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return kf(t)}const xE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vg(r){return r.replace(xE,_E)}function _E(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Gg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const vE={[sc]:"SHADOWMAP_TYPE_PCF",[xo]:"SHADOWMAP_TYPE_VSM"};function yE(r){return vE[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const SE={[Ns]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE",[Mc]:"ENVMAP_TYPE_CUBE_UV"};function ME(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":SE[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const EE={[Ma]:"ENVMAP_MODE_REFRACTION"};function TE(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":EE[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wE={[Qg]:"ENVMAP_BLENDING_MULTIPLY",[ov]:"ENVMAP_BLENDING_MIX",[lv]:"ENVMAP_BLENDING_ADD"};function bE(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":wE[r.combine]||"ENVMAP_BLENDING_NONE"}function AE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function CE(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=yE(t),p=ME(t),v=TE(t),y=bE(t),g=AE(t),S=dE(t),w=fE(l),C=o.createProgram();let _,x,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(vo).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(vo).join(`
`),x.length>0&&(x+=`
`)):(_=[Gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),x=[Gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?mt.tonemapping_pars_fragment:"",t.toneMapping!==Wi?cE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,oE("linearToOutputTexel",t.outputColorSpace),uE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vo).join(`
`)),u=kf(u),u=Bg(u,t),u=zg(u,t),f=kf(f),f=Bg(f,t),f=zg(f,t),u=Vg(u),f=Vg(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===Ym?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ym?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=R+_+u,L=R+x+f,B=Fg(o,o.VERTEX_SHADER,N),D=Fg(o,o.FRAGMENT_SHADER,L);o.attachShader(C,B),o.attachShader(C,D),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function O(I){if(r.debug.checkShaderErrors){const G=o.getProgramInfoLog(C)||"",se=o.getShaderInfoLog(B)||"",le=o.getShaderInfoLog(D)||"",H=G.trim(),Z=se.trim(),q=le.trim();let Y=!0,ue=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,C,B,D);else{const de=kg(o,B,"vertex"),k=kg(o,D,"fragment");bt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+de+`
`+k)}else H!==""?rt("WebGLProgram: Program Info Log:",H):(Z===""||q==="")&&(ue=!1);ue&&(I.diagnostics={runnable:Y,programLog:H,vertexShader:{log:Z,prefix:_},fragmentShader:{log:q,prefix:x}})}o.deleteShader(B),o.deleteShader(D),E=new uc(o,C),U=hE(o,C)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let U;this.getAttributes=function(){return U===void 0&&O(this),U};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(C,iE)),X},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rE++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=D,this}let RE=0;class PE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new NE(e),t.set(e,s)),s}}class NE{constructor(e){this.id=RE++,this.code=e,this.usedTimes=0}}function LE(r){return r===Ls||r===dc||r===fc}function DE(r,e,t,s,o,l){const u=new g0,f=new PE,h=new Set,p=[],v=new Map,y=s.logarithmicDepthBuffer;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return h.add(E),E===0?"uv":`uv${E}`}function C(E,U,X,I,G,se){const le=I.fog,H=G.geometry,Z=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?I.environment:null,q=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,Y=e.get(E.envMap||Z,q),ue=Y&&Y.mapping===Mc?Y.image.height:null,de=S[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&rt("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const k=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ee=k!==void 0?k.length:0;let Fe=0;H.morphAttributes.position!==void 0&&(Fe=1),H.morphAttributes.normal!==void 0&&(Fe=2),H.morphAttributes.color!==void 0&&(Fe=3);let Ve,De,ae,ve;if(de){const ot=Vi[de];Ve=ot.vertexShader,De=ot.fragmentShader}else Ve=E.vertexShader,De=E.fragmentShader,f.update(E),ae=f.getVertexShaderID(E),ve=f.getFragmentShaderID(E);const pe=r.getRenderTarget(),Ue=r.state.buffers.depth.getReversed(),Ke=G.isInstancedMesh===!0,et=G.isBatchedMesh===!0,kt=!!E.map,st=!!E.matcap,Mt=!!Y,Lt=!!E.aoMap,ht=!!E.lightMap,Bt=!!E.bumpMap,Rt=!!E.normalMap,rn=!!E.displacementMap,W=!!E.emissiveMap,zt=!!E.metalnessMap,Je=!!E.roughnessMap,Pt=E.anisotropy>0,Le=E.clearcoat>0,Vt=E.dispersion>0,P=E.iridescence>0,M=E.sheen>0,K=E.transmission>0,me=Pt&&!!E.anisotropyMap,xe=Le&&!!E.clearcoatMap,we=Le&&!!E.clearcoatNormalMap,ge=Le&&!!E.clearcoatRoughnessMap,re=P&&!!E.iridescenceMap,fe=P&&!!E.iridescenceThicknessMap,Ne=M&&!!E.sheenColorMap,Ie=M&&!!E.sheenRoughnessMap,Te=!!E.specularMap,Se=!!E.specularColorMap,it=!!E.specularIntensityMap,at=K&&!!E.transmissionMap,pt=K&&!!E.thicknessMap,z=!!E.gradientMap,be=!!E.alphaMap,he=E.alphaTest>0,Oe=!!E.alphaHash,Ce=!!E.extensions;let _e=Wi;E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(_e=r.toneMapping);const We={shaderID:de,shaderType:E.type,shaderName:E.name,vertexShader:Ve,fragmentShader:De,defines:E.defines,customVertexShaderID:ae,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:et,batchingColor:et&&G._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&G.instanceColor!==null,instancingMorph:Ke&&G.morphTexture!==null,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:kt,matcap:st,envMap:Mt,envMapMode:Mt&&Y.mapping,envMapCubeUVHeight:ue,aoMap:Lt,lightMap:ht,bumpMap:Bt,normalMap:Rt,displacementMap:rn,emissiveMap:W,normalMapObjectSpace:Rt&&E.normalMapType===dv,normalMapTangentSpace:Rt&&E.normalMapType===Df,packedNormalMap:Rt&&E.normalMapType===Df&&LE(E.normalMap.format),metalnessMap:zt,roughnessMap:Je,anisotropy:Pt,anisotropyMap:me,clearcoat:Le,clearcoatMap:xe,clearcoatNormalMap:we,clearcoatRoughnessMap:ge,dispersion:Vt,iridescence:P,iridescenceMap:re,iridescenceThicknessMap:fe,sheen:M,sheenColorMap:Ne,sheenRoughnessMap:Ie,specularMap:Te,specularColorMap:Se,specularIntensityMap:it,transmission:K,transmissionMap:at,thicknessMap:pt,gradientMap:z,opaque:E.transparent===!1&&E.blending===va&&E.alphaToCoverage===!1,alphaMap:be,alphaTest:he,alphaHash:Oe,combine:E.combine,mapUv:kt&&w(E.map.channel),aoMapUv:Lt&&w(E.aoMap.channel),lightMapUv:ht&&w(E.lightMap.channel),bumpMapUv:Bt&&w(E.bumpMap.channel),normalMapUv:Rt&&w(E.normalMap.channel),displacementMapUv:rn&&w(E.displacementMap.channel),emissiveMapUv:W&&w(E.emissiveMap.channel),metalnessMapUv:zt&&w(E.metalnessMap.channel),roughnessMapUv:Je&&w(E.roughnessMap.channel),anisotropyMapUv:me&&w(E.anisotropyMap.channel),clearcoatMapUv:xe&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:we&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&w(E.sheenRoughnessMap.channel),specularMapUv:Te&&w(E.specularMap.channel),specularColorMapUv:Se&&w(E.specularColorMap.channel),specularIntensityMapUv:it&&w(E.specularIntensityMap.channel),transmissionMapUv:at&&w(E.transmissionMap.channel),thicknessMapUv:pt&&w(E.thicknessMap.channel),alphaMapUv:be&&w(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Rt||Pt),vertexNormals:!!H.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!H.attributes.uv&&(kt||be),fog:!!le,useFog:E.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||H.attributes.normal===void 0&&Rt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ue,skinning:G.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Fe,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:_e,decodeVideoTexture:kt&&E.map.isVideoTexture===!0&&St.getTransfer(E.map.colorSpace)===Ot,decodeVideoTextureEmissive:W&&E.emissiveMap.isVideoTexture===!0&&St.getTransfer(E.emissiveMap.colorSpace)===Ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===dr,flipSided:E.side===jn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ce&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&E.extensions.multiDraw===!0||et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return We.vertexUv1s=h.has(1),We.vertexUv2s=h.has(2),We.vertexUv3s=h.has(3),h.clear(),We}function _(E){const U=[];if(E.shaderID?U.push(E.shaderID):(U.push(E.customVertexShaderID),U.push(E.customFragmentShaderID)),E.defines!==void 0)for(const X in E.defines)U.push(X),U.push(E.defines[X]);return E.isRawShaderMaterial===!1&&(x(U,E),R(U,E),U.push(r.outputColorSpace)),U.push(E.customProgramCacheKey),U.join()}function x(E,U){E.push(U.precision),E.push(U.outputColorSpace),E.push(U.envMapMode),E.push(U.envMapCubeUVHeight),E.push(U.mapUv),E.push(U.alphaMapUv),E.push(U.lightMapUv),E.push(U.aoMapUv),E.push(U.bumpMapUv),E.push(U.normalMapUv),E.push(U.displacementMapUv),E.push(U.emissiveMapUv),E.push(U.metalnessMapUv),E.push(U.roughnessMapUv),E.push(U.anisotropyMapUv),E.push(U.clearcoatMapUv),E.push(U.clearcoatNormalMapUv),E.push(U.clearcoatRoughnessMapUv),E.push(U.iridescenceMapUv),E.push(U.iridescenceThicknessMapUv),E.push(U.sheenColorMapUv),E.push(U.sheenRoughnessMapUv),E.push(U.specularMapUv),E.push(U.specularColorMapUv),E.push(U.specularIntensityMapUv),E.push(U.transmissionMapUv),E.push(U.thicknessMapUv),E.push(U.combine),E.push(U.fogExp2),E.push(U.sizeAttenuation),E.push(U.morphTargetsCount),E.push(U.morphAttributeCount),E.push(U.numDirLights),E.push(U.numPointLights),E.push(U.numSpotLights),E.push(U.numSpotLightMaps),E.push(U.numHemiLights),E.push(U.numRectAreaLights),E.push(U.numDirLightShadows),E.push(U.numPointLightShadows),E.push(U.numSpotLightShadows),E.push(U.numSpotLightShadowsWithMaps),E.push(U.numLightProbes),E.push(U.shadowMapType),E.push(U.toneMapping),E.push(U.numClippingPlanes),E.push(U.numClipIntersection),E.push(U.depthPacking)}function R(E,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),E.push(u.mask)}function N(E){const U=S[E.type];let X;if(U){const I=Vi[U];X=Jv.clone(I.uniforms)}else X=E.uniforms;return X}function L(E,U){let X=v.get(U);return X!==void 0?++X.usedTimes:(X=new CE(r,U,E,o),p.push(X),v.set(U,X)),X}function B(E){if(--E.usedTimes===0){const U=p.indexOf(E);p[U]=p[p.length-1],p.pop(),v.delete(E.cacheKey),E.destroy()}}function D(E){f.remove(E)}function O(){f.dispose()}return{getParameters:C,getProgramCacheKey:_,getUniforms:N,acquireProgram:L,releaseProgram:B,releaseShaderCache:D,programs:p,dispose:O}}function IE(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function o(u,f,h){r.get(u)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function UE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Hg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Wg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function f(g,S,w,C,_,x){let R=r[e];return R===void 0?(R={id:g.id,object:g,geometry:S,material:w,materialVariant:u(g),groupOrder:C,renderOrder:g.renderOrder,z:_,group:x},r[e]=R):(R.id=g.id,R.object=g,R.geometry=S,R.material=w,R.materialVariant=u(g),R.groupOrder=C,R.renderOrder=g.renderOrder,R.z=_,R.group=x),e++,R}function h(g,S,w,C,_,x){const R=f(g,S,w,C,_,x);w.transmission>0?s.push(R):w.transparent===!0?o.push(R):t.push(R)}function p(g,S,w,C,_,x){const R=f(g,S,w,C,_,x);w.transmission>0?s.unshift(R):w.transparent===!0?o.unshift(R):t.unshift(R)}function v(g,S){t.length>1&&t.sort(g||UE),s.length>1&&s.sort(S||Hg),o.length>1&&o.sort(S||Hg)}function y(){for(let g=e,S=r.length;g<S;g++){const w=r[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:h,unshift:p,finish:y,sort:v}}function FE(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new Wg,r.set(s,[u])):o>=l.length?(u=new Wg,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function OE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new At};break;case"SpotLight":t={position:new Q,direction:new Q,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[e.id]=t,t}}}function kE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let BE=0;function zE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function VE(r){const e=new OE,t=kE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Q);const o=new Q,l=new Qt,u=new Qt;function f(p){let v=0,y=0,g=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let S=0,w=0,C=0,_=0,x=0,R=0,N=0,L=0,B=0,D=0,O=0;p.sort(zE);for(let U=0,X=p.length;U<X;U++){const I=p[U],G=I.color,se=I.intensity,le=I.distance;let H=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ls?H=I.shadow.map.texture:H=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)v+=G.r*se,y+=G.g*se,g+=G.b*se;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(I.sh.coefficients[Z],se);O++}else if(I.isDirectionalLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const q=I.shadow,Y=t.get(I);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,s.directionalShadow[S]=Y,s.directionalShadowMap[S]=H,s.directionalShadowMatrix[S]=I.shadow.matrix,R++}s.directional[S]=Z,S++}else if(I.isSpotLight){const Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(G).multiplyScalar(se),Z.distance=le,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,s.spot[C]=Z;const q=I.shadow;if(I.map&&(s.spotLightMap[B]=I.map,B++,q.updateMatrices(I),I.castShadow&&D++),s.spotLightMatrix[C]=q.matrix,I.castShadow){const Y=t.get(I);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,s.spotShadow[C]=Y,s.spotShadowMap[C]=H,L++}C++}else if(I.isRectAreaLight){const Z=e.get(I);Z.color.copy(G).multiplyScalar(se),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),s.rectArea[_]=Z,_++}else if(I.isPointLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const q=I.shadow,Y=t.get(I);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,s.pointShadow[w]=Y,s.pointShadowMap[w]=H,s.pointShadowMatrix[w]=I.shadow.matrix,N++}s.point[w]=Z,w++}else if(I.isHemisphereLight){const Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(se),Z.groundColor.copy(I.groundColor).multiplyScalar(se),s.hemi[x]=Z,x++}}_>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ke.LTC_FLOAT_1,s.rectAreaLTC2=ke.LTC_FLOAT_2):(s.rectAreaLTC1=ke.LTC_HALF_1,s.rectAreaLTC2=ke.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=y,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==S||E.pointLength!==w||E.spotLength!==C||E.rectAreaLength!==_||E.hemiLength!==x||E.numDirectionalShadows!==R||E.numPointShadows!==N||E.numSpotShadows!==L||E.numSpotMaps!==B||E.numLightProbes!==O)&&(s.directional.length=S,s.spot.length=C,s.rectArea.length=_,s.point.length=w,s.hemi.length=x,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=L+B-D,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=O,E.directionalLength=S,E.pointLength=w,E.spotLength=C,E.rectAreaLength=_,E.hemiLength=x,E.numDirectionalShadows=R,E.numPointShadows=N,E.numSpotShadows=L,E.numSpotMaps=B,E.numLightProbes=O,s.version=BE++)}function h(p,v){let y=0,g=0,S=0,w=0,C=0;const _=v.matrixWorldInverse;for(let x=0,R=p.length;x<R;x++){const N=p[x];if(N.isDirectionalLight){const L=s.directional[y];L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(_),y++}else if(N.isSpotLight){const L=s.spot[S];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(_),L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(_),S++}else if(N.isRectAreaLight){const L=s.rectArea[w];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(_),u.identity(),l.copy(N.matrixWorld),l.premultiply(_),u.extractRotation(l),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),w++}else if(N.isPointLight){const L=s.point[g];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(_),g++}else if(N.isHemisphereLight){const L=s.hemi[C];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(_),C++}}}return{setup:f,setupView:h,state:s}}function jg(r){const e=new VE(r),t=[],s=[],o=[];function l(g){y.camera=g,t.length=0,s.length=0,o.length=0}function u(g){t.push(g)}function f(g){s.push(g)}function h(g){o.push(g)}function p(){e.setup(t)}function v(g){e.setupView(t,g)}const y={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function GE(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new jg(r),e.set(o,[f])):l>=u.length?(f=new jg(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const HE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WE=`uniform sampler2D shadow_pass;
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
}`,jE=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],XE=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Xg=new Qt,mo=new Q,Vd=new Q;function qE(r,e,t){let s=new eh;const o=new Ct,l=new Ct,u=new nn,f=new ry,h=new sy,p={},v=t.maxTextureSize,y={[Qr]:jn,[jn]:Qr,[dr]:dr},g=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:HE,fragmentShader:WE}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const w=new Xn;w.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new qi(w,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let x=this.type;this.render=function(D,O,E){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;this.type===G_&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=sc);const U=r.getRenderTarget(),X=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),G=r.state;G.setBlending(pr),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const se=x!==this.type;se&&O.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(H=>H.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,H=D.length;le<H;le++){const Z=D[le],q=Z.shadow;if(q===void 0){rt("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const Y=q.getFrameExtents();o.multiply(Y),l.copy(q.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/Y.x),o.x=l.x*Y.x,q.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/Y.y),o.y=l.y*Y.y,q.mapSize.y=l.y));const ue=r.state.buffers.depth.getReversed();if(q.camera._reversedDepth=ue,q.map===null||se===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===xo){if(Z.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new ji(o.x,o.y,{format:Ls,type:gr,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new Ea(o.x,o.y,Gi),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=xr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Sn,q.map.depthTexture.magFilter=Sn}else Z.isPointLight?(q.map=new N0(o.x),q.map.depthTexture=new Yv(o.x,Xi)):(q.map=new ji(o.x,o.y),q.map.depthTexture=new Ea(o.x,o.y,Xi)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=xr,this.type===sc?(q.map.depthTexture.compareFunction=ue?Zf:Kf,q.map.depthTexture.minFilter=Cn,q.map.depthTexture.magFilter=Cn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Sn,q.map.depthTexture.magFilter=Sn);q.camera.updateProjectionMatrix()}const de=q.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<de;k++){if(q.map.isWebGLCubeRenderTarget)r.setRenderTarget(q.map,k),r.clear();else{k===0&&(r.setRenderTarget(q.map),r.clear());const ee=q.getViewport(k);u.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),G.viewport(u)}if(Z.isPointLight){const ee=q.camera,Fe=q.matrix,Ve=Z.distance||ee.far;Ve!==ee.far&&(ee.far=Ve,ee.updateProjectionMatrix()),mo.setFromMatrixPosition(Z.matrixWorld),ee.position.copy(mo),Vd.copy(ee.position),Vd.add(jE[k]),ee.up.copy(XE[k]),ee.lookAt(Vd),ee.updateMatrixWorld(),Fe.makeTranslation(-mo.x,-mo.y,-mo.z),Xg.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Xg,ee.coordinateSystem,ee.reversedDepth)}else q.updateMatrices(Z);s=q.getFrustum(),L(O,E,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===xo&&R(q,E),q.needsUpdate=!1}x=this.type,_.needsUpdate=!1,r.setRenderTarget(U,X,I)};function R(D,O){const E=e.update(C);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ji(o.x,o.y,{format:Ls,type:gr})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(O,null,E,g,C,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(O,null,E,S,C,null)}function N(D,O,E,U){let X=null;const I=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(I!==void 0)X=I;else if(X=E.isPointLight===!0?h:f,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const G=X.uuid,se=O.uuid;let le=p[G];le===void 0&&(le={},p[G]=le);let H=le[se];H===void 0&&(H=X.clone(),le[se]=H,O.addEventListener("dispose",B)),X=H}if(X.visible=O.visible,X.wireframe=O.wireframe,U===xo?X.side=O.shadowSide!==null?O.shadowSide:O.side:X.side=O.shadowSide!==null?O.shadowSide:y[O.side],X.alphaMap=O.alphaMap,X.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,X.map=O.map,X.clipShadows=O.clipShadows,X.clippingPlanes=O.clippingPlanes,X.clipIntersection=O.clipIntersection,X.displacementMap=O.displacementMap,X.displacementScale=O.displacementScale,X.displacementBias=O.displacementBias,X.wireframeLinewidth=O.wireframeLinewidth,X.linewidth=O.linewidth,E.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const G=r.properties.get(X);G.light=E}return X}function L(D,O,E,U,X){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&X===xo)&&(!D.frustumCulled||s.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const se=e.update(D),le=D.material;if(Array.isArray(le)){const H=se.groups;for(let Z=0,q=H.length;Z<q;Z++){const Y=H[Z],ue=le[Y.materialIndex];if(ue&&ue.visible){const de=N(D,ue,U,X);D.onBeforeShadow(r,D,O,E,se,de,Y),r.renderBufferDirect(E,null,se,de,D,Y),D.onAfterShadow(r,D,O,E,se,de,Y)}}}else if(le.visible){const H=N(D,le,U,X);D.onBeforeShadow(r,D,O,E,se,H,null),r.renderBufferDirect(E,null,se,H,D,null),D.onAfterShadow(r,D,O,E,se,H,null)}}const G=D.children;for(let se=0,le=G.length;se<le;se++)L(G[se],O,E,U,X)}function B(D){D.target.removeEventListener("dispose",B);for(const E in p){const U=p[E],X=D.target.uuid;X in U&&(U[X].dispose(),delete U[X])}}}function $E(r,e){function t(){let z=!1;const be=new nn;let he=null;const Oe=new nn(0,0,0,0);return{setMask:function(Ce){he!==Ce&&!z&&(r.colorMask(Ce,Ce,Ce,Ce),he=Ce)},setLocked:function(Ce){z=Ce},setClear:function(Ce,_e,We,ot,It){It===!0&&(Ce*=ot,_e*=ot,We*=ot),be.set(Ce,_e,We,ot),Oe.equals(be)===!1&&(r.clearColor(Ce,_e,We,ot),Oe.copy(be))},reset:function(){z=!1,he=null,Oe.set(-1,0,0,0)}}}function s(){let z=!1,be=!1,he=null,Oe=null,Ce=null;return{setReversed:function(_e){if(be!==_e){const We=e.get("EXT_clip_control");_e?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),be=_e;const ot=Ce;Ce=null,this.setClear(ot)}},getReversed:function(){return be},setTest:function(_e){_e?pe(r.DEPTH_TEST):Ue(r.DEPTH_TEST)},setMask:function(_e){he!==_e&&!z&&(r.depthMask(_e),he=_e)},setFunc:function(_e){if(be&&(_e=Sv[_e]),Oe!==_e){switch(_e){case qd:r.depthFunc(r.NEVER);break;case $d:r.depthFunc(r.ALWAYS);break;case Yd:r.depthFunc(r.LESS);break;case Sa:r.depthFunc(r.LEQUAL);break;case Kd:r.depthFunc(r.EQUAL);break;case Zd:r.depthFunc(r.GEQUAL);break;case Qd:r.depthFunc(r.GREATER);break;case Jd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Oe=_e}},setLocked:function(_e){z=_e},setClear:function(_e){Ce!==_e&&(Ce=_e,be&&(_e=1-_e),r.clearDepth(_e))},reset:function(){z=!1,he=null,Oe=null,Ce=null,be=!1}}}function o(){let z=!1,be=null,he=null,Oe=null,Ce=null,_e=null,We=null,ot=null,It=null;return{setTest:function(Et){z||(Et?pe(r.STENCIL_TEST):Ue(r.STENCIL_TEST))},setMask:function(Et){be!==Et&&!z&&(r.stencilMask(Et),be=Et)},setFunc:function(Et,Ht,Pn){(he!==Et||Oe!==Ht||Ce!==Pn)&&(r.stencilFunc(Et,Ht,Pn),he=Et,Oe=Ht,Ce=Pn)},setOp:function(Et,Ht,Pn){(_e!==Et||We!==Ht||ot!==Pn)&&(r.stencilOp(Et,Ht,Pn),_e=Et,We=Ht,ot=Pn)},setLocked:function(Et){z=Et},setClear:function(Et){It!==Et&&(r.clearStencil(Et),It=Et)},reset:function(){z=!1,be=null,he=null,Oe=null,Ce=null,_e=null,We=null,ot=null,It=null}}}const l=new t,u=new s,f=new o,h=new WeakMap,p=new WeakMap;let v={},y={},g={},S=new WeakMap,w=[],C=null,_=!1,x=null,R=null,N=null,L=null,B=null,D=null,O=null,E=new At(0,0,0),U=0,X=!1,I=null,G=null,se=null,le=null,H=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const ue=r.getParameter(r.VERSION);ue.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ue)[1]),q=Y>=1):ue.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),q=Y>=2);let de=null,k={};const ee=r.getParameter(r.SCISSOR_BOX),Fe=r.getParameter(r.VIEWPORT),Ve=new nn().fromArray(ee),De=new nn().fromArray(Fe);function ae(z,be,he,Oe){const Ce=new Uint8Array(4),_e=r.createTexture();r.bindTexture(z,_e),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let We=0;We<he;We++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(be,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,Ce):r.texImage2D(be+We,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ce);return _e}const ve={};ve[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),ve[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ve[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),pe(r.DEPTH_TEST),u.setFunc(Sa),Bt(!1),Rt(Hm),pe(r.CULL_FACE),Lt(pr);function pe(z){v[z]!==!0&&(r.enable(z),v[z]=!0)}function Ue(z){v[z]!==!1&&(r.disable(z),v[z]=!1)}function Ke(z,be){return g[z]!==be?(r.bindFramebuffer(z,be),g[z]=be,z===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=be),z===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=be),!0):!1}function et(z,be){let he=w,Oe=!1;if(z){he=S.get(be),he===void 0&&(he=[],S.set(be,he));const Ce=z.textures;if(he.length!==Ce.length||he[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,We=Ce.length;_e<We;_e++)he[_e]=r.COLOR_ATTACHMENT0+_e;he.length=Ce.length,Oe=!0}}else he[0]!==r.BACK&&(he[0]=r.BACK,Oe=!0);Oe&&r.drawBuffers(he)}function kt(z){return C!==z?(r.useProgram(z),C=z,!0):!1}const st={[Ts]:r.FUNC_ADD,[W_]:r.FUNC_SUBTRACT,[j_]:r.FUNC_REVERSE_SUBTRACT};st[X_]=r.MIN,st[q_]=r.MAX;const Mt={[$_]:r.ZERO,[Y_]:r.ONE,[K_]:r.SRC_COLOR,[jd]:r.SRC_ALPHA,[nv]:r.SRC_ALPHA_SATURATE,[ev]:r.DST_COLOR,[Q_]:r.DST_ALPHA,[Z_]:r.ONE_MINUS_SRC_COLOR,[Xd]:r.ONE_MINUS_SRC_ALPHA,[tv]:r.ONE_MINUS_DST_COLOR,[J_]:r.ONE_MINUS_DST_ALPHA,[iv]:r.CONSTANT_COLOR,[rv]:r.ONE_MINUS_CONSTANT_COLOR,[sv]:r.CONSTANT_ALPHA,[av]:r.ONE_MINUS_CONSTANT_ALPHA};function Lt(z,be,he,Oe,Ce,_e,We,ot,It,Et){if(z===pr){_===!0&&(Ue(r.BLEND),_=!1);return}if(_===!1&&(pe(r.BLEND),_=!0),z!==H_){if(z!==x||Et!==X){if((R!==Ts||B!==Ts)&&(r.blendEquation(r.FUNC_ADD),R=Ts,B=Ts),Et)switch(z){case va:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wm:r.blendFunc(r.ONE,r.ONE);break;case jm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:bt("WebGLState: Invalid blending: ",z);break}else switch(z){case va:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case jm:bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xm:bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bt("WebGLState: Invalid blending: ",z);break}N=null,L=null,D=null,O=null,E.set(0,0,0),U=0,x=z,X=Et}return}Ce=Ce||be,_e=_e||he,We=We||Oe,(be!==R||Ce!==B)&&(r.blendEquationSeparate(st[be],st[Ce]),R=be,B=Ce),(he!==N||Oe!==L||_e!==D||We!==O)&&(r.blendFuncSeparate(Mt[he],Mt[Oe],Mt[_e],Mt[We]),N=he,L=Oe,D=_e,O=We),(ot.equals(E)===!1||It!==U)&&(r.blendColor(ot.r,ot.g,ot.b,It),E.copy(ot),U=It),x=z,X=!1}function ht(z,be){z.side===dr?Ue(r.CULL_FACE):pe(r.CULL_FACE);let he=z.side===jn;be&&(he=!he),Bt(he),z.blending===va&&z.transparent===!1?Lt(pr):Lt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),l.setMask(z.colorWrite);const Oe=z.stencilWrite;f.setTest(Oe),Oe&&(f.setMask(z.stencilWriteMask),f.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),f.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),W(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):Ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(z){I!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),I=z)}function Rt(z){z!==z_?(pe(r.CULL_FACE),z!==G&&(z===Hm?r.cullFace(r.BACK):z===V_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ue(r.CULL_FACE),G=z}function rn(z){z!==se&&(q&&r.lineWidth(z),se=z)}function W(z,be,he){z?(pe(r.POLYGON_OFFSET_FILL),(le!==be||H!==he)&&(le=be,H=he,u.getReversed()&&(be=-be),r.polygonOffset(be,he))):Ue(r.POLYGON_OFFSET_FILL)}function zt(z){z?pe(r.SCISSOR_TEST):Ue(r.SCISSOR_TEST)}function Je(z){z===void 0&&(z=r.TEXTURE0+Z-1),de!==z&&(r.activeTexture(z),de=z)}function Pt(z,be,he){he===void 0&&(de===null?he=r.TEXTURE0+Z-1:he=de);let Oe=k[he];Oe===void 0&&(Oe={type:void 0,texture:void 0},k[he]=Oe),(Oe.type!==z||Oe.texture!==be)&&(de!==he&&(r.activeTexture(he),de=he),r.bindTexture(z,be||ve[z]),Oe.type=z,Oe.texture=be)}function Le(){const z=k[de];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Vt(){try{r.compressedTexImage2D(...arguments)}catch(z){bt("WebGLState:",z)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(z){bt("WebGLState:",z)}}function M(){try{r.texSubImage2D(...arguments)}catch(z){bt("WebGLState:",z)}}function K(){try{r.texSubImage3D(...arguments)}catch(z){bt("WebGLState:",z)}}function me(){try{r.compressedTexSubImage2D(...arguments)}catch(z){bt("WebGLState:",z)}}function xe(){try{r.compressedTexSubImage3D(...arguments)}catch(z){bt("WebGLState:",z)}}function we(){try{r.texStorage2D(...arguments)}catch(z){bt("WebGLState:",z)}}function ge(){try{r.texStorage3D(...arguments)}catch(z){bt("WebGLState:",z)}}function re(){try{r.texImage2D(...arguments)}catch(z){bt("WebGLState:",z)}}function fe(){try{r.texImage3D(...arguments)}catch(z){bt("WebGLState:",z)}}function Ne(z){return y[z]!==void 0?y[z]:r.getParameter(z)}function Ie(z,be){y[z]!==be&&(r.pixelStorei(z,be),y[z]=be)}function Te(z){Ve.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),Ve.copy(z))}function Se(z){De.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),De.copy(z))}function it(z,be){let he=p.get(be);he===void 0&&(he=new WeakMap,p.set(be,he));let Oe=he.get(z);Oe===void 0&&(Oe=r.getUniformBlockIndex(be,z.name),he.set(z,Oe))}function at(z,be){const Oe=p.get(be).get(z);h.get(be)!==Oe&&(r.uniformBlockBinding(be,Oe,z.__bindingPointIndex),h.set(be,Oe))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},y={},de=null,k={},g={},S=new WeakMap,w=[],C=null,_=!1,x=null,R=null,N=null,L=null,B=null,D=null,O=null,E=new At(0,0,0),U=0,X=!1,I=null,G=null,se=null,le=null,H=null,Ve.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:pe,disable:Ue,bindFramebuffer:Ke,drawBuffers:et,useProgram:kt,setBlending:Lt,setMaterial:ht,setFlipSided:Bt,setCullFace:Rt,setLineWidth:rn,setPolygonOffset:W,setScissorTest:zt,activeTexture:Je,bindTexture:Pt,unbindTexture:Le,compressedTexImage2D:Vt,compressedTexImage3D:P,texImage2D:re,texImage3D:fe,pixelStorei:Ie,getParameter:Ne,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:we,texStorage3D:ge,texSubImage2D:M,texSubImage3D:K,compressedTexSubImage2D:me,compressedTexSubImage3D:xe,scissor:Te,viewport:Se,reset:pt}}function YE(r,e,t,s,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ct,v=new WeakMap,y=new Set;let g;const S=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(P,M){return w?new OffscreenCanvas(P,M):mc("canvas")}function _(P,M,K){let me=1;const xe=Vt(P);if((xe.width>K||xe.height>K)&&(me=K/Math.max(xe.width,xe.height)),me<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const we=Math.floor(me*xe.width),ge=Math.floor(me*xe.height);g===void 0&&(g=C(we,ge));const re=M?C(we,ge):g;return re.width=we,re.height=ge,re.getContext("2d").drawImage(P,0,0,we,ge),rt("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+we+"x"+ge+")."),re}else return"data"in P&&rt("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),P;return P}function x(P){return P.generateMipmaps}function R(P){r.generateMipmap(P)}function N(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,M,K,me,xe,we=!1){if(P!==null){if(r[P]!==void 0)return r[P];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ge;me&&(ge=e.get("EXT_texture_norm16"),ge||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=M;if(M===r.RED&&(K===r.FLOAT&&(re=r.R32F),K===r.HALF_FLOAT&&(re=r.R16F),K===r.UNSIGNED_BYTE&&(re=r.R8),K===r.UNSIGNED_SHORT&&ge&&(re=ge.R16_EXT),K===r.SHORT&&ge&&(re=ge.R16_SNORM_EXT)),M===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(re=r.R8UI),K===r.UNSIGNED_SHORT&&(re=r.R16UI),K===r.UNSIGNED_INT&&(re=r.R32UI),K===r.BYTE&&(re=r.R8I),K===r.SHORT&&(re=r.R16I),K===r.INT&&(re=r.R32I)),M===r.RG&&(K===r.FLOAT&&(re=r.RG32F),K===r.HALF_FLOAT&&(re=r.RG16F),K===r.UNSIGNED_BYTE&&(re=r.RG8),K===r.UNSIGNED_SHORT&&ge&&(re=ge.RG16_EXT),K===r.SHORT&&ge&&(re=ge.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(re=r.RG8UI),K===r.UNSIGNED_SHORT&&(re=r.RG16UI),K===r.UNSIGNED_INT&&(re=r.RG32UI),K===r.BYTE&&(re=r.RG8I),K===r.SHORT&&(re=r.RG16I),K===r.INT&&(re=r.RG32I)),M===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(re=r.RGB8UI),K===r.UNSIGNED_SHORT&&(re=r.RGB16UI),K===r.UNSIGNED_INT&&(re=r.RGB32UI),K===r.BYTE&&(re=r.RGB8I),K===r.SHORT&&(re=r.RGB16I),K===r.INT&&(re=r.RGB32I)),M===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(re=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(re=r.RGBA16UI),K===r.UNSIGNED_INT&&(re=r.RGBA32UI),K===r.BYTE&&(re=r.RGBA8I),K===r.SHORT&&(re=r.RGBA16I),K===r.INT&&(re=r.RGBA32I)),M===r.RGB&&(K===r.UNSIGNED_SHORT&&ge&&(re=ge.RGB16_EXT),K===r.SHORT&&ge&&(re=ge.RGB16_SNORM_EXT),K===r.UNSIGNED_INT_5_9_9_9_REV&&(re=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(re=r.R11F_G11F_B10F)),M===r.RGBA){const fe=we?pc:St.getTransfer(xe);K===r.FLOAT&&(re=r.RGBA32F),K===r.HALF_FLOAT&&(re=r.RGBA16F),K===r.UNSIGNED_BYTE&&(re=fe===Ot?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT&&ge&&(re=ge.RGBA16_EXT),K===r.SHORT&&ge&&(re=ge.RGBA16_SNORM_EXT),K===r.UNSIGNED_SHORT_4_4_4_4&&(re=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(re=r.RGB5_A1)}return(re===r.R16F||re===r.R32F||re===r.RG16F||re===r.RG32F||re===r.RGBA16F||re===r.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function B(P,M){let K;return P?M===null||M===Xi||M===Mo?K=r.DEPTH24_STENCIL8:M===Gi?K=r.DEPTH32F_STENCIL8:M===So&&(K=r.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Xi||M===Mo?K=r.DEPTH_COMPONENT24:M===Gi?K=r.DEPTH_COMPONENT32F:M===So&&(K=r.DEPTH_COMPONENT16),K}function D(P,M){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==Sn&&P.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function O(P){const M=P.target;M.removeEventListener("dispose",O),U(M),M.isVideoTexture&&v.delete(M),M.isHTMLTexture&&y.delete(M)}function E(P){const M=P.target;M.removeEventListener("dispose",E),I(M)}function U(P){const M=s.get(P);if(M.__webglInit===void 0)return;const K=P.source,me=S.get(K);if(me){const xe=me[M.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&X(P),Object.keys(me).length===0&&S.delete(K)}s.remove(P)}function X(P){const M=s.get(P);r.deleteTexture(M.__webglTexture);const K=P.source,me=S.get(K);delete me[M.__cacheKey],u.memory.textures--}function I(P){const M=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(M.__webglFramebuffer[me]))for(let xe=0;xe<M.__webglFramebuffer[me].length;xe++)r.deleteFramebuffer(M.__webglFramebuffer[me][xe]);else r.deleteFramebuffer(M.__webglFramebuffer[me]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[me])}else{if(Array.isArray(M.__webglFramebuffer))for(let me=0;me<M.__webglFramebuffer.length;me++)r.deleteFramebuffer(M.__webglFramebuffer[me]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let me=0;me<M.__webglColorRenderbuffer.length;me++)M.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[me]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=P.textures;for(let me=0,xe=K.length;me<xe;me++){const we=s.get(K[me]);we.__webglTexture&&(r.deleteTexture(we.__webglTexture),u.memory.textures--),s.remove(K[me])}s.remove(P)}let G=0;function se(){G=0}function le(){return G}function H(P){G=P}function Z(){const P=G;return P>=o.maxTextures&&rt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),G+=1,P}function q(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function Y(P,M){const K=s.get(P);if(P.isVideoTexture&&Pt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&K.__version!==P.version){const me=P.image;if(me===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(K,P,M);return}}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+M)}function ue(P,M){const K=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){Ue(K,P,M);return}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+M)}function de(P,M){const K=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){Ue(K,P,M);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+M)}function k(P,M){const K=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&K.__version!==P.version){Ke(K,P,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+M)}const ee={[ef]:r.REPEAT,[hr]:r.CLAMP_TO_EDGE,[tf]:r.MIRRORED_REPEAT},Fe={[Sn]:r.NEAREST,[cv]:r.NEAREST_MIPMAP_NEAREST,[Nl]:r.NEAREST_MIPMAP_LINEAR,[Cn]:r.LINEAR,[cd]:r.LINEAR_MIPMAP_NEAREST,[As]:r.LINEAR_MIPMAP_LINEAR},Ve={[fv]:r.NEVER,[xv]:r.ALWAYS,[hv]:r.LESS,[Kf]:r.LEQUAL,[pv]:r.EQUAL,[Zf]:r.GEQUAL,[mv]:r.GREATER,[gv]:r.NOTEQUAL};function De(P,M){if(M.type===Gi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Cn||M.magFilter===cd||M.magFilter===Nl||M.magFilter===As||M.minFilter===Cn||M.minFilter===cd||M.minFilter===Nl||M.minFilter===As)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ee[M.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ee[M.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ee[M.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Fe[M.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Fe[M.minFilter]),M.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Ve[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Sn||M.minFilter!==Nl&&M.minFilter!==As||M.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function ae(P,M){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",O));const me=M.source;let xe=S.get(me);xe===void 0&&(xe={},S.set(me,xe));const we=q(M);if(we!==P.__cacheKey){xe[we]===void 0&&(xe[we]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,K=!0),xe[we].usedTimes++;const ge=xe[P.__cacheKey];ge!==void 0&&(xe[P.__cacheKey].usedTimes--,ge.usedTimes===0&&X(M)),P.__cacheKey=we,P.__webglTexture=xe[we].texture}return K}function ve(P,M,K){return Math.floor(Math.floor(P/K)/M)}function pe(P,M,K,me){const we=P.updateRanges;if(we.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,K,me,M.data);else{we.sort((Ie,Te)=>Ie.start-Te.start);let ge=0;for(let Ie=1;Ie<we.length;Ie++){const Te=we[ge],Se=we[Ie],it=Te.start+Te.count,at=ve(Se.start,M.width,4),pt=ve(Te.start,M.width,4);Se.start<=it+1&&at===pt&&ve(Se.start+Se.count-1,M.width,4)===at?Te.count=Math.max(Te.count,Se.start+Se.count-Te.start):(++ge,we[ge]=Se)}we.length=ge+1;const re=t.getParameter(r.UNPACK_ROW_LENGTH),fe=t.getParameter(r.UNPACK_SKIP_PIXELS),Ne=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Ie=0,Te=we.length;Ie<Te;Ie++){const Se=we[Ie],it=Math.floor(Se.start/4),at=Math.ceil(Se.count/4),pt=it%M.width,z=Math.floor(it/M.width),be=at,he=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),t.pixelStorei(r.UNPACK_SKIP_ROWS,z),t.texSubImage2D(r.TEXTURE_2D,0,pt,z,be,he,K,me,M.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,re),t.pixelStorei(r.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ne)}}function Ue(P,M,K){let me=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(me=r.TEXTURE_3D);const xe=ae(P,M),we=M.source;t.bindTexture(me,P.__webglTexture,r.TEXTURE0+K);const ge=s.get(we);if(we.version!==ge.__version||xe===!0){if(t.activeTexture(r.TEXTURE0+K),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const he=St.getPrimaries(St.workingColorSpace),Oe=M.colorSpace===qr?null:St.getPrimaries(M.colorSpace),Ce=M.colorSpace===qr||he===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let fe=_(M.image,!1,o.maxTextureSize);fe=Le(M,fe);const Ne=l.convert(M.format,M.colorSpace),Ie=l.convert(M.type);let Te=L(M.internalFormat,Ne,Ie,M.normalized,M.colorSpace,M.isVideoTexture);De(me,M);let Se;const it=M.mipmaps,at=M.isVideoTexture!==!0,pt=ge.__version===void 0||xe===!0,z=we.dataReady,be=D(M,fe);if(M.isDepthTexture)Te=B(M.format===Cs,M.type),pt&&(at?t.texStorage2D(r.TEXTURE_2D,1,Te,fe.width,fe.height):t.texImage2D(r.TEXTURE_2D,0,Te,fe.width,fe.height,0,Ne,Ie,null));else if(M.isDataTexture)if(it.length>0){at&&pt&&t.texStorage2D(r.TEXTURE_2D,be,Te,it[0].width,it[0].height);for(let he=0,Oe=it.length;he<Oe;he++)Se=it[he],at?z&&t.texSubImage2D(r.TEXTURE_2D,he,0,0,Se.width,Se.height,Ne,Ie,Se.data):t.texImage2D(r.TEXTURE_2D,he,Te,Se.width,Se.height,0,Ne,Ie,Se.data);M.generateMipmaps=!1}else at?(pt&&t.texStorage2D(r.TEXTURE_2D,be,Te,fe.width,fe.height),z&&pe(M,fe,Ne,Ie)):t.texImage2D(r.TEXTURE_2D,0,Te,fe.width,fe.height,0,Ne,Ie,fe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){at&&pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,Te,it[0].width,it[0].height,fe.depth);for(let he=0,Oe=it.length;he<Oe;he++)if(Se=it[he],M.format!==Ri)if(Ne!==null)if(at){if(z)if(M.layerUpdates.size>0){const Ce=Eg(Se.width,Se.height,M.format,M.type);for(const _e of M.layerUpdates){const We=Se.data.subarray(_e*Ce/Se.data.BYTES_PER_ELEMENT,(_e+1)*Ce/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,_e,Se.width,Se.height,1,Ne,We)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,fe.depth,Ne,Se.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,he,Te,Se.width,Se.height,fe.depth,0,Se.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?z&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,fe.depth,Ne,Ie,Se.data):t.texImage3D(r.TEXTURE_2D_ARRAY,he,Te,Se.width,Se.height,fe.depth,0,Ne,Ie,Se.data)}else{at&&pt&&t.texStorage2D(r.TEXTURE_2D,be,Te,it[0].width,it[0].height);for(let he=0,Oe=it.length;he<Oe;he++)Se=it[he],M.format!==Ri?Ne!==null?at?z&&t.compressedTexSubImage2D(r.TEXTURE_2D,he,0,0,Se.width,Se.height,Ne,Se.data):t.compressedTexImage2D(r.TEXTURE_2D,he,Te,Se.width,Se.height,0,Se.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?z&&t.texSubImage2D(r.TEXTURE_2D,he,0,0,Se.width,Se.height,Ne,Ie,Se.data):t.texImage2D(r.TEXTURE_2D,he,Te,Se.width,Se.height,0,Ne,Ie,Se.data)}else if(M.isDataArrayTexture)if(at){if(pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,Te,fe.width,fe.height,fe.depth),z)if(M.layerUpdates.size>0){const he=Eg(fe.width,fe.height,M.format,M.type);for(const Oe of M.layerUpdates){const Ce=fe.data.subarray(Oe*he/fe.data.BYTES_PER_ELEMENT,(Oe+1)*he/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Oe,fe.width,fe.height,1,Ne,Ie,Ce)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ne,Ie,fe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Te,fe.width,fe.height,fe.depth,0,Ne,Ie,fe.data);else if(M.isData3DTexture)at?(pt&&t.texStorage3D(r.TEXTURE_3D,be,Te,fe.width,fe.height,fe.depth),z&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ne,Ie,fe.data)):t.texImage3D(r.TEXTURE_3D,0,Te,fe.width,fe.height,fe.depth,0,Ne,Ie,fe.data);else if(M.isFramebufferTexture){if(pt)if(at)t.texStorage2D(r.TEXTURE_2D,be,Te,fe.width,fe.height);else{let he=fe.width,Oe=fe.height;for(let Ce=0;Ce<be;Ce++)t.texImage2D(r.TEXTURE_2D,Ce,Te,he,Oe,0,Ne,Ie,null),he>>=1,Oe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const he=r.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),fe.parentNode!==he){he.appendChild(fe),y.add(M),he.onpaint=ot=>{const It=ot.changedElements;for(const Et of y)It.includes(Et.image)&&(Et.needsUpdate=!0)},he.requestPaint();return}const Oe=0,Ce=r.RGBA,_e=r.RGBA,We=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Oe,Ce,_e,We,fe),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(it.length>0){if(at&&pt){const he=Vt(it[0]);t.texStorage2D(r.TEXTURE_2D,be,Te,he.width,he.height)}for(let he=0,Oe=it.length;he<Oe;he++)Se=it[he],at?z&&t.texSubImage2D(r.TEXTURE_2D,he,0,0,Ne,Ie,Se):t.texImage2D(r.TEXTURE_2D,he,Te,Ne,Ie,Se);M.generateMipmaps=!1}else if(at){if(pt){const he=Vt(fe);t.texStorage2D(r.TEXTURE_2D,be,Te,he.width,he.height)}z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,Ie,fe)}else t.texImage2D(r.TEXTURE_2D,0,Te,Ne,Ie,fe);x(M)&&R(me),ge.__version=we.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ke(P,M,K){if(M.image.length!==6)return;const me=ae(P,M),xe=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+K);const we=s.get(xe);if(xe.version!==we.__version||me===!0){t.activeTexture(r.TEXTURE0+K);const ge=St.getPrimaries(St.workingColorSpace),re=M.colorSpace===qr?null:St.getPrimaries(M.colorSpace),fe=M.colorSpace===qr||ge===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,Ie=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let _e=0;_e<6;_e++)!Ne&&!Ie?Te[_e]=_(M.image[_e],!0,o.maxCubemapSize):Te[_e]=Ie?M.image[_e].image:M.image[_e],Te[_e]=Le(M,Te[_e]);const Se=Te[0],it=l.convert(M.format,M.colorSpace),at=l.convert(M.type),pt=L(M.internalFormat,it,at,M.normalized,M.colorSpace),z=M.isVideoTexture!==!0,be=we.__version===void 0||me===!0,he=xe.dataReady;let Oe=D(M,Se);De(r.TEXTURE_CUBE_MAP,M);let Ce;if(Ne){z&&be&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,pt,Se.width,Se.height);for(let _e=0;_e<6;_e++){Ce=Te[_e].mipmaps;for(let We=0;We<Ce.length;We++){const ot=Ce[We];M.format!==Ri?it!==null?z?he&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,0,0,ot.width,ot.height,it,ot.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,pt,ot.width,ot.height,0,ot.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?he&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,0,0,ot.width,ot.height,it,at,ot.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,pt,ot.width,ot.height,0,it,at,ot.data)}}}else{if(Ce=M.mipmaps,z&&be){Ce.length>0&&Oe++;const _e=Vt(Te[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,pt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ie){z?he&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Te[_e].width,Te[_e].height,it,at,Te[_e].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pt,Te[_e].width,Te[_e].height,0,it,at,Te[_e].data);for(let We=0;We<Ce.length;We++){const It=Ce[We].image[_e].image;z?he&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,0,0,It.width,It.height,it,at,It.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,pt,It.width,It.height,0,it,at,It.data)}}else{z?he&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,it,at,Te[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pt,it,at,Te[_e]);for(let We=0;We<Ce.length;We++){const ot=Ce[We];z?he&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,0,0,it,at,ot.image[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,pt,it,at,ot.image[_e])}}}x(M)&&R(r.TEXTURE_CUBE_MAP),we.__version=xe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function et(P,M,K,me,xe,we){const ge=l.convert(K.format,K.colorSpace),re=l.convert(K.type),fe=L(K.internalFormat,ge,re,K.normalized,K.colorSpace),Ne=s.get(M),Ie=s.get(K);if(Ie.__renderTarget=M,!Ne.__hasExternalTextures){const Te=Math.max(1,M.width>>we),Se=Math.max(1,M.height>>we);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?t.texImage3D(xe,we,fe,Te,Se,M.depth,0,ge,re,null):t.texImage2D(xe,we,fe,Te,Se,0,ge,re,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),Je(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,xe,Ie.__webglTexture,0,zt(M)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,xe,Ie.__webglTexture,we),t.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(P,M,K){if(r.bindRenderbuffer(r.RENDERBUFFER,P),M.depthBuffer){const me=M.depthTexture,xe=me&&me.isDepthTexture?me.type:null,we=B(M.stencilBuffer,xe),ge=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Je(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,zt(M),we,M.width,M.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,zt(M),we,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,we,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,P)}else{const me=M.textures;for(let xe=0;xe<me.length;xe++){const we=me[xe],ge=l.convert(we.format,we.colorSpace),re=l.convert(we.type),fe=L(we.internalFormat,ge,re,we.normalized,we.colorSpace);Je(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,zt(M),fe,M.width,M.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,zt(M),fe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,fe,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function st(P,M,K){const me=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=s.get(M.depthTexture);if(xe.__renderTarget=M,(!xe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),me){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,M.depthTexture.addEventListener("dispose",O)),xe.__webglTexture===void 0){xe.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,xe.__webglTexture),De(r.TEXTURE_CUBE_MAP,M.depthTexture);const Ne=l.convert(M.depthTexture.format),Ie=l.convert(M.depthTexture.type);let Te;M.depthTexture.format===xr?Te=r.DEPTH_COMPONENT24:M.depthTexture.format===Cs&&(Te=r.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Te,M.width,M.height,0,Ne,Ie,null)}}else Y(M.depthTexture,0);const we=xe.__webglTexture,ge=zt(M),re=me?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,fe=M.depthTexture.format===Cs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===xr)Je(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,re,we,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,fe,re,we,0);else if(M.depthTexture.format===Cs)Je(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,re,we,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,fe,re,we,0);else throw new Error("Unknown depthTexture format")}function Mt(P){const M=s.get(P),K=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const me=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),me){const xe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,me.removeEventListener("dispose",xe)};me.addEventListener("dispose",xe),M.__depthDisposeCallback=xe}M.__boundDepthTexture=me}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(K)for(let me=0;me<6;me++)st(M.__webglFramebuffer[me],P,me);else{const me=P.texture.mipmaps;me&&me.length>0?st(M.__webglFramebuffer[0],P,0):st(M.__webglFramebuffer,P,0)}else if(K){M.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[me]),M.__webglDepthbuffer[me]===void 0)M.__webglDepthbuffer[me]=r.createRenderbuffer(),kt(M.__webglDepthbuffer[me],P,!1);else{const xe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=M.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,we)}}else{const me=P.texture.mipmaps;if(me&&me.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),kt(M.__webglDepthbuffer,P,!1);else{const xe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,we)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(P,M,K){const me=s.get(P);M!==void 0&&et(me.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&Mt(P)}function ht(P){const M=P.texture,K=s.get(P),me=s.get(M);P.addEventListener("dispose",E);const xe=P.textures,we=P.isWebGLCubeRenderTarget===!0,ge=xe.length>1;if(ge||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=M.version,u.memory.textures++),we){K.__webglFramebuffer=[];for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[re]=[];for(let fe=0;fe<M.mipmaps.length;fe++)K.__webglFramebuffer[re][fe]=r.createFramebuffer()}else K.__webglFramebuffer[re]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let re=0;re<M.mipmaps.length;re++)K.__webglFramebuffer[re]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(ge)for(let re=0,fe=xe.length;re<fe;re++){const Ne=s.get(xe[re]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=r.createTexture(),u.memory.textures++)}if(P.samples>0&&Je(P)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let re=0;re<xe.length;re++){const fe=xe[re];K.__webglColorRenderbuffer[re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[re]);const Ne=l.convert(fe.format,fe.colorSpace),Ie=l.convert(fe.type),Te=L(fe.internalFormat,Ne,Ie,fe.normalized,fe.colorSpace,P.isXRRenderTarget===!0),Se=zt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,Te,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,K.__webglColorRenderbuffer[re])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),kt(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(we){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),De(r.TEXTURE_CUBE_MAP,M);for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)et(K.__webglFramebuffer[re][fe],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe);else et(K.__webglFramebuffer[re],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);x(M)&&R(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let re=0,fe=xe.length;re<fe;re++){const Ne=xe[re],Ie=s.get(Ne);let Te=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Te=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Te,Ie.__webglTexture),De(Te,Ne),et(K.__webglFramebuffer,P,Ne,r.COLOR_ATTACHMENT0+re,Te,0),x(Ne)&&R(Te)}t.unbindTexture()}else{let re=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(re=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(re,me.__webglTexture),De(re,M),M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)et(K.__webglFramebuffer[fe],P,M,r.COLOR_ATTACHMENT0,re,fe);else et(K.__webglFramebuffer,P,M,r.COLOR_ATTACHMENT0,re,0);x(M)&&R(re),t.unbindTexture()}P.depthBuffer&&Mt(P)}function Bt(P){const M=P.textures;for(let K=0,me=M.length;K<me;K++){const xe=M[K];if(x(xe)){const we=N(P),ge=s.get(xe).__webglTexture;t.bindTexture(we,ge),R(we),t.unbindTexture()}}}const Rt=[],rn=[];function W(P){if(P.samples>0){if(Je(P)===!1){const M=P.textures,K=P.width,me=P.height;let xe=r.COLOR_BUFFER_BIT;const we=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=s.get(P),re=M.length>1;if(re)for(let Ne=0;Ne<M.length;Ne++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const fe=P.texture.mipmaps;fe&&fe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Ne=0;Ne<M.length;Ne++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[Ne]);const Ie=s.get(M[Ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ie,0)}r.blitFramebuffer(0,0,K,me,0,0,K,me,xe,r.NEAREST),h===!0&&(Rt.length=0,rn.length=0,Rt.push(r.COLOR_ATTACHMENT0+Ne),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Rt.push(we),rn.push(we),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,rn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),re)for(let Ne=0;Ne<M.length;Ne++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,ge.__webglColorRenderbuffer[Ne]);const Ie=s.get(M[Ne]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,Ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const M=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function zt(P){return Math.min(o.maxSamples,P.samples)}function Je(P){const M=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Pt(P){const M=u.render.frame;v.get(P)!==M&&(v.set(P,M),P.update())}function Le(P,M){const K=P.colorSpace,me=P.format,xe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==hc&&K!==qr&&(St.getTransfer(K)===Ot?(me!==Ri||xe!==ti)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bt("WebGLTextures: Unsupported texture color space:",K)),M}function Vt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=Z,this.resetTextureUnits=se,this.getTextureUnits=le,this.setTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=k,this.rebindTextures=Lt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function KE(r,e){function t(s,o=qr){let l;const u=St.getTransfer(o);if(s===ti)return r.UNSIGNED_BYTE;if(s===jf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Xf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===c0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===u0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===o0)return r.BYTE;if(s===l0)return r.SHORT;if(s===So)return r.UNSIGNED_SHORT;if(s===Wf)return r.INT;if(s===Xi)return r.UNSIGNED_INT;if(s===Gi)return r.FLOAT;if(s===gr)return r.HALF_FLOAT;if(s===d0)return r.ALPHA;if(s===f0)return r.RGB;if(s===Ri)return r.RGBA;if(s===xr)return r.DEPTH_COMPONENT;if(s===Cs)return r.DEPTH_STENCIL;if(s===h0)return r.RED;if(s===qf)return r.RED_INTEGER;if(s===Ls)return r.RG;if(s===$f)return r.RG_INTEGER;if(s===Yf)return r.RGBA_INTEGER;if(s===ac||s===oc||s===lc||s===cc)if(u===Ot)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===ac)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===ac)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===oc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nf||s===rf||s===sf||s===af)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===nf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===af)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===of||s===lf||s===cf||s===uf||s===df||s===dc||s===ff)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===of||s===lf)return u===Ot?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===cf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===uf)return l.COMPRESSED_R11_EAC;if(s===df)return l.COMPRESSED_SIGNED_R11_EAC;if(s===dc)return l.COMPRESSED_RG11_EAC;if(s===ff)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===hf||s===pf||s===mf||s===gf||s===xf||s===_f||s===vf||s===yf||s===Sf||s===Mf||s===Ef||s===Tf||s===wf||s===bf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===hf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===pf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_f)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===yf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ef)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Tf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Af||s===Cf||s===Rf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Af)return u===Ot?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Pf||s===Nf||s===fc||s===Lf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Pf)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Nf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Lf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Mo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const ZE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QE=`
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

}`;class JE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new T0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new $i({vertexShader:ZE,fragmentShader:QE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qi(new Ec(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eT extends Ds{constructor(e,t){super();const s=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,v=null,y=null,g=null,S=null,w=null;const C=typeof XRWebGLBinding<"u",_=new JE,x={},R=t.getContextAttributes();let N=null,L=null;const B=[],D=[],O=new Ct;let E=null;const U=new ei;U.viewport=new nn;const X=new ei;X.viewport=new nn;const I=[U,X],G=new uy;let se=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ve=B[ae];return ve===void 0&&(ve=new xd,B[ae]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ae){let ve=B[ae];return ve===void 0&&(ve=new xd,B[ae]=ve),ve.getGripSpace()},this.getHand=function(ae){let ve=B[ae];return ve===void 0&&(ve=new xd,B[ae]=ve),ve.getHandSpace()};function H(ae){const ve=D.indexOf(ae.inputSource);if(ve===-1)return;const pe=B[ve];pe!==void 0&&(pe.update(ae.inputSource,ae.frame,p||u),pe.dispatchEvent({type:ae.type,data:ae.inputSource}))}function Z(){o.removeEventListener("select",H),o.removeEventListener("selectstart",H),o.removeEventListener("selectend",H),o.removeEventListener("squeeze",H),o.removeEventListener("squeezestart",H),o.removeEventListener("squeezeend",H),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",q);for(let ae=0;ae<B.length;ae++){const ve=D[ae];ve!==null&&(D[ae]=null,B[ae].disconnect(ve))}se=null,le=null,_.reset();for(const ae in x)delete x[ae];e.setRenderTarget(N),S=null,g=null,y=null,o=null,L=null,De.stop(),s.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,s.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){f=ae,s.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return y===null&&C&&(y=new XRWebGLBinding(o,t)),y},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",H),o.addEventListener("selectstart",H),o.addEventListener("selectend",H),o.addEventListener("squeeze",H),o.addEventListener("squeezestart",H),o.addEventListener("squeezeend",H),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",q),R.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ue=null,Ke=null;R.depth&&(Ke=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=R.stencil?Cs:xr,Ue=R.stencil?Mo:Xi);const et={colorFormat:t.RGBA8,depthFormat:Ke,scaleFactor:l};y=this.getBinding(),g=y.createProjectionLayer(et),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new ji(g.textureWidth,g.textureHeight,{format:Ri,type:ti,depthTexture:new Ea(g.textureWidth,g.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const pe={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new ji(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),De.setContext(o),De.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(ae){for(let ve=0;ve<ae.removed.length;ve++){const pe=ae.removed[ve],Ue=D.indexOf(pe);Ue>=0&&(D[Ue]=null,B[Ue].disconnect(pe))}for(let ve=0;ve<ae.added.length;ve++){const pe=ae.added[ve];let Ue=D.indexOf(pe);if(Ue===-1){for(let et=0;et<B.length;et++)if(et>=D.length){D.push(pe),Ue=et;break}else if(D[et]===null){D[et]=pe,Ue=et;break}if(Ue===-1)break}const Ke=B[Ue];Ke&&Ke.connect(pe)}}const Y=new Q,ue=new Q;function de(ae,ve,pe){Y.setFromMatrixPosition(ve.matrixWorld),ue.setFromMatrixPosition(pe.matrixWorld);const Ue=Y.distanceTo(ue),Ke=ve.projectionMatrix.elements,et=pe.projectionMatrix.elements,kt=Ke[14]/(Ke[10]-1),st=Ke[14]/(Ke[10]+1),Mt=(Ke[9]+1)/Ke[5],Lt=(Ke[9]-1)/Ke[5],ht=(Ke[8]-1)/Ke[0],Bt=(et[8]+1)/et[0],Rt=kt*ht,rn=kt*Bt,W=Ue/(-ht+Bt),zt=W*-ht;if(ve.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(zt),ae.translateZ(W),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ke[10]===-1)ae.projectionMatrix.copy(ve.projectionMatrix),ae.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Je=kt+W,Pt=st+W,Le=Rt-zt,Vt=rn+(Ue-zt),P=Mt*st/Pt*Je,M=Lt*st/Pt*Je;ae.projectionMatrix.makePerspective(Le,Vt,P,M,Je,Pt),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function k(ae,ve){ve===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ve.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let ve=ae.near,pe=ae.far;_.texture!==null&&(_.depthNear>0&&(ve=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),G.near=X.near=U.near=ve,G.far=X.far=U.far=pe,(se!==G.near||le!==G.far)&&(o.updateRenderState({depthNear:G.near,depthFar:G.far}),se=G.near,le=G.far),G.layers.mask=ae.layers.mask|6,U.layers.mask=G.layers.mask&-5,X.layers.mask=G.layers.mask&-3;const Ue=ae.parent,Ke=G.cameras;k(G,Ue);for(let et=0;et<Ke.length;et++)k(Ke[et],Ue);Ke.length===2?de(G,U,X):G.projectionMatrix.copy(U.projectionMatrix),ee(ae,G,Ue)};function ee(ae,ve,pe){pe===null?ae.matrix.copy(ve.matrixWorld):(ae.matrix.copy(pe.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ve.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ve.projectionMatrix),ae.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Uf*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(g===null&&S===null))return h},this.setFoveation=function(ae){h=ae,g!==null&&(g.fixedFoveation=ae),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ae)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(G)},this.getCameraTexture=function(ae){return x[ae]};let Fe=null;function Ve(ae,ve){if(v=ve.getViewerPose(p||u),w=ve,v!==null){const pe=v.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Ue=!1;pe.length!==G.cameras.length&&(G.cameras.length=0,Ue=!0);for(let st=0;st<pe.length;st++){const Mt=pe[st];let Lt=null;if(S!==null)Lt=S.getViewport(Mt);else{const Bt=y.getViewSubImage(g,Mt);Lt=Bt.viewport,st===0&&(e.setRenderTargetTextures(L,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(L))}let ht=I[st];ht===void 0&&(ht=new ei,ht.layers.enable(st),ht.viewport=new nn,I[st]=ht),ht.matrix.fromArray(Mt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Mt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),st===0&&(G.matrix.copy(ht.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ue===!0&&G.cameras.push(ht)}const Ke=o.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){y=s.getBinding();const st=y.getDepthInformation(pe[0]);st&&st.isValid&&st.texture&&_.init(st,o.renderState)}if(Ke&&Ke.includes("camera-access")&&C){e.state.unbindTexture(),y=s.getBinding();for(let st=0;st<pe.length;st++){const Mt=pe[st].camera;if(Mt){let Lt=x[Mt];Lt||(Lt=new T0,x[Mt]=Lt);const ht=y.getCameraImage(Mt);Lt.sourceTexture=ht}}}}for(let pe=0;pe<B.length;pe++){const Ue=D[pe],Ke=B[pe];Ue!==null&&Ke!==void 0&&Ke.update(Ue,ve,p||u)}Fe&&Fe(ae,ve),ve.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ve}),w=null}const De=new R0;De.setAnimationLoop(Ve),this.setAnimationLoop=function(ae){Fe=ae},this.dispose=function(){}}}const tT=new Qt,F0=new ft;F0.set(-1,0,0,0,1,0,0,0,1);function nT(r,e){function t(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function s(_,x){x.color.getRGB(_.fogColor.value,w0(r)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function o(_,x,R,N,L){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(_,x):x.isMeshLambertMaterial?(l(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(_,x),y(_,x)):x.isMeshPhongMaterial?(l(_,x),v(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(_,x),g(_,x),x.isMeshPhysicalMaterial&&S(_,x,L)):x.isMeshMatcapMaterial?(l(_,x),w(_,x)):x.isMeshDepthMaterial?l(_,x):x.isMeshDistanceMaterial?(l(_,x),C(_,x)):x.isMeshNormalMaterial?l(_,x):x.isLineBasicMaterial?(u(_,x),x.isLineDashedMaterial&&f(_,x)):x.isPointsMaterial?h(_,x,R,N):x.isSpriteMaterial?p(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,t(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===jn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,t(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===jn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,t(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,t(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const R=e.get(x),N=R.envMap,L=R.envMapRotation;N&&(_.envMap.value=N,_.envMapRotation.value.setFromMatrix4(tT.makeRotationFromEuler(L)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(F0),_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,_.aoMapTransform))}function u(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform))}function f(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function h(_,x,R,N){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*R,_.scale.value=N*.5,x.map&&(_.map.value=x.map,t(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function p(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function v(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function y(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function g(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function S(_,x,R){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,_.specularIntensityMapTransform))}function w(_,x){x.matcap&&(_.matcap.value=x.matcap)}function C(_,x){const R=e.get(x).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function iT(r,e,t,s){let o={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,N){const L=N.program;s.uniformBlockBinding(R,L)}function p(R,N){let L=o[R.id];L===void 0&&(w(R),L=v(R),o[R.id]=L,R.addEventListener("dispose",_));const B=N.program;s.updateUBOMapping(R,B);const D=e.render.frame;l[R.id]!==D&&(g(R),l[R.id]=D)}function v(R){const N=y();R.__bindingPointIndex=N;const L=r.createBuffer(),B=R.__size,D=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,B,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,L),L}function y(){for(let R=0;R<f;R++)if(u.indexOf(R)===-1)return u.push(R),R;return bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const N=o[R.id],L=R.uniforms,B=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let D=0,O=L.length;D<O;D++){const E=Array.isArray(L[D])?L[D]:[L[D]];for(let U=0,X=E.length;U<X;U++){const I=E[U];if(S(I,D,U,B)===!0){const G=I.__offset,se=Array.isArray(I.value)?I.value:[I.value];let le=0;for(let H=0;H<se.length;H++){const Z=se[H],q=C(Z);typeof Z=="number"||typeof Z=="boolean"?(I.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,G+le,I.__data)):Z.isMatrix3?(I.__data[0]=Z.elements[0],I.__data[1]=Z.elements[1],I.__data[2]=Z.elements[2],I.__data[3]=0,I.__data[4]=Z.elements[3],I.__data[5]=Z.elements[4],I.__data[6]=Z.elements[5],I.__data[7]=0,I.__data[8]=Z.elements[6],I.__data[9]=Z.elements[7],I.__data[10]=Z.elements[8],I.__data[11]=0):ArrayBuffer.isView(Z)?I.__data.set(new Z.constructor(Z.buffer,Z.byteOffset,I.__data.length)):(Z.toArray(I.__data,le),le+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(R,N,L,B){const D=R.value,O=N+"_"+L;if(B[O]===void 0)return typeof D=="number"||typeof D=="boolean"?B[O]=D:ArrayBuffer.isView(D)?B[O]=D.slice():B[O]=D.clone(),!0;{const E=B[O];if(typeof D=="number"||typeof D=="boolean"){if(E!==D)return B[O]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(E.equals(D)===!1)return E.copy(D),!0}}return!1}function w(R){const N=R.uniforms;let L=0;const B=16;for(let O=0,E=N.length;O<E;O++){const U=Array.isArray(N[O])?N[O]:[N[O]];for(let X=0,I=U.length;X<I;X++){const G=U[X],se=Array.isArray(G.value)?G.value:[G.value];for(let le=0,H=se.length;le<H;le++){const Z=se[le],q=C(Z),Y=L%B,ue=Y%q.boundary,de=Y+ue;L+=ue,de!==0&&B-de<q.storage&&(L+=B-de),G.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=L,L+=q.storage}}}const D=L%B;return D>0&&(L+=B-D),R.__size=L,R.__cache={},this}function C(R){const N={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(N.boundary=4,N.storage=4):R.isVector2?(N.boundary=8,N.storage=8):R.isVector3||R.isColor?(N.boundary=16,N.storage=12):R.isVector4?(N.boundary=16,N.storage=16):R.isMatrix3?(N.boundary=48,N.storage=48):R.isMatrix4?(N.boundary=64,N.storage=64):R.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(N.boundary=16,N.storage=R.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",R),N}function _(R){const N=R.target;N.removeEventListener("dispose",_);const L=u.indexOf(N.__bindingPointIndex);u.splice(L,1),r.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function x(){for(const R in o)r.deleteBuffer(o[R]);u=[],o={},l={}}return{bind:h,update:p,dispose:x}}const rT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function sT(){return Bi===null&&(Bi=new Gv(rT,16,16,Ls,gr),Bi.name="DFG_LUT",Bi.minFilter=Cn,Bi.magFilter=Cn,Bi.wrapS=hr,Bi.wrapT=hr,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class aT{constructor(e={}){const{canvas:t=vv(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:S=ti}=e;this.isWebGLRenderer=!0;let w;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=s.getContextAttributes().alpha}else w=u;const C=S,_=new Set([Yf,$f,qf]),x=new Set([ti,Xi,So,Mo,jf,Xf]),R=new Uint32Array(4),N=new Int32Array(4),L=new Q;let B=null,D=null;const O=[],E=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let I=!1,G=null;this._outputColorSpace=pi;let se=0,le=0,H=null,Z=-1,q=null;const Y=new nn,ue=new nn;let de=null;const k=new At(0);let ee=0,Fe=t.width,Ve=t.height,De=1,ae=null,ve=null;const pe=new nn(0,0,Fe,Ve),Ue=new nn(0,0,Fe,Ve);let Ke=!1;const et=new eh;let kt=!1,st=!1;const Mt=new Qt,Lt=new Q,ht=new nn,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function rn(){return H===null?De:1}let W=s;function zt(A,$){return t.getContext(A,$)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hf}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",ot,!1),W===null){const $="webgl2";if(W=zt($,A),W===null)throw zt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw bt("WebGLRenderer: "+A.message),A}let Je,Pt,Le,Vt,P,M,K,me,xe,we,ge,re,fe,Ne,Ie,Te,Se,it,at,pt,z,be,he;function Oe(){Je=new s1(W),Je.init(),z=new KE(W,Je),Pt=new ZM(W,Je,e,z),Le=new $E(W,Je),Pt.reversedDepthBuffer&&g&&Le.buffers.depth.setReversed(!0),Vt=new l1(W),P=new IE,M=new YE(W,Je,Le,P,Pt,z,Vt),K=new r1(X),me=new fy(W),be=new YM(W,me),xe=new a1(W,me,Vt,be),we=new u1(W,xe,me,be,Vt),it=new c1(W,Pt,M),Ie=new QM(P),ge=new DE(X,K,Je,Pt,be,Ie),re=new nT(X,P),fe=new FE,Ne=new GE(Je),Se=new $M(X,K,Le,we,w,h),Te=new qE(X,we,Pt),he=new iT(W,Vt,Pt,Le),at=new KM(W,Je,Vt),pt=new o1(W,Je,Vt),Vt.programs=ge.programs,X.capabilities=Pt,X.extensions=Je,X.properties=P,X.renderLists=fe,X.shadowMap=Te,X.state=Le,X.info=Vt}Oe(),C!==ti&&(U=new f1(C,t.width,t.height,o,l));const Ce=new eT(X,W);this.xr=Ce,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=Je.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Je.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(A){A!==void 0&&(De=A,this.setSize(Fe,Ve,!1))},this.getSize=function(A){return A.set(Fe,Ve)},this.setSize=function(A,$,oe=!0){if(Ce.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=A,Ve=$,t.width=Math.floor(A*De),t.height=Math.floor($*De),oe===!0&&(t.style.width=A+"px",t.style.height=$+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,A,$)},this.getDrawingBufferSize=function(A){return A.set(Fe*De,Ve*De).floor()},this.setDrawingBufferSize=function(A,$,oe){Fe=A,Ve=$,De=oe,t.width=Math.floor(A*oe),t.height=Math.floor($*oe),this.setViewport(0,0,A,$)},this.setEffects=function(A){if(C===ti){bt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let $=0;$<A.length;$++)if(A[$].isOutputPass===!0){rt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Y)},this.getViewport=function(A){return A.copy(pe)},this.setViewport=function(A,$,oe,ne){A.isVector4?pe.set(A.x,A.y,A.z,A.w):pe.set(A,$,oe,ne),Le.viewport(Y.copy(pe).multiplyScalar(De).round())},this.getScissor=function(A){return A.copy(Ue)},this.setScissor=function(A,$,oe,ne){A.isVector4?Ue.set(A.x,A.y,A.z,A.w):Ue.set(A,$,oe,ne),Le.scissor(ue.copy(Ue).multiplyScalar(De).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(A){Le.setScissorTest(Ke=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){ve=A},this.getClearColor=function(A){return A.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(A=!0,$=!0,oe=!0){let ne=0;if(A){let te=!1;if(H!==null){const Pe=H.texture.format;te=_.has(Pe)}if(te){const Pe=H.texture.type,Ge=x.has(Pe),Re=Se.getClearColor(),qe=Se.getClearAlpha(),Qe=Re.r,ct=Re.g,ut=Re.b;Ge?(R[0]=Qe,R[1]=ct,R[2]=ut,R[3]=qe,W.clearBufferuiv(W.COLOR,0,R)):(N[0]=Qe,N[1]=ct,N[2]=ut,N[3]=qe,W.clearBufferiv(W.COLOR,0,N))}else ne|=W.COLOR_BUFFER_BIT}$&&(ne|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ne|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&W.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),G=A},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ot,!1),Se.dispose(),fe.dispose(),Ne.dispose(),P.dispose(),K.dispose(),we.dispose(),be.dispose(),he.dispose(),ge.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Yi),Ce.removeEventListener("sessionend",Li),ri.stop()};function _e(A){A.preventDefault(),Zm("WebGLRenderer: Context Lost."),I=!0}function We(){Zm("WebGLRenderer: Context Restored."),I=!1;const A=Vt.autoReset,$=Te.enabled,oe=Te.autoUpdate,ne=Te.needsUpdate,te=Te.type;Oe(),Vt.autoReset=A,Te.enabled=$,Te.autoUpdate=oe,Te.needsUpdate=ne,Te.type=te}function ot(A){bt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function It(A){const $=A.target;$.removeEventListener("dispose",It),Et($)}function Et(A){Ht(A),P.remove(A)}function Ht(A){const $=P.get(A).programs;$!==void 0&&($.forEach(function(oe){ge.releaseProgram(oe)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,$,oe,ne,te,Pe){$===null&&($=Bt);const Ge=te.isMesh&&te.matrixWorld.determinant()<0,Re=ss(A,$,oe,ne,te);Le.setMaterial(ne,Ge);let qe=oe.index,Qe=1;if(ne.wireframe===!0){if(qe=xe.getWireframeAttribute(oe),qe===void 0)return;Qe=2}const ct=oe.drawRange,ut=oe.attributes.position;let Ye=ct.start*Qe,Tt=(ct.start+ct.count)*Qe;Pe!==null&&(Ye=Math.max(Ye,Pe.start*Qe),Tt=Math.min(Tt,(Pe.start+Pe.count)*Qe)),qe!==null?(Ye=Math.max(Ye,0),Tt=Math.min(Tt,qe.count)):ut!=null&&(Ye=Math.max(Ye,0),Tt=Math.min(Tt,ut.count));const Wt=Tt-Ye;if(Wt<0||Wt===1/0)return;be.setup(te,ne,Re,oe,qe);let Kt,Ut=at;if(qe!==null&&(Kt=me.get(qe),Ut=pt,Ut.setIndex(Kt)),te.isMesh)ne.wireframe===!0?(Le.setLineWidth(ne.wireframeLinewidth*rn()),Ut.setMode(W.LINES)):Ut.setMode(W.TRIANGLES);else if(te.isLine){let an=ne.linewidth;an===void 0&&(an=1),Le.setLineWidth(an*rn()),te.isLineSegments?Ut.setMode(W.LINES):te.isLineLoop?Ut.setMode(W.LINE_LOOP):Ut.setMode(W.LINE_STRIP)}else te.isPoints?Ut.setMode(W.POINTS):te.isSprite&&Ut.setMode(W.TRIANGLES);if(te.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))Ut.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const an=te._multiDrawStarts,Be=te._multiDrawCounts,_n=te._multiDrawCount,xt=qe?me.get(qe).bytesPerElement:1,Un=P.get(ne).currentProgram.getUniforms();for(let Fn=0;Fn<_n;Fn++)Un.setValue(W,"_gl_DrawID",Fn),Ut.render(an[Fn]/xt,Be[Fn])}else if(te.isInstancedMesh)Ut.renderInstances(Ye,Wt,te.count);else if(oe.isInstancedBufferGeometry){const an=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Be=Math.min(oe.instanceCount,an);Ut.renderInstances(Ye,Wt,Be)}else Ut.render(Ye,Wt)};function Pn(A,$,oe){A.transparent===!0&&A.side===dr&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,yr(A,$,oe),A.side=Qr,A.needsUpdate=!0,yr(A,$,oe),A.side=dr):yr(A,$,oe)}this.compile=function(A,$,oe=null){oe===null&&(oe=A),D=Ne.get(oe),D.init($),E.push(D),oe.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(D.pushLight(te),te.castShadow&&D.pushShadow(te))}),A!==oe&&A.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(D.pushLight(te),te.castShadow&&D.pushShadow(te))}),D.setupLights();const ne=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Pe=te.material;if(Pe)if(Array.isArray(Pe))for(let Ge=0;Ge<Pe.length;Ge++){const Re=Pe[Ge];Pn(Re,oe,te),ne.add(Re)}else Pn(Pe,oe,te),ne.add(Pe)}),D=E.pop(),ne},this.compileAsync=function(A,$,oe=null){const ne=this.compile(A,$,oe);return new Promise(te=>{function Pe(){if(ne.forEach(function(Ge){P.get(Ge).currentProgram.isReady()&&ne.delete(Ge)}),ne.size===0){te(A);return}setTimeout(Pe,10)}Je.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let ii=null;function _r(A){ii&&ii(A)}function Yi(){ri.stop()}function Li(){ri.start()}const ri=new R0;ri.setAnimationLoop(_r),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(A){ii=A,Ce.setAnimationLoop(A),A===null?ri.stop():ri.start()},Ce.addEventListener("sessionstart",Yi),Ce.addEventListener("sessionend",Li),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0){bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;G!==null&&G.renderStart(A,$);const oe=Ce.enabled===!0&&Ce.isPresenting===!0,ne=U!==null&&(H===null||oe)&&U.begin(X,H);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera($),$=Ce.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,$,H),D=Ne.get(A,E.length),D.init($),D.state.textureUnits=M.getTextureUnits(),E.push(D),Mt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),et.setFromProjectionMatrix(Mt,Hi,$.reversedDepth),st=this.localClippingEnabled,kt=Ie.init(this.clippingPlanes,st),B=fe.get(A,O.length),B.init(),O.push(B),Ce.enabled===!0&&Ce.isPresenting===!0){const Ge=X.xr.getDepthSensingMesh();Ge!==null&&vr(Ge,$,-1/0,X.sortObjects)}vr(A,$,0,X.sortObjects),B.finish(),X.sortObjects===!0&&B.sort(ae,ve),Rt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Rt&&Se.addToRenderList(B,A),this.info.render.frame++,kt===!0&&Ie.beginShadows();const te=D.state.shadowsArray;if(Te.render(te,A,$),kt===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&U.hasRenderPass())===!1){const Ge=B.opaque,Re=B.transmissive;if(D.setupLights(),$.isArrayCamera){const qe=$.cameras;if(Re.length>0)for(let Qe=0,ct=qe.length;Qe<ct;Qe++){const ut=qe[Qe];si(Ge,Re,A,ut)}Rt&&Se.render(A);for(let Qe=0,ct=qe.length;Qe<ct;Qe++){const ut=qe[Qe];ns(B,A,ut,ut.viewport)}}else Re.length>0&&si(Ge,Re,A,$),Rt&&Se.render(A),ns(B,A,$)}H!==null&&le===0&&(M.updateMultisampleRenderTarget(H),M.updateRenderTargetMipmap(H)),ne&&U.end(X),A.isScene===!0&&A.onAfterRender(X,A,$),be.resetDefaultState(),Z=-1,q=null,E.pop(),E.length>0?(D=E[E.length-1],M.setTextureUnits(D.state.textureUnits),kt===!0&&Ie.setGlobalState(X.clippingPlanes,D.state.camera)):D=null,O.pop(),O.length>0?B=O[O.length-1]:B=null,G!==null&&G.renderEnd()};function vr(A,$,oe,ne){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLightProbeGrid)D.pushLightProbeGrid(A);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||et.intersectsSprite(A)){ne&&ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Mt);const Ge=we.update(A),Re=A.material;Re.visible&&B.push(A,Ge,Re,oe,ht.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||et.intersectsObject(A))){const Ge=we.update(A),Re=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ht.copy(A.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),ht.copy(Ge.boundingSphere.center)),ht.applyMatrix4(A.matrixWorld).applyMatrix4(Mt)),Array.isArray(Re)){const qe=Ge.groups;for(let Qe=0,ct=qe.length;Qe<ct;Qe++){const ut=qe[Qe],Ye=Re[ut.materialIndex];Ye&&Ye.visible&&B.push(A,Ge,Ye,oe,ht.z,ut)}}else Re.visible&&B.push(A,Ge,Re,oe,ht.z,null)}}const Pe=A.children;for(let Ge=0,Re=Pe.length;Ge<Re;Ge++)vr(Pe[Ge],$,oe,ne)}function ns(A,$,oe,ne){const{opaque:te,transmissive:Pe,transparent:Ge}=A;D.setupLightsView(oe),kt===!0&&Ie.setGlobalState(X.clippingPlanes,oe),ne&&Le.viewport(Y.copy(ne)),te.length>0&&Ki(te,$,oe),Pe.length>0&&Ki(Pe,$,oe),Ge.length>0&&Ki(Ge,$,oe),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function si(A,$,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ne.id]===void 0){const Ye=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ne.id]=new ji(1,1,{generateMipmaps:!0,type:Ye?gr:ti,minFilter:As,samples:Math.max(4,Pt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}const Pe=D.state.transmissionRenderTarget[ne.id],Ge=ne.viewport||Y;Pe.setSize(Ge.z*X.transmissionResolutionScale,Ge.w*X.transmissionResolutionScale);const Re=X.getRenderTarget(),qe=X.getActiveCubeFace(),Qe=X.getActiveMipmapLevel();X.setRenderTarget(Pe),X.getClearColor(k),ee=X.getClearAlpha(),ee<1&&X.setClearColor(16777215,.5),X.clear(),Rt&&Se.render(oe);const ct=X.toneMapping;X.toneMapping=Wi;const ut=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),D.setupLightsView(ne),kt===!0&&Ie.setGlobalState(X.clippingPlanes,ne),Ki(A,oe,ne),M.updateMultisampleRenderTarget(Pe),M.updateRenderTargetMipmap(Pe),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Tt=0,Wt=$.length;Tt<Wt;Tt++){const Kt=$[Tt],{object:Ut,geometry:an,material:Be,group:_n}=Kt;if(Be.side===dr&&Ut.layers.test(ne.layers)){const xt=Be.side;Be.side=jn,Be.needsUpdate=!0,is(Ut,oe,ne,an,Be,_n),Be.side=xt,Be.needsUpdate=!0,Ye=!0}}Ye===!0&&(M.updateMultisampleRenderTarget(Pe),M.updateRenderTargetMipmap(Pe))}X.setRenderTarget(Re,qe,Qe),X.setClearColor(k,ee),ut!==void 0&&(ne.viewport=ut),X.toneMapping=ct}function Ki(A,$,oe){const ne=$.isScene===!0?$.overrideMaterial:null;for(let te=0,Pe=A.length;te<Pe;te++){const Ge=A[te],{object:Re,geometry:qe,group:Qe}=Ge;let ct=Ge.material;ct.allowOverride===!0&&ne!==null&&(ct=ne),Re.layers.test(oe.layers)&&is(Re,$,oe,qe,ct,Qe)}}function is(A,$,oe,ne,te,Pe){A.onBeforeRender(X,$,oe,ne,te,Pe),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(X,$,oe,ne,A,Pe),te.transparent===!0&&te.side===dr&&te.forceSinglePass===!1?(te.side=jn,te.needsUpdate=!0,X.renderBufferDirect(oe,$,ne,te,A,Pe),te.side=Qr,te.needsUpdate=!0,X.renderBufferDirect(oe,$,ne,te,A,Pe),te.side=dr):X.renderBufferDirect(oe,$,ne,te,A,Pe),A.onAfterRender(X,$,oe,ne,te,Pe)}function yr(A,$,oe){$.isScene!==!0&&($=Bt);const ne=P.get(A),te=D.state.lights,Pe=D.state.shadowsArray,Ge=te.state.version,Re=ge.getParameters(A,te.state,Pe,$,oe,D.state.lightProbeGridArray),qe=ge.getProgramCacheKey(Re);let Qe=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?$.environment:null,ne.fog=$.fog;const ct=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=K.get(A.envMap||ne.environment,ct),ne.envMapRotation=ne.environment!==null&&A.envMap===null?$.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",It),Qe=new Map,ne.programs=Qe);let ut=Qe.get(qe);if(ut!==void 0){if(ne.currentProgram===ut&&ne.lightsStateVersion===Ge)return Sr(A,Re),ut}else Re.uniforms=ge.getUniforms(A),G!==null&&A.isNodeMaterial&&G.build(A,oe,Re),A.onBeforeCompile(Re,X),ut=ge.acquireProgram(Re,qe),Qe.set(qe,ut),ne.uniforms=Re.uniforms;const Ye=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=Ie.uniform),Sr(A,Re),ne.needsLights=gt(A),ne.lightsStateVersion=Ge,ne.needsLights&&(Ye.ambientLightColor.value=te.state.ambient,Ye.lightProbe.value=te.state.probe,Ye.directionalLights.value=te.state.directional,Ye.directionalLightShadows.value=te.state.directionalShadow,Ye.spotLights.value=te.state.spot,Ye.spotLightShadows.value=te.state.spotShadow,Ye.rectAreaLights.value=te.state.rectArea,Ye.ltc_1.value=te.state.rectAreaLTC1,Ye.ltc_2.value=te.state.rectAreaLTC2,Ye.pointLights.value=te.state.point,Ye.pointLightShadows.value=te.state.pointShadow,Ye.hemisphereLights.value=te.state.hemi,Ye.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ye.spotLightMatrix.value=te.state.spotLightMatrix,Ye.spotLightMap.value=te.state.spotLightMap,Ye.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=D.state.lightProbeGridArray.length>0,ne.currentProgram=ut,ne.uniformsList=null,ut}function rs(A){if(A.uniformsList===null){const $=A.currentProgram.getUniforms();A.uniformsList=uc.seqWithValue($.seq,A.uniforms)}return A.uniformsList}function Sr(A,$){const oe=P.get(A);oe.outputColorSpace=$.outputColorSpace,oe.batching=$.batching,oe.batchingColor=$.batchingColor,oe.instancing=$.instancing,oe.instancingColor=$.instancingColor,oe.instancingMorph=$.instancingMorph,oe.skinning=$.skinning,oe.morphTargets=$.morphTargets,oe.morphNormals=$.morphNormals,oe.morphColors=$.morphColors,oe.morphTargetsCount=$.morphTargetsCount,oe.numClippingPlanes=$.numClippingPlanes,oe.numIntersection=$.numClipIntersection,oe.vertexAlphas=$.vertexAlphas,oe.vertexTangents=$.vertexTangents,oe.toneMapping=$.toneMapping}function Us(A,$){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;L.setFromMatrixPosition($.matrixWorld);for(let oe=0,ne=A.length;oe<ne;oe++){const te=A[oe];if(te.texture!==null&&te.boundingBox.containsPoint(L))return te}return null}function ss(A,$,oe,ne,te){$.isScene!==!0&&($=Bt),M.resetTextureUnits();const Pe=$.fog,Ge=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?$.environment:null,Re=H===null?X.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:St.workingColorSpace,qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Qe=K.get(ne.envMap||Ge,qe),ct=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ut=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ye=!!oe.morphAttributes.position,Tt=!!oe.morphAttributes.normal,Wt=!!oe.morphAttributes.color;let Kt=Wi;ne.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Kt=X.toneMapping);const Ut=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,an=Ut!==void 0?Ut.length:0,Be=P.get(ne),_n=D.state.lights;if(kt===!0&&(st===!0||A!==q)){const Ft=A===q&&ne.id===Z;Ie.setState(ne,A,Ft)}let xt=!1;ne.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==_n.state.version||Be.outputColorSpace!==Re||te.isBatchedMesh&&Be.batching===!1||!te.isBatchedMesh&&Be.batching===!0||te.isBatchedMesh&&Be.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Be.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Be.instancing===!1||!te.isInstancedMesh&&Be.instancing===!0||te.isSkinnedMesh&&Be.skinning===!1||!te.isSkinnedMesh&&Be.skinning===!0||te.isInstancedMesh&&Be.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Be.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Be.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Be.instancingMorph===!1&&te.morphTexture!==null||Be.envMap!==Qe||ne.fog===!0&&Be.fog!==Pe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ie.numPlanes||Be.numIntersection!==Ie.numIntersection)||Be.vertexAlphas!==ct||Be.vertexTangents!==ut||Be.morphTargets!==Ye||Be.morphNormals!==Tt||Be.morphColors!==Wt||Be.toneMapping!==Kt||Be.morphTargetsCount!==an||!!Be.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Be.__version=ne.version);let Un=Be.currentProgram;xt===!0&&(Un=yr(ne,$,te),G&&ne.isNodeMaterial&&G.onUpdateProgram(ne,Un,Be));let Fn=!1,_t=!1,Zi=!1;const Dt=Un.getUniforms(),Xt=Be.uniforms;if(Le.useProgram(Un.program)&&(Fn=!0,_t=!0,Zi=!0),ne.id!==Z&&(Z=ne.id,_t=!0),Be.needsLights){const Ft=Us(D.state.lightProbeGridArray,te);Be.lightProbeGrid!==Ft&&(Be.lightProbeGrid=Ft,_t=!0)}if(Fn||q!==A){Le.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Dt.setValue(W,"projectionMatrix",A.projectionMatrix),Dt.setValue(W,"viewMatrix",A.matrixWorldInverse);const _i=Dt.map.cameraPosition;_i!==void 0&&_i.setValue(W,Lt.setFromMatrixPosition(A.matrixWorld)),Pt.logarithmicDepthBuffer&&Dt.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Dt.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,_t=!0,Zi=!0)}if(Be.needsLights&&(_n.state.directionalShadowMap.length>0&&Dt.setValue(W,"directionalShadowMap",_n.state.directionalShadowMap,M),_n.state.spotShadowMap.length>0&&Dt.setValue(W,"spotShadowMap",_n.state.spotShadowMap,M),_n.state.pointShadowMap.length>0&&Dt.setValue(W,"pointShadowMap",_n.state.pointShadowMap,M)),te.isSkinnedMesh){Dt.setOptional(W,te,"bindMatrix"),Dt.setOptional(W,te,"bindMatrixInverse");const Ft=te.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Dt.setValue(W,"boneTexture",Ft.boneTexture,M))}te.isBatchedMesh&&(Dt.setOptional(W,te,"batchingTexture"),Dt.setValue(W,"batchingTexture",te._matricesTexture,M),Dt.setOptional(W,te,"batchingIdTexture"),Dt.setValue(W,"batchingIdTexture",te._indirectTexture,M),Dt.setOptional(W,te,"batchingColorTexture"),te._colorsTexture!==null&&Dt.setValue(W,"batchingColorTexture",te._colorsTexture,M));const xi=oe.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&it.update(te,oe,Un),(_t||Be.receiveShadow!==te.receiveShadow)&&(Be.receiveShadow=te.receiveShadow,Dt.setValue(W,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&$.environment!==null&&(Xt.envMapIntensity.value=$.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=sT()),_t){if(Dt.setValue(W,"toneMappingExposure",X.toneMappingExposure),Be.needsLights&&Fs(Xt,Zi),Pe&&ne.fog===!0&&re.refreshFogUniforms(Xt,Pe),re.refreshMaterialUniforms(Xt,ne,De,Ve,D.state.transmissionRenderTarget[A.id]),Be.needsLights&&Be.lightProbeGrid){const Ft=Be.lightProbeGrid;Xt.probesSH.value=Ft.texture,Xt.probesMin.value.copy(Ft.boundingBox.min),Xt.probesMax.value.copy(Ft.boundingBox.max),Xt.probesResolution.value.copy(Ft.resolution)}uc.upload(W,rs(Be),Xt,M)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(uc.upload(W,rs(Be),Xt,M),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Dt.setValue(W,"center",te.center),Dt.setValue(W,"modelViewMatrix",te.modelViewMatrix),Dt.setValue(W,"normalMatrix",te.normalMatrix),Dt.setValue(W,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const Ft=ne.uniformsGroups;for(let _i=0,Di=Ft.length;_i<Di;_i++){const as=Ft[_i];he.update(as,Un),he.bind(as,Un)}}return Un}function Fs(A,$){A.ambientLightColor.needsUpdate=$,A.lightProbe.needsUpdate=$,A.directionalLights.needsUpdate=$,A.directionalLightShadows.needsUpdate=$,A.pointLights.needsUpdate=$,A.pointLightShadows.needsUpdate=$,A.spotLights.needsUpdate=$,A.spotLightShadows.needsUpdate=$,A.rectAreaLights.needsUpdate=$,A.hemisphereLights.needsUpdate=$}function gt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,$,oe){const ne=P.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),P.get(A.texture).__webglTexture=$,P.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,$){const oe=P.get(A);oe.__webglFramebuffer=$,oe.__useDefaultFramebuffer=$===void 0};const je=W.createFramebuffer();this.setRenderTarget=function(A,$=0,oe=0){H=A,se=$,le=oe;let ne=null,te=!1,Pe=!1;if(A){const Re=P.get(A);if(Re.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(W.FRAMEBUFFER,Re.__webglFramebuffer),Y.copy(A.viewport),ue.copy(A.scissor),de=A.scissorTest,Le.viewport(Y),Le.scissor(ue),Le.setScissorTest(de),Z=-1;return}else if(Re.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(Re.__hasExternalTextures)M.rebindTextures(A,P.get(A.texture).__webglTexture,P.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ct=A.depthTexture;if(Re.__boundDepthTexture!==ct){if(ct!==null&&P.has(ct)&&(A.width!==ct.image.width||A.height!==ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Pe=!0);const Qe=P.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[$])?ne=Qe[$][oe]:ne=Qe[$],te=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?ne=P.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?ne=Qe[oe]:ne=Qe,Y.copy(A.viewport),ue.copy(A.scissor),de=A.scissorTest}else Y.copy(pe).multiplyScalar(De).floor(),ue.copy(Ue).multiplyScalar(De).floor(),de=Ke;if(oe!==0&&(ne=je),Le.bindFramebuffer(W.FRAMEBUFFER,ne)&&Le.drawBuffers(A,ne),Le.viewport(Y),Le.scissor(ue),Le.setScissorTest(de),te){const Re=P.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+$,Re.__webglTexture,oe)}else if(Pe){const Re=$;for(let qe=0;qe<A.textures.length;qe++){const Qe=P.get(A.textures[qe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+qe,Qe.__webglTexture,oe,Re)}}else if(A!==null&&oe!==0){const Re=P.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Re.__webglTexture,oe)}Z=-1},this.readRenderTargetPixels=function(A,$,oe,ne,te,Pe,Ge,Re=0){if(!(A&&A.isWebGLRenderTarget)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(qe=qe[Ge]),qe){Le.bindFramebuffer(W.FRAMEBUFFER,qe);try{const Qe=A.textures[Re],ct=Qe.format,ut=Qe.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Re),!Pt.textureFormatReadable(ct)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(ut)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=A.width-ne&&oe>=0&&oe<=A.height-te&&W.readPixels($,oe,ne,te,z.convert(ct),z.convert(ut),Pe)}finally{const Qe=H!==null?P.get(H).__webglFramebuffer:null;Le.bindFramebuffer(W.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(A,$,oe,ne,te,Pe,Ge,Re=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(qe=qe[Ge]),qe)if($>=0&&$<=A.width-ne&&oe>=0&&oe<=A.height-te){Le.bindFramebuffer(W.FRAMEBUFFER,qe);const Qe=A.textures[Re],ct=Qe.format,ut=Qe.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Re),!Pt.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ye),W.bufferData(W.PIXEL_PACK_BUFFER,Pe.byteLength,W.STREAM_READ),W.readPixels($,oe,ne,te,z.convert(ct),z.convert(ut),0);const Tt=H!==null?P.get(H).__webglFramebuffer:null;Le.bindFramebuffer(W.FRAMEBUFFER,Tt);const Wt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await yv(W,Wt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ye),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Pe),W.deleteBuffer(Ye),W.deleteSync(Wt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,$=null,oe=0){const ne=Math.pow(2,-oe),te=Math.floor(A.image.width*ne),Pe=Math.floor(A.image.height*ne),Ge=$!==null?$.x:0,Re=$!==null?$.y:0;M.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,oe,0,0,Ge,Re,te,Pe),Le.unbindTexture()};const qn=W.createFramebuffer(),gi=W.createFramebuffer();this.copyTextureToTexture=function(A,$,oe=null,ne=null,te=0,Pe=0){let Ge,Re,qe,Qe,ct,ut,Ye,Tt,Wt;const Kt=A.isCompressedTexture?A.mipmaps[Pe]:A.image;if(oe!==null)Ge=oe.max.x-oe.min.x,Re=oe.max.y-oe.min.y,qe=oe.isBox3?oe.max.z-oe.min.z:1,Qe=oe.min.x,ct=oe.min.y,ut=oe.isBox3?oe.min.z:0;else{const Xt=Math.pow(2,-te);Ge=Math.floor(Kt.width*Xt),Re=Math.floor(Kt.height*Xt),A.isDataArrayTexture?qe=Kt.depth:A.isData3DTexture?qe=Math.floor(Kt.depth*Xt):qe=1,Qe=0,ct=0,ut=0}ne!==null?(Ye=ne.x,Tt=ne.y,Wt=ne.z):(Ye=0,Tt=0,Wt=0);const Ut=z.convert($.format),an=z.convert($.type);let Be;$.isData3DTexture?(M.setTexture3D($,0),Be=W.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(M.setTexture2DArray($,0),Be=W.TEXTURE_2D_ARRAY):(M.setTexture2D($,0),Be=W.TEXTURE_2D),Le.activeTexture(W.TEXTURE0),Le.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,$.flipY),Le.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),Le.pixelStorei(W.UNPACK_ALIGNMENT,$.unpackAlignment);const _n=Le.getParameter(W.UNPACK_ROW_LENGTH),xt=Le.getParameter(W.UNPACK_IMAGE_HEIGHT),Un=Le.getParameter(W.UNPACK_SKIP_PIXELS),Fn=Le.getParameter(W.UNPACK_SKIP_ROWS),_t=Le.getParameter(W.UNPACK_SKIP_IMAGES);Le.pixelStorei(W.UNPACK_ROW_LENGTH,Kt.width),Le.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Kt.height),Le.pixelStorei(W.UNPACK_SKIP_PIXELS,Qe),Le.pixelStorei(W.UNPACK_SKIP_ROWS,ct),Le.pixelStorei(W.UNPACK_SKIP_IMAGES,ut);const Zi=A.isDataArrayTexture||A.isData3DTexture,Dt=$.isDataArrayTexture||$.isData3DTexture;if(A.isDepthTexture){const Xt=P.get(A),xi=P.get($),Ft=P.get(Xt.__renderTarget),_i=P.get(xi.__renderTarget);Le.bindFramebuffer(W.READ_FRAMEBUFFER,Ft.__webglFramebuffer),Le.bindFramebuffer(W.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Di=0;Di<qe;Di++)Zi&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,P.get(A).__webglTexture,te,ut+Di),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,P.get($).__webglTexture,Pe,Wt+Di)),W.blitFramebuffer(Qe,ct,Ge,Re,Ye,Tt,Ge,Re,W.DEPTH_BUFFER_BIT,W.NEAREST);Le.bindFramebuffer(W.READ_FRAMEBUFFER,null),Le.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||P.has(A)){const Xt=P.get(A),xi=P.get($);Le.bindFramebuffer(W.READ_FRAMEBUFFER,qn),Le.bindFramebuffer(W.DRAW_FRAMEBUFFER,gi);for(let Ft=0;Ft<qe;Ft++)Zi?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Xt.__webglTexture,te,ut+Ft):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Xt.__webglTexture,te),Dt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,xi.__webglTexture,Pe,Wt+Ft):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,xi.__webglTexture,Pe),te!==0?W.blitFramebuffer(Qe,ct,Ge,Re,Ye,Tt,Ge,Re,W.COLOR_BUFFER_BIT,W.NEAREST):Dt?W.copyTexSubImage3D(Be,Pe,Ye,Tt,Wt+Ft,Qe,ct,Ge,Re):W.copyTexSubImage2D(Be,Pe,Ye,Tt,Qe,ct,Ge,Re);Le.bindFramebuffer(W.READ_FRAMEBUFFER,null),Le.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Dt?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Be,Pe,Ye,Tt,Wt,Ge,Re,qe,Ut,an,Kt.data):$.isCompressedArrayTexture?W.compressedTexSubImage3D(Be,Pe,Ye,Tt,Wt,Ge,Re,qe,Ut,Kt.data):W.texSubImage3D(Be,Pe,Ye,Tt,Wt,Ge,Re,qe,Ut,an,Kt):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Pe,Ye,Tt,Ge,Re,Ut,an,Kt.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Pe,Ye,Tt,Kt.width,Kt.height,Ut,Kt.data):W.texSubImage2D(W.TEXTURE_2D,Pe,Ye,Tt,Ge,Re,Ut,an,Kt);Le.pixelStorei(W.UNPACK_ROW_LENGTH,_n),Le.pixelStorei(W.UNPACK_IMAGE_HEIGHT,xt),Le.pixelStorei(W.UNPACK_SKIP_PIXELS,Un),Le.pixelStorei(W.UNPACK_SKIP_ROWS,Fn),Le.pixelStorei(W.UNPACK_SKIP_IMAGES,_t),Pe===0&&$.generateMipmaps&&W.generateMipmap(Be),Le.unbindTexture()},this.initRenderTarget=function(A){P.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),Le.unbindTexture()},this.resetState=function(){se=0,le=0,H=null,Le.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=r=>{const e=lT(r);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},uT=dt.createContext({}),dT=()=>dt.useContext(uT),fT=dt.forwardRef(({color:r,size:e,strokeWidth:t,absoluteStrokeWidth:s,className:o="",children:l,iconNode:u,...f},h)=>{const{size:p=24,strokeWidth:v=2,absoluteStrokeWidth:y=!1,color:g="currentColor",className:S=""}=dT()??{},w=s??y?Number(t??v)*24/Number(e??p):t??v;return dt.createElement("svg",{ref:h,...Gd,width:e??p??Gd.width,height:e??p??Gd.height,stroke:r??g,strokeWidth:w,className:O0("lucide",S,o),...!l&&!cT(f)&&{"aria-hidden":"true"},...f},[...u.map(([C,_])=>dt.createElement(C,_)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=(r,e)=>{const t=dt.forwardRef(({className:s,...o},l)=>dt.createElement(fT,{ref:l,iconNode:e,className:O0(`lucide-${oT(qg(r))}`,`lucide-${r}`,s),...o}));return t.displayName=qg(r),t};/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],pT=Yt("activity",hT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["path",{d:"M12 6.528V3a1 1 0 0 1 1-1h0",key:"11qiee"}],["path",{d:"M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21",key:"110c12"}]],gT=Yt("apple",mT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],_T=Yt("calendar-days",xT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],yT=Yt("camera",vT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],MT=Yt("circle-check",ST);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],TT=Yt("chevron-down",ET);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Rs=Yt("clipboard-list",wT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],nh=Yt("dumbbell",bT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],ih=Yt("flame",AT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],rh=Yt("gauge",CT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]],k0=Yt("goal",RT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],NT=Yt("leaf",PT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],DT=Yt("boxes",LT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],UT=Yt("list-checks",IT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=[["path",{d:"M5 12h14",key:"1ays0h"}]],bc=Yt("minus",FT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m16 17 2 2 4-4",key:"uh5qu3"}],["path",{d:"M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",key:"kpkbpo"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]],kT=Yt("package-check",OT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ac=Yt("plus",BT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],To=Yt("rotate-ccw",zT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],GT=Yt("settings-2",VT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]],WT=Yt("shopping-basket",HT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],B0=Yt("sparkles",jT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],qT=Yt("timer",XT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],sh=Yt("utensils",$T);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ah=Yt("x",YT);/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ZT=Yt("zap",KT),es={p:0,c:0,f:0,kcal:0};function $r(r,e,t){return Math.max(e,Math.min(t,Number(r)||0))}function fr(r,e=1){return!Number.isFinite(Number(r))||Number(r)<=0?0:Math.max(0,Math.round(Number(r)/e)*e)}function z0(r=es){return Number.isFinite(r.kcal)?r.kcal:(r.p||0)*4+(r.c||0)*4+(r.f||0)*9}function oh(r=es){return{...r,kcal:z0(r)}}function Bf(...r){return oh(r.reduce((e,t)=>({p:e.p+((t==null?void 0:t.p)||0),c:e.c+((t==null?void 0:t.c)||0),f:e.f+((t==null?void 0:t.f)||0),kcal:e.kcal+z0(t||es)}),{...es}))}function wo(r=es,e=0){return oh({p:(r.p||0)*e,c:(r.c||0)*e,f:(r.f||0)*e})}function QT(r,e){const t=fr($r(e,0,r.max??1/0),r.step||1);return{...r,qty:t,macro:wo(r.unitMacro,t)}}function zf(r,e){const t=r.kcal-e.kcal,s=Math.pow(t/(t>0?150:125),2)*8+Math.max(0,t-220)*.28,o=Math.max(0,e.p-r.p),l=Math.max(0,r.p-e.p),u=r.c-e.c,f=Math.max(0,e.f-r.f),h=Math.max(0,r.f-e.f);return s+Math.pow(o/4,2)*28+Math.pow(l/12,2)*4+Math.pow(u/14,2)*10+Math.pow(f/4,2)*24+Math.pow(h/7,2)*12}function JT(r){const e=r.step||1,t=Math.max(0,r.max??r.qty??e*20),s=Math.floor(t/e),o=new Set([0,fr(r.qty||0,e),fr(t,e)]);if(s<=90)for(let l=0;l<=s;l+=1)o.add(fr(l*e,e));else{for(let l=-14;l<=14;l+=1)o.add(fr((r.qty||0)+l*e,e));[.15,.25,.35,.5,.65,.8,1].forEach(l=>o.add(fr(t*l,e)))}return[...o].filter(l=>l>=0&&l<=t).sort((l,u)=>l-u)}function ew(r,e,t){const s=t.reduce((v,y)=>Bf(v,wo(y.unitMacro,y.max??0)),es),o=Bf(r,s),l=r.p>e.p?r.p-e.p:Math.max(0,e.p-o.p),u=r.c>e.c?r.c-e.c:Math.max(0,e.c-o.c),f=r.f>e.f?r.f-e.f:Math.max(0,e.f-o.f),h=Math.max(0,r.kcal-e.kcal-220),p=Math.max(0,e.kcal-o.kcal);return Math.pow(l/6,2)*30+Math.pow(u/22,2)*10+Math.pow(f/7,2)*20+Math.pow(h/110,2)*12+Math.pow(p/160,2)*8+zf(r,e)*.015}function tw(r,e,t,s={}){const o=r.filter(h=>h&&h.unitMacro&&(h.max??0)>0),l=s.beamWidth??520;let u=[{choices:[],macro:oh(e||es),rank:0}];o.forEach((h,p)=>{const v=o.slice(p+1),y=JT(h),g=[];u.forEach(S=>{y.forEach(w=>{const C=wo(h.unitMacro,w),_=Bf(S.macro,C),x=ew(_,t,v)+Math.abs(w-(h.qty||0))*5e-4;g.push({choices:[...S.choices,w],macro:_,rank:x})})}),g.sort((S,w)=>S.rank-w.rank),u=g.slice(0,l)});const f=u.reduce((h,p)=>zf(p.macro,t)<zf(h.macro,t)?p:h,u[0]);return o.map((h,p)=>QT(h,f.choices[p]||0)).filter(h=>h.qty>0)}function V0(r){return r.reduce((e,t)=>({...e,[t.key]:{enabled:t.defaultEnabled!==!1,target:t.defaultTarget??0,stock:t.defaultStock??0}}),{})}function Vf(r,e){const t=V0(e);return e.reduce((s,o)=>{const l=(r==null?void 0:r[o.key])||{},u=o.max??1/0;return s[o.key]={enabled:l.enabled??t[o.key].enabled,target:$r(l.target??t[o.key].target,0,u),stock:$r(l.stock??t[o.key].stock,0,u)},s},{})}function nw(r,e,t=7){const s=Vf(e,r),o=$r(t,1,21);return r.map(l=>{const u=s[l.key],f=l.max??1/0,h=$r(u.target,0,f),p=$r(fr(h*o/7,l.step||1),0,f),v=$r(fr(u.stock,l.step||1),0,f),y=u.enabled?$r(fr(Math.max(0,p-v),l.step||1),0,f):0,g=l.unitMacro||es;return{...l,enabled:u.enabled,weeklyTarget:h,targetQty:p,stockQty:v,buyQty:y,weeklyQty:y,qty:y,unitMacro:g,macro:wo(g,y),expectedMacro:wo(g,p),needState:u.enabled&&y>0?"need":"ok"}})}const lh=r=>`./assets/${r}`,ch=r=>lh(`generated/${r}`),$g={p:140,c:225,f:60,kcal:2e3},iw=2900,uh={pasta:{name:"意面 · Garlic oil",short:"意面",sub:"力量日最爽",unit:"g",step:10,perUnit:{p:.12,c:.71,f:.015},kcalUnit:3.55,color:"#ffb55c"},soba:{name:"荞麦面 · Soba",short:"荞麦",sub:"清爽低负担",unit:"g",step:10,perUnit:{p:.14,c:.66,f:.023},kcalUnit:3.44,color:"#9fb58f"},nissin:{name:"日清非油炸",short:"日清",sub:"懒人汤面",unit:"包",step:1,perUnit:{p:6.7,c:55,f:4.9},kcalUnit:291,color:"#ff766f"},pho:{name:"越南米粉",short:"米粉",sub:"低脂换口味",unit:"包",step:1,perUnit:{p:4,c:43,f:2},kcalUnit:210,color:"#7bd6d0"},bifun:{name:"纯干米粉",short:"干米粉",sub:"纯碳水补满",unit:"g",step:10,perUnit:{p:.06,c:.79,f:.005},kcalUnit:3.45,color:"#f7df77"}},G0={beef:{label:"牛肉切り落とし",short:"牛肉",tag:"raw · per g",unit:"g",step:10,p:.19,c:0,max:650,note:"脂肪按包装校准"},chicken:{label:"速食鸡胸",short:"鸡胸",tag:"per pack",unit:"块",step:1,p:22,c:1,f:2,max:6,note:"最稳高蛋白"},duck:{label:"合鸭胸去皮",short:"合鸭",tag:"100g serve",unit:"份",step:1,p:21,c:.5,f:6,max:4,note:"香但不太肥"},kfc:{label:"KFC 原味鸡",short:"KFC",tag:"per piece",unit:"块",step:1,p:18,c:8,f:14,max:5,note:"爽，但盐高"},oikos:{label:"Oikos 高蛋白酸奶",short:"Oikos",tag:"per cup",unit:"個",step:1,p:12,c:5,f:0,max:8,note:"零脂补蛋白"}},dh={egg_fried:{label:"煎蛋",short:"煎蛋",unit:"个",step:1,p:6,c:.4,f:7,max:6},sauce:{label:"ペペロン酱",short:"蒜油酱",unit:"包",step:1,p:.9,c:1.5,f:10,max:2},olive:{label:"橄榄油",short:"橄榄油",unit:"小勺",step:1,p:0,c:0,f:4.5,max:6},nuts:{label:"素焼きナッツ",short:"坚果",unit:"10g",step:1,p:2,c:2,f:5,max:5},avocado:{label:"アボカド",short:"牛油果",unit:"半个",step:1,p:1,c:4,f:15,max:2}},zi={banana:{label:"香蕉",unit:"根",step:1,max:4,p:1,c:27,f:.3},apple:{label:"苹果",unit:"个",step:1,max:3,p:.4,c:35,f:.3},kiwi:{label:"奇异果",unit:"个",step:1,max:4,p:1,c:14,f:.2},pineapple:{label:"切块菠萝 240g",unit:"盒",step:1,max:2,p:1.44,c:31.2,f:.24},yogurt:{label:"无糖酸奶",unit:"g",step:50,max:400,p:.036,c:.049,f:.03}},H0=[{key:"beef",tone:"red",source:"protein",sourceKey:"beef",label:"牛肉切り落とし",short:"牛肉",unit:"g",step:100,defaultTarget:1200,max:3e3},{key:"chicken",tone:"red",source:"protein",sourceKey:"chicken",label:"速食鸡胸",short:"鸡胸",unit:"块",step:1,defaultTarget:3,max:12},{key:"oikos",tone:"red",source:"protein",sourceKey:"oikos",label:"Oikos 高蛋白酸奶",short:"Oikos",unit:"個",step:1,defaultTarget:4,max:14},{key:"pasta",tone:"green",source:"carb",sourceKey:"pasta",label:"干意面",short:"意面",unit:"g",step:100,defaultTarget:500,max:2e3},{key:"soba",tone:"green",source:"carb",sourceKey:"soba",label:"荞麦面",short:"荞麦",unit:"g",step:100,defaultTarget:400,max:1600},{key:"nissin",tone:"green",source:"carb",sourceKey:"nissin",label:"日清非油炸",short:"日清",unit:"包",step:1,defaultTarget:2,max:10},{key:"pineapple",tone:"gold",source:"extra",sourceKey:"pineapple",label:"菠萝 240g",short:"菠萝",unit:"盒",step:1,defaultTarget:2,max:8},{key:"banana",tone:"gold",source:"extra",sourceKey:"banana",label:"香蕉",short:"香蕉",unit:"根",step:1,defaultTarget:4,max:14},{key:"apple",tone:"gold",source:"extra",sourceKey:"apple",label:"苹果",short:"苹果",unit:"个",step:1,defaultTarget:2,max:10},{key:"egg_fried",tone:"amber",source:"fat",sourceKey:"egg_fried",label:"鸡蛋",short:"鸡蛋",unit:"个",step:1,defaultTarget:6,max:20},{key:"sauce",tone:"amber",source:"fat",sourceKey:"sauce",label:"ペペロン酱",short:"蒜油酱",unit:"包",step:1,defaultTarget:3,max:12},{key:"nuts",tone:"amber",source:"fat",sourceKey:"nuts",label:"素焼きナッツ",short:"坚果",unit:"10g",step:1,defaultTarget:4,max:20}],W0={chicken:{label:"鸡胸",unit:"块",step:1,max:10,p:22,c:1,f:2},egg:{label:"全蛋",unit:"个",step:1,max:10,p:6,c:.5,f:5},oikos:{label:"Oikos",unit:"個",step:1,max:6,p:12,c:5,f:0},onigiri:{label:"饭团",unit:"个",step:1,max:6,p:3,c:39,f:.5},nissin:{label:"日清面",unit:"包",step:1,max:4,p:6.7,c:55,f:4.9},rice:{label:"米饭",unit:"g",step:50,max:1e3,p:.026,c:.28,f:.003},beef:{label:"牛肉",unit:"g",step:50,max:600,p:.19,c:0,f:.072},pasta:{label:"干意面",unit:"g",step:50,max:300,p:.12,c:.71,f:.015},banana:{label:"香蕉",unit:"根",step:1,max:4,p:1,c:27,f:.25}},wa={chicken:{label:"鸡胸",unit:"块",step:1,max:5,p:22,c:1,f:2},eggs:{label:"全蛋",unit:"个",step:1,max:6,p:6,c:.5,f:5},banana:{label:"香蕉",unit:"根",step:1,max:4,p:1,c:27,f:.25},pineapple:{label:"菠萝 240g",unit:"盒",step:1,max:2,p:1.44,c:31.2,f:.24},oikos:{label:"Oikos",unit:"個",step:1,max:5,p:12,c:5,f:0}},Zr={tomato:{label:"无盐番茄汁",sub:"K 600 / 200ml",p:1.8,c:7.1,f:0,kcal:39,k:600,na:5},yasai:{label:"野菜一日",sub:"K 740 / 200ml",p:3,c:14.5,f:0,kcal:75,k:740,na:80},none:{label:"不补钾",sub:"今天省了",p:0,c:0,f:0,kcal:0,k:0,na:0}},j0=[{id:"burger",label:"汉堡 + 薯条",kcal:980},{id:"ramen",label:"拉面 + 饭",kcal:1200},{id:"sushi",label:"回转寿司 12 皿",kcal:1050},{id:"pizza",label:"Pizza 半张",kcal:1150},{id:"dessert",label:"甜品奶茶",kcal:620},{id:"katsu",label:"炸猪排咖喱",kcal:1450}],rw=[{id:"plan",label:"今日",icon:sh},{id:"detail",label:"明细",icon:rh},{id:"shop",label:"采购",icon:WT},{id:"cheat",label:"放松",icon:ih}],mi={p:0,c:0,f:0,kcal:0},dn=(r,e,t)=>Math.max(e,Math.min(t,Number(r)||0)),Gt=(r,e=0)=>Number((Number(r)||0).toFixed(e)),Ca=r=>r.kcal??r.p*4+r.c*4+r.f*9,bo=r=>({...r,kcal:Ca(r)}),Wn=(...r)=>bo(r.reduce((e,t)=>({p:e.p+((t==null?void 0:t.p)||0),c:e.c+((t==null?void 0:t.c)||0),f:e.f+((t==null?void 0:t.f)||0),kcal:e.kcal+Ca(t||mi)}),{...mi}));function hi(r,e){return bo({p:r.p*e,c:r.c*e,f:r.f*e})}async function X0(r){var t;if((t=navigator.clipboard)!=null&&t.writeText&&window.isSecureContext)try{await navigator.clipboard.writeText(r);return}catch{}const e=document.createElement("textarea");e.value=r,e.setAttribute("readonly",""),e.style.position="fixed",e.style.left="-9999px",e.style.top="0",e.style.fontSize="16px",document.body.appendChild(e),e.focus(),e.select(),e.setSelectionRange(0,r.length);try{if(!document.execCommand("copy"))throw new Error("copy command failed")}finally{document.body.removeChild(e)}}function q0(r){return Object.entries(r).filter(([e,t])=>wa[e]&&t>0)}function sw(r){const e=q0(r);return e.length?e.map(([t,s])=>`${wa[t].label} ${Gt(s)}${wa[t].unit}`).join(" / "):"不吃"}function aw(r,e){const t=Zr[r]||Zr.none;return r==="none"||e<=0?"不喝":`${t.label} ${Gt(e)}ml`}function $0(r,e,t){return q0(r).length>0||e!=="none"&&t>0}function Y0(r,e,t){return`${sw(r)} · ${aw(e,t)}`}function ow(r,e){return r.map(t=>{const s=t.qty,o=e[t.key]||0,l=t.max??1/0,u=dn(s+o,0,l),f=Gt(u-s,t.step<1?1:2);return{...t,baseQty:s,qty:u,adjustment:f,macro:hi(t.unitMacro,u)}})}function yo(r,e){return!Number.isFinite(r)||r<=0?0:Math.max(0,Math.round(r/e)*e)}function lw(r){return bo({p:r*.31/4,c:r*.49/4,f:r*.2/9,kcal:r})}function K0(r,e){const t=G0[r];return{...t,f:r==="beef"?e*.8/100:t.f}}function cw(r,e){return r.source==="protein"?K0(r.sourceKey,e):r.source==="carb"?uh[r.sourceKey].perUnit:r.source==="extra"?zi[r.sourceKey]:r.source==="fat"?dh[r.sourceKey]:mi}function uw(r){return H0.map(e=>({...e,unitMacro:cw(e,r)}))}function dw(r,e){const[t,s]=dt.useState(()=>{const o=Number(localStorage.getItem(r));return Number.isFinite(o)&&o>0?o:e});return dt.useEffect(()=>{localStorage.setItem(r,String(t))},[r,t]),[t,s]}function fw(r,e){const t=()=>typeof e=="function"?e():e,[s,o]=dt.useState(()=>{try{const l=localStorage.getItem(r);return l?JSON.parse(l):t()}catch{return t()}});return dt.useEffect(()=>{localStorage.setItem(r,JSON.stringify(s))},[r,s]),[s,o]}function hw({tone:r="warm"}){const e=dt.useRef(null);return dt.useEffect(()=>{const t=e.current;if(!t)return;const s=()=>{const O=document.createElement("canvas");O.dataset.engine="2d-fallback";const E=O.getContext("2d");t.appendChild(O);const U=()=>{const{width:le,height:H}=t.getBoundingClientRect(),Z=Math.min(window.devicePixelRatio||1,2);O.width=Math.max(1,Math.floor(le*Z)),O.height=Math.max(1,Math.floor(H*Z)),O.style.width=`${Math.max(1,le)}px`,O.style.height=`${Math.max(1,H)}px`,E.setTransform(Z,0,0,Z,0,0)};U();const X=new ResizeObserver(U);X.observe(t);let I=0;const G=Array.from({length:46},(le,H)=>({angle:H*.72,radius:70+H%9*22,color:["#c8a86a","#6f8f7a","#d9d0bd"][H%3],size:2.5+H%5})),se=()=>{I=window.requestAnimationFrame(se);const{width:le,height:H}=O.getBoundingClientRect();E.clearRect(0,0,le,H);const Z=E.createRadialGradient(le*.55,H*.28,0,le*.55,H*.28,Math.max(le,H)*.75);Z.addColorStop(0,"rgba(200,168,106,0.10)"),Z.addColorStop(.45,"rgba(111,143,122,0.08)"),Z.addColorStop(1,"rgba(0,0,0,0)"),E.fillStyle=Z,E.fillRect(0,0,le,H),E.globalCompositeOperation="screen",G.forEach(q=>{q.angle+=.006;const Y=le*.5+Math.cos(q.angle)*q.radius*(le/390),ue=H*.46+Math.sin(q.angle)*q.radius*.52*(H/844);E.beginPath(),E.fillStyle=q.color,E.globalAlpha=.24,E.arc(Y,ue,q.size,0,Math.PI*2),E.fill()}),E.globalAlpha=1,E.globalCompositeOperation="source-over"};return se(),()=>{window.cancelAnimationFrame(I),X.disconnect(),t.removeChild(O)}},o=document.createElement("canvas");let l=!1;try{l=!!(o.getContext("webgl2")||o.getContext("webgl"))}catch{l=!1}if(!l)return s();const u=new Fv,f=new ei(45,1,.1,100);f.position.set(0,0,9);let h;try{h=new aT({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{return s()}h.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),h.setClearColor(0,0),t.appendChild(h.domElement);const p=new _o;u.add(p),u.add(new ly(16777215,.75));const v=new Sg(16760179,3.4,22);v.position.set(4,2,6),u.add(v);const y=new Sg(9752970,2.1,18);y.position.set(-5,-2,4),u.add(y);const g=r==="cool"?[7311226,12165996,14274749]:[13150314,7311226,14274749],S=new th(.16,32,32),w=g.flatMap((O,E)=>{const U=new iy({color:O,emissive:O,emissiveIntensity:.22,roughness:.22,metalness:.24});return Array.from({length:9},(X,I)=>{const G=new qi(S,U),se=I/9*Math.PI*2+E*.55,le=2.05+E*.68;return G.position.set(Math.cos(se)*le,Math.sin(se)*le*.48,E*-.4),G.userData={angle:se,radius:le,band:E,speed:.004+E*.0015},p.add(G),G})});[2.05,2.75,3.45].forEach((O,E)=>{const X=new Zv(0,0,O,O*.48,0,Math.PI*2).getPoints(120).map(le=>new Q(le.x,le.y,-.5+E*-.2)),I=new Xn().setFromPoints(X),G=new S0({color:g[E],transparent:!0,opacity:.14}),se=new qv(I,G);se.rotation.z=E*.34,p.add(se)});const C=120,_=new Xn,x=new Float32Array(C*3);for(let O=0;O<C;O+=1){const E=O*1.618,U=1.5+O*37%100/22;x[O*3]=Math.cos(E)*U,x[O*3+1]=Math.sin(E*.9)*U*.42,x[O*3+2]=-2.2-O*17%80/32}_.setAttribute("position",new Ni(x,3));const R=new $v(_,new M0({color:14206883,size:.035,transparent:!0,opacity:.22}));u.add(R);const N=()=>{const{width:O,height:E}=t.getBoundingClientRect();h.setSize(Math.max(1,O),Math.max(1,E),!1),f.aspect=Math.max(1,O)/Math.max(1,E),f.updateProjectionMatrix()};N();const L=new ResizeObserver(N);L.observe(t);let B=0;const D=()=>{B=window.requestAnimationFrame(D),p.rotation.z+=.0018,p.rotation.y=Math.sin(Date.now()*35e-5)*.18,R.rotation.z-=9e-4,w.forEach(O=>{O.userData.angle+=O.userData.speed;const{angle:E,radius:U,band:X}=O.userData;O.position.x=Math.cos(E)*U,O.position.y=Math.sin(E)*U*.48,O.position.z=-.25-X*.42+Math.sin(E*2)*.12}),h.render(u,f)};return D(),()=>{window.cancelAnimationFrame(B),L.disconnect(),h.dispose(),S.dispose(),_.dispose(),t.removeChild(h.domElement)}},[r]),T.jsx("div",{ref:e,className:"pointer-events-none fixed inset-0 -z-10 opacity-45","data-three-orbit":!0})}function pw(){const[r,e]=dt.useState("plan"),[t,s]=dt.useState($g),[o,l]=dw("cutting:tdee",iw),[u,f]=dt.useState("quick"),[h,p]=dt.useState(800),[v,y]=dt.useState({}),[g,S]=dt.useState("pasta"),[w,C]=dt.useState(["beef"]),[_,x]=dt.useState(["sauce","egg_fried"]),[R,N]=dt.useState({}),[L,B]=dt.useState(13),[D,O]=dt.useState({}),[E,U]=dt.useState("tomato"),[X,I]=dt.useState(400),[G,se]=dt.useState(6.5),[le,H]=dt.useState(2e3),[Z,q]=dt.useState(7),[Y,ue]=fw("cutting:shopPlan:v1",()=>V0(H0)),[de,k]=dt.useState(!1),[ee,Fe]=dt.useState(!1),[Ve,De]=dt.useState(!1),[ae,ve]=dt.useState({}),[pe,Ue]=dt.useState({name:"手动加餐",p:0,c:0,f:0,kcal:0}),[Ke,et]=dt.useState({}),[kt,st]=dt.useState("idle"),[Mt,Lt]=dt.useState(""),[ht,Bt]=dt.useState(!1),Rt=dt.useRef(0),rn=(ge,re,fe,Ne=1/0)=>{ge(Ie=>{const Te=dn(fe,0,Ne),Se={...Ie};return Te>0?Se[re]=Te:delete Se[re],Se})},W=ge=>{C(re=>re.includes(ge)?re.length>1?re.filter(fe=>fe!==ge):re:[...re,ge])},zt=ge=>{x(re=>re.includes(ge)?re.filter(fe=>fe!==ge):[...re,ge])},Je=dt.useMemo(()=>{var ss,Fs;const ge=Object.entries(v).reduce((gt,[je,qn])=>Wn(gt,hi(W0[je],qn)),mi),re=u==="tally"&&ge.kcal>0?ge:lw(h),fe=Object.entries(D).reduce((gt,[je,qn])=>Wn(gt,hi(wa[je],qn)),mi),Ne=Zr[E]||Zr.none,Ie=bo(hi(Ne,X/200));Ie.kcal=Ne.kcal*(X/200);const Te=bo(pe),Se=Wn(re,fe,Ie,Te),it=Object.entries(R).filter(([gt,je])=>zi[gt]&&je>0),at=it.reduce((gt,[je,qn])=>Wn(gt,hi(zi[je],qn)),mi),pt=it.map(([gt,je])=>({key:`extra-${gt}`,name:zi[gt].label,qty:je,unit:zi[gt].unit,step:zi[gt].step,max:zi[gt].max,unitMacro:zi[gt],macro:hi(zi[gt],je),tone:"gold"})),z=Wn(Se,at),be=Math.max(0,t.p-z.p),he=w.map(gt=>{const je=K0(gt,L),qn=be/Math.max(1,w.length)/je.p,gi=dn(yo(qn,je.step),0,je.max);return{key:gt,name:je.label,short:je.short,qty:gi,unit:je.unit,step:je.step,max:je.max,unitMacro:je,macro:hi(je,gi),tone:"red"}}),Oe=he.reduce((gt,je)=>Wn(gt,je.macro),mi),Ce=Math.max(0,t.f-z.f-Oe.f),_e=_.length?_:[],We=_e.map(gt=>{const je=dh[gt],qn=Ce/Math.max(1,_e.length)/je.f,gi=dn(yo(qn,je.step),0,je.max);return{key:`fat-${gt}`,name:je.label,short:je.short,qty:gi,unit:je.unit,step:je.step,max:je.max,unitMacro:je,macro:hi(je,gi),tone:"amber"}}),ot=We.reduce((gt,je)=>Wn(gt,je.macro),mi),It=Wn(z,Oe,ot),Et=Math.max(0,t.kcal-It.kcal),Ht=uh[g],Pn=Ht.unit==="包"?8:420,ii=dn(yo(Et/Ht.kcalUnit,Ht.step),0,Pn),_r=hi(Ht.perUnit,ii),Yi={key:`carb-${g}`,name:Ht.name,short:Ht.short,qty:ii,unit:Ht.unit,step:Ht.step,max:Pn,unitMacro:Ht.perUnit,macro:_r,tone:"green"},Li=tw([...he,...We,Yi],z,t),ri=ow([...Li.filter(gt=>gt.tone==="red"),...Li.filter(gt=>gt.tone==="amber"),...pt,...Li.filter(gt=>gt.tone==="green")],ae),vr=ri.reduce((gt,je)=>Wn(gt,je.macro),mi),ns=Wn(Se,vr),si=Math.round(o-ns.kcal),Ki=(((ss=Zr[E])==null?void 0:ss.k)||0)*(X/200),is=(((Fs=Zr[E])==null?void 0:Fs.na)||0)*(X/200),yr=G*393+is,rs=le+Ki,Sr=nw(uw(L),Y,Z),Us=Sr.reduce((gt,je)=>Wn(gt,je.macro),mi);return{lunch:re,pre:fe,drink:Ie,snack:Te,beforeDinner:Se,dinner:vr,dinnerItems:ri,total:ns,deficit:si,potassium:rs,sodium:yr,shopping:Sr,shoppingMacro:Us,carb:Ht}},[L,g,ae,E,X,R,_,le,h,u,D,G,Z,Y,pe,v,t,o,w]),Pt=j0.reduce((ge,re)=>ge+(Ke[re.id]||0)*re.kcal,0),Le=Math.round(Je.total.kcal+Pt-o),Vt=$0(D,E,X),P=Y0(D,E,X),M=pe.kcal>0||pe.p>0||pe.c>0||pe.f>0,K=(ge,re)=>{ve(fe=>{const Ne=ge.baseQty??ge.qty,Ie=dn(ge.qty+re,0,ge.max??1/0),Te=Gt(Ie-Ne,ge.step<1?1:2),Se={...fe};return Te!==0?Se[ge.key]=Te:delete Se[ge.key],Se})},me=()=>{s($g),p(800),y({}),S("pasta"),C(["beef"]),x(["sauce","egg_fried"]),N({}),B(13),O({}),U("tomato"),I(400),ve({}),Ue({name:"手动加餐",p:0,c:0,f:0,kcal:0})};dt.useEffect(()=>()=>window.clearTimeout(Rt.current),[]);const xe=()=>({date:new Date().toISOString().slice(0,10),targets:t,lunch:Je.lunch,pre:Je.pre,drink:{key:E,ml:X,macro:Je.drink},snack:pe,dinnerAdjustments:ae,dinner:{items:Je.dinnerItems,macro:Je.dinner},total:Je.total,deficit:Je.deficit}),we=async()=>{const ge={...xe(),copiedAt:new Date().toISOString()},re=JSON.stringify(ge,null,2);Lt(re),window.clearTimeout(Rt.current),st("copying");try{await X0(re),Bt(!1),st("copied")}catch(fe){console.error(fe),st("failed"),Bt(!0)}Rt.current=window.setTimeout(()=>st("idle"),1800)};return T.jsxs("div",{className:"min-h-screen overflow-hidden text-[#eee8dc]",children:[T.jsx(hw,{tone:r==="cheat"?"cool":"warm"}),T.jsx("div",{className:"premium-app-bg fixed inset-0 -z-20"}),T.jsx("div",{className:"premium-grid-bg fixed inset-0 -z-10 opacity-20"}),T.jsxs("div",{className:"mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-28 pt-4 sm:px-6 lg:px-8",children:[T.jsxs("header",{className:"premium-header-shadow sticky top-3 z-40 flex items-center justify-between gap-2 rounded-lg border border-[#d8c7a3]/12 bg-[#090b0a]/75 px-2 py-2 backdrop-blur-2xl sm:gap-3 sm:px-3",children:[T.jsxs("button",{onClick:()=>e("plan"),className:"flex min-w-0 items-center gap-2 text-left",children:[T.jsx("span",{className:"grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#d8c7a3] text-[#11110d]",children:T.jsx(B0,{className:"h-4 w-4"})}),T.jsxs("span",{className:"block min-w-0",children:[T.jsx("span",{className:"block truncate font-display text-base leading-none text-[#f2eadb]",children:"Cutting Lab"}),T.jsx("span",{className:"mt-1 block truncate text-[10px] uppercase tracking-[0.24em] text-[#918a7c]",children:"daily console"})]})]}),T.jsx("nav",{className:"ml-auto hidden shrink-0 grid-cols-4 rounded-lg border border-[#d8c7a3]/10 bg-[#151612]/70 p-1 lg:grid",children:T.jsx(Yg,{tab:r,setTab:e,mode:"top"})})]}),r==="plan"&&T.jsx(mw,{model:Je,targets:t,onFuel:()=>Fe(!0),fuelActive:Vt,fuelSummary:P,onSnack:()=>De(!0),onCopy:we,copyStatus:kt}),r==="plan"&&T.jsx(gw,{model:Je,lunchMode:u,setLunchMode:f,lunchKcal:h,setLunchKcal:p,tally:v,setTally:y,setMapQty:rn,carbPlan:g,setCarbPlan:S,proteinKeys:w,toggleProtein:W,fatKeys:_,toggleFat:zt,extraCarbs:R,setExtraCarbs:N,beefFat:L,setBeefFat:B,advancedOpen:de,setAdvancedOpen:k,targets:t,setTargets:s,resetDefaults:me,onTuneDinner:K,resetDinnerAdjustments:()=>ve({})}),r==="detail"&&T.jsx(xw,{model:Je,targets:t,setTargets:s,tdee:o,setTdee:l,pre:D,setPre:O,setMapQty:rn,drinkKey:E,setDrinkKey:U,drinkMl:X,setDrinkMl:I,saltG:G,setSaltG:se,foodK:le,setFoodK:H}),r==="shop"&&T.jsx(_w,{model:Je,shopDays:Z,setShopDays:q,shopPlan:Y,setShopPlan:ue}),r==="cheat"&&T.jsx(Mw,{cheat:Ke,setCheat:et,cheatTotal:Pt,cheatSurplus:Le,tdee:o,dayKcal:Je.total.kcal})]}),T.jsx(Ew,{open:ee,setOpen:Fe,pre:D,setPre:O,setMapQty:rn,drinkKey:E,setDrinkKey:U,drinkMl:X,setDrinkMl:I,model:Je}),T.jsx(ww,{open:Ve,setOpen:De,snack:pe,setSnack:Ue,active:M,dinnerSummary:Je.dinnerItems.slice(0,4).map(ge=>`${ge.short||ge.name} ${Gt(ge.qty)}${ge.unit}`).join(" · ")}),T.jsx(Tw,{open:ht,setOpen:Bt,text:Mt,onCopied:()=>{Bt(!1),st("copied"),window.clearTimeout(Rt.current),Rt.current=window.setTimeout(()=>st("idle"),1800)}}),T.jsxs("button",{onClick:()=>De(!0),className:"premium-fab-shadow fixed bottom-5 right-5 z-50 hidden h-14 w-14 place-items-center rounded-lg border border-[#d8c7a3]/18 bg-[#d8c7a3] text-[#11110d] transition hover:-translate-y-0.5 lg:grid","aria-label":"零食加餐",children:[T.jsx(yT,{className:"h-6 w-6"}),M&&T.jsx("span",{className:"absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#6f8f7a]"})]}),T.jsx("nav",{className:"premium-nav-shadow fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 rounded-lg border border-[#d8c7a3]/12 bg-[#080908]/82 p-1 backdrop-blur-2xl lg:hidden",children:T.jsx(Yg,{tab:r,setTab:e,mode:"bottom"})})]})}function Yg({tab:r,setTab:e,mode:t}){return rw.map(s=>{const o=s.icon;return T.jsxs("button",{onClick:()=>e(s.id),className:`grid h-11 place-items-center rounded-md px-2 text-[11px] transition ${t==="top"?"min-w-20 grid-cols-[16px_auto] gap-1.5":"grid-rows-[18px_auto] gap-0.5"} ${r===s.id?"premium-nav-active-shadow bg-[#d8c7a3] text-[#11110d]":"text-[#918a7c] hover:bg-[#d8c7a3]/8 hover:text-[#eee8dc]"}`,"aria-label":s.label,children:[T.jsx(o,{className:"h-4 w-4"}),T.jsx("span",{children:s.label})]},s.id)})}function mw({model:r,targets:e,onFuel:t,fuelActive:s,fuelSummary:o,onSnack:l,onCopy:u,copyStatus:f}){const h=r.deficit>=650?"text-[#9fb58f]":r.deficit>=300?"text-[#d8c7a3]":"text-[#c77e68]",p={idle:{label:"复制",sub:"今日记录",icon:Rs},copying:{label:"复制中",sub:"clipboard",icon:Rs},copied:{label:"已复制",sub:"可直接粘贴",icon:MT},failed:{label:"复制失败",sub:"再点一次",icon:Rs}}[f]||{label:"复制",sub:"今日记录",icon:Rs};return T.jsxs("section",{className:"premium-hero-grid relative grid min-h-[72vh] items-end gap-6 py-4 lg:items-center",children:[T.jsxs("div",{className:"relative order-2 lg:order-1",children:[T.jsxs("div",{className:"mb-5 flex flex-wrap items-center gap-2",children:[T.jsxs("div",{className:"inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/12 bg-[#11130f]/78 px-3 py-2 text-xs text-[#bdb4a3] backdrop-blur-xl",children:[T.jsx(pT,{className:"h-4 w-4 text-[#9fb58f]"}),T.jsxs("span",{children:["83 kg · 25% BF · 16:8 IF · ",e.kcal," kcal target"]})]}),T.jsxs("button",{"data-home-fuel-button":!0,onClick:t,className:`inline-flex max-w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-xs backdrop-blur-xl transition hover:-translate-y-0.5 ${s?"border-[#9fb58f]/35 bg-[#9fb58f]/12 text-[#d8e7cf]":"border-[#d8c7a3]/12 bg-[#11130f]/78 text-[#bdb4a3] hover:border-[#d8c7a3]/32"}`,"aria-label":`补给：${o}`,children:[T.jsx(nh,{className:`h-4 w-4 shrink-0 ${s?"text-[#9fb58f]":"text-[#d8c7a3]"}`}),T.jsx("span",{className:"shrink-0 font-cjk font-semibold",children:"补给"}),T.jsx("span",{className:`rounded-md px-2 py-0.5 font-mono text-[10px] ${s?"bg-[#9fb58f] text-[#10110d]":"bg-[#d8c7a3]/10 text-[#cfc4b2]"}`,children:s?"ON":"OFF"}),T.jsx("span",{className:"hidden max-w-[260px] truncate text-[#918a7c] sm:inline",children:o})]})]}),T.jsxs("h1",{className:"max-w-2xl font-display text-4xl leading-[0.98] tracking-normal text-[#f3ecdc] sm:text-6xl lg:text-7xl",children:["今晚吃什么",T.jsx("span",{className:"block text-[#9fb58f]",children:"一眼定"})]}),T.jsx("p",{className:"mt-5 max-w-xl text-sm leading-7 text-[#bdb4a3] sm:text-base",children:"输入今天已经吃掉的部分，系统把晚餐、补给和赤字压成一张清楚的执行卡。少解释，直接吃。"}),T.jsxs("div",{className:"mt-6 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap",children:[T.jsx(Wd,{icon:ZT,label:"零食",onClick:l}),T.jsx(Wd,{icon:p.icon,label:p.label,sub:p.sub,onClick:u,dataAttr:"copy-plan-button"}),T.jsx(Wd,{icon:k0,label:`${r.deficit>0?"-":"+"}${Math.abs(r.deficit)}`,sub:"今日赤字"})]})]}),T.jsxs("div",{className:"relative order-1 lg:order-2",children:[T.jsx("div",{className:"absolute -inset-6 rounded-lg bg-[#d8c7a3]/8 blur-3xl"}),T.jsxs("div",{className:"premium-card-shadow relative overflow-hidden rounded-lg border border-[#d8c7a3]/12 bg-[#11130f]/86 backdrop-blur-xl",children:[T.jsx("img",{src:ch("protocol-hero-premium.jpg"),alt:"Cutting Lab dinner visual",className:"h-[280px] w-full object-cover object-center saturate-[0.92] contrast-[1.04] sm:h-[440px]"}),T.jsx("div",{className:"premium-hero-overlay absolute inset-0"}),T.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-4 sm:p-5",children:[T.jsxs("div",{className:"mb-3 flex items-end justify-between gap-3",children:[T.jsxs("div",{children:[T.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#d8c7a3]",children:"dinner"}),T.jsx("div",{className:"font-display text-4xl leading-none text-[#f3ecdc] sm:text-5xl",children:Math.round(r.dinner.kcal)}),T.jsx("div",{className:"mt-1 text-xs text-[#918a7c]",children:"晚餐热量"})]}),T.jsxs("div",{className:`rounded-lg border border-[#d8c7a3]/12 bg-[#090b0a]/72 px-3 py-2 text-right backdrop-blur ${h}`,children:[T.jsx("div",{className:"text-[10px] uppercase tracking-[0.2em] text-[#918a7c]",children:"今日赤字"}),T.jsxs("div",{className:"font-mono text-xl",children:[r.deficit>0?"-":"+",Math.abs(r.deficit)]})]})]}),T.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[T.jsx(ic,{label:"P",value:r.total.p,target:e.p,unit:"g"}),T.jsx(ic,{label:"C",value:r.total.c,target:e.c,unit:"g"}),T.jsx(ic,{label:"F",value:r.total.f,target:e.f,unit:"g"}),T.jsx(ic,{label:"Kcal",value:r.total.kcal,target:e.kcal,unit:""})]})]})]})]})]})}function gw(r){const{model:e,lunchMode:t,setLunchMode:s,lunchKcal:o,setLunchKcal:l,tally:u,setTally:f,setMapQty:h,carbPlan:p,setCarbPlan:v,proteinKeys:y,toggleProtein:g,fatKeys:S,toggleFat:w,extraCarbs:C,setExtraCarbs:_,beefFat:x,setBeefFat:R,advancedOpen:N,setAdvancedOpen:L,targets:B,setTargets:D,resetDefaults:O,onTuneDinner:E,resetDinnerAdjustments:U}=r,X=e.dinnerItems.some(I=>I.adjustment!==0);return T.jsxs("main",{className:"grid gap-6 lg:grid-cols-[0.9fr_1.1fr]",children:[T.jsxs("section",{className:"space-y-6",children:[T.jsxs(Pi,{eyebrow:"01 · 先记今天",title:"今天吃到哪了",icon:Rs,children:[T.jsx(bw,{value:t,onChange:s,options:[{value:"quick",label:"直接 kcal"},{value:"tally",label:"点选记账"}]}),t==="quick"?T.jsxs("div",{className:"mt-5",children:[T.jsx("label",{className:"text-[10px] uppercase tracking-[0.24em] text-[#918a7c]",children:"Lunch kcal"}),T.jsxs("div",{className:"mt-2 flex items-end gap-3",children:[T.jsx("input",{type:"number",value:o,onChange:I=>l(dn(I.target.value,0,5e3)),className:"w-36 border-b border-[#d8c7a3]/24 bg-transparent font-display text-6xl leading-none text-[#f2eadb] outline-none focus:border-[#d8c7a3]"}),T.jsx("span",{className:"pb-2 text-xs uppercase tracking-[0.2em] text-[#918a7c]",children:"kcal"})]}),T.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:[600,700,800,900,1e3].map(I=>T.jsx(_c,{active:o===I,onClick:()=>l(I),children:I},I))})]}):T.jsx("div",{className:"mt-5 grid gap-2 sm:grid-cols-2",children:Object.entries(W0).map(([I,G])=>T.jsx(yc,{label:G.label,meta:`每${G.step}${G.unit} · ${Math.round(Ca(hi(G,G.step)))} kcal`,value:u[I]||0,unit:G.unit,step:G.step,max:G.max,onChange:se=>h(f,I,se,G.max)},I))})]}),T.jsx(Pi,{eyebrow:"02 · 选个口味",title:"今晚想吃什么",icon:sh,children:T.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-5",children:Object.entries(uh).map(([I,G])=>T.jsxs("button",{onClick:()=>v(I),className:`rounded-lg border p-3 text-left transition ${p===I?"border-[#d8c7a3]/55 bg-[#d8c7a3]/12 text-[#f2eadb]":"border-[#d8c7a3]/10 bg-[#11130f]/72 text-[#918a7c] hover:border-[#d8c7a3]/28 hover:text-[#f2eadb]"}`,children:[T.jsx("div",{className:"font-cjk text-sm font-semibold",children:G.short}),T.jsx("div",{className:"mt-1 text-[10px] text-[#918a7c]",children:G.sub})]},I))})}),T.jsx(Aw,{open:N,onToggle:()=>L(!N),title:"高级配置",subtitle:"肉、油脂、水果、牛肉脂肪、目标值",children:T.jsxs("div",{className:"grid gap-5",children:[T.jsx(bs,{title:"晚餐蛋白",children:T.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries(G0).map(([I,G])=>T.jsx(vc,{active:y.includes(I),onClick:()=>g(I),title:G.short,meta:G.note},I))})}),T.jsx(bs,{title:"脂肪来源",children:T.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries(dh).map(([I,G])=>T.jsx(vc,{active:S.includes(I),onClick:()=>w(I),title:G.short,meta:`${G.f}g 脂 / ${G.unit}`,tone:"amber"},I))})}),T.jsx(bs,{title:"水果 / 酸奶",children:T.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(zi).map(([I,G])=>T.jsx(yc,{label:G.label,meta:`每${G.step}${G.unit} · C${Math.round(G.c*G.step)}`,value:C[I]||0,unit:G.unit,step:G.step,max:G.max,onChange:se=>h(_,I,se,G.max)},I))})}),T.jsxs(bs,{title:"牛肉脂肪",children:[T.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,9,13,18].map(I=>T.jsxs(_c,{active:x===I,onClick:()=>R(I),children:[I,"g"]},I))}),T.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[T.jsx("input",{type:"number",value:x,onChange:I=>R(dn(I.target.value,0,40)),className:"h-11 w-20 rounded-lg border border-[#d8c7a3]/12 bg-[#080908]/42 text-center font-mono text-lg text-[#f2eadb] outline-none focus:border-[#d8c7a3]"}),T.jsx("span",{className:"text-xs text-[#918a7c]",children:"脂質 g / 100g raw · 水煮按 80%"})]})]}),T.jsxs(bs,{title:"目标值",children:[T.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[["p","蛋白","g",500],["c","碳水","g",800],["f","脂肪","g",300],["kcal","热量","",8e3]].map(([I,G,se,le])=>T.jsx(Yr,{label:G,unit:se,value:B[I],onChange:H=>D(Z=>({...Z,[I]:dn(H,0,le)}))},I))}),T.jsxs("button",{onClick:O,className:"mt-3 inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/12 px-3 py-2 text-xs text-[#918a7c] transition hover:border-[#c77e68]/60 hover:text-[#c77e68]",children:[T.jsx(To,{className:"h-4 w-4"}),"重置默认"]})]})]})})]}),T.jsxs("section",{className:"space-y-6",children:[T.jsxs(Pi,{eyebrow:"03 · 今晚答案",title:"今晚就这样吃",icon:B0,children:[T.jsx("div",{className:"grid gap-2",children:e.dinnerItems.map((I,G)=>T.jsx(Rw,{item:I,index:G,onTune:E},I.key))}),X&&T.jsxs("button",{onClick:U,className:"mt-3 inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/12 px-3 py-2 text-xs text-[#918a7c] transition hover:border-[#c77e68]/60 hover:text-[#c77e68]",children:[T.jsx(To,{className:"h-4 w-4"}),"重置微调"]})]}),T.jsx(Pi,{eyebrow:"04 · 今日节奏",title:"看一眼就够",icon:rh,children:T.jsxs("div",{className:"space-y-3",children:[T.jsx(rc,{label:"蛋白",value:e.total.p,target:B.p,unit:"g",color:"#c77e68"}),T.jsx(rc,{label:"碳水",value:e.total.c,target:B.c,unit:"g",color:"#d8c7a3"}),T.jsx(rc,{label:"脂肪",value:e.total.f,target:B.f,unit:"g",color:"#9fb58f"}),T.jsx(rc,{label:"热量",value:e.total.kcal,target:B.kcal,unit:"kcal",color:"#8fb8ad"})]})})]})]})}function xw(r){const{model:e,targets:t,setTargets:s,tdee:o,setTdee:l,pre:u,setPre:f,setMapQty:h,drinkKey:p,setDrinkKey:v,drinkMl:y,setDrinkMl:g,saltG:S,setSaltG:w,foodK:C,setFoodK:_}=r,x=e.potassium>=e.sodium;return T.jsxs("main",{className:"grid gap-6 lg:grid-cols-[1fr_1fr]",children:[T.jsxs(Pi,{eyebrow:"今日账本",title:"吃进去的东西",icon:Rs,children:[T.jsx(go,{label:"午餐",macro:e.lunch}),T.jsx(go,{label:"训练前",macro:e.pre}),T.jsx(go,{label:"饮料/电解质",macro:e.drink}),T.jsx(go,{label:"零食加餐",macro:e.snack}),T.jsx(go,{label:"晚餐",macro:e.dinner,strong:!0})]}),T.jsx(Pi,{eyebrow:"目标设置",title:"目标和消耗",icon:k0,children:T.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-5",children:[[["p","蛋白","g",500],["c","碳水","g",800],["f","脂肪","g",300],["kcal","热量","",8e3]].map(([R,N,L,B])=>T.jsx(Yr,{label:N,unit:L,value:t[R],onChange:D=>s(O=>({...O,[R]:dn(D,0,B)}))},R)),T.jsx(Yr,{label:"TDEE",unit:"",value:o,onChange:R=>l(dn(R,0,9e3))})]})}),T.jsx(Pi,{eyebrow:"训练前",title:"垫一口也算进去",icon:nh,children:T.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(wa).map(([R,N])=>T.jsx(yc,{label:N.label,meta:`每${N.step}${N.unit} · ${Math.round(Ca(hi(N,N.step)))} kcal`,value:u[R]||0,unit:N.unit,step:N.step,max:N.max,onChange:L=>h(f,R,L,N.max)},R))})}),T.jsxs(Pi,{eyebrow:"电解质",title:"钾钠别太偏",icon:NT,children:[T.jsx("div",{className:"grid grid-cols-3 gap-2",children:Object.entries(Zr).map(([R,N])=>T.jsx(vc,{active:p===R,onClick:()=>v(R),title:N.label,meta:N.sub,tone:"green"},R))}),T.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[T.jsx(Yr,{label:"饮料",unit:"ml",value:y,onChange:R=>g(dn(R,0,2e3))}),T.jsx(Yr,{label:"盐",unit:"g",value:S,onChange:R=>w(dn(R,0,20))}),T.jsx(Yr,{label:"食物钾",unit:"mg",value:C,onChange:R=>_(dn(R,0,8e3))})]}),T.jsxs("div",{className:`mt-4 rounded-lg border p-4 ${x?"border-[#9fb58f]/30 bg-[#9fb58f]/10":"border-[#c77e68]/30 bg-[#c77e68]/10"}`,children:[T.jsxs("div",{className:"flex items-center justify-between gap-3",children:[T.jsx("span",{className:"text-sm text-zinc-300",children:"K / Na"}),T.jsx("span",{className:x?"text-[#9fb58f]":"text-[#c77e68]",children:x?"平衡":"钾偏低"})]}),T.jsxs("div",{className:"mt-2 text-xs text-[#918a7c]",children:["钾 ",Math.round(e.potassium)," mg · 钠 ",Math.round(e.sodium)," mg"]})]})]})]})}function _w({model:r,shopDays:e,setShopDays:t,setShopPlan:s}){const o=[{tone:"red",label:"蛋白主菜",caption:"肉、鸡胸、Oikos 先补齐",icon:nh,accent:"#c77e68"},{tone:"green",label:"主食碳水",caption:"按一周期望备货",icon:sh,accent:"#9fb58f"},{tone:"gold",label:"水果加料",caption:"菠萝 240g、香蕉、苹果",icon:gT,accent:"#d8c7a3"},{tone:"amber",label:"油脂口味",caption:"蛋、酱、坚果和风味",icon:ih,accent:"#c8a86a"}],l={red:0,green:1,gold:2,amber:3},u=r.shopping.filter(C=>C.enabled),f=u.filter(C=>C.buyQty>0),h=u.filter(C=>C.buyQty<=0),p=o.map(C=>({...C,items:r.shopping.filter(_=>_.tone===C.tone)})).filter(C=>C.items.length>0),v=[...f].sort((C,_)=>(l[C.tone]??9)-(l[_.tone]??9)||_.buyQty-C.buyQty).slice(0,4),y=f.reduce((C,_)=>Wn(C,_.macro),mi),g=u.reduce((C,_)=>Wn(C,_.expectedMacro),mi),S=(C,_)=>{s(x=>{const R=Vf(x,r.shopping);return{...R,[C]:{...R[C],..._}}})},w=()=>{s(C=>{const _=Vf(C,r.shopping);return Object.fromEntries(Object.entries(_).map(([x,R])=>[x,{...R,stock:0}]))})};return T.jsxs("main",{className:"grid gap-6",children:[T.jsxs("section",{className:"relative overflow-hidden rounded-lg border border-[#d8c7a3]/12 bg-[#10120f]/92",children:[T.jsx("img",{src:ch("shop-basket.jpg"),alt:"weekly grocery basket",className:"absolute inset-0 h-full w-full object-cover opacity-45"}),T.jsx("div",{className:"shop-hero-overlay absolute inset-0"}),T.jsxs("div",{className:"relative grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_0.95fr] lg:items-end",children:[T.jsxs("div",{children:[T.jsxs("div",{className:"inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/14 bg-[#080908]/58 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-[#b9a36c] backdrop-blur",children:[T.jsx(kT,{className:"h-4 w-4"}),"market run"]}),T.jsx("h2",{className:"mt-4 font-display text-4xl leading-none text-[#f2eadb] sm:text-5xl",children:"采购清单"}),T.jsx("p",{className:"mt-3 max-w-xl text-sm leading-6 text-[#cfc4b2]",children:"按每周期望库存补齐：周目标 - 家里已有 = 这次要买。它不再把今晚菜单乘以天数。"}),T.jsxs("div",{className:"mt-5 flex flex-wrap items-center gap-2",children:[[3,5,7,10].map(C=>T.jsxs(_c,{active:e===C,onClick:()=>t(C),children:[C," 天"]},C)),T.jsxs("button",{onClick:w,className:"inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/12 bg-[#080908]/58 px-3 py-2 text-xs text-[#918a7c] transition hover:border-[#d8c7a3]/32 hover:text-[#f2eadb]",children:[T.jsx(To,{className:"h-4 w-4"}),"清空已有"]})]})]}),T.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[T.jsx(Hd,{icon:qT,label:"备货",value:`${e}天`,sub:"周期"}),T.jsx(Hd,{icon:DT,label:"补货",value:f.length,sub:`已够${h.length}`}),T.jsx(Hd,{icon:rh,label:"本次",value:Math.round(y.kcal),sub:"kcal"})]})]})]}),T.jsxs("div",{className:"grid gap-6 lg:grid-cols-[0.88fr_1.12fr]",children:[T.jsxs(Pi,{eyebrow:"先拿这些",title:"进店顺序",icon:UT,children:[T.jsx("div",{className:"grid gap-3",children:v.length>0?v.map((C,_)=>T.jsx(vw,{item:C,index:_},C.key)):T.jsxs("div",{className:"rounded-lg border border-[#9fb58f]/20 bg-[#9fb58f]/10 p-4",children:[T.jsx("div",{className:"font-cjk text-sm font-semibold text-[#d8e7cf]",children:"这轮不用补"}),T.jsx("div",{className:"mt-1 text-xs leading-5 text-[#918a7c]",children:"已选品类的家里库存覆盖了这个备货周期。"})]})}),T.jsxs("div",{className:"mt-4 rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/42 p-4",children:[T.jsx("div",{className:"text-[10px] uppercase tracking-[0.24em] text-[#918a7c]",children:"cycle target base"}),T.jsxs("div",{className:"mt-2 grid grid-cols-4 gap-2",children:[T.jsx(Ps,{label:"P",value:Math.round(g.p)}),T.jsx(Ps,{label:"C",value:Math.round(g.c)}),T.jsx(Ps,{label:"F",value:Math.round(g.f)}),T.jsx(Ps,{label:"Kcal",value:Math.round(g.kcal)})]})]})]}),T.jsx(Pi,{eyebrow:"分区拿货",title:"目标、已有、本次补",icon:_T,children:T.jsx("div",{className:"grid gap-3",children:p.map(C=>T.jsx(yw,{group:C,shopDays:e,onUpdate:S},C.tone))})})]})]})}function Hd({icon:r,label:e,value:t,sub:s}){return T.jsxs("div",{className:"rounded-lg border border-[#d8c7a3]/12 bg-[#080908]/58 p-3 backdrop-blur",children:[T.jsx(r,{className:"h-4 w-4 text-[#b9a36c]"}),T.jsx("div",{className:"mt-3 font-display text-3xl leading-none text-[#f2eadb]",children:t}),T.jsxs("div",{className:"mt-1 text-[10px] uppercase tracking-[0.16em] text-[#918a7c]",children:[e," · ",s]})]})}function vw({item:r,index:e}){return T.jsxs("div",{className:"grid grid-cols-[42px_1fr_auto] items-center gap-3 rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/46 p-3",children:[T.jsx("span",{className:"grid h-10 w-10 place-items-center rounded-lg bg-[#d8c7a3] font-mono text-sm text-[#11110d]",children:String(e+1).padStart(2,"0")}),T.jsxs("div",{className:"min-w-0",children:[T.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-[#f2eadb]",children:r.name}),T.jsxs("div",{className:"mt-1 truncate text-[10px] text-[#918a7c]",children:["目标 ",Gt(r.targetQty),r.unit," · 家里 ",Gt(r.stockQty),r.unit]})]}),T.jsxs("div",{className:"text-right",children:[T.jsx("div",{className:"font-display text-2xl leading-none text-[#f2eadb]",children:Gt(r.buyQty)}),T.jsxs("div",{className:"mt-1 text-[10px] uppercase tracking-[0.16em] text-[#918a7c]",children:["补 ",r.unit]})]})]})}function yw({group:r,shopDays:e,onUpdate:t}){const s=r.icon,o=r.items.filter(l=>l.enabled&&l.buyQty>0).length;return T.jsxs("section",{className:"rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/42 p-3",children:[T.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[T.jsxs("div",{className:"flex min-w-0 items-center gap-2",children:[T.jsx("span",{className:"grid h-9 w-9 shrink-0 place-items-center rounded-lg",style:{backgroundColor:`${r.accent}24`,color:r.accent},children:T.jsx(s,{className:"h-4 w-4"})}),T.jsxs("div",{className:"min-w-0",children:[T.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-[#f2eadb]",children:r.label}),T.jsx("div",{className:"mt-0.5 truncate text-[10px] text-[#918a7c]",children:r.caption})]})]}),T.jsxs("span",{className:"rounded-md border border-[#d8c7a3]/10 px-2 py-1 font-mono text-xs text-[#cfc4b2]",children:["补 ",o,"/",r.items.length]})]}),T.jsx("div",{className:"grid gap-2",children:r.items.map(l=>T.jsx(Sw,{item:l,accent:r.accent,shopDays:e,onUpdate:t},l.key))})]})}function Sw({item:r,accent:e,shopDays:t,onUpdate:s}){const o=f=>{s(r.key,{target:dn(yo(r.weeklyTarget+f,r.step),0,r.max??1/0)})},l=f=>{s(r.key,{stock:dn(yo(r.stockQty+f,r.step),0,r.max??1/0)})},u=r.enabled?r.buyQty>0?`补 ${Gt(r.buyQty)}${r.unit}`:"已够":"跳过";return T.jsxs("div",{"data-shop-item-row":!0,className:`rounded-lg border border-[#d8c7a3]/8 bg-[#11130f]/68 p-3 transition ${r.enabled?"":"opacity-55"}`,children:[T.jsxs("div",{className:"grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start",children:[T.jsxs("div",{className:"min-w-0",children:[T.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-[#f2eadb]",children:r.name}),T.jsxs("div",{className:"mt-1 text-xs leading-5 text-[#918a7c]",children:["周目标 ",Gt(r.weeklyTarget),r.unit," · ",t,"天目标 ",Gt(r.targetQty),r.unit," · 家里 ",Gt(r.stockQty),r.unit]})]}),T.jsxs("div",{className:"flex items-center justify-between gap-2 sm:justify-end",children:[T.jsxs("div",{className:"rounded-md px-2.5 py-1 text-right",style:{backgroundColor:`${e}22`},children:[T.jsx("div",{className:"font-mono text-sm text-[#f2eadb]",children:u}),T.jsx("div",{className:"mt-0.5 text-[10px] uppercase tracking-[0.14em] text-[#918a7c]",children:"this run"})]}),T.jsx("button",{onClick:()=>s(r.key,{enabled:!r.enabled}),className:"h-9 rounded-lg border border-[#d8c7a3]/10 px-3 text-xs text-[#cfc4b2] transition hover:border-[#d8c7a3]/35 hover:text-[#f2eadb]",children:r.enabled?"跳过":"加入"})]})]}),T.jsxs("div",{className:"mt-3 grid gap-2 sm:grid-cols-2",children:[T.jsx(Kg,{label:"周目标",value:r.weeklyTarget,unit:r.unit,step:r.step,onMinus:()=>o(-r.step),onPlus:()=>o(r.step)}),T.jsx(Kg,{label:"家里已有",value:r.stockQty,unit:r.unit,step:r.step,onMinus:()=>l(-r.step),onPlus:()=>l(r.step)})]})]})}function Kg({label:r,value:e,unit:t,onMinus:s,onPlus:o}){return T.jsxs("div",{className:"flex items-center justify-between gap-2 rounded-lg border border-[#d8c7a3]/8 bg-[#080908]/40 px-2.5 py-2",children:[T.jsx("span",{className:"text-[10px] uppercase tracking-[0.18em] text-[#918a7c]",children:r}),T.jsxs("div",{className:"flex items-center gap-1",children:[T.jsx(ts,{label:`减少${r}`,onClick:s,icon:bc}),T.jsxs("span",{className:"w-16 text-center font-mono text-xs text-[#f2eadb]",children:[Gt(e),t]}),T.jsx(ts,{label:`增加${r}`,onClick:o,icon:Ac})]})]})}function Mw({cheat:r,setCheat:e,cheatTotal:t,cheatSurplus:s,tdee:o,dayKcal:l}){const u=(f,h)=>{e(p=>{const v={...p},y=dn(h,0,9);return y>0?v[f]=y:delete v[f],v})};return T.jsxs("main",{className:"grid gap-6 lg:grid-cols-[1fr_0.9fr]",children:[T.jsx(Pi,{eyebrow:"放松一下",title:"想吃也能算",icon:ih,children:T.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:j0.map(f=>T.jsx("div",{className:"rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/42 p-3",children:T.jsxs("div",{className:"flex items-center justify-between gap-3",children:[T.jsxs("div",{children:[T.jsx("div",{className:"font-cjk text-sm text-[#f2eadb]",children:f.label}),T.jsxs("div",{className:"mt-1 text-xs text-[#918a7c]",children:[f.kcal," kcal"]})]}),T.jsx(Cw,{value:r[f.id]||0,onChange:h=>u(f.id,h)})]})},f.id))})}),T.jsxs("section",{className:"overflow-hidden rounded-lg border border-[#d8c7a3]/12 bg-[#10120f]/92",children:[T.jsx("img",{src:lh("cheat.jpg"),alt:"cheat meal",className:"h-56 w-full object-cover"}),T.jsxs("div",{className:"p-5",children:[T.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#c77e68]",children:"吃完大概这样"}),T.jsx("div",{className:"mt-2 font-display text-6xl text-[#f2eadb]",children:t}),T.jsx("div",{className:"text-sm text-[#918a7c]",children:"放松热量"}),T.jsxs("div",{className:"mt-5 grid grid-cols-3 gap-2",children:[T.jsx(Ps,{label:"今日总摄入",value:Math.round(l+t)}),T.jsx(Ps,{label:"TDEE",value:o}),T.jsx(Ps,{label:"盈余",value:(s>=0?"+":"")+s,hot:s>0})]}),T.jsxs("button",{onClick:()=>e({}),className:"mt-4 inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/12 px-3 py-2 text-xs text-[#918a7c] transition hover:border-[#c77e68]/60 hover:text-[#c77e68]",children:[T.jsx(To,{className:"h-4 w-4"}),"清空"]})]})]})]})}function Ew({open:r,setOpen:e,pre:t,setPre:s,setMapQty:o,drinkKey:l,setDrinkKey:u,drinkMl:f,setDrinkMl:h,model:p}){if(!r)return null;const v=$0(t,l,f),y=Y0(t,l,f),g=Wn(p.pre,p.drink),S=()=>{s({}),u("none"),h(0)},w=()=>{s({banana:1}),u("tomato"),h(400)},C=()=>{s({pineapple:1}),u("tomato"),h(400)},_=x=>{u(x),x==="none"?h(0):f<=0&&h(400)};return T.jsxs("div",{className:"fixed inset-0 z-[70]",children:[T.jsx("button",{className:"absolute inset-0 bg-black/68 backdrop-blur-sm",onClick:()=>e(!1),"aria-label":"关闭补给"}),T.jsxs("aside",{className:"absolute inset-y-0 right-0 flex w-[min(460px,94vw)] flex-col border-l border-[#d8c7a3]/12 bg-[#0d0f0c] shadow-2xl",children:[T.jsxs("div",{className:"flex items-center justify-between border-b border-[#d8c7a3]/10 p-4",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("img",{src:lh("pre.jpg"),alt:"",className:"h-12 w-12 rounded-lg object-cover"}),T.jsxs("div",{children:[T.jsx("div",{className:"font-display text-xl text-[#f2eadb]",children:"补给开关"}),T.jsx("div",{className:"text-[10px] uppercase tracking-[0.22em] text-[#918a7c]",children:"训练前吃什么喝什么"})]})]}),T.jsx("button",{onClick:()=>e(!1),className:"grid h-9 w-9 place-items-center rounded-lg border border-[#d8c7a3]/12 text-[#918a7c] hover:text-[#f2eadb]","aria-label":"关闭",children:T.jsx(ah,{className:"h-4 w-4"})})]}),T.jsxs("div",{className:"flex-1 overflow-y-auto p-4",children:[T.jsxs("div",{className:`rounded-lg border p-4 ${v?"border-[#9fb58f]/30 bg-[#9fb58f]/10":"border-[#d8c7a3]/10 bg-[#10120f]"}`,children:[T.jsxs("div",{className:"flex items-center justify-between gap-3",children:[T.jsx("span",{className:"text-[10px] uppercase tracking-[0.24em] text-[#918a7c]",children:"当前状态"}),T.jsx("span",{className:v?"text-[#9fb58f]":"text-[#918a7c]",children:v?"已补给":"不补给"})]}),T.jsx("div",{className:"mt-2 text-sm leading-6 text-[#ddd5c6]",children:y}),T.jsxs("div",{className:"mt-2 font-mono text-xs text-[#918a7c]",children:["P",Gt(g.p)," C",Gt(g.c)," F",Gt(g.f)," · ",Math.round(g.kcal)," kcal"]})]}),T.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[T.jsxs("button",{onClick:S,className:"rounded-lg border border-[#d8c7a3]/10 bg-[#10120f] p-3 text-left transition hover:border-[#c77e68]/50",children:[T.jsx("div",{className:"font-cjk text-sm font-semibold text-[#f2eadb]",children:"一键不补给"}),T.jsx("div",{className:"mt-1 text-[10px] text-[#918a7c]",children:"不吃也不喝"})]}),T.jsxs("button",{onClick:w,className:"rounded-lg border border-[#d8c7a3]/30 bg-[#d8c7a3]/10 p-3 text-left transition hover:-translate-y-0.5",children:[T.jsx("div",{className:"font-cjk text-sm font-semibold text-[#f2eadb]",children:"轻补给"}),T.jsx("div",{className:"mt-1 text-[10px] text-[#918a7c]",children:"香蕉 + 番茄汁"})]}),T.jsxs("button",{onClick:C,className:"rounded-lg border border-[#9fb58f]/30 bg-[#9fb58f]/10 p-3 text-left transition hover:-translate-y-0.5",children:[T.jsx("div",{className:"font-cjk text-sm font-semibold text-[#f2eadb]",children:"菠萝盒"}),T.jsx("div",{className:"mt-1 text-[10px] text-[#918a7c]",children:"240g + 番茄汁"})]})]}),T.jsxs("div",{className:"mt-5 grid gap-5",children:[T.jsx(bs,{title:"吃什么",children:T.jsx("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(wa).map(([x,R])=>T.jsx(yc,{label:R.label,meta:`每${R.step}${R.unit} · ${Math.round(Ca(hi(R,R.step)))} kcal`,value:t[x]||0,unit:R.unit,step:R.step,max:R.max,onChange:N=>o(s,x,N,R.max)},x))})}),T.jsxs(bs,{title:"喝什么",children:[T.jsx("div",{className:"grid grid-cols-3 gap-2",children:Object.entries(Zr).map(([x,R])=>T.jsx(vc,{active:l===x,onClick:()=>_(x),title:R.label,meta:R.sub,tone:"green"},x))}),T.jsx("div",{className:"mt-3 grid grid-cols-3 gap-2",children:[200,400,600].map(x=>T.jsxs(_c,{active:f===x,onClick:()=>h(x),children:[x,"ml"]},x))}),T.jsx("div",{className:"mt-3",children:T.jsx(Yr,{label:"饮料",unit:"ml",value:f,onChange:x=>h(dn(x,0,2e3))})})]})]})]})]})]})}function Tw({open:r,setOpen:e,text:t,onCopied:s}){const o=dt.useRef(null);if(dt.useEffect(()=>{if(!r)return;const u=window.setTimeout(()=>{var f,h,p;(f=o.current)==null||f.focus(),(h=o.current)==null||h.select(),(p=o.current)==null||p.setSelectionRange(0,t.length)},80);return()=>window.clearTimeout(u)},[r,t]),!r)return null;const l=async()=>{var u,f,h;try{await X0(t),s()}catch{(u=o.current)==null||u.focus(),(f=o.current)==null||f.select(),(h=o.current)==null||h.setSelectionRange(0,t.length)}};return T.jsxs("div",{className:"fixed inset-0 z-[80]",children:[T.jsx("button",{className:"absolute inset-0 bg-black/68 backdrop-blur-sm",onClick:()=>e(!1),"aria-label":"关闭复制面板"}),T.jsxs("aside",{className:"absolute inset-x-3 bottom-3 rounded-lg border border-[#d8c7a3]/12 bg-[#0d0f0c] p-4 shadow-2xl sm:left-auto sm:right-5 sm:w-[min(520px,92vw)]",children:[T.jsxs("div",{className:"flex items-start justify-between gap-3",children:[T.jsxs("div",{children:[T.jsx("div",{className:"font-display text-xl text-[#f2eadb]",children:"手动复制"}),T.jsx("div",{className:"mt-1 text-xs leading-5 text-[#918a7c]",children:"浏览器拦截了自动复制，文本已经选中。手机上直接长按复制也可以。"})]}),T.jsx("button",{onClick:()=>e(!1),className:"grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#d8c7a3]/12 text-[#918a7c] hover:text-[#f2eadb]","aria-label":"关闭",children:T.jsx(ah,{className:"h-4 w-4"})})]}),T.jsx("textarea",{ref:o,readOnly:!0,value:t,className:"mt-4 h-48 w-full resize-none rounded-lg border border-[#d8c7a3]/12 bg-[#080908]/58 p-3 font-mono text-xs leading-5 text-[#ddd5c6] outline-none focus:border-[#d8c7a3]"}),T.jsx("div",{className:"mt-3 flex justify-end gap-2",children:T.jsxs("button",{onClick:l,className:"inline-flex items-center gap-2 rounded-lg bg-[#d8c7a3] px-3 py-2 text-xs font-semibold text-[#11110d]",children:[T.jsx(Rs,{className:"h-4 w-4"}),"再复制一次"]})})]})]})}function ww({open:r,setOpen:e,snack:t,setSnack:s,active:o,dinnerSummary:l}){if(!r)return null;const u=(f,h)=>{s(p=>({...p,[f]:f==="name"?h:dn(h,0,f==="kcal"?5e3:500)}))};return T.jsxs("div",{className:"fixed inset-0 z-[70]",children:[T.jsx("button",{className:"absolute inset-0 bg-black/68 backdrop-blur-sm",onClick:()=>e(!1),"aria-label":"关闭零食加餐"}),T.jsxs("aside",{className:"absolute inset-y-0 right-0 flex w-[min(430px,94vw)] flex-col border-l border-[#d8c7a3]/12 bg-[#0d0f0c] shadow-2xl",children:[T.jsxs("div",{className:"flex items-center justify-between border-b border-[#d8c7a3]/10 p-4",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("img",{src:ch("snack-scanner.jpg"),alt:"",className:"h-12 w-12 rounded-lg object-cover"}),T.jsxs("div",{children:[T.jsx("div",{className:"font-display text-xl text-[#f2eadb]",children:"零食加餐"}),T.jsx("div",{className:"text-[10px] uppercase tracking-[0.22em] text-[#918a7c]",children:"自己填一下也行"})]})]}),T.jsx("button",{onClick:()=>e(!1),className:"grid h-9 w-9 place-items-center rounded-lg border border-[#d8c7a3]/12 text-[#918a7c] hover:text-[#f2eadb]","aria-label":"关闭",children:T.jsx(ah,{className:"h-4 w-4"})})]}),T.jsxs("div",{className:"flex-1 overflow-y-auto p-4",children:[T.jsx("label",{className:"text-[10px] uppercase tracking-[0.22em] text-[#918a7c]",children:"名称"}),T.jsx("input",{value:t.name,onChange:f=>u("name",f.target.value),className:"mt-2 h-11 w-full rounded-lg border border-[#d8c7a3]/12 bg-[#080908]/42 px-3 text-sm text-[#f2eadb] outline-none focus:border-[#d8c7a3]"}),T.jsx("div",{className:"mt-4 grid grid-cols-4 gap-2",children:[["kcal","热量"],["p","蛋白"],["c","碳水"],["f","脂肪"]].map(([f,h])=>T.jsx(Yr,{label:h,unit:f==="kcal"?"":"g",value:t[f],onChange:p=>u(f,p)},f))}),T.jsxs("div",{className:"mt-5 rounded-lg border border-[#d8c7a3]/20 bg-[#d8c7a3]/10 p-4",children:[T.jsx("div",{className:"text-[10px] uppercase tracking-[0.22em] text-[#d8c7a3]",children:"晚餐会跟着收口"}),T.jsxs("div",{className:"mt-2 text-sm leading-6 text-[#cfc4b2]",children:[l||"晚餐已砍到很低"," · 全天 ",Math.round(t.kcal)," kcal snack"]})]}),o&&T.jsxs("button",{onClick:()=>s({name:"手动加餐",p:0,c:0,f:0,kcal:0}),className:"mt-4 inline-flex items-center gap-2 rounded-lg border border-[#d8c7a3]/12 px-3 py-2 text-xs text-[#918a7c] hover:text-[#c77e68]",children:[T.jsx(To,{className:"h-4 w-4"}),"清除加餐"]})]})]})]})}function Pi({eyebrow:r,title:e,icon:t,children:s}){return T.jsxs("section",{className:"premium-panel-shadow rounded-lg border border-[#d8c7a3]/12 bg-[#10120f]/92 p-4 backdrop-blur-xl sm:p-5",children:[T.jsxs("div",{className:"mb-4 flex items-start justify-between gap-4",children:[T.jsxs("div",{children:[T.jsx("div",{className:"text-[10px] uppercase tracking-[0.28em] text-[#b9a36c]",children:r}),T.jsx("h2",{className:"mt-1 font-display text-2xl text-[#f2eadb]",children:e})]}),t&&T.jsx("span",{className:"grid h-9 w-9 place-items-center rounded-lg bg-[#d8c7a3] text-[#11110d]",children:T.jsx(t,{className:"h-4 w-4"})})]}),s]})}function Wd({icon:r,label:e,sub:t,onClick:s,dataAttr:o}){const l=s?"button":"div";return T.jsxs(l,{"data-copy-plan-button":o==="copy-plan-button"?!0:void 0,onClick:s,className:"min-w-0 rounded-lg border border-[#d8c7a3]/12 bg-[#11130f]/82 px-3 py-2.5 text-left backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#d8c7a3]/28 hover:bg-[#171912] sm:py-3",children:[T.jsx(r,{className:"mb-1.5 h-4 w-4 text-[#b9a36c]"}),T.jsx("div",{className:"truncate text-sm text-[#f2eadb]",children:e}),t&&T.jsx("div",{className:"mt-0.5 truncate text-[10px] uppercase tracking-[0.12em] text-[#918a7c] sm:tracking-[0.18em]",children:t})]})}function ic({label:r,value:e,target:t,unit:s}){const o=e-t,l=Math.abs(o)<=(s?Math.max(8,t*.08):Math.max(80,t*.05));return T.jsxs("div",{className:"rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/58 p-2 backdrop-blur",children:[T.jsx("div",{className:"text-[10px] uppercase tracking-[0.16em] text-[#918a7c]",children:r}),T.jsx("div",{className:"mt-1 font-mono text-lg text-[#f2eadb]",children:Math.round(e)}),T.jsxs("div",{className:`text-[10px] ${l?"text-[#9fb58f]":"text-[#d8c7a3]"}`,children:[o>=0?"+":"",Math.round(o),s]})]})}function bw({value:r,onChange:e,options:t}){return T.jsx("div",{className:"grid grid-cols-2 rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/48 p-1",children:t.map(s=>T.jsx("button",{onClick:()=>e(s.value),className:`rounded-md px-3 py-2 text-sm transition ${r===s.value?"bg-[#d8c7a3] text-[#11110d]":"text-[#918a7c] hover:text-[#f2eadb]"}`,children:s.label},s.value))})}function _c({active:r,onClick:e,children:t}){return T.jsx("button",{onClick:e,className:`rounded-lg border px-3 py-2 text-xs transition ${r?"border-[#d8c7a3]/55 bg-[#d8c7a3]/14 text-[#f0dfb9]":"border-[#d8c7a3]/10 bg-[#11130f]/72 text-[#918a7c] hover:border-[#d8c7a3]/28 hover:text-[#f2eadb]"}`,children:t})}function bs({title:r,children:e}){return T.jsxs("div",{children:[T.jsx("div",{className:"mb-2 text-[10px] uppercase tracking-[0.24em] text-[#918a7c]",children:r}),e]})}function vc({active:r,onClick:e,title:t,meta:s,tone:o="gold"}){const l=o==="green"?"#9fb58f":o==="amber"?"#c8a86a":"#d8c7a3";return T.jsxs("button",{onClick:e,className:"rounded-lg border p-3 text-left transition hover:-translate-y-0.5",style:{borderColor:r?l:"rgba(255,255,255,0.10)",background:r?`${l}1f`:"rgba(255,255,255,0.045)"},children:[T.jsx("div",{className:"font-cjk text-sm font-semibold text-[#f2eadb]",children:t}),T.jsx("div",{className:"mt-1 text-[10px] text-[#918a7c]",children:s})]})}function Aw({open:r,onToggle:e,title:t,subtitle:s,children:o}){return T.jsxs("section",{className:"rounded-lg border border-[#d8c7a3]/12 bg-[#10120f]/86 backdrop-blur-xl",children:[T.jsxs("button",{onClick:e,className:"flex w-full items-center justify-between gap-3 p-4 text-left",children:[T.jsxs("span",{children:[T.jsxs("span",{className:"flex items-center gap-2 font-display text-2xl text-[#f2eadb]",children:[T.jsx(GT,{className:"h-4 w-4 text-[#b9a36c]"}),t]}),T.jsx("span",{className:"mt-1 block text-xs text-[#918a7c]",children:s})]}),T.jsx(TT,{className:`h-5 w-5 text-[#918a7c] transition ${r?"rotate-180":""}`})]}),r&&T.jsx("div",{className:"border-t border-[#d8c7a3]/10 p-4",children:o})]})}function yc({label:r,meta:e,value:t,unit:s,step:o,max:l,onChange:u}){return T.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/42 p-3",children:[T.jsxs("div",{className:"min-w-0",children:[T.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-[#f2eadb]",children:r}),T.jsx("div",{className:"mt-1 truncate text-[10px] text-[#918a7c]",children:e})]}),T.jsxs("div",{className:"flex items-center gap-1",children:[T.jsx(ts,{label:`减少${r}`,onClick:()=>u(t-o),icon:bc}),T.jsxs("span",{className:"w-14 text-center font-mono text-sm text-[#f2eadb]",children:[Gt(t),t>0&&s==="g"?"g":""]}),T.jsx(ts,{label:`增加${r}`,onClick:()=>u(Math.min(l,t+o)),icon:Ac})]})]})}function Cw({value:r,onChange:e}){return T.jsxs("div",{className:"flex items-center gap-1",children:[T.jsx(ts,{label:"减少",onClick:()=>e(r-1),icon:bc}),T.jsx("span",{className:"w-7 text-center font-mono text-sm text-[#f2eadb]",children:r}),T.jsx(ts,{label:"增加",onClick:()=>e(r+1),icon:Ac})]})}function ts({label:r,onClick:e,icon:t}){return T.jsx("button",{onClick:e,"aria-label":r,className:"grid h-8 w-8 place-items-center rounded-lg border border-[#d8c7a3]/10 bg-[#11130f]/72 text-[#918a7c] transition hover:border-[#d8c7a3]/55 hover:text-[#d8c7a3]",children:T.jsx(t,{className:"h-4 w-4"})})}function Yr({label:r,unit:e,value:t,onChange:s}){return T.jsxs("label",{className:"block rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/42 p-3",children:[T.jsx("span",{className:"block text-[10px] uppercase tracking-[0.18em] text-[#918a7c]",children:r}),T.jsxs("span",{className:"mt-1 flex items-baseline gap-1",children:[T.jsx("input",{type:"number",value:Gt(t,1),onChange:o=>s(o.target.value),className:"min-w-0 flex-1 bg-transparent font-mono text-lg text-[#f2eadb] outline-none"}),T.jsx("span",{className:"text-[10px] text-[#918a7c]",children:e})]})]})}function Rw({item:r,index:e,onTune:t}){const o={red:"#c77e68",amber:"#c8a86a",gold:"#d8c7a3",green:"#9fb58f"}[r.tone]||"#ffffff",l=r.adjustment>0?`+${Gt(r.adjustment)}`:Gt(r.adjustment);return T.jsxs("div",{"data-dinner-tune-row":!0,className:"grid grid-cols-[38px_1fr_auto] items-center gap-3 rounded-lg border border-[#d8c7a3]/10 bg-[#080908]/46 p-3",children:[T.jsx("span",{className:"grid h-9 w-9 place-items-center rounded-lg font-mono text-xs text-zinc-950",style:{backgroundColor:o},children:String(e+1).padStart(2,"0")}),T.jsxs("div",{className:"min-w-0",children:[T.jsx("div",{className:"truncate font-cjk text-sm font-semibold text-[#f2eadb]",children:r.name}),T.jsxs("div",{className:"mt-1 truncate text-[10px] text-[#918a7c]",children:["P",Gt(r.macro.p)," · C",Gt(r.macro.c)," · F",Gt(r.macro.f),r.adjustment!==0&&T.jsxs("span",{className:"text-[#d8c7a3]",children:[" · 调整 ",l,r.unit]})]})]}),T.jsxs("div",{className:"text-right",children:[T.jsx("div",{className:"font-display text-2xl leading-none text-[#f2eadb]",children:Gt(r.qty)}),T.jsx("div",{className:"mt-1 text-[10px] uppercase tracking-[0.16em] text-[#918a7c]",children:r.unit}),t&&T.jsxs("div",{className:"mt-2 flex items-center justify-end gap-1",children:[T.jsx(ts,{label:`减少${r.name}`,onClick:()=>t(r,-r.step),icon:bc}),T.jsx(ts,{label:`增加${r.name}`,onClick:()=>t(r,r.step),icon:Ac})]})]})]})}function rc({label:r,value:e,target:t,unit:s,color:o}){const l=Math.min(135,e/Math.max(1,t)*100),u=Math.round(e-t);return T.jsxs("div",{children:[T.jsxs("div",{className:"mb-2 flex items-center justify-between gap-3",children:[T.jsx("span",{className:"text-sm text-[#cfc4b2]",children:r}),T.jsxs("span",{className:"font-mono text-xs text-[#918a7c]",children:[Math.round(e)," / ",t," ",s]})]}),T.jsx("div",{className:"relative h-2 overflow-hidden rounded-full bg-[#d8c7a3]/10",children:T.jsx("div",{className:"h-full rounded-full transition-all duration-700",style:{width:`${l}%`,backgroundColor:o}})}),T.jsxs("div",{className:"mt-1 text-right text-[10px] text-[#918a7c]",children:[u>=0?"+":"",u,s]})]})}function go({label:r,macro:e,strong:t}){return T.jsxs("div",{className:`grid grid-cols-[1fr_auto] items-center gap-3 border-t border-[#d8c7a3]/10 py-3 first:border-t-0 ${t?"text-[#f2eadb]":"text-[#cfc4b2]"}`,children:[T.jsx("div",{className:"font-cjk text-sm",children:r}),T.jsxs("div",{className:"font-mono text-xs text-[#918a7c]",children:["P",Gt(e.p)," C",Gt(e.c)," F",Gt(e.f)," · ",Math.round(Ca(e))," kcal"]})]})}function Ps({label:r,value:e,hot:t}){return T.jsxs("div",{className:`rounded-lg border p-3 ${t?"border-[#c77e68]/30 bg-[#c77e68]/10":"border-[#d8c7a3]/10 bg-[#080908]/42"}`,children:[T.jsx("div",{className:"text-[10px] text-[#918a7c]",children:r}),T.jsx("div",{className:`mt-1 font-mono text-lg ${t?"text-[#c77e68]":"text-[#f2eadb]"}`,children:e})]})}B_.createRoot(document.getElementById("root")).render(T.jsx(L_.StrictMode,{children:T.jsx(pw,{})}));
