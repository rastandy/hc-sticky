!function o(r,i,s){function a(n,t){if(!i[n]){if(!r[n]){var e="function"==typeof require&&require;if(!t&&e)return e(n,!0);if(f)return f(n,!0);throw new Error("Cannot find module '"+n+"'")}e=i[n]={exports:{}};r[n][0].call(e.exports,function(t){var e=r[n][1][t];return a(e||t)},e,e.exports,o,r,i,s)}return i[n].exports}for(var f="function"==typeof require&&require,t=0;t<s.length;t++)a(s[t]);return a}({1:[function(t,l,e){!function(t,e,n,o,r,i,s,a,f){"use strict";!function(t,e){if("object"==typeof l&&"object"==typeof l.exports){if(!t.document)throw new Error("HC-Sticky requires a browser to run.");l.exports=e(t)}else"function"==typeof define&&define.amd?define("hcSticky",[],e(t)):e(t)}("undefined"!=typeof window?window:this,function(H){function q(t,e,n){console.warn("%cHC Sticky:%c "+n+"%c '"+t+"'%c is now deprecated and will be removed. Use%c '"+e+"'%c instead.","color: #fa253b","color: default","color: #5595c6","color: default","color: #5595c6","color: default")}function G(r,u){var n=this;if(u=u||{},!(r="string"==typeof r?W.querySelector(r):r))return!1;u.queries&&q("queries","responsive","option"),u.queryFlow&&q("queryFlow","mobileFirst","option");var c={},p=G.Helpers,i=r.parentNode;function d(t){p.isEmptyObject(t=t||{})&&!p.isEmptyObject(c)||(c=Object.assign({},V,c,t))}function t(){return c.disable}function e(){var t=c.responsive||c.queries;if(t){var e=H.innerWidth,n=u;if((c=Object.assign({},V,n||{})).mobileFirst)for(var o in t)o<=e&&!p.isEmptyObject(t[o])&&d(t[o]);else{var r,i=[];for(r in t){var s={};s[r]=t[r],i.push(s)}for(var a=i.length-1;0<=a;a--){var f=i[a],l=Object.keys(f)[0];e<=l&&!p.isEmptyObject(f[l])&&d(f[l])}}}}function s(){x=U(),m=j(),k=w+m-B-A,T=E<x;var t,e=H.pageYOffset||W.documentElement.scrollTop,n=p.offset(r).top,o=n-e;_=e<F?"up":"down",N=e-F,S<(F=e)?k+B+(T?I:0)-(c.followScroll&&T?0:B)<=e+x-L-(E-(S-L)<x-L&&c.followScroll&&0<(t=x-E-L)?t:0)?M.release({position:"absolute",bottom:v+i.offsetHeight-k-B}):T&&c.followScroll?"down"==_?o+x+I<=E+.9?M.stick({bottom:I}):"fixed"===M.position&&M.release({position:"absolute",top:n-B-S-N+L}):Math.ceil(o+L)<0&&"fixed"===M.position?M.release({position:"absolute",top:n-B-S+L-N}):e+B-L<=n&&M.stick({top:B-L}):M.stick({top:B-L}):M.release({stop:!0})}function a(){z&&(H.removeEventListener("scroll",s,p.supportsPassive),z=!1)}function o(){var t,e,n,o;null!==r.offsetParent&&"none"!==p.getStyle(r,"display")?(M.css=(t=r,e=p.getCascadedStyle(t),n=p.getStyle(t),o={height:t.offsetHeight+"px",left:e.left,right:e.right,top:e.top,bottom:e.bottom,position:n.position,display:n.display,verticalAlign:n.verticalAlign,boxSizing:n.boxSizing,marginLeft:e.marginLeft,marginRight:e.marginRight,marginTop:e.marginTop,marginBottom:e.marginBottom,paddingLeft:e.paddingLeft,paddingRight:e.paddingRight},e.float&&(o.float=e.float||"none"),e.cssFloat&&(o.cssFloat=e.cssFloat||"none"),n.MozBoxSizing&&(o.MozBoxSizing=n.MozBoxSizing),o.width="auto"!==e.width?e.width:"border-box"===o.boxSizing||"border-box"===o.MozBoxSizing?t.offsetWidth+"px":n.width,o),O.init(),g=!(!c.stickTo||!("document"===c.stickTo||c.stickTo.nodeType&&9===c.stickTo.nodeType||"object"==typeof c.stickTo&&c.stickTo instanceof("undefined"!=typeof HTMLDocument?HTMLDocument:Document))),y=c.stickTo?g?W:p.getElement(c.stickTo):i,x=(U=function(){var t=r.offsetHeight+(parseInt(M.css.marginTop)||0)+(parseInt(M.css.marginBottom)||0),e=(x||0)-t;return-1<=e&&e<=1?x:t})(),m=(j=function(){return g?Math.max(W.documentElement.clientHeight,W.body.scrollHeight,W.documentElement.scrollHeight,W.body.offsetHeight,W.documentElement.offsetHeight):y.offsetHeight})(),w=g?0:p.offset(y).top,v=c.stickTo?g?0:p.offset(i).top:w,E=H.innerHeight,C=r.offsetTop-(parseInt(M.css.marginTop)||0),b=p.getElement(c.innerSticker),B=isNaN(c.top)&&-1<c.top.indexOf("%")?parseFloat(c.top)/100*E:c.top,I=isNaN(c.bottom)&&-1<c.bottom.indexOf("%")?parseFloat(c.bottom)/100*E:c.bottom,L=b?b.offsetTop:c.innerTop||0,A=isNaN(c.bottomEnd)&&-1<c.bottomEnd.indexOf("%")?parseFloat(c.bottomEnd)/100*E:c.bottomEnd,S=w-B+L+C,m<x?a():(s(),z||(H.addEventListener("scroll",s,p.supportsPassive),z=!0))):a()}function f(){r.style.position="",r.style.left="",r.style.top="",r.style.bottom="",r.style.width="",r.classList?r.classList.remove(c.stickyClass):r.className=r.className.replace(new RegExp("(^|\\b)"+c.stickyClass.split(" ").join("|")+"(\\b|$)","gi")," "),M.css={},!(M.position=null)===O.isAttached&&O.detach()}function l(){f(),e(),(t()?a:o)()}function h(){D&&(H.removeEventListener("resize",P,p.supportsPassive),D=!1),a()}"static"===p.getStyle(i,"position")&&(i.style.position="relative");var g,y,b,m,w,v,E,B,I,L,A,S,k,T,x,C,j,U,N,_,M={css:{},position:null,stick:function(t){t=t||{},p.hasClass(r,c.stickyClass)||(!1===O.isAttached&&O.attach(),M.position="fixed",r.style.position="fixed",r.style.left=O.offsetLeft+"px",r.style.width=O.width,void 0===t.bottom?r.style.bottom="auto":r.style.bottom=t.bottom+"px",void 0===t.top?r.style.top="auto":r.style.top=t.top+"px",r.classList?r.classList.add(c.stickyClass):r.className+=" "+c.stickyClass,c.onStart&&c.onStart.call(r,Object.assign({},c)))},release:function(t){var e;(t=t||{}).stop=t.stop||!1,!0!==t.stop&&"fixed"!==M.position&&null!==M.position&&(void 0===t.top&&void 0===t.bottom||void 0!==t.top&&(parseInt(p.getStyle(r,"top"))||0)===t.top||void 0!==t.bottom&&(parseInt(p.getStyle(r,"bottom"))||0)===t.bottom)||(!0===t.stop?!0===O.isAttached&&O.detach():!1===O.isAttached&&O.attach(),e=t.position||M.css.position,M.position=e,r.style.position=e,r.style.left=!0===t.stop?M.css.left:O.positionLeft+"px",r.style.width=("absolute"!==e?M.css:O).width,void 0===t.bottom?r.style.bottom=!0===t.stop?"":"auto":r.style.bottom=t.bottom+"px",void 0===t.top?r.style.top=!0===t.stop?"":"auto":r.style.top=t.top+"px",r.classList?r.classList.remove(c.stickyClass):r.className=r.className.replace(new RegExp("(^|\\b)"+c.stickyClass.split(" ").join("|")+"(\\b|$)","gi")," "),c.onStop&&c.onStop.call(r,Object.assign({},c)))}},O={el:W.createElement("div"),offsetLeft:null,positionLeft:null,width:null,isAttached:!1,init:function(){for(var t in O.el.className="sticky-spacer",M.css)O.el.style[t]=M.css[t];O.el.style["z-index"]="-1";var e=p.getStyle(r);O.offsetLeft=p.offset(r).left-(parseInt(e.marginLeft)||0),O.positionLeft=p.position(r).left,O.width=p.getStyle(r,"width")},attach:function(){i.insertBefore(O.el,r),O.isAttached=!0},detach:function(){O.el=i.removeChild(O.el),O.isAttached=!1}},F=H.pageYOffset||W.documentElement.scrollTop,z=!1,D=!1,R=function(){c.onBeforeResize&&c.onBeforeResize.call(r,Object.assign({},c)),l(),c.onResize&&c.onResize.call(r,Object.assign({},c))},P=c.resizeDebounce?p.debounce(R,c.resizeDebounce):R,R=function(){D||(H.addEventListener("resize",P,p.supportsPassive),D=!0),e(),(t()?a:o)()};this.options=function(t){return t?c[t]:Object.assign({},c)},this.refresh=l,this.update=function(t){d(t),u=Object.assign({},u,t||{}),l()},this.attach=R,this.detach=h,this.destroy=function(){h(),f()},this.triggerMethod=function(t,e){"function"==typeof n[t]&&n[t](e)},this.reinit=function(){q("reinit","refresh","method"),l()},d(u),R(),H.addEventListener("load",l)}var o,r,W=H.document,V={top:0,bottom:0,bottomEnd:0,innerTop:0,innerSticker:null,stickyClass:"sticky",stickTo:null,followScroll:!0,responsive:null,mobileFirst:!1,onStart:null,onStop:null,onBeforeResize:null,onResize:null,resizeDebounce:100,disable:!1};return void 0!==H.jQuery&&(o=H.jQuery,r="hcSticky",o.fn.extend({hcSticky:function(e,n){return this.length?"options"===e?o.data(this.get(0),r).options():this.each(function(){var t=o.data(this,r);t?t.triggerMethod(e,n):(t=new G(this,e),o.data(this,r,t))}):this}})),H.hcSticky=H.hcSticky||G,G}),function(f){var t=f.hcSticky,l=f.document;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(null!=r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},writable:!0,configurable:!0}),Array.prototype.forEach||(Array.prototype.forEach=function(t){var e,n;if(null==this)throw new TypeError("this is null or not defined");var o,r=Object(this),i=r.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(1<arguments.length&&(e=arguments[1]),n=0;n<i;)n in r&&(o=r[n],t.call(e,o,n,r)),n++});var e=!1;try{var n=Object.defineProperty({},"passive",{get:function(){e={passive:!1}}});f.addEventListener("testPassive",null,n),f.removeEventListener("testPassive",null,n)}catch(t){}function r(t,e){return f.getComputedStyle?e?l.defaultView.getComputedStyle(t,null).getPropertyValue(e):l.defaultView.getComputedStyle(t,null):t.currentStyle?e?t.currentStyle[e.replace(/-\w/g,function(t){return t.toUpperCase().replace("-","")})]:t.currentStyle:void 0}function i(t){var e=t.getBoundingClientRect(),n=f.pageYOffset||l.documentElement.scrollTop,t=f.pageXOffset||l.documentElement.scrollLeft;return{top:e.top+n,left:e.left+t}}t.Helpers={supportsPassive:e,isEmptyObject:function(t){for(var e in t)return!1;return!0},debounce:function(o,r,i){var s;return function(){var t=this,e=arguments,n=i&&!s;clearTimeout(s),s=setTimeout(function(){s=null,i||o.apply(t,e)},r),n&&o.apply(t,e)}},hasClass:function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)},offset:i,position:function(t){var e=i(o=t.offsetParent),n=i(t),o=r(o),t=r(t);return e.top+=parseInt(o.borderTopWidth)||0,e.left+=parseInt(o.borderLeftWidth)||0,{top:n.top-e.top-(parseInt(t.marginTop)||0),left:n.left-e.left-(parseInt(t.marginLeft)||0)}},getElement:function(t){var e=null;return"string"==typeof t?e=l.querySelector(t):f.jQuery&&t instanceof f.jQuery&&t.length?e=t[0]:t instanceof Element&&(e=t),e},getStyle:r,getCascadedStyle:function(t){var e,n=t.cloneNode(!0);n.style.display="none",Array.prototype.slice.call(n.querySelectorAll('input[type="radio"]')).forEach(function(t){t.removeAttribute("name")}),t.parentNode.insertBefore(n,t.nextSibling),n.currentStyle?e=n.currentStyle:f.getComputedStyle&&(e=l.defaultView.getComputedStyle(n,null));var o,r,i,s={};for(o in e)!isNaN(o)||"string"!=typeof e[o]&&"number"!=typeof e[o]||(s[o]=e[o]);if(Object.keys(s).length<3)for(var a in s={},e)isNaN(a)||(s[e[a].replace(/-\w/g,function(t){return t.toUpperCase().replace("-","")})]=e.getPropertyValue(e[a]));return s.margin||"auto"!==s.marginLeft?s.margin||s.marginLeft!==s.marginRight||s.marginLeft!==s.marginTop||s.marginLeft!==s.marginBottom||(s.margin=s.marginLeft):s.margin="auto",s.margin||"0px"!==s.marginLeft||"0px"!==s.marginRight||(i=(r=t.offsetLeft-t.parentNode.offsetLeft)-(parseInt(s.left)||0)-(parseInt(s.right)||0),0!=(i=t.parentNode.offsetWidth-t.offsetWidth-r-(parseInt(s.right)||0)+(parseInt(s.left)||0)-i)&&1!=i||(s.margin="auto")),n.parentNode.removeChild(n),n=null,s}}}(window)}.call(this,t("pBGvAp"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../dist/hc-sticky.js","/../dist")},{buffer:4,pBGvAp:6}],2:[function(l,t,e){!function(t,e,n,o,r,i,s,a,f){"use strict";new(l("../dist/hc-sticky.js"))("aside",{stickTo:"main",responsive:{980:{disable:!0}}})}.call(this,l("pBGvAp"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},l("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_160b5836.js","/")},{"../dist/hc-sticky.js":1,buffer:4,pBGvAp:6}],3:[function(t,e,l){!function(t,e,n,o,r,i,s,a,f){!function(t){"use strict";var f="undefined"!=typeof Uint8Array?Uint8Array:Array,e="+".charCodeAt(0),n="/".charCodeAt(0),o="0".charCodeAt(0),r="a".charCodeAt(0),i="A".charCodeAt(0),s="-".charCodeAt(0),a="_".charCodeAt(0);function l(t){t=t.charCodeAt(0);return t===e||t===s?62:t===n||t===a?63:t<o?-1:t<o+10?t-o+26+26:t<i+26?t-i:t<r+26?t-r+26:void 0}t.toByteArray=function(t){var e,n;if(0<t.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var o=t.length,o="="===t.charAt(o-2)?2:"="===t.charAt(o-1)?1:0,r=new f(3*t.length/4-o),i=0<o?t.length-4:t.length,s=0;function a(t){r[s++]=t}for(e=0;e<i;e+=4,0)a((16711680&(n=l(t.charAt(e))<<18|l(t.charAt(e+1))<<12|l(t.charAt(e+2))<<6|l(t.charAt(e+3))))>>16),a((65280&n)>>8),a(255&n);return 2==o?a(255&(n=l(t.charAt(e))<<2|l(t.charAt(e+1))>>4)):1==o&&(a((n=l(t.charAt(e))<<10|l(t.charAt(e+1))<<4|l(t.charAt(e+2))>>2)>>8&255),a(255&n)),r},t.fromByteArray=function(t){var e,n,o,r,i=t.length%3,s="";function a(t){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(t)}for(e=0,o=t.length-i;e<o;e+=3)n=(t[e]<<16)+(t[e+1]<<8)+t[e+2],s+=a((r=n)>>18&63)+a(r>>12&63)+a(r>>6&63)+a(63&r);switch(i){case 1:s+=a((n=t[t.length-1])>>2),s+=a(n<<4&63),s+="==";break;case 2:s+=a((n=(t[t.length-2]<<8)+t[t.length-1])>>10),s+=a(n>>4&63),s+=a(n<<2&63),s+="="}return s}}(void 0===l?this.base64js={}:l)}.call(this,t("pBGvAp"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/base64-js/lib/b64.js","/../node_modules/base64-js/lib")},{buffer:4,pBGvAp:6}],4:[function(D,t,R){!function(t,e,l,n,o,r,i,s,a){var f=D("base64-js"),u=D("ieee754");function l(t,e,n){if(!(this instanceof l))return new l(t,e,n);var o,r,i,s,a=typeof t;if("base64"===e&&"string"==a)for(t=(s=t).trim?s.trim():s.replace(/^\s+|\s+$/g,"");t.length%4!=0;)t+="=";if("number"==a)o=T(t);else if("string"==a)o=l.byteLength(t,e);else{if("object"!=a)throw new Error("First argument needs to be a number, array or string.");o=T(t.length)}if(l._useTypedArrays?r=l._augment(new Uint8Array(o)):((r=this).length=o,r._isBuffer=!0),l._useTypedArrays&&"number"==typeof t.byteLength)r._set(t);else if(x(s=t)||l.isBuffer(s)||s&&"object"==typeof s&&"number"==typeof s.length)for(i=0;i<o;i++)l.isBuffer(t)?r[i]=t.readUInt8(i):r[i]=t[i];else if("string"==a)r.write(t,0,e);else if("number"==a&&!l._useTypedArrays&&!n)for(i=0;i<o;i++)r[i]=0;return r}function c(t,e,n,o){return l._charsWritten=N(function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e}(e),t,n,o)}function p(t,e,n,o){return l._charsWritten=N(function(t){for(var e,n,o=[],r=0;r<t.length;r++)n=t.charCodeAt(r),e=n>>8,n=n%256,o.push(n),o.push(e);return o}(e),t,n,o)}function d(t,e,n){var o="";n=Math.min(t.length,n);for(var r=e;r<n;r++)o+=String.fromCharCode(t[r]);return o}function h(t,e,n,o){o||(z("boolean"==typeof n,"missing or invalid endian"),z(null!=e,"missing offset"),z(e+1<t.length,"Trying to read beyond buffer length"));var r,o=t.length;if(!(o<=e))return n?(r=t[e],e+1<o&&(r|=t[e+1]<<8)):(r=t[e]<<8,e+1<o&&(r|=t[e+1])),r}function g(t,e,n,o){o||(z("boolean"==typeof n,"missing or invalid endian"),z(null!=e,"missing offset"),z(e+3<t.length,"Trying to read beyond buffer length"));var r,o=t.length;if(!(o<=e))return n?(e+2<o&&(r=t[e+2]<<16),e+1<o&&(r|=t[e+1]<<8),r|=t[e],e+3<o&&(r+=t[e+3]<<24>>>0)):(e+1<o&&(r=t[e+1]<<16),e+2<o&&(r|=t[e+2]<<8),e+3<o&&(r|=t[e+3]),r+=t[e]<<24>>>0),r}function y(t,e,n,o){if(o||(z("boolean"==typeof n,"missing or invalid endian"),z(null!=e,"missing offset"),z(e+1<t.length,"Trying to read beyond buffer length")),!(t.length<=e)){n=h(t,e,n,!0);return 32768&n?-1*(65535-n+1):n}}function b(t,e,n,o){if(o||(z("boolean"==typeof n,"missing or invalid endian"),z(null!=e,"missing offset"),z(e+3<t.length,"Trying to read beyond buffer length")),!(t.length<=e)){n=g(t,e,n,!0);return 2147483648&n?-1*(4294967295-n+1):n}}function m(t,e,n,o){return o||(z("boolean"==typeof n,"missing or invalid endian"),z(e+3<t.length,"Trying to read beyond buffer length")),u.read(t,e,n,23,4)}function w(t,e,n,o){return o||(z("boolean"==typeof n,"missing or invalid endian"),z(e+7<t.length,"Trying to read beyond buffer length")),u.read(t,e,n,52,8)}function v(t,e,n,o,r){r||(z(null!=e,"missing value"),z("boolean"==typeof o,"missing or invalid endian"),z(null!=n,"missing offset"),z(n+1<t.length,"trying to write beyond buffer length"),M(e,65535));r=t.length;if(!(r<=n))for(var i=0,s=Math.min(r-n,2);i<s;i++)t[n+i]=(e&255<<8*(o?i:1-i))>>>8*(o?i:1-i)}function E(t,e,n,o,r){r||(z(null!=e,"missing value"),z("boolean"==typeof o,"missing or invalid endian"),z(null!=n,"missing offset"),z(n+3<t.length,"trying to write beyond buffer length"),M(e,4294967295));r=t.length;if(!(r<=n))for(var i=0,s=Math.min(r-n,4);i<s;i++)t[n+i]=e>>>8*(o?i:3-i)&255}function B(t,e,n,o,r){r||(z(null!=e,"missing value"),z("boolean"==typeof o,"missing or invalid endian"),z(null!=n,"missing offset"),z(n+1<t.length,"Trying to write beyond buffer length"),O(e,32767,-32768)),t.length<=n||v(t,0<=e?e:65535+e+1,n,o,r)}function I(t,e,n,o,r){r||(z(null!=e,"missing value"),z("boolean"==typeof o,"missing or invalid endian"),z(null!=n,"missing offset"),z(n+3<t.length,"Trying to write beyond buffer length"),O(e,2147483647,-2147483648)),t.length<=n||E(t,0<=e?e:4294967295+e+1,n,o,r)}function L(t,e,n,o,r){r||(z(null!=e,"missing value"),z("boolean"==typeof o,"missing or invalid endian"),z(null!=n,"missing offset"),z(n+3<t.length,"Trying to write beyond buffer length"),F(e,34028234663852886e22,-34028234663852886e22)),t.length<=n||u.write(t,e,n,o,23,4)}function A(t,e,n,o,r){r||(z(null!=e,"missing value"),z("boolean"==typeof o,"missing or invalid endian"),z(null!=n,"missing offset"),z(n+7<t.length,"Trying to write beyond buffer length"),F(e,17976931348623157e292,-17976931348623157e292)),t.length<=n||u.write(t,e,n,o,52,8)}R.Buffer=l,R.SlowBuffer=l,R.INSPECT_MAX_BYTES=50,l.poolSize=8192,l._useTypedArrays=function(){try{var t=new ArrayBuffer(0),e=new Uint8Array(t);return e.foo=function(){return 42},42===e.foo()&&"function"==typeof e.subarray}catch(t){return!1}}(),l.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.isBuffer=function(t){return!(null==t||!t._isBuffer)},l.byteLength=function(t,e){var n;switch(t+="",e||"utf8"){case"hex":n=t.length/2;break;case"utf8":case"utf-8":n=j(t).length;break;case"ascii":case"binary":case"raw":n=t.length;break;case"base64":n=U(t).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*t.length;break;default:throw new Error("Unknown encoding")}return n},l.concat=function(t,e){if(z(x(t),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===t.length)return new l(0);if(1===t.length)return t[0];if("number"!=typeof e)for(r=e=0;r<t.length;r++)e+=t[r].length;for(var n=new l(e),o=0,r=0;r<t.length;r++){var i=t[r];i.copy(n,o),o+=i.length}return n},l.prototype.write=function(t,e,n,o){isFinite(e)?isFinite(n)||(o=n,n=void 0):(f=o,o=e,e=n,n=f),e=Number(e)||0;var r,i,s,a,f=this.length-e;switch((!n||f<(n=Number(n)))&&(n=f),o=String(o||"utf8").toLowerCase()){case"hex":r=function(t,e,n,o){n=Number(n)||0;var r=t.length-n;(!o||r<(o=Number(o)))&&(o=r),z((r=e.length)%2==0,"Invalid hex string"),r/2<o&&(o=r/2);for(var i=0;i<o;i++){var s=parseInt(e.substr(2*i,2),16);z(!isNaN(s),"Invalid hex string"),t[n+i]=s}return l._charsWritten=2*i,i}(this,t,e,n);break;case"utf8":case"utf-8":i=this,s=e,a=n,r=l._charsWritten=N(j(t),i,s,a);break;case"ascii":case"binary":r=c(this,t,e,n);break;case"base64":i=this,s=e,a=n,r=l._charsWritten=N(U(t),i,s,a);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=p(this,t,e,n);break;default:throw new Error("Unknown encoding")}return r},l.prototype.toString=function(t,e,n){var o,r,i,s,a=this;if(t=String(t||"utf8").toLowerCase(),e=Number(e)||0,(n=void 0!==n?Number(n):a.length)===e)return"";switch(t){case"hex":o=function(t,e,n){var o=t.length;(!e||e<0)&&(e=0);(!n||n<0||o<n)&&(n=o);for(var r="",i=e;i<n;i++)r+=C(t[i]);return r}(a,e,n);break;case"utf8":case"utf-8":o=function(t,e,n){var o="",r="";n=Math.min(t.length,n);for(var i=e;i<n;i++)t[i]<=127?(o+=_(r)+String.fromCharCode(t[i]),r=""):r+="%"+t[i].toString(16);return o+_(r)}(a,e,n);break;case"ascii":case"binary":o=d(a,e,n);break;case"base64":r=a,s=n,o=0===(i=e)&&s===r.length?f.fromByteArray(r):f.fromByteArray(r.slice(i,s));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=function(t,e,n){for(var o=t.slice(e,n),r="",i=0;i<o.length;i+=2)r+=String.fromCharCode(o[i]+256*o[i+1]);return r}(a,e,n);break;default:throw new Error("Unknown encoding")}return o},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},l.prototype.copy=function(t,e,n,o){if(e=e||0,(o=!o&&0!==o?this.length:o)!==(n=n||0)&&0!==t.length&&0!==this.length){z(n<=o,"sourceEnd < sourceStart"),z(0<=e&&e<t.length,"targetStart out of bounds"),z(0<=n&&n<this.length,"sourceStart out of bounds"),z(0<=o&&o<=this.length,"sourceEnd out of bounds"),o>this.length&&(o=this.length);var r=(o=t.length-e<o-n?t.length-e+n:o)-n;if(r<100||!l._useTypedArrays)for(var i=0;i<r;i++)t[i+e]=this[i+n];else t._set(this.subarray(n,n+r),e)}},l.prototype.slice=function(t,e){var n=this.length;if(t=k(t,n,0),e=k(e,n,n),l._useTypedArrays)return l._augment(this.subarray(t,e));for(var o=e-t,r=new l(o,void 0,!0),i=0;i<o;i++)r[i]=this[i+t];return r},l.prototype.get=function(t){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(t)},l.prototype.set=function(t,e){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(t,e)},l.prototype.readUInt8=function(t,e){if(e||(z(null!=t,"missing offset"),z(t<this.length,"Trying to read beyond buffer length")),!(t>=this.length))return this[t]},l.prototype.readUInt16LE=function(t,e){return h(this,t,!0,e)},l.prototype.readUInt16BE=function(t,e){return h(this,t,!1,e)},l.prototype.readUInt32LE=function(t,e){return g(this,t,!0,e)},l.prototype.readUInt32BE=function(t,e){return g(this,t,!1,e)},l.prototype.readInt8=function(t,e){if(e||(z(null!=t,"missing offset"),z(t<this.length,"Trying to read beyond buffer length")),!(t>=this.length))return 128&this[t]?-1*(255-this[t]+1):this[t]},l.prototype.readInt16LE=function(t,e){return y(this,t,!0,e)},l.prototype.readInt16BE=function(t,e){return y(this,t,!1,e)},l.prototype.readInt32LE=function(t,e){return b(this,t,!0,e)},l.prototype.readInt32BE=function(t,e){return b(this,t,!1,e)},l.prototype.readFloatLE=function(t,e){return m(this,t,!0,e)},l.prototype.readFloatBE=function(t,e){return m(this,t,!1,e)},l.prototype.readDoubleLE=function(t,e){return w(this,t,!0,e)},l.prototype.readDoubleBE=function(t,e){return w(this,t,!1,e)},l.prototype.writeUInt8=function(t,e,n){n||(z(null!=t,"missing value"),z(null!=e,"missing offset"),z(e<this.length,"trying to write beyond buffer length"),M(t,255)),e>=this.length||(this[e]=t)},l.prototype.writeUInt16LE=function(t,e,n){v(this,t,e,!0,n)},l.prototype.writeUInt16BE=function(t,e,n){v(this,t,e,!1,n)},l.prototype.writeUInt32LE=function(t,e,n){E(this,t,e,!0,n)},l.prototype.writeUInt32BE=function(t,e,n){E(this,t,e,!1,n)},l.prototype.writeInt8=function(t,e,n){n||(z(null!=t,"missing value"),z(null!=e,"missing offset"),z(e<this.length,"Trying to write beyond buffer length"),O(t,127,-128)),e>=this.length||(0<=t?this.writeUInt8(t,e,n):this.writeUInt8(255+t+1,e,n))},l.prototype.writeInt16LE=function(t,e,n){B(this,t,e,!0,n)},l.prototype.writeInt16BE=function(t,e,n){B(this,t,e,!1,n)},l.prototype.writeInt32LE=function(t,e,n){I(this,t,e,!0,n)},l.prototype.writeInt32BE=function(t,e,n){I(this,t,e,!1,n)},l.prototype.writeFloatLE=function(t,e,n){L(this,t,e,!0,n)},l.prototype.writeFloatBE=function(t,e,n){L(this,t,e,!1,n)},l.prototype.writeDoubleLE=function(t,e,n){A(this,t,e,!0,n)},l.prototype.writeDoubleBE=function(t,e,n){A(this,t,e,!1,n)},l.prototype.fill=function(t,e,n){if(e=e||0,n=n||this.length,z("number"==typeof(t="string"==typeof(t=t||0)?t.charCodeAt(0):t)&&!isNaN(t),"value is not a number"),z(e<=n,"end < start"),n!==e&&0!==this.length){z(0<=e&&e<this.length,"start out of bounds"),z(0<=n&&n<=this.length,"end out of bounds");for(var o=e;o<n;o++)this[o]=t}},l.prototype.inspect=function(){for(var t=[],e=this.length,n=0;n<e;n++)if(t[n]=C(this[n]),n===R.INSPECT_MAX_BYTES){t[n+1]="...";break}return"<Buffer "+t.join(" ")+">"},l.prototype.toArrayBuffer=function(){if("undefined"==typeof Uint8Array)throw new Error("Buffer.toArrayBuffer not supported in this browser");if(l._useTypedArrays)return new l(this).buffer;for(var t=new Uint8Array(this.length),e=0,n=t.length;e<n;e+=1)t[e]=this[e];return t.buffer};var S=l.prototype;function k(t,e,n){return"number"!=typeof t?n:e<=(t=~~t)?e:0<=t||0<=(t+=e)?t:0}function T(t){return(t=~~Math.ceil(+t))<0?0:t}function x(t){return(Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)})(t)}function C(t){return t<16?"0"+t.toString(16):t.toString(16)}function j(t){for(var e=[],n=0;n<t.length;n++){var o=t.charCodeAt(n);if(o<=127)e.push(t.charCodeAt(n));else{var r=n;55296<=o&&o<=57343&&n++;for(var i=encodeURIComponent(t.slice(r,n+1)).substr(1).split("%"),s=0;s<i.length;s++)e.push(parseInt(i[s],16))}}return e}function U(t){return f.toByteArray(t)}function N(t,e,n,o){for(var r=0;r<o&&!(r+n>=e.length||r>=t.length);r++)e[r+n]=t[r];return r}function _(t){try{return decodeURIComponent(t)}catch(t){return String.fromCharCode(65533)}}function M(t,e){z("number"==typeof t,"cannot write a non-number as a number"),z(0<=t,"specified a negative value for writing an unsigned value"),z(t<=e,"value is larger than maximum value for type"),z(Math.floor(t)===t,"value has a fractional component")}function O(t,e,n){z("number"==typeof t,"cannot write a non-number as a number"),z(t<=e,"value larger than maximum allowed value"),z(n<=t,"value smaller than minimum allowed value"),z(Math.floor(t)===t,"value has a fractional component")}function F(t,e,n){z("number"==typeof t,"cannot write a non-number as a number"),z(t<=e,"value larger than maximum allowed value"),z(n<=t,"value smaller than minimum allowed value")}function z(t,e){if(!t)throw new Error(e||"Failed assertion")}l._augment=function(t){return t._isBuffer=!0,t._get=t.get,t._set=t.set,t.get=S.get,t.set=S.set,t.write=S.write,t.toString=S.toString,t.toLocaleString=S.toString,t.toJSON=S.toJSON,t.copy=S.copy,t.slice=S.slice,t.readUInt8=S.readUInt8,t.readUInt16LE=S.readUInt16LE,t.readUInt16BE=S.readUInt16BE,t.readUInt32LE=S.readUInt32LE,t.readUInt32BE=S.readUInt32BE,t.readInt8=S.readInt8,t.readInt16LE=S.readInt16LE,t.readInt16BE=S.readInt16BE,t.readInt32LE=S.readInt32LE,t.readInt32BE=S.readInt32BE,t.readFloatLE=S.readFloatLE,t.readFloatBE=S.readFloatBE,t.readDoubleLE=S.readDoubleLE,t.readDoubleBE=S.readDoubleBE,t.writeUInt8=S.writeUInt8,t.writeUInt16LE=S.writeUInt16LE,t.writeUInt16BE=S.writeUInt16BE,t.writeUInt32LE=S.writeUInt32LE,t.writeUInt32BE=S.writeUInt32BE,t.writeInt8=S.writeInt8,t.writeInt16LE=S.writeInt16LE,t.writeInt16BE=S.writeInt16BE,t.writeInt32LE=S.writeInt32LE,t.writeInt32BE=S.writeInt32BE,t.writeFloatLE=S.writeFloatLE,t.writeFloatBE=S.writeFloatBE,t.writeDoubleLE=S.writeDoubleLE,t.writeDoubleBE=S.writeDoubleBE,t.fill=S.fill,t.inspect=S.inspect,t.toArrayBuffer=S.toArrayBuffer,t}}.call(this,D("pBGvAp"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},D("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/buffer/index.js","/../node_modules/buffer")},{"base64-js":3,buffer:4,ieee754:5,pBGvAp:6}],5:[function(t,e,l){!function(t,e,n,o,r,i,s,a,f){l.read=function(t,e,n,o,r){var i,s,a=8*r-o-1,f=(1<<a)-1,l=f>>1,u=-7,c=n?r-1:0,p=n?-1:1,n=t[e+c];for(c+=p,i=n&(1<<-u)-1,n>>=-u,u+=a;0<u;i=256*i+t[e+c],c+=p,u-=8);for(s=i&(1<<-u)-1,i>>=-u,u+=o;0<u;s=256*s+t[e+c],c+=p,u-=8);if(0===i)i=1-l;else{if(i===f)return s?NaN:1/0*(n?-1:1);s+=Math.pow(2,o),i-=l}return(n?-1:1)*s*Math.pow(2,i-o)},l.write=function(t,e,n,o,r,i){var s,a,f=8*i-r-1,l=(1<<f)-1,u=l>>1,c=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,p=o?0:i-1,d=o?1:-1,i=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(o=Math.pow(2,-s))<1&&(s--,o*=2),2<=(e+=1<=s+u?c/o:c*Math.pow(2,1-u))*o&&(s++,o/=2),l<=s+u?(a=0,s=l):1<=s+u?(a=(e*o-1)*Math.pow(2,r),s+=u):(a=e*Math.pow(2,u-1)*Math.pow(2,r),s=0));8<=r;t[n+p]=255&a,p+=d,a/=256,r-=8);for(s=s<<r|a,f+=r;0<f;t[n+p]=255&s,p+=d,s/=256,f-=8);t[n+p-d]|=128*i}}.call(this,t("pBGvAp"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/ieee754/index.js","/../node_modules/ieee754")},{buffer:4,pBGvAp:6}],6:[function(t,u,e){!function(t,e,n,o,r,i,s,a,f){function l(){}(t=u.exports={}).nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(t)return function(t){return window.setImmediate(t)};if(e){var n=[];return window.addEventListener("message",function(t){var e=t.source;e!==window&&null!==e||"process-tick"!==t.data||(t.stopPropagation(),0<n.length&&n.shift()())},!0),function(t){n.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),t.title="browser",t.browser=!0,t.env={},t.argv=[],t.on=l,t.addListener=l,t.once=l,t.off=l,t.removeListener=l,t.removeAllListeners=l,t.emit=l,t.binding=function(t){throw new Error("process.binding is not supported")},t.cwd=function(){return"/"},t.chdir=function(t){throw new Error("process.chdir is not supported")}}.call(this,t("pBGvAp"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/process/browser.js","/../node_modules/process")},{buffer:4,pBGvAp:6}]},{},[2]);