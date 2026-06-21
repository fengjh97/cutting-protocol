var RS=Object.create;var Ig=Object.defineProperty;var PS=Object.getOwnPropertyDescriptor;var IS=Object.getOwnPropertyNames;var NS=Object.getPrototypeOf,LS=Object.prototype.hasOwnProperty;var Wi=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var DS=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of IS(e))!LS.call(t,r)&&r!==n&&Ig(t,r,{get:()=>e[r],enumerable:!(i=PS(e,r))||i.enumerable});return t};var Mi=(t,e,n)=>(n=t!=null?RS(NS(t)):{},DS(e||!t||!t.__esModule?Ig(n,"default",{value:t,enumerable:!0}):n,t));var Hg=Wi(Ye=>{"use strict";var $a=Symbol.for("react.element"),US=Symbol.for("react.portal"),FS=Symbol.for("react.fragment"),kS=Symbol.for("react.strict_mode"),OS=Symbol.for("react.profiler"),BS=Symbol.for("react.provider"),zS=Symbol.for("react.context"),VS=Symbol.for("react.forward_ref"),GS=Symbol.for("react.suspense"),HS=Symbol.for("react.memo"),WS=Symbol.for("react.lazy"),Ng=Symbol.iterator;function XS(t){return t===null||typeof t!="object"?null:(t=Ng&&t[Ng]||t["@@iterator"],typeof t=="function"?t:null)}var Ug={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fg=Object.assign,kg={};function Ds(t,e,n){this.props=t,this.context=e,this.refs=kg,this.updater=n||Ug}Ds.prototype.isReactComponent={};Ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Og(){}Og.prototype=Ds.prototype;function bh(t,e,n){this.props=t,this.context=e,this.refs=kg,this.updater=n||Ug}var wh=bh.prototype=new Og;wh.constructor=bh;Fg(wh,Ds.prototype);wh.isPureReactComponent=!0;var Lg=Array.isArray,Bg=Object.prototype.hasOwnProperty,Eh={current:null},zg={key:!0,ref:!0,__self:!0,__source:!0};function Vg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Bg.call(e,i)&&!zg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:$a,type:t,key:s,ref:a,props:r,_owner:Eh.current}}function qS(t,e){return{$$typeof:$a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Th(t){return typeof t=="object"&&t!==null&&t.$$typeof===$a}function $S(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dg=/\/+/g;function Mh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$S(""+t.key):e.toString(36)}function Ol(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case $a:case US:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Mh(a,0):i,Lg(r)?(n="",t!=null&&(n=t.replace(Dg,"$&/")+"/"),Ol(r,e,n,"",function(c){return c})):r!=null&&(Th(r)&&(r=qS(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Dg,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Lg(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Mh(s,o);a+=Ol(s,e,n,l,r)}else if(l=XS(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Mh(s,o++),a+=Ol(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function kl(t,e,n){if(t==null)return t;var i=[],r=0;return Ol(t,i,"","",function(s){return e.call(n,s,r++)}),i}function YS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},Bl={transition:null},KS={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:Bl,ReactCurrentOwner:Eh};function Gg(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:kl,forEach:function(t,e,n){kl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return kl(t,function(){e++}),e},toArray:function(t){return kl(t,function(e){return e})||[]},only:function(t){if(!Th(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Ds;Ye.Fragment=FS;Ye.Profiler=OS;Ye.PureComponent=bh;Ye.StrictMode=kS;Ye.Suspense=GS;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KS;Ye.act=Gg;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Fg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Eh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Bg.call(e,l)&&!zg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:$a,type:t.type,key:r,ref:s,props:i,_owner:a}};Ye.createContext=function(t){return t={$$typeof:zS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:BS,_context:t},t.Consumer=t};Ye.createElement=Vg;Ye.createFactory=function(t){var e=Vg.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:VS,render:t}};Ye.isValidElement=Th;Ye.lazy=function(t){return{$$typeof:WS,_payload:{_status:-1,_result:t},_init:YS}};Ye.memo=function(t,e){return{$$typeof:HS,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=Bl.transition;Bl.transition={};try{t()}finally{Bl.transition=e}};Ye.unstable_act=Gg;Ye.useCallback=function(t,e){return dn.current.useCallback(t,e)};Ye.useContext=function(t){return dn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return dn.current.useEffect(t,e)};Ye.useId=function(){return dn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return dn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};Ye.useRef=function(t){return dn.current.useRef(t)};Ye.useState=function(t){return dn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return dn.current.useTransition()};Ye.version="18.3.1"});var gr=Wi((F2,Wg)=>{"use strict";Wg.exports=Hg()});var e0=Wi(gt=>{"use strict";function Ph(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,r=t[i];if(0<zl(r,e))t[i]=e,t[n]=r,n=i;else break e}}function si(t){return t.length===0?null:t[0]}function Gl(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,r=t.length,s=r>>>1;i<s;){var a=2*(i+1)-1,o=t[a],l=a+1,c=t[l];if(0>zl(o,n))l<r&&0>zl(c,o)?(t[i]=c,t[l]=n,i=l):(t[i]=o,t[a]=n,i=a);else if(l<r&&0>zl(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function zl(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(Xg=performance,gt.unstable_now=function(){return Xg.now()}):(Ah=Date,qg=Ah.now(),gt.unstable_now=function(){return Ah.now()-qg});var Xg,Ah,qg,bi=[],xr=[],jS=1,$n=null,en=3,Hl=!1,rs=!1,Ka=!1,Kg=typeof setTimeout=="function"?setTimeout:null,jg=typeof clearTimeout=="function"?clearTimeout:null,$g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ih(t){for(var e=si(xr);e!==null;){if(e.callback===null)Gl(xr);else if(e.startTime<=t)Gl(xr),e.sortIndex=e.expirationTime,Ph(bi,e);else break;e=si(xr)}}function Nh(t){if(Ka=!1,Ih(t),!rs)if(si(bi)!==null)rs=!0,Dh(Lh);else{var e=si(xr);e!==null&&Uh(Nh,e.startTime-t)}}function Lh(t,e){rs=!1,Ka&&(Ka=!1,jg(ja),ja=-1),Hl=!0;var n=en;try{for(Ih(e),$n=si(bi);$n!==null&&(!($n.expirationTime>e)||t&&!Qg());){var i=$n.callback;if(typeof i=="function"){$n.callback=null,en=$n.priorityLevel;var r=i($n.expirationTime<=e);e=gt.unstable_now(),typeof r=="function"?$n.callback=r:$n===si(bi)&&Gl(bi),Ih(e)}else Gl(bi);$n=si(bi)}if($n!==null)var s=!0;else{var a=si(xr);a!==null&&Uh(Nh,a.startTime-e),s=!1}return s}finally{$n=null,en=n,Hl=!1}}var Wl=!1,Vl=null,ja=-1,Zg=5,Jg=-1;function Qg(){return!(gt.unstable_now()-Jg<Zg)}function Ch(){if(Vl!==null){var t=gt.unstable_now();Jg=t;var e=!0;try{e=Vl(!0,t)}finally{e?Ya():(Wl=!1,Vl=null)}}else Wl=!1}var Ya;typeof $g=="function"?Ya=function(){$g(Ch)}:typeof MessageChannel<"u"?(Rh=new MessageChannel,Yg=Rh.port2,Rh.port1.onmessage=Ch,Ya=function(){Yg.postMessage(null)}):Ya=function(){Kg(Ch,0)};var Rh,Yg;function Dh(t){Vl=t,Wl||(Wl=!0,Ya())}function Uh(t,e){ja=Kg(function(){t(gt.unstable_now())},e)}gt.unstable_IdlePriority=5;gt.unstable_ImmediatePriority=1;gt.unstable_LowPriority=4;gt.unstable_NormalPriority=3;gt.unstable_Profiling=null;gt.unstable_UserBlockingPriority=2;gt.unstable_cancelCallback=function(t){t.callback=null};gt.unstable_continueExecution=function(){rs||Hl||(rs=!0,Dh(Lh))};gt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Zg=0<t?Math.floor(1e3/t):5};gt.unstable_getCurrentPriorityLevel=function(){return en};gt.unstable_getFirstCallbackNode=function(){return si(bi)};gt.unstable_next=function(t){switch(en){case 1:case 2:case 3:var e=3;break;default:e=en}var n=en;en=e;try{return t()}finally{en=n}};gt.unstable_pauseExecution=function(){};gt.unstable_requestPaint=function(){};gt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=en;en=t;try{return e()}finally{en=n}};gt.unstable_scheduleCallback=function(t,e,n){var i=gt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,t={id:jS++,callback:e,priorityLevel:t,startTime:n,expirationTime:r,sortIndex:-1},n>i?(t.sortIndex=n,Ph(xr,t),si(bi)===null&&t===si(xr)&&(Ka?(jg(ja),ja=-1):Ka=!0,Uh(Nh,n-i))):(t.sortIndex=r,Ph(bi,t),rs||Hl||(rs=!0,Dh(Lh))),t};gt.unstable_shouldYield=Qg;gt.unstable_wrapCallback=function(t){var e=en;return function(){var n=en;en=e;try{return t.apply(this,arguments)}finally{en=n}}}});var n0=Wi((O2,t0)=>{"use strict";t0.exports=e0()});var a_=Wi(Un=>{"use strict";var ZS=gr(),Ln=n0();function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cx=new Set,_o={};function xs(t,e){ta(t,e),ta(t+"Capture",e)}function ta(t,e){for(_o[t]=e,t=0;t<e.length;t++)cx.add(e[t])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sf=Object.prototype.hasOwnProperty,JS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,i0={},r0={};function QS(t){return sf.call(r0,t)?!0:sf.call(i0,t)?!1:JS.test(t)?r0[t]=!0:(i0[t]=!0,!1)}function e1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function t1(t,e,n,i){if(e===null||typeof e>"u"||e1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zf=/[\-:]([a-z])/g;function Jf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zf,Jf);jt[e]=new pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zf,Jf);jt[e]=new pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zf,Jf);jt[e]=new pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new pn(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qf(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(t1(e,n,r,i)&&(n=null),i||r===null?QS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var er=ZS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xl=Symbol.for("react.element"),ks=Symbol.for("react.portal"),Os=Symbol.for("react.fragment"),ep=Symbol.for("react.strict_mode"),af=Symbol.for("react.profiler"),ux=Symbol.for("react.provider"),dx=Symbol.for("react.context"),tp=Symbol.for("react.forward_ref"),of=Symbol.for("react.suspense"),lf=Symbol.for("react.suspense_list"),np=Symbol.for("react.memo"),_r=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var hx=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var s0=Symbol.iterator;function Za(t){return t===null||typeof t!="object"?null:(t=s0&&t[s0]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,Fh;function so(t){if(Fh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fh=e&&e[1]||""}return`
`+Fh+t}var kh=!1;function Oh(t,e){if(!t||kh)return"";kh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{kh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?so(t):""}function n1(t){switch(t.tag){case 5:return so(t.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return t=Oh(t.type,!1),t;case 11:return t=Oh(t.type.render,!1),t;case 1:return t=Oh(t.type,!0),t;default:return""}}function cf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Os:return"Fragment";case ks:return"Portal";case af:return"Profiler";case ep:return"StrictMode";case of:return"Suspense";case lf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dx:return(t.displayName||"Context")+".Consumer";case ux:return(t._context.displayName||"Context")+".Provider";case tp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case np:return e=t.displayName||null,e!==null?e:cf(t.type)||"Memo";case _r:e=t._payload,t=t._init;try{return cf(t(e))}catch{}}return null}function i1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cf(e);case 8:return e===ep?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function r1(t){var e=fx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ql(t){t._valueTracker||(t._valueTracker=r1(t))}function px(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=fx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function yc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function uf(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function a0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mx(t,e){e=e.checked,e!=null&&Qf(t,"checked",e,!1)}function df(t,e){mx(t,e);var n=Lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hf(t,e.type,n):e.hasOwnProperty("defaultValue")&&hf(t,e.type,Lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function o0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hf(t,e,n){(e!=="number"||yc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ao=Array.isArray;function Ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ff(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function l0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(ao(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Lr(n)}}function gx(t,e){var n=Lr(e.value),i=Lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function c0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $l,vx=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t})(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($l=$l||document.createElement("div"),$l.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$l.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function yo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s1=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(t){s1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),co[e]=co[t]})});function _x(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||co.hasOwnProperty(t)&&co[t]?(""+e).trim():e+"px"}function yx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=_x(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var a1=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mf(t,e){if(e){if(a1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function gf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xf=null;function ip(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vf=null,js=null,Zs=null;function u0(t){if(t=Oo(t)){if(typeof vf!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Yc(e),vf(t.stateNode,t.type,e))}}function Sx(t){js?Zs?Zs.push(t):Zs=[t]:js=t}function Mx(){if(js){var t=js,e=Zs;if(Zs=js=null,u0(t),e)for(t=0;t<e.length;t++)u0(e[t])}}function bx(t,e){return t(e)}function wx(){}var Bh=!1;function Ex(t,e,n){if(Bh)return t(e,n);Bh=!0;try{return bx(t,e,n)}finally{Bh=!1,(js!==null||Zs!==null)&&(wx(),Mx())}}function So(t,e){var n=t.stateNode;if(n===null)return null;var i=Yc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var _f=!1;if(ji)try{Us={},Object.defineProperty(Us,"passive",{get:function(){_f=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{_f=!1}var Us;function o1(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var uo=!1,Sc=null,Mc=!1,yf=null,l1={onError:function(t){uo=!0,Sc=t}};function c1(t,e,n,i,r,s,a,o,l){uo=!1,Sc=null,o1.apply(l1,arguments)}function u1(t,e,n,i,r,s,a,o,l){if(c1.apply(this,arguments),uo){if(uo){var c=Sc;uo=!1,Sc=null}else throw Error(ie(198));Mc||(Mc=!0,yf=c)}}function vs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function d0(t){if(vs(t)!==t)throw Error(ie(188))}function d1(t){var e=t.alternate;if(!e){if(e=vs(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return d0(r),t;if(s===i)return d0(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Ax(t){return t=d1(t),t!==null?Cx(t):null}function Cx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cx(t);if(e!==null)return e;t=t.sibling}return null}var Rx=Ln.unstable_scheduleCallback,h0=Ln.unstable_cancelCallback,h1=Ln.unstable_shouldYield,f1=Ln.unstable_requestPaint,Dt=Ln.unstable_now,p1=Ln.unstable_getCurrentPriorityLevel,rp=Ln.unstable_ImmediatePriority,Px=Ln.unstable_UserBlockingPriority,bc=Ln.unstable_NormalPriority,m1=Ln.unstable_LowPriority,Ix=Ln.unstable_IdlePriority,Wc=null,Ai=null;function g1(t){if(Ai&&typeof Ai.onCommitFiberRoot=="function")try{Ai.onCommitFiberRoot(Wc,t,void 0,(t.current.flags&128)===128)}catch{}}var ui=Math.clz32?Math.clz32:_1,x1=Math.log,v1=Math.LN2;function _1(t){return t>>>=0,t===0?32:31-(x1(t)/v1|0)|0}var Yl=64,Kl=4194304;function oo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=oo(o):(s&=a,s!==0&&(i=oo(s)))}else a=n&~r,a!==0?i=oo(a):s!==0&&(i=oo(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ui(e),r=1<<n,i|=t[n],e&=~r;return i}function y1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ui(s),o=1<<a,l=r[a];l===-1?((o&n)===0||(o&i)!==0)&&(r[a]=y1(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Sf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nx(){var t=Yl;return Yl<<=1,(Yl&4194240)===0&&(Yl=64),t}function zh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ui(e),t[e]=n}function M1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ui(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function sp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ui(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function Lx(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Dx,ap,Ux,Fx,kx,Mf=!1,jl=[],Er=null,Tr=null,Ar=null,Mo=new Map,bo=new Map,Sr=[],b1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function f0(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(e.pointerId)}}function Ja(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Oo(e),e!==null&&ap(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function w1(t,e,n,i,r){switch(e){case"focusin":return Er=Ja(Er,t,e,n,i,r),!0;case"dragenter":return Tr=Ja(Tr,t,e,n,i,r),!0;case"mouseover":return Ar=Ja(Ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Mo.set(s,Ja(Mo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,bo.set(s,Ja(bo.get(s)||null,t,e,n,i,r)),!0}return!1}function Ox(t){var e=os(t.target);if(e!==null){var n=vs(e);if(n!==null){if(e=n.tag,e===13){if(e=Tx(n),e!==null){t.blockedOn=e,kx(t.priority,function(){Ux(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xf=i,n.target.dispatchEvent(i),xf=null}else return e=Oo(n),e!==null&&ap(e),t.blockedOn=n,!1;e.shift()}return!0}function p0(t,e,n){uc(t)&&n.delete(e)}function E1(){Mf=!1,Er!==null&&uc(Er)&&(Er=null),Tr!==null&&uc(Tr)&&(Tr=null),Ar!==null&&uc(Ar)&&(Ar=null),Mo.forEach(p0),bo.forEach(p0)}function Qa(t,e){t.blockedOn===e&&(t.blockedOn=null,Mf||(Mf=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,E1)))}function wo(t){function e(r){return Qa(r,t)}if(0<jl.length){Qa(jl[0],t);for(var n=1;n<jl.length;n++){var i=jl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Er!==null&&Qa(Er,t),Tr!==null&&Qa(Tr,t),Ar!==null&&Qa(Ar,t),Mo.forEach(e),bo.forEach(e),n=0;n<Sr.length;n++)i=Sr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Sr.length&&(n=Sr[0],n.blockedOn===null);)Ox(n),n.blockedOn===null&&Sr.shift()}var Js=er.ReactCurrentBatchConfig,Ec=!0;function T1(t,e,n,i){var r=lt,s=Js.transition;Js.transition=null;try{lt=1,op(t,e,n,i)}finally{lt=r,Js.transition=s}}function A1(t,e,n,i){var r=lt,s=Js.transition;Js.transition=null;try{lt=4,op(t,e,n,i)}finally{lt=r,Js.transition=s}}function op(t,e,n,i){if(Ec){var r=bf(t,e,n,i);if(r===null)$h(t,e,i,Tc,n),f0(t,i);else if(w1(r,t,e,n,i))i.stopPropagation();else if(f0(t,i),e&4&&-1<b1.indexOf(t)){for(;r!==null;){var s=Oo(r);if(s!==null&&Dx(s),s=bf(t,e,n,i),s===null&&$h(t,e,i,Tc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else $h(t,e,i,null,n)}}var Tc=null;function bf(t,e,n,i){if(Tc=null,t=ip(i),t=os(t),t!==null)if(e=vs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tc=t,null}function Bx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(p1()){case rp:return 1;case Px:return 4;case bc:case m1:return 16;case Ix:return 536870912;default:return 16}default:return 16}}var br=null,lp=null,dc=null;function zx(){if(dc)return dc;var t,e=lp,n=e.length,i,r="value"in br?br.value:br.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return dc=r.slice(t,1<i?1-i:void 0)}function hc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zl(){return!0}function m0(){return!1}function Dn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zl:m0,this.isPropagationStopped=m0,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),e}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cp=Dn(la),ko=At({},la,{view:0,detail:0}),C1=Dn(ko),Vh,Gh,eo,Xc=At({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:up,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(Vh=t.screenX-eo.screenX,Gh=t.screenY-eo.screenY):Gh=Vh=0,eo=t),Vh)},movementY:function(t){return"movementY"in t?t.movementY:Gh}}),g0=Dn(Xc),R1=At({},Xc,{dataTransfer:0}),P1=Dn(R1),I1=At({},ko,{relatedTarget:0}),Hh=Dn(I1),N1=At({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),L1=Dn(N1),D1=At({},la,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U1=Dn(D1),F1=At({},la,{data:0}),x0=Dn(F1),k1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B1[t])?!!e[t]:!1}function up(){return z1}var V1=At({},ko,{key:function(t){if(t.key){var e=k1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?O1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:up,charCode:function(t){return t.type==="keypress"?hc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),G1=Dn(V1),H1=At({},Xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),v0=Dn(H1),W1=At({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:up}),X1=Dn(W1),q1=At({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),$1=Dn(q1),Y1=At({},Xc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K1=Dn(Y1),j1=[9,13,27,32],dp=ji&&"CompositionEvent"in window,ho=null;ji&&"documentMode"in document&&(ho=document.documentMode);var Z1=ji&&"TextEvent"in window&&!ho,Vx=ji&&(!dp||ho&&8<ho&&11>=ho),_0=" ",y0=!1;function Gx(t,e){switch(t){case"keyup":return j1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bs=!1;function J1(t,e){switch(t){case"compositionend":return Hx(e);case"keypress":return e.which!==32?null:(y0=!0,_0);case"textInput":return t=e.data,t===_0&&y0?null:t;default:return null}}function Q1(t,e){if(Bs)return t==="compositionend"||!dp&&Gx(t,e)?(t=zx(),dc=lp=br=null,Bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vx&&e.locale!=="ko"?null:e.data;default:return null}}var eM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function S0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eM[t.type]:e==="textarea"}function Wx(t,e,n,i){Sx(i),e=Ac(e,"onChange"),0<e.length&&(n=new cp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fo=null,Eo=null;function tM(t){tv(t,0)}function qc(t){var e=Gs(t);if(px(e))return t}function nM(t,e){if(t==="change")return e}var Xx=!1;ji&&(ji?(Ql="oninput"in document,Ql||(Wh=document.createElement("div"),Wh.setAttribute("oninput","return;"),Ql=typeof Wh.oninput=="function"),Jl=Ql):Jl=!1,Xx=Jl&&(!document.documentMode||9<document.documentMode));var Jl,Ql,Wh;function M0(){fo&&(fo.detachEvent("onpropertychange",qx),Eo=fo=null)}function qx(t){if(t.propertyName==="value"&&qc(Eo)){var e=[];Wx(e,Eo,t,ip(t)),Ex(tM,e)}}function iM(t,e,n){t==="focusin"?(M0(),fo=e,Eo=n,fo.attachEvent("onpropertychange",qx)):t==="focusout"&&M0()}function rM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qc(Eo)}function sM(t,e){if(t==="click")return qc(e)}function aM(t,e){if(t==="input"||t==="change")return qc(e)}function oM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:oM;function To(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!sf.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function b0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function w0(t,e){var n=b0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=b0(n)}}function $x(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$x(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yx(){for(var t=window,e=yc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yc(t.document)}return e}function hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lM(t){var e=Yx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$x(n.ownerDocument.documentElement,n)){if(i!==null&&hp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=w0(n,s);var a=w0(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cM=ji&&"documentMode"in document&&11>=document.documentMode,zs=null,wf=null,po=null,Ef=!1;function E0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ef||zs==null||zs!==yc(i)||(i=zs,"selectionStart"in i&&hp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),po&&To(po,i)||(po=i,i=Ac(wf,"onSelect"),0<i.length&&(e=new cp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=zs)))}function ec(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vs={animationend:ec("Animation","AnimationEnd"),animationiteration:ec("Animation","AnimationIteration"),animationstart:ec("Animation","AnimationStart"),transitionend:ec("Transition","TransitionEnd")},Xh={},Kx={};ji&&(Kx=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function $c(t){if(Xh[t])return Xh[t];if(!Vs[t])return t;var e=Vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Kx)return Xh[t]=e[n];return t}var jx=$c("animationend"),Zx=$c("animationiteration"),Jx=$c("animationstart"),Qx=$c("transitionend"),ev=new Map,T0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){ev.set(t,e),xs(e,[t])}for(tc=0;tc<T0.length;tc++)nc=T0[tc],A0=nc.toLowerCase(),C0=nc[0].toUpperCase()+nc.slice(1),Ur(A0,"on"+C0);var nc,A0,C0,tc;Ur(jx,"onAnimationEnd");Ur(Zx,"onAnimationIteration");Ur(Jx,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(Qx,"onTransitionEnd");ta("onMouseEnter",["mouseout","mouseover"]);ta("onMouseLeave",["mouseout","mouseover"]);ta("onPointerEnter",["pointerout","pointerover"]);ta("onPointerLeave",["pointerout","pointerover"]);xs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xs("onBeforeInput",["compositionend","keypress","textInput","paste"]);xs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uM=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function R0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,u1(i,e,void 0,t),t.currentTarget=null}function tv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;R0(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;R0(r,o,c),s=l}}}if(Mc)throw t=yf,Mc=!1,yf=null,t}function _t(t,e){var n=e[Pf];n===void 0&&(n=e[Pf]=new Set);var i=t+"__bubble";n.has(i)||(nv(e,t,2,!1),n.add(i))}function qh(t,e,n){var i=0;e&&(i|=4),nv(n,t,i,e)}var ic="_reactListening"+Math.random().toString(36).slice(2);function Ao(t){if(!t[ic]){t[ic]=!0,cx.forEach(function(n){n!=="selectionchange"&&(uM.has(n)||qh(n,!1,t),qh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ic]||(e[ic]=!0,qh("selectionchange",!1,e))}}function nv(t,e,n,i){switch(Bx(e)){case 1:var r=T1;break;case 4:r=A1;break;default:r=op}n=r.bind(null,e,n,t),r=void 0,!_f||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function $h(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=os(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Ex(function(){var c=s,h=ip(n),f=[];e:{var d=ev.get(t);if(d!==void 0){var m=cp,v=t;switch(t){case"keypress":if(hc(n)===0)break e;case"keydown":case"keyup":m=G1;break;case"focusin":v="focus",m=Hh;break;case"focusout":v="blur",m=Hh;break;case"beforeblur":case"afterblur":m=Hh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=g0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=P1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=X1;break;case jx:case Zx:case Jx:m=L1;break;case Qx:m=$1;break;case"scroll":m=C1;break;case"wheel":m=K1;break;case"copy":case"cut":case"paste":m=U1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=v0}var b=(e&4)!==0,g=!b&&t==="scroll",u=b?d!==null?d+"Capture":null:d;b=[];for(var p=c,_;p!==null;){_=p;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,u!==null&&(M=So(p,u),M!=null&&b.push(Co(p,M,_)))),g)break;p=p.return}0<b.length&&(d=new m(d,v,null,n,h),f.push({event:d,listeners:b}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==xf&&(v=n.relatedTarget||n.fromElement)&&(os(v)||v[Zi]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?os(v):null,v!==null&&(g=vs(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(b=g0,M="onMouseLeave",u="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(b=v0,M="onPointerLeave",u="onPointerEnter",p="pointer"),g=m==null?d:Gs(m),_=v==null?d:Gs(v),d=new b(M,p+"leave",m,n,h),d.target=g,d.relatedTarget=_,M=null,os(h)===c&&(b=new b(u,p+"enter",v,n,h),b.target=_,b.relatedTarget=g,M=b),g=M,m&&v)t:{for(b=m,u=v,p=0,_=b;_;_=Fs(_))p++;for(_=0,M=u;M;M=Fs(M))_++;for(;0<p-_;)b=Fs(b),p--;for(;0<_-p;)u=Fs(u),_--;for(;p--;){if(b===u||u!==null&&b===u.alternate)break t;b=Fs(b),u=Fs(u)}b=null}else b=null;m!==null&&P0(f,d,m,b,!1),v!==null&&g!==null&&P0(f,g,v,b,!0)}}e:{if(d=c?Gs(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var C=nM;else if(S0(d))if(Xx)C=aM;else{C=rM;var E=iM}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=sM);if(C&&(C=C(t,c))){Wx(f,C,n,h);break e}E&&E(t,d,c),t==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&hf(d,"number",d.value)}switch(E=c?Gs(c):window,t){case"focusin":(S0(E)||E.contentEditable==="true")&&(zs=E,wf=c,po=null);break;case"focusout":po=wf=zs=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,E0(f,n,h);break;case"selectionchange":if(cM)break;case"keydown":case"keyup":E0(f,n,h)}var R;if(dp)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Bs?Gx(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Vx&&n.locale!=="ko"&&(Bs||x!=="onCompositionStart"?x==="onCompositionEnd"&&Bs&&(R=zx()):(br=h,lp="value"in br?br.value:br.textContent,Bs=!0)),E=Ac(c,x),0<E.length&&(x=new x0(x,t,null,n,h),f.push({event:x,listeners:E}),R?x.data=R:(R=Hx(n),R!==null&&(x.data=R)))),(R=Z1?J1(t,n):Q1(t,n))&&(c=Ac(c,"onBeforeInput"),0<c.length&&(h=new x0("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=R))}tv(f,e)})}function Co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ac(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=So(t,n),s!=null&&i.unshift(Co(t,s,r)),s=So(t,e),s!=null&&i.push(Co(t,s,r))),t=t.return}return i}function Fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function P0(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=So(n,s),l!=null&&a.unshift(Co(n,l,o))):r||(l=So(n,s),l!=null&&a.push(Co(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var dM=/\r\n?/g,hM=/\u0000|\uFFFD/g;function I0(t){return(typeof t=="string"?t:""+t).replace(dM,`
`).replace(hM,"")}function rc(t,e,n){if(e=I0(e),I0(t)!==e&&n)throw Error(ie(425))}function Cc(){}var Tf=null,Af=null;function Cf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rf=typeof setTimeout=="function"?setTimeout:void 0,fM=typeof clearTimeout=="function"?clearTimeout:void 0,N0=typeof Promise=="function"?Promise:void 0,pM=typeof queueMicrotask=="function"?queueMicrotask:typeof N0<"u"?function(t){return N0.resolve(null).then(t).catch(mM)}:Rf;function mM(t){setTimeout(function(){throw t})}function Yh(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),wo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);wo(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function L0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ca=Math.random().toString(36).slice(2),Ti="__reactFiber$"+ca,Ro="__reactProps$"+ca,Zi="__reactContainer$"+ca,Pf="__reactEvents$"+ca,gM="__reactListeners$"+ca,xM="__reactHandles$"+ca;function os(t){var e=t[Ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zi]||n[Ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=L0(t);t!==null;){if(n=t[Ti])return n;t=L0(t)}return e}t=n,n=t.parentNode}return null}function Oo(t){return t=t[Ti]||t[Zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Yc(t){return t[Ro]||null}var If=[],Hs=-1;function Fr(t){return{current:t}}function yt(t){0>Hs||(t.current=If[Hs],If[Hs]=null,Hs--)}function xt(t,e){Hs++,If[Hs]=t.current,t.current=e}var Dr={},sn=Fr(Dr),Sn=Fr(!1),hs=Dr;function na(t,e){var n=t.type.contextTypes;if(!n)return Dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(t){return t=t.childContextTypes,t!=null}function Rc(){yt(Sn),yt(sn)}function D0(t,e,n){if(sn.current!==Dr)throw Error(ie(168));xt(sn,e),xt(Sn,n)}function iv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,i1(t)||"Unknown",r));return At({},n,i)}function Pc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,hs=sn.current,xt(sn,t),xt(Sn,Sn.current),!0}function U0(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=iv(t,e,hs),i.__reactInternalMemoizedMergedChildContext=t,yt(Sn),yt(sn),xt(sn,t)):yt(Sn),xt(Sn,n)}var qi=null,Kc=!1,Kh=!1;function rv(t){qi===null?qi=[t]:qi.push(t)}function vM(t){Kc=!0,rv(t)}function kr(){if(!Kh&&qi!==null){Kh=!0;var t=0,e=lt;try{var n=qi;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}qi=null,Kc=!1}catch(r){throw qi!==null&&(qi=qi.slice(t+1)),Rx(rp,kr),r}finally{lt=e,Kh=!1}}return null}var Ws=[],Xs=0,Ic=null,Nc=0,Yn=[],Kn=0,fs=null,$i=1,Yi="";function ss(t,e){Ws[Xs++]=Nc,Ws[Xs++]=Ic,Ic=t,Nc=e}function sv(t,e,n){Yn[Kn++]=$i,Yn[Kn++]=Yi,Yn[Kn++]=fs,fs=t;var i=$i;t=Yi;var r=32-ui(i)-1;i&=~(1<<r),n+=1;var s=32-ui(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,$i=1<<32-ui(e)+r|n<<r|i,Yi=s+t}else $i=1<<s|n<<r|i,Yi=t}function fp(t){t.return!==null&&(ss(t,1),sv(t,1,0))}function pp(t){for(;t===Ic;)Ic=Ws[--Xs],Ws[Xs]=null,Nc=Ws[--Xs],Ws[Xs]=null;for(;t===fs;)fs=Yn[--Kn],Yn[Kn]=null,Yi=Yn[--Kn],Yn[Kn]=null,$i=Yn[--Kn],Yn[Kn]=null}var Nn=null,In=null,wt=!1,ci=null;function av(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function F0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nn=t,In=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nn=t,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fs!==null?{id:$i,overflow:Yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nn=t,In=null,!0):!1;default:return!1}}function Nf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lf(t){if(wt){var e=In;if(e){var n=e;if(!F0(t,e)){if(Nf(t))throw Error(ie(418));e=Cr(n.nextSibling);var i=Nn;e&&F0(t,e)?av(i,n):(t.flags=t.flags&-4097|2,wt=!1,Nn=t)}}else{if(Nf(t))throw Error(ie(418));t.flags=t.flags&-4097|2,wt=!1,Nn=t}}}function k0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function sc(t){if(t!==Nn)return!1;if(!wt)return k0(t),wt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cf(t.type,t.memoizedProps)),e&&(e=In)){if(Nf(t))throw ov(),Error(ie(418));for(;e;)av(t,e),e=Cr(e.nextSibling)}if(k0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){In=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}In=null}}else In=Nn?Cr(t.stateNode.nextSibling):null;return!0}function ov(){for(var t=In;t;)t=Cr(t.nextSibling)}function ia(){In=Nn=null,wt=!1}function mp(t){ci===null?ci=[t]:ci.push(t)}var _M=er.ReactCurrentBatchConfig;function to(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function ac(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function O0(t){var e=t._init;return e(t._payload)}function lv(t){function e(u,p){if(t){var _=u.deletions;_===null?(u.deletions=[p],u.flags|=16):_.push(p)}}function n(u,p){if(!t)return null;for(;p!==null;)e(u,p),p=p.sibling;return null}function i(u,p){for(u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function r(u,p){return u=Nr(u,p),u.index=0,u.sibling=null,u}function s(u,p,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<p?(u.flags|=2,p):_):(u.flags|=2,p)):(u.flags|=1048576,p)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,p,_,M){return p===null||p.tag!==6?(p=nf(_,u.mode,M),p.return=u,p):(p=r(p,_),p.return=u,p)}function l(u,p,_,M){var C=_.type;return C===Os?h(u,p,_.props.children,M,_.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_r&&O0(C)===p.type)?(M=r(p,_.props),M.ref=to(u,p,_),M.return=u,M):(M=_c(_.type,_.key,_.props,null,u.mode,M),M.ref=to(u,p,_),M.return=u,M)}function c(u,p,_,M){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=rf(_,u.mode,M),p.return=u,p):(p=r(p,_.children||[]),p.return=u,p)}function h(u,p,_,M,C){return p===null||p.tag!==7?(p=ds(_,u.mode,M,C),p.return=u,p):(p=r(p,_),p.return=u,p)}function f(u,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=nf(""+p,u.mode,_),p.return=u,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Xl:return _=_c(p.type,p.key,p.props,null,u.mode,_),_.ref=to(u,null,p),_.return=u,_;case ks:return p=rf(p,u.mode,_),p.return=u,p;case _r:var M=p._init;return f(u,M(p._payload),_)}if(ao(p)||Za(p))return p=ds(p,u.mode,_,null),p.return=u,p;ac(u,p)}return null}function d(u,p,_,M){var C=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:o(u,p,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Xl:return _.key===C?l(u,p,_,M):null;case ks:return _.key===C?c(u,p,_,M):null;case _r:return C=_._init,d(u,p,C(_._payload),M)}if(ao(_)||Za(_))return C!==null?null:h(u,p,_,M,null);ac(u,_)}return null}function m(u,p,_,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(_)||null,o(p,u,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Xl:return u=u.get(M.key===null?_:M.key)||null,l(p,u,M,C);case ks:return u=u.get(M.key===null?_:M.key)||null,c(p,u,M,C);case _r:var E=M._init;return m(u,p,_,E(M._payload),C)}if(ao(M)||Za(M))return u=u.get(_)||null,h(p,u,M,C,null);ac(p,M)}return null}function v(u,p,_,M){for(var C=null,E=null,R=p,x=p=0,A=null;R!==null&&x<_.length;x++){R.index>x?(A=R,R=null):A=R.sibling;var I=d(u,R,_[x],M);if(I===null){R===null&&(R=A);break}t&&R&&I.alternate===null&&e(u,R),p=s(I,p,x),E===null?C=I:E.sibling=I,E=I,R=A}if(x===_.length)return n(u,R),wt&&ss(u,x),C;if(R===null){for(;x<_.length;x++)R=f(u,_[x],M),R!==null&&(p=s(R,p,x),E===null?C=R:E.sibling=R,E=R);return wt&&ss(u,x),C}for(R=i(u,R);x<_.length;x++)A=m(R,u,x,_[x],M),A!==null&&(t&&A.alternate!==null&&R.delete(A.key===null?x:A.key),p=s(A,p,x),E===null?C=A:E.sibling=A,E=A);return t&&R.forEach(function(P){return e(u,P)}),wt&&ss(u,x),C}function b(u,p,_,M){var C=Za(_);if(typeof C!="function")throw Error(ie(150));if(_=C.call(_),_==null)throw Error(ie(151));for(var E=C=null,R=p,x=p=0,A=null,I=_.next();R!==null&&!I.done;x++,I=_.next()){R.index>x?(A=R,R=null):A=R.sibling;var P=d(u,R,I.value,M);if(P===null){R===null&&(R=A);break}t&&R&&P.alternate===null&&e(u,R),p=s(P,p,x),E===null?C=P:E.sibling=P,E=P,R=A}if(I.done)return n(u,R),wt&&ss(u,x),C;if(R===null){for(;!I.done;x++,I=_.next())I=f(u,I.value,M),I!==null&&(p=s(I,p,x),E===null?C=I:E.sibling=I,E=I);return wt&&ss(u,x),C}for(R=i(u,R);!I.done;x++,I=_.next())I=m(R,u,x,I.value,M),I!==null&&(t&&I.alternate!==null&&R.delete(I.key===null?x:I.key),p=s(I,p,x),E===null?C=I:E.sibling=I,E=I);return t&&R.forEach(function(k){return e(u,k)}),wt&&ss(u,x),C}function g(u,p,_,M){if(typeof _=="object"&&_!==null&&_.type===Os&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Xl:e:{for(var C=_.key,E=p;E!==null;){if(E.key===C){if(C=_.type,C===Os){if(E.tag===7){n(u,E.sibling),p=r(E,_.props.children),p.return=u,u=p;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_r&&O0(C)===E.type){n(u,E.sibling),p=r(E,_.props),p.ref=to(u,E,_),p.return=u,u=p;break e}n(u,E);break}else e(u,E);E=E.sibling}_.type===Os?(p=ds(_.props.children,u.mode,M,_.key),p.return=u,u=p):(M=_c(_.type,_.key,_.props,null,u.mode,M),M.ref=to(u,p,_),M.return=u,u=M)}return a(u);case ks:e:{for(E=_.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(u,p.sibling),p=r(p,_.children||[]),p.return=u,u=p;break e}else{n(u,p);break}else e(u,p);p=p.sibling}p=rf(_,u.mode,M),p.return=u,u=p}return a(u);case _r:return E=_._init,g(u,p,E(_._payload),M)}if(ao(_))return v(u,p,_,M);if(Za(_))return b(u,p,_,M);ac(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(u,p.sibling),p=r(p,_),p.return=u,u=p):(n(u,p),p=nf(_,u.mode,M),p.return=u,u=p),a(u)):n(u,p)}return g}var ra=lv(!0),cv=lv(!1),Lc=Fr(null),Dc=null,qs=null,gp=null;function xp(){gp=qs=Dc=null}function vp(t){var e=Lc.current;yt(Lc),t._currentValue=e}function Df(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){Dc=t,gp=qs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(yn=!0),t.firstContext=null)}function Jn(t){var e=t._currentValue;if(gp!==t)if(t={context:t,memoizedValue:e,next:null},qs===null){if(Dc===null)throw Error(ie(308));qs=t,Dc.dependencies={lanes:0,firstContext:t}}else qs=qs.next=t;return e}var ls=null;function _p(t){ls===null?ls=[t]:ls.push(t)}function uv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,_p(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ji(t,i)}function Ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yr=!1;function yp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ki(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(tt&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ji(t,n)}return r=i.interleaved,r===null?(e.next=e,_p(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ji(t,n)}function fc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sp(t,n)}}function B0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Uc(t,e,n,i){var r=t.updateQueue;yr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,h=c=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,b=o;switch(d=e,m=n,b.tag){case 1:if(v=b.payload,typeof v=="function"){f=v.call(m,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,d=typeof v=="function"?v.call(m,f,d):v,d==null)break e;f=At({},f,d);break e;case 2:yr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,l=f):h=h.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ms|=a,t.lanes=a,t.memoizedState=f}}function z0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Bo={},Ci=Fr(Bo),Po=Fr(Bo),Io=Fr(Bo);function cs(t){if(t===Bo)throw Error(ie(174));return t}function Sp(t,e){switch(xt(Io,e),xt(Po,t),xt(Ci,Bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pf(e,t)}yt(Ci),xt(Ci,e)}function sa(){yt(Ci),yt(Po),yt(Io)}function hv(t){cs(Io.current);var e=cs(Ci.current),n=pf(e,t.type);e!==n&&(xt(Po,t),xt(Ci,n))}function Mp(t){Po.current===t&&(yt(Ci),yt(Po))}var Et=Fr(0);function Fc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jh=[];function bp(){for(var t=0;t<jh.length;t++)jh[t]._workInProgressVersionPrimary=null;jh.length=0}var pc=er.ReactCurrentDispatcher,Zh=er.ReactCurrentBatchConfig,ps=0,Tt=null,kt=null,Gt=null,kc=!1,mo=!1,No=0,yM=0;function tn(){throw Error(ie(321))}function wp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function Ep(t,e,n,i,r,s){if(ps=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pc.current=t===null||t.memoizedState===null?wM:EM,t=n(i,r),mo){s=0;do{if(mo=!1,No=0,25<=s)throw Error(ie(301));s+=1,Gt=kt=null,e.updateQueue=null,pc.current=TM,t=n(i,r)}while(mo)}if(pc.current=Oc,e=kt!==null&&kt.next!==null,ps=0,Gt=kt=Tt=null,kc=!1,e)throw Error(ie(300));return t}function Tp(){var t=No!==0;return No=0,t}function Ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Tt.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Qn(){if(kt===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Gt===null?Tt.memoizedState:Gt.next;if(e!==null)Gt=e,kt=t;else{if(t===null)throw Error(ie(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Gt===null?Tt.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function Lo(t,e){return typeof e=="function"?e(t):e}function Jh(t){var e=Qn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((ps&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,Tt.lanes|=h,ms|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,hi(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Tt.lanes|=s,ms|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qh(t){var e=Qn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);hi(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function fv(){}function pv(t,e){var n=Tt,i=Qn(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,Ap(xv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,Do(9,gv.bind(null,n,i,r,e),void 0,null),Ht===null)throw Error(ie(349));(ps&30)!==0||mv(n,e,r)}return r}function mv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gv(t,e,n,i){e.value=n,e.getSnapshot=i,vv(e)&&_v(t)}function xv(t,e,n){return n(function(){vv(e)&&_v(t)})}function vv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function _v(t){var e=Ji(t,1);e!==null&&di(e,t,1,-1)}function V0(t){var e=Ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:t},e.queue=t,t=t.dispatch=bM.bind(null,Tt,t),[e.memoizedState,t]}function Do(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function yv(){return Qn().memoizedState}function mc(t,e,n,i){var r=Ei();Tt.flags|=t,r.memoizedState=Do(1|e,n,void 0,i===void 0?null:i)}function jc(t,e,n,i){var r=Qn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var a=kt.memoizedState;if(s=a.destroy,i!==null&&wp(i,a.deps)){r.memoizedState=Do(e,n,s,i);return}}Tt.flags|=t,r.memoizedState=Do(1|e,n,s,i)}function G0(t,e){return mc(8390656,8,t,e)}function Ap(t,e){return jc(2048,8,t,e)}function Sv(t,e){return jc(4,2,t,e)}function Mv(t,e){return jc(4,4,t,e)}function bv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wv(t,e,n){return n=n!=null?n.concat([t]):null,jc(4,4,bv.bind(null,e,t),n)}function Cp(){}function Ev(t,e){var n=Qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Tv(t,e){var n=Qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Av(t,e,n){return(ps&21)===0?(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n):(hi(n,e)||(n=Nx(),Tt.lanes|=n,ms|=n,t.baseState=!0),e)}function SM(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=Zh.transition;Zh.transition={};try{t(!1),e()}finally{lt=n,Zh.transition=i}}function Cv(){return Qn().memoizedState}function MM(t,e,n){var i=Ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Rv(t))Pv(e,n);else if(n=uv(t,e,n,i),n!==null){var r=fn();di(n,t,i,r),Iv(n,e,i)}}function bM(t,e,n){var i=Ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rv(t))Pv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,hi(o,a)){var l=e.interleaved;l===null?(r.next=r,_p(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=uv(t,e,r,i),n!==null&&(r=fn(),di(n,t,i,r),Iv(n,e,i))}}function Rv(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function Pv(t,e){mo=kc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Iv(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sp(t,n)}}var Oc={readContext:Jn,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},wM={readContext:Jn,useCallback:function(t,e){return Ei().memoizedState=[t,e===void 0?null:e],t},useContext:Jn,useEffect:G0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,mc(4194308,4,bv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return mc(4194308,4,t,e)},useInsertionEffect:function(t,e){return mc(4,2,t,e)},useMemo:function(t,e){var n=Ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=MM.bind(null,Tt,t),[i.memoizedState,t]},useRef:function(t){var e=Ei();return t={current:t},e.memoizedState=t},useState:V0,useDebugValue:Cp,useDeferredValue:function(t){return Ei().memoizedState=t},useTransition:function(){var t=V0(!1),e=t[0];return t=SM.bind(null,t[1]),Ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Tt,r=Ei();if(wt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Ht===null)throw Error(ie(349));(ps&30)!==0||mv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,G0(xv.bind(null,i,s,t),[t]),i.flags|=2048,Do(9,gv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ei(),e=Ht.identifierPrefix;if(wt){var n=Yi,i=$i;n=(i&~(1<<32-ui(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=No++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},EM={readContext:Jn,useCallback:Ev,useContext:Jn,useEffect:Ap,useImperativeHandle:wv,useInsertionEffect:Sv,useLayoutEffect:Mv,useMemo:Tv,useReducer:Jh,useRef:yv,useState:function(){return Jh(Lo)},useDebugValue:Cp,useDeferredValue:function(t){var e=Qn();return Av(e,kt.memoizedState,t)},useTransition:function(){var t=Jh(Lo)[0],e=Qn().memoizedState;return[t,e]},useMutableSource:fv,useSyncExternalStore:pv,useId:Cv,unstable_isNewReconciler:!1},TM={readContext:Jn,useCallback:Ev,useContext:Jn,useEffect:Ap,useImperativeHandle:wv,useInsertionEffect:Sv,useLayoutEffect:Mv,useMemo:Tv,useReducer:Qh,useRef:yv,useState:function(){return Qh(Lo)},useDebugValue:Cp,useDeferredValue:function(t){var e=Qn();return kt===null?e.memoizedState=t:Av(e,kt.memoizedState,t)},useTransition:function(){var t=Qh(Lo)[0],e=Qn().memoizedState;return[t,e]},useMutableSource:fv,useSyncExternalStore:pv,useId:Cv,unstable_isNewReconciler:!1};function oi(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Uf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zc={isMounted:function(t){return(t=t._reactInternals)?vs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=Ir(t),s=Ki(i,r);s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(di(e,t,r,i),fc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=Ir(t),s=Ki(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(di(e,t,r,i),fc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=Ir(t),r=Ki(n,i);r.tag=2,e!=null&&(r.callback=e),e=Rr(t,r,i),e!==null&&(di(e,t,i,n),fc(e,t,i))}};function H0(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!To(n,i)||!To(r,s):!0}function Nv(t,e,n){var i=!1,r=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Jn(s):(r=Mn(e)?hs:sn.current,i=e.contextTypes,s=(i=i!=null)?na(t,r):Dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function W0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zc.enqueueReplaceState(e,e.state,null)}function Ff(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},yp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Jn(s):(s=Mn(e)?hs:sn.current,r.context=na(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Uf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Zc.enqueueReplaceState(r,r.state,null),Uc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function aa(t,e){try{var n="",i=e;do n+=n1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ef(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AM=typeof WeakMap=="function"?WeakMap:Map;function Lv(t,e,n){n=Ki(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){zc||(zc=!0,$f=i),kf(t,e)},n}function Dv(t,e,n){n=Ki(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){kf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){kf(t,e),typeof i!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function X0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new AM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=VM.bind(null,t,e,n),e.then(t,t))}function q0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $0(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ki(-1,1),e.tag=2,Rr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var CM=er.ReactCurrentOwner,yn=!1;function hn(t,e,n,i){e.child=t===null?cv(e,null,n,i):ra(e,t.child,n,i)}function Y0(t,e,n,i,r){n=n.render;var s=e.ref;return Qs(e,r),i=Ep(t,e,n,i,s,r),n=Tp(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Qi(t,e,r)):(wt&&n&&fp(e),e.flags|=1,hn(t,e,i,r),e.child)}function K0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Fp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Uv(t,e,s,i,r)):(t=_c(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:To,n(a,i)&&t.ref===e.ref)return Qi(t,e,r)}return e.flags|=1,t=Nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Uv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(To(s,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(yn=!0);else return e.lanes=t.lanes,Qi(t,e,r)}return Of(t,e,n,i,r)}function Fv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(Ys,Pn),Pn|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt(Ys,Pn),Pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,xt(Ys,Pn),Pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,xt(Ys,Pn),Pn|=i;return hn(t,e,r,n),e.child}function kv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Of(t,e,n,i,r){var s=Mn(n)?hs:sn.current;return s=na(e,s),Qs(e,r),n=Ep(t,e,n,i,s,r),i=Tp(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Qi(t,e,r)):(wt&&i&&fp(e),e.flags|=1,hn(t,e,n,r),e.child)}function j0(t,e,n,i,r){if(Mn(n)){var s=!0;Pc(e)}else s=!1;if(Qs(e,r),e.stateNode===null)gc(t,e),Nv(e,n,i),Ff(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Jn(c):(c=Mn(n)?hs:sn.current,c=na(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&W0(e,a,i,c),yr=!1;var d=e.memoizedState;a.state=d,Uc(e,i,a,r),l=e.memoizedState,o!==i||d!==l||Sn.current||yr?(typeof h=="function"&&(Uf(e,n,h,i),l=e.memoizedState),(o=yr||H0(e,n,o,i,d,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,dv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:oi(e.type,o),a.props=c,f=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Jn(l):(l=Mn(n)?hs:sn.current,l=na(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&W0(e,a,i,l),yr=!1,d=e.memoizedState,a.state=d,Uc(e,i,a,r);var v=e.memoizedState;o!==f||d!==v||Sn.current||yr?(typeof m=="function"&&(Uf(e,n,m,i),v=e.memoizedState),(c=yr||H0(e,n,c,i,d,v,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Bf(t,e,n,i,s,r)}function Bf(t,e,n,i,r,s){kv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&U0(e,n,!1),Qi(t,e,s);i=e.stateNode,CM.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ra(e,t.child,null,s),e.child=ra(e,null,o,s)):hn(t,e,o,s),e.memoizedState=i.state,r&&U0(e,n,!0),e.child}function Ov(t){var e=t.stateNode;e.pendingContext?D0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&D0(t,e.context,!1),Sp(t,e.containerInfo)}function Z0(t,e,n,i,r){return ia(),mp(r),e.flags|=256,hn(t,e,n,i),e.child}var zf={dehydrated:null,treeContext:null,retryLane:0};function Vf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bv(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(Et,r&1),t===null)return Lf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=a):s=eu(a,i,0,null),t=ds(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vf(n),e.memoizedState=zf,t):Rp(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return RM(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return(a&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Nr(o,s):(s=ds(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Vf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=zf,i}return s=t.child,t=s.sibling,i=Nr(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Rp(t,e){return e=eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oc(t,e,n,i){return i!==null&&mp(i),ra(e,t.child,null,n),t=Rp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RM(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=ef(Error(ie(422))),oc(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=eu({mode:"visible",children:i.children},r,0,null),s=ds(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&ra(e,t.child,null,a),e.child.memoizedState=Vf(a),e.memoizedState=zf,s);if((e.mode&1)===0)return oc(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=ef(s,i,void 0),oc(t,e,a,i)}if(o=(a&t.childLanes)!==0,yn||o){if(i=Ht,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|a))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ji(t,r),di(i,t,r,-1))}return Up(),i=ef(Error(ie(421))),oc(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=GM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,In=Cr(r.nextSibling),Nn=e,wt=!0,ci=null,t!==null&&(Yn[Kn++]=$i,Yn[Kn++]=Yi,Yn[Kn++]=fs,$i=t.id,Yi=t.overflow,fs=e),e=Rp(e,i.children),e.flags|=4096,e)}function J0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Df(t.return,e,n)}function tf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function zv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(hn(t,e,i.children,n),i=Et.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&J0(t,n,e);else if(t.tag===19)J0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(Et,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Fc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),tf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Fc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}tf(e,!0,n,null,s);break;case"together":tf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gc(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ms|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function PM(t,e,n){switch(e.tag){case 3:Ov(e),ia();break;case 5:hv(e);break;case 1:Mn(e.type)&&Pc(e);break;case 4:Sp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(Lc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(Et,Et.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Bv(t,e,n):(xt(Et,Et.current&1),t=Qi(t,e,n),t!==null?t.sibling:null);xt(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return zv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,Fv(t,e,n)}return Qi(t,e,n)}var Vv,Gf,Gv,Hv;Vv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gf=function(){};Gv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,cs(Ci.current);var s=null;switch(n){case"input":r=uf(t,r),i=uf(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=ff(t,r),i=ff(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Cc)}mf(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r?.[c],i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_o.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Hv=function(t,e,n,i){n!==i&&(e.flags|=4)};function no(t,e){if(!wt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function nn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function IM(t,e,n){var i=e.pendingProps;switch(pp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(e),null;case 1:return Mn(e.type)&&Rc(),nn(e),null;case 3:return i=e.stateNode,sa(),yt(Sn),yt(sn),bp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(sc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,ci!==null&&(jf(ci),ci=null))),Gf(t,e),nn(e),null;case 5:Mp(e);var r=cs(Io.current);if(n=e.type,t!==null&&e.stateNode!=null)Gv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return nn(e),null}if(t=cs(Ci.current),sc(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ti]=e,i[Ro]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<lo.length;r++)_t(lo[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":a0(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":l0(i,s),_t("invalid",i)}mf(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&rc(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&rc(i.textContent,o,t),r=["children",""+o]):_o.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&_t("scroll",i)}switch(n){case"input":ql(i),o0(i,s,!0);break;case"textarea":ql(i),c0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Cc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Ti]=e,t[Ro]=i,Vv(t,e,!1,!1),e.stateNode=t;e:{switch(a=gf(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<lo.length;r++)_t(lo[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":a0(t,i),r=uf(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),_t("invalid",t);break;case"textarea":l0(t,i),r=ff(t,i),_t("invalid",t);break;default:r=i}mf(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?yx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&yo(t,l):typeof l=="number"&&yo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&Qf(t,s,l,a))}switch(n){case"input":ql(t),o0(t,i,!1);break;case"textarea":ql(t),c0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Cc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nn(e),null;case 6:if(t&&e.stateNode!=null)Hv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=cs(Io.current),cs(Ci.current),sc(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ti]=e,(s=i.nodeValue!==n)&&(t=Nn,t!==null))switch(t.tag){case 3:rc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&rc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ti]=e,e.stateNode=i}return nn(e),null;case 13:if(yt(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(wt&&In!==null&&(e.mode&1)!==0&&(e.flags&128)===0)ov(),ia(),e.flags|=98560,s=!1;else if(s=sc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Ti]=e}else ia(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;nn(e),s=!1}else ci!==null&&(jf(ci),ci=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Et.current&1)!==0?Ot===0&&(Ot=3):Up())),e.updateQueue!==null&&(e.flags|=4),nn(e),null);case 4:return sa(),Gf(t,e),t===null&&Ao(e.stateNode.containerInfo),nn(e),null;case 10:return vp(e.type._context),nn(e),null;case 17:return Mn(e.type)&&Rc(),nn(e),null;case 19:if(yt(Et),s=e.memoizedState,s===null)return nn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)no(s,!1);else{if(Ot!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(a=Fc(t),a!==null){for(e.flags|=128,no(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&Dt()>oa&&(e.flags|=128,i=!0,no(s,!1),e.lanes=4194304)}else{if(!i)if(t=Fc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),no(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!wt)return nn(e),null}else 2*Dt()-s.renderingStartTime>oa&&n!==1073741824&&(e.flags|=128,i=!0,no(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Dt(),e.sibling=null,n=Et.current,xt(Et,i?n&1|2:n&1),e):(nn(e),null);case 22:case 23:return Dp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Pn&1073741824)!==0&&(nn(e),e.subtreeFlags&6&&(e.flags|=8192)):nn(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function NM(t,e){switch(pp(e),e.tag){case 1:return Mn(e.type)&&Rc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return sa(),yt(Sn),yt(sn),bp(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Mp(e),null;case 13:if(yt(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ia()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(Et),null;case 4:return sa(),null;case 10:return vp(e.type._context),null;case 22:case 23:return Dp(),null;case 24:return null;default:return null}}var lc=!1,rn=!1,LM=typeof WeakSet=="function"?WeakSet:Set,be=null;function $s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Pt(t,e,i)}else n.current=null}function Hf(t,e,n){try{n()}catch(i){Pt(t,e,i)}}var Q0=!1;function DM(t,e){if(Tf=Ec,t=Yx(),hp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++h===i&&(l=a),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Af={focusedElem:t,selectionRange:n},Ec=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,g=v.memoizedState,u=e.stateNode,p=u.getSnapshotBeforeUpdate(e.elementType===e.type?b:oi(e.type,b),g);u.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(M){Pt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return v=Q0,Q0=!1,v}function go(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hf(e,n,s)}r=r.next}while(r!==i)}}function Jc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Wf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wv(t){var e=t.alternate;e!==null&&(t.alternate=null,Wv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ti],delete e[Ro],delete e[Pf],delete e[gM],delete e[xM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xv(t){return t.tag===5||t.tag===3||t.tag===4}function ex(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cc));else if(i!==4&&(t=t.child,t!==null))for(Xf(t,e,n),t=t.sibling;t!==null;)Xf(t,e,n),t=t.sibling}function qf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qf(t,e,n),t=t.sibling;t!==null;)qf(t,e,n),t=t.sibling}var Yt=null,li=!1;function vr(t,e,n){for(n=n.child;n!==null;)qv(t,e,n),n=n.sibling}function qv(t,e,n){if(Ai&&typeof Ai.onCommitFiberUnmount=="function")try{Ai.onCommitFiberUnmount(Wc,n)}catch{}switch(n.tag){case 5:rn||$s(n,e);case 6:var i=Yt,r=li;Yt=null,vr(t,e,n),Yt=i,li=r,Yt!==null&&(li?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(li?(t=Yt,n=n.stateNode,t.nodeType===8?Yh(t.parentNode,n):t.nodeType===1&&Yh(t,n),wo(t)):Yh(Yt,n.stateNode));break;case 4:i=Yt,r=li,Yt=n.stateNode.containerInfo,li=!0,vr(t,e,n),Yt=i,li=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&((s&2)!==0||(s&4)!==0)&&Hf(n,e,a),r=r.next}while(r!==i)}vr(t,e,n);break;case 1:if(!rn&&($s(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Pt(n,e,o)}vr(t,e,n);break;case 21:vr(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,vr(t,e,n),rn=i):vr(t,e,n);break;default:vr(t,e,n)}}function tx(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LM),e.forEach(function(i){var r=HM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ai(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Yt=o.stateNode,li=!1;break e;case 3:Yt=o.stateNode.containerInfo,li=!0;break e;case 4:Yt=o.stateNode.containerInfo,li=!0;break e}o=o.return}if(Yt===null)throw Error(ie(160));qv(s,a,r),Yt=null,li=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$v(e,t),e=e.sibling}function $v(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ai(e,t),wi(t),i&4){try{go(3,t,t.return),Jc(3,t)}catch(b){Pt(t,t.return,b)}try{go(5,t,t.return)}catch(b){Pt(t,t.return,b)}}break;case 1:ai(e,t),wi(t),i&512&&n!==null&&$s(n,n.return);break;case 5:if(ai(e,t),wi(t),i&512&&n!==null&&$s(n,n.return),t.flags&32){var r=t.stateNode;try{yo(r,"")}catch(b){Pt(t,t.return,b)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&mx(r,s),gf(o,a);var c=gf(o,s);for(a=0;a<l.length;a+=2){var h=l[a],f=l[a+1];h==="style"?yx(r,f):h==="dangerouslySetInnerHTML"?vx(r,f):h==="children"?yo(r,f):Qf(r,h,f,c)}switch(o){case"input":df(r,s);break;case"textarea":gx(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ks(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ks(r,!!s.multiple,s.defaultValue,!0):Ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ro]=s}catch(b){Pt(t,t.return,b)}}break;case 6:if(ai(e,t),wi(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(b){Pt(t,t.return,b)}}break;case 3:if(ai(e,t),wi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wo(e.containerInfo)}catch(b){Pt(t,t.return,b)}break;case 4:ai(e,t),wi(t);break;case 13:ai(e,t),wi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Np=Dt())),i&4&&tx(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(c=rn)||h,ai(e,t),rn=c):ai(e,t),wi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&(t.mode&1)!==0)for(be=t,h=t.child;h!==null;){for(f=be=h;be!==null;){switch(d=be,m=d.child,d.tag){case 0:case 11:case 14:case 15:go(4,d,d.return);break;case 1:$s(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(b){Pt(i,n,b)}}break;case 5:$s(d,d.return);break;case 22:if(d.memoizedState!==null){ix(f);continue}}m!==null?(m.return=d,be=m):ix(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=_x("display",a))}catch(b){Pt(t,t.return,b)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(b){Pt(t,t.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ai(e,t),wi(t),i&4&&tx(t);break;case 21:break;default:ai(e,t),wi(t)}}function wi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Xv(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(yo(r,""),i.flags&=-33);var s=ex(t);qf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=ex(t);Xf(t,o,a);break;default:throw Error(ie(161))}}catch(l){Pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function UM(t,e,n){be=t,Yv(t,e,n)}function Yv(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||lc;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||rn;o=lc;var c=rn;if(lc=a,(rn=l)&&!c)for(be=r;be!==null;)a=be,l=a.child,a.tag===22&&a.memoizedState!==null?rx(r):l!==null?(l.return=a,be=l):rx(r);for(;s!==null;)be=s,Yv(s,e,n),s=s.sibling;be=r,lc=o,rn=c}nx(t,e,n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,be=s):nx(t,e,n)}}function nx(t){for(;be!==null;){var e=be;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:rn||Jc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:oi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&z0(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}z0(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&wo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}rn||e.flags&512&&Wf(e)}catch(d){Pt(e,e.return,d)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function ix(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function rx(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jc(4,e)}catch(l){Pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Pt(e,r,l)}}var s=e.return;try{Wf(e)}catch(l){Pt(e,s,l)}break;case 5:var a=e.return;try{Wf(e)}catch(l){Pt(e,a,l)}}}catch(l){Pt(e,e.return,l)}if(e===t){be=null;break}var o=e.sibling;if(o!==null){o.return=e.return,be=o;break}be=e.return}}var FM=Math.ceil,Bc=er.ReactCurrentDispatcher,Pp=er.ReactCurrentOwner,Zn=er.ReactCurrentBatchConfig,tt=0,Ht=null,Ut=null,Kt=0,Pn=0,Ys=Fr(0),Ot=0,Uo=null,ms=0,Qc=0,Ip=0,xo=null,_n=null,Np=0,oa=1/0,Xi=null,zc=!1,$f=null,Pr=null,cc=!1,wr=null,Vc=0,vo=0,Yf=null,xc=-1,vc=0;function fn(){return(tt&6)!==0?Dt():xc!==-1?xc:xc=Dt()}function Ir(t){return(t.mode&1)===0?1:(tt&2)!==0&&Kt!==0?Kt&-Kt:_M.transition!==null?(vc===0&&(vc=Nx()),vc):(t=lt,t!==0||(t=window.event,t=t===void 0?16:Bx(t.type)),t)}function di(t,e,n,i){if(50<vo)throw vo=0,Yf=null,Error(ie(185));Fo(t,n,i),((tt&2)===0||t!==Ht)&&(t===Ht&&((tt&2)===0&&(Qc|=n),Ot===4&&Mr(t,Kt)),bn(t,i),n===1&&tt===0&&(e.mode&1)===0&&(oa=Dt()+500,Kc&&kr()))}function bn(t,e){var n=t.callbackNode;S1(t,e);var i=wc(t,t===Ht?Kt:0);if(i===0)n!==null&&h0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&h0(n),e===1)t.tag===0?vM(sx.bind(null,t)):rv(sx.bind(null,t)),pM(function(){(tt&6)===0&&kr()}),n=null;else{switch(Lx(i)){case 1:n=rp;break;case 4:n=Px;break;case 16:n=bc;break;case 536870912:n=Ix;break;default:n=bc}n=n_(n,Kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kv(t,e){if(xc=-1,vc=0,(tt&6)!==0)throw Error(ie(327));var n=t.callbackNode;if(ea()&&t.callbackNode!==n)return null;var i=wc(t,t===Ht?Kt:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=Gc(t,i);else{e=i;var r=tt;tt|=2;var s=Zv();(Ht!==t||Kt!==e)&&(Xi=null,oa=Dt()+500,us(t,e));do try{BM();break}catch(o){jv(t,o)}while(!0);xp(),Bc.current=s,tt=r,Ut!==null?e=0:(Ht=null,Kt=0,e=Ot)}if(e!==0){if(e===2&&(r=Sf(t),r!==0&&(i=r,e=Kf(t,r))),e===1)throw n=Uo,us(t,0),Mr(t,i),bn(t,Dt()),n;if(e===6)Mr(t,i);else{if(r=t.current.alternate,(i&30)===0&&!kM(r)&&(e=Gc(t,i),e===2&&(s=Sf(t),s!==0&&(i=s,e=Kf(t,s))),e===1))throw n=Uo,us(t,0),Mr(t,i),bn(t,Dt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:as(t,_n,Xi);break;case 3:if(Mr(t,i),(i&130023424)===i&&(e=Np+500-Dt(),10<e)){if(wc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Rf(as.bind(null,t,_n,Xi),e);break}as(t,_n,Xi);break;case 4:if(Mr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ui(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*FM(i/1960))-i,10<i){t.timeoutHandle=Rf(as.bind(null,t,_n,Xi),i);break}as(t,_n,Xi);break;case 5:as(t,_n,Xi);break;default:throw Error(ie(329))}}}return bn(t,Dt()),t.callbackNode===n?Kv.bind(null,t):null}function Kf(t,e){var n=xo;return t.current.memoizedState.isDehydrated&&(us(t,e).flags|=256),t=Gc(t,e),t!==2&&(e=_n,_n=n,e!==null&&jf(e)),t}function jf(t){_n===null?_n=t:_n.push.apply(_n,t)}function kM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mr(t,e){for(e&=~Ip,e&=~Qc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ui(e),i=1<<n;t[n]=-1,e&=~i}}function sx(t){if((tt&6)!==0)throw Error(ie(327));ea();var e=wc(t,0);if((e&1)===0)return bn(t,Dt()),null;var n=Gc(t,e);if(t.tag!==0&&n===2){var i=Sf(t);i!==0&&(e=i,n=Kf(t,i))}if(n===1)throw n=Uo,us(t,0),Mr(t,e),bn(t,Dt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,as(t,_n,Xi),bn(t,Dt()),null}function Lp(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(oa=Dt()+500,Kc&&kr())}}function gs(t){wr!==null&&wr.tag===0&&(tt&6)===0&&ea();var e=tt;tt|=1;var n=Zn.transition,i=lt;try{if(Zn.transition=null,lt=1,t)return t()}finally{lt=i,Zn.transition=n,tt=e,(tt&6)===0&&kr()}}function Dp(){Pn=Ys.current,yt(Ys)}function us(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fM(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(pp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Rc();break;case 3:sa(),yt(Sn),yt(sn),bp();break;case 5:Mp(i);break;case 4:sa();break;case 13:yt(Et);break;case 19:yt(Et);break;case 10:vp(i.type._context);break;case 22:case 23:Dp()}n=n.return}if(Ht=t,Ut=t=Nr(t.current,null),Kt=Pn=e,Ot=0,Uo=null,Ip=Qc=ms=0,_n=xo=null,ls!==null){for(e=0;e<ls.length;e++)if(n=ls[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}ls=null}return t}function jv(t,e){do{var n=Ut;try{if(xp(),pc.current=Oc,kc){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}kc=!1}if(ps=0,Gt=kt=Tt=null,mo=!1,No=0,Pp.current=null,n===null||n.return===null){Ot=1,Uo=e,Ut=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,f=h.tag;if((h.mode&1)===0&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=q0(a);if(m!==null){m.flags&=-257,$0(m,a,o,s,e),m.mode&1&&X0(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var b=new Set;b.add(l),e.updateQueue=b}else v.add(l);break e}else{if((e&1)===0){X0(s,c,e),Up();break e}l=Error(ie(426))}}else if(wt&&o.mode&1){var g=q0(a);if(g!==null){(g.flags&65536)===0&&(g.flags|=256),$0(g,a,o,s,e),mp(aa(l,o));break e}}s=l=aa(l,o),Ot!==4&&(Ot=2),xo===null?xo=[s]:xo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Lv(s,l,e);B0(s,u);break e;case 1:o=l;var p=s.type,_=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Pr===null||!Pr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Dv(s,o,e);B0(s,M);break e}}s=s.return}while(s!==null)}Qv(n)}catch(C){e=C,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(!0)}function Zv(){var t=Bc.current;return Bc.current=Oc,t===null?Oc:t}function Up(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Ht===null||(ms&268435455)===0&&(Qc&268435455)===0||Mr(Ht,Kt)}function Gc(t,e){var n=tt;tt|=2;var i=Zv();(Ht!==t||Kt!==e)&&(Xi=null,us(t,e));do try{OM();break}catch(r){jv(t,r)}while(!0);if(xp(),tt=n,Bc.current=i,Ut!==null)throw Error(ie(261));return Ht=null,Kt=0,Ot}function OM(){for(;Ut!==null;)Jv(Ut)}function BM(){for(;Ut!==null&&!h1();)Jv(Ut)}function Jv(t){var e=t_(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,e===null?Qv(t):Ut=e,Pp.current=null}function Qv(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=IM(n,e,Pn),n!==null){Ut=n;return}}else{if(n=NM(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ot=6,Ut=null;return}}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);Ot===0&&(Ot=5)}function as(t,e,n){var i=lt,r=Zn.transition;try{Zn.transition=null,lt=1,zM(t,e,n,i)}finally{Zn.transition=r,lt=i}return null}function zM(t,e,n,i){do ea();while(wr!==null);if((tt&6)!==0)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(M1(t,s),t===Ht&&(Ut=Ht=null,Kt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||cc||(cc=!0,n_(bc,function(){return ea(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Zn.transition,Zn.transition=null;var a=lt;lt=1;var o=tt;tt|=4,Pp.current=null,DM(t,n),$v(n,t),lM(Af),Ec=!!Tf,Af=Tf=null,t.current=n,UM(n,t,r),f1(),tt=o,lt=a,Zn.transition=s}else t.current=n;if(cc&&(cc=!1,wr=t,Vc=r),s=t.pendingLanes,s===0&&(Pr=null),g1(n.stateNode,i),bn(t,Dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(zc)throw zc=!1,t=$f,$f=null,t;return(Vc&1)!==0&&t.tag!==0&&ea(),s=t.pendingLanes,(s&1)!==0?t===Yf?vo++:(vo=0,Yf=t):vo=0,kr(),null}function ea(){if(wr!==null){var t=Lx(Vc),e=Zn.transition,n=lt;try{if(Zn.transition=null,lt=16>t?16:t,wr===null)var i=!1;else{if(t=wr,wr=null,Vc=0,(tt&6)!==0)throw Error(ie(331));var r=tt;for(tt|=4,be=t.current;be!==null;){var s=be,a=s.child;if((be.flags&16)!==0){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(be=c;be!==null;){var h=be;switch(h.tag){case 0:case 11:case 15:go(8,h,s)}var f=h.child;if(f!==null)f.return=h,be=f;else for(;be!==null;){h=be;var d=h.sibling,m=h.return;if(Wv(h),h===c){be=null;break}if(d!==null){d.return=m,be=d;break}be=m}}}var v=s.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var g=b.sibling;b.sibling=null,b=g}while(b!==null)}}be=s}}if((s.subtreeFlags&2064)!==0&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:go(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,be=u;break e}be=s.return}}var p=t.current;for(be=p;be!==null;){a=be;var _=a.child;if((a.subtreeFlags&2064)!==0&&_!==null)_.return=a,be=_;else e:for(a=p;be!==null;){if(o=be,(o.flags&2048)!==0)try{switch(o.tag){case 0:case 11:case 15:Jc(9,o)}}catch(C){Pt(o,o.return,C)}if(o===a){be=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,be=M;break e}be=o.return}}if(tt=r,kr(),Ai&&typeof Ai.onPostCommitFiberRoot=="function")try{Ai.onPostCommitFiberRoot(Wc,t)}catch{}i=!0}return i}finally{lt=n,Zn.transition=e}}return!1}function ax(t,e,n){e=aa(n,e),e=Lv(t,e,1),t=Rr(t,e,1),e=fn(),t!==null&&(Fo(t,1,e),bn(t,e))}function Pt(t,e,n){if(t.tag===3)ax(t,t,n);else for(;e!==null;){if(e.tag===3){ax(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pr===null||!Pr.has(i))){t=aa(n,t),t=Dv(e,t,1),e=Rr(e,t,1),t=fn(),e!==null&&(Fo(e,1,t),bn(e,t));break}}e=e.return}}function VM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(Kt&n)===n&&(Ot===4||Ot===3&&(Kt&130023424)===Kt&&500>Dt()-Np?us(t,0):Ip|=n),bn(t,e)}function e_(t,e){e===0&&((t.mode&1)===0?e=1:(e=Kl,Kl<<=1,(Kl&130023424)===0&&(Kl=4194304)));var n=fn();t=Ji(t,e),t!==null&&(Fo(t,e,n),bn(t,n))}function GM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),e_(t,n)}function HM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),e_(t,n)}var t_;t_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)yn=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return yn=!1,PM(t,e,n);yn=(t.flags&131072)!==0}else yn=!1,wt&&(e.flags&1048576)!==0&&sv(e,Nc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;gc(t,e),t=e.pendingProps;var r=na(e,sn.current);Qs(e,n),r=Ep(null,e,i,t,r,n);var s=Tp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(s=!0,Pc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,yp(e),r.updater=Zc,e.stateNode=r,r._reactInternals=e,Ff(e,i,t,n),e=Bf(null,e,i,!0,s,n)):(e.tag=0,wt&&s&&fp(e),hn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(gc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=XM(i),t=oi(i,t),r){case 0:e=Of(null,e,i,t,n);break e;case 1:e=j0(null,e,i,t,n);break e;case 11:e=Y0(null,e,i,t,n);break e;case 14:e=K0(null,e,i,oi(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Of(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),j0(t,e,i,r,n);case 3:e:{if(Ov(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,dv(t,e),Uc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=aa(Error(ie(423)),e),e=Z0(t,e,i,n,r);break e}else if(i!==r){r=aa(Error(ie(424)),e),e=Z0(t,e,i,n,r);break e}else for(In=Cr(e.stateNode.containerInfo.firstChild),Nn=e,wt=!0,ci=null,n=cv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ia(),i===r){e=Qi(t,e,n);break e}hn(t,e,i,n)}e=e.child}return e;case 5:return hv(e),t===null&&Lf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Cf(i,r)?a=null:s!==null&&Cf(i,s)&&(e.flags|=32),kv(t,e),hn(t,e,a,n),e.child;case 6:return t===null&&Lf(e),null;case 13:return Bv(t,e,n);case 4:return Sp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ra(e,null,i,n):hn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Y0(t,e,i,r,n);case 7:return hn(t,e,e.pendingProps,n),e.child;case 8:return hn(t,e,e.pendingProps.children,n),e.child;case 12:return hn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,xt(Lc,i._currentValue),i._currentValue=a,s!==null)if(hi(s.value,a)){if(s.children===r.children&&!Sn.current){e=Qi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ki(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Df(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Df(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}hn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Qs(e,n),r=Jn(r),i=i(r),e.flags|=1,hn(t,e,i,n),e.child;case 14:return i=e.type,r=oi(i,e.pendingProps),r=oi(i.type,r),K0(t,e,i,r,n);case 15:return Uv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),gc(t,e),e.tag=1,Mn(i)?(t=!0,Pc(e)):t=!1,Qs(e,n),Nv(e,i,r),Ff(e,i,r,n),Bf(null,e,i,!0,t,n);case 19:return zv(t,e,n);case 22:return Fv(t,e,n)}throw Error(ie(156,e.tag))};function n_(t,e){return Rx(t,e)}function WM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,i){return new WM(t,e,n,i)}function Fp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function XM(t){if(typeof t=="function")return Fp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tp)return 11;if(t===np)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _c(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Fp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Os:return ds(n.children,r,s,e);case ep:a=8,r|=8;break;case af:return t=jn(12,n,e,r|2),t.elementType=af,t.lanes=s,t;case of:return t=jn(13,n,e,r),t.elementType=of,t.lanes=s,t;case lf:return t=jn(19,n,e,r),t.elementType=lf,t.lanes=s,t;case hx:return eu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ux:a=10;break e;case dx:a=9;break e;case tp:a=11;break e;case np:a=14;break e;case _r:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=jn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ds(t,e,n,i){return t=jn(7,t,i,e),t.lanes=n,t}function eu(t,e,n,i){return t=jn(22,t,i,e),t.elementType=hx,t.lanes=n,t.stateNode={isHidden:!1},t}function nf(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function rf(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zh(0),this.expirationTimes=zh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kp(t,e,n,i,r,s,a,o,l){return t=new qM(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yp(s),t}function $M(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ks,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function i_(t){if(!t)return Dr;t=t._reactInternals;e:{if(vs(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(Mn(n))return iv(t,n,e)}return e}function r_(t,e,n,i,r,s,a,o,l){return t=kp(n,i,!0,t,r,s,a,o,l),t.context=i_(null),n=t.current,i=fn(),r=Ir(n),s=Ki(i,r),s.callback=e??null,Rr(n,s,r),t.current.lanes=r,Fo(t,r,i),bn(t,i),t}function tu(t,e,n,i){var r=e.current,s=fn(),a=Ir(r);return n=i_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ki(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Rr(r,e,a),t!==null&&(di(t,r,a,s),fc(t,r,a)),a}function Hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ox(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Op(t,e){ox(t,e),(t=t.alternate)&&ox(t,e)}function YM(){return null}var s_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bp(t){this._internalRoot=t}nu.prototype.render=Bp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));tu(t,e,null,null)};nu.prototype.unmount=Bp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gs(function(){tu(null,t,null,null)}),e[Zi]=null}};function nu(t){this._internalRoot=t}nu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Sr.length&&e!==0&&e<Sr[n].priority;n++);Sr.splice(n,0,t),n===0&&Ox(t)}};function zp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lx(){}function KM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Hc(a);s.call(c)}}var a=r_(e,i,t,0,null,!1,!1,"",lx);return t._reactRootContainer=a,t[Zi]=a.current,Ao(t.nodeType===8?t.parentNode:t),gs(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Hc(l);o.call(c)}}var l=kp(t,0,!1,null,null,!1,!1,"",lx);return t._reactRootContainer=l,t[Zi]=l.current,Ao(t.nodeType===8?t.parentNode:t),gs(function(){tu(e,l,n,i)}),l}function ru(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Hc(a);o.call(l)}}tu(e,a,t,r)}else a=KM(n,e,t,r,i);return Hc(a)}Dx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oo(e.pendingLanes);n!==0&&(sp(e,n|1),bn(e,Dt()),(tt&6)===0&&(oa=Dt()+500,kr()))}break;case 13:gs(function(){var i=Ji(t,1);if(i!==null){var r=fn();di(i,t,1,r)}}),Op(t,1)}};ap=function(t){if(t.tag===13){var e=Ji(t,134217728);if(e!==null){var n=fn();di(e,t,134217728,n)}Op(t,134217728)}};Ux=function(t){if(t.tag===13){var e=Ir(t),n=Ji(t,e);if(n!==null){var i=fn();di(n,t,e,i)}Op(t,e)}};Fx=function(){return lt};kx=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};vf=function(t,e,n){switch(e){case"input":if(df(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Yc(i);if(!r)throw Error(ie(90));px(i),df(i,r)}}}break;case"textarea":gx(t,n);break;case"select":e=n.value,e!=null&&Ks(t,!!n.multiple,e,!1)}};bx=Lp;wx=gs;var jM={usingClientEntryPoint:!1,Events:[Oo,Gs,Yc,Sx,Mx,Lp]},io={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ZM={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ax(t),t===null?null:t.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||YM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ro=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ro.isDisabled&&ro.supportsFiber))try{Wc=ro.inject(ZM),Ai=ro}catch{}var ro;Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jM;Un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zp(e))throw Error(ie(200));return $M(t,e,null,n)};Un.createRoot=function(t,e){if(!zp(t))throw Error(ie(299));var n=!1,i="",r=s_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kp(t,1,!1,null,null,n,!1,i,r),t[Zi]=e.current,Ao(t.nodeType===8?t.parentNode:t),new Bp(e)};Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Ax(e),t=t===null?null:t.stateNode,t};Un.flushSync=function(t){return gs(t)};Un.hydrate=function(t,e,n){if(!iu(e))throw Error(ie(200));return ru(null,t,e,!0,n)};Un.hydrateRoot=function(t,e,n){if(!zp(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=s_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=r_(e,null,t,1,n??null,r,!1,s,a),t[Zi]=e.current,Ao(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nu(e)};Un.render=function(t,e,n){if(!iu(e))throw Error(ie(200));return ru(null,t,e,!1,n)};Un.unmountComponentAtNode=function(t){if(!iu(t))throw Error(ie(40));return t._reactRootContainer?(gs(function(){ru(null,null,t,!1,function(){t._reactRootContainer=null,t[Zi]=null})}),!0):!1};Un.unstable_batchedUpdates=Lp;Un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!iu(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return ru(t,e,n,!1,i)};Un.version="18.3.1-next-f1338f8080-20240426"});var c_=Wi((z2,l_)=>{"use strict";function o_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o_)}catch(t){console.error(t)}}o_(),l_.exports=a_()});var d_=Wi(Vp=>{"use strict";var u_=c_();Vp.createRoot=u_.createRoot,Vp.hydrateRoot=u_.hydrateRoot;var V2});var dS=Wi(lh=>{"use strict";var qC=gr(),$C=Symbol.for("react.element"),YC=Symbol.for("react.fragment"),KC=Object.prototype.hasOwnProperty,jC=qC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZC={key:!0,ref:!0,__self:!0,__source:!0};function uS(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)KC.call(e,i)&&!ZC.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:$C,type:t,key:s,ref:a,props:r,_owner:jC.current}}lh.Fragment=YC;lh.jsx=uS;lh.jsxs=uS});var Cl=Wi((LN,hS)=>{"use strict";hS.exports=dS()});var AS=Mi(gr(),1),CS=Mi(d_(),1);var Le=Mi(gr(),1);var N_=0,Mm=1,L_=2;var dl=1,D_=2,Na=3,lr=0,gn=1,Ui=2,Fi=0,ws=1,bm=2,wm=3,Em=4,U_=5;var Xr=100,F_=101,k_=102,O_=103,B_=104,z_=200,V_=201,G_=202,H_=203,Tu=204,Au=205,W_=206,X_=207,q_=208,$_=209,Y_=210,K_=211,j_=212,Z_=213,J_=214,Cu=0,Ru=1,Pu=2,Es=3,Iu=4,Nu=5,Lu=6,Du=7,Tm=0,Q_=1,ey=2,xi=0,Am=1,Cm=2,Rm=3,Pm=4,Im=5,Nm=6,Lm=7;var Dm=300,Zr=301,Ts=302,od=303,ld=304,hl=306,Uu=1e3,Ii=1001,Fu=1002,qt=1003,ty=1004;var fl=1005;var Jt=1006,cd=1007;var Jr=1008;var Tn=1009,Um=1010,Fm=1011,La=1012,ud=1013,vi=1014,_i=1015,ki=1016,dd=1017,hd=1018,Da=1020,km=35902,Om=35899,Bm=1021,zm=1022,ni=1023,Ni=1026,Qr=1027,Vm=1028,fd=1029,es=1030,pd=1031;var md=1033,pl=33776,ml=33777,gl=33778,xl=33779,gd=35840,xd=35841,vd=35842,_d=35843,yd=36196,Sd=37492,Md=37496,bd=37488,wd=37489,vl=37490,Ed=37491,Td=37808,Ad=37809,Cd=37810,Rd=37811,Pd=37812,Id=37813,Nd=37814,Ld=37815,Dd=37816,Ud=37817,Fd=37818,kd=37819,Od=37820,Bd=37821,zd=36492,Vd=36494,Gd=36495,Hd=36283,Wd=36284,_l=36285,Xd=36286;var Xo=2300,ku=2301,Eu=2302,hm=2303,fm=2400,pm=2401,mm=2402;var ny=3200;var qd=0,iy=1,dr="",On="srgb",qo="srgb-linear",$o="linear",ot="srgb";var bs=7680;var gm=519,ry=512,sy=513,ay=514,$d=515,oy=516,ly=517,Yd=518,cy=519,xm=35044;var Gm="300 es",gi=2e3,ba=2001;function JM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function QM(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Yo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function uy(){let t=Yo("canvas");return t.style.display="block",t}var h_={},wa=null;function Hm(...t){let e="THREE."+t.shift();wa?wa("log",e,...t):console.log(e,...t)}function dy(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function De(...t){t=dy(t);let e="THREE."+t.shift();if(wa)wa("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Fe(...t){t=dy(t);let e="THREE."+t.shift();if(wa)wa("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ou(...t){let e=t.join(" ");e in h_||(h_[e]=!0,De(...t))}function hy(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var fy={[Cu]:Ru,[Pu]:Lu,[Iu]:Du,[Es]:Nu,[Ru]:Cu,[Lu]:Pu,[Du]:Iu,[Nu]:Es},Li=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Gp=Math.PI/180,Bu=180/Math.PI;function yl(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[t&255]+an[t>>8&255]+an[t>>16&255]+an[t>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function je(t,e,n){return Math.max(e,Math.min(n,t))}function eb(t,e){return(t%e+e)%e}function Hp(t,e,n){return(1-n)*t+n*e}function zo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function wn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var it=class t{static{t.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Di=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],d=s[a+0],m=s[a+1],v=s[a+2],b=s[a+3];if(f!==b||l!==d||c!==m||h!==v){let g=l*d+c*m+h*v+f*b;g<0&&(d=-d,m=-m,v=-v,b=-b,g=-g);let u=1-o;if(g<.9995){let p=Math.acos(g),_=Math.sin(p);u=Math.sin(u*p)/_,o=Math.sin(o*p)/_,l=l*u+d*o,c=c*u+m*o,h=h*u+v*o,f=f*u+b*o}else{l=l*u+d*o,c=c*u+m*o,h=h*u+v*o,f=f*u+b*o;let p=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=p,c*=p,h*=p,f*=p}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+h*f+l*m-c*d,e[n+1]=l*v+h*d+c*f-o*m,e[n+2]=c*v+h*m+o*d-l*f,e[n+3]=h*v-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*h*f+c*m*v,this._y=c*m*f-d*h*v,this._z=c*h*v+d*m*f,this._w=c*h*f-d*m*v;break;case"YXZ":this._x=d*h*f+c*m*v,this._y=c*m*f-d*h*v,this._z=c*h*v-d*m*f,this._w=c*h*f+d*m*v;break;case"ZXY":this._x=d*h*f-c*m*v,this._y=c*m*f+d*h*v,this._z=c*h*v+d*m*f,this._w=c*h*f-d*m*v;break;case"ZYX":this._x=d*h*f-c*m*v,this._y=c*m*f+d*h*v,this._z=c*h*v-d*m*f,this._w=c*h*f+d*m*v;break;case"YZX":this._x=d*h*f+c*m*v,this._y=c*m*f+d*h*v,this._z=c*h*v-d*m*f,this._w=c*h*f-d*m*v;break;case"XZY":this._x=d*h*f-c*m*v,this._y=c*m*f-d*h*v,this._z=c*h*v+d*m*f,this._w=c*h*f+d*m*v;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],f=n[10],d=i+o+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){let m=2*Math.sqrt(1+i-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class t{static{t.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(f_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(f_.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wp.copy(this).projectOnVector(e),this.sub(Wp)}reflect(e){return this.sub(Wp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wp=new V,f_=new Di,Be=class t{static{t.prototype.isMatrix3=!0}constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],m=i[5],v=i[8],b=r[0],g=r[3],u=r[6],p=r[1],_=r[4],M=r[7],C=r[2],E=r[5],R=r[8];return s[0]=a*b+o*p+l*C,s[3]=a*g+o*_+l*E,s[6]=a*u+o*M+l*R,s[1]=c*b+h*p+f*C,s[4]=c*g+h*_+f*E,s[7]=c*u+h*M+f*R,s[2]=d*b+m*p+v*C,s[5]=d*g+m*_+v*E,s[8]=d*u+m*M+v*R,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*s,m=c*s-a*l,v=n*f+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/v;return e[0]=f*b,e[1]=(r*c-h*i)*b,e[2]=(o*i-r*a)*b,e[3]=d*b,e[4]=(h*n-r*l)*b,e[5]=(r*s-o*n)*b,e[6]=m*b,e[7]=(i*l-c*n)*b,e[8]=(a*n-i*s)*b,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Xp.makeScale(e,n)),this}rotate(e){return this.premultiply(Xp.makeRotation(-e)),this}translate(e,n){return this.premultiply(Xp.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xp=new Be,p_=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),m_=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tb(){let t={enabled:!0,workingColorSpace:qo,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=or(r.r),r.g=or(r.g),r.b=or(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=Ma(r.r),r.g=Ma(r.g),r.b=Ma(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===dr?$o:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ou("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ou("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[qo]:{primaries:e,whitePoint:i,transfer:$o,toXYZ:p_,fromXYZ:m_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:p_,fromXYZ:m_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),t}var Ke=tb();function or(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ma(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var ua,zu=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ua===void 0&&(ua=Yo("canvas")),ua.width=e.width,ua.height=e.height;let r=ua.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ua}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Yo("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=or(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(or(n[i]/255)*255):n[i]=or(n[i]);return{data:n,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},nb=0,Ea=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=yl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(qp(r[a].image)):s.push(qp(r[a]))}else s=qp(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function qp(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zu.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}var ib=0,$p=new V,En=class t extends Li{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Ii,r=Ii,s=Jt,a=Jr,o=ni,l=Tn,c=t.DEFAULT_ANISOTROPY,h=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=yl(),this.name="",this.source=new Ea(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($p).x}get height(){return this.source.getSize($p).y}get depth(){return this.source.getSize($p).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){De(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){De(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uu:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case Fu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uu:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case Fu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Dm;En.DEFAULT_ANISOTROPY=1;var Ct=class t{static{t.prototype.isVector4=!0}constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],v=l[9],b=l[2],g=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-b)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+b)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let _=(c+1)/2,M=(m+1)/2,C=(u+1)/2,E=(h+d)/4,R=(f+b)/4,x=(v+g)/4;return _>M&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=E/i,s=R/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=x/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=x/s),this.set(i,r,s,n),this}let p=Math.sqrt((g-v)*(g-v)+(f-b)*(f-b)+(d-h)*(d-h));return Math.abs(p)<.001&&(p=1),this.x=(g-v)/p,this.y=(f-b)/p,this.z=(d-h)/p,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this.w=je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this.w=je(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vu=class extends Li{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];let r={width:e,height:n,depth:i.depth},s=new En(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let n={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let r=Object.assign({},e.textures[n].image);this.textures[n].source=new Ea(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends Vu{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Ko=class extends En{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Gu=class extends En{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var It=class t{static{t.prototype.isMatrix4=!0}constructor(e,n,i,r,s,a,o,l,c,h,f,d,m,v,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,f,d,m,v,b,g)}set(e,n,i,r,s,a,o,l,c,h,f,d,m,v,b,g){let u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=v,u[11]=b,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let n=this.elements,i=e.elements,r=1/da.setFromMatrixColumn(e,0).length(),s=1/da.setFromMatrixColumn(e,1).length(),a=1/da.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=a*h,m=a*f,v=o*h,b=o*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=m+v*c,n[5]=d-b*c,n[9]=-o*l,n[2]=b-d*c,n[6]=v+m*c,n[10]=a*l}else if(e.order==="YXZ"){let d=l*h,m=l*f,v=c*h,b=c*f;n[0]=d+b*o,n[4]=v*o-m,n[8]=a*c,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=m*o-v,n[6]=b+d*o,n[10]=a*l}else if(e.order==="ZXY"){let d=l*h,m=l*f,v=c*h,b=c*f;n[0]=d-b*o,n[4]=-a*f,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*h,n[9]=b-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){let d=a*h,m=a*f,v=o*h,b=o*f;n[0]=l*h,n[4]=v*c-m,n[8]=d*c+b,n[1]=l*f,n[5]=b*c+d,n[9]=m*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){let d=a*l,m=a*c,v=o*l,b=o*c;n[0]=l*h,n[4]=b-d*f,n[8]=v*f+m,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*f+v,n[10]=d-b*f}else if(e.order==="XZY"){let d=a*l,m=a*c,v=o*l,b=o*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=d*f+b,n[5]=a*h,n[9]=m*f-v,n[2]=v*f-m,n[6]=o*h,n[10]=b*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rb,e,sb)}lookAt(e,n,i){let r=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Or.crossVectors(i,Fn),Or.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Or.crossVectors(i,Fn)),Or.normalize(),su.crossVectors(Fn,Or),r[0]=Or.x,r[4]=su.x,r[8]=Fn.x,r[1]=Or.y,r[5]=su.y,r[9]=Fn.y,r[2]=Or.z,r[6]=su.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],m=i[13],v=i[2],b=i[6],g=i[10],u=i[14],p=i[3],_=i[7],M=i[11],C=i[15],E=r[0],R=r[4],x=r[8],A=r[12],I=r[1],P=r[5],k=r[9],X=r[13],W=r[2],F=r[6],O=r[10],H=r[14],Z=r[3],ee=r[7],le=r[11],ye=r[15];return s[0]=a*E+o*I+l*W+c*Z,s[4]=a*R+o*P+l*F+c*ee,s[8]=a*x+o*k+l*O+c*le,s[12]=a*A+o*X+l*H+c*ye,s[1]=h*E+f*I+d*W+m*Z,s[5]=h*R+f*P+d*F+m*ee,s[9]=h*x+f*k+d*O+m*le,s[13]=h*A+f*X+d*H+m*ye,s[2]=v*E+b*I+g*W+u*Z,s[6]=v*R+b*P+g*F+u*ee,s[10]=v*x+b*k+g*O+u*le,s[14]=v*A+b*X+g*H+u*ye,s[3]=p*E+_*I+M*W+C*Z,s[7]=p*R+_*P+M*F+C*ee,s[11]=p*x+_*k+M*O+C*le,s[15]=p*A+_*X+M*H+C*ye,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],m=e[14],v=e[3],b=e[7],g=e[11],u=e[15],p=l*m-c*d,_=o*m-c*f,M=o*d-l*f,C=a*m-c*h,E=a*d-l*h,R=a*f-o*h;return n*(b*p-g*_+u*M)-i*(v*p-g*C+u*E)+r*(v*_-b*C+u*R)-s*(v*M-b*E+g*R)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],m=e[11],v=e[12],b=e[13],g=e[14],u=e[15],p=n*o-i*a,_=n*l-r*a,M=n*c-s*a,C=i*l-r*o,E=i*c-s*o,R=r*c-s*l,x=h*b-f*v,A=h*g-d*v,I=h*u-m*v,P=f*g-d*b,k=f*u-m*b,X=d*u-m*g,W=p*X-_*k+M*P+C*I-E*A+R*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/W;return e[0]=(o*X-l*k+c*P)*F,e[1]=(r*k-i*X-s*P)*F,e[2]=(b*R-g*E+u*C)*F,e[3]=(d*E-f*R-m*C)*F,e[4]=(l*I-a*X-c*A)*F,e[5]=(n*X-r*I+s*A)*F,e[6]=(g*M-v*R-u*_)*F,e[7]=(h*R-d*M+m*_)*F,e[8]=(a*k-o*I+c*x)*F,e[9]=(i*I-n*k-s*x)*F,e[10]=(v*E-b*M+u*p)*F,e[11]=(f*M-h*E-m*p)*F,e[12]=(o*A-a*P-l*x)*F,e[13]=(n*P-i*A+r*x)*F,e[14]=(b*_-v*C-g*p)*F,e[15]=(h*C-f*_+d*p)*F,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,f=o+o,d=s*c,m=s*h,v=s*f,b=a*h,g=a*f,u=o*f,p=l*c,_=l*h,M=l*f,C=i.x,E=i.y,R=i.z;return r[0]=(1-(b+u))*C,r[1]=(m+M)*C,r[2]=(v-_)*C,r[3]=0,r[4]=(m-M)*E,r[5]=(1-(d+u))*E,r[6]=(g+p)*E,r[7]=0,r[8]=(v+_)*R,r[9]=(g-p)*R,r[10]=(1-(d+b))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=da.set(r[0],r[1],r[2]).length(),o=da.set(r[4],r[5],r[6]).length(),l=da.set(r[8],r[9],r[10]).length();s<0&&(a=-a),fi.copy(this);let c=1/a,h=1/o,f=1/l;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=h,fi.elements[5]*=h,fi.elements[6]*=h,fi.elements[8]*=f,fi.elements[9]*=f,fi.elements[10]*=f,n.setFromRotationMatrix(fi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=gi,l=!1){let c=this.elements,h=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r),v,b;if(l)v=s/(a-s),b=a*s/(a-s);else if(o===gi)v=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===ba)v=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=gi,l=!1){let c=this.elements,h=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r),v,b;if(l)v=1/(a-s),b=a/(a-s);else if(o===gi)v=-2/(a-s),b=-(a+s)/(a-s);else if(o===ba)v=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},da=new V,fi=new It,rb=new V(0,0,0),sb=new V(1,1,1),Or=new V,su=new V,Fn=new V,g_=new It,x_=new Di,cr=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return g_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(g_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return x_.setFromEuler(this),this.setFromQuaternion(x_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cr.DEFAULT_ORDER="XYZ";var jo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ab=0,v_=new V,ha=new Di,tr=new It,au=new V,Vo=new V,ob=new V,lb=new Di,__=new V(1,0,0),y_=new V(0,1,0),S_=new V(0,0,1),M_={type:"added"},cb={type:"removed"},fa={type:"childadded",child:null},Yp={type:"childremoved",child:null},Vn=class t extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=yl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new V,n=new cr,i=new Di,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new Be}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ha.setFromAxisAngle(e,n),this.quaternion.multiply(ha),this}rotateOnWorldAxis(e,n){return ha.setFromAxisAngle(e,n),this.quaternion.premultiply(ha),this}rotateX(e){return this.rotateOnAxis(__,e)}rotateY(e){return this.rotateOnAxis(y_,e)}rotateZ(e){return this.rotateOnAxis(S_,e)}translateOnAxis(e,n){return v_.copy(e).applyQuaternion(this.quaternion),this.position.add(v_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(__,e)}translateY(e){return this.translateOnAxis(y_,e)}translateZ(e){return this.translateOnAxis(S_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?au.copy(e):au.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(Vo,au,this.up):tr.lookAt(au,Vo,this.up),this.quaternion.setFromRotationMatrix(tr),r&&(tr.extractRotation(r.matrixWorld),ha.setFromRotationMatrix(tr),this.quaternion.premultiply(ha.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(M_),fa.child=e,this.dispatchEvent(fa),fa.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cb),Yp.child=e,this.dispatchEvent(Yp),Yp.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(M_),fa.child=e,this.dispatchEvent(fa),fa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,ob),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,lb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Vn.DEFAULT_UP=new V(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ar=class extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ub={type:"move"},Ta=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let g=n.getJointPose(b,i),u=this._getHandJoint(c,b);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ub)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new ar;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},py={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},ou={h:0,s:0,l:0};function Kp(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Je=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=eb(e,1),n=je(n,0,1),i=je(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Kp(a,s,e+1/3),this.g=Kp(a,s,e),this.b=Kp(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,n=On){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){let i=py[e.toLowerCase()];return i!==void 0?this.setHex(i,n):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return Ke.workingToColorSpace(on.copy(this),e),Math.round(je(on.r*255,0,255))*65536+Math.round(je(on.g*255,0,255))*256+Math.round(je(on.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.workingToColorSpace(on.copy(this),n);let i=on.r,r=on.g,s=on.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Ke.workingColorSpace){return Ke.workingToColorSpace(on.copy(this),n),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=On){Ke.workingToColorSpace(on.copy(this),e);let n=on.r,i=on.g,r=on.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+n,Br.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Br),e.getHSL(ou);let i=Hp(Br.h,ou.h,n),r=Hp(Br.s,ou.s,n),s=Hp(Br.l,ou.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Je;Je.NAMES=py;var Zo=class extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cr,this.environmentIntensity=1,this.environmentRotation=new cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},pi=new V,nr=new V,jp=new V,ir=new V,pa=new V,ma=new V,b_=new V,Zp=new V,Jp=new V,Qp=new V,em=new Ct,tm=new Ct,nm=new Ct,Wr=class t{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),pi.subVectors(e,n),r.cross(pi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){pi.subVectors(r,n),nr.subVectors(i,n),jp.subVectors(e,n);let a=pi.dot(pi),o=pi.dot(nr),l=pi.dot(jp),c=nr.dot(nr),h=nr.dot(jp),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;let d=1/f,m=(c*l-o*h)*d,v=(a*h-o*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ir.x),l.addScaledVector(a,ir.y),l.addScaledVector(o,ir.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return em.setScalar(0),tm.setScalar(0),nm.setScalar(0),em.fromBufferAttribute(e,n),tm.fromBufferAttribute(e,i),nm.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(em,s.x),a.addScaledVector(tm,s.y),a.addScaledVector(nm,s.z),a}static isFrontFacing(e,n,i,r){return pi.subVectors(i,n),nr.subVectors(e,n),pi.cross(nr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),pi.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,a,o;pa.subVectors(r,i),ma.subVectors(s,i),Zp.subVectors(e,i);let l=pa.dot(Zp),c=ma.dot(Zp);if(l<=0&&c<=0)return n.copy(i);Jp.subVectors(e,r);let h=pa.dot(Jp),f=ma.dot(Jp);if(h>=0&&f<=h)return n.copy(r);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(pa,a);Qp.subVectors(e,s);let m=pa.dot(Qp),v=ma.dot(Qp);if(v>=0&&m<=v)return n.copy(s);let b=m*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(ma,o);let g=h*v-m*f;if(g<=0&&f-h>=0&&m-v>=0)return b_.subVectors(s,r),o=(f-h)/(f-h+(m-v)),n.copy(r).addScaledVector(b_,o);let u=1/(g+b+d);return a=b*u,o=d*u,n.copy(i).addScaledVector(pa,a).addScaledVector(ma,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qr=class{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(mi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(mi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=mi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mi):mi.fromBufferAttribute(s,a),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lu.copy(i.boundingBox)),lu.applyMatrix4(e.matrixWorld),this.union(lu)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),cu.subVectors(this.max,Go),ga.subVectors(e.a,Go),xa.subVectors(e.b,Go),va.subVectors(e.c,Go),zr.subVectors(xa,ga),Vr.subVectors(va,xa),_s.subVectors(ga,va);let n=[0,-zr.z,zr.y,0,-Vr.z,Vr.y,0,-_s.z,_s.y,zr.z,0,-zr.x,Vr.z,0,-Vr.x,_s.z,0,-_s.x,-zr.y,zr.x,0,-Vr.y,Vr.x,0,-_s.y,_s.x,0];return!im(n,ga,xa,va,cu)||(n=[1,0,0,0,1,0,0,0,1],!im(n,ga,xa,va,cu))?!1:(uu.crossVectors(zr,Vr),n=[uu.x,uu.y,uu.z],im(n,ga,xa,va,cu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},rr=[new V,new V,new V,new V,new V,new V,new V,new V],mi=new V,lu=new qr,ga=new V,xa=new V,va=new V,zr=new V,Vr=new V,_s=new V,Go=new V,cu=new V,uu=new V,ys=new V;function im(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ys.fromArray(t,s);let o=r.x*Math.abs(ys.x)+r.y*Math.abs(ys.y)+r.z*Math.abs(ys.z),l=e.dot(ys),c=n.dot(ys),h=i.dot(ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ft=new V,du=new it,db=0,Bn=class extends Li{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:db++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xm,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)du.fromBufferAttribute(this,n),du.applyMatrix3(e),this.setXY(n,du.x,du.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=zo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=wn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zo(n,this.array)),n}setX(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zo(n,this.array)),n}setY(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zo(n,this.array)),n}setW(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),r=wn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),r=wn(r,this.array),s=wn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Jo=class extends Bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var Qo=class extends Bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var Xt=class extends Bn{constructor(e,n,i){super(new Float32Array(e),n,i)}},hb=new qr,Ho=new V,rm=new V,Aa=class{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):hb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);let n=Ho.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ho,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(rm)),this.expandByPoint(Ho.copy(e.center).sub(rm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fb=0,ei=new It,sm=new Vn,_a=new V,kn=new qr,Wo=new qr,Wt=new V,ti=class t extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=yl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(JM(e)?Qo:Jo)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,n,i){return ei.makeTranslation(e,n,i),this.applyMatrix4(ei),this}scale(e,n,i){return ei.makeScale(e,n,i),this.applyMatrix4(ei),this}lookAt(e){return sm.lookAt(e),sm.updateMatrix(),this.applyMatrix4(sm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_a).negate(),this.translate(_a.x,_a.y,_a.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(i,3))}else{let i=Math.min(e.length,n.count);for(let r=0;r<i;r++){let s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Aa);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){let o=n[s];Wo.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(kn.min,Wo.min),kn.expandByPoint(Wt),Wt.addVectors(kn.max,Wo.max),kn.expandByPoint(Wt)):(kn.expandByPoint(Wo.min),kn.expandByPoint(Wo.max))}kn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,a=n.length;s<a;s++){let o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Wt.fromBufferAttribute(o,c),l&&(_a.fromBufferAttribute(e,c),Wt.add(_a)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new V,l[x]=new V;let c=new V,h=new V,f=new V,d=new it,m=new it,v=new it,b=new V,g=new V;function u(x,A,I){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,A),f.fromBufferAttribute(i,I),d.fromBufferAttribute(s,x),m.fromBufferAttribute(s,A),v.fromBufferAttribute(s,I),h.sub(c),f.sub(c),m.sub(d),v.sub(d);let P=1/(m.x*v.y-v.x*m.y);isFinite(P)&&(b.copy(h).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(P),g.copy(f).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(P),o[x].add(b),o[A].add(b),o[I].add(b),l[x].add(g),l[A].add(g),l[I].add(g))}let p=this.groups;p.length===0&&(p=[{start:0,count:e.count}]);for(let x=0,A=p.length;x<A;++x){let I=p[x],P=I.start,k=I.count;for(let X=P,W=P+k;X<W;X+=3)u(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let _=new V,M=new V,C=new V,E=new V;function R(x){C.fromBufferAttribute(r,x),E.copy(C);let A=o[x];_.copy(A),_.sub(C.multiplyScalar(C.dot(A))).normalize(),M.crossVectors(E,A);let P=M.dot(l[x])<0?-1:1;a.setXYZW(x,_.x,_.y,_.z,P)}for(let x=0,A=p.length;x<A;++x){let I=p[x],P=I.start,k=I.count;for(let X=P,W=P+k;X<W;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let r=new V,s=new V,a=new V,o=new V,l=new V,c=new V,h=new V,f=new V;if(e)for(let d=0,m=e.count;d<m;d+=3){let v=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,b),a.fromBufferAttribute(n,g),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),m=0,v=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?m=l[b]*o.data.stride+o.offset:m=l[b]*h;for(let u=0;u<h;u++)d[v++]=c[m++]}return new Bn(d,h,f)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,i);n.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(n))}let s=e.morphAttributes;for(let c in s){let h=[],f=s[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var pb=0,$r=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=yl(),this.name="",this.type="Material",this.blending=ws,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tu,this.blendDst=Au,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){De(`Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){De(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Tu&&(i.blendSrc=this.blendSrc),this.blendDst!==Au&&(i.blendDst=this.blendDst),this.blendEquation!==Xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var sr=new V,am=new V,hu=new V,Gr=new V,om=new V,fu=new V,lm=new V,Hu=class{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=sr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,n),sr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){am.copy(e).add(n).multiplyScalar(.5),hu.copy(n).sub(e).normalize(),Gr.copy(this.origin).sub(am);let s=e.distanceTo(n)*.5,a=-this.direction.dot(hu),o=Gr.dot(this.direction),l=-Gr.dot(hu),c=Gr.lengthSq(),h=Math.abs(1-a*a),f,d,m,v;if(h>0)if(f=a*l-o,d=a*o-l,v=s*h,f>=0)if(d>=-v)if(d<=v){let b=1/h;f*=b,d*=b,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(am).addScaledVector(hu,d),m}intersectSphere(e,n){sr.subVectors(e.center,this.origin);let i=sr.dot(this.direction),r=sr.dot(sr)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,n,i,r,s){om.subVectors(n,e),fu.subVectors(i,e),lm.crossVectors(om,fu);let a=this.direction.dot(lm),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gr.subVectors(this.origin,e);let l=o*this.direction.dot(fu.crossVectors(Gr,fu));if(l<0)return null;let c=o*this.direction.dot(om.cross(Gr));if(c<0||l+c>a)return null;let h=-o*Gr.dot(lm);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},el=class extends $r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=Tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},w_=new It,Ss=new Hu,pu=new Aa,E_=new V,mu=new V,gu=new V,xu=new V,cm=new V,vu=new V,T_=new V,_u=new V,mn=class extends Vn{constructor(e=new ti,n=new el){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){vu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],f=s[l];h!==0&&(cm.fromBufferAttribute(f,e),a?vu.addScaledVector(cm,h):vu.addScaledVector(cm.sub(n),h))}n.add(vu)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pu.copy(i.boundingSphere),pu.applyMatrix4(s),Ss.copy(e.ray).recast(e.near),!(pu.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(pu,E_)===null||Ss.origin.distanceToSquared(E_)>(e.far-e.near)**2))&&(w_.copy(s).invert(),Ss.copy(e.ray).applyMatrix4(w_),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ss)))}_computeIntersections(e,n,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,b=d.length;v<b;v++){let g=d[v],u=a[g.materialIndex],p=Math.max(g.start,m.start),_=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let M=p,C=_;M<C;M+=3){let E=o.getX(M),R=o.getX(M+1),x=o.getX(M+2);r=yu(this,u,e,i,c,h,f,E,R,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{let v=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let g=v,u=b;g<u;g+=3){let p=o.getX(g),_=o.getX(g+1),M=o.getX(g+2);r=yu(this,a,e,i,c,h,f,p,_,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,b=d.length;v<b;v++){let g=d[v],u=a[g.materialIndex],p=Math.max(g.start,m.start),_=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=p,C=_;M<C;M+=3){let E=M,R=M+1,x=M+2;r=yu(this,u,e,i,c,h,f,E,R,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{let v=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let g=v,u=b;g<u;g+=3){let p=g,_=g+1,M=g+2;r=yu(this,a,e,i,c,h,f,p,_,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}};function mb(t,e,n,i,r,s,a,o){let l;if(e.side===gn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===lr,o),l===null)return null;_u.copy(o),_u.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(_u);return c<n.near||c>n.far?null:{distance:c,point:_u.clone(),object:t}}function yu(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,mu),t.getVertexPosition(l,gu),t.getVertexPosition(c,xu);let h=mb(t,e,n,i,mu,gu,xu,T_);if(h){let f=new V;Wr.getBarycoord(T_,mu,gu,xu,f),r&&(h.uv=Wr.getInterpolatedAttribute(r,o,l,c,f,new it)),s&&(h.uv1=Wr.getInterpolatedAttribute(s,o,l,c,f,new it)),a&&(h.normal=Wr.getInterpolatedAttribute(a,o,l,c,f,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new V,materialIndex:0};Wr.getNormal(mu,gu,xu,d.normal),h.face=d,h.barycoord=f}return h}var Wu=class extends En{constructor(e=null,n=1,i=1,r,s,a,o,l,c=qt,h=qt,f,d){super(null,a,o,l,c,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var um=new V,gb=new V,xb=new Be,Pi=class{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=um.subVectors(i,n).cross(gb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let r=e.delta(um),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||xb.getNormalMatrix(e),r=this.coplanarPoint(um).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ms=new Aa,vb=new it(.5,.5),Su=new V,Ca=class{constructor(e=new Pi,n=new Pi,i=new Pi,r=new Pi,s=new Pi,a=new Pi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],d=s[6],m=s[7],v=s[8],b=s[9],g=s[10],u=s[11],p=s[12],_=s[13],M=s[14],C=s[15];if(r[0].setComponents(c-a,m-h,u-v,C-p).normalize(),r[1].setComponents(c+a,m+h,u+v,C+p).normalize(),r[2].setComponents(c+o,m+f,u+b,C+_).normalize(),r[3].setComponents(c-o,m-f,u-b,C-_).normalize(),i)r[4].setComponents(l,d,g,M).normalize(),r[5].setComponents(c-l,m-d,u-g,C-M).normalize();else if(r[4].setComponents(c-l,m-d,u-g,C-M).normalize(),n===gi)r[5].setComponents(c+l,m+d,u+g,C+M).normalize();else if(n===ba)r[5].setComponents(l,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);let n=vb.distanceTo(e.center);return Ms.radius=.7071067811865476+n,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(Su.x=r.normal.x>0?e.max.x:e.min.x,Su.y=r.normal.y>0?e.max.y:e.min.y,Su.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Su)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var tl=class extends En{constructor(e=[],n=Zr,i,r,s,a,o,l,c,h){super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var ur=class extends En{constructor(e,n,i=vi,r,s,a,o=qt,l=qt,c,h=Ni,f=1){if(h!==Ni&&h!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:n,depth:f};super(d,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ea(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Xu=class extends ur{constructor(e,n=vi,i=Zr,r,s,a=qt,o=qt,l,c=Ni){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},nl=class extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ra=class t extends ti{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(f,2));function v(b,g,u,p,_,M,C,E,R,x,A){let I=M/R,P=C/x,k=M/2,X=C/2,W=E/2,F=R+1,O=x+1,H=0,Z=0,ee=new V;for(let le=0;le<O;le++){let ye=le*P-X;for(let we=0;we<F;we++){let $e=we*I-k;ee[b]=$e*p,ee[g]=ye*_,ee[u]=W,c.push(ee.x,ee.y,ee.z),ee[b]=0,ee[g]=0,ee[u]=E>0?1:-1,h.push(ee.x,ee.y,ee.z),f.push(we/R),f.push(1-le/x),H+=1}}for(let le=0;le<x;le++)for(let ye=0;ye<R;ye++){let we=d+ye+F*le,$e=d+ye+F*(le+1),Qe=d+(ye+1)+F*(le+1),de=d+(ye+1)+F*le;l.push(we,$e,de),l.push($e,Qe,de),Z+=6}o.addGroup(m,Z,A),m+=Z,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},il=class t extends ti{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=n/2,f=Math.PI/2*e,d=n,m=2*f+d,v=i*2+s,b=r+1,g=new V,u=new V;for(let p=0;p<=v;p++){let _=0,M=0,C=0,E=0;if(p<=i){let A=p/i,I=A*Math.PI/2;M=-h-e*Math.cos(I),C=e*Math.sin(I),E=-e*Math.cos(I),_=A*f}else if(p<=i+s){let A=(p-i)/s;M=-h+A*n,C=e,E=0,_=f+A*d}else{let A=(p-i-s)/i,I=A*Math.PI/2;M=h+e*Math.sin(I),C=e*Math.cos(I),E=e*Math.sin(I),_=f+d+A*f}let R=Math.max(0,Math.min(1,_/m)),x=0;p===0?x=.5/r:p===v&&(x=-.5/r);for(let A=0;A<=r;A++){let I=A/r,P=I*Math.PI*2,k=Math.sin(P),X=Math.cos(P);u.x=-C*X,u.y=M,u.z=C*k,o.push(u.x,u.y,u.z),g.set(-C*X,E,C*k),g.normalize(),l.push(g.x,g.y,g.z),c.push(I+x,R)}if(p>0){let A=(p-1)*b;for(let I=0;I<r;I++){let P=A+I,k=A+I+1,X=p*b+I,W=p*b+I+1;a.push(P,k,X),a.push(k,W,X)}}}this.setIndex(a),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var rl=class t extends ti{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,d=n/l,m=[],v=[],b=[],g=[];for(let u=0;u<h;u++){let p=u*d-a;for(let _=0;_<c;_++){let M=_*f-s;v.push(M,-p,0),b.push(0,0,1),g.push(_/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let p=0;p<o;p++){let _=p+c*u,M=p+c*(u+1),C=p+1+c*(u+1),E=p+1+c*u;m.push(_,M,E),m.push(M,C,E)}this.setIndex(m),this.setAttribute("position",new Xt(v,3)),this.setAttribute("normal",new Xt(b,3)),this.setAttribute("uv",new Xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var sl=class t extends ti{constructor(e=1,n=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],f=new V,d=new V,m=new V,v=new V,b=new V,g=new V,u=new V;for(let _=0;_<=i;++_){let M=_/i*s*Math.PI*2;p(M,s,a,e,m),p(M+.01,s,a,e,v),g.subVectors(v,m),u.addVectors(v,m),b.crossVectors(g,u),u.crossVectors(b,g),b.normalize(),u.normalize();for(let C=0;C<=r;++C){let E=C/r*Math.PI*2,R=-n*Math.cos(E),x=n*Math.sin(E);f.x=m.x+(R*u.x+x*b.x),f.y=m.y+(R*u.y+x*b.y),f.z=m.z+(R*u.z+x*b.z),l.push(f.x,f.y,f.z),d.subVectors(f,m).normalize(),c.push(d.x,d.y,d.z),h.push(_/i),h.push(C/r)}}for(let _=1;_<=i;_++)for(let M=1;M<=r;M++){let C=(r+1)*(_-1)+(M-1),E=(r+1)*_+(M-1),R=(r+1)*_+M,x=(r+1)*(_-1)+M;o.push(C,E,x),o.push(E,R,x)}this.setIndex(o),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2));function p(_,M,C,E,R){let x=Math.cos(_),A=Math.sin(_),I=C/M*_,P=Math.cos(I);R.x=E*(2+P)*.5*x,R.y=E*(2+P)*A*.5,R.z=E*Math.sin(I)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}};function As(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];if(A_(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(A_(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function ln(t){let e={};for(let n=0;n<t.length;n++){let i=As(t[n]);for(let r in i)e[r]=i[r]}return e}function A_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function _b(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Wm(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var my={clone:As,merge:ln},yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gn=class extends $r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yb,this.fragmentShader=Sb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=_b(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},qu=class extends Gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pa=class extends $r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qd,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var $u=class extends $r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ny,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yu=class extends $r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Mu(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}var Yr=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=n[++i],e<r)break t}a=n.length;break n}if(!(e>=s)){let o=n[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<n[o]?a=o:i=o+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)n[a]=i[s+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ku=class extends Yr{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fm,endingEnd:fm}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case pm:s=e,o=2*n-i;break;case mm:s=r.length-2,o=n+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case pm:a=e,l=2*i-n;break;case mm:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,v=(i-n)/(r-n),b=v*v,g=b*v,u=-d*g+2*d*b-d*v,p=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*v+1,_=(-1-m)*g+(1.5+m)*b+.5*v,M=m*g-m*b;for(let C=0;C!==o;++C)s[C]=u*a[h+C]+p*a[c+C]+_*a[l+C]+M*a[f+C];return s}},ju=class extends Yr{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-n)/(r-n),f=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*f+a[l+d]*h;return s}},Zu=class extends Yr{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ju=class extends Yr{interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,f=h.inTangents,d=h.outTangents;if(!f||!d){let b=(i-n)/(r-n),g=1-b;for(let u=0;u!==o;++u)s[u]=a[c+u]*g+a[l+u]*b;return s}let m=o*2,v=e-1;for(let b=0;b!==o;++b){let g=a[c+b],u=a[l+b],p=v*m+b*2,_=d[p],M=d[p+1],C=e*m+b*2,E=f[C],R=f[C+1],x=(i-n)/(r-n),A,I,P,k,X;for(let W=0;W<8;W++){A=x*x,I=A*x,P=1-x,k=P*P,X=k*P;let O=X*n+3*k*x*_+3*P*A*E+I*r-i;if(Math.abs(O)<1e-10)break;let H=3*k*(_-n)+6*P*x*(E-_)+3*A*(r-E);if(Math.abs(H)<1e-10)break;x=x-O/H,x=Math.max(0,Math.min(1,x))}s[b]=X*g+3*k*x*M+3*P*A*R+I*u}return s}},Hn=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mu(n,this.TimeBufferType),this.values=Mu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Mu(e.times,Array),values:Mu(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Zu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ju(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ku(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new Ju(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.settings=this.settings),n}setInterpolation(e){let n;switch(e){case Xo:n=this.InterpolantFactoryMethodDiscrete;break;case ku:n=this.InterpolantFactoryMethodLinear;break;case Eu:n=this.InterpolantFactoryMethodSmooth;break;case hm:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return De("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xo;case this.InterpolantFactoryMethodLinear:return ku;case this.InterpolantFactoryMethodSmooth:return Eu;case this.InterpolantFactoryMethodBezier:return hm}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>n;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Fe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Fe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&QM(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){Fe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Eu,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{let f=o*i,d=f-i,m=f+i;for(let v=0;v!==i;++v){let b=n[f+v];if(b!==n[d+v]||b!==n[m+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,d=a*i;for(let m=0;m!==i;++m)n[d+m]=n[f+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)n[l+c]=n[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=ku;var Kr=class extends Hn{constructor(e,n,i){super(e,n,i)}};Kr.prototype.ValueTypeName="bool";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=Xo;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Qu=class extends Hn{constructor(e,n,i,r){super(e,n,i,r)}};Qu.prototype.ValueTypeName="color";var ed=class extends Hn{constructor(e,n,i,r){super(e,n,i,r)}};ed.prototype.ValueTypeName="number";var td=class extends Yr{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-n)/(r-n),c=e*o;for(let h=c+o;c!==h;c+=4)Di.slerpFlat(s,0,a,c-o,a,c,l);return s}},al=class extends Hn{constructor(e,n,i,r){super(e,n,i,r)}InterpolantFactoryMethodLinear(e){return new td(this.times,this.values,this.getValueSize(),e)}};al.prototype.ValueTypeName="quaternion";al.prototype.InterpolantFactoryMethodSmooth=void 0;var jr=class extends Hn{constructor(e,n,i){super(e,n,i)}};jr.prototype.ValueTypeName="string";jr.prototype.ValueBufferType=Array;jr.prototype.DefaultInterpolation=Xo;jr.prototype.InterpolantFactoryMethodLinear=void 0;jr.prototype.InterpolantFactoryMethodSmooth=void 0;var nd=class extends Hn{constructor(e,n,i,r){super(e,n,i,r)}};nd.prototype.ValueTypeName="vector";var id=class{constructor(e,n,i){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let m=c[f],v=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gy=new id,rd=class{constructor(e){this.manager=e!==void 0?e:gy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};rd.DEFAULT_MATERIAL_NAME="__DEFAULT";var ol=class extends Vn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}};var dm=new It,C_=new V,R_=new V,vm=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;C_.setFromMatrixPosition(e.matrixWorld),n.position.copy(C_),R_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(R_),n.updateMatrixWorld(),dm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dm,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ba||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bu=new V,wu=new Di,Ri=new V,ll=class extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bu,wu,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bu,wu,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(bu,wu,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bu,wu,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hr=new V,P_=new it,I_=new it,Zt=class extends ll{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Bu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bu*2*Math.atan(Math.tan(Gp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,n){return this.getViewBounds(e,P_,I_),n.subVectors(I_,P_)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Gp*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var _m=class extends vm{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}},Ia=class extends ol{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new _m}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},cl=class extends ll{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var ul=class extends ol{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var ya=-90,Sa=1,sd=class extends Vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zt(ya,Sa,e,n);r.layers=this.layers,this.add(r);let s=new Zt(ya,Sa,e,n);s.layers=this.layers,this.add(s);let a=new Zt(ya,Sa,e,n);a.layers=this.layers,this.add(a);let o=new Zt(ya,Sa,e,n);o.layers=this.layers,this.add(o);let l=new Zt(ya,Sa,e,n);l.layers=this.layers,this.add(l);let c=new Zt(ya,Sa,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(let c of n)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(f,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},ad=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Xm="\\[\\]\\.:\\/",Mb=new RegExp("["+Xm+"]","g"),qm="[^"+Xm+"]",bb="[^"+Xm.replace("\\.","")+"]",wb=/((?:WC+[\/:])*)/.source.replace("WC",qm),Eb=/(WCOD+)?/.source.replace("WCOD",bb),Tb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qm),Ab=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qm),Cb=new RegExp("^"+wb+Eb+Tb+Ab+"$"),Rb=["material","materials","bones","map"],ym=class{constructor(e,n,i){let r=i||St.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},St=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mb,"")}static parseTrackName(e){let n=Cb.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Rb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=n.nodeName;Fe("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=ym;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var H2=new Float32Array(1);var Sm=class t{static{t.prototype.isMatrix2=!0}constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){let s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};function $m(t,e,n,i){let r=Pb(i);switch(n){case Bm:return t*e;case Vm:return t*e/r.components*r.byteLength;case fd:return t*e/r.components*r.byteLength;case es:return t*e*2/r.components*r.byteLength;case pd:return t*e*2/r.components*r.byteLength;case zm:return t*e*3/r.components*r.byteLength;case ni:return t*e*4/r.components*r.byteLength;case md:return t*e*4/r.components*r.byteLength;case pl:case ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gl:case xl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xd:case _d:return Math.max(t,16)*Math.max(e,8)/4;case gd:case vd:return Math.max(t,8)*Math.max(e,8)/2;case yd:case Sd:case bd:case wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Md:case vl:case Ed:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Id:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case zd:case Vd:case Gd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Hd:case Wd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case _l:case Xd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Pb(t){switch(t){case Tn:case Um:return{byteLength:1,components:1};case La:case Fm:case ki:return{byteLength:2,components:1};case dd:case hd:return{byteLength:2,components:4};case vi:case ud:case _i:return{byteLength:4,components:1};case km:case Om:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function By(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Nb(t){let e=new WeakMap;function n(o,l){let c=o.array,h=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,h);else{f.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<f.length;m++){let v=f[d],b=f[m];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++d,f[d]=b)}f.length=d+1;for(let m=0,v=f.length;m<v;m++){let b=f[m];t.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Lb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Db=`#ifdef USE_ALPHAHASH
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
#endif`,Ub=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ob=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bb=`#ifdef USE_AOMAP
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
#endif`,zb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vb=`#ifdef USE_BATCHING
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
#endif`,Gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qb=`#ifdef USE_IRIDESCENCE
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
#endif`,$b=`#ifdef USE_BUMPMAP
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
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ew=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,nw=`#define PI 3.141592653589793
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
} // validated`,iw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rw=`vec3 transformedNormal = objectNormal;
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
#endif`,sw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ow=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cw="gl_FragColor = linearToOutputTexel( gl_FragColor );",uw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dw=`#ifdef USE_ENVMAP
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
#endif`,hw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fw=`#ifdef USE_ENVMAP
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
#endif`,pw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mw=`#ifdef USE_ENVMAP
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
#endif`,gw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_w=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yw=`#ifdef USE_GRADIENTMAP
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
}`,Sw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ww=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ew=`#ifdef USE_ENVMAP
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
#endif`,Tw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Aw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pw=`PhysicalMaterial material;
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
#endif`,Iw=`uniform sampler2D dfgLUT;
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
}`,Nw=`
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
#endif`,Lw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Fw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ow=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hw=`#if defined( USE_POINTS_UV )
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
#endif`,Ww=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$w=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kw=`#ifdef USE_MORPHTARGETS
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
#endif`,jw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nE=`#ifdef USE_NORMALMAP
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
#endif`,iE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vE=`float getShadowMask() {
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
}`,_E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yE=`#ifdef USE_SKINNING
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
#endif`,SE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ME=`#ifdef USE_SKINNING
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
#endif`,bE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,AE=`#ifdef USE_TRANSMISSION
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
#endif`,CE=`#ifdef USE_TRANSMISSION
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
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,LE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DE=`uniform sampler2D t2D;
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
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`#include <common>
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
}`,zE=`#if DEPTH_PACKING == 3200
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
}`,VE=`#define DISTANCE
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
}`,GE=`#define DISTANCE
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
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`uniform float scale;
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
}`,qE=`uniform vec3 diffuse;
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
}`,$E=`#include <common>
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
}`,YE=`uniform vec3 diffuse;
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
}`,KE=`#define LAMBERT
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
}`,jE=`#define LAMBERT
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
}`,ZE=`#define MATCAP
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
}`,JE=`#define MATCAP
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
}`,QE=`#define NORMAL
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
}`,eT=`#define NORMAL
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
}`,tT=`#define PHONG
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
}`,nT=`#define PHONG
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
}`,iT=`#define STANDARD
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
}`,rT=`#define STANDARD
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
}`,sT=`#define TOON
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
}`,aT=`#define TOON
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
}`,oT=`uniform float size;
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
}`,lT=`uniform vec3 diffuse;
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
}`,cT=`#include <common>
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
}`,uT=`uniform vec3 color;
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
}`,dT=`uniform float rotation;
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
}`,hT=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Lb,alphahash_pars_fragment:Db,alphamap_fragment:Ub,alphamap_pars_fragment:Fb,alphatest_fragment:kb,alphatest_pars_fragment:Ob,aomap_fragment:Bb,aomap_pars_fragment:zb,batching_pars_vertex:Vb,batching_vertex:Gb,begin_vertex:Hb,beginnormal_vertex:Wb,bsdfs:Xb,iridescence_fragment:qb,bumpmap_pars_fragment:$b,clipping_planes_fragment:Yb,clipping_planes_pars_fragment:Kb,clipping_planes_pars_vertex:jb,clipping_planes_vertex:Zb,color_fragment:Jb,color_pars_fragment:Qb,color_pars_vertex:ew,color_vertex:tw,common:nw,cube_uv_reflection_fragment:iw,defaultnormal_vertex:rw,displacementmap_pars_vertex:sw,displacementmap_vertex:aw,emissivemap_fragment:ow,emissivemap_pars_fragment:lw,colorspace_fragment:cw,colorspace_pars_fragment:uw,envmap_fragment:dw,envmap_common_pars_fragment:hw,envmap_pars_fragment:fw,envmap_pars_vertex:pw,envmap_physical_pars_fragment:Ew,envmap_vertex:mw,fog_vertex:gw,fog_pars_vertex:xw,fog_fragment:vw,fog_pars_fragment:_w,gradientmap_pars_fragment:yw,lightmap_pars_fragment:Sw,lights_lambert_fragment:Mw,lights_lambert_pars_fragment:bw,lights_pars_begin:ww,lights_toon_fragment:Tw,lights_toon_pars_fragment:Aw,lights_phong_fragment:Cw,lights_phong_pars_fragment:Rw,lights_physical_fragment:Pw,lights_physical_pars_fragment:Iw,lights_fragment_begin:Nw,lights_fragment_maps:Lw,lights_fragment_end:Dw,lightprobes_pars_fragment:Uw,logdepthbuf_fragment:Fw,logdepthbuf_pars_fragment:kw,logdepthbuf_pars_vertex:Ow,logdepthbuf_vertex:Bw,map_fragment:zw,map_pars_fragment:Vw,map_particle_fragment:Gw,map_particle_pars_fragment:Hw,metalnessmap_fragment:Ww,metalnessmap_pars_fragment:Xw,morphinstance_vertex:qw,morphcolor_vertex:$w,morphnormal_vertex:Yw,morphtarget_pars_vertex:Kw,morphtarget_vertex:jw,normal_fragment_begin:Zw,normal_fragment_maps:Jw,normal_pars_fragment:Qw,normal_pars_vertex:eE,normal_vertex:tE,normalmap_pars_fragment:nE,clearcoat_normal_fragment_begin:iE,clearcoat_normal_fragment_maps:rE,clearcoat_pars_fragment:sE,iridescence_pars_fragment:aE,opaque_fragment:oE,packing:lE,premultiplied_alpha_fragment:cE,project_vertex:uE,dithering_fragment:dE,dithering_pars_fragment:hE,roughnessmap_fragment:fE,roughnessmap_pars_fragment:pE,shadowmap_pars_fragment:mE,shadowmap_pars_vertex:gE,shadowmap_vertex:xE,shadowmask_pars_fragment:vE,skinbase_vertex:_E,skinning_pars_vertex:yE,skinning_vertex:SE,skinnormal_vertex:ME,specularmap_fragment:bE,specularmap_pars_fragment:wE,tonemapping_fragment:EE,tonemapping_pars_fragment:TE,transmission_fragment:AE,transmission_pars_fragment:CE,uv_pars_fragment:RE,uv_pars_vertex:PE,uv_vertex:IE,worldpos_vertex:NE,background_vert:LE,background_frag:DE,backgroundCube_vert:UE,backgroundCube_frag:FE,cube_vert:kE,cube_frag:OE,depth_vert:BE,depth_frag:zE,distance_vert:VE,distance_frag:GE,equirect_vert:HE,equirect_frag:WE,linedashed_vert:XE,linedashed_frag:qE,meshbasic_vert:$E,meshbasic_frag:YE,meshlambert_vert:KE,meshlambert_frag:jE,meshmatcap_vert:ZE,meshmatcap_frag:JE,meshnormal_vert:QE,meshnormal_frag:eT,meshphong_vert:tT,meshphong_frag:nT,meshphysical_vert:iT,meshphysical_frag:rT,meshtoon_vert:sT,meshtoon_frag:aT,points_vert:oT,points_frag:lT,shadow_vert:cT,shadow_frag:uT,sprite_vert:dT,sprite_frag:hT},pe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Bi={basic:{uniforms:ln([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:ln([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:ln([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:ln([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:ln([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:ln([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:ln([pe.points,pe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:ln([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:ln([pe.common,pe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:ln([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:ln([pe.sprite,pe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:ln([pe.common,pe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:ln([pe.lights,pe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Bi.physical={uniforms:ln([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Kd={r:0,b:0,g:0},fT=new It,zy=new Be;zy.set(-1,0,0,0,1,0,0,0,1);function pT(t,e,n,i,r,s){let a=new Je(0),o=r===!0?0:1,l,c,h=null,f=0,d=null;function m(p){let _=p.isScene===!0?p.background:null;if(_&&_.isTexture){let M=p.backgroundBlurriness>0;_=e.get(_,M)}return _}function v(p){let _=!1,M=m(p);M===null?g(a,o):M&&M.isColor&&(g(M,1),_=!0);let C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(p,_){let M=m(_);M&&(M.isCubeTexture||M.mapping===hl)?(c===void 0&&(c=new mn(new Ra(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:As(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fT.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zy),c.material.toneMapped=Ke.getTransfer(M.colorSpace)!==ot,(h!==M||f!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new mn(new rl(2,2),new Gn({name:"BackgroundMaterial",uniforms:As(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(M.colorSpace)!==ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,_){p.getRGB(Kd,Wm(t)),n.buffers.color.setClear(Kd.r,Kd.g,Kd.b,_,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),o=_,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:v,addToRenderList:b,dispose:u}}function mT(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,a=!1;function o(P,k,X,W,F){let O=!1,H=f(P,W,X,k);s!==H&&(s=H,c(s.object)),O=m(P,W,X,F),O&&v(P,W,X,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,M(P,k,X,W),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function h(P){return t.deleteVertexArray(P)}function f(P,k,X,W){let F=W.wireframe===!0,O=i[k.id];O===void 0&&(O={},i[k.id]=O);let H=P.isInstancedMesh===!0?P.id:0,Z=O[H];Z===void 0&&(Z={},O[H]=Z);let ee=Z[X.id];ee===void 0&&(ee={},Z[X.id]=ee);let le=ee[F];return le===void 0&&(le=d(l()),ee[F]=le),le}function d(P){let k=[],X=[],W=[];for(let F=0;F<n;F++)k[F]=0,X[F]=0,W[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:W,object:P,attributes:{},index:null}}function m(P,k,X,W){let F=s.attributes,O=k.attributes,H=0,Z=X.getAttributes();for(let ee in Z)if(Z[ee].location>=0){let ye=F[ee],we=O[ee];if(we===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(we=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(we=P.instanceColor)),ye===void 0||ye.attribute!==we||we&&ye.data!==we.data)return!0;H++}return s.attributesNum!==H||s.index!==W}function v(P,k,X,W){let F={},O=k.attributes,H=0,Z=X.getAttributes();for(let ee in Z)if(Z[ee].location>=0){let ye=O[ee];ye===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(ye=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(ye=P.instanceColor));let we={};we.attribute=ye,ye&&ye.data&&(we.data=ye.data),F[ee]=we,H++}s.attributes=F,s.attributesNum=H,s.index=W}function b(){let P=s.newAttributes;for(let k=0,X=P.length;k<X;k++)P[k]=0}function g(P){u(P,0)}function u(P,k){let X=s.newAttributes,W=s.enabledAttributes,F=s.attributeDivisors;X[P]=1,W[P]===0&&(t.enableVertexAttribArray(P),W[P]=1),F[P]!==k&&(t.vertexAttribDivisor(P,k),F[P]=k)}function p(){let P=s.newAttributes,k=s.enabledAttributes;for(let X=0,W=k.length;X<W;X++)k[X]!==P[X]&&(t.disableVertexAttribArray(X),k[X]=0)}function _(P,k,X,W,F,O,H){H===!0?t.vertexAttribIPointer(P,k,X,F,O):t.vertexAttribPointer(P,k,X,W,F,O)}function M(P,k,X,W){b();let F=W.attributes,O=X.getAttributes(),H=k.defaultAttributeValues;for(let Z in O){let ee=O[Z];if(ee.location>=0){let le=F[Z];if(le===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),le!==void 0){let ye=le.normalized,we=le.itemSize,$e=e.get(le);if($e===void 0)continue;let Qe=$e.buffer,de=$e.type,q=$e.bytesPerElement,ne=de===t.INT||de===t.UNSIGNED_INT||le.gpuType===ud;if(le.isInterleavedBufferAttribute){let re=le.data,Ce=re.stride,Ue=le.offset;if(re.isInstancedInterleavedBuffer){for(let Ne=0;Ne<ee.locationSize;Ne++)u(ee.location+Ne,re.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ne=0;Ne<ee.locationSize;Ne++)g(ee.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let Ne=0;Ne<ee.locationSize;Ne++)_(ee.location+Ne,we/ee.locationSize,de,ye,Ce*q,(Ue+we/ee.locationSize*Ne)*q,ne)}else{if(le.isInstancedBufferAttribute){for(let re=0;re<ee.locationSize;re++)u(ee.location+re,le.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let re=0;re<ee.locationSize;re++)g(ee.location+re);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let re=0;re<ee.locationSize;re++)_(ee.location+re,we/ee.locationSize,de,ye,we*q,we/ee.locationSize*re*q,ne)}}else if(H!==void 0){let ye=H[Z];if(ye!==void 0)switch(ye.length){case 2:t.vertexAttrib2fv(ee.location,ye);break;case 3:t.vertexAttrib3fv(ee.location,ye);break;case 4:t.vertexAttrib4fv(ee.location,ye);break;default:t.vertexAttrib1fv(ee.location,ye)}}}}p()}function C(){A();for(let P in i){let k=i[P];for(let X in k){let W=k[X];for(let F in W){let O=W[F];for(let H in O)h(O[H].object),delete O[H];delete W[F]}}delete i[P]}}function E(P){if(i[P.id]===void 0)return;let k=i[P.id];for(let X in k){let W=k[X];for(let F in W){let O=W[F];for(let H in O)h(O[H].object),delete O[H];delete W[F]}}delete i[P.id]}function R(P){for(let k in i){let X=i[k];for(let W in X){let F=X[W];if(F[P.id]===void 0)continue;let O=F[P.id];for(let H in O)h(O[H].object),delete O[H];delete F[P.id]}}}function x(P){for(let k in i){let X=i[k],W=P.isInstancedMesh===!0?P.id:0,F=X[W];if(F!==void 0){for(let O in F){let H=F[O];for(let Z in H)h(H[Z].object),delete H[Z];delete F[O]}delete X[W],Object.keys(X).length===0&&delete i[k]}}}function A(){I(),a=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:g,disableUnusedAttributes:p}}function gT(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function xT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==ni&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let x=R===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Tn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==_i&&!x)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(De("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:M,maxSamples:C,samples:E}}function vT(t){let e=this,n=null,i=0,r=!1,s=!1,a=new Pi,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,m){let v=f.clippingPlanes,b=f.clipIntersection,g=f.clipShadows,u=t.get(f);if(!r||v===null||v.length===0||s&&!g)s?h(null):c();else{let p=s?0:i,_=p*4,M=u.clippingState||null;l.value=M,M=h(v,d,_,m);for(let C=0;C!==_;++C)M[C]=n[C];u.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,m,v){let b=f!==null?f.length:0,g=null;if(b!==0){if(g=l.value,v!==!0||g===null){let u=m+b*4,p=d.matrixWorldInverse;o.getNormalMatrix(p),(g===null||g.length<u)&&(g=new Float32Array(u));for(let _=0,M=m;_!==b;++_,M+=4)a.copy(f[_]).applyMatrix4(p,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var ts=4,xy=[.125,.215,.35,.446,.526,.582],Cs=20,_T=256,Sl=new cl,vy=new Je,Ym=null,Km=0,jm=0,Zm=!1,yT=new V,Zd=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){let{size:a=256,position:o=yT}=s;Ym=this._renderer.getRenderTarget(),Km=this._renderer.getActiveCubeFace(),jm=this._renderer.getActiveMipmapLevel(),Zm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ym,Km,jm),this._renderer.xr.enabled=Zm,e.scissorTest=!1,Ua(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zr||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ym=this._renderer.getRenderTarget(),Km=this._renderer.getActiveCubeFace(),jm=this._renderer.getActiveMipmapLevel(),Zm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:ki,format:ni,colorSpace:qo,depthBuffer:!1},r=_y(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_y(e,n,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ST(s)),this._blurMaterial=bT(s,e,n),this._ggxMaterial=MT(s,e,n)}return r}_compileMaterial(e){let n=new mn(new ti,e);this._renderer.compile(n,Sl)}_sceneToCubeUV(e,n,i,r,s){let l=new Zt(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(vy),f.toneMapping=xi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new Ra,new el({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,u=!1,p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,u=!0):(g.color.copy(vy),u=!0);for(let _=0;_<6;_++){let M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));let C=this._cubeSize;Ua(r,M*C,_>2?C:0,C,C),f.setRenderTarget(r),u&&f.render(b,l),f.render(e,l)}f.toneMapping=m,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===Zr||e.mapping===Ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yy());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;Ua(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Sl)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),d=0+c*1.25,m=f*d,{_lodMax:v}=this,b=this._sizeLods[i],g=3*b*(i>v-ts?i-v+ts:0),u=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-n,Ua(s,g,u,3*b,2*b),r.setRenderTarget(s),r.render(o,Sl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Ua(e,g,u,3*b,2*b),r.setRenderTarget(e),r.render(o,Sl)}_blur(e,n,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Fe("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[r];f.material=c;let d=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Cs-1),b=s/v,g=isFinite(s)?1+Math.floor(h*b):Cs;g>Cs&&De(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Cs}`);let u=[],p=0;for(let R=0;R<Cs;++R){let x=R/b,A=Math.exp(-x*x/2);u.push(A),R===0?p+=A:R<g&&(p+=2*A)}for(let R=0;R<u.length;R++)u[R]=u[R]/p;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-i;let M=this._sizeLods[r],C=3*M*(r>_-ts?r-_+ts:0),E=4*(this._cubeSize-M);Ua(n,C,E,3*M,2*M),l.setRenderTarget(n),l.render(f,Sl)}};function ST(t){let e=[],n=[],i=[],r=t,s=t-ts+1+xy.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ts?l=xy[a-t+ts-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,v=6,b=3,g=2,u=1,p=new Float32Array(b*v*m),_=new Float32Array(g*v*m),M=new Float32Array(u*v*m);for(let E=0;E<m;E++){let R=E%3*2/3-1,x=E>2?0:-1,A=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];p.set(A,b*v*E),_.set(d,g*v*E);let I=[E,E,E,E,E,E];M.set(I,u*v*E)}let C=new ti;C.setAttribute("position",new Bn(p,b)),C.setAttribute("uv",new Bn(_,g)),C.setAttribute("faceIndex",new Bn(M,u)),i.push(new mn(C,null)),r>ts&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function _y(t,e,n){let i=new zn(t,e,n);return i.texture.mapping=hl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ua(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function MT(t,e,n){return new Gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_T,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eh(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function bT(t,e,n){let i=new Float32Array(Cs),r=new V(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:eh(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function yy(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Sy(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function eh(){return`

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
	`}var Jd=class extends zn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new tl(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ra(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Fi});s.uniforms.tEquirect.value=n;let a=new mn(r,s),o=n.minFilter;return n.minFilter===Jr&&(n.minFilter=Jt),new sd(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}};function wT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){let m=d.mapping;if(m===od||m===ld)if(e.has(d)){let v=e.get(d).texture;return o(v,d.mapping)}else{let v=d.image;if(v&&v.height>0){let b=new Jd(v.height);return b.fromEquirectangularTexture(t,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let m=d.mapping,v=m===od||m===ld,b=m===Zr||m===Ts;if(v||b){let g=n.get(d),u=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new Zd(t)),g=v?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{let p=d.image;return v&&p&&p.height>0||b&&p&&l(p)?(i===null&&(i=new Zd(t)),g=v?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,m){return m===od?d.mapping=Zr:m===ld&&(d.mapping=Ts),d}function l(d){let m=0,v=6;for(let b=0;b<v;b++)d[b]!==void 0&&m++;return m===v}function c(d){let m=d.target;m.removeEventListener("dispose",c);let v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function h(d){let m=d.target;m.removeEventListener("dispose",h);let v=n.get(m);v!==void 0&&(n.delete(m),v.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function ET(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&Ou("WebGLRenderer: "+i+" extension not supported."),r}}}function TT(t,e,n,i){let r={},s=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){let d=f.attributes;for(let m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(f){let d=[],m=f.index,v=f.attributes.position,b=0;if(v===void 0)return;if(m!==null){let p=m.array;b=m.version;for(let _=0,M=p.length;_<M;_+=3){let C=p[_+0],E=p[_+1],R=p[_+2];d.push(C,E,E,R,R,C)}}else{let p=v.array;b=v.version;for(let _=0,M=p.length/3-1;_<M;_+=3){let C=_+0,E=_+1,R=_+2;d.push(C,E,E,R,R,C)}}let g=new(v.count>=65535?Qo:Jo)(d,1);g.version=b;let u=s.get(f);u&&e.remove(u),s.set(f,g)}function h(f){let d=s.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function AT(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){t.drawElements(i,d,s,f*a),n.update(d,i,1)}function c(f,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,f*a,m),n.update(d,i,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,m);let b=0;for(let g=0;g<m;g++)b+=d[g];n.update(b,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function CT(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Fe("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function RT(t,e,n){let i=new WeakMap,r=new Ct;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==f){let A=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],p=o.morphAttributes.color||[],_=0;m===!0&&(_=1),v===!0&&(_=2),b===!0&&(_=3);let M=o.attributes.position.count*_,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*C*4*f),R=new Ko(E,M,C,f);R.type=_i,R.needsUpdate=!0;let x=_*4;for(let I=0;I<f;I++){let P=g[I],k=u[I],X=p[I],W=M*C*4*I;for(let F=0;F<P.count;F++){let O=F*x;m===!0&&(r.fromBufferAttribute(P,F),E[W+O+0]=r.x,E[W+O+1]=r.y,E[W+O+2]=r.z,E[W+O+3]=0),v===!0&&(r.fromBufferAttribute(k,F),E[W+O+4]=r.x,E[W+O+5]=r.y,E[W+O+6]=r.z,E[W+O+7]=0),b===!0&&(r.fromBufferAttribute(X,F),E[W+O+8]=r.x,E[W+O+9]=r.y,E[W+O+10]=r.z,E[W+O+11]=X.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new it(M,C)},i.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let b=0;b<c.length;b++)m+=c[b];let v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function PT(t,e,n,i,r){let s=new WeakMap;function a(c){let h=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return d}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}var IT={[Am]:"LINEAR_TONE_MAPPING",[Cm]:"REINHARD_TONE_MAPPING",[Rm]:"CINEON_TONE_MAPPING",[Pm]:"ACES_FILMIC_TONE_MAPPING",[Nm]:"AGX_TONE_MAPPING",[Lm]:"NEUTRAL_TONE_MAPPING",[Im]:"CUSTOM_TONE_MAPPING"};function NT(t,e,n,i,r){let s=new zn(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new ur(e,n):void 0}),a=new zn(e,n,{type:ki,depthBuffer:!1,stencilBuffer:!1}),o=new ti;o.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Xt([0,2,0,0,2,0],2));let l=new qu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new mn(o,l),h=new cl(-1,1,1,-1,0,1),f=null,d=null,m=!1,v,b=null,g=[],u=!1;this.setSize=function(p,_){s.setSize(p,_),a.setSize(p,_);for(let M=0;M<g.length;M++){let C=g[M];C.setSize&&C.setSize(p,_)}},this.setEffects=function(p){g=p,u=g.length>0&&g[0].isRenderPass===!0;let _=s.width,M=s.height;for(let C=0;C<g.length;C++){let E=g[C];E.setSize&&E.setSize(_,M)}},this.begin=function(p,_){if(m||p.toneMapping===xi&&g.length===0)return!1;if(b=_,_!==null){let M=_.width,C=_.height;(s.width!==M||s.height!==C)&&this.setSize(M,C)}return u===!1&&p.setRenderTarget(s),v=p.toneMapping,p.toneMapping=xi,!0},this.hasRenderPass=function(){return u},this.end=function(p,_){p.toneMapping=v,m=!0;let M=s,C=a;for(let E=0;E<g.length;E++){let R=g[E];if(R.enabled!==!1&&(R.render(p,C,M,_),R.needsSwap!==!1)){let x=M;M=C,C=x}}if(f!==p.outputColorSpace||d!==p.toneMapping){f=p.outputColorSpace,d=p.toneMapping,l.defines={},Ke.getTransfer(f)===ot&&(l.defines.SRGB_TRANSFER="");let E=IT[d];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,p.setRenderTarget(b),p.render(c,h),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Vy=new En,eg=new ur(1,1),Gy=new Ko,Hy=new Gu,Wy=new tl,My=[],by=[],wy=new Float32Array(16),Ey=new Float32Array(9),Ty=new Float32Array(4);function ka(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=My[r];if(s===void 0&&(s=new Float32Array(r),My[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function th(t,e){let n=by[e];n===void 0&&(n=new Int32Array(e),by[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function LT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function DT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function UT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function FT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function kT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;Ty.set(i),t.uniformMatrix2fv(this.addr,!1,Ty),zt(n,i)}}function OT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;Ey.set(i),t.uniformMatrix3fv(this.addr,!1,Ey),zt(n,i)}}function BT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;wy.set(i),t.uniformMatrix4fv(this.addr,!1,wy),zt(n,i)}}function zT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function VT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function GT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function HT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function WT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function XT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function qT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function $T(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function YT(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(eg.compareFunction=n.isReversedDepthBuffer()?Yd:$d,s=eg):s=Vy,n.setTexture2D(e||s,r)}function KT(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Hy,r)}function jT(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Wy,r)}function ZT(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Gy,r)}function JT(t){switch(t){case 5126:return LT;case 35664:return DT;case 35665:return UT;case 35666:return FT;case 35674:return kT;case 35675:return OT;case 35676:return BT;case 5124:case 35670:return zT;case 35667:case 35671:return VT;case 35668:case 35672:return GT;case 35669:case 35673:return HT;case 5125:return WT;case 36294:return XT;case 36295:return qT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return jT;case 36289:case 36303:case 36311:case 36292:return ZT}}function QT(t,e){t.uniform1fv(this.addr,e)}function eA(t,e){let n=ka(e,this.size,2);t.uniform2fv(this.addr,n)}function tA(t,e){let n=ka(e,this.size,3);t.uniform3fv(this.addr,n)}function nA(t,e){let n=ka(e,this.size,4);t.uniform4fv(this.addr,n)}function iA(t,e){let n=ka(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rA(t,e){let n=ka(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function sA(t,e){let n=ka(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function aA(t,e){t.uniform1iv(this.addr,e)}function oA(t,e){t.uniform2iv(this.addr,e)}function lA(t,e){t.uniform3iv(this.addr,e)}function cA(t,e){t.uniform4iv(this.addr,e)}function uA(t,e){t.uniform1uiv(this.addr,e)}function dA(t,e){t.uniform2uiv(this.addr,e)}function hA(t,e){t.uniform3uiv(this.addr,e)}function fA(t,e){t.uniform4uiv(this.addr,e)}function pA(t,e,n){let i=this.cache,r=e.length,s=th(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=eg:a=Vy;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function mA(t,e,n){let i=this.cache,r=e.length,s=th(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Hy,s[a])}function gA(t,e,n){let i=this.cache,r=e.length,s=th(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Wy,s[a])}function xA(t,e,n){let i=this.cache,r=e.length,s=th(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Gy,s[a])}function vA(t){switch(t){case 5126:return QT;case 35664:return eA;case 35665:return tA;case 35666:return nA;case 35674:return iA;case 35675:return rA;case 35676:return sA;case 5124:case 35670:return aA;case 35667:case 35671:return oA;case 35668:case 35672:return lA;case 35669:case 35673:return cA;case 5125:return uA;case 36294:return dA;case 36295:return hA;case 36296:return fA;case 35678:case 36198:case 36298:case 36306:case 35682:return pA;case 35679:case 36299:case 36307:return mA;case 35680:case 36300:case 36308:case 36293:return gA;case 36289:case 36303:case 36311:case 36292:return xA}}var tg=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=JT(n.type)}},ng=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vA(n.type)}},ig=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,n[o.id],i)}}},Jm=/(\w+)(\])?(\[|\.)?/g;function Ay(t,e){t.seq.push(e),t.map[e.id]=e}function _A(t,e,n){let i=t.name,r=i.length;for(Jm.lastIndex=0;;){let s=Jm.exec(i),a=Jm.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ay(n,c===void 0?new tg(o,t,e):new ng(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new ig(o),Ay(n,f)),n=f}}}var Fa=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);_A(o,l,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){let o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in n&&i.push(a)}return i}};function Cy(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var yA=37297,SA=0;function MA(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Ry=new Be;function bA(t){Ke._getMatrix(Ry,Ke.workingColorSpace,t);let e=`mat3( ${Ry.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case $o:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Py(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+MA(t.getShaderSource(e),o)}else return s}function wA(t,e){let n=bA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var EA={[Am]:"Linear",[Cm]:"Reinhard",[Rm]:"Cineon",[Pm]:"ACESFilmic",[Nm]:"AgX",[Lm]:"Neutral",[Im]:"Custom"};function TA(t,e){let n=EA[e];return n===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var jd=new V;function AA(){Ke.getLuminanceCoefficients(jd);let t=jd.x.toFixed(4),e=jd.y.toFixed(4),n=jd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bl).join(`
`)}function RA(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function PA(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),a=s.name,o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function bl(t){return t!==""}function Iy(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ny(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var IA=/^[ \t]*#include +<([\w\d./]+)>/gm;function rg(t){return t.replace(IA,LA)}var NA=new Map;function LA(t,e){let n=Xe[e];if(n===void 0){let i=NA.get(e);if(i!==void 0)n=Xe[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rg(n)}var DA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ly(t){return t.replace(DA,UA)}function UA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dy(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var FA={[dl]:"SHADOWMAP_TYPE_PCF",[Na]:"SHADOWMAP_TYPE_VSM"};function kA(t){return FA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var OA={[Zr]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE",[hl]:"ENVMAP_TYPE_CUBE_UV"};function BA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":OA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var zA={[Ts]:"ENVMAP_MODE_REFRACTION"};function VA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":zA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var GA={[Tm]:"ENVMAP_BLENDING_MULTIPLY",[Q_]:"ENVMAP_BLENDING_MIX",[ey]:"ENVMAP_BLENDING_ADD"};function HA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":GA[t.combine]||"ENVMAP_BLENDING_NONE"}function WA(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function XA(t,e,n,i){let r=t.getContext(),s=n.defines,a=n.vertexShader,o=n.fragmentShader,l=kA(n),c=BA(n),h=VA(n),f=HA(n),d=WA(n),m=CA(n),v=RA(s),b=r.createProgram(),g,u,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(bl).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(bl).join(`
`),u.length>0&&(u+=`
`)):(g=[Dy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bl).join(`
`),u=[Dy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xi?"#define TONE_MAPPING":"",n.toneMapping!==xi?Xe.tonemapping_pars_fragment:"",n.toneMapping!==xi?TA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,wA("linearToOutputTexel",n.outputColorSpace),AA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bl).join(`
`)),a=rg(a),a=Iy(a,n),a=Ny(a,n),o=rg(o),o=Iy(o,n),o=Ny(o,n),a=Ly(a),o=Ly(o),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===Gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let _=p+g+a,M=p+u+o,C=Cy(r,r.VERTEX_SHADER,_),E=Cy(r,r.FRAGMENT_SHADER,M);r.attachShader(b,C),r.attachShader(b,E),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function R(P){if(t.debug.checkShaderErrors){let k=r.getProgramInfoLog(b)||"",X=r.getShaderInfoLog(C)||"",W=r.getShaderInfoLog(E)||"",F=k.trim(),O=X.trim(),H=W.trim(),Z=!0,ee=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,b,C,E);else{let le=Py(r,C,"vertex"),ye=Py(r,E,"fragment");Fe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+le+`
`+ye)}else F!==""?De("WebGLProgram: Program Info Log:",F):(O===""||H==="")&&(ee=!1);ee&&(P.diagnostics={runnable:Z,programLog:F,vertexShader:{log:O,prefix:g},fragmentShader:{log:H,prefix:u}})}r.deleteShader(C),r.deleteShader(E),x=new Fa(r,b),A=PA(r,b)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(b,yA)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SA++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=C,this.fragmentShader=E,this}var qA=0,sg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new ag(e),n.set(e,i)),i}},ag=class{constructor(e){this.id=qA++,this.code=e,this.usedTimes=0}};function $A(t){return t===es||t===vl||t===_l}function YA(t,e,n,i,r,s){let a=new jo,o=new sg,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function b(x,A,I,P,k,X){let W=P.fog,F=k.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||O,H),ee=Z&&Z.mapping===hl?Z.image.height:null,le=m[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&De("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let ye=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,we=ye!==void 0?ye.length:0,$e=0;F.morphAttributes.position!==void 0&&($e=1),F.morphAttributes.normal!==void 0&&($e=2),F.morphAttributes.color!==void 0&&($e=3);let Qe,de,q,ne;if(le){let Oe=Bi[le];Qe=Oe.vertexShader,de=Oe.fragmentShader}else Qe=x.vertexShader,de=x.fragmentShader,o.update(x),q=o.getVertexShaderID(x),ne=o.getFragmentShaderID(x);let re=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,Ne=k.isBatchedMesh===!0,nt=!!x.map,He=!!x.matcap,rt=!!Z,ut=!!x.aoMap,We=!!x.lightMap,ft=!!x.bumpMap,vt=!!x.normalMap,un=!!x.displacementMap,D=!!x.emissiveMap,Mt=!!x.metalnessMap,ze=!!x.roughnessMap,st=x.anisotropy>0,fe=x.clearcoat>0,bt=x.dispersion>0,T=x.iridescence>0,S=x.sheen>0,B=x.transmission>0,K=st&&!!x.anisotropyMap,Q=fe&&!!x.clearcoatMap,ae=fe&&!!x.clearcoatNormalMap,ue=fe&&!!x.clearcoatRoughnessMap,$=T&&!!x.iridescenceMap,j=T&&!!x.iridescenceThicknessMap,me=S&&!!x.sheenColorMap,_e=S&&!!x.sheenRoughnessMap,ce=!!x.specularMap,oe=!!x.specularColorMap,ke=!!x.specularIntensityMap,ve=B&&!!x.transmissionMap,Ee=B&&!!x.thicknessMap,L=!!x.gradientMap,se=!!x.alphaMap,Y=x.alphaTest>0,he=!!x.alphaHash,te=!!x.extensions,J=xi;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(J=t.toneMapping);let Te={shaderID:le,shaderType:x.type,shaderName:x.name,vertexShader:Qe,fragmentShader:de,defines:x.defines,customVertexShaderID:q,customFragmentShaderID:ne,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ne,batchingColor:Ne&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:nt,matcap:He,envMap:rt,envMapMode:rt&&Z.mapping,envMapCubeUVHeight:ee,aoMap:ut,lightMap:We,bumpMap:ft,normalMap:vt,displacementMap:un,emissiveMap:D,normalMapObjectSpace:vt&&x.normalMapType===iy,normalMapTangentSpace:vt&&x.normalMapType===qd,packedNormalMap:vt&&x.normalMapType===qd&&$A(x.normalMap.format),metalnessMap:Mt,roughnessMap:ze,anisotropy:st,anisotropyMap:K,clearcoat:fe,clearcoatMap:Q,clearcoatNormalMap:ae,clearcoatRoughnessMap:ue,dispersion:bt,iridescence:T,iridescenceMap:$,iridescenceThicknessMap:j,sheen:S,sheenColorMap:me,sheenRoughnessMap:_e,specularMap:ce,specularColorMap:oe,specularIntensityMap:ke,transmission:B,transmissionMap:ve,thicknessMap:Ee,gradientMap:L,opaque:x.transparent===!1&&x.blending===ws&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:Y,alphaHash:he,combine:x.combine,mapUv:nt&&v(x.map.channel),aoMapUv:ut&&v(x.aoMap.channel),lightMapUv:We&&v(x.lightMap.channel),bumpMapUv:ft&&v(x.bumpMap.channel),normalMapUv:vt&&v(x.normalMap.channel),displacementMapUv:un&&v(x.displacementMap.channel),emissiveMapUv:D&&v(x.emissiveMap.channel),metalnessMapUv:Mt&&v(x.metalnessMap.channel),roughnessMapUv:ze&&v(x.roughnessMap.channel),anisotropyMapUv:K&&v(x.anisotropyMap.channel),clearcoatMapUv:Q&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:j&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(x.sheenRoughnessMap.channel),specularMapUv:ce&&v(x.specularMap.channel),specularColorMapUv:oe&&v(x.specularColorMap.channel),specularIntensityMapUv:ke&&v(x.specularIntensityMap.channel),transmissionMapUv:ve&&v(x.transmissionMap.channel),thicknessMapUv:Ee&&v(x.thicknessMap.channel),alphaMapUv:se&&v(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(vt||st),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!F.attributes.uv&&(nt||se),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&vt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ce,skinning:k.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:$e,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:J,decodeVideoTexture:nt&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===ot,decodeVideoTextureEmissive:D&&x.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(x.emissiveMap.colorSpace)===ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ui,flipSided:x.side===gn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:te&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&x.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function g(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)A.push(I),A.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(u(A,x),p(A,x),A.push(t.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function u(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function p(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function _(x){let A=m[x.type],I;if(A){let P=Bi[A];I=my.clone(P.uniforms)}else I=x.uniforms;return I}function M(x,A){let I=h.get(A);return I!==void 0?++I.usedTimes:(I=new XA(t,A,x,r),c.push(I),h.set(A,I)),I}function C(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function R(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:_,acquireProgram:M,releaseProgram:C,releaseShaderCache:E,programs:c,dispose:R}}function KA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function jA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Uy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Fy(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,v,b,g,u){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:m,material:v,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:g,group:u},t[e]=p):(p.id=d.id,p.object=d,p.geometry=m,p.material=v,p.materialVariant=a(d),p.groupOrder=b,p.renderOrder=d.renderOrder,p.z=g,p.group=u),e++,p}function l(d,m,v,b,g,u){let p=o(d,m,v,b,g,u);v.transmission>0?i.push(p):v.transparent===!0?r.push(p):n.push(p)}function c(d,m,v,b,g,u){let p=o(d,m,v,b,g,u);v.transmission>0?i.unshift(p):v.transparent===!0?r.unshift(p):n.unshift(p)}function h(d,m){n.length>1&&n.sort(d||jA),i.length>1&&i.sort(m||Uy),r.length>1&&r.sort(m||Uy)}function f(){for(let d=e,m=t.length;d<m;d++){let v=t[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function ZA(){let t=new WeakMap;function e(i,r){let s=t.get(i),a;return s===void 0?(a=new Fy,t.set(i,[a])):r>=s.length?(a=new Fy,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function JA(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new Je};break;case"SpotLight":n={position:new V,direction:new V,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function QA(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var eC=0;function tC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function nC(t){let e=new JA,n=QA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let r=new V,s=new It,a=new It;function o(c){let h=0,f=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let m=0,v=0,b=0,g=0,u=0,p=0,_=0,M=0,C=0,E=0,R=0;c.sort(tC);for(let A=0,I=c.length;A<I;A++){let P=c[A],k=P.color,X=P.intensity,W=P.distance,F=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===es?F=P.shadow.map.texture:F=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=k.r*X,f+=k.g*X,d+=k.b*X;else if(P.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(P.sh.coefficients[O],X);R++}else if(P.isDirectionalLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,Z=n.get(P);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=F,i.directionalShadowMatrix[m]=P.shadow.matrix,p++}i.directional[m]=O,m++}else if(P.isSpotLight){let O=e.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(k).multiplyScalar(X),O.distance=W,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,i.spot[b]=O;let H=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,H.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[b]=H.matrix,P.castShadow){let Z=n.get(P);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,i.spotShadow[b]=Z,i.spotShadowMap[b]=F,M++}b++}else if(P.isRectAreaLight){let O=e.get(P);O.color.copy(k).multiplyScalar(X),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=O,g++}else if(P.isPointLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){let H=P.shadow,Z=n.get(P);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,Z.shadowCameraNear=H.camera.near,Z.shadowCameraFar=H.camera.far,i.pointShadow[v]=Z,i.pointShadowMap[v]=F,i.pointShadowMatrix[v]=P.shadow.matrix,_++}i.point[v]=O,v++}else if(P.isHemisphereLight){let O=e.get(P);O.skyColor.copy(P.color).multiplyScalar(X),O.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[u]=O,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let x=i.hash;(x.directionalLength!==m||x.pointLength!==v||x.spotLength!==b||x.rectAreaLength!==g||x.hemiLength!==u||x.numDirectionalShadows!==p||x.numPointShadows!==_||x.numSpotShadows!==M||x.numSpotMaps!==C||x.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=b,i.rectArea.length=g,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,x.directionalLength=m,x.pointLength=v,x.spotLength=b,x.rectAreaLength=g,x.hemiLength=u,x.numDirectionalShadows=p,x.numPointShadows=_,x.numSpotShadows=M,x.numSpotMaps=C,x.numLightProbes=R,i.version=eC++)}function l(c,h){let f=0,d=0,m=0,v=0,b=0,g=h.matrixWorldInverse;for(let u=0,p=c.length;u<p;u++){let _=c[u];if(_.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(_.isSpotLight){let M=i.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),m++}else if(_.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(_.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let M=i.hemi[b];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),b++}}}return{setup:o,setupView:l,state:i}}function ky(t){let e=new nC(t),n=[],i=[],r=[];function s(d){f.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function h(d){e.setupView(n,d)}let f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function iC(t){let e=new WeakMap;function n(r,s=0){let a=e.get(r),o;return a===void 0?(o=new ky(t),e.set(r,[o])):s>=a.length?(o=new ky(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var rC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sC=`uniform sampler2D shadow_pass;
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
}`,aC=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],oC=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Oy=new It,Ml=new V,Qm=new V;function lC(t,e,n){let i=new Ca,r=new it,s=new it,a=new Ct,o=new $u,l=new Yu,c={},h=n.maxTextureSize,f={[lr]:gn,[gn]:lr,[Ui]:Ui},d=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:rC,fragmentShader:sC}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let v=new ti;v.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new mn(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dl;let u=this.type;this.render=function(E,R,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===D_&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=dl);let A=t.getRenderTarget(),I=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Fi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let X=u!==this.type;X&&R.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(F=>F.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,F=E.length;W<F;W++){let O=E[W],H=O.shadow;if(H===void 0){De("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let Z=H.getFrameExtents();r.multiply(Z),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Z.x),r.x=s.x*Z.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Z.y),r.y=s.y*Z.y,H.mapSize.y=s.y));let ee=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ee,H.map===null||X===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Na){if(O.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new zn(r.x,r.y,{format:es,type:ki,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new ur(r.x,r.y,_i),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=Ni,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qt,H.map.depthTexture.magFilter=qt}else O.isPointLight?(H.map=new Jd(r.x),H.map.depthTexture=new Xu(r.x,vi)):(H.map=new zn(r.x,r.y),H.map.depthTexture=new ur(r.x,r.y,vi)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=Ni,this.type===dl?(H.map.depthTexture.compareFunction=ee?Yd:$d,H.map.depthTexture.minFilter=Jt,H.map.depthTexture.magFilter=Jt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qt,H.map.depthTexture.magFilter=qt);H.camera.updateProjectionMatrix()}let le=H.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<le;ye++){if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,ye),t.clear();else{ye===0&&(t.setRenderTarget(H.map),t.clear());let we=H.getViewport(ye);a.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),k.viewport(a)}if(O.isPointLight){let we=H.camera,$e=H.matrix,Qe=O.distance||we.far;Qe!==we.far&&(we.far=Qe,we.updateProjectionMatrix()),Ml.setFromMatrixPosition(O.matrixWorld),we.position.copy(Ml),Qm.copy(we.position),Qm.add(aC[ye]),we.up.copy(oC[ye]),we.lookAt(Qm),we.updateMatrixWorld(),$e.makeTranslation(-Ml.x,-Ml.y,-Ml.z),Oy.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Oy,we.coordinateSystem,we.reversedDepth)}else H.updateMatrices(O);i=H.getFrustum(),M(R,x,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===Na&&p(H,x),H.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(A,I,P)};function p(E,R){let x=e.update(b);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new zn(r.x,r.y,{format:es,type:ki})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(R,null,x,d,b,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(R,null,x,m,b,null)}function _(E,R,x,A){let I=null,P=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)I=P;else if(I=x.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let k=I.uuid,X=R.uuid,W=c[k];W===void 0&&(W={},c[k]=W);let F=W[X];F===void 0&&(F=I.clone(),W[X]=F,R.addEventListener("dispose",C)),I=F}if(I.visible=R.visible,I.wireframe=R.wireframe,A===Na?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:f[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let k=t.properties.get(I);k.light=x}return I}function M(E,R,x,A,I){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===Na)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let X=e.update(E),W=E.material;if(Array.isArray(W)){let F=X.groups;for(let O=0,H=F.length;O<H;O++){let Z=F[O],ee=W[Z.materialIndex];if(ee&&ee.visible){let le=_(E,ee,A,I);E.onBeforeShadow(t,E,R,x,X,le,Z),t.renderBufferDirect(x,null,X,le,E,Z),E.onAfterShadow(t,E,R,x,X,le,Z)}}}else if(W.visible){let F=_(E,W,A,I);E.onBeforeShadow(t,E,R,x,X,F,null),t.renderBufferDirect(x,null,X,F,E,null),E.onAfterShadow(t,E,R,x,X,F,null)}}let k=E.children;for(let X=0,W=k.length;X<W;X++)M(k[X],R,x,A,I)}function C(E){E.target.removeEventListener("dispose",C);for(let x in c){let A=c[x],I=E.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function cC(t,e){function n(){let L=!1,se=new Ct,Y=null,he=new Ct(0,0,0,0);return{setMask:function(te){Y!==te&&!L&&(t.colorMask(te,te,te,te),Y=te)},setLocked:function(te){L=te},setClear:function(te,J,Te,Oe,pt){pt===!0&&(te*=Oe,J*=Oe,Te*=Oe),se.set(te,J,Te,Oe),he.equals(se)===!1&&(t.clearColor(te,J,Te,Oe),he.copy(se))},reset:function(){L=!1,Y=null,he.set(-1,0,0,0)}}}function i(){let L=!1,se=!1,Y=null,he=null,te=null;return{setReversed:function(J){if(se!==J){let Te=e.get("EXT_clip_control");J?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),se=J;let Oe=te;te=null,this.setClear(Oe)}},getReversed:function(){return se},setTest:function(J){J?re(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(J){Y!==J&&!L&&(t.depthMask(J),Y=J)},setFunc:function(J){if(se&&(J=fy[J]),he!==J){switch(J){case Cu:t.depthFunc(t.NEVER);break;case Ru:t.depthFunc(t.ALWAYS);break;case Pu:t.depthFunc(t.LESS);break;case Es:t.depthFunc(t.LEQUAL);break;case Iu:t.depthFunc(t.EQUAL);break;case Nu:t.depthFunc(t.GEQUAL);break;case Lu:t.depthFunc(t.GREATER);break;case Du:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=J}},setLocked:function(J){L=J},setClear:function(J){te!==J&&(te=J,se&&(J=1-J),t.clearDepth(J))},reset:function(){L=!1,Y=null,he=null,te=null,se=!1}}}function r(){let L=!1,se=null,Y=null,he=null,te=null,J=null,Te=null,Oe=null,pt=null;return{setTest:function(at){L||(at?re(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(at){se!==at&&!L&&(t.stencilMask(at),se=at)},setFunc:function(at,Xn,An){(Y!==at||he!==Xn||te!==An)&&(t.stencilFunc(at,Xn,An),Y=at,he=Xn,te=An)},setOp:function(at,Xn,An){(J!==at||Te!==Xn||Oe!==An)&&(t.stencilOp(at,Xn,An),J=at,Te=Xn,Oe=An)},setLocked:function(at){L=at},setClear:function(at){pt!==at&&(t.clearStencil(at),pt=at)},reset:function(){L=!1,se=null,Y=null,he=null,te=null,J=null,Te=null,Oe=null,pt=null}}}let s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap,h={},f={},d={},m=new WeakMap,v=[],b=null,g=!1,u=null,p=null,_=null,M=null,C=null,E=null,R=null,x=new Je(0,0,0),A=0,I=!1,P=null,k=null,X=null,W=null,F=null,O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Z=0,ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ee)[1]),H=Z>=1):ee.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),H=Z>=2);let le=null,ye={},we=t.getParameter(t.SCISSOR_BOX),$e=t.getParameter(t.VIEWPORT),Qe=new Ct().fromArray(we),de=new Ct().fromArray($e);function q(L,se,Y,he){let te=new Uint8Array(4),J=t.createTexture();t.bindTexture(L,J),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<Y;Te++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,te):t.texImage2D(se+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,te);return J}let ne={};ne[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(t.DEPTH_TEST),a.setFunc(Es),ft(!1),vt(Mm),re(t.CULL_FACE),ut(Fi);function re(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Ce(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Ue(L,se){return d[L]!==se?(t.bindFramebuffer(L,se),d[L]=se,L===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=se),L===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=se),!0):!1}function Ne(L,se){let Y=v,he=!1;if(L){Y=m.get(se),Y===void 0&&(Y=[],m.set(se,Y));let te=L.textures;if(Y.length!==te.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let J=0,Te=te.length;J<Te;J++)Y[J]=t.COLOR_ATTACHMENT0+J;Y.length=te.length,he=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,he=!0);he&&t.drawBuffers(Y)}function nt(L){return b!==L?(t.useProgram(L),b=L,!0):!1}let He={[Xr]:t.FUNC_ADD,[F_]:t.FUNC_SUBTRACT,[k_]:t.FUNC_REVERSE_SUBTRACT};He[O_]=t.MIN,He[B_]=t.MAX;let rt={[z_]:t.ZERO,[V_]:t.ONE,[G_]:t.SRC_COLOR,[Tu]:t.SRC_ALPHA,[Y_]:t.SRC_ALPHA_SATURATE,[q_]:t.DST_COLOR,[W_]:t.DST_ALPHA,[H_]:t.ONE_MINUS_SRC_COLOR,[Au]:t.ONE_MINUS_SRC_ALPHA,[$_]:t.ONE_MINUS_DST_COLOR,[X_]:t.ONE_MINUS_DST_ALPHA,[K_]:t.CONSTANT_COLOR,[j_]:t.ONE_MINUS_CONSTANT_COLOR,[Z_]:t.CONSTANT_ALPHA,[J_]:t.ONE_MINUS_CONSTANT_ALPHA};function ut(L,se,Y,he,te,J,Te,Oe,pt,at){if(L===Fi){g===!0&&(Ce(t.BLEND),g=!1);return}if(g===!1&&(re(t.BLEND),g=!0),L!==U_){if(L!==u||at!==I){if((p!==Xr||C!==Xr)&&(t.blendEquation(t.FUNC_ADD),p=Xr,C=Xr),at)switch(L){case ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bm:t.blendFunc(t.ONE,t.ONE);break;case wm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Em:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Fe("WebGLState: Invalid blending: ",L);break}else switch(L){case ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case wm:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Em:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",L);break}_=null,M=null,E=null,R=null,x.set(0,0,0),A=0,u=L,I=at}return}te=te||se,J=J||Y,Te=Te||he,(se!==p||te!==C)&&(t.blendEquationSeparate(He[se],He[te]),p=se,C=te),(Y!==_||he!==M||J!==E||Te!==R)&&(t.blendFuncSeparate(rt[Y],rt[he],rt[J],rt[Te]),_=Y,M=he,E=J,R=Te),(Oe.equals(x)===!1||pt!==A)&&(t.blendColor(Oe.r,Oe.g,Oe.b,pt),x.copy(Oe),A=pt),u=L,I=!1}function We(L,se){L.side===Ui?Ce(t.CULL_FACE):re(t.CULL_FACE);let Y=L.side===gn;se&&(Y=!Y),ft(Y),L.blending===ws&&L.transparent===!1?ut(Fi):ut(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);let he=L.stencilWrite;o.setTest(he),he&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),D(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function ft(L){P!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),P=L)}function vt(L){L!==N_?(re(t.CULL_FACE),L!==k&&(L===Mm?t.cullFace(t.BACK):L===L_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),k=L}function un(L){L!==X&&(H&&t.lineWidth(L),X=L)}function D(L,se,Y){L?(re(t.POLYGON_OFFSET_FILL),(W!==se||F!==Y)&&(W=se,F=Y,a.getReversed()&&(se=-se),t.polygonOffset(se,Y))):Ce(t.POLYGON_OFFSET_FILL)}function Mt(L){L?re(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function ze(L){L===void 0&&(L=t.TEXTURE0+O-1),le!==L&&(t.activeTexture(L),le=L)}function st(L,se,Y){Y===void 0&&(le===null?Y=t.TEXTURE0+O-1:Y=le);let he=ye[Y];he===void 0&&(he={type:void 0,texture:void 0},ye[Y]=he),(he.type!==L||he.texture!==se)&&(le!==Y&&(t.activeTexture(Y),le=Y),t.bindTexture(L,se||ne[L]),he.type=L,he.texture=se)}function fe(){let L=ye[le];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function bt(){try{t.compressedTexImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function T(){try{t.compressedTexImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function S(){try{t.texSubImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function B(){try{t.texSubImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function ae(){try{t.texStorage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function ue(){try{t.texStorage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function $(){try{t.texImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function j(){try{t.texImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function me(L){return f[L]!==void 0?f[L]:t.getParameter(L)}function _e(L,se){f[L]!==se&&(t.pixelStorei(L,se),f[L]=se)}function ce(L){Qe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Qe.copy(L))}function oe(L){de.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),de.copy(L))}function ke(L,se){let Y=c.get(se);Y===void 0&&(Y=new WeakMap,c.set(se,Y));let he=Y.get(L);he===void 0&&(he=t.getUniformBlockIndex(se,L.name),Y.set(L,he))}function ve(L,se){let he=c.get(se).get(L);l.get(se)!==he&&(t.uniformBlockBinding(se,he,L.__bindingPointIndex),l.set(se,he))}function Ee(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},f={},le=null,ye={},d={},m=new WeakMap,v=[],b=null,g=!1,u=null,p=null,_=null,M=null,C=null,E=null,R=null,x=new Je(0,0,0),A=0,I=!1,P=null,k=null,X=null,W=null,F=null,Qe.set(0,0,t.canvas.width,t.canvas.height),de.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Ce,bindFramebuffer:Ue,drawBuffers:Ne,useProgram:nt,setBlending:ut,setMaterial:We,setFlipSided:ft,setCullFace:vt,setLineWidth:un,setPolygonOffset:D,setScissorTest:Mt,activeTexture:ze,bindTexture:st,unbindTexture:fe,compressedTexImage2D:bt,compressedTexImage3D:T,texImage2D:$,texImage3D:j,pixelStorei:_e,getParameter:me,updateUBOMapping:ke,uniformBlockBinding:ve,texStorage2D:ae,texStorage3D:ue,texSubImage2D:S,texSubImage3D:B,compressedTexSubImage2D:K,compressedTexSubImage3D:Q,scissor:ce,viewport:oe,reset:Ee}}function uC(t,e,n,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,f=new Set,d,m=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,S){return v?new OffscreenCanvas(T,S):Yo("canvas")}function g(T,S,B){let K=1,Q=bt(T);if((Q.width>B||Q.height>B)&&(K=B/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ae=Math.floor(K*Q.width),ue=Math.floor(K*Q.height);d===void 0&&(d=b(ae,ue));let $=S?b(ae,ue):d;return $.width=ae,$.height=ue,$.getContext("2d").drawImage(T,0,0,ae,ue),De("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ae+"x"+ue+")."),$}else return"data"in T&&De("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function u(T){return T.generateMipmaps}function p(T){t.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(T,S,B,K,Q,ae=!1){if(T!==null){if(t[T]!==void 0)return t[T];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ue;K&&(ue=e.get("EXT_texture_norm16"),ue||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===t.RED&&(B===t.FLOAT&&($=t.R32F),B===t.HALF_FLOAT&&($=t.R16F),B===t.UNSIGNED_BYTE&&($=t.R8),B===t.UNSIGNED_SHORT&&ue&&($=ue.R16_EXT),B===t.SHORT&&ue&&($=ue.R16_SNORM_EXT)),S===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.R8UI),B===t.UNSIGNED_SHORT&&($=t.R16UI),B===t.UNSIGNED_INT&&($=t.R32UI),B===t.BYTE&&($=t.R8I),B===t.SHORT&&($=t.R16I),B===t.INT&&($=t.R32I)),S===t.RG&&(B===t.FLOAT&&($=t.RG32F),B===t.HALF_FLOAT&&($=t.RG16F),B===t.UNSIGNED_BYTE&&($=t.RG8),B===t.UNSIGNED_SHORT&&ue&&($=ue.RG16_EXT),B===t.SHORT&&ue&&($=ue.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RG8UI),B===t.UNSIGNED_SHORT&&($=t.RG16UI),B===t.UNSIGNED_INT&&($=t.RG32UI),B===t.BYTE&&($=t.RG8I),B===t.SHORT&&($=t.RG16I),B===t.INT&&($=t.RG32I)),S===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RGB8UI),B===t.UNSIGNED_SHORT&&($=t.RGB16UI),B===t.UNSIGNED_INT&&($=t.RGB32UI),B===t.BYTE&&($=t.RGB8I),B===t.SHORT&&($=t.RGB16I),B===t.INT&&($=t.RGB32I)),S===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RGBA8UI),B===t.UNSIGNED_SHORT&&($=t.RGBA16UI),B===t.UNSIGNED_INT&&($=t.RGBA32UI),B===t.BYTE&&($=t.RGBA8I),B===t.SHORT&&($=t.RGBA16I),B===t.INT&&($=t.RGBA32I)),S===t.RGB&&(B===t.UNSIGNED_SHORT&&ue&&($=ue.RGB16_EXT),B===t.SHORT&&ue&&($=ue.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),S===t.RGBA){let j=ae?$o:Ke.getTransfer(Q);B===t.FLOAT&&($=t.RGBA32F),B===t.HALF_FLOAT&&($=t.RGBA16F),B===t.UNSIGNED_BYTE&&($=j===ot?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&ue&&($=ue.RGBA16_EXT),B===t.SHORT&&ue&&($=ue.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function C(T,S){let B;return T?S===null||S===vi||S===Da?B=t.DEPTH24_STENCIL8:S===_i?B=t.DEPTH32F_STENCIL8:S===La&&(B=t.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vi||S===Da?B=t.DEPTH_COMPONENT24:S===_i?B=t.DEPTH_COMPONENT32F:S===La&&(B=t.DEPTH_COMPONENT16),B}function E(T,S){return u(T)===!0||T.isFramebufferTexture&&T.minFilter!==qt&&T.minFilter!==Jt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function R(T){let S=T.target;S.removeEventListener("dispose",R),A(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&f.delete(S)}function x(T){let S=T.target;S.removeEventListener("dispose",x),P(S)}function A(T){let S=i.get(T);if(S.__webglInit===void 0)return;let B=T.source,K=m.get(B);if(K){let Q=K[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(T),Object.keys(K).length===0&&m.delete(B)}i.remove(T)}function I(T){let S=i.get(T);t.deleteTexture(S.__webglTexture);let B=T.source,K=m.get(B);delete K[S.__cacheKey],a.memory.textures--}function P(T){let S=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let Q=0;Q<S.__webglFramebuffer[K].length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[K][Q]);else t.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)t.deleteFramebuffer(S.__webglFramebuffer[K]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let B=T.textures;for(let K=0,Q=B.length;K<Q;K++){let ae=i.get(B[K]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(B[K])}i.remove(T)}let k=0;function X(){k=0}function W(){return k}function F(T){k=T}function O(){let T=k;return T>=r.maxTextures&&De("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),k+=1,T}function H(T){let S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function Z(T,S){let B=i.get(T);if(T.isVideoTexture&&st(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let K=T.image;if(K===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(B,T,S);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+S)}function ee(T,S){let B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Ce(B,T,S);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+S)}function le(T,S){let B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Ce(B,T,S);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+S)}function ye(T,S){let B=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&B.__version!==T.version){Ue(B,T,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+S)}let we={[Uu]:t.REPEAT,[Ii]:t.CLAMP_TO_EDGE,[Fu]:t.MIRRORED_REPEAT},$e={[qt]:t.NEAREST,[ty]:t.NEAREST_MIPMAP_NEAREST,[fl]:t.NEAREST_MIPMAP_LINEAR,[Jt]:t.LINEAR,[cd]:t.LINEAR_MIPMAP_NEAREST,[Jr]:t.LINEAR_MIPMAP_LINEAR},Qe={[ry]:t.NEVER,[cy]:t.ALWAYS,[sy]:t.LESS,[$d]:t.LEQUAL,[ay]:t.EQUAL,[Yd]:t.GEQUAL,[oy]:t.GREATER,[ly]:t.NOTEQUAL};function de(T,S){if(S.type===_i&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Jt||S.magFilter===cd||S.magFilter===fl||S.magFilter===Jr||S.minFilter===Jt||S.minFilter===cd||S.minFilter===fl||S.minFilter===Jr)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,we[S.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,we[S.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,we[S.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,$e[S.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,$e[S.minFilter]),S.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,Qe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===qt||S.minFilter!==fl&&S.minFilter!==Jr||S.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function q(T,S){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",R));let K=S.source,Q=m.get(K);Q===void 0&&(Q={},m.set(K,Q));let ae=H(S);if(ae!==T.__cacheKey){Q[ae]===void 0&&(Q[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[ae].usedTimes++;let ue=Q[T.__cacheKey];ue!==void 0&&(Q[T.__cacheKey].usedTimes--,ue.usedTimes===0&&I(S)),T.__cacheKey=ae,T.__webglTexture=Q[ae].texture}return B}function ne(T,S,B){return Math.floor(Math.floor(T/B)/S)}function re(T,S,B,K){let ae=T.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,B,K,S.data);else{ae.sort((_e,ce)=>_e.start-ce.start);let ue=0;for(let _e=1;_e<ae.length;_e++){let ce=ae[ue],oe=ae[_e],ke=ce.start+ce.count,ve=ne(oe.start,S.width,4),Ee=ne(ce.start,S.width,4);oe.start<=ke+1&&ve===Ee&&ne(oe.start+oe.count-1,S.width,4)===ve?ce.count=Math.max(ce.count,oe.start+oe.count-ce.start):(++ue,ae[ue]=oe)}ae.length=ue+1;let $=n.getParameter(t.UNPACK_ROW_LENGTH),j=n.getParameter(t.UNPACK_SKIP_PIXELS),me=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let _e=0,ce=ae.length;_e<ce;_e++){let oe=ae[_e],ke=Math.floor(oe.start/4),ve=Math.ceil(oe.count/4),Ee=ke%S.width,L=Math.floor(ke/S.width),se=ve,Y=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,Ee,L,se,Y,B,K,S.data)}T.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,$),n.pixelStorei(t.UNPACK_SKIP_PIXELS,j),n.pixelStorei(t.UNPACK_SKIP_ROWS,me)}}function Ce(T,S,B){let K=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=t.TEXTURE_3D);let Q=q(T,S),ae=S.source;n.bindTexture(K,T.__webglTexture,t.TEXTURE0+B);let ue=i.get(ae);if(ae.version!==ue.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let Y=Ke.getPrimaries(Ke.workingColorSpace),he=S.colorSpace===dr?null:Ke.getPrimaries(S.colorSpace),te=S.colorSpace===dr||Y===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let j=g(S.image,!1,r.maxTextureSize);j=fe(S,j);let me=s.convert(S.format,S.colorSpace),_e=s.convert(S.type),ce=M(S.internalFormat,me,_e,S.normalized,S.colorSpace,S.isVideoTexture);de(K,S);let oe,ke=S.mipmaps,ve=S.isVideoTexture!==!0,Ee=ue.__version===void 0||Q===!0,L=ae.dataReady,se=E(S,j);if(S.isDepthTexture)ce=C(S.format===Qr,S.type),Ee&&(ve?n.texStorage2D(t.TEXTURE_2D,1,ce,j.width,j.height):n.texImage2D(t.TEXTURE_2D,0,ce,j.width,j.height,0,me,_e,null));else if(S.isDataTexture)if(ke.length>0){ve&&Ee&&n.texStorage2D(t.TEXTURE_2D,se,ce,ke[0].width,ke[0].height);for(let Y=0,he=ke.length;Y<he;Y++)oe=ke[Y],ve?L&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,oe.width,oe.height,me,_e,oe.data):n.texImage2D(t.TEXTURE_2D,Y,ce,oe.width,oe.height,0,me,_e,oe.data);S.generateMipmaps=!1}else ve?(Ee&&n.texStorage2D(t.TEXTURE_2D,se,ce,j.width,j.height),L&&re(S,j,me,_e)):n.texImage2D(t.TEXTURE_2D,0,ce,j.width,j.height,0,me,_e,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ve&&Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,ce,ke[0].width,ke[0].height,j.depth);for(let Y=0,he=ke.length;Y<he;Y++)if(oe=ke[Y],S.format!==ni)if(me!==null)if(ve){if(L)if(S.layerUpdates.size>0){let te=$m(oe.width,oe.height,S.format,S.type);for(let J of S.layerUpdates){let Te=oe.data.subarray(J*te/oe.data.BYTES_PER_ELEMENT,(J+1)*te/oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,J,oe.width,oe.height,1,me,Te)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,oe.width,oe.height,j.depth,me,oe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,ce,oe.width,oe.height,j.depth,0,oe.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,oe.width,oe.height,j.depth,me,_e,oe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,ce,oe.width,oe.height,j.depth,0,me,_e,oe.data)}else{ve&&Ee&&n.texStorage2D(t.TEXTURE_2D,se,ce,ke[0].width,ke[0].height);for(let Y=0,he=ke.length;Y<he;Y++)oe=ke[Y],S.format!==ni?me!==null?ve?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,oe.width,oe.height,me,oe.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,ce,oe.width,oe.height,0,oe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?L&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,oe.width,oe.height,me,_e,oe.data):n.texImage2D(t.TEXTURE_2D,Y,ce,oe.width,oe.height,0,me,_e,oe.data)}else if(S.isDataArrayTexture)if(ve){if(Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,ce,j.width,j.height,j.depth),L)if(S.layerUpdates.size>0){let Y=$m(j.width,j.height,S.format,S.type);for(let he of S.layerUpdates){let te=j.data.subarray(he*Y/j.data.BYTES_PER_ELEMENT,(he+1)*Y/j.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,j.width,j.height,1,me,_e,te)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,me,_e,j.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ce,j.width,j.height,j.depth,0,me,_e,j.data);else if(S.isData3DTexture)ve?(Ee&&n.texStorage3D(t.TEXTURE_3D,se,ce,j.width,j.height,j.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,me,_e,j.data)):n.texImage3D(t.TEXTURE_3D,0,ce,j.width,j.height,j.depth,0,me,_e,j.data);else if(S.isFramebufferTexture){if(Ee)if(ve)n.texStorage2D(t.TEXTURE_2D,se,ce,j.width,j.height);else{let Y=j.width,he=j.height;for(let te=0;te<se;te++)n.texImage2D(t.TEXTURE_2D,te,ce,Y,he,0,me,_e,null),Y>>=1,he>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){let Y=t.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),j.parentNode!==Y){Y.appendChild(j),f.add(S),Y.onpaint=Oe=>{let pt=Oe.changedElements;for(let at of f)pt.includes(at.image)&&(at.needsUpdate=!0)},Y.requestPaint();return}let he=0,te=t.RGBA,J=t.RGBA,Te=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,he,te,J,Te,j),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ke.length>0){if(ve&&Ee){let Y=bt(ke[0]);n.texStorage2D(t.TEXTURE_2D,se,ce,Y.width,Y.height)}for(let Y=0,he=ke.length;Y<he;Y++)oe=ke[Y],ve?L&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,me,_e,oe):n.texImage2D(t.TEXTURE_2D,Y,ce,me,_e,oe);S.generateMipmaps=!1}else if(ve){if(Ee){let Y=bt(j);n.texStorage2D(t.TEXTURE_2D,se,ce,Y.width,Y.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,_e,j)}else n.texImage2D(t.TEXTURE_2D,0,ce,me,_e,j);u(S)&&p(K),ue.__version=ae.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Ue(T,S,B){if(S.image.length!==6)return;let K=q(T,S),Q=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+B);let ae=i.get(Q);if(Q.version!==ae.__version||K===!0){n.activeTexture(t.TEXTURE0+B);let ue=Ke.getPrimaries(Ke.workingColorSpace),$=S.colorSpace===dr?null:Ke.getPrimaries(S.colorSpace),j=S.colorSpace===dr||ue===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let me=S.isCompressedTexture||S.image[0].isCompressedTexture,_e=S.image[0]&&S.image[0].isDataTexture,ce=[];for(let J=0;J<6;J++)!me&&!_e?ce[J]=g(S.image[J],!0,r.maxCubemapSize):ce[J]=_e?S.image[J].image:S.image[J],ce[J]=fe(S,ce[J]);let oe=ce[0],ke=s.convert(S.format,S.colorSpace),ve=s.convert(S.type),Ee=M(S.internalFormat,ke,ve,S.normalized,S.colorSpace),L=S.isVideoTexture!==!0,se=ae.__version===void 0||K===!0,Y=Q.dataReady,he=E(S,oe);de(t.TEXTURE_CUBE_MAP,S);let te;if(me){L&&se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ee,oe.width,oe.height);for(let J=0;J<6;J++){te=ce[J].mipmaps;for(let Te=0;Te<te.length;Te++){let Oe=te[Te];S.format!==ni?ke!==null?L?Y&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,Oe.width,Oe.height,ke,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,Ee,Oe.width,Oe.height,0,Oe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,Oe.width,Oe.height,ke,ve,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,Ee,Oe.width,Oe.height,0,ke,ve,Oe.data)}}}else{if(te=S.mipmaps,L&&se){te.length>0&&he++;let J=bt(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ee,J.width,J.height)}for(let J=0;J<6;J++)if(_e){L?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ce[J].width,ce[J].height,ke,ve,ce[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ee,ce[J].width,ce[J].height,0,ke,ve,ce[J].data);for(let Te=0;Te<te.length;Te++){let pt=te[Te].image[J].image;L?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,pt.width,pt.height,ke,ve,pt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,Ee,pt.width,pt.height,0,ke,ve,pt.data)}}else{L?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ke,ve,ce[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ee,ke,ve,ce[J]);for(let Te=0;Te<te.length;Te++){let Oe=te[Te];L?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,ke,ve,Oe.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,Ee,ke,ve,Oe.image[J])}}}u(S)&&p(t.TEXTURE_CUBE_MAP),ae.__version=Q.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Ne(T,S,B,K,Q,ae){let ue=s.convert(B.format,B.colorSpace),$=s.convert(B.type),j=M(B.internalFormat,ue,$,B.normalized,B.colorSpace),me=i.get(S),_e=i.get(B);if(_e.__renderTarget=S,!me.__hasExternalTextures){let ce=Math.max(1,S.width>>ae),oe=Math.max(1,S.height>>ae);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,ae,j,ce,oe,S.depth,0,ue,$,null):n.texImage2D(Q,ae,j,ce,oe,0,ue,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),ze(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,Q,_e.__webglTexture,0,Mt(S)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,Q,_e.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function nt(T,S,B){if(t.bindRenderbuffer(t.RENDERBUFFER,T),S.depthBuffer){let K=S.depthTexture,Q=K&&K.isDepthTexture?K.type:null,ae=C(S.stencilBuffer,Q),ue=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ze(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Mt(S),ae,S.width,S.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Mt(S),ae,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ae,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,T)}else{let K=S.textures;for(let Q=0;Q<K.length;Q++){let ae=K[Q],ue=s.convert(ae.format,ae.colorSpace),$=s.convert(ae.type),j=M(ae.internalFormat,ue,$,ae.normalized,ae.colorSpace);ze(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Mt(S),j,S.width,S.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Mt(S),j,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,j,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(T,S,B){let K=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(S.depthTexture);if(Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),de(t.TEXTURE_CUBE_MAP,S.depthTexture);let me=s.convert(S.depthTexture.format),_e=s.convert(S.depthTexture.type),ce;S.depthTexture.format===Ni?ce=t.DEPTH_COMPONENT24:S.depthTexture.format===Qr&&(ce=t.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ce,S.width,S.height,0,me,_e,null)}}else Z(S.depthTexture,0);let ae=Q.__webglTexture,ue=Mt(S),$=K?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,j=S.depthTexture.format===Qr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ni)ze(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,$,ae,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,j,$,ae,0);else if(S.depthTexture.format===Qr)ze(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,$,ae,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,j,$,ae,0);else throw new Error("Unknown depthTexture format")}function rt(T){let S=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){let K=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=K}if(T.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let K=0;K<6;K++)He(S.__webglFramebuffer[K],T,K);else{let K=T.texture.mipmaps;K&&K.length>0?He(S.__webglFramebuffer[0],T,0):He(S.__webglFramebuffer,T,0)}else if(B){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=t.createRenderbuffer(),nt(S.__webglDepthbuffer[K],T,!1);else{let Q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ae)}}else{let K=T.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),nt(S.__webglDepthbuffer,T,!1);else{let Q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ae)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ut(T,S,B){let K=i.get(T);S!==void 0&&Ne(K.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&rt(T)}function We(T){let S=T.texture,B=i.get(T),K=i.get(S);T.addEventListener("dispose",x);let Q=T.textures,ae=T.isWebGLCubeRenderTarget===!0,ue=Q.length>1;if(ue||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=S.version,a.memory.textures++),ae){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let j=0;j<S.mipmaps.length;j++)B.__webglFramebuffer[$][j]=t.createFramebuffer()}else B.__webglFramebuffer[$]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)B.__webglFramebuffer[$]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ue)for(let $=0,j=Q.length;$<j;$++){let me=i.get(Q[$]);me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture(),a.memory.textures++)}if(T.samples>0&&ze(T)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<Q.length;$++){let j=Q[$];B.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let me=s.convert(j.format,j.colorSpace),_e=s.convert(j.type),ce=M(j.internalFormat,me,_e,j.normalized,j.colorSpace,T.isXRRenderTarget===!0),oe=Mt(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,ce,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,B.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),nt(B.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),de(t.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)Ne(B.__webglFramebuffer[$][j],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else Ne(B.__webglFramebuffer[$],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);u(S)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let $=0,j=Q.length;$<j;$++){let me=Q[$],_e=i.get(me),ce=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,_e.__webglTexture),de(ce,me),Ne(B.__webglFramebuffer,T,me,t.COLOR_ATTACHMENT0+$,ce,0),u(me)&&p(ce)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,K.__webglTexture),de($,S),S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)Ne(B.__webglFramebuffer[j],T,S,t.COLOR_ATTACHMENT0,$,j);else Ne(B.__webglFramebuffer,T,S,t.COLOR_ATTACHMENT0,$,0);u(S)&&p($),n.unbindTexture()}T.depthBuffer&&rt(T)}function ft(T){let S=T.textures;for(let B=0,K=S.length;B<K;B++){let Q=S[B];if(u(Q)){let ae=_(T),ue=i.get(Q).__webglTexture;n.bindTexture(ae,ue),p(ae),n.unbindTexture()}}}let vt=[],un=[];function D(T){if(T.samples>0){if(ze(T)===!1){let S=T.textures,B=T.width,K=T.height,Q=t.COLOR_BUFFER_BIT,ae=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(T),$=S.length>1;if($)for(let me=0;me<S.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let j=T.texture.mipmaps;j&&j.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let me=0;me<S.length;me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[me]);let _e=i.get(S[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_e,0)}t.blitFramebuffer(0,0,B,K,0,0,B,K,Q,t.NEAREST),l===!0&&(vt.length=0,un.length=0,vt.push(t.COLOR_ATTACHMENT0+me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(vt.push(ae),un.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,un)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,vt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let me=0;me<S.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,ue.__webglColorRenderbuffer[me]);let _e=i.get(S[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,_e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let S=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Mt(T){return Math.min(r.maxSamples,T.samples)}function ze(T){let S=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function st(T){let S=a.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function fe(T,S){let B=T.colorSpace,K=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==qo&&B!==dr&&(Ke.getTransfer(B)===ot?(K!==ni||Q!==Tn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",B)),S}function bt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=X,this.getTextureUnits=W,this.setTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=ee,this.setTexture3D=le,this.setTextureCube=ye,this.rebindTextures=ut,this.setupRenderTarget=We,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=ze,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function dC(t,e){function n(i,r=dr){let s,a=Ke.getTransfer(r);if(i===Tn)return t.UNSIGNED_BYTE;if(i===dd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===hd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===km)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Om)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Um)return t.BYTE;if(i===Fm)return t.SHORT;if(i===La)return t.UNSIGNED_SHORT;if(i===ud)return t.INT;if(i===vi)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===ki)return t.HALF_FLOAT;if(i===Bm)return t.ALPHA;if(i===zm)return t.RGB;if(i===ni)return t.RGBA;if(i===Ni)return t.DEPTH_COMPONENT;if(i===Qr)return t.DEPTH_STENCIL;if(i===Vm)return t.RED;if(i===fd)return t.RED_INTEGER;if(i===es)return t.RG;if(i===pd)return t.RG_INTEGER;if(i===md)return t.RGBA_INTEGER;if(i===pl||i===ml||i===gl||i===xl)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gd||i===xd||i===vd||i===_d)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_d)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yd||i===Sd||i===Md||i===bd||i===wd||i===vl||i===Ed)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yd||i===Sd)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Md)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===bd)return s.COMPRESSED_R11_EAC;if(i===wd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===vl)return s.COMPRESSED_RG11_EAC;if(i===Ed)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Td||i===Ad||i===Cd||i===Rd||i===Pd||i===Id||i===Nd||i===Ld||i===Dd||i===Ud||i===Fd||i===kd||i===Od||i===Bd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Td)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ad)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Id)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ld)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ud)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Od)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zd||i===Vd||i===Gd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zd)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hd||i===Wd||i===_l||i===Xd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Hd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_l)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Da?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var hC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fC=`
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

}`,og=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new nl(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Gn({vertexShader:hC,fragmentShader:fC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new mn(new rl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lg=class extends Li{constructor(e,n){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,v=null,b=typeof XRWebGLBinding<"u",g=new og,u={},p=n.getContextAttributes(),_=null,M=null,C=[],E=[],R=new it,x=null,A=new Zt;A.viewport=new Ct;let I=new Zt;I.viewport=new Ct;let P=[A,I],k=new ad,X=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=C[q];return ne===void 0&&(ne=new Ta,C[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=C[q];return ne===void 0&&(ne=new Ta,C[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=C[q];return ne===void 0&&(ne=new Ta,C[q]=ne),ne.getHandSpace()};function F(q){let ne=E.indexOf(q.inputSource);if(ne===-1)return;let re=C[ne];re!==void 0&&(re.update(q.inputSource,q.frame,c||a),re.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",H);for(let q=0;q<C.length;q++){let ne=E[q];ne!==null&&(E[q]=null,C[q].disconnect(ne))}X=null,W=null,g.reset();for(let q in u)delete u[q];e.setRenderTarget(_),m=null,d=null,f=null,r=null,M=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",O),r.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ce=null,Ue=null;p.depth&&(Ue=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=p.stencil?Qr:Ni,Ce=p.stencil?Da:vi);let Ne={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new zn(d.textureWidth,d.textureHeight,{format:ni,type:Tn,depthTexture:new ur(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let re={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new zn(m.framebufferWidth,m.framebufferHeight,{format:ni,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(q){for(let ne=0;ne<q.removed.length;ne++){let re=q.removed[ne],Ce=E.indexOf(re);Ce>=0&&(E[Ce]=null,C[Ce].disconnect(re))}for(let ne=0;ne<q.added.length;ne++){let re=q.added[ne],Ce=E.indexOf(re);if(Ce===-1){for(let Ne=0;Ne<C.length;Ne++)if(Ne>=E.length){E.push(re),Ce=Ne;break}else if(E[Ne]===null){E[Ne]=re,Ce=Ne;break}if(Ce===-1)break}let Ue=C[Ce];Ue&&Ue.connect(re)}}let Z=new V,ee=new V;function le(q,ne,re){Z.setFromMatrixPosition(ne.matrixWorld),ee.setFromMatrixPosition(re.matrixWorld);let Ce=Z.distanceTo(ee),Ue=ne.projectionMatrix.elements,Ne=re.projectionMatrix.elements,nt=Ue[14]/(Ue[10]-1),He=Ue[14]/(Ue[10]+1),rt=(Ue[9]+1)/Ue[5],ut=(Ue[9]-1)/Ue[5],We=(Ue[8]-1)/Ue[0],ft=(Ne[8]+1)/Ne[0],vt=nt*We,un=nt*ft,D=Ce/(-We+ft),Mt=D*-We;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Mt),q.translateZ(D),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ue[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let ze=nt+D,st=He+D,fe=vt-Mt,bt=un+(Ce-Mt),T=rt*He/st*ze,S=ut*He/st*ze;q.projectionMatrix.makePerspective(fe,bt,T,S,ze,st),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ye(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ne=q.near,re=q.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(re=g.depthFar)),k.near=I.near=A.near=ne,k.far=I.far=A.far=re,(X!==k.near||W!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),X=k.near,W=k.far),k.layers.mask=q.layers.mask|6,A.layers.mask=k.layers.mask&-5,I.layers.mask=k.layers.mask&-3;let Ce=q.parent,Ue=k.cameras;ye(k,Ce);for(let Ne=0;Ne<Ue.length;Ne++)ye(Ue[Ne],Ce);Ue.length===2?le(k,A,I):k.projectionMatrix.copy(A.projectionMatrix),we(q,k,Ce)};function we(q,ne,re){re===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(re.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Bu*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(q){return u[q]};let $e=null;function Qe(q,ne){if(h=ne.getViewerPose(c||a),v=ne,h!==null){let re=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Ce=!1;re.length!==k.cameras.length&&(k.cameras.length=0,Ce=!0);for(let He=0;He<re.length;He++){let rt=re[He],ut=null;if(m!==null)ut=m.getViewport(rt);else{let ft=f.getViewSubImage(d,rt);ut=ft.viewport,He===0&&(e.setRenderTargetTextures(M,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(M))}let We=P[He];We===void 0&&(We=new Zt,We.layers.enable(He),We.viewport=new Ct,P[He]=We),We.matrix.fromArray(rt.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(rt.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ut.x,ut.y,ut.width,ut.height),He===0&&(k.matrix.copy(We.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ce===!0&&k.cameras.push(We)}let Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){f=i.getBinding();let He=f.getDepthInformation(re[0]);He&&He.isValid&&He.texture&&g.init(He,r.renderState)}if(Ue&&Ue.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let He=0;He<re.length;He++){let rt=re[He].camera;if(rt){let ut=u[rt];ut||(ut=new nl,u[rt]=ut);let We=f.getCameraImage(rt);ut.sourceTexture=We}}}}for(let re=0;re<C.length;re++){let Ce=E[re],Ue=C[re];Ce!==null&&Ue!==void 0&&Ue.update(Ce,ne,c||a)}$e&&$e(q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}let de=new By;de.setAnimationLoop(Qe),this.setAnimationLoop=function(q){$e=q},this.dispose=function(){}}},pC=new It,Xy=new Be;Xy.set(-1,0,0,0,1,0,0,0,1);function mC(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,Wm(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,p,_,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(g,u):u.isMeshLambertMaterial?(s(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(g,u),f(g,u)):u.isMeshPhongMaterial?(s(g,u),h(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(g,u),d(g,u),u.isMeshPhysicalMaterial&&m(g,u,M)):u.isMeshMatcapMaterial?(s(g,u),v(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),b(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,p,_):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===gn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===gn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);let p=e.get(u),_=p.envMap,M=p.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(pC.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Xy),g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,p,_){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*p,g.scale.value=_*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function d(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,p){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===gn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=p.texture,g.transmissionSamplerSize.value.set(p.width,p.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,u){u.matcap&&(g.matcap.value=u.matcap)}function b(g,u){let p=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(p.matrixWorld),g.nearDistance.value=p.shadow.camera.near,g.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gC(t,e,n,i){let r={},s={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,_){let M=_.program;i.uniformBlockBinding(p,M)}function c(p,_){let M=r[p.id];M===void 0&&(v(p),M=h(p),r[p.id]=M,p.addEventListener("dispose",g));let C=_.program;i.updateUBOMapping(p,C);let E=e.render.frame;s[p.id]!==E&&(d(p),s[p.id]=E)}function h(p){let _=f();p.__bindingPointIndex=_;let M=t.createBuffer(),C=p.__size,E=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function f(){for(let p=0;p<o;p++)if(a.indexOf(p)===-1)return a.push(p),p;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(p){let _=r[p.id],M=p.uniforms,C=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let E=0,R=M.length;E<R;E++){let x=Array.isArray(M[E])?M[E]:[M[E]];for(let A=0,I=x.length;A<I;A++){let P=x[A];if(m(P,E,A,C)===!0){let k=P.__offset,X=Array.isArray(P.value)?P.value:[P.value],W=0;for(let F=0;F<X.length;F++){let O=X[F],H=b(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,k+W,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):ArrayBuffer.isView(O)?P.__data.set(new O.constructor(O.buffer,O.byteOffset,P.__data.length)):(O.toArray(P.__data,W),W+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(p,_,M,C){let E=p.value,R=_+"_"+M;if(C[R]===void 0)return typeof E=="number"||typeof E=="boolean"?C[R]=E:ArrayBuffer.isView(E)?C[R]=E.slice():C[R]=E.clone(),!0;{let x=C[R];if(typeof E=="number"||typeof E=="boolean"){if(x!==E)return C[R]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(x.equals(E)===!1)return x.copy(E),!0}}return!1}function v(p){let _=p.uniforms,M=0,C=16;for(let R=0,x=_.length;R<x;R++){let A=Array.isArray(_[R])?_[R]:[_[R]];for(let I=0,P=A.length;I<P;I++){let k=A[I],X=Array.isArray(k.value)?k.value:[k.value];for(let W=0,F=X.length;W<F;W++){let O=X[W],H=b(O),Z=M%C,ee=Z%H.boundary,le=Z+ee;M+=ee,le!==0&&C-le<H.storage&&(M+=C-le),k.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=H.storage}}}let E=M%C;return E>0&&(M+=C-E),p.__size=M,p.__cache={},this}function b(p){let _={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(_.boundary=4,_.storage=4):p.isVector2?(_.boundary=8,_.storage=8):p.isVector3||p.isColor?(_.boundary=16,_.storage=12):p.isVector4?(_.boundary=16,_.storage=16):p.isMatrix3?(_.boundary=48,_.storage=48):p.isMatrix4?(_.boundary=64,_.storage=64):p.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(_.boundary=16,_.storage=p.byteLength):De("WebGLRenderer: Unsupported uniform value type.",p),_}function g(p){let _=p.target;_.removeEventListener("dispose",g);let M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(let p in r)t.deleteBuffer(r[p]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}var xC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Oi=null;function vC(){return Oi===null&&(Oi=new Wu(xC,16,16,es,ki),Oi.name="DFG_LUT",Oi.minFilter=Jt,Oi.magFilter=Jt,Oi.wrapS=Ii,Oi.wrapT=Ii,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}var Qd=class{constructor(e={}){let{canvas:n=uy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Tn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;let b=m,g=new Set([md,pd,fd]),u=new Set([Tn,vi,La,Da,dd,hd]),p=new Uint32Array(4),_=new Int32Array(4),M=new V,C=null,E=null,R=[],x=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,P=!1,k=null;this._outputColorSpace=On;let X=0,W=0,F=null,O=-1,H=null,Z=new Ct,ee=new Ct,le=null,ye=new Je(0),we=0,$e=n.width,Qe=n.height,de=1,q=null,ne=null,re=new Ct(0,0,$e,Qe),Ce=new Ct(0,0,$e,Qe),Ue=!1,Ne=new Ca,nt=!1,He=!1,rt=new It,ut=new V,We=new Ct,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vt=!1;function un(){return F===null?de:1}let D=i;function Mt(w,N){return n.getContext(w,N)}try{let w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"184"}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",Te,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),D===null){let N="webgl2";if(D=Mt(N,w),D===null)throw Mt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Fe("WebGLRenderer: "+w.message),w}let ze,st,fe,bt,T,S,B,K,Q,ae,ue,$,j,me,_e,ce,oe,ke,ve,Ee,L,se,Y;function he(){ze=new ET(D),ze.init(),L=new dC(D,ze),st=new xT(D,ze,e,L),fe=new cC(D,ze),st.reversedDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),bt=new CT(D),T=new KA,S=new uC(D,ze,fe,T,st,L,bt),B=new wT(I),K=new Nb(D),se=new mT(D,K),Q=new TT(D,K,bt,se),ae=new PT(D,Q,K,se,bt),ke=new RT(D,st,S),_e=new vT(T),ue=new YA(I,B,ze,st,se,_e),$=new mC(I,T),j=new ZA,me=new iC(ze),oe=new pT(I,B,fe,ae,v,l),ce=new lC(I,ae,st),Y=new gC(D,bt,st,fe),ve=new gT(D,ze,bt),Ee=new AT(D,ze,bt),bt.programs=ue.programs,I.capabilities=st,I.extensions=ze,I.properties=T,I.renderLists=j,I.shadowMap=ce,I.state=fe,I.info=bt}he(),b!==Tn&&(A=new NT(b,n.width,n.height,r,s));let te=new lg(I,D);this.xr=te,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=ze.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ze.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(w){w!==void 0&&(de=w,this.setSize($e,Qe,!1))},this.getSize=function(w){return w.set($e,Qe)},this.setSize=function(w,N,U=!0){if(te.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=w,Qe=N,n.width=Math.floor(w*de),n.height=Math.floor(N*de),U===!0&&(n.style.width=w+"px",n.style.height=N+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set($e*de,Qe*de).floor()},this.setDrawingBufferSize=function(w,N,U){$e=w,Qe=N,de=U,n.width=Math.floor(w*U),n.height=Math.floor(N*U),this.setViewport(0,0,w,N)},this.setEffects=function(w){if(b===Tn){Fe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let N=0;N<w.length;N++)if(w[N].isOutputPass===!0){De("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Z)},this.getViewport=function(w){return w.copy(re)},this.setViewport=function(w,N,U,z){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,N,U,z),fe.viewport(Z.copy(re).multiplyScalar(de).round())},this.getScissor=function(w){return w.copy(Ce)},this.setScissor=function(w,N,U,z){w.isVector4?Ce.set(w.x,w.y,w.z,w.w):Ce.set(w,N,U,z),fe.scissor(ee.copy(Ce).multiplyScalar(de).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(w){fe.setScissorTest(Ue=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){ne=w},this.getClearColor=function(w){return w.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(w=!0,N=!0,U=!0){let z=0;if(w){let G=!1;if(F!==null){let xe=F.texture.format;G=g.has(xe)}if(G){let xe=F.texture.type,Me=u.has(xe),ge=oe.getClearColor(),Ae=oe.getClearAlpha(),Re=ge.r,Ve=ge.g,qe=ge.b;Me?(p[0]=Re,p[1]=Ve,p[2]=qe,p[3]=Ae,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=Re,_[1]=Ve,_[2]=qe,_[3]=Ae,D.clearBufferiv(D.COLOR,0,_))}else z|=D.COLOR_BUFFER_BIT}N&&(z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),U&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),k=w},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",Te,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),oe.dispose(),j.dispose(),me.dispose(),T.dispose(),B.dispose(),ae.dispose(),se.dispose(),Y.dispose(),ue.dispose(),te.dispose(),te.removeEventListener("sessionstart",Ga),te.removeEventListener("sessionend",Ll),Hi.stop()};function J(w){w.preventDefault(),Hm("WebGLRenderer: Context Lost."),P=!0}function Te(){Hm("WebGLRenderer: Context Restored."),P=!1;let w=bt.autoReset,N=ce.enabled,U=ce.autoUpdate,z=ce.needsUpdate,G=ce.type;he(),bt.autoReset=w,ce.enabled=N,ce.autoUpdate=U,ce.needsUpdate=z,ce.type=G}function Oe(w){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function pt(w){let N=w.target;N.removeEventListener("dispose",pt),at(N)}function at(w){Xn(w),T.remove(w)}function Xn(w){let N=T.get(w).programs;N!==void 0&&(N.forEach(function(U){ue.releaseProgram(U)}),w.isShaderMaterial&&ue.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,U,z,G,xe){N===null&&(N=ft);let Me=G.isMesh&&G.matrixWorld.determinant()<0,ge=xh(w,N,U,z,G);fe.setMaterial(z,Me);let Ae=U.index,Re=1;if(z.wireframe===!0){if(Ae=Q.getWireframeAttribute(U),Ae===void 0)return;Re=2}let Ve=U.drawRange,qe=U.attributes.position,Ie=Ve.start*Re,ct=(Ve.start+Ve.count)*Re;xe!==null&&(Ie=Math.max(Ie,xe.start*Re),ct=Math.min(ct,(xe.start+xe.count)*Re)),Ae!==null?(Ie=Math.max(Ie,0),ct=Math.min(ct,Ae.count)):qe!=null&&(Ie=Math.max(Ie,0),ct=Math.min(ct,qe.count));let Nt=ct-Ie;if(Nt<0||Nt===1/0)return;se.setup(G,z,ge,U,Ae);let Rt,dt=ve;if(Ae!==null&&(Rt=K.get(Ae),dt=Ee,dt.setIndex(Rt)),G.isMesh)z.wireframe===!0?(fe.setLineWidth(z.wireframeLinewidth*un()),dt.setMode(D.LINES)):dt.setMode(D.TRIANGLES);else if(G.isLine){let Qt=z.linewidth;Qt===void 0&&(Qt=1),fe.setLineWidth(Qt*un()),G.isLineSegments?dt.setMode(D.LINES):G.isLineLoop?dt.setMode(D.LINE_LOOP):dt.setMode(D.LINE_STRIP)}else G.isPoints?dt.setMode(D.POINTS):G.isSprite&&dt.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(ze.get("WEBGL_multi_draw"))dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Qt=G._multiDrawStarts,Se=G._multiDrawCounts,Rn=G._multiDrawCount,et=Ae?K.get(Ae).bytesPerElement:1,qn=T.get(z).currentProgram.getUniforms();for(let Si=0;Si<Rn;Si++)qn.setValue(D,"_gl_DrawID",Si),dt.render(Qt[Si]/et,Se[Si])}else if(G.isInstancedMesh)dt.renderInstances(Ie,Nt,G.count);else if(U.isInstancedBufferGeometry){let Qt=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,Se=Math.min(U.instanceCount,Qt);dt.renderInstances(Ie,Nt,Se)}else dt.render(Ie,Nt)};function An(w,N,U){w.transparent===!0&&w.side===Ui&&w.forceSinglePass===!1?(w.side=gn,w.needsUpdate=!0,hr(w,N,U),w.side=lr,w.needsUpdate=!0,hr(w,N,U),w.side=Ui):hr(w,N,U)}this.compile=function(w,N,U=null){U===null&&(U=w),E=me.get(U),E.init(N),x.push(E),U.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),w!==U&&w.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights();let z=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let xe=G.material;if(xe)if(Array.isArray(xe))for(let Me=0;Me<xe.length;Me++){let ge=xe[Me];An(ge,U,G),z.add(ge)}else An(xe,U,G),z.add(xe)}),E=x.pop(),z},this.compileAsync=function(w,N,U=null){let z=this.compile(w,N,U);return new Promise(G=>{function xe(){if(z.forEach(function(Me){T.get(Me).currentProgram.isReady()&&z.delete(Me)}),z.size===0){G(w);return}setTimeout(xe,10)}ze.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Va=null;function Nl(w){Va&&Va(w)}function Ga(){Hi.stop()}function Ll(){Hi.start()}let Hi=new By;Hi.setAnimationLoop(Nl),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(w){Va=w,te.setAnimationLoop(w),w===null?Hi.stop():Hi.start()},te.addEventListener("sessionstart",Ga),te.addEventListener("sessionend",Ll),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;k!==null&&k.renderStart(w,N);let U=te.enabled===!0&&te.isPresenting===!0,z=A!==null&&(F===null||U)&&A.begin(I,F);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(N),N=te.getCamera()),w.isScene===!0&&w.onBeforeRender(I,w,N,F),E=me.get(w,x.length),E.init(N),E.state.textureUnits=S.getTextureUnits(),x.push(E),rt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ne.setFromProjectionMatrix(rt,gi,N.reversedDepth),He=this.localClippingEnabled,nt=_e.init(this.clippingPlanes,He),C=j.get(w,R.length),C.init(),R.push(C),te.enabled===!0&&te.isPresenting===!0){let Me=I.xr.getDepthSensingMesh();Me!==null&&Ha(Me,N,-1/0,I.sortObjects)}Ha(w,N,0,I.sortObjects),C.finish(),I.sortObjects===!0&&C.sort(q,ne),vt=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,vt&&oe.addToRenderList(C,w),this.info.render.frame++,nt===!0&&_e.beginShadows();let G=E.state.shadowsArray;if(ce.render(G,w,N),nt===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&A.hasRenderPass())===!1){let Me=C.opaque,ge=C.transmissive;if(E.setupLights(),N.isArrayCamera){let Ae=N.cameras;if(ge.length>0)for(let Re=0,Ve=Ae.length;Re<Ve;Re++){let qe=Ae[Re];Wa(Me,ge,w,qe)}vt&&oe.render(w);for(let Re=0,Ve=Ae.length;Re<Ve;Re++){let qe=Ae[Re];Cn(C,w,qe,qe.viewport)}}else ge.length>0&&Wa(Me,ge,w,N),vt&&oe.render(w),Cn(C,w,N)}F!==null&&W===0&&(S.updateMultisampleRenderTarget(F),S.updateRenderTargetMipmap(F)),z&&A.end(I),w.isScene===!0&&w.onAfterRender(I,w,N),se.resetDefaultState(),O=-1,H=null,x.pop(),x.length>0?(E=x[x.length-1],S.setTextureUnits(E.state.textureUnits),nt===!0&&_e.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,k!==null&&k.renderEnd()};function Ha(w,N,U,z){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)U=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ne.intersectsSprite(w)){z&&We.setFromMatrixPosition(w.matrixWorld).applyMatrix4(rt);let Me=ae.update(w),ge=w.material;ge.visible&&C.push(w,Me,ge,U,We.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ne.intersectsObject(w))){let Me=ae.update(w),ge=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),We.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),We.copy(Me.boundingSphere.center)),We.applyMatrix4(w.matrixWorld).applyMatrix4(rt)),Array.isArray(ge)){let Ae=Me.groups;for(let Re=0,Ve=Ae.length;Re<Ve;Re++){let qe=Ae[Re],Ie=ge[qe.materialIndex];Ie&&Ie.visible&&C.push(w,Me,Ie,U,We.z,qe)}}else ge.visible&&C.push(w,Me,ge,U,We.z,null)}}let xe=w.children;for(let Me=0,ge=xe.length;Me<ge;Me++)Ha(xe[Me],N,U,z)}function Cn(w,N,U,z){let{opaque:G,transmissive:xe,transparent:Me}=w;E.setupLightsView(U),nt===!0&&_e.setGlobalState(I.clippingPlanes,U),z&&fe.viewport(Z.copy(z)),G.length>0&&is(G,N,U),xe.length>0&&is(xe,N,U),Me.length>0&&is(Me,N,U),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Wa(w,N,U,z){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Ie=ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new zn(1,1,{generateMipmaps:!0,type:Ie?ki:Tn,minFilter:Jr,samples:Math.max(4,st.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let xe=E.state.transmissionRenderTarget[z.id],Me=z.viewport||Z;xe.setSize(Me.z*I.transmissionResolutionScale,Me.w*I.transmissionResolutionScale);let ge=I.getRenderTarget(),Ae=I.getActiveCubeFace(),Re=I.getActiveMipmapLevel();I.setRenderTarget(xe),I.getClearColor(ye),we=I.getClearAlpha(),we<1&&I.setClearColor(16777215,.5),I.clear(),vt&&oe.render(U);let Ve=I.toneMapping;I.toneMapping=xi;let qe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),nt===!0&&_e.setGlobalState(I.clippingPlanes,z),is(w,U,z),S.updateMultisampleRenderTarget(xe),S.updateRenderTargetMipmap(xe),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ct=0,Nt=N.length;ct<Nt;ct++){let Rt=N[ct],{object:dt,geometry:Qt,material:Se,group:Rn}=Rt;if(Se.side===Ui&&dt.layers.test(z.layers)){let et=Se.side;Se.side=gn,Se.needsUpdate=!0,Dl(dt,U,z,Qt,Se,Rn),Se.side=et,Se.needsUpdate=!0,Ie=!0}}Ie===!0&&(S.updateMultisampleRenderTarget(xe),S.updateRenderTargetMipmap(xe))}I.setRenderTarget(ge,Ae,Re),I.setClearColor(ye,we),qe!==void 0&&(z.viewport=qe),I.toneMapping=Ve}function is(w,N,U){let z=N.isScene===!0?N.overrideMaterial:null;for(let G=0,xe=w.length;G<xe;G++){let Me=w[G],{object:ge,geometry:Ae,group:Re}=Me,Ve=Me.material;Ve.allowOverride===!0&&z!==null&&(Ve=z),ge.layers.test(U.layers)&&Dl(ge,N,U,Ae,Ve,Re)}}function Dl(w,N,U,z,G,xe){w.onBeforeRender(I,N,U,z,G,xe),w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(I,N,U,z,w,xe),G.transparent===!0&&G.side===Ui&&G.forceSinglePass===!1?(G.side=gn,G.needsUpdate=!0,I.renderBufferDirect(U,N,z,G,w,xe),G.side=lr,G.needsUpdate=!0,I.renderBufferDirect(U,N,z,G,w,xe),G.side=Ui):I.renderBufferDirect(U,N,z,G,w,xe),w.onAfterRender(I,N,U,z,G,xe)}function hr(w,N,U){N.isScene!==!0&&(N=ft);let z=T.get(w),G=E.state.lights,xe=E.state.shadowsArray,Me=G.state.version,ge=ue.getParameters(w,G.state,xe,N,U,E.state.lightProbeGridArray),Ae=ue.getProgramCacheKey(ge),Re=z.programs;z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;let Ve=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;z.envMap=B.get(w.envMap||z.environment,Ve),z.envMapRotation=z.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Re===void 0&&(w.addEventListener("dispose",pt),Re=new Map,z.programs=Re);let qe=Re.get(Ae);if(qe!==void 0){if(z.currentProgram===qe&&z.lightsStateVersion===Me)return qa(w,ge),qe}else ge.uniforms=ue.getUniforms(w),k!==null&&w.isNodeMaterial&&k.build(w,U,ge),w.onBeforeCompile(ge,I),qe=ue.acquireProgram(ge,Ae),Re.set(Ae,qe),z.uniforms=ge.uniforms;let Ie=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=_e.uniform),qa(w,ge),z.needsLights=_h(w),z.lightsStateVersion=Me,z.needsLights&&(Ie.ambientLightColor.value=G.state.ambient,Ie.lightProbe.value=G.state.probe,Ie.directionalLights.value=G.state.directional,Ie.directionalLightShadows.value=G.state.directionalShadow,Ie.spotLights.value=G.state.spot,Ie.spotLightShadows.value=G.state.spotShadow,Ie.rectAreaLights.value=G.state.rectArea,Ie.ltc_1.value=G.state.rectAreaLTC1,Ie.ltc_2.value=G.state.rectAreaLTC2,Ie.pointLights.value=G.state.point,Ie.pointLightShadows.value=G.state.pointShadow,Ie.hemisphereLights.value=G.state.hemi,Ie.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ie.spotLightMatrix.value=G.state.spotLightMatrix,Ie.spotLightMap.value=G.state.spotLightMap,Ie.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=qe,z.uniformsList=null,qe}function Xa(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=Fa.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function qa(w,N){let U=T.get(w);U.outputColorSpace=N.outputColorSpace,U.batching=N.batching,U.batchingColor=N.batchingColor,U.instancing=N.instancing,U.instancingColor=N.instancingColor,U.instancingMorph=N.instancingMorph,U.skinning=N.skinning,U.morphTargets=N.morphTargets,U.morphNormals=N.morphNormals,U.morphColors=N.morphColors,U.morphTargetsCount=N.morphTargetsCount,U.numClippingPlanes=N.numClippingPlanes,U.numIntersection=N.numClipIntersection,U.vertexAlphas=N.vertexAlphas,U.vertexTangents=N.vertexTangents,U.toneMapping=N.toneMapping}function Ul(w,N){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(N.matrixWorld);for(let U=0,z=w.length;U<z;U++){let G=w[U];if(G.texture!==null&&G.boundingBox.containsPoint(M))return G}return null}function xh(w,N,U,z,G){N.isScene!==!0&&(N=ft),S.resetTextureUnits();let xe=N.fog,Me=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,ge=F===null?I.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ke.workingColorSpace,Ae=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Re=B.get(z.envMap||Me,Ae),Ve=z.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,qe=!!U.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ie=!!U.morphAttributes.position,ct=!!U.morphAttributes.normal,Nt=!!U.morphAttributes.color,Rt=xi;z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Rt=I.toneMapping);let dt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Qt=dt!==void 0?dt.length:0,Se=T.get(z),Rn=E.state.lights;if(nt===!0&&(He===!0||w!==H)){let mt=w===H&&z.id===O;_e.setState(z,w,mt)}let et=!1;z.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Rn.state.version||Se.outputColorSpace!==ge||G.isBatchedMesh&&Se.batching===!1||!G.isBatchedMesh&&Se.batching===!0||G.isBatchedMesh&&Se.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Se.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Se.instancing===!1||!G.isInstancedMesh&&Se.instancing===!0||G.isSkinnedMesh&&Se.skinning===!1||!G.isSkinnedMesh&&Se.skinning===!0||G.isInstancedMesh&&Se.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Se.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Se.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Se.instancingMorph===!1&&G.morphTexture!==null||Se.envMap!==Re||z.fog===!0&&Se.fog!==xe||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==_e.numPlanes||Se.numIntersection!==_e.numIntersection)||Se.vertexAlphas!==Ve||Se.vertexTangents!==qe||Se.morphTargets!==Ie||Se.morphNormals!==ct||Se.morphColors!==Nt||Se.toneMapping!==Rt||Se.morphTargetsCount!==Qt||!!Se.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,Se.__version=z.version);let qn=Se.currentProgram;et===!0&&(qn=hr(z,N,G),k&&z.isNodeMaterial&&k.onUpdateProgram(z,qn,Se));let Si=!1,fr=!1,Ns=!1,ht=qn.getUniforms(),Lt=Se.uniforms;if(fe.useProgram(qn.program)&&(Si=!0,fr=!0,Ns=!0),z.id!==O&&(O=z.id,fr=!0),Se.needsLights){let mt=Ul(E.state.lightProbeGridArray,G);Se.lightProbeGrid!==mt&&(Se.lightProbeGrid=mt,fr=!0)}if(Si||H!==w){fe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ht.setValue(D,"projectionMatrix",w.projectionMatrix),ht.setValue(D,"viewMatrix",w.matrixWorldInverse);let mr=ht.map.cameraPosition;mr!==void 0&&mr.setValue(D,ut.setFromMatrixPosition(w.matrixWorld)),st.logarithmicDepthBuffer&&ht.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ht.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),H!==w&&(H=w,fr=!0,Ns=!0)}if(Se.needsLights&&(Rn.state.directionalShadowMap.length>0&&ht.setValue(D,"directionalShadowMap",Rn.state.directionalShadowMap,S),Rn.state.spotShadowMap.length>0&&ht.setValue(D,"spotShadowMap",Rn.state.spotShadowMap,S),Rn.state.pointShadowMap.length>0&&ht.setValue(D,"pointShadowMap",Rn.state.pointShadowMap,S)),G.isSkinnedMesh){ht.setOptional(D,G,"bindMatrix"),ht.setOptional(D,G,"bindMatrixInverse");let mt=G.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ht.setValue(D,"boneTexture",mt.boneTexture,S))}G.isBatchedMesh&&(ht.setOptional(D,G,"batchingTexture"),ht.setValue(D,"batchingTexture",G._matricesTexture,S),ht.setOptional(D,G,"batchingIdTexture"),ht.setValue(D,"batchingIdTexture",G._indirectTexture,S),ht.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&ht.setValue(D,"batchingColorTexture",G._colorsTexture,S));let pr=U.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0)&&ke.update(G,U,qn),(fr||Se.receiveShadow!==G.receiveShadow)&&(Se.receiveShadow=G.receiveShadow,ht.setValue(D,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(Lt.envMapIntensity.value=N.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=vC()),fr){if(ht.setValue(D,"toneMappingExposure",I.toneMappingExposure),Se.needsLights&&vh(Lt,Ns),xe&&z.fog===!0&&$.refreshFogUniforms(Lt,xe),$.refreshMaterialUniforms(Lt,z,de,Qe,E.state.transmissionRenderTarget[w.id]),Se.needsLights&&Se.lightProbeGrid){let mt=Se.lightProbeGrid;Lt.probesSH.value=mt.texture,Lt.probesMin.value.copy(mt.boundingBox.min),Lt.probesMax.value.copy(mt.boundingBox.max),Lt.probesResolution.value.copy(mt.resolution)}Fa.upload(D,Xa(Se),Lt,S)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Fa.upload(D,Xa(Se),Lt,S),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ht.setValue(D,"center",G.center),ht.setValue(D,"modelViewMatrix",G.modelViewMatrix),ht.setValue(D,"normalMatrix",G.normalMatrix),ht.setValue(D,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let mt=z.uniformsGroups;for(let mr=0,Ls=mt.length;mr<Ls;mr++){let Pg=mt[mr];Y.update(Pg,qn),Y.bind(Pg,qn)}}return qn}function vh(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function _h(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,N,U){let z=T.get(w);z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),T.get(w.texture).__webglTexture=N,T.get(w.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:U,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,N){let U=T.get(w);U.__webglFramebuffer=N,U.__useDefaultFramebuffer=N===void 0};let yh=D.createFramebuffer();this.setRenderTarget=function(w,N=0,U=0){F=w,X=N,W=U;let z=null,G=!1,xe=!1;if(w){let ge=T.get(w);if(ge.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(D.FRAMEBUFFER,ge.__webglFramebuffer),Z.copy(w.viewport),ee.copy(w.scissor),le=w.scissorTest,fe.viewport(Z),fe.scissor(ee),fe.setScissorTest(le),O=-1;return}else if(ge.__webglFramebuffer===void 0)S.setupRenderTarget(w);else if(ge.__hasExternalTextures)S.rebindTextures(w,T.get(w.texture).__webglTexture,T.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ve=w.depthTexture;if(ge.__boundDepthTexture!==Ve){if(Ve!==null&&T.has(Ve)&&(w.width!==Ve.image.width||w.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(w)}}let Ae=w.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(xe=!0);let Re=T.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Re[N])?z=Re[N][U]:z=Re[N],G=!0):w.samples>0&&S.useMultisampledRTT(w)===!1?z=T.get(w).__webglMultisampledFramebuffer:Array.isArray(Re)?z=Re[U]:z=Re,Z.copy(w.viewport),ee.copy(w.scissor),le=w.scissorTest}else Z.copy(re).multiplyScalar(de).floor(),ee.copy(Ce).multiplyScalar(de).floor(),le=Ue;if(U!==0&&(z=yh),fe.bindFramebuffer(D.FRAMEBUFFER,z)&&fe.drawBuffers(w,z),fe.viewport(Z),fe.scissor(ee),fe.setScissorTest(le),G){let ge=T.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ge.__webglTexture,U)}else if(xe){let ge=N;for(let Ae=0;Ae<w.textures.length;Ae++){let Re=T.get(w.textures[Ae]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ae,Re.__webglTexture,U,ge)}}else if(w!==null&&U!==0){let ge=T.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ge.__webglTexture,U)}O=-1},this.readRenderTargetPixels=function(w,N,U,z,G,xe,Me,ge=0){if(!(w&&w.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){fe.bindFramebuffer(D.FRAMEBUFFER,Ae);try{let Re=w.textures[ge],Ve=Re.format,qe=Re.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),!st.textureFormatReadable(Ve)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(qe)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-z&&U>=0&&U<=w.height-G&&D.readPixels(N,U,z,G,L.convert(Ve),L.convert(qe),xe)}finally{let Re=F!==null?T.get(F).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(w,N,U,z,G,xe,Me,ge=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae)if(N>=0&&N<=w.width-z&&U>=0&&U<=w.height-G){fe.bindFramebuffer(D.FRAMEBUFFER,Ae);let Re=w.textures[ge],Ve=Re.format,qe=Re.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),!st.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ie),D.bufferData(D.PIXEL_PACK_BUFFER,xe.byteLength,D.STREAM_READ),D.readPixels(N,U,z,G,L.convert(Ve),L.convert(qe),0);let ct=F!==null?T.get(F).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,ct);let Nt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await hy(D,Nt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ie),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,xe),D.deleteBuffer(Ie),D.deleteSync(Nt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,N=null,U=0){let z=Math.pow(2,-U),G=Math.floor(w.image.width*z),xe=Math.floor(w.image.height*z),Me=N!==null?N.x:0,ge=N!==null?N.y:0;S.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,U,0,0,Me,ge,G,xe),fe.unbindTexture()};let Sh=D.createFramebuffer(),Fl=D.createFramebuffer();this.copyTextureToTexture=function(w,N,U=null,z=null,G=0,xe=0){let Me,ge,Ae,Re,Ve,qe,Ie,ct,Nt,Rt=w.isCompressedTexture?w.mipmaps[xe]:w.image;if(U!==null)Me=U.max.x-U.min.x,ge=U.max.y-U.min.y,Ae=U.isBox3?U.max.z-U.min.z:1,Re=U.min.x,Ve=U.min.y,qe=U.isBox3?U.min.z:0;else{let Lt=Math.pow(2,-G);Me=Math.floor(Rt.width*Lt),ge=Math.floor(Rt.height*Lt),w.isDataArrayTexture?Ae=Rt.depth:w.isData3DTexture?Ae=Math.floor(Rt.depth*Lt):Ae=1,Re=0,Ve=0,qe=0}z!==null?(Ie=z.x,ct=z.y,Nt=z.z):(Ie=0,ct=0,Nt=0);let dt=L.convert(N.format),Qt=L.convert(N.type),Se;N.isData3DTexture?(S.setTexture3D(N,0),Se=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(S.setTexture2DArray(N,0),Se=D.TEXTURE_2D_ARRAY):(S.setTexture2D(N,0),Se=D.TEXTURE_2D),fe.activeTexture(D.TEXTURE0),fe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),fe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),fe.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let Rn=fe.getParameter(D.UNPACK_ROW_LENGTH),et=fe.getParameter(D.UNPACK_IMAGE_HEIGHT),qn=fe.getParameter(D.UNPACK_SKIP_PIXELS),Si=fe.getParameter(D.UNPACK_SKIP_ROWS),fr=fe.getParameter(D.UNPACK_SKIP_IMAGES);fe.pixelStorei(D.UNPACK_ROW_LENGTH,Rt.width),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Rt.height),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),fe.pixelStorei(D.UNPACK_SKIP_ROWS,Ve),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,qe);let Ns=w.isDataArrayTexture||w.isData3DTexture,ht=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){let Lt=T.get(w),pr=T.get(N),mt=T.get(Lt.__renderTarget),mr=T.get(pr.__renderTarget);fe.bindFramebuffer(D.READ_FRAMEBUFFER,mt.__webglFramebuffer),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,mr.__webglFramebuffer);for(let Ls=0;Ls<Ae;Ls++)Ns&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,T.get(w).__webglTexture,G,qe+Ls),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,T.get(N).__webglTexture,xe,Nt+Ls)),D.blitFramebuffer(Re,Ve,Me,ge,Ie,ct,Me,ge,D.DEPTH_BUFFER_BIT,D.NEAREST);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||T.has(w)){let Lt=T.get(w),pr=T.get(N);fe.bindFramebuffer(D.READ_FRAMEBUFFER,Sh),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Fl);for(let mt=0;mt<Ae;mt++)Ns?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.__webglTexture,G,qe+mt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Lt.__webglTexture,G),ht?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pr.__webglTexture,xe,Nt+mt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pr.__webglTexture,xe),G!==0?D.blitFramebuffer(Re,Ve,Me,ge,Ie,ct,Me,ge,D.COLOR_BUFFER_BIT,D.NEAREST):ht?D.copyTexSubImage3D(Se,xe,Ie,ct,Nt+mt,Re,Ve,Me,ge):D.copyTexSubImage2D(Se,xe,Ie,ct,Re,Ve,Me,ge);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ht?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Se,xe,Ie,ct,Nt,Me,ge,Ae,dt,Qt,Rt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Se,xe,Ie,ct,Nt,Me,ge,Ae,dt,Rt.data):D.texSubImage3D(Se,xe,Ie,ct,Nt,Me,ge,Ae,dt,Qt,Rt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,xe,Ie,ct,Me,ge,dt,Qt,Rt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,xe,Ie,ct,Rt.width,Rt.height,dt,Rt.data):D.texSubImage2D(D.TEXTURE_2D,xe,Ie,ct,Me,ge,dt,Qt,Rt);fe.pixelStorei(D.UNPACK_ROW_LENGTH,Rn),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,qn),fe.pixelStorei(D.UNPACK_SKIP_ROWS,Si),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,fr),xe===0&&N.generateMipmaps&&D.generateMipmap(Se),fe.unbindTexture()},this.initRenderTarget=function(w){T.get(w).__webglFramebuffer===void 0&&S.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?S.setTextureCube(w,0):w.isData3DTexture?S.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?S.setTexture2DArray(w,0):S.setTexture2D(w,0),fe.unbindTexture()},this.resetState=function(){X=0,W=0,F=null,fe.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}};var rh=Mi(gr(),1);var nh=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();var qy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var $y=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());var cg=t=>{let e=$y(t);return e.charAt(0).toUpperCase()+e.slice(1)};var wl=Mi(gr(),1);var ih={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var Yy=t=>{for(let e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};var Oa=Mi(gr(),1);var yC=(0,Oa.createContext)({});var Ky=()=>(0,Oa.useContext)(yC);var jy=(0,wl.forwardRef)(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>{let{size:c=24,strokeWidth:h=2,absoluteStrokeWidth:f=!1,color:d="currentColor",className:m=""}=Ky()??{},v=i??f?Number(n??h)*24/Number(e??c):n??h;return(0,wl.createElement)("svg",{ref:l,...ih,width:e??c??ih.width,height:e??c??ih.height,stroke:t??d,strokeWidth:v,className:nh("lucide",m,r),...!s&&!Yy(o)&&{"aria-hidden":"true"},...o},[...a.map(([b,g])=>(0,wl.createElement)(b,g)),...Array.isArray(s)?s:[s]])});var Ge=(t,e)=>{let n=(0,rh.forwardRef)(({className:i,...r},s)=>(0,rh.createElement)(jy,{ref:s,iconNode:e,className:nh(`lucide-${qy(cg(t))}`,`lucide-${t}`,i),...r}));return n.displayName=cg(t),n};var SC=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Zy=Ge("activity",SC);var MC=[["path",{d:"M12 6.528V3a1 1 0 0 1 1-1h0",key:"11qiee"}],["path",{d:"M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21",key:"110c12"}]],Jy=Ge("apple",MC);var bC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ug=Ge("circle-check",bC);var wC=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Qy=Ge("chevron-down",wC);var EC=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Wn=Ge("clipboard-list",EC);var TC=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],eS=Ge("dumbbell",TC);var AC=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],sh=Ge("flame",AC);var CC=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],Ba=Ge("gauge",CC);var RC=[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]],dg=Ge("goal",RC);var PC=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],tS=Ge("leaf",PC);var IC=[["path",{d:"M5 12h14",key:"1ays0h"}]],El=Ge("minus",IC);var NC=[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m16 17 2 2 4-4",key:"uh5qu3"}],["path",{d:"M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",key:"kpkbpo"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]],nS=Ge("package-check",NC);var LC=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Tl=Ge("plus",LC);var DC=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],za=Ge("rotate-ccw",DC);var UC=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],iS=Ge("settings-2",UC);var FC=[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]],Al=Ge("shopping-basket",FC);var kC=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],hg=Ge("sparkles",kC);var OC=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],rS=Ge("timer",OC);var BC=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],ah=Ge("utensils",BC);var zC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],fg=Ge("x",zC);var VC=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],pg=Ge("zap",VC);var zi={p:0,c:0,f:0,kcal:0};function Ze(t,e,n){return Math.max(e,Math.min(n,Number(t)||0))}function Pe(t,e=0){return Number((Number(t)||0).toFixed(e))}function xn(t,e=1){return!Number.isFinite(Number(t))||Number(t)<=0?0:Math.max(0,Math.round(Number(t)/e)*e)}function yi(t=zi){return Number.isFinite(t.kcal)?t.kcal:(t.p||0)*4+(t.c||0)*4+(t.f||0)*9}function Rs(t=zi){return{...t,kcal:yi(t)}}function Vt(...t){return Rs(t.reduce((e,n)=>({p:e.p+(n?.p||0),c:e.c+(n?.c||0),f:e.f+(n?.f||0),kcal:e.kcal+yi(n||zi)}),{...zi}))}function $t(t=zi,e=0){return Rs({p:(t.p||0)*e,c:(t.c||0)*e,f:(t.f||0)*e,...Number.isFinite(t.kcal)?{kcal:t.kcal*e}:{}})}function sS(t={}){let e=Ze(t.bodyWeightKg,1,300),n=Ze(t.proteinPerKg,0,5),i=Ze(t.fatMinPerKg,0,3),r=Pe(Ze(t.kcal,0,9e3)),s=Pe(e*n,1),a=Pe(e*i,1),o=Math.max(0,r-s*4-a*9),l=Pe(o/4,1);return{p:s,c:l,f:a,kcal:r}}function GC(t=0,e=1){let n=Ze(t,0,1/0)/Math.max(1,Ze(e,1,300));return n<2?{label:"\u4F4E\u78B3",tone:"amber",note:"\u78B3\u6C34\u4F4E\u4E8E 2.0g/kg\uFF0C\u4ECA\u5929\u7B97\u6536\u7D27\u65E5"}:n<3?{label:"\u4E2D\u78B3",tone:"green",note:"\u78B3\u6C34\u5728 2.0-3.0g/kg\uFF0C\u8BAD\u7EC3\u548C\u6062\u590D\u90FD\u6BD4\u8F83\u7A33"}:{label:"\u9AD8\u78B3",tone:"red",note:"\u78B3\u6C34\u8D85\u8FC7 3.0g/kg\uFF0C\u66F4\u50CF\u8865\u7CD6\u6216\u9AD8\u6D3B\u52A8\u65E5"}}function aS(t=zi,e=zi,n=1){let i=Math.max(1,yi(t)),r=Math.max(1,Ze(n,1,300)),s=(t.p||0)*4,a=(t.c||0)*4,o=(t.f||0)*9;return{proteinPct:Pe(s/i*100,1),carbPct:Pe(a/i*100,1),fatPct:Pe(o/i*100,1),proteinPerKg:Pe((t.p||0)/r,1),carbPerKg:Pe((t.c||0)/r,1),fatPerKg:Pe((t.f||0)/r,1),proteinTargetPerKg:Pe((e.p||0)/r,1),carbTargetPerKg:Pe((e.c||0)/r,1),carbDay:GC(t.c||0,r)}}function HC(t,e){let n=xn(Ze(e,0,t.max??1/0),t.step||1);return{...t,qty:n,macro:$t(t.unitMacro,n)}}function gg(t,e){let n=t.kcal-e.kcal,i=Math.pow(n/(n>0?150:125),2)*8+Math.max(0,n-220)*.28,r=Math.max(0,e.p-t.p),s=Math.max(0,t.p-e.p),a=t.c-e.c,o=Math.max(0,e.f-t.f),l=Math.max(0,t.f-e.f);return i+Math.pow(r/4,2)*28+Math.pow(s/12,2)*4+Math.pow(a/14,2)*10+Math.pow(o/4,2)*24+Math.pow(l/7,2)*12}function WC(t){let e=t.step||1,n=Math.max(0,t.max??t.qty??e*20),i=Math.floor(n/e),r=new Set([0,xn(t.qty||0,e),xn(n,e)]);if(i<=90)for(let s=0;s<=i;s+=1)r.add(xn(s*e,e));else{for(let s=-14;s<=14;s+=1)r.add(xn((t.qty||0)+s*e,e));[.15,.25,.35,.5,.65,.8,1].forEach(s=>r.add(xn(n*s,e)))}return[...r].filter(s=>s>=0&&s<=n).sort((s,a)=>s-a)}function XC(t,e,n){let i=n.reduce((h,f)=>Vt(h,$t(f.unitMacro,f.max??0)),zi),r=Vt(t,i),s=t.p>e.p?t.p-e.p:Math.max(0,e.p-r.p),a=t.c>e.c?t.c-e.c:Math.max(0,e.c-r.c),o=t.f>e.f?t.f-e.f:Math.max(0,e.f-r.f),l=Math.max(0,t.kcal-e.kcal-220),c=Math.max(0,e.kcal-r.kcal);return Math.pow(s/6,2)*30+Math.pow(a/22,2)*10+Math.pow(o/7,2)*20+Math.pow(l/110,2)*12+Math.pow(c/160,2)*8+gg(t,e)*.015}function oS(t,e,n,i={}){let r=t.filter(l=>l&&l.unitMacro&&(l.max??0)>0),s=i.beamWidth??520,a=[{choices:[],macro:Rs(e||zi),rank:0}];r.forEach((l,c)=>{let h=r.slice(c+1),f=WC(l),d=[];a.forEach(m=>{f.forEach(v=>{let b=$t(l.unitMacro,v),g=Vt(m.macro,b),u=XC(g,n,h)+Math.abs(v-(l.qty||0))*5e-4;d.push({choices:[...m.choices,v],macro:g,rank:u})})}),d.sort((m,v)=>m.rank-v.rank),a=d.slice(0,s)});let o=a.reduce((l,c)=>gg(c.macro,n)<gg(l.macro,n)?c:l,a[0]);return r.map((l,c)=>HC(l,o.choices[c]||0)).filter(l=>l.qty>0)}function xg(t){return t.reduce((e,n)=>({...e,[n.key]:{enabled:n.defaultEnabled!==!1,target:n.defaultTarget??0,stock:n.defaultStock??0}}),{})}function oh(t,e){let n=xg(e);return e.reduce((i,r)=>{let s=t?.[r.key]||{},a=r.max??1/0;return i[r.key]={enabled:s.enabled??n[r.key].enabled,target:Ze(s.target??n[r.key].target,0,a),stock:Ze(s.stock??n[r.key].stock,0,a)},i},{})}function lS(t,e,n=7){let i=oh(e,t),r=Ze(n,1,21);return t.map(s=>{let a=i[s.key],o=s.max??1/0,l=Ze(a.target,0,o),c=Ze(xn(l*r/7,s.step||1),0,o),h=Ze(xn(a.stock,s.step||1),0,o),f=a.enabled?Ze(xn(Math.max(0,c-h),s.step||1),0,o):0,d=s.unitMacro||zi;return{...s,enabled:a.enabled,weeklyTarget:l,targetQty:c,stockQty:h,buyQty:f,weeklyQty:f,qty:f,unitMacro:d,macro:$t(d,f),expectedMacro:$t(d,c),needState:a.enabled&&f>0?"need":"ok"}})}function mg(t,e){return`${Pe(t,e==="g"?0:1)}${e}`}function cS(t,e={}){return t.filter(n=>n.enabled&&n.buyQty>0).sort((n,i)=>(e[n.tone]??9)-(e[i.tone]??9)||i.buyQty-n.buyQty).map((n,i)=>{let r=mg(n.targetQty,n.unit),s=mg(n.stockQty,n.unit),a=mg(n.buyQty,n.unit),o=n.buyHint||(n.stockQty>0?`\u5BB6\u91CC\u8FD8\u6709 ${s}\uFF0C\u8865\u5230\u76EE\u6807 ${r}`:`\u672C\u5468\u671F\u76EE\u6807 ${r}`);return{...n,order:i+1,buyText:a,targetText:r,stockText:s,reason:o}})}var y=Mi(Cl(),1),bg=t=>`./assets/${t}`,mS=t=>bg(`generated/${t}`),gS=["zh","ja"],Pl={bodyWeightKg:83,proteinPerKg:1.8,fatMinPerKg:.6,kcal:2e3},JC=2900,Vi={p:0,c:0,f:0,kcal:0},vg={zh:{appSub:"\u4ECA\u5929\u600E\u4E48\u5403",navPlan:"\u4ECA\u65E5",navDetail:"\u660E\u7EC6",navShop:"\u91C7\u8D2D",navCheat:"\u653E\u677E",language:"\u8BED\u8A00",zh:"\u4E2D\u6587",ja:"\u65E5\u672C\u8A9E",heroTitle:"\u4ECA\u65E5\u9910\u76D8",heroAccent:"\u8F7B\u8F7B\u677E\u677E\u5B9A\u4E0B\u6765",heroCopy:"\u5148\u628A\u4ECA\u5929\u5DF2\u7ECF\u5403\u8FC7\u7684\u4E1C\u897F\u653E\u8FDB\u6765\uFF0C\u665A\u9910\u3001\u8D64\u5B57\u548C\u91C7\u8D2D\u90FD\u4F1A\u81EA\u52A8\u8DDF\u7740\u7B97\u3002\u754C\u9762\u53EA\u4FDD\u7559\u771F\u6B63\u8981\u64CD\u4F5C\u7684\u90E8\u5206\u3002",profile:"\u76EE\u6807",fuel:"\u8BAD\u7EC3\u524D",snack:"\u989D\u5916",copy:"\u590D\u5236",copying:"\u590D\u5236\u4E2D",copied:"\u5DF2\u590D\u5236",retry:"\u91CD\u8BD5",record:"\u8BB0\u5F55",intake:"\u5DF2\u5403",dinner:"\u665A\u9910",rhythm:"\u8282\u594F",kcal:"\u70ED\u91CF",deficit:"\u8D64\u5B57",todayTotal:"\u4ECA\u65E5\u5408\u8BA1",dinnerKcal:"\u665A\u9910\u70ED\u91CF",noEat:"\u4E0D\u5403",noDrink:"\u4E0D\u559D",off:"OFF",on:"ON",planIntakeEyebrow:"01 \xB7 \u5148\u8BB0\u4ECA\u5929",planIntakeTitle:"\u4ECA\u5929\u5403\u5230\u54EA\u4E86",intakeHubTitle:"\u4ECA\u65E5\u5DF2\u5403",intakeHubSub:"\u5348\u9910\u3001\u8BAD\u7EC3\u524D\u3001\u989D\u5916\u5403\u7684\u90FD\u5728\u4E00\u4E2A\u5730\u65B9\u6539",intakeDrawerTitle:"\u4ECA\u65E5\u5DF2\u5403",intakeDrawerSub:"\u6539\u5B8C\u8FD9\u91CC\uFF0C\u665A\u9910\u4F1A\u81EA\u52A8\u91CD\u65B0\u6536\u53E3",beforeDinnerTotal:"\u665A\u9910\u524D\u5408\u8BA1",editIntake:"\u8C03\u6574\u5DF2\u5403",quickKcal:"\u76F4\u63A5 kcal",tallyMode:"\u70B9\u9009\u8BB0\u8D26",lunchKcal:"\u5348\u9910\u70ED\u91CF",commonPicks:"\u5E38\u7528\u6570\u5B57",planChoiceEyebrow:"02 \xB7 \u665A\u9910\u65B9\u5411",planChoiceTitle:"\u4ECA\u665A\u60F3\u5403\u4EC0\u4E48",advanced:"\u7EC6\u8282\u8BBE\u7F6E",advancedSub:"\u86CB\u767D\u3001\u8102\u80AA\u3001\u6C34\u679C\u3001\u725B\u8089\u8102\u80AA\u548C\u76EE\u6807\u516C\u5F0F",dinnerProtein:"\u665A\u9910\u86CB\u767D",fatSource:"\u8102\u80AA\u6765\u6E90",extras:"\u6C34\u679C / \u9178\u5976",beefFat:"\u725B\u8089\u8102\u80AA",targetFormula:"\u76EE\u6807\u516C\u5F0F",resetDefault:"\u91CD\u7F6E\u9ED8\u8BA4",dinnerAnswerEyebrow:"03 \xB7 \u81EA\u52A8\u7B54\u6848",dinnerAnswerTitle:"\u4ECA\u665A\u5C31\u8FD9\u6837\u5403",resetTune:"\u91CD\u7F6E\u5FAE\u8C03",noDinner:"\u4ECA\u5929\u665A\u9910\u5DF2\u7ECF\u5F88\u8F7B\uFF0C\u5148\u68C0\u67E5\u5348\u9910\u6216\u76EE\u6807",rhythmEyebrow:"04 \xB7 \u4ECA\u65E5\u7ED3\u6784",rhythmTitle:"\u770B\u4E00\u773C\u5C31\u591F",protein:"\u86CB\u767D",carb:"\u78B3\u6C34",fat:"\u8102\u80AA",calorie:"\u70ED\u91CF",carbDay:"\u4ECA\u5929\u78B3\u6C34\u65E5",lowCarb:"\u4F4E\u78B3",mediumCarb:"\u4E2D\u78B3",highCarb:"\u9AD8\u78B3",ledger:"\u4ECA\u65E5\u8D26\u672C",ledgerTitle:"\u5403\u8FDB\u53BB\u7684\u4E1C\u897F",targetByWeight:"\u6309\u4F53\u91CD\u81EA\u52A8\u5206\u914D",structureTitle:"\u5360\u6BD4\u548C\u4F53\u91CD\u500D\u6570",beforeTraining:"\u8BAD\u7EC3\u524D",beforeTrainingTitle:"\u57AB\u4E00\u53E3\u4E5F\u7B97\u8FDB\u53BB",electrolyte:"\u7535\u89E3\u8D28",electrolyteTitle:"\u94BE\u94A0\u522B\u592A\u504F",balanced:"\u5E73\u8861",lowPotassium:"\u94BE\u504F\u4F4E",shopHero:"\u91C7\u8D2D\u6E05\u5355",shopCopy:"\u4E0D\u7528\u81EA\u5DF1\u586B\u3002\u4E0B\u9762\u5DF2\u7ECF\u6309\u8FDB\u5E97\u987A\u5E8F\u5217\u597D\u8FD9\u8F6E\u76F4\u63A5\u4E70\u4EC0\u4E48\uFF0C\u5E93\u5B58\u53EA\u6709\u9700\u8981\u5FAE\u8C03\u65F6\u518D\u6253\u5F00\u3002",cycle:"\u5468\u671F",products:"\u5546\u54C1",picked:"\u5DF2\u62FF",clearStock:"\u6E05\u7A7A\u5DF2\u6709",directPlan:"\u76F4\u63A5\u65B9\u6848",directPlanTitle:"\u7167\u5355\u4E70\u8FD9\u4E9B",nothingToBuy:"\u8FD9\u8F6E\u4E0D\u7528\u4E70",nothingToBuySub:"\u5DF2\u9009\u54C1\u7C7B\u7684\u5BB6\u91CC\u5E93\u5B58\u8986\u76D6\u4E86\u8FD9\u4E2A\u5907\u8D27\u5468\u671F\u3002\u8981\u5F3A\u5236\u751F\u6210\u6E05\u5355\u53EF\u4EE5\u70B9\u201C\u6E05\u7A7A\u5DF2\u6709\u201D\u3002",stockTune:"\u5E93\u5B58\u5FAE\u8C03",stockTuneSub:"\u5E73\u65F6\u4E0D\u7528\u7BA1\uFF1B\u53EA\u6709\u5BB6\u91CC\u8FD8\u6709\u4E1C\u897F\u65F6\u518D\u6539\u76EE\u6807\u548C\u5DF2\u6709",weeklyTarget:"\u5468\u76EE\u6807",stock:"\u5BB6\u91CC\u5DF2\u6709",skip:"\u8DF3\u8FC7",add:"\u52A0\u5165",enough:"\u5DF2\u591F",buy:"\u8865",cheatTitle:"\u60F3\u5403\u4E5F\u80FD\u7B97",cheatResult:"\u5403\u5B8C\u5927\u6982\u8FD9\u6837",cheatKcal:"\u653E\u677E\u70ED\u91CF",clear:"\u6E05\u7A7A",fuelSwitch:"\u8865\u7ED9\u5F00\u5173",fuelSub:"\u8BAD\u7EC3\u524D\u5403\u4EC0\u4E48\u559D\u4EC0\u4E48",fuelPreset:"\u5FEB\u6377\u6A21\u677F",currentState:"\u5F53\u524D\u72B6\u6001",fueled:"\u5DF2\u8865\u7ED9",noFuel:"\u4E0D\u8865\u7ED9",applyNoFuel:"\u6E05\u7A7A\u8BAD\u7EC3\u524D",applyNoFuelSub:"\u4E0D\u5403\u4E5F\u4E0D\u559D",lightFuel:"\u8F7B\u91CF\u6A21\u677F",lightFuelSub:"\u9999\u8549 + \u756A\u8304\u6C41",pineappleBox:"\u83E0\u841D\u76D2",pineappleBoxSub:"240g + \u756A\u8304\u6C41",eatWhat:"\u5403\u4EC0\u4E48",drinkWhat:"\u559D\u4EC0\u4E48",manualCopy:"\u624B\u52A8\u590D\u5236",manualCopySub:"\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u81EA\u52A8\u590D\u5236\uFF0C\u6587\u672C\u5DF2\u7ECF\u9009\u4E2D\u3002\u624B\u673A\u4E0A\u76F4\u63A5\u957F\u6309\u590D\u5236\u4E5F\u53EF\u4EE5\u3002",copyAgain:"\u518D\u590D\u5236\u4E00\u6B21",snackTitle:"\u989D\u5916\u8BB0\u5F55",snackSub:"\u81EA\u5DF1\u586B\u4E00\u4E0B\u4E5F\u884C",snackName:"\u540D\u79F0",noSnack:"\u6CA1\u6709\u989D\u5916",manualSnack:"\u4E34\u65F6\u8BB0\u5F55",dinnerWillClose:"\u665A\u9910\u4F1A\u8DDF\u7740\u6536\u53E3",clearSnack:"\u6E05\u9664\u8BB0\u5F55",bodyWeight:"\u4F53\u91CD",proteinRatio:"\u86CB\u767D\u500D\u7387",fatMin:"\u8102\u80AA\u6700\u4F4E",tdee:"TDEE",proteinTarget:"\u86CB\u767D\u76EE\u6807",fatTarget:"\u8102\u80AA\u6700\u4F4E",carbRemainder:"\u5269\u4F59\u78B3\u6C34",carbRemainderSub:"\u70ED\u91CF\u6263\u5B8C P/F \u540E\u5168\u7ED9\u78B3\u6C34",proteinCalories:"\u86CB\u767D\u70ED\u91CF",carbCalories:"\u78B3\u6C34\u70ED\u91CF",fatCalories:"\u8102\u80AA\u70ED\u91CF",carbJudge:"\u4F4E\u78B3\u5224\u65AD",lunch:"\u5348\u9910",preTraining:"\u8BAD\u7EC3\u524D",drinkElectrolyte:"\u996E\u6599/\u7535\u89E3\u8D28",snackMeal:"\u989D\u5916\u8BB0\u5F55",sauce:"\u996E\u6599",salt:"\u76D0",foodK:"\u98DF\u7269\u94BE",actual:"\u5B9E\u9645",target:"\u76EE\u6807",adjust:"\u8C03\u6574"},ja:{appSub:"\u4ECA\u65E5\u306E\u3054\u306F\u3093",navPlan:"\u4ECA\u65E5",navDetail:"\u8A73\u7D30",navShop:"\u8CB7\u3044\u7269",navCheat:"\u3054\u307B\u3046\u3073",language:"\u8A00\u8A9E",zh:"\u4E2D\u6587",ja:"\u65E5\u672C\u8A9E",heroTitle:"\u4ECA\u65E5\u306E\u3054\u306F\u3093",heroAccent:"\u3075\u3093\u308F\u308A\u6C7A\u3081\u308B",heroCopy:"\u98DF\u3079\u305F\u3082\u306E\u3092\u5165\u308C\u308B\u3060\u3051\u3002\u5915\u98DF\u3001\u88DC\u7D66\u3001\u8D64\u5B57\u3001\u8CB7\u3044\u7269\u30EA\u30B9\u30C8\u307E\u3067\u4E00\u679A\u306E\u30AB\u30FC\u30C9\u3067\u6574\u3048\u307E\u3059\u3002",profile:"\u76EE\u6A19",fuel:"\u904B\u52D5\u524D",snack:"\u8FFD\u52A0",copy:"\u30B3\u30D4\u30FC",copying:"\u30B3\u30D4\u30FC\u4E2D",copied:"\u30B3\u30D4\u30FC\u6E08\u307F",retry:"\u518D\u8A66\u884C",record:"\u8A18\u9332",intake:"\u98DF\u3079\u305F\u3082\u306E",dinner:"\u5915\u98DF",rhythm:"\u30D0\u30E9\u30F3\u30B9",kcal:"\u30AB\u30ED\u30EA\u30FC",deficit:"\u8D64\u5B57",todayTotal:"\u4ECA\u65E5\u306E\u5408\u8A08",dinnerKcal:"\u5915\u98DF\u30AB\u30ED\u30EA\u30FC",noEat:"\u98DF\u3079\u306A\u3044",noDrink:"\u98F2\u307E\u306A\u3044",off:"OFF",on:"ON",planIntakeEyebrow:"01 \xB7 \u307E\u305A\u8A18\u9332",planIntakeTitle:"\u98DF\u3079\u305F\u3082\u306E",intakeHubTitle:"\u4ECA\u65E5\u98DF\u3079\u305F\u3082\u306E",intakeHubSub:"\u663C\u98DF\u3001\u904B\u52D5\u524D\u3001\u8FFD\u52A0\u5206\u3092\u3053\u3053\u3067\u307E\u3068\u3081\u3066\u8ABF\u6574",intakeDrawerTitle:"\u4ECA\u65E5\u98DF\u3079\u305F\u3082\u306E",intakeDrawerSub:"\u3053\u3053\u3092\u5909\u3048\u308B\u3068\u5915\u98DF\u304C\u81EA\u52D5\u3067\u8ABF\u6574\u3055\u308C\u307E\u3059",beforeDinnerTotal:"\u5915\u98DF\u524D\u306E\u5408\u8A08",editIntake:"\u98DF\u3079\u305F\u3082\u306E\u8ABF\u6574",quickKcal:"kcal \u3060\u3051",tallyMode:"\u98DF\u6750\u3067\u8A18\u9332",lunchKcal:"\u663C\u98DF\u30AB\u30ED\u30EA\u30FC",commonPicks:"\u3088\u304F\u4F7F\u3046\u6570\u5B57",planChoiceEyebrow:"02 \xB7 \u5915\u98DF\u306E\u6C17\u5206",planChoiceTitle:"\u4ECA\u591C\u306A\u306B\u98DF\u3079\u308B",advanced:"\u3053\u307E\u304B\u3044\u8A2D\u5B9A",advancedSub:"\u305F\u3093\u3071\u304F\u8CEA\u3001\u8102\u8CEA\u3001\u679C\u7269\u3001\u725B\u8102\u3001\u76EE\u6A19\u5F0F",dinnerProtein:"\u5915\u98DF\u305F\u3093\u3071\u304F",fatSource:"\u8102\u8CEA\u30BD\u30FC\u30B9",extras:"\u679C\u7269 / \u30E8\u30FC\u30B0\u30EB\u30C8",beefFat:"\u725B\u8089\u8102\u8CEA",targetFormula:"\u76EE\u6A19\u5F0F",resetDefault:"\u521D\u671F\u5024\u306B\u623B\u3059",dinnerAnswerEyebrow:"03 \xB7 \u81EA\u52D5\u30D7\u30E9\u30F3",dinnerAnswerTitle:"\u5915\u98DF\u306F\u3053\u308C\u3067\u3044\u304F",resetTune:"\u5FAE\u8ABF\u6574\u3092\u623B\u3059",noDinner:"\u5915\u98DF\u304C\u304B\u306A\u308A\u8EFD\u3044\u3067\u3059\u3002\u663C\u98DF\u304B\u76EE\u6A19\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",rhythmEyebrow:"04 \xB7 \u4ECA\u65E5\u306E\u69CB\u6210",rhythmTitle:"\u3053\u3053\u3060\u3051\u898B\u308C\u3070OK",protein:"\u305F\u3093\u3071\u304F",carb:"\u70AD\u6C34\u5316\u7269",fat:"\u8102\u8CEA",calorie:"\u30AB\u30ED\u30EA\u30FC",carbDay:"\u4ECA\u65E5\u306E\u70AD\u6C34\u5316\u7269",lowCarb:"\u4F4E\u70AD\u6C34",mediumCarb:"\u4E2D\u70AD\u6C34",highCarb:"\u9AD8\u70AD\u6C34",ledger:"\u4ECA\u65E5\u306E\u5E33\u7C3F",ledgerTitle:"\u98DF\u3079\u305F\u3082\u306E\u4E00\u89A7",targetByWeight:"\u4F53\u91CD\u304B\u3089\u81EA\u52D5\u914D\u5206",structureTitle:"\u5272\u5408\u3068\u4F53\u91CD\u500D\u7387",beforeTraining:"\u904B\u52D5\u524D",beforeTrainingTitle:"\u5C11\u3057\u98DF\u3079\u3066\u3082\u8A08\u7B97",electrolyte:"\u96FB\u89E3\u8CEA",electrolyteTitle:"\u30AB\u30EA\u30A6\u30E0\u3068\u30CA\u30C8\u30EA\u30A6\u30E0",balanced:"\u30D0\u30E9\u30F3\u30B9",lowPotassium:"K \u5C11\u306A\u3081",shopHero:"\u8CB7\u3044\u7269\u30EA\u30B9\u30C8",shopCopy:"\u5165\u529B\u3057\u306A\u304F\u3066OK\u3002\u5E97\u5185\u3067\u53D6\u308B\u9806\u756A\u306B\u3001\u4ECA\u56DE\u8CB7\u3046\u3082\u306E\u3092\u305D\u306E\u307E\u307E\u51FA\u3057\u307E\u3059\u3002\u5E93\u5B58\u306F\u5FC5\u8981\u306A\u3068\u304D\u3060\u3051\u8ABF\u6574\u3002",cycle:"\u5468\u671F",products:"\u54C1\u76EE",picked:"\u53D6\u3063\u305F",clearStock:"\u5728\u5EAB\u30920\u306B\u3059\u308B",directPlan:"\u8CB7\u3046\u3082\u306E",directPlanTitle:"\u3053\u306E\u307E\u307E\u8CB7\u3046",nothingToBuy:"\u4ECA\u56DE\u306F\u8CB7\u308F\u306A\u304F\u3066OK",nothingToBuySub:"\u9078\u629E\u4E2D\u306E\u54C1\u76EE\u306F\u5728\u5EAB\u3067\u8DB3\u308A\u3066\u3044\u307E\u3059\u3002\u30EA\u30B9\u30C8\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u306F\u5728\u5EAB\u30920\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",stockTune:"\u5728\u5EAB\u8ABF\u6574",stockTuneSub:"\u666E\u6BB5\u306F\u89E6\u3089\u306A\u304F\u3066OK\u3002\u5BB6\u306B\u6B8B\u3063\u3066\u3044\u308B\u3082\u306E\u304C\u3042\u308B\u6642\u3060\u3051\u3002",weeklyTarget:"\u9031\u76EE\u6A19",stock:"\u5BB6\u306E\u5728\u5EAB",skip:"\u5916\u3059",add:"\u8FFD\u52A0",enough:"\u8DB3\u308A\u308B",buy:"\u8CB7\u3046",cheatTitle:"\u98DF\u3079\u305F\u3044\u65E5\u3082\u8A08\u7B97",cheatResult:"\u98DF\u3079\u305F\u5F8C\u306E\u898B\u8FBC\u307F",cheatKcal:"\u3054\u307B\u3046\u3073 kcal",clear:"\u30AF\u30EA\u30A2",fuelSwitch:"\u88DC\u7D66\u30B9\u30A4\u30C3\u30C1",fuelSub:"\u904B\u52D5\u524D\u306B\u98DF\u3079\u308B/\u98F2\u3080\u3082\u306E",fuelPreset:"\u30AF\u30A4\u30C3\u30AF\u8A2D\u5B9A",currentState:"\u73FE\u5728",fueled:"\u88DC\u7D66\u3042\u308A",noFuel:"\u88DC\u7D66\u306A\u3057",applyNoFuel:"\u904B\u52D5\u524D\u3092\u30AF\u30EA\u30A2",applyNoFuelSub:"\u98DF\u3079\u306A\u3044\u30FB\u98F2\u307E\u306A\u3044",lightFuel:"\u8EFD\u3081\u30BB\u30C3\u30C8",lightFuelSub:"\u30D0\u30CA\u30CA + \u30C8\u30DE\u30C8\u30B8\u30E5\u30FC\u30B9",pineappleBox:"\u30D1\u30A4\u30F3\u88DC\u7D66",pineappleBoxSub:"240g + \u30C8\u30DE\u30C8\u30B8\u30E5\u30FC\u30B9",eatWhat:"\u98DF\u3079\u308B\u3082\u306E",drinkWhat:"\u98F2\u3080\u3082\u306E",manualCopy:"\u624B\u52D5\u30B3\u30D4\u30FC",manualCopySub:"\u30D6\u30E9\u30A6\u30B6\u304C\u81EA\u52D5\u30B3\u30D4\u30FC\u3092\u6B62\u3081\u307E\u3057\u305F\u3002\u30C6\u30AD\u30B9\u30C8\u306F\u9078\u629E\u6E08\u307F\u306A\u306E\u3067\u3001\u30B9\u30DE\u30DB\u3067\u306F\u9577\u62BC\u3057\u3067\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3059\u3002",copyAgain:"\u3082\u3046\u4E00\u5EA6\u30B3\u30D4\u30FC",snackTitle:"\u8FFD\u52A0\u5206\u3092\u8A18\u9332",snackSub:"\u3056\u3063\u304F\u308A\u5165\u529B\u3067OK",snackName:"\u540D\u524D",noSnack:"\u8FFD\u52A0\u306A\u3057",manualSnack:"\u624B\u5165\u529B\u306E\u8FFD\u52A0\u5206",dinnerWillClose:"\u5915\u98DF\u304C\u81EA\u52D5\u3067\u8ABF\u6574\u3055\u308C\u307E\u3059",clearSnack:"\u8A18\u9332\u3092\u6D88\u3059",bodyWeight:"\u4F53\u91CD",proteinRatio:"\u305F\u3093\u3071\u304F\u500D\u7387",fatMin:"\u8102\u8CEA\u6700\u4F4E",tdee:"TDEE",proteinTarget:"\u305F\u3093\u3071\u304F\u76EE\u6A19",fatTarget:"\u8102\u8CEA\u6700\u4F4E",carbRemainder:"\u6B8B\u308A\u3092\u70AD\u6C34\u5316\u7269\u3078",carbRemainderSub:"P/F \u3092\u5F15\u3044\u305F\u6B8B\u308A\u306E kcal \u3092\u70AD\u6C34\u5316\u7269\u306B\u914D\u5206",proteinCalories:"\u305F\u3093\u3071\u304F kcal",carbCalories:"\u70AD\u6C34\u5316\u7269 kcal",fatCalories:"\u8102\u8CEA kcal",carbJudge:"\u4F4E\u70AD\u6C34\u5224\u5B9A",lunch:"\u663C\u98DF",preTraining:"\u904B\u52D5\u524D",drinkElectrolyte:"\u98F2\u307F\u7269/\u96FB\u89E3\u8CEA",snackMeal:"\u8FFD\u52A0\u5206",sauce:"\u98F2\u307F\u7269",salt:"\u5869",foodK:"\u98DF\u4E8BK",actual:"\u5B9F\u969B",target:"\u76EE\u6A19",adjust:"\u8ABF\u6574"}},fh={pasta:{name:"\u610F\u9762 \xB7 Garlic oil",short:"\u610F\u9762",sub:"\u529B\u91CF\u65E5\u6700\u723D",unit:"g",step:10,perUnit:{p:.12,c:.71,f:.015},kcalUnit:3.55,color:"#ffb86b",ja:{name:"\u30D1\u30B9\u30BF \xB7 \u30AC\u30FC\u30EA\u30C3\u30AF\u30AA\u30A4\u30EB",short:"\u30D1\u30B9\u30BF",sub:"\u3057\u3063\u304B\u308A\u98DF\u3079\u308B\u65E5"}},soba:{name:"\u835E\u9EA6\u9762 \xB7 Soba",short:"\u835E\u9EA6",sub:"\u6E05\u723D\u4F4E\u8D1F\u62C5",unit:"g",step:10,perUnit:{p:.14,c:.66,f:.023},kcalUnit:3.44,color:"#86c9a9",ja:{name:"\u305D\u3070 \xB7 Soba",short:"\u305D\u3070",sub:"\u8EFD\u304F\u3066\u843D\u3061\u7740\u304F"}},nissin:{name:"\u65E5\u6E05\u975E\u6CB9\u70B8",short:"\u65E5\u6E05",sub:"\u61D2\u4EBA\u6C64\u9762",unit:"\u5305",step:1,perUnit:{p:6.7,c:55,f:4.9},kcalUnit:291,color:"#ff9d91",ja:{name:"\u65E5\u6E05\u30CE\u30F3\u30D5\u30E9\u30A4",short:"\u65E5\u6E05",sub:"\u6642\u9593\u304C\u306A\u3044\u65E5"}},fresh_noodle:{name:"\u51B7\u85CF\u9C9C\u9762 \xB7 \u751F\u30E9\u30FC\u30E1\u30F3",short:"\u9C9C\u9762",sub:"\u51B7\u85CF\u67DC\u65E0\u8C03\u5473\u5305",unit:"g",step:10,perUnit:{p:.0869,c:.5469,f:.0123,kcal:2.623},kcalUnit:2.623,color:"#f1c47b",ja:{name:"\u51B7\u8535\u751F\u9EBA \xB7 \u8ABF\u5473\u306A\u3057",short:"\u751F\u9EBA",sub:"10g \u5358\u4F4D\u3067\u8ABF\u6574"}},pho:{name:"\u8D8A\u5357\u7C73\u7C89",short:"\u7C73\u7C89",sub:"\u4F4E\u8102\u6362\u53E3\u5473",unit:"\u5305",step:1,perUnit:{p:4,c:43,f:2},kcalUnit:210,color:"#86d8df",ja:{name:"\u30D5\u30A9\u30FC",short:"\u30D5\u30A9\u30FC",sub:"\u4F4E\u8102\u8CEA\u3067\u5909\u5316"}},bifun:{name:"\u7EAF\u5E72\u7C73\u7C89",short:"\u5E72\u7C73\u7C89",sub:"\u7EAF\u78B3\u6C34\u8865\u6EE1",unit:"g",step:10,perUnit:{p:.06,c:.79,f:.005},kcalUnit:3.45,color:"#f5d66b",ja:{name:"\u4E7E\u71E5\u30D3\u30FC\u30D5\u30F3",short:"\u30D3\u30FC\u30D5\u30F3",sub:"\u70AD\u6C34\u5316\u7269\u3092\u8DB3\u3059"}}},hh={beef:{label:"\u725B\u8089\u5207\u308A\u843D\u3068\u3057",short:"\u725B\u8089",tag:"raw \xB7 per g",unit:"g",step:10,p:.19,c:0,max:650,note:"\u8102\u80AA\u6309\u5305\u88C5\u6821\u51C6",ja:{label:"\u725B\u8089\u5207\u308A\u843D\u3068\u3057",short:"\u725B\u8089",note:"\u8102\u8CEA\u306F\u5305\u88C5\u3067\u8ABF\u6574"}},chicken:{label:"\u901F\u98DF\u9E21\u80F8",short:"\u9E21\u80F8",tag:"per pack",unit:"\u5757",step:1,p:22,c:1,f:2,max:6,note:"\u6700\u7A33\u9AD8\u86CB\u767D",ja:{label:"\u30B5\u30E9\u30C0\u30C1\u30AD\u30F3",short:"\u30C1\u30AD\u30F3",unit:"\u500B",note:"\u5B89\u5B9A\u306E\u9AD8\u305F\u3093\u3071\u304F"}},duck:{label:"\u5408\u9E2D\u80F8\u53BB\u76AE",short:"\u5408\u9E2D",tag:"100g serve",unit:"\u4EFD",step:1,p:21,c:.5,f:6,max:4,note:"\u9999\u4F46\u4E0D\u592A\u80A5",ja:{label:"\u5408\u9D28\u3080\u306D\u76AE\u306A\u3057",short:"\u5408\u9D28",unit:"\u76BF",note:"\u9999\u308A\u304C\u3042\u3063\u3066\u8EFD\u3081"}},kfc:{label:"KFC \u539F\u5473\u9E21",short:"KFC",tag:"per piece",unit:"\u5757",step:1,p:18,c:8,f:14,max:5,note:"\u723D\uFF0C\u4F46\u76D0\u9AD8",ja:{label:"KFC \u30AA\u30EA\u30B8\u30CA\u30EB\u30C1\u30AD\u30F3",short:"KFC",unit:"\u500B",note:"\u6E80\u8DB3\u611F\u3042\u308A\u3001\u5869\u5206\u9AD8\u3081"}},oikos:{label:"Oikos \u9AD8\u86CB\u767D\u9178\u5976",short:"Oikos",tag:"per cup",unit:"\u500B",step:1,p:12,c:5,f:0,max:8,note:"\u96F6\u8102\u8865\u86CB\u767D",ja:{label:"\u30AA\u30A4\u30B3\u30B9 \u9AD8\u305F\u3093\u3071\u304F",short:"\u30AA\u30A4\u30B3\u30B9",note:"\u8102\u8CEA\u306A\u3057\u3067\u88DC\u7D66"}}},ph={egg_fried:{label:"\u714E\u86CB",short:"\u714E\u86CB",unit:"\u4E2A",step:1,p:6,c:.4,f:7,max:6,ja:{label:"\u76EE\u7389\u713C\u304D",short:"\u5375",unit:"\u500B"}},sauce:{label:"\u30DA\u30DA\u30ED\u30F3\u9171",short:"\u849C\u6CB9\u9171",unit:"\u5305",step:1,p:.9,c:1.5,f:10,max:2,ja:{label:"\u30DA\u30DA\u30ED\u30F3\u30BD\u30FC\u30B9",short:"\u30BD\u30FC\u30B9",unit:"\u888B"}},olive:{label:"\u6A44\u6984\u6CB9",short:"\u6A44\u6984\u6CB9",unit:"\u5C0F\u52FA",step:1,p:0,c:0,f:4.5,max:6,ja:{label:"\u30AA\u30EA\u30FC\u30D6\u30AA\u30A4\u30EB",short:"\u30AA\u30A4\u30EB",unit:"\u5C0F\u3055\u3058"}},nuts:{label:"\u7D20\u713C\u304D\u30CA\u30C3\u30C4",short:"\u575A\u679C",unit:"10g",step:1,p:2,c:2,f:5,max:5,ja:{label:"\u7D20\u713C\u304D\u30CA\u30C3\u30C4",short:"\u30CA\u30C3\u30C4"}},cheese_bite:{label:"\u5C0F\u829D\u58EB",short:"\u829D\u58EB",unit:"\u4E2A",step:1,p:2.6,c:.4,f:3.4,kcal:43,max:8,ja:{label:"\u30D9\u30D3\u30FC\u30C1\u30FC\u30BA",short:"\u30C1\u30FC\u30BA",unit:"\u500B"}},avocado:{label:"\u30A2\u30DC\u30AB\u30C9",short:"\u725B\u6CB9\u679C",unit:"\u534A\u4E2A",step:1,p:1,c:4,f:15,max:2,ja:{label:"\u30A2\u30DC\u30AB\u30C9",short:"\u30A2\u30DC\u30AB\u30C9",unit:"\u534A\u5206"}}},ii={banana:{label:"\u9999\u8549",unit:"\u6839",step:1,max:4,p:1,c:27,f:.3,ja:{label:"\u30D0\u30CA\u30CA",unit:"\u672C"}},apple:{label:"\u82F9\u679C",unit:"\u4E2A",step:1,max:3,p:.4,c:35,f:.3,ja:{label:"\u308A\u3093\u3054",unit:"\u500B"}},kiwi:{label:"\u5947\u5F02\u679C",unit:"\u4E2A",step:1,max:4,p:1,c:14,f:.2,ja:{label:"\u30AD\u30A6\u30A4",unit:"\u500B"}},pineapple:{label:"\u5207\u5757\u83E0\u841D 240g",unit:"\u76D2",step:1,max:2,p:1.44,c:31.2,f:.24,ja:{label:"\u30AB\u30C3\u30C8\u30D1\u30A4\u30F3 240g",unit:"\u76D2"}},yogurt:{label:"\u65E0\u7CD6\u9178\u5976",unit:"g",step:50,max:400,p:.036,c:.049,f:.03,ja:{label:"\u7121\u7CD6\u30E8\u30FC\u30B0\u30EB\u30C8"}}},xS=[{key:"beef",tone:"red",source:"protein",sourceKey:"beef",label:"\u725B\u8089\u5207\u308A\u843D\u3068\u3057",short:"\u725B\u8089",unit:"g",step:100,defaultTarget:1200,max:3e3,buyHint:"\u665A\u9910\u4E3B\u86CB\u767D\uFF0C\u5148\u62FF\u8FD9\u4E2A",ja:{label:"\u725B\u8089\u5207\u308A\u843D\u3068\u3057",short:"\u725B\u8089",buyHint:"\u5915\u98DF\u306E\u4E3B\u5F79\u3002\u307E\u305A\u53D6\u308B"}},{key:"chicken",tone:"red",source:"protein",sourceKey:"chicken",label:"\u901F\u98DF\u9E21\u80F8",short:"\u9E21\u80F8",unit:"\u5757",step:1,defaultTarget:3,max:12,buyHint:"\u61D2\u4EBA\u5907\u7528\u86CB\u767D",ja:{label:"\u30B5\u30E9\u30C0\u30C1\u30AD\u30F3",short:"\u30C1\u30AD\u30F3",unit:"\u500B",buyHint:"\u5FD9\u3057\u3044\u65E5\u306E\u305F\u3093\u3071\u304F\u8CEA"}},{key:"oikos",tone:"red",source:"protein",sourceKey:"oikos",label:"Oikos \u9AD8\u86CB\u767D\u9178\u5976",short:"Oikos",unit:"\u500B",step:1,defaultTarget:4,max:14,buyHint:"\u96F6\u8102\u8865\u86CB\u767D",ja:{label:"\u30AA\u30A4\u30B3\u30B9 \u9AD8\u305F\u3093\u3071\u304F",short:"\u30AA\u30A4\u30B3\u30B9",buyHint:"\u8102\u8CEA\u306A\u3057\u3067\u88DC\u7D66"}},{key:"pasta",tone:"green",source:"carb",sourceKey:"pasta",label:"\u5E72\u610F\u9762",short:"\u610F\u9762",unit:"g",step:100,defaultTarget:500,max:2e3,buyHint:"\u4E3B\u529B\u665A\u9910\u78B3\u6C34",ja:{label:"\u4E7E\u71E5\u30D1\u30B9\u30BF",short:"\u30D1\u30B9\u30BF",buyHint:"\u5915\u98DF\u306E\u4E3B\u529B\u70AD\u6C34\u5316\u7269"}},{key:"soba",tone:"green",source:"carb",sourceKey:"soba",label:"\u835E\u9EA6\u9762",short:"\u835E\u9EA6",unit:"g",step:100,defaultTarget:400,max:1600,buyHint:"\u6E05\u723D\u6362\u53E3\u5473",ja:{label:"\u305D\u3070",short:"\u305D\u3070",buyHint:"\u8EFD\u304F\u5473\u5909\u3067\u304D\u308B"}},{key:"nissin",tone:"green",source:"carb",sourceKey:"nissin",label:"\u65E5\u6E05\u975E\u6CB9\u70B8",short:"\u65E5\u6E05",unit:"\u5305",step:1,defaultTarget:2,max:10,buyHint:"\u6CA1\u65F6\u95F4\u65F6\u9876\u4E0A",ja:{label:"\u65E5\u6E05\u30CE\u30F3\u30D5\u30E9\u30A4",short:"\u65E5\u6E05",unit:"\u888B",buyHint:"\u6642\u9593\u304C\u306A\u3044\u65E5\u306E\u4FDD\u967A"}},{key:"fresh_noodle",tone:"green",source:"carb",sourceKey:"fresh_noodle",label:"\u51B7\u85CF\u9C9C\u9762",short:"\u9C9C\u9762",unit:"g",step:10,defaultTarget:400,max:2e3,buyHint:"\u51B7\u85CF\u67DC\u65E0\u8C03\u5473\u5305\uFF0C\u6309 10g \u7B97",ja:{label:"\u51B7\u8535\u751F\u9EBA",short:"\u751F\u9EBA",buyHint:"\u8ABF\u5473\u306A\u3057\u300210g \u5358\u4F4D\u3067\u8CB7\u3046"}},{key:"pineapple",tone:"gold",source:"extra",sourceKey:"pineapple",label:"\u83E0\u841D 240g",short:"\u83E0\u841D",unit:"\u76D2",step:1,defaultTarget:2,max:8,buyHint:"\u8BAD\u7EC3\u524D\u540E\u76F4\u63A5\u5403",ja:{label:"\u30AB\u30C3\u30C8\u30D1\u30A4\u30F3 240g",short:"\u30D1\u30A4\u30F3",unit:"\u76D2",buyHint:"\u904B\u52D5\u524D\u5F8C\u306B\u305D\u306E\u307E\u307E\u98DF\u3079\u308B"}},{key:"banana",tone:"gold",source:"extra",sourceKey:"banana",label:"\u9999\u8549",short:"\u9999\u8549",unit:"\u6839",step:1,defaultTarget:4,max:14,buyHint:"\u5FEB\u901F\u8865\u78B3\u6C34",ja:{label:"\u30D0\u30CA\u30CA",short:"\u30D0\u30CA\u30CA",unit:"\u672C",buyHint:"\u3059\u3050\u8DB3\u305B\u308B\u70AD\u6C34\u5316\u7269"}},{key:"apple",tone:"gold",source:"extra",sourceKey:"apple",label:"\u82F9\u679C",short:"\u82F9\u679C",unit:"\u4E2A",step:1,defaultTarget:2,max:10,buyHint:"\u9876\u9965\u6C34\u679C",ja:{label:"\u308A\u3093\u3054",short:"\u308A\u3093\u3054",unit:"\u500B",buyHint:"\u304A\u8179\u306B\u305F\u307E\u308B\u679C\u7269"}},{key:"egg_fried",tone:"amber",source:"fat",sourceKey:"egg_fried",label:"\u9E21\u86CB",short:"\u9E21\u86CB",unit:"\u4E2A",step:1,defaultTarget:6,max:20,defaultEnabled:!1,buyHint:"\u8865\u8102\u80AA\u548C\u53E3\u611F",ja:{label:"\u5375",short:"\u5375",unit:"\u500B",buyHint:"\u8102\u8CEA\u3068\u6E80\u8DB3\u611F\u3092\u8DB3\u3059"}},{key:"sauce",tone:"amber",source:"fat",sourceKey:"sauce",label:"\u30DA\u30DA\u30ED\u30F3\u9171",short:"\u849C\u6CB9\u9171",unit:"\u5305",step:1,defaultTarget:3,max:12,defaultEnabled:!1,buyHint:"\u610F\u9762\u76F4\u63A5\u597D\u5403",ja:{label:"\u30DA\u30DA\u30ED\u30F3\u30BD\u30FC\u30B9",short:"\u30BD\u30FC\u30B9",unit:"\u888B",buyHint:"\u30D1\u30B9\u30BF\u304C\u3059\u3050\u304A\u3044\u3057\u3044"}},{key:"nuts",tone:"amber",source:"fat",sourceKey:"nuts",label:"\u7D20\u713C\u304D\u30CA\u30C3\u30C4",short:"\u575A\u679C",unit:"10g",step:1,defaultTarget:4,max:20,defaultEnabled:!1,buyHint:"\u5C11\u91CF\u8102\u80AA\u5907\u7528",ja:{label:"\u7D20\u713C\u304D\u30CA\u30C3\u30C4",short:"\u30CA\u30C3\u30C4",buyHint:"\u5C11\u91CF\u8102\u8CEA\u306E\u4FDD\u967A"}},{key:"cheese_bite",tone:"amber",source:"fat",sourceKey:"cheese_bite",label:"\u5C0F\u829D\u58EB",short:"\u829D\u58EB",unit:"\u4E2A",step:1,defaultTarget:6,max:24,defaultEnabled:!1,buyHint:"\u6BCF\u4E2A 43kcal\uFF0C\u5C11\u91CF\u8865\u8102\u80AA",ja:{label:"\u30D9\u30D3\u30FC\u30C1\u30FC\u30BA",short:"\u30C1\u30FC\u30BA",unit:"\u500B",buyHint:"1\u500B43kcal\u3002\u5C11\u91CF\u8102\u8CEA\u306B"}}],vS={chicken:{label:"\u9E21\u80F8",unit:"\u5757",step:1,max:10,p:22,c:1,f:2,ja:{label:"\u30C1\u30AD\u30F3",unit:"\u500B"}},egg:{label:"\u5168\u86CB",unit:"\u4E2A",step:1,max:10,p:6,c:.5,f:5,ja:{label:"\u5375",unit:"\u500B"}},oikos:{label:"Oikos",unit:"\u500B",step:1,max:6,p:12,c:5,f:0,ja:{label:"\u30AA\u30A4\u30B3\u30B9"}},onigiri:{label:"\u996D\u56E2",unit:"\u4E2A",step:1,max:6,p:3,c:39,f:.5,ja:{label:"\u304A\u306B\u304E\u308A",unit:"\u500B"}},nissin:{label:"\u65E5\u6E05\u9762",unit:"\u5305",step:1,max:4,p:6.7,c:55,f:4.9,ja:{label:"\u65E5\u6E05\u9EBA",unit:"\u888B"}},rice:{label:"\u7C73\u996D",unit:"g",step:50,max:1e3,p:.026,c:.28,f:.003,ja:{label:"\u3054\u306F\u3093"}},beef:{label:"\u725B\u8089",unit:"g",step:50,max:600,p:.19,c:0,f:.072,ja:{label:"\u725B\u8089"}},pasta:{label:"\u5E72\u610F\u9762",unit:"g",step:50,max:300,p:.12,c:.71,f:.015,ja:{label:"\u4E7E\u71E5\u30D1\u30B9\u30BF"}},banana:{label:"\u9999\u8549",unit:"\u6839",step:1,max:4,p:1,c:27,f:.25,ja:{label:"\u30D0\u30CA\u30CA",unit:"\u672C"}}},mh={chicken:{label:"\u9E21\u80F8",unit:"\u5757",step:1,max:5,p:22,c:1,f:2,ja:{label:"\u30C1\u30AD\u30F3",unit:"\u500B"}},eggs:{label:"\u5168\u86CB",unit:"\u4E2A",step:1,max:6,p:6,c:.5,f:5,ja:{label:"\u5375",unit:"\u500B"}},banana:{label:"\u9999\u8549",unit:"\u6839",step:1,max:4,p:1,c:27,f:.25,ja:{label:"\u30D0\u30CA\u30CA",unit:"\u672C"}},pineapple:{label:"\u83E0\u841D 240g",unit:"\u76D2",step:1,max:2,p:1.44,c:31.2,f:.24,ja:{label:"\u30AB\u30C3\u30C8\u30D1\u30A4\u30F3 240g",unit:"\u76D2"}},oikos:{label:"Oikos",unit:"\u500B",step:1,max:5,p:12,c:5,f:0,ja:{label:"\u30AA\u30A4\u30B3\u30B9"}}},Ps={tomato:{label:"\u65E0\u76D0\u756A\u8304\u6C41",sub:"K 600 / 200ml",p:1.8,c:7.1,f:0,kcal:39,k:600,na:5,ja:{label:"\u7121\u5869\u30C8\u30DE\u30C8\u30B8\u30E5\u30FC\u30B9",sub:"K 600 / 200ml"}},yasai:{label:"\u91CE\u83DC\u4E00\u65E5",sub:"K 740 / 200ml",p:3,c:14.5,f:0,kcal:75,k:740,na:80,ja:{label:"\u91CE\u83DC\u4E00\u65E5",sub:"K 740 / 200ml"}},none:{label:"\u4E0D\u8865\u94BE",sub:"\u4ECA\u5929\u7701\u4E86",p:0,c:0,f:0,kcal:0,k:0,na:0,ja:{label:"\u88DC\u7D66\u306A\u3057",sub:"\u4ECA\u65E5\u306F\u306A\u3057"}}},_S=[{id:"burger",label:"\u6C49\u5821 + \u85AF\u6761",kcal:980,ja:{label:"\u30D0\u30FC\u30AC\u30FC + \u30DD\u30C6\u30C8"}},{id:"ramen",label:"\u62C9\u9762 + \u996D",kcal:1200,ja:{label:"\u30E9\u30FC\u30E1\u30F3 + \u3054\u306F\u3093"}},{id:"sushi",label:"\u56DE\u8F6C\u5BFF\u53F8 12 \u76BF",kcal:1050,ja:{label:"\u56DE\u8EE2\u5BFF\u53F8 12\u76BF"}},{id:"pizza",label:"Pizza \u534A\u5F20",kcal:1150,ja:{label:"\u30D4\u30B6 \u534A\u5206"}},{id:"dessert",label:"\u751C\u54C1\u5976\u8336",kcal:620,ja:{label:"\u30C7\u30B6\u30FC\u30C8 + \u30DF\u30EB\u30AF\u30C6\u30A3\u30FC"}},{id:"katsu",label:"\u70B8\u732A\u6392\u5496\u55B1",kcal:1450,ja:{label:"\u30AB\u30C4\u30AB\u30EC\u30FC"}}],QC=[{id:"plan",labelKey:"navPlan",icon:ah},{id:"detail",labelKey:"navDetail",icon:Ba},{id:"shop",labelKey:"navShop",icon:Al},{id:"cheat",labelKey:"navCheat",icon:sh}];function e2(t){let e=vg[t]||vg.zh;return n=>e[n]??vg.zh[n]??n}function vn(t,e){return t&&(e==="ja"&&t.ja?{...t,...t.ja}:t)}function t2(t,e){let n={\u4F4E\u78B3:e("lowCarb"),\u4E2D\u78B3:e("mediumCarb"),\u9AD8\u78B3:e("highCarb")};return{...t.carbDay,label:n[t.carbDay.label]||t.carbDay.label}}async function yS(t){if(navigator.clipboard?.writeText&&window.isSecureContext)try{await navigator.clipboard.writeText(t);return}catch{}let e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="fixed",e.style.left="-9999px",e.style.top="0",e.style.fontSize="16px",document.body.appendChild(e),e.focus(),e.select(),e.setSelectionRange(0,t.length);try{if(!document.execCommand("copy"))throw new Error("copy command failed")}finally{document.body.removeChild(e)}}function SS(t){return Object.entries(t).filter(([e,n])=>mh[e]&&n>0)}function n2(t,e,n){let i=SS(t);return i.length?i.map(([r,s])=>{let a=vn(mh[r],e);return`${a.label} ${Pe(s)}${a.unit}`}).join(" / "):n("noEat")}function i2(t,e,n,i){let r=vn(Ps[t]||Ps.none,n);return t==="none"||e<=0?i("noDrink"):`${r.label} ${Pe(e)}ml`}function MS(t,e,n){return SS(t).length>0||e!=="none"&&n>0}function wg(t,e,n,i,r){return`${n2(t,i,r)} \xB7 ${i2(e,n,i,r)}`}function Eg(t){return(t?.kcal||0)>0||(t?.p||0)>0||(t?.c||0)>0||(t?.f||0)>0}function bS(t,e){return Eg(t)?`${t.name||e("snackMeal")} ${Math.round(yi(t))} kcal`:e("noSnack")}function r2(t,e,n,i,r,s,a){return`${a("lunch")} ${Math.round(t?.kcal||0)} kcal \xB7 ${wg(e,n,i,s,a)} \xB7 ${bS(r,a)}`}function s2(t,e){return t.map(n=>{let i=n.baseQty??n.qty,r=e[n.key]||0,s=Ze(i+r,0,n.max??1/0),a=Pe(s-i,n.step<1?1:2);return{...n,baseQty:i,qty:s,adjustment:a,macro:$t(n.unitMacro,s)}})}function a2(t){return Rs({p:t*.31/4,c:t*.49/4,f:t*.2/9,kcal:t})}function wS(t,e){let n=hh[t];return{...n,f:t==="beef"?e*.8/100:n.f||0}}function o2(t,e){return t.source==="protein"?wS(t.sourceKey,e):t.source==="carb"?fh[t.sourceKey].perUnit:t.source==="extra"?ii[t.sourceKey]:t.source==="fat"?ph[t.sourceKey]:Vi}function l2(t,e){return xS.map(n=>({...vn(n,e),unitMacro:o2(n,t)}))}function Il(t,e){if(t.key?.startsWith("carb-")){let n=t.key.replace("carb-",""),i=vn(fh[n],e);return{...t,name:i.name,short:i.short,unit:i.unit}}if(t.key?.startsWith("fat-")){let n=t.key.replace("fat-",""),i=vn(ph[n],e);return{...t,name:i.label,short:i.short,unit:i.unit}}if(t.key?.startsWith("extra-")){let n=t.key.replace("extra-",""),i=vn(ii[n],e);return{...t,name:i.label,short:i.label,unit:i.unit}}if(hh[t.key]){let n=vn(hh[t.key],e);return{...t,name:n.label,short:n.short,unit:n.unit}}return t}function c2(t,e){let[n,i]=(0,Le.useState)(()=>{let r=Number(localStorage.getItem(t));return Number.isFinite(r)&&r>0?r:e});return(0,Le.useEffect)(()=>{localStorage.setItem(t,String(n))},[t,n]),[n,i]}function _g(t,e){let n=()=>typeof e=="function"?e():e,[i,r]=(0,Le.useState)(()=>{try{let s=localStorage.getItem(t);return s?JSON.parse(s):n()}catch{return n()}});return(0,Le.useEffect)(()=>{localStorage.setItem(t,JSON.stringify(i))},[t,i]),[i,r]}function u2(){let t=(0,Le.useRef)(null);return(0,Le.useEffect)(()=>{let e=t.current;if(!e)return;let n=new Zo,i=new Zt(38,1,.1,100);i.position.set(0,0,10);let r;try{r=new Qd({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{return}r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setClearColor(16777215,0),e.appendChild(r.domElement);let s=new ar;n.add(s),n.add(new ul(16777215,1.1));let a=new Ia(16752533,2.8,24);a.position.set(5,3,7),n.add(a);let o=new Ia(8508848,1.9,18);o.position.set(-5,-2,5),n.add(o);let l=[16754075,16764797,9099444,9689572],c=new sl(.56,.12,120,16),h=new il(.12,.34,8,18),f=l.map((u,p)=>{let _=new Pa({color:u,emissive:u,emissiveIntensity:.12,roughness:.42,metalness:.04}),M=new mn(c,_),C=p*Math.PI*.5;return M.position.set(Math.cos(C)*3.2,Math.sin(C)*1.5,-1-p*.2),M.rotation.set(p*.5,p*.35,p*.8),M.userData={angle:C,speed:.002+p*7e-4},s.add(M),M}),d=Array.from({length:26},(u,p)=>{let _=new Pa({color:l[p%l.length],roughness:.48,metalness:.02}),M=new mn(h,_),C=p*.58,E=2.2+p%4*.54;return M.position.set(Math.cos(C)*E,Math.sin(C)*E*.42,-2.4-p%5*.18),M.rotation.set(C*.7,C*.3,C),M.userData={angle:C,radius:E,speed:.003+p%5*6e-4},s.add(M),M}),m=()=>{let{width:u,height:p}=e.getBoundingClientRect();r.setSize(Math.max(1,u),Math.max(1,p),!1),i.aspect=Math.max(1,u)/Math.max(1,p),i.updateProjectionMatrix()};m();let v=new ResizeObserver(m);v.observe(e);let b=0,g=()=>{b=window.requestAnimationFrame(g),s.rotation.z+=.0011,s.rotation.y=Math.sin(Date.now()*28e-5)*.16,f.forEach(u=>{u.rotation.x+=u.userData.speed*1.7,u.rotation.y+=u.userData.speed}),d.forEach(u=>{u.userData.angle+=u.userData.speed,u.position.x=Math.cos(u.userData.angle)*u.userData.radius,u.position.y=Math.sin(u.userData.angle)*u.userData.radius*.42,u.rotation.z+=.006}),r.render(n,i)};return g(),()=>{window.cancelAnimationFrame(b),v.disconnect(),r.dispose(),c.dispose(),h.dispose(),e.removeChild(r.domElement)}},[]),(0,y.jsx)("div",{ref:t,className:"pointer-events-none fixed inset-0 -z-10 opacity-55","data-three-orbit":!0})}function Tg(){let[t,e]=(0,Le.useState)("plan"),[n,i]=_g("cutting:locale:v1","zh"),r=gS.includes(n)?n:"zh",s=(0,Le.useMemo)(()=>e2(r),[r]),[a,o]=_g("cutting:targetProfile:v1",Pl),l=(0,Le.useMemo)(()=>({...Pl,...a||{}}),[a]),c=(0,Le.useMemo)(()=>sS(l),[l]),[h,f]=c2("cutting:tdee",JC),[d,m]=(0,Le.useState)("quick"),[v,b]=(0,Le.useState)(800),[g,u]=(0,Le.useState)({}),[p,_]=(0,Le.useState)("pasta"),[M,C]=(0,Le.useState)(["beef"]),[E,R]=(0,Le.useState)([]),[x,A]=(0,Le.useState)({}),[I,P]=(0,Le.useState)(13),[k,X]=(0,Le.useState)({}),[W,F]=(0,Le.useState)("none"),[O,H]=(0,Le.useState)(0),[Z,ee]=(0,Le.useState)(6.5),[le,ye]=(0,Le.useState)(2e3),[we,$e]=(0,Le.useState)(7),[Qe,de]=_g("cutting:shopPlan:v1",()=>xg(xS)),[q,ne]=(0,Le.useState)(!1),[re,Ce]=(0,Le.useState)(!1),[Ue,Ne]=(0,Le.useState)({}),[nt,He]=(0,Le.useState)({name:"\u624B\u52A8\u52A0\u9910",p:0,c:0,f:0,kcal:0}),[rt,ut]=(0,Le.useState)({}),[We,ft]=(0,Le.useState)("idle"),[vt,un]=(0,Le.useState)(""),[D,Mt]=(0,Le.useState)(!1),ze=(0,Le.useRef)(0),st=(ve,Ee,L,se=1/0)=>{ve(Y=>{let he=Ze(L,0,se),te={...Y};return he>0?te[Ee]=he:delete te[Ee],te})},fe=ve=>{C(Ee=>Ee.includes(ve)?Ee.length>1?Ee.filter(L=>L!==ve):Ee:[...Ee,ve])},bt=ve=>{R(Ee=>Ee.includes(ve)?Ee.filter(L=>L!==ve):[...Ee,ve])},T=(0,Le.useMemo)(()=>{let ve=Object.entries(g).reduce((N,[U,z])=>Vt(N,$t(vS[U],z)),Vi),Ee=d==="tally"&&ve.kcal>0?ve:a2(v),L=Object.entries(k).reduce((N,[U,z])=>Vt(N,$t(mh[U],z)),Vi),se=Ps[W]||Ps.none,Y=Rs($t(se,O/200)),he=Rs(nt),te=Vt(Ee,L,Y,he),J=Object.entries(x).filter(([N,U])=>ii[N]&&U>0),Te=J.reduce((N,[U,z])=>Vt(N,$t(ii[U],z)),Vi),Oe=J.map(([N,U])=>({key:`extra-${N}`,name:ii[N].label,short:ii[N].label,qty:U,unit:ii[N].unit,step:ii[N].step,max:ii[N].max,unitMacro:ii[N],macro:$t(ii[N],U),tone:"gold"})),pt=Vt(te,Te),at=Math.max(0,c.p-pt.p),Xn=M.map(N=>{let U=wS(N,I),z=at/Math.max(1,M.length)/Math.max(1,U.p),G=Ze(xn(z,U.step),0,U.max);return{key:N,name:U.label,short:U.short,qty:G,unit:U.unit,step:U.step,max:U.max,unitMacro:U,macro:$t(U,G),tone:"red"}}),An=Xn.reduce((N,U)=>Vt(N,U.macro),Vi),Va=Math.max(0,c.f-pt.f-An.f),Nl=E.length?E:[],Ga=Nl.map(N=>{let U=ph[N],z=Va/Math.max(1,Nl.length)/Math.max(1,U.f),G=Ze(xn(z,U.step),0,U.max);return{key:`fat-${N}`,name:U.label,short:U.short,qty:G,unit:U.unit,step:U.step,max:U.max,unitMacro:U,macro:$t(U,G),tone:"amber"}}),Ll=Ga.reduce((N,U)=>Vt(N,U.macro),Vi),Hi=Vt(pt,An,Ll),Ha=Math.max(0,c.kcal-Hi.kcal),Cn=fh[p],Wa=Cn.unit==="\u5305"?8:420,is=Ze(xn(Ha/Cn.kcalUnit,Cn.step),0,Wa),Dl={key:`carb-${p}`,name:Cn.name,short:Cn.short,qty:is,unit:Cn.unit,step:Cn.step,max:Wa,unitMacro:Cn.perUnit,macro:$t(Cn.perUnit,is),tone:"green"},hr=oS([...Xn,...Ga,Dl],pt,c),Xa=s2([...hr.filter(N=>N.tone==="red"),...hr.filter(N=>N.tone==="amber"),...Oe,...hr.filter(N=>N.tone==="green")],Ue),qa=Xa.reduce((N,U)=>Vt(N,U.macro),Vi),Ul=Vt(te,qa),xh=Math.round(h-Ul.kcal),vh=(Ps[W]?.k||0)*(O/200),_h=(Ps[W]?.na||0)*(O/200),yh=Z*393+_h,Sh=le+vh,Fl=lS(l2(I,r),Qe,we),w=Fl.reduce((N,U)=>Vt(N,U.macro),Vi);return{lunch:Ee,pre:L,drink:Y,snack:he,beforeDinner:te,dinner:qa,dinnerItems:Xa,total:Ul,deficit:xh,potassium:Sh,sodium:yh,shopping:Fl,shoppingMacro:w,carb:Cn}},[r,I,p,Ue,W,O,x,E,le,v,d,k,Z,we,Qe,nt,g,c,h,M]),S=(0,Le.useMemo)(()=>aS(T.total,c,l.bodyWeightKg),[T.total,l.bodyWeightKg,c]),B=_S.reduce((ve,Ee)=>ve+(rt[Ee.id]||0)*Ee.kcal,0),K=Math.round(T.total.kcal+B-h),Q=MS(k,W,O),ae=Eg(nt),ue=Q||ae||T.lunch.kcal>0,$=r2(T.lunch,k,W,O,nt,r,s),j=(ve,Ee)=>{Ne(L=>{let se=ve.baseQty??ve.qty,Y=Ze(ve.qty+Ee,0,ve.max??1/0),he=Pe(Y-se,ve.step<1?1:2),te={...L};return he!==0?te[ve.key]=he:delete te[ve.key],te})},me=()=>{o(Pl),b(800),u({}),_("pasta"),C(["beef"]),R([]),A({}),P(13),X({}),F("none"),H(0),Ne({}),He({name:r==="ja"?"\u624B\u5165\u529B\u306E\u9593\u98DF":"\u624B\u52A8\u52A0\u9910",p:0,c:0,f:0,kcal:0})};(0,Le.useEffect)(()=>()=>window.clearTimeout(ze.current),[]),(0,Le.useEffect)(()=>{window.scrollTo({top:0,behavior:"auto"})},[t]),(0,Le.useEffect)(()=>{document.documentElement.lang=r==="ja"?"ja":"zh-CN",document.documentElement.dataset.locale=r,document.title=r==="ja"?"Cutting Lab \xB7 \u4ECA\u65E5\u306E\u3054\u306F\u3093":"Cutting Lab \xB7 \u4ECA\u65E5\u9910\u76D8"},[r]);let _e=()=>({date:new Date().toISOString().slice(0,10),locale:r,targetProfile:l,targets:c,lunch:T.lunch,pre:T.pre,drink:{key:W,ml:O,macro:T.drink},snack:nt,dinnerAdjustments:Ue,dinner:{items:T.dinnerItems.map(ve=>Il(ve,r)),macro:T.dinner},total:T.total,deficit:T.deficit}),ce=async()=>{let ve={..._e(),copiedAt:new Date().toISOString()},Ee=JSON.stringify(ve,null,2);un(Ee),window.clearTimeout(ze.current),ft("copying");try{await yS(Ee),Mt(!1),ft("copied")}catch(L){console.error(L),ft("failed"),Mt(!0)}ze.current=window.setTimeout(()=>ft("idle"),1800)},oe=ve=>{window.requestAnimationFrame(()=>{document.getElementById(`plan-${ve}`)?.scrollIntoView({behavior:"smooth",block:"start"})})},ke=t2(S,s);return(0,y.jsxs)("div",{className:"theme-soft min-h-screen overflow-hidden text-[#4d3934]",children:[(0,y.jsx)(u2,{}),(0,y.jsx)("div",{className:"soft-app-bg fixed inset-0 -z-30"}),(0,y.jsx)("div",{className:"soft-grid-bg fixed inset-0 -z-20"}),(0,y.jsxs)("div",{className:"mx-auto flex w-full max-w-7xl flex-col gap-5 px-3 pb-28 pt-3 sm:px-5 lg:px-8",children:[(0,y.jsxs)("header",{className:"soft-header sticky top-3 z-40 flex items-center justify-between gap-2 rounded-[26px] border border-white/70 bg-white/78 px-2.5 py-2 shadow-[0_20px_60px_-35px_rgba(162,96,82,0.55)] backdrop-blur-2xl",children:[(0,y.jsxs)("button",{onClick:()=>e("plan"),className:"flex min-w-0 items-center gap-2.5 text-left",children:[(0,y.jsx)("span",{className:"grid h-10 w-10 shrink-0 place-items-center rounded-[18px] bg-[#ff9f95] text-white shadow-[0_12px_30px_-18px_rgba(255,122,113,0.8)]",children:(0,y.jsx)(hg,{className:"h-5 w-5"})}),(0,y.jsxs)("span",{className:"block min-w-0",children:[(0,y.jsx)("span",{className:"block truncate font-display text-base font-extrabold leading-none text-[#4d3934]",children:"Cutting Lab"}),(0,y.jsx)("span",{className:"mt-1 block truncate text-[11px] font-bold text-[#a47b72]",children:s("appSub")})]})]}),(0,y.jsx)("nav",{className:"ml-auto hidden shrink-0 grid-cols-4 rounded-[22px] border border-[#ffd8d1]/80 bg-[#fff7f0]/80 p-1 lg:grid",children:(0,y.jsx)(fS,{tab:t,setTab:e,mode:"top",t:s})}),(0,y.jsx)(d2,{locale:r,setLocale:i,t:s})]}),t==="plan"&&(0,y.jsx)(h2,{model:T,macroReport:S,activeCarbDay:ke,onIntake:()=>Ce(!0),onCopy:ce,copyStatus:We,onJump:oe,t:s}),t==="plan"&&(0,y.jsx)(f2,{model:T,targets:c,targetProfile:l,onIntake:()=>Ce(!0),intakeActive:ue,intakeSummary:$,onCopy:ce,copyStatus:We,t:s}),t==="plan"&&(0,y.jsx)(x2,{locale:r,t:s,model:T,lunchMode:d,setLunchMode:m,lunchKcal:v,setLunchKcal:b,tally:g,setTally:u,setMapQty:st,pre:k,setPre:X,drinkKey:W,setDrinkKey:F,drinkMl:O,setDrinkMl:H,snack:nt,setSnack:He,carbPlan:p,setCarbPlan:_,proteinKeys:M,toggleProtein:fe,fatKeys:E,toggleFat:bt,extraCarbs:x,setExtraCarbs:A,beefFat:I,setBeefFat:P,advancedOpen:q,setAdvancedOpen:ne,targets:c,targetProfile:l,setTargetProfile:o,macroReport:S,activeCarbDay:ke,resetDefaults:me,onTuneDinner:j,resetDinnerAdjustments:()=>Ne({})}),t==="detail"&&(0,y.jsx)(v2,{locale:r,t:s,model:T,targets:c,targetProfile:l,setTargetProfile:o,macroReport:S,activeCarbDay:ke,tdee:h,setTdee:f,lunchMode:d,setLunchMode:m,lunchKcal:v,setLunchKcal:b,tally:g,setTally:u,pre:k,setPre:X,setMapQty:st,drinkKey:W,setDrinkKey:F,drinkMl:O,setDrinkMl:H,snack:nt,setSnack:He,saltG:Z,setSaltG:ee,foodK:le,setFoodK:ye}),t==="shop"&&(0,y.jsx)(_2,{locale:r,t:s,model:T,shopDays:we,setShopDays:$e,setShopPlan:de}),t==="cheat"&&(0,y.jsx)(b2,{locale:r,t:s,cheat:rt,setCheat:ut,cheatTotal:B,cheatSurplus:K,tdee:h,dayKcal:T.total.kcal})]}),(0,y.jsx)(w2,{locale:r,t:s,open:re,setOpen:Ce,model:T,lunchMode:d,setLunchMode:m,lunchKcal:v,setLunchKcal:b,tally:g,setTally:u,pre:k,setPre:X,setMapQty:st,drinkKey:W,setDrinkKey:F,drinkMl:O,setDrinkMl:H,snack:nt,setSnack:He,dinnerSummary:T.dinnerItems.slice(0,4).map(ve=>{let Ee=Il(ve,r);return`${Ee.short||Ee.name} ${Pe(Ee.qty)}${Ee.unit}`}).join(" \xB7 ")}),(0,y.jsx)(E2,{open:D,setOpen:Mt,text:vt,onCopied:()=>{Mt(!1),ft("copied"),window.clearTimeout(ze.current),ze.current=window.setTimeout(()=>ft("idle"),1800)},t:s}),(0,y.jsxs)("button",{onClick:()=>Ce(!0),className:"fixed bottom-5 right-5 z-50 hidden h-14 w-14 place-items-center rounded-[22px] border border-white/80 bg-[#ffcf7d] text-[#5d4037] shadow-[0_18px_38px_-22px_rgba(204,125,57,0.8)] transition hover:-translate-y-0.5 lg:grid","aria-label":s("intakeDrawerTitle"),children:[(0,y.jsx)(Wn,{className:"h-6 w-6"}),(Q||ae)&&(0,y.jsx)("span",{className:"absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#69cda5]"})]}),(0,y.jsx)("nav",{className:"fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 rounded-[24px] border border-white/80 bg-white/82 p-1.5 shadow-[0_18px_65px_-35px_rgba(134,80,70,0.8)] backdrop-blur-2xl lg:hidden",children:(0,y.jsx)(fS,{tab:t,setTab:e,mode:"bottom",t:s})})]})}function d2({locale:t,setLocale:e,t:n}){return(0,y.jsx)("div",{"data-language-toggle":!0,className:"grid shrink-0 grid-cols-2 rounded-[18px] border border-[#ffd8d1]/80 bg-[#fff9f4] p-1","aria-label":n("language"),children:gS.map(i=>(0,y.jsx)("button",{onClick:()=>e(i),className:`rounded-[14px] px-2.5 py-2 text-[11px] font-extrabold transition sm:px-3 ${t===i?"bg-[#ff9f95] text-white shadow-[0_10px_24px_-18px_rgba(255,122,113,0.8)]":"text-[#a47b72] hover:bg-white"}`,children:n(i)},i))})}function fS({tab:t,setTab:e,mode:n,t:i}){return QC.map(r=>{let s=r.icon;return(0,y.jsxs)("button",{onClick:()=>e(r.id),className:`grid h-11 place-items-center rounded-[18px] px-2 text-[11px] font-extrabold transition ${n==="top"?"min-w-20 grid-cols-[16px_auto] gap-1.5":"grid-rows-[18px_auto] gap-0.5"} ${t===r.id?"bg-[#5fc89e] text-white shadow-[0_12px_28px_-20px_rgba(57,156,118,0.9)]":"text-[#a47b72] hover:bg-white hover:text-[#4d3934]"}`,"aria-label":i(r.labelKey),children:[(0,y.jsx)(s,{className:"h-4 w-4"}),(0,y.jsx)("span",{children:i(r.labelKey)})]},r.id)})}function h2({model:t,macroReport:e,activeCarbDay:n,onIntake:i,onCopy:r,copyStatus:s,onJump:a,t:o}){let l={idle:o("copy"),copying:o("copying"),copied:o("copied"),failed:o("retry")}[s]||o("copy"),c=[{key:"intake",icon:Wn,label:o("intake"),value:`${Math.round(t.beforeDinner.kcal)} kcal`,onClick:()=>a("intake")},{key:"dinner",icon:ah,label:o("dinner"),value:`${Math.round(t.dinner.kcal)} kcal`,onClick:()=>a("dinner")},{key:"rhythm",icon:Ba,label:n.label,value:`C ${e.carbPerKg}g/kg`,onClick:()=>a("rhythm")},{key:"edit-intake",icon:pg,label:o("editIntake"),value:`${Math.round(t.beforeDinner.kcal)} kcal`,onClick:i},{key:"copy",icon:Wn,label:l,value:o("record"),onClick:r}];return(0,y.jsx)("div",{"data-plan-flow-dock":!0,className:"sticky top-[74px] z-30 rounded-[24px] border border-white/75 bg-white/80 p-1.5 shadow-[0_18px_60px_-40px_rgba(134,80,70,0.65)] backdrop-blur-2xl lg:top-[82px]",children:(0,y.jsx)("div",{className:"grid grid-cols-5 gap-1",children:c.map(h=>{let f=h.icon;return(0,y.jsxs)("button",{"data-flow-action":h.key,onClick:h.onClick,className:"min-w-0 rounded-[18px] border border-[#ffe3da] bg-[#fff9f4]/90 px-1.5 py-2 text-left transition hover:-translate-y-0.5 hover:border-[#ffb8ae] hover:bg-white",children:[(0,y.jsx)(f,{className:"mx-auto h-4 w-4 text-[#ff8d82]"}),(0,y.jsx)("div",{className:"mt-1 truncate text-center font-cjk text-[11px] font-extrabold leading-none text-[#4d3934]",children:h.label}),(0,y.jsx)("div",{className:"mt-1 truncate text-center font-mono text-[9px] leading-none text-[#a47b72]",children:h.value})]},h.key)})})})}function f2({model:t,targets:e,targetProfile:n,onIntake:i,intakeActive:r,intakeSummary:s,onCopy:a,copyStatus:o,t:l}){let c={idle:{label:l("copy"),sub:l("record"),icon:Wn},copying:{label:l("copying"),sub:"clipboard",icon:Wn},copied:{label:l("copied"),sub:"ok",icon:ug},failed:{label:l("retry"),sub:"clipboard",icon:Wn}}[o]||{label:l("copy"),sub:l("record"),icon:Wn};return(0,y.jsxs)("section",{className:"grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch",children:[(0,y.jsx)("div",{className:"soft-hero-panel relative overflow-hidden rounded-[34px] border border-white/70 bg-white/72 p-5 shadow-[0_30px_90px_-60px_rgba(134,80,70,0.75)] backdrop-blur-2xl sm:p-7",children:(0,y.jsxs)("div",{className:"relative z-10 flex h-full min-h-[330px] flex-col justify-between",children:[(0,y.jsxs)("div",{children:[(0,y.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,y.jsxs)(T2,{icon:Zy,children:[Pe(n.bodyWeightKg)," kg \xB7 P ",Pe(n.proteinPerKg,1),"g/kg \xB7 F ",Pe(n.fatMinPerKg,1),"g/kg"]}),(0,y.jsxs)("button",{"data-home-intake-button":!0,onClick:i,className:`inline-flex max-w-full items-center gap-2 rounded-[999px] border px-3 py-2 text-left text-xs font-bold transition hover:-translate-y-0.5 ${r?"border-[#6fd2aa] bg-[#e8fff4] text-[#2c765e]":"border-[#ffe3da] bg-white/72 text-[#a47b72]"}`,"aria-label":`${l("intake")}: ${s}`,children:[(0,y.jsx)(Wn,{className:"h-4 w-4 shrink-0"}),(0,y.jsx)("span",{children:l("intake")}),(0,y.jsxs)("span",{className:"rounded-full bg-white px-2 py-0.5 font-mono text-[10px]",children:[Math.round(t.beforeDinner.kcal)," kcal"]})]})]}),(0,y.jsxs)("h1",{className:"mt-7 max-w-2xl font-display text-4xl font-extrabold leading-[1.04] text-[#4d3934] sm:text-7xl",children:[l("heroTitle"),(0,y.jsx)("span",{className:"block text-[#ff8d82]",children:l("heroAccent")})]}),(0,y.jsx)("p",{className:"mt-4 max-w-xl text-sm font-semibold leading-7 text-[#8f6c64] sm:text-base",children:l("heroCopy")})]}),(0,y.jsxs)("div",{className:"mt-7 grid grid-cols-3 gap-2",children:[(0,y.jsx)(Sg,{icon:pg,label:l("editIntake"),sub:`${Math.round(t.beforeDinner.kcal)} kcal`,onClick:i}),(0,y.jsx)(Sg,{icon:c.icon,label:c.label,sub:c.sub,onClick:a,dataAttr:"copy-plan-button"}),(0,y.jsx)(Sg,{icon:dg,label:`${t.deficit>0?"-":"+"}${Math.abs(t.deficit)}`,sub:l("deficit")})]})]})}),(0,y.jsx)("div",{className:"overflow-hidden rounded-[34px] border border-white/70 bg-white/72 shadow-[0_30px_90px_-60px_rgba(134,80,70,0.75)] backdrop-blur-xl",children:(0,y.jsxs)("div",{className:"relative h-[230px] overflow-hidden sm:h-[360px] lg:h-full lg:min-h-[430px]",children:[(0,y.jsx)("img",{src:mS("protocol-hero-premium.jpg"),alt:"Cutting Lab dinner visual",className:"h-full w-full object-cover object-center brightness-[1.08] contrast-[0.95] saturate-[0.92]"}),(0,y.jsx)("div",{className:"soft-image-wash absolute inset-0"}),(0,y.jsxs)("div",{className:"absolute inset-x-0 bottom-0 p-4 sm:p-5",children:[(0,y.jsxs)("div",{className:"mb-3 flex items-end justify-between gap-3",children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{className:"text-xs font-extrabold text-[#8f6c64]",children:l("dinnerKcal")}),(0,y.jsx)("div",{className:"font-display text-5xl font-extrabold leading-none text-[#4d3934]",children:Math.round(t.dinner.kcal)})]}),(0,y.jsxs)("div",{className:"rounded-[22px] border border-white/80 bg-white/78 px-3 py-2 text-right backdrop-blur",children:[(0,y.jsx)("div",{className:"text-[11px] font-bold text-[#a47b72]",children:l("todayTotal")}),(0,y.jsx)("div",{className:"font-mono text-xl font-bold text-[#5fc89e]",children:Math.round(t.total.kcal)})]})]}),(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[(0,y.jsx)(ch,{label:"P",value:t.total.p,target:e.p,unit:"g"}),(0,y.jsx)(ch,{label:"C",value:t.total.c,target:e.c,unit:"g"}),(0,y.jsx)(ch,{label:"F",value:t.total.f,target:e.f,unit:"g"}),(0,y.jsx)(ch,{label:"Kcal",value:t.total.kcal,target:e.kcal,unit:""})]})]})]})})]})}function p2({locale:t,t:e,lunchMode:n,setLunchMode:i,lunchKcal:r,setLunchKcal:s,tally:a,setTally:o,setMapQty:l}){return(0,y.jsxs)("div",{children:[(0,y.jsx)(A2,{value:n,onChange:i,options:[{value:"quick",label:e("quickKcal")},{value:"tally",label:e("tallyMode")}]}),n==="quick"?(0,y.jsx)(C2,{value:r,onChange:s,t:e}):(0,y.jsx)("div",{className:"mt-5 grid gap-2 sm:grid-cols-2",children:Object.entries(vS).map(([c,h])=>{let f=vn(h,t);return(0,y.jsx)(Cg,{label:f.label,meta:`${Pe(yi($t(h,h.step)))} kcal / ${h.step}${f.unit}`,value:a[c]||0,unit:f.unit,step:h.step,max:h.max,onChange:d=>l(o,c,d,h.max)},c)})})]})}function m2({locale:t,t:e,pre:n,setPre:i,setMapQty:r,drinkKey:s,setDrinkKey:a,drinkMl:o,setDrinkMl:l,model:c}){let h=MS(n,s,o),f=wg(n,s,o,t,e),d=Vt(c.pre,c.drink),m=()=>{i({}),a("none"),l(0)},v=()=>{i({banana:1}),a("tomato"),l(400)},b=()=>{i({pineapple:1}),a("tomato"),l(400)},g=u=>{a(u),u==="none"?l(0):o<=0&&l(400)};return(0,y.jsxs)("div",{className:"grid gap-4",children:[(0,y.jsxs)("div",{className:`rounded-[24px] border p-3 ${h?"border-[#bdf0d9] bg-[#edfff6]":"border-[#ffe3da] bg-white/64"}`,children:[(0,y.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,y.jsx)("span",{className:"text-xs font-extrabold text-[#a47b72]",children:e("fuel")}),(0,y.jsx)("span",{className:h?"font-extrabold text-[#3da77d]":"font-extrabold text-[#a47b72]",children:e(h?"on":"off")})]}),(0,y.jsx)("div",{className:"mt-2 text-sm font-bold leading-6 text-[#4d3934]",children:f}),(0,y.jsxs)("div",{className:"mt-2 font-mono text-xs font-bold text-[#a47b72]",children:["P",Pe(d.p)," C",Pe(d.c)," F",Pe(d.f)," \xB7 ",Math.round(d.kcal)," kcal"]})]}),(0,y.jsx)(ri,{title:e("fuelPreset"),children:(0,y.jsxs)("div",{className:"grid grid-cols-3 gap-2",children:[(0,y.jsxs)("button",{onClick:m,className:"rounded-[22px] border border-[#ffe3da] bg-white/70 p-3 text-left transition hover:border-[#ffb8ae]",children:[(0,y.jsx)("div",{className:"font-cjk text-sm font-extrabold text-[#4d3934]",children:e("applyNoFuel")}),(0,y.jsx)("div",{className:"mt-1 text-[11px] font-semibold text-[#a47b72]",children:e("applyNoFuelSub")})]}),(0,y.jsxs)("button",{onClick:v,className:"rounded-[22px] border border-[#ffd6a5] bg-[#fff6df] p-3 text-left transition hover:-translate-y-0.5",children:[(0,y.jsx)("div",{className:"font-cjk text-sm font-extrabold text-[#4d3934]",children:e("lightFuel")}),(0,y.jsx)("div",{className:"mt-1 text-[11px] font-semibold text-[#a47b72]",children:e("lightFuelSub")})]}),(0,y.jsxs)("button",{onClick:b,className:"rounded-[22px] border border-[#bdf0d9] bg-[#edfff6] p-3 text-left transition hover:-translate-y-0.5",children:[(0,y.jsx)("div",{className:"font-cjk text-sm font-extrabold text-[#4d3934]",children:e("pineappleBox")}),(0,y.jsx)("div",{className:"mt-1 text-[11px] font-semibold text-[#a47b72]",children:e("pineappleBoxSub")})]})]})}),(0,y.jsx)(ri,{title:e("eatWhat"),children:(0,y.jsx)("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(mh).map(([u,p])=>{let _=vn(p,t);return(0,y.jsx)(Cg,{label:_.label,meta:`${Pe(yi($t(p,p.step)))} kcal / ${p.step}${_.unit}`,value:n[u]||0,unit:_.unit,step:p.step,max:p.max,onChange:M=>r(i,u,M,p.max)},u)})})}),(0,y.jsxs)(ri,{title:e("drinkWhat"),children:[(0,y.jsx)("div",{className:"grid grid-cols-3 gap-2",children:Object.entries(Ps).map(([u,p])=>{let _=vn(p,t);return(0,y.jsx)(Mg,{active:s===u,onClick:()=>g(u),title:_.label,meta:_.sub,tone:"green"},u)})}),(0,y.jsx)("div",{className:"mt-3 grid grid-cols-3 gap-2",children:[200,400,600].map(u=>(0,y.jsxs)(gh,{active:o===u,onClick:()=>l(u),children:[u,"ml"]},u))}),(0,y.jsx)("div",{className:"mt-3",children:(0,y.jsx)(Is,{label:e("sauce"),unit:"ml",value:o,min:0,max:2e3,onChange:u=>l(Ze(u,0,2e3))})})]})]})}function g2({locale:t,t:e,snack:n,setSnack:i,dinnerSummary:r}){let s=Eg(n),a=(o,l)=>{i(c=>({...c,[o]:o==="name"?l:Ze(l,0,o==="kcal"?5e3:500)}))};return(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{className:"text-xs font-extrabold text-[#a47b72]",children:e("snackName")}),(0,y.jsx)("input",{value:n.name,onChange:o=>a("name",o.target.value),className:"mt-2 h-11 w-full rounded-[18px] border border-[#ffe3da] bg-white/70 px-3 text-sm font-bold text-[#4d3934] outline-none focus:border-[#ff9f95]"}),(0,y.jsx)("div",{className:"mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4",children:[["kcal",e("calorie")],["p",e("protein")],["c",e("carb")],["f",e("fat")]].map(([o,l])=>(0,y.jsx)(Is,{label:l,unit:o==="kcal"?"":"g",value:n[o],min:0,max:o==="kcal"?5e3:500,onChange:c=>a(o,c)},o))}),(0,y.jsxs)("div",{className:"mt-4 rounded-[24px] border border-[#ffd6a5] bg-[#fff6df] p-4",children:[(0,y.jsx)("div",{className:"text-xs font-extrabold text-[#d8903d]",children:e("dinnerWillClose")}),(0,y.jsxs)("div",{className:"mt-2 text-sm font-semibold leading-6 text-[#8f6c64]",children:[r||e("noDinner")," \xB7 ",Math.round(yi(n))," kcal"]})]}),s&&(0,y.jsxs)("button",{onClick:()=>i({name:t==="ja"?"\u624B\u5165\u529B\u306E\u9593\u98DF":"\u624B\u52A8\u52A0\u9910",p:0,c:0,f:0,kcal:0}),className:"mt-4 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/70 px-3 py-2 text-xs font-extrabold text-[#a47b72] hover:text-[#ff7d75]",children:[(0,y.jsx)(za,{className:"h-4 w-4"}),e("clearSnack")]})]})}function Ag(t){let{locale:e,t:n,model:i,lunchMode:r,setLunchMode:s,lunchKcal:a,setLunchKcal:o,tally:l,setTally:c,setMapQty:h,pre:f,setPre:d,drinkKey:m,setDrinkKey:v,drinkMl:b,setDrinkMl:g,snack:u,setSnack:p,dinnerSummary:_}=t;return(0,y.jsxs)("div",{className:"grid gap-5",children:[(0,y.jsxs)("div",{className:"grid gap-2 sm:grid-cols-4",children:[(0,y.jsx)(cn,{label:n("beforeDinnerTotal"),value:Math.round(i.beforeDinner.kcal),sub:`P${Pe(i.beforeDinner.p)} C${Pe(i.beforeDinner.c)} F${Pe(i.beforeDinner.f)}`}),(0,y.jsx)(cn,{label:n("lunch"),value:Math.round(i.lunch.kcal),sub:"kcal"}),(0,y.jsx)(cn,{label:n("fuel"),value:Math.round(Vt(i.pre,i.drink).kcal),sub:wg(f,m,b,e,n)}),(0,y.jsx)(cn,{label:n("snack"),value:Math.round(yi(u)),sub:bS(u,n)})]}),(0,y.jsx)(ri,{title:n("lunch"),children:(0,y.jsx)(p2,{locale:e,t:n,lunchMode:r,setLunchMode:s,lunchKcal:a,setLunchKcal:o,tally:l,setTally:c,setMapQty:h})}),(0,y.jsxs)("div",{className:"grid gap-5 xl:grid-cols-[1.08fr_0.92fr]",children:[(0,y.jsx)(ri,{title:n("fuel"),children:(0,y.jsx)(m2,{locale:e,t:n,pre:f,setPre:d,setMapQty:h,drinkKey:m,setDrinkKey:v,drinkMl:b,setDrinkMl:g,model:i})}),(0,y.jsx)(ri,{title:n("manualSnack"),children:(0,y.jsx)(g2,{locale:e,t:n,snack:u,setSnack:p,dinnerSummary:_})})]})]})}function x2(t){let{locale:e,t:n,model:i,lunchMode:r,setLunchMode:s,lunchKcal:a,setLunchKcal:o,tally:l,setTally:c,setMapQty:h,pre:f,setPre:d,drinkKey:m,setDrinkKey:v,drinkMl:b,setDrinkMl:g,snack:u,setSnack:p,carbPlan:_,setCarbPlan:M,proteinKeys:C,toggleProtein:E,fatKeys:R,toggleFat:x,extraCarbs:A,setExtraCarbs:I,beefFat:P,setBeefFat:k,advancedOpen:X,setAdvancedOpen:W,targets:F,targetProfile:O,setTargetProfile:H,macroReport:Z,activeCarbDay:ee,resetDefaults:le,onTuneDinner:ye,resetDinnerAdjustments:we}=t,$e=i.dinnerItems.some(de=>de.adjustment!==0),Qe=(de,q,ne,re)=>{H(Ce=>({...Pl,...Ce||{},[de]:Ze(q,ne,re)}))};return(0,y.jsxs)("main",{className:"grid gap-5 lg:grid-cols-[0.9fr_1.1fr]",children:[(0,y.jsxs)("section",{className:"space-y-5",children:[(0,y.jsx)(Gi,{id:"plan-intake",eyebrow:n("planIntakeEyebrow"),title:n("intakeHubTitle"),icon:Wn,children:(0,y.jsx)(Ag,{locale:e,t:n,model:i,lunchMode:r,setLunchMode:s,lunchKcal:a,setLunchKcal:o,tally:l,setTally:c,setMapQty:h,pre:f,setPre:d,drinkKey:m,setDrinkKey:v,drinkMl:b,setDrinkMl:g,snack:u,setSnack:p,dinnerSummary:i.dinnerItems.slice(0,4).map(de=>{let q=Il(de,e);return`${q.short||q.name} ${Pe(q.qty)}${q.unit}`}).join(" \xB7 ")})}),(0,y.jsx)(ES,{open:X,onToggle:()=>W(!X),title:n("advanced"),subtitle:n("advancedSub"),children:(0,y.jsxs)("div",{className:"grid gap-5",children:[(0,y.jsx)(ri,{title:n("dinnerProtein"),children:(0,y.jsx)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries(hh).map(([de,q])=>{let ne=vn(q,e);return(0,y.jsx)(Mg,{active:C.includes(de),onClick:()=>E(de),title:ne.short,meta:ne.note},de)})})}),(0,y.jsx)(ri,{title:n("fatSource"),children:(0,y.jsx)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries(ph).map(([de,q])=>{let ne=vn(q,e);return(0,y.jsx)(Mg,{active:R.includes(de),onClick:()=>x(de),title:ne.short,meta:`${ne.f}g / ${ne.unit}`,tone:"amber"},de)})})}),(0,y.jsx)(ri,{title:n("extras"),children:(0,y.jsx)("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(ii).map(([de,q])=>{let ne=vn(q,e);return(0,y.jsx)(Cg,{label:ne.label,meta:`${Pe(yi($t(q,q.step)))} kcal / ${q.step}${ne.unit}`,value:A[de]||0,unit:ne.unit,step:q.step,max:q.max,onChange:re=>h(I,de,re,q.max)},de)})})}),(0,y.jsxs)(ri,{title:n("beefFat"),children:[(0,y.jsx)("div",{className:"grid grid-cols-4 gap-2",children:[5,9,13,18].map(de=>(0,y.jsxs)(gh,{active:P===de,onClick:()=>k(de),children:[de,"g"]},de))}),(0,y.jsxs)("div",{className:"mt-3 flex items-center gap-3",children:[(0,y.jsx)("input",{type:"number",value:P,onChange:de=>k(Ze(de.target.value,0,40)),className:"h-11 w-24 rounded-[18px] border border-[#ffe3da] bg-white/70 text-center font-mono text-lg font-bold text-[#4d3934] outline-none focus:border-[#ff9f95]"}),(0,y.jsx)("span",{className:"text-xs font-semibold text-[#a47b72]",children:"g / 100g raw"})]})]}),(0,y.jsxs)(ri,{title:n("targetFormula"),children:[(0,y.jsx)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[["bodyWeightKg",n("bodyWeight"),"kg",30,250],["proteinPerKg",n("proteinRatio"),"g/kg",.8,3],["fatMinPerKg",n("fatMin"),"g/kg",.3,1.5],["kcal",n("calorie"),"kcal",1e3,5e3]].map(([de,q,ne,re,Ce])=>(0,y.jsx)(Is,{label:q,unit:ne,value:O[de],min:re,max:Ce,onChange:Ue=>Qe(de,Ue,re,Ce)},de))}),(0,y.jsx)(TS,{targets:F,targetProfile:O,t:n}),(0,y.jsxs)("button",{onClick:le,className:"mt-3 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/60 px-3 py-2 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]",children:[(0,y.jsx)(za,{className:"h-4 w-4"}),n("resetDefault")]})]})]})})]}),(0,y.jsxs)("section",{className:"space-y-5",children:[(0,y.jsxs)(Gi,{id:"plan-dinner",eyebrow:n("dinnerAnswerEyebrow"),title:n("dinnerAnswerTitle"),icon:hg,children:[(0,y.jsx)(ri,{title:n("planChoiceTitle"),children:(0,y.jsx)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6",children:Object.entries(fh).map(([de,q])=>{let ne=vn(q,e);return(0,y.jsxs)("button",{onClick:()=>M(de),className:`rounded-[22px] border p-3 text-left transition hover:-translate-y-0.5 ${_===de?"border-[#ffb8ae] bg-[#fff0ed] text-[#4d3934]":"border-[#ffe3da] bg-white/58 text-[#8f6c64] hover:border-[#ffb8ae] hover:bg-white"}`,children:[(0,y.jsx)("div",{className:"h-2 w-10 rounded-full",style:{backgroundColor:ne.color}}),(0,y.jsx)("div",{className:"mt-3 font-cjk text-sm font-extrabold",children:ne.short}),(0,y.jsx)("div",{className:"mt-1 text-[11px] font-semibold text-[#a47b72]",children:ne.sub})]},de)})})}),(0,y.jsx)("div",{className:"grid gap-2",children:i.dinnerItems.length?i.dinnerItems.map((de,q)=>(0,y.jsx)(L2,{item:Il(de,e),index:q,onTune:ye,t:n},de.key)):(0,y.jsx)("div",{className:"rounded-[22px] border border-[#ffe3da] bg-white/58 p-4 text-sm font-bold text-[#a47b72]",children:n("noDinner")})}),$e&&(0,y.jsxs)("button",{onClick:we,className:"mt-3 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/60 px-3 py-2 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]",children:[(0,y.jsx)(za,{className:"h-4 w-4"}),n("resetTune")]})]}),(0,y.jsx)(Gi,{id:"plan-rhythm",eyebrow:n("rhythmEyebrow"),title:n("rhythmTitle"),icon:Ba,children:(0,y.jsxs)("div",{className:"space-y-3",children:[(0,y.jsx)(dh,{label:n("protein"),value:i.total.p,target:F.p,unit:"g",color:"#ff8d82"}),(0,y.jsx)(dh,{label:n("carb"),value:i.total.c,target:F.c,unit:"g",color:"#ffcf7d"}),(0,y.jsx)(dh,{label:n("fat"),value:i.total.f,target:F.f,unit:"g",color:"#69cda5"}),(0,y.jsx)(dh,{label:n("calorie"),value:i.total.kcal,target:F.kcal,unit:"kcal",color:"#85d7e3"}),(0,y.jsx)(I2,{report:Z,activeCarbDay:ee,t:n})]})})]})]})}function v2(t){let{locale:e,t:n,model:i,targets:r,targetProfile:s,setTargetProfile:a,macroReport:o,activeCarbDay:l,tdee:c,setTdee:h,lunchMode:f,setLunchMode:d,lunchKcal:m,setLunchKcal:v,tally:b,setTally:g,pre:u,setPre:p,setMapQty:_,drinkKey:M,setDrinkKey:C,drinkMl:E,setDrinkMl:R,snack:x,setSnack:A,saltG:I,setSaltG:P,foodK:k,setFoodK:X}=t,W=i.potassium>=i.sodium,F=(O,H,Z,ee)=>{a(le=>({...Pl,...le||{},[O]:Ze(H,Z,ee)}))};return(0,y.jsxs)("main",{className:"grid gap-5 lg:grid-cols-[1fr_1fr]",children:[(0,y.jsxs)(Gi,{eyebrow:n("ledger"),title:n("ledgerTitle"),icon:Wn,children:[(0,y.jsx)(Rl,{label:n("lunch"),macro:i.lunch}),(0,y.jsx)(Rl,{label:n("preTraining"),macro:i.pre}),(0,y.jsx)(Rl,{label:n("drinkElectrolyte"),macro:i.drink}),(0,y.jsx)(Rl,{label:n("snackMeal"),macro:i.snack}),(0,y.jsx)(Rl,{label:n("dinner"),macro:i.dinner,strong:!0})]}),(0,y.jsx)(Gi,{eyebrow:n("planIntakeEyebrow"),title:n("intakeHubTitle"),icon:Wn,children:(0,y.jsx)(Ag,{locale:e,t:n,model:i,lunchMode:f,setLunchMode:d,lunchKcal:m,setLunchKcal:v,tally:b,setTally:g,setMapQty:_,pre:u,setPre:p,drinkKey:M,setDrinkKey:C,drinkMl:E,setDrinkMl:R,snack:x,setSnack:A,dinnerSummary:i.dinnerItems.slice(0,4).map(O=>{let H=Il(O,e);return`${H.short||H.name} ${Pe(H.qty)}${H.unit}`}).join(" \xB7 ")})}),(0,y.jsxs)(Gi,{eyebrow:n("targetFormula"),title:n("targetByWeight"),icon:dg,children:[(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-5",children:[[["bodyWeightKg",n("bodyWeight"),"kg",30,250],["proteinPerKg",n("proteinRatio"),"g/kg",.8,3],["fatMinPerKg",n("fatMin"),"g/kg",.3,1.5],["kcal",n("calorie"),"kcal",1e3,5e3]].map(([O,H,Z,ee,le])=>(0,y.jsx)(Is,{label:H,unit:Z,value:s[O],min:ee,max:le,onChange:ye=>F(O,ye,ee,le)},O)),(0,y.jsx)(Is,{label:n("tdee"),unit:"kcal",value:c,min:0,max:9e3,onChange:O=>h(Ze(O,0,9e3))})]}),(0,y.jsx)(TS,{targets:r,targetProfile:s,t:n})]}),(0,y.jsx)(Gi,{eyebrow:n("rhythmEyebrow"),title:n("structureTitle"),icon:Ba,children:(0,y.jsx)(N2,{report:o,activeCarbDay:l,targets:r,t:n})}),(0,y.jsxs)(Gi,{eyebrow:n("electrolyte"),title:n("electrolyteTitle"),icon:tS,children:[(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,y.jsx)(Is,{label:n("salt"),unit:"g",value:I,min:0,max:20,onChange:O=>P(Ze(O,0,20))}),(0,y.jsx)(Is,{label:n("foodK"),unit:"mg",value:k,min:0,max:8e3,onChange:O=>X(Ze(O,0,8e3))})]}),(0,y.jsxs)("div",{className:`mt-4 rounded-[24px] border p-4 ${W?"border-[#bdf0d9] bg-[#edfff6]":"border-[#ffd1cb] bg-[#fff1ee]"}`,children:[(0,y.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,y.jsx)("span",{className:"text-sm font-bold text-[#8f6c64]",children:"K / Na"}),(0,y.jsx)("span",{className:W?"font-extrabold text-[#3da77d]":"font-extrabold text-[#ff7d75]",children:n(W?"balanced":"lowPotassium")})]}),(0,y.jsxs)("div",{className:"mt-2 text-xs font-semibold text-[#a47b72]",children:["K ",Math.round(i.potassium)," mg \xB7 Na ",Math.round(i.sodium)," mg"]})]})]})]})}function _2({locale:t,t:e,model:n,shopDays:i,setShopDays:r,setShopPlan:s}){let[a,o]=(0,Le.useState)({}),[l,c]=(0,Le.useState)(!1),h=[{tone:"red",label:t==="ja"?"\u305F\u3093\u3071\u304F":"\u86CB\u767D\u4E3B\u83DC",caption:t==="ja"?"\u8089\u3001\u30C1\u30AD\u30F3\u3001\u30AA\u30A4\u30B3\u30B9":"\u8089\u3001\u9E21\u80F8\u3001Oikos \u5148\u8865\u9F50",icon:eS,accent:"#ff8d82"},{tone:"green",label:t==="ja"?"\u4E3B\u98DF":"\u4E3B\u98DF\u78B3\u6C34",caption:t==="ja"?"\u5468\u671F\u5206\u306E\u70AD\u6C34\u5316\u7269":"\u6309\u4E00\u5468\u671F\u671B\u5907\u8D27",icon:ah,accent:"#69cda5"},{tone:"gold",label:t==="ja"?"\u679C\u7269":"\u6C34\u679C\u52A0\u6599",caption:t==="ja"?"\u30D1\u30A4\u30F3\u3001\u30D0\u30CA\u30CA\u3001\u308A\u3093\u3054":"\u83E0\u841D 240g\u3001\u9999\u8549\u3001\u82F9\u679C",icon:Jy,accent:"#ffcf7d"},{tone:"amber",label:t==="ja"?"\u8102\u8CEA":"\u6CB9\u8102\u53E3\u5473",caption:t==="ja"?"\u5375\u3001\u30C1\u30FC\u30BA\u3001\u30BD\u30FC\u30B9\u3001\u30CA\u30C3\u30C4":"\u86CB\u3001\u829D\u58EB\u3001\u9171\u548C\u575A\u679C",icon:sh,accent:"#f1b36a"}],f={red:0,green:1,gold:2,amber:3},d=Object.fromEntries(h.map(x=>[x.tone,x])),m=n.shopping.filter(x=>x.enabled),v=m.filter(x=>x.buyQty>0),b=m.filter(x=>x.buyQty<=0),g=h.map(x=>({...x,items:n.shopping.filter(A=>A.tone===x.tone)})).filter(x=>x.items.length>0),u=cS(n.shopping,f),p=u.filter(x=>a[x.key]).length,_=v.reduce((x,A)=>Vt(x,A.macro),Vi),M=m.reduce((x,A)=>Vt(x,A.expectedMacro),Vi),C=(x,A)=>{s(I=>{let P=oh(I,n.shopping);return{...P,[x]:{...P[x],...A}}})},E=()=>{s(x=>{let A=oh(x,n.shopping);return Object.fromEntries(Object.entries(A).map(([I,P])=>[I,{...P,stock:0}]))})},R=x=>{o(A=>({...A,[x]:!A[x]}))};return(0,y.jsxs)("main",{className:"grid gap-5",children:[(0,y.jsxs)("section",{className:"relative overflow-hidden rounded-[34px] border border-white/70 bg-white/76 shadow-[0_30px_90px_-60px_rgba(134,80,70,0.75)]",children:[(0,y.jsx)("img",{src:mS("shop-basket.jpg"),alt:"weekly grocery basket",className:"absolute inset-0 h-full w-full object-cover opacity-40 brightness-[1.16] contrast-[0.92]"}),(0,y.jsx)("div",{className:"soft-shop-wash absolute inset-0"}),(0,y.jsxs)("div",{className:"relative grid gap-6 p-5 sm:p-7 lg:grid-cols-[1fr_0.95fr] lg:items-end",children:[(0,y.jsxs)("div",{children:[(0,y.jsxs)("div",{className:"inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-3 py-2 text-xs font-extrabold text-[#ff8d82] backdrop-blur",children:[(0,y.jsx)(nS,{className:"h-4 w-4"}),"market run"]}),(0,y.jsx)("h2",{className:"mt-4 font-display text-5xl font-extrabold leading-none text-[#4d3934]",children:e("shopHero")}),(0,y.jsx)("p",{className:"mt-3 max-w-xl text-sm font-semibold leading-7 text-[#8f6c64]",children:e("shopCopy")}),(0,y.jsxs)("div",{className:"mt-5 flex flex-wrap items-center gap-2",children:[[3,5,7,10].map(x=>(0,y.jsxs)(gh,{active:i===x,onClick:()=>r(x),children:[x," \u5929"]},x)),(0,y.jsxs)("button",{onClick:E,className:"inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/70 px-3 py-2 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]",children:[(0,y.jsx)(za,{className:"h-4 w-4"}),e("clearStock")]})]})]}),(0,y.jsxs)("div",{className:"grid grid-cols-3 gap-2",children:[(0,y.jsx)(yg,{icon:rS,label:e("cycle"),value:`${i}`,sub:"days"}),(0,y.jsx)(yg,{icon:Al,label:e("products"),value:u.length,sub:`${e("picked")}${p}`}),(0,y.jsx)(yg,{icon:Ba,label:e("actual"),value:Math.round(_.kcal),sub:"kcal"})]})]})]}),(0,y.jsxs)(Gi,{eyebrow:e("directPlan"),title:e("directPlanTitle"),icon:Al,children:[u.length>0?(0,y.jsx)("div",{className:"grid gap-3 sm:grid-cols-2 xl:grid-cols-3",children:u.map(x=>(0,y.jsx)(y2,{item:x,group:d[x.tone],picked:!!a[x.key],onToggle:()=>R(x.key),t:e},x.key))}):(0,y.jsxs)("div",{className:"rounded-[24px] border border-[#bdf0d9] bg-[#edfff6] p-4",children:[(0,y.jsx)("div",{className:"font-cjk text-sm font-extrabold text-[#3da77d]",children:e("nothingToBuy")}),(0,y.jsx)("div",{className:"mt-1 text-xs font-semibold leading-5 text-[#7a9789]",children:e("nothingToBuySub")})]}),(0,y.jsxs)("div",{className:"mt-4 grid grid-cols-4 gap-2",children:[(0,y.jsx)(cn,{label:e("products"),value:u.length}),(0,y.jsx)(cn,{label:e("picked"),value:p}),(0,y.jsx)(cn,{label:e("enough"),value:b.length}),(0,y.jsx)(cn,{label:"Kcal",value:Math.round(_.kcal)})]})]}),(0,y.jsx)(ES,{open:l,onToggle:()=>c(!l),title:e("stockTune"),subtitle:e("stockTuneSub"),children:(0,y.jsxs)("div",{className:"grid gap-5 lg:grid-cols-[0.86fr_1.14fr]",children:[(0,y.jsxs)("div",{className:"rounded-[24px] border border-[#ffe3da] bg-white/58 p-4",children:[(0,y.jsx)("div",{className:"text-xs font-extrabold text-[#a47b72]",children:"cycle target base"}),(0,y.jsxs)("div",{className:"mt-2 grid grid-cols-4 gap-2",children:[(0,y.jsx)(cn,{label:"P",value:Math.round(M.p)}),(0,y.jsx)(cn,{label:"C",value:Math.round(M.c)}),(0,y.jsx)(cn,{label:"F",value:Math.round(M.f)}),(0,y.jsx)(cn,{label:"Kcal",value:Math.round(M.kcal)})]})]}),(0,y.jsx)("div",{className:"grid gap-3",children:g.map(x=>(0,y.jsx)(S2,{group:x,shopDays:i,onUpdate:C,t:e},x.tone))})]})})]})}function y2({item:t,group:e,picked:n,onToggle:i,t:r}){let s=e?.icon||Al,a=e?.accent||"#ff8d82";return(0,y.jsxs)("button",{"data-direct-buy-card":!0,onClick:i,"aria-pressed":n,className:`min-h-[158px] rounded-[26px] border p-4 text-left transition hover:-translate-y-0.5 ${n?"border-[#9fe8ca] bg-[#edfff6]":"border-[#ffe3da] bg-white/62 hover:border-[#ffb8ae] hover:bg-white"}`,children:[(0,y.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,y.jsxs)("span",{className:"inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-extrabold",style:{backgroundColor:`${a}22`,color:a},children:[(0,y.jsx)(s,{className:"h-3.5 w-3.5"}),e?.label||r("products")]}),(0,y.jsx)("span",{className:`grid h-8 w-8 place-items-center rounded-[14px] border ${n?"border-[#9fe8ca] bg-[#69cda5] text-white":"border-[#ffe3da] bg-white/70 text-[#caa39b]"}`,children:(0,y.jsx)(ug,{className:"h-4 w-4"})})]}),(0,y.jsxs)("div",{className:"mt-4 min-w-0",children:[(0,y.jsx)("div",{className:"truncate font-cjk text-base font-extrabold text-[#4d3934]",children:t.label}),(0,y.jsxs)("div",{className:"mt-2 flex items-end gap-2",children:[(0,y.jsx)("span",{className:"font-display text-5xl font-extrabold leading-none text-[#4d3934]",children:Pe(t.buyQty)}),(0,y.jsx)("span",{className:"pb-1 text-xs font-bold text-[#a47b72]",children:t.unit})]}),(0,y.jsx)("div",{className:"mt-3 text-xs font-semibold leading-5 text-[#8f6c64]",children:t.reason}),(0,y.jsxs)("div",{className:"mt-2 text-[11px] font-semibold text-[#a47b72]",children:[r("target")," ",t.targetText," \xB7 ",r("stock")," ",t.stockText]})]})]})}function yg({icon:t,label:e,value:n,sub:i}){return(0,y.jsxs)("div",{className:"rounded-[24px] border border-white/80 bg-white/70 p-3 backdrop-blur",children:[(0,y.jsx)(t,{className:"h-4 w-4 text-[#ff8d82]"}),(0,y.jsx)("div",{className:"mt-3 font-display text-3xl font-extrabold leading-none text-[#4d3934]",children:n}),(0,y.jsxs)("div",{className:"mt-1 text-[11px] font-bold text-[#a47b72]",children:[e," \xB7 ",i]})]})}function S2({group:t,shopDays:e,onUpdate:n,t:i}){let r=t.icon,s=t.items.filter(a=>a.enabled&&a.buyQty>0).length;return(0,y.jsxs)("section",{className:"rounded-[26px] border border-[#ffe3da] bg-white/58 p-3",children:[(0,y.jsxs)("div",{className:"mb-3 flex items-center justify-between gap-3",children:[(0,y.jsxs)("div",{className:"flex min-w-0 items-center gap-2",children:[(0,y.jsx)("span",{className:"grid h-9 w-9 shrink-0 place-items-center rounded-[16px]",style:{backgroundColor:`${t.accent}24`,color:t.accent},children:(0,y.jsx)(r,{className:"h-4 w-4"})}),(0,y.jsxs)("div",{className:"min-w-0",children:[(0,y.jsx)("div",{className:"truncate font-cjk text-sm font-extrabold text-[#4d3934]",children:t.label}),(0,y.jsx)("div",{className:"mt-0.5 truncate text-[11px] font-semibold text-[#a47b72]",children:t.caption})]})]}),(0,y.jsxs)("span",{className:"rounded-full border border-[#ffe3da] bg-white/70 px-2.5 py-1 font-mono text-xs font-bold text-[#8f6c64]",children:[i("buy")," ",s,"/",t.items.length]})]}),(0,y.jsx)("div",{className:"grid gap-2",children:t.items.map(a=>(0,y.jsx)(M2,{item:a,accent:t.accent,shopDays:e,onUpdate:n,t:i},a.key))})]})}function M2({item:t,accent:e,shopDays:n,onUpdate:i,t:r}){let s=l=>{i(t.key,{target:Ze(xn(t.weeklyTarget+l,t.step),0,t.max??1/0)})},a=l=>{i(t.key,{stock:Ze(xn(t.stockQty+l,t.step),0,t.max??1/0)})},o=t.enabled?t.buyQty>0?`${r("buy")} ${Pe(t.buyQty)}${t.unit}`:r("enough"):r("skip");return(0,y.jsxs)("div",{"data-shop-item-row":!0,className:`rounded-[24px] border border-[#ffe3da] bg-white/64 p-3 transition ${t.enabled?"":"opacity-55"}`,children:[(0,y.jsxs)("div",{className:"grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start",children:[(0,y.jsxs)("div",{className:"min-w-0",children:[(0,y.jsx)("div",{className:"truncate font-cjk text-sm font-extrabold text-[#4d3934]",children:t.label}),(0,y.jsxs)("div",{className:"mt-1 text-xs font-semibold leading-5 text-[#a47b72]",children:[r("weeklyTarget")," ",Pe(t.weeklyTarget),t.unit," \xB7 ",n,"d ",Pe(t.targetQty),t.unit," \xB7 ",r("stock")," ",Pe(t.stockQty),t.unit]})]}),(0,y.jsxs)("div",{className:"flex items-center justify-between gap-2 sm:justify-end",children:[(0,y.jsxs)("div",{className:"rounded-[16px] px-2.5 py-1 text-right",style:{backgroundColor:`${e}22`},children:[(0,y.jsx)("div",{className:"font-mono text-sm font-bold text-[#4d3934]",children:o}),(0,y.jsx)("div",{className:"mt-0.5 text-[10px] font-bold text-[#a47b72]",children:"this run"})]}),(0,y.jsx)("button",{onClick:()=>i(t.key,{enabled:!t.enabled}),className:"h-9 rounded-[16px] border border-[#ffe3da] bg-white/70 px-3 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#4d3934]",children:t.enabled?r("skip"):r("add")})]})]}),(0,y.jsxs)("div",{className:"mt-3 grid gap-2 sm:grid-cols-2",children:[(0,y.jsx)(pS,{label:r("weeklyTarget"),value:t.weeklyTarget,unit:t.unit,onMinus:()=>s(-t.step),onPlus:()=>s(t.step)}),(0,y.jsx)(pS,{label:r("stock"),value:t.stockQty,unit:t.unit,onMinus:()=>a(-t.step),onPlus:()=>a(t.step)})]})]})}function pS({label:t,value:e,unit:n,onMinus:i,onPlus:r}){return(0,y.jsxs)("div",{className:"flex items-center justify-between gap-2 rounded-[18px] border border-[#ffe3da] bg-[#fff9f4] px-2.5 py-2",children:[(0,y.jsx)("span",{className:"text-[11px] font-extrabold text-[#a47b72]",children:t}),(0,y.jsxs)("div",{className:"flex items-center gap-1",children:[(0,y.jsx)(ns,{label:`-${t}`,onClick:i,icon:El}),(0,y.jsxs)("span",{className:"w-16 text-center font-mono text-xs font-bold text-[#4d3934]",children:[Pe(e),n]}),(0,y.jsx)(ns,{label:`+${t}`,onClick:r,icon:Tl})]})]})}function b2({locale:t,t:e,cheat:n,setCheat:i,cheatTotal:r,cheatSurplus:s,tdee:a,dayKcal:o}){let l=(c,h)=>{i(f=>{let d={...f},m=Ze(h,0,9);return m>0?d[c]=m:delete d[c],d})};return(0,y.jsxs)("main",{className:"grid gap-5 lg:grid-cols-[1fr_0.9fr]",children:[(0,y.jsx)(Gi,{eyebrow:e("navCheat"),title:e("cheatTitle"),icon:sh,children:(0,y.jsx)("div",{className:"grid gap-2 sm:grid-cols-2",children:_S.map(c=>{let h=vn(c,t);return(0,y.jsx)("div",{className:"rounded-[24px] border border-[#ffe3da] bg-white/62 p-3",children:(0,y.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{className:"font-cjk text-sm font-extrabold text-[#4d3934]",children:h.label}),(0,y.jsxs)("div",{className:"mt-1 text-xs font-semibold text-[#a47b72]",children:[h.kcal," kcal"]})]}),(0,y.jsx)(R2,{value:n[h.id]||0,onChange:f=>l(h.id,f)})]})},h.id)})})}),(0,y.jsxs)("section",{className:"overflow-hidden rounded-[34px] border border-white/70 bg-white/76 shadow-[0_30px_90px_-60px_rgba(134,80,70,0.75)]",children:[(0,y.jsx)("img",{src:bg("cheat.jpg"),alt:"cheat meal",className:"h-56 w-full object-cover brightness-[1.08] contrast-[0.94]"}),(0,y.jsxs)("div",{className:"p-5",children:[(0,y.jsx)("div",{className:"text-xs font-extrabold text-[#ff8d82]",children:e("cheatResult")}),(0,y.jsx)("div",{className:"mt-2 font-display text-6xl font-extrabold text-[#4d3934]",children:r}),(0,y.jsx)("div",{className:"text-sm font-bold text-[#a47b72]",children:e("cheatKcal")}),(0,y.jsxs)("div",{className:"mt-5 grid grid-cols-3 gap-2",children:[(0,y.jsx)(cn,{label:e("todayTotal"),value:Math.round(o+r)}),(0,y.jsx)(cn,{label:e("tdee"),value:a}),(0,y.jsx)(cn,{label:e("deficit"),value:(s>=0?"+":"")+s,hot:s>0})]}),(0,y.jsxs)("button",{onClick:()=>i({}),className:"mt-4 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/70 px-3 py-2 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]",children:[(0,y.jsx)(za,{className:"h-4 w-4"}),e("clear")]})]})]})]})}function w2({locale:t,t:e,open:n,setOpen:i,model:r,lunchMode:s,setLunchMode:a,lunchKcal:o,setLunchKcal:l,tally:c,setTally:h,pre:f,setPre:d,setMapQty:m,drinkKey:v,setDrinkKey:b,drinkMl:g,setDrinkMl:u,snack:p,setSnack:_,dinnerSummary:M}){return n?(0,y.jsxs)("div",{className:"fixed inset-0 z-[70]",children:[(0,y.jsx)("button",{className:"absolute inset-0 bg-[#5d4037]/30 backdrop-blur-sm",onClick:()=>i(!1),"aria-label":"close intake"}),(0,y.jsxs)("aside",{className:"absolute inset-y-0 right-0 flex w-[min(760px,96vw)] flex-col border-l border-white/80 bg-[#fffaf4] shadow-2xl",children:[(0,y.jsxs)("div",{className:"flex items-center justify-between border-b border-[#ffe3da] p-4",children:[(0,y.jsxs)("div",{className:"flex items-center gap-3",children:[(0,y.jsx)("img",{src:bg("pre.jpg"),alt:"",className:"h-12 w-12 rounded-[18px] object-cover brightness-[1.08]"}),(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{className:"font-display text-xl font-extrabold text-[#4d3934]",children:e("intakeDrawerTitle")}),(0,y.jsx)("div",{className:"text-[11px] font-bold text-[#a47b72]",children:e("intakeDrawerSub")})]})]}),(0,y.jsx)("button",{onClick:()=>i(!1),className:"grid h-9 w-9 place-items-center rounded-[16px] border border-[#ffe3da] bg-white/70 text-[#a47b72] hover:text-[#4d3934]","aria-label":"close",children:(0,y.jsx)(fg,{className:"h-4 w-4"})})]}),(0,y.jsx)("div",{className:"flex-1 overflow-y-auto p-4",children:(0,y.jsx)(Ag,{locale:t,t:e,model:r,lunchMode:s,setLunchMode:a,lunchKcal:o,setLunchKcal:l,tally:c,setTally:h,setMapQty:m,pre:f,setPre:d,drinkKey:v,setDrinkKey:b,drinkMl:g,setDrinkMl:u,snack:p,setSnack:_,dinnerSummary:M})})]})]}):null}function E2({open:t,setOpen:e,text:n,onCopied:i,t:r}){let s=(0,Le.useRef)(null);if((0,Le.useEffect)(()=>{if(!t)return;let o=window.setTimeout(()=>{s.current?.focus(),s.current?.select(),s.current?.setSelectionRange(0,n.length)},80);return()=>window.clearTimeout(o)},[t,n]),!t)return null;let a=async()=>{try{await yS(n),i()}catch{s.current?.focus(),s.current?.select(),s.current?.setSelectionRange(0,n.length)}};return(0,y.jsxs)("div",{className:"fixed inset-0 z-[80]",children:[(0,y.jsx)("button",{className:"absolute inset-0 bg-[#5d4037]/30 backdrop-blur-sm",onClick:()=>e(!1),"aria-label":"close copy panel"}),(0,y.jsxs)("aside",{className:"absolute inset-x-3 bottom-3 rounded-[28px] border border-white/80 bg-[#fffaf4] p-4 shadow-2xl sm:left-auto sm:right-5 sm:w-[min(520px,92vw)]",children:[(0,y.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{className:"font-display text-xl font-extrabold text-[#4d3934]",children:r("manualCopy")}),(0,y.jsx)("div",{className:"mt-1 text-xs font-semibold leading-5 text-[#a47b72]",children:r("manualCopySub")})]}),(0,y.jsx)("button",{onClick:()=>e(!1),className:"grid h-9 w-9 shrink-0 place-items-center rounded-[16px] border border-[#ffe3da] bg-white/70 text-[#a47b72] hover:text-[#4d3934]","aria-label":"close",children:(0,y.jsx)(fg,{className:"h-4 w-4"})})]}),(0,y.jsx)("textarea",{ref:s,readOnly:!0,value:n,className:"mt-4 h-48 w-full resize-none rounded-[20px] border border-[#ffe3da] bg-white/70 p-3 font-mono text-xs leading-5 text-[#4d3934] outline-none focus:border-[#ff9f95]"}),(0,y.jsx)("div",{className:"mt-3 flex justify-end gap-2",children:(0,y.jsxs)("button",{onClick:a,className:"inline-flex items-center gap-2 rounded-[18px] bg-[#ff9f95] px-3 py-2 text-xs font-extrabold text-white",children:[(0,y.jsx)(Wn,{className:"h-4 w-4"}),r("copyAgain")]})})]})]})}function Gi({id:t,eyebrow:e,title:n,icon:i,children:r}){return(0,y.jsxs)("section",{id:t,className:"soft-panel scroll-mt-28 rounded-[30px] border border-white/75 bg-white/74 p-4 shadow-[0_24px_70px_-52px_rgba(134,80,70,0.7)] backdrop-blur-2xl sm:p-5",children:[(0,y.jsxs)("div",{className:"mb-4 flex items-start justify-between gap-4",children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{className:"text-xs font-extrabold text-[#ff8d82]",children:e}),(0,y.jsx)("h2",{className:"mt-1 font-display text-2xl font-extrabold text-[#4d3934]",children:n})]}),i&&(0,y.jsx)("span",{className:"grid h-10 w-10 place-items-center rounded-[18px] bg-[#fff0ed] text-[#ff8d82]",children:(0,y.jsx)(i,{className:"h-5 w-5"})})]}),r]})}function T2({icon:t,children:e}){return(0,y.jsxs)("div",{className:"inline-flex items-center gap-2 rounded-full border border-[#ffe3da] bg-white/72 px-3 py-2 text-xs font-bold text-[#8f6c64]",children:[(0,y.jsx)(t,{className:"h-4 w-4 text-[#5fc89e]"}),(0,y.jsx)("span",{children:e})]})}function Sg({icon:t,label:e,sub:n,onClick:i,dataAttr:r}){return(0,y.jsxs)(i?"button":"div",{"data-copy-plan-button":r==="copy-plan-button"?!0:void 0,onClick:i,className:"min-w-0 rounded-[22px] border border-[#ffe3da] bg-white/70 px-3 py-3 text-left transition hover:-translate-y-0.5 hover:border-[#ffb8ae] hover:bg-white",children:[(0,y.jsx)(t,{className:"mb-1.5 h-4 w-4 text-[#ff8d82]"}),(0,y.jsx)("div",{className:"truncate text-sm font-extrabold text-[#4d3934]",children:e}),n&&(0,y.jsx)("div",{className:"mt-0.5 truncate text-[11px] font-bold text-[#a47b72]",children:n})]})}function ch({label:t,value:e,target:n,unit:i}){let r=e-n,s=Math.abs(r)<=(i?Math.max(8,n*.08):Math.max(80,n*.05));return(0,y.jsxs)("div",{className:"rounded-[18px] border border-white/75 bg-white/72 p-2 backdrop-blur",children:[(0,y.jsx)("div",{className:"text-[11px] font-extrabold text-[#a47b72]",children:t}),(0,y.jsx)("div",{className:"mt-1 font-mono text-lg font-bold text-[#4d3934]",children:Math.round(e)}),(0,y.jsxs)("div",{className:`text-[11px] font-bold ${s?"text-[#3da77d]":"text-[#ff8d82]"}`,children:[r>=0?"+":"",Math.round(r),i]})]})}function A2({value:t,onChange:e,options:n}){return(0,y.jsx)("div",{className:"grid grid-cols-2 rounded-[22px] border border-[#ffe3da] bg-[#fff9f4] p-1",children:n.map(i=>(0,y.jsx)("button",{onClick:()=>e(i.value),className:`rounded-[18px] px-3 py-2 text-sm font-extrabold transition ${t===i.value?"bg-[#ff9f95] text-white":"text-[#a47b72] hover:bg-white hover:text-[#4d3934]"}`,children:i.label},i.value))})}function gh({active:t,onClick:e,children:n}){return(0,y.jsx)("button",{onClick:e,className:`rounded-[18px] border px-3 py-2 text-xs font-extrabold transition ${t?"border-[#ffb8ae] bg-[#fff0ed] text-[#ff7d75]":"border-[#ffe3da] bg-white/62 text-[#a47b72] hover:border-[#ffb8ae] hover:bg-white hover:text-[#4d3934]"}`,children:n})}function ri({title:t,children:e}){return(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{className:"mb-2 text-xs font-extrabold text-[#a47b72]",children:t}),e]})}function Mg({active:t,onClick:e,title:n,meta:i,tone:r="gold"}){let s=r==="green"?"#69cda5":r==="amber"?"#f1b36a":"#ff9f95";return(0,y.jsxs)("button",{onClick:e,className:"rounded-[22px] border p-3 text-left transition hover:-translate-y-0.5",style:{borderColor:t?s:"#ffe3da",background:t?`${s}1f`:"rgba(255,255,255,0.66)"},children:[(0,y.jsx)("div",{className:"font-cjk text-sm font-extrabold text-[#4d3934]",children:n}),(0,y.jsx)("div",{className:"mt-1 text-[11px] font-semibold text-[#a47b72]",children:i})]})}function ES({open:t,onToggle:e,title:n,subtitle:i,children:r}){return(0,y.jsxs)("section",{className:"rounded-[30px] border border-white/75 bg-white/72 shadow-[0_24px_70px_-52px_rgba(134,80,70,0.7)] backdrop-blur-2xl",children:[(0,y.jsxs)("button",{onClick:e,className:"flex w-full items-center justify-between gap-3 p-4 text-left",children:[(0,y.jsxs)("span",{children:[(0,y.jsxs)("span",{className:"flex items-center gap-2 font-display text-2xl font-extrabold text-[#4d3934]",children:[(0,y.jsx)(iS,{className:"h-4 w-4 text-[#ff8d82]"}),n]}),(0,y.jsx)("span",{className:"mt-1 block text-xs font-semibold text-[#a47b72]",children:i})]}),(0,y.jsx)(Qy,{className:`h-5 w-5 text-[#a47b72] transition ${t?"rotate-180":""}`})]}),t&&(0,y.jsx)("div",{className:"border-t border-[#ffe3da] p-4",children:r})]})}function C2({value:t,onChange:e,t:n}){let i=(0,Le.useRef)(!1),[r,s]=(0,Le.useState)(String(Math.round(t)));(0,Le.useEffect)(()=>{i.current||s(String(Math.round(t)))},[t]);let a=o=>{let l=o.replace(/\D/g,"");if(!l){s(""),e(0);return}let c=l.replace(/^0+(?=\d)/,""),h=Ze(c,0,5e3);s(String(h)),e(h)};return(0,y.jsxs)("div",{className:"mt-5",children:[(0,y.jsx)("label",{className:"text-xs font-extrabold text-[#a47b72]",children:n("lunchKcal")}),(0,y.jsxs)("div",{className:"mt-2 flex items-end gap-3",children:[(0,y.jsx)("input",{type:"text",inputMode:"numeric",pattern:"[0-9]*","aria-label":n("lunchKcal"),value:r,onFocus:()=>{i.current=!0},onBlur:()=>{i.current=!1,s(String(Math.round(t)))},onChange:o=>a(o.target.value),className:"w-40 border-b-2 border-[#ffd8d1] bg-transparent font-display text-6xl font-extrabold leading-none text-[#4d3934] outline-none focus:border-[#ff9f95]"}),(0,y.jsx)("span",{className:"pb-2 text-xs font-extrabold text-[#a47b72]",children:"kcal"})]}),(0,y.jsx)("div",{className:"mt-4 flex flex-wrap gap-2",children:[600,700,800,900,1e3].map(o=>(0,y.jsx)(gh,{active:t===o,onClick:()=>e(o),children:o},o))})]})}function Cg({label:t,meta:e,value:n,unit:i,step:r,max:s,onChange:a}){return(0,y.jsxs)("div",{className:"grid grid-cols-[1fr_auto] items-center gap-3 rounded-[22px] border border-[#ffe3da] bg-white/64 p-3",children:[(0,y.jsxs)("div",{className:"min-w-0",children:[(0,y.jsx)("div",{className:"truncate font-cjk text-sm font-extrabold text-[#4d3934]",children:t}),(0,y.jsx)("div",{className:"mt-1 truncate text-[11px] font-semibold text-[#a47b72]",children:e})]}),(0,y.jsxs)("div",{className:"flex items-center gap-1",children:[(0,y.jsx)(ns,{label:`-${t}`,onClick:()=>a(n-r),icon:El}),(0,y.jsxs)("span",{className:"w-14 text-center font-mono text-sm font-bold text-[#4d3934]",children:[Pe(n),n>0&&i==="g"?"g":""]}),(0,y.jsx)(ns,{label:`+${t}`,onClick:()=>a(Math.min(s,n+r)),icon:Tl})]})]})}function R2({value:t,onChange:e}){return(0,y.jsxs)("div",{className:"flex items-center gap-1",children:[(0,y.jsx)(ns,{label:"minus",onClick:()=>e(t-1),icon:El}),(0,y.jsx)("span",{className:"w-7 text-center font-mono text-sm font-bold text-[#4d3934]",children:t}),(0,y.jsx)(ns,{label:"plus",onClick:()=>e(t+1),icon:Tl})]})}function ns({label:t,onClick:e,icon:n}){return(0,y.jsx)("button",{onClick:e,"aria-label":t,className:"grid h-8 w-8 place-items-center rounded-[14px] border border-[#ffe3da] bg-white/70 text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]",children:(0,y.jsx)(n,{className:"h-4 w-4"})})}function uh(t){return String(Pe(t,1))}function P2(t){let e=String(t).replace(/[^\d.]/g,"");if(!e)return"";let[n="",...i]=e.split("."),r=n.replace(/^0+(?=\d)/,"");return i.length?`${r||"0"}.${i.join("")}`:r}function Is({label:t,unit:e,value:n,onChange:i,min:r=0,max:s=1/0}){let a=(0,Le.useRef)(!1),[o,l]=(0,Le.useState)(()=>uh(n));(0,Le.useEffect)(()=>{a.current||l(uh(n))},[n]);let c=()=>{let f=Number(o);if(!o||!Number.isFinite(f)){l(uh(n));return}let d=Ze(f,r,s);i(d),l(uh(d))};return(0,y.jsxs)("label",{className:"block rounded-[20px] border border-[#ffe3da] bg-white/64 p-3",children:[(0,y.jsx)("span",{className:"block text-[11px] font-extrabold text-[#a47b72]",children:t}),(0,y.jsxs)("span",{className:"mt-1 flex items-baseline gap-1",children:[(0,y.jsx)("input",{type:"text",inputMode:"decimal","aria-label":t,value:o,onFocus:()=>{a.current=!0},onBlur:()=>{a.current=!1,c()},onKeyDown:f=>{f.key==="Enter"&&f.currentTarget.blur()},onChange:f=>{let d=P2(f.target.value);l(d)},className:"min-w-0 flex-1 bg-transparent font-mono text-lg font-bold text-[#4d3934] outline-none"}),(0,y.jsx)("span",{className:"text-[11px] font-bold text-[#a47b72]",children:e})]})]})}function TS({targets:t,targetProfile:e,t:n}){let i=[{label:n("proteinTarget"),value:`${Pe(t.p,1)}g`,sub:`${Pe(e.proteinPerKg,1)}g/kg`},{label:n("fatTarget"),value:`${Pe(t.f,1)}g`,sub:`${Pe(e.fatMinPerKg,1)}g/kg`},{label:n("carbRemainder"),value:`${Pe(t.c,1)}g`,sub:n("carbRemainderSub")}];return(0,y.jsx)("div",{className:"mt-3 grid gap-2 sm:grid-cols-3",children:i.map(r=>(0,y.jsxs)("div",{className:"rounded-[20px] border border-[#ffe3da] bg-white/64 p-3",children:[(0,y.jsx)("div",{className:"text-[11px] font-extrabold text-[#a47b72]",children:r.label}),(0,y.jsx)("div",{className:"mt-1 font-mono text-lg font-bold text-[#4d3934]",children:r.value}),(0,y.jsx)("div",{className:"mt-1 text-[11px] font-semibold text-[#a47b72]",children:r.sub})]},r.label))})}function I2({report:t,activeCarbDay:e,t:n}){let i={amber:"border-[#ffd6a5] bg-[#fff6df] text-[#b97325]",green:"border-[#bdf0d9] bg-[#edfff6] text-[#3da77d]",red:"border-[#ffd1cb] bg-[#fff1ee] text-[#ff7d75]"}[t.carbDay.tone]||"border-[#ffe3da] bg-white/64 text-[#8f6c64]";return(0,y.jsxs)("div",{className:`rounded-[24px] border p-3 ${i}`,children:[(0,y.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,y.jsx)("span",{className:"text-xs font-bold text-[#a47b72]",children:n("carbDay")}),(0,y.jsx)("span",{className:"font-cjk text-sm font-extrabold",children:e.label})]}),(0,y.jsxs)("div",{className:"mt-1 text-[11px] font-bold text-[#a47b72]",children:["C ",t.carbPerKg,"g/kg \xB7 P ",t.proteinPerKg,"g/kg"]})]})}function N2({report:t,activeCarbDay:e,targets:n,t:i}){let r=[{label:i("proteinCalories"),value:`${t.proteinPct}%`,sub:`${t.proteinPerKg}g/kg \xB7 ${i("target")} ${t.proteinTargetPerKg}g/kg`},{label:i("carbCalories"),value:`${t.carbPct}%`,sub:`${t.carbPerKg}g/kg \xB7 ${i("target")} ${t.carbTargetPerKg}g/kg`},{label:i("fatCalories"),value:`${t.fatPct}%`,sub:`${t.fatPerKg}g/kg \xB7 ${i("target")} ${Pe(n.f,1)}g`},{label:i("carbJudge"),value:e.label,sub:t.carbDay.note,hot:t.carbDay.tone==="red"}];return(0,y.jsx)("div",{className:"grid gap-2 sm:grid-cols-2",children:r.map(s=>(0,y.jsx)(cn,{label:s.label,value:s.value,sub:s.sub,hot:s.hot},s.label))})}function L2({item:t,index:e,onTune:n,t:i}){let s={red:"#ff8d82",amber:"#f1b36a",gold:"#ffcf7d",green:"#69cda5"}[t.tone]||"#85d7e3",a=t.adjustment>0?`+${Pe(t.adjustment)}`:Pe(t.adjustment);return(0,y.jsxs)("div",{"data-dinner-tune-row":!0,className:"grid grid-cols-[40px_1fr_auto] items-center gap-3 rounded-[24px] border border-[#ffe3da] bg-white/64 p-3",children:[(0,y.jsx)("span",{className:"grid h-10 w-10 place-items-center rounded-[17px] font-mono text-xs font-extrabold text-white",style:{backgroundColor:s},children:String(e+1).padStart(2,"0")}),(0,y.jsxs)("div",{className:"min-w-0",children:[(0,y.jsx)("div",{className:"truncate font-cjk text-sm font-extrabold text-[#4d3934]",children:t.name}),(0,y.jsxs)("div",{className:"mt-1 truncate text-[11px] font-semibold text-[#a47b72]",children:["P",Pe(t.macro.p)," \xB7 C",Pe(t.macro.c)," \xB7 F",Pe(t.macro.f),t.adjustment!==0&&(0,y.jsxs)("span",{className:"text-[#ff8d82]",children:[" \xB7 ",i("adjust")," ",a,t.unit]})]})]}),(0,y.jsxs)("div",{className:"text-right",children:[(0,y.jsx)("div",{className:"font-display text-2xl font-extrabold leading-none text-[#4d3934]",children:Pe(t.qty)}),(0,y.jsx)("div",{className:"mt-1 text-[11px] font-bold text-[#a47b72]",children:t.unit}),n&&(0,y.jsxs)("div",{className:"mt-2 flex items-center justify-end gap-1",children:[(0,y.jsx)(ns,{label:`-${t.name}`,onClick:()=>n(t,-t.step),icon:El}),(0,y.jsx)(ns,{label:`+${t.name}`,onClick:()=>n(t,t.step),icon:Tl})]})]})]})}function dh({label:t,value:e,target:n,unit:i,color:r}){let s=Math.min(135,e/Math.max(1,n)*100),a=Math.round(e-n);return(0,y.jsxs)("div",{children:[(0,y.jsxs)("div",{className:"mb-2 flex items-center justify-between gap-3",children:[(0,y.jsx)("span",{className:"text-sm font-extrabold text-[#4d3934]",children:t}),(0,y.jsxs)("span",{className:"font-mono text-xs font-bold text-[#a47b72]",children:[Math.round(e)," / ",Pe(n)," ",i]})]}),(0,y.jsx)("div",{className:"relative h-2.5 overflow-hidden rounded-full bg-[#fff0ed]",children:(0,y.jsx)("div",{className:"h-full rounded-full transition-all duration-700",style:{width:`${s}%`,backgroundColor:r}})}),(0,y.jsxs)("div",{className:"mt-1 text-right text-[11px] font-bold text-[#a47b72]",children:[a>=0?"+":"",a,i]})]})}function Rl({label:t,macro:e,strong:n}){return(0,y.jsxs)("div",{className:`grid grid-cols-[1fr_auto] items-center gap-3 border-t border-[#ffe3da] py-3 first:border-t-0 ${n?"text-[#4d3934]":"text-[#8f6c64]"}`,children:[(0,y.jsx)("div",{className:"font-cjk text-sm font-extrabold",children:t}),(0,y.jsxs)("div",{className:"font-mono text-xs font-bold text-[#a47b72]",children:["P",Pe(e.p)," C",Pe(e.c)," F",Pe(e.f)," \xB7 ",Math.round(yi(e))," kcal"]})]})}function cn({label:t,value:e,sub:n,hot:i}){return(0,y.jsxs)("div",{className:`rounded-[20px] border p-3 ${i?"border-[#ffd1cb] bg-[#fff1ee]":"border-[#ffe3da] bg-white/64"}`,children:[(0,y.jsx)("div",{className:"text-[11px] font-extrabold text-[#a47b72]",children:t}),(0,y.jsx)("div",{className:`mt-1 font-mono text-lg font-bold ${i?"text-[#ff7d75]":"text-[#4d3934]"}`,children:e}),n&&(0,y.jsx)("div",{className:"mt-1 text-[11px] font-semibold leading-4 text-[#a47b72]",children:n})]})}var Rg=Mi(Cl(),1);CS.default.createRoot(document.getElementById("root")).render((0,Rg.jsx)(AS.default.StrictMode,{children:(0,Rg.jsx)(Tg,{})}));
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
