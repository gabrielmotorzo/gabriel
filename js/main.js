/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
!function(a){a.fn.appear=function(b,c){var d=a.extend({data:void 0,one:!0,accX:0,accY:0},c);return this.each(function(){var c=a(this);if(c.appeared=!1,!b)return void c.trigger("appear",d.data);var e=a(window),f=function(){if(!c.is(":visible"))return void(c.appeared=!1);var a=e.scrollLeft(),b=e.scrollTop(),f=c.offset(),g=f.left,h=f.top,i=d.accX,j=d.accY,k=c.height(),l=e.height(),m=c.width(),n=e.width();h+k+j>=b&&b+l+j>=h&&g+m+i>=a&&a+n+i>=g?c.appeared||c.trigger("appear",d.data):c.appeared=!1},g=function(){if(c.appeared=!0,d.one){e.unbind("scroll",f);var g=a.inArray(f,a.fn.appear.checks);g>=0&&a.fn.appear.checks.splice(g,1)}b.apply(this,arguments)};d.one?c.one("appear",d.data,g):c.bind("appear",d.data,g),e.scroll(f),a.fn.appear.checks.push(f),f()})},a.extend(a.fn.appear,{checks:[],timeout:null,checkAll:function(){var b=a.fn.appear.checks.length;if(b>0)for(;b--;)a.fn.appear.checks[b]()},run:function(){a.fn.appear.timeout&&clearTimeout(a.fn.appear.timeout),a.fn.appear.timeout=setTimeout(a.fn.appear.checkAll,20)}}),a.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(b,c){var d=a.fn[c];d&&(a.fn[c]=function(){var b=d.apply(this,arguments);return a.fn.appear.run(),b})})}(jQuery);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*(2*Math.PI)/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*(.3*1.5)),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*(b*b*(((f*=1.525)+1)*b-f))+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*(7.5625*b*b)+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*
Plugin Name: 	BrowserSelector
Written by: 	Okler Themes - (http://www.okler.net)
Version: 		4.8.0
*/
!function(a){a.extend({browserSelector:function(){!function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))}(navigator.userAgent||navigator.vendor||window.opera);var b="ontouchstart"in window||navigator.msMaxTouchPoints,d=navigator.userAgent,e=d.toLowerCase(),f=function(a){return e.indexOf(a)>-1},g="gecko",h="webkit",i="safari",j="opera",k=document.documentElement,l=[!/opera|webtv/i.test(e)&&/msie\s(\d)/.test(e)?"ie ie"+parseFloat(navigator.appVersion.split("MSIE")[1]):f("firefox/2")?g+" ff2":f("firefox/3.5")?g+" ff3 ff3_5":f("firefox/3")?g+" ff3":f("gecko/")?g:f("opera")?j+(/version\/(\d+)/.test(e)?" "+j+RegExp.jQuery1:/opera(\s|\/)(\d+)/.test(e)?" "+j+RegExp.jQuery2:""):f("konqueror")?"konqueror":f("chrome")?h+" chrome":f("iron")?h+" iron":f("applewebkit/")?h+" "+i+(/version\/(\d+)/.test(e)?" "+i+RegExp.jQuery1:""):f("mozilla/")?g:"",f("j2me")?"mobile":f("iphone")?"iphone":f("ipod")?"ipod":f("mac")?"mac":f("darwin")?"mac":f("webtv")?"webtv":f("win")?"win":f("freebsd")?"freebsd":f("x11")||f("linux")?"linux":"","js"];c=l.join(" "),a.browser.mobile&&(c+=" mobile"),b&&(c+=" touch"),k.className+=" "+c;var m=!window.ActiveXObject&&"ActiveXObject"in window;return m?void a("html").removeClass("gecko").addClass("ie ie11"):(a("body").hasClass("dark")&&a("html").addClass("dark"),void(a("body").hasClass("boxed")&&a("html").addClass("boxed")))}}),a.browserSelector()}(jQuery),function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){var b="waitForImages";a.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"],hasImageAttributes:["srcset"]},a.expr[":"].uncached=function(b){return a(b).is('img[src][src!=""]')?!b.complete:!1},a.fn.waitForImages=function(){var c,d,e,f=0,g=0,h=a.Deferred();if(a.isPlainObject(arguments[0])?(e=arguments[0].waitForAll,d=arguments[0].each,c=arguments[0].finished):1===arguments.length&&"boolean"===a.type(arguments[0])?e=arguments[0]:(c=arguments[0],d=arguments[1],e=arguments[2]),c=c||a.noop,d=d||a.noop,e=!!e,!a.isFunction(c)||!a.isFunction(d))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var i=a(this),j=[],k=a.waitForImages.hasImageProperties||[],l=a.waitForImages.hasImageAttributes||[],m=/url\(\s*(['"]?)(.*?)\1\s*\)/g;e?i.find("*").addBack().each(function(){var b=a(this);b.is("img:uncached")&&j.push({src:b.attr("src"),element:b[0]}),a.each(k,function(a,c){var d,e=b.css(c);if(!e)return!0;for(;d=m.exec(e);)j.push({src:d[2],element:b[0]})}),a.each(l,function(c,d){var e,f=b.attr(d);return f?(e=f.split(","),void a.each(e,function(c,d){d=a.trim(d).split(" ")[0],j.push({src:d,element:b[0]})})):!0})}):i.find("img:uncached").each(function(){j.push({src:this.src,element:this})}),f=j.length,g=0,0===f&&(c.call(i[0]),h.resolveWith(i[0])),a.each(j,function(e,j){var k=new Image,l="load."+b+" error."+b;a(k).one(l,function m(b){var e=[g,f,"load"==b.type];return g++,d.apply(j.element,e),h.notifyWith(j.element,e),a(this).off(l,m),g==f?(c.call(i[0]),h.resolveWith(i[0]),!1):void 0}),k.src=j.src})}),h.promise()}}),function(a){function b(a,b){return a.toFixed(b.decimals)}a.fn.countTo=function(b){return b=b||{},a(this).each(function(){function c(){k+=g,j++,d(k),"function"==typeof e.onUpdate&&e.onUpdate.call(h,k),j>=f&&(i.removeData("countTo"),clearInterval(l.interval),k=e.to,"function"==typeof e.onComplete&&e.onComplete.call(h,k))}function d(a){var b=e.formatter.call(h,a,e);i.html(b)}var e=a.extend({},a.fn.countTo.defaults,{from:a(this).data("from"),to:a(this).data("to"),speed:a(this).data("speed"),refreshInterval:a(this).data("refresh-interval"),decimals:a(this).data("decimals")},b),f=Math.ceil(e.speed/e.refreshInterval),g=(e.to-e.from)/f,h=this,i=a(this),j=0,k=e.from,l=i.data("countTo")||{};i.data("countTo",l),l.interval&&clearInterval(l.interval),l.interval=setInterval(c,e.refreshInterval),d(k)})},a.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:b,onUpdate:null,onComplete:null}}(jQuery),function(a){"use strict";var b,c={action:function(){},runOnLoad:!1,duration:500},d=c,e=!1,f={};f.init=function(){for(var b=0;b<=arguments.length;b++){var c=arguments[b];switch(typeof c){case"function":d.action=c;break;case"boolean":d.runOnLoad=c;break;case"number":d.duration=c}}return this.each(function(){d.runOnLoad&&d.action(),a(this).resize(function(){f.timedAction.call(this)})})},f.timedAction=function(a,c){var f=function(){var a=d.duration;if(e){var c=new Date-b;if(a=d.duration-c,0>=a)return clearTimeout(e),e=!1,void d.action()}g(a)},g=function(a){e=setTimeout(f,a)};b=new Date,"number"==typeof c&&(d.duration=c),"function"==typeof a&&(d.action=a),e||f()},a.fn.afterResize=function(a){return f[a]?f[a].apply(this,Array.prototype.slice.call(arguments,1)):f.init.apply(this,arguments)}}(jQuery),function(a){var b=-1,c=-1,d=function(b){var c=1,d=a(b),f=null,g=[];return d.each(function(){var b=a(this),d=b.offset().top-e(b.css("margin-top")),h=g.length>0?g[g.length-1]:null;null===h?g.push(b):Math.floor(Math.abs(f-d))<=c?g[g.length-1]=h.add(b):g.push(b),f=d}),g},e=function(a){return parseFloat(a)||0},f=function(b){var c={byRow:!0,remove:!1,property:"height"};return"object"==typeof b?a.extend(c,b):("boolean"==typeof b?c.byRow=b:"remove"===b&&(c.remove=!0),c)},g=a.fn.matchHeight=function(b){var c=f(b);if(c.remove){var d=this;return this.css(c.property,""),a.each(g._groups,function(a,b){b.elements=b.elements.not(d)}),this}return this.length<=1?this:(g._groups.push({elements:this,options:c}),g._apply(this,c),this)};g._groups=[],g._throttle=80,g._maintainScroll=!1,g._beforeUpdate=null,g._afterUpdate=null,g._apply=function(b,c){var h=f(c),i=a(b),j=[i],k=a(window).scrollTop(),l=a("html").outerHeight(!0),m=i.parents().filter(":hidden");return m.each(function(){var b=a(this);b.data("style-cache",b.attr("style"))}),m.css("display","block"),h.byRow&&(i.each(function(){var b=a(this),c="inline-block"===b.css("display")?"inline-block":"block";b.data("style-cache",b.attr("style")),b.css({display:c,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})}),j=d(i),i.each(function(){var b=a(this);b.attr("style",b.data("style-cache")||"")})),a.each(j,function(b,c){var d=a(c),f=0;return h.byRow&&d.length<=1?void d.css(h.property,""):(d.each(function(){var b=a(this),c="inline-block"===b.css("display")?"inline-block":"block",d={display:c};d[h.property]="",b.css(d),b.outerHeight(!1)>f&&(f=b.outerHeight(!1)),b.css("display","")}),void d.each(function(){var b=a(this),c=0;"border-box"!==b.css("box-sizing")&&(c+=e(b.css("border-top-width"))+e(b.css("border-bottom-width")),c+=e(b.css("padding-top"))+e(b.css("padding-bottom"))),b.css(h.property,f-c)}))}),m.each(function(){var b=a(this);b.attr("style",b.data("style-cache")||null)}),g._maintainScroll&&a(window).scrollTop(k/l*a("html").outerHeight(!0)),this},g._applyDataApi=function(){var b={};a("[data-match-height], [data-mh]").each(function(){var c=a(this),d=c.attr("data-match-height")||c.attr("data-mh");d in b?b[d]=b[d].add(c):b[d]=c}),a.each(b,function(){this.matchHeight(!0)})};var h=function(b){g._beforeUpdate&&g._beforeUpdate(b,g._groups),a.each(g._groups,function(){g._apply(this.elements,this.options)}),g._afterUpdate&&g._afterUpdate(b,g._groups)};g._update=function(d,e){if(e&&"resize"===e.type){var f=a(window).width();if(f===b)return;b=f}d?-1===c&&(c=setTimeout(function(){h(e),c=-1},g._throttle)):h(e)},a(g._applyDataApi),a(window).bind("load",function(a){g._update(!1,a)}),a(window).bind("resize orientationchange",function(a){g._update(!0,a)})}(jQuery),/*
Plugin Name: 	jQuery.pin
Written by: 	Okler Themes - (http://www.okler.net)
Version: 		4.8.0

Based on:

	https://github.com/webpop/jquery.pin
	Licensed under the terms of the MIT license.

*/
function(a){"use strict";a.fn.pin=function(b){var c=0,d=[],e=!1,f=a(window);b=b||{};var g=function(){for(var c=0,g=d.length;g>c;c++){var h=d[c];if(b.minWidth&&f.width()<=b.minWidth)h.parent().is(".pin-wrapper")&&h.unwrap(),h.css({width:"",left:"",top:"",position:""}),b.activeClass&&h.removeClass(b.activeClass),e=!0;else{e=!1;var i=b.containerSelector?h.closest(b.containerSelector):a(document.body),j=h.offset(),k=i.offset(),l=h.parent().offset();h.parent().is(".pin-wrapper")||h.wrap("<div class='pin-wrapper'>");var m=a.extend({top:0,bottom:0},b.padding||{});h.data("pin",{pad:m,from:(b.containerSelector?k.top:j.top)-m.top,to:k.top+i.height()-h.outerHeight()-m.bottom,end:k.top+i.height(),parentTop:l.top}),h.css({width:h.outerWidth()}),h.parent().css("height",h.outerHeight())}}},h=function(){if(!e){c=f.scrollTop();for(var g=[],h=0,i=d.length;i>h;h++){var j=a(d[h]),k=j.data("pin");if(k){g.push(j);var l=k.from-k.pad.bottom,m=k.to-k.pad.top;l+j.outerHeight()>k.end?j.css("position",""):c>l&&m>c?(!("fixed"==j.css("position"))&&j.css({left:j.offset().left,top:k.pad.top}).css("position","fixed"),b.activeClass&&j.addClass(b.activeClass)):c>=m?(j.css({left:"",top:m-k.parentTop+k.pad.top}).css("position","absolute"),b.activeClass&&j.addClass(b.activeClass)):(j.css({position:"",top:"",left:""}),b.activeClass&&j.removeClass(b.activeClass))}}d=g}},i=function(){g(),h()};return this.each(function(){var b=a(this),c=a(this).data("pin")||{};c&&c.update||(d.push(b),a("img",this).one("load",g),c.update=i,a(this).data("pin",c))}),f.scroll(h),f.resize(function(){g()}),g(),f.load(i),this}}(jQuery),/*
Plugin Name: 	smoothScroll for jQuery.
Written by: 	Okler Themes - (http://www.okler.net)
Version: 		4.8.0

Based on:

	SmoothScroll v1.4.0
	Licensed under the terms of the MIT license.

	People involved
	 - Balazs Galambosi (maintainer)
	 - Patrick Brunner  (original idea)
	 - Michael Herf     (Pulse Algorithm)

*/
function(a){a.extend({smoothScroll:function(){!function(){function a(){E.keyboardSupport&&n("keydown",f)}function b(){if(!I&&document.body){I=!0;var b=document.body,c=document.documentElement,d=window.innerHeight,e=b.scrollHeight;if(J=document.compatMode.indexOf("CSS")>=0?c:b,y=b,a(),top!=self)G=!0;else if(e>d&&(b.offsetHeight<=d||c.offsetHeight<=d)){var f=document.createElement("div");f.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+J.scrollHeight+"px",document.body.appendChild(f);var g;A=function(){g||(g=setTimeout(function(){F||(f.style.height="0",f.style.height=J.scrollHeight+"px",g=null)},500))},setTimeout(A,10),n("resize",A);var h={attributes:!0,childList:!0,characterData:!1};if(z=new U(A),z.observe(b,h),J.offsetHeight<=d){var i=document.createElement("div");i.style.clear="both",b.appendChild(i)}}E.fixedBackground||F||(b.style.backgroundAttachment="scroll",c.style.backgroundAttachment="scroll")}}function c(){z&&z.disconnect(),o(S,e),o("mousedown",g),o("keydown",f),o("resize",A),o("load",b)}function d(a,b,c){if(q(b,c),1!=E.accelerationMax){var d=Date.now(),e=d-P;if(e<E.accelerationDelta){var f=(1+50/e)/2;f>1&&(f=Math.min(f,E.accelerationMax),b*=f,c*=f)}P=Date.now()}if(N.push({x:b,y:c,lastX:0>b?.99:-.99,lastY:0>c?.99:-.99,start:Date.now()}),!O){var g=a===document.body,h=function(d){for(var e=Date.now(),f=0,i=0,j=0;j<N.length;j++){var k=N[j],l=e-k.start,m=l>=E.animationTime,n=m?1:l/E.animationTime;E.pulseAlgorithm&&(n=w(n));var o=k.x*n-k.lastX>>0,p=k.y*n-k.lastY>>0;f+=o,i+=p,k.lastX+=o,k.lastY+=p,m&&(N.splice(j,1),j--)}g?window.scrollBy(f,i):(f&&(a.scrollLeft+=f),i&&(a.scrollTop+=i)),b||c||(N=[]),N.length?T(h,a,1e3/E.frameRate+1):O=!1};T(h,a,0),O=!0}}function e(a){I||b();var c=a.target,e=j(c);if(!e||a.defaultPrevented||a.ctrlKey)return!0;if(p(y,"embed")||p(c,"embed")&&/\.pdf/i.test(c.src)||p(y,"object"))return!0;var f=-a.wheelDeltaX||a.deltaX||0,g=-a.wheelDeltaY||a.deltaY||0;return L&&(a.wheelDeltaX&&s(a.wheelDeltaX,120)&&(f=-120*(a.wheelDeltaX/Math.abs(a.wheelDeltaX))),a.wheelDeltaY&&s(a.wheelDeltaY,120)&&(g=-120*(a.wheelDeltaY/Math.abs(a.wheelDeltaY)))),f||g||(g=-a.wheelDelta||0),1===a.deltaMode&&(f*=40,g*=40),!E.touchpadSupport&&r(g)?!0:(Math.abs(f)>1.2&&(f*=E.stepSize/120),Math.abs(g)>1.2&&(g*=E.stepSize/120),d(e,f,g),a.preventDefault(),void h())}function f(a){var b=a.target,c=a.ctrlKey||a.altKey||a.metaKey||a.shiftKey&&a.keyCode!==M.spacebar;document.contains(y)||(y=document.activeElement);var e=/^(textarea|select|embed|object)$/i,f=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.test(b.nodeName)||p(b,"input")&&!f.test(b.type)||p(y,"video")||u(a)||b.isContentEditable||a.defaultPrevented||c)return!0;if((p(b,"button")||p(b,"input")&&f.test(b.type))&&a.keyCode===M.spacebar)return!0;var g,i=0,k=0,l=j(y),m=l.clientHeight;switch(l==document.body&&(m=window.innerHeight),a.keyCode){case M.up:k=-E.arrowScroll;break;case M.down:k=E.arrowScroll;break;case M.spacebar:g=a.shiftKey?1:-1,k=-g*m*.9;break;case M.pageup:k=.9*-m;break;case M.pagedown:k=.9*m;break;case M.home:k=-l.scrollTop;break;case M.end:var n=l.scrollHeight-l.scrollTop-m;k=n>0?n+10:0;break;case M.left:i=-E.arrowScroll;break;case M.right:i=E.arrowScroll;break;default:return!0}d(l,i,k),a.preventDefault(),h()}function g(a){y=a.target}function h(){clearTimeout(B),B=setInterval(function(){R={}},1e3)}function i(a,b){for(var c=a.length;c--;)R[Q(a[c])]=b;return b}function j(a){var b=[],c=document.body,d=J.scrollHeight;do{var e=R[Q(a)];if(e)return i(b,e);if(b.push(a),d===a.scrollHeight){var f=l(J)&&l(c),g=f||m(J);if(G&&k(J)||!G&&g)return i(b,V())}else if(k(a)&&m(a))return i(b,a)}while(a=a.parentElement)}function k(a){return a.clientHeight+10<a.scrollHeight}function l(a){var b=getComputedStyle(a,"").getPropertyValue("overflow-y");return"hidden"!==b}function m(a){var b=getComputedStyle(a,"").getPropertyValue("overflow-y");return"scroll"===b||"auto"===b}function n(a,b){window.addEventListener(a,b,!1)}function o(a,b){window.removeEventListener(a,b,!1)}function p(a,b){return(a.nodeName||"").toLowerCase()===b.toLowerCase()}function q(a,b){a=a>0?1:-1,b=b>0?1:-1,(H.x!==a||H.y!==b)&&(H.x=a,H.y=b,N=[],P=0)}function r(a){return a?(K.length||(K=[a,a,a]),a=Math.abs(a),K.push(a),K.shift(),clearTimeout(C),C=setTimeout(function(){window.localStorage&&(localStorage.SS_deltaBuffer=K.join(","))},1e3),!t(120)&&!t(100)):void 0}function s(a,b){return Math.floor(a/b)==a/b}function t(a){return s(K[0],a)&&s(K[1],a)&&s(K[2],a)}function u(a){var b=a.target,c=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do if(c=b.classList&&b.classList.contains("html5-video-controls"))break;while(b=b.parentNode);return c}function v(a){var b,c,d;return a*=E.pulseScale,1>a?b=a-(1-Math.exp(-a)):(c=Math.exp(-1),a-=1,d=1-Math.exp(-a),b=c+d*(1-c)),b*E.pulseNormalize}function w(a){return a>=1?1:0>=a?0:(1==E.pulseNormalize&&(E.pulseNormalize/=v(1)),v(a))}function x(a){for(var b in a)D.hasOwnProperty(b)&&(E[b]=a[b])}var y,z,A,B,C,D={frameRate:150,animationTime:360,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!1,fixedBackground:!0,excluded:""},E=D,F=!1,G=!1,H={x:0,y:0},I=!1,J=document.documentElement,K=[],L=/^Mac/.test(navigator.platform),M={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},N=[],O=!1,P=Date.now(),Q=function(){var a=0;return function(b){return b.uniqueID||(b.uniqueID=a++)}}(),R={};window.localStorage&&localStorage.SS_deltaBuffer&&(K=localStorage.SS_deltaBuffer.split(","));var S,T=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a,b,c){window.setTimeout(a,c||1e3/60)}}(),U=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,V=function(){var a;return function(){if(!a){var b=document.createElement("div");b.style.cssText="height:10000px;width:1px;",document.body.appendChild(b);var c=document.body.scrollTop;document.documentElement.scrollTop;window.scrollBy(0,1),a=document.body.scrollTop!=c?document.body:document.documentElement,window.scrollBy(0,-1),document.body.removeChild(b)}return a}}(),W=window.navigator.userAgent,X=/Edge/.test(W),Y=/chrome/i.test(W)&&!X,Z=/safari/i.test(W)&&!X,$=/mobile/i.test(W),_=(Y||Z)&&!$;"onwheel"in document.createElement("div")?S="wheel":"onmousewheel"in document.createElement("div")&&(S="mousewheel"),S&&_&&(n(S,e),n("mousedown",g),n("load",b)),x.destroy=c,window.SmoothScrollOptions&&x(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return x}):"object"==typeof exports?module.exports=x:window.SmoothScroll=x}()}}),a("html").hasClass("disable-smooth-scroll")||a.smoothScroll()}(jQuery),/iPad|iPhone|iPod/.test(navigator.platform)&&$(document).ready(function(a){a(".thumb-info").attr("onclick","return true")});
/*!
 * jQuery Validation Plugin v1.15.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2016 Jörn Zaefferer
 * Released under the MIT license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){if(this.length){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||-1!==a.inArray(c.keyCode,d)||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=h&&g.check(e)))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)a[b]&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0]),d in c||!b.objectLength(a(this).rules())?!1:(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);if("function"==typeof f.normalizer){if(i=f.normalizer.call(b,i),"string"!=typeof i)throw new TypeError("The normalizer should return a string value.");delete f.normalizer}for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j instanceof TypeError&&(j.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){
// Copyright (c) 2010-2013 Diego Perini, MIT licensed
// https://gist.github.com/dperini/729294
// see also https://mathiasbynens.be/demo/url-regex
// modified to allow protocol-relative URLs
return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e=a(c).attr("type"),f="Step attribute on input type "+e+" is not supported.",g=["text","number","range"],h=new RegExp("\\b"+e+"\\b"),i=e&&!h.test(g.join());if(i)throw new Error(f);return this.optional(c)||b%d===0},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)})});
/*!
 * Stellar.js v0.6.2
 * http://markdalgleish.com/projects/stellar.js
 * 
 * Copyright 2013, Mark Dalgleish
 * This content is released under the MIT license
 * http://markdalgleish.mit-license.org
 */
!function(a,b,c,d){function e(b,c){this.element=b,this.options=a.extend({},g,c),this._defaults=g,this._name=f,this.init()}var f="stellar",g={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(a){a.hide()},showElement:function(a){a.show()}},h={scroll:{getLeft:function(a){return a.scrollLeft()},setLeft:function(a,b){a.scrollLeft(b)},getTop:function(a){return a.scrollTop()},setTop:function(a,b){a.scrollTop(b)}},position:{getLeft:function(a){return-1*parseInt(a.css("left"),10)},getTop:function(a){return-1*parseInt(a.css("top"),10)}},margin:{getLeft:function(a){return-1*parseInt(a.css("margin-left"),10)},getTop:function(a){return-1*parseInt(a.css("margin-top"),10)}},transform:{getLeft:function(a){var b=getComputedStyle(a[0])[k];return"none"!==b?-1*parseInt(b.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(a){var b=getComputedStyle(a[0])[k];return"none"!==b?-1*parseInt(b.match(/(-?[0-9]+)/g)[5],10):0}}},i={position:{setLeft:function(a,b){a.css("left",b)},setTop:function(a,b){a.css("top",b)}},transform:{setPosition:function(a,b,c,d,e){a[0].style[k]="translate3d("+(b-c)+"px, "+(d-e)+"px, 0)"}}},j=function(){var b,c=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,d=a("script")[0].style,e="";for(b in d)if(c.test(b)){e=b.match(c)[0];break}return"WebkitOpacity"in d&&(e="Webkit"),"KhtmlOpacity"in d&&(e="Khtml"),function(a){return e+(e.length>0?a.charAt(0).toUpperCase()+a.slice(1):a)}}(),k=j("transform"),l=a("<div />",{style:"background:#fff"}).css("background-position-x")!==d,m=l?function(a,b,c){a.css({"background-position-x":b,"background-position-y":c})}:function(a,b,c){a.css("background-position",b+" "+c)},n=l?function(a){return[a.css("background-position-x"),a.css("background-position-y")]}:function(a){return a.css("background-position").split(" ")},o=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame||function(a){setTimeout(a,1e3/60)};e.prototype={init:function(){this.options.name=f+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===c.body&&(this.element=b),this.$scrollElement=a(this.element),this.$element=this.element===b?a("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==d?a(this.options.viewportElement):this.$scrollElement[0]===b||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var a=this,b=h[a.options.scrollProperty];this._getScrollLeft=function(){return b.getLeft(a.$scrollElement)},this._getScrollTop=function(){return b.getTop(a.$scrollElement)}},_defineSetters:function(){var b=this,c=h[b.options.scrollProperty],d=i[b.options.positionProperty],e=c.setLeft,f=c.setTop;this._setScrollLeft="function"==typeof e?function(a){e(b.$scrollElement,a)}:a.noop,this._setScrollTop="function"==typeof f?function(a){f(b.$scrollElement,a)}:a.noop,this._setPosition=d.setPosition||function(a,c,e,f,g){b.options.horizontalScrolling&&d.setLeft(a,c,e),b.options.verticalScrolling&&d.setTop(a,f,g)}},_handleWindowLoadAndResize:function(){var c=this,d=a(b);c.options.responsive&&d.bind("load."+this.name,function(){c.refresh()}),d.bind("resize."+this.name,function(){c._detectViewport(),c.options.responsive&&c.refresh()})},refresh:function(c){var d=this,e=d._getScrollLeft(),f=d._getScrollTop();c&&c.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),c&&c.firstLoad&&/WebKit/.test(navigator.userAgent)&&a(b).load(function(){var a=d._getScrollLeft(),b=d._getScrollTop();d._setScrollLeft(a+1),d._setScrollTop(b+1),d._setScrollLeft(a),d._setScrollTop(b)}),this._setScrollLeft(e),this._setScrollTop(f)},_detectViewport:function(){var a=this.$viewportElement.offset(),b=null!==a&&a!==d;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=b?a.top:0,this.viewportOffsetLeft=b?a.left:0},_findParticles:function(){var b=this;this._getScrollLeft(),this._getScrollTop();if(this.particles!==d)for(var c=this.particles.length-1;c>=0;c--)this.particles[c].$element.data("stellar-elementIsActive",d);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(c){var e,f,g,h,i,j,k,l,m,n=a(this),o=0,p=0,q=0,r=0;if(n.data("stellar-elementIsActive")){if(n.data("stellar-elementIsActive")!==this)return}else n.data("stellar-elementIsActive",this);b.options.showElement(n),n.data("stellar-startingLeft")?(n.css("left",n.data("stellar-startingLeft")),n.css("top",n.data("stellar-startingTop"))):(n.data("stellar-startingLeft",n.css("left")),n.data("stellar-startingTop",n.css("top"))),g=n.position().left,h=n.position().top,i="auto"===n.css("margin-left")?0:parseInt(n.css("margin-left"),10),j="auto"===n.css("margin-top")?0:parseInt(n.css("margin-top"),10),l=n.offset().left-i,m=n.offset().top-j,n.parents().each(function(){var b=a(this);return b.data("stellar-offset-parent")===!0?(o=q,p=r,k=b,!1):(q+=b.position().left,void(r+=b.position().top))}),e=n.data("stellar-horizontal-offset")!==d?n.data("stellar-horizontal-offset"):k!==d&&k.data("stellar-horizontal-offset")!==d?k.data("stellar-horizontal-offset"):b.horizontalOffset,f=n.data("stellar-vertical-offset")!==d?n.data("stellar-vertical-offset"):k!==d&&k.data("stellar-vertical-offset")!==d?k.data("stellar-vertical-offset"):b.verticalOffset,b.particles.push({$element:n,$offsetParent:k,isFixed:"fixed"===n.css("position"),horizontalOffset:e,verticalOffset:f,startingPositionLeft:g,startingPositionTop:h,startingOffsetLeft:l,startingOffsetTop:m,parentOffsetLeft:o,parentOffsetTop:p,stellarRatio:n.data("stellar-ratio")!==d?n.data("stellar-ratio"):1,width:n.outerWidth(!0),height:n.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var b,c=this,e=this._getScrollLeft(),f=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(b=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(b=b.add(this.$element)),b.each(function(){var b,g,h,i,j,k,l,o=a(this),p=n(o),q=0,r=0,s=0,t=0;if(o.data("stellar-backgroundIsActive")){if(o.data("stellar-backgroundIsActive")!==this)return}else o.data("stellar-backgroundIsActive",this);o.data("stellar-backgroundStartingLeft")?m(o,o.data("stellar-backgroundStartingLeft"),o.data("stellar-backgroundStartingTop")):(o.data("stellar-backgroundStartingLeft",p[0]),o.data("stellar-backgroundStartingTop",p[1])),h="auto"===o.css("margin-left")?0:parseInt(o.css("margin-left"),10),i="auto"===o.css("margin-top")?0:parseInt(o.css("margin-top"),10),j=o.offset().left-h-e,k=o.offset().top-i-f,o.parents().each(function(){var b=a(this);return b.data("stellar-offset-parent")===!0?(q=s,r=t,l=b,!1):(s+=b.position().left,void(t+=b.position().top))}),b=o.data("stellar-horizontal-offset")!==d?o.data("stellar-horizontal-offset"):l!==d&&l.data("stellar-horizontal-offset")!==d?l.data("stellar-horizontal-offset"):c.horizontalOffset,g=o.data("stellar-vertical-offset")!==d?o.data("stellar-vertical-offset"):l!==d&&l.data("stellar-vertical-offset")!==d?l.data("stellar-vertical-offset"):c.verticalOffset,c.backgrounds.push({$element:o,$offsetParent:l,isFixed:"fixed"===o.css("background-attachment"),horizontalOffset:b,verticalOffset:g,startingValueLeft:p[0],startingValueTop:p[1],startingBackgroundPositionLeft:isNaN(parseInt(p[0],10))?0:parseInt(p[0],10),startingBackgroundPositionTop:isNaN(parseInt(p[1],10))?0:parseInt(p[1],10),startingPositionLeft:o.position().left,startingPositionTop:o.position().top,startingOffsetLeft:j,startingOffsetTop:k,parentOffsetLeft:q,parentOffsetTop:r,stellarRatio:o.data("stellar-background-ratio")===d?1:o.data("stellar-background-ratio")})}))},_reset:function(){var a,b,c,d,e;for(e=this.particles.length-1;e>=0;e--)a=this.particles[e],b=a.$element.data("stellar-startingLeft"),c=a.$element.data("stellar-startingTop"),this._setPosition(a.$element,b,b,c,c),this.options.showElement(a.$element),a.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(e=this.backgrounds.length-1;e>=0;e--)d=this.backgrounds[e],d.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),m(d.$element,d.startingValueLeft,d.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=a.noop,a(b).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var c=this,d=a(b);d.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),d.bind("resize.horizontal-"+this.name,function(){c.horizontalOffset=c.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),d.bind("resize.vertical-"+this.name,function(){c.verticalOffset=c.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var a,b,c,d,e,f,g,h,i,j,k=this._getScrollLeft(),l=this._getScrollTop(),n=!0,o=!0;if(this.currentScrollLeft!==k||this.currentScrollTop!==l||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=k,this.currentScrollTop=l,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,j=this.particles.length-1;j>=0;j--)a=this.particles[j],b=a.isFixed?1:0,this.options.horizontalScrolling?(f=(k+a.horizontalOffset+this.viewportOffsetLeft+a.startingPositionLeft-a.startingOffsetLeft+a.parentOffsetLeft)*-(a.stellarRatio+b-1)+a.startingPositionLeft,h=f-a.startingPositionLeft+a.startingOffsetLeft):(f=a.startingPositionLeft,h=a.startingOffsetLeft),this.options.verticalScrolling?(g=(l+a.verticalOffset+this.viewportOffsetTop+a.startingPositionTop-a.startingOffsetTop+a.parentOffsetTop)*-(a.stellarRatio+b-1)+a.startingPositionTop,i=g-a.startingPositionTop+a.startingOffsetTop):(g=a.startingPositionTop,i=a.startingOffsetTop),this.options.hideDistantElements&&(o=!this.options.horizontalScrolling||h+a.width>(a.isFixed?0:k)&&h<(a.isFixed?0:k)+this.viewportWidth+this.viewportOffsetLeft,n=!this.options.verticalScrolling||i+a.height>(a.isFixed?0:l)&&i<(a.isFixed?0:l)+this.viewportHeight+this.viewportOffsetTop),o&&n?(a.isHidden&&(this.options.showElement(a.$element),a.isHidden=!1),this._setPosition(a.$element,f,a.startingPositionLeft,g,a.startingPositionTop)):a.isHidden||(this.options.hideElement(a.$element),a.isHidden=!0);for(j=this.backgrounds.length-1;j>=0;j--)c=this.backgrounds[j],b=c.isFixed?0:1,d=this.options.horizontalScrolling?(k+c.horizontalOffset-this.viewportOffsetLeft-c.startingOffsetLeft+c.parentOffsetLeft-c.startingBackgroundPositionLeft)*(b-c.stellarRatio)+"px":c.startingValueLeft,e=this.options.verticalScrolling?(l+c.verticalOffset-this.viewportOffsetTop-c.startingOffsetTop+c.parentOffsetTop-c.startingBackgroundPositionTop)*(b-c.stellarRatio)+"px":c.startingValueTop,m(c.$element,d,e)}},_handleScrollEvent:function(){var a=this,b=!1,c=function(){a._repositionElements(),b=!1},d=function(){b||(o(c),b=!0)};this.$scrollElement.bind("scroll."+this.name,d),d()},_startAnimationLoop:function(){var a=this;this._animationLoop=function(){o(a._animationLoop),a._repositionElements()},this._animationLoop()}},a.fn[f]=function(b){var c=arguments;return b===d||"object"==typeof b?this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new e(this,b))}):"string"==typeof b&&"_"!==b[0]&&"init"!==b?this.each(function(){var d=a.data(this,"plugin_"+f);d instanceof e&&"function"==typeof d[b]&&d[b].apply(d,Array.prototype.slice.call(c,1)),"destroy"===b&&a.data(this,"plugin_"+f,null)}):void 0},a[f]=function(c){var d=a(b);return d.stellar.apply(d,Array.prototype.slice.call(arguments,0))},a[f].scrollProperty=h,a[f].positionProperty=i,b.Stellar=e}(jQuery,this,document);
/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.6
 **/
!function(a,b){"object"==typeof exports?module.exports=b(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],b):b(a.jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement("canvas");a.appendChild(d),"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext("2d");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,"px"].join(""),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c?!0:!1;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.trackWidth||b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d="function"==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(a,b){},onStep:function(a,b,c){},onStop:function(a,b){}};if("undefined"!=typeof b)d.renderer=b;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&"undefined"!=typeof c[b]?c[b]:d[b],"function"==typeof e[b]&&(e[b]=e[b].bind(this)));"string"==typeof e.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?e.easing=jQuery.easing[e.easing]:e.easing=d.easing,"number"==typeof e.animate&&(e.animate={duration:e.animate,enabled:!0}),"boolean"!=typeof e.animate||e.animate||(e.animate={duration:1e3,enabled:e.animate}),this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute("data-percent")&&this.update(parseFloat(a.getAttribute("data-percent")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,"easyPieChart")||(d=a.extend({},b,a(this).data()),a.data(this,"easyPieChart",new c(this,d)))})}});
/**
 * jQuery gMap - Google Maps API V3
 *
 * @license MIT License; http://www.opensource.org/licenses/mit-license.php
 * @url   http://github.com/marioestrada/jQuery-gMap
 * @author  Mario Estrada <me@mario.ec> based on original plugin by Cedric Kastner <cedric@nur-text.de>
 * @version 2.1.5
 */
!function(a){a.fn.gMap=function(b,c){switch(b){case"addMarker":return a(this).trigger("gMap.addMarker",[c.latitude,c.longitude,c.content,c.icon,c.popup]);case"centerAt":return a(this).trigger("gMap.centerAt",[c.latitude,c.longitude,c.zoom]);case"clearMarkers":return a(this).trigger("gMap.clearMarkers")}var d=a.extend({},a.fn.gMap.defaults,b);return this.each(function(){var b=new google.maps.Map(this);a(this).data("gMap.reference",b);var c=new google.maps.Geocoder;d.address?c.geocode({address:d.address},function(a,c){a&&a.length&&b.setCenter(a[0].geometry.location)}):d.latitude&&d.longitude?b.setCenter(new google.maps.LatLng(d.latitude,d.longitude)):a.isArray(d.markers)&&d.markers.length>0?d.markers[0].address?c.geocode({address:d.markers[0].address},function(a,c){a&&a.length>0&&b.setCenter(a[0].geometry.location)}):b.setCenter(new google.maps.LatLng(d.markers[0].latitude,d.markers[0].longitude)):b.setCenter(new google.maps.LatLng(34.885931,9.84375)),b.setZoom(d.zoom),b.setMapTypeId(google.maps.MapTypeId[d.maptype]);var e={scrollwheel:d.scrollwheel,disableDoubleClickZoom:!d.doubleclickzoom};d.controls===!1?a.extend(e,{disableDefaultUI:!0}):0!==d.controls.length&&a.extend(e,d.controls,{disableDefaultUI:!0}),b.setOptions(e);var f,g,h=new google.maps.Marker;f=new google.maps.MarkerImage(d.icon.image),f.size=new google.maps.Size(d.icon.iconsize[0],d.icon.iconsize[1]),f.anchor=new google.maps.Point(d.icon.iconanchor[0],d.icon.iconanchor[1]),h.setIcon(f),d.icon.shadow&&(g=new google.maps.MarkerImage(d.icon.shadow),g.size=new google.maps.Size(d.icon.shadowsize[0],d.icon.shadowsize[1]),g.anchor=new google.maps.Point(d.icon.shadowanchor[0],d.icon.shadowanchor[1]),h.setShadow(g)),a(this).bind("gMap.centerAt",function(a,c,d,e){e&&b.setZoom(e),b.panTo(new google.maps.LatLng(parseFloat(c),parseFloat(d)))});var i=[];a(this).bind("gMap.clearMarkers",function(){for(;i[0];)i.pop().setMap(null)});var j;a(this).bind("gMap.addMarker",function(a,c,e,f,g,k){var l,m,n=new google.maps.LatLng(parseFloat(c),parseFloat(e)),o=new google.maps.Marker({position:n});if(g?(l=new google.maps.MarkerImage(g.image),l.size=new google.maps.Size(g.iconsize[0],g.iconsize[1]),l.anchor=new google.maps.Point(g.iconanchor[0],g.iconanchor[1]),o.setIcon(l),g.shadow&&(m=new google.maps.MarkerImage(g.shadow),m.size=new google.maps.Size(g.shadowsize[0],g.shadowsize[1]),m.anchor=new google.maps.Point(g.shadowanchor[0],g.shadowanchor[1]),h.setShadow(m))):(o.setIcon(h.getIcon()),o.setShadow(h.getShadow())),f){"_latlng"===f&&(f=c+", "+e);var p=new google.maps.InfoWindow({content:d.html_prepend+f+d.html_append});google.maps.event.addListener(o,"click",function(){j&&j.close(),p.open(b,o),j=p}),k&&google.maps.event.addListenerOnce(b,"tilesloaded",function(){p.open(b,o)})}o.setMap(b),i.push(o)});for(var k,l=this,m=function(b){return function(c,d){c&&c.length>0&&a(l).trigger("gMap.addMarker",[c[0].geometry.location.lat(),c[0].geometry.location.lng(),b.html,b.icon,b.popup])}},n=0;n<d.markers.length;n++)k=d.markers[n],k.address?("_address"===k.html&&(k.html=k.address),c.geocode({address:k.address},m(k))):a(this).trigger("gMap.addMarker",[k.latitude,k.longitude,k.html,k.icon,k.popup])})},a.fn.gMap.defaults={address:"",latitude:0,longitude:0,zoom:1,markers:[],controls:[],scrollwheel:!1,doubleclickzoom:!0,maptype:"ROADMAP",html_prepend:'<div class="gmap_marker">',html_append:"</div>",icon:{image:"http://www.google.com/mapfiles/marker.png",shadow:"http://www.google.com/mapfiles/shadow50.png",iconsize:[20,34],shadowsize:[37,34],iconanchor:[9,34],shadowanchor:[6,34]}}}(jQuery);
/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.7
 *
 */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);
/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){"use strict";function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a,b){function c(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function d(){}function e(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=h.length;c>b;b++){var d=h[b];a[d]=0}return a}function f(b){function d(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||g("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=b("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var f=document.body||document.documentElement;f.appendChild(e);var h=j(e);l=200===c(h.width),f.removeChild(e)}}}function f(a){if(d(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var b=j(a);if("none"===b.display)return e();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var g=f.isBorderBox=!(!k||!b[k]||"border-box"!==b[k]),m=0,n=h.length;n>m;m++){var o=h[m],p=b[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=g&&l,y=c(b.width);y!==!1&&(f.width=y+(x?0:r+v));var z=c(b.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return f}var g="undefined"==typeof console?d:function(a){console.error(a)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],f):"object"==typeof exports?module.exports=f(require("desandro-get-style-property")):a.getSize=f(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){"use strict";function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"use strict";"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){"use strict";function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=this.layout.size,h=-1!=e.indexOf("%")?parseFloat(e)/100*g.width:parseInt(e,10),i=-1!=f.indexOf("%")?parseFloat(f)/100*g.height:parseInt(f,10);h=isNaN(h)?0:h,i=isNaN(i)?0:i,h-=c?g.paddingLeft:g.paddingRight,i-=d?g.paddingTop:g.paddingBottom,this.position.x=h,this.position.y=i},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,n?"translate3d("+a+"px, "+b+"px, 0)":"translate("+a+"px, "+b+"px)"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){"use strict";function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.Item=b(a.Outlayer))}(window,function(a){"use strict";function b(){a.Item.apply(this,arguments)}b.prototype=new a.Item,b.prototype._create=function(){this.id=this.layout.itemGUID++,a.Item.prototype._create.call(this),this.sortData={}},b.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var a=this.layout.options.getSortData,b=this.layout._sorters;for(var c in a){var d=b[c];this.sortData[c]=d(this.element,this)}}};var c=b.prototype.destroy;return b.prototype.destroy=function(){c.apply(this,arguments),this.css({display:""})},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("get-size"),require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.LayoutMode=b(a.getSize,a.Outlayer))}(window,function(a,b){"use strict";function c(a){this.isotope=a,a&&(this.options=a.options[this.namespace],this.element=a.element,this.items=a.filteredItems,this.size=a.size)}return function(){function a(a){return function(){return b.prototype[a].apply(this.isotope,arguments)}}for(var d=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],e=0,f=d.length;f>e;e++){var g=d[e];c.prototype[g]=a(g)}}(),c.prototype.needsVerticalResizeLayout=function(){var b=a(this.isotope.element),c=this.isotope.size&&b;return c&&b.innerHeight!=this.isotope.size.innerHeight},c.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},c.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},c.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},c.prototype.getSegmentSize=function(a,b){var c=a+b,d="outer"+b;if(this._getMeasurement(c,d),!this[c]){var e=this.getFirstItemSize();this[c]=e&&e[d]||this.isotope.size["inner"+b]}},c.prototype.getFirstItemSize=function(){var b=this.isotope.filteredItems[0];return b&&b.element&&a(b.element)},c.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},c.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},c.modes={},c.create=function(a,b){function d(){c.apply(this,arguments)}return d.prototype=new c,b&&(d.options=b),d.prototype.namespace=a,c.modes[a]=d,d},c}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],b):"object"==typeof exports?module.exports=b(require("../layout-mode"),require("masonry-layout")):b(a.Isotope.LayoutMode,a.Masonry)}(window,function(a,b){"use strict";function c(a,b){for(var c in b)a[c]=b[c];return a}var d=a.create("masonry"),e=d.prototype._getElementOffset,f=d.prototype.layout,g=d.prototype._getMeasurement;
c(d.prototype,b.prototype),d.prototype._getElementOffset=e,d.prototype.layout=f,d.prototype._getMeasurement=g;var h=d.prototype.measureColumns;d.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,h.call(this)};var i=d.prototype._manageStamp;return d.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,i.apply(this,arguments)},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("fitRows");return b.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth+this.gutter,c=this.isotope.size.innerWidth+this.gutter;0!==this.x&&b+this.x>c&&(this.x=0,this.y=this.maxY);var d={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+a.size.outerHeight),this.x+=b,d},b.prototype._getContainerSize=function(){return{height:this.maxY}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("vertical",{horizontalAlignment:0});return b.prototype._resetLayout=function(){this.y=0},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=(this.isotope.size.innerWidth-a.size.outerWidth)*this.options.horizontalAlignment,c=this.y;return this.y+=a.size.outerHeight,{x:b,y:c}},b.prototype._getContainerSize=function(){return{height:this.y}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(c,d,e,f,g,h){return b(a,c,d,e,f,g,h)}):"object"==typeof exports?module.exports=b(a,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):a.Isotope=b(a,a.Outlayer,a.getSize,a.matchesSelector,a.fizzyUIUtils,a.Isotope.Item,a.Isotope.LayoutMode)}(window,function(a,b,c,d,e,f,g){function h(a,b){return function(c,d){for(var e=0,f=a.length;f>e;e++){var g=a[e],h=c.sortData[g],i=d.sortData[g];if(h>i||i>h){var j=void 0!==b[g]?b[g]:b,k=j?1:-1;return(h>i?1:-1)*k}}return 0}}var i=a.jQuery,j=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")},k=document.documentElement,l=k.textContent?function(a){return a.textContent}:function(a){return a.innerText},m=b.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});m.Item=f,m.LayoutMode=g,m.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),b.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var a in g.modes)this._initLayoutMode(a)},m.prototype.reloadItems=function(){this.itemGUID=0,b.prototype.reloadItems.call(this)},m.prototype._itemize=function(){for(var a=b.prototype._itemize.apply(this,arguments),c=0,d=a.length;d>c;c++){var e=a[c];e.id=this.itemGUID++}return this._updateItemsSortData(a),a},m.prototype._initLayoutMode=function(a){var b=g.modes[a],c=this.options[a]||{};this.options[a]=b.options?e.extend(b.options,c):c,this.modes[a]=new b(this)},m.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?void this.arrange():void this._layout()},m.prototype._layout=function(){var a=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,a),this._isLayoutInited=!0},m.prototype.arrange=function(a){function b(){d.reveal(c.needReveal),d.hide(c.needHide)}this.option(a),this._getIsInstant();var c=this._filter(this.items);this.filteredItems=c.matches;var d=this;this._bindArrangeComplete(),this._isInstant?this._noTransition(b):b(),this._sort(),this._layout()},m.prototype._init=m.prototype.arrange,m.prototype._getIsInstant=function(){var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=a,a},m.prototype._bindArrangeComplete=function(){function a(){b&&c&&d&&e.dispatchEvent("arrangeComplete",null,[e.filteredItems])}var b,c,d,e=this;this.once("layoutComplete",function(){b=!0,a()}),this.once("hideComplete",function(){c=!0,a()}),this.once("revealComplete",function(){d=!0,a()})},m.prototype._filter=function(a){var b=this.options.filter;b=b||"*";for(var c=[],d=[],e=[],f=this._getFilterTest(b),g=0,h=a.length;h>g;g++){var i=a[g];if(!i.isIgnored){var j=f(i);j&&c.push(i),j&&i.isHidden?d.push(i):j||i.isHidden||e.push(i)}}return{matches:c,needReveal:d,needHide:e}},m.prototype._getFilterTest=function(a){return i&&this.options.isJQueryFiltering?function(b){return i(b.element).is(a)}:"function"==typeof a?function(b){return a(b.element)}:function(b){return d(b.element,a)}},m.prototype.updateSortData=function(a){var b;a?(a=e.makeArray(a),b=this.getItems(a)):b=this.items,this._getSorters(),this._updateItemsSortData(b)},m.prototype._getSorters=function(){var a=this.options.getSortData;for(var b in a){var c=a[b];this._sorters[b]=n(c)}},m.prototype._updateItemsSortData=function(a){for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.updateSortData()}};var n=function(){function a(a){if("string"!=typeof a)return a;var c=j(a).split(" "),d=c[0],e=d.match(/^\[(.+)\]$/),f=e&&e[1],g=b(f,d),h=m.sortDataParsers[c[1]];return a=h?function(a){return a&&h(g(a))}:function(a){return a&&g(a)}}function b(a,b){var c;return c=a?function(b){return b.getAttribute(a)}:function(a){var c=a.querySelector(b);return c&&l(c)}}return a}();m.sortDataParsers={parseInt:function(a){return parseInt(a,10)},parseFloat:function(a){return parseFloat(a)}},m.prototype._sort=function(){var a=this.options.sortBy;if(a){var b=[].concat.apply(a,this.sortHistory),c=h(b,this.options.sortAscending);this.filteredItems.sort(c),a!=this.sortHistory[0]&&this.sortHistory.unshift(a)}},m.prototype._mode=function(){var a=this.options.layoutMode,b=this.modes[a];if(!b)throw new Error("No layout mode: "+a);return b.options=this.options[a],b},m.prototype._resetLayout=function(){b.prototype._resetLayout.call(this),this._mode()._resetLayout()},m.prototype._getItemLayoutPosition=function(a){return this._mode()._getItemLayoutPosition(a)},m.prototype._manageStamp=function(a){this._mode()._manageStamp(a)},m.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},m.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},m.prototype.appended=function(a){var b=this.addItems(a);if(b.length){var c=this._filterRevealAdded(b);this.filteredItems=this.filteredItems.concat(c)}},m.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){this._resetLayout(),this._manageStamps();var c=this._filterRevealAdded(b);this.layoutItems(this.filteredItems),this.filteredItems=c.concat(this.filteredItems),this.items=b.concat(this.items)}},m.prototype._filterRevealAdded=function(a){var b=this._filter(a);return this.hide(b.needHide),this.reveal(b.matches),this.layoutItems(b.matches,!0),b.matches},m.prototype.insert=function(a){var b=this.addItems(a);if(b.length){var c,d,e=b.length;for(c=0;e>c;c++)d=b[c],this.element.appendChild(d.element);var f=this._filter(b).matches;for(c=0;e>c;c++)b[c].isLayoutInstant=!0;for(this.arrange(),c=0;e>c;c++)delete b[c].isLayoutInstant;this.reveal(f)}};var o=m.prototype.remove;return m.prototype.remove=function(a){a=e.makeArray(a);var b=this.getItems(a);o.call(this,a);var c=b&&b.length;if(c)for(var d=0;c>d;d++){var f=b[d];e.removeFrom(this.filteredItems,f)}},m.prototype.shuffle=function(){for(var a=0,b=this.items.length;b>a;a++){var c=this.items[a];c.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},m.prototype._noTransition=function(a){var b=this.options.transitionDuration;this.options.transitionDuration=0;var c=a.call(this);return this.options.transitionDuration=b,c},m.prototype.getFilteredItemElements=function(){for(var a=[],b=0,c=this.filteredItems.length;c>b;b++)a.push(this.filteredItems[b].element);return a},m});
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e&&this.preloadAutoWidthImages(b)}this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),(null===this.settings||this._breakpoint!==d)&&(this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}}))},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.$element.is(":visible")?(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized"))):!1:!1},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),c=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return b>h-e&&h+e>b?d=a:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),-1===d},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(b,c){var e=this._items.length,f=c?0:this._clones.length;return!a.isNumeric(b)||1>e?b=d:(0>b||b>=e+f)&&(b=((b-f/2)%e+e)%e+f/2),b},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c=this.settings,d=this._coordinates.length,e=Math.abs(this._coordinates[d-1])-this._width,f=-1;if(c.loop)d=this._clones.length/2+this._items.length-1;else if(c.autoWidth||c.merge)for(;d-f>1;)Math.abs(this._coordinates[b=d+f>>1])<e?f=b:d=b;else d=c.center?this._items.length-1:this._items.length-c.items;return a&&(d-=this._clones.length/2),Math.max(d,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c=null;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[b-1]||0))/2*(this.settings.rtl?-1:1)):c=this._coordinates[b-1]||0,c)},e.prototype.duration=function(a,b,c){return Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(0>e),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&i>=d-e&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.leave("animating"),void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)},this)),this.reset(a.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,d=c.center&&Math.ceil(c.items/2)||c.items,e=c.center&&-1*d||0,f=(b.property&&b.property.value||this._core.current())+e,g=this._core.clones().length,h=a.proxy(function(a,b){this.load(b)},this);e++<d;)this.load(g/2+this._core.relative(f)),g&&a.each(this._core.clones(this._core.relative(f)),h),f++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c);heights=[],maxheight=0,a.each(d,function(b,c){heights.push(a(c).height())}),maxheight=Math.max.apply(null,heights),this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=a.attr("data-vimeo-id")?"vimeo":"youtube",d=a.attr("data-vimeo-id")||a.attr("data-youtube-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else{if(!(d[3].indexOf("vimeo")>-1))throw new Error("Video URL not supported.");c="vimeo"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}))},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="http://www.youtube.com/embed/'+f.id+"?autoplay=1&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type&&(c='<iframe src="http://player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name&&(this._core.settings.autoplay?this.play():this.stop())},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){
this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(d,e){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._interval=b.setInterval(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout))},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearInterval(this._interval),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;e>a;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):0>b&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;d?a.proxy(this._overrides.to,this._core)(b,c):(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c))},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){return g[b]!==d?(e=c?b:!0,!1):void 0}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
/*
 *  Vide - v0.5.0
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):b("object"==typeof exports?require("jquery"):a.jQuery)}(this,function(a){"use strict";function b(a){var b,c,d,e,f,g,h,i={};for(f=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(","),h=0,g=f.length;g>h&&(c=f[h],-1===c.search(/^(http|https|ftp):\/\//)&&-1!==c.search(":"));h++)b=c.indexOf(":"),d=c.substring(0,b),e=c.substring(b+1),e||(e=void 0),"string"==typeof e&&(e="true"===e||("false"===e?!1:e)),"string"==typeof e&&(e=isNaN(e)?e:+e),i[d]=e;return null==d&&null==e?a:i}function c(a){a=""+a;var b,c,d,e=a.split(/\s+/),f="50%",g="50%";for(d=0,b=e.length;b>d;d++)c=e[d],"left"===c?f="0%":"right"===c?f="100%":"top"===c?g="0%":"bottom"===c?g="100%":"center"===c?0===d?f="50%":g="50%":0===d?f=c:g=c;return{x:f,y:g}}function d(b,c){var d=function(){c(this.src)};a('<img src="'+b+'.gif">').load(d),a('<img src="'+b+'.jpg">').load(d),a('<img src="'+b+'.jpeg">').load(d),a('<img src="'+b+'.png">').load(d)}function e(c,d,e){if(this.$element=a(c),"string"==typeof d&&(d=b(d)),e?"string"==typeof e&&(e=b(e)):e={},"string"==typeof d)d=d.replace(/\.\w*$/,"");else if("object"==typeof d)for(var f in d)d.hasOwnProperty(f)&&(d[f]=d[f].replace(/\.\w*$/,""));this.settings=a.extend({},g,e),this.path=d;try{this.init()}catch(i){if(i.message!==h)throw i}}var f="vide",g={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"detect",resizing:!0,bgColor:"transparent",className:""},h="Not implemented";e.prototype.init=function(){var b,e,g=this,i=g.path,j=i,k="",l=g.$element,m=g.settings,n=c(m.position),o=m.posterType;e=g.$wrapper=a("<div>").addClass(m.className).css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-color":m.bgColor,"background-repeat":"no-repeat","background-position":n.x+" "+n.y}),"object"==typeof i&&(i.poster?j=i.poster:i.mp4?j=i.mp4:i.webm?j=i.webm:i.ogv&&(j=i.ogv)),"detect"===o?d(j,function(a){e.css("background-image","url("+a+")")}):"none"!==o&&e.css("background-image","url("+j+"."+o+")"),"static"===l.css("position")&&l.css("position","relative"),l.prepend(e),"object"==typeof i?(i.mp4&&(k+='<source src="'+i.mp4+'.mp4" type="video/mp4">'),i.webm&&(k+='<source src="'+i.webm+'.webm" type="video/webm">'),i.ogv&&(k+='<source src="'+i.ogv+'.ogv" type="video/ogg">'),b=g.$video=a("<video>"+k+"</video>")):b=g.$video=a('<video><source src="'+i+'.mp4" type="video/mp4"><source src="'+i+'.webm" type="video/webm"><source src="'+i+'.ogv" type="video/ogg"></video>');try{b.prop({autoplay:m.autoplay,loop:m.loop,volume:m.volume,muted:m.muted,defaultMuted:m.muted,playbackRate:m.playbackRate,defaultPlaybackRate:m.playbackRate})}catch(p){throw new Error(h)}b.css({margin:"auto",position:"absolute","z-index":-1,top:n.y,left:n.x,"-webkit-transform":"translate(-"+n.x+", -"+n.y+")","-ms-transform":"translate(-"+n.x+", -"+n.y+")","-moz-transform":"translate(-"+n.x+", -"+n.y+")",transform:"translate(-"+n.x+", -"+n.y+")",visibility:"hidden",opacity:0}).one("canplaythrough."+f,function(){g.resize()}).one("playing."+f,function(){b.css({visibility:"visible",opacity:1}),e.css("background-image","none")}),l.on("resize."+f,function(){m.resizing&&g.resize()}),e.append(b)},e.prototype.getVideoObject=function(){return this.$video[0]},e.prototype.resize=function(){if(this.$video){var a=this.$wrapper,b=this.$video,c=b[0],d=c.videoHeight,e=c.videoWidth,f=a.height(),g=a.width();g/e>f/d?b.css({width:g+2,height:"auto"}):b.css({width:"auto",height:f+2})}},e.prototype.destroy=function(){delete a[f].lookup[this.index],this.$video&&this.$video.off(f),this.$element.off(f).removeData(f),this.$wrapper.remove()},a[f]={lookup:[]},a.fn[f]=function(b,c){var d;return this.each(function(){d=a.data(this,f),d&&d.destroy(),d=new e(this,b,c),d.index=a[f].lookup.push(d)-1,a.data(this,f,d)}),this},a(document).ready(function(){var b=a(window);b.on("resize."+f,function(){for(var b,c=a[f].lookup.length,d=0;c>d;d++)b=a[f].lookup[d],b&&b.settings.resizing&&b.resize()}),b.on("unload."+f,function(){return!1}),a(document).find("[data-"+f+"-bg]").each(function(b,c){var d=a(c),e=d.data(f+"-options"),g=d.data(f+"-bg");d[f](g,e)})})});
/*
Name: 			Theme Base
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	4.8.0
*/

// Theme
window.theme = {};

// Animate
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__animate';

	var PluginAnimate = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginAnimate.defaults = {
		accX: 0,
		accY: -150,
		delay: 1
	};

	PluginAnimate.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginAnimate.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			var self = this,
				$el = this.options.wrapper,
				delay = 0;

			$el.addClass('appear-animation');

			if (!$('html').hasClass('no-csstransitions') && $(window).width() > 767) {

				$el.appear(function() {

					delay = ($el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay);

					if (delay > 1) {
						$el.css('animation-delay', delay + 'ms');
					}

					$el.addClass($el.attr('data-appear-animation'));

					setTimeout(function() {
						$el.addClass('appear-animation-visible');
					}, delay);

				}, {
					accX: self.options.accX,
					accY: self.options.accY
				});

			} else {

				$el.addClass('appear-animation-visible');

			}

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginAnimate: PluginAnimate
	});

	// jquery plugin
	$.fn.themePluginAnimate = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginAnimate($this, opts);
			}

		});
	};

}).apply(this, [window.theme, jQuery]);

// Carousel
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__carousel';

	var PluginCarousel = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginCarousel.defaults = {
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			479: {
				items: 1
			},
			768: {
				items: 2
			},
			979: {
				items: 3
			},
			1199: {
				items: 4
			}
		},
		navText: []
	};

	PluginCarousel.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginCarousel.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.owlCarousel))) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper;

			// Add Theme Class
			$el.addClass('owl-theme');

			// Force RTL according to HTML dir attribute
			if ($('html').attr('dir') == 'rtl') {
				this.options = $.extend(true, {}, this.options, {
					rtl: true
				});
			}

			if (this.options.items == 1) {
				this.options.responsive = {}
			}

			if (this.options.items > 4) {
				this.options = $.extend(true, {}, this.options, {
					responsive: {
						1199: {
							items: this.options.items
						}
					}
				});
			}

			// Auto Height Fixes
			if (this.options.autoHeight) {
				$(window).afterResize(function() {
					$el.find('.owl-stage-outer').height( $el.find('.owl-item.active').height() );
				});

				$(window).load(function() {
					$el.find('.owl-stage-outer').height( $el.find('.owl-item.active').height() );
				});
			}

			// Initialize OwlCarousel
			$el.owlCarousel(this.options).addClass("owl-carousel-init");

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginCarousel: PluginCarousel
	});

	// jquery plugin
	$.fn.themePluginCarousel = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginCarousel($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Chart Circular
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__chartCircular';

	var PluginChartCircular = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginChartCircular.defaults = {
		accX: 0,
		accY: -150,
		delay: 1,
		barColor: '#0088CC',
		trackColor: '#f2f2f2',
		scaleColor: false,
		scaleLength: 5,
		lineCap: 'round',
		lineWidth: 13,
		size: 175,
		rotate: 0,
		animate: ({
			duration: 2500,
			enabled: true
		})
	};

	PluginChartCircular.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginChartCircular.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.appear)) || !($.isFunction($.fn.easyPieChart))) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper,
				value = ($el.attr('data-percent') ? $el.attr('data-percent') : 0),
				percentEl = $el.find('.percent');

			$.extend(true, self.options, {
				onStep: function(from, to, currentValue) {
					percentEl.html(parseInt(currentValue));
				}
			});

			$el.attr('data-percent', 0);

			$el.appear(function() {

				$el.easyPieChart(self.options);

				setTimeout(function() {

					$el.data('easyPieChart').update(value);
					$el.attr('data-percent', value);

				}, self.options.delay);

			}, {
				accX: self.options.accX,
				accY: self.options.accY
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginChartCircular: PluginChartCircular
	});

	// jquery plugin
	$.fn.themePluginChartCircular = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginChartCircular($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Counter
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__counter';

	var PluginCounter = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginCounter.defaults = {
		accX: 0,
		accY: 0,
		speed: 3000,
		refreshInterval: 100,
		decimals: 0,
		onUpdate: null,
		onComplete: null
	};

	PluginCounter.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginCounter.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.countTo))) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper;

			$.extend(self.options, {
				onComplete: function() {
					if ($el.data('append')) {
						$el.html($el.html() + $el.data('append'));
					}

					if ($el.data('prepend')) {
						$el.html($el.data('prepend') + $el.html());
					}
				}
			});

			$el.appear(function() {

				$el.countTo(self.options);

			}, {
				accX: self.options.accX,
				accY: self.options.accY
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginCounter: PluginCounter
	});

	// jquery plugin
	$.fn.themePluginCounter = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginCounter($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Lazy Load
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__lazyload';

	var PluginLazyLoad = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginLazyLoad.defaults = {
		effect : 'fadeIn'
	};

	PluginLazyLoad.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginLazyLoad.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.lazyload))) {
				return this;
			}

			var self = this;

			self.options.wrapper.lazyload(this.options);

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginLazyLoad: PluginLazyLoad
	});

	// jquery plugin
	$.fn.themePluginLazyLoad = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginLazyLoad($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Lightbox
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__lightbox';

	var PluginLightbox = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginLightbox.defaults = {
		tClose: 'Close (Esc)', // Alt text on close button
		tLoading: 'Loading...', // Text that is displayed during loading. Can contain %curr% and %total% keys
		gallery: {
			tPrev: 'Previous (Left arrow key)', // Alt text on left arrow
			tNext: 'Next (Right arrow key)', // Alt text on right arrow
			tCounter: '%curr% of %total%' // Markup for "1 of 7" counter
		},
		image: {
			tError: '<a href="%url%">The image</a> could not be loaded.' // Error message when image could not be loaded
		},
		ajax: {
			tError: '<a href="%url%">The content</a> could not be loaded.' // Error message when ajax request failed
		},
		callbacks: {
			open: function() {
				$('body').addClass('lightbox-opened');
			},
			close: function() {
				$('body').removeClass('lightbox-opened');
			}
		}
	};

	PluginLightbox.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginLightbox.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.magnificPopup))) {
				return this;
			}

			this.options.wrapper.magnificPopup(this.options);

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginLightbox: PluginLightbox
	});

	// jquery plugin
	$.fn.themePluginLightbox = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginLightbox($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Loading Overlay
(function(theme, $) {

	'use strict';

	theme = theme || {};

	var loadingOverlayTemplate = [
		'<div class="loading-overlay">',
			'<div class="loader"></div>',
		'</div>'
	].join('');

	var LoadingOverlay = function( $wrapper, options ) {
		return this.initialize( $wrapper, options );
	};

	LoadingOverlay.prototype = {

		options: {
			css: {}
		},

		initialize: function( $wrapper, options ) {
			this.$wrapper = $wrapper;

			this
				.setVars()
				.setOptions( options )
				.build()
				.events();

			this.$wrapper.data( 'loadingOverlay', this );
		},

		setVars: function() {
			this.$overlay = this.$wrapper.find('.loading-overlay');

			return this;
		},

		setOptions: function( options ) {
			if ( !this.$overlay.get(0) ) {
				this.matchProperties();
			}
			this.options     = $.extend( true, {}, this.options, options );
			this.loaderClass = this.getLoaderClass( this.options.css.backgroundColor );

			return this;
		},

		build: function() {
			if ( !this.$overlay.closest(document.documentElement).get(0) ) {
				if ( !this.$cachedOverlay ) {
					this.$overlay = $( loadingOverlayTemplate ).clone();

					if ( this.options.css ) {
						this.$overlay.css( this.options.css );
						this.$overlay.find( '.loader' ).addClass( this.loaderClass );
					}
				} else {
					this.$overlay = this.$cachedOverlay.clone();
				}

				this.$wrapper.append( this.$overlay );
			}

			if ( !this.$cachedOverlay ) {
				this.$cachedOverlay = this.$overlay.clone();
			}

			return this;
		},

		events: function() {
			var _self = this;

			if ( this.options.startShowing ) {
				_self.show();
			}

			if ( this.$wrapper.is('body') || this.options.hideOnWindowLoad ) {
				$( window ).on( 'load error', function() {
					_self.hide();
				});
			}

			if ( this.options.listenOn ) {
				$( this.options.listenOn )
					.on( 'loading-overlay:show beforeSend.ic', function( e ) {
						e.stopPropagation();
						_self.show();
					})
					.on( 'loading-overlay:hide complete.ic', function( e ) {
						e.stopPropagation();
						_self.hide();
					});
			}

			this.$wrapper
				.on( 'loading-overlay:show beforeSend.ic', function( e ) {
					e.stopPropagation();
					_self.show();
				})
				.on( 'loading-overlay:hide complete.ic', function( e ) {
					e.stopPropagation();
					_self.hide();
				});

			return this;
		},

		show: function() {
			this.build();

			this.position = this.$wrapper.css( 'position' ).toLowerCase();
			if ( this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed' ) {
				this.$wrapper.css({
					position: 'relative'
				});
			}
			this.$wrapper.addClass( 'loading-overlay-showing' );
		},

		hide: function() {
			var _self = this;

			this.$wrapper.removeClass( 'loading-overlay-showing' );
			setTimeout(function() {
				if ( this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed' ) {
					_self.$wrapper.css({ position: '' });
				}
			}, 500);
		},

		matchProperties: function() {
			var i,
				l,
				properties;

			properties = [
				'backgroundColor',
				'borderRadius'
			];

			l = properties.length;

			for( i = 0; i < l; i++ ) {
				var obj = {};
				obj[ properties[ i ] ] = this.$wrapper.css( properties[ i ] );

				$.extend( this.options.css, obj );
			}
		},

		getLoaderClass: function( backgroundColor ) {
			if ( !backgroundColor || backgroundColor === 'transparent' || backgroundColor === 'inherit' ) {
				return 'black';
			}

			var hexColor,
				r,
				g,
				b,
				yiq;

			var colorToHex = function( color ){
				var hex,
					rgb;

				if( color.indexOf('#') >- 1 ){
					hex = color.replace('#', '');
				} else {
					rgb = color.match(/\d+/g);
					hex = ('0' + parseInt(rgb[0], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2);
				}

				if ( hex.length === 3 ) {
					hex = hex + hex;
				}

				return hex;
			};

			hexColor = colorToHex( backgroundColor );

			r = parseInt( hexColor.substr( 0, 2), 16 );
			g = parseInt( hexColor.substr( 2, 2), 16 );
			b = parseInt( hexColor.substr( 4, 2), 16 );
			yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

			return ( yiq >= 128 ) ? 'black' : 'white';
		}

	};

	// expose to scope
	$.extend(theme, {
		LoadingOverlay: LoadingOverlay
	});

	// expose as a jquery plugin
	$.fn.loadingOverlay = function( opts ) {
		return this.each(function() {
			var $this = $( this );

			var loadingOverlay = $this.data( 'loadingOverlay' );
			if ( loadingOverlay ) {
				return loadingOverlay;
			} else {
				var options = opts || $this.data( 'loading-overlay-options' ) || {};
				return new LoadingOverlay( $this, options );
			}
		});
	}

	// auto init
	$(function() {
		$('[data-loading-overlay]').loadingOverlay();
	});

}).apply(this, [window.theme, jQuery]);

// Masonry
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__masonry';

	var PluginMasonry = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginMasonry.defaults = {
		itemSelector: 'li'
	};

	PluginMasonry.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginMasonry.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.isotope))) {
				return this;
			}

			this.options.wrapper.isotope(this.options);

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginMasonry: PluginMasonry
	});

	// jquery plugin
	$.fn.themePluginMasonry = function(opts) {
		return this.map(function() {
			var $this = $(this);

			$this.waitForImages(function() {
				if ($this.data(instanceName)) {
					return $this.data(instanceName);
				} else {
					return new PluginMasonry($this, opts);
				}
			});

		});
	}

}).apply(this, [window.theme, jQuery]);

// Match Height
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__matchHeight';

	var PluginMatchHeight = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginMatchHeight.defaults = {
		byRow: true,
		property: 'height',
		target: null,
		remove: false
	};

	PluginMatchHeight.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginMatchHeight.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.matchHeight))) {
				return this;
			}

			var self = this;

			self.options.wrapper.matchHeight(self.options);

			return this;
		}

	};

	// expose to scope
	$.extend(theme, {
		PluginMatchHeight: PluginMatchHeight
	});

	// jquery plugin
	$.fn.themePluginMatchHeight = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginMatchHeight($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Parallax
(function(theme, $) {

	theme = theme || {};

	$.extend(theme, {

		PluginParallax: {

			defaults: {
				itemsSelector: '.parallax',
				responsive: true,
				horizontalScrolling: false
			},

			initialize: function(opts) {

				this
					.setOptions(opts)
					.build();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts);

				return this;
			},

			build: function() {
				if (!$(this.options.itemsSelector).get(0) || !($.isFunction($.fn.stellar)) || typeof(Modernizr.touch) == 'undefined') {
					return this;
				}

				var self = this;

				if (!$.browser.mobile) {
					$.stellar(self.options);
				} else {
					$(self.options.itemsSelector).addClass('parallax-disabled');
				}

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Progress Bar
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__progressBar';

	var PluginProgressBar = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginProgressBar.defaults = {
		accX: 0,
		accY: -50,
		delay: 1
	};

	PluginProgressBar.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginProgressBar.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.appear))) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper,
				delay = 1;

			$el.appear(function() {

				delay = ($el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay);

				$el.addClass($el.attr('data-appear-animation'));

				setTimeout(function() {

					$el.animate({
						width: $el.attr('data-appear-progress-animation')
					}, 1500, 'easeOutQuad', function() {
						$el.find('.progress-bar-tooltip').animate({
							opacity: 1
						}, 500, 'easeOutQuad');
					});

				}, delay);

			}, {
				accX: self.options.accX,
				accY: self.options.accY
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginProgressBar: PluginProgressBar
	});

	// jquery plugin
	$.fn.themePluginProgressBar = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginProgressBar($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Revolution Slider
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__revolution';

	var PluginRevolutionSlider = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginRevolutionSlider.defaults = {
		sliderType: 'standard',
		sliderLayout: 'fullwidth',
		delay: 9000,
		gridwidth: 1170,
		gridheight: 500,
		spinner: 'spinner3',
		parallax: {
			type: 'off',
			bgparallax: 'off'
		},
		navigation: {
			keyboardNavigation: 'off',
			keyboard_direction: 'horizontal',
			mouseScrollNavigation: 'off',
			onHoverStop: 'off',
			touch: {
				touchenabled: 'on',
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: 'horizontal',
				drag_block_vertical: false
			},
			arrows: {
				enable: true,
				hide_onmobile: false,
				hide_under: 0,
				hide_onleave: true,
				hide_delay: 200,
				hide_delay_mobile: 1200,
				left: {
					h_align: 'left',
					v_align: 'center',
					h_offset: 30,
					v_offset: 0
				},
				right: {
					h_align: 'right',
					v_align: 'center',
					h_offset: 30,
					v_offset: 0
				}
			}
		}
	};

	PluginRevolutionSlider.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build()
				.events();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginRevolutionSlider.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.revolution))) {
				return this;
			}

			// Single Slider Class
			if(this.options.wrapper.find('> ul > li').length == 1) {
				this.options.wrapper.addClass('slider-single-slide');
			}

			this.options.wrapper.revolution(this.options);

			return this;
		},

		events: function() {

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginRevolutionSlider: PluginRevolutionSlider
	});

	// jquery plugin
	$.fn.themePluginRevolutionSlider = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginRevolutionSlider($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Scroll to Top
(function(theme, $) {

	theme = theme || {};

	$.extend(theme, {

		PluginScrollToTop: {

			defaults: {
				wrapper: $('body'),
				offset: 150,
				buttonClass: 'scroll-to-top',
				iconClass: 'fa fa-chevron-up',
				delay: 1000,
				visibleMobile: false,
				label: false,
				easing: 'easeOutBack'
			},

			initialize: function(opts) {
				initialized = true;

				this
					.setOptions(opts)
					.build()
					.events();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts);

				return this;
			},

			build: function() {
				var self = this,
					$el;

				// Base HTML Markup
				$el = $('<a />')
					.addClass(self.options.buttonClass)
					.attr({
						'href': '#',
					})
					.append(
						$('<i />')
						.addClass(self.options.iconClass)
				);

				// Visible Mobile
				if (!self.options.visibleMobile) {
					$el.addClass('hidden-mobile');
				}

				// Label
				if (self.options.label) {
					$el.append(
						$('<span />').html(self.options.label)
					);
				}

				this.options.wrapper.append($el);

				this.$el = $el;

				return this;
			},

			events: function() {
				var self = this,
					_isScrolling = false;

				// Click Element Action
				self.$el.on('click', function(e) {
					e.preventDefault();
					$('body, html').animate({
						scrollTop: 0
					}, self.options.delay, self.options.easing);
					return false;
				});

				// Show/Hide Button on Window Scroll event.
				$(window).scroll(function() {

					if (!_isScrolling) {

						_isScrolling = true;

						if ($(window).scrollTop() > self.options.offset) {

							self.$el.stop(true, true).addClass('visible');
							_isScrolling = false;

						} else {

							self.$el.stop(true, true).removeClass('visible');
							_isScrolling = false;

						}

					}

				});

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Sort
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__sort';

	var PluginSort = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginSort.defaults = {
		useHash: true,
		itemSelector: '.isotope-item',
		layoutMode: 'masonry',
		filter: '*',
		isOriginLeft: ($('html').attr('dir') == 'rtl' ? false : true)
	};

	PluginSort.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginSort.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.isotope))) {
				return this;
			}

			var self = this,
				$source = this.options.wrapper,
				$destination = $('.sort-destination[data-sort-id="' + $source.attr('data-sort-id') + '"]');

			if ($destination.get(0)) {

				self.$source = $source;
				self.$destination = $destination;

				self.setParagraphHeight($destination);

				$(window).load(function() {

					$destination.attr('data-filter', '*').isotope(self.options).isotope('layout').trigger('filtered');

					self.$destination.isotope('on', 'layoutComplete', function(event, laidOutItems) {
						if (self.options.useHash) {
							if (window.location.hash != '' || self.options.filter.replace('.', '') != '*') {
								window.location.hash = self.options.filter.replace('.', '');
							}
						}
					});

					self.events();

					$source.trigger('filtered');

				});

				$(window).on('resize', function() {
					setTimeout(function() {
						self.$destination.isotope('layout');
					}, 300);
				});

			}

			return this;
		},

		events: function() {
			var self = this,
				filter = null;

			self.$source.find('a').click(function(e) {
				e.preventDefault();

				filter = $(this).parent().data('option-value');

				self.setFilter(filter);

				if (e.originalEvent) {
					self.$source.trigger('filtered');
				}

				return this;
			});

			if (self.options.useHash) {
				self.hashEvents();
			}

			return this;
		},

		setFilter: function(filter) {
			var self = this,
				page = false,
				currentFilter = filter;

			self.$source.find('li.active').removeClass('active');
			self.$source.find('li[data-option-value="' + filter + '"]').addClass('active');

			self.options.filter = currentFilter;

			if (self.$destination.attr('data-current-page')) {
				currentFilter = currentFilter + '[data-page-rel=' + self.$destination.attr('data-current-page') + ']';
			}

			self.$destination.attr('data-filter', filter).isotope({
				filter: currentFilter
			}).on('arrangeComplete', function( event, filteredItems ) {
				$(window).trigger('scroll');
			}).trigger('filtered');

			return this;
		},

		hashEvents: function() {
			var self = this,
				hash = null,
				hashFilter = null,
				initHashFilter = '.' + location.hash.replace('#', '');

			if (initHashFilter != '.' && initHashFilter != '.*') {
				self.setFilter(initHashFilter);
			}

			$(window).bind('hashchange', function(e) {

				hashFilter = '.' + location.hash.replace('#', '');
				hash = (hashFilter == '.' || hashFilter == '.*' ? '*' : hashFilter);

				self.setFilter(hash);

			});

			return this;
		},

		setParagraphHeight: function() {
			var self = this,
				minParagraphHeight = 0,
				paragraphs = $('span.thumb-info-caption p', self.$destination);

			paragraphs.each(function() {
				if ($(this).height() > minParagraphHeight) {
					minParagraphHeight = ($(this).height() + 10);
				}
			});

			paragraphs.height(minParagraphHeight);

			return this;
		}

	};

	// expose to scope
	$.extend(theme, {
		PluginSort: PluginSort
	});

	// jquery plugin
	$.fn.themePluginSort = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginSort($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Sticky
(function(theme, $) {
	
	theme = theme || {};
	
	var instanceName = '__sticky';

	var PluginSticky = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginSticky.defaults = {
		minWidth: 991,
		activeClass: 'sticky-active'
	};

	PluginSticky.prototype = {
		initialize: function($el, opts) {
			if ( $el.data( instanceName ) ) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginSticky.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (!($.isFunction($.fn.pin))) {
				return this;
			}

			this.options.wrapper.pin(this.options);

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginSticky: PluginSticky
	});

	// jquery plugin
	$.fn.themePluginSticky = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginSticky($this, opts);
			}
			
		});
	}

}).apply(this, [ window.theme, jQuery ]);

// Toggle
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__toggle';

	var PluginToggle = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginToggle.defaults = {
		duration: 350,
		isAccordion: false
	};

	PluginToggle.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginToggle.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			var self = this,
				$wrapper = this.options.wrapper,
				$items = $wrapper.find('.toggle'),
				$el = null;

			$items.each(function() {
				$el = $(this);

				if ($el.hasClass('active')) {
					$el.find('> p').addClass('preview-active');
					$el.find('> .toggle-content').slideDown(self.options.duration);
				}

				self.events($el);
			});

			if (self.options.isAccordion) {
				self.options.duration = self.options.duration / 2;
			}

			return this;
		},

		events: function($el) {
			var self = this,
				previewParCurrentHeight = 0,
				previewParAnimateHeight = 0,
				toggleContent = null;

			$el.find('> label').click(function(e) {

				var $this = $(this),
					parentSection = $this.parent(),
					parentWrapper = $this.parents('.toggle'),
					previewPar = null,
					closeElement = null;

				if (self.options.isAccordion && typeof(e.originalEvent) != 'undefined') {
					closeElement = parentWrapper.find('.toggle.active > label');

					if (closeElement[0] == $this[0]) {
						return;
					}
				}

				parentSection.toggleClass('active');

				// Preview Paragraph
				if (parentSection.find('> p').get(0)) {

					previewPar = parentSection.find('> p');
					previewParCurrentHeight = previewPar.css('height');
					previewPar.css('height', 'auto');
					previewParAnimateHeight = previewPar.css('height');
					previewPar.css('height', previewParCurrentHeight);

				}

				// Content
				toggleContent = parentSection.find('> .toggle-content');

				if (parentSection.hasClass('active')) {

					$(previewPar).animate({
						height: previewParAnimateHeight
					}, self.options.duration, function() {
						$(this).addClass('preview-active');
					});

					toggleContent.slideDown(self.options.duration, function() {
						if (closeElement) {
							closeElement.trigger('click');
						}
					});

				} else {

					$(previewPar).animate({
						height: 0
					}, self.options.duration, function() {
						$(this).removeClass('preview-active');
					});

					toggleContent.slideUp(self.options.duration);

				}

			});
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginToggle: PluginToggle
	});

	// jquery plugin
	$.fn.themePluginToggle = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginToggle($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Tweets
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__tweets';

	var PluginTweets = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginTweets.defaults = {
		username: null,
		count: 2,
		URL: 'php/twitter-feed.php'
	};

	PluginTweets.prototype = {
		initialize: function($el, opts) {
			if ($el.data(instanceName)) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginTweets.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			if (this.options.username == null || this.options.username == '') {
				return this;
			}

			var self = this,
				$wrapper = this.options.wrapper;

			$.ajax({
				type: 'GET',
				data: {
					twitter_screen_name: self.options.username,
					tweets_to_display: self.options.count
				},
				url: self.options.URL,
			}).done(function(html) {
				$wrapper.html(html).find('a').attr('target','_blank');
			});

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginTweets: PluginTweets
	});

	// jquery plugin
	$.fn.themePluginTweets = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginTweets($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Validation
(function(theme, $) {

	theme = theme || {};

	$.extend(theme, {

		PluginValidation: {

			defaults: {
				validator: {
					highlight: function(element) {
						$(element)
							.parent()
							.removeClass('has-success')
							.addClass('has-error');
					},
					success: function(element) {
						$(element)
							.parent()
							.removeClass('has-error')
							.addClass('has-success')
							.find('label.error')
							.remove();
					},
					errorPlacement: function(error, element) {
						if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
							error.appendTo(element.parent().parent());
						} else {
							error.insertAfter(element);
						}
					}
				},
				validateCaptchaURL: 'php/contact-form-verify-captcha.php',
				refreshCaptchaURL: 'php/contact-form-refresh-captcha.php'
			},

			initialize: function(opts) {
				initialized = true;

				this
					.setOptions(opts)
					.build();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts);

				return this;
			},

			build: function() {
				var self = this;

				if (!($.isFunction($.validator))) {
					return this;
				}

				self.addMethods();
				self.setMessageGroups();

				$.validator.setDefaults(self.options.validator);

				return this;
			},

			addMethods: function() {
				var self = this;

				$.validator.addMethod('captcha', function(value, element, params) {
					var captchaValid = false;

					$.ajax({
						url: self.options.validateCaptchaURL,
						type: 'POST',
						async: false,
						dataType: 'json',
						data: {
							captcha: $.trim(value)
						},
						success: function(data) {
							if (data.response == 'success') {
								captchaValid = true;
							}
						}
					});

					if (captchaValid) {
						return true;
					}

				}, '');

				// Refresh Captcha
				$('#refreshCaptcha').on('click', function(e) {
					e.preventDefault();
					$.get(self.options.refreshCaptchaURL, function(url) {
						$('#captcha-image').attr('src', url);
					});					
				});

			},

			setMessageGroups: function() {

				$('.checkbox-group[data-msg-required], .radio-group[data-msg-required]').each(function() {
					var message = $(this).data('msg-required');
					$(this).find('input').attr('data-msg-required', message);
				});

			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Video Background
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__videobackground';

	var PluginVideoBackground = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginVideoBackground.defaults = {
		overlay: true,
		volume: 1,
		playbackRate: 1,
		muted: true,
		loop: true,
		autoplay: true,
		position: '50% 50%',
		posterType: 'detect'
	};

	PluginVideoBackground.prototype = {
		initialize: function($el, opts) {
			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginVideoBackground.defaults, opts, {
				path: this.$el.data('video-path'),
				wrapper: this.$el
			});

			return this;
		},

		build: function() {

			if (!($.isFunction($.fn.vide)) || (!this.options.path)) {
				return this;
			}

			if (this.options.overlay) {
				this.options.wrapper.prepend(
					$('<div />').addClass('video-overlay')
				);
			}

			this.options.wrapper.vide(this.options.path, this.options);

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginVideoBackground: PluginVideoBackground
	});

	// jquery plugin
	$.fn.themePluginVideoBackground = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginVideoBackground($this, opts);
			}

		});
	}

}).apply(this, [window.theme, jQuery]);

// Word Rotate
(function(theme, $) {
	
	theme = theme || {};
	
	var instanceName = '__wordRotate';

	var PluginWordRotate = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginWordRotate.defaults = {
		delay: 2000,
		animDelay: 300
	};

	PluginWordRotate.prototype = {
		initialize: function($el, opts) {
			if ( $el.data( instanceName ) ) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend(true, {}, PluginWordRotate.defaults, opts, {
				wrapper: this.$el
			});

			return this;
		},

		build: function() {
			var self = this,
				$el = this.options.wrapper,
				itemsWrapper = $el.find(".word-rotate-items"),
				items = itemsWrapper.find("> span"),
				firstItem = items.eq(0),
				firstItemClone = firstItem.clone(),
				currentItem = 1,
				currentTop = 0,
				itemWidth = 0;

			itemsWrapper
				.width(firstItem.width() + "px")
				.append(firstItemClone);

			$el				
				.addClass("active");

			setInterval(function() {

				currentTop = (currentItem * $el.height());
				currentItem++;

				if(currentItem <= items.length) {
					itemWidth = items.eq(currentItem-1).width();
				} else {
					itemWidth = items.eq(0).width();
				}

				itemsWrapper.animate({
					top: -(currentTop) + "px",
					width: itemWidth + "px"
				}, self.options.animDelay, "easeOutQuad", function() {

					if(currentItem > items.length) {

						itemsWrapper.css("top", 0);
						currentItem = 1;

					}

				});

			}, self.options.delay);

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginWordRotate: PluginWordRotate
	});

	// jquery plugin
	$.fn.themePluginWordRotate = function(opts) {
		return this.map(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginWordRotate($this, opts);
			}
			
		});
	}

}).apply(this, [ window.theme, jQuery ]);

// Account
(function(theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		Account: {

			defaults: {
				wrapper: $('#headerAccount')
			},

			initialize: function($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.events();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts, this.$wrapper.data('plugin-options'));

				return this;
			},

			events: function() {
				var self = this;

				self.$wrapper.find('input').on('focus', function() {
					self.$wrapper.addClass('open');

					$(document).mouseup(function(e) {
						if (!self.$wrapper.is(e.target) && self.$wrapper.has(e.target).length === 0) {
							self.$wrapper.removeClass('open');
						}
					});
				});

				$('#headerSignUp').on('click', function(e) {
					e.preventDefault();
					self.$wrapper.addClass('signup').removeClass('signin').removeClass('recover');
					self.$wrapper.find('.signup-form input:first').focus();
				});

				$('#headerSignIn').on('click', function(e) {
					e.preventDefault();
					self.$wrapper.addClass('signin').removeClass('signup').removeClass('recover');
					self.$wrapper.find('.signin-form input:first').focus();
				});

				$('#headerRecover').on('click', function(e) {
					e.preventDefault();
					self.$wrapper.addClass('recover').removeClass('signup').removeClass('signin');
					self.$wrapper.find('.recover-form input:first').focus();
				});

				$('#headerRecoverCancel').on('click', function(e) {
					e.preventDefault();
					self.$wrapper.addClass('signin').removeClass('signup').removeClass('recover');
					self.$wrapper.find('.signin-form input:first').focus();
				});
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Nav
(function(theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		Nav: {

			defaults: {
				wrapper: $('#mainNav'),
				scrollDelay: 600,
				scrollAnimation: 'easeOutQuad'
			},

			initialize: function($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.build()
					.events();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts, this.$wrapper.data('plugin-options'));

				return this;
			},

			build: function() {
				var self = this,
					$html = $('html'),
					$header = $('#header'),
					thumbInfoPreview;

				// Add Arrows
				$header.find('.dropdown-toggle, .dropdown-submenu > a').append($('<i />').addClass('fa fa-caret-down'));

				// Preview Thumbs
				self.$wrapper.find('a[data-thumb-preview]').each(function() {
					thumbInfoPreview = $('<span />').addClass('thumb-info thumb-info-preview')
											.append($('<span />').addClass('thumb-info-wrapper')
												.append($('<span />').addClass('thumb-info-image').css('background-image', 'url(' + $(this).data('thumb-preview') + ')')
										   )
									   );

					$(this).append(thumbInfoPreview);
				});

				// Side Header Right (Reverse Dropdown)
				if($html.hasClass('side-header-right')) {
					$header.find('.dropdown').addClass('dropdown-reverse');
				}

				return this;
			},

			events: function() {
				var self = this,
					$header = $('#header'),
					$window = $(window);

				$header.find('a[href="#"]').on('click', function(e) {
					e.preventDefault();
				});

				// Mobile Arrows
				$header.find('.dropdown-toggle[href="#"], .dropdown-submenu a[href="#"], .dropdown-toggle[href!="#"] .fa-caret-down, .dropdown-submenu a[href!="#"] .fa-caret-down').on('click', function(e) {
					e.preventDefault();
					if ($window.width() < 992) {
						$(this).closest('li').toggleClass('opened');
					}
				});

				// Touch Devices with normal resolutions
				if('ontouchstart' in document.documentElement) {
					$header.find('.dropdown-toggle:not([href="#"]), .dropdown-submenu > a:not([href="#"])')
						.on('touchstart click', function(e) {
							if($window.width() > 991) {

								e.stopPropagation();
								e.preventDefault();

								if(e.handled !== true) {

									var li = $(this).closest('li');

									if(li.hasClass('tapped')) {
										location.href = $(this).attr('href');
									}

									li.addClass('tapped');

									e.handled = true;
								} else {
									return false;
								}

								return false;

							}
						})
						.on('blur', function(e) {
							$(this).closest('li').removeClass('tapped');
						});

				}

				// Anchors Position
				$('[data-hash]').each(function() {

					var target = $(this).attr('href'),
						offset = ($(this).is("[data-hash-offset]") ? $(this).data('hash-offset') : 0);

					if($(target).get(0)) {
						$(this).on('click', function(e) {
							e.preventDefault();

							// Close Collapse if Opened
							$(this).parents('.collapse.in').removeClass('in');

							self.scrollToTarget(target, offset);

							return;
						});
					}

				});

				// Mobile Redirect - (Ignores the Dropdown from Bootstrap)
				$('.mobile-redirect').on('click', function() {
					if ($window.width() < 992) {
						self.location = $(this).attr('href');
					}
				});

				return this;
			},

			scrollToTarget: function(target, offset) {
				var self = this;

				$('body').addClass('scrolling');

				$('html, body').animate({
					scrollTop: $(target).offset().top - offset
				}, self.options.scrollDelay, self.options.scrollAnimation, function() {
					$('body').removeClass('scrolling');
				});

				return this;

			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Newsletter
(function(theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		Newsletter: {

			defaults: {
				wrapper: $('#newsletterForm')
			},

			initialize: function($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.build();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts, this.$wrapper.data('plugin-options'));

				return this;
			},

			build: function() {
				if (!($.isFunction($.fn.validate))) {
					return this;
				}

				var self = this,
					$email = self.$wrapper.find('#newsletterEmail'),
					$success = $('#newsletterSuccess'),
					$error = $('#newsletterError');

				self.$wrapper.validate({
					submitHandler: function(form) {

						$.ajax({
							type: 'POST',
							url: self.$wrapper.attr('action'),
							data: {
								'email': $email.val()
							},
							dataType: 'json',
							success: function(data) {
								if (data.response == 'success') {

									$success.removeClass('hidden');
									$error.addClass('hidden');

									$email
										.val('')
										.blur()
										.closest('.control-group')
										.removeClass('success')
										.removeClass('error');

								} else {

									$error.html(data.message);
									$error.removeClass('hidden');
									$success.addClass('hidden');

									$email
										.blur()
										.closest('.control-group')
										.removeClass('success')
										.addClass('error');

								}
							}
						});

					},
					rules: {
						newsletterEmail: {
							required: true,
							email: true
						}
					},
					errorPlacement: function(error, element) {

					}
				});

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Search
(function(theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		Search: {

			defaults: {
				wrapper: $('#searchForm')
			},

			initialize: function($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.build();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts, this.$wrapper.data('plugin-options'));

				return this;
			},

			build: function() {
				if (!($.isFunction($.fn.validate))) {
					return this;
				}

				this.$wrapper.validate({
					errorPlacement: function(error, element) {}
				});

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

// Sticky Header
(function(theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		StickyHeader: {

			defaults: {
				wrapper: $('#header'),
				headerBody: $('#header .header-body'),
				stickyEnabled: true,
				stickyEnableOnBoxed: true,
				stickyEnableOnMobile: true,
				stickyStartAt: 0,
				stickyStartAtElement: false,
				stickySetTop: 0,
				stickyChangeLogo: false,
				stickyChangeLogoWrapper: true
			},

			initialize: function($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.build()
					.events();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts, this.$wrapper.data('plugin-options'));

				return this;
			},

			build: function() {
				if (!this.options.stickyEnableOnBoxed && $('html').hasClass('boxed') || !this.options.stickyEnabled) {
					return this;
				}

				var self = this,
					$html = $('html'),
					$window = $(window),
					sideHeader = $html.hasClass('side-header');

				// HTML Classes
				$html.addClass('sticky-header-enabled');

				if (parseInt(self.options.stickySetTop) < 0) {
					$html.addClass('sticky-header-negative');
				}

				// Set Start At
				if(self.options.stickyStartAtElement) {

					var $stickyStartAtElement = $(self.options.stickyStartAtElement);

					$(window).on('scroll resize', function() {
						self.options.stickyStartAt = $stickyStartAtElement.offset().top;
					});

					$(window).trigger('resize');
				}

				// Boxed
				if($html.hasClass('boxed') && (parseInt(self.options.stickyStartAt) == 0) && $window.width() > 991) {
					self.options.stickyStartAt = 30;
				}

				// Set Wrapper Min-Height
				self.options.wrapper.css('min-height', self.options.wrapper.height());

				// Check Sticky Header
				self.checkStickyHeader = function() {
					if ($window.scrollTop() >= parseInt(self.options.stickyStartAt)) {
						self.activateStickyHeader();
					} else {
						self.deactivateStickyHeader();
					}
				};
				
				// Activate Sticky Header
				self.activateStickyHeader = function() {

					if ($window.width() < 992) {
						if (!self.options.stickyEnableOnMobile) {
							self.deactivateStickyHeader();
							return;
						}
					} else {
						if (sideHeader) {
							self.deactivateStickyHeader();
							return;
						}
					}

					$html.addClass('sticky-header-active');

					self.options.headerBody.css('top', self.options.stickySetTop);

					if (self.options.stickyChangeLogo) {
						self.changeLogo(true);
					}

					$.event.trigger({
						type: 'stickyHeader.activate'
					});
				};

				// Deactivate Sticky Header
				self.deactivateStickyHeader = function() {

					$html.removeClass('sticky-header-active');

					self.options.headerBody.css('top', 0);

					if (self.options.stickyChangeLogo) {
						self.changeLogo(false);
					}

					$.event.trigger({
						type: 'stickyHeader.deactivate'
					});
				};

				// Always Sticky
				if (parseInt(self.options.stickyStartAt) <= 0) {
					self.activateStickyHeader();
				}

				// Set Logo
				if (self.options.stickyChangeLogo) {

					var $logoWrapper = self.options.wrapper.find('.header-logo'),
						$logo = $logoWrapper.find('img'),
						logoWidth = $logo.attr('width'),
						logoHeight = $logo.attr('height'),
						logoSmallTop = parseInt($logo.attr('data-sticky-top') ? $logo.attr('data-sticky-top') : 0),
						logoSmallWidth = parseInt($logo.attr('data-sticky-width') ? $logo.attr('data-sticky-width') : 'auto'),
						logoSmallHeight = parseInt($logo.attr('data-sticky-height') ? $logo.attr('data-sticky-height') : 'auto');

					if (self.options.stickyChangeLogoWrapper) {
						$logoWrapper.css({
							'width': $logo.outerWidth(true),
							'height': $logo.outerHeight(true)
						});
					}

					self.changeLogo = function(activate) {
						if(activate) {
							$logo.css({
								'top': logoSmallTop,
								'width': logoSmallWidth,
								'height': logoSmallHeight
							});
						} else {
							$logo.css({
								'top': 0,
								'width': logoWidth,
								'height': logoHeight
							});
						}
					}

				}

				return this;
			},

			events: function() {
				var self = this;

				if (!this.options.stickyEnableOnBoxed && $('body').hasClass('boxed') || !this.options.stickyEnabled) {
					return this;
				}

				if (!self.options.alwaysStickyEnabled) {
					$(window).on('scroll resize', function() {
						self.checkStickyHeader();
					});
				} else {
					self.activateStickyHeader();
				}

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);
/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 27.02.2015
*********************************************/


/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 1.6.9
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.skinkers.com/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/



(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var y="1.6.9",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,C="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipetp=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+H+" does not exist on jQuery.swipetp")}}else{if(!F&&(typeof H==="object"||!H)){return w.apply(this,arguments)}}return G};f.fn.swipetp.version=y;f.fn.swipetp.defaults=n;f.fn.swipetp.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipetp.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipetp.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipetp.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined))){F.allowPageScroll=m}if(F.click!==undefined&&F.tap===undefined){F.tap=F.click}if(!F){F={}}F=f.extend({},f.fn.swipetp.defaults,F);return this.each(function(){var H=f(this);var G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}function D(a5,aw){var aA=(a||d||!aw.fallbackToMouseEvents),K=aA?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",az=aA?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=aA?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=aA?null:"mouseleave",aE=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ah=0,aQ=null,ac=0,a2=0,a0=0,H=1,ar=0,aK=0,N=null;var aS=f(a5);var aa="start";var X=0;var aR=null;var U=0,a3=0,a6=0,ae=0,O=0;var aX=null,ag=null;try{aS.bind(K,aO);aS.bind(aE,ba)}catch(al){f.error("events not supported "+K+","+aE+" on jQuery.swipetp")}this.enable=function(){aS.bind(K,aO);aS.bind(aE,ba);return aS};this.disable=function(){aL();return aS};this.destroy=function(){aL();aS.data(C,null);aS=null};this.option=function(bd,bc){if(aw[bd]!==undefined){if(bc===undefined){return aw[bd]}else{aw[bd]=bc}}else{f.error("Option "+bd+" does not exist on jQuery.swipetp.options")}return null};function aO(be){if(aC()){return}if(f(be.target).closest(aw.excludedElements,aS).length>0){return}var bf=be.originalEvent?be.originalEvent:be;var bd,bg=bf.touches,bc=bg?bg[0]:bf;aa=g;if(bg){X=bg.length}else{be.preventDefault()}ah=0;aQ=null;aK=null;ac=0;a2=0;a0=0;H=1;ar=0;aR=ak();N=ab();S();if(!bg||(X===aw.fingers||aw.fingers===i)||aY()){aj(0,bc);U=au();if(X==2){aj(1,bg[1]);a2=a0=av(aR[0].start,aR[1].start)}if(aw.swipeStatus||aw.pinchStatus){bd=P(bf,aa)}}else{bd=false}if(bd===false){aa=q;P(bf,aa);return bd}else{if(aw.hold){ag=setTimeout(f.proxy(function(){aS.trigger("hold",[bf.target]);if(aw.hold){bd=aw.hold.call(aS,bf,bf.target)}},this),aw.longTapThreshold)}ap(true)}return null}function a4(bf){var bi=bf.originalEvent?bf.originalEvent:bf;if(aa===h||aa===q||an()){return}var be,bj=bi.touches,bd=bj?bj[0]:bi;var bg=aI(bd);a3=au();if(bj){X=bj.length}if(aw.hold){clearTimeout(ag)}aa=k;if(X==2){if(a2==0){aj(1,bj[1]);a2=a0=av(aR[0].start,aR[1].start)}else{aI(bj[1]);a0=av(aR[0].end,aR[1].end);aK=at(aR[0].end,aR[1].end)}H=a8(a2,a0);ar=Math.abs(a2-a0)}if((X===aw.fingers||aw.fingers===i)||!bj||aY()){aQ=aM(bg.start,bg.end);am(bf,aQ);ah=aT(bg.start,bg.end);ac=aN();aJ(aQ,ah);if(aw.swipeStatus||aw.pinchStatus){be=P(bi,aa)}if(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave){var bc=true;if(aw.triggerOnTouchLeave){var bh=aZ(this);bc=F(bg.end,bh)}if(!aw.triggerOnTouchEnd&&bc){aa=aD(k)}else{if(aw.triggerOnTouchLeave&&!bc){aa=aD(h)}}if(aa==q||aa==h){P(bi,aa)}}}else{aa=q;P(bi,aa)}if(be===false){aa=q;P(bi,aa)}}function M(bc){var bd=bc.originalEvent?bc.originalEvent:bc,be=bd.touches;if(be){if(be.length){G();return true}}if(an()){X=ae}a3=au();ac=aN();if(bb()||!ao()){aa=q;P(bd,aa)}else{if(aw.triggerOnTouchEnd||(aw.triggerOnTouchEnd==false&&aa===k)){bc.preventDefault();aa=h;P(bd,aa)}else{if(!aw.triggerOnTouchEnd&&a7()){aa=h;aG(bd,aa,B)}else{if(aa===k){aa=q;P(bd,aa)}}}}ap(false);return null}function ba(){X=0;a3=0;U=0;a2=0;a0=0;H=1;S();ap(false)}function L(bc){var bd=bc.originalEvent?bc.originalEvent:bc;if(aw.triggerOnTouchLeave){aa=aD(h);P(bd,aa)}}function aL(){aS.unbind(K,aO);aS.unbind(aE,ba);aS.unbind(az,a4);aS.unbind(V,M);if(T){aS.unbind(T,L)}ap(false)}function aD(bg){var bf=bg;var be=aB();var bd=ao();var bc=bb();if(!be||bc){bf=q}else{if(bd&&bg==k&&(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave)){bf=h}else{if(!bd&&bg==h&&aw.triggerOnTouchLeave){bf=q}}}return bf}function P(be,bc){var bd,bf=be.touches;if((J()||W())||(Q()||aY())){if(J()||W()){bd=aG(be,bc,l)}if((Q()||aY())&&bd!==false){bd=aG(be,bc,t)}}else{if(aH()&&bd!==false){bd=aG(be,bc,j)}else{if(aq()&&bd!==false){bd=aG(be,bc,b)}else{if(ai()&&bd!==false){bd=aG(be,bc,B)}}}}if(bc===q){ba(be)}if(bc===h){if(bf){if(!bf.length){ba(be)}}else{ba(be)}}return bd}function aG(bf,bc,be){var bd;if(be==l){aS.trigger("swipeStatus",[bc,aQ||null,ah||0,ac||0,X,aR]);if(aw.swipeStatus){bd=aw.swipeStatus.call(aS,bf,bc,aQ||null,ah||0,ac||0,X,aR);if(bd===false){return false}}if(bc==h&&aW()){aS.trigger("swipe",[aQ,ah,ac,X,aR]);if(aw.swipe){bd=aw.swipe.call(aS,bf,aQ,ah,ac,X,aR);if(bd===false){return false}}switch(aQ){case p:aS.trigger("swipeLeft",[aQ,ah,ac,X,aR]);if(aw.swipeLeft){bd=aw.swipeLeft.call(aS,bf,aQ,ah,ac,X,aR)}break;case o:aS.trigger("swipeRight",[aQ,ah,ac,X,aR]);if(aw.swipeRight){bd=aw.swipeRight.call(aS,bf,aQ,ah,ac,X,aR)}break;case e:aS.trigger("swipeUp",[aQ,ah,ac,X,aR]);if(aw.swipeUp){bd=aw.swipeUp.call(aS,bf,aQ,ah,ac,X,aR)}break;case x:aS.trigger("swipeDown",[aQ,ah,ac,X,aR]);if(aw.swipeDown){bd=aw.swipeDown.call(aS,bf,aQ,ah,ac,X,aR)}break}}}if(be==t){aS.trigger("pinchStatus",[bc,aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchStatus){bd=aw.pinchStatus.call(aS,bf,bc,aK||null,ar||0,ac||0,X,H,aR);if(bd===false){return false}}if(bc==h&&a9()){switch(aK){case c:aS.trigger("pinchIn",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchIn){bd=aw.pinchIn.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break;case A:aS.trigger("pinchOut",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchOut){bd=aw.pinchOut.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break}}}if(be==B){if(bc===q||bc===h){clearTimeout(aX);clearTimeout(ag);if(Z()&&!I()){O=au();aX=setTimeout(f.proxy(function(){O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}},this),aw.doubleTapThreshold)}else{O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}}}}else{if(be==j){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("doubletap",[bf.target]);if(aw.doubleTap){bd=aw.doubleTap.call(aS,bf,bf.target)}}}else{if(be==b){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("longtap",[bf.target]);if(aw.longTap){bd=aw.longTap.call(aS,bf,bf.target)}}}}}return bd}function ao(){var bc=true;if(aw.threshold!==null){bc=ah>=aw.threshold}return bc}function bb(){var bc=false;if(aw.cancelThreshold!==null&&aQ!==null){bc=(aU(aQ)-ah)>=aw.cancelThreshold}return bc}function af(){if(aw.pinchThreshold!==null){return ar>=aw.pinchThreshold}return true}function aB(){var bc;if(aw.maxTimeThreshold){if(ac>=aw.maxTimeThreshold){bc=false}else{bc=true}}else{bc=true}return bc}function am(bc,bd){if(aw.preventDefaultEvents===false){return}if(aw.allowPageScroll===m){bc.preventDefault()}else{var be=aw.allowPageScroll===s;switch(bd){case p:if((aw.swipeLeft&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case o:if((aw.swipeRight&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case e:if((aw.swipeUp&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break;case x:if((aw.swipeDown&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break}}}function a9(){var bd=aP();var bc=Y();var be=af();return bd&&bc&&be}function aY(){return !!(aw.pinchStatus||aw.pinchIn||aw.pinchOut)}function Q(){return !!(a9()&&aY())}function aW(){var bf=aB();var bh=ao();var be=aP();var bc=Y();var bd=bb();var bg=!bd&&bc&&be&&bh&&bf;return bg}function W(){return !!(aw.swipe||aw.swipeStatus||aw.swipeLeft||aw.swipeRight||aw.swipeUp||aw.swipeDown)}function J(){return !!(aW()&&W())}function aP(){return((X===aw.fingers||aw.fingers===i)||!a)}function Y(){return aR[0].end.x!==0}function a7(){return !!(aw.tap)}function Z(){return !!(aw.doubleTap)}function aV(){return !!(aw.longTap)}function R(){if(O==null){return false}var bc=au();return(Z()&&((bc-O)<=aw.doubleTapThreshold))}function I(){return R()}function ay(){return((X===1||!a)&&(isNaN(ah)||ah<aw.threshold))}function a1(){return((ac>aw.longTapThreshold)&&(ah<r))}function ai(){return !!(ay()&&a7())}function aH(){return !!(R()&&Z())}function aq(){return !!(a1()&&aV())}function G(){a6=au();ae=event.touches.length+1}function S(){a6=0;ae=0}function an(){var bc=false;if(a6){var bd=au()-a6;if(bd<=aw.fingerReleaseThreshold){bc=true}}return bc}function aC(){return !!(aS.data(C+"_intouch")===true)}function ap(bc){if(bc===true){aS.bind(az,a4);aS.bind(V,M);if(T){aS.bind(T,L)}}else{aS.unbind(az,a4,false);aS.unbind(V,M,false);if(T){aS.unbind(T,L,false)}}aS.data(C+"_intouch",bc===true)}function aj(bd,bc){var be=bc.identifier!==undefined?bc.identifier:0;aR[bd].identifier=be;aR[bd].start.x=aR[bd].end.x=bc.pageX||bc.clientX;aR[bd].start.y=aR[bd].end.y=bc.pageY||bc.clientY;return aR[bd]}function aI(bc){var be=bc.identifier!==undefined?bc.identifier:0;var bd=ad(be);bd.end.x=bc.pageX||bc.clientX;bd.end.y=bc.pageY||bc.clientY;return bd}function ad(bd){for(var bc=0;bc<aR.length;bc++){if(aR[bc].identifier==bd){return aR[bc]}}}function ak(){var bc=[];for(var bd=0;bd<=5;bd++){bc.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bc}function aJ(bc,bd){bd=Math.max(bd,aU(bc));N[bc].distance=bd}function aU(bc){if(N[bc]){return N[bc].distance}return undefined}function ab(){var bc={};bc[p]=ax(p);bc[o]=ax(o);bc[e]=ax(e);bc[x]=ax(x);return bc}function ax(bc){return{direction:bc,distance:0}}function aN(){return a3-U}function av(bf,be){var bd=Math.abs(bf.x-be.x);var bc=Math.abs(bf.y-be.y);return Math.round(Math.sqrt(bd*bd+bc*bc))}function a8(bc,bd){var be=(bd/bc)*1;return be.toFixed(2)}function at(){if(H<1){return A}else{return c}}function aT(bd,bc){return Math.round(Math.sqrt(Math.pow(bc.x-bd.x,2)+Math.pow(bc.y-bd.y,2)))}function aF(bf,bd){var bc=bf.x-bd.x;var bh=bd.y-bf.y;var be=Math.atan2(bh,bc);var bg=Math.round(be*180/Math.PI);if(bg<0){bg=360-Math.abs(bg)}return bg}function aM(bd,bc){var be=aF(bd,bc);if((be<=45)&&(be>=0)){return p}else{if((be<=360)&&(be>=315)){return p}else{if((be>=135)&&(be<=225)){return o}else{if((be>45)&&(be<135)){return x}else{return e}}}}}function au(){var bc=new Date();return bc.getTime()}function aZ(bc){bc=f(bc);var be=bc.offset();var bd={left:be.left,right:be.left+bc.outerWidth(),top:be.top,bottom:be.top+bc.outerHeight()};return bd}function F(bc,bd){return(bc.x>bd.left&&bc.x<bd.right&&bc.y>bd.top&&bc.y<bd.bottom)}}}));

if(typeof(console) === 'undefined') {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
}

if (window.tplogs==true)
	try {
		console.groupCollapsed("ThemePunch GreenSocks Logs");
	} catch(e) { }


var oldgs = window.GreenSockGlobals;
	oldgs_queue = window._gsQueue;
	
var punchgs = window.GreenSockGlobals = {};

if (window.tplogs==true)
	try {
		console.info("Build GreenSock SandBox for ThemePunch Plugins");
		console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
	} catch(e) {}

/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-03
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,l=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},h=l("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},f=function(){},c=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),m={},p=function(s,r,n,a){this.sc=m[s]?m[s].sc:[],m[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(h){for(var _,u,f,c,d,v=r.length,g=v;--v>-1;)(_=m[r[v]]||new p(r[v],[])).gsClass?(o[v]=_.gsClass,g--):h&&_.sc.push(this);if(0===g&&n)for(u=("com.greensock."+s).split("."),f=u.pop(),c=l(u.join("."))[f]=this.gsClass=n.apply(n,o),a&&(i[f]=c,d="undefined"!=typeof module&&module.exports,!d&&"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return c}):s===e&&d&&(module.exports=c)),v=0;this.sc.length>v;v++)this.sc[v].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new p(t,e,i,s)},v=h._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var g=[0,0,1,1],T=[],y=v("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?g.concat(e):g},!0),w=y.map={},P=y.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=l[_],r=s?v("easing."+n,null,!0):h.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=y.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,P(new y(null,null,1,r),n,"easeOut",!0),P(new y(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),P(new y(null,null,3,r),n,"easeInOut");w.linear=h.easing.Linear.easeIn,w.swing=h.easing.Quad.easeInOut;var b=v("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)n=h[l],n.c===e&&n.s===i?h.splice(l,1):0===_&&r>n.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var k=t.requestAnimationFrame,A=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},x=S();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!k;)k=t[s[r]+"RequestAnimationFrame"],A=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];v("Ticker",function(t,e){var i,s,r,n,l,h=this,u=S(),c=e!==!1&&k,m=500,p=33,d="tick",v=function(t){var e,a,o=S()-x;o>m&&(u+=o-p),x+=o,h.time=(x-u)/1e3,e=h.time-l,(!i||e>0||t===!0)&&(h.frame++,l+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(v)),a&&h.dispatchEvent(d)};b.call(h),h.time=h.frame=0,h.tick=function(){v(!0)},h.lagSmoothing=function(t,e){m=t||1/_,p=Math.min(e,m,0)},h.sleep=function(){null!=r&&(c&&A?A(r):clearTimeout(r),s=f,r=null,h===a&&(o=!1))},h.wake=function(){null!==r?h.sleep():h.frame>10&&(x=S()-m+5),s=0===i?f:c&&k?k:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===a&&(o=!0),v(2)},h.fps=function(t){return arguments.length?(i=t,n=1/(i||60),l=this.time+n,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),c=t,h.fps(i),void 0):c},h.fps(t),setTimeout(function(){c&&5>h.frame&&h.useRAF(!1)},1500)}),n=h.Ticker.prototype=new h.events.EventDispatcher,n.constructor=h.Ticker;var R=v("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,H){o||a.wake();var i=this.vars.useFrames?K:H;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=R.ticker=new h.Ticker,n=R.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var C=function(){o&&S()-x>2e3&&a.wake(),setTimeout(C,2e3)};C(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n._callback=function(t){var e=this.vars;e[t].apply(e[t+"Scope"]||e.callbackScope||this,e[t+"Params"]||T)},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=c(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(z.length&&V(),this.render(t,e,!1),z.length&&V())}return this},n.progress=n.totalProgress=function(t,e){var i=this.duration();return arguments.length?this.totalTime(i*t,e):i?this._time/i:this.ratio},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;var e,i,s=this._timeline;return t!=this._paused&&s&&(o||t||a.wake(),e=s.rawTime(),i=e-this._pauseTime,!t&&s.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&(e=s.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,this.render(e,e===this._totalTime,!0))),this._gc&&!t&&this._enabled(!0,!1),this};var D=v("core.SimpleTimeline",function(t){R.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=D.prototype=new R,n.constructor=D,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var I=v("TweenLite",function(e,i,s){if(R.call(this,i,s),this.render=I.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:I.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?$[I.defaultOverwrite]:"number"==typeof l?l>>0:$[l],(o||e instanceof Array||e.push&&c(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=W(n,this,!1),1===l&&this._siblings[r].length>1&&Y(n,this,null,1,this._siblings[r])):(n=a[r--]=I.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=W(e,this,!1),1===l&&this._siblings.length>1&&Y(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),E=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},O=function(t,e){var i,s={};for(i in t)M[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!Q[i]||Q[i]&&Q[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=I.prototype=new R,n.constructor=I,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,I.version="1.18.0",I.defaultEase=n._ease=new y(null,null,1,1),I.defaultOverwrite="auto",I.ticker=a,I.autoSleep=120,I.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},I.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(I.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var z=[],F={},L=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,N=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.blob?t?this.join(""):this.start:i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.fp?i.t[i.p](i.fp,e):i.t[i.p](e):i.t[i.p]=e,i=i._next},U=function(t,e,i,s){var r,n,a,o,l,h,_,u=[t,e],f=0,c="",m=0;for(u.start=t,i&&(i(u),t=u[0],e=u[1]),u.length=0,r=t.match(L)||[],n=e.match(L)||[],s&&(s._next=null,s.blob=1,u._firstPT=s),l=n.length,o=0;l>o;o++)_=n[o],h=e.substr(f,e.indexOf(_,f)-f),c+=h||!o?h:",",f+=h.length,m?m=(m+1)%5:"rgba("===h.substr(-5)&&(m=1),_===r[o]||o>=r.length?c+=_:(c&&(u.push(c),c=""),a=parseFloat(r[o]),u.push(a),u._firstPT={_next:u._firstPT,t:u,p:u.length-1,s:a,c:("="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*parseFloat(_.substr(2)):parseFloat(_)-a)||0,f:0,r:m&&4>m}),f+=_.length;return c+=e.substr(f),c&&u.push(c),u.setRatio=N,u},j=function(t,e,i,s,r,n,a,o){var l,h,_="get"===i?t[e]:i,u=typeof t[e],f="string"==typeof s&&"="===s.charAt(1),c={t:t,p:e,s:_,f:"function"===u,pg:0,n:r||e,r:n,pr:0,c:f?parseInt(s.charAt(0)+"1",10)*parseFloat(s.substr(2)):parseFloat(s)-_||0};return"number"!==u&&("function"===u&&"get"===i&&(h=e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3),c.s=_=a?t[h](a):t[h]()),"string"==typeof _&&(a||isNaN(_))?(c.fp=a,l=U(_,s,o||I.defaultStringFilter,c),c={t:l,p:"setRatio",s:0,c:1,f:2,pg:0,n:r||e,pr:0}):f||(c.c=parseFloat(s)-parseFloat(_)||0)),c.c?((c._next=this._firstPT)&&(c._next._prev=c),this._firstPT=c,c):void 0},G=I._internals={isArray:c,isSelector:E,lazyTweens:z,blobDif:U},Q=I._plugins={},q=G.tweenLookup={},B=0,M=G.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1},$={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},K=R._rootFramesTimeline=new D,H=R._rootTimeline=new D,J=30,V=G.lazyRender=function(){var t,e=z.length;for(F={};--e>-1;)t=z[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);z.length=0};H._startTime=a.time,K._startTime=a.frame,H._active=K._active=!0,setTimeout(V,1),R._updateRoot=I.render=function(){var t,e,i;if(z.length&&V(),H.render((a.time-H._startTime)*H._timeScale,!1,!1),K.render((a.frame-K._startTime)*K._timeScale,!1,!1),z.length&&V(),a.frame>=J){J=a.frame+(parseInt(I.autoSleep,10)||120);for(i in q){for(e=q[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete q[i]}if(i=H._first,(!i||i._paused)&&I.autoSleep&&!K._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",R._updateRoot);var W=function(t,e,i){var s,r,n=t._gsTweenID;if(q[n||(t._gsTweenID=n="t"+B++)]||(q[n]={target:t,tweens:[]}),e&&(s=q[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return q[n].tweens},X=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=I.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},Y=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;l>n;n++)if((o=r[n])!==e)o._gc||o._kill(null,t,e)&&(a=!0);else if(5===s)break;return a}var h,u=e._startTime+_,f=[],c=0,m=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||Z(e,0,m),0===Z(o,h,m)&&(f[c++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((m||!o._initted)&&2e-10>=u-o._startTime||(f[c++]=o)));for(n=c;--n>-1;)if(o=f[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!X(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},Z=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,l=!!n.immediateRender,h=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=l&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=I.to(this.target,0,r),l)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(l=!1),i={};for(s in n)M[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=l&&n.lazy!==!1,i.immediateRender=l,this._startAt=I.to(this.target,0,i),l){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=h=h?h instanceof y?h:"function"==typeof h?new y(h,n.easeParams):w[h]||I.defaultEase:I.defaultEase,n.easeParams instanceof Array&&h.config&&(this._ease=h.config.apply(h,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&I._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,l,h,_;if(null==e)return!1;F[e._gsTweenID]&&V(),this.vars.css||e.style&&e!==t&&e.nodeType&&Q.css&&this.vars.autoCSS!==!1&&O(this.vars,e);for(n in this.vars)if(_=this.vars[n],M[n])_&&(_ instanceof Array||_.push&&c(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(Q[n]&&(l=new Q[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:1,n:n,pg:1,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0),h._next&&(h._next._prev=h)}else i[n]=j.call(this,e,n,"get",_,n,0,null,this.vars.stringFilter);return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&Y(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(F[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>h||h===_&&"isPause"!==this.data)&&h!==t&&(i=!0,h>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||h===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&h>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(h!==_||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||h===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/l,f=this._easeType,c=this._easePower;(1===f||3===f&&u>=.5)&&(u=1-u),3===f&&(u*=2),1===c?u*=u:2===c?u*=u*u:3===c?u*=u*u*u:4===c&&(u*=u*u*u*u),this.ratio=1===f?1-u:2===f?u:.5>t/l?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=h,z.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._callback("onUpdate")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===l&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:I.selector(e)||e;var s,r,n,a,o,l,h,_,u,f=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((c(e)||E(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s],i)&&(l=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(I.onOverwrite||this.vars.onOverwrite)){for(n in h)o[n]&&(u||(u=[]),u.push(n));if((u||!t)&&!X(this,i,e,u))return!1}for(n in h)(a=o[n])&&(f&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,l=!0),a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},n.invalidate=function(){return this._notifyPluginsOfEnabled&&I._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],R.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=W(s[i],this,!0);else this._siblings=W(this.target,this,!0)}return R.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?I._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},I.to=function(t,e,i){return new I(t,e,i)},I.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new I(t,e,i)},I.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new I(t,e,s)},I.delayedCall=function(t,e,i,s,r){return new I(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:r,overwrite:0})},I.set=function(t,e){return new I(t,0,e)},I.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:I.selector(t)||t;var i,s,r,n;if((c(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(I.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=W(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},I.killTweensOf=I.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=I.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var te=v("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=te.prototype},!0);if(n=te.prototype,te.version="1.18.0",te.API=2,n._firstPT=null,n._addTween=j,n.setRatio=N,n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},I._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},te.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===te.API&&(Q[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=v("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){te.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new te(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,te.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in m)m[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}})("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");

/*!
 * VERSION: 1.18.0
 * DATE: 2015-08-29
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],l(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));l(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,l=n.isArray,h=n.lazyTweens,_=n.lazyRender,u=_gsScope._gsDefine.globals,f=function(t){var e,i={};for(e in t)i[e]=t[e];return i},c=function(t,e,i){var s,r,n=t.cycle;for(s in n)r=n[s],t[s]="function"==typeof r?r.call(e[i],i):r[i%r.length];delete t.cycle},p=a.pauseCallback=function(){},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.18.0",d.constructor=s,d.kill()._gc=d._forcingPlayhead=d._hasPause=!1,d.to=function(t,e,s,r){var n=s.repeat&&u.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&u.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&u.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,l,h,_){var u,p,d=new s({onComplete:l,onCompleteParams:h,callbackScope:_,smoothChildTiming:this.smoothChildTiming}),g=r.cycle;for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),p=0;t.length>p;p++)u=f(r),u.startAt&&(u.startAt=f(u.startAt),u.startAt.cycle&&c(u.startAt,t,p)),g&&c(u,t,p),d.to(t[p],e,u,p*n);return this.add(d,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,l){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,l)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var h,_,u,f,c,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&l(r)){for(a=a||"normal",o=o||0,h=n,_=r.length,u=0;_>u;u++)l(f=r[u])&&(f=new s({tweens:f})),this.add(f,h),"string"!=typeof f&&"function"!=typeof f&&("sequence"===a?h=f._startTime+f.totalDuration()/f._timeScale:"start"===a&&(f._startTime-=f.delay())),h+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(c=this,p=c.rawTime()>r._startTime;c._timeline;)p&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},d.remove=function(e){if(e instanceof t){this._remove(e,!1);var i=e._timeline=e.vars.useFrames?t._rootFramesTimeline:t._rootTimeline;return e._startTime=(e._paused?e._pauseTime:i._time)-(e._reversed?e.totalDuration()-e._totalTime:e._totalTime)/e._timeScale,this}if(e instanceof Array||e&&e.push&&l(e)){for(var s=e.length;--s>-1;)this.remove(e[s]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,p,s,r||this);return n.vars.onComplete=n.vars.onReverseComplete=e,n.data="isPause",this._hasPause=!0,this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&l(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,l,u,f=this._dirty?this.totalDuration():this._totalDuration,c=this._time,p=this._startTime,m=this._timeScale,d=this._paused;if(t>=f)this._totalTime=this._time=f,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",l=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(l=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=f+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==c||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(l=n=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(l=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(l=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!e){if(t>=c)for(s=this._first;s&&t>=s._startTime&&!u;)s._duration||"isPause"!==s.data||s.ratio||0===s._startTime&&0===this._rawPrevTime||(u=s),s=s._next;else for(s=this._last;s&&s._startTime>=t&&!u;)s._duration||"isPause"===s.data&&s._rawPrevTime>0&&(u=s),s=s._prev;u&&(this._time=t=u._startTime,this._totalTime=t+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=t}if(this._time!==c&&this._first||i||l||u){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==c&&t>0&&(this._active=!0),0===c&&this.vars.onStart&&0!==this._time&&(e||this._callback("onStart")),this._time>=c)for(s=this._first;s&&(a=s._next,!this._paused||d);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(u===s&&this.pause(),s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||d);){if(s._active||c>=s._startTime&&!s._paused&&!s._gc){if(u===s){for(u=s._prev;u&&u.endTime()>this._time;)u.render(u._reversed?u.totalDuration()-(t-u._startTime)*u._timeScale:(t-u._startTime)*u._timeScale,e,i),u=u._prev;u=null,this.pause()}s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)}s=a}this._onUpdate&&(e||(h.length&&_(),this._callback("onUpdate"))),o&&(this._gc||(p===this._startTime||m!==this._timeScale)&&(0===this._time||f>=this.totalDuration())&&(n&&(h.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this._callback(o)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},d.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=e())}("TimelineLite");

/*!
 * VERSION: beta 1.15.2
 * DATE: 2015-01-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},p=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),f=u,p=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=p?Math.random():1/u*f,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),p?s+=Math.random()*r-.5*r:f%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),f=u;--f>-1;)a=l[f],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t>=1?t:1,this._p2=(e||s)/(1>t?t:1),this._p3=this._p2/a*(Math.asin(1/this._p1)||0),this._p2=a/this._p2},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();


/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-05
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,r,s,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o=_gsScope._gsDefine.globals,l={},h=a.prototype=new t("css");h.constructor=a,a.version="1.18.0",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",a.defaultSmoothOrigin=!0,h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h,lineHeight:""};var u,f,c,_,p,d,m=/(?:\d|\-\d|\.\d|\-\.\d)+/g,g=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,y=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,x=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,b=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,S=/([A-Z])/g,O=/-([a-z])/gi,C=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,k=function(t,e){return e.toUpperCase()},R=/(?:Left|Right|Width)/i,A=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,M=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,L=Math.PI/180,N=180/Math.PI,F={},X=document,z=function(t){return X.createElementNS?X.createElementNS("http://www.w3.org/1999/xhtml",t):X.createElement(t)},B=z("div"),I=z("img"),E=a._internals={_specialProps:l},Y=navigator.userAgent,W=function(){var t=Y.indexOf("Android"),e=z("a");return c=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===t||Number(Y.substr(t+8,1))>3),p=c&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),_=-1!==Y.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y))&&(d=parseFloat(RegExp.$1)),e?(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity)):!1}(),V=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},j=function(t){window.console&&console.log(t)},G="",U="",q=function(t,e){e=e||B;var i,r,s=e.style;if(void 0!==s[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],r=5;--r>-1&&void 0===s[i[r]+t];);return r>=0?(U=3===r?"ms":i[r],G="-"+U.toLowerCase()+"-",U+t):null},H=X.defaultView?X.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,r,s){var n;return W||"opacity"!==e?(!r&&t.style[e]?n=t.style[e]:(i=i||H(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(S,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==s||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:s):V(t)},Z=E.convertToPixels=function(t,i,r,s,n){if("px"===s||!s)return r;if("auto"===s||!r)return 0;var o,l,h,u=R.test(i),f=t,c=B.style,_=0>r;if(_&&(r=-r),"%"===s&&-1!==i.indexOf("border"))o=r/100*(u?t.clientWidth:t.clientHeight);else{if(c.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==s&&f.appendChild&&"v"!==s.charAt(0)&&"rem"!==s)c[u?"borderLeftWidth":"borderTopWidth"]=r+s;else{if(f=t.parentNode||X.body,l=f._gsCache,h=e.ticker.frame,l&&u&&l.time===h)return l.width*r/100;c[u?"width":"height"]=r+s}f.appendChild(B),o=parseFloat(B[u?"offsetWidth":"offsetHeight"]),f.removeChild(B),u&&"%"===s&&a.cacheWidths!==!1&&(l=f._gsCache=f._gsCache||{},l.time=h,l.width=100*(o/r)),0!==o||n||(o=Z(t,i,r,s,!0))}return _?-o:o},$=E.calculateOffset=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var r="left"===e?"Left":"Top",s=Q(t,"margin"+r,i);return t["offset"+r]-(Z(t,e,parseFloat(s),s.replace(x,""))||0)},K=function(t,e){var i,r,s,n={};if(e=e||H(t,null))if(i=e.length)for(;--i>-1;)s=e[i],(-1===s.indexOf("-transform")||Se===s)&&(n[s.replace(O,k)]=e.getPropertyValue(s));else for(i in e)(-1===i.indexOf("Transform")||Pe===i)&&(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(O,k)]=e[i]);return W||(n.opacity=V(t)),r=ze(t,e,!1),n.rotation=r.rotation,n.skewX=r.skewX,n.scaleX=r.scaleX,n.scaleY=r.scaleY,n.x=r.x,n.y=r.y,Ce&&(n.z=r.z,n.rotationX=r.rotationX,n.rotationY=r.rotationY,n.scaleZ=r.scaleZ),n.filters&&delete n.filters,n},J=function(t,e,i,r,s){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||s&&s[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(y,"")?n:0:$(t,a),void 0!==h[a]&&(o=new pe(h,a,h[a],o)));if(r)for(a in r)"className"!==a&&(l[a]=r[a]);return{difs:l,firstMPT:o}},te={width:["Left","Right"],height:["Top","Bottom"]},ee=["marginLeft","marginRight","marginTop","marginBottom"],ie=function(t,e,i){var r=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),s=te[e],n=s.length;for(i=i||H(t,null);--n>-1;)r-=parseFloat(Q(t,"padding"+s[n],i,!0))||0,r-=parseFloat(Q(t,"border"+s[n]+"Width",i,!0))||0;return r},re=function(t,e){if("contain"===t||"auto"===t||"auto auto"===t)return t+" ";(null==t||""===t)&&(t="0 0");var i=t.split(" "),r=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],s=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==s?s="center"===r?"50%":"0":"center"===s&&(s="50%"),("center"===r||isNaN(parseFloat(r))&&-1===(r+"").indexOf("="))&&(r="50%"),t=r+" "+s+(i.length>2?" "+i[2]:""),e&&(e.oxp=-1!==r.indexOf("%"),e.oyp=-1!==s.indexOf("%"),e.oxr="="===r.charAt(1),e.oyr="="===s.charAt(1),e.ox=parseFloat(r.replace(y,"")),e.oy=parseFloat(s.replace(y,"")),e.v=t),e||t},se=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},ne=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},ae=function(t,e,i,r){var s,n,a,o,l,h=1e-6;return null==t?o=e:"number"==typeof t?o=t:(s=360,n=t.split("_"),l="="===t.charAt(1),a=(l?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:N)-(l?0:e),n.length&&(r&&(r[i]=e+a),-1!==t.indexOf("short")&&(a%=s,a!==a%(s/2)&&(a=0>a?a+s:a-s)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*s)%s-(0|a/s)*s:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*s)%s-(0|a/s)*s)),o=e+a),h>o&&o>-h&&(o=0),o},oe={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},le=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},he=a.parseColor=function(t,e){var i,r,s,n,a,o,l,h,u,f,c;if(t)if("number"==typeof t)i=[t>>16,255&t>>8,255&t];else{if(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),oe[t])i=oe[t];else if("#"===t.charAt(0))4===t.length&&(r=t.charAt(1),s=t.charAt(2),n=t.charAt(3),t="#"+r+r+s+s+n+n),t=parseInt(t.substr(1),16),i=[t>>16,255&t>>8,255&t];else if("hsl"===t.substr(0,3))if(i=c=t.match(m),e){if(-1!==t.indexOf("="))return t.match(g)}else a=Number(i[0])%360/360,o=Number(i[1])/100,l=Number(i[2])/100,s=.5>=l?l*(o+1):l+o-l*o,r=2*l-s,i.length>3&&(i[3]=Number(t[3])),i[0]=le(a+1/3,r,s),i[1]=le(a,r,s),i[2]=le(a-1/3,r,s);else i=t.match(m)||oe.transparent;i[0]=Number(i[0]),i[1]=Number(i[1]),i[2]=Number(i[2]),i.length>3&&(i[3]=Number(i[3]))}else i=oe.black;return e&&!c&&(r=i[0]/255,s=i[1]/255,n=i[2]/255,h=Math.max(r,s,n),u=Math.min(r,s,n),l=(h+u)/2,h===u?a=o=0:(f=h-u,o=l>.5?f/(2-h-u):f/(h+u),a=h===r?(s-n)/f+(n>s?6:0):h===s?(n-r)/f+2:(r-s)/f+4,a*=60),i[0]=0|a+.5,i[1]=0|100*o+.5,i[2]=0|100*l+.5),i},ue=function(t,e){var i,r,s,n=t.match(fe)||[],a=0,o=n.length?"":t;for(i=0;n.length>i;i++)r=n[i],s=t.substr(a,t.indexOf(r,a)-a),a+=s.length+r.length,r=he(r,e),3===r.length&&r.push(1),o+=s+(e?"hsla("+r[0]+","+r[1]+"%,"+r[2]+"%,"+r[3]:"rgba("+r.join(","))+")";return o},fe="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in oe)fe+="|"+h+"\\b";fe=RegExp(fe+")","gi"),a.colorStringFilter=function(t){var e,i=t[0]+t[1];fe.lastIndex=0,fe.test(i)&&(e=-1!==i.indexOf("hsl(")||-1!==i.indexOf("hsla("),t[0]=ue(t[0],e),t[1]=ue(t[1],e))},e.defaultStringFilter||(e.defaultStringFilter=a.colorStringFilter);var ce=function(t,e,i,r){if(null==t)return function(t){return t};var s,n=e?(t.match(fe)||[""])[0]:"",a=t.split(n).join("").match(v)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",u=a.length,f=u>0?a[0].replace(m,""):"";return u?s=e?function(t){var e,c,_,p;if("number"==typeof t)t+=f;else if(r&&D.test(t)){for(p=t.replace(D,"|").split("|"),_=0;p.length>_;_++)p[_]=s(p[_]);return p.join(",")}if(e=(t.match(fe)||[n])[0],c=t.split(e).join("").match(v)||[],_=c.length,u>_--)for(;u>++_;)c[_]=i?c[0|(_-1)/2]:a[_];return o+c.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,c;if("number"==typeof t)t+=f;else if(r&&D.test(t)){for(n=t.replace(D,"|").split("|"),c=0;n.length>c;c++)n[c]=s(n[c]);return n.join(",")}if(e=t.match(v)||[],c=e.length,u>c--)for(;u>++c;)e[c]=i?e[0|(c-1)/2]:a[c];return o+e.join(h)+l}:function(t){return t}},_e=function(t){return t=t.split(","),function(e,i,r,s,n,a,o){var l,h=(i+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return s.parse(e,o,n,a)}},pe=(E._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,r,s,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(s=i.xs0+i.s+i.xs1,r=1;i.l>r;r++)s+=i["xn"+r]+i["xs"+(r+1)];i.e=s}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,r,s){this.t=t,this.p=e,this.v=i,this.r=s,r&&(r._prev=this,this._next=r)}),de=(E._parseToProxy=function(t,e,i,r,s,n){var a,o,l,h,u,f=r,c={},_={},p=i._transform,d=F;for(i._transform=null,F=e,r=u=i.parse(t,e,r,s),F=d,n&&(i._transform=p,f&&(f._prev=null,f._prev&&(f._prev._next=null)));r&&r!==f;){if(1>=r.type&&(o=r.p,_[o]=r.s+r.c,c[o]=r.s,n||(h=new pe(r,"s",o,h,r.r),r.c=0),1===r.type))for(a=r.l;--a>0;)l="xn"+a,o=r.p+"_"+l,_[o]=r.data[l],c[o]=r[l],n||(h=new pe(r,l,o,h,r.rxp[l]));r=r._next}return{proxy:c,end:_,firstMPT:h,pt:u}},E.CSSPropTween=function(t,e,r,s,a,o,l,h,u,f,c){this.t=t,this.p=e,this.s=r,this.c=s,this.n=l||e,t instanceof de||n.push(this.n),this.r=h,this.type=o||0,u&&(this.pr=u,i=!0),this.b=void 0===f?r:f,this.e=void 0===c?r+s:c,a&&(this._next=a,a._prev=this)}),me=function(t,e,i,r,s,n){var a=new de(t,e,i,r-i,s,-1,n);return a.b=i,a.e=a.xs0=r,a},ge=a.parseComplex=function(t,e,i,r,s,n,a,o,l,h){i=i||n||"",a=new de(t,e,0,0,a,h?2:1,null,!1,o,i,r),r+="";var f,c,_,p,d,v,y,x,T,w,b,P,S,O=i.split(", ").join(",").split(" "),C=r.split(", ").join(",").split(" "),k=O.length,R=u!==!1;for((-1!==r.indexOf(",")||-1!==i.indexOf(","))&&(O=O.join(" ").replace(D,", ").split(" "),C=C.join(" ").replace(D,", ").split(" "),k=O.length),k!==C.length&&(O=(n||"").split(" "),k=O.length),a.plugin=l,a.setRatio=h,fe.lastIndex=0,f=0;k>f;f++)if(p=O[f],d=C[f],x=parseFloat(p),x||0===x)a.appendXtra("",x,se(d,x),d.replace(g,""),R&&-1!==d.indexOf("px"),!0);else if(s&&fe.test(p))P=","===d.charAt(d.length-1)?"),":")",S=-1!==d.indexOf("hsl")&&W,p=he(p,S),d=he(d,S),T=p.length+d.length>6,T&&!W&&0===d[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(C[f]).join("transparent")):(W||(T=!1),S?a.appendXtra(T?"hsla(":"hsl(",p[0],se(d[0],p[0]),",",!1,!0).appendXtra("",p[1],se(d[1],p[1]),"%,",!1).appendXtra("",p[2],se(d[2],p[2]),T?"%,":"%"+P,!1):a.appendXtra(T?"rgba(":"rgb(",p[0],d[0]-p[0],",",!0,!0).appendXtra("",p[1],d[1]-p[1],",",!0).appendXtra("",p[2],d[2]-p[2],T?",":P,!0),T&&(p=4>p.length?1:p[3],a.appendXtra("",p,(4>d.length?1:d[3])-p,P,!1))),fe.lastIndex=0;else if(v=p.match(m)){if(y=d.match(g),!y||y.length!==v.length)return a;for(_=0,c=0;v.length>c;c++)b=v[c],w=p.indexOf(b,_),a.appendXtra(p.substr(_,w-_),Number(b),se(y[c],b),"",R&&"px"===p.substr(w+b.length,2),0===c),_=w+b.length;a["xs"+a.l]+=p.substr(_)}else a["xs"+a.l]+=a.l?" "+p:p;if(-1!==r.indexOf("=")&&a.data){for(P=a.xs0+a.data.s,f=1;a.l>f;f++)P+=a["xs"+f]+a.data["xn"+f];a.e=P+a["xs"+f]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ve=9;for(h=de.prototype,h.l=h.pr=0;--ve>0;)h["xn"+ve]=0,h["xs"+ve]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,r,s,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=r||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=s,a["xn"+o]=e,a.plugin||(a.xfirst=new de(a,"xn"+o,e,i,a.xfirst||a,0,a.n,s,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=s,a)):(a["xs"+o]+=e+(r||""),a)};var ye=function(t,e){e=e||{},this.p=e.prefix?q(t)||t:t,l[t]=l[this.p]=this,this.format=e.formatter||ce(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},xe=E._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var r,s,n=t.split(","),a=e.defaultValue;for(i=i||[a],r=0;n.length>r;r++)e.prefix=0===r&&e.prefix,e.defaultValue=i[r]||a,s=new ye(n[r],e)},Te=function(t){if(!l[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";xe(t,{parser:function(t,i,r,s,n,a,h){var u=o.com.greensock.plugins[e];return u?(u._cssRegister(),l[r].parse(t,i,r,s,n,a,h)):(j("Error: "+e+" js file not loaded."),n)}})}};h=ye.prototype,h.parseComplex=function(t,e,i,r,s,n){var a,o,l,h,u,f,c=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),l=i.replace(D,"|").split("|")):c&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;h>a;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,c&&(u=e.indexOf(c),f=i.indexOf(c),u!==f&&(-1===f?o[a]=o[a].split(c).join(""):-1===u&&(o[a]+=" "+c)));e=o.join(", "),i=l.join(", ")}return ge(t,this.p,e,i,this.clrs,this.dflt,r,this.pr,s,n)},h.parse=function(t,e,i,r,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,s,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){xe(t,{parser:function(t,r,s,n,a,o){var l=new de(t,s,0,0,a,2,s,!1,i);return l.plugin=o,l.setRatio=e(t,r,n._tween,s),l},priority:i})},a.useSVGTransformAttr=c||_;var we,be="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Pe=q("transform"),Se=G+"transform",Oe=q("transformOrigin"),Ce=null!==q("perspective"),ke=E.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Ce?a.defaultForce3D||"auto":!1},Re=window.SVGElement,Ae=function(t,e,i){var r,s=X.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(r in i)s.setAttributeNS(null,r.replace(n,"$1-$2").toLowerCase(),i[r]);return e.appendChild(s),s},Me=X.documentElement,De=function(){var t,e,i,r=d||/Android/i.test(Y)&&!window.chrome;return X.createElementNS&&!r&&(t=Ae("svg",Me),e=Ae("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().width,e.style[Oe]="50% 50%",e.style[Pe]="scaleX(0.5)",r=i===e.getBoundingClientRect().width&&!(_&&Ce),Me.removeChild(t)),r}(),Le=function(t,e,i,r,s){var n,o,l,h,u,f,c,_,p,d,m,g,v,y,x=t._gsTransform,T=Xe(t,!0);x&&(v=x.xOrigin,y=x.yOrigin),(!r||2>(n=r.split(" ")).length)&&(c=t.getBBox(),e=re(e).split(" "),n=[(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*c.width:parseFloat(e[0]))+c.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*c.height:parseFloat(e[1]))+c.y]),i.xOrigin=h=parseFloat(n[0]),i.yOrigin=u=parseFloat(n[1]),r&&T!==Fe&&(f=T[0],c=T[1],_=T[2],p=T[3],d=T[4],m=T[5],g=f*p-c*_,o=h*(p/g)+u*(-_/g)+(_*m-p*d)/g,l=h*(-c/g)+u*(f/g)-(f*m-c*d)/g,h=i.xOrigin=n[0]=o,u=i.yOrigin=n[1]=l),x&&(s||s!==!1&&a.defaultSmoothOrigin!==!1?(o=h-v,l=u-y,x.xOffset+=o*T[0]+l*T[2]-o,x.yOffset+=o*T[1]+l*T[3]-l):x.xOffset=x.yOffset=0),t.setAttribute("data-svg-origin",n.join(" "))},Ne=function(t){return!!(Re&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Fe=[1,0,0,1,0,0],Xe=function(t,e){var i,r,s,n,a,o=t._gsTransform||new ke,l=1e5;if(Pe?r=Q(t,Se,null,!0):t.currentStyle&&(r=t.currentStyle.filter.match(A),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),o.x||0,o.y||0].join(","):""),i=!r||"none"===r||"matrix(1, 0, 0, 1, 0, 0)"===r,(o.svg||t.getBBox&&Ne(t))&&(i&&-1!==(t.style[Pe]+"").indexOf("matrix")&&(r=t.style[Pe],i=0),s=t.getAttribute("transform"),i&&s&&(-1!==s.indexOf("matrix")?(r=s,i=0):-1!==s.indexOf("translate")&&(r="matrix(1,0,0,1,"+s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return Fe;for(s=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],ve=s.length;--ve>-1;)n=Number(s[ve]),s[ve]=(a=n-(n|=0))?(0|a*l+(0>a?-.5:.5))/l+n:n;return e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s},ze=E.getTransform=function(t,i,r,n){if(t._gsTransform&&r&&!n)return t._gsTransform;var o,l,h,u,f,c,_=r?t._gsTransform||new ke:new ke,p=0>_.scaleX,d=2e-5,m=1e5,g=Ce?parseFloat(Q(t,Oe,i,!1,"0 0 0").split(" ")[2])||_.zOrigin||0:0,v=parseFloat(a.defaultTransformPerspective)||0;if(_.svg=!(!t.getBBox||!Ne(t)),_.svg&&(Le(t,Q(t,Oe,s,!1,"50% 50%")+"",_,t.getAttribute("data-svg-origin")),we=a.useSVGTransformAttr||De),o=Xe(t),o!==Fe){if(16===o.length){var y,x,T,w,b,P=o[0],S=o[1],O=o[2],C=o[3],k=o[4],R=o[5],A=o[6],M=o[7],D=o[8],L=o[9],F=o[10],X=o[12],z=o[13],B=o[14],I=o[11],E=Math.atan2(A,F);_.zOrigin&&(B=-_.zOrigin,X=D*B-o[12],z=L*B-o[13],B=F*B+_.zOrigin-o[14]),_.rotationX=E*N,E&&(w=Math.cos(-E),b=Math.sin(-E),y=k*w+D*b,x=R*w+L*b,T=A*w+F*b,D=k*-b+D*w,L=R*-b+L*w,F=A*-b+F*w,I=M*-b+I*w,k=y,R=x,A=T),E=Math.atan2(D,F),_.rotationY=E*N,E&&(w=Math.cos(-E),b=Math.sin(-E),y=P*w-D*b,x=S*w-L*b,T=O*w-F*b,L=S*b+L*w,F=O*b+F*w,I=C*b+I*w,P=y,S=x,O=T),E=Math.atan2(S,P),_.rotation=E*N,E&&(w=Math.cos(-E),b=Math.sin(-E),P=P*w+k*b,x=S*w+R*b,R=S*-b+R*w,A=O*-b+A*w,S=x),_.rotationX&&Math.abs(_.rotationX)+Math.abs(_.rotation)>359.9&&(_.rotationX=_.rotation=0,_.rotationY+=180),_.scaleX=(0|Math.sqrt(P*P+S*S)*m+.5)/m,_.scaleY=(0|Math.sqrt(R*R+L*L)*m+.5)/m,_.scaleZ=(0|Math.sqrt(A*A+F*F)*m+.5)/m,_.skewX=0,_.perspective=I?1/(0>I?-I:I):0,_.x=X,_.y=z,_.z=B,_.svg&&(_.x-=_.xOrigin-(_.xOrigin*P-_.yOrigin*k),_.y-=_.yOrigin-(_.yOrigin*S-_.xOrigin*R))}else if(!(Ce&&!n&&o.length&&_.x===o[4]&&_.y===o[5]&&(_.rotationX||_.rotationY)||void 0!==_.x&&"none"===Q(t,"display",i))){var Y=o.length>=6,W=Y?o[0]:1,V=o[1]||0,j=o[2]||0,G=Y?o[3]:1;_.x=o[4]||0,_.y=o[5]||0,h=Math.sqrt(W*W+V*V),u=Math.sqrt(G*G+j*j),f=W||V?Math.atan2(V,W)*N:_.rotation||0,c=j||G?Math.atan2(j,G)*N+f:_.skewX||0,Math.abs(c)>90&&270>Math.abs(c)&&(p?(h*=-1,c+=0>=f?180:-180,f+=0>=f?180:-180):(u*=-1,c+=0>=c?180:-180)),_.scaleX=h,_.scaleY=u,_.rotation=f,_.skewX=c,Ce&&(_.rotationX=_.rotationY=_.z=0,_.perspective=v,_.scaleZ=1),_.svg&&(_.x-=_.xOrigin-(_.xOrigin*W+_.yOrigin*j),_.y-=_.yOrigin-(_.xOrigin*V+_.yOrigin*G))}_.zOrigin=g;for(l in _)d>_[l]&&_[l]>-d&&(_[l]=0)}return r&&(t._gsTransform=_,_.svg&&(we&&t.style[Pe]?e.delayedCall(.001,function(){Ye(t.style,Pe)}):!we&&t.getAttribute("transform")&&e.delayedCall(.001,function(){t.removeAttribute("transform")}))),_},Be=function(t){var e,i,r=this.data,s=-r.rotation*L,n=s+r.skewX*L,a=1e5,o=(0|Math.cos(s)*r.scaleX*a)/a,l=(0|Math.sin(s)*r.scaleX*a)/a,h=(0|Math.sin(n)*-r.scaleY*a)/a,u=(0|Math.cos(n)*r.scaleY*a)/a,f=this.t.style,c=this.t.currentStyle;if(c){i=l,l=-h,h=-i,e=c.filter,f.filter="";var _,p,m=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==c.position,y="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+u,w=r.x+m*r.xPercent/100,b=r.y+g*r.yPercent/100;if(null!=r.ox&&(_=(r.oxp?.01*m*r.ox:r.ox)-m/2,p=(r.oyp?.01*g*r.oy:r.oy)-g/2,w+=_-(_*o+p*l),b+=p-(_*h+p*u)),v?(_=m/2,p=g/2,y+=", Dx="+(_-(_*o+p*l)+w)+", Dy="+(p-(_*h+p*u)+b)+")"):y+=", sizingMethod='auto expand')",f.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(M,y):y+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===u&&(v&&-1===y.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&f.removeAttribute("filter")),!v){var P,S,O,C=8>d?1:-1;for(_=r.ieOffsetX||0,p=r.ieOffsetY||0,r.ieOffsetX=Math.round((m-((0>o?-o:o)*m+(0>l?-l:l)*g))/2+w),r.ieOffsetY=Math.round((g-((0>u?-u:u)*g+(0>h?-h:h)*m))/2+b),ve=0;4>ve;ve++)S=ee[ve],P=c[S],i=-1!==P.indexOf("px")?parseFloat(P):Z(this.t,S,parseFloat(P),P.replace(x,""))||0,O=i!==r[S]?2>ve?-r.ieOffsetX:-r.ieOffsetY:2>ve?_-r.ieOffsetX:p-r.ieOffsetY,f[S]=(r[S]=Math.round(i-O*(0===ve||2===ve?1:C)))+"px"}}},Ie=E.set3DTransformRatio=E.setTransformRatio=function(t){var e,i,r,s,n,a,o,l,h,u,f,c,p,d,m,g,v,y,x,T,w,b,P,S=this.data,O=this.t.style,C=S.rotation,k=S.rotationX,R=S.rotationY,A=S.scaleX,M=S.scaleY,D=S.scaleZ,N=S.x,F=S.y,X=S.z,z=S.svg,B=S.perspective,I=S.force3D;if(!(((1!==t&&0!==t||"auto"!==I||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&I||X||B||R||k)&&(!we||!z)&&Ce))return C||S.skewX||z?(C*=L,b=S.skewX*L,P=1e5,e=Math.cos(C)*A,s=Math.sin(C)*A,i=Math.sin(C-b)*-M,n=Math.cos(C-b)*M,b&&"simple"===S.skewType&&(v=Math.tan(b),v=Math.sqrt(1+v*v),i*=v,n*=v,S.skewY&&(e*=v,s*=v)),z&&(N+=S.xOrigin-(S.xOrigin*e+S.yOrigin*i)+S.xOffset,F+=S.yOrigin-(S.xOrigin*s+S.yOrigin*n)+S.yOffset,we&&(S.xPercent||S.yPercent)&&(d=this.t.getBBox(),N+=.01*S.xPercent*d.width,F+=.01*S.yPercent*d.height),d=1e-6,d>N&&N>-d&&(N=0),d>F&&F>-d&&(F=0)),x=(0|e*P)/P+","+(0|s*P)/P+","+(0|i*P)/P+","+(0|n*P)/P+","+N+","+F+")",z&&we?this.t.setAttribute("transform","matrix("+x):O[Pe]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+x):O[Pe]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+A+",0,0,"+M+","+N+","+F+")",void 0;if(_&&(d=1e-4,d>A&&A>-d&&(A=D=2e-5),d>M&&M>-d&&(M=D=2e-5),!B||S.z||S.rotationX||S.rotationY||(B=0)),C||S.skewX)C*=L,m=e=Math.cos(C),g=s=Math.sin(C),S.skewX&&(C-=S.skewX*L,m=Math.cos(C),g=Math.sin(C),"simple"===S.skewType&&(v=Math.tan(S.skewX*L),v=Math.sqrt(1+v*v),m*=v,g*=v,S.skewY&&(e*=v,s*=v))),i=-g,n=m;else{if(!(R||k||1!==D||B||z))return O[Pe]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) translate3d(":"translate3d(")+N+"px,"+F+"px,"+X+"px)"+(1!==A||1!==M?" scale("+A+","+M+")":""),void 0;e=n=1,i=s=0}h=1,r=a=o=l=u=f=0,c=B?-1/B:0,p=S.zOrigin,d=1e-6,T=",",w="0",C=R*L,C&&(m=Math.cos(C),g=Math.sin(C),o=-g,u=c*-g,r=e*g,a=s*g,h=m,c*=m,e*=m,s*=m),C=k*L,C&&(m=Math.cos(C),g=Math.sin(C),v=i*m+r*g,y=n*m+a*g,l=h*g,f=c*g,r=i*-g+r*m,a=n*-g+a*m,h*=m,c*=m,i=v,n=y),1!==D&&(r*=D,a*=D,h*=D,c*=D),1!==M&&(i*=M,n*=M,l*=M,f*=M),1!==A&&(e*=A,s*=A,o*=A,u*=A),(p||z)&&(p&&(N+=r*-p,F+=a*-p,X+=h*-p+p),z&&(N+=S.xOrigin-(S.xOrigin*e+S.yOrigin*i)+S.xOffset,F+=S.yOrigin-(S.xOrigin*s+S.yOrigin*n)+S.yOffset),d>N&&N>-d&&(N=w),d>F&&F>-d&&(F=w),d>X&&X>-d&&(X=0)),x=S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix3d(":"matrix3d(",x+=(d>e&&e>-d?w:e)+T+(d>s&&s>-d?w:s)+T+(d>o&&o>-d?w:o),x+=T+(d>u&&u>-d?w:u)+T+(d>i&&i>-d?w:i)+T+(d>n&&n>-d?w:n),k||R?(x+=T+(d>l&&l>-d?w:l)+T+(d>f&&f>-d?w:f)+T+(d>r&&r>-d?w:r),x+=T+(d>a&&a>-d?w:a)+T+(d>h&&h>-d?w:h)+T+(d>c&&c>-d?w:c)+T):x+=",0,0,0,0,1,0,",x+=N+T+F+T+X+T+(B?1+-X/B:1)+")",O[Pe]=x};h=ke.prototype,h.x=h.y=h.z=h.skewX=h.skewY=h.rotation=h.rotationX=h.rotationY=h.zOrigin=h.xPercent=h.yPercent=h.xOffset=h.yOffset=0,h.scaleX=h.scaleY=h.scaleZ=1,xe("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,i,r,n,o,l){if(r._lastParsedTransform===l)return n;r._lastParsedTransform=l;var h,u,f,c,_,p,d,m,g,v,y=t._gsTransform,x=t.style,T=1e-6,w=be.length,b=l,P={},S="transformOrigin";if(l.display?(c=Q(t,"display"),x.display="block",h=ze(t,s,!0,l.parseTransform),x.display=c):h=ze(t,s,!0,l.parseTransform),r._transform=h,"string"==typeof b.transform&&Pe)c=B.style,c[Pe]=b.transform,c.display="block",c.position="absolute",X.body.appendChild(B),u=ze(B,null,!1),X.body.removeChild(B),u.perspective||(u.perspective=h.perspective),null!=b.xPercent&&(u.xPercent=ne(b.xPercent,h.xPercent)),null!=b.yPercent&&(u.yPercent=ne(b.yPercent,h.yPercent));else if("object"==typeof b){if(u={scaleX:ne(null!=b.scaleX?b.scaleX:b.scale,h.scaleX),scaleY:ne(null!=b.scaleY?b.scaleY:b.scale,h.scaleY),scaleZ:ne(b.scaleZ,h.scaleZ),x:ne(b.x,h.x),y:ne(b.y,h.y),z:ne(b.z,h.z),xPercent:ne(b.xPercent,h.xPercent),yPercent:ne(b.yPercent,h.yPercent),perspective:ne(b.transformPerspective,h.perspective)},m=b.directionalRotation,null!=m)if("object"==typeof m)for(c in m)b[c]=m[c];else b.rotation=m;"string"==typeof b.x&&-1!==b.x.indexOf("%")&&(u.x=0,u.xPercent=ne(b.x,h.xPercent)),"string"==typeof b.y&&-1!==b.y.indexOf("%")&&(u.y=0,u.yPercent=ne(b.y,h.yPercent)),u.rotation=ae("rotation"in b?b.rotation:"shortRotation"in b?b.shortRotation+"_short":"rotationZ"in b?b.rotationZ:h.rotation,h.rotation,"rotation",P),Ce&&(u.rotationX=ae("rotationX"in b?b.rotationX:"shortRotationX"in b?b.shortRotationX+"_short":h.rotationX||0,h.rotationX,"rotationX",P),u.rotationY=ae("rotationY"in b?b.rotationY:"shortRotationY"in b?b.shortRotationY+"_short":h.rotationY||0,h.rotationY,"rotationY",P)),u.skewX=null==b.skewX?h.skewX:ae(b.skewX,h.skewX),u.skewY=null==b.skewY?h.skewY:ae(b.skewY,h.skewY),(f=u.skewY-h.skewY)&&(u.skewX+=f,u.rotation+=f)}for(Ce&&null!=b.force3D&&(h.force3D=b.force3D,d=!0),h.skewType=b.skewType||h.skewType||a.defaultSkewType,p=h.force3D||h.z||h.rotationX||h.rotationY||u.z||u.rotationX||u.rotationY||u.perspective,p||null==b.scale||(u.scaleZ=1);--w>-1;)i=be[w],_=u[i]-h[i],(_>T||-T>_||null!=b[i]||null!=F[i])&&(d=!0,n=new de(h,i,h[i],_,n),i in P&&(n.e=P[i]),n.xs0=0,n.plugin=o,r._overwriteProps.push(n.n));return _=b.transformOrigin,h.svg&&(_||b.svgOrigin)&&(g=h.xOffset,v=h.yOffset,Le(t,re(_),u,b.svgOrigin,b.smoothOrigin),n=me(h,"xOrigin",(y?h:u).xOrigin,u.xOrigin,n,S),n=me(h,"yOrigin",(y?h:u).yOrigin,u.yOrigin,n,S),(g!==h.xOffset||v!==h.yOffset)&&(n=me(h,"xOffset",y?g:h.xOffset,h.xOffset,n,S),n=me(h,"yOffset",y?v:h.yOffset,h.yOffset,n,S)),_=we?null:"0px 0px"),(_||Ce&&p&&h.zOrigin)&&(Pe?(d=!0,i=Oe,_=(_||Q(t,i,s,!1,"50% 50%"))+"",n=new de(x,i,0,0,n,-1,S),n.b=x[i],n.plugin=o,Ce?(c=h.zOrigin,_=_.split(" "),h.zOrigin=(_.length>2&&(0===c||"0px"!==_[2])?parseFloat(_[2]):c)||0,n.xs0=n.e=_[0]+" "+(_[1]||"50%")+" 0px",n=new de(h,"zOrigin",0,0,n,-1,n.n),n.b=c,n.xs0=n.e=h.zOrigin):n.xs0=n.e=_):re(_+"",h)),d&&(r._transformType=h.svg&&we||!p&&3!==this._transformType?2:3),n},prefix:!0}),xe("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),xe("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,l,h,u,f,c,_,p,d,m,g,v,y,x,T,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(d=parseFloat(t.offsetWidth),m=parseFloat(t.offsetHeight),o=e.split(" "),l=0;b.length>l;l++)this.p.indexOf("border")&&(b[l]=q(b[l])),f=u=Q(t,b[l],s,!1,"0px"),-1!==f.indexOf(" ")&&(u=f.split(" "),f=u[0],u=u[1]),c=h=o[l],_=parseFloat(f),v=f.substr((_+"").length),y="="===c.charAt(1),y?(p=parseInt(c.charAt(0)+"1",10),c=c.substr(2),p*=parseFloat(c),g=c.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(c),g=c.substr((p+"").length)),""===g&&(g=r[i]||v),g!==v&&(x=Z(t,"borderLeft",_,v),T=Z(t,"borderTop",_,v),"%"===g?(f=100*(x/d)+"%",u=100*(T/m)+"%"):"em"===g?(w=Z(t,"borderLeft",1,"em"),f=x/w+"em",u=T/w+"em"):(f=x+"px",u=T+"px"),y&&(c=parseFloat(f)+p+g,h=parseFloat(u)+p+g)),a=ge(P,b[l],f+" "+u,c+" "+h,!1,"0px",a);return a},prefix:!0,formatter:ce("0px 0px 0px 0px",!1,!0)}),xe("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,r,n,a){var o,l,h,u,f,c,_="background-position",p=s||H(t,null),m=this.format((p?d?p.getPropertyValue(_+"-x")+" "+p.getPropertyValue(_+"-y"):p.getPropertyValue(_):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==m.indexOf("%")!=(-1!==g.indexOf("%"))&&(c=Q(t,"backgroundImage").replace(C,""),c&&"none"!==c)){for(o=m.split(" "),l=g.split(" "),I.setAttribute("src",c),h=2;--h>-1;)m=o[h],u=-1!==m.indexOf("%"),u!==(-1!==l[h].indexOf("%"))&&(f=0===h?t.offsetWidth-I.width:t.offsetHeight-I.height,o[h]=u?parseFloat(m)/100*f+"px":100*(parseFloat(m)/f)+"%");m=o.join(" ")}return this.parseComplex(t.style,m,g,n,a)},formatter:re}),xe("backgroundSize",{defaultValue:"0 0",formatter:re}),xe("perspective",{defaultValue:"0px",prefix:!0}),xe("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),xe("transformStyle",{prefix:!0}),xe("backfaceVisibility",{prefix:!0}),xe("userSelect",{prefix:!0}),xe("margin",{parser:_e("marginTop,marginRight,marginBottom,marginLeft")}),xe("padding",{parser:_e("paddingTop,paddingRight,paddingBottom,paddingLeft")}),xe("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,r,n,a){var o,l,h;return 9>d?(l=t.currentStyle,h=8>d?" ":",",o="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(o=this.format(Q(t,this.p,s,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),xe("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),xe("autoRound,strictUnits",{parser:function(t,e,i,r,s){return s}}),xe("border",{defaultValue:"0px solid #000",parser:function(t,e,i,r,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",s,!1,"0px")+" "+Q(t,"borderTopStyle",s,!1,"solid")+" "+Q(t,"borderTopColor",s,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(fe)||["#000"])[0]}}),xe("borderWidth",{parser:_e("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),xe("float,cssFloat,styleFloat",{parser:function(t,e,i,r,s){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new de(n,a,0,0,s,-1,i,!1,0,n[a],e)}});var Ee=function(t){var e,i=this.t,r=i.filter||Q(this.data,"filter")||"",s=0|this.s+this.c*t;100===s&&(-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")&&-1===r.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=r.replace(b,""),e=!0)),e||(this.xn1&&(i.filter=r=r||"alpha(opacity="+s+")"),-1===r.indexOf("pacity")?0===s&&this.xn1||(i.filter=r+" alpha(opacity="+s+")"):i.filter=r.replace(T,"opacity="+s))};xe("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,r,n,a){var o=parseFloat(Q(t,"opacity",s,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),h&&1===o&&"hidden"===Q(t,"visibility",s)&&0!==e&&(o=0),W?n=new de(l,"opacity",o,e-o,n):(n=new de(l,"opacity",100*o,100*(e-o),n),n.xn1=h?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Ee),h&&(n=new de(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",r._overwriteProps.push(n.n),r._overwriteProps.push(i)),n}});var Ye=function(t,e){e&&(t.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),t.removeProperty(e.replace(S,"-$1").toLowerCase())):t.removeAttribute(e))},We=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ye(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};xe("className",{parser:function(t,e,r,n,a,o,l){var h,u,f,c,_,p=t.getAttribute("class")||"",d=t.style.cssText;if(a=n._classNamePT=new de(t,r,0,0,a,2),a.setRatio=We,a.pr=-11,i=!0,a.b=p,u=K(t,s),f=t._gsClassPT){for(c={},_=f.data;_;)c[_.p]=1,_=_._next;
f.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:p.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",a.e),h=J(t,u,K(t),l,c),t.setAttribute("class",p),a.data=h.firstMPT,t.style.cssText=d,a=a.xfirst=n.parse(t,h.difs,a,o)}});var Ve=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,r,s,n,a=this.t.style,o=l.transform.parse;if("all"===this.e)a.cssText="",s=!0;else for(e=this.e.split(" ").join("").split(","),r=e.length;--r>-1;)i=e[r],l[i]&&(l[i].parse===o?s=!0:i="transformOrigin"===i?Oe:l[i].p),Ye(a,i);s&&(Ye(a,Pe),n=this.t._gsTransform,n&&(n.svg&&this.t.removeAttribute("data-svg-origin"),delete this.t._gsTransform))}};for(xe("clearProps",{parser:function(t,e,r,s,n){return n=new de(t,r,0,0,n,2),n.setRatio=Ve,n.e=e,n.pr=-10,n.data=s._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),ve=h.length;ve--;)Te(h[ve]);h=a.prototype,h._firstPT=h._lastParsedTransform=h._transform=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,u=e.autoRound,i=!1,r=e.suffixMap||a.suffixMap,s=H(t,""),n=this._overwriteProps;var h,_,d,m,g,v,y,x,T,b=t.style;if(f&&""===b.zIndex&&(h=Q(t,"zIndex",s),("auto"===h||""===h)&&this._addLazySet(b,"zIndex",0)),"string"==typeof e&&(m=b.cssText,h=K(t,s),b.cssText=m+";"+e,h=J(t,h,K(t)).difs,!W&&w.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,b.cssText=m),this._firstPT=_=e.className?l.className.parse(t,e.className,"className",this,null,null,e):this.parse(t,e,null),this._transformType){for(T=3===this._transformType,Pe?c&&(f=!0,""===b.zIndex&&(y=Q(t,"zIndex",s),("auto"===y||""===y)&&this._addLazySet(b,"zIndex",0)),p&&this._addLazySet(b,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):b.zoom=1,d=_;d&&d._next;)d=d._next;x=new de(t,"transform",0,0,null,2),this._linkCSSP(x,null,d),x.setRatio=Pe?Ie:Be,x.data=this._transform||ze(t,s,!0),x.tween=o,x.pr=-1,n.pop()}if(i){for(;_;){for(v=_._next,d=m;d&&d.pr>_.pr;)d=d._next;(_._prev=d?d._prev:g)?_._prev._next=_:m=_,(_._next=d)?d._prev=_:g=_,_=v}this._firstPT=m}return!0},h.parse=function(t,e,i,n){var a,o,h,f,c,_,p,d,m,g,v=t.style;for(a in e)_=e[a],o=l[a],o?i=o.parse(t,_,a,this,i,n,e):(c=Q(t,a,s)+"",m="string"==typeof _,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||m&&P.test(_)?(m||(_=he(_),_=(_.length>3?"rgba(":"rgb(")+_.join(",")+")"),i=ge(v,a,c,_,!0,"transparent",i,0,n)):!m||-1===_.indexOf(" ")&&-1===_.indexOf(",")?(h=parseFloat(c),p=h||0===h?c.substr((h+"").length):"",(""===c||"auto"===c)&&("width"===a||"height"===a?(h=ie(t,a,s),p="px"):"left"===a||"top"===a?(h=$(t,a,s),p="px"):(h="opacity"!==a?0:1,p="")),g=m&&"="===_.charAt(1),g?(f=parseInt(_.charAt(0)+"1",10),_=_.substr(2),f*=parseFloat(_),d=_.replace(x,"")):(f=parseFloat(_),d=m?_.replace(x,""):""),""===d&&(d=a in r?r[a]:p),_=f||0===f?(g?f+h:f)+d:e[a],p!==d&&""!==d&&(f||0===f)&&h&&(h=Z(t,a,h,p),"%"===d?(h/=Z(t,a,100,"%")/100,e.strictUnits!==!0&&(c=h+"%")):"em"===d||"rem"===d?h/=Z(t,a,1,d):"px"!==d&&(f=Z(t,a,f,d),d="px"),g&&(f||0===f)&&(_=f+h+d)),g&&(f+=h),!h&&0!==h||!f&&0!==f?void 0!==v[a]&&(_||"NaN"!=_+""&&null!=_)?(i=new de(v,a,f||h||0,0,i,-1,a,!1,0,c,_),i.xs0="none"!==_||"display"!==a&&-1===a.indexOf("Style")?_:c):j("invalid "+a+" tween value: "+e[a]):(i=new de(v,a,h,f-h,i,0,a,u!==!1&&("px"===d||"zIndex"===a),0,c,_),i.xs0=d)):i=ge(v,a,c,_,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},h.setRatio=function(t){var e,i,r,s=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;s;){if(e=s.c*t+s.s,s.r?e=Math.round(e):n>e&&e>-n&&(e=0),s.type)if(1===s.type)if(r=s.l,2===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2;else if(3===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3;else if(4===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4;else if(5===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4+s.xn4+s.xs5;else{for(i=s.xs0+e+s.xs1,r=1;s.l>r;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}else-1===s.type?s.t[s.p]=s.xs0:s.setRatio&&s.setRatio(t);else s.t[s.p]=e+s.xs0;s=s._next}else for(;s;)2!==s.type?s.t[s.p]=s.b:s.setRatio(t),s=s._next;else for(;s;){if(2!==s.type)if(s.r&&-1!==s.type)if(e=Math.round(s.s+s.c),s.type){if(1===s.type){for(r=s.l,i=s.xs0+e+s.xs1,r=1;s.l>r;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}}else s.t[s.p]=e+s.xs0;else s.t[s.p]=s.e;else s.setRatio(t);s=s._next}},h._enableTransforms=function(t){this._transform=this._transform||ze(this._target,s,!0),this._transformType=this._transform.svg&&we||!t&&3!==this._transformType?2:3};var je=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};h._addLazySet=function(t,e,i){var r=this._firstPT=new de(t,e,0,0,this._firstPT,2);r.e=i,r.setRatio=je,r.data=this},h._linkCSSP=function(t,e,i,r){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,r=!0),i?i._next=t:r||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._kill=function(e){var i,r,s,n=e;if(e.autoAlpha||e.alpha){n={};for(r in e)n[r]=e[r];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(s=i.xfirst,s&&s._prev?this._linkCSSP(s._prev,i._next,s._prev._prev):s===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,s._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Ge=function(t,e,i){var r,s,n,a;if(t.slice)for(s=t.length;--s>-1;)Ge(t[s],e,i);else for(r=t.childNodes,s=r.length;--s>-1;)n=r[s],a=n.type,n.style&&(e.push(K(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Ge(n,e,i)};return a.cascadeTo=function(t,i,r){var s,n,a,o,l=e.to(t,i,r),h=[l],u=[],f=[],c=[],_=e._internals.reservedProps;for(t=l._targets||l.target,Ge(t,u,c),l.render(i,!0,!0),Ge(t,f),l.render(0,!0,!0),l._enabled(!0),s=c.length;--s>-1;)if(n=J(c[s],u[s],f[s]),n.firstMPT){n=n.difs;for(a in r)_[a]&&(n[a]=r[a]);o={};for(a in n)o[a]=u[s][a];h.push(e.fromTo(c[s],i,o,n))}return h},t.activate([a]),a},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=e())}("CSSPlugin");


/*!
 * VERSION: beta 0.3.4
 * DATE: 2015-08-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(function(t){"use strict";var e=t.GreenSockGlobals||t,i=function(t){var i,s=t.split("."),r=e;for(i=0;s.length>i;i++)r[s[i]]=r=r[s[i]]||{};return r},s=i("com.greensock.utils"),r=function(t){var e=t.nodeType,i="";if(1===e||9===e||11===e){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=r(t)}else if(3===e||4===e)return t.nodeValue;return i},n=document,a=n.defaultView?n.defaultView.getComputedStyle:function(){},o=/([A-Z])/g,l=function(t,e,i,s){var r;return(i=i||a(t,null))?(t=i.getPropertyValue(e.replace(o,"-$1").toLowerCase()),r=t||i.length?t:i[e]):t.currentStyle&&(i=t.currentStyle,r=i[e]),s?r:parseInt(r,10)||0},h=function(t){return t.length&&t[0]&&(t[0].nodeType&&t[0].style&&!t.nodeType||t[0].length&&t[0][0])?!0:!1},_=function(t){var e,i,s,r=[],n=t.length;for(e=0;n>e;e++)if(i=t[e],h(i))for(s=i.length,s=0;i.length>s;s++)r.push(i[s]);else r.push(i);return r},u=")eefec303079ad17405c",c=/(?:<br>|<br\/>|<br \/>)/gi,f=n.all&&!n.addEventListener,p="<div style='position:relative;display:inline-block;"+(f?"*display:inline;*zoom:1;'":"'"),m=function(t){t=t||"";var e=-1!==t.indexOf("++"),i=1;return e&&(t=t.split("++").join("")),function(){return p+(t?" class='"+t+(e?i++:"")+"'>":">")}},d=s.SplitText=e.SplitText=function(t,e){if("string"==typeof t&&(t=d.selector(t)),!t)throw"cannot split a null element.";this.elements=h(t)?_(t):[t],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=e||{},this.split(e)},g=function(t,e,i){var s=t.nodeType;if(1===s||9===s||11===s)for(t=t.firstChild;t;t=t.nextSibling)g(t,e,i);else(3===s||4===s)&&(t.nodeValue=t.nodeValue.split(e).join(i))},v=function(t,e){for(var i=e.length;--i>-1;)t.push(e[i])},y=function(t,e,i,s,o){c.test(t.innerHTML)&&(t.innerHTML=t.innerHTML.replace(c,u));var h,_,f,p,d,y,T,w,b,x,P,S,k,C,R=r(t),O=e.type||e.split||"chars,words,lines",A=-1!==O.indexOf("lines")?[]:null,D=-1!==O.indexOf("words"),M=-1!==O.indexOf("chars"),L="absolute"===e.position||e.absolute===!0,F=L?"&#173; ":" ",z=-999,I=a(t),E=l(t,"paddingLeft",I),N=l(t,"borderBottomWidth",I)+l(t,"borderTopWidth",I),X=l(t,"borderLeftWidth",I)+l(t,"borderRightWidth",I),B=l(t,"paddingTop",I)+l(t,"paddingBottom",I),j=l(t,"paddingLeft",I)+l(t,"paddingRight",I),U=l(t,"textAlign",I,!0),Y=t.clientHeight,q=t.clientWidth,V="</div>",G=m(e.wordsClass),Q=m(e.charsClass),W=-1!==(e.linesClass||"").indexOf("++"),Z=e.linesClass,H=-1!==R.indexOf("<"),$=!0,K=[],J=[],te=[];for(W&&(Z=Z.split("++").join("")),H&&(R=R.split("<").join("{{LT}}")),h=R.length,p=G(),d=0;h>d;d++)if(T=R.charAt(d),")"===T&&R.substr(d,20)===u)p+=($?V:"")+"<BR/>",$=!1,d!==h-20&&R.substr(d+20,20)!==u&&(p+=" "+G(),$=!0),d+=19;else if(" "===T&&" "!==R.charAt(d-1)&&d!==h-1&&R.substr(d-20,20)!==u){for(p+=$?V:"",$=!1;" "===R.charAt(d+1);)p+=F,d++;(")"!==R.charAt(d+1)||R.substr(d+1,20)!==u)&&(p+=F+G(),$=!0)}else"{"===T&&"{{LT}}"===R.substr(d,6)?(p+=M?Q()+"{{LT}}"+"</div>":"{{LT}}",d+=5):p+=M&&" "!==T?Q()+T+"</div>":T;for(t.innerHTML=p+($?V:""),H&&g(t,"{{LT}}","<"),y=t.getElementsByTagName("*"),h=y.length,w=[],d=0;h>d;d++)w[d]=y[d];if(A||L)for(d=0;h>d;d++)b=w[d],f=b.parentNode===t,(f||L||M&&!D)&&(x=b.offsetTop,A&&f&&x!==z&&"BR"!==b.nodeName&&(_=[],A.push(_),z=x),L&&(b._x=b.offsetLeft,b._y=x,b._w=b.offsetWidth,b._h=b.offsetHeight),A&&(D!==f&&M||(_.push(b),b._x-=E),f&&d&&(w[d-1]._wordEnd=!0),"BR"===b.nodeName&&b.nextSibling&&"BR"===b.nextSibling.nodeName&&A.push([])));for(d=0;h>d;d++)b=w[d],f=b.parentNode===t,"BR"!==b.nodeName?(L&&(S=b.style,D||f||(b._x+=b.parentNode._x,b._y+=b.parentNode._y),S.left=b._x+"px",S.top=b._y+"px",S.position="absolute",S.display="block",S.width=b._w+1+"px",S.height=b._h+"px"),D?f&&""!==b.innerHTML?J.push(b):M&&K.push(b):f?(t.removeChild(b),w.splice(d--,1),h--):!f&&M&&(x=!A&&!L&&b.nextSibling,t.appendChild(b),x||t.appendChild(n.createTextNode(" ")),K.push(b))):A||L?(t.removeChild(b),w.splice(d--,1),h--):D||t.appendChild(b);if(A){for(L&&(P=n.createElement("div"),t.appendChild(P),k=P.offsetWidth+"px",x=P.offsetParent===t?0:t.offsetLeft,t.removeChild(P)),S=t.style.cssText,t.style.cssText="display:none;";t.firstChild;)t.removeChild(t.firstChild);for(C=!L||!D&&!M,d=0;A.length>d;d++){for(_=A[d],P=n.createElement("div"),P.style.cssText="display:block;text-align:"+U+";position:"+(L?"absolute;":"relative;"),Z&&(P.className=Z+(W?d+1:"")),te.push(P),h=_.length,y=0;h>y;y++)"BR"!==_[y].nodeName&&(b=_[y],P.appendChild(b),C&&(b._wordEnd||D)&&P.appendChild(n.createTextNode(" ")),L&&(0===y&&(P.style.top=b._y+"px",P.style.left=E+x+"px"),b.style.top="0px",x&&(b.style.left=b._x-x+"px")));0===h&&(P.innerHTML="&nbsp;"),D||M||(P.innerHTML=r(P).split(String.fromCharCode(160)).join(" ")),L&&(P.style.width=k,P.style.height=b._h+"px"),t.appendChild(P)}t.style.cssText=S}L&&(Y>t.clientHeight&&(t.style.height=Y-B+"px",Y>t.clientHeight&&(t.style.height=Y+N+"px")),q>t.clientWidth&&(t.style.width=q-j+"px",q>t.clientWidth&&(t.style.width=q+X+"px"))),v(i,K),v(s,J),v(o,te)},T=d.prototype;T.split=function(t){this.isSplit&&this.revert(),this.vars=t||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var e=this.elements.length;--e>-1;)this._originals[e]=this.elements[e].innerHTML,y(this.elements[e],this.vars,this.chars,this.words,this.lines);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},T.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var t=this._originals.length;--t>-1;)this.elements[t].innerHTML=this._originals[t];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},d.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(d.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)},d.version="0.3.4"})(_gsScope),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(module.exports=e())}("SplitText");


try{
	window.GreenSockGlobals = null;
	window._gsQueue = null;
	window._gsDefine = null;

	delete(window.GreenSockGlobals);
	delete(window._gsQueue);
	delete(window._gsDefine);	
   } catch(e) {}

try{
	window.GreenSockGlobals = oldgs;
	window._gsQueue = oldgs_queue;
	} catch(e) {}

if (window.tplogs==true)
	try {
		console.groupEnd();
	} catch(e) {}

(function(e,t){
		e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return true}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};		
})(jQuery)

/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 5.2.4 (25.03.2016)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/
!function(jQuery,undefined){"use strict";jQuery.fn.extend({revolution:function(e){var t={delay:9e3,responsiveLevels:4064,visibilityLevels:[2048,1024,778,480],gridwidth:960,gridheight:500,minHeight:0,autoHeight:"off",sliderType:"standard",sliderLayout:"auto",fullScreenAutoWidth:"off",fullScreenAlignForce:"off",fullScreenOffsetContainer:"",fullScreenOffset:"0",hideCaptionAtLimit:0,hideAllCaptionAtLimit:0,hideSliderAtLimit:0,disableProgressBar:"off",stopAtSlide:-1,stopAfterLoops:-1,shadow:0,dottedOverlay:"none",startDelay:0,lazyType:"smart",spinner:"spinner0",shuffle:"off",viewPort:{enable:!1,outof:"wait",visible_area:"60%"},fallbacks:{isJoomla:!1,panZoomDisableOnMobile:"off",simplifyAll:"on",nextSlideOnWindowFocus:"off",disableFocusListener:!0},parallax:{type:"off",levels:[10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],origo:"enterpoint",speed:400,bgparallax:"off",opacity:"on",disable_onmobile:"off",ddd_shadow:"on",ddd_bgfreeze:"off",ddd_overflow:"visible",ddd_layer_overflow:"visible",ddd_z_correction:65,ddd_path:"mouse"},carousel:{horizontal_align:"center",vertical_align:"center",infinity:"on",space:0,maxVisibleItems:3,stretch:"off",fadeout:"on",maxRotation:0,minScale:0,vary_fade:"off",vary_rotation:"on",vary_scale:"off",border_radius:"0px",padding_top:0,padding_bottom:0},navigation:{keyboardNavigation:"on",keyboard_direction:"horizontal",mouseScrollNavigation:"off",onHoverStop:"on",touch:{touchenabled:"off",swipe_treshold:75,swipe_min_touches:1,drag_block_vertical:!1,swipe_direction:"horizontal"},arrows:{style:"",enable:!1,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,tmp:"",rtl:!1,left:{h_align:"left",v_align:"center",h_offset:20,v_offset:0,container:"slider"},right:{h_align:"right",v_align:"center",h_offset:20,v_offset:0,container:"slider"}},bullets:{container:"slider",rtl:!1,style:"",enable:!1,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",h_align:"left",v_align:"center",space:0,h_offset:20,v_offset:0,tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'},thumbnails:{container:"slider",rtl:!1,style:"",enable:!1,width:100,height:50,min_width:100,wrapper_padding:2,wrapper_color:"#f5f5f5",wrapper_opacity:1,tmp:'<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',visibleAmount:5,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",span:!1,position:"inner",space:2,h_align:"left",v_align:"center",h_offset:20,v_offset:0},tabs:{container:"slider",rtl:!1,style:"",enable:!1,width:100,min_width:100,height:50,wrapper_padding:10,wrapper_color:"#f5f5f5",wrapper_opacity:1,tmp:'<span class="tp-tab-image"></span>',visibleAmount:5,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",span:!1,space:0,position:"inner",h_align:"left",v_align:"center",h_offset:20,v_offset:0}},extensions:"extensions/",extensions_suffix:".min.js",debugMode:!1};return e=jQuery.extend(!0,{},t,e),this.each(function(){var t=jQuery(this);"hero"==e.sliderType&&t.find(">ul>li").each(function(e){e>0&&jQuery(this).remove()}),e.jsFileLocation=e.jsFileLocation||getScriptLocation("themepunch.revolution.min.js"),e.jsFileLocation=e.jsFileLocation+e.extensions,e.scriptsneeded=getNeededScripts(e,t),e.curWinRange=0,e.rtl=!0,e.navigation!=undefined&&e.navigation.touch!=undefined&&(e.navigation.touch.swipe_min_touches=e.navigation.touch.swipe_min_touches>5?1:e.navigation.touch.swipe_min_touches),jQuery(this).on("scriptsloaded",function(){return e.modulesfailing?(t.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.'+e.errorm+"</div>").show(),!1):(_R.migration!=undefined&&(e=_R.migration(t,e)),punchgs.force3D=!0,"on"!==e.simplifyAll&&punchgs.TweenLite.lagSmoothing(1e3,16),prepareOptions(t,e),void initSlider(t,e))}),t.data("opt",e),waitForScripts(t,e)})},revremoveslide:function(e){return this.each(function(){var t=jQuery(this);if(t!=undefined&&t.length>0&&jQuery("body").find("#"+t.attr("id")).length>0){var i=t.parent().find(".tp-bannertimer"),n=i.data("opt");if(n&&n.li.length>0&&(e>0||e<=n.li.length)){var a=jQuery(n.li[e]),r=a.data("index"),o=!1;n.slideamount=n.slideamount-1,removeNavWithLiref(".tp-bullet",r,n),removeNavWithLiref(".tp-tab",r,n),removeNavWithLiref(".tp-thumb",r,n),a.hasClass("active-revslide")&&(o=!0),a.remove(),n.li=removeArray(n.li,e),n.carousel&&n.carousel.slides&&(n.carousel.slides=removeArray(n.carousel.slides,e)),n.thumbs=removeArray(n.thumbs,e),_R.updateNavIndexes&&_R.updateNavIndexes(n),o&&t.revnext()}}})},revaddcallback:function(e){return this.each(function(){var t=jQuery(this);if(t!=undefined&&t.length>0&&jQuery("body").find("#"+t.attr("id")).length>0){var i=t.parent().find(".tp-bannertimer"),n=i.data("opt");n.callBackArray===undefined&&(n.callBackArray=new Array),n.callBackArray.push(e)}})},revgetparallaxproc:function(){var e=jQuery(this);if(e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0){var t=e.parent().find(".tp-bannertimer"),i=t.data("opt");return i.scrollproc}},revdebugmode:function(){return this.each(function(){var e=jQuery(this);if(e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0){var t=e.parent().find(".tp-bannertimer"),i=t.data("opt");i.debugMode=!0,containerResized(e,i)}})},revscroll:function(e){return this.each(function(){var t=jQuery(this);t!=undefined&&t.length>0&&jQuery("body").find("#"+t.attr("id")).length>0&&jQuery("body,html").animate({scrollTop:t.offset().top+t.height()-e+"px"},{duration:400})})},revredraw:function(e){return this.each(function(){var e=jQuery(this);if(e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0){var t=e.parent().find(".tp-bannertimer"),i=t.data("opt");containerResized(e,i)}})},revkill:function(e){var t=this,i=jQuery(this);if(punchgs.TweenLite.killDelayedCallsTo(_R.showHideNavElements),_R.endMoveCaption&&a.endtimeouts&&a.endtimeouts.length>0&&jQuery.each(a.endtimeouts,function(e,t){clearTimeout(t)}),i!=undefined&&i.length>0&&jQuery("body").find("#"+i.attr("id")).length>0){i.data("conthover",1),i.data("conthover-changed",1),i.trigger("revolution.slide.onpause");var n=i.parent().find(".tp-bannertimer"),a=n.data("opt");a.tonpause=!0,i.trigger("stoptimer"),punchgs.TweenLite.killTweensOf(i.find("*"),!1),punchgs.TweenLite.killTweensOf(i,!1),i.unbind("hover, mouseover, mouseenter,mouseleave, resize");var r="resize.revslider-"+i.attr("id");jQuery(window).off(r),i.find("*").each(function(){var e=jQuery(this);e.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"),e.off("on, hover, mouseenter,mouseleave,mouseover, resize"),e.data("mySplitText",null),e.data("ctl",null),e.data("tween")!=undefined&&e.data("tween").kill(),e.data("kenburn")!=undefined&&e.data("kenburn").kill(),e.data("timeline_out")!=undefined&&e.data("timeline_out").kill(),e.data("timeline")!=undefined&&e.data("timeline").kill(),e.remove(),e.empty(),e=null}),punchgs.TweenLite.killTweensOf(i.find("*"),!1),punchgs.TweenLite.killTweensOf(i,!1),n.remove();try{i.closest(".forcefullwidth_wrapper_tp_banner").remove()}catch(o){}try{i.closest(".rev_slider_wrapper").remove()}catch(o){}try{i.remove()}catch(o){}return i.empty(),i.html(),i=null,a=null,delete t.c,delete t.opt,!0}return!1},revpause:function(){return this.each(function(){var e=jQuery(this);if(e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0){e.data("conthover",1),e.data("conthover-changed",1),e.trigger("revolution.slide.onpause");var t=e.parent().find(".tp-bannertimer"),i=t.data("opt");i.tonpause=!0,e.trigger("stoptimer")}})},revresume:function(){return this.each(function(){var e=jQuery(this);if(e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0){e.data("conthover",0),e.data("conthover-changed",1),e.trigger("revolution.slide.onresume");var t=e.parent().find(".tp-bannertimer"),i=t.data("opt");i.tonpause=!1,e.trigger("starttimer")}})},revstart:function(){var e=jQuery(this);return e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0&&e.data("opt")?e.data("opt").sliderisrunning?(console.log("Slider Is Running Already"),!1):(runSlider(e,e.data("opt")),!0):void 0},revnext:function(){return this.each(function(){var e=jQuery(this);if(e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0){var t=e.parent().find(".tp-bannertimer"),i=t.data("opt");_R.callingNewSlide(i,e,1)}})},revprev:function(){return this.each(function(){var e=jQuery(this);if(e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0){var t=e.parent().find(".tp-bannertimer"),i=t.data("opt");_R.callingNewSlide(i,e,-1)}})},revmaxslide:function(){return jQuery(this).find(".tp-revslider-mainul >li").length},revcurrentslide:function(){var e=jQuery(this);if(e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0){var t=e.parent().find(".tp-bannertimer"),i=t.data("opt");return parseInt(i.act,0)+1}},revlastslide:function(){return jQuery(this).find(".tp-revslider-mainul >li").length},revshowslide:function(e){return this.each(function(){var t=jQuery(this);if(t!=undefined&&t.length>0&&jQuery("body").find("#"+t.attr("id")).length>0){var i=t.parent().find(".tp-bannertimer"),n=i.data("opt");_R.callingNewSlide(n,t,"to"+(e-1))}})},revcallslidewithid:function(e){return this.each(function(){var t=jQuery(this);if(t!=undefined&&t.length>0&&jQuery("body").find("#"+t.attr("id")).length>0){var i=t.parent().find(".tp-bannertimer"),n=i.data("opt");_R.callingNewSlide(n,t,e)}})}});var _R=jQuery.fn.revolution;jQuery.extend(!0,_R,{simp:function(e,t,i){var n=Math.abs(e)-Math.floor(Math.abs(e/t))*t;return i?n:0>e?-1*n:n},iOSVersion:function(){var e=!1;return navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)?navigator.userAgent.match(/OS 4_\d like Mac OS X/i)&&(e=!0):e=!1,e},isIE:function(e,t){var i=jQuery('<div style="display:none;"/>').appendTo(jQuery("body"));i.html("<!--[if "+(t||"")+" IE "+(e||"")+"]><a>&nbsp;</a><![endif]-->");var n=i.find("a").length;return i.remove(),n},is_mobile:function(){var e=["android","webos","iphone","ipad","blackberry","Android","webos",,"iPod","iPhone","iPad","Blackberry","BlackBerry"],t=!1;for(var i in e)navigator.userAgent.split(e[i]).length>1&&(t=!0);return t},callBackHandling:function(e,t,i){try{e.callBackArray&&jQuery.each(e.callBackArray,function(e,n){n&&n.inmodule&&n.inmodule===t&&n.atposition&&n.atposition===i&&n.callback&&n.callback.call()})}catch(n){console.log("Call Back Failed")}},get_browser:function(){var e,t=navigator.appName,i=navigator.userAgent,n=i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return n&&null!=(e=i.match(/version\/([\.\d]+)/i))&&(n[2]=e[1]),n=n?[n[1],n[2]]:[t,navigator.appVersion,"-?"],n[0]},get_browser_version:function(){var e,t=navigator.appName,i=navigator.userAgent,n=i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return n&&null!=(e=i.match(/version\/([\.\d]+)/i))&&(n[2]=e[1]),n=n?[n[1],n[2]]:[t,navigator.appVersion,"-?"],n[1]},getHorizontalOffset:function(e,t){var i=gWiderOut(e,".outer-left"),n=gWiderOut(e,".outer-right");switch(t){case"left":return i;case"right":return n;case"both":return i+n}},callingNewSlide:function(e,t,i){var n=t.find(".next-revslide").length>0?t.find(".next-revslide").index():t.find(".processing-revslide").length>0?t.find(".processing-revslide").index():t.find(".active-revslide").index(),a=0;t.find(".next-revslide").removeClass("next-revslide"),t.find(".active-revslide").hasClass("tp-invisible-slide")&&(n=e.last_shown_slide),i&&jQuery.isNumeric(i)||i.match(/to/g)?(1===i||-1===i?(a=n+i,a=0>a?e.slideamount-1:a>=e.slideamount?0:a):(i=jQuery.isNumeric(i)?i:parseInt(i.split("to")[1],0),a=0>i?0:i>e.slideamount-1?e.slideamount-1:i),t.find(".tp-revslider-slidesli:eq("+a+")").addClass("next-revslide")):i&&t.find(".tp-revslider-slidesli").each(function(){var e=jQuery(this);e.data("index")===i&&e.addClass("next-revslide")}),a=t.find(".next-revslide").index(),t.trigger("revolution.nextslide.waiting"),a!==n&&-1!=a?swapSlide(t,e):t.find(".next-revslide").removeClass("next-revslide")},slotSize:function(e,t){t.slotw=Math.ceil(t.width/t.slots),"fullscreen"==t.sliderLayout?t.sloth=Math.ceil(jQuery(window).height()/t.slots):t.sloth=Math.ceil(t.height/t.slots),"on"==t.autoHeight&&e!==undefined&&""!==e&&(t.sloth=Math.ceil(e.height()/t.slots))},setSize:function(e){var t=(e.top_outer||0)+(e.bottom_outer||0),i=parseInt(e.carousel.padding_top||0,0),n=parseInt(e.carousel.padding_bottom||0,0),a=e.gridheight[e.curWinRange];if(e.paddings=e.paddings===undefined?{top:parseInt(e.c.parent().css("paddingTop"),0)||0,bottom:parseInt(e.c.parent().css("paddingBottom"),0)||0}:e.paddings,a=a<e.minHeight?e.minHeight:a,"fullwidth"==e.sliderLayout&&"off"==e.autoHeight&&punchgs.TweenLite.set(e.c,{maxHeight:a+"px"}),e.c.css({marginTop:i,marginBottom:n}),e.width=e.ul.width(),e.height=e.ul.height(),setScale(e),e.height=Math.round(e.gridheight[e.curWinRange]*(e.width/e.gridwidth[e.curWinRange])),e.height>e.gridheight[e.curWinRange]&&"on"!=e.autoHeight&&(e.height=e.gridheight[e.curWinRange]),"fullscreen"==e.sliderLayout||e.infullscreenmode){e.height=e.bw*e.gridheight[e.curWinRange];var r=(e.c.parent().width(),jQuery(window).height());if(e.fullScreenOffsetContainer!=undefined){try{var o=e.fullScreenOffsetContainer.split(",");o&&jQuery.each(o,function(e,t){r=jQuery(t).length>0?r-jQuery(t).outerHeight(!0):r})}catch(s){}try{e.fullScreenOffset.split("%").length>1&&e.fullScreenOffset!=undefined&&e.fullScreenOffset.length>0?r-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:e.fullScreenOffset!=undefined&&e.fullScreenOffset.length>0&&(r-=parseInt(e.fullScreenOffset,0))}catch(s){}}r=r<e.minHeight?e.minHeight:r,r-=t,e.c.parent().height(r),e.c.closest(".rev_slider_wrapper").height(r),e.c.css({height:"100%"}),e.height=r,e.minHeight!=undefined&&e.height<e.minHeight&&(e.height=e.minHeight)}else e.minHeight!=undefined&&e.height<e.minHeight&&(e.height=e.minHeight),e.c.height(e.height);var d={height:i+n+t+e.height+e.paddings.top+e.paddings.bottom};e.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(d),e.c.closest(".rev_slider_wrapper").css(d),setScale(e)},enterInViewPort:function(e){e.waitForCountDown&&(countDown(e.c,e),e.waitForCountDown=!1),e.waitForFirstSlide&&(swapSlide(e.c,e),e.waitForFirstSlide=!1),("playing"==e.sliderlaststatus||e.sliderlaststatus==undefined)&&e.c.trigger("starttimer"),e.lastplayedvideos!=undefined&&e.lastplayedvideos.length>0&&jQuery.each(e.lastplayedvideos,function(t,i){_R.playVideo(i,e)})},leaveViewPort:function(e){e.sliderlaststatus=e.sliderstatus,e.c.trigger("stoptimer"),e.playingvideos!=undefined&&e.playingvideos.length>0&&(e.lastplayedvideos=jQuery.extend(!0,[],e.playingvideos),e.playingvideos&&jQuery.each(e.playingvideos,function(t,i){_R.stopVideo&&_R.stopVideo(i,e)}))},unToggleState:function(e){e!=undefined&&e.length>0&&jQuery.each(e,function(e,t){t.removeClass("rs-toggle-content-active")})},toggleState:function(e){e!=undefined&&e.length>0&&jQuery.each(e,function(e,t){t.addClass("rs-toggle-content-active")})},lastToggleState:function(e){var t=0;return e!=undefined&&e.length>0&&jQuery.each(e,function(e,i){t=i.hasClass("rs-toggle-content-active")}),t}});var _ISM=_R.is_mobile(),removeArray=function(e,t){var i=[];return jQuery.each(e,function(e,n){e!=t&&i.push(n)}),i},removeNavWithLiref=function(e,t,i){i.c.find(e).each(function(){var e=jQuery(this);e.data("liref")===t&&e.remove()})},lAjax=function(e,t){return jQuery("body").data(e)?!1:t.filesystem?(t.errorm===undefined&&(t.errorm="<br>Local Filesystem Detected !<br>Put this to your header:"),console.warn("Local Filesystem detected !"),t.errorm=t.errorm+'<br>&lt;script type="text/javascript" src="'+t.jsFileLocation+e+t.extensions_suffix+'"&gt;&lt;/script&gt;',console.warn(t.jsFileLocation+e+t.extensions_suffix+" could not be loaded !"),console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."),console.log(" "),t.modulesfailing=!0,!1):(jQuery.ajax({url:t.jsFileLocation+e+t.extensions_suffix,dataType:"script",cache:!0,error:function(i){console.warn("Slider Revolution 5.0 Error !"),console.error("Failure at Loading:"+e+t.extensions_suffix+" on Path:"+t.jsFileLocation),console.info(i)}}),void jQuery("body").data(e,!0))},getNeededScripts=function(e,t){var i=new Object,n=e.navigation;return i.kenburns=!1,i.parallax=!1,i.carousel=!1,i.navigation=!1,i.videos=!1,i.actions=!1,i.layeranim=!1,i.migration=!1,t.data("version")&&t.data("version").toString().match(/5./gi)?(t.find("img").each(function(){"on"==jQuery(this).data("kenburns")&&(i.kenburns=!0)}),("carousel"==e.sliderType||"on"==n.keyboardNavigation||"on"==n.mouseScrollNavigation||"on"==n.touch.touchenabled||n.arrows.enable||n.bullets.enable||n.thumbnails.enable||n.tabs.enable)&&(i.navigation=!0),t.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function(){var e=jQuery(this);(e.data("ytid")!=undefined||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&(i.videos=!0),(e.data("vimeoid")!=undefined||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&(i.videos=!0),e.data("actions")!==undefined&&(i.actions=!0),i.layeranim=!0}),t.find("li").each(function(){jQuery(this).data("link")&&jQuery(this).data("link")!=undefined&&(i.layeranim=!0,i.actions=!0)}),!i.videos&&(t.find(".rs-background-video-layer").length>0||t.find(".tp-videolayer").length>0||t.find(".tp-audiolayer")||t.find("iframe").length>0||t.find("video").length>0)&&(i.videos=!0),"carousel"==e.sliderType&&(i.carousel=!0),("off"!==e.parallax.type||e.viewPort.enable||"true"==e.viewPort.enable)&&(i.parallax=!0)):(i.kenburns=!0,i.parallax=!0,i.carousel=!1,i.navigation=!0,i.videos=!0,i.actions=!0,i.layeranim=!0,i.migration=!0),"hero"==e.sliderType&&(i.carousel=!1,i.navigation=!1),window.location.href.match(/file:/gi)&&(i.filesystem=!0,e.filesystem=!0),i.videos&&"undefined"==typeof _R.isVideoPlaying&&lAjax("revolution.extension.video",e),i.carousel&&"undefined"==typeof _R.prepareCarousel&&lAjax("revolution.extension.carousel",e),i.carousel||"undefined"!=typeof _R.animateSlide||lAjax("revolution.extension.slideanims",e),i.actions&&"undefined"==typeof _R.checkActions&&lAjax("revolution.extension.actions",e),i.layeranim&&"undefined"==typeof _R.handleStaticLayers&&lAjax("revolution.extension.layeranimation",e),i.kenburns&&"undefined"==typeof _R.stopKenBurn&&lAjax("revolution.extension.kenburn",e),i.navigation&&"undefined"==typeof _R.createNavigation&&lAjax("revolution.extension.navigation",e),i.migration&&"undefined"==typeof _R.migration&&lAjax("revolution.extension.migration",e),i.parallax&&"undefined"==typeof _R.checkForParallax&&lAjax("revolution.extension.parallax",e),e.addons!=undefined&&e.addons.length>0&&jQuery.each(e.addons,function(t,i){"object"==typeof i&&i.fileprefix!=undefined&&lAjax(i.fileprefix,e)}),i},waitForScripts=function(e,t){var i=!0,n=t.scriptsneeded;t.addons!=undefined&&t.addons.length>0&&jQuery.each(t.addons,function(e,t){"object"==typeof t&&t.init!=undefined&&_R[t.init]===undefined&&(i=!1)}),n.filesystem||"undefined"!=typeof punchgs&&i&&(!n.kenburns||n.kenburns&&"undefined"!=typeof _R.stopKenBurn)&&(!n.navigation||n.navigation&&"undefined"!=typeof _R.createNavigation)&&(!n.carousel||n.carousel&&"undefined"!=typeof _R.prepareCarousel)&&(!n.videos||n.videos&&"undefined"!=typeof _R.resetVideo)&&(!n.actions||n.actions&&"undefined"!=typeof _R.checkActions)&&(!n.layeranim||n.layeranim&&"undefined"!=typeof _R.handleStaticLayers)&&(!n.migration||n.migration&&"undefined"!=typeof _R.migration)&&(!n.parallax||n.parallax&&"undefined"!=typeof _R.checkForParallax)&&(n.carousel||!n.carousel&&"undefined"!=typeof _R.animateSlide)?e.trigger("scriptsloaded"):setTimeout(function(){waitForScripts(e,t)},50)},getScriptLocation=function(e){var t=new RegExp("themepunch.revolution.min.js","gi"),i="";return jQuery("script").each(function(){var e=jQuery(this).attr("src");e&&e.match(t)&&(i=e)}),i=i.replace("jquery.themepunch.revolution.min.js",""),i=i.replace("jquery.themepunch.revolution.js",""),i=i.split("?")[0]},setCurWinRange=function(e,t){var i=9999,n=0,a=0,r=0,o=jQuery(window).width(),s=t&&9999==e.responsiveLevels?e.visibilityLevels:e.responsiveLevels;s&&s.length&&jQuery.each(s,function(e,t){t>o&&(0==n||n>t)&&(i=t,r=e,n=t),o>t&&t>n&&(n=t,a=e)}),i>n&&(r=a),t?e.forcedWinRange=r:e.curWinRange=r},prepareOptions=function(e,t){t.carousel.maxVisibleItems=t.carousel.maxVisibleItems<1?999:t.carousel.maxVisibleItems,t.carousel.vertical_align="top"===t.carousel.vertical_align?"0%":"bottom"===t.carousel.vertical_align?"100%":"50%"},gWiderOut=function(e,t){var i=0;return e.find(t).each(function(){var e=jQuery(this);!e.hasClass("tp-forcenotvisible")&&i<e.outerWidth()&&(i=e.outerWidth())}),i},initSlider=function(container,opt){return container==undefined?!1:(container.data("aimg")!=undefined&&("enabled"==container.data("aie8")&&_R.isIE(8)||"enabled"==container.data("amobile")&&_ISM)&&container.html('<img class="tp-slider-alternative-image" src="'+container.data("aimg")+'">'),container.find(">ul").addClass("tp-revslider-mainul"),opt.c=container,opt.ul=container.find(".tp-revslider-mainul"),opt.ul.find(">li").each(function(e){var t=jQuery(this);"on"==t.data("hideslideonmobile")&&_ISM&&t.remove(),(t.data("invisible")||t.data("invisible")===!0)&&(t.addClass("tp-invisible-slide"),t.appendTo(opt.ul))}),opt.addons!=undefined&&opt.addons.length>0&&jQuery.each(opt.addons,function(i,obj){"object"==typeof obj&&obj.init!=undefined&&_R[obj.init](eval(obj.params))}),opt.cid=container.attr("id"),opt.ul.css({visibility:"visible"}),opt.slideamount=opt.ul.find(">li").not(".tp-invisible-slide").length,opt.slayers=container.find(".tp-static-layers"),void(1!=opt.waitForInit&&(container.data("opt",opt),runSlider(container,opt))))},runSlider=function(e,t){if(t.sliderisrunning=!0,t.ul.find(">li").each(function(e){jQuery(this).data("originalindex",e)}),"on"==t.shuffle){var i=new Object,n=t.ul.find(">li:first-child");i.fstransition=n.data("fstransition"),i.fsmasterspeed=n.data("fsmasterspeed"),i.fsslotamount=n.data("fsslotamount");for(var a=0;a<t.slideamount;a++){var r=Math.round(Math.random()*t.slideamount);t.ul.find(">li:eq("+r+")").prependTo(t.ul)}var o=t.ul.find(">li:first-child");o.data("fstransition",i.fstransition),o.data("fsmasterspeed",i.fsmasterspeed),o.data("fsslotamount",i.fsslotamount),t.li=t.ul.find(">li").not(".tp-invisible-slide")}if(t.allli=t.ul.find(">li"),t.li=t.ul.find(">li").not(".tp-invisible-slide"),t.inli=t.ul.find(">li.tp-invisible-slide"),t.thumbs=new Array,t.slots=4,t.act=-1,t.firststart=1,t.loadqueue=new Array,t.syncload=0,t.conw=e.width(),t.conh=e.height(),t.responsiveLevels.length>1?t.responsiveLevels[0]=9999:t.responsiveLevels=9999,jQuery.each(t.allli,function(e,i){var i=jQuery(i),n=i.find(".rev-slidebg")||i.find("img").first(),a=0;i.addClass("tp-revslider-slidesli"),i.data("index")===undefined&&i.data("index","rs-"+Math.round(999999*Math.random()));var r=new Object;r.params=new Array,r.id=i.data("index"),r.src=i.data("thumb")!==undefined?i.data("thumb"):n.data("lazyload")!==undefined?n.data("lazyload"):n.attr("src"),i.data("title")!==undefined&&r.params.push({from:RegExp("\\{\\{title\\}\\}","g"),to:i.data("title")}),i.data("description")!==undefined&&r.params.push({from:RegExp("\\{\\{description\\}\\}","g"),to:i.data("description")});for(var a=1;10>=a;a++)i.data("param"+a)!==undefined&&r.params.push({from:RegExp("\\{\\{param"+a+"\\}\\}","g"),to:i.data("param"+a)});if(t.thumbs.push(r),i.data("origindex",i.index()),i.data("link")!=undefined){var o=i.data("link"),s=i.data("target")||"_self",d="back"===i.data("slideindex")?0:60,l=i.data("linktoslide"),u=l;l!=undefined&&"next"!=l&&"prev"!=l&&t.allli.each(function(){var e=jQuery(this);e.data("origindex")+1==u&&(l=e.data("index"))}),"slide"!=o&&(l="no");var c='<div class="tp-caption slidelink" style="cursor:pointer;width:100%;height:100%;z-index:'+d+';" data-x="center" data-y="center" data-basealign="slide" ',p="scroll_under"===l?'[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]':"prev"===l?'[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]':"next"===l?'[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]':'[{"event":"click","action":"jumptoslide","slide":"'+l+'","delay":"0.2"}]';c="no"==l?c+' data-start="0">':c+"data-actions='"+p+'\' data-start="0">',c+='<a style="width:100%;height:100%;display:block"',c="slide"!=o?c+' target="'+s+'" href="'+o+'"':c,c+='><span style="width:100%;height:100%;display:block"></span></a></div>',i.append(c)}}),t.rle=t.responsiveLevels.length||1,t.gridwidth=cArray(t.gridwidth,t.rle),t.gridheight=cArray(t.gridheight,t.rle),"on"==t.simplifyAll&&(_R.isIE(8)||_R.iOSVersion())&&(e.find(".tp-caption").each(function(){var e=jQuery(this);e.removeClass("customin customout").addClass("fadein fadeout"),e.data("splitin",""),e.data("speed",400)}),t.allli.each(function(){var e=jQuery(this);e.data("transition","fade"),e.data("masterspeed",500),e.data("slotamount",1);var t=e.find(".rev-slidebg")||e.find(">img").first();t.data("kenburns","off")})),t.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),t.autoHeight="fullscreen"==t.sliderLayout?"on":t.autoHeight,"fullwidth"==t.sliderLayout&&"off"==t.autoHeight&&e.css({maxHeight:t.gridheight[t.curWinRange]+"px"}),"auto"!=t.sliderLayout&&0==e.closest(".forcefullwidth_wrapper_tp_banner").length&&("fullscreen"!==t.sliderLayout||"on"!=t.fullScreenAutoWidth)){var s=e.parent(),d=s.css("marginBottom"),l=s.css("marginTop");d=d===undefined?0:d,l=l===undefined?0:l,s.wrap('<div class="forcefullwidth_wrapper_tp_banner" style="position:relative;width:100%;height:auto;margin-top:'+l+";margin-bottom:"+d+'"></div>'),e.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+e.height()+'px"></div>'),e.parent().css({marginTop:"0px",marginBottom:"0px"}),e.parent().css({position:"absolute"})}if(t.shadow!==undefined&&t.shadow>0&&(e.parent().addClass("tp-shadow"+t.shadow),e.parent().append('<div class="tp-shadowcover"></div>'),e.parent().find(".tp-shadowcover").css({backgroundColor:e.parent().css("backgroundColor"),backgroundImage:e.parent().css("backgroundImage")})),setCurWinRange(t),setCurWinRange(t,!0),!e.hasClass("revslider-initialised")){e.addClass("revslider-initialised"),e.addClass("tp-simpleresponsive"),e.attr("id")==undefined&&e.attr("id","revslider-"+Math.round(1e3*Math.random()+5)),t.firefox13=!1,t.ie=!jQuery.support.opacity,t.ie9=9==document.documentMode,t.origcd=t.delay;var u=jQuery.fn.jquery.split("."),c=parseFloat(u[0]),p=parseFloat(u[1]);parseFloat(u[2]||"0");1==c&&7>p&&e.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+u+" <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"),c>1&&(t.ie=!1);var f=new Object;f.addedyt=0,f.addedvim=0,f.addedvid=0,e.find(".tp-caption, .rs-background-video-layer").each(function(e){var i=jQuery(this),n=i.data("autoplayonlyfirsttime"),a=i.data("autoplay"),r=i.hasClass("tp-audiolayer"),o=i.data("videoloop");i.hasClass("tp-static-layer")&&_R.handleStaticLayers&&_R.handleStaticLayers(i,t);var s=i.data("noposteronmobile")||i.data("noPosterOnMobile")||i.data("posteronmobile")||i.data("posterOnMobile")||i.data("posterOnMObile");i.data("noposteronmobile",s);var d=0;if(i.find("iframe").each(function(){punchgs.TweenLite.set(jQuery(this),{autoAlpha:0}),d++}),d>0&&i.data("iframes",!0),i.hasClass("tp-caption")){var l=i.hasClass("slidelink")?"width:100% !important;height:100% !important;":"";i.wrap('<div class="tp-parallax-wrap" style="'+l+'position:absolute;visibility:hidden"><div class="tp-loop-wrap" style="'+l+'position:absolute;"><div class="tp-mask-wrap" style="'+l+'position:absolute" ></div></div></div>');var u=["pendulum","rotate","slideloop","pulse","wave"],c=i.closest(".tp-loop-wrap");jQuery.each(u,function(e,t){var n=i.find(".rs-"+t),a=n.data()||"";""!=a&&(c.data(a),c.addClass("rs-"+t),n.children(0).unwrap(),i.data("loopanimation","on"))}),punchgs.TweenLite.set(i,{visibility:"hidden"})}var p=i.data("actions");p!==undefined&&_R.checkActions(i,t,p),checkHoverDependencies(i,t),_R.checkVideoApis&&(f=_R.checkVideoApis(i,t,f)),_ISM&&((1==n||"true"==n)&&(i.data("autoplayonlyfirsttime","false"),n=!1),(1==a||"true"==a||"on"==a||"1sttime"==a)&&(i.data("autoplay","off"),a="off")),i.data("videoloop",o),r||1!=n&&"true"!=n&&"1sttime"!=a||"loopandnoslidestop"==o||i.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"),r||1!=a&&"true"!=a&&"on"!=a&&"no1sttime"!=a||"loopandnoslidestop"==o||i.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")}),e.hover(function(){e.trigger("tp-mouseenter"),t.overcontainer=!0},function(){e.trigger("tp-mouseleft"),t.overcontainer=!1}),e.on("mouseover",function(){e.trigger("tp-mouseover"),t.overcontainer=!0}),e.find(".tp-caption video").each(function(e){var t=jQuery(this);t.removeClass("video-js vjs-default-skin"),t.attr("preload",""),t.css({display:"none"})}),"standard"!==t.sliderType&&(t.lazyType="all"),loadImages(e.find(".tp-static-layers"),t,0,!0),waitForCurrentImages(e.find(".tp-static-layers"),t,function(){e.find(".tp-static-layers img").each(function(){var e=jQuery(this),i=e.data("lazyload")!=undefined?e.data("lazyload"):e.attr("src"),n=getLoadObj(t,i);e.attr("src",n.src)})}),t.allli.each(function(e){var i=jQuery(this);("all"==t.lazyType||"smart"==t.lazyType&&(0==e||1==e||e==t.slideamount||e==t.slideamount-1))&&(loadImages(i,t,e),waitForCurrentImages(i,t,function(){"carousel"==t.sliderType&&punchgs.TweenLite.to(i,1,{autoAlpha:1,ease:punchgs.Power3.easeInOut})}))});var h=getUrlVars("#")[0];if(h.length<9&&h.split("slide").length>1){var g=parseInt(h.split("slide")[1],0);1>g&&(g=1),g>t.slideamount&&(g=t.slideamount),t.startWithSlide=g-1}e.append('<div class="tp-loader '+t.spinner+'"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'),0===e.find(".tp-bannertimer").length&&e.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'),e.find(".tp-bannertimer").css({width:"0%"}),e.find(".tp-bannertimer").data("opt",t),t.ul.css({display:"block"}),prepareSlides(e,t),"off"!==t.parallax.type&&_R.checkForParallax(e,t),_R.setSize(t),"hero"!==t.sliderType&&_R.createNavigation(e,t),_R.resizeThumbsTabs&&_R.resizeThumbsTabs(t),contWidthManager(t);var v=t.viewPort;t.inviewport=!1,v!=undefined&&v.enable&&(jQuery.isNumeric(v.visible_area)||-1!==v.visible_area.indexOf("%")&&(v.visible_area=parseInt(v.visible_area)/100),_R.scrollTicker&&_R.scrollTicker(t,e)),setTimeout(function(){"carousel"==t.sliderType&&_R.prepareCarousel(t),!v.enable||v.enable&&t.inviewport||v.enable&&!t.inviewport&&"wait"==!v.outof?swapSlide(e,t):t.waitForFirstSlide=!0,_R.manageNavigation&&_R.manageNavigation(t),t.slideamount>1&&(!v.enable||v.enable&&t.inviewport?countDown(e,t):t.waitForCountDown=!0),setTimeout(function(){e.trigger("revolution.slide.onloaded")},100)},t.startDelay),t.startDelay=0,jQuery("body").data("rs-fullScreenMode",!1),jQuery(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange",function(){jQuery("body").data("rs-fullScreenMode",!jQuery("body").data("rs-fullScreenMode")),jQuery("body").data("rs-fullScreenMode")&&setTimeout(function(){jQuery(window).trigger("resize")},200)});var m="resize.revslider-"+e.attr("id");jQuery(window).on(m,function(){
return e==undefined?!1:(0!=jQuery("body").find(e)&&contWidthManager(t),void((e.outerWidth(!0)!=t.width||e.is(":hidden")||"fullscreen"==t.sliderLayout&&jQuery(window).height()!=t.lastwindowheight)&&(t.lastwindowheight=jQuery(window).height(),containerResized(e,t))))}),hideSliderUnder(e,t),contWidthManager(t),t.fallbacks.disableFocusListener||"true"==t.fallbacks.disableFocusListener||t.fallbacks.disableFocusListener===!0||tabBlurringCheck(e,t)}},cArray=function(e,t){if(!jQuery.isArray(e)){var i=e;e=new Array,e.push(i)}if(e.length<t)for(var i=e[e.length-1],n=0;n<t-e.length+2;n++)e.push(i);return e},checkHoverDependencies=function(e,t){"sliderenter"===e.data("start")&&(t.layersonhover===undefined&&(t.c.on("tp-mouseenter",function(){t.layersonhover&&jQuery.each(t.layersonhover,function(e,i){i.data("animdirection","in");var n=i.data("timeline_out"),a="carousel"===t.sliderType?0:t.width/2-t.gridwidth[t.curWinRange]*t.bw/2,r=0,o=i.closest(".tp-revslider-slidesli"),s=i.closest(".tp-static-layers");if(o.length>0&&o.hasClass("active-revslide")||o.hasClass("processing-revslide")||s.length>0){n!=undefined&&(n.pause(0),n.kill()),_R.animateSingleCaption(i,t,a,r,0,!1,!0);var d=i.data("timeline");i.data("triggerstate","on"),d.play(0)}})}),t.c.on("tp-mouseleft",function(){t.layersonhover&&jQuery.each(t.layersonhover,function(e,i){i.data("animdirection","out"),i.data("triggered",!0),i.data("triggerstate","off"),_R.stopVideo&&_R.stopVideo(i,t),_R.endMoveCaption&&_R.endMoveCaption(i,null,null,t)})}),t.layersonhover=new Array),t.layersonhover.push(e))},contWidthManager=function(e){var t=_R.getHorizontalOffset(e.c,"left");if("auto"==e.sliderLayout||"fullscreen"===e.sliderLayout&&"on"==e.fullScreenAutoWidth)"fullscreen"==e.sliderLayout&&"on"==e.fullScreenAutoWidth?punchgs.TweenLite.set(e.ul,{left:0,width:e.c.width()}):punchgs.TweenLite.set(e.ul,{left:t,width:e.c.width()-_R.getHorizontalOffset(e.c,"both")});else{var i=Math.ceil(e.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left-t);punchgs.TweenLite.set(e.c.parent(),{left:0-i+"px",width:jQuery(window).width()-_R.getHorizontalOffset(e.c,"both")})}e.slayers&&"fullwidth"!=e.sliderLayout&&"fullscreen"!=e.sliderLayout&&punchgs.TweenLite.set(e.slayers,{left:t})},cv=function(e,t){return e===undefined?t:e},hideSliderUnder=function(e,t,i){var n=e.parent();jQuery(window).width()<t.hideSliderAtLimit?(e.trigger("stoptimer"),"none"!=n.css("display")&&n.data("olddisplay",n.css("display")),n.css({display:"none"})):e.is(":hidden")&&i&&(n.data("olddisplay")!=undefined&&"undefined"!=n.data("olddisplay")&&"none"!=n.data("olddisplay")?n.css({display:n.data("olddisplay")}):n.css({display:"block"}),e.trigger("restarttimer"),setTimeout(function(){containerResized(e,t)},150)),_R.hideUnHideNav&&_R.hideUnHideNav(t)},containerResized=function(e,t){if(1==t.infullscreenmode&&(t.minHeight=jQuery(window).height()),setCurWinRange(t),setCurWinRange(t,!0),!_R.resizeThumbsTabs||_R.resizeThumbsTabs(t)===!0){if(hideSliderUnder(e,t,!0),contWidthManager(t),"carousel"==t.sliderType&&_R.prepareCarousel(t,!0),e===undefined)return!1;_R.setSize(t),t.conw=t.c.width(),t.conh=t.infullscreenmode?t.minHeight:t.c.height();var i=e.find(".active-revslide .slotholder"),n=e.find(".processing-revslide .slotholder");removeSlots(e,t,e,2),"standard"===t.sliderType&&(punchgs.TweenLite.set(n.find(".defaultimg"),{opacity:0}),i.find(".defaultimg").css({opacity:1})),"carousel"==t.sliderType&&t.lastconw!=t.conw&&(clearTimeout(t.pcartimer),t.pcartimer=setTimeout(function(){_R.prepareCarousel(t,!0)},100),t.lastconw=t.conw),_R.manageNavigation&&_R.manageNavigation(t),_R.animateTheCaptions&&_R.animateTheCaptions(e.find(".active-revslide"),t,!0),"on"==n.data("kenburns")&&_R.startKenBurn(n,t,n.data("kbtl").progress()),"on"==i.data("kenburns")&&_R.startKenBurn(i,t,i.data("kbtl").progress()),_R.animateTheCaptions&&_R.animateTheCaptions(n.closest("li"),t,!0),_R.manageNavigation&&_R.manageNavigation(t)}},setScale=function(e){e.bw=e.width/e.gridwidth[e.curWinRange],e.bh=e.height/e.gridheight[e.curWinRange],e.bh>e.bw?e.bh=e.bw:e.bw=e.bh,(e.bh>1||e.bw>1)&&(e.bw=1,e.bh=1)},prepareSlides=function(e,t){if(e.find(".tp-caption").each(function(){var e=jQuery(this);e.data("transition")!==undefined&&e.addClass(e.data("transition"))}),t.ul.css({overflow:"hidden",width:"100%",height:"100%",maxHeight:e.parent().css("maxHeight")}),"on"==t.autoHeight&&(t.ul.css({overflow:"hidden",width:"100%",height:"100%",maxHeight:"none"}),e.css({maxHeight:"none"}),e.parent().css({maxHeight:"none"})),t.allli.each(function(e){var i=jQuery(this),n=i.data("originalindex");(t.startWithSlide!=undefined&&n==t.startWithSlide||t.startWithSlide===undefined&&0==e)&&i.addClass("next-revslide"),i.css({width:"100%",height:"100%",overflow:"hidden"})}),"carousel"===t.sliderType){t.ul.css({overflow:"visible"}).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');var i='<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';t.c.parent().prepend(i),t.c.parent().append(i),_R.prepareCarousel(t)}e.parent().css({overflow:"visible"}),t.allli.find(">img").each(function(e){var i=jQuery(this),n=i.closest("li").find(".rs-background-video-layer");n.addClass("defaultvid").css({zIndex:30}),i.addClass("defaultimg"),"on"==t.fallbacks.panZoomDisableOnMobile&&_ISM&&(i.data("kenburns","off"),i.data("bgfit","cover")),i.wrap('<div class="slotholder" style="position:absolute; top:0px; left:0px; z-index:0;width:100%;height:100%;"></div>'),n.appendTo(i.closest("li").find(".slotholder"));var a=i.data();i.closest(".slotholder").data(a),n.length>0&&a.bgparallax!=undefined&&n.data("bgparallax",a.bgparallax),"none"!=t.dottedOverlay&&t.dottedOverlay!=undefined&&i.closest(".slotholder").append('<div class="tp-dottedoverlay '+t.dottedOverlay+'"></div>');var r=i.attr("src");a.src=r,a.bgfit=a.bgfit||"cover",a.bgrepeat=a.bgrepeat||"no-repeat",a.bgposition=a.bgposition||"center center";var o=i.closest(".slotholder");i.parent().append('<div class="tp-bgimg defaultimg" style="background-color:'+i.css("backgroundColor")+";background-repeat:"+a.bgrepeat+";background-image:url("+r+");background-size:"+a.bgfit+";background-position:"+a.bgposition+';width:100%;height:100%;"></div>');var s=document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - "+i.get(0).outerHTML);i.replaceWith(s),i=o.find(".tp-bgimg"),i.data(a),i.attr("src",r),("standard"===t.sliderType||"undefined"===t.sliderType)&&i.css({opacity:0})})},removeSlots=function(e,t,i,n){t.removePrepare=t.removePrepare+n,i.find(".slot, .slot-circle-wrapper").each(function(){jQuery(this).remove()}),t.transition=0,t.removePrepare=0},cutParams=function(e){var t=e;return e!=undefined&&e.length>0&&(t=e.split("?")[0]),t},relativeRedir=function(e){return location.pathname.replace(/(.*)\/[^\/]*/,"$1/"+e)},abstorel=function(e,t){var i=e.split("/"),n=t.split("/");i.pop();for(var a=0;a<n.length;a++)"."!=n[a]&&(".."==n[a]?i.pop():i.push(n[a]));return i.join("/")},imgLoaded=function(e,t,i){t.syncload--,t.loadqueue&&jQuery.each(t.loadqueue,function(t,n){var a=n.src.replace(/\.\.\/\.\.\//gi,""),r=self.location.href,o=document.location.origin,s=r.substring(0,r.length-1)+"/"+a,d=o+"/"+a,l=abstorel(self.location.href,n.src);r=r.substring(0,r.length-1)+a,o+=a,(cutParams(o)===cutParams(decodeURIComponent(e.src))||cutParams(r)===cutParams(decodeURIComponent(e.src))||cutParams(l)===cutParams(decodeURIComponent(e.src))||cutParams(d)===cutParams(decodeURIComponent(e.src))||cutParams(s)===cutParams(decodeURIComponent(e.src))||cutParams(n.src)===cutParams(decodeURIComponent(e.src))||cutParams(n.src).replace(/^.*\/\/[^\/]+/,"")===cutParams(decodeURIComponent(e.src)).replace(/^.*\/\/[^\/]+/,"")||"file://"===window.location.origin&&cutParams(e.src).match(new RegExp(a)))&&(n.progress=i,n.width=e.width,n.height=e.height)}),progressImageLoad(t)},progressImageLoad=function(e){3!=e.syncload&&e.loadqueue&&jQuery.each(e.loadqueue,function(t,i){if(i.progress.match(/prepared/g)&&e.syncload<=3){if(e.syncload++,"img"==i.type){var n=new Image;n.onload=function(){imgLoaded(this,e,"loaded")},n.onerror=function(){imgLoaded(this,e,"failed")},n.src=i.src}else jQuery.get(i.src,function(t){i.innerHTML=(new XMLSerializer).serializeToString(t.documentElement),i.progress="loaded",e.syncload--,progressImageLoad(e)}).fail(function(){i.progress="failed",e.syncload--,progressImageLoad(e)});i.progress="inload"}})},addToLoadQueue=function(e,t,i,n,a){var r=!1;if(t.loadqueue&&jQuery.each(t.loadqueue,function(t,i){i.src===e&&(r=!0)}),!r){var o=new Object;o.src=e,o.type=n||"img",o.prio=i,o.progress="prepared",o["static"]=a,t.loadqueue.push(o)}},loadImages=function(e,t,i,n){e.find("img,.defaultimg, .tp-svg-layer").each(function(){var e=jQuery(this),a=e.data("lazyload")!==undefined&&"undefined"!==e.data("lazyload")?e.data("lazyload"):e.data("svg_src")!=undefined?e.data("svg_src"):e.attr("src"),r=e.data("svg_src")!=undefined?"svg":"img";e.data("start-to-load",jQuery.now()),addToLoadQueue(a,t,i,r,n)}),progressImageLoad(t)},getLoadObj=function(e,t){var i=new Object;return e.loadqueue&&jQuery.each(e.loadqueue,function(e,n){n.src==t&&(i=n)}),i},waitForCurrentImages=function(e,t,i){var n=!1;e.find("img,.defaultimg, .tp-svg-layer").each(function(){var i=jQuery(this),a=i.data("lazyload")!=undefined?i.data("lazyload"):i.data("svg_src")!=undefined?i.data("svg_src"):i.attr("src"),r=getLoadObj(t,a);if(i.data("loaded")===undefined&&r!==undefined&&r.progress&&r.progress.match(/loaded/g)){if(i.attr("src",r.src),"img"==r.type)if(i.hasClass("defaultimg"))_R.isIE(8)?defimg.attr("src",r.src):i.css({backgroundImage:'url("'+r.src+'")'}),e.data("owidth",r.width),e.data("oheight",r.height),e.find(".slotholder").data("owidth",r.width),e.find(".slotholder").data("oheight",r.height);else{var o=i.data("ww"),s=i.data("hh");i.data("owidth",r.width),i.data("oheight",r.height),o=o==undefined||"auto"==o||""==o?r.width:o,s=s==undefined||"auto"==s||""==s?r.height:s,i.data("ww",o),i.data("hh",s)}else"svg"==r.type&&"loaded"==r.progress&&(i.append('<div class="tp-svg-innercontainer"></div>'),i.find(".tp-svg-innercontainer").append(r.innerHTML));i.data("loaded",!0)}if(r&&r.progress&&r.progress.match(/inprogress|inload|prepared/g)&&(jQuery.now()-i.data("start-to-load")<5e3?n=!0:(r.progress="failed",console.error(a+"  Could not be loaded !"))),1==t.youtubeapineeded&&(!window.YT||YT.Player==undefined)&&(n=!0,jQuery.now()-t.youtubestarttime>5e3&&1!=t.youtubewarning)){t.youtubewarning=!0;var d="YouTube Api Could not be loaded !";"https:"===location.protocol&&(d+=" Please Check and Renew SSL Certificate !"),console.error(d),t.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+d+"</strong></div>")}if(1==t.vimeoapineeded&&!window.Froogaloop&&(n=!0,jQuery.now()-t.vimeostarttime>5e3&&1!=t.vimeowarning)){t.vimeowarning=!0;var d="Vimeo Froogaloop Api Could not be loaded !";"https:"===location.protocol&&(d+=" Please Check and Renew SSL Certificate !"),console.error(d),t.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+d+"</strong></div>")}}),!_ISM&&t.audioqueue&&t.audioqueue.length>0&&jQuery.each(t.audioqueue,function(e,t){t.status&&"prepared"===t.status&&jQuery.now()-t.start<t.waittime&&(n=!0)}),jQuery.each(t.loadqueue,function(e,t){t["static"]!==!0||"loaded"==t.progress&&"failed"!==t.progress||(n=!0)}),n?setTimeout(function(){waitForCurrentImages(e,t,i)},19):setTimeout(i,19)},swapSlide=function(e,t){if(clearTimeout(t.waitWithSwapSlide),e.find(".processing-revslide").length>0)return t.waitWithSwapSlide=setTimeout(function(){swapSlide(e,t)},150),!1;var i=e.find(".active-revslide"),n=e.find(".next-revslide"),a=n.find(".defaultimg");return n.index()===i.index()?(n.removeClass("next-revslide"),!1):(n.removeClass("next-revslide").addClass("processing-revslide"),n.data("slide_on_focus_amount",n.data("slide_on_focus_amount")+1||1),"on"==t.stopLoop&&n.index()==t.lastslidetoshow-1&&(e.find(".tp-bannertimer").css({visibility:"hidden"}),e.trigger("revolution.slide.onstop"),t.noloopanymore=1),n.index()===t.slideamount-1&&(t.looptogo=t.looptogo-1,t.looptogo<=0&&(t.stopLoop="on")),t.tonpause=!0,e.trigger("stoptimer"),t.cd=0,"off"===t.spinner?e.find(".tp-loader").css({display:"none"}):e.find(".tp-loader").css({display:"block"}),loadImages(n,t,1),_R.preLoadAudio&&_R.preLoadAudio(n,t,1),void waitForCurrentImages(n,t,function(){n.find(".rs-background-video-layer").each(function(){var e=jQuery(this);e.hasClass("HasListener")||(e.data("bgvideo",1),_R.manageVideoLayer&&_R.manageVideoLayer(e,t)),0==e.find(".rs-fullvideo-cover").length&&e.append('<div class="rs-fullvideo-cover"></div>')}),swapSlideProgress(t,a,e)}))},swapSlideProgress=function(e,t,i){var n=i.find(".active-revslide"),a=i.find(".processing-revslide"),r=n.find(".slotholder"),o=a.find(".slotholder");e.tonpause=!1,e.cd=0,i.find(".tp-loader").css({display:"none"}),_R.setSize(e),_R.slotSize(t,e),_R.manageNavigation&&_R.manageNavigation(e);var s={};s.nextslide=a,s.currentslide=n,i.trigger("revolution.slide.onbeforeswap",s),e.transition=1,e.videoplaying=!1,a.data("delay")!=undefined?(e.cd=0,e.delay=a.data("delay")):e.delay=e.origcd,"true"==a.data("ssop")||a.data("ssop")===!0?e.ssop=!0:e.ssop=!1,i.trigger("nulltimer");var d=n.index(),l=a.index();e.sdir=d>l?1:0,"arrow"==e.sc_indicator&&(0==d&&l==e.slideamount-1&&(e.sdir=1),d==e.slideamount-1&&0==l&&(e.sdir=0)),e.lsdir=e.lsdir===undefined?e.sdir:e.lsdir,e.dirc=e.lsdir!=e.sdir,e.lsdir=e.sdir,n.index()!=a.index()&&1!=e.firststart&&_R.removeTheCaptions&&_R.removeTheCaptions(n,e),a.hasClass("rs-pause-timer-once")||a.hasClass("rs-pause-timer-always")?e.videoplaying=!0:i.trigger("restarttimer"),a.removeClass("rs-pause-timer-once");var u,c;if("carousel"==e.sliderType)c=new punchgs.TimelineLite,_R.prepareCarousel(e,c),letItFree(i,e,o,r,a,n,c),e.transition=0,e.firststart=0;else{c=new punchgs.TimelineLite({onComplete:function(){letItFree(i,e,o,r,a,n,c)}}),c.add(punchgs.TweenLite.set(o.find(".defaultimg"),{opacity:0})),c.pause(),1==e.firststart&&(punchgs.TweenLite.set(n,{autoAlpha:0}),e.firststart=0),punchgs.TweenLite.set(n,{zIndex:18}),punchgs.TweenLite.set(a,{autoAlpha:0,zIndex:20}),"prepared"==a.data("differentissplayed")&&(a.data("differentissplayed","done"),a.data("transition",a.data("savedtransition")),a.data("slotamount",a.data("savedslotamount")),a.data("masterspeed",a.data("savedmasterspeed"))),a.data("fstransition")!=undefined&&"done"!=a.data("differentissplayed")&&(a.data("savedtransition",a.data("transition")),a.data("savedslotamount",a.data("slotamount")),a.data("savedmasterspeed",a.data("masterspeed")),a.data("transition",a.data("fstransition")),a.data("slotamount",a.data("fsslotamount")),a.data("masterspeed",a.data("fsmasterspeed")),a.data("differentissplayed","prepared")),a.data("transition")==undefined&&a.data("transition","random"),u=0;var p=a.data("transition")!==undefined?a.data("transition").split(","):"fade",f=a.data("nexttransid")==undefined?-1:a.data("nexttransid");"on"==a.data("randomtransition")?f=Math.round(Math.random()*p.length):f+=1,f==p.length&&(f=0),a.data("nexttransid",f);var h=p[f];e.ie&&("boxfade"==h&&(h="boxslide"),"slotfade-vertical"==h&&(h="slotzoom-vertical"),"slotfade-horizontal"==h&&(h="slotzoom-horizontal")),_R.isIE(8)&&(h=11),c=_R.animateSlide(u,h,i,e,a,n,o,r,c),"on"==o.data("kenburns")&&(_R.startKenBurn(o,e),c.add(punchgs.TweenLite.set(o,{autoAlpha:0}))),c.pause()}_R.scrollHandling&&(_R.scrollHandling(e,!0),c.eventCallback("onUpdate",function(){_R.scrollHandling(e,!0)})),"off"!=e.parallax.type&&e.parallax.firstgo==undefined&&_R.scrollHandling&&(e.parallax.firstgo=!0,e.lastscrolltop=-999,_R.scrollHandling(e,!0),setTimeout(function(){e.lastscrolltop=-999,_R.scrollHandling(e,!0)},210),setTimeout(function(){e.lastscrolltop=-999,_R.scrollHandling(e,!0)},420)),_R.animateTheCaptions?_R.animateTheCaptions(a,e,null,c):c!=undefined&&setTimeout(function(){c.resume()},30),punchgs.TweenLite.to(a,.001,{autoAlpha:1})},letItFree=function(e,t,i,n,a,r,o){"carousel"===t.sliderType||(t.removePrepare=0,punchgs.TweenLite.to(i.find(".defaultimg"),.001,{zIndex:20,autoAlpha:1,onComplete:function(){removeSlots(e,t,a,1)}}),a.index()!=r.index()&&punchgs.TweenLite.to(r,.2,{zIndex:18,autoAlpha:0,onComplete:function(){removeSlots(e,t,r,1)}})),e.find(".active-revslide").removeClass("active-revslide"),e.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"),t.act=a.index(),t.c.attr("data-slideactive",e.find(".active-revslide").data("index")),("scroll"==t.parallax.type||"scroll+mouse"==t.parallax.type||"mouse+scroll"==t.parallax.type)&&(t.lastscrolltop=-999,_R.scrollHandling(t)),o.clear(),n.data("kbtl")!=undefined&&(n.data("kbtl").reverse(),n.data("kbtl").timeScale(25)),"on"==i.data("kenburns")&&(i.data("kbtl")!=undefined?(i.data("kbtl").timeScale(1),i.data("kbtl").play()):_R.startKenBurn(i,t)),a.find(".rs-background-video-layer").each(function(e){if(_ISM)return!1;var i=jQuery(this);_R.resetVideo(i,t),punchgs.TweenLite.fromTo(i,1,{autoAlpha:0},{autoAlpha:1,ease:punchgs.Power3.easeInOut,delay:.2,onComplete:function(){_R.animcompleted&&_R.animcompleted(i,t)}})}),r.find(".rs-background-video-layer").each(function(e){if(_ISM)return!1;var i=jQuery(this);_R.stopVideo&&(_R.resetVideo(i,t),_R.stopVideo(i,t)),punchgs.TweenLite.to(i,1,{autoAlpha:0,ease:punchgs.Power3.easeInOut,delay:.2})});var s={};s.slideIndex=a.index()+1,s.slideLIIndex=a.index(),s.slide=a,s.currentslide=a,s.prevslide=r,t.last_shown_slide=r.index(),e.trigger("revolution.slide.onchange",s),e.trigger("revolution.slide.onafterswap",s),t.duringslidechange=!1;var d=r.data("slide_on_focus_amount"),l=r.data("hideafterloop");0!=l&&d>=l&&t.c.revremoveslide(r.index())},removeAllListeners=function(e,t){e.children().each(function(){try{jQuery(this).die("click")}catch(e){}try{jQuery(this).die("mouseenter")}catch(e){}try{jQuery(this).die("mouseleave")}catch(e){}try{jQuery(this).unbind("hover")}catch(e){}});try{e.die("click","mouseenter","mouseleave")}catch(i){}clearInterval(t.cdint),e=null},countDown=function(e,t){t.cd=0,t.loop=0,t.stopAfterLoops!=undefined&&t.stopAfterLoops>-1?t.looptogo=t.stopAfterLoops:t.looptogo=9999999,t.stopAtSlide!=undefined&&t.stopAtSlide>-1?t.lastslidetoshow=t.stopAtSlide:t.lastslidetoshow=999,t.stopLoop="off",0==t.looptogo&&(t.stopLoop="on");var i=e.find(".tp-bannertimer");e.on("stoptimer",function(){var e=jQuery(this).find(".tp-bannertimer");e.data("tween").pause(),"on"==t.disableProgressBar&&e.css({visibility:"hidden"}),t.sliderstatus="paused",_R.unToggleState(t.slidertoggledby)}),e.on("starttimer",function(){t.forcepause_viatoggle||(1!=t.conthover&&1!=t.videoplaying&&t.width>t.hideSliderAtLimit&&1!=t.tonpause&&1!=t.overnav&&1!=t.ssop&&(1===t.noloopanymore||t.viewPort.enable&&!t.inviewport||(i.css({visibility:"visible"}),i.data("tween").resume(),t.sliderstatus="playing")),"on"==t.disableProgressBar&&i.css({visibility:"hidden"}),_R.toggleState(t.slidertoggledby))}),e.on("restarttimer",function(){if(!t.forcepause_viatoggle){var e=jQuery(this).find(".tp-bannertimer");if(t.mouseoncontainer&&"on"==t.navigation.onHoverStop&&!_ISM)return!1;1===t.noloopanymore||t.viewPort.enable&&!t.inviewport||1==t.ssop||(e.css({visibility:"visible"}),e.data("tween").kill(),e.data("tween",punchgs.TweenLite.fromTo(e,t.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:n,delay:1})),t.sliderstatus="playing"),"on"==t.disableProgressBar&&e.css({visibility:"hidden"}),_R.toggleState(t.slidertoggledby)}}),e.on("nulltimer",function(){i.data("tween").kill(),i.data("tween",punchgs.TweenLite.fromTo(i,t.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:n,delay:1})),i.data("tween").pause(0),"on"==t.disableProgressBar&&i.css({visibility:"hidden"}),t.sliderstatus="paused"});var n=function(){0==jQuery("body").find(e).length&&(removeAllListeners(e,t),clearInterval(t.cdint)),e.trigger("revolution.slide.slideatend"),1==e.data("conthover-changed")&&(t.conthover=e.data("conthover"),e.data("conthover-changed",0)),_R.callingNewSlide(t,e,1)};i.data("tween",punchgs.TweenLite.fromTo(i,t.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:n,delay:1})),i.data("opt",t),t.slideamount>1&&(0!=t.stopAfterLoops||1!=t.stopAtSlide)?e.trigger("starttimer"):(t.noloopanymore=1,e.trigger("nulltimer")),e.on("tp-mouseenter",function(){t.mouseoncontainer=!0,"on"!=t.navigation.onHoverStop||_ISM||(e.trigger("stoptimer"),e.trigger("revolution.slide.onpause"))}),e.on("tp-mouseleft",function(){t.mouseoncontainer=!1,1!=e.data("conthover")&&"on"==t.navigation.onHoverStop&&(1==t.viewPort.enable&&t.inviewport||0==t.viewPort.enable)&&(e.trigger("revolution.slide.onresume"),e.trigger("starttimer"))})},vis=function(){var e,t,i={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};for(e in i)if(e in document){t=i[e];break}return function(i){return i&&document.addEventListener(t,i),!document[e]}}(),restartOnFocus=function(e){return e==undefined||e.c==undefined?!1:void(1!=e.windowfocused&&(e.windowfocused=!0,punchgs.TweenLite.delayedCall(.3,function(){"on"==e.fallbacks.nextSlideOnWindowFocus&&e.c.revnext(),e.c.revredraw(),"playing"==e.lastsliderstatus&&e.c.revresume()})))},lastStatBlur=function(e){e.windowfocused=!1,e.lastsliderstatus=e.sliderstatus,e.c.revpause();var t=e.c.find(".active-revslide .slotholder"),i=e.c.find(".processing-revslide .slotholder");"on"==i.data("kenburns")&&_R.stopKenBurn(i,e),"on"==t.data("kenburns")&&_R.stopKenBurn(t,e)},tabBlurringCheck=function(e,t){var i=document.documentMode===undefined,n=window.chrome;i&&!n?jQuery(window).on("focusin",function(){restartOnFocus(t)}).on("focusout",function(){lastStatBlur(t)}):window.addEventListener?(window.addEventListener("focus",function(e){restartOnFocus(t)},!1),window.addEventListener("blur",function(e){lastStatBlur(t)},!1)):(window.attachEvent("focus",function(e){restartOnFocus(t)}),window.attachEvent("blur",function(e){lastStatBlur(t)}))},getUrlVars=function(e){for(var t,i=[],n=window.location.href.slice(window.location.href.indexOf(e)+1).split("_"),a=0;a<n.length;a++)n[a]=n[a].replace("%3D","="),t=n[a].split("="),i.push(t[0]),i[t[0]]=t[1];return i}}(jQuery);

/********************************************
 * REVOLUTION 5.2 EXTENSION - ACTIONS
 * @version: 1.3.1 (03.03.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function($){var _R=jQuery.fn.revolution,_ISM=_R.is_mobile();jQuery.extend(!0,_R,{checkActions:function(e,t,o){checkActions_intern(e,t,o)}});var checkActions_intern=function(e,t,o){o&&jQuery.each(o,function(o,a){a.delay=parseInt(a.delay,0)/1e3,e.addClass("noSwipe"),t.fullscreen_esclistener||("exitfullscreen"==a.action||"togglefullscreen"==a.action)&&(jQuery(document).keyup(function(t){27==t.keyCode&&jQuery("#rs-go-fullscreen").length>0&&e.trigger(a.event)}),t.fullscreen_esclistener=!0);var l="backgroundvideo"==a.layer?jQuery(".rs-background-video-layer"):"firstvideo"==a.layer?jQuery(".tp-revslider-slidesli").find(".tp-videolayer"):jQuery("#"+a.layer);switch(a.action){case"togglevideo":jQuery.each(l,function(t,o){o=jQuery(o);var a=o.data("videotoggledby");void 0==a&&(a=new Array),a.push(e),o.data("videotoggledby",a)});break;case"togglelayer":jQuery.each(l,function(t,o){o=jQuery(o);var a=o.data("layertoggledby");void 0==a&&(a=new Array),a.push(e),o.data("layertoggledby",a)});break;case"toggle_mute_video":jQuery.each(l,function(t,o){o=jQuery(o);var a=o.data("videomutetoggledby");void 0==a&&(a=new Array),a.push(e),o.data("videomutetoggledby",a)});break;case"toggle_global_mute_video":jQuery.each(l,function(t,o){o=jQuery(o);var a=o.data("videomutetoggledby");void 0==a&&(a=new Array),a.push(e),o.data("videomutetoggledby",a)});break;case"toggleslider":void 0==t.slidertoggledby&&(t.slidertoggledby=new Array),t.slidertoggledby.push(e);break;case"togglefullscreen":void 0==t.fullscreentoggledby&&(t.fullscreentoggledby=new Array),t.fullscreentoggledby.push(e)}switch(e.on(a.event,function(){var o="backgroundvideo"==a.layer?jQuery(".active-revslide .slotholder .rs-background-video-layer"):"firstvideo"==a.layer?jQuery(".active-revslide .tp-videolayer").first():jQuery("#"+a.layer);if("stoplayer"==a.action||"togglelayer"==a.action||"startlayer"==a.action){if(o.length>0)if("startlayer"==a.action||"togglelayer"==a.action&&"in"!=o.data("animdirection")){o.data("animdirection","in");var l=o.data("timeline_out"),i="carousel"===t.sliderType?0:t.width/2-t.gridwidth[t.curWinRange]*t.bw/2,r=0;void 0!=l&&l.pause(0).kill(),_R.animateSingleCaption&&_R.animateSingleCaption(o,t,i,r,0,!1,!0);var n=o.data("timeline");o.data("triggerstate","on"),_R.toggleState(o.data("layertoggledby")),punchgs.TweenLite.delayedCall(a.delay,function(){n.play(0)},[n])}else("stoplayer"==a.action||"togglelayer"==a.action&&"out"!=o.data("animdirection"))&&(o.data("animdirection","out"),o.data("triggered",!0),o.data("triggerstate","off"),_R.stopVideo&&_R.stopVideo(o,t),_R.endMoveCaption&&punchgs.TweenLite.delayedCall(a.delay,_R.endMoveCaption,[o,null,null,t]),_R.unToggleState(o.data("layertoggledby")))}else!_ISM||"playvideo"!=a.action&&"stopvideo"!=a.action&&"togglevideo"!=a.action&&"mutevideo"!=a.action&&"unmutevideo"!=a.action&&"toggle_mute_video"!=a.action&&"toggle_global_mute_video"!=a.action?punchgs.TweenLite.delayedCall(a.delay,function(){actionSwitches(o,t,a,e)},[o,t,a,e]):actionSwitches(o,t,a,e)}),a.action){case"togglelayer":case"startlayer":case"playlayer":case"stoplayer":var l=jQuery("#"+a.layer);"bytrigger"!=l.data("start")&&(l.data("triggerstate","on"),l.data("animdirection","in"))}})},actionSwitches=function(tnc,opt,a,_nc){switch(a.action){case"scrollbelow":_nc.addClass("tp-scrollbelowslider"),_nc.data("scrolloffset",a.offset),_nc.data("scrolldelay",a.delay);var off=getOffContH(opt.fullScreenOffsetContainer)||0,aof=parseInt(a.offset,0)||0;off=off-aof||0,jQuery("body,html").animate({scrollTop:opt.c.offset().top+jQuery(opt.li[0]).height()-off+"px"},{duration:400});break;case"callback":eval(a.callback);break;case"jumptoslide":switch(a.slide.toLowerCase()){case"+1":case"next":opt.sc_indicator="arrow",_R.callingNewSlide(opt,opt.c,1);break;case"previous":case"prev":case"-1":opt.sc_indicator="arrow",_R.callingNewSlide(opt,opt.c,-1);break;default:var ts=jQuery.isNumeric(a.slide)?parseInt(a.slide,0):a.slide;_R.callingNewSlide(opt,opt.c,ts)}break;case"simplelink":window.open(a.url,a.target);break;case"toggleslider":opt.noloopanymore=0,"playing"==opt.sliderstatus?(opt.c.revpause(),opt.forcepause_viatoggle=!0,_R.unToggleState(opt.slidertoggledby)):(opt.forcepause_viatoggle=!1,opt.c.revresume(),_R.toggleState(opt.slidertoggledby));break;case"pauseslider":opt.c.revpause(),_R.unToggleState(opt.slidertoggledby);break;case"playslider":opt.noloopanymore=0,opt.c.revresume(),_R.toggleState(opt.slidertoggledby);break;case"playvideo":tnc.length>0&&_R.playVideo(tnc,opt);break;case"stopvideo":tnc.length>0&&_R.stopVideo&&_R.stopVideo(tnc,opt);break;case"togglevideo":tnc.length>0&&(_R.isVideoPlaying(tnc,opt)?_R.stopVideo&&_R.stopVideo(tnc,opt):_R.playVideo(tnc,opt));break;case"mutevideo":tnc.length>0&&_R.muteVideo(tnc,opt);break;case"unmutevideo":tnc.length>0&&_R.unMuteVideo&&_R.unMuteVideo(tnc,opt);break;case"toggle_mute_video":tnc.length>0&&(_R.isVideoMuted(tnc,opt)?_R.unMuteVideo(tnc,opt):_R.muteVideo&&_R.muteVideo(tnc,opt)),_nc.toggleClass("rs-toggle-content-active");break;case"toggle_global_mute_video":_nc.hasClass("rs-toggle-content-active")?(opt.globalmute=!1,void 0!=opt.playingvideos&&opt.playingvideos.length>0&&jQuery.each(opt.playingvideos,function(e,t){_R.unMuteVideo&&_R.unMuteVideo(t,opt)})):(opt.globalmute=!0,void 0!=opt.playingvideos&&opt.playingvideos.length>0&&jQuery.each(opt.playingvideos,function(e,t){_R.muteVideo&&_R.muteVideo(t,opt)})),_nc.toggleClass("rs-toggle-content-active");break;case"simulateclick":tnc.length>0&&tnc.click();break;case"toggleclass":tnc.length>0&&(tnc.hasClass(a.classname)?tnc.removeClass(a.classname):tnc.addClass(a.classname));break;case"gofullscreen":case"exitfullscreen":case"togglefullscreen":if(jQuery("#rs-go-fullscreen").length>0&&("togglefullscreen"==a.action||"exitfullscreen"==a.action)){jQuery("#rs-go-fullscreen").appendTo(jQuery("#rs-was-here"));var paw=opt.c.closest(".forcefullwidth_wrapper_tp_banner").length>0?opt.c.closest(".forcefullwidth_wrapper_tp_banner"):opt.c.closest(".rev_slider_wrapper");paw.unwrap(),paw.unwrap(),opt.minHeight=opt.oldminheight,opt.infullscreenmode=!1,opt.c.revredraw(),void 0!=opt.playingvideos&&opt.playingvideos.length>0&&jQuery.each(opt.playingvideos,function(e,t){_R.playVideo(t,opt)}),_R.unToggleState(opt.fullscreentoggledby)}else if(0==jQuery("#rs-go-fullscreen").length&&("togglefullscreen"==a.action||"gofullscreen"==a.action)){var paw=opt.c.closest(".forcefullwidth_wrapper_tp_banner").length>0?opt.c.closest(".forcefullwidth_wrapper_tp_banner"):opt.c.closest(".rev_slider_wrapper");paw.wrap('<div id="rs-was-here"><div id="rs-go-fullscreen"></div></div>');var gf=jQuery("#rs-go-fullscreen");gf.appendTo(jQuery("body")),gf.css({position:"fixed",width:"100%",height:"100%",top:"0px",left:"0px",zIndex:"9999999",background:"#ffffff"}),opt.oldminheight=opt.minHeight,opt.minHeight=jQuery(window).height(),opt.infullscreenmode=!0,opt.c.revredraw(),void 0!=opt.playingvideos&&opt.playingvideos.length>0&&jQuery.each(opt.playingvideos,function(e,t){_R.playVideo(t,opt)}),_R.toggleState(opt.fullscreentoggledby)}}},getOffContH=function(e){if(void 0==e)return 0;if(e.split(",").length>1){oc=e.split(",");var t=0;return oc&&jQuery.each(oc,function(e,o){jQuery(o).length>0&&(t+=jQuery(o).outerHeight(!0))}),t}return jQuery(e).height()}}(jQuery);

/********************************************
 * REVOLUTION 5.0 EXTENSION - CAROUSEL
 * @version: 1.0.2 (01.10.2015)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(){var e=jQuery.fn.revolution;jQuery.extend(!0,e,{prepareCarousel:function(i,l,o){o=i.carousel.lastdirection=a(o,i.carousel.lastdirection),t(i),i.carousel.slide_offset_target=r(i),void 0==l?e.carouselToEvalPosition(i,o):s(i,o,!1)},carouselToEvalPosition:function(i,t){var l=i.carousel;t=l.lastdirection=a(t,l.lastdirection);var o="center"===l.horizontal_align?(l.wrapwidth/2-l.slide_width/2-l.slide_globaloffset)/l.slide_width:(0-l.slide_globaloffset)/l.slide_width,r=e.simp(o,i.slideamount,!1),n=r-Math.floor(r),d=0,f=-1*(Math.ceil(r)-r),h=-1*(Math.floor(r)-r);d=n>=.3&&"left"===t||n>=.7&&"right"===t?f:.3>n&&"left"===t||.7>n&&"right"===t?h:d,d="off"===l.infinity?0>r?r:o>i.slideamount-1?o-(i.slideamount-1):d:d,l.slide_offset_target=d*l.slide_width,0!==Math.abs(l.slide_offset_target)?s(i,t,!0):e.organiseCarousel(i,t)},organiseCarousel:function(e,i,t,a){i=void 0===i||"down"==i||"up"==i||null===i||jQuery.isEmptyObject(i)?"left":i;for(var s=e.carousel,l=new Array,o=s.slides.length,r="right"===s.horizontal_align?r=e.width:0,n=0;o>n;n++){var d=n*s.slide_width+s.slide_offset;"on"===s.infinity&&(d=d>s.wrapwidth-s.inneroffset&&"right"==i?s.slide_offset-(s.slides.length-n)*s.slide_width:d,d=d<0-s.inneroffset-s.slide_width&&"left"==i?d+s.maxwidth:d),l[n]=d}var f=999;s.slides&&jQuery.each(s.slides,function(a,r){var n=l[a];"on"===s.infinity&&(n=n>s.wrapwidth-s.inneroffset&&"left"===i?l[0]-(o-a)*s.slide_width:n,n=n<0-s.inneroffset-s.slide_width?"left"==i?n+s.maxwidth:"right"===i?l[o-1]+(a+1)*s.slide_width:n:n);var d=new Object;d.left=n+s.inneroffset;var h="center"===s.horizontal_align?(Math.abs(s.wrapwidth/2)-(d.left+s.slide_width/2))/s.slide_width:(s.inneroffset-d.left)/s.slide_width,w="center"===s.horizontal_align?2:1;if((t&&Math.abs(h)<f||0===h)&&(f=Math.abs(h),s.focused=a),d.width=s.slide_width,d.x=0,d.transformPerspective=1200,d.transformOrigin="50% "+s.vertical_align,"on"===s.fadeout)if("on"===s.vary_fade)d.autoAlpha=1-Math.abs(1/Math.ceil(s.maxVisibleItems/w)*h);else switch(s.horizontal_align){case"center":d.autoAlpha=Math.abs(h)<Math.ceil(s.maxVisibleItems/w-1)?1:1-(Math.abs(h)-Math.floor(Math.abs(h)));break;case"left":d.autoAlpha=1>h&&h>0?1-h:Math.abs(h)>s.maxVisibleItems-1?1-(Math.abs(h)-(s.maxVisibleItems-1)):1;break;case"right":d.autoAlpha=h>-1&&0>h?1-Math.abs(h):h>s.maxVisibleItems-1?1-(Math.abs(h)-(s.maxVisibleItems-1)):1}else d.autoAlpha=Math.abs(h)<Math.ceil(s.maxVisibleItems/w)?1:0;if(void 0!==s.minScale&&s.minScale>0)if("on"===s.vary_scale){d.scale=1-Math.abs(s.minScale/100/Math.ceil(s.maxVisibleItems/w)*h);var c=(s.slide_width-s.slide_width*d.scale)*Math.abs(h)}else{d.scale=h>=1||-1>=h?1-s.minScale/100:(100-s.minScale*Math.abs(h))/100;var c=(s.slide_width-s.slide_width*(1-s.minScale/100))*Math.abs(h)}void 0!==s.maxRotation&&0!=Math.abs(s.maxRotation)&&("on"===s.vary_rotation?(d.rotationY=Math.abs(s.maxRotation)-Math.abs((1-Math.abs(1/Math.ceil(s.maxVisibleItems/w)*h))*s.maxRotation),d.autoAlpha=Math.abs(d.rotationY)>90?0:d.autoAlpha):d.rotationY=h>=1||-1>=h?s.maxRotation:Math.abs(h)*s.maxRotation,d.rotationY=0>h?-1*d.rotationY:d.rotationY),d.x=-1*s.space*h,d.left=Math.floor(d.left),d.x=Math.floor(d.x),void 0!==d.scale?0>h?d.x-c:d.x+c:d.x,d.zIndex=Math.round(100-Math.abs(5*h)),d.transformStyle="3D"!=e.parallax.type&&"3d"!=e.parallax.type?"flat":"preserve-3d",punchgs.TweenLite.set(r,d)}),a&&(e.c.find(".next-revslide").removeClass("next-revslide"),jQuery(s.slides[s.focused]).addClass("next-revslide"),e.c.trigger("revolution.nextslide.waiting"));s.wrapwidth/2-s.slide_offset,s.maxwidth+s.slide_offset-s.wrapwidth/2}});var i=function(e){var i=e.carousel;i.infbackup=i.infinity,i.maxVisiblebackup=i.maxVisibleItems,i.slide_globaloffset="none",i.slide_offset=0,i.wrap=e.c.find(".tp-carousel-wrapper"),i.slides=e.c.find(".tp-revslider-slidesli"),0!==i.maxRotation&&("3D"!=e.parallax.type&&"3d"!=e.parallax.type?punchgs.TweenLite.set(i.wrap,{perspective:1200,transformStyle:"flat"}):punchgs.TweenLite.set(i.wrap,{perspective:1600,transformStyle:"preserve-3d"})),void 0!==i.border_radius&&parseInt(i.border_radius,0)>0&&punchgs.TweenLite.set(e.c.find(".tp-revslider-slidesli"),{borderRadius:i.border_radius})},t=function(t){void 0===t.bw&&e.setSize(t);var a=t.carousel,s=e.getHorizontalOffset(t.c,"left"),l=e.getHorizontalOffset(t.c,"right");void 0===a.wrap&&i(t),a.slide_width="on"!==a.stretch?t.gridwidth[t.curWinRange]*t.bw:t.c.width(),a.maxwidth=t.slideamount*a.slide_width,a.maxVisiblebackup>a.slides.length+1&&(a.maxVisibleItems=a.slides.length+2),a.wrapwidth=a.maxVisibleItems*a.slide_width+(a.maxVisibleItems-1)*a.space,a.wrapwidth="auto"!=t.sliderLayout?a.wrapwidth>t.c.closest(".tp-simpleresponsive").width()?t.c.closest(".tp-simpleresponsive").width():a.wrapwidth:a.wrapwidth>t.ul.width()?t.ul.width():a.wrapwidth,a.infinity=a.wrapwidth>=a.maxwidth?"off":a.infbackup,a.wrapoffset="center"===a.horizontal_align?(t.c.width()-l-s-a.wrapwidth)/2:0,a.wrapoffset="auto"!=t.sliderLayout&&t.outernav?0:a.wrapoffset<s?s:a.wrapoffset;var o="hidden";("3D"==t.parallax.type||"3d"==t.parallax.type)&&(o="visible"),"right"===a.horizontal_align?punchgs.TweenLite.set(a.wrap,{left:"auto",right:a.wrapoffset+"px",width:a.wrapwidth,overflow:o}):punchgs.TweenLite.set(a.wrap,{right:"auto",left:a.wrapoffset+"px",width:a.wrapwidth,overflow:o}),a.inneroffset="right"===a.horizontal_align?a.wrapwidth-a.slide_width:0,a.realoffset=Math.abs(a.wrap.position().left),a.windhalf=jQuery(window).width()/2},a=function(e,i){return null===e||jQuery.isEmptyObject(e)?i:void 0===e?"right":e},s=function(i,t,s){var l=i.carousel;t=l.lastdirection=a(t,l.lastdirection);var o=new Object;o.from=0,o.to=l.slide_offset_target,void 0!==l.positionanim&&l.positionanim.pause(),l.positionanim=punchgs.TweenLite.to(o,1.2,{from:o.to,onUpdate:function(){l.slide_offset=l.slide_globaloffset+o.from,l.slide_offset=e.simp(l.slide_offset,l.maxwidth),e.organiseCarousel(i,t,!1,!1)},onComplete:function(){l.slide_globaloffset="off"===l.infinity?l.slide_globaloffset+l.slide_offset_target:e.simp(l.slide_globaloffset+l.slide_offset_target,l.maxwidth),l.slide_offset=e.simp(l.slide_offset,l.maxwidth),e.organiseCarousel(i,t,!1,!0);var a=jQuery(i.li[l.focused]);i.c.find(".next-revslide").removeClass("next-revslide"),s&&e.callingNewSlide(i,i.c,a.data("index"))},ease:punchgs.Expo.easeOut})},l=function(e,i){return Math.abs(e)>Math.abs(i)?e>0?e-Math.abs(Math.floor(e/i)*i):e+Math.abs(Math.floor(e/i)*i):e},o=function(e,i,t){var t,t,a=i-e,s=i-t-e;return a=l(a,t),s=l(s,t),Math.abs(a)>Math.abs(s)?s:a},r=function(i){var t=0,a=i.carousel;if(void 0!==a.positionanim&&a.positionanim.kill(),"none"==a.slide_globaloffset)a.slide_globaloffset=t="center"===a.horizontal_align?a.wrapwidth/2-a.slide_width/2:0;else{a.slide_globaloffset=a.slide_offset,a.slide_offset=0;var s=i.c.find(".processing-revslide").index(),l="center"===a.horizontal_align?(a.wrapwidth/2-a.slide_width/2-a.slide_globaloffset)/a.slide_width:(0-a.slide_globaloffset)/a.slide_width;l=e.simp(l,i.slideamount,!1),s=s>=0?s:i.c.find(".active-revslide").index(),s=s>=0?s:0,t="off"===a.infinity?l-s:-o(l,s,i.slideamount),t*=a.slide_width}return t}}(jQuery);

/********************************************
 * REVOLUTION 5.0 EXTENSION - KEN BURN
 * @version: 1.0.0 (03.08.2015)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(){var t=jQuery.fn.revolution;jQuery.extend(!0,t,{stopKenBurn:function(t){void 0!=t.data("kbtl")&&t.data("kbtl").pause()},startKenBurn:function(t,e,a){var r=t.data(),n=t.find(".defaultimg"),s=n.data("lazyload")||n.data("src"),i=(r.owidth/r.oheight,"carousel"===e.sliderType?e.carousel.slide_width:e.ul.width()),o=e.ul.height();t.data("kbtl")&&t.data("kbtl").kill(),a=a||0,0==t.find(".tp-kbimg").length&&(t.append('<div class="tp-kbimg-wrap" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;"><img class="tp-kbimg" src="'+s+'" style="position:absolute;" width="'+r.owidth+'" height="'+r.oheight+'"></div>'),t.data("kenburn",t.find(".tp-kbimg")));var d=function(t,e,a,r,n,s,i){var o=t*a,d=e*a,l=Math.abs(r-o),h=Math.abs(n-d),p=new Object;return p.l=(0-s)*l,p.r=p.l+o,p.t=(0-i)*h,p.b=p.t+d,p.h=s,p.v=i,p},l=function(t,e,a,r,n){var s=t.bgposition.split(" ")||"center center",i="center"==s[0]?"50%":"left"==s[0]||"left"==s[1]?"0%":"right"==s[0]||"right"==s[1]?"100%":s[0],o="center"==s[1]?"50%":"top"==s[0]||"top"==s[1]?"0%":"bottom"==s[0]||"bottom"==s[1]?"100%":s[1];i=parseInt(i,0)/100||0,o=parseInt(o,0)/100||0;var l=new Object;return l.start=d(n.start.width,n.start.height,n.start.scale,e,a,i,o),l.end=d(n.start.width,n.start.height,n.end.scale,e,a,i,o),l},h=function(t,e,a){var r=a.scalestart/100,n=a.scaleend/100,s=void 0!=a.oofsetstart?a.offsetstart.split(" ")||[0,0]:[0,0],i=void 0!=a.offsetend?a.offsetend.split(" ")||[0,0]:[0,0];a.bgposition="center center"==a.bgposition?"50% 50%":a.bgposition;{var o=new Object,d=t*r,h=(d/a.owidth*a.oheight,t*n);h/a.owidth*a.oheight}if(o.start=new Object,o.starto=new Object,o.end=new Object,o.endo=new Object,o.start.width=t,o.start.height=o.start.width/a.owidth*a.oheight,o.start.height<e){var p=e/o.start.height;o.start.height=e,o.start.width=o.start.width*p}o.start.transformOrigin=a.bgposition,o.start.scale=r,o.end.scale=n,o.start.rotation=a.rotatestart+"deg",o.end.rotation=a.rotateend+"deg";var g=l(a,t,e,s,o);s[0]=parseFloat(s[0])+g.start.l,i[0]=parseFloat(i[0])+g.end.l,s[1]=parseFloat(s[1])+g.start.t,i[1]=parseFloat(i[1])+g.end.t;var c=g.start.r-g.start.l,b=g.start.b-g.start.t,u=g.end.r-g.end.l,f=g.end.b-g.end.t;return s[0]=s[0]>0?0:c+s[0]<t?t-c:s[0],i[0]=i[0]>0?0:u+i[0]<t?t-u:i[0],s[1]=s[1]>0?0:b+s[1]<e?e-b:s[1],i[1]=i[1]>0?0:f+i[1]<e?e-f:i[1],o.starto.x=s[0]+"px",o.starto.y=s[1]+"px",o.endo.x=i[0]+"px",o.endo.y=i[1]+"px",o.end.ease=o.endo.ease=a.ease,o.end.force3D=o.endo.force3D=!0,o};void 0!=t.data("kbtl")&&(t.data("kbtl").kill(),t.removeData("kbtl"));var p=t.data("kenburn"),g=p.parent(),c=h(i,o,r),b=new punchgs.TimelineLite;b.pause(),c.start.transformOrigin="0% 0%",c.starto.transformOrigin="0% 0%",b.add(punchgs.TweenLite.fromTo(p,r.duration/1e3,c.start,c.end),0),b.add(punchgs.TweenLite.fromTo(g,r.duration/1e3,c.starto,c.endo),0),b.progress(a),b.play(),t.data("kbtl",b)}})}(jQuery);

/************************************************
 * REVOLUTION 5.2 EXTENSION - LAYER ANIMATION
 * @version: 2.2.1 (23.03.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
************************************************/

!function(a){function e(a,e,t,i,n,o,r){var d=a.find(e);d.css("borderWidth",o+"px"),d.css(t,0-o+"px"),d.css(i,"0px solid transparent"),d.css(n,r)}var t=jQuery.fn.revolution;t.is_mobile();jQuery.extend(!0,t,{animcompleted:function(a,e){var i=a.data("videotype"),n=a.data("autoplay"),o=a.data("autoplayonlyfirsttime");void 0!=i&&"none"!=i&&(1==n||"true"==n||"on"==n||"1sttime"==n||o?(t.playVideo(a,e),t.toggleState(a.data("videotoggledby")),(o||"1sttime"==n)&&(a.data("autoplayonlyfirsttime",!1),a.data("autoplay","off"))):("no1sttime"==n&&a.data("autoplay","on"),t.unToggleState(a.data("videotoggledby"))))},handleStaticLayers:function(a,e){var t=parseInt(a.data("startslide"),0),i=parseInt(a.data("endslide"),0);0>t&&(t=0),0>i&&(i=e.slideamount),0===t&&i===e.slideamount-1&&(i=e.slideamount+1),a.data("startslide",t),a.data("endslide",i)},animateTheCaptions:function(a,e,i,n){var o="carousel"===e.sliderType?0:e.width/2-e.gridwidth[e.curWinRange]*e.bw/2,r=0,d=a.data("index");e.layers=e.layers||new Object,e.layers[d]=e.layers[d]||a.find(".tp-caption"),e.layers["static"]=e.layers["static"]||e.c.find(".tp-static-layers").find(".tp-caption");var s=new Array;if(e.conh=e.c.height(),e.conw=e.c.width(),e.ulw=e.ul.width(),e.ulh=e.ul.height(),e.debugMode){a.addClass("indebugmode"),a.find(".helpgrid").remove(),e.c.find(".hglayerinfo").remove(),a.append('<div class="helpgrid" style="width:'+e.gridwidth[e.curWinRange]*e.bw+"px;height:"+e.gridheight[e.curWinRange]*e.bw+'px;"></div>');var l=a.find(".helpgrid");l.append('<div class="hginfo">Zoom:'+Math.round(100*e.bw)+"% &nbsp;&nbsp;&nbsp; Device Level:"+e.curWinRange+"&nbsp;&nbsp;&nbsp; Grid Preset:"+e.gridwidth[e.curWinRange]+"x"+e.gridheight[e.curWinRange]+"</div>"),e.c.append('<div class="hglayerinfo"></div>'),l.append('<div class="tlhg"></div>')}s&&jQuery.each(s,function(a){var e=jQuery(this);punchgs.TweenLite.set(e.find(".tp-videoposter"),{autoAlpha:1}),punchgs.TweenLite.set(e.find("iframe"),{autoAlpha:0})}),e.layers[d]&&jQuery.each(e.layers[d],function(a,e){s.push(e)}),e.layers["static"]&&jQuery.each(e.layers["static"],function(a,e){s.push(e)}),s&&jQuery.each(s,function(a){t.animateSingleCaption(jQuery(this),e,o,r,a,i)});var p=jQuery("body").find("#"+e.c.attr("id")).find(".tp-bannertimer");p.data("opt",e),void 0!=n&&setTimeout(function(){n.resume()},30)},animateSingleCaption:function(a,r,s,f,b,x,T){var L=x,W=g(a,r,"in",!0),j=a.data("_pw")||a.closest(".tp-parallax-wrap"),C=a.data("_lw")||a.closest(".tp-loop-wrap"),R=a.data("_mw")||a.closest(".tp-mask-wrap"),k=a.data("responsive")||"on",I=a.data("responsive_offset")||"on",_=a.data("basealign")||"grid",Q="grid"===_?r.width:r.ulw,S="grid"===_?r.height:r.ulh,z=jQuery("body").hasClass("rtl");if(a.data("_pw")||(a.data("staticlayer")?a.data("_li",a.closest(".tp-static-layers")):a.data("_li",a.closest(".tp-revslider-slidesli")),a.data("slidelink",a.hasClass("slidelink")),a.data("_pw",j),a.data("_lw",C),a.data("_mw",R)),"fullscreen"==r.sliderLayout&&(f=S/2-r.gridheight[r.curWinRange]*r.bh/2),("on"==r.autoHeight||void 0!=r.minHeight&&r.minHeight>0)&&(f=r.conh/2-r.gridheight[r.curWinRange]*r.bh/2),0>f&&(f=0),r.debugMode){a.closest("li").find(".helpgrid").css({top:f+"px",left:s+"px"});var M=r.c.find(".hglayerinfo");a.on("hover, mouseenter",function(){var e="";a.data()&&jQuery.each(a.data(),function(a,t){"object"!=typeof t&&(e=e+'<span style="white-space:nowrap"><span style="color:#27ae60">'+a+":</span>"+t+"</span>&nbsp; &nbsp; ")}),M.html(e)})}var O=c(a.data("visibility"),r)[r.forcedWinRange]||c(a.data("visibility"),r)||"on";if("off"==O||Q<r.hideCaptionAtLimit&&"on"==a.data("captionhidden")||Q<r.hideAllCaptionAtLimit?a.addClass("tp-hidden-caption"):a.removeClass("tp-hidden-caption"),a.data("layertype","html"),0>s&&(s=0),void 0!=a.data("thumbimage")&&void 0==a.data("videoposter")&&a.data("videoposter",a.data("thumbimage")),a.find("img").length>0){var H=a.find("img");a.data("layertype","image"),0==H.width()&&H.css({width:"auto"}),0==H.height()&&H.css({height:"auto"}),void 0==H.data("ww")&&H.width()>0&&H.data("ww",H.width()),void 0==H.data("hh")&&H.height()>0&&H.data("hh",H.height());var B=H.data("ww"),A=H.data("hh"),D="slide"==_?r.ulw:r.gridwidth[r.curWinRange],F="slide"==_?r.ulh:r.gridheight[r.curWinRange],B=c(H.data("ww"),r)[r.curWinRange]||c(H.data("ww"),r)||"auto",A=c(H.data("hh"),r)[r.curWinRange]||c(H.data("hh"),r)||"auto",P="full"===B||"full-proportional"===B,X="full"===A||"full-proportional"===A;if("full-proportional"===B){var Y=H.data("owidth"),V=H.data("oheight");V/F>Y/D?(B=D,A=V*(D/Y)):(A=F,B=Y*(F/V))}else B=P?D:parseFloat(B),A=X?F:parseFloat(A);void 0==B&&(B=0),void 0==A&&(A=0),"off"!==k?("grid"!=_&&P?H.width(B):H.width(B*r.bw),"grid"!=_&&X?H.height(A):H.height(A*r.bh)):(H.width(B),H.height(A))}"slide"===_&&(s=0,f=0);var N="html5"==a.data("audio")?"audio":"video";if(a.hasClass("tp-videolayer")||a.hasClass("tp-audiolayer")||a.find("iframe").length>0||a.find(N).length>0){if(a.data("layertype","video"),t.manageVideoLayer&&t.manageVideoLayer(a,r,x,L),!x&&!L){a.data("videotype");t.resetVideo&&t.resetVideo(a,r)}var $=a.data("aspectratio");void 0!=$&&$.split(":").length>1&&t.prepareCoveredVideo($,r,a);var H=a.find("iframe")?a.find("iframe"):H=a.find(N),Z=a.find("iframe")?!1:!0,G=a.hasClass("coverscreenvideo");H.css({display:"block"}),void 0==a.data("videowidth")&&(a.data("videowidth",H.width()),a.data("videoheight",H.height()));var U,B=c(a.data("videowidth"),r)[r.curWinRange]||c(a.data("videowidth"),r)||"auto",A=c(a.data("videoheight"),r)[r.curWinRange]||c(a.data("videoheight"),r)||"auto";B=parseFloat(B),A=parseFloat(A),void 0===a.data("cssobj")&&(U=v(a,0),a.data("cssobj",U));var q=u(a.data("cssobj"),r);if("auto"==q.lineHeight&&(q.lineHeight=q.fontSize+4),a.hasClass("fullscreenvideo")||G){s=0,f=0,a.data("x",0),a.data("y",0);var E=S;"on"==r.autoHeight&&(E=r.conh),a.css({width:Q,height:E})}else punchgs.TweenLite.set(a,{paddingTop:Math.round(q.paddingTop*r.bh)+"px",paddingBottom:Math.round(q.paddingBottom*r.bh)+"px",paddingLeft:Math.round(q.paddingLeft*r.bw)+"px",paddingRight:Math.round(q.paddingRight*r.bw)+"px",marginTop:q.marginTop*r.bh+"px",marginBottom:q.marginBottom*r.bh+"px",marginLeft:q.marginLeft*r.bw+"px",marginRight:q.marginRight*r.bw+"px",borderTopWidth:Math.round(q.borderTopWidth*r.bh)+"px",borderBottomWidth:Math.round(q.borderBottomWidth*r.bh)+"px",borderLeftWidth:Math.round(q.borderLeftWidth*r.bw)+"px",borderRightWidth:Math.round(q.borderRightWidth*r.bw)+"px",width:B*r.bw+"px",height:A*r.bh+"px"});(0==Z&&!G||1!=a.data("forcecover")&&!a.hasClass("fullscreenvideo")&&!G)&&(H.width(B*r.bw),H.height(A*r.bh))}var J=a.data("slidelink")||!1;a.find(".tp-resizeme, .tp-resizeme *").each(function(){w(jQuery(this),r,"rekursive",k)}),a.hasClass("tp-resizeme")&&a.find("*").each(function(){w(jQuery(this),r,"rekursive",k)}),w(a,r,0,k);var K=a.outerHeight(),aa=a.css("backgroundColor");e(a,".frontcorner","left","borderRight","borderTopColor",K,aa),e(a,".frontcornertop","left","borderRight","borderBottomColor",K,aa),e(a,".backcorner","right","borderLeft","borderBottomColor",K,aa),e(a,".backcornertop","right","borderLeft","borderTopColor",K,aa),"on"==r.fullScreenAlignForce&&(s=0,f=0);var ea=a.data("arrobj");if(void 0===ea){var ea=new Object;ea.voa=c(a.data("voffset"),r)[r.curWinRange]||c(a.data("voffset"),r)[0],ea.hoa=c(a.data("hoffset"),r)[r.curWinRange]||c(a.data("hoffset"),r)[0],ea.elx=c(a.data("x"),r)[r.curWinRange]||c(a.data("x"),r)[0],ea.ely=c(a.data("y"),r)[r.curWinRange]||c(a.data("y"),r)[0]}var ta=0==ea.voa.length?0:ea.voa,ia=0==ea.hoa.length?0:ea.hoa,na=0==ea.elx.length?0:ea.elx,oa=0==ea.ely.length?0:ea.ely,ra=a.outerWidth(!0),da=a.outerHeight(!0);0==ra&&0==da&&(ra=r.ulw,da=r.ulh);var sa="off"!==I?parseInt(ta,0)*r.bw:parseInt(ta,0),la="off"!==I?parseInt(ia,0)*r.bw:parseInt(ia,0),pa="grid"===_?r.gridwidth[r.curWinRange]*r.bw:Q,ha="grid"===_?r.gridheight[r.curWinRange]*r.bw:S;"on"==r.fullScreenAlignForce&&(pa=r.ulw,ha=r.ulh),na="center"===na||"middle"===na?pa/2-ra/2+la:"left"===na?la:"right"===na?pa-ra-la:"off"!==I?na*r.bw:na,oa="center"==oa||"middle"==oa?ha/2-da/2+sa:"top"==oa?sa:"bottom"==oa?ha-da-sa:"off"!==I?oa*r.bw:oa,z&&!J&&(na+=ra),J&&(na=0);var ca=a.data("lasttriggerstate"),ga=a.data("triggerstate"),ma=void 0!=a.data("start")?a.data("start"):100,va=a.data("end"),ua=T?0:"bytrigger"===ma||"sliderenter"===ma?0:parseFloat(ma)/1e3,fa=na+s,wa=oa+f,ya=a.css("z-Index");T||("reset"==ca&&"bytrigger"!=ma?(a.data("triggerstate","on"),a.data("animdirection","in"),ga="on"):"reset"==ca&&"bytrigger"==ma&&(a.data("triggerstate","off"),a.data("animdirection","out"),ga="off")),punchgs.TweenLite.set(j,{zIndex:ya,top:wa,left:fa,overwrite:"auto"}),0==W&&(L=!0),void 0==a.data("timeline")||L||(2!=W&&a.data("timeline").gotoAndPlay(0),L=!0),!x&&a.data("timeline_out")&&2!=W&&0!=W&&(a.data("timeline_out").kill(),a.data("outstarted",0)),T&&void 0!=a.data("timeline")&&(a.removeData("$anims"),a.data("timeline").pause(0),a.data("timeline").kill(),void 0!=a.data("newhoveranim")&&(a.data("newhoveranim").progress(0),a.data("newhoveranim").kill()),a.removeData("timeline"),punchgs.TweenLite.killTweensOf(a),a.unbind("hover"),a.removeClass("rs-hover-ready"),a.removeData("newhoveranim"));var ba=a.data("timeline")?a.data("timeline").time():0,xa=void 0!==a.data("timeline")?a.data("timeline").progress():0,Ta=a.data("timeline")||new punchgs.TimelineLite({smoothChildTiming:!0});xa=jQuery.isNumeric(xa)?xa:0,Ta.pause();var La={};if(La.svg=void 0!=a.data("svg_src")?a.find("svg"):!1,1>xa&&1!=a.data("outstarted")||2==W||T){var Wa=a;if(void 0!=a.data("mySplitText")&&a.data("mySplitText").revert(),void 0!=a.data("splitin")&&a.data("splitin").match(/chars|words|lines/g)||void 0!=a.data("splitout")&&a.data("splitout").match(/chars|words|lines/g)){var ja=a.find("a").length>0?a.find("a"):a;a.data("mySplitText",new punchgs.SplitText(ja,{type:"lines,words,chars",charsClass:"tp-splitted tp-charsplit",wordsClass:"tp-splitted tp-wordsplit",linesClass:"tp-splitted tp-linesplit"})),a.addClass("splitted")}void 0!==a.data("mySplitText")&&a.data("splitin")&&a.data("splitin").match(/chars|words|lines/g)&&(Wa=a.data("mySplitText")[a.data("splitin")]);var Ca=new Object;La.svg&&(La.idle=o(a.data("svg_idle"),n()),punchgs.TweenLite.set(La.svg,La.idle.anim));var Ra=void 0!=a.data("transform_in")?a.data("transform_in").match(/\(R\)/gi):!1;if(!a.data("$anims")||T||Ra){var ka=i(),Ia=i(),_a=d(),Qa=void 0!==a.data("transform_hover")||void 0!==a.data("style_hover");Ia=p(Ia,a.data("transform_idle")),ka=p(Ia,a.data("transform_in"),1==r.sdir),Qa&&(_a=p(_a,a.data("transform_hover")),_a=m(_a,a.data("style_hover")),La.svg&&($svghover=o(a.data("svg_hover"),n()),void 0!=_a.anim.color&&($svghover.anim.fill=_a.anim.color),a.data("hoversvg",$svghover)),a.data("hover",_a)),ka.elemdelay=void 0==a.data("elementdelay")?0:a.data("elementdelay"),Ia.anim.ease=ka.anim.ease=ka.anim.ease||punchgs.Power1.easeInOut,Qa&&!a.hasClass("rs-hover-ready")&&(a.addClass("rs-hover-ready"),a.hover(function(a){var e=jQuery(a.currentTarget),t=e.data("hover"),i=e.data("timeline");i&&1==i.progress()&&(void 0===e.data("newhoveranim")||"none"===e.data("newhoveranim")?(e.data("newhoveranim",punchgs.TweenLite.to(e,t.speed,t.anim)),La.svg&&e.data("newsvghoveranim",punchgs.TweenLite.to(La.svg,t.speed,e.data("hoversvg").anim))):(e.data("newhoveranim").progress(0),e.data("newhoveranim").play(),La.svg&&e.data("newsvghoveranim").progress(0).play()))},function(a){var e=jQuery(a.currentTarget),t=e.data("timeline");t&&1==t.progress()&&void 0!=e.data("newhoveranim")&&(e.data("newhoveranim").reverse(),La.svg&&e.data("newsvghoveranim").reverse())})),Ca=new Object,Ca.f=ka,Ca.r=Ia,a.data("$anims")}else Ca=a.data("$anims");var Sa=h(a.data("mask_in")),za=new punchgs.TimelineLite;if(Ca.f.anim.x=Ca.f.anim.x*r.bw||l(Ca.f.anim.x,r,ra,da,wa,fa,"horizontal"),Ca.f.anim.y=Ca.f.anim.y*r.bw||l(Ca.f.anim.y,r,ra,da,wa,fa,"vertical"),2!=W||T){if(Wa!=a){var Ma=Ca.r.anim.ease;Ta.add(punchgs.TweenLite.set(a,Ca.r.anim)),Ca.r=i(),Ca.r.anim.ease=Ma}if(Ca.f.anim.visibility="hidden",a.data("eow",ra),a.data("eoh",da),a.data("speed",Ca.f.speed),a.data("ease",Ca.r.anim.ease),za.eventCallback("onStart",function(){punchgs.TweenLite.set(a,{visibility:"visible"}),a.data("iframes")&&a.find("iframe").each(function(){punchgs.TweenLite.set(jQuery(this),{autoAlpha:1})}),punchgs.TweenLite.set(j,{visibility:"visible"});var e={};e.layer=a,e.eventtype="enterstage",e.layertype=a.data("layertype"),a.data("active",!0),e.layersettings=a.data(),r.c.trigger("revolution.layeraction",[e])}),za.eventCallback("onComplete",function(){var e={};e.layer=a,e.eventtype="enteredstage",e.layertype=a.data("layertype"),e.layersettings=a.data(),r.c.trigger("revolution.layeraction",[e]),t.animcompleted(a,r)}),"sliderenter"==ma&&r.overcontainer&&(ua=.6),Ta.add(za.staggerFromTo(Wa,Ca.f.speed,Ca.f.anim,Ca.r.anim,Ca.f.elemdelay),ua),Sa){var Oa=new Object;Oa.ease=Ca.r.anim.ease,Oa.overflow=Sa.anim.overflow="hidden",Oa.overwrite="all",Oa.x=Oa.y=0,Sa.anim.x=Sa.anim.x*r.bw||l(Sa.anim.x,r,ra,da,wa,fa,"horizontal"),Sa.anim.y=Sa.anim.y*r.bw||l(Sa.anim.y,r,ra,da,wa,fa,"vertical"),Ta.add(punchgs.TweenLite.fromTo(R,Ca.f.speed,Sa.anim,Oa,ka.elemdelay),ua)}else Ta.add(punchgs.TweenLite.set(R,{overflow:"visible"},ka.elemdelay),0)}if(a.data("timeline",Ta),r.sliderscrope=void 0===r.sliderscrope?Math.round(99999*Math.random()):r.sliderscrope,W=g(a,r,"in"),void 0===r.endtimeouts&&(r.endtimeouts=[]),(0===xa||2==W)&&"bytrigger"!==va&&!T&&"sliderleave"!=va){if(void 0!=va&&(-1==W||2==W)&&"bytriger"!==va)var Ha=setTimeout(function(){t.endMoveCaption(a,R,j,r)},parseInt(a.data("end"),0));r.endtimeouts.push(Ha)}Ta=a.data("timeline"),"on"==a.data("loopanimation")&&y(C,r.bw),("sliderenter"!=ma||"sliderenter"==ma&&r.overcontainer)&&(-1==W||1==W||T||0==W&&1>xa&&a.hasClass("rev-static-visbile"))&&(1>xa&&xa>0||0==xa&&"bytrigger"!=ma&&"keep"!=ca||0==xa&&"bytrigger"!=ma&&"keep"==ca&&"on"==ga||"bytrigger"==ma&&"keep"==ca&&"on"==ga)&&(Ta.resume(ba),t.toggleState(a.data("layertoggledby")))}"on"==a.data("loopanimation")&&punchgs.TweenLite.set(C,{minWidth:ra,minHeight:da}),0==a.data("slidelink")||1!=a.data("slidelink")&&!a.hasClass("slidelink")?(punchgs.TweenLite.set(R,{width:"auto",height:"auto"}),a.data("slidelink",0)):(punchgs.TweenLite.set(R,{width:"100%",height:"100%"}),a.data("slidelink",1))},endMoveCaption:function(a,e,n,o){if(e=void 0!=e?e:a.data("_mw"),n=void 0!=n?n:a.data("_pw"),a.data("outstarted",1),a.data("timeline"))a.data("timeline").pause();else if(void 0===a.data("_pw"))return;var d=new punchgs.TimelineLite,s=new punchgs.TimelineLite,c=new punchgs.TimelineLite,g=p(i(),a.data("transform_in"),1==o.sdir),m=a.data("transform_out")?p(r(),a.data("transform_out"),1==o.sdir):p(r(),a.data("transform_in"),1==o.sdir),v=a.data("splitout")&&a.data("splitout").match(/words|chars|lines/g)?a.data("mySplitText")[a.data("splitout")]:a,u=void 0==a.data("endelementdelay")?0:a.data("endelementdelay"),f=a.innerWidth(),w=a.innerHeight(),y=n.position();a.data("transform_out")&&a.data("transform_out").match(/auto:auto/g)&&(g.speed=m.speed,g.anim.ease=m.anim.ease,m=g);var b=h(a.data("mask_out"));m.anim.x=m.anim.x*o.bw||l(m.anim.x,o,f,w,y.top,y.left,"horizontal"),m.anim.y=m.anim.y*o.bw||l(m.anim.y,o,f,w,y.top,y.left,"vertical"),s.eventCallback("onStart",function(){var e={};e.layer=a,e.eventtype="leavestage",e.layertype=a.data("layertype"),e.layersettings=a.data(),a.data("active",!1),o.c.trigger("revolution.layeraction",[e])}),s.eventCallback("onComplete",function(){punchgs.TweenLite.set(a,{visibility:"hidden"}),punchgs.TweenLite.set(n,{visibility:"hidden"});var e={};e.layer=a,e.eventtype="leftstage",a.data("active",!1),e.layertype=a.data("layertype"),e.layersettings=a.data(),o.c.trigger("revolution.layeraction",[e]),t.stopVideo&&t.stopVideo(a,o)}),d.add(s.staggerTo(v,m.speed,m.anim,u),0),b?(b.anim.ease=m.anim.ease,b.anim.overflow="hidden",b.anim.x=b.anim.x*o.bw||l(b.anim.x,o,f,w,y.top,y.left,"horizontal"),b.anim.y=b.anim.y*o.bw||l(b.anim.y,o,f,w,y.top,y.left,"vertical"),d.add(c.to(e,m.speed,b.anim,u),0)):d.add(c.set(e,{overflow:"visible",overwrite:"auto"},u),0),a.data("timeline_out",d)},removeTheCaptions:function(a,e){var i=a.data("index"),n=new Array;e.layers[i]&&jQuery.each(e.layers[i],function(a,e){n.push(e)}),e.layers["static"]&&jQuery.each(e.layers["static"],function(a,e){n.push(e)}),e.endtimeouts&&e.endtimeouts.length>0&&jQuery.each(e.endtimeouts,function(a,e){clearTimeout(e)}),e.endtimeouts=new Array,n&&jQuery.each(n,function(a){var i=jQuery(this),n=g(i,e,"out");0!=n&&(b(i),clearTimeout(i.data("videoplaywait")),t.stopVideo&&t.stopVideo(i,e),t.endMoveCaption(i,null,null,e),t.removeMediaFromList&&t.removeMediaFromList(i,e),e.lastplayedvideos=[])})}});var i=function(){var a=new Object;return a.anim=new Object,a.anim.x=0,a.anim.y=0,a.anim.z=0,a.anim.rotationX=0,a.anim.rotationY=0,a.anim.rotationZ=0,a.anim.scaleX=1,a.anim.scaleY=1,a.anim.skewX=0,a.anim.skewY=0,a.anim.opacity=1,a.anim.transformOrigin="50% 50%",a.anim.transformPerspective=600,a.anim.rotation=0,a.anim.ease=punchgs.Power3.easeOut,a.anim.force3D="auto",a.speed=.3,a.anim.autoAlpha=1,a.anim.visibility="visible",a.anim.overwrite="all",a},n=function(){var a=new Object;return a.anim=new Object,a.anim.stroke="none",a.anim.strokeWidth=0,a.anim.strokeDasharray="none",a.anim.strokeDashoffset="0",a},o=function(a,e){var t=a.split(";");return t&&jQuery.each(t,function(a,t){var i=t.split(":"),n=i[0],o=i[1];"sc"==n&&(e.anim.stroke=o),"sw"==n&&(e.anim.strokeWidth=o),"sda"==n&&(e.anim.strokeDasharray=o),"sdo"==n&&(e.anim.strokeDashoffset=o)}),e},r=function(){var a=new Object;return a.anim=new Object,a.anim.x=0,a.anim.y=0,a.anim.z=0,a},d=function(){var a=new Object;return a.anim=new Object,a.speed=.2,a},s=function(a,e){if(jQuery.isNumeric(parseFloat(a)))return parseFloat(a);if(void 0===a||"inherit"===a)return e;if(a.split("{").length>1){var t=a.split(","),i=parseFloat(t[1].split("}")[0]);t=parseFloat(t[0].split("{")[1]),a=Math.random()*(i-t)+t}return a},l=function(a,e,t,i,n,o,r){return!jQuery.isNumeric(a)&&a.match(/%]/g)?(a=a.split("[")[1].split("]")[0],"horizontal"==r?a=(t+2)*parseInt(a,0)/100:"vertical"==r&&(a=(i+2)*parseInt(a,0)/100)):(a="layer_left"===a?0-t:"layer_right"===a?t:a,a="layer_top"===a?0-i:"layer_bottom"===a?i:a,a="left"===a||"stage_left"===a?0-t-o:"right"===a||"stage_right"===a?e.conw-o:"center"===a||"stage_center"===a?e.conw/2-t/2-o:a,a="top"===a||"stage_top"===a?0-i-n:"bottom"===a||"stage_bottom"===a?e.conh-n:"middle"===a||"stage_middle"===a?e.conh/2-i/2-n:a),a},p=function(a,e,t){var i=new Object;if(i=jQuery.extend(!0,{},i,a),void 0===e)return i;var n=e.split(";");return n&&jQuery.each(n,function(a,e){var n=e.split(":"),o=n[0],r=n[1];t&&void 0!=r&&r.length>0&&r.match(/\(R\)/)&&(r=r.replace("(R)",""),r="right"===r?"left":"left"===r?"right":"top"===r?"bottom":"bottom"===r?"top":r,"["===r[0]&&"-"===r[1]?r=r.replace("[-","["):"["===r[0]&&"-"!==r[1]?r=r.replace("[","[-"):"-"===r[0]?r=r.replace("-",""):r[0].match(/[1-9]/)&&(r="-"+r)),void 0!=r&&(r=r.replace(/\(R\)/,""),("rotationX"==o||"rX"==o)&&(i.anim.rotationX=s(r,i.anim.rotationX)+"deg"),("rotationY"==o||"rY"==o)&&(i.anim.rotationY=s(r,i.anim.rotationY)+"deg"),("rotationZ"==o||"rZ"==o)&&(i.anim.rotation=s(r,i.anim.rotationZ)+"deg"),("scaleX"==o||"sX"==o)&&(i.anim.scaleX=s(r,i.anim.scaleX)),("scaleY"==o||"sY"==o)&&(i.anim.scaleY=s(r,i.anim.scaleY)),("opacity"==o||"o"==o)&&(i.anim.opacity=s(r,i.anim.opacity)),i.anim.opacity=0==i.anim.opacity?1e-4:i.anim.opacity,("skewX"==o||"skX"==o)&&(i.anim.skewX=s(r,i.anim.skewX)),("skewY"==o||"skY"==o)&&(i.anim.skewY=s(r,i.anim.skewY)),"x"==o&&(i.anim.x=s(r,i.anim.x)),"y"==o&&(i.anim.y=s(r,i.anim.y)),"z"==o&&(i.anim.z=s(r,i.anim.z)),("transformOrigin"==o||"tO"==o)&&(i.anim.transformOrigin=r.toString()),("transformPerspective"==o||"tP"==o)&&(i.anim.transformPerspective=parseInt(r,0)),("speed"==o||"s"==o)&&(i.speed=parseFloat(r)/1e3),("ease"==o||"e"==o)&&(i.anim.ease=r))}),i},h=function(a){if(void 0===a)return!1;var e=new Object;e.anim=new Object;var t=a.split(";");return t&&jQuery.each(t,function(a,t){t=t.split(":");var i=t[0],n=t[1];"x"==i&&(e.anim.x=n),"y"==i&&(e.anim.y=n),"s"==i&&(e.speed=parseFloat(n)/1e3),("e"==i||"ease"==i)&&(e.anim.ease=n)}),e},c=function(a,e,t){if(void 0==a&&(a=0),!jQuery.isArray(a)&&"string"===jQuery.type(a)&&(a.split(",").length>1||a.split("[").length>1)){a=a.replace("[",""),a=a.replace("]","");var i=a.match(/'/g)?a.split("',"):a.split(",");a=new Array,i&&jQuery.each(i,function(e,t){t=t.replace("'",""),t=t.replace("'",""),a.push(t)})}else{var n=a;jQuery.isArray(a)||(a=new Array,a.push(n))}var n=a[a.length-1];if(a.length<e.rle)for(var o=1;o<=e.curWinRange;o++)a.push(n);return a},g=function(a,e,t,i){var n=-1;if(a.hasClass("tp-static-layer")){a.data("staticlayer",!0);var o=parseInt(a.data("startslide"),0),r=parseInt(a.data("endslide"),0),d=e.c.find(".processing-revslide").index(),s=-1!=d?d:e.c.find(".active-revslide").index();s=-1==s?0:s,"in"===t?a.hasClass("rev-static-visbile")?n=r==s||o>s||s>r?2:0:s>=o&&r>=s||o==s||r==s?(i||(a.addClass("rev-static-visbile"),a.removeClass("rev-static-hidden")),n=1):n=0:a.hasClass("rev-static-visbile")?o>s||s>r?(n=2,i||(a.removeClass("rev-static-visbile"),a.addClass("rev-static-hidden"))):n=0:n=2}return n},m=function(a,e){if(void 0===e)return a;e=e.replace("c:","color:"),e=e.replace("bg:","background-color:"),e=e.replace("bw:","border-width:"),e=e.replace("bc:","border-color:"),e=e.replace("br:","borderRadius:"),e=e.replace("bs:","border-style:"),e=e.replace("td:","text-decoration:");var t=e.split(";");return t&&jQuery.each(t,function(e,t){var i=t.split(":");i[0].length>0&&(a.anim[i[0]]=i[1])}),a},v=function(a,e){var t,i=new Object,n=!1;if("rekursive"==e&&(t=a.closest(".tp-caption"),t&&a.css("fontSize")===t.css("fontSize")&&(n=!0)),i.basealign=a.data("basealign")||"grid",i.fontSize=n?void 0===t.data("fontsize")?parseInt(t.css("fontSize"),0)||0:t.data("fontsize"):void 0===a.data("fontsize")?parseInt(a.css("fontSize"),0)||0:a.data("fontsize"),i.fontWeight=n?void 0===t.data("fontweight")?parseInt(t.css("fontWeight"),0)||0:t.data("fontweight"):void 0===a.data("fontweight")?parseInt(a.css("fontWeight"),0)||0:a.data("fontweight"),i.whiteSpace=n?void 0===t.data("whitespace")?t.css("whitespace")||"normal":t.data("whitespace"):void 0===a.data("whitespace")?a.css("whitespace")||"normal":a.data("whitespace"),-1!==jQuery.inArray(a.data("layertype"),["video","image","audio"])||a.is("img")?i.lineHeight=0:i.lineHeight=n?void 0===t.data("lineheight")?parseInt(t.css("lineHeight"),0)||0:t.data("lineheight"):void 0===a.data("lineheight")?parseInt(a.css("lineHeight"),0)||0:a.data("lineheight"),i.letterSpacing=n?void 0===t.data("letterspacing")?parseFloat(t.css("letterSpacing"),0)||0:t.data("letterspacing"):void 0===a.data("letterspacing")?parseFloat(a.css("letterSpacing"))||0:a.data("letterspacing"),i.paddingTop=void 0===a.data("paddingtop")?parseInt(a.css("paddingTop"),0)||0:a.data("paddingtop"),i.paddingBottom=void 0===a.data("paddingbottom")?parseInt(a.css("paddingBottom"),0)||0:a.data("paddingbottom"),i.paddingLeft=void 0===a.data("paddingleft")?parseInt(a.css("paddingLeft"),0)||0:a.data("paddingleft"),i.paddingRight=void 0===a.data("paddingright")?parseInt(a.css("paddingRight"),0)||0:a.data("paddingright"),i.marginTop=void 0===a.data("margintop")?parseInt(a.css("marginTop"),0)||0:a.data("margintop"),i.marginBottom=void 0===a.data("marginbottom")?parseInt(a.css("marginBottom"),0)||0:a.data("marginbottom"),i.marginLeft=void 0===a.data("marginleft")?parseInt(a.css("marginLeft"),0)||0:a.data("marginleft"),i.marginRight=void 0===a.data("marginright")?parseInt(a.css("marginRight"),0)||0:a.data("marginright"),i.borderTopWidth=void 0===a.data("bordertopwidth")?parseInt(a.css("borderTopWidth"),0)||0:a.data("bordertopwidth"),i.borderBottomWidth=void 0===a.data("borderbottomwidth")?parseInt(a.css("borderBottomWidth"),0)||0:a.data("borderbottomwidth"),i.borderLeftWidth=void 0===a.data("borderleftwidth")?parseInt(a.css("borderLeftWidth"),0)||0:a.data("borderleftwidth"),i.borderRightWidth=void 0===a.data("borderrightwidth")?parseInt(a.css("borderRightWidth"),0)||0:a.data("borderrightwidth"),"rekursive"!=e){if(i.color=void 0===a.data("color")?"nopredefinedcolor":a.data("color"),i.whiteSpace=n?void 0===t.data("whitespace")?t.css("whiteSpace")||"nowrap":t.data("whitespace"):void 0===a.data("whitespace")?a.css("whiteSpace")||"nowrap":a.data("whitespace"),i.minWidth=void 0===a.data("width")?parseInt(a.css("minWidth"),0)||0:a.data("width"),i.minHeight=void 0===a.data("height")?parseInt(a.css("minHeight"),0)||0:a.data("height"),void 0!=a.data("videowidth")&&void 0!=a.data("videoheight")){var o=a.data("videowidth"),r=a.data("videoheight");o="100%"===o?"none":o,r="100%"===r?"none":r,a.data("width",o),a.data("height",r)}i.maxWidth=void 0===a.data("width")?parseInt(a.css("maxWidth"),0)||"none":a.data("width"),i.maxHeight=void 0===a.data("height")?parseInt(a.css("maxHeight"),0)||"none":a.data("height"),i.wan=void 0===a.data("wan")?parseInt(a.css("-webkit-transition"),0)||"none":a.data("wan"),i.moan=void 0===a.data("moan")?parseInt(a.css("-moz-animation-transition"),0)||"none":a.data("moan"),i.man=void 0===a.data("man")?parseInt(a.css("-ms-animation-transition"),0)||"none":a.data("man"),i.ani=void 0===a.data("ani")?parseInt(a.css("transition"),0)||"none":a.data("ani")}return i.styleProps=a.css(["background-color","border-top-color","border-bottom-color","border-right-color","border-left-color","border-top-style","border-bottom-style","border-left-style","border-right-style","border-left-width","border-right-width","border-bottom-width","border-top-width","color","text-decoration","font-style","borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]),i},u=function(a,e){var t=new Object;return a&&jQuery.each(a,function(i,n){t[i]=c(n,e)[e.curWinRange]||a[i]}),t},f=function(a,e,t,i){return a=jQuery.isNumeric(a)?a*e+"px":a,a="full"===a?i:"auto"===a||"none"===a?t:a},w=function(a,e,t,i){var n;try{if("BR"==a[0].nodeName||"br"==a[0].tagName)return!1}catch(o){}void 0===a.data("cssobj")?(n=v(a,t),a.data("cssobj",n)):n=a.data("cssobj");var r=u(n,e),d=e.bw,s=e.bh;if("off"===i&&(d=1,s=1),"auto"==r.lineHeight&&(r.lineHeight=r.fontSize+4),!a.hasClass("tp-splitted")){a.css("-webkit-transition","none"),a.css("-moz-transition","none"),a.css("-ms-transition","none"),a.css("transition","none");var l=void 0!==a.data("transform_hover")||void 0!==a.data("style_hover");if(l&&punchgs.TweenLite.set(a,r.styleProps),punchgs.TweenLite.set(a,{fontSize:Math.round(r.fontSize*d)+"px",fontWeight:r.fontWeight,letterSpacing:Math.floor(r.letterSpacing*d)+"px",paddingTop:Math.round(r.paddingTop*s)+"px",paddingBottom:Math.round(r.paddingBottom*s)+"px",paddingLeft:Math.round(r.paddingLeft*d)+"px",paddingRight:Math.round(r.paddingRight*d)+"px",marginTop:r.marginTop*s+"px",marginBottom:r.marginBottom*s+"px",marginLeft:r.marginLeft*d+"px",marginRight:r.marginRight*d+"px",borderTopWidth:Math.round(r.borderTopWidth*s)+"px",borderBottomWidth:Math.round(r.borderBottomWidth*s)+"px",borderLeftWidth:Math.round(r.borderLeftWidth*d)+"px",borderRightWidth:Math.round(r.borderRightWidth*d)+"px",lineHeight:Math.round(r.lineHeight*s)+"px",overwrite:"auto"}),"rekursive"!=t){var p="slide"==r.basealign?e.ulw:e.gridwidth[e.curWinRange],h="slide"==r.basealign?e.ulh:e.gridheight[e.curWinRange],c=f(r.maxWidth,d,"none",p),g=f(r.maxHeight,s,"none",h),m=f(r.minWidth,d,"0px",p),w=f(r.minHeight,s,"0px",h);punchgs.TweenLite.set(a,{maxWidth:c,maxHeight:g,minWidth:m,minHeight:w,whiteSpace:r.whiteSpace,overwrite:"auto"}),"nopredefinedcolor"!=r.color&&punchgs.TweenLite.set(a,{color:r.color,overwrite:"auto"}),void 0!=a.data("svg_src")&&("nopredefinedcolor"!=r.color?punchgs.TweenLite.set(a.find("svg"),{fill:r.color,overwrite:"auto"}):punchgs.TweenLite.set(a.find("svg"),{fill:r.styleProps.color,overwrite:"auto"}))}setTimeout(function(){a.css("-webkit-transition",a.data("wan")),a.css("-moz-transition",a.data("moan")),a.css("-ms-transition",a.data("man")),a.css("transition",a.data("ani"))},30)}},y=function(a,e){if(a.hasClass("rs-pendulum")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var t=void 0==a.data("startdeg")?-20:a.data("startdeg"),i=void 0==a.data("enddeg")?20:a.data("enddeg"),n=void 0==a.data("speed")?2:a.data("speed"),o=void 0==a.data("origin")?"50% 50%":a.data("origin"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("ease");t*=e,i*=e,a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",rotation:t,transformOrigin:o},{rotation:i,ease:r})),a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",rotation:i,transformOrigin:o},{rotation:t,ease:r,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-rotate")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var t=void 0==a.data("startdeg")?0:a.data("startdeg"),i=void 0==a.data("enddeg")?360:a.data("enddeg");n=void 0==a.data("speed")?2:a.data("speed"),o=void 0==a.data("origin")?"50% 50%":a.data("origin"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("easing"),t*=e,i*=e,a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",rotation:t,transformOrigin:o},{rotation:i,ease:r,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-slideloop")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var d=void 0==a.data("xs")?0:a.data("xs"),s=void 0==a.data("ys")?0:a.data("ys"),l=void 0==a.data("xe")?0:a.data("xe"),p=void 0==a.data("ye")?0:a.data("ye"),n=void 0==a.data("speed")?2:a.data("speed"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("easing");d*=e,s*=e,l*=e,p*=e,a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",x:d,y:s},{x:l,y:p,ease:r})),a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",x:l,y:p},{x:d,y:s,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-pulse")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var h=void 0==a.data("zoomstart")?0:a.data("zoomstart"),c=void 0==a.data("zoomend")?0:a.data("zoomend"),n=void 0==a.data("speed")?2:a.data("speed"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("easing");a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",scale:h},{scale:c,ease:r})),a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",scale:c},{scale:h,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-wave")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var g=void 0==a.data("angle")?10:parseInt(a.data("angle"),0),m=void 0==a.data("radius")?10:parseInt(a.data("radius"),0),n=void 0==a.data("speed")?-20:a.data("speed"),o=void 0==a.data("origin")?"50% 50%":a.data("origin"),v=o.split(" "),u=new Object;v.length>=1?(u.x=v[0],u.y=v[1]):(u.x="50%",u.y="50%"),g*=e,m*=e;var f=0-a.height()/2+m*(-1+parseInt(u.y,0)/100),w=a.width()*(-.5+parseInt(u.x,0)/100),y={a:0,ang:g,element:a,unit:m,xoffset:w,yoffset:f};a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(y,n,{a:360},{a:0,force3D:"auto",ease:punchgs.Linear.easeNone,onUpdate:function(){var a=y.a*(Math.PI/180);punchgs.TweenLite.to(y.element,.1,{force3D:"auto",x:y.xoffset+Math.cos(a)*y.unit,y:y.yoffset+y.unit*(1-Math.sin(a))})},onComplete:function(){a.data("loop-timeline").restart()}}))}},b=function(a){a.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function(){var a=jQuery(this);void 0!=a.data("loop-timeline")&&(a.data("loop-timeline").pause(),a.data("loop-timeline",null))})}}(jQuery);

/*****************************************************************************************************
 * jquery.themepunch.revmigrate.js - jQuery Plugin for Revolution Slider Migration from 4.x to 5.0   
 * @version: 1.0.2 (20.01.2016)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
*****************************************************************************************************/
!function(t){var a=jQuery.fn.revolution;jQuery.extend(!0,a,{migration:function(t,a){return a=o(a),e(t,a),a}});var o=function(t){if(t.parallaxLevels||t.parallaxBgFreeze){var a=new Object;a.type=t.parallax,a.levels=t.parallaxLevels,a.bgparallax="on"==t.parallaxBgFreeze?"off":"on",a.disable_onmobile=t.parallaxDisableOnMobile,t.parallax=a}if(void 0===t.disableProgressBar&&(t.disableProgressBar=t.hideTimerBar||"off"),(t.startwidth||t.startheight)&&(t.gridwidth=t.startwidth,t.gridheight=t.startheight),void 0===t.sliderType&&(t.sliderType="standard"),"on"===t.fullScreen&&(t.sliderLayout="fullscreen"),"on"===t.fullWidth&&(t.sliderLayout="fullwidth"),void 0===t.sliderLayout&&(t.sliderLayout="auto"),void 0===t.navigation){var o=new Object;if("solo"==t.navigationArrows||"nextto"==t.navigationArrows){var e=new Object;e.enable=!0,e.style=t.navigationStyle||"",e.hide_onmobile="on"===t.hideArrowsOnMobile?!0:!1,e.hide_onleave=t.hideThumbs>0?!0:!1,e.hide_delay=t.hideThumbs>0?t.hideThumbs:200,e.hide_delay_mobile=t.hideNavDelayOnMobile||1500,e.hide_under=0,e.tmp="",e.left={h_align:t.soloArrowLeftHalign,v_align:t.soloArrowLeftValign,h_offset:t.soloArrowLeftHOffset,v_offset:t.soloArrowLeftVOffset},e.right={h_align:t.soloArrowRightHalign,v_align:t.soloArrowRightValign,h_offset:t.soloArrowRightHOffset,v_offset:t.soloArrowRightVOffset},o.arrows=e}if("bullet"==t.navigationType){var r=new Object;r.style=t.navigationStyle||"",r.enable=!0,r.hide_onmobile="on"===t.hideArrowsOnMobile?!0:!1,r.hide_onleave=t.hideThumbs>0?!0:!1,r.hide_delay=t.hideThumbs>0?t.hideThumbs:200,r.hide_delay_mobile=t.hideNavDelayOnMobile||1500,r.hide_under=0,r.direction="horizontal",r.h_align=t.navigationHAlign||"center",r.v_align=t.navigationVAlign||"bottom",r.space=5,r.h_offset=t.navigationHOffset||0,r.v_offset=t.navigationVOffset||20,r.tmp='<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>',o.bullets=r}if("thumb"==t.navigationType){var i=new Object;i.style=t.navigationStyle||"",i.enable=!0,i.width=t.thumbWidth||100,i.height=t.thumbHeight||50,i.min_width=t.thumbWidth||100,i.wrapper_padding=2,i.wrapper_color="#f5f5f5",i.wrapper_opacity=1,i.visibleAmount=t.thumbAmount||3,i.hide_onmobile="on"===t.hideArrowsOnMobile?!0:!1,i.hide_onleave=t.hideThumbs>0?!0:!1,i.hide_delay=t.hideThumbs>0?t.hideThumbs:200,i.hide_delay_mobile=t.hideNavDelayOnMobile||1500,i.hide_under=0,i.direction="horizontal",i.span=!1,i.position="inner",i.space=2,i.h_align=t.navigationHAlign||"center",i.v_align=t.navigationVAlign||"bottom",i.h_offset=t.navigationHOffset||0,i.v_offset=t.navigationVOffset||20,i.tmp='<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',o.thumbnails=i}t.navigation=o,t.navigation.keyboardNavigation=t.keyboardNavigation||"on",t.navigation.onHoverStop=t.onHoverStop||"on",t.navigation.touch={touchenabled:t.touchenabled||"on",swipe_treshold:t.swipe_treshold||75,swipe_min_touches:t.swipe_min_touches||1,drag_block_vertical:t.drag_block_vertical||!1}}return void 0==t.fallbacks&&(t.fallbacks={isJoomla:t.isJoomla||!1,panZoomDisableOnMobile:t.parallaxDisableOnMobile||"off",simplifyAll:t.simplifyAll||"on",nextSlideOnWindowFocus:t.nextSlideOnWindowFocus||"off",disableFocusListener:t.disableFocusListener||!0}),t},e=function(t,a){var o=new Object,e=t.width(),r=t.height();o.skewfromleftshort="x:-50;skX:85;o:0",o.skewfromrightshort="x:50;skX:-85;o:0",o.sfl="x:-50;o:0",o.sfr="x:50;o:0",o.sft="y:-50;o:0",o.sfb="y:50;o:0",o.skewfromleft="x:top;skX:85;o:0",o.skewfromright="x:bottom;skX:-85;o:0",o.lfl="x:top;o:0",o.lfr="x:bottom;o:0",o.lft="y:left;o:0",o.lfb="y:right;o:0",o.fade="o:0";720*Math.random()-360;t.find(".tp-caption").each(function(){var t=jQuery(this),a=(Math.random()*(2*e)-e,Math.random()*(2*r)-r,3*Math.random(),720*Math.random()-360,70*Math.random()-35,70*Math.random()-35,t.attr("class"));o.randomrotate="x:{-400,400};y:{-400,400};sX:{0,2};sY:{0,2};rZ:{-180,180};rX:{-180,180};rY:{-180,180};o:0;",a.match("randomrotate")?t.data("transform_in",o.randomrotate):a.match(/\blfl\b/)?t.data("transform_in",o.lfl):a.match(/\blfr\b/)?t.data("transform_in",o.lfr):a.match(/\blft\b/)?t.data("transform_in",o.lft):a.match(/\blfb\b/)?t.data("transform_in",o.lfb):a.match(/\bsfl\b/)?t.data("transform_in",o.sfl):a.match(/\bsfr\b/)?t.data("transform_in",o.sfr):a.match(/\bsft\b/)?t.data("transform_in",o.sft):a.match(/\bsfb\b/)?t.data("transform_in",o.sfb):a.match(/\bskewfromleftshort\b/)?t.data("transform_in",o.skewfromleftshort):a.match(/\bskewfromrightshort\b/)?t.data("transform_in",o.skewfromrightshort):a.match(/\bskewfromleft\b/)?t.data("transform_in",o.skewfromleft):a.match(/\bskewfromright\b/)?t.data("transform_in",o.skewfromright):a.match(/\bfade\b/)&&t.data("transform_in",o.fade),a.match(/\brandomrotateout\b/)?t.data("transform_out",o.randomrotate):a.match(/\bltl\b/)?t.data("transform_out",o.lfl):a.match(/\bltr\b/)?t.data("transform_out",o.lfr):a.match(/\bltt\b/)?t.data("transform_out",o.lft):a.match(/\bltb\b/)?t.data("transform_out",o.lfb):a.match(/\bstl\b/)?t.data("transform_out",o.sfl):a.match(/\bstr\b/)?t.data("transform_out",o.sfr):a.match(/\bstt\b/)?t.data("transform_out",o.sft):a.match(/\bstb\b/)?t.data("transform_out",o.sfb):a.match(/\bskewtoleftshortout\b/)?t.data("transform_out",o.skewfromleftshort):a.match(/\bskewtorightshortout\b/)?t.data("transform_out",o.skewfromrightshort):a.match(/\bskewtoleftout\b/)?t.data("transform_out",o.skewfromleft):a.match(/\bskewtorightout\b/)?t.data("transform_out",o.skewfromright):a.match(/\bfadeout\b/)&&t.data("transform_out",o.fade),void 0!=t.data("customin")&&t.data("transform_in",t.data("customin")),void 0!=t.data("customout")&&t.data("transform_out",t.data("customout"))})}}(jQuery);

/********************************************
 * REVOLUTION 5.2 EXTENSION - NAVIGATION
 * @version: 1.2.4 (10.03.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(t){var e=jQuery.fn.revolution,i=e.is_mobile();jQuery.extend(!0,e,{hideUnHideNav:function(t){var e=t.c.width(),i=t.navigation.arrows,a=t.navigation.bullets,n=t.navigation.thumbnails,r=t.navigation.tabs;p(i)&&T(t.c.find(".tparrows"),i.hide_under,e,i.hide_over),p(a)&&T(t.c.find(".tp-bullets"),a.hide_under,e,a.hide_over),p(n)&&T(t.c.parent().find(".tp-thumbs"),n.hide_under,e,n.hide_over),p(r)&&T(t.c.parent().find(".tp-tabs"),r.hide_under,e,r.hide_over),y(t)},resizeThumbsTabs:function(t,e){if(t.navigation&&t.navigation.tabs.enable||t.navigation&&t.navigation.thumbnails.enable){var i=(jQuery(window).width()-480)/500,a=new punchgs.TimelineLite,r=t.navigation.tabs,s=t.navigation.thumbnails,o=t.navigation.bullets;if(a.pause(),i=i>1?1:0>i?0:i,p(r)&&(e||r.width>r.min_width)&&n(i,a,t.c,r,t.slideamount,"tab"),p(s)&&(e||s.width>s.min_width)&&n(i,a,t.c,s,t.slideamount,"thumb"),p(o)&&e){var d=t.c.find(".tp-bullets");d.find(".tp-bullet").each(function(t){var e=jQuery(this),i=t+1,a=e.outerWidth()+parseInt(void 0===o.space?0:o.space,0),n=e.outerHeight()+parseInt(void 0===o.space?0:o.space,0);"vertical"===o.direction?(e.css({top:(i-1)*n+"px",left:"0px"}),d.css({height:(i-1)*n+e.outerHeight(),width:e.outerWidth()})):(e.css({left:(i-1)*a+"px",top:"0px"}),d.css({width:(i-1)*a+e.outerWidth(),height:e.outerHeight()}))})}a.play(),y(t)}return!0},updateNavIndexes:function(t){function i(t){a.find(t).lenght>0&&a.find(t).each(function(t){jQuery(this).data("liindex",t)})}var a=t.c;i(".tp-tab"),i(".tp-bullet"),i(".tp-thumb"),e.resizeThumbsTabs(t,!0),e.manageNavigation(t)},manageNavigation:function(t){var i=e.getHorizontalOffset(t.c.parent(),"left"),n=e.getHorizontalOffset(t.c.parent(),"right");p(t.navigation.bullets)&&("fullscreen"!=t.sliderLayout&&"fullwidth"!=t.sliderLayout&&(t.navigation.bullets.h_offset_old=void 0===t.navigation.bullets.h_offset_old?t.navigation.bullets.h_offset:t.navigation.bullets.h_offset_old,t.navigation.bullets.h_offset="center"===t.navigation.bullets.h_align?t.navigation.bullets.h_offset_old+i/2-n/2:t.navigation.bullets.h_offset_old+i-n),b(t.c.find(".tp-bullets"),t.navigation.bullets,t)),p(t.navigation.thumbnails)&&b(t.c.parent().find(".tp-thumbs"),t.navigation.thumbnails,t),p(t.navigation.tabs)&&b(t.c.parent().find(".tp-tabs"),t.navigation.tabs,t),p(t.navigation.arrows)&&("fullscreen"!=t.sliderLayout&&"fullwidth"!=t.sliderLayout&&(t.navigation.arrows.left.h_offset_old=void 0===t.navigation.arrows.left.h_offset_old?t.navigation.arrows.left.h_offset:t.navigation.arrows.left.h_offset_old,t.navigation.arrows.left.h_offset="right"===t.navigation.arrows.left.h_align?t.navigation.arrows.left.h_offset_old+n:t.navigation.arrows.left.h_offset_old+i,t.navigation.arrows.right.h_offset_old=void 0===t.navigation.arrows.right.h_offset_old?t.navigation.arrows.right.h_offset:t.navigation.arrows.right.h_offset_old,t.navigation.arrows.right.h_offset="right"===t.navigation.arrows.right.h_align?t.navigation.arrows.right.h_offset_old+n:t.navigation.arrows.right.h_offset_old+i),b(t.c.find(".tp-leftarrow.tparrows"),t.navigation.arrows.left,t),b(t.c.find(".tp-rightarrow.tparrows"),t.navigation.arrows.right,t)),p(t.navigation.thumbnails)&&a(t.c.parent().find(".tp-thumbs"),t.navigation.thumbnails),p(t.navigation.tabs)&&a(t.c.parent().find(".tp-tabs"),t.navigation.tabs)},createNavigation:function(t,e){var n=t.parent(),r=e.navigation.arrows,d=e.navigation.bullets,u=e.navigation.thumbnails,f=e.navigation.tabs,m=p(r),b=p(d),_=p(u),y=p(f);s(t,e),o(t,e),m&&v(t,r,e),e.li.each(function(i){var a=jQuery(e.li[e.li.length-1-i]),n=jQuery(this);b&&(e.navigation.bullets.rtl?w(t,d,a,e):w(t,d,n,e)),_&&(e.navigation.thumbnails.rtl?x(t,u,a,"tp-thumb",e):x(t,u,n,"tp-thumb",e)),y&&(e.navigation.tabs.rtl?x(t,f,a,"tp-tab",e):x(t,f,n,"tp-tab",e))}),t.bind("revolution.slide.onafterswap revolution.nextslide.waiting",function(){var i=0==t.find(".next-revslide").length?t.find(".active-revslide").data("index"):t.find(".next-revslide").data("index");t.find(".tp-bullet").each(function(){var t=jQuery(this);t.data("liref")===i?t.addClass("selected"):t.removeClass("selected")}),n.find(".tp-thumb, .tp-tab").each(function(){var t=jQuery(this);t.data("liref")===i?(t.addClass("selected"),t.hasClass("tp-tab")?a(n.find(".tp-tabs"),f):a(n.find(".tp-thumbs"),u)):t.removeClass("selected")});var s=0,o=!1;e.thumbs&&jQuery.each(e.thumbs,function(t,e){s=o===!1?t:s,o=e.id===i||t===i?!0:o});var d=s>0?s-1:e.slideamount-1,l=s+1==e.slideamount?0:s+1;if(r.enable===!0){var h=r.tmp;if(jQuery.each(e.thumbs[d].params,function(t,e){h=h.replace(e.from,e.to)}),r.left.j.html(h),h=r.tmp,l>e.slideamount)return;jQuery.each(e.thumbs[l].params,function(t,e){h=h.replace(e.from,e.to)}),r.right.j.html(h),punchgs.TweenLite.set(r.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+e.thumbs[d].src+")"}),punchgs.TweenLite.set(r.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+e.thumbs[l].src+")"})}}),h(r),h(d),h(u),h(f),n.on("mouseenter mousemove",function(){n.hasClass("tp-mouseover")||(n.addClass("tp-mouseover"),punchgs.TweenLite.killDelayedCallsTo(g),m&&r.hide_onleave&&g(n.find(".tparrows"),r,"show"),b&&d.hide_onleave&&g(n.find(".tp-bullets"),d,"show"),_&&u.hide_onleave&&g(n.find(".tp-thumbs"),u,"show"),y&&f.hide_onleave&&g(n.find(".tp-tabs"),f,"show"),i&&(n.removeClass("tp-mouseover"),c(t,e)))}),n.on("mouseleave",function(){n.removeClass("tp-mouseover"),c(t,e)}),m&&r.hide_onleave&&g(n.find(".tparrows"),r,"hide",0),b&&d.hide_onleave&&g(n.find(".tp-bullets"),d,"hide",0),_&&u.hide_onleave&&g(n.find(".tp-thumbs"),u,"hide",0),y&&f.hide_onleave&&g(n.find(".tp-tabs"),f,"hide",0),_&&l(n.find(".tp-thumbs"),e),y&&l(n.find(".tp-tabs"),e),"carousel"===e.sliderType&&l(t,e,!0),"on"==e.navigation.touch.touchenabled&&l(t,e,"swipebased")}});var a=function(t,e){var i=(t.hasClass("tp-thumbs")?".tp-thumbs":".tp-tabs",t.hasClass("tp-thumbs")?".tp-thumb-mask":".tp-tab-mask"),a=t.hasClass("tp-thumbs")?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",n=t.hasClass("tp-thumbs")?".tp-thumb":".tp-tab",r=t.find(i),s=r.find(a),o=e.direction,d="vertical"===o?r.find(n).first().outerHeight(!0)+e.space:r.find(n).first().outerWidth(!0)+e.space,l="vertical"===o?r.height():r.width(),h=parseInt(r.find(n+".selected").data("liindex"),0),p=l/d,u="vertical"===o?r.height():r.width(),c=0-h*d,g="vertical"===o?s.height():s.width(),v=0-(g-u)>c?0-(g-u):v>0?0:c,f=s.data("offset");p>2&&(v=0>=c-(f+d)?0-d>c-(f+d)?f:v+d:v,v=d>c-d+f+l&&c+(Math.round(p)-2)*d<f?c+(Math.round(p)-2)*d:v),v=0-(g-u)>v?0-(g-u):v>0?0:v,"vertical"!==o&&r.width()>=s.width()&&(v=0),"vertical"===o&&r.height()>=s.height()&&(v=0),t.hasClass("dragged")||("vertical"===o?s.data("tmmove",punchgs.TweenLite.to(s,.5,{top:v+"px",ease:punchgs.Power3.easeInOut})):s.data("tmmove",punchgs.TweenLite.to(s,.5,{left:v+"px",ease:punchgs.Power3.easeInOut})),s.data("offset",v))},n=function(t,e,i,a,n,r){var s=i.parent().find(".tp-"+r+"s"),o=s.find(".tp-"+r+"s-inner-wrapper"),d=s.find(".tp-"+r+"-mask"),l=a.width*t<a.min_width?a.min_width:Math.round(a.width*t),h=Math.round(l/a.width*a.height),p="vertical"===a.direction?l:l*n+a.space*(n-1),u="vertical"===a.direction?h*n+a.space*(n-1):h,c="vertical"===a.direction?{width:l+"px"}:{height:h+"px"};e.add(punchgs.TweenLite.set(s,c)),e.add(punchgs.TweenLite.set(o,{width:p+"px",height:u+"px"})),e.add(punchgs.TweenLite.set(d,{width:p+"px",height:u+"px"}));var g=o.find(".tp-"+r);return g&&jQuery.each(g,function(t,i){"vertical"===a.direction?e.add(punchgs.TweenLite.set(i,{top:t*(h+parseInt(void 0===a.space?0:a.space,0)),width:l+"px",height:h+"px"})):"horizontal"===a.direction&&e.add(punchgs.TweenLite.set(i,{left:t*(l+parseInt(void 0===a.space?0:a.space,0)),width:l+"px",height:h+"px"}))}),e},r=function(t){var e=0,i=0,a=0,n=0,r=1,s=1,o=1;return"detail"in t&&(i=t.detail),"wheelDelta"in t&&(i=-t.wheelDelta/120),"wheelDeltaY"in t&&(i=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(e=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(e=i,i=0),a=e*r,n=i*r,"deltaY"in t&&(n=t.deltaY),"deltaX"in t&&(a=t.deltaX),(a||n)&&t.deltaMode&&(1==t.deltaMode?(a*=s,n*=s):(a*=o,n*=o)),a&&!e&&(e=1>a?-1:1),n&&!i&&(i=1>n?-1:1),n=navigator.userAgent.match(/mozilla/i)?10*n:n,(n>300||-300>n)&&(n/=10),{spinX:e,spinY:i,pixelX:a,pixelY:n}},s=function(t,i){"on"===i.navigation.keyboardNavigation&&jQuery(document).keydown(function(a){("horizontal"==i.navigation.keyboard_direction&&39==a.keyCode||"vertical"==i.navigation.keyboard_direction&&40==a.keyCode)&&(i.sc_indicator="arrow",i.sc_indicator_dir=0,e.callingNewSlide(i,t,1)),("horizontal"==i.navigation.keyboard_direction&&37==a.keyCode||"vertical"==i.navigation.keyboard_direction&&38==a.keyCode)&&(i.sc_indicator="arrow",i.sc_indicator_dir=1,e.callingNewSlide(i,t,-1))})},o=function(t,i){if("on"===i.navigation.mouseScrollNavigation||"carousel"===i.navigation.mouseScrollNavigation){i.isIEEleven=!!navigator.userAgent.match(/Trident.*rv\:11\./),i.isSafari=!!navigator.userAgent.match(/safari/i),i.ischrome=!!navigator.userAgent.match(/chrome/i);var a=i.ischrome?-49:i.isIEEleven||i.isSafari?-9:navigator.userAgent.match(/mozilla/i)?-29:-49,n=i.ischrome?49:i.isIEEleven||i.isSafari?9:navigator.userAgent.match(/mozilla/i)?29:49;t.on("mousewheel DOMMouseScroll",function(s){var o=r(s.originalEvent),d=t.find(".tp-revslider-slidesli.active-revslide").index(),l=t.find(".tp-revslider-slidesli.processing-revslide").index(),h=-1!=d&&0==d||-1!=l&&0==l?!0:!1,p=-1!=d&&d==i.slideamount-1||1!=l&&l==i.slideamount-1?!0:!1,u=!0;"carousel"==i.navigation.mouseScrollNavigation&&(h=p=!1),-1==l?o.pixelY<a?(h||(i.sc_indicator="arrow","reverse"!==i.navigation.mouseScrollReverse&&(i.sc_indicator_dir=0,e.callingNewSlide(i,t,-1)),u=!1),p||(i.sc_indicator="arrow","reverse"===i.navigation.mouseScrollReverse&&(i.sc_indicator_dir=1,e.callingNewSlide(i,t,1)),u=!1)):o.pixelY>n&&(p||(i.sc_indicator="arrow","reverse"!==i.navigation.mouseScrollReverse&&(i.sc_indicator_dir=1,e.callingNewSlide(i,t,1)),u=!1),h||(i.sc_indicator="arrow","reverse"===i.navigation.mouseScrollReverse&&(i.sc_indicator_dir=0,e.callingNewSlide(i,t,-1)),u=!1)):u=!1;var c=i.c.offset().top-jQuery("body").scrollTop(),g=c+i.c.height();return"carousel"!=i.navigation.mouseScrollNavigation?("reverse"!==i.navigation.mouseScrollReverse&&(c>0&&o.pixelY>0||g<jQuery(window).height()&&o.pixelY<0)&&(u=!0),"reverse"===i.navigation.mouseScrollReverse&&(0>c&&o.pixelY<0||g>jQuery(window).height()&&o.pixelY>0)&&(u=!0)):u=!1,0==u?(s.preventDefault(s),!1):void 0})}},d=function(t,e,a){return t=i?jQuery(a.target).closest("."+t).length||jQuery(a.srcElement).closest("."+t).length:jQuery(a.toElement).closest("."+t).length||jQuery(a.originalTarget).closest("."+t).length,t===!0||1===t?1:0},l=function(t,a,n){t.data("opt",a);var r=a.carousel;jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"),r.Limit="endless";var s=(i||"Firefox"===e.get_browser(),t),o="vertical"===a.navigation.thumbnails.direction||"vertical"===a.navigation.tabs.direction?"none":"vertical",l=a.navigation.touch.swipe_direction||"horizontal";o="swipebased"==n&&"vertical"==l?"none":n?"vertical":o,jQuery.fn.swipetp||(jQuery.fn.swipetp=jQuery.fn.swipe),jQuery.fn.swipetp.defaults&&jQuery.fn.swipetp.defaults.excludedElements||jQuery.fn.swipetp.defaults||(jQuery.fn.swipetp.defaults=new Object),jQuery.fn.swipetp.defaults.excludedElements="label, button, input, select, textarea, .noSwipe",s.swipetp({allowPageScroll:o,triggerOnTouchLeave:!0,treshold:a.navigation.touch.swipe_treshold,fingers:a.navigation.touch.swipe_min_touches,excludeElements:jQuery.fn.swipetp.defaults.excludedElements,swipeStatus:function(i,n,s,o,h,p,u){var c=d("rev_slider_wrapper",t,i),g=d("tp-thumbs",t,i),v=d("tp-tabs",t,i),f=jQuery(this).attr("class"),m=f.match(/tp-tabs|tp-thumb/gi)?!0:!1;if("carousel"===a.sliderType&&(("move"===n||"end"===n||"cancel"==n)&&a.dragStartedOverSlider&&!a.dragStartedOverThumbs&&!a.dragStartedOverTabs||"start"===n&&c>0&&0===g&&0===v))switch(a.dragStartedOverSlider=!0,o=s&&s.match(/left|up/g)?Math.round(-1*o):o=Math.round(1*o),n){case"start":void 0!==r.positionanim&&(r.positionanim.kill(),r.slide_globaloffset="off"===r.infinity?r.slide_offset:e.simp(r.slide_offset,r.maxwidth)),r.overpull="none",r.wrap.addClass("dragged");break;case"move":if(r.slide_offset="off"===r.infinity?r.slide_globaloffset+o:e.simp(r.slide_globaloffset+o,r.maxwidth),"off"===r.infinity){var b="center"===r.horizontal_align?(r.wrapwidth/2-r.slide_width/2-r.slide_offset)/r.slide_width:(0-r.slide_offset)/r.slide_width;"none"!==r.overpull&&0!==r.overpull||!(0>b||b>a.slideamount-1)?b>=0&&b<=a.slideamount-1&&(b>=0&&o>r.overpull||b<=a.slideamount-1&&o<r.overpull)&&(r.overpull=0):r.overpull=o,r.slide_offset=0>b?r.slide_offset+(r.overpull-o)/1.1+Math.sqrt(Math.abs((r.overpull-o)/1.1)):b>a.slideamount-1?r.slide_offset+(r.overpull-o)/1.1-Math.sqrt(Math.abs((r.overpull-o)/1.1)):r.slide_offset}e.organiseCarousel(a,s,!0,!0);break;case"end":case"cancel":r.slide_globaloffset=r.slide_offset,r.wrap.removeClass("dragged"),e.carouselToEvalPosition(a,s),a.dragStartedOverSlider=!1,a.dragStartedOverThumbs=!1,a.dragStartedOverTabs=!1}else{if(("move"!==n&&"end"!==n&&"cancel"!=n||a.dragStartedOverSlider||!a.dragStartedOverThumbs&&!a.dragStartedOverTabs)&&!("start"===n&&c>0&&(g>0||v>0))){if("end"==n&&!m){if(a.sc_indicator="arrow","horizontal"==l&&"left"==s||"vertical"==l&&"up"==s)return a.sc_indicator_dir=0,e.callingNewSlide(a,a.c,1),!1;if("horizontal"==l&&"right"==s||"vertical"==l&&"down"==s)return a.sc_indicator_dir=1,e.callingNewSlide(a,a.c,-1),!1}return a.dragStartedOverSlider=!1,a.dragStartedOverThumbs=!1,a.dragStartedOverTabs=!1,!0}g>0&&(a.dragStartedOverThumbs=!0),v>0&&(a.dragStartedOverTabs=!0);var w=a.dragStartedOverThumbs?".tp-thumbs":".tp-tabs",_=a.dragStartedOverThumbs?".tp-thumb-mask":".tp-tab-mask",x=a.dragStartedOverThumbs?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",y=a.dragStartedOverThumbs?".tp-thumb":".tp-tab",T=a.dragStartedOverThumbs?a.navigation.thumbnails:a.navigation.tabs;o=s&&s.match(/left|up/g)?Math.round(-1*o):o=Math.round(1*o);var S=t.parent().find(_),j=S.find(x),C=T.direction,L="vertical"===C?j.height():j.width(),Q="vertical"===C?S.height():S.width(),k="vertical"===C?S.find(y).first().outerHeight(!0)+T.space:S.find(y).first().outerWidth(!0)+T.space,I=void 0===j.data("offset")?0:parseInt(j.data("offset"),0),O=0;switch(n){case"start":t.parent().find(w).addClass("dragged"),I="vertical"===C?j.position().top:j.position().left,j.data("offset",I),j.data("tmmove")&&j.data("tmmove").pause();break;case"move":if(Q>=L)return!1;O=I+o,O=O>0?"horizontal"===C?O-j.width()*(O/j.width()*O/j.width()):O-j.height()*(O/j.height()*O/j.height()):O;var H="vertical"===C?0-(j.height()-S.height()):0-(j.width()-S.width());O=H>O?"horizontal"===C?O+j.width()*(O-H)/j.width()*(O-H)/j.width():O+j.height()*(O-H)/j.height()*(O-H)/j.height():O,"vertical"===C?punchgs.TweenLite.set(j,{top:O+"px"}):punchgs.TweenLite.set(j,{left:O+"px"});break;case"end":case"cancel":if(m)return O=I+o,O="vertical"===C?O<0-(j.height()-S.height())?0-(j.height()-S.height()):O:O<0-(j.width()-S.width())?0-(j.width()-S.width()):O,O=O>0?0:O,O=Math.abs(o)>k/10?0>=o?Math.floor(O/k)*k:Math.ceil(O/k)*k:0>o?Math.ceil(O/k)*k:Math.floor(O/k)*k,O="vertical"===C?O<0-(j.height()-S.height())?0-(j.height()-S.height()):O:O<0-(j.width()-S.width())?0-(j.width()-S.width()):O,O=O>0?0:O,"vertical"===C?punchgs.TweenLite.to(j,.5,{top:O+"px",ease:punchgs.Power3.easeOut}):punchgs.TweenLite.to(j,.5,{left:O+"px",ease:punchgs.Power3.easeOut}),O=O?O:"vertical"===C?j.position().top:j.position().left,j.data("offset",O),j.data("distance",o),setTimeout(function(){a.dragStartedOverSlider=!1,a.dragStartedOverThumbs=!1,a.dragStartedOverTabs=!1},100),t.parent().find(w).removeClass("dragged"),!1}}}})},h=function(t){t.hide_delay=jQuery.isNumeric(parseInt(t.hide_delay,0))?t.hide_delay/1e3:.2,t.hide_delay_mobile=jQuery.isNumeric(parseInt(t.hide_delay_mobile,0))?t.hide_delay_mobile/1e3:.2},p=function(t){return t&&t.enable},u=function(t){return t&&t.enable&&t.hide_onleave===!0&&(void 0===t.position?!0:!t.position.match(/outer/g))},c=function(t,e){var a=t.parent();u(e.navigation.arrows)&&punchgs.TweenLite.delayedCall(i?e.navigation.arrows.hide_delay_mobile:e.navigation.arrows.hide_delay,g,[a.find(".tparrows"),e.navigation.arrows,"hide"]),u(e.navigation.bullets)&&punchgs.TweenLite.delayedCall(i?e.navigation.bullets.hide_delay_mobile:e.navigation.bullets.hide_delay,g,[a.find(".tp-bullets"),e.navigation.bullets,"hide"]),u(e.navigation.thumbnails)&&punchgs.TweenLite.delayedCall(i?e.navigation.thumbnails.hide_delay_mobile:e.navigation.thumbnails.hide_delay,g,[a.find(".tp-thumbs"),e.navigation.thumbnails,"hide"]),u(e.navigation.tabs)&&punchgs.TweenLite.delayedCall(i?e.navigation.tabs.hide_delay_mobile:e.navigation.tabs.hide_delay,g,[a.find(".tp-tabs"),e.navigation.tabs,"hide"])},g=function(t,e,i,a){switch(a=void 0===a?.5:a,i){case"show":punchgs.TweenLite.to(t,a,{autoAlpha:1,ease:punchgs.Power3.easeInOut,overwrite:"auto"});break;case"hide":punchgs.TweenLite.to(t,a,{autoAlpha:0,ease:punchgs.Power3.easeInOu,overwrite:"auto"})}},v=function(t,e,i){e.style=void 0===e.style?"":e.style,e.left.style=void 0===e.left.style?"":e.left.style,e.right.style=void 0===e.right.style?"":e.right.style,0===t.find(".tp-leftarrow.tparrows").length&&t.append('<div class="tp-leftarrow tparrows '+e.style+" "+e.left.style+'">'+e.tmp+"</div>"),0===t.find(".tp-rightarrow.tparrows").length&&t.append('<div class="tp-rightarrow tparrows '+e.style+" "+e.right.style+'">'+e.tmp+"</div>");var a=t.find(".tp-leftarrow.tparrows"),n=t.find(".tp-rightarrow.tparrows");e.rtl?(a.click(function(){i.sc_indicator="arrow",i.sc_indicator_dir=0,t.revnext()}),n.click(function(){i.sc_indicator="arrow",i.sc_indicator_dir=1,t.revprev()})):(n.click(function(){i.sc_indicator="arrow",i.sc_indicator_dir=0,t.revnext()}),a.click(function(){i.sc_indicator="arrow",i.sc_indicator_dir=1,t.revprev()})),e.right.j=t.find(".tp-rightarrow.tparrows"),e.left.j=t.find(".tp-leftarrow.tparrows"),e.padding_top=parseInt(i.carousel.padding_top||0,0),e.padding_bottom=parseInt(i.carousel.padding_bottom||0,0),b(a,e.left,i),b(n,e.right,i),e.left.opt=i,e.right.opt=i,("outer-left"==e.position||"outer-right"==e.position)&&(i.outernav=!0)},f=function(t,e,i){var a=t.outerHeight(!0),n=(t.outerWidth(!0),void 0==e.opt?0:0==i.conh?i.height:i.conh),r="layergrid"==e.container?"fullscreen"==i.sliderLayout?i.height/2-i.gridheight[i.curWinRange]*i.bh/2:"on"==i.autoHeight||void 0!=i.minHeight&&i.minHeight>0?n/2-i.gridheight[i.curWinRange]*i.bh/2:0:0,s="top"===e.v_align?{top:"0px",y:Math.round(e.v_offset+r)+"px"}:"center"===e.v_align?{top:"50%",y:Math.round(0-a/2+e.v_offset)+"px"}:{top:"100%",y:Math.round(0-(a+e.v_offset+r))+"px"};t.hasClass("outer-bottom")||punchgs.TweenLite.set(t,s)},m=function(t,e,i){var a=(t.outerHeight(!0),t.outerWidth(!0)),n="layergrid"==e.container?"carousel"===i.sliderType?0:i.width/2-i.gridwidth[i.curWinRange]*i.bw/2:0,r="left"===e.h_align?{left:"0px",x:Math.round(e.h_offset+n)+"px"}:"center"===e.h_align?{left:"50%",x:Math.round(0-a/2+e.h_offset)+"px"}:{left:"100%",x:Math.round(0-(a+e.h_offset+n))+"px"};punchgs.TweenLite.set(t,r)},b=function(t,e,i){var a=t.closest(".tp-simpleresponsive").length>0?t.closest(".tp-simpleresponsive"):t.closest(".tp-revslider-mainul").length>0?t.closest(".tp-revslider-mainul"):t.closest(".rev_slider_wrapper").length>0?t.closest(".rev_slider_wrapper"):t.parent().find(".tp-revslider-mainul"),n=a.width(),r=a.height();if(f(t,e,i),m(t,e,i),"outer-left"!==e.position||"fullwidth"!=e.sliderLayout&&"fullscreen"!=e.sliderLayout?"outer-right"!==e.position||"fullwidth"!=e.sliderLayout&&"fullscreen"!=e.sliderLayout||punchgs.TweenLite.set(t,{right:0-t.outerWidth()+"px",x:e.h_offset+"px"}):punchgs.TweenLite.set(t,{left:0-t.outerWidth()+"px",x:e.h_offset+"px"}),t.hasClass("tp-thumbs")||t.hasClass("tp-tabs")){var s=t.data("wr_padding"),o=t.data("maxw"),d=t.data("maxh"),l=t.hasClass("tp-thumbs")?t.find(".tp-thumb-mask"):t.find(".tp-tab-mask"),h=parseInt(e.padding_top||0,0),p=parseInt(e.padding_bottom||0,0);o>n&&"outer-left"!==e.position&&"outer-right"!==e.position?(punchgs.TweenLite.set(t,{left:"0px",x:0,maxWidth:n-2*s+"px"}),punchgs.TweenLite.set(l,{maxWidth:n-2*s+"px"})):(punchgs.TweenLite.set(t,{maxWidth:o+"px"}),punchgs.TweenLite.set(l,{maxWidth:o+"px"})),d+2*s>r&&"outer-bottom"!==e.position&&"outer-top"!==e.position?(punchgs.TweenLite.set(t,{top:"0px",y:0,maxHeight:h+p+(r-2*s)+"px"}),punchgs.TweenLite.set(l,{maxHeight:h+p+(r-2*s)+"px"})):(punchgs.TweenLite.set(t,{maxHeight:d+"px"}),punchgs.TweenLite.set(l,{maxHeight:d+"px"})),"outer-left"!==e.position&&"outer-right"!==e.position&&(h=0,p=0),e.span===!0&&"vertical"===e.direction?(punchgs.TweenLite.set(t,{maxHeight:h+p+(r-2*s)+"px",height:h+p+(r-2*s)+"px",top:0-h,y:0}),f(l,e,i)):e.span===!0&&"horizontal"===e.direction&&(punchgs.TweenLite.set(t,{maxWidth:"100%",width:n-2*s+"px",left:0,x:0}),m(l,e,i))}},w=function(t,e,i,a){0===t.find(".tp-bullets").length&&(e.style=void 0===e.style?"":e.style,t.append('<div class="tp-bullets '+e.style+" "+e.direction+'"></div>'));var n=t.find(".tp-bullets"),r=i.data("index"),s=e.tmp;jQuery.each(a.thumbs[i.index()].params,function(t,e){s=s.replace(e.from,e.to)}),n.append('<div class="justaddedbullet tp-bullet">'+s+"</div>");var o=t.find(".justaddedbullet"),d=t.find(".tp-bullet").length,l=o.outerWidth()+parseInt(void 0===e.space?0:e.space,0),h=o.outerHeight()+parseInt(void 0===e.space?0:e.space,0);"vertical"===e.direction?(o.css({top:(d-1)*h+"px",left:"0px"}),n.css({height:(d-1)*h+o.outerHeight(),width:o.outerWidth()})):(o.css({left:(d-1)*l+"px",top:"0px"}),n.css({width:(d-1)*l+o.outerWidth(),height:o.outerHeight()})),o.find(".tp-bullet-image").css({backgroundImage:"url("+a.thumbs[i.index()].src+")"}),o.data("liref",r),o.click(function(){a.sc_indicator="bullet",t.revcallslidewithid(r),t.find(".tp-bullet").removeClass("selected"),jQuery(this).addClass("selected")}),o.removeClass("justaddedbullet"),e.padding_top=parseInt(a.carousel.padding_top||0,0),e.padding_bottom=parseInt(a.carousel.padding_bottom||0,0),e.opt=a,("outer-left"==e.position||"outer-right"==e.position)&&(a.outernav=!0),n.addClass("nav-pos-hor-"+e.h_align),n.addClass("nav-pos-ver-"+e.v_align),n.addClass("nav-dir-"+e.direction),b(n,e,a)},_=function(t,e){e=parseFloat(e),t=t.replace("#","");var i=parseInt(t.substring(0,2),16),a=parseInt(t.substring(2,4),16),n=parseInt(t.substring(4,6),16),r="rgba("+i+","+a+","+n+","+e+")";return r},x=function(t,e,i,a,n){var r="tp-thumb"===a?".tp-thumbs":".tp-tabs",s="tp-thumb"===a?".tp-thumb-mask":".tp-tab-mask",o="tp-thumb"===a?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",d="tp-thumb"===a?".tp-thumb":".tp-tab",l="tp-thumb"===a?".tp-thumb-image":".tp-tab-image";if(e.visibleAmount=e.visibleAmount>n.slideamount?n.slideamount:e.visibleAmount,e.sliderLayout=n.sliderLayout,0===t.parent().find(r).length){e.style=void 0===e.style?"":e.style;var h=e.span===!0?"tp-span-wrapper":"",p='<div class="'+a+"s "+h+" "+e.position+" "+e.style+'"><div class="'+a+'-mask"><div class="'+a+'s-inner-wrapper" style="position:relative;"></div></div></div>';"outer-top"===e.position?t.parent().prepend(p):"outer-bottom"===e.position?t.after(p):t.append(p),e.padding_top=parseInt(n.carousel.padding_top||0,0),e.padding_bottom=parseInt(n.carousel.padding_bottom||0,0),("outer-left"==e.position||"outer-right"==e.position)&&(n.outernav=!0)}var u=i.data("index"),c=t.parent().find(r),g=c.find(s),v=g.find(o),f="horizontal"===e.direction?e.width*e.visibleAmount+e.space*(e.visibleAmount-1):e.width,m="horizontal"===e.direction?e.height:e.height*e.visibleAmount+e.space*(e.visibleAmount-1),w=e.tmp;jQuery.each(n.thumbs[i.index()].params,function(t,e){w=w.replace(e.from,e.to)}),v.append('<div data-liindex="'+i.index()+'" data-liref="'+u+'" class="justaddedthumb '+a+'" style="width:'+e.width+"px;height:"+e.height+'px;">'+w+"</div>");var x=c.find(".justaddedthumb"),y=c.find(d).length,T=x.outerWidth()+parseInt(void 0===e.space?0:e.space,0),S=x.outerHeight()+parseInt(void 0===e.space?0:e.space,0);x.find(l).css({backgroundImage:"url("+n.thumbs[i.index()].src+")"}),"vertical"===e.direction?(x.css({top:(y-1)*S+"px",left:"0px"}),v.css({height:(y-1)*S+x.outerHeight(),width:x.outerWidth()})):(x.css({left:(y-1)*T+"px",top:"0px"}),v.css({width:(y-1)*T+x.outerWidth(),height:x.outerHeight()})),c.data("maxw",f),c.data("maxh",m),c.data("wr_padding",e.wrapper_padding);var j="outer-top"===e.position||"outer-bottom"===e.position?"relative":"absolute";"outer-top"!==e.position&&"outer-bottom"!==e.position||"center"!==e.h_align?"0":"auto";g.css({maxWidth:f+"px",maxHeight:m+"px",overflow:"hidden",position:"relative"}),c.css({maxWidth:f+"px",maxHeight:m+"px",overflow:"visible",position:j,background:_(e.wrapper_color,e.wrapper_opacity),padding:e.wrapper_padding+"px",boxSizing:"contet-box"}),x.click(function(){n.sc_indicator="bullet";var e=t.parent().find(o).data("distance");e=void 0===e?0:e,Math.abs(e)<10&&(t.revcallslidewithid(u),t.parent().find(r).removeClass("selected"),jQuery(this).addClass("selected"))}),x.removeClass("justaddedthumb"),e.opt=n,c.addClass("nav-pos-hor-"+e.h_align),c.addClass("nav-pos-ver-"+e.v_align),c.addClass("nav-dir-"+e.direction),b(c,e,n)},y=function(t){var e=t.c.parent().find(".outer-top"),i=t.c.parent().find(".outer-bottom");t.top_outer=e.hasClass("tp-forcenotvisible")?0:e.outerHeight()||0,t.bottom_outer=i.hasClass("tp-forcenotvisible")?0:i.outerHeight()||0},T=function(t,e,i,a){e>i||i>a?t.addClass("tp-forcenotvisible"):t.removeClass("tp-forcenotvisible")}}(jQuery);

/********************************************
 * REVOLUTION 5.1.6 EXTENSION - PARALLAX
 * @version: 1.4 (10.03.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(e){var a=jQuery.fn.revolution,r=a.is_mobile();jQuery.extend(!0,a,{checkForParallax:function(e,t){function l(e){if("3D"==o.type||"3d"==o.type){e.find(".slotholder").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>'),e.find(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:'+o.ddd_layer_overflow+';"></div>'),e.find(".rs-parallaxlevel-tobggroup").closest(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');var a=e.find(".dddwrapper"),r=e.find(".dddwrapper-layer"),l=e.find(".dddwrapper-layertobggroup");l.appendTo(a),"carousel"==t.sliderType&&("on"==o.ddd_shadow&&a.addClass("dddwrappershadow"),punchgs.TweenLite.set(a,{borderRadius:t.carousel.border_radius})),punchgs.TweenLite.set(e,{overflow:"visible",transformStyle:"preserve-3d",perspective:1600}),punchgs.TweenLite.set(a,{force3D:"auto",transformOrigin:"50% 50%"}),punchgs.TweenLite.set(r,{force3D:"auto",transformOrigin:"50% 50%",zIndex:5}),punchgs.TweenLite.set(t.ul,{transformStyle:"preserve-3d",transformPerspective:1600})}}var o=t.parallax;if(r&&"on"==o.disable_onmobile)return!1;("3D"==o.type||"3d"==o.type)&&(punchgs.TweenLite.set(t.c,{overflow:o.ddd_overflow}),punchgs.TweenLite.set(t.ul,{overflow:o.ddd_overflow}),"carousel"!=t.sliderType&&"on"==o.ddd_shadow&&(t.c.prepend('<div class="dddwrappershadow"></div>'),punchgs.TweenLite.set(t.c.find(".dddwrappershadow"),{force3D:"auto",transformPerspective:1600,transformOrigin:"50% 50%",width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:0}))),t.li.each(function(){l(jQuery(this))}),("3D"==o.type||"3d"==o.type&&t.c.find(".tp-static-layers").length>0)&&(punchgs.TweenLite.set(t.c.find(".tp-static-layers"),{top:0,left:0,width:"100%",height:"100%"}),l(t.c.find(".tp-static-layers")));for(var s=1;s<=o.levels.length;s++)t.c.find(".rs-parallaxlevel-"+s).each(function(){var e=jQuery(this),a=e.closest(".tp-parallax-wrap");a.data("parallaxlevel",o.levels[s-1]),a.addClass("tp-parallax-container")});("mouse"==o.type||"scroll+mouse"==o.type||"mouse+scroll"==o.type||"3D"==o.type||"3d"==o.type)&&(e.mouseenter(function(a){var r=e.find(".active-revslide"),t=e.offset().top,l=e.offset().left,o=a.pageX-l,s=a.pageY-t;r.data("enterx",o),r.data("entery",s)}),e.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath",function(a,r){var l=r&&r.li?r.li:e.find(".active-revslide");if("enterpoint"==o.origo){var s=e.offset().top,i=e.offset().left;void 0==l.data("enterx")&&l.data("enterx",a.pageX-i),void 0==l.data("entery")&&l.data("entery",a.pageY-s);var d=l.data("enterx")||a.pageX-i,n=l.data("entery")||a.pageY-s,p=d-(a.pageX-i),c=n-(a.pageY-s),u=o.speed/1e3||.4}else var s=e.offset().top,i=e.offset().left,p=t.conw/2-(a.pageX-i),c=t.conh/2-(a.pageY-s),u=o.speed/1e3||3;"mouseleave"==a.type&&(p=o.ddd_lasth||0,c=o.ddd_lastv||0,u=1.5);var h=[];if(l.find(".tp-parallax-container").each(function(e){h.push(jQuery(this))}),e.find(".tp-static-layers .tp-parallax-container").each(function(){h.push(jQuery(this))}),jQuery.each(h,function(){var e=jQuery(this),a=parseInt(e.data("parallaxlevel"),0),r="3D"==o.type||"3d"==o.type?a/200:a/100,t=p*r,l=c*r;"scroll+mouse"==o.type||"mouse+scroll"==o.type?punchgs.TweenLite.to(e,u,{force3D:"auto",x:t,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,u,{force3D:"auto",x:t,y:l,ease:punchgs.Power3.easeOut,overwrite:"all"})}),"3D"==o.type||"3d"==o.type){var w=".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";"carousel"===t.sliderType&&(w=".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer"),t.c.find(w).each(function(){var e=jQuery(this),r=o.levels[o.levels.length-1]/200,l=p*r,s=c*r,i=0==t.conw?0:Math.round(p/t.conw*r*100)||0,d=0==t.conh?0:Math.round(c/t.conh*r*100)||0,n=e.closest("li"),h=0,w=!1;e.hasClass("dddwrapper-layer")&&(h=o.ddd_z_correction||65,w=!0),e.hasClass("dddwrapper-layer")&&(l=0,s=0),n.hasClass("active-revslide")||"carousel"!=t.sliderType?"on"!=o.ddd_bgfreeze||w?punchgs.TweenLite.to(e,u,{rotationX:d,rotationY:-i,x:l,z:h,y:s,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,z:0,x:0,y:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==a.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}}),r&&(window.ondeviceorientation=function(a){var r=Math.round(a.beta||0)-70,l=Math.round(a.gamma||0),s=e.find(".active-revslide");if(jQuery(window).width()>jQuery(window).height()){var i=l;l=r,r=i}var d=e.width(),n=e.height(),p=360/d*l,c=180/n*r,u=o.speed/1e3||3,h=[];if(s.find(".tp-parallax-container").each(function(e){h.push(jQuery(this))}),e.find(".tp-static-layers .tp-parallax-container").each(function(){h.push(jQuery(this))}),jQuery.each(h,function(){var e=jQuery(this),a=parseInt(e.data("parallaxlevel"),0),r=a/100,t=p*r*2,l=c*r*4;punchgs.TweenLite.to(e,u,{force3D:"auto",x:t,y:l,ease:punchgs.Power3.easeOut,overwrite:"all"})}),"3D"==o.type||"3d"==o.type){var w=".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";"carousel"===t.sliderType&&(w=".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer"),t.c.find(w).each(function(){var e=jQuery(this),r=o.levels[o.levels.length-1]/200;offsh=p*r,offsv=c*r*3,offrv=0==t.conw?0:Math.round(p/t.conw*r*500)||0,offrh=0==t.conh?0:Math.round(c/t.conh*r*700)||0,li=e.closest("li"),zz=0,itslayer=!1,e.hasClass("dddwrapper-layer")&&(zz=o.ddd_z_correction||65,itslayer=!0),e.hasClass("dddwrapper-layer")&&(offsh=0,offsv=0),li.hasClass("active-revslide")||"carousel"!=t.sliderType?"on"!=o.ddd_bgfreeze||itslayer?punchgs.TweenLite.to(e,u,{rotationX:offrh,rotationY:-offrv,x:offsh,z:zz,y:offsv,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(e,.5,{force3D:"auto",rotationY:0,z:0,x:0,y:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==a.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}})),a.scrollTicker(t,e)},scrollTicker:function(e,t){1!=e.scrollTicker&&(e.scrollTicker=!0,r?(punchgs.TweenLite.ticker.fps(150),punchgs.TweenLite.ticker.addEventListener("tick",function(){a.scrollHandling(e)},t,!1,1)):jQuery(window).on("scroll mousewheel DOMMouseScroll",function(){a.scrollHandling(e,!0)})),a.scrollHandling(e,!0)},scrollHandling:function(e,t){function l(e,a){e.lastscrolltop=a}e.lastwindowheight=e.lastwindowheight||jQuery(window).height();var o=e.c.offset().top,s=jQuery(window).scrollTop(),i=new Object,d=e.viewPort,n=e.parallax;if(e.lastscrolltop==s&&!e.duringslidechange&&!t)return!1;punchgs.TweenLite.delayedCall(.2,l,[e,s]),i.top=o-s,i.h=0==e.conh?e.c.height():e.conh,i.bottom=o-s+i.h;var p=i.top<0||i.h>e.lastwindowheight?i.top/i.h:i.bottom>e.lastwindowheight?(i.bottom-e.lastwindowheight)/i.h:0;if(e.scrollproc=p,a.callBackHandling&&a.callBackHandling(e,"parallax","start"),d.enable){var c=1-Math.abs(p);c=0>c?0:c,jQuery.isNumeric(d.visible_area)||-1!==d.visible_area.indexOf("%")&&(d.visible_area=parseInt(d.visible_area)/100),1-d.visible_area<=c?e.inviewport||(e.inviewport=!0,a.enterInViewPort(e)):e.inviewport&&(e.inviewport=!1,a.leaveViewPort(e))}if(r&&"on"==e.parallax.disable_onmobile)return!1;var u=new punchgs.TimelineLite;u.pause(),"3d"!=n.type&&"3D"!=n.type&&(("scroll"==n.type||"scroll+mouse"==n.type||"mouse+scroll"==n.type)&&e.c.find(".tp-parallax-container").each(function(a){var r=jQuery(this),t=parseInt(r.data("parallaxlevel"),0)/100,l=p*-(t*e.conh)||0;r.data("parallaxoffset",l),u.add(punchgs.TweenLite.set(r,{force3D:"auto",y:l}),0)}),e.c.find(".tp-revslider-slidesli .slotholder, .tp-revslider-slidesli .rs-background-video-layer").each(function(){var a=jQuery(this),r=a.data("bgparallax")||e.parallax.bgparallax;if(r="on"==r?1:r,void 0!==r||"off"!==r){var t=e.parallax.levels[parseInt(r,0)-1]/100,l=p*-(t*e.conh)||0;jQuery.isNumeric(l)&&u.add(punchgs.TweenLite.set(a,{position:"absolute",top:"0px",left:"0px",backfaceVisibility:"hidden",force3D:"true",y:l+"px"}),0)}})),a.callBackHandling&&a.callBackHandling(e,"parallax","end"),u.play(0)}})}(jQuery);

/************************************************
 * REVOLUTION 5.2 EXTENSION - SLIDE ANIMATIONS
 * @version: 1.1.2 (23.02.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
************************************************/
!function(t){var e=jQuery.fn.revolution;jQuery.extend(!0,e,{animateSlide:function(t,e,o,a,i,r,s,l,d){return n(t,e,o,a,i,r,s,l,d)}});var o=function(t,o,a,i){var n=t,r=n.find(".defaultimg"),s=n.data("zoomstart"),l=n.data("rotationstart");void 0!=r.data("currotate")&&(l=r.data("currotate")),void 0!=r.data("curscale")&&"box"==i?s=100*r.data("curscale"):void 0!=r.data("curscale")&&(s=r.data("curscale")),e.slotSize(r,o);var d=r.attr("src"),h=r.css("backgroundColor"),f=o.width,c=o.height,p=r.data("fxof"),u=0;"on"==o.autoHeight&&(c=o.c.height()),void 0==p&&(p=0);var g=0,w=r.data("bgfit"),v=r.data("bgrepeat"),m=r.data("bgposition");switch(void 0==w&&(w="cover"),void 0==v&&(v="no-repeat"),void 0==m&&(m="center center"),i){case"box":for(var x=0,y=0,T=0;T<o.slots;T++){y=0;for(var z=0;z<o.slots;z++)n.append('<div class="slot" style="position:absolute;top:'+(u+y)+"px;left:"+(p+x)+"px;width:"+o.slotw+"px;height:"+o.sloth+'px;overflow:hidden;"><div class="slotslide" data-x="'+x+'" data-y="'+y+'" style="position:absolute;top:0px;left:0px;width:'+o.slotw+"px;height:"+o.sloth+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-y)+"px;left:"+(0-x)+"px;width:"+f+"px;height:"+c+"px;background-color:"+h+";background-image:url("+d+");background-repeat:"+v+";background-size:"+w+";background-position:"+m+';"></div></div></div>'),y+=o.sloth,void 0!=s&&void 0!=l&&punchgs.TweenLite.set(n.find(".slot").last(),{rotationZ:l});x+=o.slotw}break;case"vertical":case"horizontal":if("horizontal"==i){if(!a)var g=0-o.slotw;for(var z=0;z<o.slots;z++)n.append('<div class="slot" style="position:absolute;top:'+(0+u)+"px;left:"+(p+z*o.slotw)+"px;overflow:hidden;width:"+(o.slotw+.6)+"px;height:"+c+'px"><div class="slotslide" style="position:absolute;top:0px;left:'+g+"px;width:"+(o.slotw+.6)+"px;height:"+c+'px;overflow:hidden;"><div style="background-color:'+h+";position:absolute;top:0px;left:"+(0-z*o.slotw)+"px;width:"+f+"px;height:"+c+"px;background-image:url("+d+");background-repeat:"+v+";background-size:"+w+";background-position:"+m+';"></div></div></div>'),void 0!=s&&void 0!=l&&punchgs.TweenLite.set(n.find(".slot").last(),{rotationZ:l})}else{if(!a)var g=0-o.sloth;for(var z=0;z<o.slots+2;z++)n.append('<div class="slot" style="position:absolute;top:'+(u+z*o.sloth)+"px;left:"+p+"px;overflow:hidden;width:"+f+"px;height:"+o.sloth+'px"><div class="slotslide" style="position:absolute;top:'+g+"px;left:0px;width:"+f+"px;height:"+o.sloth+'px;overflow:hidden;"><div style="background-color:'+h+";position:absolute;top:"+(0-z*o.sloth)+"px;left:0px;width:"+f+"px;height:"+c+"px;background-image:url("+d+");background-repeat:"+v+";background-size:"+w+";background-position:"+m+';"></div></div></div>'),void 0!=s&&void 0!=l&&punchgs.TweenLite.set(n.find(".slot").last(),{rotationZ:l})}}},a=function(t,e,o,a,i){function n(){jQuery.each(y,function(t,e){(e[0]==o||e[8]==o)&&(w=e[1],v=e[2],m=x),x+=1})}var r=punchgs.Power1.easeIn,s=punchgs.Power1.easeOut,l=punchgs.Power1.easeInOut,d=punchgs.Power2.easeIn,h=punchgs.Power2.easeOut,f=punchgs.Power2.easeInOut,c=(punchgs.Power3.easeIn,punchgs.Power3.easeOut),p=punchgs.Power3.easeInOut,u=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],g=[16,17,18,19,20,21,22,23,24,25,27],w=0,v=1,m=0,x=0,y=(new Array,[["boxslide",0,1,10,0,"box",!1,null,0,s,s,500,6],["boxfade",1,0,10,0,"box",!1,null,1,l,l,700,5],["slotslide-horizontal",2,0,0,200,"horizontal",!0,!1,2,f,f,700,3],["slotslide-vertical",3,0,0,200,"vertical",!0,!1,3,f,f,700,3],["curtain-1",4,3,0,0,"horizontal",!0,!0,4,s,s,300,5],["curtain-2",5,3,0,0,"horizontal",!0,!0,5,s,s,300,5],["curtain-3",6,3,25,0,"horizontal",!0,!0,6,s,s,300,5],["slotzoom-horizontal",7,0,0,400,"horizontal",!0,!0,7,s,s,300,7],["slotzoom-vertical",8,0,0,0,"vertical",!0,!0,8,h,h,500,8],["slotfade-horizontal",9,0,0,500,"horizontal",!0,null,9,h,h,500,25],["slotfade-vertical",10,0,0,500,"vertical",!0,null,10,h,h,500,25],["fade",11,0,1,300,"horizontal",!0,null,11,f,f,1e3,1],["crossfade",11,1,1,300,"horizontal",!0,null,11,f,f,1e3,1],["fadethroughdark",11,2,1,300,"horizontal",!0,null,11,f,f,1e3,1],["fadethroughlight",11,3,1,300,"horizontal",!0,null,11,f,f,1e3,1],["fadethroughtransparent",11,4,1,300,"horizontal",!0,null,11,f,f,1e3,1],["slideleft",12,0,1,0,"horizontal",!0,!0,12,p,p,1e3,1],["slideup",13,0,1,0,"horizontal",!0,!0,13,p,p,1e3,1],["slidedown",14,0,1,0,"horizontal",!0,!0,14,p,p,1e3,1],["slideright",15,0,1,0,"horizontal",!0,!0,15,p,p,1e3,1],["slideoverleft",12,7,1,0,"horizontal",!0,!0,12,p,p,1e3,1],["slideoverup",13,7,1,0,"horizontal",!0,!0,13,p,p,1e3,1],["slideoverdown",14,7,1,0,"horizontal",!0,!0,14,p,p,1e3,1],["slideoverright",15,7,1,0,"horizontal",!0,!0,15,p,p,1e3,1],["slideremoveleft",12,8,1,0,"horizontal",!0,!0,12,p,p,1e3,1],["slideremoveup",13,8,1,0,"horizontal",!0,!0,13,p,p,1e3,1],["slideremovedown",14,8,1,0,"horizontal",!0,!0,14,p,p,1e3,1],["slideremoveright",15,8,1,0,"horizontal",!0,!0,15,p,p,1e3,1],["papercut",16,0,0,600,"",null,null,16,p,p,1e3,2],["3dcurtain-horizontal",17,0,20,100,"vertical",!1,!0,17,l,l,500,7],["3dcurtain-vertical",18,0,10,100,"horizontal",!1,!0,18,l,l,500,5],["cubic",19,0,20,600,"horizontal",!1,!0,19,p,p,500,1],["cube",19,0,20,600,"horizontal",!1,!0,20,p,p,500,1],["flyin",20,0,4,600,"vertical",!1,!0,21,c,p,500,1],["turnoff",21,0,1,500,"horizontal",!1,!0,22,p,p,500,1],["incube",22,0,20,200,"horizontal",!1,!0,23,f,f,500,1],["cubic-horizontal",23,0,20,500,"vertical",!1,!0,24,h,h,500,1],["cube-horizontal",23,0,20,500,"vertical",!1,!0,25,h,h,500,1],["incube-horizontal",24,0,20,500,"vertical",!1,!0,26,f,f,500,1],["turnoff-vertical",25,0,1,200,"horizontal",!1,!0,27,f,f,500,1],["fadefromright",12,1,1,0,"horizontal",!0,!0,28,f,f,1e3,1],["fadefromleft",15,1,1,0,"horizontal",!0,!0,29,f,f,1e3,1],["fadefromtop",14,1,1,0,"horizontal",!0,!0,30,f,f,1e3,1],["fadefrombottom",13,1,1,0,"horizontal",!0,!0,31,f,f,1e3,1],["fadetoleftfadefromright",12,2,1,0,"horizontal",!0,!0,32,f,f,1e3,1],["fadetorightfadefromleft",15,2,1,0,"horizontal",!0,!0,33,f,f,1e3,1],["fadetobottomfadefromtop",14,2,1,0,"horizontal",!0,!0,34,f,f,1e3,1],["fadetotopfadefrombottom",13,2,1,0,"horizontal",!0,!0,35,f,f,1e3,1],["parallaxtoright",12,3,1,0,"horizontal",!0,!0,36,f,d,1500,1],["parallaxtoleft",15,3,1,0,"horizontal",!0,!0,37,f,d,1500,1],["parallaxtotop",14,3,1,0,"horizontal",!0,!0,38,f,r,1500,1],["parallaxtobottom",13,3,1,0,"horizontal",!0,!0,39,f,r,1500,1],["scaledownfromright",12,4,1,0,"horizontal",!0,!0,40,f,d,1e3,1],["scaledownfromleft",15,4,1,0,"horizontal",!0,!0,41,f,d,1e3,1],["scaledownfromtop",14,4,1,0,"horizontal",!0,!0,42,f,d,1e3,1],["scaledownfrombottom",13,4,1,0,"horizontal",!0,!0,43,f,d,1e3,1],["zoomout",13,5,1,0,"horizontal",!0,!0,44,f,d,1e3,1],["zoomin",13,6,1,0,"horizontal",!0,!0,45,f,d,1e3,1],["slidingoverlayup",27,0,1,0,"horizontal",!0,!0,47,l,s,2e3,1],["slidingoverlaydown",28,0,1,0,"horizontal",!0,!0,48,l,s,2e3,1],["slidingoverlayright",30,0,1,0,"horizontal",!0,!0,49,l,s,2e3,1],["slidingoverlayleft",29,0,1,0,"horizontal",!0,!0,50,l,s,2e3,1],["parallaxcirclesup",31,0,1,0,"horizontal",!0,!0,51,f,r,1500,1],["parallaxcirclesdown",32,0,1,0,"horizontal",!0,!0,52,f,r,1500,1],["parallaxcirclesright",33,0,1,0,"horizontal",!0,!0,53,f,r,1500,1],["parallaxcirclesleft",34,0,1,0,"horizontal",!0,!0,54,f,r,1500,1],["notransition",26,0,1,0,"horizontal",!0,null,46,f,d,1e3,1],["parallaxright",12,3,1,0,"horizontal",!0,!0,55,f,d,1500,1],["parallaxleft",15,3,1,0,"horizontal",!0,!0,56,f,d,1500,1],["parallaxup",14,3,1,0,"horizontal",!0,!0,57,f,r,1500,1],["parallaxdown",13,3,1,0,"horizontal",!0,!0,58,f,r,1500,1]]);e.duringslidechange=!0,e.testanims=!1,1==e.testanims&&(e.nexttesttransform=void 0===e.nexttesttransform?34:e.nexttesttransform+1,e.nexttesttransform=e.nexttesttransform>70?0:e.nexttesttransform,o=y[e.nexttesttransform][0],console.log(o+"  "+e.nexttesttransform+"  "+y[e.nexttesttransform][1]+"  "+y[e.nexttesttransform][2])),jQuery.each(["parallaxcircles","slidingoverlay","slide","slideover","slideremove","parallax"],function(t,e){o==e+"horizontal"&&(o=1!=i?e+"left":e+"right"),o==e+"vertical"&&(o=1!=i?e+"up":e+"down")}),"random"==o&&(o=Math.round(Math.random()*y.length-1),o>y.length-1&&(o=y.length-1)),"random-static"==o&&(o=Math.round(Math.random()*u.length-1),o>u.length-1&&(o=u.length-1),o=u[o]),"random-premium"==o&&(o=Math.round(Math.random()*g.length-1),o>g.length-1&&(o=g.length-1),o=g[o]);var T=[12,13,14,15,16,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];if(1==e.isJoomla&&void 0!=window.MooTools&&-1!=T.indexOf(o)){var z=Math.round(Math.random()*(g.length-2))+1;z>g.length-1&&(z=g.length-1),0==z&&(z=1),o=g[z]}n(),w>30&&(w=30),0>w&&(w=0);var L=new Object;return L.nexttrans=w,L.STA=y[m],L.specials=v,L},i=function(t,e){return void 0==e||jQuery.isNumeric(t)?t:void 0==t?t:t.split(",")[e]},n=function(t,e,n,r,s,l,d,h,f){function c(t,e,o,a,i){var n=t.find(".slot"),r=6,s=[2,1.2,.9,.7,.55,.42],l=t.width(),h=t.height();n.wrap('<div class="slot-circle-wrapper" style="overflow:hidden;position:absolute;border:1px solid #fff"></div>');for(var c=0;r>c;c++)n.parent().clone(!1).appendTo(d);t.find(".slot-circle-wrapper").each(function(t){if(r>t){var a=jQuery(this),n=a.find(".slot"),d=l>h?s[t]*l:s[t]*h,c=d,p=0+(c/2-l/2),u=0+(d/2-h/2),g=0!=t?"50%":"0",w=31==o?h/2-d/2:32==o?h/2-d/2:h/2-d/2,v=33==o?l/2-c/2:34==o?l-c:l/2-c/2,m={scale:1,transformOrigo:"50% 50%",width:c+"px",height:d+"px",top:w+"px",left:v+"px",borderRadius:g},x={scale:1,top:h/2-d/2,left:l/2-c/2,ease:i},y=31==o?u:32==o?u:u,T=33==o?p:34==o?p+l/2:p,z={width:l,height:h,autoAlpha:1,top:y+"px",position:"absolute",left:T+"px"},L={top:u+"px",left:p+"px",ease:i},b=e,D=0;f.add(punchgs.TweenLite.fromTo(a,b,m,x),D),f.add(punchgs.TweenLite.fromTo(n,b,z,L),D),f.add(punchgs.TweenLite.fromTo(a,.001,{autoAlpha:0},{autoAlpha:1}),0)}})}var p=l.index(),u=s.index(),g=p>u?1:0;"arrow"==r.sc_indicator&&(g=r.sc_indicator_dir);var w=a(n,r,e,d,g),v=w.STA,m=w.specials,t=w.nexttrans;"on"==d.data("kenburns")&&(t=11);var x=s.data("nexttransid")||0,y=i(s.data("masterspeed"),x);y="default"===y?v[11]:"random"===y?Math.round(1e3*Math.random()+300):void 0!=y?parseInt(y,0):v[11],y=y>r.delay?r.delay:y,y+=v[4],r.slots=i(s.data("slotamount"),x),r.slots=void 0==r.slots||"default"==r.slots?v[12]:"random"==r.slots?Math.round(12*Math.random()+4):r.slots,r.slots=r.slots<1?"boxslide"==e?Math.round(6*Math.random()+3):"flyin"==e?Math.round(4*Math.random()+1):r.slots:r.slots,r.slots=(4==t||5==t||6==t)&&r.slots<3?3:r.slots,r.slots=0!=v[3]?Math.min(r.slots,v[3]):r.slots,r.slots=9==t?r.width/20:10==t?r.height/20:r.slots,r.rotate=i(s.data("rotate"),x),r.rotate=void 0==r.rotate||"default"==r.rotate?0:999==r.rotate||"random"==r.rotate?Math.round(360*Math.random()):r.rotate,r.rotate=!jQuery.support.transition||r.ie||r.ie9?0:r.rotate,11!=t&&(null!=v[7]&&o(h,r,v[7],v[5]),null!=v[6]&&o(d,r,v[6],v[5])),f.add(punchgs.TweenLite.set(d.find(".defaultvid"),{y:0,x:0,top:0,left:0,scale:1}),0),f.add(punchgs.TweenLite.set(h.find(".defaultvid"),{y:0,x:0,top:0,left:0,scale:1}),0),f.add(punchgs.TweenLite.set(d.find(".defaultvid"),{y:"+0%",x:"+0%"}),0),f.add(punchgs.TweenLite.set(h.find(".defaultvid"),{y:"+0%",x:"+0%"}),0),f.add(punchgs.TweenLite.set(d,{autoAlpha:1,y:"+0%",x:"+0%"}),0),f.add(punchgs.TweenLite.set(h,{autoAlpha:1,y:"+0%",x:"+0%"}),0),f.add(punchgs.TweenLite.set(d.parent(),{backgroundColor:"transparent"}),0),f.add(punchgs.TweenLite.set(h.parent(),{backgroundColor:"transparent"}),0);var T=i(s.data("easein"),x),z=i(s.data("easeout"),x);if(T="default"===T?v[9]||punchgs.Power2.easeInOut:T||v[9]||punchgs.Power2.easeInOut,z="default"===z?v[10]||punchgs.Power2.easeInOut:z||v[10]||punchgs.Power2.easeInOut,0==t){var L=Math.ceil(r.height/r.sloth),b=0;d.find(".slotslide").each(function(t){var e=jQuery(this);b+=1,b==L&&(b=0),f.add(punchgs.TweenLite.from(e,y/600,{opacity:0,top:0-r.sloth,left:0-r.slotw,rotation:r.rotate,force3D:"auto",ease:T}),(15*t+30*b)/1500)})}if(1==t){var D,A=0;d.find(".slotslide").each(function(t){var e=jQuery(this),o=Math.random()*y+300,a=500*Math.random()+200;o+a>D&&(D=a+a,A=t),f.add(punchgs.TweenLite.from(e,o/1e3,{autoAlpha:0,force3D:"auto",rotation:r.rotate,ease:T}),a/1e3)})}if(2==t){var j=new punchgs.TimelineLite;h.find(".slotslide").each(function(){var t=jQuery(this);j.add(punchgs.TweenLite.to(t,y/1e3,{left:r.slotw,ease:T,force3D:"auto",rotation:0-r.rotate}),0),f.add(j,0)}),d.find(".slotslide").each(function(){var t=jQuery(this);j.add(punchgs.TweenLite.from(t,y/1e3,{left:0-r.slotw,ease:T,force3D:"auto",rotation:r.rotate}),0),f.add(j,0)})}if(3==t){var j=new punchgs.TimelineLite;h.find(".slotslide").each(function(){var t=jQuery(this);j.add(punchgs.TweenLite.to(t,y/1e3,{top:r.sloth,ease:T,rotation:r.rotate,force3D:"auto",transformPerspective:600}),0),f.add(j,0)}),d.find(".slotslide").each(function(){var t=jQuery(this);j.add(punchgs.TweenLite.from(t,y/1e3,{top:0-r.sloth,rotation:r.rotate,ease:z,force3D:"auto",transformPerspective:600}),0),f.add(j,0)})}if(4==t||5==t){setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100);var k=y/1e3,j=new punchgs.TimelineLite;h.find(".slotslide").each(function(e){var o=jQuery(this),a=e*k/r.slots;5==t&&(a=(r.slots-e-1)*k/r.slots/1.5),j.add(punchgs.TweenLite.to(o,3*k,{transformPerspective:600,force3D:"auto",top:0+r.height,opacity:.5,rotation:r.rotate,ease:T,delay:a}),0),f.add(j,0)}),d.find(".slotslide").each(function(e){var o=jQuery(this),a=e*k/r.slots;5==t&&(a=(r.slots-e-1)*k/r.slots/1.5),j.add(punchgs.TweenLite.from(o,3*k,{top:0-r.height,opacity:.5,rotation:r.rotate,force3D:"auto",ease:punchgs.eo,delay:a}),0),f.add(j,0)})}if(6==t){r.slots<2&&(r.slots=2),r.slots%2&&(r.slots=r.slots+1);var j=new punchgs.TimelineLite;setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100),h.find(".slotslide").each(function(t){var e=jQuery(this);if(t+1<r.slots/2)var o=90*(t+2);else var o=90*(2+r.slots-t);j.add(punchgs.TweenLite.to(e,(y+o)/1e3,{top:0+r.height,opacity:1,force3D:"auto",rotation:r.rotate,ease:T}),0),f.add(j,0)}),d.find(".slotslide").each(function(t){var e=jQuery(this);if(t+1<r.slots/2)var o=90*(t+2);else var o=90*(2+r.slots-t);j.add(punchgs.TweenLite.from(e,(y+o)/1e3,{top:0-r.height,opacity:1,force3D:"auto",rotation:r.rotate,ease:z}),0),f.add(j,0)})}if(7==t){y=2*y,y>r.delay&&(y=r.delay);var j=new punchgs.TimelineLite;setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100),h.find(".slotslide").each(function(){var t=jQuery(this).find("div");j.add(punchgs.TweenLite.to(t,y/1e3,{left:0-r.slotw/2+"px",top:0-r.height/2+"px",width:2*r.slotw+"px",height:2*r.height+"px",opacity:0,rotation:r.rotate,force3D:"auto",ease:T}),0),f.add(j,0)}),d.find(".slotslide").each(function(t){var e=jQuery(this).find("div");j.add(punchgs.TweenLite.fromTo(e,y/1e3,{left:0,top:0,opacity:0,transformPerspective:600},{left:0-t*r.slotw+"px",ease:z,force3D:"auto",top:"0px",width:r.width,height:r.height,opacity:1,rotation:0,delay:.1}),0),f.add(j,0)})}if(8==t){y=3*y,y>r.delay&&(y=r.delay);var j=new punchgs.TimelineLite;h.find(".slotslide").each(function(){var t=jQuery(this).find("div");j.add(punchgs.TweenLite.to(t,y/1e3,{left:0-r.width/2+"px",top:0-r.sloth/2+"px",width:2*r.width+"px",height:2*r.sloth+"px",force3D:"auto",ease:T,opacity:0,rotation:r.rotate}),0),f.add(j,0)}),d.find(".slotslide").each(function(t){var e=jQuery(this).find("div");j.add(punchgs.TweenLite.fromTo(e,y/1e3,{left:0,top:0,opacity:0,force3D:"auto"},{left:"0px",top:0-t*r.sloth+"px",width:d.find(".defaultimg").data("neww")+"px",height:d.find(".defaultimg").data("newh")+"px",opacity:1,ease:z,rotation:0}),0),f.add(j,0)})}if(9==t||10==t){var M=0;d.find(".slotslide").each(function(t){var e=jQuery(this);M++,f.add(punchgs.TweenLite.fromTo(e,y/1e3,{autoAlpha:0,force3D:"auto",transformPerspective:600},{autoAlpha:1,ease:T,delay:5*t/1e3}),0)})}if(27==t||28==t||29==t||30==t){var P=d.find(".slot"),Q=27==t||28==t?1:2,O=27==t||29==t?"-100%":"+100%",I=27==t||29==t?"+100%":"-100%",X=27==t||29==t?"-80%":"80%",Y=27==t||29==t?"80%":"-80%",S=27==t||29==t?"10%":"-10%",_={overwrite:"all"},C={autoAlpha:0,zIndex:1,force3D:"auto",ease:T},V={position:"inherit",autoAlpha:0,overwrite:"all",zIndex:1},Z={autoAlpha:1,force3D:"auto",ease:z},H={overwrite:"all",zIndex:2},J={autoAlpha:1,force3D:"auto",overwrite:"all",ease:T},N={overwrite:"all",zIndex:2},R={autoAlpha:1,force3D:"auto",ease:T},q=1==Q?"y":"x";_[q]="0px",C[q]=O,V[q]=S,Z[q]="0%",H[q]=I,J[q]=O,N[q]=X,R[q]=Y,P.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>'),f.add(punchgs.TweenLite.fromTo(h,y/1e3,_,C),0),f.add(punchgs.TweenLite.fromTo(d.find(".defaultimg"),y/2e3,V,Z),y/2e3),f.add(punchgs.TweenLite.fromTo(P,y/1e3,H,J),0),f.add(punchgs.TweenLite.fromTo(P.find(".slotslide div"),y/1e3,N,R),0)}if(31==t||32==t||33==t||34==t){y=6e3,T=punchgs.Power3.easeInOut;var B=y/1e3;mas=B-B/5,_nt=t,fy=31==_nt?"+100%":32==_nt?"-100%":"0%",fx=33==_nt?"+100%":34==_nt?"-100%":"0%",ty=31==_nt?"-100%":32==_nt?"+100%":"0%",tx=33==_nt?"-100%":34==_nt?"+100%":"0%",f.add(punchgs.TweenLite.fromTo(h,B-.2*B,{y:0,x:0},{y:ty,x:tx,ease:z}),.2*B),f.add(punchgs.TweenLite.fromTo(d,B,{y:fy,x:fx},{y:"0%",x:"0%",ease:T}),0),d.find(".slot").remove(),d.find(".defaultimg").clone().appendTo(d).addClass("slot"),c(d,B,_nt,"in",T)}if(11==t){m>4&&(m=0);var M=0,E=2==m?"#000000":3==m?"#ffffff":"transparent";switch(m){case 0:f.add(punchgs.TweenLite.fromTo(d,y/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:T}),0);break;case 1:f.add(punchgs.TweenLite.fromTo(d,y/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:T}),0),f.add(punchgs.TweenLite.fromTo(h,y/1e3,{autoAlpha:1},{autoAlpha:0,force3D:"auto",ease:T}),0);break;case 2:case 3:case 4:f.add(punchgs.TweenLite.set(h.parent(),{backgroundColor:E,force3D:"auto"}),0),f.add(punchgs.TweenLite.set(d.parent(),{backgroundColor:"transparent",force3D:"auto"}),0),f.add(punchgs.TweenLite.to(h,y/2e3,{autoAlpha:0,force3D:"auto",ease:T}),0),f.add(punchgs.TweenLite.fromTo(d,y/2e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:T}),y/2e3)}f.add(punchgs.TweenLite.set(d.find(".defaultimg"),{autoAlpha:1}),0),f.add(punchgs.TweenLite.set(h.find("defaultimg"),{autoAlpha:1}),0)}if(26==t){var M=0;y=0,f.add(punchgs.TweenLite.fromTo(d,y/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:T}),0),f.add(punchgs.TweenLite.to(h,y/1e3,{autoAlpha:0,force3D:"auto",ease:T}),0),f.add(punchgs.TweenLite.set(d.find(".defaultimg"),{autoAlpha:1}),0),f.add(punchgs.TweenLite.set(h.find("defaultimg"),{autoAlpha:1}),0)}if(12==t||13==t||14==t||15==t){y=y,y>r.delay&&(y=r.delay),setTimeout(function(){punchgs.TweenLite.set(h.find(".defaultimg"),{autoAlpha:0})},100);var F=r.width,G=r.height,K=d.find(".slotslide, .defaultvid"),U=0,W=0,$=1,tt=1,et=1,ot=y/1e3,at=ot;("fullwidth"==r.sliderLayout||"fullscreen"==r.sliderLayout)&&(F=K.width(),G=K.height()),12==t?U=F:15==t?U=0-F:13==t?W=G:14==t&&(W=0-G),1==m&&($=0),2==m&&($=0),3==m&&(ot=y/1300),(4==m||5==m)&&(tt=.6),6==m&&(tt=1.4),(5==m||6==m)&&(et=1.4,$=0,F=0,G=0,U=0,W=0),6==m&&(et=.6);7==m&&(F=0,G=0);var it=d.find(".slotslide"),nt=h.find(".slotslide, .defaultvid");if(f.add(punchgs.TweenLite.set(l,{zIndex:15}),0),f.add(punchgs.TweenLite.set(s,{zIndex:20}),0),8==m?(f.add(punchgs.TweenLite.set(l,{zIndex:20}),0),f.add(punchgs.TweenLite.set(s,{zIndex:15}),0),f.add(punchgs.TweenLite.set(it,{left:0,top:0,scale:1,opacity:1,rotation:0,ease:T,force3D:"auto"}),0)):f.add(punchgs.TweenLite.from(it,ot,{left:U,top:W,scale:et,opacity:$,rotation:r.rotate,ease:T,force3D:"auto"}),0),(4==m||5==m)&&(F=0,G=0),1!=m)switch(t){case 12:f.add(punchgs.TweenLite.to(nt,at,{left:0-F+"px",force3D:"auto",scale:tt,opacity:$,rotation:r.rotate,ease:z}),0);break;case 15:f.add(punchgs.TweenLite.to(nt,at,{left:F+"px",force3D:"auto",scale:tt,opacity:$,rotation:r.rotate,ease:z}),0);break;case 13:f.add(punchgs.TweenLite.to(nt,at,{top:0-G+"px",force3D:"auto",scale:tt,opacity:$,rotation:r.rotate,ease:z}),0);break;case 14:f.add(punchgs.TweenLite.to(nt,at,{top:G+"px",force3D:"auto",scale:tt,opacity:$,rotation:r.rotate,ease:z}),0)}}if(16==t){var j=new punchgs.TimelineLite;f.add(punchgs.TweenLite.set(l,{position:"absolute","z-index":20}),0),f.add(punchgs.TweenLite.set(s,{position:"absolute","z-index":15}),0),l.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'),l.find(".tp-half-one").clone(!0).appendTo(l).addClass("tp-half-two"),l.find(".tp-half-two").removeClass("tp-half-one");var F=r.width,G=r.height;"on"==r.autoHeight&&(G=n.height()),l.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:'+F+"px;height:"+G+'px;"></div>'),l.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:'+F+"px;height:"+G+'px;"></div>'),l.find(".tp-half-two .defaultimg").css({position:"absolute",top:"-50%"}),l.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'),f.add(punchgs.TweenLite.set(l.find(".tp-half-two"),{width:F,height:G,overflow:"hidden",zIndex:15,position:"absolute",top:G/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"}),0),f.add(punchgs.TweenLite.set(l.find(".tp-half-one"),{width:F,height:G/2,overflow:"visible",zIndex:10,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"}),0);var rt=(l.find(".defaultimg"),Math.round(20*Math.random()-10)),st=Math.round(20*Math.random()-10),lt=Math.round(20*Math.random()-10),dt=.4*Math.random()-.2,ht=.4*Math.random()-.2,ft=1*Math.random()+1,ct=1*Math.random()+1,pt=.3*Math.random()+.3;f.add(punchgs.TweenLite.set(l.find(".tp-half-one"),{overflow:"hidden"}),0),f.add(punchgs.TweenLite.fromTo(l.find(".tp-half-one"),y/800,{width:F,height:G/2,position:"absolute",top:"0px",left:"0px",force3D:"auto",transformOrigin:"center top"},{scale:ft,rotation:rt,y:0-G-G/4,autoAlpha:0,ease:T}),0),f.add(punchgs.TweenLite.fromTo(l.find(".tp-half-two"),y/800,{width:F,height:G,overflow:"hidden",position:"absolute",top:G/2,left:"0px",force3D:"auto",transformOrigin:"center bottom"},{scale:ct,rotation:st,y:G+G/4,ease:T,autoAlpha:0,onComplete:function(){punchgs.TweenLite.set(l,{position:"absolute","z-index":15}),punchgs.TweenLite.set(s,{position:"absolute","z-index":20}),l.find(".tp-half-one").length>0&&(l.find(".tp-half-one .defaultimg").unwrap(),l.find(".tp-half-one .slotholder").unwrap()),l.find(".tp-half-two").remove()}}),0),j.add(punchgs.TweenLite.set(d.find(".defaultimg"),{autoAlpha:1}),0),null!=l.html()&&f.add(punchgs.TweenLite.fromTo(s,(y-200)/1e3,{scale:pt,x:r.width/4*dt,y:G/4*ht,rotation:lt,force3D:"auto",transformOrigin:"center center",ease:z},{autoAlpha:1,scale:1,x:0,y:0,rotation:0}),0),f.add(j,0)}if(17==t&&d.find(".slotslide").each(function(t){var e=jQuery(this);f.add(punchgs.TweenLite.fromTo(e,y/800,{opacity:0,rotationY:0,scale:.9,rotationX:-110,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:T,delay:.06*t}),0)}),18==t&&d.find(".slotslide").each(function(t){var e=jQuery(this);f.add(punchgs.TweenLite.fromTo(e,y/500,{autoAlpha:0,rotationY:110,scale:.9,rotationX:10,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{autoAlpha:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:T,delay:.06*t}),0)}),19==t||22==t){var j=new punchgs.TimelineLite;f.add(punchgs.TweenLite.set(l,{zIndex:20}),0),f.add(punchgs.TweenLite.set(s,{zIndex:20}),0),setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100);var ut=90,$=1,gt="center center ";1==g&&(ut=-90),19==t?(gt=gt+"-"+r.height/2,$=0):gt+=r.height/2,punchgs.TweenLite.set(n,{transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:600}),d.find(".slotslide").each(function(t){var e=jQuery(this);j.add(punchgs.TweenLite.fromTo(e,y/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",left:0,rotationY:r.rotate,z:10,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:gt,rotationX:ut},{left:0,rotationY:0,top:0,z:0,scale:1,force3D:"auto",rotationX:0,delay:50*t/1e3,ease:T}),0),j.add(punchgs.TweenLite.to(e,.1,{autoAlpha:1,delay:50*t/1e3}),0),f.add(j)}),h.find(".slotslide").each(function(t){var e=jQuery(this),o=-90;1==g&&(o=90),j.add(punchgs.TweenLite.fromTo(e,y/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",autoAlpha:1,rotationY:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:gt,rotationX:0},{autoAlpha:1,rotationY:r.rotate,top:0,z:10,scale:1,rotationX:o,delay:50*t/1e3,force3D:"auto",ease:z}),0),f.add(j)}),f.add(punchgs.TweenLite.set(l,{zIndex:18}),0)}if(20==t){if(setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100),1==g)var wt=-r.width,ut=80,gt="20% 70% -"+r.height/2;else var wt=r.width,ut=-80,gt="80% 70% -"+r.height/2;d.find(".slotslide").each(function(t){var e=jQuery(this),o=50*t/1e3;f.add(punchgs.TweenLite.fromTo(e,y/1e3,{left:wt,rotationX:40,z:-600,opacity:$,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:gt,transformStyle:"flat",rotationY:ut},{left:0,rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:o,ease:T}),0)}),h.find(".slotslide").each(function(t){var e=jQuery(this),o=50*t/1e3;if(o=t>0?o+y/9e3:0,1!=g)var a=-r.width/2,i=30,n="20% 70% -"+r.height/2;else var a=r.width/2,i=-30,n="80% 70% -"+r.height/2;z=punchgs.Power2.easeInOut,f.add(punchgs.TweenLite.fromTo(e,y/1e3,{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0,force3D:"auto",transformPerspective:600,transformOrigin:n,transformStyle:"flat",rotationY:0},{opacity:1,rotationX:20,top:0,z:-600,left:a,force3D:"auto",rotationY:i,delay:o,ease:z}),0)})}if(21==t||25==t){setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100);var ut=90,wt=-r.width,vt=-ut;if(1==g)if(25==t){var gt="center top 0";ut=r.rotate}else{var gt="left center 0";vt=r.rotate}else if(wt=r.width,ut=-90,25==t){var gt="center bottom 0";vt=-ut,ut=r.rotate}else{var gt="right center 0";vt=r.rotate}d.find(".slotslide").each(function(t){var e=jQuery(this),o=y/1.5/3;f.add(punchgs.TweenLite.fromTo(e,2*o/1e3,{left:0,transformStyle:"flat",rotationX:vt,z:0,autoAlpha:0,top:0,scale:1,force3D:"auto",transformPerspective:1200,transformOrigin:gt,rotationY:ut},{left:0,rotationX:0,top:0,z:0,autoAlpha:1,scale:1,rotationY:0,force3D:"auto",delay:o/1e3,ease:T}),0)}),1!=g?(wt=-r.width,ut=90,25==t?(gt="center top 0",vt=-ut,ut=r.rotate):(gt="left center 0",vt=r.rotate)):(wt=r.width,ut=-90,25==t?(gt="center bottom 0",vt=-ut,ut=r.rotate):(gt="right center 0",vt=r.rotate)),h.find(".slotslide").each(function(t){var e=jQuery(this);f.add(punchgs.TweenLite.fromTo(e,y/1e3,{left:0,transformStyle:"flat",rotationX:0,z:0,autoAlpha:1,top:0,scale:1,force3D:"auto",transformPerspective:1200,transformOrigin:gt,rotationY:0},{left:0,rotationX:vt,top:0,z:0,autoAlpha:1,force3D:"auto",scale:1,rotationY:ut,ease:z}),0)})}if(23==t||24==t){setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100);var ut=-90,$=1,mt=0;if(1==g&&(ut=90),23==t){var gt="center center -"+r.width/2;$=0}else var gt="center center "+r.width/2;punchgs.TweenLite.set(n,{transformStyle:"preserve-3d",backfaceVisibility:"hidden",perspective:2500}),d.find(".slotslide").each(function(t){var e=jQuery(this);f.add(punchgs.TweenLite.fromTo(e,y/1e3,{left:mt,rotationX:r.rotate,force3D:"auto",opacity:$,top:0,scale:1,transformPerspective:1200,transformOrigin:gt,rotationY:ut},{left:0,rotationX:0,autoAlpha:1,top:0,z:0,scale:1,rotationY:0,delay:50*t/500,ease:T}),0)}),ut=90,1==g&&(ut=-90),h.find(".slotslide").each(function(e){var o=jQuery(this);f.add(punchgs.TweenLite.fromTo(o,y/1e3,{left:0,rotationX:0,top:0,z:0,scale:1,force3D:"auto",transformStyle:"flat",transformPerspective:1200,transformOrigin:gt,rotationY:0},{left:mt,rotationX:r.rotate,top:0,scale:1,rotationY:ut,delay:50*e/500,ease:z}),0),23==t&&f.add(punchgs.TweenLite.fromTo(o,y/2e3,{autoAlpha:1},{autoAlpha:0,delay:50*e/500+y/3e3,ease:z}),0)})}return f}}(jQuery);

/********************************************
 * REVOLUTION 5.2.3 EXTENSION - VIDEO FUNCTIONS
 * @version: 1.7 (16.03.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(e){function t(e){return void 0==e?-1:jQuery.isNumeric(e)?e:e.split(":").length>1?60*parseInt(e.split(":")[0],0)+parseInt(e.split(":")[1],0):e}var a=jQuery.fn.revolution,i=a.is_mobile();jQuery.extend(!0,a,{preLoadAudio:function(e,t){e.find(".tp-audiolayer").each(function(){var e=jQuery(this),i={};0===e.find("audio").length&&(i.src=void 0!=e.data("videomp4")?e.data("videomp4"):"",i.pre=e.data("videopreload")||"",void 0===e.attr("id")&&e.attr("audio-layer-"+Math.round(199999*Math.random())),i.id=e.attr("id"),i.status="prepared",i.start=jQuery.now(),i.waittime=1e3*e.data("videopreloadwait")||5e3,("auto"==i.pre||"canplaythrough"==i.pre||"canplay"==i.pre||"progress"==i.pre)&&(void 0===t.audioqueue&&(t.audioqueue=[]),t.audioqueue.push(i),a.manageVideoLayer(e,t)))})},preLoadAudioDone:function(e,t,a){t.audioqueue&&t.audioqueue.length>0&&jQuery.each(t.audioqueue,function(t,i){e.data("videomp4")!==i.src||i.pre!==a&&"auto"!==i.pre||(i.status="loaded")})},resetVideo:function(e,d){switch(e.data("videotype")){case"youtube":e.data("player");try{if("on"==e.data("forcerewind")&&!i){var o=t(e.data("videostartat"));o=-1==o?0:o,void 0!=e.data("player")&&(e.data("player").seekTo(o),e.data("player").pauseVideo())}}catch(r){}0==e.find(".tp-videoposter").length&&punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});break;case"vimeo":var n=$f(e.find("iframe").attr("id"));try{if("on"==e.data("forcerewind")&&!i){var o=t(e.data("videostartat"));o=-1==o?0:o,n.api("seekTo",o),n.api("pause")}}catch(r){}0==e.find(".tp-videoposter").length&&punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});break;case"html5":if(i&&1==e.data("disablevideoonmobile"))return!1;var s="html5"==e.data("audio")?"audio":"video",l=e.find(s),u=l[0];if(punchgs.TweenLite.to(l,.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),"on"==e.data("forcerewind")&&!e.hasClass("videoisplaying"))try{var o=t(e.data("videostartat"));u.currentTime=-1==o?0:o}catch(r){}("mute"==e.data("volume")||a.lastToggleState(e.data("videomutetoggledby"))||d.globalmute===!0)&&(u.muted=!0)}},isVideoMuted:function(e,t){var a=!1;switch(e.data("videotype")){case"youtube":try{var i=e.data("player");a=i.isMuted()}catch(d){}break;case"vimeo":try{$f(e.find("iframe").attr("id"));"mute"==e.data("volume")&&(a=!0)}catch(d){}break;case"html5":var o="html5"==e.data("audio")?"audio":"video",r=e.find(o),n=r[0];n.muted&&(a=!0)}return a},muteVideo:function(e,t){switch(e.data("videotype")){case"youtube":try{var a=e.data("player");a.mute()}catch(i){}break;case"vimeo":try{var d=$f(e.find("iframe").attr("id"));e.data("volume","mute"),d.api("setVolume",0)}catch(i){}break;case"html5":var o="html5"==e.data("audio")?"audio":"video",r=e.find(o),n=r[0];n.muted=!0}},unMuteVideo:function(e,t){if(t.globalmute!==!0)switch(e.data("videotype")){case"youtube":try{var a=e.data("player");a.unMute()}catch(i){}break;case"vimeo":try{var d=$f(e.find("iframe").attr("id"));e.data("volume","1"),d.api("setVolume",1)}catch(i){}break;case"html5":var o="html5"==e.data("audio")?"audio":"video",r=e.find(o),n=r[0];n.muted=!1}},stopVideo:function(e,t){switch(e.data("videotype")){case"youtube":try{var a=e.data("player");a.pauseVideo()}catch(i){}break;case"vimeo":try{var d=$f(e.find("iframe").attr("id"));d.api("pause")}catch(i){}break;case"html5":var o="html5"==e.data("audio")?"audio":"video",r=e.find(o),n=r[0];void 0!=r&&void 0!=n&&n.pause()}},playVideo:function(e,o){switch(clearTimeout(e.data("videoplaywait")),e.data("videotype")){case"youtube":if(0==e.find("iframe").length)e.append(e.data("videomarkup")),r(e,o,!0);else if(void 0!=e.data("player").playVideo){var n=t(e.data("videostartat")),s=e.data("player").getCurrentTime();1==e.data("nextslideatend-triggered")&&(s=-1,e.data("nextslideatend-triggered",0)),-1!=n&&n>s&&e.data("player").seekTo(n),e.data("player").playVideo()}else e.data("videoplaywait",setTimeout(function(){a.playVideo(e,o)},50));break;case"vimeo":if(0==e.find("iframe").length)e.append(e.data("videomarkup")),r(e,o,!0);else if(e.hasClass("rs-apiready")){var l=e.find("iframe").attr("id"),u=$f(l);void 0==u.api("play")?e.data("videoplaywait",setTimeout(function(){a.playVideo(e,o)},50)):setTimeout(function(){u.api("play");var a=t(e.data("videostartat")),i=e.data("currenttime");1==e.data("nextslideatend-triggered")&&(i=-1,e.data("nextslideatend-triggered",0)),-1!=a&&a>i&&u.api("seekTo",a)},510)}else e.data("videoplaywait",setTimeout(function(){a.playVideo(e,o)},50));break;case"html5":if(i&&1==e.data("disablevideoonmobile"))return!1;var p="html5"==e.data("audio")?"audio":"video",v=e.find(p),c=v[0],g=v.parent();if(1!=g.data("metaloaded"))d(c,"loadedmetadata",function(e){a.resetVideo(e,o),c.play();var i=t(e.data("videostartat")),d=c.currentTime;1==e.data("nextslideatend-triggered")&&(d=-1,e.data("nextslideatend-triggered",0)),-1!=i&&i>d&&(c.currentTime=i)}(e));else{c.play();var n=t(e.data("videostartat")),s=c.currentTime;1==e.data("nextslideatend-triggered")&&(s=-1,e.data("nextslideatend-triggered",0)),-1!=n&&n>s&&(c.currentTime=n)}}},isVideoPlaying:function(e,t){var a=!1;return void 0!=t.playingvideos&&jQuery.each(t.playingvideos,function(t,i){e.attr("id")==i.attr("id")&&(a=!0)}),a},removeMediaFromList:function(e,t){p(e,t)},prepareCoveredVideo:function(e,t,i){var d=i.find("iframe, video"),o=e.split(":")[0],r=e.split(":")[1],n=i.closest(".tp-revslider-slidesli"),s=n.width()/n.height(),l=o/r,u=s/l*100,p=l/s*100;s>l?punchgs.TweenLite.to(d,.001,{height:u+"%",width:"100%",top:-(u-100)/2+"%",left:"0px",position:"absolute"}):punchgs.TweenLite.to(d,.001,{width:p+"%",height:"100%",left:-(p-100)/2+"%",top:"0px",position:"absolute"}),d.hasClass("resizelistener")||(d.addClass("resizelistener"),jQuery(window).resize(function(){clearTimeout(d.data("resizelistener")),d.data("resizelistener",setTimeout(function(){a.prepareCoveredVideo(e,t,i)},30))}))},checkVideoApis:function(e,t,a){var i="https:"===location.protocol?"https":"http";if((void 0!=e.data("ytid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&(t.youtubeapineeded=!0),(void 0!=e.data("ytid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&0==a.addedyt){t.youtubestarttime=jQuery.now(),a.addedyt=1;var d=document.createElement("script");d.src="https://www.youtube.com/iframe_api";var o=document.getElementsByTagName("script")[0],r=!0;jQuery("head").find("*").each(function(){"https://www.youtube.com/iframe_api"==jQuery(this).attr("src")&&(r=!1)}),r&&o.parentNode.insertBefore(d,o)}if((void 0!=e.data("vimeoid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&(t.vimeoapineeded=!0),(void 0!=e.data("vimeoid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&0==a.addedvim){t.vimeostarttime=jQuery.now(),a.addedvim=1;var n=document.createElement("script"),o=document.getElementsByTagName("script")[0],r=!0;n.src=i+"://f.vimeocdn.com/js/froogaloop2.min.js",jQuery("head").find("*").each(function(){jQuery(this).attr("src")==i+"://f.vimeocdn.com/js/froogaloop2.min.js"&&(r=!1)}),r&&o.parentNode.insertBefore(n,o)}return a},manageVideoLayer:function(e,o,n,s){var u=e.data("videoattributes"),p=e.data("ytid"),v=e.data("vimeoid"),c="auto"===e.data("videopreload")||"canplay"===e.data("videopreload")||"canplaythrough"===e.data("videopreload")||"progress"===e.data("videopreload")?"auto":e.data("videopreload"),g=e.data("videomp4"),f=e.data("videowebm"),m=e.data("videoogv"),y=e.data("allowfullscreenvideo"),h=e.data("videocontrols"),b="http",w="loop"==e.data("videoloop")?"loop":"loopandnoslidestop"==e.data("videoloop")?"loop":"",k=void 0!=g||void 0!=f?"html5":void 0!=p&&String(p).length>1?"youtube":void 0!=v&&String(v).length>1?"vimeo":"none",T="html5"==e.data("audio")?"audio":"video",x="html5"==k&&0==e.find(T).length?"html5":"youtube"==k&&0==e.find("iframe").length?"youtube":"vimeo"==k&&0==e.find("iframe").length?"vimeo":"none";switch(w=e.data("nextslideatend")===!0?"":w,e.data("videotype",k),x){case"html5":"controls"!=h&&(h="");var T="video";"html5"==e.data("audio")&&(T="audio",e.addClass("tp-audio-html5"));var L="<"+T+' style="object-fit:cover;background-size:cover;visible:hidden;width:100%; height:100%" class="" '+w+' preload="'+c+'">';"auto"==c&&(o.mediapreload=!0),void 0!=f&&"firefox"==a.get_browser().toLowerCase()&&(L=L+'<source src="'+f+'" type="video/webm" />'),void 0!=g&&(L=L+'<source src="'+g+'" type="video/mp4" />'),void 0!=m&&(L=L+'<source src="'+m+'" type="video/ogg" />'),L=L+"</"+T+">";var V="";("true"===y||y===!0)&&(V='<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div>'),"controls"==h&&(L+='<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div>'+V+"</div>"),e.data("videomarkup",L),e.append(L),(i&&1==e.data("disablevideoonmobile")||a.isIE(8))&&e.find(T).remove(),e.find(T).each(function(t){var i=this,r=jQuery(this);r.parent().hasClass("html5vid")||r.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>');var n=r.parent();1!=n.data("metaloaded")&&d(i,"loadedmetadata",function(e){l(e,o),a.resetVideo(e,o)}(e))});break;case"youtube":b="http","https:"===location.protocol&&(b="https"),"none"==h&&(u=u.replace("controls=1","controls=0"),-1==u.toLowerCase().indexOf("controls")&&(u+="&controls=0"));var C=t(e.data("videostartat")),P=t(e.data("videoendat"));-1!=C&&(u=u+"&start="+C),-1!=P&&(u=u+"&end="+P);var I=u.split("origin="+b+"://"),j="";I.length>1?(j=I[0]+"origin="+b+"://",self.location.href.match(/www/gi)&&!I[1].match(/www/gi)&&(j+="www."),j+=I[1]):j=u;var A="true"===y||y===!0?"allowfullscreen":"";e.data("videomarkup",'<iframe style="visible:hidden" src="'+b+"://www.youtube.com/embed/"+p+"?"+j+'" '+A+' width="100%" height="100%" style="width:100%;height:100%"></iframe>');break;case"vimeo":"https:"===location.protocol&&(b="https"),e.data("videomarkup",'<iframe style="visible:hidden" src="'+b+"://player.vimeo.com/video/"+v+"?autoplay=0&"+u+'" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="100%" style="100%;height:100%"></iframe>')}var _=i&&"on"==e.data("noposteronmobile");if(void 0!=e.data("videoposter")&&e.data("videoposter").length>2&&!_)0==e.find(".tp-videoposter").length&&e.append('<div class="tp-videoposter noSwipe" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:3;background-image:url('+e.data("videoposter")+'); background-size:cover;background-position:center center;"></div>'),0==e.find("iframe").length&&e.find(".tp-videoposter").click(function(){if(a.playVideo(e,o),i){if(1==e.data("disablevideoonmobile"))return!1;punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut})}});else{if(i&&1==e.data("disablevideoonmobile"))return!1;0!=e.find("iframe").length||"youtube"!=k&&"vimeo"!=k||(e.append(e.data("videomarkup")),r(e,o,!1))}"none"!=e.data("dottedoverlay")&&void 0!=e.data("dottedoverlay")&&1!=e.find(".tp-dottedoverlay").length&&e.append('<div class="tp-dottedoverlay '+e.data("dottedoverlay")+'"></div>'),e.addClass("HasListener"),1==e.data("bgvideo")&&punchgs.TweenLite.set(e.find("video, iframe"),{autoAlpha:0})}});var d=function(e,t,a){e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent(t,a,!1)},o=function(e,t,a){var i={};return i.video=e,i.videotype=t,i.settings=a,i},r=function(e,d,r){var l=e.find("iframe"),v="iframe"+Math.round(1e5*Math.random()+1),c=e.data("videoloop"),g="loopandnoslidestop"!=c;if(c="loop"==c||"loopandnoslidestop"==c,1==e.data("forcecover")){e.removeClass("fullscreenvideo").addClass("coverscreenvideo");var f=e.data("aspectratio");void 0!=f&&f.split(":").length>1&&a.prepareCoveredVideo(f,d,e)}if(1==e.data("bgvideo")){var f=e.data("aspectratio");void 0!=f&&f.split(":").length>1&&a.prepareCoveredVideo(f,d,e)}if(l.attr("id",v),r&&e.data("startvideonow",!0),1!==e.data("videolistenerexist"))switch(e.data("videotype")){case"youtube":var m=new YT.Player(v,{events:{onStateChange:function(i){var r=e.closest(".tp-simpleresponsive"),l=(e.data("videorate"),e.data("videostart"),s());if(i.data==YT.PlayerState.PLAYING)punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),"mute"==e.data("volume")||a.lastToggleState(e.data("videomutetoggledby"))||d.globalmute===!0?m.mute():(m.unMute(),m.setVolume(parseInt(e.data("volume"),0)||75)),d.videoplaying=!0,u(e,d),g?d.c.trigger("stoptimer"):d.videoplaying=!1,d.c.trigger("revolution.slide.onvideoplay",o(m,"youtube",e.data())),a.toggleState(e.data("videotoggledby"));else{if(0==i.data&&c){var v=t(e.data("videostartat"));-1!=v&&m.seekTo(v),m.playVideo(),a.toggleState(e.data("videotoggledby"))}!l&&(0==i.data||2==i.data)&&"on"==e.data("showcoveronpause")&&e.find(".tp-videoposter").length>0&&(punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),-1!=i.data&&3!=i.data&&(d.videoplaying=!1,d.tonpause=!1,p(e,d),r.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",o(m,"youtube",e.data())),(void 0==d.currentLayerVideoIsPlaying||d.currentLayerVideoIsPlaying.attr("id")==e.attr("id"))&&a.unToggleState(e.data("videotoggledby"))),0==i.data&&1==e.data("nextslideatend")?(n(),e.data("nextslideatend-triggered",1),d.c.revnext(),p(e,d)):(p(e,d),d.videoplaying=!1,r.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",o(m,"youtube",e.data())),(void 0==d.currentLayerVideoIsPlaying||d.currentLayerVideoIsPlaying.attr("id")==e.attr("id"))&&a.unToggleState(e.data("videotoggledby")))}},onReady:function(a){var d=e.data("videorate");e.data("videostart");if(e.addClass("rs-apiready"),void 0!=d&&a.target.setPlaybackRate(parseFloat(d)),e.find(".tp-videoposter").unbind("click"),e.find(".tp-videoposter").click(function(){i||m.playVideo()}),e.data("startvideonow")){e.data("player").playVideo();var o=t(e.data("videostartat"));-1!=o&&e.data("player").seekTo(o)}e.data("videolistenerexist",1)}}});e.data("player",m);break;case"vimeo":for(var y,h=l.attr("src"),b={},w=h,k=/([^&=]+)=([^&]*)/g;y=k.exec(w);)b[decodeURIComponent(y[1])]=decodeURIComponent(y[2]);h=void 0!=b.player_id?h.replace(b.player_id,v):h+"&player_id="+v;try{h=h.replace("api=0","api=1")}catch(T){}h+="&api=1",l.attr("src",h);var m=e.find("iframe")[0],x=(jQuery("#"+v),$f(v));x.addEvent("ready",function(){if(e.addClass("rs-apiready"),x.addEvent("play",function(t){e.data("nextslidecalled",0),punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),d.c.trigger("revolution.slide.onvideoplay",o(x,"vimeo",e.data())),d.videoplaying=!0,u(e,d),g?d.c.trigger("stoptimer"):d.videoplaying=!1,"mute"==e.data("volume")||a.lastToggleState(e.data("videomutetoggledby"))||d.globalmute===!0?x.api("setVolume","0"):x.api("setVolume",parseInt(e.data("volume"),0)/100||.75),a.toggleState(e.data("videotoggledby"))}),x.addEvent("playProgress",function(a){var i=t(e.data("videoendat"));if(e.data("currenttime",a.seconds),0!=i&&Math.abs(i-a.seconds)<.3&&i>a.seconds&&1!=e.data("nextslidecalled"))if(c){x.api("play");var o=t(e.data("videostartat"));-1!=o&&x.api("seekTo",o)}else 1==e.data("nextslideatend")&&(e.data("nextslideatend-triggered",1),e.data("nextslidecalled",1),d.c.revnext()),x.api("pause")}),x.addEvent("finish",function(t){p(e,d),d.videoplaying=!1,d.c.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",o(x,"vimeo",e.data())),1==e.data("nextslideatend")&&(e.data("nextslideatend-triggered",1),d.c.revnext()),(void 0==d.currentLayerVideoIsPlaying||d.currentLayerVideoIsPlaying.attr("id")==e.attr("id"))&&a.unToggleState(e.data("videotoggledby"))}),x.addEvent("pause",function(t){e.find(".tp-videoposter").length>0&&"on"==e.data("showcoveronpause")&&(punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),d.videoplaying=!1,d.tonpause=!1,p(e,d),d.c.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",o(x,"vimeo",e.data())),(void 0==d.currentLayerVideoIsPlaying||d.currentLayerVideoIsPlaying.attr("id")==e.attr("id"))&&a.unToggleState(e.data("videotoggledby"))}),e.find(".tp-videoposter").unbind("click"),e.find(".tp-videoposter").click(function(){return i?void 0:(x.api("play"),!1)}),e.data("startvideonow")){x.api("play");var r=t(e.data("videostartat"));-1!=r&&x.api("seekTo",r)}e.data("videolistenerexist",1)})}else{var L=t(e.data("videostartat"));switch(e.data("videotype")){case"youtube":r&&(e.data("player").playVideo(),-1!=L&&e.data("player").seekTo());break;case"vimeo":if(r){var x=$f(e.find("iframe").attr("id"));x.api("play"),-1!=L&&x.api("seekTo",L)}}}},n=function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},s=function(){try{if(void 0!==window.fullScreen)return window.fullScreen;var e=5;return jQuery.browser.webkit&&/Apple Computer/.test(navigator.vendor)&&(e=42),screen.width==window.innerWidth&&Math.abs(screen.height-window.innerHeight)<e}catch(t){}},l=function(e,r,l){if(i&&1==e.data("disablevideoonmobile"))return!1;var v="html5"==e.data("audio")?"audio":"video",c=e.find(v),g=c[0],f=c.parent(),m=e.data("videoloop"),y="loopandnoslidestop"!=m;if(m="loop"==m||"loopandnoslidestop"==m,f.data("metaloaded",1),1!=e.data("bgvideo")||"none"!==e.data("videoloop")&&e.data("videoloop")!==!1||(y=!1),void 0==c.attr("control")&&(0!=e.find(".tp-video-play-button").length||i||e.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'),e.find("video, .tp-poster, .tp-video-play-button").click(function(){e.hasClass("videoisplaying")?g.pause():g.play()})),1==e.data("forcecover")||e.hasClass("fullscreenvideo")||1==e.data("bgvideo"))if(1==e.data("forcecover")||1==e.data("bgvideo")){f.addClass("fullcoveredvideo");var h=e.data("aspectratio")||"4:3";a.prepareCoveredVideo(h,r,e)}else f.addClass("fullscreenvideo");var b=e.find(".tp-vid-play-pause")[0],w=e.find(".tp-vid-mute")[0],k=e.find(".tp-vid-full-screen")[0],T=e.find(".tp-seek-bar")[0],x=e.find(".tp-volume-bar")[0];void 0!=b&&d(b,"click",function(){1==g.paused?g.play():g.pause()}),void 0!=w&&d(w,"click",function(){0==g.muted?(g.muted=!0,w.innerHTML="Unmute"):(g.muted=!1,w.innerHTML="Mute")}),void 0!=k&&k&&d(k,"click",function(){g.requestFullscreen?g.requestFullscreen():g.mozRequestFullScreen?g.mozRequestFullScreen():g.webkitRequestFullscreen&&g.webkitRequestFullscreen()}),void 0!=T&&(d(T,"change",function(){var e=g.duration*(T.value/100);g.currentTime=e}),d(T,"mousedown",function(){e.addClass("seekbardragged"),g.pause()}),d(T,"mouseup",function(){e.removeClass("seekbardragged"),g.play()})),d(g,"canplaythrough",function(){a.preLoadAudioDone(e,r,"canplaythrough")}),d(g,"canplay",function(){a.preLoadAudioDone(e,r,"canplay")}),d(g,"progress",function(){a.preLoadAudioDone(e,r,"progress")}),d(g,"timeupdate",function(){var a=100/g.duration*g.currentTime,i=t(e.data("videoendat")),d=g.currentTime;if(void 0!=T&&(T.value=a),0!=i&&-1!=i&&Math.abs(i-d)<=.3&&i>d&&1!=e.data("nextslidecalled"))if(m){g.play();var o=t(e.data("videostartat"));-1!=o&&(g.currentTime=o)}else 1==e.data("nextslideatend")&&(e.data("nextslideatend-triggered",1),e.data("nextslidecalled",1),r.just_called_nextslide_at_htmltimer=!0,r.c.revnext(),setTimeout(function(){r.just_called_nextslide_at_htmltimer=!1},1e3)),g.pause()}),void 0!=x&&d(x,"change",function(){g.volume=x.value}),d(g,"play",function(){e.data("nextslidecalled",0);var t=e.data("volume");t=void 0!=t&&"mute"!=t?parseFloat(t)/100:t,r.globalmute===!0?g.muted=!0:g.muted=!1,t>1&&(t/=100),"mute"==t?g.muted=!0:void 0!=t&&(g.volume=t),e.addClass("videoisplaying");var i="html5"==e.data("audio")?"audio":"video";u(e,r),y&&"audio"!=i?(r.videoplaying=!0,r.c.trigger("stoptimer"),r.c.trigger("revolution.slide.onvideoplay",o(g,"html5",e.data()))):(r.videoplaying=!1,"audio"!=i&&r.c.trigger("starttimer"),r.c.trigger("revolution.slide.onvideostop",o(g,"html5",e.data()))),punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find(i),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});var d=e.find(".tp-vid-play-pause")[0],n=e.find(".tp-vid-mute")[0];void 0!=d&&(d.innerHTML="Pause"),void 0!=n&&g.muted&&(n.innerHTML="Unmute"),a.toggleState(e.data("videotoggledby"))}),d(g,"pause",function(){var t="html5"==e.data("audio")?"audio":"video",i=s();!i&&e.find(".tp-videoposter").length>0&&"on"==e.data("showcoveronpause")&&!e.hasClass("seekbardragged")&&(punchgs.TweenLite.to(e.find(".tp-videoposter"),.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find(t),.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),e.removeClass("videoisplaying"),r.videoplaying=!1,p(e,r),"audio"!=t&&r.c.trigger("starttimer"),r.c.trigger("revolution.slide.onvideostop",o(g,"html5",e.data()));var d=e.find(".tp-vid-play-pause")[0];void 0!=d&&(d.innerHTML="Play"),(void 0==r.currentLayerVideoIsPlaying||r.currentLayerVideoIsPlaying.attr("id")==e.attr("id"))&&a.unToggleState(e.data("videotoggledby"))}),d(g,"ended",function(){n(),p(e,r),r.videoplaying=!1,p(e,r),"audio"!=v&&r.c.trigger("starttimer"),r.c.trigger("revolution.slide.onvideostop",o(g,"html5",e.data())),e.data("nextslideatend")===!0&&(1==!r.just_called_nextslide_at_htmltimer&&(e.data("nextslideatend-triggered",1),r.c.revnext(),r.just_called_nextslide_at_htmltimer=!0),setTimeout(function(){r.just_called_nextslide_at_htmltimer=!1},1500)),e.removeClass("videoisplaying")})},u=function(e,t){void 0==t.playingvideos&&(t.playingvideos=new Array),e.data("stopallvideos")&&void 0!=t.playingvideos&&t.playingvideos.length>0&&(t.lastplayedvideos=jQuery.extend(!0,[],t.playingvideos),jQuery.each(t.playingvideos,function(e,i){a.stopVideo(i,t)})),t.playingvideos.push(e),t.currentLayerVideoIsPlaying=e},p=function(e,t){void 0!=t.playingvideos&&jQuery.inArray(e,t.playingvideos)>=0&&t.playingvideos.splice(jQuery.inArray(e,t.playingvideos),1)}}(jQuery);

// Commom Plugins
(function($) {

	'use strict';

	// Scroll to Top Button.
	if (typeof theme.PluginScrollToTop !== 'undefined') {
		theme.PluginScrollToTop.initialize();
	}

	// Tooltips
	if ($.isFunction($.fn['tooltip'])) {
		$('[data-tooltip]:not(.manual), [data-plugin-tooltip]:not(.manual)').tooltip();
	}

	// Popover
	if ($.isFunction($.fn['popover'])) {
		$(function() {
			$('[data-plugin-popover]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.popover(opts);
			});
		});
	}

	// Validations
	if (typeof theme.PluginValidation !== 'undefined') {
		theme.PluginValidation.initialize();
	}

	// Parallax
	if (typeof theme.PluginParallax !== 'undefined') {
		theme.PluginParallax.initialize();
	}

	// Match Height
	if ($.isFunction($.fn['matchHeight'])) {

		$('.match-height').matchHeight();

		// Featured Boxes
		$('.featured-boxes .featured-box').matchHeight();

		// Featured Box Full
		$('.featured-box-full').matchHeight();

	}

}).apply(this, [jQuery]);

// Animate
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginAnimate'])) {

		$(function() {
			$('[data-plugin-animate], [data-appear-animation]').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginAnimate(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Carousel
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginCarousel'])) {

		$(function() {
			$('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginCarousel(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Chart.Circular
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginChartCircular'])) {

		$(function() {
			$('[data-plugin-chart-circular]:not(.manual), .circular-bar-chart:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginChartCircular(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Counter
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginCounter'])) {

		$(function() {
			$('[data-plugin-counter]:not(.manual), .counters [data-to]').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginCounter(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Lazy Load
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginLazyLoad'])) {

		$(function() {
			$('[data-plugin-lazyload]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginLazyLoad(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Lightbox
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginLightbox'])) {

		$(function() {
			$('[data-plugin-lightbox]:not(.manual), .lightbox:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginLightbox(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Masonry
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginMasonry'])) {

		$(function() {
			$('[data-plugin-masonry]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginMasonry(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Match Height
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginMatchHeight'])) {

		$(function() {
			$('[data-plugin-match-height]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginMatchHeight(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Progress Bar
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginProgressBar'])) {

		$(function() {
			$('[data-plugin-progress-bar]:not(.manual), [data-appear-progress-animation]').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginProgressBar(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Revolution Slider
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginRevolutionSlider'])) {

		$(function() {
			$('[data-plugin-revolution-slider]:not(.manual), .slider-container .slider:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginRevolutionSlider(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Sort
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginSort'])) {

		$(function() {
			$('[data-plugin-sort]:not(.manual), .sort-source:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginSort(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Sticky
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginSticky'])) {

		$(function() {
			$('[data-plugin-sticky]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginSticky(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Toggle
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginToggle'])) {

		$(function() {
			$('[data-plugin-toggle]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginToggle(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Tweets
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginTweets'])) {

		$(function() {
			$('[data-plugin-tweets]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginTweets(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Video Background
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginVideoBackground'])) {

		$(function() {
			$('[data-plugin-video-background]:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginVideoBackground(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Word Rotate
(function($) {

	'use strict';

	if ($.isFunction($.fn['themePluginWordRotate'])) {

		$(function() {
			$('[data-plugin-word-rotate]:not(.manual), .word-rotate:not(.manual)').each(function() {
				var $this = $(this),
					opts;

				var pluginOptions = $this.data('plugin-options');
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginWordRotate(opts);
			});
		});

	}

}).apply(this, [jQuery]);

// Commom Partials
(function($) {

	'use strict';

	// Sticky Header
	if (typeof theme.StickyHeader !== 'undefined') {
		theme.StickyHeader.initialize();
	}

	// Nav Menu
	if (typeof theme.Nav !== 'undefined') {
		theme.Nav.initialize();
	}

	// Search
	if (typeof theme.Search !== 'undefined') {
		theme.Search.initialize();
	}

	// Newsletter
	if (typeof theme.Newsletter !== 'undefined') {
		theme.Newsletter.initialize();
	}

	// Account
	if (typeof theme.Account !== 'undefined') {
		theme.Account.initialize();
	}

}).apply(this, [jQuery]);
(function($) {

    'use strict';

    /*
     Contact Form: Basic
     */
    $('#bookForm').validate({
        submitHandler: function(form) {

            var $form = $(form),
                $messageSuccess = $('#contactSuccess1'),
                $messageError = $('#contactError1'),
                $submitButton = $(this.submitButton),
                $errorMessage = $('#mailErrorMessage');

            $submitButton.button('loading');

            // Ajax Submit
            $.ajax({
                type: 'POST',
                url: $form.attr('action'),
                data: {
                    name: $form.find('#name').val(),
                    email: $form.find('#email').val(),
                    subject: $form.find('#phone').val(),
                    message: $form.find('#message').val()
                }
            }).always(function(data, textStatus, jqXHR) {

                $errorMessage.empty().hide();

                if (data.response == 'success') {

                    $messageSuccess.removeClass('hidden');
                    $messageError.addClass('hidden');

                    // Reset Form
                    $form.find('.form-control')
                        .val('')
                        .blur()
                        .parent()
                        .removeClass('has-success')
                        .removeClass('has-error')
                        .find('label.error')
                        .remove();

                    if (($messageSuccess.offset().top - 80) < $(window).scrollTop()) {
                        $('html, body').animate({
                            scrollTop: $messageSuccess.offset().top - 80
                        }, 300);
                    }

                    $submitButton.button('reset');

                    return;

                } else if (data.response == 'error' && typeof data.errorMessage !== 'undefined') {
                    $errorMessage.html(data.errorMessage).show();
                } else {
                    $errorMessage.html(data.responseText).show();
                }

                $messageError.removeClass('hidden');
                $messageSuccess.addClass('hidden');

                if (($messageError.offset().top - 80) < $(window).scrollTop()) {
                    $('html, body').animate({
                        scrollTop: $messageError.offset().top - 80
                    }, 300);
                }

                $form.find('.has-success')
                    .removeClass('has-success');

                $submitButton.button('reset');

            });
        }
    });

}).apply(this, [jQuery]);
(function($) {

	'use strict';

	/*
	Contact Form: Basic
	*/
	$('#contactForm').validate({
		submitHandler: function(form) {

			var $form = $(form),
				$messageSuccess = $('#contactSuccess'),
				$messageError = $('#contactError'),
				$submitButton = $(this.submitButton),
				$errorMessage = $('#mailErrorMessage');

			$submitButton.button('loading');

			// Ajax Submit
			$.ajax({
				type: 'POST',
				url: $form.attr('action'),
				data: {
					name: $form.find('#name').val(),
					email: $form.find('#email').val(),
					subject: $form.find('#phone').val(),
					message: $form.find('#message').val()
				}
			}).always(function(data, textStatus, jqXHR) {

				$errorMessage.empty().hide();

				if (data.response == 'success') {

					$messageSuccess.removeClass('hidden');
					$messageError.addClass('hidden');

					// Reset Form
					$form.find('.form-control')
						.val('')
						.blur()
						.parent()
						.removeClass('has-success')
						.removeClass('has-error')
						.find('label.error')
						.remove();

					if (($messageSuccess.offset().top - 80) < $(window).scrollTop()) {
						$('html, body').animate({
							scrollTop: $messageSuccess.offset().top - 80
						}, 300);
					}

					$submitButton.button('reset');

					return;

				} else if (data.response == 'error' && typeof data.errorMessage !== 'undefined') {
					$errorMessage.html(data.errorMessage).show();
				} else {
					$errorMessage.html(data.responseText).show();
				}

				$messageError.removeClass('hidden');
				$messageSuccess.addClass('hidden');

				if (($messageError.offset().top - 80) < $(window).scrollTop()) {
					$('html, body').animate({
						scrollTop: $messageError.offset().top - 80
					}, 300);
				}

				$form.find('.has-success')
					.removeClass('has-success');

				$submitButton.button('reset');

			});
		}
	});

}).apply(this, [jQuery]);
function loadhtml(e) {
    var t = "        <div id='clicktocallPopup'>                <div class='click_to_call_form_wrapper'>                    <div class='click_to_call_form'>                        <div id='clicktocall_div' style='margin-top:1px;''>                                <div class='sr_c2c_modal_heading' style='display: none'>                                    <label id='sr_c2c__heading' style='padding-right:8px;'>Agent Number:</label>                                    <select id='sr_c2c_agent_numsDD'>                                        <option value='agent_number'>agent_number</option>                                    </select>                                </div>                                <input type='text'  id='click2call_cust_text' placeholder='Enter Number' maxlength='15' class='widget_tb'/>                                <span class='call_button'>                                    <button type='submit'  class='widget_c2c_button' id='click2call_submitbtn' style='border-radius:5px; background-color:#ff9800;color:#ffffff;margin-top: 9px'>Submit</button>                                </span>                        </div>                    </div>                    <div id='click2call_success' style='display: none' class='success_C2C'>                        Call placed.                    </div>                    <div id='click2call_failure' style='display: none' class='failure_C2C'>                        Failure.                    </div>                </div>                          </div>".replace(/agent_number/g, e.agentNum);
    $('#call').html(t);
}

function loadClick2Call(e) {
    function t(e) {
        var t = /(^\+(\d{10}|\d{12}|\d{11}|\d{13}|\d{14})|^(1800(\d{6}|\d{7}|\d{8}))|^(1888(\d{6}|\d{7}|\d{8})))$/;
        return !e || !jQuery.trim(e) || !t.test(e) ? !1 : !0
    }
    jQuery("#click2call_submitbtn").unbind("click").click(function(n) {
        n.preventDefault(), jQuery("#click2call_submitbtn").attr("disabled", !0), jQuery("#click2call_failure").hide();
        var r = e.agentNum,
            i = jQuery("#click2call_cust_text").val(),
            s = {
                api_key: e.apiKey,
                agent_number: r,
                phone_number: i,
                sr_number: e.srnumber
            };
        t(i.toString()) && t(i.toString()) ? jQuery.ajax({
            url: "https://sr.knowlarity.com/vr/api/click2call/",
            type: "POST",
            data: s,
            cache: !1,
            success: function(e) {
                jQuery(".click_to_call_form").hide(), jQuery("#click2call_success").show(), setTimeout(function() {
                    jQuery(".click_to_call_form").show(), jQuery("#click2call_success").hide()
                }, 5e3), jQuery("#click2call_submitbtn").attr("disabled", !1)
            },
            error: function(e, t, n) {
                jQuery(".click_to_call_form").hide(), jQuery("#click2call_failure").show(), setTimeout(function() {
                    jQuery("#click2call_failure").hide(), jQuery(".click_to_call_form").show()
                }, 5e3), jQuery("#click2call_submitbtn").attr("disabled", !1)
            }
        }) : (alert("Number should be in international format like +919999988888."), jQuery("#click2call_submitbtn").attr("disabled", !1))
    })
}

function init(e, t, n) {
    var r = {
        apiKey: e,
        agentNum: n,
        srnumber: t
    };
    if (typeof jQuery == "undefined") {
        typeof $ == "function" && (thisPageUsingOtherJSLibrary = !0);

        function i(e, t) {
            var n = document.createElement("script");
            n.src = e;
            var r = document.getElementsByTagName("head")[0],
                i = !1;
            n.onload = n.onreadystatechange = function() {
                !i && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") && (i = !0, t(), n.onload = n.onreadystatechange = null, r.removeChild(n))
            }, r.appendChild(n)
        }
        i("http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js", function() {
            loadhtml(r), loadClick2Call(r)
        })
    } else loadhtml(r), loadClick2Call(r)
};
(function($) {

    'use strict';

    /*
     Contact Form: Basic
     */
    $('#sendlinkForm').validate({
        submitHandler: function(form) {

            var $form = $(form),
                $messageSuccess = $('#contactSuccess2'),
                $messageError = $('#contactError2'),
                $submitButton = $(this.submitButton),
                $errorMessage = $('#mailErrorMessage');

            $submitButton.button('loading');
            var phone=["+91"+$('#phone').val()];
            var smaPayload = {
                "phone_numbers": phone,
                "message": "Thank you for your interest in MotorZo. Download the App from https://goo.gl/cbc0kV to enjoy a hassle free car service experience!"
            };
            console.log("length"+smaPayload.message.length)
            // Ajax Submit
            $.ajax({
                type: 'POST',
                url: 'http://52.77.114.42:19010/sms',
                contentType:"application/json; charset=utf-8",
                data:JSON.stringify(smaPayload),
                dataType:"json",
                beforeSend: function (xhr) {
                    /* Authorization header */
                    xhr.setRequestHeader("Authorization", "Bearer a35cfd1b-94d6-431a-a5b1-ba799dc9ddf0");
                }
            }).always(function(data, textStatus, jqXHR) {

                $errorMessage.empty().hide();

                if (textStatus) {

                    $messageSuccess.removeClass('hidden');
                    $messageError.addClass('hidden');

                    // Reset Form
                    $form.find('.form-control')
                        .val('')
                        .blur()
                        .parent()
                        .removeClass('has-success')
                        .removeClass('has-error')
                        .find('label.error')
                        .remove();

                    if (($messageSuccess.offset().top - 80) < $(window).scrollTop()) {
                        $('html, body').animate({
                            scrollTop: $messageSuccess.offset().top - 80
                        }, 300);
                    }

                    $submitButton.button('reset');

                    return;

                } else if (data.response == 'error' && typeof data.errorMessage !== 'undefined') {
                    $errorMessage.html(data.errorMessage).show();
                } else {
                    $errorMessage.html(data.responseText).show();
                }

                $messageError.removeClass('hidden');
                $messageSuccess.addClass('hidden');

                if (($messageError.offset().top - 80) < $(window).scrollTop()) {
                    $('html, body').animate({
                        scrollTop: $messageError.offset().top - 80
                    }, 300);
                }

                $form.find('.has-success')
                    .removeClass('has-success');

                $submitButton.button('reset');

            });
        }
    });

}).apply(this, [jQuery]);