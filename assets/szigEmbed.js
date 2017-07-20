/*! szig-embed v1.3.1 2017-07-18T13:41:25.794Z */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var s=n[r]={exports:{},id:r,loaded:!1};return t[r].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(8),s=n(2),i="start",o="end",a=s.call({ACTIVE:!1,lastUpdateTime:0,init:function(){window.addEventListener("resize",function(){a.listen()})},listen:function(){if(this.lastUpdateTime=Date.now(),!this.ACTIVE){var t=this;this.ACTIVE=setInterval(function(){t.checkEndEvent()},100),this.notify(i)}},checkEndEvent:function(){var t=Date.now();t-this.lastUpdateTime>200&&(clearInterval(this.ACTIVE),this.ACTIVE=!1,this.notify(o))}},[i,o]);document.addEventListener("DOMContentLoaded",function(){a.init(),r.init(),r.observe(a,o),a.notify(o),window.szEmbedService=r,window.szViewportSizeService=a})},,function(t,e){"use strict";function n(){var t,e,n,r=Array.prototype.shift.apply(arguments);if(null==this.observers[r])throw new Error("Unknown event "+r+" for observable ("+Object.keys(this.observers).join(",")+")");if(0===this.observers[r].length)return!1;for(n=this.observers[r],t=0,e=n.length;t<e;t+=1)n[t].apply(n[t],arguments);return!0}function r(t,e){if(null==this.observers[t])throw new Error("Invalid event "+t+" for observable");return"function"==typeof e&&this.observers[t].push(e),this}function s(t,e){null!=this.observers[t]&&(this.observers[t]=this.observers[t].filter(function(t){return t!==e}))}function i(t,e){var n=this;return r.call(this,t,function i(){s.call(n,t,i),e.apply(this,arguments)})}function o(t){if(Array.isArray(t))o.apply(this,t);else for(var e=0,n=arguments.length;e<n;e+=1)this[arguments[e]]=[]}function a(t){var e={};if(0===arguments.length||0===t.length)throw new Error("Missing eventList for observable");for(var a=0,h=arguments.length;a<h;a+=1)o.call(e,arguments[a]);return this.observers=e,this.addObserver=r,this.addObserverOnce=i,this.removeObserver=s,this.notify=n,this}a.dispose=function(){delete this.observers,delete this.addObserver,delete this.addObserverOnce,delete this.removeObserver,delete this.notify},t.exports=a},function(t,e){"use strict";function n(t){var e;try{e=JSON.parse(t)}catch(n){return""}return"[object Object]"!==Object.prototype.toString.call(e)?"":"string"!=typeof e.type?"":e}t.exports={parseString:n}},,,,,function(t,e,n){"use strict";var r=n(3),s=n(2),i={UPDATE_CONFIG_EVENT:"updateConfig",bodyBackgroundColor:"#fff",tasks:{"update:config":function(t,e){i.notify(e.UPDATE_CONFIG_EVENT,t.data)}},init:function(){return this.observers?this:(s.call(this,[this.UPDATE_CONFIG_EVENT]),window.addEventListener("message",function(t){i.processMessage(t)},!1),this.bodyBackgroundColor!==!1&&(document.body.style.backgroundColor=this.bodyBackgroundColor),this)},observe:function(t,e){var n=this;t.addObserver(e,function(){n.setDocumentHeight()})},getConfig:function(){return this.sendTask("get:config"),this},setHeight:function(t){return this.sendTask("update:height",{height:t}),this},runTask:function(t){var e=t.type;return this.tasks[e]&&this.tasks[e](t,this),this},sendTask:function(t,e){return e=e||{},e.type=t,e=JSON.stringify(e),window.parent.postMessage(e,"*"),this},processMessage:function(t){var e=r.parseString(t.data);return e&&this.runTask(e),this},setDocumentHeight:function(){var t=document.body.getBoundingClientRect(),e=Math.ceil(t.bottom+t.top)+"px";return this.__lastHeight===e?e:(this.__lastHeight=e,this.setHeight(e))}};t.exports=i}])});
