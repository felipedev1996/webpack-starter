(()=>{"use strict";function a(d){if(c[d])return c[d].exports;var e=c[d]={id:d,exports:{}};return b[d](e,e.exports,a),e.exports}var b={994:(a,b,c)=>{c.d(b,{Z:()=>g});var d=c(645),e=c.n(d),f=e()(function(a){return a[1]});f.push([a.id,"h1 {\r\n    color:red;\r\n}",""]);const g=f},645:(a)=>{a.exports=function(a){var b=[];return b.toString=function(){return this.map(function(b){var c=a(b);return b[2]?"@media ".concat(b[2]," {").concat(c,"}"):c}).join("")},b.i=function(a,c,d){"string"==typeof a&&(a=[[null,a,""]]);var e={};if(d)for(var f,g=0;g<this.length;g++)f=this[g][0],null!=f&&(e[f]=!0);for(var h,i=0;i<a.length;i++)(h=[].concat(a[i]),!(d&&e[h[0]]))&&(c&&(h[2]?h[2]="".concat(c," and ").concat(h[2]):h[2]=c),b.push(h))},b}},379:(a,b,c)=>{function d(a){for(var b=-1,c=0;c<m.length;c++)if(m[c].identifier===a){b=c;break}return b}function e(a,b){for(var c={},e=[],f=0;f<a.length;f++){var g=a[f],h=b.base?g[0]+b.base:g[0],i=c[h]||0,k="".concat(h," ").concat(i);c[h]=i+1;var l=d(k),n={css:g[1],media:g[2],sourceMap:g[3]};-1===l?m.push({identifier:k,updater:j(n,b),references:1}):(m[l].references++,m[l].updater(n)),e.push(k)}return e}function f(a){var b=document.createElement("style"),d=a.attributes||{};if("undefined"==typeof d.nonce){var e=c.nc;e&&(d.nonce=e)}if(Object.keys(d).forEach(function(a){b.setAttribute(a,d[a])}),"function"==typeof a.insert)a.insert(b);else{var f=l(a.insert||"head");if(!f)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");f.appendChild(b)}return b}function g(a){return null!==a.parentNode&&void a.parentNode.removeChild(a)}function h(a,b,c,d){var e=c?"":d.media?"@media ".concat(d.media," {").concat(d.css,"}"):d.css;if(a.styleSheet)a.styleSheet.cssText=n(b,e);else{var f=document.createTextNode(e),g=a.childNodes;g[b]&&a.removeChild(g[b]),g.length?a.insertBefore(f,g[b]):a.appendChild(f)}}function i(a,b,c){var d=c.css,e=c.media,f=c.sourceMap;if(e?a.setAttribute("media",e):a.removeAttribute("media"),f&&"undefined"!=typeof btoa&&(d+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(f))))," */")),a.styleSheet)a.styleSheet.cssText=d;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(d))}}function j(a,b){var c,d,e;if(b.singleton){var j=p++;c=o||(o=f(b)),d=h.bind(null,c,j,!1),e=h.bind(null,c,j,!0)}else c=f(b),d=i.bind(null,c,b),e=function(){g(c)};return d(a),function(b){if(b){if(b.css===a.css&&b.media===a.media&&b.sourceMap===a.sourceMap)return;d(a=b)}else e()}}var k=function(){var a;return function(){return"undefined"==typeof a&&(a=!!(window&&document&&document.all&&!window.atob)),a}}(),l=function(){var a={};return function(b){if("undefined"==typeof a[b]){var c=document.querySelector(b);if(window.HTMLIFrameElement&&c instanceof window.HTMLIFrameElement)try{c=c.contentDocument.head}catch(a){c=null}a[b]=c}return a[b]}}(),m=[],n=function(){var a=[];return function(b,c){return a[b]=c,a.filter(Boolean).join("\n")}}(),o=null,p=0;a.exports=function(a,b){b=b||{},b.singleton||"boolean"==typeof b.singleton||(b.singleton=k()),a=a||[];var c=e(a,b);return function(a){if(a=a||[],"[object Array]"===Object.prototype.toString.call(a)){for(var f=0;f<c.length;f++){var g=c[f],h=d(g);m[h].references--}for(var i=e(a,b),j=0;j<c.length;j++){var k=c[j],l=d(k);0===m[l].references&&(m[l].updater(),m.splice(l,1))}c=i}}}}},c={};(()=>{a.n=(b)=>{var c=b&&b.__esModule?()=>b["default"]:()=>b;return a.d(c,{a:c}),c}})(),(()=>{a.d=(b,c)=>{for(var d in c)a.o(c,d)&&!a.o(b,d)&&Object.defineProperty(b,d,{enumerable:!0,get:c[d]})}})(),(()=>{a.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b)})();(()=>{var b=a(379),c=a.n(b),d=a(994);c()(d.Z,{insert:"head",singleton:!1});d.Z.locals||{};(function(c){console.log("CREANDO ETIQUETA H1");var a=document.createElement("h1");a.innerText="Hola ".concat(c),document.body.append(a)})("Felipe")})()})();