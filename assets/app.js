var AS=Object.create;var Rg=Object.defineProperty;var CS=Object.getOwnPropertyDescriptor;var RS=Object.getOwnPropertyNames;var PS=Object.getPrototypeOf,IS=Object.prototype.hasOwnProperty;var Gi=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var NS=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of RS(e))!IS.call(t,r)&&r!==n&&Rg(t,r,{get:()=>e[r],enumerable:!(i=CS(e,r))||i.enumerable});return t};var yi=(t,e,n)=>(n=t!=null?AS(PS(t)):{},NS(e||!t||!t.__esModule?Rg(n,"default",{value:t,enumerable:!0}):n,t));var Vg=Gi($e=>{"use strict";var $a=Symbol.for("react.element"),LS=Symbol.for("react.portal"),DS=Symbol.for("react.fragment"),US=Symbol.for("react.strict_mode"),FS=Symbol.for("react.profiler"),kS=Symbol.for("react.provider"),OS=Symbol.for("react.context"),BS=Symbol.for("react.forward_ref"),zS=Symbol.for("react.suspense"),VS=Symbol.for("react.memo"),GS=Symbol.for("react.lazy"),Pg=Symbol.iterator;function HS(t){return t===null||typeof t!="object"?null:(t=Pg&&t[Pg]||t["@@iterator"],typeof t=="function"?t:null)}var Lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dg=Object.assign,Ug={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=Ug,this.updater=n||Lg}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fg(){}Fg.prototype=Fs.prototype;function Th(t,e,n){this.props=t,this.context=e,this.refs=Ug,this.updater=n||Lg}var Ah=Th.prototype=new Fg;Ah.constructor=Th;Dg(Ah,Fs.prototype);Ah.isPureReactComponent=!0;var Ig=Array.isArray,kg=Object.prototype.hasOwnProperty,Ch={current:null},Og={key:!0,ref:!0,__self:!0,__source:!0};function Bg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)kg.call(e,i)&&!Og.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:$a,type:t,key:s,ref:a,props:r,_owner:Ch.current}}function WS(t,e){return{$$typeof:$a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rh(t){return typeof t=="object"&&t!==null&&t.$$typeof===$a}function XS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ng=/\/+/g;function Eh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XS(""+t.key):e.toString(36)}function Bl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case $a:case LS:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Eh(a,0):i,Ig(r)?(n="",t!=null&&(n=t.replace(Ng,"$&/")+"/"),Bl(r,e,n,"",function(c){return c})):r!=null&&(Rh(r)&&(r=WS(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ng,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Ig(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Eh(s,o);a+=Bl(s,e,n,l,r)}else if(l=HS(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Eh(s,o++),a+=Bl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ol(t,e,n){if(t==null)return t;var i=[],r=0;return Bl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function qS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},zl={transition:null},YS={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:zl,ReactCurrentOwner:Ch};function zg(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Ol,forEach:function(t,e,n){Ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ol(t,function(){e++}),e},toArray:function(t){return Ol(t,function(e){return e})||[]},only:function(t){if(!Rh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Fs;$e.Fragment=DS;$e.Profiler=FS;$e.PureComponent=Th;$e.StrictMode=US;$e.Suspense=zS;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YS;$e.act=zg;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Dg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Ch.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)kg.call(e,l)&&!Og.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:$a,type:t.type,key:r,ref:s,props:i,_owner:a}};$e.createContext=function(t){return t={$$typeof:OS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kS,_context:t},t.Consumer=t};$e.createElement=Bg;$e.createFactory=function(t){var e=Bg.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:BS,render:t}};$e.isValidElement=Rh;$e.lazy=function(t){return{$$typeof:GS,_payload:{_status:-1,_result:t},_init:qS}};$e.memo=function(t,e){return{$$typeof:VS,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=zl.transition;zl.transition={};try{t()}finally{zl.transition=e}};$e.unstable_act=zg;$e.useCallback=function(t,e){return dn.current.useCallback(t,e)};$e.useContext=function(t){return dn.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};$e.useEffect=function(t,e){return dn.current.useEffect(t,e)};$e.useId=function(){return dn.current.useId()};$e.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return dn.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};$e.useRef=function(t){return dn.current.useRef(t)};$e.useState=function(t){return dn.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return dn.current.useTransition()};$e.version="18.3.1"});var pr=Gi((N2,Gg)=>{"use strict";Gg.exports=Vg()});var Jg=Gi(gt=>{"use strict";function Lh(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,r=t[i];if(0<Vl(r,e))t[i]=e,t[n]=r,n=i;else break e}}function ii(t){return t.length===0?null:t[0]}function Hl(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,r=t.length,s=r>>>1;i<s;){var a=2*(i+1)-1,o=t[a],l=a+1,c=t[l];if(0>Vl(o,n))l<r&&0>Vl(c,o)?(t[i]=c,t[l]=n,i=l):(t[i]=o,t[a]=n,i=a);else if(l<r&&0>Vl(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function Vl(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(Hg=performance,gt.unstable_now=function(){return Hg.now()}):(Ph=Date,Wg=Ph.now(),gt.unstable_now=function(){return Ph.now()-Wg});var Hg,Ph,Wg,Si=[],mr=[],$S=1,Wn=null,nn=3,Wl=!1,rs=!1,ja=!1,Yg=typeof setTimeout=="function"?setTimeout:null,$g=typeof clearTimeout=="function"?clearTimeout:null,Xg=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Dh(t){for(var e=ii(mr);e!==null;){if(e.callback===null)Hl(mr);else if(e.startTime<=t)Hl(mr),e.sortIndex=e.expirationTime,Lh(Si,e);else break;e=ii(mr)}}function Uh(t){if(ja=!1,Dh(t),!rs)if(ii(Si)!==null)rs=!0,kh(Fh);else{var e=ii(mr);e!==null&&Oh(Uh,e.startTime-t)}}function Fh(t,e){rs=!1,ja&&(ja=!1,$g(Za),Za=-1),Wl=!0;var n=nn;try{for(Dh(e),Wn=ii(Si);Wn!==null&&(!(Wn.expirationTime>e)||t&&!Zg());){var i=Wn.callback;if(typeof i=="function"){Wn.callback=null,nn=Wn.priorityLevel;var r=i(Wn.expirationTime<=e);e=gt.unstable_now(),typeof r=="function"?Wn.callback=r:Wn===ii(Si)&&Hl(Si),Dh(e)}else Hl(Si);Wn=ii(Si)}if(Wn!==null)var s=!0;else{var a=ii(mr);a!==null&&Oh(Uh,a.startTime-e),s=!1}return s}finally{Wn=null,nn=n,Wl=!1}}var Xl=!1,Gl=null,Za=-1,Kg=5,jg=-1;function Zg(){return!(gt.unstable_now()-jg<Kg)}function Ih(){if(Gl!==null){var t=gt.unstable_now();jg=t;var e=!0;try{e=Gl(!0,t)}finally{e?Ka():(Xl=!1,Gl=null)}}else Xl=!1}var Ka;typeof Xg=="function"?Ka=function(){Xg(Ih)}:typeof MessageChannel<"u"?(Nh=new MessageChannel,qg=Nh.port2,Nh.port1.onmessage=Ih,Ka=function(){qg.postMessage(null)}):Ka=function(){Yg(Ih,0)};var Nh,qg;function kh(t){Gl=t,Xl||(Xl=!0,Ka())}function Oh(t,e){Za=Yg(function(){t(gt.unstable_now())},e)}gt.unstable_IdlePriority=5;gt.unstable_ImmediatePriority=1;gt.unstable_LowPriority=4;gt.unstable_NormalPriority=3;gt.unstable_Profiling=null;gt.unstable_UserBlockingPriority=2;gt.unstable_cancelCallback=function(t){t.callback=null};gt.unstable_continueExecution=function(){rs||Wl||(rs=!0,kh(Fh))};gt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Kg=0<t?Math.floor(1e3/t):5};gt.unstable_getCurrentPriorityLevel=function(){return nn};gt.unstable_getFirstCallbackNode=function(){return ii(Si)};gt.unstable_next=function(t){switch(nn){case 1:case 2:case 3:var e=3;break;default:e=nn}var n=nn;nn=e;try{return t()}finally{nn=n}};gt.unstable_pauseExecution=function(){};gt.unstable_requestPaint=function(){};gt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=nn;nn=t;try{return e()}finally{nn=n}};gt.unstable_scheduleCallback=function(t,e,n){var i=gt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,t={id:$S++,callback:e,priorityLevel:t,startTime:n,expirationTime:r,sortIndex:-1},n>i?(t.sortIndex=n,Lh(mr,t),ii(Si)===null&&t===ii(mr)&&(ja?($g(Za),Za=-1):ja=!0,Oh(Uh,n-i))):(t.sortIndex=r,Lh(Si,t),rs||Wl||(rs=!0,kh(Fh))),t};gt.unstable_shouldYield=Zg;gt.unstable_wrapCallback=function(t){var e=nn;return function(){var n=nn;nn=e;try{return t.apply(this,arguments)}finally{nn=n}}}});var e0=Gi((D2,Qg)=>{"use strict";Qg.exports=Jg()});var r_=Gi(Dn=>{"use strict";var KS=pr(),Nn=e0();function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ox=new Set,yo={};function xs(t,e){ia(t,e),ia(t+"Capture",e)}function ia(t,e){for(yo[t]=e,t=0;t<e.length;t++)ox.add(e[t])}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lf=Object.prototype.hasOwnProperty,jS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,t0={},n0={};function ZS(t){return lf.call(n0,t)?!0:lf.call(t0,t)?!1:jS.test(t)?n0[t]=!0:(t0[t]=!0,!1)}function JS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function QS(t,e,n,i){if(e===null||typeof e>"u"||JS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var ep=/[\-:]([a-z])/g;function tp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ep,tp);Zt[e]=new pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ep,tp);Zt[e]=new pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ep,tp);Zt[e]=new pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new pn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function np(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(QS(e,n,r,i)&&(n=null),i||r===null?ZS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ji=KS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ql=Symbol.for("react.element"),Bs=Symbol.for("react.portal"),zs=Symbol.for("react.fragment"),ip=Symbol.for("react.strict_mode"),cf=Symbol.for("react.profiler"),lx=Symbol.for("react.provider"),cx=Symbol.for("react.context"),rp=Symbol.for("react.forward_ref"),uf=Symbol.for("react.suspense"),df=Symbol.for("react.suspense_list"),sp=Symbol.for("react.memo"),xr=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var ux=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var i0=Symbol.iterator;function Ja(t){return t===null||typeof t!="object"?null:(t=i0&&t[i0]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,Bh;function ao(t){if(Bh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bh=e&&e[1]||""}return`
`+Bh+t}var zh=!1;function Vh(t,e){if(!t||zh)return"";zh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{zh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ao(t):""}function e1(t){switch(t.tag){case 5:return ao(t.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return t=Vh(t.type,!1),t;case 11:return t=Vh(t.type.render,!1),t;case 1:return t=Vh(t.type,!0),t;default:return""}}function hf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zs:return"Fragment";case Bs:return"Portal";case cf:return"Profiler";case ip:return"StrictMode";case uf:return"Suspense";case df:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cx:return(t.displayName||"Context")+".Consumer";case lx:return(t._context.displayName||"Context")+".Provider";case rp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sp:return e=t.displayName||null,e!==null?e:hf(t.type)||"Memo";case xr:e=t._payload,t=t._init;try{return hf(t(e))}catch{}}return null}function t1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hf(e);case 8:return e===ip?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function n1(t){var e=dx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yl(t){t._valueTracker||(t._valueTracker=n1(t))}function hx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=dx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Sc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ff(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function r0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fx(t,e){e=e.checked,e!=null&&np(t,"checked",e,!1)}function pf(t,e){fx(t,e);var n=Ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mf(t,e.type,n):e.hasOwnProperty("defaultValue")&&mf(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function s0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mf(t,e,n){(e!=="number"||Sc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oo=Array.isArray;function Zs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function gf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function a0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(oo(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function px(t,e){var n=Ir(e.value),i=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function o0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $l,gx=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t})(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($l=$l||document.createElement("div"),$l.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$l.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function So(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i1=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(t){i1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),uo[e]=uo[t]})});function xx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||uo.hasOwnProperty(t)&&uo[t]?(""+e).trim():e+"px"}function vx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=xx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var r1=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vf(t,e){if(e){if(r1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function _f(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yf=null;function ap(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sf=null,Js=null,Qs=null;function l0(t){if(t=Bo(t)){if(typeof Sf!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Kc(e),Sf(t.stateNode,t.type,e))}}function _x(t){Js?Qs?Qs.push(t):Qs=[t]:Js=t}function yx(){if(Js){var t=Js,e=Qs;if(Qs=Js=null,l0(t),e)for(t=0;t<e.length;t++)l0(e[t])}}function Sx(t,e){return t(e)}function Mx(){}var Gh=!1;function bx(t,e,n){if(Gh)return t(e,n);Gh=!0;try{return Sx(t,e,n)}finally{Gh=!1,(Js!==null||Qs!==null)&&(Mx(),yx())}}function Mo(t,e){var n=t.stateNode;if(n===null)return null;var i=Kc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Mf=!1;if($i)try{ks={},Object.defineProperty(ks,"passive",{get:function(){Mf=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{Mf=!1}var ks;function s1(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ho=!1,Mc=null,bc=!1,bf=null,a1={onError:function(t){ho=!0,Mc=t}};function o1(t,e,n,i,r,s,a,o,l){ho=!1,Mc=null,s1.apply(a1,arguments)}function l1(t,e,n,i,r,s,a,o,l){if(o1.apply(this,arguments),ho){if(ho){var c=Mc;ho=!1,Mc=null}else throw Error(ne(198));bc||(bc=!0,bf=c)}}function vs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function c0(t){if(vs(t)!==t)throw Error(ne(188))}function c1(t){var e=t.alternate;if(!e){if(e=vs(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return c0(r),t;if(s===i)return c0(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Ex(t){return t=c1(t),t!==null?Tx(t):null}function Tx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Tx(t);if(e!==null)return e;t=t.sibling}return null}var Ax=Nn.unstable_scheduleCallback,u0=Nn.unstable_cancelCallback,u1=Nn.unstable_shouldYield,d1=Nn.unstable_requestPaint,Dt=Nn.unstable_now,h1=Nn.unstable_getCurrentPriorityLevel,op=Nn.unstable_ImmediatePriority,Cx=Nn.unstable_UserBlockingPriority,wc=Nn.unstable_NormalPriority,f1=Nn.unstable_LowPriority,Rx=Nn.unstable_IdlePriority,Xc=null,Ei=null;function p1(t){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(Xc,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:x1,m1=Math.log,g1=Math.LN2;function x1(t){return t>>>=0,t===0?32:31-(m1(t)/g1|0)|0}var Kl=64,jl=4194304;function lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ec(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=lo(o):(s&=a,s!==0&&(i=lo(s)))}else a=n&~r,a!==0?i=lo(a):s!==0&&(i=lo(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function v1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-li(s),o=1<<a,l=r[a];l===-1?((o&n)===0||(o&i)!==0)&&(r[a]=v1(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function wf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Px(){var t=Kl;return Kl<<=1,(Kl&4194240)===0&&(Kl=64),t}function Hh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ko(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function y1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function lp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function Ix(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Nx,cp,Lx,Dx,Ux,Ef=!1,Zl=[],br=null,wr=null,Er=null,bo=new Map,wo=new Map,_r=[],S1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function d0(t,e){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(e.pointerId)}}function Qa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Bo(e),e!==null&&cp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function M1(t,e,n,i,r){switch(e){case"focusin":return br=Qa(br,t,e,n,i,r),!0;case"dragenter":return wr=Qa(wr,t,e,n,i,r),!0;case"mouseover":return Er=Qa(Er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return bo.set(s,Qa(bo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,wo.set(s,Qa(wo.get(s)||null,t,e,n,i,r)),!0}return!1}function Fx(t){var e=os(t.target);if(e!==null){var n=vs(e);if(n!==null){if(e=n.tag,e===13){if(e=wx(n),e!==null){t.blockedOn=e,Ux(t.priority,function(){Lx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);yf=i,n.target.dispatchEvent(i),yf=null}else return e=Bo(n),e!==null&&cp(e),t.blockedOn=n,!1;e.shift()}return!0}function h0(t,e,n){dc(t)&&n.delete(e)}function b1(){Ef=!1,br!==null&&dc(br)&&(br=null),wr!==null&&dc(wr)&&(wr=null),Er!==null&&dc(Er)&&(Er=null),bo.forEach(h0),wo.forEach(h0)}function eo(t,e){t.blockedOn===e&&(t.blockedOn=null,Ef||(Ef=!0,Nn.unstable_scheduleCallback(Nn.unstable_NormalPriority,b1)))}function Eo(t){function e(r){return eo(r,t)}if(0<Zl.length){eo(Zl[0],t);for(var n=1;n<Zl.length;n++){var i=Zl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(br!==null&&eo(br,t),wr!==null&&eo(wr,t),Er!==null&&eo(Er,t),bo.forEach(e),wo.forEach(e),n=0;n<_r.length;n++)i=_r[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)Fx(n),n.blockedOn===null&&_r.shift()}var ea=Ji.ReactCurrentBatchConfig,Tc=!0;function w1(t,e,n,i){var r=ot,s=ea.transition;ea.transition=null;try{ot=1,up(t,e,n,i)}finally{ot=r,ea.transition=s}}function E1(t,e,n,i){var r=ot,s=ea.transition;ea.transition=null;try{ot=4,up(t,e,n,i)}finally{ot=r,ea.transition=s}}function up(t,e,n,i){if(Tc){var r=Tf(t,e,n,i);if(r===null)jh(t,e,i,Ac,n),d0(t,i);else if(M1(r,t,e,n,i))i.stopPropagation();else if(d0(t,i),e&4&&-1<S1.indexOf(t)){for(;r!==null;){var s=Bo(r);if(s!==null&&Nx(s),s=Tf(t,e,n,i),s===null&&jh(t,e,i,Ac,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else jh(t,e,i,null,n)}}var Ac=null;function Tf(t,e,n,i){if(Ac=null,t=ap(i),t=os(t),t!==null)if(e=vs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ac=t,null}function kx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(h1()){case op:return 1;case Cx:return 4;case wc:case f1:return 16;case Rx:return 536870912;default:return 16}default:return 16}}var Sr=null,dp=null,hc=null;function Ox(){if(hc)return hc;var t,e=dp,n=e.length,i,r="value"in Sr?Sr.value:Sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return hc=r.slice(t,1<i?1-i:void 0)}function fc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jl(){return!0}function f0(){return!1}function Ln(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Jl:f0,this.isPropagationStopped=f0,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),e}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hp=Ln(ua),Oo=Et({},ua,{view:0,detail:0}),T1=Ln(Oo),Wh,Xh,to,qc=Et({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Wh=t.screenX-to.screenX,Xh=t.screenY-to.screenY):Xh=Wh=0,to=t),Wh)},movementY:function(t){return"movementY"in t?t.movementY:Xh}}),p0=Ln(qc),A1=Et({},qc,{dataTransfer:0}),C1=Ln(A1),R1=Et({},Oo,{relatedTarget:0}),qh=Ln(R1),P1=Et({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),I1=Ln(P1),N1=Et({},ua,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),L1=Ln(N1),D1=Et({},ua,{data:0}),m0=Ln(D1),U1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=k1[t])?!!e[t]:!1}function fp(){return O1}var B1=Et({},Oo,{key:function(t){if(t.key){var e=U1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?F1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fp,charCode:function(t){return t.type==="keypress"?fc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),z1=Ln(B1),V1=Et({},qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),g0=Ln(V1),G1=Et({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fp}),H1=Ln(G1),W1=Et({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),X1=Ln(W1),q1=Et({},qc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Y1=Ln(q1),$1=[9,13,27,32],pp=$i&&"CompositionEvent"in window,fo=null;$i&&"documentMode"in document&&(fo=document.documentMode);var K1=$i&&"TextEvent"in window&&!fo,Bx=$i&&(!pp||fo&&8<fo&&11>=fo),x0=" ",v0=!1;function zx(t,e){switch(t){case"keyup":return $1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function j1(t,e){switch(t){case"compositionend":return Vx(e);case"keypress":return e.which!==32?null:(v0=!0,x0);case"textInput":return t=e.data,t===x0&&v0?null:t;default:return null}}function Z1(t,e){if(Vs)return t==="compositionend"||!pp&&zx(t,e)?(t=Ox(),hc=dp=Sr=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bx&&e.locale!=="ko"?null:e.data;default:return null}}var J1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!J1[t.type]:e==="textarea"}function Gx(t,e,n,i){_x(i),e=Cc(e,"onChange"),0<e.length&&(n=new hp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var po=null,To=null;function Q1(t){Qx(t,0)}function Yc(t){var e=Ws(t);if(hx(e))return t}function eM(t,e){if(t==="change")return e}var Hx=!1;$i&&($i?(ec="oninput"in document,ec||(Yh=document.createElement("div"),Yh.setAttribute("oninput","return;"),ec=typeof Yh.oninput=="function"),Ql=ec):Ql=!1,Hx=Ql&&(!document.documentMode||9<document.documentMode));var Ql,ec,Yh;function y0(){po&&(po.detachEvent("onpropertychange",Wx),To=po=null)}function Wx(t){if(t.propertyName==="value"&&Yc(To)){var e=[];Gx(e,To,t,ap(t)),bx(Q1,e)}}function tM(t,e,n){t==="focusin"?(y0(),po=e,To=n,po.attachEvent("onpropertychange",Wx)):t==="focusout"&&y0()}function nM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yc(To)}function iM(t,e){if(t==="click")return Yc(e)}function rM(t,e){if(t==="input"||t==="change")return Yc(e)}function sM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ui=typeof Object.is=="function"?Object.is:sM;function Ao(t,e){if(ui(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!lf.call(e,r)||!ui(t[r],e[r]))return!1}return!0}function S0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function M0(t,e){var n=S0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=S0(n)}}function Xx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Xx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qx(){for(var t=window,e=Sc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sc(t.document)}return e}function mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function aM(t){var e=qx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Xx(n.ownerDocument.documentElement,n)){if(i!==null&&mp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=M0(n,s);var a=M0(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oM=$i&&"documentMode"in document&&11>=document.documentMode,Gs=null,Af=null,mo=null,Cf=!1;function b0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cf||Gs==null||Gs!==Sc(i)||(i=Gs,"selectionStart"in i&&mp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),mo&&Ao(mo,i)||(mo=i,i=Cc(Af,"onSelect"),0<i.length&&(e=new hp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Gs)))}function tc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hs={animationend:tc("Animation","AnimationEnd"),animationiteration:tc("Animation","AnimationIteration"),animationstart:tc("Animation","AnimationStart"),transitionend:tc("Transition","TransitionEnd")},$h={},Yx={};$i&&(Yx=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function $c(t){if($h[t])return $h[t];if(!Hs[t])return t;var e=Hs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Yx)return $h[t]=e[n];return t}var $x=$c("animationend"),Kx=$c("animationiteration"),jx=$c("animationstart"),Zx=$c("transitionend"),Jx=new Map,w0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){Jx.set(t,e),xs(e,[t])}for(nc=0;nc<w0.length;nc++)ic=w0[nc],E0=ic.toLowerCase(),T0=ic[0].toUpperCase()+ic.slice(1),Lr(E0,"on"+T0);var ic,E0,T0,nc;Lr($x,"onAnimationEnd");Lr(Kx,"onAnimationIteration");Lr(jx,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(Zx,"onTransitionEnd");ia("onMouseEnter",["mouseout","mouseover"]);ia("onMouseLeave",["mouseout","mouseover"]);ia("onPointerEnter",["pointerout","pointerover"]);ia("onPointerLeave",["pointerout","pointerover"]);xs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xs("onBeforeInput",["compositionend","keypress","textInput","paste"]);xs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lM=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function A0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,l1(i,e,void 0,t),t.currentTarget=null}function Qx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;A0(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;A0(r,o,c),s=l}}}if(bc)throw t=bf,bc=!1,bf=null,t}function vt(t,e){var n=e[Lf];n===void 0&&(n=e[Lf]=new Set);var i=t+"__bubble";n.has(i)||(ev(e,t,2,!1),n.add(i))}function Kh(t,e,n){var i=0;e&&(i|=4),ev(n,t,i,e)}var rc="_reactListening"+Math.random().toString(36).slice(2);function Co(t){if(!t[rc]){t[rc]=!0,ox.forEach(function(n){n!=="selectionchange"&&(lM.has(n)||Kh(n,!1,t),Kh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rc]||(e[rc]=!0,Kh("selectionchange",!1,e))}}function ev(t,e,n,i){switch(kx(e)){case 1:var r=w1;break;case 4:r=E1;break;default:r=up}n=r.bind(null,e,n,t),r=void 0,!Mf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function jh(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=os(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}bx(function(){var c=s,h=ap(n),f=[];e:{var d=Jx.get(t);if(d!==void 0){var m=hp,y=t;switch(t){case"keypress":if(fc(n)===0)break e;case"keydown":case"keyup":m=z1;break;case"focusin":y="focus",m=qh;break;case"focusout":y="blur",m=qh;break;case"beforeblur":case"afterblur":m=qh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=p0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=C1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=H1;break;case $x:case Kx:case jx:m=I1;break;case Zx:m=X1;break;case"scroll":m=T1;break;case"wheel":m=Y1;break;case"copy":case"cut":case"paste":m=L1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=g0}var b=(e&4)!==0,x=!b&&t==="scroll",u=b?d!==null?d+"Capture":null:d;b=[];for(var p=c,v;p!==null;){v=p;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=Mo(p,u),M!=null&&b.push(Ro(p,M,v)))),x)break;p=p.return}0<b.length&&(d=new m(d,y,null,n,h),f.push({event:d,listeners:b}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==yf&&(y=n.relatedTarget||n.fromElement)&&(os(y)||y[Ki]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=c,y=y?os(y):null,y!==null&&(x=vs(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(b=p0,M="onMouseLeave",u="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(b=g0,M="onPointerLeave",u="onPointerEnter",p="pointer"),x=m==null?d:Ws(m),v=y==null?d:Ws(y),d=new b(M,p+"leave",m,n,h),d.target=x,d.relatedTarget=v,M=null,os(h)===c&&(b=new b(u,p+"enter",y,n,h),b.target=v,b.relatedTarget=x,M=b),x=M,m&&y)t:{for(b=m,u=y,p=0,v=b;v;v=Os(v))p++;for(v=0,M=u;M;M=Os(M))v++;for(;0<p-v;)b=Os(b),p--;for(;0<v-p;)u=Os(u),v--;for(;p--;){if(b===u||u!==null&&b===u.alternate)break t;b=Os(b),u=Os(u)}b=null}else b=null;m!==null&&C0(f,d,m,b,!1),y!==null&&x!==null&&C0(f,x,y,b,!0)}}e:{if(d=c?Ws(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var C=eM;else if(_0(d))if(Hx)C=rM;else{C=nM;var E=tM}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=iM);if(C&&(C=C(t,c))){Gx(f,C,n,h);break e}E&&E(t,d,c),t==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&mf(d,"number",d.value)}switch(E=c?Ws(c):window,t){case"focusin":(_0(E)||E.contentEditable==="true")&&(Gs=E,Af=c,mo=null);break;case"focusout":mo=Af=Gs=null;break;case"mousedown":Cf=!0;break;case"contextmenu":case"mouseup":case"dragend":Cf=!1,b0(f,n,h);break;case"selectionchange":if(oM)break;case"keydown":case"keyup":b0(f,n,h)}var R;if(pp)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Vs?zx(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Bx&&n.locale!=="ko"&&(Vs||g!=="onCompositionStart"?g==="onCompositionEnd"&&Vs&&(R=Ox()):(Sr=h,dp="value"in Sr?Sr.value:Sr.textContent,Vs=!0)),E=Cc(c,g),0<E.length&&(g=new m0(g,t,null,n,h),f.push({event:g,listeners:E}),R?g.data=R:(R=Vx(n),R!==null&&(g.data=R)))),(R=K1?j1(t,n):Z1(t,n))&&(c=Cc(c,"onBeforeInput"),0<c.length&&(h=new m0("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=R))}Qx(f,e)})}function Ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Mo(t,n),s!=null&&i.unshift(Ro(t,s,r)),s=Mo(t,e),s!=null&&i.push(Ro(t,s,r))),t=t.return}return i}function Os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function C0(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Mo(n,s),l!=null&&a.unshift(Ro(n,l,o))):r||(l=Mo(n,s),l!=null&&a.push(Ro(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var cM=/\r\n?/g,uM=/\u0000|\uFFFD/g;function R0(t){return(typeof t=="string"?t:""+t).replace(cM,`
`).replace(uM,"")}function sc(t,e,n){if(e=R0(e),R0(t)!==e&&n)throw Error(ne(425))}function Rc(){}var Rf=null,Pf=null;function If(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nf=typeof setTimeout=="function"?setTimeout:void 0,dM=typeof clearTimeout=="function"?clearTimeout:void 0,P0=typeof Promise=="function"?Promise:void 0,hM=typeof queueMicrotask=="function"?queueMicrotask:typeof P0<"u"?function(t){return P0.resolve(null).then(t).catch(fM)}:Nf;function fM(t){setTimeout(function(){throw t})}function Zh(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Eo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Eo(e)}function Tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function I0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var da=Math.random().toString(36).slice(2),wi="__reactFiber$"+da,Po="__reactProps$"+da,Ki="__reactContainer$"+da,Lf="__reactEvents$"+da,pM="__reactListeners$"+da,mM="__reactHandles$"+da;function os(t){var e=t[wi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ki]||n[wi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=I0(t);t!==null;){if(n=t[wi])return n;t=I0(t)}return e}t=n,n=t.parentNode}return null}function Bo(t){return t=t[wi]||t[Ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Kc(t){return t[Po]||null}var Df=[],Xs=-1;function Dr(t){return{current:t}}function _t(t){0>Xs||(t.current=Df[Xs],Df[Xs]=null,Xs--)}function xt(t,e){Xs++,Df[Xs]=t.current,t.current=e}var Nr={},on=Dr(Nr),yn=Dr(!1),hs=Nr;function ra(t,e){var n=t.type.contextTypes;if(!n)return Nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function Pc(){_t(yn),_t(on)}function N0(t,e,n){if(on.current!==Nr)throw Error(ne(168));xt(on,e),xt(yn,n)}function tv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,t1(t)||"Unknown",r));return Et({},n,i)}function Ic(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,hs=on.current,xt(on,t),xt(yn,yn.current),!0}function L0(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=tv(t,e,hs),i.__reactInternalMemoizedMergedChildContext=t,_t(yn),_t(on),xt(on,t)):_t(yn),xt(yn,n)}var Wi=null,jc=!1,Jh=!1;function nv(t){Wi===null?Wi=[t]:Wi.push(t)}function gM(t){jc=!0,nv(t)}function Ur(){if(!Jh&&Wi!==null){Jh=!0;var t=0,e=ot;try{var n=Wi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Wi=null,jc=!1}catch(r){throw Wi!==null&&(Wi=Wi.slice(t+1)),Ax(op,Ur),r}finally{ot=e,Jh=!1}}return null}var qs=[],Ys=0,Nc=null,Lc=0,Xn=[],qn=0,fs=null,Xi=1,qi="";function ss(t,e){qs[Ys++]=Lc,qs[Ys++]=Nc,Nc=t,Lc=e}function iv(t,e,n){Xn[qn++]=Xi,Xn[qn++]=qi,Xn[qn++]=fs,fs=t;var i=Xi;t=qi;var r=32-li(i)-1;i&=~(1<<r),n+=1;var s=32-li(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Xi=1<<32-li(e)+r|n<<r|i,qi=s+t}else Xi=1<<s|n<<r|i,qi=t}function gp(t){t.return!==null&&(ss(t,1),iv(t,1,0))}function xp(t){for(;t===Nc;)Nc=qs[--Ys],qs[Ys]=null,Lc=qs[--Ys],qs[Ys]=null;for(;t===fs;)fs=Xn[--qn],Xn[qn]=null,qi=Xn[--qn],Xn[qn]=null,Xi=Xn[--qn],Xn[qn]=null}var In=null,Pn=null,St=!1,oi=null;function rv(t,e){var n=Yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function D0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,In=t,Pn=Tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,In=t,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fs!==null?{id:Xi,overflow:qi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,In=t,Pn=null,!0):!1;default:return!1}}function Uf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ff(t){if(St){var e=Pn;if(e){var n=e;if(!D0(t,e)){if(Uf(t))throw Error(ne(418));e=Tr(n.nextSibling);var i=In;e&&D0(t,e)?rv(i,n):(t.flags=t.flags&-4097|2,St=!1,In=t)}}else{if(Uf(t))throw Error(ne(418));t.flags=t.flags&-4097|2,St=!1,In=t}}}function U0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function ac(t){if(t!==In)return!1;if(!St)return U0(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!If(t.type,t.memoizedProps)),e&&(e=Pn)){if(Uf(t))throw sv(),Error(ne(418));for(;e;)rv(t,e),e=Tr(e.nextSibling)}if(U0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pn=Tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pn=null}}else Pn=In?Tr(t.stateNode.nextSibling):null;return!0}function sv(){for(var t=Pn;t;)t=Tr(t.nextSibling)}function sa(){Pn=In=null,St=!1}function vp(t){oi===null?oi=[t]:oi.push(t)}var xM=Ji.ReactCurrentBatchConfig;function no(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function oc(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function F0(t){var e=t._init;return e(t._payload)}function av(t){function e(u,p){if(t){var v=u.deletions;v===null?(u.deletions=[p],u.flags|=16):v.push(p)}}function n(u,p){if(!t)return null;for(;p!==null;)e(u,p),p=p.sibling;return null}function i(u,p){for(u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function r(u,p){return u=Pr(u,p),u.index=0,u.sibling=null,u}function s(u,p,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<p?(u.flags|=2,p):v):(u.flags|=2,p)):(u.flags|=1048576,p)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,p,v,M){return p===null||p.tag!==6?(p=af(v,u.mode,M),p.return=u,p):(p=r(p,v),p.return=u,p)}function l(u,p,v,M){var C=v.type;return C===zs?h(u,p,v.props.children,M,v.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xr&&F0(C)===p.type)?(M=r(p,v.props),M.ref=no(u,p,v),M.return=u,M):(M=yc(v.type,v.key,v.props,null,u.mode,M),M.ref=no(u,p,v),M.return=u,M)}function c(u,p,v,M){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=of(v,u.mode,M),p.return=u,p):(p=r(p,v.children||[]),p.return=u,p)}function h(u,p,v,M,C){return p===null||p.tag!==7?(p=ds(v,u.mode,M,C),p.return=u,p):(p=r(p,v),p.return=u,p)}function f(u,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=af(""+p,u.mode,v),p.return=u,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ql:return v=yc(p.type,p.key,p.props,null,u.mode,v),v.ref=no(u,null,p),v.return=u,v;case Bs:return p=of(p,u.mode,v),p.return=u,p;case xr:var M=p._init;return f(u,M(p._payload),v)}if(oo(p)||Ja(p))return p=ds(p,u.mode,v,null),p.return=u,p;oc(u,p)}return null}function d(u,p,v,M){var C=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:o(u,p,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ql:return v.key===C?l(u,p,v,M):null;case Bs:return v.key===C?c(u,p,v,M):null;case xr:return C=v._init,d(u,p,C(v._payload),M)}if(oo(v)||Ja(v))return C!==null?null:h(u,p,v,M,null);oc(u,v)}return null}function m(u,p,v,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,o(p,u,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ql:return u=u.get(M.key===null?v:M.key)||null,l(p,u,M,C);case Bs:return u=u.get(M.key===null?v:M.key)||null,c(p,u,M,C);case xr:var E=M._init;return m(u,p,v,E(M._payload),C)}if(oo(M)||Ja(M))return u=u.get(v)||null,h(p,u,M,C,null);oc(p,M)}return null}function y(u,p,v,M){for(var C=null,E=null,R=p,g=p=0,T=null;R!==null&&g<v.length;g++){R.index>g?(T=R,R=null):T=R.sibling;var P=d(u,R,v[g],M);if(P===null){R===null&&(R=T);break}t&&R&&P.alternate===null&&e(u,R),p=s(P,p,g),E===null?C=P:E.sibling=P,E=P,R=T}if(g===v.length)return n(u,R),St&&ss(u,g),C;if(R===null){for(;g<v.length;g++)R=f(u,v[g],M),R!==null&&(p=s(R,p,g),E===null?C=R:E.sibling=R,E=R);return St&&ss(u,g),C}for(R=i(u,R);g<v.length;g++)T=m(R,u,g,v[g],M),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?g:T.key),p=s(T,p,g),E===null?C=T:E.sibling=T,E=T);return t&&R.forEach(function(I){return e(u,I)}),St&&ss(u,g),C}function b(u,p,v,M){var C=Ja(v);if(typeof C!="function")throw Error(ne(150));if(v=C.call(v),v==null)throw Error(ne(151));for(var E=C=null,R=p,g=p=0,T=null,P=v.next();R!==null&&!P.done;g++,P=v.next()){R.index>g?(T=R,R=null):T=R.sibling;var I=d(u,R,P.value,M);if(I===null){R===null&&(R=T);break}t&&R&&I.alternate===null&&e(u,R),p=s(I,p,g),E===null?C=I:E.sibling=I,E=I,R=T}if(P.done)return n(u,R),St&&ss(u,g),C;if(R===null){for(;!P.done;g++,P=v.next())P=f(u,P.value,M),P!==null&&(p=s(P,p,g),E===null?C=P:E.sibling=P,E=P);return St&&ss(u,g),C}for(R=i(u,R);!P.done;g++,P=v.next())P=m(R,u,g,P.value,M),P!==null&&(t&&P.alternate!==null&&R.delete(P.key===null?g:P.key),p=s(P,p,g),E===null?C=P:E.sibling=P,E=P);return t&&R.forEach(function(B){return e(u,B)}),St&&ss(u,g),C}function x(u,p,v,M){if(typeof v=="object"&&v!==null&&v.type===zs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ql:e:{for(var C=v.key,E=p;E!==null;){if(E.key===C){if(C=v.type,C===zs){if(E.tag===7){n(u,E.sibling),p=r(E,v.props.children),p.return=u,u=p;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xr&&F0(C)===E.type){n(u,E.sibling),p=r(E,v.props),p.ref=no(u,E,v),p.return=u,u=p;break e}n(u,E);break}else e(u,E);E=E.sibling}v.type===zs?(p=ds(v.props.children,u.mode,M,v.key),p.return=u,u=p):(M=yc(v.type,v.key,v.props,null,u.mode,M),M.ref=no(u,p,v),M.return=u,u=M)}return a(u);case Bs:e:{for(E=v.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(u,p.sibling),p=r(p,v.children||[]),p.return=u,u=p;break e}else{n(u,p);break}else e(u,p);p=p.sibling}p=of(v,u.mode,M),p.return=u,u=p}return a(u);case xr:return E=v._init,x(u,p,E(v._payload),M)}if(oo(v))return y(u,p,v,M);if(Ja(v))return b(u,p,v,M);oc(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(u,p.sibling),p=r(p,v),p.return=u,u=p):(n(u,p),p=af(v,u.mode,M),p.return=u,u=p),a(u)):n(u,p)}return x}var aa=av(!0),ov=av(!1),Dc=Dr(null),Uc=null,$s=null,_p=null;function yp(){_p=$s=Uc=null}function Sp(t){var e=Dc.current;_t(Dc),t._currentValue=e}function kf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ta(t,e){Uc=t,_p=$s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(_n=!0),t.firstContext=null)}function Kn(t){var e=t._currentValue;if(_p!==t)if(t={context:t,memoizedValue:e,next:null},$s===null){if(Uc===null)throw Error(ne(308));$s=t,Uc.dependencies={lanes:0,firstContext:t}}else $s=$s.next=t;return e}var ls=null;function Mp(t){ls===null?ls=[t]:ls.push(t)}function lv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Mp(e)):(n.next=r.next,r.next=n),e.interleaved=n,ji(t,i)}function ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function bp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(nt&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ji(t,n)}return r=i.interleaved,r===null?(e.next=e,Mp(i)):(e.next=r.next,r.next=e),i.interleaved=e,ji(t,n)}function pc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,lp(t,n)}}function k0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fc(t,e,n,i){var r=t.updateQueue;vr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,h=c=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,b=o;switch(d=e,m=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){f=y.call(m,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,d=typeof y=="function"?y.call(m,f,d):y,d==null)break e;f=Et({},f,d);break e;case 2:vr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,l=f):h=h.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ms|=a,t.lanes=a,t.memoizedState=f}}function O0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var zo={},Ti=Dr(zo),Io=Dr(zo),No=Dr(zo);function cs(t){if(t===zo)throw Error(ne(174));return t}function wp(t,e){switch(xt(No,e),xt(Io,t),xt(Ti,zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xf(e,t)}_t(Ti),xt(Ti,e)}function oa(){_t(Ti),_t(Io),_t(No)}function uv(t){cs(No.current);var e=cs(Ti.current),n=xf(e,t.type);e!==n&&(xt(Io,t),xt(Ti,n))}function Ep(t){Io.current===t&&(_t(Ti),_t(Io))}var bt=Dr(0);function kc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qh=[];function Tp(){for(var t=0;t<Qh.length;t++)Qh[t]._workInProgressVersionPrimary=null;Qh.length=0}var mc=Ji.ReactCurrentDispatcher,ef=Ji.ReactCurrentBatchConfig,ps=0,wt=null,Ot=null,Ht=null,Oc=!1,go=!1,Lo=0,vM=0;function rn(){throw Error(ne(321))}function Ap(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ui(t[n],e[n]))return!1;return!0}function Cp(t,e,n,i,r,s){if(ps=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,mc.current=t===null||t.memoizedState===null?MM:bM,t=n(i,r),go){s=0;do{if(go=!1,Lo=0,25<=s)throw Error(ne(301));s+=1,Ht=Ot=null,e.updateQueue=null,mc.current=wM,t=n(i,r)}while(go)}if(mc.current=Bc,e=Ot!==null&&Ot.next!==null,ps=0,Ht=Ot=wt=null,Oc=!1,e)throw Error(ne(300));return t}function Rp(){var t=Lo!==0;return Lo=0,t}function bi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?wt.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function jn(){if(Ot===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Ht===null?wt.memoizedState:Ht.next;if(e!==null)Ht=e,Ot=t;else{if(t===null)throw Error(ne(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Ht===null?wt.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Do(t,e){return typeof e=="function"?e(t):e}function tf(t){var e=jn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((ps&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,wt.lanes|=h,ms|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ui(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,wt.lanes|=s,ms|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nf(t){var e=jn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ui(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function dv(){}function hv(t,e){var n=wt,i=jn(),r=e(),s=!ui(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,Pp(mv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,Uo(9,pv.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(ne(349));(ps&30)!==0||fv(n,e,r)}return r}function fv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function pv(t,e,n,i){e.value=n,e.getSnapshot=i,gv(e)&&xv(t)}function mv(t,e,n){return n(function(){gv(e)&&xv(t)})}function gv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ui(t,n)}catch{return!0}}function xv(t){var e=ji(t,1);e!==null&&ci(e,t,1,-1)}function B0(t){var e=bi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:t},e.queue=t,t=t.dispatch=SM.bind(null,wt,t),[e.memoizedState,t]}function Uo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function vv(){return jn().memoizedState}function gc(t,e,n,i){var r=bi();wt.flags|=t,r.memoizedState=Uo(1|e,n,void 0,i===void 0?null:i)}function Zc(t,e,n,i){var r=jn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var a=Ot.memoizedState;if(s=a.destroy,i!==null&&Ap(i,a.deps)){r.memoizedState=Uo(e,n,s,i);return}}wt.flags|=t,r.memoizedState=Uo(1|e,n,s,i)}function z0(t,e){return gc(8390656,8,t,e)}function Pp(t,e){return Zc(2048,8,t,e)}function _v(t,e){return Zc(4,2,t,e)}function yv(t,e){return Zc(4,4,t,e)}function Sv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mv(t,e,n){return n=n!=null?n.concat([t]):null,Zc(4,4,Sv.bind(null,e,t),n)}function Ip(){}function bv(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ap(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function wv(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ap(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ev(t,e,n){return(ps&21)===0?(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=n):(ui(n,e)||(n=Px(),wt.lanes|=n,ms|=n,t.baseState=!0),e)}function _M(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=ef.transition;ef.transition={};try{t(!1),e()}finally{ot=n,ef.transition=i}}function Tv(){return jn().memoizedState}function yM(t,e,n){var i=Rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Av(t))Cv(e,n);else if(n=lv(t,e,n,i),n!==null){var r=fn();ci(n,t,i,r),Rv(n,e,i)}}function SM(t,e,n){var i=Rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Av(t))Cv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ui(o,a)){var l=e.interleaved;l===null?(r.next=r,Mp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=lv(t,e,r,i),n!==null&&(r=fn(),ci(n,t,i,r),Rv(n,e,i))}}function Av(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function Cv(t,e){go=Oc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rv(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,lp(t,n)}}var Bc={readContext:Kn,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},MM={readContext:Kn,useCallback:function(t,e){return bi().memoizedState=[t,e===void 0?null:e],t},useContext:Kn,useEffect:z0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gc(4194308,4,Sv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gc(4194308,4,t,e)},useInsertionEffect:function(t,e){return gc(4,2,t,e)},useMemo:function(t,e){var n=bi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=bi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=yM.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=bi();return t={current:t},e.memoizedState=t},useState:B0,useDebugValue:Ip,useDeferredValue:function(t){return bi().memoizedState=t},useTransition:function(){var t=B0(!1),e=t[0];return t=_M.bind(null,t[1]),bi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,r=bi();if(St){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Wt===null)throw Error(ne(349));(ps&30)!==0||fv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,z0(mv.bind(null,i,s,t),[t]),i.flags|=2048,Uo(9,pv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=bi(),e=Wt.identifierPrefix;if(St){var n=qi,i=Xi;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bM={readContext:Kn,useCallback:bv,useContext:Kn,useEffect:Pp,useImperativeHandle:Mv,useInsertionEffect:_v,useLayoutEffect:yv,useMemo:wv,useReducer:tf,useRef:vv,useState:function(){return tf(Do)},useDebugValue:Ip,useDeferredValue:function(t){var e=jn();return Ev(e,Ot.memoizedState,t)},useTransition:function(){var t=tf(Do)[0],e=jn().memoizedState;return[t,e]},useMutableSource:dv,useSyncExternalStore:hv,useId:Tv,unstable_isNewReconciler:!1},wM={readContext:Kn,useCallback:bv,useContext:Kn,useEffect:Pp,useImperativeHandle:Mv,useInsertionEffect:_v,useLayoutEffect:yv,useMemo:wv,useReducer:nf,useRef:vv,useState:function(){return nf(Do)},useDebugValue:Ip,useDeferredValue:function(t){var e=jn();return Ot===null?e.memoizedState=t:Ev(e,Ot.memoizedState,t)},useTransition:function(){var t=nf(Do)[0],e=jn().memoizedState;return[t,e]},useMutableSource:dv,useSyncExternalStore:hv,useId:Tv,unstable_isNewReconciler:!1};function si(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Of(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jc={isMounted:function(t){return(t=t._reactInternals)?vs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=Rr(t),s=Yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,r),e!==null&&(ci(e,t,r,i),pc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=Rr(t),s=Yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,r),e!==null&&(ci(e,t,r,i),pc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=Rr(t),r=Yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ar(t,r,i),e!==null&&(ci(e,t,i,n),pc(e,t,i))}};function V0(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ao(n,i)||!Ao(r,s):!0}function Pv(t,e,n){var i=!1,r=Nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Kn(s):(r=Sn(e)?hs:on.current,i=e.contextTypes,s=(i=i!=null)?ra(t,r):Nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function G0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Jc.enqueueReplaceState(e,e.state,null)}function Bf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Kn(s):(s=Sn(e)?hs:on.current,r.context=ra(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Of(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jc.enqueueReplaceState(r,r.state,null),Fc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function la(t,e){try{var n="",i=e;do n+=e1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function rf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var EM=typeof WeakMap=="function"?WeakMap:Map;function Iv(t,e,n){n=Yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Vc||(Vc=!0,jf=i),zf(t,e)},n}function Nv(t,e,n){n=Yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){zf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zf(t,e),typeof i!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function H0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new EM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=BM.bind(null,t,e,n),e.then(t,t))}function W0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function X0(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yi(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var TM=Ji.ReactCurrentOwner,_n=!1;function hn(t,e,n,i){e.child=t===null?ov(e,null,n,i):aa(e,t.child,n,i)}function q0(t,e,n,i,r){n=n.render;var s=e.ref;return ta(e,r),i=Cp(t,e,n,i,s,r),n=Rp(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(St&&n&&gp(e),e.flags|=1,hn(t,e,i,r),e.child)}function Y0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Bp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Lv(t,e,s,i,r)):(t=yc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(a,i)&&t.ref===e.ref)return Zi(t,e,r)}return e.flags|=1,t=Pr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Lv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ao(s,i)&&t.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(_n=!0);else return e.lanes=t.lanes,Zi(t,e,r)}return Vf(t,e,n,i,r)}function Dv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(js,Rn),Rn|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt(js,Rn),Rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,xt(js,Rn),Rn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,xt(js,Rn),Rn|=i;return hn(t,e,r,n),e.child}function Uv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vf(t,e,n,i,r){var s=Sn(n)?hs:on.current;return s=ra(e,s),ta(e,r),n=Cp(t,e,n,i,s,r),i=Rp(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(St&&i&&gp(e),e.flags|=1,hn(t,e,n,r),e.child)}function $0(t,e,n,i,r){if(Sn(n)){var s=!0;Ic(e)}else s=!1;if(ta(e,r),e.stateNode===null)xc(t,e),Pv(e,n,i),Bf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kn(c):(c=Sn(n)?hs:on.current,c=ra(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&G0(e,a,i,c),vr=!1;var d=e.memoizedState;a.state=d,Fc(e,i,a,r),l=e.memoizedState,o!==i||d!==l||yn.current||vr?(typeof h=="function"&&(Of(e,n,h,i),l=e.memoizedState),(o=vr||V0(e,n,o,i,d,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,cv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:si(e.type,o),a.props=c,f=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kn(l):(l=Sn(n)?hs:on.current,l=ra(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&G0(e,a,i,l),vr=!1,d=e.memoizedState,a.state=d,Fc(e,i,a,r);var y=e.memoizedState;o!==f||d!==y||yn.current||vr?(typeof m=="function"&&(Of(e,n,m,i),y=e.memoizedState),(c=vr||V0(e,n,c,i,d,y,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,y,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),a.props=i,a.state=y,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Gf(t,e,n,i,s,r)}function Gf(t,e,n,i,r,s){Uv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&L0(e,n,!1),Zi(t,e,s);i=e.stateNode,TM.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=aa(e,t.child,null,s),e.child=aa(e,null,o,s)):hn(t,e,o,s),e.memoizedState=i.state,r&&L0(e,n,!0),e.child}function Fv(t){var e=t.stateNode;e.pendingContext?N0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&N0(t,e.context,!1),wp(t,e.containerInfo)}function K0(t,e,n,i,r){return sa(),vp(r),e.flags|=256,hn(t,e,n,i),e.child}var Hf={dehydrated:null,treeContext:null,retryLane:0};function Wf(t){return{baseLanes:t,cachePool:null,transitions:null}}function kv(t,e,n){var i=e.pendingProps,r=bt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(bt,r&1),t===null)return Ff(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=a):s=tu(a,i,0,null),t=ds(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wf(n),e.memoizedState=Hf,t):Np(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return AM(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return(a&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Pr(o,s):(s=ds(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Wf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Hf,i}return s=t.child,t=s.sibling,i=Pr(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Np(t,e){return e=tu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function lc(t,e,n,i){return i!==null&&vp(i),aa(e,t.child,null,n),t=Np(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AM(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=rf(Error(ne(422))),lc(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=tu({mode:"visible",children:i.children},r,0,null),s=ds(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&aa(e,t.child,null,a),e.child.memoizedState=Wf(a),e.memoizedState=Hf,s);if((e.mode&1)===0)return lc(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=rf(s,i,void 0),lc(t,e,a,i)}if(o=(a&t.childLanes)!==0,_n||o){if(i=Wt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|a))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ji(t,r),ci(i,t,r,-1))}return Op(),i=rf(Error(ne(421))),lc(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Pn=Tr(r.nextSibling),In=e,St=!0,oi=null,t!==null&&(Xn[qn++]=Xi,Xn[qn++]=qi,Xn[qn++]=fs,Xi=t.id,qi=t.overflow,fs=e),e=Np(e,i.children),e.flags|=4096,e)}function j0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),kf(t.return,e,n)}function sf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ov(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(hn(t,e,i.children,n),i=bt.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&j0(t,n,e);else if(t.tag===19)j0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(bt,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&kc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),sf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&kc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}sf(e,!0,n,null,s);break;case"together":sf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xc(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ms|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CM(t,e,n){switch(e.tag){case 3:Fv(e),sa();break;case 5:uv(e);break;case 1:Sn(e.type)&&Ic(e);break;case 4:wp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(Dc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(bt,bt.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?kv(t,e,n):(xt(bt,bt.current&1),t=Zi(t,e,n),t!==null?t.sibling:null);xt(bt,bt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return Ov(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(bt,bt.current),i)break;return null;case 22:case 23:return e.lanes=0,Dv(t,e,n)}return Zi(t,e,n)}var Bv,Xf,zv,Vv;Bv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xf=function(){};zv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,cs(Ti.current);var s=null;switch(n){case"input":r=ff(t,r),i=ff(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=gf(t,r),i=gf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Rc)}vf(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(yo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r?.[c],i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(yo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&vt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Vv=function(t,e,n,i){n!==i&&(e.flags|=4)};function io(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function RM(t,e,n){var i=e.pendingProps;switch(xp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(e),null;case 1:return Sn(e.type)&&Pc(),sn(e),null;case 3:return i=e.stateNode,oa(),_t(yn),_t(on),Tp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ac(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,oi!==null&&(Qf(oi),oi=null))),Xf(t,e),sn(e),null;case 5:Ep(e);var r=cs(No.current);if(n=e.type,t!==null&&e.stateNode!=null)zv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return sn(e),null}if(t=cs(Ti.current),ac(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[wi]=e,i[Po]=s,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<co.length;r++)vt(co[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":r0(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":a0(i,s),vt("invalid",i)}vf(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&sc(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&sc(i.textContent,o,t),r=["children",""+o]):yo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&vt("scroll",i)}switch(n){case"input":Yl(i),s0(i,s,!0);break;case"textarea":Yl(i),o0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Rc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[wi]=e,t[Po]=i,Bv(t,e,!1,!1),e.stateNode=t;e:{switch(a=_f(n,i),n){case"dialog":vt("cancel",t),vt("close",t),r=i;break;case"iframe":case"object":case"embed":vt("load",t),r=i;break;case"video":case"audio":for(r=0;r<co.length;r++)vt(co[r],t);r=i;break;case"source":vt("error",t),r=i;break;case"img":case"image":case"link":vt("error",t),vt("load",t),r=i;break;case"details":vt("toggle",t),r=i;break;case"input":r0(t,i),r=ff(t,i),vt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),vt("invalid",t);break;case"textarea":a0(t,i),r=gf(t,i),vt("invalid",t);break;default:r=i}vf(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?vx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&So(t,l):typeof l=="number"&&So(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(yo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&vt("scroll",t):l!=null&&np(t,s,l,a))}switch(n){case"input":Yl(t),s0(t,i,!1);break;case"textarea":Yl(t),o0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Zs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Zs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Rc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return sn(e),null;case 6:if(t&&e.stateNode!=null)Vv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=cs(No.current),cs(Ti.current),ac(e)){if(i=e.stateNode,n=e.memoizedProps,i[wi]=e,(s=i.nodeValue!==n)&&(t=In,t!==null))switch(t.tag){case 3:sc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[wi]=e,e.stateNode=i}return sn(e),null;case 13:if(_t(bt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&Pn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)sv(),sa(),e.flags|=98560,s=!1;else if(s=ac(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[wi]=e}else sa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;sn(e),s=!1}else oi!==null&&(Qf(oi),oi=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(bt.current&1)!==0?Bt===0&&(Bt=3):Op())),e.updateQueue!==null&&(e.flags|=4),sn(e),null);case 4:return oa(),Xf(t,e),t===null&&Co(e.stateNode.containerInfo),sn(e),null;case 10:return Sp(e.type._context),sn(e),null;case 17:return Sn(e.type)&&Pc(),sn(e),null;case 19:if(_t(bt),s=e.memoizedState,s===null)return sn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)io(s,!1);else{if(Bt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(a=kc(t),a!==null){for(e.flags|=128,io(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(bt,bt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Dt()>ca&&(e.flags|=128,i=!0,io(s,!1),e.lanes=4194304)}else{if(!i)if(t=kc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!St)return sn(e),null}else 2*Dt()-s.renderingStartTime>ca&&n!==1073741824&&(e.flags|=128,i=!0,io(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Dt(),e.sibling=null,n=bt.current,xt(bt,i?n&1|2:n&1),e):(sn(e),null);case 22:case 23:return kp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Rn&1073741824)!==0&&(sn(e),e.subtreeFlags&6&&(e.flags|=8192)):sn(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function PM(t,e){switch(xp(e),e.tag){case 1:return Sn(e.type)&&Pc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oa(),_t(yn),_t(on),Tp(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Ep(e),null;case 13:if(_t(bt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));sa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(bt),null;case 4:return oa(),null;case 10:return Sp(e.type._context),null;case 22:case 23:return kp(),null;case 24:return null;default:return null}}var cc=!1,an=!1,IM=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function qf(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var Z0=!1;function NM(t,e){if(Rf=Tc,t=qx(),mp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++h===i&&(l=a),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pf={focusedElem:t,selectionRange:n},Tc=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,x=y.memoizedState,u=e.stateNode,p=u.getSnapshotBeforeUpdate(e.elementType===e.type?b:si(e.type,b),x);u.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){Ct(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return y=Z0,Z0=!1,y}function xo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&qf(e,n,s)}r=r.next}while(r!==i)}}function Qc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Yf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Gv(t){var e=t.alternate;e!==null&&(t.alternate=null,Gv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wi],delete e[Po],delete e[Lf],delete e[pM],delete e[mM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hv(t){return t.tag===5||t.tag===3||t.tag===4}function J0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $f(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rc));else if(i!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}function Kf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Kf(t,e,n),t=t.sibling;t!==null;)Kf(t,e,n),t=t.sibling}var Kt=null,ai=!1;function gr(t,e,n){for(n=n.child;n!==null;)Wv(t,e,n),n=n.sibling}function Wv(t,e,n){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(Xc,n)}catch{}switch(n.tag){case 5:an||Ks(n,e);case 6:var i=Kt,r=ai;Kt=null,gr(t,e,n),Kt=i,ai=r,Kt!==null&&(ai?(t=Kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Kt.removeChild(n.stateNode));break;case 18:Kt!==null&&(ai?(t=Kt,n=n.stateNode,t.nodeType===8?Zh(t.parentNode,n):t.nodeType===1&&Zh(t,n),Eo(t)):Zh(Kt,n.stateNode));break;case 4:i=Kt,r=ai,Kt=n.stateNode.containerInfo,ai=!0,gr(t,e,n),Kt=i,ai=r;break;case 0:case 11:case 14:case 15:if(!an&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&((s&2)!==0||(s&4)!==0)&&qf(n,e,a),r=r.next}while(r!==i)}gr(t,e,n);break;case 1:if(!an&&(Ks(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Ct(n,e,o)}gr(t,e,n);break;case 21:gr(t,e,n);break;case 22:n.mode&1?(an=(i=an)||n.memoizedState!==null,gr(t,e,n),an=i):gr(t,e,n);break;default:gr(t,e,n)}}function Q0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new IM),e.forEach(function(i){var r=VM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ri(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Kt=o.stateNode,ai=!1;break e;case 3:Kt=o.stateNode.containerInfo,ai=!0;break e;case 4:Kt=o.stateNode.containerInfo,ai=!0;break e}o=o.return}if(Kt===null)throw Error(ne(160));Wv(s,a,r),Kt=null,ai=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Xv(e,t),e=e.sibling}function Xv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ri(e,t),Mi(t),i&4){try{xo(3,t,t.return),Qc(3,t)}catch(b){Ct(t,t.return,b)}try{xo(5,t,t.return)}catch(b){Ct(t,t.return,b)}}break;case 1:ri(e,t),Mi(t),i&512&&n!==null&&Ks(n,n.return);break;case 5:if(ri(e,t),Mi(t),i&512&&n!==null&&Ks(n,n.return),t.flags&32){var r=t.stateNode;try{So(r,"")}catch(b){Ct(t,t.return,b)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&fx(r,s),_f(o,a);var c=_f(o,s);for(a=0;a<l.length;a+=2){var h=l[a],f=l[a+1];h==="style"?vx(r,f):h==="dangerouslySetInnerHTML"?gx(r,f):h==="children"?So(r,f):np(r,h,f,c)}switch(o){case"input":pf(r,s);break;case"textarea":px(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Zs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Zs(r,!!s.multiple,s.defaultValue,!0):Zs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Po]=s}catch(b){Ct(t,t.return,b)}}break;case 6:if(ri(e,t),Mi(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(b){Ct(t,t.return,b)}}break;case 3:if(ri(e,t),Mi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Eo(e.containerInfo)}catch(b){Ct(t,t.return,b)}break;case 4:ri(e,t),Mi(t);break;case 13:ri(e,t),Mi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Up=Dt())),i&4&&Q0(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(an=(c=an)||h,ri(e,t),an=c):ri(e,t),Mi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&(t.mode&1)!==0)for(Se=t,h=t.child;h!==null;){for(f=Se=h;Se!==null;){switch(d=Se,m=d.child,d.tag){case 0:case 11:case 14:case 15:xo(4,d,d.return);break;case 1:Ks(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(b){Ct(i,n,b)}}break;case 5:Ks(d,d.return);break;case 22:if(d.memoizedState!==null){tx(f);continue}}m!==null?(m.return=d,Se=m):tx(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=xx("display",a))}catch(b){Ct(t,t.return,b)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(b){Ct(t,t.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ri(e,t),Mi(t),i&4&&Q0(t);break;case 21:break;default:ri(e,t),Mi(t)}}function Mi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Hv(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(So(r,""),i.flags&=-33);var s=J0(t);Kf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=J0(t);$f(t,o,a);break;default:throw Error(ne(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LM(t,e,n){Se=t,qv(t,e,n)}function qv(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||cc;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||an;o=cc;var c=an;if(cc=a,(an=l)&&!c)for(Se=r;Se!==null;)a=Se,l=a.child,a.tag===22&&a.memoizedState!==null?nx(r):l!==null?(l.return=a,Se=l):nx(r);for(;s!==null;)Se=s,qv(s,e,n),s=s.sibling;Se=r,cc=o,an=c}ex(t,e,n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,Se=s):ex(t,e,n)}}function ex(t){for(;Se!==null;){var e=Se;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:an||Qc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!an)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:si(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&O0(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}O0(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Eo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}an||e.flags&512&&Yf(e)}catch(d){Ct(e,e.return,d)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function tx(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function nx(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qc(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{Yf(e)}catch(l){Ct(e,s,l)}break;case 5:var a=e.return;try{Yf(e)}catch(l){Ct(e,a,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var DM=Math.ceil,zc=Ji.ReactCurrentDispatcher,Lp=Ji.ReactCurrentOwner,$n=Ji.ReactCurrentBatchConfig,nt=0,Wt=null,Ft=null,jt=0,Rn=0,js=Dr(0),Bt=0,Fo=null,ms=0,eu=0,Dp=0,vo=null,vn=null,Up=0,ca=1/0,Hi=null,Vc=!1,jf=null,Cr=null,uc=!1,Mr=null,Gc=0,_o=0,Zf=null,vc=-1,_c=0;function fn(){return(nt&6)!==0?Dt():vc!==-1?vc:vc=Dt()}function Rr(t){return(t.mode&1)===0?1:(nt&2)!==0&&jt!==0?jt&-jt:xM.transition!==null?(_c===0&&(_c=Px()),_c):(t=ot,t!==0||(t=window.event,t=t===void 0?16:kx(t.type)),t)}function ci(t,e,n,i){if(50<_o)throw _o=0,Zf=null,Error(ne(185));ko(t,n,i),((nt&2)===0||t!==Wt)&&(t===Wt&&((nt&2)===0&&(eu|=n),Bt===4&&yr(t,jt)),Mn(t,i),n===1&&nt===0&&(e.mode&1)===0&&(ca=Dt()+500,jc&&Ur()))}function Mn(t,e){var n=t.callbackNode;_1(t,e);var i=Ec(t,t===Wt?jt:0);if(i===0)n!==null&&u0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&u0(n),e===1)t.tag===0?gM(ix.bind(null,t)):nv(ix.bind(null,t)),hM(function(){(nt&6)===0&&Ur()}),n=null;else{switch(Ix(i)){case 1:n=op;break;case 4:n=Cx;break;case 16:n=wc;break;case 536870912:n=Rx;break;default:n=wc}n=e_(n,Yv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Yv(t,e){if(vc=-1,_c=0,(nt&6)!==0)throw Error(ne(327));var n=t.callbackNode;if(na()&&t.callbackNode!==n)return null;var i=Ec(t,t===Wt?jt:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=Hc(t,i);else{e=i;var r=nt;nt|=2;var s=Kv();(Wt!==t||jt!==e)&&(Hi=null,ca=Dt()+500,us(t,e));do try{kM();break}catch(o){$v(t,o)}while(!0);yp(),zc.current=s,nt=r,Ft!==null?e=0:(Wt=null,jt=0,e=Bt)}if(e!==0){if(e===2&&(r=wf(t),r!==0&&(i=r,e=Jf(t,r))),e===1)throw n=Fo,us(t,0),yr(t,i),Mn(t,Dt()),n;if(e===6)yr(t,i);else{if(r=t.current.alternate,(i&30)===0&&!UM(r)&&(e=Hc(t,i),e===2&&(s=wf(t),s!==0&&(i=s,e=Jf(t,s))),e===1))throw n=Fo,us(t,0),yr(t,i),Mn(t,Dt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:as(t,vn,Hi);break;case 3:if(yr(t,i),(i&130023424)===i&&(e=Up+500-Dt(),10<e)){if(Ec(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Nf(as.bind(null,t,vn,Hi),e);break}as(t,vn,Hi);break;case 4:if(yr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-li(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*DM(i/1960))-i,10<i){t.timeoutHandle=Nf(as.bind(null,t,vn,Hi),i);break}as(t,vn,Hi);break;case 5:as(t,vn,Hi);break;default:throw Error(ne(329))}}}return Mn(t,Dt()),t.callbackNode===n?Yv.bind(null,t):null}function Jf(t,e){var n=vo;return t.current.memoizedState.isDehydrated&&(us(t,e).flags|=256),t=Hc(t,e),t!==2&&(e=vn,vn=n,e!==null&&Qf(e)),t}function Qf(t){vn===null?vn=t:vn.push.apply(vn,t)}function UM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ui(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~Dp,e&=~eu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function ix(t){if((nt&6)!==0)throw Error(ne(327));na();var e=Ec(t,0);if((e&1)===0)return Mn(t,Dt()),null;var n=Hc(t,e);if(t.tag!==0&&n===2){var i=wf(t);i!==0&&(e=i,n=Jf(t,i))}if(n===1)throw n=Fo,us(t,0),yr(t,e),Mn(t,Dt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,as(t,vn,Hi),Mn(t,Dt()),null}function Fp(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(ca=Dt()+500,jc&&Ur())}}function gs(t){Mr!==null&&Mr.tag===0&&(nt&6)===0&&na();var e=nt;nt|=1;var n=$n.transition,i=ot;try{if($n.transition=null,ot=1,t)return t()}finally{ot=i,$n.transition=n,nt=e,(nt&6)===0&&Ur()}}function kp(){Rn=js.current,_t(js)}function us(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dM(n)),Ft!==null)for(n=Ft.return;n!==null;){var i=n;switch(xp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pc();break;case 3:oa(),_t(yn),_t(on),Tp();break;case 5:Ep(i);break;case 4:oa();break;case 13:_t(bt);break;case 19:_t(bt);break;case 10:Sp(i.type._context);break;case 22:case 23:kp()}n=n.return}if(Wt=t,Ft=t=Pr(t.current,null),jt=Rn=e,Bt=0,Fo=null,Dp=eu=ms=0,vn=vo=null,ls!==null){for(e=0;e<ls.length;e++)if(n=ls[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}ls=null}return t}function $v(t,e){do{var n=Ft;try{if(yp(),mc.current=Bc,Oc){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Oc=!1}if(ps=0,Ht=Ot=wt=null,go=!1,Lo=0,Lp.current=null,n===null||n.return===null){Bt=1,Fo=e,Ft=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=jt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,f=h.tag;if((h.mode&1)===0&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=W0(a);if(m!==null){m.flags&=-257,X0(m,a,o,s,e),m.mode&1&&H0(s,c,e),e=m,l=c;var y=e.updateQueue;if(y===null){var b=new Set;b.add(l),e.updateQueue=b}else y.add(l);break e}else{if((e&1)===0){H0(s,c,e),Op();break e}l=Error(ne(426))}}else if(St&&o.mode&1){var x=W0(a);if(x!==null){(x.flags&65536)===0&&(x.flags|=256),X0(x,a,o,s,e),vp(la(l,o));break e}}s=l=la(l,o),Bt!==4&&(Bt=2),vo===null?vo=[s]:vo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Iv(s,l,e);k0(s,u);break e;case 1:o=l;var p=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Cr===null||!Cr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Nv(s,o,e);k0(s,M);break e}}s=s.return}while(s!==null)}Zv(n)}catch(C){e=C,Ft===n&&n!==null&&(Ft=n=n.return);continue}break}while(!0)}function Kv(){var t=zc.current;return zc.current=Bc,t===null?Bc:t}function Op(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Wt===null||(ms&268435455)===0&&(eu&268435455)===0||yr(Wt,jt)}function Hc(t,e){var n=nt;nt|=2;var i=Kv();(Wt!==t||jt!==e)&&(Hi=null,us(t,e));do try{FM();break}catch(r){$v(t,r)}while(!0);if(yp(),nt=n,zc.current=i,Ft!==null)throw Error(ne(261));return Wt=null,jt=0,Bt}function FM(){for(;Ft!==null;)jv(Ft)}function kM(){for(;Ft!==null&&!u1();)jv(Ft)}function jv(t){var e=Qv(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,e===null?Zv(t):Ft=e,Lp.current=null}function Zv(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=RM(n,e,Rn),n!==null){Ft=n;return}}else{if(n=PM(n,e),n!==null){n.flags&=32767,Ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Ft=null;return}}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);Bt===0&&(Bt=5)}function as(t,e,n){var i=ot,r=$n.transition;try{$n.transition=null,ot=1,OM(t,e,n,i)}finally{$n.transition=r,ot=i}return null}function OM(t,e,n,i){do na();while(Mr!==null);if((nt&6)!==0)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(y1(t,s),t===Wt&&(Ft=Wt=null,jt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||uc||(uc=!0,e_(wc,function(){return na(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=$n.transition,$n.transition=null;var a=ot;ot=1;var o=nt;nt|=4,Lp.current=null,NM(t,n),Xv(n,t),aM(Pf),Tc=!!Rf,Pf=Rf=null,t.current=n,LM(n,t,r),d1(),nt=o,ot=a,$n.transition=s}else t.current=n;if(uc&&(uc=!1,Mr=t,Gc=r),s=t.pendingLanes,s===0&&(Cr=null),p1(n.stateNode,i),Mn(t,Dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Vc)throw Vc=!1,t=jf,jf=null,t;return(Gc&1)!==0&&t.tag!==0&&na(),s=t.pendingLanes,(s&1)!==0?t===Zf?_o++:(_o=0,Zf=t):_o=0,Ur(),null}function na(){if(Mr!==null){var t=Ix(Gc),e=$n.transition,n=ot;try{if($n.transition=null,ot=16>t?16:t,Mr===null)var i=!1;else{if(t=Mr,Mr=null,Gc=0,(nt&6)!==0)throw Error(ne(331));var r=nt;for(nt|=4,Se=t.current;Se!==null;){var s=Se,a=s.child;if((Se.flags&16)!==0){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Se=c;Se!==null;){var h=Se;switch(h.tag){case 0:case 11:case 15:xo(8,h,s)}var f=h.child;if(f!==null)f.return=h,Se=f;else for(;Se!==null;){h=Se;var d=h.sibling,m=h.return;if(Gv(h),h===c){Se=null;break}if(d!==null){d.return=m,Se=d;break}Se=m}}}var y=s.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var x=b.sibling;b.sibling=null,b=x}while(b!==null)}}Se=s}}if((s.subtreeFlags&2064)!==0&&a!==null)a.return=s,Se=a;else e:for(;Se!==null;){if(s=Se,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:xo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Se=u;break e}Se=s.return}}var p=t.current;for(Se=p;Se!==null;){a=Se;var v=a.child;if((a.subtreeFlags&2064)!==0&&v!==null)v.return=a,Se=v;else e:for(a=p;Se!==null;){if(o=Se,(o.flags&2048)!==0)try{switch(o.tag){case 0:case 11:case 15:Qc(9,o)}}catch(C){Ct(o,o.return,C)}if(o===a){Se=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Se=M;break e}Se=o.return}}if(nt=r,Ur(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(Xc,t)}catch{}i=!0}return i}finally{ot=n,$n.transition=e}}return!1}function rx(t,e,n){e=la(n,e),e=Iv(t,e,1),t=Ar(t,e,1),e=fn(),t!==null&&(ko(t,1,e),Mn(t,e))}function Ct(t,e,n){if(t.tag===3)rx(t,t,n);else for(;e!==null;){if(e.tag===3){rx(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cr===null||!Cr.has(i))){t=la(n,t),t=Nv(e,t,1),e=Ar(e,t,1),t=fn(),e!==null&&(ko(e,1,t),Mn(e,t));break}}e=e.return}}function BM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(jt&n)===n&&(Bt===4||Bt===3&&(jt&130023424)===jt&&500>Dt()-Up?us(t,0):Dp|=n),Mn(t,e)}function Jv(t,e){e===0&&((t.mode&1)===0?e=1:(e=jl,jl<<=1,(jl&130023424)===0&&(jl=4194304)));var n=fn();t=ji(t,e),t!==null&&(ko(t,e,n),Mn(t,n))}function zM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jv(t,n)}function VM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Jv(t,n)}var Qv;Qv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)_n=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return _n=!1,CM(t,e,n);_n=(t.flags&131072)!==0}else _n=!1,St&&(e.flags&1048576)!==0&&iv(e,Lc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;xc(t,e),t=e.pendingProps;var r=ra(e,on.current);ta(e,n),r=Cp(null,e,i,t,r,n);var s=Rp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,Ic(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bp(e),r.updater=Jc,e.stateNode=r,r._reactInternals=e,Bf(e,i,t,n),e=Gf(null,e,i,!0,s,n)):(e.tag=0,St&&s&&gp(e),hn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(xc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=HM(i),t=si(i,t),r){case 0:e=Vf(null,e,i,t,n);break e;case 1:e=$0(null,e,i,t,n);break e;case 11:e=q0(null,e,i,t,n);break e;case 14:e=Y0(null,e,i,si(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Vf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),$0(t,e,i,r,n);case 3:e:{if(Fv(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,cv(t,e),Fc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=la(Error(ne(423)),e),e=K0(t,e,i,n,r);break e}else if(i!==r){r=la(Error(ne(424)),e),e=K0(t,e,i,n,r);break e}else for(Pn=Tr(e.stateNode.containerInfo.firstChild),In=e,St=!0,oi=null,n=ov(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sa(),i===r){e=Zi(t,e,n);break e}hn(t,e,i,n)}e=e.child}return e;case 5:return uv(e),t===null&&Ff(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,If(i,r)?a=null:s!==null&&If(i,s)&&(e.flags|=32),Uv(t,e),hn(t,e,a,n),e.child;case 6:return t===null&&Ff(e),null;case 13:return kv(t,e,n);case 4:return wp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=aa(e,null,i,n):hn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),q0(t,e,i,r,n);case 7:return hn(t,e,e.pendingProps,n),e.child;case 8:return hn(t,e,e.pendingProps.children,n),e.child;case 12:return hn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,xt(Dc,i._currentValue),i._currentValue=a,s!==null)if(ui(s.value,a)){if(s.children===r.children&&!yn.current){e=Zi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),kf(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),kf(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}hn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ta(e,n),r=Kn(r),i=i(r),e.flags|=1,hn(t,e,i,n),e.child;case 14:return i=e.type,r=si(i,e.pendingProps),r=si(i.type,r),Y0(t,e,i,r,n);case 15:return Lv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),xc(t,e),e.tag=1,Sn(i)?(t=!0,Ic(e)):t=!1,ta(e,n),Pv(e,i,r),Bf(e,i,r,n),Gf(null,e,i,!0,t,n);case 19:return Ov(t,e,n);case 22:return Dv(t,e,n)}throw Error(ne(156,e.tag))};function e_(t,e){return Ax(t,e)}function GM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,e,n,i){return new GM(t,e,n,i)}function Bp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HM(t){if(typeof t=="function")return Bp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rp)return 11;if(t===sp)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yc(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Bp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case zs:return ds(n.children,r,s,e);case ip:a=8,r|=8;break;case cf:return t=Yn(12,n,e,r|2),t.elementType=cf,t.lanes=s,t;case uf:return t=Yn(13,n,e,r),t.elementType=uf,t.lanes=s,t;case df:return t=Yn(19,n,e,r),t.elementType=df,t.lanes=s,t;case ux:return tu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lx:a=10;break e;case cx:a=9;break e;case rp:a=11;break e;case sp:a=14;break e;case xr:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Yn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ds(t,e,n,i){return t=Yn(7,t,i,e),t.lanes=n,t}function tu(t,e,n,i){return t=Yn(22,t,i,e),t.elementType=ux,t.lanes=n,t.stateNode={isHidden:!1},t}function af(t,e,n){return t=Yn(6,t,null,e),t.lanes=n,t}function of(t,e,n){return e=Yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hh(0),this.expirationTimes=Hh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function zp(t,e,n,i,r,s,a,o,l){return t=new WM(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bp(s),t}function XM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function t_(t){if(!t)return Nr;t=t._reactInternals;e:{if(vs(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(Sn(n))return tv(t,n,e)}return e}function n_(t,e,n,i,r,s,a,o,l){return t=zp(n,i,!0,t,r,s,a,o,l),t.context=t_(null),n=t.current,i=fn(),r=Rr(n),s=Yi(i,r),s.callback=e??null,Ar(n,s,r),t.current.lanes=r,ko(t,r,i),Mn(t,i),t}function nu(t,e,n,i){var r=e.current,s=fn(),a=Rr(r);return n=t_(n),e.context===null?e.context=n:e.pendingContext=n,e=Yi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ar(r,e,a),t!==null&&(ci(t,r,a,s),pc(t,r,a)),a}function Wc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sx(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vp(t,e){sx(t,e),(t=t.alternate)&&sx(t,e)}function qM(){return null}var i_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gp(t){this._internalRoot=t}iu.prototype.render=Gp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));nu(t,e,null,null)};iu.prototype.unmount=Gp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gs(function(){nu(null,t,null,null)}),e[Ki]=null}};function iu(t){this._internalRoot=t}iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&Fx(t)}};function Hp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ax(){}function YM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Wc(a);s.call(c)}}var a=n_(e,i,t,0,null,!1,!1,"",ax);return t._reactRootContainer=a,t[Ki]=a.current,Co(t.nodeType===8?t.parentNode:t),gs(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Wc(l);o.call(c)}}var l=zp(t,0,!1,null,null,!1,!1,"",ax);return t._reactRootContainer=l,t[Ki]=l.current,Co(t.nodeType===8?t.parentNode:t),gs(function(){nu(e,l,n,i)}),l}function su(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Wc(a);o.call(l)}}nu(e,a,t,r)}else a=YM(n,e,t,r,i);return Wc(a)}Nx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=lo(e.pendingLanes);n!==0&&(lp(e,n|1),Mn(e,Dt()),(nt&6)===0&&(ca=Dt()+500,Ur()))}break;case 13:gs(function(){var i=ji(t,1);if(i!==null){var r=fn();ci(i,t,1,r)}}),Vp(t,1)}};cp=function(t){if(t.tag===13){var e=ji(t,134217728);if(e!==null){var n=fn();ci(e,t,134217728,n)}Vp(t,134217728)}};Lx=function(t){if(t.tag===13){var e=Rr(t),n=ji(t,e);if(n!==null){var i=fn();ci(n,t,e,i)}Vp(t,e)}};Dx=function(){return ot};Ux=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};Sf=function(t,e,n){switch(e){case"input":if(pf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kc(i);if(!r)throw Error(ne(90));hx(i),pf(i,r)}}}break;case"textarea":px(t,n);break;case"select":e=n.value,e!=null&&Zs(t,!!n.multiple,e,!1)}};Sx=Fp;Mx=gs;var $M={usingClientEntryPoint:!1,Events:[Bo,Ws,Kc,_x,yx,Fp]},ro={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KM={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ex(t),t===null?null:t.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||qM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(so=__REACT_DEVTOOLS_GLOBAL_HOOK__,!so.isDisabled&&so.supportsFiber))try{Xc=so.inject(KM),Ei=so}catch{}var so;Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$M;Dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hp(e))throw Error(ne(200));return XM(t,e,null,n)};Dn.createRoot=function(t,e){if(!Hp(t))throw Error(ne(299));var n=!1,i="",r=i_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=zp(t,1,!1,null,null,n,!1,i,r),t[Ki]=e.current,Co(t.nodeType===8?t.parentNode:t),new Gp(e)};Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Ex(e),t=t===null?null:t.stateNode,t};Dn.flushSync=function(t){return gs(t)};Dn.hydrate=function(t,e,n){if(!ru(e))throw Error(ne(200));return su(null,t,e,!0,n)};Dn.hydrateRoot=function(t,e,n){if(!Hp(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=i_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=n_(e,null,t,1,n??null,r,!1,s,a),t[Ki]=e.current,Co(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new iu(e)};Dn.render=function(t,e,n){if(!ru(e))throw Error(ne(200));return su(null,t,e,!1,n)};Dn.unmountComponentAtNode=function(t){if(!ru(t))throw Error(ne(40));return t._reactRootContainer?(gs(function(){su(null,null,t,!1,function(){t._reactRootContainer=null,t[Ki]=null})}),!0):!1};Dn.unstable_batchedUpdates=Fp;Dn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ru(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return su(t,e,n,!1,i)};Dn.version="18.3.1-next-f1338f8080-20240426"});var o_=Gi((F2,a_)=>{"use strict";function s_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s_)}catch(t){console.error(t)}}s_(),a_.exports=r_()});var c_=Gi(Wp=>{"use strict";var l_=o_();Wp.createRoot=l_.createRoot,Wp.hydrateRoot=l_.hydrateRoot;var k2});var uS=Gi(ch=>{"use strict";var XC=pr(),qC=Symbol.for("react.element"),YC=Symbol.for("react.fragment"),$C=Object.prototype.hasOwnProperty,KC=XC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jC={key:!0,ref:!0,__self:!0,__source:!0};function cS(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)$C.call(e,i)&&!jC.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:qC,type:t,key:s,ref:a,props:r,_owner:KC.current}}ch.Fragment=YC;ch.jsx=cS;ch.jsxs=cS});var Il=Gi((IN,dS)=>{"use strict";dS.exports=uS()});var ES=yi(pr(),1),TS=yi(c_(),1);var Pe=yi(pr(),1);var P_=0,Em=1,I_=2;var hl=1,N_=2,Da=3,ar=0,gn=1,Li=2,Di=0,ws=1,Tm=2,Am=3,Cm=4,L_=5;var Hr=100,D_=101,U_=102,F_=103,k_=104,O_=200,B_=201,z_=202,V_=203,Au=204,Cu=205,G_=206,H_=207,W_=208,X_=209,q_=210,Y_=211,$_=212,K_=213,j_=214,Ru=0,Pu=1,Iu=2,Es=3,Nu=4,Lu=5,Du=6,Uu=7,Rm=0,Z_=1,J_=2,mi=0,Pm=1,Im=2,Nm=3,Lm=4,Dm=5,Um=6,Fm=7;var km=300,Kr=301,Ts=302,ld=303,cd=304,fl=306,Fu=1e3,Ri=1001,ku=1002,Yt=1003,Q_=1004;var pl=1005;var Qt=1006,ud=1007;var jr=1008;var En=1009,Om=1010,Bm=1011,Ua=1012,dd=1013,gi=1014,xi=1015,Ui=1016,hd=1017,fd=1018,Fa=1020,zm=35902,Vm=35899,Gm=1021,Hm=1022,Qn=1023,Pi=1026,Zr=1027,Wm=1028,pd=1029,Jr=1030,md=1031;var gd=1033,ml=33776,gl=33777,xl=33778,vl=33779,xd=35840,vd=35841,_d=35842,yd=35843,Sd=36196,Md=37492,bd=37496,wd=37488,Ed=37489,_l=37490,Td=37491,Ad=37808,Cd=37809,Rd=37810,Pd=37811,Id=37812,Nd=37813,Ld=37814,Dd=37815,Ud=37816,Fd=37817,kd=37818,Od=37819,Bd=37820,zd=37821,Vd=36492,Gd=36494,Hd=36495,Wd=36283,Xd=36284,yl=36285,qd=36286;var qo=2300,Ou=2301,Tu=2302,mm=2303,gm=2400,xm=2401,vm=2402;var ey=3200;var Yd=0,ty=1,cr="",kn="srgb",Yo="srgb-linear",$o="linear",at="srgb";var bs=7680;var _m=519,ny=512,iy=513,ry=514,$d=515,sy=516,ay=517,Kd=518,oy=519,ym=35044;var Xm="300 es",pi=2e3,Ea=2001;function jM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ZM(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Ko(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ly(){let t=Ko("canvas");return t.style.display="block",t}var u_={},Ta=null;function qm(...t){let e="THREE."+t.shift();Ta?Ta("log",e,...t):console.log(e,...t)}function cy(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ne(...t){t=cy(t);let e="THREE."+t.shift();if(Ta)Ta("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Le(...t){t=cy(t);let e="THREE."+t.shift();if(Ta)Ta("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Bu(...t){let e=t.join(" ");e in u_||(u_[e]=!0,Ne(...t))}function uy(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var dy={[Ru]:Pu,[Iu]:Du,[Nu]:Uu,[Es]:Lu,[Pu]:Ru,[Du]:Iu,[Uu]:Nu,[Lu]:Es},Ii=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xp=Math.PI/180,zu=180/Math.PI;function Sl(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[t&255]+ln[t>>8&255]+ln[t>>16&255]+ln[t>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[n&63|128]+ln[n>>8&255]+"-"+ln[n>>16&255]+ln[n>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Je(t,e,n){return Math.max(e,Math.min(n,t))}function JM(t,e){return(t%e+e)%e}function qp(t,e,n){return(1-n)*t+n*e}function Vo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function bn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var it=class t{static{t.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ni=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],d=s[a+0],m=s[a+1],y=s[a+2],b=s[a+3];if(f!==b||l!==d||c!==m||h!==y){let x=l*d+c*m+h*y+f*b;x<0&&(d=-d,m=-m,y=-y,b=-b,x=-x);let u=1-o;if(x<.9995){let p=Math.acos(x),v=Math.sin(p);u=Math.sin(u*p)/v,o=Math.sin(o*p)/v,l=l*u+d*o,c=c*u+m*o,h=h*u+y*o,f=f*u+b*o}else{l=l*u+d*o,c=c*u+m*o,h=h*u+y*o,f=f*u+b*o;let p=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=p,c*=p,h*=p,f*=p}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],d=s[a+1],m=s[a+2],y=s[a+3];return e[n]=o*y+h*f+l*m-c*d,e[n+1]=l*y+h*d+c*f-o*m,e[n+2]=c*y+h*m+o*d-l*f,e[n+3]=h*y-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),y=l(s/2);switch(a){case"XYZ":this._x=d*h*f+c*m*y,this._y=c*m*f-d*h*y,this._z=c*h*y+d*m*f,this._w=c*h*f-d*m*y;break;case"YXZ":this._x=d*h*f+c*m*y,this._y=c*m*f-d*h*y,this._z=c*h*y-d*m*f,this._w=c*h*f+d*m*y;break;case"ZXY":this._x=d*h*f-c*m*y,this._y=c*m*f+d*h*y,this._z=c*h*y+d*m*f,this._w=c*h*f-d*m*y;break;case"ZYX":this._x=d*h*f-c*m*y,this._y=c*m*f+d*h*y,this._z=c*h*y-d*m*f,this._w=c*h*f+d*m*y;break;case"YZX":this._x=d*h*f+c*m*y,this._y=c*m*f+d*h*y,this._z=c*h*y-d*m*f,this._w=c*h*f-d*m*y;break;case"XZY":this._x=d*h*f-c*m*y,this._y=c*m*f-d*h*y,this._z=c*h*y+d*m*f,this._w=c*h*f+d*m*y;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],f=n[10],d=i+o+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){let m=2*Math.sqrt(1+i-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class t{static{t.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(d_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(d_.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yp.copy(this).projectOnVector(e),this.sub(Yp)}reflect(e){return this.sub(Yp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yp=new G,d_=new Ni,Oe=class t{static{t.prototype.isMatrix3=!0}constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],m=i[5],y=i[8],b=r[0],x=r[3],u=r[6],p=r[1],v=r[4],M=r[7],C=r[2],E=r[5],R=r[8];return s[0]=a*b+o*p+l*C,s[3]=a*x+o*v+l*E,s[6]=a*u+o*M+l*R,s[1]=c*b+h*p+f*C,s[4]=c*x+h*v+f*E,s[7]=c*u+h*M+f*R,s[2]=d*b+m*p+y*C,s[5]=d*x+m*v+y*E,s[8]=d*u+m*M+y*R,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*s,m=c*s-a*l,y=n*f+i*d+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/y;return e[0]=f*b,e[1]=(r*c-h*i)*b,e[2]=(o*i-r*a)*b,e[3]=d*b,e[4]=(h*n-r*l)*b,e[5]=(r*s-o*n)*b,e[6]=m*b,e[7]=(i*l-c*n)*b,e[8]=(a*n-i*s)*b,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply($p.makeScale(e,n)),this}rotate(e){return this.premultiply($p.makeRotation(-e)),this}translate(e,n){return this.premultiply($p.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},$p=new Oe,h_=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),f_=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QM(){let t={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=sr(r.r),r.g=sr(r.g),r.b=sr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=wa(r.r),r.g=wa(r.g),r.b=wa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===cr?$o:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Bu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Bu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Yo]:{primaries:e,whitePoint:i,transfer:$o,toXYZ:h_,fromXYZ:f_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:i,transfer:at,toXYZ:h_,fromXYZ:f_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),t}var Ke=QM();function sr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function wa(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var ha,Vu=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ha===void 0&&(ha=Ko("canvas")),ha.width=e.width,ha.height=e.height;let r=ha.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ha}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Ko("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=sr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(sr(n[i]/255)*255):n[i]=sr(n[i]);return{data:n,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},eb=0,Aa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=Sl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Kp(r[a].image)):s.push(Kp(r[a]))}else s=Kp(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function Kp(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Vu.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var tb=0,jp=new G,wn=class t extends Ii{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Ri,r=Ri,s=Qt,a=jr,o=Qn,l=En,c=t.DEFAULT_ANISOTROPY,h=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Sl(),this.name="",this.source=new Aa(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jp).x}get height(){return this.source.getSize(jp).y}get depth(){return this.source.getSize(jp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){Ne(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==km)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fu:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case ku:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fu:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case ku:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=km;wn.DEFAULT_ANISOTROPY=1;var Tt=class t{static{t.prototype.isVector4=!0}constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],y=l[9],b=l[2],x=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-b)<.01&&Math.abs(y-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+b)<.1&&Math.abs(y+x)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let v=(c+1)/2,M=(m+1)/2,C=(u+1)/2,E=(h+d)/4,R=(f+b)/4,g=(y+x)/4;return v>M&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=E/i,s=R/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=g/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=g/s),this.set(i,r,s,n),this}let p=Math.sqrt((x-y)*(x-y)+(f-b)*(f-b)+(d-h)*(d-h));return Math.abs(p)<.001&&(p=1),this.x=(x-y)/p,this.y=(f-b)/p,this.z=(d-h)/p,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this.w=Je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this.w=Je(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gu=class extends Ii{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n),this.textures=[];let r={width:e,height:n,depth:i.depth},s=new wn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let n={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let r=Object.assign({},e.textures[n].image);this.textures[n].source=new Aa(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends Gu{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},jo=class extends wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hu=class extends wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rt=class t{static{t.prototype.isMatrix4=!0}constructor(e,n,i,r,s,a,o,l,c,h,f,d,m,y,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,f,d,m,y,b,x)}set(e,n,i,r,s,a,o,l,c,h,f,d,m,y,b,x){let u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=y,u[11]=b,u[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let n=this.elements,i=e.elements,r=1/fa.setFromMatrixColumn(e,0).length(),s=1/fa.setFromMatrixColumn(e,1).length(),a=1/fa.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=a*h,m=a*f,y=o*h,b=o*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=m+y*c,n[5]=d-b*c,n[9]=-o*l,n[2]=b-d*c,n[6]=y+m*c,n[10]=a*l}else if(e.order==="YXZ"){let d=l*h,m=l*f,y=c*h,b=c*f;n[0]=d+b*o,n[4]=y*o-m,n[8]=a*c,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=m*o-y,n[6]=b+d*o,n[10]=a*l}else if(e.order==="ZXY"){let d=l*h,m=l*f,y=c*h,b=c*f;n[0]=d-b*o,n[4]=-a*f,n[8]=y+m*o,n[1]=m+y*o,n[5]=a*h,n[9]=b-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){let d=a*h,m=a*f,y=o*h,b=o*f;n[0]=l*h,n[4]=y*c-m,n[8]=d*c+b,n[1]=l*f,n[5]=b*c+d,n[9]=m*c-y,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){let d=a*l,m=a*c,y=o*l,b=o*c;n[0]=l*h,n[4]=b-d*f,n[8]=y*f+m,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*f+y,n[10]=d-b*f}else if(e.order==="XZY"){let d=a*l,m=a*c,y=o*l,b=o*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=d*f+b,n[5]=a*h,n[9]=m*f-y,n[2]=y*f-m,n[6]=o*h,n[10]=b*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nb,e,ib)}lookAt(e,n,i){let r=this.elements;return Un.subVectors(e,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Fr.crossVectors(i,Un),Fr.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Fr.crossVectors(i,Un)),Fr.normalize(),au.crossVectors(Un,Fr),r[0]=Fr.x,r[4]=au.x,r[8]=Un.x,r[1]=Fr.y,r[5]=au.y,r[9]=Un.y,r[2]=Fr.z,r[6]=au.z,r[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],m=i[13],y=i[2],b=i[6],x=i[10],u=i[14],p=i[3],v=i[7],M=i[11],C=i[15],E=r[0],R=r[4],g=r[8],T=r[12],P=r[1],I=r[5],B=r[9],W=r[13],X=r[2],z=r[6],H=r[10],U=r[14],Y=r[3],Z=r[7],se=r[11],xe=r[15];return s[0]=a*E+o*P+l*X+c*Y,s[4]=a*R+o*I+l*z+c*Z,s[8]=a*g+o*B+l*H+c*se,s[12]=a*T+o*W+l*U+c*xe,s[1]=h*E+f*P+d*X+m*Y,s[5]=h*R+f*I+d*z+m*Z,s[9]=h*g+f*B+d*H+m*se,s[13]=h*T+f*W+d*U+m*xe,s[2]=y*E+b*P+x*X+u*Y,s[6]=y*R+b*I+x*z+u*Z,s[10]=y*g+b*B+x*H+u*se,s[14]=y*T+b*W+x*U+u*xe,s[3]=p*E+v*P+M*X+C*Y,s[7]=p*R+v*I+M*z+C*Z,s[11]=p*g+v*B+M*H+C*se,s[15]=p*T+v*W+M*U+C*xe,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],m=e[14],y=e[3],b=e[7],x=e[11],u=e[15],p=l*m-c*d,v=o*m-c*f,M=o*d-l*f,C=a*m-c*h,E=a*d-l*h,R=a*f-o*h;return n*(b*p-x*v+u*M)-i*(y*p-x*C+u*E)+r*(y*v-b*C+u*R)-s*(y*M-b*E+x*R)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],m=e[11],y=e[12],b=e[13],x=e[14],u=e[15],p=n*o-i*a,v=n*l-r*a,M=n*c-s*a,C=i*l-r*o,E=i*c-s*o,R=r*c-s*l,g=h*b-f*y,T=h*x-d*y,P=h*u-m*y,I=f*x-d*b,B=f*u-m*b,W=d*u-m*x,X=p*W-v*B+M*I+C*P-E*T+R*g;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/X;return e[0]=(o*W-l*B+c*I)*z,e[1]=(r*B-i*W-s*I)*z,e[2]=(b*R-x*E+u*C)*z,e[3]=(d*E-f*R-m*C)*z,e[4]=(l*P-a*W-c*T)*z,e[5]=(n*W-r*P+s*T)*z,e[6]=(x*M-y*R-u*v)*z,e[7]=(h*R-d*M+m*v)*z,e[8]=(a*B-o*P+c*g)*z,e[9]=(i*P-n*B-s*g)*z,e[10]=(y*E-b*M+u*p)*z,e[11]=(f*M-h*E-m*p)*z,e[12]=(o*T-a*I-l*g)*z,e[13]=(n*I-i*T+r*g)*z,e[14]=(b*v-y*C-x*p)*z,e[15]=(h*C-f*v+d*p)*z,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,f=o+o,d=s*c,m=s*h,y=s*f,b=a*h,x=a*f,u=o*f,p=l*c,v=l*h,M=l*f,C=i.x,E=i.y,R=i.z;return r[0]=(1-(b+u))*C,r[1]=(m+M)*C,r[2]=(y-v)*C,r[3]=0,r[4]=(m-M)*E,r[5]=(1-(d+u))*E,r[6]=(x+p)*E,r[7]=0,r[8]=(y+v)*R,r[9]=(x-p)*R,r[10]=(1-(d+b))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=fa.set(r[0],r[1],r[2]).length(),o=fa.set(r[4],r[5],r[6]).length(),l=fa.set(r[8],r[9],r[10]).length();s<0&&(a=-a),di.copy(this);let c=1/a,h=1/o,f=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=f,di.elements[9]*=f,di.elements[10]*=f,n.setFromRotationMatrix(di),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=pi,l=!1){let c=this.elements,h=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r),y,b;if(l)y=s/(a-s),b=a*s/(a-s);else if(o===pi)y=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===Ea)y=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=pi,l=!1){let c=this.elements,h=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r),y,b;if(l)y=1/(a-s),b=a/(a-s);else if(o===pi)y=-2/(a-s),b=-(a+s)/(a-s);else if(o===Ea)y=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=y,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},fa=new G,di=new Rt,nb=new G(0,0,0),ib=new G(1,1,1),Fr=new G,au=new G,Un=new G,p_=new Rt,m_=new Ni,or=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return p_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(p_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return m_.setFromEuler(this),this.setFromQuaternion(m_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};or.DEFAULT_ORDER="XYZ";var Zo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},rb=0,g_=new G,pa=new Ni,Qi=new Rt,ou=new G,Go=new G,sb=new G,ab=new Ni,x_=new G(1,0,0),v_=new G(0,1,0),__=new G(0,0,1),y_={type:"added"},ob={type:"removed"},ma={type:"childadded",child:null},Zp={type:"childremoved",child:null},zn=class t extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=Sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new G,n=new or,i=new Ni,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Oe}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return pa.setFromAxisAngle(e,n),this.quaternion.multiply(pa),this}rotateOnWorldAxis(e,n){return pa.setFromAxisAngle(e,n),this.quaternion.premultiply(pa),this}rotateX(e){return this.rotateOnAxis(x_,e)}rotateY(e){return this.rotateOnAxis(v_,e)}rotateZ(e){return this.rotateOnAxis(__,e)}translateOnAxis(e,n){return g_.copy(e).applyQuaternion(this.quaternion),this.position.add(g_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(x_,e)}translateY(e){return this.translateOnAxis(v_,e)}translateZ(e){return this.translateOnAxis(__,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ou.copy(e):ou.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Go,ou,this.up):Qi.lookAt(ou,Go,this.up),this.quaternion.setFromRotationMatrix(Qi),r&&(Qi.extractRotation(r.matrixWorld),pa.setFromRotationMatrix(Qi),this.quaternion.premultiply(pa.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(y_),ma.child=e,this.dispatchEvent(ma),ma.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ob),Zp.child=e,this.dispatchEvent(Zp),Zp.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(y_),ma.child=e,this.dispatchEvent(ma),ma.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,sb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,ab,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};zn.DEFAULT_UP=new G(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rr=class extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}},lb={type:"move"},Ca=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let x=n.getJointPose(b,i),u=this._getHandJoint(c,b);x!==null&&(u.matrix.fromArray(x.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=x.radius),u.visible=x!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,y=.005;c.inputState.pinching&&d>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new rr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},hy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},lu={h:0,s:0,l:0};function Jp(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Qe=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=JM(e,1),n=Je(n,0,1),i=Je(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Jp(a,s,e+1/3),this.g=Jp(a,s,e),this.b=Jp(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,n=kn){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){let i=hy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return Ke.workingToColorSpace(cn.copy(this),e),Math.round(Je(cn.r*255,0,255))*65536+Math.round(Je(cn.g*255,0,255))*256+Math.round(Je(cn.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.workingToColorSpace(cn.copy(this),n);let i=cn.r,r=cn.g,s=cn.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Ke.workingColorSpace){return Ke.workingToColorSpace(cn.copy(this),n),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=kn){Ke.workingToColorSpace(cn.copy(this),e);let n=cn.r,i=cn.g,r=cn.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+n,kr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(kr),e.getHSL(lu);let i=qp(kr.h,lu.h,n),r=qp(kr.s,lu.s,n),s=qp(kr.l,lu.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Qe;Qe.NAMES=hy;var Jo=class extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentIntensity=1,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},hi=new G,er=new G,Qp=new G,tr=new G,ga=new G,xa=new G,S_=new G,em=new G,tm=new G,nm=new G,im=new Tt,rm=new Tt,sm=new Tt,Gr=class t{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),hi.subVectors(e,n),r.cross(hi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){hi.subVectors(r,n),er.subVectors(i,n),Qp.subVectors(e,n);let a=hi.dot(hi),o=hi.dot(er),l=hi.dot(Qp),c=er.dot(er),h=er.dot(Qp),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;let d=1/f,m=(c*l-o*h)*d,y=(a*h-o*l)*d;return s.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,tr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,tr.x),l.addScaledVector(a,tr.y),l.addScaledVector(o,tr.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return im.setScalar(0),rm.setScalar(0),sm.setScalar(0),im.fromBufferAttribute(e,n),rm.fromBufferAttribute(e,i),sm.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(im,s.x),a.addScaledVector(rm,s.y),a.addScaledVector(sm,s.z),a}static isFrontFacing(e,n,i,r){return hi.subVectors(i,n),er.subVectors(e,n),hi.cross(er).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),hi.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,a,o;ga.subVectors(r,i),xa.subVectors(s,i),em.subVectors(e,i);let l=ga.dot(em),c=xa.dot(em);if(l<=0&&c<=0)return n.copy(i);tm.subVectors(e,r);let h=ga.dot(tm),f=xa.dot(tm);if(h>=0&&f<=h)return n.copy(r);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(ga,a);nm.subVectors(e,s);let m=ga.dot(nm),y=xa.dot(nm);if(y>=0&&m<=y)return n.copy(s);let b=m*c-l*y;if(b<=0&&c>=0&&y<=0)return o=c/(c-y),n.copy(i).addScaledVector(xa,o);let x=h*y-m*f;if(x<=0&&f-h>=0&&m-y>=0)return S_.subVectors(s,r),o=(f-h)/(f-h+(m-y)),n.copy(r).addScaledVector(S_,o);let u=1/(x+b+d);return a=b*u,o=d*u,n.copy(i).addScaledVector(ga,a).addScaledVector(xa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wr=class{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fi):fi.fromBufferAttribute(s,a),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cu.copy(i.boundingBox)),cu.applyMatrix4(e.matrixWorld),this.union(cu)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),uu.subVectors(this.max,Ho),va.subVectors(e.a,Ho),_a.subVectors(e.b,Ho),ya.subVectors(e.c,Ho),Or.subVectors(_a,va),Br.subVectors(ya,_a),_s.subVectors(va,ya);let n=[0,-Or.z,Or.y,0,-Br.z,Br.y,0,-_s.z,_s.y,Or.z,0,-Or.x,Br.z,0,-Br.x,_s.z,0,-_s.x,-Or.y,Or.x,0,-Br.y,Br.x,0,-_s.y,_s.x,0];return!am(n,va,_a,ya,uu)||(n=[1,0,0,0,1,0,0,0,1],!am(n,va,_a,ya,uu))?!1:(du.crossVectors(Or,Br),n=[du.x,du.y,du.z],am(n,va,_a,ya,uu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},nr=[new G,new G,new G,new G,new G,new G,new G,new G],fi=new G,cu=new Wr,va=new G,_a=new G,ya=new G,Or=new G,Br=new G,_s=new G,Ho=new G,uu=new G,du=new G,ys=new G;function am(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ys.fromArray(t,s);let o=r.x*Math.abs(ys.x)+r.y*Math.abs(ys.y)+r.z*Math.abs(ys.z),l=e.dot(ys),c=n.dot(ys),h=i.dot(ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var kt=new G,hu=new it,cb=0,On=class extends Ii{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ym,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)hu.fromBufferAttribute(this,n),hu.applyMatrix3(e),this.setXY(n,hu.x,hu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Vo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=bn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vo(n,this.array)),n}setX(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vo(n,this.array)),n}setY(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vo(n,this.array)),n}setW(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array),r=bn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array),r=bn(r,this.array),s=bn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ym&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Qo=class extends On{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var el=class extends On{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var qt=class extends On{constructor(e,n,i){super(new Float32Array(e),n,i)}},ub=new Wr,Wo=new G,om=new G,Ra=class{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):ub.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);let n=Wo.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Wo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(om.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(om)),this.expandByPoint(Wo.copy(e.center).sub(om))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},db=0,Zn=new Rt,lm=new zn,Sa=new G,Fn=new Wr,Xo=new Wr,Xt=new G,Jn=class t extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=Sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jM(e)?el:Qo)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,i){return Zn.makeTranslation(e,n,i),this.applyMatrix4(Zn),this}scale(e,n,i){return Zn.makeScale(e,n,i),this.applyMatrix4(Zn),this}lookAt(e){return lm.lookAt(e),lm.updateMatrix(),this.applyMatrix4(lm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sa).negate(),this.translate(Sa.x,Sa.y,Sa.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(i,3))}else{let i=Math.min(e.length,n.count);for(let r=0;r<i;r++){let s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ra);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){let o=n[s];Xo.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(Fn.min,Xo.min),Fn.expandByPoint(Xt),Xt.addVectors(Fn.max,Xo.max),Fn.expandByPoint(Xt)):(Fn.expandByPoint(Xo.min),Fn.expandByPoint(Xo.max))}Fn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(n)for(let s=0,a=n.length;s<a;s++){let o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xt.fromBufferAttribute(o,c),l&&(Sa.fromBufferAttribute(e,c),Xt.add(Sa)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let g=0;g<i.count;g++)o[g]=new G,l[g]=new G;let c=new G,h=new G,f=new G,d=new it,m=new it,y=new it,b=new G,x=new G;function u(g,T,P){c.fromBufferAttribute(i,g),h.fromBufferAttribute(i,T),f.fromBufferAttribute(i,P),d.fromBufferAttribute(s,g),m.fromBufferAttribute(s,T),y.fromBufferAttribute(s,P),h.sub(c),f.sub(c),m.sub(d),y.sub(d);let I=1/(m.x*y.y-y.x*m.y);isFinite(I)&&(b.copy(h).multiplyScalar(y.y).addScaledVector(f,-m.y).multiplyScalar(I),x.copy(f).multiplyScalar(m.x).addScaledVector(h,-y.x).multiplyScalar(I),o[g].add(b),o[T].add(b),o[P].add(b),l[g].add(x),l[T].add(x),l[P].add(x))}let p=this.groups;p.length===0&&(p=[{start:0,count:e.count}]);for(let g=0,T=p.length;g<T;++g){let P=p[g],I=P.start,B=P.count;for(let W=I,X=I+B;W<X;W+=3)u(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let v=new G,M=new G,C=new G,E=new G;function R(g){C.fromBufferAttribute(r,g),E.copy(C);let T=o[g];v.copy(T),v.sub(C.multiplyScalar(C.dot(T))).normalize(),M.crossVectors(E,T);let I=M.dot(l[g])<0?-1:1;a.setXYZW(g,v.x,v.y,v.z,I)}for(let g=0,T=p.length;g<T;++g){let P=p[g],I=P.start,B=P.count;for(let W=I,X=I+B;W<X;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,h=new G,f=new G;if(e)for(let d=0,m=e.count;d<m;d+=3){let y=e.getX(d+0),b=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,b),a.fromBufferAttribute(n,x),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,x),o.add(h),l.add(h),c.add(h),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),m=0,y=0;for(let b=0,x=l.length;b<x;b++){o.isInterleavedBufferAttribute?m=l[b]*o.data.stride+o.offset:m=l[b]*h;for(let u=0;u<h;u++)d[y++]=c[m++]}return new On(d,h,f)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,i);n.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(n))}let s=e.morphAttributes;for(let c in s){let h=[],f=s[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var hb=0,Xr=class extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=Sl(),this.name="",this.type="Material",this.blending=ws,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Au,this.blendDst=Cu,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){Ne(`Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){Ne(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Au&&(i.blendSrc=this.blendSrc),this.blendDst!==Cu&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_m&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ir=new G,cm=new G,fu=new G,zr=new G,um=new G,pu=new G,dm=new G,Wu=class{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=ir.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,n),ir.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){cm.copy(e).add(n).multiplyScalar(.5),fu.copy(n).sub(e).normalize(),zr.copy(this.origin).sub(cm);let s=e.distanceTo(n)*.5,a=-this.direction.dot(fu),o=zr.dot(this.direction),l=-zr.dot(fu),c=zr.lengthSq(),h=Math.abs(1-a*a),f,d,m,y;if(h>0)if(f=a*l-o,d=a*o-l,y=s*h,f>=0)if(d>=-y)if(d<=y){let b=1/h;f*=b,d*=b,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-y?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=y?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(cm).addScaledVector(fu,d),m}intersectSphere(e,n){ir.subVectors(e.center,this.origin);let i=ir.dot(this.direction),r=ir.dot(ir)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,n,i,r,s){um.subVectors(n,e),pu.subVectors(i,e),dm.crossVectors(um,pu);let a=this.direction.dot(dm),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zr.subVectors(this.origin,e);let l=o*this.direction.dot(pu.crossVectors(zr,pu));if(l<0)return null;let c=o*this.direction.dot(um.cross(zr));if(c<0||l+c>a)return null;let h=-o*zr.dot(dm);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tl=class extends Xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=Rm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},M_=new Rt,Ss=new Wu,mu=new Ra,b_=new G,gu=new G,xu=new G,vu=new G,hm=new G,_u=new G,w_=new G,yu=new G,mn=class extends zn{constructor(e=new Jn,n=new tl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){_u.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],f=s[l];h!==0&&(hm.fromBufferAttribute(f,e),a?_u.addScaledVector(hm,h):_u.addScaledVector(hm.sub(n),h))}n.add(_u)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mu.copy(i.boundingSphere),mu.applyMatrix4(s),Ss.copy(e.ray).recast(e.near),!(mu.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(mu,b_)===null||Ss.origin.distanceToSquared(b_)>(e.far-e.near)**2))&&(M_.copy(s).invert(),Ss.copy(e.ray).applyMatrix4(M_),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ss)))}_computeIntersections(e,n,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,b=d.length;y<b;y++){let x=d[y],u=a[x.materialIndex],p=Math.max(x.start,m.start),v=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let M=p,C=v;M<C;M+=3){let E=o.getX(M),R=o.getX(M+1),g=o.getX(M+2);r=Su(this,u,e,i,c,h,f,E,R,g),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{let y=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let x=y,u=b;x<u;x+=3){let p=o.getX(x),v=o.getX(x+1),M=o.getX(x+2);r=Su(this,a,e,i,c,h,f,p,v,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,b=d.length;y<b;y++){let x=d[y],u=a[x.materialIndex],p=Math.max(x.start,m.start),v=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let M=p,C=v;M<C;M+=3){let E=M,R=M+1,g=M+2;r=Su(this,u,e,i,c,h,f,E,R,g),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{let y=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let x=y,u=b;x<u;x+=3){let p=x,v=x+1,M=x+2;r=Su(this,a,e,i,c,h,f,p,v,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}};function fb(t,e,n,i,r,s,a,o){let l;if(e.side===gn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ar,o),l===null)return null;yu.copy(o),yu.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(yu);return c<n.near||c>n.far?null:{distance:c,point:yu.clone(),object:t}}function Su(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,gu),t.getVertexPosition(l,xu),t.getVertexPosition(c,vu);let h=fb(t,e,n,i,gu,xu,vu,w_);if(h){let f=new G;Gr.getBarycoord(w_,gu,xu,vu,f),r&&(h.uv=Gr.getInterpolatedAttribute(r,o,l,c,f,new it)),s&&(h.uv1=Gr.getInterpolatedAttribute(s,o,l,c,f,new it)),a&&(h.normal=Gr.getInterpolatedAttribute(a,o,l,c,f,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new G,materialIndex:0};Gr.getNormal(gu,xu,vu,d.normal),h.face=d,h.barycoord=f}return h}var Xu=class extends wn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Yt,h=Yt,f,d){super(null,a,o,l,c,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fm=new G,pb=new G,mb=new Oe,Ci=class{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=fm.subVectors(i,n).cross(pb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let r=e.delta(fm),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||mb.getNormalMatrix(e),r=this.coplanarPoint(fm).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ms=new Ra,gb=new it(.5,.5),Mu=new G,Pa=class{constructor(e=new Ci,n=new Ci,i=new Ci,r=new Ci,s=new Ci,a=new Ci){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],d=s[6],m=s[7],y=s[8],b=s[9],x=s[10],u=s[11],p=s[12],v=s[13],M=s[14],C=s[15];if(r[0].setComponents(c-a,m-h,u-y,C-p).normalize(),r[1].setComponents(c+a,m+h,u+y,C+p).normalize(),r[2].setComponents(c+o,m+f,u+b,C+v).normalize(),r[3].setComponents(c-o,m-f,u-b,C-v).normalize(),i)r[4].setComponents(l,d,x,M).normalize(),r[5].setComponents(c-l,m-d,u-x,C-M).normalize();else if(r[4].setComponents(c-l,m-d,u-x,C-M).normalize(),n===pi)r[5].setComponents(c+l,m+d,u+x,C+M).normalize();else if(n===Ea)r[5].setComponents(l,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);let n=gb.distanceTo(e.center);return Ms.radius=.7071067811865476+n,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(Mu.x=r.normal.x>0?e.max.x:e.min.x,Mu.y=r.normal.y>0?e.max.y:e.min.y,Mu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mu)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var nl=class extends wn{constructor(e=[],n=Kr,i,r,s,a,o,l,c,h){super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var lr=class extends wn{constructor(e,n,i=gi,r,s,a,o=Yt,l=Yt,c,h=Pi,f=1){if(h!==Pi&&h!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:n,depth:f};super(d,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Aa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},qu=class extends lr{constructor(e,n=gi,i=Kr,r,s,a=Yt,o=Yt,l,c=Pi){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},il=class extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ia=class t extends Jn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,m=0;y("z","y","x",-1,-1,i,n,e,a,s,0),y("z","y","x",1,-1,i,n,-e,a,s,1),y("x","z","y",1,1,e,i,n,r,a,2),y("x","z","y",1,-1,e,i,-n,r,a,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(f,2));function y(b,x,u,p,v,M,C,E,R,g,T){let P=M/R,I=C/g,B=M/2,W=C/2,X=E/2,z=R+1,H=g+1,U=0,Y=0,Z=new G;for(let se=0;se<H;se++){let xe=se*I-W;for(let be=0;be<z;be++){let Ze=be*P-B;Z[b]=Ze*p,Z[x]=xe*v,Z[u]=X,c.push(Z.x,Z.y,Z.z),Z[b]=0,Z[x]=0,Z[u]=E>0?1:-1,h.push(Z.x,Z.y,Z.z),f.push(be/R),f.push(1-se/g),U+=1}}for(let se=0;se<g;se++)for(let xe=0;xe<R;xe++){let be=d+xe+z*se,Ze=d+xe+z*(se+1),rt=d+(xe+1)+z*(se+1),ze=d+(xe+1)+z*se;l.push(be,Ze,ze),l.push(Ze,rt,ze),Y+=6}o.addGroup(m,Y,T),m+=Y,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},rl=class t extends Jn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=n/2,f=Math.PI/2*e,d=n,m=2*f+d,y=i*2+s,b=r+1,x=new G,u=new G;for(let p=0;p<=y;p++){let v=0,M=0,C=0,E=0;if(p<=i){let T=p/i,P=T*Math.PI/2;M=-h-e*Math.cos(P),C=e*Math.sin(P),E=-e*Math.cos(P),v=T*f}else if(p<=i+s){let T=(p-i)/s;M=-h+T*n,C=e,E=0,v=f+T*d}else{let T=(p-i-s)/i,P=T*Math.PI/2;M=h+e*Math.sin(P),C=e*Math.cos(P),E=e*Math.sin(P),v=f+d+T*f}let R=Math.max(0,Math.min(1,v/m)),g=0;p===0?g=.5/r:p===y&&(g=-.5/r);for(let T=0;T<=r;T++){let P=T/r,I=P*Math.PI*2,B=Math.sin(I),W=Math.cos(I);u.x=-C*W,u.y=M,u.z=C*B,o.push(u.x,u.y,u.z),x.set(-C*W,E,C*B),x.normalize(),l.push(x.x,x.y,x.z),c.push(P+g,R)}if(p>0){let T=(p-1)*b;for(let P=0;P<r;P++){let I=T+P,B=T+P+1,W=p*b+P,X=p*b+P+1;a.push(I,B,W),a.push(B,X,W)}}}this.setIndex(a),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var sl=class t extends Jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,d=n/l,m=[],y=[],b=[],x=[];for(let u=0;u<h;u++){let p=u*d-a;for(let v=0;v<c;v++){let M=v*f-s;y.push(M,-p,0),b.push(0,0,1),x.push(v/o),x.push(1-u/l)}}for(let u=0;u<l;u++)for(let p=0;p<o;p++){let v=p+c*u,M=p+c*(u+1),C=p+1+c*(u+1),E=p+1+c*u;m.push(v,M,E),m.push(M,C,E)}this.setIndex(m),this.setAttribute("position",new qt(y,3)),this.setAttribute("normal",new qt(b,3)),this.setAttribute("uv",new qt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var al=class t extends Jn{constructor(e=1,n=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],f=new G,d=new G,m=new G,y=new G,b=new G,x=new G,u=new G;for(let v=0;v<=i;++v){let M=v/i*s*Math.PI*2;p(M,s,a,e,m),p(M+.01,s,a,e,y),x.subVectors(y,m),u.addVectors(y,m),b.crossVectors(x,u),u.crossVectors(b,x),b.normalize(),u.normalize();for(let C=0;C<=r;++C){let E=C/r*Math.PI*2,R=-n*Math.cos(E),g=n*Math.sin(E);f.x=m.x+(R*u.x+g*b.x),f.y=m.y+(R*u.y+g*b.y),f.z=m.z+(R*u.z+g*b.z),l.push(f.x,f.y,f.z),d.subVectors(f,m).normalize(),c.push(d.x,d.y,d.z),h.push(v/i),h.push(C/r)}}for(let v=1;v<=i;v++)for(let M=1;M<=r;M++){let C=(r+1)*(v-1)+(M-1),E=(r+1)*v+(M-1),R=(r+1)*v+M,g=(r+1)*(v-1)+M;o.push(C,E,g),o.push(E,R,g)}this.setIndex(o),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(h,2));function p(v,M,C,E,R){let g=Math.cos(v),T=Math.sin(v),P=C/M*v,I=Math.cos(P);R.x=E*(2+I)*.5*g,R.y=E*(2+I)*T*.5,R.z=E*Math.sin(P)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}};function As(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];if(E_(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(E_(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function un(t){let e={};for(let n=0;n<t.length;n++){let i=As(t[n]);for(let r in i)e[r]=i[r]}return e}function E_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function xb(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ym(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var fy={clone:As,merge:un},vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_b=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vn=class extends Xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vb,this.fragmentShader=_b,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=xb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Yu=class extends Vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Na=class extends Xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yd,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var $u=class extends Xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ey,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ku=class extends Xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function bu(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}var qr=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=n[++i],e<r)break t}a=n.length;break n}if(!(e>=s)){let o=n[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<n[o]?a=o:i=o+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)n[a]=i[s+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ju=class extends qr{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gm,endingEnd:gm}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case xm:s=e,o=2*n-i;break;case vm:s=r.length-2,o=n+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case xm:a=e,l=2*i-n;break;case vm:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,y=(i-n)/(r-n),b=y*y,x=b*y,u=-d*x+2*d*b-d*y,p=(1+d)*x+(-1.5-2*d)*b+(-.5+d)*y+1,v=(-1-m)*x+(1.5+m)*b+.5*y,M=m*x-m*b;for(let C=0;C!==o;++C)s[C]=u*a[h+C]+p*a[c+C]+v*a[l+C]+M*a[f+C];return s}},Zu=class extends qr{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-n)/(r-n),f=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*f+a[l+d]*h;return s}},Ju=class extends qr{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Qu=class extends qr{interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,f=h.inTangents,d=h.outTangents;if(!f||!d){let b=(i-n)/(r-n),x=1-b;for(let u=0;u!==o;++u)s[u]=a[c+u]*x+a[l+u]*b;return s}let m=o*2,y=e-1;for(let b=0;b!==o;++b){let x=a[c+b],u=a[l+b],p=y*m+b*2,v=d[p],M=d[p+1],C=e*m+b*2,E=f[C],R=f[C+1],g=(i-n)/(r-n),T,P,I,B,W;for(let X=0;X<8;X++){T=g*g,P=T*g,I=1-g,B=I*I,W=B*I;let H=W*n+3*B*g*v+3*I*T*E+P*r-i;if(Math.abs(H)<1e-10)break;let U=3*B*(v-n)+6*I*g*(E-v)+3*T*(r-E);if(Math.abs(U)<1e-10)break;g=g-H/U,g=Math.max(0,Math.min(1,g))}s[b]=W*x+3*B*g*M+3*I*T*R+P*u}return s}},Gn=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bu(n,this.TimeBufferType),this.values=bu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:bu(e.times,Array),values:bu(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ju(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ju(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new Qu(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.settings=this.settings),n}setInterpolation(e){let n;switch(e){case qo:n=this.InterpolantFactoryMethodDiscrete;break;case Ou:n=this.InterpolantFactoryMethodLinear;break;case Tu:n=this.InterpolantFactoryMethodSmooth;break;case mm:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ne("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qo;case this.InterpolantFactoryMethodLinear:return Ou;case this.InterpolantFactoryMethodSmooth:return Tu;case this.InterpolantFactoryMethodBezier:return mm}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>n;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Le("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Le("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&ZM(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){Le("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Tu,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{let f=o*i,d=f-i,m=f+i;for(let y=0;y!==i;++y){let b=n[f+y];if(b!==n[d+y]||b!==n[m+y]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,d=a*i;for(let m=0;m!==i;++m)n[d+m]=n[f+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)n[l+c]=n[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Ou;var Yr=class extends Gn{constructor(e,n,i){super(e,n,i)}};Yr.prototype.ValueTypeName="bool";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=qo;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var ed=class extends Gn{constructor(e,n,i,r){super(e,n,i,r)}};ed.prototype.ValueTypeName="color";var td=class extends Gn{constructor(e,n,i,r){super(e,n,i,r)}};td.prototype.ValueTypeName="number";var nd=class extends qr{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-n)/(r-n),c=e*o;for(let h=c+o;c!==h;c+=4)Ni.slerpFlat(s,0,a,c-o,a,c,l);return s}},ol=class extends Gn{constructor(e,n,i,r){super(e,n,i,r)}InterpolantFactoryMethodLinear(e){return new nd(this.times,this.values,this.getValueSize(),e)}};ol.prototype.ValueTypeName="quaternion";ol.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends Gn{constructor(e,n,i){super(e,n,i)}};$r.prototype.ValueTypeName="string";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=qo;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;var id=class extends Gn{constructor(e,n,i,r){super(e,n,i,r)}};id.prototype.ValueTypeName="vector";var rd=class{constructor(e,n,i){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let m=c[f],y=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},py=new rd,sd=class{constructor(e){this.manager=e!==void 0?e:py,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};sd.DEFAULT_MATERIAL_NAME="__DEFAULT";var ll=class extends zn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}};var pm=new Rt,T_=new G,A_=new G,Sm=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pa,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;T_.setFromMatrixPosition(e.matrixWorld),n.position.copy(T_),A_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(A_),n.updateMatrixWorld(),pm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pm,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Ea||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wu=new G,Eu=new Ni,Ai=new G,cl=class extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wu,Eu,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wu,Eu,Ai.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(wu,Eu,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wu,Eu,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vr=new G,C_=new it,R_=new it,Jt=class extends cl{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=zu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zu*2*Math.atan(Math.tan(Xp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,n){return this.getViewBounds(e,C_,R_),n.subVectors(R_,C_)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Xp*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Mm=class extends Sm{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0}},La=class extends ll{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Mm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},ul=class extends cl{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var dl=class extends ll{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ma=-90,ba=1,ad=class extends zn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Jt(Ma,ba,e,n);r.layers=this.layers,this.add(r);let s=new Jt(Ma,ba,e,n);s.layers=this.layers,this.add(s);let a=new Jt(Ma,ba,e,n);a.layers=this.layers,this.add(a);let o=new Jt(Ma,ba,e,n);o.layers=this.layers,this.add(o);let l=new Jt(Ma,ba,e,n);l.layers=this.layers,this.add(l);let c=new Jt(Ma,ba,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(let c of n)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(f,d,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},od=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var $m="\\[\\]\\.:\\/",yb=new RegExp("["+$m+"]","g"),Km="[^"+$m+"]",Sb="[^"+$m.replace("\\.","")+"]",Mb=/((?:WC+[\/:])*)/.source.replace("WC",Km),bb=/(WCOD+)?/.source.replace("WCOD",Sb),wb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Km),Eb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Km),Tb=new RegExp("^"+Mb+bb+wb+Eb+"$"),Ab=["material","materials","bones","map"],bm=class{constructor(e,n,i){let r=i||yt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},yt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yb,"")}static parseTrackName(e){let n=Tb.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Ab.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=n.nodeName;Le("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=bm;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var B2=new Float32Array(1);var wm=class t{static{t.prototype.isMatrix2=!0}constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){let s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};function jm(t,e,n,i){let r=Cb(i);switch(n){case Gm:return t*e;case Wm:return t*e/r.components*r.byteLength;case pd:return t*e/r.components*r.byteLength;case Jr:return t*e*2/r.components*r.byteLength;case md:return t*e*2/r.components*r.byteLength;case Hm:return t*e*3/r.components*r.byteLength;case Qn:return t*e*4/r.components*r.byteLength;case gd:return t*e*4/r.components*r.byteLength;case ml:case gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xl:case vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vd:case yd:return Math.max(t,16)*Math.max(e,8)/4;case xd:case _d:return Math.max(t,8)*Math.max(e,8)/2;case Sd:case Md:case wd:case Ed:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bd:case _l:case Td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Id:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case kd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Od:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case zd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Vd:case Gd:case Hd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Wd:case Xd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case yl:case qd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Cb(t){switch(t){case En:case Om:return{byteLength:1,components:1};case Ua:case Bm:case Ui:return{byteLength:2,components:1};case hd:case fd:return{byteLength:2,components:4};case gi:case dd:case xi:return{byteLength:4,components:1};case zm:case Vm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function ky(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Pb(t){let e=new WeakMap;function n(o,l){let c=o.array,h=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,h);else{f.sort((m,y)=>m.start-y.start);let d=0;for(let m=1;m<f.length;m++){let y=f[d],b=f[m];b.start<=y.start+y.count+1?y.count=Math.max(y.count,b.start+b.count-y.start):(++d,f[d]=b)}f.length=d+1;for(let m=0,y=f.length;m<y;m++){let b=f[m];t.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Ib=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nb=`#ifdef USE_ALPHAHASH
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
#endif`,Lb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ub=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kb=`#ifdef USE_AOMAP
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
#endif`,Ob=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bb=`#ifdef USE_BATCHING
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
#endif`,zb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wb=`#ifdef USE_IRIDESCENCE
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
#endif`,Xb=`#ifdef USE_BUMPMAP
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
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ew=`#define PI 3.141592653589793
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
} // validated`,tw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nw=`vec3 transformedNormal = objectNormal;
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
#endif`,iw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ow="gl_FragColor = linearToOutputTexel( gl_FragColor );",lw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cw=`#ifdef USE_ENVMAP
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
#endif`,uw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dw=`#ifdef USE_ENVMAP
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
#endif`,hw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fw=`#ifdef USE_ENVMAP
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
#endif`,pw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vw=`#ifdef USE_GRADIENTMAP
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
}`,_w=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bw=`#ifdef USE_ENVMAP
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
#endif`,ww=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ew=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Aw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cw=`PhysicalMaterial material;
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
#endif`,Rw=`uniform sampler2D dfgLUT;
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
}`,Pw=`
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
#endif`,Iw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Dw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ow=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vw=`#if defined( USE_POINTS_UV )
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
#endif`,Gw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ww=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yw=`#ifdef USE_MORPHTARGETS
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
#endif`,$w=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eE=`#ifdef USE_NORMALMAP
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
#endif`,tE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gE=`float getShadowMask() {
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
}`,xE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vE=`#ifdef USE_SKINNING
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
#endif`,_E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yE=`#ifdef USE_SKINNING
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
#endif`,SE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ME=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EE=`#ifdef USE_TRANSMISSION
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
#endif`,TE=`#ifdef USE_TRANSMISSION
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
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,IE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NE=`uniform sampler2D t2D;
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`#include <common>
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
}`,OE=`#if DEPTH_PACKING == 3200
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
}`,BE=`#define DISTANCE
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
}`,zE=`#define DISTANCE
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
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`uniform float scale;
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
}`,WE=`uniform vec3 diffuse;
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
}`,XE=`#include <common>
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
}`,qE=`uniform vec3 diffuse;
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
}`,YE=`#define LAMBERT
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
}`,$E=`#define LAMBERT
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
}`,KE=`#define MATCAP
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
}`,jE=`#define MATCAP
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
}`,ZE=`#define NORMAL
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
}`,JE=`#define NORMAL
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
}`,QE=`#define PHONG
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
}`,eT=`#define PHONG
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
}`,tT=`#define STANDARD
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
}`,nT=`#define STANDARD
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
}`,iT=`#define TOON
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
}`,rT=`#define TOON
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
}`,sT=`uniform float size;
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
}`,aT=`uniform vec3 diffuse;
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
}`,oT=`#include <common>
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
}`,lT=`uniform vec3 color;
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
}`,cT=`uniform float rotation;
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
}`,uT=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Ib,alphahash_pars_fragment:Nb,alphamap_fragment:Lb,alphamap_pars_fragment:Db,alphatest_fragment:Ub,alphatest_pars_fragment:Fb,aomap_fragment:kb,aomap_pars_fragment:Ob,batching_pars_vertex:Bb,batching_vertex:zb,begin_vertex:Vb,beginnormal_vertex:Gb,bsdfs:Hb,iridescence_fragment:Wb,bumpmap_pars_fragment:Xb,clipping_planes_fragment:qb,clipping_planes_pars_fragment:Yb,clipping_planes_pars_vertex:$b,clipping_planes_vertex:Kb,color_fragment:jb,color_pars_fragment:Zb,color_pars_vertex:Jb,color_vertex:Qb,common:ew,cube_uv_reflection_fragment:tw,defaultnormal_vertex:nw,displacementmap_pars_vertex:iw,displacementmap_vertex:rw,emissivemap_fragment:sw,emissivemap_pars_fragment:aw,colorspace_fragment:ow,colorspace_pars_fragment:lw,envmap_fragment:cw,envmap_common_pars_fragment:uw,envmap_pars_fragment:dw,envmap_pars_vertex:hw,envmap_physical_pars_fragment:bw,envmap_vertex:fw,fog_vertex:pw,fog_pars_vertex:mw,fog_fragment:gw,fog_pars_fragment:xw,gradientmap_pars_fragment:vw,lightmap_pars_fragment:_w,lights_lambert_fragment:yw,lights_lambert_pars_fragment:Sw,lights_pars_begin:Mw,lights_toon_fragment:ww,lights_toon_pars_fragment:Ew,lights_phong_fragment:Tw,lights_phong_pars_fragment:Aw,lights_physical_fragment:Cw,lights_physical_pars_fragment:Rw,lights_fragment_begin:Pw,lights_fragment_maps:Iw,lights_fragment_end:Nw,lightprobes_pars_fragment:Lw,logdepthbuf_fragment:Dw,logdepthbuf_pars_fragment:Uw,logdepthbuf_pars_vertex:Fw,logdepthbuf_vertex:kw,map_fragment:Ow,map_pars_fragment:Bw,map_particle_fragment:zw,map_particle_pars_fragment:Vw,metalnessmap_fragment:Gw,metalnessmap_pars_fragment:Hw,morphinstance_vertex:Ww,morphcolor_vertex:Xw,morphnormal_vertex:qw,morphtarget_pars_vertex:Yw,morphtarget_vertex:$w,normal_fragment_begin:Kw,normal_fragment_maps:jw,normal_pars_fragment:Zw,normal_pars_vertex:Jw,normal_vertex:Qw,normalmap_pars_fragment:eE,clearcoat_normal_fragment_begin:tE,clearcoat_normal_fragment_maps:nE,clearcoat_pars_fragment:iE,iridescence_pars_fragment:rE,opaque_fragment:sE,packing:aE,premultiplied_alpha_fragment:oE,project_vertex:lE,dithering_fragment:cE,dithering_pars_fragment:uE,roughnessmap_fragment:dE,roughnessmap_pars_fragment:hE,shadowmap_pars_fragment:fE,shadowmap_pars_vertex:pE,shadowmap_vertex:mE,shadowmask_pars_fragment:gE,skinbase_vertex:xE,skinning_pars_vertex:vE,skinning_vertex:_E,skinnormal_vertex:yE,specularmap_fragment:SE,specularmap_pars_fragment:ME,tonemapping_fragment:bE,tonemapping_pars_fragment:wE,transmission_fragment:EE,transmission_pars_fragment:TE,uv_pars_fragment:AE,uv_pars_vertex:CE,uv_vertex:RE,worldpos_vertex:PE,background_vert:IE,background_frag:NE,backgroundCube_vert:LE,backgroundCube_frag:DE,cube_vert:UE,cube_frag:FE,depth_vert:kE,depth_frag:OE,distance_vert:BE,distance_frag:zE,equirect_vert:VE,equirect_frag:GE,linedashed_vert:HE,linedashed_frag:WE,meshbasic_vert:XE,meshbasic_frag:qE,meshlambert_vert:YE,meshlambert_frag:$E,meshmatcap_vert:KE,meshmatcap_frag:jE,meshnormal_vert:ZE,meshnormal_frag:JE,meshphong_vert:QE,meshphong_frag:eT,meshphysical_vert:tT,meshphysical_frag:nT,meshtoon_vert:iT,meshtoon_frag:rT,points_vert:sT,points_frag:aT,shadow_vert:oT,shadow_frag:lT,sprite_vert:cT,sprite_frag:uT},fe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ki={basic:{uniforms:un([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:un([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:un([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:un([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:un([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:un([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:un([fe.points,fe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:un([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:un([fe.common,fe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:un([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:un([fe.sprite,fe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:un([fe.common,fe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:un([fe.lights,fe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};ki.physical={uniforms:un([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var jd={r:0,b:0,g:0},dT=new Rt,Oy=new Oe;Oy.set(-1,0,0,0,1,0,0,0,1);function hT(t,e,n,i,r,s){let a=new Qe(0),o=r===!0?0:1,l,c,h=null,f=0,d=null;function m(p){let v=p.isScene===!0?p.background:null;if(v&&v.isTexture){let M=p.backgroundBlurriness>0;v=e.get(v,M)}return v}function y(p){let v=!1,M=m(p);M===null?x(a,o):M&&M.isColor&&(x(M,1),v=!0);let C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(p,v){let M=m(v);M&&(M.isCubeTexture||M.mapping===fl)?(c===void 0&&(c=new mn(new Ia(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:As(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dT.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Oy),c.material.toneMapped=Ke.getTransfer(M.colorSpace)!==at,(h!==M||f!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new mn(new sl(2,2),new Vn({name:"BackgroundMaterial",uniforms:As(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,v){p.getRGB(jd,Ym(t)),n.buffers.color.setClear(jd.r,jd.g,jd.b,v,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(p,v=1){a.set(p),o=v,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,x(a,o)},render:y,addToRenderList:b,dispose:u}}function fT(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,a=!1;function o(I,B,W,X,z){let H=!1,U=f(I,X,W,B);s!==U&&(s=U,c(s.object)),H=m(I,X,W,z),H&&y(I,X,W,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,M(I,B,W,X),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function h(I){return t.deleteVertexArray(I)}function f(I,B,W,X){let z=X.wireframe===!0,H=i[B.id];H===void 0&&(H={},i[B.id]=H);let U=I.isInstancedMesh===!0?I.id:0,Y=H[U];Y===void 0&&(Y={},H[U]=Y);let Z=Y[W.id];Z===void 0&&(Z={},Y[W.id]=Z);let se=Z[z];return se===void 0&&(se=d(l()),Z[z]=se),se}function d(I){let B=[],W=[],X=[];for(let z=0;z<n;z++)B[z]=0,W[z]=0,X[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:X,object:I,attributes:{},index:null}}function m(I,B,W,X){let z=s.attributes,H=B.attributes,U=0,Y=W.getAttributes();for(let Z in Y)if(Y[Z].location>=0){let xe=z[Z],be=H[Z];if(be===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(be=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(be=I.instanceColor)),xe===void 0||xe.attribute!==be||be&&xe.data!==be.data)return!0;U++}return s.attributesNum!==U||s.index!==X}function y(I,B,W,X){let z={},H=B.attributes,U=0,Y=W.getAttributes();for(let Z in Y)if(Y[Z].location>=0){let xe=H[Z];xe===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(xe=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(xe=I.instanceColor));let be={};be.attribute=xe,xe&&xe.data&&(be.data=xe.data),z[Z]=be,U++}s.attributes=z,s.attributesNum=U,s.index=X}function b(){let I=s.newAttributes;for(let B=0,W=I.length;B<W;B++)I[B]=0}function x(I){u(I,0)}function u(I,B){let W=s.newAttributes,X=s.enabledAttributes,z=s.attributeDivisors;W[I]=1,X[I]===0&&(t.enableVertexAttribArray(I),X[I]=1),z[I]!==B&&(t.vertexAttribDivisor(I,B),z[I]=B)}function p(){let I=s.newAttributes,B=s.enabledAttributes;for(let W=0,X=B.length;W<X;W++)B[W]!==I[W]&&(t.disableVertexAttribArray(W),B[W]=0)}function v(I,B,W,X,z,H,U){U===!0?t.vertexAttribIPointer(I,B,W,z,H):t.vertexAttribPointer(I,B,W,X,z,H)}function M(I,B,W,X){b();let z=X.attributes,H=W.getAttributes(),U=B.defaultAttributeValues;for(let Y in H){let Z=H[Y];if(Z.location>=0){let se=z[Y];if(se===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(se=I.instanceColor)),se!==void 0){let xe=se.normalized,be=se.itemSize,Ze=e.get(se);if(Ze===void 0)continue;let rt=Ze.buffer,ze=Ze.type,J=Ze.bytesPerElement,pe=ze===t.INT||ze===t.UNSIGNED_INT||se.gpuType===dd;if(se.isInterleavedBufferAttribute){let oe=se.data,Ce=oe.stride,Ue=se.offset;if(oe.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Z.locationSize;Ie++)u(Z.location+Ie,oe.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ie=0;Ie<Z.locationSize;Ie++)x(Z.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,rt);for(let Ie=0;Ie<Z.locationSize;Ie++)v(Z.location+Ie,be/Z.locationSize,ze,xe,Ce*J,(Ue+be/Z.locationSize*Ie)*J,pe)}else{if(se.isInstancedBufferAttribute){for(let oe=0;oe<Z.locationSize;oe++)u(Z.location+oe,se.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let oe=0;oe<Z.locationSize;oe++)x(Z.location+oe);t.bindBuffer(t.ARRAY_BUFFER,rt);for(let oe=0;oe<Z.locationSize;oe++)v(Z.location+oe,be/Z.locationSize,ze,xe,be*J,be/Z.locationSize*oe*J,pe)}}else if(U!==void 0){let xe=U[Y];if(xe!==void 0)switch(xe.length){case 2:t.vertexAttrib2fv(Z.location,xe);break;case 3:t.vertexAttrib3fv(Z.location,xe);break;case 4:t.vertexAttrib4fv(Z.location,xe);break;default:t.vertexAttrib1fv(Z.location,xe)}}}}p()}function C(){T();for(let I in i){let B=i[I];for(let W in B){let X=B[W];for(let z in X){let H=X[z];for(let U in H)h(H[U].object),delete H[U];delete X[z]}}delete i[I]}}function E(I){if(i[I.id]===void 0)return;let B=i[I.id];for(let W in B){let X=B[W];for(let z in X){let H=X[z];for(let U in H)h(H[U].object),delete H[U];delete X[z]}}delete i[I.id]}function R(I){for(let B in i){let W=i[B];for(let X in W){let z=W[X];if(z[I.id]===void 0)continue;let H=z[I.id];for(let U in H)h(H[U].object),delete H[U];delete z[I.id]}}}function g(I){for(let B in i){let W=i[B],X=I.isInstancedMesh===!0?I.id:0,z=W[X];if(z!==void 0){for(let H in z){let U=z[H];for(let Y in U)h(U[Y].object),delete U[Y];delete z[H]}delete W[X],Object.keys(W).length===0&&delete i[B]}}}function T(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:g,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:x,disableUnusedAttributes:p}}function pT(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function mT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Qn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let g=R===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==En&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==xi&&!g)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(Ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:x,maxAttributes:u,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:M,maxSamples:C,samples:E}}function gT(t){let e=this,n=null,i=0,r=!1,s=!1,a=new Ci,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,m){let y=f.clippingPlanes,b=f.clipIntersection,x=f.clipShadows,u=t.get(f);if(!r||y===null||y.length===0||s&&!x)s?h(null):c();else{let p=s?0:i,v=p*4,M=u.clippingState||null;l.value=M,M=h(y,d,v,m);for(let C=0;C!==v;++C)M[C]=n[C];u.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,m,y){let b=f!==null?f.length:0,x=null;if(b!==0){if(x=l.value,y!==!0||x===null){let u=m+b*4,p=d.matrixWorldInverse;o.getNormalMatrix(p),(x===null||x.length<u)&&(x=new Float32Array(u));for(let v=0,M=m;v!==b;++v,M+=4)a.copy(f[v]).applyMatrix4(p,o),a.normal.toArray(x,M),x[M+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}var Qr=4,my=[.125,.215,.35,.446,.526,.582],Cs=20,xT=256,Ml=new ul,gy=new Qe,Zm=null,Jm=0,Qm=0,eg=!1,vT=new G,Jd=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){let{size:a=256,position:o=vT}=s;Zm=this._renderer.getRenderTarget(),Jm=this._renderer.getActiveCubeFace(),Qm=this._renderer.getActiveMipmapLevel(),eg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_y(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zm,Jm,Qm),this._renderer.xr.enabled=eg,e.scissorTest=!1,ka(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Kr||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zm=this._renderer.getRenderTarget(),Jm=this._renderer.getActiveCubeFace(),Qm=this._renderer.getActiveMipmapLevel(),eg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Ui,format:Qn,colorSpace:Yo,depthBuffer:!1},r=xy(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xy(e,n,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_T(s)),this._blurMaterial=ST(s,e,n),this._ggxMaterial=yT(s,e,n)}return r}_compileMaterial(e){let n=new mn(new Jn,e);this._renderer.compile(n,Ml)}_sceneToCubeUV(e,n,i,r,s){let l=new Jt(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(gy),f.toneMapping=mi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new Ia,new tl({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,x=b.material,u=!1,p=e.background;p?p.isColor&&(x.color.copy(p),e.background=null,u=!0):(x.color.copy(gy),u=!0);for(let v=0;v<6;v++){let M=v%3;M===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[v],s.y,s.z)):M===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[v]));let C=this._cubeSize;ka(r,M*C,v>2?C:0,C,C),f.setRenderTarget(r),u&&f.render(b,l),f.render(e,l)}f.toneMapping=m,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===Kr||e.mapping===Ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_y()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vy());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;ka(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ml)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),d=0+c*1.25,m=f*d,{_lodMax:y}=this,b=this._sizeLods[i],x=3*b*(i>y-Qr?i-y+Qr:0),u=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=y-n,ka(s,x,u,3*b,2*b),r.setRenderTarget(s),r.render(o,Ml),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=y-i,ka(e,x,u,3*b,2*b),r.setRenderTarget(e),r.render(o,Ml)}_blur(e,n,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[r];f.material=c;let d=c.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Cs-1),b=s/y,x=isFinite(s)?1+Math.floor(h*b):Cs;x>Cs&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Cs}`);let u=[],p=0;for(let R=0;R<Cs;++R){let g=R/b,T=Math.exp(-g*g/2);u.push(T),R===0?p+=T:R<x&&(p+=2*T)}for(let R=0;R<u.length;R++)u[R]=u[R]/p;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=y,d.mipInt.value=v-i;let M=this._sizeLods[r],C=3*M*(r>v-Qr?r-v+Qr:0),E=4*(this._cubeSize-M);ka(n,C,E,3*M,2*M),l.setRenderTarget(n),l.render(f,Ml)}};function _T(t){let e=[],n=[],i=[],r=t,s=t-Qr+1+my.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Qr?l=my[a-t+Qr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,y=6,b=3,x=2,u=1,p=new Float32Array(b*y*m),v=new Float32Array(x*y*m),M=new Float32Array(u*y*m);for(let E=0;E<m;E++){let R=E%3*2/3-1,g=E>2?0:-1,T=[R,g,0,R+2/3,g,0,R+2/3,g+1,0,R,g,0,R+2/3,g+1,0,R,g+1,0];p.set(T,b*y*E),v.set(d,x*y*E);let P=[E,E,E,E,E,E];M.set(P,u*y*E)}let C=new Jn;C.setAttribute("position",new On(p,b)),C.setAttribute("uv",new On(v,x)),C.setAttribute("faceIndex",new On(M,u)),i.push(new mn(C,null)),r>Qr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function xy(t,e,n){let i=new Bn(t,e,n);return i.texture.mapping=fl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ka(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yT(t,e,n){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:th(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function ST(t,e,n){let i=new Float32Array(Cs),r=new G(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:th(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function vy(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function _y(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function th(){return`

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
	`}var Qd=class extends Bn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new nl(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ia(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Di});s.uniforms.tEquirect.value=n;let a=new mn(r,s),o=n.minFilter;return n.minFilter===jr&&(n.minFilter=Qt),new ad(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}};function MT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){let m=d.mapping;if(m===ld||m===cd)if(e.has(d)){let y=e.get(d).texture;return o(y,d.mapping)}else{let y=d.image;if(y&&y.height>0){let b=new Qd(y.height);return b.fromEquirectangularTexture(t,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let m=d.mapping,y=m===ld||m===cd,b=m===Kr||m===Ts;if(y||b){let x=n.get(d),u=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new Jd(t)),x=y?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),x.texture;if(x!==void 0)return x.texture;{let p=d.image;return y&&p&&p.height>0||b&&p&&l(p)?(i===null&&(i=new Jd(t)),x=y?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}function o(d,m){return m===ld?d.mapping=Kr:m===cd&&(d.mapping=Ts),d}function l(d){let m=0,y=6;for(let b=0;b<y;b++)d[b]!==void 0&&m++;return m===y}function c(d){let m=d.target;m.removeEventListener("dispose",c);let y=e.get(m);y!==void 0&&(e.delete(m),y.dispose())}function h(d){let m=d.target;m.removeEventListener("dispose",h);let y=n.get(m);y!==void 0&&(n.delete(m),y.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function bT(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&Bu("WebGLRenderer: "+i+" extension not supported."),r}}}function wT(t,e,n,i){let r={},s=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let y in d.attributes)e.remove(d.attributes[y]);d.removeEventListener("dispose",a),delete r[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){let d=f.attributes;for(let m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(f){let d=[],m=f.index,y=f.attributes.position,b=0;if(y===void 0)return;if(m!==null){let p=m.array;b=m.version;for(let v=0,M=p.length;v<M;v+=3){let C=p[v+0],E=p[v+1],R=p[v+2];d.push(C,E,E,R,R,C)}}else{let p=y.array;b=y.version;for(let v=0,M=p.length/3-1;v<M;v+=3){let C=v+0,E=v+1,R=v+2;d.push(C,E,E,R,R,C)}}let x=new(y.count>=65535?el:Qo)(d,1);x.version=b;let u=s.get(f);u&&e.remove(u),s.set(f,x)}function h(f){let d=s.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function ET(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){t.drawElements(i,d,s,f*a),n.update(d,i,1)}function c(f,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,f*a,m),n.update(d,i,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,m);let b=0;for(let x=0;x<m;x++)b+=d[x];n.update(b,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function TT(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function AT(t,e,n){let i=new WeakMap,r=new Tt;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==f){let T=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let m=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],p=o.morphAttributes.color||[],v=0;m===!0&&(v=1),y===!0&&(v=2),b===!0&&(v=3);let M=o.attributes.position.count*v,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*C*4*f),R=new jo(E,M,C,f);R.type=xi,R.needsUpdate=!0;let g=v*4;for(let P=0;P<f;P++){let I=x[P],B=u[P],W=p[P],X=M*C*4*P;for(let z=0;z<I.count;z++){let H=z*g;m===!0&&(r.fromBufferAttribute(I,z),E[X+H+0]=r.x,E[X+H+1]=r.y,E[X+H+2]=r.z,E[X+H+3]=0),y===!0&&(r.fromBufferAttribute(B,z),E[X+H+4]=r.x,E[X+H+5]=r.y,E[X+H+6]=r.z,E[X+H+7]=0),b===!0&&(r.fromBufferAttribute(W,z),E[X+H+8]=r.x,E[X+H+9]=r.y,E[X+H+10]=r.z,E[X+H+11]=W.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new it(M,C)},i.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let b=0;b<c.length;b++)m+=c[b];let y=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function CT(t,e,n,i,r){let s=new WeakMap;function a(c){let h=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return d}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}var RT={[Pm]:"LINEAR_TONE_MAPPING",[Im]:"REINHARD_TONE_MAPPING",[Nm]:"CINEON_TONE_MAPPING",[Lm]:"ACES_FILMIC_TONE_MAPPING",[Um]:"AGX_TONE_MAPPING",[Fm]:"NEUTRAL_TONE_MAPPING",[Dm]:"CUSTOM_TONE_MAPPING"};function PT(t,e,n,i,r){let s=new Bn(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new lr(e,n):void 0}),a=new Bn(e,n,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),o=new Jn;o.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new qt([0,2,0,0,2,0],2));let l=new Yu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new mn(o,l),h=new ul(-1,1,1,-1,0,1),f=null,d=null,m=!1,y,b=null,x=[],u=!1;this.setSize=function(p,v){s.setSize(p,v),a.setSize(p,v);for(let M=0;M<x.length;M++){let C=x[M];C.setSize&&C.setSize(p,v)}},this.setEffects=function(p){x=p,u=x.length>0&&x[0].isRenderPass===!0;let v=s.width,M=s.height;for(let C=0;C<x.length;C++){let E=x[C];E.setSize&&E.setSize(v,M)}},this.begin=function(p,v){if(m||p.toneMapping===mi&&x.length===0)return!1;if(b=v,v!==null){let M=v.width,C=v.height;(s.width!==M||s.height!==C)&&this.setSize(M,C)}return u===!1&&p.setRenderTarget(s),y=p.toneMapping,p.toneMapping=mi,!0},this.hasRenderPass=function(){return u},this.end=function(p,v){p.toneMapping=y,m=!0;let M=s,C=a;for(let E=0;E<x.length;E++){let R=x[E];if(R.enabled!==!1&&(R.render(p,C,M,v),R.needsSwap!==!1)){let g=M;M=C,C=g}}if(f!==p.outputColorSpace||d!==p.toneMapping){f=p.outputColorSpace,d=p.toneMapping,l.defines={},Ke.getTransfer(f)===at&&(l.defines.SRGB_TRANSFER="");let E=RT[d];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,p.setRenderTarget(b),p.render(c,h),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var By=new wn,ig=new lr(1,1),zy=new jo,Vy=new Hu,Gy=new nl,yy=[],Sy=[],My=new Float32Array(16),by=new Float32Array(9),wy=new Float32Array(4);function Ba(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=yy[r];if(s===void 0&&(s=new Float32Array(r),yy[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function nh(t,e){let n=Sy[e];n===void 0&&(n=new Int32Array(e),Sy[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function IT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function NT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function LT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function DT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function UT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;wy.set(i),t.uniformMatrix2fv(this.addr,!1,wy),Vt(n,i)}}function FT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;by.set(i),t.uniformMatrix3fv(this.addr,!1,by),Vt(n,i)}}function kT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;My.set(i),t.uniformMatrix4fv(this.addr,!1,My),Vt(n,i)}}function OT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function BT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function zT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function VT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function GT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function HT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function WT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function XT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function qT(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ig.compareFunction=n.isReversedDepthBuffer()?Kd:$d,s=ig):s=By,n.setTexture2D(e||s,r)}function YT(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Vy,r)}function $T(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Gy,r)}function KT(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||zy,r)}function jT(t){switch(t){case 5126:return IT;case 35664:return NT;case 35665:return LT;case 35666:return DT;case 35674:return UT;case 35675:return FT;case 35676:return kT;case 5124:case 35670:return OT;case 35667:case 35671:return BT;case 35668:case 35672:return zT;case 35669:case 35673:return VT;case 5125:return GT;case 36294:return HT;case 36295:return WT;case 36296:return XT;case 35678:case 36198:case 36298:case 36306:case 35682:return qT;case 35679:case 36299:case 36307:return YT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return KT}}function ZT(t,e){t.uniform1fv(this.addr,e)}function JT(t,e){let n=Ba(e,this.size,2);t.uniform2fv(this.addr,n)}function QT(t,e){let n=Ba(e,this.size,3);t.uniform3fv(this.addr,n)}function eA(t,e){let n=Ba(e,this.size,4);t.uniform4fv(this.addr,n)}function tA(t,e){let n=Ba(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function nA(t,e){let n=Ba(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function iA(t,e){let n=Ba(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function rA(t,e){t.uniform1iv(this.addr,e)}function sA(t,e){t.uniform2iv(this.addr,e)}function aA(t,e){t.uniform3iv(this.addr,e)}function oA(t,e){t.uniform4iv(this.addr,e)}function lA(t,e){t.uniform1uiv(this.addr,e)}function cA(t,e){t.uniform2uiv(this.addr,e)}function uA(t,e){t.uniform3uiv(this.addr,e)}function dA(t,e){t.uniform4uiv(this.addr,e)}function hA(t,e,n){let i=this.cache,r=e.length,s=nh(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=ig:a=By;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function fA(t,e,n){let i=this.cache,r=e.length,s=nh(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Vy,s[a])}function pA(t,e,n){let i=this.cache,r=e.length,s=nh(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Gy,s[a])}function mA(t,e,n){let i=this.cache,r=e.length,s=nh(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||zy,s[a])}function gA(t){switch(t){case 5126:return ZT;case 35664:return JT;case 35665:return QT;case 35666:return eA;case 35674:return tA;case 35675:return nA;case 35676:return iA;case 5124:case 35670:return rA;case 35667:case 35671:return sA;case 35668:case 35672:return aA;case 35669:case 35673:return oA;case 5125:return lA;case 36294:return cA;case 36295:return uA;case 36296:return dA;case 35678:case 36198:case 36298:case 36306:case 35682:return hA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return pA;case 36289:case 36303:case 36311:case 36292:return mA}}var rg=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jT(n.type)}},sg=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gA(n.type)}},ag=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,n[o.id],i)}}},tg=/(\w+)(\])?(\[|\.)?/g;function Ey(t,e){t.seq.push(e),t.map[e.id]=e}function xA(t,e,n){let i=t.name,r=i.length;for(tg.lastIndex=0;;){let s=tg.exec(i),a=tg.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ey(n,c===void 0?new rg(o,t,e):new sg(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new ag(o),Ey(n,f)),n=f}}}var Oa=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);xA(o,l,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){let o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in n&&i.push(a)}return i}};function Ty(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var vA=37297,_A=0;function yA(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Ay=new Oe;function SA(t){Ke._getMatrix(Ay,Ke.workingColorSpace,t);let e=`mat3( ${Ay.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case $o:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Cy(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+yA(t.getShaderSource(e),o)}else return s}function MA(t,e){let n=SA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var bA={[Pm]:"Linear",[Im]:"Reinhard",[Nm]:"Cineon",[Lm]:"ACESFilmic",[Um]:"AgX",[Fm]:"Neutral",[Dm]:"Custom"};function wA(t,e){let n=bA[e];return n===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Zd=new G;function EA(){Ke.getLuminanceCoefficients(Zd);let t=Zd.x.toFixed(4),e=Zd.y.toFixed(4),n=Zd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wl).join(`
`)}function AA(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function CA(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),a=s.name,o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function wl(t){return t!==""}function Ry(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Py(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var RA=/^[ \t]*#include +<([\w\d./]+)>/gm;function og(t){return t.replace(RA,IA)}var PA=new Map;function IA(t,e){let n=We[e];if(n===void 0){let i=PA.get(e);if(i!==void 0)n=We[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return og(n)}var NA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iy(t){return t.replace(NA,LA)}function LA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ny(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var DA={[hl]:"SHADOWMAP_TYPE_PCF",[Da]:"SHADOWMAP_TYPE_VSM"};function UA(t){return DA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var FA={[Kr]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE",[fl]:"ENVMAP_TYPE_CUBE_UV"};function kA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":FA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var OA={[Ts]:"ENVMAP_MODE_REFRACTION"};function BA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":OA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zA={[Rm]:"ENVMAP_BLENDING_MULTIPLY",[Z_]:"ENVMAP_BLENDING_MIX",[J_]:"ENVMAP_BLENDING_ADD"};function VA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":zA[t.combine]||"ENVMAP_BLENDING_NONE"}function GA(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function HA(t,e,n,i){let r=t.getContext(),s=n.defines,a=n.vertexShader,o=n.fragmentShader,l=UA(n),c=kA(n),h=BA(n),f=VA(n),d=GA(n),m=TA(n),y=AA(s),b=r.createProgram(),x,u,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(wl).join(`
`),x.length>0&&(x+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(wl).join(`
`),u.length>0&&(u+=`
`)):(x=[Ny(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),u=[Ny(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?We.tonemapping_pars_fragment:"",n.toneMapping!==mi?wA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,MA("linearToOutputTexel",n.outputColorSpace),EA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wl).join(`
`)),a=og(a),a=Ry(a,n),a=Py(a,n),o=og(o),o=Ry(o,n),o=Py(o,n),a=Iy(a),o=Iy(o),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,u=["#define varying in",n.glslVersion===Xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let v=p+x+a,M=p+u+o,C=Ty(r,r.VERTEX_SHADER,v),E=Ty(r,r.FRAGMENT_SHADER,M);r.attachShader(b,C),r.attachShader(b,E),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function R(I){if(t.debug.checkShaderErrors){let B=r.getProgramInfoLog(b)||"",W=r.getShaderInfoLog(C)||"",X=r.getShaderInfoLog(E)||"",z=B.trim(),H=W.trim(),U=X.trim(),Y=!0,Z=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,b,C,E);else{let se=Cy(r,C,"vertex"),xe=Cy(r,E,"fragment");Le("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+se+`
`+xe)}else z!==""?Ne("WebGLProgram: Program Info Log:",z):(H===""||U==="")&&(Z=!1);Z&&(I.diagnostics={runnable:Y,programLog:z,vertexShader:{log:H,prefix:x},fragmentShader:{log:U,prefix:u}})}r.deleteShader(C),r.deleteShader(E),g=new Oa(r,b),T=CA(r,b)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(b,vA)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_A++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=C,this.fragmentShader=E,this}var WA=0,lg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new cg(e),n.set(e,i)),i}},cg=class{constructor(e){this.id=WA++,this.code=e,this.usedTimes=0}};function XA(t){return t===Jr||t===_l||t===yl}function qA(t,e,n,i,r,s){let a=new Zo,o=new lg,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(g){return l.add(g),g===0?"uv":`uv${g}`}function b(g,T,P,I,B,W){let X=I.fog,z=B.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?I.environment:null,U=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,Y=e.get(g.envMap||H,U),Z=Y&&Y.mapping===fl?Y.image.height:null,se=m[g.type];g.precision!==null&&(d=i.getMaxPrecision(g.precision),d!==g.precision&&Ne("WebGLProgram.getParameters:",g.precision,"not supported, using",d,"instead."));let xe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,be=xe!==void 0?xe.length:0,Ze=0;z.morphAttributes.position!==void 0&&(Ze=1),z.morphAttributes.normal!==void 0&&(Ze=2),z.morphAttributes.color!==void 0&&(Ze=3);let rt,ze,J,pe;if(se){let ke=ki[se];rt=ke.vertexShader,ze=ke.fragmentShader}else rt=g.vertexShader,ze=g.fragmentShader,o.update(g),J=o.getVertexShaderID(g),pe=o.getFragmentShaderID(g);let oe=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),Ue=B.isInstancedMesh===!0,Ie=B.isBatchedMesh===!0,ut=!!g.map,Ge=!!g.matcap,Ye=!!Y,lt=!!g.aoMap,He=!!g.lightMap,Pt=!!g.bumpMap,ft=!!g.normalMap,Ut=!!g.displacementMap,D=!!g.emissiveMap,It=!!g.metalnessMap,qe=!!g.roughnessMap,st=g.anisotropy>0,ue=g.clearcoat>0,pt=g.dispersion>0,A=g.iridescence>0,S=g.sheen>0,F=g.transmission>0,K=st&&!!g.anisotropyMap,ee=ue&&!!g.clearcoatMap,ae=ue&&!!g.clearcoatNormalMap,le=ue&&!!g.clearcoatRoughnessMap,q=A&&!!g.iridescenceMap,j=A&&!!g.iridescenceThicknessMap,me=S&&!!g.sheenColorMap,ve=S&&!!g.sheenRoughnessMap,ce=!!g.specularMap,re=!!g.specularColorMap,De=!!g.specularIntensityMap,Fe=F&&!!g.transmissionMap,Me=F&&!!g.thicknessMap,N=!!g.gradientMap,te=!!g.alphaMap,$=g.alphaTest>0,he=!!g.alphaHash,ie=!!g.extensions,Q=mi;g.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Q=t.toneMapping);let we={shaderID:se,shaderType:g.type,shaderName:g.name,vertexShader:rt,fragmentShader:ze,defines:g.defines,customVertexShaderID:J,customFragmentShaderID:pe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:d,batching:Ie,batchingColor:Ie&&B._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&B.instanceColor!==null,instancingMorph:Ue&&B.morphTexture!==null,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:ut,matcap:Ge,envMap:Ye,envMapMode:Ye&&Y.mapping,envMapCubeUVHeight:Z,aoMap:lt,lightMap:He,bumpMap:Pt,normalMap:ft,displacementMap:Ut,emissiveMap:D,normalMapObjectSpace:ft&&g.normalMapType===ty,normalMapTangentSpace:ft&&g.normalMapType===Yd,packedNormalMap:ft&&g.normalMapType===Yd&&XA(g.normalMap.format),metalnessMap:It,roughnessMap:qe,anisotropy:st,anisotropyMap:K,clearcoat:ue,clearcoatMap:ee,clearcoatNormalMap:ae,clearcoatRoughnessMap:le,dispersion:pt,iridescence:A,iridescenceMap:q,iridescenceThicknessMap:j,sheen:S,sheenColorMap:me,sheenRoughnessMap:ve,specularMap:ce,specularColorMap:re,specularIntensityMap:De,transmission:F,transmissionMap:Fe,thicknessMap:Me,gradientMap:N,opaque:g.transparent===!1&&g.blending===ws&&g.alphaToCoverage===!1,alphaMap:te,alphaTest:$,alphaHash:he,combine:g.combine,mapUv:ut&&y(g.map.channel),aoMapUv:lt&&y(g.aoMap.channel),lightMapUv:He&&y(g.lightMap.channel),bumpMapUv:Pt&&y(g.bumpMap.channel),normalMapUv:ft&&y(g.normalMap.channel),displacementMapUv:Ut&&y(g.displacementMap.channel),emissiveMapUv:D&&y(g.emissiveMap.channel),metalnessMapUv:It&&y(g.metalnessMap.channel),roughnessMapUv:qe&&y(g.roughnessMap.channel),anisotropyMapUv:K&&y(g.anisotropyMap.channel),clearcoatMapUv:ee&&y(g.clearcoatMap.channel),clearcoatNormalMapUv:ae&&y(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&y(g.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&y(g.iridescenceMap.channel),iridescenceThicknessMapUv:j&&y(g.iridescenceThicknessMap.channel),sheenColorMapUv:me&&y(g.sheenColorMap.channel),sheenRoughnessMapUv:ve&&y(g.sheenRoughnessMap.channel),specularMapUv:ce&&y(g.specularMap.channel),specularColorMapUv:re&&y(g.specularColorMap.channel),specularIntensityMapUv:De&&y(g.specularIntensityMap.channel),transmissionMapUv:Fe&&y(g.transmissionMap.channel),thicknessMapUv:Me&&y(g.thicknessMap.channel),alphaMapUv:te&&y(g.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ft||st),vertexNormals:!!z.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(ut||te),fog:!!X,useFog:g.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||z.attributes.normal===void 0&&ft===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ce,skinning:B.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ze,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Q,decodeVideoTexture:ut&&g.map.isVideoTexture===!0&&Ke.getTransfer(g.map.colorSpace)===at,decodeVideoTextureEmissive:D&&g.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(g.emissiveMap.colorSpace)===at,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Li,flipSided:g.side===gn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ie&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&g.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function x(g){let T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(let P in g.defines)T.push(P),T.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(u(T,g),p(T,g),T.push(t.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function u(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function p(g,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),g.push(a.mask)}function v(g){let T=m[g.type],P;if(T){let I=ki[T];P=fy.clone(I.uniforms)}else P=g.uniforms;return P}function M(g,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new HA(t,T,g,r),c.push(P),h.set(T,P)),P}function C(g){if(--g.usedTimes===0){let T=c.indexOf(g);c[T]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function E(g){o.remove(g)}function R(){o.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:v,acquireProgram:M,releaseProgram:C,releaseShaderCache:E,programs:c,dispose:R}}function YA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function $A(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Ly(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Dy(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,y,b,x,u){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:m,material:y,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:x,group:u},t[e]=p):(p.id=d.id,p.object=d,p.geometry=m,p.material=y,p.materialVariant=a(d),p.groupOrder=b,p.renderOrder=d.renderOrder,p.z=x,p.group=u),e++,p}function l(d,m,y,b,x,u){let p=o(d,m,y,b,x,u);y.transmission>0?i.push(p):y.transparent===!0?r.push(p):n.push(p)}function c(d,m,y,b,x,u){let p=o(d,m,y,b,x,u);y.transmission>0?i.unshift(p):y.transparent===!0?r.unshift(p):n.unshift(p)}function h(d,m){n.length>1&&n.sort(d||$A),i.length>1&&i.sort(m||Ly),r.length>1&&r.sort(m||Ly)}function f(){for(let d=e,m=t.length;d<m;d++){let y=t[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function KA(){let t=new WeakMap;function e(i,r){let s=t.get(i),a;return s===void 0?(a=new Dy,t.set(i,[a])):r>=s.length?(a=new Dy,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function jA(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new Qe};break;case"SpotLight":n={position:new G,direction:new G,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function ZA(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var JA=0;function QA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function eC(t){let e=new jA,n=ZA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);let r=new G,s=new Rt,a=new Rt;function o(c){let h=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,y=0,b=0,x=0,u=0,p=0,v=0,M=0,C=0,E=0,R=0;c.sort(QA);for(let T=0,P=c.length;T<P;T++){let I=c[T],B=I.color,W=I.intensity,X=I.distance,z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Jr?z=I.shadow.map.texture:z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=B.r*W,f+=B.g*W,d+=B.b*W;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],W);R++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let U=I.shadow,Y=n.get(I);Y.shadowIntensity=U.intensity,Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize=U.mapSize,i.directionalShadow[m]=Y,i.directionalShadowMap[m]=z,i.directionalShadowMatrix[m]=I.shadow.matrix,p++}i.directional[m]=H,m++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(B).multiplyScalar(W),H.distance=X,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[b]=H;let U=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,U.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[b]=U.matrix,I.castShadow){let Y=n.get(I);Y.shadowIntensity=U.intensity,Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize=U.mapSize,i.spotShadow[b]=Y,i.spotShadowMap[b]=z,M++}b++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(B).multiplyScalar(W),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[x]=H,x++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let U=I.shadow,Y=n.get(I);Y.shadowIntensity=U.intensity,Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize=U.mapSize,Y.shadowCameraNear=U.camera.near,Y.shadowCameraFar=U.camera.far,i.pointShadow[y]=Y,i.pointShadowMap[y]=z,i.pointShadowMatrix[y]=I.shadow.matrix,v++}i.point[y]=H,y++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(W),H.groundColor.copy(I.groundColor).multiplyScalar(W),i.hemi[u]=H,u++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let g=i.hash;(g.directionalLength!==m||g.pointLength!==y||g.spotLength!==b||g.rectAreaLength!==x||g.hemiLength!==u||g.numDirectionalShadows!==p||g.numPointShadows!==v||g.numSpotShadows!==M||g.numSpotMaps!==C||g.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=b,i.rectArea.length=x,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,g.directionalLength=m,g.pointLength=y,g.spotLength=b,g.rectAreaLength=x,g.hemiLength=u,g.numDirectionalShadows=p,g.numPointShadows=v,g.numSpotShadows=M,g.numSpotMaps=C,g.numLightProbes=R,i.version=JA++)}function l(c,h){let f=0,d=0,m=0,y=0,b=0,x=h.matrixWorldInverse;for(let u=0,p=c.length;u<p;u++){let v=c[u];if(v.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),f++}else if(v.isSpotLight){let M=i.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),m++}else if(v.isRectAreaLight){let M=i.rectArea[y];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(x),a.identity(),s.copy(v.matrixWorld),s.premultiply(x),a.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(x),d++}else if(v.isHemisphereLight){let M=i.hemi[b];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(x),b++}}}return{setup:o,setupView:l,state:i}}function Uy(t){let e=new eC(t),n=[],i=[],r=[];function s(d){f.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function h(d){e.setupView(n,d)}let f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function tC(t){let e=new WeakMap;function n(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Uy(t),e.set(r,[o])):s>=a.length?(o=new Uy(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var nC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iC=`uniform sampler2D shadow_pass;
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
}`,rC=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],sC=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Fy=new Rt,bl=new G,ng=new G;function aC(t,e,n){let i=new Pa,r=new it,s=new it,a=new Tt,o=new $u,l=new Ku,c={},h=n.maxTextureSize,f={[ar]:gn,[gn]:ar,[Li]:Li},d=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:nC,fragmentShader:iC}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let y=new Jn;y.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new mn(y,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let u=this.type;this.render=function(E,R,g){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;this.type===N_&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=hl);let T=t.getRenderTarget(),P=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Di),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let W=u!==this.type;W&&R.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(z=>z.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,z=E.length;X<z;X++){let H=E[X],U=H.shadow;if(U===void 0){Ne("WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);let Y=U.getFrameExtents();r.multiply(Y),s.copy(U.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Y.x),r.x=s.x*Y.x,U.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Y.y),r.y=s.y*Y.y,U.mapSize.y=s.y));let Z=t.state.buffers.depth.getReversed();if(U.camera._reversedDepth=Z,U.map===null||W===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Da){if(H.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Bn(r.x,r.y,{format:Jr,type:Ui,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),U.map.texture.name=H.name+".shadowMap",U.map.depthTexture=new lr(r.x,r.y,xi),U.map.depthTexture.name=H.name+".shadowMapDepth",U.map.depthTexture.format=Pi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Yt,U.map.depthTexture.magFilter=Yt}else H.isPointLight?(U.map=new Qd(r.x),U.map.depthTexture=new qu(r.x,gi)):(U.map=new Bn(r.x,r.y),U.map.depthTexture=new lr(r.x,r.y,gi)),U.map.depthTexture.name=H.name+".shadowMap",U.map.depthTexture.format=Pi,this.type===hl?(U.map.depthTexture.compareFunction=Z?Kd:$d,U.map.depthTexture.minFilter=Qt,U.map.depthTexture.magFilter=Qt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Yt,U.map.depthTexture.magFilter=Yt);U.camera.updateProjectionMatrix()}let se=U.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<se;xe++){if(U.map.isWebGLCubeRenderTarget)t.setRenderTarget(U.map,xe),t.clear();else{xe===0&&(t.setRenderTarget(U.map),t.clear());let be=U.getViewport(xe);a.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),B.viewport(a)}if(H.isPointLight){let be=U.camera,Ze=U.matrix,rt=H.distance||be.far;rt!==be.far&&(be.far=rt,be.updateProjectionMatrix()),bl.setFromMatrixPosition(H.matrixWorld),be.position.copy(bl),ng.copy(be.position),ng.add(rC[xe]),be.up.copy(sC[xe]),be.lookAt(ng),be.updateMatrixWorld(),Ze.makeTranslation(-bl.x,-bl.y,-bl.z),Fy.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Fy,be.coordinateSystem,be.reversedDepth)}else U.updateMatrices(H);i=U.getFrustum(),M(R,g,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===Da&&p(U,g),U.needsUpdate=!1}u=this.type,x.needsUpdate=!1,t.setRenderTarget(T,P,I)};function p(E,R){let g=e.update(b);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Bn(r.x,r.y,{format:Jr,type:Ui})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(R,null,g,d,b,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(R,null,g,m,b,null)}function v(E,R,g,T){let P=null,I=g.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)P=I;else if(P=g.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let B=P.uuid,W=R.uuid,X=c[B];X===void 0&&(X={},c[B]=X);let z=X[W];z===void 0&&(z=P.clone(),X[W]=z,R.addEventListener("dispose",C)),P=z}if(P.visible=R.visible,P.wireframe=R.wireframe,T===Da?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:f[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,g.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let B=t.properties.get(P);B.light=g}return P}function M(E,R,g,T,P){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Da)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,E.matrixWorld);let W=e.update(E),X=E.material;if(Array.isArray(X)){let z=W.groups;for(let H=0,U=z.length;H<U;H++){let Y=z[H],Z=X[Y.materialIndex];if(Z&&Z.visible){let se=v(E,Z,T,P);E.onBeforeShadow(t,E,R,g,W,se,Y),t.renderBufferDirect(g,null,W,se,E,Y),E.onAfterShadow(t,E,R,g,W,se,Y)}}}else if(X.visible){let z=v(E,X,T,P);E.onBeforeShadow(t,E,R,g,W,z,null),t.renderBufferDirect(g,null,W,z,E,null),E.onAfterShadow(t,E,R,g,W,z,null)}}let B=E.children;for(let W=0,X=B.length;W<X;W++)M(B[W],R,g,T,P)}function C(E){E.target.removeEventListener("dispose",C);for(let g in c){let T=c[g],P=E.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function oC(t,e){function n(){let N=!1,te=new Tt,$=null,he=new Tt(0,0,0,0);return{setMask:function(ie){$!==ie&&!N&&(t.colorMask(ie,ie,ie,ie),$=ie)},setLocked:function(ie){N=ie},setClear:function(ie,Q,we,ke,Mt){Mt===!0&&(ie*=ke,Q*=ke,we*=ke),te.set(ie,Q,we,ke),he.equals(te)===!1&&(t.clearColor(ie,Q,we,ke),he.copy(te))},reset:function(){N=!1,$=null,he.set(-1,0,0,0)}}}function i(){let N=!1,te=!1,$=null,he=null,ie=null;return{setReversed:function(Q){if(te!==Q){let we=e.get("EXT_clip_control");Q?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),te=Q;let ke=ie;ie=null,this.setClear(ke)}},getReversed:function(){return te},setTest:function(Q){Q?oe(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(Q){$!==Q&&!N&&(t.depthMask(Q),$=Q)},setFunc:function(Q){if(te&&(Q=dy[Q]),he!==Q){switch(Q){case Ru:t.depthFunc(t.NEVER);break;case Pu:t.depthFunc(t.ALWAYS);break;case Iu:t.depthFunc(t.LESS);break;case Es:t.depthFunc(t.LEQUAL);break;case Nu:t.depthFunc(t.EQUAL);break;case Lu:t.depthFunc(t.GEQUAL);break;case Du:t.depthFunc(t.GREATER);break;case Uu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=Q}},setLocked:function(Q){N=Q},setClear:function(Q){ie!==Q&&(ie=Q,te&&(Q=1-Q),t.clearDepth(Q))},reset:function(){N=!1,$=null,he=null,ie=null,te=!1}}}function r(){let N=!1,te=null,$=null,he=null,ie=null,Q=null,we=null,ke=null,Mt=null;return{setTest:function(et){N||(et?oe(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(et){te!==et&&!N&&(t.stencilMask(et),te=et)},setFunc:function(et,ni,Tn){($!==et||he!==ni||ie!==Tn)&&(t.stencilFunc(et,ni,Tn),$=et,he=ni,ie=Tn)},setOp:function(et,ni,Tn){(Q!==et||we!==ni||ke!==Tn)&&(t.stencilOp(et,ni,Tn),Q=et,we=ni,ke=Tn)},setLocked:function(et){N=et},setClear:function(et){Mt!==et&&(t.clearStencil(et),Mt=et)},reset:function(){N=!1,te=null,$=null,he=null,ie=null,Q=null,we=null,ke=null,Mt=null}}}let s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap,h={},f={},d={},m=new WeakMap,y=[],b=null,x=!1,u=null,p=null,v=null,M=null,C=null,E=null,R=null,g=new Qe(0,0,0),T=0,P=!1,I=null,B=null,W=null,X=null,z=null,H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,Y=0,Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Z)[1]),U=Y>=1):Z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),U=Y>=2);let se=null,xe={},be=t.getParameter(t.SCISSOR_BOX),Ze=t.getParameter(t.VIEWPORT),rt=new Tt().fromArray(be),ze=new Tt().fromArray(Ze);function J(N,te,$,he){let ie=new Uint8Array(4),Q=t.createTexture();t.bindTexture(N,Q),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<$;we++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(te,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(te+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return Q}let pe={};pe[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(t.DEPTH_TEST),a.setFunc(Es),Pt(!1),ft(Em),oe(t.CULL_FACE),lt(Di);function oe(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function Ce(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function Ue(N,te){return d[N]!==te?(t.bindFramebuffer(N,te),d[N]=te,N===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=te),N===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=te),!0):!1}function Ie(N,te){let $=y,he=!1;if(N){$=m.get(te),$===void 0&&($=[],m.set(te,$));let ie=N.textures;if($.length!==ie.length||$[0]!==t.COLOR_ATTACHMENT0){for(let Q=0,we=ie.length;Q<we;Q++)$[Q]=t.COLOR_ATTACHMENT0+Q;$.length=ie.length,he=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,he=!0);he&&t.drawBuffers($)}function ut(N){return b!==N?(t.useProgram(N),b=N,!0):!1}let Ge={[Hr]:t.FUNC_ADD,[D_]:t.FUNC_SUBTRACT,[U_]:t.FUNC_REVERSE_SUBTRACT};Ge[F_]=t.MIN,Ge[k_]=t.MAX;let Ye={[O_]:t.ZERO,[B_]:t.ONE,[z_]:t.SRC_COLOR,[Au]:t.SRC_ALPHA,[q_]:t.SRC_ALPHA_SATURATE,[W_]:t.DST_COLOR,[G_]:t.DST_ALPHA,[V_]:t.ONE_MINUS_SRC_COLOR,[Cu]:t.ONE_MINUS_SRC_ALPHA,[X_]:t.ONE_MINUS_DST_COLOR,[H_]:t.ONE_MINUS_DST_ALPHA,[Y_]:t.CONSTANT_COLOR,[$_]:t.ONE_MINUS_CONSTANT_COLOR,[K_]:t.CONSTANT_ALPHA,[j_]:t.ONE_MINUS_CONSTANT_ALPHA};function lt(N,te,$,he,ie,Q,we,ke,Mt,et){if(N===Di){x===!0&&(Ce(t.BLEND),x=!1);return}if(x===!1&&(oe(t.BLEND),x=!0),N!==L_){if(N!==u||et!==P){if((p!==Hr||C!==Hr)&&(t.blendEquation(t.FUNC_ADD),p=Hr,C=Hr),et)switch(N){case ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Tm:t.blendFunc(t.ONE,t.ONE);break;case Am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Cm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Le("WebGLState: Invalid blending: ",N);break}else switch(N){case ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Tm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Am:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cm:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",N);break}v=null,M=null,E=null,R=null,g.set(0,0,0),T=0,u=N,P=et}return}ie=ie||te,Q=Q||$,we=we||he,(te!==p||ie!==C)&&(t.blendEquationSeparate(Ge[te],Ge[ie]),p=te,C=ie),($!==v||he!==M||Q!==E||we!==R)&&(t.blendFuncSeparate(Ye[$],Ye[he],Ye[Q],Ye[we]),v=$,M=he,E=Q,R=we),(ke.equals(g)===!1||Mt!==T)&&(t.blendColor(ke.r,ke.g,ke.b,Mt),g.copy(ke),T=Mt),u=N,P=!1}function He(N,te){N.side===Li?Ce(t.CULL_FACE):oe(t.CULL_FACE);let $=N.side===gn;te&&($=!$),Pt($),N.blending===ws&&N.transparent===!1?lt(Di):lt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);let he=N.stencilWrite;o.setTest(he),he&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),D(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(N){I!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),I=N)}function ft(N){N!==P_?(oe(t.CULL_FACE),N!==B&&(N===Em?t.cullFace(t.BACK):N===I_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),B=N}function Ut(N){N!==W&&(U&&t.lineWidth(N),W=N)}function D(N,te,$){N?(oe(t.POLYGON_OFFSET_FILL),(X!==te||z!==$)&&(X=te,z=$,a.getReversed()&&(te=-te),t.polygonOffset(te,$))):Ce(t.POLYGON_OFFSET_FILL)}function It(N){N?oe(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function qe(N){N===void 0&&(N=t.TEXTURE0+H-1),se!==N&&(t.activeTexture(N),se=N)}function st(N,te,$){$===void 0&&(se===null?$=t.TEXTURE0+H-1:$=se);let he=xe[$];he===void 0&&(he={type:void 0,texture:void 0},xe[$]=he),(he.type!==N||he.texture!==te)&&(se!==$&&(t.activeTexture($),se=$),t.bindTexture(N,te||pe[N]),he.type=N,he.texture=te)}function ue(){let N=xe[se];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function pt(){try{t.compressedTexImage2D(...arguments)}catch(N){Le("WebGLState:",N)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(N){Le("WebGLState:",N)}}function S(){try{t.texSubImage2D(...arguments)}catch(N){Le("WebGLState:",N)}}function F(){try{t.texSubImage3D(...arguments)}catch(N){Le("WebGLState:",N)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(N){Le("WebGLState:",N)}}function ee(){try{t.compressedTexSubImage3D(...arguments)}catch(N){Le("WebGLState:",N)}}function ae(){try{t.texStorage2D(...arguments)}catch(N){Le("WebGLState:",N)}}function le(){try{t.texStorage3D(...arguments)}catch(N){Le("WebGLState:",N)}}function q(){try{t.texImage2D(...arguments)}catch(N){Le("WebGLState:",N)}}function j(){try{t.texImage3D(...arguments)}catch(N){Le("WebGLState:",N)}}function me(N){return f[N]!==void 0?f[N]:t.getParameter(N)}function ve(N,te){f[N]!==te&&(t.pixelStorei(N,te),f[N]=te)}function ce(N){rt.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),rt.copy(N))}function re(N){ze.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),ze.copy(N))}function De(N,te){let $=c.get(te);$===void 0&&($=new WeakMap,c.set(te,$));let he=$.get(N);he===void 0&&(he=t.getUniformBlockIndex(te,N.name),$.set(N,he))}function Fe(N,te){let he=c.get(te).get(N);l.get(te)!==he&&(t.uniformBlockBinding(te,he,N.__bindingPointIndex),l.set(te,he))}function Me(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},f={},se=null,xe={},d={},m=new WeakMap,y=[],b=null,x=!1,u=null,p=null,v=null,M=null,C=null,E=null,R=null,g=new Qe(0,0,0),T=0,P=!1,I=null,B=null,W=null,X=null,z=null,rt.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:Ce,bindFramebuffer:Ue,drawBuffers:Ie,useProgram:ut,setBlending:lt,setMaterial:He,setFlipSided:Pt,setCullFace:ft,setLineWidth:Ut,setPolygonOffset:D,setScissorTest:It,activeTexture:qe,bindTexture:st,unbindTexture:ue,compressedTexImage2D:pt,compressedTexImage3D:A,texImage2D:q,texImage3D:j,pixelStorei:ve,getParameter:me,updateUBOMapping:De,uniformBlockBinding:Fe,texStorage2D:ae,texStorage3D:le,texSubImage2D:S,texSubImage3D:F,compressedTexSubImage2D:K,compressedTexSubImage3D:ee,scissor:ce,viewport:re,reset:Me}}function lC(t,e,n,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,f=new Set,d,m=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,S){return y?new OffscreenCanvas(A,S):Ko("canvas")}function x(A,S,F){let K=1,ee=pt(A);if((ee.width>F||ee.height>F)&&(K=F/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ae=Math.floor(K*ee.width),le=Math.floor(K*ee.height);d===void 0&&(d=b(ae,le));let q=S?b(ae,le):d;return q.width=ae,q.height=le,q.getContext("2d").drawImage(A,0,0,ae,le),Ne("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ae+"x"+le+")."),q}else return"data"in A&&Ne("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function u(A){return A.generateMipmaps}function p(A){t.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(A,S,F,K,ee,ae=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le;K&&(le=e.get("EXT_texture_norm16"),le||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=S;if(S===t.RED&&(F===t.FLOAT&&(q=t.R32F),F===t.HALF_FLOAT&&(q=t.R16F),F===t.UNSIGNED_BYTE&&(q=t.R8),F===t.UNSIGNED_SHORT&&le&&(q=le.R16_EXT),F===t.SHORT&&le&&(q=le.R16_SNORM_EXT)),S===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(q=t.R8UI),F===t.UNSIGNED_SHORT&&(q=t.R16UI),F===t.UNSIGNED_INT&&(q=t.R32UI),F===t.BYTE&&(q=t.R8I),F===t.SHORT&&(q=t.R16I),F===t.INT&&(q=t.R32I)),S===t.RG&&(F===t.FLOAT&&(q=t.RG32F),F===t.HALF_FLOAT&&(q=t.RG16F),F===t.UNSIGNED_BYTE&&(q=t.RG8),F===t.UNSIGNED_SHORT&&le&&(q=le.RG16_EXT),F===t.SHORT&&le&&(q=le.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(q=t.RG8UI),F===t.UNSIGNED_SHORT&&(q=t.RG16UI),F===t.UNSIGNED_INT&&(q=t.RG32UI),F===t.BYTE&&(q=t.RG8I),F===t.SHORT&&(q=t.RG16I),F===t.INT&&(q=t.RG32I)),S===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(q=t.RGB8UI),F===t.UNSIGNED_SHORT&&(q=t.RGB16UI),F===t.UNSIGNED_INT&&(q=t.RGB32UI),F===t.BYTE&&(q=t.RGB8I),F===t.SHORT&&(q=t.RGB16I),F===t.INT&&(q=t.RGB32I)),S===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),F===t.UNSIGNED_INT&&(q=t.RGBA32UI),F===t.BYTE&&(q=t.RGBA8I),F===t.SHORT&&(q=t.RGBA16I),F===t.INT&&(q=t.RGBA32I)),S===t.RGB&&(F===t.UNSIGNED_SHORT&&le&&(q=le.RGB16_EXT),F===t.SHORT&&le&&(q=le.RGB16_SNORM_EXT),F===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),F===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),S===t.RGBA){let j=ae?$o:Ke.getTransfer(ee);F===t.FLOAT&&(q=t.RGBA32F),F===t.HALF_FLOAT&&(q=t.RGBA16F),F===t.UNSIGNED_BYTE&&(q=j===at?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT&&le&&(q=le.RGBA16_EXT),F===t.SHORT&&le&&(q=le.RGBA16_SNORM_EXT),F===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function C(A,S){let F;return A?S===null||S===gi||S===Fa?F=t.DEPTH24_STENCIL8:S===xi?F=t.DEPTH32F_STENCIL8:S===Ua&&(F=t.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===gi||S===Fa?F=t.DEPTH_COMPONENT24:S===xi?F=t.DEPTH_COMPONENT32F:S===Ua&&(F=t.DEPTH_COMPONENT16),F}function E(A,S){return u(A)===!0||A.isFramebufferTexture&&A.minFilter!==Yt&&A.minFilter!==Qt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){let S=A.target;S.removeEventListener("dispose",R),T(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&f.delete(S)}function g(A){let S=A.target;S.removeEventListener("dispose",g),I(S)}function T(A){let S=i.get(A);if(S.__webglInit===void 0)return;let F=A.source,K=m.get(F);if(K){let ee=K[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(A),Object.keys(K).length===0&&m.delete(F)}i.remove(A)}function P(A){let S=i.get(A);t.deleteTexture(S.__webglTexture);let F=A.source,K=m.get(F);delete K[S.__cacheKey],a.memory.textures--}function I(A){let S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let ee=0;ee<S.__webglFramebuffer[K].length;ee++)t.deleteFramebuffer(S.__webglFramebuffer[K][ee]);else t.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)t.deleteFramebuffer(S.__webglFramebuffer[K]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let F=A.textures;for(let K=0,ee=F.length;K<ee;K++){let ae=i.get(F[K]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(F[K])}i.remove(A)}let B=0;function W(){B=0}function X(){return B}function z(A){B=A}function H(){let A=B;return A>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),B+=1,A}function U(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Y(A,S){let F=i.get(A);if(A.isVideoTexture&&st(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){let K=A.image;if(K===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(F,A,S);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+S)}function Z(A,S){let F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Ce(F,A,S);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+S)}function se(A,S){let F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Ce(F,A,S);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+S)}function xe(A,S){let F=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&F.__version!==A.version){Ue(F,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+S)}let be={[Fu]:t.REPEAT,[Ri]:t.CLAMP_TO_EDGE,[ku]:t.MIRRORED_REPEAT},Ze={[Yt]:t.NEAREST,[Q_]:t.NEAREST_MIPMAP_NEAREST,[pl]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[ud]:t.LINEAR_MIPMAP_NEAREST,[jr]:t.LINEAR_MIPMAP_LINEAR},rt={[ny]:t.NEVER,[oy]:t.ALWAYS,[iy]:t.LESS,[$d]:t.LEQUAL,[ry]:t.EQUAL,[Kd]:t.GEQUAL,[sy]:t.GREATER,[ay]:t.NOTEQUAL};function ze(A,S){if(S.type===xi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Qt||S.magFilter===ud||S.magFilter===pl||S.magFilter===jr||S.minFilter===Qt||S.minFilter===ud||S.minFilter===pl||S.minFilter===jr)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,be[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,be[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,be[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Ze[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Ze[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,rt[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Yt||S.minFilter!==pl&&S.minFilter!==jr||S.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function J(A,S){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));let K=S.source,ee=m.get(K);ee===void 0&&(ee={},m.set(K,ee));let ae=U(S);if(ae!==A.__cacheKey){ee[ae]===void 0&&(ee[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ee[ae].usedTimes++;let le=ee[A.__cacheKey];le!==void 0&&(ee[A.__cacheKey].usedTimes--,le.usedTimes===0&&P(S)),A.__cacheKey=ae,A.__webglTexture=ee[ae].texture}return F}function pe(A,S,F){return Math.floor(Math.floor(A/F)/S)}function oe(A,S,F,K){let ae=A.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,F,K,S.data);else{ae.sort((ve,ce)=>ve.start-ce.start);let le=0;for(let ve=1;ve<ae.length;ve++){let ce=ae[le],re=ae[ve],De=ce.start+ce.count,Fe=pe(re.start,S.width,4),Me=pe(ce.start,S.width,4);re.start<=De+1&&Fe===Me&&pe(re.start+re.count-1,S.width,4)===Fe?ce.count=Math.max(ce.count,re.start+re.count-ce.start):(++le,ae[le]=re)}ae.length=le+1;let q=n.getParameter(t.UNPACK_ROW_LENGTH),j=n.getParameter(t.UNPACK_SKIP_PIXELS),me=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let ve=0,ce=ae.length;ve<ce;ve++){let re=ae[ve],De=Math.floor(re.start/4),Fe=Math.ceil(re.count/4),Me=De%S.width,N=Math.floor(De/S.width),te=Fe,$=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Me),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Me,N,te,$,F,K,S.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,j),n.pixelStorei(t.UNPACK_SKIP_ROWS,me)}}function Ce(A,S,F){let K=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=t.TEXTURE_3D);let ee=J(A,S),ae=S.source;n.bindTexture(K,A.__webglTexture,t.TEXTURE0+F);let le=i.get(ae);if(ae.version!==le.__version||ee===!0){if(n.activeTexture(t.TEXTURE0+F),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let $=Ke.getPrimaries(Ke.workingColorSpace),he=S.colorSpace===cr?null:Ke.getPrimaries(S.colorSpace),ie=S.colorSpace===cr||$===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let j=x(S.image,!1,r.maxTextureSize);j=ue(S,j);let me=s.convert(S.format,S.colorSpace),ve=s.convert(S.type),ce=M(S.internalFormat,me,ve,S.normalized,S.colorSpace,S.isVideoTexture);ze(K,S);let re,De=S.mipmaps,Fe=S.isVideoTexture!==!0,Me=le.__version===void 0||ee===!0,N=ae.dataReady,te=E(S,j);if(S.isDepthTexture)ce=C(S.format===Zr,S.type),Me&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,ce,j.width,j.height):n.texImage2D(t.TEXTURE_2D,0,ce,j.width,j.height,0,me,ve,null));else if(S.isDataTexture)if(De.length>0){Fe&&Me&&n.texStorage2D(t.TEXTURE_2D,te,ce,De[0].width,De[0].height);for(let $=0,he=De.length;$<he;$++)re=De[$],Fe?N&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,re.width,re.height,me,ve,re.data):n.texImage2D(t.TEXTURE_2D,$,ce,re.width,re.height,0,me,ve,re.data);S.generateMipmaps=!1}else Fe?(Me&&n.texStorage2D(t.TEXTURE_2D,te,ce,j.width,j.height),N&&oe(S,j,me,ve)):n.texImage2D(t.TEXTURE_2D,0,ce,j.width,j.height,0,me,ve,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&Me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,te,ce,De[0].width,De[0].height,j.depth);for(let $=0,he=De.length;$<he;$++)if(re=De[$],S.format!==Qn)if(me!==null)if(Fe){if(N)if(S.layerUpdates.size>0){let ie=jm(re.width,re.height,S.format,S.type);for(let Q of S.layerUpdates){let we=re.data.subarray(Q*ie/re.data.BYTES_PER_ELEMENT,(Q+1)*ie/re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,Q,re.width,re.height,1,me,we)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,j.depth,me,re.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,ce,re.width,re.height,j.depth,0,re.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,j.depth,me,ve,re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,ce,re.width,re.height,j.depth,0,me,ve,re.data)}else{Fe&&Me&&n.texStorage2D(t.TEXTURE_2D,te,ce,De[0].width,De[0].height);for(let $=0,he=De.length;$<he;$++)re=De[$],S.format!==Qn?me!==null?Fe?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,re.width,re.height,me,re.data):n.compressedTexImage2D(t.TEXTURE_2D,$,ce,re.width,re.height,0,re.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?N&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,re.width,re.height,me,ve,re.data):n.texImage2D(t.TEXTURE_2D,$,ce,re.width,re.height,0,me,ve,re.data)}else if(S.isDataArrayTexture)if(Fe){if(Me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,te,ce,j.width,j.height,j.depth),N)if(S.layerUpdates.size>0){let $=jm(j.width,j.height,S.format,S.type);for(let he of S.layerUpdates){let ie=j.data.subarray(he*$/j.data.BYTES_PER_ELEMENT,(he+1)*$/j.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,j.width,j.height,1,me,ve,ie)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,me,ve,j.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ce,j.width,j.height,j.depth,0,me,ve,j.data);else if(S.isData3DTexture)Fe?(Me&&n.texStorage3D(t.TEXTURE_3D,te,ce,j.width,j.height,j.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,me,ve,j.data)):n.texImage3D(t.TEXTURE_3D,0,ce,j.width,j.height,j.depth,0,me,ve,j.data);else if(S.isFramebufferTexture){if(Me)if(Fe)n.texStorage2D(t.TEXTURE_2D,te,ce,j.width,j.height);else{let $=j.width,he=j.height;for(let ie=0;ie<te;ie++)n.texImage2D(t.TEXTURE_2D,ie,ce,$,he,0,me,ve,null),$>>=1,he>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){let $=t.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),j.parentNode!==$){$.appendChild(j),f.add(S),$.onpaint=ke=>{let Mt=ke.changedElements;for(let et of f)Mt.includes(et.image)&&(et.needsUpdate=!0)},$.requestPaint();return}let he=0,ie=t.RGBA,Q=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,he,ie,Q,we,j),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(De.length>0){if(Fe&&Me){let $=pt(De[0]);n.texStorage2D(t.TEXTURE_2D,te,ce,$.width,$.height)}for(let $=0,he=De.length;$<he;$++)re=De[$],Fe?N&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,me,ve,re):n.texImage2D(t.TEXTURE_2D,$,ce,me,ve,re);S.generateMipmaps=!1}else if(Fe){if(Me){let $=pt(j);n.texStorage2D(t.TEXTURE_2D,te,ce,$.width,$.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,ve,j)}else n.texImage2D(t.TEXTURE_2D,0,ce,me,ve,j);u(S)&&p(K),le.__version=ae.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ue(A,S,F){if(S.image.length!==6)return;let K=J(A,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+F);let ae=i.get(ee);if(ee.version!==ae.__version||K===!0){n.activeTexture(t.TEXTURE0+F);let le=Ke.getPrimaries(Ke.workingColorSpace),q=S.colorSpace===cr?null:Ke.getPrimaries(S.colorSpace),j=S.colorSpace===cr||le===q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let me=S.isCompressedTexture||S.image[0].isCompressedTexture,ve=S.image[0]&&S.image[0].isDataTexture,ce=[];for(let Q=0;Q<6;Q++)!me&&!ve?ce[Q]=x(S.image[Q],!0,r.maxCubemapSize):ce[Q]=ve?S.image[Q].image:S.image[Q],ce[Q]=ue(S,ce[Q]);let re=ce[0],De=s.convert(S.format,S.colorSpace),Fe=s.convert(S.type),Me=M(S.internalFormat,De,Fe,S.normalized,S.colorSpace),N=S.isVideoTexture!==!0,te=ae.__version===void 0||K===!0,$=ee.dataReady,he=E(S,re);ze(t.TEXTURE_CUBE_MAP,S);let ie;if(me){N&&te&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Me,re.width,re.height);for(let Q=0;Q<6;Q++){ie=ce[Q].mipmaps;for(let we=0;we<ie.length;we++){let ke=ie[we];S.format!==Qn?De!==null?N?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,ke.width,ke.height,De,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,Me,ke.width,ke.height,0,ke.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,ke.width,ke.height,De,Fe,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,Me,ke.width,ke.height,0,De,Fe,ke.data)}}}else{if(ie=S.mipmaps,N&&te){ie.length>0&&he++;let Q=pt(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Me,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ve){N?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ce[Q].width,ce[Q].height,De,Fe,ce[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Me,ce[Q].width,ce[Q].height,0,De,Fe,ce[Q].data);for(let we=0;we<ie.length;we++){let Mt=ie[we].image[Q].image;N?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,Mt.width,Mt.height,De,Fe,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,Me,Mt.width,Mt.height,0,De,Fe,Mt.data)}}else{N?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,De,Fe,ce[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Me,De,Fe,ce[Q]);for(let we=0;we<ie.length;we++){let ke=ie[we];N?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,De,Fe,ke.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,Me,De,Fe,ke.image[Q])}}}u(S)&&p(t.TEXTURE_CUBE_MAP),ae.__version=ee.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ie(A,S,F,K,ee,ae){let le=s.convert(F.format,F.colorSpace),q=s.convert(F.type),j=M(F.internalFormat,le,q,F.normalized,F.colorSpace),me=i.get(S),ve=i.get(F);if(ve.__renderTarget=S,!me.__hasExternalTextures){let ce=Math.max(1,S.width>>ae),re=Math.max(1,S.height>>ae);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ae,j,ce,re,S.depth,0,le,q,null):n.texImage2D(ee,ae,j,ce,re,0,le,q,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),qe(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,ee,ve.__webglTexture,0,It(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,ee,ve.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ut(A,S,F){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){let K=S.depthTexture,ee=K&&K.isDepthTexture?K.type:null,ae=C(S.stencilBuffer,ee),le=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;qe(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,It(S),ae,S.width,S.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,It(S),ae,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ae,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,A)}else{let K=S.textures;for(let ee=0;ee<K.length;ee++){let ae=K[ee],le=s.convert(ae.format,ae.colorSpace),q=s.convert(ae.type),j=M(ae.internalFormat,le,q,ae.normalized,ae.colorSpace);qe(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,It(S),j,S.width,S.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,It(S),j,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,j,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ge(A,S,F){let K=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(S.depthTexture);if(ee.__renderTarget=S,(!ee.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),ze(t.TEXTURE_CUBE_MAP,S.depthTexture);let me=s.convert(S.depthTexture.format),ve=s.convert(S.depthTexture.type),ce;S.depthTexture.format===Pi?ce=t.DEPTH_COMPONENT24:S.depthTexture.format===Zr&&(ce=t.DEPTH24_STENCIL8);for(let re=0;re<6;re++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ce,S.width,S.height,0,me,ve,null)}}else Y(S.depthTexture,0);let ae=ee.__webglTexture,le=It(S),q=K?t.TEXTURE_CUBE_MAP_POSITIVE_X+F:t.TEXTURE_2D,j=S.depthTexture.format===Zr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Pi)qe(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,q,ae,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,j,q,ae,0);else if(S.depthTexture.format===Zr)qe(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,q,ae,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,j,q,ae,0);else throw new Error("Unknown depthTexture format")}function Ye(A){let S=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let K=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){let ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=K}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(F)for(let K=0;K<6;K++)Ge(S.__webglFramebuffer[K],A,K);else{let K=A.texture.mipmaps;K&&K.length>0?Ge(S.__webglFramebuffer[0],A,0):Ge(S.__webglFramebuffer,A,0)}else if(F){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=t.createRenderbuffer(),ut(S.__webglDepthbuffer[K],A,!1);else{let ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ae)}}else{let K=A.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),ut(S.__webglDepthbuffer,A,!1);else{let ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ae)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function lt(A,S,F){let K=i.get(A);S!==void 0&&Ie(K.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Ye(A)}function He(A){let S=A.texture,F=i.get(A),K=i.get(S);A.addEventListener("dispose",g);let ee=A.textures,ae=A.isWebGLCubeRenderTarget===!0,le=ee.length>1;if(le||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=S.version,a.memory.textures++),ae){F.__webglFramebuffer=[];for(let q=0;q<6;q++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[q]=[];for(let j=0;j<S.mipmaps.length;j++)F.__webglFramebuffer[q][j]=t.createFramebuffer()}else F.__webglFramebuffer[q]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let q=0;q<S.mipmaps.length;q++)F.__webglFramebuffer[q]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(le)for(let q=0,j=ee.length;q<j;q++){let me=i.get(ee[q]);me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&qe(A)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let q=0;q<ee.length;q++){let j=ee[q];F.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[q]);let me=s.convert(j.format,j.colorSpace),ve=s.convert(j.type),ce=M(j.internalFormat,me,ve,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),re=It(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ce,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,F.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),ut(F.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),ze(t.TEXTURE_CUBE_MAP,S);for(let q=0;q<6;q++)if(S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)Ie(F.__webglFramebuffer[q][j],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,j);else Ie(F.__webglFramebuffer[q],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);u(S)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let q=0,j=ee.length;q<j;q++){let me=ee[q],ve=i.get(me),ce=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,ve.__webglTexture),ze(ce,me),Ie(F.__webglFramebuffer,A,me,t.COLOR_ATTACHMENT0+q,ce,0),u(me)&&p(ce)}n.unbindTexture()}else{let q=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(q=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(q,K.__webglTexture),ze(q,S),S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)Ie(F.__webglFramebuffer[j],A,S,t.COLOR_ATTACHMENT0,q,j);else Ie(F.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,q,0);u(S)&&p(q),n.unbindTexture()}A.depthBuffer&&Ye(A)}function Pt(A){let S=A.textures;for(let F=0,K=S.length;F<K;F++){let ee=S[F];if(u(ee)){let ae=v(A),le=i.get(ee).__webglTexture;n.bindTexture(ae,le),p(ae),n.unbindTexture()}}}let ft=[],Ut=[];function D(A){if(A.samples>0){if(qe(A)===!1){let S=A.textures,F=A.width,K=A.height,ee=t.COLOR_BUFFER_BIT,ae=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(A),q=S.length>1;if(q)for(let me=0;me<S.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let j=A.texture.mipmaps;j&&j.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let me=0;me<S.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[me]);let ve=i.get(S[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ve,0)}t.blitFramebuffer(0,0,F,K,0,0,F,K,ee,t.NEAREST),l===!0&&(ft.length=0,Ut.length=0,ft.push(t.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ft.push(ae),Ut.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ut)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ft))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let me=0;me<S.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,le.__webglColorRenderbuffer[me]);let ve=i.get(S[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function It(A){return Math.min(r.maxSamples,A.samples)}function qe(A){let S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function st(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function ue(A,S){let F=A.colorSpace,K=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Yo&&F!==cr&&(Ke.getTransfer(F)===at?(K!==Qn||ee!==En)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",F)),S}function pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.getTextureUnits=X,this.setTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=Z,this.setTexture3D=se,this.setTextureCube=xe,this.rebindTextures=lt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function cC(t,e){function n(i,r=cr){let s,a=Ke.getTransfer(r);if(i===En)return t.UNSIGNED_BYTE;if(i===hd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===fd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===zm)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Vm)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Om)return t.BYTE;if(i===Bm)return t.SHORT;if(i===Ua)return t.UNSIGNED_SHORT;if(i===dd)return t.INT;if(i===gi)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===Ui)return t.HALF_FLOAT;if(i===Gm)return t.ALPHA;if(i===Hm)return t.RGB;if(i===Qn)return t.RGBA;if(i===Pi)return t.DEPTH_COMPONENT;if(i===Zr)return t.DEPTH_STENCIL;if(i===Wm)return t.RED;if(i===pd)return t.RED_INTEGER;if(i===Jr)return t.RG;if(i===md)return t.RG_INTEGER;if(i===gd)return t.RGBA_INTEGER;if(i===ml||i===gl||i===xl||i===vl)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xd||i===vd||i===_d||i===yd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_d)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sd||i===Md||i===bd||i===wd||i===Ed||i===_l||i===Td)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sd||i===Md)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===wd)return s.COMPRESSED_R11_EAC;if(i===Ed)return s.COMPRESSED_SIGNED_R11_EAC;if(i===_l)return s.COMPRESSED_RG11_EAC;if(i===Td)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ad||i===Cd||i===Rd||i===Pd||i===Id||i===Nd||i===Ld||i===Dd||i===Ud||i===Fd||i===kd||i===Od||i===Bd||i===zd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ad)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Id)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ld)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ud)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Od)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vd||i===Gd||i===Hd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vd)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wd||i===Xd||i===yl||i===qd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var uC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dC=`
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

}`,ug=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new il(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Vn({vertexShader:uC,fragmentShader:dC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new mn(new sl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dg=class extends Ii{constructor(e,n){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,y=null,b=typeof XRWebGLBinding<"u",x=new ug,u={},p=n.getContextAttributes(),v=null,M=null,C=[],E=[],R=new it,g=null,T=new Jt;T.viewport=new Tt;let P=new Jt;P.viewport=new Tt;let I=[T,P],B=new od,W=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pe=C[J];return pe===void 0&&(pe=new Ca,C[J]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(J){let pe=C[J];return pe===void 0&&(pe=new Ca,C[J]=pe),pe.getGripSpace()},this.getHand=function(J){let pe=C[J];return pe===void 0&&(pe=new Ca,C[J]=pe),pe.getHandSpace()};function z(J){let pe=E.indexOf(J.inputSource);if(pe===-1)return;let oe=C[pe];oe!==void 0&&(oe.update(J.inputSource,J.frame,c||a),oe.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",U);for(let J=0;J<C.length;J++){let pe=E[J];pe!==null&&(E[J]=null,C[J].disconnect(pe))}W=null,X=null,x.reset();for(let J in u)delete u[J];e.setRenderTarget(v),m=null,d=null,f=null,r=null,M=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",H),r.addEventListener("inputsourceschange",U),p.xrCompatible!==!0&&await n.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ce=null,Ue=null;p.depth&&(Ue=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=p.stencil?Zr:Pi,Ce=p.stencil?Fa:gi);let Ie={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Bn(d.textureWidth,d.textureHeight,{format:Qn,type:En,depthTexture:new lr(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let oe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Bn(m.framebufferWidth,m.framebufferHeight,{format:Qn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function U(J){for(let pe=0;pe<J.removed.length;pe++){let oe=J.removed[pe],Ce=E.indexOf(oe);Ce>=0&&(E[Ce]=null,C[Ce].disconnect(oe))}for(let pe=0;pe<J.added.length;pe++){let oe=J.added[pe],Ce=E.indexOf(oe);if(Ce===-1){for(let Ie=0;Ie<C.length;Ie++)if(Ie>=E.length){E.push(oe),Ce=Ie;break}else if(E[Ie]===null){E[Ie]=oe,Ce=Ie;break}if(Ce===-1)break}let Ue=C[Ce];Ue&&Ue.connect(oe)}}let Y=new G,Z=new G;function se(J,pe,oe){Y.setFromMatrixPosition(pe.matrixWorld),Z.setFromMatrixPosition(oe.matrixWorld);let Ce=Y.distanceTo(Z),Ue=pe.projectionMatrix.elements,Ie=oe.projectionMatrix.elements,ut=Ue[14]/(Ue[10]-1),Ge=Ue[14]/(Ue[10]+1),Ye=(Ue[9]+1)/Ue[5],lt=(Ue[9]-1)/Ue[5],He=(Ue[8]-1)/Ue[0],Pt=(Ie[8]+1)/Ie[0],ft=ut*He,Ut=ut*Pt,D=Ce/(-He+Pt),It=D*-He;if(pe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(It),J.translateZ(D),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ue[10]===-1)J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{let qe=ut+D,st=Ge+D,ue=ft-It,pt=Ut+(Ce-It),A=Ye*Ge/st*qe,S=lt*Ge/st*qe;J.projectionMatrix.makePerspective(ue,pt,A,S,qe,st),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function xe(J,pe){pe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let pe=J.near,oe=J.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(oe=x.depthFar)),B.near=P.near=T.near=pe,B.far=P.far=T.far=oe,(W!==B.near||X!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),W=B.near,X=B.far),B.layers.mask=J.layers.mask|6,T.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;let Ce=J.parent,Ue=B.cameras;xe(B,Ce);for(let Ie=0;Ie<Ue.length;Ie++)xe(Ue[Ie],Ce);Ue.length===2?se(B,T,P):B.projectionMatrix.copy(T.projectionMatrix),be(J,B,Ce)};function be(J,pe,oe){oe===null?J.matrix.copy(pe.matrixWorld):(J.matrix.copy(oe.matrixWorld),J.matrix.invert(),J.matrix.multiply(pe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=zu*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(B)},this.getCameraTexture=function(J){return u[J]};let Ze=null;function rt(J,pe){if(h=pe.getViewerPose(c||a),y=pe,h!==null){let oe=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Ce=!1;oe.length!==B.cameras.length&&(B.cameras.length=0,Ce=!0);for(let Ge=0;Ge<oe.length;Ge++){let Ye=oe[Ge],lt=null;if(m!==null)lt=m.getViewport(Ye);else{let Pt=f.getViewSubImage(d,Ye);lt=Pt.viewport,Ge===0&&(e.setRenderTargetTextures(M,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(M))}let He=I[Ge];He===void 0&&(He=new Jt,He.layers.enable(Ge),He.viewport=new Tt,I[Ge]=He),He.matrix.fromArray(Ye.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ye.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(lt.x,lt.y,lt.width,lt.height),Ge===0&&(B.matrix.copy(He.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ce===!0&&B.cameras.push(He)}let Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){f=i.getBinding();let Ge=f.getDepthInformation(oe[0]);Ge&&Ge.isValid&&Ge.texture&&x.init(Ge,r.renderState)}if(Ue&&Ue.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let Ge=0;Ge<oe.length;Ge++){let Ye=oe[Ge].camera;if(Ye){let lt=u[Ye];lt||(lt=new il,u[Ye]=lt);let He=f.getCameraImage(Ye);lt.sourceTexture=He}}}}for(let oe=0;oe<C.length;oe++){let Ce=E[oe],Ue=C[oe];Ce!==null&&Ue!==void 0&&Ue.update(Ce,pe,c||a)}Ze&&Ze(J,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),y=null}let ze=new ky;ze.setAnimationLoop(rt),this.setAnimationLoop=function(J){Ze=J},this.dispose=function(){}}},hC=new Rt,Hy=new Oe;Hy.set(-1,0,0,0,1,0,0,0,1);function fC(t,e){function n(x,u){x.matrixAutoUpdate===!0&&x.updateMatrix(),u.value.copy(x.matrix)}function i(x,u){u.color.getRGB(x.fogColor.value,Ym(t)),u.isFog?(x.fogNear.value=u.near,x.fogFar.value=u.far):u.isFogExp2&&(x.fogDensity.value=u.density)}function r(x,u,p,v,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(x,u):u.isMeshLambertMaterial?(s(x,u),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(x,u),f(x,u)):u.isMeshPhongMaterial?(s(x,u),h(x,u),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(x,u),d(x,u),u.isMeshPhysicalMaterial&&m(x,u,M)):u.isMeshMatcapMaterial?(s(x,u),y(x,u)):u.isMeshDepthMaterial?s(x,u):u.isMeshDistanceMaterial?(s(x,u),b(x,u)):u.isMeshNormalMaterial?s(x,u):u.isLineBasicMaterial?(a(x,u),u.isLineDashedMaterial&&o(x,u)):u.isPointsMaterial?l(x,u,p,v):u.isSpriteMaterial?c(x,u):u.isShadowMaterial?(x.color.value.copy(u.color),x.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(x,u){x.opacity.value=u.opacity,u.color&&x.diffuse.value.copy(u.color),u.emissive&&x.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(x.map.value=u.map,n(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.bumpMap&&(x.bumpMap.value=u.bumpMap,n(u.bumpMap,x.bumpMapTransform),x.bumpScale.value=u.bumpScale,u.side===gn&&(x.bumpScale.value*=-1)),u.normalMap&&(x.normalMap.value=u.normalMap,n(u.normalMap,x.normalMapTransform),x.normalScale.value.copy(u.normalScale),u.side===gn&&x.normalScale.value.negate()),u.displacementMap&&(x.displacementMap.value=u.displacementMap,n(u.displacementMap,x.displacementMapTransform),x.displacementScale.value=u.displacementScale,x.displacementBias.value=u.displacementBias),u.emissiveMap&&(x.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,x.emissiveMapTransform)),u.specularMap&&(x.specularMap.value=u.specularMap,n(u.specularMap,x.specularMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest);let p=e.get(u),v=p.envMap,M=p.envMapRotation;v&&(x.envMap.value=v,x.envMapRotation.value.setFromMatrix4(hC.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Hy),x.reflectivity.value=u.reflectivity,x.ior.value=u.ior,x.refractionRatio.value=u.refractionRatio),u.lightMap&&(x.lightMap.value=u.lightMap,x.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,x.lightMapTransform)),u.aoMap&&(x.aoMap.value=u.aoMap,x.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,x.aoMapTransform))}function a(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,u.map&&(x.map.value=u.map,n(u.map,x.mapTransform))}function o(x,u){x.dashSize.value=u.dashSize,x.totalSize.value=u.dashSize+u.gapSize,x.scale.value=u.scale}function l(x,u,p,v){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.size.value=u.size*p,x.scale.value=v*.5,u.map&&(x.map.value=u.map,n(u.map,x.uvTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function c(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.rotation.value=u.rotation,u.map&&(x.map.value=u.map,n(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function h(x,u){x.specular.value.copy(u.specular),x.shininess.value=Math.max(u.shininess,1e-4)}function f(x,u){u.gradientMap&&(x.gradientMap.value=u.gradientMap)}function d(x,u){x.metalness.value=u.metalness,u.metalnessMap&&(x.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,x.metalnessMapTransform)),x.roughness.value=u.roughness,u.roughnessMap&&(x.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,x.roughnessMapTransform)),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)}function m(x,u,p){x.ior.value=u.ior,u.sheen>0&&(x.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),x.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(x.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,x.sheenColorMapTransform)),u.sheenRoughnessMap&&(x.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,x.sheenRoughnessMapTransform))),u.clearcoat>0&&(x.clearcoat.value=u.clearcoat,x.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(x.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,x.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(x.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===gn&&x.clearcoatNormalScale.value.negate())),u.dispersion>0&&(x.dispersion.value=u.dispersion),u.iridescence>0&&(x.iridescence.value=u.iridescence,x.iridescenceIOR.value=u.iridescenceIOR,x.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(x.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,x.iridescenceMapTransform)),u.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),u.transmission>0&&(x.transmission.value=u.transmission,x.transmissionSamplerMap.value=p.texture,x.transmissionSamplerSize.value.set(p.width,p.height),u.transmissionMap&&(x.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,x.transmissionMapTransform)),x.thickness.value=u.thickness,u.thicknessMap&&(x.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=u.attenuationDistance,x.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(x.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(x.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=u.specularIntensity,x.specularColor.value.copy(u.specularColor),u.specularColorMap&&(x.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,x.specularColorMapTransform)),u.specularIntensityMap&&(x.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,u){u.matcap&&(x.matcap.value=u.matcap)}function b(x,u){let p=e.get(u).light;x.referencePosition.value.setFromMatrixPosition(p.matrixWorld),x.nearDistance.value=p.shadow.camera.near,x.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pC(t,e,n,i){let r={},s={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,v){let M=v.program;i.uniformBlockBinding(p,M)}function c(p,v){let M=r[p.id];M===void 0&&(y(p),M=h(p),r[p.id]=M,p.addEventListener("dispose",x));let C=v.program;i.updateUBOMapping(p,C);let E=e.render.frame;s[p.id]!==E&&(d(p),s[p.id]=E)}function h(p){let v=f();p.__bindingPointIndex=v;let M=t.createBuffer(),C=p.__size,E=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function f(){for(let p=0;p<o;p++)if(a.indexOf(p)===-1)return a.push(p),p;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(p){let v=r[p.id],M=p.uniforms,C=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let E=0,R=M.length;E<R;E++){let g=Array.isArray(M[E])?M[E]:[M[E]];for(let T=0,P=g.length;T<P;T++){let I=g[T];if(m(I,E,T,C)===!0){let B=I.__offset,W=Array.isArray(I.value)?I.value:[I.value],X=0;for(let z=0;z<W.length;z++){let H=W[z],U=b(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,B+X,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):ArrayBuffer.isView(H)?I.__data.set(new H.constructor(H.buffer,H.byteOffset,I.__data.length)):(H.toArray(I.__data,X),X+=U.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(p,v,M,C){let E=p.value,R=v+"_"+M;if(C[R]===void 0)return typeof E=="number"||typeof E=="boolean"?C[R]=E:ArrayBuffer.isView(E)?C[R]=E.slice():C[R]=E.clone(),!0;{let g=C[R];if(typeof E=="number"||typeof E=="boolean"){if(g!==E)return C[R]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(g.equals(E)===!1)return g.copy(E),!0}}return!1}function y(p){let v=p.uniforms,M=0,C=16;for(let R=0,g=v.length;R<g;R++){let T=Array.isArray(v[R])?v[R]:[v[R]];for(let P=0,I=T.length;P<I;P++){let B=T[P],W=Array.isArray(B.value)?B.value:[B.value];for(let X=0,z=W.length;X<z;X++){let H=W[X],U=b(H),Y=M%C,Z=Y%U.boundary,se=Y+Z;M+=Z,se!==0&&C-se<U.storage&&(M+=C-se),B.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=U.storage}}}let E=M%C;return E>0&&(M+=C-E),p.__size=M,p.__cache={},this}function b(p){let v={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(v.boundary=4,v.storage=4):p.isVector2?(v.boundary=8,v.storage=8):p.isVector3||p.isColor?(v.boundary=16,v.storage=12):p.isVector4?(v.boundary=16,v.storage=16):p.isMatrix3?(v.boundary=48,v.storage=48):p.isMatrix4?(v.boundary=64,v.storage=64):p.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(v.boundary=16,v.storage=p.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",p),v}function x(p){let v=p.target;v.removeEventListener("dispose",x);let M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(let p in r)t.deleteBuffer(r[p]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}var mC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fi=null;function gC(){return Fi===null&&(Fi=new Xu(mC,16,16,Jr,Ui),Fi.name="DFG_LUT",Fi.minFilter=Qt,Fi.magFilter=Qt,Fi.wrapS=Ri,Fi.wrapT=Ri,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}var eh=class{constructor(e={}){let{canvas:n=ly(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=En}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=a;let b=m,x=new Set([gd,md,pd]),u=new Set([En,gi,Ua,Fa,hd,fd]),p=new Uint32Array(4),v=new Int32Array(4),M=new G,C=null,E=null,R=[],g=[],T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,B=null;this._outputColorSpace=kn;let W=0,X=0,z=null,H=-1,U=null,Y=new Tt,Z=new Tt,se=null,xe=new Qe(0),be=0,Ze=n.width,rt=n.height,ze=1,J=null,pe=null,oe=new Tt(0,0,Ze,rt),Ce=new Tt(0,0,Ze,rt),Ue=!1,Ie=new Pa,ut=!1,Ge=!1,Ye=new Rt,lt=new G,He=new Tt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function Ut(){return z===null?ze:1}let D=i;function It(w,k){return n.getContext(w,k)}try{let w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"184"}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",ke,!1),D===null){let k="webgl2";if(D=It(k,w),D===null)throw It(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Le("WebGLRenderer: "+w.message),w}let qe,st,ue,pt,A,S,F,K,ee,ae,le,q,j,me,ve,ce,re,De,Fe,Me,N,te,$;function he(){qe=new bT(D),qe.init(),N=new cC(D,qe),st=new mT(D,qe,e,N),ue=new oC(D,qe),st.reversedDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),pt=new TT(D),A=new YA,S=new lC(D,qe,ue,A,st,N,pt),F=new MT(P),K=new Pb(D),te=new fT(D,K),ee=new wT(D,K,pt,te),ae=new CT(D,ee,K,te,pt),De=new AT(D,st,S),ve=new gT(A),le=new qA(P,F,qe,st,te,ve),q=new fC(P,A),j=new KA,me=new tC(qe),re=new hT(P,F,ue,ae,y,l),ce=new aC(P,ae,st),$=new pC(D,pt,st,ue),Fe=new pT(D,qe,pt),Me=new ET(D,qe,pt),pt.programs=le.programs,P.capabilities=st,P.extensions=qe,P.properties=A,P.renderLists=j,P.shadowMap=ce,P.state=ue,P.info=pt}he(),b!==En&&(T=new PT(b,n.width,n.height,r,s));let ie=new dg(P,D);this.xr=ie,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=qe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=qe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ze},this.setPixelRatio=function(w){w!==void 0&&(ze=w,this.setSize(Ze,rt,!1))},this.getSize=function(w){return w.set(Ze,rt)},this.setSize=function(w,k,O=!0){if(ie.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Ze=w,rt=k,n.width=Math.floor(w*ze),n.height=Math.floor(k*ze),O===!0&&(n.style.width=w+"px",n.style.height=k+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(Ze*ze,rt*ze).floor()},this.setDrawingBufferSize=function(w,k,O){Ze=w,rt=k,ze=O,n.width=Math.floor(w*O),n.height=Math.floor(k*O),this.setViewport(0,0,w,k)},this.setEffects=function(w){if(b===En){Le("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let k=0;k<w.length;k++)if(w[k].isOutputPass===!0){Ne("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Y)},this.getViewport=function(w){return w.copy(oe)},this.setViewport=function(w,k,O,L){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,k,O,L),ue.viewport(Y.copy(oe).multiplyScalar(ze).round())},this.getScissor=function(w){return w.copy(Ce)},this.setScissor=function(w,k,O,L){w.isVector4?Ce.set(w.x,w.y,w.z,w.w):Ce.set(w,k,O,L),ue.scissor(Z.copy(Ce).multiplyScalar(ze).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(w){ue.setScissorTest(Ue=w)},this.setOpaqueSort=function(w){J=w},this.setTransparentSort=function(w){pe=w},this.getClearColor=function(w){return w.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,O=!0){let L=0;if(w){let V=!1;if(z!==null){let de=z.texture.format;V=x.has(de)}if(V){let de=z.texture.type,ye=u.has(de),ge=re.getClearColor(),Ee=re.getClearAlpha(),Te=ge.r,Ve=ge.g,Xe=ge.b;ye?(p[0]=Te,p[1]=Ve,p[2]=Xe,p[3]=Ee,D.clearBufferuiv(D.COLOR,0,p)):(v[0]=Te,v[1]=Ve,v[2]=Xe,v[3]=Ee,D.clearBufferiv(D.COLOR,0,v))}else L|=D.COLOR_BUFFER_BIT}k&&(L|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),O&&(L|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L!==0&&D.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),B=w},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",ke,!1),re.dispose(),j.dispose(),me.dispose(),A.dispose(),F.dispose(),ae.dispose(),te.dispose(),$.dispose(),le.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ha),ie.removeEventListener("sessionend",Wa),Vi.stop()};function Q(w){w.preventDefault(),qm("WebGLRenderer: Context Lost."),I=!0}function we(){qm("WebGLRenderer: Context Restored."),I=!1;let w=pt.autoReset,k=ce.enabled,O=ce.autoUpdate,L=ce.needsUpdate,V=ce.type;he(),pt.autoReset=w,ce.enabled=k,ce.autoUpdate=O,ce.needsUpdate=L,ce.type=V}function ke(w){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Mt(w){let k=w.target;k.removeEventListener("dispose",Mt),et(k)}function et(w){ni(w),A.remove(w)}function ni(w){let k=A.get(w).programs;k!==void 0&&(k.forEach(function(O){le.releaseProgram(O)}),w.isShaderMaterial&&le.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,O,L,V,de){k===null&&(k=Pt);let ye=V.isMesh&&V.matrixWorld.determinant()<0,ge=kl(w,k,O,L,V);ue.setMaterial(L,ye);let Ee=O.index,Te=1;if(L.wireframe===!0){if(Ee=ee.getWireframeAttribute(O),Ee===void 0)return;Te=2}let Ve=O.drawRange,Xe=O.attributes.position,Ae=Ve.start*Te,ct=(Ve.start+Ve.count)*Te;de!==null&&(Ae=Math.max(Ae,de.start*Te),ct=Math.min(ct,(de.start+de.count)*Te)),Ee!==null?(Ae=Math.max(Ae,0),ct=Math.min(ct,Ee.count)):Xe!=null&&(Ae=Math.max(Ae,0),ct=Math.min(ct,Xe.count));let Nt=ct-Ae;if(Nt<0||Nt===1/0)return;te.setup(V,L,ge,O,Ee);let At,dt=Fe;if(Ee!==null&&(At=K.get(Ee),dt=Me,dt.setIndex(At)),V.isMesh)L.wireframe===!0?(ue.setLineWidth(L.wireframeLinewidth*Ut()),dt.setMode(D.LINES)):dt.setMode(D.TRIANGLES);else if(V.isLine){let tn=L.linewidth;tn===void 0&&(tn=1),ue.setLineWidth(tn*Ut()),V.isLineSegments?dt.setMode(D.LINES):V.isLineLoop?dt.setMode(D.LINE_LOOP):dt.setMode(D.LINE_STRIP)}else V.isPoints?dt.setMode(D.POINTS):V.isSprite&&dt.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))dt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let tn=V._multiDrawStarts,_e=V._multiDrawCounts,Cn=V._multiDrawCount,tt=Ee?K.get(Ee).bytesPerElement:1,Hn=A.get(L).currentProgram.getUniforms();for(let _i=0;_i<Cn;_i++)Hn.setValue(D,"_gl_DrawID",_i),dt.render(tn[_i]/tt,_e[_i])}else if(V.isInstancedMesh)dt.renderInstances(Ae,Nt,V.count);else if(O.isInstancedBufferGeometry){let tn=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,_e=Math.min(O.instanceCount,tn);dt.renderInstances(Ae,Nt,_e)}else dt.render(Ae,Nt)};function Tn(w,k,O){w.transparent===!0&&w.side===Li&&w.forceSinglePass===!1?(w.side=gn,w.needsUpdate=!0,Ns(w,k,O),w.side=ar,w.needsUpdate=!0,Ns(w,k,O),w.side=Li):Ns(w,k,O)}this.compile=function(w,k,O=null){O===null&&(O=w),E=me.get(O),E.init(k),g.push(E),O.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),w!==O&&w.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights();let L=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let de=V.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){let ge=de[ye];Tn(ge,O,V),L.add(ge)}else Tn(de,O,V),L.add(de)}),E=g.pop(),L},this.compileAsync=function(w,k,O=null){let L=this.compile(w,k,O);return new Promise(V=>{function de(){if(L.forEach(function(ye){A.get(ye).currentProgram.isReady()&&L.delete(ye)}),L.size===0){V(w);return}setTimeout(de,10)}qe.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Is=null;function _h(w){Is&&Is(w)}function Ha(){Vi.stop()}function Wa(){Vi.start()}let Vi=new ky;Vi.setAnimationLoop(_h),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(w){Is=w,ie.setAnimationLoop(w),w===null?Vi.stop():Vi.start()},ie.addEventListener("sessionstart",Ha),ie.addEventListener("sessionend",Wa),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;B!==null&&B.renderStart(w,k);let O=ie.enabled===!0&&ie.isPresenting===!0,L=T!==null&&(z===null||O)&&T.begin(P,z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(k),k=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,k,z),E=me.get(w,g.length),E.init(k),E.state.textureUnits=S.getTextureUnits(),g.push(E),Ye.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ie.setFromProjectionMatrix(Ye,pi,k.reversedDepth),Ge=this.localClippingEnabled,ut=ve.init(this.clippingPlanes,Ge),C=j.get(w,R.length),C.init(),R.push(C),ie.enabled===!0&&ie.isPresenting===!0){let ye=P.xr.getDepthSensingMesh();ye!==null&&Xa(ye,k,-1/0,P.sortObjects)}Xa(w,k,0,P.sortObjects),C.finish(),P.sortObjects===!0&&C.sort(J,pe),ft=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ft&&re.addToRenderList(C,w),this.info.render.frame++,ut===!0&&ve.beginShadows();let V=E.state.shadowsArray;if(ce.render(V,w,k),ut===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(L&&T.hasRenderPass())===!1){let ye=C.opaque,ge=C.transmissive;if(E.setupLights(),k.isArrayCamera){let Ee=k.cameras;if(ge.length>0)for(let Te=0,Ve=Ee.length;Te<Ve;Te++){let Xe=Ee[Te];An(ye,ge,w,Xe)}ft&&re.render(w);for(let Te=0,Ve=Ee.length;Te<Ve;Te++){let Xe=Ee[Te];Ul(C,w,Xe,Xe.viewport)}}else ge.length>0&&An(ye,ge,w,k),ft&&re.render(w),Ul(C,w,k)}z!==null&&X===0&&(S.updateMultisampleRenderTarget(z),S.updateRenderTargetMipmap(z)),L&&T.end(P),w.isScene===!0&&w.onAfterRender(P,w,k),te.resetDefaultState(),H=-1,U=null,g.pop(),g.length>0?(E=g[g.length-1],S.setTextureUnits(E.state.textureUnits),ut===!0&&ve.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,B!==null&&B.renderEnd()};function Xa(w,k,O,L){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)O=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ie.intersectsSprite(w)){L&&He.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ye);let ye=ae.update(w),ge=w.material;ge.visible&&C.push(w,ye,ge,O,He.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ie.intersectsObject(w))){let ye=ae.update(w),ge=w.material;if(L&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),He.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),He.copy(ye.boundingSphere.center)),He.applyMatrix4(w.matrixWorld).applyMatrix4(Ye)),Array.isArray(ge)){let Ee=ye.groups;for(let Te=0,Ve=Ee.length;Te<Ve;Te++){let Xe=Ee[Te],Ae=ge[Xe.materialIndex];Ae&&Ae.visible&&C.push(w,ye,Ae,O,He.z,Xe)}}else ge.visible&&C.push(w,ye,ge,O,He.z,null)}}let de=w.children;for(let ye=0,ge=de.length;ye<ge;ye++)Xa(de[ye],k,O,L)}function Ul(w,k,O,L){let{opaque:V,transmissive:de,transparent:ye}=w;E.setupLightsView(O),ut===!0&&ve.setGlobalState(P.clippingPlanes,O),L&&ue.viewport(Y.copy(L)),V.length>0&&is(V,k,O),de.length>0&&is(de,k,O),ye.length>0&&is(ye,k,O),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function An(w,k,O,L){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[L.id]===void 0){let Ae=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[L.id]=new Bn(1,1,{generateMipmaps:!0,type:Ae?Ui:En,minFilter:jr,samples:Math.max(4,st.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let de=E.state.transmissionRenderTarget[L.id],ye=L.viewport||Y;de.setSize(ye.z*P.transmissionResolutionScale,ye.w*P.transmissionResolutionScale);let ge=P.getRenderTarget(),Ee=P.getActiveCubeFace(),Te=P.getActiveMipmapLevel();P.setRenderTarget(de),P.getClearColor(xe),be=P.getClearAlpha(),be<1&&P.setClearColor(16777215,.5),P.clear(),ft&&re.render(O);let Ve=P.toneMapping;P.toneMapping=mi;let Xe=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),E.setupLightsView(L),ut===!0&&ve.setGlobalState(P.clippingPlanes,L),is(w,O,L),S.updateMultisampleRenderTarget(de),S.updateRenderTargetMipmap(de),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ct=0,Nt=k.length;ct<Nt;ct++){let At=k[ct],{object:dt,geometry:tn,material:_e,group:Cn}=At;if(_e.side===Li&&dt.layers.test(L.layers)){let tt=_e.side;_e.side=gn,_e.needsUpdate=!0,qa(dt,O,L,tn,_e,Cn),_e.side=tt,_e.needsUpdate=!0,Ae=!0}}Ae===!0&&(S.updateMultisampleRenderTarget(de),S.updateRenderTargetMipmap(de))}P.setRenderTarget(ge,Ee,Te),P.setClearColor(xe,be),Xe!==void 0&&(L.viewport=Xe),P.toneMapping=Ve}function is(w,k,O){let L=k.isScene===!0?k.overrideMaterial:null;for(let V=0,de=w.length;V<de;V++){let ye=w[V],{object:ge,geometry:Ee,group:Te}=ye,Ve=ye.material;Ve.allowOverride===!0&&L!==null&&(Ve=L),ge.layers.test(O.layers)&&qa(ge,k,O,Ee,Ve,Te)}}function qa(w,k,O,L,V,de){w.onBeforeRender(P,k,O,L,V,de),w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(P,k,O,L,w,de),V.transparent===!0&&V.side===Li&&V.forceSinglePass===!1?(V.side=gn,V.needsUpdate=!0,P.renderBufferDirect(O,k,L,V,w,de),V.side=ar,V.needsUpdate=!0,P.renderBufferDirect(O,k,L,V,w,de),V.side=Li):P.renderBufferDirect(O,k,L,V,w,de),w.onAfterRender(P,k,O,L,V,de)}function Ns(w,k,O){k.isScene!==!0&&(k=Pt);let L=A.get(w),V=E.state.lights,de=E.state.shadowsArray,ye=V.state.version,ge=le.getParameters(w,V.state,de,k,O,E.state.lightProbeGridArray),Ee=le.getProgramCacheKey(ge),Te=L.programs;L.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,L.fog=k.fog;let Ve=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;L.envMap=F.get(w.envMap||L.environment,Ve),L.envMapRotation=L.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Te===void 0&&(w.addEventListener("dispose",Mt),Te=new Map,L.programs=Te);let Xe=Te.get(Ee);if(Xe!==void 0){if(L.currentProgram===Xe&&L.lightsStateVersion===ye)return Ya(w,ge),Xe}else ge.uniforms=le.getUniforms(w),B!==null&&w.isNodeMaterial&&B.build(w,O,ge),w.onBeforeCompile(ge,P),Xe=le.acquireProgram(ge,Ee),Te.set(Ee,Xe),L.uniforms=ge.uniforms;let Ae=L.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ae.clippingPlanes=ve.uniform),Ya(w,ge),L.needsLights=Sh(w),L.lightsStateVersion=ye,L.needsLights&&(Ae.ambientLightColor.value=V.state.ambient,Ae.lightProbe.value=V.state.probe,Ae.directionalLights.value=V.state.directional,Ae.directionalLightShadows.value=V.state.directionalShadow,Ae.spotLights.value=V.state.spot,Ae.spotLightShadows.value=V.state.spotShadow,Ae.rectAreaLights.value=V.state.rectArea,Ae.ltc_1.value=V.state.rectAreaLTC1,Ae.ltc_2.value=V.state.rectAreaLTC2,Ae.pointLights.value=V.state.point,Ae.pointLightShadows.value=V.state.pointShadow,Ae.hemisphereLights.value=V.state.hemi,Ae.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ae.spotLightMatrix.value=V.state.spotLightMatrix,Ae.spotLightMap.value=V.state.spotLightMap,Ae.pointShadowMatrix.value=V.state.pointShadowMatrix),L.lightProbeGrid=E.state.lightProbeGridArray.length>0,L.currentProgram=Xe,L.uniformsList=null,Xe}function Ls(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=Oa.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Ya(w,k){let O=A.get(w);O.outputColorSpace=k.outputColorSpace,O.batching=k.batching,O.batchingColor=k.batchingColor,O.instancing=k.instancing,O.instancingColor=k.instancingColor,O.instancingMorph=k.instancingMorph,O.skinning=k.skinning,O.morphTargets=k.morphTargets,O.morphNormals=k.morphNormals,O.morphColors=k.morphColors,O.morphTargetsCount=k.morphTargetsCount,O.numClippingPlanes=k.numClippingPlanes,O.numIntersection=k.numClipIntersection,O.vertexAlphas=k.vertexAlphas,O.vertexTangents=k.vertexTangents,O.toneMapping=k.toneMapping}function Fl(w,k){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(k.matrixWorld);for(let O=0,L=w.length;O<L;O++){let V=w[O];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function kl(w,k,O,L,V){k.isScene!==!0&&(k=Pt),S.resetTextureUnits();let de=k.fog,ye=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?k.environment:null,ge=z===null?P.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ke.workingColorSpace,Ee=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap,Te=F.get(L.envMap||ye,Ee),Ve=L.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Xe=!!O.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),Ae=!!O.morphAttributes.position,ct=!!O.morphAttributes.normal,Nt=!!O.morphAttributes.color,At=mi;L.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(At=P.toneMapping);let dt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,tn=dt!==void 0?dt.length:0,_e=A.get(L),Cn=E.state.lights;if(ut===!0&&(Ge===!0||w!==U)){let mt=w===U&&L.id===H;ve.setState(L,w,mt)}let tt=!1;L.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Cn.state.version||_e.outputColorSpace!==ge||V.isBatchedMesh&&_e.batching===!1||!V.isBatchedMesh&&_e.batching===!0||V.isBatchedMesh&&_e.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&_e.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&_e.instancing===!1||!V.isInstancedMesh&&_e.instancing===!0||V.isSkinnedMesh&&_e.skinning===!1||!V.isSkinnedMesh&&_e.skinning===!0||V.isInstancedMesh&&_e.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&_e.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&_e.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&_e.instancingMorph===!1&&V.morphTexture!==null||_e.envMap!==Te||L.fog===!0&&_e.fog!==de||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==ve.numPlanes||_e.numIntersection!==ve.numIntersection)||_e.vertexAlphas!==Ve||_e.vertexTangents!==Xe||_e.morphTargets!==Ae||_e.morphNormals!==ct||_e.morphColors!==Nt||_e.toneMapping!==At||_e.morphTargetsCount!==tn||!!_e.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,_e.__version=L.version);let Hn=_e.currentProgram;tt===!0&&(Hn=Ns(L,k,V),B&&L.isNodeMaterial&&B.onUpdateProgram(L,Hn,_e));let _i=!1,dr=!1,Ds=!1,ht=Hn.getUniforms(),Lt=_e.uniforms;if(ue.useProgram(Hn.program)&&(_i=!0,dr=!0,Ds=!0),L.id!==H&&(H=L.id,dr=!0),_e.needsLights){let mt=Fl(E.state.lightProbeGridArray,V);_e.lightProbeGrid!==mt&&(_e.lightProbeGrid=mt,dr=!0)}if(_i||U!==w){ue.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ht.setValue(D,"projectionMatrix",w.projectionMatrix),ht.setValue(D,"viewMatrix",w.matrixWorldInverse);let fr=ht.map.cameraPosition;fr!==void 0&&fr.setValue(D,lt.setFromMatrixPosition(w.matrixWorld)),st.logarithmicDepthBuffer&&ht.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&ht.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),U!==w&&(U=w,dr=!0,Ds=!0)}if(_e.needsLights&&(Cn.state.directionalShadowMap.length>0&&ht.setValue(D,"directionalShadowMap",Cn.state.directionalShadowMap,S),Cn.state.spotShadowMap.length>0&&ht.setValue(D,"spotShadowMap",Cn.state.spotShadowMap,S),Cn.state.pointShadowMap.length>0&&ht.setValue(D,"pointShadowMap",Cn.state.pointShadowMap,S)),V.isSkinnedMesh){ht.setOptional(D,V,"bindMatrix"),ht.setOptional(D,V,"bindMatrixInverse");let mt=V.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ht.setValue(D,"boneTexture",mt.boneTexture,S))}V.isBatchedMesh&&(ht.setOptional(D,V,"batchingTexture"),ht.setValue(D,"batchingTexture",V._matricesTexture,S),ht.setOptional(D,V,"batchingIdTexture"),ht.setValue(D,"batchingIdTexture",V._indirectTexture,S),ht.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&ht.setValue(D,"batchingColorTexture",V._colorsTexture,S));let hr=O.morphAttributes;if((hr.position!==void 0||hr.normal!==void 0||hr.color!==void 0)&&De.update(V,O,Hn),(dr||_e.receiveShadow!==V.receiveShadow)&&(_e.receiveShadow=V.receiveShadow,ht.setValue(D,"receiveShadow",V.receiveShadow)),(L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial)&&L.envMap===null&&k.environment!==null&&(Lt.envMapIntensity.value=k.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=gC()),dr){if(ht.setValue(D,"toneMappingExposure",P.toneMappingExposure),_e.needsLights&&yh(Lt,Ds),de&&L.fog===!0&&q.refreshFogUniforms(Lt,de),q.refreshMaterialUniforms(Lt,L,ze,rt,E.state.transmissionRenderTarget[w.id]),_e.needsLights&&_e.lightProbeGrid){let mt=_e.lightProbeGrid;Lt.probesSH.value=mt.texture,Lt.probesMin.value.copy(mt.boundingBox.min),Lt.probesMax.value.copy(mt.boundingBox.max),Lt.probesResolution.value.copy(mt.resolution)}Oa.upload(D,Ls(_e),Lt,S)}if(L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Oa.upload(D,Ls(_e),Lt,S),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&ht.setValue(D,"center",V.center),ht.setValue(D,"modelViewMatrix",V.modelViewMatrix),ht.setValue(D,"normalMatrix",V.normalMatrix),ht.setValue(D,"modelMatrix",V.matrixWorld),L.uniformsGroups!==void 0){let mt=L.uniformsGroups;for(let fr=0,Us=mt.length;fr<Us;fr++){let Cg=mt[fr];$.update(Cg,Hn),$.bind(Cg,Hn)}}return Hn}function yh(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Sh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(w,k,O){let L=A.get(w);L.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,L.__autoAllocateDepthBuffer===!1&&(L.__useRenderToTexture=!1),A.get(w.texture).__webglTexture=k,A.get(w.depthTexture).__webglTexture=L.__autoAllocateDepthBuffer?void 0:O,L.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){let O=A.get(w);O.__webglFramebuffer=k,O.__useDefaultFramebuffer=k===void 0};let Mh=D.createFramebuffer();this.setRenderTarget=function(w,k=0,O=0){z=w,W=k,X=O;let L=null,V=!1,de=!1;if(w){let ge=A.get(w);if(ge.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(D.FRAMEBUFFER,ge.__webglFramebuffer),Y.copy(w.viewport),Z.copy(w.scissor),se=w.scissorTest,ue.viewport(Y),ue.scissor(Z),ue.setScissorTest(se),H=-1;return}else if(ge.__webglFramebuffer===void 0)S.setupRenderTarget(w);else if(ge.__hasExternalTextures)S.rebindTextures(w,A.get(w.texture).__webglTexture,A.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ve=w.depthTexture;if(ge.__boundDepthTexture!==Ve){if(Ve!==null&&A.has(Ve)&&(w.width!==Ve.image.width||w.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(w)}}let Ee=w.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(de=!0);let Te=A.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Te[k])?L=Te[k][O]:L=Te[k],V=!0):w.samples>0&&S.useMultisampledRTT(w)===!1?L=A.get(w).__webglMultisampledFramebuffer:Array.isArray(Te)?L=Te[O]:L=Te,Y.copy(w.viewport),Z.copy(w.scissor),se=w.scissorTest}else Y.copy(oe).multiplyScalar(ze).floor(),Z.copy(Ce).multiplyScalar(ze).floor(),se=Ue;if(O!==0&&(L=Mh),ue.bindFramebuffer(D.FRAMEBUFFER,L)&&ue.drawBuffers(w,L),ue.viewport(Y),ue.scissor(Z),ue.setScissorTest(se),V){let ge=A.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,ge.__webglTexture,O)}else if(de){let ge=k;for(let Ee=0;Ee<w.textures.length;Ee++){let Te=A.get(w.textures[Ee]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ee,Te.__webglTexture,O,ge)}}else if(w!==null&&O!==0){let ge=A.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ge.__webglTexture,O)}H=-1},this.readRenderTargetPixels=function(w,k,O,L,V,de,ye,ge=0){if(!(w&&w.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){ue.bindFramebuffer(D.FRAMEBUFFER,Ee);try{let Te=w.textures[ge],Ve=Te.format,Xe=Te.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),!st.textureFormatReadable(Ve)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Xe)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-L&&O>=0&&O<=w.height-V&&D.readPixels(k,O,L,V,N.convert(Ve),N.convert(Xe),de)}finally{let Te=z!==null?A.get(z).__webglFramebuffer:null;ue.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(w,k,O,L,V,de,ye,ge=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee)if(k>=0&&k<=w.width-L&&O>=0&&O<=w.height-V){ue.bindFramebuffer(D.FRAMEBUFFER,Ee);let Te=w.textures[ge],Ve=Te.format,Xe=Te.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),!st.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ae),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(k,O,L,V,N.convert(Ve),N.convert(Xe),0);let ct=z!==null?A.get(z).__webglFramebuffer:null;ue.bindFramebuffer(D.FRAMEBUFFER,ct);let Nt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await uy(D,Nt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ae),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.deleteBuffer(Ae),D.deleteSync(Nt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,O=0){let L=Math.pow(2,-O),V=Math.floor(w.image.width*L),de=Math.floor(w.image.height*L),ye=k!==null?k.x:0,ge=k!==null?k.y:0;S.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,ye,ge,V,de),ue.unbindTexture()};let bh=D.createFramebuffer(),wh=D.createFramebuffer();this.copyTextureToTexture=function(w,k,O=null,L=null,V=0,de=0){let ye,ge,Ee,Te,Ve,Xe,Ae,ct,Nt,At=w.isCompressedTexture?w.mipmaps[de]:w.image;if(O!==null)ye=O.max.x-O.min.x,ge=O.max.y-O.min.y,Ee=O.isBox3?O.max.z-O.min.z:1,Te=O.min.x,Ve=O.min.y,Xe=O.isBox3?O.min.z:0;else{let Lt=Math.pow(2,-V);ye=Math.floor(At.width*Lt),ge=Math.floor(At.height*Lt),w.isDataArrayTexture?Ee=At.depth:w.isData3DTexture?Ee=Math.floor(At.depth*Lt):Ee=1,Te=0,Ve=0,Xe=0}L!==null?(Ae=L.x,ct=L.y,Nt=L.z):(Ae=0,ct=0,Nt=0);let dt=N.convert(k.format),tn=N.convert(k.type),_e;k.isData3DTexture?(S.setTexture3D(k,0),_e=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(S.setTexture2DArray(k,0),_e=D.TEXTURE_2D_ARRAY):(S.setTexture2D(k,0),_e=D.TEXTURE_2D),ue.activeTexture(D.TEXTURE0),ue.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),ue.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),ue.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);let Cn=ue.getParameter(D.UNPACK_ROW_LENGTH),tt=ue.getParameter(D.UNPACK_IMAGE_HEIGHT),Hn=ue.getParameter(D.UNPACK_SKIP_PIXELS),_i=ue.getParameter(D.UNPACK_SKIP_ROWS),dr=ue.getParameter(D.UNPACK_SKIP_IMAGES);ue.pixelStorei(D.UNPACK_ROW_LENGTH,At.width),ue.pixelStorei(D.UNPACK_IMAGE_HEIGHT,At.height),ue.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),ue.pixelStorei(D.UNPACK_SKIP_ROWS,Ve),ue.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe);let Ds=w.isDataArrayTexture||w.isData3DTexture,ht=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){let Lt=A.get(w),hr=A.get(k),mt=A.get(Lt.__renderTarget),fr=A.get(hr.__renderTarget);ue.bindFramebuffer(D.READ_FRAMEBUFFER,mt.__webglFramebuffer),ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let Us=0;Us<Ee;Us++)Ds&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,A.get(w).__webglTexture,V,Xe+Us),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,A.get(k).__webglTexture,de,Nt+Us)),D.blitFramebuffer(Te,Ve,ye,ge,Ae,ct,ye,ge,D.DEPTH_BUFFER_BIT,D.NEAREST);ue.bindFramebuffer(D.READ_FRAMEBUFFER,null),ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||A.has(w)){let Lt=A.get(w),hr=A.get(k);ue.bindFramebuffer(D.READ_FRAMEBUFFER,bh),ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,wh);for(let mt=0;mt<Ee;mt++)Ds?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.__webglTexture,V,Xe+mt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Lt.__webglTexture,V),ht?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,hr.__webglTexture,de,Nt+mt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,hr.__webglTexture,de),V!==0?D.blitFramebuffer(Te,Ve,ye,ge,Ae,ct,ye,ge,D.COLOR_BUFFER_BIT,D.NEAREST):ht?D.copyTexSubImage3D(_e,de,Ae,ct,Nt+mt,Te,Ve,ye,ge):D.copyTexSubImage2D(_e,de,Ae,ct,Te,Ve,ye,ge);ue.bindFramebuffer(D.READ_FRAMEBUFFER,null),ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ht?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(_e,de,Ae,ct,Nt,ye,ge,Ee,dt,tn,At.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(_e,de,Ae,ct,Nt,ye,ge,Ee,dt,At.data):D.texSubImage3D(_e,de,Ae,ct,Nt,ye,ge,Ee,dt,tn,At):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,Ae,ct,ye,ge,dt,tn,At.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,Ae,ct,At.width,At.height,dt,At.data):D.texSubImage2D(D.TEXTURE_2D,de,Ae,ct,ye,ge,dt,tn,At);ue.pixelStorei(D.UNPACK_ROW_LENGTH,Cn),ue.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tt),ue.pixelStorei(D.UNPACK_SKIP_PIXELS,Hn),ue.pixelStorei(D.UNPACK_SKIP_ROWS,_i),ue.pixelStorei(D.UNPACK_SKIP_IMAGES,dr),de===0&&k.generateMipmaps&&D.generateMipmap(_e),ue.unbindTexture()},this.initRenderTarget=function(w){A.get(w).__webglFramebuffer===void 0&&S.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?S.setTextureCube(w,0):w.isData3DTexture?S.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?S.setTexture2DArray(w,0):S.setTexture2D(w,0),ue.unbindTexture()},this.resetState=function(){W=0,X=0,z=null,ue.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}};var sh=yi(pr(),1);var ih=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();var Wy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var Xy=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());var hg=t=>{let e=Xy(t);return e.charAt(0).toUpperCase()+e.slice(1)};var El=yi(pr(),1);var rh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var qy=t=>{for(let e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};var za=yi(pr(),1);var vC=(0,za.createContext)({});var Yy=()=>(0,za.useContext)(vC);var $y=(0,El.forwardRef)(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>{let{size:c=24,strokeWidth:h=2,absoluteStrokeWidth:f=!1,color:d="currentColor",className:m=""}=Yy()??{},y=i??f?Number(n??h)*24/Number(e??c):n??h;return(0,El.createElement)("svg",{ref:l,...rh,width:e??c??rh.width,height:e??c??rh.height,stroke:t??d,strokeWidth:y,className:ih("lucide",m,r),...!s&&!qy(o)&&{"aria-hidden":"true"},...o},[...a.map(([b,x])=>(0,El.createElement)(b,x)),...Array.isArray(s)?s:[s]])});var Be=(t,e)=>{let n=(0,sh.forwardRef)(({className:i,...r},s)=>(0,sh.createElement)($y,{ref:s,iconNode:e,className:ih(`lucide-${Wy(hg(t))}`,`lucide-${t}`,i),...r}));return n.displayName=hg(t),n};var _C=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Ky=Be("activity",_C);var yC=[["path",{d:"M12 6.528V3a1 1 0 0 1 1-1h0",key:"11qiee"}],["path",{d:"M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21",key:"110c12"}]],jy=Be("apple",yC);var SC=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Zy=Be("camera",SC);var MC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],fg=Be("circle-check",MC);var bC=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Jy=Be("chevron-down",bC);var wC=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Oi=Be("clipboard-list",wC);var EC=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],Tl=Be("dumbbell",EC);var TC=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],ah=Be("flame",TC);var AC=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],Va=Be("gauge",AC);var CC=[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]],pg=Be("goal",CC);var RC=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],Qy=Be("leaf",RC);var PC=[["path",{d:"M5 12h14",key:"1ays0h"}]],Al=Be("minus",PC);var IC=[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m16 17 2 2 4-4",key:"uh5qu3"}],["path",{d:"M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",key:"kpkbpo"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]],eS=Be("package-check",IC);var NC=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Cl=Be("plus",NC);var LC=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Ga=Be("rotate-ccw",LC);var DC=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],tS=Be("settings-2",DC);var UC=[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]],Rl=Be("shopping-basket",UC);var FC=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],mg=Be("sparkles",FC);var kC=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],nS=Be("timer",kC);var OC=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],Pl=Be("utensils",OC);var BC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],oh=Be("x",BC);var zC=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],iS=Be("zap",zC);var Bi={p:0,c:0,f:0,kcal:0};function je(t,e,n){return Math.max(e,Math.min(n,Number(t)||0))}function Re(t,e=0){return Number((Number(t)||0).toFixed(e))}function xn(t,e=1){return!Number.isFinite(Number(t))||Number(t)<=0?0:Math.max(0,Math.round(Number(t)/e)*e)}function ur(t=Bi){return Number.isFinite(t.kcal)?t.kcal:(t.p||0)*4+(t.c||0)*4+(t.f||0)*9}function Rs(t=Bi){return{...t,kcal:ur(t)}}function $t(...t){return Rs(t.reduce((e,n)=>({p:e.p+(n?.p||0),c:e.c+(n?.c||0),f:e.f+(n?.f||0),kcal:e.kcal+ur(n||Bi)}),{...Bi}))}function Gt(t=Bi,e=0){return Rs({p:(t.p||0)*e,c:(t.c||0)*e,f:(t.f||0)*e,...Number.isFinite(t.kcal)?{kcal:t.kcal*e}:{}})}function rS(t={}){let e=je(t.bodyWeightKg,1,300),n=je(t.proteinPerKg,0,5),i=je(t.fatMinPerKg,0,3),r=Re(je(t.kcal,0,9e3)),s=Re(e*n,1),a=Re(e*i,1),o=Math.max(0,r-s*4-a*9),l=Re(o/4,1);return{p:s,c:l,f:a,kcal:r}}function VC(t=0,e=1){let n=je(t,0,1/0)/Math.max(1,je(e,1,300));return n<2?{label:"\u4F4E\u78B3",tone:"amber",note:"\u78B3\u6C34\u4F4E\u4E8E 2.0g/kg\uFF0C\u4ECA\u5929\u7B97\u6536\u7D27\u65E5"}:n<3?{label:"\u4E2D\u78B3",tone:"green",note:"\u78B3\u6C34\u5728 2.0-3.0g/kg\uFF0C\u8BAD\u7EC3\u548C\u6062\u590D\u90FD\u6BD4\u8F83\u7A33"}:{label:"\u9AD8\u78B3",tone:"red",note:"\u78B3\u6C34\u8D85\u8FC7 3.0g/kg\uFF0C\u66F4\u50CF\u8865\u7CD6\u6216\u9AD8\u6D3B\u52A8\u65E5"}}function sS(t=Bi,e=Bi,n=1){let i=Math.max(1,ur(t)),r=Math.max(1,je(n,1,300)),s=(t.p||0)*4,a=(t.c||0)*4,o=(t.f||0)*9;return{proteinPct:Re(s/i*100,1),carbPct:Re(a/i*100,1),fatPct:Re(o/i*100,1),proteinPerKg:Re((t.p||0)/r,1),carbPerKg:Re((t.c||0)/r,1),fatPerKg:Re((t.f||0)/r,1),proteinTargetPerKg:Re((e.p||0)/r,1),carbTargetPerKg:Re((e.c||0)/r,1),carbDay:VC(t.c||0,r)}}function GC(t,e){let n=xn(je(e,0,t.max??1/0),t.step||1);return{...t,qty:n,macro:Gt(t.unitMacro,n)}}function xg(t,e){let n=t.kcal-e.kcal,i=Math.pow(n/(n>0?150:125),2)*8+Math.max(0,n-220)*.28,r=Math.max(0,e.p-t.p),s=Math.max(0,t.p-e.p),a=t.c-e.c,o=Math.max(0,e.f-t.f),l=Math.max(0,t.f-e.f);return i+Math.pow(r/4,2)*28+Math.pow(s/12,2)*4+Math.pow(a/14,2)*10+Math.pow(o/4,2)*24+Math.pow(l/7,2)*12}function HC(t){let e=t.step||1,n=Math.max(0,t.max??t.qty??e*20),i=Math.floor(n/e),r=new Set([0,xn(t.qty||0,e),xn(n,e)]);if(i<=90)for(let s=0;s<=i;s+=1)r.add(xn(s*e,e));else{for(let s=-14;s<=14;s+=1)r.add(xn((t.qty||0)+s*e,e));[.15,.25,.35,.5,.65,.8,1].forEach(s=>r.add(xn(n*s,e)))}return[...r].filter(s=>s>=0&&s<=n).sort((s,a)=>s-a)}function WC(t,e,n){let i=n.reduce((h,f)=>$t(h,Gt(f.unitMacro,f.max??0)),Bi),r=$t(t,i),s=t.p>e.p?t.p-e.p:Math.max(0,e.p-r.p),a=t.c>e.c?t.c-e.c:Math.max(0,e.c-r.c),o=t.f>e.f?t.f-e.f:Math.max(0,e.f-r.f),l=Math.max(0,t.kcal-e.kcal-220),c=Math.max(0,e.kcal-r.kcal);return Math.pow(s/6,2)*30+Math.pow(a/22,2)*10+Math.pow(o/7,2)*20+Math.pow(l/110,2)*12+Math.pow(c/160,2)*8+xg(t,e)*.015}function aS(t,e,n,i={}){let r=t.filter(l=>l&&l.unitMacro&&(l.max??0)>0),s=i.beamWidth??520,a=[{choices:[],macro:Rs(e||Bi),rank:0}];r.forEach((l,c)=>{let h=r.slice(c+1),f=HC(l),d=[];a.forEach(m=>{f.forEach(y=>{let b=Gt(l.unitMacro,y),x=$t(m.macro,b),u=WC(x,n,h)+Math.abs(y-(l.qty||0))*5e-4;d.push({choices:[...m.choices,y],macro:x,rank:u})})}),d.sort((m,y)=>m.rank-y.rank),a=d.slice(0,s)});let o=a.reduce((l,c)=>xg(c.macro,n)<xg(l.macro,n)?c:l,a[0]);return r.map((l,c)=>GC(l,o.choices[c]||0)).filter(l=>l.qty>0)}function vg(t){return t.reduce((e,n)=>({...e,[n.key]:{enabled:n.defaultEnabled!==!1,target:n.defaultTarget??0,stock:n.defaultStock??0}}),{})}function lh(t,e){let n=vg(e);return e.reduce((i,r)=>{let s=t?.[r.key]||{},a=r.max??1/0;return i[r.key]={enabled:s.enabled??n[r.key].enabled,target:je(s.target??n[r.key].target,0,a),stock:je(s.stock??n[r.key].stock,0,a)},i},{})}function oS(t,e,n=7){let i=lh(e,t),r=je(n,1,21);return t.map(s=>{let a=i[s.key],o=s.max??1/0,l=je(a.target,0,o),c=je(xn(l*r/7,s.step||1),0,o),h=je(xn(a.stock,s.step||1),0,o),f=a.enabled?je(xn(Math.max(0,c-h),s.step||1),0,o):0,d=s.unitMacro||Bi;return{...s,enabled:a.enabled,weeklyTarget:l,targetQty:c,stockQty:h,buyQty:f,weeklyQty:f,qty:f,unitMacro:d,macro:Gt(d,f),expectedMacro:Gt(d,c),needState:a.enabled&&f>0?"need":"ok"}})}function gg(t,e){return`${Re(t,e==="g"?0:1)}${e}`}function lS(t,e={}){return t.filter(n=>n.enabled&&n.buyQty>0).sort((n,i)=>(e[n.tone]??9)-(e[i.tone]??9)||i.buyQty-n.buyQty).map((n,i)=>{let r=gg(n.targetQty,n.unit),s=gg(n.stockQty,n.unit),a=gg(n.buyQty,n.unit),o=n.buyHint||(n.stockQty>0?`\u5BB6\u91CC\u8FD8\u6709 ${s}\uFF0C\u8865\u5230\u76EE\u6807 ${r}`:`\u672C\u5468\u671F\u76EE\u6807 ${r}`);return{...n,order:i+1,buyText:a,targetText:r,stockText:s,reason:o}})}var _=yi(Il(),1),wg=t=>`./assets/${t}`,Eg=t=>wg(`generated/${t}`),pS=["zh","ja"],Ll={bodyWeightKg:83,proteinPerKg:1.8,fatMinPerKg:.6,kcal:2e3},ZC=2900,zi={p:0,c:0,f:0,kcal:0},_g={zh:{appSub:"\u4ECA\u5929\u600E\u4E48\u5403",navPlan:"\u4ECA\u65E5",navDetail:"\u660E\u7EC6",navShop:"\u91C7\u8D2D",navCheat:"\u653E\u677E",language:"\u8BED\u8A00",zh:"\u4E2D\u6587",ja:"\u65E5\u672C\u8A9E",heroTitle:"\u4ECA\u65E5\u9910\u76D8",heroAccent:"\u8F7B\u8F7B\u677E\u677E\u5B9A\u4E0B\u6765",heroCopy:"\u5148\u586B\u5DF2\u7ECF\u5403\u8FC7\u7684\u4E1C\u897F\uFF0C\u665A\u9910\u3001\u8865\u7ED9\u3001\u8D64\u5B57\u548C\u91C7\u8D2D\u90FD\u4F1A\u81EA\u52A8\u8DDF\u7740\u7B97\u3002\u754C\u9762\u53EA\u4FDD\u7559\u771F\u6B63\u8981\u64CD\u4F5C\u7684\u90E8\u5206\u3002",profile:"\u76EE\u6807",fuel:"\u8865\u7ED9",snack:"\u52A0\u9910",copy:"\u590D\u5236",copying:"\u590D\u5236\u4E2D",copied:"\u5DF2\u590D\u5236",retry:"\u91CD\u8BD5",record:"\u8BB0\u5F55",intake:"\u5DF2\u5403",dinner:"\u665A\u9910",rhythm:"\u8282\u594F",kcal:"\u70ED\u91CF",deficit:"\u8D64\u5B57",todayTotal:"\u4ECA\u65E5\u5408\u8BA1",dinnerKcal:"\u665A\u9910\u70ED\u91CF",noEat:"\u4E0D\u5403",noDrink:"\u4E0D\u559D",off:"OFF",on:"ON",planIntakeEyebrow:"01 \xB7 \u5148\u8BB0\u4ECA\u5929",planIntakeTitle:"\u4ECA\u5929\u5403\u5230\u54EA\u4E86",quickKcal:"\u76F4\u63A5 kcal",tallyMode:"\u70B9\u9009\u8BB0\u8D26",lunchKcal:"\u5348\u9910\u70ED\u91CF",commonPicks:"\u5E38\u7528\u6570\u5B57",planChoiceEyebrow:"02 \xB7 \u665A\u9910\u65B9\u5411",planChoiceTitle:"\u4ECA\u665A\u60F3\u5403\u4EC0\u4E48",advanced:"\u7EC6\u8282\u8BBE\u7F6E",advancedSub:"\u86CB\u767D\u3001\u8102\u80AA\u3001\u6C34\u679C\u3001\u725B\u8089\u8102\u80AA\u548C\u76EE\u6807\u516C\u5F0F",dinnerProtein:"\u665A\u9910\u86CB\u767D",fatSource:"\u8102\u80AA\u6765\u6E90",extras:"\u6C34\u679C / \u9178\u5976",beefFat:"\u725B\u8089\u8102\u80AA",targetFormula:"\u76EE\u6807\u516C\u5F0F",resetDefault:"\u91CD\u7F6E\u9ED8\u8BA4",dinnerAnswerEyebrow:"03 \xB7 \u81EA\u52A8\u7B54\u6848",dinnerAnswerTitle:"\u4ECA\u665A\u5C31\u8FD9\u6837\u5403",resetTune:"\u91CD\u7F6E\u5FAE\u8C03",noDinner:"\u4ECA\u5929\u665A\u9910\u5DF2\u7ECF\u5F88\u8F7B\uFF0C\u5148\u68C0\u67E5\u5348\u9910\u6216\u76EE\u6807",rhythmEyebrow:"04 \xB7 \u4ECA\u65E5\u7ED3\u6784",rhythmTitle:"\u770B\u4E00\u773C\u5C31\u591F",protein:"\u86CB\u767D",carb:"\u78B3\u6C34",fat:"\u8102\u80AA",calorie:"\u70ED\u91CF",carbDay:"\u4ECA\u5929\u78B3\u6C34\u65E5",lowCarb:"\u4F4E\u78B3",mediumCarb:"\u4E2D\u78B3",highCarb:"\u9AD8\u78B3",ledger:"\u4ECA\u65E5\u8D26\u672C",ledgerTitle:"\u5403\u8FDB\u53BB\u7684\u4E1C\u897F",targetByWeight:"\u6309\u4F53\u91CD\u81EA\u52A8\u5206\u914D",structureTitle:"\u5360\u6BD4\u548C\u4F53\u91CD\u500D\u6570",beforeTraining:"\u8BAD\u7EC3\u524D",beforeTrainingTitle:"\u57AB\u4E00\u53E3\u4E5F\u7B97\u8FDB\u53BB",electrolyte:"\u7535\u89E3\u8D28",electrolyteTitle:"\u94BE\u94A0\u522B\u592A\u504F",balanced:"\u5E73\u8861",lowPotassium:"\u94BE\u504F\u4F4E",shopHero:"\u91C7\u8D2D\u6E05\u5355",shopCopy:"\u4E0D\u7528\u81EA\u5DF1\u586B\u3002\u4E0B\u9762\u5DF2\u7ECF\u6309\u8FDB\u5E97\u987A\u5E8F\u5217\u597D\u8FD9\u8F6E\u76F4\u63A5\u4E70\u4EC0\u4E48\uFF0C\u5E93\u5B58\u53EA\u6709\u9700\u8981\u5FAE\u8C03\u65F6\u518D\u6253\u5F00\u3002",cycle:"\u5468\u671F",products:"\u5546\u54C1",picked:"\u5DF2\u62FF",clearStock:"\u6E05\u7A7A\u5DF2\u6709",directPlan:"\u76F4\u63A5\u65B9\u6848",directPlanTitle:"\u7167\u5355\u4E70\u8FD9\u4E9B",nothingToBuy:"\u8FD9\u8F6E\u4E0D\u7528\u4E70",nothingToBuySub:"\u5DF2\u9009\u54C1\u7C7B\u7684\u5BB6\u91CC\u5E93\u5B58\u8986\u76D6\u4E86\u8FD9\u4E2A\u5907\u8D27\u5468\u671F\u3002\u8981\u5F3A\u5236\u751F\u6210\u6E05\u5355\u53EF\u4EE5\u70B9\u201C\u6E05\u7A7A\u5DF2\u6709\u201D\u3002",stockTune:"\u5E93\u5B58\u5FAE\u8C03",stockTuneSub:"\u5E73\u65F6\u4E0D\u7528\u7BA1\uFF1B\u53EA\u6709\u5BB6\u91CC\u8FD8\u6709\u4E1C\u897F\u65F6\u518D\u6539\u76EE\u6807\u548C\u5DF2\u6709",weeklyTarget:"\u5468\u76EE\u6807",stock:"\u5BB6\u91CC\u5DF2\u6709",skip:"\u8DF3\u8FC7",add:"\u52A0\u5165",enough:"\u5DF2\u591F",buy:"\u8865",cheatTitle:"\u60F3\u5403\u4E5F\u80FD\u7B97",cheatResult:"\u5403\u5B8C\u5927\u6982\u8FD9\u6837",cheatKcal:"\u653E\u677E\u70ED\u91CF",clear:"\u6E05\u7A7A",fuelSwitch:"\u8865\u7ED9\u5F00\u5173",fuelSub:"\u8BAD\u7EC3\u524D\u5403\u4EC0\u4E48\u559D\u4EC0\u4E48",currentState:"\u5F53\u524D\u72B6\u6001",fueled:"\u5DF2\u8865\u7ED9",noFuel:"\u4E0D\u8865\u7ED9",applyNoFuel:"\u4E00\u952E\u4E0D\u8865\u7ED9",applyNoFuelSub:"\u4E0D\u5403\u4E5F\u4E0D\u559D",lightFuel:"\u8F7B\u8865\u7ED9",lightFuelSub:"\u9999\u8549 + \u756A\u8304\u6C41",pineappleBox:"\u83E0\u841D\u76D2",pineappleBoxSub:"240g + \u756A\u8304\u6C41",eatWhat:"\u5403\u4EC0\u4E48",drinkWhat:"\u559D\u4EC0\u4E48",manualCopy:"\u624B\u52A8\u590D\u5236",manualCopySub:"\u6D4F\u89C8\u5668\u62E6\u622A\u4E86\u81EA\u52A8\u590D\u5236\uFF0C\u6587\u672C\u5DF2\u7ECF\u9009\u4E2D\u3002\u624B\u673A\u4E0A\u76F4\u63A5\u957F\u6309\u590D\u5236\u4E5F\u53EF\u4EE5\u3002",copyAgain:"\u518D\u590D\u5236\u4E00\u6B21",snackTitle:"\u96F6\u98DF\u52A0\u9910",snackSub:"\u81EA\u5DF1\u586B\u4E00\u4E0B\u4E5F\u884C",snackName:"\u540D\u79F0",dinnerWillClose:"\u665A\u9910\u4F1A\u8DDF\u7740\u6536\u53E3",clearSnack:"\u6E05\u9664\u52A0\u9910",bodyWeight:"\u4F53\u91CD",proteinRatio:"\u86CB\u767D\u500D\u7387",fatMin:"\u8102\u80AA\u6700\u4F4E",tdee:"TDEE",proteinTarget:"\u86CB\u767D\u76EE\u6807",fatTarget:"\u8102\u80AA\u6700\u4F4E",carbRemainder:"\u5269\u4F59\u78B3\u6C34",carbRemainderSub:"\u70ED\u91CF\u6263\u5B8C P/F \u540E\u5168\u7ED9\u78B3\u6C34",proteinCalories:"\u86CB\u767D\u70ED\u91CF",carbCalories:"\u78B3\u6C34\u70ED\u91CF",fatCalories:"\u8102\u80AA\u70ED\u91CF",carbJudge:"\u4F4E\u78B3\u5224\u65AD",lunch:"\u5348\u9910",preTraining:"\u8BAD\u7EC3\u524D",drinkElectrolyte:"\u996E\u6599/\u7535\u89E3\u8D28",snackMeal:"\u96F6\u98DF\u52A0\u9910",sauce:"\u996E\u6599",salt:"\u76D0",foodK:"\u98DF\u7269\u94BE",actual:"\u5B9E\u9645",target:"\u76EE\u6807",adjust:"\u8C03\u6574"},ja:{appSub:"\u4ECA\u65E5\u306E\u3054\u306F\u3093",navPlan:"\u4ECA\u65E5",navDetail:"\u8A73\u7D30",navShop:"\u8CB7\u3044\u7269",navCheat:"\u3054\u307B\u3046\u3073",language:"\u8A00\u8A9E",zh:"\u4E2D\u6587",ja:"\u65E5\u672C\u8A9E",heroTitle:"\u4ECA\u65E5\u306E\u3054\u306F\u3093",heroAccent:"\u3075\u3093\u308F\u308A\u6C7A\u3081\u308B",heroCopy:"\u98DF\u3079\u305F\u3082\u306E\u3092\u5165\u308C\u308B\u3060\u3051\u3002\u5915\u98DF\u3001\u88DC\u7D66\u3001\u8D64\u5B57\u3001\u8CB7\u3044\u7269\u30EA\u30B9\u30C8\u307E\u3067\u4E00\u679A\u306E\u30AB\u30FC\u30C9\u3067\u6574\u3048\u307E\u3059\u3002",profile:"\u76EE\u6A19",fuel:"\u88DC\u7D66",snack:"\u9593\u98DF",copy:"\u30B3\u30D4\u30FC",copying:"\u30B3\u30D4\u30FC\u4E2D",copied:"\u30B3\u30D4\u30FC\u6E08\u307F",retry:"\u518D\u8A66\u884C",record:"\u8A18\u9332",intake:"\u98DF\u3079\u305F\u3082\u306E",dinner:"\u5915\u98DF",rhythm:"\u30D0\u30E9\u30F3\u30B9",kcal:"\u30AB\u30ED\u30EA\u30FC",deficit:"\u8D64\u5B57",todayTotal:"\u4ECA\u65E5\u306E\u5408\u8A08",dinnerKcal:"\u5915\u98DF\u30AB\u30ED\u30EA\u30FC",noEat:"\u98DF\u3079\u306A\u3044",noDrink:"\u98F2\u307E\u306A\u3044",off:"OFF",on:"ON",planIntakeEyebrow:"01 \xB7 \u307E\u305A\u8A18\u9332",planIntakeTitle:"\u98DF\u3079\u305F\u3082\u306E",quickKcal:"kcal \u3060\u3051",tallyMode:"\u98DF\u6750\u3067\u8A18\u9332",lunchKcal:"\u663C\u98DF\u30AB\u30ED\u30EA\u30FC",commonPicks:"\u3088\u304F\u4F7F\u3046\u6570\u5B57",planChoiceEyebrow:"02 \xB7 \u5915\u98DF\u306E\u6C17\u5206",planChoiceTitle:"\u4ECA\u591C\u306A\u306B\u98DF\u3079\u308B",advanced:"\u3053\u307E\u304B\u3044\u8A2D\u5B9A",advancedSub:"\u305F\u3093\u3071\u304F\u8CEA\u3001\u8102\u8CEA\u3001\u679C\u7269\u3001\u725B\u8102\u3001\u76EE\u6A19\u5F0F",dinnerProtein:"\u5915\u98DF\u305F\u3093\u3071\u304F",fatSource:"\u8102\u8CEA\u30BD\u30FC\u30B9",extras:"\u679C\u7269 / \u30E8\u30FC\u30B0\u30EB\u30C8",beefFat:"\u725B\u8089\u8102\u8CEA",targetFormula:"\u76EE\u6A19\u5F0F",resetDefault:"\u521D\u671F\u5024\u306B\u623B\u3059",dinnerAnswerEyebrow:"03 \xB7 \u81EA\u52D5\u30D7\u30E9\u30F3",dinnerAnswerTitle:"\u5915\u98DF\u306F\u3053\u308C\u3067\u3044\u304F",resetTune:"\u5FAE\u8ABF\u6574\u3092\u623B\u3059",noDinner:"\u5915\u98DF\u304C\u304B\u306A\u308A\u8EFD\u3044\u3067\u3059\u3002\u663C\u98DF\u304B\u76EE\u6A19\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",rhythmEyebrow:"04 \xB7 \u4ECA\u65E5\u306E\u69CB\u6210",rhythmTitle:"\u3053\u3053\u3060\u3051\u898B\u308C\u3070OK",protein:"\u305F\u3093\u3071\u304F",carb:"\u70AD\u6C34\u5316\u7269",fat:"\u8102\u8CEA",calorie:"\u30AB\u30ED\u30EA\u30FC",carbDay:"\u4ECA\u65E5\u306E\u70AD\u6C34\u5316\u7269",lowCarb:"\u4F4E\u70AD\u6C34",mediumCarb:"\u4E2D\u70AD\u6C34",highCarb:"\u9AD8\u70AD\u6C34",ledger:"\u4ECA\u65E5\u306E\u5E33\u7C3F",ledgerTitle:"\u98DF\u3079\u305F\u3082\u306E\u4E00\u89A7",targetByWeight:"\u4F53\u91CD\u304B\u3089\u81EA\u52D5\u914D\u5206",structureTitle:"\u5272\u5408\u3068\u4F53\u91CD\u500D\u7387",beforeTraining:"\u904B\u52D5\u524D",beforeTrainingTitle:"\u5C11\u3057\u98DF\u3079\u3066\u3082\u8A08\u7B97",electrolyte:"\u96FB\u89E3\u8CEA",electrolyteTitle:"\u30AB\u30EA\u30A6\u30E0\u3068\u30CA\u30C8\u30EA\u30A6\u30E0",balanced:"\u30D0\u30E9\u30F3\u30B9",lowPotassium:"K \u5C11\u306A\u3081",shopHero:"\u8CB7\u3044\u7269\u30EA\u30B9\u30C8",shopCopy:"\u5165\u529B\u3057\u306A\u304F\u3066OK\u3002\u5E97\u5185\u3067\u53D6\u308B\u9806\u756A\u306B\u3001\u4ECA\u56DE\u8CB7\u3046\u3082\u306E\u3092\u305D\u306E\u307E\u307E\u51FA\u3057\u307E\u3059\u3002\u5E93\u5B58\u306F\u5FC5\u8981\u306A\u3068\u304D\u3060\u3051\u8ABF\u6574\u3002",cycle:"\u5468\u671F",products:"\u54C1\u76EE",picked:"\u53D6\u3063\u305F",clearStock:"\u5728\u5EAB\u30920\u306B\u3059\u308B",directPlan:"\u8CB7\u3046\u3082\u306E",directPlanTitle:"\u3053\u306E\u307E\u307E\u8CB7\u3046",nothingToBuy:"\u4ECA\u56DE\u306F\u8CB7\u308F\u306A\u304F\u3066OK",nothingToBuySub:"\u9078\u629E\u4E2D\u306E\u54C1\u76EE\u306F\u5728\u5EAB\u3067\u8DB3\u308A\u3066\u3044\u307E\u3059\u3002\u30EA\u30B9\u30C8\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u306F\u5728\u5EAB\u30920\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",stockTune:"\u5728\u5EAB\u8ABF\u6574",stockTuneSub:"\u666E\u6BB5\u306F\u89E6\u3089\u306A\u304F\u3066OK\u3002\u5BB6\u306B\u6B8B\u3063\u3066\u3044\u308B\u3082\u306E\u304C\u3042\u308B\u6642\u3060\u3051\u3002",weeklyTarget:"\u9031\u76EE\u6A19",stock:"\u5BB6\u306E\u5728\u5EAB",skip:"\u5916\u3059",add:"\u8FFD\u52A0",enough:"\u8DB3\u308A\u308B",buy:"\u8CB7\u3046",cheatTitle:"\u98DF\u3079\u305F\u3044\u65E5\u3082\u8A08\u7B97",cheatResult:"\u98DF\u3079\u305F\u5F8C\u306E\u898B\u8FBC\u307F",cheatKcal:"\u3054\u307B\u3046\u3073 kcal",clear:"\u30AF\u30EA\u30A2",fuelSwitch:"\u88DC\u7D66\u30B9\u30A4\u30C3\u30C1",fuelSub:"\u904B\u52D5\u524D\u306B\u98DF\u3079\u308B/\u98F2\u3080\u3082\u306E",currentState:"\u73FE\u5728",fueled:"\u88DC\u7D66\u3042\u308A",noFuel:"\u88DC\u7D66\u306A\u3057",applyNoFuel:"\u88DC\u7D66\u306A\u3057",applyNoFuelSub:"\u98DF\u3079\u306A\u3044\u30FB\u98F2\u307E\u306A\u3044",lightFuel:"\u8EFD\u3081\u88DC\u7D66",lightFuelSub:"\u30D0\u30CA\u30CA + \u30C8\u30DE\u30C8\u30B8\u30E5\u30FC\u30B9",pineappleBox:"\u30D1\u30A4\u30F3\u88DC\u7D66",pineappleBoxSub:"240g + \u30C8\u30DE\u30C8\u30B8\u30E5\u30FC\u30B9",eatWhat:"\u98DF\u3079\u308B\u3082\u306E",drinkWhat:"\u98F2\u3080\u3082\u306E",manualCopy:"\u624B\u52D5\u30B3\u30D4\u30FC",manualCopySub:"\u30D6\u30E9\u30A6\u30B6\u304C\u81EA\u52D5\u30B3\u30D4\u30FC\u3092\u6B62\u3081\u307E\u3057\u305F\u3002\u30C6\u30AD\u30B9\u30C8\u306F\u9078\u629E\u6E08\u307F\u306A\u306E\u3067\u3001\u30B9\u30DE\u30DB\u3067\u306F\u9577\u62BC\u3057\u3067\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3059\u3002",copyAgain:"\u3082\u3046\u4E00\u5EA6\u30B3\u30D4\u30FC",snackTitle:"\u9593\u98DF\u3092\u8FFD\u52A0",snackSub:"\u3056\u3063\u304F\u308A\u5165\u529B\u3067OK",snackName:"\u540D\u524D",dinnerWillClose:"\u5915\u98DF\u304C\u81EA\u52D5\u3067\u8ABF\u6574\u3055\u308C\u307E\u3059",clearSnack:"\u9593\u98DF\u3092\u6D88\u3059",bodyWeight:"\u4F53\u91CD",proteinRatio:"\u305F\u3093\u3071\u304F\u500D\u7387",fatMin:"\u8102\u8CEA\u6700\u4F4E",tdee:"TDEE",proteinTarget:"\u305F\u3093\u3071\u304F\u76EE\u6A19",fatTarget:"\u8102\u8CEA\u6700\u4F4E",carbRemainder:"\u6B8B\u308A\u3092\u70AD\u6C34\u5316\u7269\u3078",carbRemainderSub:"P/F \u3092\u5F15\u3044\u305F\u6B8B\u308A\u306E kcal \u3092\u70AD\u6C34\u5316\u7269\u306B\u914D\u5206",proteinCalories:"\u305F\u3093\u3071\u304F kcal",carbCalories:"\u70AD\u6C34\u5316\u7269 kcal",fatCalories:"\u8102\u8CEA kcal",carbJudge:"\u4F4E\u70AD\u6C34\u5224\u5B9A",lunch:"\u663C\u98DF",preTraining:"\u904B\u52D5\u524D",drinkElectrolyte:"\u98F2\u307F\u7269/\u96FB\u89E3\u8CEA",snackMeal:"\u9593\u98DF",sauce:"\u98F2\u307F\u7269",salt:"\u5869",foodK:"\u98DF\u4E8BK",actual:"\u5B9F\u969B",target:"\u76EE\u6A19",adjust:"\u8ABF\u6574"}},gh={pasta:{name:"\u610F\u9762 \xB7 Garlic oil",short:"\u610F\u9762",sub:"\u529B\u91CF\u65E5\u6700\u723D",unit:"g",step:10,perUnit:{p:.12,c:.71,f:.015},kcalUnit:3.55,color:"#ffb86b",ja:{name:"\u30D1\u30B9\u30BF \xB7 \u30AC\u30FC\u30EA\u30C3\u30AF\u30AA\u30A4\u30EB",short:"\u30D1\u30B9\u30BF",sub:"\u3057\u3063\u304B\u308A\u98DF\u3079\u308B\u65E5"}},soba:{name:"\u835E\u9EA6\u9762 \xB7 Soba",short:"\u835E\u9EA6",sub:"\u6E05\u723D\u4F4E\u8D1F\u62C5",unit:"g",step:10,perUnit:{p:.14,c:.66,f:.023},kcalUnit:3.44,color:"#86c9a9",ja:{name:"\u305D\u3070 \xB7 Soba",short:"\u305D\u3070",sub:"\u8EFD\u304F\u3066\u843D\u3061\u7740\u304F"}},nissin:{name:"\u65E5\u6E05\u975E\u6CB9\u70B8",short:"\u65E5\u6E05",sub:"\u61D2\u4EBA\u6C64\u9762",unit:"\u5305",step:1,perUnit:{p:6.7,c:55,f:4.9},kcalUnit:291,color:"#ff9d91",ja:{name:"\u65E5\u6E05\u30CE\u30F3\u30D5\u30E9\u30A4",short:"\u65E5\u6E05",sub:"\u6642\u9593\u304C\u306A\u3044\u65E5"}},fresh_noodle:{name:"\u51B7\u85CF\u9C9C\u9762 \xB7 \u751F\u30E9\u30FC\u30E1\u30F3",short:"\u9C9C\u9762",sub:"\u51B7\u85CF\u67DC\u65E0\u8C03\u5473\u5305",unit:"g",step:10,perUnit:{p:.0869,c:.5469,f:.0123,kcal:2.623},kcalUnit:2.623,color:"#f1c47b",ja:{name:"\u51B7\u8535\u751F\u9EBA \xB7 \u8ABF\u5473\u306A\u3057",short:"\u751F\u9EBA",sub:"10g \u5358\u4F4D\u3067\u8ABF\u6574"}},pho:{name:"\u8D8A\u5357\u7C73\u7C89",short:"\u7C73\u7C89",sub:"\u4F4E\u8102\u6362\u53E3\u5473",unit:"\u5305",step:1,perUnit:{p:4,c:43,f:2},kcalUnit:210,color:"#86d8df",ja:{name:"\u30D5\u30A9\u30FC",short:"\u30D5\u30A9\u30FC",sub:"\u4F4E\u8102\u8CEA\u3067\u5909\u5316"}},bifun:{name:"\u7EAF\u5E72\u7C73\u7C89",short:"\u5E72\u7C73\u7C89",sub:"\u7EAF\u78B3\u6C34\u8865\u6EE1",unit:"g",step:10,perUnit:{p:.06,c:.79,f:.005},kcalUnit:3.45,color:"#f5d66b",ja:{name:"\u4E7E\u71E5\u30D3\u30FC\u30D5\u30F3",short:"\u30D3\u30FC\u30D5\u30F3",sub:"\u70AD\u6C34\u5316\u7269\u3092\u8DB3\u3059"}}},fh={beef:{label:"\u725B\u8089\u5207\u308A\u843D\u3068\u3057",short:"\u725B\u8089",tag:"raw \xB7 per g",unit:"g",step:10,p:.19,c:0,max:650,note:"\u8102\u80AA\u6309\u5305\u88C5\u6821\u51C6",ja:{label:"\u725B\u8089\u5207\u308A\u843D\u3068\u3057",short:"\u725B\u8089",note:"\u8102\u8CEA\u306F\u5305\u88C5\u3067\u8ABF\u6574"}},chicken:{label:"\u901F\u98DF\u9E21\u80F8",short:"\u9E21\u80F8",tag:"per pack",unit:"\u5757",step:1,p:22,c:1,f:2,max:6,note:"\u6700\u7A33\u9AD8\u86CB\u767D",ja:{label:"\u30B5\u30E9\u30C0\u30C1\u30AD\u30F3",short:"\u30C1\u30AD\u30F3",unit:"\u500B",note:"\u5B89\u5B9A\u306E\u9AD8\u305F\u3093\u3071\u304F"}},duck:{label:"\u5408\u9E2D\u80F8\u53BB\u76AE",short:"\u5408\u9E2D",tag:"100g serve",unit:"\u4EFD",step:1,p:21,c:.5,f:6,max:4,note:"\u9999\u4F46\u4E0D\u592A\u80A5",ja:{label:"\u5408\u9D28\u3080\u306D\u76AE\u306A\u3057",short:"\u5408\u9D28",unit:"\u76BF",note:"\u9999\u308A\u304C\u3042\u3063\u3066\u8EFD\u3081"}},kfc:{label:"KFC \u539F\u5473\u9E21",short:"KFC",tag:"per piece",unit:"\u5757",step:1,p:18,c:8,f:14,max:5,note:"\u723D\uFF0C\u4F46\u76D0\u9AD8",ja:{label:"KFC \u30AA\u30EA\u30B8\u30CA\u30EB\u30C1\u30AD\u30F3",short:"KFC",unit:"\u500B",note:"\u6E80\u8DB3\u611F\u3042\u308A\u3001\u5869\u5206\u9AD8\u3081"}},oikos:{label:"Oikos \u9AD8\u86CB\u767D\u9178\u5976",short:"Oikos",tag:"per cup",unit:"\u500B",step:1,p:12,c:5,f:0,max:8,note:"\u96F6\u8102\u8865\u86CB\u767D",ja:{label:"\u30AA\u30A4\u30B3\u30B9 \u9AD8\u305F\u3093\u3071\u304F",short:"\u30AA\u30A4\u30B3\u30B9",note:"\u8102\u8CEA\u306A\u3057\u3067\u88DC\u7D66"}}},xh={egg_fried:{label:"\u714E\u86CB",short:"\u714E\u86CB",unit:"\u4E2A",step:1,p:6,c:.4,f:7,max:6,ja:{label:"\u76EE\u7389\u713C\u304D",short:"\u5375",unit:"\u500B"}},sauce:{label:"\u30DA\u30DA\u30ED\u30F3\u9171",short:"\u849C\u6CB9\u9171",unit:"\u5305",step:1,p:.9,c:1.5,f:10,max:2,ja:{label:"\u30DA\u30DA\u30ED\u30F3\u30BD\u30FC\u30B9",short:"\u30BD\u30FC\u30B9",unit:"\u888B"}},olive:{label:"\u6A44\u6984\u6CB9",short:"\u6A44\u6984\u6CB9",unit:"\u5C0F\u52FA",step:1,p:0,c:0,f:4.5,max:6,ja:{label:"\u30AA\u30EA\u30FC\u30D6\u30AA\u30A4\u30EB",short:"\u30AA\u30A4\u30EB",unit:"\u5C0F\u3055\u3058"}},nuts:{label:"\u7D20\u713C\u304D\u30CA\u30C3\u30C4",short:"\u575A\u679C",unit:"10g",step:1,p:2,c:2,f:5,max:5,ja:{label:"\u7D20\u713C\u304D\u30CA\u30C3\u30C4",short:"\u30CA\u30C3\u30C4"}},avocado:{label:"\u30A2\u30DC\u30AB\u30C9",short:"\u725B\u6CB9\u679C",unit:"\u534A\u4E2A",step:1,p:1,c:4,f:15,max:2,ja:{label:"\u30A2\u30DC\u30AB\u30C9",short:"\u30A2\u30DC\u30AB\u30C9",unit:"\u534A\u5206"}}},ei={banana:{label:"\u9999\u8549",unit:"\u6839",step:1,max:4,p:1,c:27,f:.3,ja:{label:"\u30D0\u30CA\u30CA",unit:"\u672C"}},apple:{label:"\u82F9\u679C",unit:"\u4E2A",step:1,max:3,p:.4,c:35,f:.3,ja:{label:"\u308A\u3093\u3054",unit:"\u500B"}},kiwi:{label:"\u5947\u5F02\u679C",unit:"\u4E2A",step:1,max:4,p:1,c:14,f:.2,ja:{label:"\u30AD\u30A6\u30A4",unit:"\u500B"}},pineapple:{label:"\u5207\u5757\u83E0\u841D 240g",unit:"\u76D2",step:1,max:2,p:1.44,c:31.2,f:.24,ja:{label:"\u30AB\u30C3\u30C8\u30D1\u30A4\u30F3 240g",unit:"\u76D2"}},yogurt:{label:"\u65E0\u7CD6\u9178\u5976",unit:"g",step:50,max:400,p:.036,c:.049,f:.03,ja:{label:"\u7121\u7CD6\u30E8\u30FC\u30B0\u30EB\u30C8"}}},mS=[{key:"beef",tone:"red",source:"protein",sourceKey:"beef",label:"\u725B\u8089\u5207\u308A\u843D\u3068\u3057",short:"\u725B\u8089",unit:"g",step:100,defaultTarget:1200,max:3e3,buyHint:"\u665A\u9910\u4E3B\u86CB\u767D\uFF0C\u5148\u62FF\u8FD9\u4E2A",ja:{label:"\u725B\u8089\u5207\u308A\u843D\u3068\u3057",short:"\u725B\u8089",buyHint:"\u5915\u98DF\u306E\u4E3B\u5F79\u3002\u307E\u305A\u53D6\u308B"}},{key:"chicken",tone:"red",source:"protein",sourceKey:"chicken",label:"\u901F\u98DF\u9E21\u80F8",short:"\u9E21\u80F8",unit:"\u5757",step:1,defaultTarget:3,max:12,buyHint:"\u61D2\u4EBA\u5907\u7528\u86CB\u767D",ja:{label:"\u30B5\u30E9\u30C0\u30C1\u30AD\u30F3",short:"\u30C1\u30AD\u30F3",unit:"\u500B",buyHint:"\u5FD9\u3057\u3044\u65E5\u306E\u305F\u3093\u3071\u304F\u8CEA"}},{key:"oikos",tone:"red",source:"protein",sourceKey:"oikos",label:"Oikos \u9AD8\u86CB\u767D\u9178\u5976",short:"Oikos",unit:"\u500B",step:1,defaultTarget:4,max:14,buyHint:"\u96F6\u8102\u8865\u86CB\u767D",ja:{label:"\u30AA\u30A4\u30B3\u30B9 \u9AD8\u305F\u3093\u3071\u304F",short:"\u30AA\u30A4\u30B3\u30B9",buyHint:"\u8102\u8CEA\u306A\u3057\u3067\u88DC\u7D66"}},{key:"pasta",tone:"green",source:"carb",sourceKey:"pasta",label:"\u5E72\u610F\u9762",short:"\u610F\u9762",unit:"g",step:100,defaultTarget:500,max:2e3,buyHint:"\u4E3B\u529B\u665A\u9910\u78B3\u6C34",ja:{label:"\u4E7E\u71E5\u30D1\u30B9\u30BF",short:"\u30D1\u30B9\u30BF",buyHint:"\u5915\u98DF\u306E\u4E3B\u529B\u70AD\u6C34\u5316\u7269"}},{key:"soba",tone:"green",source:"carb",sourceKey:"soba",label:"\u835E\u9EA6\u9762",short:"\u835E\u9EA6",unit:"g",step:100,defaultTarget:400,max:1600,buyHint:"\u6E05\u723D\u6362\u53E3\u5473",ja:{label:"\u305D\u3070",short:"\u305D\u3070",buyHint:"\u8EFD\u304F\u5473\u5909\u3067\u304D\u308B"}},{key:"nissin",tone:"green",source:"carb",sourceKey:"nissin",label:"\u65E5\u6E05\u975E\u6CB9\u70B8",short:"\u65E5\u6E05",unit:"\u5305",step:1,defaultTarget:2,max:10,buyHint:"\u6CA1\u65F6\u95F4\u65F6\u9876\u4E0A",ja:{label:"\u65E5\u6E05\u30CE\u30F3\u30D5\u30E9\u30A4",short:"\u65E5\u6E05",unit:"\u888B",buyHint:"\u6642\u9593\u304C\u306A\u3044\u65E5\u306E\u4FDD\u967A"}},{key:"fresh_noodle",tone:"green",source:"carb",sourceKey:"fresh_noodle",label:"\u51B7\u85CF\u9C9C\u9762",short:"\u9C9C\u9762",unit:"g",step:10,defaultTarget:400,max:2e3,buyHint:"\u51B7\u85CF\u67DC\u65E0\u8C03\u5473\u5305\uFF0C\u6309 10g \u7B97",ja:{label:"\u51B7\u8535\u751F\u9EBA",short:"\u751F\u9EBA",buyHint:"\u8ABF\u5473\u306A\u3057\u300210g \u5358\u4F4D\u3067\u8CB7\u3046"}},{key:"pineapple",tone:"gold",source:"extra",sourceKey:"pineapple",label:"\u83E0\u841D 240g",short:"\u83E0\u841D",unit:"\u76D2",step:1,defaultTarget:2,max:8,buyHint:"\u8BAD\u7EC3\u524D\u540E\u76F4\u63A5\u5403",ja:{label:"\u30AB\u30C3\u30C8\u30D1\u30A4\u30F3 240g",short:"\u30D1\u30A4\u30F3",unit:"\u76D2",buyHint:"\u904B\u52D5\u524D\u5F8C\u306B\u305D\u306E\u307E\u307E\u98DF\u3079\u308B"}},{key:"banana",tone:"gold",source:"extra",sourceKey:"banana",label:"\u9999\u8549",short:"\u9999\u8549",unit:"\u6839",step:1,defaultTarget:4,max:14,buyHint:"\u5FEB\u901F\u8865\u78B3\u6C34",ja:{label:"\u30D0\u30CA\u30CA",short:"\u30D0\u30CA\u30CA",unit:"\u672C",buyHint:"\u3059\u3050\u8DB3\u305B\u308B\u70AD\u6C34\u5316\u7269"}},{key:"apple",tone:"gold",source:"extra",sourceKey:"apple",label:"\u82F9\u679C",short:"\u82F9\u679C",unit:"\u4E2A",step:1,defaultTarget:2,max:10,buyHint:"\u9876\u9965\u6C34\u679C",ja:{label:"\u308A\u3093\u3054",short:"\u308A\u3093\u3054",unit:"\u500B",buyHint:"\u304A\u8179\u306B\u305F\u307E\u308B\u679C\u7269"}},{key:"egg_fried",tone:"amber",source:"fat",sourceKey:"egg_fried",label:"\u9E21\u86CB",short:"\u9E21\u86CB",unit:"\u4E2A",step:1,defaultTarget:6,max:20,defaultEnabled:!1,buyHint:"\u8865\u8102\u80AA\u548C\u53E3\u611F",ja:{label:"\u5375",short:"\u5375",unit:"\u500B",buyHint:"\u8102\u8CEA\u3068\u6E80\u8DB3\u611F\u3092\u8DB3\u3059"}},{key:"sauce",tone:"amber",source:"fat",sourceKey:"sauce",label:"\u30DA\u30DA\u30ED\u30F3\u9171",short:"\u849C\u6CB9\u9171",unit:"\u5305",step:1,defaultTarget:3,max:12,defaultEnabled:!1,buyHint:"\u610F\u9762\u76F4\u63A5\u597D\u5403",ja:{label:"\u30DA\u30DA\u30ED\u30F3\u30BD\u30FC\u30B9",short:"\u30BD\u30FC\u30B9",unit:"\u888B",buyHint:"\u30D1\u30B9\u30BF\u304C\u3059\u3050\u304A\u3044\u3057\u3044"}},{key:"nuts",tone:"amber",source:"fat",sourceKey:"nuts",label:"\u7D20\u713C\u304D\u30CA\u30C3\u30C4",short:"\u575A\u679C",unit:"10g",step:1,defaultTarget:4,max:20,defaultEnabled:!1,buyHint:"\u5C11\u91CF\u8102\u80AA\u5907\u7528",ja:{label:"\u7D20\u713C\u304D\u30CA\u30C3\u30C4",short:"\u30CA\u30C3\u30C4",buyHint:"\u5C11\u91CF\u8102\u8CEA\u306E\u4FDD\u967A"}}],gS={chicken:{label:"\u9E21\u80F8",unit:"\u5757",step:1,max:10,p:22,c:1,f:2,ja:{label:"\u30C1\u30AD\u30F3",unit:"\u500B"}},egg:{label:"\u5168\u86CB",unit:"\u4E2A",step:1,max:10,p:6,c:.5,f:5,ja:{label:"\u5375",unit:"\u500B"}},oikos:{label:"Oikos",unit:"\u500B",step:1,max:6,p:12,c:5,f:0,ja:{label:"\u30AA\u30A4\u30B3\u30B9"}},onigiri:{label:"\u996D\u56E2",unit:"\u4E2A",step:1,max:6,p:3,c:39,f:.5,ja:{label:"\u304A\u306B\u304E\u308A",unit:"\u500B"}},nissin:{label:"\u65E5\u6E05\u9762",unit:"\u5305",step:1,max:4,p:6.7,c:55,f:4.9,ja:{label:"\u65E5\u6E05\u9EBA",unit:"\u888B"}},rice:{label:"\u7C73\u996D",unit:"g",step:50,max:1e3,p:.026,c:.28,f:.003,ja:{label:"\u3054\u306F\u3093"}},beef:{label:"\u725B\u8089",unit:"g",step:50,max:600,p:.19,c:0,f:.072,ja:{label:"\u725B\u8089"}},pasta:{label:"\u5E72\u610F\u9762",unit:"g",step:50,max:300,p:.12,c:.71,f:.015,ja:{label:"\u4E7E\u71E5\u30D1\u30B9\u30BF"}},banana:{label:"\u9999\u8549",unit:"\u6839",step:1,max:4,p:1,c:27,f:.25,ja:{label:"\u30D0\u30CA\u30CA",unit:"\u672C"}}},Dl={chicken:{label:"\u9E21\u80F8",unit:"\u5757",step:1,max:5,p:22,c:1,f:2,ja:{label:"\u30C1\u30AD\u30F3",unit:"\u500B"}},eggs:{label:"\u5168\u86CB",unit:"\u4E2A",step:1,max:6,p:6,c:.5,f:5,ja:{label:"\u5375",unit:"\u500B"}},banana:{label:"\u9999\u8549",unit:"\u6839",step:1,max:4,p:1,c:27,f:.25,ja:{label:"\u30D0\u30CA\u30CA",unit:"\u672C"}},pineapple:{label:"\u83E0\u841D 240g",unit:"\u76D2",step:1,max:2,p:1.44,c:31.2,f:.24,ja:{label:"\u30AB\u30C3\u30C8\u30D1\u30A4\u30F3 240g",unit:"\u76D2"}},oikos:{label:"Oikos",unit:"\u500B",step:1,max:5,p:12,c:5,f:0,ja:{label:"\u30AA\u30A4\u30B3\u30B9"}}},ts={tomato:{label:"\u65E0\u76D0\u756A\u8304\u6C41",sub:"K 600 / 200ml",p:1.8,c:7.1,f:0,kcal:39,k:600,na:5,ja:{label:"\u7121\u5869\u30C8\u30DE\u30C8\u30B8\u30E5\u30FC\u30B9",sub:"K 600 / 200ml"}},yasai:{label:"\u91CE\u83DC\u4E00\u65E5",sub:"K 740 / 200ml",p:3,c:14.5,f:0,kcal:75,k:740,na:80,ja:{label:"\u91CE\u83DC\u4E00\u65E5",sub:"K 740 / 200ml"}},none:{label:"\u4E0D\u8865\u94BE",sub:"\u4ECA\u5929\u7701\u4E86",p:0,c:0,f:0,kcal:0,k:0,na:0,ja:{label:"\u88DC\u7D66\u306A\u3057",sub:"\u4ECA\u65E5\u306F\u306A\u3057"}}},xS=[{id:"burger",label:"\u6C49\u5821 + \u85AF\u6761",kcal:980,ja:{label:"\u30D0\u30FC\u30AC\u30FC + \u30DD\u30C6\u30C8"}},{id:"ramen",label:"\u62C9\u9762 + \u996D",kcal:1200,ja:{label:"\u30E9\u30FC\u30E1\u30F3 + \u3054\u306F\u3093"}},{id:"sushi",label:"\u56DE\u8F6C\u5BFF\u53F8 12 \u76BF",kcal:1050,ja:{label:"\u56DE\u8EE2\u5BFF\u53F8 12\u76BF"}},{id:"pizza",label:"Pizza \u534A\u5F20",kcal:1150,ja:{label:"\u30D4\u30B6 \u534A\u5206"}},{id:"dessert",label:"\u751C\u54C1\u5976\u8336",kcal:620,ja:{label:"\u30C7\u30B6\u30FC\u30C8 + \u30DF\u30EB\u30AF\u30C6\u30A3\u30FC"}},{id:"katsu",label:"\u70B8\u732A\u6392\u5496\u55B1",kcal:1450,ja:{label:"\u30AB\u30C4\u30AB\u30EC\u30FC"}}],JC=[{id:"plan",labelKey:"navPlan",icon:Pl},{id:"detail",labelKey:"navDetail",icon:Va},{id:"shop",labelKey:"navShop",icon:Rl},{id:"cheat",labelKey:"navCheat",icon:ah}];function QC(t){let e=_g[t]||_g.zh;return n=>e[n]??_g.zh[n]??n}function en(t,e){return t&&(e==="ja"&&t.ja?{...t,...t.ja}:t)}function e2(t,e){let n={\u4F4E\u78B3:e("lowCarb"),\u4E2D\u78B3:e("mediumCarb"),\u9AD8\u78B3:e("highCarb")};return{...t.carbDay,label:n[t.carbDay.label]||t.carbDay.label}}async function vS(t){if(navigator.clipboard?.writeText&&window.isSecureContext)try{await navigator.clipboard.writeText(t);return}catch{}let e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="fixed",e.style.left="-9999px",e.style.top="0",e.style.fontSize="16px",document.body.appendChild(e),e.focus(),e.select(),e.setSelectionRange(0,t.length);try{if(!document.execCommand("copy"))throw new Error("copy command failed")}finally{document.body.removeChild(e)}}function _S(t){return Object.entries(t).filter(([e,n])=>Dl[e]&&n>0)}function t2(t,e,n){let i=_S(t);return i.length?i.map(([r,s])=>{let a=en(Dl[r],e);return`${a.label} ${Re(s)}${a.unit}`}).join(" / "):n("noEat")}function n2(t,e,n,i){let r=en(ts[t]||ts.none,n);return t==="none"||e<=0?i("noDrink"):`${r.label} ${Re(e)}ml`}function yS(t,e,n){return _S(t).length>0||e!=="none"&&n>0}function SS(t,e,n,i,r){return`${t2(t,i,r)} \xB7 ${n2(e,n,i,r)}`}function i2(t,e){return t.map(n=>{let i=n.baseQty??n.qty,r=e[n.key]||0,s=je(i+r,0,n.max??1/0),a=Re(s-i,n.step<1?1:2);return{...n,baseQty:i,qty:s,adjustment:a,macro:Gt(n.unitMacro,s)}})}function r2(t){return Rs({p:t*.31/4,c:t*.49/4,f:t*.2/9,kcal:t})}function MS(t,e){let n=fh[t];return{...n,f:t==="beef"?e*.8/100:n.f||0}}function s2(t,e){return t.source==="protein"?MS(t.sourceKey,e):t.source==="carb"?gh[t.sourceKey].perUnit:t.source==="extra"?ei[t.sourceKey]:t.source==="fat"?xh[t.sourceKey]:zi}function a2(t,e){return mS.map(n=>({...en(n,e),unitMacro:s2(n,t)}))}function bg(t,e){if(t.key?.startsWith("carb-")){let n=t.key.replace("carb-",""),i=en(gh[n],e);return{...t,name:i.name,short:i.short,unit:i.unit}}if(t.key?.startsWith("fat-")){let n=t.key.replace("fat-",""),i=en(xh[n],e);return{...t,name:i.label,short:i.short,unit:i.unit}}if(t.key?.startsWith("extra-")){let n=t.key.replace("extra-",""),i=en(ei[n],e);return{...t,name:i.label,short:i.label,unit:i.unit}}if(fh[t.key]){let n=en(fh[t.key],e);return{...t,name:n.label,short:n.short,unit:n.unit}}return t}function o2(t,e){let[n,i]=(0,Pe.useState)(()=>{let r=Number(localStorage.getItem(t));return Number.isFinite(r)&&r>0?r:e});return(0,Pe.useEffect)(()=>{localStorage.setItem(t,String(n))},[t,n]),[n,i]}function yg(t,e){let n=()=>typeof e=="function"?e():e,[i,r]=(0,Pe.useState)(()=>{try{let s=localStorage.getItem(t);return s?JSON.parse(s):n()}catch{return n()}});return(0,Pe.useEffect)(()=>{localStorage.setItem(t,JSON.stringify(i))},[t,i]),[i,r]}function l2(){let t=(0,Pe.useRef)(null);return(0,Pe.useEffect)(()=>{let e=t.current;if(!e)return;let n=new Jo,i=new Jt(38,1,.1,100);i.position.set(0,0,10);let r;try{r=new eh({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{return}r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setClearColor(16777215,0),e.appendChild(r.domElement);let s=new rr;n.add(s),n.add(new dl(16777215,1.1));let a=new La(16752533,2.8,24);a.position.set(5,3,7),n.add(a);let o=new La(8508848,1.9,18);o.position.set(-5,-2,5),n.add(o);let l=[16754075,16764797,9099444,9689572],c=new al(.56,.12,120,16),h=new rl(.12,.34,8,18),f=l.map((u,p)=>{let v=new Na({color:u,emissive:u,emissiveIntensity:.12,roughness:.42,metalness:.04}),M=new mn(c,v),C=p*Math.PI*.5;return M.position.set(Math.cos(C)*3.2,Math.sin(C)*1.5,-1-p*.2),M.rotation.set(p*.5,p*.35,p*.8),M.userData={angle:C,speed:.002+p*7e-4},s.add(M),M}),d=Array.from({length:26},(u,p)=>{let v=new Na({color:l[p%l.length],roughness:.48,metalness:.02}),M=new mn(h,v),C=p*.58,E=2.2+p%4*.54;return M.position.set(Math.cos(C)*E,Math.sin(C)*E*.42,-2.4-p%5*.18),M.rotation.set(C*.7,C*.3,C),M.userData={angle:C,radius:E,speed:.003+p%5*6e-4},s.add(M),M}),m=()=>{let{width:u,height:p}=e.getBoundingClientRect();r.setSize(Math.max(1,u),Math.max(1,p),!1),i.aspect=Math.max(1,u)/Math.max(1,p),i.updateProjectionMatrix()};m();let y=new ResizeObserver(m);y.observe(e);let b=0,x=()=>{b=window.requestAnimationFrame(x),s.rotation.z+=.0011,s.rotation.y=Math.sin(Date.now()*28e-5)*.16,f.forEach(u=>{u.rotation.x+=u.userData.speed*1.7,u.rotation.y+=u.userData.speed}),d.forEach(u=>{u.userData.angle+=u.userData.speed,u.position.x=Math.cos(u.userData.angle)*u.userData.radius,u.position.y=Math.sin(u.userData.angle)*u.userData.radius*.42,u.rotation.z+=.006}),r.render(n,i)};return x(),()=>{window.cancelAnimationFrame(b),y.disconnect(),r.dispose(),c.dispose(),h.dispose(),e.removeChild(r.domElement)}},[]),(0,_.jsx)("div",{ref:t,className:"pointer-events-none fixed inset-0 -z-10 opacity-55","data-three-orbit":!0})}function Tg(){let[t,e]=(0,Pe.useState)("plan"),[n,i]=yg("cutting:locale:v1","zh"),r=pS.includes(n)?n:"zh",s=(0,Pe.useMemo)(()=>QC(r),[r]),[a,o]=yg("cutting:targetProfile:v1",Ll),l=(0,Pe.useMemo)(()=>({...Ll,...a||{}}),[a]),c=(0,Pe.useMemo)(()=>rS(l),[l]),[h,f]=o2("cutting:tdee",ZC),[d,m]=(0,Pe.useState)("quick"),[y,b]=(0,Pe.useState)(800),[x,u]=(0,Pe.useState)({}),[p,v]=(0,Pe.useState)("pasta"),[M,C]=(0,Pe.useState)(["beef"]),[E,R]=(0,Pe.useState)([]),[g,T]=(0,Pe.useState)({}),[P,I]=(0,Pe.useState)(13),[B,W]=(0,Pe.useState)({}),[X,z]=(0,Pe.useState)("none"),[H,U]=(0,Pe.useState)(0),[Y,Z]=(0,Pe.useState)(6.5),[se,xe]=(0,Pe.useState)(2e3),[be,Ze]=(0,Pe.useState)(7),[rt,ze]=yg("cutting:shopPlan:v1",()=>vg(mS)),[J,pe]=(0,Pe.useState)(!1),[oe,Ce]=(0,Pe.useState)(!1),[Ue,Ie]=(0,Pe.useState)(!1),[ut,Ge]=(0,Pe.useState)({}),[Ye,lt]=(0,Pe.useState)({name:"\u624B\u52A8\u52A0\u9910",p:0,c:0,f:0,kcal:0}),[He,Pt]=(0,Pe.useState)({}),[ft,Ut]=(0,Pe.useState)("idle"),[D,It]=(0,Pe.useState)(""),[qe,st]=(0,Pe.useState)(!1),ue=(0,Pe.useRef)(0),pt=(Me,N,te,$=1/0)=>{Me(he=>{let ie=je(te,0,$),Q={...he};return ie>0?Q[N]=ie:delete Q[N],Q})},A=Me=>{C(N=>N.includes(Me)?N.length>1?N.filter(te=>te!==Me):N:[...N,Me])},S=Me=>{R(N=>N.includes(Me)?N.filter(te=>te!==Me):[...N,Me])},F=(0,Pe.useMemo)(()=>{let Me=Object.entries(x).reduce((O,[L,V])=>$t(O,Gt(gS[L],V)),zi),N=d==="tally"&&Me.kcal>0?Me:r2(y),te=Object.entries(B).reduce((O,[L,V])=>$t(O,Gt(Dl[L],V)),zi),$=ts[X]||ts.none,he=Rs(Gt($,H/200)),ie=Rs(Ye),Q=$t(N,te,he,ie),we=Object.entries(g).filter(([O,L])=>ei[O]&&L>0),ke=we.reduce((O,[L,V])=>$t(O,Gt(ei[L],V)),zi),Mt=we.map(([O,L])=>({key:`extra-${O}`,name:ei[O].label,short:ei[O].label,qty:L,unit:ei[O].unit,step:ei[O].step,max:ei[O].max,unitMacro:ei[O],macro:Gt(ei[O],L),tone:"gold"})),et=$t(Q,ke),ni=Math.max(0,c.p-et.p),Tn=M.map(O=>{let L=MS(O,P),V=ni/Math.max(1,M.length)/Math.max(1,L.p),de=je(xn(V,L.step),0,L.max);return{key:O,name:L.label,short:L.short,qty:de,unit:L.unit,step:L.step,max:L.max,unitMacro:L,macro:Gt(L,de),tone:"red"}}),Is=Tn.reduce((O,L)=>$t(O,L.macro),zi),_h=Math.max(0,c.f-et.f-Is.f),Ha=E.length?E:[],Wa=Ha.map(O=>{let L=xh[O],V=_h/Math.max(1,Ha.length)/Math.max(1,L.f),de=je(xn(V,L.step),0,L.max);return{key:`fat-${O}`,name:L.label,short:L.short,qty:de,unit:L.unit,step:L.step,max:L.max,unitMacro:L,macro:Gt(L,de),tone:"amber"}}),Vi=Wa.reduce((O,L)=>$t(O,L.macro),zi),Xa=$t(et,Is,Vi),Ul=Math.max(0,c.kcal-Xa.kcal),An=gh[p],is=An.unit==="\u5305"?8:420,qa=je(xn(Ul/An.kcalUnit,An.step),0,is),Ns={key:`carb-${p}`,name:An.name,short:An.short,qty:qa,unit:An.unit,step:An.step,max:is,unitMacro:An.perUnit,macro:Gt(An.perUnit,qa),tone:"green"},Ls=aS([...Tn,...Wa,Ns],et,c),Ya=i2([...Ls.filter(O=>O.tone==="red"),...Ls.filter(O=>O.tone==="amber"),...Mt,...Ls.filter(O=>O.tone==="green")],ut),Fl=Ya.reduce((O,L)=>$t(O,L.macro),zi),kl=$t(Q,Fl),yh=Math.round(h-kl.kcal),Sh=(ts[X]?.k||0)*(H/200),Mh=(ts[X]?.na||0)*(H/200),bh=Y*393+Mh,wh=se+Sh,w=oS(a2(P,r),rt,be),k=w.reduce((O,L)=>$t(O,L.macro),zi);return{lunch:N,pre:te,drink:he,snack:ie,beforeDinner:Q,dinner:Fl,dinnerItems:Ya,total:kl,deficit:yh,potassium:wh,sodium:bh,shopping:w,shoppingMacro:k,carb:An}},[r,P,p,ut,X,H,g,E,se,y,d,B,Y,be,rt,Ye,x,c,h,M]),K=(0,Pe.useMemo)(()=>sS(F.total,c,l.bodyWeightKg),[F.total,l.bodyWeightKg,c]),ee=xS.reduce((Me,N)=>Me+(He[N.id]||0)*N.kcal,0),ae=Math.round(F.total.kcal+ee-h),le=yS(B,X,H),q=SS(B,X,H,r,s),j=Ye.kcal>0||Ye.p>0||Ye.c>0||Ye.f>0,me=(Me,N)=>{Ge(te=>{let $=Me.baseQty??Me.qty,he=je(Me.qty+N,0,Me.max??1/0),ie=Re(he-$,Me.step<1?1:2),Q={...te};return ie!==0?Q[Me.key]=ie:delete Q[Me.key],Q})},ve=()=>{o(Ll),b(800),u({}),v("pasta"),C(["beef"]),R([]),T({}),I(13),W({}),z("none"),U(0),Ge({}),lt({name:r==="ja"?"\u624B\u5165\u529B\u306E\u9593\u98DF":"\u624B\u52A8\u52A0\u9910",p:0,c:0,f:0,kcal:0})};(0,Pe.useEffect)(()=>()=>window.clearTimeout(ue.current),[]),(0,Pe.useEffect)(()=>{window.scrollTo({top:0,behavior:"auto"})},[t]),(0,Pe.useEffect)(()=>{document.documentElement.lang=r==="ja"?"ja":"zh-CN",document.documentElement.dataset.locale=r,document.title=r==="ja"?"Cutting Lab \xB7 \u4ECA\u65E5\u306E\u3054\u306F\u3093":"Cutting Lab \xB7 \u4ECA\u65E5\u9910\u76D8"},[r]);let ce=()=>({date:new Date().toISOString().slice(0,10),locale:r,targetProfile:l,targets:c,lunch:F.lunch,pre:F.pre,drink:{key:X,ml:H,macro:F.drink},snack:Ye,dinnerAdjustments:ut,dinner:{items:F.dinnerItems.map(Me=>bg(Me,r)),macro:F.dinner},total:F.total,deficit:F.deficit}),re=async()=>{let Me={...ce(),copiedAt:new Date().toISOString()},N=JSON.stringify(Me,null,2);It(N),window.clearTimeout(ue.current),Ut("copying");try{await vS(N),st(!1),Ut("copied")}catch(te){console.error(te),Ut("failed"),st(!0)}ue.current=window.setTimeout(()=>Ut("idle"),1800)},De=Me=>{window.requestAnimationFrame(()=>{document.getElementById(`plan-${Me}`)?.scrollIntoView({behavior:"smooth",block:"start"})})},Fe=e2(K,s);return(0,_.jsxs)("div",{className:"theme-soft min-h-screen overflow-hidden text-[#4d3934]",children:[(0,_.jsx)(l2,{}),(0,_.jsx)("div",{className:"soft-app-bg fixed inset-0 -z-30"}),(0,_.jsx)("div",{className:"soft-grid-bg fixed inset-0 -z-20"}),(0,_.jsxs)("div",{className:"mx-auto flex w-full max-w-7xl flex-col gap-5 px-3 pb-28 pt-3 sm:px-5 lg:px-8",children:[(0,_.jsxs)("header",{className:"soft-header sticky top-3 z-40 flex items-center justify-between gap-2 rounded-[26px] border border-white/70 bg-white/78 px-2.5 py-2 shadow-[0_20px_60px_-35px_rgba(162,96,82,0.55)] backdrop-blur-2xl",children:[(0,_.jsxs)("button",{onClick:()=>e("plan"),className:"flex min-w-0 items-center gap-2.5 text-left",children:[(0,_.jsx)("span",{className:"grid h-10 w-10 shrink-0 place-items-center rounded-[18px] bg-[#ff9f95] text-white shadow-[0_12px_30px_-18px_rgba(255,122,113,0.8)]",children:(0,_.jsx)(mg,{className:"h-5 w-5"})}),(0,_.jsxs)("span",{className:"block min-w-0",children:[(0,_.jsx)("span",{className:"block truncate font-display text-base font-extrabold leading-none text-[#4d3934]",children:"Cutting Lab"}),(0,_.jsx)("span",{className:"mt-1 block truncate text-[11px] font-bold text-[#a47b72]",children:s("appSub")})]})]}),(0,_.jsx)("nav",{className:"ml-auto hidden shrink-0 grid-cols-4 rounded-[22px] border border-[#ffd8d1]/80 bg-[#fff7f0]/80 p-1 lg:grid",children:(0,_.jsx)(hS,{tab:t,setTab:e,mode:"top",t:s})}),(0,_.jsx)(c2,{locale:r,setLocale:i,t:s})]}),t==="plan"&&(0,_.jsx)(u2,{model:F,macroReport:K,activeCarbDay:Fe,fuelActive:le,onFuel:()=>Ce(!0),onCopy:re,copyStatus:ft,onJump:De,t:s}),t==="plan"&&(0,_.jsx)(d2,{model:F,targets:c,targetProfile:l,onFuel:()=>Ce(!0),fuelActive:le,fuelSummary:q,onSnack:()=>Ie(!0),onCopy:re,copyStatus:ft,t:s}),t==="plan"&&(0,_.jsx)(h2,{locale:r,t:s,model:F,lunchMode:d,setLunchMode:m,lunchKcal:y,setLunchKcal:b,tally:x,setTally:u,setMapQty:pt,carbPlan:p,setCarbPlan:v,proteinKeys:M,toggleProtein:A,fatKeys:E,toggleFat:S,extraCarbs:g,setExtraCarbs:T,beefFat:P,setBeefFat:I,advancedOpen:J,setAdvancedOpen:pe,targets:c,targetProfile:l,setTargetProfile:o,macroReport:K,activeCarbDay:Fe,resetDefaults:ve,onTuneDinner:me,resetDinnerAdjustments:()=>Ge({})}),t==="detail"&&(0,_.jsx)(f2,{locale:r,t:s,model:F,targets:c,targetProfile:l,setTargetProfile:o,macroReport:K,activeCarbDay:Fe,tdee:h,setTdee:f,pre:B,setPre:W,setMapQty:pt,drinkKey:X,setDrinkKey:z,drinkMl:H,setDrinkMl:U,saltG:Y,setSaltG:Z,foodK:se,setFoodK:xe}),t==="shop"&&(0,_.jsx)(p2,{locale:r,t:s,model:F,shopDays:be,setShopDays:Ze,setShopPlan:ze}),t==="cheat"&&(0,_.jsx)(v2,{locale:r,t:s,cheat:He,setCheat:Pt,cheatTotal:ee,cheatSurplus:ae,tdee:h,dayKcal:F.total.kcal})]}),(0,_.jsx)(_2,{locale:r,t:s,open:oe,setOpen:Ce,pre:B,setPre:W,setMapQty:pt,drinkKey:X,setDrinkKey:z,drinkMl:H,setDrinkMl:U,model:F}),(0,_.jsx)(S2,{locale:r,t:s,open:Ue,setOpen:Ie,snack:Ye,setSnack:lt,active:j,dinnerSummary:F.dinnerItems.slice(0,4).map(Me=>{let N=bg(Me,r);return`${N.short||N.name} ${Re(N.qty)}${N.unit}`}).join(" \xB7 ")}),(0,_.jsx)(y2,{open:qe,setOpen:st,text:D,onCopied:()=>{st(!1),Ut("copied"),window.clearTimeout(ue.current),ue.current=window.setTimeout(()=>Ut("idle"),1800)},t:s}),(0,_.jsxs)("button",{onClick:()=>Ie(!0),className:"fixed bottom-5 right-5 z-50 hidden h-14 w-14 place-items-center rounded-[22px] border border-white/80 bg-[#ffcf7d] text-[#5d4037] shadow-[0_18px_38px_-22px_rgba(204,125,57,0.8)] transition hover:-translate-y-0.5 lg:grid","aria-label":s("snackTitle"),children:[(0,_.jsx)(Zy,{className:"h-6 w-6"}),j&&(0,_.jsx)("span",{className:"absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#69cda5]"})]}),(0,_.jsx)("nav",{className:"fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 rounded-[24px] border border-white/80 bg-white/82 p-1.5 shadow-[0_18px_65px_-35px_rgba(134,80,70,0.8)] backdrop-blur-2xl lg:hidden",children:(0,_.jsx)(hS,{tab:t,setTab:e,mode:"bottom",t:s})})]})}function c2({locale:t,setLocale:e,t:n}){return(0,_.jsx)("div",{"data-language-toggle":!0,className:"grid shrink-0 grid-cols-2 rounded-[18px] border border-[#ffd8d1]/80 bg-[#fff9f4] p-1","aria-label":n("language"),children:pS.map(i=>(0,_.jsx)("button",{onClick:()=>e(i),className:`rounded-[14px] px-2.5 py-2 text-[11px] font-extrabold transition sm:px-3 ${t===i?"bg-[#ff9f95] text-white shadow-[0_10px_24px_-18px_rgba(255,122,113,0.8)]":"text-[#a47b72] hover:bg-white"}`,children:n(i)},i))})}function hS({tab:t,setTab:e,mode:n,t:i}){return JC.map(r=>{let s=r.icon;return(0,_.jsxs)("button",{onClick:()=>e(r.id),className:`grid h-11 place-items-center rounded-[18px] px-2 text-[11px] font-extrabold transition ${n==="top"?"min-w-20 grid-cols-[16px_auto] gap-1.5":"grid-rows-[18px_auto] gap-0.5"} ${t===r.id?"bg-[#5fc89e] text-white shadow-[0_12px_28px_-20px_rgba(57,156,118,0.9)]":"text-[#a47b72] hover:bg-white hover:text-[#4d3934]"}`,"aria-label":i(r.labelKey),children:[(0,_.jsx)(s,{className:"h-4 w-4"}),(0,_.jsx)("span",{children:i(r.labelKey)})]},r.id)})}function u2({model:t,macroReport:e,activeCarbDay:n,fuelActive:i,onFuel:r,onCopy:s,copyStatus:a,onJump:o,t:l}){let c={idle:l("copy"),copying:l("copying"),copied:l("copied"),failed:l("retry")}[a]||l("copy"),h=[{key:"intake",icon:Oi,label:l("intake"),value:`${Math.round(t.lunch.kcal)} kcal`,onClick:()=>o("intake")},{key:"dinner",icon:Pl,label:l("dinner"),value:`${Math.round(t.dinner.kcal)} kcal`,onClick:()=>o("dinner")},{key:"rhythm",icon:Va,label:n.label,value:`C ${e.carbPerKg}g/kg`,onClick:()=>o("rhythm")},{key:"fuel",icon:Tl,label:l("fuel"),value:l(i?"on":"off"),onClick:r},{key:"copy",icon:Oi,label:c,value:l("record"),onClick:s}];return(0,_.jsx)("div",{"data-plan-flow-dock":!0,className:"sticky top-[74px] z-30 rounded-[24px] border border-white/75 bg-white/80 p-1.5 shadow-[0_18px_60px_-40px_rgba(134,80,70,0.65)] backdrop-blur-2xl lg:top-[82px]",children:(0,_.jsx)("div",{className:"grid grid-cols-5 gap-1",children:h.map(f=>{let d=f.icon;return(0,_.jsxs)("button",{"data-flow-action":f.key,onClick:f.onClick,className:"min-w-0 rounded-[18px] border border-[#ffe3da] bg-[#fff9f4]/90 px-1.5 py-2 text-left transition hover:-translate-y-0.5 hover:border-[#ffb8ae] hover:bg-white",children:[(0,_.jsx)(d,{className:"mx-auto h-4 w-4 text-[#ff8d82]"}),(0,_.jsx)("div",{className:"mt-1 truncate text-center font-cjk text-[11px] font-extrabold leading-none text-[#4d3934]",children:f.label}),(0,_.jsx)("div",{className:"mt-1 truncate text-center font-mono text-[9px] leading-none text-[#a47b72]",children:f.value})]},f.key)})})})}function d2({model:t,targets:e,targetProfile:n,onFuel:i,fuelActive:r,fuelSummary:s,onSnack:a,onCopy:o,copyStatus:l,t:c}){let h={idle:{label:c("copy"),sub:c("record"),icon:Oi},copying:{label:c("copying"),sub:"clipboard",icon:Oi},copied:{label:c("copied"),sub:"ok",icon:fg},failed:{label:c("retry"),sub:"clipboard",icon:Oi}}[l]||{label:c("copy"),sub:c("record"),icon:Oi};return(0,_.jsxs)("section",{className:"grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch",children:[(0,_.jsx)("div",{className:"soft-hero-panel relative overflow-hidden rounded-[34px] border border-white/70 bg-white/72 p-5 shadow-[0_30px_90px_-60px_rgba(134,80,70,0.75)] backdrop-blur-2xl sm:p-7",children:(0,_.jsxs)("div",{className:"relative z-10 flex h-full min-h-[330px] flex-col justify-between",children:[(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,_.jsxs)(M2,{icon:Ky,children:[Re(n.bodyWeightKg)," kg \xB7 P ",Re(n.proteinPerKg,1),"g/kg \xB7 F ",Re(n.fatMinPerKg,1),"g/kg"]}),(0,_.jsxs)("button",{"data-home-fuel-button":!0,onClick:i,className:`inline-flex max-w-full items-center gap-2 rounded-[999px] border px-3 py-2 text-left text-xs font-bold transition hover:-translate-y-0.5 ${r?"border-[#6fd2aa] bg-[#e8fff4] text-[#2c765e]":"border-[#ffe3da] bg-white/72 text-[#a47b72]"}`,"aria-label":`${c("fuel")}: ${s}`,children:[(0,_.jsx)(Tl,{className:"h-4 w-4 shrink-0"}),(0,_.jsx)("span",{children:c("fuel")}),(0,_.jsx)("span",{className:"rounded-full bg-white px-2 py-0.5 font-mono text-[10px]",children:c(r?"on":"off")})]})]}),(0,_.jsxs)("h1",{className:"mt-7 max-w-2xl font-display text-4xl font-extrabold leading-[1.04] text-[#4d3934] sm:text-7xl",children:[c("heroTitle"),(0,_.jsx)("span",{className:"block text-[#ff8d82]",children:c("heroAccent")})]}),(0,_.jsx)("p",{className:"mt-4 max-w-xl text-sm font-semibold leading-7 text-[#8f6c64] sm:text-base",children:c("heroCopy")})]}),(0,_.jsxs)("div",{className:"mt-7 grid grid-cols-3 gap-2",children:[(0,_.jsx)(Mg,{icon:iS,label:c("snack"),onClick:a}),(0,_.jsx)(Mg,{icon:h.icon,label:h.label,sub:h.sub,onClick:o,dataAttr:"copy-plan-button"}),(0,_.jsx)(Mg,{icon:pg,label:`${t.deficit>0?"-":"+"}${Math.abs(t.deficit)}`,sub:c("deficit")})]})]})}),(0,_.jsx)("div",{className:"overflow-hidden rounded-[34px] border border-white/70 bg-white/72 shadow-[0_30px_90px_-60px_rgba(134,80,70,0.75)] backdrop-blur-xl",children:(0,_.jsxs)("div",{className:"relative h-[230px] overflow-hidden sm:h-[360px] lg:h-full lg:min-h-[430px]",children:[(0,_.jsx)("img",{src:Eg("protocol-hero-premium.jpg"),alt:"Cutting Lab dinner visual",className:"h-full w-full object-cover object-center brightness-[1.08] contrast-[0.95] saturate-[0.92]"}),(0,_.jsx)("div",{className:"soft-image-wash absolute inset-0"}),(0,_.jsxs)("div",{className:"absolute inset-x-0 bottom-0 p-4 sm:p-5",children:[(0,_.jsxs)("div",{className:"mb-3 flex items-end justify-between gap-3",children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"text-xs font-extrabold text-[#8f6c64]",children:c("dinnerKcal")}),(0,_.jsx)("div",{className:"font-display text-5xl font-extrabold leading-none text-[#4d3934]",children:Math.round(t.dinner.kcal)})]}),(0,_.jsxs)("div",{className:"rounded-[22px] border border-white/80 bg-white/78 px-3 py-2 text-right backdrop-blur",children:[(0,_.jsx)("div",{className:"text-[11px] font-bold text-[#a47b72]",children:c("todayTotal")}),(0,_.jsx)("div",{className:"font-mono text-xl font-bold text-[#5fc89e]",children:Math.round(t.total.kcal)})]})]}),(0,_.jsxs)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[(0,_.jsx)(uh,{label:"P",value:t.total.p,target:e.p,unit:"g"}),(0,_.jsx)(uh,{label:"C",value:t.total.c,target:e.c,unit:"g"}),(0,_.jsx)(uh,{label:"F",value:t.total.f,target:e.f,unit:"g"}),(0,_.jsx)(uh,{label:"Kcal",value:t.total.kcal,target:e.kcal,unit:""})]})]})]})})]})}function h2(t){let{locale:e,t:n,model:i,lunchMode:r,setLunchMode:s,lunchKcal:a,setLunchKcal:o,tally:l,setTally:c,setMapQty:h,carbPlan:f,setCarbPlan:d,proteinKeys:m,toggleProtein:y,fatKeys:b,toggleFat:x,extraCarbs:u,setExtraCarbs:p,beefFat:v,setBeefFat:M,advancedOpen:C,setAdvancedOpen:E,targets:R,targetProfile:g,setTargetProfile:T,macroReport:P,activeCarbDay:I,resetDefaults:B,onTuneDinner:W,resetDinnerAdjustments:X}=t,z=i.dinnerItems.some(U=>U.adjustment!==0),H=(U,Y,Z,se)=>{T(xe=>({...Ll,...xe||{},[U]:je(Y,Z,se)}))};return(0,_.jsxs)("main",{className:"grid gap-5 lg:grid-cols-[0.9fr_1.1fr]",children:[(0,_.jsxs)("section",{className:"space-y-5",children:[(0,_.jsxs)(vi,{id:"plan-intake",eyebrow:n("planIntakeEyebrow"),title:n("planIntakeTitle"),icon:Oi,children:[(0,_.jsx)(b2,{value:r,onChange:s,options:[{value:"quick",label:n("quickKcal")},{value:"tally",label:n("tallyMode")}]}),r==="quick"?(0,_.jsx)(w2,{value:a,onChange:o,t:n}):(0,_.jsx)("div",{className:"mt-5 grid gap-2 sm:grid-cols-2",children:Object.entries(gS).map(([U,Y])=>{let Z=en(Y,e);return(0,_.jsx)(mh,{label:Z.label,meta:`${Re(ur(Gt(Y,Y.step)))} kcal / ${Y.step}${Z.unit}`,value:l[U]||0,unit:Z.unit,step:Y.step,max:Y.max,onChange:se=>h(c,U,se,Y.max)},U)})})]}),(0,_.jsx)(vi,{eyebrow:n("planChoiceEyebrow"),title:n("planChoiceTitle"),icon:Pl,children:(0,_.jsx)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6",children:Object.entries(gh).map(([U,Y])=>{let Z=en(Y,e);return(0,_.jsxs)("button",{onClick:()=>d(U),className:`rounded-[22px] border p-3 text-left transition hover:-translate-y-0.5 ${f===U?"border-[#ffb8ae] bg-[#fff0ed] text-[#4d3934]":"border-[#ffe3da] bg-white/58 text-[#8f6c64] hover:border-[#ffb8ae] hover:bg-white"}`,children:[(0,_.jsx)("div",{className:"h-2 w-10 rounded-full",style:{backgroundColor:Z.color}}),(0,_.jsx)("div",{className:"mt-3 font-cjk text-sm font-extrabold",children:Z.short}),(0,_.jsx)("div",{className:"mt-1 text-[11px] font-semibold text-[#a47b72]",children:Z.sub})]},U)})})}),(0,_.jsx)(bS,{open:C,onToggle:()=>E(!C),title:n("advanced"),subtitle:n("advancedSub"),children:(0,_.jsxs)("div",{className:"grid gap-5",children:[(0,_.jsx)(Ps,{title:n("dinnerProtein"),children:(0,_.jsx)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries(fh).map(([U,Y])=>{let Z=en(Y,e);return(0,_.jsx)(ph,{active:m.includes(U),onClick:()=>y(U),title:Z.short,meta:Z.note},U)})})}),(0,_.jsx)(Ps,{title:n("fatSource"),children:(0,_.jsx)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:Object.entries(xh).map(([U,Y])=>{let Z=en(Y,e);return(0,_.jsx)(ph,{active:b.includes(U),onClick:()=>x(U),title:Z.short,meta:`${Z.f}g / ${Z.unit}`,tone:"amber"},U)})})}),(0,_.jsx)(Ps,{title:n("extras"),children:(0,_.jsx)("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(ei).map(([U,Y])=>{let Z=en(Y,e);return(0,_.jsx)(mh,{label:Z.label,meta:`${Re(ur(Gt(Y,Y.step)))} kcal / ${Y.step}${Z.unit}`,value:u[U]||0,unit:Z.unit,step:Y.step,max:Y.max,onChange:se=>h(p,U,se,Y.max)},U)})})}),(0,_.jsxs)(Ps,{title:n("beefFat"),children:[(0,_.jsx)("div",{className:"grid grid-cols-4 gap-2",children:[5,9,13,18].map(U=>(0,_.jsxs)(vh,{active:v===U,onClick:()=>M(U),children:[U,"g"]},U))}),(0,_.jsxs)("div",{className:"mt-3 flex items-center gap-3",children:[(0,_.jsx)("input",{type:"number",value:v,onChange:U=>M(je(U.target.value,0,40)),className:"h-11 w-24 rounded-[18px] border border-[#ffe3da] bg-white/70 text-center font-mono text-lg font-bold text-[#4d3934] outline-none focus:border-[#ff9f95]"}),(0,_.jsx)("span",{className:"text-xs font-semibold text-[#a47b72]",children:"g / 100g raw"})]})]}),(0,_.jsxs)(Ps,{title:n("targetFormula"),children:[(0,_.jsx)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[["bodyWeightKg",n("bodyWeight"),"kg",30,250],["proteinPerKg",n("proteinRatio"),"g/kg",.8,3],["fatMinPerKg",n("fatMin"),"g/kg",.3,1.5],["kcal",n("calorie"),"kcal",1e3,5e3]].map(([U,Y,Z,se,xe])=>(0,_.jsx)(es,{label:Y,unit:Z,value:g[U],min:se,max:xe,onChange:be=>H(U,be,se,xe)},U))}),(0,_.jsx)(wS,{targets:R,targetProfile:g,t:n}),(0,_.jsxs)("button",{onClick:B,className:"mt-3 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/60 px-3 py-2 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]",children:[(0,_.jsx)(Ga,{className:"h-4 w-4"}),n("resetDefault")]})]})]})})]}),(0,_.jsxs)("section",{className:"space-y-5",children:[(0,_.jsxs)(vi,{id:"plan-dinner",eyebrow:n("dinnerAnswerEyebrow"),title:n("dinnerAnswerTitle"),icon:mg,children:[(0,_.jsx)("div",{className:"grid gap-2",children:i.dinnerItems.length?i.dinnerItems.map((U,Y)=>(0,_.jsx)(R2,{item:bg(U,e),index:Y,onTune:W,t:n},U.key)):(0,_.jsx)("div",{className:"rounded-[22px] border border-[#ffe3da] bg-white/58 p-4 text-sm font-bold text-[#a47b72]",children:n("noDinner")})}),z&&(0,_.jsxs)("button",{onClick:X,className:"mt-3 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/60 px-3 py-2 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]",children:[(0,_.jsx)(Ga,{className:"h-4 w-4"}),n("resetTune")]})]}),(0,_.jsx)(vi,{id:"plan-rhythm",eyebrow:n("rhythmEyebrow"),title:n("rhythmTitle"),icon:Va,children:(0,_.jsxs)("div",{className:"space-y-3",children:[(0,_.jsx)(hh,{label:n("protein"),value:i.total.p,target:R.p,unit:"g",color:"#ff8d82"}),(0,_.jsx)(hh,{label:n("carb"),value:i.total.c,target:R.c,unit:"g",color:"#ffcf7d"}),(0,_.jsx)(hh,{label:n("fat"),value:i.total.f,target:R.f,unit:"g",color:"#69cda5"}),(0,_.jsx)(hh,{label:n("calorie"),value:i.total.kcal,target:R.kcal,unit:"kcal",color:"#85d7e3"}),(0,_.jsx)(A2,{report:P,activeCarbDay:I,t:n})]})})]})]})}function f2(t){let{locale:e,t:n,model:i,targets:r,targetProfile:s,setTargetProfile:a,macroReport:o,activeCarbDay:l,tdee:c,setTdee:h,pre:f,setPre:d,setMapQty:m,drinkKey:y,setDrinkKey:b,drinkMl:x,setDrinkMl:u,saltG:p,setSaltG:v,foodK:M,setFoodK:C}=t,E=i.potassium>=i.sodium,R=(g,T,P,I)=>{a(B=>({...Ll,...B||{},[g]:je(T,P,I)}))};return(0,_.jsxs)("main",{className:"grid gap-5 lg:grid-cols-[1fr_1fr]",children:[(0,_.jsxs)(vi,{eyebrow:n("ledger"),title:n("ledgerTitle"),icon:Oi,children:[(0,_.jsx)(Nl,{label:n("lunch"),macro:i.lunch}),(0,_.jsx)(Nl,{label:n("preTraining"),macro:i.pre}),(0,_.jsx)(Nl,{label:n("drinkElectrolyte"),macro:i.drink}),(0,_.jsx)(Nl,{label:n("snackMeal"),macro:i.snack}),(0,_.jsx)(Nl,{label:n("dinner"),macro:i.dinner,strong:!0})]}),(0,_.jsxs)(vi,{eyebrow:n("targetFormula"),title:n("targetByWeight"),icon:pg,children:[(0,_.jsxs)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-5",children:[[["bodyWeightKg",n("bodyWeight"),"kg",30,250],["proteinPerKg",n("proteinRatio"),"g/kg",.8,3],["fatMinPerKg",n("fatMin"),"g/kg",.3,1.5],["kcal",n("calorie"),"kcal",1e3,5e3]].map(([g,T,P,I,B])=>(0,_.jsx)(es,{label:T,unit:P,value:s[g],min:I,max:B,onChange:W=>R(g,W,I,B)},g)),(0,_.jsx)(es,{label:n("tdee"),unit:"kcal",value:c,min:0,max:9e3,onChange:g=>h(je(g,0,9e3))})]}),(0,_.jsx)(wS,{targets:r,targetProfile:s,t:n})]}),(0,_.jsx)(vi,{eyebrow:n("rhythmEyebrow"),title:n("structureTitle"),icon:Va,children:(0,_.jsx)(C2,{report:o,activeCarbDay:l,targets:r,t:n})}),(0,_.jsx)(vi,{eyebrow:n("beforeTraining"),title:n("beforeTrainingTitle"),icon:Tl,children:(0,_.jsx)("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(Dl).map(([g,T])=>{let P=en(T,e);return(0,_.jsx)(mh,{label:P.label,meta:`${Re(ur(Gt(T,T.step)))} kcal / ${T.step}${P.unit}`,value:f[g]||0,unit:P.unit,step:T.step,max:T.max,onChange:I=>m(d,g,I,T.max)},g)})})}),(0,_.jsxs)(vi,{eyebrow:n("electrolyte"),title:n("electrolyteTitle"),icon:Qy,children:[(0,_.jsx)("div",{className:"grid grid-cols-3 gap-2",children:Object.entries(ts).map(([g,T])=>{let P=en(T,e);return(0,_.jsx)(ph,{active:y===g,onClick:()=>b(g),title:P.label,meta:P.sub,tone:"green"},g)})}),(0,_.jsxs)("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[(0,_.jsx)(es,{label:n("sauce"),unit:"ml",value:x,min:0,max:2e3,onChange:g=>u(je(g,0,2e3))}),(0,_.jsx)(es,{label:n("salt"),unit:"g",value:p,min:0,max:20,onChange:g=>v(je(g,0,20))}),(0,_.jsx)(es,{label:n("foodK"),unit:"mg",value:M,min:0,max:8e3,onChange:g=>C(je(g,0,8e3))})]}),(0,_.jsxs)("div",{className:`mt-4 rounded-[24px] border p-4 ${E?"border-[#bdf0d9] bg-[#edfff6]":"border-[#ffd1cb] bg-[#fff1ee]"}`,children:[(0,_.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,_.jsx)("span",{className:"text-sm font-bold text-[#8f6c64]",children:"K / Na"}),(0,_.jsx)("span",{className:E?"font-extrabold text-[#3da77d]":"font-extrabold text-[#ff7d75]",children:n(E?"balanced":"lowPotassium")})]}),(0,_.jsxs)("div",{className:"mt-2 text-xs font-semibold text-[#a47b72]",children:["K ",Math.round(i.potassium)," mg \xB7 Na ",Math.round(i.sodium)," mg"]})]})]})]})}function p2({locale:t,t:e,model:n,shopDays:i,setShopDays:r,setShopPlan:s}){let[a,o]=(0,Pe.useState)({}),[l,c]=(0,Pe.useState)(!1),h=[{tone:"red",label:t==="ja"?"\u305F\u3093\u3071\u304F":"\u86CB\u767D\u4E3B\u83DC",caption:t==="ja"?"\u8089\u3001\u30C1\u30AD\u30F3\u3001\u30AA\u30A4\u30B3\u30B9":"\u8089\u3001\u9E21\u80F8\u3001Oikos \u5148\u8865\u9F50",icon:Tl,accent:"#ff8d82"},{tone:"green",label:t==="ja"?"\u4E3B\u98DF":"\u4E3B\u98DF\u78B3\u6C34",caption:t==="ja"?"\u5468\u671F\u5206\u306E\u70AD\u6C34\u5316\u7269":"\u6309\u4E00\u5468\u671F\u671B\u5907\u8D27",icon:Pl,accent:"#69cda5"},{tone:"gold",label:t==="ja"?"\u679C\u7269":"\u6C34\u679C\u52A0\u6599",caption:t==="ja"?"\u30D1\u30A4\u30F3\u3001\u30D0\u30CA\u30CA\u3001\u308A\u3093\u3054":"\u83E0\u841D 240g\u3001\u9999\u8549\u3001\u82F9\u679C",icon:jy,accent:"#ffcf7d"},{tone:"amber",label:t==="ja"?"\u8102\u8CEA":"\u6CB9\u8102\u53E3\u5473",caption:t==="ja"?"\u5375\u3001\u30BD\u30FC\u30B9\u3001\u30CA\u30C3\u30C4":"\u86CB\u3001\u9171\u3001\u575A\u679C\u548C\u98CE\u5473",icon:ah,accent:"#f1b36a"}],f={red:0,green:1,gold:2,amber:3},d=Object.fromEntries(h.map(g=>[g.tone,g])),m=n.shopping.filter(g=>g.enabled),y=m.filter(g=>g.buyQty>0),b=m.filter(g=>g.buyQty<=0),x=h.map(g=>({...g,items:n.shopping.filter(T=>T.tone===g.tone)})).filter(g=>g.items.length>0),u=lS(n.shopping,f),p=u.filter(g=>a[g.key]).length,v=y.reduce((g,T)=>$t(g,T.macro),zi),M=m.reduce((g,T)=>$t(g,T.expectedMacro),zi),C=(g,T)=>{s(P=>{let I=lh(P,n.shopping);return{...I,[g]:{...I[g],...T}}})},E=()=>{s(g=>{let T=lh(g,n.shopping);return Object.fromEntries(Object.entries(T).map(([P,I])=>[P,{...I,stock:0}]))})},R=g=>{o(T=>({...T,[g]:!T[g]}))};return(0,_.jsxs)("main",{className:"grid gap-5",children:[(0,_.jsxs)("section",{className:"relative overflow-hidden rounded-[34px] border border-white/70 bg-white/76 shadow-[0_30px_90px_-60px_rgba(134,80,70,0.75)]",children:[(0,_.jsx)("img",{src:Eg("shop-basket.jpg"),alt:"weekly grocery basket",className:"absolute inset-0 h-full w-full object-cover opacity-40 brightness-[1.16] contrast-[0.92]"}),(0,_.jsx)("div",{className:"soft-shop-wash absolute inset-0"}),(0,_.jsxs)("div",{className:"relative grid gap-6 p-5 sm:p-7 lg:grid-cols-[1fr_0.95fr] lg:items-end",children:[(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:"inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-3 py-2 text-xs font-extrabold text-[#ff8d82] backdrop-blur",children:[(0,_.jsx)(eS,{className:"h-4 w-4"}),"market run"]}),(0,_.jsx)("h2",{className:"mt-4 font-display text-5xl font-extrabold leading-none text-[#4d3934]",children:e("shopHero")}),(0,_.jsx)("p",{className:"mt-3 max-w-xl text-sm font-semibold leading-7 text-[#8f6c64]",children:e("shopCopy")}),(0,_.jsxs)("div",{className:"mt-5 flex flex-wrap items-center gap-2",children:[[3,5,7,10].map(g=>(0,_.jsxs)(vh,{active:i===g,onClick:()=>r(g),children:[g," \u5929"]},g)),(0,_.jsxs)("button",{onClick:E,className:"inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/70 px-3 py-2 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]",children:[(0,_.jsx)(Ga,{className:"h-4 w-4"}),e("clearStock")]})]})]}),(0,_.jsxs)("div",{className:"grid grid-cols-3 gap-2",children:[(0,_.jsx)(Sg,{icon:nS,label:e("cycle"),value:`${i}`,sub:"days"}),(0,_.jsx)(Sg,{icon:Rl,label:e("products"),value:u.length,sub:`${e("picked")}${p}`}),(0,_.jsx)(Sg,{icon:Va,label:e("actual"),value:Math.round(v.kcal),sub:"kcal"})]})]})]}),(0,_.jsxs)(vi,{eyebrow:e("directPlan"),title:e("directPlanTitle"),icon:Rl,children:[u.length>0?(0,_.jsx)("div",{className:"grid gap-3 sm:grid-cols-2 xl:grid-cols-3",children:u.map(g=>(0,_.jsx)(m2,{item:g,group:d[g.tone],picked:!!a[g.key],onToggle:()=>R(g.key),t:e},g.key))}):(0,_.jsxs)("div",{className:"rounded-[24px] border border-[#bdf0d9] bg-[#edfff6] p-4",children:[(0,_.jsx)("div",{className:"font-cjk text-sm font-extrabold text-[#3da77d]",children:e("nothingToBuy")}),(0,_.jsx)("div",{className:"mt-1 text-xs font-semibold leading-5 text-[#7a9789]",children:e("nothingToBuySub")})]}),(0,_.jsxs)("div",{className:"mt-4 grid grid-cols-4 gap-2",children:[(0,_.jsx)(ti,{label:e("products"),value:u.length}),(0,_.jsx)(ti,{label:e("picked"),value:p}),(0,_.jsx)(ti,{label:e("enough"),value:b.length}),(0,_.jsx)(ti,{label:"Kcal",value:Math.round(v.kcal)})]})]}),(0,_.jsx)(bS,{open:l,onToggle:()=>c(!l),title:e("stockTune"),subtitle:e("stockTuneSub"),children:(0,_.jsxs)("div",{className:"grid gap-5 lg:grid-cols-[0.86fr_1.14fr]",children:[(0,_.jsxs)("div",{className:"rounded-[24px] border border-[#ffe3da] bg-white/58 p-4",children:[(0,_.jsx)("div",{className:"text-xs font-extrabold text-[#a47b72]",children:"cycle target base"}),(0,_.jsxs)("div",{className:"mt-2 grid grid-cols-4 gap-2",children:[(0,_.jsx)(ti,{label:"P",value:Math.round(M.p)}),(0,_.jsx)(ti,{label:"C",value:Math.round(M.c)}),(0,_.jsx)(ti,{label:"F",value:Math.round(M.f)}),(0,_.jsx)(ti,{label:"Kcal",value:Math.round(M.kcal)})]})]}),(0,_.jsx)("div",{className:"grid gap-3",children:x.map(g=>(0,_.jsx)(g2,{group:g,shopDays:i,onUpdate:C,t:e},g.tone))})]})})]})}function m2({item:t,group:e,picked:n,onToggle:i,t:r}){let s=e?.icon||Rl,a=e?.accent||"#ff8d82";return(0,_.jsxs)("button",{"data-direct-buy-card":!0,onClick:i,"aria-pressed":n,className:`min-h-[158px] rounded-[26px] border p-4 text-left transition hover:-translate-y-0.5 ${n?"border-[#9fe8ca] bg-[#edfff6]":"border-[#ffe3da] bg-white/62 hover:border-[#ffb8ae] hover:bg-white"}`,children:[(0,_.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,_.jsxs)("span",{className:"inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-extrabold",style:{backgroundColor:`${a}22`,color:a},children:[(0,_.jsx)(s,{className:"h-3.5 w-3.5"}),e?.label||r("products")]}),(0,_.jsx)("span",{className:`grid h-8 w-8 place-items-center rounded-[14px] border ${n?"border-[#9fe8ca] bg-[#69cda5] text-white":"border-[#ffe3da] bg-white/70 text-[#caa39b]"}`,children:(0,_.jsx)(fg,{className:"h-4 w-4"})})]}),(0,_.jsxs)("div",{className:"mt-4 min-w-0",children:[(0,_.jsx)("div",{className:"truncate font-cjk text-base font-extrabold text-[#4d3934]",children:t.label}),(0,_.jsxs)("div",{className:"mt-2 flex items-end gap-2",children:[(0,_.jsx)("span",{className:"font-display text-5xl font-extrabold leading-none text-[#4d3934]",children:Re(t.buyQty)}),(0,_.jsx)("span",{className:"pb-1 text-xs font-bold text-[#a47b72]",children:t.unit})]}),(0,_.jsx)("div",{className:"mt-3 text-xs font-semibold leading-5 text-[#8f6c64]",children:t.reason}),(0,_.jsxs)("div",{className:"mt-2 text-[11px] font-semibold text-[#a47b72]",children:[r("target")," ",t.targetText," \xB7 ",r("stock")," ",t.stockText]})]})]})}function Sg({icon:t,label:e,value:n,sub:i}){return(0,_.jsxs)("div",{className:"rounded-[24px] border border-white/80 bg-white/70 p-3 backdrop-blur",children:[(0,_.jsx)(t,{className:"h-4 w-4 text-[#ff8d82]"}),(0,_.jsx)("div",{className:"mt-3 font-display text-3xl font-extrabold leading-none text-[#4d3934]",children:n}),(0,_.jsxs)("div",{className:"mt-1 text-[11px] font-bold text-[#a47b72]",children:[e," \xB7 ",i]})]})}function g2({group:t,shopDays:e,onUpdate:n,t:i}){let r=t.icon,s=t.items.filter(a=>a.enabled&&a.buyQty>0).length;return(0,_.jsxs)("section",{className:"rounded-[26px] border border-[#ffe3da] bg-white/58 p-3",children:[(0,_.jsxs)("div",{className:"mb-3 flex items-center justify-between gap-3",children:[(0,_.jsxs)("div",{className:"flex min-w-0 items-center gap-2",children:[(0,_.jsx)("span",{className:"grid h-9 w-9 shrink-0 place-items-center rounded-[16px]",style:{backgroundColor:`${t.accent}24`,color:t.accent},children:(0,_.jsx)(r,{className:"h-4 w-4"})}),(0,_.jsxs)("div",{className:"min-w-0",children:[(0,_.jsx)("div",{className:"truncate font-cjk text-sm font-extrabold text-[#4d3934]",children:t.label}),(0,_.jsx)("div",{className:"mt-0.5 truncate text-[11px] font-semibold text-[#a47b72]",children:t.caption})]})]}),(0,_.jsxs)("span",{className:"rounded-full border border-[#ffe3da] bg-white/70 px-2.5 py-1 font-mono text-xs font-bold text-[#8f6c64]",children:[i("buy")," ",s,"/",t.items.length]})]}),(0,_.jsx)("div",{className:"grid gap-2",children:t.items.map(a=>(0,_.jsx)(x2,{item:a,accent:t.accent,shopDays:e,onUpdate:n,t:i},a.key))})]})}function x2({item:t,accent:e,shopDays:n,onUpdate:i,t:r}){let s=l=>{i(t.key,{target:je(xn(t.weeklyTarget+l,t.step),0,t.max??1/0)})},a=l=>{i(t.key,{stock:je(xn(t.stockQty+l,t.step),0,t.max??1/0)})},o=t.enabled?t.buyQty>0?`${r("buy")} ${Re(t.buyQty)}${t.unit}`:r("enough"):r("skip");return(0,_.jsxs)("div",{"data-shop-item-row":!0,className:`rounded-[24px] border border-[#ffe3da] bg-white/64 p-3 transition ${t.enabled?"":"opacity-55"}`,children:[(0,_.jsxs)("div",{className:"grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start",children:[(0,_.jsxs)("div",{className:"min-w-0",children:[(0,_.jsx)("div",{className:"truncate font-cjk text-sm font-extrabold text-[#4d3934]",children:t.label}),(0,_.jsxs)("div",{className:"mt-1 text-xs font-semibold leading-5 text-[#a47b72]",children:[r("weeklyTarget")," ",Re(t.weeklyTarget),t.unit," \xB7 ",n,"d ",Re(t.targetQty),t.unit," \xB7 ",r("stock")," ",Re(t.stockQty),t.unit]})]}),(0,_.jsxs)("div",{className:"flex items-center justify-between gap-2 sm:justify-end",children:[(0,_.jsxs)("div",{className:"rounded-[16px] px-2.5 py-1 text-right",style:{backgroundColor:`${e}22`},children:[(0,_.jsx)("div",{className:"font-mono text-sm font-bold text-[#4d3934]",children:o}),(0,_.jsx)("div",{className:"mt-0.5 text-[10px] font-bold text-[#a47b72]",children:"this run"})]}),(0,_.jsx)("button",{onClick:()=>i(t.key,{enabled:!t.enabled}),className:"h-9 rounded-[16px] border border-[#ffe3da] bg-white/70 px-3 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#4d3934]",children:t.enabled?r("skip"):r("add")})]})]}),(0,_.jsxs)("div",{className:"mt-3 grid gap-2 sm:grid-cols-2",children:[(0,_.jsx)(fS,{label:r("weeklyTarget"),value:t.weeklyTarget,unit:t.unit,onMinus:()=>s(-t.step),onPlus:()=>s(t.step)}),(0,_.jsx)(fS,{label:r("stock"),value:t.stockQty,unit:t.unit,onMinus:()=>a(-t.step),onPlus:()=>a(t.step)})]})]})}function fS({label:t,value:e,unit:n,onMinus:i,onPlus:r}){return(0,_.jsxs)("div",{className:"flex items-center justify-between gap-2 rounded-[18px] border border-[#ffe3da] bg-[#fff9f4] px-2.5 py-2",children:[(0,_.jsx)("span",{className:"text-[11px] font-extrabold text-[#a47b72]",children:t}),(0,_.jsxs)("div",{className:"flex items-center gap-1",children:[(0,_.jsx)(ns,{label:`-${t}`,onClick:i,icon:Al}),(0,_.jsxs)("span",{className:"w-16 text-center font-mono text-xs font-bold text-[#4d3934]",children:[Re(e),n]}),(0,_.jsx)(ns,{label:`+${t}`,onClick:r,icon:Cl})]})]})}function v2({locale:t,t:e,cheat:n,setCheat:i,cheatTotal:r,cheatSurplus:s,tdee:a,dayKcal:o}){let l=(c,h)=>{i(f=>{let d={...f},m=je(h,0,9);return m>0?d[c]=m:delete d[c],d})};return(0,_.jsxs)("main",{className:"grid gap-5 lg:grid-cols-[1fr_0.9fr]",children:[(0,_.jsx)(vi,{eyebrow:e("navCheat"),title:e("cheatTitle"),icon:ah,children:(0,_.jsx)("div",{className:"grid gap-2 sm:grid-cols-2",children:xS.map(c=>{let h=en(c,t);return(0,_.jsx)("div",{className:"rounded-[24px] border border-[#ffe3da] bg-white/62 p-3",children:(0,_.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"font-cjk text-sm font-extrabold text-[#4d3934]",children:h.label}),(0,_.jsxs)("div",{className:"mt-1 text-xs font-semibold text-[#a47b72]",children:[h.kcal," kcal"]})]}),(0,_.jsx)(E2,{value:n[h.id]||0,onChange:f=>l(h.id,f)})]})},h.id)})})}),(0,_.jsxs)("section",{className:"overflow-hidden rounded-[34px] border border-white/70 bg-white/76 shadow-[0_30px_90px_-60px_rgba(134,80,70,0.75)]",children:[(0,_.jsx)("img",{src:wg("cheat.jpg"),alt:"cheat meal",className:"h-56 w-full object-cover brightness-[1.08] contrast-[0.94]"}),(0,_.jsxs)("div",{className:"p-5",children:[(0,_.jsx)("div",{className:"text-xs font-extrabold text-[#ff8d82]",children:e("cheatResult")}),(0,_.jsx)("div",{className:"mt-2 font-display text-6xl font-extrabold text-[#4d3934]",children:r}),(0,_.jsx)("div",{className:"text-sm font-bold text-[#a47b72]",children:e("cheatKcal")}),(0,_.jsxs)("div",{className:"mt-5 grid grid-cols-3 gap-2",children:[(0,_.jsx)(ti,{label:e("todayTotal"),value:Math.round(o+r)}),(0,_.jsx)(ti,{label:e("tdee"),value:a}),(0,_.jsx)(ti,{label:e("deficit"),value:(s>=0?"+":"")+s,hot:s>0})]}),(0,_.jsxs)("button",{onClick:()=>i({}),className:"mt-4 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/70 px-3 py-2 text-xs font-extrabold text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]",children:[(0,_.jsx)(Ga,{className:"h-4 w-4"}),e("clear")]})]})]})]})}function _2({locale:t,t:e,open:n,setOpen:i,pre:r,setPre:s,setMapQty:a,drinkKey:o,setDrinkKey:l,drinkMl:c,setDrinkMl:h,model:f}){if(!n)return null;let d=yS(r,o,c),m=SS(r,o,c,t,e),y=$t(f.pre,f.drink),b=()=>{s({}),l("none"),h(0)},x=()=>{s({banana:1}),l("tomato"),h(400)},u=()=>{s({pineapple:1}),l("tomato"),h(400)},p=v=>{l(v),v==="none"?h(0):c<=0&&h(400)};return(0,_.jsxs)("div",{className:"fixed inset-0 z-[70]",children:[(0,_.jsx)("button",{className:"absolute inset-0 bg-[#5d4037]/30 backdrop-blur-sm",onClick:()=>i(!1),"aria-label":"close fuel"}),(0,_.jsxs)("aside",{className:"absolute inset-y-0 right-0 flex w-[min(460px,94vw)] flex-col border-l border-white/80 bg-[#fffaf4] shadow-2xl",children:[(0,_.jsxs)("div",{className:"flex items-center justify-between border-b border-[#ffe3da] p-4",children:[(0,_.jsxs)("div",{className:"flex items-center gap-3",children:[(0,_.jsx)("img",{src:wg("pre.jpg"),alt:"",className:"h-12 w-12 rounded-[18px] object-cover brightness-[1.08]"}),(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"font-display text-xl font-extrabold text-[#4d3934]",children:e("fuelSwitch")}),(0,_.jsx)("div",{className:"text-[11px] font-bold text-[#a47b72]",children:e("fuelSub")})]})]}),(0,_.jsx)("button",{onClick:()=>i(!1),className:"grid h-9 w-9 place-items-center rounded-[16px] border border-[#ffe3da] bg-white/70 text-[#a47b72] hover:text-[#4d3934]","aria-label":"close",children:(0,_.jsx)(oh,{className:"h-4 w-4"})})]}),(0,_.jsxs)("div",{className:"flex-1 overflow-y-auto p-4",children:[(0,_.jsxs)("div",{className:`rounded-[26px] border p-4 ${d?"border-[#bdf0d9] bg-[#edfff6]":"border-[#ffe3da] bg-white/70"}`,children:[(0,_.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,_.jsx)("span",{className:"text-xs font-extrabold text-[#a47b72]",children:e("currentState")}),(0,_.jsx)("span",{className:d?"font-extrabold text-[#3da77d]":"font-extrabold text-[#a47b72]",children:e(d?"fueled":"noFuel")})]}),(0,_.jsx)("div",{className:"mt-2 text-sm font-bold leading-6 text-[#4d3934]",children:m}),(0,_.jsxs)("div",{className:"mt-2 font-mono text-xs font-bold text-[#a47b72]",children:["P",Re(y.p)," C",Re(y.c)," F",Re(y.f)," \xB7 ",Math.round(y.kcal)," kcal"]})]}),(0,_.jsxs)("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[(0,_.jsxs)("button",{onClick:b,className:"rounded-[22px] border border-[#ffe3da] bg-white/70 p-3 text-left transition hover:border-[#ffb8ae]",children:[(0,_.jsx)("div",{className:"font-cjk text-sm font-extrabold text-[#4d3934]",children:e("applyNoFuel")}),(0,_.jsx)("div",{className:"mt-1 text-[11px] font-semibold text-[#a47b72]",children:e("applyNoFuelSub")})]}),(0,_.jsxs)("button",{onClick:x,className:"rounded-[22px] border border-[#ffd6a5] bg-[#fff6df] p-3 text-left transition hover:-translate-y-0.5",children:[(0,_.jsx)("div",{className:"font-cjk text-sm font-extrabold text-[#4d3934]",children:e("lightFuel")}),(0,_.jsx)("div",{className:"mt-1 text-[11px] font-semibold text-[#a47b72]",children:e("lightFuelSub")})]}),(0,_.jsxs)("button",{onClick:u,className:"rounded-[22px] border border-[#bdf0d9] bg-[#edfff6] p-3 text-left transition hover:-translate-y-0.5",children:[(0,_.jsx)("div",{className:"font-cjk text-sm font-extrabold text-[#4d3934]",children:e("pineappleBox")}),(0,_.jsx)("div",{className:"mt-1 text-[11px] font-semibold text-[#a47b72]",children:e("pineappleBoxSub")})]})]}),(0,_.jsxs)("div",{className:"mt-5 grid gap-5",children:[(0,_.jsx)(Ps,{title:e("eatWhat"),children:(0,_.jsx)("div",{className:"grid gap-2 sm:grid-cols-2",children:Object.entries(Dl).map(([v,M])=>{let C=en(M,t);return(0,_.jsx)(mh,{label:C.label,meta:`${Re(ur(Gt(M,M.step)))} kcal / ${M.step}${C.unit}`,value:r[v]||0,unit:C.unit,step:M.step,max:M.max,onChange:E=>a(s,v,E,M.max)},v)})})}),(0,_.jsxs)(Ps,{title:e("drinkWhat"),children:[(0,_.jsx)("div",{className:"grid grid-cols-3 gap-2",children:Object.entries(ts).map(([v,M])=>{let C=en(M,t);return(0,_.jsx)(ph,{active:o===v,onClick:()=>p(v),title:C.label,meta:C.sub,tone:"green"},v)})}),(0,_.jsx)("div",{className:"mt-3 grid grid-cols-3 gap-2",children:[200,400,600].map(v=>(0,_.jsxs)(vh,{active:c===v,onClick:()=>h(v),children:[v,"ml"]},v))}),(0,_.jsx)("div",{className:"mt-3",children:(0,_.jsx)(es,{label:e("sauce"),unit:"ml",value:c,min:0,max:2e3,onChange:v=>h(je(v,0,2e3))})})]})]})]})]})]})}function y2({open:t,setOpen:e,text:n,onCopied:i,t:r}){let s=(0,Pe.useRef)(null);if((0,Pe.useEffect)(()=>{if(!t)return;let o=window.setTimeout(()=>{s.current?.focus(),s.current?.select(),s.current?.setSelectionRange(0,n.length)},80);return()=>window.clearTimeout(o)},[t,n]),!t)return null;let a=async()=>{try{await vS(n),i()}catch{s.current?.focus(),s.current?.select(),s.current?.setSelectionRange(0,n.length)}};return(0,_.jsxs)("div",{className:"fixed inset-0 z-[80]",children:[(0,_.jsx)("button",{className:"absolute inset-0 bg-[#5d4037]/30 backdrop-blur-sm",onClick:()=>e(!1),"aria-label":"close copy panel"}),(0,_.jsxs)("aside",{className:"absolute inset-x-3 bottom-3 rounded-[28px] border border-white/80 bg-[#fffaf4] p-4 shadow-2xl sm:left-auto sm:right-5 sm:w-[min(520px,92vw)]",children:[(0,_.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"font-display text-xl font-extrabold text-[#4d3934]",children:r("manualCopy")}),(0,_.jsx)("div",{className:"mt-1 text-xs font-semibold leading-5 text-[#a47b72]",children:r("manualCopySub")})]}),(0,_.jsx)("button",{onClick:()=>e(!1),className:"grid h-9 w-9 shrink-0 place-items-center rounded-[16px] border border-[#ffe3da] bg-white/70 text-[#a47b72] hover:text-[#4d3934]","aria-label":"close",children:(0,_.jsx)(oh,{className:"h-4 w-4"})})]}),(0,_.jsx)("textarea",{ref:s,readOnly:!0,value:n,className:"mt-4 h-48 w-full resize-none rounded-[20px] border border-[#ffe3da] bg-white/70 p-3 font-mono text-xs leading-5 text-[#4d3934] outline-none focus:border-[#ff9f95]"}),(0,_.jsx)("div",{className:"mt-3 flex justify-end gap-2",children:(0,_.jsxs)("button",{onClick:a,className:"inline-flex items-center gap-2 rounded-[18px] bg-[#ff9f95] px-3 py-2 text-xs font-extrabold text-white",children:[(0,_.jsx)(Oi,{className:"h-4 w-4"}),r("copyAgain")]})})]})]})}function S2({locale:t,t:e,open:n,setOpen:i,snack:r,setSnack:s,active:a,dinnerSummary:o}){if(!n)return null;let l=(c,h)=>{s(f=>({...f,[c]:c==="name"?h:je(h,0,c==="kcal"?5e3:500)}))};return(0,_.jsxs)("div",{className:"fixed inset-0 z-[70]",children:[(0,_.jsx)("button",{className:"absolute inset-0 bg-[#5d4037]/30 backdrop-blur-sm",onClick:()=>i(!1),"aria-label":"close snack"}),(0,_.jsxs)("aside",{className:"absolute inset-y-0 right-0 flex w-[min(430px,94vw)] flex-col border-l border-white/80 bg-[#fffaf4] shadow-2xl",children:[(0,_.jsxs)("div",{className:"flex items-center justify-between border-b border-[#ffe3da] p-4",children:[(0,_.jsxs)("div",{className:"flex items-center gap-3",children:[(0,_.jsx)("img",{src:Eg("snack-scanner.jpg"),alt:"",className:"h-12 w-12 rounded-[18px] object-cover brightness-[1.08]"}),(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"font-display text-xl font-extrabold text-[#4d3934]",children:e("snackTitle")}),(0,_.jsx)("div",{className:"text-[11px] font-bold text-[#a47b72]",children:e("snackSub")})]})]}),(0,_.jsx)("button",{onClick:()=>i(!1),className:"grid h-9 w-9 place-items-center rounded-[16px] border border-[#ffe3da] bg-white/70 text-[#a47b72] hover:text-[#4d3934]","aria-label":"close",children:(0,_.jsx)(oh,{className:"h-4 w-4"})})]}),(0,_.jsxs)("div",{className:"flex-1 overflow-y-auto p-4",children:[(0,_.jsx)("label",{className:"text-xs font-extrabold text-[#a47b72]",children:e("snackName")}),(0,_.jsx)("input",{value:r.name,onChange:c=>l("name",c.target.value),className:"mt-2 h-11 w-full rounded-[18px] border border-[#ffe3da] bg-white/70 px-3 text-sm font-bold text-[#4d3934] outline-none focus:border-[#ff9f95]"}),(0,_.jsx)("div",{className:"mt-4 grid grid-cols-4 gap-2",children:[["kcal",e("calorie")],["p",e("protein")],["c",e("carb")],["f",e("fat")]].map(([c,h])=>(0,_.jsx)(es,{label:h,unit:c==="kcal"?"":"g",value:r[c],min:0,max:c==="kcal"?5e3:500,onChange:f=>l(c,f)},c))}),(0,_.jsxs)("div",{className:"mt-5 rounded-[24px] border border-[#ffd6a5] bg-[#fff6df] p-4",children:[(0,_.jsx)("div",{className:"text-xs font-extrabold text-[#d8903d]",children:e("dinnerWillClose")}),(0,_.jsxs)("div",{className:"mt-2 text-sm font-semibold leading-6 text-[#8f6c64]",children:[o||e("noDinner")," \xB7 ",Math.round(r.kcal)," kcal"]})]}),a&&(0,_.jsxs)("button",{onClick:()=>s({name:t==="ja"?"\u624B\u5165\u529B\u306E\u9593\u98DF":"\u624B\u52A8\u52A0\u9910",p:0,c:0,f:0,kcal:0}),className:"mt-4 inline-flex items-center gap-2 rounded-[18px] border border-[#ffe3da] bg-white/70 px-3 py-2 text-xs font-extrabold text-[#a47b72] hover:text-[#ff7d75]",children:[(0,_.jsx)(Ga,{className:"h-4 w-4"}),e("clearSnack")]})]})]})]})}function vi({id:t,eyebrow:e,title:n,icon:i,children:r}){return(0,_.jsxs)("section",{id:t,className:"soft-panel scroll-mt-28 rounded-[30px] border border-white/75 bg-white/74 p-4 shadow-[0_24px_70px_-52px_rgba(134,80,70,0.7)] backdrop-blur-2xl sm:p-5",children:[(0,_.jsxs)("div",{className:"mb-4 flex items-start justify-between gap-4",children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"text-xs font-extrabold text-[#ff8d82]",children:e}),(0,_.jsx)("h2",{className:"mt-1 font-display text-2xl font-extrabold text-[#4d3934]",children:n})]}),i&&(0,_.jsx)("span",{className:"grid h-10 w-10 place-items-center rounded-[18px] bg-[#fff0ed] text-[#ff8d82]",children:(0,_.jsx)(i,{className:"h-5 w-5"})})]}),r]})}function M2({icon:t,children:e}){return(0,_.jsxs)("div",{className:"inline-flex items-center gap-2 rounded-full border border-[#ffe3da] bg-white/72 px-3 py-2 text-xs font-bold text-[#8f6c64]",children:[(0,_.jsx)(t,{className:"h-4 w-4 text-[#5fc89e]"}),(0,_.jsx)("span",{children:e})]})}function Mg({icon:t,label:e,sub:n,onClick:i,dataAttr:r}){return(0,_.jsxs)(i?"button":"div",{"data-copy-plan-button":r==="copy-plan-button"?!0:void 0,onClick:i,className:"min-w-0 rounded-[22px] border border-[#ffe3da] bg-white/70 px-3 py-3 text-left transition hover:-translate-y-0.5 hover:border-[#ffb8ae] hover:bg-white",children:[(0,_.jsx)(t,{className:"mb-1.5 h-4 w-4 text-[#ff8d82]"}),(0,_.jsx)("div",{className:"truncate text-sm font-extrabold text-[#4d3934]",children:e}),n&&(0,_.jsx)("div",{className:"mt-0.5 truncate text-[11px] font-bold text-[#a47b72]",children:n})]})}function uh({label:t,value:e,target:n,unit:i}){let r=e-n,s=Math.abs(r)<=(i?Math.max(8,n*.08):Math.max(80,n*.05));return(0,_.jsxs)("div",{className:"rounded-[18px] border border-white/75 bg-white/72 p-2 backdrop-blur",children:[(0,_.jsx)("div",{className:"text-[11px] font-extrabold text-[#a47b72]",children:t}),(0,_.jsx)("div",{className:"mt-1 font-mono text-lg font-bold text-[#4d3934]",children:Math.round(e)}),(0,_.jsxs)("div",{className:`text-[11px] font-bold ${s?"text-[#3da77d]":"text-[#ff8d82]"}`,children:[r>=0?"+":"",Math.round(r),i]})]})}function b2({value:t,onChange:e,options:n}){return(0,_.jsx)("div",{className:"grid grid-cols-2 rounded-[22px] border border-[#ffe3da] bg-[#fff9f4] p-1",children:n.map(i=>(0,_.jsx)("button",{onClick:()=>e(i.value),className:`rounded-[18px] px-3 py-2 text-sm font-extrabold transition ${t===i.value?"bg-[#ff9f95] text-white":"text-[#a47b72] hover:bg-white hover:text-[#4d3934]"}`,children:i.label},i.value))})}function vh({active:t,onClick:e,children:n}){return(0,_.jsx)("button",{onClick:e,className:`rounded-[18px] border px-3 py-2 text-xs font-extrabold transition ${t?"border-[#ffb8ae] bg-[#fff0ed] text-[#ff7d75]":"border-[#ffe3da] bg-white/62 text-[#a47b72] hover:border-[#ffb8ae] hover:bg-white hover:text-[#4d3934]"}`,children:n})}function Ps({title:t,children:e}){return(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:"mb-2 text-xs font-extrabold text-[#a47b72]",children:t}),e]})}function ph({active:t,onClick:e,title:n,meta:i,tone:r="gold"}){let s=r==="green"?"#69cda5":r==="amber"?"#f1b36a":"#ff9f95";return(0,_.jsxs)("button",{onClick:e,className:"rounded-[22px] border p-3 text-left transition hover:-translate-y-0.5",style:{borderColor:t?s:"#ffe3da",background:t?`${s}1f`:"rgba(255,255,255,0.66)"},children:[(0,_.jsx)("div",{className:"font-cjk text-sm font-extrabold text-[#4d3934]",children:n}),(0,_.jsx)("div",{className:"mt-1 text-[11px] font-semibold text-[#a47b72]",children:i})]})}function bS({open:t,onToggle:e,title:n,subtitle:i,children:r}){return(0,_.jsxs)("section",{className:"rounded-[30px] border border-white/75 bg-white/72 shadow-[0_24px_70px_-52px_rgba(134,80,70,0.7)] backdrop-blur-2xl",children:[(0,_.jsxs)("button",{onClick:e,className:"flex w-full items-center justify-between gap-3 p-4 text-left",children:[(0,_.jsxs)("span",{children:[(0,_.jsxs)("span",{className:"flex items-center gap-2 font-display text-2xl font-extrabold text-[#4d3934]",children:[(0,_.jsx)(tS,{className:"h-4 w-4 text-[#ff8d82]"}),n]}),(0,_.jsx)("span",{className:"mt-1 block text-xs font-semibold text-[#a47b72]",children:i})]}),(0,_.jsx)(Jy,{className:`h-5 w-5 text-[#a47b72] transition ${t?"rotate-180":""}`})]}),t&&(0,_.jsx)("div",{className:"border-t border-[#ffe3da] p-4",children:r})]})}function w2({value:t,onChange:e,t:n}){let i=(0,Pe.useRef)(!1),[r,s]=(0,Pe.useState)(String(Math.round(t)));(0,Pe.useEffect)(()=>{i.current||s(String(Math.round(t)))},[t]);let a=o=>{let l=o.replace(/\D/g,"");if(!l){s(""),e(0);return}let c=l.replace(/^0+(?=\d)/,""),h=je(c,0,5e3);s(String(h)),e(h)};return(0,_.jsxs)("div",{className:"mt-5",children:[(0,_.jsx)("label",{className:"text-xs font-extrabold text-[#a47b72]",children:n("lunchKcal")}),(0,_.jsxs)("div",{className:"mt-2 flex items-end gap-3",children:[(0,_.jsx)("input",{type:"text",inputMode:"numeric",pattern:"[0-9]*","aria-label":n("lunchKcal"),value:r,onFocus:()=>{i.current=!0},onBlur:()=>{i.current=!1,s(String(Math.round(t)))},onChange:o=>a(o.target.value),className:"w-40 border-b-2 border-[#ffd8d1] bg-transparent font-display text-6xl font-extrabold leading-none text-[#4d3934] outline-none focus:border-[#ff9f95]"}),(0,_.jsx)("span",{className:"pb-2 text-xs font-extrabold text-[#a47b72]",children:"kcal"})]}),(0,_.jsx)("div",{className:"mt-4 flex flex-wrap gap-2",children:[600,700,800,900,1e3].map(o=>(0,_.jsx)(vh,{active:t===o,onClick:()=>e(o),children:o},o))})]})}function mh({label:t,meta:e,value:n,unit:i,step:r,max:s,onChange:a}){return(0,_.jsxs)("div",{className:"grid grid-cols-[1fr_auto] items-center gap-3 rounded-[22px] border border-[#ffe3da] bg-white/64 p-3",children:[(0,_.jsxs)("div",{className:"min-w-0",children:[(0,_.jsx)("div",{className:"truncate font-cjk text-sm font-extrabold text-[#4d3934]",children:t}),(0,_.jsx)("div",{className:"mt-1 truncate text-[11px] font-semibold text-[#a47b72]",children:e})]}),(0,_.jsxs)("div",{className:"flex items-center gap-1",children:[(0,_.jsx)(ns,{label:`-${t}`,onClick:()=>a(n-r),icon:Al}),(0,_.jsxs)("span",{className:"w-14 text-center font-mono text-sm font-bold text-[#4d3934]",children:[Re(n),n>0&&i==="g"?"g":""]}),(0,_.jsx)(ns,{label:`+${t}`,onClick:()=>a(Math.min(s,n+r)),icon:Cl})]})]})}function E2({value:t,onChange:e}){return(0,_.jsxs)("div",{className:"flex items-center gap-1",children:[(0,_.jsx)(ns,{label:"minus",onClick:()=>e(t-1),icon:Al}),(0,_.jsx)("span",{className:"w-7 text-center font-mono text-sm font-bold text-[#4d3934]",children:t}),(0,_.jsx)(ns,{label:"plus",onClick:()=>e(t+1),icon:Cl})]})}function ns({label:t,onClick:e,icon:n}){return(0,_.jsx)("button",{onClick:e,"aria-label":t,className:"grid h-8 w-8 place-items-center rounded-[14px] border border-[#ffe3da] bg-white/70 text-[#a47b72] transition hover:border-[#ffb8ae] hover:text-[#ff7d75]",children:(0,_.jsx)(n,{className:"h-4 w-4"})})}function dh(t){return String(Re(t,1))}function T2(t){let e=String(t).replace(/[^\d.]/g,"");if(!e)return"";let[n="",...i]=e.split("."),r=n.replace(/^0+(?=\d)/,"");return i.length?`${r||"0"}.${i.join("")}`:r}function es({label:t,unit:e,value:n,onChange:i,min:r=0,max:s=1/0}){let a=(0,Pe.useRef)(!1),[o,l]=(0,Pe.useState)(()=>dh(n));(0,Pe.useEffect)(()=>{a.current||l(dh(n))},[n]);let c=()=>{let f=Number(o);if(!o||!Number.isFinite(f)){l(dh(n));return}let d=je(f,r,s);i(d),l(dh(d))};return(0,_.jsxs)("label",{className:"block rounded-[20px] border border-[#ffe3da] bg-white/64 p-3",children:[(0,_.jsx)("span",{className:"block text-[11px] font-extrabold text-[#a47b72]",children:t}),(0,_.jsxs)("span",{className:"mt-1 flex items-baseline gap-1",children:[(0,_.jsx)("input",{type:"text",inputMode:"decimal","aria-label":t,value:o,onFocus:()=>{a.current=!0},onBlur:()=>{a.current=!1,c()},onKeyDown:f=>{f.key==="Enter"&&f.currentTarget.blur()},onChange:f=>{let d=T2(f.target.value);l(d)},className:"min-w-0 flex-1 bg-transparent font-mono text-lg font-bold text-[#4d3934] outline-none"}),(0,_.jsx)("span",{className:"text-[11px] font-bold text-[#a47b72]",children:e})]})]})}function wS({targets:t,targetProfile:e,t:n}){let i=[{label:n("proteinTarget"),value:`${Re(t.p,1)}g`,sub:`${Re(e.proteinPerKg,1)}g/kg`},{label:n("fatTarget"),value:`${Re(t.f,1)}g`,sub:`${Re(e.fatMinPerKg,1)}g/kg`},{label:n("carbRemainder"),value:`${Re(t.c,1)}g`,sub:n("carbRemainderSub")}];return(0,_.jsx)("div",{className:"mt-3 grid gap-2 sm:grid-cols-3",children:i.map(r=>(0,_.jsxs)("div",{className:"rounded-[20px] border border-[#ffe3da] bg-white/64 p-3",children:[(0,_.jsx)("div",{className:"text-[11px] font-extrabold text-[#a47b72]",children:r.label}),(0,_.jsx)("div",{className:"mt-1 font-mono text-lg font-bold text-[#4d3934]",children:r.value}),(0,_.jsx)("div",{className:"mt-1 text-[11px] font-semibold text-[#a47b72]",children:r.sub})]},r.label))})}function A2({report:t,activeCarbDay:e,t:n}){let i={amber:"border-[#ffd6a5] bg-[#fff6df] text-[#b97325]",green:"border-[#bdf0d9] bg-[#edfff6] text-[#3da77d]",red:"border-[#ffd1cb] bg-[#fff1ee] text-[#ff7d75]"}[t.carbDay.tone]||"border-[#ffe3da] bg-white/64 text-[#8f6c64]";return(0,_.jsxs)("div",{className:`rounded-[24px] border p-3 ${i}`,children:[(0,_.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,_.jsx)("span",{className:"text-xs font-bold text-[#a47b72]",children:n("carbDay")}),(0,_.jsx)("span",{className:"font-cjk text-sm font-extrabold",children:e.label})]}),(0,_.jsxs)("div",{className:"mt-1 text-[11px] font-bold text-[#a47b72]",children:["C ",t.carbPerKg,"g/kg \xB7 P ",t.proteinPerKg,"g/kg"]})]})}function C2({report:t,activeCarbDay:e,targets:n,t:i}){let r=[{label:i("proteinCalories"),value:`${t.proteinPct}%`,sub:`${t.proteinPerKg}g/kg \xB7 ${i("target")} ${t.proteinTargetPerKg}g/kg`},{label:i("carbCalories"),value:`${t.carbPct}%`,sub:`${t.carbPerKg}g/kg \xB7 ${i("target")} ${t.carbTargetPerKg}g/kg`},{label:i("fatCalories"),value:`${t.fatPct}%`,sub:`${t.fatPerKg}g/kg \xB7 ${i("target")} ${Re(n.f,1)}g`},{label:i("carbJudge"),value:e.label,sub:t.carbDay.note,hot:t.carbDay.tone==="red"}];return(0,_.jsx)("div",{className:"grid gap-2 sm:grid-cols-2",children:r.map(s=>(0,_.jsx)(ti,{label:s.label,value:s.value,sub:s.sub,hot:s.hot},s.label))})}function R2({item:t,index:e,onTune:n,t:i}){let s={red:"#ff8d82",amber:"#f1b36a",gold:"#ffcf7d",green:"#69cda5"}[t.tone]||"#85d7e3",a=t.adjustment>0?`+${Re(t.adjustment)}`:Re(t.adjustment);return(0,_.jsxs)("div",{"data-dinner-tune-row":!0,className:"grid grid-cols-[40px_1fr_auto] items-center gap-3 rounded-[24px] border border-[#ffe3da] bg-white/64 p-3",children:[(0,_.jsx)("span",{className:"grid h-10 w-10 place-items-center rounded-[17px] font-mono text-xs font-extrabold text-white",style:{backgroundColor:s},children:String(e+1).padStart(2,"0")}),(0,_.jsxs)("div",{className:"min-w-0",children:[(0,_.jsx)("div",{className:"truncate font-cjk text-sm font-extrabold text-[#4d3934]",children:t.name}),(0,_.jsxs)("div",{className:"mt-1 truncate text-[11px] font-semibold text-[#a47b72]",children:["P",Re(t.macro.p)," \xB7 C",Re(t.macro.c)," \xB7 F",Re(t.macro.f),t.adjustment!==0&&(0,_.jsxs)("span",{className:"text-[#ff8d82]",children:[" \xB7 ",i("adjust")," ",a,t.unit]})]})]}),(0,_.jsxs)("div",{className:"text-right",children:[(0,_.jsx)("div",{className:"font-display text-2xl font-extrabold leading-none text-[#4d3934]",children:Re(t.qty)}),(0,_.jsx)("div",{className:"mt-1 text-[11px] font-bold text-[#a47b72]",children:t.unit}),n&&(0,_.jsxs)("div",{className:"mt-2 flex items-center justify-end gap-1",children:[(0,_.jsx)(ns,{label:`-${t.name}`,onClick:()=>n(t,-t.step),icon:Al}),(0,_.jsx)(ns,{label:`+${t.name}`,onClick:()=>n(t,t.step),icon:Cl})]})]})]})}function hh({label:t,value:e,target:n,unit:i,color:r}){let s=Math.min(135,e/Math.max(1,n)*100),a=Math.round(e-n);return(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:"mb-2 flex items-center justify-between gap-3",children:[(0,_.jsx)("span",{className:"text-sm font-extrabold text-[#4d3934]",children:t}),(0,_.jsxs)("span",{className:"font-mono text-xs font-bold text-[#a47b72]",children:[Math.round(e)," / ",Re(n)," ",i]})]}),(0,_.jsx)("div",{className:"relative h-2.5 overflow-hidden rounded-full bg-[#fff0ed]",children:(0,_.jsx)("div",{className:"h-full rounded-full transition-all duration-700",style:{width:`${s}%`,backgroundColor:r}})}),(0,_.jsxs)("div",{className:"mt-1 text-right text-[11px] font-bold text-[#a47b72]",children:[a>=0?"+":"",a,i]})]})}function Nl({label:t,macro:e,strong:n}){return(0,_.jsxs)("div",{className:`grid grid-cols-[1fr_auto] items-center gap-3 border-t border-[#ffe3da] py-3 first:border-t-0 ${n?"text-[#4d3934]":"text-[#8f6c64]"}`,children:[(0,_.jsx)("div",{className:"font-cjk text-sm font-extrabold",children:t}),(0,_.jsxs)("div",{className:"font-mono text-xs font-bold text-[#a47b72]",children:["P",Re(e.p)," C",Re(e.c)," F",Re(e.f)," \xB7 ",Math.round(ur(e))," kcal"]})]})}function ti({label:t,value:e,sub:n,hot:i}){return(0,_.jsxs)("div",{className:`rounded-[20px] border p-3 ${i?"border-[#ffd1cb] bg-[#fff1ee]":"border-[#ffe3da] bg-white/64"}`,children:[(0,_.jsx)("div",{className:"text-[11px] font-extrabold text-[#a47b72]",children:t}),(0,_.jsx)("div",{className:`mt-1 font-mono text-lg font-bold ${i?"text-[#ff7d75]":"text-[#4d3934]"}`,children:e}),n&&(0,_.jsx)("div",{className:"mt-1 text-[11px] font-semibold leading-4 text-[#a47b72]",children:n})]})}var Ag=yi(Il(),1);TS.default.createRoot(document.getElementById("root")).render((0,Ag.jsx)(ES.default.StrictMode,{children:(0,Ag.jsx)(Tg,{})}));
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
lucide-react/dist/esm/icons/camera.mjs:
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
