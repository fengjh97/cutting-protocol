var US=Object.create;var Dg=Object.defineProperty;var kS=Object.getOwnPropertyDescriptor;var OS=Object.getOwnPropertyNames;var BS=Object.getPrototypeOf,zS=Object.prototype.hasOwnProperty;var ji=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var VS=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of OS(e))!zS.call(t,r)&&r!==n&&Dg(t,r,{get:()=>e[r],enumerable:!(i=kS(e,r))||i.enumerable});return t};var Ri=(t,e,n)=>(n=t!=null?US(BS(t)):{},VS(e||!t||!t.__esModule?Dg(n,"default",{value:t,enumerable:!0}):n,t));var qg=ji(Qe=>{"use strict";var Za=Symbol.for("react.element"),GS=Symbol.for("react.portal"),HS=Symbol.for("react.fragment"),WS=Symbol.for("react.strict_mode"),XS=Symbol.for("react.profiler"),qS=Symbol.for("react.provider"),KS=Symbol.for("react.context"),$S=Symbol.for("react.forward_ref"),YS=Symbol.for("react.suspense"),jS=Symbol.for("react.memo"),ZS=Symbol.for("react.lazy"),Fg=Symbol.iterator;function JS(t){return t===null||typeof t!="object"?null:(t=Fg&&t[Fg]||t["@@iterator"],typeof t=="function"?t:null)}var Og={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bg=Object.assign,zg={};function Ws(t,e,n){this.props=t,this.context=e,this.refs=zg,this.updater=n||Og}Ws.prototype.isReactComponent={};Ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vg(){}Vg.prototype=Ws.prototype;function bh(t,e,n){this.props=t,this.context=e,this.refs=zg,this.updater=n||Og}var wh=bh.prototype=new Vg;wh.constructor=bh;Bg(wh,Ws.prototype);wh.isPureReactComponent=!0;var Ug=Array.isArray,Gg=Object.prototype.hasOwnProperty,Eh={current:null},Hg={key:!0,ref:!0,__self:!0,__source:!0};function Wg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Gg.call(e,i)&&!Hg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Za,type:t,key:s,ref:a,props:r,_owner:Eh.current}}function QS(t,e){return{$$typeof:Za,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Th(t){return typeof t=="object"&&t!==null&&t.$$typeof===Za}function e1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kg=/\/+/g;function Mh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?e1(""+t.key):e.toString(36)}function Gl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Za:case GS:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Mh(a,0):i,Ug(r)?(n="",t!=null&&(n=t.replace(kg,"$&/")+"/"),Gl(r,e,n,"",function(c){return c})):r!=null&&(Th(r)&&(r=QS(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(kg,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Ug(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Mh(s,o);a+=Gl(s,e,n,l,r)}else if(l=JS(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Mh(s,o++),a+=Gl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Vl(t,e,n){if(t==null)return t;var i=[],r=0;return Gl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function t1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},Hl={transition:null},n1={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:Hl,ReactCurrentOwner:Eh};function Xg(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:Vl,forEach:function(t,e,n){Vl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vl(t,function(){e++}),e},toArray:function(t){return Vl(t,function(e){return e})||[]},only:function(t){if(!Th(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=Ws;Qe.Fragment=HS;Qe.Profiler=XS;Qe.PureComponent=bh;Qe.StrictMode=WS;Qe.Suspense=YS;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n1;Qe.act=Xg;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Bg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Eh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Gg.call(e,l)&&!Hg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Za,type:t.type,key:r,ref:s,props:i,_owner:a}};Qe.createContext=function(t){return t={$$typeof:KS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qS,_context:t},t.Consumer=t};Qe.createElement=Wg;Qe.createFactory=function(t){var e=Wg.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:$S,render:t}};Qe.isValidElement=Th;Qe.lazy=function(t){return{$$typeof:ZS,_payload:{_status:-1,_result:t},_init:t1}};Qe.memo=function(t,e){return{$$typeof:jS,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=Hl.transition;Hl.transition={};try{t()}finally{Hl.transition=e}};Qe.unstable_act=Xg;Qe.useCallback=function(t,e){return pn.current.useCallback(t,e)};Qe.useContext=function(t){return pn.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return pn.current.useEffect(t,e)};Qe.useId=function(){return pn.current.useId()};Qe.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return pn.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};Qe.useRef=function(t){return pn.current.useRef(t)};Qe.useState=function(t){return pn.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return pn.current.useTransition()};Qe.version="18.3.1"});var Sr=ji((G2,Kg)=>{"use strict";Kg.exports=qg()});var i0=ji(yt=>{"use strict";function Ph(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,r=t[i];if(0<Wl(r,e))t[i]=e,t[n]=r,n=i;else break e}}function fi(t){return t.length===0?null:t[0]}function ql(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,r=t.length,s=r>>>1;i<s;){var a=2*(i+1)-1,o=t[a],l=a+1,c=t[l];if(0>Wl(o,n))l<r&&0>Wl(c,o)?(t[i]=c,t[l]=n,i=l):(t[i]=o,t[a]=n,i=a);else if(l<r&&0>Wl(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function Wl(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?($g=performance,yt.unstable_now=function(){return $g.now()}):(Ah=Date,Yg=Ah.now(),yt.unstable_now=function(){return Ah.now()-Yg});var $g,Ah,Yg,Pi=[],Mr=[],i1=1,Qn=null,sn=3,Kl=!1,us=!1,Qa=!1,Jg=typeof setTimeout=="function"?setTimeout:null,Qg=typeof clearTimeout=="function"?clearTimeout:null,jg=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ih(t){for(var e=fi(Mr);e!==null;){if(e.callback===null)ql(Mr);else if(e.startTime<=t)ql(Mr),e.sortIndex=e.expirationTime,Ph(Pi,e);else break;e=fi(Mr)}}function Nh(t){if(Qa=!1,Ih(t),!us)if(fi(Pi)!==null)us=!0,Dh(Lh);else{var e=fi(Mr);e!==null&&Fh(Nh,e.startTime-t)}}function Lh(t,e){us=!1,Qa&&(Qa=!1,Qg(eo),eo=-1),Kl=!0;var n=sn;try{for(Ih(e),Qn=fi(Pi);Qn!==null&&(!(Qn.expirationTime>e)||t&&!n0());){var i=Qn.callback;if(typeof i=="function"){Qn.callback=null,sn=Qn.priorityLevel;var r=i(Qn.expirationTime<=e);e=yt.unstable_now(),typeof r=="function"?Qn.callback=r:Qn===fi(Pi)&&ql(Pi),Ih(e)}else ql(Pi);Qn=fi(Pi)}if(Qn!==null)var s=!0;else{var a=fi(Mr);a!==null&&Fh(Nh,a.startTime-e),s=!1}return s}finally{Qn=null,sn=n,Kl=!1}}var $l=!1,Xl=null,eo=-1,e0=5,t0=-1;function n0(){return!(yt.unstable_now()-t0<e0)}function Ch(){if(Xl!==null){var t=yt.unstable_now();t0=t;var e=!0;try{e=Xl(!0,t)}finally{e?Ja():($l=!1,Xl=null)}}else $l=!1}var Ja;typeof jg=="function"?Ja=function(){jg(Ch)}:typeof MessageChannel<"u"?(Rh=new MessageChannel,Zg=Rh.port2,Rh.port1.onmessage=Ch,Ja=function(){Zg.postMessage(null)}):Ja=function(){Jg(Ch,0)};var Rh,Zg;function Dh(t){Xl=t,$l||($l=!0,Ja())}function Fh(t,e){eo=Jg(function(){t(yt.unstable_now())},e)}yt.unstable_IdlePriority=5;yt.unstable_ImmediatePriority=1;yt.unstable_LowPriority=4;yt.unstable_NormalPriority=3;yt.unstable_Profiling=null;yt.unstable_UserBlockingPriority=2;yt.unstable_cancelCallback=function(t){t.callback=null};yt.unstable_continueExecution=function(){us||Kl||(us=!0,Dh(Lh))};yt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):e0=0<t?Math.floor(1e3/t):5};yt.unstable_getCurrentPriorityLevel=function(){return sn};yt.unstable_getFirstCallbackNode=function(){return fi(Pi)};yt.unstable_next=function(t){switch(sn){case 1:case 2:case 3:var e=3;break;default:e=sn}var n=sn;sn=e;try{return t()}finally{sn=n}};yt.unstable_pauseExecution=function(){};yt.unstable_requestPaint=function(){};yt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=sn;sn=t;try{return e()}finally{sn=n}};yt.unstable_scheduleCallback=function(t,e,n){var i=yt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,t={id:i1++,callback:e,priorityLevel:t,startTime:n,expirationTime:r,sortIndex:-1},n>i?(t.sortIndex=n,Ph(Mr,t),fi(Pi)===null&&t===fi(Mr)&&(Qa?(Qg(eo),eo=-1):Qa=!0,Fh(Nh,n-i))):(t.sortIndex=r,Ph(Pi,t),us||Kl||(us=!0,Dh(Lh))),t};yt.unstable_shouldYield=n0;yt.unstable_wrapCallback=function(t){var e=sn;return function(){var n=sn;sn=e;try{return t.apply(this,arguments)}finally{sn=n}}}});var s0=ji((W2,r0)=>{"use strict";r0.exports=i0()});var c_=ji(Vn=>{"use strict";var r1=Sr(),Bn=s0();function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hx=new Set,bo={};function bs(t,e){da(t,e),da(t+"Capture",e)}function da(t,e){for(bo[t]=e,t=0;t<e.length;t++)hx.add(e[t])}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sf=Object.prototype.hasOwnProperty,s1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,a0={},o0={};function a1(t){return sf.call(o0,t)?!0:sf.call(a0,t)?!1:s1.test(t)?o0[t]=!0:(a0[t]=!0,!1)}function o1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function l1(t,e,n,i){if(e===null||typeof e>"u"||o1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var en={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){en[t]=new xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];en[e]=new xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){en[t]=new xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){en[t]=new xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){en[t]=new xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){en[t]=new xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){en[t]=new xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){en[t]=new xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){en[t]=new xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zf=/[\-:]([a-z])/g;function Jf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zf,Jf);en[e]=new xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zf,Jf);en[e]=new xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zf,Jf);en[e]=new xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){en[t]=new xn(t,1,!1,t.toLowerCase(),null,!1,!1)});en.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){en[t]=new xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qf(t,e,n,i){var r=en.hasOwnProperty(e)?en[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l1(e,n,r,i)&&(n=null),i||r===null?a1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ar=r1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yl=Symbol.for("react.element"),Ks=Symbol.for("react.portal"),$s=Symbol.for("react.fragment"),ep=Symbol.for("react.strict_mode"),af=Symbol.for("react.profiler"),fx=Symbol.for("react.provider"),px=Symbol.for("react.context"),tp=Symbol.for("react.forward_ref"),of=Symbol.for("react.suspense"),lf=Symbol.for("react.suspense_list"),np=Symbol.for("react.memo"),wr=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var mx=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var l0=Symbol.iterator;function to(t){return t===null||typeof t!="object"?null:(t=l0&&t[l0]||t["@@iterator"],typeof t=="function"?t:null)}var Nt=Object.assign,Uh;function co(t){if(Uh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uh=e&&e[1]||""}return`
`+Uh+t}var kh=!1;function Oh(t,e){if(!t||kh)return"";kh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{kh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?co(t):""}function c1(t){switch(t.tag){case 5:return co(t.type);case 16:return co("Lazy");case 13:return co("Suspense");case 19:return co("SuspenseList");case 0:case 2:case 15:return t=Oh(t.type,!1),t;case 11:return t=Oh(t.type.render,!1),t;case 1:return t=Oh(t.type,!0),t;default:return""}}function cf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $s:return"Fragment";case Ks:return"Portal";case af:return"Profiler";case ep:return"StrictMode";case of:return"Suspense";case lf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case px:return(t.displayName||"Context")+".Consumer";case fx:return(t._context.displayName||"Context")+".Provider";case tp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case np:return e=t.displayName||null,e!==null?e:cf(t.type)||"Memo";case wr:e=t._payload,t=t._init;try{return cf(t(e))}catch{}}return null}function u1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cf(e);case 8:return e===ep?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function d1(t){var e=gx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function jl(t){t._valueTracker||(t._valueTracker=d1(t))}function xx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=gx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function wc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function uf(t,e){var n=e.checked;return Nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function c0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vx(t,e){e=e.checked,e!=null&&Qf(t,"checked",e,!1)}function df(t,e){vx(t,e);var n=Or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hf(t,e.type,n):e.hasOwnProperty("defaultValue")&&hf(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function u0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hf(t,e,n){(e!=="number"||wc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var uo=Array.isArray;function sa(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ff(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return Nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function d0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(uo(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Or(n)}}function _x(t,e){var n=Or(e.value),i=Or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function h0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zl,Sx=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t})(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zl=Zl||document.createElement("div"),Zl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h1=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(t){h1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),po[e]=po[t]})});function Mx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||po.hasOwnProperty(t)&&po[t]?(""+e).trim():e+"px"}function bx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Mx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var f1=Nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mf(t,e){if(e){if(f1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function gf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xf=null;function ip(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vf=null,aa=null,oa=null;function f0(t){if(t=Go(t)){if(typeof vf!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Jc(e),vf(t.stateNode,t.type,e))}}function wx(t){aa?oa?oa.push(t):oa=[t]:aa=t}function Ex(){if(aa){var t=aa,e=oa;if(oa=aa=null,f0(t),e)for(t=0;t<e.length;t++)f0(e[t])}}function Tx(t,e){return t(e)}function Ax(){}var Bh=!1;function Cx(t,e,n){if(Bh)return t(e,n);Bh=!0;try{return Tx(t,e,n)}finally{Bh=!1,(aa!==null||oa!==null)&&(Ax(),Ex())}}function Eo(t,e){var n=t.stateNode;if(n===null)return null;var i=Jc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var _f=!1;if(nr)try{Xs={},Object.defineProperty(Xs,"passive",{get:function(){_f=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{_f=!1}var Xs;function p1(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var mo=!1,Ec=null,Tc=!1,yf=null,m1={onError:function(t){mo=!0,Ec=t}};function g1(t,e,n,i,r,s,a,o,l){mo=!1,Ec=null,p1.apply(m1,arguments)}function x1(t,e,n,i,r,s,a,o,l){if(g1.apply(this,arguments),mo){if(mo){var c=Ec;mo=!1,Ec=null}else throw Error(ne(198));Tc||(Tc=!0,yf=c)}}function ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Rx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function p0(t){if(ws(t)!==t)throw Error(ne(188))}function v1(t){var e=t.alternate;if(!e){if(e=ws(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return p0(r),t;if(s===i)return p0(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Px(t){return t=v1(t),t!==null?Ix(t):null}function Ix(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ix(t);if(e!==null)return e;t=t.sibling}return null}var Nx=Bn.unstable_scheduleCallback,m0=Bn.unstable_cancelCallback,_1=Bn.unstable_shouldYield,y1=Bn.unstable_requestPaint,Ot=Bn.unstable_now,S1=Bn.unstable_getCurrentPriorityLevel,rp=Bn.unstable_ImmediatePriority,Lx=Bn.unstable_UserBlockingPriority,Ac=Bn.unstable_NormalPriority,M1=Bn.unstable_LowPriority,Dx=Bn.unstable_IdlePriority,$c=null,Di=null;function b1(t){if(Di&&typeof Di.onCommitFiberRoot=="function")try{Di.onCommitFiberRoot($c,t,void 0,(t.current.flags&128)===128)}catch{}}var vi=Math.clz32?Math.clz32:T1,w1=Math.log,E1=Math.LN2;function T1(t){return t>>>=0,t===0?32:31-(w1(t)/E1|0)|0}var Jl=64,Ql=4194304;function ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ho(o):(s&=a,s!==0&&(i=ho(s)))}else a=n&~r,a!==0?i=ho(a):s!==0&&(i=ho(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-vi(e),r=1<<n,i|=t[n],e&=~r;return i}function A1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-vi(s),o=1<<a,l=r[a];l===-1?((o&n)===0||(o&i)!==0)&&(r[a]=A1(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Sf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fx(){var t=Jl;return Jl<<=1,(Jl&4194240)===0&&(Jl=64),t}function zh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vi(e),t[e]=n}function R1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-vi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function sp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-vi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var gt=0;function Ux(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var kx,ap,Ox,Bx,zx,Mf=!1,ec=[],Pr=null,Ir=null,Nr=null,To=new Map,Ao=new Map,Tr=[],P1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function g0(t,e){switch(t){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":To.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(e.pointerId)}}function no(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Go(e),e!==null&&ap(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function I1(t,e,n,i,r){switch(e){case"focusin":return Pr=no(Pr,t,e,n,i,r),!0;case"dragenter":return Ir=no(Ir,t,e,n,i,r),!0;case"mouseover":return Nr=no(Nr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return To.set(s,no(To.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ao.set(s,no(Ao.get(s)||null,t,e,n,i,r)),!0}return!1}function Vx(t){var e=fs(t.target);if(e!==null){var n=ws(e);if(n!==null){if(e=n.tag,e===13){if(e=Rx(n),e!==null){t.blockedOn=e,zx(t.priority,function(){Ox(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xf=i,n.target.dispatchEvent(i),xf=null}else return e=Go(n),e!==null&&ap(e),t.blockedOn=n,!1;e.shift()}return!0}function x0(t,e,n){pc(t)&&n.delete(e)}function N1(){Mf=!1,Pr!==null&&pc(Pr)&&(Pr=null),Ir!==null&&pc(Ir)&&(Ir=null),Nr!==null&&pc(Nr)&&(Nr=null),To.forEach(x0),Ao.forEach(x0)}function io(t,e){t.blockedOn===e&&(t.blockedOn=null,Mf||(Mf=!0,Bn.unstable_scheduleCallback(Bn.unstable_NormalPriority,N1)))}function Co(t){function e(r){return io(r,t)}if(0<ec.length){io(ec[0],t);for(var n=1;n<ec.length;n++){var i=ec[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Pr!==null&&io(Pr,t),Ir!==null&&io(Ir,t),Nr!==null&&io(Nr,t),To.forEach(e),Ao.forEach(e),n=0;n<Tr.length;n++)i=Tr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Tr.length&&(n=Tr[0],n.blockedOn===null);)Vx(n),n.blockedOn===null&&Tr.shift()}var la=ar.ReactCurrentBatchConfig,Rc=!0;function L1(t,e,n,i){var r=gt,s=la.transition;la.transition=null;try{gt=1,op(t,e,n,i)}finally{gt=r,la.transition=s}}function D1(t,e,n,i){var r=gt,s=la.transition;la.transition=null;try{gt=4,op(t,e,n,i)}finally{gt=r,la.transition=s}}function op(t,e,n,i){if(Rc){var r=bf(t,e,n,i);if(r===null)Kh(t,e,i,Pc,n),g0(t,i);else if(I1(r,t,e,n,i))i.stopPropagation();else if(g0(t,i),e&4&&-1<P1.indexOf(t)){for(;r!==null;){var s=Go(r);if(s!==null&&kx(s),s=bf(t,e,n,i),s===null&&Kh(t,e,i,Pc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Kh(t,e,i,null,n)}}var Pc=null;function bf(t,e,n,i){if(Pc=null,t=ip(i),t=fs(t),t!==null)if(e=ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Rx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pc=t,null}function Gx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S1()){case rp:return 1;case Lx:return 4;case Ac:case M1:return 16;case Dx:return 536870912;default:return 16}default:return 16}}var Cr=null,lp=null,mc=null;function Hx(){if(mc)return mc;var t,e=lp,n=e.length,i,r="value"in Cr?Cr.value:Cr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return mc=r.slice(t,1<i?1-i:void 0)}function gc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tc(){return!0}function v0(){return!1}function zn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tc:v0,this.isPropagationStopped=v0,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tc)},persist:function(){},isPersistent:tc}),e}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cp=zn(va),Vo=Nt({},va,{view:0,detail:0}),F1=zn(Vo),Vh,Gh,ro,Yc=Nt({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:up,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Vh=t.screenX-ro.screenX,Gh=t.screenY-ro.screenY):Gh=Vh=0,ro=t),Vh)},movementY:function(t){return"movementY"in t?t.movementY:Gh}}),_0=zn(Yc),U1=Nt({},Yc,{dataTransfer:0}),k1=zn(U1),O1=Nt({},Vo,{relatedTarget:0}),Hh=zn(O1),B1=Nt({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),z1=zn(B1),V1=Nt({},va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),G1=zn(V1),H1=Nt({},va,{data:0}),y0=zn(H1),W1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=q1[t])?!!e[t]:!1}function up(){return K1}var $1=Nt({},Vo,{key:function(t){if(t.key){var e=W1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?X1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:up,charCode:function(t){return t.type==="keypress"?gc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Y1=zn($1),j1=Nt({},Yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S0=zn(j1),Z1=Nt({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:up}),J1=zn(Z1),Q1=Nt({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),eM=zn(Q1),tM=Nt({},Yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nM=zn(tM),iM=[9,13,27,32],dp=nr&&"CompositionEvent"in window,go=null;nr&&"documentMode"in document&&(go=document.documentMode);var rM=nr&&"TextEvent"in window&&!go,Wx=nr&&(!dp||go&&8<go&&11>=go),M0=" ",b0=!1;function Xx(t,e){switch(t){case"keyup":return iM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ys=!1;function sM(t,e){switch(t){case"compositionend":return qx(e);case"keypress":return e.which!==32?null:(b0=!0,M0);case"textInput":return t=e.data,t===M0&&b0?null:t;default:return null}}function aM(t,e){if(Ys)return t==="compositionend"||!dp&&Xx(t,e)?(t=Hx(),mc=lp=Cr=null,Ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wx&&e.locale!=="ko"?null:e.data;default:return null}}var oM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function w0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oM[t.type]:e==="textarea"}function Kx(t,e,n,i){wx(i),e=Ic(e,"onChange"),0<e.length&&(n=new cp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var xo=null,Ro=null;function lM(t){rv(t,0)}function jc(t){var e=Js(t);if(xx(e))return t}function cM(t,e){if(t==="change")return e}var $x=!1;nr&&(nr?(ic="oninput"in document,ic||(Wh=document.createElement("div"),Wh.setAttribute("oninput","return;"),ic=typeof Wh.oninput=="function"),nc=ic):nc=!1,$x=nc&&(!document.documentMode||9<document.documentMode));var nc,ic,Wh;function E0(){xo&&(xo.detachEvent("onpropertychange",Yx),Ro=xo=null)}function Yx(t){if(t.propertyName==="value"&&jc(Ro)){var e=[];Kx(e,Ro,t,ip(t)),Cx(lM,e)}}function uM(t,e,n){t==="focusin"?(E0(),xo=e,Ro=n,xo.attachEvent("onpropertychange",Yx)):t==="focusout"&&E0()}function dM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jc(Ro)}function hM(t,e){if(t==="click")return jc(e)}function fM(t,e){if(t==="input"||t==="change")return jc(e)}function pM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yi=typeof Object.is=="function"?Object.is:pM;function Po(t,e){if(yi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!sf.call(e,r)||!yi(t[r],e[r]))return!1}return!0}function T0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function A0(t,e){var n=T0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=T0(n)}}function jx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zx(){for(var t=window,e=wc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wc(t.document)}return e}function hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mM(t){var e=Zx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jx(n.ownerDocument.documentElement,n)){if(i!==null&&hp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=A0(n,s);var a=A0(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gM=nr&&"documentMode"in document&&11>=document.documentMode,js=null,wf=null,vo=null,Ef=!1;function C0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ef||js==null||js!==wc(i)||(i=js,"selectionStart"in i&&hp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),vo&&Po(vo,i)||(vo=i,i=Ic(wf,"onSelect"),0<i.length&&(e=new cp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=js)))}function rc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zs={animationend:rc("Animation","AnimationEnd"),animationiteration:rc("Animation","AnimationIteration"),animationstart:rc("Animation","AnimationStart"),transitionend:rc("Transition","TransitionEnd")},Xh={},Jx={};nr&&(Jx=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Zc(t){if(Xh[t])return Xh[t];if(!Zs[t])return t;var e=Zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jx)return Xh[t]=e[n];return t}var Qx=Zc("animationend"),ev=Zc("animationiteration"),tv=Zc("animationstart"),nv=Zc("transitionend"),iv=new Map,R0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){iv.set(t,e),bs(e,[t])}for(sc=0;sc<R0.length;sc++)ac=R0[sc],P0=ac.toLowerCase(),I0=ac[0].toUpperCase()+ac.slice(1),zr(P0,"on"+I0);var ac,P0,I0,sc;zr(Qx,"onAnimationEnd");zr(ev,"onAnimationIteration");zr(tv,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(nv,"onTransitionEnd");da("onMouseEnter",["mouseout","mouseover"]);da("onMouseLeave",["mouseout","mouseover"]);da("onPointerEnter",["pointerout","pointerover"]);da("onPointerLeave",["pointerout","pointerover"]);bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xM=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function N0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,x1(i,e,void 0,t),t.currentTarget=null}function rv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;N0(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;N0(r,o,c),s=l}}}if(Tc)throw t=yf,Tc=!1,yf=null,t}function Mt(t,e){var n=e[Pf];n===void 0&&(n=e[Pf]=new Set);var i=t+"__bubble";n.has(i)||(sv(e,t,2,!1),n.add(i))}function qh(t,e,n){var i=0;e&&(i|=4),sv(n,t,i,e)}var oc="_reactListening"+Math.random().toString(36).slice(2);function Io(t){if(!t[oc]){t[oc]=!0,hx.forEach(function(n){n!=="selectionchange"&&(xM.has(n)||qh(n,!1,t),qh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oc]||(e[oc]=!0,qh("selectionchange",!1,e))}}function sv(t,e,n,i){switch(Gx(e)){case 1:var r=L1;break;case 4:r=D1;break;default:r=op}n=r.bind(null,e,n,t),r=void 0,!_f||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Kh(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=fs(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Cx(function(){var c=s,h=ip(n),f=[];e:{var d=iv.get(t);if(d!==void 0){var m=cp,y=t;switch(t){case"keypress":if(gc(n)===0)break e;case"keydown":case"keyup":m=Y1;break;case"focusin":y="focus",m=Hh;break;case"focusout":y="blur",m=Hh;break;case"beforeblur":case"afterblur":m=Hh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=_0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=k1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=J1;break;case Qx:case ev:case tv:m=z1;break;case nv:m=eM;break;case"scroll":m=F1;break;case"wheel":m=nM;break;case"copy":case"cut":case"paste":m=G1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=S0}var b=(e&4)!==0,g=!b&&t==="scroll",u=b?d!==null?d+"Capture":null:d;b=[];for(var p=c,_;p!==null;){_=p;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,u!==null&&(M=Eo(p,u),M!=null&&b.push(No(p,M,_)))),g)break;p=p.return}0<b.length&&(d=new m(d,y,null,n,h),f.push({event:d,listeners:b}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==xf&&(y=n.relatedTarget||n.fromElement)&&(fs(y)||y[ir]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=c,y=y?fs(y):null,y!==null&&(g=ws(y),y!==g||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(b=_0,M="onMouseLeave",u="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(b=S0,M="onPointerLeave",u="onPointerEnter",p="pointer"),g=m==null?d:Js(m),_=y==null?d:Js(y),d=new b(M,p+"leave",m,n,h),d.target=g,d.relatedTarget=_,M=null,fs(h)===c&&(b=new b(u,p+"enter",y,n,h),b.target=_,b.relatedTarget=g,M=b),g=M,m&&y)t:{for(b=m,u=y,p=0,_=b;_;_=qs(_))p++;for(_=0,M=u;M;M=qs(M))_++;for(;0<p-_;)b=qs(b),p--;for(;0<_-p;)u=qs(u),_--;for(;p--;){if(b===u||u!==null&&b===u.alternate)break t;b=qs(b),u=qs(u)}b=null}else b=null;m!==null&&L0(f,d,m,b,!1),y!==null&&g!==null&&L0(f,g,y,b,!0)}}e:{if(d=c?Js(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var T=cM;else if(w0(d))if($x)T=fM;else{T=dM;var E=uM}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=hM);if(T&&(T=T(t,c))){Kx(f,T,n,h);break e}E&&E(t,d,c),t==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&hf(d,"number",d.value)}switch(E=c?Js(c):window,t){case"focusin":(w0(E)||E.contentEditable==="true")&&(js=E,wf=c,vo=null);break;case"focusout":vo=wf=js=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,C0(f,n,h);break;case"selectionchange":if(gM)break;case"keydown":case"keyup":C0(f,n,h)}var R;if(dp)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ys?Xx(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Wx&&n.locale!=="ko"&&(Ys||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ys&&(R=Hx()):(Cr=h,lp="value"in Cr?Cr.value:Cr.textContent,Ys=!0)),E=Ic(c,x),0<E.length&&(x=new y0(x,t,null,n,h),f.push({event:x,listeners:E}),R?x.data=R:(R=qx(n),R!==null&&(x.data=R)))),(R=rM?sM(t,n):aM(t,n))&&(c=Ic(c,"onBeforeInput"),0<c.length&&(h=new y0("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=R))}rv(f,e)})}function No(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ic(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Eo(t,n),s!=null&&i.unshift(No(t,s,r)),s=Eo(t,e),s!=null&&i.push(No(t,s,r))),t=t.return}return i}function qs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function L0(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Eo(n,s),l!=null&&a.unshift(No(n,l,o))):r||(l=Eo(n,s),l!=null&&a.push(No(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var vM=/\r\n?/g,_M=/\u0000|\uFFFD/g;function D0(t){return(typeof t=="string"?t:""+t).replace(vM,`
`).replace(_M,"")}function lc(t,e,n){if(e=D0(e),D0(t)!==e&&n)throw Error(ne(425))}function Nc(){}var Tf=null,Af=null;function Cf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rf=typeof setTimeout=="function"?setTimeout:void 0,yM=typeof clearTimeout=="function"?clearTimeout:void 0,F0=typeof Promise=="function"?Promise:void 0,SM=typeof queueMicrotask=="function"?queueMicrotask:typeof F0<"u"?function(t){return F0.resolve(null).then(t).catch(MM)}:Rf;function MM(t){setTimeout(function(){throw t})}function $h(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Co(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Co(e)}function Lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function U0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _a=Math.random().toString(36).slice(2),Li="__reactFiber$"+_a,Lo="__reactProps$"+_a,ir="__reactContainer$"+_a,Pf="__reactEvents$"+_a,bM="__reactListeners$"+_a,wM="__reactHandles$"+_a;function fs(t){var e=t[Li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ir]||n[Li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=U0(t);t!==null;){if(n=t[Li])return n;t=U0(t)}return e}t=n,n=t.parentNode}return null}function Go(t){return t=t[Li]||t[ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Jc(t){return t[Lo]||null}var If=[],Qs=-1;function Vr(t){return{current:t}}function bt(t){0>Qs||(t.current=If[Qs],If[Qs]=null,Qs--)}function St(t,e){Qs++,If[Qs]=t.current,t.current=e}var Br={},cn=Vr(Br),Tn=Vr(!1),vs=Br;function ha(t,e){var n=t.type.contextTypes;if(!n)return Br;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function An(t){return t=t.childContextTypes,t!=null}function Lc(){bt(Tn),bt(cn)}function k0(t,e,n){if(cn.current!==Br)throw Error(ne(168));St(cn,e),St(Tn,n)}function av(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,u1(t)||"Unknown",r));return Nt({},n,i)}function Dc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Br,vs=cn.current,St(cn,t),St(Tn,Tn.current),!0}function O0(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=av(t,e,vs),i.__reactInternalMemoizedMergedChildContext=t,bt(Tn),bt(cn),St(cn,t)):bt(Tn),St(Tn,n)}var Ji=null,Qc=!1,Yh=!1;function ov(t){Ji===null?Ji=[t]:Ji.push(t)}function EM(t){Qc=!0,ov(t)}function Gr(){if(!Yh&&Ji!==null){Yh=!0;var t=0,e=gt;try{var n=Ji;for(gt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ji=null,Qc=!1}catch(r){throw Ji!==null&&(Ji=Ji.slice(t+1)),Nx(rp,Gr),r}finally{gt=e,Yh=!1}}return null}var ea=[],ta=0,Fc=null,Uc=0,ei=[],ti=0,_s=null,Qi=1,er="";function ds(t,e){ea[ta++]=Uc,ea[ta++]=Fc,Fc=t,Uc=e}function lv(t,e,n){ei[ti++]=Qi,ei[ti++]=er,ei[ti++]=_s,_s=t;var i=Qi;t=er;var r=32-vi(i)-1;i&=~(1<<r),n+=1;var s=32-vi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Qi=1<<32-vi(e)+r|n<<r|i,er=s+t}else Qi=1<<s|n<<r|i,er=t}function fp(t){t.return!==null&&(ds(t,1),lv(t,1,0))}function pp(t){for(;t===Fc;)Fc=ea[--ta],ea[ta]=null,Uc=ea[--ta],ea[ta]=null;for(;t===_s;)_s=ei[--ti],ei[ti]=null,er=ei[--ti],ei[ti]=null,Qi=ei[--ti],ei[ti]=null}var On=null,kn=null,At=!1,xi=null;function cv(t,e){var n=ni(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function B0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,On=t,kn=Lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,On=t,kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_s!==null?{id:Qi,overflow:er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ni(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,On=t,kn=null,!0):!1;default:return!1}}function Nf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lf(t){if(At){var e=kn;if(e){var n=e;if(!B0(t,e)){if(Nf(t))throw Error(ne(418));e=Lr(n.nextSibling);var i=On;e&&B0(t,e)?cv(i,n):(t.flags=t.flags&-4097|2,At=!1,On=t)}}else{if(Nf(t))throw Error(ne(418));t.flags=t.flags&-4097|2,At=!1,On=t}}}function z0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function cc(t){if(t!==On)return!1;if(!At)return z0(t),At=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cf(t.type,t.memoizedProps)),e&&(e=kn)){if(Nf(t))throw uv(),Error(ne(418));for(;e;)cv(t,e),e=Lr(e.nextSibling)}if(z0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kn=Lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kn=null}}else kn=On?Lr(t.stateNode.nextSibling):null;return!0}function uv(){for(var t=kn;t;)t=Lr(t.nextSibling)}function fa(){kn=On=null,At=!1}function mp(t){xi===null?xi=[t]:xi.push(t)}var TM=ar.ReactCurrentBatchConfig;function so(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function uc(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function V0(t){var e=t._init;return e(t._payload)}function dv(t){function e(u,p){if(t){var _=u.deletions;_===null?(u.deletions=[p],u.flags|=16):_.push(p)}}function n(u,p){if(!t)return null;for(;p!==null;)e(u,p),p=p.sibling;return null}function i(u,p){for(u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function r(u,p){return u=kr(u,p),u.index=0,u.sibling=null,u}function s(u,p,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<p?(u.flags|=2,p):_):(u.flags|=2,p)):(u.flags|=1048576,p)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,p,_,M){return p===null||p.tag!==6?(p=nf(_,u.mode,M),p.return=u,p):(p=r(p,_),p.return=u,p)}function l(u,p,_,M){var T=_.type;return T===$s?h(u,p,_.props.children,M,_.key):p!==null&&(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===wr&&V0(T)===p.type)?(M=r(p,_.props),M.ref=so(u,p,_),M.return=u,M):(M=bc(_.type,_.key,_.props,null,u.mode,M),M.ref=so(u,p,_),M.return=u,M)}function c(u,p,_,M){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=rf(_,u.mode,M),p.return=u,p):(p=r(p,_.children||[]),p.return=u,p)}function h(u,p,_,M,T){return p===null||p.tag!==7?(p=xs(_,u.mode,M,T),p.return=u,p):(p=r(p,_),p.return=u,p)}function f(u,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=nf(""+p,u.mode,_),p.return=u,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Yl:return _=bc(p.type,p.key,p.props,null,u.mode,_),_.ref=so(u,null,p),_.return=u,_;case Ks:return p=rf(p,u.mode,_),p.return=u,p;case wr:var M=p._init;return f(u,M(p._payload),_)}if(uo(p)||to(p))return p=xs(p,u.mode,_,null),p.return=u,p;uc(u,p)}return null}function d(u,p,_,M){var T=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return T!==null?null:o(u,p,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Yl:return _.key===T?l(u,p,_,M):null;case Ks:return _.key===T?c(u,p,_,M):null;case wr:return T=_._init,d(u,p,T(_._payload),M)}if(uo(_)||to(_))return T!==null?null:h(u,p,_,M,null);uc(u,_)}return null}function m(u,p,_,M,T){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(_)||null,o(p,u,""+M,T);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Yl:return u=u.get(M.key===null?_:M.key)||null,l(p,u,M,T);case Ks:return u=u.get(M.key===null?_:M.key)||null,c(p,u,M,T);case wr:var E=M._init;return m(u,p,_,E(M._payload),T)}if(uo(M)||to(M))return u=u.get(_)||null,h(p,u,M,T,null);uc(p,M)}return null}function y(u,p,_,M){for(var T=null,E=null,R=p,x=p=0,C=null;R!==null&&x<_.length;x++){R.index>x?(C=R,R=null):C=R.sibling;var P=d(u,R,_[x],M);if(P===null){R===null&&(R=C);break}t&&R&&P.alternate===null&&e(u,R),p=s(P,p,x),E===null?T=P:E.sibling=P,E=P,R=C}if(x===_.length)return n(u,R),At&&ds(u,x),T;if(R===null){for(;x<_.length;x++)R=f(u,_[x],M),R!==null&&(p=s(R,p,x),E===null?T=R:E.sibling=R,E=R);return At&&ds(u,x),T}for(R=i(u,R);x<_.length;x++)C=m(R,u,x,_[x],M),C!==null&&(t&&C.alternate!==null&&R.delete(C.key===null?x:C.key),p=s(C,p,x),E===null?T=C:E.sibling=C,E=C);return t&&R.forEach(function(I){return e(u,I)}),At&&ds(u,x),T}function b(u,p,_,M){var T=to(_);if(typeof T!="function")throw Error(ne(150));if(_=T.call(_),_==null)throw Error(ne(151));for(var E=T=null,R=p,x=p=0,C=null,P=_.next();R!==null&&!P.done;x++,P=_.next()){R.index>x?(C=R,R=null):C=R.sibling;var I=d(u,R,P.value,M);if(I===null){R===null&&(R=C);break}t&&R&&I.alternate===null&&e(u,R),p=s(I,p,x),E===null?T=I:E.sibling=I,E=I,R=C}if(P.done)return n(u,R),At&&ds(u,x),T;if(R===null){for(;!P.done;x++,P=_.next())P=f(u,P.value,M),P!==null&&(p=s(P,p,x),E===null?T=P:E.sibling=P,E=P);return At&&ds(u,x),T}for(R=i(u,R);!P.done;x++,P=_.next())P=m(R,u,x,P.value,M),P!==null&&(t&&P.alternate!==null&&R.delete(P.key===null?x:P.key),p=s(P,p,x),E===null?T=P:E.sibling=P,E=P);return t&&R.forEach(function(U){return e(u,U)}),At&&ds(u,x),T}function g(u,p,_,M){if(typeof _=="object"&&_!==null&&_.type===$s&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Yl:e:{for(var T=_.key,E=p;E!==null;){if(E.key===T){if(T=_.type,T===$s){if(E.tag===7){n(u,E.sibling),p=r(E,_.props.children),p.return=u,u=p;break e}}else if(E.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===wr&&V0(T)===E.type){n(u,E.sibling),p=r(E,_.props),p.ref=so(u,E,_),p.return=u,u=p;break e}n(u,E);break}else e(u,E);E=E.sibling}_.type===$s?(p=xs(_.props.children,u.mode,M,_.key),p.return=u,u=p):(M=bc(_.type,_.key,_.props,null,u.mode,M),M.ref=so(u,p,_),M.return=u,u=M)}return a(u);case Ks:e:{for(E=_.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(u,p.sibling),p=r(p,_.children||[]),p.return=u,u=p;break e}else{n(u,p);break}else e(u,p);p=p.sibling}p=rf(_,u.mode,M),p.return=u,u=p}return a(u);case wr:return E=_._init,g(u,p,E(_._payload),M)}if(uo(_))return y(u,p,_,M);if(to(_))return b(u,p,_,M);uc(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(u,p.sibling),p=r(p,_),p.return=u,u=p):(n(u,p),p=nf(_,u.mode,M),p.return=u,u=p),a(u)):n(u,p)}return g}var pa=dv(!0),hv=dv(!1),kc=Vr(null),Oc=null,na=null,gp=null;function xp(){gp=na=Oc=null}function vp(t){var e=kc.current;bt(kc),t._currentValue=e}function Df(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ca(t,e){Oc=t,gp=na=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(En=!0),t.firstContext=null)}function ri(t){var e=t._currentValue;if(gp!==t)if(t={context:t,memoizedValue:e,next:null},na===null){if(Oc===null)throw Error(ne(308));na=t,Oc.dependencies={lanes:0,firstContext:t}}else na=na.next=t;return e}var ps=null;function _p(t){ps===null?ps=[t]:ps.push(t)}function fv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,_p(e)):(n.next=r.next,r.next=n),e.interleaved=n,rr(t,i)}function rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Er=!1;function yp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(lt&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,rr(t,n)}return r=i.interleaved,r===null?(e.next=e,_p(i)):(e.next=r.next,r.next=e),i.interleaved=e,rr(t,n)}function xc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sp(t,n)}}function G0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bc(t,e,n,i){var r=t.updateQueue;Er=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,h=c=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,b=o;switch(d=e,m=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){f=y.call(m,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,d=typeof y=="function"?y.call(m,f,d):y,d==null)break e;f=Nt({},f,d);break e;case 2:Er=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,l=f):h=h.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ss|=a,t.lanes=a,t.memoizedState=f}}function H0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Ho={},Fi=Vr(Ho),Do=Vr(Ho),Fo=Vr(Ho);function ms(t){if(t===Ho)throw Error(ne(174));return t}function Sp(t,e){switch(St(Fo,e),St(Do,t),St(Fi,Ho),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pf(e,t)}bt(Fi),St(Fi,e)}function ma(){bt(Fi),bt(Do),bt(Fo)}function mv(t){ms(Fo.current);var e=ms(Fi.current),n=pf(e,t.type);e!==n&&(St(Do,t),St(Fi,n))}function Mp(t){Do.current===t&&(bt(Fi),bt(Do))}var Pt=Vr(0);function zc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jh=[];function bp(){for(var t=0;t<jh.length;t++)jh[t]._workInProgressVersionPrimary=null;jh.length=0}var vc=ar.ReactCurrentDispatcher,Zh=ar.ReactCurrentBatchConfig,ys=0,It=null,Vt=null,qt=null,Vc=!1,_o=!1,Uo=0,AM=0;function an(){throw Error(ne(321))}function wp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yi(t[n],e[n]))return!1;return!0}function Ep(t,e,n,i,r,s){if(ys=s,It=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vc.current=t===null||t.memoizedState===null?IM:NM,t=n(i,r),_o){s=0;do{if(_o=!1,Uo=0,25<=s)throw Error(ne(301));s+=1,qt=Vt=null,e.updateQueue=null,vc.current=LM,t=n(i,r)}while(_o)}if(vc.current=Gc,e=Vt!==null&&Vt.next!==null,ys=0,qt=Vt=It=null,Vc=!1,e)throw Error(ne(300));return t}function Tp(){var t=Uo!==0;return Uo=0,t}function Ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?It.memoizedState=qt=t:qt=qt.next=t,qt}function si(){if(Vt===null){var t=It.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=qt===null?It.memoizedState:qt.next;if(e!==null)qt=e,Vt=t;else{if(t===null)throw Error(ne(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},qt===null?It.memoizedState=qt=t:qt=qt.next=t}return qt}function ko(t,e){return typeof e=="function"?e(t):e}function Jh(t){var e=si(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((ys&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,It.lanes|=h,Ss|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,yi(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,It.lanes|=s,Ss|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qh(t){var e=si(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);yi(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function gv(){}function xv(t,e){var n=It,i=si(),r=e(),s=!yi(i.memoizedState,r);if(s&&(i.memoizedState=r,En=!0),i=i.queue,Ap(yv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||qt!==null&&qt.memoizedState.tag&1){if(n.flags|=2048,Oo(9,_v.bind(null,n,i,r,e),void 0,null),Kt===null)throw Error(ne(349));(ys&30)!==0||vv(n,e,r)}return r}function vv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=It.updateQueue,e===null?(e={lastEffect:null,stores:null},It.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _v(t,e,n,i){e.value=n,e.getSnapshot=i,Sv(e)&&Mv(t)}function yv(t,e,n){return n(function(){Sv(e)&&Mv(t)})}function Sv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yi(t,n)}catch{return!0}}function Mv(t){var e=rr(t,1);e!==null&&_i(e,t,1,-1)}function W0(t){var e=Ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:t},e.queue=t,t=t.dispatch=PM.bind(null,It,t),[e.memoizedState,t]}function Oo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=It.updateQueue,e===null?(e={lastEffect:null,stores:null},It.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function bv(){return si().memoizedState}function _c(t,e,n,i){var r=Ni();It.flags|=t,r.memoizedState=Oo(1|e,n,void 0,i===void 0?null:i)}function eu(t,e,n,i){var r=si();i=i===void 0?null:i;var s=void 0;if(Vt!==null){var a=Vt.memoizedState;if(s=a.destroy,i!==null&&wp(i,a.deps)){r.memoizedState=Oo(e,n,s,i);return}}It.flags|=t,r.memoizedState=Oo(1|e,n,s,i)}function X0(t,e){return _c(8390656,8,t,e)}function Ap(t,e){return eu(2048,8,t,e)}function wv(t,e){return eu(4,2,t,e)}function Ev(t,e){return eu(4,4,t,e)}function Tv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Av(t,e,n){return n=n!=null?n.concat([t]):null,eu(4,4,Tv.bind(null,e,t),n)}function Cp(){}function Cv(t,e){var n=si();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Rv(t,e){var n=si();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Pv(t,e,n){return(ys&21)===0?(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=n):(yi(n,e)||(n=Fx(),It.lanes|=n,Ss|=n,t.baseState=!0),e)}function CM(t,e){var n=gt;gt=n!==0&&4>n?n:4,t(!0);var i=Zh.transition;Zh.transition={};try{t(!1),e()}finally{gt=n,Zh.transition=i}}function Iv(){return si().memoizedState}function RM(t,e,n){var i=Ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Nv(t))Lv(e,n);else if(n=fv(t,e,n,i),n!==null){var r=gn();_i(n,t,i,r),Dv(n,e,i)}}function PM(t,e,n){var i=Ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nv(t))Lv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,yi(o,a)){var l=e.interleaved;l===null?(r.next=r,_p(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=fv(t,e,r,i),n!==null&&(r=gn(),_i(n,t,i,r),Dv(n,e,i))}}function Nv(t){var e=t.alternate;return t===It||e!==null&&e===It}function Lv(t,e){_o=Vc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dv(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sp(t,n)}}var Gc={readContext:ri,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useInsertionEffect:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useMutableSource:an,useSyncExternalStore:an,useId:an,unstable_isNewReconciler:!1},IM={readContext:ri,useCallback:function(t,e){return Ni().memoizedState=[t,e===void 0?null:e],t},useContext:ri,useEffect:X0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_c(4194308,4,Tv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _c(4194308,4,t,e)},useInsertionEffect:function(t,e){return _c(4,2,t,e)},useMemo:function(t,e){var n=Ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=RM.bind(null,It,t),[i.memoizedState,t]},useRef:function(t){var e=Ni();return t={current:t},e.memoizedState=t},useState:W0,useDebugValue:Cp,useDeferredValue:function(t){return Ni().memoizedState=t},useTransition:function(){var t=W0(!1),e=t[0];return t=CM.bind(null,t[1]),Ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=It,r=Ni();if(At){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Kt===null)throw Error(ne(349));(ys&30)!==0||vv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,X0(yv.bind(null,i,s,t),[t]),i.flags|=2048,Oo(9,_v.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ni(),e=Kt.identifierPrefix;if(At){var n=er,i=Qi;n=(i&~(1<<32-vi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=AM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},NM={readContext:ri,useCallback:Cv,useContext:ri,useEffect:Ap,useImperativeHandle:Av,useInsertionEffect:wv,useLayoutEffect:Ev,useMemo:Rv,useReducer:Jh,useRef:bv,useState:function(){return Jh(ko)},useDebugValue:Cp,useDeferredValue:function(t){var e=si();return Pv(e,Vt.memoizedState,t)},useTransition:function(){var t=Jh(ko)[0],e=si().memoizedState;return[t,e]},useMutableSource:gv,useSyncExternalStore:xv,useId:Iv,unstable_isNewReconciler:!1},LM={readContext:ri,useCallback:Cv,useContext:ri,useEffect:Ap,useImperativeHandle:Av,useInsertionEffect:wv,useLayoutEffect:Ev,useMemo:Rv,useReducer:Qh,useRef:bv,useState:function(){return Qh(ko)},useDebugValue:Cp,useDeferredValue:function(t){var e=si();return Vt===null?e.memoizedState=t:Pv(e,Vt.memoizedState,t)},useTransition:function(){var t=Qh(ko)[0],e=si().memoizedState;return[t,e]},useMutableSource:gv,useSyncExternalStore:xv,useId:Iv,unstable_isNewReconciler:!1};function mi(t,e){if(t&&t.defaultProps){e=Nt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ff(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tu={isMounted:function(t){return(t=t._reactInternals)?ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=gn(),r=Ur(t),s=tr(i,r);s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,r),e!==null&&(_i(e,t,r,i),xc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=gn(),r=Ur(t),s=tr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,r),e!==null&&(_i(e,t,r,i),xc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gn(),i=Ur(t),r=tr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Dr(t,r,i),e!==null&&(_i(e,t,i,n),xc(e,t,i))}};function q0(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Po(n,i)||!Po(r,s):!0}function Fv(t,e,n){var i=!1,r=Br,s=e.contextType;return typeof s=="object"&&s!==null?s=ri(s):(r=An(e)?vs:cn.current,i=e.contextTypes,s=(i=i!=null)?ha(t,r):Br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function K0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)}function Uf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},yp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ri(s):(s=An(e)?vs:cn.current,r.context=ha(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ff(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tu.enqueueReplaceState(r,r.state,null),Bc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ga(t,e){try{var n="",i=e;do n+=c1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ef(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var DM=typeof WeakMap=="function"?WeakMap:Map;function Uv(t,e,n){n=tr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Wc||(Wc=!0,Kf=i),kf(t,e)},n}function kv(t,e,n){n=tr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){kf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){kf(t,e),typeof i!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function $0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new DM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=$M.bind(null,t,e,n),e.then(t,t))}function Y0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function j0(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=tr(-1,1),e.tag=2,Dr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var FM=ar.ReactCurrentOwner,En=!1;function mn(t,e,n,i){e.child=t===null?hv(e,null,n,i):pa(e,t.child,n,i)}function Z0(t,e,n,i,r){n=n.render;var s=e.ref;return ca(e,r),i=Ep(t,e,n,i,s,r),n=Tp(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,sr(t,e,r)):(At&&n&&fp(e),e.flags|=1,mn(t,e,i,r),e.child)}function J0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Up(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ov(t,e,s,i,r)):(t=bc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Po,n(a,i)&&t.ref===e.ref)return sr(t,e,r)}return e.flags|=1,t=kr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ov(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Po(s,i)&&t.ref===e.ref)if(En=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(En=!0);else return e.lanes=t.lanes,sr(t,e,r)}return Of(t,e,n,i,r)}function Bv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},St(ra,Un),Un|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,St(ra,Un),Un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,St(ra,Un),Un|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,St(ra,Un),Un|=i;return mn(t,e,r,n),e.child}function zv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Of(t,e,n,i,r){var s=An(n)?vs:cn.current;return s=ha(e,s),ca(e,r),n=Ep(t,e,n,i,s,r),i=Tp(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,sr(t,e,r)):(At&&i&&fp(e),e.flags|=1,mn(t,e,n,r),e.child)}function Q0(t,e,n,i,r){if(An(n)){var s=!0;Dc(e)}else s=!1;if(ca(e,r),e.stateNode===null)yc(t,e),Fv(e,n,i),Uf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=ri(c):(c=An(n)?vs:cn.current,c=ha(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&K0(e,a,i,c),Er=!1;var d=e.memoizedState;a.state=d,Bc(e,i,a,r),l=e.memoizedState,o!==i||d!==l||Tn.current||Er?(typeof h=="function"&&(Ff(e,n,h,i),l=e.memoizedState),(o=Er||q0(e,n,o,i,d,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,pv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:mi(e.type,o),a.props=c,f=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=ri(l):(l=An(n)?vs:cn.current,l=ha(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&K0(e,a,i,l),Er=!1,d=e.memoizedState,a.state=d,Bc(e,i,a,r);var y=e.memoizedState;o!==f||d!==y||Tn.current||Er?(typeof m=="function"&&(Ff(e,n,m,i),y=e.memoizedState),(c=Er||q0(e,n,c,i,d,y,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,y,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),a.props=i,a.state=y,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Bf(t,e,n,i,s,r)}function Bf(t,e,n,i,r,s){zv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&O0(e,n,!1),sr(t,e,s);i=e.stateNode,FM.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=pa(e,t.child,null,s),e.child=pa(e,null,o,s)):mn(t,e,o,s),e.memoizedState=i.state,r&&O0(e,n,!0),e.child}function Vv(t){var e=t.stateNode;e.pendingContext?k0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&k0(t,e.context,!1),Sp(t,e.containerInfo)}function ex(t,e,n,i,r){return fa(),mp(r),e.flags|=256,mn(t,e,n,i),e.child}var zf={dehydrated:null,treeContext:null,retryLane:0};function Vf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gv(t,e,n){var i=e.pendingProps,r=Pt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),St(Pt,r&1),t===null)return Lf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ru(a,i,0,null),t=xs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vf(n),e.memoizedState=zf,t):Rp(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return UM(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return(a&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=kr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=kr(o,s):(s=xs(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Vf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=zf,i}return s=t.child,t=s.sibling,i=kr(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Rp(t,e){return e=ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function dc(t,e,n,i){return i!==null&&mp(i),pa(e,t.child,null,n),t=Rp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function UM(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=ef(Error(ne(422))),dc(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ru({mode:"visible",children:i.children},r,0,null),s=xs(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&pa(e,t.child,null,a),e.child.memoizedState=Vf(a),e.memoizedState=zf,s);if((e.mode&1)===0)return dc(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=ef(s,i,void 0),dc(t,e,a,i)}if(o=(a&t.childLanes)!==0,En||o){if(i=Kt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|a))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,rr(t,r),_i(i,t,r,-1))}return Fp(),i=ef(Error(ne(421))),dc(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=YM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,kn=Lr(r.nextSibling),On=e,At=!0,xi=null,t!==null&&(ei[ti++]=Qi,ei[ti++]=er,ei[ti++]=_s,Qi=t.id,er=t.overflow,_s=e),e=Rp(e,i.children),e.flags|=4096,e)}function tx(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Df(t.return,e,n)}function tf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Hv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(mn(t,e,i.children,n),i=Pt.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tx(t,n,e);else if(t.tag===19)tx(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(St(Pt,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&zc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),tf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&zc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}tf(e,!0,n,null,s);break;case"together":tf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yc(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ss|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kM(t,e,n){switch(e.tag){case 3:Vv(e),fa();break;case 5:mv(e);break;case 1:An(e.type)&&Dc(e);break;case 4:Sp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;St(kc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(St(Pt,Pt.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Gv(t,e,n):(St(Pt,Pt.current&1),t=sr(t,e,n),t!==null?t.sibling:null);St(Pt,Pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return Hv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),St(Pt,Pt.current),i)break;return null;case 22:case 23:return e.lanes=0,Bv(t,e,n)}return sr(t,e,n)}var Wv,Gf,Xv,qv;Wv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gf=function(){};Xv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ms(Fi.current);var s=null;switch(n){case"input":r=uf(t,r),i=uf(t,i),s=[];break;case"select":r=Nt({},r,{value:void 0}),i=Nt({},i,{value:void 0}),s=[];break;case"textarea":r=ff(t,r),i=ff(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Nc)}mf(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r?.[c],i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Mt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};qv=function(t,e,n,i){n!==i&&(e.flags|=4)};function ao(t,e){if(!At)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function on(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function OM(t,e,n){var i=e.pendingProps;switch(pp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(e),null;case 1:return An(e.type)&&Lc(),on(e),null;case 3:return i=e.stateNode,ma(),bt(Tn),bt(cn),bp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(cc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,xi!==null&&(jf(xi),xi=null))),Gf(t,e),on(e),null;case 5:Mp(e);var r=ms(Fo.current);if(n=e.type,t!==null&&e.stateNode!=null)Xv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return on(e),null}if(t=ms(Fi.current),cc(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Li]=e,i[Lo]=s,t=(e.mode&1)!==0,n){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(r=0;r<fo.length;r++)Mt(fo[r],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":c0(i,s),Mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Mt("invalid",i);break;case"textarea":d0(i,s),Mt("invalid",i)}mf(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&lc(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&lc(i.textContent,o,t),r=["children",""+o]):bo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Mt("scroll",i)}switch(n){case"input":jl(i),u0(i,s,!0);break;case"textarea":jl(i),h0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Nc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Li]=e,t[Lo]=i,Wv(t,e,!1,!1),e.stateNode=t;e:{switch(a=gf(n,i),n){case"dialog":Mt("cancel",t),Mt("close",t),r=i;break;case"iframe":case"object":case"embed":Mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<fo.length;r++)Mt(fo[r],t);r=i;break;case"source":Mt("error",t),r=i;break;case"img":case"image":case"link":Mt("error",t),Mt("load",t),r=i;break;case"details":Mt("toggle",t),r=i;break;case"input":c0(t,i),r=uf(t,i),Mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Nt({},i,{value:void 0}),Mt("invalid",t);break;case"textarea":d0(t,i),r=ff(t,i),Mt("invalid",t);break;default:r=i}mf(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?bx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wo(t,l):typeof l=="number"&&wo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Mt("scroll",t):l!=null&&Qf(t,s,l,a))}switch(n){case"input":jl(t),u0(t,i,!1);break;case"textarea":jl(t),h0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?sa(t,!!i.multiple,s,!1):i.defaultValue!=null&&sa(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Nc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return on(e),null;case 6:if(t&&e.stateNode!=null)qv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=ms(Fo.current),ms(Fi.current),cc(e)){if(i=e.stateNode,n=e.memoizedProps,i[Li]=e,(s=i.nodeValue!==n)&&(t=On,t!==null))switch(t.tag){case 3:lc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Li]=e,e.stateNode=i}return on(e),null;case 13:if(bt(Pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(At&&kn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)uv(),fa(),e.flags|=98560,s=!1;else if(s=cc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Li]=e}else fa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;on(e),s=!1}else xi!==null&&(jf(xi),xi=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Pt.current&1)!==0?Gt===0&&(Gt=3):Fp())),e.updateQueue!==null&&(e.flags|=4),on(e),null);case 4:return ma(),Gf(t,e),t===null&&Io(e.stateNode.containerInfo),on(e),null;case 10:return vp(e.type._context),on(e),null;case 17:return An(e.type)&&Lc(),on(e),null;case 19:if(bt(Pt),s=e.memoizedState,s===null)return on(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ao(s,!1);else{if(Gt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(a=zc(t),a!==null){for(e.flags|=128,ao(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return St(Pt,Pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ot()>xa&&(e.flags|=128,i=!0,ao(s,!1),e.lanes=4194304)}else{if(!i)if(t=zc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!At)return on(e),null}else 2*Ot()-s.renderingStartTime>xa&&n!==1073741824&&(e.flags|=128,i=!0,ao(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ot(),e.sibling=null,n=Pt.current,St(Pt,i?n&1|2:n&1),e):(on(e),null);case 22:case 23:return Dp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Un&1073741824)!==0&&(on(e),e.subtreeFlags&6&&(e.flags|=8192)):on(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function BM(t,e){switch(pp(e),e.tag){case 1:return An(e.type)&&Lc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ma(),bt(Tn),bt(cn),bp(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Mp(e),null;case 13:if(bt(Pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));fa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return bt(Pt),null;case 4:return ma(),null;case 10:return vp(e.type._context),null;case 22:case 23:return Dp(),null;case 24:return null;default:return null}}var hc=!1,ln=!1,zM=typeof WeakSet=="function"?WeakSet:Set,be=null;function ia(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Dt(t,e,i)}else n.current=null}function Hf(t,e,n){try{n()}catch(i){Dt(t,e,i)}}var nx=!1;function VM(t,e){if(Tf=Rc,t=Zx(),hp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++h===i&&(l=a),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Af={focusedElem:t,selectionRange:n},Rc=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,g=y.memoizedState,u=e.stateNode,p=u.getSnapshotBeforeUpdate(e.elementType===e.type?b:mi(e.type,b),g);u.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){Dt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return y=nx,nx=!1,y}function yo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hf(e,n,s)}r=r.next}while(r!==i)}}function nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Wf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Kv(t){var e=t.alternate;e!==null&&(t.alternate=null,Kv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Li],delete e[Lo],delete e[Pf],delete e[bM],delete e[wM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $v(t){return t.tag===5||t.tag===3||t.tag===4}function ix(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$v(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nc));else if(i!==4&&(t=t.child,t!==null))for(Xf(t,e,n),t=t.sibling;t!==null;)Xf(t,e,n),t=t.sibling}function qf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qf(t,e,n),t=t.sibling;t!==null;)qf(t,e,n),t=t.sibling}var Jt=null,gi=!1;function br(t,e,n){for(n=n.child;n!==null;)Yv(t,e,n),n=n.sibling}function Yv(t,e,n){if(Di&&typeof Di.onCommitFiberUnmount=="function")try{Di.onCommitFiberUnmount($c,n)}catch{}switch(n.tag){case 5:ln||ia(n,e);case 6:var i=Jt,r=gi;Jt=null,br(t,e,n),Jt=i,gi=r,Jt!==null&&(gi?(t=Jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Jt.removeChild(n.stateNode));break;case 18:Jt!==null&&(gi?(t=Jt,n=n.stateNode,t.nodeType===8?$h(t.parentNode,n):t.nodeType===1&&$h(t,n),Co(t)):$h(Jt,n.stateNode));break;case 4:i=Jt,r=gi,Jt=n.stateNode.containerInfo,gi=!0,br(t,e,n),Jt=i,gi=r;break;case 0:case 11:case 14:case 15:if(!ln&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&((s&2)!==0||(s&4)!==0)&&Hf(n,e,a),r=r.next}while(r!==i)}br(t,e,n);break;case 1:if(!ln&&(ia(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Dt(n,e,o)}br(t,e,n);break;case 21:br(t,e,n);break;case 22:n.mode&1?(ln=(i=ln)||n.memoizedState!==null,br(t,e,n),ln=i):br(t,e,n);break;default:br(t,e,n)}}function rx(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zM),e.forEach(function(i){var r=jM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function pi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Jt=o.stateNode,gi=!1;break e;case 3:Jt=o.stateNode.containerInfo,gi=!0;break e;case 4:Jt=o.stateNode.containerInfo,gi=!0;break e}o=o.return}if(Jt===null)throw Error(ne(160));Yv(s,a,r),Jt=null,gi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Dt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jv(e,t),e=e.sibling}function jv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pi(e,t),Ii(t),i&4){try{yo(3,t,t.return),nu(3,t)}catch(b){Dt(t,t.return,b)}try{yo(5,t,t.return)}catch(b){Dt(t,t.return,b)}}break;case 1:pi(e,t),Ii(t),i&512&&n!==null&&ia(n,n.return);break;case 5:if(pi(e,t),Ii(t),i&512&&n!==null&&ia(n,n.return),t.flags&32){var r=t.stateNode;try{wo(r,"")}catch(b){Dt(t,t.return,b)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&vx(r,s),gf(o,a);var c=gf(o,s);for(a=0;a<l.length;a+=2){var h=l[a],f=l[a+1];h==="style"?bx(r,f):h==="dangerouslySetInnerHTML"?Sx(r,f):h==="children"?wo(r,f):Qf(r,h,f,c)}switch(o){case"input":df(r,s);break;case"textarea":_x(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?sa(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?sa(r,!!s.multiple,s.defaultValue,!0):sa(r,!!s.multiple,s.multiple?[]:"",!1))}r[Lo]=s}catch(b){Dt(t,t.return,b)}}break;case 6:if(pi(e,t),Ii(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(b){Dt(t,t.return,b)}}break;case 3:if(pi(e,t),Ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Co(e.containerInfo)}catch(b){Dt(t,t.return,b)}break;case 4:pi(e,t),Ii(t);break;case 13:pi(e,t),Ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Np=Ot())),i&4&&rx(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(ln=(c=ln)||h,pi(e,t),ln=c):pi(e,t),Ii(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&(t.mode&1)!==0)for(be=t,h=t.child;h!==null;){for(f=be=h;be!==null;){switch(d=be,m=d.child,d.tag){case 0:case 11:case 14:case 15:yo(4,d,d.return);break;case 1:ia(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(b){Dt(i,n,b)}}break;case 5:ia(d,d.return);break;case 22:if(d.memoizedState!==null){ax(f);continue}}m!==null?(m.return=d,be=m):ax(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Mx("display",a))}catch(b){Dt(t,t.return,b)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(b){Dt(t,t.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:pi(e,t),Ii(t),i&4&&rx(t);break;case 21:break;default:pi(e,t),Ii(t)}}function Ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($v(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(wo(r,""),i.flags&=-33);var s=ix(t);qf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=ix(t);Xf(t,o,a);break;default:throw Error(ne(161))}}catch(l){Dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function GM(t,e,n){be=t,Zv(t,e,n)}function Zv(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||hc;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||ln;o=hc;var c=ln;if(hc=a,(ln=l)&&!c)for(be=r;be!==null;)a=be,l=a.child,a.tag===22&&a.memoizedState!==null?ox(r):l!==null?(l.return=a,be=l):ox(r);for(;s!==null;)be=s,Zv(s,e,n),s=s.sibling;be=r,hc=o,ln=c}sx(t,e,n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,be=s):sx(t,e,n)}}function sx(t){for(;be!==null;){var e=be;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:ln||nu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!ln)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:mi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&H0(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}H0(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Co(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}ln||e.flags&512&&Wf(e)}catch(d){Dt(e,e.return,d)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function ax(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function ox(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nu(4,e)}catch(l){Dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Dt(e,r,l)}}var s=e.return;try{Wf(e)}catch(l){Dt(e,s,l)}break;case 5:var a=e.return;try{Wf(e)}catch(l){Dt(e,a,l)}}}catch(l){Dt(e,e.return,l)}if(e===t){be=null;break}var o=e.sibling;if(o!==null){o.return=e.return,be=o;break}be=e.return}}var HM=Math.ceil,Hc=ar.ReactCurrentDispatcher,Pp=ar.ReactCurrentOwner,ii=ar.ReactCurrentBatchConfig,lt=0,Kt=null,Bt=null,Qt=0,Un=0,ra=Vr(0),Gt=0,Bo=null,Ss=0,iu=0,Ip=0,So=null,wn=null,Np=0,xa=1/0,Zi=null,Wc=!1,Kf=null,Fr=null,fc=!1,Rr=null,Xc=0,Mo=0,$f=null,Sc=-1,Mc=0;function gn(){return(lt&6)!==0?Ot():Sc!==-1?Sc:Sc=Ot()}function Ur(t){return(t.mode&1)===0?1:(lt&2)!==0&&Qt!==0?Qt&-Qt:TM.transition!==null?(Mc===0&&(Mc=Fx()),Mc):(t=gt,t!==0||(t=window.event,t=t===void 0?16:Gx(t.type)),t)}function _i(t,e,n,i){if(50<Mo)throw Mo=0,$f=null,Error(ne(185));zo(t,n,i),((lt&2)===0||t!==Kt)&&(t===Kt&&((lt&2)===0&&(iu|=n),Gt===4&&Ar(t,Qt)),Cn(t,i),n===1&&lt===0&&(e.mode&1)===0&&(xa=Ot()+500,Qc&&Gr()))}function Cn(t,e){var n=t.callbackNode;C1(t,e);var i=Cc(t,t===Kt?Qt:0);if(i===0)n!==null&&m0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&m0(n),e===1)t.tag===0?EM(lx.bind(null,t)):ov(lx.bind(null,t)),SM(function(){(lt&6)===0&&Gr()}),n=null;else{switch(Ux(i)){case 1:n=rp;break;case 4:n=Lx;break;case 16:n=Ac;break;case 536870912:n=Dx;break;default:n=Ac}n=s_(n,Jv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jv(t,e){if(Sc=-1,Mc=0,(lt&6)!==0)throw Error(ne(327));var n=t.callbackNode;if(ua()&&t.callbackNode!==n)return null;var i=Cc(t,t===Kt?Qt:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=qc(t,i);else{e=i;var r=lt;lt|=2;var s=e_();(Kt!==t||Qt!==e)&&(Zi=null,xa=Ot()+500,gs(t,e));do try{qM();break}catch(o){Qv(t,o)}while(!0);xp(),Hc.current=s,lt=r,Bt!==null?e=0:(Kt=null,Qt=0,e=Gt)}if(e!==0){if(e===2&&(r=Sf(t),r!==0&&(i=r,e=Yf(t,r))),e===1)throw n=Bo,gs(t,0),Ar(t,i),Cn(t,Ot()),n;if(e===6)Ar(t,i);else{if(r=t.current.alternate,(i&30)===0&&!WM(r)&&(e=qc(t,i),e===2&&(s=Sf(t),s!==0&&(i=s,e=Yf(t,s))),e===1))throw n=Bo,gs(t,0),Ar(t,i),Cn(t,Ot()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:hs(t,wn,Zi);break;case 3:if(Ar(t,i),(i&130023424)===i&&(e=Np+500-Ot(),10<e)){if(Cc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){gn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Rf(hs.bind(null,t,wn,Zi),e);break}hs(t,wn,Zi);break;case 4:if(Ar(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-vi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ot()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*HM(i/1960))-i,10<i){t.timeoutHandle=Rf(hs.bind(null,t,wn,Zi),i);break}hs(t,wn,Zi);break;case 5:hs(t,wn,Zi);break;default:throw Error(ne(329))}}}return Cn(t,Ot()),t.callbackNode===n?Jv.bind(null,t):null}function Yf(t,e){var n=So;return t.current.memoizedState.isDehydrated&&(gs(t,e).flags|=256),t=qc(t,e),t!==2&&(e=wn,wn=n,e!==null&&jf(e)),t}function jf(t){wn===null?wn=t:wn.push.apply(wn,t)}function WM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!yi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~Ip,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vi(e),i=1<<n;t[n]=-1,e&=~i}}function lx(t){if((lt&6)!==0)throw Error(ne(327));ua();var e=Cc(t,0);if((e&1)===0)return Cn(t,Ot()),null;var n=qc(t,e);if(t.tag!==0&&n===2){var i=Sf(t);i!==0&&(e=i,n=Yf(t,i))}if(n===1)throw n=Bo,gs(t,0),Ar(t,e),Cn(t,Ot()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hs(t,wn,Zi),Cn(t,Ot()),null}function Lp(t,e){var n=lt;lt|=1;try{return t(e)}finally{lt=n,lt===0&&(xa=Ot()+500,Qc&&Gr())}}function Ms(t){Rr!==null&&Rr.tag===0&&(lt&6)===0&&ua();var e=lt;lt|=1;var n=ii.transition,i=gt;try{if(ii.transition=null,gt=1,t)return t()}finally{gt=i,ii.transition=n,lt=e,(lt&6)===0&&Gr()}}function Dp(){Un=ra.current,bt(ra)}function gs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yM(n)),Bt!==null)for(n=Bt.return;n!==null;){var i=n;switch(pp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Lc();break;case 3:ma(),bt(Tn),bt(cn),bp();break;case 5:Mp(i);break;case 4:ma();break;case 13:bt(Pt);break;case 19:bt(Pt);break;case 10:vp(i.type._context);break;case 22:case 23:Dp()}n=n.return}if(Kt=t,Bt=t=kr(t.current,null),Qt=Un=e,Gt=0,Bo=null,Ip=iu=Ss=0,wn=So=null,ps!==null){for(e=0;e<ps.length;e++)if(n=ps[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}ps=null}return t}function Qv(t,e){do{var n=Bt;try{if(xp(),vc.current=Gc,Vc){for(var i=It.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vc=!1}if(ys=0,qt=Vt=It=null,_o=!1,Uo=0,Pp.current=null,n===null||n.return===null){Gt=1,Bo=e,Bt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Qt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,f=h.tag;if((h.mode&1)===0&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Y0(a);if(m!==null){m.flags&=-257,j0(m,a,o,s,e),m.mode&1&&$0(s,c,e),e=m,l=c;var y=e.updateQueue;if(y===null){var b=new Set;b.add(l),e.updateQueue=b}else y.add(l);break e}else{if((e&1)===0){$0(s,c,e),Fp();break e}l=Error(ne(426))}}else if(At&&o.mode&1){var g=Y0(a);if(g!==null){(g.flags&65536)===0&&(g.flags|=256),j0(g,a,o,s,e),mp(ga(l,o));break e}}s=l=ga(l,o),Gt!==4&&(Gt=2),So===null?So=[s]:So.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Uv(s,l,e);G0(s,u);break e;case 1:o=l;var p=s.type,_=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Fr===null||!Fr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=kv(s,o,e);G0(s,M);break e}}s=s.return}while(s!==null)}n_(n)}catch(T){e=T,Bt===n&&n!==null&&(Bt=n=n.return);continue}break}while(!0)}function e_(){var t=Hc.current;return Hc.current=Gc,t===null?Gc:t}function Fp(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),Kt===null||(Ss&268435455)===0&&(iu&268435455)===0||Ar(Kt,Qt)}function qc(t,e){var n=lt;lt|=2;var i=e_();(Kt!==t||Qt!==e)&&(Zi=null,gs(t,e));do try{XM();break}catch(r){Qv(t,r)}while(!0);if(xp(),lt=n,Hc.current=i,Bt!==null)throw Error(ne(261));return Kt=null,Qt=0,Gt}function XM(){for(;Bt!==null;)t_(Bt)}function qM(){for(;Bt!==null&&!_1();)t_(Bt)}function t_(t){var e=r_(t.alternate,t,Un);t.memoizedProps=t.pendingProps,e===null?n_(t):Bt=e,Pp.current=null}function n_(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=OM(n,e,Un),n!==null){Bt=n;return}}else{if(n=BM(n,e),n!==null){n.flags&=32767,Bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,Bt=null;return}}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=t}while(e!==null);Gt===0&&(Gt=5)}function hs(t,e,n){var i=gt,r=ii.transition;try{ii.transition=null,gt=1,KM(t,e,n,i)}finally{ii.transition=r,gt=i}return null}function KM(t,e,n,i){do ua();while(Rr!==null);if((lt&6)!==0)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(R1(t,s),t===Kt&&(Bt=Kt=null,Qt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||fc||(fc=!0,s_(Ac,function(){return ua(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=ii.transition,ii.transition=null;var a=gt;gt=1;var o=lt;lt|=4,Pp.current=null,VM(t,n),jv(n,t),mM(Af),Rc=!!Tf,Af=Tf=null,t.current=n,GM(n,t,r),y1(),lt=o,gt=a,ii.transition=s}else t.current=n;if(fc&&(fc=!1,Rr=t,Xc=r),s=t.pendingLanes,s===0&&(Fr=null),b1(n.stateNode,i),Cn(t,Ot()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Wc)throw Wc=!1,t=Kf,Kf=null,t;return(Xc&1)!==0&&t.tag!==0&&ua(),s=t.pendingLanes,(s&1)!==0?t===$f?Mo++:(Mo=0,$f=t):Mo=0,Gr(),null}function ua(){if(Rr!==null){var t=Ux(Xc),e=ii.transition,n=gt;try{if(ii.transition=null,gt=16>t?16:t,Rr===null)var i=!1;else{if(t=Rr,Rr=null,Xc=0,(lt&6)!==0)throw Error(ne(331));var r=lt;for(lt|=4,be=t.current;be!==null;){var s=be,a=s.child;if((be.flags&16)!==0){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(be=c;be!==null;){var h=be;switch(h.tag){case 0:case 11:case 15:yo(8,h,s)}var f=h.child;if(f!==null)f.return=h,be=f;else for(;be!==null;){h=be;var d=h.sibling,m=h.return;if(Kv(h),h===c){be=null;break}if(d!==null){d.return=m,be=d;break}be=m}}}var y=s.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var g=b.sibling;b.sibling=null,b=g}while(b!==null)}}be=s}}if((s.subtreeFlags&2064)!==0&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:yo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,be=u;break e}be=s.return}}var p=t.current;for(be=p;be!==null;){a=be;var _=a.child;if((a.subtreeFlags&2064)!==0&&_!==null)_.return=a,be=_;else e:for(a=p;be!==null;){if(o=be,(o.flags&2048)!==0)try{switch(o.tag){case 0:case 11:case 15:nu(9,o)}}catch(T){Dt(o,o.return,T)}if(o===a){be=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,be=M;break e}be=o.return}}if(lt=r,Gr(),Di&&typeof Di.onPostCommitFiberRoot=="function")try{Di.onPostCommitFiberRoot($c,t)}catch{}i=!0}return i}finally{gt=n,ii.transition=e}}return!1}function cx(t,e,n){e=ga(n,e),e=Uv(t,e,1),t=Dr(t,e,1),e=gn(),t!==null&&(zo(t,1,e),Cn(t,e))}function Dt(t,e,n){if(t.tag===3)cx(t,t,n);else for(;e!==null;){if(e.tag===3){cx(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fr===null||!Fr.has(i))){t=ga(n,t),t=kv(e,t,1),e=Dr(e,t,1),t=gn(),e!==null&&(zo(e,1,t),Cn(e,t));break}}e=e.return}}function $M(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=gn(),t.pingedLanes|=t.suspendedLanes&n,Kt===t&&(Qt&n)===n&&(Gt===4||Gt===3&&(Qt&130023424)===Qt&&500>Ot()-Np?gs(t,0):Ip|=n),Cn(t,e)}function i_(t,e){e===0&&((t.mode&1)===0?e=1:(e=Ql,Ql<<=1,(Ql&130023424)===0&&(Ql=4194304)));var n=gn();t=rr(t,e),t!==null&&(zo(t,e,n),Cn(t,n))}function YM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),i_(t,n)}function jM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),i_(t,n)}var r_;r_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tn.current)En=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return En=!1,kM(t,e,n);En=(t.flags&131072)!==0}else En=!1,At&&(e.flags&1048576)!==0&&lv(e,Uc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yc(t,e),t=e.pendingProps;var r=ha(e,cn.current);ca(e,n),r=Ep(null,e,i,t,r,n);var s=Tp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(s=!0,Dc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,yp(e),r.updater=tu,e.stateNode=r,r._reactInternals=e,Uf(e,i,t,n),e=Bf(null,e,i,!0,s,n)):(e.tag=0,At&&s&&fp(e),mn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(yc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=JM(i),t=mi(i,t),r){case 0:e=Of(null,e,i,t,n);break e;case 1:e=Q0(null,e,i,t,n);break e;case 11:e=Z0(null,e,i,t,n);break e;case 14:e=J0(null,e,i,mi(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),Of(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),Q0(t,e,i,r,n);case 3:e:{if(Vv(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,pv(t,e),Bc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ga(Error(ne(423)),e),e=ex(t,e,i,n,r);break e}else if(i!==r){r=ga(Error(ne(424)),e),e=ex(t,e,i,n,r);break e}else for(kn=Lr(e.stateNode.containerInfo.firstChild),On=e,At=!0,xi=null,n=hv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fa(),i===r){e=sr(t,e,n);break e}mn(t,e,i,n)}e=e.child}return e;case 5:return mv(e),t===null&&Lf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Cf(i,r)?a=null:s!==null&&Cf(i,s)&&(e.flags|=32),zv(t,e),mn(t,e,a,n),e.child;case 6:return t===null&&Lf(e),null;case 13:return Gv(t,e,n);case 4:return Sp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=pa(e,null,i,n):mn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),Z0(t,e,i,r,n);case 7:return mn(t,e,e.pendingProps,n),e.child;case 8:return mn(t,e,e.pendingProps.children,n),e.child;case 12:return mn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,St(kc,i._currentValue),i._currentValue=a,s!==null)if(yi(s.value,a)){if(s.children===r.children&&!Tn.current){e=sr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=tr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Df(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Df(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}mn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ca(e,n),r=ri(r),i=i(r),e.flags|=1,mn(t,e,i,n),e.child;case 14:return i=e.type,r=mi(i,e.pendingProps),r=mi(i.type,r),J0(t,e,i,r,n);case 15:return Ov(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),yc(t,e),e.tag=1,An(i)?(t=!0,Dc(e)):t=!1,ca(e,n),Fv(e,i,r),Uf(e,i,r,n),Bf(null,e,i,!0,t,n);case 19:return Hv(t,e,n);case 22:return Bv(t,e,n)}throw Error(ne(156,e.tag))};function s_(t,e){return Nx(t,e)}function ZM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,e,n,i){return new ZM(t,e,n,i)}function Up(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JM(t){if(typeof t=="function")return Up(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tp)return 11;if(t===np)return 14}return 2}function kr(t,e){var n=t.alternate;return n===null?(n=ni(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bc(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Up(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case $s:return xs(n.children,r,s,e);case ep:a=8,r|=8;break;case af:return t=ni(12,n,e,r|2),t.elementType=af,t.lanes=s,t;case of:return t=ni(13,n,e,r),t.elementType=of,t.lanes=s,t;case lf:return t=ni(19,n,e,r),t.elementType=lf,t.lanes=s,t;case mx:return ru(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fx:a=10;break e;case px:a=9;break e;case tp:a=11;break e;case np:a=14;break e;case wr:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=ni(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function xs(t,e,n,i){return t=ni(7,t,i,e),t.lanes=n,t}function ru(t,e,n,i){return t=ni(22,t,i,e),t.elementType=mx,t.lanes=n,t.stateNode={isHidden:!1},t}function nf(t,e,n){return t=ni(6,t,null,e),t.lanes=n,t}function rf(t,e,n){return e=ni(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function QM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zh(0),this.expirationTimes=zh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kp(t,e,n,i,r,s,a,o,l){return t=new QM(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ni(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yp(s),t}function eb(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ks,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function a_(t){if(!t)return Br;t=t._reactInternals;e:{if(ws(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(An(n))return av(t,n,e)}return e}function o_(t,e,n,i,r,s,a,o,l){return t=kp(n,i,!0,t,r,s,a,o,l),t.context=a_(null),n=t.current,i=gn(),r=Ur(n),s=tr(i,r),s.callback=e??null,Dr(n,s,r),t.current.lanes=r,zo(t,r,i),Cn(t,i),t}function su(t,e,n,i){var r=e.current,s=gn(),a=Ur(r);return n=a_(n),e.context===null?e.context=n:e.pendingContext=n,e=tr(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Dr(r,e,a),t!==null&&(_i(t,r,a,s),xc(t,r,a)),a}function Kc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ux(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Op(t,e){ux(t,e),(t=t.alternate)&&ux(t,e)}function tb(){return null}var l_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bp(t){this._internalRoot=t}au.prototype.render=Bp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));su(t,e,null,null)};au.prototype.unmount=Bp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ms(function(){su(null,t,null,null)}),e[ir]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tr.length&&e!==0&&e<Tr[n].priority;n++);Tr.splice(n,0,t),n===0&&Vx(t)}};function zp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dx(){}function nb(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Kc(a);s.call(c)}}var a=o_(e,i,t,0,null,!1,!1,"",dx);return t._reactRootContainer=a,t[ir]=a.current,Io(t.nodeType===8?t.parentNode:t),Ms(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Kc(l);o.call(c)}}var l=kp(t,0,!1,null,null,!1,!1,"",dx);return t._reactRootContainer=l,t[ir]=l.current,Io(t.nodeType===8?t.parentNode:t),Ms(function(){su(e,l,n,i)}),l}function lu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Kc(a);o.call(l)}}su(e,a,t,r)}else a=nb(n,e,t,r,i);return Kc(a)}kx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ho(e.pendingLanes);n!==0&&(sp(e,n|1),Cn(e,Ot()),(lt&6)===0&&(xa=Ot()+500,Gr()))}break;case 13:Ms(function(){var i=rr(t,1);if(i!==null){var r=gn();_i(i,t,1,r)}}),Op(t,1)}};ap=function(t){if(t.tag===13){var e=rr(t,134217728);if(e!==null){var n=gn();_i(e,t,134217728,n)}Op(t,134217728)}};Ox=function(t){if(t.tag===13){var e=Ur(t),n=rr(t,e);if(n!==null){var i=gn();_i(n,t,e,i)}Op(t,e)}};Bx=function(){return gt};zx=function(t,e){var n=gt;try{return gt=t,e()}finally{gt=n}};vf=function(t,e,n){switch(e){case"input":if(df(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Jc(i);if(!r)throw Error(ne(90));xx(i),df(i,r)}}}break;case"textarea":_x(t,n);break;case"select":e=n.value,e!=null&&sa(t,!!n.multiple,e,!1)}};Tx=Lp;Ax=Ms;var ib={usingClientEntryPoint:!1,Events:[Go,Js,Jc,wx,Ex,Lp]},oo={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rb={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Px(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||tb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(lo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!lo.isDisabled&&lo.supportsFiber))try{$c=lo.inject(rb),Di=lo}catch{}var lo;Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ib;Vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zp(e))throw Error(ne(200));return eb(t,e,null,n)};Vn.createRoot=function(t,e){if(!zp(t))throw Error(ne(299));var n=!1,i="",r=l_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kp(t,1,!1,null,null,n,!1,i,r),t[ir]=e.current,Io(t.nodeType===8?t.parentNode:t),new Bp(e)};Vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Px(e),t=t===null?null:t.stateNode,t};Vn.flushSync=function(t){return Ms(t)};Vn.hydrate=function(t,e,n){if(!ou(e))throw Error(ne(200));return lu(null,t,e,!0,n)};Vn.hydrateRoot=function(t,e,n){if(!zp(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=l_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=o_(e,null,t,1,n??null,r,!1,s,a),t[ir]=e.current,Io(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new au(e)};Vn.render=function(t,e,n){if(!ou(e))throw Error(ne(200));return lu(null,t,e,!1,n)};Vn.unmountComponentAtNode=function(t){if(!ou(t))throw Error(ne(40));return t._reactRootContainer?(Ms(function(){lu(null,null,t,!1,function(){t._reactRootContainer=null,t[ir]=null})}),!0):!1};Vn.unstable_batchedUpdates=Lp;Vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ou(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return lu(t,e,n,!1,i)};Vn.version="18.3.1-next-f1338f8080-20240426"});var h_=ji((q2,d_)=>{"use strict";function u_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u_)}catch(t){console.error(t)}}u_(),d_.exports=c_()});var p_=ji(Vp=>{"use strict";var f_=h_();Vp.createRoot=f_.createRoot,Vp.hydrateRoot=f_.hydrateRoot;var K2});var fS=ji(hh=>{"use strict";var QC=Sr(),e2=Symbol.for("react.element"),t2=Symbol.for("react.fragment"),n2=Object.prototype.hasOwnProperty,i2=QC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r2={key:!0,ref:!0,__self:!0,__source:!0};function hS(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)n2.call(e,i)&&!r2.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:e2,type:t,key:s,ref:a,props:r,_owner:i2.current}}hh.Fragment=t2;hh.jsx=hS;hh.jsxs=hS});var Nl=ji((BN,pS)=>{"use strict";pS.exports=fS()});var DS=Ri(Sr(),1),FS=Ri(p_(),1);var Pe=Ri(Sr(),1);var F_=0,Mm=1,U_=2;var ml=1,k_=2,Ga=3,pr=0,_n=1,Gi=2,Hi=0,Ps=1,bm=2,wm=3,Em=4,O_=5;var jr=100,B_=101,z_=102,V_=103,G_=104,H_=200,W_=201,X_=202,q_=203,Pu=204,Iu=205,K_=206,$_=207,Y_=208,j_=209,Z_=210,J_=211,Q_=212,ey=213,ty=214,Nu=0,Lu=1,Du=2,Is=3,Fu=4,Uu=5,ku=6,Ou=7,Tm=0,ny=1,iy=2,Ei=0,Am=1,Cm=2,Rm=3,Pm=4,Im=5,Nm=6,Lm=7;var Dm=300,ns=301,Ns=302,dd=303,hd=304,gl=306,Bu=1e3,Oi=1001,zu=1002,jt=1003,ry=1004;var xl=1005;var nn=1006,fd=1007;var is=1008;var In=1009,Fm=1010,Um=1011,Ha=1012,pd=1013,Ti=1014,Ai=1015,Wi=1016,md=1017,gd=1018,Wa=1020,km=35902,Om=35899,Bm=1021,zm=1022,li=1023,Bi=1026,rs=1027,Vm=1028,xd=1029,ss=1030,vd=1031;var _d=1033,vl=33776,_l=33777,yl=33778,Sl=33779,yd=35840,Sd=35841,Md=35842,bd=35843,wd=36196,Ed=37492,Td=37496,Ad=37488,Cd=37489,Ml=37490,Rd=37491,Pd=37808,Id=37809,Nd=37810,Ld=37811,Dd=37812,Fd=37813,Ud=37814,kd=37815,Od=37816,Bd=37817,zd=37818,Vd=37819,Gd=37820,Hd=37821,Wd=36492,Xd=36494,qd=36495,Kd=36283,$d=36284,bl=36285,Yd=36286;var Yo=2300,Vu=2301,Ru=2302,hm=2303,fm=2400,pm=2401,mm=2402;var sy=3200;var jd=0,ay=1,xr="",Wn="srgb",jo="srgb-linear",Zo="linear",mt="srgb";var Rs=7680;var gm=519,oy=512,ly=513,cy=514,Zd=515,uy=516,dy=517,Jd=518,hy=519,xm=35044;var Gm="300 es",wi=2e3,La=2001;function sb(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ab(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Jo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function fy(){let t=Jo("canvas");return t.style.display="block",t}var m_={},Da=null;function Hm(...t){let e="THREE."+t.shift();Da?Da("log",e,...t):console.log(e,...t)}function py(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ue(...t){t=py(t);let e="THREE."+t.shift();if(Da)Da("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Oe(...t){t=py(t);let e="THREE."+t.shift();if(Da)Da("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Gu(...t){let e=t.join(" ");e in m_||(m_[e]=!0,Ue(...t))}function my(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var gy={[Nu]:Lu,[Du]:ku,[Fu]:Ou,[Is]:Uu,[Lu]:Nu,[ku]:Du,[Ou]:Fu,[Uu]:Is},zi=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Gp=Math.PI/180,Hu=180/Math.PI;function wl(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[t&255]+un[t>>8&255]+un[t>>16&255]+un[t>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function ob(t,e){return(t%e+e)%e}function Hp(t,e,n){return(1-n)*t+n*e}function Wo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var dt=class t{static{t.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vi=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],d=s[a+0],m=s[a+1],y=s[a+2],b=s[a+3];if(f!==b||l!==d||c!==m||h!==y){let g=l*d+c*m+h*y+f*b;g<0&&(d=-d,m=-m,y=-y,b=-b,g=-g);let u=1-o;if(g<.9995){let p=Math.acos(g),_=Math.sin(p);u=Math.sin(u*p)/_,o=Math.sin(o*p)/_,l=l*u+d*o,c=c*u+m*o,h=h*u+y*o,f=f*u+b*o}else{l=l*u+d*o,c=c*u+m*o,h=h*u+y*o,f=f*u+b*o;let p=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=p,c*=p,h*=p,f*=p}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],d=s[a+1],m=s[a+2],y=s[a+3];return e[n]=o*y+h*f+l*m-c*d,e[n+1]=l*y+h*d+c*f-o*m,e[n+2]=c*y+h*m+o*d-l*f,e[n+3]=h*y-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),y=l(s/2);switch(a){case"XYZ":this._x=d*h*f+c*m*y,this._y=c*m*f-d*h*y,this._z=c*h*y+d*m*f,this._w=c*h*f-d*m*y;break;case"YXZ":this._x=d*h*f+c*m*y,this._y=c*m*f-d*h*y,this._z=c*h*y-d*m*f,this._w=c*h*f+d*m*y;break;case"ZXY":this._x=d*h*f-c*m*y,this._y=c*m*f+d*h*y,this._z=c*h*y+d*m*f,this._w=c*h*f-d*m*y;break;case"ZYX":this._x=d*h*f-c*m*y,this._y=c*m*f+d*h*y,this._z=c*h*y-d*m*f,this._w=c*h*f+d*m*y;break;case"YZX":this._x=d*h*f+c*m*y,this._y=c*m*f+d*h*y,this._z=c*h*y-d*m*f,this._w=c*h*f-d*m*y;break;case"XZY":this._x=d*h*f-c*m*y,this._y=c*m*f-d*h*y,this._z=c*h*y+d*m*f,this._w=c*h*f+d*m*y;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],f=n[10],d=i+o+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){let m=2*Math.sqrt(1+i-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class t{static{t.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(g_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(g_.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wp.copy(this).projectOnVector(e),this.sub(Wp)}reflect(e){return this.sub(Wp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wp=new O,g_=new Vi,qe=class t{static{t.prototype.isMatrix3=!0}constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],m=i[5],y=i[8],b=r[0],g=r[3],u=r[6],p=r[1],_=r[4],M=r[7],T=r[2],E=r[5],R=r[8];return s[0]=a*b+o*p+l*T,s[3]=a*g+o*_+l*E,s[6]=a*u+o*M+l*R,s[1]=c*b+h*p+f*T,s[4]=c*g+h*_+f*E,s[7]=c*u+h*M+f*R,s[2]=d*b+m*p+y*T,s[5]=d*g+m*_+y*E,s[8]=d*u+m*M+y*R,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*s,m=c*s-a*l,y=n*f+i*d+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/y;return e[0]=f*b,e[1]=(r*c-h*i)*b,e[2]=(o*i-r*a)*b,e[3]=d*b,e[4]=(h*n-r*l)*b,e[5]=(r*s-o*n)*b,e[6]=m*b,e[7]=(i*l-c*n)*b,e[8]=(a*n-i*s)*b,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Xp.makeScale(e,n)),this}rotate(e){return this.premultiply(Xp.makeRotation(-e)),this}translate(e,n){return this.premultiply(Xp.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xp=new qe,x_=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),v_=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lb(){let t={enabled:!0,workingColorSpace:jo,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===mt&&(r.r=fr(r.r),r.g=fr(r.g),r.b=fr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(r.r=Na(r.r),r.g=Na(r.g),r.b=Na(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xr?Zo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Gu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Gu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[jo]:{primaries:e,whitePoint:i,transfer:Zo,toXYZ:x_,fromXYZ:v_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:x_,fromXYZ:v_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),t}var et=lb();function fr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Na(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var ya,Wu=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ya===void 0&&(ya=Jo("canvas")),ya.width=e.width,ya.height=e.height;let r=ya.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ya}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Jo("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=fr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fr(n[i]/255)*255):n[i]=fr(n[i]);return{data:n,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cb=0,Fa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=wl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(qp(r[a].image)):s.push(qp(r[a]))}else s=qp(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function qp(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Wu.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}var ub=0,Kp=new O,Pn=class t extends zi{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Oi,r=Oi,s=nn,a=is,o=li,l=In,c=t.DEFAULT_ANISOTROPY,h=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=wl(),this.name="",this.source=new Fa(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kp).x}get height(){return this.source.getSize(Kp).y}get depth(){return this.source.getSize(Kp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){Ue(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bu:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case zu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bu:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case zu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Dm;Pn.DEFAULT_ANISOTROPY=1;var Lt=class t{static{t.prototype.isVector4=!0}constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],y=l[9],b=l[2],g=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-b)<.01&&Math.abs(y-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+b)<.1&&Math.abs(y+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let _=(c+1)/2,M=(m+1)/2,T=(u+1)/2,E=(h+d)/4,R=(f+b)/4,x=(y+g)/4;return _>M&&_>T?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=E/i,s=R/i):M>T?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=x/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=x/s),this.set(i,r,s,n),this}let p=Math.sqrt((g-y)*(g-y)+(f-b)*(f-b)+(d-h)*(d-h));return Math.abs(p)<.001&&(p=1),this.x=(g-y)/p,this.y=(f-b)/p,this.z=(d-h)/p,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xu=class extends zi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n),this.textures=[];let r={width:e,height:n,depth:i.depth},s=new Pn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let n={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let r=Object.assign({},e.textures[n].image);this.textures[n].source=new Fa(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},qn=class extends Xu{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Qo=class extends Pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var qu=class extends Pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ft=class t{static{t.prototype.isMatrix4=!0}constructor(e,n,i,r,s,a,o,l,c,h,f,d,m,y,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,f,d,m,y,b,g)}set(e,n,i,r,s,a,o,l,c,h,f,d,m,y,b,g){let u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=y,u[11]=b,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let n=this.elements,i=e.elements,r=1/Sa.setFromMatrixColumn(e,0).length(),s=1/Sa.setFromMatrixColumn(e,1).length(),a=1/Sa.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=a*h,m=a*f,y=o*h,b=o*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=m+y*c,n[5]=d-b*c,n[9]=-o*l,n[2]=b-d*c,n[6]=y+m*c,n[10]=a*l}else if(e.order==="YXZ"){let d=l*h,m=l*f,y=c*h,b=c*f;n[0]=d+b*o,n[4]=y*o-m,n[8]=a*c,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=m*o-y,n[6]=b+d*o,n[10]=a*l}else if(e.order==="ZXY"){let d=l*h,m=l*f,y=c*h,b=c*f;n[0]=d-b*o,n[4]=-a*f,n[8]=y+m*o,n[1]=m+y*o,n[5]=a*h,n[9]=b-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){let d=a*h,m=a*f,y=o*h,b=o*f;n[0]=l*h,n[4]=y*c-m,n[8]=d*c+b,n[1]=l*f,n[5]=b*c+d,n[9]=m*c-y,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){let d=a*l,m=a*c,y=o*l,b=o*c;n[0]=l*h,n[4]=b-d*f,n[8]=y*f+m,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*f+y,n[10]=d-b*f}else if(e.order==="XZY"){let d=a*l,m=a*c,y=o*l,b=o*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=d*f+b,n[5]=a*h,n[9]=m*f-y,n[2]=y*f-m,n[6]=o*h,n[10]=b*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(db,e,hb)}lookAt(e,n,i){let r=this.elements;return Gn.subVectors(e,n),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Hr.crossVectors(i,Gn),Hr.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Hr.crossVectors(i,Gn)),Hr.normalize(),cu.crossVectors(Gn,Hr),r[0]=Hr.x,r[4]=cu.x,r[8]=Gn.x,r[1]=Hr.y,r[5]=cu.y,r[9]=Gn.y,r[2]=Hr.z,r[6]=cu.z,r[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],m=i[13],y=i[2],b=i[6],g=i[10],u=i[14],p=i[3],_=i[7],M=i[11],T=i[15],E=r[0],R=r[4],x=r[8],C=r[12],P=r[1],I=r[5],U=r[9],W=r[13],X=r[2],F=r[6],V=r[10],G=r[14],Z=r[3],te=r[7],ae=r[11],xe=r[15];return s[0]=a*E+o*P+l*X+c*Z,s[4]=a*R+o*I+l*F+c*te,s[8]=a*x+o*U+l*V+c*ae,s[12]=a*C+o*W+l*G+c*xe,s[1]=h*E+f*P+d*X+m*Z,s[5]=h*R+f*I+d*F+m*te,s[9]=h*x+f*U+d*V+m*ae,s[13]=h*C+f*W+d*G+m*xe,s[2]=y*E+b*P+g*X+u*Z,s[6]=y*R+b*I+g*F+u*te,s[10]=y*x+b*U+g*V+u*ae,s[14]=y*C+b*W+g*G+u*xe,s[3]=p*E+_*P+M*X+T*Z,s[7]=p*R+_*I+M*F+T*te,s[11]=p*x+_*U+M*V+T*ae,s[15]=p*C+_*W+M*G+T*xe,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],m=e[14],y=e[3],b=e[7],g=e[11],u=e[15],p=l*m-c*d,_=o*m-c*f,M=o*d-l*f,T=a*m-c*h,E=a*d-l*h,R=a*f-o*h;return n*(b*p-g*_+u*M)-i*(y*p-g*T+u*E)+r*(y*_-b*T+u*R)-s*(y*M-b*E+g*R)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],m=e[11],y=e[12],b=e[13],g=e[14],u=e[15],p=n*o-i*a,_=n*l-r*a,M=n*c-s*a,T=i*l-r*o,E=i*c-s*o,R=r*c-s*l,x=h*b-f*y,C=h*g-d*y,P=h*u-m*y,I=f*g-d*b,U=f*u-m*b,W=d*u-m*g,X=p*W-_*U+M*I+T*P-E*C+R*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/X;return e[0]=(o*W-l*U+c*I)*F,e[1]=(r*U-i*W-s*I)*F,e[2]=(b*R-g*E+u*T)*F,e[3]=(d*E-f*R-m*T)*F,e[4]=(l*P-a*W-c*C)*F,e[5]=(n*W-r*P+s*C)*F,e[6]=(g*M-y*R-u*_)*F,e[7]=(h*R-d*M+m*_)*F,e[8]=(a*U-o*P+c*x)*F,e[9]=(i*P-n*U-s*x)*F,e[10]=(y*E-b*M+u*p)*F,e[11]=(f*M-h*E-m*p)*F,e[12]=(o*C-a*I-l*x)*F,e[13]=(n*I-i*C+r*x)*F,e[14]=(b*_-y*T-g*p)*F,e[15]=(h*T-f*_+d*p)*F,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,f=o+o,d=s*c,m=s*h,y=s*f,b=a*h,g=a*f,u=o*f,p=l*c,_=l*h,M=l*f,T=i.x,E=i.y,R=i.z;return r[0]=(1-(b+u))*T,r[1]=(m+M)*T,r[2]=(y-_)*T,r[3]=0,r[4]=(m-M)*E,r[5]=(1-(d+u))*E,r[6]=(g+p)*E,r[7]=0,r[8]=(y+_)*R,r[9]=(g-p)*R,r[10]=(1-(d+b))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Sa.set(r[0],r[1],r[2]).length(),o=Sa.set(r[4],r[5],r[6]).length(),l=Sa.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Si.copy(this);let c=1/a,h=1/o,f=1/l;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=h,Si.elements[5]*=h,Si.elements[6]*=h,Si.elements[8]*=f,Si.elements[9]*=f,Si.elements[10]*=f,n.setFromRotationMatrix(Si),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=wi,l=!1){let c=this.elements,h=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r),y,b;if(l)y=s/(a-s),b=a*s/(a-s);else if(o===wi)y=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===La)y=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=wi,l=!1){let c=this.elements,h=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r),y,b;if(l)y=1/(a-s),b=a/(a-s);else if(o===wi)y=-2/(a-s),b=-(a+s)/(a-s);else if(o===La)y=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=y,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Sa=new O,Si=new Ft,db=new O(0,0,0),hb=new O(1,1,1),Hr=new O,cu=new O,Gn=new O,__=new Ft,y_=new Vi,mr=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return __.makeRotationFromQuaternion(e),this.setFromRotationMatrix(__,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return y_.setFromEuler(this),this.setFromQuaternion(y_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mr.DEFAULT_ORDER="XYZ";var el=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fb=0,S_=new O,Ma=new Vi,or=new Ft,uu=new O,Xo=new O,pb=new O,mb=new Vi,M_=new O(1,0,0),b_=new O(0,1,0),w_=new O(0,0,1),E_={type:"added"},gb={type:"removed"},ba={type:"childadded",child:null},$p={type:"childremoved",child:null},Kn=class t extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=wl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new O,n=new mr,i=new Vi,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new qe}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ma.setFromAxisAngle(e,n),this.quaternion.multiply(Ma),this}rotateOnWorldAxis(e,n){return Ma.setFromAxisAngle(e,n),this.quaternion.premultiply(Ma),this}rotateX(e){return this.rotateOnAxis(M_,e)}rotateY(e){return this.rotateOnAxis(b_,e)}rotateZ(e){return this.rotateOnAxis(w_,e)}translateOnAxis(e,n){return S_.copy(e).applyQuaternion(this.quaternion),this.position.add(S_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(M_,e)}translateY(e){return this.translateOnAxis(b_,e)}translateZ(e){return this.translateOnAxis(w_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?uu.copy(e):uu.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(Xo,uu,this.up):or.lookAt(uu,Xo,this.up),this.quaternion.setFromRotationMatrix(or),r&&(or.extractRotation(r.matrixWorld),Ma.setFromRotationMatrix(or),this.quaternion.premultiply(Ma.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(E_),ba.child=e,this.dispatchEvent(ba),ba.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gb),$p.child=e,this.dispatchEvent($p),$p.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(E_),ba.child=e,this.dispatchEvent(ba),ba.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,pb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,mb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Kn.DEFAULT_UP=new O(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hr=class extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}},xb={type:"move"},Ua=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let g=n.getJointPose(b,i),u=this._getHandJoint(c,b);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,y=.005;c.inputState.pinching&&d>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new hr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},xy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},du={h:0,s:0,l:0};function Yp(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var rt=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=ob(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Yp(a,s,e+1/3),this.g=Yp(a,s,e),this.b=Yp(a,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ue("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){let i=xy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return et.workingToColorSpace(dn.copy(this),e),Math.round(nt(dn.r*255,0,255))*65536+Math.round(nt(dn.g*255,0,255))*256+Math.round(nt(dn.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.workingToColorSpace(dn.copy(this),n);let i=dn.r,r=dn.g,s=dn.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=et.workingColorSpace){return et.workingToColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Wn){et.workingToColorSpace(dn.copy(this),e);let n=dn.r,i=dn.g,r=dn.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+n,Wr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Wr),e.getHSL(du);let i=Hp(Wr.h,du.h,n),r=Hp(Wr.s,du.s,n),s=Hp(Wr.l,du.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new rt;rt.NAMES=xy;var tl=class extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mr,this.environmentIntensity=1,this.environmentRotation=new mr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},Mi=new O,lr=new O,jp=new O,cr=new O,wa=new O,Ea=new O,T_=new O,Zp=new O,Jp=new O,Qp=new O,em=new Lt,tm=new Lt,nm=new Lt,Yr=class t{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Mi.subVectors(e,n),r.cross(Mi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Mi.subVectors(r,n),lr.subVectors(i,n),jp.subVectors(e,n);let a=Mi.dot(Mi),o=Mi.dot(lr),l=Mi.dot(jp),c=lr.dot(lr),h=lr.dot(jp),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;let d=1/f,m=(c*l-o*h)*d,y=(a*h-o*l)*d;return s.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,cr.x),l.addScaledVector(a,cr.y),l.addScaledVector(o,cr.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return em.setScalar(0),tm.setScalar(0),nm.setScalar(0),em.fromBufferAttribute(e,n),tm.fromBufferAttribute(e,i),nm.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(em,s.x),a.addScaledVector(tm,s.y),a.addScaledVector(nm,s.z),a}static isFrontFacing(e,n,i,r){return Mi.subVectors(i,n),lr.subVectors(e,n),Mi.cross(lr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),Mi.cross(lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,a,o;wa.subVectors(r,i),Ea.subVectors(s,i),Zp.subVectors(e,i);let l=wa.dot(Zp),c=Ea.dot(Zp);if(l<=0&&c<=0)return n.copy(i);Jp.subVectors(e,r);let h=wa.dot(Jp),f=Ea.dot(Jp);if(h>=0&&f<=h)return n.copy(r);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(wa,a);Qp.subVectors(e,s);let m=wa.dot(Qp),y=Ea.dot(Qp);if(y>=0&&m<=y)return n.copy(s);let b=m*c-l*y;if(b<=0&&c>=0&&y<=0)return o=c/(c-y),n.copy(i).addScaledVector(Ea,o);let g=h*y-m*f;if(g<=0&&f-h>=0&&m-y>=0)return T_.subVectors(s,r),o=(f-h)/(f-h+(m-y)),n.copy(r).addScaledVector(T_,o);let u=1/(g+b+d);return a=b*u,o=d*u,n.copy(i).addScaledVector(wa,a).addScaledVector(Ea,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zr=class{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bi):bi.fromBufferAttribute(s,a),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hu.copy(i.boundingBox)),hu.applyMatrix4(e.matrixWorld),this.union(hu)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),fu.subVectors(this.max,qo),Ta.subVectors(e.a,qo),Aa.subVectors(e.b,qo),Ca.subVectors(e.c,qo),Xr.subVectors(Aa,Ta),qr.subVectors(Ca,Aa),Es.subVectors(Ta,Ca);let n=[0,-Xr.z,Xr.y,0,-qr.z,qr.y,0,-Es.z,Es.y,Xr.z,0,-Xr.x,qr.z,0,-qr.x,Es.z,0,-Es.x,-Xr.y,Xr.x,0,-qr.y,qr.x,0,-Es.y,Es.x,0];return!im(n,Ta,Aa,Ca,fu)||(n=[1,0,0,0,1,0,0,0,1],!im(n,Ta,Aa,Ca,fu))?!1:(pu.crossVectors(Xr,qr),n=[pu.x,pu.y,pu.z],im(n,Ta,Aa,Ca,fu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ur=[new O,new O,new O,new O,new O,new O,new O,new O],bi=new O,hu=new Zr,Ta=new O,Aa=new O,Ca=new O,Xr=new O,qr=new O,Es=new O,qo=new O,fu=new O,pu=new O,Ts=new O;function im(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Ts.fromArray(t,s);let o=r.x*Math.abs(Ts.x)+r.y*Math.abs(Ts.y)+r.z*Math.abs(Ts.z),l=e.dot(Ts),c=n.dot(Ts),h=i.dot(Ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var zt=new O,mu=new dt,vb=0,Xn=class extends zi{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xm,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)mu.fromBufferAttribute(this,n),mu.applyMatrix3(e),this.setXY(n,mu.x,mu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Wo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Wo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Wo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Wo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Wo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),i=Rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),i=Rn(i,this.array),r=Rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),i=Rn(i,this.array),r=Rn(r,this.array),s=Rn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var nl=class extends Xn{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var il=class extends Xn{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var Yt=class extends Xn{constructor(e,n,i){super(new Float32Array(e),n,i)}},_b=new Zr,Ko=new O,rm=new O,ka=class{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):_b.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);let n=Ko.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ko,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(rm)),this.expandByPoint(Ko.copy(e.center).sub(rm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yb=0,ai=new Ft,sm=new Kn,Ra=new O,Hn=new Zr,$o=new Zr,$t=new O,oi=class t extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=wl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sb(e)?il:nl)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,n,i){return ai.makeTranslation(e,n,i),this.applyMatrix4(ai),this}scale(e,n,i){return ai.makeScale(e,n,i),this.applyMatrix4(ai),this}lookAt(e){return sm.lookAt(e),sm.updateMatrix(),this.applyMatrix4(sm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ra).negate(),this.translate(Ra.x,Ra.y,Ra.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(i,3))}else{let i=Math.min(e.length,n.count);for(let r=0;r<i;r++){let s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zr);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];Hn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){let o=n[s];$o.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Hn.min,$o.min),Hn.expandByPoint($t),$t.addVectors(Hn.max,$o.max),Hn.expandByPoint($t)):(Hn.expandByPoint($o.min),Hn.expandByPoint($o.max))}Hn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(n)for(let s=0,a=n.length;s<a;s++){let o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$t.fromBufferAttribute(o,c),l&&(Ra.fromBufferAttribute(e,c),$t.add(Ra)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new O,l[x]=new O;let c=new O,h=new O,f=new O,d=new dt,m=new dt,y=new dt,b=new O,g=new O;function u(x,C,P){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,C),f.fromBufferAttribute(i,P),d.fromBufferAttribute(s,x),m.fromBufferAttribute(s,C),y.fromBufferAttribute(s,P),h.sub(c),f.sub(c),m.sub(d),y.sub(d);let I=1/(m.x*y.y-y.x*m.y);isFinite(I)&&(b.copy(h).multiplyScalar(y.y).addScaledVector(f,-m.y).multiplyScalar(I),g.copy(f).multiplyScalar(m.x).addScaledVector(h,-y.x).multiplyScalar(I),o[x].add(b),o[C].add(b),o[P].add(b),l[x].add(g),l[C].add(g),l[P].add(g))}let p=this.groups;p.length===0&&(p=[{start:0,count:e.count}]);for(let x=0,C=p.length;x<C;++x){let P=p[x],I=P.start,U=P.count;for(let W=I,X=I+U;W<X;W+=3)u(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let _=new O,M=new O,T=new O,E=new O;function R(x){T.fromBufferAttribute(r,x),E.copy(T);let C=o[x];_.copy(C),_.sub(T.multiplyScalar(T.dot(C))).normalize(),M.crossVectors(E,C);let I=M.dot(l[x])<0?-1:1;a.setXYZW(x,_.x,_.y,_.z,I)}for(let x=0,C=p.length;x<C;++x){let P=p[x],I=P.start,U=P.count;for(let W=I,X=I+U;W<X;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,h=new O,f=new O;if(e)for(let d=0,m=e.count;d<m;d+=3){let y=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,b),a.fromBufferAttribute(n,g),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)$t.fromBufferAttribute(e,n),$t.normalize(),e.setXYZ(n,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),m=0,y=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?m=l[b]*o.data.stride+o.offset:m=l[b]*h;for(let u=0;u<h;u++)d[y++]=c[m++]}return new Xn(d,h,f)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,i);n.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(n))}let s=e.morphAttributes;for(let c in s){let h=[],f=s[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Sb=0,Jr=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=wl(),this.name="",this.type="Material",this.blending=Ps,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pu,this.blendDst=Iu,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){Ue(`Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){Ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pu&&(i.blendSrc=this.blendSrc),this.blendDst!==Iu&&(i.blendDst=this.blendDst),this.blendEquation!==jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var dr=new O,am=new O,gu=new O,Kr=new O,om=new O,xu=new O,lm=new O,Ku=class{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=dr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(dr.copy(this.origin).addScaledVector(this.direction,n),dr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){am.copy(e).add(n).multiplyScalar(.5),gu.copy(n).sub(e).normalize(),Kr.copy(this.origin).sub(am);let s=e.distanceTo(n)*.5,a=-this.direction.dot(gu),o=Kr.dot(this.direction),l=-Kr.dot(gu),c=Kr.lengthSq(),h=Math.abs(1-a*a),f,d,m,y;if(h>0)if(f=a*l-o,d=a*o-l,y=s*h,f>=0)if(d>=-y)if(d<=y){let b=1/h;f*=b,d*=b,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-y?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=y?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(am).addScaledVector(gu,d),m}intersectSphere(e,n){dr.subVectors(e.center,this.origin);let i=dr.dot(this.direction),r=dr.dot(dr)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,dr)!==null}intersectTriangle(e,n,i,r,s){om.subVectors(n,e),xu.subVectors(i,e),lm.crossVectors(om,xu);let a=this.direction.dot(lm),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kr.subVectors(this.origin,e);let l=o*this.direction.dot(xu.crossVectors(Kr,xu));if(l<0)return null;let c=o*this.direction.dot(om.cross(Kr));if(c<0||l+c>a)return null;let h=-o*Kr.dot(lm);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rl=class extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mr,this.combine=Tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},A_=new Ft,As=new Ku,vu=new ka,C_=new O,_u=new O,yu=new O,Su=new O,cm=new O,Mu=new O,R_=new O,bu=new O,vn=class extends Kn{constructor(e=new oi,n=new rl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Mu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],f=s[l];h!==0&&(cm.fromBufferAttribute(f,e),a?Mu.addScaledVector(cm,h):Mu.addScaledVector(cm.sub(n),h))}n.add(Mu)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vu.copy(i.boundingSphere),vu.applyMatrix4(s),As.copy(e.ray).recast(e.near),!(vu.containsPoint(As.origin)===!1&&(As.intersectSphere(vu,C_)===null||As.origin.distanceToSquared(C_)>(e.far-e.near)**2))&&(A_.copy(s).invert(),As.copy(e.ray).applyMatrix4(A_),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,As)))}_computeIntersections(e,n,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,b=d.length;y<b;y++){let g=d[y],u=a[g.materialIndex],p=Math.max(g.start,m.start),_=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let M=p,T=_;M<T;M+=3){let E=o.getX(M),R=o.getX(M+1),x=o.getX(M+2);r=wu(this,u,e,i,c,h,f,E,R,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{let y=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let g=y,u=b;g<u;g+=3){let p=o.getX(g),_=o.getX(g+1),M=o.getX(g+2);r=wu(this,a,e,i,c,h,f,p,_,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,b=d.length;y<b;y++){let g=d[y],u=a[g.materialIndex],p=Math.max(g.start,m.start),_=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=p,T=_;M<T;M+=3){let E=M,R=M+1,x=M+2;r=wu(this,u,e,i,c,h,f,E,R,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{let y=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let g=y,u=b;g<u;g+=3){let p=g,_=g+1,M=g+2;r=wu(this,a,e,i,c,h,f,p,_,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}};function Mb(t,e,n,i,r,s,a,o){let l;if(e.side===_n?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===pr,o),l===null)return null;bu.copy(o),bu.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(bu);return c<n.near||c>n.far?null:{distance:c,point:bu.clone(),object:t}}function wu(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,_u),t.getVertexPosition(l,yu),t.getVertexPosition(c,Su);let h=Mb(t,e,n,i,_u,yu,Su,R_);if(h){let f=new O;Yr.getBarycoord(R_,_u,yu,Su,f),r&&(h.uv=Yr.getInterpolatedAttribute(r,o,l,c,f,new dt)),s&&(h.uv1=Yr.getInterpolatedAttribute(s,o,l,c,f,new dt)),a&&(h.normal=Yr.getInterpolatedAttribute(a,o,l,c,f,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new O,materialIndex:0};Yr.getNormal(_u,yu,Su,d.normal),h.face=d,h.barycoord=f}return h}var $u=class extends Pn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=jt,h=jt,f,d){super(null,a,o,l,c,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var um=new O,bb=new O,wb=new qe,ki=class{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=um.subVectors(i,n).cross(bb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let r=e.delta(um),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||wb.getNormalMatrix(e),r=this.coplanarPoint(um).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cs=new ka,Eb=new dt(.5,.5),Eu=new O,Oa=class{constructor(e=new ki,n=new ki,i=new ki,r=new ki,s=new ki,a=new ki){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],d=s[6],m=s[7],y=s[8],b=s[9],g=s[10],u=s[11],p=s[12],_=s[13],M=s[14],T=s[15];if(r[0].setComponents(c-a,m-h,u-y,T-p).normalize(),r[1].setComponents(c+a,m+h,u+y,T+p).normalize(),r[2].setComponents(c+o,m+f,u+b,T+_).normalize(),r[3].setComponents(c-o,m-f,u-b,T-_).normalize(),i)r[4].setComponents(l,d,g,M).normalize(),r[5].setComponents(c-l,m-d,u-g,T-M).normalize();else if(r[4].setComponents(c-l,m-d,u-g,T-M).normalize(),n===wi)r[5].setComponents(c+l,m+d,u+g,T+M).normalize();else if(n===La)r[5].setComponents(l,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);let n=Eb.distanceTo(e.center);return Cs.radius=.7071067811865476+n,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(Eu.x=r.normal.x>0?e.max.x:e.min.x,Eu.y=r.normal.y>0?e.max.y:e.min.y,Eu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Eu)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var sl=class extends Pn{constructor(e=[],n=ns,i,r,s,a,o,l,c,h){super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var gr=class extends Pn{constructor(e,n,i=Ti,r,s,a,o=jt,l=jt,c,h=Bi,f=1){if(h!==Bi&&h!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:n,depth:f};super(d,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Yu=class extends gr{constructor(e,n=Ti,i=ns,r,s,a=jt,o=jt,l,c=Bi){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},al=class extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ba=class t extends oi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,m=0;y("z","y","x",-1,-1,i,n,e,a,s,0),y("z","y","x",1,-1,i,n,-e,a,s,1),y("x","z","y",1,1,e,i,n,r,a,2),y("x","z","y",1,-1,e,i,-n,r,a,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(f,2));function y(b,g,u,p,_,M,T,E,R,x,C){let P=M/R,I=T/x,U=M/2,W=T/2,X=E/2,F=R+1,V=x+1,G=0,Z=0,te=new O;for(let ae=0;ae<V;ae++){let xe=ae*I-W;for(let ve=0;ve<F;ve++){let Be=ve*P-U;te[b]=Be*p,te[g]=xe*_,te[u]=X,c.push(te.x,te.y,te.z),te[b]=0,te[g]=0,te[u]=E>0?1:-1,h.push(te.x,te.y,te.z),f.push(ve/R),f.push(1-ae/x),G+=1}}for(let ae=0;ae<x;ae++)for(let xe=0;xe<R;xe++){let ve=d+xe+F*ae,Be=d+xe+F*(ae+1),ze=d+(xe+1)+F*(ae+1),De=d+(xe+1)+F*ae;l.push(ve,Be,De),l.push(Be,ze,De),Z+=6}o.addGroup(m,Z,C),m+=Z,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ol=class t extends oi{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=n/2,f=Math.PI/2*e,d=n,m=2*f+d,y=i*2+s,b=r+1,g=new O,u=new O;for(let p=0;p<=y;p++){let _=0,M=0,T=0,E=0;if(p<=i){let C=p/i,P=C*Math.PI/2;M=-h-e*Math.cos(P),T=e*Math.sin(P),E=-e*Math.cos(P),_=C*f}else if(p<=i+s){let C=(p-i)/s;M=-h+C*n,T=e,E=0,_=f+C*d}else{let C=(p-i-s)/i,P=C*Math.PI/2;M=h+e*Math.sin(P),T=e*Math.cos(P),E=e*Math.sin(P),_=f+d+C*f}let R=Math.max(0,Math.min(1,_/m)),x=0;p===0?x=.5/r:p===y&&(x=-.5/r);for(let C=0;C<=r;C++){let P=C/r,I=P*Math.PI*2,U=Math.sin(I),W=Math.cos(I);u.x=-T*W,u.y=M,u.z=T*U,o.push(u.x,u.y,u.z),g.set(-T*W,E,T*U),g.normalize(),l.push(g.x,g.y,g.z),c.push(P+x,R)}if(p>0){let C=(p-1)*b;for(let P=0;P<r;P++){let I=C+P,U=C+P+1,W=p*b+P,X=p*b+P+1;a.push(I,U,W),a.push(U,X,W)}}}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var ll=class t extends oi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,d=n/l,m=[],y=[],b=[],g=[];for(let u=0;u<h;u++){let p=u*d-a;for(let _=0;_<c;_++){let M=_*f-s;y.push(M,-p,0),b.push(0,0,1),g.push(_/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let p=0;p<o;p++){let _=p+c*u,M=p+c*(u+1),T=p+1+c*(u+1),E=p+1+c*u;m.push(_,M,E),m.push(M,T,E)}this.setIndex(m),this.setAttribute("position",new Yt(y,3)),this.setAttribute("normal",new Yt(b,3)),this.setAttribute("uv",new Yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var cl=class t extends oi{constructor(e=1,n=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],f=new O,d=new O,m=new O,y=new O,b=new O,g=new O,u=new O;for(let _=0;_<=i;++_){let M=_/i*s*Math.PI*2;p(M,s,a,e,m),p(M+.01,s,a,e,y),g.subVectors(y,m),u.addVectors(y,m),b.crossVectors(g,u),u.crossVectors(b,g),b.normalize(),u.normalize();for(let T=0;T<=r;++T){let E=T/r*Math.PI*2,R=-n*Math.cos(E),x=n*Math.sin(E);f.x=m.x+(R*u.x+x*b.x),f.y=m.y+(R*u.y+x*b.y),f.z=m.z+(R*u.z+x*b.z),l.push(f.x,f.y,f.z),d.subVectors(f,m).normalize(),c.push(d.x,d.y,d.z),h.push(_/i),h.push(T/r)}}for(let _=1;_<=i;_++)for(let M=1;M<=r;M++){let T=(r+1)*(_-1)+(M-1),E=(r+1)*_+(M-1),R=(r+1)*_+M,x=(r+1)*(_-1)+M;o.push(T,E,x),o.push(E,R,x)}this.setIndex(o),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2));function p(_,M,T,E,R){let x=Math.cos(_),C=Math.sin(_),P=T/M*_,I=Math.cos(P);R.x=E*(2+I)*.5*x,R.y=E*(2+I)*C*.5,R.z=E*Math.sin(P)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}};function Ls(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];if(P_(r))r.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(P_(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function hn(t){let e={};for(let n=0;n<t.length;n++){let i=Ls(t[n]);for(let r in i)e[r]=i[r]}return e}function P_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Tb(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Wm(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var vy={clone:Ls,merge:hn},Ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ab,this.fragmentShader=Cb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=Tb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},ju=class extends $n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},za=class extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jd,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Zu=class extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ju=class extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Tu(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}var Qr=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=n[++i],e<r)break t}a=n.length;break n}if(!(e>=s)){let o=n[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<n[o]?a=o:i=o+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)n[a]=i[s+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qu=class extends Qr{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fm,endingEnd:fm}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case pm:s=e,o=2*n-i;break;case mm:s=r.length-2,o=n+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case pm:a=e,l=2*i-n;break;case mm:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,y=(i-n)/(r-n),b=y*y,g=b*y,u=-d*g+2*d*b-d*y,p=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*y+1,_=(-1-m)*g+(1.5+m)*b+.5*y,M=m*g-m*b;for(let T=0;T!==o;++T)s[T]=u*a[h+T]+p*a[c+T]+_*a[l+T]+M*a[f+T];return s}},ed=class extends Qr{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-n)/(r-n),f=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*f+a[l+d]*h;return s}},td=class extends Qr{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},nd=class extends Qr{interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,f=h.inTangents,d=h.outTangents;if(!f||!d){let b=(i-n)/(r-n),g=1-b;for(let u=0;u!==o;++u)s[u]=a[c+u]*g+a[l+u]*b;return s}let m=o*2,y=e-1;for(let b=0;b!==o;++b){let g=a[c+b],u=a[l+b],p=y*m+b*2,_=d[p],M=d[p+1],T=e*m+b*2,E=f[T],R=f[T+1],x=(i-n)/(r-n),C,P,I,U,W;for(let X=0;X<8;X++){C=x*x,P=C*x,I=1-x,U=I*I,W=U*I;let V=W*n+3*U*x*_+3*I*C*E+P*r-i;if(Math.abs(V)<1e-10)break;let G=3*U*(_-n)+6*I*x*(E-_)+3*C*(r-E);if(Math.abs(G)<1e-10)break;x=x-V/G,x=Math.max(0,Math.min(1,x))}s[b]=W*g+3*U*x*M+3*I*C*R+P*u}return s}},Yn=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tu(n,this.TimeBufferType),this.values=Tu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Tu(e.times,Array),values:Tu(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new td(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ed(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new nd(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.settings=this.settings),n}setInterpolation(e){let n;switch(e){case Yo:n=this.InterpolantFactoryMethodDiscrete;break;case Vu:n=this.InterpolantFactoryMethodLinear;break;case Ru:n=this.InterpolantFactoryMethodSmooth;break;case hm:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ue("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yo;case this.InterpolantFactoryMethodLinear:return Vu;case this.InterpolantFactoryMethodSmooth:return Ru;case this.InterpolantFactoryMethodBezier:return hm}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>n;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Oe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Oe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&ab(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){Oe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ru,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{let f=o*i,d=f-i,m=f+i;for(let y=0;y!==i;++y){let b=n[f+y];if(b!==n[d+y]||b!==n[m+y]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,d=a*i;for(let m=0;m!==i;++m)n[d+m]=n[f+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)n[l+c]=n[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=Vu;var es=class extends Yn{constructor(e,n,i){super(e,n,i)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Yo;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var id=class extends Yn{constructor(e,n,i,r){super(e,n,i,r)}};id.prototype.ValueTypeName="color";var rd=class extends Yn{constructor(e,n,i,r){super(e,n,i,r)}};rd.prototype.ValueTypeName="number";var sd=class extends Qr{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-n)/(r-n),c=e*o;for(let h=c+o;c!==h;c+=4)Vi.slerpFlat(s,0,a,c-o,a,c,l);return s}},ul=class extends Yn{constructor(e,n,i,r){super(e,n,i,r)}InterpolantFactoryMethodLinear(e){return new sd(this.times,this.values,this.getValueSize(),e)}};ul.prototype.ValueTypeName="quaternion";ul.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Yn{constructor(e,n,i){super(e,n,i)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Yo;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ad=class extends Yn{constructor(e,n,i,r){super(e,n,i,r)}};ad.prototype.ValueTypeName="vector";var od=class{constructor(e,n,i){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let m=c[f],y=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_y=new od,ld=class{constructor(e){this.manager=e!==void 0?e:_y,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ld.DEFAULT_MATERIAL_NAME="__DEFAULT";var dl=class extends Kn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}};var dm=new Ft,I_=new O,N_=new O,vm=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oa,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;I_.setFromMatrixPosition(e.matrixWorld),n.position.copy(I_),N_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(N_),n.updateMatrixWorld(),dm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dm,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===La||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Au=new O,Cu=new Vi,Ui=new O,hl=class extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Au,Cu,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Au,Cu,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Au,Cu,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Au,Cu,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$r=new O,L_=new dt,D_=new dt,tn=class extends hl{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Hu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hu*2*Math.atan(Math.tan(Gp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){$r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($r.x,$r.y).multiplyScalar(-e/$r.z),$r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($r.x,$r.y).multiplyScalar(-e/$r.z)}getViewSize(e,n){return this.getViewBounds(e,L_,D_),n.subVectors(D_,L_)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Gp*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var _m=class extends vm{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},Va=class extends dl{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new _m}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},fl=class extends hl{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var pl=class extends dl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var Pa=-90,Ia=1,cd=class extends Kn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new tn(Pa,Ia,e,n);r.layers=this.layers,this.add(r);let s=new tn(Pa,Ia,e,n);s.layers=this.layers,this.add(s);let a=new tn(Pa,Ia,e,n);a.layers=this.layers,this.add(a);let o=new tn(Pa,Ia,e,n);o.layers=this.layers,this.add(o);let l=new tn(Pa,Ia,e,n);l.layers=this.layers,this.add(l);let c=new tn(Pa,Ia,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(let c of n)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===La)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(f,d,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},ud=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Xm="\\[\\]\\.:\\/",Rb=new RegExp("["+Xm+"]","g"),qm="[^"+Xm+"]",Pb="[^"+Xm.replace("\\.","")+"]",Ib=/((?:WC+[\/:])*)/.source.replace("WC",qm),Nb=/(WCOD+)?/.source.replace("WCOD",Pb),Lb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qm),Db=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qm),Fb=new RegExp("^"+Ib+Nb+Lb+Db+"$"),Ub=["material","materials","bones","map"],ym=class{constructor(e,n,i){let r=i||wt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},wt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rb,"")}static parseTrackName(e){let n=Fb.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Ub.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=n.nodeName;Oe("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=ym;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Y2=new Float32Array(1);var Sm=class t{static{t.prototype.isMatrix2=!0}constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){let s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};function Km(t,e,n,i){let r=kb(i);switch(n){case Bm:return t*e;case Vm:return t*e/r.components*r.byteLength;case xd:return t*e/r.components*r.byteLength;case ss:return t*e*2/r.components*r.byteLength;case vd:return t*e*2/r.components*r.byteLength;case zm:return t*e*3/r.components*r.byteLength;case li:return t*e*4/r.components*r.byteLength;case _d:return t*e*4/r.components*r.byteLength;case vl:case _l:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yl:case Sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sd:case bd:return Math.max(t,16)*Math.max(e,8)/4;case yd:case Md:return Math.max(t,8)*Math.max(e,8)/2;case wd:case Ed:case Ad:case Cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Td:case Ml:case Rd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case kd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Od:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case zd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Gd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Wd:case Xd:case qd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Kd:case $d:return Math.ceil(t/4)*Math.ceil(e/4)*8;case bl:case Yd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kb(t){switch(t){case In:case Fm:return{byteLength:1,components:1};case Ha:case Um:case Wi:return{byteLength:2,components:1};case md:case gd:return{byteLength:2,components:4};case Ti:case pd:case Ai:return{byteLength:4,components:1};case km:case Om:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function Gy(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Bb(t){let e=new WeakMap;function n(o,l){let c=o.array,h=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,h);else{f.sort((m,y)=>m.start-y.start);let d=0;for(let m=1;m<f.length;m++){let y=f[d],b=f[m];b.start<=y.start+y.count+1?y.count=Math.max(y.count,b.start+b.count-y.start):(++d,f[d]=b)}f.length=d+1;for(let m=0,y=f.length;m<y;m++){let b=f[m];t.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var zb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vb=`#ifdef USE_ALPHAHASH
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
#endif`,Gb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qb=`#ifdef USE_AOMAP
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
#endif`,Kb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$b=`#ifdef USE_BATCHING
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
#endif`,Yb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qb=`#ifdef USE_IRIDESCENCE
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
#endif`,ew=`#ifdef USE_BUMPMAP
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
#endif`,tw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,aw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ow=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cw=`#define PI 3.141592653589793
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
} // validated`,uw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dw=`vec3 transformedNormal = objectNormal;
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
#endif`,hw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gw="gl_FragColor = linearToOutputTexel( gl_FragColor );",xw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vw=`#ifdef USE_ENVMAP
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
#endif`,_w=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yw=`#ifdef USE_ENVMAP
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
#endif`,Sw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mw=`#ifdef USE_ENVMAP
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
#endif`,bw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ww=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ew=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Aw=`#ifdef USE_GRADIENTMAP
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
}`,Cw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Nw=`#ifdef USE_ENVMAP
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
#endif`,Lw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kw=`PhysicalMaterial material;
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
#endif`,Ow=`uniform sampler2D dfgLUT;
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
}`,Bw=`
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
#endif`,zw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Hw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ww=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$w=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jw=`#if defined( USE_POINTS_UV )
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
#endif`,Zw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`#ifdef USE_MORPHTARGETS
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
#endif`,iE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cE=`#ifdef USE_NORMALMAP
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
#endif`,uE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,EE=`float getShadowMask() {
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
}`,TE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AE=`#ifdef USE_SKINNING
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
#endif`,CE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RE=`#ifdef USE_SKINNING
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
#endif`,PE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DE=`#ifdef USE_TRANSMISSION
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
#endif`,FE=`#ifdef USE_TRANSMISSION
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
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
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
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`#include <common>
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
}`,KE=`#if DEPTH_PACKING == 3200
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
}`,$E=`#define DISTANCE
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
}`,YE=`#define DISTANCE
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
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`uniform float scale;
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
}`,QE=`uniform vec3 diffuse;
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
}`,eT=`#include <common>
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
}`,tT=`uniform vec3 diffuse;
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
}`,nT=`#define LAMBERT
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
}`,iT=`#define LAMBERT
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
}`,rT=`#define MATCAP
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
}`,sT=`#define MATCAP
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
}`,aT=`#define NORMAL
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
}`,oT=`#define NORMAL
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
}`,lT=`#define PHONG
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
}`,cT=`#define PHONG
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
}`,uT=`#define STANDARD
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
}`,dT=`#define STANDARD
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
}`,hT=`#define TOON
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
}`,fT=`#define TOON
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
}`,pT=`uniform float size;
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#include <common>
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
}`,xT=`uniform vec3 color;
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
}`,vT=`uniform float rotation;
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
}`,_T=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:zb,alphahash_pars_fragment:Vb,alphamap_fragment:Gb,alphamap_pars_fragment:Hb,alphatest_fragment:Wb,alphatest_pars_fragment:Xb,aomap_fragment:qb,aomap_pars_fragment:Kb,batching_pars_vertex:$b,batching_vertex:Yb,begin_vertex:jb,beginnormal_vertex:Zb,bsdfs:Jb,iridescence_fragment:Qb,bumpmap_pars_fragment:ew,clipping_planes_fragment:tw,clipping_planes_pars_fragment:nw,clipping_planes_pars_vertex:iw,clipping_planes_vertex:rw,color_fragment:sw,color_pars_fragment:aw,color_pars_vertex:ow,color_vertex:lw,common:cw,cube_uv_reflection_fragment:uw,defaultnormal_vertex:dw,displacementmap_pars_vertex:hw,displacementmap_vertex:fw,emissivemap_fragment:pw,emissivemap_pars_fragment:mw,colorspace_fragment:gw,colorspace_pars_fragment:xw,envmap_fragment:vw,envmap_common_pars_fragment:_w,envmap_pars_fragment:yw,envmap_pars_vertex:Sw,envmap_physical_pars_fragment:Nw,envmap_vertex:Mw,fog_vertex:bw,fog_pars_vertex:ww,fog_fragment:Ew,fog_pars_fragment:Tw,gradientmap_pars_fragment:Aw,lightmap_pars_fragment:Cw,lights_lambert_fragment:Rw,lights_lambert_pars_fragment:Pw,lights_pars_begin:Iw,lights_toon_fragment:Lw,lights_toon_pars_fragment:Dw,lights_phong_fragment:Fw,lights_phong_pars_fragment:Uw,lights_physical_fragment:kw,lights_physical_pars_fragment:Ow,lights_fragment_begin:Bw,lights_fragment_maps:zw,lights_fragment_end:Vw,lightprobes_pars_fragment:Gw,logdepthbuf_fragment:Hw,logdepthbuf_pars_fragment:Ww,logdepthbuf_pars_vertex:Xw,logdepthbuf_vertex:qw,map_fragment:Kw,map_pars_fragment:$w,map_particle_fragment:Yw,map_particle_pars_fragment:jw,metalnessmap_fragment:Zw,metalnessmap_pars_fragment:Jw,morphinstance_vertex:Qw,morphcolor_vertex:eE,morphnormal_vertex:tE,morphtarget_pars_vertex:nE,morphtarget_vertex:iE,normal_fragment_begin:rE,normal_fragment_maps:sE,normal_pars_fragment:aE,normal_pars_vertex:oE,normal_vertex:lE,normalmap_pars_fragment:cE,clearcoat_normal_fragment_begin:uE,clearcoat_normal_fragment_maps:dE,clearcoat_pars_fragment:hE,iridescence_pars_fragment:fE,opaque_fragment:pE,packing:mE,premultiplied_alpha_fragment:gE,project_vertex:xE,dithering_fragment:vE,dithering_pars_fragment:_E,roughnessmap_fragment:yE,roughnessmap_pars_fragment:SE,shadowmap_pars_fragment:ME,shadowmap_pars_vertex:bE,shadowmap_vertex:wE,shadowmask_pars_fragment:EE,skinbase_vertex:TE,skinning_pars_vertex:AE,skinning_vertex:CE,skinnormal_vertex:RE,specularmap_fragment:PE,specularmap_pars_fragment:IE,tonemapping_fragment:NE,tonemapping_pars_fragment:LE,transmission_fragment:DE,transmission_pars_fragment:FE,uv_pars_fragment:UE,uv_pars_vertex:kE,uv_vertex:OE,worldpos_vertex:BE,background_vert:zE,background_frag:VE,backgroundCube_vert:GE,backgroundCube_frag:HE,cube_vert:WE,cube_frag:XE,depth_vert:qE,depth_frag:KE,distance_vert:$E,distance_frag:YE,equirect_vert:jE,equirect_frag:ZE,linedashed_vert:JE,linedashed_frag:QE,meshbasic_vert:eT,meshbasic_frag:tT,meshlambert_vert:nT,meshlambert_frag:iT,meshmatcap_vert:rT,meshmatcap_frag:sT,meshnormal_vert:aT,meshnormal_frag:oT,meshphong_vert:lT,meshphong_frag:cT,meshphysical_vert:uT,meshphysical_frag:dT,meshtoon_vert:hT,meshtoon_frag:fT,points_vert:pT,points_frag:mT,shadow_vert:gT,shadow_frag:xT,sprite_vert:vT,sprite_frag:_T},me={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},qi={basic:{uniforms:hn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:hn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:hn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:hn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:hn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:hn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:hn([me.points,me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:hn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:hn([me.common,me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:hn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:hn([me.sprite,me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:hn([me.common,me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:hn([me.lights,me.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};qi.physical={uniforms:hn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Qd={r:0,b:0,g:0},yT=new Ft,Hy=new qe;Hy.set(-1,0,0,0,1,0,0,0,1);function ST(t,e,n,i,r,s){let a=new rt(0),o=r===!0?0:1,l,c,h=null,f=0,d=null;function m(p){let _=p.isScene===!0?p.background:null;if(_&&_.isTexture){let M=p.backgroundBlurriness>0;_=e.get(_,M)}return _}function y(p){let _=!1,M=m(p);M===null?g(a,o):M&&M.isColor&&(g(M,1),_=!0);let T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(p,_){let M=m(_);M&&(M.isCubeTexture||M.mapping===gl)?(c===void 0&&(c=new vn(new Ba(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Ls(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yT.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hy),c.material.toneMapped=et.getTransfer(M.colorSpace)!==mt,(h!==M||f!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new vn(new ll(2,2),new $n({name:"BackgroundMaterial",uniforms:Ls(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=et.getTransfer(M.colorSpace)!==mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,_){p.getRGB(Qd,Wm(t)),n.buffers.color.setClear(Qd.r,Qd.g,Qd.b,_,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),o=_,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:y,addToRenderList:b,dispose:u}}function MT(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,a=!1;function o(I,U,W,X,F){let V=!1,G=f(I,X,W,U);s!==G&&(s=G,c(s.object)),V=m(I,X,W,F),V&&y(I,X,W,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,M(I,U,W,X),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function h(I){return t.deleteVertexArray(I)}function f(I,U,W,X){let F=X.wireframe===!0,V=i[U.id];V===void 0&&(V={},i[U.id]=V);let G=I.isInstancedMesh===!0?I.id:0,Z=V[G];Z===void 0&&(Z={},V[G]=Z);let te=Z[W.id];te===void 0&&(te={},Z[W.id]=te);let ae=te[F];return ae===void 0&&(ae=d(l()),te[F]=ae),ae}function d(I){let U=[],W=[],X=[];for(let F=0;F<n;F++)U[F]=0,W[F]=0,X[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:X,object:I,attributes:{},index:null}}function m(I,U,W,X){let F=s.attributes,V=U.attributes,G=0,Z=W.getAttributes();for(let te in Z)if(Z[te].location>=0){let xe=F[te],ve=V[te];if(ve===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(ve=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(ve=I.instanceColor)),xe===void 0||xe.attribute!==ve||ve&&xe.data!==ve.data)return!0;G++}return s.attributesNum!==G||s.index!==X}function y(I,U,W,X){let F={},V=U.attributes,G=0,Z=W.getAttributes();for(let te in Z)if(Z[te].location>=0){let xe=V[te];xe===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(xe=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(xe=I.instanceColor));let ve={};ve.attribute=xe,xe&&xe.data&&(ve.data=xe.data),F[te]=ve,G++}s.attributes=F,s.attributesNum=G,s.index=X}function b(){let I=s.newAttributes;for(let U=0,W=I.length;U<W;U++)I[U]=0}function g(I){u(I,0)}function u(I,U){let W=s.newAttributes,X=s.enabledAttributes,F=s.attributeDivisors;W[I]=1,X[I]===0&&(t.enableVertexAttribArray(I),X[I]=1),F[I]!==U&&(t.vertexAttribDivisor(I,U),F[I]=U)}function p(){let I=s.newAttributes,U=s.enabledAttributes;for(let W=0,X=U.length;W<X;W++)U[W]!==I[W]&&(t.disableVertexAttribArray(W),U[W]=0)}function _(I,U,W,X,F,V,G){G===!0?t.vertexAttribIPointer(I,U,W,F,V):t.vertexAttribPointer(I,U,W,X,F,V)}function M(I,U,W,X){b();let F=X.attributes,V=W.getAttributes(),G=U.defaultAttributeValues;for(let Z in V){let te=V[Z];if(te.location>=0){let ae=F[Z];if(ae===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),ae!==void 0){let xe=ae.normalized,ve=ae.itemSize,Be=e.get(ae);if(Be===void 0)continue;let ze=Be.buffer,De=Be.type,K=Be.bytesPerElement,ce=De===t.INT||De===t.UNSIGNED_INT||ae.gpuType===pd;if(ae.isInterleavedBufferAttribute){let ie=ae.data,Ce=ie.stride,Ie=ae.offset;if(ie.isInstancedInterleavedBuffer){for(let Ne=0;Ne<te.locationSize;Ne++)u(te.location+Ne,ie.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ne=0;Ne<te.locationSize;Ne++)g(te.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Ne=0;Ne<te.locationSize;Ne++)_(te.location+Ne,ve/te.locationSize,De,xe,Ce*K,(Ie+ve/te.locationSize*Ne)*K,ce)}else{if(ae.isInstancedBufferAttribute){for(let ie=0;ie<te.locationSize;ie++)u(te.location+ie,ae.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ie=0;ie<te.locationSize;ie++)g(te.location+ie);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let ie=0;ie<te.locationSize;ie++)_(te.location+ie,ve/te.locationSize,De,xe,ve*K,ve/te.locationSize*ie*K,ce)}}else if(G!==void 0){let xe=G[Z];if(xe!==void 0)switch(xe.length){case 2:t.vertexAttrib2fv(te.location,xe);break;case 3:t.vertexAttrib3fv(te.location,xe);break;case 4:t.vertexAttrib4fv(te.location,xe);break;default:t.vertexAttrib1fv(te.location,xe)}}}}p()}function T(){C();for(let I in i){let U=i[I];for(let W in U){let X=U[W];for(let F in X){let V=X[F];for(let G in V)h(V[G].object),delete V[G];delete X[F]}}delete i[I]}}function E(I){if(i[I.id]===void 0)return;let U=i[I.id];for(let W in U){let X=U[W];for(let F in X){let V=X[F];for(let G in V)h(V[G].object),delete V[G];delete X[F]}}delete i[I.id]}function R(I){for(let U in i){let W=i[U];for(let X in W){let F=W[X];if(F[I.id]===void 0)continue;let V=F[I.id];for(let G in V)h(V[G].object),delete V[G];delete F[I.id]}}}function x(I){for(let U in i){let W=i[U],X=I.isInstancedMesh===!0?I.id:0,F=W[X];if(F!==void 0){for(let V in F){let G=F[V];for(let Z in G)h(G[Z].object),delete G[Z];delete F[V]}delete W[X],Object.keys(W).length===0&&delete i[U]}}}function C(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:g,disableUnusedAttributes:p}}function bT(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function wT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==li&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let x=R===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==In&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ai&&!x)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(Ue("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:M,maxSamples:T,samples:E}}function ET(t){let e=this,n=null,i=0,r=!1,s=!1,a=new ki,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,m){let y=f.clippingPlanes,b=f.clipIntersection,g=f.clipShadows,u=t.get(f);if(!r||y===null||y.length===0||s&&!g)s?h(null):c();else{let p=s?0:i,_=p*4,M=u.clippingState||null;l.value=M,M=h(y,d,_,m);for(let T=0;T!==_;++T)M[T]=n[T];u.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,m,y){let b=f!==null?f.length:0,g=null;if(b!==0){if(g=l.value,y!==!0||g===null){let u=m+b*4,p=d.matrixWorldInverse;o.getNormalMatrix(p),(g===null||g.length<u)&&(g=new Float32Array(u));for(let _=0,M=m;_!==b;++_,M+=4)a.copy(f[_]).applyMatrix4(p,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var as=4,yy=[.125,.215,.35,.446,.526,.582],Ds=20,TT=256,El=new fl,Sy=new rt,$m=null,Ym=0,jm=0,Zm=!1,AT=new O,th=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){let{size:a=256,position:o=AT}=s;$m=this._renderer.getRenderTarget(),Ym=this._renderer.getActiveCubeFace(),jm=this._renderer.getActiveMipmapLevel(),Zm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=by(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($m,Ym,jm),this._renderer.xr.enabled=Zm,e.scissorTest=!1,Xa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$m=this._renderer.getRenderTarget(),Ym=this._renderer.getActiveCubeFace(),jm=this._renderer.getActiveMipmapLevel(),Zm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Wi,format:li,colorSpace:jo,depthBuffer:!1},r=My(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=My(e,n,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CT(s)),this._blurMaterial=PT(s,e,n),this._ggxMaterial=RT(s,e,n)}return r}_compileMaterial(e){let n=new vn(new oi,e);this._renderer.compile(n,El)}_sceneToCubeUV(e,n,i,r,s){let l=new tn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(Sy),f.toneMapping=Ei,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vn(new Ba,new rl({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,u=!1,p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,u=!0):(g.color.copy(Sy),u=!0);for(let _=0;_<6;_++){let M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));let T=this._cubeSize;Xa(r,M*T,_>2?T:0,T,T),f.setRenderTarget(r),u&&f.render(b,l),f.render(e,l)}f.toneMapping=m,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===ns||e.mapping===Ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=by());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;Xa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,El)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),d=0+c*1.25,m=f*d,{_lodMax:y}=this,b=this._sizeLods[i],g=3*b*(i>y-as?i-y+as:0),u=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=y-n,Xa(s,g,u,3*b,2*b),r.setRenderTarget(s),r.render(o,El),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=y-i,Xa(e,g,u,3*b,2*b),r.setRenderTarget(e),r.render(o,El)}_blur(e,n,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Oe("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[r];f.material=c;let d=c.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ds-1),b=s/y,g=isFinite(s)?1+Math.floor(h*b):Ds;g>Ds&&Ue(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ds}`);let u=[],p=0;for(let R=0;R<Ds;++R){let x=R/b,C=Math.exp(-x*x/2);u.push(C),R===0?p+=C:R<g&&(p+=2*C)}for(let R=0;R<u.length;R++)u[R]=u[R]/p;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=y,d.mipInt.value=_-i;let M=this._sizeLods[r],T=3*M*(r>_-as?r-_+as:0),E=4*(this._cubeSize-M);Xa(n,T,E,3*M,2*M),l.setRenderTarget(n),l.render(f,El)}};function CT(t){let e=[],n=[],i=[],r=t,s=t-as+1+yy.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);e.push(o);let l=1/o;a>t-as?l=yy[a-t+as-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,y=6,b=3,g=2,u=1,p=new Float32Array(b*y*m),_=new Float32Array(g*y*m),M=new Float32Array(u*y*m);for(let E=0;E<m;E++){let R=E%3*2/3-1,x=E>2?0:-1,C=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];p.set(C,b*y*E),_.set(d,g*y*E);let P=[E,E,E,E,E,E];M.set(P,u*y*E)}let T=new oi;T.setAttribute("position",new Xn(p,b)),T.setAttribute("uv",new Xn(_,g)),T.setAttribute("faceIndex",new Xn(M,u)),i.push(new vn(T,null)),r>as&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function My(t,e,n){let i=new qn(t,e,n);return i.texture.mapping=gl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function RT(t,e,n){return new $n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rh(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function PT(t,e,n){let i=new Float32Array(Ds),r=new O(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rh(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function by(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function wy(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function rh(){return`

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
	`}var nh=class extends qn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new sl(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ba(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Hi});s.uniforms.tEquirect.value=n;let a=new vn(r,s),o=n.minFilter;return n.minFilter===is&&(n.minFilter=nn),new cd(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}};function IT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){let m=d.mapping;if(m===dd||m===hd)if(e.has(d)){let y=e.get(d).texture;return o(y,d.mapping)}else{let y=d.image;if(y&&y.height>0){let b=new nh(y.height);return b.fromEquirectangularTexture(t,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let m=d.mapping,y=m===dd||m===hd,b=m===ns||m===Ns;if(y||b){let g=n.get(d),u=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new th(t)),g=y?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{let p=d.image;return y&&p&&p.height>0||b&&p&&l(p)?(i===null&&(i=new th(t)),g=y?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,m){return m===dd?d.mapping=ns:m===hd&&(d.mapping=Ns),d}function l(d){let m=0,y=6;for(let b=0;b<y;b++)d[b]!==void 0&&m++;return m===y}function c(d){let m=d.target;m.removeEventListener("dispose",c);let y=e.get(m);y!==void 0&&(e.delete(m),y.dispose())}function h(d){let m=d.target;m.removeEventListener("dispose",h);let y=n.get(m);y!==void 0&&(n.delete(m),y.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function NT(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&Gu("WebGLRenderer: "+i+" extension not supported."),r}}}function LT(t,e,n,i){let r={},s=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let y in d.attributes)e.remove(d.attributes[y]);d.removeEventListener("dispose",a),delete r[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){let d=f.attributes;for(let m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(f){let d=[],m=f.index,y=f.attributes.position,b=0;if(y===void 0)return;if(m!==null){let p=m.array;b=m.version;for(let _=0,M=p.length;_<M;_+=3){let T=p[_+0],E=p[_+1],R=p[_+2];d.push(T,E,E,R,R,T)}}else{let p=y.array;b=y.version;for(let _=0,M=p.length/3-1;_<M;_+=3){let T=_+0,E=_+1,R=_+2;d.push(T,E,E,R,R,T)}}let g=new(y.count>=65535?il:nl)(d,1);g.version=b;let u=s.get(f);u&&e.remove(u),s.set(f,g)}function h(f){let d=s.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function DT(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){t.drawElements(i,d,s,f*a),n.update(d,i,1)}function c(f,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,f*a,m),n.update(d,i,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,m);let b=0;for(let g=0;g<m;g++)b+=d[g];n.update(b,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function FT(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Oe("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function UT(t,e,n){let i=new WeakMap,r=new Lt;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==f){let C=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let m=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],p=o.morphAttributes.color||[],_=0;m===!0&&(_=1),y===!0&&(_=2),b===!0&&(_=3);let M=o.attributes.position.count*_,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*T*4*f),R=new Qo(E,M,T,f);R.type=Ai,R.needsUpdate=!0;let x=_*4;for(let P=0;P<f;P++){let I=g[P],U=u[P],W=p[P],X=M*T*4*P;for(let F=0;F<I.count;F++){let V=F*x;m===!0&&(r.fromBufferAttribute(I,F),E[X+V+0]=r.x,E[X+V+1]=r.y,E[X+V+2]=r.z,E[X+V+3]=0),y===!0&&(r.fromBufferAttribute(U,F),E[X+V+4]=r.x,E[X+V+5]=r.y,E[X+V+6]=r.z,E[X+V+7]=0),b===!0&&(r.fromBufferAttribute(W,F),E[X+V+8]=r.x,E[X+V+9]=r.y,E[X+V+10]=r.z,E[X+V+11]=W.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new dt(M,T)},i.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let b=0;b<c.length;b++)m+=c[b];let y=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function kT(t,e,n,i,r){let s=new WeakMap;function a(c){let h=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return d}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}var OT={[Am]:"LINEAR_TONE_MAPPING",[Cm]:"REINHARD_TONE_MAPPING",[Rm]:"CINEON_TONE_MAPPING",[Pm]:"ACES_FILMIC_TONE_MAPPING",[Nm]:"AGX_TONE_MAPPING",[Lm]:"NEUTRAL_TONE_MAPPING",[Im]:"CUSTOM_TONE_MAPPING"};function BT(t,e,n,i,r){let s=new qn(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new gr(e,n):void 0}),a=new qn(e,n,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),o=new oi;o.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Yt([0,2,0,0,2,0],2));let l=new ju({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new vn(o,l),h=new fl(-1,1,1,-1,0,1),f=null,d=null,m=!1,y,b=null,g=[],u=!1;this.setSize=function(p,_){s.setSize(p,_),a.setSize(p,_);for(let M=0;M<g.length;M++){let T=g[M];T.setSize&&T.setSize(p,_)}},this.setEffects=function(p){g=p,u=g.length>0&&g[0].isRenderPass===!0;let _=s.width,M=s.height;for(let T=0;T<g.length;T++){let E=g[T];E.setSize&&E.setSize(_,M)}},this.begin=function(p,_){if(m||p.toneMapping===Ei&&g.length===0)return!1;if(b=_,_!==null){let M=_.width,T=_.height;(s.width!==M||s.height!==T)&&this.setSize(M,T)}return u===!1&&p.setRenderTarget(s),y=p.toneMapping,p.toneMapping=Ei,!0},this.hasRenderPass=function(){return u},this.end=function(p,_){p.toneMapping=y,m=!0;let M=s,T=a;for(let E=0;E<g.length;E++){let R=g[E];if(R.enabled!==!1&&(R.render(p,T,M,_),R.needsSwap!==!1)){let x=M;M=T,T=x}}if(f!==p.outputColorSpace||d!==p.toneMapping){f=p.outputColorSpace,d=p.toneMapping,l.defines={},et.getTransfer(f)===mt&&(l.defines.SRGB_TRANSFER="");let E=OT[d];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,p.setRenderTarget(b),p.render(c,h),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Wy=new Pn,eg=new gr(1,1),Xy=new Qo,qy=new qu,Ky=new sl,Ey=[],Ty=[],Ay=new Float32Array(16),Cy=new Float32Array(9),Ry=new Float32Array(4);function Ka(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=Ey[r];if(s===void 0&&(s=new Float32Array(r),Ey[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function sh(t,e){let n=Ty[e];n===void 0&&(n=new Int32Array(e),Ty[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function zT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function VT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Wt(n,e)}}function GT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Wt(n,e)}}function HT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Wt(n,e)}}function WT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if(Ht(n,i))return;Ry.set(i),t.uniformMatrix2fv(this.addr,!1,Ry),Wt(n,i)}}function XT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if(Ht(n,i))return;Cy.set(i),t.uniformMatrix3fv(this.addr,!1,Cy),Wt(n,i)}}function qT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if(Ht(n,i))return;Ay.set(i),t.uniformMatrix4fv(this.addr,!1,Ay),Wt(n,i)}}function KT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $T(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Wt(n,e)}}function YT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Wt(n,e)}}function jT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Wt(n,e)}}function ZT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function JT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Wt(n,e)}}function QT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Wt(n,e)}}function eA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Wt(n,e)}}function tA(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(eg.compareFunction=n.isReversedDepthBuffer()?Jd:Zd,s=eg):s=Wy,n.setTexture2D(e||s,r)}function nA(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||qy,r)}function iA(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ky,r)}function rA(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Xy,r)}function sA(t){switch(t){case 5126:return zT;case 35664:return VT;case 35665:return GT;case 35666:return HT;case 35674:return WT;case 35675:return XT;case 35676:return qT;case 5124:case 35670:return KT;case 35667:case 35671:return $T;case 35668:case 35672:return YT;case 35669:case 35673:return jT;case 5125:return ZT;case 36294:return JT;case 36295:return QT;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return rA}}function aA(t,e){t.uniform1fv(this.addr,e)}function oA(t,e){let n=Ka(e,this.size,2);t.uniform2fv(this.addr,n)}function lA(t,e){let n=Ka(e,this.size,3);t.uniform3fv(this.addr,n)}function cA(t,e){let n=Ka(e,this.size,4);t.uniform4fv(this.addr,n)}function uA(t,e){let n=Ka(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function dA(t,e){let n=Ka(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hA(t,e){let n=Ka(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function fA(t,e){t.uniform1iv(this.addr,e)}function pA(t,e){t.uniform2iv(this.addr,e)}function mA(t,e){t.uniform3iv(this.addr,e)}function gA(t,e){t.uniform4iv(this.addr,e)}function xA(t,e){t.uniform1uiv(this.addr,e)}function vA(t,e){t.uniform2uiv(this.addr,e)}function _A(t,e){t.uniform3uiv(this.addr,e)}function yA(t,e){t.uniform4uiv(this.addr,e)}function SA(t,e,n){let i=this.cache,r=e.length,s=sh(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=eg:a=Wy;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function MA(t,e,n){let i=this.cache,r=e.length,s=sh(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||qy,s[a])}function bA(t,e,n){let i=this.cache,r=e.length,s=sh(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Ky,s[a])}function wA(t,e,n){let i=this.cache,r=e.length,s=sh(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Xy,s[a])}function EA(t){switch(t){case 5126:return aA;case 35664:return oA;case 35665:return lA;case 35666:return cA;case 35674:return uA;case 35675:return dA;case 35676:return hA;case 5124:case 35670:return fA;case 35667:case 35671:return pA;case 35668:case 35672:return mA;case 35669:case 35673:return gA;case 5125:return xA;case 36294:return vA;case 36295:return _A;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return bA;case 36289:case 36303:case 36311:case 36292:return wA}}var tg=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sA(n.type)}},ng=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=EA(n.type)}},ig=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,n[o.id],i)}}},Jm=/(\w+)(\])?(\[|\.)?/g;function Py(t,e){t.seq.push(e),t.map[e.id]=e}function TA(t,e,n){let i=t.name,r=i.length;for(Jm.lastIndex=0;;){let s=Jm.exec(i),a=Jm.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Py(n,c===void 0?new tg(o,t,e):new ng(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new ig(o),Py(n,f)),n=f}}}var qa=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);TA(o,l,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){let o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in n&&i.push(a)}return i}};function Iy(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var AA=37297,CA=0;function RA(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Ny=new qe;function PA(t){et._getMatrix(Ny,et.workingColorSpace,t);let e=`mat3( ${Ny.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case Zo:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ly(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+RA(t.getShaderSource(e),o)}else return s}function IA(t,e){let n=PA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var NA={[Am]:"Linear",[Cm]:"Reinhard",[Rm]:"Cineon",[Pm]:"ACESFilmic",[Nm]:"AgX",[Lm]:"Neutral",[Im]:"Custom"};function LA(t,e){let n=NA[e];return n===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var eh=new O;function DA(){et.getLuminanceCoefficients(eh);let t=eh.x.toFixed(4),e=eh.y.toFixed(4),n=eh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Al).join(`
`)}function UA(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function kA(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),a=s.name,o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Al(t){return t!==""}function Dy(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fy(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var OA=/^[ \t]*#include +<([\w\d./]+)>/gm;function rg(t){return t.replace(OA,zA)}var BA=new Map;function zA(t,e){let n=Ze[e];if(n===void 0){let i=BA.get(e);if(i!==void 0)n=Ze[i],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rg(n)}var VA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uy(t){return t.replace(VA,GA)}function GA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ky(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var HA={[ml]:"SHADOWMAP_TYPE_PCF",[Ga]:"SHADOWMAP_TYPE_VSM"};function WA(t){return HA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var XA={[ns]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[gl]:"ENVMAP_TYPE_CUBE_UV"};function qA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":XA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var KA={[Ns]:"ENVMAP_MODE_REFRACTION"};function $A(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":KA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var YA={[Tm]:"ENVMAP_BLENDING_MULTIPLY",[ny]:"ENVMAP_BLENDING_MIX",[iy]:"ENVMAP_BLENDING_ADD"};function jA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":YA[t.combine]||"ENVMAP_BLENDING_NONE"}function ZA(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function JA(t,e,n,i){let r=t.getContext(),s=n.defines,a=n.vertexShader,o=n.fragmentShader,l=WA(n),c=qA(n),h=$A(n),f=jA(n),d=ZA(n),m=FA(n),y=UA(s),b=r.createProgram(),g,u,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Al).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Al).join(`
`),u.length>0&&(u+=`
`)):(g=[ky(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Al).join(`
`),u=[ky(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ei?"#define TONE_MAPPING":"",n.toneMapping!==Ei?Ze.tonemapping_pars_fragment:"",n.toneMapping!==Ei?LA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,IA("linearToOutputTexel",n.outputColorSpace),DA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Al).join(`
`)),a=rg(a),a=Dy(a,n),a=Fy(a,n),o=rg(o),o=Dy(o,n),o=Fy(o,n),a=Uy(a),o=Uy(o),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===Gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let _=p+g+a,M=p+u+o,T=Iy(r,r.VERTEX_SHADER,_),E=Iy(r,r.FRAGMENT_SHADER,M);r.attachShader(b,T),r.attachShader(b,E),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function R(I){if(t.debug.checkShaderErrors){let U=r.getProgramInfoLog(b)||"",W=r.getShaderInfoLog(T)||"",X=r.getShaderInfoLog(E)||"",F=U.trim(),V=W.trim(),G=X.trim(),Z=!0,te=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,b,T,E);else{let ae=Ly(r,T,"vertex"),xe=Ly(r,E,"fragment");Oe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+ae+`
`+xe)}else F!==""?Ue("WebGLProgram: Program Info Log:",F):(V===""||G==="")&&(te=!1);te&&(I.diagnostics={runnable:Z,programLog:F,vertexShader:{log:V,prefix:g},fragmentShader:{log:G,prefix:u}})}r.deleteShader(T),r.deleteShader(E),x=new qa(r,b),C=kA(r,b)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(b,AA)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=CA++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=E,this}var QA=0,sg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new ag(e),n.set(e,i)),i}},ag=class{constructor(e){this.id=QA++,this.code=e,this.usedTimes=0}};function eC(t){return t===ss||t===Ml||t===bl}function tC(t,e,n,i,r,s){let a=new el,o=new sg,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return l.add(x),x===0?"uv":`uv${x}`}function b(x,C,P,I,U,W){let X=I.fog,F=U.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||V,G),te=Z&&Z.mapping===gl?Z.image.height:null,ae=m[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Ue("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let xe=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ve=xe!==void 0?xe.length:0,Be=0;F.morphAttributes.position!==void 0&&(Be=1),F.morphAttributes.normal!==void 0&&(Be=2),F.morphAttributes.color!==void 0&&(Be=3);let ze,De,K,ce;if(ae){let He=qi[ae];ze=He.vertexShader,De=He.fragmentShader}else ze=x.vertexShader,De=x.fragmentShader,o.update(x),K=o.getVertexShaderID(x),ce=o.getFragmentShaderID(x);let ie=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),Ie=U.isInstancedMesh===!0,Ne=U.isBatchedMesh===!0,xt=!!x.map,je=!!x.matcap,ct=!!Z,Le=!!x.aoMap,Re=!!x.lightMap,ut=!!x.bumpMap,st=!!x.normalMap,Et=!!x.displacementMap,L=!!x.emissiveMap,Ct=!!x.metalnessMap,Ve=!!x.roughnessMap,ht=x.anisotropy>0,de=x.clearcoat>0,Tt=x.dispersion>0,A=x.iridescence>0,S=x.sheen>0,k=x.transmission>0,Y=ht&&!!x.anisotropyMap,ee=de&&!!x.clearcoatMap,re=de&&!!x.clearcoatNormalMap,oe=de&&!!x.clearcoatRoughnessMap,q=A&&!!x.iridescenceMap,j=A&&!!x.iridescenceThicknessMap,he=S&&!!x.sheenColorMap,Se=S&&!!x.sheenRoughnessMap,le=!!x.specularMap,J=!!x.specularColorMap,ke=!!x.specularIntensityMap,Ge=k&&!!x.transmissionMap,it=k&&!!x.thicknessMap,N=!!x.gradientMap,se=!!x.alphaMap,$=x.alphaTest>0,_e=!!x.alphaHash,ue=!!x.extensions,Q=Ei;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Q=t.toneMapping);let Ee={shaderID:ae,shaderType:x.type,shaderName:x.name,vertexShader:ze,fragmentShader:De,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ne,batchingColor:Ne&&U._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&U.instanceColor!==null,instancingMorph:Ie&&U.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:xt,matcap:je,envMap:ct,envMapMode:ct&&Z.mapping,envMapCubeUVHeight:te,aoMap:Le,lightMap:Re,bumpMap:ut,normalMap:st,displacementMap:Et,emissiveMap:L,normalMapObjectSpace:st&&x.normalMapType===ay,normalMapTangentSpace:st&&x.normalMapType===jd,packedNormalMap:st&&x.normalMapType===jd&&eC(x.normalMap.format),metalnessMap:Ct,roughnessMap:Ve,anisotropy:ht,anisotropyMap:Y,clearcoat:de,clearcoatMap:ee,clearcoatNormalMap:re,clearcoatRoughnessMap:oe,dispersion:Tt,iridescence:A,iridescenceMap:q,iridescenceThicknessMap:j,sheen:S,sheenColorMap:he,sheenRoughnessMap:Se,specularMap:le,specularColorMap:J,specularIntensityMap:ke,transmission:k,transmissionMap:Ge,thicknessMap:it,gradientMap:N,opaque:x.transparent===!1&&x.blending===Ps&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:$,alphaHash:_e,combine:x.combine,mapUv:xt&&y(x.map.channel),aoMapUv:Le&&y(x.aoMap.channel),lightMapUv:Re&&y(x.lightMap.channel),bumpMapUv:ut&&y(x.bumpMap.channel),normalMapUv:st&&y(x.normalMap.channel),displacementMapUv:Et&&y(x.displacementMap.channel),emissiveMapUv:L&&y(x.emissiveMap.channel),metalnessMapUv:Ct&&y(x.metalnessMap.channel),roughnessMapUv:Ve&&y(x.roughnessMap.channel),anisotropyMapUv:Y&&y(x.anisotropyMap.channel),clearcoatMapUv:ee&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:j&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&y(x.sheenRoughnessMap.channel),specularMapUv:le&&y(x.specularMap.channel),specularColorMapUv:J&&y(x.specularColorMap.channel),specularIntensityMapUv:ke&&y(x.specularIntensityMap.channel),transmissionMapUv:Ge&&y(x.transmissionMap.channel),thicknessMapUv:it&&y(x.thicknessMap.channel),alphaMapUv:se&&y(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(st||ht),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(xt||se),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&st===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ce,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Be,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Q,decodeVideoTexture:xt&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===mt,decodeVideoTextureEmissive:L&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gi,flipSided:x.side===_n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ue&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&x.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function g(x){let C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)C.push(P),C.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(u(C,x),p(C,x),C.push(t.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function u(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function p(x,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function _(x){let C=m[x.type],P;if(C){let I=qi[C];P=vy.clone(I.uniforms)}else P=x.uniforms;return P}function M(x,C){let P=h.get(C);return P!==void 0?++P.usedTimes:(P=new JA(t,C,x,r),c.push(P),h.set(C,P)),P}function T(x){if(--x.usedTimes===0){let C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function R(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:_,acquireProgram:M,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:R}}function nC(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function iC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Oy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function By(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,y,b,g,u){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:m,material:y,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:g,group:u},t[e]=p):(p.id=d.id,p.object=d,p.geometry=m,p.material=y,p.materialVariant=a(d),p.groupOrder=b,p.renderOrder=d.renderOrder,p.z=g,p.group=u),e++,p}function l(d,m,y,b,g,u){let p=o(d,m,y,b,g,u);y.transmission>0?i.push(p):y.transparent===!0?r.push(p):n.push(p)}function c(d,m,y,b,g,u){let p=o(d,m,y,b,g,u);y.transmission>0?i.unshift(p):y.transparent===!0?r.unshift(p):n.unshift(p)}function h(d,m){n.length>1&&n.sort(d||iC),i.length>1&&i.sort(m||Oy),r.length>1&&r.sort(m||Oy)}function f(){for(let d=e,m=t.length;d<m;d++){let y=t[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function rC(){let t=new WeakMap;function e(i,r){let s=t.get(i),a;return s===void 0?(a=new By,t.set(i,[a])):r>=s.length?(a=new By,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function sC(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new rt};break;case"SpotLight":n={position:new O,direction:new O,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function aC(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var oC=0;function lC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function cC(t){let e=new sC,n=aC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let r=new O,s=new Ft,a=new Ft;function o(c){let h=0,f=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,y=0,b=0,g=0,u=0,p=0,_=0,M=0,T=0,E=0,R=0;c.sort(lC);for(let C=0,P=c.length;C<P;C++){let I=c[C],U=I.color,W=I.intensity,X=I.distance,F=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ss?F=I.shadow.map.texture:F=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=U.r*W,f+=U.g*W,d+=U.b*W;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],W);R++}else if(I.isDirectionalLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let G=I.shadow,Z=n.get(I);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=F,i.directionalShadowMatrix[m]=I.shadow.matrix,p++}i.directional[m]=V,m++}else if(I.isSpotLight){let V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(U).multiplyScalar(W),V.distance=X,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[b]=V;let G=I.shadow;if(I.map&&(i.spotLightMap[T]=I.map,T++,G.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[b]=G.matrix,I.castShadow){let Z=n.get(I);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.spotShadow[b]=Z,i.spotShadowMap[b]=F,M++}b++}else if(I.isRectAreaLight){let V=e.get(I);V.color.copy(U).multiplyScalar(W),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=V,g++}else if(I.isPointLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let G=I.shadow,Z=n.get(I);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,i.pointShadow[y]=Z,i.pointShadowMap[y]=F,i.pointShadowMatrix[y]=I.shadow.matrix,_++}i.point[y]=V,y++}else if(I.isHemisphereLight){let V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(W),V.groundColor.copy(I.groundColor).multiplyScalar(W),i.hemi[u]=V,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let x=i.hash;(x.directionalLength!==m||x.pointLength!==y||x.spotLength!==b||x.rectAreaLength!==g||x.hemiLength!==u||x.numDirectionalShadows!==p||x.numPointShadows!==_||x.numSpotShadows!==M||x.numSpotMaps!==T||x.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=b,i.rectArea.length=g,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,x.directionalLength=m,x.pointLength=y,x.spotLength=b,x.rectAreaLength=g,x.hemiLength=u,x.numDirectionalShadows=p,x.numPointShadows=_,x.numSpotShadows=M,x.numSpotMaps=T,x.numLightProbes=R,i.version=oC++)}function l(c,h){let f=0,d=0,m=0,y=0,b=0,g=h.matrixWorldInverse;for(let u=0,p=c.length;u<p;u++){let _=c[u];if(_.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(_.isSpotLight){let M=i.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),m++}else if(_.isRectAreaLight){let M=i.rectArea[y];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(_.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let M=i.hemi[b];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),b++}}}return{setup:o,setupView:l,state:i}}function zy(t){let e=new cC(t),n=[],i=[],r=[];function s(d){f.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function h(d){e.setupView(n,d)}let f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function uC(t){let e=new WeakMap;function n(r,s=0){let a=e.get(r),o;return a===void 0?(o=new zy(t),e.set(r,[o])):s>=a.length?(o=new zy(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var dC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hC=`uniform sampler2D shadow_pass;
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
}`,fC=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],pC=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Vy=new Ft,Tl=new O,Qm=new O;function mC(t,e,n){let i=new Oa,r=new dt,s=new dt,a=new Lt,o=new Zu,l=new Ju,c={},h=n.maxTextureSize,f={[pr]:_n,[_n]:pr,[Gi]:Gi},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:dC,fragmentShader:hC}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let y=new oi;y.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new vn(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let u=this.type;this.render=function(E,R,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===k_&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ml);let C=t.getRenderTarget(),P=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Hi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let W=u!==this.type;W&&R.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(F=>F.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,F=E.length;X<F;X++){let V=E[X],G=V.shadow;if(G===void 0){Ue("WebGLShadowMap:",V,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let Z=G.getFrameExtents();r.multiply(Z),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Z.x),r.x=s.x*Z.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Z.y),r.y=s.y*Z.y,G.mapSize.y=s.y));let te=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=te,G.map===null||W===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ga){if(V.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new qn(r.x,r.y,{format:ss,type:Wi,minFilter:nn,magFilter:nn,generateMipmaps:!1}),G.map.texture.name=V.name+".shadowMap",G.map.depthTexture=new gr(r.x,r.y,Ai),G.map.depthTexture.name=V.name+".shadowMapDepth",G.map.depthTexture.format=Bi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=jt,G.map.depthTexture.magFilter=jt}else V.isPointLight?(G.map=new nh(r.x),G.map.depthTexture=new Yu(r.x,Ti)):(G.map=new qn(r.x,r.y),G.map.depthTexture=new gr(r.x,r.y,Ti)),G.map.depthTexture.name=V.name+".shadowMap",G.map.depthTexture.format=Bi,this.type===ml?(G.map.depthTexture.compareFunction=te?Jd:Zd,G.map.depthTexture.minFilter=nn,G.map.depthTexture.magFilter=nn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=jt,G.map.depthTexture.magFilter=jt);G.camera.updateProjectionMatrix()}let ae=G.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<ae;xe++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,xe),t.clear();else{xe===0&&(t.setRenderTarget(G.map),t.clear());let ve=G.getViewport(xe);a.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),U.viewport(a)}if(V.isPointLight){let ve=G.camera,Be=G.matrix,ze=V.distance||ve.far;ze!==ve.far&&(ve.far=ze,ve.updateProjectionMatrix()),Tl.setFromMatrixPosition(V.matrixWorld),ve.position.copy(Tl),Qm.copy(ve.position),Qm.add(fC[xe]),ve.up.copy(pC[xe]),ve.lookAt(Qm),ve.updateMatrixWorld(),Be.makeTranslation(-Tl.x,-Tl.y,-Tl.z),Vy.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Vy,ve.coordinateSystem,ve.reversedDepth)}else G.updateMatrices(V);i=G.getFrustum(),M(R,x,G.camera,V,this.type)}G.isPointLightShadow!==!0&&this.type===Ga&&p(G,x),G.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(C,P,I)};function p(E,R){let x=e.update(b);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new qn(r.x,r.y,{format:ss,type:Wi})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(R,null,x,d,b,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(R,null,x,m,b,null)}function _(E,R,x,C){let P=null,I=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)P=I;else if(P=x.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let U=P.uuid,W=R.uuid,X=c[U];X===void 0&&(X={},c[U]=X);let F=X[W];F===void 0&&(F=P.clone(),X[W]=F,R.addEventListener("dispose",T)),P=F}if(P.visible=R.visible,P.wireframe=R.wireframe,C===Ga?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:f[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=t.properties.get(P);U.light=x}return P}function M(E,R,x,C,P){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Ga)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let W=e.update(E),X=E.material;if(Array.isArray(X)){let F=W.groups;for(let V=0,G=F.length;V<G;V++){let Z=F[V],te=X[Z.materialIndex];if(te&&te.visible){let ae=_(E,te,C,P);E.onBeforeShadow(t,E,R,x,W,ae,Z),t.renderBufferDirect(x,null,W,ae,E,Z),E.onAfterShadow(t,E,R,x,W,ae,Z)}}}else if(X.visible){let F=_(E,X,C,P);E.onBeforeShadow(t,E,R,x,W,F,null),t.renderBufferDirect(x,null,W,F,E,null),E.onAfterShadow(t,E,R,x,W,F,null)}}let U=E.children;for(let W=0,X=U.length;W<X;W++)M(U[W],R,x,C,P)}function T(E){E.target.removeEventListener("dispose",T);for(let x in c){let C=c[x],P=E.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function gC(t,e){function n(){let N=!1,se=new Lt,$=null,_e=new Lt(0,0,0,0);return{setMask:function(ue){$!==ue&&!N&&(t.colorMask(ue,ue,ue,ue),$=ue)},setLocked:function(ue){N=ue},setClear:function(ue,Q,Ee,He,Rt){Rt===!0&&(ue*=He,Q*=He,Ee*=He),se.set(ue,Q,Ee,He),_e.equals(se)===!1&&(t.clearColor(ue,Q,Ee,He),_e.copy(se))},reset:function(){N=!1,$=null,_e.set(-1,0,0,0)}}}function i(){let N=!1,se=!1,$=null,_e=null,ue=null;return{setReversed:function(Q){if(se!==Q){let Ee=e.get("EXT_clip_control");Q?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),se=Q;let He=ue;ue=null,this.setClear(He)}},getReversed:function(){return se},setTest:function(Q){Q?ie(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(Q){$!==Q&&!N&&(t.depthMask(Q),$=Q)},setFunc:function(Q){if(se&&(Q=gy[Q]),_e!==Q){switch(Q){case Nu:t.depthFunc(t.NEVER);break;case Lu:t.depthFunc(t.ALWAYS);break;case Du:t.depthFunc(t.LESS);break;case Is:t.depthFunc(t.LEQUAL);break;case Fu:t.depthFunc(t.EQUAL);break;case Uu:t.depthFunc(t.GEQUAL);break;case ku:t.depthFunc(t.GREATER);break;case Ou:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=Q}},setLocked:function(Q){N=Q},setClear:function(Q){ue!==Q&&(ue=Q,se&&(Q=1-Q),t.clearDepth(Q))},reset:function(){N=!1,$=null,_e=null,ue=null,se=!1}}}function r(){let N=!1,se=null,$=null,_e=null,ue=null,Q=null,Ee=null,He=null,Rt=null;return{setTest:function(ft){N||(ft?ie(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(ft){se!==ft&&!N&&(t.stencilMask(ft),se=ft)},setFunc:function(ft,di,Mn){($!==ft||_e!==di||ue!==Mn)&&(t.stencilFunc(ft,di,Mn),$=ft,_e=di,ue=Mn)},setOp:function(ft,di,Mn){(Q!==ft||Ee!==di||He!==Mn)&&(t.stencilOp(ft,di,Mn),Q=ft,Ee=di,He=Mn)},setLocked:function(ft){N=ft},setClear:function(ft){Rt!==ft&&(t.clearStencil(ft),Rt=ft)},reset:function(){N=!1,se=null,$=null,_e=null,ue=null,Q=null,Ee=null,He=null,Rt=null}}}let s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap,h={},f={},d={},m=new WeakMap,y=[],b=null,g=!1,u=null,p=null,_=null,M=null,T=null,E=null,R=null,x=new rt(0,0,0),C=0,P=!1,I=null,U=null,W=null,X=null,F=null,V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Z=0,te=t.getParameter(t.VERSION);te.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(te)[1]),G=Z>=1):te.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),G=Z>=2);let ae=null,xe={},ve=t.getParameter(t.SCISSOR_BOX),Be=t.getParameter(t.VIEWPORT),ze=new Lt().fromArray(ve),De=new Lt().fromArray(Be);function K(N,se,$,_e){let ue=new Uint8Array(4),Q=t.createTexture();t.bindTexture(N,Q),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<$;Ee++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(se+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return Q}let ce={};ce[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(t.DEPTH_TEST),a.setFunc(Is),ut(!1),st(Mm),ie(t.CULL_FACE),Le(Hi);function ie(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function Ce(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function Ie(N,se){return d[N]!==se?(t.bindFramebuffer(N,se),d[N]=se,N===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=se),N===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=se),!0):!1}function Ne(N,se){let $=y,_e=!1;if(N){$=m.get(se),$===void 0&&($=[],m.set(se,$));let ue=N.textures;if($.length!==ue.length||$[0]!==t.COLOR_ATTACHMENT0){for(let Q=0,Ee=ue.length;Q<Ee;Q++)$[Q]=t.COLOR_ATTACHMENT0+Q;$.length=ue.length,_e=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,_e=!0);_e&&t.drawBuffers($)}function xt(N){return b!==N?(t.useProgram(N),b=N,!0):!1}let je={[jr]:t.FUNC_ADD,[B_]:t.FUNC_SUBTRACT,[z_]:t.FUNC_REVERSE_SUBTRACT};je[V_]=t.MIN,je[G_]=t.MAX;let ct={[H_]:t.ZERO,[W_]:t.ONE,[X_]:t.SRC_COLOR,[Pu]:t.SRC_ALPHA,[Z_]:t.SRC_ALPHA_SATURATE,[Y_]:t.DST_COLOR,[K_]:t.DST_ALPHA,[q_]:t.ONE_MINUS_SRC_COLOR,[Iu]:t.ONE_MINUS_SRC_ALPHA,[j_]:t.ONE_MINUS_DST_COLOR,[$_]:t.ONE_MINUS_DST_ALPHA,[J_]:t.CONSTANT_COLOR,[Q_]:t.ONE_MINUS_CONSTANT_COLOR,[ey]:t.CONSTANT_ALPHA,[ty]:t.ONE_MINUS_CONSTANT_ALPHA};function Le(N,se,$,_e,ue,Q,Ee,He,Rt,ft){if(N===Hi){g===!0&&(Ce(t.BLEND),g=!1);return}if(g===!1&&(ie(t.BLEND),g=!0),N!==O_){if(N!==u||ft!==P){if((p!==jr||T!==jr)&&(t.blendEquation(t.FUNC_ADD),p=jr,T=jr),ft)switch(N){case Ps:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bm:t.blendFunc(t.ONE,t.ONE);break;case wm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Em:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Oe("WebGLState: Invalid blending: ",N);break}else switch(N){case Ps:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case wm:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Em:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",N);break}_=null,M=null,E=null,R=null,x.set(0,0,0),C=0,u=N,P=ft}return}ue=ue||se,Q=Q||$,Ee=Ee||_e,(se!==p||ue!==T)&&(t.blendEquationSeparate(je[se],je[ue]),p=se,T=ue),($!==_||_e!==M||Q!==E||Ee!==R)&&(t.blendFuncSeparate(ct[$],ct[_e],ct[Q],ct[Ee]),_=$,M=_e,E=Q,R=Ee),(He.equals(x)===!1||Rt!==C)&&(t.blendColor(He.r,He.g,He.b,Rt),x.copy(He),C=Rt),u=N,P=!1}function Re(N,se){N.side===Gi?Ce(t.CULL_FACE):ie(t.CULL_FACE);let $=N.side===_n;se&&($=!$),ut($),N.blending===Ps&&N.transparent===!1?Le(Hi):Le(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);let _e=N.stencilWrite;o.setTest(_e),_e&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),L(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function ut(N){I!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),I=N)}function st(N){N!==F_?(ie(t.CULL_FACE),N!==U&&(N===Mm?t.cullFace(t.BACK):N===U_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),U=N}function Et(N){N!==W&&(G&&t.lineWidth(N),W=N)}function L(N,se,$){N?(ie(t.POLYGON_OFFSET_FILL),(X!==se||F!==$)&&(X=se,F=$,a.getReversed()&&(se=-se),t.polygonOffset(se,$))):Ce(t.POLYGON_OFFSET_FILL)}function Ct(N){N?ie(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function Ve(N){N===void 0&&(N=t.TEXTURE0+V-1),ae!==N&&(t.activeTexture(N),ae=N)}function ht(N,se,$){$===void 0&&(ae===null?$=t.TEXTURE0+V-1:$=ae);let _e=xe[$];_e===void 0&&(_e={type:void 0,texture:void 0},xe[$]=_e),(_e.type!==N||_e.texture!==se)&&(ae!==$&&(t.activeTexture($),ae=$),t.bindTexture(N,se||ce[N]),_e.type=N,_e.texture=se)}function de(){let N=xe[ae];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Tt(){try{t.compressedTexImage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function S(){try{t.texSubImage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function k(){try{t.texSubImage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function Y(){try{t.compressedTexSubImage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function ee(){try{t.compressedTexSubImage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function re(){try{t.texStorage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function oe(){try{t.texStorage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function q(){try{t.texImage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function j(){try{t.texImage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function he(N){return f[N]!==void 0?f[N]:t.getParameter(N)}function Se(N,se){f[N]!==se&&(t.pixelStorei(N,se),f[N]=se)}function le(N){ze.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),ze.copy(N))}function J(N){De.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),De.copy(N))}function ke(N,se){let $=c.get(se);$===void 0&&($=new WeakMap,c.set(se,$));let _e=$.get(N);_e===void 0&&(_e=t.getUniformBlockIndex(se,N.name),$.set(N,_e))}function Ge(N,se){let _e=c.get(se).get(N);l.get(se)!==_e&&(t.uniformBlockBinding(se,_e,N.__bindingPointIndex),l.set(se,_e))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},f={},ae=null,xe={},d={},m=new WeakMap,y=[],b=null,g=!1,u=null,p=null,_=null,M=null,T=null,E=null,R=null,x=new rt(0,0,0),C=0,P=!1,I=null,U=null,W=null,X=null,F=null,ze.set(0,0,t.canvas.width,t.canvas.height),De.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:Ce,bindFramebuffer:Ie,drawBuffers:Ne,useProgram:xt,setBlending:Le,setMaterial:Re,setFlipSided:ut,setCullFace:st,setLineWidth:Et,setPolygonOffset:L,setScissorTest:Ct,activeTexture:Ve,bindTexture:ht,unbindTexture:de,compressedTexImage2D:Tt,compressedTexImage3D:A,texImage2D:q,texImage3D:j,pixelStorei:Se,getParameter:he,updateUBOMapping:ke,uniformBlockBinding:Ge,texStorage2D:re,texStorage3D:oe,texSubImage2D:S,texSubImage3D:k,compressedTexSubImage2D:Y,compressedTexSubImage3D:ee,scissor:le,viewport:J,reset:it}}function xC(t,e,n,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap,f=new Set,d,m=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,S){return y?new OffscreenCanvas(A,S):Jo("canvas")}function g(A,S,k){let Y=1,ee=Tt(A);if((ee.width>k||ee.height>k)&&(Y=k/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let re=Math.floor(Y*ee.width),oe=Math.floor(Y*ee.height);d===void 0&&(d=b(re,oe));let q=S?b(re,oe):d;return q.width=re,q.height=oe,q.getContext("2d").drawImage(A,0,0,re,oe),Ue("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+re+"x"+oe+")."),q}else return"data"in A&&Ue("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function u(A){return A.generateMipmaps}function p(A){t.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(A,S,k,Y,ee,re=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe;Y&&(oe=e.get("EXT_texture_norm16"),oe||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=S;if(S===t.RED&&(k===t.FLOAT&&(q=t.R32F),k===t.HALF_FLOAT&&(q=t.R16F),k===t.UNSIGNED_BYTE&&(q=t.R8),k===t.UNSIGNED_SHORT&&oe&&(q=oe.R16_EXT),k===t.SHORT&&oe&&(q=oe.R16_SNORM_EXT)),S===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(q=t.R8UI),k===t.UNSIGNED_SHORT&&(q=t.R16UI),k===t.UNSIGNED_INT&&(q=t.R32UI),k===t.BYTE&&(q=t.R8I),k===t.SHORT&&(q=t.R16I),k===t.INT&&(q=t.R32I)),S===t.RG&&(k===t.FLOAT&&(q=t.RG32F),k===t.HALF_FLOAT&&(q=t.RG16F),k===t.UNSIGNED_BYTE&&(q=t.RG8),k===t.UNSIGNED_SHORT&&oe&&(q=oe.RG16_EXT),k===t.SHORT&&oe&&(q=oe.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(q=t.RG8UI),k===t.UNSIGNED_SHORT&&(q=t.RG16UI),k===t.UNSIGNED_INT&&(q=t.RG32UI),k===t.BYTE&&(q=t.RG8I),k===t.SHORT&&(q=t.RG16I),k===t.INT&&(q=t.RG32I)),S===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(q=t.RGB8UI),k===t.UNSIGNED_SHORT&&(q=t.RGB16UI),k===t.UNSIGNED_INT&&(q=t.RGB32UI),k===t.BYTE&&(q=t.RGB8I),k===t.SHORT&&(q=t.RGB16I),k===t.INT&&(q=t.RGB32I)),S===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),k===t.UNSIGNED_INT&&(q=t.RGBA32UI),k===t.BYTE&&(q=t.RGBA8I),k===t.SHORT&&(q=t.RGBA16I),k===t.INT&&(q=t.RGBA32I)),S===t.RGB&&(k===t.UNSIGNED_SHORT&&oe&&(q=oe.RGB16_EXT),k===t.SHORT&&oe&&(q=oe.RGB16_SNORM_EXT),k===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),S===t.RGBA){let j=re?Zo:et.getTransfer(ee);k===t.FLOAT&&(q=t.RGBA32F),k===t.HALF_FLOAT&&(q=t.RGBA16F),k===t.UNSIGNED_BYTE&&(q=j===mt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT&&oe&&(q=oe.RGBA16_EXT),k===t.SHORT&&oe&&(q=oe.RGBA16_SNORM_EXT),k===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function T(A,S){let k;return A?S===null||S===Ti||S===Wa?k=t.DEPTH24_STENCIL8:S===Ai?k=t.DEPTH32F_STENCIL8:S===Ha&&(k=t.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ti||S===Wa?k=t.DEPTH_COMPONENT24:S===Ai?k=t.DEPTH_COMPONENT32F:S===Ha&&(k=t.DEPTH_COMPONENT16),k}function E(A,S){return u(A)===!0||A.isFramebufferTexture&&A.minFilter!==jt&&A.minFilter!==nn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){let S=A.target;S.removeEventListener("dispose",R),C(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&f.delete(S)}function x(A){let S=A.target;S.removeEventListener("dispose",x),I(S)}function C(A){let S=i.get(A);if(S.__webglInit===void 0)return;let k=A.source,Y=m.get(k);if(Y){let ee=Y[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(A),Object.keys(Y).length===0&&m.delete(k)}i.remove(A)}function P(A){let S=i.get(A);t.deleteTexture(S.__webglTexture);let k=A.source,Y=m.get(k);delete Y[S.__cacheKey],a.memory.textures--}function I(A){let S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let ee=0;ee<S.__webglFramebuffer[Y].length;ee++)t.deleteFramebuffer(S.__webglFramebuffer[Y][ee]);else t.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)t.deleteFramebuffer(S.__webglFramebuffer[Y]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let k=A.textures;for(let Y=0,ee=k.length;Y<ee;Y++){let re=i.get(k[Y]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(k[Y])}i.remove(A)}let U=0;function W(){U=0}function X(){return U}function F(A){U=A}function V(){let A=U;return A>=r.maxTextures&&Ue("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),U+=1,A}function G(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Z(A,S){let k=i.get(A);if(A.isVideoTexture&&ht(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let Y=A.image;if(Y===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(k,A,S);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+S)}function te(A,S){let k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Ce(k,A,S);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+S)}function ae(A,S){let k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Ce(k,A,S);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+S)}function xe(A,S){let k=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){Ie(k,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+S)}let ve={[Bu]:t.REPEAT,[Oi]:t.CLAMP_TO_EDGE,[zu]:t.MIRRORED_REPEAT},Be={[jt]:t.NEAREST,[ry]:t.NEAREST_MIPMAP_NEAREST,[xl]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[fd]:t.LINEAR_MIPMAP_NEAREST,[is]:t.LINEAR_MIPMAP_LINEAR},ze={[oy]:t.NEVER,[hy]:t.ALWAYS,[ly]:t.LESS,[Zd]:t.LEQUAL,[cy]:t.EQUAL,[Jd]:t.GEQUAL,[uy]:t.GREATER,[dy]:t.NOTEQUAL};function De(A,S){if(S.type===Ai&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===nn||S.magFilter===fd||S.magFilter===xl||S.magFilter===is||S.minFilter===nn||S.minFilter===fd||S.minFilter===xl||S.minFilter===is)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,ve[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ve[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ve[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Be[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Be[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,ze[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===jt||S.minFilter!==xl&&S.minFilter!==is||S.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function K(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));let Y=S.source,ee=m.get(Y);ee===void 0&&(ee={},m.set(Y,ee));let re=G(S);if(re!==A.__cacheKey){ee[re]===void 0&&(ee[re]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ee[re].usedTimes++;let oe=ee[A.__cacheKey];oe!==void 0&&(ee[A.__cacheKey].usedTimes--,oe.usedTimes===0&&P(S)),A.__cacheKey=re,A.__webglTexture=ee[re].texture}return k}function ce(A,S,k){return Math.floor(Math.floor(A/k)/S)}function ie(A,S,k,Y){let re=A.updateRanges;if(re.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,k,Y,S.data);else{re.sort((Se,le)=>Se.start-le.start);let oe=0;for(let Se=1;Se<re.length;Se++){let le=re[oe],J=re[Se],ke=le.start+le.count,Ge=ce(J.start,S.width,4),it=ce(le.start,S.width,4);J.start<=ke+1&&Ge===it&&ce(J.start+J.count-1,S.width,4)===Ge?le.count=Math.max(le.count,J.start+J.count-le.start):(++oe,re[oe]=J)}re.length=oe+1;let q=n.getParameter(t.UNPACK_ROW_LENGTH),j=n.getParameter(t.UNPACK_SKIP_PIXELS),he=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Se=0,le=re.length;Se<le;Se++){let J=re[Se],ke=Math.floor(J.start/4),Ge=Math.ceil(J.count/4),it=ke%S.width,N=Math.floor(ke/S.width),se=Ge,$=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,it),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,it,N,se,$,k,Y,S.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,j),n.pixelStorei(t.UNPACK_SKIP_ROWS,he)}}function Ce(A,S,k){let Y=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=t.TEXTURE_3D);let ee=K(A,S),re=S.source;n.bindTexture(Y,A.__webglTexture,t.TEXTURE0+k);let oe=i.get(re);if(re.version!==oe.__version||ee===!0){if(n.activeTexture(t.TEXTURE0+k),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let $=et.getPrimaries(et.workingColorSpace),_e=S.colorSpace===xr?null:et.getPrimaries(S.colorSpace),ue=S.colorSpace===xr||$===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let j=g(S.image,!1,r.maxTextureSize);j=de(S,j);let he=s.convert(S.format,S.colorSpace),Se=s.convert(S.type),le=M(S.internalFormat,he,Se,S.normalized,S.colorSpace,S.isVideoTexture);De(Y,S);let J,ke=S.mipmaps,Ge=S.isVideoTexture!==!0,it=oe.__version===void 0||ee===!0,N=re.dataReady,se=E(S,j);if(S.isDepthTexture)le=T(S.format===rs,S.type),it&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,le,j.width,j.height):n.texImage2D(t.TEXTURE_2D,0,le,j.width,j.height,0,he,Se,null));else if(S.isDataTexture)if(ke.length>0){Ge&&it&&n.texStorage2D(t.TEXTURE_2D,se,le,ke[0].width,ke[0].height);for(let $=0,_e=ke.length;$<_e;$++)J=ke[$],Ge?N&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,J.width,J.height,he,Se,J.data):n.texImage2D(t.TEXTURE_2D,$,le,J.width,J.height,0,he,Se,J.data);S.generateMipmaps=!1}else Ge?(it&&n.texStorage2D(t.TEXTURE_2D,se,le,j.width,j.height),N&&ie(S,j,he,Se)):n.texImage2D(t.TEXTURE_2D,0,le,j.width,j.height,0,he,Se,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ge&&it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,le,ke[0].width,ke[0].height,j.depth);for(let $=0,_e=ke.length;$<_e;$++)if(J=ke[$],S.format!==li)if(he!==null)if(Ge){if(N)if(S.layerUpdates.size>0){let ue=Km(J.width,J.height,S.format,S.type);for(let Q of S.layerUpdates){let Ee=J.data.subarray(Q*ue/J.data.BYTES_PER_ELEMENT,(Q+1)*ue/J.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,Q,J.width,J.height,1,he,Ee)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,J.width,J.height,j.depth,he,J.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,le,J.width,J.height,j.depth,0,J.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,J.width,J.height,j.depth,he,Se,J.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,le,J.width,J.height,j.depth,0,he,Se,J.data)}else{Ge&&it&&n.texStorage2D(t.TEXTURE_2D,se,le,ke[0].width,ke[0].height);for(let $=0,_e=ke.length;$<_e;$++)J=ke[$],S.format!==li?he!==null?Ge?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,J.width,J.height,he,J.data):n.compressedTexImage2D(t.TEXTURE_2D,$,le,J.width,J.height,0,J.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?N&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,J.width,J.height,he,Se,J.data):n.texImage2D(t.TEXTURE_2D,$,le,J.width,J.height,0,he,Se,J.data)}else if(S.isDataArrayTexture)if(Ge){if(it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,le,j.width,j.height,j.depth),N)if(S.layerUpdates.size>0){let $=Km(j.width,j.height,S.format,S.type);for(let _e of S.layerUpdates){let ue=j.data.subarray(_e*$/j.data.BYTES_PER_ELEMENT,(_e+1)*$/j.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,_e,j.width,j.height,1,he,Se,ue)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,he,Se,j.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,le,j.width,j.height,j.depth,0,he,Se,j.data);else if(S.isData3DTexture)Ge?(it&&n.texStorage3D(t.TEXTURE_3D,se,le,j.width,j.height,j.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,he,Se,j.data)):n.texImage3D(t.TEXTURE_3D,0,le,j.width,j.height,j.depth,0,he,Se,j.data);else if(S.isFramebufferTexture){if(it)if(Ge)n.texStorage2D(t.TEXTURE_2D,se,le,j.width,j.height);else{let $=j.width,_e=j.height;for(let ue=0;ue<se;ue++)n.texImage2D(t.TEXTURE_2D,ue,le,$,_e,0,he,Se,null),$>>=1,_e>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){let $=t.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),j.parentNode!==$){$.appendChild(j),f.add(S),$.onpaint=He=>{let Rt=He.changedElements;for(let ft of f)Rt.includes(ft.image)&&(ft.needsUpdate=!0)},$.requestPaint();return}let _e=0,ue=t.RGBA,Q=t.RGBA,Ee=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,_e,ue,Q,Ee,j),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Ge&&it){let $=Tt(ke[0]);n.texStorage2D(t.TEXTURE_2D,se,le,$.width,$.height)}for(let $=0,_e=ke.length;$<_e;$++)J=ke[$],Ge?N&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,he,Se,J):n.texImage2D(t.TEXTURE_2D,$,le,he,Se,J);S.generateMipmaps=!1}else if(Ge){if(it){let $=Tt(j);n.texStorage2D(t.TEXTURE_2D,se,le,$.width,$.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Se,j)}else n.texImage2D(t.TEXTURE_2D,0,le,he,Se,j);u(S)&&p(Y),oe.__version=re.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ie(A,S,k){if(S.image.length!==6)return;let Y=K(A,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+k);let re=i.get(ee);if(ee.version!==re.__version||Y===!0){n.activeTexture(t.TEXTURE0+k);let oe=et.getPrimaries(et.workingColorSpace),q=S.colorSpace===xr?null:et.getPrimaries(S.colorSpace),j=S.colorSpace===xr||oe===q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let he=S.isCompressedTexture||S.image[0].isCompressedTexture,Se=S.image[0]&&S.image[0].isDataTexture,le=[];for(let Q=0;Q<6;Q++)!he&&!Se?le[Q]=g(S.image[Q],!0,r.maxCubemapSize):le[Q]=Se?S.image[Q].image:S.image[Q],le[Q]=de(S,le[Q]);let J=le[0],ke=s.convert(S.format,S.colorSpace),Ge=s.convert(S.type),it=M(S.internalFormat,ke,Ge,S.normalized,S.colorSpace),N=S.isVideoTexture!==!0,se=re.__version===void 0||Y===!0,$=ee.dataReady,_e=E(S,J);De(t.TEXTURE_CUBE_MAP,S);let ue;if(he){N&&se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,it,J.width,J.height);for(let Q=0;Q<6;Q++){ue=le[Q].mipmaps;for(let Ee=0;Ee<ue.length;Ee++){let He=ue[Ee];S.format!==li?ke!==null?N?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,0,0,He.width,He.height,ke,He.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,it,He.width,He.height,0,He.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,0,0,He.width,He.height,ke,Ge,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,it,He.width,He.height,0,ke,Ge,He.data)}}}else{if(ue=S.mipmaps,N&&se){ue.length>0&&_e++;let Q=Tt(le[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,it,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Se){N?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,le[Q].width,le[Q].height,ke,Ge,le[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,it,le[Q].width,le[Q].height,0,ke,Ge,le[Q].data);for(let Ee=0;Ee<ue.length;Ee++){let Rt=ue[Ee].image[Q].image;N?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,0,0,Rt.width,Rt.height,ke,Ge,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,it,Rt.width,Rt.height,0,ke,Ge,Rt.data)}}else{N?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ke,Ge,le[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,it,ke,Ge,le[Q]);for(let Ee=0;Ee<ue.length;Ee++){let He=ue[Ee];N?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,0,0,ke,Ge,He.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,it,ke,Ge,He.image[Q])}}}u(S)&&p(t.TEXTURE_CUBE_MAP),re.__version=ee.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ne(A,S,k,Y,ee,re){let oe=s.convert(k.format,k.colorSpace),q=s.convert(k.type),j=M(k.internalFormat,oe,q,k.normalized,k.colorSpace),he=i.get(S),Se=i.get(k);if(Se.__renderTarget=S,!he.__hasExternalTextures){let le=Math.max(1,S.width>>re),J=Math.max(1,S.height>>re);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,re,j,le,J,S.depth,0,oe,q,null):n.texImage2D(ee,re,j,le,J,0,oe,q,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ve(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,ee,Se.__webglTexture,0,Ct(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,ee,Se.__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function xt(A,S,k){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){let Y=S.depthTexture,ee=Y&&Y.isDepthTexture?Y.type:null,re=T(S.stencilBuffer,ee),oe=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ve(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ct(S),re,S.width,S.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ct(S),re,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,re,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,A)}else{let Y=S.textures;for(let ee=0;ee<Y.length;ee++){let re=Y[ee],oe=s.convert(re.format,re.colorSpace),q=s.convert(re.type),j=M(re.internalFormat,oe,q,re.normalized,re.colorSpace);Ve(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ct(S),j,S.width,S.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ct(S),j,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,j,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function je(A,S,k){let Y=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(S.depthTexture);if(ee.__renderTarget=S,(!ee.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),De(t.TEXTURE_CUBE_MAP,S.depthTexture);let he=s.convert(S.depthTexture.format),Se=s.convert(S.depthTexture.type),le;S.depthTexture.format===Bi?le=t.DEPTH_COMPONENT24:S.depthTexture.format===rs&&(le=t.DEPTH24_STENCIL8);for(let J=0;J<6;J++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,le,S.width,S.height,0,he,Se,null)}}else Z(S.depthTexture,0);let re=ee.__webglTexture,oe=Ct(S),q=Y?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,j=S.depthTexture.format===rs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Bi)Ve(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,q,re,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,j,q,re,0);else if(S.depthTexture.format===rs)Ve(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,q,re,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,j,q,re,0);else throw new Error("Unknown depthTexture format")}function ct(A){let S=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let Y=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){let ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",ee)};Y.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=Y}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let Y=0;Y<6;Y++)je(S.__webglFramebuffer[Y],A,Y);else{let Y=A.texture.mipmaps;Y&&Y.length>0?je(S.__webglFramebuffer[0],A,0):je(S.__webglFramebuffer,A,0)}else if(k){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=t.createRenderbuffer(),xt(S.__webglDepthbuffer[Y],A,!1);else{let ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,re)}}else{let Y=A.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),xt(S.__webglDepthbuffer,A,!1);else{let ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,re)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(A,S,k){let Y=i.get(A);S!==void 0&&Ne(Y.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&ct(A)}function Re(A){let S=A.texture,k=i.get(A),Y=i.get(S);A.addEventListener("dispose",x);let ee=A.textures,re=A.isWebGLCubeRenderTarget===!0,oe=ee.length>1;if(oe||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=S.version,a.memory.textures++),re){k.__webglFramebuffer=[];for(let q=0;q<6;q++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[q]=[];for(let j=0;j<S.mipmaps.length;j++)k.__webglFramebuffer[q][j]=t.createFramebuffer()}else k.__webglFramebuffer[q]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let q=0;q<S.mipmaps.length;q++)k.__webglFramebuffer[q]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(oe)for(let q=0,j=ee.length;q<j;q++){let he=i.get(ee[q]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&Ve(A)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let q=0;q<ee.length;q++){let j=ee[q];k.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[q]);let he=s.convert(j.format,j.colorSpace),Se=s.convert(j.type),le=M(j.internalFormat,he,Se,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),J=Ct(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,J,le,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,k.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),xt(k.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),De(t.TEXTURE_CUBE_MAP,S);for(let q=0;q<6;q++)if(S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)Ne(k.__webglFramebuffer[q][j],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,j);else Ne(k.__webglFramebuffer[q],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);u(S)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){for(let q=0,j=ee.length;q<j;q++){let he=ee[q],Se=i.get(he),le=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,Se.__webglTexture),De(le,he),Ne(k.__webglFramebuffer,A,he,t.COLOR_ATTACHMENT0+q,le,0),u(he)&&p(le)}n.unbindTexture()}else{let q=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(q=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(q,Y.__webglTexture),De(q,S),S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)Ne(k.__webglFramebuffer[j],A,S,t.COLOR_ATTACHMENT0,q,j);else Ne(k.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,q,0);u(S)&&p(q),n.unbindTexture()}A.depthBuffer&&ct(A)}function ut(A){let S=A.textures;for(let k=0,Y=S.length;k<Y;k++){let ee=S[k];if(u(ee)){let re=_(A),oe=i.get(ee).__webglTexture;n.bindTexture(re,oe),p(re),n.unbindTexture()}}}let st=[],Et=[];function L(A){if(A.samples>0){if(Ve(A)===!1){let S=A.textures,k=A.width,Y=A.height,ee=t.COLOR_BUFFER_BIT,re=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(A),q=S.length>1;if(q)for(let he=0;he<S.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let j=A.texture.mipmaps;j&&j.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let he=0;he<S.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[he]);let Se=i.get(S[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,k,Y,0,0,k,Y,ee,t.NEAREST),l===!0&&(st.length=0,Et.length=0,st.push(t.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.resolveDepthBuffer===!1&&(st.push(re),Et.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Et)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let he=0;he<S.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,oe.__webglColorRenderbuffer[he]);let Se=i.get(S[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Ct(A){return Math.min(r.maxSamples,A.samples)}function Ve(A){let S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ht(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function de(A,S){let k=A.colorSpace,Y=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==jo&&k!==xr&&(et.getTransfer(k)===mt?(Y!==li||ee!==In)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",k)),S}function Tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.getTextureUnits=X,this.setTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=te,this.setTexture3D=ae,this.setTextureCube=xe,this.rebindTextures=Le,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function vC(t,e){function n(i,r=xr){let s,a=et.getTransfer(r);if(i===In)return t.UNSIGNED_BYTE;if(i===md)return t.UNSIGNED_SHORT_4_4_4_4;if(i===gd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===km)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Om)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fm)return t.BYTE;if(i===Um)return t.SHORT;if(i===Ha)return t.UNSIGNED_SHORT;if(i===pd)return t.INT;if(i===Ti)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===Wi)return t.HALF_FLOAT;if(i===Bm)return t.ALPHA;if(i===zm)return t.RGB;if(i===li)return t.RGBA;if(i===Bi)return t.DEPTH_COMPONENT;if(i===rs)return t.DEPTH_STENCIL;if(i===Vm)return t.RED;if(i===xd)return t.RED_INTEGER;if(i===ss)return t.RG;if(i===vd)return t.RG_INTEGER;if(i===_d)return t.RGBA_INTEGER;if(i===vl||i===_l||i===yl||i===Sl)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_l)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yd||i===Sd||i===Md||i===bd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Md)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wd||i===Ed||i===Td||i===Ad||i===Cd||i===Ml||i===Rd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wd||i===Ed)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Td)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ad)return s.COMPRESSED_R11_EAC;if(i===Cd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ml)return s.COMPRESSED_RG11_EAC;if(i===Rd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Pd||i===Id||i===Nd||i===Ld||i===Dd||i===Fd||i===Ud||i===kd||i===Od||i===Bd||i===zd||i===Vd||i===Gd||i===Hd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Pd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Id)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ld)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ud)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Od)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wd||i===Xd||i===qd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Wd)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kd||i===$d||i===bl||i===Yd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Kd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===$d)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var _C=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yC=`
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

}`,og=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new al(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new $n({vertexShader:_C,fragmentShader:yC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vn(new ll(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lg=class extends zi{constructor(e,n){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,y=null,b=typeof XRWebGLBinding<"u",g=new og,u={},p=n.getContextAttributes(),_=null,M=null,T=[],E=[],R=new dt,x=null,C=new tn;C.viewport=new Lt;let P=new tn;P.viewport=new Lt;let I=[C,P],U=new ud,W=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=T[K];return ce===void 0&&(ce=new Ua,T[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=T[K];return ce===void 0&&(ce=new Ua,T[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=T[K];return ce===void 0&&(ce=new Ua,T[K]=ce),ce.getHandSpace()};function F(K){let ce=E.indexOf(K.inputSource);if(ce===-1)return;let ie=T[ce];ie!==void 0&&(ie.update(K.inputSource,K.frame,c||a),ie.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",G);for(let K=0;K<T.length;K++){let ce=E[K];ce!==null&&(E[K]=null,T[K].disconnect(ce))}W=null,X=null,g.reset();for(let K in u)delete u[K];e.setRenderTarget(_),m=null,d=null,f=null,r=null,M=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ce=null,Ie=null;p.depth&&(Ie=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=p.stencil?rs:Bi,Ce=p.stencil?Wa:Ti);let Ne={colorFormat:n.RGBA8,depthFormat:Ie,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new qn(d.textureWidth,d.textureHeight,{format:li,type:In,depthTexture:new gr(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ie={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new qn(m.framebufferWidth,m.framebufferHeight,{format:li,type:In,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(K){for(let ce=0;ce<K.removed.length;ce++){let ie=K.removed[ce],Ce=E.indexOf(ie);Ce>=0&&(E[Ce]=null,T[Ce].disconnect(ie))}for(let ce=0;ce<K.added.length;ce++){let ie=K.added[ce],Ce=E.indexOf(ie);if(Ce===-1){for(let Ne=0;Ne<T.length;Ne++)if(Ne>=E.length){E.push(ie),Ce=Ne;break}else if(E[Ne]===null){E[Ne]=ie,Ce=Ne;break}if(Ce===-1)break}let Ie=T[Ce];Ie&&Ie.connect(ie)}}let Z=new O,te=new O;function ae(K,ce,ie){Z.setFromMatrixPosition(ce.matrixWorld),te.setFromMatrixPosition(ie.matrixWorld);let Ce=Z.distanceTo(te),Ie=ce.projectionMatrix.elements,Ne=ie.projectionMatrix.elements,xt=Ie[14]/(Ie[10]-1),je=Ie[14]/(Ie[10]+1),ct=(Ie[9]+1)/Ie[5],Le=(Ie[9]-1)/Ie[5],Re=(Ie[8]-1)/Ie[0],ut=(Ne[8]+1)/Ne[0],st=xt*Re,Et=xt*ut,L=Ce/(-Re+ut),Ct=L*-Re;if(ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ct),K.translateZ(L),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let Ve=xt+L,ht=je+L,de=st-Ct,Tt=Et+(Ce-Ct),A=ct*je/ht*Ve,S=Le*je/ht*Ve;K.projectionMatrix.makePerspective(de,Tt,A,S,Ve,ht),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function xe(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ce=K.near,ie=K.far;g.texture!==null&&(g.depthNear>0&&(ce=g.depthNear),g.depthFar>0&&(ie=g.depthFar)),U.near=P.near=C.near=ce,U.far=P.far=C.far=ie,(W!==U.near||X!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),W=U.near,X=U.far),U.layers.mask=K.layers.mask|6,C.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;let Ce=K.parent,Ie=U.cameras;xe(U,Ce);for(let Ne=0;Ne<Ie.length;Ne++)xe(Ie[Ne],Ce);Ie.length===2?ae(U,C,P):U.projectionMatrix.copy(C.projectionMatrix),ve(K,U,Ce)};function ve(K,ce,ie){ie===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(ie.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Hu*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(K){return u[K]};let Be=null;function ze(K,ce){if(h=ce.getViewerPose(c||a),y=ce,h!==null){let ie=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Ce=!1;ie.length!==U.cameras.length&&(U.cameras.length=0,Ce=!0);for(let je=0;je<ie.length;je++){let ct=ie[je],Le=null;if(m!==null)Le=m.getViewport(ct);else{let ut=f.getViewSubImage(d,ct);Le=ut.viewport,je===0&&(e.setRenderTargetTextures(M,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(M))}let Re=I[je];Re===void 0&&(Re=new tn,Re.layers.enable(je),Re.viewport=new Lt,I[je]=Re),Re.matrix.fromArray(ct.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(ct.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Le.x,Le.y,Le.width,Le.height),je===0&&(U.matrix.copy(Re.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ce===!0&&U.cameras.push(Re)}let Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){f=i.getBinding();let je=f.getDepthInformation(ie[0]);je&&je.isValid&&je.texture&&g.init(je,r.renderState)}if(Ie&&Ie.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let je=0;je<ie.length;je++){let ct=ie[je].camera;if(ct){let Le=u[ct];Le||(Le=new al,u[ct]=Le);let Re=f.getCameraImage(ct);Le.sourceTexture=Re}}}}for(let ie=0;ie<T.length;ie++){let Ce=E[ie],Ie=T[ie];Ce!==null&&Ie!==void 0&&Ie.update(Ce,ce,c||a)}Be&&Be(K,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),y=null}let De=new Gy;De.setAnimationLoop(ze),this.setAnimationLoop=function(K){Be=K},this.dispose=function(){}}},SC=new Ft,$y=new qe;$y.set(-1,0,0,0,1,0,0,0,1);function MC(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,Wm(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,p,_,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(g,u):u.isMeshLambertMaterial?(s(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(g,u),f(g,u)):u.isMeshPhongMaterial?(s(g,u),h(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(g,u),d(g,u),u.isMeshPhysicalMaterial&&m(g,u,M)):u.isMeshMatcapMaterial?(s(g,u),y(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),b(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,p,_):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===_n&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===_n&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);let p=e.get(u),_=p.envMap,M=p.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(SC.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply($y),g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,p,_){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*p,g.scale.value=_*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function d(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,p){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===_n&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=p.texture,g.transmissionSamplerSize.value.set(p.width,p.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,u){u.matcap&&(g.matcap.value=u.matcap)}function b(g,u){let p=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(p.matrixWorld),g.nearDistance.value=p.shadow.camera.near,g.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bC(t,e,n,i){let r={},s={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,_){let M=_.program;i.uniformBlockBinding(p,M)}function c(p,_){let M=r[p.id];M===void 0&&(y(p),M=h(p),r[p.id]=M,p.addEventListener("dispose",g));let T=_.program;i.updateUBOMapping(p,T);let E=e.render.frame;s[p.id]!==E&&(d(p),s[p.id]=E)}function h(p){let _=f();p.__bindingPointIndex=_;let M=t.createBuffer(),T=p.__size,E=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,T,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function f(){for(let p=0;p<o;p++)if(a.indexOf(p)===-1)return a.push(p),p;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(p){let _=r[p.id],M=p.uniforms,T=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let E=0,R=M.length;E<R;E++){let x=Array.isArray(M[E])?M[E]:[M[E]];for(let C=0,P=x.length;C<P;C++){let I=x[C];if(m(I,E,C,T)===!0){let U=I.__offset,W=Array.isArray(I.value)?I.value:[I.value],X=0;for(let F=0;F<W.length;F++){let V=W[F],G=b(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,U+X,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):ArrayBuffer.isView(V)?I.__data.set(new V.constructor(V.buffer,V.byteOffset,I.__data.length)):(V.toArray(I.__data,X),X+=G.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(p,_,M,T){let E=p.value,R=_+"_"+M;if(T[R]===void 0)return typeof E=="number"||typeof E=="boolean"?T[R]=E:ArrayBuffer.isView(E)?T[R]=E.slice():T[R]=E.clone(),!0;{let x=T[R];if(typeof E=="number"||typeof E=="boolean"){if(x!==E)return T[R]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(x.equals(E)===!1)return x.copy(E),!0}}return!1}function y(p){let _=p.uniforms,M=0,T=16;for(let R=0,x=_.length;R<x;R++){let C=Array.isArray(_[R])?_[R]:[_[R]];for(let P=0,I=C.length;P<I;P++){let U=C[P],W=Array.isArray(U.value)?U.value:[U.value];for(let X=0,F=W.length;X<F;X++){let V=W[X],G=b(V),Z=M%T,te=Z%G.boundary,ae=Z+te;M+=te,ae!==0&&T-ae<G.storage&&(M+=T-ae),U.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=G.storage}}}let E=M%T;return E>0&&(M+=T-E),p.__size=M,p.__cache={},this}function b(p){let _={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(_.boundary=4,_.storage=4):p.isVector2?(_.boundary=8,_.storage=8):p.isVector3||p.isColor?(_.boundary=16,_.storage=12):p.isVector4?(_.boundary=16,_.storage=16):p.isMatrix3?(_.boundary=48,_.storage=48):p.isMatrix4?(_.boundary=64,_.storage=64):p.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(_.boundary=16,_.storage=p.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",p),_}function g(p){let _=p.target;_.removeEventListener("dispose",g);let M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(let p in r)t.deleteBuffer(r[p]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}var wC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function EC(){return Xi===null&&(Xi=new $u(wC,16,16,ss,Wi),Xi.name="DFG_LUT",Xi.minFilter=nn,Xi.magFilter=nn,Xi.wrapS=Oi,Xi.wrapT=Oi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var ih=class{constructor(e={}){let{canvas:n=fy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=In}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=a;let b=m,g=new Set([_d,vd,xd]),u=new Set([In,Ti,Ha,Wa,md,gd]),p=new Uint32Array(4),_=new Int32Array(4),M=new O,T=null,E=null,R=[],x=[],C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,U=null;this._outputColorSpace=Wn;let W=0,X=0,F=null,V=-1,G=null,Z=new Lt,te=new Lt,ae=null,xe=new rt(0),ve=0,Be=n.width,ze=n.height,De=1,K=null,ce=null,ie=new Lt(0,0,Be,ze),Ce=new Lt(0,0,Be,ze),Ie=!1,Ne=new Oa,xt=!1,je=!1,ct=new Ft,Le=new O,Re=new Lt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function Et(){return F===null?De:1}let L=i;function Ct(w,D){return n.getContext(w,D)}try{let w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"184"}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",Ee,!1),n.addEventListener("webglcontextcreationerror",He,!1),L===null){let D="webgl2";if(L=Ct(D,w),L===null)throw Ct(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Oe("WebGLRenderer: "+w.message),w}let Ve,ht,de,Tt,A,S,k,Y,ee,re,oe,q,j,he,Se,le,J,ke,Ge,it,N,se,$;function _e(){Ve=new NT(L),Ve.init(),N=new vC(L,Ve),ht=new wT(L,Ve,e,N),de=new gC(L,Ve),ht.reversedDepthBuffer&&d&&de.buffers.depth.setReversed(!0),Tt=new FT(L),A=new nC,S=new xC(L,Ve,de,A,ht,N,Tt),k=new IT(P),Y=new Bb(L),se=new MT(L,Y),ee=new LT(L,Y,Tt,se),re=new kT(L,ee,Y,se,Tt),ke=new UT(L,ht,S),Se=new ET(A),oe=new tC(P,k,Ve,ht,se,Se),q=new MC(P,A),j=new rC,he=new uC(Ve),J=new ST(P,k,de,re,y,l),le=new mC(P,re,ht),$=new bC(L,Tt,ht,de),Ge=new bT(L,Ve,Tt),it=new DT(L,Ve,Tt),Tt.programs=oe.programs,P.capabilities=ht,P.extensions=Ve,P.properties=A,P.renderLists=j,P.shadowMap=le,P.state=de,P.info=Tt}_e(),b!==In&&(C=new BT(b,n.width,n.height,r,s));let ue=new lg(P,L);this.xr=ue,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=Ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(w){w!==void 0&&(De=w,this.setSize(Be,ze,!1))},this.getSize=function(w){return w.set(Be,ze)},this.setSize=function(w,D,H=!0){if(ue.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=w,ze=D,n.width=Math.floor(w*De),n.height=Math.floor(D*De),H===!0&&(n.style.width=w+"px",n.style.height=D+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(Be*De,ze*De).floor()},this.setDrawingBufferSize=function(w,D,H){Be=w,ze=D,De=H,n.width=Math.floor(w*H),n.height=Math.floor(D*H),this.setViewport(0,0,w,D)},this.setEffects=function(w){if(b===In){Oe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let D=0;D<w.length;D++)if(w[D].isOutputPass===!0){Ue("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Z)},this.getViewport=function(w){return w.copy(ie)},this.setViewport=function(w,D,H,B){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,D,H,B),de.viewport(Z.copy(ie).multiplyScalar(De).round())},this.getScissor=function(w){return w.copy(Ce)},this.setScissor=function(w,D,H,B){w.isVector4?Ce.set(w.x,w.y,w.z,w.w):Ce.set(w,D,H,B),de.scissor(te.copy(Ce).multiplyScalar(De).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(w){de.setScissorTest(Ie=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){ce=w},this.getClearColor=function(w){return w.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor(...arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha(...arguments)},this.clear=function(w=!0,D=!0,H=!0){let B=0;if(w){let z=!1;if(F!==null){let fe=F.texture.format;z=g.has(fe)}if(z){let fe=F.texture.type,ye=u.has(fe),pe=J.getClearColor(),we=J.getClearAlpha(),Te=pe.r,We=pe.g,Ye=pe.b;ye?(p[0]=Te,p[1]=We,p[2]=Ye,p[3]=we,L.clearBufferuiv(L.COLOR,0,p)):(_[0]=Te,_[1]=We,_[2]=Ye,_[3]=we,L.clearBufferiv(L.COLOR,0,_))}else B|=L.COLOR_BUFFER_BIT}D&&(B|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),U=w},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",Ee,!1),n.removeEventListener("webglcontextcreationerror",He,!1),J.dispose(),j.dispose(),he.dispose(),A.dispose(),k.dispose(),re.dispose(),se.dispose(),$.dispose(),oe.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Xt),ue.removeEventListener("sessionend",$i),bn.stop()};function Q(w){w.preventDefault(),Hm("WebGLRenderer: Context Lost."),I=!0}function Ee(){Hm("WebGLRenderer: Context Restored."),I=!1;let w=Tt.autoReset,D=le.enabled,H=le.autoUpdate,B=le.needsUpdate,z=le.type;_e(),Tt.autoReset=w,le.enabled=D,le.autoUpdate=H,le.needsUpdate=B,le.type=z}function He(w){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Rt(w){let D=w.target;D.removeEventListener("dispose",Rt),ft(D)}function ft(w){di(w),A.remove(w)}function di(w){let D=A.get(w).programs;D!==void 0&&(D.forEach(function(H){oe.releaseProgram(H)}),w.isShaderMaterial&&oe.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,H,B,z,fe){D===null&&(D=ut);let ye=z.isMesh&&z.matrixWorld.determinant()<0,pe=_h(w,D,H,B,z);de.setMaterial(B,ye);let we=H.index,Te=1;if(B.wireframe===!0){if(we=ee.getWireframeAttribute(H),we===void 0)return;Te=2}let We=H.drawRange,Ye=H.attributes.position,Ae=We.start*Te,pt=(We.start+We.count)*Te;fe!==null&&(Ae=Math.max(Ae,fe.start*Te),pt=Math.min(pt,(fe.start+fe.count)*Te)),we!==null?(Ae=Math.max(Ae,0),pt=Math.min(pt,we.count)):Ye!=null&&(Ae=Math.max(Ae,0),pt=Math.min(pt,Ye.count));let Xe=pt-Ae;if(Xe<0||Xe===1/0)return;se.setup(z,B,pe,H,we);let Je,at=Ge;if(we!==null&&(Je=Y.get(we),at=it,at.setIndex(Je)),z.isMesh)B.wireframe===!0?(de.setLineWidth(B.wireframeLinewidth*Et()),at.setMode(L.LINES)):at.setMode(L.TRIANGLES);else if(z.isLine){let rn=B.linewidth;rn===void 0&&(rn=1),de.setLineWidth(rn*Et()),z.isLineSegments?at.setMode(L.LINES):z.isLineLoop?at.setMode(L.LINE_LOOP):at.setMode(L.LINE_STRIP)}else z.isPoints?at.setMode(L.POINTS):z.isSprite&&at.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(Ve.get("WEBGL_multi_draw"))at.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let rn=z._multiDrawStarts,Me=z._multiDrawCounts,Fn=z._multiDrawCount,ot=we?Y.get(we).bytesPerElement:1,Jn=A.get(B).currentProgram.getUniforms();for(let Ci=0;Ci<Fn;Ci++)Jn.setValue(L,"_gl_DrawID",Ci),at.render(rn[Ci]/ot,Me[Ci])}else if(z.isInstancedMesh)at.renderInstances(Ae,Xe,z.count);else if(H.isInstancedBufferGeometry){let rn=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Me=Math.min(H.instanceCount,rn);at.renderInstances(Ae,Xe,Me)}else at.render(Ae,Xe)};function Mn(w,D,H){w.transparent===!0&&w.side===Gi&&w.forceSinglePass===!1?(w.side=_n,w.needsUpdate=!0,cs(w,D,H),w.side=pr,w.needsUpdate=!0,cs(w,D,H),w.side=Gi):cs(w,D,H)}this.compile=function(w,D,H=null){H===null&&(H=w),E=he.get(H),E.init(D),x.push(E),H.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),w!==H&&w.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights();let B=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let fe=z.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){let pe=fe[ye];Mn(pe,H,z),B.add(pe)}else Mn(fe,H,z),B.add(fe)}),E=x.pop(),B},this.compileAsync=function(w,D,H=null){let B=this.compile(w,D,H);return new Promise(z=>{function fe(){if(B.forEach(function(ye){A.get(ye).currentProgram.isReady()&&B.delete(ye)}),B.size===0){z(w);return}setTimeout(fe,10)}Ve.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ke=null;function Fe(w){Ke&&Ke(w)}function Xt(){bn.stop()}function $i(){bn.start()}let bn=new Gy;bn.setAnimationLoop(Fe),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(w){Ke=w,ue.setAnimationLoop(w),w===null?bn.stop():bn.start()},ue.addEventListener("sessionstart",Xt),ue.addEventListener("sessionend",$i),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(w,D);let H=ue.enabled===!0&&ue.isPresenting===!0,B=C!==null&&(F===null||H)&&C.begin(P,F);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(D),D=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,D,F),E=he.get(w,x.length),E.init(D),E.state.textureUnits=S.getTextureUnits(),x.push(E),ct.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ne.setFromProjectionMatrix(ct,wi,D.reversedDepth),je=this.localClippingEnabled,xt=Se.init(this.clippingPlanes,je),T=j.get(w,R.length),T.init(),R.push(T),ue.enabled===!0&&ue.isPresenting===!0){let ye=P.xr.getDepthSensingMesh();ye!==null&&hi(ye,D,-1/0,P.sortObjects)}hi(w,D,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(K,ce),st=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,st&&J.addToRenderList(T,w),this.info.render.frame++,xt===!0&&Se.beginShadows();let z=E.state.shadowsArray;if(le.render(z,w,D),xt===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(B&&C.hasRenderPass())===!1){let ye=T.opaque,pe=T.transmissive;if(E.setupLights(),D.isArrayCamera){let we=D.cameras;if(pe.length>0)for(let Te=0,We=we.length;Te<We;Te++){let Ye=we[Te];Yi(ye,pe,w,Ye)}st&&J.render(w);for(let Te=0,We=we.length;Te<We;Te++){let Ye=we[Te];Dn(T,w,Ye,Ye.viewport)}}else pe.length>0&&Yi(ye,pe,w,D),st&&J.render(w),Dn(T,w,D)}F!==null&&X===0&&(S.updateMultisampleRenderTarget(F),S.updateRenderTargetMipmap(F)),B&&C.end(P),w.isScene===!0&&w.onAfterRender(P,w,D),se.resetDefaultState(),V=-1,G=null,x.pop(),x.length>0?(E=x[x.length-1],S.setTextureUnits(E.state.textureUnits),xt===!0&&Se.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,U!==null&&U.renderEnd()};function hi(w,D,H,B){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ne.intersectsSprite(w)){B&&Re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ct);let ye=re.update(w),pe=w.material;pe.visible&&T.push(w,ye,pe,H,Re.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ne.intersectsObject(w))){let ye=re.update(w),pe=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Re.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Re.copy(ye.boundingSphere.center)),Re.applyMatrix4(w.matrixWorld).applyMatrix4(ct)),Array.isArray(pe)){let we=ye.groups;for(let Te=0,We=we.length;Te<We;Te++){let Ye=we[Te],Ae=pe[Ye.materialIndex];Ae&&Ae.visible&&T.push(w,ye,Ae,H,Re.z,Ye)}}else pe.visible&&T.push(w,ye,pe,H,Re.z,null)}}let fe=w.children;for(let ye=0,pe=fe.length;ye<pe;ye++)hi(fe[ye],D,H,B)}function Dn(w,D,H,B){let{opaque:z,transmissive:fe,transparent:ye}=w;E.setupLightsView(H),xt===!0&&Se.setGlobalState(P.clippingPlanes,H),B&&de.viewport(Z.copy(B)),z.length>0&&ls(z,D,H),fe.length>0&&ls(fe,D,H),ye.length>0&&ls(ye,D,H),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Yi(w,D,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){let Ae=Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new qn(1,1,{generateMipmaps:!0,type:Ae?Wi:In,minFilter:is,samples:Math.max(4,ht.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}let fe=E.state.transmissionRenderTarget[B.id],ye=B.viewport||Z;fe.setSize(ye.z*P.transmissionResolutionScale,ye.w*P.transmissionResolutionScale);let pe=P.getRenderTarget(),we=P.getActiveCubeFace(),Te=P.getActiveMipmapLevel();P.setRenderTarget(fe),P.getClearColor(xe),ve=P.getClearAlpha(),ve<1&&P.setClearColor(16777215,.5),P.clear(),st&&J.render(H);let We=P.toneMapping;P.toneMapping=Ei;let Ye=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),xt===!0&&Se.setGlobalState(P.clippingPlanes,B),ls(w,H,B),S.updateMultisampleRenderTarget(fe),S.updateRenderTargetMipmap(fe),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let pt=0,Xe=D.length;pt<Xe;pt++){let Je=D[pt],{object:at,geometry:rn,material:Me,group:Fn}=Je;if(Me.side===Gi&&at.layers.test(B.layers)){let ot=Me.side;Me.side=_n,Me.needsUpdate=!0,Ul(at,H,B,rn,Me,Fn),Me.side=ot,Me.needsUpdate=!0,Ae=!0}}Ae===!0&&(S.updateMultisampleRenderTarget(fe),S.updateRenderTargetMipmap(fe))}P.setRenderTarget(pe,we,Te),P.setClearColor(xe,ve),Ye!==void 0&&(B.viewport=Ye),P.toneMapping=We}function ls(w,D,H){let B=D.isScene===!0?D.overrideMaterial:null;for(let z=0,fe=w.length;z<fe;z++){let ye=w[z],{object:pe,geometry:we,group:Te}=ye,We=ye.material;We.allowOverride===!0&&B!==null&&(We=B),pe.layers.test(H.layers)&&Ul(pe,D,H,we,We,Te)}}function Ul(w,D,H,B,z,fe){w.onBeforeRender(P,D,H,B,z,fe),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(P,D,H,B,w,fe),z.transparent===!0&&z.side===Gi&&z.forceSinglePass===!1?(z.side=_n,z.needsUpdate=!0,P.renderBufferDirect(H,D,B,z,w,fe),z.side=pr,z.needsUpdate=!0,P.renderBufferDirect(H,D,B,z,w,fe),z.side=Gi):P.renderBufferDirect(H,D,B,z,w,fe),w.onAfterRender(P,D,H,B,z,fe)}function cs(w,D,H){D.isScene!==!0&&(D=ut);let B=A.get(w),z=E.state.lights,fe=E.state.shadowsArray,ye=z.state.version,pe=oe.getParameters(w,z.state,fe,D,H,E.state.lightProbeGridArray),we=oe.getProgramCacheKey(pe),Te=B.programs;B.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;let We=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;B.envMap=k.get(w.envMap||B.environment,We),B.envMapRotation=B.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Te===void 0&&(w.addEventListener("dispose",Rt),Te=new Map,B.programs=Te);let Ye=Te.get(we);if(Ye!==void 0){if(B.currentProgram===Ye&&B.lightsStateVersion===ye)return Ol(w,pe),Ye}else pe.uniforms=oe.getUniforms(w),U!==null&&w.isNodeMaterial&&U.build(w,H,pe),w.onBeforeCompile(pe,P),Ye=oe.acquireProgram(pe,we),Te.set(we,Ye),B.uniforms=pe.uniforms;let Ae=B.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ae.clippingPlanes=Se.uniform),Ol(w,pe),B.needsLights=zl(w),B.lightsStateVersion=ye,B.needsLights&&(Ae.ambientLightColor.value=z.state.ambient,Ae.lightProbe.value=z.state.probe,Ae.directionalLights.value=z.state.directional,Ae.directionalLightShadows.value=z.state.directionalShadow,Ae.spotLights.value=z.state.spot,Ae.spotLightShadows.value=z.state.spotShadow,Ae.rectAreaLights.value=z.state.rectArea,Ae.ltc_1.value=z.state.rectAreaLTC1,Ae.ltc_2.value=z.state.rectAreaLTC2,Ae.pointLights.value=z.state.point,Ae.pointLightShadows.value=z.state.pointShadow,Ae.hemisphereLights.value=z.state.hemi,Ae.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ae.spotLightMatrix.value=z.state.spotLightMatrix,Ae.spotLightMap.value=z.state.spotLightMap,Ae.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=E.state.lightProbeGridArray.length>0,B.currentProgram=Ye,B.uniformsList=null,Ye}function kl(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=qa.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function Ol(w,D){let H=A.get(w);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function Bl(w,D){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(D.matrixWorld);for(let H=0,B=w.length;H<B;H++){let z=w[H];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function _h(w,D,H,B,z){D.isScene!==!0&&(D=ut),S.resetTextureUnits();let fe=D.fog,ye=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,pe=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:et.workingColorSpace,we=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Te=k.get(B.envMap||ye,we),We=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ye=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ae=!!H.morphAttributes.position,pt=!!H.morphAttributes.normal,Xe=!!H.morphAttributes.color,Je=Ei;B.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Je=P.toneMapping);let at=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,rn=at!==void 0?at.length:0,Me=A.get(B),Fn=E.state.lights;if(xt===!0&&(je===!0||w!==G)){let _t=w===G&&B.id===V;Se.setState(B,w,_t)}let ot=!1;B.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Fn.state.version||Me.outputColorSpace!==pe||z.isBatchedMesh&&Me.batching===!1||!z.isBatchedMesh&&Me.batching===!0||z.isBatchedMesh&&Me.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Me.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Me.instancing===!1||!z.isInstancedMesh&&Me.instancing===!0||z.isSkinnedMesh&&Me.skinning===!1||!z.isSkinnedMesh&&Me.skinning===!0||z.isInstancedMesh&&Me.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Me.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Me.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Me.instancingMorph===!1&&z.morphTexture!==null||Me.envMap!==Te||B.fog===!0&&Me.fog!==fe||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Se.numPlanes||Me.numIntersection!==Se.numIntersection)||Me.vertexAlphas!==We||Me.vertexTangents!==Ye||Me.morphTargets!==Ae||Me.morphNormals!==pt||Me.morphColors!==Xe||Me.toneMapping!==Je||Me.morphTargetsCount!==rn||!!Me.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Me.__version=B.version);let Jn=Me.currentProgram;ot===!0&&(Jn=cs(B,D,z),U&&B.isNodeMaterial&&U.onUpdateProgram(B,Jn,Me));let Ci=!1,vr=!1,Gs=!1,vt=Jn.getUniforms(),kt=Me.uniforms;if(de.useProgram(Jn.program)&&(Ci=!0,vr=!0,Gs=!0),B.id!==V&&(V=B.id,vr=!0),Me.needsLights){let _t=Bl(E.state.lightProbeGridArray,z);Me.lightProbeGrid!==_t&&(Me.lightProbeGrid=_t,vr=!0)}if(Ci||G!==w){de.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),vt.setValue(L,"projectionMatrix",w.projectionMatrix),vt.setValue(L,"viewMatrix",w.matrixWorldInverse);let yr=vt.map.cameraPosition;yr!==void 0&&yr.setValue(L,Le.setFromMatrixPosition(w.matrixWorld)),ht.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&vt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),G!==w&&(G=w,vr=!0,Gs=!0)}if(Me.needsLights&&(Fn.state.directionalShadowMap.length>0&&vt.setValue(L,"directionalShadowMap",Fn.state.directionalShadowMap,S),Fn.state.spotShadowMap.length>0&&vt.setValue(L,"spotShadowMap",Fn.state.spotShadowMap,S),Fn.state.pointShadowMap.length>0&&vt.setValue(L,"pointShadowMap",Fn.state.pointShadowMap,S)),z.isSkinnedMesh){vt.setOptional(L,z,"bindMatrix"),vt.setOptional(L,z,"bindMatrixInverse");let _t=z.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),vt.setValue(L,"boneTexture",_t.boneTexture,S))}z.isBatchedMesh&&(vt.setOptional(L,z,"batchingTexture"),vt.setValue(L,"batchingTexture",z._matricesTexture,S),vt.setOptional(L,z,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",z._indirectTexture,S),vt.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",z._colorsTexture,S));let _r=H.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&ke.update(z,H,Jn),(vr||Me.receiveShadow!==z.receiveShadow)&&(Me.receiveShadow=z.receiveShadow,vt.setValue(L,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(kt.envMapIntensity.value=D.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=EC()),vr){if(vt.setValue(L,"toneMappingExposure",P.toneMappingExposure),Me.needsLights&&yh(kt,Gs),fe&&B.fog===!0&&q.refreshFogUniforms(kt,fe),q.refreshMaterialUniforms(kt,B,De,ze,E.state.transmissionRenderTarget[w.id]),Me.needsLights&&Me.lightProbeGrid){let _t=Me.lightProbeGrid;kt.probesSH.value=_t.texture,kt.probesMin.value.copy(_t.boundingBox.min),kt.probesMax.value.copy(_t.boundingBox.max),kt.probesResolution.value.copy(_t.resolution)}qa.upload(L,kl(Me),kt,S)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(qa.upload(L,kl(Me),kt,S),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&vt.setValue(L,"center",z.center),vt.setValue(L,"modelViewMatrix",z.modelViewMatrix),vt.setValue(L,"normalMatrix",z.normalMatrix),vt.setValue(L,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let _t=B.uniformsGroups;for(let yr=0,Hs=_t.length;yr<Hs;yr++){let Lg=_t[yr];$.update(Lg,Jn),$.bind(Lg,Jn)}}return Jn}function yh(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function zl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,D,H){let B=A.get(w);B.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),A.get(w.texture).__webglTexture=D,A.get(w.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,D){let H=A.get(w);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0};let Vs=L.createFramebuffer();this.setRenderTarget=function(w,D=0,H=0){F=w,W=D,X=H;let B=null,z=!1,fe=!1;if(w){let pe=A.get(w);if(pe.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(L.FRAMEBUFFER,pe.__webglFramebuffer),Z.copy(w.viewport),te.copy(w.scissor),ae=w.scissorTest,de.viewport(Z),de.scissor(te),de.setScissorTest(ae),V=-1;return}else if(pe.__webglFramebuffer===void 0)S.setupRenderTarget(w);else if(pe.__hasExternalTextures)S.rebindTextures(w,A.get(w.texture).__webglTexture,A.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let We=w.depthTexture;if(pe.__boundDepthTexture!==We){if(We!==null&&A.has(We)&&(w.width!==We.image.width||w.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(w)}}let we=w.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(fe=!0);let Te=A.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Te[D])?B=Te[D][H]:B=Te[D],z=!0):w.samples>0&&S.useMultisampledRTT(w)===!1?B=A.get(w).__webglMultisampledFramebuffer:Array.isArray(Te)?B=Te[H]:B=Te,Z.copy(w.viewport),te.copy(w.scissor),ae=w.scissorTest}else Z.copy(ie).multiplyScalar(De).floor(),te.copy(Ce).multiplyScalar(De).floor(),ae=Ie;if(H!==0&&(B=Vs),de.bindFramebuffer(L.FRAMEBUFFER,B)&&de.drawBuffers(w,B),de.viewport(Z),de.scissor(te),de.setScissorTest(ae),z){let pe=A.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,pe.__webglTexture,H)}else if(fe){let pe=D;for(let we=0;we<w.textures.length;we++){let Te=A.get(w.textures[we]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+we,Te.__webglTexture,H,pe)}}else if(w!==null&&H!==0){let pe=A.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pe.__webglTexture,H)}V=-1},this.readRenderTargetPixels=function(w,D,H,B,z,fe,ye,pe=0){if(!(w&&w.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){de.bindFramebuffer(L.FRAMEBUFFER,we);try{let Te=w.textures[pe],We=Te.format,Ye=Te.type;if(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe),!ht.textureFormatReadable(We)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Ye)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-B&&H>=0&&H<=w.height-z&&L.readPixels(D,H,B,z,N.convert(We),N.convert(Ye),fe)}finally{let Te=F!==null?A.get(F).__webglFramebuffer:null;de.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(w,D,H,B,z,fe,ye,pe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we)if(D>=0&&D<=w.width-B&&H>=0&&H<=w.height-z){de.bindFramebuffer(L.FRAMEBUFFER,we);let Te=w.textures[pe],We=Te.format,Ye=Te.type;if(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe),!ht.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,fe.byteLength,L.STREAM_READ),L.readPixels(D,H,B,z,N.convert(We),N.convert(Ye),0);let pt=F!==null?A.get(F).__webglFramebuffer:null;de.bindFramebuffer(L.FRAMEBUFFER,pt);let Xe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await my(L,Xe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,fe),L.deleteBuffer(Ae),L.deleteSync(Xe),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,D=null,H=0){let B=Math.pow(2,-H),z=Math.floor(w.image.width*B),fe=Math.floor(w.image.height*B),ye=D!==null?D.x:0,pe=D!==null?D.y:0;S.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,ye,pe,z,fe),de.unbindTexture()};let ja=L.createFramebuffer(),Sh=L.createFramebuffer();this.copyTextureToTexture=function(w,D,H=null,B=null,z=0,fe=0){let ye,pe,we,Te,We,Ye,Ae,pt,Xe,Je=w.isCompressedTexture?w.mipmaps[fe]:w.image;if(H!==null)ye=H.max.x-H.min.x,pe=H.max.y-H.min.y,we=H.isBox3?H.max.z-H.min.z:1,Te=H.min.x,We=H.min.y,Ye=H.isBox3?H.min.z:0;else{let kt=Math.pow(2,-z);ye=Math.floor(Je.width*kt),pe=Math.floor(Je.height*kt),w.isDataArrayTexture?we=Je.depth:w.isData3DTexture?we=Math.floor(Je.depth*kt):we=1,Te=0,We=0,Ye=0}B!==null?(Ae=B.x,pt=B.y,Xe=B.z):(Ae=0,pt=0,Xe=0);let at=N.convert(D.format),rn=N.convert(D.type),Me;D.isData3DTexture?(S.setTexture3D(D,0),Me=L.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(S.setTexture2DArray(D,0),Me=L.TEXTURE_2D_ARRAY):(S.setTexture2D(D,0),Me=L.TEXTURE_2D),de.activeTexture(L.TEXTURE0),de.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),de.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),de.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);let Fn=de.getParameter(L.UNPACK_ROW_LENGTH),ot=de.getParameter(L.UNPACK_IMAGE_HEIGHT),Jn=de.getParameter(L.UNPACK_SKIP_PIXELS),Ci=de.getParameter(L.UNPACK_SKIP_ROWS),vr=de.getParameter(L.UNPACK_SKIP_IMAGES);de.pixelStorei(L.UNPACK_ROW_LENGTH,Je.width),de.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je.height),de.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),de.pixelStorei(L.UNPACK_SKIP_ROWS,We),de.pixelStorei(L.UNPACK_SKIP_IMAGES,Ye);let Gs=w.isDataArrayTexture||w.isData3DTexture,vt=D.isDataArrayTexture||D.isData3DTexture;if(w.isDepthTexture){let kt=A.get(w),_r=A.get(D),_t=A.get(kt.__renderTarget),yr=A.get(_r.__renderTarget);de.bindFramebuffer(L.READ_FRAMEBUFFER,_t.__webglFramebuffer),de.bindFramebuffer(L.DRAW_FRAMEBUFFER,yr.__webglFramebuffer);for(let Hs=0;Hs<we;Hs++)Gs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,A.get(w).__webglTexture,z,Ye+Hs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,A.get(D).__webglTexture,fe,Xe+Hs)),L.blitFramebuffer(Te,We,ye,pe,Ae,pt,ye,pe,L.DEPTH_BUFFER_BIT,L.NEAREST);de.bindFramebuffer(L.READ_FRAMEBUFFER,null),de.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||A.has(w)){let kt=A.get(w),_r=A.get(D);de.bindFramebuffer(L.READ_FRAMEBUFFER,ja),de.bindFramebuffer(L.DRAW_FRAMEBUFFER,Sh);for(let _t=0;_t<we;_t++)Gs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,kt.__webglTexture,z,Ye+_t):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,kt.__webglTexture,z),vt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_r.__webglTexture,fe,Xe+_t):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_r.__webglTexture,fe),z!==0?L.blitFramebuffer(Te,We,ye,pe,Ae,pt,ye,pe,L.COLOR_BUFFER_BIT,L.NEAREST):vt?L.copyTexSubImage3D(Me,fe,Ae,pt,Xe+_t,Te,We,ye,pe):L.copyTexSubImage2D(Me,fe,Ae,pt,Te,We,ye,pe);de.bindFramebuffer(L.READ_FRAMEBUFFER,null),de.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else vt?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Me,fe,Ae,pt,Xe,ye,pe,we,at,rn,Je.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,fe,Ae,pt,Xe,ye,pe,we,at,Je.data):L.texSubImage3D(Me,fe,Ae,pt,Xe,ye,pe,we,at,rn,Je):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,fe,Ae,pt,ye,pe,at,rn,Je.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,fe,Ae,pt,Je.width,Je.height,at,Je.data):L.texSubImage2D(L.TEXTURE_2D,fe,Ae,pt,ye,pe,at,rn,Je);de.pixelStorei(L.UNPACK_ROW_LENGTH,Fn),de.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot),de.pixelStorei(L.UNPACK_SKIP_PIXELS,Jn),de.pixelStorei(L.UNPACK_SKIP_ROWS,Ci),de.pixelStorei(L.UNPACK_SKIP_IMAGES,vr),fe===0&&D.generateMipmaps&&L.generateMipmap(Me),de.unbindTexture()},this.initRenderTarget=function(w){A.get(w).__webglFramebuffer===void 0&&S.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?S.setTextureCube(w,0):w.isData3DTexture?S.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?S.setTexture2DArray(w,0):S.setTexture2D(w,0),de.unbindTexture()},this.resetState=function(){W=0,X=0,F=null,de.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}};var lh=Ri(Sr(),1);var ah=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();var Yy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var jy=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());var cg=t=>{let e=jy(t);return e.charAt(0).toUpperCase()+e.slice(1)};var Cl=Ri(Sr(),1);var oh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var Zy=t=>{for(let e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};var $a=Ri(Sr(),1);var AC=(0,$a.createContext)({});var Jy=()=>(0,$a.useContext)(AC);var Qy=(0,Cl.forwardRef)(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>{let{size:c=24,strokeWidth:h=2,absoluteStrokeWidth:f=!1,color:d="currentColor",className:m=""}=Jy()??{},y=i??f?Number(n??h)*24/Number(e??c):n??h;return(0,Cl.createElement)("svg",{ref:l,...oh,width:e??c??oh.width,height:e??c??oh.height,stroke:t??d,strokeWidth:y,className:ah("lucide",m,r),...!s&&!Zy(o)&&{"aria-hidden":"true"},...o},[...a.map(([b,g])=>(0,Cl.createElement)(b,g)),...Array.isArray(s)?s:[s]])});var $e=(t,e)=>{let n=(0,lh.forwardRef)(({className:i,...r},s)=>(0,lh.createElement)(Qy,{ref:s,iconNode:e,className:ah(`lucide-${Yy(cg(t))}`,`lucide-${t}`,i),...r}));return n.displayName=cg(t),n};var CC=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],eS=$e("activity",CC);var RC=[["path",{d:"M12 6.528V3a1 1 0 0 1 1-1h0",key:"11qiee"}],["path",{d:"M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21",key:"110c12"}]],tS=$e("apple",RC);var PC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ug=$e("circle-check",PC);var IC=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],nS=$e("chevron-down",IC);var NC=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],jn=$e("clipboard-list",NC);var LC=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],iS=$e("dumbbell",LC);var DC=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],ch=$e("flame",DC);var FC=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],Ya=$e("gauge",FC);var UC=[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]],dg=$e("goal",UC);var kC=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],rS=$e("leaf",kC);var OC=[["path",{d:"M5 12h14",key:"1ays0h"}]],Rl=$e("minus",OC);var BC=[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m16 17 2 2 4-4",key:"uh5qu3"}],["path",{d:"M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",key:"kpkbpo"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]],sS=$e("package-check",BC);var zC=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Pl=$e("plus",zC);var VC=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Fs=$e("rotate-ccw",VC);var GC=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],aS=$e("settings-2",GC);var HC=[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]],Il=$e("shopping-basket",HC);var WC=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],hg=$e("sparkles",WC);var XC=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],oS=$e("timer",XC);var qC=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],uh=$e("utensils",qC);var KC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],fg=$e("x",KC);var $C=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],pg=$e("zap",$C);var ci={p:0,c:0,f:0,kcal:0};function tt(t,e,n){return Math.max(e,Math.min(n,Number(t)||0))}function ge(t,e=0){return Number((Number(t)||0).toFixed(e))}function yn(t,e=1){return!Number.isFinite(Number(t))||Number(t)<=0?0:Math.max(0,Math.round(Number(t)/e)*e)}function Zn(t=ci){return Number.isFinite(t.kcal)?t.kcal:(t.p||0)*4+(t.c||0)*4+(t.f||0)*9}function Us(t=ci){return{...t,kcal:Zn(t)}}function Ut(...t){return Us(t.reduce((e,n)=>({p:e.p+(n?.p||0),c:e.c+(n?.c||0),f:e.f+(n?.f||0),kcal:e.kcal+Zn(n||ci)}),{...ci}))}function xg(t=ci,e=ci,n=.4){let i=tt(n,.1,.9),r={p:ge(Math.max(0,(t.p||0)-(e.p||0)),1),c:ge(Math.max(0,(t.c||0)-(e.c||0)),1),f:ge(Math.max(0,(t.f||0)-(e.f||0)),1),kcal:ge(Math.max(0,Zn(t)-Zn(e)))},s={p:ge(r.p*i,1),c:ge(r.c*i,1),f:ge(r.f*i,1),kcal:ge(r.kcal*i)},a={p:ge(Math.max(0,r.p-s.p),1),c:ge(Math.max(0,r.c-s.c),1),f:ge(Math.max(0,r.f-s.f),1),kcal:ge(Math.max(0,r.kcal-s.kcal))};return{remaining:r,lunch:s,dinner:a}}function Zt(t=ci,e=0){return Us({p:(t.p||0)*e,c:(t.c||0)*e,f:(t.f||0)*e,...Number.isFinite(t.kcal)?{kcal:t.kcal*e}:{}})}function lS(t={}){let e=tt(t.bodyWeightKg,1,300),n=tt(t.proteinPerKg,0,5),i=tt(t.fatMinPerKg,0,3),r=ge(tt(t.kcal,0,9e3)),s=ge(e*n,1),a=ge(e*i,1),o=Math.max(0,r-s*4-a*9),l=ge(o/4,1);return{p:s,c:l,f:a,kcal:r}}function YC(t=0,e=1){let n=tt(t,0,1/0)/Math.max(1,tt(e,1,300));return n<2?{label:"\u4F4E\u78B3",tone:"amber",note:"\u78B3\u6C34\u4F4E\u4E8E 2.0g/kg\uFF0C\u4ECA\u5929\u7B97\u6536\u7D27\u65E5"}:n<3?{label:"\u4E2D\u78B3",tone:"green",note:"\u78B3\u6C34\u5728 2.0-3.0g/kg\uFF0C\u8BAD\u7EC3\u548C\u6062\u590D\u90FD\u6BD4\u8F83\u7A33"}:{label:"\u9AD8\u78B3",tone:"red",note:"\u78B3\u6C34\u8D85\u8FC7 3.0g/kg\uFF0C\u66F4\u50CF\u8865\u7CD6\u6216\u9AD8\u6D3B\u52A8\u65E5"}}function cS(t=ci,e=ci,n=1){let i=Math.max(1,Zn(t)),r=Math.max(1,tt(n,1,300)),s=(t.p||0)*4,a=(t.c||0)*4,o=(t.f||0)*9;return{proteinPct:ge(s/i*100,1),carbPct:ge(a/i*100,1),fatPct:ge(o/i*100,1),proteinPerKg:ge((t.p||0)/r,1),carbPerKg:ge((t.c||0)/r,1),fatPerKg:ge((t.f||0)/r,1),proteinTargetPerKg:ge((e.p||0)/r,1),carbTargetPerKg:ge((e.c||0)/r,1),carbDay:YC(t.c||0,r)}}function jC(t,e){let n=yn(tt(e,0,t.max??1/0),t.step||1);return{...t,qty:n,macro:Zt(t.unitMacro,n)}}function gg(t,e){let n=t.kcal-e.kcal,i=Math.pow(n/(n>0?150:125),2)*8+Math.max(0,n-220)*.28,r=Math.max(0,e.p-t.p),s=Math.max(0,t.p-e.p),a=t.c-e.c,o=Math.max(0,e.f-t.f),l=Math.max(0,t.f-e.f);return i+Math.pow(r/4,2)*28+Math.pow(s/12,2)*4+Math.pow(a/14,2)*10+Math.pow(o/4,2)*24+Math.pow(l/7,2)*12}function ZC(t){let e=t.step||1,n=Math.max(0,t.max??t.qty??e*20),i=Math.floor(n/e),r=new Set([0,yn(t.qty||0,e),yn(n,e)]);if(i<=90)for(let s=0;s<=i;s+=1)r.add(yn(s*e,e));else{for(let s=-14;s<=14;s+=1)r.add(yn((t.qty||0)+s*e,e));[.15,.25,.35,.5,.65,.8,1].forEach(s=>r.add(yn(n*s,e)))}return[...r].filter(s=>s>=0&&s<=n).sort((s,a)=>s-a)}function JC(t,e,n){let i=n.reduce((h,f)=>Ut(h,Zt(f.unitMacro,f.max??0)),ci),r=Ut(t,i),s=t.p>e.p?t.p-e.p:Math.max(0,e.p-r.p),a=t.c>e.c?t.c-e.c:Math.max(0,e.c-r.c),o=t.f>e.f?t.f-e.f:Math.max(0,e.f-r.f),l=Math.max(0,t.kcal-e.kcal-220),c=Math.max(0,e.kcal-r.kcal);return Math.pow(s/6,2)*30+Math.pow(a/22,2)*10+Math.pow(o/7,2)*20+Math.pow(l/110,2)*12+Math.pow(c/160,2)*8+gg(t,e)*.015}function vg(t,e,n,i={}){let r=t.filter(l=>l&&l.unitMacro&&(l.max??0)>0),s=i.beamWidth??520,a=[{choices:[],macro:Us(e||ci),rank:0}];r.forEach((l,c)=>{let h=r.slice(c+1),f=ZC(l),d=[];a.forEach(m=>{f.forEach(y=>{let b=Zt(l.unitMacro,y),g=Ut(m.macro,b),u=JC(g,n,h)+Math.abs(y-(l.qty||0))*5e-4;d.push({choices:[...m.choices,y],macro:g,rank:u})})}),d.sort((m,y)=>m.rank-y.rank),a=d.slice(0,s)});let o=a.reduce((l,c)=>gg(c.macro,n)<gg(l.macro,n)?c:l,a[0]);return r.map((l,c)=>jC(l,o.choices[c]||0)).filter(l=>l.qty>0)}function _g(t){return t.reduce((e,n)=>({...e,[n.key]:{enabled:n.defaultEnabled!==!1,target:n.defaultTarget??0,stock:n.defaultStock??0}}),{})}function dh(t,e){let n=_g(e);return e.reduce((i,r)=>{let s=t?.[r.key]||{},a=r.max??1/0;return i[r.key]={enabled:s.enabled??n[r.key].enabled,target:tt(s.target??n[r.key].target,0,a),stock:tt(s.stock??n[r.key].stock,0,a)},i},{})}function uS(t,e,n=7){let i=dh(e,t),r=tt(n,1,21);return t.map(s=>{let a=i[s.key],o=s.max??1/0,l=tt(a.target,0,o),c=tt(yn(l*r/7,s.step||1),0,o),h=tt(yn(a.stock,s.step||1),0,o),f=a.enabled?tt(yn(Math.max(0,c-h),s.step||1),0,o):0,d=s.unitMacro||ci;return{...s,enabled:a.enabled,weeklyTarget:l,targetQty:c,stockQty:h,buyQty:f,weeklyQty:f,qty:f,unitMacro:d,macro:Zt(d,f),expectedMacro:Zt(d,c),needState:a.enabled&&f>0?"need":"ok"}})}function mg(t,e){return`${ge(t,e==="g"?0:1)}${e}`}function dS(t,e={}){return t.filter(n=>n.enabled&&n.buyQty>0).sort((n,i)=>(e[n.tone]??9)-(e[i.tone]??9)||i.buyQty-n.buyQty).map((n,i)=>{let r=mg(n.targetQty,n.unit),s=mg(n.stockQty,n.unit),a=mg(n.buyQty,n.unit),o=n.buyHint||(n.stockQty>0?`\u5BB6\u91CC\u8FD8\u6709 ${s}\uFF0C\u8865\u5230\u76EE\u6807 ${r}`:`\u672C\u5468\u671F\u76EE\u6807 ${r}`);return{...n,order:i+1,buyText:a,targetText:r,stockText:s,reason:o}})}var v=Ri(Nl(),1),Eg=t=>`./assets/${t}`,SS=t=>Eg(`generated/${t}`),MS=["zh","ja"],Dl={bodyWeightKg:83,proteinPerKg:1.8,fatMinPerKg:.6,kcal:2e3},s2=2900,Nn={p:0,c:0,f:0,kcal:0},yg={zh:{appSub:"\u4ECA\u5929\u600E\u4E48\u5403",navPlan:"\u4ECA\u65E5",navDetail:"\u660E\u7EC6",navShop:"\u91C7\u8D2D",navCheat:"\u653E\u677E",language:"\u8BED\u8A00",zh:"\u4E2D\u6587",ja:"\u65E5\u672C\u8A9E",heroTitle:"\u4ECA\u65E5\u9910\u76D8",heroAccent:"\u8F7B\u8F7B\u677E\u677E\u5B9A\u4E0B\u6765",heroCopy:"\u5148\u628A\u4ECA\u5929\u5DF2\u7ECF\u5403\u8FC7\u7684\u4E1C\u897F\u653E\u8FDB\u6765\uFF0C\u665A\u9910\u3001\u8D64\u5B57\u548C\u91C7\u8D2D\u90FD\u4F1A\u81EA\u52A8\u8DDF\u7740\u7B97\u3002\u754C\u9762\u53EA\u4FDD\u7559\u771F\u6B63\u8981\u64CD\u4F5C\u7684\u90E8\u5206\u3002",profile:"\u76EE\u6807",fuel:"\u8BAD\u7EC3\u524D",snack:"\u989D\u5916",copy:"\u590D\u5236",copying:"\u590D\u5236\u4E2D",copied:"\u5DF2\u590D\u5236",retry:"\u91CD\u8BD5",record:"\u8BB0\u5F55",intake:"\u5DF2\u5403",dinner:"\u665A\u9910",rhythm:"\u8282\u594F",kcal:"\u70ED\u91CF",deficit:"\u8D64\u5B57",todayTotal:"\u4ECA\u65E5\u5408\u8BA1",dinnerKcal:"\u665A\u9910\u70ED\u91CF",noEat:"\u4E0D\u5403",noDrink:"\u4E0D\u559D",off:"OFF",on:"ON",planIntakeEyebrow:"01 \xB7 \u5148\u8BB0\u4ECA\u5929",planIntakeTitle:"\u4ECA\u5929\u5403\u5230\u54EA\u4E86",intakeHubTitle:"\u4ECA\u65E5\u5DF2\u5403",intakeHubSub:"\u5348\u9910\u3001\u8BAD\u7EC3\u524D\u3001\u989D\u5916\u5403\u7684\u90FD\u5728\u4E00\u4E2A\u5730\u65B9\u6539",intakeDrawerTitle:"\u4ECA\u65E5\u5DF2\u5403",intakeDrawerSub:"\u6539\u5B8C\u8FD9\u91CC\uFF0C\u665A\u9910\u4F1A\u81EA\u52A8\u91CD\u65B0\u6536\u53E3",beforeDinnerTotal:"\u665A\u9910\u524D\u5408\u8BA1",editIntake:"\u8C03\u6574\u5DF2\u5403",quickKcal:"\u76F4\u63A5 kcal",tallyMode:"\u70B9\u9009\u8BB0\u8D26",plannedMode:"\u81EA\u52A8\u89C4\u5212",mealSplit:"\u5348\u665A\u6BD4\u4F8B",lunchPlannerTitle:"\u5348\u9910\u60F3\u5403\u4EC0\u4E48",dinnerPlannerTitle:"\u665A\u9910\u60F3\u5403\u4EC0\u4E48",generatedLunch:"\u751F\u6210\u5348\u9910",generatedDinner:"\u751F\u6210\u665A\u9910",lunchShare:"\u5348\u9910\u6BD4\u4F8B",lunchKcal:"\u5348\u9910\u70ED\u91CF",commonPicks:"\u5E38\u7528\u6570\u5B57",planChoiceEyebrow:"02 \xB7 \u665A\u9910\u65B9\u5411",planChoiceTitle:"\u4ECA\u665A\u60F3\u5403\u4EC0\u4E48",advanced:"\u7EC6\u8282\u8BBE\u7F6E",advancedSub:"\u86CB\u767D\u3001\u8102\u80AA\u3001\u6C34\u679C\u3001\u725B\u8089\u8102\u80AA\u548C\u76EE\u6807\u516C\u5F0F",dinnerProtein:"\u665A\u9910\u86CB\u767D",fatSource:"\u8102\u80AA\u6765\u6E90",extras:"\u6C34\u679C / \u9178\u5976",beefFat:"\u725B\u8089\u8102\u80AA",targetFormula:"\u76EE\u6807\u516C\u5F0F",resetDefault:"\u91CD\u7F6E\u9ED8\u8BA4",dinnerAnswerEyebrow:"03 \xB7 \u81EA\u52A8\u7B54\u6848",dinnerAnswerTitle:"\u4ECA\u665A\u5C31\u8FD9\u6837\u5403",resetTune:"\u91CD\u7F6E\u5FAE\u8C03",noDinner:"\u4ECA\u5929\u665A\u9910\u5DF2\u7ECF\u5F88\u8F7B\uFF0C\u5148\u68C0\u67E5\u5348\u9910\u6216\u76EE\u6807",rhythmEyebrow:"04 \xB7 \u4ECA\u65E5\u7ED3\u6784",rhythmTitle:"\u770B\u4E00\u773C\u5C31\u591F",protein:"\u86CB\u767D",carb:"\u78B3\u6C34",fat:"\u8102\u80AA",calorie:"\u70ED\u91CF",carbDay:"\u4ECA\u5929\u78B3\u6C34\u65E5",lowCarb:"\u4F4E\u78B3",mediumCarb:"\u4E2D\u78B3",highCarb:"\u9AD8\u78B3",ledger:"\u4ECA\u65E5\u8D26\u672C",ledgerTitle:"\u5403\u8FDB\u53BB\u7684\u4E1C\u897F",targetByWeight:"\u6309\u4F53\u91CD\u81EA\u52A8\u5206\u914D",structureTitle:"\u5360\u6BD4\u548C\u4F53\u91CD\u500D\u6570",beforeTraining:"\u8BAD\u7EC3\u524D",beforeTrainingTitle:"\u57AB\u4E00\u53E3\u4E5F\u7B97\u8FDB\u53BB",electrolyte:"\u7535\u89E3\u8D28",electrolyteTitle:"\u94BE\u94A0\u522B\u592A\u504F",balanced:"\u5E73\u8861",lowPotassium:"\u94BE\u504F\u4F4E",shopHero:"\u91C7\u8D2D\u6E05\u5355",shopCopy:"\u4E0D\u7528\u81EA\u5DF1\u586B\u3002\u4E0B\u9762\u5DF2\u7ECF\u6309\u8FDB\u5E97\u987A\u5E8F\u5217\u597D\u8FD9\u8F6E\u76F4\u63A5\u4E70\u4EC0\u4E48\uFF0C\u5E93\u5B58\u53EA\u6709\u9700\u8981\u5FAE\u8C03\u65F6\u518D\u6253\u5F00\u3002",cycle:"\u5468\u671F",products:"\u5546\u54C1",picked:"\u5DF2\u62FF",clearStock:"\u6E05\u7A7A\u5DF2\u6709",directPlan:"\u76F4\u63A5\u65B9\u6848",directPlanTitle:"\u7167\u5355\u4E70\u8FD9\u4E9B",nothingToBuy:"\u8FD9\u8F6E\u4E0D\u7528\u4E70",nothingToBuySub:"\u5DF2\u9009\u54C1\u7C7B\u7684\u5BB6\u91CC\u5E93\u5B58\u8986\u76D6\u4E86\u8FD9\u4E2A\u5907\u8D27\u5468\u671F\u3002\u8981\u5F3A\u5236\u751F\u6210\u6E05\u5355\u53EF\u4EE5\u70B9\u201C\u6E05\u7A7A\u5DF2\u6709\u201D\u3002",stockTune:"\u5E93\u5B58\u5FAE\u8C03",stockTuneSub:"\u5E73\u65F6\u4E0D\u7528\u7BA1\uFF1B\u53EA\u6709\u5BB6\u91CC\u8FD8\u6709\u4E1C\u897F\u65F6\u518D\u6539\u76EE\u6807\u548C\u5DF2\u6709",weeklyTarget:"\u5468\u76EE\u6807",stock:"\u5BB6\u91CC\u5DF2\u6709",skip:"\u8DF3\u8FC7",add:"\u52A0\u5165",enough:"\u5DF2\u591F",buy:"\u8865",cheatTitle:"\u60F3\u5403\u4E5F\u80FD\u7B97",cheatResult:"\u5403\u5B8C\u5927\u6982\u8FD9\u6837",cheatKcal:"\u653E\u677E\u70ED\u91CF",clear:"\u6E05\u7A7A",fuelSwitch:"\u8865\u7ED9\u5F00\u5173",fuelSub:"\u8BAD\u7EC3\u524D\u5403\u4EC0\u4E48\u559D\u4EC0\u4E48",fuelPreset:"\u5FEB\u6377\u6A21\u677F",currentState:"\u5F53\u524D\u72B6\u6001",fueled:"\u5DF2\u8865\u7ED9",noFuel:"\u4E0D\u8865\u7ED9",applyNoFuel:"\u6E05\u7A7A\u8BAD\u7EC3\u524D",applyNoFuelSub:"\u4E0D\u5403\u4E5F\u4E0D\u559D",lightFuel:"\u8F7B\u91CF\u6A21\u677F",lightFuelSub:"\u9999\u8549 + \u756A\u8304\u6C41",pineappleBox:"\u83E0\u841D\u76D2",pineappleBoxSub:"240g + \u756A\u8304\u6C41",eatWhat:"\u5403\u4EC0\u4E48",drinkWhat:"\u559D\u4EC0\u4E48",manualCopy:"\u624B\u52A8\u590D\u5236",manualCopySub:"\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u81EA\u52A8\u590D\u5236\uFF0C\u6587\u672C\u5DF2\u7ECF\u9009\u4E2D\u3002\u624B\u673A\u4E0A\u76F4\u63A5\u957F\u6309\u590D\u5236\u4E5F\u53EF\u4EE5\u3002",copyAgain:"\u518D\u590D\u5236\u4E00\u6B21",snackTitle:"\u989D\u5916\u8BB0\u5F55",snackSub:"\u81EA\u5DF1\u586B\u4E00\u4E0B\u4E5F\u884C",snackName:"\u540D\u79F0",noSnack:"\u6CA1\u6709\u989D\u5916",manualSnack:"\u4E34\u65F6\u8BB0\u5F55",dinnerWillClose:"\u665A\u9910\u4F1A\u8DDF\u7740\u6536\u53E3",clearSnack:"\u6E05\u9664\u8BB0\u5F55",bodyWeight:"\u4F53\u91CD",proteinRatio:"\u86CB\u767D\u500D\u7387",fatMin:"\u8102\u80AA\u6700\u4F4E",tdee:"TDEE",proteinTarget:"\u86CB\u767D\u76EE\u6807",fatTarget:"\u8102\u80AA\u6700\u4F4E",carbRemainder:"\u5269\u4F59\u78B3\u6C34",carbRemainderSub:"\u70ED\u91CF\u6263\u5B8C P/F \u540E\u5168\u7ED9\u78B3\u6C34",proteinCalories:"\u86CB\u767D\u70ED\u91CF",carbCalories:"\u78B3\u6C34\u70ED\u91CF",fatCalories:"\u8102\u80AA\u70ED\u91CF",carbJudge:"\u4F4E\u78B3\u5224\u65AD",lunch:"\u5348\u9910",preTraining:"\u8BAD\u7EC3\u524D",drinkElectrolyte:"\u996E\u6599/\u7535\u89E3\u8D28",snackMeal:"\u989D\u5916\u8BB0\u5F55",sauce:"\u996E\u6599",salt:"\u76D0",foodK:"\u98DF\u7269\u94BE",actual:"\u5B9E\u9645",target:"\u76EE\u6807",adjust:"\u8C03\u6574"},ja:{appSub:"\u4ECA\u65E5\u306E\u3054\u306F\u3093",navPlan:"\u4ECA\u65E5",navDetail:"\u8A73\u7D30",navShop:"\u8CB7\u3044\u7269",navCheat:"\u3054\u307B\u3046\u3073",language:"\u8A00\u8A9E",zh:"\u4E2D\u6587",ja:"\u65E5\u672C\u8A9E",heroTitle:"\u4ECA\u65E5\u306E\u3054\u306F\u3093",heroAccent:"\u3075\u3093\u308F\u308A\u6C7A\u3081\u308B",heroCopy:"\u98DF\u3079\u305F\u3082\u306E\u3092\u5165\u308C\u308B\u3060\u3051\u3002\u5915\u98DF\u3001\u88DC\u7D66\u3001\u8D64\u5B57\u3001\u8CB7\u3044\u7269\u30EA\u30B9\u30C8\u307E\u3067\u4E00\u679A\u306E\u30AB\u30FC\u30C9\u3067\u6574\u3048\u307E\u3059\u3002",profile:"\u76EE\u6A19",fuel:"\u904B\u52D5\u524D",snack:"\u8FFD\u52A0",copy:"\u30B3\u30D4\u30FC",copying:"\u30B3\u30D4\u30FC\u4E2D",copied:"\u30B3\u30D4\u30FC\u6E08\u307F",retry:"\u518D\u8A66\u884C",record:"\u8A18\u9332",intake:"\u98DF\u3079\u305F\u3082\u306E",dinner:"\u5915\u98DF",rhythm:"\u30D0\u30E9\u30F3\u30B9",kcal:"\u30AB\u30ED\u30EA\u30FC",deficit:"\u8D64\u5B57",todayTotal:"\u4ECA\u65E5\u306E\u5408\u8A08",dinnerKcal:"\u5915\u98DF\u30AB\u30ED\u30EA\u30FC",noEat:"\u98DF\u3079\u306A\u3044",noDrink:"\u98F2\u307E\u306A\u3044",off:"OFF",on:"ON",planIntakeEyebrow:"01 \xB7 \u307E\u305A\u8A18\u9332",planIntakeTitle:"\u98DF\u3079\u305F\u3082\u306E",intakeHubTitle:"\u4ECA\u65E5\u98DF\u3079\u305F\u3082\u306E",intakeHubSub:"\u663C\u98DF\u3001\u904B\u52D5\u524D\u3001\u8FFD\u52A0\u5206\u3092\u3053\u3053\u3067\u307E\u3068\u3081\u3066\u8ABF\u6574",intakeDrawerTitle:"\u4ECA\u65E5\u98DF\u3079\u305F\u3082\u306E",intakeDrawerSub:"\u3053\u3053\u3092\u5909\u3048\u308B\u3068\u5915\u98DF\u304C\u81EA\u52D5\u3067\u8ABF\u6574\u3055\u308C\u307E\u3059",beforeDinnerTotal:"\u5915\u98DF\u524D\u306E\u5408\u8A08",editIntake:"\u98DF\u3079\u305F\u3082\u306E\u8ABF\u6574",quickKcal:"kcal \u3060\u3051",tallyMode:"\u98DF\u6750\u3067\u8A18\u9332",plannedMode:"\u81EA\u52D5\u30D7\u30E9\u30F3",mealSplit:"\u663C\u591C\u6BD4\u7387",lunchPlannerTitle:"\u663C\u98DF\u3067\u98DF\u3079\u305F\u3044\u3082\u306E",dinnerPlannerTitle:"\u5915\u98DF\u3067\u98DF\u3079\u305F\u3044\u3082\u306E",generatedLunch:"\u663C\u98DF\u30D7\u30E9\u30F3",generatedDinner:"\u5915\u98DF\u30D7\u30E9\u30F3",lunchShare:"\u663C\u98DF\u6BD4\u7387",lunchKcal:"\u663C\u98DF\u30AB\u30ED\u30EA\u30FC",commonPicks:"\u3088\u304F\u4F7F\u3046\u6570\u5B57",planChoiceEyebrow:"02 \xB7 \u5915\u98DF\u306E\u6C17\u5206",planChoiceTitle:"\u4ECA\u591C\u306A\u306B\u98DF\u3079\u308B",advanced:"\u3053\u307E\u304B\u3044\u8A2D\u5B9A",advancedSub:"\u305F\u3093\u3071\u304F\u8CEA\u3001\u8102\u8CEA\u3001\u679C\u7269\u3001\u725B\u8102\u3001\u76EE\u6A19\u5F0F",dinnerProtein:"\u5915\u98DF\u305F\u3093\u3071\u304F",fatSource:"\u8102\u8CEA\u30BD\u30FC\u30B9",extras:"\u679C\u7269 / \u30E8\u30FC\u30B0\u30EB\u30C8",beefFat:"\u725B\u8089\u8102\u8CEA",targetFormula:"\u76EE\u6A19\u5F0F",resetDefault:"\u521D\u671F\u5024\u306B\u623B\u3059",dinnerAnswerEyebrow:"03 \xB7 \u81EA\u52D5\u30D7\u30E9\u30F3",dinnerAnswerTitle:"\u5915\u98DF\u306F\u3053\u308C\u3067\u3044\u304F",resetTune:"\u5FAE\u8ABF\u6574\u3092\u623B\u3059",noDinner:"\u5915\u98DF\u304C\u304B\u306A\u308A\u8EFD\u3044\u3067\u3059\u3002\u663C\u98DF\u304B\u76EE\u6A19\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",rhythmEyebrow:"04 \xB7 \u4ECA\u65E5\u306E\u69CB\u6210",rhythmTitle:"\u3053\u3053\u3060\u3051\u898B\u308C\u3070OK",protein:"\u305F\u3093\u3071\u304F",carb:"\u70AD\u6C34\u5316\u7269",fat:"\u8102\u8CEA",calorie:"\u30AB\u30ED\u30EA\u30FC",carbDay:"\u4ECA\u65E5\u306E\u70AD\u6C34\u5316\u7269",lowCarb:"\u4F4E\u70AD\u6C34",mediumCarb:"\u4E2D\u70AD\u6C34",highCarb:"\u9AD8\u70AD\u6C34",ledger:"\u4ECA\u65E5\u306E\u5E33\u7C3F",ledgerTitle:"\u98DF\u3079\u305F\u3082\u306E\u4E00\u89A7",targetByWeight:"\u4F53\u91CD\u304B\u3089\u81EA\u52D5\u914D\u5206",structureTitle:"\u5272\u5408\u3068\u4F53\u91CD\u500D\u7387",beforeTraining:"\u904B\u52D5\u524D",beforeTrainingTitle:"\u5C11\u3057\u98DF\u3079\u3066\u3082\u8A08\u7B97",electrolyte:"\u96FB\u89E3\u8CEA",electrolyteTitle:"\u30AB\u30EA\u30A6\u30E0\u3068\u30CA\u30C8\u30EA\u30A6\u30E0",balanced:"\u30D0\u30E9\u30F3\u30B9",lowPotassium:"K \u5C11\u306A\u3081",shopHero:"\u8CB7\u3044\u7269\u30EA\u30B9\u30C8",shopCopy:"\u5165\u529B\u3057\u306A\u304F\u3066OK\u3002\u5E97\u5185\u3067\u53D6\u308B\u9806\u756A\u306B\u3001\u4ECA\u56DE\u8CB7\u3046\u3082\u306E\u3092\u305D\u306E\u307E\u307E\u51FA\u3057\u307E\u3059\u3002\u5E93\u5B58\u306F\u5FC5\u8981\u306A\u3068\u304D\u3060\u3051\u8ABF\u6574\u3002",cycle:"\u5468\u671F",products:"\u54C1\u76EE",picked:"\u53D6\u3063\u305F",clearStock:"\u5728\u5EAB\u30920\u306B\u3059\u308B",directPlan:"\u8CB7\u3046\u3082\u306E",directPlanTitle:"\u3053\u306E\u307E\u307E\u8CB7\u3046",nothingToBuy:"\u4ECA\u56DE\u306F\u8CB7\u308F\u306A\u304F\u3066OK",nothingToBuySub:"\u9078\u629E\u4E2D\u306E\u54C1\u76EE\u306F\u5728\u5EAB\u3067\u8DB3\u308A\u3066\u3044\u307E\u3059\u3002\u30EA\u30B9\u30C8\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u306F\u5728\u5EAB\u30920\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",stockTune:"\u5728\u5EAB\u8ABF\u6574",stockTuneSub:"\u666E\u6BB5\u306F\u89E6\u3089\u306A\u304F\u3066OK\u3002\u5BB6\u306B\u6B8B\u3063\u3066\u3044\u308B\u3082\u306E\u304C\u3042\u308B\u6642\u3060\u3051\u3002",weeklyTarget:"\u9031\u76EE\u6A19",stock:"\u5BB6\u306E\u5728\u5EAB",skip:"\u5916\u3059",add:"\u8FFD\u52A0",enough:"\u8DB3\u308A\u308B",buy:"\u8CB7\u3046",cheatTitle:"\u98DF\u3079\u305F\u3044\u65E5\u3082\u8A08\u7B97",cheatResult:"\u98DF\u3079\u305F\u5F8C\u306E\u898B\u8FBC\u307F",cheatKcal:"\u3054\u307B\u3046\u3073 kcal",clear:"\u30AF\u30EA\u30A2",fuelSwitch:"\u88DC\u7D66\u30B9\u30A4\u30C3\u30C1",fuelSub:"\u904B\u52D5\u524D\u306B\u98DF\u3079\u308B/\u98F2\u3080\u3082\u306E",fuelPreset:"\u30AF\u30A4\u30C3\u30AF\u8A2D\u5B9A",currentState:"\u73FE\u5728",fueled:"\u88DC\u7D66\u3042\u308A",noFuel:"\u88DC\u7D66\u306A\u3057",applyNoFuel:"\u904B\u52D5\u524D\u3092\u30AF\u30EA\u30A2",applyNoFuelSub:"\u98DF\u3079\u306A\u3044\u30FB\u98F2\u307E\u306A\u3044",lightFuel:"\u8EFD\u3081\u30BB\u30C3\u30C8",lightFuelSub:"\u30D0\u30CA\u30CA + \u30C8\u30DE\u30C8\u30B8\u30E5\u30FC\u30B9",pineappleBox:"\u30D1\u30A4\u30F3\u88DC\u7D66",pineappleBoxSub:"240g + \u30C8\u30DE\u30C8\u30B8\u30E5\u30FC\u30B9",eatWhat:"\u98DF\u3079\u308B\u3082\u306E",drinkWhat:"\u98F2\u3080\u3082\u306E",manualCopy:"\u624B\u52D5\u30B3\u30D4\u30FC",manualCopySub:"\u30D6\u30E9\u30A6\u30B6\u304C\u81EA\u52D5\u30B3\u30D4\u30FC\u3092\u6B62\u3081\u307E\u3057\u305F\u3002\u30C6\u30AD\u30B9\u30C8\u306F\u9078\u629E\u6E08\u307F\u306A\u306E\u3067\u3001\u30B9\u30DE\u30DB\u3067\u306F\u9577\u62BC\u3057\u3067\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3059\u3002",copyAgain:"\u3082\u3046\u4E00\u5EA6\u30B3\u30D4\u30FC",snackTitle:"\u8FFD\u52A0\u5206\u3092\u8A18\u9332",snackSub:"\u3056\u3063\u304F\u308A\u5165\u529B\u3067OK",snackName:"\u540D\u524D",noSnack:"\u8FFD\u52A0\u306A\u3057",manualSnack:"\u624B\u5165\u529B\u306E\u8FFD\u52A0\u5206",dinnerWillClose:"\u5915\u98DF\u304C\u81EA\u52D5\u3067\u8ABF\u6574\u3055\u308C\u307E\u3059",clearSnack:"\u8A18\u9332\u3092\u6D88\u3059",bodyWeight:"\u4F53\u91CD",proteinRatio:"\u305F\u3093\u3071\u304F\u500D\u7387",fatMin:"\u8102\u8CEA\u6700\u4F4E",tdee:"TDEE",proteinTarget:"\u305F\u3093\u3071\u304F\u76EE\u6A19",fatTarget:"\u8102\u8CEA\u6700\u4F4E",carbRemainder:"\u6B8B\u308A\u3092\u70AD\u6C34\u5316\u7269\u3078",carbRemainderSub:"P/F \u3092\u5F15\u3044\u305F\u6B8B\u308A\u306E kcal \u3092\u70AD\u6C34\u5316\u7269\u306B\u914D\u5206",proteinCalories:"\u305F\u3093\u3071\u304F kcal",carbCalories:"\u70AD\u6C34\u5316\u7269 kcal",fatCalories:"\u8102\u8CEA kcal",carbJudge:"\u4F4E\u70AD\u6C34\u5224\u5B9A",lunch:"\u663C\u98DF",preTraining:"\u904B\u52D5\u524D",drinkElectrolyte:"\u98F2\u307F\u7269/\u96FB\u89E3\u8CEA",snackMeal:"\u8FFD\u52A0\u5206",sauce:"\u98F2\u307F\u7269",salt:"\u5869",foodK:"\u98DF\u4E8BK",actual:"\u5B9F\u969B",target:"\u76EE\u6A19",adjust:"\u8ABF\u6574"}},zs={pasta:{name:"\u610F\u9762 \xB7 Garlic oil",short:"\u610F\u9762",sub:"\u529B\u91CF\u65E5\u6700\u723D",unit:"g",step:10,perUnit:{p:.12,c:.71,f:.015},kcalUnit:3.55,color:"#ffb86b",ja:{name:"\u30D1\u30B9\u30BF \xB7 \u30AC\u30FC\u30EA\u30C3\u30AF\u30AA\u30A4\u30EB",short:"\u30D1\u30B9\u30BF",sub:"\u3057\u3063\u304B\u308A\u98DF\u3079\u308B\u65E5"}},soba:{name:"\u835E\u9EA6\u9762 \xB7 Soba",short:"\u835E\u9EA6",sub:"\u6E05\u723D\u4F4E\u8D1F\u62C5",unit:"g",step:10,perUnit:{p:.14,c:.66,f:.023},kcalUnit:3.44,color:"#86c9a9",ja:{name:"\u305D\u3070 \xB7 Soba",short:"\u305D\u3070",sub:"\u8EFD\u304F\u3066\u843D\u3061\u7740\u304F"}},nissin:{name:"\u65E5\u6E05\u975E\u6CB9\u70B8",short:"\u65E5\u6E05",sub:"\u61D2\u4EBA\u6C64\u9762",unit:"\u5305",step:1,perUnit:{p:6.7,c:55,f:4.9},kcalUnit:291,color:"#ff9d91",ja:{name:"\u65E5\u6E05\u30CE\u30F3\u30D5\u30E9\u30A4",short:"\u65E5\u6E05",sub:"\u6642\u9593\u304C\u306A\u3044\u65E5"}},fresh_noodle:{name:"\u51B7\u85CF\u9C9C\u9762 \xB7 \u751F\u30E9\u30FC\u30E1\u30F3",short:"\u9C9C\u9762",sub:"\u51B7\u85CF\u67DC\u65E0\u8C03\u5473\u5305",unit:"g",step:10,perUnit:{p:.0869,c:.5469,f:.0123,kcal:2.623},kcalUnit:2.623,color:"#f1c47b",ja:{name:"\u51B7\u8535\u751F\u9EBA \xB7 \u8ABF\u5473\u306A\u3057",short:"\u751F\u9EBA",sub:"10g \u5358\u4F4D\u3067\u8ABF\u6574"}},banana:{name:"\u9999\u8549",short:"\u9999\u8549",sub:"\u6309\u6574\u6839\u8865\u78B3\u6C34",unit:"\u6839",step:1,max:8,perUnit:{p:1,c:27,f:.25,kcal:114},kcalUnit:114,color:"#f4cf58",ja:{name:"\u30D0\u30CA\u30CA",short:"\u30D0\u30CA\u30CA",unit:"\u672C",sub:"1\u672C\u5358\u4F4D\u3067\u8ABF\u6574"}},rice_dry:{name:"\u767D\u7C73 \xB7 \u751F\u7C73\u5E72\u91CD",short:"\u767D\u7C73",sub:"\u716E\u996D\u524D\u79F0\u91CD",unit:"g",step:10,perUnit:{p:.061,c:.776,f:.009,kcal:3.42},kcalUnit:3.42,color:"#d9d4c8",ja:{name:"\u7CBE\u767D\u7C73 \xB7 \u751F\u7C73",short:"\u767D\u7C73",sub:"\u708A\u98EF\u524D\u306E\u91CD\u91CF"}},pho:{name:"\u8D8A\u5357\u7C73\u7C89",short:"\u7C73\u7C89",sub:"\u4F4E\u8102\u6362\u53E3\u5473",unit:"\u5305",step:1,perUnit:{p:4,c:43,f:2},kcalUnit:210,color:"#86d8df",ja:{name:"\u30D5\u30A9\u30FC",short:"\u30D5\u30A9\u30FC",sub:"\u4F4E\u8102\u8CEA\u3067\u5909\u5316"}},bifun:{name:"\u7EAF\u5E72\u7C73\u7C89",short:"\u5E72\u7C73\u7C89",sub:"\u7EAF\u78B3\u6C34\u8865\u6EE1",unit:"g",step:10,perUnit:{p:.06,c:.79,f:.005},kcalUnit:3.45,color:"#f5d66b",ja:{name:"\u4E7E\u71E5\u30D3\u30FC\u30D5\u30F3",short:"\u30D3\u30FC\u30D5\u30F3",sub:"\u70AD\u6C34\u5316\u7269\u3092\u8DB3\u3059"}}},gh={beef:{label:"\u725B\u8089\u5207\u308A\u843D\u3068\u3057",short:"\u725B\u8089",tag:"raw \xB7 per g",unit:"g",step:10,p:.19,c:0,max:650,note:"\u8102\u80AA\u6309\u5305\u88C5\u6821\u51C6",ja:{label:"\u725B\u8089\u5207\u308A\u843D\u3068\u3057",short:"\u725B\u8089",note:"\u8102\u8CEA\u306F\u5305\u88C5\u3067\u8ABF\u6574"}},chicken:{label:"\u901F\u98DF\u9E21\u80F8",short:"\u9E21\u80F8",tag:"per pack",unit:"\u5757",step:1,p:22,c:1,f:2,max:6,note:"\u6700\u7A33\u9AD8\u86CB\u767D",ja:{label:"\u30B5\u30E9\u30C0\u30C1\u30AD\u30F3",short:"\u30C1\u30AD\u30F3",unit:"\u500B",note:"\u5B89\u5B9A\u306E\u9AD8\u305F\u3093\u3071\u304F"}},duck:{label:"\u5408\u9E2D\u80F8\u53BB\u76AE",short:"\u5408\u9E2D",tag:"100g serve",unit:"\u4EFD",step:1,p:21,c:.5,f:6,max:4,note:"\u9999\u4F46\u4E0D\u592A\u80A5",ja:{label:"\u5408\u9D28\u3080\u306D\u76AE\u306A\u3057",short:"\u5408\u9D28",unit:"\u76BF",note:"\u9999\u308A\u304C\u3042\u3063\u3066\u8EFD\u3081"}},kfc:{label:"KFC \u539F\u5473\u9E21",short:"KFC",tag:"per piece",unit:"\u5757",step:1,p:18,c:8,f:14,max:5,note:"\u723D\uFF0C\u4F46\u76D0\u9AD8",ja:{label:"KFC \u30AA\u30EA\u30B8\u30CA\u30EB\u30C1\u30AD\u30F3",short:"KFC",unit:"\u500B",note:"\u6E80\u8DB3\u611F\u3042\u308A\u3001\u5869\u5206\u9AD8\u3081"}}},xh={egg_fried:{label:"\u714E\u86CB",short:"\u714E\u86CB",unit:"\u4E2A",step:1,p:6,c:.4,f:7,max:6,ja:{label:"\u76EE\u7389\u713C\u304D",short:"\u5375",unit:"\u500B"}},sauce:{label:"\u30DA\u30DA\u30ED\u30F3\u9171",short:"\u849C\u6CB9\u9171",unit:"\u5305",step:1,p:.9,c:1.5,f:10,max:2,ja:{label:"\u30DA\u30DA\u30ED\u30F3\u30BD\u30FC\u30B9",short:"\u30BD\u30FC\u30B9",unit:"\u888B"}},olive:{label:"\u6A44\u6984\u6CB9",short:"\u6A44\u6984\u6CB9",unit:"\u5C0F\u52FA",step:1,p:0,c:0,f:4.5,max:6,ja:{label:"\u30AA\u30EA\u30FC\u30D6\u30AA\u30A4\u30EB",short:"\u30AA\u30A4\u30EB",unit:"\u5C0F\u3055\u3058"}},nuts:{label:"\u7D20\u713C\u304D\u30CA\u30C3\u30C4",short:"\u575A\u679C",unit:"10g",step:1,p:2,c:2,f:5,max:5,ja:{label:"\u7D20\u713C\u304D\u30CA\u30C3\u30C4",short:"\u30CA\u30C3\u30C4"}},cheese_bite:{label:"\u5C0F\u829D\u58EB",short:"\u829D\u58EB",unit:"\u4E2A",step:1,p:2.6,c:.4,f:3.4,kcal:43,max:8,ja:{label:"\u30D9\u30D3\u30FC\u30C1\u30FC\u30BA",short:"\u30C1\u30FC\u30BA",unit:"\u500B"}},avocado:{label:"\u30A2\u30DC\u30AB\u30C9",short:"\u725B\u6CB9\u679C",unit:"\u534A\u4E2A",step:1,p:1,c:4,f:15,max:2,ja:{label:"\u30A2\u30DC\u30AB\u30C9",short:"\u30A2\u30DC\u30AB\u30C9",unit:"\u534A\u5206"}}},ui={banana:{label:"\u9999\u8549",unit:"\u6839",step:1,max:4,p:1,c:27,f:.3,ja:{label:"\u30D0\u30CA\u30CA",unit:"\u672C"}},apple:{label:"\u82F9\u679C",unit:"\u4E2A",step:1,max:3,p:.4,c:35,f:.3,ja:{label:"\u308A\u3093\u3054",unit:"\u500B"}},kiwi:{label:"\u5947\u5F02\u679C",unit:"\u4E2A",step:1,max:4,p:1,c:14,f:.2,ja:{label:"\u30AD\u30A6\u30A4",unit:"\u500B"}},pineapple:{label:"\u5207\u5757\u83E0\u841D 240g",unit:"\u76D2",step:1,max:2,p:1.44,c:31.2,f:.24,ja:{label:"\u30AB\u30C3\u30C8\u30D1\u30A4\u30F3 240g",unit:"\u76D2"}},yogurt:{label:"\u65E0\u7CD6\u9178\u5976",unit:"g",step:50,max:400,p:.036,c:.049,f:.03,ja:{label:"\u7121\u7CD6\u30E8\u30FC\u30B0\u30EB\u30C8"}}},bS=[{key:"beef",tone:"red",source:"protein",sourceKey:"beef",label:"\u725B\u8089\u5207\u308A\u843D\u3068\u3057",short:"\u725B\u8089",unit:"g",step:100,defaultTarget:1200,max:3e3,buyHint:"\u665A\u9910\u4E3B\u86CB\u767D\uFF0C\u5148\u62FF\u8FD9\u4E2A",ja:{label:"\u725B\u8089\u5207\u308A\u843D\u3068\u3057",short:"\u725B\u8089",buyHint:"\u5915\u98DF\u306E\u4E3B\u5F79\u3002\u307E\u305A\u53D6\u308B"}},{key:"chicken",tone:"red",source:"protein",sourceKey:"chicken",label:"\u901F\u98DF\u9E21\u80F8",short:"\u9E21\u80F8",unit:"\u5757",step:1,defaultTarget:3,max:12,buyHint:"\u61D2\u4EBA\u5907\u7528\u86CB\u767D",ja:{label:"\u30B5\u30E9\u30C0\u30C1\u30AD\u30F3",short:"\u30C1\u30AD\u30F3",unit:"\u500B",buyHint:"\u5FD9\u3057\u3044\u65E5\u306E\u305F\u3093\u3071\u304F\u8CEA"}},{key:"pasta",tone:"green",source:"carb",sourceKey:"pasta",label:"\u5E72\u610F\u9762",short:"\u610F\u9762",unit:"g",step:100,defaultTarget:500,max:2e3,buyHint:"\u4E3B\u529B\u665A\u9910\u78B3\u6C34",ja:{label:"\u4E7E\u71E5\u30D1\u30B9\u30BF",short:"\u30D1\u30B9\u30BF",buyHint:"\u5915\u98DF\u306E\u4E3B\u529B\u70AD\u6C34\u5316\u7269"}},{key:"soba",tone:"green",source:"carb",sourceKey:"soba",label:"\u835E\u9EA6\u9762",short:"\u835E\u9EA6",unit:"g",step:100,defaultTarget:400,max:1600,buyHint:"\u6E05\u723D\u6362\u53E3\u5473",ja:{label:"\u305D\u3070",short:"\u305D\u3070",buyHint:"\u8EFD\u304F\u5473\u5909\u3067\u304D\u308B"}},{key:"nissin",tone:"green",source:"carb",sourceKey:"nissin",label:"\u65E5\u6E05\u975E\u6CB9\u70B8",short:"\u65E5\u6E05",unit:"\u5305",step:1,defaultTarget:2,max:10,buyHint:"\u6CA1\u65F6\u95F4\u65F6\u9876\u4E0A",ja:{label:"\u65E5\u6E05\u30CE\u30F3\u30D5\u30E9\u30A4",short:"\u65E5\u6E05",unit:"\u888B",buyHint:"\u6642\u9593\u304C\u306A\u3044\u65E5\u306E\u4FDD\u967A"}},{key:"fresh_noodle",tone:"green",source:"carb",sourceKey:"fresh_noodle",label:"\u51B7\u85CF\u9C9C\u9762",short:"\u9C9C\u9762",unit:"g",step:10,defaultTarget:400,max:2e3,buyHint:"\u51B7\u85CF\u67DC\u65E0\u8C03\u5473\u5305\uFF0C\u6309 10g \u7B97",ja:{label:"\u51B7\u8535\u751F\u9EBA",short:"\u751F\u9EBA",buyHint:"\u8ABF\u5473\u306A\u3057\u300210g \u5358\u4F4D\u3067\u8CB7\u3046"}},{key:"pineapple",tone:"gold",source:"extra",sourceKey:"pineapple",label:"\u83E0\u841D 240g",short:"\u83E0\u841D",unit:"\u76D2",step:1,defaultTarget:2,max:8,buyHint:"\u8BAD\u7EC3\u524D\u540E\u76F4\u63A5\u5403",ja:{label:"\u30AB\u30C3\u30C8\u30D1\u30A4\u30F3 240g",short:"\u30D1\u30A4\u30F3",unit:"\u76D2",buyHint:"\u904B\u52D5\u524D\u5F8C\u306B\u305D\u306E\u307E\u307E\u98DF\u3079\u308B"}},{key:"banana",tone:"gold",source:"extra",sourceKey:"banana",label:"\u9999\u8549",short:"\u9999\u8549",unit:"\u6839",step:1,defaultTarget:4,max:14,buyHint:"\u5FEB\u901F\u8865\u78B3\u6C34",ja:{label:"\u30D0\u30CA\u30CA",short:"\u30D0\u30CA\u30CA",unit:"\u672C",buyHint:"\u3059\u3050\u8DB3\u305B\u308B\u70AD\u6C34\u5316\u7269"}},{key:"apple",tone:"gold",source:"extra",sourceKey:"apple",label:"\u82F9\u679C",short:"\u82F9\u679C",unit:"\u4E2A",step:1,defaultTarget:2,max:10,buyHint:"\u9876\u9965\u6C34\u679C",ja:{label:"\u308A\u3093\u3054",short:"\u308A\u3093\u3054",unit:"\u500B",buyHint:"\u304A\u8179\u306B\u305F\u307E\u308B\u679C\u7269"}},{key:"egg_fried",tone:"amber",source:"fat",sourceKey:"egg_fried",label:"\u9E21\u86CB",short:"\u9E21\u86CB",unit:"\u4E2A",step:1,defaultTarget:6,max:20,defaultEnabled:!1,buyHint:"\u8865\u8102\u80AA\u548C\u53E3\u611F",ja:{label:"\u5375",short:"\u5375",unit:"\u500B",buyHint:"\u8102\u8CEA\u3068\u6E80\u8DB3\u611F\u3092\u8DB3\u3059"}},{key:"sauce",tone:"amber",source:"fat",sourceKey:"sauce",label:"\u30DA\u30DA\u30ED\u30F3\u9171",short:"\u849C\u6CB9\u9171",unit:"\u5305",step:1,defaultTarget:3,max:12,defaultEnabled:!1,buyHint:"\u610F\u9762\u76F4\u63A5\u597D\u5403",ja:{label:"\u30DA\u30DA\u30ED\u30F3\u30BD\u30FC\u30B9",short:"\u30BD\u30FC\u30B9",unit:"\u888B",buyHint:"\u30D1\u30B9\u30BF\u304C\u3059\u3050\u304A\u3044\u3057\u3044"}},{key:"nuts",tone:"amber",source:"fat",sourceKey:"nuts",label:"\u7D20\u713C\u304D\u30CA\u30C3\u30C4",short:"\u575A\u679C",unit:"10g",step:1,defaultTarget:4,max:20,defaultEnabled:!1,buyHint:"\u5C11\u91CF\u8102\u80AA\u5907\u7528",ja:{label:"\u7D20\u713C\u304D\u30CA\u30C3\u30C4",short:"\u30CA\u30C3\u30C4",buyHint:"\u5C11\u91CF\u8102\u8CEA\u306E\u4FDD\u967A"}},{key:"cheese_bite",tone:"amber",source:"fat",sourceKey:"cheese_bite",label:"\u5C0F\u829D\u58EB",short:"\u829D\u58EB",unit:"\u4E2A",step:1,defaultTarget:6,max:24,defaultEnabled:!1,buyHint:"\u6BCF\u4E2A 43kcal\uFF0C\u5C11\u91CF\u8865\u8102\u80AA",ja:{label:"\u30D9\u30D3\u30FC\u30C1\u30FC\u30BA",short:"\u30C1\u30FC\u30BA",unit:"\u500B",buyHint:"1\u500B43kcal\u3002\u5C11\u91CF\u8102\u8CEA\u306B"}}],wS={chicken:{label:"\u9E21\u80F8",unit:"\u5757",step:1,max:10,p:22,c:1,f:2,ja:{label:"\u30C1\u30AD\u30F3",unit:"\u500B"}},egg:{label:"\u5168\u86CB",unit:"\u4E2A",step:1,max:10,p:6,c:.5,f:5,ja:{label:"\u5375",unit:"\u500B"}},onigiri:{label:"\u996D\u56E2",unit:"\u4E2A",step:1,max:6,p:3,c:39,f:.5,ja:{label:"\u304A\u306B\u304E\u308A",unit:"\u500B"}},nissin:{label:"\u65E5\u6E05\u9762",unit:"\u5305",step:1,max:4,p:6.7,c:55,f:4.9,ja:{label:"\u65E5\u6E05\u9EBA",unit:"\u888B"}},rice:{label:"\u7C73\u996D",unit:"g",step:50,max:1e3,p:.026,c:.28,f:.003,ja:{label:"\u3054\u306F\u3093"}},beef:{label:"\u725B\u8089",unit:"g",step:50,max:600,p:.19,c:0,f:.072,ja:{label:"\u725B\u8089"}},pasta:{label:"\u5E72\u610F\u9762",unit:"g",step:50,max:300,p:.12,c:.71,f:.015,ja:{label:"\u4E7E\u71E5\u30D1\u30B9\u30BF"}},fresh_noodle:{label:"\u51B7\u85CF\u9C9C\u9762",unit:"g",step:10,max:600,p:.0869,c:.5469,f:.0123,kcal:2.623,ja:{label:"\u51B7\u8535\u751F\u9EBA"}},banana:{label:"\u9999\u8549",unit:"\u6839",step:1,max:4,p:1,c:27,f:.25,ja:{label:"\u30D0\u30CA\u30CA",unit:"\u672C"}}},vh={chicken:{label:"\u9E21\u80F8",unit:"\u5757",step:1,max:5,p:22,c:1,f:2,ja:{label:"\u30C1\u30AD\u30F3",unit:"\u500B"}},eggs:{label:"\u5168\u86CB",unit:"\u4E2A",step:1,max:6,p:6,c:.5,f:5,ja:{label:"\u5375",unit:"\u500B"}},banana:{label:"\u9999\u8549",unit:"\u6839",step:1,max:4,p:1,c:27,f:.25,ja:{label:"\u30D0\u30CA\u30CA",unit:"\u672C"}},pineapple:{label:"\u83E0\u841D 240g",unit:"\u76D2",step:1,max:2,p:1.44,c:31.2,f:.24,ja:{label:"\u30AB\u30C3\u30C8\u30D1\u30A4\u30F3 240g",unit:"\u76D2"}}},ks={tomato:{label:"\u65E0\u76D0\u756A\u8304\u6C41",sub:"K 600 / 200ml",p:1.8,c:7.1,f:0,kcal:39,k:600,na:5,ja:{label:"\u7121\u5869\u30C8\u30DE\u30C8\u30B8\u30E5\u30FC\u30B9",sub:"K 600 / 200ml"}},yasai:{label:"\u91CE\u83DC\u4E00\u65E5",sub:"K 740 / 200ml",p:3,c:14.5,f:0,kcal:75,k:740,na:80,ja:{label:"\u91CE\u83DC\u4E00\u65E5",sub:"K 740 / 200ml"}},none:{label:"\u4E0D\u8865\u94BE",sub:"\u4ECA\u5929\u7701\u4E86",p:0,c:0,f:0,kcal:0,k:0,na:0,ja:{label:"\u88DC\u7D66\u306A\u3057",sub:"\u4ECA\u65E5\u306F\u306A\u3057"}}},ES=[{id:"burger",label:"\u6C49\u5821 + \u85AF\u6761",kcal:980,ja:{label:"\u30D0\u30FC\u30AC\u30FC + \u30DD\u30C6\u30C8"}},{id:"ramen",label:"\u62C9\u9762 + \u996D",kcal:1200,ja:{label:"\u30E9\u30FC\u30E1\u30F3 + \u3054\u306F\u3093"}},{id:"sushi",label:"\u56DE\u8F6C\u5BFF\u53F8 12 \u76BF",kcal:1050,ja:{label:"\u56DE\u8EE2\u5BFF\u53F8 12\u76BF"}},{id:"pizza",label:"Pizza \u534A\u5F20",kcal:1150,ja:{label:"\u30D4\u30B6 \u534A\u5206"}},{id:"dessert",label:"\u751C\u54C1\u5976\u8336",kcal:620,ja:{label:"\u30C7\u30B6\u30FC\u30C8 + \u30DF\u30EB\u30AF\u30C6\u30A3\u30FC"}},{id:"katsu",label:"\u70B8\u732A\u6392\u5496\u55B1",kcal:1450,ja:{label:"\u30AB\u30C4\u30AB\u30EC\u30FC"}}],a2=[{id:"plan",labelKey:"navPlan",icon:uh},{id:"detail",labelKey:"navDetail",icon:Ya},{id:"shop",labelKey:"navShop",icon:Il},{id:"cheat",labelKey:"navCheat",icon:ch}];function o2(t){let e=yg[t]||yg.zh;return n=>e[n]??yg.zh[n]??n}function Sn(t,e){return t&&(e==="ja"&&t.ja?{...t,...t.ja}:t)}function l2(t,e){let n={\u4F4E\u78B3:e("lowCarb"),\u4E2D\u78B3:e("mediumCarb"),\u9AD8\u78B3:e("highCarb")};return{...t.carbDay,label:n[t.carbDay.label]||t.carbDay.label}}async function TS(t){if(navigator.clipboard?.writeText&&window.isSecureContext)try{await navigator.clipboard.writeText(t);return}catch{}let e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="fixed",e.style.left="-9999px",e.style.top="0",e.style.fontSize="16px",document.body.appendChild(e),e.focus(),e.select(),e.setSelectionRange(0,t.length);try{if(!document.execCommand("copy"))throw new Error("copy command failed")}finally{document.body.removeChild(e)}}function AS(t){return Object.entries(t).filter(([e,n])=>vh[e]&&n>0)}function c2(t,e,n){let i=AS(t);return i.length?i.map(([r,s])=>{let a=Sn(vh[r],e);return`${a.label} ${ge(s)}${a.unit}`}).join(" / "):n("noEat")}function u2(t,e,n,i){let r=Sn(ks[t]||ks.none,n);return t==="none"||e<=0?i("noDrink"):`${r.label} ${ge(e)}ml`}function CS(t,e,n){return AS(t).length>0||e!=="none"&&n>0}function Tg(t,e,n,i,r){return`${c2(t,i,r)} \xB7 ${u2(e,n,i,r)}`}function Ag(t){return(t?.kcal||0)>0||(t?.p||0)>0||(t?.c||0)>0||(t?.f||0)>0}function RS(t,e){return Ag(t)?`${t.name||e("snackMeal")} ${Math.round(Zn(t))} kcal`:e("noSnack")}function d2(t,e,n,i,r,s,a){return`${a("lunch")} ${Math.round(t?.kcal||0)} kcal \xB7 ${Tg(e,n,i,s,a)} \xB7 ${RS(r,a)}`}function mS(t,e){return t.map(n=>{let i=n.baseQty??n.qty,r=e[n.key]||0,s=tt(i+r,0,n.max??1/0),a=ge(s-i,n.step<1?1:2);return{...n,baseQty:i,qty:s,adjustment:a,macro:Zt(n.unitMacro,s)}})}function gS(t,e=[]){return[...t.filter(n=>n.tone==="red"),...t.filter(n=>n.tone==="amber"),...e,...t.filter(n=>n.tone==="green"),...t.filter(n=>!["red","amber","green"].includes(n.tone))]}function xS(t,e,n,i){return n.length>0||e.some(s=>{let a=Cg(s,i);return["beef","duck","kfc"].includes(s)||(a.f||0)>=6})?t:{...t,c:ge((t.c||0)+(t.f||0)*9/4,1),f:0}}function vS({proteinKeys:t,fatKeys:e,carbPlan:n,targets:i,fixedMacro:r=Nn,beefFat:s}){let a=t.length?t:["beef"],o=Math.max(0,(i.p||0)-(r.p||0)),l=a.map(M=>{let T=Cg(M,s),E=o/Math.max(1,a.length)/Math.max(1,T.p),R=tt(yn(E,T.step),0,T.max);return{key:M,name:T.label,short:T.short,qty:R,unit:T.unit,step:T.step,max:T.max,unitMacro:T,macro:Zt(T,R),tone:"red"}}),c=l.reduce((M,T)=>Ut(M,T.macro),Nn),h=e.length?e:[],f=Math.max(0,(i.f||0)-(r.f||0)-c.f),d=h.map(M=>{let T=xh[M],E=f/Math.max(1,h.length)/Math.max(1,T.f),R=tt(yn(E,T.step),0,T.max);return{key:`fat-${M}`,name:T.label,short:T.short,qty:R,unit:T.unit,step:T.step,max:T.max,unitMacro:T,macro:Zt(T,R),tone:"amber"}}),m=d.reduce((M,T)=>Ut(M,T.macro),Nn),y=Ut(r,c,m),b=Math.max(0,(i.kcal||0)-y.kcal),g=zs[n]||zs.pasta,u=g.max??(g.unit==="\u5305"?8:420),p=tt(yn(b/g.kcalUnit,g.step),0,u),_={key:`carb-${n}`,name:g.name,short:g.short,qty:p,unit:g.unit,step:g.step,max:u,unitMacro:g.perUnit,macro:Zt(g.perUnit,p),tone:"green"};return[...l,...d,_]}function h2(t){return Us({p:t*.31/4,c:t*.49/4,f:t*.2/9,kcal:t})}function Cg(t,e){let n=gh[t];return{...n,f:t==="beef"?e*.8/100:n.f||0}}function f2(t,e){return t.source==="protein"?Cg(t.sourceKey,e):t.source==="carb"?zs[t.sourceKey].perUnit:t.source==="extra"?ui[t.sourceKey]:t.source==="fat"?xh[t.sourceKey]:Nn}function p2(t,e){return bS.map(n=>({...Sn(n,e),unitMacro:f2(n,t)}))}function Bs(t,e){if(t.key?.startsWith("carb-")){let n=t.key.replace("carb-",""),i=Sn(zs[n],e);return{...t,name:i.name,short:i.short,unit:i.unit}}if(t.key?.startsWith("fat-")){let n=t.key.replace("fat-",""),i=Sn(xh[n],e);return{...t,name:i.label,short:i.short,unit:i.unit}}if(t.key?.startsWith("extra-")){let n=t.key.replace("extra-",""),i=Sn(ui[n],e);return{...t,name:i.label,short:i.label,unit:i.unit}}if(gh[t.key]){let n=Sn(gh[t.key],e);return{...t,name:n.label,short:n.short,unit:n.unit}}return t}function m2(t,e){let[n,i]=(0,Pe.useState)(()=>{let r=Number(localStorage.getItem(t));return Number.isFinite(r)&&r>0?r:e});return(0,Pe.useEffect)(()=>{localStorage.setItem(t,String(n))},[t,n]),[n,i]}function Sg(t,e){let n=()=>typeof e=="function"?e():e,[i,r]=(0,Pe.useState)(()=>{try{let s=localStorage.getItem(t);return s?JSON.parse(s):n()}catch{return n()}});return(0,Pe.useEffect)(()=>{localStorage.setItem(t,JSON.stringify(i))},[t,i]),[i,r]}function g2(){let t=(0,Pe.useRef)(null);return(0,Pe.useEffect)(()=>{let e=t.current;if(!e)return;let n=new tl,i=new tn(38,1,.1,100);i.position.set(0,0,10);let r;try{r=new ih({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{return}r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setClearColor(16777215,0),e.appendChild(r.domElement);let s=new hr;n.add(s),n.add(new pl(16777215,1.1));let a=new Va(16752533,2.8,24);a.position.set(5,3,7),n.add(a);let o=new Va(8508848,1.9,18);o.position.set(-5,-2,5),n.add(o);let l=[16754075,16764797,9099444,9689572],c=new cl(.56,.12,120,16),h=new ol(.12,.34,8,18),f=l.map((u,p)=>{let _=new za({color:u,emissive:u,emissiveIntensity:.12,roughness:.42,metalness:.04}),M=new vn(c,_),T=p*Math.PI*.5;return M.position.set(Math.cos(T)*3.2,Math.sin(T)*1.5,-1-p*.2),M.rotation.set(p*.5,p*.35,p*.8),M.userData={angle:T,speed:.002+p*7e-4},s.add(M),M}),d=Array.from({length:26},(u,p)=>{let _=new za({color:l[p%l.length],roughness:.48,metalness:.02}),M=new vn(h,_),T=p*.58,E=2.2+p%4*.54;return M.position.set(Math.cos(T)*E,Math.sin(T)*E*.42,-2.4-p%5*.18),M.rotation.set(T*.7,T*.3,T),M.userData={angle:T,radius:E,speed:.003+p%5*6e-4},s.add(M),M}),m=()=>{let{width:u,height:p}=e.getBoundingClientRect();r.setSize(Math.max(1,u),Math.max(1,p),!1),i.aspect=Math.max(1,u)/Math.max(1,p),i.updateProjectionMatrix()};m();let y=new ResizeObserver(m);y.observe(e);let b=0,g=()=>{b=window.requestAnimationFrame(g),s.rotation.z+=.0011,s.rotation.y=Math.sin(Date.now()*28e-5)*.16,f.forEach(u=>{u.rotation.x+=u.userData.speed*1.7,u.rotation.y+=u.userData.speed}),d.forEach(u=>{u.userData.angle+=u.userData.speed,u.position.x=Math.cos(u.userData.angle)*u.userData.radius,u.position.y=Math.sin(u.userData.angle)*u.userData.radius*.42,u.rotation.z+=.006}),r.render(n,i)};return g(),()=>{window.cancelAnimationFrame(b),y.disconnect(),r.dispose(),c.dispose(),h.dispose(),e.removeChild(r.domElement)}},[]),(0,v.jsx)("div",{ref:t,className:"pointer-events-none fixed inset-0 -z-10 opacity-55","data-three-orbit":!0})}function Rg(){let[t,e]=(0,Pe.useState)("plan"),[n,i]=Sg("cutting:locale:v1","zh"),r=MS.includes(n)?n:"zh",s=(0,Pe.useMemo)(()=>o2(r),[r]),[a,o]=Sg("cutting:targetProfile:v1",Dl),l=(0,Pe.useMemo)(()=>({...Dl,...a||{}}),[a]),c=(0,Pe.useMemo)(()=>lS(l),[l]),[h,f]=m2("cutting:tdee",s2),[d,m]=(0,Pe.useState)("planned"),[y,b]=(0,Pe.useState)(800),[g,u]=(0,Pe.useState)({}),[p,_]=(0,Pe.useState)(40),[M,T]=(0,Pe.useState)("fresh_noodle"),[E,R]=(0,Pe.useState)(["chicken"]),[x,C]=(0,Pe.useState)([]),[P,I]=(0,Pe.useState)("pasta"),[U,W]=(0,Pe.useState)(["beef"]),[X,F]=(0,Pe.useState)([]),[V,G]=(0,Pe.useState)({}),[Z,te]=(0,Pe.useState)(13),[ae,xe]=(0,Pe.useState)({}),[ve,Be]=(0,Pe.useState)("none"),[ze,De]=(0,Pe.useState)(0),[K,ce]=(0,Pe.useState)(6.5),[ie,Ce]=(0,Pe.useState)(2e3),[Ie,Ne]=(0,Pe.useState)(7),[xt,je]=Sg("cutting:shopPlan:v1",()=>_g(bS)),[ct,Le]=(0,Pe.useState)(!1),[Re,ut]=(0,Pe.useState)(!1),[st,Et]=(0,Pe.useState)({}),[L,Ct]=(0,Pe.useState)({}),[Ve,ht]=(0,Pe.useState)({name:"\u624B\u52A8\u52A0\u9910",p:0,c:0,f:0,kcal:0}),[de,Tt]=(0,Pe.useState)({}),[A,S]=(0,Pe.useState)("idle"),[k,Y]=(0,Pe.useState)(""),[ee,re]=(0,Pe.useState)(!1),oe=(0,Pe.useRef)(0),q=(Ke,Fe,Xt,$i=1/0)=>{Ke(bn=>{let hi=tt(Xt,0,$i),Dn={...bn};return hi>0?Dn[Fe]=hi:delete Dn[Fe],Dn})},j=Ke=>{W(Fe=>Fe.includes(Ke)?Fe.length>1?Fe.filter(Xt=>Xt!==Ke):Fe:[...Fe,Ke])},he=Ke=>{R(Fe=>Fe.includes(Ke)?Fe.length>1?Fe.filter(Xt=>Xt!==Ke):Fe:[...Fe,Ke])},Se=Ke=>{F(Fe=>Fe.includes(Ke)?Fe.filter(Xt=>Xt!==Ke):[...Fe,Ke])},le=Ke=>{C(Fe=>Fe.includes(Ke)?Fe.filter(Xt=>Xt!==Ke):[...Fe,Ke])},J=(0,Pe.useMemo)(()=>{let Ke=Object.entries(g).reduce((Xe,[Je,at])=>Ut(Xe,Zt(wS[Je],at)),Nn),Fe=Object.entries(ae).reduce((Xe,[Je,at])=>Ut(Xe,Zt(vh[Je],at)),Nn),Xt=ks[ve]||ks.none,$i=Us(Zt(Xt,ze/200)),bn=Us(Ve),hi=Ut(Fe,$i,bn),Dn=xg(c,hi,p/100),Yi=Object.entries(V).filter(([Xe,Je])=>ui[Xe]&&Je>0),ls=Yi.reduce((Xe,[Je,at])=>Ut(Xe,Zt(ui[Je],at)),Nn),Ul=Yi.map(([Xe,Je])=>({key:`extra-${Xe}`,name:ui[Xe].label,short:ui[Xe].label,qty:Je,unit:ui[Xe].unit,step:ui[Xe].step,max:ui[Xe].max,unitMacro:ui[Xe],macro:Zt(ui[Xe],Je),tone:"gold"})),cs=xS(Dn.lunch,E,x,Z),kl=vS({proteinKeys:E,fatKeys:x,carbPlan:M,targets:cs,beefFat:Z}),Ol=vg(kl,Nn,cs),Bl=d==="planned"?mS(gS(Ol),st):[],_h=Bl.reduce((Xe,Je)=>Ut(Xe,Je.macro),Nn),yh=d==="tally"&&Ke.kcal>0?Ke:h2(y),zl=d==="planned"?_h:yh,Vs=Ut(zl,hi),ja=d==="planned"?xg(c,Vs,.5).remaining:c,Sh=d==="planned"?{...Dn,dinner:ja}:Dn,w=d==="planned"?xS(ja,U,X,Z):ja,D=d==="planned"?ls:Ut(Vs,ls),H=vS({proteinKeys:U,fatKeys:X,carbPlan:P,targets:w,fixedMacro:D,beefFat:Z}),B=vg(H,D,w),z=mS(gS(B,Ul),L),fe=z.reduce((Xe,Je)=>Ut(Xe,Je.macro),Nn),ye=Ut(Vs,fe),pe=Math.round(h-ye.kcal),we=(ks[ve]?.k||0)*(ze/200),Te=(ks[ve]?.na||0)*(ze/200),We=K*393+Te,Ye=ie+we,Ae=uS(p2(Z,r),xt,Ie),pt=Ae.reduce((Xe,Je)=>Ut(Xe,Je.macro),Nn);return{lunch:zl,lunchItems:Bl,pre:Fe,drink:$i,snack:bn,beforeDinner:Vs,dinner:fe,dinnerItems:z,mealTargets:Sh,total:ye,deficit:pe,potassium:Ye,sodium:We,shopping:Ae,shoppingMacro:pt,carb:zs[P]||zs.pasta}},[r,Z,P,L,ve,ze,V,X,ie,st,M,x,y,d,E,p,ae,K,Ie,xt,Ve,g,c,h,U]),ke=(0,Pe.useMemo)(()=>cS(J.total,c,l.bodyWeightKg),[J.total,l.bodyWeightKg,c]),Ge=ES.reduce((Ke,Fe)=>Ke+(de[Fe.id]||0)*Fe.kcal,0),it=Math.round(J.total.kcal+Ge-h),N=CS(ae,ve,ze),se=Ag(Ve),$=N||se||J.lunch.kcal>0,_e=d2(J.lunch,ae,ve,ze,Ve,r,s),ue=(Ke,Fe,Xt)=>{Ke($i=>{let bn=Fe.baseQty??Fe.qty,hi=tt(Fe.qty+Xt,0,Fe.max??1/0),Dn=ge(hi-bn,Fe.step<1?1:2),Yi={...$i};return Dn!==0?Yi[Fe.key]=Dn:delete Yi[Fe.key],Yi})},Q=(Ke,Fe)=>ue(Et,Ke,Fe),Ee=(Ke,Fe)=>ue(Ct,Ke,Fe),He=()=>{o(Dl),m("planned"),b(800),u({}),_(40),T("fresh_noodle"),R(["chicken"]),C([]),I("pasta"),W(["beef"]),F([]),G({}),te(13),xe({}),Be("none"),De(0),Et({}),Ct({}),ht({name:r==="ja"?"\u624B\u5165\u529B\u306E\u9593\u98DF":"\u624B\u52A8\u52A0\u9910",p:0,c:0,f:0,kcal:0})};(0,Pe.useEffect)(()=>()=>window.clearTimeout(oe.current),[]),(0,Pe.useEffect)(()=>{window.scrollTo({top:0,behavior:"auto"})},[t]),(0,Pe.useEffect)(()=>{document.documentElement.lang=r==="ja"?"ja":"zh-CN",document.documentElement.dataset.locale=r,document.title=r==="ja"?"Cutting Lab \xB7 \u4ECA\u65E5\u306E\u3054\u306F\u3093":"Cutting Lab \xB7 \u4ECA\u65E5\u9910\u76D8"},[r]);let Rt=()=>({date:new Date().toISOString().slice(0,10),locale:r,targetProfile:l,targets:c,mealSplitPct:p,lunch:J.lunch,lunchItems:J.lunchItems.map(Ke=>Bs(Ke,r)),pre:J.pre,drink:{key:ve,ml:ze,macro:J.drink},snack:Ve,dinnerAdjustments:L,dinner:{items:J.dinnerItems.map(Ke=>Bs(Ke,r)),macro:J.dinner},total:J.total,deficit:J.deficit}),ft=async()=>{let Ke={...Rt(),copiedAt:new Date().toISOString()},Fe=JSON.stringify(Ke,null,2);Y(Fe),window.clearTimeout(oe.current),S("copying");try{await TS(Fe),re(!1),S("copied")}catch(Xt){console.error(Xt),S("failed"),re(!0)}oe.current=window.setTimeout(()=>S("idle"),1800)},di=Ke=>{window.requestAnimationFrame(()=>{document.getElementById(`plan-${Ke}`)?.scrollIntoView({behavior:"smooth",block:"start"})})},Mn=l2(ke,s);return(0,v.jsxs)("div",{className:"theme-soft min-h-screen overflow-hidden text-[#4d3934]",children:[(0,v.jsx)(g2,{}),(0,v.jsx)("div",{className:"soft-app-bg fixed inset-0 -z-30"}),(0,v.jsx)("div",{className:"soft-grid-bg fixed inset-0 -z-20"}),(0,v.jsxs)("div",{className:"mx-auto flex w-full max-w-7xl flex-col gap-5 px-3 pb-28 pt-3 sm:px-5 lg:px-8",children:[(0,v.jsxs)("header",{className:"soft-header sticky top-3 z-40 flex items-center justify-between gap-2 rounded-[26px] border border-white/70 bg-white/78 px-2.5 py-2 shadow-[0_20px_60px_-35px_rgba(162,96,82,0.55)] backdrop-blur-2xl",children:[(0,v.jsxs)("button",{onClick:()=>e("plan"),className:"flex min-w-0 items-center gap-2.5 text-left",children:[(0,v.jsx)("span",{className:"grid h-10 w-10 shrink-0 place-items-center rounded-[18px] bg-[#ff9f95] text-white shadow-[0_12px_30px_-18px_rgba(255,122,113,0.8)]",children:(0,v.jsx)(hg,{className:"h-5 w-5"})}),(0,v.jsxs)("span",{className:"block min-w-0",children:[(0,v.jsx)("span",{className:"block truncate font-display text-base font-extrabold leading-none text-[#4d3934]",children:"Cutting Lab"}),(0,v.jsx)("span",{className:"mt-1 block truncate text-[11px] font-bold text-[#a47b72]",children:s("appSub")})]})]}),(0,v.jsx)("nav",{className:"ml-auto hidden shrink-0 grid-cols-4 rounded-[22px] border border-[#ffd8d1]/80 bg-[#fff7f0]/80 p-1 lg:grid",children:(0,v.jsx)(_S,{tab:t,setTab:e,mode:"top",t:s})}),(0,v.jsx)(x2,{locale:r,setLocale:i,t:s})]}),t==="plan"&&(0,v.jsx)(v2,{model:J,macroReport:ke,activeCarbDay:Mn,onIntake:()=>ut(!0),onCopy:ft,copyStatus:A,onJump:di,t:s}),t==="plan"&&(0,v.jsx)(_2,{model:J,targets:c,targetProfile:l,onIntake:()=>ut(!0),intakeActive:$,intakeSummary:_e,onCopy:ft,copyStatus:A,t:s}),t==="plan"&&(0,v.jsx)(w2,{locale:r,t:s,model:J,lunchMode:d,setLunchMode:m,lunchKcal:y,setLunchKcal:b,tally:g,setTally:u,setMapQty:q,mealSplitPct:p,setMealSplitPct:_,lunchCarbPlan:M,setLunchCarbPlan:T,lunchProteinKeys:E,toggleLunchProtein:he,lunchFatKeys:x,toggleLunchFat:le,pre:ae,setPre:xe,drinkKey:ve,setDrinkKey:Be,drinkMl:ze,setDrinkMl:De,snack:Ve,setSnack:ht,carbPlan:P,setCarbPlan:I,proteinKeys:U,toggleProtein:j,fatKeys:X,toggleFat:Se,extraCarbs:V,setExtraCarbs:G,beefFat:Z,setBeefFat:te,advancedOpen:ct,setAdvancedOpen:Le,targets:c,targetProfile:l,setTargetProfile:o,macroReport:ke,activeCarbDay:Mn,resetDefaults:He,onTuneLunch:Q,resetLunchAdjustments:()=>Et({}),onTuneDinner:Ee,resetDinnerAdjustments:()=>Ct({})}),t==="detail"&&(0,v.jsx)(E2,{locale:r,t:s,model:J,targets:c,targetProfile:l,setTargetProfile:o,macroReport:ke,activeCarbDay:Mn,tdee:h,setTdee:f,lunchMode:d,setLunchMode:m,lunchKcal:y,setLunchKcal:b,tally:g,setTally:u,mealSplitPct:p,setMealSplitPct:_,lunchCarbPlan:M,setLunchCarbPlan:T,lunchProteinKeys:E,toggleLunchProtein:he,lunchFatKeys:x,toggleLunchFat:le,pre:ae,setPre:xe,setMapQty:q,drinkKey:ve,setDrinkKey:Be,drinkMl:ze,setDrinkMl:De,snack:Ve,setSnack:ht,onTuneLunch:Q,resetLunchAdjustments:()=>Et({}),saltG:K,setSaltG:ce,foodK:ie,setFoodK:Ce}),t==="shop"&&(0,v.jsx)(T2,{locale:r,t:s,model:J,shopDays:Ie,setShopDays:Ne,setShopPlan:je}),t==="cheat"&&(0,v.jsx)(P2,{locale:r,t:s,cheat:de,setCheat:Tt,cheatTotal:Ge,cheatSurplus:it,tdee:h,dayKcal:J.total.kcal})]}),(0,v.jsx)(I2,{locale:r,t:s,open:Re,setOpen:ut,model:J,lunchMode:d,setLunchMode:m,lunchKcal:y,setLunchKcal:b,tally:g,setTally:u,mealSplitPct:p,setMealSplitPct:_,lunchCarbPlan:M,setLunchCarbPlan:T,lunchProteinKeys:E,toggleLunchProtein:he,lunchFatKeys:x,toggleLunchFat:le,pre:ae,setPre:xe,setMapQty:q,drinkKey:ve,setDrinkKey:Be,drinkMl:ze,setDrinkMl:De,snack:Ve,setSnack:ht,onTuneLunch:Q,resetLunchAdjustments:()=>Et({}),dinnerSummary:J.dinnerItems.slice(0,4).map(Ke=>{let Fe=Bs(Ke,r);return`${Fe.short||Fe.name} ${ge(Fe.qty)}${Fe.unit}`}).join(" \xB7 ")}),(0,v.jsx)(N2,{open:ee,setOpen:re,text:k,onCopied:()=>{re(!1),S("copied"),window.clearTimeout(oe.current),oe.current=window.setTimeout(()=>S("idle"),1800)},t:s}),(0,v.jsxs)("button",{onClick:()=>ut(!0),className:"fixed bottom-5 right-5 z-50 hidden h-14 w-14 place-items-center rounded-[22px] border border-white/80 bg-[#ffcf7d] text-[#5d4037] shadow-[0_18px_38px_-22px_rgba(204,125,57,0.8)] transition hover:-translate-y-0.5 lg:grid","aria-label":s("intakeDrawerTitle"),children:[(0,v.jsx)(jn,{className:"h-6 w-6"}),(N||se)&&(0,v.jsx)("span",{className:"absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#69cda5]"})]}),(0,v.jsx)("nav",{className:"fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 rounded-[24px] border border-white/80 bg-white/82 p-1.5 shadow-[0_18px_65px_-35px_rgba(134,80,70,0.8)] backdrop-blur-2xl lg:hidden",children:(0,v.jsx)(_S,{tab:t,setTab:e,mode:"bottom",t:s})})]})}function x2({locale:t,setLocale:e,t:n}){return(0,v.jsx)("div",{"data-language-toggle":!0,className:"grid shrink-0 grid-cols-2 rounded-[18px] border border-[#ffd8d1]/80 bg-[#fff9f4] p-1","aria-label":n("language"),children:MS.map(i=>(0,v.jsx)("button",{onClick:()=>e(i),className:`rounded-[14px] px-2.5 py-2 text-[11px] font-extrabold transition sm:px-3 ${t===i?"bg-[#ff9f95] text-white shadow-[0_10px_24px_-18px_rgba(255,122,113,0.8)]":"text-[#a47b72] hover:bg-white"}`,children:n(i)},i))})}function _S({tab:t,setTab:e,mode:n,t:i}){return a2.map(r=>{let s=r.icon;return(0,v.jsxs)("button",{onClick:()=>e(r.id),className:`grid h-11 place-items-center rounded-[18px] px-2 text-[11px] font-extrabold transition ${n==="top"?"min-w-20 grid-cols-[16px_auto] gap-1.5":"grid-rows-[18px_auto] gap-0.5"} ${t===r.id?"bg-[#5fc89e] text-white shadow-[0_12px_28px_-20px_rgba(57,156,118,0.9)]":"text-[#a47b72] hover:bg-white hover:text-[#4d3934]"}`,"aria-label":i(r.labelKey),children:[(0,v.jsx)(s,{className:"h-4 w-4"}),(0,v.jsx)("span",{children:i(r.labelKey)})]},r.id)})}function v2({model:t,macroReport:e,activeCarbDay:n,onIntake:i,onCopy:r,copyStatus:s,onJump:a,t:o}){let l={idle:o("copy"),copying:o("copying"),copied:o("copied"),failed:o("retry")}[s]||o("copy"),c=[{key:"intake",icon:jn,label:o("intake"),value:`${Math.round(t.beforeDinner.kcal)} kcal`,onClick:()=>a("intake")},{key:"dinner",icon:uh,label:o("dinner"),value:`${Math.round(t.dinner.kcal)} kcal`,onClick:()=>a("dinner")},{key:"rhythm",icon:Ya,label:n.label,value:`C ${e.carbPerKg}g/kg`,onClick:()=>a("rhythm")},{key:"edit-intake",icon:pg,label:o("editIntake"),value:`${Math.round(t.beforeDinner.kcal)} kcal`,onClick:i},{key:"copy",icon:jn,label:l,value:o("record"),onClick:r}];return(0,v.jsx)("div",{"data-plan-flow-dock":!0,className:"sticky top-[74px] z-30 rounded-[24px] border border-white/75 bg-white/80 p-1.5 shadow-[0_18px_60px_-40px_rgba(134,80,70,0.65)] backdrop-blur-2xl lg:top-[82px]",children:(0,v.jsx)("div",{className:"grid grid-cols-5 gap-1",children:c.map(h=>{let f=h.icon;return(0,v.jsxs)("button",{"data-flow-action":h.key,onClick:h.onClick,className:"min-w-0 rounded-[18px] border border-[#ffe3da] bg-[#fff9f4]/90 px-1.5 py-2 text-left transition hover:-translate-y-0.5 hover:border-[#ffb8ae] hover:bg-white",children:[(0,v.jsx)(f,{className:"mx-auto h-4 w-4 text-[#ff8d82]"}),(0,v.jsx)("div",{className:"mt-1 truncate text-center font-cjk text-[11px] font-extrabold leading-none text-[#4d3934]",children:h.label}),(0,v.jsx)("div",{className:"mt-1 truncate text-center font-mono text-[9px] leading-none text-[#a47b72]",children:h.value})]},h.key)})})})}function _2({model:t,targets:e,targetProfile:n,onIntake:i,intakeActive:r,intakeSummary:s,onCopy:a,copyStatus:o,t:l}){let c={idle:{label:l("copy"),sub:l("record"),icon:jn},copying:{label:l("copying"),sub:"clipboard",icon:jn},copied:{label:l("copied"),sub:"ok",icon:ug},failed:{label:l("retry"),sub:"clipboard",icon:jn}}[o]||{label:l("copy"),sub:l("record"),icon:jn};return(0,v.jsxs)("section",{className:"grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch",children:[(0,v.jsx)("div",{className:"soft-hero-panel relative overflow-hidden rounded-[34px] border border-white/70 bg-white/72 p-5 shadow-[0_30px_90px_-60px_rgba(134,80,70,0.75)] backdrop-blur-2xl sm:p-7",children:(0,v.jsxs)("div",{className:"relative z-10 flex h-full min-h-[330px] flex-col justify-between",children:[(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,v.jsxs)(L2,{icon:eS,children:[ge(n.bodyWeightKg)," kg \xB7 P ",ge(n.proteinPerKg,1),"g/kg \xB7 F ",ge(n.fatMinPerKg,1),"g/kg"]}),(0,v.jsxs)("button",{"data-home-intake-button":!0,onClick:i,className:`inline-flex max-w-full items-center gap-2 rounded-[999px] border px-3 py-2 text-left text-xs font-bold transition hover:-translate-y-0.5 ${r?"border-[#6fd2aa] bg-[#e8fff4] text-[#2c765e]":"border-[#ffe3da] bg-white/72 text-[#a47b72]"}`,"aria-label":`${l("intake")}: ${s}`,children:[(0,v.jsx)(jn,{className:"h-4 w-4 shrink-0"}),(0,v.jsx)("span",{children:l("intake")}),(0,v.jsxs)("span",{className:"rounded-full bg-white px-2 py-0.5 font-mono text-[10px]",children:[Math.round(t.beforeDinner.kcal)," kcal"]})]})]}),(0,v.jsxs)("h1",{className:"mt-7 max-w-2xl font-display text-4xl font-extrabold leading-[1.04] text-[#4d3934] sm:text-7xl",children:[l("heroTitle"),(0,v.jsx)("span",{className:"block text-[#ff8d82]",children:l("heroAccent")})]}),(0,v.jsx)("p",{className:"mt-4 max-w-xl text-sm font-semibold leading-7 text-[#8f6c64] sm:text-base",children:l("heroCopy")})]}),(0,v.jsxs)("div",{className:"mt-7 grid grid-cols-3 gap-2",children:[(0,v.jsx)(bg,{icon:pg,label:l("editIntake"),sub:`${Math.round(t.beforeDinner.kcal)} kcal`,onClick:i}),(0,v.jsx)(bg,{icon:c.icon,label:c.label,sub:c.sub,onClick:a,dataAttr:"copy-plan-button"}),(0,v.jsx)(bg,{icon:dg,label:`${t.deficit>0?"-":"+"}${Math.abs(t.deficit)}`,sub:l("deficit")})]})]})}),(0,v.jsx)("div",{className:"overflow-hidden rounded-[34px] border border-white/70 bg-white/72 shadow-[0_30px_90px_-60px_rgba(134,80,70,0.75)] backdrop-blur-xl",children:(0,v.jsxs)("div",{className:"relative h-[230px] overflow-hidden sm:h-[360px] lg:h-full lg:min-h-[430px]",children:[(0,v.jsx)("img",{src:SS("protocol-hero-premium.jpg"),alt:"Cutting Lab dinner visual",className:"h-full w-full object-cover object-center brightness-[1.08] contrast-[0.95] saturate-[0.92]"}),(0,v.jsx)("div",{className:"soft-image-wash absolute inset-0"}),(0,v.jsxs)("div",{className:"absolute inset-x-0 bottom-0 p-4 sm:p-5",children:[(0,v.jsxs)("div",{className:"mb-3 flex items-end justify-between gap-3",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{className:"text-xs font-extrabold text-[#8f6c64]",children:l("dinnerKcal")}),(0,v.jsx)("div",{className:"font-display text-5xl font-extrabold leading-none text-[#4d3934]",children:Math.round(t.dinner.kcal)})]}),(0,v.jsxs)("div",{className:"rounded-[22px] border border-white/80 bg-white/78 px-3 py-2 text-right backdrop-blur",children:[(0,v.jsx)("div",{className:"text-[11px] font-bold text-[#a47b72]",children:l("todayTotal")}),(0,v.jsx)("div",{className:"font-mono text-xl font-bold text-[#5fc89e]",children:Math.round(t.total.kcal)})]})]}),(0,v.jsxs)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[(0,v.jsx)(fh,{label:"P",value:t.total.p,target:e.p,unit:"g"}),(0,v.jsx)(fh,{label:"C",value:t.total.c,target:e.c,unit:"g"}),(0,v.jsx)(fh,{label:"F",value:t.total.f,target:e.f,unit:"g"}),(0,v.jsx)(fh,{label:"Kcal",value:t.total.kcal,target:e.kcal,unit:""})]})]})]})})]})}function PS({locale:t,t:e,proteinKeys:n,toggleProtein:i,carbPlan:r,setCarbPlan:s,fatKeys:a,toggleFat:o}){return(0,v.jsxs)("div",{className:"grid gap-4",children:[(0,v.jsx)(Ln,{title:e("protein"),children:(0,v.jsx)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries(gh).map(([l,c])=>{let h=Sn(c,t);return(0,v.jsx)(wg,{active:n.includes(l),onClick:()=>i(l),title:h.short,meta:h.note},l)})})}),(0,v.jsx)(Ln,{title:e("carb"),children:(0,v.jsx)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries(zs).map(([l,c])=>{let h=Sn(c,t);return(0,v.jsxs)("button",{onClick:()=>s(l),className:`rounded-[22px] border p-3 text-left transition hover:-translate-y-0.5 ${r===l?"border-[#ffb8ae] bg-[#fff0ed] text-[#4d3934]":"border-[#ffe3da] bg-white/58 text-[#8f6c64] hover:border-[#ffb8ae] hover:bg-white"}`,children:[(0,v.jsx)("div",{className:"h-2 w-10 rounded-full",style:{backgroundColor:h.color}}),(0,v.jsx)("div",{className:"mt-3 font-cjk text-sm font-extrabold",children:h.short}),(0,v.jsx)("div",{className:"mt-1 text-[11px] font-semibold text-[#a47b72]",children:h.sub})]},l)})})}),(0,v.jsx)(Ln,{title:e("fatSource"),children:(0,v.jsx)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries(xh).map(([l,c])=>{let h=Sn(c,t);return(0,v.jsx)(wg,{active:a.includes(l),onClick:()=>o(l),title:h.short,meta:`${h.f}g / ${h.unit}`,tone:"amber"},l)})})})]})}function y2({locale:t,t:e,title:n,items:i,target:r,preferenceProps:s,onTune:a,resetAdjustments:o}){let l=i.some(h=>h.adjustment!==0),c=i.reduce((h,f)=>Ut(h,f.macro),Nn);return(0,v.jsxs)("div",{className:"grid gap-4",children:[(0,v.jsx)(PS,{locale:t,t:e,...s}),(0,v.jsxs)("div",{className:"rounded-[24px] border border-[#ffe3da] bg-white/58 p-3",children:[(0,v.jsxs)("div",{className:"mb-3 flex items-center justify-between gap-3",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{className:"text-xs font-extrabold text-[#ff8d82]",children:n}),(0,v.jsxs)("div",{className:"mt-1 text-[11px] font-bold text-[#a47b72]",children:["target ",Math.round(r.kcal)," kcal"]})]}),(0,v.jsxs)("div",{className:"font-mono text-xs font-bold text-[#a47b72]",children:["P",ge(c.p)," C",ge(c.c)," F",ge(c.f)]})]}),(0,v.jsx)("div",{className:"grid gap-2",children:i.length?i.map((h,f)=>(0,v.jsx)(LS,{item:Bs(h,t),index:f,onTune:a,t:e},h.key)):(0,v.jsx)("div",{className:"rounded-[22px] border border-[#ffe3da] bg-white/58 p-4 text-sm font-bold text-[#a47b72]",children:e("noDinner")})}),l&&(0,v.jsxs)("button",{onClick:o,className:"mt-3 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/60 px-3 py-2 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]",children:[(0,v.jsx)(Fs,{className:"h-4 w-4"}),e("resetTune")]})]})]})}function S2({locale:t,t:e,model:n,lunchMode:i,setLunchMode:r,lunchKcal:s,setLunchKcal:a,tally:o,setTally:l,setMapQty:c,mealSplitPct:h,setMealSplitPct:f,lunchCarbPlan:d,setLunchCarbPlan:m,lunchProteinKeys:y,toggleLunchProtein:b,lunchFatKeys:g,toggleLunchFat:u,onTuneLunch:p,resetLunchAdjustments:_}){return(0,v.jsxs)("div",{className:"grid gap-4",children:[(0,v.jsx)(D2,{value:i,onChange:r,options:[{value:"planned",label:e("plannedMode")},{value:"quick",label:e("quickKcal")},{value:"tally",label:e("tallyMode")}]}),i==="planned"?(0,v.jsxs)("div",{className:"grid gap-4",children:[(0,v.jsxs)(Ln,{title:e("mealSplit"),children:[(0,v.jsx)("div",{className:"grid grid-cols-4 gap-2",children:[35,40,45,50].map(M=>(0,v.jsxs)(Fl,{active:h===M,onClick:()=>f(M),children:[M,"/",100-M]},M))}),(0,v.jsxs)("div",{className:"mt-2 text-[11px] font-bold text-[#a47b72]",children:[e("lunchShare")," ",h,"% \xB7 ",e("dinner")," ",100-h,"%"]})]}),(0,v.jsx)(y2,{locale:t,t:e,title:e("generatedLunch"),items:n.lunchItems,target:n.mealTargets.lunch,preferenceProps:{proteinKeys:y,toggleProtein:b,carbPlan:d,setCarbPlan:m,fatKeys:g,toggleFat:u},onTune:p,resetAdjustments:_})]}):i==="quick"?(0,v.jsx)(F2,{value:s,onChange:a,t:e}):(0,v.jsx)("div",{className:"mt-5 grid gap-2 sm:grid-cols-2",children:Object.entries(wS).map(([M,T])=>{let E=Sn(T,t);return(0,v.jsx)(Ig,{label:E.label,meta:`${ge(Zn(Zt(T,T.step)))} kcal / ${T.step}${E.unit}`,value:o[M]||0,unit:E.unit,step:T.step,max:T.max,onChange:R=>c(l,M,R,T.max)},M)})})]})}function M2({locale:t,t:e,pre:n,setPre:i,setMapQty:r,drinkKey:s,setDrinkKey:a,drinkMl:o,setDrinkMl:l,model:c}){let h=CS(n,s,o),f=Tg(n,s,o,t,e),d=Ut(c.pre,c.drink),m=()=>{i({}),a("none"),l(0)},y=()=>{i({banana:1}),a("tomato"),l(400)},b=()=>{i({pineapple:1}),a("tomato"),l(400)},g=u=>{a(u),u==="none"?l(0):o<=0&&l(400)};return(0,v.jsxs)("div",{className:"grid gap-4",children:[(0,v.jsxs)("div",{className:`rounded-[24px] border p-3 ${h?"border-[#bdf0d9] bg-[#edfff6]":"border-[#ffe3da] bg-white/64"}`,children:[(0,v.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,v.jsx)("span",{className:"text-xs font-extrabold text-[#a47b72]",children:e("fuel")}),(0,v.jsx)("span",{className:h?"font-extrabold text-[#3da77d]":"font-extrabold text-[#a47b72]",children:e(h?"on":"off")})]}),(0,v.jsx)("div",{className:"mt-2 text-sm font-bold leading-6 text-[#4d3934]",children:f}),(0,v.jsxs)("div",{className:"mt-2 font-mono text-xs font-bold text-[#a47b72]",children:["P",ge(d.p)," C",ge(d.c)," F",ge(d.f)," \xB7 ",Math.round(d.kcal)," kcal"]})]}),(0,v.jsx)(Ln,{title:e("fuelPreset"),children:(0,v.jsxs)("div",{className:"grid grid-cols-3 gap-2",children:[(0,v.jsxs)("button",{onClick:m,className:"rounded-[22px] border border-[#ffe3da] bg-white/70 p-3 text-left transition hover:border-[#ffb8ae]",children:[(0,v.jsx)("div",{className:"font-cjk text-sm font-extrabold text-[#4d3934]",children:e("applyNoFuel")}),(0,v.jsx)("div",{className:"mt-1 text-[11px] font-semibold text-[#a47b72]",children:e("applyNoFuelSub")})]}),(0,v.jsxs)("button",{onClick:y,className:"rounded-[22px] border border-[#ffd6a5] bg-[#fff6df] p-3 text-left transition hover:-translate-y-0.5",children:[(0,v.jsx)("div",{className:"font-cjk text-sm font-extrabold text-[#4d3934]",children:e("lightFuel")}),(0,v.jsx)("div",{className:"mt-1 text-[11px] font-semibold text-[#a47b72]",children:e("lightFuelSub")})]}),(0,v.jsxs)("button",{onClick:b,className:"rounded-[22px] border border-[#bdf0d9] bg-[#edfff6] p-3 text-left transition hover:-translate-y-0.5",children:[(0,v.jsx)("div",{className:"font-cjk text-sm font-extrabold text-[#4d3934]",children:e("pineappleBox")}),(0,v.jsx)("div",{className:"mt-1 text-[11px] font-semibold text-[#a47b72]",children:e("pineappleBoxSub")})]})]})}),(0,v.jsx)(Ln,{title:e("eatWhat"),children:(0,v.jsx)("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(vh).map(([u,p])=>{let _=Sn(p,t);return(0,v.jsx)(Ig,{label:_.label,meta:`${ge(Zn(Zt(p,p.step)))} kcal / ${p.step}${_.unit}`,value:n[u]||0,unit:_.unit,step:p.step,max:p.max,onChange:M=>r(i,u,M,p.max)},u)})})}),(0,v.jsxs)(Ln,{title:e("drinkWhat"),children:[(0,v.jsx)("div",{className:"grid grid-cols-3 gap-2",children:Object.entries(ks).map(([u,p])=>{let _=Sn(p,t);return(0,v.jsx)(wg,{active:s===u,onClick:()=>g(u),title:_.label,meta:_.sub,tone:"green"},u)})}),(0,v.jsx)("div",{className:"mt-3 grid grid-cols-3 gap-2",children:[200,400,600].map(u=>(0,v.jsxs)(Fl,{active:o===u,onClick:()=>l(u),children:[u,"ml"]},u))}),(0,v.jsx)("div",{className:"mt-3",children:(0,v.jsx)(Os,{label:e("sauce"),unit:"ml",value:o,min:0,max:2e3,onChange:u=>l(tt(u,0,2e3))})})]})]})}function b2({locale:t,t:e,snack:n,setSnack:i,dinnerSummary:r}){let s=Ag(n),a=(o,l)=>{i(c=>({...c,[o]:o==="name"?l:tt(l,0,o==="kcal"?5e3:500)}))};return(0,v.jsxs)("div",{children:[(0,v.jsx)("label",{className:"text-xs font-extrabold text-[#a47b72]",children:e("snackName")}),(0,v.jsx)("input",{value:n.name,onChange:o=>a("name",o.target.value),className:"mt-2 h-11 w-full rounded-[18px] border border-[#ffe3da] bg-white/70 px-3 text-sm font-bold text-[#4d3934] outline-none focus:border-[#ff9f95]"}),(0,v.jsx)("div",{className:"mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4",children:[["kcal",e("calorie")],["p",e("protein")],["c",e("carb")],["f",e("fat")]].map(([o,l])=>(0,v.jsx)(Os,{label:l,unit:o==="kcal"?"":"g",value:n[o],min:0,max:o==="kcal"?5e3:500,onChange:c=>a(o,c)},o))}),(0,v.jsxs)("div",{className:"mt-4 rounded-[24px] border border-[#ffd6a5] bg-[#fff6df] p-4",children:[(0,v.jsx)("div",{className:"text-xs font-extrabold text-[#d8903d]",children:e("dinnerWillClose")}),(0,v.jsxs)("div",{className:"mt-2 text-sm font-semibold leading-6 text-[#8f6c64]",children:[r||e("noDinner")," \xB7 ",Math.round(Zn(n))," kcal"]})]}),s&&(0,v.jsxs)("button",{onClick:()=>i({name:t==="ja"?"\u624B\u5165\u529B\u306E\u9593\u98DF":"\u624B\u52A8\u52A0\u9910",p:0,c:0,f:0,kcal:0}),className:"mt-4 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/70 px-3 py-2 text-xs font-extrabold text-[#a47b72] hover:text-[#ff7d75]",children:[(0,v.jsx)(Fs,{className:"h-4 w-4"}),e("clearSnack")]})]})}function Pg(t){let{locale:e,t:n,model:i,lunchMode:r,setLunchMode:s,lunchKcal:a,setLunchKcal:o,tally:l,setTally:c,setMapQty:h,mealSplitPct:f,setMealSplitPct:d,lunchCarbPlan:m,setLunchCarbPlan:y,lunchProteinKeys:b,toggleLunchProtein:g,lunchFatKeys:u,toggleLunchFat:p,pre:_,setPre:M,drinkKey:T,setDrinkKey:E,drinkMl:R,setDrinkMl:x,snack:C,setSnack:P,onTuneLunch:I,resetLunchAdjustments:U,dinnerSummary:W}=t;return(0,v.jsxs)("div",{className:"grid gap-5",children:[(0,v.jsxs)("div",{className:"grid gap-2 sm:grid-cols-4",children:[(0,v.jsx)(fn,{label:n("beforeDinnerTotal"),value:Math.round(i.beforeDinner.kcal),sub:`P${ge(i.beforeDinner.p)} C${ge(i.beforeDinner.c)} F${ge(i.beforeDinner.f)}`}),(0,v.jsx)(fn,{label:n("lunch"),value:Math.round(i.lunch.kcal),sub:"kcal"}),(0,v.jsx)(fn,{label:n("fuel"),value:Math.round(Ut(i.pre,i.drink).kcal),sub:Tg(_,T,R,e,n)}),(0,v.jsx)(fn,{label:n("snack"),value:Math.round(Zn(C)),sub:RS(C,n)})]}),(0,v.jsx)(Ln,{title:n("lunch"),children:(0,v.jsx)(S2,{locale:e,t:n,model:i,lunchMode:r,setLunchMode:s,lunchKcal:a,setLunchKcal:o,tally:l,setTally:c,setMapQty:h,mealSplitPct:f,setMealSplitPct:d,lunchCarbPlan:m,setLunchCarbPlan:y,lunchProteinKeys:b,toggleLunchProtein:g,lunchFatKeys:u,toggleLunchFat:p,onTuneLunch:I,resetLunchAdjustments:U})}),(0,v.jsxs)("div",{className:"grid gap-5 xl:grid-cols-[1.08fr_0.92fr]",children:[(0,v.jsx)(Ln,{title:n("fuel"),children:(0,v.jsx)(M2,{locale:e,t:n,pre:_,setPre:M,setMapQty:h,drinkKey:T,setDrinkKey:E,drinkMl:R,setDrinkMl:x,model:i})}),(0,v.jsx)(Ln,{title:n("manualSnack"),children:(0,v.jsx)(b2,{locale:e,t:n,snack:C,setSnack:P,dinnerSummary:W})})]})]})}function w2(t){let{locale:e,t:n,model:i,lunchMode:r,setLunchMode:s,lunchKcal:a,setLunchKcal:o,tally:l,setTally:c,setMapQty:h,mealSplitPct:f,setMealSplitPct:d,lunchCarbPlan:m,setLunchCarbPlan:y,lunchProteinKeys:b,toggleLunchProtein:g,lunchFatKeys:u,toggleLunchFat:p,pre:_,setPre:M,drinkKey:T,setDrinkKey:E,drinkMl:R,setDrinkMl:x,snack:C,setSnack:P,carbPlan:I,setCarbPlan:U,proteinKeys:W,toggleProtein:X,fatKeys:F,toggleFat:V,extraCarbs:G,setExtraCarbs:Z,beefFat:te,setBeefFat:ae,advancedOpen:xe,setAdvancedOpen:ve,targets:Be,targetProfile:ze,setTargetProfile:De,macroReport:K,activeCarbDay:ce,resetDefaults:ie,onTuneLunch:Ce,resetLunchAdjustments:Ie,onTuneDinner:Ne,resetDinnerAdjustments:xt}=t,je=i.dinnerItems.some(Le=>Le.adjustment!==0),ct=(Le,Re,ut,st)=>{De(Et=>({...Dl,...Et||{},[Le]:tt(Re,ut,st)}))};return(0,v.jsxs)("main",{className:"grid gap-5 lg:grid-cols-[0.9fr_1.1fr]",children:[(0,v.jsxs)("section",{className:"space-y-5",children:[(0,v.jsx)(Ki,{id:"plan-intake",eyebrow:n("planIntakeEyebrow"),title:n("intakeHubTitle"),icon:jn,children:(0,v.jsx)(Pg,{locale:e,t:n,model:i,lunchMode:r,setLunchMode:s,lunchKcal:a,setLunchKcal:o,tally:l,setTally:c,setMapQty:h,mealSplitPct:f,setMealSplitPct:d,lunchCarbPlan:m,setLunchCarbPlan:y,lunchProteinKeys:b,toggleLunchProtein:g,lunchFatKeys:u,toggleLunchFat:p,pre:_,setPre:M,drinkKey:T,setDrinkKey:E,drinkMl:R,setDrinkMl:x,snack:C,setSnack:P,onTuneLunch:Ce,resetLunchAdjustments:Ie,dinnerSummary:i.dinnerItems.slice(0,4).map(Le=>{let Re=Bs(Le,e);return`${Re.short||Re.name} ${ge(Re.qty)}${Re.unit}`}).join(" \xB7 ")})}),(0,v.jsx)(IS,{open:xe,onToggle:()=>ve(!xe),title:n("advanced"),subtitle:n("advancedSub"),children:(0,v.jsxs)("div",{className:"grid gap-5",children:[(0,v.jsx)(Ln,{title:n("extras"),children:(0,v.jsx)("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(ui).map(([Le,Re])=>{let ut=Sn(Re,e);return(0,v.jsx)(Ig,{label:ut.label,meta:`${ge(Zn(Zt(Re,Re.step)))} kcal / ${Re.step}${ut.unit}`,value:G[Le]||0,unit:ut.unit,step:Re.step,max:Re.max,onChange:st=>h(Z,Le,st,Re.max)},Le)})})}),(0,v.jsxs)(Ln,{title:n("beefFat"),children:[(0,v.jsx)("div",{className:"grid grid-cols-4 gap-2",children:[5,9,13,18].map(Le=>(0,v.jsxs)(Fl,{active:te===Le,onClick:()=>ae(Le),children:[Le,"g"]},Le))}),(0,v.jsxs)("div",{className:"mt-3 flex items-center gap-3",children:[(0,v.jsx)("input",{type:"number",value:te,onChange:Le=>ae(tt(Le.target.value,0,40)),className:"h-11 w-24 rounded-[18px] border border-[#ffe3da] bg-white/70 text-center font-mono text-lg font-bold text-[#4d3934] outline-none focus:border-[#ff9f95]"}),(0,v.jsx)("span",{className:"text-xs font-semibold text-[#a47b72]",children:"g / 100g raw"})]})]}),(0,v.jsxs)(Ln,{title:n("targetFormula"),children:[(0,v.jsx)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[["bodyWeightKg",n("bodyWeight"),"kg",30,250],["proteinPerKg",n("proteinRatio"),"g/kg",.8,3],["fatMinPerKg",n("fatMin"),"g/kg",.3,1.5],["kcal",n("calorie"),"kcal",1e3,5e3]].map(([Le,Re,ut,st,Et])=>(0,v.jsx)(Os,{label:Re,unit:ut,value:ze[Le],min:st,max:Et,onChange:L=>ct(Le,L,st,Et)},Le))}),(0,v.jsx)(NS,{targets:Be,targetProfile:ze,t:n}),(0,v.jsxs)("button",{onClick:ie,className:"mt-3 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/60 px-3 py-2 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]",children:[(0,v.jsx)(Fs,{className:"h-4 w-4"}),n("resetDefault")]})]})]})})]}),(0,v.jsxs)("section",{className:"space-y-5",children:[(0,v.jsxs)(Ki,{id:"plan-dinner",eyebrow:n("dinnerAnswerEyebrow"),title:n("dinnerAnswerTitle"),icon:hg,children:[(0,v.jsx)(Ln,{title:n("dinnerPlannerTitle"),children:(0,v.jsx)(PS,{locale:e,t:n,proteinKeys:W,toggleProtein:X,carbPlan:I,setCarbPlan:U,fatKeys:F,toggleFat:V})}),(0,v.jsx)("div",{className:"grid gap-2",children:i.dinnerItems.length?i.dinnerItems.map((Le,Re)=>(0,v.jsx)(LS,{item:Bs(Le,e),index:Re,onTune:Ne,t:n},Le.key)):(0,v.jsx)("div",{className:"rounded-[22px] border border-[#ffe3da] bg-white/58 p-4 text-sm font-bold text-[#a47b72]",children:n("noDinner")})}),je&&(0,v.jsxs)("button",{onClick:xt,className:"mt-3 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/60 px-3 py-2 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]",children:[(0,v.jsx)(Fs,{className:"h-4 w-4"}),n("resetTune")]})]}),(0,v.jsx)(Ki,{id:"plan-rhythm",eyebrow:n("rhythmEyebrow"),title:n("rhythmTitle"),icon:Ya,children:(0,v.jsxs)("div",{className:"space-y-3",children:[(0,v.jsx)(mh,{label:n("protein"),value:i.total.p,target:Be.p,unit:"g",color:"#ff8d82"}),(0,v.jsx)(mh,{label:n("carb"),value:i.total.c,target:Be.c,unit:"g",color:"#ffcf7d"}),(0,v.jsx)(mh,{label:n("fat"),value:i.total.f,target:Be.f,unit:"g",color:"#69cda5"}),(0,v.jsx)(mh,{label:n("calorie"),value:i.total.kcal,target:Be.kcal,unit:"kcal",color:"#85d7e3"}),(0,v.jsx)(O2,{report:K,activeCarbDay:ce,t:n})]})})]})]})}function E2(t){let{locale:e,t:n,model:i,targets:r,targetProfile:s,setTargetProfile:a,macroReport:o,activeCarbDay:l,tdee:c,setTdee:h,lunchMode:f,setLunchMode:d,lunchKcal:m,setLunchKcal:y,tally:b,setTally:g,mealSplitPct:u,setMealSplitPct:p,lunchCarbPlan:_,setLunchCarbPlan:M,lunchProteinKeys:T,toggleLunchProtein:E,lunchFatKeys:R,toggleLunchFat:x,pre:C,setPre:P,setMapQty:I,drinkKey:U,setDrinkKey:W,drinkMl:X,setDrinkMl:F,snack:V,setSnack:G,onTuneLunch:Z,resetLunchAdjustments:te,saltG:ae,setSaltG:xe,foodK:ve,setFoodK:Be}=t,ze=i.potassium>=i.sodium,De=(K,ce,ie,Ce)=>{a(Ie=>({...Dl,...Ie||{},[K]:tt(ce,ie,Ce)}))};return(0,v.jsxs)("main",{className:"grid gap-5 lg:grid-cols-[1fr_1fr]",children:[(0,v.jsxs)(Ki,{eyebrow:n("ledger"),title:n("ledgerTitle"),icon:jn,children:[(0,v.jsx)(Ll,{label:n("lunch"),macro:i.lunch}),(0,v.jsx)(Ll,{label:n("preTraining"),macro:i.pre}),(0,v.jsx)(Ll,{label:n("drinkElectrolyte"),macro:i.drink}),(0,v.jsx)(Ll,{label:n("snackMeal"),macro:i.snack}),(0,v.jsx)(Ll,{label:n("dinner"),macro:i.dinner,strong:!0})]}),(0,v.jsx)(Ki,{eyebrow:n("planIntakeEyebrow"),title:n("intakeHubTitle"),icon:jn,children:(0,v.jsx)(Pg,{locale:e,t:n,model:i,lunchMode:f,setLunchMode:d,lunchKcal:m,setLunchKcal:y,tally:b,setTally:g,setMapQty:I,mealSplitPct:u,setMealSplitPct:p,lunchCarbPlan:_,setLunchCarbPlan:M,lunchProteinKeys:T,toggleLunchProtein:E,lunchFatKeys:R,toggleLunchFat:x,pre:C,setPre:P,drinkKey:U,setDrinkKey:W,drinkMl:X,setDrinkMl:F,snack:V,setSnack:G,onTuneLunch:Z,resetLunchAdjustments:te,dinnerSummary:i.dinnerItems.slice(0,4).map(K=>{let ce=Bs(K,e);return`${ce.short||ce.name} ${ge(ce.qty)}${ce.unit}`}).join(" \xB7 ")})}),(0,v.jsxs)(Ki,{eyebrow:n("targetFormula"),title:n("targetByWeight"),icon:dg,children:[(0,v.jsxs)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-5",children:[[["bodyWeightKg",n("bodyWeight"),"kg",30,250],["proteinPerKg",n("proteinRatio"),"g/kg",.8,3],["fatMinPerKg",n("fatMin"),"g/kg",.3,1.5],["kcal",n("calorie"),"kcal",1e3,5e3]].map(([K,ce,ie,Ce,Ie])=>(0,v.jsx)(Os,{label:ce,unit:ie,value:s[K],min:Ce,max:Ie,onChange:Ne=>De(K,Ne,Ce,Ie)},K)),(0,v.jsx)(Os,{label:n("tdee"),unit:"kcal",value:c,min:0,max:9e3,onChange:K=>h(tt(K,0,9e3))})]}),(0,v.jsx)(NS,{targets:r,targetProfile:s,t:n})]}),(0,v.jsx)(Ki,{eyebrow:n("rhythmEyebrow"),title:n("structureTitle"),icon:Ya,children:(0,v.jsx)(B2,{report:o,activeCarbDay:l,targets:r,t:n})}),(0,v.jsxs)(Ki,{eyebrow:n("electrolyte"),title:n("electrolyteTitle"),icon:rS,children:[(0,v.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,v.jsx)(Os,{label:n("salt"),unit:"g",value:ae,min:0,max:20,onChange:K=>xe(tt(K,0,20))}),(0,v.jsx)(Os,{label:n("foodK"),unit:"mg",value:ve,min:0,max:8e3,onChange:K=>Be(tt(K,0,8e3))})]}),(0,v.jsxs)("div",{className:`mt-4 rounded-[24px] border p-4 ${ze?"border-[#bdf0d9] bg-[#edfff6]":"border-[#ffd1cb] bg-[#fff1ee]"}`,children:[(0,v.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,v.jsx)("span",{className:"text-sm font-bold text-[#8f6c64]",children:"K / Na"}),(0,v.jsx)("span",{className:ze?"font-extrabold text-[#3da77d]":"font-extrabold text-[#ff7d75]",children:n(ze?"balanced":"lowPotassium")})]}),(0,v.jsxs)("div",{className:"mt-2 text-xs font-semibold text-[#a47b72]",children:["K ",Math.round(i.potassium)," mg \xB7 Na ",Math.round(i.sodium)," mg"]})]})]})]})}function T2({locale:t,t:e,model:n,shopDays:i,setShopDays:r,setShopPlan:s}){let[a,o]=(0,Pe.useState)({}),[l,c]=(0,Pe.useState)(!1),h=[{tone:"red",label:t==="ja"?"\u305F\u3093\u3071\u304F":"\u86CB\u767D\u4E3B\u83DC",caption:t==="ja"?"\u8089\u3001\u30C1\u30AD\u30F3\u3092\u5148\u306B":"\u8089\u3001\u9E21\u80F8\u5148\u8865\u9F50",icon:iS,accent:"#ff8d82"},{tone:"green",label:t==="ja"?"\u4E3B\u98DF":"\u4E3B\u98DF\u78B3\u6C34",caption:t==="ja"?"\u5468\u671F\u5206\u306E\u70AD\u6C34\u5316\u7269":"\u6309\u4E00\u5468\u671F\u671B\u5907\u8D27",icon:uh,accent:"#69cda5"},{tone:"gold",label:t==="ja"?"\u679C\u7269":"\u6C34\u679C\u52A0\u6599",caption:t==="ja"?"\u30D1\u30A4\u30F3\u3001\u30D0\u30CA\u30CA\u3001\u308A\u3093\u3054":"\u83E0\u841D 240g\u3001\u9999\u8549\u3001\u82F9\u679C",icon:tS,accent:"#ffcf7d"},{tone:"amber",label:t==="ja"?"\u8102\u8CEA":"\u6CB9\u8102\u53E3\u5473",caption:t==="ja"?"\u5375\u3001\u30C1\u30FC\u30BA\u3001\u30BD\u30FC\u30B9\u3001\u30CA\u30C3\u30C4":"\u86CB\u3001\u829D\u58EB\u3001\u9171\u548C\u575A\u679C",icon:ch,accent:"#f1b36a"}],f={red:0,green:1,gold:2,amber:3},d=Object.fromEntries(h.map(x=>[x.tone,x])),m=n.shopping.filter(x=>x.enabled),y=m.filter(x=>x.buyQty>0),b=m.filter(x=>x.buyQty<=0),g=h.map(x=>({...x,items:n.shopping.filter(C=>C.tone===x.tone)})).filter(x=>x.items.length>0),u=dS(n.shopping,f),p=u.filter(x=>a[x.key]).length,_=y.reduce((x,C)=>Ut(x,C.macro),Nn),M=m.reduce((x,C)=>Ut(x,C.expectedMacro),Nn),T=(x,C)=>{s(P=>{let I=dh(P,n.shopping);return{...I,[x]:{...I[x],...C}}})},E=()=>{s(x=>{let C=dh(x,n.shopping);return Object.fromEntries(Object.entries(C).map(([P,I])=>[P,{...I,stock:0}]))})},R=x=>{o(C=>({...C,[x]:!C[x]}))};return(0,v.jsxs)("main",{className:"grid gap-5",children:[(0,v.jsxs)("section",{className:"relative overflow-hidden rounded-[34px] border border-white/70 bg-white/76 shadow-[0_30px_90px_-60px_rgba(134,80,70,0.75)]",children:[(0,v.jsx)("img",{src:SS("shop-basket.jpg"),alt:"weekly grocery basket",className:"absolute inset-0 h-full w-full object-cover opacity-40 brightness-[1.16] contrast-[0.92]"}),(0,v.jsx)("div",{className:"soft-shop-wash absolute inset-0"}),(0,v.jsxs)("div",{className:"relative grid gap-6 p-5 sm:p-7 lg:grid-cols-[1fr_0.95fr] lg:items-end",children:[(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:"inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-3 py-2 text-xs font-extrabold text-[#ff8d82] backdrop-blur",children:[(0,v.jsx)(sS,{className:"h-4 w-4"}),"market run"]}),(0,v.jsx)("h2",{className:"mt-4 font-display text-5xl font-extrabold leading-none text-[#4d3934]",children:e("shopHero")}),(0,v.jsx)("p",{className:"mt-3 max-w-xl text-sm font-semibold leading-7 text-[#8f6c64]",children:e("shopCopy")}),(0,v.jsxs)("div",{className:"mt-5 flex flex-wrap items-center gap-2",children:[[3,5,7,10].map(x=>(0,v.jsxs)(Fl,{active:i===x,onClick:()=>r(x),children:[x," \u5929"]},x)),(0,v.jsxs)("button",{onClick:E,className:"inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/70 px-3 py-2 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]",children:[(0,v.jsx)(Fs,{className:"h-4 w-4"}),e("clearStock")]})]})]}),(0,v.jsxs)("div",{className:"grid grid-cols-3 gap-2",children:[(0,v.jsx)(Mg,{icon:oS,label:e("cycle"),value:`${i}`,sub:"days"}),(0,v.jsx)(Mg,{icon:Il,label:e("products"),value:u.length,sub:`${e("picked")}${p}`}),(0,v.jsx)(Mg,{icon:Ya,label:e("actual"),value:Math.round(_.kcal),sub:"kcal"})]})]})]}),(0,v.jsxs)(Ki,{eyebrow:e("directPlan"),title:e("directPlanTitle"),icon:Il,children:[u.length>0?(0,v.jsx)("div",{className:"grid gap-3 sm:grid-cols-2 xl:grid-cols-3",children:u.map(x=>(0,v.jsx)(A2,{item:x,group:d[x.tone],picked:!!a[x.key],onToggle:()=>R(x.key),t:e},x.key))}):(0,v.jsxs)("div",{className:"rounded-[24px] border border-[#bdf0d9] bg-[#edfff6] p-4",children:[(0,v.jsx)("div",{className:"font-cjk text-sm font-extrabold text-[#3da77d]",children:e("nothingToBuy")}),(0,v.jsx)("div",{className:"mt-1 text-xs font-semibold leading-5 text-[#7a9789]",children:e("nothingToBuySub")})]}),(0,v.jsxs)("div",{className:"mt-4 grid grid-cols-4 gap-2",children:[(0,v.jsx)(fn,{label:e("products"),value:u.length}),(0,v.jsx)(fn,{label:e("picked"),value:p}),(0,v.jsx)(fn,{label:e("enough"),value:b.length}),(0,v.jsx)(fn,{label:"Kcal",value:Math.round(_.kcal)})]})]}),(0,v.jsx)(IS,{open:l,onToggle:()=>c(!l),title:e("stockTune"),subtitle:e("stockTuneSub"),children:(0,v.jsxs)("div",{className:"grid gap-5 lg:grid-cols-[0.86fr_1.14fr]",children:[(0,v.jsxs)("div",{className:"rounded-[24px] border border-[#ffe3da] bg-white/58 p-4",children:[(0,v.jsx)("div",{className:"text-xs font-extrabold text-[#a47b72]",children:"cycle target base"}),(0,v.jsxs)("div",{className:"mt-2 grid grid-cols-4 gap-2",children:[(0,v.jsx)(fn,{label:"P",value:Math.round(M.p)}),(0,v.jsx)(fn,{label:"C",value:Math.round(M.c)}),(0,v.jsx)(fn,{label:"F",value:Math.round(M.f)}),(0,v.jsx)(fn,{label:"Kcal",value:Math.round(M.kcal)})]})]}),(0,v.jsx)("div",{className:"grid gap-3",children:g.map(x=>(0,v.jsx)(C2,{group:x,shopDays:i,onUpdate:T,t:e},x.tone))})]})})]})}function A2({item:t,group:e,picked:n,onToggle:i,t:r}){let s=e?.icon||Il,a=e?.accent||"#ff8d82";return(0,v.jsxs)("button",{"data-direct-buy-card":!0,onClick:i,"aria-pressed":n,className:`min-h-[158px] rounded-[26px] border p-4 text-left transition hover:-translate-y-0.5 ${n?"border-[#9fe8ca] bg-[#edfff6]":"border-[#ffe3da] bg-white/62 hover:border-[#ffb8ae] hover:bg-white"}`,children:[(0,v.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,v.jsxs)("span",{className:"inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-extrabold",style:{backgroundColor:`${a}22`,color:a},children:[(0,v.jsx)(s,{className:"h-3.5 w-3.5"}),e?.label||r("products")]}),(0,v.jsx)("span",{className:`grid h-8 w-8 place-items-center rounded-[14px] border ${n?"border-[#9fe8ca] bg-[#69cda5] text-white":"border-[#ffe3da] bg-white/70 text-[#caa39b]"}`,children:(0,v.jsx)(ug,{className:"h-4 w-4"})})]}),(0,v.jsxs)("div",{className:"mt-4 min-w-0",children:[(0,v.jsx)("div",{className:"truncate font-cjk text-base font-extrabold text-[#4d3934]",children:t.label}),(0,v.jsxs)("div",{className:"mt-2 flex items-end gap-2",children:[(0,v.jsx)("span",{className:"font-display text-5xl font-extrabold leading-none text-[#4d3934]",children:ge(t.buyQty)}),(0,v.jsx)("span",{className:"pb-1 text-xs font-bold text-[#a47b72]",children:t.unit})]}),(0,v.jsx)("div",{className:"mt-3 text-xs font-semibold leading-5 text-[#8f6c64]",children:t.reason}),(0,v.jsxs)("div",{className:"mt-2 text-[11px] font-semibold text-[#a47b72]",children:[r("target")," ",t.targetText," \xB7 ",r("stock")," ",t.stockText]})]})]})}function Mg({icon:t,label:e,value:n,sub:i}){return(0,v.jsxs)("div",{className:"rounded-[24px] border border-white/80 bg-white/70 p-3 backdrop-blur",children:[(0,v.jsx)(t,{className:"h-4 w-4 text-[#ff8d82]"}),(0,v.jsx)("div",{className:"mt-3 font-display text-3xl font-extrabold leading-none text-[#4d3934]",children:n}),(0,v.jsxs)("div",{className:"mt-1 text-[11px] font-bold text-[#a47b72]",children:[e," \xB7 ",i]})]})}function C2({group:t,shopDays:e,onUpdate:n,t:i}){let r=t.icon,s=t.items.filter(a=>a.enabled&&a.buyQty>0).length;return(0,v.jsxs)("section",{className:"rounded-[26px] border border-[#ffe3da] bg-white/58 p-3",children:[(0,v.jsxs)("div",{className:"mb-3 flex items-center justify-between gap-3",children:[(0,v.jsxs)("div",{className:"flex min-w-0 items-center gap-2",children:[(0,v.jsx)("span",{className:"grid h-9 w-9 shrink-0 place-items-center rounded-[16px]",style:{backgroundColor:`${t.accent}24`,color:t.accent},children:(0,v.jsx)(r,{className:"h-4 w-4"})}),(0,v.jsxs)("div",{className:"min-w-0",children:[(0,v.jsx)("div",{className:"truncate font-cjk text-sm font-extrabold text-[#4d3934]",children:t.label}),(0,v.jsx)("div",{className:"mt-0.5 truncate text-[11px] font-semibold text-[#a47b72]",children:t.caption})]})]}),(0,v.jsxs)("span",{className:"rounded-full border border-[#ffe3da] bg-white/70 px-2.5 py-1 font-mono text-xs font-bold text-[#8f6c64]",children:[i("buy")," ",s,"/",t.items.length]})]}),(0,v.jsx)("div",{className:"grid gap-2",children:t.items.map(a=>(0,v.jsx)(R2,{item:a,accent:t.accent,shopDays:e,onUpdate:n,t:i},a.key))})]})}function R2({item:t,accent:e,shopDays:n,onUpdate:i,t:r}){let s=l=>{i(t.key,{target:tt(yn(t.weeklyTarget+l,t.step),0,t.max??1/0)})},a=l=>{i(t.key,{stock:tt(yn(t.stockQty+l,t.step),0,t.max??1/0)})},o=t.enabled?t.buyQty>0?`${r("buy")} ${ge(t.buyQty)}${t.unit}`:r("enough"):r("skip");return(0,v.jsxs)("div",{"data-shop-item-row":!0,className:`rounded-[24px] border border-[#ffe3da] bg-white/64 p-3 transition ${t.enabled?"":"opacity-55"}`,children:[(0,v.jsxs)("div",{className:"grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start",children:[(0,v.jsxs)("div",{className:"min-w-0",children:[(0,v.jsx)("div",{className:"truncate font-cjk text-sm font-extrabold text-[#4d3934]",children:t.label}),(0,v.jsxs)("div",{className:"mt-1 text-xs font-semibold leading-5 text-[#a47b72]",children:[r("weeklyTarget")," ",ge(t.weeklyTarget),t.unit," \xB7 ",n,"d ",ge(t.targetQty),t.unit," \xB7 ",r("stock")," ",ge(t.stockQty),t.unit]})]}),(0,v.jsxs)("div",{className:"flex items-center justify-between gap-2 sm:justify-end",children:[(0,v.jsxs)("div",{className:"rounded-[16px] px-2.5 py-1 text-right",style:{backgroundColor:`${e}22`},children:[(0,v.jsx)("div",{className:"font-mono text-sm font-bold text-[#4d3934]",children:o}),(0,v.jsx)("div",{className:"mt-0.5 text-[10px] font-bold text-[#a47b72]",children:"this run"})]}),(0,v.jsx)("button",{onClick:()=>i(t.key,{enabled:!t.enabled}),className:"h-9 rounded-[16px] border border-[#ffe3da] bg-white/70 px-3 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#4d3934]",children:t.enabled?r("skip"):r("add")})]})]}),(0,v.jsxs)("div",{className:"mt-3 grid gap-2 sm:grid-cols-2",children:[(0,v.jsx)(yS,{label:r("weeklyTarget"),value:t.weeklyTarget,unit:t.unit,onMinus:()=>s(-t.step),onPlus:()=>s(t.step)}),(0,v.jsx)(yS,{label:r("stock"),value:t.stockQty,unit:t.unit,onMinus:()=>a(-t.step),onPlus:()=>a(t.step)})]})]})}function yS({label:t,value:e,unit:n,onMinus:i,onPlus:r}){return(0,v.jsxs)("div",{className:"flex items-center justify-between gap-2 rounded-[18px] border border-[#ffe3da] bg-[#fff9f4] px-2.5 py-2",children:[(0,v.jsx)("span",{className:"text-[11px] font-extrabold text-[#a47b72]",children:t}),(0,v.jsxs)("div",{className:"flex items-center gap-1",children:[(0,v.jsx)(os,{label:`-${t}`,onClick:i,icon:Rl}),(0,v.jsxs)("span",{className:"w-16 text-center font-mono text-xs font-bold text-[#4d3934]",children:[ge(e),n]}),(0,v.jsx)(os,{label:`+${t}`,onClick:r,icon:Pl})]})]})}function P2({locale:t,t:e,cheat:n,setCheat:i,cheatTotal:r,cheatSurplus:s,tdee:a,dayKcal:o}){let l=(c,h)=>{i(f=>{let d={...f},m=tt(h,0,9);return m>0?d[c]=m:delete d[c],d})};return(0,v.jsxs)("main",{className:"grid gap-5 lg:grid-cols-[1fr_0.9fr]",children:[(0,v.jsx)(Ki,{eyebrow:e("navCheat"),title:e("cheatTitle"),icon:ch,children:(0,v.jsx)("div",{className:"grid gap-2 sm:grid-cols-2",children:ES.map(c=>{let h=Sn(c,t);return(0,v.jsx)("div",{className:"rounded-[24px] border border-[#ffe3da] bg-white/62 p-3",children:(0,v.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{className:"font-cjk text-sm font-extrabold text-[#4d3934]",children:h.label}),(0,v.jsxs)("div",{className:"mt-1 text-xs font-semibold text-[#a47b72]",children:[h.kcal," kcal"]})]}),(0,v.jsx)(U2,{value:n[h.id]||0,onChange:f=>l(h.id,f)})]})},h.id)})})}),(0,v.jsxs)("section",{className:"overflow-hidden rounded-[34px] border border-white/70 bg-white/76 shadow-[0_30px_90px_-60px_rgba(134,80,70,0.75)]",children:[(0,v.jsx)("img",{src:Eg("cheat.jpg"),alt:"cheat meal",className:"h-56 w-full object-cover brightness-[1.08] contrast-[0.94]"}),(0,v.jsxs)("div",{className:"p-5",children:[(0,v.jsx)("div",{className:"text-xs font-extrabold text-[#ff8d82]",children:e("cheatResult")}),(0,v.jsx)("div",{className:"mt-2 font-display text-6xl font-extrabold text-[#4d3934]",children:r}),(0,v.jsx)("div",{className:"text-sm font-bold text-[#a47b72]",children:e("cheatKcal")}),(0,v.jsxs)("div",{className:"mt-5 grid grid-cols-3 gap-2",children:[(0,v.jsx)(fn,{label:e("todayTotal"),value:Math.round(o+r)}),(0,v.jsx)(fn,{label:e("tdee"),value:a}),(0,v.jsx)(fn,{label:e("deficit"),value:(s>=0?"+":"")+s,hot:s>0})]}),(0,v.jsxs)("button",{onClick:()=>i({}),className:"mt-4 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/70 px-3 py-2 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]",children:[(0,v.jsx)(Fs,{className:"h-4 w-4"}),e("clear")]})]})]})]})}function I2({locale:t,t:e,open:n,setOpen:i,model:r,lunchMode:s,setLunchMode:a,lunchKcal:o,setLunchKcal:l,tally:c,setTally:h,mealSplitPct:f,setMealSplitPct:d,lunchCarbPlan:m,setLunchCarbPlan:y,lunchProteinKeys:b,toggleLunchProtein:g,lunchFatKeys:u,toggleLunchFat:p,pre:_,setPre:M,setMapQty:T,drinkKey:E,setDrinkKey:R,drinkMl:x,setDrinkMl:C,snack:P,setSnack:I,onTuneLunch:U,resetLunchAdjustments:W,dinnerSummary:X}){return n?(0,v.jsxs)("div",{className:"fixed inset-0 z-[70]",children:[(0,v.jsx)("button",{className:"absolute inset-0 bg-[#5d4037]/30 backdrop-blur-sm",onClick:()=>i(!1),"aria-label":"close intake"}),(0,v.jsxs)("aside",{className:"absolute inset-y-0 right-0 flex w-[min(760px,96vw)] flex-col border-l border-white/80 bg-[#fffaf4] shadow-2xl",children:[(0,v.jsxs)("div",{className:"flex items-center justify-between border-b border-[#ffe3da] p-4",children:[(0,v.jsxs)("div",{className:"flex items-center gap-3",children:[(0,v.jsx)("img",{src:Eg("pre.jpg"),alt:"",className:"h-12 w-12 rounded-[18px] object-cover brightness-[1.08]"}),(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{className:"font-display text-xl font-extrabold text-[#4d3934]",children:e("intakeDrawerTitle")}),(0,v.jsx)("div",{className:"text-[11px] font-bold text-[#a47b72]",children:e("intakeDrawerSub")})]})]}),(0,v.jsx)("button",{onClick:()=>i(!1),className:"grid h-9 w-9 place-items-center rounded-[16px] border border-[#ffe3da] bg-white/70 text-[#a47b72] hover:text-[#4d3934]","aria-label":"close",children:(0,v.jsx)(fg,{className:"h-4 w-4"})})]}),(0,v.jsx)("div",{className:"flex-1 overflow-y-auto p-4",children:(0,v.jsx)(Pg,{locale:t,t:e,model:r,lunchMode:s,setLunchMode:a,lunchKcal:o,setLunchKcal:l,tally:c,setTally:h,setMapQty:T,mealSplitPct:f,setMealSplitPct:d,lunchCarbPlan:m,setLunchCarbPlan:y,lunchProteinKeys:b,toggleLunchProtein:g,lunchFatKeys:u,toggleLunchFat:p,pre:_,setPre:M,drinkKey:E,setDrinkKey:R,drinkMl:x,setDrinkMl:C,snack:P,setSnack:I,onTuneLunch:U,resetLunchAdjustments:W,dinnerSummary:X})})]})]}):null}function N2({open:t,setOpen:e,text:n,onCopied:i,t:r}){let s=(0,Pe.useRef)(null);if((0,Pe.useEffect)(()=>{if(!t)return;let o=window.setTimeout(()=>{s.current?.focus(),s.current?.select(),s.current?.setSelectionRange(0,n.length)},80);return()=>window.clearTimeout(o)},[t,n]),!t)return null;let a=async()=>{try{await TS(n),i()}catch{s.current?.focus(),s.current?.select(),s.current?.setSelectionRange(0,n.length)}};return(0,v.jsxs)("div",{className:"fixed inset-0 z-[80]",children:[(0,v.jsx)("button",{className:"absolute inset-0 bg-[#5d4037]/30 backdrop-blur-sm",onClick:()=>e(!1),"aria-label":"close copy panel"}),(0,v.jsxs)("aside",{className:"absolute inset-x-3 bottom-3 rounded-[28px] border border-white/80 bg-[#fffaf4] p-4 shadow-2xl sm:left-auto sm:right-5 sm:w-[min(520px,92vw)]",children:[(0,v.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{className:"font-display text-xl font-extrabold text-[#4d3934]",children:r("manualCopy")}),(0,v.jsx)("div",{className:"mt-1 text-xs font-semibold leading-5 text-[#a47b72]",children:r("manualCopySub")})]}),(0,v.jsx)("button",{onClick:()=>e(!1),className:"grid h-9 w-9 shrink-0 place-items-center rounded-[16px] border border-[#ffe3da] bg-white/70 text-[#a47b72] hover:text-[#4d3934]","aria-label":"close",children:(0,v.jsx)(fg,{className:"h-4 w-4"})})]}),(0,v.jsx)("textarea",{ref:s,readOnly:!0,value:n,className:"mt-4 h-48 w-full resize-none rounded-[20px] border border-[#ffe3da] bg-white/70 p-3 font-mono text-xs leading-5 text-[#4d3934] outline-none focus:border-[#ff9f95]"}),(0,v.jsx)("div",{className:"mt-3 flex justify-end gap-2",children:(0,v.jsxs)("button",{onClick:a,className:"inline-flex items-center gap-2 rounded-[18px] bg-[#ff9f95] px-3 py-2 text-xs font-extrabold text-white",children:[(0,v.jsx)(jn,{className:"h-4 w-4"}),r("copyAgain")]})})]})]})}function Ki({id:t,eyebrow:e,title:n,icon:i,children:r}){return(0,v.jsxs)("section",{id:t,className:"soft-panel scroll-mt-28 rounded-[30px] border border-white/75 bg-white/74 p-4 shadow-[0_24px_70px_-52px_rgba(134,80,70,0.7)] backdrop-blur-2xl sm:p-5",children:[(0,v.jsxs)("div",{className:"mb-4 flex items-start justify-between gap-4",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{className:"text-xs font-extrabold text-[#ff8d82]",children:e}),(0,v.jsx)("h2",{className:"mt-1 font-display text-2xl font-extrabold text-[#4d3934]",children:n})]}),i&&(0,v.jsx)("span",{className:"grid h-10 w-10 place-items-center rounded-[18px] bg-[#fff0ed] text-[#ff8d82]",children:(0,v.jsx)(i,{className:"h-5 w-5"})})]}),r]})}function L2({icon:t,children:e}){return(0,v.jsxs)("div",{className:"inline-flex items-center gap-2 rounded-full border border-[#ffe3da] bg-white/72 px-3 py-2 text-xs font-bold text-[#8f6c64]",children:[(0,v.jsx)(t,{className:"h-4 w-4 text-[#5fc89e]"}),(0,v.jsx)("span",{children:e})]})}function bg({icon:t,label:e,sub:n,onClick:i,dataAttr:r}){return(0,v.jsxs)(i?"button":"div",{"data-copy-plan-button":r==="copy-plan-button"?!0:void 0,onClick:i,className:"min-w-0 rounded-[22px] border border-[#ffe3da] bg-white/70 px-3 py-3 text-left transition hover:-translate-y-0.5 hover:border-[#ffb8ae] hover:bg-white",children:[(0,v.jsx)(t,{className:"mb-1.5 h-4 w-4 text-[#ff8d82]"}),(0,v.jsx)("div",{className:"truncate text-sm font-extrabold text-[#4d3934]",children:e}),n&&(0,v.jsx)("div",{className:"mt-0.5 truncate text-[11px] font-bold text-[#a47b72]",children:n})]})}function fh({label:t,value:e,target:n,unit:i}){let r=e-n,s=Math.abs(r)<=(i?Math.max(8,n*.08):Math.max(80,n*.05));return(0,v.jsxs)("div",{className:"rounded-[18px] border border-white/75 bg-white/72 p-2 backdrop-blur",children:[(0,v.jsx)("div",{className:"text-[11px] font-extrabold text-[#a47b72]",children:t}),(0,v.jsx)("div",{className:"mt-1 font-mono text-lg font-bold text-[#4d3934]",children:Math.round(e)}),(0,v.jsxs)("div",{className:`text-[11px] font-bold ${s?"text-[#3da77d]":"text-[#ff8d82]"}`,children:[r>=0?"+":"",Math.round(r),i]})]})}function D2({value:t,onChange:e,options:n}){return(0,v.jsx)("div",{className:"grid rounded-[22px] border border-[#ffe3da] bg-[#fff9f4] p-1",style:{gridTemplateColumns:`repeat(${n.length}, minmax(0, 1fr))`},children:n.map(i=>(0,v.jsx)("button",{onClick:()=>e(i.value),className:`rounded-[18px] px-3 py-2 text-sm font-extrabold transition ${t===i.value?"bg-[#ff9f95] text-white":"text-[#a47b72] hover:bg-white hover:text-[#4d3934]"}`,children:i.label},i.value))})}function Fl({active:t,onClick:e,children:n}){return(0,v.jsx)("button",{onClick:e,className:`rounded-[18px] border px-3 py-2 text-xs font-extrabold transition ${t?"border-[#ffb8ae] bg-[#fff0ed] text-[#ff7d75]":"border-[#ffe3da] bg-white/62 text-[#a47b72] hover:border-[#ffb8ae] hover:bg-white hover:text-[#4d3934]"}`,children:n})}function Ln({title:t,children:e}){return(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{className:"mb-2 text-xs font-extrabold text-[#a47b72]",children:t}),e]})}function wg({active:t,onClick:e,title:n,meta:i,tone:r="gold"}){let s=r==="green"?"#69cda5":r==="amber"?"#f1b36a":"#ff9f95";return(0,v.jsxs)("button",{onClick:e,className:"rounded-[22px] border p-3 text-left transition hover:-translate-y-0.5",style:{borderColor:t?s:"#ffe3da",background:t?`${s}1f`:"rgba(255,255,255,0.66)"},children:[(0,v.jsx)("div",{className:"font-cjk text-sm font-extrabold text-[#4d3934]",children:n}),(0,v.jsx)("div",{className:"mt-1 text-[11px] font-semibold text-[#a47b72]",children:i})]})}function IS({open:t,onToggle:e,title:n,subtitle:i,children:r}){return(0,v.jsxs)("section",{className:"rounded-[30px] border border-white/75 bg-white/72 shadow-[0_24px_70px_-52px_rgba(134,80,70,0.7)] backdrop-blur-2xl",children:[(0,v.jsxs)("button",{onClick:e,className:"flex w-full items-center justify-between gap-3 p-4 text-left",children:[(0,v.jsxs)("span",{children:[(0,v.jsxs)("span",{className:"flex items-center gap-2 font-display text-2xl font-extrabold text-[#4d3934]",children:[(0,v.jsx)(aS,{className:"h-4 w-4 text-[#ff8d82]"}),n]}),(0,v.jsx)("span",{className:"mt-1 block text-xs font-semibold text-[#a47b72]",children:i})]}),(0,v.jsx)(nS,{className:`h-5 w-5 text-[#a47b72] transition ${t?"rotate-180":""}`})]}),t&&(0,v.jsx)("div",{className:"border-t border-[#ffe3da] p-4",children:r})]})}function F2({value:t,onChange:e,t:n}){let i=(0,Pe.useRef)(!1),[r,s]=(0,Pe.useState)(String(Math.round(t)));(0,Pe.useEffect)(()=>{i.current||s(String(Math.round(t)))},[t]);let a=o=>{let l=o.replace(/\D/g,"");if(!l){s(""),e(0);return}let c=l.replace(/^0+(?=\d)/,""),h=tt(c,0,5e3);s(String(h)),e(h)};return(0,v.jsxs)("div",{className:"mt-5",children:[(0,v.jsx)("label",{className:"text-xs font-extrabold text-[#a47b72]",children:n("lunchKcal")}),(0,v.jsxs)("div",{className:"mt-2 flex items-end gap-3",children:[(0,v.jsx)("input",{type:"text",inputMode:"numeric",pattern:"[0-9]*","aria-label":n("lunchKcal"),value:r,onFocus:()=>{i.current=!0},onBlur:()=>{i.current=!1,s(String(Math.round(t)))},onChange:o=>a(o.target.value),className:"w-40 border-b-2 border-[#ffd8d1] bg-transparent font-display text-6xl font-extrabold leading-none text-[#4d3934] outline-none focus:border-[#ff9f95]"}),(0,v.jsx)("span",{className:"pb-2 text-xs font-extrabold text-[#a47b72]",children:"kcal"})]}),(0,v.jsx)("div",{className:"mt-4 flex flex-wrap gap-2",children:[600,700,800,900,1e3].map(o=>(0,v.jsx)(Fl,{active:t===o,onClick:()=>e(o),children:o},o))})]})}function Ig({label:t,meta:e,value:n,unit:i,step:r,max:s,onChange:a}){return(0,v.jsxs)("div",{className:"grid grid-cols-[1fr_auto] items-center gap-3 rounded-[22px] border border-[#ffe3da] bg-white/64 p-3",children:[(0,v.jsxs)("div",{className:"min-w-0",children:[(0,v.jsx)("div",{className:"truncate font-cjk text-sm font-extrabold text-[#4d3934]",children:t}),(0,v.jsx)("div",{className:"mt-1 truncate text-[11px] font-semibold text-[#a47b72]",children:e})]}),(0,v.jsxs)("div",{className:"flex items-center gap-1",children:[(0,v.jsx)(os,{label:`-${t}`,onClick:()=>a(n-r),icon:Rl}),(0,v.jsxs)("span",{className:"w-14 text-center font-mono text-sm font-bold text-[#4d3934]",children:[ge(n),n>0&&i==="g"?"g":""]}),(0,v.jsx)(os,{label:`+${t}`,onClick:()=>a(Math.min(s,n+r)),icon:Pl})]})]})}function U2({value:t,onChange:e}){return(0,v.jsxs)("div",{className:"flex items-center gap-1",children:[(0,v.jsx)(os,{label:"minus",onClick:()=>e(t-1),icon:Rl}),(0,v.jsx)("span",{className:"w-7 text-center font-mono text-sm font-bold text-[#4d3934]",children:t}),(0,v.jsx)(os,{label:"plus",onClick:()=>e(t+1),icon:Pl})]})}function os({label:t,onClick:e,icon:n}){return(0,v.jsx)("button",{onClick:e,"aria-label":t,className:"grid h-8 w-8 place-items-center rounded-[14px] border border-[#ffe3da] bg-white/70 text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]",children:(0,v.jsx)(n,{className:"h-4 w-4"})})}function ph(t){return String(ge(t,1))}function k2(t){let e=String(t).replace(/[^\d.]/g,"");if(!e)return"";let[n="",...i]=e.split("."),r=n.replace(/^0+(?=\d)/,"");return i.length?`${r||"0"}.${i.join("")}`:r}function Os({label:t,unit:e,value:n,onChange:i,min:r=0,max:s=1/0}){let a=(0,Pe.useRef)(!1),[o,l]=(0,Pe.useState)(()=>ph(n));(0,Pe.useEffect)(()=>{a.current||l(ph(n))},[n]);let c=()=>{let f=Number(o);if(!o||!Number.isFinite(f)){l(ph(n));return}let d=tt(f,r,s);i(d),l(ph(d))};return(0,v.jsxs)("label",{className:"block rounded-[20px] border border-[#ffe3da] bg-white/64 p-3",children:[(0,v.jsx)("span",{className:"block text-[11px] font-extrabold text-[#a47b72]",children:t}),(0,v.jsxs)("span",{className:"mt-1 flex items-baseline gap-1",children:[(0,v.jsx)("input",{type:"text",inputMode:"decimal","aria-label":t,value:o,onFocus:()=>{a.current=!0},onBlur:()=>{a.current=!1,c()},onKeyDown:f=>{f.key==="Enter"&&f.currentTarget.blur()},onChange:f=>{let d=k2(f.target.value);l(d)},className:"min-w-0 flex-1 bg-transparent font-mono text-lg font-bold text-[#4d3934] outline-none"}),(0,v.jsx)("span",{className:"text-[11px] font-bold text-[#a47b72]",children:e})]})]})}function NS({targets:t,targetProfile:e,t:n}){let i=[{label:n("proteinTarget"),value:`${ge(t.p,1)}g`,sub:`${ge(e.proteinPerKg,1)}g/kg`},{label:n("fatTarget"),value:`${ge(t.f,1)}g`,sub:`${ge(e.fatMinPerKg,1)}g/kg`},{label:n("carbRemainder"),value:`${ge(t.c,1)}g`,sub:n("carbRemainderSub")}];return(0,v.jsx)("div",{className:"mt-3 grid gap-2 sm:grid-cols-3",children:i.map(r=>(0,v.jsxs)("div",{className:"rounded-[20px] border border-[#ffe3da] bg-white/64 p-3",children:[(0,v.jsx)("div",{className:"text-[11px] font-extrabold text-[#a47b72]",children:r.label}),(0,v.jsx)("div",{className:"mt-1 font-mono text-lg font-bold text-[#4d3934]",children:r.value}),(0,v.jsx)("div",{className:"mt-1 text-[11px] font-semibold text-[#a47b72]",children:r.sub})]},r.label))})}function O2({report:t,activeCarbDay:e,t:n}){let i={amber:"border-[#ffd6a5] bg-[#fff6df] text-[#b97325]",green:"border-[#bdf0d9] bg-[#edfff6] text-[#3da77d]",red:"border-[#ffd1cb] bg-[#fff1ee] text-[#ff7d75]"}[t.carbDay.tone]||"border-[#ffe3da] bg-white/64 text-[#8f6c64]";return(0,v.jsxs)("div",{className:`rounded-[24px] border p-3 ${i}`,children:[(0,v.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,v.jsx)("span",{className:"text-xs font-bold text-[#a47b72]",children:n("carbDay")}),(0,v.jsx)("span",{className:"font-cjk text-sm font-extrabold",children:e.label})]}),(0,v.jsxs)("div",{className:"mt-1 text-[11px] font-bold text-[#a47b72]",children:["C ",t.carbPerKg,"g/kg \xB7 P ",t.proteinPerKg,"g/kg"]})]})}function B2({report:t,activeCarbDay:e,targets:n,t:i}){let r=[{label:i("proteinCalories"),value:`${t.proteinPct}%`,sub:`${t.proteinPerKg}g/kg \xB7 ${i("target")} ${t.proteinTargetPerKg}g/kg`},{label:i("carbCalories"),value:`${t.carbPct}%`,sub:`${t.carbPerKg}g/kg \xB7 ${i("target")} ${t.carbTargetPerKg}g/kg`},{label:i("fatCalories"),value:`${t.fatPct}%`,sub:`${t.fatPerKg}g/kg \xB7 ${i("target")} ${ge(n.f,1)}g`},{label:i("carbJudge"),value:e.label,sub:t.carbDay.note,hot:t.carbDay.tone==="red"}];return(0,v.jsx)("div",{className:"grid gap-2 sm:grid-cols-2",children:r.map(s=>(0,v.jsx)(fn,{label:s.label,value:s.value,sub:s.sub,hot:s.hot},s.label))})}function LS({item:t,index:e,onTune:n,t:i}){let s={red:"#ff8d82",amber:"#f1b36a",gold:"#ffcf7d",green:"#69cda5"}[t.tone]||"#85d7e3",a=t.adjustment>0?`+${ge(t.adjustment)}`:ge(t.adjustment);return(0,v.jsxs)("div",{"data-dinner-tune-row":!0,className:"grid grid-cols-[40px_1fr_auto] items-center gap-3 rounded-[24px] border border-[#ffe3da] bg-white/64 p-3",children:[(0,v.jsx)("span",{className:"grid h-10 w-10 place-items-center rounded-[17px] font-mono text-xs font-extrabold text-white",style:{backgroundColor:s},children:String(e+1).padStart(2,"0")}),(0,v.jsxs)("div",{className:"min-w-0",children:[(0,v.jsx)("div",{className:"truncate font-cjk text-sm font-extrabold text-[#4d3934]",children:t.name}),(0,v.jsxs)("div",{className:"mt-1 truncate text-[11px] font-semibold text-[#a47b72]",children:["P",ge(t.macro.p)," \xB7 C",ge(t.macro.c)," \xB7 F",ge(t.macro.f),t.adjustment!==0&&(0,v.jsxs)("span",{className:"text-[#ff8d82]",children:[" \xB7 ",i("adjust")," ",a,t.unit]})]})]}),(0,v.jsxs)("div",{className:"text-right",children:[(0,v.jsx)("div",{className:"font-display text-2xl font-extrabold leading-none text-[#4d3934]",children:ge(t.qty)}),(0,v.jsx)("div",{className:"mt-1 text-[11px] font-bold text-[#a47b72]",children:t.unit}),n&&(0,v.jsxs)("div",{className:"mt-2 flex items-center justify-end gap-1",children:[(0,v.jsx)(os,{label:`-${t.name}`,onClick:()=>n(t,-t.step),icon:Rl}),(0,v.jsx)(os,{label:`+${t.name}`,onClick:()=>n(t,t.step),icon:Pl})]})]})]})}function mh({label:t,value:e,target:n,unit:i,color:r}){let s=Math.min(135,e/Math.max(1,n)*100),a=Math.round(e-n);return(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:"mb-2 flex items-center justify-between gap-3",children:[(0,v.jsx)("span",{className:"text-sm font-extrabold text-[#4d3934]",children:t}),(0,v.jsxs)("span",{className:"font-mono text-xs font-bold text-[#a47b72]",children:[Math.round(e)," / ",ge(n)," ",i]})]}),(0,v.jsx)("div",{className:"relative h-2.5 overflow-hidden rounded-full bg-[#fff0ed]",children:(0,v.jsx)("div",{className:"h-full rounded-full transition-all duration-700",style:{width:`${s}%`,backgroundColor:r}})}),(0,v.jsxs)("div",{className:"mt-1 text-right text-[11px] font-bold text-[#a47b72]",children:[a>=0?"+":"",a,i]})]})}function Ll({label:t,macro:e,strong:n}){return(0,v.jsxs)("div",{className:`grid grid-cols-[1fr_auto] items-center gap-3 border-t border-[#ffe3da] py-3 first:border-t-0 ${n?"text-[#4d3934]":"text-[#8f6c64]"}`,children:[(0,v.jsx)("div",{className:"font-cjk text-sm font-extrabold",children:t}),(0,v.jsxs)("div",{className:"font-mono text-xs font-bold text-[#a47b72]",children:["P",ge(e.p)," C",ge(e.c)," F",ge(e.f)," \xB7 ",Math.round(Zn(e))," kcal"]})]})}function fn({label:t,value:e,sub:n,hot:i}){return(0,v.jsxs)("div",{className:`rounded-[20px] border p-3 ${i?"border-[#ffd1cb] bg-[#fff1ee]":"border-[#ffe3da] bg-white/64"}`,children:[(0,v.jsx)("div",{className:"text-[11px] font-extrabold text-[#a47b72]",children:t}),(0,v.jsx)("div",{className:`mt-1 font-mono text-lg font-bold ${i?"text-[#ff7d75]":"text-[#4d3934]"}`,children:e}),n&&(0,v.jsx)("div",{className:"mt-1 text-[11px] font-semibold leading-4 text-[#a47b72]",children:n})]})}var Ng=Ri(Nl(),1);FS.default.createRoot(document.getElementById("root")).render((0,Ng.jsx)(DS.default.StrictMode,{children:(0,Ng.jsx)(Rg,{})}));
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide-react/dist/esm/defaultAttributes.mjs:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide-react/dist/esm/context.mjs:
lucide-react/dist/esm/Icon.mjs:
lucide-react/dist/esm/createLucideIcon.mjs:
lucide-react/dist/esm/icons/activity.mjs:
lucide-react/dist/esm/icons/apple.mjs:
lucide-react/dist/esm/icons/circle-check.mjs:
lucide-react/dist/esm/icons/chevron-down.mjs:
lucide-react/dist/esm/icons/clipboard-list.mjs:
lucide-react/dist/esm/icons/dumbbell.mjs:
lucide-react/dist/esm/icons/flame.mjs:
lucide-react/dist/esm/icons/gauge.mjs:
lucide-react/dist/esm/icons/goal.mjs:
lucide-react/dist/esm/icons/leaf.mjs:
lucide-react/dist/esm/icons/minus.mjs:
lucide-react/dist/esm/icons/package-check.mjs:
lucide-react/dist/esm/icons/plus.mjs:
lucide-react/dist/esm/icons/rotate-ccw.mjs:
lucide-react/dist/esm/icons/settings-2.mjs:
lucide-react/dist/esm/icons/shopping-basket.mjs:
lucide-react/dist/esm/icons/sparkles.mjs:
lucide-react/dist/esm/icons/timer.mjs:
lucide-react/dist/esm/icons/utensils.mjs:
lucide-react/dist/esm/icons/x.mjs:
lucide-react/dist/esm/icons/zap.mjs:
  (**
   * @license lucide-react v1.18.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
