var KT=Object.create;var Iv=Object.defineProperty;var $T=Object.getOwnPropertyDescriptor;var jT=Object.getOwnPropertyNames;var ZT=Object.getPrototypeOf,JT=Object.prototype.hasOwnProperty;var Cr=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var QT=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of jT(e))!JT.call(n,r)&&r!==t&&Iv(n,r,{get:()=>e[r],enumerable:!(i=$T(e,r))||i.enumerable});return n};var ai=(n,e,t)=>(t=n!=null?KT(ZT(n)):{},QT(e||!n||!n.__esModule?Iv(t,"default",{value:n,enumerable:!0}):t,n));var Hv=Cr(Ze=>{"use strict";var bl=Symbol.for("react.element"),ew=Symbol.for("react.portal"),tw=Symbol.for("react.fragment"),nw=Symbol.for("react.strict_mode"),iw=Symbol.for("react.profiler"),rw=Symbol.for("react.provider"),sw=Symbol.for("react.context"),aw=Symbol.for("react.forward_ref"),ow=Symbol.for("react.suspense"),lw=Symbol.for("react.memo"),cw=Symbol.for("react.lazy"),Nv=Symbol.iterator;function uw(n){return n===null||typeof n!="object"?null:(n=Nv&&n[Nv]||n["@@iterator"],typeof n=="function"?n:null)}var Fv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uv=Object.assign,Ov={};function eo(n,e,t){this.props=n,this.context=e,this.refs=Ov,this.updater=t||Fv}eo.prototype.isReactComponent={};eo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};eo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function kv(){}kv.prototype=eo.prototype;function Vp(n,e,t){this.props=n,this.context=e,this.refs=Ov,this.updater=t||Fv}var Gp=Vp.prototype=new kv;Gp.constructor=Vp;Uv(Gp,eo.prototype);Gp.isPureReactComponent=!0;var Dv=Array.isArray,Bv=Object.prototype.hasOwnProperty,Hp={current:null},zv={key:!0,ref:!0,__self:!0,__source:!0};function Vv(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Bv.call(e,i)&&!zv.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:bl,type:n,key:s,ref:a,props:r,_owner:Hp.current}}function hw(n,e){return{$$typeof:bl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Wp(n){return typeof n=="object"&&n!==null&&n.$$typeof===bl}function fw(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Lv=/\/+/g;function zp(n,e){return typeof n=="object"&&n!==null&&n.key!=null?fw(""+n.key):e.toString(36)}function Vu(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case bl:case ew:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+zp(a,0):i,Dv(r)?(t="",n!=null&&(t=n.replace(Lv,"$&/")+"/"),Vu(r,e,t,"",function(c){return c})):r!=null&&(Wp(r)&&(r=hw(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Lv,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Dv(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+zp(s,o);a+=Vu(s,e,t,l,r)}else if(l=uw(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+zp(s,o++),a+=Vu(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function zu(n,e,t){if(n==null)return n;var i=[],r=0;return Vu(n,i,"","",function(s){return e.call(t,s,r++)}),i}function dw(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var On={current:null},Gu={transition:null},pw={ReactCurrentDispatcher:On,ReactCurrentBatchConfig:Gu,ReactCurrentOwner:Hp};function Gv(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:zu,forEach:function(n,e,t){zu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return zu(n,function(){e++}),e},toArray:function(n){return zu(n,function(e){return e})||[]},only:function(n){if(!Wp(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ze.Component=eo;Ze.Fragment=tw;Ze.Profiler=iw;Ze.PureComponent=Vp;Ze.StrictMode=nw;Ze.Suspense=ow;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pw;Ze.act=Gv;Ze.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Uv({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Hp.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)Bv.call(e,l)&&!zv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:bl,type:n.type,key:r,ref:s,props:i,_owner:a}};Ze.createContext=function(n){return n={$$typeof:sw,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:rw,_context:n},n.Consumer=n};Ze.createElement=Vv;Ze.createFactory=function(n){var e=Vv.bind(null,n);return e.type=n,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(n){return{$$typeof:aw,render:n}};Ze.isValidElement=Wp;Ze.lazy=function(n){return{$$typeof:cw,_payload:{_status:-1,_result:n},_init:dw}};Ze.memo=function(n,e){return{$$typeof:lw,type:n,compare:e===void 0?null:e}};Ze.startTransition=function(n){var e=Gu.transition;Gu.transition={};try{n()}finally{Gu.transition=e}};Ze.unstable_act=Gv;Ze.useCallback=function(n,e){return On.current.useCallback(n,e)};Ze.useContext=function(n){return On.current.useContext(n)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(n){return On.current.useDeferredValue(n)};Ze.useEffect=function(n,e){return On.current.useEffect(n,e)};Ze.useId=function(){return On.current.useId()};Ze.useImperativeHandle=function(n,e,t){return On.current.useImperativeHandle(n,e,t)};Ze.useInsertionEffect=function(n,e){return On.current.useInsertionEffect(n,e)};Ze.useLayoutEffect=function(n,e){return On.current.useLayoutEffect(n,e)};Ze.useMemo=function(n,e){return On.current.useMemo(n,e)};Ze.useReducer=function(n,e,t){return On.current.useReducer(n,e,t)};Ze.useRef=function(n){return On.current.useRef(n)};Ze.useState=function(n){return On.current.useState(n)};Ze.useSyncExternalStore=function(n,e,t){return On.current.useSyncExternalStore(n,e,t)};Ze.useTransition=function(){return On.current.useTransition()};Ze.version="18.3.1"});var aa=Cr((eD,Wv)=>{"use strict";Wv.exports=Hv()});var ex=Cr(_t=>{"use strict";function Kp(n,e){var t=n.length;n.push(e);e:for(;0<t;){var i=t-1>>>1,r=n[i];if(0<Hu(r,e))n[i]=e,n[t]=r,t=i;else break e}}function zi(n){return n.length===0?null:n[0]}function Xu(n){if(n.length===0)return null;var e=n[0],t=n.pop();if(t!==e){n[0]=t;e:for(var i=0,r=n.length,s=r>>>1;i<s;){var a=2*(i+1)-1,o=n[a],l=a+1,c=n[l];if(0>Hu(o,t))l<r&&0>Hu(c,o)?(n[i]=c,n[l]=t,i=l):(n[i]=o,n[a]=t,i=a);else if(l<r&&0>Hu(c,t))n[i]=c,n[l]=t,i=l;else break e}}return e}function Hu(n,e){var t=n.sortIndex-e.sortIndex;return t!==0?t:n.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(Xv=performance,_t.unstable_now=function(){return Xv.now()}):(Xp=Date,qv=Xp.now(),_t.unstable_now=function(){return Xp.now()-qv});var Xv,Xp,qv,rr=[],os=[],mw=1,Ti=null,Mn=3,qu=!1,oa=!1,wl=!1,$v=typeof setTimeout=="function"?setTimeout:null,jv=typeof clearTimeout=="function"?clearTimeout:null,Yv=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $p(n){for(var e=zi(os);e!==null;){if(e.callback===null)Xu(os);else if(e.startTime<=n)Xu(os),e.sortIndex=e.expirationTime,Kp(rr,e);else break;e=zi(os)}}function jp(n){if(wl=!1,$p(n),!oa)if(zi(rr)!==null)oa=!0,Jp(Zp);else{var e=zi(os);e!==null&&Qp(jp,e.startTime-n)}}function Zp(n,e){oa=!1,wl&&(wl=!1,jv(El),El=-1),qu=!0;var t=Mn;try{for($p(e),Ti=zi(rr);Ti!==null&&(!(Ti.expirationTime>e)||n&&!Qv());){var i=Ti.callback;if(typeof i=="function"){Ti.callback=null,Mn=Ti.priorityLevel;var r=i(Ti.expirationTime<=e);e=_t.unstable_now(),typeof r=="function"?Ti.callback=r:Ti===zi(rr)&&Xu(rr),$p(e)}else Xu(rr);Ti=zi(rr)}if(Ti!==null)var s=!0;else{var a=zi(os);a!==null&&Qp(jp,a.startTime-e),s=!1}return s}finally{Ti=null,Mn=t,qu=!1}}var Yu=!1,Wu=null,El=-1,Zv=5,Jv=-1;function Qv(){return!(_t.unstable_now()-Jv<Zv)}function qp(){if(Wu!==null){var n=_t.unstable_now();Jv=n;var e=!0;try{e=Wu(!0,n)}finally{e?Tl():(Yu=!1,Wu=null)}}else Yu=!1}var Tl;typeof Yv=="function"?Tl=function(){Yv(qp)}:typeof MessageChannel<"u"?(Yp=new MessageChannel,Kv=Yp.port2,Yp.port1.onmessage=qp,Tl=function(){Kv.postMessage(null)}):Tl=function(){$v(qp,0)};var Yp,Kv;function Jp(n){Wu=n,Yu||(Yu=!0,Tl())}function Qp(n,e){El=$v(function(){n(_t.unstable_now())},e)}_t.unstable_IdlePriority=5;_t.unstable_ImmediatePriority=1;_t.unstable_LowPriority=4;_t.unstable_NormalPriority=3;_t.unstable_Profiling=null;_t.unstable_UserBlockingPriority=2;_t.unstable_cancelCallback=function(n){n.callback=null};_t.unstable_continueExecution=function(){oa||qu||(oa=!0,Jp(Zp))};_t.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Zv=0<n?Math.floor(1e3/n):5};_t.unstable_getCurrentPriorityLevel=function(){return Mn};_t.unstable_getFirstCallbackNode=function(){return zi(rr)};_t.unstable_next=function(n){switch(Mn){case 1:case 2:case 3:var e=3;break;default:e=Mn}var t=Mn;Mn=e;try{return n()}finally{Mn=t}};_t.unstable_pauseExecution=function(){};_t.unstable_requestPaint=function(){};_t.unstable_runWithPriority=function(n,e){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var t=Mn;Mn=n;try{return e()}finally{Mn=t}};_t.unstable_scheduleCallback=function(n,e,t){var i=_t.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?i+t:i):t=i,n){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=t+r,n={id:mw++,callback:e,priorityLevel:n,startTime:t,expirationTime:r,sortIndex:-1},t>i?(n.sortIndex=t,Kp(os,n),zi(rr)===null&&n===zi(os)&&(wl?(jv(El),El=-1):wl=!0,Qp(jp,t-i))):(n.sortIndex=r,Kp(rr,n),oa||qu||(oa=!0,Jp(Zp))),n};_t.unstable_shouldYield=Qv;_t.unstable_wrapCallback=function(n){var e=Mn;return function(){var t=Mn;Mn=e;try{return n.apply(this,arguments)}finally{Mn=t}}}});var nx=Cr((nD,tx)=>{"use strict";tx.exports=ex()});var aM=Cr(fi=>{"use strict";var gw=aa(),ui=nx();function ie(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cy=new Set,Kl={};function ya(n,e){Mo(n,e),Mo(n+"Capture",e)}function Mo(n,e){for(Kl[n]=e,n=0;n<e.length;n++)cy.add(e[n])}var Lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mm=Object.prototype.hasOwnProperty,_w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ix={},rx={};function vw(n){return Mm.call(rx,n)?!0:Mm.call(ix,n)?!1:_w.test(n)?rx[n]=!0:(ix[n]=!0,!1)}function xw(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function yw(n,e,t,i){if(e===null||typeof e>"u"||xw(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function zn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var pn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){pn[n]=new zn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];pn[e]=new zn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){pn[n]=new zn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){pn[n]=new zn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){pn[n]=new zn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){pn[n]=new zn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){pn[n]=new zn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){pn[n]=new zn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){pn[n]=new zn(n,5,!1,n.toLowerCase(),null,!1,!1)});var pg=/[\-:]([a-z])/g;function mg(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(pg,mg);pn[e]=new zn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(pg,mg);pn[e]=new zn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(pg,mg);pn[e]=new zn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){pn[n]=new zn(n,1,!1,n.toLowerCase(),null,!1,!1)});pn.xlinkHref=new zn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){pn[n]=new zn(n,1,!1,n.toLowerCase(),null,!0,!0)});function gg(n,e,t,i){var r=pn.hasOwnProperty(e)?pn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yw(e,t,r,i)&&(t=null),i||r===null?vw(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var kr=gw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ku=Symbol.for("react.element"),io=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),_g=Symbol.for("react.strict_mode"),bm=Symbol.for("react.profiler"),uy=Symbol.for("react.provider"),hy=Symbol.for("react.context"),vg=Symbol.for("react.forward_ref"),Tm=Symbol.for("react.suspense"),wm=Symbol.for("react.suspense_list"),xg=Symbol.for("react.memo"),cs=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var fy=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var sx=Symbol.iterator;function Al(n){return n===null||typeof n!="object"?null:(n=sx&&n[sx]||n["@@iterator"],typeof n=="function"?n:null)}var Rt=Object.assign,em;function Fl(n){if(em===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);em=e&&e[1]||""}return`
`+em+n}var tm=!1;function nm(n,e){if(!n||tm)return"";tm=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{tm=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Fl(n):""}function Sw(n){switch(n.tag){case 5:return Fl(n.type);case 16:return Fl("Lazy");case 13:return Fl("Suspense");case 19:return Fl("SuspenseList");case 0:case 2:case 15:return n=nm(n.type,!1),n;case 11:return n=nm(n.type.render,!1),n;case 1:return n=nm(n.type,!0),n;default:return""}}function Em(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ro:return"Fragment";case io:return"Portal";case bm:return"Profiler";case _g:return"StrictMode";case Tm:return"Suspense";case wm:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case hy:return(n.displayName||"Context")+".Consumer";case uy:return(n._context.displayName||"Context")+".Provider";case vg:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case xg:return e=n.displayName||null,e!==null?e:Em(n.type)||"Memo";case cs:e=n._payload,n=n._init;try{return Em(n(e))}catch{}}return null}function Mw(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Em(e);case 8:return e===_g?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function dy(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bw(n){var e=dy(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function $u(n){n._valueTracker||(n._valueTracker=bw(n))}function py(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=dy(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function bh(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Am(n,e){var t=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function ax(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=bs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function my(n,e){e=e.checked,e!=null&&gg(n,"checked",e,!1)}function Cm(n,e){my(n,e);var t=bs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Rm(n,e.type,t):e.hasOwnProperty("defaultValue")&&Rm(n,e.type,bs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function ox(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Rm(n,e,t){(e!=="number"||bh(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ul=Array.isArray;function go(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+bs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Pm(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function lx(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ie(92));if(Ul(t)){if(1<t.length)throw Error(ie(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:bs(t)}}function gy(n,e){var t=bs(e.value),i=bs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function cx(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function _y(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Im(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?_y(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ju,vy=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n})(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ju=ju||document.createElement("div"),ju.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ju.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function $l(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Bl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tw=["Webkit","ms","Moz","O"];Object.keys(Bl).forEach(function(n){Tw.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Bl[e]=Bl[n]})});function xy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Bl.hasOwnProperty(n)&&Bl[n]?(""+e).trim():e+"px"}function yy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=xy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var ww=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nm(n,e){if(e){if(ww[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Dm(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lm=null;function yg(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fm=null,_o=null,vo=null;function ux(n){if(n=dc(n)){if(typeof Fm!="function")throw Error(ie(280));var e=n.stateNode;e&&(e=Zh(e),Fm(n.stateNode,n.type,e))}}function Sy(n){_o?vo?vo.push(n):vo=[n]:_o=n}function My(){if(_o){var n=_o,e=vo;if(vo=_o=null,ux(n),e)for(n=0;n<e.length;n++)ux(e[n])}}function by(n,e){return n(e)}function Ty(){}var im=!1;function wy(n,e,t){if(im)return n(e,t);im=!0;try{return by(n,e,t)}finally{im=!1,(_o!==null||vo!==null)&&(Ty(),My())}}function jl(n,e){var t=n.stateNode;if(t===null)return null;var i=Zh(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ie(231,e,typeof t));return t}var Um=!1;if(Lr)try{to={},Object.defineProperty(to,"passive",{get:function(){Um=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Um=!1}var to;function Ew(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var zl=!1,Th=null,wh=!1,Om=null,Aw={onError:function(n){zl=!0,Th=n}};function Cw(n,e,t,i,r,s,a,o,l){zl=!1,Th=null,Ew.apply(Aw,arguments)}function Rw(n,e,t,i,r,s,a,o,l){if(Cw.apply(this,arguments),zl){if(zl){var c=Th;zl=!1,Th=null}else throw Error(ie(198));wh||(wh=!0,Om=c)}}function Sa(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Ey(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function hx(n){if(Sa(n)!==n)throw Error(ie(188))}function Pw(n){var e=n.alternate;if(!e){if(e=Sa(n),e===null)throw Error(ie(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return hx(r),n;if(s===i)return hx(r),e;s=s.sibling}throw Error(ie(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(t.alternate!==i)throw Error(ie(190))}if(t.tag!==3)throw Error(ie(188));return t.stateNode.current===t?n:e}function Ay(n){return n=Pw(n),n!==null?Cy(n):null}function Cy(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Cy(n);if(e!==null)return e;n=n.sibling}return null}var Ry=ui.unstable_scheduleCallback,fx=ui.unstable_cancelCallback,Iw=ui.unstable_shouldYield,Nw=ui.unstable_requestPaint,Xt=ui.unstable_now,Dw=ui.unstable_getCurrentPriorityLevel,Sg=ui.unstable_ImmediatePriority,Py=ui.unstable_UserBlockingPriority,Eh=ui.unstable_NormalPriority,Lw=ui.unstable_LowPriority,Iy=ui.unstable_IdlePriority,Yh=null,lr=null;function Fw(n){if(lr&&typeof lr.onCommitFiberRoot=="function")try{lr.onCommitFiberRoot(Yh,n,void 0,(n.current.flags&128)===128)}catch{}}var Xi=Math.clz32?Math.clz32:kw,Uw=Math.log,Ow=Math.LN2;function kw(n){return n>>>=0,n===0?32:31-(Uw(n)/Ow|0)|0}var Zu=64,Ju=4194304;function Ol(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ah(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=Ol(o):(s&=a,s!==0&&(i=Ol(s)))}else a=t&~r,a!==0?i=Ol(a):s!==0&&(i=Ol(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Xi(e),r=1<<t,i|=n[t],e&=~r;return i}function Bw(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zw(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-Xi(s),o=1<<a,l=r[a];l===-1?((o&t)===0||(o&i)!==0)&&(r[a]=Bw(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function km(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ny(){var n=Zu;return Zu<<=1,(Zu&4194240)===0&&(Zu=64),n}function rm(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function hc(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Xi(e),n[e]=t}function Vw(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Xi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Mg(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Xi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var st=0;function Dy(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ly,bg,Fy,Uy,Oy,Bm=!1,Qu=[],ms=null,gs=null,_s=null,Zl=new Map,Jl=new Map,hs=[],Gw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dx(n,e){switch(n){case"focusin":case"focusout":ms=null;break;case"dragenter":case"dragleave":gs=null;break;case"mouseover":case"mouseout":_s=null;break;case"pointerover":case"pointerout":Zl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jl.delete(e.pointerId)}}function Cl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=dc(e),e!==null&&bg(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Hw(n,e,t,i,r){switch(e){case"focusin":return ms=Cl(ms,n,e,t,i,r),!0;case"dragenter":return gs=Cl(gs,n,e,t,i,r),!0;case"mouseover":return _s=Cl(_s,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Zl.set(s,Cl(Zl.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Jl.set(s,Cl(Jl.get(s)||null,n,e,t,i,r)),!0}return!1}function ky(n){var e=ua(n.target);if(e!==null){var t=Sa(e);if(t!==null){if(e=t.tag,e===13){if(e=Ey(t),e!==null){n.blockedOn=e,Oy(n.priority,function(){Fy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function dh(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=zm(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Lm=i,t.target.dispatchEvent(i),Lm=null}else return e=dc(t),e!==null&&bg(e),n.blockedOn=t,!1;e.shift()}return!0}function px(n,e,t){dh(n)&&t.delete(e)}function Ww(){Bm=!1,ms!==null&&dh(ms)&&(ms=null),gs!==null&&dh(gs)&&(gs=null),_s!==null&&dh(_s)&&(_s=null),Zl.forEach(px),Jl.forEach(px)}function Rl(n,e){n.blockedOn===e&&(n.blockedOn=null,Bm||(Bm=!0,ui.unstable_scheduleCallback(ui.unstable_NormalPriority,Ww)))}function Ql(n){function e(r){return Rl(r,n)}if(0<Qu.length){Rl(Qu[0],n);for(var t=1;t<Qu.length;t++){var i=Qu[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ms!==null&&Rl(ms,n),gs!==null&&Rl(gs,n),_s!==null&&Rl(_s,n),Zl.forEach(e),Jl.forEach(e),t=0;t<hs.length;t++)i=hs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<hs.length&&(t=hs[0],t.blockedOn===null);)ky(t),t.blockedOn===null&&hs.shift()}var xo=kr.ReactCurrentBatchConfig,Ch=!0;function Xw(n,e,t,i){var r=st,s=xo.transition;xo.transition=null;try{st=1,Tg(n,e,t,i)}finally{st=r,xo.transition=s}}function qw(n,e,t,i){var r=st,s=xo.transition;xo.transition=null;try{st=4,Tg(n,e,t,i)}finally{st=r,xo.transition=s}}function Tg(n,e,t,i){if(Ch){var r=zm(n,e,t,i);if(r===null)hm(n,e,i,Rh,t),dx(n,i);else if(Hw(r,n,e,t,i))i.stopPropagation();else if(dx(n,i),e&4&&-1<Gw.indexOf(n)){for(;r!==null;){var s=dc(r);if(s!==null&&Ly(s),s=zm(n,e,t,i),s===null&&hm(n,e,i,Rh,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else hm(n,e,i,null,t)}}var Rh=null;function zm(n,e,t,i){if(Rh=null,n=yg(i),n=ua(n),n!==null)if(e=Sa(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Ey(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Rh=n,null}function By(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dw()){case Sg:return 1;case Py:return 4;case Eh:case Lw:return 16;case Iy:return 536870912;default:return 16}default:return 16}}var ds=null,wg=null,ph=null;function zy(){if(ph)return ph;var n,e=wg,t=e.length,i,r="value"in ds?ds.value:ds.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return ph=r.slice(n,1<i?1-i:void 0)}function mh(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function eh(){return!0}function mx(){return!1}function hi(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?eh:mx,this.isPropagationStopped=mx,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=eh)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=eh)},persist:function(){},isPersistent:eh}),e}var Ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eg=hi(Ro),fc=Rt({},Ro,{view:0,detail:0}),Yw=hi(fc),sm,am,Pl,Kh=Rt({},fc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ag,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Pl&&(Pl&&n.type==="mousemove"?(sm=n.screenX-Pl.screenX,am=n.screenY-Pl.screenY):am=sm=0,Pl=n),sm)},movementY:function(n){return"movementY"in n?n.movementY:am}}),gx=hi(Kh),Kw=Rt({},Kh,{dataTransfer:0}),$w=hi(Kw),jw=Rt({},fc,{relatedTarget:0}),om=hi(jw),Zw=Rt({},Ro,{animationName:0,elapsedTime:0,pseudoElement:0}),Jw=hi(Zw),Qw=Rt({},Ro,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),eE=hi(Qw),tE=Rt({},Ro,{data:0}),_x=hi(tE),nE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sE(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=rE[n])?!!e[n]:!1}function Ag(){return sE}var aE=Rt({},fc,{key:function(n){if(n.key){var e=nE[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=mh(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?iE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ag,charCode:function(n){return n.type==="keypress"?mh(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?mh(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),oE=hi(aE),lE=Rt({},Kh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vx=hi(lE),cE=Rt({},fc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ag}),uE=hi(cE),hE=Rt({},Ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),fE=hi(hE),dE=Rt({},Kh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),pE=hi(dE),mE=[9,13,27,32],Cg=Lr&&"CompositionEvent"in window,Vl=null;Lr&&"documentMode"in document&&(Vl=document.documentMode);var gE=Lr&&"TextEvent"in window&&!Vl,Vy=Lr&&(!Cg||Vl&&8<Vl&&11>=Vl),xx=" ",yx=!1;function Gy(n,e){switch(n){case"keyup":return mE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var so=!1;function _E(n,e){switch(n){case"compositionend":return Hy(e);case"keypress":return e.which!==32?null:(yx=!0,xx);case"textInput":return n=e.data,n===xx&&yx?null:n;default:return null}}function vE(n,e){if(so)return n==="compositionend"||!Cg&&Gy(n,e)?(n=zy(),ph=wg=ds=null,so=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vy&&e.locale!=="ko"?null:e.data;default:return null}}var xE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sx(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!xE[n.type]:e==="textarea"}function Wy(n,e,t,i){Sy(i),e=Ph(e,"onChange"),0<e.length&&(t=new Eg("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Gl=null,ec=null;function yE(n){tS(n,0)}function $h(n){var e=lo(n);if(py(e))return n}function SE(n,e){if(n==="change")return e}var Xy=!1;Lr&&(Lr?(nh="oninput"in document,nh||(lm=document.createElement("div"),lm.setAttribute("oninput","return;"),nh=typeof lm.oninput=="function"),th=nh):th=!1,Xy=th&&(!document.documentMode||9<document.documentMode));var th,nh,lm;function Mx(){Gl&&(Gl.detachEvent("onpropertychange",qy),ec=Gl=null)}function qy(n){if(n.propertyName==="value"&&$h(ec)){var e=[];Wy(e,ec,n,yg(n)),wy(yE,e)}}function ME(n,e,t){n==="focusin"?(Mx(),Gl=e,ec=t,Gl.attachEvent("onpropertychange",qy)):n==="focusout"&&Mx()}function bE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $h(ec)}function TE(n,e){if(n==="click")return $h(e)}function wE(n,e){if(n==="input"||n==="change")return $h(e)}function EE(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Yi=typeof Object.is=="function"?Object.is:EE;function tc(n,e){if(Yi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Mm.call(e,r)||!Yi(n[r],e[r]))return!1}return!0}function bx(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Tx(n,e){var t=bx(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=bx(t)}}function Yy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Yy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ky(){for(var n=window,e=bh();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=bh(n.document)}return e}function Rg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function AE(n){var e=Ky(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Yy(t.ownerDocument.documentElement,t)){if(i!==null&&Rg(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Tx(t,s);var a=Tx(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var CE=Lr&&"documentMode"in document&&11>=document.documentMode,ao=null,Vm=null,Hl=null,Gm=!1;function wx(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Gm||ao==null||ao!==bh(i)||(i=ao,"selectionStart"in i&&Rg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Hl&&tc(Hl,i)||(Hl=i,i=Ph(Vm,"onSelect"),0<i.length&&(e=new Eg("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ao)))}function ih(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var oo={animationend:ih("Animation","AnimationEnd"),animationiteration:ih("Animation","AnimationIteration"),animationstart:ih("Animation","AnimationStart"),transitionend:ih("Transition","TransitionEnd")},cm={},$y={};Lr&&($y=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function jh(n){if(cm[n])return cm[n];if(!oo[n])return n;var e=oo[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in $y)return cm[n]=e[t];return n}var jy=jh("animationend"),Zy=jh("animationiteration"),Jy=jh("animationstart"),Qy=jh("transitionend"),eS=new Map,Ex="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ws(n,e){eS.set(n,e),ya(e,[n])}for(rh=0;rh<Ex.length;rh++)sh=Ex[rh],Ax=sh.toLowerCase(),Cx=sh[0].toUpperCase()+sh.slice(1),ws(Ax,"on"+Cx);var sh,Ax,Cx,rh;ws(jy,"onAnimationEnd");ws(Zy,"onAnimationIteration");ws(Jy,"onAnimationStart");ws("dblclick","onDoubleClick");ws("focusin","onFocus");ws("focusout","onBlur");ws(Qy,"onTransitionEnd");Mo("onMouseEnter",["mouseout","mouseover"]);Mo("onMouseLeave",["mouseout","mouseover"]);Mo("onPointerEnter",["pointerout","pointerover"]);Mo("onPointerLeave",["pointerout","pointerover"]);ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ya("onBeforeInput",["compositionend","keypress","textInput","paste"]);ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RE=new Set("cancel close invalid load scroll toggle".split(" ").concat(kl));function Rx(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Rw(i,e,void 0,n),n.currentTarget=null}function tS(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Rx(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Rx(r,o,c),s=l}}}if(wh)throw n=Om,wh=!1,Om=null,n}function St(n,e){var t=e[Ym];t===void 0&&(t=e[Ym]=new Set);var i=n+"__bubble";t.has(i)||(nS(e,n,2,!1),t.add(i))}function um(n,e,t){var i=0;e&&(i|=4),nS(t,n,i,e)}var ah="_reactListening"+Math.random().toString(36).slice(2);function nc(n){if(!n[ah]){n[ah]=!0,cy.forEach(function(t){t!=="selectionchange"&&(RE.has(t)||um(t,!1,n),um(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ah]||(e[ah]=!0,um("selectionchange",!1,e))}}function nS(n,e,t,i){switch(By(e)){case 1:var r=Xw;break;case 4:r=qw;break;default:r=Tg}t=r.bind(null,e,t,n),r=void 0,!Um||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function hm(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=ua(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}wy(function(){var c=s,u=yg(t),f=[];e:{var h=eS.get(n);if(h!==void 0){var p=Eg,_=n;switch(n){case"keypress":if(mh(t)===0)break e;case"keydown":case"keyup":p=oE;break;case"focusin":_="focus",p=om;break;case"focusout":_="blur",p=om;break;case"beforeblur":case"afterblur":p=om;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=gx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$w;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=uE;break;case jy:case Zy:case Jy:p=Jw;break;case Qy:p=fE;break;case"scroll":p=Yw;break;case"wheel":p=pE;break;case"copy":case"cut":case"paste":p=eE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=vx}var v=(e&4)!==0,g=!v&&n==="scroll",d=v?h!==null?h+"Capture":null:h;v=[];for(var m=c,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,d!==null&&(S=jl(m,d),S!=null&&v.push(ic(m,S,x)))),g)break;m=m.return}0<v.length&&(h=new p(h,_,null,t,u),f.push({event:h,listeners:v}))}}if((e&7)===0){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==Lm&&(_=t.relatedTarget||t.fromElement)&&(ua(_)||_[Fr]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=c,_=_?ua(_):null,_!==null&&(g=Sa(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(v=gx,S="onMouseLeave",d="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(v=vx,S="onPointerLeave",d="onPointerEnter",m="pointer"),g=p==null?h:lo(p),x=_==null?h:lo(_),h=new v(S,m+"leave",p,t,u),h.target=g,h.relatedTarget=x,S=null,ua(u)===c&&(v=new v(d,m+"enter",_,t,u),v.target=x,v.relatedTarget=g,S=v),g=S,p&&_)t:{for(v=p,d=_,m=0,x=v;x;x=no(x))m++;for(x=0,S=d;S;S=no(S))x++;for(;0<m-x;)v=no(v),m--;for(;0<x-m;)d=no(d),x--;for(;m--;){if(v===d||d!==null&&v===d.alternate)break t;v=no(v),d=no(d)}v=null}else v=null;p!==null&&Px(f,h,p,v,!1),_!==null&&g!==null&&Px(f,g,_,v,!0)}}e:{if(h=c?lo(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=SE;else if(Sx(h))if(Xy)T=wE;else{T=bE;var b=ME}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=TE);if(T&&(T=T(n,c))){Wy(f,T,t,u);break e}b&&b(n,h,c),n==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Rm(h,"number",h.value)}switch(b=c?lo(c):window,n){case"focusin":(Sx(b)||b.contentEditable==="true")&&(ao=b,Vm=c,Hl=null);break;case"focusout":Hl=Vm=ao=null;break;case"mousedown":Gm=!0;break;case"contextmenu":case"mouseup":case"dragend":Gm=!1,wx(f,t,u);break;case"selectionchange":if(CE)break;case"keydown":case"keyup":wx(f,t,u)}var E;if(Cg)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else so?Gy(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(Vy&&t.locale!=="ko"&&(so||y!=="onCompositionStart"?y==="onCompositionEnd"&&so&&(E=zy()):(ds=u,wg="value"in ds?ds.value:ds.textContent,so=!0)),b=Ph(c,y),0<b.length&&(y=new _x(y,n,null,t,u),f.push({event:y,listeners:b}),E?y.data=E:(E=Hy(t),E!==null&&(y.data=E)))),(E=gE?_E(n,t):vE(n,t))&&(c=Ph(c,"onBeforeInput"),0<c.length&&(u=new _x("onBeforeInput","beforeinput",null,t,u),f.push({event:u,listeners:c}),u.data=E))}tS(f,e)})}function ic(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ph(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=jl(n,t),s!=null&&i.unshift(ic(n,s,r)),s=jl(n,e),s!=null&&i.push(ic(n,s,r))),n=n.return}return i}function no(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Px(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=jl(t,s),l!=null&&a.unshift(ic(t,l,o))):r||(l=jl(t,s),l!=null&&a.push(ic(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var PE=/\r\n?/g,IE=/\u0000|\uFFFD/g;function Ix(n){return(typeof n=="string"?n:""+n).replace(PE,`
`).replace(IE,"")}function oh(n,e,t){if(e=Ix(e),Ix(n)!==e&&t)throw Error(ie(425))}function Ih(){}var Hm=null,Wm=null;function Xm(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qm=typeof setTimeout=="function"?setTimeout:void 0,NE=typeof clearTimeout=="function"?clearTimeout:void 0,Nx=typeof Promise=="function"?Promise:void 0,DE=typeof queueMicrotask=="function"?queueMicrotask:typeof Nx<"u"?function(n){return Nx.resolve(null).then(n).catch(LE)}:qm;function LE(n){setTimeout(function(){throw n})}function fm(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ql(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ql(e)}function vs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Dx(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Po=Math.random().toString(36).slice(2),or="__reactFiber$"+Po,rc="__reactProps$"+Po,Fr="__reactContainer$"+Po,Ym="__reactEvents$"+Po,FE="__reactListeners$"+Po,UE="__reactHandles$"+Po;function ua(n){var e=n[or];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Fr]||t[or]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Dx(n);n!==null;){if(t=n[or])return t;n=Dx(n)}return e}n=t,t=n.parentNode}return null}function dc(n){return n=n[or]||n[Fr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function lo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ie(33))}function Zh(n){return n[rc]||null}var Km=[],co=-1;function Es(n){return{current:n}}function Mt(n){0>co||(n.current=Km[co],Km[co]=null,co--)}function vt(n,e){co++,Km[co]=n.current,n.current=e}var Ts={},En=Es(Ts),qn=Es(!1),ma=Ts;function bo(n,e){var t=n.type.contextTypes;if(!t)return Ts;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Yn(n){return n=n.childContextTypes,n!=null}function Nh(){Mt(qn),Mt(En)}function Lx(n,e,t){if(En.current!==Ts)throw Error(ie(168));vt(En,e),vt(qn,t)}function iS(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,Mw(n)||"Unknown",r));return Rt({},t,i)}function Dh(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ts,ma=En.current,vt(En,n),vt(qn,qn.current),!0}function Fx(n,e,t){var i=n.stateNode;if(!i)throw Error(ie(169));t?(n=iS(n,e,ma),i.__reactInternalMemoizedMergedChildContext=n,Mt(qn),Mt(En),vt(En,n)):Mt(qn),vt(qn,t)}var Pr=null,Jh=!1,dm=!1;function rS(n){Pr===null?Pr=[n]:Pr.push(n)}function OE(n){Jh=!0,rS(n)}function As(){if(!dm&&Pr!==null){dm=!0;var n=0,e=st;try{var t=Pr;for(st=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Pr=null,Jh=!1}catch(r){throw Pr!==null&&(Pr=Pr.slice(n+1)),Ry(Sg,As),r}finally{st=e,dm=!1}}return null}var uo=[],ho=0,Lh=null,Fh=0,wi=[],Ei=0,ga=null,Ir=1,Nr="";function la(n,e){uo[ho++]=Fh,uo[ho++]=Lh,Lh=n,Fh=e}function sS(n,e,t){wi[Ei++]=Ir,wi[Ei++]=Nr,wi[Ei++]=ga,ga=n;var i=Ir;n=Nr;var r=32-Xi(i)-1;i&=~(1<<r),t+=1;var s=32-Xi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ir=1<<32-Xi(e)+r|t<<r|i,Nr=s+n}else Ir=1<<s|t<<r|i,Nr=n}function Pg(n){n.return!==null&&(la(n,1),sS(n,1,0))}function Ig(n){for(;n===Lh;)Lh=uo[--ho],uo[ho]=null,Fh=uo[--ho],uo[ho]=null;for(;n===ga;)ga=wi[--Ei],wi[Ei]=null,Nr=wi[--Ei],wi[Ei]=null,Ir=wi[--Ei],wi[Ei]=null}var ci=null,li=null,wt=!1,Wi=null;function aS(n,e){var t=Ai(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Ux(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,ci=n,li=vs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,ci=n,li=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ga!==null?{id:Ir,overflow:Nr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Ai(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,ci=n,li=null,!0):!1;default:return!1}}function $m(n){return(n.mode&1)!==0&&(n.flags&128)===0}function jm(n){if(wt){var e=li;if(e){var t=e;if(!Ux(n,e)){if($m(n))throw Error(ie(418));e=vs(t.nextSibling);var i=ci;e&&Ux(n,e)?aS(i,t):(n.flags=n.flags&-4097|2,wt=!1,ci=n)}}else{if($m(n))throw Error(ie(418));n.flags=n.flags&-4097|2,wt=!1,ci=n}}}function Ox(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ci=n}function lh(n){if(n!==ci)return!1;if(!wt)return Ox(n),wt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Xm(n.type,n.memoizedProps)),e&&(e=li)){if($m(n))throw oS(),Error(ie(418));for(;e;)aS(n,e),e=vs(e.nextSibling)}if(Ox(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ie(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){li=vs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}li=null}}else li=ci?vs(n.stateNode.nextSibling):null;return!0}function oS(){for(var n=li;n;)n=vs(n.nextSibling)}function To(){li=ci=null,wt=!1}function Ng(n){Wi===null?Wi=[n]:Wi.push(n)}var kE=kr.ReactCurrentBatchConfig;function Il(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ie(309));var i=t.stateNode}if(!i)throw Error(ie(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(ie(284));if(!t._owner)throw Error(ie(290,n))}return n}function ch(n,e){throw n=Object.prototype.toString.call(e),Error(ie(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function kx(n){var e=n._init;return e(n._payload)}function lS(n){function e(d,m){if(n){var x=d.deletions;x===null?(d.deletions=[m],d.flags|=16):x.push(m)}}function t(d,m){if(!n)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function i(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(d,m){return d=Ms(d,m),d.index=0,d.sibling=null,d}function s(d,m,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<m?(d.flags|=2,m):x):(d.flags|=2,m)):(d.flags|=1048576,m)}function a(d){return n&&d.alternate===null&&(d.flags|=2),d}function o(d,m,x,S){return m===null||m.tag!==6?(m=ym(x,d.mode,S),m.return=d,m):(m=r(m,x),m.return=d,m)}function l(d,m,x,S){var T=x.type;return T===ro?u(d,m,x.props.children,S,x.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===cs&&kx(T)===m.type)?(S=r(m,x.props),S.ref=Il(d,m,x),S.return=d,S):(S=Mh(x.type,x.key,x.props,null,d.mode,S),S.ref=Il(d,m,x),S.return=d,S)}function c(d,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Sm(x,d.mode,S),m.return=d,m):(m=r(m,x.children||[]),m.return=d,m)}function u(d,m,x,S,T){return m===null||m.tag!==7?(m=pa(x,d.mode,S,T),m.return=d,m):(m=r(m,x),m.return=d,m)}function f(d,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ym(""+m,d.mode,x),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ku:return x=Mh(m.type,m.key,m.props,null,d.mode,x),x.ref=Il(d,null,m),x.return=d,x;case io:return m=Sm(m,d.mode,x),m.return=d,m;case cs:var S=m._init;return f(d,S(m._payload),x)}if(Ul(m)||Al(m))return m=pa(m,d.mode,x,null),m.return=d,m;ch(d,m)}return null}function h(d,m,x,S){var T=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:o(d,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ku:return x.key===T?l(d,m,x,S):null;case io:return x.key===T?c(d,m,x,S):null;case cs:return T=x._init,h(d,m,T(x._payload),S)}if(Ul(x)||Al(x))return T!==null?null:u(d,m,x,S,null);ch(d,x)}return null}function p(d,m,x,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(x)||null,o(m,d,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ku:return d=d.get(S.key===null?x:S.key)||null,l(m,d,S,T);case io:return d=d.get(S.key===null?x:S.key)||null,c(m,d,S,T);case cs:var b=S._init;return p(d,m,x,b(S._payload),T)}if(Ul(S)||Al(S))return d=d.get(x)||null,u(m,d,S,T,null);ch(m,S)}return null}function _(d,m,x,S){for(var T=null,b=null,E=m,y=m=0,w=null;E!==null&&y<x.length;y++){E.index>y?(w=E,E=null):w=E.sibling;var R=h(d,E,x[y],S);if(R===null){E===null&&(E=w);break}n&&E&&R.alternate===null&&e(d,E),m=s(R,m,y),b===null?T=R:b.sibling=R,b=R,E=w}if(y===x.length)return t(d,E),wt&&la(d,y),T;if(E===null){for(;y<x.length;y++)E=f(d,x[y],S),E!==null&&(m=s(E,m,y),b===null?T=E:b.sibling=E,b=E);return wt&&la(d,y),T}for(E=i(d,E);y<x.length;y++)w=p(E,d,y,x[y],S),w!==null&&(n&&w.alternate!==null&&E.delete(w.key===null?y:w.key),m=s(w,m,y),b===null?T=w:b.sibling=w,b=w);return n&&E.forEach(function(P){return e(d,P)}),wt&&la(d,y),T}function v(d,m,x,S){var T=Al(x);if(typeof T!="function")throw Error(ie(150));if(x=T.call(x),x==null)throw Error(ie(151));for(var b=T=null,E=m,y=m=0,w=null,R=x.next();E!==null&&!R.done;y++,R=x.next()){E.index>y?(w=E,E=null):w=E.sibling;var P=h(d,E,R.value,S);if(P===null){E===null&&(E=w);break}n&&E&&P.alternate===null&&e(d,E),m=s(P,m,y),b===null?T=P:b.sibling=P,b=P,E=w}if(R.done)return t(d,E),wt&&la(d,y),T;if(E===null){for(;!R.done;y++,R=x.next())R=f(d,R.value,S),R!==null&&(m=s(R,m,y),b===null?T=R:b.sibling=R,b=R);return wt&&la(d,y),T}for(E=i(d,E);!R.done;y++,R=x.next())R=p(E,d,y,R.value,S),R!==null&&(n&&R.alternate!==null&&E.delete(R.key===null?y:R.key),m=s(R,m,y),b===null?T=R:b.sibling=R,b=R);return n&&E.forEach(function(D){return e(d,D)}),wt&&la(d,y),T}function g(d,m,x,S){if(typeof x=="object"&&x!==null&&x.type===ro&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ku:e:{for(var T=x.key,b=m;b!==null;){if(b.key===T){if(T=x.type,T===ro){if(b.tag===7){t(d,b.sibling),m=r(b,x.props.children),m.return=d,d=m;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===cs&&kx(T)===b.type){t(d,b.sibling),m=r(b,x.props),m.ref=Il(d,b,x),m.return=d,d=m;break e}t(d,b);break}else e(d,b);b=b.sibling}x.type===ro?(m=pa(x.props.children,d.mode,S,x.key),m.return=d,d=m):(S=Mh(x.type,x.key,x.props,null,d.mode,S),S.ref=Il(d,m,x),S.return=d,d=S)}return a(d);case io:e:{for(b=x.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){t(d,m.sibling),m=r(m,x.children||[]),m.return=d,d=m;break e}else{t(d,m);break}else e(d,m);m=m.sibling}m=Sm(x,d.mode,S),m.return=d,d=m}return a(d);case cs:return b=x._init,g(d,m,b(x._payload),S)}if(Ul(x))return _(d,m,x,S);if(Al(x))return v(d,m,x,S);ch(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(t(d,m.sibling),m=r(m,x),m.return=d,d=m):(t(d,m),m=ym(x,d.mode,S),m.return=d,d=m),a(d)):t(d,m)}return g}var wo=lS(!0),cS=lS(!1),Uh=Es(null),Oh=null,fo=null,Dg=null;function Lg(){Dg=fo=Oh=null}function Fg(n){var e=Uh.current;Mt(Uh),n._currentValue=e}function Zm(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function yo(n,e){Oh=n,Dg=fo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Xn=!0),n.firstContext=null)}function Ri(n){var e=n._currentValue;if(Dg!==n)if(n={context:n,memoizedValue:e,next:null},fo===null){if(Oh===null)throw Error(ie(308));fo=n,Oh.dependencies={lanes:0,firstContext:n}}else fo=fo.next=n;return e}var ha=null;function Ug(n){ha===null?ha=[n]:ha.push(n)}function uS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Ug(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ur(n,i)}function Ur(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var us=!1;function Og(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Dr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function xs(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(tt&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ur(n,t)}return r=i.interleaved,r===null?(e.next=e,Ug(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ur(n,t)}function gh(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Mg(n,t)}}function Bx(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function kh(n,e,t,i){var r=n.updateQueue;us=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,u=c=l=null,o=s;do{var h=o.lane,p=o.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=n,v=o;switch(h=e,p=t,v.tag){case 1:if(_=v.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=Rt({},f,h);break e;case 2:us=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);va|=a,n.lanes=a,n.memoizedState=f}}function zx(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var pc={},cr=Es(pc),sc=Es(pc),ac=Es(pc);function fa(n){if(n===pc)throw Error(ie(174));return n}function kg(n,e){switch(vt(ac,e),vt(sc,n),vt(cr,pc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Im(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Im(e,n)}Mt(cr),vt(cr,e)}function Eo(){Mt(cr),Mt(sc),Mt(ac)}function fS(n){fa(ac.current);var e=fa(cr.current),t=Im(e,n.type);e!==t&&(vt(sc,n),vt(cr,t))}function Bg(n){sc.current===n&&(Mt(cr),Mt(sc))}var At=Es(0);function Bh(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pm=[];function zg(){for(var n=0;n<pm.length;n++)pm[n]._workInProgressVersionPrimary=null;pm.length=0}var _h=kr.ReactCurrentDispatcher,mm=kr.ReactCurrentBatchConfig,_a=0,Ct=null,jt=null,rn=null,zh=!1,Wl=!1,oc=0,BE=0;function bn(){throw Error(ie(321))}function Vg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Yi(n[t],e[t]))return!1;return!0}function Gg(n,e,t,i,r,s){if(_a=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_h.current=n===null||n.memoizedState===null?HE:WE,n=t(i,r),Wl){s=0;do{if(Wl=!1,oc=0,25<=s)throw Error(ie(301));s+=1,rn=jt=null,e.updateQueue=null,_h.current=XE,n=t(i,r)}while(Wl)}if(_h.current=Vh,e=jt!==null&&jt.next!==null,_a=0,rn=jt=Ct=null,zh=!1,e)throw Error(ie(300));return n}function Hg(){var n=oc!==0;return oc=0,n}function ar(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Ct.memoizedState=rn=n:rn=rn.next=n,rn}function Pi(){if(jt===null){var n=Ct.alternate;n=n!==null?n.memoizedState:null}else n=jt.next;var e=rn===null?Ct.memoizedState:rn.next;if(e!==null)rn=e,jt=n;else{if(n===null)throw Error(ie(310));jt=n,n={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},rn===null?Ct.memoizedState=rn=n:rn=rn.next=n}return rn}function lc(n,e){return typeof e=="function"?e(n):e}function gm(n){var e=Pi(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=jt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((_a&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,Ct.lanes|=u,va|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Yi(i,e.memoizedState)||(Xn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ct.lanes|=s,va|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function _m(n){var e=Pi(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);Yi(s,e.memoizedState)||(Xn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function dS(){}function pS(n,e){var t=Ct,i=Pi(),r=e(),s=!Yi(i.memoizedState,r);if(s&&(i.memoizedState=r,Xn=!0),i=i.queue,Wg(_S.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||rn!==null&&rn.memoizedState.tag&1){if(t.flags|=2048,cc(9,gS.bind(null,t,i,r,e),void 0,null),sn===null)throw Error(ie(349));(_a&30)!==0||mS(t,e,r)}return r}function mS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function gS(n,e,t,i){e.value=t,e.getSnapshot=i,vS(e)&&xS(n)}function _S(n,e,t){return t(function(){vS(e)&&xS(n)})}function vS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Yi(n,t)}catch{return!0}}function xS(n){var e=Ur(n,1);e!==null&&qi(e,n,1,-1)}function Vx(n){var e=ar();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lc,lastRenderedState:n},e.queue=n,n=n.dispatch=GE.bind(null,Ct,n),[e.memoizedState,n]}function cc(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function yS(){return Pi().memoizedState}function vh(n,e,t,i){var r=ar();Ct.flags|=n,r.memoizedState=cc(1|e,t,void 0,i===void 0?null:i)}function Qh(n,e,t,i){var r=Pi();i=i===void 0?null:i;var s=void 0;if(jt!==null){var a=jt.memoizedState;if(s=a.destroy,i!==null&&Vg(i,a.deps)){r.memoizedState=cc(e,t,s,i);return}}Ct.flags|=n,r.memoizedState=cc(1|e,t,s,i)}function Gx(n,e){return vh(8390656,8,n,e)}function Wg(n,e){return Qh(2048,8,n,e)}function SS(n,e){return Qh(4,2,n,e)}function MS(n,e){return Qh(4,4,n,e)}function bS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function TS(n,e,t){return t=t!=null?t.concat([n]):null,Qh(4,4,bS.bind(null,e,n),t)}function Xg(){}function wS(n,e){var t=Pi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Vg(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function ES(n,e){var t=Pi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Vg(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function AS(n,e,t){return(_a&21)===0?(n.baseState&&(n.baseState=!1,Xn=!0),n.memoizedState=t):(Yi(t,e)||(t=Ny(),Ct.lanes|=t,va|=t,n.baseState=!0),e)}function zE(n,e){var t=st;st=t!==0&&4>t?t:4,n(!0);var i=mm.transition;mm.transition={};try{n(!1),e()}finally{st=t,mm.transition=i}}function CS(){return Pi().memoizedState}function VE(n,e,t){var i=Ss(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},RS(n))PS(e,t);else if(t=uS(n,e,t,i),t!==null){var r=Bn();qi(t,n,i,r),IS(t,e,i)}}function GE(n,e,t){var i=Ss(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(RS(n))PS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,Yi(o,a)){var l=e.interleaved;l===null?(r.next=r,Ug(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=uS(n,e,r,i),t!==null&&(r=Bn(),qi(t,n,i,r),IS(t,e,i))}}function RS(n){var e=n.alternate;return n===Ct||e!==null&&e===Ct}function PS(n,e){Wl=zh=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function IS(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Mg(n,t)}}var Vh={readContext:Ri,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useInsertionEffect:bn,useLayoutEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useMutableSource:bn,useSyncExternalStore:bn,useId:bn,unstable_isNewReconciler:!1},HE={readContext:Ri,useCallback:function(n,e){return ar().memoizedState=[n,e===void 0?null:e],n},useContext:Ri,useEffect:Gx,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,vh(4194308,4,bS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return vh(4194308,4,n,e)},useInsertionEffect:function(n,e){return vh(4,2,n,e)},useMemo:function(n,e){var t=ar();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ar();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=VE.bind(null,Ct,n),[i.memoizedState,n]},useRef:function(n){var e=ar();return n={current:n},e.memoizedState=n},useState:Vx,useDebugValue:Xg,useDeferredValue:function(n){return ar().memoizedState=n},useTransition:function(){var n=Vx(!1),e=n[0];return n=zE.bind(null,n[1]),ar().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ct,r=ar();if(wt){if(t===void 0)throw Error(ie(407));t=t()}else{if(t=e(),sn===null)throw Error(ie(349));(_a&30)!==0||mS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Gx(_S.bind(null,i,s,n),[n]),i.flags|=2048,cc(9,gS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ar(),e=sn.identifierPrefix;if(wt){var t=Nr,i=Ir;t=(i&~(1<<32-Xi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=oc++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=BE++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},WE={readContext:Ri,useCallback:wS,useContext:Ri,useEffect:Wg,useImperativeHandle:TS,useInsertionEffect:SS,useLayoutEffect:MS,useMemo:ES,useReducer:gm,useRef:yS,useState:function(){return gm(lc)},useDebugValue:Xg,useDeferredValue:function(n){var e=Pi();return AS(e,jt.memoizedState,n)},useTransition:function(){var n=gm(lc)[0],e=Pi().memoizedState;return[n,e]},useMutableSource:dS,useSyncExternalStore:pS,useId:CS,unstable_isNewReconciler:!1},XE={readContext:Ri,useCallback:wS,useContext:Ri,useEffect:Wg,useImperativeHandle:TS,useInsertionEffect:SS,useLayoutEffect:MS,useMemo:ES,useReducer:_m,useRef:yS,useState:function(){return _m(lc)},useDebugValue:Xg,useDeferredValue:function(n){var e=Pi();return jt===null?e.memoizedState=n:AS(e,jt.memoizedState,n)},useTransition:function(){var n=_m(lc)[0],e=Pi().memoizedState;return[n,e]},useMutableSource:dS,useSyncExternalStore:pS,useId:CS,unstable_isNewReconciler:!1};function Gi(n,e){if(n&&n.defaultProps){e=Rt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Jm(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Rt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ef={isMounted:function(n){return(n=n._reactInternals)?Sa(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Bn(),r=Ss(n),s=Dr(i,r);s.payload=e,t!=null&&(s.callback=t),e=xs(n,s,r),e!==null&&(qi(e,n,r,i),gh(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Bn(),r=Ss(n),s=Dr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=xs(n,s,r),e!==null&&(qi(e,n,r,i),gh(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Bn(),i=Ss(n),r=Dr(t,i);r.tag=2,e!=null&&(r.callback=e),e=xs(n,r,i),e!==null&&(qi(e,n,i,t),gh(e,n,i))}};function Hx(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!tc(t,i)||!tc(r,s):!0}function NS(n,e,t){var i=!1,r=Ts,s=e.contextType;return typeof s=="object"&&s!==null?s=Ri(s):(r=Yn(e)?ma:En.current,i=e.contextTypes,s=(i=i!=null)?bo(n,r):Ts),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ef,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Wx(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&ef.enqueueReplaceState(e,e.state,null)}function Qm(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Og(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ri(s):(s=Yn(e)?ma:En.current,r.context=bo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jm(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ef.enqueueReplaceState(r,r.state,null),kh(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ao(n,e){try{var t="",i=e;do t+=Sw(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function vm(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function eg(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var qE=typeof WeakMap=="function"?WeakMap:Map;function DS(n,e,t){t=Dr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Hh||(Hh=!0,ug=i),eg(n,e)},t}function LS(n,e,t){t=Dr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){eg(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){eg(n,e),typeof i!="function"&&(ys===null?ys=new Set([this]):ys.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function Xx(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new qE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=aA.bind(null,n,e,t),e.then(n,n))}function qx(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Yx(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Dr(-1,1),e.tag=2,xs(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var YE=kr.ReactCurrentOwner,Xn=!1;function kn(n,e,t,i){e.child=n===null?cS(e,null,t,i):wo(e,n.child,t,i)}function Kx(n,e,t,i,r){t=t.render;var s=e.ref;return yo(e,r),i=Gg(n,e,t,i,s,r),t=Hg(),n!==null&&!Xn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Or(n,e,r)):(wt&&t&&Pg(e),e.flags|=1,kn(n,e,i,r),e.child)}function $x(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Qg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,FS(n,e,s,i,r)):(n=Mh(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:tc,t(a,i)&&n.ref===e.ref)return Or(n,e,r)}return e.flags|=1,n=Ms(s,i),n.ref=e.ref,n.return=e,e.child=n}function FS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(tc(s,i)&&n.ref===e.ref)if(Xn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(Xn=!0);else return e.lanes=n.lanes,Or(n,e,r)}return tg(n,e,t,i,r)}function US(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(mo,oi),oi|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,vt(mo,oi),oi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,vt(mo,oi),oi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,vt(mo,oi),oi|=i;return kn(n,e,r,t),e.child}function OS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function tg(n,e,t,i,r){var s=Yn(t)?ma:En.current;return s=bo(e,s),yo(e,r),t=Gg(n,e,t,i,s,r),i=Hg(),n!==null&&!Xn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Or(n,e,r)):(wt&&i&&Pg(e),e.flags|=1,kn(n,e,t,r),e.child)}function jx(n,e,t,i,r){if(Yn(t)){var s=!0;Dh(e)}else s=!1;if(yo(e,r),e.stateNode===null)xh(n,e),NS(e,t,i),Qm(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ri(c):(c=Yn(t)?ma:En.current,c=bo(e,c));var u=t.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Wx(e,a,i,c),us=!1;var h=e.memoizedState;a.state=h,kh(e,i,a,r),l=e.memoizedState,o!==i||h!==l||qn.current||us?(typeof u=="function"&&(Jm(e,t,u,i),l=e.memoizedState),(o=us||Hx(e,t,o,i,h,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,hS(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:Gi(e.type,o),a.props=c,f=e.pendingProps,h=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=Ri(l):(l=Yn(t)?ma:En.current,l=bo(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&Wx(e,a,i,l),us=!1,h=e.memoizedState,a.state=h,kh(e,i,a,r);var _=e.memoizedState;o!==f||h!==_||qn.current||us?(typeof p=="function"&&(Jm(e,t,p,i),_=e.memoizedState),(c=us||Hx(e,t,c,i,h,_,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return ng(n,e,t,i,s,r)}function ng(n,e,t,i,r,s){OS(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Fx(e,t,!1),Or(n,e,s);i=e.stateNode,YE.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=wo(e,n.child,null,s),e.child=wo(e,null,o,s)):kn(n,e,o,s),e.memoizedState=i.state,r&&Fx(e,t,!0),e.child}function kS(n){var e=n.stateNode;e.pendingContext?Lx(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Lx(n,e.context,!1),kg(n,e.containerInfo)}function Zx(n,e,t,i,r){return To(),Ng(r),e.flags|=256,kn(n,e,t,i),e.child}var ig={dehydrated:null,treeContext:null,retryLane:0};function rg(n){return{baseLanes:n,cachePool:null,transitions:null}}function BS(n,e,t){var i=e.pendingProps,r=At.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),vt(At,r&1),n===null)return jm(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=a):s=rf(a,i,0,null),n=pa(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=rg(t),e.memoizedState=ig,n):qg(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return KE(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return(a&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ms(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Ms(o,s):(s=pa(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?rg(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=ig,i}return s=n.child,n=s.sibling,i=Ms(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function qg(n,e){return e=rf({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function uh(n,e,t,i){return i!==null&&Ng(i),wo(e,n.child,null,t),n=qg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function KE(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=vm(Error(ie(422))),uh(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=rf({mode:"visible",children:i.children},r,0,null),s=pa(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&wo(e,n.child,null,a),e.child.memoizedState=rg(a),e.memoizedState=ig,s);if((e.mode&1)===0)return uh(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=vm(s,i,void 0),uh(n,e,a,i)}if(o=(a&n.childLanes)!==0,Xn||o){if(i=sn,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|a))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ur(n,r),qi(i,n,r,-1))}return Jg(),i=vm(Error(ie(421))),uh(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=oA.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,li=vs(r.nextSibling),ci=e,wt=!0,Wi=null,n!==null&&(wi[Ei++]=Ir,wi[Ei++]=Nr,wi[Ei++]=ga,Ir=n.id,Nr=n.overflow,ga=e),e=qg(e,i.children),e.flags|=4096,e)}function Jx(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Zm(n.return,e,t)}function xm(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function zS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(kn(n,e,i.children,t),i=At.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Jx(n,t,e);else if(n.tag===19)Jx(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(vt(At,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Bh(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),xm(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Bh(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}xm(e,!0,t,null,s);break;case"together":xm(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xh(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Or(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),va|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(ie(153));if(e.child!==null){for(n=e.child,t=Ms(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ms(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function $E(n,e,t){switch(e.tag){case 3:kS(e),To();break;case 5:fS(e);break;case 1:Yn(e.type)&&Dh(e);break;case 4:kg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;vt(Uh,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(At,At.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?BS(n,e,t):(vt(At,At.current&1),n=Or(n,e,t),n!==null?n.sibling:null);vt(At,At.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return zS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vt(At,At.current),i)break;return null;case 22:case 23:return e.lanes=0,US(n,e,t)}return Or(n,e,t)}var VS,sg,GS,HS;VS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};sg=function(){};GS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,fa(cr.current);var s=null;switch(t){case"input":r=Am(n,r),i=Am(n,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=Pm(n,r),i=Pm(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ih)}Nm(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Kl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r?.[c],i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Kl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&St("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};HS=function(n,e,t,i){t!==i&&(e.flags|=4)};function Nl(n,e){if(!wt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Tn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function jE(n,e,t){var i=e.pendingProps;switch(Ig(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(e),null;case 1:return Yn(e.type)&&Nh(),Tn(e),null;case 3:return i=e.stateNode,Eo(),Mt(qn),Mt(En),zg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(lh(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Wi!==null&&(dg(Wi),Wi=null))),sg(n,e),Tn(e),null;case 5:Bg(e);var r=fa(ac.current);if(t=e.type,n!==null&&e.stateNode!=null)GS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Tn(e),null}if(n=fa(cr.current),lh(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[or]=e,i[rc]=s,n=(e.mode&1)!==0,t){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(r=0;r<kl.length;r++)St(kl[r],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":ax(i,s),St("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},St("invalid",i);break;case"textarea":lx(i,s),St("invalid",i)}Nm(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&oh(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&oh(i.textContent,o,n),r=["children",""+o]):Kl.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&St("scroll",i)}switch(t){case"input":$u(i),ox(i,s,!0);break;case"textarea":$u(i),cx(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ih)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=_y(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[or]=e,n[rc]=i,VS(n,e,!1,!1),e.stateNode=n;e:{switch(a=Dm(t,i),t){case"dialog":St("cancel",n),St("close",n),r=i;break;case"iframe":case"object":case"embed":St("load",n),r=i;break;case"video":case"audio":for(r=0;r<kl.length;r++)St(kl[r],n);r=i;break;case"source":St("error",n),r=i;break;case"img":case"image":case"link":St("error",n),St("load",n),r=i;break;case"details":St("toggle",n),r=i;break;case"input":ax(n,i),r=Am(n,i),St("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),St("invalid",n);break;case"textarea":lx(n,i),r=Pm(n,i),St("invalid",n);break;default:r=i}Nm(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?yy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vy(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&$l(n,l):typeof l=="number"&&$l(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Kl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&St("scroll",n):l!=null&&gg(n,s,l,a))}switch(t){case"input":$u(n),ox(n,i,!1);break;case"textarea":$u(n),cx(n);break;case"option":i.value!=null&&n.setAttribute("value",""+bs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?go(n,!!i.multiple,s,!1):i.defaultValue!=null&&go(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ih)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Tn(e),null;case 6:if(n&&e.stateNode!=null)HS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(t=fa(ac.current),fa(cr.current),lh(e)){if(i=e.stateNode,t=e.memoizedProps,i[or]=e,(s=i.nodeValue!==t)&&(n=ci,n!==null))switch(n.tag){case 3:oh(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&oh(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[or]=e,e.stateNode=i}return Tn(e),null;case 13:if(Mt(At),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(wt&&li!==null&&(e.mode&1)!==0&&(e.flags&128)===0)oS(),To(),e.flags|=98560,s=!1;else if(s=lh(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[or]=e}else To(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Tn(e),s=!1}else Wi!==null&&(dg(Wi),Wi=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(At.current&1)!==0?Zt===0&&(Zt=3):Jg())),e.updateQueue!==null&&(e.flags|=4),Tn(e),null);case 4:return Eo(),sg(n,e),n===null&&nc(e.stateNode.containerInfo),Tn(e),null;case 10:return Fg(e.type._context),Tn(e),null;case 17:return Yn(e.type)&&Nh(),Tn(e),null;case 19:if(Mt(At),s=e.memoizedState,s===null)return Tn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Nl(s,!1);else{if(Zt!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(a=Bh(n),a!==null){for(e.flags|=128,Nl(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return vt(At,At.current&1|2),e.child}n=n.sibling}s.tail!==null&&Xt()>Co&&(e.flags|=128,i=!0,Nl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Bh(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Nl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!wt)return Tn(e),null}else 2*Xt()-s.renderingStartTime>Co&&t!==1073741824&&(e.flags|=128,i=!0,Nl(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Xt(),e.sibling=null,t=At.current,vt(At,i?t&1|2:t&1),e):(Tn(e),null);case 22:case 23:return Zg(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(oi&1073741824)!==0&&(Tn(e),e.subtreeFlags&6&&(e.flags|=8192)):Tn(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function ZE(n,e){switch(Ig(e),e.tag){case 1:return Yn(e.type)&&Nh(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Eo(),Mt(qn),Mt(En),zg(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Bg(e),null;case 13:if(Mt(At),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));To()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Mt(At),null;case 4:return Eo(),null;case 10:return Fg(e.type._context),null;case 22:case 23:return Zg(),null;case 24:return null;default:return null}}var hh=!1,wn=!1,JE=typeof WeakSet=="function"?WeakSet:Set,be=null;function po(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){kt(n,e,i)}else t.current=null}function ag(n,e,t){try{t()}catch(i){kt(n,e,i)}}var Qx=!1;function QE(n,e){if(Hm=Ch,n=Ky(),Rg(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,u=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++c===r&&(o=a),h===s&&++u===i&&(l=a),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Wm={focusedElem:n,selectionRange:t},Ch=!1,be=e;be!==null;)if(e=be,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,be=n;else for(;be!==null;){e=be;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,g=_.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?v:Gi(e.type,v),g);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){kt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}return _=Qx,Qx=!1,_}function Xl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&ag(e,t,s)}r=r.next}while(r!==i)}}function tf(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function og(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function WS(n){var e=n.alternate;e!==null&&(n.alternate=null,WS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[or],delete e[rc],delete e[Ym],delete e[FE],delete e[UE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function XS(n){return n.tag===5||n.tag===3||n.tag===4}function ey(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||XS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function lg(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ih));else if(i!==4&&(n=n.child,n!==null))for(lg(n,e,t),n=n.sibling;n!==null;)lg(n,e,t),n=n.sibling}function cg(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(cg(n,e,t),n=n.sibling;n!==null;)cg(n,e,t),n=n.sibling}var fn=null,Hi=!1;function ls(n,e,t){for(t=t.child;t!==null;)qS(n,e,t),t=t.sibling}function qS(n,e,t){if(lr&&typeof lr.onCommitFiberUnmount=="function")try{lr.onCommitFiberUnmount(Yh,t)}catch{}switch(t.tag){case 5:wn||po(t,e);case 6:var i=fn,r=Hi;fn=null,ls(n,e,t),fn=i,Hi=r,fn!==null&&(Hi?(n=fn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):fn.removeChild(t.stateNode));break;case 18:fn!==null&&(Hi?(n=fn,t=t.stateNode,n.nodeType===8?fm(n.parentNode,t):n.nodeType===1&&fm(n,t),Ql(n)):fm(fn,t.stateNode));break;case 4:i=fn,r=Hi,fn=t.stateNode.containerInfo,Hi=!0,ls(n,e,t),fn=i,Hi=r;break;case 0:case 11:case 14:case 15:if(!wn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&((s&2)!==0||(s&4)!==0)&&ag(t,e,a),r=r.next}while(r!==i)}ls(n,e,t);break;case 1:if(!wn&&(po(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){kt(t,e,o)}ls(n,e,t);break;case 21:ls(n,e,t);break;case 22:t.mode&1?(wn=(i=wn)||t.memoizedState!==null,ls(n,e,t),wn=i):ls(n,e,t);break;default:ls(n,e,t)}}function ty(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new JE),e.forEach(function(i){var r=lA.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Vi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:fn=o.stateNode,Hi=!1;break e;case 3:fn=o.stateNode.containerInfo,Hi=!0;break e;case 4:fn=o.stateNode.containerInfo,Hi=!0;break e}o=o.return}if(fn===null)throw Error(ie(160));qS(s,a,r),fn=null,Hi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){kt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)YS(e,n),e=e.sibling}function YS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vi(e,n),sr(n),i&4){try{Xl(3,n,n.return),tf(3,n)}catch(v){kt(n,n.return,v)}try{Xl(5,n,n.return)}catch(v){kt(n,n.return,v)}}break;case 1:Vi(e,n),sr(n),i&512&&t!==null&&po(t,t.return);break;case 5:if(Vi(e,n),sr(n),i&512&&t!==null&&po(t,t.return),n.flags&32){var r=n.stateNode;try{$l(r,"")}catch(v){kt(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&my(r,s),Dm(o,a);var c=Dm(o,s);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?yy(r,f):u==="dangerouslySetInnerHTML"?vy(r,f):u==="children"?$l(r,f):gg(r,u,f,c)}switch(o){case"input":Cm(r,s);break;case"textarea":gy(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?go(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?go(r,!!s.multiple,s.defaultValue,!0):go(r,!!s.multiple,s.multiple?[]:"",!1))}r[rc]=s}catch(v){kt(n,n.return,v)}}break;case 6:if(Vi(e,n),sr(n),i&4){if(n.stateNode===null)throw Error(ie(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){kt(n,n.return,v)}}break;case 3:if(Vi(e,n),sr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ql(e.containerInfo)}catch(v){kt(n,n.return,v)}break;case 4:Vi(e,n),sr(n);break;case 13:Vi(e,n),sr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||($g=Xt())),i&4&&ty(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(wn=(c=wn)||u,Vi(e,n),wn=c):Vi(e,n),sr(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&(n.mode&1)!==0)for(be=n,u=n.child;u!==null;){for(f=be=u;be!==null;){switch(h=be,p=h.child,h.tag){case 0:case 11:case 14:case 15:Xl(4,h,h.return);break;case 1:po(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){kt(i,t,v)}}break;case 5:po(h,h.return);break;case 22:if(h.memoizedState!==null){iy(f);continue}}p!==null?(p.return=h,be=p):iy(f)}u=u.sibling}e:for(u=null,f=n;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=xy("display",a))}catch(v){kt(n,n.return,v)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){kt(n,n.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Vi(e,n),sr(n),i&4&&ty(n);break;case 21:break;default:Vi(e,n),sr(n)}}function sr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(XS(t)){var i=t;break e}t=t.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&($l(r,""),i.flags&=-33);var s=ey(n);cg(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=ey(n);lg(n,o,a);break;default:throw Error(ie(161))}}catch(l){kt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function eA(n,e,t){be=n,KS(n,e,t)}function KS(n,e,t){for(var i=(n.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||hh;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||wn;o=hh;var c=wn;if(hh=a,(wn=l)&&!c)for(be=r;be!==null;)a=be,l=a.child,a.tag===22&&a.memoizedState!==null?ry(r):l!==null?(l.return=a,be=l):ry(r);for(;s!==null;)be=s,KS(s,e,t),s=s.sibling;be=r,hh=o,wn=c}ny(n,e,t)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,be=s):ny(n,e,t)}}function ny(n){for(;be!==null;){var e=be;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:wn||tf(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!wn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Gi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zx(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}zx(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Ql(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}wn||e.flags&512&&og(e)}catch(h){kt(e,e.return,h)}}if(e===n){be=null;break}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}}function iy(n){for(;be!==null;){var e=be;if(e===n){be=null;break}var t=e.sibling;if(t!==null){t.return=e.return,be=t;break}be=e.return}}function ry(n){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{tf(4,e)}catch(l){kt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){kt(e,r,l)}}var s=e.return;try{og(e)}catch(l){kt(e,s,l)}break;case 5:var a=e.return;try{og(e)}catch(l){kt(e,a,l)}}}catch(l){kt(e,e.return,l)}if(e===n){be=null;break}var o=e.sibling;if(o!==null){o.return=e.return,be=o;break}be=e.return}}var tA=Math.ceil,Gh=kr.ReactCurrentDispatcher,Yg=kr.ReactCurrentOwner,Ci=kr.ReactCurrentBatchConfig,tt=0,sn=null,Kt=null,dn=0,oi=0,mo=Es(0),Zt=0,uc=null,va=0,nf=0,Kg=0,ql=null,Wn=null,$g=0,Co=1/0,Rr=null,Hh=!1,ug=null,ys=null,fh=!1,ps=null,Wh=0,Yl=0,hg=null,yh=-1,Sh=0;function Bn(){return(tt&6)!==0?Xt():yh!==-1?yh:yh=Xt()}function Ss(n){return(n.mode&1)===0?1:(tt&2)!==0&&dn!==0?dn&-dn:kE.transition!==null?(Sh===0&&(Sh=Ny()),Sh):(n=st,n!==0||(n=window.event,n=n===void 0?16:By(n.type)),n)}function qi(n,e,t,i){if(50<Yl)throw Yl=0,hg=null,Error(ie(185));hc(n,t,i),((tt&2)===0||n!==sn)&&(n===sn&&((tt&2)===0&&(nf|=t),Zt===4&&fs(n,dn)),Kn(n,i),t===1&&tt===0&&(e.mode&1)===0&&(Co=Xt()+500,Jh&&As()))}function Kn(n,e){var t=n.callbackNode;zw(n,e);var i=Ah(n,n===sn?dn:0);if(i===0)t!==null&&fx(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&fx(t),e===1)n.tag===0?OE(sy.bind(null,n)):rS(sy.bind(null,n)),DE(function(){(tt&6)===0&&As()}),t=null;else{switch(Dy(i)){case 1:t=Sg;break;case 4:t=Py;break;case 16:t=Eh;break;case 536870912:t=Iy;break;default:t=Eh}t=nM(t,$S.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function $S(n,e){if(yh=-1,Sh=0,(tt&6)!==0)throw Error(ie(327));var t=n.callbackNode;if(So()&&n.callbackNode!==t)return null;var i=Ah(n,n===sn?dn:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=Xh(n,i);else{e=i;var r=tt;tt|=2;var s=ZS();(sn!==n||dn!==e)&&(Rr=null,Co=Xt()+500,da(n,e));do try{rA();break}catch(o){jS(n,o)}while(!0);Lg(),Gh.current=s,tt=r,Kt!==null?e=0:(sn=null,dn=0,e=Zt)}if(e!==0){if(e===2&&(r=km(n),r!==0&&(i=r,e=fg(n,r))),e===1)throw t=uc,da(n,0),fs(n,i),Kn(n,Xt()),t;if(e===6)fs(n,i);else{if(r=n.current.alternate,(i&30)===0&&!nA(r)&&(e=Xh(n,i),e===2&&(s=km(n),s!==0&&(i=s,e=fg(n,s))),e===1))throw t=uc,da(n,0),fs(n,i),Kn(n,Xt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:ca(n,Wn,Rr);break;case 3:if(fs(n,i),(i&130023424)===i&&(e=$g+500-Xt(),10<e)){if(Ah(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Bn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=qm(ca.bind(null,n,Wn,Rr),e);break}ca(n,Wn,Rr);break;case 4:if(fs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-Xi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*tA(i/1960))-i,10<i){n.timeoutHandle=qm(ca.bind(null,n,Wn,Rr),i);break}ca(n,Wn,Rr);break;case 5:ca(n,Wn,Rr);break;default:throw Error(ie(329))}}}return Kn(n,Xt()),n.callbackNode===t?$S.bind(null,n):null}function fg(n,e){var t=ql;return n.current.memoizedState.isDehydrated&&(da(n,e).flags|=256),n=Xh(n,e),n!==2&&(e=Wn,Wn=t,e!==null&&dg(e)),n}function dg(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function nA(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Yi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fs(n,e){for(e&=~Kg,e&=~nf,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Xi(e),i=1<<t;n[t]=-1,e&=~i}}function sy(n){if((tt&6)!==0)throw Error(ie(327));So();var e=Ah(n,0);if((e&1)===0)return Kn(n,Xt()),null;var t=Xh(n,e);if(n.tag!==0&&t===2){var i=km(n);i!==0&&(e=i,t=fg(n,i))}if(t===1)throw t=uc,da(n,0),fs(n,e),Kn(n,Xt()),t;if(t===6)throw Error(ie(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ca(n,Wn,Rr),Kn(n,Xt()),null}function jg(n,e){var t=tt;tt|=1;try{return n(e)}finally{tt=t,tt===0&&(Co=Xt()+500,Jh&&As())}}function xa(n){ps!==null&&ps.tag===0&&(tt&6)===0&&So();var e=tt;tt|=1;var t=Ci.transition,i=st;try{if(Ci.transition=null,st=1,n)return n()}finally{st=i,Ci.transition=t,tt=e,(tt&6)===0&&As()}}function Zg(){oi=mo.current,Mt(mo)}function da(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,NE(t)),Kt!==null)for(t=Kt.return;t!==null;){var i=t;switch(Ig(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Nh();break;case 3:Eo(),Mt(qn),Mt(En),zg();break;case 5:Bg(i);break;case 4:Eo();break;case 13:Mt(At);break;case 19:Mt(At);break;case 10:Fg(i.type._context);break;case 22:case 23:Zg()}t=t.return}if(sn=n,Kt=n=Ms(n.current,null),dn=oi=e,Zt=0,uc=null,Kg=nf=va=0,Wn=ql=null,ha!==null){for(e=0;e<ha.length;e++)if(t=ha[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}ha=null}return n}function jS(n,e){do{var t=Kt;try{if(Lg(),_h.current=Vh,zh){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}zh=!1}if(_a=0,rn=jt=Ct=null,Wl=!1,oc=0,Yg.current=null,t===null||t.return===null){Zt=1,uc=e,Kt=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=dn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,f=u.tag;if((u.mode&1)===0&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=qx(a);if(p!==null){p.flags&=-257,Yx(p,a,o,s,e),p.mode&1&&Xx(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if((e&1)===0){Xx(s,c,e),Jg();break e}l=Error(ie(426))}}else if(wt&&o.mode&1){var g=qx(a);if(g!==null){(g.flags&65536)===0&&(g.flags|=256),Yx(g,a,o,s,e),Ng(Ao(l,o));break e}}s=l=Ao(l,o),Zt!==4&&(Zt=2),ql===null?ql=[s]:ql.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=DS(s,l,e);Bx(s,d);break e;case 1:o=l;var m=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ys===null||!ys.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=LS(s,o,e);Bx(s,S);break e}}s=s.return}while(s!==null)}QS(t)}catch(T){e=T,Kt===t&&t!==null&&(Kt=t=t.return);continue}break}while(!0)}function ZS(){var n=Gh.current;return Gh.current=Vh,n===null?Vh:n}function Jg(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),sn===null||(va&268435455)===0&&(nf&268435455)===0||fs(sn,dn)}function Xh(n,e){var t=tt;tt|=2;var i=ZS();(sn!==n||dn!==e)&&(Rr=null,da(n,e));do try{iA();break}catch(r){jS(n,r)}while(!0);if(Lg(),tt=t,Gh.current=i,Kt!==null)throw Error(ie(261));return sn=null,dn=0,Zt}function iA(){for(;Kt!==null;)JS(Kt)}function rA(){for(;Kt!==null&&!Iw();)JS(Kt)}function JS(n){var e=tM(n.alternate,n,oi);n.memoizedProps=n.pendingProps,e===null?QS(n):Kt=e,Yg.current=null}function QS(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=jE(t,e,oi),t!==null){Kt=t;return}}else{if(t=ZE(t,e),t!==null){t.flags&=32767,Kt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Zt=6,Kt=null;return}}if(e=e.sibling,e!==null){Kt=e;return}Kt=e=n}while(e!==null);Zt===0&&(Zt=5)}function ca(n,e,t){var i=st,r=Ci.transition;try{Ci.transition=null,st=1,sA(n,e,t,i)}finally{Ci.transition=r,st=i}return null}function sA(n,e,t,i){do So();while(ps!==null);if((tt&6)!==0)throw Error(ie(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ie(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Vw(n,s),n===sn&&(Kt=sn=null,dn=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||fh||(fh=!0,nM(Eh,function(){return So(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=Ci.transition,Ci.transition=null;var a=st;st=1;var o=tt;tt|=4,Yg.current=null,QE(n,t),YS(t,n),AE(Wm),Ch=!!Hm,Wm=Hm=null,n.current=t,eA(t,n,r),Nw(),tt=o,st=a,Ci.transition=s}else n.current=t;if(fh&&(fh=!1,ps=n,Wh=r),s=n.pendingLanes,s===0&&(ys=null),Fw(t.stateNode,i),Kn(n,Xt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Hh)throw Hh=!1,n=ug,ug=null,n;return(Wh&1)!==0&&n.tag!==0&&So(),s=n.pendingLanes,(s&1)!==0?n===hg?Yl++:(Yl=0,hg=n):Yl=0,As(),null}function So(){if(ps!==null){var n=Dy(Wh),e=Ci.transition,t=st;try{if(Ci.transition=null,st=16>n?16:n,ps===null)var i=!1;else{if(n=ps,ps=null,Wh=0,(tt&6)!==0)throw Error(ie(331));var r=tt;for(tt|=4,be=n.current;be!==null;){var s=be,a=s.child;if((be.flags&16)!==0){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(be=c;be!==null;){var u=be;switch(u.tag){case 0:case 11:case 15:Xl(8,u,s)}var f=u.child;if(f!==null)f.return=u,be=f;else for(;be!==null;){u=be;var h=u.sibling,p=u.return;if(WS(u),u===c){be=null;break}if(h!==null){h.return=p,be=h;break}be=p}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var g=v.sibling;v.sibling=null,v=g}while(v!==null)}}be=s}}if((s.subtreeFlags&2064)!==0&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Xl(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,be=d;break e}be=s.return}}var m=n.current;for(be=m;be!==null;){a=be;var x=a.child;if((a.subtreeFlags&2064)!==0&&x!==null)x.return=a,be=x;else e:for(a=m;be!==null;){if(o=be,(o.flags&2048)!==0)try{switch(o.tag){case 0:case 11:case 15:tf(9,o)}}catch(T){kt(o,o.return,T)}if(o===a){be=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,be=S;break e}be=o.return}}if(tt=r,As(),lr&&typeof lr.onPostCommitFiberRoot=="function")try{lr.onPostCommitFiberRoot(Yh,n)}catch{}i=!0}return i}finally{st=t,Ci.transition=e}}return!1}function ay(n,e,t){e=Ao(t,e),e=DS(n,e,1),n=xs(n,e,1),e=Bn(),n!==null&&(hc(n,1,e),Kn(n,e))}function kt(n,e,t){if(n.tag===3)ay(n,n,t);else for(;e!==null;){if(e.tag===3){ay(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ys===null||!ys.has(i))){n=Ao(t,n),n=LS(e,n,1),e=xs(e,n,1),n=Bn(),e!==null&&(hc(e,1,n),Kn(e,n));break}}e=e.return}}function aA(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Bn(),n.pingedLanes|=n.suspendedLanes&t,sn===n&&(dn&t)===t&&(Zt===4||Zt===3&&(dn&130023424)===dn&&500>Xt()-$g?da(n,0):Kg|=t),Kn(n,e)}function eM(n,e){e===0&&((n.mode&1)===0?e=1:(e=Ju,Ju<<=1,(Ju&130023424)===0&&(Ju=4194304)));var t=Bn();n=Ur(n,e),n!==null&&(hc(n,e,t),Kn(n,t))}function oA(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),eM(n,t)}function lA(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),eM(n,t)}var tM;tM=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||qn.current)Xn=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Xn=!1,$E(n,e,t);Xn=(n.flags&131072)!==0}else Xn=!1,wt&&(e.flags&1048576)!==0&&sS(e,Fh,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;xh(n,e),n=e.pendingProps;var r=bo(e,En.current);yo(e,t),r=Gg(null,e,i,n,r,t);var s=Hg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Yn(i)?(s=!0,Dh(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Og(e),r.updater=ef,e.stateNode=r,r._reactInternals=e,Qm(e,i,n,t),e=ng(null,e,i,!0,s,t)):(e.tag=0,wt&&s&&Pg(e),kn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(xh(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=uA(i),n=Gi(i,n),r){case 0:e=tg(null,e,i,n,t);break e;case 1:e=jx(null,e,i,n,t);break e;case 11:e=Kx(null,e,i,n,t);break e;case 14:e=$x(null,e,i,Gi(i.type,n),t);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gi(i,r),tg(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gi(i,r),jx(n,e,i,r,t);case 3:e:{if(kS(e),n===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,hS(n,e),kh(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ao(Error(ie(423)),e),e=Zx(n,e,i,t,r);break e}else if(i!==r){r=Ao(Error(ie(424)),e),e=Zx(n,e,i,t,r);break e}else for(li=vs(e.stateNode.containerInfo.firstChild),ci=e,wt=!0,Wi=null,t=cS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(To(),i===r){e=Or(n,e,t);break e}kn(n,e,i,t)}e=e.child}return e;case 5:return fS(e),n===null&&jm(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,Xm(i,r)?a=null:s!==null&&Xm(i,s)&&(e.flags|=32),OS(n,e),kn(n,e,a,t),e.child;case 6:return n===null&&jm(e),null;case 13:return BS(n,e,t);case 4:return kg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=wo(e,null,i,t):kn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gi(i,r),Kx(n,e,i,r,t);case 7:return kn(n,e,e.pendingProps,t),e.child;case 8:return kn(n,e,e.pendingProps.children,t),e.child;case 12:return kn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,vt(Uh,i._currentValue),i._currentValue=a,s!==null)if(Yi(s.value,a)){if(s.children===r.children&&!qn.current){e=Or(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Dr(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Zm(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Zm(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}kn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,yo(e,t),r=Ri(r),i=i(r),e.flags|=1,kn(n,e,i,t),e.child;case 14:return i=e.type,r=Gi(i,e.pendingProps),r=Gi(i.type,r),$x(n,e,i,r,t);case 15:return FS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gi(i,r),xh(n,e),e.tag=1,Yn(i)?(n=!0,Dh(e)):n=!1,yo(e,t),NS(e,i,r),Qm(e,i,r,t),ng(null,e,i,!0,n,t);case 19:return zS(n,e,t);case 22:return US(n,e,t)}throw Error(ie(156,e.tag))};function nM(n,e){return Ry(n,e)}function cA(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(n,e,t,i){return new cA(n,e,t,i)}function Qg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function uA(n){if(typeof n=="function")return Qg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===vg)return 11;if(n===xg)return 14}return 2}function Ms(n,e){var t=n.alternate;return t===null?(t=Ai(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Mh(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")Qg(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case ro:return pa(t.children,r,s,e);case _g:a=8,r|=8;break;case bm:return n=Ai(12,t,e,r|2),n.elementType=bm,n.lanes=s,n;case Tm:return n=Ai(13,t,e,r),n.elementType=Tm,n.lanes=s,n;case wm:return n=Ai(19,t,e,r),n.elementType=wm,n.lanes=s,n;case fy:return rf(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case uy:a=10;break e;case hy:a=9;break e;case vg:a=11;break e;case xg:a=14;break e;case cs:a=16,i=null;break e}throw Error(ie(130,n==null?n:typeof n,""))}return e=Ai(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function pa(n,e,t,i){return n=Ai(7,n,i,e),n.lanes=t,n}function rf(n,e,t,i){return n=Ai(22,n,i,e),n.elementType=fy,n.lanes=t,n.stateNode={isHidden:!1},n}function ym(n,e,t){return n=Ai(6,n,null,e),n.lanes=t,n}function Sm(n,e,t){return e=Ai(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function hA(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rm(0),this.expirationTimes=rm(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rm(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function e0(n,e,t,i,r,s,a,o,l){return n=new hA(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ai(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Og(s),n}function fA(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:io,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function iM(n){if(!n)return Ts;n=n._reactInternals;e:{if(Sa(n)!==n||n.tag!==1)throw Error(ie(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(n.tag===1){var t=n.type;if(Yn(t))return iS(n,t,e)}return e}function rM(n,e,t,i,r,s,a,o,l){return n=e0(t,i,!0,n,r,s,a,o,l),n.context=iM(null),t=n.current,i=Bn(),r=Ss(t),s=Dr(i,r),s.callback=e??null,xs(t,s,r),n.current.lanes=r,hc(n,r,i),Kn(n,i),n}function sf(n,e,t,i){var r=e.current,s=Bn(),a=Ss(r);return t=iM(t),e.context===null?e.context=t:e.pendingContext=t,e=Dr(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=xs(r,e,a),n!==null&&(qi(n,r,a,s),gh(n,r,a)),a}function qh(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function oy(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function t0(n,e){oy(n,e),(n=n.alternate)&&oy(n,e)}function dA(){return null}var sM=typeof reportError=="function"?reportError:function(n){console.error(n)};function n0(n){this._internalRoot=n}af.prototype.render=n0.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ie(409));sf(n,e,null,null)};af.prototype.unmount=n0.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;xa(function(){sf(null,n,null,null)}),e[Fr]=null}};function af(n){this._internalRoot=n}af.prototype.unstable_scheduleHydration=function(n){if(n){var e=Uy();n={blockedOn:null,target:n,priority:e};for(var t=0;t<hs.length&&e!==0&&e<hs[t].priority;t++);hs.splice(t,0,n),t===0&&ky(n)}};function i0(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function of(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ly(){}function pA(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=qh(a);s.call(c)}}var a=rM(e,i,n,0,null,!1,!1,"",ly);return n._reactRootContainer=a,n[Fr]=a.current,nc(n.nodeType===8?n.parentNode:n),xa(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=qh(l);o.call(c)}}var l=e0(n,0,!1,null,null,!1,!1,"",ly);return n._reactRootContainer=l,n[Fr]=l.current,nc(n.nodeType===8?n.parentNode:n),xa(function(){sf(e,l,t,i)}),l}function lf(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=qh(a);o.call(l)}}sf(e,a,n,r)}else a=pA(t,e,n,r,i);return qh(a)}Ly=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ol(e.pendingLanes);t!==0&&(Mg(e,t|1),Kn(e,Xt()),(tt&6)===0&&(Co=Xt()+500,As()))}break;case 13:xa(function(){var i=Ur(n,1);if(i!==null){var r=Bn();qi(i,n,1,r)}}),t0(n,1)}};bg=function(n){if(n.tag===13){var e=Ur(n,134217728);if(e!==null){var t=Bn();qi(e,n,134217728,t)}t0(n,134217728)}};Fy=function(n){if(n.tag===13){var e=Ss(n),t=Ur(n,e);if(t!==null){var i=Bn();qi(t,n,e,i)}t0(n,e)}};Uy=function(){return st};Oy=function(n,e){var t=st;try{return st=n,e()}finally{st=t}};Fm=function(n,e,t){switch(e){case"input":if(Cm(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Zh(i);if(!r)throw Error(ie(90));py(i),Cm(i,r)}}}break;case"textarea":gy(n,t);break;case"select":e=t.value,e!=null&&go(n,!!t.multiple,e,!1)}};by=jg;Ty=xa;var mA={usingClientEntryPoint:!1,Events:[dc,lo,Zh,Sy,My,jg]},Dl={findFiberByHostInstance:ua,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gA={bundleType:Dl.bundleType,version:Dl.version,rendererPackageName:Dl.rendererPackageName,rendererConfig:Dl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ay(n),n===null?null:n.stateNode},findFiberByHostInstance:Dl.findFiberByHostInstance||dA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ll.isDisabled&&Ll.supportsFiber))try{Yh=Ll.inject(gA),lr=Ll}catch{}var Ll;fi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mA;fi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!i0(e))throw Error(ie(200));return fA(n,e,null,t)};fi.createRoot=function(n,e){if(!i0(n))throw Error(ie(299));var t=!1,i="",r=sM;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=e0(n,1,!1,null,null,t,!1,i,r),n[Fr]=e.current,nc(n.nodeType===8?n.parentNode:n),new n0(e)};fi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ie(188)):(n=Object.keys(n).join(","),Error(ie(268,n)));return n=Ay(e),n=n===null?null:n.stateNode,n};fi.flushSync=function(n){return xa(n)};fi.hydrate=function(n,e,t){if(!of(e))throw Error(ie(200));return lf(null,n,e,!0,t)};fi.hydrateRoot=function(n,e,t){if(!i0(n))throw Error(ie(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=sM;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=rM(e,null,n,1,t??null,r,!1,s,a),n[Fr]=e.current,nc(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new af(e)};fi.render=function(n,e,t){if(!of(e))throw Error(ie(200));return lf(null,n,e,!1,t)};fi.unmountComponentAtNode=function(n){if(!of(n))throw Error(ie(40));return n._reactRootContainer?(xa(function(){lf(null,null,n,!1,function(){n._reactRootContainer=null,n[Fr]=null})}),!0):!1};fi.unstable_batchedUpdates=jg;fi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!of(t))throw Error(ie(200));if(n==null||n._reactInternals===void 0)throw Error(ie(38));return lf(n,e,t,!1,i)};fi.version="18.3.1-next-f1338f8080-20240426"});var cM=Cr((rD,lM)=>{"use strict";function oM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oM)}catch(n){console.error(n)}}oM(),lM.exports=aM()});var hM=Cr(r0=>{"use strict";var uM=cM();r0.createRoot=uM.createRoot,r0.hydrateRoot=uM.hydrateRoot;var sD});var PM=Cr(df=>{"use strict";var EA=aa(),AA=Symbol.for("react.element"),CA=Symbol.for("react.fragment"),RA=Object.prototype.hasOwnProperty,PA=EA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,IA={key:!0,ref:!0,__self:!0,__source:!0};function RM(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)RA.call(e,i)&&!IA.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:AA,type:n,key:s,ref:a,props:r,_owner:PA.current}}df.Fragment=CA;df.jsx=RM;df.jsxs=RM});var Br=Cr((mD,IM)=>{"use strict";IM.exports=PM()});var kT=ai(aa(),1),BT=ai(hM(),1);var hn=ai(aa(),1);var Ii={p:0,c:0,f:0,kcal:0};function qt(n,e,t){return Math.max(e,Math.min(t,Number(n)||0))}function fe(n,e=0){return Number((Number(n)||0).toFixed(e))}function di(n,e=1){return!Number.isFinite(Number(n))||Number(n)<=0?0:Math.max(0,Math.round(Number(n)/e)*e)}function ur(n=Ii){return Number.isFinite(n.kcal)?n.kcal:(n.p||0)*4+(n.c||0)*4+(n.f||0)*9}function Ma(n=Ii){return{...n,kcal:ur(n)}}function mn(...n){return Ma(n.reduce((e,t)=>({p:e.p+(t?.p||0),c:e.c+(t?.c||0),f:e.f+(t?.f||0),kcal:e.kcal+ur(t||Ii)}),{...Ii}))}function o0(n=Ii,e=Ii,t=.4){let i=qt(t,.1,.9),r={p:fe(Math.max(0,(n.p||0)-(e.p||0)),1),c:fe(Math.max(0,(n.c||0)-(e.c||0)),1),f:fe(Math.max(0,(n.f||0)-(e.f||0)),1),kcal:fe(Math.max(0,ur(n)-ur(e)))},s={p:fe(r.p*i,1),c:fe(r.c*i,1),f:fe(r.f*i,1),kcal:fe(r.kcal*i)},a={p:fe(Math.max(0,r.p-s.p),1),c:fe(Math.max(0,r.c-s.c),1),f:fe(Math.max(0,r.f-s.f),1),kcal:fe(Math.max(0,r.kcal-s.kcal))};return{remaining:r,lunch:s,dinner:a}}function an(n=Ii,e=0){return Ma({p:(n.p||0)*e,c:(n.c||0)*e,f:(n.f||0)*e,...Number.isFinite(n.kcal)?{kcal:n.kcal*e}:{}})}function fM(n={}){let e=qt(n.bodyWeightKg,1,300),t=qt(n.proteinPerKg,0,5),i=qt(n.fatMinPerKg,0,3),r=fe(qt(n.kcal,0,9e3)),s=fe(e*t,1),a=fe(e*i,1),o=Math.max(0,r-s*4-a*9),l=fe(o/4,1);return{p:s,c:l,f:a,kcal:r}}function _A(n=0,e=1){let t=qt(n,0,1/0)/Math.max(1,qt(e,1,300));return t<2?{label:"\u4F4E\u78B3",tone:"amber",note:"\u78B3\u6C34\u4F4E\u4E8E 2.0g/kg\uFF0C\u4ECA\u5929\u7B97\u6536\u7D27\u65E5"}:t<3?{label:"\u4E2D\u78B3",tone:"green",note:"\u78B3\u6C34\u5728 2.0-3.0g/kg\uFF0C\u8BAD\u7EC3\u548C\u6062\u590D\u90FD\u6BD4\u8F83\u7A33"}:{label:"\u9AD8\u78B3",tone:"red",note:"\u78B3\u6C34\u8D85\u8FC7 3.0g/kg\uFF0C\u66F4\u50CF\u8865\u7CD6\u6216\u9AD8\u6D3B\u52A8\u65E5"}}function dM(n=Ii,e=Ii,t=1){let i=Math.max(1,ur(n)),r=Math.max(1,qt(t,1,300)),s=(n.p||0)*4,a=(n.c||0)*4,o=(n.f||0)*9;return{proteinPct:fe(s/i*100,1),carbPct:fe(a/i*100,1),fatPct:fe(o/i*100,1),proteinPerKg:fe((n.p||0)/r,1),carbPerKg:fe((n.c||0)/r,1),fatPerKg:fe((n.f||0)/r,1),proteinTargetPerKg:fe((e.p||0)/r,1),carbTargetPerKg:fe((e.c||0)/r,1),carbDay:_A(n.c||0,r)}}function vA(n,e){let t=di(qt(e,0,n.max??1/0),n.step||1);return{...n,qty:t,macro:an(n.unitMacro,t)}}function a0(n,e){let t=n.kcal-e.kcal,i=Math.pow(t/(t>0?150:125),2)*8+Math.max(0,t-220)*.28,r=Math.max(0,e.p-n.p),s=Math.max(0,n.p-e.p),a=n.c-e.c,o=Math.max(0,e.f-n.f),l=Math.max(0,n.f-e.f);return i+Math.pow(r/4,2)*28+Math.pow(s/12,2)*4+Math.pow(a/14,2)*10+Math.pow(o/4,2)*24+Math.pow(l/7,2)*12}function xA(n){let e=n.step||1,t=Math.max(0,n.max??n.qty??e*20),i=Math.floor(t/e),r=new Set([0,di(n.qty||0,e),di(t,e)]);if(i<=90)for(let s=0;s<=i;s+=1)r.add(di(s*e,e));else{for(let s=-14;s<=14;s+=1)r.add(di((n.qty||0)+s*e,e));[.15,.25,.35,.5,.65,.8,1].forEach(s=>r.add(di(t*s,e)))}return[...r].filter(s=>s>=0&&s<=t).sort((s,a)=>s-a)}function yA(n,e,t){let i=t.reduce((u,f)=>mn(u,an(f.unitMacro,f.max??0)),Ii),r=mn(n,i),s=n.p>e.p?n.p-e.p:Math.max(0,e.p-r.p),a=n.c>e.c?n.c-e.c:Math.max(0,e.c-r.c),o=n.f>e.f?n.f-e.f:Math.max(0,e.f-r.f),l=Math.max(0,n.kcal-e.kcal-220),c=Math.max(0,e.kcal-r.kcal);return Math.pow(s/6,2)*30+Math.pow(a/22,2)*10+Math.pow(o/7,2)*20+Math.pow(l/110,2)*12+Math.pow(c/160,2)*8+a0(n,e)*.015}function l0(n,e,t,i={}){let r=n.filter(l=>l&&l.unitMacro&&(l.max??0)>0),s=i.beamWidth??520,a=[{choices:[],macro:Ma(e||Ii),rank:0}];r.forEach((l,c)=>{let u=r.slice(c+1),f=xA(l),h=[];a.forEach(p=>{f.forEach(_=>{let v=an(l.unitMacro,_),g=mn(p.macro,v),d=yA(g,t,u)+Math.abs(_-(l.qty||0))*5e-4;h.push({choices:[...p.choices,_],macro:g,rank:d})})}),h.sort((p,_)=>p.rank-_.rank),a=h.slice(0,s)});let o=a.reduce((l,c)=>a0(c.macro,t)<a0(l.macro,t)?c:l,a[0]);return r.map((l,c)=>vA(l,o.choices[c]||0)).filter(l=>l.qty>0)}function mc(n){return n.reduce((e,t)=>({...e,[t.key]:{enabled:t.defaultEnabled!==!1,target:t.defaultTarget??0,stock:t.defaultStock??0}}),{})}function pM(n,e){let t=mc(e);return e.reduce((i,r)=>{let s=n?.[r.key]||{},a=r.max??1/0;return i[r.key]={enabled:s.enabled??t[r.key].enabled,target:qt(s.target??t[r.key].target,0,a),stock:qt(s.stock??t[r.key].stock,0,a)},i},{})}function mM(n,e,t=7){let i=pM(e,n),r=qt(t,1,21);return n.map(s=>{let a=i[s.key],o=s.max??1/0,l=qt(a.target,0,o),c=qt(di(l*r/7,s.step||1),0,o),u=qt(di(a.stock,s.step||1),0,o),f=a.enabled?qt(di(Math.max(0,c-u),s.step||1),0,o):0,h=s.unitMacro||Ii;return{...s,enabled:a.enabled,weeklyTarget:l,targetQty:c,stockQty:u,buyQty:f,weeklyQty:f,qty:f,unitMacro:h,macro:an(h,f),expectedMacro:an(h,c),needState:a.enabled&&f>0?"need":"ok"}})}function s0(n,e){return`${fe(n,e==="g"?0:1)}${e}`}function gM(n,e={}){return n.filter(t=>t.enabled&&t.buyQty>0).sort((t,i)=>(e[t.tone]??9)-(e[i.tone]??9)||i.buyQty-t.buyQty).map((t,i)=>{let r=s0(t.targetQty,t.unit),s=s0(t.stockQty,t.unit),a=s0(t.buyQty,t.unit),o=t.buyHint||(t.stockQty>0?`\u5BB6\u91CC\u8FD8\u6709 ${s}\uFF0C\u8865\u5230\u76EE\u6807 ${r}`:`\u672C\u5468\u671F\u76EE\u6807 ${r}`);return{...t,order:i+1,buyText:a,targetText:r,stockText:s,reason:o}})}var Io={bodyWeightKg:78,proteinPerKg:1.8,fatMinPerKg:.6,kcal:2e3},cf=2900,_M={p:0,c:0,f:0,kcal:0},Cs={pasta:{name:"\u610F\u9762 \xB7 Garlic oil",short:"\u610F\u9762",sub:"\u529B\u91CF\u65E5\u6700\u723D",unit:"g",step:10,perUnit:{p:.12,c:.71,f:.015},kcalUnit:3.55,color:"#ffb86b",ja:{name:"\u30D1\u30B9\u30BF \xB7 \u30AC\u30FC\u30EA\u30C3\u30AF\u30AA\u30A4\u30EB",short:"\u30D1\u30B9\u30BF",sub:"\u3057\u3063\u304B\u308A\u98DF\u3079\u308B\u65E5"}},soba:{name:"\u835E\u9EA6\u9762 \xB7 Soba",short:"\u835E\u9EA6",sub:"\u6E05\u723D\u4F4E\u8D1F\u62C5",unit:"g",step:10,perUnit:{p:.14,c:.66,f:.023},kcalUnit:3.44,color:"#86c9a9",ja:{name:"\u305D\u3070 \xB7 Soba",short:"\u305D\u3070",sub:"\u8EFD\u304F\u3066\u843D\u3061\u7740\u304F"}},nissin:{name:"\u65E5\u6E05\u975E\u6CB9\u70B8",short:"\u65E5\u6E05",sub:"\u61D2\u4EBA\u6C64\u9762",unit:"\u5305",step:1,perUnit:{p:6.7,c:55,f:4.9},kcalUnit:291,color:"#ff9d91",ja:{name:"\u65E5\u6E05\u30CE\u30F3\u30D5\u30E9\u30A4",short:"\u65E5\u6E05",sub:"\u6642\u9593\u304C\u306A\u3044\u65E5"}},fresh_noodle:{name:"\u51B7\u85CF\u9C9C\u9762 \xB7 \u751F\u30E9\u30FC\u30E1\u30F3",short:"\u9C9C\u9762",sub:"\u51B7\u85CF\u67DC\u65E0\u8C03\u5473\u5305",unit:"g",step:10,perUnit:{p:.0869,c:.5469,f:.0123,kcal:2.623},kcalUnit:2.623,color:"#f1c47b",ja:{name:"\u51B7\u8535\u751F\u9EBA \xB7 \u8ABF\u5473\u306A\u3057",short:"\u751F\u9EBA",sub:"10g \u5358\u4F4D\u3067\u8ABF\u6574"}},banana:{name:"\u9999\u8549",short:"\u9999\u8549",sub:"\u6309\u6574\u6839\u8865\u78B3\u6C34",unit:"\u6839",step:1,max:8,perUnit:{p:1,c:27,f:.25,kcal:114},kcalUnit:114,color:"#f4cf58",ja:{name:"\u30D0\u30CA\u30CA",short:"\u30D0\u30CA\u30CA",unit:"\u672C",sub:"1\u672C\u5358\u4F4D\u3067\u8ABF\u6574"}},rice_dry:{name:"\u767D\u7C73 \xB7 \u751F\u7C73\u5E72\u91CD",short:"\u767D\u7C73",sub:"\u716E\u996D\u524D\u79F0\u91CD",unit:"g",step:10,perUnit:{p:.061,c:.776,f:.009,kcal:3.42},kcalUnit:3.42,color:"#d9d4c8",ja:{name:"\u7CBE\u767D\u7C73 \xB7 \u751F\u7C73",short:"\u767D\u7C73",sub:"\u708A\u98EF\u524D\u306E\u91CD\u91CF"}},pho:{name:"\u8D8A\u5357\u7C73\u7C89",short:"\u7C73\u7C89",sub:"\u4F4E\u8102\u6362\u53E3\u5473",unit:"\u5305",step:1,perUnit:{p:4,c:43,f:2},kcalUnit:210,color:"#86d8df",ja:{name:"\u30D5\u30A9\u30FC",short:"\u30D5\u30A9\u30FC",sub:"\u4F4E\u8102\u8CEA\u3067\u5909\u5316"}},bifun:{name:"\u7EAF\u5E72\u7C73\u7C89",short:"\u5E72\u7C73\u7C89",sub:"\u7EAF\u78B3\u6C34\u8865\u6EE1",unit:"g",step:10,perUnit:{p:.06,c:.79,f:.005},kcalUnit:3.45,color:"#f5d66b",ja:{name:"\u4E7E\u71E5\u30D3\u30FC\u30D5\u30F3",short:"\u30D3\u30FC\u30D5\u30F3",sub:"\u70AD\u6C34\u5316\u7269\u3092\u8DB3\u3059"}}},ba={beef:{label:"\u725B\u3059\u306D\u8089",short:"\u3059\u306D",tag:"raw \xB7 per g",unit:"g",step:10,p:.212,c:0,max:650,note:"\u8D64\u8EAB\u30FB\u8102\u8CEA\u5C11\u306A\u3081",ja:{label:"\u725B\u3059\u306D\u8089",short:"\u3059\u306D",note:"\u8D64\u8EAB\u3067\u8102\u8CEA\u63A7\u3048\u3081"}},chicken:{label:"\u901F\u98DF\u9E21\u80F8",short:"\u9E21\u80F8",tag:"per pack",unit:"\u5757",step:1,p:22,c:1,f:2,max:6,note:"\u6700\u7A33\u9AD8\u86CB\u767D",ja:{label:"\u30B5\u30E9\u30C0\u30C1\u30AD\u30F3",short:"\u30C1\u30AD\u30F3",unit:"\u500B",note:"\u5B89\u5B9A\u306E\u9AD8\u305F\u3093\u3071\u304F"}},duck:{label:"\u5408\u9E2D\u80F8\u53BB\u76AE",short:"\u5408\u9E2D",tag:"100g serve",unit:"\u4EFD",step:1,p:21,c:.5,f:6,max:4,note:"\u9999\u4F46\u4E0D\u592A\u80A5",ja:{label:"\u5408\u9D28\u3080\u306D\u76AE\u306A\u3057",short:"\u5408\u9D28",unit:"\u76BF",note:"\u9999\u308A\u304C\u3042\u3063\u3066\u8EFD\u3081"}},kfc:{label:"KFC \u539F\u5473\u9E21",short:"KFC",tag:"per piece",unit:"\u5757",step:1,p:18,c:8,f:14,max:5,note:"\u723D\uFF0C\u4F46\u76D0\u9AD8",ja:{label:"KFC \u30AA\u30EA\u30B8\u30CA\u30EB\u30C1\u30AD\u30F3",short:"KFC",unit:"\u500B",note:"\u6E80\u8DB3\u611F\u3042\u308A\u3001\u5869\u5206\u9AD8\u3081"}}},Rs={egg_fried:{label:"\u714E\u86CB",short:"\u714E\u86CB",unit:"\u4E2A",step:1,p:6,c:.4,f:7,max:6,ja:{label:"\u76EE\u7389\u713C\u304D",short:"\u5375",unit:"\u500B"}},sauce:{label:"\u30DA\u30DA\u30ED\u30F3\u9171",short:"\u849C\u6CB9\u9171",unit:"\u5305",step:1,p:.9,c:1.5,f:10,max:2,ja:{label:"\u30DA\u30DA\u30ED\u30F3\u30BD\u30FC\u30B9",short:"\u30BD\u30FC\u30B9",unit:"\u888B"}},olive:{label:"\u6A44\u6984\u6CB9",short:"\u6A44\u6984\u6CB9",unit:"\u5C0F\u52FA",step:1,p:0,c:0,f:4.5,max:6,ja:{label:"\u30AA\u30EA\u30FC\u30D6\u30AA\u30A4\u30EB",short:"\u30AA\u30A4\u30EB",unit:"\u5C0F\u3055\u3058"}},nuts:{label:"\u7D20\u713C\u304D\u30CA\u30C3\u30C4",short:"\u575A\u679C",unit:"10g",step:1,p:2,c:2,f:5,max:5,ja:{label:"\u7D20\u713C\u304D\u30CA\u30C3\u30C4",short:"\u30CA\u30C3\u30C4"}},cheese_bite:{label:"\u5C0F\u829D\u58EB",short:"\u829D\u58EB",unit:"\u4E2A",step:1,p:2.6,c:.4,f:3.4,kcal:43,max:8,ja:{label:"\u30D9\u30D3\u30FC\u30C1\u30FC\u30BA",short:"\u30C1\u30FC\u30BA",unit:"\u500B"}},avocado:{label:"\u30A2\u30DC\u30AB\u30C9",short:"\u725B\u6CB9\u679C",unit:"\u534A\u4E2A",step:1,p:1,c:4,f:15,max:2,ja:{label:"\u30A2\u30DC\u30AB\u30C9",short:"\u30A2\u30DC\u30AB\u30C9",unit:"\u534A\u5206"}}},$n={banana:{label:"\u9999\u8549",unit:"\u6839",step:1,max:4,p:1,c:27,f:.3,tone:"gold",ja:{label:"\u30D0\u30CA\u30CA",unit:"\u672C"}},apple:{label:"\u82F9\u679C",unit:"\u4E2A",step:1,max:3,p:.4,c:35,f:.3,tone:"gold",ja:{label:"\u308A\u3093\u3054",unit:"\u500B"}},kiwi:{label:"\u5947\u5F02\u679C",unit:"\u4E2A",step:1,max:4,p:1,c:14,f:.2,tone:"gold",ja:{label:"\u30AD\u30A6\u30A4",unit:"\u500B"}},pineapple:{label:"\u5207\u5757\u83E0\u841D 240g",unit:"\u76D2",step:1,max:2,p:1.44,c:31.2,f:.24,tone:"gold",ja:{label:"\u30AB\u30C3\u30C8\u30D1\u30A4\u30F3 240g",unit:"\u76D2"}},yogurt:{label:"\u65E0\u7CD6\u9178\u5976",unit:"g",step:50,max:400,p:.036,c:.049,f:.03,tone:"gold",ja:{label:"\u7121\u7CD6\u30E8\u30FC\u30B0\u30EB\u30C8"}}},uf={chicken:{label:"\u9E21\u80F8",unit:"\u5757",step:1,max:10,p:22,c:1,f:2,ja:{label:"\u30C1\u30AD\u30F3",unit:"\u500B"}},egg:{label:"\u5168\u86CB",unit:"\u4E2A",step:1,max:10,p:6,c:.5,f:5,ja:{label:"\u5375",unit:"\u500B"}},onigiri:{label:"\u996D\u56E2",unit:"\u4E2A",step:1,max:6,p:3,c:39,f:.5,ja:{label:"\u304A\u306B\u304E\u308A",unit:"\u500B"}},nissin:{label:"\u65E5\u6E05\u9762",unit:"\u5305",step:1,max:4,p:6.7,c:55,f:4.9,ja:{label:"\u65E5\u6E05\u9EBA",unit:"\u888B"}},rice:{label:"\u7C73\u996D",unit:"g",step:50,max:1e3,p:.026,c:.28,f:.003,ja:{label:"\u3054\u306F\u3093"}},beef:{label:"\u725B\u3059\u306D",unit:"g",step:50,max:600,p:.212,c:0,f:.043,ja:{label:"\u725B\u3059\u306D\u8089"}},pasta:{label:"\u5E72\u610F\u9762",unit:"g",step:50,max:300,p:.12,c:.71,f:.015,ja:{label:"\u4E7E\u71E5\u30D1\u30B9\u30BF"}},fresh_noodle:{label:"\u51B7\u85CF\u9C9C\u9762",unit:"g",step:10,max:600,p:.0869,c:.5469,f:.0123,kcal:2.623,ja:{label:"\u51B7\u8535\u751F\u9EBA"}},banana:{label:"\u9999\u8549",unit:"\u6839",step:1,max:4,p:1,c:27,f:.25,ja:{label:"\u30D0\u30CA\u30CA",unit:"\u672C"}}},hf={onigiri:{label:"\u996D\u56E2\uFF08\u666E\u901A\uFF09",unit:"\u4E2A",step:1,max:3,p:3,c:39,f:.5,ja:{label:"\u304A\u306B\u304E\u308A\uFF08\u666E\u901A\uFF09",unit:"\u500B"}},gold_bread:{label:"711 \u91D1\u306E\u98DF\u30D1\u30F3",unit:"\u7247",step:1,max:2,p:8.8,c:45.4,f:5.3,kcal:261,ja:{label:"\u30BB\u30D6\u30F3 \u91D1\u306E\u98DF\u30D1\u30F3",unit:"\u679A"}}},Ta={tomato:{label:"\u65E0\u76D0\u756A\u8304\u6C41",sub:"K 600 / 200ml",p:1.8,c:7.1,f:0,kcal:39,k:600,na:5,ja:{label:"\u7121\u5869\u30C8\u30DE\u30C8\u30B8\u30E5\u30FC\u30B9",sub:"K 600 / 200ml"}},yasai:{label:"\u91CE\u83DC\u4E00\u65E5",sub:"K 740 / 200ml",p:3,c:14.5,f:0,kcal:75,k:740,na:80,ja:{label:"\u91CE\u83DC\u4E00\u65E5",sub:"K 740 / 200ml"}},none:{label:"\u4E0D\u8865\u94BE",sub:"\u4ECA\u5929\u7701\u4E86",p:0,c:0,f:0,kcal:0,k:0,na:0,ja:{label:"\u88DC\u7D66\u306A\u3057",sub:"\u4ECA\u65E5\u306F\u306A\u3057"}}},wa=[{key:"beef",tone:"red",source:"protein",sourceKey:"beef",label:"\u725B\u3059\u306D\u8089",short:"\u725B\u3059\u306D",unit:"g",step:100,defaultTarget:1200,max:3e3,buyHint:"\u665A\u9910\u4E3B\u86CB\u767D\uFF0C\u5148\u62FF\u8FD9\u4E2A",ja:{label:"\u725B\u3059\u306D\u8089",short:"\u725B\u3059\u306D",buyHint:"\u5915\u98DF\u306E\u4E3B\u5F79\u3002\u307E\u305A\u53D6\u308B"}},{key:"chicken",tone:"red",source:"protein",sourceKey:"chicken",label:"\u901F\u98DF\u9E21\u80F8",short:"\u9E21\u80F8",unit:"\u5757",step:1,defaultTarget:3,max:12,buyHint:"\u61D2\u4EBA\u5907\u7528\u86CB\u767D",ja:{label:"\u30B5\u30E9\u30C0\u30C1\u30AD\u30F3",short:"\u30C1\u30AD\u30F3",unit:"\u500B",buyHint:"\u5FD9\u3057\u3044\u65E5\u306E\u305F\u3093\u3071\u304F\u8CEA"}},{key:"pasta",tone:"green",source:"carb",sourceKey:"pasta",label:"\u5E72\u610F\u9762",short:"\u610F\u9762",unit:"g",step:100,defaultTarget:500,max:2e3,buyHint:"\u4E3B\u529B\u665A\u9910\u78B3\u6C34",ja:{label:"\u4E7E\u71E5\u30D1\u30B9\u30BF",short:"\u30D1\u30B9\u30BF",buyHint:"\u5915\u98DF\u306E\u4E3B\u529B\u70AD\u6C34\u5316\u7269"}},{key:"soba",tone:"green",source:"carb",sourceKey:"soba",label:"\u835E\u9EA6\u9762",short:"\u835E\u9EA6",unit:"g",step:100,defaultTarget:400,max:1600,buyHint:"\u6E05\u723D\u6362\u53E3\u5473",ja:{label:"\u305D\u3070",short:"\u305D\u3070",buyHint:"\u8EFD\u304F\u5473\u5909\u3067\u304D\u308B"}},{key:"nissin",tone:"green",source:"carb",sourceKey:"nissin",label:"\u65E5\u6E05\u975E\u6CB9\u70B8",short:"\u65E5\u6E05",unit:"\u5305",step:1,defaultTarget:2,max:10,buyHint:"\u6CA1\u65F6\u95F4\u65F6\u9876\u4E0A",ja:{label:"\u65E5\u6E05\u30CE\u30F3\u30D5\u30E9\u30A4",short:"\u65E5\u6E05",unit:"\u888B",buyHint:"\u6642\u9593\u304C\u306A\u3044\u65E5\u306E\u4FDD\u967A"}},{key:"fresh_noodle",tone:"green",source:"carb",sourceKey:"fresh_noodle",label:"\u51B7\u85CF\u9C9C\u9762",short:"\u9C9C\u9762",unit:"g",step:10,defaultTarget:400,max:2e3,buyHint:"\u51B7\u85CF\u67DC\u65E0\u8C03\u5473\u5305\uFF0C\u6309 10g \u7B97",ja:{label:"\u51B7\u8535\u751F\u9EBA",short:"\u751F\u9EBA",buyHint:"\u8ABF\u5473\u306A\u3057\u300210g \u5358\u4F4D\u3067\u8CB7\u3046"}},{key:"pineapple",tone:"gold",source:"extra",sourceKey:"pineapple",label:"\u83E0\u841D 240g",short:"\u83E0\u841D",unit:"\u76D2",step:1,defaultTarget:2,max:8,buyHint:"\u8BAD\u7EC3\u524D\u540E\u76F4\u63A5\u5403",ja:{label:"\u30AB\u30C3\u30C8\u30D1\u30A4\u30F3 240g",short:"\u30D1\u30A4\u30F3",unit:"\u76D2",buyHint:"\u904B\u52D5\u524D\u5F8C\u306B\u305D\u306E\u307E\u307E\u98DF\u3079\u308B"}},{key:"banana",tone:"gold",source:"extra",sourceKey:"banana",label:"\u9999\u8549",short:"\u9999\u8549",unit:"\u6839",step:1,defaultTarget:4,max:14,buyHint:"\u5FEB\u901F\u8865\u78B3\u6C34",ja:{label:"\u30D0\u30CA\u30CA",short:"\u30D0\u30CA\u30CA",unit:"\u672C",buyHint:"\u3059\u3050\u8DB3\u305B\u308B\u70AD\u6C34\u5316\u7269"}},{key:"apple",tone:"gold",source:"extra",sourceKey:"apple",label:"\u82F9\u679C",short:"\u82F9\u679C",unit:"\u4E2A",step:1,defaultTarget:2,max:10,buyHint:"\u9876\u9965\u6C34\u679C",ja:{label:"\u308A\u3093\u3054",short:"\u308A\u3093\u3054",unit:"\u500B",buyHint:"\u304A\u8179\u306B\u305F\u307E\u308B\u679C\u7269"}},{key:"egg_fried",tone:"amber",source:"fat",sourceKey:"egg_fried",label:"\u9E21\u86CB",short:"\u9E21\u86CB",unit:"\u4E2A",step:1,defaultTarget:6,max:20,defaultEnabled:!1,buyHint:"\u8865\u8102\u80AA\u548C\u53E3\u611F",ja:{label:"\u5375",short:"\u5375",unit:"\u500B",buyHint:"\u8102\u8CEA\u3068\u6E80\u8DB3\u611F\u3092\u8DB3\u3059"}},{key:"sauce",tone:"amber",source:"fat",sourceKey:"sauce",label:"\u30DA\u30DA\u30ED\u30F3\u9171",short:"\u849C\u6CB9\u9171",unit:"\u5305",step:1,defaultTarget:3,max:12,defaultEnabled:!1,buyHint:"\u610F\u9762\u76F4\u63A5\u597D\u5403",ja:{label:"\u30DA\u30DA\u30ED\u30F3\u30BD\u30FC\u30B9",short:"\u30BD\u30FC\u30B9",unit:"\u888B",buyHint:"\u30D1\u30B9\u30BF\u304C\u3059\u3050\u304A\u3044\u3057\u3044"}},{key:"nuts",tone:"amber",source:"fat",sourceKey:"nuts",label:"\u7D20\u713C\u304D\u30CA\u30C3\u30C4",short:"\u575A\u679C",unit:"10g",step:1,defaultTarget:4,max:20,defaultEnabled:!1,buyHint:"\u5C11\u91CF\u8102\u80AA\u5907\u7528",ja:{label:"\u7D20\u713C\u304D\u30CA\u30C3\u30C4",short:"\u30CA\u30C3\u30C4",buyHint:"\u5C11\u91CF\u8102\u8CEA\u306E\u4FDD\u967A"}},{key:"cheese_bite",tone:"amber",source:"fat",sourceKey:"cheese_bite",label:"\u5C0F\u829D\u58EB",short:"\u829D\u58EB",unit:"\u4E2A",step:1,defaultTarget:6,max:24,defaultEnabled:!1,buyHint:"\u6BCF\u4E2A 43kcal\uFF0C\u5C11\u91CF\u8865\u8102\u80AA",ja:{label:"\u30D9\u30D3\u30FC\u30C1\u30FC\u30BA",short:"\u30C1\u30FC\u30BA",unit:"\u500B",buyHint:"1\u500B43kcal\u3002\u5C11\u91CF\u8102\u8CEA\u306B"}}],c0=[{id:"burger",label:"\u6C49\u5821 + \u85AF\u6761",kcal:980,ja:{label:"\u30D0\u30FC\u30AC\u30FC + \u30DD\u30C6\u30C8"}},{id:"ramen",label:"\u62C9\u9762 + \u996D",kcal:1200,ja:{label:"\u30E9\u30FC\u30E1\u30F3 + \u3054\u306F\u3093"}},{id:"sushi",label:"\u56DE\u8F6C\u5BFF\u53F8 12 \u76BF",kcal:1050,ja:{label:"\u56DE\u8EE2\u5BFF\u53F8 12\u76BF"}},{id:"pizza",label:"Pizza \u534A\u5F20",kcal:1150,ja:{label:"\u30D4\u30B6 \u534A\u5206"}},{id:"dessert",label:"\u751C\u54C1\u5976\u8336",kcal:620,ja:{label:"\u30C7\u30B6\u30FC\u30C8 + \u30DF\u30EB\u30AF\u30C6\u30A3\u30FC"}},{id:"katsu",label:"\u70B8\u732A\u6392\u5496\u55B1",kcal:1450,ja:{label:"\u30AB\u30C4\u30AB\u30EC\u30FC"}}];var Ki=_M,SA={red:0,green:1,gold:2,amber:3};function MA(n){return Ma({p:n*.31/4,c:n*.49/4,f:n*.2/9,kcal:n})}function u0(n,e){let t=ba[n];return{...t,f:n==="beef"?e*.8/100:t.f||0}}function vM(n,e,t,i){return t.length>0||e.some(s=>{let a=u0(s,i);return["beef","duck","kfc"].includes(s)||(a.f||0)>=6})?n:{...n,c:fe((n.c||0)+(n.f||0)*9/4,1),f:0}}function xM({proteinKeys:n,fatKeys:e,carbPlanKey:t,carbPlan:i,targets:r,fixedMacro:s=Ki,beefFat:a}){let o=t??i,l=n&&n.length?n:["beef"],c=Math.max(0,(r.p||0)-(s.p||0)),u=l.map(b=>{let E=u0(b,a),y=c/Math.max(1,l.length)/Math.max(1,E.p),w=qt(di(y,E.step),0,E.max);return{key:b,name:E.label,short:E.short,qty:w,unit:E.unit,step:E.step,max:E.max,unitMacro:E,macro:an(E,w),tone:"red"}}),f=u.reduce((b,E)=>mn(b,E.macro),Ki),h=e&&e.length?e:[],p=Math.max(0,(r.f||0)-(s.f||0)-f.f),_=h.map(b=>{let E=Rs[b],y=p/Math.max(1,h.length)/Math.max(1,E.f),w=qt(di(y,E.step),0,E.max);return{key:`fat-${b}`,name:E.label,short:E.short,qty:w,unit:E.unit,step:E.step,max:E.max,unitMacro:E,macro:an(E,w),tone:"amber"}}),v=_.reduce((b,E)=>mn(b,E.macro),Ki),g=mn(s,f,v),d=Math.max(0,(r.kcal||0)-g.kcal),m=Cs[o]||Cs.pasta,x=m.max??(m.unit==="\u5305"?8:420),S=qt(di(d/m.kcalUnit,m.step),0,x),T={key:`carb-${o}`,name:m.name,short:m.short,qty:S,unit:m.unit,step:m.step,max:x,unitMacro:m.perUnit,macro:an(m.perUnit,S),tone:"green"};return[...u,..._,T]}function yM(n,e=[]){return[...n.filter(t=>t.tone==="red"),...n.filter(t=>t.tone==="amber"),...e,...n.filter(t=>t.tone==="green"),...n.filter(t=>!["red","amber","green"].includes(t.tone))]}function SM(n,e={}){return n.map(t=>{let i=t.baseQty??t.qty,r=e[t.key]||0,s=qt(i+r,0,t.max??1/0),a=fe(s-i,t.step<1?1:2);return{...t,baseQty:i,qty:s,adjustment:a,macro:an(t.unitMacro,s)}})}function bA(n,e){return n&&(e==="ja"&&n.ja?{...n,...n.ja}:n)}function TA(n,e){return n.source==="protein"?u0(n.sourceKey,e):n.source==="carb"?Cs[n.sourceKey].perUnit:n.source==="extra"?$n[n.sourceKey]:n.source==="fat"?Rs[n.sourceKey]:Ki}function wA(n,e){return wa.map(t=>({...e?bA(t,e):t,unitMacro:TA(t,n)}))}function MM(n={}){let{targetProfile:e,tdee:t=cf,lunchMode:i="planned",lunchKcal:r=800,tally:s={},mealSplitPct:a=40,lunchCarbPlan:o="fresh_noodle",lunchProteinKeys:l=["chicken"],lunchFatKeys:c=[],carbPlan:u="pasta",proteinKeys:f=["beef"],fatKeys:h=[],extraCarbs:p={},beefFat:_=13,pre:v={},drinkKey:g="none",drinkMl:d=0,snack:m={name:"\u624B\u52A8\u52A0\u9910",p:0,c:0,f:0,kcal:0},saltG:x=6.5,foodK:S=2e3,shopPlan:T,shopDays:b=7,lunchAdjustments:E={},dinnerAdjustments:y={},locale:w}=n,R={...Io,...e||{}},P=fM(R),D=Object.entries(s).reduce((J,[ne,q])=>mn(J,an(uf[ne],q)),Ki),V=Object.entries(v).reduce((J,[ne,q])=>mn(J,an(hf[ne],q)),Ki),W=Ta[g]||Ta.none,L=Ma(an(W,d/200)),N=Ma(m),O=mn(V,L,N),$=o0(P,O,a/100),Q=Object.entries(p).filter(([J,ne])=>$n[J]&&ne>0),re=Q.reduce((J,[ne,q])=>mn(J,an($n[ne],q)),Ki),pe=Q.map(([J,ne])=>({key:`extra-${J}`,name:$n[J].label,short:$n[J].label,qty:ne,unit:$n[J].unit,step:$n[J].step,max:$n[J].max,unitMacro:$n[J],macro:an($n[J],ne),tone:"gold"})),ve=vM($.lunch,l,c,_),He=xM({proteinKeys:l,fatKeys:c,carbPlanKey:o,targets:ve,beefFat:_}),Be=l0(He,Ki,ve),Pe=i==="planned"?SM(yM(Be),E):[],Z=Pe.reduce((J,ne)=>mn(J,ne.macro),Ki),he=i==="tally"&&D.kcal>0?D:MA(r),se=i==="planned"?Z:he,Re=mn(se,O),Fe=i==="planned"?o0(P,Re,.5).remaining:P,Ne=i==="planned"?{...$,dinner:Fe}:$,ct=i==="planned"?vM(Fe,f,h,_):Fe,Ye=i==="planned"?re:mn(Re,re),rt=xM({proteinKeys:f,fatKeys:h,carbPlanKey:u,targets:ct,fixedMacro:Ye,beefFat:_}),ut=l0(rt,Ye,ct),Xe=SM(yM(ut,pe),y),Ft=Xe.reduce((J,ne)=>mn(J,ne.macro),Ki),ht=mn(Re,Ft),Un=fe(t-ht.kcal),F=(Ta[g]?.k||0)*(d/200),Ut=(Ta[g]?.na||0)*(d/200),$e=x*393+Ut,at=S+F,ue=wA(_,w),Tt=T??mc(wa),C=mM(ue,Tt,b),M=C.reduce((J,ne)=>mn(J,ne.macro),Ki),z=gM(C,SA),K=dM(ht,P,R.bodyWeightKg),ee=K.carbDay;return{targets:P,mealTargets:Ne,tallyMacro:D,preMacro:V,drinkMacro:L,snackMacro:N,fixedIntake:O,extraMacro:re,extraItems:pe,lunchItems:Pe,plannedLunch:Z,manualLunch:he,lunch:se,beforeDinner:Re,dinnerTarget:Fe,dinnerSolveTarget:ct,dinnerItems:Xe,dinner:Ft,total:ht,deficit:Un,macroReport:K,carbDay:ee,shopping:C,shoppingMacro:M,runPlan:z,potassium:at,sodium:$e,drinkK:F,drinkNa:Ut,pre:V,drink:L,snack:N}}var h0={zh:{appSub:"\u4ECA\u5929\u600E\u4E48\u5403",navPlan:"\u4ECA\u65E5",navDetail:"\u660E\u7EC6",navShop:"\u91C7\u8D2D",navCheat:"\u653E\u677E",language:"\u8BED\u8A00",zh:"\u4E2D\u6587",ja:"\u65E5\u672C\u8A9E",heroTitle:"\u4ECA\u65E5\u9910\u76D8",heroAccent:"\u8F7B\u8F7B\u677E\u677E\u5B9A\u4E0B\u6765",heroCopy:"\u5148\u628A\u4ECA\u5929\u5DF2\u7ECF\u5403\u8FC7\u7684\u4E1C\u897F\u653E\u8FDB\u6765\uFF0C\u665A\u9910\u3001\u8D64\u5B57\u548C\u91C7\u8D2D\u90FD\u4F1A\u81EA\u52A8\u8DDF\u7740\u7B97\u3002\u754C\u9762\u53EA\u4FDD\u7559\u771F\u6B63\u8981\u64CD\u4F5C\u7684\u90E8\u5206\u3002",profile:"\u76EE\u6807",fuel:"\u8BAD\u7EC3\u524D",snack:"\u989D\u5916",copy:"\u590D\u5236",copying:"\u590D\u5236\u4E2D",copied:"\u5DF2\u590D\u5236",retry:"\u91CD\u8BD5",record:"\u8BB0\u5F55",intake:"\u5DF2\u5403",dinner:"\u665A\u9910",rhythm:"\u8282\u594F",kcal:"\u70ED\u91CF",deficit:"\u8D64\u5B57",todayTotal:"\u4ECA\u65E5\u5408\u8BA1",dinnerKcal:"\u665A\u9910\u70ED\u91CF",noEat:"\u4E0D\u5403",noDrink:"\u4E0D\u559D",off:"OFF",on:"ON",planIntakeEyebrow:"01 \xB7 \u5148\u8BB0\u4ECA\u5929",planIntakeTitle:"\u4ECA\u5929\u5403\u5230\u54EA\u4E86",intakeHubTitle:"\u4ECA\u65E5\u5DF2\u5403",intakeHubSub:"\u5348\u9910\u3001\u8BAD\u7EC3\u524D\u3001\u989D\u5916\u5403\u7684\u90FD\u5728\u4E00\u4E2A\u5730\u65B9\u6539",intakeDrawerTitle:"\u4ECA\u65E5\u5DF2\u5403",intakeDrawerSub:"\u6539\u5B8C\u8FD9\u91CC\uFF0C\u665A\u9910\u4F1A\u81EA\u52A8\u91CD\u65B0\u6536\u53E3",beforeDinnerTotal:"\u665A\u9910\u524D\u5408\u8BA1",editIntake:"\u8C03\u6574\u5DF2\u5403",quickKcal:"\u76F4\u63A5 kcal",tallyMode:"\u70B9\u9009\u8BB0\u8D26",plannedMode:"\u81EA\u52A8\u89C4\u5212",mealSplit:"\u5348\u665A\u6BD4\u4F8B",lunchPlannerTitle:"\u5348\u9910\u60F3\u5403\u4EC0\u4E48",dinnerPlannerTitle:"\u665A\u9910\u60F3\u5403\u4EC0\u4E48",generatedLunch:"\u751F\u6210\u5348\u9910",generatedDinner:"\u751F\u6210\u665A\u9910",lunchShare:"\u5348\u9910\u6BD4\u4F8B",lunchKcal:"\u5348\u9910\u70ED\u91CF",commonPicks:"\u5E38\u7528\u6570\u5B57",planChoiceEyebrow:"02 \xB7 \u665A\u9910\u65B9\u5411",planChoiceTitle:"\u4ECA\u665A\u60F3\u5403\u4EC0\u4E48",advanced:"\u7EC6\u8282\u8BBE\u7F6E",advancedSub:"\u86CB\u767D\u3001\u8102\u80AA\u3001\u6C34\u679C\u3001\u725B\u8089\u8102\u80AA\u548C\u76EE\u6807\u516C\u5F0F",dinnerProtein:"\u665A\u9910\u86CB\u767D",fatSource:"\u8102\u80AA\u6765\u6E90",extras:"\u6C34\u679C / \u9178\u5976",beefFat:"\u725B\u8089\u8102\u80AA",targetFormula:"\u76EE\u6807\u516C\u5F0F",resetDefault:"\u91CD\u7F6E\u9ED8\u8BA4",dinnerAnswerEyebrow:"03 \xB7 \u81EA\u52A8\u7B54\u6848",dinnerAnswerTitle:"\u4ECA\u665A\u5C31\u8FD9\u6837\u5403",resetTune:"\u91CD\u7F6E\u5FAE\u8C03",noDinner:"\u4ECA\u5929\u665A\u9910\u5DF2\u7ECF\u5F88\u8F7B\uFF0C\u5148\u68C0\u67E5\u5348\u9910\u6216\u76EE\u6807",rhythmEyebrow:"04 \xB7 \u4ECA\u65E5\u7ED3\u6784",rhythmTitle:"\u770B\u4E00\u773C\u5C31\u591F",protein:"\u86CB\u767D",carb:"\u78B3\u6C34",fat:"\u8102\u80AA",calorie:"\u70ED\u91CF",carbDay:"\u4ECA\u5929\u78B3\u6C34\u65E5",lowCarb:"\u4F4E\u78B3",mediumCarb:"\u4E2D\u78B3",highCarb:"\u9AD8\u78B3",ledger:"\u4ECA\u65E5\u8D26\u672C",ledgerTitle:"\u5403\u8FDB\u53BB\u7684\u4E1C\u897F",targetByWeight:"\u6309\u4F53\u91CD\u81EA\u52A8\u5206\u914D",structureTitle:"\u5360\u6BD4\u548C\u4F53\u91CD\u500D\u6570",beforeTraining:"\u8BAD\u7EC3\u524D",beforeTrainingTitle:"\u57AB\u4E00\u53E3\u4E5F\u7B97\u8FDB\u53BB",electrolyte:"\u7535\u89E3\u8D28",electrolyteTitle:"\u94BE\u94A0\u522B\u592A\u504F",balanced:"\u5E73\u8861",lowPotassium:"\u94BE\u504F\u4F4E",shopHero:"\u91C7\u8D2D\u6E05\u5355",shopCopy:"\u4E0D\u7528\u81EA\u5DF1\u586B\u3002\u4E0B\u9762\u5DF2\u7ECF\u6309\u8FDB\u5E97\u987A\u5E8F\u5217\u597D\u8FD9\u8F6E\u76F4\u63A5\u4E70\u4EC0\u4E48\uFF0C\u5E93\u5B58\u53EA\u6709\u9700\u8981\u5FAE\u8C03\u65F6\u518D\u6253\u5F00\u3002",cycle:"\u5468\u671F",products:"\u5546\u54C1",picked:"\u5DF2\u62FF",clearStock:"\u6E05\u7A7A\u5DF2\u6709",directPlan:"\u76F4\u63A5\u65B9\u6848",directPlanTitle:"\u7167\u5355\u4E70\u8FD9\u4E9B",nothingToBuy:"\u8FD9\u8F6E\u4E0D\u7528\u4E70",nothingToBuySub:"\u5DF2\u9009\u54C1\u7C7B\u7684\u5BB6\u91CC\u5E93\u5B58\u8986\u76D6\u4E86\u8FD9\u4E2A\u5907\u8D27\u5468\u671F\u3002\u8981\u5F3A\u5236\u751F\u6210\u6E05\u5355\u53EF\u4EE5\u70B9\u201C\u6E05\u7A7A\u5DF2\u6709\u201D\u3002",stockTune:"\u5E93\u5B58\u5FAE\u8C03",stockTuneSub:"\u5E73\u65F6\u4E0D\u7528\u7BA1\uFF1B\u53EA\u6709\u5BB6\u91CC\u8FD8\u6709\u4E1C\u897F\u65F6\u518D\u6539\u76EE\u6807\u548C\u5DF2\u6709",weeklyTarget:"\u5468\u76EE\u6807",stock:"\u5BB6\u91CC\u5DF2\u6709",skip:"\u8DF3\u8FC7",add:"\u52A0\u5165",enough:"\u5DF2\u591F",buy:"\u8865",cheatTitle:"\u60F3\u5403\u4E5F\u80FD\u7B97",cheatResult:"\u5403\u5B8C\u5927\u6982\u8FD9\u6837",cheatKcal:"\u653E\u677E\u70ED\u91CF",clear:"\u6E05\u7A7A",fuelSwitch:"\u8865\u7ED9\u5F00\u5173",fuelSub:"\u8BAD\u7EC3\u524D\u5403\u4EC0\u4E48\u559D\u4EC0\u4E48",currentState:"\u5F53\u524D\u72B6\u6001",fueled:"\u5DF2\u8865\u7ED9",noFuel:"\u4E0D\u8865\u7ED9",applyNoFuel:"\u6E05\u7A7A\u8BAD\u7EC3\u524D",eatWhat:"\u5403\u4EC0\u4E48",drinkWhat:"\u559D\u4EC0\u4E48",manualCopy:"\u624B\u52A8\u590D\u5236",manualCopySub:"\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u81EA\u52A8\u590D\u5236\uFF0C\u6587\u672C\u5DF2\u7ECF\u9009\u4E2D\u3002\u624B\u673A\u4E0A\u76F4\u63A5\u957F\u6309\u590D\u5236\u4E5F\u53EF\u4EE5\u3002",copyAgain:"\u518D\u590D\u5236\u4E00\u6B21",snackTitle:"\u989D\u5916\u8BB0\u5F55",snackSub:"\u81EA\u5DF1\u586B\u4E00\u4E0B\u4E5F\u884C",snackName:"\u540D\u79F0",noSnack:"\u6CA1\u6709\u989D\u5916",manualSnack:"\u4E34\u65F6\u8BB0\u5F55",dinnerWillClose:"\u665A\u9910\u4F1A\u8DDF\u7740\u6536\u53E3",clearSnack:"\u6E05\u9664\u8BB0\u5F55",bodyWeight:"\u4F53\u91CD",proteinRatio:"\u86CB\u767D\u500D\u7387",fatMin:"\u8102\u80AA\u6700\u4F4E",tdee:"TDEE",proteinTarget:"\u86CB\u767D\u76EE\u6807",fatTarget:"\u8102\u80AA\u6700\u4F4E",carbRemainder:"\u5269\u4F59\u78B3\u6C34",carbRemainderSub:"\u70ED\u91CF\u6263\u5B8C P/F \u540E\u5168\u7ED9\u78B3\u6C34",proteinCalories:"\u86CB\u767D\u70ED\u91CF",carbCalories:"\u78B3\u6C34\u70ED\u91CF",fatCalories:"\u8102\u80AA\u70ED\u91CF",carbJudge:"\u4F4E\u78B3\u5224\u65AD",lunch:"\u5348\u9910",preTraining:"\u8BAD\u7EC3\u524D",drinkElectrolyte:"\u996E\u6599/\u7535\u89E3\u8D28",snackMeal:"\u989D\u5916\u8BB0\u5F55",sauce:"\u996E\u6599",salt:"\u76D0",foodK:"\u98DF\u7269\u94BE",actual:"\u5B9E\u9645",target:"\u76EE\u6807",adjust:"\u8C03\u6574"},ja:{appSub:"\u4ECA\u65E5\u306E\u3054\u306F\u3093",navPlan:"\u4ECA\u65E5",navDetail:"\u8A73\u7D30",navShop:"\u8CB7\u3044\u7269",navCheat:"\u3054\u307B\u3046\u3073",language:"\u8A00\u8A9E",zh:"\u4E2D\u6587",ja:"\u65E5\u672C\u8A9E",heroTitle:"\u4ECA\u65E5\u306E\u3054\u306F\u3093",heroAccent:"\u3075\u3093\u308F\u308A\u6C7A\u3081\u308B",heroCopy:"\u98DF\u3079\u305F\u3082\u306E\u3092\u5165\u308C\u308B\u3060\u3051\u3002\u5915\u98DF\u3001\u88DC\u7D66\u3001\u8D64\u5B57\u3001\u8CB7\u3044\u7269\u30EA\u30B9\u30C8\u307E\u3067\u4E00\u679A\u306E\u30AB\u30FC\u30C9\u3067\u6574\u3048\u307E\u3059\u3002",profile:"\u76EE\u6A19",fuel:"\u904B\u52D5\u524D",snack:"\u8FFD\u52A0",copy:"\u30B3\u30D4\u30FC",copying:"\u30B3\u30D4\u30FC\u4E2D",copied:"\u30B3\u30D4\u30FC\u6E08\u307F",retry:"\u518D\u8A66\u884C",record:"\u8A18\u9332",intake:"\u98DF\u3079\u305F\u3082\u306E",dinner:"\u5915\u98DF",rhythm:"\u30D0\u30E9\u30F3\u30B9",kcal:"\u30AB\u30ED\u30EA\u30FC",deficit:"\u8D64\u5B57",todayTotal:"\u4ECA\u65E5\u306E\u5408\u8A08",dinnerKcal:"\u5915\u98DF\u30AB\u30ED\u30EA\u30FC",noEat:"\u98DF\u3079\u306A\u3044",noDrink:"\u98F2\u307E\u306A\u3044",off:"OFF",on:"ON",planIntakeEyebrow:"01 \xB7 \u307E\u305A\u8A18\u9332",planIntakeTitle:"\u98DF\u3079\u305F\u3082\u306E",intakeHubTitle:"\u4ECA\u65E5\u98DF\u3079\u305F\u3082\u306E",intakeHubSub:"\u663C\u98DF\u3001\u904B\u52D5\u524D\u3001\u8FFD\u52A0\u5206\u3092\u3053\u3053\u3067\u307E\u3068\u3081\u3066\u8ABF\u6574",intakeDrawerTitle:"\u4ECA\u65E5\u98DF\u3079\u305F\u3082\u306E",intakeDrawerSub:"\u3053\u3053\u3092\u5909\u3048\u308B\u3068\u5915\u98DF\u304C\u81EA\u52D5\u3067\u8ABF\u6574\u3055\u308C\u307E\u3059",beforeDinnerTotal:"\u5915\u98DF\u524D\u306E\u5408\u8A08",editIntake:"\u98DF\u3079\u305F\u3082\u306E\u8ABF\u6574",quickKcal:"kcal \u3060\u3051",tallyMode:"\u98DF\u6750\u3067\u8A18\u9332",plannedMode:"\u81EA\u52D5\u30D7\u30E9\u30F3",mealSplit:"\u663C\u591C\u6BD4\u7387",lunchPlannerTitle:"\u663C\u98DF\u3067\u98DF\u3079\u305F\u3044\u3082\u306E",dinnerPlannerTitle:"\u5915\u98DF\u3067\u98DF\u3079\u305F\u3044\u3082\u306E",generatedLunch:"\u663C\u98DF\u30D7\u30E9\u30F3",generatedDinner:"\u5915\u98DF\u30D7\u30E9\u30F3",lunchShare:"\u663C\u98DF\u6BD4\u7387",lunchKcal:"\u663C\u98DF\u30AB\u30ED\u30EA\u30FC",commonPicks:"\u3088\u304F\u4F7F\u3046\u6570\u5B57",planChoiceEyebrow:"02 \xB7 \u5915\u98DF\u306E\u6C17\u5206",planChoiceTitle:"\u4ECA\u591C\u306A\u306B\u98DF\u3079\u308B",advanced:"\u3053\u307E\u304B\u3044\u8A2D\u5B9A",advancedSub:"\u305F\u3093\u3071\u304F\u8CEA\u3001\u8102\u8CEA\u3001\u679C\u7269\u3001\u725B\u8102\u3001\u76EE\u6A19\u5F0F",dinnerProtein:"\u5915\u98DF\u305F\u3093\u3071\u304F",fatSource:"\u8102\u8CEA\u30BD\u30FC\u30B9",extras:"\u679C\u7269 / \u30E8\u30FC\u30B0\u30EB\u30C8",beefFat:"\u725B\u8089\u8102\u8CEA",targetFormula:"\u76EE\u6A19\u5F0F",resetDefault:"\u521D\u671F\u5024\u306B\u623B\u3059",dinnerAnswerEyebrow:"03 \xB7 \u81EA\u52D5\u30D7\u30E9\u30F3",dinnerAnswerTitle:"\u5915\u98DF\u306F\u3053\u308C\u3067\u3044\u304F",resetTune:"\u5FAE\u8ABF\u6574\u3092\u623B\u3059",noDinner:"\u5915\u98DF\u304C\u304B\u306A\u308A\u8EFD\u3044\u3067\u3059\u3002\u663C\u98DF\u304B\u76EE\u6A19\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",rhythmEyebrow:"04 \xB7 \u4ECA\u65E5\u306E\u69CB\u6210",rhythmTitle:"\u3053\u3053\u3060\u3051\u898B\u308C\u3070OK",protein:"\u305F\u3093\u3071\u304F",carb:"\u70AD\u6C34\u5316\u7269",fat:"\u8102\u8CEA",calorie:"\u30AB\u30ED\u30EA\u30FC",carbDay:"\u4ECA\u65E5\u306E\u70AD\u6C34\u5316\u7269",lowCarb:"\u4F4E\u70AD\u6C34",mediumCarb:"\u4E2D\u70AD\u6C34",highCarb:"\u9AD8\u70AD\u6C34",ledger:"\u4ECA\u65E5\u306E\u5E33\u7C3F",ledgerTitle:"\u98DF\u3079\u305F\u3082\u306E\u4E00\u89A7",targetByWeight:"\u4F53\u91CD\u304B\u3089\u81EA\u52D5\u914D\u5206",structureTitle:"\u5272\u5408\u3068\u4F53\u91CD\u500D\u7387",beforeTraining:"\u904B\u52D5\u524D",beforeTrainingTitle:"\u5C11\u3057\u98DF\u3079\u3066\u3082\u8A08\u7B97",electrolyte:"\u96FB\u89E3\u8CEA",electrolyteTitle:"\u30AB\u30EA\u30A6\u30E0\u3068\u30CA\u30C8\u30EA\u30A6\u30E0",balanced:"\u30D0\u30E9\u30F3\u30B9",lowPotassium:"K \u5C11\u306A\u3081",shopHero:"\u8CB7\u3044\u7269\u30EA\u30B9\u30C8",shopCopy:"\u5165\u529B\u3057\u306A\u304F\u3066OK\u3002\u5E97\u5185\u3067\u53D6\u308B\u9806\u756A\u306B\u3001\u4ECA\u56DE\u8CB7\u3046\u3082\u306E\u3092\u305D\u306E\u307E\u307E\u51FA\u3057\u307E\u3059\u3002\u5E93\u5B58\u306F\u5FC5\u8981\u306A\u3068\u304D\u3060\u3051\u8ABF\u6574\u3002",cycle:"\u5468\u671F",products:"\u54C1\u76EE",picked:"\u53D6\u3063\u305F",clearStock:"\u5728\u5EAB\u30920\u306B\u3059\u308B",directPlan:"\u8CB7\u3046\u3082\u306E",directPlanTitle:"\u3053\u306E\u307E\u307E\u8CB7\u3046",nothingToBuy:"\u4ECA\u56DE\u306F\u8CB7\u308F\u306A\u304F\u3066OK",nothingToBuySub:"\u9078\u629E\u4E2D\u306E\u54C1\u76EE\u306F\u5728\u5EAB\u3067\u8DB3\u308A\u3066\u3044\u307E\u3059\u3002\u30EA\u30B9\u30C8\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u306F\u5728\u5EAB\u30920\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",stockTune:"\u5728\u5EAB\u8ABF\u6574",stockTuneSub:"\u666E\u6BB5\u306F\u89E6\u3089\u306A\u304F\u3066OK\u3002\u5BB6\u306B\u6B8B\u3063\u3066\u3044\u308B\u3082\u306E\u304C\u3042\u308B\u6642\u3060\u3051\u3002",weeklyTarget:"\u9031\u76EE\u6A19",stock:"\u5BB6\u306E\u5728\u5EAB",skip:"\u5916\u3059",add:"\u8FFD\u52A0",enough:"\u8DB3\u308A\u308B",buy:"\u8CB7\u3046",cheatTitle:"\u98DF\u3079\u305F\u3044\u65E5\u3082\u8A08\u7B97",cheatResult:"\u98DF\u3079\u305F\u5F8C\u306E\u898B\u8FBC\u307F",cheatKcal:"\u3054\u307B\u3046\u3073 kcal",clear:"\u30AF\u30EA\u30A2",fuelSwitch:"\u88DC\u7D66\u30B9\u30A4\u30C3\u30C1",fuelSub:"\u904B\u52D5\u524D\u306B\u98DF\u3079\u308B/\u98F2\u3080\u3082\u306E",currentState:"\u73FE\u5728",fueled:"\u88DC\u7D66\u3042\u308A",noFuel:"\u88DC\u7D66\u306A\u3057",applyNoFuel:"\u904B\u52D5\u524D\u3092\u30AF\u30EA\u30A2",eatWhat:"\u98DF\u3079\u308B\u3082\u306E",drinkWhat:"\u98F2\u3080\u3082\u306E",manualCopy:"\u624B\u52D5\u30B3\u30D4\u30FC",manualCopySub:"\u30D6\u30E9\u30A6\u30B6\u304C\u81EA\u52D5\u30B3\u30D4\u30FC\u3092\u6B62\u3081\u307E\u3057\u305F\u3002\u30C6\u30AD\u30B9\u30C8\u306F\u9078\u629E\u6E08\u307F\u306A\u306E\u3067\u3001\u30B9\u30DE\u30DB\u3067\u306F\u9577\u62BC\u3057\u3067\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3059\u3002",copyAgain:"\u3082\u3046\u4E00\u5EA6\u30B3\u30D4\u30FC",snackTitle:"\u8FFD\u52A0\u5206\u3092\u8A18\u9332",snackSub:"\u3056\u3063\u304F\u308A\u5165\u529B\u3067OK",snackName:"\u540D\u524D",noSnack:"\u8FFD\u52A0\u306A\u3057",manualSnack:"\u624B\u5165\u529B\u306E\u8FFD\u52A0\u5206",dinnerWillClose:"\u5915\u98DF\u304C\u81EA\u52D5\u3067\u8ABF\u6574\u3055\u308C\u307E\u3059",clearSnack:"\u8A18\u9332\u3092\u6D88\u3059",bodyWeight:"\u4F53\u91CD",proteinRatio:"\u305F\u3093\u3071\u304F\u500D\u7387",fatMin:"\u8102\u8CEA\u6700\u4F4E",tdee:"TDEE",proteinTarget:"\u305F\u3093\u3071\u304F\u76EE\u6A19",fatTarget:"\u8102\u8CEA\u6700\u4F4E",carbRemainder:"\u6B8B\u308A\u3092\u70AD\u6C34\u5316\u7269\u3078",carbRemainderSub:"P/F \u3092\u5F15\u3044\u305F\u6B8B\u308A\u306E kcal \u3092\u70AD\u6C34\u5316\u7269\u306B\u914D\u5206",proteinCalories:"\u305F\u3093\u3071\u304F kcal",carbCalories:"\u70AD\u6C34\u5316\u7269 kcal",fatCalories:"\u8102\u8CEA kcal",carbJudge:"\u4F4E\u70AD\u6C34\u5224\u5B9A",lunch:"\u663C\u98DF",preTraining:"\u904B\u52D5\u524D",drinkElectrolyte:"\u98F2\u307F\u7269/\u96FB\u89E3\u8CEA",snackMeal:"\u8FFD\u52A0\u5206",sauce:"\u98F2\u307F\u7269",salt:"\u5869",foodK:"\u98DF\u4E8BK",actual:"\u5B9F\u969B",target:"\u76EE\u6A19",adjust:"\u8ABF\u6574"}};function bM(n){let e=h0[n]||h0.zh;return t=>e[t]??h0.zh[t]??t}function jn(n,e){return e==="ja"&&n?.ja?{...n,...n.ja}:n}var Ea=null,vc=null,gc=!1,f0=null,No=null,_c=0;function ff(){if(!Ea){let n=window.AudioContext||window.webkitAudioContext;if(!n)return null;Ea=new n,vc=Ea.createGain(),vc.gain.value=.5,vc.connect(Ea.destination)}return Ea.state==="suspended"&&Ea.resume(),Ea}function Ni(n,e=.08,t="square",i=.18,r=null){let s=ff();if(!s)return;let a=s.createOscillator(),o=s.createGain();a.type=t,a.frequency.setValueAtTime(n,s.currentTime),r&&a.frequency.exponentialRampToValueAtTime(r,s.currentTime+e),o.gain.setValueAtTime(1e-4,s.currentTime),o.gain.exponentialRampToValueAtTime(i,s.currentTime+.008),o.gain.exponentialRampToValueAtTime(1e-4,s.currentTime+e),a.connect(o),o.connect(vc),a.start(),a.stop(s.currentTime+e+.02)}function Jt(n){switch(n){case"tap":Ni(520,.05,"square",.12);break;case"select":Ni(660,.06,"square",.15),Ni(880,.05,"square",.1);break;case"open":Ni(392,.1,"triangle",.16,784);break;case"close":Ni(560,.1,"triangle",.14,300);break;case"confirm":Ni(523,.07,"square",.16),setTimeout(()=>Ni(784,.1,"square",.16),70);break;case"plus":Ni(700,.045,"square",.12);break;case"minus":Ni(430,.045,"square",.12);break;case"coin":Ni(988,.06,"square",.14),setTimeout(()=>Ni(1319,.09,"square",.14),55);break;default:Ni(500,.05,"square",.1)}}var TM=[523,0,587,659,0,784,659,587,523,0,440,523,0,587,523,0],wM=[131,131,165,165,175,175,147,147];function EM(){let n=ff();if(!n||!gc)return;let e=n.currentTime,t=TM[_c%TM.length];if(t){let i=n.createOscillator(),r=n.createGain();i.type="triangle",i.frequency.value=t,r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.06,e+.02),r.gain.exponentialRampToValueAtTime(1e-4,e+.26),i.connect(r),r.connect(No),i.start(),i.stop(e+.3)}if(_c%2===0){let i=wM[_c/2%wM.length],r=n.createOscillator(),s=n.createGain();r.type="sine",r.frequency.value=i,s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(.05,e+.03),s.gain.exponentialRampToValueAtTime(1e-4,e+.5),r.connect(s),s.connect(No),r.start(),r.stop(e+.55)}_c++}function AM(){let n=ff();return n?(gc=!gc,gc?(No||(No=n.createGain(),No.gain.value=.7,No.connect(vc)),_c=0,EM(),f0=setInterval(EM,300)):(clearInterval(f0),f0=null),gc):!1}function CM(){ff()}var pf=ai(aa(),1);var Ae=ai(Br(),1),NA="./",mf=n=>`${NA}assets/${n}`,d0={beef:"beef",chicken:"chicken_cooked",duck:"duck",kfc:"kfc",pasta:"pasta",soba:"soba",nissin:"cupnoodle",fresh_noodle:"freshnoodle",banana:"banana",rice_dry:"rice",pho:"ricenoodle",bifun:"driedricenoodle",egg_fried:"egg",sauce:"garlicoil",olive:"oliveoil",nuts:"nuts",cheese_bite:"cheese",avocado:"avocado",apple:"apple",kiwi:"kiwi",pineapple:"pineapple",yogurt:"yogurt",egg:"egg",onigiri:"onigiri",rice:"rice",gold_bread:"bread",tomato:"tomatojuice",yasai:"vegjuice"};function Do({k:n,size:e=46,className:t="",style:i}){if(n==="none"||!n)return(0,Ae.jsx)("span",{style:{width:e,height:e,display:"inline-block",textAlign:"center",lineHeight:`${e}px`,fontSize:e*.5},children:"\u2715"});let r=d0[n]||n;return(0,Ae.jsx)("img",{className:`sprite ${t}`,src:mf(`food/${r}.png`),alt:"",width:e,height:e,style:{width:e,height:e,objectFit:"contain",...i},onError:s=>{s.currentTarget.style.visibility="hidden"}})}function zr({variant:n="",sound:e="tap",onClick:t,className:i="",children:r,...s}){return(0,Ae.jsx)("button",{className:`pbtn ${n} ${i}`,onClick:a=>{Jt(e),t&&t(a)},...s,children:r})}function Lo({on:n,onClick:e,children:t}){return(0,Ae.jsx)("button",{className:`chip ${n?"on":""}`,onClick:()=>{Jt("tap"),e&&e()},children:t})}function xc({value:n,onChange:e,step:t=1,min:i=0,max:r=1/0,unit:s=""}){let a=()=>{let l=Math.max(i,fe((n||0)-t,t<1?2:0));l!==n&&(Jt("minus"),e(l))},o=()=>{let l=Math.min(r,fe((n||0)+t,t<1?2:0));l!==n&&(Jt("plus"),e(l))};return(0,Ae.jsxs)("div",{className:"stepper",children:[(0,Ae.jsx)("button",{className:"pbtn sm",onClick:a,"aria-label":"-",children:"\u2013"}),(0,Ae.jsxs)("div",{className:"val num",children:[fe(n||0,t<1?1:0),s&&(0,Ae.jsx)("span",{style:{fontSize:10,opacity:.7},children:s})]}),(0,Ae.jsx)("button",{className:"pbtn sm",onClick:o,"aria-label":"+",children:"+"})]})}function yc({value:n,onChange:e,min:t=0,max:i=99999,suffix:r="",width:s=90,step:a}){let[o,l]=pf.default.useState(n==null?"":String(n)),c=pf.default.useRef(!1),u=a&&a<1?2:0;return pf.default.useEffect(()=>{c.current||l(n==null||n===""?"":String(n))},[n]),(0,Ae.jsxs)("div",{className:"row",style:{gap:4},children:[(0,Ae.jsx)("input",{className:"num num-field",type:"text",inputMode:u?"decimal":"numeric",value:o,onFocus:()=>{c.current=!0},onChange:h=>{let p=h.target.value;if(!/^-?\d*\.?\d*$/.test(p)||(l(p),p===""||p==="-"||p==="."))return;let _=Number(p);!Number.isNaN(_)&&_>=t&&_<=i&&e(_)},onBlur:()=>{if(c.current=!1,o===""||o==="-"||o==="."){e(t),l(String(t));return}let h=Number(o);if(Number.isNaN(h)){l(n==null?"":String(n));return}h=Math.max(t,Math.min(i,fe(h,u))),e(h),l(String(h))},"aria-label":"number",style:{width:s}}),r&&(0,Ae.jsx)("span",{className:"muted",children:r})]})}function Sc({label:n,value:e,target:t,color:i="var(--tone-green)",unit:r="g"}){let s=Math.min(135,t>0?e/t*100:0),a=r?Math.max(6,t*.08):Math.max(80,t*.05),o=Math.abs(e-t)<=a;return(0,Ae.jsxs)("div",{className:"stack",style:{gap:4},children:[(0,Ae.jsxs)("div",{className:"row",style:{justifyContent:"space-between"},children:[(0,Ae.jsx)("span",{style:{fontSize:13},children:n}),(0,Ae.jsxs)("span",{className:"num",style:{fontSize:13},children:[(0,Ae.jsx)("b",{style:{color:o?"var(--tone-green)":"var(--ink)"},children:fe(e,r==="g"&&e<100?1:0)}),(0,Ae.jsxs)("span",{className:"muted",children:[" / ",fe(t),r]})]})]}),(0,Ae.jsx)("div",{className:"macrobar tick",style:{"--tickpos":`${Math.min(100,s)}%`},children:(0,Ae.jsx)("i",{style:{width:`${Math.min(100,s)}%`,color:i}})})]})}function Bt({k:n,v:e,sub:t,tone:i=""}){return(0,Ae.jsxs)("div",{className:`pill ${i}`,children:[(0,Ae.jsx)("div",{className:"k",children:n}),(0,Ae.jsx)("div",{className:"v num",children:e}),t&&(0,Ae.jsx)("div",{className:"k",children:t})]})}function Vn({title:n,right:e,children:t}){return(0,Ae.jsxs)("div",{className:"stack",style:{gap:8},children:[(0,Ae.jsxs)("div",{className:"row",style:{justifyContent:"space-between"},children:[(0,Ae.jsx)("span",{className:"wood-sign",children:n}),e]}),t]})}function NM({options:n,value:e,onChange:t}){return(0,Ae.jsx)("div",{className:"wrap",style:{gap:6},children:n.map(i=>(0,Ae.jsx)("button",{className:`pbtn sm ${e===i.value?"sel":"ghost"}`,onClick:()=>{Jt("select"),t(i.value)},children:i.label},i.value))})}function Mc({k:n,name:e,sub:t,on:i,onClick:r}){return(0,Ae.jsxs)("button",{className:`food-card ${i?"on":""}`,onClick:()=>{Jt("select"),r&&r()},children:[(0,Ae.jsx)(Do,{k:n,size:46,className:"anim-bob",style:{animationDelay:`${n.length%5*.2}s`}}),(0,Ae.jsx)("div",{className:"nm",children:e}),t&&(0,Ae.jsx)("div",{className:"sub",children:t})]})}function p0({k:n,name:e,qty:t,unit:i,macro:r,onTune:s}){return(0,Ae.jsxs)("div",{className:"row",style:{gap:8,padding:"6px 0"},children:[(0,Ae.jsx)(Do,{k:n,size:38}),(0,Ae.jsxs)("div",{style:{flex:1},children:[(0,Ae.jsx)("div",{style:{fontSize:13},children:e}),(0,Ae.jsxs)("div",{className:"muted num",children:["P",fe(r.p)," C",fe(r.c)," F",fe(r.f)," \xB7 ",fe(r.kcal)," kcal"]})]}),s&&(0,Ae.jsxs)("div",{className:"row",style:{gap:4},children:[(0,Ae.jsx)("button",{className:"pbtn sm",onClick:()=>{Jt("minus"),s(-1)},children:"\u2013"}),(0,Ae.jsxs)("div",{className:"val num",style:{minWidth:52},children:[fe(t,1),(0,Ae.jsx)("span",{style:{fontSize:10},children:i})]}),(0,Ae.jsx)("button",{className:"pbtn sm",onClick:()=>{Jt("plus"),s(1)},children:"+"})]}),!s&&(0,Ae.jsxs)("div",{className:"num",style:{fontSize:13},children:[fe(t,1),i]})]})}function Ps({title:n,sub:e,onClose:t,children:i}){return(0,Ae.jsxs)(Ae.Fragment,{children:[(0,Ae.jsx)("div",{className:"sheet-scrim",onClick:()=>{Jt("close"),t()}}),(0,Ae.jsxs)("div",{className:"sheet",role:"dialog","aria-modal":"true",children:[(0,Ae.jsxs)("div",{className:"sheet-title",children:[(0,Ae.jsxs)("div",{children:[(0,Ae.jsx)("h2",{children:n}),e&&(0,Ae.jsx)("div",{className:"muted",children:e})]}),(0,Ae.jsx)("button",{className:"pbtn sm",onClick:()=>{Jt("close"),t()},"aria-label":"close",children:"\u2715"})]}),(0,Ae.jsx)("div",{className:"stack",children:i})]})]})}var xD=ai(aa(),1);var k=ai(Br(),1),gf={p:"#ff8d82",c:"#ffcf7d",f:"#69cda5",kcal:"#85d7e3"},DM={amber:{bg:"#fff6df",fg:"#b97325"},green:{bg:"#edfff6",fg:"#3da77d"},red:{bg:"#fff1ee",fg:"#ff7d75"}};function LM(n,e){let t=n.key||"";if(t.startsWith("carb-")){let i=t.slice(5),r=jn(Cs[i],e)||{};return{name:r.short||r.name||n.name,unit:r.unit||n.unit,spriteKey:i}}if(t.startsWith("fat-")){let i=t.slice(4),r=jn(Rs[i],e)||{};return{name:r.short||r.label||n.name,unit:r.unit||n.unit,spriteKey:i}}if(t.startsWith("extra-")){let i=t.slice(6),r=jn($n[i],e)||{};return{name:r.label||n.name,unit:r.unit||n.unit,spriteKey:i}}if(ba[t]){let i=jn(ba[t],e);return{name:i.short||i.label,unit:i.unit||n.unit,spriteKey:t}}return{name:n.name,unit:n.unit,spriteKey:t}}function FM(n,e){let t=n.carbDay?.label;return e(t==="\u4F4E\u78B3"?"lowCarb":t==="\u4E2D\u78B3"?"mediumCarb":t==="\u9AD8\u78B3"?"highCarb":"carbDay")}function DA({value:n,onChange:e}){return(0,k.jsx)("input",{value:n,onChange:t=>e(t.target.value),style:{width:"100%",fontFamily:"inherit",fontSize:15,padding:"6px 8px",background:"#fff6e2",border:"3px solid #6a4a2c",color:"var(--ink)",boxShadow:"inset 0 3px 0 rgba(255,255,255,.5)"}})}function $i({label:n,value:e,onChange:t,min:i,max:r,suffix:s}){return(0,k.jsxs)("div",{className:"stack",style:{gap:4},children:[(0,k.jsx)("span",{className:"muted",children:n}),(0,k.jsx)(yc,{value:e,onChange:t,min:i,max:r,suffix:s,width:92})]})}function m0({k:n,name:e,meta:t,value:i,onChange:r,step:s,min:a=0,max:o,unit:l}){return(0,k.jsxs)("div",{className:"row",style:{gap:8,padding:"4px 0"},children:[(0,k.jsx)(Do,{k:n,size:34}),(0,k.jsxs)("div",{style:{flex:1},children:[(0,k.jsx)("div",{style:{fontSize:13},children:e}),t&&(0,k.jsx)("div",{className:"muted num",children:t})]}),(0,k.jsx)(xc,{value:i,onChange:r,step:s,min:a,max:o,unit:l})]})}function bc({label:n,macro:e,strong:t}){return(0,k.jsxs)("div",{className:"row",style:{justifyContent:"space-between",padding:"6px 0"},children:[(0,k.jsx)("span",{style:{fontSize:13,fontWeight:t?700:400},children:n}),(0,k.jsxs)("span",{className:"muted num",children:["P",fe(e.p)," C",fe(e.c)," F",fe(e.f)," \xB7 ",fe(e.kcal)," kcal"]})]})}function UM({S:n,up:e,t,withTdee:i}){let r=n.targetProfile,s=a=>e(o=>({targetProfile:{...o.targetProfile,...a}}));return(0,k.jsxs)("div",{className:"grid2",children:[(0,k.jsx)($i,{label:t("bodyWeight"),value:r.bodyWeightKg,min:30,max:250,onChange:a=>s({bodyWeightKg:a})}),(0,k.jsx)($i,{label:t("proteinRatio"),value:r.proteinPerKg,min:.8,max:3,onChange:a=>s({proteinPerKg:a})}),(0,k.jsx)($i,{label:t("fatMin"),value:r.fatMinPerKg,min:.3,max:1.5,onChange:a=>s({fatMinPerKg:a})}),(0,k.jsx)($i,{label:t("kcal"),value:r.kcal,min:1e3,max:5e3,onChange:a=>s({kcal:a})}),i&&(0,k.jsx)($i,{label:t("tdee"),value:n.tdee,min:0,max:9e3,onChange:a=>e({tdee:a})})]})}function OM({t:n,locale:e,proteinKeys:t,carbPlan:i,fatKeys:r,onProtein:s,onCarb:a,onFat:o}){let l=u=>{if(t.includes(u)){if(t.length<=1)return;s(t.filter(f=>f!==u))}else s([...t,u])},c=u=>{r.includes(u)?o(r.filter(f=>f!==u)):o([...r,u])};return(0,k.jsxs)("div",{className:"stack",style:{gap:10},children:[(0,k.jsxs)("div",{className:"stack",style:{gap:6},children:[(0,k.jsx)("span",{className:"eyebrow",children:n("protein")}),(0,k.jsx)("div",{className:"grid-food",children:Object.keys(ba).map(u=>{let f=jn(ba[u],e);return(0,k.jsx)(Mc,{k:u,name:f.short,sub:f.note,on:t.includes(u),onClick:()=>l(u)},u)})})]}),(0,k.jsxs)("div",{className:"stack",style:{gap:6},children:[(0,k.jsx)("span",{className:"eyebrow",children:n("carb")}),(0,k.jsx)("div",{className:"grid-food",children:Object.keys(Cs).map(u=>{let f=jn(Cs[u],e);return(0,k.jsx)(Mc,{k:u,name:f.short,sub:f.sub,on:i===u,onClick:()=>a(u)},u)})})]}),(0,k.jsxs)("div",{className:"stack",style:{gap:6},children:[(0,k.jsx)("span",{className:"eyebrow",children:n("fat")}),(0,k.jsx)("div",{className:"grid-food",children:Object.keys(Rs).map(u=>{let f=jn(Rs[u],e);return(0,k.jsx)(Mc,{k:u,name:f.short,sub:`${Rs[u].f}g / ${f.unit}`,on:r.includes(u),onClick:()=>c(u)},u)})})]})]})}function kM(n,e){return(t,i)=>n(r=>{let s=t.step||1,a=r[e][t.key]||0,o=fe(a+i*s,s<1?2:0),l={...r[e]};return o===0?delete l[t.key]:l[t.key]=o,{[e]:l}})}function BM({S:n,up:e,model:t,t:i,locale:r,onClose:s}){let a=t.beforeDinner,o=kM(e,"lunchAdjustments"),l=c=>e(u=>c==="none"?{drinkKey:"none",drinkMl:0}:{drinkKey:c,drinkMl:u.drinkMl>0?u.drinkMl:400});return(0,k.jsxs)(Ps,{title:i("intakeHubTitle"),sub:i("intakeHubSub"),onClose:s,children:[(0,k.jsxs)("div",{className:"grid2",children:[(0,k.jsx)(Bt,{k:i("beforeDinnerTotal"),v:fe(a.kcal),sub:`P${fe(a.p)} C${fe(a.c)} F${fe(a.f)}`}),(0,k.jsx)(Bt,{k:i("lunch"),v:fe(t.lunch.kcal)}),(0,k.jsx)(Bt,{k:i("fuel"),v:fe(t.preMacro.kcal+t.drinkMacro.kcal)}),(0,k.jsx)(Bt,{k:i("snack"),v:fe(t.snackMacro.kcal)})]}),(0,k.jsxs)(Vn,{title:i("lunch"),children:[(0,k.jsx)(NM,{options:[{value:"planned",label:i("plannedMode")},{value:"quick",label:i("quickKcal")},{value:"tally",label:i("tallyMode")}],value:n.lunchMode,onChange:c=>e({lunchMode:c})}),n.lunchMode==="planned"&&(0,k.jsxs)("div",{className:"stack",style:{gap:10},children:[(0,k.jsx)(Vn,{title:`${i("lunchShare")} ${n.mealSplitPct}% \xB7 ${i("dinner")} ${100-n.mealSplitPct}%`,children:(0,k.jsx)("div",{className:"wrap",children:[35,40,45,50].map(c=>(0,k.jsxs)(Lo,{on:n.mealSplitPct===c,onClick:()=>e({mealSplitPct:c}),children:[c,"%"]},c))})}),(0,k.jsx)(OM,{t:i,locale:r,proteinKeys:n.lunchProteinKeys,carbPlan:n.lunchCarbPlan,fatKeys:n.lunchFatKeys,onProtein:c=>e({lunchProteinKeys:c}),onCarb:c=>e({lunchCarbPlan:c}),onFat:c=>e({lunchFatKeys:c})}),(0,k.jsxs)(Vn,{title:i("generatedLunch"),right:(0,k.jsxs)("span",{className:"muted num",children:[fe(t.mealTargets.lunch.kcal)," kcal"]}),children:[t.lunchItems.map(c=>{let u=LM(c,r);return(0,k.jsx)(p0,{k:u.spriteKey,name:u.name,qty:c.qty,unit:u.unit,macro:c.macro,onTune:f=>o(c,f)},c.key)}),Object.keys(n.lunchAdjustments).length>0&&(0,k.jsx)(zr,{variant:"ghost sm",onClick:()=>e({lunchAdjustments:{}}),children:i("resetTune")})]})]}),n.lunchMode==="quick"&&(0,k.jsxs)("div",{className:"stack",style:{gap:8},children:[(0,k.jsx)(yc,{value:n.lunchKcal,onChange:c=>e({lunchKcal:c}),min:0,max:5e3,suffix:"kcal",width:110}),(0,k.jsx)("div",{className:"wrap",children:[600,700,800,900,1e3].map(c=>(0,k.jsx)(Lo,{on:n.lunchKcal===c,onClick:()=>e({lunchKcal:c}),children:c},c))})]}),n.lunchMode==="tally"&&(0,k.jsx)("div",{className:"stack",style:{gap:2},children:Object.entries(uf).map(([c,u])=>{let f=jn(u,r),h=`${fe(ur(an(u,u.step)))} kcal / ${u.step}${f.unit}`;return(0,k.jsx)(m0,{k:c,name:f.label,meta:h,value:n.tally[c]||0,step:u.step,max:u.max,unit:f.unit,onChange:p=>e(_=>({tally:{..._.tally,[c]:p}}))},c)})})]}),(0,k.jsxs)(Vn,{title:i("fuel"),children:[(0,k.jsx)("span",{className:"eyebrow",children:i("eatWhat")}),Object.entries(hf).map(([c,u])=>{let f=jn(u,r),h=`${fe(ur(an(u,u.step)))} kcal / ${u.step}${f.unit}`;return(0,k.jsx)(m0,{k:c,name:f.label,meta:h,value:n.pre[c]||0,step:u.step,max:u.max,unit:f.unit,onChange:p=>e(_=>({pre:{..._.pre,[c]:p}}))},c)}),(0,k.jsx)("span",{className:"eyebrow",children:i("drinkWhat")}),(0,k.jsx)("div",{className:"grid-food",children:["tomato","yasai","none"].map(c=>{let u=jn(Ta[c],r);return(0,k.jsx)(Mc,{k:c,name:u.label,sub:u.sub,on:n.drinkKey===c,onClick:()=>l(c)},c)})}),(0,k.jsxs)("div",{className:"wrap",children:[[200,400,600].map(c=>(0,k.jsxs)(Lo,{on:n.drinkMl===c,onClick:()=>e({drinkMl:c}),children:[c,"ml"]},c)),(0,k.jsx)(yc,{value:n.drinkMl,onChange:c=>e({drinkMl:c}),min:0,max:2e3,suffix:"ml"})]}),(0,k.jsx)(zr,{variant:"ghost sm",onClick:()=>e({pre:{},drinkKey:"none",drinkMl:0}),children:i("applyNoFuel")})]}),(0,k.jsxs)(Vn,{title:i("manualSnack"),children:[(0,k.jsx)(DA,{value:n.snack.name,onChange:c=>e(u=>({snack:{...u.snack,name:c}}))}),(0,k.jsxs)("div",{className:"grid2",children:[(0,k.jsx)($i,{label:i("kcal"),value:n.snack.kcal,min:0,max:5e3,onChange:c=>e(u=>({snack:{...u.snack,kcal:c}}))}),(0,k.jsx)($i,{label:i("protein"),value:n.snack.p,min:0,max:500,onChange:c=>e(u=>({snack:{...u.snack,p:c}}))}),(0,k.jsx)($i,{label:i("carb"),value:n.snack.c,min:0,max:500,onChange:c=>e(u=>({snack:{...u.snack,c}}))}),(0,k.jsx)($i,{label:i("fat"),value:n.snack.f,min:0,max:500,onChange:c=>e(u=>({snack:{...u.snack,f:c}}))})]}),(0,k.jsx)("div",{className:"muted",children:i("dinnerWillClose")}),(0,k.jsx)(zr,{variant:"ghost sm",onClick:()=>e({snack:{name:r==="ja"?"\u624B\u5165\u529B\u306E\u9593\u98DF":"\u624B\u52A8\u52A0\u9910",p:0,c:0,f:0,kcal:0}}),children:i("clearSnack")})]})]})}function zM({S:n,up:e,model:t,t:i,locale:r,onClose:s}){let a=kM(e,"dinnerAdjustments"),o=Object.keys(n.dinnerAdjustments).length>0;return(0,k.jsxs)(Ps,{title:i("dinnerAnswerTitle"),onClose:s,children:[(0,k.jsx)(Vn,{title:i("dinnerPlannerTitle"),children:(0,k.jsx)(OM,{t:i,locale:r,proteinKeys:n.proteinKeys,carbPlan:n.carbPlan,fatKeys:n.fatKeys,onProtein:l=>e({proteinKeys:l}),onCarb:l=>e({carbPlan:l}),onFat:l=>e({fatKeys:l})})}),t.dinnerItems.length===0?(0,k.jsx)(Bt,{k:i("dinner"),v:"\u2014",sub:i("noDinner")}):(0,k.jsx)("div",{className:"stack",style:{gap:2},children:t.dinnerItems.map(l=>{let c=LM(l,r);return(0,k.jsx)(p0,{k:c.spriteKey,name:c.name,qty:l.qty,unit:c.unit,macro:l.macro,onTune:u=>a(l,u)},l.key)})}),o&&(0,k.jsx)(zr,{variant:"ghost sm",onClick:()=>e({dinnerAdjustments:{}}),children:i("resetTune")}),(0,k.jsx)(Bt,{k:i("dinner"),v:`${fe(t.dinner.kcal)} kcal`,sub:`P${fe(t.dinner.p)} C${fe(t.dinner.c)} F${fe(t.dinner.f)}`,tone:"good"})]})}function VM({model:n,t:e,onClose:t}){let i=n.carbDay?.tone||"green",r=DM[i]||DM.green;return(0,k.jsxs)(Ps,{title:e("rhythmTitle"),onClose:t,children:[(0,k.jsxs)("div",{className:"stack",style:{gap:12},children:[(0,k.jsx)(Sc,{label:e("protein"),value:n.total.p,target:n.targets.p,color:gf.p}),(0,k.jsx)(Sc,{label:e("carb"),value:n.total.c,target:n.targets.c,color:gf.c}),(0,k.jsx)(Sc,{label:e("fat"),value:n.total.f,target:n.targets.f,color:gf.f}),(0,k.jsx)(Sc,{label:e("calorie"),value:n.total.kcal,target:n.targets.kcal,color:gf.kcal,unit:""})]}),(0,k.jsxs)("div",{className:"stack",style:{gap:4,padding:"14px 16px",background:r.bg,borderRadius:12},children:[(0,k.jsx)("div",{className:"big-num",style:{color:r.fg},children:FM(n,e)}),(0,k.jsx)("div",{style:{color:r.fg,fontSize:13},children:n.macroReport.carbDay.note})]})]})}var LA=["red","green","gold","amber"];function GM({S:n,up:e,model:t,t:i,locale:r,onClose:s}){let a=t.shopping.filter(u=>u.enabled),o=fe(a.reduce((u,f)=>u+ur(f.macro),0)),l=(u,f)=>e(h=>{let p=h.shopPlan[u]||{enabled:!0,target:0,stock:0};return{shopPlan:{...h.shopPlan,[u]:{...p,...f}}}}),c=()=>e(u=>{let f={...u.shopPlan};return Object.keys(f).forEach(h=>{f[h]={...f[h],stock:0}}),{shopPlan:f}});return(0,k.jsxs)(Ps,{title:i("shopHero"),sub:i("shopCopy"),onClose:s,children:[(0,k.jsx)("div",{className:"wrap",children:[3,5,7,10].map(u=>(0,k.jsxs)(Lo,{on:n.shopDays===u,onClick:()=>e({shopDays:u}),children:[u,"d"]},u))}),(0,k.jsxs)("div",{className:"grid3",children:[(0,k.jsx)(Bt,{k:i("cycle"),v:`${n.shopDays}d`}),(0,k.jsx)(Bt,{k:i("products"),v:a.length}),(0,k.jsx)(Bt,{k:i("kcal"),v:o})]}),(0,k.jsx)(Vn,{title:i("directPlanTitle"),children:t.runPlan.length===0?(0,k.jsxs)("div",{className:"stack",style:{gap:4},children:[(0,k.jsx)("div",{className:"wood-sign",children:i("nothingToBuy")}),(0,k.jsx)("div",{className:"muted",children:i("nothingToBuySub")})]}):t.runPlan.map(u=>(0,k.jsxs)("div",{className:"row",style:{gap:10,padding:"8px 0"},children:[(0,k.jsx)("div",{className:"num",style:{fontSize:12,opacity:.6,minWidth:20},children:u.order}),(0,k.jsx)(Do,{k:u.sourceKey||u.key,size:36}),(0,k.jsxs)("div",{style:{flex:1},children:[(0,k.jsx)("div",{style:{fontSize:14,fontWeight:600},children:u.label}),(0,k.jsx)("div",{className:"muted",children:u.reason}),(0,k.jsxs)("div",{className:"muted num",children:[i("target")," ",u.targetText," \xB7 ",i("stock")," ",u.stockText]})]}),(0,k.jsx)("div",{className:"big-num",style:{fontSize:22},children:u.buyText})]},u.key))}),(0,k.jsxs)(Vn,{title:i("stockTune"),right:(0,k.jsx)(zr,{variant:"ghost sm",onClick:c,children:i("clearStock")}),children:[(0,k.jsx)("div",{className:"muted",children:i("stockTuneSub")}),LA.map(u=>wa.filter(f=>f.tone===u).map(f=>{let h=jn(f,r),p=n.shopPlan[f.key]||{enabled:!0,target:f.defaultTarget,stock:0};return(0,k.jsxs)("div",{className:"stack",style:{gap:6,padding:"8px 0",borderTop:"1px solid var(--line, #ffe3da)"},children:[(0,k.jsxs)("div",{className:"row",style:{justifyContent:"space-between"},children:[(0,k.jsxs)("div",{className:"row",style:{gap:8},children:[(0,k.jsx)(Do,{k:f.sourceKey||f.key,size:30}),(0,k.jsx)("span",{style:{fontSize:13},children:h.label})]}),(0,k.jsx)(zr,{variant:p.enabled?"ghost sm":"green sm",onClick:()=>l(f.key,{enabled:!p.enabled}),children:p.enabled?i("skip"):i("add")})]}),(0,k.jsxs)("div",{className:"row",style:{justifyContent:"space-between",gap:8},children:[(0,k.jsx)("span",{className:"muted",children:i("weeklyTarget")}),(0,k.jsx)(xc,{value:p.target,onChange:_=>l(f.key,{target:_}),step:f.step,max:f.max,unit:h.unit})]}),(0,k.jsxs)("div",{className:"row",style:{justifyContent:"space-between",gap:8},children:[(0,k.jsx)("span",{className:"muted",children:i("stock")}),(0,k.jsx)(xc,{value:p.stock,onChange:_=>l(f.key,{stock:_}),step:f.step,max:f.max,unit:h.unit})]})]},f.key)}))]})]})}function HM({S:n,up:e,model:t,t:i,onClose:r}){let s=t.macroReport,a=t.potassium>=t.sodium,o=t.carbDay?.tone==="red";return(0,k.jsxs)(Ps,{title:i("ledgerTitle"),onClose:r,children:[(0,k.jsxs)("div",{className:"stack",style:{gap:0},children:[(0,k.jsx)(bc,{label:i("lunch"),macro:t.lunch}),(0,k.jsx)(bc,{label:i("preTraining"),macro:t.preMacro}),(0,k.jsx)(bc,{label:i("drinkElectrolyte"),macro:t.drinkMacro}),(0,k.jsx)(bc,{label:i("snackMeal"),macro:t.snackMacro}),(0,k.jsx)(bc,{label:i("dinner"),macro:t.dinner,strong:!0})]}),(0,k.jsx)(Vn,{title:i("targetByWeight"),children:(0,k.jsx)(UM,{S:n,up:e,t:i,withTdee:!0})}),(0,k.jsx)(Vn,{title:i("structureTitle"),children:(0,k.jsxs)("div",{className:"grid2",children:[(0,k.jsx)(Bt,{k:i("proteinCalories"),v:`${s.proteinPct}%`,sub:`${s.proteinPerKg}g/kg \xB7 ${s.proteinTargetPerKg}`}),(0,k.jsx)(Bt,{k:i("carbCalories"),v:`${s.carbPct}%`,sub:`${s.carbPerKg}g/kg \xB7 ${s.carbTargetPerKg}`}),(0,k.jsx)(Bt,{k:i("fatCalories"),v:`${s.fatPct}%`,sub:`${s.fatPerKg}g/kg`}),(0,k.jsx)(Bt,{k:i("carbJudge"),v:FM(t,i),sub:s.carbDay.note,tone:o?"hot":""})]})}),(0,k.jsxs)(Vn,{title:i("electrolyte"),children:[(0,k.jsxs)("div",{className:"grid2",children:[(0,k.jsx)($i,{label:i("salt"),value:n.saltG,min:0,max:20,onChange:l=>e({saltG:l}),suffix:"g"}),(0,k.jsx)($i,{label:i("foodK"),value:n.foodK,min:0,max:8e3,onChange:l=>e({foodK:l}),suffix:"mg"})]}),(0,k.jsx)(Bt,{k:i(a?"balanced":"lowPotassium"),v:`K ${fe(t.potassium)}mg`,sub:`Na ${fe(t.sodium)}mg`,tone:a?"good":"hot"})]})]})}function WM({S:n,up:e,model:t,t:i,locale:r,onClose:s}){let a=c0.reduce((c,u)=>c+(n.cheat[u.id]||0)*u.kcal,0),o=fe(t.total.kcal+a),l=fe(t.total.kcal+a-n.tdee);return(0,k.jsxs)(Ps,{title:i("cheatTitle"),onClose:s,children:[(0,k.jsx)("div",{className:"stack",style:{gap:2},children:c0.map(c=>{let u=jn(c,r);return(0,k.jsxs)("div",{className:"row",style:{gap:8,padding:"6px 0"},children:[(0,k.jsxs)("div",{style:{flex:1},children:[(0,k.jsx)("div",{style:{fontSize:14},children:u.label}),(0,k.jsxs)("div",{className:"muted num",children:[c.kcal," kcal"]})]}),(0,k.jsx)(xc,{value:n.cheat[c.id]||0,step:1,min:0,max:9,onChange:f=>e(h=>({cheat:{...h.cheat,[c.id]:f}}))})]},c.id)})}),(0,k.jsxs)("div",{className:"stack",style:{gap:2,textAlign:"center"},children:[(0,k.jsx)("div",{className:"big-num",children:fe(a)}),(0,k.jsx)("div",{className:"muted",children:i("cheatKcal")})]}),(0,k.jsxs)("div",{className:"grid3",children:[(0,k.jsx)(Bt,{k:i("todayTotal"),v:o}),(0,k.jsx)(Bt,{k:i("tdee"),v:n.tdee}),(0,k.jsx)(Bt,{k:i("deficit"),v:`${l>0?"+":""}${l}`,tone:l>0?"hot":"good"})]}),(0,k.jsx)(zr,{variant:"ghost sm",onClick:()=>e({cheat:{}}),children:i("clear")})]})}function XM({S:n,up:e,t,locale:i,onClose:r}){let s=n.targetProfile,a=fe(s.bodyWeightKg*s.proteinPerKg,1),o=fe(s.bodyWeightKg*s.fatMinPerKg,1),l=fe(Math.max(0,(s.kcal-a*4-o*9)/4),1);return(0,k.jsxs)(Ps,{title:t("advanced"),sub:t("advancedSub"),onClose:r,children:[(0,k.jsx)(Vn,{title:t("extras"),children:Object.entries($n).map(([c,u])=>{let f=jn(u,i);return(0,k.jsx)(m0,{k:c,name:f.label,unit:f.unit,value:n.extraCarbs[c]||0,step:u.step,max:u.max,onChange:h=>e(p=>({extraCarbs:{...p.extraCarbs,[c]:h}}))},c)})}),(0,k.jsx)(Vn,{title:t("beefFat"),children:(0,k.jsxs)("div",{className:"wrap",children:[[5,9,13,18].map(c=>(0,k.jsx)(Lo,{on:n.beefFat===c,onClick:()=>e({beefFat:c}),children:c},c)),(0,k.jsx)(yc,{value:n.beefFat,onChange:c=>e({beefFat:c}),min:0,max:40,suffix:"g/100g"})]})}),(0,k.jsxs)(Vn,{title:t("targetFormula"),children:[(0,k.jsx)(UM,{S:n,up:e,t}),(0,k.jsxs)("div",{className:"muted num",children:[t("proteinTarget")," P ",a," \xB7 ",t("fatTarget")," F ",o," \xB7 ",t("carbRemainder")," C ",l]}),(0,k.jsx)(zr,{variant:"ghost sm",onClick:()=>e({targetProfile:{...Io}}),children:t("resetDefault")})]})]})}var g1=0,Z0=1,_1=2;var tu=1,v1=2,tl=3,Yr=0,vn=1,yr=2,Li=0,Kr=1,nu=2,J0=3,Q0=4,x1=5;var ks=100,y1=101,S1=102,M1=103,b1=104,T1=200,w1=201,E1=202,A1=203,Vf=204,Gf=205,C1=206,R1=207,P1=208,I1=209,N1=210,D1=211,L1=212,F1=213,U1=214,Hf=0,Wf=1,Xf=2,Da=3,qf=4,Yf=5,Kf=6,$f=7,Sd=0,O1=1,k1=2,er=0,iu=1,ru=2,su=3,ka=4,au=5,ou=6,lu=7;var e_=300,Ws=301,Ba=302,Md=303,bd=304,cu=306,jf=1e3,dr=1001,Zf=1002,un=1003,B1=1004;var uu=1005;var _n=1006,Td=1007;var Xs=1008;var Qn=1009,t_=1010,n_=1011,nl=1012,wd=1013,tr=1014,Fi=1015,In=1016,Ed=1017,Ad=1018,il=1020,i_=35902,r_=35899,s_=1021,a_=1022,Ui=1023,pr=1026,qs=1027,Cd=1028,Rd=1029,Ys=1030,Pd=1031;var Id=1033,hu=33776,fu=33777,du=33778,pu=33779,Nd=35840,Dd=35841,Ld=35842,Fd=35843,Ud=36196,Od=37492,kd=37496,Bd=37488,zd=37489,mu=37490,Vd=37491,Gd=37808,Hd=37809,Wd=37810,Xd=37811,qd=37812,Yd=37813,Kd=37814,$d=37815,jd=37816,Zd=37817,Jd=37818,Qd=37819,ep=37820,tp=37821,np=36492,ip=36494,rp=36495,sp=36283,ap=36284,gu=36285,op=36286;var Ic=2300,Jf=2301,zf=2302,z0=2303,V0=2400,G0=2401,H0=2402;var z1=3200;var _u=0,V1=1,Zr="",gi="srgb",Nc="srgb-linear",Dc="linear",it="srgb";var Ia=7680;var W0=519,G1=512,H1=513,W1=514,lp=515,X1=516,q1=517,cp=518,Y1=519,X0=35044;var o_="300 es",Qi=2e3,$o=2001;function FA(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function UA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Lc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function K1(){let n=Lc("canvas");return n.style.display="block",n}var qM={},jo=null;function l_(...n){let e="THREE."+n.shift();jo?jo("log",e,...n):console.log(e,...n)}function $1(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ie(...n){n=$1(n);let e="THREE."+n.shift();if(jo)jo("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Le(...n){n=$1(n);let e="THREE."+n.shift();if(jo)jo("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Qf(...n){let e=n.join(" ");e in qM||(qM[e]=!0,Ie(...n))}function j1(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Z1={[Hf]:Wf,[Xf]:Kf,[qf]:$f,[Da]:Yf,[Wf]:Hf,[Kf]:Xf,[$f]:qf,[Yf]:Da},mr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var g0=Math.PI/180,ed=180/Math.PI;function vu(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function OA(n,e){return(n%e+e)%e}function _0(n,e,t){return(1-t)*n+t*e}function Tc(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var De=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],p=s[a+1],_=s[a+2],v=s[a+3];if(f!==v||l!==h||c!==p||u!==_){let g=l*h+c*p+u*_+f*v;g<0&&(h=-h,p=-p,_=-_,v=-v,g=-g);let d=1-o;if(g<.9995){let m=Math.acos(g),x=Math.sin(m);d=Math.sin(d*m)/x,o=Math.sin(o*m)/x,l=l*d+h*o,c=c*d+p*o,u=u*d+_*o,f=f*d+v*o}else{l=l*d+h*o,c=c*d+p*o,u=u*d+_*o,f=f*d+v*o;let m=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=m,c*=m,u*=m,f*=m}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-o*p,e[t+2]=c*_+u*p+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){let p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(YM.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(YM.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return v0.copy(this).projectOnVector(e),this.sub(v0)}reflect(e){return this.sub(v0.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},v0=new B,YM=new gr,ke=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],v=r[0],g=r[3],d=r[6],m=r[1],x=r[4],S=r[7],T=r[2],b=r[5],E=r[8];return s[0]=a*v+o*m+l*T,s[3]=a*g+o*x+l*b,s[6]=a*d+o*S+l*E,s[1]=c*v+u*m+f*T,s[4]=c*g+u*x+f*b,s[7]=c*d+u*S+f*E,s[2]=h*v+p*m+_*T,s[5]=h*g+p*x+_*b,s[8]=h*d+p*S+_*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(x0.makeScale(e,t)),this}rotate(e){return this.premultiply(x0.makeRotation(-e)),this}translate(e,t){return this.premultiply(x0.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},x0=new ke,KM=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$M=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kA(){let n={enabled:!0,workingColorSpace:Nc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(r.r=qr(r.r),r.g=qr(r.g),r.b=qr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(r.r=Ko(r.r),r.g=Ko(r.g),r.b=Ko(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zr?Dc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Qf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Qf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Nc]:{primaries:e,whitePoint:i,transfer:Dc,toXYZ:KM,fromXYZ:$M,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:i,transfer:it,toXYZ:KM,fromXYZ:$M,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),n}var je=kA();function qr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ko(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Fo,td=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fo===void 0&&(Fo=Lc("canvas")),Fo.width=e.width,Fo.height=e.height;let r=Fo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Fo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=qr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qr(t[i]/255)*255):t[i]=qr(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},BA=0,Zo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BA++}),this.uuid=vu(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(y0(r[a].image)):s.push(y0(r[a]))}else s=y0(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function y0(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?td.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var zA=0,S0=new B,Jn=class n extends mr{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=dr,r=dr,s=_n,a=Xs,o=Ui,l=Qn,c=n.DEFAULT_ANISOTROPY,u=Zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zA++}),this.uuid=vu(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(S0).x}get height(){return this.source.getSize(S0).y}get depth(){return this.source.getSize(S0).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==e_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jf:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case Zf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jf:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case Zf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=e_;Jn.DEFAULT_ANISOTROPY=1;var Pt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],v=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,S=(p+1)/2,T=(d+1)/2,b=(u+h)/4,E=(f+v)/4,y=(_+g)/4;return x>S&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=b/i,s=E/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=E/s,r=y/s),this.set(i,r,s,t),this}let m=Math.sqrt((g-_)*(g-_)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(f-v)/m,this.z=(h-u)/m,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nd=class extends mr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new Jn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Zo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends nd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Fc=class extends Jn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var id=class extends Jn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,r,s,a,o,l,c,u,f,h,p,_,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,p,_,v,g)}set(e,t,i,r,s,a,o,l,c,u,f,h,p,_,v,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=v,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Uo.setFromMatrixColumn(e,0).length(),s=1/Uo.setFromMatrixColumn(e,1).length(),a=1/Uo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=a*u,p=a*f,_=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,p=l*f,_=c*u,v=c*f;t[0]=h+v*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,p=l*f,_=c*u,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,p=a*f,_=o*u,v=o*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,p=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=_*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-v*f}else if(e.order==="XZY"){let h=a*l,p=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=a*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VA,e,GA)}lookAt(e,t,i){let r=this.elements;return pi.subVectors(e,t),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),Is.crossVectors(i,pi),Is.lengthSq()===0&&(Math.abs(i.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),Is.crossVectors(i,pi)),Is.normalize(),_f.crossVectors(pi,Is),r[0]=Is.x,r[4]=_f.x,r[8]=pi.x,r[1]=Is.y,r[5]=_f.y,r[9]=pi.y,r[2]=Is.z,r[6]=_f.z,r[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],v=i[6],g=i[10],d=i[14],m=i[3],x=i[7],S=i[11],T=i[15],b=r[0],E=r[4],y=r[8],w=r[12],R=r[1],P=r[5],D=r[9],V=r[13],W=r[2],L=r[6],N=r[10],O=r[14],$=r[3],Q=r[7],re=r[11],pe=r[15];return s[0]=a*b+o*R+l*W+c*$,s[4]=a*E+o*P+l*L+c*Q,s[8]=a*y+o*D+l*N+c*re,s[12]=a*w+o*V+l*O+c*pe,s[1]=u*b+f*R+h*W+p*$,s[5]=u*E+f*P+h*L+p*Q,s[9]=u*y+f*D+h*N+p*re,s[13]=u*w+f*V+h*O+p*pe,s[2]=_*b+v*R+g*W+d*$,s[6]=_*E+v*P+g*L+d*Q,s[10]=_*y+v*D+g*N+d*re,s[14]=_*w+v*V+g*O+d*pe,s[3]=m*b+x*R+S*W+T*$,s[7]=m*E+x*P+S*L+T*Q,s[11]=m*y+x*D+S*N+T*re,s[15]=m*w+x*V+S*O+T*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],v=e[7],g=e[11],d=e[15],m=l*p-c*h,x=o*p-c*f,S=o*h-l*f,T=a*p-c*u,b=a*h-l*u,E=a*f-o*u;return t*(v*m-g*x+d*S)-i*(_*m-g*T+d*b)+r*(_*x-v*T+d*E)-s*(_*S-v*b+g*E)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],v=e[13],g=e[14],d=e[15],m=t*o-i*a,x=t*l-r*a,S=t*c-s*a,T=i*l-r*o,b=i*c-s*o,E=r*c-s*l,y=u*v-f*_,w=u*g-h*_,R=u*d-p*_,P=f*g-h*v,D=f*d-p*v,V=h*d-p*g,W=m*V-x*D+S*P+T*R-b*w+E*y;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/W;return e[0]=(o*V-l*D+c*P)*L,e[1]=(r*D-i*V-s*P)*L,e[2]=(v*E-g*b+d*T)*L,e[3]=(h*b-f*E-p*T)*L,e[4]=(l*R-a*V-c*w)*L,e[5]=(t*V-r*R+s*w)*L,e[6]=(g*S-_*E-d*x)*L,e[7]=(u*E-h*S+p*x)*L,e[8]=(a*D-o*R+c*y)*L,e[9]=(i*R-t*D-s*y)*L,e[10]=(_*b-v*S+d*m)*L,e[11]=(f*S-u*b-p*m)*L,e[12]=(o*w-a*P-l*y)*L,e[13]=(t*P-i*w+r*y)*L,e[14]=(v*x-_*T-g*m)*L,e[15]=(u*T-f*x+h*m)*L,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,_=s*f,v=a*u,g=a*f,d=o*f,m=l*c,x=l*u,S=l*f,T=i.x,b=i.y,E=i.z;return r[0]=(1-(v+d))*T,r[1]=(p+S)*T,r[2]=(_-x)*T,r[3]=0,r[4]=(p-S)*b,r[5]=(1-(h+d))*b,r[6]=(g+m)*b,r[7]=0,r[8]=(_+x)*E,r[9]=(g-m)*E,r[10]=(1-(h+v))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Uo.set(r[0],r[1],r[2]).length(),o=Uo.set(r[4],r[5],r[6]).length(),l=Uo.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ji.copy(this);let c=1/a,u=1/o,f=1/l;return ji.elements[0]*=c,ji.elements[1]*=c,ji.elements[2]*=c,ji.elements[4]*=u,ji.elements[5]*=u,ji.elements[6]*=u,ji.elements[8]*=f,ji.elements[9]*=f,ji.elements[10]*=f,t.setFromRotationMatrix(ji),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Qi,l=!1){let c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r),_,v;if(l)_=s/(a-s),v=a*s/(a-s);else if(o===Qi)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===$o)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Qi,l=!1){let c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r),_,v;if(l)_=1/(a-s),v=a/(a-s);else if(o===Qi)_=-2/(a-s),v=-(a+s)/(a-s);else if(o===$o)_=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Uo=new B,ji=new xt,VA=new B(0,0,0),GA=new B(1,1,1),Is=new B,_f=new B,pi=new B,jM=new xt,ZM=new gr,_r=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jM.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jM,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ZM.setFromEuler(this),this.setFromQuaternion(ZM,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_r.DEFAULT_ORDER="XYZ";var Uc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},HA=0,JM=new B,Oo=new gr,Vr=new xt,vf=new B,wc=new B,WA=new B,XA=new gr,QM=new B(1,0,0),e1=new B(0,1,0),t1=new B(0,0,1),n1={type:"added"},qA={type:"removed"},ko={type:"childadded",child:null},M0={type:"childremoved",child:null},Rn=class n extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HA++}),this.uuid=vu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new B,t=new _r,i=new gr,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new ke}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oo.setFromAxisAngle(e,t),this.quaternion.multiply(Oo),this}rotateOnWorldAxis(e,t){return Oo.setFromAxisAngle(e,t),this.quaternion.premultiply(Oo),this}rotateX(e){return this.rotateOnAxis(QM,e)}rotateY(e){return this.rotateOnAxis(e1,e)}rotateZ(e){return this.rotateOnAxis(t1,e)}translateOnAxis(e,t){return JM.copy(e).applyQuaternion(this.quaternion),this.position.add(JM.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(QM,e)}translateY(e){return this.translateOnAxis(e1,e)}translateZ(e){return this.translateOnAxis(t1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vf.copy(e):vf.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),wc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vr.lookAt(wc,vf,this.up):Vr.lookAt(vf,wc,this.up),this.quaternion.setFromRotationMatrix(Vr),r&&(Vr.extractRotation(r.matrixWorld),Oo.setFromRotationMatrix(Vr),this.quaternion.premultiply(Oo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(n1),ko.child=e,this.dispatchEvent(ko),ko.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qA),M0.child=e,this.dispatchEvent(M0),M0.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(n1),ko.child=e,this.dispatchEvent(ko),ko.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wc,e,WA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wc,XA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Rn.DEFAULT_UP=new B(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Na=class extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},YA={type:"move"},Jo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,i),d=this._getHandJoint(c,v);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(YA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Na;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},J1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ns={h:0,s:0,l:0},xf={h:0,s:0,l:0};function b0(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ue=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=OA(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=b0(a,s,e+1/3),this.g=b0(a,s,e),this.b=b0(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,t=gi){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gi){let i=J1[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}copyLinearToSRGB(e){return this.r=Ko(e.r),this.g=Ko(e.g),this.b=Ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return je.workingToColorSpace(Cn.copy(this),e),Math.round(Je(Cn.r*255,0,255))*65536+Math.round(Je(Cn.g*255,0,255))*256+Math.round(Je(Cn.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Cn.copy(this),t);let i=Cn.r,r=Cn.g,s=Cn.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=gi){je.workingToColorSpace(Cn.copy(this),e);let t=Cn.r,i=Cn.g,r=Cn.b;return e!==gi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ns),this.setHSL(Ns.h+e,Ns.s+t,Ns.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ns),e.getHSL(xf);let i=_0(Ns.h,xf.h,t),r=_0(Ns.s,xf.s,t),s=_0(Ns.l,xf.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new Ue;Ue.NAMES=J1;var La=class extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _r,this.environmentIntensity=1,this.environmentRotation=new _r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zi=new B,Gr=new B,T0=new B,Hr=new B,Bo=new B,zo=new B,i1=new B,w0=new B,E0=new B,A0=new B,C0=new Pt,R0=new Pt,P0=new Pt,Os=class n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Zi.subVectors(e,t),r.cross(Zi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Zi.subVectors(r,t),Gr.subVectors(i,t),T0.subVectors(e,t);let a=Zi.dot(Zi),o=Zi.dot(Gr),l=Zi.dot(T0),c=Gr.dot(Gr),u=Gr.dot(T0),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;let h=1/f,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Hr)===null?!1:Hr.x>=0&&Hr.y>=0&&Hr.x+Hr.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Hr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hr.x),l.addScaledVector(a,Hr.y),l.addScaledVector(o,Hr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return C0.setScalar(0),R0.setScalar(0),P0.setScalar(0),C0.fromBufferAttribute(e,t),R0.fromBufferAttribute(e,i),P0.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(C0,s.x),a.addScaledVector(R0,s.y),a.addScaledVector(P0,s.z),a}static isFrontFacing(e,t,i,r){return Zi.subVectors(i,t),Gr.subVectors(e,t),Zi.cross(Gr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zi.subVectors(this.c,this.b),Gr.subVectors(this.a,this.b),Zi.cross(Gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;Bo.subVectors(r,i),zo.subVectors(s,i),w0.subVectors(e,i);let l=Bo.dot(w0),c=zo.dot(w0);if(l<=0&&c<=0)return t.copy(i);E0.subVectors(e,r);let u=Bo.dot(E0),f=zo.dot(E0);if(u>=0&&f<=u)return t.copy(r);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Bo,a);A0.subVectors(e,s);let p=Bo.dot(A0),_=zo.dot(A0);if(_>=0&&p<=_)return t.copy(s);let v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(zo,o);let g=u*_-p*f;if(g<=0&&f-u>=0&&p-_>=0)return i1.subVectors(s,r),o=(f-u)/(f-u+(p-_)),t.copy(r).addScaledVector(i1,o);let d=1/(g+v+h);return a=v*d,o=h*d,t.copy(i).addScaledVector(Bo,a).addScaledVector(zo,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vr=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ji.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ji.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ji):Ji.fromBufferAttribute(s,a),Ji.applyMatrix4(e.matrixWorld),this.expandByPoint(Ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yf.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yf.copy(i.boundingBox)),yf.applyMatrix4(e.matrixWorld),this.union(yf)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ji),Ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ec),Sf.subVectors(this.max,Ec),Vo.subVectors(e.a,Ec),Go.subVectors(e.b,Ec),Ho.subVectors(e.c,Ec),Ds.subVectors(Go,Vo),Ls.subVectors(Ho,Go),Aa.subVectors(Vo,Ho);let t=[0,-Ds.z,Ds.y,0,-Ls.z,Ls.y,0,-Aa.z,Aa.y,Ds.z,0,-Ds.x,Ls.z,0,-Ls.x,Aa.z,0,-Aa.x,-Ds.y,Ds.x,0,-Ls.y,Ls.x,0,-Aa.y,Aa.x,0];return!I0(t,Vo,Go,Ho,Sf)||(t=[1,0,0,0,1,0,0,0,1],!I0(t,Vo,Go,Ho,Sf))?!1:(Mf.crossVectors(Ds,Ls),t=[Mf.x,Mf.y,Mf.z],I0(t,Vo,Go,Ho,Sf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Wr=[new B,new B,new B,new B,new B,new B,new B,new B],Ji=new B,yf=new vr,Vo=new B,Go=new B,Ho=new B,Ds=new B,Ls=new B,Aa=new B,Ec=new B,Sf=new B,Mf=new B,Ca=new B;function I0(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ca.fromArray(n,s);let o=r.x*Math.abs(Ca.x)+r.y*Math.abs(Ca.y)+r.z*Math.abs(Ca.z),l=e.dot(Ca),c=t.dot(Ca),u=i.dot(Ca);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var $t=new B,bf=new De,KA=0,ln=class extends mr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=X0,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bf.fromBufferAttribute(this,t),bf.applyMatrix3(e),this.setXY(t,bf.x,bf.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Tc(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tc(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tc(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tc(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),i=Zn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),i=Zn(i,this.array),r=Zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),i=Zn(i,this.array),r=Zn(r,this.array),s=Zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==X0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Oc=class extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var kc=class extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var cn=class extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}},$A=new vr,Ac=new B,N0=new B,$r=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):$A.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ac.subVectors(e,this.center);let t=Ac.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ac,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(N0.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ac.copy(e.center).add(N0)),this.expandByPoint(Ac.copy(e.center).sub(N0))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jA=0,Di=new xt,D0=new Rn,Wo=new B,mi=new vr,Cc=new vr,on=new B,Pn=class n extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jA++}),this.uuid=vu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(FA(e)?kc:Oc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,i){return Di.makeTranslation(e,t,i),this.applyMatrix4(Di),this}scale(e,t,i){return Di.makeScale(e,t,i),this.applyMatrix4(Di),this}lookAt(e){return D0.lookAt(e),D0.updateMatrix(),this.applyMatrix4(D0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wo).negate(),this.translate(Wo.x,Wo.y,Wo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new cn(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];mi.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $r);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Cc.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(mi.min,Cc.min),mi.expandByPoint(on),on.addVectors(mi.max,Cc.max),mi.expandByPoint(on)):(mi.expandByPoint(Cc.min),mi.expandByPoint(Cc.max))}mi.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)on.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(on));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)on.fromBufferAttribute(o,c),l&&(Wo.fromBufferAttribute(e,c),on.add(Wo)),r=Math.max(r,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new B,l[y]=new B;let c=new B,u=new B,f=new B,h=new De,p=new De,_=new De,v=new B,g=new B;function d(y,w,R){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,R),h.fromBufferAttribute(s,y),p.fromBufferAttribute(s,w),_.fromBufferAttribute(s,R),u.sub(c),f.sub(c),p.sub(h),_.sub(h);let P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(P),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),o[y].add(v),o[w].add(v),o[R].add(v),l[y].add(g),l[w].add(g),l[R].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let y=0,w=m.length;y<w;++y){let R=m[y],P=R.start,D=R.count;for(let V=P,W=P+D;V<W;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let x=new B,S=new B,T=new B,b=new B;function E(y){T.fromBufferAttribute(r,y),b.copy(T);let w=o[y];x.copy(w),x.sub(T.multiplyScalar(T.dot(w))).normalize(),S.crossVectors(b,w);let P=S.dot(l[y])<0?-1:1;a.setXYZW(y,x.x,x.y,x.z,P)}for(let y=0,w=m.length;y<w;++y){let R=m[y],P=R.start,D=R.count;for(let V=P,W=P+D;V<W;V+=3)E(e.getX(V+0)),E(e.getX(V+1)),E(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){let _=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),p=0,_=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new ln(h,u,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ZA=0,xr=class extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZA++}),this.uuid=vu(),this.name="",this.type="Material",this.blending=Kr,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vf,this.blendDst=Gf,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=W0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ia,this.stencilZFail=Ia,this.stencilZPass=Ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==Yr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vf&&(i.blendSrc=this.blendSrc),this.blendDst!==Gf&&(i.blendDst=this.blendDst),this.blendEquation!==ks&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Da&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==W0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ia&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ia&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ia&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Xr=new B,L0=new B,Tf=new B,Fs=new B,F0=new B,wf=new B,U0=new B,Bc=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xr.copy(this.origin).addScaledVector(this.direction,t),Xr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){L0.copy(e).add(t).multiplyScalar(.5),Tf.copy(t).sub(e).normalize(),Fs.copy(this.origin).sub(L0);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Tf),o=Fs.dot(this.direction),l=-Fs.dot(Tf),c=Fs.lengthSq(),u=Math.abs(1-a*a),f,h,p,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){let v=1/u;f*=v,h*=v,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(L0).addScaledVector(Tf,h),p}intersectSphere(e,t){Xr.subVectors(e.center,this.origin);let i=Xr.dot(this.direction),r=Xr.dot(Xr)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Xr)!==null}intersectTriangle(e,t,i,r,s){F0.subVectors(t,e),wf.subVectors(i,e),U0.crossVectors(F0,wf);let a=this.direction.dot(U0),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fs.subVectors(this.origin,e);let l=o*this.direction.dot(wf.crossVectors(Fs,wf));if(l<0)return null;let c=o*this.direction.dot(F0.cross(Fs));if(c<0||l+c>a)return null;let u=-o*Fs.dot(U0);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fa=class extends xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.combine=Sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},r1=new xt,Ra=new Bc,Ef=new $r,s1=new B,Af=new B,Cf=new B,Rf=new B,O0=new B,Pf=new B,a1=new B,If=new B,yt=class extends Rn{constructor(e=new Pn,t=new Fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Pf.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],f=s[l];u!==0&&(O0.fromBufferAttribute(f,e),a?Pf.addScaledVector(O0,u):Pf.addScaledVector(O0.sub(t),u))}t.add(Pf)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ef.copy(i.boundingSphere),Ef.applyMatrix4(s),Ra.copy(e.ray).recast(e.near),!(Ef.containsPoint(Ra.origin)===!1&&(Ra.intersectSphere(Ef,s1)===null||Ra.origin.distanceToSquared(s1)>(e.far-e.near)**2))&&(r1.copy(s).invert(),Ra.copy(e.ray).applyMatrix4(r1),!(i.boundingBox!==null&&Ra.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ra)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){let g=h[_],d=a[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,T=x;S<T;S+=3){let b=o.getX(S),E=o.getX(S+1),y=o.getX(S+2);r=Nf(this,d,e,i,c,u,f,b,E,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=_,d=v;g<d;g+=3){let m=o.getX(g),x=o.getX(g+1),S=o.getX(g+2);r=Nf(this,a,e,i,c,u,f,m,x,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){let g=h[_],d=a[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,T=x;S<T;S+=3){let b=S,E=S+1,y=S+2;r=Nf(this,d,e,i,c,u,f,b,E,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=_,d=v;g<d;g+=3){let m=g,x=g+1,S=g+2;r=Nf(this,a,e,i,c,u,f,m,x,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function JA(n,e,t,i,r,s,a,o){let l;if(e.side===vn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Yr,o),l===null)return null;If.copy(o),If.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(If);return c<t.near||c>t.far?null:{distance:c,point:If.clone(),object:n}}function Nf(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Af),n.getVertexPosition(l,Cf),n.getVertexPosition(c,Rf);let u=JA(n,e,t,i,Af,Cf,Rf,a1);if(u){let f=new B;Os.getBarycoord(a1,Af,Cf,Rf,f),r&&(u.uv=Os.getInterpolatedAttribute(r,o,l,c,f,new De)),s&&(u.uv1=Os.getInterpolatedAttribute(s,o,l,c,f,new De)),a&&(u.normal=Os.getInterpolatedAttribute(a,o,l,c,f,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new B,materialIndex:0};Os.getNormal(Af,Cf,Rf,h.normal),u.face=h,u.barycoord=f}return u}var zc=class extends Jn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=un,u=un,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vc=class extends ln{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xo=new xt,o1=new xt,Df=[],l1=new vr,QA=new xt,Rc=new yt,Pc=new $r,Gc=class extends yt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vc(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,QA)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xo),l1.copy(e.boundingBox).applyMatrix4(Xo),this.boundingBox.union(l1)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $r),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xo),Pc.copy(e.boundingSphere).applyMatrix4(Xo),this.boundingSphere.union(Pc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Rc.geometry=this.geometry,Rc.material=this.material,Rc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pc.copy(this.boundingSphere),Pc.applyMatrix4(i),e.ray.intersectsSphere(Pc)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Xo),o1.multiplyMatrices(i,Xo),Rc.matrixWorld=o1,Rc.raycast(e,Df);for(let a=0,o=Df.length;a<o;a++){let l=Df[a];l.instanceId=s,l.object=this,t.push(l)}Df.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new zc(new Float32Array(r*this.count),r,this.count,Cd,Fi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},k0=new B,eC=new B,tC=new ke,fr=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=k0.subVectors(i,t).cross(eC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(k0),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||tC.getNormalMatrix(e),r=this.coplanarPoint(k0).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pa=new $r,nC=new De(.5,.5),Lf=new B,Qo=class{constructor(e=new fr,t=new fr,i=new fr,r=new fr,s=new fr,a=new fr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qi,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],_=s[8],v=s[9],g=s[10],d=s[11],m=s[12],x=s[13],S=s[14],T=s[15];if(r[0].setComponents(c-a,p-u,d-_,T-m).normalize(),r[1].setComponents(c+a,p+u,d+_,T+m).normalize(),r[2].setComponents(c+o,p+f,d+v,T+x).normalize(),r[3].setComponents(c-o,p-f,d-v,T-x).normalize(),i)r[4].setComponents(l,h,g,S).normalize(),r[5].setComponents(c-l,p-h,d-g,T-S).normalize();else if(r[4].setComponents(c-l,p-h,d-g,T-S).normalize(),t===Qi)r[5].setComponents(c+l,p+h,d+g,T+S).normalize();else if(t===$o)r[5].setComponents(l,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pa)}intersectsSprite(e){Pa.center.set(0,0,0);let t=nC.distanceTo(e.center);return Pa.radius=.7071067811865476+t,Pa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pa)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Lf.x=r.normal.x>0?e.max.x:e.min.x,Lf.y=r.normal.y>0?e.max.y:e.min.y,Lf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lf)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var rd=class extends xr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},c1=new xt,q0=new Bc,Ff=new $r,Uf=new B,Hc=class extends Rn{constructor(e=new Pn,t=new rd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ff.copy(i.boundingSphere),Ff.applyMatrix4(r),Ff.radius+=s,e.ray.intersectsSphere(Ff)===!1)return;c1.copy(r).invert(),q0.copy(e.ray).applyMatrix4(c1);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=h,v=p;_<v;_++){let g=c.getX(_);Uf.fromBufferAttribute(f,g),u1(Uf,g,l,r,e,t,this)}}else{let h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=h,v=p;_<v;_++)Uf.fromBufferAttribute(f,_),u1(Uf,_,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function u1(n,e,t,i,r,s,a){let o=q0.distanceSqToPoint(n);if(o<t){let l=new B;q0.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Wc=class extends Jn{constructor(e=[],t=Ws,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var jr=class extends Jn{constructor(e,t,i=tr,r,s,a,o=un,l=un,c,u=pr,f=1){if(u!==pr&&u!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sd=class extends jr{constructor(e,t=tr,i=Ws,r,s,a=un,o=un,l,c=pr){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xc=class extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Bs=class n extends Pn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(f,2));function _(v,g,d,m,x,S,T,b,E,y,w){let R=S/E,P=T/y,D=S/2,V=T/2,W=b/2,L=E+1,N=y+1,O=0,$=0,Q=new B;for(let re=0;re<N;re++){let pe=re*P-V;for(let ve=0;ve<L;ve++){let He=ve*R-D;Q[v]=He*m,Q[g]=pe*x,Q[d]=W,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[g]=0,Q[d]=b>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(ve/E),f.push(1-re/y),O+=1}}for(let re=0;re<y;re++)for(let pe=0;pe<E;pe++){let ve=h+pe+L*re,He=h+pe+L*(re+1),Be=h+(pe+1)+L*(re+1),Pe=h+(pe+1)+L*re;l.push(ve,He,Pe),l.push(He,Be,Pe),$+=6}o.addGroup(p,$,w),p+=$,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ad=class n extends Pn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new cn(s,3)),this.setAttribute("normal",new cn(s.slice(),3)),this.setAttribute("uv",new cn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(m){let x=new B,S=new B,T=new B;for(let b=0;b<t.length;b+=3)p(t[b+0],x),p(t[b+1],S),p(t[b+2],T),l(x,S,T,m)}function l(m,x,S,T){let b=T+1,E=[];for(let y=0;y<=b;y++){E[y]=[];let w=m.clone().lerp(S,y/b),R=x.clone().lerp(S,y/b),P=b-y;for(let D=0;D<=P;D++)D===0&&y===b?E[y][D]=w:E[y][D]=w.clone().lerp(R,D/P)}for(let y=0;y<b;y++)for(let w=0;w<2*(b-y)-1;w++){let R=Math.floor(w/2);w%2===0?(h(E[y][R+1]),h(E[y+1][R]),h(E[y][R])):(h(E[y][R+1]),h(E[y+1][R+1]),h(E[y+1][R]))}}function c(m){let x=new B;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(m),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function u(){let m=new B;for(let x=0;x<s.length;x+=3){m.x=s[x+0],m.y=s[x+1],m.z=s[x+2];let S=g(m)/2/Math.PI+.5,T=d(m)/Math.PI+.5;a.push(S,1-T)}_(),f()}function f(){for(let m=0;m<a.length;m+=6){let x=a[m+0],S=a[m+2],T=a[m+4],b=Math.max(x,S,T),E=Math.min(x,S,T);b>.9&&E<.1&&(x<.2&&(a[m+0]+=1),S<.2&&(a[m+2]+=1),T<.2&&(a[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,x){let S=m*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function _(){let m=new B,x=new B,S=new B,T=new B,b=new De,E=new De,y=new De;for(let w=0,R=0;w<s.length;w+=9,R+=6){m.set(s[w+0],s[w+1],s[w+2]),x.set(s[w+3],s[w+4],s[w+5]),S.set(s[w+6],s[w+7],s[w+8]),b.set(a[R+0],a[R+1]),E.set(a[R+2],a[R+3]),y.set(a[R+4],a[R+5]),T.copy(m).add(x).add(S).divideScalar(3);let P=g(T);v(b,R+0,m,P),v(E,R+2,x,P),v(y,R+4,S,P)}}function v(m,x,S,T){T<0&&m.x===1&&(a[x]=m.x-1),S.x===0&&S.z===0&&(a[x]=T/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var qc=class n extends ad{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Yc=class n extends Pn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,p=[],_=[],v=[],g=[];for(let d=0;d<u;d++){let m=d*h-a;for(let x=0;x<c;x++){let S=x*f-s;_.push(S,-m,0),v.push(0,0,1),g.push(x/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<o;m++){let x=m+c*d,S=m+c*(d+1),T=m+1+c*(d+1),b=m+1+c*d;p.push(x,S,b),p.push(S,T,b)}this.setIndex(p),this.setAttribute("position",new cn(_,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function za(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(h1(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(h1(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Nn(n){let e={};for(let t=0;t<n.length;t++){let i=za(n[t]);for(let r in i)e[r]=i[r]}return e}function h1(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function iC(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function c_(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Jr={clone:za,merge:Nn},rC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,It=class extends xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rC,this.fragmentShader=sC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=za(e.uniforms),this.uniformsGroups=iC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},el=class extends It{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},zs=class extends xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Kc=class extends xr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.combine=Sd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},od=class extends xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ld=class extends xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Of(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var Vs=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cd=class extends Vs{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:V0,endingEnd:V0}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case G0:s=e,o=2*t-i;break;case H0:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case G0:a=e,l=2*i-t;break;case H0:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(i-t)/(r-t),v=_*_,g=v*_,d=-h*g+2*h*v-h*_,m=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*_+1,x=(-1-p)*g+(1.5+p)*v+.5*_,S=p*g-p*v;for(let T=0;T!==o;++T)s[T]=d*a[u+T]+m*a[c+T]+x*a[l+T]+S*a[f+T];return s}},ud=class extends Vs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(r-t),f=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*f+a[l+h]*u;return s}},hd=class extends Vs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},fd=class extends Vs{interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.settings||this.DefaultSettings_,f=u.inTangents,h=u.outTangents;if(!f||!h){let v=(i-t)/(r-t),g=1-v;for(let d=0;d!==o;++d)s[d]=a[c+d]*g+a[l+d]*v;return s}let p=o*2,_=e-1;for(let v=0;v!==o;++v){let g=a[c+v],d=a[l+v],m=_*p+v*2,x=h[m],S=h[m+1],T=e*p+v*2,b=f[T],E=f[T+1],y=(i-t)/(r-t),w,R,P,D,V;for(let W=0;W<8;W++){w=y*y,R=w*y,P=1-y,D=P*P,V=D*P;let N=V*t+3*D*y*x+3*P*w*b+R*r-i;if(Math.abs(N)<1e-10)break;let O=3*D*(x-t)+6*P*y*(b-x)+3*w*(r-b);if(Math.abs(O)<1e-10)break;y=y-N/O,y=Math.max(0,Math.min(1,y))}s[v]=V*g+3*D*y*S+3*P*w*E+R*d}return s}},_i=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Of(t,this.TimeBufferType),this.values=Of(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Of(e.times,Array),values:Of(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new hd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ud(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fd(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Ic:t=this.InterpolantFactoryMethodDiscrete;break;case Jf:t=this.InterpolantFactoryMethodLinear;break;case zf:t=this.InterpolantFactoryMethodSmooth;break;case z0:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ie("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ic;case this.InterpolantFactoryMethodLinear:return Jf;case this.InterpolantFactoryMethodSmooth:return zf;case this.InterpolantFactoryMethodBezier:return z0}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Le("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Le("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&UA(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){Le("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===zf,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{let f=o*i,h=f-i,p=f+i;for(let _=0;_!==i;++_){let v=t[f+_];if(v!==t[h+_]||v!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,h=a*i;for(let p=0;p!==i;++p)t[h+p]=t[f+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};_i.prototype.ValueTypeName="";_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=Jf;var Gs=class extends _i{constructor(e,t,i){super(e,t,i)}};Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Ic;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var dd=class extends _i{constructor(e,t,i,r){super(e,t,i,r)}};dd.prototype.ValueTypeName="color";var pd=class extends _i{constructor(e,t,i,r){super(e,t,i,r)}};pd.prototype.ValueTypeName="number";var md=class extends Vs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let u=c+o;c!==u;c+=4)gr.slerpFlat(s,0,a,c-o,a,c,l);return s}},$c=class extends _i{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new md(this.times,this.values,this.getValueSize(),e)}};$c.prototype.ValueTypeName="quaternion";$c.prototype.InterpolantFactoryMethodSmooth=void 0;var Hs=class extends _i{constructor(e,t,i){super(e,t,i)}};Hs.prototype.ValueTypeName="string";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Ic;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var gd=class extends _i{constructor(e,t,i,r){super(e,t,i,r)}};gd.prototype.ValueTypeName="vector";var _d=class{constructor(e,t,i){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Q1=new _d,vd=class{constructor(e){this.manager=e!==void 0?e:Q1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};vd.DEFAULT_MATERIAL_NAME="__DEFAULT";var jc=class extends Rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var B0=new xt,f1=new B,d1=new B,Y0=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qo,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;f1.setFromMatrixPosition(e.matrixWorld),t.position.copy(f1),d1.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(d1),t.updateMatrixWorld(),B0.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(B0,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===$o||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(B0)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},kf=new B,Bf=new gr,hr=new B,Zc=class extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kf,Bf,hr),hr.x===1&&hr.y===1&&hr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kf,Bf,hr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(kf,Bf,hr),hr.x===1&&hr.y===1&&hr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kf,Bf,hr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Us=new B,p1=new De,m1=new De,gn=class extends Zc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ed*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(g0*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ed*2*Math.atan(Math.tan(g0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Us.x,Us.y).multiplyScalar(-e/Us.z),Us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Us.x,Us.y).multiplyScalar(-e/Us.z)}getViewSize(e,t){return this.getViewBounds(e,p1,m1),t.subVectors(m1,p1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(g0*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var K0=class extends Y0{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},Ua=class extends jc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new K0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Oa=class extends Zc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Jc=class extends jc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var qo=-90,Yo=1,xd=class extends Rn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new gn(qo,Yo,e,t);r.layers=this.layers,this.add(r);let s=new gn(qo,Yo,e,t);s.layers=this.layers,this.add(s);let a=new gn(qo,Yo,e,t);a.layers=this.layers,this.add(a);let o=new gn(qo,Yo,e,t);o.layers=this.layers,this.add(o);let l=new gn(qo,Yo,e,t);l.layers=this.layers,this.add(l);let c=new gn(qo,Yo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$o)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},yd=class extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Qc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=aC.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function aC(){this._document.hidden===!1&&this.reset()}var u_="\\[\\]\\.:\\/",oC=new RegExp("["+u_+"]","g"),h_="[^"+u_+"]",lC="[^"+u_.replace("\\.","")+"]",cC=/((?:WC+[\/:])*)/.source.replace("WC",h_),uC=/(WCOD+)?/.source.replace("WCOD",lC),hC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",h_),fC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",h_),dC=new RegExp("^"+cC+uC+hC+fC+"$"),pC=["material","materials","bones","map"],$0=class{constructor(e,t,i){let r=i||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(oC,"")}static parseTrackName(e){let t=dC.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);pC.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=$0;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ED=new Float32Array(1);var eu=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ie("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var j0=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};function f_(n,e,t,i){let r=mC(i);switch(t){case s_:return n*e;case Cd:return n*e/r.components*r.byteLength;case Rd:return n*e/r.components*r.byteLength;case Ys:return n*e*2/r.components*r.byteLength;case Pd:return n*e*2/r.components*r.byteLength;case a_:return n*e*3/r.components*r.byteLength;case Ui:return n*e*4/r.components*r.byteLength;case Id:return n*e*4/r.components*r.byteLength;case hu:case fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case du:case pu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dd:case Fd:return Math.max(n,16)*Math.max(e,8)/4;case Nd:case Ld:return Math.max(n,8)*Math.max(e,8)/2;case Ud:case Od:case Bd:case zd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case kd:case mu:case Vd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $d:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case jd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ep:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case tp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case np:case ip:case rp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case sp:case ap:return Math.ceil(n/4)*Math.ceil(e/4)*8;case gu:case op:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mC(n){switch(n){case Qn:case t_:return{byteLength:1,components:1};case nl:case n_:case In:return{byteLength:2,components:1};case Ed:case Ad:return{byteLength:2,components:4};case tr:case wd:case Fi:return{byteLength:4,components:1};case i_:case r_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function Mb(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function _C(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){let _=f[h],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){let v=f[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var vC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xC=`#ifdef USE_ALPHAHASH
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
#endif`,yC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TC=`#ifdef USE_AOMAP
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
#endif`,wC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EC=`#ifdef USE_BATCHING
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
#endif`,AC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IC=`#ifdef USE_IRIDESCENCE
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
#endif`,NC=`#ifdef USE_BUMPMAP
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
#endif`,DC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,BC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,VC=`#define PI 3.141592653589793
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
} // validated`,GC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,HC=`vec3 transformedNormal = objectNormal;
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
#endif`,WC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KC="gl_FragColor = linearToOutputTexel( gl_FragColor );",$C=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jC=`#ifdef USE_ENVMAP
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
#endif`,ZC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,JC=`#ifdef USE_ENVMAP
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
#endif`,QC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eR=`#ifdef USE_ENVMAP
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
#endif`,tR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sR=`#ifdef USE_GRADIENTMAP
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
}`,aR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cR=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,uR=`#ifdef USE_ENVMAP
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
#endif`,hR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mR=`PhysicalMaterial material;
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
#endif`,gR=`uniform sampler2D dfgLUT;
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
}`,_R=`
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
#endif`,vR=`#if defined( RE_IndirectDiffuse )
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
#endif`,xR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yR=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,SR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ER=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CR=`#if defined( USE_POINTS_UV )
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
#endif`,RR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LR=`#ifdef USE_MORPHTARGETS
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
#endif`,FR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VR=`#ifdef USE_NORMALMAP
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
#endif`,GR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,KR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$R=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iP=`float getShadowMask() {
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
}`,rP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sP=`#ifdef USE_SKINNING
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
#endif`,aP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oP=`#ifdef USE_SKINNING
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
#endif`,lP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fP=`#ifdef USE_TRANSMISSION
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
#endif`,dP=`#ifdef USE_TRANSMISSION
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
#endif`,pP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_P=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xP=`uniform sampler2D t2D;
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
}`,yP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SP=`#ifdef ENVMAP_TYPE_CUBE
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
}`,MP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TP=`#include <common>
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
}`,wP=`#if DEPTH_PACKING == 3200
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
}`,EP=`#define DISTANCE
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
}`,AP=`#define DISTANCE
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
}`,CP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PP=`uniform float scale;
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
}`,IP=`uniform vec3 diffuse;
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
}`,NP=`#include <common>
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
}`,DP=`uniform vec3 diffuse;
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
}`,LP=`#define LAMBERT
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
}`,FP=`#define LAMBERT
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
}`,UP=`#define MATCAP
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
}`,OP=`#define MATCAP
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
}`,kP=`#define NORMAL
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
}`,BP=`#define NORMAL
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
}`,zP=`#define PHONG
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
}`,VP=`#define PHONG
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
}`,GP=`#define STANDARD
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
}`,HP=`#define STANDARD
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
}`,WP=`#define TOON
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
}`,XP=`#define TOON
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
}`,qP=`uniform float size;
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
}`,YP=`uniform vec3 diffuse;
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
}`,KP=`#include <common>
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
}`,$P=`uniform vec3 color;
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
}`,jP=`uniform float rotation;
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
}`,ZP=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:vC,alphahash_pars_fragment:xC,alphamap_fragment:yC,alphamap_pars_fragment:SC,alphatest_fragment:MC,alphatest_pars_fragment:bC,aomap_fragment:TC,aomap_pars_fragment:wC,batching_pars_vertex:EC,batching_vertex:AC,begin_vertex:CC,beginnormal_vertex:RC,bsdfs:PC,iridescence_fragment:IC,bumpmap_pars_fragment:NC,clipping_planes_fragment:DC,clipping_planes_pars_fragment:LC,clipping_planes_pars_vertex:FC,clipping_planes_vertex:UC,color_fragment:OC,color_pars_fragment:kC,color_pars_vertex:BC,color_vertex:zC,common:VC,cube_uv_reflection_fragment:GC,defaultnormal_vertex:HC,displacementmap_pars_vertex:WC,displacementmap_vertex:XC,emissivemap_fragment:qC,emissivemap_pars_fragment:YC,colorspace_fragment:KC,colorspace_pars_fragment:$C,envmap_fragment:jC,envmap_common_pars_fragment:ZC,envmap_pars_fragment:JC,envmap_pars_vertex:QC,envmap_physical_pars_fragment:uR,envmap_vertex:eR,fog_vertex:tR,fog_pars_vertex:nR,fog_fragment:iR,fog_pars_fragment:rR,gradientmap_pars_fragment:sR,lightmap_pars_fragment:aR,lights_lambert_fragment:oR,lights_lambert_pars_fragment:lR,lights_pars_begin:cR,lights_toon_fragment:hR,lights_toon_pars_fragment:fR,lights_phong_fragment:dR,lights_phong_pars_fragment:pR,lights_physical_fragment:mR,lights_physical_pars_fragment:gR,lights_fragment_begin:_R,lights_fragment_maps:vR,lights_fragment_end:xR,lightprobes_pars_fragment:yR,logdepthbuf_fragment:SR,logdepthbuf_pars_fragment:MR,logdepthbuf_pars_vertex:bR,logdepthbuf_vertex:TR,map_fragment:wR,map_pars_fragment:ER,map_particle_fragment:AR,map_particle_pars_fragment:CR,metalnessmap_fragment:RR,metalnessmap_pars_fragment:PR,morphinstance_vertex:IR,morphcolor_vertex:NR,morphnormal_vertex:DR,morphtarget_pars_vertex:LR,morphtarget_vertex:FR,normal_fragment_begin:UR,normal_fragment_maps:OR,normal_pars_fragment:kR,normal_pars_vertex:BR,normal_vertex:zR,normalmap_pars_fragment:VR,clearcoat_normal_fragment_begin:GR,clearcoat_normal_fragment_maps:HR,clearcoat_pars_fragment:WR,iridescence_pars_fragment:XR,opaque_fragment:qR,packing:YR,premultiplied_alpha_fragment:KR,project_vertex:$R,dithering_fragment:jR,dithering_pars_fragment:ZR,roughnessmap_fragment:JR,roughnessmap_pars_fragment:QR,shadowmap_pars_fragment:eP,shadowmap_pars_vertex:tP,shadowmap_vertex:nP,shadowmask_pars_fragment:iP,skinbase_vertex:rP,skinning_pars_vertex:sP,skinning_vertex:aP,skinnormal_vertex:oP,specularmap_fragment:lP,specularmap_pars_fragment:cP,tonemapping_fragment:uP,tonemapping_pars_fragment:hP,transmission_fragment:fP,transmission_pars_fragment:dP,uv_pars_fragment:pP,uv_pars_vertex:mP,uv_vertex:gP,worldpos_vertex:_P,background_vert:vP,background_frag:xP,backgroundCube_vert:yP,backgroundCube_frag:SP,cube_vert:MP,cube_frag:bP,depth_vert:TP,depth_frag:wP,distance_vert:EP,distance_frag:AP,equirect_vert:CP,equirect_frag:RP,linedashed_vert:PP,linedashed_frag:IP,meshbasic_vert:NP,meshbasic_frag:DP,meshlambert_vert:LP,meshlambert_frag:FP,meshmatcap_vert:UP,meshmatcap_frag:OP,meshnormal_vert:kP,meshnormal_frag:BP,meshphong_vert:zP,meshphong_frag:VP,meshphysical_vert:GP,meshphysical_frag:HP,meshtoon_vert:WP,meshtoon_frag:XP,points_vert:qP,points_frag:YP,shadow_vert:KP,shadow_frag:$P,sprite_vert:jP,sprite_frag:ZP},de={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Mr={basic:{uniforms:Nn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Nn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Nn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Nn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Nn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ue(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Nn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Nn([de.points,de.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Nn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Nn([de.common,de.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Nn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Nn([de.sprite,de.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Nn([de.common,de.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Nn([de.lights,de.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Mr.physical={uniforms:Nn([Mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var up={r:0,b:0,g:0},JP=new xt,bb=new ke;bb.set(-1,0,0,0,1,0,0,0,1);function QP(n,e,t,i,r,s){let a=new Ue(0),o=r===!0?0:1,l,c,u=null,f=0,h=null;function p(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){let S=m.backgroundBlurriness>0;x=e.get(x,S)}return x}function _(m){let x=!1,S=p(m);S===null?g(a,o):S&&S.isColor&&(g(S,1),x=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(m,x){let S=p(x);S&&(S.isCubeTexture||S.mapping===cu)?(c===void 0&&(c=new yt(new Bs(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:za(Mr.backgroundCube.uniforms),vertexShader:Mr.backgroundCube.vertexShader,fragmentShader:Mr.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(JP.makeRotationFromEuler(x.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bb),c.material.toneMapped=je.getTransfer(S.colorSpace)!==it,(u!==S||f!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new yt(new Yc(2,2),new It({name:"BackgroundMaterial",uniforms:za(Mr.background.uniforms),vertexShader:Mr.background.vertexShader,fragmentShader:Mr.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=je.getTransfer(S.colorSpace)!==it,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,x){m.getRGB(up,c_(n)),t.buffers.color.setClear(up.r,up.g,up.b,x,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,x=1){a.set(m),o=x,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:_,addToRenderList:v,dispose:d}}function e2(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,a=!1;function o(P,D,V,W,L){let N=!1,O=f(P,W,V,D);s!==O&&(s=O,c(s.object)),N=p(P,W,V,L),N&&_(P,W,V,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,S(P,D,V,W),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function f(P,D,V,W){let L=W.wireframe===!0,N=i[D.id];N===void 0&&(N={},i[D.id]=N);let O=P.isInstancedMesh===!0?P.id:0,$=N[O];$===void 0&&($={},N[O]=$);let Q=$[V.id];Q===void 0&&(Q={},$[V.id]=Q);let re=Q[L];return re===void 0&&(re=h(l()),Q[L]=re),re}function h(P){let D=[],V=[],W=[];for(let L=0;L<t;L++)D[L]=0,V[L]=0,W[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:W,object:P,attributes:{},index:null}}function p(P,D,V,W){let L=s.attributes,N=D.attributes,O=0,$=V.getAttributes();for(let Q in $)if($[Q].location>=0){let pe=L[Q],ve=N[Q];if(ve===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(ve=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(ve=P.instanceColor)),pe===void 0||pe.attribute!==ve||ve&&pe.data!==ve.data)return!0;O++}return s.attributesNum!==O||s.index!==W}function _(P,D,V,W){let L={},N=D.attributes,O=0,$=V.getAttributes();for(let Q in $)if($[Q].location>=0){let pe=N[Q];pe===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor));let ve={};ve.attribute=pe,pe&&pe.data&&(ve.data=pe.data),L[Q]=ve,O++}s.attributes=L,s.attributesNum=O,s.index=W}function v(){let P=s.newAttributes;for(let D=0,V=P.length;D<V;D++)P[D]=0}function g(P){d(P,0)}function d(P,D){let V=s.newAttributes,W=s.enabledAttributes,L=s.attributeDivisors;V[P]=1,W[P]===0&&(n.enableVertexAttribArray(P),W[P]=1),L[P]!==D&&(n.vertexAttribDivisor(P,D),L[P]=D)}function m(){let P=s.newAttributes,D=s.enabledAttributes;for(let V=0,W=D.length;V<W;V++)D[V]!==P[V]&&(n.disableVertexAttribArray(V),D[V]=0)}function x(P,D,V,W,L,N,O){O===!0?n.vertexAttribIPointer(P,D,V,L,N):n.vertexAttribPointer(P,D,V,W,L,N)}function S(P,D,V,W){v();let L=W.attributes,N=V.getAttributes(),O=D.defaultAttributeValues;for(let $ in N){let Q=N[$];if(Q.location>=0){let re=L[$];if(re===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),re!==void 0){let pe=re.normalized,ve=re.itemSize,He=e.get(re);if(He===void 0)continue;let Be=He.buffer,Pe=He.type,Z=He.bytesPerElement,he=Pe===n.INT||Pe===n.UNSIGNED_INT||re.gpuType===wd;if(re.isInterleavedBufferAttribute){let se=re.data,Re=se.stride,Fe=re.offset;if(se.isInstancedInterleavedBuffer){for(let Ne=0;Ne<Q.locationSize;Ne++)d(Q.location+Ne,se.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ne=0;Ne<Q.locationSize;Ne++)g(Q.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let Ne=0;Ne<Q.locationSize;Ne++)x(Q.location+Ne,ve/Q.locationSize,Pe,pe,Re*Z,(Fe+ve/Q.locationSize*Ne)*Z,he)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<Q.locationSize;se++)d(Q.location+se,re.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<Q.locationSize;se++)g(Q.location+se);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let se=0;se<Q.locationSize;se++)x(Q.location+se,ve/Q.locationSize,Pe,pe,ve*Z,ve/Q.locationSize*se*Z,he)}}else if(O!==void 0){let pe=O[$];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(Q.location,pe);break;case 3:n.vertexAttrib3fv(Q.location,pe);break;case 4:n.vertexAttrib4fv(Q.location,pe);break;default:n.vertexAttrib1fv(Q.location,pe)}}}}m()}function T(){w();for(let P in i){let D=i[P];for(let V in D){let W=D[V];for(let L in W){let N=W[L];for(let O in N)u(N[O].object),delete N[O];delete W[L]}}delete i[P]}}function b(P){if(i[P.id]===void 0)return;let D=i[P.id];for(let V in D){let W=D[V];for(let L in W){let N=W[L];for(let O in N)u(N[O].object),delete N[O];delete W[L]}}delete i[P.id]}function E(P){for(let D in i){let V=i[D];for(let W in V){let L=V[W];if(L[P.id]===void 0)continue;let N=L[P.id];for(let O in N)u(N[O].object),delete N[O];delete L[P.id]}}}function y(P){for(let D in i){let V=i[D],W=P.isInstancedMesh===!0?P.id:0,L=V[W];if(L!==void 0){for(let N in L){let O=L[N];for(let $ in O)u(O[$].object),delete O[$];delete L[N]}delete V[W],Object.keys(V).length===0&&delete i[D]}}}function w(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:g,disableUnusedAttributes:m}}function t2(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function n2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==Ui&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let y=E===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Qn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Fi&&!y)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:S,maxSamples:T,samples:b}}function i2(n){let e=this,t=null,i=0,r=!1,s=!1,a=new fr,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){let _=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{let m=s?0:i,x=m*4,S=d.clippingState||null;l.value=S,S=u(_,h,x,p);for(let T=0;T!==x;++T)S[T]=t[T];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=l.value,_!==!0||g===null){let d=p+v*4,m=h.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,S=p;x!==v;++x,S+=4)a.copy(f[x]).applyMatrix4(m,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var Ks=4,eb=[.125,.215,.35,.446,.526,.582],Va=20,r2=256,xu=new Oa,tb=new Ue,d_=null,p_=0,m_=0,g_=!1,s2=new B,al=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=s2}=s;d_=this._renderer.getRenderTarget(),p_=this._renderer.getActiveCubeFace(),m_=this._renderer.getActiveMipmapLevel(),g_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ib(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(d_,p_,m_),this._renderer.xr.enabled=g_,e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Ba?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),d_=this._renderer.getRenderTarget(),p_=this._renderer.getActiveCubeFace(),m_=this._renderer.getActiveMipmapLevel(),g_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:In,format:Ui,colorSpace:Nc,depthBuffer:!1},r=nb(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nb(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=a2(s)),this._blurMaterial=l2(s,e,t),this._ggxMaterial=o2(s,e,t)}return r}_compileMaterial(e){let t=new yt(new Pn,e);this._renderer.compile(t,xu)}_sceneToCubeUV(e,t,i,r,s){let l=new gn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(tb),f.toneMapping=er,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yt(new Bs,new Fa({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,d=!1,m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,d=!0):(g.color.copy(tb),d=!0);for(let x=0;x<6;x++){let S=x%3;S===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):S===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));let T=this._cubeSize;rl(r,S*T,x>2?T:0,T,T),f.setRenderTarget(r),d&&f.render(v,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Ws||e.mapping===Ba;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rb()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ib());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;rl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,xu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,p=f*h,{_lodMax:_}=this,v=this._sizeLods[i],g=3*v*(i>_-Ks?i-_+Ks:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,rl(s,g,d,3*v,2*v),r.setRenderTarget(s),r.render(o,xu),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,rl(e,g,d,3*v,2*v),r.setRenderTarget(e),r.render(o,xu)}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");let u=3,f=this._lodMeshes[r];f.material=c;let h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Va-1),v=s/_,g=isFinite(s)?1+Math.floor(u*v):Va;g>Va&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Va}`);let d=[],m=0;for(let E=0;E<Va;++E){let y=E/v,w=Math.exp(-y*y/2);d.push(w),E===0?m+=w:E<g&&(m+=2*w)}for(let E=0;E<d.length;E++)d[E]=d[E]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;let S=this._sizeLods[r],T=3*S*(r>x-Ks?r-x+Ks:0),b=4*(this._cubeSize-S);rl(t,T,b,3*S,2*S),l.setRenderTarget(t),l.render(f,xu)}};function a2(n){let e=[],t=[],i=[],r=n,s=n-Ks+1+eb.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Ks?l=eb[a-n+Ks-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,g=2,d=1,m=new Float32Array(v*_*p),x=new Float32Array(g*_*p),S=new Float32Array(d*_*p);for(let b=0;b<p;b++){let E=b%3*2/3-1,y=b>2?0:-1,w=[E,y,0,E+2/3,y,0,E+2/3,y+1,0,E,y,0,E+2/3,y+1,0,E,y+1,0];m.set(w,v*_*b),x.set(h,g*_*b);let R=[b,b,b,b,b,b];S.set(R,d*_*b)}let T=new Pn;T.setAttribute("position",new ln(m,v)),T.setAttribute("uv",new ln(x,g)),T.setAttribute("faceIndex",new ln(S,d)),i.push(new yt(T,null)),r>Ks&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function nb(n,e,t){let i=new Qt(n,e,t);return i.texture.mapping=cu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function o2(n,e,t){return new It({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:r2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pp(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function l2(n,e,t){let i=new Float32Array(Va),r=new B(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:Va,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pp(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function ib(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pp(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function rb(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function pp(){return`

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
	`}var fp=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Wc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bs(5,5,5),s=new It({name:"CubemapFromEquirect",uniforms:za(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:Li});s.uniforms.tEquirect.value=t;let a=new yt(r,s),o=t.minFilter;return t.minFilter===Xs&&(t.minFilter=_n),new xd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}};function c2(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,p=!1){return h==null?null:p?a(h):s(h)}function s(h){if(h&&h.isTexture){let p=h.mapping;if(p===Md||p===bd)if(e.has(h)){let _=e.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let v=new fp(_.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,_=p===Md||p===bd,v=p===Ws||p===Ba;if(_||v){let g=t.get(h),d=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new al(n)),g=_?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let m=h.image;return _&&m&&m.height>0||v&&m&&l(m)?(i===null&&(i=new al(n)),g=_?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,p){return p===Md?h.mapping=Ws:p===bd&&(h.mapping=Ba),h}function l(h){let p=0,_=6;for(let v=0;v<_;v++)h[v]!==void 0&&p++;return p===_}function c(h){let p=h.target;p.removeEventListener("dispose",c);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function u2(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Qf("WebGLRenderer: "+i+" extension not supported."),r}}}function h2(n,e,t,i){let r={},s=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];let p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){let h=[],p=f.index,_=f.attributes.position,v=0;if(_===void 0)return;if(p!==null){let m=p.array;v=p.version;for(let x=0,S=m.length;x<S;x+=3){let T=m[x+0],b=m[x+1],E=m[x+2];h.push(T,b,b,E,E,T)}}else{let m=_.array;v=_.version;for(let x=0,S=m.length/3-1;x<S;x+=3){let T=x+0,b=x+1,E=x+2;h.push(T,b,b,E,E,T)}}let g=new(_.count>=65535?kc:Oc)(h,1);g.version=v;let d=s.get(f);d&&e.remove(d),s.set(f,g)}function u(f){let h=s.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function f2(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*a),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,f*a,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,p);let v=0;for(let g=0;g<p;g++)v+=h[g];t.update(v,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function d2(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function p2(n,e,t){let i=new WeakMap,r=new Pt;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==f){let w=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],x=0;p===!0&&(x=1),_===!0&&(x=2),v===!0&&(x=3);let S=o.attributes.position.count*x,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let b=new Float32Array(S*T*4*f),E=new Fc(b,S,T,f);E.type=Fi,E.needsUpdate=!0;let y=x*4;for(let R=0;R<f;R++){let P=g[R],D=d[R],V=m[R],W=S*T*4*R;for(let L=0;L<P.count;L++){let N=L*y;p===!0&&(r.fromBufferAttribute(P,L),b[W+N+0]=r.x,b[W+N+1]=r.y,b[W+N+2]=r.z,b[W+N+3]=0),_===!0&&(r.fromBufferAttribute(D,L),b[W+N+4]=r.x,b[W+N+5]=r.y,b[W+N+6]=r.z,b[W+N+7]=0),v===!0&&(r.fromBufferAttribute(V,L),b[W+N+8]=r.x,b[W+N+9]=r.y,b[W+N+10]=r.z,b[W+N+11]=V.itemSize===4?r.w:1)}}h={count:f,texture:E,size:new De(S,T)},i.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function m2(n,e,t,i,r){let s=new WeakMap;function a(c){let u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function o(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var g2={[iu]:"LINEAR_TONE_MAPPING",[ru]:"REINHARD_TONE_MAPPING",[su]:"CINEON_TONE_MAPPING",[ka]:"ACES_FILMIC_TONE_MAPPING",[ou]:"AGX_TONE_MAPPING",[lu]:"NEUTRAL_TONE_MAPPING",[au]:"CUSTOM_TONE_MAPPING"};function _2(n,e,t,i,r){let s=new Qt(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new jr(e,t):void 0}),a=new Qt(e,t,{type:In,depthBuffer:!1,stencilBuffer:!1}),o=new Pn;o.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new cn([0,2,0,0,2,0],2));let l=new el({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new yt(o,l),u=new Oa(-1,1,1,-1,0,1),f=null,h=null,p=!1,_,v=null,g=[],d=!1;this.setSize=function(m,x){s.setSize(m,x),a.setSize(m,x);for(let S=0;S<g.length;S++){let T=g[S];T.setSize&&T.setSize(m,x)}},this.setEffects=function(m){g=m,d=g.length>0&&g[0].isRenderPass===!0;let x=s.width,S=s.height;for(let T=0;T<g.length;T++){let b=g[T];b.setSize&&b.setSize(x,S)}},this.begin=function(m,x){if(p||m.toneMapping===er&&g.length===0)return!1;if(v=x,x!==null){let S=x.width,T=x.height;(s.width!==S||s.height!==T)&&this.setSize(S,T)}return d===!1&&m.setRenderTarget(s),_=m.toneMapping,m.toneMapping=er,!0},this.hasRenderPass=function(){return d},this.end=function(m,x){m.toneMapping=_,p=!0;let S=s,T=a;for(let b=0;b<g.length;b++){let E=g[b];if(E.enabled!==!1&&(E.render(m,T,S,x),E.needsSwap!==!1)){let y=S;S=T,T=y}}if(f!==m.outputColorSpace||h!==m.toneMapping){f=m.outputColorSpace,h=m.toneMapping,l.defines={},je.getTransfer(f)===it&&(l.defines.SRGB_TRANSFER="");let b=g2[h];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,m.setRenderTarget(v),m.render(c,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Tb=new Jn,x_=new jr(1,1),wb=new Fc,Eb=new id,Ab=new Wc,sb=[],ab=[],ob=new Float32Array(16),lb=new Float32Array(9),cb=new Float32Array(4);function ol(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=sb[r];if(s===void 0&&(s=new Float32Array(r),sb[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function mp(n,e){let t=ab[e];t===void 0&&(t=new Int32Array(e),ab[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function v2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function x2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function y2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function S2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function M2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;cb.set(i),n.uniformMatrix2fv(this.addr,!1,cb),tn(t,i)}}function b2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;lb.set(i),n.uniformMatrix3fv(this.addr,!1,lb),tn(t,i)}}function T2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;ob.set(i),n.uniformMatrix4fv(this.addr,!1,ob),tn(t,i)}}function w2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function E2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function A2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function C2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function R2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function P2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function I2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function N2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function D2(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(x_.compareFunction=t.isReversedDepthBuffer()?cp:lp,s=x_):s=Tb,t.setTexture2D(e||s,r)}function L2(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Eb,r)}function F2(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ab,r)}function U2(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wb,r)}function O2(n){switch(n){case 5126:return v2;case 35664:return x2;case 35665:return y2;case 35666:return S2;case 35674:return M2;case 35675:return b2;case 35676:return T2;case 5124:case 35670:return w2;case 35667:case 35671:return E2;case 35668:case 35672:return A2;case 35669:case 35673:return C2;case 5125:return R2;case 36294:return P2;case 36295:return I2;case 36296:return N2;case 35678:case 36198:case 36298:case 36306:case 35682:return D2;case 35679:case 36299:case 36307:return L2;case 35680:case 36300:case 36308:case 36293:return F2;case 36289:case 36303:case 36311:case 36292:return U2}}function k2(n,e){n.uniform1fv(this.addr,e)}function B2(n,e){let t=ol(e,this.size,2);n.uniform2fv(this.addr,t)}function z2(n,e){let t=ol(e,this.size,3);n.uniform3fv(this.addr,t)}function V2(n,e){let t=ol(e,this.size,4);n.uniform4fv(this.addr,t)}function G2(n,e){let t=ol(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function H2(n,e){let t=ol(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function W2(n,e){let t=ol(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function X2(n,e){n.uniform1iv(this.addr,e)}function q2(n,e){n.uniform2iv(this.addr,e)}function Y2(n,e){n.uniform3iv(this.addr,e)}function K2(n,e){n.uniform4iv(this.addr,e)}function $2(n,e){n.uniform1uiv(this.addr,e)}function j2(n,e){n.uniform2uiv(this.addr,e)}function Z2(n,e){n.uniform3uiv(this.addr,e)}function J2(n,e){n.uniform4uiv(this.addr,e)}function Q2(n,e,t){let i=this.cache,r=e.length,s=mp(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=x_:a=Tb;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function e3(n,e,t){let i=this.cache,r=e.length,s=mp(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Eb,s[a])}function t3(n,e,t){let i=this.cache,r=e.length,s=mp(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ab,s[a])}function n3(n,e,t){let i=this.cache,r=e.length,s=mp(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||wb,s[a])}function i3(n){switch(n){case 5126:return k2;case 35664:return B2;case 35665:return z2;case 35666:return V2;case 35674:return G2;case 35675:return H2;case 35676:return W2;case 5124:case 35670:return X2;case 35667:case 35671:return q2;case 35668:case 35672:return Y2;case 35669:case 35673:return K2;case 5125:return $2;case 36294:return j2;case 36295:return Z2;case 36296:return J2;case 35678:case 36198:case 36298:case 36306:case 35682:return Q2;case 35679:case 36299:case 36307:return e3;case 35680:case 36300:case 36308:case 36293:return t3;case 36289:case 36303:case 36311:case 36292:return n3}}var y_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=O2(t.type)}},S_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i3(t.type)}},M_=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},__=/(\w+)(\])?(\[|\.)?/g;function ub(n,e){n.seq.push(e),n.map[e.id]=e}function r3(n,e,t){let i=n.name,r=i.length;for(__.lastIndex=0;;){let s=__.exec(i),a=__.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ub(t,c===void 0?new y_(o,n,e):new S_(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new M_(o),ub(t,f)),t=f}}}var sl=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);r3(o,l,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function hb(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var s3=37297,a3=0;function o3(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var fb=new ke;function l3(n){je._getMatrix(fb,je.workingColorSpace,n);let e=`mat3( ${fb.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case Dc:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function db(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+o3(n.getShaderSource(e),o)}else return s}function c3(n,e){let t=l3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var u3={[iu]:"Linear",[ru]:"Reinhard",[su]:"Cineon",[ka]:"ACESFilmic",[ou]:"AgX",[lu]:"Neutral",[au]:"Custom"};function h3(n,e){let t=u3[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var hp=new B;function f3(){je.getLuminanceCoefficients(hp);let n=hp.x.toFixed(4),e=hp.y.toFixed(4),t=hp.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Su).join(`
`)}function p3(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function m3(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Su(n){return n!==""}function pb(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mb(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var g3=/^[ \t]*#include +<([\w\d./]+)>/gm;function b_(n){return n.replace(g3,v3)}var _3=new Map;function v3(n,e){let t=qe[e];if(t===void 0){let i=_3.get(e);if(i!==void 0)t=qe[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return b_(t)}var x3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gb(n){return n.replace(x3,y3)}function y3(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _b(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var S3={[tu]:"SHADOWMAP_TYPE_PCF",[tl]:"SHADOWMAP_TYPE_VSM"};function M3(n){return S3[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var b3={[Ws]:"ENVMAP_TYPE_CUBE",[Ba]:"ENVMAP_TYPE_CUBE",[cu]:"ENVMAP_TYPE_CUBE_UV"};function T3(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":b3[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var w3={[Ba]:"ENVMAP_MODE_REFRACTION"};function E3(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":w3[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var A3={[Sd]:"ENVMAP_BLENDING_MULTIPLY",[O1]:"ENVMAP_BLENDING_MIX",[k1]:"ENVMAP_BLENDING_ADD"};function C3(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":A3[n.combine]||"ENVMAP_BLENDING_NONE"}function R3(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function P3(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=M3(t),c=T3(t),u=E3(t),f=C3(t),h=R3(t),p=d3(t),_=p3(s),v=r.createProgram(),g,d,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Su).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Su).join(`
`),d.length>0&&(d+=`
`)):(g=[_b(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Su).join(`
`),d=[_b(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?qe.tonemapping_pars_fragment:"",t.toneMapping!==er?h3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,c3("linearToOutputTexel",t.outputColorSpace),f3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Su).join(`
`)),a=b_(a),a=pb(a,t),a=mb(a,t),o=b_(o),o=pb(o,t),o=mb(o,t),a=gb(a),o=gb(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===o_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===o_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let x=m+g+a,S=m+d+o,T=hb(r,r.VERTEX_SHADER,x),b=hb(r,r.FRAGMENT_SHADER,S);r.attachShader(v,T),r.attachShader(v,b),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function E(P){if(n.debug.checkShaderErrors){let D=r.getProgramInfoLog(v)||"",V=r.getShaderInfoLog(T)||"",W=r.getShaderInfoLog(b)||"",L=D.trim(),N=V.trim(),O=W.trim(),$=!0,Q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,T,b);else{let re=db(r,T,"vertex"),pe=db(r,b,"fragment");Le("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+re+`
`+pe)}else L!==""?Ie("WebGLProgram: Program Info Log:",L):(N===""||O==="")&&(Q=!1);Q&&(P.diagnostics={runnable:$,programLog:L,vertexShader:{log:N,prefix:g},fragmentShader:{log:O,prefix:d}})}r.deleteShader(T),r.deleteShader(b),y=new sl(r,v),w=m3(r,v)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(v,s3)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a3++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=b,this}var I3=0,T_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new w_(e),t.set(e,i)),i}},w_=class{constructor(e){this.id=I3++,this.code=e,this.usedTimes=0}};function N3(n){return n===Ys||n===mu||n===gu}function D3(n,e,t,i,r,s){let a=new Uc,o=new T_,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,w,R,P,D,V){let W=P.fog,L=D.geometry,N=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,$=e.get(y.envMap||N,O),Q=$&&$.mapping===cu?$.image.height:null,re=p[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&Ie("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let pe=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ve=pe!==void 0?pe.length:0,He=0;L.morphAttributes.position!==void 0&&(He=1),L.morphAttributes.normal!==void 0&&(He=2),L.morphAttributes.color!==void 0&&(He=3);let Be,Pe,Z,he;if(re){let Ve=Mr[re];Be=Ve.vertexShader,Pe=Ve.fragmentShader}else Be=y.vertexShader,Pe=y.fragmentShader,o.update(y),Z=o.getVertexShaderID(y),he=o.getFragmentShaderID(y);let se=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Fe=D.isInstancedMesh===!0,Ne=D.isBatchedMesh===!0,ct=!!y.map,Ye=!!y.matcap,rt=!!$,ut=!!y.aoMap,Xe=!!y.lightMap,Ft=!!y.bumpMap,ht=!!y.normalMap,Un=!!y.displacementMap,F=!!y.emissiveMap,Ut=!!y.metalnessMap,$e=!!y.roughnessMap,at=y.anisotropy>0,ue=y.clearcoat>0,Tt=y.dispersion>0,C=y.iridescence>0,M=y.sheen>0,z=y.transmission>0,K=at&&!!y.anisotropyMap,ee=ue&&!!y.clearcoatMap,J=ue&&!!y.clearcoatNormalMap,ne=ue&&!!y.clearcoatRoughnessMap,q=C&&!!y.iridescenceMap,j=C&&!!y.iridescenceThicknessMap,_e=M&&!!y.sheenColorMap,Se=M&&!!y.sheenRoughnessMap,le=!!y.specularMap,ae=!!y.specularColorMap,Oe=!!y.specularIntensityMap,We=z&&!!y.transmissionMap,nt=z&&!!y.thicknessMap,I=!!y.gradientMap,oe=!!y.alphaMap,Y=y.alphaTest>0,xe=!!y.alphaHash,ce=!!y.extensions,te=er;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(te=n.toneMapping);let we={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:Be,fragmentShader:Pe,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:Ne,batchingColor:Ne&&D._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&D.instanceColor!==null,instancingMorph:Fe&&D.morphTexture!==null,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ct,matcap:Ye,envMap:rt,envMapMode:rt&&$.mapping,envMapCubeUVHeight:Q,aoMap:ut,lightMap:Xe,bumpMap:Ft,normalMap:ht,displacementMap:Un,emissiveMap:F,normalMapObjectSpace:ht&&y.normalMapType===V1,normalMapTangentSpace:ht&&y.normalMapType===_u,packedNormalMap:ht&&y.normalMapType===_u&&N3(y.normalMap.format),metalnessMap:Ut,roughnessMap:$e,anisotropy:at,anisotropyMap:K,clearcoat:ue,clearcoatMap:ee,clearcoatNormalMap:J,clearcoatRoughnessMap:ne,dispersion:Tt,iridescence:C,iridescenceMap:q,iridescenceThicknessMap:j,sheen:M,sheenColorMap:_e,sheenRoughnessMap:Se,specularMap:le,specularColorMap:ae,specularIntensityMap:Oe,transmission:z,transmissionMap:We,thicknessMap:nt,gradientMap:I,opaque:y.transparent===!1&&y.blending===Kr&&y.alphaToCoverage===!1,alphaMap:oe,alphaTest:Y,alphaHash:xe,combine:y.combine,mapUv:ct&&_(y.map.channel),aoMapUv:ut&&_(y.aoMap.channel),lightMapUv:Xe&&_(y.lightMap.channel),bumpMapUv:Ft&&_(y.bumpMap.channel),normalMapUv:ht&&_(y.normalMap.channel),displacementMapUv:Un&&_(y.displacementMap.channel),emissiveMapUv:F&&_(y.emissiveMap.channel),metalnessMapUv:Ut&&_(y.metalnessMap.channel),roughnessMapUv:$e&&_(y.roughnessMap.channel),anisotropyMapUv:K&&_(y.anisotropyMap.channel),clearcoatMapUv:ee&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:J&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:j&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(y.sheenRoughnessMap.channel),specularMapUv:le&&_(y.specularMap.channel),specularColorMapUv:ae&&_(y.specularColorMap.channel),specularIntensityMapUv:Oe&&_(y.specularIntensityMap.channel),transmissionMapUv:We&&_(y.transmissionMap.channel),thicknessMapUv:nt&&_(y.thicknessMap.channel),alphaMapUv:oe&&_(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ht||at),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(ct||oe),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&ht===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Re,skinning:D.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:He,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:te,decodeVideoTexture:ct&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===it,decodeVideoTextureEmissive:F&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yr,flipSided:y.side===vn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ce&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&y.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function g(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)w.push(R),w.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(d(w,y),m(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function d(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function m(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),y.push(a.mask)}function x(y){let w=p[y.type],R;if(w){let P=Mr[w];R=Jr.clone(P.uniforms)}else R=y.uniforms;return R}function S(y,w){let R=u.get(w);return R!==void 0?++R.usedTimes:(R=new P3(n,w,y,r),c.push(R),u.set(w,R)),R}function T(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function b(y){o.remove(y)}function E(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:x,acquireProgram:S,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:E}}function L3(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function F3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function vb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xb(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,_,v,g,d){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:p,material:_,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:d},n[e]=m):(m.id=h.id,m.object=h,m.geometry=p,m.material=_,m.materialVariant=a(h),m.groupOrder=v,m.renderOrder=h.renderOrder,m.z=g,m.group=d),e++,m}function l(h,p,_,v,g,d){let m=o(h,p,_,v,g,d);_.transmission>0?i.push(m):_.transparent===!0?r.push(m):t.push(m)}function c(h,p,_,v,g,d){let m=o(h,p,_,v,g,d);_.transmission>0?i.unshift(m):_.transparent===!0?r.unshift(m):t.unshift(m)}function u(h,p){t.length>1&&t.sort(h||F3),i.length>1&&i.sort(p||vb),r.length>1&&r.sort(p||vb)}function f(){for(let h=e,p=n.length;h<p;h++){let _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function U3(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new xb,n.set(i,[a])):r>=s.length?(a=new xb,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function O3(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ue};break;case"SpotLight":t={position:new B,direction:new B,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function k3(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var B3=0;function z3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function V3(n){let e=new O3,t=k3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let r=new B,s=new xt,a=new xt;function o(c){let u=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,_=0,v=0,g=0,d=0,m=0,x=0,S=0,T=0,b=0,E=0;c.sort(z3);for(let w=0,R=c.length;w<R;w++){let P=c[w],D=P.color,V=P.intensity,W=P.distance,L=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ys?L=P.shadow.map.texture:L=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=D.r*V,f+=D.g*V,h+=D.b*V;else if(P.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(P.sh.coefficients[N],V);E++}else if(P.isDirectionalLight){let N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let O=P.shadow,$=t.get(P);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=L,i.directionalShadowMatrix[p]=P.shadow.matrix,m++}i.directional[p]=N,p++}else if(P.isSpotLight){let N=e.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(D).multiplyScalar(V),N.distance=W,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,i.spot[v]=N;let O=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,O.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[v]=O.matrix,P.castShadow){let $=t.get(P);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=L,S++}v++}else if(P.isRectAreaLight){let N=e.get(P);N.color.copy(D).multiplyScalar(V),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=N,g++}else if(P.isPointLight){let N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){let O=P.shadow,$=t.get(P);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,$.shadowCameraNear=O.camera.near,$.shadowCameraFar=O.camera.far,i.pointShadow[_]=$,i.pointShadowMap[_]=L,i.pointShadowMatrix[_]=P.shadow.matrix,x++}i.point[_]=N,_++}else if(P.isHemisphereLight){let N=e.get(P);N.skyColor.copy(P.color).multiplyScalar(V),N.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[d]=N,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let y=i.hash;(y.directionalLength!==p||y.pointLength!==_||y.spotLength!==v||y.rectAreaLength!==g||y.hemiLength!==d||y.numDirectionalShadows!==m||y.numPointShadows!==x||y.numSpotShadows!==S||y.numSpotMaps!==T||y.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=E,y.directionalLength=p,y.pointLength=_,y.spotLength=v,y.rectAreaLength=g,y.hemiLength=d,y.numDirectionalShadows=m,y.numPointShadows=x,y.numSpotShadows=S,y.numSpotMaps=T,y.numLightProbes=E,i.version=B3++)}function l(c,u){let f=0,h=0,p=0,_=0,v=0,g=u.matrixWorldInverse;for(let d=0,m=c.length;d<m;d++){let x=c[d];if(x.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),f++}else if(x.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(x.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){let S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),h++}else if(x.isHemisphereLight){let S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function yb(n){let e=new V3(n),t=[],i=[],r=[];function s(h){f.camera=h,t.length=0,i.length=0,r.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function G3(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new yb(n),e.set(r,[o])):s>=a.length?(o=new yb(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var H3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W3=`uniform sampler2D shadow_pass;
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
}`,X3=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],q3=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Sb=new xt,yu=new B,v_=new B;function Y3(n,e,t){let i=new Qo,r=new De,s=new De,a=new Pt,o=new od,l=new ld,c={},u=t.maxTextureSize,f={[Yr]:vn,[vn]:Yr,[yr]:yr},h=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:H3,fragmentShader:W3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new Pn;_.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new yt(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let d=this.type;this.render=function(b,E,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===v1&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tu);let w=n.getRenderTarget(),R=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Li),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let V=d!==this.type;V&&E.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(L=>L.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,L=b.length;W<L;W++){let N=b[W],O=N.shadow;if(O===void 0){Ie("WebGLShadowMap:",N,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);let $=O.getFrameExtents();r.multiply($),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,O.mapSize.y=s.y));let Q=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=Q,O.map===null||V===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===tl){if(N.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Qt(r.x,r.y,{format:Ys,type:In,minFilter:_n,magFilter:_n,generateMipmaps:!1}),O.map.texture.name=N.name+".shadowMap",O.map.depthTexture=new jr(r.x,r.y,Fi),O.map.depthTexture.name=N.name+".shadowMapDepth",O.map.depthTexture.format=pr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un}else N.isPointLight?(O.map=new fp(r.x),O.map.depthTexture=new sd(r.x,tr)):(O.map=new Qt(r.x,r.y),O.map.depthTexture=new jr(r.x,r.y,tr)),O.map.depthTexture.name=N.name+".shadowMap",O.map.depthTexture.format=pr,this.type===tu?(O.map.depthTexture.compareFunction=Q?cp:lp,O.map.depthTexture.minFilter=_n,O.map.depthTexture.magFilter=_n):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un);O.camera.updateProjectionMatrix()}let re=O.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<re;pe++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,pe),n.clear();else{pe===0&&(n.setRenderTarget(O.map),n.clear());let ve=O.getViewport(pe);a.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),D.viewport(a)}if(N.isPointLight){let ve=O.camera,He=O.matrix,Be=N.distance||ve.far;Be!==ve.far&&(ve.far=Be,ve.updateProjectionMatrix()),yu.setFromMatrixPosition(N.matrixWorld),ve.position.copy(yu),v_.copy(ve.position),v_.add(X3[pe]),ve.up.copy(q3[pe]),ve.lookAt(v_),ve.updateMatrixWorld(),He.makeTranslation(-yu.x,-yu.y,-yu.z),Sb.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Sb,ve.coordinateSystem,ve.reversedDepth)}else O.updateMatrices(N);i=O.getFrustum(),S(E,y,O.camera,N,this.type)}O.isPointLightShadow!==!0&&this.type===tl&&m(O,y),O.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(w,R,P)};function m(b,E){let y=e.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Qt(r.x,r.y,{format:Ys,type:In})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(E,null,y,h,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(E,null,y,p,v,null)}function x(b,E,y,w){let R=null,P=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)R=P;else if(R=y.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let D=R.uuid,V=E.uuid,W=c[D];W===void 0&&(W={},c[D]=W);let L=W[V];L===void 0&&(L=R.clone(),W[V]=L,E.addEventListener("dispose",T)),R=L}if(R.visible=E.visible,R.wireframe=E.wireframe,w===tl?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:f[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=n.properties.get(R);D.light=y}return R}function S(b,E,y,w,R){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===tl)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let V=e.update(b),W=b.material;if(Array.isArray(W)){let L=V.groups;for(let N=0,O=L.length;N<O;N++){let $=L[N],Q=W[$.materialIndex];if(Q&&Q.visible){let re=x(b,Q,w,R);b.onBeforeShadow(n,b,E,y,V,re,$),n.renderBufferDirect(y,null,V,re,b,$),b.onAfterShadow(n,b,E,y,V,re,$)}}}else if(W.visible){let L=x(b,W,w,R);b.onBeforeShadow(n,b,E,y,V,L,null),n.renderBufferDirect(y,null,V,L,b,null),b.onAfterShadow(n,b,E,y,V,L,null)}}let D=b.children;for(let V=0,W=D.length;V<W;V++)S(D[V],E,y,w,R)}function T(b){b.target.removeEventListener("dispose",T);for(let y in c){let w=c[y],R=b.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function K3(n,e){function t(){let I=!1,oe=new Pt,Y=null,xe=new Pt(0,0,0,0);return{setMask:function(ce){Y!==ce&&!I&&(n.colorMask(ce,ce,ce,ce),Y=ce)},setLocked:function(ce){I=ce},setClear:function(ce,te,we,Ve,Gt){Gt===!0&&(ce*=Ve,te*=Ve,we*=Ve),oe.set(ce,te,we,Ve),xe.equals(oe)===!1&&(n.clearColor(ce,te,we,Ve),xe.copy(oe))},reset:function(){I=!1,Y=null,xe.set(-1,0,0,0)}}}function i(){let I=!1,oe=!1,Y=null,xe=null,ce=null;return{setReversed:function(te){if(oe!==te){let we=e.get("EXT_clip_control");te?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),oe=te;let Ve=ce;ce=null,this.setClear(Ve)}},getReversed:function(){return oe},setTest:function(te){te?se(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(te){Y!==te&&!I&&(n.depthMask(te),Y=te)},setFunc:function(te){if(oe&&(te=Z1[te]),xe!==te){switch(te){case Hf:n.depthFunc(n.NEVER);break;case Wf:n.depthFunc(n.ALWAYS);break;case Xf:n.depthFunc(n.LESS);break;case Da:n.depthFunc(n.LEQUAL);break;case qf:n.depthFunc(n.EQUAL);break;case Yf:n.depthFunc(n.GEQUAL);break;case Kf:n.depthFunc(n.GREATER);break;case $f:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=te}},setLocked:function(te){I=te},setClear:function(te){ce!==te&&(ce=te,oe&&(te=1-te),n.clearDepth(te))},reset:function(){I=!1,Y=null,xe=null,ce=null,oe=!1}}}function r(){let I=!1,oe=null,Y=null,xe=null,ce=null,te=null,we=null,Ve=null,Gt=null;return{setTest:function(ot){I||(ot?se(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(ot){oe!==ot&&!I&&(n.stencilMask(ot),oe=ot)},setFunc:function(ot,Ar,nr){(Y!==ot||xe!==Ar||ce!==nr)&&(n.stencilFunc(ot,Ar,nr),Y=ot,xe=Ar,ce=nr)},setOp:function(ot,Ar,nr){(te!==ot||we!==Ar||Ve!==nr)&&(n.stencilOp(ot,Ar,nr),te=ot,we=Ar,Ve=nr)},setLocked:function(ot){I=ot},setClear:function(ot){Gt!==ot&&(n.clearStencil(ot),Gt=ot)},reset:function(){I=!1,oe=null,Y=null,xe=null,ce=null,te=null,we=null,Ve=null,Gt=null}}}let s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap,u={},f={},h={},p=new WeakMap,_=[],v=null,g=!1,d=null,m=null,x=null,S=null,T=null,b=null,E=null,y=new Ue(0,0,0),w=0,R=!1,P=null,D=null,V=null,W=null,L=null,N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,$=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),O=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),O=$>=2);let re=null,pe={},ve=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),Be=new Pt().fromArray(ve),Pe=new Pt().fromArray(He);function Z(I,oe,Y,xe){let ce=new Uint8Array(4),te=n.createTexture();n.bindTexture(I,te),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<Y;we++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(oe+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return te}let he={};he[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(n.DEPTH_TEST),a.setFunc(Da),Ft(!1),ht(Z0),se(n.CULL_FACE),ut(Li);function se(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function Re(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Fe(I,oe){return h[I]!==oe?(n.bindFramebuffer(I,oe),h[I]=oe,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=oe),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ne(I,oe){let Y=_,xe=!1;if(I){Y=p.get(oe),Y===void 0&&(Y=[],p.set(oe,Y));let ce=I.textures;if(Y.length!==ce.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let te=0,we=ce.length;te<we;te++)Y[te]=n.COLOR_ATTACHMENT0+te;Y.length=ce.length,xe=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,xe=!0);xe&&n.drawBuffers(Y)}function ct(I){return v!==I?(n.useProgram(I),v=I,!0):!1}let Ye={[ks]:n.FUNC_ADD,[y1]:n.FUNC_SUBTRACT,[S1]:n.FUNC_REVERSE_SUBTRACT};Ye[M1]=n.MIN,Ye[b1]=n.MAX;let rt={[T1]:n.ZERO,[w1]:n.ONE,[E1]:n.SRC_COLOR,[Vf]:n.SRC_ALPHA,[N1]:n.SRC_ALPHA_SATURATE,[P1]:n.DST_COLOR,[C1]:n.DST_ALPHA,[A1]:n.ONE_MINUS_SRC_COLOR,[Gf]:n.ONE_MINUS_SRC_ALPHA,[I1]:n.ONE_MINUS_DST_COLOR,[R1]:n.ONE_MINUS_DST_ALPHA,[D1]:n.CONSTANT_COLOR,[L1]:n.ONE_MINUS_CONSTANT_COLOR,[F1]:n.CONSTANT_ALPHA,[U1]:n.ONE_MINUS_CONSTANT_ALPHA};function ut(I,oe,Y,xe,ce,te,we,Ve,Gt,ot){if(I===Li){g===!0&&(Re(n.BLEND),g=!1);return}if(g===!1&&(se(n.BLEND),g=!0),I!==x1){if(I!==d||ot!==R){if((m!==ks||T!==ks)&&(n.blendEquation(n.FUNC_ADD),m=ks,T=ks),ot)switch(I){case Kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nu:n.blendFunc(n.ONE,n.ONE);break;case J0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Q0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Le("WebGLState: Invalid blending: ",I);break}else switch(I){case Kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case J0:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Q0:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",I);break}x=null,S=null,b=null,E=null,y.set(0,0,0),w=0,d=I,R=ot}return}ce=ce||oe,te=te||Y,we=we||xe,(oe!==m||ce!==T)&&(n.blendEquationSeparate(Ye[oe],Ye[ce]),m=oe,T=ce),(Y!==x||xe!==S||te!==b||we!==E)&&(n.blendFuncSeparate(rt[Y],rt[xe],rt[te],rt[we]),x=Y,S=xe,b=te,E=we),(Ve.equals(y)===!1||Gt!==w)&&(n.blendColor(Ve.r,Ve.g,Ve.b,Gt),y.copy(Ve),w=Gt),d=I,R=!1}function Xe(I,oe){I.side===yr?Re(n.CULL_FACE):se(n.CULL_FACE);let Y=I.side===vn;oe&&(Y=!Y),Ft(Y),I.blending===Kr&&I.transparent===!1?ut(Li):ut(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);let xe=I.stencilWrite;o.setTest(xe),xe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),F(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(I){P!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),P=I)}function ht(I){I!==g1?(se(n.CULL_FACE),I!==D&&(I===Z0?n.cullFace(n.BACK):I===_1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),D=I}function Un(I){I!==V&&(O&&n.lineWidth(I),V=I)}function F(I,oe,Y){I?(se(n.POLYGON_OFFSET_FILL),(W!==oe||L!==Y)&&(W=oe,L=Y,a.getReversed()&&(oe=-oe),n.polygonOffset(oe,Y))):Re(n.POLYGON_OFFSET_FILL)}function Ut(I){I?se(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function $e(I){I===void 0&&(I=n.TEXTURE0+N-1),re!==I&&(n.activeTexture(I),re=I)}function at(I,oe,Y){Y===void 0&&(re===null?Y=n.TEXTURE0+N-1:Y=re);let xe=pe[Y];xe===void 0&&(xe={type:void 0,texture:void 0},pe[Y]=xe),(xe.type!==I||xe.texture!==oe)&&(re!==Y&&(n.activeTexture(Y),re=Y),n.bindTexture(I,oe||he[I]),xe.type=I,xe.texture=oe)}function ue(){let I=pe[re];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Tt(){try{n.compressedTexImage2D(...arguments)}catch(I){Le("WebGLState:",I)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(I){Le("WebGLState:",I)}}function M(){try{n.texSubImage2D(...arguments)}catch(I){Le("WebGLState:",I)}}function z(){try{n.texSubImage3D(...arguments)}catch(I){Le("WebGLState:",I)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(I){Le("WebGLState:",I)}}function ee(){try{n.compressedTexSubImage3D(...arguments)}catch(I){Le("WebGLState:",I)}}function J(){try{n.texStorage2D(...arguments)}catch(I){Le("WebGLState:",I)}}function ne(){try{n.texStorage3D(...arguments)}catch(I){Le("WebGLState:",I)}}function q(){try{n.texImage2D(...arguments)}catch(I){Le("WebGLState:",I)}}function j(){try{n.texImage3D(...arguments)}catch(I){Le("WebGLState:",I)}}function _e(I){return f[I]!==void 0?f[I]:n.getParameter(I)}function Se(I,oe){f[I]!==oe&&(n.pixelStorei(I,oe),f[I]=oe)}function le(I){Be.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Be.copy(I))}function ae(I){Pe.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Pe.copy(I))}function Oe(I,oe){let Y=c.get(oe);Y===void 0&&(Y=new WeakMap,c.set(oe,Y));let xe=Y.get(I);xe===void 0&&(xe=n.getUniformBlockIndex(oe,I.name),Y.set(I,xe))}function We(I,oe){let xe=c.get(oe).get(I);l.get(oe)!==xe&&(n.uniformBlockBinding(oe,xe,I.__bindingPointIndex),l.set(oe,xe))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},re=null,pe={},h={},p=new WeakMap,_=[],v=null,g=!1,d=null,m=null,x=null,S=null,T=null,b=null,E=null,y=new Ue(0,0,0),w=0,R=!1,P=null,D=null,V=null,W=null,L=null,Be.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:Re,bindFramebuffer:Fe,drawBuffers:Ne,useProgram:ct,setBlending:ut,setMaterial:Xe,setFlipSided:Ft,setCullFace:ht,setLineWidth:Un,setPolygonOffset:F,setScissorTest:Ut,activeTexture:$e,bindTexture:at,unbindTexture:ue,compressedTexImage2D:Tt,compressedTexImage3D:C,texImage2D:q,texImage3D:j,pixelStorei:Se,getParameter:_e,updateUBOMapping:Oe,uniformBlockBinding:We,texStorage2D:J,texStorage3D:ne,texSubImage2D:M,texSubImage3D:z,compressedTexSubImage2D:K,compressedTexSubImage3D:ee,scissor:le,viewport:ae,reset:nt}}function $3(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,u=new WeakMap,f=new Set,h,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return _?new OffscreenCanvas(C,M):Lc("canvas")}function g(C,M,z){let K=1,ee=Tt(C);if((ee.width>z||ee.height>z)&&(K=z/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let J=Math.floor(K*ee.width),ne=Math.floor(K*ee.height);h===void 0&&(h=v(J,ne));let q=M?v(J,ne):h;return q.width=J,q.height=ne,q.getContext("2d").drawImage(C,0,0,J,ne),Ie("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+ne+")."),q}else return"data"in C&&Ie("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function d(C){return C.generateMipmaps}function m(C){n.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(C,M,z,K,ee,J=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne;K&&(ne=e.get("EXT_texture_norm16"),ne||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=M;if(M===n.RED&&(z===n.FLOAT&&(q=n.R32F),z===n.HALF_FLOAT&&(q=n.R16F),z===n.UNSIGNED_BYTE&&(q=n.R8),z===n.UNSIGNED_SHORT&&ne&&(q=ne.R16_EXT),z===n.SHORT&&ne&&(q=ne.R16_SNORM_EXT)),M===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.R8UI),z===n.UNSIGNED_SHORT&&(q=n.R16UI),z===n.UNSIGNED_INT&&(q=n.R32UI),z===n.BYTE&&(q=n.R8I),z===n.SHORT&&(q=n.R16I),z===n.INT&&(q=n.R32I)),M===n.RG&&(z===n.FLOAT&&(q=n.RG32F),z===n.HALF_FLOAT&&(q=n.RG16F),z===n.UNSIGNED_BYTE&&(q=n.RG8),z===n.UNSIGNED_SHORT&&ne&&(q=ne.RG16_EXT),z===n.SHORT&&ne&&(q=ne.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RG8UI),z===n.UNSIGNED_SHORT&&(q=n.RG16UI),z===n.UNSIGNED_INT&&(q=n.RG32UI),z===n.BYTE&&(q=n.RG8I),z===n.SHORT&&(q=n.RG16I),z===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(q=n.RGB16UI),z===n.UNSIGNED_INT&&(q=n.RGB32UI),z===n.BYTE&&(q=n.RGB8I),z===n.SHORT&&(q=n.RGB16I),z===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),z===n.UNSIGNED_INT&&(q=n.RGBA32UI),z===n.BYTE&&(q=n.RGBA8I),z===n.SHORT&&(q=n.RGBA16I),z===n.INT&&(q=n.RGBA32I)),M===n.RGB&&(z===n.UNSIGNED_SHORT&&ne&&(q=ne.RGB16_EXT),z===n.SHORT&&ne&&(q=ne.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),M===n.RGBA){let j=J?Dc:je.getTransfer(ee);z===n.FLOAT&&(q=n.RGBA32F),z===n.HALF_FLOAT&&(q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(q=j===it?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&ne&&(q=ne.RGBA16_EXT),z===n.SHORT&&ne&&(q=ne.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function T(C,M){let z;return C?M===null||M===tr||M===il?z=n.DEPTH24_STENCIL8:M===Fi?z=n.DEPTH32F_STENCIL8:M===nl&&(z=n.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===tr||M===il?z=n.DEPTH_COMPONENT24:M===Fi?z=n.DEPTH_COMPONENT32F:M===nl&&(z=n.DEPTH_COMPONENT16),z}function b(C,M){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==un&&C.minFilter!==_n?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function E(C){let M=C.target;M.removeEventListener("dispose",E),w(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&f.delete(M)}function y(C){let M=C.target;M.removeEventListener("dispose",y),P(M)}function w(C){let M=i.get(C);if(M.__webglInit===void 0)return;let z=C.source,K=p.get(z);if(K){let ee=K[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(C),Object.keys(K).length===0&&p.delete(z)}i.remove(C)}function R(C){let M=i.get(C);n.deleteTexture(M.__webglTexture);let z=C.source,K=p.get(z);delete K[M.__cacheKey],a.memory.textures--}function P(C){let M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let ee=0;ee<M.__webglFramebuffer[K].length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[K][ee]);else n.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)n.deleteFramebuffer(M.__webglFramebuffer[K]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=C.textures;for(let K=0,ee=z.length;K<ee;K++){let J=i.get(z[K]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(z[K])}i.remove(C)}let D=0;function V(){D=0}function W(){return D}function L(C){D=C}function N(){let C=D;return C>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),D+=1,C}function O(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function $(C,M){let z=i.get(C);if(C.isVideoTexture&&at(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let K=C.image;if(K===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(z,C,M);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+M)}function Q(C,M){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Re(z,C,M);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+M)}function re(C,M){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Re(z,C,M);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+M)}function pe(C,M){let z=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Fe(z,C,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+M)}let ve={[jf]:n.REPEAT,[dr]:n.CLAMP_TO_EDGE,[Zf]:n.MIRRORED_REPEAT},He={[un]:n.NEAREST,[B1]:n.NEAREST_MIPMAP_NEAREST,[uu]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[Td]:n.LINEAR_MIPMAP_NEAREST,[Xs]:n.LINEAR_MIPMAP_LINEAR},Be={[G1]:n.NEVER,[Y1]:n.ALWAYS,[H1]:n.LESS,[lp]:n.LEQUAL,[W1]:n.EQUAL,[cp]:n.GEQUAL,[X1]:n.GREATER,[q1]:n.NOTEQUAL};function Pe(C,M){if(M.type===Fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===_n||M.magFilter===Td||M.magFilter===uu||M.magFilter===Xs||M.minFilter===_n||M.minFilter===Td||M.minFilter===uu||M.minFilter===Xs)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ve[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ve[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ve[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,He[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,He[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Be[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===un||M.minFilter!==uu&&M.minFilter!==Xs||M.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Z(C,M){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",E));let K=M.source,ee=p.get(K);ee===void 0&&(ee={},p.set(K,ee));let J=O(M);if(J!==C.__cacheKey){ee[J]===void 0&&(ee[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ee[J].usedTimes++;let ne=ee[C.__cacheKey];ne!==void 0&&(ee[C.__cacheKey].usedTimes--,ne.usedTimes===0&&R(M)),C.__cacheKey=J,C.__webglTexture=ee[J].texture}return z}function he(C,M,z){return Math.floor(Math.floor(C/z)/M)}function se(C,M,z,K){let J=C.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,z,K,M.data);else{J.sort((Se,le)=>Se.start-le.start);let ne=0;for(let Se=1;Se<J.length;Se++){let le=J[ne],ae=J[Se],Oe=le.start+le.count,We=he(ae.start,M.width,4),nt=he(le.start,M.width,4);ae.start<=Oe+1&&We===nt&&he(ae.start+ae.count-1,M.width,4)===We?le.count=Math.max(le.count,ae.start+ae.count-le.start):(++ne,J[ne]=ae)}J.length=ne+1;let q=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),_e=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Se=0,le=J.length;Se<le;Se++){let ae=J[Se],Oe=Math.floor(ae.start/4),We=Math.ceil(ae.count/4),nt=Oe%M.width,I=Math.floor(Oe/M.width),oe=We,Y=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,nt,I,oe,Y,z,K,M.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function Re(C,M,z){let K=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=n.TEXTURE_3D);let ee=Z(C,M),J=M.source;t.bindTexture(K,C.__webglTexture,n.TEXTURE0+z);let ne=i.get(J);if(J.version!==ne.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let Y=je.getPrimaries(je.workingColorSpace),xe=M.colorSpace===Zr?null:je.getPrimaries(M.colorSpace),ce=M.colorSpace===Zr||Y===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let j=g(M.image,!1,r.maxTextureSize);j=ue(M,j);let _e=s.convert(M.format,M.colorSpace),Se=s.convert(M.type),le=S(M.internalFormat,_e,Se,M.normalized,M.colorSpace,M.isVideoTexture);Pe(K,M);let ae,Oe=M.mipmaps,We=M.isVideoTexture!==!0,nt=ne.__version===void 0||ee===!0,I=J.dataReady,oe=b(M,j);if(M.isDepthTexture)le=T(M.format===qs,M.type),nt&&(We?t.texStorage2D(n.TEXTURE_2D,1,le,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,le,j.width,j.height,0,_e,Se,null));else if(M.isDataTexture)if(Oe.length>0){We&&nt&&t.texStorage2D(n.TEXTURE_2D,oe,le,Oe[0].width,Oe[0].height);for(let Y=0,xe=Oe.length;Y<xe;Y++)ae=Oe[Y],We?I&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ae.width,ae.height,_e,Se,ae.data):t.texImage2D(n.TEXTURE_2D,Y,le,ae.width,ae.height,0,_e,Se,ae.data);M.generateMipmaps=!1}else We?(nt&&t.texStorage2D(n.TEXTURE_2D,oe,le,j.width,j.height),I&&se(M,j,_e,Se)):t.texImage2D(n.TEXTURE_2D,0,le,j.width,j.height,0,_e,Se,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,le,Oe[0].width,Oe[0].height,j.depth);for(let Y=0,xe=Oe.length;Y<xe;Y++)if(ae=Oe[Y],M.format!==Ui)if(_e!==null)if(We){if(I)if(M.layerUpdates.size>0){let ce=f_(ae.width,ae.height,M.format,M.type);for(let te of M.layerUpdates){let we=ae.data.subarray(te*ce/ae.data.BYTES_PER_ELEMENT,(te+1)*ce/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,te,ae.width,ae.height,1,_e,we)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ae.width,ae.height,j.depth,_e,ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,le,ae.width,ae.height,j.depth,0,ae.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ae.width,ae.height,j.depth,_e,Se,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,le,ae.width,ae.height,j.depth,0,_e,Se,ae.data)}else{We&&nt&&t.texStorage2D(n.TEXTURE_2D,oe,le,Oe[0].width,Oe[0].height);for(let Y=0,xe=Oe.length;Y<xe;Y++)ae=Oe[Y],M.format!==Ui?_e!==null?We?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,ae.width,ae.height,_e,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,le,ae.width,ae.height,0,ae.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?I&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ae.width,ae.height,_e,Se,ae.data):t.texImage2D(n.TEXTURE_2D,Y,le,ae.width,ae.height,0,_e,Se,ae.data)}else if(M.isDataArrayTexture)if(We){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,le,j.width,j.height,j.depth),I)if(M.layerUpdates.size>0){let Y=f_(j.width,j.height,M.format,M.type);for(let xe of M.layerUpdates){let ce=j.data.subarray(xe*Y/j.data.BYTES_PER_ELEMENT,(xe+1)*Y/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xe,j.width,j.height,1,_e,Se,ce)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,_e,Se,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,le,j.width,j.height,j.depth,0,_e,Se,j.data);else if(M.isData3DTexture)We?(nt&&t.texStorage3D(n.TEXTURE_3D,oe,le,j.width,j.height,j.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,_e,Se,j.data)):t.texImage3D(n.TEXTURE_3D,0,le,j.width,j.height,j.depth,0,_e,Se,j.data);else if(M.isFramebufferTexture){if(nt)if(We)t.texStorage2D(n.TEXTURE_2D,oe,le,j.width,j.height);else{let Y=j.width,xe=j.height;for(let ce=0;ce<oe;ce++)t.texImage2D(n.TEXTURE_2D,ce,le,Y,xe,0,_e,Se,null),Y>>=1,xe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let Y=n.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),j.parentNode!==Y){Y.appendChild(j),f.add(M),Y.onpaint=Ve=>{let Gt=Ve.changedElements;for(let ot of f)Gt.includes(ot.image)&&(ot.needsUpdate=!0)},Y.requestPaint();return}let xe=0,ce=n.RGBA,te=n.RGBA,we=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,xe,ce,te,we,j),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(We&&nt){let Y=Tt(Oe[0]);t.texStorage2D(n.TEXTURE_2D,oe,le,Y.width,Y.height)}for(let Y=0,xe=Oe.length;Y<xe;Y++)ae=Oe[Y],We?I&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,_e,Se,ae):t.texImage2D(n.TEXTURE_2D,Y,le,_e,Se,ae);M.generateMipmaps=!1}else if(We){if(nt){let Y=Tt(j);t.texStorage2D(n.TEXTURE_2D,oe,le,Y.width,Y.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Se,j)}else t.texImage2D(n.TEXTURE_2D,0,le,_e,Se,j);d(M)&&m(K),ne.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Fe(C,M,z){if(M.image.length!==6)return;let K=Z(C,M),ee=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);let J=i.get(ee);if(ee.version!==J.__version||K===!0){t.activeTexture(n.TEXTURE0+z);let ne=je.getPrimaries(je.workingColorSpace),q=M.colorSpace===Zr?null:je.getPrimaries(M.colorSpace),j=M.colorSpace===Zr||ne===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let _e=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,le=[];for(let te=0;te<6;te++)!_e&&!Se?le[te]=g(M.image[te],!0,r.maxCubemapSize):le[te]=Se?M.image[te].image:M.image[te],le[te]=ue(M,le[te]);let ae=le[0],Oe=s.convert(M.format,M.colorSpace),We=s.convert(M.type),nt=S(M.internalFormat,Oe,We,M.normalized,M.colorSpace),I=M.isVideoTexture!==!0,oe=J.__version===void 0||K===!0,Y=ee.dataReady,xe=b(M,ae);Pe(n.TEXTURE_CUBE_MAP,M);let ce;if(_e){I&&oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,nt,ae.width,ae.height);for(let te=0;te<6;te++){ce=le[te].mipmaps;for(let we=0;we<ce.length;we++){let Ve=ce[we];M.format!==Ui?Oe!==null?I?Y&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Ve.width,Ve.height,Oe,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,nt,Ve.width,Ve.height,0,Ve.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Ve.width,Ve.height,Oe,We,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,nt,Ve.width,Ve.height,0,Oe,We,Ve.data)}}}else{if(ce=M.mipmaps,I&&oe){ce.length>0&&xe++;let te=Tt(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,nt,te.width,te.height)}for(let te=0;te<6;te++)if(Se){I?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,le[te].width,le[te].height,Oe,We,le[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,nt,le[te].width,le[te].height,0,Oe,We,le[te].data);for(let we=0;we<ce.length;we++){let Gt=ce[we].image[te].image;I?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,Gt.width,Gt.height,Oe,We,Gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,nt,Gt.width,Gt.height,0,Oe,We,Gt.data)}}else{I?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Oe,We,le[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,nt,Oe,We,le[te]);for(let we=0;we<ce.length;we++){let Ve=ce[we];I?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,Oe,We,Ve.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,nt,Oe,We,Ve.image[te])}}}d(M)&&m(n.TEXTURE_CUBE_MAP),J.__version=ee.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ne(C,M,z,K,ee,J){let ne=s.convert(z.format,z.colorSpace),q=s.convert(z.type),j=S(z.internalFormat,ne,q,z.normalized,z.colorSpace),_e=i.get(M),Se=i.get(z);if(Se.__renderTarget=M,!_e.__hasExternalTextures){let le=Math.max(1,M.width>>J),ae=Math.max(1,M.height>>J);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,J,j,le,ae,M.depth,0,ne,q,null):t.texImage2D(ee,J,j,le,ae,0,ne,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),$e(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ee,Se.__webglTexture,0,Ut(M)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ee,Se.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(C,M,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){let K=M.depthTexture,ee=K&&K.isDepthTexture?K.type:null,J=T(M.stencilBuffer,ee),ne=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;$e(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut(M),J,M.width,M.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut(M),J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,C)}else{let K=M.textures;for(let ee=0;ee<K.length;ee++){let J=K[ee],ne=s.convert(J.format,J.colorSpace),q=s.convert(J.type),j=S(J.internalFormat,ne,q,J.normalized,J.colorSpace);$e(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut(M),j,M.width,M.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut(M),j,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,j,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(C,M,z){let K=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(M.depthTexture);if(ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,M.depthTexture.addEventListener("dispose",E)),ee.__webglTexture===void 0){ee.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,M.depthTexture);let _e=s.convert(M.depthTexture.format),Se=s.convert(M.depthTexture.type),le;M.depthTexture.format===pr?le=n.DEPTH_COMPONENT24:M.depthTexture.format===qs&&(le=n.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,le,M.width,M.height,0,_e,Se,null)}}else $(M.depthTexture,0);let J=ee.__webglTexture,ne=Ut(M),q=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,j=M.depthTexture.format===qs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===pr)$e(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,q,J,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,j,q,J,0);else if(M.depthTexture.format===qs)$e(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,q,J,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,j,q,J,0);else throw new Error("Unknown depthTexture format")}function rt(C){let M=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let K=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){let ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=K}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let K=0;K<6;K++)Ye(M.__webglFramebuffer[K],C,K);else{let K=C.texture.mipmaps;K&&K.length>0?Ye(M.__webglFramebuffer[0],C,0):Ye(M.__webglFramebuffer,C,0)}else if(z){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=n.createRenderbuffer(),ct(M.__webglDepthbuffer[K],C,!1);else{let ee=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,J)}}else{let K=C.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ct(M.__webglDepthbuffer,C,!1);else{let ee=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(C,M,z){let K=i.get(C);M!==void 0&&Ne(K.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&rt(C)}function Xe(C){let M=C.texture,z=i.get(C),K=i.get(M);C.addEventListener("dispose",y);let ee=C.textures,J=C.isWebGLCubeRenderTarget===!0,ne=ee.length>1;if(ne||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=M.version,a.memory.textures++),J){z.__webglFramebuffer=[];for(let q=0;q<6;q++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[q]=[];for(let j=0;j<M.mipmaps.length;j++)z.__webglFramebuffer[q][j]=n.createFramebuffer()}else z.__webglFramebuffer[q]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let q=0;q<M.mipmaps.length;q++)z.__webglFramebuffer[q]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ne)for(let q=0,j=ee.length;q<j;q++){let _e=i.get(ee[q]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&$e(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let q=0;q<ee.length;q++){let j=ee[q];z.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[q]);let _e=s.convert(j.format,j.colorSpace),Se=s.convert(j.type),le=S(j.internalFormat,_e,Se,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),ae=Ut(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,le,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,z.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ct(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,M);for(let q=0;q<6;q++)if(M.mipmaps&&M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)Ne(z.__webglFramebuffer[q][j],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,j);else Ne(z.__webglFramebuffer[q],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);d(M)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){for(let q=0,j=ee.length;q<j;q++){let _e=ee[q],Se=i.get(_e),le=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Se.__webglTexture),Pe(le,_e),Ne(z.__webglFramebuffer,C,_e,n.COLOR_ATTACHMENT0+q,le,0),d(_e)&&m(le)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,K.__webglTexture),Pe(q,M),M.mipmaps&&M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)Ne(z.__webglFramebuffer[j],C,M,n.COLOR_ATTACHMENT0,q,j);else Ne(z.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,q,0);d(M)&&m(q),t.unbindTexture()}C.depthBuffer&&rt(C)}function Ft(C){let M=C.textures;for(let z=0,K=M.length;z<K;z++){let ee=M[z];if(d(ee)){let J=x(C),ne=i.get(ee).__webglTexture;t.bindTexture(J,ne),m(J),t.unbindTexture()}}}let ht=[],Un=[];function F(C){if(C.samples>0){if($e(C)===!1){let M=C.textures,z=C.width,K=C.height,ee=n.COLOR_BUFFER_BIT,J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=i.get(C),q=M.length>1;if(q)for(let _e=0;_e<M.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer);let j=C.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ne.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ne.__webglColorRenderbuffer[_e]);let Se=i.get(M[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Se,0)}n.blitFramebuffer(0,0,z,K,0,0,z,K,ee,n.NEAREST),l===!0&&(ht.length=0,Un.length=0,ht.push(n.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ht.push(J),Un.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Un)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let _e=0;_e<M.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,ne.__webglColorRenderbuffer[_e]);let Se=i.get(M[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ut(C){return Math.min(r.maxSamples,C.samples)}function $e(C){let M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function at(C){let M=a.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function ue(C,M){let z=C.colorSpace,K=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Nc&&z!==Zr&&(je.getTransfer(z)===it?(K!==Ui||ee!==Qn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",z)),M}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=V,this.getTextureUnits=W,this.setTextureUnits=L,this.setTexture2D=$,this.setTexture2DArray=Q,this.setTexture3D=re,this.setTextureCube=pe,this.rebindTextures=ut,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function j3(n,e){function t(i,r=Zr){let s,a=je.getTransfer(r);if(i===Qn)return n.UNSIGNED_BYTE;if(i===Ed)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ad)return n.UNSIGNED_SHORT_5_5_5_1;if(i===i_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===r_)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===t_)return n.BYTE;if(i===n_)return n.SHORT;if(i===nl)return n.UNSIGNED_SHORT;if(i===wd)return n.INT;if(i===tr)return n.UNSIGNED_INT;if(i===Fi)return n.FLOAT;if(i===In)return n.HALF_FLOAT;if(i===s_)return n.ALPHA;if(i===a_)return n.RGB;if(i===Ui)return n.RGBA;if(i===pr)return n.DEPTH_COMPONENT;if(i===qs)return n.DEPTH_STENCIL;if(i===Cd)return n.RED;if(i===Rd)return n.RED_INTEGER;if(i===Ys)return n.RG;if(i===Pd)return n.RG_INTEGER;if(i===Id)return n.RGBA_INTEGER;if(i===hu||i===fu||i===du||i===pu)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===hu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===du)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===hu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===du)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nd||i===Dd||i===Ld||i===Fd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ld)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ud||i===Od||i===kd||i===Bd||i===zd||i===mu||i===Vd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ud||i===Od)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===kd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Bd)return s.COMPRESSED_R11_EAC;if(i===zd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===mu)return s.COMPRESSED_RG11_EAC;if(i===Vd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Gd||i===Hd||i===Wd||i===Xd||i===qd||i===Yd||i===Kd||i===$d||i===jd||i===Zd||i===Jd||i===Qd||i===ep||i===tp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$d)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ep)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tp)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===np||i===ip||i===rp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===np)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ip)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sp||i===ap||i===gu||i===op)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===sp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ap)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===op)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===il?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Z3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J3=`
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

}`,E_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Xc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new It({vertexShader:Z3,fragmentShader:J3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new Yc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},A_=class extends mr{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null,v=typeof XRWebGLBinding<"u",g=new E_,d={},m=t.getContextAttributes(),x=null,S=null,T=[],b=[],E=new De,y=null,w=new gn;w.viewport=new Pt;let R=new gn;R.viewport=new Pt;let P=[w,R],D=new yd,V=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=T[Z];return he===void 0&&(he=new Jo,T[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=T[Z];return he===void 0&&(he=new Jo,T[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=T[Z];return he===void 0&&(he=new Jo,T[Z]=he),he.getHandSpace()};function L(Z){let he=b.indexOf(Z.inputSource);if(he===-1)return;let se=T[he];se!==void 0&&(se.update(Z.inputSource,Z.frame,c||a),se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function N(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",O);for(let Z=0;Z<T.length;Z++){let he=b[Z];he!==null&&(b[Z]=null,T[Z].disconnect(he))}V=null,W=null,g.reset();for(let Z in d)delete d[Z];e.setRenderTarget(x),p=null,h=null,f=null,r=null,S=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",N),r.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Re=null,Fe=null;m.depth&&(Fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?qs:pr,Re=m.stencil?il:tr);let Ne={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Qt(h.textureWidth,h.textureHeight,{format:Ui,type:Qn,depthTexture:new jr(h.textureWidth,h.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Qt(p.framebufferWidth,p.framebufferHeight,{format:Ui,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(Z){for(let he=0;he<Z.removed.length;he++){let se=Z.removed[he],Re=b.indexOf(se);Re>=0&&(b[Re]=null,T[Re].disconnect(se))}for(let he=0;he<Z.added.length;he++){let se=Z.added[he],Re=b.indexOf(se);if(Re===-1){for(let Ne=0;Ne<T.length;Ne++)if(Ne>=b.length){b.push(se),Re=Ne;break}else if(b[Ne]===null){b[Ne]=se,Re=Ne;break}if(Re===-1)break}let Fe=T[Re];Fe&&Fe.connect(se)}}let $=new B,Q=new B;function re(Z,he,se){$.setFromMatrixPosition(he.matrixWorld),Q.setFromMatrixPosition(se.matrixWorld);let Re=$.distanceTo(Q),Fe=he.projectionMatrix.elements,Ne=se.projectionMatrix.elements,ct=Fe[14]/(Fe[10]-1),Ye=Fe[14]/(Fe[10]+1),rt=(Fe[9]+1)/Fe[5],ut=(Fe[9]-1)/Fe[5],Xe=(Fe[8]-1)/Fe[0],Ft=(Ne[8]+1)/Ne[0],ht=ct*Xe,Un=ct*Ft,F=Re/(-Xe+Ft),Ut=F*-Xe;if(he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ut),Z.translateZ(F),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Fe[10]===-1)Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let $e=ct+F,at=Ye+F,ue=ht-Ut,Tt=Un+(Re-Ut),C=rt*Ye/at*$e,M=ut*Ye/at*$e;Z.projectionMatrix.makePerspective(ue,Tt,C,M,$e,at),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function pe(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let he=Z.near,se=Z.far;g.texture!==null&&(g.depthNear>0&&(he=g.depthNear),g.depthFar>0&&(se=g.depthFar)),D.near=R.near=w.near=he,D.far=R.far=w.far=se,(V!==D.near||W!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),V=D.near,W=D.far),D.layers.mask=Z.layers.mask|6,w.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;let Re=Z.parent,Fe=D.cameras;pe(D,Re);for(let Ne=0;Ne<Fe.length;Ne++)pe(Fe[Ne],Re);Fe.length===2?re(D,w,R):D.projectionMatrix.copy(w.projectionMatrix),ve(Z,D,Re)};function ve(Z,he,se){se===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ed*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(Z){return d[Z]};let He=null;function Be(Z,he){if(u=he.getViewerPose(c||a),_=he,u!==null){let se=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Re=!1;se.length!==D.cameras.length&&(D.cameras.length=0,Re=!0);for(let Ye=0;Ye<se.length;Ye++){let rt=se[Ye],ut=null;if(p!==null)ut=p.getViewport(rt);else{let Ft=f.getViewSubImage(h,rt);ut=Ft.viewport,Ye===0&&(e.setRenderTargetTextures(S,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(S))}let Xe=P[Ye];Xe===void 0&&(Xe=new gn,Xe.layers.enable(Ye),Xe.viewport=new Pt,P[Ye]=Xe),Xe.matrix.fromArray(rt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(rt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ut.x,ut.y,ut.width,ut.height),Ye===0&&(D.matrix.copy(Xe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Re===!0&&D.cameras.push(Xe)}let Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let Ye=f.getDepthInformation(se[0]);Ye&&Ye.isValid&&Ye.texture&&g.init(Ye,r.renderState)}if(Fe&&Fe.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Ye=0;Ye<se.length;Ye++){let rt=se[Ye].camera;if(rt){let ut=d[rt];ut||(ut=new Xc,d[rt]=ut);let Xe=f.getCameraImage(rt);ut.sourceTexture=Xe}}}}for(let se=0;se<T.length;se++){let Re=b[se],Fe=T[se];Re!==null&&Fe!==void 0&&Fe.update(Re,he,c||a)}He&&He(Z,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}let Pe=new Mb;Pe.setAnimationLoop(Be),this.setAnimationLoop=function(Z){He=Z},this.dispose=function(){}}},Q3=new xt,Cb=new ke;Cb.set(-1,0,0,0,1,0,0,0,1);function eI(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,c_(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,m,x,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,S)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),v(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,m,x):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===vn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===vn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let m=e.get(d),x=m.envMap,S=m.envMapRotation;x&&(g.envMap.value=x,g.envMapRotation.value.setFromMatrix4(Q3.makeRotationFromEuler(S)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Cb),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,m,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*m,g.scale.value=x*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,m){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===vn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function v(g,d){let m=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tI(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){let S=x.program;i.uniformBlockBinding(m,S)}function c(m,x){let S=r[m.id];S===void 0&&(_(m),S=u(m),r[m.id]=S,m.addEventListener("dispose",g));let T=x.program;i.updateUBOMapping(m,T);let b=e.render.frame;s[m.id]!==b&&(h(m),s[m.id]=b)}function u(m){let x=f();m.__bindingPointIndex=x;let S=n.createBuffer(),T=m.__size,b=m.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function f(){for(let m=0;m<o;m++)if(a.indexOf(m)===-1)return a.push(m),m;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){let x=r[m.id],S=m.uniforms,T=m.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let b=0,E=S.length;b<E;b++){let y=Array.isArray(S[b])?S[b]:[S[b]];for(let w=0,R=y.length;w<R;w++){let P=y[w];if(p(P,b,w,T)===!0){let D=P.__offset,V=Array.isArray(P.value)?P.value:[P.value],W=0;for(let L=0;L<V.length;L++){let N=V[L],O=v(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,D+W,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):ArrayBuffer.isView(N)?P.__data.set(new N.constructor(N.buffer,N.byteOffset,P.__data.length)):(N.toArray(P.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(m,x,S,T){let b=m.value,E=x+"_"+S;if(T[E]===void 0)return typeof b=="number"||typeof b=="boolean"?T[E]=b:ArrayBuffer.isView(b)?T[E]=b.slice():T[E]=b.clone(),!0;{let y=T[E];if(typeof b=="number"||typeof b=="boolean"){if(y!==b)return T[E]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(y.equals(b)===!1)return y.copy(b),!0}}return!1}function _(m){let x=m.uniforms,S=0,T=16;for(let E=0,y=x.length;E<y;E++){let w=Array.isArray(x[E])?x[E]:[x[E]];for(let R=0,P=w.length;R<P;R++){let D=w[R],V=Array.isArray(D.value)?D.value:[D.value];for(let W=0,L=V.length;W<L;W++){let N=V[W],O=v(N),$=S%T,Q=$%O.boundary,re=$+Q;S+=Q,re!==0&&T-re<O.storage&&(S+=T-re),D.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=O.storage}}}let b=S%T;return b>0&&(S+=T-b),m.__size=S,m.__cache={},this}function v(m){let x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(x.boundary=16,x.storage=m.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",m),x}function g(m){let x=m.target;x.removeEventListener("dispose",g);let S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(let m in r)n.deleteBuffer(r[m]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}var nI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sr=null;function iI(){return Sr===null&&(Sr=new zc(nI,16,16,Ys,In),Sr.name="DFG_LUT",Sr.minFilter=_n,Sr.magFilter=_n,Sr.wrapS=dr,Sr.wrapT=dr,Sr.generateMipmaps=!1,Sr.needsUpdate=!0),Sr}var dp=class{constructor(e={}){let{canvas:t=K1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Qn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let v=p,g=new Set([Id,Pd,Rd]),d=new Set([Qn,tr,nl,il,Ed,Ad]),m=new Uint32Array(4),x=new Int32Array(4),S=new B,T=null,b=null,E=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,D=null;this._outputColorSpace=gi;let V=0,W=0,L=null,N=-1,O=null,$=new Pt,Q=new Pt,re=null,pe=new Ue(0),ve=0,He=t.width,Be=t.height,Pe=1,Z=null,he=null,se=new Pt(0,0,He,Be),Re=new Pt(0,0,He,Be),Fe=!1,Ne=new Qo,ct=!1,Ye=!1,rt=new xt,ut=new B,Xe=new Pt,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ht=!1;function Un(){return L===null?Pe:1}let F=i;function Ut(A,U){return t.getContext(A,U)}try{let A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),F===null){let U="webgl2";if(F=Ut(U,A),F===null)throw Ut(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Le("WebGLRenderer: "+A.message),A}let $e,at,ue,Tt,C,M,z,K,ee,J,ne,q,j,_e,Se,le,ae,Oe,We,nt,I,oe,Y;function xe(){$e=new u2(F),$e.init(),I=new j3(F,$e),at=new n2(F,$e,e,I),ue=new K3(F,$e),at.reversedDepthBuffer&&h&&ue.buffers.depth.setReversed(!0),Tt=new d2(F),C=new L3,M=new $3(F,$e,ue,C,at,I,Tt),z=new c2(R),K=new _C(F),oe=new e2(F,K),ee=new h2(F,K,Tt,oe),J=new m2(F,ee,K,oe,Tt),Oe=new p2(F,at,M),Se=new i2(C),ne=new D3(R,z,$e,at,oe,Se),q=new eI(R,C),j=new U3,_e=new G3($e),ae=new QP(R,z,ue,J,_,l),le=new Y3(R,J,at),Y=new tI(F,Tt,at,ue),We=new t2(F,$e,Tt),nt=new f2(F,$e,Tt),Tt.programs=ne.programs,R.capabilities=at,R.extensions=$e,R.properties=C,R.renderLists=j,R.shadowMap=le,R.state=ue,R.info=Tt}xe(),v!==Qn&&(w=new _2(v,t.width,t.height,r,s));let ce=new A_(R,F);this.xr=ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let A=$e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=$e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(A){A!==void 0&&(Pe=A,this.setSize(He,Be,!1))},this.getSize=function(A){return A.set(He,Be)},this.setSize=function(A,U,X=!0){if(ce.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}He=A,Be=U,t.width=Math.floor(A*Pe),t.height=Math.floor(U*Pe),X===!0&&(t.style.width=A+"px",t.style.height=U+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(He*Pe,Be*Pe).floor()},this.setDrawingBufferSize=function(A,U,X){He=A,Be=U,Pe=X,t.width=Math.floor(A*X),t.height=Math.floor(U*X),this.setViewport(0,0,A,U)},this.setEffects=function(A){if(v===Qn){Le("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let U=0;U<A.length;U++)if(A[U].isOutputPass===!0){Ie("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy($)},this.getViewport=function(A){return A.copy(se)},this.setViewport=function(A,U,X,G){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,U,X,G),ue.viewport($.copy(se).multiplyScalar(Pe).round())},this.getScissor=function(A){return A.copy(Re)},this.setScissor=function(A,U,X,G){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,U,X,G),ue.scissor(Q.copy(Re).multiplyScalar(Pe).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(A){ue.setScissorTest(Fe=A)},this.setOpaqueSort=function(A){Z=A},this.setTransparentSort=function(A){he=A},this.getClearColor=function(A){return A.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(A=!0,U=!0,X=!0){let G=0;if(A){let H=!1;if(L!==null){let ge=L.texture.format;H=g.has(ge)}if(H){let ge=L.texture.type,Me=d.has(ge),me=ae.getClearColor(),Te=ae.getClearAlpha(),Ee=me.r,Ge=me.g,Ke=me.b;Me?(m[0]=Ee,m[1]=Ge,m[2]=Ke,m[3]=Te,F.clearBufferuiv(F.COLOR,0,m)):(x[0]=Ee,x[1]=Ge,x[2]=Ke,x[3]=Te,F.clearBufferiv(F.COLOR,0,x))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),ae.dispose(),j.dispose(),_e.dispose(),C.dispose(),z.dispose(),J.dispose(),oe.dispose(),Y.dispose(),ne.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",bv),ce.removeEventListener("sessionend",Tv),sa.stop()};function te(A){A.preventDefault(),l_("WebGLRenderer: Context Lost."),P=!0}function we(){l_("WebGLRenderer: Context Restored."),P=!1;let A=Tt.autoReset,U=le.enabled,X=le.autoUpdate,G=le.needsUpdate,H=le.type;xe(),Tt.autoReset=A,le.enabled=U,le.autoUpdate=X,le.needsUpdate=G,le.type=H}function Ve(A){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Gt(A){let U=A.target;U.removeEventListener("dispose",Gt),ot(U)}function ot(A){Ar(A),C.remove(A)}function Ar(A){let U=C.get(A).programs;U!==void 0&&(U.forEach(function(X){ne.releaseProgram(X)}),A.isShaderMaterial&&ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,X,G,H,ge){U===null&&(U=Ft);let Me=H.isMesh&&H.matrixWorld.determinant()<0,me=GT(A,U,X,G,H);ue.setMaterial(G,Me);let Te=X.index,Ee=1;if(G.wireframe===!0){if(Te=ee.getWireframeAttribute(X),Te===void 0)return;Ee=2}let Ge=X.drawRange,Ke=X.attributes.position,Ce=Ge.start*Ee,lt=(Ge.start+Ge.count)*Ee;ge!==null&&(Ce=Math.max(Ce,ge.start*Ee),lt=Math.min(lt,(ge.start+ge.count)*Ee)),Te!==null?(Ce=Math.max(Ce,0),lt=Math.min(lt,Te.count)):Ke!=null&&(Ce=Math.max(Ce,0),lt=Math.min(lt,Ke.count));let Ht=lt-Ce;if(Ht<0||Ht===1/0)return;oe.setup(H,G,me,X,Te);let Ot,ft=We;if(Te!==null&&(Ot=K.get(Te),ft=nt,ft.setIndex(Ot)),H.isMesh)G.wireframe===!0?(ue.setLineWidth(G.wireframeLinewidth*Un()),ft.setMode(F.LINES)):ft.setMode(F.TRIANGLES);else if(H.isLine){let Sn=G.linewidth;Sn===void 0&&(Sn=1),ue.setLineWidth(Sn*Un()),H.isLineSegments?ft.setMode(F.LINES):H.isLineLoop?ft.setMode(F.LINE_LOOP):ft.setMode(F.LINE_STRIP)}else H.isPoints?ft.setMode(F.POINTS):H.isSprite&&ft.setMode(F.TRIANGLES);if(H.isBatchedMesh)if($e.get("WEBGL_multi_draw"))ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Sn=H._multiDrawStarts,ye=H._multiDrawCounts,si=H._multiDrawCount,et=Te?K.get(Te).bytesPerElement:1,bi=C.get(G).currentProgram.getUniforms();for(let ir=0;ir<si;ir++)bi.setValue(F,"_gl_DrawID",ir),ft.render(Sn[ir]/et,ye[ir])}else if(H.isInstancedMesh)ft.renderInstances(Ce,Ht,H.count);else if(X.isInstancedBufferGeometry){let Sn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ye=Math.min(X.instanceCount,Sn);ft.renderInstances(Ce,Ht,ye)}else ft.render(Ce,Ht)};function nr(A,U,X){A.transparent===!0&&A.side===yr&&A.forceSinglePass===!1?(A.side=vn,A.needsUpdate=!0,Bu(A,U,X),A.side=Yr,A.needsUpdate=!0,Bu(A,U,X),A.side=yr):Bu(A,U,X)}this.compile=function(A,U,X=null){X===null&&(X=A),b=_e.get(X),b.init(U),y.push(b),X.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),A!==X&&A.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights();let G=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ge=H.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){let me=ge[Me];nr(me,X,H),G.add(me)}else nr(ge,X,H),G.add(ge)}),b=y.pop(),G},this.compileAsync=function(A,U,X=null){let G=this.compile(A,U,X);return new Promise(H=>{function ge(){if(G.forEach(function(Me){C.get(Me).currentProgram.isReady()&&G.delete(Me)}),G.size===0){H(A);return}setTimeout(ge,10)}$e.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let kp=null;function zT(A){kp&&kp(A)}function bv(){sa.stop()}function Tv(){sa.start()}let sa=new Mb;sa.setAnimationLoop(zT),typeof self<"u"&&sa.setContext(self),this.setAnimationLoop=function(A){kp=A,ce.setAnimationLoop(A),A===null?sa.stop():sa.start()},ce.addEventListener("sessionstart",bv),ce.addEventListener("sessionend",Tv),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(A,U);let X=ce.enabled===!0&&ce.isPresenting===!0,G=w!==null&&(L===null||X)&&w.begin(R,L);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,U,L),b=_e.get(A,y.length),b.init(U),b.state.textureUnits=M.getTextureUnits(),y.push(b),rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ne.setFromProjectionMatrix(rt,Qi,U.reversedDepth),Ye=this.localClippingEnabled,ct=Se.init(this.clippingPlanes,Ye),T=j.get(A,E.length),T.init(),E.push(T),ce.enabled===!0&&ce.isPresenting===!0){let Me=R.xr.getDepthSensingMesh();Me!==null&&Bp(Me,U,-1/0,R.sortObjects)}Bp(A,U,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(Z,he),ht=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ht&&ae.addToRenderList(T,A),this.info.render.frame++,ct===!0&&Se.beginShadows();let H=b.state.shadowsArray;if(le.render(H,A,U),ct===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&w.hasRenderPass())===!1){let Me=T.opaque,me=T.transmissive;if(b.setupLights(),U.isArrayCamera){let Te=U.cameras;if(me.length>0)for(let Ee=0,Ge=Te.length;Ee<Ge;Ee++){let Ke=Te[Ee];Ev(Me,me,A,Ke)}ht&&ae.render(A);for(let Ee=0,Ge=Te.length;Ee<Ge;Ee++){let Ke=Te[Ee];wv(T,A,Ke,Ke.viewport)}}else me.length>0&&Ev(Me,me,A,U),ht&&ae.render(A),wv(T,A,U)}L!==null&&W===0&&(M.updateMultisampleRenderTarget(L),M.updateRenderTargetMipmap(L)),G&&w.end(R),A.isScene===!0&&A.onAfterRender(R,A,U),oe.resetDefaultState(),N=-1,O=null,y.pop(),y.length>0?(b=y[y.length-1],M.setTextureUnits(b.state.textureUnits),ct===!0&&Se.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?T=E[E.length-1]:T=null,D!==null&&D.renderEnd()};function Bp(A,U,X,G){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLightProbeGrid)b.pushLightProbeGrid(A);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ne.intersectsSprite(A)){G&&Xe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(rt);let Me=J.update(A),me=A.material;me.visible&&T.push(A,Me,me,X,Xe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ne.intersectsObject(A))){let Me=J.update(A),me=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Xe.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Xe.copy(Me.boundingSphere.center)),Xe.applyMatrix4(A.matrixWorld).applyMatrix4(rt)),Array.isArray(me)){let Te=Me.groups;for(let Ee=0,Ge=Te.length;Ee<Ge;Ee++){let Ke=Te[Ee],Ce=me[Ke.materialIndex];Ce&&Ce.visible&&T.push(A,Me,Ce,X,Xe.z,Ke)}}else me.visible&&T.push(A,Me,me,X,Xe.z,null)}}let ge=A.children;for(let Me=0,me=ge.length;Me<me;Me++)Bp(ge[Me],U,X,G)}function wv(A,U,X,G){let{opaque:H,transmissive:ge,transparent:Me}=A;b.setupLightsView(X),ct===!0&&Se.setGlobalState(R.clippingPlanes,X),G&&ue.viewport($.copy(G)),H.length>0&&ku(H,U,X),ge.length>0&&ku(ge,U,X),Me.length>0&&ku(Me,U,X),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Ev(A,U,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let Ce=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new Qt(1,1,{generateMipmaps:!0,type:Ce?In:Qn,minFilter:Xs,samples:Math.max(4,at.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}let ge=b.state.transmissionRenderTarget[G.id],Me=G.viewport||$;ge.setSize(Me.z*R.transmissionResolutionScale,Me.w*R.transmissionResolutionScale);let me=R.getRenderTarget(),Te=R.getActiveCubeFace(),Ee=R.getActiveMipmapLevel();R.setRenderTarget(ge),R.getClearColor(pe),ve=R.getClearAlpha(),ve<1&&R.setClearColor(16777215,.5),R.clear(),ht&&ae.render(X);let Ge=R.toneMapping;R.toneMapping=er;let Ke=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),ct===!0&&Se.setGlobalState(R.clippingPlanes,G),ku(A,X,G),M.updateMultisampleRenderTarget(ge),M.updateRenderTargetMipmap(ge),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let lt=0,Ht=U.length;lt<Ht;lt++){let Ot=U[lt],{object:ft,geometry:Sn,material:ye,group:si}=Ot;if(ye.side===yr&&ft.layers.test(G.layers)){let et=ye.side;ye.side=vn,ye.needsUpdate=!0,Av(ft,X,G,Sn,ye,si),ye.side=et,ye.needsUpdate=!0,Ce=!0}}Ce===!0&&(M.updateMultisampleRenderTarget(ge),M.updateRenderTargetMipmap(ge))}R.setRenderTarget(me,Te,Ee),R.setClearColor(pe,ve),Ke!==void 0&&(G.viewport=Ke),R.toneMapping=Ge}function ku(A,U,X){let G=U.isScene===!0?U.overrideMaterial:null;for(let H=0,ge=A.length;H<ge;H++){let Me=A[H],{object:me,geometry:Te,group:Ee}=Me,Ge=Me.material;Ge.allowOverride===!0&&G!==null&&(Ge=G),me.layers.test(X.layers)&&Av(me,U,X,Te,Ge,Ee)}}function Av(A,U,X,G,H,ge){A.onBeforeRender(R,U,X,G,H,ge),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(R,U,X,G,A,ge),H.transparent===!0&&H.side===yr&&H.forceSinglePass===!1?(H.side=vn,H.needsUpdate=!0,R.renderBufferDirect(X,U,G,H,A,ge),H.side=Yr,H.needsUpdate=!0,R.renderBufferDirect(X,U,G,H,A,ge),H.side=yr):R.renderBufferDirect(X,U,G,H,A,ge),A.onAfterRender(R,U,X,G,H,ge)}function Bu(A,U,X){U.isScene!==!0&&(U=Ft);let G=C.get(A),H=b.state.lights,ge=b.state.shadowsArray,Me=H.state.version,me=ne.getParameters(A,H.state,ge,U,X,b.state.lightProbeGridArray),Te=ne.getProgramCacheKey(me),Ee=G.programs;G.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Ge=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;G.envMap=z.get(A.envMap||G.environment,Ge),G.envMapRotation=G.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Ee===void 0&&(A.addEventListener("dispose",Gt),Ee=new Map,G.programs=Ee);let Ke=Ee.get(Te);if(Ke!==void 0){if(G.currentProgram===Ke&&G.lightsStateVersion===Me)return Rv(A,me),Ke}else me.uniforms=ne.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,X,me),A.onBeforeCompile(me,R),Ke=ne.acquireProgram(me,Te),Ee.set(Te,Ke),G.uniforms=me.uniforms;let Ce=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ce.clippingPlanes=Se.uniform),Rv(A,me),G.needsLights=WT(A),G.lightsStateVersion=Me,G.needsLights&&(Ce.ambientLightColor.value=H.state.ambient,Ce.lightProbe.value=H.state.probe,Ce.directionalLights.value=H.state.directional,Ce.directionalLightShadows.value=H.state.directionalShadow,Ce.spotLights.value=H.state.spot,Ce.spotLightShadows.value=H.state.spotShadow,Ce.rectAreaLights.value=H.state.rectArea,Ce.ltc_1.value=H.state.rectAreaLTC1,Ce.ltc_2.value=H.state.rectAreaLTC2,Ce.pointLights.value=H.state.point,Ce.pointLightShadows.value=H.state.pointShadow,Ce.hemisphereLights.value=H.state.hemi,Ce.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ce.spotLightMatrix.value=H.state.spotLightMatrix,Ce.spotLightMap.value=H.state.spotLightMap,Ce.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=Ke,G.uniformsList=null,Ke}function Cv(A){if(A.uniformsList===null){let U=A.currentProgram.getUniforms();A.uniformsList=sl.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Rv(A,U){let X=C.get(A);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function VT(A,U){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;S.setFromMatrixPosition(U.matrixWorld);for(let X=0,G=A.length;X<G;X++){let H=A[X];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function GT(A,U,X,G,H){U.isScene!==!0&&(U=Ft),M.resetTextureUnits();let ge=U.fog,Me=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,me=L===null?R.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:je.workingColorSpace,Te=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ee=z.get(G.envMap||Me,Te),Ge=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ke=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!X.morphAttributes.position,lt=!!X.morphAttributes.normal,Ht=!!X.morphAttributes.color,Ot=er;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ot=R.toneMapping);let ft=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Sn=ft!==void 0?ft.length:0,ye=C.get(G),si=b.state.lights;if(ct===!0&&(Ye===!0||A!==O)){let gt=A===O&&G.id===N;Se.setState(G,A,gt)}let et=!1;G.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==si.state.version||ye.outputColorSpace!==me||H.isBatchedMesh&&ye.batching===!1||!H.isBatchedMesh&&ye.batching===!0||H.isBatchedMesh&&ye.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ye.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ye.instancing===!1||!H.isInstancedMesh&&ye.instancing===!0||H.isSkinnedMesh&&ye.skinning===!1||!H.isSkinnedMesh&&ye.skinning===!0||H.isInstancedMesh&&ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ye.instancingMorph===!1&&H.morphTexture!==null||ye.envMap!==Ee||G.fog===!0&&ye.fog!==ge||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Se.numPlanes||ye.numIntersection!==Se.numIntersection)||ye.vertexAlphas!==Ge||ye.vertexTangents!==Ke||ye.morphTargets!==Ce||ye.morphNormals!==lt||ye.morphColors!==Ht||ye.toneMapping!==Ot||ye.morphTargetsCount!==Sn||!!ye.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,ye.__version=G.version);let bi=ye.currentProgram;et===!0&&(bi=Bu(G,U,H),D&&G.isNodeMaterial&&D.onUpdateProgram(G,bi,ye));let ir=!1,rs=!1,Ja=!1,dt=bi.getUniforms(),Wt=ye.uniforms;if(ue.useProgram(bi.program)&&(ir=!0,rs=!0,Ja=!0),G.id!==N&&(N=G.id,rs=!0),ye.needsLights){let gt=VT(b.state.lightProbeGridArray,H);ye.lightProbeGrid!==gt&&(ye.lightProbeGrid=gt,rs=!0)}if(ir||O!==A){ue.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),dt.setValue(F,"projectionMatrix",A.projectionMatrix),dt.setValue(F,"viewMatrix",A.matrixWorldInverse);let as=dt.map.cameraPosition;as!==void 0&&as.setValue(F,ut.setFromMatrixPosition(A.matrixWorld)),at.logarithmicDepthBuffer&&dt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&dt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),O!==A&&(O=A,rs=!0,Ja=!0)}if(ye.needsLights&&(si.state.directionalShadowMap.length>0&&dt.setValue(F,"directionalShadowMap",si.state.directionalShadowMap,M),si.state.spotShadowMap.length>0&&dt.setValue(F,"spotShadowMap",si.state.spotShadowMap,M),si.state.pointShadowMap.length>0&&dt.setValue(F,"pointShadowMap",si.state.pointShadowMap,M)),H.isSkinnedMesh){dt.setOptional(F,H,"bindMatrix"),dt.setOptional(F,H,"bindMatrixInverse");let gt=H.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),dt.setValue(F,"boneTexture",gt.boneTexture,M))}H.isBatchedMesh&&(dt.setOptional(F,H,"batchingTexture"),dt.setValue(F,"batchingTexture",H._matricesTexture,M),dt.setOptional(F,H,"batchingIdTexture"),dt.setValue(F,"batchingIdTexture",H._indirectTexture,M),dt.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&dt.setValue(F,"batchingColorTexture",H._colorsTexture,M));let ss=X.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0)&&Oe.update(H,X,bi),(rs||ye.receiveShadow!==H.receiveShadow)&&(ye.receiveShadow=H.receiveShadow,dt.setValue(F,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Wt.envMapIntensity.value=U.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=iI()),rs){if(dt.setValue(F,"toneMappingExposure",R.toneMappingExposure),ye.needsLights&&HT(Wt,Ja),ge&&G.fog===!0&&q.refreshFogUniforms(Wt,ge),q.refreshMaterialUniforms(Wt,G,Pe,Be,b.state.transmissionRenderTarget[A.id]),ye.needsLights&&ye.lightProbeGrid){let gt=ye.lightProbeGrid;Wt.probesSH.value=gt.texture,Wt.probesMin.value.copy(gt.boundingBox.min),Wt.probesMax.value.copy(gt.boundingBox.max),Wt.probesResolution.value.copy(gt.resolution)}sl.upload(F,Cv(ye),Wt,M)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(sl.upload(F,Cv(ye),Wt,M),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&dt.setValue(F,"center",H.center),dt.setValue(F,"modelViewMatrix",H.modelViewMatrix),dt.setValue(F,"normalMatrix",H.normalMatrix),dt.setValue(F,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){let gt=G.uniformsGroups;for(let as=0,Qa=gt.length;as<Qa;as++){let Pv=gt[as];Y.update(Pv,bi),Y.bind(Pv,bi)}}return bi}function HT(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function WT(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,U,X){let G=C.get(A);G.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),C.get(A.texture).__webglTexture=U,C.get(A.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,U){let X=C.get(A);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0};let XT=F.createFramebuffer();this.setRenderTarget=function(A,U=0,X=0){L=A,V=U,W=X;let G=null,H=!1,ge=!1;if(A){let me=C.get(A);if(me.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(F.FRAMEBUFFER,me.__webglFramebuffer),$.copy(A.viewport),Q.copy(A.scissor),re=A.scissorTest,ue.viewport($),ue.scissor(Q),ue.setScissorTest(re),N=-1;return}else if(me.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(me.__hasExternalTextures)M.rebindTextures(A,C.get(A.texture).__webglTexture,C.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ge=A.depthTexture;if(me.__boundDepthTexture!==Ge){if(Ge!==null&&C.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}let Te=A.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ge=!0);let Ee=C.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ee[U])?G=Ee[U][X]:G=Ee[U],H=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?G=C.get(A).__webglMultisampledFramebuffer:Array.isArray(Ee)?G=Ee[X]:G=Ee,$.copy(A.viewport),Q.copy(A.scissor),re=A.scissorTest}else $.copy(se).multiplyScalar(Pe).floor(),Q.copy(Re).multiplyScalar(Pe).floor(),re=Fe;if(X!==0&&(G=XT),ue.bindFramebuffer(F.FRAMEBUFFER,G)&&ue.drawBuffers(A,G),ue.viewport($),ue.scissor(Q),ue.setScissorTest(re),H){let me=C.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,X)}else if(ge){let me=U;for(let Te=0;Te<A.textures.length;Te++){let Ee=C.get(A.textures[Te]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Te,Ee.__webglTexture,X,me)}}else if(A!==null&&X!==0){let me=C.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,me.__webglTexture,X)}N=-1},this.readRenderTargetPixels=function(A,U,X,G,H,ge,Me,me=0){if(!(A&&A.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){ue.bindFramebuffer(F.FRAMEBUFFER,Te);try{let Ee=A.textures[me],Ge=Ee.format,Ke=Ee.type;if(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+me),!at.textureFormatReadable(Ge)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Ke)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-G&&X>=0&&X<=A.height-H&&F.readPixels(U,X,G,H,I.convert(Ge),I.convert(Ke),ge)}finally{let Ee=L!==null?C.get(L).__webglFramebuffer:null;ue.bindFramebuffer(F.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(A,U,X,G,H,ge,Me,me=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(U>=0&&U<=A.width-G&&X>=0&&X<=A.height-H){ue.bindFramebuffer(F.FRAMEBUFFER,Te);let Ee=A.textures[me],Ge=Ee.format,Ke=Ee.type;if(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+me),!at.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ce=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ce),F.bufferData(F.PIXEL_PACK_BUFFER,ge.byteLength,F.STREAM_READ),F.readPixels(U,X,G,H,I.convert(Ge),I.convert(Ke),0);let lt=L!==null?C.get(L).__webglFramebuffer:null;ue.bindFramebuffer(F.FRAMEBUFFER,lt);let Ht=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await j1(F,Ht,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ce),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ge),F.deleteBuffer(Ce),F.deleteSync(Ht),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,U=null,X=0){let G=Math.pow(2,-X),H=Math.floor(A.image.width*G),ge=Math.floor(A.image.height*G),Me=U!==null?U.x:0,me=U!==null?U.y:0;M.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Me,me,H,ge),ue.unbindTexture()};let qT=F.createFramebuffer(),YT=F.createFramebuffer();this.copyTextureToTexture=function(A,U,X=null,G=null,H=0,ge=0){let Me,me,Te,Ee,Ge,Ke,Ce,lt,Ht,Ot=A.isCompressedTexture?A.mipmaps[ge]:A.image;if(X!==null)Me=X.max.x-X.min.x,me=X.max.y-X.min.y,Te=X.isBox3?X.max.z-X.min.z:1,Ee=X.min.x,Ge=X.min.y,Ke=X.isBox3?X.min.z:0;else{let Wt=Math.pow(2,-H);Me=Math.floor(Ot.width*Wt),me=Math.floor(Ot.height*Wt),A.isDataArrayTexture?Te=Ot.depth:A.isData3DTexture?Te=Math.floor(Ot.depth*Wt):Te=1,Ee=0,Ge=0,Ke=0}G!==null?(Ce=G.x,lt=G.y,Ht=G.z):(Ce=0,lt=0,Ht=0);let ft=I.convert(U.format),Sn=I.convert(U.type),ye;U.isData3DTexture?(M.setTexture3D(U,0),ye=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(M.setTexture2DArray(U,0),ye=F.TEXTURE_2D_ARRAY):(M.setTexture2D(U,0),ye=F.TEXTURE_2D),ue.activeTexture(F.TEXTURE0),ue.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),ue.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ue.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let si=ue.getParameter(F.UNPACK_ROW_LENGTH),et=ue.getParameter(F.UNPACK_IMAGE_HEIGHT),bi=ue.getParameter(F.UNPACK_SKIP_PIXELS),ir=ue.getParameter(F.UNPACK_SKIP_ROWS),rs=ue.getParameter(F.UNPACK_SKIP_IMAGES);ue.pixelStorei(F.UNPACK_ROW_LENGTH,Ot.width),ue.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ot.height),ue.pixelStorei(F.UNPACK_SKIP_PIXELS,Ee),ue.pixelStorei(F.UNPACK_SKIP_ROWS,Ge),ue.pixelStorei(F.UNPACK_SKIP_IMAGES,Ke);let Ja=A.isDataArrayTexture||A.isData3DTexture,dt=U.isDataArrayTexture||U.isData3DTexture;if(A.isDepthTexture){let Wt=C.get(A),ss=C.get(U),gt=C.get(Wt.__renderTarget),as=C.get(ss.__renderTarget);ue.bindFramebuffer(F.READ_FRAMEBUFFER,gt.__webglFramebuffer),ue.bindFramebuffer(F.DRAW_FRAMEBUFFER,as.__webglFramebuffer);for(let Qa=0;Qa<Te;Qa++)Ja&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,C.get(A).__webglTexture,H,Ke+Qa),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,C.get(U).__webglTexture,ge,Ht+Qa)),F.blitFramebuffer(Ee,Ge,Me,me,Ce,lt,Me,me,F.DEPTH_BUFFER_BIT,F.NEAREST);ue.bindFramebuffer(F.READ_FRAMEBUFFER,null),ue.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||C.has(A)){let Wt=C.get(A),ss=C.get(U);ue.bindFramebuffer(F.READ_FRAMEBUFFER,qT),ue.bindFramebuffer(F.DRAW_FRAMEBUFFER,YT);for(let gt=0;gt<Te;gt++)Ja?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Wt.__webglTexture,H,Ke+gt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Wt.__webglTexture,H),dt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ss.__webglTexture,ge,Ht+gt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ss.__webglTexture,ge),H!==0?F.blitFramebuffer(Ee,Ge,Me,me,Ce,lt,Me,me,F.COLOR_BUFFER_BIT,F.NEAREST):dt?F.copyTexSubImage3D(ye,ge,Ce,lt,Ht+gt,Ee,Ge,Me,me):F.copyTexSubImage2D(ye,ge,Ce,lt,Ee,Ge,Me,me);ue.bindFramebuffer(F.READ_FRAMEBUFFER,null),ue.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else dt?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(ye,ge,Ce,lt,Ht,Me,me,Te,ft,Sn,Ot.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(ye,ge,Ce,lt,Ht,Me,me,Te,ft,Ot.data):F.texSubImage3D(ye,ge,Ce,lt,Ht,Me,me,Te,ft,Sn,Ot):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ge,Ce,lt,Me,me,ft,Sn,Ot.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ge,Ce,lt,Ot.width,Ot.height,ft,Ot.data):F.texSubImage2D(F.TEXTURE_2D,ge,Ce,lt,Me,me,ft,Sn,Ot);ue.pixelStorei(F.UNPACK_ROW_LENGTH,si),ue.pixelStorei(F.UNPACK_IMAGE_HEIGHT,et),ue.pixelStorei(F.UNPACK_SKIP_PIXELS,bi),ue.pixelStorei(F.UNPACK_SKIP_ROWS,ir),ue.pixelStorei(F.UNPACK_SKIP_IMAGES,rs),ge===0&&U.generateMipmaps&&F.generateMipmap(ye),ue.unbindTexture()},this.initRenderTarget=function(A){C.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),ue.unbindTexture()},this.resetState=function(){V=0,W=0,L=null,ue.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var ll={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var vi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},sI=new Oa(-1,1,1,-1,0,1),C_=class extends Pn{constructor(){super(),this.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new cn([0,2,0,0,2,0],2))}},aI=new C_,$s=class{constructor(e){this._mesh=new yt(aI,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sI)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var cl=class extends vi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Jr.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new $s(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Mu=class extends vi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},gp=class extends vi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var _p=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new De);this._width=i.width,this._height=i.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:In}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cl(ll),this.copyPass.material.blending=Li,this.timer=new Qc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,s=this.passes.length;r<s;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Mu!==void 0&&(a instanceof Mu?i=!0:a instanceof gp&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new De);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var vp=class extends vi{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ue}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}};var Rb={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ul=class n extends vi{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new De(e.x,e.y):new De(256,256),this.clearColor=new Ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(s,a,{type:In}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Qt(s,a,{type:In});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let h=new Qt(s,a,{type:In});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),a=Math.round(a/2)}let o=Rb;this.highPassUniforms=Jr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new It({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new De(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Jr.clone(ll.uniforms),this.blendMaterial=new It({uniforms:this.copyUniforms,vertexShader:ll.vertexShader,fragmentShader:ll.fragmentShader,premultipliedAlpha:!0,blending:nu,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ue,this._oldClearAlpha=1,this._basic=new Fa,this._fsQuad=new $s(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new De(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);return new It({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new De(.5,.5)},direction:{value:new De(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new It({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ul.BlurDirectionX=new De(1,0);ul.BlurDirectionY=new De(0,1);var bu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var xp=class extends vi{constructor(){super(),this.isOutputPass=!0,this.uniforms=Jr.clone(bu.uniforms),this.material=new el({name:bu.name,uniforms:this.uniforms,vertexShader:bu.vertexShader,fragmentShader:bu.fragmentShader}),this._fsQuad=new $s(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===it&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===iu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ru?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===su?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ka?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ou?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===lu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===au&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Pb={name:"RGBShiftShader",uniforms:{tDiffuse:{value:null},amount:{value:.005},angle:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float amount;
		uniform float angle;

		varying vec2 vUv;

		void main() {

			vec2 offset = amount * vec2( cos(angle), sin(angle));
			vec4 cr = texture2D(tDiffuse, vUv + offset);
			vec4 cga = texture2D(tDiffuse, vUv);
			vec4 cb = texture2D(tDiffuse, vUv - offset);
			gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);

		}`};var yp=class extends La{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Bs;e.deleteAttribute("uv");let t=new zs({side:vn}),i=new zs,r=new Ua(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new yt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new Gc(e,i,6),o=new Rn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new yt(e,hl(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new yt(e,hl(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new yt(e,hl(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let f=new yt(e,hl(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let h=new yt(e,hl(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let p=new yt(e,hl(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function hl(n){return new Kc({color:0,emissive:16777215,emissiveIntensity:n})}function Qr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Bb(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}var ii={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ru={duration:.5,overwrite:!1,delay:0},q_,xn,Et,ki=1e8,mt=1/ki,U_=Math.PI*2,oI=U_/4,lI=0,zb=Math.sqrt,cI=Math.cos,uI=Math.sin,nn=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},ts=function(e){return typeof e=="number"},Pp=function(e){return typeof e>"u"},wr=function(e){return typeof e=="object"},ni=function(e){return e!==!1},Y_=function(){return typeof window<"u"},Sp=function(e){return zt(e)||nn(e)},Vb=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ln=Array.isArray,hI=/random\([^)]+\)/g,fI=/,\s*/g,Ib=/(?:-?\.?\d|\.)+/gi,K_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,R_=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$_=/[+-]=-?[.\d]+/,dI=/[^,'"\[\]\s]+/gi,pI=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Dt,br,O_,j_,yi={},wp={},Gb,Hb=function(e){return(wp=dl(e,yi))&&Fn},Ip=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Pu=function(e,t){return!t&&console.warn(e)},Wb=function(e,t){return e&&(yi[e]=t)&&wp&&(wp[e]=t)||yi},Iu=function(){return 0},mI={suppressEvents:!0,isStart:!0,kill:!1},Mp={suppressEvents:!0,kill:!1},gI={suppressEvents:!0},Z_={},Zs=[],k_={},Xb,ei={},P_={},Nb=30,bp=[],J_="",Q_=function(e){var t=e[0],i,r;if(wr(t)||zt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=bp.length;r--&&!bp[r].targetTest(t););i=bp[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new iv(e[r],i)))||e.splice(r,1);return e},Js=function(e){return e._gsap||Q_(Bi(e))[0]._gsap},ev=function(e,t,i){return(i=e[t])&&zt(i)?e[t]():Pp(i)&&e.getAttribute&&e.getAttribute(t)||i},Gn=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},qa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},_I=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Ep=function(){var e=Zs.length,t=Zs.slice(0),i,r;for(k_={},Zs.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},tv=function(e){return!!(e._initted||e._startAt||e.add)},qb=function(e,t,i,r){Zs.length&&!xn&&Ep(),e.render(t,i,r||!!(xn&&t<0&&tv(e))),Zs.length&&!xn&&Ep()},Yb=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(dI).length<2?t:nn(e)?e.trim():e},Kb=function(e){return e},Si=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},vI=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},dl=function(e,t){for(var i in t)e[i]=t[i];return e},Db=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=wr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Ap=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Eu=function(e){var t=e.parent||Dt,i=e.keyframes?vI(Ln(e.keyframes)):Si;if(ni(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},xI=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},$b=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Np=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Qs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ga=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},yI=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},B_=function(e,t,i,r){return e._startAt&&(xn?e._startAt.revert(Mp):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},SI=function n(e){return!e||e._ts&&n(e.parent)},Lb=function(e){return e._repeat?pl(e._tTime,e=e.duration()+e._rDelay)*e:0},pl=function(e,t){var i=Math.floor(e=Nt(e/t));return e&&i===e?i-1:i},Cp=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Dp=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||mt)||0))},Lp=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Nt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Dp(e),i._dirty||Ga(i,e)),e},jb=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Cp(e.rawTime(),t),(!t._dur||Lu(0,t.totalDuration(),i)-t._tTime>mt)&&t.render(i,!0)),Ga(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-mt}},Tr=function(e,t,i,r){return t.parent&&Qs(t),t._start=Nt((ts(i)?i:i||e!==Dt?Oi(e,i,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$b(e,t,"_first","_last",e._sort?"_start":0),z_(t)||(e._recent=t),r||jb(e,t),e._ts<0&&Lp(e,e._tTime),e},Zb=function(e,t){return(yi.ScrollTrigger||Ip("scrollTrigger",t))&&yi.ScrollTrigger.create(t,e)},Jb=function(e,t,i,r,s){if(av(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!xn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Xb!==ti.frame)return Zs.push(e),e._lazy=[s,r],1},MI=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},z_=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},bI=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&MI(e)&&!(!e._initted&&z_(e))||(e._ts<0||e._dp._ts<0)&&!z_(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Lu(0,e._tDur,t),u=pl(l,o),e._yoyo&&u&1&&(a=1-a),u!==pl(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||xn||r||e._zTime===mt||!t&&e._zTime){if(!e._initted&&Jb(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?mt:0),i||(i=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&B_(e,t,i,!0),e._onUpdate&&!i&&xi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&xi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Qs(e,1),!i&&!xn&&(xi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},TI=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ml=function(e,t,i,r){var s=e._repeat,a=Nt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Nt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Lp(e,e._tTime=e._tDur*o),e.parent&&Dp(e),i||Ga(e.parent,e),e},Fb=function(e){return e instanceof Dn?Ga(e):ml(e,e._dur)},wI={_start:0,endTime:Iu,totalDuration:Iu},Oi=function n(e,t,i){var r=e.labels,s=e._recent||wI,a=e.duration()>=ki?s.endTime(!1):e._dur,o,l,c;return nn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(Ln(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},Au=function(e,t,i){var r=ts(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;a.immediateRender=ni(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Yt(t[0],a,t[s+1])},ea=function(e,t){return e||e===0?t(e):t},Lu=function(e,t,i){return i<e?e:i>t?t:i},yn=function(e,t){return!nn(e)||!(t=pI.exec(e))?"":t[1]},EI=function(e,t,i){return ea(i,function(r){return Lu(e,t,r)})},V_=[].slice,Qb=function(e,t){return e&&wr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wr(e[0]))&&!e.nodeType&&e!==br},AI=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return nn(r)&&!t||Qb(r,1)?(s=i).push.apply(s,Bi(r)):i.push(r)})||i},Bi=function(e,t,i){return Et&&!t&&Et.selector?Et.selector(e):nn(e)&&!i&&(O_||!gl())?V_.call((t||j_).querySelectorAll(e),0):Ln(e)?AI(e,i):Qb(e)?V_.call(e,0):e?[e]:[]},G_=function(e){return e=Bi(e)[0]||Pu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Bi(t,i.querySelectorAll?i:i===e?Pu("Invalid scope")||j_.createElement("div"):e)}},eT=function(e){return e.sort(function(){return .5-Math.random()})},tT=function(e){if(zt(e))return e;var t=wr(e)?e:{each:e},i=Ha(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,f=r;return nn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(h,p,_){var v=(_||t).length,g=a[v],d,m,x,S,T,b,E,y,w;if(!g){if(w=t.grid==="auto"?0:(t.grid||[1,ki])[1],!w){for(E=-ki;E<(E=_[w++].getBoundingClientRect().left)&&w<v;);w<v&&w--}for(g=a[v]=[],d=l?Math.min(w,v)*u-.5:r%w,m=w===ki?0:l?v*f/w-.5:r/w|0,E=0,y=ki,b=0;b<v;b++)x=b%w-d,S=m-(b/w|0),g[b]=T=c?Math.abs(c==="y"?S:x):zb(x*x+S*S),T>E&&(E=T),T<y&&(y=T);r==="random"&&eT(g),g.max=E-y,g.min=y,g.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(w>v?v-1:c?c==="y"?v/w:w:Math.max(w,v/w))||0)*(r==="edges"?-1:1),g.b=v<0?s-v:s,g.u=yn(t.amount||t.each)||0,i=i&&v<0?zI(i):i}return v=(g[h]-g.min)/g.max||0,Nt(g.b+(i?i(v):v)*g.v)+g.u}},H_=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Nt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ts(i)?0:yn(i))}},nT=function(e,t){var i=Ln(e),r,s;return!i&&wr(e)&&(r=i=e.radius||ki,e.values?(e=Bi(e.values),(s=!ts(e[0]))&&(r*=r)):e=H_(e.increment)),ea(t,i?zt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ki,u=0,f=e.length,h,p;f--;)s?(h=e[f].x-o,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:a,s||u===a||ts(a)?u:u+yn(a)}:H_(e))},iT=function(e,t,i,r){return ea(Ln(e)?!t:i===!0?!!(i=0):!r,function(){return Ln(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},CI=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},RI=function(e,t){return function(i){return e(parseFloat(i))+(t||yn(i))}},PI=function(e,t,i){return sT(e,t,0,1,i)},rT=function(e,t,i){return ea(i,function(r){return e[~~t(r)]})},II=function n(e,t,i){var r=t-e;return Ln(e)?rT(e,n(0,e.length),t):ea(i,function(s){return(r+(s-e)%r)%r+e})},NI=function n(e,t,i){var r=t-e,s=r*2;return Ln(e)?rT(e,n(0,e.length-1),t):ea(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},_l=function(e){return e.replace(hI,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(fI);return iT(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},sT=function(e,t,i,r,s){var a=t-e,o=r-i;return ea(s,function(l){return i+((l-e)/a*o||0)})},DI=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=nn(e),o={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(Ln(e)&&!Ln(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(_){_*=f;var v=Math.min(h,~~_);return u[v](_-v)},i=t}else r||(e=dl(Ln(e)?[]:{},e));if(!u){for(l in t)rv.call(o,e,l,"get",t[l]);s=function(_){return cv(_,o)||(a?e.p:e)}}}return ea(i,s)},Ub=function(e,t,i){var r=e.labels,s=ki,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},xi=function(e,t,i){var r=e.vars,s=r[t],a=Et,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Zs.length&&Ep(),o&&(Et=o),u=l?s.apply(c,l):s.call(c),Et=a,u},Tu=function(e){return Qs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xn),e.progress()<1&&xi(e,"onInterrupt"),e},fl,aT=[],oT=function(e){if(e)if(e=!e.name&&e.default||e,Y_()||e.headless){var t=e.name,i=zt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Iu,render:cv,add:rv,kill:jI,modifier:$I,rawVars:0},a={targetTest:0,get:0,getSetter:Fp,aliases:{},register:0};if(gl(),e!==r){if(ei[t])return;Si(r,Si(Ap(e,s),a)),dl(r.prototype,dl(s,Ap(e,a))),ei[r.prop=t]=r,e.targetTest&&(bp.push(r),Z_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wb(t,r),e.register&&e.register(Fn,r,Hn)}else aT.push(e)},pt=255,wu={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},I_=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*pt+.5|0},lT=function(e,t,i){var r=e?ts(e)?[e>>16,e>>8&pt,e&pt]:0:wu.black,s,a,o,l,c,u,f,h,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),wu[e])r=wu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&pt,r&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Ib),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=I_(l+1/3,s,a),r[1]=I_(l,s,a),r[2]=I_(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(K_),i&&r.length<4&&(r[3]=1),r}else r=e.match(Ib)||wu.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/pt,a=r[1]/pt,o=r[2]/pt,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),l=f===s?(a-o)/p+(a<o?6:0):f===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},cT=function(e){var t=[],i=[],r=-1;return e.split(es).forEach(function(s){var a=s.match(Xa)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},Ob=function(e,t,i){var r="",s=(e+r).match(es),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=lT(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=cT(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(es,"1").split(Xa),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(es),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},es=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in wu)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),LI=/hsl[a]?\(/,nv=function(e){var t=e.join(" "),i;if(es.lastIndex=0,es.test(t))return i=LI.test(t),e[1]=Ob(e[1],i),e[0]=Ob(e[0],i,cT(e[1])),!0},Nu,ti=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,c,u,f,h,p,_=function v(g){var d=n()-r,m=g===!0,x,S,T,b;if((d>e||d<0)&&(i+=d-t),r+=d,T=r-i,x=T-a,(x>0||m)&&(b=++f.frame,h=T-f.time*1e3,f.time=T=T/1e3,a+=x+(x>=s?4:s-x),S=1),m||(l=c(v)),S)for(p=0;p<o.length;p++)o[p](T,h,b,g)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){Gb&&(!O_&&Y_()&&(br=O_=window,j_=br.document||{},yi.gsap=Fn,(br.gsapVersions||(br.gsapVersions=[])).push(Fn.version),Hb(wp||br.GreenSockGlobals||!br.gsap&&br||{}),aT.forEach(oT)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(g){return setTimeout(g,a-f.time*1e3+1|0)},Nu=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Nu=0,c=Iu},lagSmoothing:function(g,d){e=g||1/0,t=Math.min(d||33,e)},fps:function(g){s=1e3/(g||240),a=f.time*1e3+s},add:function(g,d,m){var x=d?function(S,T,b,E){g(S,T,b,E),f.remove(x)}:g;return f.remove(g),o[m?"unshift":"push"](x),gl(),x},remove:function(g,d){~(d=o.indexOf(g))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},f})(),gl=function(){return!Nu&&ti.wake()},Qe={},FI=/^[\d.\-M][\d.\-,\s]/,UI=/["']/g,OI=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(UI,"").trim():+c,r=l.substr(o+1).trim();return t},kI=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},BI=function(e){var t=(e+"").split("("),i=Qe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[OI(t[1])]:kI(e).split(",").map(Yb)):Qe._CE&&FI.test(e)?Qe._CE("",e):i},zI=function(e){return function(t){return 1-e(1-t)}},Ha=function(e,t){return e&&(zt(e)?e:Qe[e]||BI(e))||t},Ya=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return Gn(e,function(o){Qe[o]=yi[o]=s,Qe[a=o.toLowerCase()]=i;for(var l in s)Qe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Qe[o+"."+l]=s[l]}),s},uT=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},N_=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/U_*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*uI((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:uT(o);return s=U_/s,l.config=function(c,u){return n(e,c,u)},l},D_=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:uT(i);return r.config=function(s){return n(e,s)},r};Gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Ya(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Qe.Linear.easeNone=Qe.none=Qe.Linear.easeIn;Ya("Elastic",N_("in"),N_("out"),N_());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};Ya("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ya("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Ya("Circ",function(n){return-(zb(1-n*n)-1)});Ya("Sine",function(n){return n===1?1:-cI(n*oI)+1});Ya("Back",D_("in"),D_("out"),D_());Qe.SteppedEase=Qe.steps=yi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-mt;return function(o){return((r*Lu(0,a,o)|0)+s)*i}}};Ru.ease=Qe["quad.out"];Gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return J_+=n+","+n+"Params,"});var iv=function(e,t){this.id=lI++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ev,this.set=t?t.getSetter:Fp},Du=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ml(this,+t.duration,1,1),this.data=t.data,Et&&(this._ctx=Et,Et.data.push(this)),Nu||ti.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ml(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(gl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Lp(this,i),!s._dp||s.parent||jb(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Tr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===mt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),qb(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Lb(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Lb(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?pl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-mt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Cp(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-mt?0:this._rts,this.totalTime(Lu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Dp(this),yI(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(gl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==mt&&(this._tTime-=mt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Nt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Tr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ni(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Cp(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=gI);var r=xn;return xn=i,tv(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),xn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Fb(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Fb(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Oi(this,i),ni(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ni(r)),this._dur||(this._zTime=-mt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-mt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-mt)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=zt(i)?i:Kb,l=function(){var u=r.then;r.then=null,s&&s(),zt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Tu(this)},n})();Si(Du.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-mt,_prom:0,_ps:!1,_rts:1});var Dn=(function(n){Bb(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ni(i.sortChildren),Dt&&Tr(i.parent||Dt,Qr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Zb(Qr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Au(0,arguments,this),this},t.from=function(r,s,a){return Au(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Au(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Eu(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Yt(r,s,Oi(this,a),1),this},t.call=function(r,s,a){return Tr(this,Yt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Yt(r,a,Oi(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Eu(a).immediateRender=ni(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,Eu(o).immediateRender=ni(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Nt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,p,_,v,g,d,m,x,S,T,b,E;if(this!==Dt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,S=this._start,x=this._ts,d=!x,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(b=this._yoyo,g=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,a);if(h=Nt(u%g),u===l?(v=this._repeat,h=c):(T=Nt(u/g),v=~~T,v&&v===T&&(h=c,v--),h>c&&(h=c)),T=pl(this._tTime,g),!o&&this._tTime&&T!==v&&this._tTime-T*g-this._dur<=0&&(T=v),b&&v&1&&(h=c-h,E=1),v!==T&&!this._lock){var y=b&&T&1,w=y===(b&&v&1);if(v<T&&(y=!y),o=y?0:u%c?c:u,this._lock=1,this.render(o||(E?0:Nt(v*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&xi(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,T=v),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=y?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=TI(this,Nt(o),Nt(h)),m&&(u-=h-(h=m._start))),this._tTime=u,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!T&&(xi(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||h>=p._start)&&p._ts&&m!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,a),h!==this._time||!this._ts&&!d){m=0,_&&(u+=this._zTime=-mt);break}}p=_}else{p=this._last;for(var R=r<0?r:h;p;){if(_=p._prev,(p._act||R<=p._end)&&p._ts&&m!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(R-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(R-p._start)*p._ts,s,a||xn&&tv(p)),h!==this._time||!this._ts&&!d){m=0,_&&(u+=this._zTime=R?-mt:mt);break}}p=_}}if(m&&!s&&(this.pause(),m.render(h>=o?0:-mt)._zTime=h>=o?1:-1,this._ts))return this._start=S,Dp(this),this.render(r,s,a);this._onUpdate&&!s&&xi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Qs(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(xi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(ts(s)||(s=Oi(this,s,r)),!(r instanceof Du)){if(Ln(r))return r.forEach(function(o){return a.add(o,s)}),this;if(nn(r))return this.addLabel(r,s);if(zt(r))r=Yt.delayedCall(0,r);else return this}return this!==r?Tr(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ki);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Yt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return nn(r)?this.removeLabel(r):zt(r)?this.killTweensOf(r):(r.parent===this&&Np(this,r),r===this._recent&&(this._recent=this._last),Ga(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(ti.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Oi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Yt.delayedCall(0,s||Iu,a);return o.data="isPause",this._hasPause=1,Tr(this,o,Oi(this,r))},t.removePause=function(r){var s=this._first;for(r=Oi(this,r);s;)s._start===r&&s.data==="isPause"&&Qs(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)js!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=Bi(r),l=this._first,c=ts(s),u;l;)l instanceof Yt?_I(l._targets,o)&&(c?(!js||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Oi(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,p,_=Yt.to(a,Si({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||mt,onStart:function(){if(a.pause(),!p){var g=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==g&&ml(_,g,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,Si({startAt:{time:Oi(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Ub(this,Oi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Ub(this,Oi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+mt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=Nt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Ga(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ga(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=ki,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Tr(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Nt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ml(a,a===Dt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Dt._ts&&(qb(Dt,Cp(r,Dt)),Xb=ti.frame),ti.frame>=Nb){Nb+=ii.autoSleep||120;var s=Dt._first;if((!s||!s._ts)&&ii.autoSleep&&ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ti.sleep()}}},e})(Du);Si(Dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var VI=function(e,t,i,r,s,a,o){var l=new Hn(this._pt,e,t,0,1,lv,null,s),c=0,u=0,f,h,p,_,v,g,d,m;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=_l(r)),a&&(m=[i,r],a(m,e,t),i=m[0],r=m[1]),h=i.match(R_)||[];f=R_.exec(r);)_=f[0],v=r.substring(c,f.index),p?p=(p+1)%5:v.substr(-5)==="rgba("&&(p=1),_!==h[u++]&&(g=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:v||u===1?v:",",s:g,c:_.charAt(1)==="="?qa(g,_)-g:parseFloat(_)-g,m:p&&p<4?Math.round:0},c=R_.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,($_.test(r)||d)&&(l.e=0),this._pt=l,l},rv=function(e,t,i,r,s,a,o,l,c,u){zt(r)&&(r=r(s||0,e,a));var f=e[t],h=i!=="get"?i:zt(f)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,p=zt(f)?c?qI:dT:ov,_;if(nn(r)&&(~r.indexOf("random(")&&(r=_l(r)),r.charAt(1)==="="&&(_=qa(h,r)+(yn(h)||0),(_||_===0)&&(r=_))),!u||h!==r||W_)return!isNaN(h*r)&&r!==""?(_=new Hn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?KI:pT,0,p),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!f&&!(t in e)&&Ip(t,r),VI.call(this,e,t,h,r,p,l||ii.stringFilter,c))},GI=function(e,t,i,r,s){if(zt(e)&&(e=Cu(e,s,t,i,r)),!wr(e)||e.style&&e.nodeType||Ln(e)||Vb(e))return nn(e)?Cu(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=Cu(e[o],s,t,i,r);return a},sv=function(e,t,i,r,s,a){var o,l,c,u;if(ei[e]&&(o=new ei[e]).init(s,o.rawVars?t[e]:GI(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new Hn(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==fl))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},js,W_,av=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,p=r.autoRevert,_=e._dur,v=e._startAt,g=e._targets,d=e.parent,m=d&&d.data==="nested"?d.vars.targets:g,x=e._overwrite==="auto"&&!q_,S=e.timeline,T=r.easeReverse||f,b,E,y,w,R,P,D,V,W,L,N,O,$;if(S&&(!h||!s)&&(s="none"),e._ease=Ha(s,Ru.ease),e._rEase=T&&(Ha(T)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||h&&!r.stagger){if(V=g[0]?Js(g[0]).harness:0,O=V&&r[V.prop],b=Ap(r,Z_),v&&(v._zTime<0&&v.progress(1),t<0&&u&&o&&!p?v.render(-1,!0):v.revert(u&&_?Mp:mI),v._lazy=0),a){if(Qs(e._startAt=Yt.set(g,Si({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!v&&ni(l),startAt:null,delay:0,onUpdate:c&&function(){return xi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn||!o&&!p)&&e._startAt.revert(Mp),o&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&_&&!v){if(t&&(o=!1),y=Si({overwrite:!1,data:"isFromStart",lazy:o&&!v&&ni(l),immediateRender:o,stagger:0,parent:d},b),O&&(y[V.prop]=O),Qs(e._startAt=Yt.set(g,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn?e._startAt.revert(Mp):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,mt,mt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ni(l)||l&&!_,E=0;E<g.length;E++){if(R=g[E],D=R._gsap||Q_(g)[E]._gsap,e._ptLookup[E]=L={},k_[D.id]&&Zs.length&&Ep(),N=m===g?E:m.indexOf(R),V&&(W=new V).init(R,O||b,e,N,m)!==!1&&(e._pt=w=new Hn(e._pt,R,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(Q){L[Q]=w}),W.priority&&(P=1)),!V||O)for(y in b)ei[y]&&(W=sv(y,b,e,N,R,m))?W.priority&&(P=1):L[y]=w=rv.call(e,R,y,"get",b[y],N,m,0,r.stringFilter);e._op&&e._op[E]&&e.kill(R,e._op[E]),x&&e._pt&&(js=e,Dt.killTweensOf(R,L,e.globalTime(t)),$=!e.parent,js=0),e._pt&&l&&(k_[D.id]=1)}P&&uv(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,h&&t<=0&&S.render(ki,!0,!0)},HI=function(e,t,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,p;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(u=h[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return W_=1,e.vars[t]="+=0",av(e,o),W_=0,l?Pu(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(p=c.length;p--;)f=c[p],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,f.e&&(f.e=Vt(i)+yn(f.e)),f.b&&(f.b=u.s+yn(f.b))},WI=function(e,t){var i=e[0]?Js(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=dl({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},XI=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(Ln(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Cu=function(e,t,i,r,s){return zt(e)?e.call(t,i,r,s):nn(e)&&~e.indexOf("random(")?_l(e):e},hT=J_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",fT={};Gn(hT+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return fT[n]=1});var Yt=(function(n){Bb(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:Eu(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,_=l.keyframes,v=l.defaults,g=l.scrollTrigger,d=r.parent||Dt,m=(Ln(i)||Vb(i)?ts(i[0]):"length"in r)?[i]:Bi(i),x,S,T,b,E,y,w,R;if(o._targets=m.length?Q_(m):Pu("GSAP target "+i+" not found. https://gsap.com",!ii.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||h||Sp(c)||Sp(u)){r=o.vars;var P=r.easeReverse||r.yoyoEase;if(x=o.timeline=new Dn({data:"nested",defaults:v||{},targets:d&&d.data==="nested"?d.vars.targets:m}),x.kill(),x.parent=x._dp=Qr(o),x._start=0,h||Sp(c)||Sp(u)){if(b=m.length,w=h&&tT(h),wr(h))for(E in h)~hT.indexOf(E)&&(R||(R={}),R[E]=h[E]);for(S=0;S<b;S++)T=Ap(r,fT),T.stagger=0,P&&(T.easeReverse=P),R&&dl(T,R),y=m[S],T.duration=+Cu(c,Qr(o),S,y,m),T.delay=(+Cu(u,Qr(o),S,y,m)||0)-o._delay,!h&&b===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),x.to(y,T,w?w(S,y,m):0),x._ease=Qe.none;x.duration()?c=u=0:o.timeline=0}else if(_){Eu(Si(x.vars.defaults,{ease:"none"})),x._ease=Ha(_.ease||r.ease||"none");var D=0,V,W,L;if(Ln(_))_.forEach(function(N){return x.to(m,N,">")}),x.duration();else{T={};for(E in _)E==="ease"||E==="easeEach"||XI(E,_[E],T,_.easeEach);for(E in T)for(V=T[E].sort(function(N,O){return N.t-O.t}),D=0,S=0;S<V.length;S++)W=V[S],L={ease:W.e,duration:(W.t-(S?V[S-1].t:0))/100*c},L[E]=W.v,x.to(m,L,D),D+=L.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return p===!0&&!q_&&(js=Qr(o),Dt.killTweensOf(m),js=0),Tr(d,Qr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!_&&o._start===Nt(d._time)&&ni(f)&&SI(Qr(o))&&d.data!=="nested")&&(o._tTime=-mt,o.render(Math.max(0,-u)||0)),g&&Zb(Qr(o),g),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-mt&&!u?l:r<mt?0:r,h,p,_,v,g,d,m,x;if(!c)bI(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,x=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(v*100+r,s,a);if(h=Nt(f%v),f===l?(_=this._repeat,h=c):(g=Nt(f/v),_=~~g,_&&_===g?(h=c,_--):h>c&&(h=c)),d=this._yoyo&&_&1,d&&(h=c-h),g=pl(this._tTime,v),h===o&&!a&&this._initted&&_===g)return this._tTime=f,this;_!==g&&this.vars.repeatRefresh&&!d&&!this._lock&&h!==v&&this._initted&&(this._lock=a=1,this.render(Nt(v*_),!0).invalidate()._lock=0)}if(!this._initted){if(Jb(this,u?r:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==g))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var S=h<o;if(S!==this._inv){var T=S?o:c-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=T?(S?-1:1)/T:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(h/c);if(this._from&&(this.ratio=m=1-m),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!g&&(xi(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(m,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&B_(this,r,s,a),xi(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&xi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&B_(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Qs(this,1),!s&&!(u&&!o)&&(f||o||d)&&(xi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){Nu||ti.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||av(this,c),u=this._ease(c/this._dur),HI(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Lp(this,0),this.parent||$b(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Tu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!xn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,js&&js.vars.overwrite!==!0)._first||Tu(this),this.parent&&a!==this.timeline.totalDuration()&&ml(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Bi(r):o,c=this._ptLookup,u=this._pt,f,h,p,_,v,g,d;if((!s||s==="all")&&xI(o,l))return s==="all"&&(this._pt=0),Tu(this);for(f=this._op=this._op||[],s!=="all"&&(nn(s)&&(v={},Gn(s,function(m){return v[m]=1}),s=v),s=WI(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){h=c[d],s==="all"?(f[d]=s,_=h,p={}):(p=f[d]=f[d]||{},_=s);for(v in _)g=h&&h[v],g&&((!("kill"in g.d)||g.d.kill(v)===!0)&&Np(this,g,"_pt"),delete h[v]),p!=="all"&&(p[v]=1)}return this._initted&&!this._pt&&u&&Tu(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Au(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Au(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Dt.killTweensOf(r,s,a)},e})(Du);Si(Yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Gn("staggerTo,staggerFrom,staggerFromTo",function(n){Yt[n]=function(){var e=new Dn,t=V_.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var ov=function(e,t,i){return e[t]=i},dT=function(e,t,i){return e[t](i)},qI=function(e,t,i,r){return e[t](r.fp,i)},YI=function(e,t,i){return e.setAttribute(t,i)},Fp=function(e,t){return zt(e[t])?dT:Pp(e[t])&&e.setAttribute?YI:ov},pT=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},KI=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},lv=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},cv=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},$I=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},jI=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Np(this,t,"_pt"):t.dep||(i=1),t=r;return!i},ZI=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},uv=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},Hn=(function(){function n(t,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||pT,this.d=l||this,this.set=c||ov,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=ZI,this.m=i,this.mt=s,this.tween=r},n})();Gn(J_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Z_[n]=1});yi.TweenMax=yi.TweenLite=Yt;yi.TimelineLite=yi.TimelineMax=Dn;Dt=new Dn({sortChildren:!1,defaults:Ru,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ii.stringFilter=nv;var Wa=[],Tp={},JI=[],kb=0,QI=0,L_=function(e){return(Tp[e]||JI).map(function(t){return t()})},X_=function(){var e=Date.now(),t=[];e-kb>2&&(L_("matchMediaInit"),Wa.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=br.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),L_("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),kb=e,L_("matchMedia"))},mT=(function(){function n(t,i){this.selector=i&&G_(i),this.data=[],this._r=[],this.isReverted=!1,this.id=QI++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){zt(i)&&(s=r,r=i,i=zt);var a=this,o=function(){var c=Et,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=G_(s)),Et=a,f=r.apply(a,arguments),zt(f)&&a._r.push(f),Et=c,a.selector=u,a.isReverted=!1,f};return a.last=o,i===zt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=Et;Et=null,i(this),Et=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Yt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Dn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Yt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Wa.length;a--;)Wa[a].id===this.id&&Wa.splice(a,1)},e.revert=function(i){this.kill(i||{})},n})(),eN=(function(){function n(t){this.contexts=[],this.scope=t,Et&&Et.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){wr(i)||(i={matches:i});var a=new mT(0,s||this.scope),o=a.conditions={},l,c,u;Et&&!a.selector&&(a.selector=Et.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=br.matchMedia(i[c]),l&&(Wa.indexOf(a)<0&&Wa.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(X_):l.addEventListener("change",X_)));return u&&r(a,function(f){return a.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),Rp={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return oT(r)})},timeline:function(e){return new Dn(e)},getTweensOf:function(e,t){return Dt.getTweensOf(e,t)},getProperty:function(e,t,i,r){nn(e)&&(e=Bi(e)[0]);var s=Js(e||{}).get,a=i?Kb:Yb;return i==="native"&&(i=""),e&&(t?a((ei[t]&&ei[t].get||s)(e,t,i,r)):function(o,l,c){return a((ei[o]&&ei[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=Bi(e),e.length>1){var r=e.map(function(u){return Fn.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var a=ei[t],o=Js(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;fl._pt=0,f.init(e,i?u+i:u,fl,0,[e]),f.render(1,f),fl._pt&&cv(1,fl)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var r,s=Fn.to(e,Si((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ha(e.ease,Ru.ease)),Db(Ru,e||{})},config:function(e){return Db(ii,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!ei[o]&&!yi[o]&&Pu(t+" effect requires "+o+" plugin.")}),P_[t]=function(o,l,c){return i(Bi(o),Si(l||{},s),c)},a&&(Dn.prototype[t]=function(o,l,c){return this.add(P_[t](o,wr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Qe[e]=Ha(t)},parseEase:function(e,t){return arguments.length?Ha(e,t):Qe},getById:function(e){return Dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Dn(e),r,s;for(i.smoothChildTiming=ni(e.smoothChildTiming),Dt.remove(i),i._dp=0,i._time=i._tTime=Dt._time,r=Dt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Yt&&r.vars.onComplete===r._targets[0]))&&Tr(i,r,r._start-r._delay),r=s;return Tr(Dt,i,0),i},context:function(e,t){return e?new mT(e,t):Et},matchMedia:function(e){return new eN(e)},matchMediaRefresh:function(){return Wa.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||X_()},addEventListener:function(e,t){var i=Tp[e]||(Tp[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Tp[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:II,wrapYoyo:NI,distribute:tT,random:iT,snap:nT,normalize:PI,getUnit:yn,clamp:EI,splitColor:lT,toArray:Bi,selector:G_,mapRange:sT,pipe:CI,unitize:RI,interpolate:DI,shuffle:eT},install:Hb,effects:P_,ticker:ti,updateRoot:Dn.updateRoot,plugins:ei,globalTimeline:Dt,core:{PropTween:Hn,globals:Wb,Tween:Yt,Timeline:Dn,Animation:Du,getCache:Js,_removeLinkedListItem:Np,reverting:function(){return xn},context:function(e){return e&&Et&&(Et.data.push(e),e._ctx=Et),Et},suppressOverwrites:function(e){return q_=e}}};Gn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Rp[n]=Yt[n]});ti.add(Dn.updateRoot);fl=Rp.to({},{duration:0});var tN=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},nN=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=tN(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},F_=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(nn(s)&&(l={},Gn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}nN(o,s)}}}},Fn=Rp.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)xn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},F_("roundProps",H_),F_("modifiers"),F_("snap",nT))||Rp;Yt.version=Dn.version=Fn.version="3.15.0";Gb=1;Y_()&&gl();var iN=Qe.Power0,rN=Qe.Power1,sN=Qe.Power2,aN=Qe.Power3,oN=Qe.Power4,lN=Qe.Linear,cN=Qe.Quad,uN=Qe.Cubic,hN=Qe.Quart,fN=Qe.Quint,dN=Qe.Strong,pN=Qe.Elastic,mN=Qe.Back,gN=Qe.SteppedEase,_N=Qe.Bounce,vN=Qe.Sine,xN=Qe.Expo,yN=Qe.Circ;var gT,ta,xl,gv,Za,SN,_T,_v,MN=function(){return typeof window<"u"},is={},ja=180/Math.PI,yl=Math.PI/180,vl=Math.atan2,vT=1e8,vv=/([A-Z])/g,bN=/(left|right|width|margin|padding|x)/i,TN=/[\s,\(]\S/,Er={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},wN=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},EN=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},AN=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},CN=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},ET=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},AT=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},RN=function(e,t,i){return e.style[t]=i},PN=function(e,t,i){return e.style.setProperty(t,i)},IN=function(e,t,i){return e._gsap[t]=i},NN=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},DN=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},LN=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},Lt="transform",ri=Lt+"Origin",FN=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in is&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Er[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=ns(r,o)}):this.tfm[e]=a.x?a[e]:ns(r,e),e===ri&&(this.tfm.zOrigin=a.zOrigin);else return Er.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(Lt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ri,t,"")),e=Lt}(s||t)&&this.props.push(e,t,s[e])},CT=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},UN=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(vv,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=_v(),(!s||!s.isStart)&&!i[Lt]&&(CT(i),r.zOrigin&&i[ri]&&(i[ri]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},RT=function(e,t){var i={target:e,props:[],revert:UN,save:FN};return e._gsap||Fn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},PT,dv=function(e,t){var i=ta.createElementNS?ta.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ta.createElement(e);return i&&i.style?i:ta.createElement(e)},Mi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(vv,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Sl(t)||t,1)||""},xT="O,Moz,ms,Ms,Webkit".split(","),Sl=function(e,t,i){var r=t||Za,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(xT[a]+e in s););return a<0?null:(a===3?"ms":a>=0?xT[a]:"")+e},pv=function(){MN()&&window.document&&(gT=window,ta=gT.document,xl=ta.documentElement,Za=dv("div")||{style:{}},SN=dv("div"),Lt=Sl(Lt),ri=Lt+"Origin",Za.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",PT=!!Sl("perspective"),_v=Fn.core.reverting,gv=1)},yT=function(e){var t=e.ownerSVGElement,i=dv("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),xl.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),xl.removeChild(i),s},ST=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},IT=function(e){var t,i;try{t=e.getBBox()}catch{t=yT(e),i=1}return t&&(t.width||t.height)||i||(t=yT(e)),t&&!t.width&&!t.x&&!t.y?{x:+ST(e,["x","cx","x1"])||0,y:+ST(e,["y","cy","y1"])||0,width:0,height:0}:t},NT=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&IT(e))},ia=function(e,t){if(t){var i=e.style,r;t in is&&t!==ri&&(t=Lt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(vv,"-$1").toLowerCase())):i.removeAttribute(t)}},na=function(e,t,i,r,s,a){var o=new Hn(e._pt,t,i,0,1,a?AT:ET);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},MT={deg:1,rad:1,turn:1},ON={grid:1,flex:1},ra=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Za.style,l=bN.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",_,v,g,d;if(r===a||!s||MT[r]||MT[a])return s;if(a!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&NT(e),(p||a==="%")&&(is[t]||~t.indexOf("adius")))return _=d?e.getBBox()[l?"width":"height"]:e[u],Vt(p?s/_*f:s/100*_);if(o[l?"width":"height"]=f+(h?a:r),v=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===ta||!v.appendChild)&&(v=ta.body),g=v._gsap,g&&p&&g.width&&l&&g.time===ti.time&&!g.uncache)return Vt(s/g.width*f);if(p&&(t==="height"||t==="width")){var m=e.style[t];e.style[t]=f+r,_=e[u],m?e.style[t]=m:ia(e,t)}else(p||a==="%")&&!ON[Mi(v,"display")]&&(o.position=Mi(e,"position")),v===e&&(o.position="static"),v.appendChild(Za),_=Za[u],v.removeChild(Za),o.position="absolute";return l&&p&&(g=Js(v),g.time=ti.time,g.width=v[u]),Vt(h?_*s/f:_&&s?f/_*s:0)},ns=function(e,t,i,r){var s;return gv||pv(),t in Er&&t!=="transform"&&(t=Er[t],~t.indexOf(",")&&(t=t.split(",")[0])),is[t]&&t!=="transform"?(s=Ou(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Op(Mi(e,ri))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Up[t]&&Up[t](e,t,i)||Mi(e,t)||ev(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?ra(e,t,s,i)+i:s},kN=function(e,t,i,r){if(!i||i==="none"){var s=Sl(t,e,1),a=s&&Mi(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=Mi(e,"borderTopColor"))}var o=new Hn(this._pt,e.style,t,0,1,lv),l=0,c=0,u,f,h,p,_,v,g,d,m,x,S,T;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Mi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(v=e.style[t],e.style[t]=r,r=Mi(e,t)||r,v?e.style[t]=v:ia(e,t)),u=[i,r],nv(u),i=u[0],r=u[1],h=i.match(Xa)||[],T=r.match(Xa)||[],T.length){for(;f=Xa.exec(r);)g=f[0],m=r.substring(l,f.index),_?_=(_+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(_=1),g!==(v=h[c++]||"")&&(p=parseFloat(v)||0,S=v.substr((p+"").length),g.charAt(1)==="="&&(g=qa(p,g)+S),d=parseFloat(g),x=g.substr((d+"").length),l=Xa.lastIndex-x.length,x||(x=x||ii.units[t]||S,l===r.length&&(r+=x,o.e+=x)),S!==x&&(p=ra(e,t,v,x)||0),o._pt={_next:o._pt,p:m||c===1?m:",",s:p,c:d-p,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?AT:ET;return $_.test(r)&&(o.e=0),this._pt=o,o},bT={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},BN=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=bT[i]||i,t[1]=bT[r]||r,t.join(" ")},zN=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],is[o]&&(l=1,o=o==="transformOrigin"?ri:Lt),ia(i,o);l&&(ia(i,Lt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ou(i,1),a.uncache=1,CT(r)))}},Up={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Hn(e._pt,t,i,0,0,zN);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},Uu=[1,0,0,1,0,0],DT={},LT=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},TT=function(e){var t=Mi(e,Lt);return LT(t)?Uu:t.substr(7).match(K_).map(Vt)},xv=function(e,t){var i=e._gsap||Js(e),r=e.style,s=TT(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Uu:s):(s===Uu&&!e.offsetParent&&e!==xl&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,xl.appendChild(e)),s=TT(e),l?r.display=l:ia(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):xl.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},mv=function(e,t,i,r,s,a){var o=e._gsap,l=s||xv(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,p=l[0],_=l[1],v=l[2],g=l[3],d=l[4],m=l[5],x=t.split(" "),S=parseFloat(x[0])||0,T=parseFloat(x[1])||0,b,E,y,w;i?l!==Uu&&(E=p*g-_*v)&&(y=S*(g/E)+T*(-v/E)+(v*m-g*d)/E,w=S*(-_/E)+T*(p/E)-(p*m-_*d)/E,S=y,T=w):(b=IT(e),S=b.x+(~x[0].indexOf("%")?S/100*b.width:S),T=b.y+(~(x[1]||x[0]).indexOf("%")?T/100*b.height:T)),r||r!==!1&&o.smooth?(d=S-c,m=T-u,o.xOffset=f+(d*p+m*v)-d,o.yOffset=h+(d*_+m*g)-m):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=T,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[ri]="0px 0px",a&&(na(a,o,"xOrigin",c,S),na(a,o,"yOrigin",u,T),na(a,o,"xOffset",f,o.xOffset),na(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+T)},Ou=function(e,t){var i=e._gsap||new iv(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Mi(e,ri)||"0",u,f,h,p,_,v,g,d,m,x,S,T,b,E,y,w,R,P,D,V,W,L,N,O,$,Q,re,pe,ve,He,Be,Pe;return u=f=h=v=g=d=m=x=S=0,p=_=1,i.svg=!!(e.getCTM&&NT(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Lt]!=="none"?l[Lt]:"")),r.scale=r.rotate=r.translate="none"),E=xv(e,i.svg),i.svg&&(i.uncache?($=e.getBBox(),c=i.xOrigin-$.x+"px "+(i.yOrigin-$.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),mv(e,O||c,!!O||i.originIsAbsolute,i.smooth!==!1,E)),T=i.xOrigin||0,b=i.yOrigin||0,E!==Uu&&(P=E[0],D=E[1],V=E[2],W=E[3],u=L=E[4],f=N=E[5],E.length===6?(p=Math.sqrt(P*P+D*D),_=Math.sqrt(W*W+V*V),v=P||D?vl(D,P)*ja:0,m=V||W?vl(V,W)*ja+v:0,m&&(_*=Math.abs(Math.cos(m*yl))),i.svg&&(u-=T-(T*P+b*V),f-=b-(T*D+b*W))):(Pe=E[6],He=E[7],re=E[8],pe=E[9],ve=E[10],Be=E[11],u=E[12],f=E[13],h=E[14],y=vl(Pe,ve),g=y*ja,y&&(w=Math.cos(-y),R=Math.sin(-y),O=L*w+re*R,$=N*w+pe*R,Q=Pe*w+ve*R,re=L*-R+re*w,pe=N*-R+pe*w,ve=Pe*-R+ve*w,Be=He*-R+Be*w,L=O,N=$,Pe=Q),y=vl(-V,ve),d=y*ja,y&&(w=Math.cos(-y),R=Math.sin(-y),O=P*w-re*R,$=D*w-pe*R,Q=V*w-ve*R,Be=W*R+Be*w,P=O,D=$,V=Q),y=vl(D,P),v=y*ja,y&&(w=Math.cos(y),R=Math.sin(y),O=P*w+D*R,$=L*w+N*R,D=D*w-P*R,N=N*w-L*R,P=O,L=$),g&&Math.abs(g)+Math.abs(v)>359.9&&(g=v=0,d=180-d),p=Vt(Math.sqrt(P*P+D*D+V*V)),_=Vt(Math.sqrt(N*N+Pe*Pe)),y=vl(L,N),m=Math.abs(y)>2e-4?y*ja:0,S=Be?1/(Be<0?-Be:Be):0),i.svg&&(O=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!LT(Mi(e,Lt)),O&&e.setAttribute("transform",O))),Math.abs(m)>90&&Math.abs(m)<270&&(s?(p*=-1,m+=v<=0?180:-180,v+=v<=0?180:-180):(_*=-1,m+=m<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=h+a,i.scaleX=Vt(p),i.scaleY=Vt(_),i.rotation=Vt(v)+o,i.rotationX=Vt(g)+o,i.rotationY=Vt(d)+o,i.skewX=m+o,i.skewY=x+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ri]=Op(c)),i.xOffset=i.yOffset=0,i.force3D=ii.force3D,i.renderTransform=i.svg?GN:PT?FT:VN,i.uncache=0,i},Op=function(e){return(e=e.split(" "))[0]+" "+e[1]},hv=function(e,t,i){var r=yn(t);return Vt(parseFloat(t)+parseFloat(ra(e,"x",i+"px",r)))+r},VN=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,FT(e,t)},Ka="0deg",Fu="0px",$a=") ",FT=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,_=i.scaleX,v=i.scaleY,g=i.transformPerspective,d=i.force3D,m=i.target,x=i.zOrigin,S="",T=d==="auto"&&e&&e!==1||d===!0;if(x&&(f!==Ka||u!==Ka)){var b=parseFloat(u)*yl,E=Math.sin(b),y=Math.cos(b),w;b=parseFloat(f)*yl,w=Math.cos(b),a=hv(m,a,E*w*-x),o=hv(m,o,-Math.sin(b)*-x),l=hv(m,l,y*w*-x+x)}g!==Fu&&(S+="perspective("+g+$a),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(T||a!==Fu||o!==Fu||l!==Fu)&&(S+=l!==Fu||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+$a),c!==Ka&&(S+="rotate("+c+$a),u!==Ka&&(S+="rotateY("+u+$a),f!==Ka&&(S+="rotateX("+f+$a),(h!==Ka||p!==Ka)&&(S+="skew("+h+", "+p+$a),(_!==1||v!==1)&&(S+="scale("+_+", "+v+$a),m.style[Lt]=S||"translate(0, 0)"},GN=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,_=i.xOrigin,v=i.yOrigin,g=i.xOffset,d=i.yOffset,m=i.forceCSS,x=parseFloat(a),S=parseFloat(o),T,b,E,y,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=yl,c*=yl,T=Math.cos(l)*f,b=Math.sin(l)*f,E=Math.sin(l-c)*-h,y=Math.cos(l-c)*h,c&&(u*=yl,w=Math.tan(c-u),w=Math.sqrt(1+w*w),E*=w,y*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),T*=w,b*=w)),T=Vt(T),b=Vt(b),E=Vt(E),y=Vt(y)):(T=f,y=h,b=E=0),(x&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(x=ra(p,"x",a,"px"),S=ra(p,"y",o,"px")),(_||v||g||d)&&(x=Vt(x+_-(_*T+v*E)+g),S=Vt(S+v-(_*b+v*y)+d)),(r||s)&&(w=p.getBBox(),x=Vt(x+r/100*w.width),S=Vt(S+s/100*w.height)),w="matrix("+T+","+b+","+E+","+y+","+x+","+S+")",p.setAttribute("transform",w),m&&(p.style[Lt]=w)},HN=function(e,t,i,r,s){var a=360,o=nn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ja:1),c=l-r,u=r+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*vT)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*vT)%a-~~(c/a)*a)),e._pt=h=new Hn(e._pt,t,i,r,c,wN),h.e=u,h.u="deg",e._props.push(i),h},wT=function(e,t){for(var i in t)e[i]=t[i];return e},WN=function(e,t,i){var r=wT({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,f,h,p,_;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Lt]=t,o=Ou(i,1),ia(i,Lt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Lt],a[Lt]=t,o=Ou(i,1),a[Lt]=c);for(l in is)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=yn(c),_=yn(u),f=p!==_?ra(i,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new Hn(e._pt,o,l,f,h-f,fv),e._pt.u=_||0,e._props.push(l));wT(o,r)};Gn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});Up[e>1?"border"+n:n]=function(o,l,c,u,f){var h,p;if(arguments.length<4)return h=a.map(function(_){return ns(o,_,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},a.forEach(function(_,v){return p[_]=h[v]=h[v]||h[(v-1)/2|0]}),o.init(l,p,f)}});var yv={name:"css",register:pv,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,f,h,p,_,v,g,d,m,x,S,T,b,E,y,w;gv||pv(),this.styles=this.styles||RT(e),y=this.styles.props,this.tween=i;for(v in t)if(v!=="autoRound"&&(u=t[v],!(ei[v]&&sv(v,t,i,r,e,s)))){if(p=typeof u,_=Up[v],p==="function"&&(u=u.call(i,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=_l(u)),_)_(this,e,v,u,i)&&(E=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),u+="",es.lastIndex=0,es.test(c)||(g=yn(c),d=yn(u),d?g!==d&&(c=ra(e,v,c,d)+d):g&&(u+=g)),this.add(o,"setProperty",c,u,r,s,0,0,v),a.push(v),y.push(v,0,o[v]);else if(p!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(i,r,e,s):l[v],nn(c)&&~c.indexOf("random(")&&(c=_l(c)),yn(c+"")||c==="auto"||(c+=ii.units[v]||yn(ns(e,v))||""),(c+"").charAt(1)==="="&&(c=ns(e,v))):c=ns(e,v),h=parseFloat(c),m=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),m&&(u=u.substr(2)),f=parseFloat(u),v in Er&&(v==="autoAlpha"&&(h===1&&ns(e,"visibility")==="hidden"&&f&&(h=0),y.push("visibility",0,o.visibility),na(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),v!=="scale"&&v!=="transform"&&(v=Er[v],~v.indexOf(",")&&(v=v.split(",")[0]))),x=v in is,x){if(this.styles.save(v),w=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=Mi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=Mi(e,"perspective"),R?e.style.perspective=R:ia(e,"perspective")}f=parseFloat(u)}if(S||(T=e._gsap,T.renderTransform&&!t.parseTransform||Ou(e,t.parseTransform),b=t.smoothOrigin!==!1&&T.smooth,S=this._pt=new Hn(this._pt,o,Lt,0,1,T.renderTransform,T,0,-1),S.dep=1),v==="scale")this._pt=new Hn(this._pt,T,"scaleY",T.scaleY,(m?qa(T.scaleY,m+f):f)-T.scaleY||0,fv),this._pt.u=0,a.push("scaleY",v),v+="X";else if(v==="transformOrigin"){y.push(ri,0,o[ri]),u=BN(u),T.svg?mv(e,u,0,b,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==T.zOrigin&&na(this,T,"zOrigin",T.zOrigin,d),na(this,o,v,Op(c),Op(u)));continue}else if(v==="svgOrigin"){mv(e,u,1,b,0,this);continue}else if(v in DT){HN(this,T,v,h,m?qa(h,m+u):u);continue}else if(v==="smoothOrigin"){na(this,T,"smooth",T.smooth,u);continue}else if(v==="force3D"){T[v]=u;continue}else if(v==="transform"){WN(this,u,e);continue}}else v in o||(v=Sl(v)||v);if(x||(f||f===0)&&(h||h===0)&&!TN.test(u)&&v in o)g=(c+"").substr((h+"").length),f||(f=0),d=yn(u)||(v in ii.units?ii.units[v]:g),g!==d&&(h=ra(e,v,c,d)),this._pt=new Hn(this._pt,x?T:o,v,h,(m?qa(h,m+f):f)-h,!x&&(d==="px"||v==="zIndex")&&t.autoRound!==!1?CN:fv),this._pt.u=d||0,x&&w!==u?(this._pt.b=c,this._pt.e=w,this._pt.r=AN):g!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=EN);else if(v in o)kN.call(this,e,v,c,m?m+u:u);else if(v in e)this.add(e,v,c||e[v],m?m+u:u,r,s);else if(v!=="parseTransform"){Ip(v,u);continue}x||(v in o?y.push(v,0,o[v]):typeof e[v]=="function"?y.push(v,2,e[v]()):y.push(v,1,c||e[v])),a.push(v)}}E&&uv(this)},render:function(e,t){if(t.tween._time||!_v())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ns,aliases:Er,getSetter:function(e,t,i){var r=Er[t];return r&&r.indexOf(",")<0&&(t=r),t in is&&t!==ri&&(e._gsap.x||ns(e,"x"))?i&&_T===i?t==="scale"?NN:IN:(_T=i||{})&&(t==="scale"?DN:LN):e.style&&!Pp(e.style[t])?RN:~t.indexOf("-")?PN:Fp(e,t)},core:{_removeProperty:ia,_getMatrix:xv}};Fn.utils.checkPrefix=Sl;Fn.core.getStyleSaver=RT;(function(n,e,t,i){var r=Gn(n+","+e+","+t,function(s){is[s]=1});Gn(e,function(s){ii.units[s]="deg",DT[s]=1}),Er[r[13]]=n+","+e,Gn(i,function(s){var a=s.split(":");Er[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){ii.units[n]="px"});Fn.registerPlugin(yv);var Ml=Fn.registerPlugin(yv)||Fn,BO=Ml.core.Tween;var XN=()=>window.matchMedia("(max-width: 640px)").matches||navigator.maxTouchPoints>0&&window.innerWidth<820,qN=`
  uniform float uTime, uMorph, uSize, uPixelRatio;
  attribute vec3 aTarget;
  attribute float aSeed;
  varying float vGlow;
  varying float vMix;
  vec3 swirl(vec3 p, float t, float s){
    float a = t*0.28 + s*6.2831;
    return vec3(sin(a + p.y*1.7), cos(a*1.1 + p.z*1.3), sin(a*0.9 + p.x*1.5));
  }
  void main(){
    vec3 base = position;
    vec3 disp = swirl(base, uTime, aSeed) * (0.14 + 0.10*sin(uTime*0.5 + aSeed*10.0));
    vec3 idle = base + disp;
    vec3 pos  = mix(idle, aTarget, uMorph);
    vMix = uMorph;
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    float d = max(0.1, -mv.z);
    gl_PointSize = uSize * uPixelRatio * (9.0 / d) * (0.6 + 0.4*aSeed);
    gl_Position = projectionMatrix * mv;
    vGlow = 0.5 + 0.5*sin(uTime*2.0 + aSeed*30.0);
  }
`,YN=`
  precision highp float;
  uniform vec3 uColA, uColB, uColC;
  varying float vGlow;
  varying float vMix;
  void main(){
    vec2 uv = gl_PointCoord - 0.5;
    float r = length(uv);
    if (r > 0.5) discard;
    float soft = smoothstep(0.5, 0.0, r);
    float core = smoothstep(0.28, 0.0, r);
    vec3 col = mix(uColA, uColB, vGlow);
    col = mix(col, uColC, vMix * 0.55);
    col += core * 0.38;
    float alpha = soft * (0.45 + 0.4*core);
    gl_FragColor = vec4(col, alpha);
  }
`;function KN(n,e){return new Promise(t=>{let i=new Image;i.crossOrigin="anonymous",i.onload=()=>{let s=document.createElement("canvas");s.width=100,s.height=100;let a=s.getContext("2d",{willReadFrequently:!0});a.drawImage(i,0,0,100,100);let o=a.getImageData(0,0,100,100).data,l=[];for(let h=0;h<100;h++)for(let p=0;p<100;p++)o[(h*100+p)*4+3]>90&&l.push((p/100-.5)*2,-(h/100-.5)*2);let c=l.length/2,u=new Float32Array(e*3),f=2.35;for(let h=0;h<e;h++){let p=c?Math.floor(Math.random()*c)*2:0;u[h*3]=(c?l[p]:0)*f+(Math.random()-.5)*.06,u[h*3+1]=(c?l[p+1]:0)*f+(Math.random()-.5)*.06,u[h*3+2]=(Math.random()-.5)*.4}t(u)},i.onerror=()=>t(null),i.src=n})}function UT(n){let e=XN(),t=e?3800:9e3,i=2.05,r=new La,s=new gn(52,n.clientWidth/n.clientHeight,.1,100);s.position.set(0,0,6.4);let a=new dp({antialias:!e,alpha:!0,powerPreference:"high-performance"});a.setSize(n.clientWidth,n.clientHeight);let o=Math.min(window.devicePixelRatio,e?1.5:2);a.setPixelRatio(o),a.toneMapping=ka,a.toneMappingExposure=1.02,n.appendChild(a.domElement);let l=new al(a),c=l.fromScene(new yp,.04);r.environment=c.texture;let u=new yt(new qc(.62,e?3:6),new zs({color:13621738,metalness:1,roughness:.14,envMapIntensity:1}));r.add(u);let f=new Ua(10475519,3.2,12);r.add(f),r.add(new Jc(4871544,.6));let h=new Float32Array(t*3),p=new Float32Array(t*3),_=new Float32Array(t);for(let N=0;N<t;N++){let O=Math.random(),$=Math.random(),Q=Math.acos(2*O-1),re=2*Math.PI*$,pe=i*(.8+.2*Math.random()),ve=pe*Math.sin(Q)*Math.cos(re),He=pe*Math.sin(Q)*Math.sin(re),Be=pe*Math.cos(Q);h[N*3]=ve,h[N*3+1]=He,h[N*3+2]=Be,p[N*3]=ve,p[N*3+1]=He,p[N*3+2]=Be,_[N]=Math.random()}let v=new Pn;v.setAttribute("position",new ln(h,3)),v.setAttribute("aTarget",new ln(p,3)),v.setAttribute("aSeed",new ln(_,1));let g={uTime:{value:0},uMorph:{value:0},uSize:{value:e?2.4:3},uPixelRatio:{value:o},uColA:{value:new Ue(.62,.84,1)},uColB:{value:new Ue(.8,.7,1)},uColC:{value:new Ue(1,.85,.94)}},d=new It({uniforms:g,vertexShader:qN,fragmentShader:YN,transparent:!0,depthWrite:!1,blending:Kr}),m=new Hc(v,d);r.add(m);let x=new _p(a);if(x.setPixelRatio(o),x.setSize(n.clientWidth,n.clientHeight),x.addPass(new vp(r,s)),!e){x.addPass(new ul(new De(n.clientWidth,n.clientHeight),.5,.5,.34));let N=new cl(Pb);N.uniforms.amount.value=.0011,x.addPass(N)}x.addPass(new xp);let S=v.getAttribute("aTarget"),T=0;async function b(N){let O=++T,$=await KN(N,t);O!==T||!$||(S.array.set($),S.needsUpdate=!0,Ml.to(g.uMorph,{value:1,duration:1.05,ease:"power3.inOut"}),Ml.to(u.scale,{x:.15,y:.15,z:.15,duration:.8,ease:"power2.in"}))}function E(){T++,Ml.to(g.uMorph,{value:0,duration:.9,ease:"power3.inOut"}),Ml.to(u.scale,{x:1,y:1,z:1,duration:.9,ease:"power2.out"})}let y={x:0,y:0,tx:0,ty:0};function w(N,O){y.tx=N,y.ty=O}let R=new eu,P=0,D=!0;function V(){if(!D)return;P=requestAnimationFrame(V);let N=R.getElapsedTime();g.uTime.value=N,m.rotation.y=N*.06,m.rotation.x=Math.sin(N*.15)*.12,u.rotation.y=N*.22,u.rotation.x=N*.13,y.x+=(y.tx-y.x)*.05,y.y+=(y.ty-y.y)*.05,s.position.x=y.x*.7,s.position.y=y.y*.5,s.lookAt(0,0,0),x.render()}V();function W(){let N=n.clientWidth,O=n.clientHeight;s.aspect=N/O,s.updateProjectionMatrix(),a.setSize(N,O),x.setSize(N,O)}function L(){D=!1,cancelAnimationFrame(P),v.dispose(),d.dispose(),u.geometry.dispose(),u.material.dispose(),c.dispose(),l.dispose(),x.dispose?.(),a.dispose(),a.domElement.parentNode===n&&n.removeChild(a.domElement)}return{morphTo:b,reset:E,resize:W,dispose:L,setPointer:w}}var ze=ai(Br(),1),$N={locale:"zh",targetProfile:{...Io},tdee:cf,lunchMode:"planned",lunchKcal:800,tally:{},mealSplitPct:40,lunchCarbPlan:"fresh_noodle",lunchProteinKeys:["chicken"],lunchFatKeys:[],carbPlan:"pasta",proteinKeys:["beef"],fatKeys:[],extraCarbs:{},beefFat:5,pre:{},drinkKey:"none",drinkMl:0,saltG:6.5,foodK:2e3,shopPlan:mc(wa),shopDays:7,lunchAdjustments:{},dinnerAdjustments:{},snack:{name:"\u624B\u52A8\u52A0\u9910",p:0,c:0,f:0,kcal:0},cheat:{}},OT=n=>mf(`food/${d0[n]||n}.png`),jN=[{id:"intake",food:"beef",label:{zh:"\u4ECA\u65E5\u5DF2\u5403",ja:"\u98DF\u3079\u305F\u3082\u306E"},sub:{zh:"\u51B0\u7BB1 \xB7 \u8BB0\u5F55",ja:"\u51B7\u8535\u5EAB \xB7 \u8A18\u9332"}},{id:"dinner",food:"pasta",label:{zh:"\u4ECA\u665A\u5C31\u8FD9\u6837\u5403",ja:"\u4ECA\u591C\u306E\u5915\u98DF"},sub:{zh:"\u7076\u53F0 \xB7 \u665A\u9910",ja:"\u30B3\u30F3\u30ED \xB7 \u5915\u98DF"}},{id:"structure",food:"onigiri",label:{zh:"\u4ECA\u65E5\u7ED3\u6784",ja:"\u4ECA\u65E5\u306E\u69CB\u6210"},sub:{zh:"\u9ED1\u677F \xB7 \u4E00\u89C8",ja:"\u9ED2\u677F \xB7 \u4E00\u89A7"}},{id:"shop",food:"apple",label:{zh:"\u91C7\u8D2D\u6E05\u5355",ja:"\u8CB7\u3044\u7269"},sub:{zh:"\u7BEE\u5B50 \xB7 \u4E00\u5468",ja:"\u304B\u3054 \xB7 \u4E00\u9031\u9593"}},{id:"detail",food:"banana",label:{zh:"\u8425\u517B\u660E\u7EC6",ja:"\u6804\u990A\u306E\u8A73\u7D30"},sub:{zh:"\u8D26\u672C \xB7 \u62C6\u89E3",ja:"\u5E33\u7C3F \xB7 \u5185\u8A33"}},{id:"cheat",food:"kfc",label:{zh:"\u653E\u7EB5\u4E00\u4E0B",ja:"\u3054\u307B\u3046\u3073"},sub:{zh:"\u6447\u6905 \xB7 \u4F5C\u5F0A\u9910",ja:"\u4F11\u61A9 \xB7 \u30C1\u30FC\u30C8"}}],ZN=jN.map((n,e)=>{let t=(-90+e*60)*(Math.PI/180);return{...n,cos:Math.cos(t),sin:Math.sin(t)}});function Sv(){let[n,e]=(0,hn.useState)($N),[t,i]=(0,hn.useState)(null),[r,s]=(0,hn.useState)(!1),[a,o]=(0,hn.useState)(""),[l,c]=(0,hn.useState)(!1),u=(0,hn.useRef)(null),f=(0,hn.useRef)(null),h=y=>e(w=>({...w,...typeof y=="function"?y(w):y})),p=(0,hn.useMemo)(()=>bM(n.locale),[n.locale]),_=(0,hn.useMemo)(()=>MM(n),[n]),v=n.locale;(0,hn.useEffect)(()=>{document.documentElement.lang=v==="ja"?"ja":"zh-CN",document.title=v==="ja"?"Cutting Lab \xB7 \u4ECA\u65E5\u306E\u3054\u306F\u3093 (3D)":"Cutting Lab \xB7 \u4ECA\u65E5\u9910\u76D8 (3D)"},[v]),(0,hn.useEffect)(()=>{if(!u.current)return;let y=UT(u.current);f.current=y;let w=setTimeout(()=>c(!0),500),R=()=>y.resize(),P=D=>{let V=D.clientX/window.innerWidth*2-1,W=-(D.clientY/window.innerHeight*2-1);y.setPointer(V,W)};return window.addEventListener("resize",R),window.addEventListener("pointermove",P),()=>{clearTimeout(w),window.removeEventListener("resize",R),window.removeEventListener("pointermove",P),y.dispose()}},[]);let g=(0,hn.useCallback)(y=>{y&&f.current&&f.current.morphTo(OT(y))},[]),d=(0,hn.useCallback)(()=>{!t&&f.current&&f.current.reset()},[t]),m=y=>{Jt("open"),i(y.id),y.food&&g(y.food)},x=()=>{Jt("close"),i(null),f.current&&f.current.reset()},T={S:n,up:h,model:_,t:p,locale:v,flash:y=>{o(y),setTimeout(()=>o(""),1600)}},b=_.carbDay?p(_.carbDay.label==="\u4F4E\u78B3"?"lowCarb":_.carbDay.label==="\u4E2D\u78B3"?"mediumCarb":"highCarb"):"",E=fe((_.total.c||0)/Math.max(1,n.targetProfile.bodyWeightKg),1);return(0,ze.jsxs)("div",{className:"app3d",children:[(0,ze.jsx)("div",{className:`boot ${l?"hide":""}`,children:(0,ze.jsxs)("div",{children:[(0,ze.jsx)("div",{className:"ring-spin"}),(0,ze.jsx)("div",{className:"bt",children:"Cutting Lab \xB7 3D"})]})}),(0,ze.jsx)("div",{className:"stage3d",ref:u}),(0,ze.jsx)("div",{className:"stage-vignette"}),(0,ze.jsxs)("div",{className:"appbar",children:[(0,ze.jsxs)("div",{className:"brand",children:[(0,ze.jsx)("img",{className:"logo",src:mf("char/chef_idle.png"),alt:""}),(0,ze.jsxs)("div",{children:[(0,ze.jsx)("b",{children:"Cutting Lab"}),(0,ze.jsx)("span",{children:p("appSub")})]})]}),(0,ze.jsxs)("div",{className:"row",style:{gap:6},children:[(0,ze.jsxs)("div",{className:"row",style:{gap:0},children:[(0,ze.jsx)("a",{className:"pbtn sm ghost",href:"../",onClick:()=>Jt("tap"),"aria-label":v==="ja"?"\u30E2\u30D0\u30A4\u30EB":"\u624B\u673A\u7AEF",title:v==="ja"?"\u30E2\u30D0\u30A4\u30EB\u7248\u3078":"\u5207\u6362\u5230\u624B\u673A\u7AEF",style:{textDecoration:"none",borderTopRightRadius:0,borderBottomRightRadius:0},children:"\u{1F4F1}"}),(0,ze.jsx)("button",{className:"pbtn sm sel","aria-label":v==="ja"?"\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7":"\u684C\u9762\u7AEF",title:v==="ja"?"\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7 3D(\u8868\u793A\u4E2D)":"\u684C\u9762\u7AEF 3D \xB7 \u5F53\u524D",style:{borderTopLeftRadius:0,borderBottomLeftRadius:0},children:"\u{1F5A5}"})]}),(0,ze.jsx)("button",{className:`pbtn sm ${r?"on":"ghost"}`,onClick:()=>{CM();let y=AM();s(y),Jt("tap")},"aria-label":"music",title:"music",children:"\u266A"}),(0,ze.jsx)("button",{className:`pbtn sm ${v==="zh"?"sel":"ghost"}`,onClick:()=>{Jt("tap"),h({locale:"zh"})},children:"\u4E2D\u6587"}),(0,ze.jsx)("button",{className:`pbtn sm ${v==="ja"?"sel":"ghost"}`,onClick:()=>{Jt("tap"),h({locale:"ja"})},children:"\u65E5\u672C\u8A9E"}),(0,ze.jsx)("button",{className:"pbtn sm ghost",onClick:()=>{Jt("open"),i("settings")},"aria-label":v==="ja"?"\u8A2D\u5B9A":"\u8BBE\u7F6E",title:"settings",children:"\u2699"})]})]}),(0,ze.jsx)("div",{className:"ring",children:ZN.map(y=>(0,ze.jsxs)("button",{className:"node",style:{left:`calc(50% + (${y.cos} * min(34vw, 340px)))`,top:`calc(50% + (${y.sin} * min(32vh, 300px)))`},onMouseEnter:()=>g(y.food),onMouseLeave:d,onFocus:()=>g(y.food),onBlur:d,onClick:()=>m(y),"aria-label":y.label[v],children:[(0,ze.jsx)("span",{className:"node-ic",children:(0,ze.jsx)("img",{src:OT(y.food),alt:""})}),(0,ze.jsx)("span",{className:"node-lb",children:y.label[v]}),(0,ze.jsx)("span",{className:"node-sub",children:y.sub[v]})]},y.id))}),(0,ze.jsx)("div",{className:"stage-hint",children:v==="ja"?"\u7BC0\u70B9\u306B\u30DB\u30D0\u30FC \u2192 \u7C92\u5B50\u304C\u98DF\u6750\u306B\u5909\u308F\u308B \xB7 \u30BF\u30C3\u30D7\u3067\u8A73\u7D30":"\u60AC\u505C\u8282\u70B9 \xB7 \u7C92\u5B50\u5316\u4F5C\u98DF\u6750 \xB7 \u70B9\u51FB\u5C55\u5F00"}),(0,ze.jsx)("div",{className:"hud",children:(0,ze.jsxs)("div",{className:"grid3",children:[(0,ze.jsx)(Bt,{k:p("dinnerKcal"),v:fe(_.dinner.kcal)}),(0,ze.jsx)(Bt,{k:p("deficit"),v:`${_.deficit>=0?"":"+"}${_.deficit>=0?"-":""}${Math.abs(_.deficit)}`,tone:_.deficit>=0?"good":"hot",sub:`${fe(_.total.kcal)} / ${n.targetProfile.kcal}`}),(0,ze.jsx)(Bt,{k:b,v:`C ${E}`,sub:"g/kg"})]})}),a&&(0,ze.jsx)("div",{className:"toast",children:a}),t==="intake"&&(0,ze.jsx)(BM,{...T,onClose:x}),t==="dinner"&&(0,ze.jsx)(zM,{...T,onClose:x}),t==="structure"&&(0,ze.jsx)(VM,{...T,onClose:x}),t==="shop"&&(0,ze.jsx)(GM,{...T,onClose:x}),t==="detail"&&(0,ze.jsx)(HM,{...T,onClose:x}),t==="cheat"&&(0,ze.jsx)(WM,{...T,onClose:x}),t==="settings"&&(0,ze.jsx)(XM,{...T,onClose:x})]})}var Mv=ai(Br(),1);BT.default.createRoot(document.getElementById("root")).render((0,Mv.jsx)(kT.default.StrictMode,{children:(0,Mv.jsx)(Sv,{})}));
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

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
